====================================
Getting Started with the LLVM System
====================================

.. contents::
   :local:

* `Getting Started with the LLVM System <#GettingStarted>`__
* `Getting Started with the LLVM System using Microsoft Visual Studio <#GettingStartedMSVC>`__
* `Creating an LLVM Project <#CreattingProject>`__
* LLVM Tutorial: Table of Contents
 *  Kaleidoscope: Implementing a Language with LLVM 
    1.  `Kaleidoscope: Kaleidoscope Introduction and the Lexer <#LangImpl01>`__
    2.  `Kaleidoscope: Implementing a Parser and AST <#LangImpl02>`__
    3.  `Kaleidoscope: Code generation to LLVM IR <#LangImpl03>`__
    4.  `Kaleidoscope: Adding JIT and Optimizer Support <#LangImpl04>`__
    5.  `Kaleidoscope: Extending the Language: Control Flow <#LangImpl05>`__
    6.  `Kaleidoscope: Extending the Language: User-defined Operators <#LangImpl06>`__
    7.  `Kaleidoscope: Extending the Language: Mutable Variables <#LangImpl07>`__
    8.  `Kaleidoscope: Compiling to Object Code <#LangImpl08>`__
    9.  `Kaleidoscope: Adding Debug Information <#LangImpl09>`__
    10. `Kaleidoscope: Conclusion and other useful LLVM tidbits <#LangImpl10>`__
 *  Building a JIT in LLVM
    1. `Building a JIT: Starting out with KaleidoscopeJIT <#BuildingAJIT1>`__
    2. `Building a JIT: Adding Optimizations – An introduction to ORC Layers <#BuildingAJIT2>`__
    3. `Building a JIT: Per-function Lazy Compilation <#BuildingAJIT3>`__
    4. `Building a JIT: Extreme Laziness - Using LazyReexports to JIT from ASTs <#BuildingAJIT4>`__
    5. `Building a JIT: Remote-JITing – Process Isolation and Laziness at a Distance <#BuildingAJIT5>`__
 *  External Tutorials
    1. `Tutorial: Creating an LLVM Backend for the Cpu0 Architecture
       <http://jonathan2251.github.io/lbd/>`__
    2. `Howto: Implementing LLVM Integrated Assembler
       <http://www.embecosm.com/appnotes/ean10/ean10-howto-llvmas-1.0.html>`__
 *  Advanced Topics
    1. Writing an Optimization for LLVM
    `The LLVM Compiler Framework and Infrastructure Tutorial <https://llvm.org/pubs/2004-09-22-LCPCLLVMTutorial.html>`__

.. NOTE::

    不同版本的文档存在差别，比如  `LLVM 9.0.1 <https://releases.llvm.org>`__ 
    就包含了使用 Objective Caml 语言实现的 Kaleidoscope 教程项目，还有包含 5 个章节的
    Building a JIT in LLVM，这些内容在后续的版本中是没有的。目录组织也有变化，新版本更合理。
    使用 C++ 与 LLVM 交互的开发者占据了绝对主流，相比之下，使用 OCaml 绑定的用户群体非常小。
    为了服务一个很小的群体而长期维护一套复杂的教程，从投入产出比上看是不划算的。LLVM 9.0.1
    时代的 Building a JIT 教程很可能基于相对陈旧且笨重的 MCJIT 框架。大致从 LLVM 10.0 开始，
    现代 LLVM 全面转向了更强大、更模块化也更易用的 ORCv2 JIT API。因此，最新文档中看到的
    Building a JIT 教程是一个全新的、基于 ORCv2 的系列教程，它更符合现代最佳实践。

    `Kaleidoscope: Implementing a Language with LLVM in Objective Caml <https://releases.llvm.org/9.0.1/docs/tutorial/index.html>`__

    1. Kaleidoscope: Tutorial Introduction and the Lexer
    2. Kaleidoscope: Implementing a Parser and AST
    3. Kaleidoscope: Code generation to LLVM IR
    4. Kaleidoscope: Adding JIT and Optimizer Support
    5. Kaleidoscope: Extending the Language: Control Flow
    6. Kaleidoscope: Extending the Language: User-defined Operators
    7. Kaleidoscope: Extending the Language: Mutable Variables
    8. Kaleidoscope: Conclusion and other useful LLVM tidbits 


.. _GettingStarted:

Overview
========

Welcome to the LLVM project!

The LLVM project has multiple components. The core of the project is
itself called "LLVM". This contains all of the tools, libraries, and header
files needed to process intermediate representations and convert them into
object files.  Tools include an assembler, disassembler, bitcode analyzer, and
bitcode optimizer.  It also contains basic regression tests.

C-like languages use the `Clang <https://clang.llvm.org/>`_ front end.  This
component compiles C, C++, Objective-C, and Objective-C++ code into LLVM bitcode
-- and from there into object files, using LLVM.

Other components include:
the `libc++ C++ standard library <https://libcxx.llvm.org>`_,
the `LLD linker <https://lld.llvm.org>`_, and more.

.. _sources:

Getting the Source Code and Building LLVM
=========================================

#. Check out LLVM (including subprojects like Clang):

   * ``git clone https://github.com/llvm/llvm-project.git``
   * Or, on Windows:

     ``git clone --config core.autocrlf=false
     https://github.com/llvm/llvm-project.git``
   * To save storage and speed up the checkout time, you may want to do a
     `shallow clone <https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt>`_.
     For example, to get the latest revision of the LLVM project, use

     ``git clone --depth 1 https://github.com/llvm/llvm-project.git``

   * You are likely not interested in the user branches in the repo (used for
     stacked pull requests and reverts), you can filter them from your
     `git fetch` (or `git pull`) with this configuration:

.. code-block:: console

  git config --add remote.origin.fetch '^refs/heads/users/*'
  git config --add remote.origin.fetch '^refs/heads/revert-*'

#. Configure and build LLVM and Clang:

   * ``cd llvm-project``
   * ``cmake -S llvm -B build -G <generator> [options]``

     Some common build system generators are:

     * ``Ninja`` --- for generating `Ninja <https://ninja-build.org>`_
       build files. Most llvm developers use Ninja.
     * ``Unix Makefiles`` --- for generating make-compatible parallel makefiles.
     * ``Visual Studio`` --- for generating Visual Studio projects and solutions.
     * ``Xcode`` --- for generating Xcode projects.

     * See the `CMake docs
       <https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html>`_
       for a more comprehensive list.

     Some common options:

     * ``-DLLVM_ENABLE_PROJECTS='...'`` --- A semicolon-separated list of the LLVM
       subprojects you'd like to additionally build. Can include any of: clang,
       clang-tools-extra, lldb, lld, polly, or cross-project-tests.

       For example, to build LLVM, Clang, and LLD, use
       ``-DLLVM_ENABLE_PROJECTS="clang;lld"``.

     * ``-DCMAKE_INSTALL_PREFIX=directory`` --- Specify for *directory* the full
       pathname of where you want the LLVM tools and libraries to be installed
       (default ``/usr/local``).

     * ``-DCMAKE_BUILD_TYPE=type`` --- Controls the optimization level and debug
       information of the build. Valid options for *type* are ``Debug``,
       ``Release``, ``RelWithDebInfo``, and ``MinSizeRel``. For more detailed
       information, see :ref:`CMAKE_BUILD_TYPE <cmake_build_type>`.

     * ``-DLLVM_ENABLE_ASSERTIONS=ON`` --- Compile with assertion checks enabled
       (default is ON for Debug builds, OFF for all other build types).

     * ``-DLLVM_USE_LINKER=lld`` --- Link with the `lld linker`_, assuming it
       is installed on your system. This can dramatically speed up link times
       if the default linker is slow.

     * ``-DLLVM_PARALLEL_{COMPILE,LINK,TABLEGEN}_JOBS=N`` --- Limit the number of
       compile/link/tablegen jobs running in parallel at the same time. This is
       especially important for linking since linking can use lots of memory. If
       you run into memory issues building LLVM, try setting this to limit the
       maximum number of compile/link/tablegen jobs running at the same time.

   * ``cmake --build build [--target <target>]`` or the build system specified
     above directly.

     * The default target (i.e. ``cmake --build build`` or ``make -C build``)
       will build all of LLVM.

     * The ``check-all`` target (i.e. ``ninja check-all``) will run the
       regression tests to ensure everything is in working order.

     * CMake will generate build targets for each tool and library, and most
       LLVM sub-projects generate their own ``check-<project>`` target.

     * Running a serial build will be **slow**.  To improve speed, try running a
       parallel build. That's done by default in Ninja; for ``make``, use the
       option ``-j NN``, where ``NN`` is the number of parallel jobs, e.g. the
       number of available CPUs.

   * A basic CMake and build/test invocation which only builds LLVM and no other
     subprojects:

     ``cmake -S llvm -B build -G Ninja -DCMAKE_BUILD_TYPE=Debug``

     ``ninja -C build check-llvm``

     This will set up an LLVM build with debugging info, then compile LLVM and
     run LLVM tests.

   * For more detailed information on CMake options, see `CMake <CMake.html>`__

   * If you get build or test failures, see `below`_.

Consult the `Getting Started with LLVM`_ section for detailed information on
configuring and compiling LLVM.  Go to `Directory Layout`_ to learn about the
layout of the source code tree.

Stand-alone Builds
------------------

Stand-alone builds allow you to build a sub-project against a pre-built
version of the clang or llvm libraries that is already present on your
system.

You can use the source code from a standard checkout of the llvm-project
(as described above) to do stand-alone builds, but you may also build
from a :ref:`sparse checkout<workflow-multicheckout-nocommit>` or from the
tarballs available on the `releases <https://github.com/llvm/llvm-project/releases/>`_
page.

For stand-alone builds, you must have an llvm install that is configured
properly to be consumable by stand-alone builds of the other projects.
This could be a distro-provided LLVM install, or you can build it yourself,
like this:

.. code-block:: console

  cmake -G Ninja -S path/to/llvm-project/llvm -B $builddir \
        -DLLVM_INSTALL_UTILS=ON \
        -DCMAKE_INSTALL_PREFIX=/path/to/llvm/install/prefix \
        < other options >

  ninja -C $builddir install

Once llvm is installed, to configure a project for a stand-alone build, invoke CMake like this:

.. code-block:: console

  cmake -G Ninja -S path/to/llvm-project/$subproj \
        -B $buildir_subproj \
        -DLLVM_EXTERNAL_LIT=/path/to/lit \
        -DLLVM_ROOT=/path/to/llvm/install/prefix

Notice that:

* The stand-alone build needs to happen in a folder that is not the
  original folder where LLVMN was built
  (`$builddir!=$builddir_subproj`).
* ``LLVM_ROOT`` should point to the prefix of your llvm installation,
  so for example, if llvm is installed into ``/usr/bin`` and
  ``/usr/lib64``, then you should pass ``-DLLVM_ROOT=/usr/``.
* Both the ``LLVM_ROOT`` and ``LLVM_EXTERNAL_LIT`` options are
  required to do stand-alone builds for all sub-projects.  Additional
  required options for each sub-project can be found in the table
  below.

The ``check-$subproj`` and ``install`` build targets are supported for the
sub-projects listed in the table below.

============ ======================== ======================
Sub-Project  Required Sub-Directories Required CMake Options
============ ======================== ======================
llvm         llvm, cmake, third-party LLVM_INSTALL_UTILS=ON
clang        clang, cmake             CLANG_INCLUDE_TESTS=ON (Required for check-clang only)
lld          lld, cmake
============ ======================== ======================

Example of building stand-alone `clang`:

.. code-block:: console

   #!/bin/sh

   build_llvm=`pwd`/build-llvm
   build_clang=`pwd`/build-clang
   installprefix=`pwd`/install
   llvm=`pwd`/llvm-project
   mkdir -p $build_llvm
   mkdir -p $installprefix

   cmake -G Ninja -S $llvm/llvm -B $build_llvm \
         -DLLVM_INSTALL_UTILS=ON \
         -DCMAKE_INSTALL_PREFIX=$installprefix \
         -DCMAKE_BUILD_TYPE=Release

   ninja -C $build_llvm install

   cmake -G Ninja -S $llvm/clang -B $build_clang \
         -DLLVM_EXTERNAL_LIT=$build_llvm/utils/lit \
         -DLLVM_ROOT=$installprefix

   ninja -C $build_clang

Requirements
============

Before you begin to use the LLVM system, review the requirements below.
This may save you some trouble by knowing ahead of time what hardware and
software you will need.

Hardware
--------

LLVM is known to work on the following host platforms:

================== ===================== ==============================
OS                 Arch                  Compilers
================== ===================== ==============================
Linux              x86\ :sup:`1`         GCC, Clang
Linux              amd64                 GCC, Clang
Linux              ARM                   GCC, Clang
Linux              AArch64               GCC, Clang
Linux              LoongArch             GCC, Clang
Linux              Mips                  GCC, Clang
Linux              PowerPC               GCC, Clang
Linux              RISC-V                GCC, Clang
Linux              SystemZ               GCC, Clang
Solaris            V9 (Ultrasparc)       GCC
DragonFlyBSD       amd64                 GCC, Clang
FreeBSD            x86\ :sup:`1`         GCC, Clang
FreeBSD            amd64                 GCC, Clang
FreeBSD            AArch64               GCC, Clang
NetBSD             x86\ :sup:`1`         GCC, Clang
NetBSD             amd64                 GCC, Clang
OpenBSD            x86\ :sup:`1`         GCC, Clang
OpenBSD            amd64                 GCC, Clang
macOS\ :sup:`2`    PowerPC               GCC
macOS              x86                   GCC, Clang
macOS              arm64                 Clang
Cygwin/Win32       x86\ :sup:`1, 3`      GCC
Windows            x86\ :sup:`1`         Visual Studio
Windows x64        x86-64                Visual Studio, Clang\ :sup:`4`
Windows on Arm     ARM64                 Visual Studio, Clang\ :sup:`4`
================== ===================== ==============================

.. note::

  #. Code generation supported for Pentium processors and up
  #. Code generation supported for 32-bit ABI only
  #. To use LLVM modules on a Win32-based system, you may configure LLVM
     with ``-DBUILD_SHARED_LIBS=On``.
  #. Visual Studio alone can compile LLVM. When using Clang, you
     must also have Visual Studio installed.

Note that Debug builds require a lot of time and disk space.  An LLVM-only build
will need about 1-3 GB of space.  A full build of LLVM and Clang will need around
15-20 GB of disk space.  The exact space requirements will vary by system.  (It
is so large because of all the debugging information and the fact that the
libraries are statically linked into multiple tools).

If you are space-constrained, you can build only selected tools or only
selected targets.  The Release build requires considerably less space.

The LLVM suite *may* compile on other platforms, but it is not guaranteed to do
so.  If compilation is successful, the LLVM utilities should be able to
assemble, disassemble, analyze, and optimize LLVM bitcode.  Code generation
should work as well, although the generated native code may not work on your
platform.

Software
--------

Compiling LLVM requires that you have several software packages installed. The
table below lists those required packages. The Package column is the usual name
for the software package that LLVM depends on. The Version column provides
"known to work" versions of the package. The Notes column describes how LLVM
uses the package and provides other details.

=========================================================== ============ ==========================================
Package                                                     Version      Notes
=========================================================== ============ ==========================================
`CMake <http://cmake.org/>`_                                >=3.20.0     Makefile/workspace generator
`python <http://www.python.org/>`_                          >=3.8        Automated test suite\ :sup:`1`
`zlib <http://zlib.net>`_                                   >=1.2.3.4    Compression library\ :sup:`2`
`GNU Make <http://savannah.gnu.org/projects/make>`_         3.79, 3.79.1 Makefile/build processor\ :sup:`3`
`PyYAML <https://pypi.org/project/PyYAML/>`_                >=5.1        Header generator\ :sup:`4`
=========================================================== ============ ==========================================

.. note::

   #. Only needed if you want to run the automated test suite in the
      ``llvm/test`` directory, or if you plan to utilize any Python libraries,
      utilities, or bindings.
   #. Optional, adds compression/uncompression capabilities to selected LLVM
      tools.
   #. Optional, you can use any other build tool supported by CMake.
   #. Only needed when building libc with New Headergen. Mainly used by libc.

Additionally, your compilation host is expected to have the usual plethora of
Unix utilities. Specifically:

* **ar** --- archive library builder
* **bzip2** --- bzip2 command for distribution generation
* **bunzip2** --- bunzip2 command for distribution checking
* **chmod** --- change permissions on a file
* **cat** --- output concatenation utility
* **cp** --- copy files
* **date** --- print the current date/time
* **echo** --- print to standard output
* **egrep** --- extended regular expression search utility
* **find** --- find files/dirs in a file system
* **grep** --- regular expression search utility
* **gzip** --- gzip command for distribution generation
* **gunzip** --- gunzip command for distribution checking
* **install** --- install directories/files
* **mkdir** --- create a directory
* **mv** --- move (rename) files
* **ranlib** --- symbol table builder for archive libraries
* **rm** --- remove (delete) files and directories
* **sed** --- stream editor for transforming output
* **sh** --- Bourne shell for make build scripts
* **tar** --- tape archive for distribution generation
* **test** --- test things in file system
* **unzip** --- unzip command for distribution checking
* **zip** --- zip command for distribution generation

.. _below:
.. _check here:

.. _host_cpp_toolchain:

Host C++ Toolchain, both Compiler and Standard Library
------------------------------------------------------

LLVM is very demanding of the host C++ compiler, and as such tends to expose
bugs in the compiler. We also attempt to follow improvements and developments in
the C++ language and library reasonably closely. As such, we require a modern
host C++ toolchain, both compiler and standard library, in order to build LLVM.

LLVM is written using the subset of C++ documented in :doc:`coding
standards<CodingStandards>`. To enforce this language version, we check the most
popular host toolchains for specific minimum versions in our build systems:

* Clang 5.0
* Apple Clang 10.0
* GCC 7.4
* Visual Studio 2019 16.8

Anything older than these toolchains *may* work, but will require forcing the
build system with a special option and is not really a supported host platform.
Also note that older versions of these compilers have often crashed or
miscompiled LLVM.

For less widely used host toolchains such as ICC or xlC, be aware that a very
recent version may be required to support all of the C++ features used in LLVM.

We track certain versions of software that are *known* to fail when used as
part of the host toolchain. These even include linkers at times.

**GNU ld 2.16.X**. Some 2.16.X versions of the ld linker will produce very long
warning messages complaining that some "``.gnu.linkonce.t.*``" symbol was
defined in a discarded section. You can safely ignore these messages as they are
erroneous and the linkage is correct.  These messages disappear using ld 2.17.

**GNU binutils 2.17**: Binutils 2.17 contains `a bug
<http://sourceware.org/bugzilla/show_bug.cgi?id=3111>`__ which causes huge link
times (minutes instead of seconds) when building LLVM.  We recommend upgrading
to a newer version (2.17.50.0.4 or later).

**GNU Binutils 2.19.1 Gold**: This version of Gold contained `a bug
<http://sourceware.org/bugzilla/show_bug.cgi?id=9836>`__ which causes
intermittent failures when building LLVM with position independent code.  The
symptom is an error about cyclic dependencies.  We recommend upgrading to a
newer version of Gold.

Getting a Modern Host C++ Toolchain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This section mostly applies to Linux and older BSDs. On macOS, you should
have a sufficiently modern Xcode, or you will likely need to upgrade until you
do. Windows does not have a "system compiler", so you must install either Visual
Studio 2019 (or later), or a recent version of mingw64. FreeBSD 10.0 and newer
have a modern Clang as the system compiler.

However, some Linux distributions and some other or older BSDs sometimes have
extremely old versions of GCC. These steps attempt to help you upgrade your
compiler even on such a system. However, if at all possible, we encourage you
to use a recent version of a distribution with a modern system compiler that
meets these requirements. Note that it is tempting to install a prior
version of Clang and libc++ to be the host compiler; however, libc++ was not
well tested or set up to build on Linux until relatively recently. As
a consequence, this guide suggests just using libstdc++ and a modern GCC as the
initial host in a bootstrap, and then using Clang (and potentially libc++).

The first step is to get a recent GCC toolchain installed. The most common
distribution on which users have struggled with the version requirements is
Ubuntu Precise, 12.04 LTS. For this distribution, one easy option is to install
the `toolchain testing PPA`_ and use it to install a modern GCC. There is
a really nice discussion of this on the `ask ubuntu stack exchange`_ and a
`github gist`_ with updated commands. However, not all users can use PPAs and
there are many other distributions, so it may be necessary (or just useful, if
you're here you *are* doing compiler development after all) to build and install
GCC from source. It is also quite easy to do these days.

.. _toolchain testing PPA:
  https://launchpad.net/~ubuntu-toolchain-r/+archive/test
.. _ask ubuntu stack exchange:
  https://askubuntu.com/questions/466651/how-do-i-use-the-latest-gcc-on-ubuntu/581497#58149
.. _github gist:
  https://gist.github.com/application2000/73fd6f4bf1be6600a2cf9f56315a2d91

Easy steps for installing a specific version of GCC:

.. code-block:: console

  % gcc_version=7.4.0
  % wget https://ftp.gnu.org/gnu/gcc/gcc-${gcc_version}/gcc-${gcc_version}.tar.bz2
  % wget https://ftp.gnu.org/gnu/gcc/gcc-${gcc_version}/gcc-${gcc_version}.tar.bz2.sig
  % wget https://ftp.gnu.org/gnu/gnu-keyring.gpg
  % signature_invalid=`gpg --verify --no-default-keyring --keyring ./gnu-keyring.gpg gcc-${gcc_version}.tar.bz2.sig`
  % if [ $signature_invalid ]; then echo "Invalid signature" ; exit 1 ; fi
  % tar -xvjf gcc-${gcc_version}.tar.bz2
  % cd gcc-${gcc_version}
  % ./contrib/download_prerequisites
  % cd ..
  % mkdir gcc-${gcc_version}-build
  % cd gcc-${gcc_version}-build
  % $PWD/../gcc-${gcc_version}/configure --prefix=$HOME/toolchains --enable-languages=c,c++
  % make -j$(nproc)
  % make install

For more details, check out the excellent `GCC wiki entry`_, where I got most
of this information from.

.. _GCC wiki entry:
  https://gcc.gnu.org/wiki/InstallingGCC

Once you have a GCC toolchain, configure your build of LLVM to use the new
toolchain for your host compiler and C++ standard library. Because the new
version of libstdc++ is not on the system library search path, you need to pass
extra linker flags so that it can be found at link time (``-L``) and at runtime
(``-rpath``). If you are using CMake, this invocation should produce working
binaries:

.. code-block:: console

  % mkdir build
  % cd build
  % CC=$HOME/toolchains/bin/gcc CXX=$HOME/toolchains/bin/g++ \
    cmake .. -DCMAKE_CXX_LINK_FLAGS="-Wl,-rpath,$HOME/toolchains/lib64 -L$HOME/toolchains/lib64"

If you fail to set rpath, most LLVM binaries will fail on startup with a message
from the loader similar to ``libstdc++.so.6: version `GLIBCXX_3.4.20' not
found``. This means you need to tweak the ``-rpath`` linker flag.

This method will add an absolute path to the rpath of all executables. That's
fine for local development. If you want to distribute the binaries you build
so that they can run on older systems, copy ``libstdc++.so.6`` into the
``lib/`` directory.  All of LLVM's shipping binaries have an rpath pointing at
``$ORIGIN/../lib``, so they will find ``libstdc++.so.6`` there.  Non-distributed
binaries don't have an rpath set and won't find ``libstdc++.so.6``. Pass
``-DLLVM_LOCAL_RPATH="$HOME/toolchains/lib64"`` to CMake to add an absolute
path to ``libstdc++.so.6`` as above. Since these binaries are not distributed,
having an absolute local path is fine for them.

When you build Clang, you will need to give *it* access to a modern C++
standard library in order to use it as your new host in part of a bootstrap.
There are two easy ways to do this, either build (and install) libc++ along
with Clang and then use it with the ``-stdlib=libc++`` compile and link flag,
or install Clang into the same prefix (``$HOME/toolchains`` above) as GCC.
Clang will look within its own prefix for libstdc++ and use it if found. You
can also add an explicit prefix for Clang to look in for a GCC toolchain with
the ``--gcc-toolchain=/opt/my/gcc/prefix`` flag, passing it to both compile and
link commands when using your just-built-Clang to bootstrap.

.. _Getting Started with LLVM:

Getting Started with LLVM
=========================

The remainder of this guide is meant to get you up and running with LLVM and to
give you some basic information about the LLVM environment.

The later sections of this guide describe the `general layout`_ of the LLVM
source tree, a `simple example`_ using the LLVM toolchain, and `links`_ to find
more information about LLVM or to get help via e-mail.

Terminology and Notation
------------------------

Throughout this manual, the following names are used to denote paths specific to
the local system and working environment.  *These are not environment variables
you need to set but just strings used in the rest of this document below*.  In
any of the examples below, simply replace each of these names with the
appropriate pathname on your local system.  All these paths are absolute:

``SRC_ROOT``

  This is the top-level directory of the LLVM source tree.

``OBJ_ROOT``

  This is the top-level directory of the LLVM object tree (i.e. the tree where
  object files and compiled programs will be placed.  It can be the same as
  SRC_ROOT).

Sending patches
^^^^^^^^^^^^^^^

See :ref:`Contributing <submit_patch>`.

Bisecting commits
^^^^^^^^^^^^^^^^^

See `Bisecting LLVM code <GitBisecting.html>`_ for how to use ``git bisect``
on LLVM.

Reverting a change
^^^^^^^^^^^^^^^^^^

When reverting changes using git, the default message will say "This reverts
commit XYZ". Leave this at the end of the commit message, but add some details
before it as to why the commit is being reverted. A brief explanation and/or
links to bots that demonstrate the problem are sufficient.

Local LLVM Configuration
------------------------

Once checked out repository, the LLVM suite source code must be configured
before being built. This process uses CMake.  Unlike the normal ``configure``
script, CMake generates the build files in whatever format you request as well
as various ``*.inc`` files, and ``llvm/include/llvm/Config/config.h.cmake``.

Variables are passed to ``cmake`` on the command line using the format
``-D<variable name>=<value>``. The following variables are some common options
used by people developing LLVM.

* ``CMAKE_C_COMPILER``
* ``CMAKE_CXX_COMPILER``
* ``CMAKE_BUILD_TYPE``
* ``CMAKE_INSTALL_PREFIX``
* ``Python3_EXECUTABLE``
* ``LLVM_TARGETS_TO_BUILD``
* ``LLVM_ENABLE_PROJECTS``
* ``LLVM_ENABLE_RUNTIMES``
* ``LLVM_ENABLE_DOXYGEN``
* ``LLVM_ENABLE_SPHINX``
* ``LLVM_BUILD_LLVM_DYLIB``
* ``LLVM_LINK_LLVM_DYLIB``
* ``LLVM_PARALLEL_LINK_JOBS``
* ``LLVM_OPTIMIZED_TABLEGEN``

See :ref:`the list of frequently-used CMake variables <cmake_frequently_used_variables>`
for more information.

To configure LLVM, follow these steps:

#. Change directory into the object root directory:

   .. code-block:: console

     % cd OBJ_ROOT

#. Run the ``cmake``:

   .. code-block:: console

     % cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=<type> -DCMAKE_INSTALL_PREFIX=/install/path
       [other options] SRC_ROOT

Compiling the LLVM Suite Source Code
------------------------------------

Unlike with autotools, with CMake your build type is defined at configuration.
If you want to change your build type, you can re-run CMake with the following
invocation:

   .. code-block:: console

     % cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=<type> SRC_ROOT

Between runs, CMake preserves the values set for all options. CMake has the
following build types defined:

Debug

  These builds are the default. The build system will compile the tools and
  libraries unoptimized, with debugging information, and asserts enabled.

Release

  For these builds, the build system will compile the tools and libraries
  with optimizations enabled and not generate debug info. CMakes default
  optimization level is -O3. This can be configured by setting the
  ``CMAKE_CXX_FLAGS_RELEASE`` variable on the CMake command line.

RelWithDebInfo

  These builds are useful when debugging. They generate optimized binaries with
  debug information. CMakes default optimization level is -O2. This can be
  configured by setting the ``CMAKE_CXX_FLAGS_RELWITHDEBINFO`` variable on the
  CMake command line.

Once you have LLVM configured, you can build it by entering the *OBJ_ROOT*
directory and issuing the following command:

.. code-block:: console

  % make

If the build fails, please `check here`_ to see if you are using a version of
GCC that is known not to compile LLVM.

If you have multiple processors in your machine, you may wish to use some of the
parallel build options provided by GNU Make.  For example, you could use the
command:

.. code-block:: console

  % make -j2

There are several special targets which are useful when working with the LLVM
source code:

``make clean``

  Removes all files generated by the build.  This includes object files,
  generated C/C++ files, libraries, and executables.

``make install``

  Installs LLVM header files, libraries, tools, and documentation in a hierarchy
  under ``$PREFIX``, specified with ``CMAKE_INSTALL_PREFIX``, which
  defaults to ``/usr/local``.

``make docs-llvm-html``

  If configured with ``-DLLVM_ENABLE_SPHINX=On``, this will generate a directory
  at ``OBJ_ROOT/docs/html`` which contains the HTML formatted documentation.

Cross-Compiling LLVM
--------------------

It is possible to cross-compile LLVM itself. That is, you can create LLVM
executables and libraries to be hosted on a platform different from the platform
where they are built (a Canadian Cross build). To generate build files for
cross-compiling CMake provides a variable ``CMAKE_TOOLCHAIN_FILE`` which can
define compiler flags and variables used during the CMake test operations.

The result of such a build is executables that are not runnable on the build
host but can be executed on the target. As an example, the following CMake
invocation can generate build files targeting iOS. This will work on macOS
with the latest Xcode:

.. code-block:: console

  % cmake -G "Ninja" -DCMAKE_OSX_ARCHITECTURES="armv7;armv7s;arm64"
    -DCMAKE_TOOLCHAIN_FILE=<PATH_TO_LLVM>/cmake/platforms/iOS.cmake
    -DCMAKE_BUILD_TYPE=Release -DLLVM_BUILD_RUNTIME=Off -DLLVM_INCLUDE_TESTS=Off
    -DLLVM_INCLUDE_EXAMPLES=Off -DLLVM_ENABLE_BACKTRACES=Off [options]
    <PATH_TO_LLVM>

Note: There are some additional flags that need to be passed when building for
iOS due to limitations in the iOS SDK.

Check :doc:`HowToCrossCompileLLVM` and `Clang docs on how to cross-compile in general
<https://clang.llvm.org/docs/CrossCompilation.html>`_ for more information
about cross-compiling.

The Location of LLVM Object Files
---------------------------------

The LLVM build system is capable of sharing a single LLVM source tree among
several LLVM builds.  Hence, it is possible to build LLVM for several different
platforms or configurations using the same source tree.

* Change directory to where the LLVM object files should live:

  .. code-block:: console

    % cd OBJ_ROOT

* Run ``cmake``:

  .. code-block:: console

    % cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release SRC_ROOT

The LLVM build will create a structure underneath *OBJ_ROOT* that matches the
LLVM source tree. At each level where source files are present in the source
tree there will be a corresponding ``CMakeFiles`` directory in the *OBJ_ROOT*.
Underneath that directory there is another directory with a name ending in
``.dir`` under which you'll find object files for each source.

For example:

  .. code-block:: console

    % cd llvm_build_dir
    % find lib/Support/ -name APFloat*
    lib/Support/CMakeFiles/LLVMSupport.dir/APFloat.cpp.o

Optional Configuration Items
----------------------------

If you're running on a Linux system that supports the `binfmt_misc
<http://en.wikipedia.org/wiki/binfmt_misc>`_
module, and you have root access on the system, you can set your system up to
execute LLVM bitcode files directly. To do this, use commands like this (the
first command may not be required if you are already using the module):

.. code-block:: console

  % mount -t binfmt_misc none /proc/sys/fs/binfmt_misc
  % echo ':llvm:M::BC::/path/to/lli:' > /proc/sys/fs/binfmt_misc/register
  % chmod u+x hello.bc   (if needed)
  % ./hello.bc

This allows you to execute LLVM bitcode files directly.  On Debian, you can also
use this command instead of the 'echo' command above:

.. code-block:: console

  % sudo update-binfmts --install llvm /path/to/lli --magic 'BC'

.. _Program Layout:
.. _general layout:

Directory Layout
================

One useful source of information about the LLVM source base is the LLVM `doxygen
<http://www.doxygen.org/>`_ documentation available at
`<https://llvm.org/doxygen/>`_.  The following is a brief introduction to code
layout:

``llvm/cmake``
--------------
Generates system build files.

``llvm/cmake/modules``
  Build configuration for llvm user defined options. Checks compiler version and
  linker flags.

``llvm/cmake/platforms``
  Toolchain configuration for Android NDK, iOS systems and non-Windows hosts to
  target MSVC.

``llvm/examples``
-----------------

- Some simple examples showing how to use LLVM as a compiler for a custom
  language - including lowering, optimization, and code generation.

- Kaleidoscope Tutorial: Kaleidoscope language tutorial runs through the
  implementation of a nice little compiler for a non-trivial language
  including a hand-written lexer, parser, AST, as well as code generation
  support using LLVM- both static (ahead of time) and various approaches to
  Just In Time (JIT) compilation.
  `Kaleidoscope Tutorial for complete beginner
  <https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html>`_.

- BuildingAJIT: Examples of the `BuildingAJIT tutorial
  <https://llvm.org/docs/tutorial/BuildingAJIT1.html>`_ that shows how LLVM’s
  ORC JIT APIs interact with other parts of LLVM. It also teaches how to
  recombine them to build a custom JIT that is suited to your use-case.

``llvm/include``
----------------

Public header files exported from the LLVM library. The three main subdirectories:

``llvm/include/llvm``

  All LLVM-specific header files, and  subdirectories for different portions of
  LLVM: ``Analysis``, ``CodeGen``, ``Target``, ``Transforms``, etc...

``llvm/include/llvm/Support``

  Generic support libraries provided with LLVM but not necessarily specific to
  LLVM. For example, some C++ STL utilities and a Command Line option processing
  library store header files here.

``llvm/include/llvm/Config``

  Header files configured by ``cmake``.  They wrap "standard" UNIX and
  C header files.  Source code can include these header files which
  automatically take care of the conditional #includes that ``cmake``
  generates.

``llvm/lib``
------------

Most source files are here. By putting code in libraries, LLVM makes it easy to
share code among the `tools`_.

``llvm/lib/IR/``

  Core LLVM source files that implement core classes like Instruction and
  BasicBlock.

``llvm/lib/AsmParser/``

  Source code for the LLVM assembly language parser library.

``llvm/lib/Bitcode/``

  Code for reading and writing bitcode.

``llvm/lib/Analysis/``

  A variety of program analyses, such as Call Graphs, Induction Variables,
  Natural Loop Identification, etc.

``llvm/lib/Transforms/``

  IR-to-IR program transformations, such as Aggressive Dead Code Elimination,
  Sparse Conditional Constant Propagation, Inlining, Loop Invariant Code Motion,
  Dead Global Elimination, and many others.

``llvm/lib/Target/``

  Files describing target architectures for code generation.  For example,
  ``llvm/lib/Target/X86`` holds the X86 machine description.

``llvm/lib/CodeGen/``

  The major parts of the code generator: Instruction Selector, Instruction
  Scheduling, and Register Allocation.

``llvm/lib/MC/``

  The libraries represent and process code at machine code level. Handles
  assembly and object-file emission.

``llvm/lib/ExecutionEngine/``

  Libraries for directly executing bitcode at runtime in interpreted and
  JIT-compiled scenarios.

``llvm/lib/Support/``

  Source code that corresponds to the header files in ``llvm/include/ADT/``
  and ``llvm/include/Support/``.

``llvm/bindings``
----------------------

Contains bindings for the LLVM compiler infrastructure to allow
programs written in languages other than C or C++ to take advantage of the LLVM
infrastructure.
The LLVM project provides language bindings for OCaml and Python.

``llvm/projects``
-----------------

Projects not strictly part of LLVM but shipped with LLVM. This is also the
directory for creating your own LLVM-based projects which leverage the LLVM
build system.

``llvm/test``
-------------

Feature and regression tests and other sanity checks on LLVM infrastructure. These
are intended to run quickly and cover a lot of territory without being exhaustive.

``test-suite``
--------------

A comprehensive correctness, performance, and benchmarking test suite
for LLVM.  This comes in a ``separate git repository
<https://github.com/llvm/llvm-test-suite>``, because it contains a
large amount of third-party code under a variety of licenses. For
details see the :doc:`Testing Guide <TestingGuide>` document.

.. _tools:

``llvm/tools``
--------------

Executables built out of the libraries
above, which form the main part of the user interface.  You can always get help
for a tool by typing ``tool_name -help``.  The following is a brief introduction
to the most important tools.  More detailed information is in
the `Command Guide <CommandGuide/index.html>`_.

``bugpoint``

  ``bugpoint`` is used to debug optimization passes or code generation backends
  by narrowing down the given test case to the minimum number of passes and/or
  instructions that still cause a problem, whether it is a crash or
  miscompilation. See `<HowToSubmitABug.html>`_ for more information on using
  ``bugpoint``.

``llvm-ar``

  The archiver produces an archive containing the given LLVM bitcode files,
  optionally with an index for faster lookup.

``llvm-as``

  The assembler transforms the human-readable LLVM assembly to LLVM bitcode.

``llvm-dis``

  The disassembler transforms the LLVM bitcode to human-readable LLVM assembly.

``llvm-link``

  ``llvm-link``, not surprisingly, links multiple LLVM modules into a single
  program.

``lli``

  ``lli`` is the LLVM interpreter, which can directly execute LLVM bitcode
  (although very slowly...). For architectures that support it (currently x86,
  Sparc, and PowerPC), by default, ``lli`` will function as a Just-In-Time
  compiler (if the functionality was compiled in), and will execute the code
  *much* faster than the interpreter.

``llc``

  ``llc`` is the LLVM backend compiler, which translates LLVM bitcode to a
  native code assembly file.

``opt``

  ``opt`` reads LLVM bitcode, applies a series of LLVM to LLVM transformations
  (which are specified on the command line), and outputs the resultant
  bitcode.   '``opt -help``'  is a good way to get a list of the
  program transformations available in LLVM.

  ``opt`` can also  run a specific analysis on an input LLVM bitcode
  file and print  the results.  Primarily useful for debugging
  analyses, or familiarizing yourself with what an analysis does.

``llvm/utils``
--------------

Utilities for working with LLVM source code; some are part of the build process
because they are code generators for parts of the infrastructure.


``codegen-diff``

  ``codegen-diff`` finds differences between code that LLC
  generates and code that LLI generates. This is useful if you are
  debugging one of them, assuming that the other generates correct output. For
  the full user manual, run ```perldoc codegen-diff'``.

``emacs/``

   Emacs and XEmacs syntax highlighting  for LLVM   assembly files and TableGen
   description files.  See the ``README`` for information on using them.

``getsrcs.sh``

  Finds and outputs all non-generated source files,
  useful if one wishes to do a lot of development across directories
  and does not want to find each file. One way to use it is to run,
  for example: ``xemacs `utils/getsources.sh``` from the top of the LLVM source
  tree.

``llvmgrep``

  Performs an ``egrep -H -n`` on each source file in LLVM and
  passes to it a regular expression provided on ``llvmgrep``'s command
  line. This is an efficient way of searching the source base for a
  particular regular expression.

``TableGen/``

  Contains the tool used to generate register
  descriptions, instruction set descriptions, and even assemblers from common
  TableGen description files.

``vim/``

  vim syntax-highlighting for LLVM assembly files
  and TableGen description files. See the    ``README`` for how to use them.

.. _simple example:

An Example Using the LLVM Tool Chain
====================================

This section gives an example of using LLVM with the Clang front end.

Example with clang
------------------

#. First, create a simple C file, name it 'hello.c':

   .. code-block:: c

     #include <stdio.h>

     int main() {
       printf("hello world\n");
       return 0;
     }

#. Next, compile the C file into a native executable:

   .. code-block:: console

     % clang hello.c -o hello

   .. note::

     Clang works just like GCC by default.  The standard ``-S`` and ``-c`` arguments
     work as usual (producing a native ``.s`` or ``.o`` file, respectively).

#. Next, compile the C file into an LLVM bitcode file:

   .. code-block:: console

     % clang -O3 -emit-llvm hello.c -c -o hello.bc

   The ``-emit-llvm`` option can be used with the ``-S`` or ``-c`` options to emit an LLVM
   ``.ll`` or ``.bc`` file (respectively) for the code.  This allows you to use
   the `standard LLVM tools <CommandGuide/index.html>`_ on the bitcode file.

#. Run the program in both forms. To run the program, use:

   .. code-block:: console

      % ./hello

   and

   .. code-block:: console

     % lli hello.bc

   The second example shows how to invoke the LLVM JIT, :doc:`lli
   <CommandGuide/lli>`.

#. Use the ``llvm-dis`` utility to take a look at the LLVM assembly code:

   .. code-block:: console

     % llvm-dis < hello.bc | less

#. Compile the program to native assembly using the LLC code generator:

   .. code-block:: console

     % llc hello.bc -o hello.s

#. Assemble the native assembly language file into a program:

   .. code-block:: console

     % /opt/SUNWspro/bin/cc -xarch=v9 hello.s -o hello.native   # On Solaris

     % gcc hello.s -o hello.native                              # On others

#. Execute the native code program:

   .. code-block:: console

     % ./hello.native

   Note that using clang to compile directly to native code (i.e. when the
   ``-emit-llvm`` option is not present) does steps 6/7/8 for you.

Common Problems
===============

If you are having problems building or using LLVM, or if you have any other
general questions about LLVM, please consult the `Frequently Asked
Questions <FAQ.html>`_ page.

If you are having problems with limited memory and build time, please try
building with ``ninja`` instead of ``make``. Please consider configuring the
following options with CMake:

 * ``-G Ninja``

   Setting this option will allow you to build with ninja instead of make.
   Building with ninja significantly improves your build time, especially with
   incremental builds, and improves your memory usage.

 * ``-DLLVM_USE_LINKER``

   Setting this option to ``lld`` will significantly reduce linking time for LLVM
   executables, particularly on Linux and Windows. If you are building LLVM
   for the first time and lld is not available to you as a binary package, then
   you may want to use the gold linker as a faster alternative to GNU ld.

 * ``-DCMAKE_BUILD_TYPE``

   Controls optimization level and debug information of the build.  This setting
   can affect RAM and disk usage, see :ref:`CMAKE_BUILD_TYPE <cmake_build_type>`
   for more information.

 * ``-DLLVM_ENABLE_ASSERTIONS``

   This option defaults to ``ON`` for Debug builds and defaults to ``OFF`` for Release
   builds. As mentioned in the previous option, using the Release build type and
   enabling assertions may be a good alternative to using the Debug build type.

 * ``-DLLVM_PARALLEL_LINK_JOBS``

   Set this equal to number of jobs you wish to run simultaneously. This is
   similar to the ``-j`` option used with ``make``, but only for link jobs. This option
   can only be used with ninja. You may wish to use a very low number of jobs,
   as this will greatly reduce the amount of memory used during the build
   process. If you have limited memory, you may wish to set this to ``1``.

 * ``-DLLVM_TARGETS_TO_BUILD``

   Set this equal to the target you wish to build. You may wish to set this to
   only your host architecture. For example ``X86`` if you are using an Intel or
   AMD machine. You will find a full list of targets within the
   `llvm-project/llvm/lib/Target <https://github.com/llvm/llvm-project/tree/main/llvm/lib/Target>`_
   directory.

 * ``-DLLVM_OPTIMIZED_TABLEGEN``

   Set this to ``ON`` to generate a fully optimized TableGen compiler during your
   build, even if that build is a ``Debug`` build. This will significantly improve
   your build time. You should not enable this if your intention is to debug the
   TableGen compiler.

 * ``-DLLVM_ENABLE_PROJECTS``

   Set this equal to the projects you wish to compile (e.g. ``clang``, ``lld``, etc.) If
   compiling more than one project, separate the items with a semicolon. Should
   you run into issues with the semicolon, try surrounding it with single quotes.

 * ``-DLLVM_ENABLE_RUNTIMES``

   Set this equal to the runtimes you wish to compile (e.g. ``libcxx``, ``libcxxabi``, etc.)
   If compiling more than one runtime, separate the items with a semicolon. Should
   you run into issues with the semicolon, try surrounding it with single quotes.

 * ``-DCLANG_ENABLE_STATIC_ANALYZER``

   Set this option to ``OFF`` if you do not require the clang static analyzer. This
   should improve your build time slightly.

 * ``-DLLVM_USE_SPLIT_DWARF``

   Consider setting this to ``ON`` if you require a debug build, as this will ease
   memory pressure on the linker. This will make linking much faster, as the
   binaries will not contain any of the debug information. Instead, the debug
   information is in a separate DWARF object file (with the extension ``.dwo``).
   This only applies to host platforms using ELF, such as Linux.

 * ``-DBUILD_SHARED_LIBS``

   Setting this to ``ON`` will build shared libraries instead of static
   libraries. This will ease memory pressure on the linker. However, this should
   only be used when developing llvm. See
   :ref:`BUILD_SHARED_LIBS <LLVM-related variables BUILD_SHARED_LIBS>`
   for more information.

.. _links:

Links
=====

This document is just an **introduction** on how to use LLVM to do some simple
things... there are many more interesting and complicated things that you can do
that aren't documented here (but we'll gladly accept a patch if you want to
write something up!).  For more information about LLVM, check out:

* `LLVM Homepage <https://llvm.org/>`_
* `LLVM Doxygen Tree <https://llvm.org/doxygen/>`_
* `Starting a Project that Uses LLVM <https://llvm.org/docs/Projects.html>`_


.. _GettingStartedMSVC:

==================================================================
Getting Started with the LLVM System using Microsoft Visual Studio
==================================================================


Overview
========
Welcome to LLVM on Windows! This document only covers LLVM on Windows using
Visual Studio, not WSL, mingw or cygwin. In order to get started, you first need
to know some basic information.

LLVM is composed of many different projects. The first piece is the
LLVM suite. This contains all of the tools, libraries, and header files needed
to use LLVM. It contains an assembler, disassembler, bitcode analyzer, and
bitcode optimizer. It also contains basic regression tests that can be used to
test the LLVM tools and the Clang front end.

The second piece is the `Clang <https://clang.llvm.org/>`_ front end.  This
component compiles C, C++, Objective C, and Objective C++ code into LLVM
bitcode. Clang typically uses LLVM libraries to optimize the bitcode and emit
machine code. LLVM fully supports the COFF object file format, which is
compatible with all other existing Windows toolchains.

This document does not discuss other LLVM projects.


Requirements
============
Before you begin to use the LLVM system, review the requirements given
below.  This may save you some trouble by knowing ahead of time what hardware
and software you will need.

Hardware
--------
Any system that can adequately run Visual Studio 2019 is fine. The LLVM
source tree, including the git index, consumes approximately 3GB.
Object files, libraries, and executables consume approximately 5GB in
Release mode and much more in Debug mode. An SSD drive and >16GB RAM are
recommended.


Software
--------
You will need `Visual Studio <https://visualstudio.microsoft.com/>`_ 2019 or
later, with the latest Update installed. Visual Studio Community Edition
suffices.

You will also need the `CMake <http://www.cmake.org/>`_ build system since it
generates the project files you will use to build with. CMake is bundled with
Visual Studio 2019 so a separate installation is not required. If you do install
CMake separately, Visual Studio 2022 will require CMake Version 3.21 or later.

If you would like to run the LLVM tests you will need `Python
<http://www.python.org/>`_. Version 3.8 and newer are known to work. You can
install Python with Visual Studio 2019, from the Microsoft store or from
the `Python web site <http://www.python.org/>`_. We recommend the latter since it
allows you to adjust installation options.

You will need `Git for Windows <https://git-scm.com/>`_ with bash tools, too.
Git for Windows is also bundled with Visual Studio 2019.


Getting Started
===============

Here's the short story for getting up and running quickly with LLVM.
These instructions were tested with Visual Studio 2019 and Python 3.9.6:

1. Download and install `Visual Studio <https://visualstudio.microsoft.com/>`_.
2. In the Visual Studio installer, Workloads tab, select the
   **Desktop development with C++** workload. Under Individual components tab,
   select **Git for Windows**.
3. Complete the Visual Studio installation.
4. Download and install the latest `Python 3 release <http://www.python.org/>`_.
5. In the first install screen, select both **Install launcher for all users**
   and **Add Python to the PATH**. This will allow installing psutil for all
   users for the regression tests and make Python available from the command
   line.
6. In the second install screen, select (again) **Install for all users** and
   if you want to develop `lldb <https://lldb.llvm.org/>`_, selecting
   **Download debug binaries** is useful.
7. Complete the Python installation.
8. Run a "Developer Command Prompt for VS 2019" **as administrator**. This command
    prompt provides the correct path and environment variables to Visual Studio and
    the installed tools.
9. In the terminal window, type the commands:

   .. code-block:: bat

     c:
     cd \

  You may install the llvm sources in a location other than ``c:\llvm`` but do not
  install into a path containing spaces (e.g., ``c:\Documents and Settings\...``)
  as it will fail.

10. Register the Microsoft Debug Interface Access (DIA) DLLs:

    .. code-block:: bat

     regsvr32 "%VSINSTALLDIR%\DIA SDK\bin\msdia140.dll"
     regsvr32 "%VSINSTALLDIR%\DIA SDK\bin\amd64\msdia140.dll"

 The DIA library is required for LLVM PDB tests and
 `LLDB development <https://lldb.llvm.org/resources/build.html>`_.

11. Install psutil and obtain the LLVM source code:

    .. code-block:: bat

     pip install psutil
     git clone https://github.com/llvm/llvm-project.git llvm

 Instead of ``git clone`` you may download a compressed source distribution
 from the `releases page <https://github.com/llvm/llvm-project/releases>`_.
 Select the last link: ``Source code (zip)`` and unpack the downloaded file using
 Windows Explorer built-in zip support or any other unzip tool.

12. Finally, configure LLVM using CMake:

    .. code-block:: bat

       cmake -S llvm\llvm -B build -DLLVM_ENABLE_PROJECTS=clang -DLLVM_TARGETS_TO_BUILD=X86 -Thost=x64
       exit

   ``LLVM_ENABLE_PROJECTS`` specifies any additional LLVM projects you want to
   build while ``LLVM_TARGETS_TO_BUILD`` selects the compiler targets. If
   ``LLVM_TARGETS_TO_BUILD`` is omitted by default all targets are built
   slowing compilation and using more disk space.
   See the :doc:`LLVM CMake guide <CMake>` for detailed information about
   how to configure the LLVM build.

   The ``cmake`` command line tool is bundled with Visual Studio but its GUI is
   not. You may install `CMake <http://www.cmake.org/>`_ to use its GUI to change
   CMake variables or modify the above command line.

   * Once CMake is installed then the simplest way is to just start the
     CMake GUI, select the directory where you have LLVM extracted to, and
     the default options should all be fine.  One option you may really
     want to change, regardless of anything else, might be the
     ``CMAKE_INSTALL_PREFIX`` setting to select a directory to INSTALL to
     once compiling is complete, although installation is not mandatory for
     using LLVM.  Another important option is ``LLVM_TARGETS_TO_BUILD``,
     which controls the LLVM target architectures that are included on the
     build.
   * CMake generates project files for all build types. To select a specific
     build type, use the Configuration manager from the VS IDE or the
     ``/property:Configuration`` command-line option when using MSBuild.
   * By default, the Visual Studio project files generated by CMake use the
     32-bit toolset. If you are developing on a 64-bit version of Windows and
     want to use the 64-bit toolset, pass the ``-Thost=x64`` flag when
     generating the Visual Studio solution. This requires CMake 3.8.0 or later.

13. Start Visual Studio and select configuration:

   In the directory you created the project files will have an ``llvm.sln``
   file, just double-click on that to open Visual Studio. The default Visual
   Studio configuration is **Debug** which is slow and generates a huge amount
   of debug information on disk. For now, we recommend selecting **Release**
   configuration for the LLVM project which will build the fastest or
   **RelWithDebInfo** which is also several time larger than Release.
   Another technique is to build all of LLVM in Release mode and change
   compiler flags, disabling optimization and enabling debug information, only
   for specific libraries or source files you actually need to debug.

14. Test LLVM in Visual Studio:

   You can run LLVM tests by merely building the project "check-all". The test
   results will be shown in the VS output window. Once the build succeeds, you
   have verified a working LLVM development environment!

   You should not see any unexpected failures, but you will see many unsupported
   tests and expected failures:

   ::

    114>Testing Time: 1124.66s
    114>  Skipped          :    39
    114>  Unsupported      : 21649
    114>  Passed           : 51615
    114>  Expectedly Failed:    93
    ========== Build: 114 succeeded, 0 failed, 321 up-to-date, 0 skipped ==========``

Alternatives to manual installation
===================================
Instead of the steps above, to simplify the installation procedure you can use
`Chocolatey <https://chocolatey.org/>`_ as package manager.
After the `installation <https://chocolatey.org/install>`_ of Chocolatey,
run these commands in an admin shell to install the required tools:

.. code-block:: bat

   choco install -y git cmake python3
   pip3 install psutil

There is also a Windows
`Dockerfile <https://github.com/llvm/llvm-zorg/blob/main/buildbot/google/docker/windows-base-vscode2019/Dockerfile>`_
with the entire build toolchain. This can be used to test the build with a
toolchain different from your host installation or to create build servers.

Next steps
==========
1. Read the documentation.
2. Seriously, read the documentation.
3. Remember that you were warned twice about reading the documentation.

Test LLVM on the command line:
------------------------------
The LLVM tests can be run by changing directory to the llvm source
directory and running:

.. code-block:: bat

  c:\llvm> python ..\build\Release\bin\llvm-lit.py llvm\test

This example assumes that Python is in your ``PATH`` variable, which would be
after **Add Python to the PATH** was selected during Python installation.
If you had opened a command window prior to Python installation, you would
have to close and reopen it to get the updated ``PATH``.

A specific test or test directory can be run with:

.. code-block:: bat

  c:\llvm> python ..\build\Release\bin\llvm-lit.py llvm\test\Transforms\Util

Build the LLVM Suite:
---------------------
* The projects may still be built individually, but to build them all do
  not just select all of them in batch build (as some are meant as
  configuration projects), but rather select and build just the
  ``ALL_BUILD`` project to build everything, or the ``INSTALL`` project,
  which first builds the ``ALL_BUILD`` project, then installs the LLVM
  headers, libs, and other useful things to the directory set by the
  ``CMAKE_INSTALL_PREFIX`` setting when you first configured CMake.
* The Fibonacci project is a sample program that uses the JIT. Modify the
  project's debugging properties to provide a numeric command-line argument
  or run it from the command line.  The program will print the
  corresponding fibonacci value.


Links
=====
This document is just an **introduction** to how to use LLVM to do some simple
things... there are many more interesting and complicated things that you can
do that aren't documented here (but we'll gladly accept a patch if you want to
write something up!).  For more information about LLVM, check out:

* `LLVM homepage <https://llvm.org/>`_
* `LLVM doxygen tree <https://llvm.org/doxygen/>`_
* Additional information about the LLVM directory structure and tool chain
  can be found on the main :doc:`GettingStarted` page.
* If you are having problems building or using LLVM, or if you have any other
  general questions about LLVM, please consult the
  :doc:`Frequently Asked Questions <FAQ>` page.


.. _CreattingProject:

========================
Creating an LLVM Project
========================


Overview
========

The LLVM build system is designed to facilitate the building of third party
projects that use LLVM header files, libraries, and tools.  In order to use
these facilities, a ``Makefile`` from a project must do the following things:

* Set ``make`` variables. There are several variables that a ``Makefile`` needs
  to set to use the LLVM build system:

  * ``PROJECT_NAME`` - The name by which your project is known.
  * ``LLVM_SRC_ROOT`` - The root of the LLVM source tree.
  * ``LLVM_OBJ_ROOT`` - The root of the LLVM object tree.
  * ``PROJ_SRC_ROOT`` - The root of the project's source tree.
  * ``PROJ_OBJ_ROOT`` - The root of the project's object tree.
  * ``PROJ_INSTALL_ROOT`` - The root installation directory.
  * ``LEVEL`` - The relative path from the current directory to the
    project's root ``($PROJ_OBJ_ROOT)``.

* Include ``Makefile.config`` from ``$(LLVM_OBJ_ROOT)``.

* Include ``Makefile.rules`` from ``$(LLVM_SRC_ROOT)``.

There are two ways that you can set all of these variables:

* You can write your own ``Makefiles`` which hard-code these values.

* You can use the pre-made LLVM sample project. This sample project includes
  ``Makefiles``, a configure script that can be used to configure the location
  of LLVM, and the ability to support multiple object directories from a single
  source directory.

If you want to devise your own build system, studying other projects and LLVM
``Makefiles`` will probably provide enough information on how to write your own
``Makefiles``.

Source Tree Layout
==================

In order to use the LLVM build system, you will want to organize your source
code so that it can benefit from the build system's features.  Mainly, you want
your source tree layout to look similar to the LLVM source tree layout.

Underneath your top level directory, you should have the following directories:

**lib**

    This subdirectory should contain all of your library source code.  For each
    library that you build, you will have one directory in **lib** that will
    contain that library's source code.

    Libraries can be object files, archives, or dynamic libraries.  The **lib**
    directory is just a convenient place for libraries as it places them all in
    a directory from which they can be linked later.

**include**

    This subdirectory should contain any header files that are global to your
    project. By global, we mean that they are used by more than one library or
    executable of your project.

    By placing your header files in **include**, they will be found
    automatically by the LLVM build system.  For example, if you have a file
    **include/jazz/note.h**, then your source files can include it simply with
    **#include "jazz/note.h"**.

**tools**

    This subdirectory should contain all of your source code for executables.
    For each program that you build, you will have one directory in **tools**
    that will contain that program's source code.

**test**

    This subdirectory should contain tests that verify that your code works
    correctly.  Automated tests are especially useful.

    Currently, the LLVM build system provides basic support for tests. The LLVM
    system provides the following:

* LLVM contains regression tests in ``llvm/test``.  These tests are run by the
  :doc:`Lit <CommandGuide/lit>` testing tool.  This test procedure uses ``RUN``
  lines in the actual test case to determine how to run the test.  See the
  :doc:`TestingGuide` for more details.

* LLVM contains an optional package called ``llvm-test``, which provides
  benchmarks and programs that are known to compile with the Clang front
  end. You can use these programs to test your code, gather statistical
  information, and compare it to the current LLVM performance statistics.

  Currently, there is no way to hook your tests directly into the ``llvm/test``
  testing harness. You will simply need to find a way to use the source
  provided within that directory on your own.

Typically, you will want to build your **lib** directory first followed by your
**tools** directory.

Writing LLVM Style Makefiles
============================

The LLVM build system provides a convenient way to build libraries and
executables.  Most of your project Makefiles will only need to define a few
variables.  Below is a list of the variables one can set and what they can
do:

Required Variables
------------------

``LEVEL``

    This variable is the relative path from this ``Makefile`` to the top
    directory of your project's source code.  For example, if your source code
    is in ``/tmp/src``, then the ``Makefile`` in ``/tmp/src/jump/high``
    would set ``LEVEL`` to ``"../.."``.

Variables for Building Subdirectories
-------------------------------------

``DIRS``

    This is a space separated list of subdirectories that should be built.  They
    will be built, one at a time, in the order specified.

``PARALLEL_DIRS``

    This is a list of directories that can be built in parallel. These will be
    built after the directories in DIRS have been built.

``OPTIONAL_DIRS``

    This is a list of directories that can be built if they exist, but will not
    cause an error if they do not exist.  They are built serially in the order
    in which they are listed.

Variables for Building Libraries
--------------------------------

``LIBRARYNAME``

    This variable contains the base name of the library that will be built.  For
    example, to build a library named ``libsample.a``, ``LIBRARYNAME`` should
    be set to ``sample``.

``BUILD_ARCHIVE``

    By default, a library is a ``.o`` file that is linked directly into a
    program.  To build an archive (also known as a static library), set the
    ``BUILD_ARCHIVE`` variable.

``SHARED_LIBRARY``

    If ``SHARED_LIBRARY`` is defined in your Makefile, a shared (or dynamic)
    library will be built.

Variables for Building Programs
-------------------------------

``TOOLNAME``

    This variable contains the name of the program that will be built.  For
    example, to build an executable named ``sample``, ``TOOLNAME`` should be set
    to ``sample``.

``USEDLIBS``

    This variable holds a space separated list of libraries that should be
    linked into the program.  These libraries must be libraries that come from
    your **lib** directory.  The libraries must be specified without their
    ``lib`` prefix.  For example, to link ``libsample.a``, you would set
    ``USEDLIBS`` to ``sample.a``.

    Note that this works only for statically linked libraries.

``LLVMLIBS``

    This variable holds a space separated list of libraries that should be
    linked into the program.  These libraries must be LLVM libraries.  The
    libraries must be specified without their ``lib`` prefix.  For example, to
    link with a driver that performs an IR transformation you might set
    ``LLVMLIBS`` to this minimal set of libraries ``LLVMSupport.a LLVMCore.a
    LLVMBitReader.a LLVMAsmParser.a LLVMAnalysis.a LLVMTransformUtils.a
    LLVMScalarOpts.a LLVMTarget.a``.

    Note that this works only for statically linked libraries. LLVM is split
    into a large number of static libraries, and the list of libraries you
    require may be much longer than the list above. To see a full list of
    libraries use: ``llvm-config --libs all``.  Using ``LINK_COMPONENTS`` as
    described below, obviates the need to set ``LLVMLIBS``.

``LINK_COMPONENTS``

    This variable holds a space separated list of components that the LLVM
    ``Makefiles`` pass to the ``llvm-config`` tool to generate a link line for
    the program. For example, to link with all LLVM libraries use
    ``LINK_COMPONENTS = all``.

``LIBS``

    To link dynamic libraries, add ``-l<library base name>`` to the ``LIBS``
    variable.  The LLVM build system will look in the same places for dynamic
    libraries as it does for static libraries.

    For example, to link ``libsample.so``, you would have the following line in
    your ``Makefile``:

        .. code-block:: makefile

          LIBS += -lsample

Note that ``LIBS`` must occur in the Makefile after the inclusion of
``Makefile.common``.

Miscellaneous Variables
-----------------------

``CFLAGS`` & ``CPPFLAGS``

    This variable can be used to add options to the C and C++ compiler,
    respectively.  It is typically used to add options that tell the compiler
    the location of additional directories to search for header files.

    It is highly suggested that you append to ``CFLAGS`` and ``CPPFLAGS`` as
    opposed to overwriting them.  The LLVM ``Makefiles`` may already have
    useful options in them that you may not want to overwrite.

Placement of Object Code
========================

The final location of built libraries and executables will depend upon whether
you do a ``Debug``, ``Release``, or ``Profile`` build.

Libraries

    All libraries (static and dynamic) will be stored in
    ``PROJ_OBJ_ROOT/<type>/lib``, where *type* is ``Debug``, ``Release``, or
    ``Profile`` for a debug, optimized, or profiled build, respectively.

Executables

    All executables will be stored in ``PROJ_OBJ_ROOT/<type>/bin``, where *type*
    is ``Debug``, ``Release``, or ``Profile`` for a debug, optimized, or
    profiled build, respectively.

Further Help
============

If you have any questions or need any help creating an LLVM project, the LLVM
team would be more than happy to help.  You can always post your questions to
the `Discourse forums <https://discourse.llvm.org>`_.


.. _MyFirstLanguageFrontend:

=============================================
My First Language Frontend with LLVM Tutorial
=============================================

This is the “Kaleidoscope” Language tutorial, showing how to implement a simple language using LLVM components in C++.

**Requirements:** This tutorial assumes you know C++, but no previous
compiler experience is necessary.

Welcome to the "My First Language Frontend with LLVM" tutorial. Here we
run through the implementation of a simple language, showing
how fun and easy it can be.  This tutorial will get you up and running
fast and show a concrete example of something that uses LLVM to generate
code.

This tutorial introduces the simple "Kaleidoscope" language, building it
iteratively over the course of several chapters, showing how it is built
over time. This lets us cover a range of language design and LLVM-specific
ideas, showing and explaining the code for it all along the way,
and reduces the overwhelming amount of details up front.  We strongly
encourage that you *work with this code* - make a copy and hack it up and
experiment.

**Warning**: In order to focus on teaching compiler techniques and LLVM
specifically, this tutorial does *not* show best practices in software 
engineering principles.  For example, the code uses global variables pervasively, 
doesn't use `visitors <http://en.wikipedia.org/wiki/Visitor_pattern>`_, 
etc... but instead keeps things simple and focuses on the topics at hand.

This tutorial is structured into chapters covering individual topics,
allowing you to skip ahead as you wish:

-  `Chapter #1: Kaleidoscope language and Lexer <#LangImpl01>`_ - This shows 
   where we are going and the basic functionality that we want to build.  A 
   lexer is also the first part of building a parser for a language, and we
   use a simple C++ lexer which is easy to understand.
-  `Chapter #2: Implementing a Parser and AST <#LangImpl02>`_ -
   With the lexer in place, we can talk about parsing techniques and
   basic AST construction. This tutorial describes recursive descent
   parsing and operator precedence parsing.
-  `Chapter #3: Code generation to LLVM IR <#LangImpl03>`_ - with
   the AST ready, we show how easy it is to generate LLVM IR, and show
   a simple way to incorporate LLVM into your project.
-  `Chapter #4: Adding JIT and Optimizer Support <#LangImpl04>`_ -
   One great thing about LLVM is its support for JIT compilation, so
   we'll dive right into it and show you the 3 lines it takes to add JIT
   support. Later chapters show how to generate .o files.
-  `Chapter #5: Extending the Language: Control Flow <#LangImpl05>`_ - With
   the basic language up and running, we show how to extend
   it with control flow operations ('if' statement and a 'for' loop). This
   gives us a chance to talk about SSA construction and control flow.
-  `Chapter #6: Extending the Language: User-defined Operators
   <#LangImpl06>`_ - This chapter extends the language to let
   users define arbitrary unary and binary operators - with assignable
   precedence!  This allows us to build a significant piece of the
   "language" as library routines.
-  `Chapter #7: Extending the Language: Mutable Variables
   <#LangImpl07>`_ - This chapter talks about adding user-defined local
   variables along with an assignment operator. This shows how easy it is
   to construct SSA form in LLVM: LLVM does *not* require your front-end
   to construct SSA form in order to use it!
-  `Chapter #8: Compiling to Object Files <#LangImpl08>`_ - This
   chapter explains how to take LLVM IR and compile it down to object
   files, like a static compiler does.
-  `Chapter #9: Debug Information <#LangImpl09>`_ - A real language
   needs to support debuggers, so we add debug information that allows 
   setting breakpoints in Kaleidoscope functions, print out argument 
   variables, and call functions!
-  `Chapter #10: Conclusion and other tidbits <#LangImpl10>`_ - This
   chapter wraps up the series by discussing ways to extend the language
   and includes pointers to info on "special topics" like adding garbage
   collection support, exceptions, debugging, support for "spaghetti
   stacks", etc.

By the end of the tutorial, we'll have written a bit less than 1000 lines
of (non-comment, non-blank) lines of code. With this small amount of
code, we'll have built up a nice little compiler for a non-trivial
language including a hand-written lexer, parser, AST, as well as code
generation support - both static and JIT!  The breadth of this is a great
testament to the strengths of LLVM and shows why it is such a popular
target for language designers and others who need high performance code
generation.


.. _LangImpl01:

=========================================================
01. Kaleidoscope: Kaleidoscope Introduction and the Lexer
=========================================================


The Kaleidoscope Language
=========================

This tutorial is illustrated with a toy language called
"`Kaleidoscope <http://en.wikipedia.org/wiki/Kaleidoscope>`_" (derived
from "meaning beautiful, form, and view"). Kaleidoscope is a procedural
language that allows you to define functions, use conditionals, math,
etc. Over the course of the tutorial, we'll extend Kaleidoscope to
support the if/then/else construct, a for loop, user defined operators,
JIT compilation with a simple command line interface, debug info, etc.

We want to keep things simple, so the only datatype in Kaleidoscope
is a 64-bit floating point type (aka 'double' in C parlance). As such,
all values are implicitly double precision and the language doesn't
require type declarations. This gives the language a very nice and
simple syntax. For example, the following simple example computes
`Fibonacci numbers: <http://en.wikipedia.org/wiki/Fibonacci_number>`_

::

    # Compute the x'th fibonacci number.
    def fib(x)
      if x < 3 then
        1
      else
        fib(x-1)+fib(x-2)

    # This expression will compute the 40th number.
    fib(40)

We also allow Kaleidoscope to call into standard library functions - the
LLVM JIT makes this really easy. This means that you can use the
'extern' keyword to define a function before you use it (this is also
useful for mutually recursive functions).  For example:

::

    extern sin(arg);
    extern cos(arg);
    extern atan2(arg1 arg2);

    atan2(sin(.4), cos(42))

A more interesting example is included in Chapter 6 where we write a
little Kaleidoscope application that `displays a Mandelbrot
Set <#kicking-the-tires>`_ at various levels of magnification.

Let's dive into the implementation of this language!

The Lexer
=========

When it comes to implementing a language, the first thing needed is the
ability to process a text file and recognize what it says. The
traditional way to do this is to use a
"`lexer <http://en.wikipedia.org/wiki/Lexical_analysis>`_" (aka
'scanner') to break the input up into "tokens". Each token returned by
the lexer includes a token code and potentially some metadata (e.g. the
numeric value of a number). First, we define the possibilities:

.. code-block:: c++

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5,
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

Each token returned by our lexer will either be one of the Token enum
values or it will be an 'unknown' character like '+', which is returned
as its ASCII value. If the current token is an identifier, the
``IdentifierStr`` global variable holds the name of the identifier. If
the current token is a numeric literal (like 1.0), ``NumVal`` holds its
value. We use global variables for simplicity, but this is not the
best choice for a real language implementation :).

The actual implementation of the lexer is a single function named
``gettok``. The ``gettok`` function is called to return the next token
from standard input. Its definition starts as:

.. code-block:: c++

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

``gettok`` works by calling the C ``getchar()`` function to read
characters one at a time from standard input. It eats them as it
recognizes them and stores the last character read, but not processed,
in LastChar. The first thing that it has to do is ignore whitespace
between tokens. This is accomplished with the loop above.

The next thing ``gettok`` needs to do is recognize identifiers and
specific keywords like "def". Kaleidoscope does this with this simple
loop:

.. code-block:: c++

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        return tok_identifier;
      }

Note that this code sets the '``IdentifierStr``' global whenever it
lexes an identifier. Also, since language keywords are matched by the
same loop, we handle them here inline. Numeric values are similar:

.. code-block:: c++

      if (isdigit(LastChar) || LastChar == '.') {   // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), 0);
        return tok_number;
      }

This is all pretty straightforward code for processing input. When
reading a numeric value from input, we use the C ``strtod`` function to
convert it to a numeric value that we store in ``NumVal``. Note that
this isn't doing sufficient error checking: it will incorrectly read
"1.23.45.67" and handle it as if you typed in "1.23". Feel free to
extend it!  Next we handle comments:

.. code-block:: c++

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

We handle comments by skipping to the end of the line and then return
the next token. Finally, if the input doesn't match one of the above
cases, it is either an operator character like '+' or the end of the
file. These are handled with this code:

.. code-block:: c++

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

With this, we have the complete lexer for the basic Kaleidoscope
language (the `full code listing <#full-code-listing>`_ for the Lexer
is available in the `next chapter <#LangImpl02>`_ of the tutorial).
Next we'll `build a simple parser that uses this to build an Abstract
Syntax Tree <#LangImpl02>`_. When we have that, we'll include a
driver so that you can use the lexer and parser together.

`Next: Implementing a Parser and AST <#LangImpl02>`_


.. _LangImpl02:

===============================================
02. Kaleidoscope: Implementing a Parser and AST
===============================================


Chapter 2 Introduction
======================

Welcome to Chapter 2 of the "Implementing a language with
LLVM" tutorial. This chapter shows you how to use the
lexer, built in `Chapter 1 <#LangImpl01>`_, to build a full
`parser <http://en.wikipedia.org/wiki/Parsing>`_ for our Kaleidoscope
language. Once we have a parser, we'll define and build an `Abstract
Syntax Tree <http://en.wikipedia.org/wiki/Abstract_syntax_tree>`_ (AST).

The parser we will build uses a combination of `Recursive Descent
Parsing <http://en.wikipedia.org/wiki/Recursive_descent_parser>`_ and
`Operator-Precedence
Parsing <http://en.wikipedia.org/wiki/Operator-precedence_parser>`_ to
parse the Kaleidoscope language (the latter for binary expressions and
the former for everything else). Before we get to parsing though, let's
talk about the output of the parser: the Abstract Syntax Tree.

The Abstract Syntax Tree (AST)
==============================

The AST for a program captures its behavior in such a way that it is
easy for later stages of the compiler (e.g. code generation) to
interpret. We basically want one object for each construct in the
language, and the AST should closely model the language. In
Kaleidoscope, we have expressions, a prototype, and a function object.
We'll start with expressions first:

.. code-block:: c++

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}
    };

The code above shows the definition of the base ExprAST class and one
subclass which we use for numeric literals. The important thing to note
about this code is that the NumberExprAST class captures the numeric
value of the literal as an instance variable. This allows later phases
of the compiler to know what the stored numeric value is.

Right now we only create the AST, so there are no useful accessor
methods on them. It would be very easy to add a virtual method to pretty
print the code, for example. Here are the other expression AST node
definitions that we'll use in the basic form of the Kaleidoscope
language:

.. code-block:: c++

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
        : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
        : Callee(Callee), Args(std::move(Args)) {}
    };

This is all (intentionally) rather straight-forward: variables capture
the variable name, binary operators capture their opcode (e.g. '+'), and
calls capture a function name as well as a list of any argument
expressions. One thing that is nice about our AST is that it captures
the language features without talking about the syntax of the language.
Note that there is no discussion about precedence of binary operators,
lexical structure, etc.

For our basic language, these are all of the expression nodes we'll
define. Because it doesn't have conditional control flow, it isn't
Turing-complete; we'll fix that in a later installment. The two things
we need next are a way to talk about the interface to a function, and a
way to talk about functions themselves:

.. code-block:: c++

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes).
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args)
        : Name(Name), Args(std::move(Args)) {}

      const std::string &getName() const { return Name; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
        : Proto(std::move(Proto)), Body(std::move(Body)) {}
    };

In Kaleidoscope, functions are typed with just a count of their
arguments. Since all values are double precision floating point, the
type of each argument doesn't need to be stored anywhere. In a more
aggressive and realistic language, the "ExprAST" class would probably
have a type field.

With this scaffolding, we can now talk about parsing expressions and
function bodies in Kaleidoscope.

Parser Basics
=============

Now that we have an AST to build, we need to define the parser code to
build it. The idea here is that we want to parse something like "x+y"
(which is returned as three tokens by the lexer) into an AST that could
be generated with calls like this:

.. code-block:: c++

      auto LHS = std::make_unique<VariableExprAST>("x");
      auto RHS = std::make_unique<VariableExprAST>("y");
      auto Result = std::make_unique<BinaryExprAST>('+', std::move(LHS),
                                                    std::move(RHS));

In order to do this, we'll start by defining some basic helper routines:

.. code-block:: c++

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() {
      return CurTok = gettok();
    }

This implements a simple token buffer around the lexer. This allows us
to look one token ahead at what the lexer is returning. Every function
in our parser will assume that CurTok is the current token that needs to
be parsed.

.. code-block:: c++


    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }
    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

The ``LogError`` routines are simple helper routines that our parser will
use to handle errors. The error recovery in our parser will not be the
best and is not particular user-friendly, but it will be enough for our
tutorial. These routines make it easier to handle errors in routines
that have various return types: they always return null.

With these basic helper functions, we can implement the first piece of
our grammar: numeric literals.

Basic Expression Parsing
========================

We start with numeric literals, because they are the simplest to
process. For each production in our grammar, we'll define a function
which parses that production. For numeric literals, we have:

.. code-block:: c++

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

This routine is very simple: it expects to be called when the current
token is a ``tok_number`` token. It takes the current number value,
creates a ``NumberExprAST`` node, advances the lexer to the next token,
and finally returns.

There are some interesting aspects to this. The most important one is
that this routine eats all of the tokens that correspond to the
production and returns the lexer buffer with the next token (which is
not part of the grammar production) ready to go. This is a fairly
standard way to go for recursive descent parsers. For a better example,
the parenthesis operator is defined like this:

.. code-block:: c++

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

This function illustrates a number of interesting things about the
parser:

1) It shows how we use the LogError routines. When called, this function
expects that the current token is a '(' token, but after parsing the
subexpression, it is possible that there is no ')' waiting. For example,
if the user types in "(4 x" instead of "(4)", the parser should emit an
error. Because errors can occur, the parser needs a way to indicate that
they happened: in our parser, we return null on an error.

2) Another interesting aspect of this function is that it uses recursion
by calling ``ParseExpression`` (we will soon see that
``ParseExpression`` can call ``ParseParenExpr``). This is powerful
because it allows us to handle recursive grammars, and keeps each
production very simple. Note that parentheses do not cause construction
of AST nodes themselves. While we could do it this way, the most
important role of parentheses are to guide the parser and provide
grouping. Once the parser constructs the AST, parentheses are not
needed.

The next simple production is for handling variable references and
function calls:

.. code-block:: c++

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken();  // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken();  // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

This routine follows the same style as the other routines. (It expects
to be called if the current token is a ``tok_identifier`` token). It
also has recursion and error handling. One interesting aspect of this is
that it uses *look-ahead* to determine if the current identifier is a
stand alone variable reference or if it is a function call expression.
It handles this by checking to see if the token after the identifier is
a '(' token, constructing either a ``VariableExprAST`` or
``CallExprAST`` node as appropriate.

Now that we have all of our simple expression-parsing logic in place, we
can define a helper function to wrap it together into one entry point.
We call this class of expressions "primary" expressions, for reasons
that will become more clear `later in the
tutorial <#user-defined-unary-operators>`_. In order to parse an arbitrary
primary expression, we need to determine what sort of expression it is:

.. code-block:: c++

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      }
    }

Now that you see the definition of this function, it is more obvious why
we can assume the state of CurTok in the various functions. This uses
look-ahead to determine which sort of expression is being inspected, and
then parses it with a function call.

Now that basic expressions are handled, we need to handle binary
expressions. They are a bit more complex.

Binary Expression Parsing
=========================

Binary expressions are significantly harder to parse because they are
often ambiguous. For example, when given the string "x+y\*z", the parser
can choose to parse it as either "(x+y)\*z" or "x+(y\*z)". With common
definitions from mathematics, we expect the later parse, because "\*"
(multiplication) has higher *precedence* than "+" (addition).

There are many ways to handle this, but an elegant and efficient way is
to use `Operator-Precedence
Parsing <http://en.wikipedia.org/wiki/Operator-precedence_parser>`_.
This parsing technique uses the precedence of binary operators to guide
recursion. To start with, we need a table of precedences:

.. code-block:: c++

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0) return -1;
      return TokPrec;
    }

    int main() {
      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40;  // highest.
      ...
    }

For the basic form of Kaleidoscope, we will only support 4 binary
operators (this can obviously be extended by you, our brave and intrepid
reader). The ``GetTokPrecedence`` function returns the precedence for
the current token, or -1 if the token is not a binary operator. Having a
map makes it easy to add new operators and makes it clear that the
algorithm doesn't depend on the specific operators involved, but it
would be easy enough to eliminate the map and do the comparisons in the
``GetTokPrecedence`` function. (Or just use a fixed-size array).

With the helper above defined, we can now start parsing binary
expressions. The basic idea of operator precedence parsing is to break
down an expression with potentially ambiguous binary operators into
pieces. Consider, for example, the expression "a+b+(c+d)\*e\*f+g".
Operator precedence parsing considers this as a stream of primary
expressions separated by binary operators. As such, it will first parse
the leading primary expression "a", then it will see the pairs [+, b]
[+, (c+d)] [\*, e] [\*, f] and [+, g]. Note that because parentheses are
primary expressions, the binary expression parser doesn't need to worry
about nested subexpressions like (c+d) at all.

To start, an expression is a primary expression potentially followed by
a sequence of [binop,primaryexpr] pairs:

.. code-block:: c++

    /// expression
    ///   ::= primary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParsePrimary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

``ParseBinOpRHS`` is the function that parses the sequence of pairs for
us. It takes a precedence and a pointer to an expression for the part
that has been parsed so far. Note that "x" is a perfectly valid
expression: As such, "binoprhs" is allowed to be empty, in which case it
returns the expression that is passed into it. In our example above, the
code passes the expression for "a" into ``ParseBinOpRHS`` and the
current token is "+".

The precedence value passed into ``ParseBinOpRHS`` indicates the
*minimal operator precedence* that the function is allowed to eat. For
example, if the current pair stream is [+, x] and ``ParseBinOpRHS`` is
passed in a precedence of 40, it will not consume any tokens (because
the precedence of '+' is only 20). With this in mind, ``ParseBinOpRHS``
starts with:

.. code-block:: c++

    /// binoprhs
    ///   ::= ('+' primary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

This code gets the precedence of the current token and checks to see if
if is too low. Because we defined invalid tokens to have a precedence of
-1, this check implicitly knows that the pair-stream ends when the token
stream runs out of binary operators. If this check succeeds, we know
that the token is a binary operator and that it will be included in this
expression:

.. code-block:: c++

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken();  // eat binop

        // Parse the primary expression after the binary operator.
        auto RHS = ParsePrimary();
        if (!RHS)
          return nullptr;

As such, this code eats (and remembers) the binary operator and then
parses the primary expression that follows. This builds up the whole
pair, the first of which is [+, b] for the running example.

Now that we parsed the left-hand side of an expression and one pair of
the RHS sequence, we have to decide which way the expression associates.
In particular, we could have "(a+b) binop unparsed" or "a + (b binop
unparsed)". To determine this, we look ahead at "binop" to determine its
precedence and compare it to BinOp's precedence (which is '+' in this
case):

.. code-block:: c++

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {

If the precedence of the binop to the right of "RHS" is lower or equal
to the precedence of our current operator, then we know that the
parentheses associate as "(a+b) binop ...". In our example, the current
operator is "+" and the next operator is "+", we know that they have the
same precedence. In this case we'll create the AST node for "a+b", and
then continue parsing:

.. code-block:: c++

          ... if body omitted ...
        }

        // Merge LHS/RHS.
        LHS = std::make_unique<BinaryExprAST>(BinOp, std::move(LHS),
                                               std::move(RHS));
      }  // loop around to the top of the while loop.
    }

In our example above, this will turn "a+b+" into "(a+b)" and execute the
next iteration of the loop, with "+" as the current token. The code
above will eat, remember, and parse "(c+d)" as the primary expression,
which makes the current pair equal to [+, (c+d)]. It will then evaluate
the 'if' conditional above with "\*" as the binop to the right of the
primary. In this case, the precedence of "\*" is higher than the
precedence of "+" so the if condition will be entered.

The critical question left here is "how can the if condition parse the
right hand side in full"? In particular, to build the AST correctly for
our example, it needs to get all of "(c+d)\*e\*f" as the RHS expression
variable. The code to do this is surprisingly simple (code from the
above two blocks duplicated for context):

.. code-block:: c++

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec+1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }
        // Merge LHS/RHS.
        LHS = std::make_unique<BinaryExprAST>(BinOp, std::move(LHS),
                                               std::move(RHS));
      }  // loop around to the top of the while loop.
    }

At this point, we know that the binary operator to the RHS of our
primary has higher precedence than the binop we are currently parsing.
As such, we know that any sequence of pairs whose operators are all
higher precedence than "+" should be parsed together and returned as
"RHS". To do this, we recursively invoke the ``ParseBinOpRHS`` function
specifying "TokPrec+1" as the minimum precedence required for it to
continue. In our example above, this will cause it to return the AST
node for "(c+d)\*e\*f" as RHS, which is then set as the RHS of the '+'
expression.

Finally, on the next iteration of the while loop, the "+g" piece is
parsed and added to the AST. With this little bit of code (14
non-trivial lines), we correctly handle fully general binary expression
parsing in a very elegant way. This was a whirlwind tour of this code,
and it is somewhat subtle. I recommend running through it with a few
tough examples to see how it works.

This wraps up handling of expressions. At this point, we can point the
parser at an arbitrary token stream and build an expression from it,
stopping at the first token that is not part of the expression. Next up
we need to handle function definitions, etc.

Parsing the Rest
================

The next thing missing is handling of function prototypes. In
Kaleidoscope, these are used both for 'extern' function declarations as
well as function body definitions. The code to do this is
straight-forward and not very interesting (once you've survived
expressions):

.. code-block:: c++

    /// prototype
    ///   ::= id '(' id* ')'
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      if (CurTok != tok_identifier)
        return LogErrorP("Expected function name in prototype");

      std::string FnName = IdentifierStr;
      getNextToken();

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      // Read the list of argument names.
      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken();  // eat ')'.

      return std::make_unique<PrototypeAST>(FnName, std::move(ArgNames));
    }

Given this, a function definition is very simple, just a prototype plus
an expression to implement the body:

.. code-block:: c++

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken();  // eat def.
      auto Proto = ParsePrototype();
      if (!Proto) return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

In addition, we support 'extern' to declare functions like 'sin' and
'cos' as well as to support forward declaration of user functions. These
'extern's are just prototypes with no body:

.. code-block:: c++

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken();  // eat extern.
      return ParsePrototype();
    }

Finally, we'll also let the user type in arbitrary top-level expressions
and evaluate them on the fly. We will handle this by defining anonymous
nullary (zero argument) functions for them:

.. code-block:: c++

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("", std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

Now that we have all the pieces, let's build a little driver that will
let us actually *execute* this code we've built!

The Driver
==========

The driver for this simply invokes all of the parsing pieces with a
top-level dispatch loop. There isn't much interesting here, so I'll just
include the top-level loop. See `below <#full-code-listing>`_ for full code in the
"Top-Level Parsing" section.

.. code-block:: c++

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

The most interesting part of this is that we ignore top-level
semicolons. Why is this, you ask? The basic reason is that if you type
"4 + 5" at the command line, the parser doesn't know whether that is the
end of what you will type or not. For example, on the next line you
could type "def foo..." in which case 4+5 is the end of a top-level
expression. Alternatively you could type "\* 6", which would continue
the expression. Having top-level semicolons allows you to type "4+5;",
and the parser will know you are done.

Conclusions
===========

With just under 400 lines of commented code (240 lines of non-comment,
non-blank code), we fully defined our minimal language, including a
lexer, parser, and AST builder. With this done, the executable will
validate Kaleidoscope code and tell us if it is grammatically invalid.
For example, here is a sample interaction:

.. code-block:: bash

    $ ./a.out
    ready> def foo(x y) x+foo(y, 4.0);
    Parsed a function definition.
    ready> def foo(x y) x+y y;
    Parsed a function definition.
    Parsed a top-level expr
    ready> def foo(x y) x+y );
    Parsed a function definition.
    Error: unknown token when expecting an expression
    ready> extern sin(a);
    ready> Parsed an extern
    ready> ^D
    $

There is a lot of room for extension here. You can define new AST nodes,
extend the language in many ways, etc. In the `next
installment <#LangImpl03>`_, we will describe how to generate LLVM
Intermediate Representation (IR) from the AST.

Full Code Listing
=================

Here is the complete code listing for our running example.

.. code-block:: bash

    # Compile
    clang++ -g -O3 toy.cpp
    # Run
    ./a.out

Here is the code:

.. literalinclude:: ../../../examples/Kaleidoscope/Chapter2/toy.cpp
   :language: c++

`Next: Implementing Code Generation to LLVM IR <#LangImpl03>`_


.. _LangImpl03:

============================================
03. Kaleidoscope: Code generation to LLVM IR
============================================


Chapter 3 Introduction
======================

Welcome to Chapter 3 of the "`Implementing a language with LLVM" tutorial. 
This chapter shows you how to transform
the `Abstract Syntax Tree <#LangImpl02>`_, built in Chapter 2, into
LLVM IR. This will teach you a little bit about how LLVM does things, as
well as demonstrate how easy it is to use. It's much more work to build
a lexer and parser than it is to generate LLVM IR code. :)

**Please note**: the code in this chapter and later require LLVM 3.7 or
later. LLVM 3.6 and before will not work with it. Also note that you
need to use a version of this tutorial that matches your LLVM release:
If you are using an official LLVM release, use the version of the
documentation included with your release or on the `llvm.org releases
page <https://llvm.org/releases/>`_.

Code Generation Setup
=====================

In order to generate LLVM IR, we want some simple setup to get started.
First we define virtual code generation (codegen) methods in each AST
class:

.. code-block:: c++

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;
      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}
      Value *codegen() override;
    };
    ...

The codegen() method says to emit IR for that AST node along with all
the things it depends on, and they all return an LLVM Value object.
"Value" is the class used to represent a "`Static Single Assignment
(SSA) <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_
register" or "SSA value" in LLVM. The most distinct aspect of SSA values
is that their value is computed as the related instruction executes, and
it does not get a new value until (and if) the instruction re-executes.
In other words, there is no way to "change" an SSA value. For more
information, please read up on `Static Single
Assignment <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_
- the concepts are really quite natural once you grok them.

Note that instead of adding virtual methods to the ExprAST class
hierarchy, it could also make sense to use a `visitor
pattern <http://en.wikipedia.org/wiki/Visitor_pattern>`_ or some other
way to model this. Again, this tutorial won't dwell on good software
engineering practices: for our purposes, adding a virtual method is
simplest.

The second thing we want is a "LogError" method like we used for the
parser, which will be used to report errors found during code generation
(for example, use of an undeclared parameter):

.. code-block:: c++

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::unique_ptr<Module> TheModule;
    static std::map<std::string, Value *> NamedValues;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

The static variables will be used during code generation. ``TheContext``
is an opaque object that owns a lot of core LLVM data structures, such as
the type and constant value tables. We don't need to understand it in
detail, we just need a single instance to pass into APIs that require it.

The ``Builder`` object is a helper object that makes it easy to generate
LLVM instructions. Instances of the
`IRBuilder <https://llvm.org/doxygen/IRBuilder_8h_source.html>`_
class template keep track of the current place to insert instructions
and has methods to create new instructions.

``TheModule`` is an LLVM construct that contains functions and global
variables. In many ways, it is the top-level structure that the LLVM IR
uses to contain code. It will own the memory for all of the IR that we
generate, which is why the codegen() method returns a raw Value\*,
rather than a unique_ptr<Value>.

The ``NamedValues`` map keeps track of which values are defined in the
current scope and what their LLVM representation is. (In other words, it
is a symbol table for the code). In this form of Kaleidoscope, the only
things that can be referenced are function parameters. As such, function
parameters will be in this map when generating code for their function
body.

With these basics in place, we can start talking about how to generate
code for each expression. Note that this assumes that the ``Builder``
has been set up to generate code *into* something. For now, we'll assume
that this has already been done, and we'll just use it to emit code.

Expression Code Generation
==========================

Generating LLVM code for expression nodes is very straightforward: less
than 45 lines of commented code for all four of our expression nodes.
First we'll do numeric literals:

.. code-block:: c++

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

In the LLVM IR, numeric constants are represented with the
``ConstantFP`` class, which holds the numeric value in an ``APFloat``
internally (``APFloat`` has the capability of holding floating point
constants of Arbitrary Precision). This code basically just creates
and returns a ``ConstantFP``. Note that in the LLVM IR that constants
are all uniqued together and shared. For this reason, the API uses the
"foo::get(...)" idiom instead of "new foo(..)" or "foo::Create(..)".

.. code-block:: c++

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        LogErrorV("Unknown variable name");
      return V;
    }

References to variables are also quite simple using LLVM. In the simple
version of Kaleidoscope, we assume that the variable has already been
emitted somewhere and its value is available. In practice, the only
values that can be in the ``NamedValues`` map are function arguments.
This code simply checks to see that the specified name is in the map (if
not, an unknown variable is being referenced) and returns the value for
it. In future chapters, we'll add support for `loop induction
variables <#for-loop-expression>`_ in the symbol table, and for `local
variables <#user-defined-local-variables>`_.

.. code-block:: c++

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext),
                                     "booltmp");
      default:
        return LogErrorV("invalid binary operator");
      }
    }

Binary operators start to get more interesting. The basic idea here is
that we recursively emit code for the left-hand side of the expression,
then the right-hand side, then we compute the result of the binary
expression. In this code, we do a simple switch on the opcode to create
the right LLVM instruction.

In the example above, the LLVM builder class is starting to show its
value. IRBuilder knows where to insert the newly created instruction,
all you have to do is specify what instruction to create (e.g. with
``CreateFAdd``), which operands to use (``L`` and ``R`` here) and
optionally provide a name for the generated instruction.

One nice thing about LLVM is that the name is just a hint. For instance,
if the code above emits multiple "addtmp" variables, LLVM will
automatically provide each one with an increasing, unique numeric
suffix. Local value names for instructions are purely optional, but it
makes it much easier to read the IR dumps.

`LLVM instructions <https://llvm.org/docs/LangRef.html#instruction-reference>`_ 
are constrained by strict rules: for example, the Left and Right operands of an 
`add instruction <https://llvm.org/docs/LangRef.html#add-instruction>`_ must 
have the same type, and the result type of the add must match the operand types. 
Because all values in Kaleidoscope are doubles, this makes for very simple code 
for add, sub and mul.

On the other hand, LLVM specifies that the 
`fcmp instruction <https://llvm.org/docs/LangRef.html#fcmp-instruction>`_ 
always returns an 'i1' value (a one bit integer). The problem with this is 
that Kaleidoscope wants the value to be a 0.0 or 1.0 value. In order to get 
these semantics, we combine the fcmp instruction with a 
`uitofp instruction <https://llvm.org/docs/LangRef.html#uitofp-to-instruction>`_. 
This instruction converts its input integer into a floating point value by 
treating the input as an unsigned value. In contrast, if we used the 
`sitofp instruction <https://llvm.org/docs/LangRef.html#sitofp-to-instruction>`_, 
the Kaleidoscope '<' operator would return 0.0 and -1.0, depending on the input value.

.. code-block:: c++

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = TheModule->getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

Code generation for function calls is quite straightforward with LLVM. The code
above initially does a function name lookup in the LLVM Module's symbol table.
Recall that the LLVM Module is the container that holds the functions we are
JIT'ing. By giving each function the same name as what the user specifies, we
can use the LLVM symbol table to resolve function names for us.

Once we have the function to call, we recursively codegen each argument
that is to be passed in, and create an LLVM `call instruction 
<https://llvm.org/docs/LangRef.html#call-instruction>`_. Note that LLVM uses the 
native C calling conventions by default, allowing these calls to also call into
standard library functions like "sin" and "cos", with no additional
effort.

This wraps up our handling of the four basic expressions that we have so far in 
Kaleidoscope. Feel free to go in and add some more. For example, by browsing the 
`LLVM language reference <https://llvm.org/docs/LangRef.html>`_ you'll find
several other interesting instructions that are really easy to plug into
our basic framework.

Function Code Generation
========================

Code generation for prototypes and functions must handle a number of
details, which make their code less beautiful than expression code
generation, but allows us to illustrate some important points. First,
let's talk about code generation for prototypes: they are used both for
function bodies and external function declarations. The code starts
with:

.. code-block:: c++

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type*> Doubles(Args.size(),
                                 Type::getDoubleTy(*TheContext));
      FunctionType *FT =
        FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
        Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

This code packs a lot of power into a few lines. Note first that this
function returns a "Function\*" instead of a "Value\*". Because a
"prototype" really talks about the external interface for a function
(not the value computed by an expression), it makes sense for it to
return the LLVM Function it corresponds to when codegen'd.

The call to ``FunctionType::get`` creates the ``FunctionType`` that
should be used for a given Prototype. Since all function arguments in
Kaleidoscope are of type double, the first line creates a vector of "N"
LLVM double types. It then uses the ``Functiontype::get`` method to
create a function type that takes "N" doubles as arguments, returns one
double as a result, and that is not vararg (the false parameter
indicates this). Note that Types in LLVM are uniqued just like Constants
are, so you don't "new" a type, you "get" it.

The final line above actually creates the IR Function corresponding to
the Prototype. This indicates the type, linkage and name to use, as
well as which module to insert into. "`external
linkage <https://llvm.org/docs/LangRef.html#linkage>`_" means that the function 
may be defined outside the current module and/or that it is callable by
functions outside the module. The Name passed in is the name the user
specified: since "``TheModule``" is specified, this name is registered
in "``TheModule``"s symbol table.

.. code-block:: c++

  // Set names for all arguments.
  unsigned Idx = 0;
  for (auto &Arg : F->args())
    Arg.setName(Args[Idx++]);

  return F;

Finally, we set the name of each of the function's arguments according to the
names given in the Prototype. This step isn't strictly necessary, but keeping
the names consistent makes the IR more readable, and allows subsequent code to
refer directly to the arguments for their names, rather than having to look
them up in the Prototype AST.

At this point we have a function prototype with no body. This is how LLVM IR
represents function declarations. For extern statements in Kaleidoscope, this
is as far as we need to go. For function definitions however, we need to
codegen and attach a function body.

.. code-block:: c++

  Function *FunctionAST::codegen() {
      // First, check for an existing function from a previous 'extern' declaration.
    Function *TheFunction = TheModule->getFunction(Proto->getName());

    if (!TheFunction)
      TheFunction = Proto->codegen();

    if (!TheFunction)
      return nullptr;

    if (!TheFunction->empty())
      return (Function*)LogErrorV("Function cannot be redefined.");


For function definitions, we start by searching TheModule's symbol table for an
existing version of this function, in case one has already been created using an
'extern' statement. If Module::getFunction returns null then no previous version
exists, so we'll codegen one from the Prototype. In either case, we want to
assert that the function is empty (i.e. has no body yet) before we start.

.. code-block:: c++

  // Create a new basic block to start insertion into.
  BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
  Builder->SetInsertPoint(BB);

  // Record the function arguments in the NamedValues map.
  NamedValues.clear();
  for (auto &Arg : TheFunction->args())
    NamedValues[std::string(Arg.getName())] = &Arg;

Now we get to the point where the ``Builder`` is set up. The first line
creates a new `basic block <http://en.wikipedia.org/wiki/Basic_block>`_
(named "entry"), which is inserted into ``TheFunction``. The second line
then tells the builder that new instructions should be inserted into the
end of the new basic block. Basic blocks in LLVM are an important part
of functions that define the `Control Flow
Graph <http://en.wikipedia.org/wiki/Control_flow_graph>`_. Since we
don't have any control flow, our functions will only contain one block
at this point. We'll fix this in `Chapter 5 <#LangImpl05>`_ :).

Next we add the function arguments to the NamedValues map (after first clearing
it out) so that they're accessible to ``VariableExprAST`` nodes.

.. code-block:: c++

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        return TheFunction;
      }

Once the insertion point has been set up and the NamedValues map populated,
we call the ``codegen()`` method for the root expression of the function. If no
error happens, this emits code to compute the expression into the entry block
and returns the value that was computed. Assuming no error, we then create an
LLVM `ret instruction <https://llvm.org/docs/LangRef.html#ret-instruction>`_, 
which completes the function. Once the function is built, we call ``verifyFunction``, 
which is provided by LLVM. This function does a variety of consistency checks on
the generated code, to determine if our compiler is doing everything
right. Using this is important: it can catch a lot of bugs. Once the
function is finished and validated, we return it.

.. code-block:: c++

      // Error reading body, remove function.
      TheFunction->eraseFromParent();
      return nullptr;
    }

The only piece left here is handling of the error case. For simplicity,
we handle this by merely deleting the function we produced with the
``eraseFromParent`` method. This allows the user to redefine a function
that they incorrectly typed in before: if we didn't delete it, it would
live in the symbol table, with a body, preventing future redefinition.

This code does have a bug, though: If the ``FunctionAST::codegen()`` method
finds an existing IR Function, it does not validate its signature against the
definition's own prototype. This means that an earlier 'extern' declaration will
take precedence over the function definition's signature, which can cause
codegen to fail, for instance if the function arguments are named differently.
There are a number of ways to fix this bug, see what you can come up with! Here
is a testcase:

::

    extern foo(a);     # ok, defines foo.
    def foo(b) b;      # Error: Unknown variable name. (decl using 'a' takes precedence).

Driver Changes and Closing Thoughts
===================================

For now, code generation to LLVM doesn't really get us much, except that
we can look at the pretty IR calls. The sample code inserts calls to
codegen into the "``HandleDefinition``", "``HandleExtern``" etc
functions, and then dumps out the LLVM IR. This gives a nice way to look
at the LLVM IR for simple functions. For example:

::

    ready> 4+5;
    Read top-level expression:
    define double @0() {
    entry:
      ret double 9.000000e+00
    }

Note how the parser turns the top-level expression into anonymous
functions for us. This will be handy when we add `JIT
support <#adding-a-jit-compiler>`_ in the next chapter. Also note that the
code is very literally transcribed, no optimizations are being performed
except simple constant folding done by IRBuilder. We will `add
optimizations <#trivial-constant-folding>`_ explicitly in the next
chapter.

::

    ready> def foo(a b) a*a + 2*a*b + b*b;
    Read function definition:
    define double @foo(double %a, double %b) {
    entry:
      %multmp = fmul double %a, %a
      %multmp1 = fmul double 2.000000e+00, %a
      %multmp2 = fmul double %multmp1, %b
      %addtmp = fadd double %multmp, %multmp2
      %multmp3 = fmul double %b, %b
      %addtmp4 = fadd double %addtmp, %multmp3
      ret double %addtmp4
    }

This shows some simple arithmetic. Notice the striking similarity to the
LLVM builder calls that we use to create the instructions.

::

    ready> def bar(a) foo(a, 4.0) + bar(31337);
    Read function definition:
    define double @bar(double %a) {
    entry:
      %calltmp = call double @foo(double %a, double 4.000000e+00)
      %calltmp1 = call double @bar(double 3.133700e+04)
      %addtmp = fadd double %calltmp, %calltmp1
      ret double %addtmp
    }

This shows some function calls. Note that this function will take a long
time to execute if you call it. In the future we'll add conditional
control flow to actually make recursion useful :).

::

    ready> extern cos(x);
    Read extern:
    declare double @cos(double)

    ready> cos(1.234);
    Read top-level expression:
    define double @1() {
    entry:
      %calltmp = call double @cos(double 1.234000e+00)
      ret double %calltmp
    }

This shows an extern for the libm "cos" function, and a call to it.

.. TODO:: Abandon Pygments' horrible `llvm` lexer. It just totally gives up
   on highlighting this due to the first line.

::

    ready> ^D
    ; ModuleID = 'my cool jit'

    define double @0() {
    entry:
      %addtmp = fadd double 4.000000e+00, 5.000000e+00
      ret double %addtmp
    }

    define double @foo(double %a, double %b) {
    entry:
      %multmp = fmul double %a, %a
      %multmp1 = fmul double 2.000000e+00, %a
      %multmp2 = fmul double %multmp1, %b
      %addtmp = fadd double %multmp, %multmp2
      %multmp3 = fmul double %b, %b
      %addtmp4 = fadd double %addtmp, %multmp3
      ret double %addtmp4
    }

    define double @bar(double %a) {
    entry:
      %calltmp = call double @foo(double %a, double 4.000000e+00)
      %calltmp1 = call double @bar(double 3.133700e+04)
      %addtmp = fadd double %calltmp, %calltmp1
      ret double %addtmp
    }

    declare double @cos(double)

    define double @1() {
    entry:
      %calltmp = call double @cos(double 1.234000e+00)
      ret double %calltmp
    }

When you quit the current demo (by sending an EOF via CTRL+D on Linux
or CTRL+Z and ENTER on Windows), it dumps out the IR for the entire
module generated. Here you can see the big picture with all the
functions referencing each other.

This wraps up the third chapter of the Kaleidoscope tutorial. Up next,
we'll describe how to `add JIT codegen and optimizer support <#LangImpl04>`_ 
to this so we can actually start running code!

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
the LLVM code generator. Because this uses the LLVM libraries, we need
to link them in. To do this, we use the
`llvm-config <https://llvm.org/cmds/llvm-config.html>`_ tool to inform
our makefile/command line about which options to use:

.. code-block:: bash

    # Compile
    clang++ -g -O3 toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core` -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter3/toy.cpp
..   :language: c++

.. code-block:: cpp

    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include <algorithm>
    #include <cctype>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <vector>

    using namespace llvm;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes).
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args)
          : Name(Name), Args(std::move(Args)) {}

      Function *codegen();
      const std::string &getName() const { return Name; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      }
    }

    /// binoprhs
    ///   ::= ('+' primary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the primary expression after the binary operator.
        auto RHS = ParsePrimary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= primary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParsePrimary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      if (CurTok != tok_identifier)
        return LogErrorP("Expected function name in prototype");

      std::string FnName = IdentifierStr;
      getNextToken();

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      return std::make_unique<PrototypeAST>(FnName, std::move(ArgNames));
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, Value *> NamedValues;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");
      return V;
    }

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        return LogErrorV("invalid binary operator");
      }
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = TheModule->getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // First, check for an existing function from a previous 'extern' declaration.
      Function *TheFunction = TheModule->getFunction(Proto->getName());

      if (!TheFunction)
        TheFunction = Proto->codegen();

      if (!TheFunction)
        return nullptr;

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args())
        NamedValues[std::string(Arg.getName())] = &Arg;

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModule() {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("my cool jit", *TheContext);

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read top-level expression:");
          FnIR->print(errs());
          fprintf(stderr, "\n");

          // Remove the anonymous expression.
          FnIR->eraseFromParent();
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      // Make the module, which holds all the code.
      InitializeModule();

      // Run the main "interpreter loop" now.
      MainLoop();

      // Print out all of the generated code.
      TheModule->print(errs(), nullptr);

      return 0;
    }


`Next: Adding JIT and Optimizer Support <#LangImpl04>`_



.. _LangImpl04:

==================================================
04. Kaleidoscope: Adding JIT and Optimizer Support
==================================================


Chapter 4 Introduction
======================

Welcome to Chapter 4 of the "Implementing a language with LLVM" tutorial. 
Chapters 1-3 described the implementation of a simple language and added 
support for generating LLVM IR. This chapter describes two new techniques: 
adding optimizer support to your language, and adding JIT compiler support. 
These additions will demonstrate how to get nice, efficient code for the 
Kaleidoscope language.

Trivial Constant Folding
========================

Our demonstration for Chapter 3 is elegant and easy to extend.
Unfortunately, it does not produce wonderful code. The IRBuilder,
however, does give us obvious optimizations when compiling simple code:

::

    ready> def test(x) 1+2+x;
    Read function definition:
    define double @test(double %x) {
    entry:
            %addtmp = fadd double 3.000000e+00, %x
            ret double %addtmp
    }

This code is not a literal transcription of the AST built by parsing the
input. That would be:

::

    ready> def test(x) 1+2+x;
    Read function definition:
    define double @test(double %x) {
    entry:
            %addtmp = fadd double 2.000000e+00, 1.000000e+00
            %addtmp1 = fadd double %addtmp, %x
            ret double %addtmp1
    }

Constant folding, as seen above, in particular, is a very common and
very important optimization: so much so that many language implementors
implement constant folding support in their AST representation.

With LLVM, you don't need this support in the AST. Since all calls to
build LLVM IR go through the LLVM IR builder, the builder itself checked
to see if there was a constant folding opportunity when you call it. If
so, it just does the constant fold and return the constant instead of
creating an instruction.

Well, that was easy :). In practice, we recommend always using
``IRBuilder`` when generating code like this. It has no "syntactic
overhead" for its use (you don't have to uglify your compiler with
constant checks everywhere) and it can dramatically reduce the amount of
LLVM IR that is generated in some cases (particular for languages with a
macro preprocessor or that use a lot of constants).

On the other hand, the ``IRBuilder`` is limited by the fact that it does
all of its analysis inline with the code as it is built. If you take a
slightly more complex example:

::

    ready> def test(x) (1+2+x)*(x+(1+2));
    ready> Read function definition:
    define double @test(double %x) {
    entry:
            %addtmp = fadd double 3.000000e+00, %x
            %addtmp1 = fadd double %x, 3.000000e+00
            %multmp = fmul double %addtmp, %addtmp1
            ret double %multmp
    }

In this case, the LHS and RHS of the multiplication are the same value.
We'd really like to see this generate "``tmp = x+3; result = tmp*tmp;``"
instead of computing "``x+3``" twice.

Unfortunately, no amount of local analysis will be able to detect and
correct this. This requires two transformations: reassociation of
expressions (to make the adds lexically identical) and Common
Subexpression Elimination (CSE) to delete the redundant add instruction.
Fortunately, LLVM provides a broad range of optimizations that you can
use, in the form of "passes".

LLVM Optimization Passes
========================

LLVM provides many optimization passes, which do many different sorts of
things and have different tradeoffs. Unlike other systems, LLVM doesn't
hold to the mistaken notion that one set of optimizations is right for
all languages and for all situations. LLVM allows a compiler implementor
to make complete decisions about what optimizations to use, in which
order, and in what situation.

As a concrete example, LLVM supports both "whole module" passes, which
look across as large of body of code as they can (often a whole file,
but if run at link time, this can be a substantial portion of the whole
program). It also supports and includes "per-function" passes which just
operate on a single function at a time, without looking at other
functions. For more information on passes and how they are run, see the
`How to Write a Pass <https://llvm.org/docs/WritingAnLLVMPass.html>`_ 
document and the `List of LLVM Passes <https://llvm.org/docs/Passes.html>`_.

For Kaleidoscope, we are currently generating functions on the fly, one
at a time, as the user types them in. We aren't shooting for the
ultimate optimization experience in this setting, but we also want to
catch the easy and quick stuff where possible. As such, we will choose
to run a few per-function optimizations as the user types the function
in. If we wanted to make a "static Kaleidoscope compiler", we would use
exactly the code we have now, except that we would defer running the
optimizer until the entire file has been parsed.

In addition to the distinction between function and module passes, passes can be
divided into transform and analysis passes. Transform passes mutate the IR, and
analysis passes compute information that other passes can use. In order to add
a transform pass, all analysis passes it depends upon must be registered in
advance.

In order to get per-function optimizations going, we need to set up a
`FunctionPassManager <https://llvm.org/docs/WritingAnLLVMPass.html#what-passmanager-doesr>`_ 
to hold and organize the LLVM optimizations that we want to run. Once we have
that, we can add a set of optimizations to run. We'll need a new
FunctionPassManager for each module that we want to optimize, so we'll
add to a function created in the previous chapter (``InitializeModule()``):

.. code-block:: c++

    void InitializeModuleAndManagers(void) {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("KaleidoscopeJIT", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create new pass and analysis managers.
      TheFPM = std::make_unique<FunctionPassManager>();
      TheLAM = std::make_unique<LoopAnalysisManager>();
      TheFAM = std::make_unique<FunctionAnalysisManager>();
      TheCGAM = std::make_unique<CGSCCAnalysisManager>();
      TheMAM = std::make_unique<ModuleAnalysisManager>();
      ThePIC = std::make_unique<PassInstrumentationCallbacks>();
      TheSI = std::make_unique<StandardInstrumentations>(*TheContext,
                                                        /*DebugLogging*/ true);
      TheSI->registerCallbacks(*ThePIC, TheMAM.get());
      ...

After initializing the global module ``TheModule`` and the FunctionPassManager,
we need to initialize other parts of the framework. The four AnalysisManagers
allow us to add analysis passes that run across the four levels of the IR
hierarchy. PassInstrumentationCallbacks and StandardInstrumentations are
required for the pass instrumentation framework, which allows developers to
customize what happens between passes.

Once these managers are set up, we use a series of "addPass" calls to add a
bunch of LLVM transform passes:

.. code-block:: c++

      // Add transform passes.
      // Do simple "peephole" optimizations and bit-twiddling optzns.
      TheFPM->addPass(InstCombinePass());
      // Reassociate expressions.
      TheFPM->addPass(ReassociatePass());
      // Eliminate Common SubExpressions.
      TheFPM->addPass(GVNPass());
      // Simplify the control flow graph (deleting unreachable blocks, etc).
      TheFPM->addPass(SimplifyCFGPass());

In this case, we choose to add four optimization passes.
The passes we choose here are a pretty standard set
of "cleanup" optimizations that are useful for a wide variety of code. I won't
delve into what they do but, believe me, they are a good starting place :).

Next, we register the analysis passes used by the transform passes.

.. code-block:: c++

      // Register analysis passes used in these transform passes.
      PassBuilder PB;
      PB.registerModuleAnalyses(*TheMAM);
      PB.registerFunctionAnalyses(*TheFAM);
      PB.crossRegisterProxies(*TheLAM, *TheFAM, *TheCGAM, *TheMAM);
    }

Once the PassManager is set up, we need to make use of it. We do this by
running it after our newly created function is constructed (in
``FunctionAST::codegen()``), but before it is returned to the client:

.. code-block:: c++

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder.CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        // Optimize the function.
        TheFPM->run(*TheFunction, *TheFAM);

        return TheFunction;
      }

As you can see, this is pretty straightforward. The
``FunctionPassManager`` optimizes and updates the LLVM Function\* in
place, improving (hopefully) its body. With this in place, we can try
our test above again:

::

    ready> def test(x) (1+2+x)*(x+(1+2));
    ready> Read function definition:
    define double @test(double %x) {
    entry:
            %addtmp = fadd double %x, 3.000000e+00
            %multmp = fmul double %addtmp, %addtmp
            ret double %multmp
    }

As expected, we now get our nicely optimized code, saving a floating
point add instruction from every execution of this function.

LLVM provides a wide variety of optimizations that can be used in certain 
circumstances. Some `documentation about the various passes 
<https://llvm.org/docs/Passes.html>`_ is available, but it isn't very complete.
Another good source of ideas can come from looking at the passes that
``Clang`` runs to get started. The "``opt``" tool allows you to
experiment with passes from the command line, so you can see if they do
anything.

Now that we have reasonable code coming out of our front-end, let's talk
about executing it!

Adding a JIT Compiler
=====================

Code that is available in LLVM IR can have a wide variety of tools
applied to it. For example, you can run optimizations on it (as we did
above), you can dump it out in textual or binary forms, you can compile
the code to an assembly file (.s) for some target, or you can JIT
compile it. The nice thing about the LLVM IR representation is that it
is the "common currency" between many different parts of the compiler.

In this section, we'll add JIT compiler support to our interpreter. The
basic idea that we want for Kaleidoscope is to have the user enter
function bodies as they do now, but immediately evaluate the top-level
expressions they type in. For example, if they type in "1 + 2;", we
should evaluate and print out 3. If they define a function, they should
be able to call it from the command line.

In order to do this, we first prepare the environment to create code for
the current native target and declare and initialize the JIT. This is
done by calling some ``InitializeNativeTarget\*`` functions and
adding a global variable ``TheJIT``, and initializing it in
``main``:

.. code-block:: c++

    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    ...
    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      TheJIT = std::make_unique<KaleidoscopeJIT>();

      // Run the main "interpreter loop" now.
      MainLoop();

      return 0;
    }

We also need to setup the data layout for the JIT:

.. code-block:: c++

    void InitializeModuleAndPassManager(void) {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("my cool jit", TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create a new pass manager attached to it.
      TheFPM = std::make_unique<legacy::FunctionPassManager>(TheModule.get());
      ...

The KaleidoscopeJIT class is a simple JIT built specifically for these
tutorials, available inside the LLVM source code
at `llvm-src/examples/Kaleidoscope/include/KaleidoscopeJIT.h
<https://github.com/llvm/llvm-project/blob/main/llvm/examples/Kaleidoscope/include/KaleidoscopeJIT.h>`_.
In later chapters we will look at how it works and extend it with
new features, but for now we will take it as given. Its API is very simple:
``addModule`` adds an LLVM IR module to the JIT, making its functions
available for execution (with its memory managed by a ``ResourceTracker``); and
``lookup`` allows us to look up pointers to the compiled code.

We can take this simple API and change our code that parses top-level expressions to
look like this:

.. code-block:: c++

    static ExitOnError ExitOnErr;
    ...
    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (FnAST->codegen()) {
          // Create a ResourceTracker to track JIT'd memory allocated to our
          // anonymous expression -- that way we can free it after executing.
          auto RT = TheJIT->getMainJITDylib().createResourceTracker();

          auto TSM = ThreadSafeModule(std::move(TheModule), std::move(TheContext));
          ExitOnErr(TheJIT->addModule(std::move(TSM), RT));
          InitializeModuleAndPassManager();

          // Search the JIT for the __anon_expr symbol.
          auto ExprSymbol = ExitOnErr(TheJIT->lookup("__anon_expr"));
          assert(ExprSymbol && "Function not found");

          // Get the symbol's address and cast it to the right type (takes no
          // arguments, returns a double) so we can call it as a native function.
          double (*FP)() = ExprSymbol.getAddress().toPtr<double (*)()>();
          fprintf(stderr, "Evaluated to %f\n", FP());

          // Delete the anonymous expression module from the JIT.
          ExitOnErr(RT->remove());
        }

If parsing and codegen succeed, the next step is to add the module containing
the top-level expression to the JIT. We do this by calling addModule, which
triggers code generation for all the functions in the module, and accepts a
``ResourceTracker`` which can be used to remove the module from the JIT later. Once the module
has been added to the JIT it can no longer be modified, so we also open a new
module to hold subsequent code by calling ``InitializeModuleAndPassManager()``.

Once we've added the module to the JIT we need to get a pointer to the final
generated code. We do this by calling the JIT's ``lookup`` method, and passing
the name of the top-level expression function: ``__anon_expr``. Since we just
added this function, we assert that ``lookup`` returned a result.

Next, we get the in-memory address of the ``__anon_expr`` function by calling
``getAddress()`` on the symbol. Recall that we compile top-level expressions
into a self-contained LLVM function that takes no arguments and returns the
computed double. Because the LLVM JIT compiler matches the native platform ABI,
this means that you can just cast the result pointer to a function pointer of
that type and call it directly. This means, there is no difference between JIT
compiled code and native machine code that is statically linked into your
application.

Finally, since we don't support re-evaluation of top-level expressions, we
remove the module from the JIT when we're done to free the associated memory.
Recall, however, that the module we created a few lines earlier (via
``InitializeModuleAndPassManager``) is still open and waiting for new code to be
added.

With just these two changes, let's see how Kaleidoscope works now!

::

    ready> 4+5;
    Read top-level expression:
    define double @0() {
    entry:
      ret double 9.000000e+00
    }

    Evaluated to 9.000000

Well this looks like it is basically working. The dump of the function
shows the "no argument function that always returns double" that we
synthesize for each top-level expression that is typed in. This
demonstrates very basic functionality, but can we do more?

::

    ready> def testfunc(x y) x + y*2;
    Read function definition:
    define double @testfunc(double %x, double %y) {
    entry:
      %multmp = fmul double %y, 2.000000e+00
      %addtmp = fadd double %multmp, %x
      ret double %addtmp
    }

    ready> testfunc(4, 10);
    Read top-level expression:
    define double @1() {
    entry:
      %calltmp = call double @testfunc(double 4.000000e+00, double 1.000000e+01)
      ret double %calltmp
    }

    Evaluated to 24.000000

    ready> testfunc(5, 10);
    ready> LLVM ERROR: Program used external function 'testfunc' which could not be resolved!


Function definitions and calls also work, but something went very wrong on that
last line. The call looks valid, so what happened? As you may have guessed from
the API a Module is a unit of allocation for the JIT, and testfunc was part
of the same module that contained anonymous expression. When we removed that
module from the JIT to free the memory for the anonymous expression, we deleted
the definition of ``testfunc`` along with it. Then, when we tried to call
testfunc a second time, the JIT could no longer find it.

The easiest way to fix this is to put the anonymous expression in a separate
module from the rest of the function definitions. The JIT will happily resolve
function calls across module boundaries, as long as each of the functions called
has a prototype, and is added to the JIT before it is called. By putting the
anonymous expression in a different module we can delete it without affecting
the rest of the functions.

In fact, we're going to go a step further and put every function in its own
module. Doing so allows us to exploit a useful property of the KaleidoscopeJIT
that will make our environment more REPL-like: Functions can be added to the
JIT more than once (unlike a module where every function must have a unique
definition). When you look up a symbol in KaleidoscopeJIT it will always return
the most recent definition:

::

    ready> def foo(x) x + 1;
    Read function definition:
    define double @foo(double %x) {
    entry:
      %addtmp = fadd double %x, 1.000000e+00
      ret double %addtmp
    }

    ready> foo(2);
    Evaluated to 3.000000

    ready> def foo(x) x + 2;
    define double @foo(double %x) {
    entry:
      %addtmp = fadd double %x, 2.000000e+00
      ret double %addtmp
    }

    ready> foo(2);
    Evaluated to 4.000000


To allow each function to live in its own module we'll need a way to
re-generate previous function declarations into each new module we open:

.. code-block:: c++

    static std::unique_ptr<KaleidoscopeJIT> TheJIT;

    ...

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    ...

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);

    ...

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;


To enable this, we'll start by adding a new global, ``FunctionProtos``, that
holds the most recent prototype for each function. We'll also add a convenience
method, ``getFunction()``, to replace calls to ``TheModule->getFunction()``.
Our convenience method searches ``TheModule`` for an existing function
declaration, falling back to generating a new declaration from FunctionProtos if
it doesn't find one. In ``CallExprAST::codegen()`` we just need to replace the
call to ``TheModule->getFunction()``. In ``FunctionAST::codegen()`` we need to
update the FunctionProtos map first, then call ``getFunction()``. With this
done, we can always obtain a function declaration in the current module for any
previously declared function.

We also need to update HandleDefinition and HandleExtern:

.. code-block:: c++

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          ExitOnErr(TheJIT->addModule(
              ThreadSafeModule(std::move(TheModule), std::move(TheContext))));
          InitializeModuleAndPassManager();
        }
      } else {
        // Skip token for error recovery.
         getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

In HandleDefinition, we add two lines to transfer the newly defined function to
the JIT and open a new module. In HandleExtern, we just need to add one line to
add the prototype to FunctionProtos.

.. warning::
    Duplication of symbols in separate modules is not allowed since LLVM-9. That means you can not redefine function in your Kaleidoscope as its shown below. Just skip this part.

    The reason is that the newer OrcV2 JIT APIs are trying to stay very close to the static and dynamic linker rules, including rejecting duplicate symbols. Requiring symbol names to be unique allows us to support concurrent compilation for symbols using the (unique) symbol names as keys for tracking.

With these changes made, let's try our REPL again (I removed the dump of the
anonymous functions this time, you should get the idea by now :) :

::

    ready> def foo(x) x + 1;
    ready> foo(2);
    Evaluated to 3.000000

    ready> def foo(x) x + 2;
    ready> foo(2);
    Evaluated to 4.000000

It works!

Even with this simple code, we get some surprisingly powerful capabilities -
check this out:

::

    ready> extern sin(x);
    Read extern:
    declare double @sin(double)

    ready> extern cos(x);
    Read extern:
    declare double @cos(double)

    ready> sin(1.0);
    Read top-level expression:
    define double @2() {
    entry:
      ret double 0x3FEAED548F090CEE
    }

    Evaluated to 0.841471

    ready> def foo(x) sin(x)*sin(x) + cos(x)*cos(x);
    Read function definition:
    define double @foo(double %x) {
    entry:
      %calltmp = call double @sin(double %x)
      %multmp = fmul double %calltmp, %calltmp
      %calltmp2 = call double @cos(double %x)
      %multmp4 = fmul double %calltmp2, %calltmp2
      %addtmp = fadd double %multmp, %multmp4
      ret double %addtmp
    }

    ready> foo(4.0);
    Read top-level expression:
    define double @3() {
    entry:
      %calltmp = call double @foo(double 4.000000e+00)
      ret double %calltmp
    }

    Evaluated to 1.000000

Whoa, how does the JIT know about sin and cos? The answer is surprisingly
simple: The KaleidoscopeJIT has a straightforward symbol resolution rule that
it uses to find symbols that aren't available in any given module: First
it searches all the modules that have already been added to the JIT, from the
most recent to the oldest, to find the newest definition. If no definition is
found inside the JIT, it falls back to calling "``dlsym("sin")``" on the
Kaleidoscope process itself. Since "``sin``" is defined within the JIT's
address space, it simply patches up calls in the module to call the libm
version of ``sin`` directly. But in some cases this even goes further:
as sin and cos are names of standard math functions, the constant folder
will directly evaluate the function calls to the correct result when called
with constants like in the "``sin(1.0)``" above.

In the future we'll see how tweaking this symbol resolution rule can be used to
enable all sorts of useful features, from security (restricting the set of
symbols available to JIT'd code), to dynamic code generation based on symbol
names, and even lazy compilation.

One immediate benefit of the symbol resolution rule is that we can now extend
the language by writing arbitrary C++ code to implement operations. For example,
if we add:

.. code-block:: c++

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

Note, that for Windows we need to actually export the functions because
the dynamic symbol loader will use ``GetProcAddress`` to find the symbols.

Now we can produce simple output to the console by using things like:
"``extern putchard(x); putchard(120);``", which prints a lowercase 'x'
on the console (120 is the ASCII code for 'x'). Similar code could be
used to implement file I/O, console input, and many other capabilities
in Kaleidoscope.

This completes the JIT and optimizer chapter of the Kaleidoscope
tutorial. At this point, we can compile a non-Turing-complete
programming language, optimize and JIT compile it in a user-driven way.
Next up we'll look into `extending the language with control flow
constructs <#LangImpl05>`_, tackling some interesting LLVM IR issues
along the way.

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
the LLVM JIT and optimizer. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

If you are compiling this on Linux, make sure to add the "-rdynamic"
option as well. This makes sure that the external functions are resolved
properly at runtime.

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter4/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "../include/KaleidoscopeJIT.h"
    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/PassManager.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/Passes/PassBuilder.h"
    #include "llvm/Passes/StandardInstrumentations.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include "llvm/Transforms/Scalar/Reassociate.h"
    #include "llvm/Transforms/Scalar/SimplifyCFG.h"
    #include <algorithm>
    #include <cassert>
    #include <cctype>
    #include <cstdint>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <vector>

    using namespace llvm;
    using namespace llvm::orc;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes).
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args)
          : Name(Name), Args(std::move(Args)) {}

      Function *codegen();
      const std::string &getName() const { return Name; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      }
    }

    /// binoprhs
    ///   ::= ('+' primary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the primary expression after the binary operator.
        auto RHS = ParsePrimary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= primary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParsePrimary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      if (CurTok != tok_identifier)
        return LogErrorP("Expected function name in prototype");

      std::string FnName = IdentifierStr;
      getNextToken();

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      return std::make_unique<PrototypeAST>(FnName, std::move(ArgNames));
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, Value *> NamedValues;
    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    static std::unique_ptr<FunctionPassManager> TheFPM;
    static std::unique_ptr<LoopAnalysisManager> TheLAM;
    static std::unique_ptr<FunctionAnalysisManager> TheFAM;
    static std::unique_ptr<CGSCCAnalysisManager> TheCGAM;
    static std::unique_ptr<ModuleAnalysisManager> TheMAM;
    static std::unique_ptr<PassInstrumentationCallbacks> ThePIC;
    static std::unique_ptr<StandardInstrumentations> TheSI;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    static ExitOnError ExitOnErr;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");
      return V;
    }

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        return LogErrorV("invalid binary operator");
      }
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args())
        NamedValues[std::string(Arg.getName())] = &Arg;

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        // Run the optimizer on the function.
        TheFPM->run(*TheFunction, *TheFAM);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModuleAndManagers() {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("KaleidoscopeJIT", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create new pass and analysis managers.
      TheFPM = std::make_unique<FunctionPassManager>();
      TheLAM = std::make_unique<LoopAnalysisManager>();
      TheFAM = std::make_unique<FunctionAnalysisManager>();
      TheCGAM = std::make_unique<CGSCCAnalysisManager>();
      TheMAM = std::make_unique<ModuleAnalysisManager>();
      ThePIC = std::make_unique<PassInstrumentationCallbacks>();
      TheSI = std::make_unique<StandardInstrumentations>(*TheContext,
                                                         /*DebugLogging*/ true);
      TheSI->registerCallbacks(*ThePIC, TheMAM.get());

      // Add transform passes.
      // Do simple "peephole" optimizations and bit-twiddling optzns.
      TheFPM->addPass(InstCombinePass());
      // Reassociate expressions.
      TheFPM->addPass(ReassociatePass());
      // Eliminate Common SubExpressions.
      TheFPM->addPass(GVNPass());
      // Simplify the control flow graph (deleting unreachable blocks, etc).
      TheFPM->addPass(SimplifyCFGPass());

      // Register analysis passes used in these transform passes.
      PassBuilder PB;
      PB.registerModuleAnalyses(*TheMAM);
      PB.registerFunctionAnalyses(*TheFAM);
      PB.crossRegisterProxies(*TheLAM, *TheFAM, *TheCGAM, *TheMAM);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          ExitOnErr(TheJIT->addModule(
              ThreadSafeModule(std::move(TheModule), std::move(TheContext))));
          InitializeModuleAndManagers();
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (FnAST->codegen()) {
          // Create a ResourceTracker to track JIT'd memory allocated to our
          // anonymous expression -- that way we can free it after executing.
          auto RT = TheJIT->getMainJITDylib().createResourceTracker();

          auto TSM = ThreadSafeModule(std::move(TheModule), std::move(TheContext));
          ExitOnErr(TheJIT->addModule(std::move(TSM), RT));
          InitializeModuleAndManagers();

          // Search the JIT for the __anon_expr symbol.
          auto ExprSymbol = ExitOnErr(TheJIT->lookup("__anon_expr"));

          // Get the symbol's address and cast it to the right type (takes no
          // arguments, returns a double) so we can call it as a native function.
          double (*FP)() = ExprSymbol.toPtr<double (*)()>();
          fprintf(stderr, "Evaluated to %f\n", FP());

          // Delete the anonymous expression module from the JIT.
          ExitOnErr(RT->remove());
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      TheJIT = ExitOnErr(KaleidoscopeJIT::Create());

      InitializeModuleAndManagers();

      // Run the main "interpreter loop" now.
      MainLoop();

      return 0;
    }

`Next: Extending the language: control flow <#LangImpl05>`_


.. _LangImpl05:

======================================================
05. Kaleidoscope: Extending the Language: Control Flow
======================================================


Chapter 5 Introduction
======================

Welcome to Chapter 5 of the "`Implementing a language with
LLVM <index.html>`_" tutorial. Parts 1-4 described the implementation of
the simple Kaleidoscope language and included support for generating
LLVM IR, followed by optimizations and a JIT compiler. Unfortunately, as
presented, Kaleidoscope is mostly useless: it has no control flow other
than call and return. This means that you can't have conditional
branches in the code, significantly limiting its power. In this episode
of "build that compiler", we'll extend Kaleidoscope to have an
if/then/else expression plus a simple 'for' loop.

If/Then/Else
============

Extending Kaleidoscope to support if/then/else is quite straightforward.
It basically requires adding support for this "new" concept to the
lexer, parser, AST, and LLVM code emitter. This example is nice, because
it shows how easy it is to "grow" a language over time, incrementally
extending it as new ideas are discovered.

Before we get going on "how" we add this extension, let's talk about
"what" we want. The basic idea is that we want to be able to write this
sort of thing:

::

    def fib(x)
      if x < 3 then
        1
      else
        fib(x-1)+fib(x-2);

In Kaleidoscope, every construct is an expression: there are no
statements. As such, the if/then/else expression needs to return a value
like any other. Since we're using a mostly functional form, we'll have
it evaluate its conditional, then return the 'then' or 'else' value
based on how the condition was resolved. This is very similar to the C
"?:" expression.

The semantics of the if/then/else expression is that it evaluates the
condition to a boolean equality value: 0.0 is considered to be false and
everything else is considered to be true. If the condition is true, the
first subexpression is evaluated and returned, if the condition is
false, the second subexpression is evaluated and returned. Since
Kaleidoscope allows side-effects, this behavior is important to nail
down.

Now that we know what we "want", let's break this down into its
constituent pieces.

Lexer Extensions for If/Then/Else
---------------------------------

The lexer extensions are straightforward. First we add new enum values
for the relevant tokens:

.. code-block:: c++

      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,

Once we have that, we recognize the new keywords in the lexer. This is
pretty simple stuff:

.. code-block:: c++

        ...
        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        return tok_identifier;

AST Extensions for If/Then/Else
-------------------------------

To represent the new expression we add a new AST node for it:

.. code-block:: c++

    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;

    public:
      IfExprAST(std::unique_ptr<ExprAST> Cond, std::unique_ptr<ExprAST> Then,
                std::unique_ptr<ExprAST> Else)
        : Cond(std::move(Cond)), Then(std::move(Then)), Else(std::move(Else)) {}

      Value *codegen() override;
    };

The AST node just has pointers to the various subexpressions.

Parser Extensions for If/Then/Else
----------------------------------

Now that we have the relevant tokens coming from the lexer and we have
the AST node to build, our parsing logic is relatively straightforward.
First we define a new parsing function:

.. code-block:: c++

    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      getNextToken();  // eat the if.

      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;

      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken();  // eat the then

      auto Then = ParseExpression();
      if (!Then)
        return nullptr;

      if (CurTok != tok_else)
        return LogError("expected else");

      getNextToken();

      auto Else = ParseExpression();
      if (!Else)
        return nullptr;

      return std::make_unique<IfExprAST>(std::move(Cond), std::move(Then),
                                          std::move(Else));
    }

Next we hook it up as a primary expression:

.. code-block:: c++

    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      }
    }

LLVM IR for If/Then/Else
------------------------

Now that we have it parsing and building the AST, the final piece is
adding LLVM code generation support. This is the most interesting part
of the if/then/else example, because this is where it starts to
introduce new concepts. All of the code above has been thoroughly
described in previous chapters.

To motivate the code we want to produce, let's take a look at a simple
example. Consider:

::

    extern foo();
    extern bar();
    def baz(x) if x then foo() else bar();

If you disable optimizations, the code you'll (soon) get from
Kaleidoscope looks like this:

.. code-block:: llvm

    declare double @foo()

    declare double @bar()

    define double @baz(double %x) {
    entry:
      %ifcond = fcmp one double %x, 0.000000e+00
      br i1 %ifcond, label %then, label %else

    then:       ; preds = %entry
      %calltmp = call double @foo()
      br label %ifcont

    else:       ; preds = %entry
      %calltmp1 = call double @bar()
      br label %ifcont

    ifcont:     ; preds = %else, %then
      %iftmp = phi double [ %calltmp, %then ], [ %calltmp1, %else ]
      ret double %iftmp
    }

To visualize the control flow graph, you can use a nifty feature of the LLVM 
'`opt <https://llvm.org/cmds/opt.html>`_' tool. If you put this LLVM IR into 
"t.ll" and run "``llvm-as < t.ll | opt -passes=view-cfg``", `a window will 
pop up <https://llvm.org/docs/ProgrammersManual.html#viewing-graphs-while-debugging-code>`_ 
and you'll see this graph:

.. code-block::

                  ┌─────────────────────────────────────────┐
                  │ entry:                                  │
                  │ %ifcond = fcmp double %x, 0.000000e+00  │
                  │ br il %ifcond, label %then, label %else │
                  ├────────────────────┬────────────────────┤
                  │          T         │         F          │
                  └─────────┬──────────┴─────────┬──────────┘
                            │                    │
                  ┌─────────┘                    └───────────┐
                  │                                          │
    ┌─────────────▼─────────────────┐      ┌─────────────────▼──────────────┐
    │ then:                         │      │ else:                          │
    │ %calltmp = call double @foo() │      │ %calltmp1 = call double @bar() │
    │ br label %ifcond              │      │ br label %ifcont               │
    ├───────────────────────────────┤      ├────────────────────────────────┤
    │                               │      │                                │
    └──────────────┬────────────────┘      └────────────────┬───────────────┘
                   │                                        │
                   ▼                                        ▼
            ┌───────────────────────────────────────────────────────┐
            │ ifcond:                                               │
            │ phi double [ %calltmp, %then ], [ %calltmp1, %else ]  │
            │ ret double %0                                         │
            └───────────────────────────────────────────────────────┘

                            CFG for 'baz' function

.. .. figure:: https://llvm.org/docs/_images/LangImpl05-cfg.png
   :align: center
   :alt: Example CFG

   Example CFG

Another way to get this is to call "``F->viewCFG()``" or
"``F->viewCFGOnly()``" (where F is a "``Function*``") either by
inserting actual calls into the code and recompiling or by calling these
in the debugger. LLVM has many nice features for visualizing various
graphs.

Getting back to the generated code, it is fairly simple: the entry block
evaluates the conditional expression ("x" in our case here) and compares
the result to 0.0 with the "``fcmp one``" instruction ('one' is "Ordered
and Not Equal"). Based on the result of this expression, the code jumps
to either the "then" or "else" blocks, which contain the expressions for
the true/false cases.

Once the then/else blocks are finished executing, they both branch back
to the 'ifcont' block to execute the code that happens after the
if/then/else. In this case the only thing left to do is to return to the
caller of the function. The question then becomes: how does the code
know which expression to return?

The answer to this question involves an important SSA operation: the
`Phi operation <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_.
If you're not familiar with SSA, `the wikipedia
article <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_
is a good introduction and there are various other introductions to it
available on your favorite search engine. The short version is that
"execution" of the Phi operation requires "remembering" which block
control came from. The Phi operation takes on the value corresponding to
the input control block. In this case, if control comes in from the
"then" block, it gets the value of "calltmp". If control comes from the
"else" block, it gets the value of "calltmp1".

At this point, you are probably starting to think "Oh no! This means my
simple and elegant front-end will have to start generating SSA form in
order to use LLVM!". Fortunately, this is not the case, and we strongly
advise *not* implementing an SSA construction algorithm in your
front-end unless there is an amazingly good reason to do so. In
practice, there are two sorts of values that float around in code
written for your average imperative programming language that might need
Phi nodes:

#. Code that involves user variables: ``x = 1; x = x + 1;``
#. Values that are implicit in the structure of your AST, such as the
   Phi node in this case.

In `Chapter 7 <#LangImpl07>`_ of this tutorial ("mutable variables"),
we'll talk about #1 in depth. For now, just believe me that you don't
need SSA construction to handle this case. For #2, you have the choice
of using the techniques that we will describe for #1, or you can insert
Phi nodes directly, if convenient. In this case, it is really
easy to generate the Phi node, so we choose to do it directly.

Okay, enough of the motivation and overview, let's generate code!

Code Generation for If/Then/Else
--------------------------------

In order to generate code for this, we implement the ``codegen`` method
for ``IfExprAST``:

.. code-block:: c++

    Value *IfExprAST::codegen() {
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");

This code is straightforward and similar to what we saw before. We emit
the expression for the condition, then compare that value to zero to get
a truth value as a 1-bit (bool) value.

.. code-block:: c++

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB =
          BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");

      Builder->CreateCondBr(CondV, ThenBB, ElseBB);

This code creates the basic blocks that are related to the if/then/else
statement, and correspond directly to the blocks in the example above.
The first line gets the current Function object that is being built. It
gets this by asking the builder for the current BasicBlock, and asking
that block for its "parent" (the function it is currently embedded
into).

Once it has that, it creates three blocks. Note that it passes
"TheFunction" into the constructor for the "then" block. This causes the
constructor to automatically insert the new block into the end of the
specified function. The other two blocks are created, but aren't yet
inserted into the function.

Once the blocks are created, we can emit the conditional branch that
chooses between them. Note that creating new blocks does not implicitly
affect the IRBuilder, so it is still inserting into the block that the
condition went into. Also note that it is creating a branch to the
"then" block and the "else" block, even though the "else" block isn't
inserted into the function yet. This is all ok: it is the standard way
that LLVM supports forward references.

.. code-block:: c++

      // Emit then value.
      Builder->SetInsertPoint(ThenBB);

      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();

After the conditional branch is inserted, we move the builder to start
inserting into the "then" block. Strictly speaking, this call moves the
insertion point to be at the end of the specified block. However, since
the "then" block is empty, it also starts out by inserting at the
beginning of the block. :)

Once the insertion point is set, we recursively codegen the "then"
expression from the AST. To finish off the "then" block, we create an
unconditional branch to the merge block. One interesting (and very
important) aspect of the LLVM IR is that it :ref:`requires all basic
blocks to be "terminated" <functionstructure>` with a :ref:`control
flow instruction <terminators>`  such as return or branch. This means
that all control flow, *including fall throughs* must be made explicit
in the LLVM IR. If you violate this rule, the verifier will emit an
error.

The final line here is quite subtle, but is very important. The basic
issue is that when we create the Phi node in the merge block, we need to
set up the block/value pairs that indicate how the Phi will work.
Importantly, the Phi node expects to have an entry for each predecessor
of the block in the CFG. Why then, are we getting the current block when
we just set it to ThenBB 5 lines above? The problem is that the "Then"
expression may actually itself change the block that the Builder is
emitting into if, for example, it contains a nested "if/then/else"
expression. Because calling ``codegen()`` recursively could arbitrarily change
the notion of the current block, we are required to get an up-to-date
value for code that will set up the Phi node.

.. code-block:: c++

      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);

      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();

Code generation for the 'else' block is basically identical to codegen
for the 'then' block. The only significant difference is the first line,
which adds the 'else' block to the function. Recall previously that the
'else' block was created, but not added to the function. Now that the
'then' and 'else' blocks are emitted, we can finish up with the merge
code:

.. code-block:: c++

      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN =
        Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");

      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }

The first two lines here are now familiar: the first adds the "merge"
block to the Function object (it was previously floating, like the else
block above). The second changes the insertion point so that newly
created code will go into the "merge" block. Once that is done, we need
to create the PHI node and set up the block/value pairs for the PHI.

Finally, the CodeGen function returns the phi node as the value computed
by the if/then/else expression. In our example above, this returned
value will feed into the code for the top-level function, which will
create the return instruction.

Overall, we now have the ability to execute conditional code in
Kaleidoscope. With this extension, Kaleidoscope is a fairly complete
language that can calculate a wide variety of numeric functions. Next up
we'll add another useful expression that is familiar from non-functional
languages...

'for' Loop Expression
=====================

Now that we know how to add basic control flow constructs to the
language, we have the tools to add more powerful things. Let's add
something more aggressive, a 'for' expression:

::

     extern putchard(char);
     def printstar(n)
       for i = 1, i < n, 1.0 in
         putchard(42);  # ascii 42 = '*'

     # print 100 '*' characters
     printstar(100);

This expression defines a new variable ("i" in this case) which iterates
from a starting value, while the condition ("i < n" in this case) is
true, incrementing by an optional step value ("1.0" in this case). If
the step value is omitted, it defaults to 1.0. While the loop is true,
it executes its body expression. Because we don't have anything better
to return, we'll just define the loop as always returning 0.0. In the
future when we have mutable variables, it will get more useful.

As before, let's talk about the changes that we need to Kaleidoscope to
support this.

Lexer Extensions for the 'for' Loop
-----------------------------------

The lexer extensions are the same sort of thing as for if/then/else:

.. code-block:: c++

      ... in enum Token ...
      // control
      tok_if = -6, tok_then = -7, tok_else = -8,
      tok_for = -9, tok_in = -10

      ... in gettok ...
      if (IdentifierStr == "def")
        return tok_def;
      if (IdentifierStr == "extern")
        return tok_extern;
      if (IdentifierStr == "if")
        return tok_if;
      if (IdentifierStr == "then")
        return tok_then;
      if (IdentifierStr == "else")
        return tok_else;
      if (IdentifierStr == "for")
        return tok_for;
      if (IdentifierStr == "in")
        return tok_in;
      return tok_identifier;

AST Extensions for the 'for' Loop
---------------------------------

The AST node is just as simple. It basically boils down to capturing the
variable name and the constituent expressions in the node.

.. code-block:: c++

    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;

    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
        : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
          Step(std::move(Step)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

Parser Extensions for the 'for' Loop
------------------------------------

The parser code is also fairly standard. The only interesting thing here
is handling of the optional step value. The parser code handles it by
checking to see if the second comma is present. If not, it sets the step
value to null in the AST node:

.. code-block:: c++

    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken();  // eat the for.

      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");

      std::string IdName = IdentifierStr;
      getNextToken();  // eat identifier.

      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken();  // eat '='.


      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();

      auto End = ParseExpression();
      if (!End)
        return nullptr;

      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }

      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken();  // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<ForExprAST>(IdName, std::move(Start),
                                           std::move(End), std::move(Step),
                                           std::move(Body));
    }

And again we hook it up as a primary expression:

.. code-block:: c++

    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      }
    }

LLVM IR for the 'for' Loop
--------------------------

Now we get to the good part: the LLVM IR we want to generate for this
thing. With the simple example above, we get this LLVM IR (note that
this dump is generated with optimizations disabled for clarity):

.. code-block:: llvm

    declare double @putchard(double)

    define double @printstar(double %n) {
    entry:
      ; initial value = 1.0 (inlined into phi)
      br label %loop

    loop:       ; preds = %loop, %entry
      %i = phi double [ 1.000000e+00, %entry ], [ %nextvar, %loop ]
      ; body
      %calltmp = call double @putchard(double 4.200000e+01)
      ; increment
      %nextvar = fadd double %i, 1.000000e+00

      ; termination test
      %cmptmp = fcmp ult double %i, %n
      %booltmp = uitofp i1 %cmptmp to double
      %loopcond = fcmp one double %booltmp, 0.000000e+00
      br i1 %loopcond, label %loop, label %afterloop

    afterloop:      ; preds = %loop
      ; loop always returns 0.0
      ret double 0.000000e+00
    }

This loop contains all the same constructs we saw before: a phi node,
several expressions, and some basic blocks. Let's see how this fits
together.

Code Generation for the 'for' Loop
----------------------------------

The first part of codegen is very simple: we just output the start
expression for the loop value:

.. code-block:: c++

    Value *ForExprAST::codegen() {
      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

With this out of the way, the next step is to set up the LLVM basic
block for the start of the loop body. In the case above, the whole loop
body is one block, but remember that the body code itself could consist
of multiple blocks (e.g. if it contains an if/then/else or a for/in
expression).

.. code-block:: c++

      // Make the new basic block for the loop header, inserting after current
      // block.
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
      BasicBlock *PreheaderBB = Builder->GetInsertBlock();
      BasicBlock *LoopBB =
          BasicBlock::Create(*TheContext, "loop", TheFunction);

      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);

This code is similar to what we saw for if/then/else. Because we will
need it to create the Phi node, we remember the block that falls through
into the loop. Once we have that, we create the actual block that starts
the loop and create an unconditional branch for the fall-through between
the two blocks.

.. code-block:: c++

      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);

      // Start the PHI node with an entry for Start.
      PHINode *Variable = Builder->CreatePHI(Type::getDoubleTy(*TheContext),
                                             2, VarName);
      Variable->addIncoming(StartVal, PreheaderBB);

Now that the "preheader" for the loop is set up, we switch to emitting
code for the loop body. To begin with, we move the insertion point and
create the PHI node for the loop induction variable. Since we already
know the incoming value for the starting value, we add it to the Phi
node. Note that the Phi will eventually get a second value for the
backedge, but we can't set it up yet (because it doesn't exist!).

.. code-block:: c++

      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      Value *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Variable;

      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;

Now the code starts to get more interesting. Our 'for' loop introduces a
new variable to the symbol table. This means that our symbol table can
now contain either function arguments or loop variables. To handle this,
before we codegen the body of the loop, we add the loop variable as the
current value for its name. Note that it is possible that there is a
variable of the same name in the outer scope. It would be easy to make
this an error (emit an error and return null if there is already an
entry for VarName) but we choose to allow shadowing of variables. In
order to handle this correctly, we remember the Value that we are
potentially shadowing in ``OldVal`` (which will be null if there is no
shadowed variable).

Once the loop variable is set into the symbol table, the code
recursively codegen's the body. This allows the body to use the loop
variable: any references to it will naturally find it in the symbol
table.

.. code-block:: c++

      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }

      Value *NextVar = Builder->CreateFAdd(Variable, StepVal, "nextvar");

Now that the body is emitted, we compute the next value of the iteration
variable by adding the step value, or 1.0 if it isn't present.
'``NextVar``' will be the value of the loop variable on the next
iteration of the loop.

.. code-block:: c++

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");

Finally, we evaluate the exit value of the loop, to determine whether
the loop should exit. This mirrors the condition evaluation for the
if/then/else statement.

.. code-block:: c++

      // Create the "after loop" block and insert it.
      BasicBlock *LoopEndBB = Builder->GetInsertBlock();
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);

      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);

      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);

With the code for the body of the loop complete, we just need to finish
up the control flow for it. This code remembers the end block (for the
phi node), then creates the block for the loop exit ("afterloop"). Based
on the value of the exit condition, it creates a conditional branch that
chooses between executing the loop again and exiting the loop. Any
future code is emitted in the "afterloop" block, so it sets the
insertion position to it.

.. code-block:: c++

      // Add a new entry to the PHI node for the backedge.
      Variable->addIncoming(NextVar, LoopEndBB);

      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);

      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }

The final code handles various cleanups: now that we have the "NextVar"
value, we can add the incoming value to the loop PHI node. After that,
we remove the loop variable from the symbol table, so that it isn't in
scope after the for loop. Finally, code generation of the for loop
always returns 0.0, so that is what we return from
``ForExprAST::codegen()``.

With this, we conclude the "adding control flow to Kaleidoscope" chapter
of the tutorial. In this chapter we added two control flow constructs,
and used them to motivate a couple of aspects of the LLVM IR that are
important for front-end implementors to know. In the next chapter of our
saga, we will get a bit crazier and add `user-defined
operators <#LangImpl06>`_ to our poor innocent language.

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
the if/then/else and for expressions. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter5/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "../include/KaleidoscopeJIT.h"
    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/Instructions.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/PassManager.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/Passes/PassBuilder.h"
    #include "llvm/Passes/StandardInstrumentations.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include "llvm/Transforms/Scalar/Reassociate.h"
    #include "llvm/Transforms/Scalar/SimplifyCFG.h"
    #include <algorithm>
    #include <cassert>
    #include <cctype>
    #include <cstdint>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <vector>

    using namespace llvm;
    using namespace llvm::orc;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5,

      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,
      tok_for = -9,
      tok_in = -10
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;

    public:
      IfExprAST(std::unique_ptr<ExprAST> Cond, std::unique_ptr<ExprAST> Then,
                std::unique_ptr<ExprAST> Else)
          : Cond(std::move(Cond)), Then(std::move(Then)), Else(std::move(Else)) {}

      Value *codegen() override;
    };

    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;

    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
          : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
            Step(std::move(Step)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes).
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args)
          : Name(Name), Args(std::move(Args)) {}

      Function *codegen();
      const std::string &getName() const { return Name; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      getNextToken(); // eat the if.

      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;

      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken(); // eat the then

      auto Then = ParseExpression();
      if (!Then)
        return nullptr;

      if (CurTok != tok_else)
        return LogError("expected else");

      getNextToken();

      auto Else = ParseExpression();
      if (!Else)
        return nullptr;

      return std::make_unique<IfExprAST>(std::move(Cond), std::move(Then),
                                          std::move(Else));
    }

    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken(); // eat the for.

      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");

      std::string IdName = IdentifierStr;
      getNextToken(); // eat identifier.

      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken(); // eat '='.

      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();

      auto End = ParseExpression();
      if (!End)
        return nullptr;

      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }

      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<ForExprAST>(IdName, std::move(Start), std::move(End),
                                           std::move(Step), std::move(Body));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      }
    }

    /// binoprhs
    ///   ::= ('+' primary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the primary expression after the binary operator.
        auto RHS = ParsePrimary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= primary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParsePrimary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      if (CurTok != tok_identifier)
        return LogErrorP("Expected function name in prototype");

      std::string FnName = IdentifierStr;
      getNextToken();

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      return std::make_unique<PrototypeAST>(FnName, std::move(ArgNames));
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, Value *> NamedValues;
    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    static std::unique_ptr<FunctionPassManager> TheFPM;
    static std::unique_ptr<LoopAnalysisManager> TheLAM;
    static std::unique_ptr<FunctionAnalysisManager> TheFAM;
    static std::unique_ptr<CGSCCAnalysisManager> TheCGAM;
    static std::unique_ptr<ModuleAnalysisManager> TheMAM;
    static std::unique_ptr<PassInstrumentationCallbacks> ThePIC;
    static std::unique_ptr<StandardInstrumentations> TheSI;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    static ExitOnError ExitOnErr;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");
      return V;
    }

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        return LogErrorV("invalid binary operator");
      }
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Value *IfExprAST::codegen() {
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB = BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");

      Builder->CreateCondBr(CondV, ThenBB, ElseBB);

      // Emit then value.
      Builder->SetInsertPoint(ThenBB);

      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();

      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);

      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();

      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN = Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");

      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }

    // Output for-loop as:
    //   ...
    //   start = startexpr
    //   goto loop
    // loop:
    //   variable = phi [start, loopheader], [nextvariable, loopend]
    //   ...
    //   bodyexpr
    //   ...
    // loopend:
    //   step = stepexpr
    //   nextvariable = variable + step
    //   endcond = endexpr
    //   br endcond, loop, endloop
    // outloop:
    Value *ForExprAST::codegen() {
      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

      // Make the new basic block for the loop header, inserting after current
      // block.
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
      BasicBlock *PreheaderBB = Builder->GetInsertBlock();
      BasicBlock *LoopBB = BasicBlock::Create(*TheContext, "loop", TheFunction);

      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);

      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);

      // Start the PHI node with an entry for Start.
      PHINode *Variable =
          Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, VarName);
      Variable->addIncoming(StartVal, PreheaderBB);

      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      Value *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Variable;

      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;

      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }

      Value *NextVar = Builder->CreateFAdd(Variable, StepVal, "nextvar");

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");

      // Create the "after loop" block and insert it.
      BasicBlock *LoopEndBB = Builder->GetInsertBlock();
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);

      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);

      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);

      // Add a new entry to the PHI node for the backedge.
      Variable->addIncoming(NextVar, LoopEndBB);

      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);

      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args())
        NamedValues[std::string(Arg.getName())] = &Arg;

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        // Run the optimizer on the function.
        TheFPM->run(*TheFunction, *TheFAM);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModuleAndManagers() {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("KaleidoscopeJIT", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create new pass and analysis managers.
      TheFPM = std::make_unique<FunctionPassManager>();
      TheLAM = std::make_unique<LoopAnalysisManager>();
      TheFAM = std::make_unique<FunctionAnalysisManager>();
      TheCGAM = std::make_unique<CGSCCAnalysisManager>();
      TheMAM = std::make_unique<ModuleAnalysisManager>();
      ThePIC = std::make_unique<PassInstrumentationCallbacks>();
      TheSI = std::make_unique<StandardInstrumentations>(*TheContext,
                                                         /*DebugLogging*/ true);
      TheSI->registerCallbacks(*ThePIC, TheMAM.get());

      // Add transform passes.
      // Do simple "peephole" optimizations and bit-twiddling optzns.
      TheFPM->addPass(InstCombinePass());
      // Reassociate expressions.
      TheFPM->addPass(ReassociatePass());
      // Eliminate Common SubExpressions.
      TheFPM->addPass(GVNPass());
      // Simplify the control flow graph (deleting unreachable blocks, etc).
      TheFPM->addPass(SimplifyCFGPass());

      // Register analysis passes used in these transform passes.
      PassBuilder PB;
      PB.registerModuleAnalyses(*TheMAM);
      PB.registerFunctionAnalyses(*TheFAM);
      PB.crossRegisterProxies(*TheLAM, *TheFAM, *TheCGAM, *TheMAM);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          ExitOnErr(TheJIT->addModule(
              ThreadSafeModule(std::move(TheModule), std::move(TheContext))));
          InitializeModuleAndManagers();
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (FnAST->codegen()) {
          // Create a ResourceTracker to track JIT'd memory allocated to our
          // anonymous expression -- that way we can free it after executing.
          auto RT = TheJIT->getMainJITDylib().createResourceTracker();

          auto TSM = ThreadSafeModule(std::move(TheModule), std::move(TheContext));
          ExitOnErr(TheJIT->addModule(std::move(TSM), RT));
          InitializeModuleAndManagers();

          // Search the JIT for the __anon_expr symbol.
          auto ExprSymbol = ExitOnErr(TheJIT->lookup("__anon_expr"));

          // Get the symbol's address and cast it to the right type (takes no
          // arguments, returns a double) so we can call it as a native function.
          double (*FP)() = ExprSymbol.toPtr<double (*)()>();
          fprintf(stderr, "Evaluated to %f\n", FP());

          // Delete the anonymous expression module from the JIT.
          ExitOnErr(RT->remove());
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      TheJIT = ExitOnErr(KaleidoscopeJIT::Create());

      InitializeModuleAndManagers();

      // Run the main "interpreter loop" now.
      MainLoop();

      return 0;
    }

`Next: Extending the language: user-defined operators <#LangImpl06>`_


.. _LangImpl06:

================================================================
06. Kaleidoscope: Extending the Language: User-defined Operators
================================================================


Chapter 6 Introduction
======================

Welcome to Chapter 6 of the "`Implementing a language with
LLVM <index.html>`_" tutorial. At this point in our tutorial, we now
have a fully functional language that is fairly minimal, but also
useful. There is still one big problem with it, however. Our language
doesn't have many useful operators (like division, logical negation, or
even any comparisons besides less-than).

This chapter of the tutorial takes a wild digression into adding
user-defined operators to the simple and beautiful Kaleidoscope
language. This digression now gives us a simple and ugly language in
some ways, but also a powerful one at the same time. One of the great
things about creating your own language is that you get to decide what
is good or bad. In this tutorial we'll assume that it is okay to use
this as a way to show some interesting parsing techniques.

At the end of this tutorial, we'll run through an example Kaleidoscope
application that `renders the Mandelbrot set <#kicking-the-tires>`_. This gives an
example of what you can build with Kaleidoscope and its feature set.

User-defined Operators: the Idea
================================

The "operator overloading" that we will add to Kaleidoscope is more
general than in languages like C++. In C++, you are only allowed to
redefine existing operators: you can't programmatically change the
grammar, introduce new operators, change precedence levels, etc. In this
chapter, we will add this capability to Kaleidoscope, which will let the
user round out the set of operators that are supported.

The point of going into user-defined operators in a tutorial like this
is to show the power and flexibility of using a hand-written parser.
Thus far, the parser we have been implementing uses recursive descent
for most parts of the grammar and operator precedence parsing for the
expressions. See `Chapter 2 <#LangImpl02>`_ for details. By
using operator precedence parsing, it is very easy to allow
the programmer to introduce new operators into the grammar: the grammar
is dynamically extensible as the JIT runs.

The two specific features we'll add are programmable unary operators
(right now, Kaleidoscope has no unary operators at all) as well as
binary operators. An example of this is:

::

    # Logical unary not.
    def unary!(v)
      if v then
        0
      else
        1;

    # Define > with the same precedence as <.
    def binary> 10 (LHS RHS)
      RHS < LHS;

    # Binary "logical or", (note that it does not "short circuit")
    def binary| 5 (LHS RHS)
      if LHS then
        1
      else if RHS then
        1
      else
        0;

    # Define = with slightly lower precedence than relationals.
    def binary= 9 (LHS RHS)
      !(LHS < RHS | LHS > RHS);

Many languages aspire to being able to implement their standard runtime
library in the language itself. In Kaleidoscope, we can implement
significant parts of the language in the library!

We will break down implementation of these features into two parts:
implementing support for user-defined binary operators and adding unary
operators.

User-defined Binary Operators
=============================

Adding support for user-defined binary operators is pretty simple with
our current framework. We'll first add support for the unary/binary
keywords:

.. code-block:: c++

    enum Token {
      ...
      // operators
      tok_binary = -11,
      tok_unary = -12
    };
    ...
    static int gettok() {
    ...
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        return tok_identifier;

This just adds lexer support for the unary and binary keywords, like we
did in `previous chapters <#lexer-extensions-for-if-then-else>`_. One nice thing
about our current AST, is that we represent binary operators with full
generalisation by using their ASCII code as the opcode. For our extended
operators, we'll use this same representation, so we don't need any new
AST or parser support.

On the other hand, we have to be able to represent the definitions of
these new operators, in the "def binary\| 5" part of the function
definition. In our grammar so far, the "name" for the function
definition is parsed as the "prototype" production and into the
``PrototypeAST`` AST node. To represent our new user-defined operators
as prototypes, we have to extend the ``PrototypeAST`` AST node like
this:

.. code-block:: c++

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its argument names as well as if it is an operator.
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;
      bool IsOperator;
      unsigned Precedence;  // Precedence if a binary op.

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args,
                   bool IsOperator = false, unsigned Prec = 0)
      : Name(Name), Args(std::move(Args)), IsOperator(IsOperator),
        Precedence(Prec) {}

      Function *codegen();
      const std::string &getName() const { return Name; }

      bool isUnaryOp() const { return IsOperator && Args.size() == 1; }
      bool isBinaryOp() const { return IsOperator && Args.size() == 2; }

      char getOperatorName() const {
        assert(isUnaryOp() || isBinaryOp());
        return Name[Name.size() - 1];
      }

      unsigned getBinaryPrecedence() const { return Precedence; }
    };

Basically, in addition to knowing a name for the prototype, we now keep
track of whether it was an operator, and if it was, what precedence
level the operator is at. The precedence is only used for binary
operators (as you'll see below, it just doesn't apply for unary
operators). Now that we have a way to represent the prototype for a
user-defined operator, we need to parse it:

.. code-block:: c++

    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;

      unsigned Kind = 0;  // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;

      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_binary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected binary operator");
        FnName = "binary";
        FnName += (char)CurTok;
        Kind = 2;
        getNextToken();

        // Read the precedence if present.
        if (CurTok == tok_number) {
          if (NumVal < 1 || NumVal > 100)
            return LogErrorP("Invalid precedence: must be 1..100");
          BinaryPrecedence = (unsigned)NumVal;
          getNextToken();
        }
        break;
      }

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken();  // eat ')'.

      // Verify right number of names for operator.
      if (Kind && ArgNames.size() != Kind)
        return LogErrorP("Invalid number of operands for operator");

      return std::make_unique<PrototypeAST>(FnName, std::move(ArgNames), Kind != 0,
                                             BinaryPrecedence);
    }

This is all fairly straightforward parsing code, and we have already
seen a lot of similar code in the past. One interesting part about the
code above is the couple lines that set up ``FnName`` for binary
operators. This builds names like "binary@" for a newly defined "@"
operator. It then takes advantage of the fact that symbol names in the
LLVM symbol table are allowed to have any character in them, including
embedded nul characters.

The next interesting thing to add, is codegen support for these binary
operators. Given our current structure, this is a simple addition of a
default case for our existing binary operator node:

.. code-block:: c++

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext),
                                    "booltmp");
      default:
        break;
      }

      // If it wasn't a builtin binary operator, it must be a user defined one. Emit
      // a call to it.
      Function *F = getFunction(std::string("binary") + Op);
      assert(F && "binary operator not found!");

      Value *Ops[2] = { L, R };
      return Builder->CreateCall(F, Ops, "binop");
    }

As you can see above, the new code is actually really simple. It just
does a lookup for the appropriate operator in the symbol table and
generates a function call to it. Since user-defined operators are just
built as normal functions (because the "prototype" boils down to a
function with the right name) everything falls into place.

The final piece of code we are missing, is a bit of top-level magic:

.. code-block:: c++

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // If this is an operator, install it.
      if (P.isBinaryOp())
        BinopPrecedence[P.getOperatorName()] = P.getBinaryPrecedence();

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      ...

Basically, before codegening a function, if it is a user-defined
operator, we register it in the precedence table. This allows the binary
operator parsing logic we already have in place to handle it. Since we
are working on a fully-general operator precedence parser, this is all
we need to do to "extend the grammar".

Now we have useful user-defined binary operators. This builds a lot on
the previous framework we built for other operators. Adding unary
operators is a bit more challenging, because we don't have any framework
for it yet - let's see what it takes.

User-defined Unary Operators
============================

Since we don't currently support unary operators in the Kaleidoscope
language, we'll need to add everything to support them. Above, we added
simple support for the 'unary' keyword to the lexer. In addition to
that, we need an AST node:

.. code-block:: c++

    /// UnaryExprAST - Expression class for a unary operator.
    class UnaryExprAST : public ExprAST {
      char Opcode;
      std::unique_ptr<ExprAST> Operand;

    public:
      UnaryExprAST(char Opcode, std::unique_ptr<ExprAST> Operand)
        : Opcode(Opcode), Operand(std::move(Operand)) {}

      Value *codegen() override;
    };

This AST node is very simple and obvious by now. It directly mirrors the
binary operator AST node, except that it only has one child. With this,
we need to add the parsing logic. Parsing a unary operator is pretty
simple: we'll add a new function to do it:

.. code-block:: c++

    /// unary
    ///   ::= primary
    ///   ::= '!' unary
    static std::unique_ptr<ExprAST> ParseUnary() {
      // If the current token is not an operator, it must be a primary expr.
      if (!isascii(CurTok) || CurTok == '(' || CurTok == ',')
        return ParsePrimary();

      // If this is a unary operator, read it.
      int Opc = CurTok;
      getNextToken();
      if (auto Operand = ParseUnary())
        return std::make_unique<UnaryExprAST>(Opc, std::move(Operand));
      return nullptr;
    }

The grammar we add is pretty straightforward here. If we see a unary
operator when parsing a primary operator, we eat the operator as a
prefix and parse the remaining piece as another unary operator. This
allows us to handle multiple unary operators (e.g. "!!x"). Note that
unary operators can't have ambiguous parses like binary operators can,
so there is no need for precedence information.

The problem with this function, is that we need to call ParseUnary from
somewhere. To do this, we change previous callers of ParsePrimary to
call ParseUnary instead:

.. code-block:: c++

    /// binoprhs
    ///   ::= ('+' unary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      ...
        // Parse the unary expression after the binary operator.
        auto RHS = ParseUnary();
        if (!RHS)
          return nullptr;
      ...
    }
    /// expression
    ///   ::= unary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParseUnary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

With these two simple changes, we are now able to parse unary operators
and build the AST for them. Next up, we need to add parser support for
prototypes, to parse the unary operator prototype. We extend the binary
operator code above with:

.. code-block:: c++

    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    ///   ::= unary LETTER (id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;

      unsigned Kind = 0;  // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;

      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_unary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected unary operator");
        FnName = "unary";
        FnName += (char)CurTok;
        Kind = 1;
        getNextToken();
        break;
      case tok_binary:
        ...

As with binary operators, we name unary operators with a name that
includes the operator character. This assists us at code generation
time. Speaking of, the final piece we need to add is codegen support for
unary operators. It looks like this:

.. code-block:: c++

    Value *UnaryExprAST::codegen() {
      Value *OperandV = Operand->codegen();
      if (!OperandV)
        return nullptr;

      Function *F = getFunction(std::string("unary") + Opcode);
      if (!F)
        return LogErrorV("Unknown unary operator");

      return Builder->CreateCall(F, OperandV, "unop");
    }

This code is similar to, but simpler than, the code for binary
operators. It is simpler primarily because it doesn't need to handle any
predefined operators.

Kicking the Tires
=================

It is somewhat hard to believe, but with a few simple extensions we've
covered in the last chapters, we have grown a real-ish language. With
this, we can do a lot of interesting things, including I/O, math, and a
bunch of other things. For example, we can now add a nice sequencing
operator (printd is defined to print out the specified value and a
newline):

::

    ready> extern printd(x);
    Read extern:
    declare double @printd(double)

    ready> def binary : 1 (x y) 0;  # Low-precedence operator that ignores operands.
    ...
    ready> printd(123) : printd(456) : printd(789);
    123.000000
    456.000000
    789.000000
    Evaluated to 0.000000

We can also define a bunch of other "primitive" operations, such as:

::

    # Logical unary not.
    def unary!(v)
      if v then
        0
      else
        1;

    # Unary negate.
    def unary-(v)
      0-v;

    # Define > with the same precedence as <.
    def binary> 10 (LHS RHS)
      RHS < LHS;

    # Binary logical or, which does not short circuit.
    def binary| 5 (LHS RHS)
      if LHS then
        1
      else if RHS then
        1
      else
        0;

    # Binary logical and, which does not short circuit.
    def binary& 6 (LHS RHS)
      if !LHS then
        0
      else
        !!RHS;

    # Define = with slightly lower precedence than relationals.
    def binary = 9 (LHS RHS)
      !(LHS < RHS | LHS > RHS);

    # Define ':' for sequencing: as a low-precedence operator that ignores operands
    # and just returns the RHS.
    def binary : 1 (x y) y;

Given the previous if/then/else support, we can also define interesting
functions for I/O. For example, the following prints out a character
whose "density" reflects the value passed in: the lower the value, the
denser the character:

::

    ready> extern putchard(char);
    ...
    ready> def printdensity(d)
      if d > 8 then
        putchard(32)  # ' '
      else if d > 4 then
        putchard(46)  # '.'
      else if d > 2 then
        putchard(43)  # '+'
      else
        putchard(42); # '*'
    ...
    ready> printdensity(1): printdensity(2): printdensity(3):
           printdensity(4): printdensity(5): printdensity(9):
           putchard(10);
    **++.
    Evaluated to 0.000000

Based on these simple primitive operations, we can start to define more
interesting things. For example, here's a little function that determines
the number of iterations it takes for a certain function in the complex
plane to diverge:

::

    # Determine whether the specific location diverges.
    # Solve for z = z^2 + c in the complex plane.
    def mandelconverger(real imag iters creal cimag)
      if iters > 255 | (real*real + imag*imag > 4) then
        iters
      else
        mandelconverger(real*real - imag*imag + creal,
                        2*real*imag + cimag,
                        iters+1, creal, cimag);

    # Return the number of iterations required for the iteration to escape
    def mandelconverge(real imag)
      mandelconverger(real, imag, 0, real, imag);

This "``z = z2 + c``" function is a beautiful little creature that is
the basis for computation of the `Mandelbrot
Set <http://en.wikipedia.org/wiki/Mandelbrot_set>`_. Our
``mandelconverge`` function returns the number of iterations that it
takes for a complex orbit to escape, saturating to 255. This is not a
very useful function by itself, but if you plot its value over a
two-dimensional plane, you can see the Mandelbrot set. Given that we are
limited to using putchard here, our amazing graphical output is limited,
but we can whip together something using the density plotter above:

::

    # Compute and plot the mandelbrot set with the specified 2 dimensional range
    # info.
    def mandelhelp(xmin xmax xstep   ymin ymax ystep)
      for y = ymin, y < ymax, ystep in (
        (for x = xmin, x < xmax, xstep in
           printdensity(mandelconverge(x,y)))
        : putchard(10)
      )

    # mandel - This is a convenient helper function for plotting the mandelbrot set
    # from the specified position with the specified Magnification.
    def mandel(realstart imagstart realmag imagmag)
      mandelhelp(realstart, realstart+realmag*78, realmag,
                 imagstart, imagstart+imagmag*40, imagmag);

Given this, we can try plotting out the mandelbrot set! Lets try it out:

::

    ready> mandel(-2.3, -1.3, 0.05, 0.07);
    *******************************+++++++++++*************************************
    *************************+++++++++++++++++++++++*******************************
    **********************+++++++++++++++++++++++++++++****************************
    *******************+++++++++++++++++++++.. ...++++++++*************************
    *****************++++++++++++++++++++++.... ...+++++++++***********************
    ***************+++++++++++++++++++++++.....   ...+++++++++*********************
    **************+++++++++++++++++++++++....     ....+++++++++********************
    *************++++++++++++++++++++++......      .....++++++++*******************
    ************+++++++++++++++++++++.......       .......+++++++******************
    ***********+++++++++++++++++++....                ... .+++++++*****************
    **********+++++++++++++++++.......                     .+++++++****************
    *********++++++++++++++...........                    ...+++++++***************
    ********++++++++++++............                      ...++++++++**************
    ********++++++++++... ..........                        .++++++++**************
    *******+++++++++.....                                   .+++++++++*************
    *******++++++++......                                  ..+++++++++*************
    *******++++++.......                                   ..+++++++++*************
    *******+++++......                                     ..+++++++++*************
    *******.... ....                                      ...+++++++++*************
    *******.... .                                         ...+++++++++*************
    *******+++++......                                    ...+++++++++*************
    *******++++++.......                                   ..+++++++++*************
    *******++++++++......                                   .+++++++++*************
    *******+++++++++.....                                  ..+++++++++*************
    ********++++++++++... ..........                        .++++++++**************
    ********++++++++++++............                      ...++++++++**************
    *********++++++++++++++..........                     ...+++++++***************
    **********++++++++++++++++........                     .+++++++****************
    **********++++++++++++++++++++....                ... ..+++++++****************
    ***********++++++++++++++++++++++.......       .......++++++++*****************
    ************+++++++++++++++++++++++......      ......++++++++******************
    **************+++++++++++++++++++++++....      ....++++++++********************
    ***************+++++++++++++++++++++++.....   ...+++++++++*********************
    *****************++++++++++++++++++++++....  ...++++++++***********************
    *******************+++++++++++++++++++++......++++++++*************************
    *********************++++++++++++++++++++++.++++++++***************************
    *************************+++++++++++++++++++++++*******************************
    ******************************+++++++++++++************************************
    *******************************************************************************
    *******************************************************************************
    *******************************************************************************
    Evaluated to 0.000000
    ready> mandel(-2, -1, 0.02, 0.04);
    **************************+++++++++++++++++++++++++++++++++++++++++++++++++++++
    ***********************++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    *********************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
    *******************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++...
    *****************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++.....
    ***************++++++++++++++++++++++++++++++++++++++++++++++++++++++++........
    **************++++++++++++++++++++++++++++++++++++++++++++++++++++++...........
    ************+++++++++++++++++++++++++++++++++++++++++++++++++++++..............
    ***********++++++++++++++++++++++++++++++++++++++++++++++++++........        .
    **********++++++++++++++++++++++++++++++++++++++++++++++.............
    ********+++++++++++++++++++++++++++++++++++++++++++..................
    *******+++++++++++++++++++++++++++++++++++++++.......................
    ******+++++++++++++++++++++++++++++++++++...........................
    *****++++++++++++++++++++++++++++++++............................
    *****++++++++++++++++++++++++++++...............................
    ****++++++++++++++++++++++++++......   .........................
    ***++++++++++++++++++++++++.........     ......    ...........
    ***++++++++++++++++++++++............
    **+++++++++++++++++++++..............
    **+++++++++++++++++++................
    *++++++++++++++++++.................
    *++++++++++++++++............ ...
    *++++++++++++++..............
    *+++....++++................
    *..........  ...........
    *
    *..........  ...........
    *+++....++++................
    *++++++++++++++..............
    *++++++++++++++++............ ...
    *++++++++++++++++++.................
    **+++++++++++++++++++................
    **+++++++++++++++++++++..............
    ***++++++++++++++++++++++............
    ***++++++++++++++++++++++++.........     ......    ...........
    ****++++++++++++++++++++++++++......   .........................
    *****++++++++++++++++++++++++++++...............................
    *****++++++++++++++++++++++++++++++++............................
    ******+++++++++++++++++++++++++++++++++++...........................
    *******+++++++++++++++++++++++++++++++++++++++.......................
    ********+++++++++++++++++++++++++++++++++++++++++++..................
    Evaluated to 0.000000
    ready> mandel(-0.9, -1.4, 0.02, 0.03);
    *******************************************************************************
    *******************************************************************************
    *******************************************************************************
    **********+++++++++++++++++++++************************************************
    *+++++++++++++++++++++++++++++++++++++++***************************************
    +++++++++++++++++++++++++++++++++++++++++++++**********************************
    ++++++++++++++++++++++++++++++++++++++++++++++++++*****************************
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++*************************
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++**********************
    +++++++++++++++++++++++++++++++++.........++++++++++++++++++*******************
    +++++++++++++++++++++++++++++++....   ......+++++++++++++++++++****************
    +++++++++++++++++++++++++++++.......  ........+++++++++++++++++++**************
    ++++++++++++++++++++++++++++........   ........++++++++++++++++++++************
    +++++++++++++++++++++++++++.........     ..  ...+++++++++++++++++++++**********
    ++++++++++++++++++++++++++...........        ....++++++++++++++++++++++********
    ++++++++++++++++++++++++.............       .......++++++++++++++++++++++******
    +++++++++++++++++++++++.............        ........+++++++++++++++++++++++****
    ++++++++++++++++++++++...........           ..........++++++++++++++++++++++***
    ++++++++++++++++++++...........                .........++++++++++++++++++++++*
    ++++++++++++++++++............                  ...........++++++++++++++++++++
    ++++++++++++++++...............                 .............++++++++++++++++++
    ++++++++++++++.................                 ...............++++++++++++++++
    ++++++++++++..................                  .................++++++++++++++
    +++++++++..................                      .................+++++++++++++
    ++++++........        .                               .........  ..++++++++++++
    ++............                                         ......    ....++++++++++
    ..............                                                    ...++++++++++
    ..............                                                    ....+++++++++
    ..............                                                    .....++++++++
    .............                                                    ......++++++++
    ...........                                                     .......++++++++
    .........                                                       ........+++++++
    .........                                                       ........+++++++
    .........                                                           ....+++++++
    ........                                                             ...+++++++
    .......                                                              ...+++++++
                                                                        ....+++++++
                                                                       .....+++++++
                                                                        ....+++++++
                                                                        ....+++++++
                                                                        ....+++++++
    Evaluated to 0.000000
    ready> ^D

At this point, you may be starting to realize that Kaleidoscope is a
real and powerful language. It may not be self-similar :), but it can be
used to plot things that are!

With this, we conclude the "adding user-defined operators" chapter of
the tutorial. We have successfully augmented our language, adding the
ability to extend the language in the library, and we have shown how
this can be used to build a simple but interesting end-user application
in Kaleidoscope. At this point, Kaleidoscope can build a variety of
applications that are functional and can call functions with
side-effects, but it can't actually define and mutate a variable itself.

Strikingly, variable mutation is an important feature of some languages,
and it is not at all obvious how to `add support for mutable
variables <#LangImpl07>`_ without having to add an "SSA construction"
phase to your front-end. In the next chapter, we will describe how you
can add variable mutation without building SSA in your front-end.

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
the support for user-defined operators. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

On some platforms, you will need to specify -rdynamic or
-Wl,--export-dynamic when linking. This ensures that symbols defined in
the main executable are exported to the dynamic linker and so are
available for symbol resolution at run time. This is not needed if you
compile your support code into a shared library, although doing that
will cause problems on Windows.

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter6/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "../include/KaleidoscopeJIT.h"
    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/Instructions.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/PassManager.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/Passes/PassBuilder.h"
    #include "llvm/Passes/StandardInstrumentations.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include "llvm/Transforms/Scalar/Reassociate.h"
    #include "llvm/Transforms/Scalar/SimplifyCFG.h"
    #include <algorithm>
    #include <cassert>
    #include <cctype>
    #include <cstdint>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <vector>

    using namespace llvm;
    using namespace llvm::orc;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5,

      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,
      tok_for = -9,
      tok_in = -10,

      // operators
      tok_binary = -11,
      tok_unary = -12
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
    };

    /// UnaryExprAST - Expression class for a unary operator.
    class UnaryExprAST : public ExprAST {
      char Opcode;
      std::unique_ptr<ExprAST> Operand;

    public:
      UnaryExprAST(char Opcode, std::unique_ptr<ExprAST> Operand)
          : Opcode(Opcode), Operand(std::move(Operand)) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;

    public:
      IfExprAST(std::unique_ptr<ExprAST> Cond, std::unique_ptr<ExprAST> Then,
                std::unique_ptr<ExprAST> Else)
          : Cond(std::move(Cond)), Then(std::move(Then)), Else(std::move(Else)) {}

      Value *codegen() override;
    };

    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;

    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
          : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
            Step(std::move(Step)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes), as well as if it is an operator.
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;
      bool IsOperator;
      unsigned Precedence; // Precedence if a binary op.

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args,
                   bool IsOperator = false, unsigned Prec = 0)
          : Name(Name), Args(std::move(Args)), IsOperator(IsOperator),
            Precedence(Prec) {}

      Function *codegen();
      const std::string &getName() const { return Name; }

      bool isUnaryOp() const { return IsOperator && Args.size() == 1; }
      bool isBinaryOp() const { return IsOperator && Args.size() == 2; }

      char getOperatorName() const {
        assert(isUnaryOp() || isBinaryOp());
        return Name[Name.size() - 1];
      }

      unsigned getBinaryPrecedence() const { return Precedence; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// Error* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      getNextToken(); // eat the if.

      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;

      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken(); // eat the then

      auto Then = ParseExpression();
      if (!Then)
        return nullptr;

      if (CurTok != tok_else)
        return LogError("expected else");

      getNextToken();

      auto Else = ParseExpression();
      if (!Else)
        return nullptr;

      return std::make_unique<IfExprAST>(std::move(Cond), std::move(Then),
                                          std::move(Else));
    }

    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken(); // eat the for.

      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");

      std::string IdName = IdentifierStr;
      getNextToken(); // eat identifier.

      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken(); // eat '='.

      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();

      auto End = ParseExpression();
      if (!End)
        return nullptr;

      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }

      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<ForExprAST>(IdName, std::move(Start), std::move(End),
                                           std::move(Step), std::move(Body));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      }
    }

    /// unary
    ///   ::= primary
    ///   ::= '!' unary
    static std::unique_ptr<ExprAST> ParseUnary() {
      // If the current token is not an operator, it must be a primary expr.
      if (!isascii(CurTok) || CurTok == '(' || CurTok == ',')
        return ParsePrimary();

      // If this is a unary operator, read it.
      int Opc = CurTok;
      getNextToken();
      if (auto Operand = ParseUnary())
        return std::make_unique<UnaryExprAST>(Opc, std::move(Operand));
      return nullptr;
    }

    /// binoprhs
    ///   ::= ('+' unary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the unary expression after the binary operator.
        auto RHS = ParseUnary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= unary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParseUnary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    ///   ::= unary LETTER (id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;

      unsigned Kind = 0; // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;

      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_unary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected unary operator");
        FnName = "unary";
        FnName += (char)CurTok;
        Kind = 1;
        getNextToken();
        break;
      case tok_binary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected binary operator");
        FnName = "binary";
        FnName += (char)CurTok;
        Kind = 2;
        getNextToken();

        // Read the precedence if present.
        if (CurTok == tok_number) {
          if (NumVal < 1 || NumVal > 100)
            return LogErrorP("Invalid precedence: must be 1..100");
          BinaryPrecedence = (unsigned)NumVal;
          getNextToken();
        }
        break;
      }

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      // Verify right number of names for operator.
      if (Kind && ArgNames.size() != Kind)
        return LogErrorP("Invalid number of operands for operator");

      return std::make_unique<PrototypeAST>(FnName, ArgNames, Kind != 0,
                                             BinaryPrecedence);
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, Value *> NamedValues;
    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    static std::unique_ptr<FunctionPassManager> TheFPM;
    static std::unique_ptr<LoopAnalysisManager> TheLAM;
    static std::unique_ptr<FunctionAnalysisManager> TheFAM;
    static std::unique_ptr<CGSCCAnalysisManager> TheCGAM;
    static std::unique_ptr<ModuleAnalysisManager> TheMAM;
    static std::unique_ptr<PassInstrumentationCallbacks> ThePIC;
    static std::unique_ptr<StandardInstrumentations> TheSI;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    static ExitOnError ExitOnErr;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");
      return V;
    }

    Value *UnaryExprAST::codegen() {
      Value *OperandV = Operand->codegen();
      if (!OperandV)
        return nullptr;

      Function *F = getFunction(std::string("unary") + Opcode);
      if (!F)
        return LogErrorV("Unknown unary operator");

      return Builder->CreateCall(F, OperandV, "unop");
    }

    Value *BinaryExprAST::codegen() {
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        break;
      }

      // If it wasn't a builtin binary operator, it must be a user defined one. Emit
      // a call to it.
      Function *F = getFunction(std::string("binary") + Op);
      assert(F && "binary operator not found!");

      Value *Ops[] = {L, R};
      return Builder->CreateCall(F, Ops, "binop");
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Value *IfExprAST::codegen() {
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB = BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");

      Builder->CreateCondBr(CondV, ThenBB, ElseBB);

      // Emit then value.
      Builder->SetInsertPoint(ThenBB);

      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();

      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);

      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();

      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN = Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");

      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }

    // Output for-loop as:
    //   ...
    //   start = startexpr
    //   goto loop
    // loop:
    //   variable = phi [start, loopheader], [nextvariable, loopend]
    //   ...
    //   bodyexpr
    //   ...
    // loopend:
    //   step = stepexpr
    //   nextvariable = variable + step
    //   endcond = endexpr
    //   br endcond, loop, endloop
    // outloop:
    Value *ForExprAST::codegen() {
      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

      // Make the new basic block for the loop header, inserting after current
      // block.
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
      BasicBlock *PreheaderBB = Builder->GetInsertBlock();
      BasicBlock *LoopBB = BasicBlock::Create(*TheContext, "loop", TheFunction);

      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);

      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);

      // Start the PHI node with an entry for Start.
      PHINode *Variable =
          Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, VarName);
      Variable->addIncoming(StartVal, PreheaderBB);

      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      Value *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Variable;

      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;

      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }

      Value *NextVar = Builder->CreateFAdd(Variable, StepVal, "nextvar");

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");

      // Create the "after loop" block and insert it.
      BasicBlock *LoopEndBB = Builder->GetInsertBlock();
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);

      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);

      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);

      // Add a new entry to the PHI node for the backedge.
      Variable->addIncoming(NextVar, LoopEndBB);

      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);

      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // If this is an operator, install it.
      if (P.isBinaryOp())
        BinopPrecedence[P.getOperatorName()] = P.getBinaryPrecedence();

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args())
        NamedValues[std::string(Arg.getName())] = &Arg;

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        // Run the optimizer on the function.
        TheFPM->run(*TheFunction, *TheFAM);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();

      if (P.isBinaryOp())
        BinopPrecedence.erase(P.getOperatorName());
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModuleAndManagers() {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("KaleidoscopeJIT", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create new pass and analysis managers.
      TheFPM = std::make_unique<FunctionPassManager>();
      TheLAM = std::make_unique<LoopAnalysisManager>();
      TheFAM = std::make_unique<FunctionAnalysisManager>();
      TheCGAM = std::make_unique<CGSCCAnalysisManager>();
      TheMAM = std::make_unique<ModuleAnalysisManager>();
      ThePIC = std::make_unique<PassInstrumentationCallbacks>();
      TheSI = std::make_unique<StandardInstrumentations>(*TheContext,
                                                         /*DebugLogging*/ true);
      TheSI->registerCallbacks(*ThePIC, TheMAM.get());

      // Add transform passes.
      // Do simple "peephole" optimizations and bit-twiddling optzns.
      TheFPM->addPass(InstCombinePass());
      // Reassociate expressions.
      TheFPM->addPass(ReassociatePass());
      // Eliminate Common SubExpressions.
      TheFPM->addPass(GVNPass());
      // Simplify the control flow graph (deleting unreachable blocks, etc).
      TheFPM->addPass(SimplifyCFGPass());

      // Register analysis passes used in these transform passes.
      PassBuilder PB;
      PB.registerModuleAnalyses(*TheMAM);
      PB.registerFunctionAnalyses(*TheFAM);
      PB.crossRegisterProxies(*TheLAM, *TheFAM, *TheCGAM, *TheMAM);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          ExitOnErr(TheJIT->addModule(
              ThreadSafeModule(std::move(TheModule), std::move(TheContext))));
          InitializeModuleAndManagers();
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (FnAST->codegen()) {
          // Create a ResourceTracker to track JIT'd memory allocated to our
          // anonymous expression -- that way we can free it after executing.
          auto RT = TheJIT->getMainJITDylib().createResourceTracker();

          auto TSM = ThreadSafeModule(std::move(TheModule), std::move(TheContext));
          ExitOnErr(TheJIT->addModule(std::move(TSM), RT));
          InitializeModuleAndManagers();

          // Search the JIT for the __anon_expr symbol.
          auto ExprSymbol = ExitOnErr(TheJIT->lookup("__anon_expr"));

          // Get the symbol's address and cast it to the right type (takes no
          // arguments, returns a double) so we can call it as a native function.
          double (*FP)() = ExprSymbol.toPtr<double (*)()>();
          fprintf(stderr, "Evaluated to %f\n", FP());

          // Delete the anonymous expression module from the JIT.
          ExitOnErr(RT->remove());
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      TheJIT = ExitOnErr(KaleidoscopeJIT::Create());

      InitializeModuleAndManagers();

      // Run the main "interpreter loop" now.
      MainLoop();

      return 0;
    }

`Next: Extending the language: mutable variables / SSA construction <#LangImpl07>`_


.. _LangImpl07:

===========================================================
07. Kaleidoscope: Extending the Language: Mutable Variables
===========================================================


Chapter 7 Introduction
======================

Welcome to Chapter 7 of the "`Implementing a language with
LLVM <index.html>`_" tutorial. In chapters 1 through 6, we've built a
very respectable, albeit simple, `functional programming
language <http://en.wikipedia.org/wiki/Functional_programming>`_. In our
journey, we learned some parsing techniques, how to build and represent
an AST, how to build LLVM IR, and how to optimize the resultant code as
well as JIT compile it.

While Kaleidoscope is interesting as a functional language, the fact
that it is functional makes it "too easy" to generate LLVM IR for it. In
particular, a functional language makes it very easy to build LLVM IR
directly in `SSA
form <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_.
Since LLVM requires that the input code be in SSA form, this is a very
nice property and it is often unclear to newcomers how to generate code
for an imperative language with mutable variables.

The short (and happy) summary of this chapter is that there is no need
for your front-end to build SSA form: LLVM provides highly tuned and
well tested support for this, though the way it works is a bit
unexpected for some.

Why is this a hard problem?
===========================

To understand why mutable variables cause complexities in SSA
construction, consider this extremely simple C example:

.. code-block:: c

    int G, H;
    int test(_Bool Condition) {
      int X;
      if (Condition)
        X = G;
      else
        X = H;
      return X;
    }

In this case, we have the variable "X", whose value depends on the path
executed in the program. Because there are two different possible values
for X before the return instruction, a PHI node is inserted to merge the
two values. The LLVM IR that we want for this example looks like this:

.. code-block:: llvm

    @G = weak global i32 0   ; type of @G is i32*
    @H = weak global i32 0   ; type of @H is i32*

    define i32 @test(i1 %Condition) {
    entry:
      br i1 %Condition, label %cond_true, label %cond_false

    cond_true:
      %X.0 = load i32, i32* @G
      br label %cond_next

    cond_false:
      %X.1 = load i32, i32* @H
      br label %cond_next

    cond_next:
      %X.2 = phi i32 [ %X.1, %cond_false ], [ %X.0, %cond_true ]
      ret i32 %X.2
    }

In this example, the loads from the G and H global variables are
explicit in the LLVM IR, and they live in the then/else branches of the
if statement (cond\_true/cond\_false). In order to merge the incoming
values, the X.2 phi node in the cond\_next block selects the right value
to use based on where control flow is coming from: if control flow comes
from the cond\_false block, X.2 gets the value of X.1. Alternatively, if
control flow comes from cond\_true, it gets the value of X.0. The intent
of this chapter is not to explain the details of SSA form. For more
information, see one of the many `online
references <http://en.wikipedia.org/wiki/Static_single_assignment_form>`_.

The question for this article is "who places the phi nodes when lowering
assignments to mutable variables?". The issue here is that LLVM
*requires* that its IR be in SSA form: there is no "non-ssa" mode for
it. However, SSA construction requires non-trivial algorithms and data
structures, so it is inconvenient and wasteful for every front-end to
have to reproduce this logic.

Memory in LLVM
==============

The 'trick' here is that while LLVM does require all register values to be 
in SSA form, it does not require (or permit) memory objects to be in SSA form. 
In the example above, note that the loads from G and H are direct accesses 
to G and H: they are not renamed or versioned. This differs from some other 
compiler systems, which do try to version memory objects. In LLVM, instead 
of encoding dataflow analysis of memory into the LLVM IR, it is handled with 
`Analysis Passes <https://llvm.org/docs/WritingAnLLVMPass.html>`_ which are 
computed on demand.

With this in mind, the high-level idea is that we want to make a stack
variable (which lives in memory, because it is on the stack) for each
mutable object in a function. To take advantage of this trick, we need
to talk about how LLVM represents stack variables.

In LLVM, all memory accesses are explicit with load/store instructions,
and it is carefully designed not to have (or need) an "address-of"
operator. Notice how the type of the @G/@H global variables is actually
"i32\*" even though the variable is defined as "i32". What this means is
that @G defines *space* for an i32 in the global data area, but its
*name* actually refers to the address for that space. Stack variables
work the same way, except that instead of being declared with global
variable definitions, they are declared with the `LLVM alloca
instruction <https://llvm.org/docs/LangRef.html#alloca-instruction>`_:

.. code-block:: llvm

    define i32 @example() {
    entry:
      %X = alloca i32           ; type of %X is i32*.
      ...
      %tmp = load i32, i32* %X  ; load the stack value %X from the stack.
      %tmp2 = add i32 %tmp, 1   ; increment it
      store i32 %tmp2, i32* %X  ; store it back
      ...

This code shows an example of how you can declare and manipulate a stack
variable in the LLVM IR. Stack memory allocated with the alloca
instruction is fully general: you can pass the address of the stack slot
to functions, you can store it in other variables, etc. In our example
above, we could rewrite the example to use the alloca technique to avoid
using a PHI node:

.. code-block:: llvm

    @G = weak global i32 0   ; type of @G is i32*
    @H = weak global i32 0   ; type of @H is i32*

    define i32 @test(i1 %Condition) {
    entry:
      %X = alloca i32           ; type of %X is i32*.
      br i1 %Condition, label %cond_true, label %cond_false

    cond_true:
      %X.0 = load i32, i32* @G
      store i32 %X.0, i32* %X   ; Update X
      br label %cond_next

    cond_false:
      %X.1 = load i32, i32* @H
      store i32 %X.1, i32* %X   ; Update X
      br label %cond_next

    cond_next:
      %X.2 = load i32, i32* %X  ; Read X
      ret i32 %X.2
    }

With this, we have discovered a way to handle arbitrary mutable
variables without the need to create Phi nodes at all:

#. Each mutable variable becomes a stack allocation.
#. Each read of the variable becomes a load from the stack.
#. Each update of the variable becomes a store to the stack.
#. Taking the address of a variable just uses the stack address
   directly.

While this solution has solved our immediate problem, it introduced
another one: we have now apparently introduced a lot of stack traffic
for very simple and common operations, a major performance problem.
Fortunately for us, the LLVM optimizer has a highly-tuned optimization
pass named "mem2reg" that handles this case, promoting allocas like this
into SSA registers, inserting Phi nodes as appropriate. If you run this
example through the pass, for example, you'll get:

.. code-block:: bash

    $ llvm-as < example.ll | opt -passes=mem2reg | llvm-dis
    @G = weak global i32 0
    @H = weak global i32 0

    define i32 @test(i1 %Condition) {
    entry:
      br i1 %Condition, label %cond_true, label %cond_false

    cond_true:
      %X.0 = load i32, i32* @G
      br label %cond_next

    cond_false:
      %X.1 = load i32, i32* @H
      br label %cond_next

    cond_next:
      %X.01 = phi i32 [ %X.1, %cond_false ], [ %X.0, %cond_true ]
      ret i32 %X.01
    }

The mem2reg pass implements the standard "iterated dominance frontier"
algorithm for constructing SSA form and has a number of optimizations
that speed up (very common) degenerate cases. The mem2reg optimization
pass is the answer to dealing with mutable variables, and we highly
recommend that you depend on it. Note that mem2reg only works on
variables in certain circumstances:

#. mem2reg is alloca-driven: it looks for allocas and if it can handle
   them, it promotes them. It does not apply to global variables or heap
   allocations.
#. mem2reg only looks for alloca instructions in the entry block of the
   function. Being in the entry block guarantees that the alloca is only
   executed once, which makes analysis simpler.
#. mem2reg only promotes allocas whose uses are direct loads and stores.
   If the address of the stack object is passed to a function, or if any
   funny pointer arithmetic is involved, the alloca will not be
   promoted.
#. mem2reg only works on allocas of `first
   class <https://llvm.org/docs/LangRef.html#first-class-types>`_ values (such as pointers,
   scalars and vectors), and only if the array size of the allocation is
   1 (or missing in the .ll file). mem2reg is not capable of promoting
   structs or arrays to registers. Note that the "sroa" pass is
   more powerful and can promote structs, "unions", and arrays in many
   cases.

All of these properties are easy to satisfy for most imperative
languages, and we'll illustrate it below with Kaleidoscope. The final
question you may be asking is: should I bother with this nonsense for my
front-end? Wouldn't it be better if I just did SSA construction
directly, avoiding use of the mem2reg optimization pass? In short, we
strongly recommend that you use this technique for building SSA form,
unless there is an extremely good reason not to. Using this technique
is:

-  Proven and well tested: clang uses this technique
   for local mutable variables. As such, the most common clients of LLVM
   are using this to handle a bulk of their variables. You can be sure
   that bugs are found fast and fixed early.
-  Extremely Fast: mem2reg has a number of special cases that make it
   fast in common cases as well as fully general. For example, it has
   fast-paths for variables that are only used in a single block,
   variables that only have one assignment point, good heuristics to
   avoid insertion of unneeded phi nodes, etc.
-  Needed for debug info generation: `Debug information in
   LLVM <https://llvm.org/docs/SourceLevelDebugging.html>`_ relies on having 
   the address of the variable exposed so that debug info can be attached to it. 
   This technique dovetails very naturally with this style of debug info.

If nothing else, this makes it much easier to get your front-end up and
running, and is very simple to implement. Let's extend Kaleidoscope with
mutable variables now!

Mutable Variables in Kaleidoscope
=================================

Now that we know the sort of problem we want to tackle, let's see what
this looks like in the context of our little Kaleidoscope language.
We're going to add two features:

#. The ability to mutate variables with the '=' operator.
#. The ability to define new variables.

While the first item is really what this is about, we only have
variables for incoming arguments as well as for induction variables, and
redefining those only goes so far :). Also, the ability to define new
variables is a useful thing regardless of whether you will be mutating
them. Here's a motivating example that shows how we could use these:

::

    # Define ':' for sequencing: as a low-precedence operator that ignores operands
    # and just returns the RHS.
    def binary : 1 (x y) y;

    # Recursive fib, we could do this before.
    def fib(x)
      if (x < 3) then
        1
      else
        fib(x-1)+fib(x-2);

    # Iterative fib.
    def fibi(x)
      var a = 1, b = 1, c in
      (for i = 3, i < x in
         c = a + b :
         a = b :
         b = c) :
      b;

    # Call it.
    fibi(10);

In order to mutate variables, we have to change our existing variables
to use the "alloca trick". Once we have that, we'll add our new
operator, then extend Kaleidoscope to support new variable definitions.

Adjusting Existing Variables for Mutation
=========================================

The symbol table in Kaleidoscope is managed at code generation time by
the '``NamedValues``' map. This map currently keeps track of the LLVM
"Value\*" that holds the double value for the named variable. In order
to support mutation, we need to change this slightly, so that
``NamedValues`` holds the *memory location* of the variable in question.
Note that this change is a refactoring: it changes the structure of the
code, but does not (by itself) change the behavior of the compiler. All
of these changes are isolated in the Kaleidoscope code generator.

At this point in Kaleidoscope's development, it only supports variables
for two things: incoming arguments to functions and the induction
variable of 'for' loops. For consistency, we'll allow mutation of these
variables in addition to other user-defined variables. This means that
these will both need memory locations.

To start our transformation of Kaleidoscope, we'll change the
``NamedValues`` map so that it maps to AllocaInst\* instead of Value\*. Once
we do this, the C++ compiler will tell us what parts of the code we need
to update:

.. code-block:: c++

    static std::map<std::string, AllocaInst*> NamedValues;

Also, since we will need to create these allocas, we'll use a helper
function that ensures that the allocas are created in the entry block of
the function:

.. code-block:: c++

    /// CreateEntryBlockAlloca - Create an alloca instruction in the entry block of
    /// the function.  This is used for mutable variables etc.
    static AllocaInst *CreateEntryBlockAlloca(Function *TheFunction,
                                              StringRef VarName) {
      IRBuilder<> TmpB(&TheFunction->getEntryBlock(),
                     TheFunction->getEntryBlock().begin());
      return TmpB.CreateAlloca(Type::getDoubleTy(*TheContext), nullptr,
                               VarName);
    }

This funny looking code creates an IRBuilder object that is pointing at
the first instruction (.begin()) of the entry block. It then creates an
alloca with the expected name and returns it. Because all values in
Kaleidoscope are doubles, there is no need to pass in a type to use.

With this in place, the first functionality change we want to make belongs to
variable references. In our new scheme, variables live on the stack, so
code generating a reference to them actually needs to produce a load
from the stack slot:

.. code-block:: c++

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      AllocaInst *A = NamedValues[Name];
      if (!A)
        return LogErrorV("Unknown variable name");

      // Load the value.
      return Builder->CreateLoad(A->getAllocatedType(), A, Name.c_str());
    }

As you can see, this is pretty straightforward. Now we need to update
the things that define the variables to set up the alloca. We'll start
with ``ForExprAST::codegen()`` (see the `full code listing <#id1>`_ for
the unabridged code):

.. code-block:: c++

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create an alloca for the variable in the entry block.
      AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);

      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

      // Store the value into the alloca.
      Builder->CreateStore(StartVal, Alloca);
      ...

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Reload, increment, and restore the alloca.  This handles the case where
      // the body of the loop mutates the variable.
      Value *CurVar = Builder->CreateLoad(Alloca->getAllocatedType(), Alloca,
                                          VarName.c_str());
      Value *NextVar = Builder->CreateFAdd(CurVar, StepVal, "nextvar");
      Builder->CreateStore(NextVar, Alloca);
      ...

This code is virtually identical to the code `before we allowed mutable
variables <#code-generation-for-the-for-loop>`_. The big difference is that we
no longer have to construct a PHI node, and we use load/store to access
the variable as needed.

To support mutable argument variables, we need to also make allocas for
them. The code for this is also pretty simple:

.. code-block:: c++

    Function *FunctionAST::codegen() {
      ...
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args()) {
        // Create an alloca for this variable.
        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, Arg.getName());

        // Store the initial value into the alloca.
        Builder->CreateStore(&Arg, Alloca);

        // Add arguments to variable symbol table.
        NamedValues[std::string(Arg.getName())] = Alloca;
      }

      if (Value *RetVal = Body->codegen()) {
        ...

For each argument, we make an alloca, store the input value to the
function into the alloca, and register the alloca as the memory location
for the argument. This method gets invoked by ``FunctionAST::codegen()``
right after it sets up the entry block for the function.

The final missing piece is adding the mem2reg pass, which allows us to
get good codegen once again:

.. code-block:: c++

        // Promote allocas to registers.
        TheFPM->addPass(PromotePass());
        // Do simple "peephole" optimizations and bit-twiddling optzns.
        TheFPM->addPass(InstCombinePass());
        // Reassociate expressions.
        TheFPM->addPass(ReassociatePass());
        ...

It is interesting to see what the code looks like before and after the
mem2reg optimization runs. For example, this is the before/after code
for our recursive fib function. Before the optimization:

.. code-block:: llvm

    define double @fib(double %x) {
    entry:
      %x1 = alloca double
      store double %x, double* %x1
      %x2 = load double, double* %x1
      %cmptmp = fcmp ult double %x2, 3.000000e+00
      %booltmp = uitofp i1 %cmptmp to double
      %ifcond = fcmp one double %booltmp, 0.000000e+00
      br i1 %ifcond, label %then, label %else

    then:       ; preds = %entry
      br label %ifcont

    else:       ; preds = %entry
      %x3 = load double, double* %x1
      %subtmp = fsub double %x3, 1.000000e+00
      %calltmp = call double @fib(double %subtmp)
      %x4 = load double, double* %x1
      %subtmp5 = fsub double %x4, 2.000000e+00
      %calltmp6 = call double @fib(double %subtmp5)
      %addtmp = fadd double %calltmp, %calltmp6
      br label %ifcont

    ifcont:     ; preds = %else, %then
      %iftmp = phi double [ 1.000000e+00, %then ], [ %addtmp, %else ]
      ret double %iftmp
    }

Here there is only one variable (x, the input argument) but you can
still see the extremely simple-minded code generation strategy we are
using. In the entry block, an alloca is created, and the initial input
value is stored into it. Each reference to the variable does a reload
from the stack. Also, note that we didn't modify the if/then/else
expression, so it still inserts a PHI node. While we could make an
alloca for it, it is actually easier to create a PHI node for it, so we
still just make the PHI.

Here is the code after the mem2reg pass runs:

.. code-block:: llvm

    define double @fib(double %x) {
    entry:
      %cmptmp = fcmp ult double %x, 3.000000e+00
      %booltmp = uitofp i1 %cmptmp to double
      %ifcond = fcmp one double %booltmp, 0.000000e+00
      br i1 %ifcond, label %then, label %else

    then:
      br label %ifcont

    else:
      %subtmp = fsub double %x, 1.000000e+00
      %calltmp = call double @fib(double %subtmp)
      %subtmp5 = fsub double %x, 2.000000e+00
      %calltmp6 = call double @fib(double %subtmp5)
      %addtmp = fadd double %calltmp, %calltmp6
      br label %ifcont

    ifcont:     ; preds = %else, %then
      %iftmp = phi double [ 1.000000e+00, %then ], [ %addtmp, %else ]
      ret double %iftmp
    }

This is a trivial case for mem2reg, since there are no redefinitions of
the variable. The point of showing this is to calm your tension about
inserting such blatant inefficiencies :).

After the rest of the optimizers run, we get:

.. code-block:: llvm

    define double @fib(double %x) {
    entry:
      %cmptmp = fcmp ult double %x, 3.000000e+00
      %booltmp = uitofp i1 %cmptmp to double
      %ifcond = fcmp ueq double %booltmp, 0.000000e+00
      br i1 %ifcond, label %else, label %ifcont

    else:
      %subtmp = fsub double %x, 1.000000e+00
      %calltmp = call double @fib(double %subtmp)
      %subtmp5 = fsub double %x, 2.000000e+00
      %calltmp6 = call double @fib(double %subtmp5)
      %addtmp = fadd double %calltmp, %calltmp6
      ret double %addtmp

    ifcont:
      ret double 1.000000e+00
    }

Here we see that the simplifycfg pass decided to clone the return
instruction into the end of the 'else' block. This allowed it to
eliminate some branches and the PHI node.

Now that all symbol table references are updated to use stack variables,
we'll add the assignment operator.

New Assignment Operator
=======================

With our current framework, adding a new assignment operator is really
simple. We will parse it just like any other binary operator, but handle
it internally (instead of allowing the user to define it). The first
step is to set a precedence:

.. code-block:: c++

     int main() {
       // Install standard binary operators.
       // 1 is lowest precedence.
       BinopPrecedence['='] = 2;
       BinopPrecedence['<'] = 10;
       BinopPrecedence['+'] = 20;
       BinopPrecedence['-'] = 20;

Now that the parser knows the precedence of the binary operator, it
takes care of all the parsing and AST generation. We just need to
implement codegen for the assignment operator. This looks like:

.. code-block:: c++

    Value *BinaryExprAST::codegen() {
      // Special case '=' because we don't want to emit the LHS as an expression.
      if (Op == '=') {
        // This assume we're building without RTTI because LLVM builds that way by
        // default. If you build LLVM with RTTI this can be changed to a
        // dynamic_cast for automatic error checking.
        VariableExprAST *LHSE = static_cast<VariableExprAST*>(LHS.get());
        if (!LHSE)
          return LogErrorV("destination of '=' must be a variable");

Unlike the rest of the binary operators, our assignment operator doesn't
follow the "emit LHS, emit RHS, do computation" model. As such, it is
handled as a special case before the other binary operators are handled.
The other strange thing is that it requires the LHS to be a variable. It
is invalid to have "(x+1) = expr" - only things like "x = expr" are
allowed.

.. code-block:: c++

        // Codegen the RHS.
        Value *Val = RHS->codegen();
        if (!Val)
          return nullptr;

        // Look up the name.
        Value *Variable = NamedValues[LHSE->getName()];
        if (!Variable)
          return LogErrorV("Unknown variable name");

        Builder->CreateStore(Val, Variable);
        return Val;
      }
      ...

Once we have the variable, codegen'ing the assignment is
straightforward: we emit the RHS of the assignment, create a store, and
return the computed value. Returning a value allows for chained
assignments like "X = (Y = Z)".

Now that we have an assignment operator, we can mutate loop variables
and arguments. For example, we can now run code like this:

::

    # Function to print a double.
    extern printd(x);

    # Define ':' for sequencing: as a low-precedence operator that ignores operands
    # and just returns the RHS.
    def binary : 1 (x y) y;

    def test(x)
      printd(x) :
      x = 4 :
      printd(x);

    test(123);

When run, this example prints "123" and then "4", showing that we did
actually mutate the value! Okay, we have now officially implemented our
goal: getting this to work requires SSA construction in the general
case. However, to be really useful, we want the ability to define our
own local variables, let's add this next!

User-defined Local Variables
============================

Adding var/in is just like any other extension we made to
Kaleidoscope: we extend the lexer, the parser, the AST and the code
generator. The first step for adding our new 'var/in' construct is to
extend the lexer. As before, this is pretty trivial, the code looks like
this:

.. code-block:: c++

    enum Token {
      ...
      // var definition
      tok_var = -13
    ...
    }
    ...
    static int gettok() {
    ...
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        if (IdentifierStr == "var")
          return tok_var;
        return tok_identifier;
    ...

The next step is to define the AST node that we will construct. For
var/in, it looks like this:

.. code-block:: c++

    /// VarExprAST - Expression class for var/in
    class VarExprAST : public ExprAST {
      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;
      std::unique_ptr<ExprAST> Body;

    public:
      VarExprAST(std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames,
                 std::unique_ptr<ExprAST> Body)
        : VarNames(std::move(VarNames)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

var/in allows a list of names to be defined all at once, and each name
can optionally have an initializer value. As such, we capture this
information in the VarNames vector. Also, var/in has a body, this body
is allowed to access the variables defined by the var/in.

With this in place, we can define the parser pieces. The first thing we
do is add it as a primary expression:

.. code-block:: c++

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    ///   ::= varexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      case tok_var:
        return ParseVarExpr();
      }
    }

Next we define ParseVarExpr:

.. code-block:: c++

    /// varexpr ::= 'var' identifier ('=' expression)?
    //                    (',' identifier ('=' expression)?)* 'in' expression
    static std::unique_ptr<ExprAST> ParseVarExpr() {
      getNextToken();  // eat the var.

      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;

      // At least one variable name is required.
      if (CurTok != tok_identifier)
        return LogError("expected identifier after var");

The first part of this code parses the list of identifier/expr pairs
into the local ``VarNames`` vector.

.. code-block:: c++

      while (true) {
        std::string Name = IdentifierStr;
        getNextToken();  // eat identifier.

        // Read the optional initializer.
        std::unique_ptr<ExprAST> Init;
        if (CurTok == '=') {
          getNextToken(); // eat the '='.

          Init = ParseExpression();
          if (!Init) return nullptr;
        }

        VarNames.push_back(std::make_pair(Name, std::move(Init)));

        // End of var list, exit loop.
        if (CurTok != ',') break;
        getNextToken(); // eat the ','.

        if (CurTok != tok_identifier)
          return LogError("expected identifier list after var");
      }

Once all the variables are parsed, we then parse the body and create the
AST node:

.. code-block:: c++

      // At this point, we have to have 'in'.
      if (CurTok != tok_in)
        return LogError("expected 'in' keyword after 'var'");
      getNextToken();  // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<VarExprAST>(std::move(VarNames),
                                           std::move(Body));
    }

Now that we can parse and represent the code, we need to support
emission of LLVM IR for it. This code starts out with:

.. code-block:: c++

    Value *VarExprAST::codegen() {
      std::vector<AllocaInst *> OldBindings;

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Register all variables and emit their initializer.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i) {
        const std::string &VarName = VarNames[i].first;
        ExprAST *Init = VarNames[i].second.get();

Basically it loops over all the variables, installing them one at a
time. For each variable we put into the symbol table, we remember the
previous value that we replace in OldBindings.

.. code-block:: c++

        // Emit the initializer before adding the variable to scope, this prevents
        // the initializer from referencing the variable itself, and permits stuff
        // like this:
        //  var a = 1 in
        //    var a = a in ...   # refers to outer 'a'.
        Value *InitVal;
        if (Init) {
          InitVal = Init->codegen();
          if (!InitVal)
            return nullptr;
        } else { // If not specified, use 0.0.
          InitVal = ConstantFP::get(*TheContext, APFloat(0.0));
        }

        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);
        Builder->CreateStore(InitVal, Alloca);

        // Remember the old variable binding so that we can restore the binding when
        // we unrecurse.
        OldBindings.push_back(NamedValues[VarName]);

        // Remember this binding.
        NamedValues[VarName] = Alloca;
      }

There are more comments here than code. The basic idea is that we emit
the initializer, create the alloca, then update the symbol table to
point to it. Once all the variables are installed in the symbol table,
we evaluate the body of the var/in expression:

.. code-block:: c++

      // Codegen the body, now that all vars are in scope.
      Value *BodyVal = Body->codegen();
      if (!BodyVal)
        return nullptr;

Finally, before returning, we restore the previous variable bindings:

.. code-block:: c++

      // Pop all our variables from scope.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i)
        NamedValues[VarNames[i].first] = OldBindings[i];

      // Return the body computation.
      return BodyVal;
    }

The end result of all of this is that we get properly scoped variable
definitions, and we even (trivially) allow mutation of them :).

With this, we completed what we set out to do. Our nice iterative fib
example from the intro compiles and runs just fine. The mem2reg pass
optimizes all of our stack variables into SSA registers, inserting PHI
nodes where needed, and our front-end remains simple: no "iterated
dominance frontier" computation anywhere in sight.

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
mutable variables and var/in support. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter7/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "../include/KaleidoscopeJIT.h"
    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/Instructions.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/PassManager.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/Passes/PassBuilder.h"
    #include "llvm/Passes/StandardInstrumentations.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include "llvm/Transforms/Scalar/Reassociate.h"
    #include "llvm/Transforms/Scalar/SimplifyCFG.h"
    #include "llvm/Transforms/Utils/Mem2Reg.h"
    #include <algorithm>
    #include <cassert>
    #include <cctype>
    #include <cstdint>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <utility>
    #include <vector>

    using namespace llvm;
    using namespace llvm::orc;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5,

      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,
      tok_for = -9,
      tok_in = -10,

      // operators
      tok_binary = -11,
      tok_unary = -12,

      // var definition
      tok_var = -13
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        if (IdentifierStr == "var")
          return tok_var;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
      const std::string &getName() const { return Name; }
    };

    /// UnaryExprAST - Expression class for a unary operator.
    class UnaryExprAST : public ExprAST {
      char Opcode;
      std::unique_ptr<ExprAST> Operand;

    public:
      UnaryExprAST(char Opcode, std::unique_ptr<ExprAST> Operand)
          : Opcode(Opcode), Operand(std::move(Operand)) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;

    public:
      IfExprAST(std::unique_ptr<ExprAST> Cond, std::unique_ptr<ExprAST> Then,
                std::unique_ptr<ExprAST> Else)
          : Cond(std::move(Cond)), Then(std::move(Then)), Else(std::move(Else)) {}

      Value *codegen() override;
    };

    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;

    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
          : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
            Step(std::move(Step)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// VarExprAST - Expression class for var/in
    class VarExprAST : public ExprAST {
      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;
      std::unique_ptr<ExprAST> Body;

    public:
      VarExprAST(
          std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames,
          std::unique_ptr<ExprAST> Body)
          : VarNames(std::move(VarNames)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes), as well as if it is an operator.
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;
      bool IsOperator;
      unsigned Precedence; // Precedence if a binary op.

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args,
                   bool IsOperator = false, unsigned Prec = 0)
          : Name(Name), Args(std::move(Args)), IsOperator(IsOperator),
            Precedence(Prec) {}

      Function *codegen();
      const std::string &getName() const { return Name; }

      bool isUnaryOp() const { return IsOperator && Args.size() == 1; }
      bool isBinaryOp() const { return IsOperator && Args.size() == 2; }

      char getOperatorName() const {
        assert(isUnaryOp() || isBinaryOp());
        return Name[Name.size() - 1];
      }

      unsigned getBinaryPrecedence() const { return Precedence; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      getNextToken(); // eat the if.

      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;

      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken(); // eat the then

      auto Then = ParseExpression();
      if (!Then)
        return nullptr;

      if (CurTok != tok_else)
        return LogError("expected else");

      getNextToken();

      auto Else = ParseExpression();
      if (!Else)
        return nullptr;

      return std::make_unique<IfExprAST>(std::move(Cond), std::move(Then),
                                          std::move(Else));
    }

    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken(); // eat the for.

      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");

      std::string IdName = IdentifierStr;
      getNextToken(); // eat identifier.

      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken(); // eat '='.

      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();

      auto End = ParseExpression();
      if (!End)
        return nullptr;

      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }

      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<ForExprAST>(IdName, std::move(Start), std::move(End),
                                           std::move(Step), std::move(Body));
    }

    /// varexpr ::= 'var' identifier ('=' expression)?
    //                    (',' identifier ('=' expression)?)* 'in' expression
    static std::unique_ptr<ExprAST> ParseVarExpr() {
      getNextToken(); // eat the var.

      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;

      // At least one variable name is required.
      if (CurTok != tok_identifier)
        return LogError("expected identifier after var");

      while (true) {
        std::string Name = IdentifierStr;
        getNextToken(); // eat identifier.

        // Read the optional initializer.
        std::unique_ptr<ExprAST> Init = nullptr;
        if (CurTok == '=') {
          getNextToken(); // eat the '='.

          Init = ParseExpression();
          if (!Init)
            return nullptr;
        }

        VarNames.push_back(std::make_pair(Name, std::move(Init)));

        // End of var list, exit loop.
        if (CurTok != ',')
          break;
        getNextToken(); // eat the ','.

        if (CurTok != tok_identifier)
          return LogError("expected identifier list after var");
      }

      // At this point, we have to have 'in'.
      if (CurTok != tok_in)
        return LogError("expected 'in' keyword after 'var'");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<VarExprAST>(std::move(VarNames), std::move(Body));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    ///   ::= varexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      case tok_var:
        return ParseVarExpr();
      }
    }

    /// unary
    ///   ::= primary
    ///   ::= '!' unary
    static std::unique_ptr<ExprAST> ParseUnary() {
      // If the current token is not an operator, it must be a primary expr.
      if (!isascii(CurTok) || CurTok == '(' || CurTok == ',')
        return ParsePrimary();

      // If this is a unary operator, read it.
      int Opc = CurTok;
      getNextToken();
      if (auto Operand = ParseUnary())
        return std::make_unique<UnaryExprAST>(Opc, std::move(Operand));
      return nullptr;
    }

    /// binoprhs
    ///   ::= ('+' unary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the unary expression after the binary operator.
        auto RHS = ParseUnary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= unary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParseUnary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    ///   ::= unary LETTER (id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;

      unsigned Kind = 0; // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;

      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_unary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected unary operator");
        FnName = "unary";
        FnName += (char)CurTok;
        Kind = 1;
        getNextToken();
        break;
      case tok_binary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected binary operator");
        FnName = "binary";
        FnName += (char)CurTok;
        Kind = 2;
        getNextToken();

        // Read the precedence if present.
        if (CurTok == tok_number) {
          if (NumVal < 1 || NumVal > 100)
            return LogErrorP("Invalid precedence: must be 1..100");
          BinaryPrecedence = (unsigned)NumVal;
          getNextToken();
        }
        break;
      }

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      // Verify right number of names for operator.
      if (Kind && ArgNames.size() != Kind)
        return LogErrorP("Invalid number of operands for operator");

      return std::make_unique<PrototypeAST>(FnName, ArgNames, Kind != 0,
                                             BinaryPrecedence);
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, AllocaInst *> NamedValues;
    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    static std::unique_ptr<FunctionPassManager> TheFPM;
    static std::unique_ptr<LoopAnalysisManager> TheLAM;
    static std::unique_ptr<FunctionAnalysisManager> TheFAM;
    static std::unique_ptr<CGSCCAnalysisManager> TheCGAM;
    static std::unique_ptr<ModuleAnalysisManager> TheMAM;
    static std::unique_ptr<PassInstrumentationCallbacks> ThePIC;
    static std::unique_ptr<StandardInstrumentations> TheSI;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    static ExitOnError ExitOnErr;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    /// CreateEntryBlockAlloca - Create an alloca instruction in the entry block of
    /// the function.  This is used for mutable variables etc.
    static AllocaInst *CreateEntryBlockAlloca(Function *TheFunction,
                                              StringRef VarName) {
      IRBuilder<> TmpB(&TheFunction->getEntryBlock(),
                       TheFunction->getEntryBlock().begin());
      return TmpB.CreateAlloca(Type::getDoubleTy(*TheContext), nullptr, VarName);
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      AllocaInst *A = NamedValues[Name];
      if (!A)
        return LogErrorV("Unknown variable name");

      // Load the value.
      return Builder->CreateLoad(A->getAllocatedType(), A, Name.c_str());
    }

    Value *UnaryExprAST::codegen() {
      Value *OperandV = Operand->codegen();
      if (!OperandV)
        return nullptr;

      Function *F = getFunction(std::string("unary") + Opcode);
      if (!F)
        return LogErrorV("Unknown unary operator");

      return Builder->CreateCall(F, OperandV, "unop");
    }

    Value *BinaryExprAST::codegen() {
      // Special case '=' because we don't want to emit the LHS as an expression.
      if (Op == '=') {
        // Assignment requires the LHS to be an identifier.
        // This assume we're building without RTTI because LLVM builds that way by
        // default.  If you build LLVM with RTTI this can be changed to a
        // dynamic_cast for automatic error checking.
        VariableExprAST *LHSE = static_cast<VariableExprAST *>(LHS.get());
        if (!LHSE)
          return LogErrorV("destination of '=' must be a variable");
        // Codegen the RHS.
        Value *Val = RHS->codegen();
        if (!Val)
          return nullptr;

        // Look up the name.
        Value *Variable = NamedValues[LHSE->getName()];
        if (!Variable)
          return LogErrorV("Unknown variable name");

        Builder->CreateStore(Val, Variable);
        return Val;
      }

      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        break;
      }

      // If it wasn't a builtin binary operator, it must be a user defined one. Emit
      // a call to it.
      Function *F = getFunction(std::string("binary") + Op);
      assert(F && "binary operator not found!");

      Value *Ops[] = {L, R};
      return Builder->CreateCall(F, Ops, "binop");
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Value *IfExprAST::codegen() {
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB = BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");

      Builder->CreateCondBr(CondV, ThenBB, ElseBB);

      // Emit then value.
      Builder->SetInsertPoint(ThenBB);

      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();

      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);

      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();

      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN = Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");

      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }

    // Output for-loop as:
    //   var = alloca double
    //   ...
    //   start = startexpr
    //   store start -> var
    //   goto loop
    // loop:
    //   ...
    //   bodyexpr
    //   ...
    // loopend:
    //   step = stepexpr
    //   endcond = endexpr
    //
    //   curvar = load var
    //   nextvar = curvar + step
    //   store nextvar -> var
    //   br endcond, loop, endloop
    // outloop:
    Value *ForExprAST::codegen() {
      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create an alloca for the variable in the entry block.
      AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);

      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

      // Store the value into the alloca.
      Builder->CreateStore(StartVal, Alloca);

      // Make the new basic block for the loop header, inserting after current
      // block.
      BasicBlock *LoopBB = BasicBlock::Create(*TheContext, "loop", TheFunction);

      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);

      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);

      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      AllocaInst *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Alloca;

      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;

      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Reload, increment, and restore the alloca.  This handles the case where
      // the body of the loop mutates the variable.
      Value *CurVar =
          Builder->CreateLoad(Alloca->getAllocatedType(), Alloca, VarName.c_str());
      Value *NextVar = Builder->CreateFAdd(CurVar, StepVal, "nextvar");
      Builder->CreateStore(NextVar, Alloca);

      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");

      // Create the "after loop" block and insert it.
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);

      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);

      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);

      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);

      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }

    Value *VarExprAST::codegen() {
      std::vector<AllocaInst *> OldBindings;

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Register all variables and emit their initializer.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i) {
        const std::string &VarName = VarNames[i].first;
        ExprAST *Init = VarNames[i].second.get();

        // Emit the initializer before adding the variable to scope, this prevents
        // the initializer from referencing the variable itself, and permits stuff
        // like this:
        //  var a = 1 in
        //    var a = a in ...   # refers to outer 'a'.
        Value *InitVal;
        if (Init) {
          InitVal = Init->codegen();
          if (!InitVal)
            return nullptr;
        } else { // If not specified, use 0.0.
          InitVal = ConstantFP::get(*TheContext, APFloat(0.0));
        }

        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);
        Builder->CreateStore(InitVal, Alloca);

        // Remember the old variable binding so that we can restore the binding when
        // we unrecurse.
        OldBindings.push_back(NamedValues[VarName]);

        // Remember this binding.
        NamedValues[VarName] = Alloca;
      }

      // Codegen the body, now that all vars are in scope.
      Value *BodyVal = Body->codegen();
      if (!BodyVal)
        return nullptr;

      // Pop all our variables from scope.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i)
        NamedValues[VarNames[i].first] = OldBindings[i];

      // Return the body computation.
      return BodyVal;
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // If this is an operator, install it.
      if (P.isBinaryOp())
        BinopPrecedence[P.getOperatorName()] = P.getBinaryPrecedence();

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args()) {
        // Create an alloca for this variable.
        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, Arg.getName());

        // Store the initial value into the alloca.
        Builder->CreateStore(&Arg, Alloca);

        // Add arguments to variable symbol table.
        NamedValues[std::string(Arg.getName())] = Alloca;
      }

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        // Run the optimizer on the function.
        TheFPM->run(*TheFunction, *TheFAM);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();

      if (P.isBinaryOp())
        BinopPrecedence.erase(P.getOperatorName());
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModuleAndManagers() {
      // Open a new context and module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("KaleidoscopeJIT", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);

      // Create new pass and analysis managers.
      TheFPM = std::make_unique<FunctionPassManager>();
      TheLAM = std::make_unique<LoopAnalysisManager>();
      TheFAM = std::make_unique<FunctionAnalysisManager>();
      TheCGAM = std::make_unique<CGSCCAnalysisManager>();
      TheMAM = std::make_unique<ModuleAnalysisManager>();
      ThePIC = std::make_unique<PassInstrumentationCallbacks>();
      TheSI = std::make_unique<StandardInstrumentations>(*TheContext,
                                                         /*DebugLogging*/ true);
      TheSI->registerCallbacks(*ThePIC, TheMAM.get());

      // Add transform passes.
      // Promote allocas to registers.
      TheFPM->addPass(PromotePass());
      // Do simple "peephole" optimizations and bit-twiddling optzns.
      TheFPM->addPass(InstCombinePass());
      // Reassociate expressions.
      TheFPM->addPass(ReassociatePass());
      // Eliminate Common SubExpressions.
      TheFPM->addPass(GVNPass());
      // Simplify the control flow graph (deleting unreachable blocks, etc).
      TheFPM->addPass(SimplifyCFGPass());

      // Register analysis passes used in these transform passes.
      PassBuilder PB;
      PB.registerModuleAnalyses(*TheMAM);
      PB.registerFunctionAnalyses(*TheFAM);
      PB.crossRegisterProxies(*TheLAM, *TheFAM, *TheCGAM, *TheMAM);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          ExitOnErr(TheJIT->addModule(
              ThreadSafeModule(std::move(TheModule), std::move(TheContext))));
          InitializeModuleAndManagers();
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (FnAST->codegen()) {
          // Create a ResourceTracker to track JIT'd memory allocated to our
          // anonymous expression -- that way we can free it after executing.
          auto RT = TheJIT->getMainJITDylib().createResourceTracker();

          auto TSM = ThreadSafeModule(std::move(TheModule), std::move(TheContext));
          ExitOnErr(TheJIT->addModule(std::move(TSM), RT));
          InitializeModuleAndManagers();

          // Search the JIT for the __anon_expr symbol.
          auto ExprSymbol = ExitOnErr(TheJIT->lookup("__anon_expr"));

          // Get the symbol's address and cast it to the right type (takes no
          // arguments, returns a double) so we can call it as a native function.
          double (*FP)() = ExprSymbol.toPtr<double (*)()>();
          fprintf(stderr, "Evaluated to %f\n", FP());

          // Delete the anonymous expression module from the JIT.
          ExitOnErr(RT->remove());
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        fprintf(stderr, "ready> ");
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['='] = 2;
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      TheJIT = ExitOnErr(KaleidoscopeJIT::Create());

      InitializeModuleAndManagers();

      // Run the main "interpreter loop" now.
      MainLoop();

      return 0;
    }

`Next: Compiling to Object Code <#LangImpl08>`_


.. _LangImpl08:

============================================
08. Kaleidoscope: Compiling to Object Code
============================================


Chapter 8 Introduction
======================

Welcome to Chapter 8 of the "`Implementing a language with LLVM
<index.html>`_" tutorial. This chapter describes how to compile our
language down to object files.

Choosing a target
=================

LLVM has native support for cross-compilation. You can compile to the
architecture of your current machine, or just as easily compile for
other architectures. In this tutorial, we'll target the current
machine.

To specify the architecture that you want to target, we use a string
called a "target triple". This takes the form
``<arch><sub>-<vendor>-<sys>-<abi>`` (see the `cross compilation docs
<https://clang.llvm.org/docs/CrossCompilation.html#target-triple>`_).

As an example, we can see what clang thinks is our current target
triple:

::

    $ clang --version | grep Target
    Target: x86_64-unknown-linux-gnu

Running this command may show something different on your machine as
you might be using a different architecture or operating system to me.

Fortunately, we don't need to hard-code a target triple to target the
current machine. LLVM provides ``sys::getDefaultTargetTriple``, which
returns the target triple of the current machine.

.. code-block:: c++

    auto TargetTriple = sys::getDefaultTargetTriple();

LLVM doesn't require us to link in all the target
functionality. For example, if we're just using the JIT, we don't need
the assembly printers. Similarly, if we're only targeting certain
architectures, we can only link in the functionality for those
architectures.

For this example, we'll initialize all the targets for emitting object
code.

.. code-block:: c++

    InitializeAllTargetInfos();
    InitializeAllTargets();
    InitializeAllTargetMCs();
    InitializeAllAsmParsers();
    InitializeAllAsmPrinters();

We can now use our target triple to get a ``Target``:

.. code-block:: c++

  std::string Error;
  auto Target = TargetRegistry::lookupTarget(TargetTriple, Error);

  // Print an error and exit if we couldn't find the requested target.
  // This generally occurs if we've forgotten to initialise the
  // TargetRegistry or we have a bogus target triple.
  if (!Target) {
    errs() << Error;
    return 1;
  }

Target Machine
==============

We will also need a ``TargetMachine``. This class provides a complete
machine description of the machine we're targeting. If we want to
target a specific feature (such as SSE) or a specific CPU (such as
Intel's Sandylake), we do so now.

To see which features and CPUs that LLVM knows about, we can use
``llc``. For example, let's look at x86:

::

    $ llvm-as < /dev/null | llc -march=x86 -mattr=help
    Available CPUs for this target:

      amdfam10      - Select the amdfam10 processor.
      athlon        - Select the athlon processor.
      athlon-4      - Select the athlon-4 processor.
      ...

    Available features for this target:

      16bit-mode            - 16-bit mode (i8086).
      32bit-mode            - 32-bit mode (80386).
      3dnow                 - Enable 3DNow! instructions.
      3dnowa                - Enable 3DNow! Athlon instructions.
      ...

For our example, we'll use the generic CPU without any additional feature or
target option.

.. code-block:: c++

  auto CPU = "generic";
  auto Features = "";

  TargetOptions opt;
  auto TargetMachine = Target->createTargetMachine(TargetTriple, CPU, Features, opt, Reloc::PIC_);


Configuring the Module
======================

We're now ready to configure our module, to specify the target and
data layout. This isn't strictly necessary, but the `frontend performance 
guide <https://llvm.org/docs/Frontend/PerformanceTips.html>`_ recommends
this. Optimizations benefit from knowing about the target and data
layout.

.. code-block:: c++

  TheModule->setDataLayout(TargetMachine->createDataLayout());
  TheModule->setTargetTriple(TargetTriple);

Emit Object Code
================

We're ready to emit object code! Let's define where we want to write
our file to:

.. code-block:: c++

  auto Filename = "output.o";
  std::error_code EC;
  raw_fd_ostream dest(Filename, EC, sys::fs::OF_None);

  if (EC) {
    errs() << "Could not open file: " << EC.message();
    return 1;
  }

Finally, we define a pass that emits object code, then we run that
pass:

.. code-block:: c++

  legacy::PassManager pass;
  auto FileType = CodeGenFileType::ObjectFile;

  if (TargetMachine->addPassesToEmitFile(pass, dest, nullptr, FileType)) {
    errs() << "TargetMachine can't emit a file of this type";
    return 1;
  }

  pass.run(*TheModule);
  dest.flush();

Putting It All Together
=======================

Does it work? Let's give it a try. We need to compile our code, but
note that the arguments to ``llvm-config`` are different to the previous chapters.

::

    $ clang++ -g -O3 toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs all` -o toy

Let's run it, and define a simple ``average`` function. Press Ctrl-D
when you're done.

::

    $ ./toy
    ready> def average(x y) (x + y) * 0.5;
    ^D
    Wrote output.o

We have an object file! To test it, let's write a simple program and
link it with our output. Here's the source code:

.. code-block:: c++

    #include <iostream>

    extern "C" {
        double average(double, double);
    }

    int main() {
        std::cout << "average of 3.0 and 4.0: " << average(3.0, 4.0) << std::endl;
    }

We link our program to output.o and check the result is what we
expected:

::

    $ clang++ main.cpp output.o -o main
    $ ./main
    average of 3.0 and 4.0: 3.5

Full Code Listing
=================

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter8/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "llvm/ADT/APFloat.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/IR/BasicBlock.h"
    #include "llvm/IR/Constants.h"
    #include "llvm/IR/DerivedTypes.h"
    #include "llvm/IR/Function.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/Instructions.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/Type.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/MC/TargetRegistry.h"
    #include "llvm/Support/FileSystem.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/Support/raw_ostream.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Target/TargetOptions.h"
    #include "llvm/TargetParser/Host.h"
    #include <algorithm>
    #include <cassert>
    #include <cctype>
    #include <cstdio>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <system_error>
    #include <utility>
    #include <vector>

    using namespace llvm;
    using namespace llvm::sys;

    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//

    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,

      // commands
      tok_def = -2,
      tok_extern = -3,

      // primary
      tok_identifier = -4,
      tok_number = -5,

      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,
      tok_for = -9,
      tok_in = -10,

      // operators
      tok_binary = -11,
      tok_unary = -12,

      // var definition
      tok_var = -13
    };

    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number

    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';

      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = getchar();

      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = getchar())))
          IdentifierStr += LastChar;

        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        if (IdentifierStr == "var")
          return tok_var;
        return tok_identifier;
      }

      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = getchar();
        } while (isdigit(LastChar) || LastChar == '.');

        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }

      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = getchar();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');

        if (LastChar != EOF)
          return gettok();
      }

      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;

      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = getchar();
      return ThisChar;
    }

    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//

    namespace {

    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
    public:
      virtual ~ExprAST() = default;

      virtual Value *codegen() = 0;
    };

    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;

    public:
      NumberExprAST(double Val) : Val(Val) {}

      Value *codegen() override;
    };

    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;

    public:
      VariableExprAST(const std::string &Name) : Name(Name) {}

      Value *codegen() override;
      const std::string &getName() const { return Name; }
    };

    /// UnaryExprAST - Expression class for a unary operator.
    class UnaryExprAST : public ExprAST {
      char Opcode;
      std::unique_ptr<ExprAST> Operand;

    public:
      UnaryExprAST(char Opcode, std::unique_ptr<ExprAST> Operand)
          : Opcode(Opcode), Operand(std::move(Operand)) {}

      Value *codegen() override;
    };

    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;

    public:
      BinaryExprAST(char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}

      Value *codegen() override;
    };

    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;

    public:
      CallExprAST(const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : Callee(Callee), Args(std::move(Args)) {}

      Value *codegen() override;
    };

    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;

    public:
      IfExprAST(std::unique_ptr<ExprAST> Cond, std::unique_ptr<ExprAST> Then,
                std::unique_ptr<ExprAST> Else)
          : Cond(std::move(Cond)), Then(std::move(Then)), Else(std::move(Else)) {}

      Value *codegen() override;
    };

    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;

    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
          : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
            Step(std::move(Step)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// VarExprAST - Expression class for var/in
    class VarExprAST : public ExprAST {
      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;
      std::unique_ptr<ExprAST> Body;

    public:
      VarExprAST(
          std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames,
          std::unique_ptr<ExprAST> Body)
          : VarNames(std::move(VarNames)), Body(std::move(Body)) {}

      Value *codegen() override;
    };

    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes), as well as if it is an operator.
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;
      bool IsOperator;
      unsigned Precedence; // Precedence if a binary op.

    public:
      PrototypeAST(const std::string &Name, std::vector<std::string> Args,
                   bool IsOperator = false, unsigned Prec = 0)
          : Name(Name), Args(std::move(Args)), IsOperator(IsOperator),
            Precedence(Prec) {}

      Function *codegen();
      const std::string &getName() const { return Name; }

      bool isUnaryOp() const { return IsOperator && Args.size() == 1; }
      bool isBinaryOp() const { return IsOperator && Args.size() == 2; }

      char getOperatorName() const {
        assert(isUnaryOp() || isBinaryOp());
        return Name[Name.size() - 1];
      }

      unsigned getBinaryPrecedence() const { return Precedence; }
    };

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      Function *codegen();
    };

    } // end anonymous namespace

    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//

    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }

    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;

    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;

      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }

    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }

    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    static std::unique_ptr<ExprAST> ParseExpression();

    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }

    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;

      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }

    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;

      getNextToken(); // eat identifier.

      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(IdName);

      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;

          if (CurTok == ')')
            break;

          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }

      // Eat the ')'.
      getNextToken();

      return std::make_unique<CallExprAST>(IdName, std::move(Args));
    }

    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      getNextToken(); // eat the if.

      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;

      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken(); // eat the then

      auto Then = ParseExpression();
      if (!Then)
        return nullptr;

      if (CurTok != tok_else)
        return LogError("expected else");

      getNextToken();

      auto Else = ParseExpression();
      if (!Else)
        return nullptr;

      return std::make_unique<IfExprAST>(std::move(Cond), std::move(Then),
                                          std::move(Else));
    }

    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken(); // eat the for.

      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");

      std::string IdName = IdentifierStr;
      getNextToken(); // eat identifier.

      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken(); // eat '='.

      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();

      auto End = ParseExpression();
      if (!End)
        return nullptr;

      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }

      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<ForExprAST>(IdName, std::move(Start), std::move(End),
                                           std::move(Step), std::move(Body));
    }

    /// varexpr ::= 'var' identifier ('=' expression)?
    //                    (',' identifier ('=' expression)?)* 'in' expression
    static std::unique_ptr<ExprAST> ParseVarExpr() {
      getNextToken(); // eat the var.

      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;

      // At least one variable name is required.
      if (CurTok != tok_identifier)
        return LogError("expected identifier after var");

      while (true) {
        std::string Name = IdentifierStr;
        getNextToken(); // eat identifier.

        // Read the optional initializer.
        std::unique_ptr<ExprAST> Init = nullptr;
        if (CurTok == '=') {
          getNextToken(); // eat the '='.

          Init = ParseExpression();
          if (!Init)
            return nullptr;
        }

        VarNames.push_back(std::make_pair(Name, std::move(Init)));

        // End of var list, exit loop.
        if (CurTok != ',')
          break;
        getNextToken(); // eat the ','.

        if (CurTok != tok_identifier)
          return LogError("expected identifier list after var");
      }

      // At this point, we have to have 'in'.
      if (CurTok != tok_in)
        return LogError("expected 'in' keyword after 'var'");
      getNextToken(); // eat 'in'.

      auto Body = ParseExpression();
      if (!Body)
        return nullptr;

      return std::make_unique<VarExprAST>(std::move(VarNames), std::move(Body));
    }

    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    ///   ::= varexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      case tok_var:
        return ParseVarExpr();
      }
    }

    /// unary
    ///   ::= primary
    ///   ::= '!' unary
    static std::unique_ptr<ExprAST> ParseUnary() {
      // If the current token is not an operator, it must be a primary expr.
      if (!isascii(CurTok) || CurTok == '(' || CurTok == ',')
        return ParsePrimary();

      // If this is a unary operator, read it.
      int Opc = CurTok;
      getNextToken();
      if (auto Operand = ParseUnary())
        return std::make_unique<UnaryExprAST>(Opc, std::move(Operand));
      return nullptr;
    }

    /// binoprhs
    ///   ::= ('+' unary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();

        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;

        // Okay, we know this is a binop.
        int BinOp = CurTok;
        getNextToken(); // eat binop

        // Parse the unary expression after the binary operator.
        auto RHS = ParseUnary();
        if (!RHS)
          return nullptr;

        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }

        // Merge LHS/RHS.
        LHS =
            std::make_unique<BinaryExprAST>(BinOp, std::move(LHS), std::move(RHS));
      }
    }

    /// expression
    ///   ::= unary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParseUnary();
      if (!LHS)
        return nullptr;

      return ParseBinOpRHS(0, std::move(LHS));
    }

    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    ///   ::= unary LETTER (id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;

      unsigned Kind = 0; // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;

      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_unary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected unary operator");
        FnName = "unary";
        FnName += (char)CurTok;
        Kind = 1;
        getNextToken();
        break;
      case tok_binary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected binary operator");
        FnName = "binary";
        FnName += (char)CurTok;
        Kind = 2;
        getNextToken();

        // Read the precedence if present.
        if (CurTok == tok_number) {
          if (NumVal < 1 || NumVal > 100)
            return LogErrorP("Invalid precedence: must be 1..100");
          BinaryPrecedence = (unsigned)NumVal;
          getNextToken();
        }
        break;
      }

      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");

      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");

      // success.
      getNextToken(); // eat ')'.

      // Verify right number of names for operator.
      if (Kind && ArgNames.size() != Kind)
        return LogErrorP("Invalid number of operands for operator");

      return std::make_unique<PrototypeAST>(FnName, ArgNames, Kind != 0,
                                             BinaryPrecedence);
    }

    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;

      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }

    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      if (auto E = ParseExpression()) {
        // Make an anonymous proto.
        auto Proto = std::make_unique<PrototypeAST>("__anon_expr",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }

    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }

    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//

    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static std::map<std::string, AllocaInst *> NamedValues;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    static ExitOnError ExitOnErr;

    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }

    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;

      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();

      // If no existing prototype exists, return null.
      return nullptr;
    }

    /// CreateEntryBlockAlloca - Create an alloca instruction in the entry block of
    /// the function.  This is used for mutable variables etc.
    static AllocaInst *CreateEntryBlockAlloca(Function *TheFunction,
                                              StringRef VarName) {
      IRBuilder<> TmpB(&TheFunction->getEntryBlock(),
                       TheFunction->getEntryBlock().begin());
      return TmpB.CreateAlloca(Type::getDoubleTy(*TheContext), nullptr, VarName);
    }

    Value *NumberExprAST::codegen() {
      return ConstantFP::get(*TheContext, APFloat(Val));
    }

    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");

      // Load the value.
      return Builder->CreateLoad(Type::getDoubleTy(*TheContext), V, Name.c_str());
    }

    Value *UnaryExprAST::codegen() {
      Value *OperandV = Operand->codegen();
      if (!OperandV)
        return nullptr;

      Function *F = getFunction(std::string("unary") + Opcode);
      if (!F)
        return LogErrorV("Unknown unary operator");

      return Builder->CreateCall(F, OperandV, "unop");
    }

    Value *BinaryExprAST::codegen() {
      // Special case '=' because we don't want to emit the LHS as an expression.
      if (Op == '=') {
        // Assignment requires the LHS to be an identifier.
        // This assume we're building without RTTI because LLVM builds that way by
        // default.  If you build LLVM with RTTI this can be changed to a
        // dynamic_cast for automatic error checking.
        VariableExprAST *LHSE = static_cast<VariableExprAST *>(LHS.get());
        if (!LHSE)
          return LogErrorV("destination of '=' must be a variable");
        // Codegen the RHS.
        Value *Val = RHS->codegen();
        if (!Val)
          return nullptr;

        // Look up the name.
        Value *Variable = NamedValues[LHSE->getName()];
        if (!Variable)
          return LogErrorV("Unknown variable name");

        Builder->CreateStore(Val, Variable);
        return Val;
      }

      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;

      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        break;
      }

      // If it wasn't a builtin binary operator, it must be a user defined one. Emit
      // a call to it.
      Function *F = getFunction(std::string("binary") + Op);
      assert(F && "binary operator not found!");

      Value *Ops[] = {L, R};
      return Builder->CreateCall(F, Ops, "binop");
    }

    Value *CallExprAST::codegen() {
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");

      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");

      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }

      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }

    Value *IfExprAST::codegen() {
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;

      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB = BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");

      Builder->CreateCondBr(CondV, ThenBB, ElseBB);

      // Emit then value.
      Builder->SetInsertPoint(ThenBB);

      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();

      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);

      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;

      Builder->CreateBr(MergeBB);
      // Codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();

      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN = Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");

      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }

    // Output for-loop as:
    //   var = alloca double
    //   ...
    //   start = startexpr
    //   store start -> var
    //   goto loop
    // loop:
    //   ...
    //   bodyexpr
    //   ...
    // loopend:
    //   step = stepexpr
    //   endcond = endexpr
    //
    //   curvar = load var
    //   nextvar = curvar + step
    //   store nextvar -> var
    //   br endcond, loop, endloop
    // outloop:
    Value *ForExprAST::codegen() {
      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Create an alloca for the variable in the entry block.
      AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);

      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;

      // Store the value into the alloca.
      Builder->CreateStore(StartVal, Alloca);

      // Make the new basic block for the loop header, inserting after current
      // block.
      BasicBlock *LoopBB = BasicBlock::Create(*TheContext, "loop", TheFunction);

      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);

      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);

      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      AllocaInst *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Alloca;

      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;

      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }

      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;

      // Reload, increment, and restore the alloca.  This handles the case where
      // the body of the loop mutates the variable.
      Value *CurVar = Builder->CreateLoad(Type::getDoubleTy(*TheContext), Alloca,
                                          VarName.c_str());
      Value *NextVar = Builder->CreateFAdd(CurVar, StepVal, "nextvar");
      Builder->CreateStore(NextVar, Alloca);

      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");

      // Create the "after loop" block and insert it.
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);

      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);

      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);

      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);

      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }

    Value *VarExprAST::codegen() {
      std::vector<AllocaInst *> OldBindings;

      Function *TheFunction = Builder->GetInsertBlock()->getParent();

      // Register all variables and emit their initializer.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i) {
        const std::string &VarName = VarNames[i].first;
        ExprAST *Init = VarNames[i].second.get();

        // Emit the initializer before adding the variable to scope, this prevents
        // the initializer from referencing the variable itself, and permits stuff
        // like this:
        //  var a = 1 in
        //    var a = a in ...   # refers to outer 'a'.
        Value *InitVal;
        if (Init) {
          InitVal = Init->codegen();
          if (!InitVal)
            return nullptr;
        } else { // If not specified, use 0.0.
          InitVal = ConstantFP::get(*TheContext, APFloat(0.0));
        }

        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);
        Builder->CreateStore(InitVal, Alloca);

        // Remember the old variable binding so that we can restore the binding when
        // we unrecurse.
        OldBindings.push_back(NamedValues[VarName]);

        // Remember this binding.
        NamedValues[VarName] = Alloca;
      }

      // Codegen the body, now that all vars are in scope.
      Value *BodyVal = Body->codegen();
      if (!BodyVal)
        return nullptr;

      // Pop all our variables from scope.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i)
        NamedValues[VarNames[i].first] = OldBindings[i];

      // Return the body computation.
      return BodyVal;
    }

    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);

      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());

      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);

      return F;
    }

    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;

      // If this is an operator, install it.
      if (P.isBinaryOp())
        BinopPrecedence[P.getOperatorName()] = P.getBinaryPrecedence();

      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);

      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      for (auto &Arg : TheFunction->args()) {
        // Create an alloca for this variable.
        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, Arg.getName());

        // Store the initial value into the alloca.
        Builder->CreateStore(&Arg, Alloca);

        // Add arguments to variable symbol table.
        NamedValues[std::string(Arg.getName())] = Alloca;
      }

      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);

        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);

        return TheFunction;
      }

      // Error reading body, remove function.
      TheFunction->eraseFromParent();

      if (P.isBinaryOp())
        BinopPrecedence.erase(P.getOperatorName());
      return nullptr;
    }

    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//

    static void InitializeModuleAndPassManager() {
      // Open a new module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("my cool jit", *TheContext);

      // Create a new builder for the module.
      Builder = std::make_unique<IRBuilder<>>(*TheContext);
    }

    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (auto *FnIR = FnAST->codegen()) {
          fprintf(stderr, "Read function definition:");
          FnIR->print(errs());
          fprintf(stderr, "\n");
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (auto *FnIR = ProtoAST->codegen()) {
          fprintf(stderr, "Read extern: ");
          FnIR->print(errs());
          fprintf(stderr, "\n");
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        FnAST->codegen();
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }

    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }

    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//

    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif

    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }

    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }

    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//

    int main() {
      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.

      // Prime the first token.
      fprintf(stderr, "ready> ");
      getNextToken();

      InitializeModuleAndPassManager();

      // Run the main "interpreter loop" now.
      MainLoop();

      // Initialize the target registry etc.
      InitializeAllTargetInfos();
      InitializeAllTargets();
      InitializeAllTargetMCs();
      InitializeAllAsmParsers();
      InitializeAllAsmPrinters();

      auto TargetTriple = sys::getDefaultTargetTriple();
      TheModule->setTargetTriple(Triple(TargetTriple));

      std::string Error;
      auto Target = TargetRegistry::lookupTarget(TargetTriple, Error);

      // Print an error and exit if we couldn't find the requested target.
      // This generally occurs if we've forgotten to initialise the
      // TargetRegistry or we have a bogus target triple.
      if (!Target) {
        errs() << Error;
        return 1;
      }

      auto CPU = "generic";
      auto Features = "";

      TargetOptions opt;
      auto TheTargetMachine = Target->createTargetMachine(
          Triple(TargetTriple), CPU, Features, opt, Reloc::PIC_);

      TheModule->setDataLayout(TheTargetMachine->createDataLayout());

      auto Filename = "output.o";
      std::error_code EC;
      raw_fd_ostream dest(Filename, EC, sys::fs::OF_None);

      if (EC) {
        errs() << "Could not open file: " << EC.message();
        return 1;
      }

      legacy::PassManager pass;
      auto FileType = CodeGenFileType::ObjectFile;

      if (TheTargetMachine->addPassesToEmitFile(pass, dest, nullptr, FileType)) {
        errs() << "TheTargetMachine can't emit a file of this type";
        return 1;
      }

      pass.run(*TheModule);
      dest.flush();

      outs() << "Wrote " << Filename << "\n";

      return 0;
    }

`Next: Adding Debug Information <#LangImpl09>`_


.. _LangImpl09:

==========================================
09. Kaleidoscope: Adding Debug Information
==========================================


Chapter 9 Introduction
======================

Welcome to Chapter 9 of the "`Implementing a language with
LLVM <index.html>`_" tutorial. In chapters 1 through 8, we've built a
decent little programming language with functions and variables.
What happens if something goes wrong though, how do you debug your
program?

Source level debugging uses formatted data that helps a debugger
translate from binary and the state of the machine back to the
source that the programmer wrote. In LLVM we generally use a format
called `DWARF <http://dwarfstd.org>`_. DWARF is a compact encoding
that represents types, source locations, and variable locations.

The short summary of this chapter is that we'll go through the
various things you have to add to a programming language to
support debug info, and how you translate that into DWARF.

Caveat: For now we can't debug via the JIT, so we'll need to compile
our program down to something small and standalone. As part of this
we'll make a few modifications to the running of the language and
how programs are compiled. This means that we'll have a source file
with a simple program written in Kaleidoscope rather than the
interactive JIT. It does involve a limitation that we can only
have one "top level" command at a time to reduce the number of
changes necessary.

Here's the sample program we'll be compiling:

.. code-block:: python

   def fib(x)
     if x < 3 then
       1
     else
       fib(x-1)+fib(x-2);

   fib(10)


Why is this a hard problem?
===========================

Debug information is a hard problem for a few different reasons - mostly
centered around optimized code. First, optimization makes keeping source
locations more difficult. In LLVM IR we keep the original source location
for each IR level instruction on the instruction. Optimization passes
should keep the source locations for newly created instructions, but merged
instructions only get to keep a single location - this can cause jumping
around when stepping through optimized programs. Secondly, optimization
can move variables in ways that are either optimized out, shared in memory
with other variables, or difficult to track. For the purposes of this
tutorial we're going to avoid optimization (as you'll see with one of the
next sets of patches).

Ahead-of-Time Compilation Mode
==============================

To highlight only the aspects of adding debug information to a source
language without needing to worry about the complexities of JIT debugging
we're going to make a few changes to Kaleidoscope to support compiling
the IR emitted by the front end into a simple standalone program that
you can execute, debug, and see results.

First we make our anonymous function that contains our top level
statement be our "main":

.. code-block:: udiff

  -    auto Proto = std::make_unique<PrototypeAST>("", std::vector<std::string>());
  +    auto Proto = std::make_unique<PrototypeAST>("main", std::vector<std::string>());

just with the simple change of giving it a name.

Then we're going to remove the command line code wherever it exists:

.. code-block:: udiff

  @@ -1129,7 +1129,6 @@ static void HandleTopLevelExpression() {
   /// top ::= definition | external | expression | ';'
   static void MainLoop() {
     while (true) {
  -    fprintf(stderr, "ready> ");
       switch (CurTok) {
       case tok_eof:
         return;
  @@ -1184,7 +1183,6 @@ int main() {
     BinopPrecedence['*'] = 40; // highest.

     // Prime the first token.
  -  fprintf(stderr, "ready> ");
     getNextToken();

Lastly we're going to disable all of the optimization passes and the JIT so
that the only thing that happens after we're done parsing and generating
code is that the LLVM IR goes to standard error:

.. code-block:: udiff

  @@ -1108,17 +1108,8 @@ static void HandleExtern() {
   static void HandleTopLevelExpression() {
     // Evaluate a top-level expression into an anonymous function.
     if (auto FnAST = ParseTopLevelExpr()) {
  -    if (auto *FnIR = FnAST->codegen()) {
  -      // We're just doing this to make sure it executes.
  -      TheExecutionEngine->finalizeObject();
  -      // JIT the function, returning a function pointer.
  -      void *FPtr = TheExecutionEngine->getPointerToFunction(FnIR);
  -
  -      // Cast it to the right type (takes no arguments, returns a double) so we
  -      // can call it as a native function.
  -      double (*FP)() = (double (*)())(intptr_t)FPtr;
  -      // Ignore the return value for this.
  -      (void)FP;
  +    if (!FnAST->codegen()) {
  +      fprintf(stderr, "Error generating code for top level expr");
       }
     } else {
       // Skip token for error recovery.
  @@ -1439,11 +1459,11 @@ int main() {
     // target lays out data structures.
     TheModule->setDataLayout(TheExecutionEngine->getDataLayout());
     OurFPM.add(new DataLayoutPass());
  +#if 0
     OurFPM.add(createBasicAliasAnalysisPass());
     // Promote allocas to registers.
     OurFPM.add(createPromoteMemoryToRegisterPass());
  @@ -1218,7 +1210,7 @@ int main() {
     OurFPM.add(createGVNPass());
     // Simplify the control flow graph (deleting unreachable blocks, etc).
     OurFPM.add(createCFGSimplificationPass());
  -
  +  #endif
     OurFPM.doInitialization();

     // Set the global so the code gen can use this.

This relatively small set of changes get us to the point that we can compile
our piece of Kaleidoscope language down to an executable program via this
command line:

.. code-block:: bash

  Kaleidoscope-Ch9 < fib.ks | & clang -x ir -

which gives an a.out/a.exe in the current working directory.

Compile Unit
============

The top level container for a section of code in DWARF is a compile unit.
This contains the type and function data for an individual translation unit
(read: one file of source code). So the first thing we need to do is
construct one for our fib.ks file.

DWARF Emission Setup
====================

Similar to the ``IRBuilder`` class we have a
`DIBuilder <https://llvm.org/doxygen/classllvm_1_1DIBuilder.html>`_ class
that helps in constructing debug metadata for an LLVM IR file. It
corresponds 1:1 similarly to ``IRBuilder`` and LLVM IR, but with nicer names.
Using it does require that you be more familiar with DWARF terminology than
you needed to be with ``IRBuilder`` and ``Instruction`` names, but if you
read through the general documentation on the
`Metadata Format <https://llvm.org/docs/SourceLevelDebugging.html>`_ it
should be a little more clear. We'll be using this class to construct all
of our IR level descriptions. Construction for it takes a module so we
need to construct it shortly after we construct our module. We've left it
as a global static variable to make it a bit easier to use.

Next we're going to create a small container to cache some of our frequent
data. The first will be our compile unit, but we'll also write a bit of
code for our one type since we won't have to worry about multiple typed
expressions:

.. code-block:: c++

  static std::unique_ptr<DIBuilder> DBuilder;

  struct DebugInfo {
    DICompileUnit *TheCU;
    DIType *DblTy;

    DIType *getDoubleTy();
  } KSDbgInfo;

  DIType *DebugInfo::getDoubleTy() {
    if (DblTy)
      return DblTy;

    DblTy = DBuilder->createBasicType("double", 64, dwarf::DW_ATE_float);
    return DblTy;
  }

And then later on in ``main`` when we're constructing our module:

.. code-block:: c++

  DBuilder = std::make_unique<DIBuilder>(*TheModule);

  KSDbgInfo.TheCU = DBuilder->createCompileUnit(
      dwarf::DW_LANG_C, DBuilder->createFile("fib.ks", "."),
      "Kaleidoscope Compiler", false, "", 0);

There are a couple of things to note here. First, while we're producing a
compile unit for a language called Kaleidoscope we used the language
constant for C. This is because a debugger wouldn't necessarily understand
the calling conventions or default ABI for a language it doesn't recognize
and we follow the C ABI in our LLVM code generation so it's the closest
thing to accurate. This ensures we can actually call functions from the
debugger and have them execute. Secondly, you'll see the "fib.ks" in the
call to ``createCompileUnit``. This is a default hard coded value since
we're using shell redirection to put our source into the Kaleidoscope
compiler. In a usual front end you'd have an input file name and it would
go there.

One last thing as part of emitting debug information via DIBuilder is that
we need to "finalize" the debug information. The reasons are part of the
underlying API for DIBuilder, but make sure you do this near the end of
main:

.. code-block:: c++

  DBuilder->finalize();

before you dump out the module.

Functions
=========

Now that we have our ``Compile Unit`` and our source locations, we can add
function definitions to the debug info. So in ``FunctionAST::codegen()`` we
add a few lines of code to describe a context for our subprogram, in this
case the "File", and the actual definition of the function itself.

So the context:

.. code-block:: c++

  DIFile *Unit = DBuilder->createFile(KSDbgInfo.TheCU->getFilename(),
                                      KSDbgInfo.TheCU->getDirectory());

giving us an DIFile and asking the ``Compile Unit`` we created above for the
directory and filename where we are currently. Then, for now, we use some
source locations of 0 (since our AST doesn't currently have source location
information) and construct our function definition:

.. code-block:: c++

  DIScope *FContext = Unit;
  unsigned LineNo = 0;
  unsigned ScopeLine = 0;
  DISubprogram *SP = DBuilder->createFunction(
      FContext, P.getName(), StringRef(), Unit, LineNo,
      CreateFunctionType(TheFunction->arg_size()),
      ScopeLine,
      DINode::FlagPrototyped,
      DISubprogram::SPFlagDefinition);
  TheFunction->setSubprogram(SP);

and we now have an DISubprogram that contains a reference to all of our
metadata for the function.

Source Locations
================

The most important thing for debug information is accurate source location -
this makes it possible to map your source code back. We have a problem though,
Kaleidoscope really doesn't have any source location information in the lexer
or parser so we'll need to add it.

.. code-block:: c++

   struct SourceLocation {
     int Line;
     int Col;
   };
   static SourceLocation CurLoc;
   static SourceLocation LexLoc = {1, 0};

   static int advance() {
     int LastChar = getchar();

     if (LastChar == '\n' || LastChar == '\r') {
       LexLoc.Line++;
       LexLoc.Col = 0;
     } else
       LexLoc.Col++;
     return LastChar;
   }

In this set of code we've added some functionality on how to keep track of the
line and column of the "source file". As we lex every token we set our
current "lexical location" to the assorted line and column for the beginning
of the token. We do this by overriding all of the previous calls to
``getchar()`` with our new ``advance()`` that keeps track of the information
and then we have added to all of our AST classes a source location:

.. code-block:: c++

   class ExprAST {
     SourceLocation Loc;

     public:
       ExprAST(SourceLocation Loc = CurLoc) : Loc(Loc) {}
       virtual ~ExprAST() {}
       virtual Value* codegen() = 0;
       int getLine() const { return Loc.Line; }
       int getCol() const { return Loc.Col; }
       virtual raw_ostream &dump(raw_ostream &out, int ind) {
         return out << ':' << getLine() << ':' << getCol() << '\n';
       }

that we pass down through when we create a new expression:

.. code-block:: c++

   LHS = std::make_unique<BinaryExprAST>(BinLoc, BinOp, std::move(LHS),
                                          std::move(RHS));

giving us locations for each of our expressions and variables.

To make sure that every instruction gets proper source location information,
we have to tell ``Builder`` whenever we're at a new source location.
We use a small helper function for this:

.. code-block:: c++

  void DebugInfo::emitLocation(ExprAST *AST) {
    if (!AST)
      return Builder->SetCurrentDebugLocation(DebugLoc());
    DIScope *Scope;
    if (LexicalBlocks.empty())
      Scope = TheCU;
    else
      Scope = LexicalBlocks.back();
    Builder->SetCurrentDebugLocation(
        DILocation::get(Scope->getContext(), AST->getLine(), AST->getCol(), Scope));
  }

This both tells the main ``IRBuilder`` where we are, but also what scope
we're in. The scope can either be on compile-unit level or be the nearest
enclosing lexical block like the current function.
To represent this we create a stack of scopes in ``DebugInfo``:

.. code-block:: c++

   std::vector<DIScope *> LexicalBlocks;

and push the scope (function) to the top of the stack when we start
generating the code for each function:

.. code-block:: c++

  KSDbgInfo.LexicalBlocks.push_back(SP);

Also, we may not forget to pop the scope back off of the scope stack at the
end of the code generation for the function:

.. code-block:: c++

  // Pop off the lexical block for the function since we added it
  // unconditionally.
  KSDbgInfo.LexicalBlocks.pop_back();

Then we make sure to emit the location every time we start to generate code
for a new AST object:

.. code-block:: c++

   KSDbgInfo.emitLocation(this);

Variables
=========

Now that we have functions, we need to be able to print out the variables
we have in scope. Let's get our function arguments set up so we can get
decent backtraces and see how our functions are being called. It isn't
a lot of code, and we generally handle it when we're creating the
argument allocas in ``FunctionAST::codegen``.

.. code-block:: c++

    // Record the function arguments in the NamedValues map.
    NamedValues.clear();
    unsigned ArgIdx = 0;
    for (auto &Arg : TheFunction->args()) {
      // Create an alloca for this variable.
      AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, Arg.getName());

      // Create a debug descriptor for the variable.
      DILocalVariable *D = DBuilder->createParameterVariable(
          SP, Arg.getName(), ++ArgIdx, Unit, LineNo, KSDbgInfo.getDoubleTy(),
          true);

      DBuilder->insertDeclare(Alloca, D, DBuilder->createExpression(),
                              DILocation::get(SP->getContext(), LineNo, 0, SP),
                              Builder->GetInsertBlock());

      // Store the initial value into the alloca.
      Builder->CreateStore(&Arg, Alloca);

      // Add arguments to variable symbol table.
      NamedValues[std::string(Arg.getName())] = Alloca;
    }


Here we're first creating the variable, giving it the scope (``SP``),
the name, source location, type, and since it's an argument, the argument
index. Next, we create a ``#dbg_declare`` record to indicate at the IR
level that we've got a variable in an alloca (and it gives a starting
location for the variable), and setting a source location for the
beginning of the scope on the declare.

One interesting thing to note at this point is that various debuggers have
assumptions based on how code and debug information was generated for them
in the past. In this case we need to do a little bit of a hack to avoid
generating line information for the function prologue so that the debugger
knows to skip over those instructions when setting a breakpoint. So in
``FunctionAST::CodeGen`` we add some more lines:

.. code-block:: c++

  // Unset the location for the prologue emission (leading instructions with no
  // location in a function are considered part of the prologue and the debugger
  // will run past them when breaking on a function)
  KSDbgInfo.emitLocation(nullptr);

and then emit a new location when we actually start generating code for the
body of the function:

.. code-block:: c++

  KSDbgInfo.emitLocation(Body.get());

With this we have enough debug information to set breakpoints in functions,
print out argument variables, and call functions. Not too bad for just a
few simple lines of code!

Full Code Listing
=================

Here is the complete code listing for our running example, enhanced with
debug information. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../../examples/Kaleidoscope/Chapter9/toy.cpp
   :language: c++

.. code-block:: cpp

    #include "../include/KaleidoscopeJIT.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/Analysis/BasicAliasAnalysis.h"
    #include "llvm/Analysis/Passes.h"
    #include "llvm/IR/DIBuilder.h"
    #include "llvm/IR/IRBuilder.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/IR/Module.h"
    #include "llvm/IR/Verifier.h"
    #include "llvm/Support/TargetSelect.h"
    #include "llvm/TargetParser/Host.h"
    #include "llvm/Transforms/Scalar.h"
    #include <cctype>
    #include <cstdio>
    #include <map>
    #include <string>
    #include <vector>
    
    using namespace llvm;
    using namespace llvm::orc;
    
    //===----------------------------------------------------------------------===//
    // Lexer
    //===----------------------------------------------------------------------===//
    
    // The lexer returns tokens [0-255] if it is an unknown character, otherwise one
    // of these for known things.
    enum Token {
      tok_eof = -1,
    
      // commands
      tok_def = -2,
      tok_extern = -3,
    
      // primary
      tok_identifier = -4,
      tok_number = -5,
    
      // control
      tok_if = -6,
      tok_then = -7,
      tok_else = -8,
      tok_for = -9,
      tok_in = -10,
    
      // operators
      tok_binary = -11,
      tok_unary = -12,
    
      // var definition
      tok_var = -13
    };
    
    std::string getTokName(int Tok) {
      switch (Tok) {
      case tok_eof:
        return "eof";
      case tok_def:
        return "def";
      case tok_extern:
        return "extern";
      case tok_identifier:
        return "identifier";
      case tok_number:
        return "number";
      case tok_if:
        return "if";
      case tok_then:
        return "then";
      case tok_else:
        return "else";
      case tok_for:
        return "for";
      case tok_in:
        return "in";
      case tok_binary:
        return "binary";
      case tok_unary:
        return "unary";
      case tok_var:
        return "var";
      }
      return std::string(1, (char)Tok);
    }
    
    namespace {
    class PrototypeAST;
    class ExprAST;
    }
    
    struct DebugInfo {
      DICompileUnit *TheCU;
      DIType *DblTy;
      std::vector<DIScope *> LexicalBlocks;
    
      void emitLocation(ExprAST *AST);
      DIType *getDoubleTy();
    } KSDbgInfo;
    
    struct SourceLocation {
      int Line;
      int Col;
    };
    static SourceLocation CurLoc;
    static SourceLocation LexLoc = {1, 0};
    
    static int advance() {
      int LastChar = getchar();
    
      if (LastChar == '\n' || LastChar == '\r') {
        LexLoc.Line++;
        LexLoc.Col = 0;
      } else
        LexLoc.Col++;
      return LastChar;
    }
    
    static std::string IdentifierStr; // Filled in if tok_identifier
    static double NumVal;             // Filled in if tok_number
    
    /// gettok - Return the next token from standard input.
    static int gettok() {
      static int LastChar = ' ';
    
      // Skip any whitespace.
      while (isspace(LastChar))
        LastChar = advance();
    
      CurLoc = LexLoc;
    
      if (isalpha(LastChar)) { // identifier: [a-zA-Z][a-zA-Z0-9]*
        IdentifierStr = LastChar;
        while (isalnum((LastChar = advance())))
          IdentifierStr += LastChar;
    
        if (IdentifierStr == "def")
          return tok_def;
        if (IdentifierStr == "extern")
          return tok_extern;
        if (IdentifierStr == "if")
          return tok_if;
        if (IdentifierStr == "then")
          return tok_then;
        if (IdentifierStr == "else")
          return tok_else;
        if (IdentifierStr == "for")
          return tok_for;
        if (IdentifierStr == "in")
          return tok_in;
        if (IdentifierStr == "binary")
          return tok_binary;
        if (IdentifierStr == "unary")
          return tok_unary;
        if (IdentifierStr == "var")
          return tok_var;
        return tok_identifier;
      }
    
      if (isdigit(LastChar) || LastChar == '.') { // Number: [0-9.]+
        std::string NumStr;
        do {
          NumStr += LastChar;
          LastChar = advance();
        } while (isdigit(LastChar) || LastChar == '.');
    
        NumVal = strtod(NumStr.c_str(), nullptr);
        return tok_number;
      }
    
      if (LastChar == '#') {
        // Comment until end of line.
        do
          LastChar = advance();
        while (LastChar != EOF && LastChar != '\n' && LastChar != '\r');
    
        if (LastChar != EOF)
          return gettok();
      }
    
      // Check for end of file.  Don't eat the EOF.
      if (LastChar == EOF)
        return tok_eof;
    
      // Otherwise, just return the character as its ascii value.
      int ThisChar = LastChar;
      LastChar = advance();
      return ThisChar;
    }
    
    //===----------------------------------------------------------------------===//
    // Abstract Syntax Tree (aka Parse Tree)
    //===----------------------------------------------------------------------===//
    namespace {
    
    raw_ostream &indent(raw_ostream &O, int size) {
      return O << std::string(size, ' ');
    }
    
    /// ExprAST - Base class for all expression nodes.
    class ExprAST {
      SourceLocation Loc;
    
    public:
      ExprAST(SourceLocation Loc = CurLoc) : Loc(Loc) {}
      virtual ~ExprAST() {}
      virtual Value *codegen() = 0;
      int getLine() const { return Loc.Line; }
      int getCol() const { return Loc.Col; }
      virtual raw_ostream &dump(raw_ostream &out, int ind) {
        return out << ':' << getLine() << ':' << getCol() << '\n';
      }
    };
    
    /// NumberExprAST - Expression class for numeric literals like "1.0".
    class NumberExprAST : public ExprAST {
      double Val;
    
    public:
      NumberExprAST(double Val) : Val(Val) {}
      raw_ostream &dump(raw_ostream &out, int ind) override {
        return ExprAST::dump(out << Val, ind);
      }
      Value *codegen() override;
    };
    
    /// VariableExprAST - Expression class for referencing a variable, like "a".
    class VariableExprAST : public ExprAST {
      std::string Name;
    
    public:
      VariableExprAST(SourceLocation Loc, const std::string &Name)
          : ExprAST(Loc), Name(Name) {}
      const std::string &getName() const { return Name; }
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        return ExprAST::dump(out << Name, ind);
      }
    };
    
    /// UnaryExprAST - Expression class for a unary operator.
    class UnaryExprAST : public ExprAST {
      char Opcode;
      std::unique_ptr<ExprAST> Operand;
    
    public:
      UnaryExprAST(char Opcode, std::unique_ptr<ExprAST> Operand)
          : Opcode(Opcode), Operand(std::move(Operand)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "unary" << Opcode, ind);
        Operand->dump(out, ind + 1);
        return out;
      }
    };
    
    /// BinaryExprAST - Expression class for a binary operator.
    class BinaryExprAST : public ExprAST {
      char Op;
      std::unique_ptr<ExprAST> LHS, RHS;
    
    public:
      BinaryExprAST(SourceLocation Loc, char Op, std::unique_ptr<ExprAST> LHS,
                    std::unique_ptr<ExprAST> RHS)
          : ExprAST(Loc), Op(Op), LHS(std::move(LHS)), RHS(std::move(RHS)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "binary" << Op, ind);
        LHS->dump(indent(out, ind) << "LHS:", ind + 1);
        RHS->dump(indent(out, ind) << "RHS:", ind + 1);
        return out;
      }
    };
    
    /// CallExprAST - Expression class for function calls.
    class CallExprAST : public ExprAST {
      std::string Callee;
      std::vector<std::unique_ptr<ExprAST>> Args;
    
    public:
      CallExprAST(SourceLocation Loc, const std::string &Callee,
                  std::vector<std::unique_ptr<ExprAST>> Args)
          : ExprAST(Loc), Callee(Callee), Args(std::move(Args)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "call " << Callee, ind);
        for (const auto &Arg : Args)
          Arg->dump(indent(out, ind + 1), ind + 1);
        return out;
      }
    };
    
    /// IfExprAST - Expression class for if/then/else.
    class IfExprAST : public ExprAST {
      std::unique_ptr<ExprAST> Cond, Then, Else;
    
    public:
      IfExprAST(SourceLocation Loc, std::unique_ptr<ExprAST> Cond,
                std::unique_ptr<ExprAST> Then, std::unique_ptr<ExprAST> Else)
          : ExprAST(Loc), Cond(std::move(Cond)), Then(std::move(Then)),
            Else(std::move(Else)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "if", ind);
        Cond->dump(indent(out, ind) << "Cond:", ind + 1);
        Then->dump(indent(out, ind) << "Then:", ind + 1);
        Else->dump(indent(out, ind) << "Else:", ind + 1);
        return out;
      }
    };
    
    /// ForExprAST - Expression class for for/in.
    class ForExprAST : public ExprAST {
      std::string VarName;
      std::unique_ptr<ExprAST> Start, End, Step, Body;
    
    public:
      ForExprAST(const std::string &VarName, std::unique_ptr<ExprAST> Start,
                 std::unique_ptr<ExprAST> End, std::unique_ptr<ExprAST> Step,
                 std::unique_ptr<ExprAST> Body)
          : VarName(VarName), Start(std::move(Start)), End(std::move(End)),
            Step(std::move(Step)), Body(std::move(Body)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "for", ind);
        Start->dump(indent(out, ind) << "Cond:", ind + 1);
        End->dump(indent(out, ind) << "End:", ind + 1);
        Step->dump(indent(out, ind) << "Step:", ind + 1);
        Body->dump(indent(out, ind) << "Body:", ind + 1);
        return out;
      }
    };
    
    /// VarExprAST - Expression class for var/in
    class VarExprAST : public ExprAST {
      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;
      std::unique_ptr<ExprAST> Body;
    
    public:
      VarExprAST(
          std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames,
          std::unique_ptr<ExprAST> Body)
          : VarNames(std::move(VarNames)), Body(std::move(Body)) {}
      Value *codegen() override;
      raw_ostream &dump(raw_ostream &out, int ind) override {
        ExprAST::dump(out << "var", ind);
        for (const auto &NamedVar : VarNames)
          NamedVar.second->dump(indent(out, ind) << NamedVar.first << ':', ind + 1);
        Body->dump(indent(out, ind) << "Body:", ind + 1);
        return out;
      }
    };
    
    /// PrototypeAST - This class represents the "prototype" for a function,
    /// which captures its name, and its argument names (thus implicitly the number
    /// of arguments the function takes), as well as if it is an operator.
    class PrototypeAST {
      std::string Name;
      std::vector<std::string> Args;
      bool IsOperator;
      unsigned Precedence; // Precedence if a binary op.
      int Line;
    
    public:
      PrototypeAST(SourceLocation Loc, const std::string &Name,
                   std::vector<std::string> Args, bool IsOperator = false,
                   unsigned Prec = 0)
          : Name(Name), Args(std::move(Args)), IsOperator(IsOperator),
            Precedence(Prec), Line(Loc.Line) {}
      Function *codegen();
      const std::string &getName() const { return Name; }
    
      bool isUnaryOp() const { return IsOperator && Args.size() == 1; }
      bool isBinaryOp() const { return IsOperator && Args.size() == 2; }
    
      char getOperatorName() const {
        assert(isUnaryOp() || isBinaryOp());
        return Name[Name.size() - 1];
      }
    
      unsigned getBinaryPrecedence() const { return Precedence; }
      int getLine() const { return Line; }
    };
    
    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;
    
    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}
      Function *codegen();
      raw_ostream &dump(raw_ostream &out, int ind) {
        indent(out, ind) << "FunctionAST\n";
        ++ind;
        indent(out, ind) << "Body:";
        return Body ? Body->dump(out, ind) : out << "null\n";
      }
    };
    } // end anonymous namespace
    
    //===----------------------------------------------------------------------===//
    // Parser
    //===----------------------------------------------------------------------===//
    
    /// CurTok/getNextToken - Provide a simple token buffer.  CurTok is the current
    /// token the parser is looking at.  getNextToken reads another token from the
    /// lexer and updates CurTok with its results.
    static int CurTok;
    static int getNextToken() { return CurTok = gettok(); }
    
    /// BinopPrecedence - This holds the precedence for each binary operator that is
    /// defined.
    static std::map<char, int> BinopPrecedence;
    
    /// GetTokPrecedence - Get the precedence of the pending binary operator token.
    static int GetTokPrecedence() {
      if (!isascii(CurTok))
        return -1;
    
      // Make sure it's a declared binop.
      int TokPrec = BinopPrecedence[CurTok];
      if (TokPrec <= 0)
        return -1;
      return TokPrec;
    }
    
    /// LogError* - These are little helper functions for error handling.
    std::unique_ptr<ExprAST> LogError(const char *Str) {
      fprintf(stderr, "Error: %s\n", Str);
      return nullptr;
    }
    
    std::unique_ptr<PrototypeAST> LogErrorP(const char *Str) {
      LogError(Str);
      return nullptr;
    }
    
    static std::unique_ptr<ExprAST> ParseExpression();
    
    /// numberexpr ::= number
    static std::unique_ptr<ExprAST> ParseNumberExpr() {
      auto Result = std::make_unique<NumberExprAST>(NumVal);
      getNextToken(); // consume the number
      return std::move(Result);
    }
    
    /// parenexpr ::= '(' expression ')'
    static std::unique_ptr<ExprAST> ParseParenExpr() {
      getNextToken(); // eat (.
      auto V = ParseExpression();
      if (!V)
        return nullptr;
    
      if (CurTok != ')')
        return LogError("expected ')'");
      getNextToken(); // eat ).
      return V;
    }
    
    /// identifierexpr
    ///   ::= identifier
    ///   ::= identifier '(' expression* ')'
    static std::unique_ptr<ExprAST> ParseIdentifierExpr() {
      std::string IdName = IdentifierStr;
    
      SourceLocation LitLoc = CurLoc;
    
      getNextToken(); // eat identifier.
    
      if (CurTok != '(') // Simple variable ref.
        return std::make_unique<VariableExprAST>(LitLoc, IdName);
    
      // Call.
      getNextToken(); // eat (
      std::vector<std::unique_ptr<ExprAST>> Args;
      if (CurTok != ')') {
        while (true) {
          if (auto Arg = ParseExpression())
            Args.push_back(std::move(Arg));
          else
            return nullptr;
    
          if (CurTok == ')')
            break;
    
          if (CurTok != ',')
            return LogError("Expected ')' or ',' in argument list");
          getNextToken();
        }
      }
    
      // Eat the ')'.
      getNextToken();
    
      return std::make_unique<CallExprAST>(LitLoc, IdName, std::move(Args));
    }
    
    /// ifexpr ::= 'if' expression 'then' expression 'else' expression
    static std::unique_ptr<ExprAST> ParseIfExpr() {
      SourceLocation IfLoc = CurLoc;
    
      getNextToken(); // eat the if.
    
      // condition.
      auto Cond = ParseExpression();
      if (!Cond)
        return nullptr;
    
      if (CurTok != tok_then)
        return LogError("expected then");
      getNextToken(); // eat the then
    
      auto Then = ParseExpression();
      if (!Then)
        return nullptr;
    
      if (CurTok != tok_else)
        return LogError("expected else");
    
      getNextToken();
    
      auto Else = ParseExpression();
      if (!Else)
        return nullptr;
    
      return std::make_unique<IfExprAST>(IfLoc, std::move(Cond), std::move(Then),
                                          std::move(Else));
    }
    
    /// forexpr ::= 'for' identifier '=' expr ',' expr (',' expr)? 'in' expression
    static std::unique_ptr<ExprAST> ParseForExpr() {
      getNextToken(); // eat the for.
    
      if (CurTok != tok_identifier)
        return LogError("expected identifier after for");
    
      std::string IdName = IdentifierStr;
      getNextToken(); // eat identifier.
    
      if (CurTok != '=')
        return LogError("expected '=' after for");
      getNextToken(); // eat '='.
    
      auto Start = ParseExpression();
      if (!Start)
        return nullptr;
      if (CurTok != ',')
        return LogError("expected ',' after for start value");
      getNextToken();
    
      auto End = ParseExpression();
      if (!End)
        return nullptr;
    
      // The step value is optional.
      std::unique_ptr<ExprAST> Step;
      if (CurTok == ',') {
        getNextToken();
        Step = ParseExpression();
        if (!Step)
          return nullptr;
      }
    
      if (CurTok != tok_in)
        return LogError("expected 'in' after for");
      getNextToken(); // eat 'in'.
    
      auto Body = ParseExpression();
      if (!Body)
        return nullptr;
    
      return std::make_unique<ForExprAST>(IdName, std::move(Start), std::move(End),
                                           std::move(Step), std::move(Body));
    }
    
    /// varexpr ::= 'var' identifier ('=' expression)?
    //                    (',' identifier ('=' expression)?)* 'in' expression
    static std::unique_ptr<ExprAST> ParseVarExpr() {
      getNextToken(); // eat the var.
    
      std::vector<std::pair<std::string, std::unique_ptr<ExprAST>>> VarNames;
    
      // At least one variable name is required.
      if (CurTok != tok_identifier)
        return LogError("expected identifier after var");
    
      while (true) {
        std::string Name = IdentifierStr;
        getNextToken(); // eat identifier.
    
        // Read the optional initializer.
        std::unique_ptr<ExprAST> Init = nullptr;
        if (CurTok == '=') {
          getNextToken(); // eat the '='.
    
          Init = ParseExpression();
          if (!Init)
            return nullptr;
        }
    
        VarNames.push_back(std::make_pair(Name, std::move(Init)));
    
        // End of var list, exit loop.
        if (CurTok != ',')
          break;
        getNextToken(); // eat the ','.
    
        if (CurTok != tok_identifier)
          return LogError("expected identifier list after var");
      }
    
      // At this point, we have to have 'in'.
      if (CurTok != tok_in)
        return LogError("expected 'in' keyword after 'var'");
      getNextToken(); // eat 'in'.
    
      auto Body = ParseExpression();
      if (!Body)
        return nullptr;
    
      return std::make_unique<VarExprAST>(std::move(VarNames), std::move(Body));
    }
    
    /// primary
    ///   ::= identifierexpr
    ///   ::= numberexpr
    ///   ::= parenexpr
    ///   ::= ifexpr
    ///   ::= forexpr
    ///   ::= varexpr
    static std::unique_ptr<ExprAST> ParsePrimary() {
      switch (CurTok) {
      default:
        return LogError("unknown token when expecting an expression");
      case tok_identifier:
        return ParseIdentifierExpr();
      case tok_number:
        return ParseNumberExpr();
      case '(':
        return ParseParenExpr();
      case tok_if:
        return ParseIfExpr();
      case tok_for:
        return ParseForExpr();
      case tok_var:
        return ParseVarExpr();
      }
    }
    
    /// unary
    ///   ::= primary
    ///   ::= '!' unary
    static std::unique_ptr<ExprAST> ParseUnary() {
      // If the current token is not an operator, it must be a primary expr.
      if (!isascii(CurTok) || CurTok == '(' || CurTok == ',')
        return ParsePrimary();
    
      // If this is a unary operator, read it.
      int Opc = CurTok;
      getNextToken();
      if (auto Operand = ParseUnary())
        return std::make_unique<UnaryExprAST>(Opc, std::move(Operand));
      return nullptr;
    }
    
    /// binoprhs
    ///   ::= ('+' unary)*
    static std::unique_ptr<ExprAST> ParseBinOpRHS(int ExprPrec,
                                                  std::unique_ptr<ExprAST> LHS) {
      // If this is a binop, find its precedence.
      while (true) {
        int TokPrec = GetTokPrecedence();
    
        // If this is a binop that binds at least as tightly as the current binop,
        // consume it, otherwise we are done.
        if (TokPrec < ExprPrec)
          return LHS;
    
        // Okay, we know this is a binop.
        int BinOp = CurTok;
        SourceLocation BinLoc = CurLoc;
        getNextToken(); // eat binop
    
        // Parse the unary expression after the binary operator.
        auto RHS = ParseUnary();
        if (!RHS)
          return nullptr;
    
        // If BinOp binds less tightly with RHS than the operator after RHS, let
        // the pending operator take RHS as its LHS.
        int NextPrec = GetTokPrecedence();
        if (TokPrec < NextPrec) {
          RHS = ParseBinOpRHS(TokPrec + 1, std::move(RHS));
          if (!RHS)
            return nullptr;
        }
    
        // Merge LHS/RHS.
        LHS = std::make_unique<BinaryExprAST>(BinLoc, BinOp, std::move(LHS),
                                               std::move(RHS));
      }
    }
    
    /// expression
    ///   ::= unary binoprhs
    ///
    static std::unique_ptr<ExprAST> ParseExpression() {
      auto LHS = ParseUnary();
      if (!LHS)
        return nullptr;
    
      return ParseBinOpRHS(0, std::move(LHS));
    }
    
    /// prototype
    ///   ::= id '(' id* ')'
    ///   ::= binary LETTER number? (id, id)
    ///   ::= unary LETTER (id)
    static std::unique_ptr<PrototypeAST> ParsePrototype() {
      std::string FnName;
    
      SourceLocation FnLoc = CurLoc;
    
      unsigned Kind = 0; // 0 = identifier, 1 = unary, 2 = binary.
      unsigned BinaryPrecedence = 30;
    
      switch (CurTok) {
      default:
        return LogErrorP("Expected function name in prototype");
      case tok_identifier:
        FnName = IdentifierStr;
        Kind = 0;
        getNextToken();
        break;
      case tok_unary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected unary operator");
        FnName = "unary";
        FnName += (char)CurTok;
        Kind = 1;
        getNextToken();
        break;
      case tok_binary:
        getNextToken();
        if (!isascii(CurTok))
          return LogErrorP("Expected binary operator");
        FnName = "binary";
        FnName += (char)CurTok;
        Kind = 2;
        getNextToken();
    
        // Read the precedence if present.
        if (CurTok == tok_number) {
          if (NumVal < 1 || NumVal > 100)
            return LogErrorP("Invalid precedence: must be 1..100");
          BinaryPrecedence = (unsigned)NumVal;
          getNextToken();
        }
        break;
      }
    
      if (CurTok != '(')
        return LogErrorP("Expected '(' in prototype");
    
      std::vector<std::string> ArgNames;
      while (getNextToken() == tok_identifier)
        ArgNames.push_back(IdentifierStr);
      if (CurTok != ')')
        return LogErrorP("Expected ')' in prototype");
    
      // success.
      getNextToken(); // eat ')'.
    
      // Verify right number of names for operator.
      if (Kind && ArgNames.size() != Kind)
        return LogErrorP("Invalid number of operands for operator");
    
      return std::make_unique<PrototypeAST>(FnLoc, FnName, ArgNames, Kind != 0,
                                             BinaryPrecedence);
    }
    
    /// definition ::= 'def' prototype expression
    static std::unique_ptr<FunctionAST> ParseDefinition() {
      getNextToken(); // eat def.
      auto Proto = ParsePrototype();
      if (!Proto)
        return nullptr;
    
      if (auto E = ParseExpression())
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      return nullptr;
    }
    
    /// toplevelexpr ::= expression
    static std::unique_ptr<FunctionAST> ParseTopLevelExpr() {
      SourceLocation FnLoc = CurLoc;
      if (auto E = ParseExpression()) {
        // Make the top-level expression be our "main" function.
        auto Proto = std::make_unique<PrototypeAST>(FnLoc, "main",
                                                     std::vector<std::string>());
        return std::make_unique<FunctionAST>(std::move(Proto), std::move(E));
      }
      return nullptr;
    }
    
    /// external ::= 'extern' prototype
    static std::unique_ptr<PrototypeAST> ParseExtern() {
      getNextToken(); // eat extern.
      return ParsePrototype();
    }
    
    //===----------------------------------------------------------------------===//
    // Code Generation Globals
    //===----------------------------------------------------------------------===//
    
    static std::unique_ptr<LLVMContext> TheContext;
    static std::unique_ptr<Module> TheModule;
    static std::unique_ptr<IRBuilder<>> Builder;
    static ExitOnError ExitOnErr;
    
    static std::map<std::string, AllocaInst *> NamedValues;
    static std::unique_ptr<KaleidoscopeJIT> TheJIT;
    static std::map<std::string, std::unique_ptr<PrototypeAST>> FunctionProtos;
    
    //===----------------------------------------------------------------------===//
    // Debug Info Support
    //===----------------------------------------------------------------------===//
    
    static std::unique_ptr<DIBuilder> DBuilder;
    
    DIType *DebugInfo::getDoubleTy() {
      if (DblTy)
        return DblTy;
    
      DblTy = DBuilder->createBasicType("double", 64, dwarf::DW_ATE_float);
      return DblTy;
    }
    
    void DebugInfo::emitLocation(ExprAST *AST) {
      if (!AST)
        return Builder->SetCurrentDebugLocation(DebugLoc());
      DIScope *Scope;
      if (LexicalBlocks.empty())
        Scope = TheCU;
      else
        Scope = LexicalBlocks.back();
      Builder->SetCurrentDebugLocation(DILocation::get(
          Scope->getContext(), AST->getLine(), AST->getCol(), Scope));
    }
    
    static DISubroutineType *CreateFunctionType(unsigned NumArgs) {
      SmallVector<Metadata *, 8> EltTys;
      DIType *DblTy = KSDbgInfo.getDoubleTy();
    
      // Add the result type.
      EltTys.push_back(DblTy);
    
      for (unsigned i = 0, e = NumArgs; i != e; ++i)
        EltTys.push_back(DblTy);
    
      return DBuilder->createSubroutineType(DBuilder->getOrCreateTypeArray(EltTys));
    }
    
    //===----------------------------------------------------------------------===//
    // Code Generation
    //===----------------------------------------------------------------------===//
    
    Value *LogErrorV(const char *Str) {
      LogError(Str);
      return nullptr;
    }
    
    Function *getFunction(std::string Name) {
      // First, see if the function has already been added to the current module.
      if (auto *F = TheModule->getFunction(Name))
        return F;
    
      // If not, check whether we can codegen the declaration from some existing
      // prototype.
      auto FI = FunctionProtos.find(Name);
      if (FI != FunctionProtos.end())
        return FI->second->codegen();
    
      // If no existing prototype exists, return null.
      return nullptr;
    }
    
    /// CreateEntryBlockAlloca - Create an alloca instruction in the entry block of
    /// the function.  This is used for mutable variables etc.
    static AllocaInst *CreateEntryBlockAlloca(Function *TheFunction,
                                              StringRef VarName) {
      IRBuilder<> TmpB(&TheFunction->getEntryBlock(),
                       TheFunction->getEntryBlock().begin());
      return TmpB.CreateAlloca(Type::getDoubleTy(*TheContext), nullptr, VarName);
    }
    
    Value *NumberExprAST::codegen() {
      KSDbgInfo.emitLocation(this);
      return ConstantFP::get(*TheContext, APFloat(Val));
    }
    
    Value *VariableExprAST::codegen() {
      // Look this variable up in the function.
      Value *V = NamedValues[Name];
      if (!V)
        return LogErrorV("Unknown variable name");
    
      KSDbgInfo.emitLocation(this);
      // Load the value.
      return Builder->CreateLoad(Type::getDoubleTy(*TheContext), V, Name.c_str());
    }
    
    Value *UnaryExprAST::codegen() {
      Value *OperandV = Operand->codegen();
      if (!OperandV)
        return nullptr;
    
      Function *F = getFunction(std::string("unary") + Opcode);
      if (!F)
        return LogErrorV("Unknown unary operator");
    
      KSDbgInfo.emitLocation(this);
      return Builder->CreateCall(F, OperandV, "unop");
    }
    
    Value *BinaryExprAST::codegen() {
      KSDbgInfo.emitLocation(this);
    
      // Special case '=' because we don't want to emit the LHS as an expression.
      if (Op == '=') {
        // Assignment requires the LHS to be an identifier.
        // This assume we're building without RTTI because LLVM builds that way by
        // default.  If you build LLVM with RTTI this can be changed to a
        // dynamic_cast for automatic error checking.
        VariableExprAST *LHSE = static_cast<VariableExprAST *>(LHS.get());
        if (!LHSE)
          return LogErrorV("destination of '=' must be a variable");
        // Codegen the RHS.
        Value *Val = RHS->codegen();
        if (!Val)
          return nullptr;
    
        // Look up the name.
        Value *Variable = NamedValues[LHSE->getName()];
        if (!Variable)
          return LogErrorV("Unknown variable name");
    
        Builder->CreateStore(Val, Variable);
        return Val;
      }
    
      Value *L = LHS->codegen();
      Value *R = RHS->codegen();
      if (!L || !R)
        return nullptr;
    
      switch (Op) {
      case '+':
        return Builder->CreateFAdd(L, R, "addtmp");
      case '-':
        return Builder->CreateFSub(L, R, "subtmp");
      case '*':
        return Builder->CreateFMul(L, R, "multmp");
      case '<':
        L = Builder->CreateFCmpULT(L, R, "cmptmp");
        // Convert bool 0/1 to double 0.0 or 1.0
        return Builder->CreateUIToFP(L, Type::getDoubleTy(*TheContext), "booltmp");
      default:
        break;
      }
    
      // If it wasn't a builtin binary operator, it must be a user defined one. Emit
      // a call to it.
      Function *F = getFunction(std::string("binary") + Op);
      assert(F && "binary operator not found!");
    
      Value *Ops[] = {L, R};
      return Builder->CreateCall(F, Ops, "binop");
    }
    
    Value *CallExprAST::codegen() {
      KSDbgInfo.emitLocation(this);
    
      // Look up the name in the global module table.
      Function *CalleeF = getFunction(Callee);
      if (!CalleeF)
        return LogErrorV("Unknown function referenced");
    
      // If argument mismatch error.
      if (CalleeF->arg_size() != Args.size())
        return LogErrorV("Incorrect # arguments passed");
    
      std::vector<Value *> ArgsV;
      for (unsigned i = 0, e = Args.size(); i != e; ++i) {
        ArgsV.push_back(Args[i]->codegen());
        if (!ArgsV.back())
          return nullptr;
      }
    
      return Builder->CreateCall(CalleeF, ArgsV, "calltmp");
    }
    
    Value *IfExprAST::codegen() {
      KSDbgInfo.emitLocation(this);
    
      Value *CondV = Cond->codegen();
      if (!CondV)
        return nullptr;
    
      // Convert condition to a bool by comparing non-equal to 0.0.
      CondV = Builder->CreateFCmpONE(
          CondV, ConstantFP::get(*TheContext, APFloat(0.0)), "ifcond");
    
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
    
      // Create blocks for the then and else cases.  Insert the 'then' block at the
      // end of the function.
      BasicBlock *ThenBB = BasicBlock::Create(*TheContext, "then", TheFunction);
      BasicBlock *ElseBB = BasicBlock::Create(*TheContext, "else");
      BasicBlock *MergeBB = BasicBlock::Create(*TheContext, "ifcont");
    
      Builder->CreateCondBr(CondV, ThenBB, ElseBB);
    
      // Emit then value.
      Builder->SetInsertPoint(ThenBB);
    
      Value *ThenV = Then->codegen();
      if (!ThenV)
        return nullptr;
    
      Builder->CreateBr(MergeBB);
      // Codegen of 'Then' can change the current block, update ThenBB for the PHI.
      ThenBB = Builder->GetInsertBlock();
    
      // Emit else block.
      TheFunction->insert(TheFunction->end(), ElseBB);
      Builder->SetInsertPoint(ElseBB);
    
      Value *ElseV = Else->codegen();
      if (!ElseV)
        return nullptr;
    
      Builder->CreateBr(MergeBB);
      // Codegen of 'Else' can change the current block, update ElseBB for the PHI.
      ElseBB = Builder->GetInsertBlock();
    
      // Emit merge block.
      TheFunction->insert(TheFunction->end(), MergeBB);
      Builder->SetInsertPoint(MergeBB);
      PHINode *PN = Builder->CreatePHI(Type::getDoubleTy(*TheContext), 2, "iftmp");
    
      PN->addIncoming(ThenV, ThenBB);
      PN->addIncoming(ElseV, ElseBB);
      return PN;
    }
    
    // Output for-loop as:
    //   var = alloca double
    //   ...
    //   start = startexpr
    //   store start -> var
    //   goto loop
    // loop:
    //   ...
    //   bodyexpr
    //   ...
    // loopend:
    //   step = stepexpr
    //   endcond = endexpr
    //
    //   curvar = load var
    //   nextvar = curvar + step
    //   store nextvar -> var
    //   br endcond, loop, endloop
    // outloop:
    Value *ForExprAST::codegen() {
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
    
      // Create an alloca for the variable in the entry block.
      AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);
    
      KSDbgInfo.emitLocation(this);
    
      // Emit the start code first, without 'variable' in scope.
      Value *StartVal = Start->codegen();
      if (!StartVal)
        return nullptr;
    
      // Store the value into the alloca.
      Builder->CreateStore(StartVal, Alloca);
    
      // Make the new basic block for the loop header, inserting after current
      // block.
      BasicBlock *LoopBB = BasicBlock::Create(*TheContext, "loop", TheFunction);
    
      // Insert an explicit fall through from the current block to the LoopBB.
      Builder->CreateBr(LoopBB);
    
      // Start insertion in LoopBB.
      Builder->SetInsertPoint(LoopBB);
    
      // Within the loop, the variable is defined equal to the PHI node.  If it
      // shadows an existing variable, we have to restore it, so save it now.
      AllocaInst *OldVal = NamedValues[VarName];
      NamedValues[VarName] = Alloca;
    
      // Emit the body of the loop.  This, like any other expr, can change the
      // current BB.  Note that we ignore the value computed by the body, but don't
      // allow an error.
      if (!Body->codegen())
        return nullptr;
    
      // Emit the step value.
      Value *StepVal = nullptr;
      if (Step) {
        StepVal = Step->codegen();
        if (!StepVal)
          return nullptr;
      } else {
        // If not specified, use 1.0.
        StepVal = ConstantFP::get(*TheContext, APFloat(1.0));
      }
    
      // Compute the end condition.
      Value *EndCond = End->codegen();
      if (!EndCond)
        return nullptr;
    
      // Reload, increment, and restore the alloca.  This handles the case where
      // the body of the loop mutates the variable.
      Value *CurVar = Builder->CreateLoad(Type::getDoubleTy(*TheContext), Alloca,
                                          VarName.c_str());
      Value *NextVar = Builder->CreateFAdd(CurVar, StepVal, "nextvar");
      Builder->CreateStore(NextVar, Alloca);
    
      // Convert condition to a bool by comparing non-equal to 0.0.
      EndCond = Builder->CreateFCmpONE(
          EndCond, ConstantFP::get(*TheContext, APFloat(0.0)), "loopcond");
    
      // Create the "after loop" block and insert it.
      BasicBlock *AfterBB =
          BasicBlock::Create(*TheContext, "afterloop", TheFunction);
    
      // Insert the conditional branch into the end of LoopEndBB.
      Builder->CreateCondBr(EndCond, LoopBB, AfterBB);
    
      // Any new code will be inserted in AfterBB.
      Builder->SetInsertPoint(AfterBB);
    
      // Restore the unshadowed variable.
      if (OldVal)
        NamedValues[VarName] = OldVal;
      else
        NamedValues.erase(VarName);
    
      // for expr always returns 0.0.
      return Constant::getNullValue(Type::getDoubleTy(*TheContext));
    }
    
    Value *VarExprAST::codegen() {
      std::vector<AllocaInst *> OldBindings;
    
      Function *TheFunction = Builder->GetInsertBlock()->getParent();
    
      // Register all variables and emit their initializer.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i) {
        const std::string &VarName = VarNames[i].first;
        ExprAST *Init = VarNames[i].second.get();
    
        // Emit the initializer before adding the variable to scope, this prevents
        // the initializer from referencing the variable itself, and permits stuff
        // like this:
        //  var a = 1 in
        //    var a = a in ...   # refers to outer 'a'.
        Value *InitVal;
        if (Init) {
          InitVal = Init->codegen();
          if (!InitVal)
            return nullptr;
        } else { // If not specified, use 0.0.
          InitVal = ConstantFP::get(*TheContext, APFloat(0.0));
        }
    
        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, VarName);
        Builder->CreateStore(InitVal, Alloca);
    
        // Remember the old variable binding so that we can restore the binding when
        // we unrecurse.
        OldBindings.push_back(NamedValues[VarName]);
    
        // Remember this binding.
        NamedValues[VarName] = Alloca;
      }
    
      KSDbgInfo.emitLocation(this);
    
      // Codegen the body, now that all vars are in scope.
      Value *BodyVal = Body->codegen();
      if (!BodyVal)
        return nullptr;
    
      // Pop all our variables from scope.
      for (unsigned i = 0, e = VarNames.size(); i != e; ++i)
        NamedValues[VarNames[i].first] = OldBindings[i];
    
      // Return the body computation.
      return BodyVal;
    }
    
    Function *PrototypeAST::codegen() {
      // Make the function type:  double(double,double) etc.
      std::vector<Type *> Doubles(Args.size(), Type::getDoubleTy(*TheContext));
      FunctionType *FT =
          FunctionType::get(Type::getDoubleTy(*TheContext), Doubles, false);
    
      Function *F =
          Function::Create(FT, Function::ExternalLinkage, Name, TheModule.get());
    
      // Set names for all arguments.
      unsigned Idx = 0;
      for (auto &Arg : F->args())
        Arg.setName(Args[Idx++]);
    
      return F;
    }
    
    Function *FunctionAST::codegen() {
      // Transfer ownership of the prototype to the FunctionProtos map, but keep a
      // reference to it for use below.
      auto &P = *Proto;
      FunctionProtos[Proto->getName()] = std::move(Proto);
      Function *TheFunction = getFunction(P.getName());
      if (!TheFunction)
        return nullptr;
    
      // If this is an operator, install it.
      if (P.isBinaryOp())
        BinopPrecedence[P.getOperatorName()] = P.getBinaryPrecedence();
    
      // Create a new basic block to start insertion into.
      BasicBlock *BB = BasicBlock::Create(*TheContext, "entry", TheFunction);
      Builder->SetInsertPoint(BB);
    
      // Create a subprogram DIE for this function.
      DIFile *Unit = DBuilder->createFile(KSDbgInfo.TheCU->getFilename(),
                                          KSDbgInfo.TheCU->getDirectory());
      DIScope *FContext = Unit;
      unsigned LineNo = P.getLine();
      unsigned ScopeLine = LineNo;
      DISubprogram *SP = DBuilder->createFunction(
          FContext, P.getName(), StringRef(), Unit, LineNo,
          CreateFunctionType(TheFunction->arg_size()), ScopeLine,
          DINode::FlagPrototyped, DISubprogram::SPFlagDefinition);
      TheFunction->setSubprogram(SP);
    
      // Push the current scope.
      KSDbgInfo.LexicalBlocks.push_back(SP);
    
      // Unset the location for the prologue emission (leading instructions with no
      // location in a function are considered part of the prologue and the debugger
      // will run past them when breaking on a function)
      KSDbgInfo.emitLocation(nullptr);
    
      // Record the function arguments in the NamedValues map.
      NamedValues.clear();
      unsigned ArgIdx = 0;
      for (auto &Arg : TheFunction->args()) {
        // Create an alloca for this variable.
        AllocaInst *Alloca = CreateEntryBlockAlloca(TheFunction, Arg.getName());
    
        // Create a debug descriptor for the variable.
        DILocalVariable *D = DBuilder->createParameterVariable(
            SP, Arg.getName(), ++ArgIdx, Unit, LineNo, KSDbgInfo.getDoubleTy(),
            true);
    
        DBuilder->insertDeclare(Alloca, D, DBuilder->createExpression(),
                                DILocation::get(SP->getContext(), LineNo, 0, SP),
                                Builder->GetInsertBlock());
    
        // Store the initial value into the alloca.
        Builder->CreateStore(&Arg, Alloca);
    
        // Add arguments to variable symbol table.
        NamedValues[std::string(Arg.getName())] = Alloca;
      }
    
      KSDbgInfo.emitLocation(Body.get());
    
      if (Value *RetVal = Body->codegen()) {
        // Finish off the function.
        Builder->CreateRet(RetVal);
    
        // Pop off the lexical block for the function.
        KSDbgInfo.LexicalBlocks.pop_back();
    
        // Validate the generated code, checking for consistency.
        verifyFunction(*TheFunction);
    
        return TheFunction;
      }
    
      // Error reading body, remove function.
      TheFunction->eraseFromParent();
    
      if (P.isBinaryOp())
        BinopPrecedence.erase(Proto->getOperatorName());
    
      // Pop off the lexical block for the function since we added it
      // unconditionally.
      KSDbgInfo.LexicalBlocks.pop_back();
    
      return nullptr;
    }
    
    //===----------------------------------------------------------------------===//
    // Top-Level parsing and JIT Driver
    //===----------------------------------------------------------------------===//
    
    static void InitializeModule() {
      // Open a new module.
      TheContext = std::make_unique<LLVMContext>();
      TheModule = std::make_unique<Module>("my cool jit", *TheContext);
      TheModule->setDataLayout(TheJIT->getDataLayout());
    
      Builder = std::make_unique<IRBuilder<>>(*TheContext);
    }
    
    static void HandleDefinition() {
      if (auto FnAST = ParseDefinition()) {
        if (!FnAST->codegen())
          fprintf(stderr, "Error reading function definition:");
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }
    
    static void HandleExtern() {
      if (auto ProtoAST = ParseExtern()) {
        if (!ProtoAST->codegen())
          fprintf(stderr, "Error reading extern");
        else
          FunctionProtos[ProtoAST->getName()] = std::move(ProtoAST);
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }
    
    static void HandleTopLevelExpression() {
      // Evaluate a top-level expression into an anonymous function.
      if (auto FnAST = ParseTopLevelExpr()) {
        if (!FnAST->codegen()) {
          fprintf(stderr, "Error generating code for top level expr");
        }
      } else {
        // Skip token for error recovery.
        getNextToken();
      }
    }
    
    /// top ::= definition | external | expression | ';'
    static void MainLoop() {
      while (true) {
        switch (CurTok) {
        case tok_eof:
          return;
        case ';': // ignore top-level semicolons.
          getNextToken();
          break;
        case tok_def:
          HandleDefinition();
          break;
        case tok_extern:
          HandleExtern();
          break;
        default:
          HandleTopLevelExpression();
          break;
        }
      }
    }
    
    //===----------------------------------------------------------------------===//
    // "Library" functions that can be "extern'd" from user code.
    //===----------------------------------------------------------------------===//
    
    #ifdef _WIN32
    #define DLLEXPORT __declspec(dllexport)
    #else
    #define DLLEXPORT
    #endif
    
    /// putchard - putchar that takes a double and returns 0.
    extern "C" DLLEXPORT double putchard(double X) {
      fputc((char)X, stderr);
      return 0;
    }
    
    /// printd - printf that takes a double prints it as "%f\n", returning 0.
    extern "C" DLLEXPORT double printd(double X) {
      fprintf(stderr, "%f\n", X);
      return 0;
    }
    
    //===----------------------------------------------------------------------===//
    // Main driver code.
    //===----------------------------------------------------------------------===//
    
    int main() {
      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();
    
      // Install standard binary operators.
      // 1 is lowest precedence.
      BinopPrecedence['='] = 2;
      BinopPrecedence['<'] = 10;
      BinopPrecedence['+'] = 20;
      BinopPrecedence['-'] = 20;
      BinopPrecedence['*'] = 40; // highest.
    
      // Prime the first token.
      getNextToken();
    
      TheJIT = ExitOnErr(KaleidoscopeJIT::Create());
    
      InitializeModule();
    
      // Add the current debug info version into the module.
      TheModule->addModuleFlag(Module::Warning, "Debug Info Version",
                               DEBUG_METADATA_VERSION);
    
      // Darwin only supports dwarf2.
      if (Triple(sys::getProcessTriple()).isOSDarwin())
        TheModule->addModuleFlag(llvm::Module::Warning, "Dwarf Version", 2);
    
      // Construct the DIBuilder, we do this here because we need the module.
      DBuilder = std::make_unique<DIBuilder>(*TheModule);
    
      // Create the compile unit for the module.
      // Currently down as "fib.ks" as a filename since we're redirecting stdin
      // but we'd like actual source locations.
      KSDbgInfo.TheCU = DBuilder->createCompileUnit(
          dwarf::DW_LANG_C, DBuilder->createFile("fib.ks", "."),
          "Kaleidoscope Compiler", false, "", 0);
    
      // Run the main "interpreter loop" now.
      MainLoop();
    
      // Finalize the debug info.
      DBuilder->finalize();
    
      // Print out all of the generated code.
      TheModule->print(errs(), nullptr);
    
      return 0;
    }

`Next: Conclusion and other useful LLVM tidbits <#LangImpl10>`_


.. _LangImpl10:

==========================================================
10. Kaleidoscope: Conclusion and other useful LLVM tidbits
==========================================================

Tutorial Conclusion
===================

Welcome to the final chapter of the "`Implementing a language with
LLVM <index.html>`_" tutorial. In the course of this tutorial, we have
grown our little Kaleidoscope language from being a useless toy, to
being a semi-interesting (but probably still useless) toy. :)

It is interesting to see how far we've come, and how little code it has
taken. We built the entire lexer, parser, AST, code generator, an
interactive run-loop (with a JIT!), and emitted debug information in
standalone executables - all in under 1000 lines of (non-comment/non-blank)
code.

Our little language supports a couple of interesting features: it
supports user defined binary and unary operators, it uses JIT
compilation for immediate evaluation, and it supports a few control flow
constructs with SSA construction.

Part of the idea of this tutorial was to show you how easy and fun it
can be to define, build, and play with languages. Building a compiler
need not be a scary or mystical process! Now that you've seen some of
the basics, I strongly encourage you to take the code and hack on it.
For example, try adding:

-  **global variables** - While global variables have questionable value
   in modern software engineering, they are often useful when putting
   together quick little hacks like the Kaleidoscope compiler itself.
   Fortunately, our current setup makes it very easy to add global
   variables: just have value lookup check to see if an unresolved
   variable is in the global variable symbol table before rejecting it.
   To create a new global variable, make an instance of the LLVM
   ``GlobalVariable`` class.
-  **typed variables** - Kaleidoscope currently only supports variables
   of type double. This gives the language a very nice elegance, because
   only supporting one type means that you never have to specify types.
   Different languages have different ways of handling this. The easiest
   way is to require the user to specify types for every variable
   definition, and record the type of the variable in the symbol table
   along with its Value\*.
-  **arrays, structs, vectors, etc** - Once you add types, you can start
   extending the type system in all sorts of interesting ways. Simple
   arrays are very easy and are quite useful for many different
   applications. Adding them is mostly an exercise in learning how the
   LLVM `getelementptr <https://llvm.org/docs/LangRef.html#getelementptr-instruction>`_ 
   instruction works: it is so nifty/unconventional, it `has its own
   FAQ <https://llvm.org/docs/GetElementPtr.html>`_!
-  **standard runtime** - Our current language allows the user to access
   arbitrary external functions, and we use it for things like "printd"
   and "putchard". As you extend the language to add higher-level
   constructs, often these constructs make the most sense if they are
   lowered to calls into a language-supplied runtime. For example, if
   you add hash tables to the language, it would probably make sense to
   add the routines to a runtime, instead of inlining them all the way.
-  **memory management** - Currently we can only access the stack in
   Kaleidoscope. It would also be useful to be able to allocate heap
   memory, either with calls to the standard libc malloc/free interface
   or with a garbage collector. If you would like to use garbage
   collection, note that LLVM fully supports `Accurate Garbage Collection 
   <https://llvm.org/docs/GarbageCollection.html>`_ including algorithms that
   move objects and need to scan/update the stack.
-  **exception handling support** - LLVM supports generation of `zero cost 
   exceptions <https://llvm.org/docs/ExceptionHandling.html>`_ which interoperate 
   with code compiled in other languages. You could also generate code by
   implicitly making every function return an error value and checking
   it. You could also make explicit use of setjmp/longjmp. There are
   many different ways to go here.
-  **object orientation, generics, database access, complex numbers,
   geometric programming, ...** - Really, there is no end of crazy
   features that you can add to the language.
-  **unusual domains** - We've been talking about applying LLVM to a
   domain that many people are interested in: building a compiler for a
   specific language. However, there are many other domains that can use
   compiler technology that are not typically considered. For example,
   LLVM has been used to implement OpenGL graphics acceleration,
   translate C++ code to ActionScript, and many other cute and clever
   things. Maybe you will be the first to JIT compile a regular
   expression interpreter into native code with LLVM?

Have fun - try doing something crazy and unusual. Building a language
like everyone else always has, is much less fun than trying something a
little crazy or off the wall and seeing how it turns out. If you get
stuck or want to talk about it, please post on the `LLVM forums 
<https://discourse.llvm.org>`_: it has lots of people who are interested
in languages and are often willing to help out.

Before we end this tutorial, I want to talk about some "tips and tricks"
for generating LLVM IR. These are some of the more subtle things that
may not be obvious, but are very useful if you want to take advantage of
LLVM's capabilities.

Properties of the LLVM IR
=========================

We have a couple of common questions about code in the LLVM IR form -
let's just get these out of the way right now, shall we?

Target Independence
-------------------

Kaleidoscope is an example of a "portable language": any program written
in Kaleidoscope will work the same way on any target that it runs on.
Many other languages have this property, e.g. lisp, java, haskell,
javascript, python, etc (note that while these languages are portable,
not all their libraries are).

One nice aspect of LLVM is that it is often capable of preserving target
independence in the IR: you can take the LLVM IR for a
Kaleidoscope-compiled program and run it on any target that LLVM
supports, even emitting C code and compiling that on targets that LLVM
doesn't support natively. You can trivially tell that the Kaleidoscope
compiler generates target-independent code because it never queries for
any target-specific information when generating code.

The fact that LLVM provides a compact, target-independent,
representation for code gets a lot of people excited. Unfortunately,
these people are usually thinking about C or a language from the C
family when they are asking questions about language portability. I say
"unfortunately", because there is really no way to make (fully general)
C code portable, other than shipping the source code around (and of
course, C source code is not actually portable in general either - ever
port a really old application from 32- to 64-bits?).

The problem with C (again, in its full generality) is that it is heavily
laden with target-specific assumptions. As one simple example, the
preprocessor often destructively removes target-independence from the
code when it processes the input text:

.. code-block:: c

    #ifdef __i386__
      int X = 1;
    #else
      int X = 42;
    #endif

While it is possible to engineer more and more complex solutions to
problems like this, it cannot be solved in full generality in a way that
is better than shipping the actual source code.

That said, there are interesting subsets of C that can be made portable.
If you are willing to fix primitive types to a fixed size (say int =
32-bits, and long = 64-bits), don't care about ABI compatibility with
existing binaries, and are willing to give up some other minor features,
you can have portable code. This can make sense for specialized domains
such as an in-kernel language.

Safety Guarantees
-----------------

Many of the languages above are also "safe" languages: it is impossible
for a program written in Java to corrupt its address space and crash the
process (assuming the JVM has no bugs). Safety is an interesting
property that requires a combination of language design, runtime
support, and often operating system support.

It is certainly possible to implement a safe language in LLVM, but LLVM
IR does not itself guarantee safety. The LLVM IR allows unsafe pointer
casts, use after free bugs, buffer over-runs, and a variety of other
problems. Safety needs to be implemented as a layer on top of LLVM and,
conveniently, several groups have investigated this. Ask on the `LLVM
forums <https://discourse.llvm.org>`_ if you are interested in more details.

Language-Specific Optimizations
-------------------------------

One thing about LLVM that turns off many people is that it does not
solve all the world's problems in one system.  One specific
complaint is that people perceive LLVM as being incapable of performing
high-level language-specific optimization: LLVM "loses too much
information".  Here are a few observations about this:

First, you're right that LLVM does lose information. For example, as of
this writing, there is no way to distinguish in the LLVM IR whether an
SSA-value came from a C "int" or a C "long" on an ILP32 machine (other
than debug info). Both get compiled down to an 'i32' value and the
information about what it came from is lost. The more general issue
here, is that the LLVM type system uses "structural equivalence" instead
of "name equivalence". Another place this surprises people is if you
have two types in a high-level language that have the same structure
(e.g. two different structs that have a single int field): these types
will compile down into a single LLVM type and it will be impossible to
tell what it came from.

Second, while LLVM does lose information, LLVM is not a fixed target: we
continue to enhance and improve it in many different ways. In addition
to adding new features (LLVM did not always support exceptions or debug
info), we also extend the IR to capture important information for
optimization (e.g. whether an argument is sign or zero extended,
information about pointers aliasing, etc). Many of the enhancements are
user-driven: people want LLVM to include some specific feature, so they
go ahead and extend it.

Third, it is *possible and easy* to add language-specific optimizations,
and you have a number of choices in how to do it. As one trivial
example, it is easy to add language-specific optimization passes that
"know" things about code compiled for a language. In the case of the C
family, there is an optimization pass that "knows" about the standard C
library functions. If you call "exit(0)" in main(), it knows that it is
safe to optimize that into "return 0;" because C specifies what the
'exit' function does.

In addition to simple library knowledge, it is possible to embed a
variety of other language-specific information into the LLVM IR. If you
have a specific need and run into a wall, please bring the topic up on
the llvm-dev list. At the very worst, you can always treat LLVM as if it
were a "dumb code generator" and implement the high-level optimizations
you desire in your front-end, on the language-specific AST.

Tips and Tricks
===============

There is a variety of useful tips and tricks that you come to know after
working on/with LLVM that aren't obvious at first glance. Instead of
letting everyone rediscover them, this section talks about some of these
issues.

Implementing portable offsetof/sizeof
-------------------------------------

One interesting thing that comes up, if you are trying to keep the code
generated by your compiler "target independent", is that you often need
to know the size of some LLVM type or the offset of some field in an
llvm structure. For example, you might need to pass the size of a type
into a function that allocates memory.

Unfortunately, this can vary widely across targets: for example the
width of a pointer is trivially target-specific. However, there is a
`clever way to use the getelementptr instruction 
<http://nondot.org/sabre/LLVMNotes/SizeOf-OffsetOf-VariableSizedStructs.txt>`_
that allows you to compute this in a portable way.

Garbage Collected Stack Frames
------------------------------

Some languages want to explicitly manage their stack frames, often so
that they are garbage collected or to allow easy implementation of
closures. There are often better ways to implement these features than
explicit stack frames, but `LLVM does support them, 
<http://nondot.org/sabre/LLVMNotes/ExplicitlyManagedStackFrames.txt>`_
if you want. It requires your front-end to convert the code into
`Continuation Passing Style <http://en.wikipedia.org/wiki/Continuation-passing_style>`_ 
and the use of tail calls (which LLVM also supports).



.. _BuildingAJIT1:

====================================================
1. Building a JIT: Starting out with KaleidoscopeJIT
====================================================

.. contents::
   :local:

Chapter 1 Introduction
======================

**Warning: This tutorial is currently being updated to account for ORC API
changes. Only Chapters 1 and 2 are up-to-date.**

**Example code from Chapters 3 to 5 will compile and run, but has not been
updated**

Welcome to Chapter 1 of the "Building an ORC-based JIT in LLVM" tutorial. This
tutorial runs through the implementation of a JIT compiler using LLVM's
On-Request-Compilation (ORC) APIs. It begins with a simplified version of the
KaleidoscopeJIT class used in the
`Implementing a language with LLVM <LangImpl01.html>`_ tutorials and then
introduces new features like concurrent compilation, optimization, lazy
compilation and remote execution.

The goal of this tutorial is to introduce you to LLVM's ORC JIT APIs, show how
these APIs interact with other parts of LLVM, and to teach you how to recombine
them to build a custom JIT that is suited to your use-case.

The structure of the tutorial is:

- Chapter #1: Investigate the simple KaleidoscopeJIT class. This will
  introduce some of the basic concepts of the ORC JIT APIs, including the
  idea of an ORC *Layer*.

- `Chapter #2 <#BuildingAJIT2>`_: Extend the basic KaleidoscopeJIT by adding
  a new layer that will optimize IR and generated code.

- `Chapter #3 <#BuildingAJIT3>`_: Further extend the JIT by adding a
  Compile-On-Demand layer to lazily compile IR.

- `Chapter #4 <#BuildingAJIT4>`_: Improve the laziness of our JIT by
  replacing the Compile-On-Demand layer with a custom layer that uses the ORC
  Compile Callbacks API directly to defer IR-generation until functions are
  called.

- `Chapter #5 <#BuildingAJIT5>`_: Add process isolation by JITing code into
  a remote process with reduced privileges using the JIT Remote APIs.

To provide input for our JIT we will use a lightly modified version of the
Kaleidoscope REPL from `Chapter 7 <LangImpl07.html>`_ of the "Implementing a
language in LLVM tutorial".

Finally, a word on API generations: ORC is the 3rd generation of LLVM JIT API.
It was preceded by MCJIT, and before that by the (now deleted) legacy JIT.
These tutorials don't assume any experience with these earlier APIs, but
readers acquainted with them will see many familiar elements. Where appropriate
we will make this connection with the earlier APIs explicit to help people who
are transitioning from them to ORC.

JIT API Basics
==============

The purpose of a JIT compiler is to compile code "on-the-fly" as it is needed,
rather than compiling whole programs to disk ahead of time as a traditional
compiler does. To support that aim our initial, bare-bones JIT API will have
just two functions:

1. ``Error addModule(std::unique_ptr<Module> M)``: Make the given IR module
   available for execution.
2. ``Expected<ExecutorSymbolDef> lookup()``: Search for pointers to
   symbols (functions or variables) that have been added to the JIT.

A basic use-case for this API, executing the 'main' function from a module,
will look like:

.. code-block:: c++

  JIT J;
  J.addModule(buildModule());
  auto *Main = J.lookup("main").getAddress().toPtr<int(*)(int, char *[])>();
  int Result = Main();

The APIs that we build in these tutorials will all be variations on this simple
theme. Behind this API we will refine the implementation of the JIT to add
support for concurrent compilation, optimization and lazy compilation.
Eventually we will extend the API itself to allow higher-level program
representations (e.g. ASTs) to be added to the JIT.

KaleidoscopeJIT
===============

In the previous section we described our API, now we examine a simple
implementation of it: The KaleidoscopeJIT class [1]_ that was used in the
`Implementing a language with LLVM <LangImpl01.html>`_ tutorials. We will use
the REPL code from `Chapter 7 <LangImpl07.html>`_ of that tutorial to supply the
input for our JIT: Each time the user enters an expression the REPL will add a
new IR module containing the code for that expression to the JIT. If the
expression is a top-level expression like '1+1' or 'sin(x)', the REPL will also
use the lookup method of our JIT class find and execute the code for the
expression. In later chapters of this tutorial we will modify the REPL to enable
new interactions with our JIT class, but for now we will take this setup for
granted and focus our attention on the implementation of our JIT itself.

Our KaleidoscopeJIT class is defined in the KaleidoscopeJIT.h header. After the
usual include guards and #includes [2]_, we get to the definition of our class:

.. code-block:: c++

  #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
  #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

  #include "llvm/ADT/StringRef.h"
  #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
  #include "llvm/ExecutionEngine/Orc/Core.h"
  #include "llvm/ExecutionEngine/Orc/ExecutionUtils.h"
  #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
  #include "llvm/ExecutionEngine/Orc/JITTargetMachineBuilder.h"
  #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
  #include "llvm/ExecutionEngine/SectionMemoryManager.h"
  #include "llvm/IR/DataLayout.h"
  #include "llvm/IR/LLVMContext.h"
  #include <memory>

  namespace llvm {
  namespace orc {

  class KaleidoscopeJIT {
  private:
    ExecutionSession ES;
    RTDyldObjectLinkingLayer ObjectLayer;
    IRCompileLayer CompileLayer;

    DataLayout DL;
    MangleAndInterner Mangle;
    ThreadSafeContext Ctx;

  public:
    KaleidoscopeJIT(JITTargetMachineBuilder JTMB, DataLayout DL)
        : ObjectLayer(ES,
                      []() { return std::make_unique<SectionMemoryManager>(); }),
          CompileLayer(ES, ObjectLayer, ConcurrentIRCompiler(std::move(JTMB))),
          DL(std::move(DL)), Mangle(ES, this->DL),
          Ctx(std::make_unique<LLVMContext>()) {
      ES.getMainJITDylib().addGenerator(
          cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(DL.getGlobalPrefix())));
    }

Our class begins with six member variables: An ExecutionSession member, ``ES``,
which provides context for our running JIT'd code (including the string pool,
global mutex, and error reporting facilities); An RTDyldObjectLinkingLayer,
``ObjectLayer``, that can be used to add object files to our JIT (though we will
not use it directly); An IRCompileLayer, ``CompileLayer``, that can be used to
add LLVM Modules to our JIT (and which builds on the ObjectLayer), A DataLayout
and MangleAndInterner, ``DL`` and ``Mangle``, that will be used for symbol mangling
(more on that later); and finally an LLVMContext that clients will use when
building IR files for the JIT.

Next up we have our class constructor, which takes a `JITTargetMachineBuilder``
that will be used by our IRCompiler, and a ``DataLayout`` that we will use to
initialize our DL member. The constructor begins by initializing our
ObjectLayer.  The ObjectLayer requires a reference to the ExecutionSession, and
a function object that will build a JIT memory manager for each module that is
added (a JIT memory manager manages memory allocations, memory permissions, and
registration of exception handlers for JIT'd code). For this we use a lambda
that returns a SectionMemoryManager, an off-the-shelf utility that provides all
the basic memory management functionality required for this chapter. Next we
initialize our CompileLayer. The CompileLayer needs three things: (1) A
reference to the ExecutionSession, (2) A reference to our object layer, and (3)
a compiler instance to use to perform the actual compilation from IR to object
files. We use the off-the-shelf ConcurrentIRCompiler utility as our compiler,
which we construct using this constructor's JITTargetMachineBuilder argument.
The ConcurrentIRCompiler utility will use the JITTargetMachineBuilder to build
llvm TargetMachines (which are not thread safe) as needed for compiles. After
this, we initialize our supporting members: ``DL``, ``Mangler`` and ``Ctx`` with
the input DataLayout, the ExecutionSession and DL member, and a new default
constructed LLVMContext respectively. Now that our members have been initialized,
so the one thing that remains to do is to tweak the configuration of the
*JITDylib* that we will store our code in. We want to modify this dylib to
contain not only the symbols that we add to it, but also the symbols from our
REPL process as well. We do this by attaching a
``DynamicLibrarySearchGenerator`` instance using the
``DynamicLibrarySearchGenerator::GetForCurrentProcess`` method.


.. code-block:: c++

  static Expected<std::unique_ptr<KaleidoscopeJIT>> Create() {
    auto JTMB = JITTargetMachineBuilder::detectHost();

    if (!JTMB)
      return JTMB.takeError();

    auto DL = JTMB->getDefaultDataLayoutForTarget();
    if (!DL)
      return DL.takeError();

    return std::make_unique<KaleidoscopeJIT>(std::move(*JTMB), std::move(*DL));
  }

  const DataLayout &getDataLayout() const { return DL; }

  LLVMContext &getContext() { return *Ctx.getContext(); }

Next we have a named constructor, ``Create``, which will build a KaleidoscopeJIT
instance that is configured to generate code for our host process. It does this
by first generating a JITTargetMachineBuilder instance using that classes'
detectHost method and then using that instance to generate a datalayout for
the target process. Each of these operations can fail, so each returns its
result wrapped in an Expected value [3]_ that we must check for error before
continuing. If both operations succeed we can unwrap their results (using the
dereference operator) and pass them into KaleidoscopeJIT's constructor on the
last line of the function.

Following the named constructor we have the ``getDataLayout()`` and
``getContext()`` methods. These are used to make data structures created and
managed by the JIT (especially the LLVMContext) available to the REPL code that
will build our IR modules.

.. code-block:: c++

  void addModule(std::unique_ptr<Module> M) {
    cantFail(CompileLayer.add(ES.getMainJITDylib(),
                              ThreadSafeModule(std::move(M), Ctx)));
  }

  Expected<ExecutorSymbolDef> lookup(StringRef Name) {
    return ES.lookup({&ES.getMainJITDylib()}, Mangle(Name.str()));
  }

Now we come to the first of our JIT API methods: addModule. This method is
responsible for adding IR to the JIT and making it available for execution. In
this initial implementation of our JIT we will make our modules "available for
execution" by adding them to the CompileLayer, which will it turn store the
Module in the main JITDylib. This process will create new symbol table entries
in the JITDylib for each definition in the module, and will defer compilation of
the module until any of its definitions is looked up. Note that this is not lazy
compilation: just referencing a definition, even if it is never used, will be
enough to trigger compilation. In later chapters we will teach our JIT to defer
compilation of functions until they're actually called.  To add our Module we
must first wrap it in a ThreadSafeModule instance, which manages the lifetime of
the Module's LLVMContext (our Ctx member) in a thread-friendly way. In our
example, all modules will share the Ctx member, which will exist for the
duration of the JIT. Once we switch to concurrent compilation in later chapters
we will use a new context per module.

Our last method is ``lookup``, which allows us to look up addresses for
function and variable definitions added to the JIT based on their symbol names.
As noted above, lookup will implicitly trigger compilation for any symbol
that has not already been compiled. Our lookup method calls through to
`ExecutionSession::lookup`, passing in a list of dylibs to search (in our case
just the main dylib), and the symbol name to search for, with a twist: We have
to *mangle* the name of the symbol we're searching for first. The ORC JIT
components use mangled symbols internally the same way a static compiler and
linker would, rather than using plain IR symbol names. This allows JIT'd code
to interoperate easily with precompiled code in the application or shared
libraries. The kind of mangling will depend on the DataLayout, which in turn
depends on the target platform. To allow us to remain portable and search based
on the un-mangled name, we just re-produce this mangling ourselves using our
``Mangle`` member function object.

This brings us to the end of Chapter 1 of Building a JIT. You now have a basic
but fully functioning JIT stack that you can use to take LLVM IR and make it
executable within the context of your JIT process. In the next chapter we'll
look at how to extend this JIT to produce better quality code, and in the
process take a deeper look at the ORC layer concept.

`Next: Extending the KaleidoscopeJIT <#BuildingAJIT2>`_

Full Code Listing
=================

Here is the complete code listing for our running example. To build this
example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../examples/Kaleidoscope/BuildingAJIT/Chapter1/KaleidoscopeJIT.h
   :language: c++

.. code-block:: cpp

    //===- KaleidoscopeJIT.h - A simple JIT for Kaleidoscope --------*- C++ -*-===//
    //
    // Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
    // See https://llvm.org/LICENSE.txt for license information.
    // SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
    //
    //===----------------------------------------------------------------------===//
    //
    // Contains a simple JIT definition for use in the kaleidoscope tutorials.
    //
    //===----------------------------------------------------------------------===//

    #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
    #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

    #include "llvm/ADT/StringRef.h"
    #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
    #include "llvm/ExecutionEngine/Orc/Core.h"
    #include "llvm/ExecutionEngine/Orc/ExecutionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
    #include "llvm/ExecutionEngine/Orc/JITTargetMachineBuilder.h"
    #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
    #include "llvm/ExecutionEngine/Orc/SelfExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/Shared/ExecutorSymbolDef.h"
    #include "llvm/ExecutionEngine/SectionMemoryManager.h"
    #include "llvm/IR/DataLayout.h"
    #include "llvm/IR/LLVMContext.h"
    #include <memory>

    namespace llvm {
    namespace orc {

    class KaleidoscopeJIT {
    private:
      std::unique_ptr<ExecutionSession> ES;

      DataLayout DL;
      MangleAndInterner Mangle;

      RTDyldObjectLinkingLayer ObjectLayer;
      IRCompileLayer CompileLayer;

      JITDylib &MainJD;

    public:
      KaleidoscopeJIT(std::unique_ptr<ExecutionSession> ES,
                      JITTargetMachineBuilder JTMB, DataLayout DL)
          : ES(std::move(ES)), DL(std::move(DL)), Mangle(*this->ES, this->DL),
            ObjectLayer(*this->ES,
                        [](const MemoryBuffer &) {
                          return std::make_unique<SectionMemoryManager>();
                        }),
            CompileLayer(*this->ES, ObjectLayer,
                         std::make_unique<ConcurrentIRCompiler>(std::move(JTMB))),
            MainJD(this->ES->createBareJITDylib("<main>")) {
        MainJD.addGenerator(
            cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(
                DL.getGlobalPrefix())));
      }

      ~KaleidoscopeJIT() {
        if (auto Err = ES->endSession())
          ES->reportError(std::move(Err));
      }

      static Expected<std::unique_ptr<KaleidoscopeJIT>> Create() {
        auto EPC = SelfExecutorProcessControl::Create();
        if (!EPC)
          return EPC.takeError();

        auto ES = std::make_unique<ExecutionSession>(std::move(*EPC));

        JITTargetMachineBuilder JTMB(
            ES->getExecutorProcessControl().getTargetTriple());

        auto DL = JTMB.getDefaultDataLayoutForTarget();
        if (!DL)
          return DL.takeError();

        return std::make_unique<KaleidoscopeJIT>(std::move(ES), std::move(JTMB),
                                                 std::move(*DL));
      }

      const DataLayout &getDataLayout() const { return DL; }

      JITDylib &getMainJITDylib() { return MainJD; }

      Error addModule(ThreadSafeModule TSM, ResourceTrackerSP RT = nullptr) {
        if (!RT)
          RT = MainJD.getDefaultResourceTracker();
        return CompileLayer.add(RT, std::move(TSM));
      }

      Expected<ExecutorSymbolDef> lookup(StringRef Name) {
        return ES->lookup({&MainJD}, Mangle(Name.str()));
      }
    };

    } // end namespace orc
    } // end namespace llvm

    #endif // LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

.. [1] Actually we use a cut-down version of KaleidoscopeJIT that makes a
       simplifying assumption: symbols cannot be re-defined. This will make it
       impossible to re-define symbols in the REPL, but will make our symbol
       lookup logic simpler. Re-introducing support for symbol redefinition is
       left as an exercise for the reader. (The KaleidoscopeJIT.h used in the
       original tutorials will be a helpful reference).

.. [2] +-----------------------------+-----------------------------------------------+
       |         File                |               Reason for inclusion            |
       +=============================+===============================================+
       |       CompileUtils.h        | Provides the SimpleCompiler class.            |
       +-----------------------------+-----------------------------------------------+
       |           Core.h            | Core utilities such as ExecutionSession and   |
       |                             | JITDylib.                                     |
       +-----------------------------+-----------------------------------------------+
       |      ExecutionUtils.h       | Provides the DynamicLibrarySearchGenerator    |
       |                             | class.                                        |
       +-----------------------------+-----------------------------------------------+
       |      IRCompileLayer.h       | Provides the IRCompileLayer class.            |
       +-----------------------------+-----------------------------------------------+
       |  JITTargetMachineBuilder.h  | Provides the JITTargetMachineBuilder class.   |
       +-----------------------------+-----------------------------------------------+
       | RTDyldObjectLinkingLayer.h  | Provides the RTDyldObjectLinkingLayer class.  |
       +-----------------------------+-----------------------------------------------+
       |   SectionMemoryManager.h    | Provides the SectionMemoryManager class.      |
       +-----------------------------+-----------------------------------------------+
       |        DataLayout.h         | Provides the DataLayout class.                |
       +-----------------------------+-----------------------------------------------+
       |        LLVMContext.h        | Provides the LLVMContext class.               |
       +-----------------------------+-----------------------------------------------+

.. [3] See the ErrorHandling section in the LLVM Programmer's Manual
       (https://llvm.org/docs/ProgrammersManual.html#error-handling)


.. _BuildingAJIT2:

========================================================================
2. Building a JIT: Adding Optimizations -- An introduction to ORC Layers
========================================================================

.. contents::
   :local:

**This tutorial is under active development. It is incomplete and details may
change frequently.** Nonetheless we invite you to try it out as it stands, and
we welcome any feedback.

Chapter 2 Introduction
======================

**Warning: This tutorial is currently being updated to account for ORC API
changes. Only Chapters 1 and 2 are up-to-date.**

**Example code from Chapters 3 to 5 will compile and run, but has not been
updated**

Welcome to Chapter 2 of the "Building an ORC-based JIT in LLVM" tutorial. In
`Chapter 1 <#BuildingAJIT1>`_ of this series we examined a basic JIT
class, KaleidoscopeJIT, that could take LLVM IR modules as input and produce
executable code in memory. KaleidoscopeJIT was able to do this with relatively
little code by composing two off-the-shelf *ORC layers*: IRCompileLayer and
ObjectLinkingLayer, to do much of the heavy lifting.

In this layer we'll learn more about the ORC layer concept by using a new layer,
IRTransformLayer, to add IR optimization support to KaleidoscopeJIT.

Optimizing Modules using the IRTransformLayer
=============================================

In `Chapter 4 <LangImpl04.html>`_ of the "Implementing a language with LLVM"
tutorial series the llvm *FunctionPassManager* is introduced as a means for
optimizing LLVM IR. Interested readers may read that chapter for details, but
in short: to optimize a Module we create an llvm::FunctionPassManager
instance, configure it with a set of optimizations, then run the PassManager on
a Module to mutate it into a (hopefully) more optimized but semantically
equivalent form. In the original tutorial series the FunctionPassManager was
created outside the KaleidoscopeJIT and modules were optimized before being
added to it. In this Chapter we will make optimization a phase of our JIT
instead. For now this will provide us a motivation to learn more about ORC
layers, but in the long term making optimization part of our JIT will yield an
important benefit: When we begin lazily compiling code (i.e. deferring
compilation of each function until the first time it's run) having
optimization managed by our JIT will allow us to optimize lazily too, rather
than having to do all our optimization up-front.

To add optimization support to our JIT we will take the KaleidoscopeJIT from
Chapter 1 and compose an ORC *IRTransformLayer* on top. We will look at how the
IRTransformLayer works in more detail below, but the interface is simple: the
constructor for this layer takes a reference to the execution session and the
layer below (as all layers do) plus an *IR optimization function* that it will
apply to each Module that is added via addModule:

.. code-block:: c++

  class KaleidoscopeJIT {
  private:
    ExecutionSession ES;
    RTDyldObjectLinkingLayer ObjectLayer;
    IRCompileLayer CompileLayer;
    IRTransformLayer TransformLayer;

    DataLayout DL;
    MangleAndInterner Mangle;
    ThreadSafeContext Ctx;

  public:

    KaleidoscopeJIT(JITTargetMachineBuilder JTMB, DataLayout DL)
        : ObjectLayer(ES,
                      []() { return std::make_unique<SectionMemoryManager>(); }),
          CompileLayer(ES, ObjectLayer, ConcurrentIRCompiler(std::move(JTMB))),
          TransformLayer(ES, CompileLayer, optimizeModule),
          DL(std::move(DL)), Mangle(ES, this->DL),
          Ctx(std::make_unique<LLVMContext>()) {
      ES.getMainJITDylib().addGenerator(
          cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(DL.getGlobalPrefix())));
    }

Our extended KaleidoscopeJIT class starts out the same as it did in Chapter 1,
but after the CompileLayer we introduce a new member, TransformLayer, which sits
on top of our CompileLayer. We initialize our OptimizeLayer with a reference to
the ExecutionSession and output layer (standard practice for layers), along with
a *transform function*. For our transform function we supply our classes
optimizeModule static method.

.. code-block:: c++

  // ...
  return cantFail(OptimizeLayer.addModule(std::move(M),
                                          std::move(Resolver)));
  // ...

Next we need to update our addModule method to replace the call to
``CompileLayer::add`` with a call to ``OptimizeLayer::add`` instead.

.. code-block:: c++

  static Expected<ThreadSafeModule>
  optimizeModule(ThreadSafeModule M, const MaterializationResponsibility &R) {
    // Create a function pass manager.
    auto FPM = std::make_unique<legacy::FunctionPassManager>(M.get());

    // Add some optimizations.
    FPM->add(createInstructionCombiningPass());
    FPM->add(createReassociatePass());
    FPM->add(createGVNPass());
    FPM->add(createCFGSimplificationPass());
    FPM->doInitialization();

    // Run the optimizations over all functions in the module being added to
    // the JIT.
    for (auto &F : *M)
      FPM->run(F);

    return M;
  }

At the bottom of our JIT we add a private method to do the actual optimization:
*optimizeModule*. This function takes the module to be transformed as input (as
a ThreadSafeModule) along with a reference to a reference to a new class:
``MaterializationResponsibility``. The MaterializationResponsibility argument
can be used to query JIT state for the module being transformed, such as the set
of definitions in the module that JIT'd code is actively trying to call/access.
For now we will ignore this argument and use a standard optimization
pipeline. To do this we set up a FunctionPassManager, add some passes to it, run
it over every function in the module, and then return the mutated module. The
specific optimizations are the same ones used in `Chapter 4 <LangImpl04.html>`_
of the "Implementing a language with LLVM" tutorial series. Readers may visit
that chapter for a more in-depth discussion of these, and of IR optimization in
general.

And that's it in terms of changes to KaleidoscopeJIT: When a module is added via
addModule the OptimizeLayer will call our optimizeModule function before passing
the transformed module on to the CompileLayer below. Of course, we could have
called optimizeModule directly in our addModule function and not gone to the
bother of using the IRTransformLayer, but doing so gives us another opportunity
to see how layers compose. It also provides a neat entry point to the *layer*
concept itself, because IRTransformLayer is one of the simplest layers that
can be implemented.

.. code-block:: c++

  // From IRTransformLayer.h:
  class IRTransformLayer : public IRLayer {
  public:
    using TransformFunction = std::function<Expected<ThreadSafeModule>(
        ThreadSafeModule, const MaterializationResponsibility &R)>;

    IRTransformLayer(ExecutionSession &ES, IRLayer &BaseLayer,
                     TransformFunction Transform = identityTransform);

    void setTransform(TransformFunction Transform) {
      this->Transform = std::move(Transform);
    }

    static ThreadSafeModule
    identityTransform(ThreadSafeModule TSM,
                      const MaterializationResponsibility &R) {
      return TSM;
    }

    void emit(MaterializationResponsibility R, ThreadSafeModule TSM) override;

  private:
    IRLayer &BaseLayer;
    TransformFunction Transform;
  };

  // From IRTransformLayer.cpp:

  IRTransformLayer::IRTransformLayer(ExecutionSession &ES,
                                     IRLayer &BaseLayer,
                                     TransformFunction Transform)
      : IRLayer(ES), BaseLayer(BaseLayer), Transform(std::move(Transform)) {}

  void IRTransformLayer::emit(MaterializationResponsibility R,
                              ThreadSafeModule TSM) {
    assert(TSM.getModule() && "Module must not be null");

    if (auto TransformedTSM = Transform(std::move(TSM), R))
      BaseLayer.emit(std::move(R), std::move(*TransformedTSM));
    else {
      R.failMaterialization();
      getExecutionSession().reportError(TransformedTSM.takeError());
    }
  }

This is the whole definition of IRTransformLayer, from
``llvm/include/llvm/ExecutionEngine/Orc/IRTransformLayer.h`` and
``llvm/lib/ExecutionEngine/Orc/IRTransformLayer.cpp``.  This class is concerned
with two very simple jobs: (1) Running every IR Module that is emitted via this
layer through the transform function object, and (2) implementing the ORC
``IRLayer`` interface (which itself conforms to the general ORC Layer concept,
more on that below). Most of the class is straightforward: a typedef for the
transform function, a constructor to initialize the members, a setter for the
transform function value, and a default no-op transform. The most important
method is ``emit`` as this is half of our IRLayer interface. The emit method
applies our transform to each module that it is called on and, if the transform
succeeds, passes the transformed module to the base layer. If the transform
fails, our emit function calls
``MaterializationResponsibility::failMaterialization`` (this JIT clients who
may be waiting on other threads know that the code they were waiting for has
failed to compile) and logs the error with the execution session before bailing
out.

The other half of the IRLayer interface we inherit unmodified from the IRLayer
class:

.. code-block:: c++

  Error IRLayer::add(JITDylib &JD, ThreadSafeModule TSM, VModuleKey K) {
    return JD.define(std::make_unique<BasicIRLayerMaterializationUnit>(
        *this, std::move(K), std::move(TSM)));
  }

This code, from ``llvm/lib/ExecutionEngine/Orc/Layer.cpp``, adds a
ThreadSafeModule to a given JITDylib by wrapping it up in a
``MaterializationUnit`` (in this case a ``BasicIRLayerMaterializationUnit``).
Most layers that derived from IRLayer can rely on this default implementation
of the ``add`` method.

These two operations, ``add`` and ``emit``, together constitute the layer
concept: A layer is a way to wrap a part of a compiler pipeline (in this case
the "opt" phase of an LLVM compiler) whose API is opaque to ORC with an
interface that ORC can call as needed. The add method takes an
module in some input program representation (in this case an LLVM IR module)
and stores it in the target ``JITDylib``, arranging for it to be passed back
to the layer's emit method when any symbol defined by that module is requested.
Each layer can complete its own work by calling the ``emit`` method of its base
layer. For example, in this tutorial our IRTransformLayer calls through to
our IRCompileLayer to compile the transformed IR, and our IRCompileLayer in
turn calls our ObjectLayer to link the object file produced by our compiler.

So far we have learned how to optimize and compile our LLVM IR, but we have
not focused on when compilation happens. Our current REPL optimizes and
compiles each function as soon as it is referenced by any other code,
regardless of whether it is ever called at runtime. In the next chapter we
will introduce a fully lazy compilation, in which functions are not compiled
until they are first called at run-time. At this point the trade-offs get much
more interesting: the lazier we are, the quicker we can start executing the
first function, but the more often we will have to pause to compile newly
encountered functions. If we only code-gen lazily, but optimize eagerly, we
will have a longer startup time (as everything is optimized at that time) but
relatively short pauses as each function just passes through code-gen. If we
both optimize and code-gen lazily we can start executing the first function
more quickly, but we will have longer pauses as each function has to be both
optimized and code-gen'd when it is first executed. Things become even more
interesting if we consider interprocedural optimizations like inlining, which
must be performed eagerly. These are complex trade-offs, and there is no
one-size-fits all solution to them, but by providing composable layers we leave
the decisions to the person implementing the JIT, and make it easy for them to
experiment with different configurations.

`Next: Adding Per-function Lazy Compilation <#BuildingAJIT3>`_

Full Code Listing
=================

Here is the complete code listing for our running example with an
IRTransformLayer added to enable optimization. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../examples/Kaleidoscope/BuildingAJIT/Chapter2/KaleidoscopeJIT.h
   :language: c++

.. code-block:: cpp

    //===- KaleidoscopeJIT.h - A simple JIT for Kaleidoscope --------*- C++ -*-===//
    //
    // Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
    // See https://llvm.org/LICENSE.txt for license information.
    // SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
    //
    //===----------------------------------------------------------------------===//
    //
    // Contains a simple JIT definition for use in the kaleidoscope tutorials.
    //
    //===----------------------------------------------------------------------===//

    #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
    #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

    #include "llvm/ADT/StringRef.h"
    #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
    #include "llvm/ExecutionEngine/Orc/Core.h"
    #include "llvm/ExecutionEngine/Orc/ExecutionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
    #include "llvm/ExecutionEngine/Orc/IRTransformLayer.h"
    #include "llvm/ExecutionEngine/Orc/JITTargetMachineBuilder.h"
    #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
    #include "llvm/ExecutionEngine/Orc/SelfExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/Shared/ExecutorSymbolDef.h"
    #include "llvm/ExecutionEngine/SectionMemoryManager.h"
    #include "llvm/IR/DataLayout.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include <memory>

    namespace llvm {
    namespace orc {

    class KaleidoscopeJIT {
    private:
      std::unique_ptr<ExecutionSession> ES;

      DataLayout DL;
      MangleAndInterner Mangle;

      RTDyldObjectLinkingLayer ObjectLayer;
      IRCompileLayer CompileLayer;
      IRTransformLayer OptimizeLayer;

      JITDylib &MainJD;

    public:
      KaleidoscopeJIT(std::unique_ptr<ExecutionSession> ES,
                      JITTargetMachineBuilder JTMB, DataLayout DL)
          : ES(std::move(ES)), DL(std::move(DL)), Mangle(*this->ES, this->DL),
            ObjectLayer(*this->ES,
                        [](const MemoryBuffer &) {
                          return std::make_unique<SectionMemoryManager>();
                        }),
            CompileLayer(*this->ES, ObjectLayer,
                        std::make_unique<ConcurrentIRCompiler>(std::move(JTMB))),
            OptimizeLayer(*this->ES, CompileLayer, optimizeModule),
            MainJD(this->ES->createBareJITDylib("<main>")) {
        MainJD.addGenerator(
            cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(
                DL.getGlobalPrefix())));
      }

      ~KaleidoscopeJIT() {
        if (auto Err = ES->endSession())
          ES->reportError(std::move(Err));
      }

      static Expected<std::unique_ptr<KaleidoscopeJIT>> Create() {
        auto EPC = SelfExecutorProcessControl::Create();
        if (!EPC)
          return EPC.takeError();

        auto ES = std::make_unique<ExecutionSession>(std::move(*EPC));

        JITTargetMachineBuilder JTMB(
            ES->getExecutorProcessControl().getTargetTriple());

        auto DL = JTMB.getDefaultDataLayoutForTarget();
        if (!DL)
          return DL.takeError();

        return std::make_unique<KaleidoscopeJIT>(std::move(ES), std::move(JTMB),
                                                std::move(*DL));
      }

      const DataLayout &getDataLayout() const { return DL; }

      JITDylib &getMainJITDylib() { return MainJD; }

      Error addModule(ThreadSafeModule TSM, ResourceTrackerSP RT = nullptr) {
        if (!RT)
          RT = MainJD.getDefaultResourceTracker();

        return OptimizeLayer.add(RT, std::move(TSM));
      }

      Expected<ExecutorSymbolDef> lookup(StringRef Name) {
        return ES->lookup({&MainJD}, Mangle(Name.str()));
      }

    private:
      static Expected<ThreadSafeModule>
      optimizeModule(ThreadSafeModule TSM, const MaterializationResponsibility &R) {
        TSM.withModuleDo([](Module &M) {
          // Create a function pass manager.
          auto FPM = std::make_unique<legacy::FunctionPassManager>(&M);

          // Add some optimizations.
          FPM->add(createInstructionCombiningPass());
          FPM->add(createReassociatePass());
          FPM->add(createGVNPass());
          FPM->add(createCFGSimplificationPass());
          FPM->doInitialization();

          // Run the optimizations over all functions in the module being added to
          // the JIT.
          for (auto &F : M)
            FPM->run(F);
        });

        return std::move(TSM);
      }
    };

    } // end namespace orc
    } // end namespace llvm

    #endif // LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H


.. _BuildingAJIT3:

================================================
3. Building a JIT: Per-function Lazy Compilation
================================================

.. contents::
   :local:

**This tutorial is under active development. It is incomplete and details may
change frequently.** Nonetheless we invite you to try it out as it stands, and
we welcome any feedback.

Chapter 3 Introduction
======================

**Warning: This text is currently out of date due to ORC API updates.**

**The example code has been updated and can be used. The text will be updated
once the API churn dies down.**

Welcome to Chapter 3 of the "Building an ORC-based JIT in LLVM" tutorial. This
chapter discusses lazy JITing and shows you how to enable it by adding an ORC
CompileOnDemand layer the JIT from `Chapter 2 <#BuildingAJIT2>`_.

Lazy Compilation
================

When we add a module to the KaleidoscopeJIT class from Chapter 2 it is
immediately optimized, compiled and linked for us by the IRTransformLayer,
IRCompileLayer and RTDyldObjectLinkingLayer respectively. This scheme, where all the
work to make a Module executable is done up front, is simple to understand and
its performance characteristics are easy to reason about. However, it will lead
to very high startup times if the amount of code to be compiled is large, and
may also do a lot of unnecessary compilation if only a few compiled functions
are ever called at runtime. A truly "just-in-time" compiler should allow us to
defer the compilation of any given function until the moment that function is
first called, improving launch times and eliminating redundant work. In fact,
the ORC APIs provide us with a layer to lazily compile LLVM IR:
*CompileOnDemandLayer*.

The CompileOnDemandLayer class conforms to the layer interface described in
Chapter 2, but its addModule method behaves quite differently from the layers
we have seen so far: rather than doing any work up front, it just scans the
Modules being added and arranges for each function in them to be compiled the
first time it is called. To do this, the CompileOnDemandLayer creates two small
utilities for each function that it scans: a *stub* and a *compile
callback*. The stub is a pair of a function pointer (which will be pointed at
the function's implementation once the function has been compiled) and an
indirect jump through the pointer. By fixing the address of the indirect jump
for the lifetime of the program we can give the function a permanent "effective
address", one that can be safely used for indirection and function pointer
comparison even if the function's implementation is never compiled, or if it is
compiled more than once (due to, for example, recompiling the function at a
higher optimization level) and changes address. The second utility, the compile
callback, represents a re-entry point from the program into the compiler that
will trigger compilation and then execution of a function. By initializing the
function's stub to point at the function's compile callback, we enable lazy
compilation: The first attempted call to the function will follow the function
pointer and trigger the compile callback instead. The compile callback will
compile the function, update the function pointer for the stub, then execute
the function. On all subsequent calls to the function, the function pointer
will point at the already-compiled function, so there is no further overhead
from the compiler. We will look at this process in more detail in the next
chapter of this tutorial, but for now we'll trust the CompileOnDemandLayer to
set all the stubs and callbacks up for us. All we need to do is to add the
CompileOnDemandLayer to the top of our stack and we'll get the benefits of
lazy compilation. We just need a few changes to the source:

.. code-block:: c++

  ...
  #include "llvm/ExecutionEngine/SectionMemoryManager.h"
  #include "llvm/ExecutionEngine/Orc/CompileOnDemandLayer.h"
  #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
  ...

  ...
  class KaleidoscopeJIT {
  private:
    std::unique_ptr<TargetMachine> TM;
    const DataLayout DL;
    RTDyldObjectLinkingLayer ObjectLayer;
    IRCompileLayer<decltype(ObjectLayer), SimpleCompiler> CompileLayer;

    using OptimizeFunction =
        std::function<std::shared_ptr<Module>(std::shared_ptr<Module>)>;

    IRTransformLayer<decltype(CompileLayer), OptimizeFunction> OptimizeLayer;

    std::unique_ptr<JITCompileCallbackManager> CompileCallbackManager;
    CompileOnDemandLayer<decltype(OptimizeLayer)> CODLayer;

  public:
    using ModuleHandle = decltype(CODLayer)::ModuleHandleT;

First we need to include the CompileOnDemandLayer.h header, then add two new
members: a std::unique_ptr<JITCompileCallbackManager> and a CompileOnDemandLayer,
to our class. The CompileCallbackManager member is used by the CompileOnDemandLayer
to create the compile callback needed for each function.

.. code-block:: c++

  KaleidoscopeJIT()
      : TM(EngineBuilder().selectTarget()), DL(TM->createDataLayout()),
        ObjectLayer([]() { return std::make_shared<SectionMemoryManager>(); }),
        CompileLayer(ObjectLayer, SimpleCompiler(*TM)),
        OptimizeLayer(CompileLayer,
                      [this](std::shared_ptr<Module> M) {
                        return optimizeModule(std::move(M));
                      }),
        CompileCallbackManager(
            orc::createLocalCompileCallbackManager(TM->getTargetTriple(), 0)),
        CODLayer(OptimizeLayer,
                 [this](Function &F) { return std::set<Function*>({&F}); },
                 *CompileCallbackManager,
                 orc::createLocalIndirectStubsManagerBuilder(
                   TM->getTargetTriple())) {
    llvm::sys::DynamicLibrary::LoadLibraryPermanently(nullptr);
  }

Next we have to update our constructor to initialize the new members. To create
an appropriate compile callback manager we use the
createLocalCompileCallbackManager function, which takes a TargetMachine and an
ExecutorAddr to call if it receives a request to compile an unknown
function.  In our simple JIT this situation is unlikely to come up, so we'll
cheat and just pass '0' here. In a production quality JIT you could give the
address of a function that throws an exception in order to unwind the JIT'd
code's stack.

Now we can construct our CompileOnDemandLayer. Following the pattern from
previous layers we start by passing a reference to the next layer down in our
stack -- the OptimizeLayer. Next we need to supply a 'partitioning function':
when a not-yet-compiled function is called, the CompileOnDemandLayer will call
this function to ask us what we would like to compile. At a minimum we need to
compile the function being called (given by the argument to the partitioning
function), but we could also request that the CompileOnDemandLayer compile other
functions that are unconditionally called (or highly likely to be called) from
the function being called. For KaleidoscopeJIT we'll keep it simple and just
request compilation of the function that was called. Next we pass a reference to
our CompileCallbackManager. Finally, we need to supply an "indirect stubs
manager builder": a utility function that constructs IndirectStubManagers, which
are in turn used to build the stubs for the functions in each module. The
CompileOnDemandLayer will call the indirect stub manager builder once for each
call to addModule, and use the resulting indirect stubs manager to create
stubs for all functions in all modules in the set. If/when the module set is
removed from the JIT the indirect stubs manager will be deleted, freeing any
memory allocated to the stubs. We supply this function by using the
createLocalIndirectStubsManagerBuilder utility.

.. code-block:: c++

  // ...
          if (auto Sym = CODLayer.findSymbol(Name, false))
  // ...
  return cantFail(CODLayer.addModule(std::move(Ms),
                                     std::move(Resolver)));
  // ...

  // ...
  return CODLayer.findSymbol(MangledNameStream.str(), true);
  // ...

  // ...
  CODLayer.removeModule(H);
  // ...

Finally, we need to replace the references to OptimizeLayer in our addModule,
findSymbol, and removeModule methods. With that, we're up and running.

**To be done:**

** Chapter conclusion.**

Full Code Listing
=================

Here is the complete code listing for our running example with a CompileOnDemand
layer added to enable lazy function-at-a-time compilation. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../examples/Kaleidoscope/BuildingAJIT/Chapter3/KaleidoscopeJIT.h
   :language: c++
  
.. code-block:: cpp

    //===- KaleidoscopeJIT.h - A simple JIT for Kaleidoscope --------*- C++ -*-===//
    //
    // Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
    // See https://llvm.org/LICENSE.txt for license information.
    // SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
    //
    //===----------------------------------------------------------------------===//
    //
    // Contains a simple JIT definition for use in the kaleidoscope tutorials.
    //
    //===----------------------------------------------------------------------===//

    #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
    #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

    #include "llvm/ADT/StringRef.h"
    #include "llvm/ExecutionEngine/Orc/CompileOnDemandLayer.h"
    #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
    #include "llvm/ExecutionEngine/Orc/Core.h"
    #include "llvm/ExecutionEngine/Orc/EPCIndirectionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
    #include "llvm/ExecutionEngine/Orc/IRPartitionLayer.h"
    #include "llvm/ExecutionEngine/Orc/IRTransformLayer.h"
    #include "llvm/ExecutionEngine/Orc/JITTargetMachineBuilder.h"
    #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
    #include "llvm/ExecutionEngine/Orc/SelfExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/Shared/ExecutorSymbolDef.h"
    #include "llvm/ExecutionEngine/SectionMemoryManager.h"
    #include "llvm/IR/DataLayout.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include <memory>

    namespace llvm {
    namespace orc {

    class KaleidoscopeJIT {
    private:
      std::unique_ptr<ExecutionSession> ES;
      std::unique_ptr<EPCIndirectionUtils> EPCIU;

      DataLayout DL;
      MangleAndInterner Mangle;

      RTDyldObjectLinkingLayer ObjectLayer;
      IRCompileLayer CompileLayer;
      IRTransformLayer OptimizeLayer;
      IRPartitionLayer IPLayer;
      CompileOnDemandLayer CODLayer;

      JITDylib &MainJD;

      static void handleLazyCallThroughError() {
        errs() << "LazyCallThrough error: Could not find function body";
        exit(1);
      }

    public:
      KaleidoscopeJIT(std::unique_ptr<ExecutionSession> ES,
                      std::unique_ptr<EPCIndirectionUtils> EPCIU,
                      JITTargetMachineBuilder JTMB, DataLayout DL)
          : ES(std::move(ES)), EPCIU(std::move(EPCIU)), DL(std::move(DL)),
            Mangle(*this->ES, this->DL),
            ObjectLayer(*this->ES,
                        [](const MemoryBuffer &) {
                          return std::make_unique<SectionMemoryManager>();
                        }),
            CompileLayer(*this->ES, ObjectLayer,
                         std::make_unique<ConcurrentIRCompiler>(std::move(JTMB))),
            OptimizeLayer(*this->ES, CompileLayer, optimizeModule),
            IPLayer(*this->ES, OptimizeLayer),
            CODLayer(*this->ES, IPLayer, this->EPCIU->getLazyCallThroughManager(),
                     [this] { return this->EPCIU->createIndirectStubsManager(); }),
            MainJD(this->ES->createBareJITDylib("<main>")) {
        MainJD.addGenerator(
            cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(
                DL.getGlobalPrefix())));
      }

      ~KaleidoscopeJIT() {
        if (auto Err = ES->endSession())
          ES->reportError(std::move(Err));
        if (auto Err = EPCIU->cleanup())
          ES->reportError(std::move(Err));
      }

      static Expected<std::unique_ptr<KaleidoscopeJIT>> Create() {
        auto EPC = SelfExecutorProcessControl::Create();
        if (!EPC)
          return EPC.takeError();

        auto ES = std::make_unique<ExecutionSession>(std::move(*EPC));

        auto EPCIU = EPCIndirectionUtils::Create(*ES);
        if (!EPCIU)
          return EPCIU.takeError();

        (*EPCIU)->createLazyCallThroughManager(
            *ES, ExecutorAddr::fromPtr(&handleLazyCallThroughError));

        if (auto Err = setUpInProcessLCTMReentryViaEPCIU(**EPCIU))
          return std::move(Err);

        JITTargetMachineBuilder JTMB(
            ES->getExecutorProcessControl().getTargetTriple());

        auto DL = JTMB.getDefaultDataLayoutForTarget();
        if (!DL)
          return DL.takeError();

        return std::make_unique<KaleidoscopeJIT>(std::move(ES), std::move(*EPCIU),
                                                 std::move(JTMB), std::move(*DL));
      }

      const DataLayout &getDataLayout() const { return DL; }

      JITDylib &getMainJITDylib() { return MainJD; }

      Error addModule(ThreadSafeModule TSM, ResourceTrackerSP RT = nullptr) {
        if (!RT)
          RT = MainJD.getDefaultResourceTracker();

        return CODLayer.add(RT, std::move(TSM));
      }

      Expected<ExecutorSymbolDef> lookup(StringRef Name) {
        return ES->lookup({&MainJD}, Mangle(Name.str()));
      }

    private:
      static Expected<ThreadSafeModule>
      optimizeModule(ThreadSafeModule TSM, const MaterializationResponsibility &R) {
        TSM.withModuleDo([](Module &M) {
          // Create a function pass manager.
          auto FPM = std::make_unique<legacy::FunctionPassManager>(&M);

          // Add some optimizations.
          FPM->add(createInstructionCombiningPass());
          FPM->add(createReassociatePass());
          FPM->add(createGVNPass());
          FPM->add(createCFGSimplificationPass());
          FPM->doInitialization();

          // Run the optimizations over all functions in the module being added to
          // the JIT.
          for (auto &F : M)
            FPM->run(F);
        });

        return std::move(TSM);
      }
    };

    } // end namespace orc
    } // end namespace llvm

    #endif // LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

`Next: Extreme Laziness -- Using Compile Callbacks to JIT directly from ASTs <#BuildingAJIT4>`_


.. _BuildingAJIT4:

==========================================================================
4. Building a JIT: Extreme Laziness - Using LazyReexports to JIT from ASTs
==========================================================================

.. contents::
   :local:

**This tutorial is under active development. It is incomplete and details may
change frequently.** Nonetheless we invite you to try it out as it stands, and
we welcome any feedback.

Chapter 4 Introduction
======================

Welcome to Chapter 4 of the "Building an ORC-based JIT in LLVM" tutorial. This
chapter introduces custom MaterializationUnits and Layers, and the lazy
reexports API. Together these will be used to replace the CompileOnDemandLayer
from `Chapter 3 <BuildingAJIT3.html>`_ with a custom lazy-JITing scheme that JITs
directly from Kaleidoscope ASTs.

**To be done:**

**(1) Describe the drawbacks of JITing from IR (have to compile to IR first,
which reduces the benefits of laziness).**

**(2) Describe CompileCallbackManagers and IndirectStubManagers in detail.**

**(3) Run through the implementation of addFunctionAST.**

Full Code Listing
=================

Here is the complete code listing for our running example that JITs lazily from
Kaleidoscope ASTS. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    # Run
    ./toy

Here is the code:

.. .. literalinclude:: ../../examples/Kaleidoscope/BuildingAJIT/Chapter4/KaleidoscopeJIT.h
   :language: c++

.. code-block:: cpp

    //===- KaleidoscopeJIT.h - A simple JIT for Kaleidoscope --------*- C++ -*-===//
    //
    // Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
    // See https://llvm.org/LICENSE.txt for license information.
    // SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
    //
    //===----------------------------------------------------------------------===//
    //
    // Contains a simple JIT definition for use in the kaleidoscope tutorials.
    //
    //===----------------------------------------------------------------------===//

    #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
    #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

    #include "llvm/ADT/StringRef.h"
    #include "llvm/ExecutionEngine/Orc/CompileOnDemandLayer.h"
    #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
    #include "llvm/ExecutionEngine/Orc/Core.h"
    #include "llvm/ExecutionEngine/Orc/EPCIndirectionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutionUtils.h"
    #include "llvm/ExecutionEngine/Orc/ExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
    #include "llvm/ExecutionEngine/Orc/IRTransformLayer.h"
    #include "llvm/ExecutionEngine/Orc/JITTargetMachineBuilder.h"
    #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
    #include "llvm/ExecutionEngine/Orc/SelfExecutorProcessControl.h"
    #include "llvm/ExecutionEngine/Orc/Shared/ExecutorSymbolDef.h"
    #include "llvm/ExecutionEngine/SectionMemoryManager.h"
    #include "llvm/IR/DataLayout.h"
    #include "llvm/IR/LLVMContext.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include <memory>

    class PrototypeAST;
    class ExprAST;

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      const PrototypeAST& getProto() const;
      const std::string& getName() const;
      llvm::Function *codegen();
    };

    /// This will compile FnAST to IR, rename the function to add the given
    /// suffix (needed to prevent a name-clash with the function's stub),
    /// and then take ownership of the module that the function was compiled
    /// into.
    llvm::orc::ThreadSafeModule irgenAndTakeOwnership(FunctionAST &FnAST,
                                                      const std::string &Suffix);

    namespace llvm {
    namespace orc {

    class KaleidoscopeASTLayer;
    class KaleidoscopeJIT;

    class KaleidoscopeASTMaterializationUnit : public MaterializationUnit {
    public:
      KaleidoscopeASTMaterializationUnit(KaleidoscopeASTLayer &L,
                                        std::unique_ptr<FunctionAST> F);

      StringRef getName() const override {
        return "KaleidoscopeASTMaterializationUnit";
      }

      void materialize(std::unique_ptr<MaterializationResponsibility> R) override;

    private:
      void discard(const JITDylib &JD, const SymbolStringPtr &Sym) override {
        llvm_unreachable("Kaleidoscope functions are not overridable");
      }

      KaleidoscopeASTLayer &L;
      std::unique_ptr<FunctionAST> F;
    };

    class KaleidoscopeASTLayer {
    public:
      KaleidoscopeASTLayer(IRLayer &BaseLayer, const DataLayout &DL)
          : BaseLayer(BaseLayer), DL(DL) {}

      Error add(ResourceTrackerSP RT, std::unique_ptr<FunctionAST> F) {
        return RT->getJITDylib().define(
            std::make_unique<KaleidoscopeASTMaterializationUnit>(*this,
                                                                std::move(F)),
            RT);
      }

      void emit(std::unique_ptr<MaterializationResponsibility> MR,
                std::unique_ptr<FunctionAST> F) {
        BaseLayer.emit(std::move(MR), irgenAndTakeOwnership(*F, ""));
      }

      MaterializationUnit::Interface getInterface(FunctionAST &F) {
        MangleAndInterner Mangle(BaseLayer.getExecutionSession(), DL);
        SymbolFlagsMap Symbols;
        Symbols[Mangle(F.getName())] =
            JITSymbolFlags(JITSymbolFlags::Exported | JITSymbolFlags::Callable);
        return MaterializationUnit::Interface(std::move(Symbols), nullptr);
      }

    private:
      IRLayer &BaseLayer;
      const DataLayout &DL;
    };

    KaleidoscopeASTMaterializationUnit::KaleidoscopeASTMaterializationUnit(
        KaleidoscopeASTLayer &L, std::unique_ptr<FunctionAST> F)
        : MaterializationUnit(L.getInterface(*F)), L(L), F(std::move(F)) {}

    void KaleidoscopeASTMaterializationUnit::materialize(
        std::unique_ptr<MaterializationResponsibility> R) {
      L.emit(std::move(R), std::move(F));
    }

    class KaleidoscopeJIT {
    private:
      std::unique_ptr<ExecutionSession> ES;
      std::unique_ptr<EPCIndirectionUtils> EPCIU;

      DataLayout DL;
      MangleAndInterner Mangle;

      RTDyldObjectLinkingLayer ObjectLayer;
      IRCompileLayer CompileLayer;
      IRTransformLayer OptimizeLayer;
      KaleidoscopeASTLayer ASTLayer;

      JITDylib &MainJD;

      static void handleLazyCallThroughError() {
        errs() << "LazyCallThrough error: Could not find function body";
        exit(1);
      }

    public:
      KaleidoscopeJIT(std::unique_ptr<ExecutionSession> ES,
                      std::unique_ptr<EPCIndirectionUtils> EPCIU,
                      JITTargetMachineBuilder JTMB, DataLayout DL)
          : ES(std::move(ES)), EPCIU(std::move(EPCIU)), DL(std::move(DL)),
            Mangle(*this->ES, this->DL),
            ObjectLayer(*this->ES,
                        [](const MemoryBuffer &) {
                          return std::make_unique<SectionMemoryManager>();
                        }),
            CompileLayer(*this->ES, ObjectLayer,
                        std::make_unique<ConcurrentIRCompiler>(std::move(JTMB))),
            OptimizeLayer(*this->ES, CompileLayer, optimizeModule),
            ASTLayer(OptimizeLayer, this->DL),
            MainJD(this->ES->createBareJITDylib("<main>")) {
        MainJD.addGenerator(
            cantFail(DynamicLibrarySearchGenerator::GetForCurrentProcess(
                DL.getGlobalPrefix())));
      }

      ~KaleidoscopeJIT() {
        if (auto Err = ES->endSession())
          ES->reportError(std::move(Err));
        if (auto Err = EPCIU->cleanup())
          ES->reportError(std::move(Err));
      }

      static Expected<std::unique_ptr<KaleidoscopeJIT>> Create() {
        auto EPC = SelfExecutorProcessControl::Create();
        if (!EPC)
          return EPC.takeError();

        auto ES = std::make_unique<ExecutionSession>(std::move(*EPC));

        auto EPCIU = EPCIndirectionUtils::Create(*ES);
        if (!EPCIU)
          return EPCIU.takeError();

        (*EPCIU)->createLazyCallThroughManager(
            *ES, ExecutorAddr::fromPtr(&handleLazyCallThroughError));

        if (auto Err = setUpInProcessLCTMReentryViaEPCIU(**EPCIU))
          return std::move(Err);

        JITTargetMachineBuilder JTMB(
            ES->getExecutorProcessControl().getTargetTriple());

        auto DL = JTMB.getDefaultDataLayoutForTarget();
        if (!DL)
          return DL.takeError();

        return std::make_unique<KaleidoscopeJIT>(std::move(ES), std::move(*EPCIU),
                                                std::move(JTMB), std::move(*DL));
      }

      const DataLayout &getDataLayout() const { return DL; }

      JITDylib &getMainJITDylib() { return MainJD; }

      Error addModule(ThreadSafeModule TSM, ResourceTrackerSP RT = nullptr) {
        if (!RT)
          RT = MainJD.getDefaultResourceTracker();

        return OptimizeLayer.add(RT, std::move(TSM));
      }

      Error addAST(std::unique_ptr<FunctionAST> F, ResourceTrackerSP RT = nullptr) {
        if (!RT)
          RT = MainJD.getDefaultResourceTracker();
        return ASTLayer.add(RT, std::move(F));
      }

      Expected<ExecutorSymbolDef> lookup(StringRef Name) {
        return ES->lookup({&MainJD}, Mangle(Name.str()));
      }

    private:
      static Expected<ThreadSafeModule>
      optimizeModule(ThreadSafeModule TSM, const MaterializationResponsibility &R) {
        TSM.withModuleDo([](Module &M) {
          // Create a function pass manager.
          auto FPM = std::make_unique<legacy::FunctionPassManager>(&M);

          // Add some optimizations.
          FPM->add(createInstructionCombiningPass());
          FPM->add(createReassociatePass());
          FPM->add(createGVNPass());
          FPM->add(createCFGSimplificationPass());
          FPM->doInitialization();

          // Run the optimizations over all functions in the module being added to
          // the JIT.
          for (auto &F : M)
            FPM->run(F);
        });

        return std::move(TSM);
      }
    };

    } // end namespace orc
    } // end namespace llvm

    #endif // LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

`Next: Remote-JITing -- Process-isolation and laziness-at-a-distance <#BuildingAJIT5>`_


.. _BuildingAJIT5: https://releases.llvm.org/9.0.1/docs/tutorial/BuildingAJIT5.html

===============================================================================
5. Building a JIT: Remote-JITing – Process Isolation and Laziness at a Distance
===============================================================================

.. NOTE::

    此部分内容摘录子  `LLVM 9.0.1 <https://releases.llvm.org>`__。不同版本的文档存在差别，此版本包含了使用 Objective Caml 语言实现的 Kaleidoscope 教程项目，还有包含 5 个章节的Building a JIT in LLVM，这些内容在后续的版本中是没有的。目录组织也有变化，新版本更合理。

This tutorial is under active development. It is incomplete and details may change frequently. Nonetheless we invite you to try it out as it stands, and we welcome any feedback.

5.1. Chapter 5 Introduction
===========================

Welcome to Chapter 5 of the “Building an ORC-based JIT in LLVM” tutorial. This chapter introduces the ORC RemoteJIT Client/Server APIs and shows how to use them to build a JIT stack that will execute its code via a communications channel with a different process. This can be a separate process on the same machine, a process on a different machine, or even a process on a different platform/architecture. The code builds on top of the lazy-AST-compiling JIT stack from Chapter 4.

To be done – this is going to be a long one:

(1) Introduce channels, RPC, RemoteJIT Client and Server APIs

(2) Describe the client code in greater detail. Discuss modifications of the KaleidoscopeJIT class, and the REPL itself.

(3) Describe the server code.

(4) Describe how to run the demo.

5.2. Full Code Listing
======================

Here is the complete code listing for our running example that JITs lazily from Kaleidoscope ASTS. To build this example, use:

.. code-block:: bash

    # Compile
    clang++ -g toy.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy
    clang++ -g Server/server.cpp `llvm-config --cxxflags --ldflags --system-libs --libs core orcjit native` -O3 -o toy-server
    # Run
    ./toy-server &
    ./toy

Here is the code for the modified KaleidoscopeJIT:

.. code-block:: cpp

    //===- KaleidoscopeJIT.h - A simple JIT for Kaleidoscope --------*- C++ -*-===//
    //
    // Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
    // See https://llvm.org/LICENSE.txt for license information.
    // SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
    //
    //===----------------------------------------------------------------------===//
    //
    // Contains a simple JIT definition for use in the kaleidoscope tutorials.
    //
    //===----------------------------------------------------------------------===//

    #ifndef LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H
    #define LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H

    #include "RemoteJITUtils.h"
    #include "llvm/ADT/STLExtras.h"
    #include "llvm/ADT/SmallVector.h"
    #include "llvm/ADT/Triple.h"
    #include "llvm/ExecutionEngine/ExecutionEngine.h"
    #include "llvm/ExecutionEngine/JITSymbol.h"
    #include "llvm/ExecutionEngine/Orc/CompileUtils.h"
    #include "llvm/ExecutionEngine/Orc/IRCompileLayer.h"
    #include "llvm/ExecutionEngine/Orc/IRTransformLayer.h"
    #include "llvm/ExecutionEngine/Orc/IndirectionUtils.h"
    #include "llvm/ExecutionEngine/Orc/LambdaResolver.h"
    #include "llvm/ExecutionEngine/Orc/OrcRemoteTargetClient.h"
    #include "llvm/ExecutionEngine/Orc/RTDyldObjectLinkingLayer.h"
    #include "llvm/IR/DataLayout.h"
    #include "llvm/IR/LegacyPassManager.h"
    #include "llvm/IR/Mangler.h"
    #include "llvm/Support/DynamicLibrary.h"
    #include "llvm/Support/Error.h"
    #include "llvm/Support/raw_ostream.h"
    #include "llvm/Target/TargetMachine.h"
    #include "llvm/Transforms/InstCombine/InstCombine.h"
    #include "llvm/Transforms/Scalar.h"
    #include "llvm/Transforms/Scalar/GVN.h"
    #include <algorithm>
    #include <cassert>
    #include <cstdlib>
    #include <map>
    #include <memory>
    #include <string>
    #include <vector>

    class PrototypeAST;
    class ExprAST;

    /// FunctionAST - This class represents a function definition itself.
    class FunctionAST {
      std::unique_ptr<PrototypeAST> Proto;
      std::unique_ptr<ExprAST> Body;

    public:
      FunctionAST(std::unique_ptr<PrototypeAST> Proto,
                  std::unique_ptr<ExprAST> Body)
          : Proto(std::move(Proto)), Body(std::move(Body)) {}

      const PrototypeAST& getProto() const;
      const std::string& getName() const;
      llvm::Function *codegen();
    };

    /// This will compile FnAST to IR, rename the function to add the given
    /// suffix (needed to prevent a name-clash with the function's stub),
    /// and then take ownership of the module that the function was compiled
    /// into.
    std::unique_ptr<llvm::Module>
    irgenAndTakeOwnership(FunctionAST &FnAST, const std::string &Suffix);

    namespace llvm {
    namespace orc {

    // Typedef the remote-client API.
    using MyRemote = remote::OrcRemoteTargetClient;

    class KaleidoscopeJIT {
    private:
      ExecutionSession &ES;
      std::shared_ptr<SymbolResolver> Resolver;
      std::unique_ptr<TargetMachine> TM;
      const DataLayout DL;
      LegacyRTDyldObjectLinkingLayer ObjectLayer;
      LegacyIRCompileLayer<decltype(ObjectLayer), SimpleCompiler> CompileLayer;

      using OptimizeFunction =
          std::function<std::unique_ptr<Module>(std::unique_ptr<Module>)>;

      LegacyIRTransformLayer<decltype(CompileLayer), OptimizeFunction> OptimizeLayer;

      JITCompileCallbackManager *CompileCallbackMgr;
      std::unique_ptr<IndirectStubsManager> IndirectStubsMgr;
      MyRemote &Remote;

    public:
      KaleidoscopeJIT(ExecutionSession &ES, MyRemote &Remote)
          : ES(ES),
            Resolver(createLegacyLookupResolver(
                ES,
                [this](const std::string &Name) -> JITSymbol {
                  if (auto Sym = IndirectStubsMgr->findStub(Name, false))
                    return Sym;
                  if (auto Sym = OptimizeLayer.findSymbol(Name, false))
                    return Sym;
                  else if (auto Err = Sym.takeError())
                    return std::move(Err);
                  if (auto Addr = cantFail(this->Remote.getSymbolAddress(Name)))
                    return JITSymbol(Addr, JITSymbolFlags::Exported);
                  return nullptr;
                },
                [](Error Err) { cantFail(std::move(Err), "lookupFlags failed"); })),
            TM(EngineBuilder().selectTarget(Triple(Remote.getTargetTriple()), "",
                                            "", SmallVector<std::string, 0>())),
            DL(TM->createDataLayout()),
            ObjectLayer(AcknowledgeORCv1Deprecation, ES,
                        [this](VModuleKey K) {
                          return LegacyRTDyldObjectLinkingLayer::Resources{
                              cantFail(this->Remote.createRemoteMemoryManager()),
                              Resolver};
                        }),
            CompileLayer(AcknowledgeORCv1Deprecation, ObjectLayer,
                        SimpleCompiler(*TM)),
            OptimizeLayer(AcknowledgeORCv1Deprecation, CompileLayer,
                          [this](std::unique_ptr<Module> M) {
                            return optimizeModule(std::move(M));
                          }),
            Remote(Remote) {
        auto CCMgrOrErr = Remote.enableCompileCallbacks(0);
        if (!CCMgrOrErr) {
          logAllUnhandledErrors(CCMgrOrErr.takeError(), errs(),
                                "Error enabling remote compile callbacks:");
          exit(1);
        }
        CompileCallbackMgr = &*CCMgrOrErr;
        IndirectStubsMgr = cantFail(Remote.createIndirectStubsManager());
        llvm::sys::DynamicLibrary::LoadLibraryPermanently(nullptr);
      }

      TargetMachine &getTargetMachine() { return *TM; }

      VModuleKey addModule(std::unique_ptr<Module> M) {
        // Add the module with a new VModuleKey.
        auto K = ES.allocateVModule();
        cantFail(OptimizeLayer.addModule(K, std::move(M)));
        return K;
      }

      Error addFunctionAST(std::unique_ptr<FunctionAST> FnAST) {
        // Move ownership of FnAST to a shared pointer - C++11 lambdas don't support
        // capture-by-move, which is be required for unique_ptr.
        auto SharedFnAST = std::shared_ptr<FunctionAST>(std::move(FnAST));

        // Set the action to compile our AST. This lambda will be run if/when
        // execution hits the compile callback (via the stub).
        //
        // The steps to compile are:
        // (1) IRGen the function.
        // (2) Add the IR module to the JIT to make it executable like any other
        //     module.
        // (3) Use findSymbol to get the address of the compiled function.
        // (4) Update the stub pointer to point at the implementation so that
        ///    subsequent calls go directly to it and bypass the compiler.
        // (5) Return the address of the implementation: this lambda will actually
        //     be run inside an attempted call to the function, and we need to
        //     continue on to the implementation to complete the attempted call.
        //     The JIT runtime (the resolver block) will use the return address of
        //     this function as the address to continue at once it has reset the
        //     CPU state to what it was immediately before the call.
        auto CompileAction = [this, SharedFnAST]() {
          auto M = irgenAndTakeOwnership(*SharedFnAST, "$impl");
          addModule(std::move(M));
          auto Sym = findSymbol(SharedFnAST->getName() + "$impl");
          assert(Sym && "Couldn't find compiled function?");
          JITTargetAddress SymAddr = cantFail(Sym.getAddress());
          if (auto Err = IndirectStubsMgr->updatePointer(
                  mangle(SharedFnAST->getName()), SymAddr)) {
            logAllUnhandledErrors(std::move(Err), errs(),
                                  "Error updating function pointer: ");
            exit(1);
          }

          return SymAddr;
        };

        // Create a CompileCallback suing the CompileAction - this is the re-entry
        // point into the compiler for functions that haven't been compiled yet.
        auto CCAddr = cantFail(
            CompileCallbackMgr->getCompileCallback(std::move(CompileAction)));

        // Create an indirect stub. This serves as the functions "canonical
        // definition" - an unchanging (constant address) entry point to the
        // function implementation.
        // Initially we point the stub's function-pointer at the compile callback
        // that we just created. In the compile action for the callback we will
        // update the stub's function pointer to point at the function
        // implementation that we just implemented.
        if (auto Err = IndirectStubsMgr->createStub(
                mangle(SharedFnAST->getName()), CCAddr, JITSymbolFlags::Exported))
          return Err;

        return Error::success();
      }

      Error executeRemoteExpr(JITTargetAddress ExprAddr) {
        return Remote.callVoidVoid(ExprAddr);
      }

      JITSymbol findSymbol(const std::string Name) {
        return OptimizeLayer.findSymbol(mangle(Name), true);
      }

      void removeModule(VModuleKey K) {
        cantFail(OptimizeLayer.removeModule(K));
      }

    private:
      std::string mangle(const std::string &Name) {
        std::string MangledName;
        raw_string_ostream MangledNameStream(MangledName);
        Mangler::getNameWithPrefix(MangledNameStream, Name, DL);
        return MangledNameStream.str();
      }

      std::unique_ptr<Module> optimizeModule(std::unique_ptr<Module> M) {
        // Create a function pass manager.
        auto FPM = llvm::make_unique<legacy::FunctionPassManager>(M.get());

        // Add some optimizations.
        FPM->add(createInstructionCombiningPass());
        FPM->add(createReassociatePass());
        FPM->add(createGVNPass());
        FPM->add(createCFGSimplificationPass());
        FPM->doInitialization();

        // Run the optimizations over all functions in the module being added to
        // the JIT.
        for (auto &F : *M)
          FPM->run(F);

        return M;
      }
    };

    } // end namespace orc
    } // end namespace llvm

    #endif // LLVM_EXECUTIONENGINE_ORC_KALEIDOSCOPEJIT_H


And the code for the JIT server:

.. code-block:: cpp

    #include "../RemoteJITUtils.h"
    #include "llvm/ExecutionEngine/RTDyldMemoryManager.h"
    #include "llvm/ExecutionEngine/Orc/OrcRemoteTargetServer.h"
    #include "llvm/ExecutionEngine/Orc/OrcABISupport.h"
    #include "llvm/Support/CommandLine.h"
    #include "llvm/Support/DynamicLibrary.h"
    #include "llvm/Support/Error.h"
    #include "llvm/Support/raw_ostream.h"
    #include "llvm/Support/TargetSelect.h"
    #include <cstdint>
    #include <cstdio>
    #include <cstring>
    #include <string>
    #include <netinet/in.h>
    #include <sys/socket.h>

    using namespace llvm;
    using namespace llvm::orc;

    // Command line argument for TCP port.
    cl::opt<uint32_t> Port("port",
                          cl::desc("TCP port to listen on"),
                          cl::init(20000));

    ExitOnError ExitOnErr;

    using MainFun = int (*)(int, const char*[]);

    template <typename NativePtrT>
    NativePtrT MakeNative(uint64_t P) {
      return reinterpret_cast<NativePtrT>(static_cast<uintptr_t>(P));
    }

    extern "C"
    void printExprResult(double Val) {
      printf("Expression evaluated to: %f\n", Val);
    }

    // --- LAZY COMPILE TEST ---
    int main(int argc, char* argv[]) {
      if (argc == 0)
        ExitOnErr.setBanner("jit_server: ");
      else
        ExitOnErr.setBanner(std::string(argv[0]) + ": ");

      // --- Initialize LLVM ---
      cl::ParseCommandLineOptions(argc, argv, "LLVM lazy JIT example.\n");

      InitializeNativeTarget();
      InitializeNativeTargetAsmPrinter();
      InitializeNativeTargetAsmParser();

      if (sys::DynamicLibrary::LoadLibraryPermanently(nullptr)) {
        errs() << "Error loading program symbols.\n";
        return 1;
      }

      // --- Initialize remote connection ---

      int sockfd = socket(PF_INET, SOCK_STREAM, 0);
      sockaddr_in servAddr, clientAddr;
      socklen_t clientAddrLen = sizeof(clientAddr);
      memset(&servAddr, 0, sizeof(servAddr));
      servAddr.sin_family = PF_INET;
      servAddr.sin_family = INADDR_ANY;
      servAddr.sin_port = htons(Port);

      {
        // avoid "Address already in use" error.
        int yes = 1;
        if (setsockopt(sockfd,SOL_SOCKET,SO_REUSEADDR,&yes,sizeof(int)) == -1) {
          errs() << "Error calling setsockopt.\n";
          return 1;
        }
      }

      if (bind(sockfd, reinterpret_cast<sockaddr*>(&servAddr),
              sizeof(servAddr)) < 0) {
        errs() << "Error on binding.\n";
        return 1;
      }
      listen(sockfd, 1);
      int newsockfd = accept(sockfd, reinterpret_cast<sockaddr*>(&clientAddr),
                            &clientAddrLen);

      auto SymbolLookup =
        [](const std::string &Name) {
          return RTDyldMemoryManager::getSymbolAddressInProcess(Name);
        };

      auto RegisterEHFrames =
        [](uint8_t *Addr, uint32_t Size) {
          RTDyldMemoryManager::registerEHFramesInProcess(Addr, Size);
        };

      auto DeregisterEHFrames =
        [](uint8_t *Addr, uint32_t Size) {
          RTDyldMemoryManager::deregisterEHFramesInProcess(Addr, Size);
        };

      FDRPCChannel TCPChannel(newsockfd, newsockfd);

      using MyServerT = remote::OrcRemoteTargetServer<FDRPCChannel, OrcX86_64_SysV>;

      MyServerT Server(TCPChannel, SymbolLookup, RegisterEHFrames, DeregisterEHFrames);

      while (!Server.receivedTerminate())
        ExitOnErr(Server.handleOne());

      return 0;
    }
