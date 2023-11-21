

===================================================
/. 🚀 Docs combine script
===================================================
https://github.com/python/devguide

文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 

1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)

.. code-block:: bash

    #! /usr/bin/env bash
    
    print_title () {
        printf '\n%.0s' {1..2};
        printf '=%.0s' {1..51};
        printf "\n/. 🚀 $1\n"
        printf '=%.0s' {1..51};
        printf '\n%.0s' {1..2};
    }
    
    function filter {
        local parent=`echo $1 | sed -n 's/[^/\]\+$//p'`
        for it in `sed -n "/^.. toctree/,/^\w/{ s/^ \+\w/\0/p }" $1`
        do
            rst="$parent$it.rst"
            echo $rst
            filter $rst
        done
    }
    
    function toc() {
        echo ./README.rst
        echo ./index.rst
        filter ./index.rst
    }
    
    function doc(){
        cat << EOF
    文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 
    
    1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    
    EOF
    }
    
    function combine() {
        print_title "Docs combine script"
        doc
        echo '.. code-block:: bash'
    
        echo ''
        cat $0 | sed -n 's/^/    /p'
    
        echo ''
        echo "Docs Count: `find ./ -name "*.rst" | wc -l` ::"
        echo ''
        find ./ -name "*.rst" | sed -n 's/.*/    \0/p'
    
        while read -r it
        do 
            print_title "$it"
            cat $it
        done << EOF
    `toc`
    EOF
    }
    
    combine > /c/opendocs/py_devguide.rst

Docs Count: 55 ::

    ./README.rst
    ./index.rst
    ./getting-started/index.rst
       ./getting-started/fixing-issues.rst
       ./getting-started/getting-help.rst
       ./getting-started/git-boot-camp.rst
       ./getting-started/pull-request-lifecycle.rst
       ./getting-started/setup-building.rst
    ./developer-workflow/index.rst
       ./developer-workflow/c-api.rst
       ./developer-workflow/communication-channels.rst
       ./developer-workflow/development-cycle.rst
       ./developer-workflow/extension-modules.rst
       ./developer-workflow/grammar.rst
       ./developer-workflow/lang-changes.rst
       ./developer-workflow/porting.rst
       ./developer-workflow/stdlib.rst
    ./triage/index.rst
       ./triage/github-bpo-faq.rst
       ./triage/issue-tracker.rst
       ./triage/labels.rst
       ./triage/triage-team.rst
       ./triage/triaging.rst
    ./documentation/index.rst
       ./documentation/devguide.rst
       ./documentation/help-documenting.rst
       ./documentation/markup.rst
       ./documentation/start-documenting.rst
       ./documentation/style-guide.rst
       ./documentation/translating.rst
    ./testing/index.rst
       ./testing/coverage.rst
       ./testing/new-buildbot-worker.rst
       ./testing/run-write-tests.rst
       ./testing/silence-warnings.rst
    ./development-tools/index.rst
       ./development-tools/clang.rst
       ./development-tools/clinic.rst
       ./development-tools/coverity.rst
       ./development-tools/gdb.rst
    ./core-developers/index.rst
       ./core-developers/become-core-developer.rst
       ./core-developers/committing.rst
       ./core-developers/developer-log.rst
       ./core-developers/experts.rst
       ./core-developers/motivations.rst
       ./core-developers/responsibilities.rst
    ./internals/index.rst
       ./internals/compiler.rst
       ./internals/exploring.rst
       ./internals/garbage-collector.rst
       ./internals/interpreter.rst
       ./internals/parser.rst
       ./testing/buildbots.rst
    ./versions.rst


===================================================
/. 🚀 ./README.rst
===================================================

The CPython Developer's Guide
=============================

|ReadTheDocs| |Discourse| |Codestyle|

.. |ReadTheDocs| image:: https://readthedocs.org/projects/cpython-devguide/badge/
   :target: https://devguide.python.org
   :alt: Documentation Status

.. |Discourse| image:: https://img.shields.io/badge/discourse-join_chat-brightgreen.svg
   :alt: Python Discourse chat
   :target: https://discuss.python.org/

.. |Codestyle| image:: https://img.shields.io/badge/code%20style-black-000000.svg
   :target: https://github.com/psf/black
   :alt: Code style is black


This guide covers how to contribute to CPython. It is known by the
nickname of "the devguide" by the Python core developers.

The official home of this guide is https://devguide.python.org.

Render HTML
-----------

To render the devguide to HTML under ``_build/html``, run::

    make html


===================================================
/. 🚀 ./index.rst
===================================================

========================
Python Developer's Guide
========================

.. raw:: html

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      activateTab(getOS());
    });
    </script>

.. highlight:: bash

This guide is a comprehensive resource for :ref:`contributing <contributing>`
to Python_ -- for both new and experienced contributors. It is
:ref:`maintained <devguide>` by the same
community that maintains Python.  We welcome your contributions to Python!

.. _quick-reference:

Quick reference
---------------

Here are the basic steps needed to get set up and contribute a patch.
This is meant as a checklist, once you know the basics. For complete
instructions please see the :ref:`setup guide <setup>`.

1. Install and set up :ref:`Git <vcsetup>` and other dependencies
   (see the :ref:`Git Setup <setup>` page for detailed information).

2. Fork `the CPython repository <https://github.com/python/cpython>`_
   to your GitHub account and :ref:`get the source code <checkout>` using::

      git clone https://github.com/<your_username>/cpython
      cd cpython

3. Build Python:

   .. tab:: Unix

      .. code-block:: shell

         ./configure --with-pydebug && make -j

   .. tab:: macOS

      .. code-block:: shell

         ./configure --with-pydebug && make -j

   .. tab:: Windows

      .. code-block:: dosbatch

         PCbuild\build.bat -e -d

   See also :ref:`more detailed instructions <compiling>`,
   :ref:`how to install and build dependencies <build-dependencies>`,
   and the platform-specific pages for :ref:`Unix <unix-compiling>`,
   :ref:`macOS`, and :ref:`Windows <windows-compiling>`.

4. :ref:`Run the tests <runtests>`:

   .. tab:: Unix

      .. code-block:: shell

         ./python -m test -j3

   .. tab:: macOS

      .. code-block:: shell

         ./python.exe -m test -j3

      Note: :ref:`Most <mac-python.exe>` macOS systems use
      :file:`./python.exe` in order to avoid filename conflicts with
      the ``Python`` directory.

   .. tab:: Windows

      .. code-block:: dosbatch

         .\python.bat -m test -j3

5. Create a new branch where your work for the issue will go, e.g.::

      git checkout -b fix-issue-12345 main

   If an issue does not already exist, please `create it
   <https://github.com/python/cpython/issues>`_.  Trivial issues (e.g. typo fixes) do
   not require any issue to be created.

6. Once you fixed the issue, run the tests, and the patchcheck:

   .. tab:: Unix

      .. code-block:: shell

         make patchcheck

   .. tab:: macOS

      .. code-block:: shell

         make patchcheck

   .. tab:: Windows

      .. code-block:: dosbatch

         .\python.bat Tools\patchcheck\patchcheck.py

   If everything is ok, commit.

7. Push the branch on your fork on GitHub and :ref:`create a pull request
   <pullrequest>`.  Include the issue number using ``gh-NNNN`` in the
   pull request description.  For example::

      gh-12345: Fix some bug in spam module

8. Add a News entry into the ``Misc/NEWS.d`` directory as individual file. The
   news entry can be created by using `blurb-it <https://blurb-it.herokuapp.com/>`_,
   or the `blurb <https://pypi.org/project/blurb/>`_ tool and its ``blurb add``
   command. Please read more about ``blurb`` in its
   `repository <https://github.com/python/core-workflow/tree/main/blurb>`_.

.. note::

   First time contributors will need to sign the Contributor Licensing
   Agreement (CLA) as described in the :ref:`Licensing <cla>` section of
   this guide.

Quick links
-----------

Here are some links that you probably will reference frequently while
contributing to Python:

* `Issue tracker`_
* `Buildbot status`_
* :ref:`help`
* PEPs_ (Python Enhancement Proposals)
* :ref:`gitbootcamp`

.. _contributing:

Contributing
------------

We encourage everyone to contribute to Python and that's why we have put up this
developer's guide.  If you still have questions after reviewing the material in
this guide, then the `Core Python Mentorship`_ group is available to help guide new
contributors through the process.

A number of individuals from the Python community have contributed to a series
of excellent guides at `Open Source Guides <https://opensource.guide/>`_.

Core developers and contributors alike will find the following guides useful:

* `How to Contribute to Open Source <https://opensource.guide/how-to-contribute/>`_
* `Building Welcoming Communities <https://opensource.guide/building-community/>`_

Guide for contributing to Python:

======================== =================== ======================= =======================
Contributors             Documentarians      Triagers                Core Developers
======================== =================== ======================= =======================
:ref:`setup`             :ref:`docquality`   :ref:`tracker`          :ref:`responsibilities`
:ref:`help`              :ref:`documenting`  :ref:`triaging`         :ref:`developers`
:ref:`pullrequest`       :ref:`style-guide`  :ref:`helptriage`       :ref:`committing`
:ref:`runtests`          :ref:`rst-primer`   :ref:`experts`          :ref:`devcycle`
:ref:`fixingissues`      :ref:`translating`  :ref:`labels`           :ref:`motivations`
:ref:`communication`     :ref:`devguide`     :ref:`gh-faq`           :ref:`office hour`
:ref:`gitbootcamp`                           :ref:`triage-team`      :ref:`experts`
:ref:`devcycle`
======================== =================== ======================= =======================

We **recommend** that the documents in this guide be read as needed. You
can stop where you feel comfortable and begin contributing immediately without
reading and understanding these documents all at once.  If you do choose to skip
around within the documentation, be aware that it is written assuming preceding
documentation has been read so you may find it necessary to backtrack to fill in
missing concepts and terminology.


Proposing changes to Python itself
----------------------------------

Improving Python's code, documentation and tests are ongoing tasks that are
never going to be "finished", as Python operates as part of an ever-evolving
system of technology.  An even more challenging ongoing task than these
necessary maintenance activities is finding ways to make Python, in the form of
the standard library and the language definition, an even better tool in a
developer's toolkit.

While these kinds of change are much rarer than those described above, they do
happen and that process is also described as part of this guide:

* :ref:`stdlibchanges`
* :ref:`langchanges`


Other interpreter implementations
---------------------------------

This guide is specifically for contributing to the Python reference interpreter,
also known as CPython (while most of the standard library is written in Python,
the interpreter core is written in C and integrates most easily with the C and
C++ ecosystems).

There are other Python implementations, each with a different focus.  Like
CPython, they always have more things they would like to do than they have
developers to work on them.  Some major examples that may be of interest are:

* PyPy_: A Python interpreter focused on high speed (JIT-compiled) operation
  on major platforms
* Jython_: A Python interpreter focused on good integration with the Java
  Virtual Machine (JVM) environment
* IronPython_: A Python interpreter focused on good integration with the
  Common Language Runtime (CLR) provided by .NET and Mono
* Stackless_: A Python interpreter focused on providing lightweight
  microthreads while remaining largely compatible with CPython specific
  extension modules
* MicroPython_: A tiny Python interpreter with small subset of the Python
  standard library that is optimised to run on microcontrollers and in
  constrained environments.
* CircuitPython_: A fork of MicroPython designed to simplify experimenting
  and learning to code on low-cost microcontroller boards.


Key resources
-------------

* Coding style guides

  * :PEP:`7` (Style Guide for C Code)
  * :PEP:`8` (Style Guide for Python Code)

* `Issue tracker`_

  * :ref:`experts`

* `Buildbot status`_
* Source code

  * `Browse online <https://github.com/python/cpython/>`_
  * `Snapshot of the *main* branch <https://github.com/python/cpython/archive/main.zip>`_

* PEPs_ (Python Enhancement Proposals)
* :ref:`help`
* :ref:`developers`


.. _resources:

Additional resources
--------------------

* Anyone can clone the sources for this guide.  See :ref:`devguide`.
* Help with ...

  * :ref:`exploring`
  * :ref:`grammar`
  * :ref:`parser`
  * :ref:`compiler`
  * :ref:`garbage_collector`

* Tool support

  * :ref:`gdb`
  * :ref:`clang`
  * Various tools with configuration files as found in the `Misc directory`_
  * Information about editors and their configurations can be found in the
    `wiki <https://wiki.python.org/moin/PythonEditors>`_

* `python.org maintenance`_
* :ref:`Search this guide <search>`


Code of conduct
---------------
Please note that all interactions on
`Python Software Foundation <https://www.python.org/psf-landing/>`__-supported
infrastructure is `covered
<https://www.python.org/psf/records/board/minutes/2014-01-06/#management-of-the-psfs-web-properties>`__
by the `PSF Code of Conduct <https://www.python.org/psf/conduct/>`__,
which includes all infrastructure used in the development of Python itself
(e.g. mailing lists, issue trackers, GitHub, etc.).
In general this means everyone is expected to be open, considerate, and
respectful of others no matter what their position is within the project.

Status of Python branches
-------------------------

Moved to :ref:`versions`

.. _contents:

Full table of contents
----------------------

.. toctree::
   :maxdepth: 3

   getting-started/index
   developer-workflow/index
   triage/index
   documentation/index
   testing/index
   development-tools/index
   core-developers/index
   internals/index
   versions

.. _Buildbot status: https://www.python.org/dev/buildbot/
.. _Misc directory: https://github.com/python/cpython/tree/main/Misc
.. _PEPs: https://peps.python.org/
.. _python.org maintenance: https://pythondotorg.readthedocs.io/
.. _Python: https://www.python.org/
.. _Core Python Mentorship: https://www.python.org/dev/core-mentorship/
.. _PyPy: https://www.pypy.org
.. _Jython: https://www.jython.org/
.. _IronPython: https://ironpython.net/
.. _Stackless: https://github.com/stackless-dev/stackless/wiki/
.. _MicroPython: https://micropython.org/
.. _CircuitPython: https://circuitpython.org/
.. _Issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./getting-started/index.rst
===================================================

===============
Getting started
===============

.. toctree::
   :maxdepth: 5

   setup-building
   fixing-issues
   git-boot-camp
   pull-request-lifecycle
   getting-help


===================================================
/. 🚀 ./getting-started/setup-building.rst
===================================================

.. _setup-building:
.. _setup:

==================
Setup and building
==================

.. highlight:: console

These instructions cover how to get a working copy of the source code and a
compiled version of the CPython interpreter (CPython is the version of Python
available from https://www.python.org/). It also gives an overview of the
directory structure of the CPython source code.

Alternatively, if you have `Docker <https://www.docker.com/>`_ installed you
might want to use `our official images
<https://gitlab.com/python-devs/ci-images/blob/main/README.md>`_.  These
contain the latest releases of several Python versions, along with Git head,
and are provided for development and testing purposes only.

.. seealso::

   The :ref:`quick-reference` gives brief summary of the process from
   installing Git to submitting a pull request.

.. _vcsetup:

Install Git
===========

CPython is developed using `Git <https://git-scm.com>`_ for version control. The Git
command line program is named ``git``; this is also used to refer to Git
itself. Git is easily available for all common operating systems.

- **Install**

  As the CPython repo is hosted on GitHub, please refer to either the
  `GitHub setup instructions <https://docs.github.com/en/get-started/quickstart/set-up-git>`_
  or the `Git project instructions <https://git-scm.com>`_ for step-by-step
  installation directions. You may also want to consider a graphical client
  such as `TortoiseGit <https://tortoisegit.org/>`_ or
  `GitHub Desktop <https://desktop.github.com/>`_.

- **Configure**

  Configure :ref:`your name and email <set-up-name-email>` and create
  `an SSH key <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>`_
  as this will allow you to interact with GitHub without typing a username
  and password each time you execute a command, such as ``git pull``,
  ``git push``, or ``git fetch``.  On Windows, you should also
  :ref:`enable autocrlf <autocrlf>`.


.. _checkout:

Get the source code
===================

The CPython repo is hosted on GitHub. To get a copy of the source code you should
:ref:`fork the Python repository on GitHub <fork-cpython>`, :ref:`create a local
clone of your personal fork, and configure the remotes <clone-your-fork>`.

You will only need to execute these steps once per machine:

1. Go to https://github.com/python/cpython.

2. Press :guilabel:`Fork` on the top right.

3. When asked where to fork the repository, choose to fork it to your username.

4. Your fork will be created at :samp:`https://github.com/{<username>}/cpython`.

5. Clone your GitHub fork (replace ``<username>`` with your username)::

      $ git clone git@github.com:<username>/cpython.git

   (You can use both SSH-based or HTTPS-based URLs.)

.. Step 6 and 7 are are duplicated in bootcamp as well.
   Please update these steps in both places.

6. Add an ``upstream`` remote, then configure ``git``
   to pull ``main`` from ``upstream`` and always push to ``origin``::

      $ cd cpython
      $ git remote add upstream https://github.com/python/cpython
      $ git config --local branch.main.remote upstream
      $ git remote set-url --push upstream git@github.com:<your-username>/cpython.git

7. Verify that your setup is correct::

      $ git remote -v
      origin  git@github.com:<your-username>/cpython.git (fetch)
      origin  git@github.com:<your-username>/cpython.git (push)
      upstream        https://github.com/python/cpython (fetch)
      upstream        git@github.com:<your-username>/cpython.git (push)
      $ git config branch.main.remote
      upstream

For more information about these commands see
:ref:`Git Bootcamp and Cheat Sheet <git-boot-camp>`.

If you did everything correctly, you should now have a copy of the code
in the ``cpython`` directory and two remotes that refer to your own GitHub fork
(``origin``) and the official CPython repository (``upstream``).

.. XXX move the text below in pullrequest

If you want a working copy of an already-released version of Python,
i.e., a version in :ref:`maintenance mode <maintbranch>`, you can checkout
a release branch. For instance, to checkout a working copy of Python 3.8,
do ``git switch 3.8``.

You will need to re-compile CPython when you do such an update.

Do note that CPython will notice that it is being run from a working copy.
This means that if you edit CPython's source code in your working copy,
changes to Python code will be picked up by the interpreter for immediate
use and testing.  (If you change C code, you will need to recompile the
affected files as described below.)

Patches for the documentation can be made from the same repository; see
:ref:`documenting`.


.. _compiling:

Compile and build
=================

CPython provides several compilation flags which help with debugging various
things. While all of the known flags can be found in the
``Misc/SpecialBuilds.txt`` file, the most critical one is the ``Py_DEBUG`` flag
which creates what is known as a "pydebug" build. This flag turns on various
extra sanity checks which help catch common issues. The use of the flag is so
common that turning on the flag is a basic compile option.

You should always develop under a pydebug build of CPython (the only instance of
when you shouldn't is if you are taking performance measurements). Even when
working only on pure Python code the pydebug build provides several useful
checks that one should not skip.

.. seealso:: The effects of various configure and build flags are documented in
   the `Python configure docs <https://docs.python.org/dev/using/configure.html>`_.

.. _unix-compiling:

Unix
----

The core CPython interpreter only needs a C compiler to be built,
however, some of the extension modules will need development headers
for additional libraries (such as the ``zlib`` library for compression).
Depending on what you intend to work on, you might need to install these
additional requirements so that the compiled interpreter supports the
desired features.

If you want to install these optional dependencies, consult the
:ref:`build-dependencies` section below.

If you don't need to install them, the basic steps for building Python
for development is to configure it and then compile it.

Configuration is typically::

   $ ./configure --with-pydebug

More flags are available to ``configure``, but this is the minimum you should
do to get a pydebug build of CPython.

.. note::
   You might need to run ``make clean`` before or after re-running ``configure``
   in a particular build directory.

Once ``configure`` is done, you can then compile CPython with::

   $ make -s -j2

This will build CPython with only warnings and errors being printed to
stderr and utilize up to 2 CPU cores. If you are using a multi-core machine
with more than 2 cores (or a single-core machine), you can adjust the number
passed into the ``-j`` flag to match the number of cores you have (or if your
version of Make supports it, you can use ``-j`` without a number and Make
will not limit the number of steps that can run simultaneously.).

At the end of the build you should see a success message, followed
by a list of extension modules that haven't been built because their
dependencies were missing:

.. code-block:: none

   The necessary bits to build these optional modules were not found:
   _gdbm
   To find the necessary bits, look in configure.ac and config.log.

   Checked 106 modules (31 built-in, 74 shared, 0 n/a on macosx-13.4-arm64, 0 disabled, 1 missing, 0 failed on import)

If the build failed and you are using a C89 or C99-compliant compiler,
please open a bug report on the `issue tracker`_.

If you decide to :ref:`build-dependencies`, you will need to re-run both
``configure`` and ``make``.

.. _mac-python.exe:

Once CPython is done building you will then have a working build
that can be run in-place; ``./python`` on most machines (and what is used in
all examples), ``./python.exe`` wherever a case-insensitive filesystem is used
(e.g. on macOS by default), in order to avoid conflicts with the ``Python``
directory. There is normally no need to install your built copy
of Python! The interpreter will realize where it is being run from
and thus use the files found in the working copy.  If you are worried
you might accidentally install your working copy build, you can add
``--prefix=/tmp/python`` to the configuration step.  When running from your
working directory, it is best to avoid using the ``--enable-shared`` flag
to ``configure``; unless you are very careful, you may accidentally run
with code from an older, installed shared Python library rather than from
the interpreter you just built.


Clang
'''''

If you are using clang_ to build CPython, some flags you might want to set to
quiet some standard warnings which are specifically superfluous to CPython are
``-Wno-unused-value -Wno-empty-body -Qunused-arguments``. You can set your
``CFLAGS`` environment variable to these flags when running ``configure``.

If you are using clang_ with ccache_, turn off the noisy
``parentheses-equality`` warnings with the ``-Wno-parentheses-equality`` flag.
These warnings are caused by clang not  having enough information to detect
that extraneous parentheses in expanded macros are valid, because the
preprocessing is done separately by ccache.

If you are using LLVM 2.8, also use the ``-no-integrated-as`` flag in order to
build the :py:mod:`ctypes` module (without the flag the rest of CPython will
still build properly).


Optimization
''''''''''''

If you are trying to improve CPython's performance, you will probably want
to use an optimized build of CPython. It can take a lot longer to build CPython
with optimizations enabled, and it's usually not necessary to do so. However,
it's essential if you want accurate benchmark results for a proposed performance
optimization.

For an optimized build of Python, use
``configure --enable-optimizations --with-lto``.
This sets the default make targets up to enable Profile Guided Optimization (PGO)
and may be used to auto-enable Link Time Optimization (LTO) on some platforms.
See :option:`python:--enable-optimizations` and :option:`python:--with-lto`
to learn more about these options.

.. code:: console

   $ ./configure --enable-optimizations --with-lto


.. _windows-compiling:

Windows
-------

.. note:: If you are using the Windows Subsystem for Linux (WSL),
   :ref:`clone the repository <checkout>` from a native Windows shell program
   like PowerShell or the ``cmd.exe`` command prompt,
   and use a build of Git targeted for Windows,
   e.g. the `Git for Windows download from the official Git website`_.
   Otherwise, Visual Studio will not be able to find all the project's files
   and will fail the build.

For a concise step by step summary of building Python on Windows,
you can read `Victor Stinner's guide`_.

All supported versions of Python can be built
using Microsoft Visual Studio 2017 or later.
You can download and use any of the free or paid versions of `Visual Studio`_.

When installing it, select the :guilabel:`Python development` workload
and the optional :guilabel:`Python native development tools` component
to obtain all of the necessary build tools.
You can find Git for Windows on the :guilabel:`Individual components` tab
if you don't already have it installed.

.. note:: If you want to build MSI installers, be aware that the build toolchain
   for them has a dependency on the Microsoft .NET Framework Version 3.5
   (which may not be included on recent versions of Windows, such as Windows 10).
   If you are building on a recent Windows version, use the Control Panel
   (:menuselection:`Programs --> Programs and Features --> Turn Windows Features on or off`)
   and ensure that the entry
   :guilabel:`.NET Framework 3.5 (includes .NET 2.0 and 3.0)` is enabled.

Your first build should use the command line to ensure any external dependencies
are downloaded:

.. code-block:: batch

   PCbuild\build.bat -c Debug

The above command line build uses the ``-c Debug`` argument
to build in the ``Debug`` configuration,
which enables checks and assertions helpful for developing Python.
By default, it builds in the ``Release`` configuration
and for the 64-bit ``x64`` platform rather than 32-bit ``Win32``;
use ``-c`` and ``-p`` to control build config and platform, respectively.

After this build succeeds, you can open the ``PCbuild\pcbuild.sln`` solution
in the Visual Studio IDE to continue development, if you prefer.
When building in Visual Studio,
make sure to select build settings that match what you used with the script
(the :guilabel:`Debug` configuration and the :guilabel:`x64` platform)
from the dropdown menus in the toolbar.

.. note::

   If you need to change the build configuration or platform,
   build once with the ``build.bat`` script set to those options first
   before building with them in VS to ensure all files are rebuilt properly,
   or you may encounter errors when loading modules that were not rebuilt.

   Avoid selecting the ``PGInstrument`` and ``PGUpdate`` configurations,
   as these are intended for PGO builds and not for normal development.

You can run the build of Python you've compiled with:

.. code-block:: batch

   PCbuild\amd64\python_d.exe

See the `PCBuild readme`_ for more details on what other software is necessary
and how to build.

.. _Victor Stinner's guide: https://web.archive.org/web/20220907075854/https://cpython-core-tutorial.readthedocs.io/en/latest/build_cpython_windows.html
.. _Visual Studio: https://visualstudio.microsoft.com/
.. _PCBuild readme: https://github.com/python/cpython/blob/main/PCbuild/readme.txt
.. _Git for Windows download from the official Git website: https://git-scm.com/download/win


.. _build-dependencies:

Install dependencies
====================

This section explains how to install additional extensions (e.g. ``zlib``)
on :ref:`Linux <deps-on-linux>` and :ref:`macOS`.  On Windows,
extensions are already included and built automatically.

.. _deps-on-linux:

Linux
-----

For Unix-based systems, we try to use system libraries whenever available.
This means optional components will only build if the relevant system headers
are available. The best way to obtain the appropriate headers will vary by
distribution, but the appropriate commands for some popular distributions
are below.

On **Fedora**, **Red Hat Enterprise Linux** and other ``yum`` based systems::

   $ sudo yum install yum-utils
   $ sudo yum-builddep python3

On **Fedora** and other ``DNF`` based systems::

   $ sudo dnf install dnf-plugins-core  # install this to use 'dnf builddep'
   $ sudo dnf builddep python3

On **Debian**, **Ubuntu**, and other ``apt`` based systems, try to get the
dependencies for the Python you're working on by using the ``apt`` command.

First, make sure you have enabled the source packages in the sources list.
You can do this by adding the location of the source packages, including
URL, distribution name and component name, to ``/etc/apt/sources.list``.
Take Ubuntu 22.04 LTS (Jammy Jellyfish) for example::

   deb-src http://archive.ubuntu.com/ubuntu/ jammy main

Alternatively, uncomment lines with ``deb-src`` using an editor, e.g.::

   sudo nano /etc/apt/sources.list

For other distributions, like Debian, change the URL and names to correspond
with the specific distribution.

Then you should update the packages index::

   $ sudo apt-get update

Now you can install the build dependencies via ``apt``::

   $ sudo apt-get build-dep python3
   $ sudo apt-get install pkg-config

If you want to build all optional modules, install the following packages and
their dependencies::

   $ sudo apt-get install build-essential gdb lcov pkg-config \
         libbz2-dev libffi-dev libgdbm-dev libgdbm-compat-dev liblzma-dev \
         libncurses5-dev libreadline6-dev libsqlite3-dev libssl-dev \
         lzma lzma-dev tk-dev uuid-dev zlib1g-dev


.. _macOS and OS X:
.. _macOS:

macOS
-----

For **macOS systems** (versions 10.9+),
the Developer Tools can be downloaded and installed automatically;
you do not need to download the complete Xcode application.

If necessary, run the following::

    $ xcode-select --install

This will also ensure that the system header files are installed into
``/usr/include``.

.. _Homebrew: https://brew.sh

.. _MacPorts: https://www.macports.org

Also note that macOS does not include several libraries used by the Python
standard library, including ``libzma``, so expect to see some extension module
build failures unless you install local copies of them.  As of OS X 10.11,
Apple no longer provides header files for the deprecated system version of
OpenSSL which means that you will not be able to build the ``_ssl`` extension.
One solution is to install these libraries from a third-party package
manager, like Homebrew_ or MacPorts_, and then add the appropriate paths
for the header and library files to your ``configure`` command.

For example, with **Homebrew**, install the dependencies::

    $ brew install pkg-config openssl@3.0 xz gdbm tcl-tk

Then, for Python 3.11 and newer, run ``configure``::

    $ GDBM_CFLAGS="-I$(brew --prefix gdbm)/include" \
      GDBM_LIBS="-L$(brew --prefix gdbm)/lib -lgdbm" \
      ./configure --with-pydebug \
                  --with-openssl="$(brew --prefix openssl@3.0)"

Or, for Python 3.8 through 3.10::

    $ CPPFLAGS="-I$(brew --prefix gdbm)/include -I$(brew --prefix xz)/include" \
      LDFLAGS="-L$(brew --prefix gdbm)/lib -L$(brew --prefix xz)/lib" \
      ./configure --with-pydebug \
                  --with-openssl="$(brew --prefix openssl@3.0)" \
                  --with-tcltk-libs="$(pkg-config --libs tcl tk)" \
                  --with-tcltk-includes="$(pkg-config --cflags tcl tk)"

And finally, run ``make``::

    $ make -s -j2

Alternatively, with **MacPorts**::

    $ sudo port install pkgconfig openssl xz gdbm tcl tk +quartz

Then, for Python 3.11 and newer, run ``configure``::

    $ GDBM_CFLAGS="-I$(dirname $(dirname $(which port)))/include" \
      GDBM_LIBS="-L$(dirname $(dirname $(which port)))/lib -lgdbm" \
      ./configure --with-pydebug

And finally, run ``make``::

    $ make -s -j2

There will sometimes be optional modules added for a new release which
won't yet be identified in the OS-level build dependencies. In those cases,
just ask for assistance in the *Core Development* category on :ref:`help-discourse`.

Explaining how to build optional dependencies on a Unix-based system without
root access is beyond the scope of this guide.

For more details on various options and considerations for building, refer
to the `macOS README
<https://github.com/python/cpython/blob/main/Mac/README.rst>`_.

.. _clang: https://clang.llvm.org/
.. _ccache: https://ccache.dev/

.. note:: While you need a C compiler to build CPython, you don't need any
   knowledge of the C language to contribute!  Vast areas of CPython are
   written completely in Python: as of this writing, CPython contains slightly
   more Python code than C.


.. _regenerate_configure:

Regenerate ``configure``
========================

If a change is made to Python which relies on some POSIX system-specific
functionality (such as using a new system call), it is necessary to update the
:cpy-file:`configure` script to test for availability of the functionality.
Python's :file:`configure` script is generated from :cpy-file:`configure.ac`
using `GNU Autoconf <https://www.gnu.org/software/autoconf/>`_.

After editing :file:`configure.ac`, run ``make regen-configure`` to generate
:file:`configure`, :cpy-file:`pyconfig.h.in`, and :cpy-file:`aclocal.m4`.
When submitting a pull request with changes made to :file:`configure.ac`,
make sure you also commit the changes in the generated files.

The recommended and by far the easiest way to regenerate :file:`configure` is::

   $ make regen-configure

If you are regenerating :file:`configure` in a clean repo,
run one of the following containers instead::

   $ podman run --rm --pull=always -v $(pwd):/src:Z quay.io/tiran/cpython_autoconf:271

::

   $ docker run --rm --pull=always -v $(pwd):/src quay.io/tiran/cpython_autoconf:271

Notice that the images are tagged with ``271``.
Python's :file:`configure.ac` script requires a specific version of
GNU Autoconf.
For Python 3.12 and newer, GNU Autoconf v2.71 is required.
For Python 3.11 and earlier, GNU Autoconf v2.69 is required.
For GNU Autoconf v2.69, change the ``:271`` tag to ``:269``.

If you cannot (or don't want to) use the ``cpython_autoconf`` containers,
install the :program:`autoconf-archive` and :program:`pkg-config` utilities,
and make sure the :file:`pkg.m4` macro file located in the appropriate
:program:`aclocal` location::

   $ ls $(aclocal --print-ac-dir) | grep pkg.m4

.. note::

   Running :program:`autoreconf` is not the same as running :program:`autoconf`.
   For example, running :program:`autoconf` by itself will not regenerate
   :file:`pyconfig.h.in`.
   :program:`autoreconf` runs :program:`autoconf` and a number of other tools
   repeatedly as appropriate.

.. _build_troubleshooting:

Regenerate the ABI dump
=======================

Maintenance branches (not ``main``) have a special file located in
``Doc/data/pythonX.Y.abi`` that allows us to know if a given Pull Request
affects the public ABI. This file is used by the GitHub CI in a check
called ``Check if the ABI has changed`` that will fail if a given Pull Request
has changes to the ABI and the ABI file is not updated.

This check acts as a fail-safe and **doesn't necessarily mean that the Pull
Request cannot be merged**. When this check fails you should add the relevant
release manager to the PR so that they are aware of the change and they can
validate if the change can be made or not.

.. important::
   ABI changes are allowed before the first release candidate. After the first release
   candidate, all further releases must have the same ABI for ensuring compatibility
   with native extensions and other tools that interact with the Python interpreter.
   See the documentation about the :ref:`release candidate <rc>` phase.

When the PR check fails, the associated run will have the updated ABI file
attached as an artifact. After release manager approval, you can download and
add this file into your PR to pass the check.

You can regenerate the ABI file by yourself by invoking the ``regen abidump``
Make target. Note that for doing this you need to regenerate the ABI file in
the same environment that the GitHub CI uses to check for it. This is because
different platforms may include some platform-specific details that make the
check fail even if the Python ABI is the same. The easier way to regenerate
the ABI file using the same platform as the CI uses is by using Docker::

   # In the CPython root:
   $ docker run -v$(pwd):/src:Z -w /src --rm -it ubuntu:22.04 \
       bash /src/.github/workflows/regen-abidump.sh

Note that the ``ubuntu`` version used to execute the script matters and
**must** match the version used by the CI to check the ABI. See the
``.github/workflows/build.yml`` file for more information.

Troubleshoot the build
======================

This section lists some of the common problems that may arise during the
compilation of Python, with proposed solutions.

Avoid recreating auto-generated files
-------------------------------------

Under some circumstances you may encounter Python errors in scripts like
``Parser/asdl_c.py`` or ``Python/makeopcodetargets.py`` while running ``make``.
Python auto-generates some of its own code, and a full build from scratch needs
to run the auto-generation scripts. However, this makes the Python build require
an already installed Python interpreter; this can also cause version mismatches
when trying to build an old (2.x) Python with a new (3.x) Python installed, or
vice versa.

To overcome this problem, auto-generated files are also checked into the
Git repository. So if you don't touch the auto-generation scripts, there's
no real need to auto-generate anything.

Editors and tools
=================

Python is used widely enough that practically all code editors have some form
of support for writing Python code. Various coding tools also include Python
support.

For editors and tools which the core developers have felt some special comment
is needed for coding *in* Python, see :ref:`resources`.

.. _build-directory-structure:

Directory structure
===================

There are several top-level directories in the CPython source tree. Knowing what
each one is meant to hold will help you find where a certain piece of
functionality is implemented. Do realize, though, there are always exceptions to
every rule.

``Doc``
     The official documentation. This is what https://docs.python.org/ uses.
     See also :ref:`building-doc`.

``Grammar``
     Contains the :abbr:`EBNF (Extended Backus-Naur Form)` grammar file for
     Python.

``Include``
     Contains all interpreter-wide header files.

``Lib``
     The part of the standard library implemented in pure Python.

``Mac``
     Mac-specific code (e.g., using IDLE as a macOS application).

``Misc``
     Things that do not belong elsewhere. Typically this is varying kinds of
     developer-specific documentation.

``Modules``
     The part of the standard library (plus some other code) that is implemented
     in C.

``Objects``
     Code for all built-in types.

``PC``
     Windows-specific code.

``PCbuild``
     Build files for the version of MSVC currently used for the Windows
     installers provided on python.org.

``Parser``
     Code related to the parser. The definition of the AST nodes is also kept
     here.

``Programs``
     Source code for C executables, including the main function for the
     CPython interpreter.

``Python``
     The code that makes up the core CPython runtime. This includes the
     compiler, eval loop and various built-in modules.

``Tools``
     Various tools that are (or have been) used to maintain Python.


.. _issue tracker: https://github.com/python/cpython/issues


.. _using-codespaces:

Contribute using GitHub Codespaces
==================================

.. _codespaces-whats-codespaces:

What is GitHub Codespaces?
--------------------------

If you'd like to start contributing to CPython without needing to set up a local
developer environment, you can use
`GitHub Codespaces <https://github.com/features/codespaces>`_.
Codespaces is a cloud-based development environment offered by GitHub that
allows developers to write, build, test, and debug code directly within their
web browser or in Visual Studio Code (VS Code).

To help you get started, CPython contains a
`devcontainer folder <https://github.com/python/cpython/tree/main/.devcontainer>`_
with a JSON configuration file that provides consistent and versioned codespace
configurations for all users of the project. It also contains a Dockerfile that
allows you to set up the same environment but locally in a Docker container if
you'd prefer to use that directly.

.. _codespaces-create-a-codespace:

Create a CPython codespace
--------------------------

Here are the basic steps needed to contribute a patch using Codespaces.
You first need to navigate to the
`CPython repo <https://github.com/python/cpython>`_ hosted on GitHub.

Then you will need to:

1. Press the ``,`` key to launch the codespace setup screen for the current
   branch (alternatively, click the green :guilabel:`Code` button and choose
   the ``codespaces`` tab and then press the
   green :guilabel:`Create codespace on main` button).
2. A screen should appear that lets you know your codespace is being set up.
   (Note: Since the CPython devcontainer is provided, codespaces will use the
   configuration it specifies.)
3. A `web version of VS Code <https://vscode.dev/>`_ will open inside your web
   browser, already linked up with your code and a terminal to the remote
   codespace where CPython and its documentation have already been built.
4. Use the terminal with the usual Git commands to create a new branch, commit
   and push your changes once you're ready!

If you close your repository and come back later you can always resume your
codespace by navigating to the CPython repo, selecting the codespaces tab and
selecting your most recent codespaces session. You should then be able to pick
up from where you left off!

.. _codespaces-use-locally:

Use Codespaces locally
----------------------

On the bottom left side of the codespace screen you will see a green or grey
square that says :guilabel:`Codespaces`. You can click this for additional
options. If you prefer working in a locally installed copy of VS Code you can
select the option ``Open in VS Code``. You will still be working on the remote
codespace instance, thus using the remote instance's compute power. The compute
power may be a much higher spec than your local machine which can be helpful.


.. TODO: add docker instructions


===================================================
/. 🚀 ./getting-started/fixing-issues.rst
===================================================

.. _fixing-issues:
.. _fixingissues:

=================================
Fixing "easy" issues (and beyond)
=================================

When you feel comfortable enough to want to help tackle issues by trying to
create a patch to fix an issue, you can start by looking at the `"easy"
issues`_. These issues *should* be ones where it should take no longer than a
day or weekend to fix. But because the "easy" classification is typically done
at triage time it can turn out to be inaccurate, so do feel free to leave a
comment if you think the classification no longer applies.

For the truly adventurous looking for a challenge, you can look for issues that
are not considered easy and try to fix those. It must be warned, though, that
it is quite possible that a bug that has been left open has been left into that
state because of the difficulty compared to the benefit of the fix. It could
also still be open because no consensus has been reached on how to fix the
issue (although having a patch that proposes a fix can turn the tides of the
discussion to help bring it to a close). Regardless of why the issue is open,
you can also always provide useful comments if you do attempt a fix, successful
or not.

.. _"easy" issues: https://github.com/python/cpython/issues?q=is%3Aissue+is%3Aopen+label%3Aeasy

.. TODO: add something about no active core developer for the area?


===================================================
/. 🚀 ./getting-started/git-boot-camp.rst
===================================================

.. _git-boot-camp:
.. _gitbootcamp:

Git bootcamp and cheat sheet
============================

.. raw:: html

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      activateTab(getOS());
    });
    </script>

.. highlight:: console

.. note::

   This section provides instructions on common tasks in CPython's
   workflow. It's designed to assist new contributors who have
   some familiarity with Git and GitHub.

   If you are new to Git and GitHub, please become comfortable with
   these instructions before submitting a pull request. As there are several
   ways to accomplish these tasks using Git and GitHub, this section reflects
   one method suitable for new contributors. Experienced contributors may
   desire a different approach.


In this section, we will go over some commonly used Git commands that are
relevant to CPython's workflow.

.. note::
   Setting up Git aliases for common tasks can be useful to you. You can
   get more information about that in
   `Git documentation <https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases>`_

.. _fork-cpython:

Forking CPython GitHub repository
---------------------------------

You will only need to do this once.

1. Go to https://github.com/python/cpython.

2. Press ``Fork`` on the top right.

3. When asked where to fork the repository, choose to fork it to your username.

4. Your forked CPython repository will be created at https://github.com/<username>/cpython.

.. _clone-your-fork:

Cloning a forked CPython repository
-----------------------------------

You will only need to do this once per machine.  From your command line::

   git clone git@github.com:<username>/cpython.git

It is also recommended to configure an ``upstream`` remote repository::

   cd cpython
   git remote add upstream https://github.com/python/cpython

You can also use SSH-based or HTTPS-based URLs.

Configure the remotes
---------------------

.. These steps are duplicated in setup-building in step 6 and 7.
   Please update these there as well.

Configure ``git`` to pull ``main`` from the ``upstream`` remote::

   git config --local branch.main.remote upstream

Since one should never attempt to push to ``upstream``, configure
``git`` to push always to ``origin``::

   git remote set-url --push upstream git@github.com:<username>/cpython.git

Listing the remote repositories
-------------------------------

To list the remote repositories that are configured, along with their URLs::

   git remote -v

You should have two remote repositories: ``origin`` pointing to your forked CPython repository,
and ``upstream`` pointing to the official CPython repository::

   origin  git@github.com:<username>/cpython.git (fetch)
   origin  git@github.com:<username>/cpython.git (push)
   upstream        https://github.com/python/cpython (fetch)
   upstream        git@github.com:<username>/cpython.git (push)

To verify the upstream for ``main``::

   git config branch.main.remote

It should emit ``upstream``, indicating to track/pull changes for ``main`` from the
``upstream`` remote.


.. _set-up-name-email:

Setting up your name and email address
--------------------------------------

.. code-block:: bash

   git config --global user.name "Your Name"
   git config --global user.email your.email@example.com

The ``--global`` flag sets these parameters globally while
the ``--local`` flag sets them only for the current project.

.. _autocrlf:

Enabling ``autocrlf`` on Windows
--------------------------------

The ``autocrlf`` option will fix automatically any Windows-specific line endings.
This should be enabled on Windows, since the public repository has a hook which
will reject all changesets having the wrong line endings::

    git config --global core.autocrlf input

Creating and switching branches
-------------------------------

.. important::
   Never commit directly to the ``main`` branch.

Create a new branch from ``main`` and switch to it::

   git switch -c <branch-name> main

This is equivalent to::

   # create a new branch from main
   git branch <branch-name> main
   # switch to the new branch
   git switch <branch-name>

To find the branch you are currently on::

   git branch

The current branch will have an asterisk next to the branch name.  Note, this
will only list all of your local branches.

To list all the branches, including the remote branches::

   git branch -a

To switch to a different branch::

   git switch <another-branch-name>

Other releases are just branches in the repository.  For example, to work
on the 2.7 release from the ``upstream`` remote::

   git switch -c 2.7 upstream/2.7

.. _deleting_branches:

Deleting branches
-----------------

To delete a **local** branch that you no longer need::

   git switch main
   git branch -D <branch-name>

To delete a **remote** branch::

   git push origin -d <branch-name>

You may specify more than one branch for deletion.


Renaming branch
---------------

The CPython repository's default branch was renamed from ``master`` to
``main`` after the Python 3.10b1 release.

If you have a fork on GitHub (as described in :ref:`fork-cpython`) that was
created before the rename, you should visit the GitHub page for your fork to
rename the branch there. You only have to do this once. GitHub should
provide you with a dialog for this. If it doesn't (or the dialog was already
dismissed), you can rename the branch in your fork manually `by following
these GitHub instructions <https://github.com/github/renaming#renaming-existing-branches>`__.

After renaming the branch in your fork, you need to update any local clones
as well. This only has to be done once per clone::

    git branch -m master main
    git fetch origin
    git branch -u origin/main main
    git remote set-head origin -a

(GitHub also provides these instructions after you rename the branch.)

If you do not have a fork on GitHub, but rather a direct clone of the main
repo created before the branch rename, you still have to update your local
clones. This still only has to be done once per clone. In that case, you can
rename your local branch as follows::

    git branch -m master main
    git fetch upstream
    git branch -u upstream/main main


.. _commit-changes:

Staging and committing files
----------------------------

1. To show the current changes::

      git status

2. To stage the files to be included in your commit::

      git add -p  # to review and add changes to existing files
      git add <filename1> <filename2>  # to add new files

3. To commit the files that have been staged (done in step 2):

   .. code-block:: bash

      git commit -m "This is the commit message."

Reverting changes
-----------------

To revert changes to a file that has not been committed yet::

   git checkout <filename>

If the change has been committed, and now you want to reset it to whatever
the origin is at::

   git reset --hard HEAD

Stashing changes
----------------

To stash away changes that are not ready to be committed yet::

   git stash

To re-apply the last stashed change::

   git stash pop

.. _diff-changes:

Comparing changes
-----------------

View all non-commited changes::

   git diff

Compare to the ``main`` branch::

   git diff main

Exclude generated files from diff using an ``attr``
`pathspec <https://git-scm.com/docs/gitglossary#def_pathspec>`_ (note the
single quotes)::

   git diff main ':(attr:!generated)'

Exclude generated files from diff by default::

   git config diff.generated.binary true

The ``generated`` `attribute <https://git-scm.com/docs/gitattributes>`_ is
defined in :cpy-file:`.gitattributes`, found in the repository root.

.. _push-changes:

Pushing changes
---------------

Once your changes are ready for a review or a pull request, you will need to push
them to the remote repository.

::

   git switch <branch-name>
   git push origin <branch-name>

Creating a pull request
-----------------------

1. Go to https://github.com/python/cpython.

2. Press the ``New pull request`` button.

3. Click the ``compare across forks`` link.

4. Select the base repository: ``python/cpython`` and base branch: ``main``.

5. Select the head repository: ``<username>/cpython`` and head branch: the branch
   containing your changes.

6. Press the ``Create pull request`` button.

You should include the issue number in the title of the PR,
in the format ``gh-NNNNN: <PR Title>``.

Linking to issues and pull requests
-----------------------------------

You can link to issues and pull requests using ``gh-NNNNN`` (this form is
preferred over ``#NNNNN``).  If the reference appears in a list, the link
will be expanded to show the status and title of the issue/PR.

When you create a PR that includes ``gh-NNNNN`` in the title, `bedevere`_
will automatically add a link to the issue in the first message.

In addition, pull requests support `special keywords`_ that can be used to
link to an issue and automatically close it when the PR is merged.
However, issues often require multiple PRs before they can be closed (e.g.
backports to other branches), so this features is only useful if
you know for sure that a single PR is enough to address and close the issue.

.. _bedevere: https://github.com/python/bedevere
.. _special keywords: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword

Updating your CPython fork
--------------------------

Scenario:

- You forked the CPython repository some time ago.
- Time passes.
- There have been new commits made in the upstream CPython repository.
- Your forked CPython repository is no longer up to date.
- You now want to update your forked CPython repository to be the same as
  the upstream CPython repository.

Please do not try to solve this by creating a pull request from
``python:main`` to ``<username>:main`` as the authors of the patches will
get notified unnecessarily.

Solution::

   git switch main
   git pull upstream main
   git push origin main

.. note:: For the above commands to work, please follow the instructions found
          in the :ref:`checkout` section.

Another scenario:

- You created ``some-branch`` some time ago.
- Time passes.
- You made some commits to ``some-branch``.
- Meanwhile, there are recent changes from the upstream CPython repository.
- You want to incorporate the recent changes from the upstream CPython
  repository into ``some-branch``.

Solution::

   git switch some-branch
   git fetch upstream
   git merge upstream/main
   git push origin some-branch

You may see error messages like "CONFLICT" and "Automatic merge failed;" when
you run ``git merge upstream/main``.

When it happens, you need to resolve conflict.  See these articles about resolving conflicts:

- `About merge conflicts <https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts>`_
- `Resolving a merge conflict using the command line <https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>`_

.. _git_from_patch:

Applying a patch to Git
-----------------------

Scenario:

- A patch exists but there is no pull request for it.

Solution:

1. Download the patch locally.

2. Apply the patch::

       git apply /path/to/patch.diff

   If there are errors, update to a revision from when the patch was
   created and then try the ``git apply`` again:

   .. code-block:: bash

       git checkout $(git rev-list -n 1 --before="yyyy-mm-dd hh:mm:ss" main)
       git apply /path/to/patch.diff

   If the patch still won't apply, then a patch tool will not be able to
   apply the patch and it will need to be re-implemented manually.

3. If the apply was successful, create a new branch and switch to it.

4. Stage and commit the changes.

5. If the patch was applied to an old revision, it needs to be updated and
   merge conflicts need to be resolved::

       git rebase main
       git mergetool

   For very old changes, ``git merge --no-ff`` may be easier than a rebase,
   with regards to resolving conflicts.

6. Push the changes and open a pull request.

.. _git_pr:

Downloading other's patches
---------------------------

Scenario:

- A contributor made a pull request to CPython.
- Before merging it, you want to be able to test their changes locally.

If you've got `GitHub CLI <https://cli.github.com>`_ or
`hub <https://hub.github.com>`_ installed, you can do::

   $ gh co <pr_number>  # GitHub CLI
   $ hub pr checkout <pr_number>  # hub

Both of these tools will configure a remote URL for the branch, so you can
``git push`` if the pull request author checked "Allow edits from maintainers"
when creating the pull request.

If you don't have GitHub CLI or hub installed, you can set up a git alias:

.. tab:: Unix/macOS

   .. code-block:: shell

      $ git config --global alias.pr '!sh -c "git fetch upstream pull/${1}/head:pr_${1} && git checkout pr_${1}" -'

.. tab:: Windows

   .. code-block:: dosbatch

      git config --global alias.pr "!sh -c 'git fetch upstream pull/${1}/head:pr_${1} && git checkout pr_${1}' -"

The alias only needs to be done once.  After the alias is set up, you can get a
local copy of a pull request as follows::

   git pr <pr_number>

.. _accepting-and-merging-a-pr:

Accepting and merging a pull request
------------------------------------

Pull requests can be accepted and merged by a Python Core Developer.
You can read more about what to look for before accepting a change
:ref:`here <committing>`.

All pull requests have required checks that need to pass before a change
can be merged. At any point, a core developer can schedule an automatic merge
of the change by
clicking the gray ``Enable auto-merge (squash)`` button. You will find
it at the bottom of the pull request page. The auto-merge will only
happen if all the required checks pass, but the PR does not need to have been
approved for a successful auto-merge to take place.

If all required checks are already finished on a PR you're reviewing,
in place of the gray ``Enable auto-merge`` button you will find a green
``Squash and merge`` button.

In either case, adjust and clean up the commit message.

Here's an example of a **good** commit message::

   gh-12345: Improve the spam module (GH-777)

   * Add method A to the spam module
   * Update the documentation of the spam module

Here's an example of a **bad** commit message::

   gh-12345: Improve the spam module (#777)

   * Improve the spam module
   * merge from main
   * adjust code based on review comment
   * rebased

The bad example contains bullet points that are a direct effect of the
PR life cycle, while being irrelevant to the final change.

.. note::
   `How to Write a Git Commit Message <https://cbea.ms/git-commit/>`_
   is a nice article describing how to write a good commit message.

Finally, press the ``Confirm squash and merge`` button.

Cancelling an automatic merge
-----------------------------

If you notice a problem with a pull request that was accepted and where
auto-merge was enabled, you can still cancel the workflow before GitHub
automatically merges the change.

Press the gray "Disable auto-merge" button on the bottom of the
pull request page to disable automatic merging entirely. This is the
recommended approach.

To pause automatic merging, apply the "DO-NOT-MERGE" label to the PR or
submit a review requesting changes. The latter will put an "awaiting
changes" label on the PR, which pauses the auto-merge similarly to
"DO-NOT-MERGE". After the author submits a fix and re-requests review, you can
resume the auto-merge process either by submitting an approving review or by
dismissing your previous review that requested changes.

Note that pushing new changes after the auto-merge flow was enabled
does **NOT** stop it.

Backporting merged changes
--------------------------

A pull request may need to be backported into one of the maintenance branches
after it has been accepted and merged into ``main``.  It is usually indicated
by the label ``needs backport to X.Y`` on the pull request itself.

Use the utility script
`cherry_picker.py <https://github.com/python/cherry-picker>`_
from the `core-workflow  <https://github.com/python/core-workflow>`_
repository to backport the commit.

The commit hash for backporting is the squashed commit that was merged to
the ``main`` branch.  On the merged pull request, scroll to the bottom of the
page.  Find the event that says something like::

   <core_developer> merged commit <commit_sha1> into python:main <sometime> ago.

By following the link to ``<commit_sha1>``, you will get the full commit hash.

Alternatively, the commit hash can also be obtained by the following Git
commands:

.. code-block:: bash

   git fetch upstream
   git rev-parse ":/gh-12345"

The above commands will print out the hash of the commit containing
``"gh-12345"`` as part of the commit message.

When formatting the commit message for a backport commit: leave the original
one as is and delete the number of the backport pull request.

Example of good backport commit message::

    gh-12345: Improve the spam module (GH-777)

    * Add method A to the spam module
    * Update the documentation of the spam module

    (cherry picked from commit 62adc55)

Example of bad backport commit message::

    gh-12345: Improve the spam module (GH-777) (#888)

    * Add method A to the spam module
    * Update the documentation of the spam module

Editing a pull request prior to merging
---------------------------------------

When a pull request submitter has enabled the `Allow edits from maintainers`_
option, Python Core Developers may decide to make any remaining edits needed
prior to merging themselves, rather than asking the submitter to do them. This
can be particularly appropriate when the remaining changes are bookkeeping
items like updating ``Misc/ACKS``.

.. _Allow edits from maintainers: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork

To edit an open pull request that targets ``main``:

1. In the pull request page, under the description, there is some information
   about the contributor's forked CPython repository and branch name that will be useful later::

      <contributor> wants to merge 1 commit into python:main from <contributor>:<branch_name>

2. Fetch the pull request, using the :ref:`git pr <git_pr>` alias::

      git pr <pr_number>

   This will checkout the contributor's branch at ``<pr_number>``.

3. Make and commit your changes on the branch.  For example, merge in changes
   made to ``main`` since the PR was submitted (any merge commits will be
   removed by the later ``Squash and Merge`` when accepting the change):

   .. code-block:: bash

      git fetch upstream
      git merge upstream/main
      git add <filename>
      git commit -m "<message>"

4. Push the changes back to the contributor's PR branch::

      git push git@github.com:<contributor>/cpython <pr_number>:<branch_name>

5. Optionally, :ref:`delete the PR branch <deleting_branches>`.


GitHub CLI
----------

`GitHub CLI <https://cli.github.com>`_ is a command-line
interface that allows you to create, update, and check GitHub
issues and pull requests.

You can install GitHub CLI `by following these instructions
<https://github.com/cli/cli#installation>`_. After installing,
you need to authenticate::

    gh auth login

Examples of useful commands:

* Create a PR::

      gh pr create

* Check out another PR::

      gh co <pr-id>

* Set ``ssh`` as the Git protocol::

      gh config set git_protocol ssh

* Set the browser::

      gh config set browser <browser-path>


===================================================
/. 🚀 ./getting-started/pull-request-lifecycle.rst
===================================================

.. _pull-request-lifecycle:
.. _patch:
.. _pullrequest:

===========================
Lifecycle of a pull request
===========================

.. highlight:: bash

Introduction
============

CPython uses a workflow based on pull requests. What this means is
that you create a branch in Git, make your changes, push those changes
to your fork on GitHub (``origin``), and then create a pull request against
the official CPython repository (``upstream``).


.. _pullrequest-quickguide:

Quick guide
===========

`Clear communication`_ is key to contributing to any project, especially an
`Open Source`_ project like CPython.

Here is a quick overview of how you can contribute to CPython:

#. `Create an issue`_ that describes your change [*]_

#. :ref:`Create a new branch in Git <pullrequest-steps>` from the
   ``main`` branch

#. Work on changes (e.g. fix a bug or add a new feature)

#. :ref:`Run tests <runtests>` and ``make patchcheck``

#. :ref:`Commit <commit-changes>` and :ref:`push <push-changes>`
   changes to your GitHub fork

#. `Create Pull Request`_ on GitHub to merge a branch from your fork

#. Make sure the continuous integration checks on your Pull Request
   are green (i.e. successful)

#. Review and address `comments on your Pull Request`_

#. When your changes are merged, you can :ref:`delete the PR branch
   <deleting_branches>`

#. Celebrate contributing to CPython! :)

.. [*] If an issue is trivial (e.g. typo fixes), or if an issue already exists,
       you can skip this step.

.. note::
   In order to keep the commit history intact, please avoid squashing or amending
   history and then force-pushing to the PR. Reviewers often want to look at
   individual commits.

.. _Clear communication: https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution
.. _Open Source: https://opensource.guide/
.. _create an issue: https://github.com/python/cpython/issues
.. _CPython: https://github.com/python/cpython
.. _use HTTPS: https://help.github.com/articles/which-remote-url-should-i-use/
.. _Create Pull Request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
.. _comments on your Pull Request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request


.. _pullrequest-steps:

Step-by-step guide
==================

You should have already :ref:`set up your system <setup>`,
:ref:`got the source code <checkout>`, and :ref:`built Python <compiling>`.

* Update data from your ``upstream`` repository::

     git fetch upstream

* Create a new branch in your local clone from the ``main`` branch
  in the upstream repository::

     git checkout -b <branch-name> upstream/main

  .. note::
     Almost all changes to Python, including bug fixes, should first be
     made against the ``main`` branch. See :ref:`here <good-prs>` for
     more details.

* Make changes to the code, and use ``git status`` and ``git diff`` to see them.

  (Learn more about :ref:`good-prs`)

* Make sure the changes are fine and don't cause any test failure::

     make patchcheck
     ./python -m test

  (Learn more about :ref:`patchcheck` and about :ref:`runtests`)

* Once you are satisfied with the changes, add the files and commit them::

     git add <filenames>
     git commit -m '<message>'

  (Learn more about :ref:`good-commits`)

* Then push your work to your GitHub fork::

     git push origin <branch-name>

* Finally go on :samp:`https://github.com/{<your-username>}/cpython`: you will
  see a box with the branch you just pushed and a green button that allows
  you to create a pull request against the official CPython repository.

* When people start adding review comments, you can address them by switching
  to your branch, making more changes, committing them, and pushing them to
  automatically update your PR::

   git switch <branch-name>
   # make changes and run tests
   git add <filenames>
   git commit -m '<message>'
   git push origin <branch-name>

  * If a core developer reviewing your PR pushed one or more commits to your
    PR branch, then after checking out your branch and before editing, run::

     git pull origin <branch-name>  # pull = fetch + merge

    If you have made local changes that have not been pushed to your fork and
    there are merge conflicts, Git will warn you about this and enter conflict
    resolution mode. See :ref:`resolving-merge-conflicts` below.

* If time passes and there are merge conflicts with the main branch, GitHub
  will show a warning to this end and you may be asked to address this. Merge
  the changes from the main branch while resolving the conflicts locally::

   git switch <branch-name>
   git pull upstream main  # pull = fetch + merge
   # resolve conflicts: see "Resolving Merge Conflicts" below
   git push origin <branch-name>

* After your PR has been accepted and merged, you can :ref:`delete the branch
  <deleting_branches>`::

     git branch -D <branch-name>  # delete local branch
     git push origin -d <branch-name>  # delete remote branch

.. _resolving-merge-conflicts:

Resolving merge conflicts
-------------------------

When merging changes from different branches (or variants of a branch on
different repos), the two branches may contain incompatible changes to one
or more files. These are called "merge conflicts" and need to be manually
resolved as follows:

#. Check which files have merge conflicts::

      git status

#. Edit the affected files and bring them to their intended final state.
   Make sure to remove the special "conflict markers" inserted by Git.

#. Commit the affected files::

      git add <filenames>
      git merge --continue

When running the final command, Git may open an editor for writing a commit
message. It is usually okay to leave that as-is and close the editor.

See `the merge command's documentation <https://git-scm.com/docs/git-merge>`_
for a detailed technical explanation.


.. _good-prs:

Making good PRs
===============

When creating a pull request for submission, there are several things that you
should do to help ensure that your pull request is accepted.

#. **Make your change against the right version of Python.** In general all
   changes are made against the ``main`` branch first. This includes bug fixes.
   After the change is merged there, it will be :ref:`ported back <branch-merge>`
   to older :ref:`maintenance releases <branchstatus>` as well. That way we
   ensure all affected versions are handled. Therefore, basing a new change
   directly on a maintenance branch is only used in specific circumstances,
   for instance when that change does not apply to ``main`` or the change
   requires a different approach in an older Python version compared to
   ``main``.

#. **Make sure to follow Python's style guidelines.** For Python code you
   should follow :PEP:`8`, and for C code you should follow :PEP:`7`. If you have
   one or two discrepancies those can be fixed by the core developer who merges
   your pull request. But if you have systematic deviations from the style guides
   your pull request will be put on hold until you fix the formatting issues.

   .. note::
      Pull requests with only code formatting changes are usually rejected. On
      the other hand, fixes for typos and grammar errors in documents and
      docstrings are welcome.

#. **Be aware of backwards-compatibility considerations.** While the core
   developer who eventually handles your pull request will make the final call on
   whether something is acceptable, thinking about backwards-compatibility early
   will help prevent having your pull request rejected on these grounds. Put
   yourself in the shoes of someone whose code will be broken by the change(s)
   introduced by the pull request. It is quite likely that any change made will
   break someone's code, so you need to have a good reason to make a change as
   you will be forcing someone to update their code. (This obviously does not
   apply to new classes or functions; new arguments should be optional and have
   default values which maintain the existing behavior.) If in doubt, have a look
   at :PEP:`387` or :ref:`discuss <communication>` the issue with experienced
   developers.

#. **Make sure you have proper tests** to verify your pull request works as
   expected. Pull requests will not be accepted without the proper tests!

#. **Make sure all tests pass.** The entire test suite needs to
   :ref:`run <runtests>` **without failure** because of your changes.
   It is not sufficient to only run whichever test seems impacted by your
   changes, because there might be interferences unknown to you between your
   changes and some other part of the interpreter.

#. Proper :ref:`documentation <documenting>` additions/changes should be included.


.. _patchcheck:

``patchcheck``
==============

``patchcheck`` is a simple automated patch checklist that guides a developer
through the common patch generation checks. To run ``patchcheck``:

On *Unix* (including macOS)::

   make patchcheck

On *Windows* (after any successful build):

.. code-block:: dosbatch

   .\python.bat Tools\patchcheck\patchcheck.py

The automated patch checklist runs through:

* Are there any whitespace problems in Python files?
  (using :cpy-file:`Tools/patchcheck/reindent.py`)
* Are there any whitespace problems in C files?
* Are there any whitespace problems in the documentation?
* Has the documentation been updated?
* Has the test suite been updated?
* Has an entry under ``Misc/NEWS.d/next`` been added?
  (using `blurb-it <https://blurb-it.herokuapp.com/>`_,
  or the `blurb <https://pypi.org/project/blurb/>`_ tool)
* Has ``Misc/ACKS`` been updated?
* Has ``configure`` been regenerated, if necessary?
* Has ``pyconfig.h.in`` been regenerated, if necessary?

The automated patch check doesn't actually *answer* all of these
questions. Aside from the whitespace checks, the tool is
a memory aid for the various elements that can go into
making a complete patch.


.. _good-commits:

Making good commits
===================

Each feature or bugfix should be addressed by a single pull request,
and for each pull request there may be several commits.  In particular:

* Do **not** fix more than one issue in the same commit (except,
  of course, if one code change fixes all of them).
* Do **not** do cosmetic changes to unrelated code in the same
  commit as some feature/bugfix.

Commit messages should follow the following structure::

   Make the spam module more spammy

   The spam module sporadically came up short on spam. This change
   raises the amount of spam in the module by making it more spammy.

The first line or sentence is meant to be a dense, to-the-point explanation
of what the purpose of the commit is. The imperative form (used in the example
above) is strongly preferred to a descriptive form such as 'the spam module is
now more spammy'. Use ``git log --oneline`` to see existing title lines.
Furthermore, the first line should not end in a period.

If this is not enough detail for a commit, a new paragraph(s) can be added
to explain in proper depth what has happened (detail should be good enough
that a core developer reading the commit message understands the
justification for the change).

Check :ref:`the Git bootcamp <accepting-and-merging-a-pr>` for further
instructions on how the commit message should look like when merging a pull
request.

.. note::
   `How to Write a Git Commit Message <https://cbea.ms/git-commit/>`_
   is a nice article that describes how to write a good commit message.


.. _cla:

Licensing
=========

To accept your change we must have your formal approval for distributing
your work under the `PSF license`_.  Therefore, you need to sign a
`contributor agreement`_ which allows the `Python Software Foundation`_ to
license your code for use with Python (you retain the copyright).

.. note::
   You only have to sign this document once, it will then apply to all
   your further contributions to Python.

Here are the steps needed in order to sign the CLA:

1. Create a change and submit it as a pull request.

2. When ``cpython-cla-bot`` comments on your pull request that commit
   authors are required to sign a Contributor License Agreement, click
   on the button in the comment to sign it. It's enough to log in through
   GitHub. The process is automatic.

3. After signing, the comment by ``cpython-cla-bot`` will update to
   indicate that "all commit authors signed the Contributor License
   Agreement.

.. _PSF license: https://docs.python.org/dev/license.html#terms-and-conditions-for-accessing-or-otherwise-using-python
.. _contributor agreement: https://www.python.org/psf/contrib/
.. _contributor form: https://www.python.org/psf/contrib/contrib-form/
.. _Python Software Foundation: https://www.python.org/psf-landing/


Submitting
==========

Once you are satisfied with your work you will want to commit your
changes to your branch. In general you can run ``git commit -a`` and
that will commit everything. You can always run ``git status`` to see
what changes are outstanding.

When all of your changes are committed (i.e. ``git status`` doesn't
list anything), you will want to push your branch to your fork::

  git push origin <branch name>

This will get your changes up to GitHub.

Now you want to
`create a pull request from your fork
<https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork>`_.
If this is a pull request in response to a pre-existing issue on the
`issue tracker`_, please make sure to reference the issue number using
``gh-NNNNN:`` prefix in the pull request title and ``#NNNNN`` in the description.

If this is a pull request for an unreported issue (assuming you already
performed a search on the issue tracker for a pre-existing issue), create a
new issue and reference it in the pull request. Please fill in as much
relevant detail as possible to prevent reviewers from having to delay
reviewing your pull request because of lack of information.

If this issue is so simple that there's no need for an issue to track
any discussion of what the pull request is trying to solve (e.g. fixing a
spelling mistake), then the pull request needs to have the "skip issue" label
added to it by someone with commit access.

Your pull request may involve several commits as a result of addressing code
review comments.  Please keep the commit history in the pull request intact by
not squashing, amending, or anything that would require a force push to GitHub.
A detailed commit history allows reviewers to view the diff of one commit to
another so they can easily verify whether their comments have been addressed.
The commits will be squashed when the pull request is merged.


Converting an existing patch from b.p.o to GitHub
=================================================

When a patch exists in the `issue tracker`_ that should be converted into a
GitHub pull request, please first ask the original patch author to prepare
their own pull request. If the author does not respond after a week, it is
acceptable for another contributor to prepare the pull request based on the
existing patch. In this case, both parties should sign the :ref:`CLA <cla>`.
When creating a pull request based on another person's patch, provide
attribution to the original patch author by adding "Co-authored-by:
Author Name <email_address> ." to the pull request description and commit message.
See `the GitHub article <https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors>`_
on how to properly add the co-author info.

See also :ref:`Applying a Patch to Git <git_from_patch>`.


.. _reviewing-prs:

Reviewing
=========

To begin with, please be patient! There are many more people
submitting pull requests than there are people capable of reviewing
your pull request. Getting your pull request reviewed requires a
reviewer to have the spare time and motivation to look at your pull
request (we cannot force anyone to review pull requests and no one is
employed to look at pull requests). If your pull request has not
received any notice from reviewers (i.e., no comment made) after one
month, first "ping" the issue on the `issue tracker`_ to remind the
subscribers that the pull request needs a review.
If you don't get a response within a week after pinging the issue,
you can post on the `Core Development Discourse category`_
to ask for someone to review your pull request.

When someone does manage to find the time to look at your pull request
they will most likely make comments about how it can be improved
(don't worry, even core developers of Python have their pull requests sent
back to them for changes).  It is then expected that you update your
pull request to address these comments, and the review process will
thus iterate until a satisfactory solution has emerged.

.. _how-to-review-a-pull-request:

How to review a pull request
----------------------------

One of the bottlenecks in the Python development
process is the lack of code reviews.
If you browse the bug tracker, you will see that numerous issues
have a fix, but cannot be merged into the main source code repository,
because no one has reviewed the proposed solution.
Reviewing a pull request can be just as informative as providing a
pull request and it will allow you to give constructive comments on
another developer's work. This guide provides a checklist for
submitting a code review. It is a common misconception that in order
to be useful, a code review has to be perfect. This is not the case at
all! It is helpful to just test the pull request and/or play around with the
code and leave comments in the pull request or issue tracker.

1. If you have not already done so, get a copy of the CPython repository
   by following the :ref:`setup guide <setup>`, build it and run the tests.

2. Check the bug tracker to see what steps are necessary to reproduce
   the issue and confirm that you can reproduce the issue in your version
   of the Python REPL (the interactive shell prompt), which you can launch
   by executing ./python inside the repository.

3. Checkout and apply the pull request (Please refer to the instruction
   :ref:`git_pr`)

4. If the changes affect any C file, run the build again.

5. Launch the Python REPL (the interactive shell prompt) and check if
   you can reproduce the issue. Now that the pull request has been applied,
   the issue should be fixed (in theory, but mistakes do happen! A good review
   aims to catch these before the code is merged into the Python repository).
   You should also try to see if there are any corner cases in this or related
   issues that the author of the fix may have missed.

6. If you have time, run the entire test suite. If you are pressed for time,
   run the tests for the module(s) where changes were applied.
   However, please be aware that if you are recommending a pull request as
   'merge-ready', you should always make sure the entire test suite passes.

Leaving a pull request review on GitHub
=======================================

When you review a pull request, you should provide additional details and context
of your review process.

Instead of simply "approving" the pull request, leave comments.  For example:

#. If you tested the PR, report the result and the system and version tested on,
   such as 'Windows 10', 'Ubuntu 16.4', or 'Mac High Sierra'.

#. If you request changes, try to suggest how.

#. Comment on what is "good" about the pull request, not just the "bad". Doing
   so will make it easier for the PR author to find the good in your comments.

Dismissing review from another core developer
=============================================

A core developer can dismiss another core developer's review if they confirmed
that the requested changes have been made.  When a core developer has assigned
the PR to themselves, then it is a sign that they are actively looking after
the PR, and their review should not be dismissed.


Committing/rejecting
====================

Once your pull request has reached an acceptable state (and thus considered
"accepted"), it will either be merged or rejected. If it is rejected, please
do not take it personally! Your work is still appreciated regardless of whether
your pull request is merged. Balancing what *does* and *does not* go into
Python is tricky and we simply cannot accept everyone's contributions.

But if your pull request is merged it will then go into Python's
:abbr:`VCS (version control system)` to be released
with the next major release of Python. It may also be backported to older
versions of Python as a bugfix if the core developer doing the merge believes
it is warranted.


Crediting
=========

Non-trivial contributions are credited in the ``Misc/ACKS`` file (and, most
often, in a contribution's news entry as well).  You may be
asked to make these edits on the behalf of the core developer who
accepts your pull request.

.. _issue tracker: https://github.com/python/cpython/issues
.. _Core Development Discourse category: https://discuss.python.org/c/core-dev/23


===================================================
/. 🚀 ./getting-started/getting-help.rst
===================================================

.. _getting-help:
.. _help:

Where to get help
=================

If you are working on Python it is very possible you will come across an issue
where you need some assistance to solve it (this happens to core developers
all the time).

Should you require help, there are a :ref:`variety of options available
<communication>` to seek assistance. If the question involves process or tool
usage then please check the rest of this guide first as it should answer your
question.


.. _help-discourse:

Discourse
---------

Python has a hosted Discourse instance at `discuss.python.org <Discourse_>`_.
This forum has many different categories,
most of which are open for all users to read and post.
Those particularly relevant for help contributing to Python itself include:

* `Core Development`_ for most general questions and help
* `Ideas`_ to discuss new ideas for the Python language
* `Core Workflow`_ for questions about the dev infrastructure and bots

.. seealso::
  :ref:`communication-discourse` for more information on how to get started.

.. _Discourse: https://discuss.python.org/
.. _Core Development: https://discuss.python.org/c/core-dev/23
.. _Core Workflow: https://discuss.python.org/c/core-workflow/8
.. _Ideas: https://discuss.python.org/c/ideas/6


.. _help-mailing-lists:

Mailing lists
-------------

Further options for seeking assistance include the
`python-ideas`_ and `python-dev`_ mailing lists,
which correspond to the `Ideas`_ and `Core Development`_
:ref:`help-discourse` categories, respectively.
The Discourse categories are generally more active
and are the preferred venue for new discussions,
but the mailing lists are still monitored and responded to.
These mailing lists are for questions involving the
development *of* Python, **not** for development *with* Python.

.. _python-ideas: https://mail.python.org/mailman3/lists/python-ideas.python.org
.. _python-dev: https://mail.python.org/mailman3/lists/python-dev.python.org/


Ask #python-dev
---------------

If you are comfortable with IRC you can try asking on ``#python-dev`` (on
the `Libera.Chat`_ network). Typically there are a number of experienced
developers, ranging from triagers to core developers, who can answer
questions about developing for Python.  As with the mailing lists,
``#python-dev`` is for questions involving the development *of* Python
whereas ``#python`` is for questions concerning development *with* Python.

.. note::

  You may not be able to access the history of this channel, so it cannot
  be used as a "knowledge base" of sorts.

.. _Libera.Chat: https://libera.chat/

Core mentorship
---------------

If you are interested in improving Python and contributing to its development,
but don’t yet feel entirely comfortable with the public channels mentioned
above, `Python Mentors`_ are here to help you.  Python is fortunate to have a
community of volunteer core developers willing to mentor anyone wishing to
contribute code, work on bug fixes or improve documentation.  Everyone is
welcomed and encouraged to contribute.

.. _Python Mentors: https://www.python.org/dev/core-mentorship/


.. _office hour:

Core developers office hours
----------------------------

Several core developers have set aside time to host mentorship office hours.
During the office hour, core developers are available to help contributors with
our process, answer questions, and help lower the barrier of contributing and
becoming Python core developers.

The PSF's code of conduct applies for interactions with core developers
during office hours.

+------------------+-------------------------------+------------------------------------------------+
| Core Developer   | Schedule                      | Details                                        |
+==================+===============================+================================================+
| Zachary Ware     | See details link              | Schedule at https://calendly.com/zware         |
+------------------+-------------------------------+------------------------------------------------+

File a bug
----------

If you strongly suspect you have stumbled on a bug (be it in the build
process, in the test suite, or in other areas), then open an issue on the
`issue tracker`_.  As with every bug report it is strongly advised that
you detail which conditions triggered it (including the OS name and version,
and what you were trying to do), as well as the exact error message you
encountered.

.. _issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./developer-workflow/index.rst
===================================================

====================
Development workflow
====================

.. toctree::
   :maxdepth: 5

   communication-channels
   development-cycle
   stdlib
   extension-modules
   c-api
   lang-changes
   grammar
   porting


===================================================
/. 🚀 ./developer-workflow/communication-channels.rst
===================================================

.. _communication-channels:
.. _communication:

==============================
Following Python's development
==============================

Python's development is communicated through a myriad of ways,
primarily :ref:`Discourse <communication-discourse>` along with other platforms.


Standards of behaviour in these communication channels
======================================================

We try to foster environments of mutual respect, tolerance and encouragement,
as described in the PSF's `Diversity Statement`_. Abiding by the guidelines
in this document and asking questions or posting suggestions in the
appropriate channels are an excellent way to get started on the mutual respect
part, greatly increasing the chances of receiving tolerance and encouragement
in return.

.. _Diversity Statement: https://www.python.org/psf/diversity/


.. _mailinglists:

Mailing lists
=============

.. note:: Some mailing lists have been supplanted by categories in the
   Python `Discourse`_. Specifically,

   * The python-dev list is superseded by the `Core Development`_
     and `PEPs`_ categories on Discourse.

   * The python-ideas list is superseded by posts in the `Ideas`_
     category on Discourse.

   Discussion in :guilabel:`Core Development` is focused on issues related to Python's
   own development, such as how to handle a specific issue, a PEP, etc.

   - Ideas about new functionality should **not** start here, and instead
     should be discussed in `Ideas`_.
   - Technical support questions should also not be asked here, and instead
     should go to the python-list_ or python-help_ mailing lists, or the
     `Python Help`_ category on Discourse.

Existing threads on the python-dev_, python-committers_, and python-ideas_ mailing lists
can be accessed through the `online archive <web gateway_>`__.

General Python questions should go to `python-list`_ or `tutor`_
or similar resources, such as StackOverflow_ or the ``#python`` IRC channel
on Libera.Chat_.

`The core-workflow <https://github.com/python/core-workflow/issues>`_
issue tracker is the place to discuss and work on improvements to the CPython
core development workflow.

A complete list of Python mailing lists can be found at
https://mail.python.org/mailman/listinfo (older lists, using Mailman2) or
https://mail.python.org/mailman3/ (newer lists, using Mailman3). Some lists may also
be mirrored at `GMANE <https://gmane.io/>`_ and can be read and posted to in various
ways, including via web browsers, NNTP newsreaders, and RSS feed readers.

.. _issue tracker: https://github.com/python/cpython/issues
.. _python-committers: https://mail.python.org/mailman3/lists/python-committers.python.org/
.. _python-dev: https://mail.python.org/mailman3/lists/python-dev.python.org/
.. _python-help: https://mail.python.org/mailman/listinfo/python-help
.. _python-ideas: https://mail.python.org/mailman3/lists/python-ideas.python.org
.. _python-list: https://mail.python.org/mailman/listinfo/python-list
.. _tutor: https://mail.python.org/mailman/listinfo/tutor
.. _StackOverflow: https://stackoverflow.com/
.. _Libera.Chat: https://libera.chat/
.. _web gateway: https://mail.python.org/archives/


.. _communication-discourse:

Discourse (discuss.python.org web forum)
========================================

We have our own `Discourse`_ forum for both developers and users. This forum
complements the `python-dev`_, `python-ideas`_, `python-help`_, and
`python-list`_ mailing lists.

This forum has different categories and most core development discussions
take place in the open forum categories for `PEPs`_ and `Core Development`_
(these are the Discourse equivalents to the python-dev mailing list).
All categories are open for users to read and post with the exception of
the `Committers`_ category, where posting is restricted to the `CPython
<https://github.com/python/cpython>`_ core developers.

The Committers category is often used for announcements and notifications.
It is also the designated venue for the core developer promotion votes.

Tutorials for new users
-----------------------

To start a topic or participate in any discussions in the forum, sign up and
create an account using an email address or GitHub account. You can do so by
clicking the "Sign Up" button on the top right hand corner of the `Discourse`_
main page.

The Python Discourse `Quick Start <https://discuss.python.org/t/python-discourse-quick-start/116>`_
compiled by `Carol Willing <https://discuss.python.org/u/willingc/>`_ gives you
a quick overview on how to kick off Python Discourse.

We recommend new users getting familiarised with the forum by going through Discobot tutorials.
These tutorials can be activated by replying to a welcome message from "discourse
Greetings!" received under Notifications and Messages in your user account.

* Click on your personal account found on the top right hand corner of the page.
* The dropdown menu will show four different icons: 🔔 (Notifications),
  🔖 (Bookmarks), ✉️ (Messages), and 👤 (Preferences).
* Select either Notifications or Messages.
* Open the "Greetings!" message sent by Discobot to start the tutorial.

Ensure that you read through the `Python Code of Conduct <https://discuss.python.org/faq>`_.
We are to be open, considerate and respectful to all users in the community.
You can report messages that don't respect the CoC by clicking on the three
dots under the message and then on the ⚐ icon.  You can also mention the
`@staff <https://discuss.python.org/groups/staff>`_,
`@moderators <https://discuss.python.org/groups/moderators>`_, or
`@admins <https://discuss.python.org/groups/admins>`_ groups in a message.



Reading topics
-----------------
Click a topic title and read down the list of replies in chronological order,
following links or previewing replies and quotes as you go. Use your mouse to
scroll the screen, or use the timeline scroll bar on the right which also shows
you how far through the conversation you've read. On smaller screens, select the
bottom progress bar to expand it.


Notifications
-------------

Following categories (category notifications)
'''''''''''''''''''''''''''''''''''''''''''''

Notifications can be set for individual categories and topics. To change any of these
defaults, you can either go to your user preferences, or visit the category
page, and use the notification button 🔔 above the topic list,
on the top right hand corner of the category page beside the "+ New Topic" button.

Clicking on the Notification control 🔔 will show a drop-down panel with 5
different options: Watching, Tracking, Watching First Post, Normal, and Muted.
All categories are set by default in Normal mode where you will only be notified
if someone mentions your @name or replies to you.

Following individual threads (topic notifications)
''''''''''''''''''''''''''''''''''''''''''''''''''

To follow any individual topics or threads, you can adjust your notifications
through the notification button 🔔 found on the right of the topic at the end
of the timeline. You can also do so at the bottom of each topic.
Select "Watching" and you will be notified when there is any new updated reply
from that particular thread.

Customising notifications on user preference
''''''''''''''''''''''''''''''''''''''''''''

To get a bird's eye view of all your customised notifications, you can
go to `Preferences of your account <https://discuss.python.org/my/preferences/categories>`_.
This allows you to make adjustments according to categories, users, and tags.

Enabling mailing list mode
--------------------------

In mailing list mode, you will receive one email per post, as happens with
traditional mailing lists. This is desirable if you prefer to interact via email,
without visiting the forum website.
To activate the mailing list mode, go to the `email preferences
<https://discuss.python.org/my/preferences/emails>`_, check "Enable
mailing list mode" and save changes.

.. _Discourse: https://discuss.python.org/
.. _PEPs: https://discuss.python.org/c/peps/19
.. _Core Development: https://discuss.python.org/c/core-dev/23
.. _Committers: https://discuss.python.org/c/committers/5
.. _Ideas: https://discuss.python.org/c/ideas/6
.. _Python Help: https://discuss.python.org/c/users/7


Discord (private chat server)
=============================

For more real-time discussions, the core development team have a private Discord
server available. Core developers, Steering Council members, triagers, and
documentarians on the project are eligible to join the server. Joining the
Discord server is entirely optional, as all essential communications occur on
the mailing lists and Discourse forums.

For core developers, a long lived multiple use invitation link for this server
can be found in the private core developer only section of the Discourse forum.

For triagers and documentarians joining the Discord server, a single use invitation
link should be generated and sent to them directly.

When first joining the server, new users will only have access to the ``#welcome``
and ``#rules-and-info`` channels. To link their Discord ID with their project
role, core developers may update their Steering Council 🔒 `voter record`_ with
their Discord ID before posting in the ``#welcome`` channel to request access
to the rest of the server channels. Triagers, documentarians, and core developers
that would prefer not to add their Discord ID to their Steering Council voter
record may instead be vouched for by an existing member of the Discord server.

As a private, non-archived, forum, final decisions on design and development
questions should not be made on Discord. Any conclusions from Discord discussions
should be summarised and posted to the issue tracker, Discourse forum, or
mailing list (the appropriate venue for sharing conclusions will depend on the
specific discussion).

Note: existing Discord users may want to right click on their username in the
automatic Discord welcome message and choose "Edit Server Profile" in order to
set a specific `Server Nickname`_

.. _voter record: https://github.com/python/voters/blob/main/python-core.toml
.. _Server Nickname: https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames


IRC
===

Some core developers still participate in the ``#python-dev`` IRC channel on
``irc.libera.chat``. This is not a place to ask for help with Python, but to
discuss issues related to Python's own development. See also the
``#python-dev-notifs`` channel for bots notifications.


Blogs
=====

Several core developers are active bloggers and discuss Python's development
that way. You can find their blogs (and various other developers who use Python)
at https://planetpython.org/.


Setting expectations for open source participation
==================================================

Burn-out is common in open source due to a misunderstanding of what users, contributors,
and maintainers should expect from each other. Brett Cannon gave a `talk <https://www.youtube.com/watch?v=-Nk-8fSJM6I>`_
about this topic that sets out to help everyone set reasonable expectations of each other in
order to make open source pleasant for everyone involved.

Additional repositories
=======================

`Python Core Workflow`_ hosts the codebase for tools such as `blurb`_.

Other core workflow tools are:

* `cherry_picker`_ (`PyPI`_)
* `bedevere`_
* `blurb_it`_
* `miss-islington`_
* `cla-bot`_
* `cpython-emailer-webhook`_

Python `Performance Benchmark`_ project is intended to be an authoritative
source of benchmarks for all Python implementations.

.. _Python Core Workflow: https://github.com/python/core-workflow
.. _blurb: https://pypi.org/project/blurb
.. _cherry_picker: https://github.com/python/cherry-picker
.. _PyPI: https://pypi.org/project/cherry_picker/
.. _bedevere: https://github.com/python/bedevere
.. _blurb_it: https://github.com/python/blurb_it
.. _miss-islington: https://github.com/python/miss-islington
.. _cla-bot: https://github.com/ambv/cla-bot
.. _cpython-emailer-webhook: https://github.com/berkerpeksag/cpython-emailer-webhook
.. _Performance Benchmark: https://github.com/python/pyperformance


===================================================
/. 🚀 ./developer-workflow/development-cycle.rst
===================================================

.. _development-cycle:
.. _devcycle:

Development cycle
=================

The responsibilities of a core developer shift based on what kind of branch of
Python a developer is working on and what stage the branch is in.

To clarify terminology, Python uses a ``major.minor.micro`` nomenclature
for production-ready releases. So for Python 3.1.2 final, that is a *major
version* of 3, a *minor version* of 1, and a *micro version* of 2.

* new *major versions* are exceptional; they only come when strongly
  incompatible changes are deemed necessary, and are planned very long
  in advance;

* new *minor versions* are feature releases; they get released annually,
  from the current :ref:`in-development <indevbranch>` branch;

* new *micro versions* are bugfix releases; they get released roughly
  every 2 months; they are prepared in :ref:`maintenance <maintbranch>`
  branches.

We also publish non-final versions which get an additional qualifier:
:ref:`alpha`, :ref:`beta`, :ref:`release candidate <rc>`.  These versions
are aimed at testing by advanced users, not production use.

Each release of Python is tagged in the source repo with a tag of the form
``vX.Y.ZTN``, where ``X`` is the major version, ``Y`` is the
minor version, ``Z`` is the micro version, ``T`` is the release level
(``a`` for alpha releases, ``b`` for beta, ``rc`` release candidate,
and *null* for final releases), and ``N`` is the release serial number.
Some examples of release tags: ``v3.7.0a1``, ``v3.6.3``, ``v2.7.14rc1``.

Branches
''''''''

There is a branch for each *feature version*, whether released or not (e.g.
3.7, 3.8).


.. _indevbranch:

In-development (main) branch
----------------------------

The ``main`` branch is the branch for the next feature release; it is
under active development for all kinds of changes: new features, semantic
changes, performance improvements, bug fixes.

At some point during the life-cycle of a release, a
new :ref:`maintenance branch <maintbranch>` is created to host all bug fixing
activity for further micro versions in a feature version (3.8.1, 3.8.2, etc.).

For versions 3.4 and before, this was conventionally done when the final
release was cut (for example, 3.4.0 final).

Starting with the 3.5 release, we create the release maintenance branch
(e.g. 3.5) at the time we enter beta (3.5.0 beta 1).  This allows
feature development for the release 3.n+1 to occur within the main
branch alongside the beta and release candidate stabilization periods
for release 3.n.

.. _maintbranch:

Maintenance branches
--------------------

A branch for a previous feature release, currently being maintained for bug
fixes, or for the next feature release in its
:ref:`beta <beta>` or :ref:`release candidate <rc>` stages.
There is usually either one or two maintenance branches at any given time for
Python 3.x.  After the final release of a new minor version (3.x.0), releases
produced from a maintenance branch are called **bugfix** or **maintenance**
releases; the terms are used interchangeably. These releases have a
**micro version** number greater than zero.

The only changes allowed to occur in a maintenance branch without debate are
bug fixes, test improvements, and edits to the documentation.
Also, a general rule for maintenance branches is that compatibility
must not be broken at any point between sibling micro releases (3.5.1, 3.5.2,
etc.).  For both rules, only rare exceptions are accepted and **must** be
discussed first.

Backporting changes reduces the risk of future conflicts.
For documentation, it increases the visibility of improvements,
since most readers access the `stable documentation <https://docs.python.org/3/>`__
rather than the `development documentation <https://docs.python.org/dev/>`__.

A new maintenance branch is normally created when the next feature release
cycle reaches feature freeze, i.e. at its first beta pre-release.
From that point on, changes intended for remaining pre-releases, the final
release (3.x.0), and subsequent bugfix releases are merged to
that maintenance branch.

Sometime following the final release (3.x.0), the maintenance branch for
the previous minor version will go into :ref:`security mode <secbranch>`,
usually after at least one more bugfix release at the discretion of the
release manager.  For example, the 3.4 maintenance branch was put into
:ref:`security mode <secbranch>` after the 3.4.4 bugfix release
which followed the release of 3.5.1.

.. _secbranch:

Security branches
-----------------

A branch less than 5 years old but no longer in bugfix mode is a security
branch.

The only changes made to a security branch are those fixing issues exploitable
by attackers such as crashes, privilege escalation and, optionally, other
issues such as denial of service attacks.  Any other changes are
**not** considered a security risk and thus not backported to a security branch.
You should also consider fixing hard-failing tests in open security branches
since it is important to be able to run the tests successfully before releasing.

Commits to security branches are to be coordinated with the release manager
for the corresponding feature version, as listed in the :ref:`branchstatus`.
Merging of pull requests to security branches is restricted to release managers.
Any release made from a security branch is source-only and done only when actual
security patches have been applied to the branch. These releases have a
**micro version** number greater than the last **bugfix** release.

.. _eolbranch:

End-of-life branches
--------------------

The code base for a release cycle which has reached end-of-life status
is frozen and no longer has a branch in the repo.  The final state of
the end-of-lifed branch is recorded as a tag with the same name as the
former branch, e.g. ``3.3`` or ``2.6``.

The :ref:`versions` page contains list of active and end-of-life branches.

The latest release for each Python version can be found on the `download page
<https://www.python.org/downloads/>`_.

.. _stages:

Stages
''''''

Based on what stage the :ref:`in-development <indevbranch>` version of Python
is in, the responsibilities of a core developer change in regards to commits
to the :abbr:`VCS (version control system)`.


Pre-alpha
---------

The branch is in this stage when no official release has been done since
the latest final release.  There are no special restrictions placed on
commits, although the usual advice applies (getting patches reviewed, avoiding
breaking the buildbots).

.. _alpha:

Alpha
-----

Alpha releases typically serve as a reminder to core developers that they
need to start getting in changes that change semantics or add something to
Python as such things should not be added during a Beta_. Otherwise no new
restrictions are in place while in alpha.

.. _beta:

Beta
----

After a first beta release is published, no new features are accepted.  Only
bug fixes and improvements to documentation and tests can now be committed.
This is when core developers should concentrate on the task of fixing
regressions and other new issues filed by users who have downloaded the alpha
and beta releases.

Being in beta can be viewed much like being in RC_ but without the extra
overhead of needing commit reviews.

Please see the note in the `In-development (main) branch`_ section above for
new information about the creation of the 3.5 maintenance branch during beta.


.. _rc:

Release Candidate (RC)
----------------------

A branch preparing for an RC release can only have bugfixes applied that have
been reviewed by other core developers.  Generally, these issues must be
severe enough (e.g. crashes) that they deserve fixing before the final release.
All other issues should be deferred to the next development cycle, since
stability is the strongest concern at this point.

While the goal is to have no code changes between a RC and a final release,
there may be a need for final documentation or test fixes. Any such proposed
changes should be discussed first with the release manager.

You **cannot** skip the peer review during an RC, no matter how small! Even if
it is a simple copy-and-paste change, **everything** requires peer review from
a core developer.

.. _final:

Final
-----

When a final release is being cut, only the release manager (RM) can make
changes to the branch.  After the final release is published, the full
:ref:`development cycle <stages>` starts again for the next minor version.


Repository administration
'''''''''''''''''''''''''

The source code is currently hosted on `GitHub
<https://github.com/python/cpython>`_ in the `Python organization <https://github.com/python/>`_.

Organization repository policy
------------------------------

Within the `GitHub Python organization <https://github.com/python/>`_,
repositories are expected to relate to the Python language, the CPython
reference implementation, their documentation and their development workflow.
This includes, for example:

* The reference implementation of Python and related repositories (i.e. `CPython <https://github.com/python/cpython>`_)
* Tooling and support around CPython development (e.g. `pyperformance <https://github.com/python/pyperformance>`_, `Bedevere <https://github.com/python/bedevere>`_)
* Helpers and backports for Python/CPython features (e.g. `typing_extensions <https://github.com/python/typing_extensions>`_, `typeshed <https://github.com/python/typeshed>`_, `tzdata <https://github.com/python/tzdata>`_, `pythoncapi-compat <https://github.com/python/pythoncapi-compat>`_)
* Organization-related repositories (e.g. the `Code of Conduct <https://github.com/python/pycon-code-of-conduct>`_, `.github <https://github.com/python/.github>`_)
* Documentation and websites for all the above (e.g. `python.org repository <https://github.com/python/pythondotorg>`_, `PEPs <https://github.com/python/peps>`_, `Devguide <https://github.com/python/devguide>`_, docs translations)
* Infrastructure for all the above (e.g. `docsbuild-scripts <https://github.com/python/docsbuild-scripts>`_, `buildmaster-config <https://github.com/python/buildmaster-config>`_)
* Discussions and notes around official development-related processes and events (e.g. `steering-council <https://github.com/python/steering-council>`_, `core-sprint <https://github.com/python/core-sprint>`_)

Before adding a new repository to the organization, open a discussion to seek consensus
in the `Committers Discourse category <https://discuss.python.org/c/committers/5>`_.
Once people are satisfied with that, ask the `Python steering council <https://github.com/python/steering-council>`_
to grant permission.

Note that several repositories remain in the organization for historic reasons,
and would probably not be appropriate to add today.

Generally, new repositories should start their life under personal GitHub
accounts or other GitHub orgs. It is relatively easy to move a repository to
the organization once it is mature. For example, this would now apply to
experimental features like `asyncio <https://github.com/python/asyncio>`_,
`exceptiongroups <https://github.com/python/exceptiongroups>`_,
and drafts of new guides and other documentation (e.g. `redistributor-guide
<https://github.com/python/redistributor-guide>`_).

General-use tools and libraries (e.g. `mypy <https://github.com/python/mypy>`_
or `Black <https://github.com/psf/black>`_) should also be developed outside
the ``python`` organization, unless core devs (as represented by the SC)
specifically want to “bless” one implementation (as with e.g.
`typeshed <https://github.com/python/typeshed>`_,
`tzdata <https://github.com/python/tzdata>`_, or
`pythoncapi-compat <https://github.com/python/pythoncapi-compat>`_).


Organization owner policy
-------------------------

The GitHub Organization Owner role allows for full management of all aspects of
the Python organization. Allowing for visibility and management of all aspects
at all levels including organization membership, team membership, access
control, and merge privileges on all repositories. For full details of the
permission levels see `GitHub's documentation on Organization permission
levels
<https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#permissions-for-organization-roles>`_.
This role is paramount to the security of the Python Language, Community, and
Infrastructure.

The Executive Director of the Python Software Foundation delegates authority on
GitHub Organization Owner Status to Ee Durbin - Python Software
Foundation Director of Infrastructure. Common reasons for this role are:
Infrastructure Staff Membership, Python Software Foundation General Counsel,
and Python Software Foundation Staff as fallback.

Inactive or unreachable members may be removed with or without notice. Members
who no longer necessitate this level of access will be removed with notice.

Multi-Factor Authentication must be enabled by the user in order to remain an
Owner of the Python Organization.

.. _current owners:

Current owners
--------------

+----------------------+--------------------------------+-----------------+
| Name                 | Role                           | GitHub Username |
+======================+================================+=================+
| Benjamin Peterson    | Infrastructure Staff           | benjaminp       |
+----------------------+--------------------------------+-----------------+
| Noah Kantrowitz      | Infrastructure Staff           | coderanger      |
+----------------------+--------------------------------+-----------------+
| Donald Stufft        | Infrastructure Staff           | dstufft         |
+----------------------+--------------------------------+-----------------+
| Ee Durbin            | PSF Director of Infrastructure | ewdurbin        |
+----------------------+--------------------------------+-----------------+
| Van Lindberg         | PSF General Counsel            | VanL            |
+----------------------+--------------------------------+-----------------+
| Łukasz Langa         | CPython Developer in Residence | ambv            |
+----------------------+--------------------------------+-----------------+

Certain actions (blocking spam accounts, inviting new users, adjusting
organization-level settings) can only `be performed`_ by owners of the Python
organization on GitHub. The ``@python/organization-owners`` team can be
mentioned to request assistance from an organization owner.

.. _be performed: https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#permissions-for-organization-roles

Repository administrator role policy
------------------------------------

The Administrator role on the repository allows for managing all aspects
including collaborators, access control, integrations, webhooks, and branch
protection. For full details of the permission levels see `GitHub's
documentation on repository permission levels
<https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#permissions-for-organization-roles>`_.
Common reasons for this role are: maintenance of Core Developer
Workflow tooling, Release Managers for all :ref:`in-development <indevbranch>`,
:ref:`maintenance <maintbranch>`, and :ref:`security mode <secbranch>`
releases, and additional Python Core Developers as necessary for redundancy.
Occasional temporary administrator access is acceptable as necessary for Core
Developer workflow projects.

Inactive or unreachable members may be removed with or without notice. Members
who no longer necessitate this level of access will be removed with notice.

Multi-Factor Authentication must be enabled by the user in order to remain an
Administrator of the repository.

Current administrators
----------------------

+-------------------+----------------------------------------------------------+-----------------+
| Name              | Role                                                     | GitHub Username |
+===================+==========================================================+=================+
| Pablo Galindo     | Python 3.10 and 3.11 Release Manager,                    | pablogsal       |
|                   | Maintainer of buildbot.python.org                        |                 |
+-------------------+----------------------------------------------------------+-----------------+
| Łukasz Langa      | Python 3.8 and 3.9 Release Manager,                      | ambv            |
|                   | PSF CPython Developer in Residence 2021-2022             |                 |
+-------------------+----------------------------------------------------------+-----------------+
| Ned Deily         | Python 3.6 and 3.7 Release Manager                       | ned-deily       |
+-------------------+----------------------------------------------------------+-----------------+
| Larry Hastings    | Retired Release Manager (for Python 3.4 and 3.5)         | larryhastings   |
+-------------------+----------------------------------------------------------+-----------------+
| Berker Peksag     | Maintainer of bpo-linkify and cpython-emailer-webhook    | berkerpeksag    |
+-------------------+----------------------------------------------------------+-----------------+
| Brett Cannon      |                                                          | brettcannon     |
+-------------------+----------------------------------------------------------+-----------------+
| Ezio Melotti      | Maintainer of bugs.python.org GitHub webhook integration | ezio-melotti    |
+-------------------+----------------------------------------------------------+-----------------+
| Mariatta Wijaya   | Maintainer of bedevere, blurb_it and miss-islington      | Mariatta        |
+-------------------+----------------------------------------------------------+-----------------+

Repository release manager role policy
--------------------------------------

Release Managers for :ref:`in-development <indevbranch>`, :ref:`maintenance
<maintbranch>`, and :ref:`security mode <secbranch>` Python releases are
granted Administrator privileges on the repository. Once a release branch has
entered :ref:`end-of-life <eolbranch>`, the Release Manager for that branch is
removed as an Administrator and granted sole privileges (out side of repository
administrators) to merge changes to that branch.

Multi-Factor Authentication must be enabled by the user in order to retain
access as a Release Manager of the branch.


===================================================
/. 🚀 ./developer-workflow/stdlib.rst
===================================================

.. _stdlib:
.. _stdlibchanges:

Adding to the stdlib
====================

While the stdlib contains a great amount of useful code, sometimes you want
more than is provided. This document is meant to explain how you can get either
a new addition to a pre-existing module in the stdlib or add an entirely new
module.

Changes to pre-existing code is not covered as that is considered a bugfix and
thus is treated as a bug that should be filed on the `issue tracker`_.


Adding to a pre-existing module
-------------------------------

If you have found that a function, method, or class is useful and you believe
it would be useful to the general Python community, there are some steps to go
through in order to see it added to the stdlib.

First, you should gauge the usefulness of the code,
which is typically done by sharing the code publicly.
This is not a required step, but it is suggested.
You have a several options for this:

* Search the `issue tracker`_ for discussion related to the proposed addition.
  This may turn up an issue that explains why the suggestion wasn't accepted.
* Open a new thread in the `Ideas Discourse category`_
  to gather feedback directly from the Python core developers and community.
* Write a blog post about the code, which may also help gather useful feedback.
* Post it to the `Python Cookbook`_.
  Based on feedback and reviews of the recipe,
  you can see if others find the functionality as useful as you do.

If you have found general acceptance and usefulness for your code from people,
you can open an issue on the `issue tracker`_ with the code attached as a
:ref:`pull request <patch>`. If possible, also submit a
:ref:`contributor agreement <contributor_agreement>`.

If a core developer decides that your code would be useful to the general
Python community, they will then commit your code. If your code is not picked
up by a core developer and committed then please do not take this personally.
Through your public sharing of your code in order to gauge community support
for it you at least can know that others will come across it who may find it
useful.

.. _Ideas Discourse category: https://discuss.python.org/c/ideas/6
.. _Python Cookbook: https://code.activestate.com/recipes/langs/python/


Adding a new module
-------------------
It must be stated upfront that getting a new module into the stdlib is very
difficult. Adding any significant amount of code to the stdlib increases the
burden placed upon core developers. It also means that the module somewhat
becomes "sanctioned" by the core developers as a good way to do something,
typically leading to the rest of the Python community to using the new module
over other available solutions. All of this means that additions to the stdlib
are not taken lightly.


Acceptable types of modules
'''''''''''''''''''''''''''
Typically two types of modules get added to the stdlib. One type is a module
which implements something that is difficult to get right. A good example of
this is the :py:mod:`multiprocessing` package. Working out the various OS
issues, working through concurrency issues, etc. are all very difficult to get
right.

The second type of module is one that implements something that people
re-implement constantly. The :py:mod:`itertools` module is a good example of
this type as its constituent parts are not necessarily complex, but are used
regularly in a wide range of programs and can be a little tricky to get right.
Modules that parse widely used data formats also fall under this type of module
that the stdlib consists of.

While a new stdlib module does not need to appeal to all users of Python, it
should be something that a large portion of the community will find useful.
This makes sure that the developer burden placed upon core developers is worth
it.


Requirements
''''''''''''
In order for a module to even be considered for inclusion into the stdlib, a
couple of requirements must be met.

The most basic is that the code must meet
:ref:`standard patch requirements <patch>`. For code that has
been developed outside the stdlib typically this means making sure the coding
style guides are followed and that the proper tests have been written.

The module needs to have been out in the community for at least a year. Because
of Python's conservative nature when it comes to backwards-compatibility, when
a module is added to the stdlib its API becomes frozen. This means that a module
should only enter the stdlib when it is mature and gone through its
"growing pains".

The module needs to be considered best-of-breed. When something is included in
the stdlib it tends to be chosen first for products over other third-party
solutions. By virtue of having been available to the public for at least a
year, a module needs to have established itself as (one of) the top choices by
the community for solving the problem the module is intended for.

The development of the module must move into Python's
infrastructure (i.e., the module is no longer directly maintained outside of
Python). This prevents a divergence between the code that is included in the
stdlib and that which is released outside the stdlib (typically done to provide
the module to older versions of Python). It also removes the burden of forcing
core developers to have to redirect bug reports or patches to an external issue
tracker and :abbr:`VCS (version control system)`.

Someone involved with the development of the
module must promise to help maintain the module in the stdlib for two years.
This not only helps out other core developers by alleviating workload from bug
reports that arrive from the first Python release containing the module, but
also helps to make sure that the overall design of the module continues to be
uniform.


Proposal process
''''''''''''''''

If the module you want to propose adding to the stdlib meets the requirements,
you may propose its inclusion
by following the :abbr:`PEP (Python Enhancement Proposal)` process.
See :pep:`1` for details,
and the :pep:`PEP index <0>` for previously-accepted PEPs
that have proposed a module for inclusion.

If the PEP is accepted, then the module will be added to the stdlib
once the authors of the module sign
:ref:`contributor agreements <contributor_agreement>`.

.. _issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./developer-workflow/extension-modules.rst
===================================================

.. _extension-modules:
.. _extensions:

==================================
Standard library extension modules
==================================

In this section, we could explain how to write a CPython extension with the C language, but the topic can take a complete book.

For this reason, we prefer to give you some links where you can read a very good documentation.

Read the following references:

* https://docs.python.org/dev/c-api/
* https://docs.python.org/dev/extending/
* :pep:`399`
* https://pythonextensionpatterns.readthedocs.io/en/latest/


===================================================
/. 🚀 ./developer-workflow/c-api.rst
===================================================

.. _c-api:

=======================
Changing Python's C API
=======================

The C API is divided into these tiers:

1. The internal, private API, available with ``Py_BUILD_CORE`` defined.
   Ideally declared in ``Include/internal/``. Any API named with a leading
   underscore is also considered private.
2. The Unstable C API, identified by the ``PyUnstable_`` name prefix.
   Ideally declared in :cpy-file:`Include/cpython/` along with the general public API.
3. The “general” public C API, available when :cpy-file:`Include/Python.h` is included normally.
   Ideally declared in ``Include/cpython/``.
4. The Limited C API, available with :c:macro:`Py_LIMITED_API` defined.
   Ideally declared directly under ``Include/``.

Each tier has different stability and maintenance requirements to consider
when you add or change definitions in it.

The compatibility guarantees for public C API are explained in the
user documentation, ``Doc/c-api/stable.rst`` (:ref:`python:stable`).


The internal API
================

Internal API is defined in ``Include/internal/`` and is only available
for building CPython itself, as indicated by a macro like ``Py_BUILD_CORE``.

While internal API can be changed at any time, it's still good to keep it
stable: other API or other CPython developers may depend on it.
For users, internal API is sometimes the best workaround for a thorny problem
--- though those use cases should be discussed on the
`C API Discourse category <https://discuss.python.org/c/30>`_
or an issue so we can try to find a supported way to serve them.


With PyAPI_FUNC or PyAPI_DATA
-----------------------------

Functions or structures in ``Include/internal/`` defined with
``PyAPI_FUNC`` or ``PyAPI_DATA`` are internal functions which are
exposed only for specific use cases like debuggers and profilers.
Ideally, these should be migrated to the :ref:`unstable-capi`.


With the extern keyword
-----------------------

Functions in ``Include/internal/`` defined with the ``extern`` keyword
*must not and can not* be used outside the CPython code base.  Only
built-in stdlib extensions (built with the ``Py_BUILD_CORE_BUILTIN``
macro defined) can use such functions.

When in doubt, new internal C functions should be defined in
``Include/internal`` using the ``extern`` keyword.

Private names
-------------

Any API named with a leading underscore is also considered internal.
There is currently only one main use case for using such names rather than
putting the definition in :cpy-file:`Include/internal/` (or directly in a ``.c`` file):

* Internal helpers for other public APIs, which users should not call directly.

Note that historically, underscores were used for APIs that are better served by
the :ref:`unstable-capi`:

* “provisional” APIs, included in a Python release to test real-world
  usage of new APIs;
* APIs for very specialized uses like JIT compilers.


Internal API tests
------------------

C tests for the internal C API live in ``Modules/_testinternalcapi.c``.
Functions named ``test_*`` are used as tests directly.
Python parts of the tests live in various places in ``Lib/test``.


.. _public-capi:

Public C API
============

CPython's public C API is available when ``Python.h`` is included normally
(that is, without defining macros to select the other variants).

It should be defined in ``Include/cpython/`` (unless part of the Limited API,
see below).

.. _public-api-guidelines:

Guidelines for expanding/changing the public API
------------------------------------------------

- Make sure the new API follows reference counting conventions.
  (Following them makes the API easier to reason about, and easier use
  in other Python implementations.)

  - Functions *must not* steal references
  - Functions *must not* return borrowed references
  - Functions returning references *must* return a strong reference

- Make sure the ownership rules and lifetimes of all applicable struct
  fields, arguments and return values are well defined.

- Functions returning ``PyObject *`` must return a valid pointer on success,
  and ``NULL`` with an exception raised on error.
  Most other API must return ``-1`` with an exception raised on error,
  and ``0`` on success.

- APIs with lesser and greater results must return ``0`` for the lesser result,
  and ``1`` for the greater result.
  Consider a lookup function with a three-way return:

  - ``return -1``: internal error or API misuse; exception raised
  - ``return 0``: lookup succeeded; no item was found
  - ``return 1``: lookup succeeded; item was found

Please start a public discussion if these guidelines won't work for your API.

.. note::

   By *return value*, we mean the value returned by the *C return statement*.

C API tests
-----------

Tests for the public C API live in the ``_testcapi`` module.
Functions named ``test_*`` are used as tests directly.
Tests that need Python code (or are just easier to partially write in Python)
live in ``Lib/test``, mainly in :cpy-file:`Lib/test/test_capi`.

Due to its size, the ``_testcapi`` module is defined in several source
files.
To add a new set of tests (or extract a set out of the monolithic
:cpy-file:`Modules/_testcapimodule.c`):

- Create a C file named ``Modules/_testcapi/yourfeature.c``

- The file should define a module as usual, except:

  - Instead of ``<Python.h>``, include ``"parts.h"``.
  - Instead of ``PyInit_modname``, define a ``_PyTestCapi_Init_yourfeature``
    function that *takes* the ``_testcapi`` module and adds functions/classes
    to it. (You can use ``PyModule_AddFunctions`` to add functions.)

- Add the ``_PyTestCapi_Init_*`` function to ``Modules/_testcapi/parts.h``

- Call the ``_PyTestCapi_Init_*`` from ``PyInit__testcapi`` in
  ``Modules/_testcapimodule.c``.

- Add the new C file to :cpy-file:`Modules/Setup.stdlib.in`,
  :cpy-file:`PCbuild/_testcapi.vcxproj` and
  :cpy-file:`PCbuild/_testcapi.vcxproj.filters`,
  alongside the other ``_testcapi/*.c`` entries.

Note that all ``Modules/_testcapi/*.c`` sources initialize the same module,
so be careful about name collisions.

When moving existing tests, feel free to replace ``TestError`` with
``PyExc_AssertionError`` unless actually testing custom exceptions.


.. _unstable-capi:

Unstable C API
==============

The unstable C API tier is meant for extensions that need tight integration
with the interpreter, like debuggers and JIT compilers.
Users of this tier may need to change their code with every minor release.

In many ways, this tier is like the general C API:

- it's available when ``Python.h`` is included normally,
- it should be defined  in :cpy-file:`Include/cpython/`,
- it requires tests, so we don't break it unintentionally
- it requires docs, so both we and the users,
  can agree on the expected behavior,
- it is tested and documented in the same way.

The differences are:

- Names of functions structs, macros, etc. start with the ``PyUnstable_``
  prefix. This defines what's in the unstable tier.
- The unstable API can change in minor versions, without any deprecation
  period.
- A stability note appears in the docs.
  This happens automatically, based on the name
  (via :cpy-file:`Doc/tools/extensions/c_annotations.py`).

Despite being “unstable”, there are rules to make sure third-party code can
use this API reliably:

* Changes and removals can be done in minor releases
  (:samp:`3.{x}.0`, including Alphas and Betas for :samp:`3.{x}.0`).
* Adding a new unstable API *for an existing feature* is allowed even after
  Beta feature freeze, up until the first Release Candidate.
  Consensus on the `Core Development Discourse <https://discuss.python.org/c/core-dev/23>`_
  is needed in the Beta period.
* Backwards-incompatible changes should make existing C callers fail to compile.
  For example, arguments should be added/removed, or a function should be
  renamed.
* When moving an API into or out of the Unstable tier, the old name
  should continue to be available (but deprecated) until an incompatible
  change is made. In other words, while we're allowed to break calling code,
  we shouldn't break it *unnecessarily*.


Moving an API from the public tier to Unstable
----------------------------------------------

* Expose the API under its new name, with the ``PyUnstable_`` prefix.
  The ``PyUnstable_`` prefix must be used for all symbols (functions, macros,
  variables, etc.).
* Make the old name an alias (e.g. a ``static inline`` function calling the
  new function).
* Deprecate the old name, typically using :c:macro:`Py_DEPRECATED`.
* Announce the change in the "What's New".

The old name should continue to be available until an incompatible change is
made. Per Python’s backwards compatibility policy (:pep:`387`),
this deprecation needs to last at least two releases
(modulo Steering Council exceptions).

The rules are relaxed for APIs that were introduced in Python versions
before 3.12, when the official Unstable tier was added.
You can make an incompatible change (and remove the old name)
as if the function was already part of the Unstable tier
for APIs introduced before Python 3.12 that are either:

* Documented to be less stable than default.
* Named with a leading underscore.

Moving an API from the private tier to unstable
-----------------------------------------------

* Expose the API under its new name, with the ``PyUnstable_`` prefix.
* If the old name is documented, or widely used externally,
  make it an alias and deprecate it (typically with :c:macro:`Py_DEPRECATED`).
  It should continue to be available until an incompatible change is made,
  as if it was previously public.

  This applies even to underscored names. Python wasn't always strict with
  the leading underscore.
* Announce the change in What's New.

Moving an API from unstable to public
-------------------------------------

* Expose the API under its new name, without the ``PyUnstable_`` prefix.
* Make the old ``PyUnstable_*`` name be an alias (e.g. a ``static inline``
  function calling the new function).
* Announce the change in What's New.

The old name should remain available until the
new public name is deprecated or removed.
There's no need to deprecate the old name (it was unstable to begin with),
but there's also no need to break working code just because some function
is now ready for a wider audience.


Limited API
===========

The Limited API is a subset of the C API designed to guarantee ABI
stability across Python 3 versions.
Defining the macro ``Py_LIMITED_API`` will limit the exposed API to
this subset.

No changes that break the Stable ABI are allowed.

The Limited API should be defined in ``Include/``, excluding the
``cpython`` and ``internal`` subdirectories.


Guidelines for changing the Limited API, and removing items from it
-------------------------------------------------------------------

While the *Stable ABI*  must not be broken, the existing Limited API can be
changed, and items can be removed from it, if:

- the Backwards Compatibility Policy (:pep:`387`) is followed, and
- the Stable ABI is not broken -- that is, extensions compiled with
  Limited API of older versions of Python continue to work on
  newer versions of Python.

This is tricky to do and requires careful thought.
Some examples:

- Functions, structs etc. accessed by macros in *any version* of the
  Limited API are part of the Stable ABI, even if they are named with
  an underscore. They must not be removed and their signature must not change.
  (Their implementation may change, though.)
- Structs members cannot be rearranged if they were part of any version of
  the Limited API.
- If the Limited API allows users to allocate a struct directly,
  its size must not change.
- Exported symbols (functions and data) must continue to be available
  as exported symbols. Specifically, a function can only be converted
  to a ``static inline`` function (or macro) if Python also continues to
  provide the actual function.
  For an example, see the ``Py_NewRef`` `macro`_ and `redefinition`_ in 3.10.

.. _macro: https://github.com/python/cpython/blob/2cd268a3a9340346dd86b66db2e9b428b3f878fc/Include/object.h#L592-L596
.. _redefinition: https://github.com/python/cpython/blob/2cd268a3a9340346dd86b66db2e9b428b3f878fc/Objects/object.c#L2303-L2313

It is possible to remove items marked as part of the Stable ABI, but only
if there was no way to use them in any past version of the Limited API.


.. _limited-api-guidelines:

Guidelines for adding to the Limited API
----------------------------------------

- Guidelines for the general :ref:`public-capi` apply.
  See :ref:`public-api-guidelines`.

- New Limited API should only be defined if ``Py_LIMITED_API`` is set
  to the version the API was added in or higher.
  (See below for the proper ``#if`` guard.)

- All parameter types, return values, struct members, etc. need to be part
  of the Limited API.

  - Functions that deal with ``FILE*`` (or other types with ABI portability
    issues) should not be added.

- Think twice when defining macros.

  - Macros should not expose implementation details
  - Functions must be exported as actual functions, not (only)
    as functions-like macros.
  - If possible, avoid macros. This makes the Limited API more usable in
    languages that don't use the C preprocessor.

- Please start a public discussion before expanding the Limited API

- The Limited API and must follow standard C, not just features of currently
  supported platforms. The exact C dialect is described in :pep:`7`.

  - Documentation examples (and more generally: the intended use of the API)
    should also follow standard C.
  - In particular, do not cast a function pointer to ``void*`` (a data pointer)
    or vice versa.

- Think about ease of use for the user.

  - In C, ease of use itself is not very important; what is useful is
    reducing boilerplate code needed to use the API. Bugs like to hide in
    boiler plates.

  - If a function will be often called with specific value for an argument,
    consider making it default (used when ``NULL`` is passed in).
  - The Limited API needs to be well documented.

- Think about future extensions

  - If it's possible that future Python versions will need to add a new
    field to your struct, make sure it can be done.
  - Make as few assumptions as possible about implementation details that
    might change in future CPython versions or differ across C API
    implementations. The most important CPython-specific implementation
    details involve:

    - The GIL
    - :ref:`Garbage collection <gc>`
    - Memory layout of PyObject, lists/tuples and other structures

If following these guidelines would hurt performance, add a fast function
(or macro) to the non-limited API and a stable equivalent to the Limited
API.

If anything is unclear, or you have a good reason to break the guidelines,
consider discussing the change at the `capi-sig`_ mailing list.

.. _capi-sig: https://mail.python.org/mailman3/lists/capi-sig.python.org/

Adding a new definition to the Limited API
------------------------------------------

- Add the declaration to a header file directly under ``Include/``, into a
  block guarded with the following:

  .. code-block:: c

    #if !defined(Py_LIMITED_API) || Py_LIMITED_API+0 >= 0x03yy0000

  with the ``yy`` corresponding to the target CPython version, e.g.
  ``0x030A0000`` for Python 3.10.
- Append an entry to the Stable ABI manifest, ``Misc/stable_abi.toml``
- Regenerate the autogenerated files using ``make regen-limited-abi``.
  On platforms without ``make``, run this command directly:

  .. code-block:: shell

     ./python ./Tools/build/stable_abi.py --generate-all ./Misc/stable_abi.toml

- Build Python and check the using ``make check-limited-abi``.
  On platforms without ``make``, run this command directly:

  .. code-block:: shell

    ./python ./Tools/build/stable_abi.py --all ./Misc/stable_abi.toml

- Add tests -- see below.


Limited API tests
-----------------

Since Limited API is a subset of the C API, there's no need to test the
behavior of individual functions. Rather, the tests could verify that some
task is possible using the exposed subset, or exercise a feature that was
removed from the current Limited API but still needs to be supported for
older Limited API/Stable ABI versions.

To add a test file:

- Add a C file ``Modules/_testcapi/yourfeature_limited.c``. If that file
  already exists but its ``Py_LIMITED_API`` version is too low, add a version
  postfix, e.g. ``yourfeature_limited_3_12.c`` for Python 3.12+.
- ``#define Py_LIMITED_API`` to the minimum limited API version needed.
- ``#include "parts.h"`` after the ``Py_LIMITED_API`` definition
- Enclose the entire rest of the file in ``#ifdef LIMITED_API_AVAILABLE``,
  so it's skipped on incompatible builds.
- Follow the general instructions for `C API tests`_. All additions go in the
  sections guarded by ``#ifdef LIMITED_API_AVAILABLE``.

Use the ``test.support.requires_limited_api`` decorator for Python tests
in ``Lib/test``, so they're skipped on incompatible builds.


===================================================
/. 🚀 ./developer-workflow/lang-changes.rst
===================================================

.. _lang-changes:
.. _langchanges:

Changing the Python language
============================
On occasion people come up with an idea on how to change or improve Python as a
programming language. This document is meant to explain exactly what changes
have a reasonable chance of being considered and what the process is to propose
changes to the language.


What qualifies
--------------
First and foremost, it must be understood that changes to the Python
programming language are difficult to make. When the language changes,
**every** Python programmer already in existence and all Python programmers to
come will end up eventually learning about the change you want to propose.
Books will need updating, code will be changed, and a new way to do things will
need to be learned. Changes to the Python programming language are never taken
lightly.

Because of the seriousness that language changes carry, any change must be
beneficial to a large proportion of Python users. If the change only benefits a
small percentage of Python developers then the change will not be made. A good
way to see if your idea would work for a large portion of the Python community
is to ask in the `Ideas Discourse category`_. You can also
go through Python's stdlib and find examples of code which would benefit from
your proposed change (which helps communicate the usefulness of your change to
others). For further guidance, see :ref:`suggesting-changes`.

Your proposed change also needs to be *Pythonic*. While only the Steering
Council can truly classify something as Pythonic, you can read the
:pep:`Zen of Python <20>` for guidance.


.. index::
   single: PEP process

.. _suggesting-changes:

Suggesting new features and language changes
--------------------------------------------

The `Ideas Discourse category`_
is specifically intended for discussion of new features and language changes.
Please don't be disappointed if your idea isn't met with universal approval:
as the :pep:`long list of Withdrawn and Rejected PEPs
<0#abandoned-withdrawn-and-rejected-peps>`
in the :pep:`PEP Index <0>` attests,
and as befits a reasonably mature programming language,
getting significant changes into Python isn't a simple task.

If the idea is reasonable, someone will suggest posting it as a feature
request on the `issue tracker`_, or, for larger changes,
writing it up as PEP following the :ref:`lang-changes-pep-process`.

Sometimes core developers will differ in opinion,
or merely be collectively unconvinced.
When there isn't an obvious victor, then the `Status Quo Wins a Stalemate`_.

For some examples on language changes that were accepted,
see `Justifying Python Language Changes`_.


.. index:: PEP process

.. _lang-changes-pep-process:

PEP process
-----------

Once you are certain you have a language change proposal
which will appeal to the general Python community,
you can begin the :abbr:`PEP (Python enhancement proposal)` process
to officially propose the change.
See :pep:`1` for information on PEPs and the PEP process,
and the :pep:`PEP Index <0>` for examples.

If the PEP is accepted, then your proposed language change will be introduced
in the next release of Python.
Otherwise, your PEP will be recorded as rejected along with an explanation,
to inform others who may propose a similar language change in the future.


.. _issue tracker: https://github.com/python/cpython/issues
.. _Ideas Discourse category: https://discuss.python.org/c/ideas/6
.. _Status Quo Wins a Stalemate: https://www.curiousefficiency.org/posts/2011/02/status-quo-wins-stalemate.html
.. _Justifying Python Language Changes: https://www.curiousefficiency.org/posts/2011/02/justifying-python-language-changes.html


===================================================
/. 🚀 ./developer-workflow/grammar.rst
===================================================

.. _grammar:

==========================
Changing CPython's grammar
==========================

Abstract
========

There's more to changing Python's grammar than editing
:cpy-file:`Grammar/python.gram`.  Here's a checklist.

.. note::
    These instructions are for Python 3.9 and beyond.  Earlier
    versions use a different parser technology.  You probably shouldn't
    try to change the grammar of earlier Python versions, but if you
    really want to, use GitHub to track down the earlier version of this
    file in the devguide.

For more information on how to use the new parser, check the
:ref:`section on how to use CPython's parser <parser>`.

Checklist
=========

Note: sometimes things mysteriously don't work.  Before giving up, try ``make clean``.

* :cpy-file:`Grammar/python.gram`: The grammar, with actions that build AST nodes.
  After changing it, run ``make regen-pegen`` (or ``build.bat --regen`` on Windows),
  to regenerate :cpy-file:`Parser/parser.c`.
  (This runs Python's parser generator, :cpy-file:`Tools/peg_generator`).

* :cpy-file:`Grammar/Tokens` is a place for adding new token types.  After
  changing it, run ``make regen-token`` to regenerate
  :cpy-file:`Include/internal/pycore_token.h`, :cpy-file:`Parser/token.c`,
  :cpy-file:`Lib/token.py` and :cpy-file:`Doc/library/token-list.inc`.
  If you change both ``python.gram`` and ``Tokens``,
  run ``make regen-token`` before ``make regen-pegen``.
  On Windows, ``build.bat --regen`` will regenerate both at the same time.

* :cpy-file:`Parser/Python.asdl` may need changes to match the grammar.
  Then run ``make regen-ast`` to regenerate
  :cpy-file:`Include/internal/pycore_ast.h` and :cpy-file:`Python/Python-ast.c`.

* :cpy-file:`Parser/tokenizer.c` contains the tokenization code.
  This is where you would add a new type of comment or string literal, for example.

* :cpy-file:`Python/ast.c` will need changes to validate AST objects
  involved with the grammar change.

* :cpy-file:`Python/ast_unparse.c` will need changes to unparse AST
  involved with the grammar change ("unparsing" is used to turn annotations
  into strings per :pep:`563`).

* The :ref:`compiler` has its own page.

* ``_Unparser`` in the :cpy-file:`Lib/ast.py` file may need changes
  to accommodate any modifications in the AST nodes.

* :cpy-file:`Doc/library/ast.rst` may need to be updated to reflect changes
  to AST nodes.

* Add some usage of your new syntax to ``test_grammar.py``.

* Certain changes may require tweaks to the library module :mod:`pyclbr`.

* :cpy-file:`Lib/tokenize.py` needs changes to match changes to the tokenizer.

* Documentation must be written! Specifically, one or more of the pages in
  :cpy-file:`Doc/reference/` will need to be updated.


===================================================
/. 🚀 ./developer-workflow/porting.rst
===================================================

.. _porting:

=========================
Porting to a new platform
=========================

The first step is to familiarize yourself with the development toolchain on
the platform in question, notably the C compiler. Make sure you can compile and
run a hello-world program using the target compiler.

Next, learn how to compile and run the Python interpreter on a platform to
which it has already been ported; preferably Unix, but Windows will
do, too. The build process for Python, in particular the ``Makefile`` in the
source distribution, will give you a hint on which files to compile
for Python.  Not all source files are relevant: some are platform-specific,
and others are only used in emergencies (e.g. ``getopt.c``).

It is not recommended to start porting Python without at least a medium-level
understanding of your target platform; i.e. how it is generally used, how to
write platform-specific apps, etc. Also, some Python knowledge is required, or
you will be unable to verify that your port is working correctly.

You will need a ``pyconfig.h`` file tailored for your platform.  You can
start with ``pyconfig.h.in``, read the comments, and turn on definitions that
apply to your platform.  Also, you will need a ``config.c`` file, which lists
the built-in modules you support.  Again, starting with
``Modules/config.c.in`` is recommended.

Finally, you will run into some things that are not supported on your
target platform.  Forget about the ``posix`` module in the beginning. You can
simply comment it out of the ``config.c`` file.

Keep working on it until you get a ``>>>`` prompt.  You may have to disable the
importing of ``site.py`` by passing the ``-S`` option. When you have a prompt,
bang on it until it executes very simple Python statements.

At some point you will want to use the ``os`` module; this is the time to start
thinking about what to do with the ``posix`` module.  It is okay to simply
comment out functions in the ``posix`` module that cause problems; the
remaining ones will be quite useful.

Before you are done, it is highly recommended to run the Python regression test
suite, as described in :ref:`runtests`.


===================================================
/. 🚀 ./triage/index.rst
===================================================

===================
Issues and triaging
===================

.. toctree::
   :maxdepth: 5

   issue-tracker
   triaging
   labels
   github-bpo-faq
   triage-team


===================================================
/. 🚀 ./triage/issue-tracker.rst
===================================================

.. _issue-tracker:
.. _tracker:

=============
Issue tracker
=============


Using the issue tracker
=======================

If you think you have found a bug in Python, you can report it to the
`issue tracker`_. The `issue tracker`_ is now hosted on GitHub, alongside
the codebase and pull requests.  Documentation bugs can also be reported there.

If you would like to file an issue about this devguide, please do so at the
`devguide repo`_.

.. note::
    Prior to moving the issue tracker to GitHub,
    Python used to use a dedicated `Roundup`_ instance as its issue tracker.
    That `old bug tracker`_ was hosted under the domain ``bugs.python.org``
    (sometimes called ``bpo`` for short). A read-only version is
    available on that domain for historical purposes. All ``bpo`` data has been
    migrated to the current `issue tracker`_ on GitHub.

    If you're familiar with ``bpo`` and would like to learn more about GitHub
    issues, please read this page, and the :ref:`triaging` page as they
    provide good introductory material. There is also a :ref:`gh-faq`
    document to answer some of the more popular questions.

Checking if a bug already exists
--------------------------------

The first step before filing an issue report is to see whether the problem has
already been reported.  Checking if the problem is an existing issue will:

* help you see if the problem has already been resolved or has been fixed for
  the next release
* save time for you and the developers
* help you learn what needs to be done to fix it
* determine if additional information, such as how to replicate the issue,
  is needed

To see if an issue already exists, search the bug database using the search box
above the list of bugs on the issues page. A form-based `advanced search`_ query
builder is also available on GitHub to help creating the text query you need.

Reporting an issue
------------------

If the problem you're reporting is not already in the `issue tracker`_, you
can report it using the green "New issue" button on the right of the search
box above the list of bugs. If you're not already signed in to GitHub, it
will ask you to do so now.

First you need to select what kind of problem you want to report. The
available choices are:

* **Bug report**: an existing feature isn't working as expected;
* **Documentation**: there is missing, invalid, or misleading documentation;
* **Enhancement**: suggest a new feature for Python;
* **Performance**: something should work faster;
* **Security**: there is a specific kind of weakness open to exploitation
  through the points of vulnerability;
* **Tests**: something is wrong with CPython's suite of regression tests;
* **Discuss**: you'd like to learn more about Python, discuss ideas for
  possible changes to future Python versions, track core development
  discussions, or join a specific special-interest group.

Depending on your choice, a dedicated form template will appear.
In particular, you'll notice that the last button actually takes you to
the `Python Discourse`_ (``discuss.python.org``),
where many Python-related discussions take place.

The submission form has only two fields that you need to fill:

* in the **Title** field, enter a *very* short description of the problem;
  less than ten words is good;
* in the **Write** field, describe the problem in detail using hints from
  the template that was put in that field for you. Be sure to include what
  you expected to happen, what did happen, and how to replicate the
  problem. Be sure to include whether any extension modules were involved,
  and what hardware and software platform you were using (including version
  information as appropriate). In particular, *what version of Python* you
  were using.

You can tag someone, with :samp:`@{username}` in a comment,
if you think the issue should be brought to their attention.
Use the :ref:`experts` to know who wants to be
tagged or assigned for specific areas.

There are a number of additional fields like **Assignees**, **Labels**,
and **Projects**. Those are filled by triagers and core
developers and are covered in the :ref:`triaging` page. You don't need
to worry about those when reporting issues as a Python user.

Adding special links
--------------------

The following abbreviations can be used in a comment to generate a link:

* :samp:`GH-{NNN}`: to link to another issue or PR;
* :samp:`PEP-{NNN}`: to link to a specific PEP;
* :samp:`BPO-{NNN}`: to link to a bugs.python.org issue;

See also the `list of autolinks supported by GitHub <autolinks_>`_.

Following issues
----------------

If you want to subscribe yourself to an issue, click the :guilabel:`🔔 Subscribe`
button in the sidebar.  Similarly, if you were tagged by somebody else but
decided this issue is not for you, click the :guilabel:`🔕 Unsubscribe`
button in the sidebar.  Note that you are automatically subscribed to
issues you created.

Tracking dependencies and duplicates
------------------------------------

It is possible to use `checklists`_ to track dependencies or,
in case of meta-issues, to link to the other related issues.

By writing :samp:`Duplicate of #{NNN}` in a comment, you can
`mark issues and PRs as duplicates <duplicates_>`_.


Disagreement with a resolution on the issue tracker
===================================================

As humans, we will have differences of opinions from time to time. First and
foremost, please be respectful that care, thought, and volunteer time went into
the resolution.

With this in mind, take some time to consider any comments made in association
with the resolution of the issue. On reflection, the resolution steps may seem
more reasonable than you initially thought.

If you still feel the resolution is incorrect, then raise a thoughtful question
on the `Core Development Discourse category`_.
Further argument and disrespectful responses
after a consensus has been reached amongst the core developers is unlikely to
win any converts.

As a reminder, issues closed by a core developer have already been carefully
considered. Please do not reopen a closed issue. An issue can be closed with
reason either as ``complete`` or ``not planned``.

.. seealso::

   `The Python issue tracker <issue tracker_>`_
      Where to report issues about Python.


.. _issue tracker: https://github.com/python/cpython/issues
.. _advanced search: https://github.com/search/advanced
.. _devguide repo: https://github.com/python/devguide/issues
.. _Roundup: https://www.roundup-tracker.org/
.. _Python Discourse: https://discuss.python.org/
.. _autolinks: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
.. _checklists: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists
.. _duplicates: https://docs.github.com/en/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate
.. _Core Development Discourse category: https://discuss.python.org/c/core-dev/23
.. _old bug tracker: https://bugs.python.org/


===================================================
/. 🚀 ./triage/triaging.rst
===================================================

.. _triaging:

=================
Triaging an issue
=================

This section of the devguide documents the :ref:`issue tracker <tracker>` for
users and developers.


Checklist for triaging
======================

* Read the initial message and the comments.
* Check that the title is reasonably concise, while including enough specifics
  so that those scanning the list of issues can quickly identify its topic.
* For pull requests, ensure that the corresponding issue is added before
  the title (:samp:`gh-NNNNN: {Title}`).
* Set all the relevant :ref:`labels <gh-labels>`.
* Where appropriate, set the :guilabel:`Assignees`, :guilabel:`Reviewers`,
  :guilabel:`Project` fields, and possibly @mention relevant people.
* You might also leave a brief comment about the proposed next action needed.
  If there is a long message list, a summary can be very helpful.
* If the issue is clearly invalid (unrelated to CPython, duplicate, spam, etc),
  you can use GitHub's "Close as not planned" option.

Assignees
---------

This field indicates who is expected to take the next step in resolving
the issue.

It is acceptable to assign an issue to someone if the issue cannot move
forward without their help; e.g., they need to make a technical decision on
how to proceed. Also consult the :ref:`experts` as certain
stdlib modules should always be assigned to a specific person.

Note that in order to assign an issue to someone, that person **must** be
a team member, likely a triager or a core developer.

.. The Assignees subsection was copied from the labels.rst page in #930.
   For consistency, the other fields mentioned above should be documented too.


.. _helptriage:

Helping triage issues
=====================

Once you know your way around how Python's source files are
structured and you are comfortable with the workflow, a great way to
contribute is to help triage issues. Do realize, though, that experience
working on Python is needed in order to effectively help triage.

Around the clock, new issues are being opened on the :ref:`issue tracker
<tracker>` and existing issues are being updated. Every issue needs to be
triaged to make sure everything runs smoothly.

Classifying reports
-------------------

For bugs, an issue needs to:

* clearly explain the bug so it can be reproduced
* include all relevant platform details
* state what version(s) of Python are affected by the bug.

These are things you can help with once you have experience developing for
Python:

* Try reproducing the bug: if it is not explained clearly
  enough for you to reproduce it, then there is a good chance a core developer
  won't be able to either.
* See if the issue happens on a different Python version: it is always helpful
  to know if a bug not only affects the in-development version of Python, but
  whether it also affects other versions in maintenance mode.
* Write a unit test: if the bug lacks a unit test that should end up in
  Python's test suite, having that written can be very helpful.

This is all helpful as it allows members of the :ref:`triage team <triage-team>`
to properly classify an issue so it can be handled by the right core developers
in a timely fashion.

Reviewing pull requests
-----------------------

If an issue has a linked pull request that has not been reviewed,
you can help by making sure the pull request:

* is a good solution to the problem it is trying to solve
* follows the style guides (:pep:`7`, :pep:`8`, :ref:`style-guide`, etc.)
* includes proper tests
* includes proper documentation changes
* includes a :ref:`NEWS entry <news-entry>` (if needed)
* includes the author in ``Misc/ACKS``, either already or the patch adds them
* doesn't have conflicts with the ``main`` branch

Doing all of this allows core developers and :ref:`triagers <triage-team>`
to more quickly look for subtle issues that only people with extensive
experience working on Python's code base will notice.

See also :ref:`committing`.

Finding an issue you can help with
----------------------------------

If you want to help with triaging, you might also want to search for issues
in modules for which you have a working knowledge.  Search for the name of a
module in the issue tracker, filter by label, or use the `advanced search`_
to find these issues.

.. _advanced search: https://github.com/search/advanced


===================================================
/. 🚀 ./triage/labels.rst
===================================================

.. _labels:
.. _gh-labels:

=============
GitHub labels
=============

Triagers, core developers and bots can add labels on GitHub
to categorize issues and pull requests.
Many labels are shared for both use cases, while some are dedicated
only to one. Below is a possibly inexhaustive list, but it should get
you going. For a full list, see `here <https://github.com/python/cpython/issues/labels>`_.


.. _general-purpose-labels:
.. _Type:
.. _labels-type:

Type labels
===========

These labels are used to specify the type of issue:

* :gh-label:`type-bug`: for unexpected behaviors, bugs, or exceptions
  (not hard crashes).
* :gh-label:`type-crash`: for hard crashes of the interpreter, possibly with a
  core dump.
* :gh-label:`type-feature`: for feature requests or enhancements.
  The `Ideas Discourse category`_ can be used to discuss enhancements
  before filing an issue.
* :gh-label:`type-security`: for security issues.
  See also `Reporting security issues in Python`_.


.. _Component:
.. _labels-component:

Component labels
================

These labels are mostly used to specify which :ref:`part of the codebase
<build-directory-structure>` is affected by the issue/PR:

* :gh-label:`stdlib`: for standard library modules in the :cpy-file:`Lib`
  directory (written in Python).
* :gh-label:`extension-modules`: for standard library modules in the
  :cpy-file:`Modules` directory (written in C).
* :gh-label:`interpreter-core`: for changes related to the interpreter core in
  the :cpy-file:`Objects`, :cpy-file:`Python`, :cpy-file:`Grammar`,
  and :cpy-file:`Parser` dirs (written mostly in C).
* :gh-label:`docs`: for documentation in the :cpy-file:`Doc` directory
  (written in :ref:`reStructuredText <markup>`), docstrings, and code comments.
* :gh-label:`tests`: for tests in the :cpy-file:`Lib/test` directory
  (written in Python) and other changes related to tests, :mod:`unittest`,
  or :mod:`doctest`.

OS labels
=========

These labels are used to specify which operating systems are affected.
Since most issues either affect all systems or are specific to Unix,
the only available labels are :gh-label:`OS-windows`, :gh-label:`OS-mac`,
and :gh-label:`OS-freebsd`.


.. _Expert labels:
.. _Topic labels:

Topic labels
============

These labels are used to denote the specific topic area, if any, of
the issue/PR.  This includes both specific modules/packages and generic
interest areas.

Adding these labels is also a way to notify the relevant experts, since
they are encouraged to subscribe to them.  Depending on the label,
this might also automatically add the issue to a GitHub project.

You can see the `full list of topic labels on GitHub
<https://github.com/python/cpython/labels?q=topic>`_.


Version labels
==============

These labels are used to indicate which versions of Python are affected.
The available version labels (with the form :samp:`3.{N}`) are updated
whenever new major releases are created or retired.

See also :ref:`the branch status page <branchstatus>`
for a list of active branches.


.. _Keywords:
.. _Other:
.. _Priority:
.. _labels-other:

Other labels
============

* :gh-label:`triaged`: for issue has been accepted as valid by a triager.
* :gh-label:`easy`: for issues that are considered easy.
* :gh-label:`build`/:gh-label:`performance`: for issues related
  to the build process or performance, respectively.
* :gh-label:`release-blocker`/:gh-label:`deferred-blocker`: for issues/PRs
  that, unless fixed, will hold the current or next release respectively.
  Triagers may set these labels for issues that must be fixed before a release,
  and the :ref:`branch's release manager <branchstatus>`
  will review them and determine if they indeed qualify,
  removing or retaining the label as appropriate.
* :gh-label:`pending`: for issues/PRs that will be closed unless further
  feedback is provided.
* :gh-label:`stale`: for issues/PRs that have been inactive for a while.
* :gh-label:`sprint`: for easier filtering of issues/PRs being worked on
  during official sprints.


.. _GitHub Labels for PRs:
.. _github-pr-labels:

Labels specific to PRs
======================

The following labels only apply to :ref:`Pull Requests <pullrequest>`.
They are either set automatically by bots, or added by humans
to trigger specific bot behaviors.

* :gh-label:`DO-NOT-MERGE`: for PRs that shouldn't be merged in their current
  state.  It also prevents `miss-islington`_ from being able to automatically
  merge the PR.
* :samp:`needs backport to {X.Y}`: used to indicate which branches the PR
  should be backported to.  Once the PR is merged, ``miss-islington`` will
  automatically attempt to create backport PRs for the versions indicated
  by these labels.
  See also :ref:`the status of the Python branches <branchstatus>` for a list
  of branches and the type of PRs that can be backported to them.
* :gh-label:`skip issue`: for trivial changes (such as typo fixes, comment
  changes, and section rephrases) that don't require a corresponding issue.
* :gh-label:`skip news`: for PRs that don't need a NEWS entry.
  The :ref:`news-entry` section covers in details in which cases the NEWS entry
  can be skipped.
* :gh-label:`test-with-buildbots`: used to test the latest commit with
  the :ref:`buildbot fleet <buildbots>` whenever more testing is required
  before merging.  This may take multiple hours to complete.
* :samp:`awaiting {action}`: these labels are applied and used by `bedevere`_
  to indicate the stage of a PR and should not be applied manually.


.. _Reporting security issues in Python: https://www.python.org/dev/security/
.. _Ideas Discourse category: https://discuss.python.org/c/ideas/6
.. _miss-islington: https://github.com/python/miss-islington
.. _bedevere: https://github.com/python/bedevere/#pr-state-machine


===================================================
/. 🚀 ./triage/github-bpo-faq.rst
===================================================

.. _github-bpo-faq:
.. _gh-faq:

===========================
GitHub issues for BPO users
===========================

Here are some frequently asked questions about how to do things in
GitHub issues that you used to be able to do on `bpo`_.

Before you ask your own question, make sure you read :ref:`tracker`
and :ref:`triaging` (specifically including :ref:`gh-labels`) as those
pages include a lot of introductory material.

How to format my comments nicely?
=================================

There is a wonderful `beginner guide to writing and formatting on GitHub
<https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github>`_.
Highly recommended.

One pro-tip we can sell you right here is that if you want to paste
some longer log as a comment, attach a file instead (see how below).
If you still insist on pasting it in your comment, do it like this::

    <details>
    <summary>This is the summary text, click me to expand</summary>

    Here goes the long, long text.
    It will be collapsed by default!
    </details>

How to attach files to an issue?
================================

Drag them into the comment field, wait until the file uploads, and GitHub
will automatically put a link to your file in your comment text.

How to link to file paths in the repository when writing comments?
==================================================================

Use Markdown links. If you link to the default GitHub path, the file
will link to the latest current version on the given branch.

You can get a permanent link to a given revision of a given file by
`pressing "y" <https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files>`_.

How to do advanced searches?
============================

Use the `GitHub search syntax`_ or the interactive `advanced search`_ form
that generates search queries for you.

Where is the "nosy list"?
=========================

Subscribe another person to the issue by tagging them in the comment with
``@username``.

If you want to subscribe yourself to an issue, click the *🔔 Subscribe*
button in the sidebar.

Similarly, if you were tagged by somebody else but
decided this issue is not for you, you might click the *🔕 Unsubscribe*
button in the sidebar.

There is no exact equivalent of the "nosy list" feature, so to preserve
this information during the transfer, we list the previous members of
this list in the first message on the migrated issue.

How to add issue dependencies?
==============================

Add a checkbox list like this in the issue description::

    - [x] #739
    - [ ] https://github.com/octo-org/octo-repo/issues/740
    - [ ] Add delight to the experience when all tasks are complete :tada:

then those will become sub-tasks on the given issue. Moreover, GitHub will
automatically mark a task as complete if the other referenced issue is
closed. More details in the `official GitHub documentation
<https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists>`_.

What on earth is a "mannequin"?
===============================

For issues migrated to GitHub from `bpo`_ where the authors or commenters
are not core developers, we opted not to link to their GitHub accounts
directly. Users not in the `python organization on GitHub
<https://github.com/orgs/python/people>`_ might not like comments to
appear under their name from an automated import.  Others never linked GitHub on
`bpo`_ in the first place so linking their account, if any, would be impossible.

In those cases a "mannequin" account is present to help follow the conversation
that happened in the issue. In case the user did share their GitHub account
name in their `bpo`_ profile, we use that. Otherwise, their classic `bpo`_
username is used instead.

Where did the "resolution" field go?
====================================

Based on historical data we found it not being used very often.

Where did the "low", "high", and "critical" priorities go?
==========================================================

Based on historical data we found those not being used very often.

How to find a random issue?
===========================

This is not supported by GitHub.

Where are regression labels?
============================

We rarely updated this information and it turned out not to be
particularly useful outside of the change log.


.. _bpo: https://bugs.python.org/
.. _GitHub search syntax: https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
.. _advanced search: https://github.com/search/advanced


===================================================
/. 🚀 ./triage/triage-team.rst
===================================================

.. _triage-team:
.. _triagers:

===========
Triage Team
===========

The Python triage team is a group dedicated towards improving workflow
efficiency through thoughtful review and triage of open issues and pull
requests. This helps contributors receive timely feedback and enables core
developers to focus on reviewed items which reduces their workload. The
expectations of this role expand upon the "Triager" role on the
:ref:`issue tracker <tracker>`. The responsibilities listed below are primarily centered
around the Python GitHub repositories. This extends beyond CPython, and, as
needed, to other repos such as devguide and core-workflow.

Responsibilities include:

* Classifying issues and PRs
* Applying appropriate :ref:`labels <gh-labels>` to issues/PRs
* Notifying appropriate core developers
* :ref:`Reviewing PRs <reviewing-prs>`
* Assisting contributors

Although triagers have the power to close PRs, they should generally not do so
without first consulting a core developer. By having triagers and core developers work together,
the author receives a careful consideration of their PR. This encourages future
contributions, regardless of whether their PR is accepted or closed.

Nonetheless, triagers should feel free to close a PR if they judge that the
chance of the PR being merged would be exceedingly low, even if substantial
revisions were made to the PR. This includes (but is not limited to) the
following:

* PRs proposing solely cosmetic changes
* PRs proposing changes to deprecated modules
* PRs that are no longer relevant. This includes:

  - PRs proposing fixes for bugs that can no longer be reproduced
  - PRs proposing changes that have been rejected by Python core developers
    elsewhere (e.g. in an issue or a PEP rejection notice)

If a triager has any doubt about whether to close a PR,
they should consult a core developer before taking any action.

Triagers can also make use of the :gh-label:`pending` and :gh-label:`stale`
labels to suggest that a PR may be suitable for closure.
For more information, see the entries in the :ref:`labels-other` section.

Note that it is of paramount importance to treat every contributor to the Python
project kindly and with respect. Regardless of whether they're entirely new
or a veteran core developer, they're actively choosing to voluntarily donate their
time towards the improvement of Python. As is the case with any member of
the Python Software Foundation, always follow the `PSF Code of Conduct`_.

.. _PSF Code of Conduct: https://www.python.org/psf/conduct/


Becoming a member of the Python triage team
===========================================

All Python core developers are welcome to invite a Python contributor to the
Python triage team. Triagers will be responsible to handle not just issues, but
also pull requests, and even managing backports. A Python triager has access to
more repositories than just CPython.

When you have consistently shown the ability to properly
help triage issues without guidance, you may request that you
be given the "Triager" role on the :ref:`issue tracker <tracker>`.
You can make the request to any core developer. If they decide you are ready
to gain the extra privileges on the tracker they will then act as a mentor to
you until you are ready to do things entirely on your own. There is no set rule
as to how many issues you need to have helped with before or how long you have
been participating. The key requirements are that you show the desire to
help, you are able to work well with others (especially those already with the
Triager role), and that have a firm grasp of how to do things on the issue
tracker properly on your own.

Gaining the Triager role will allow you to set any value on any issue in the
tracker, releasing you from the burden of having to ask others to set values on
an issue for you in order to properly triage something. This will not only help
speed up and simplify your work in helping out, but also help lessen the
workload for everyone by gaining your help.

Any existing active contributor to the Python repository on GitHub can
transition into becoming a Python triager. They can request this to any core
developer, either confidentially via a DM in Discourse, or
publicly by opening an `issue in the core-workflow repository
<https://github.com/python/core-workflow/issues/new?template=triage_membership.md>`_.
If the core developer decides you are ready to gain the extra privileges on the
tracker, they will ask a :ref:`Python organization admin <current owners>`
to invite you to the Python organisation, and then  act as a mentor to you until
you are ready to do things entirely on your own.

For every new triager, it would be great to announce them in the
`Committers category <https://discuss.python.org/c/committers/5>`_
on the `Python Discourse <https://discuss.python.org/>`_
(`example announcement
<https://discuss.python.org/t/abhilash-raj-has-been-granted-triage-role-on-github/2089>`__).


===================================================
/. 🚀 ./documentation/index.rst
===================================================

=============
Documentation
=============

.. toctree::
   :maxdepth: 5

   start-documenting
   help-documenting
   style-guide
   markup
   translating
   devguide


===================================================
/. 🚀 ./documentation/start-documenting.rst
===================================================

.. _start-documenting:
.. _documenting:

===============
Getting started
===============

.. highlight::  rest

The Python language has a substantial body of documentation, much of it
contributed by various authors. The markup used for the Python documentation is
`reStructuredText`_, developed by the `docutils`_ project, amended by custom
directives and using a toolset named `Sphinx`_ to post-process the HTML output.

The documentation in HTML, PDF or EPUB format is generated from text files
written using the :ref:`reStructuredText format <markup>` and contained in the
:ref:`CPython Git repository <setup>`.

.. _reStructuredText: https://docutils.sourceforge.io/rst.html

.. note::

   If you're interested in contributing to Python's documentation, there's no
   need to write reStructuredText if you're not so inclined; plain text
   contributions are more than welcome as well.  Send an e-mail to
   docs@python.org or open an issue on the :ref:`tracker <reporting-bugs>`.


Introduction
============

Python's documentation has long been considered to be good for a free
programming language.  There are a number of reasons for this, the most
important being the early commitment of Python's creator, Guido van Rossum, to
providing documentation on the language and its libraries, and the continuing
involvement of the user community in providing assistance for creating and
maintaining documentation.

The involvement of the community takes many forms, from authoring to bug reports
to just plain complaining when the documentation could be more complete or
easier to use.

This section is aimed at authors and potential authors of documentation for
Python.  More specifically, it is for people contributing to the standard
documentation and developing additional documents using the same tools as the
standard documents.  This guide will be less useful for authors using the Python
documentation tools for topics other than Python, and less useful still for
authors not using the tools at all.

If your interest is in contributing to the Python documentation, but you don't
have the time or inclination to learn reStructuredText and the markup structures
documented here, there's a welcoming place for you among the Python contributors
as well.  Any time you feel that you can clarify existing documentation or
provide documentation that's missing, the existing documentation team will
gladly work with you to integrate your text, dealing with the markup for you.
Please don't let the material in this section stand between the documentation
and your desire to help out!


.. _building-doc:

Building the documentation
==========================

.. highlight:: bash

To build the documentation, follow the steps in one of the sections below.
You can view the documentation after building the HTML
by opening the file :file:`Doc/build/html/index.html` in a web browser.

.. note::

   The following instructions all assume your current working dir is
   the ``Doc`` subdirectory in your :ref:`CPython repository clone <checkout>`.
   Make sure to switch to it with ``cd Doc`` if necessary.


.. _doc-create-venv:

Create a virtual environment
----------------------------

.. _doc-create-venv-unix:

**On Unix platforms** that support :program:`make`
(including Linux, macOS and BSD),
you can create a new :mod:`venv` with the required dependencies using::

   make venv

Building the docs with :program:`make` will automatically use this environment
without you having to activate it.

.. _doc-create-venv-windows:

**On Windows**, or if not using :program:`make`,
`create a new virtual environment <venv-create_>`__ manually.
Always be sure to `activate this environment <venv-activate_>`__
before building the documentation.


.. _building-using-make:
.. _using-make-make-bat:
.. _doc-build-make:

Build using make / make.bat
---------------------------

A Unix ``Makefile`` is provided, :cpy-file:`Doc/Makefile`,
along with a :cpy-file:`Doc/make.bat` batch file for Windows
that attempts to emulate it as closely as practical.

.. important::

   The Windows ``make.bat`` batch file lacks a ``make venv`` target.
   Instead, it automatically installs any missing dependencies
   into the currently activated environment (or the base Python, if none).
   Make sure the environment you :ref:`created above <doc-create-venv-windows>`
   is `activated <venv-activate_>`__ before running ``make.bat``.

To build the docs as HTML, run::

   make html

.. tip:: * Replace ``html`` with ``htmlview`` to open the docs in a web browser
           once the build completes.
         * Replace ``html`` with ``htmllive`` to rebuild the docs,
           start a local server, and automatically reload the page in your
           browser when you make changes to reST files (Unix only).

To check the docs for common errors with `Sphinx Lint`_
(which is run on all :ref:`pull requests <pullrequest>`), use::

   make check

To list other supported :program:`make` targets, run::

   make help

See :cpy-file:`Doc/README.rst` for more information.


.. _using-sphinx-build:
.. _doc-build-sphinx:

Build using Sphinx directly
---------------------------

Advanced users may want to invoke Sphinx directly,
to pass specialized options or to handle specific use cases.

Make sure the environment you :ref:`created above <doc-create-venv-windows>`
is `activated <venv-activate_>`__.
Then, install the documentation requirements, :cpy-file:`Doc/requirements.txt`.
Using pip::

   python -m pip install --upgrade -r requirements.txt

Finally, directly invoke Sphinx with::

   python -m sphinx -b html . build/html

To use a different `Sphinx builder`_,
replace ``html`` above with the desired builder ``name``.


.. _docutils: https://docutils.sourceforge.io/
.. _Sphinx: https://www.sphinx-doc.org/
.. _Sphinx builder: https://www.sphinx-doc.org/en/master/usage/builders/index.html
.. _Sphinx Lint: https://github.com/sphinx-contrib/sphinx-lint
.. _venv-activate: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#activating-a-virtual-environment
.. _venv-create: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#creating-a-virtual-environment


Style guide
===========

Moved to :doc:`style-guide`.


Translating
===========

Moved to :doc:`translating`.


===================================================
/. 🚀 ./documentation/help-documenting.rst
===================================================

.. _help-documenting:
.. _docquality:

==========================
Helping with documentation
==========================

Python is known for having well-written documentation. Maintaining the
documentation's accuracy and keeping a high level of quality takes a lot of
effort. Community members, like you, help with writing, editing, and updating
content, and these contributions are appreciated and welcomed.

This high-level **Helping with Documentation** section provides:

* an overview of Python's documentation
* how to help with documentation issues
* information on proofreading

You will find extensive and detailed information on how to write documentation
and submit changes on the :ref:`Documenting Python <documenting>` page.


Python documentation
====================

The :ref:`Documenting Python <documenting>` section covers the details of how
Python's documentation works. It includes information about the markup
language used, specific formats, and style recommendations. Looking at
pre-existing documentation source files can be very helpful when getting
started. :ref:`How to build the documentation <building-doc>` walks you through
the steps to create a draft build which lets you see how your changes will look
and validates that your new markup is correct.

You can view the documentation built from :ref:`in-development <indevbranch>`
and :ref:`maintenance <maintbranch>` branches at https://docs.python.org/dev/.
The in-development and recent maintenance branches are rebuilt once per day.

If you would like to be more involved with documentation, consider subscribing
to the `Documentation category on the Python Discourse
<https://discuss.python.org/c/documentation/26>`_ and the
`docs@python.org <https://mail.python.org/mailman3/lists/docs.python.org/>`_ mailing list
where user issues are raised and documentation toolchain, projects, and standards
are discussed.


Helping with documentation issues
=================================

If you look at `documentation issues`_ on the `issue tracker`_, you
will find various documentation problems that may need work. Issues vary from
typos to unclear documentation and items lacking documentation.

If you see a documentation issue that you would like to tackle, you can:

* check to see if there is pull request icon to the right of the issue's title,
  or an open pull request listed under :guilabel:`Linked PRs` in the issue body.
  If there is, then someone has already created a pull
  request for the issue.
* leave a comment on the issue saying you are going to try and create a pull
  request and roughly how long you think you will take to do so (this allows
  others to take on the issue if you happen to forget or lose interest).
* submit a :ref:`pull request <pullrequest>` for the issue.

By following the steps in the :ref:`Quick Guide to Pull Requests <pullrequest-quickguide>`,
you will learn the workflow for documentation pull requests.

.. _documentation issues: https://github.com/python/cpython/issues?q=is%3Aissue+is%3Aopen+label%3Adocs
.. _octocat: https://github.com/logos


Proofreading
============

While an issue filed on the `issue tracker`_ means there is a known issue
somewhere, that does not mean there are not other issues lurking about in the
documentation. Proofreading a part of the documentation, such as a "How to" or
OS specific document, can often uncover problems (e.g., documentation that
needs updating for Python 3).

If you decide to proofread, read a section of the documentation from start
to finish, filing issues in the issue tracker for each major type of problem
you find. Simple typos don't require issues of their own, but, instead, submit
a pull request directly. It's best to avoid filing a single issue for an entire
section containing multiple problems; instead, file several issues so that it
is easier to break the work up for multiple people and more efficient review.

.. _issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./documentation/style-guide.rst
===================================================

.. _style-guide:

===========
Style guide
===========

.. highlight::  rest

This document describes the style guide for our documentation.


Use of whitespace
=================

All reST files use an indentation of 3 spaces; no tabs are allowed.  The
maximum line length is 80 characters for normal text, but tables, deeply
indented code samples and long links may extend beyond that.  Code example
bodies should use normal Python 4-space indentation.

Make generous use of blank lines where applicable; they help group things
together.

A sentence-ending period may be followed by one or two spaces; while reST
ignores the second space, it is customarily put in by some users, for example
to aid Emacs' auto-fill mode.

Footnotes
=========

Footnotes are generally discouraged, though they may be used when they are the
best way to present specific information. When a footnote reference is added at
the end of the sentence, it should follow the sentence-ending punctuation. The
reST markup should appear something like this::

    This sentence has a footnote reference. [#]_ This is the next sentence.

Footnotes should be gathered at the end of a file, or if the file is very long,
at the end of a section. The docutils will automatically create backlinks to
the footnote reference.

Footnotes may appear in the middle of sentences where appropriate.

Capitalization
==============

.. sidebar:: Sentence case

   Sentence case is a set of capitalization rules used in English
   sentences: the first word is always capitalized and other words are
   only capitalized if there is a specific rule requiring it.

In the Python documentation, the use of sentence case in section titles is
preferable, but consistency within a unit is more important than
following this rule.  If you add a section to a chapter where most
sections are in title case, you can either convert all titles to
sentence case or use the dominant style in the new section title.

Sentences that start with a word for which specific rules require
starting it with a lowercase letter should be avoided.

.. note::

   Sections that describe a library module often have titles in the
   form of "modulename --- Short description of the module."  In this
   case, the description should be capitalized as a stand-alone
   sentence.

Many special names are used in the Python documentation, including the names of
operating systems, programming languages, standards bodies, and the like. Most
of these entities are not assigned any special markup, but the preferred
spellings are given here to aid authors in maintaining the consistency of
presentation in the Python documentation.

Other terms and words deserve special mention as well; these conventions should
be used to ensure consistency throughout the documentation:

CPU
   For "central processing unit." Many style guides say this should be
   spelled out on the first use (and if you must use it, do so!). For
   the Python documentation, this abbreviation should be avoided since
   there's no reasonable way to predict which occurrence will be the
   first seen by the reader. It is better to use the word "processor"
   instead.

POSIX
   The name assigned to a particular group of standards. This is always
   uppercase.

Python
   The name of our favorite programming language is always capitalized.

reST
   For "reStructuredText," an easy to read, plaintext markup syntax
   used to produce Python documentation.  When spelled out, it is
   always one word and both forms start with a lowercase 'r'.

Unicode
   The name of a character coding system. This is always written
   capitalized.

Unix
   The name of the operating system developed at AT&T Bell Labs in the early
   1970s.

Affirmative tone
================

The documentation focuses on affirmatively stating what the language does and
how to use it effectively.

Except for certain security or segfault risks, the docs should avoid
wording along the lines of "feature x is dangerous" or "experts only".  These
kinds of value judgments belong in external blogs and wikis, not in the core
documentation.

Bad example (creating worry in the mind of a reader):

    Warning: failing to explicitly close a file could result in lost data or
    excessive resource consumption.  Never rely on reference counting to
    automatically close a file.

Good example (establishing confident knowledge in the effective use of the
language):

    A best practice for using files is use a try/finally pair to explicitly
    close a file after it is used.  Alternatively, using a with-statement can
    achieve the same effect.  This assures that files are flushed and file
    descriptor resources are released in a timely manner.

Economy of expression
=====================

More documentation is not necessarily better documentation.  Err on the side
of being succinct.

It is an unfortunate fact that making documentation longer can be an impediment
to understanding and can result in even more ways to misread or misinterpret the
text.  Long descriptions full of corner cases and caveats can create the
impression that a function is more complex or harder to use than it actually is.

Security considerations (and other concerns)
============================================

Some modules provided with Python are inherently exposed to security issues
(e.g. shell injection vulnerabilities) due to the purpose of the module
(e.g. :mod:`ssl`).  Littering the documentation of these modules with red
warning boxes for problems that are due to the task at hand, rather than
specifically to Python's support for that task, doesn't make for a good
reading experience.

Instead, these security concerns should be gathered into a dedicated
"Security Considerations" section within the module's documentation, and
cross-referenced from the documentation of affected interfaces with a note
similar to :samp:`"Please refer to the :ref:\`{security-considerations}\`
section for important information on how to avoid common mistakes."`.

Similarly, if there is a common error that affects many interfaces in a
module (e.g. OS level pipe buffers filling up and stalling child processes),
these can be documented in a "Common Errors" section and cross-referenced
rather than repeated for every affected interface.

Code examples
=============

Short code examples can be a useful adjunct to understanding.  Readers can often
grasp a simple example more quickly than they can digest a formal description in
prose.

People learn faster with concrete, motivating examples that match the context of
a typical use case.  For instance, the :meth:`str.rpartition` method is better
demonstrated with an example splitting the domain from a URL than it would be
with an example of removing the last word from a line of Monty Python dialog.

The ellipsis for the :py:data:`sys.ps2` secondary interpreter prompt should only
be used sparingly, where it is necessary to clearly differentiate between input
lines and output lines.  Besides contributing visual clutter, it makes it
difficult for readers to cut-and-paste examples so they can experiment with
variations.

Code equivalents
================

Giving pure Python code equivalents (or approximate equivalents) can be a useful
adjunct to a prose description.  A documenter should carefully weigh whether the
code equivalent adds value.

A good example is the code equivalent for :func:`all`.  The short 4-line code
equivalent is easily digested; it re-emphasizes the early-out behavior; and it
clarifies the handling of the corner-case where the iterable is empty.  In
addition, it serves as a model for people wanting to implement a commonly
requested alternative where :func:`all` would return the specific object
evaluating to False whenever the function terminates early.

A more questionable example is the code for :func:`itertools.groupby`.  Its code
equivalent borders on being too complex to be a quick aid to understanding.
Despite its complexity, the code equivalent was kept because it serves as a
model to alternative implementations and because the operation of the "grouper"
is more easily shown in code than in English prose.

An example of when not to use a code equivalent is for the :func:`oct` function.
The exact steps in converting a number to octal doesn't add value for a user
trying to learn what the function does.

Audience
========

The tone of the tutorial (and all the docs) needs to be respectful of the
reader's intelligence.  Don't presume that the readers are stupid.  Lay out the
relevant information, show motivating use cases, provide glossary links, and do
your best to connect-the-dots, but don't talk down to them or waste their time.

The tutorial is meant for newcomers, many of whom will be using the tutorial to
evaluate the language as a whole.  The experience needs to be positive and not
leave the reader with worries that something bad will happen if they make a
misstep.  The tutorial serves as guide for intelligent and curious readers,
saving details for the how-to guides and other sources.

Be careful accepting requests for documentation changes from the rare but vocal
category of reader who is looking for vindication for one of their programming
errors ("I made a mistake, therefore the docs must be wrong ...").  Typically,
the documentation wasn't consulted until after the error was made.  It is
unfortunate, but typically no documentation edit would have saved the user from
making false assumptions about the language ("I was surprised by ...").


===================================================
/. 🚀 ./documentation/markup.rst
===================================================

.. _markup:

=======================
reStructuredText markup
=======================

.. highlight::  rest

This document describes the custom reStructuredText markup introduced by Sphinx
to support Python documentation and how it should be used.


Quick reference
===============

This table summarizes which markup should be used for some commonly used
elements:

======================= =========================================== ====================
Element                 Markup                                      See also
======================= =========================================== ====================
arguments/parameters    ``*arg*``                                   :ref:`inline-markup`
variables/literals/code ````foo````, ````42````, ````len(s) - 1```` :ref:`inline-markup`
True/False/None         ````True````, ````False````, ````None````   :ref:`inline-markup`
functions definitions   ``.. function:: print(*args)``              :ref:`directives`
functions references    ``:func:`print```                           :ref:`roles`
reference labels        ``.. _label-name:``                         :ref:`doc-ref-role`
internal references     ``:ref:`label-name```                       :ref:`doc-ref-role`
external links          ```Link text <https://example.com>`_``      :ref:`hyperlinks`
roles w/ custom text    ``:role:`custom text <target>```            :ref:`roles`
roles w/ only last part ``:role:`~hidden.hidden.visible```          :ref:`roles`
roles w/o link          ``:role:`!target```                         :ref:`roles`
issues                  ``:gh:`ID```, ``:issue:`ID```               :ref:`roles`
CPython source          ``:source:`PATH```                          :ref:`roles`
comments                ``.. a comment``                            :ref:`comments`
======================= =========================================== ====================


.. _rst-primer:

reStructuredText primer
=======================

This section is a brief introduction to reStructuredText (reST) concepts and
syntax, intended to provide authors with enough information to author documents
productively.  Since reST was designed to be a simple, unobtrusive markup
language, this will not take too long.

.. seealso::

    The authoritative `reStructuredText User
    Documentation <https://docutils.sourceforge.io/rst.html>`_.


Paragraphs
----------

The paragraph is the most basic block in a reST document.  Paragraphs are simply
chunks of text separated by one or more blank lines.  As in Python, indentation
is significant in reST, so all lines of the same paragraph must be left-aligned
to the same level of indentation.

.. _inline-markup:

Inline markup
-------------

The standard reST inline markup is quite simple: use

* one asterisk: ``*text*`` for emphasis (italics),
* two asterisks: ``**text**`` for strong emphasis (boldface), and
* backquotes: ````text```` for code samples, variables, and literals.

If asterisks or backquotes appear in running text and could be confused with
inline markup delimiters, they have to be escaped with a backslash.

Be aware of some restrictions of this markup:

* it may not be nested,
* content may not start or end with whitespace: ``* text*`` is wrong,
* it must be separated from surrounding text by non-word characters.  Use a
  backslash escaped space to work around that: ``thisis\ *one*\ word``.

These restrictions may be lifted in future versions of the docutils.

reST also allows for custom "interpreted text roles", which signify that the
enclosed text should be interpreted in a specific way.  Sphinx uses this to
provide semantic markup and cross-referencing of identifiers, as described in
the appropriate section.  The general syntax is ``:rolename:`content```.


Lists and quotes
----------------

List markup is natural: just place an asterisk at the start of a paragraph and
indent properly.  The same goes for numbered lists; they can also be
automatically numbered using a ``#`` sign::

   * This is a bulleted list.
   * It has two items, the second
     item uses two lines.

   1. This is a numbered list.
   2. It has two items too.

   #. This is a numbered list.
   #. It has two items too.


Nested lists are possible, but be aware that they must be separated from the
parent list items by blank lines::

   * this is
   * a list

     * with a nested list
     * and some subitems

   * and here the parent list continues

Definition lists are created as follows::

   term (up to a line of text)
      Definition of the term, which must be indented

      and can even consist of multiple paragraphs

   next term
      Description.


Paragraphs are quoted by just indenting them more than the surrounding
paragraphs.


Source code
-----------

Literal code blocks are introduced by ending a paragraph with the special marker
``::``.  The literal block must be indented::

   This is a normal text paragraph. The next paragraph is a code sample::

      It is not processed in any way, except
      that the indentation is removed.

      It can span multiple lines.

   This is a normal text paragraph again.

The handling of the ``::`` marker is smart:

* If it occurs as a paragraph of its own, that paragraph is completely left
  out of the document.
* If it is preceded by whitespace, the marker is removed.
* If it is preceded by non-whitespace, the marker is replaced by a single
  colon.

That way, the second sentence in the above example's first paragraph would be
rendered as "The next paragraph is a code sample:".

.. _hyperlinks:

Hyperlinks
----------

External links
''''''''''''''

Use ```Link text <http://target>`_`` for inline web links.  If the link text
should be the web address, you don't need special markup at all, the parser
finds links and mail addresses in ordinary text.

Internal links
''''''''''''''

Internal linking is done via a special reST role, see the section on specific
markup, :ref:`doc-ref-role`.


Sections
--------

Section headers are created by underlining (and optionally overlining) the
section title with a punctuation character, at least as long as the text::

   =================
   This is a heading
   =================

Normally, there are no heading levels assigned to certain characters as the
structure is determined from the succession of headings.  However, for the
Python documentation, here is a suggested convention:

* ``#`` with overline, for parts
* ``*`` with overline, for chapters
* ``=``, for sections
* ``-``, for subsections
* ``^``, for subsubsections
* ``"``, for paragraphs


Explicit markup
---------------

"Explicit markup" is used in reST for most constructs that need special
handling, such as footnotes, specially-highlighted paragraphs, comments, and
generic directives.

An explicit markup block begins with a line starting with ``..`` followed by
whitespace and is terminated by the next paragraph at the same level of
indentation.  (There needs to be a blank line between explicit markup and normal
paragraphs.  This may all sound a bit complicated, but it is intuitive enough
when you write it.)

.. _directives:

Directives
----------

A directive is a generic block of explicit markup.  Besides roles, it is one of
the extension mechanisms of reST, and Sphinx makes heavy use of it.

Basically, a directive consists of a name, arguments, options and content. (Keep
this terminology in mind, it is used in :ref:`the next section
<additional-markup-constructs>` describing custom
directives.)  Looking at this example,

::

   .. function:: foo(x)
                 foo(y, z)
      :bar: no

      Return a line of text input from the user.

``function`` is the directive name.  It is given two arguments here, the
remainder of the first line and the second line, as well as one option ``bar``
(as you can see, options are given in the lines immediately following the
arguments and indicated by the colons).

The directive content follows after a blank line and is indented relative to the
directive start.


Footnotes
---------

For footnotes, use ``[#]_`` to mark the footnote location, and add the footnote
body at the bottom of the document after a "Footnotes" rubric heading, like so::

   Lorem ipsum [#]_ dolor sit amet ... [#]_

   .. rubric:: Footnotes

   .. [#] Text of the first footnote.
   .. [#] Text of the second footnote.

You can also explicitly number the footnotes for better context.

.. _comments:

Comments
--------

Every explicit markup block (starting with :literal:`.. \ `) which isn't a
:ref:`valid markup construct <directives>` is regarded as a comment::

   .. This is a comment


Source encoding
---------------

Since the easiest way to include special characters like em dashes or copyright
signs in reST is to directly write them as Unicode characters, one has to
specify an encoding:

All Python documentation source files must be in UTF-8 encoding, and the HTML
documents written from them will be in that encoding as well.


Gotchas
-------

There are some problems one commonly runs into while authoring reST documents:

* **Separation of inline markup:** As said above, inline markup spans must be
  separated from the surrounding text by non-word characters, you have to use
  an escaped space to get around that.

.. _additional-markup-constructs:

Additional markup constructs
============================

Sphinx adds a lot of new directives and interpreted text roles to standard reST
markup.  This section contains the reference material for these facilities.
Documentation for "standard" reST constructs is not included here, though
they are used in the Python documentation.

.. note::

   This is just an overview of Sphinx' extended markup capabilities; full
   coverage can be found in `its own documentation
   <https://www.sphinx-doc.org/>`_.


Meta-information markup
-----------------------

.. describe:: sectionauthor

   Identifies the author of the current section.  The argument should include
   the author's name such that it can be used for presentation (though it isn't)
   and email address.  The domain name portion of the address should be lower
   case.  Example::

      .. sectionauthor:: Guido van Rossum <guido@python.org>

   Currently, this markup isn't reflected in the output in any way, but it helps
   keep track of contributions.


Module-specific markup
----------------------

The markup described in this section is used to provide information about a
module being documented.  Each module should be documented in its own file.
Normally this markup appears after the title heading of that file; a typical
file might start like this::

   :mod:`parrot` -- Dead parrot access
   ===================================

   .. module:: parrot
      :platform: Unix, Windows
      :synopsis: Analyze and reanimate dead parrots.
   .. moduleauthor:: Eric Cleese <eric@python.invalid>
   .. moduleauthor:: John Idle <john@python.invalid>

As you can see, the module-specific markup consists of two directives, the
``module`` directive and the ``moduleauthor`` directive.

.. describe:: module

   This directive marks the beginning of the description of a module, package,
   or submodule. The name should be fully qualified (i.e. including the
   package name for submodules).

   The ``platform`` option, if present, is a comma-separated list of the
   platforms on which the module is available (if it is available on all
   platforms, the option should be omitted).  The keys are short identifiers;
   examples that are in use include "IRIX", "Mac", "Windows", and "Unix".  It is
   important to use a key which has already been used when applicable.

   The ``synopsis`` option should consist of one sentence describing the
   module's purpose -- it is currently only used in the Global Module Index.

   The ``deprecated`` option can be given (with no value) to mark a module as
   deprecated; it will be designated as such in various locations then.

.. describe:: moduleauthor

   The ``moduleauthor`` directive, which can appear multiple times, names the
   authors of the module code, just like ``sectionauthor`` names the author(s)
   of a piece of documentation.  It too does not result in any output currently.

.. note::

   It is important to make the section title of a module-describing file
   meaningful since that value will be inserted in the table-of-contents trees
   in overview files.


Information units
-----------------

There are a number of directives used to describe specific features provided by
modules.  Each directive requires one or more signatures to provide basic
information about what is being described, and the content should be the
description.  The basic version makes entries in the general index; if no index
entry is desired, you can give the directive option flag ``:noindex:``.  The
following example shows all of the features of this directive type::

    .. function:: spam(eggs)
                  ham(eggs)
       :noindex:

       Spam or ham the foo.

The signatures of object methods or data attributes should not include the
class name, but be nested in a class directive.  The generated files will
reflect this nesting, and the target identifiers (for HTML output) will use
both the class and method name, to enable consistent cross-references.  If you
describe methods belonging to an abstract protocol such as context managers,
use a class directive with a (pseudo-)type name too to make the
index entries more informative.

The directives are:

.. describe:: c:function

   Describes a C function. The signature should be given as in C, e.g.::

      .. c:function:: PyObject* PyType_GenericAlloc(PyTypeObject *type, Py_ssize_t nitems)

   This is also used to describe function-like preprocessor macros.  The names
   of the arguments should be given so they may be used in the description.

   Note that you don't have to backslash-escape asterisks in the signature,
   as it is not parsed by the reST inliner.

.. describe:: c:member

   Describes a C struct member. Example signature::

      .. c:member:: PyObject* PyTypeObject.tp_bases

   The text of the description should include the range of values allowed, how
   the value should be interpreted, and whether the value can be changed.
   References to structure members in text should use the ``member`` role.

.. describe:: c:macro

   Describes a "simple" C macro.  Simple macros are macros which are used
   for code expansion, but which do not take arguments so cannot be described as
   functions.  This is not to be used for simple constant definitions.  Examples
   of its use in the Python documentation include :c:macro:`PyObject_HEAD` and
   :c:macro:`Py_BEGIN_ALLOW_THREADS`.

.. describe:: c:type

   Describes a C type. The signature should just be the type name.

.. describe:: c:var

   Describes a global C variable.  The signature should include the type, such
   as::

      .. c:var:: PyObject* PyClass_Type

.. describe:: data

   Describes global data in a module, including both variables and values used
   as "defined constants."  Class and object attributes are not documented
   using this directive.

.. describe:: exception

   Describes an exception class.  The signature can, but need not include
   parentheses with constructor arguments.

.. describe:: function

   Describes a module-level function.  The signature should include the
   parameters, enclosing optional parameters in brackets.  Default values can be
   given if it enhances clarity.  For example::

      .. function:: repeat([repeat=3[, number=1000000]])

   Object methods are not documented using this directive. Bound object methods
   placed in the module namespace as part of the public interface of the module
   are documented using this, as they are equivalent to normal functions for
   most purposes.

   The description should include information about the parameters required and
   how they are used (especially whether mutable objects passed as parameters
   are modified), side effects, and possible exceptions.  A small example may be
   provided.

.. describe:: coroutinefunction

   Describes a module-level coroutine.  The description should include similar
   information to that described for ``function``.

.. describe:: decorator

   Describes a decorator function.  The signature should *not* represent the
   signature of the actual function, but the usage as a decorator.  For example,
   given the functions

   .. code-block:: python

      def removename(func):
          func.__name__ = ''
          return func

      def setnewname(name):
          def decorator(func):
              func.__name__ = name
              return func
          return decorator

   the descriptions should look like this::

      .. decorator:: removename

         Remove name of the decorated function.

      .. decorator:: setnewname(name)

         Set name of the decorated function to *name*.

   There is no ``deco`` role to link to a decorator that is marked up with
   this directive; rather, use the ``:func:`` role.

.. describe:: class

   Describes a class.  The signature can include parentheses with parameters
   which will be shown as the constructor arguments.

.. describe:: attribute

   Describes an object data attribute.  The description should include
   information about the type of the data to be expected and whether it may be
   changed directly.  This directive should be nested in a class directive,
   like in this example::

      .. class:: Spam

         Description of the class.

         .. attribute:: ham

            Description of the attribute.

   If is also possible to document an attribute outside of a class directive,
   for example if the documentation for different attributes and methods is
   split in multiple sections.  The class name should then be included
   explicitly::

      .. attribute:: Spam.eggs

.. describe:: method

   Describes an object method.  The parameters should not include the ``self``
   parameter.  The description should include similar information to that
   described for ``function``.  This directive should be nested in a class
   directive, like in the example above.

.. describe:: coroutinemethod

   Describes an object coroutine method.  The parameters should not include the
   ``self`` parameter.  The description should include similar information to
   that described for ``function``.  This directive should be nested in a
   ``class`` directive.

.. describe:: decoratormethod

   Same as ``decorator``, but for decorators that are methods.

   Refer to a decorator method using the ``:meth:`` role.

.. describe:: staticmethod

   Describes an object static method.  The description should include similar
   information to that described for ``function``.  This directive should be
   nested in a ``class`` directive.

.. describe:: classmethod

   Describes an object class method.  The parameters should not include the
   ``cls`` parameter.  The description should include similar information to
   that described for ``function``.  This directive should be nested in a
   ``class`` directive.

.. describe:: abstractmethod

   Describes an object abstract method.  The description should include similar
   information to that described for ``function``.  This directive should be
   nested in a ``class`` directive.

.. describe:: opcode

   Describes a Python :term:`bytecode` instruction.

.. describe:: option

   Describes a Python command line option or switch.  Option argument names
   should be enclosed in angle brackets.  Example::

      .. option:: -m <module>

         Run a module as a script.

.. describe:: envvar

   Describes an environment variable that Python uses or defines.


There is also a generic version of these directives:

.. describe:: describe

   This directive produces the same formatting as the specific ones explained
   above but does not create index entries or cross-referencing targets.  It is
   used, for example, to describe the directives in this document. Example::

      .. describe:: opcode

         Describes a Python bytecode instruction.


Showing code examples
---------------------

Examples of Python source code or interactive sessions are represented using
standard reST literal blocks.  They are started by a ``::`` at the end of the
preceding paragraph and delimited by indentation.

Representing an interactive session requires including the prompts and output
along with the Python code.  No special markup is required for interactive
sessions. After the last line of input or output is presented, there should
be no trailing prompt. An example of correct usage is:

.. code-block:: python

   >>> 1 + 1
   2

Syntax highlighting is handled in a smart way:

* There is a "highlighting language" for each source file.  By default,
  this is ``'python'`` as the majority of files will have to highlight Python
  snippets.

* Within Python highlighting mode, interactive sessions are recognized
  automatically and highlighted appropriately.

* The highlighting language can be changed using the ``highlight``
  directive, used as follows::

     .. highlight:: c

  This language is used until the next ``highlight`` directive is
  encountered.

* The ``code-block`` directive can be used to specify the highlight language
  of a single code block, e.g.::

     .. code-block:: c

        #include <stdio.h>

        void main() {
            printf("Hello world!\n");
        }

* The values normally used for the highlighting language are:

  * ``python`` (the default)
  * ``c``
  * ``rest``
  * ``none`` (no highlighting)

* If highlighting with the current language fails, the block is not highlighted
  in any way.

Longer displays of verbatim text may be included by storing the example text in
an external file containing only plain text.  The file may be included using the
``literalinclude`` directive. [1]_ For example, to include the Python source
file :file:`example.py`, use::

   .. literalinclude:: example.py

The file name is relative to the current file's path.  Documentation-specific
include files should be placed in the ``Doc/includes`` subdirectory.

.. _rest-inline-markup:
.. _roles:

Roles
-----

As :ref:`previously mentioned <inline-markup>`, Sphinx uses
interpreted text roles of the form ``:rolename:`content```
to insert semantic markup in documents.

In the CPython documentation, there are a couple common cases
where simpler markup should be used:

* ``*arg*`` (rendered as *arg*) for function and method arguments.
* ````True````/````False````/````None```` for ``True``/``False``/``None``.

In addition, the CPython documentation defines a few custom roles:

* ``:gh:`ID```: creates a link to a GitHub issue.
* ``:issue:`ID```: creates a link to a bugs.python.com issue.
* ``:source:`PATH```: creates a link to a source file on GitHub.

There are some additional facilities that make cross-referencing roles more
versatile:

* You may supply an explicit title and reference target, like in reST direct
  hyperlinks: ``:role:`title <target>``` will refer to *target*, but the link
  text will be *title*.

* If you prefix the content with ``!``, no reference/hyperlink will be created.

* For the Python object roles, if you prefix the content with ``~``, the link
  text will only be the last component of the target.  For example,
  ``:meth:`~Queue.Queue.get``` will refer to ``Queue.Queue.get`` but only
  display ``get`` as the link text.

  In HTML output, the link's ``title`` attribute (that is e.g. shown as a
  tool-tip on mouse-hover) will always be the full target name.

The following roles refer to objects in modules and are possibly hyperlinked if
a matching identifier is found:

.. describe:: mod

   The name of a module; a dotted name may be used.  This should also be used
   for package names.

.. describe:: func

   The name of a Python function; dotted names may be used.  The role text
   should not include trailing parentheses to enhance readability.  The
   parentheses are stripped when searching for identifiers.

.. describe:: data

   The name of a module-level variable or constant.

.. describe:: const

   The name of a "defined" constant.  This may be a C-language ``#define``
   or a Python variable that is not intended to be changed.

.. describe:: class

   A class name; a dotted name may be used.

.. describe:: meth

   The name of a method of an object.  The role text should include the type
   name and the method name.  A dotted name may be used.

.. describe:: attr

   The name of a data attribute of an object.

.. describe:: exc

   The name of an exception. A dotted name may be used.

The name enclosed in this markup can include a module name and/or a class name.
For example, ``:func:`filter``` could refer to a function named ``filter`` in
the current module, or the built-in function of that name.  In contrast,
``:func:`foo.filter``` clearly refers to the ``filter`` function in the ``foo``
module.

Normally, names in these roles are searched first without any further
qualification, then with the current module name prepended, then with the
current module and class name (if any) prepended.  If you prefix the name with a
dot, this order is reversed.  For example, in the documentation of the
:mod:`codecs` module, ``:func:`open``` always refers to the built-in function,
while ``:func:`.open``` refers to :func:`codecs.open`.

A similar heuristic is used to determine whether the name is an attribute of
the currently documented class.

---------

The following roles create cross-references to C-language constructs if they
are defined in the API documentation:

.. describe:: c:data

   The name of a C-language variable.

.. describe:: c:func

   The name of a C-language function. Should include trailing parentheses.

.. describe:: c:macro

   The name of a "simple" C macro, as defined above.

.. describe:: c:type

   The name of a C-language type.

.. describe:: c:member

   The name of a C type member, as defined above.

---------

The following roles do not refer to objects, but can create cross-references or
internal links:

.. describe:: envvar

   An environment variable.  Index entries are generated.

.. describe:: keyword

   The name of a Python keyword.  Using this role will generate a link to the
   documentation of the keyword.  ``True``, ``False`` and ``None`` do not use
   this role, but simple code markup (````True````), given that they're
   fundamental to the language and should be known to any programmer.

.. describe:: option

   A command-line option of Python.  The leading hyphen(s) must be included.
   If a matching ``cmdoption`` directive exists, it is linked to.  For options
   of other programs or scripts, use simple ````code```` markup.

.. describe:: token

   The name of a grammar token (used in the reference manual to create links
   between production displays).

---------

The following role creates a cross-reference to the term in the glossary:

.. describe:: term

   Reference to a term in the glossary.  The glossary is created using the
   ``glossary`` directive containing a definition list with terms and
   definitions.  It does not have to be in the same file as the ``term``
   markup, in fact, by default the Python docs have one global glossary
   in the ``glossary.rst`` file.

   If you use a term that's not explained in a glossary, you'll get a warning
   during build.

---------

The following roles don't do anything special except formatting the text
in a different style:

.. describe:: command

   The name of an OS-level command, such as ``rm``.

.. describe:: dfn

   Mark the defining instance of a term in the text.  (No index entries are
   generated.)

.. describe:: file

   The name of a file or directory.  Within the contents, you can use curly
   braces to indicate a "variable" part, for example::

      ``spam`` is installed in :file:`/usr/lib/python2.{x}/site-packages` ...

   In the built documentation, the ``x`` will be displayed differently to
   indicate that it is to be replaced by the Python minor version.

.. describe:: guilabel

   Labels presented as part of an interactive user interface should be marked
   using ``guilabel``.  This includes labels from text-based interfaces such as
   those created using :mod:`curses` or other text-based libraries.  Any label
   used in the interface should be marked with this role, including button
   labels, window titles, field names, menu and menu selection names, and even
   values in selection lists.

.. describe:: kbd

   Mark a sequence of keystrokes.  What form the key sequence takes may depend
   on platform- or application-specific conventions.  When there are no relevant
   conventions, the names of modifier keys should be spelled out, to improve
   accessibility for new users and non-native speakers.  For example, an
   *xemacs* key sequence may be marked like ``:kbd:`C-x C-f```, but without
   reference to a specific application or platform, the same sequence should be
   marked as ``:kbd:`Control-x Control-f```.

.. describe:: mailheader

   The name of an RFC 822-style mail header.  This markup does not imply that
   the header is being used in an email message, but can be used to refer to any
   header of the same "style."  This is also used for headers defined by the
   various MIME specifications.  The header name should be entered in the same
   way it would normally be found in practice, with the camel-casing conventions
   being preferred where there is more than one common usage. For example:
   ``:mailheader:`Content-Type```.

.. describe:: makevar

   The name of a :command:`make` variable.

.. describe:: manpage

   A reference to a Unix manual page including the section,
   e.g. ``:manpage:`ls(1)```.

.. describe:: menuselection

   Menu selections should be marked using the ``menuselection`` role.  This is
   used to mark a complete sequence of menu selections, including selecting
   submenus and choosing a specific operation, or any subsequence of such a
   sequence.  The names of individual selections should be separated by
   ``-->``.

   For example, to mark the selection "Start > Programs", use this markup::

      :menuselection:`Start --> Programs`

   When including a selection that includes some trailing indicator, such as the
   ellipsis some operating systems use to indicate that the command opens a
   dialog, the indicator should be omitted from the selection name.

.. describe:: mimetype

   The name of a MIME type, or a component of a MIME type (the major or minor
   portion, taken alone).

.. describe:: newsgroup

   The name of a Usenet newsgroup.

.. describe:: program

   The name of an executable program.  This may differ from the file name for
   the executable for some platforms.  In particular, the ``.exe`` (or other)
   extension should be omitted for Windows programs.

.. describe:: regexp

   A regular expression. Quotes should not be included.

.. describe:: samp

   A piece of literal text, such as code.  Within the contents, you can use
   curly braces to indicate a "variable" part, as in ``:file:``.

   If you don't need the "variable part" indication, use the standard
   ````code```` instead.


The following roles generate external links:

.. describe:: pep

   A reference to a Python Enhancement Proposal.  This generates appropriate
   index entries. The text "PEP *number*\ " is generated; in the HTML output,
   this text is a hyperlink to an online copy of the specified PEP. Such
   hyperlinks should not be a substitute for properly documenting the
   language in the manuals.

.. describe:: rfc

   A reference to an Internet Request for Comments.  This generates appropriate
   index entries. The text "RFC *number*\ " is generated; in the HTML output,
   this text is a hyperlink to an online copy of the specified RFC.


Note that there are no special roles for including hyperlinks as you can use
the standard reST markup for that purpose.


.. _doc-ref-role:

Cross-linking markup
--------------------

To support cross-referencing to arbitrary sections in the documentation, the
standard reST labels are "abused" a bit: Every label must precede a section
title; and every label name must be unique throughout the entire documentation
source.

You can then reference to these sections using the ``:ref:`label-name``` role.

Example::

   .. _my-reference-label:

   Section to cross-reference
   --------------------------

   This is the text of the section.

   It refers to the section itself, see :ref:`my-reference-label`.

The ``:ref:`` invocation is replaced with the section title.

Alternatively, you can reference any label (not just section titles)
if you provide the link text ``:ref:`link text <reference-label>```.

Paragraph-level markup
----------------------

These directives create short paragraphs and can be used inside information
units as well as normal text:

.. describe:: note

   An especially important bit of information about an API that a user should be
   aware of when using whatever bit of API the note pertains to.  The content of
   the directive should be written in complete sentences and include all
   appropriate punctuation.

   Example::

      .. note::

         This function is not suitable for sending spam e-mails.

.. describe:: warning

   An important bit of information about an API that a user should be aware of
   when using whatever bit of API the warning pertains to.  The content of the
   directive should be written in complete sentences and include all appropriate
   punctuation.  In the interest of not scaring users away from pages filled
   with warnings, this directive should only be chosen over ``note`` for
   information regarding the possibility of crashes, data loss, or security
   implications.

.. describe:: versionadded

   This directive documents the version of Python which added the described
   feature, or a part of it, to the library or C API.  When this applies to an
   entire module, it should be placed at the top of the module section before
   any prose.

   The first argument must be given and is the version in question.  The second
   argument is optional and can be used to describe the details of the feature.

   Example::

      .. versionadded:: 3.5

.. describe:: versionchanged

   Similar to ``versionadded``, but describes when and what changed in the named
   feature in some way (new parameters, changed side effects, platform support,
   etc.).  This one *must* have the second argument (explanation of the change).

   Example::

      .. versionchanged:: 3.1
         The *spam* parameter was added.

   Note that there should be no blank line between the directive head and the
   explanation; this is to make these blocks visually continuous in the markup.

.. describe:: deprecated

   Indicates the version from which the described feature is deprecated.

   There is one required argument: the version from which the feature is
   deprecated.

   Example::

      .. deprecated:: 3.8

.. describe:: deprecated-removed

   Like ``deprecated``, but it also indicates in which version the feature is
   removed.

   There are two required arguments: the version from which the feature is
   deprecated, and the version in which the feature is removed.

   Example::

      .. deprecated-removed:: 3.8 4.0

.. describe:: impl-detail

   This directive is used to mark CPython-specific information.  Use either with
   a block content or a single sentence as an argument, i.e. either ::

      .. impl-detail::

         This describes some implementation detail.

         More explanation.

   or ::

      .. impl-detail:: This shortly mentions an implementation detail.

   "\ **CPython implementation detail:**\ " is automatically prepended to the
   content.

.. describe:: seealso

   Many sections include a list of references to module documentation or
   external documents.  These lists are created using the ``seealso`` directive.

   The ``seealso`` directive is typically placed in a section just before any
   sub-sections.  For the HTML output, it is shown boxed off from the main flow
   of the text.

   The content of the ``seealso`` directive should be a reST definition list.
   Example::

      .. seealso::

         Module :mod:`zipfile`
            Documentation of the :mod:`zipfile` standard module.

         `GNU tar manual, Basic Tar Format <http://link>`_
            Documentation for tar archive files, including GNU tar extensions.

.. describe:: rubric

   This directive creates a paragraph heading that is not used to create a
   table of contents node.  It is currently used for the "Footnotes" caption.

.. describe:: centered

   This directive creates a centered boldfaced paragraph.  Use it as follows::

      .. centered::

         Paragraph contents.


Table-of-contents markup
------------------------

Since reST does not have facilities to interconnect several documents, or split
documents into multiple output files, Sphinx uses a custom directive to add
relations between the single files the documentation is made of, as well as
tables of contents.  The ``toctree`` directive is the central element.

.. describe:: toctree

   This directive inserts a "TOC tree" at the current location, using the
   individual TOCs (including "sub-TOC trees") of the files given in the
   directive body.  A numeric ``maxdepth`` option may be given to indicate the
   depth of the tree; by default, all levels are included.

   Consider this example (taken from the library reference index)::

      .. toctree::
         :maxdepth: 2

         intro
         strings
         datatypes
         numeric
         (many more files listed here)

   This accomplishes two things:

   * Tables of contents from all those files are inserted, with a maximum depth
     of two, that means one nested heading.  ``toctree`` directives in those
     files are also taken into account.
   * Sphinx knows that the relative order of the files ``intro``,
     ``strings`` and so forth, and it knows that they are children of the
     shown file, the library index.  From this information it generates "next
     chapter", "previous chapter" and "parent chapter" links.

   In the end, all files included in the build process must occur in one
   ``toctree`` directive; Sphinx will emit a warning if it finds a file that is
   not included, because that means that this file will not be reachable through
   standard navigation.

   The special file ``contents.rst`` at the root of the source directory is the
   "root" of the TOC tree hierarchy; from it the "Contents" page is generated.


Index-generating markup
-----------------------

Sphinx automatically creates index entries from all information units (like
functions, classes or attributes) like discussed before.

However, there is also an explicit directive available, to make the index more
comprehensive and enable index entries in documents where information is not
mainly contained in information units, such as the language reference.

The directive is ``index`` and contains one or more index entries.  Each entry
consists of a type and a value, separated by a colon.

For example::

   .. index::
      single: execution; context
      module: __main__
      module: sys
      triple: module; search; path

This directive contains five entries, which will be converted to entries in the
generated index which link to the exact location of the index statement (or, in
case of offline media, the corresponding page number).

The possible entry types are:

single
   Creates a single index entry.  Can be made a subentry by separating the
   subentry text with a semicolon (this notation is also used below to describe
   what entries are created).
pair
   ``pair: loop; statement`` is a shortcut that creates two index entries,
   namely ``loop; statement`` and ``statement; loop``.
triple
   Likewise, ``triple: module; search; path`` is a shortcut that creates three
   index entries, which are ``module; search path``, ``search; path, module``
   and ``path; module search``.
module, keyword, operator, object, exception, statement, builtin
   These all create two index entries.  For example, ``module: hashlib``
   creates the entries ``module; hashlib`` and ``hashlib; module``.  The
   builtin entry type is slightly different in that "built-in function" is used
   in place of "builtin" when creating the two entries.

For index directives containing only "single" entries, there is a shorthand
notation::

   .. index:: BNF, grammar, syntax, notation

This creates four index entries.


Grammar production displays
---------------------------

Special markup is available for displaying the productions of a formal grammar.
The markup is simple and does not attempt to model all aspects of BNF (or any
derived forms), but provides enough to allow context-free grammars to be
displayed in a way that causes uses of a symbol to be rendered as hyperlinks to
the definition of the symbol.  There is this directive:

.. describe:: productionlist

   This directive is used to enclose a group of productions.  Each production is
   given on a single line and consists of a name, separated by a colon from the
   following definition.  If the definition spans multiple lines, each
   continuation line must begin with a colon placed at the same column as in the
   first line.

   Blank lines are not allowed within ``productionlist`` directive arguments.

   The definition can contain token names which are marked as interpreted text
   (e.g. ``unaryneg ::= "-" `integer```) -- this generates cross-references
   to the productions of these tokens.

   Note that no further reST parsing is done in the production, so that you
   don't have to escape ``*`` or ``|`` characters.


.. XXX describe optional first parameter

The following is an example taken from the Python Reference Manual::

   .. productionlist::
      try_stmt: try1_stmt | try2_stmt
      try1_stmt: "try" ":" `suite`
               : ("except" [`expression` ["," `target`]] ":" `suite`)+
               : ["else" ":" `suite`]
               : ["finally" ":" `suite`]
      try2_stmt: "try" ":" `suite`
               : "finally" ":" `suite`


Substitutions
-------------

The documentation system provides three substitutions that are defined by
default. They are set in the build configuration file :file:`conf.py`.

.. describe:: |release|

   Replaced by the Python release the documentation refers to.  This is the full
   version string including alpha/beta/release candidate tags, e.g. ``2.5.2b3``.

.. describe:: |version|

   Replaced by the Python version the documentation refers to. This consists
   only of the major and minor version parts, e.g. ``2.5``, even for version
   2.5.1.

.. describe:: |today|

   Replaced by either today's date, or the date set in the build configuration
   file.  Normally has the format ``April 14, 2007``.


.. rubric:: Footnotes

.. [1] There is a standard ``include`` directive, but it raises errors if the
       file is not found.  This one only emits a warning.


===================================================
/. 🚀 ./documentation/translating.rst
===================================================

.. _translating:

===========
Translating
===========

.. highlight::  rest

Python documentation translations are governed by :PEP:`545`.
They are built by `docsbuild-scripts
<https://github.com/python/docsbuild-scripts/>`__ and hosted on
docs.python.org. There are several documentation translations already
in production; others are works in progress.

+-----------------+-------------------------------+----------------------------+
| Language        | Contact                       | Links                      |
+=================+===============================+============================+
| Arabic (ar)     | `Abdur-Rahmaan Janhangeer     | `GitHub <github_ar_>`_     |
|                 | <gh_osdotsystem_>`_           |                            |
+-----------------+-------------------------------+----------------------------+
| Bengali as      | `Kushal Das <gh_kushal_>`_    | `GitHub <github_bn_in_>`_  |
| spoken in       |                               |                            |
| India (bn_IN)   |                               |                            |
+-----------------+-------------------------------+----------------------------+
| French (fr)     | `Julien Palard (@JulienPalard)| `GitHub <github_fr_>`_     |
|                 | <gh_mdk_>`_                   |                            |
+-----------------+-------------------------------+----------------------------+
| Hindi as spoken |                               | `GitHub <github_hi_in_>`_  |
| in India (hi_IN)|                               |                            |
+-----------------+-------------------------------+----------------------------+
| Hungarian (hu)  | `Tamás Bajusz (@gbtami)       | `GitHub <github_hu_>`_     |
|                 | <gh_gbtami_>`_                | `Mailing List <list_hu_>`_ |
+-----------------+-------------------------------+----------------------------+
| Indonesian (id) | `Oon Arfiandwi <gh_oonid_>`_  | `GitHub <github_id_>`_     |
+-----------------+-------------------------------+----------------------------+
| Italian (it)    |                               | `mail <mail_it_>`_         |
+-----------------+-------------------------------+----------------------------+
| Japanese (ja)   | `Kinebuchi Tomohiko           | `GitHub <github_ja_>`_     |
|                 | (@cocoatomo)                  | `Doc <doc_ja_>`_           |
|                 | <gh_cocoatomo_>`_,            |                            |
|                 | `Atsuo Ishimoto               |                            |
|                 | (@atsuoishimoto)              |                            |
|                 | <gh_atsuoishimoto_>`_         |                            |
+-----------------+-------------------------------+----------------------------+
| Korean (ko)     |                               | `GitHub <github_ko_>`_     |
|                 |                               | `Doc <doc_ko_>`_           |
+-----------------+-------------------------------+----------------------------+
| Marathi (mr)    | `Sanket Garade                | `GitHub <github_mr_>`_     |
|                 | <email_garade_>`_             |                            |
+-----------------+-------------------------------+----------------------------+
| Lithuanian (lt) |                               | `mail <mail_lt_>`_         |
+-----------------+-------------------------------+----------------------------+
| Persian (fa)    | `Komeil Parseh (@mmdbalkhi)   | `GitHub <github_fa_>`_     |
|                 | <gh_mmdbalkhi_>`_             |                            |
+-----------------+-------------------------------+----------------------------+
| Polish (pl)     | `Maciej Olko (@m-aciek)       | `GitHub <github_pl_>`_     |
|                 | <gh_maciek_>`_                | `Translations <tx_pl_>`_   |
|                 |                               | `Doc <doc_pl_>`_           |
|                 |                               | `mail <mail_pl_>`_         |
+-----------------+-------------------------------+----------------------------+
| Portuguese (pt) | Gustavo Toffo                 |                            |
+-----------------+-------------------------------+----------------------------+
| Portuguese      | Marco Rougeth                 | `GitHub <github_pt_br_>`_  |
| as spoken       |                               | `Wiki <wiki_pt_br_>`_      |
| in Brasil       |                               | `Telegram <chat_pt_br_>`_  |
| (pt-br)         |                               | `article <article_pt_br_>`_|
+-----------------+-------------------------------+----------------------------+
| Russian (ru)    |                               | `mail <mail_ru_>`_         |
+-----------------+-------------------------------+----------------------------+
| Simplified      | `Shengjing Zhu <gh_zhsj_>`_,  | `Transifex <tx_zh_cn_>`_   |
| Chinese         | `Du, Meng <gh_dumeng_>`_      | `GitHub <github_zh_cn_>`_  |
| (zh-cn)         |                               | `Doc <doc_zh_cn_>`_        |
+-----------------+-------------------------------+----------------------------+
| Spanish (es)    | Raúl Cumplido                 | `GitHub <github_es_>`_     |
+-----------------+-------------------------------+----------------------------+
| Traditional     | `王威翔 Matt Wang             | `GitHub <github_zh_tw_>`_  |
| Chinese         | <gh_mattwang44_>`_,           | `Doc <doc_zh_tw_>`_        |
| (zh-tw)         | Josix Wang                    |                            |
+-----------------+-------------------------------+----------------------------+
| Turkish (tr)    | `Ege Akman (@egeakman)        | `GitHub <github_tr_>`_     |
|                 | <gh_egeakman_>`_              | `RTD <rtd_tr_>`_           |
|                 |                               | `Doc <doc_tr_>`_           |
+-----------------+-------------------------------+----------------------------+
| Ukrainian (uk)  | `Dmytro Kazanzhy (@kazanzhy)  | `GitHub <github_uk_>`_     |
|                 | <email_kazanzhy_>`_           | `Translations <tx_uk_>`_   |
+-----------------+-------------------------------+----------------------------+

.. _article_pt_br: https://rgth.co/blog/python-ptbr-cenario-atual/
.. _gh_cocoatomo: https://github.com/cocoatomo
.. _gh_atsuoishimoto: https://github.com/atsuoishimoto
.. _gh_gbtami: https://github.com/gbtami
.. _gh_kushal: https://github.com/Kushal997-das
.. _gh_maciek: https://github.com/m-aciek
.. _gh_mdk: https://github.com/JulienPalard
.. _gh_mmdbalkhi: https://github.com/mmdbalkhi
.. _gh_oonid: https://github.com/oonid
.. _gh_osdotsystem: https://github.com/Abdur-rahmaanJ
.. _gh_zhsj: https://github.com/zhsj
.. _gh_dumeng: https://github.com/dumeng
.. _gh_mattwang44: https://github.com/mattwang44
.. _gh_egeakman: https://github.com/egeakman
.. _email_garade: mailto:garade@pm.me
.. _email_kazanzhy: mailto:dkazanzhy@gmail.com
.. _chat_pt_br: https://t.me/pybr_i18n
.. _doc_ja: https://docs.python.org/ja/
.. _doc_ko: https://docs.python.org/ko/
.. _doc_pl: https://docs.python.org/pl/
.. _doc_tr: https://docs.python.org/tr/
.. _doc_zh_cn: https://docs.python.org/zh-cn/
.. _doc_zh_tw: https://docs.python.org/zh-tw/
.. _github_ar: https://github.com/Abdur-rahmaanJ/python-docs-ar
.. _github_bn_in: https://github.com/python/python-docs-bn-in
.. _github_es: https://github.com/python/python-docs-es
.. _github_fa: https://github.com/ftg-iran/python-docs-fa
.. _github_fr: https://github.com/python/python-docs-fr
.. _github_hi_in: https://github.com/CuriousLearner/python-docs-hi-in
.. _github_hu: https://github.com/python/python-docs-hu
.. _github_id: https://github.com/python/python-docs-id
.. _github_ja: https://github.com/python/python-docs-ja
.. _github_ko: https://github.com/python/python-docs-ko
.. _github_mr: https://github.com/sanketgarade/python-doc-mr
.. _github_pl: https://github.com/python/python-docs-pl
.. _github_pt_br: https://github.com/python/python-docs-pt-br
.. _github_tr: https://github.com/python/python-docs-tr
.. _github_uk: https://github.com/python/python-docs-uk
.. _github_zh_cn: https://github.com/python/python-docs-zh-cn
.. _github_zh_tw: https://github.com/python/python-docs-zh-tw
.. _list_hu: https://mail.python.org/pipermail/python-hu
.. _mail_it: https://mail.python.org/pipermail/doc-sig/2019-April/004114.html
.. _mail_lt: https://mail.python.org/pipermail/doc-sig/2019-July/004138.html
.. _mail_pl: https://mail.python.org/pipermail/doc-sig/2019-April/004106.html
.. _mail_ru: https://mail.python.org/pipermail/doc-sig/2019-May/004131.html
.. _rtd_tr: https://python-docs-tr.readthedocs.io/
.. _tx_pl: https://explore.transifex.com/python-doc/python-newest/
.. _tx_uk: https://explore.transifex.com/python-doc/python-newest/
.. _tx_zh_cn: https://explore.transifex.com/python-doc/python-newest/
.. _wiki_pt_br: https://python.org.br/traducao/

Starting a new translation
==========================

First subscribe to the `translation mailing list <translation_ml_>`_,
and introduce yourself and the translation you're starting. Translations
fall under the aegis of the `PSF Translation Workgroup <translation_wg_>`_

Then you can bootstrap your new translation by using our `cookiecutter
<https://github.com/JulienPalard/python-docs-cookiecutter>`__.

The important steps look like this:

- Create the GitHub repo (anywhere) with the right hierarchy (using the
  cookiecutter).
- Gather people to help you translate. You can't do it alone.
- You can use any tool to translate, as long as you can synchronize with Git.
  Some use Transifex, and some use only GitHub. You can choose another
  way if you like; it's up to you.
- Ensure we update this page to reflect your work and progress, either via a
  PR or by asking on the `translation mailing list <translation_ml_>`_.
- When ``bugs.html``, ``tutorial``, and ``library/functions`` are 100%
  completed, ask on the `translation mailing list <translation_ml_>`_ for
  your language to be added in the language picker on docs.python.org.


PEP 545 summary
===============

Here are the essential points of :PEP:`545`:

- Each translation is assigned an appropriate lowercased language tag,
  with an optional region subtag, and joined with a dash, like
  ``pt-br`` or ``fr``.

- Each translation is under CC0 and marked as such in the README (as in
  the cookiecutter).

- Translation files are hosted on
  ``https://github.com/python/python-docs-{LANGUAGE_TAG}`` (not
  mandatory to start a translation, but mandatory to land on
  ``docs.python.org``).

- Translations having completed ``tutorial/``, ``library/stdtypes``
  and ``library/functions`` are hosted on
  ``https://docs.python.org/{LANGUAGE_TAG}/{VERSION_TAG}/``.


How to get help
===============

Discussions about translations occur on the `translation mailing list <translation_ml_>`_,
and there's a `Libera.Chat IRC <https://libera.chat/>`_ channel,
``#python-doc``.


Translation FAQ
===============

Which version of the Python documentation should be translated?
---------------------------------------------------------------

Consensus is to work on current stable. You can then propagate your
translation from one branch to another using `pomerge
<https://pypi.org/project/pomerge/>`__.


Are there some tools to help in managing the repo?
--------------------------------------------------

Here's what we're using:

- `pomerge <https://pypi.org/project/pomerge/>`__ to propagate translations
  from one file to others.
- `pospell <https://pypi.org/project/pospell/>`__ to check for typos in ``.po`` files.
- `powrap <https://pypi.org/project/powrap/>`__ to rewrap the ``.po`` files
  before committing. This helps keep Git diffs short.
- `potodo <https://pypi.org/project/potodo/>`__ to list what needs to be translated.
- `sphinx-lint <https://pypi.org/project/sphinx-lint/>`__ to validate reST syntax in
  translation files.


How is a coordinator elected?
-----------------------------

There is no election; each translation has to sort this out.  Here are some suggestions.

-  Coordinator requests are to be public on the `translation mailing list <translation_ml_>`_.
-  If the given language has a native core dev, the core dev has their
   say on the choice.
-  Anyone who wants to become coordinator for their native language and shows
   motivation by translating and building a community will be named
   coordinator.
-  In case of concurrency between two persons, no one will sort this out
   for you.  It is up to you two to organize a local election or whatever is
   needed to sort this out.
-  If a coordinator becomes inactive or unreachable for a long
   period of time, someone else can ask for a takeover on the `translation mailing list <translation_ml_>`_.


The entry for my translation is missing/not up to date on this page
-------------------------------------------------------------------

Ask on the `translation mailing list <translation_ml_>`_, or better, make a PR on the `devguide
<https://github.com/python/devguide/>`__.


I have a translation, but it's not in Git. What should I do?
------------------------------------------------------------

You can ask for help on the `translation mailing list <translation_ml_>`_, and
the team will help you create an appropriate repository. You can still use tools like transifex,
if you like.


My Git hierarchy does not match yours. Can I keep it?
-----------------------------------------------------

No, inside the ``github.com/python`` organization we’ll all have the
exact same hierarchy so bots will be able to build all of our
translations. So you may have to convert from one hierarchy to another.
Ask for help on the `translation mailing list <translation_ml_>`_ if you’re
not sure on how to do it.


What hierarchy should I use in my GitHub repository?
----------------------------------------------------

As for every project, we have a *branch* per version.  We store ``.po``
files in the root of the repository using the ``gettext_compact=0``
style.

.. _translation_wg: https://wiki.python.org/psf/TranslationWG/Charter
.. _translation_ml: https://mail.python.org/mailman3/lists/translation.python.org/


===================================================
/. 🚀 ./documentation/devguide.rst
===================================================

.. _devguide:

==================================
Helping with the Developer's Guide
==================================

.. raw:: html

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      activateTab(getOS());
    });
    </script>

.. highlight:: console

The Developer's Guide (what you're reading now) uses the same process as the
main Python documentation, except for some small differences.  The source
lives in a `separate repository`_ and bug reports should be submitted to the
`devguide GitHub tracker`_.

Our devguide workflow uses continuous integration and deployment so changes to
the devguide are normally published when the pull request is merged. Changes
to CPython documentation follow the workflow of a CPython release and are
published in the release.


Developer's Guide workflow
==========================

To submit a :ref:`pull request <pullrequest>`, you can fork the
`devguide repo`_ to your GitHub account and clone it using::

    $ git clone https://github.com/<your_username>/devguide

For your PR to be accepted, you will also need to sign the
:ref:`contributor agreement <cla>`.

To build the devguide, some additional dependencies are required (most
importantly, `Sphinx`_), and the standard way to install dependencies in
Python projects is to create a virtualenv, and then install dependencies from
a ``requirements.txt`` file. For your convenience, this is all *automated for
you*.

To build the devguide from the checkout directory:

.. tab:: Unix/macOS

   .. code-block:: shell

      make html

.. tab:: Windows

   .. code-block:: dosbatch

      .\make html

You will find the generated files in ``_build/html``.

.. tip:: * Replace ``html`` with ``htmlview`` to open the docs in a web browser
           once the build completes.
         * Replace ``html`` with ``htmllive`` to rebuild the docs,
           start a local server, and automatically reload the page in your
           browser when you make changes to reST files (Unix only).

Note that ``make check`` runs automatically when you submit
a :ref:`pull request <pullrequest>`.  You may wish to run ``make check``
and ``make linkcheck`` to make sure that it runs without errors.

.. _separate repository:
.. _devguide repo: https://github.com/python/devguide
.. _devguide GitHub tracker: https://github.com/python/devguide/issues
.. _Sphinx: https://www.sphinx-doc.org/


===================================================
/. 🚀 ./testing/index.rst
===================================================

=====================
Testing and buildbots
=====================

.. toctree::
   :maxdepth: 5

   run-write-tests
   silence-warnings
   coverage
   buildbots
   new-buildbot-worker


===================================================
/. 🚀 ./testing/run-write-tests.rst
===================================================

.. _run-write-tests:
.. _runtests:

=========================
Running and writing tests
=========================

.. raw:: html

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      activateTab(getOS());
    });
    </script>

.. note::

    This document assumes you are working from an
    :ref:`in-development <indevbranch>` checkout of Python. If you
    are not then some things presented here may not work as they may depend
    on new features not available in earlier versions of Python.

Running
=======

The shortest, simplest way of running the test suite is the following command
from the root directory of your checkout (after you have
:ref:`built Python <compiling>`):

.. tab:: Unix

    .. code-block:: shell

        ./python -m test

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -m test

    This works on :ref:`most <mac-python.exe>` macOS systems.

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -m test

This will run the majority of tests, but exclude a small portion of them; these
excluded tests use special kinds of resources: for example, accessing the
Internet, or trying to play a sound or to display a graphical interface on
your desktop.  They are disabled by default so that running the test suite
is not too intrusive.  To enable some of these additional tests (and for
other flags which can help debug various issues such as reference leaks), read
the help text:

.. tab:: Unix

    .. code-block:: shell

        ./python -m test -h

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -m test -h

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -m test -h

If you want to run a single test file, simply specify the test file name
(without the extension) as an argument.  You also probably want to enable
verbose mode (using ``-v``), so that individual failures are detailed:

.. tab:: Unix

    .. code-block:: shell

        ./python -m test -v test_abc

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -m test -v test_abc

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -m test -v test_abc

To run a single test case, use the ``unittest`` module, providing the import
path to the test case:

.. tab:: Unix

    .. code-block:: shell

        ./python -m unittest -v test.test_abc.TestABC_Py

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -m unittest -v test.test_abc.TestABC_Py

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -m unittest -v test.test_abc.TestABC_Py

Some test modules also support direct invocation,
which might be useful for IDEs and local debugging:

.. tab:: Unix

    .. code-block:: shell

        ./python Lib/test/test_typing.py

.. tab:: macOS

    .. code-block:: shell

        ./python.exe Lib/test/test_typing.py

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat Lib/test/test_typing.py

But, there are several important notes:

1. This way of running tests exists only
   for local developer needs and is discouraged for anything else
2. Some modules do not support it at all. One example is ``test_importlib``.
   In other words: if some module does not have ``unittest.main()``, then
   most likely it does not support direct invocation.

If you have a multi-core or multi-CPU machine, you can enable parallel testing
using several Python processes so as to speed up things:

.. tab:: Unix

    .. code-block:: shell

        ./python -m test -j0

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -m test -j0

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -m test -j0

If you are running a version of Python prior to 3.3 you must specify the number
of processes to run simultaneously (e.g. ``-j2``).

.. _strenuous_testing:

Finally, if you want to run tests under a more strenuous set of settings, you
can run ``test`` as:

.. tab:: Unix

    .. code-block:: shell

        ./python -bb -E -Wd -m test -r -w -uall

.. tab:: macOS

    .. code-block:: shell

        ./python.exe -bb -E -Wd -m test -r -w -uall

.. tab:: Windows

    .. code-block:: dosbatch

        .\python.bat -bb -E -Wd -m test -r -w -uall

The various extra flags passed to Python cause it to be much stricter about
various things (the ``-Wd`` flag should be ``-W error`` at some point, but the
test suite has not reached a point where all warnings have been dealt with and
so we cannot guarantee that a bug-free Python will properly complete a test run
with ``-W error``). The ``-r`` flag to the test runner causes it to run tests in
a more random order which helps to check that the various tests do not interfere
with each other.  The ``-w`` flag causes failing tests to be run again to see
if the failures are transient or consistent.
The ``-uall`` flag allows the use of all available
resources so as to not skip tests requiring, e.g., Internet access.

To check for reference leaks (only needed if you modified C code), use the
``-R`` flag.  For example, ``-R 3:2`` will first run the test 3 times to settle
down the reference count, and then run it 2 more times to verify if there are
any leaks.

You can also execute the ``Tools/scripts/run_tests.py`` script as  found in a
CPython checkout. The script tries to balance speed with thoroughness. But if
you want the most thorough tests you should use the strenuous approach shown
above.

Locale support
--------------

Some tests require specific locales to run successfully. These locales are
often non-default, non-English, non-UTF-8 locales. If a necessary locale is
unavailable, the test is skipped or runs in the dry-run mode.
Additional locales that you may find helpful to set up on developer's machines
or buildbots include:

* ``en_US`` (``en_US.utf8``, ``en_US.iso88591``) --- the standard default
* ``de_DE`` (``de_DE.UTF-8``) or ``fr_FR`` (``fr_FR.utf8``, ``fr_FR.iso88591``,
  ``fr_FR.iso885915@euro``) --- common non-English locales
* ``tr_TR`` (``tr_TR.iso88599``) --- Turkish has different rules for upper/lower
  cases of "i" and "I".
* ``ps_AF`` --- used in ``test_decimal``

On Linux and macOS, the ``locale`` command can be used to list available
locales and change the settings. Environment variables ``LANG`` and those
prefixed with ``LC_`` can be used to set the locale.

Unexpected skips
----------------

Sometimes when running the test suite, you will see "unexpected skips"
reported. These represent cases where an entire test module has been
skipped, but the test suite normally expects the tests in that module to
be executed on that platform.

Often, the cause is that an optional module hasn't been built due to missing
build dependencies. In these cases, the missing module reported when the test
is skipped should match one of the modules reported as failing to build when
:ref:`compiling`.

In other cases, the skip message should provide enough detail to help figure
out and resolve the cause of the problem (for example, the default security
settings on some platforms will disallow some tests)


Writing
=======

Writing tests for Python is much like writing tests for your own code. Tests
need to be thorough, fast, isolated, consistently repeatable, and as simple as
possible. We try to have tests both for normal behaviour and for error
conditions.  Tests live in the ``Lib/test`` directory, where every file that
includes tests has a ``test_`` prefix.

One difference with ordinary testing is that you are encouraged to rely on the
:py:mod:`test.support` module. It contains various helpers that are tailored to
Python's test suite and help smooth out common problems such as platform
differences, resource consumption and cleanup, or warnings management.
That module is not suitable for use outside of the standard library.

When you are adding tests to an existing test file, it is also recommended
that you study the other tests in that file; it will teach you which precautions
you have to take to make your tests robust and portable.

For tests of the C API, see Tests sections in :ref:`c-api`.


Benchmarks
==========

Benchmarking is useful to test that a change does not degrade performance.

`The Python Benchmark Suite <https://github.com/python/pyperformance>`_
has a collection of benchmarks for all Python implementations. Documentation
about running the benchmarks is in the `README.txt
<https://github.com/python/pyperformance/blob/main/README.rst>`_ of the repo.


===================================================
/. 🚀 ./testing/silence-warnings.rst
===================================================

.. _silence-warnings:
.. _silencewarnings:

====================================
Silence warnings from the test suite
====================================

When running Python's test suite, no warnings should result when you run it
under :ref:`strenuous testing conditions <strenuous_testing>` (you can ignore
the extra flags passed to ``test`` that cause randomness and parallel execution
if you want). Unfortunately new warnings are added to Python on occasion which
take some time to eliminate (e.g., ``ResourceWarning``). Typically the easy
warnings are dealt with quickly, but the more difficult ones that require some
thought and work do not get fixed immediately.

If you decide to tackle a warning you have found, open an issue on the `issue
tracker`_ (if one has not already been opened) and say you are going to try and
tackle the issue, and then proceed to fix the issue.

.. _issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./testing/coverage.rst
===================================================

.. _coverage:

======================
Increase test coverage
======================

Python development follows a practice that all semantic changes and additions
to the language and :abbr:`stdlib (standard library)` are accompanied by
appropriate unit tests. Unfortunately Python was in existence for a long time
before the practice came into effect. This has left chunks of the stdlib
untested which is not a desirable situation to be in.

A good, easy way to become acquainted with Python's code and to help out is to
help increase the test coverage for Python's stdlib. Ideally we would like to
have 100% coverage, but any increase is a good one. Do realize, though, that
getting 100% coverage is not always possible. There could be platform-specific
code that simply will not execute for you, errors in the output, etc. You can
use your judgement as to what should and should not be covered, but being
conservative and assuming something should be covered is generally a good rule
to follow.

Choosing what module you want to increase test coverage for can be done in a
couple of ways.
You can simply run the entire test suite yourself with coverage turned
on and see what modules need help. This has the drawback of running the entire
test suite under coverage measuring which takes some time to complete, but you
will have an accurate, up-to-date notion of what modules need the most work.

Another is to follow the examples below and simply see what
coverage your favorite module has. This is "stabbing in the dark", though, and
so it might take some time to find a module that needs coverage help.

Do make sure, though, that for any module you do decide to work on that you run
coverage for just that module. This will make sure you know how good the
explicit coverage of the module is from its own set of tests instead of from
implicit testing by other code that happens to use the module.


Common gotchas
==============

Please realize that coverage reports on modules already imported before coverage
data starts to be recorded will be wrong. Typically you can tell a module falls
into this category by the coverage report saying that global statements that
would obviously be executed upon import have gone unexecuted while local
statements have been covered. In these instances you can ignore the global
statement coverage and simply focus on the local statement coverage.

When writing new tests to increase coverage, do take note of the style of tests
already provided for a module (e.g., whitebox, blackbox, etc.). As
some modules are primarily maintained by a single core developer they may have
a specific preference as to what kind of test is used (e.g., whitebox) and
prefer that other types of tests not be used (e.g., blackbox). When in doubt,
stick with whitebox testing in order to properly exercise the code.


Measuring coverage
==================

It should be noted that a quirk of running coverage over Python's own stdlib is
that certain modules are imported as part of interpreter startup. Those modules
required by Python itself will not be viewed as executed by the coverage tools
and thus look like they have very poor coverage (e.g., the :py:mod:`stat`
module). In these instances the module will appear to not have any coverage of
global statements but will have proper coverage of local statements (e.g.,
function definitions will not be traced, but the function bodies will).
Calculating the coverage of modules in this situation will simply require
manually looking at what local statements were not executed.

Using coverage.py
-----------------

One of the most popular third-party coverage tools is `coverage.py`_ which
provides very nice HTML output along with advanced features such as
:ref:`branch coverage <branch_coverage>`. If you prefer to stay with tools only
provided by the stdlib then you can :ref:`use test.regrtest
<coverage_by_regrtest>`.


.. _install_coverage:

Install coverage
''''''''''''''''

By default, pip will not install into the in-development version of Python you
just built, and this built version of Python will not see packages installed
into your default version of Python. One option is to use a virtual environment
to install coverage.

On Unix run::

    ./python -m venv ../cpython-venv
    source ../cpython-venv/bin/activate
    pip install coverage

On :ref:`most <mac-python.exe>` macOS systems run::

    ./python.exe -m venv ../cpython-venv
    source ../cpython-venv/bin/activate
    pip install coverage

On Windows run::

    python.bat -m venv ..\\cpython-venv
    ..\\cpython-venv\\Scripts\\activate.bat
    pip install coverage

You can now use python without the ./ for the rest of these instructions, as
long as your venv is activated. For more info on venv see `Virtual Environment
<https://docs.python.org/3/tutorial/venv.html>`_ documentation.

If this does not work for you for some reason, you should try using the
in-development version of coverage.py to see if it has been updated as needed.
To do this you should clone/check out the development version of coverage.py::

    git clone https://github.com/nedbat/coveragepy

You will need to use the full path to the installation.

Another option is to use an installed copy of coverage.py, if you already have
it. For this, you will again need to use the full path to that installation.

.. _coverage_usage:

Basic usage
'''''''''''

The following command will tell you if your copy of coverage works (substitute
``COVERAGEDIR`` with the directory where your clone exists, e.g.
``../coveragepy``)::

    ./python COVERAGEDIR

Coverage.py will print out a little bit of helper text verifying that
everything is working. If you are using an installed copy, you can do the
following instead (note this must be installed using the built copy of Python,
such as by venv)::

    ./python -m coverage

The rest of the examples on how to use coverage.py will assume you are using a
cloned copy, but you can substitute the above and all instructions should still
be valid.

To run the test suite under coverage.py, do the following::

    ./python COVERAGEDIR run --pylib Lib/test/regrtest.py

To run only a single test, specify the module/package being tested
in the ``--source`` flag (so as to prune the coverage reporting to only the
module/package you are interested in) and then append the name of the test you
wish to run to the command::

    ./python COVERAGEDIR run --pylib --source=abc Lib/test/regrtest.py test_abc

To see the results of the coverage run, you can view a text-based report with::

    ./python COVERAGEDIR report

You can use the ``--show-missing`` flag to get a list of lines that were not
executed::

    ./python COVERAGEDIR report --show-missing

But one of the strengths of coverage.py is its HTML-based reports which let
you visually see what lines of code were not tested::

    ./python COVERAGEDIR html -i --include=`pwd`/Lib/* --omit="Lib/test/*,Lib/*/tests/*"

This will generate an HTML report in a directory named ``htmlcov`` which
ignores any errors that may arise and ignores modules for which test coverage is
unimportant (e.g. tests, temp files, etc.). You can then open the
``htmlcov/index.html`` file in a web browser to view the coverage results along
with pages that visibly show what lines of code were or were not executed.


.. _branch_coverage:

Branch coverage
'''''''''''''''

For the truly daring, you can use another powerful feature of coverage.py:
branch coverage. Testing every possible branch path through code, while a great
goal to strive for, is a secondary goal to getting 100% line
coverage for the entire stdlib (for now).

If you decide you want to try to improve branch coverage, simply add the
``--branch`` flag to your coverage run::

    ./python COVERAGEDIR run --pylib --branch <arguments to run test(s)>

This will lead to the report stating not only what lines were not covered, but
also what branch paths were not executed.


.. _coverage_by_regrtest:

Using test.regrtest
-------------------

If you prefer to rely solely on the stdlib to generate coverage data, you can
do so by passing the appropriate flags to :py:mod:`test` (along with
any other flags you want to)::

    ./python -m test --coverage -D `pwd`/coverage_data <test arguments>

Do note the argument to ``-D``; if you do not specify an absolute path to where
you want the coverage data to end up it will go somewhere you don't expect.


.. note::
    If you are running coverage over the entire test suite, make sure to
    add ``-x test_importlib test_runpy test_trace`` to exclude those tests as
    they trigger exceptions during coverage; see
    https://bugs.python.org/issue10541 and https://bugs.python.org/issue10991.

Once the tests are done you will find the directory you specified contains
files for each executed module along with which lines were executed how many
times.


Filing the issue
================
Once you have increased coverage,
you need to create an issue on the `issue tracker`_ and
submit a :ref:`pull request <pullrequest>`.


Measuring coverage of C code with gcov and lcov
===============================================

It's also possible to measure the function, line and branch coverage of
Python's C code. Right now only GCC with `gcov`_ is supported. In order to
create an instrumented build of Python with gcov, run::

    make coverage

Then run some code and gather coverage data with the ``gcov`` command. In
order to create a HTML report you can install `lcov`_. The command::

    make coverage-lcov

assembles coverage data, removes 3rd party and system libraries and finally
creates a report. You can skip both steps and just run::

    make coverage-report

if you like to generate a coverage report for Python's stdlib tests. It takes
about 20 to 30 minutes on a modern computer.

.. note::

    Multiple test jobs may not work properly. C coverage reporting has only
    been tested with a single test process.

.. _issue tracker: https://github.com/python/cpython/issues
.. _gcov: https://gcc.gnu.org/onlinedocs/gcc/Gcov.html
.. _lcov: https://ltp.sourceforge.net/coverage/lcov.php
.. _coverage.py: https://coverage.readthedocs.io/en/latest/


===================================================
/. 🚀 ./testing/buildbots.rst
===================================================

.. _buildbots:

======================
Working with buildbots
======================

.. highlight:: bash

To assert that there are no regressions in the :ref:`development and maintenance
branches <devcycle>`, Python has a set of dedicated machines (called *buildbots*
or *build workers*) used for continuous integration.  They span a number of
hardware/operating system combinations.  Furthermore, each machine hosts
several *builders*, one per active branch: when a new change is pushed
to this branch on the public `GitHub repository <https://github.com/python/cpython>`_, all corresponding builders
will schedule a new build to be run as soon as possible.

The build steps run by the buildbots are the following:

* Check out the source tree for the changeset which triggered the build
* Compile Python
* Run the test suite using :ref:`strenuous settings <strenuous_testing>`
* Clean up the build tree

It is your responsibility, as a core developer, to check the automatic
build results after you push a change to the repository.  It is therefore
important that you get acquainted with the way these results are presented,
and how various kinds of failures can be explained and diagnosed.

In case of trouble
==================

Please read this page in full. If your questions aren't answered here and you
need assistance with the buildbots, a good way to get help is to either:

* contact the ``python-buildbots@python.org`` mailing list where all buildbot
  worker owners are subscribed; or
* contact the release manager of the branch you have issues with.

Buildbot failures on pull requests
==================================

The ``bedevere-bot`` on GitHub will put a message on your merged Pull Request
if building your commit on a stable buildbot worker fails. Take care to
evaluate the failure, even if it looks unrelated at first glance.

Not all failures will generate a notification since not all builds are executed
after each commit. In particular, reference leaks builds take several hours to
complete so they are done periodically. This is why it's important for you to
be able to check the results yourself, too.

Checking results of automatic builds
====================================

There are three ways of visualizing recent build results:

* The Web interface for each branch at https://www.python.org/dev/buildbot/,
  where the so-called "waterfall" view presents a vertical rundown of recent
  builds for each builder.  When interested in one build, you'll have to
  click on it to know which changesets it corresponds to.  Note that
  the buildbot web pages are often slow to load, be patient.

* The command-line ``bbreport.py`` client, which you can get from
  https://code.google.com/archive/p/bbreport. Installing it is trivial: just add
  the directory containing ``bbreport.py`` to your system path so that
  you can run it from any filesystem location.  For example, if you want
  to display the latest build results on the development ("main") branch,
  type::

      bbreport.py -q 3.x

* The buildbot "console" interface at https://buildbot.python.org/all/
  This works best on a wide, high resolution
  monitor.  Clicking on the colored circles will allow you to open a new page
  containing whatever information about that particular build is of interest to
  you.  You can also access builder information by clicking on the builder
  status bubbles in the top line.

If you like IRC, having an IRC client open to the #python-dev-notifs channel on
irc.libera.chat is useful.  Any time a builder changes state (last build
passed and this one didn't, or vice versa), a message is posted to the channel.
Keeping an eye on the channel after pushing a changeset is a simple way to get
notified that there is something you should look in to.

Some buildbots are much faster than others.  Over time, you will learn which
ones produce the quickest results after a build, and which ones take the
longest time.

Also, when several changesets are pushed in a quick succession in the same
branch, it often happens that a single build is scheduled for all these
changesets.

Stability
=========

A subset of the buildbots are marked "stable".  They are taken into account
when making a new release.  The rule is that all stable builders must be free of
persistent failures when the release is cut.  It is absolutely **vital**
that core developers fix any issue they introduce on the stable buildbots,
as soon as possible.

This does not mean that other builders' test results can be taken lightly,
either.  Some of them are known for having platform-specific issues that
prevent some tests from succeeding (or even terminating at all), but
introducing additional failures should generally not be an option.

Flags-dependent failures
========================

Sometimes, while you have run the :ref:`whole test suite <runtests>` before
committing, you may witness unexpected failures on the buildbots.  One source
of such discrepancies is if different flags have been passed to the test runner
or to Python itself.  To reproduce, make sure you use the same flags as the
buildbots: they can be found out simply by clicking the **stdio** link for
the failing build's tests.  For example::

   ./python.exe -Wd -E -bb  ./Lib/test/regrtest.py -uall -rwW

.. note::
   Running ``Lib/test/regrtest.py`` is exactly equivalent to running
   ``-m test``.

Ordering-dependent failures
===========================

Sometimes the failure is even subtler, as it relies on the order in which
the tests are run.  The buildbots *randomize* test order (by using the ``-r``
option to the test runner) to maximize the probability that potential
interferences between library modules are exercised; the downside is that it
can make for seemingly sporadic failures.

The ``--randseed`` option makes it easy to reproduce the exact randomization
used in a given build.  Again, open the ``stdio`` link for the failing test
run, and check the beginning of the test output proper.

Let's assume, for the sake of example, that the output starts with:

.. code-block:: none
   :emphasize-lines: 6

   ./python -Wd -E -bb Lib/test/regrtest.py -uall -rwW
   == CPython 3.3a0 (default:22ae2b002865, Mar 30 2011, 13:58:40) [GCC 4.4.5]
   ==   Linux-2.6.36-gentoo-r5-x86_64-AMD_Athlon-tm-_64_X2_Dual_Core_Processor_4400+-with-gentoo-1.12.14 little-endian
   ==   /home/buildbot/buildarea/3.x.ochtman-gentoo-amd64/build/build/test_python_29628
   Testing with flags: sys.flags(debug=0, inspect=0, interactive=0, optimize=0, dont_write_bytecode=0, no_user_site=0, no_site=0, ignore_environment=1, verbose=0, bytes_warning=2, quiet=0)
   Using random seed 2613169
   [  1/353] test_augassign
   [  2/353] test_functools

You can reproduce the exact same order using::

   ./python -Wd -E -bb -m test -uall -rwW --randseed 2613169

It will run the following sequence (trimmed for brevity):

.. code-block:: none

   [  1/353] test_augassign
   [  2/353] test_functools
   [  3/353] test_bool
   [  4/353] test_contains
   [  5/353] test_compileall
   [  6/353] test_unicode

If this is enough to reproduce the failure on your setup, you can then
bisect the test sequence to look for the specific interference causing the
failure.  Copy and paste the test sequence in a text file, then use the
``--fromfile`` (or ``-f``) option of the test runner to run the exact
sequence recorded in that text file::

   ./python -Wd -E -bb -m test -uall -rwW --fromfile mytestsequence.txt

In the example sequence above, if ``test_unicode`` had failed, you would
first test the following sequence:

.. code-block:: none

   [  1/353] test_augassign
   [  2/353] test_functools
   [  3/353] test_bool
   [  6/353] test_unicode

And, if it succeeds, the following one instead (which, hopefully, shall
fail):

.. code-block:: none

   [  4/353] test_contains
   [  5/353] test_compileall
   [  6/353] test_unicode

Then, recursively, narrow down the search until you get a single pair of
tests which triggers the failure.  It is very rare that such an interference
involves more than **two** tests.  If this is the case, we can only wish you
good luck!

.. note::
   You cannot use the ``-j`` option (for parallel testing) when diagnosing
   ordering-dependent failures.  Using ``-j`` isolates each test in a
   pristine subprocess and, therefore, prevents you from reproducing any
   interference between tests.


Transient failures
==================

While we try to make the test suite as reliable as possible, some tests do
not reach a perfect level of reproducibility.  Some of them will sometimes
display spurious failures, depending on various conditions.  Here are common
offenders:

* Network-related tests, such as ``test_poplib``, ``test_urllibnet``, etc.
  Their failures can stem from adverse network conditions, or imperfect
  thread synchronization in the test code, which often has to run a
  server in a separate thread.

* Tests dealing with delicate issues such as inter-thread or inter-process
  synchronization, or Unix signals: ``test_multiprocessing``,
  ``test_threading``, ``test_subprocess``, ``test_threadsignals``.

When you think a failure might be transient, it is recommended you confirm by
waiting for the next build.  Still, even if the failure does turn out sporadic
and unpredictable, the issue should be reported on the bug tracker; even
better if it can be diagnosed and suppressed by fixing the test's
implementation, or by making its parameters - such as a timeout - more robust.


Custom builders
===============

.. highlight:: console

When working on a platform-specific issue, you may want to test your changes on
the buildbot fleet rather than just on GitHub Actions and Azure Pipelines.  To do so, you can
make use of the `custom builders
<https://buildbot.python.org/all/#/builders?tags=%2Bcustom>`_.
These builders track the ``buildbot-custom`` short-lived branch of the
``python/cpython`` repository, which is only accessible to core developers.

To start a build on the custom builders, push the commit you want to test to
the ``buildbot-custom`` branch::

   $ git push upstream <local_branch_name>:buildbot-custom

You may run into conflicts if another developer is currently using the custom
builders or forgot to delete the branch when they finished.  In that case, make
sure the other developer is finished and either delete the branch or force-push
(add the ``-f`` option) over it.

When you have gotten the results of your tests, delete the branch::

   $ git push upstream :buildbot-custom     # or use the GitHub UI

If you are interested in the results of a specific test file only, we
recommend you change (temporarily, of course) the contents of the
``buildbottest`` clause in ``Makefile.pre.in``; or, for Windows builders,
the ``Tools/buildbot/test.bat`` script.

.. seealso::
   :ref:`buildworker`


===================================================
/. 🚀 ./testing/new-buildbot-worker.rst
===================================================

.. _new-buildbot-worker:
.. _buildworker:

====================
New buildbot workers
====================

.. highlight:: bash

Python's :ref:`buildbots` system was discussed earlier.  We sometimes refer to
the collection of *build workers* as our "buildbot fleet".  The machines that
comprise the fleet are voluntarily contributed resources.  Many are run by
individual volunteers out of their own pockets and time, while others are
supported by corporations.  Even the corporate sponsored buildbots, however,
tend to exist because some individual championed them, made them a reality, and
is committed to maintaining them.

Anyone can contribute a buildbot to the fleet.  This document describes how
to go about setting up a buildbot worker, getting it added, and some hints about
buildbot maintenance.

Anyone running a buildbot that is part of the fleet should subscribe to the
`python-buildbots <https://mail.python.org/mailman3/lists/python-buildbots.python.org/>`_
mailing list.  This mailing list is also the place to contact if you want to
contribute a buildbot but have questions.

As for what kind of buildbot to run...take a look at our `current fleet
<https://buildbot.python.org/all/>`_.  Pretty much anything that isn't
on that list would be interesting: different Linux/Unix distributions,
different versions of the various OSes, other OSes if you or someone are
prepared to make the test suite actually pass on that new OS.  Even if you only
want to run an OS that's already on our list there may be utility in setting it
up; we also need to build and test python under various alternate build
configurations.  Post to the mailing list and talk about what you'd like to
contribute.


Preparing for buildbot worker setup
===================================

Since the goal is to build Python from source, the system will need to have
everything required to do normal python development:  a compiler, a linker, and
(except on windows) the "development" headers for any of the optional modules
(zlib, OpenSSL, etc) supported by the platform.  Follow the steps outlined in
:ref:`setup` for the target platform, all the way through to having a working
compiled python.

In order to set up the buildbot software, you will need to obtain an identifier
and password for your worker so it can join the fleet.  Open an issue in the
`configuration repository <https://github.com/python/buildmaster-config/issues/new/choose>`_
to discuss adding your worker and to obtain the
needed workername and password.  You can do some of the steps that follow
before having the credentials, but it is easiest to have them before
the "buildbot worker" step below.


Setting up the buildbot worker
==============================

Conventional always-on machines
-------------------------------

You need a recent version of the `buildbot <https://buildbot.net/>`_ software,
and you will probably want a separate 'buildbot' user to run the buildbot
software.  You may also want to set the buildbot up using a virtual
environment, depending on how you manage your system.  We won't cover how to that
here; it doesn't differ from setting up a virtual environment for any other
software, but you'll need to modify the sequence of steps below as appropriate
if you choose that path.

For Linux:

* If your package manager provides the buildbot worker software, that is
  probably the best way to install it; it may create the buildbot user for
  you, in which case you can skip that step.  Otherwise, do ``pip install
  buildbot-worker``.
* Create a ``buildbot`` user (using, eg: ``useradd``) if necessary.
* Log in as the buildbot user.

For Mac:

* Create a buildbot user using the OS/X control panel user admin.  It
  should be a "standard" user.
* Log in as the buildbot user.
* Install the buildbot worker [#]_ by running ``pip install buildbot-worker``.

For Windows:

* Create a buildbot user as a "standard" user.
* Install the latest version of Python from python.org.
* Open a Command Prompt.
* Execute ``python -m pip install pypiwin32 buildbot-worker`` (note that
  ``python.exe`` is not added to ``PATH`` by default, making the
  ``python`` command accessible is left as an exercise for the user).

In a terminal window for the buildbot user, issue the following commands (you
can put the ``buildarea`` wherever you want to)::

    mkdir buildarea
    buildbot-worker create-worker buildarea buildbot-api.python.org:9020 workername workerpasswd

(Note that on Windows, the ``buildbot-worker`` command will be in the
:file:`Scripts` directory of your Python installation.)

Once this initial worker setup completes, you should edit the files
``buildarea/info/admin`` and ``buildarea/info/host`` to provide your contact
info and information on the host configuration, respectively.  This information
will be presented in the buildbot web pages that display information about the
builders running on your worker.

You will also want to make sure that the worker is started when the
machine reboots:

For Linux:

* Add the following line to ``/etc/crontab``::

      @reboot buildbot-worker restart /path/to/buildarea

  Note that we use ``restart`` rather than ``start`` in case a crash has
  left a ``twistd.pid`` file behind.

For OSX:

* Create a bin directory for your buildbot user::

      mkdir bin

* Place the following script, named ``run_worker.sh``, into that directory::

      #!/bin/bash
      export PATH=/usr/local/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:$PATH
      export LC_CTYPE=en_US.utf-8
      cd /Users/buildbot/buildarea
      twistd --nodaemon --python=buildbot.tac --logfile=buildbot.log --prefix=worker

  If you use pip with Apple's system python, add '/System' to the front of
  the path to the Python bin directory.

*  Place a file with the following contents into ``/Library/LaunchDaemons``:

   .. code-block:: xml

      <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN"
            "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
      <plist version="1.0">
      <dict>
            <key>Label</key>
            <string>net.buildbot.worker</string>
            <key>UserName</key>
            <string>buildbot</string>
            <key>WorkingDirectory</key>
            <string>/Users/buildbot/buildarea</string>
            <key>ProgramArguments</key>
            <array>
                    <string>/Users/buildbot/bin/run_worker.sh</string>
            </array>
            <key>StandardOutPath</key>
            <string>twistd.log</string>
            <key>StandardErrorPath</key>
            <string>twistd.log</string>
            <key>KeepAlive</key>
            <true/>
            <key>SessionCreate</key>
            <true/>
      </dict>
      </plist>

   The recommended name for the file is ``net.buildbot.worker``.

For Windows:

* Add a Scheduled Task to run ``buildbot-worker start buildarea`` as the
  buildbot user "when the computer starts up".  It is best to provide
  absolute paths to the ``buildbot-worker`` command and the :file:`buildarea`
  directory.  It is also recommended to set the task to run in the
  directory that contains the :file:`buildarea` directory.

* Alternatively (note: don't do both!), set up the worker
  service as described in the `buildbot documentation
  <https://docs.buildbot.net/current/manual/installation/requirements.html#windows-support>`_.

To start the worker running for your initial testing, you can do::

    buildbot-worker start buildarea

Then you can either wait for someone to make a commit, or you can pick a
builder associated with your worker from the `list of builders
<https://buildbot.python.org/all/>`_ and force a build.

In any case you should initially monitor builds on your builders to make sure
the tests are passing and to resolve any platform issues that may be revealed
by tests that fail.  Unfortunately we do not currently have a way to notify you
only of failures on your builders, so doing periodic spot checks is also a good
idea.

.. note::
   If your buildbot worker is disconnecting regularly, it may be a symptom of the
   default ``keepalive`` value (``600`` for 10 minutes) being `set
   <https://docs.buildbot.net/latest/manual/installation/worker.html#cmdoption-buildbot-worker-create-worker-keepalive>`_
   too high. You can change it to a lower value (e.g. ``180`` for 3 minutes)
   in the ``buildbot.tac`` file found in your build area.


Latent workers
--------------

We also support running `latent workers
<http://docs.buildbot.net/current/manual/configuration/workers.html#latent-workers>`_
on the AWS EC2 service.  To set up such a worker:

* Start an instance of your chosen base AMI and set it up as a
  conventional worker.
* After the instance is fully set up as a conventional worker (including
  worker name and password, and admin and host information), create an AMI
  from the instance and stop the instance.
* Contact the buildmaster administrator who gave you your worker
  name and password and give them the following information:

  * Instance size (such as ``m4.large``)
  * Full region specification (such as ``us-west-2``)
  * AMI ID (such as ``ami-1234beef``)
  * An Access Key ID and Access Key.  It is recommended to set up
    a separate IAM user with full access to EC2 and provide the access key
    information for that user rather than for your main account.

The buildmaster cannot guarantee that it will always shut down your
instance(s), so it is recommended to periodically check and make sure
there are no "zombie" instances running on your account, created by the
buildbot master.  Also, if you notice that your worker seems to have been
down for an unexpectedly long time, please ping the `python-buildbots
<https://mail.python.org/mailman3/lists/python-buildbots.python.org/>`_ list to
request that the master be restarted.

Latent workers should also be updated periodically to include operating system
or other software updates, but when to do such maintenance is largely up to you
as the worker owner.  There are a couple different options for doing such
updates:

* Start an instance from your existing AMI, do updates on that instance,
  and save a new AMI from the updated instance.  Note that (especially for
  Windows workers) you should do at least one restart of the instance after
  doing updates to be sure that any post-reboot update work is done before
  creating the new AMI.
* Create an entirely new setup from a newer base AMI using your existing
  worker name and password.

Whichever way you choose to update your AMI, you'll need to provide the
buildmaster administrators with the new AMI ID.


Buildbot worker operation
=========================

Most of the time, running a worker is a "set and forget" operation,
depending on the level of involvement you want to have in resolving bugs
revealed by your builders.  There are, however, times when it is helpful or
even necessary for you to get involved.  As noted above, you should be
subscribed to ``python-buildbots@python.org`` so that you will be made
aware of any fleet-wide issues.

Necessary tasks include, obviously, keeping the buildbot running.  Currently
the system for notifying buildbot owners when their workers go offline is not
working; this is something we hope to resolve.  So currently it is helpful if
you periodically check the status of your worker.  We will also contact you
via your contact address in ``buildarea/info/admin`` when we notice there is a
problem that has not been resolved for some period of time and you have
not responded to a posting on the python-buildbots list about it.

We currently do not have a minimum version requirement for the worker
software.  However, this is something we will probably establish as we tune the
fleet, so another task will be to occasionally upgrade the buildbot worker software.
Coordination for this will be done via ``python-buildbots@python.org``.

The most interesting extra involvement is when your worker reveals a unique
or almost-unique problem:  a test that is failing on your system but not on
other systems.  In this case you should be prepared to offer debugging help to
the people working on the bug: running tests by hand on the worker machine
or, if possible, providing ssh access to a committer to run experiments to try
to resolve the issue.


Required ports
==============

The worker operates as a *client* to the *buildmaster*.  This means that
all network connections are *outbound*.  This is true also for the network
tests in the test suite.  Most consumer firewalls will allow any outbound
traffic, so normally you do not need to worry about what ports the buildbot
uses.  However, corporate firewalls are sometimes more restrictive, so here is
a table listing all of the outbound ports used by the buildbot and the python
test suite (this list may not be complete as new tests may have been added
since this table was last vetted):

======= =================== ================================================
Port    Host                Description
======= =================== ================================================
20, 21  ftp.debian.org      test_urllib2net
53      your DNS server     test_socket, and others implicitly
80      python.org          (several tests)
        example.com
119     news.gmane.org      test_nntplib
443     (various)           test_ssl
465     smtp.gmail.com      test_smtpnet
587     smtp.gmail.com      test_smtpnet
9020    python.org          connection to buildmaster
======= =================== ================================================

Many tests will also create local TCP sockets and connect to them, usually
using either ``localhost`` or ``127.0.0.1``.


Required resources
==================

Based on the last time we did a `survey
<https://mail.python.org/pipermail/python-dev/2012-March/117978.html>`_ on
buildbot requirements, the recommended resource allocations for a python
buildbot are at least:

* 2 CPUs
* 512 MB RAM
* 30 GB free disk space

The bigmem tests won't run in this configuration, since they require
substantially more memory, but these resources should be sufficient to ensure
that Python compiles correctly on the platform and can run the rest of the test
suite.


Security considerations
=======================

We only allow builds to be triggered against commits to the
`CPython repository on GitHub <https://github.com/python/cpython>`_.
This means that the code your buildbot will run will have been vetted by a committer.
However, mistakes and bugs happen, as could a compromise, so keep this in mind when
siting your buildbot on your network and establishing the security around it.
Treat the buildbot like you would any resource that is public facing and might
get hacked (use a VM and/or jail/chroot/solaris zone, put it in a DMZ, etc).
While the buildbot does not have any ports open for inbound traffic (and is not
public facing in that sense), committer mistakes do happen, and security flaws
are discovered in both released and unreleased code, so treating the buildbot
as if it were fully public facing is a good policy.

Code runs differently as privileged and unprivileged users.  We would love to
have builders running as privileged accounts, but security considerations do
make that difficult, as access to root can provide access to surprising
resources (such as spoofed IP packets, changes in MAC addresses, etc) even on a
VM setup.  But if you are confident in your setup, we'd love to have a buildbot
that runs python as root.

Note that the above is a summary of a `discussion
<https://mail.python.org/pipermail/python-dev/2011-October/113935.html>`_ on
python-dev about buildbot security that includes examples of the tests for
which privilege matters.  There was no final consensus, but the information is
useful as a point of reference.

.. [#] If the buildbot is going to do Framework builds, it is better to
       use the Apple-shipped Python so as to avoid any chance of the buildbot
       picking up components from the installed python.org python.


===================================================
/. 🚀 ./development-tools/index.rst
===================================================

=================
Development tools
=================

.. toctree::
   :maxdepth: 5

   clinic
   gdb
   clang
   coverity


===================================================
/. 🚀 ./development-tools/clinic.rst
===================================================

.. highlight:: c

.. _clinic:

***************
Argument Clinic
***************

:author: Larry Hastings

**Source code:** :cpy-file:`Tools/clinic/clinic.py`.

Argument Clinic is a preprocessor for CPython C files.
It was introduced in Python 3.4 with :pep:`436`,
in order to provide introspection signatures,
and to generate performant and tailor-made boilerplate code
for argument parsing in CPython builtins, module level functions, and class methods.
This document is divided in four major sections:

* :ref:`clinic-background` talks about the basic concepts and goals of Argument Clinic.
* :ref:`clinic-reference` describes the command-line interface and Argument Clinic terminology.
* :ref:`clinic-tutorial` guides you through all the steps required to adapt an existing C function to Argument Clinic.
* :ref:`clinic-howtos` details how to handle specific tasks.


.. note::

  Argument Clinic is considered internal-only
  for CPython.  Its use is not supported for files outside
  CPython, and no guarantees are made regarding backwards
  compatibility for future versions.  In other words: if you
  maintain an external C extension for CPython, you're welcome
  to experiment with Argument Clinic in your own code.  But the
  version of Argument Clinic that ships with the next version
  of CPython *could* be totally incompatible and break all your code.


.. _clinic-background:

Background
==========

Basic concepts
--------------

When Argument Clinic is run on a file, either via the :ref:`clinic-cli`
or via ``make clinic``, it will scan over the input files looking for
:term:`start lines <start line>`:

.. code-block:: none

    /*[clinic input]

When it finds one, it reads everything up to the :term:`end line`:

.. code-block:: none

    [clinic start generated code]*/

Everything in between these two lines is Argument Clinic :term:`input`.
When Argument Clinic parses input, it generates :term:`output`.
The output is rewritten into the C file immediately after the input,
followed by a :term:`checksum line`.
All of these lines, including the :term:`start line` and :term:`checksum line`,
are collectively called an Argument Clinic :term:`block`:

.. code-block:: none

    /*[clinic input]
    ... clinic input goes here ...
    [clinic start generated code]*/
    ... clinic output goes here ...
    /*[clinic end generated code: ...]*/

If you run Argument Clinic on the same file a second time, Argument Clinic
will discard the old :term:`output` and write out the new output with a fresh
:term:`checksum line`.
If the :term:`input` hasn't changed, the output won't change either.

.. note::

   You should never modify the output of an Argument Clinic block,
   as any change will be lost in future Argument Clinic runs;
   Argument Clinic will detect an output checksum mismatch and regenerate the
   correct output.
   If you are not happy with the generated output,
   you should instead change the input until it produces the output you want.


.. _clinic-reference:

Reference
=========


.. _clinic-terminology:

Terminology
-----------

.. glossary::

   start line
      The line ``/*[clinic input]``.
      This line marks the beginning of Argument Clinic input.
      Note that the *start line* opens a C block comment.

   end line
      The line ``[clinic start generated code]*/``.
      The *end line* marks the _end_ of Argument Clinic :term:`input`,
      but at the same time marks the _start_ of Argument Clinic :term:`output`,
      thus the text *"clinic start start generated code"*
      Note that the *end line* closes the C block comment opened
      by the *start line*.

   checksum
      A hash to distinguish unique :term:`inputs <input>`
      and :term:`outputs <output>`.

   checksum line
      A line that looks like ``/*[clinic end generated code: ...]*/``.
      The three dots will be replaced by a :term:`checksum` generated from the
      :term:`input`, and a :term:`checksum` generated from the :term:`output`.
      The checksum line marks the end of Argument Clinic generated code,
      and is used by Argument Clinic to determine if it needs to regenerate
      output.

   input
      The text between the :term:`start line` and the :term:`end line`.
      Note that the start and end lines open and close a C block comment;
      the *input* is thus a part of that same C block comment.

   output
      The text between the :term:`end line` and the :term:`checksum line`.

   block
      All text from the :term:`start line` to the :term:`checksum line` inclusively.


.. _clinic-cli:

Command-line interface
----------------------

The Argument Clinic :abbr:`CLI (Command-Line Interface)` is typically used to
process a single source file, like this:

.. code-block:: shell-session

    $ python3 ./Tools/clinic/clinic.py foo.c

The CLI supports the following options:

.. program:: ./Tools/clinic/clinic.py [-h] [-f] [-o OUTPUT] [-v] \
             [--converters] [--make] [--srcdir SRCDIR] [--limited] [FILE ...]

.. option:: -h, --help

   Print CLI usage.

.. option:: -f, --force

   Force output regeneration.

.. option:: -o, --output OUTPUT

   Redirect file output to OUTPUT

.. option:: -v, --verbose

   Enable verbose mode.

.. option:: --converters

   Print a list of all supported converters and return converters.

.. option:: --make

   Walk :option:`--srcdir` to run over all relevant files.

.. option:: --srcdir SRCDIR

   The directory tree to walk in :option:`--make` mode.

.. option:: --exclude EXCLUDE

   A file to exclude in :option:`--make` mode.
   This option can be given multiple times.

.. option:: --limited

    Use the :ref:`Limited API <limited-c-api>` to parse arguments in the generated C code.
    See :ref:`clinic-howto-limited-capi`.

.. option:: FILE ...

   The list of files to process.


.. _clinic-classes:

Classes for extending Argument Clinic
-------------------------------------

.. module:: clinic

.. class:: CConverter

   The base class for all converters.
   See :ref:`clinic-howto-custom-converter` for how to subclass this class.

   .. attribute:: type

      The C type to use for this variable.
      :attr:`!type` should be a Python string specifying the type,
      e.g. ``'int'``.
      If this is a pointer type, the type string should end with ``' *'``.

   .. attribute:: default

      The Python default value for this parameter, as a Python value.
      Or the magic value ``unspecified`` if there is no default.

   .. attribute:: py_default

      :attr:`!default` as it should appear in Python code,
      as a string.
      Or ``None`` if there is no default.

   .. attribute:: c_default

      :attr:`!default` as it should appear in C code,
      as a string.
      Or ``None`` if there is no default.

   .. attribute:: c_ignored_default

      The default value used to initialize the C variable when
      there is no default, but not specifying a default may
      result in an "uninitialized variable" warning.  This can
      easily happen when using option groups—although
      properly written code will never actually use this value,
      the variable does get passed in to the impl, and the
      C compiler will complain about the "use" of the
      uninitialized value.  This value should always be a
      non-empty string.

   .. attribute:: converter

      The name of the C converter function, as a string.

   .. attribute:: impl_by_reference

      A boolean value.  If true,
      Argument Clinic will add a ``&`` in front of the name of
      the variable when passing it into the impl function.

   .. attribute:: parse_by_reference

      A boolean value.  If true,
      Argument Clinic will add a ``&`` in front of the name of
      the variable when passing it into :c:func:`PyArg_ParseTuple`.


.. _clinic-tutorial:

Tutorial
========

The best way to get a sense of how Argument Clinic works is to
convert a function to work with it.  Here, then, are the bare
minimum steps you'd need to follow to convert a function to
work with Argument Clinic.  Note that for code you plan to
check in to CPython, you really should take the conversion farther,
using some of the :ref:`advanced concepts <clinic-howtos>`
you'll see later on in the document,
like :ref:`clinic-howto-return-converters`
and :ref:`clinic-howto-self-converter`.
But we'll keep it simple for this walkthrough so you can learn.

First, make sure you're working with a freshly updated checkout
of the CPython trunk.

Next, find a Python builtin that calls either :c:func:`PyArg_ParseTuple`
or :c:func:`PyArg_ParseTupleAndKeywords`, and hasn't been converted
to work with Argument Clinic yet.
For this tutorial, we'll be using
:py:meth:`_pickle.Pickler.dump <pickle.Pickler.dump>`.

If the call to the :c:func:`!PyArg_Parse*` function uses any of the
following format units...:

.. code-block:: none

   O&
   O!
   es
   es#
   et
   et#

... or if it has multiple calls to :c:func:`PyArg_ParseTuple`,
you should choose a different function.
(See :ref:`clinic-howto-advanced-converters` for those scenarios.)

Also, if the function has multiple calls to :c:func:`!PyArg_ParseTuple`
or :c:func:`PyArg_ParseTupleAndKeywords` where it supports different
types for the same argument, or if the function uses something besides
:c:func:`!PyArg_Parse*` functions to parse its arguments, it probably
isn't suitable for conversion to Argument Clinic.  Argument Clinic
doesn't support generic functions or polymorphic parameters.

Next, add the following boilerplate above the function,
creating our input block::

    /*[clinic input]
    [clinic start generated code]*/

Cut the docstring and paste it in between the ``[clinic]`` lines,
removing all the junk that makes it a properly quoted C string.
When you're done you should have just the text, based at the left
margin, with no line wider than 80 characters.
Argument Clinic will preserve indents inside the docstring.

If the old docstring had a first line that looked like a function
signature, throw that line away; The docstring doesn't need it anymore ---
when you use :py:func:`help` on your builtin in the future,
the first line will be built automatically based on the function's signature.

Example docstring summary line::

   /*[clinic input]
   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

If your docstring doesn't have a "summary" line, Argument Clinic will
complain, so let's make sure it has one.  The "summary" line should
be a paragraph consisting of a single 80-column line
at the beginning of the docstring.
(See :pep:`257` regarding docstring conventions.)

Our example docstring consists solely of a summary line, so the sample
code doesn't have to change for this step.

Now, above the docstring, enter the name of the function, followed
by a blank line.  This should be the Python name of the function,
and should be the full dotted path to the function ---
it should start with the name of the module,
include any sub-modules, and if the function is a method on
a class it should include the class name too.

In our example, :mod:`!_pickle` is the module, :py:class:`!Pickler` is the class,
and :py:meth:`!dump` is the method, so the name becomes
:py:meth:`!_pickle.Pickler.dump`::

   /*[clinic input]
   _pickle.Pickler.dump

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

If this is the first time that module or class has been used with Argument
Clinic in this C file,
you must declare the module and/or class.  Proper Argument Clinic hygiene
prefers declaring these in a separate block somewhere near the
top of the C file, in the same way that include files and statics go at
the top.
In our sample code we'll just show the two blocks next to each other.

The name of the class and module should be the same as the one
seen by Python.  Check the name defined in the :c:type:`PyModuleDef`
or :c:type:`PyTypeObject` as appropriate.

When you declare a class, you must also specify two aspects of its type
in C: the type declaration you'd use for a pointer to an instance of
this class, and a pointer to the :c:type:`!PyTypeObject` for this class::

   /*[clinic input]
   module _pickle
   class _pickle.Pickler "PicklerObject *" "&Pickler_Type"
   [clinic start generated code]*/

   /*[clinic input]
   _pickle.Pickler.dump

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

Declare each of the parameters to the function.  Each parameter
should get its own line.  All the parameter lines should be
indented from the function name and the docstring.
The general form of these parameter lines is as follows:

.. code-block:: none

    name_of_parameter: converter

If the parameter has a default value, add that after the
converter:

.. code-block:: none

    name_of_parameter: converter = default_value

Argument Clinic's support for "default values" is quite sophisticated;
see :ref:`clinic-howto-default-values` for more information.

Next, add a blank line below the parameters.

What's a "converter"?
It establishes both the type of the variable used in C,
and the method to convert the Python value into a C value at runtime.
For now you're going to use what's called a "legacy converter" ---
a convenience syntax intended to make porting old code into Argument
Clinic easier.

For each parameter, copy the "format unit" for that
parameter from the :c:func:`PyArg_Parse` format argument and
specify *that* as its converter, as a quoted string.
The "format unit" is the formal name for the one-to-three
character substring of the *format* parameter that tells
the argument parsing function what the type of the variable
is and how to convert it.
For more on format units please see :ref:`arg-parsing`.

For multicharacter format units like ``z#``,
use the entire two-or-three character string.

Sample::

   /*[clinic input]
   module _pickle
   class _pickle.Pickler "PicklerObject *" "&Pickler_Type"
   [clinic start generated code]*/

   /*[clinic input]
   _pickle.Pickler.dump

       obj: 'O'

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

If your function has ``|`` in the format string,
meaning some parameters have default values, you can ignore it.
Argument Clinic infers which parameters are optional
based on whether or not they have default values.

If your function has ``$`` in the format string,
meaning it takes keyword-only arguments,
specify ``*`` on a line by itself before the first keyword-only argument,
indented the same as the parameter lines.

:py:meth:`!_pickle.Pickler.dump` has neither, so our sample is unchanged.

Next, if the existing C function calls :c:func:`PyArg_ParseTuple`
(as opposed to :c:func:`PyArg_ParseTupleAndKeywords`), then all its
arguments are positional-only.

To mark parameters as positional-only in Argument Clinic,
add a ``/`` on a line by itself after the last positional-only parameter,
indented the same as the parameter lines.

Sample::

   /*[clinic input]
   module _pickle
   class _pickle.Pickler "PicklerObject *" "&Pickler_Type"
   [clinic start generated code]*/

   /*[clinic input]
   _pickle.Pickler.dump

       obj: 'O'
       /

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

It can be helpful to write a per-parameter docstring for each parameter.
Since per-parameter docstrings are optional,
you can skip this step if you prefer.

Nevertheless, here's how to add a per-parameter docstring.
The first line of the per-parameter docstring
must be indented further than the parameter definition.
The left margin of this first line establishes
the left margin for the whole per-parameter docstring;
all the text you write will be outdented by this amount.
You can write as much text as you like, across multiple lines if you wish.

Sample::

   /*[clinic input]
   module _pickle
   class _pickle.Pickler "PicklerObject *" "&Pickler_Type"
   [clinic start generated code]*/

   /*[clinic input]
   _pickle.Pickler.dump

       obj: 'O'
           The object to be pickled.
       /

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

Save and close the file, then run ``Tools/clinic/clinic.py`` on it.
With luck everything worked---your block now has output,
and a :file:`.c.h` file has been generated!
Reload the file in your text editor to see the generated code::

   /*[clinic input]
   _pickle.Pickler.dump

       obj: 'O'
           The object to be pickled.
       /

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

   static PyObject *
   _pickle_Pickler_dump(PicklerObject *self, PyObject *obj)
   /*[clinic end generated code: output=87ecad1261e02ac7 input=552eb1c0f52260d9]*/

Obviously, if Argument Clinic didn't produce any output,
it's because it found an error in your input.
Keep fixing your errors and retrying until Argument Clinic processes your file
without complaint.

For readability, most of the glue code has been generated to a :file:`.c.h`
file.  You'll need to include that in your original :file:`.c` file,
typically right after the clinic module block::

   #include "clinic/_pickle.c.h"

Double-check that the argument-parsing code Argument Clinic generated
looks basically the same as the existing code.

First, ensure both places use the same argument-parsing function.
The existing code must call either
:c:func:`PyArg_ParseTuple` or :c:func:`PyArg_ParseTupleAndKeywords`;
ensure that the code generated by Argument Clinic calls the
*exact* same function.

Second, the format string passed in to :c:func:`!PyArg_ParseTuple` or
:c:func:`!PyArg_ParseTupleAndKeywords` should be *exactly* the same
as the hand-written one in the existing function,
up to the colon or semi-colon.

Argument Clinic always generates its format strings
with a ``:`` followed by the name of the function.
If the existing code's format string ends with ``;``,
to provide usage help, this change is harmless --- don't worry about it.

Third, for parameters whose format units require two arguments,
like a length variable, an encoding string, or a pointer
to a conversion function, ensure that the second argument is
*exactly* the same between the two invocations.

Fourth, inside the output portion of the block,
you'll find a preprocessor macro defining the appropriate static
:c:type:`PyMethodDef` structure for this builtin::

   #define __PICKLE_PICKLER_DUMP_METHODDEF    \
   {"dump", (PyCFunction)__pickle_Pickler_dump, METH_O, __pickle_Pickler_dump__doc__},

This static structure should be *exactly* the same as the existing static
:c:type:`!PyMethodDef` structure for this builtin.

If any of these items differ in *any way*,
adjust your Argument Clinic function specification and rerun
``Tools/clinic/clinic.py`` until they *are* the same.

Notice that the last line of its output is the declaration
of your "impl" function.  This is where the builtin's implementation goes.
Delete the existing prototype of the function you're modifying, but leave
the opening curly brace.  Now delete its argument parsing code and the
declarations of all the variables it dumps the arguments into.
Notice how the Python arguments are now arguments to this impl function;
if the implementation used different names for these variables, fix it.

Let's reiterate, just because it's kind of weird.
Your code should now look like this::

   static return_type
   your_function_impl(...)
   /*[clinic end generated code: input=..., output=...]*/
   {
   ...

Argument Clinic generated the checksum line and the function prototype just
above it.  You should write the opening and closing curly braces for the
function, and the implementation inside.

Sample::

   /*[clinic input]
   module _pickle
   class _pickle.Pickler "PicklerObject *" "&Pickler_Type"
   [clinic start generated code]*/
   /*[clinic end generated code: checksum=da39a3ee5e6b4b0d3255bfef95601890afd80709]*/

   /*[clinic input]
   _pickle.Pickler.dump

       obj: 'O'
           The object to be pickled.
       /

   Write a pickled representation of obj to the open file.
   [clinic start generated code]*/

   PyDoc_STRVAR(__pickle_Pickler_dump__doc__,
   "Write a pickled representation of obj to the open file.\n"
   "\n"
   ...
   static PyObject *
   _pickle_Pickler_dump_impl(PicklerObject *self, PyObject *obj)
   /*[clinic end generated code: checksum=3bd30745bf206a48f8b576a1da3d90f55a0a4187]*/
   {
       /* Check whether the Pickler was initialized correctly (issue3664).
          Developers often forget to call __init__() in their subclasses, which
          would trigger a segfault without this check. */
       if (self->write == NULL) {
           PyErr_Format(PicklingError,
                        "Pickler.__init__() was not called by %s.__init__()",
                        Py_TYPE(self)->tp_name);
           return NULL;
       }

       if (_Pickler_ClearBuffer(self) < 0) {
           return NULL;
       }

       ...

Remember the macro with the :c:type:`PyMethodDef` structure for this function?
Find the existing :c:type:`!PyMethodDef` structure for this
function and replace it with a reference to the macro.  If the builtin
is at module scope, this will probably be very near the end of the file;
if the builtin is a class method, this will probably be below but relatively
near to the implementation.

Note that the body of the macro contains a trailing comma; when you
replace the existing static :c:type:`!PyMethodDef` structure with the macro,
*don't* add a comma to the end.

Sample::

   static struct PyMethodDef Pickler_methods[] = {
       __PICKLE_PICKLER_DUMP_METHODDEF
       __PICKLE_PICKLER_CLEAR_MEMO_METHODDEF
       {NULL, NULL}                /* sentinel */
   };

Argument Clinic may generate new instances of ``_Py_ID``. For example::

   &_Py_ID(new_unique_py_id)

If it does, you'll have to run ``make regen-global-objects``
to regenerate the list of precompiled identifiers at this point.

Finally, compile, then run the relevant portions of the regression-test suite.
This change should not introduce any new compile-time warnings or errors,
and there should be no externally visible change to Python's behavior,
except for one difference: :py:func:`inspect.signature` run on your function
should now provide a valid signature!

Congratulations, you've ported your first function to work with Argument Clinic!


.. _clinic-howtos:

How-to guides
=============


How to rename C functions and variables generated by Argument Clinic
--------------------------------------------------------------------

Argument Clinic automatically names the functions it generates for you.
Occasionally this may cause a problem, if the generated name collides with
the name of an existing C function.  There's an easy solution: override the names
used for the C functions.  Just add the keyword ``"as"``
to your function declaration line, followed by the function name you wish to use.
Argument Clinic will use that function name for the base (generated) function,
then add ``"_impl"`` to the end and use that for the name of the impl function.

For example, if we wanted to rename the C function names generated for
:py:meth:`pickle.Pickler.dump`, it'd look like this::

    /*[clinic input]
    pickle.Pickler.dump as pickler_dumper

    ...

The base function would now be named :c:func:`!pickler_dumper`,
and the impl function would now be named :c:func:`!pickler_dumper_impl`.


Similarly, you may have a problem where you want to give a parameter
a specific Python name, but that name may be inconvenient in C.  Argument
Clinic allows you to give a parameter different names in Python and in C,
using the same ``"as"`` syntax::

    /*[clinic input]
    pickle.Pickler.dump

        obj: object
        file as file_obj: object
        protocol: object = NULL
        *
        fix_imports: bool = True

Here, the name used in Python (in the signature and the ``keywords``
array) would be *file*, but the C variable would be named ``file_obj``.

You can use this to rename the *self* parameter too!


How to convert functions using ``PyArg_UnpackTuple``
----------------------------------------------------

To convert a function parsing its arguments with :c:func:`PyArg_UnpackTuple`,
simply write out all the arguments, specifying each as an ``object``.  You
may specify the *type* argument to cast the type as appropriate.  All
arguments should be marked positional-only (add a ``/`` on a line by itself
after the last argument).

Currently the generated code will use :c:func:`PyArg_ParseTuple`, but this
will change soon.


How to use optional groups
--------------------------

Some legacy functions have a tricky approach to parsing their arguments:
they count the number of positional arguments, then use a ``switch`` statement
to call one of several different :c:func:`PyArg_ParseTuple` calls depending on
how many positional arguments there are.  (These functions cannot accept
keyword-only arguments.)  This approach was used to simulate optional
arguments back before :c:func:`PyArg_ParseTupleAndKeywords` was created.

While functions using this approach can often be converted to
use :c:func:`!PyArg_ParseTupleAndKeywords`, optional arguments, and default values,
it's not always possible.  Some of these legacy functions have
behaviors :c:func:`!PyArg_ParseTupleAndKeywords` doesn't directly support.
The most obvious example is the builtin function :py:func:`!range`, which has
an optional argument on the *left* side of its required argument!
Another example is :py:meth:`curses.window.addch`, which has a group of two
arguments that must always be specified together.  (The arguments are
called *x* and *y*; if you call the function passing in *x*,
you must also pass in *y* — and if you don't pass in *x* you may not
pass in *y* either.)

In any case, the goal of Argument Clinic is to support argument parsing
for all existing CPython builtins without changing their semantics.
Therefore Argument Clinic supports
this alternate approach to parsing, using what are called *optional groups*.
Optional groups are groups of arguments that must all be passed in together.
They can be to the left or the right of the required arguments.  They
can *only* be used with positional-only parameters.

.. note:: Optional groups are *only* intended for use when converting
          functions that make multiple calls to :c:func:`PyArg_ParseTuple`!
          Functions that use *any* other approach for parsing arguments
          should *almost never* be converted to Argument Clinic using
          optional groups.  Functions using optional groups currently
          cannot have accurate signatures in Python, because Python just
          doesn't understand the concept.  Please avoid using optional
          groups wherever possible.

To specify an optional group, add a ``[`` on a line by itself before
the parameters you wish to group together, and a ``]`` on a line by itself
after these parameters.  As an example, here's how :py:meth:`curses.window.addch`
uses optional groups to make the first two parameters and the last
parameter optional::

    /*[clinic input]

    curses.window.addch

        [
        x: int
          X-coordinate.
        y: int
          Y-coordinate.
        ]

        ch: object
          Character to add.

        [
        attr: long
          Attributes for the character.
        ]
        /

    ...


Notes:

* For every optional group, one additional parameter will be passed into the
  impl function representing the group.  The parameter will be an int named
  ``group_{direction}_{number}``,
  where ``{direction}`` is either ``right`` or ``left`` depending on whether the group
  is before or after the required parameters, and ``{number}`` is a monotonically
  increasing number (starting at 1) indicating how far away the group is from
  the required parameters.  When the impl is called, this parameter will be set
  to zero if this group was unused, and set to non-zero if this group was used.
  (By used or unused, I mean whether or not the parameters received arguments
  in this invocation.)

* If there are no required arguments, the optional groups will behave
  as if they're to the right of the required arguments.

* In the case of ambiguity, the argument parsing code
  favors parameters on the left (before the required parameters).

* Optional groups can only contain positional-only parameters.

* Optional groups are *only* intended for legacy code.  Please do not
  use optional groups for new code.


How to use real Argument Clinic converters, instead of "legacy converters"
--------------------------------------------------------------------------

To save time, and to minimize how much you need to learn
to achieve your first port to Argument Clinic, the walkthrough above tells
you to use "legacy converters".  "Legacy converters" are a convenience,
designed explicitly to make porting existing code to Argument Clinic
easier.  And to be clear, their use is acceptable when porting code for
Python 3.4.

However, in the long term we probably want all our blocks to
use Argument Clinic's real syntax for converters.  Why?  A couple
reasons:

* The proper converters are far easier to read and clearer in their intent.
* There are some format units that are unsupported as "legacy converters",
  because they require arguments, and the legacy converter syntax doesn't
  support specifying arguments.
* In the future we may have a new argument parsing library that isn't
  restricted to what :c:func:`PyArg_ParseTuple` supports; this flexibility
  won't be available to parameters using legacy converters.

Therefore, if you don't mind a little extra effort, please use the normal
converters instead of legacy converters.

In a nutshell, the syntax for Argument Clinic (non-legacy) converters
looks like a Python function call.  However, if there are no explicit
arguments to the function (all functions take their default values),
you may omit the parentheses.  Thus ``bool`` and ``bool()`` are exactly
the same converters.

All arguments to Argument Clinic converters are keyword-only.
All Argument Clinic converters accept the following arguments:

*c_default*
   The default value for this parameter when defined in C.
   Specifically, this will be the initializer for the variable declared
   in the "parse function".  See :ref:`the section on default values <default_values>`
   for how to use this.
   Specified as a string.

*annotation*
   The annotation value for this parameter.  Not currently supported,
   because :pep:`8` mandates that the Python library may not use
   annotations.

*unused*
   Wrap the argument with :c:macro:`Py_UNUSED` in the impl function signature.

In addition, some converters accept additional arguments.  Here is a list
of these arguments, along with their meanings:

*accept*
   A set of Python types (and possibly pseudo-types);
   this restricts the allowable Python argument to values of these types.
   (This is not a general-purpose facility; as a rule it only supports
   specific lists of types as shown in the legacy converter table.)

   To accept ``None``, add ``NoneType`` to this set.

*bitwise*
   Only supported for unsigned integers.  The native integer value of this
   Python argument will be written to the parameter without any range checking,
   even for negative values.

*converter*
   Only supported by the ``object`` converter.  Specifies the name of a
   :ref:`C "converter function" <o_ampersand>`
   to use to convert this object to a native type.

*encoding*
   Only supported for strings.  Specifies the encoding to use when converting
   this string from a Python str (Unicode) value into a C ``char *`` value.


*subclass_of*
   Only supported for the ``object`` converter.  Requires that the Python
   value be a subclass of a Python type, as expressed in C.

*type*
   Only supported for the ``object`` and ``self`` converters.  Specifies
   the C type that will be used to declare the variable.  Default value is
   ``"PyObject *"``.

*zeroes*
   Only supported for strings.  If true, embedded NUL bytes (``'\\0'``) are
   permitted inside the value.  The length of the string will be passed in
   to the impl function, just after the string parameter, as a parameter named
   ``<parameter_name>_length``.

Please note, not every possible combination of arguments will work.
Usually these arguments are implemented by specific :c:func:`PyArg_ParseTuple`
*format units*, with specific behavior.  For example, currently you cannot
call ``unsigned_short`` without also specifying ``bitwise=True``.
Although it's perfectly reasonable to think this would work, these semantics don't
map to any existing format unit.  So Argument Clinic doesn't support it.  (Or, at
least, not yet.)

Below is a table showing the mapping of legacy converters into real
Argument Clinic converters.  On the left is the legacy converter,
on the right is the text you'd replace it with.

=========   =================================================================================
``'B'``     ``unsigned_char(bitwise=True)``
``'b'``     ``unsigned_char``
``'c'``     ``char``
``'C'``     ``int(accept={str})``
``'d'``     ``double``
``'D'``     ``Py_complex``
``'es'``    ``str(encoding='name_of_encoding')``
``'es#'``   ``str(encoding='name_of_encoding', zeroes=True)``
``'et'``    ``str(encoding='name_of_encoding', accept={bytes, bytearray, str})``
``'et#'``   ``str(encoding='name_of_encoding', accept={bytes, bytearray, str}, zeroes=True)``
``'f'``     ``float``
``'h'``     ``short``
``'H'``     ``unsigned_short(bitwise=True)``
``'i'``     ``int``
``'I'``     ``unsigned_int(bitwise=True)``
``'k'``     ``unsigned_long(bitwise=True)``
``'K'``     ``unsigned_long_long(bitwise=True)``
``'l'``     ``long``
``'L'``     ``long long``
``'n'``     ``Py_ssize_t``
``'O'``     ``object``
``'O!'``    ``object(subclass_of='&PySomething_Type')``
``'O&'``    ``object(converter='name_of_c_function')``
``'p'``     ``bool``
``'S'``     ``PyBytesObject``
``'s'``     ``str``
``'s#'``    ``str(zeroes=True)``
``'s*'``    ``Py_buffer(accept={buffer, str})``
``'U'``     ``unicode``
``'u'``     ``wchar_t``
``'u#'``    ``wchar_t(zeroes=True)``
``'w*'``    ``Py_buffer(accept={rwbuffer})``
``'Y'``     ``PyByteArrayObject``
``'y'``     ``str(accept={bytes})``
``'y#'``    ``str(accept={robuffer}, zeroes=True)``
``'y*'``    ``Py_buffer``
``'Z'``     ``wchar_t(accept={str, NoneType})``
``'Z#'``    ``wchar_t(accept={str, NoneType}, zeroes=True)``
``'z'``     ``str(accept={str, NoneType})``
``'z#'``    ``str(accept={str, NoneType}, zeroes=True)``
``'z*'``    ``Py_buffer(accept={buffer, str, NoneType})``
=========   =================================================================================

As an example, here's our sample ``pickle.Pickler.dump`` using the proper
converter::

    /*[clinic input]
    pickle.Pickler.dump

        obj: object
            The object to be pickled.
        /

    Write a pickled representation of obj to the open file.
    [clinic start generated code]*/

One advantage of real converters is that they're more flexible than legacy
converters.  For example, the ``unsigned_int`` converter (and all the
``unsigned_`` converters) can be specified without ``bitwise=True``.  Their
default behavior performs range checking on the value, and they won't accept
negative numbers.  You just can't do that with a legacy converter!

Argument Clinic will show you all the converters it has
available.  For each converter it'll show you all the parameters
it accepts, along with the default value for each parameter.
Just run ``Tools/clinic/clinic.py --converters`` to see the full list.


How to use the ``Py_buffer`` converter
--------------------------------------

When using the ``Py_buffer`` converter
(or the ``'s*'``, ``'w*'``, ``'*y'``, or ``'z*'`` legacy converters),
you *must* not call :c:func:`PyBuffer_Release` on the provided buffer.
Argument Clinic generates code that does it for you (in the parsing function).


.. _clinic-howto-advanced-converters:

How to use advanced converters
------------------------------

Remember those format units you skipped for your first
time because they were advanced?  Here's how to handle those too.

The trick is, all those format units take arguments—either
conversion functions, or types, or strings specifying an encoding.
(But "legacy converters" don't support arguments.  That's why we
skipped them for your first function.)  The argument you specified
to the format unit is now an argument to the converter; this
argument is either *converter* (for ``O&``), *subclass_of* (for ``O!``),
or *encoding* (for all the format units that start with ``e``).

When using *subclass_of*, you may also want to use the other
custom argument for ``object()``: *type*, which lets you set the type
actually used for the parameter.  For example, if you want to ensure
that the object is a subclass of :c:var:`PyUnicode_Type`, you probably want
to use the converter ``object(type='PyUnicodeObject *', subclass_of='&PyUnicode_Type')``.

One possible problem with using Argument Clinic: it takes away some possible
flexibility for the format units starting with ``e``.  When writing a
:c:func:`!PyArg_Parse*` call by hand, you could theoretically decide at runtime what
encoding string to pass to that call.   But now this string must
be hard-coded at Argument-Clinic-preprocessing-time.  This limitation is deliberate;
it made supporting this format unit much easier, and may allow for future optimizations.
This restriction doesn't seem unreasonable; CPython itself always passes in static
hard-coded encoding strings for parameters whose format units start with ``e``.


.. _clinic-howto-default-values:
.. _default_values:

How to assign default values to parameter
-----------------------------------------

Default values for parameters can be any of a number of values.
At their simplest, they can be string, int, or float literals:

.. code-block:: none

    foo: str = "abc"
    bar: int = 123
    bat: float = 45.6

They can also use any of Python's built-in constants:

.. code-block:: none

    yep:  bool = True
    nope: bool = False
    nada: object = None

There's also special support for a default value of ``NULL``, and
for simple expressions, documented in the following sections.


The ``NULL`` default value
^^^^^^^^^^^^^^^^^^^^^^^^^^

For string and object parameters, you can set them to ``None`` to indicate
that there's no default.  However, that means the C variable will be
initialized to ``Py_None``.  For convenience's sakes, there's a special
value called ``NULL`` for just this reason: from Python's perspective it
behaves like a default value of ``None``, but the C variable is initialized
with ``NULL``.


Symbolic default values
^^^^^^^^^^^^^^^^^^^^^^^

The default value you provide for a parameter can't be any arbitrary
expression.  Currently the following are explicitly supported:

* Numeric constants (integer and float)
* String constants
* ``True``, ``False``, and ``None``
* Simple symbolic constants like :py:data:`sys.maxsize`, which must
  start with the name of the module

(In the future, this may need to get even more elaborate,
to allow full expressions like ``CONSTANT - 1``.)


Expressions as default values
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The default value for a parameter can be more than just a literal value.
It can be an entire expression, using math operators and looking up attributes
on objects.  However, this support isn't exactly simple, because of some
non-obvious semantics.

Consider the following example:

.. code-block:: none

    foo: Py_ssize_t = sys.maxsize - 1

:py:data:`sys.maxsize` can have different values on different platforms.  Therefore
Argument Clinic can't simply evaluate that expression locally and hard-code it
in C.  So it stores the default in such a way that it will get evaluated at
runtime, when the user asks for the function's signature.

What namespace is available when the expression is evaluated?  It's evaluated
in the context of the module the builtin came from.  So, if your module has an
attribute called :py:attr:`!max_widgets`, you may simply use it:

.. code-block:: none

    foo: Py_ssize_t = max_widgets

If the symbol isn't found in the current module, it fails over to looking in
:py:data:`sys.modules`.  That's how it can find :py:data:`sys.maxsize` for example.
(Since you don't know in advance what modules the user will load into their interpreter,
it's best to restrict yourself to modules that are preloaded by Python itself.)

Evaluating default values only at runtime means Argument Clinic can't compute
the correct equivalent C default value.  So you need to tell it explicitly.
When you use an expression, you must also specify the equivalent expression
in C, using the *c_default* parameter to the converter:

.. code-block:: none

    foo: Py_ssize_t(c_default="PY_SSIZE_T_MAX - 1") = sys.maxsize - 1

Another complication: Argument Clinic can't know in advance whether or not the
expression you supply is valid.  It parses it to make sure it looks legal, but
it can't *actually* know.  You must be very careful when using expressions to
specify values that are guaranteed to be valid at runtime!

Finally, because expressions must be representable as static C values, there
are many restrictions on legal expressions.  Here's a list of Python features
you're not permitted to use:

* Function calls.
* Inline if statements (``3 if foo else 5``).
* Automatic sequence unpacking (``*[1, 2, 3]``).
* List/set/dict comprehensions and generator expressions.
* Tuple/list/set/dict literals.


.. _clinic-howto-return-converters:

How to use return converters
----------------------------

By default, the impl function Argument Clinic generates for you returns
:c:type:`PyObject * <PyObject>`.
But your C function often computes some C type,
then converts it into the :c:type:`!PyObject *`
at the last moment.  Argument Clinic handles converting your inputs from Python types
into native C types—why not have it convert your return value from a native C type
into a Python type too?

That's what a "return converter" does.  It changes your impl function to return
some C type, then adds code to the generated (non-impl) function to handle converting
that value into the appropriate :c:type:`!PyObject *`.

The syntax for return converters is similar to that of parameter converters.
You specify the return converter like it was a return annotation on the
function itself, using ``->`` notation.

For example:

.. code-block:: c

   /*[clinic input]
   add -> int

       a: int
       b: int
       /

   [clinic start generated code]*/

Return converters behave much the same as parameter converters;
they take arguments, the arguments are all keyword-only, and if you're not changing
any of the default arguments you can omit the parentheses.

(If you use both ``"as"`` *and* a return converter for your function,
the ``"as"`` should come before the return converter.)

There's one additional complication when using return converters: how do you
indicate an error has occurred?  Normally, a function returns a valid (non-``NULL``)
pointer for success, and ``NULL`` for failure.  But if you use an integer return converter,
all integers are valid.  How can Argument Clinic detect an error?  Its solution: each return
converter implicitly looks for a special value that indicates an error.  If you return
that value, and an error has been set (c:func:`PyErr_Occurred` returns a true
value), then the generated code will propagate the error.  Otherwise it will
encode the value you return like normal.

Currently Argument Clinic supports only a few return converters:

.. code-block:: none

    bool
    double
    float
    int
    long
    Py_ssize_t
    size_t
    unsigned int
    unsigned long

None of these take parameters.
For all of these, return ``-1`` to indicate error.

To see all the return converters Argument Clinic supports, along with
their parameters (if any),
just run ``Tools/clinic/clinic.py --converters`` for the full list.


How to clone existing functions
-------------------------------

If you have a number of functions that look similar, you may be able to
use Clinic's "clone" feature.  When you clone an existing function,
you reuse:

* its parameters, including

  * their names,

  * their converters, with all parameters,

  * their default values,

  * their per-parameter docstrings,

  * their *kind* (whether they're positional only,
    positional or keyword, or keyword only), and

* its return converter.

The only thing not copied from the original function is its docstring;
the syntax allows you to specify a new docstring.

Here's the syntax for cloning a function::

    /*[clinic input]
    module.class.new_function [as c_basename] = module.class.existing_function

    Docstring for new_function goes here.
    [clinic start generated code]*/

(The functions can be in different modules or classes.  I wrote
``module.class`` in the sample just to illustrate that you must
use the full path to *both* functions.)

Sorry, there's no syntax for partially cloning a function, or cloning a function
then modifying it.  Cloning is an all-or nothing proposition.

Also, the function you are cloning from must have been previously defined
in the current file.


How to call Python code
-----------------------

The rest of the advanced topics require you to write Python code
which lives inside your C file and modifies Argument Clinic's
runtime state.  This is simple: you simply define a Python block.

A Python block uses different delimiter lines than an Argument
Clinic function block.  It looks like this::

    /*[python input]
    # python code goes here
    [python start generated code]*/

All the code inside the Python block is executed at the
time it's parsed.  All text written to stdout inside the block
is redirected into the "output" after the block.

As an example, here's a Python block that adds a static integer
variable to the C code::

    /*[python input]
    print('static int __ignored_unused_variable__ = 0;')
    [python start generated code]*/
    static int __ignored_unused_variable__ = 0;
    /*[python checksum:...]*/


.. _clinic-howto-self-converter:

How to use the "self converter"
-------------------------------

Argument Clinic automatically adds a "self" parameter for you
using a default converter.  It automatically sets the ``type``
of this parameter to the "pointer to an instance" you specified
when you declared the type.  However, you can override
Argument Clinic's converter and specify one yourself.
Just add your own *self* parameter as the first parameter in a
block, and ensure that its converter is an instance of
:class:`!self_converter` or a subclass thereof.

What's the point?  This lets you override the type of ``self``,
or give it a different default name.

How do you specify the custom type you want to cast ``self`` to?
If you only have one or two functions with the same type for ``self``,
you can directly use Argument Clinic's existing ``self`` converter,
passing in the type you want to use as the *type* parameter::

    /*[clinic input]

    _pickle.Pickler.dump

      self: self(type="PicklerObject *")
      obj: object
      /

    Write a pickled representation of the given object to the open file.
    [clinic start generated code]*/

On the other hand, if you have a lot of functions that will use the same
type for ``self``, it's best to create your own converter, subclassing
:class:`!self_converter` but overwriting the :py:attr:`!type` member::

    /*[python input]
    class PicklerObject_converter(self_converter):
        type = "PicklerObject *"
    [python start generated code]*/

    /*[clinic input]

    _pickle.Pickler.dump

      self: PicklerObject
      obj: object
      /

    Write a pickled representation of the given object to the open file.
    [clinic start generated code]*/


How to use the "defining class" converter
-----------------------------------------

Argument Clinic facilitates gaining access to the defining class of a method.
This is useful for :ref:`heap type <heap-types>` methods that need to fetch
module level state.  Use :c:func:`PyType_FromModuleAndSpec` to associate a new
heap type with a module.  You can now use :c:func:`PyType_GetModuleState` on
the defining class to fetch the module state, for example from a module method.

Example from :cpy-file:`Modules/zlibmodule.c`.
First, ``defining_class`` is added to the clinic input::

    /*[clinic input]
    zlib.Compress.compress

      cls: defining_class
      data: Py_buffer
        Binary data to be compressed.
      /


After running the Argument Clinic tool, the following function signature is
generated::

    /*[clinic start generated code]*/
    static PyObject *
    zlib_Compress_compress_impl(compobject *self, PyTypeObject *cls,
                                Py_buffer *data)
    /*[clinic end generated code: output=6731b3f0ff357ca6 input=04d00f65ab01d260]*/


The following code can now use ``PyType_GetModuleState(cls)`` to fetch the
module state::

    zlibstate *state = PyType_GetModuleState(cls);


Each method may only have one argument using this converter, and it must appear
after ``self``, or, if ``self`` is not used, as the first argument.  The argument
will be of type ``PyTypeObject *``.  The argument will not appear in the
:py:attr:`!__text_signature__`.

The ``defining_class`` converter is not compatible with :py:meth:`!__init__`
and :py:meth:`!__new__` methods, which cannot use the :c:macro:`METH_METHOD`
convention.

It is not possible to use ``defining_class`` with slot methods.  In order to
fetch the module state from such methods, use :c:func:`PyType_GetModuleByDef`
to look up the module and then :c:func:`PyModule_GetState` to fetch the module
state.  Example from the ``setattro`` slot method in
:cpy-file:`Modules/_threadmodule.c`::

    static int
    local_setattro(localobject *self, PyObject *name, PyObject *v)
    {
        PyObject *module = PyType_GetModuleByDef(Py_TYPE(self), &thread_module);
        thread_module_state *state = get_thread_state(module);
        ...
    }


See also :pep:`573`.


.. _clinic-howto-custom-converter:

How to write a custom converter
-------------------------------

A converter is a Python class that inherits from :py:class:`CConverter`.
The main purpose of a custom converter, is for parameters parsed with
the ``O&`` format unit --- parsing such a parameter means calling
a :c:func:`PyArg_ParseTuple` "converter function".

Your converter class should be named :samp:`{ConverterName}_converter`.
By following this convention, your converter class will be automatically
registered with Argument Clinic, with its *converter name* being the name of
your converter class with the ``_converter`` suffix stripped off.

Instead of subclassing :py:meth:`!CConverter.__init__`,
write a :py:meth:`!converter_init` method.
:py:meth:`!converter_init` always accepts a *self* parameter.
After *self*, all additional parameters **must** be keyword-only.
Any arguments passed to the converter in Argument Clinic
will be passed along to your :py:meth:`!converter_init` method.
See :py:class:`CConverter` for a list of members you may wish to specify in
your subclass.

Here's the simplest example of a custom converter, from :cpy-file:`Modules/zlibmodule.c`::

    /*[python input]

    class ssize_t_converter(CConverter):
        type = 'Py_ssize_t'
        converter = 'ssize_t_converter'

    [python start generated code]*/
    /*[python end generated code: output=da39a3ee5e6b4b0d input=35521e4e733823c7]*/

This block adds a converter named ``ssize_t`` to Argument Clinic.
Parameters declared as ``ssize_t`` will be declared with type :c:type:`Py_ssize_t`,
and will be parsed by the ``'O&'`` format unit,
which will call the :c:func:`!ssize_t_converter` converter C function.
``ssize_t`` variables automatically support default values.

More sophisticated custom converters can insert custom C code to
handle initialization and cleanup.
You can see more examples of custom converters in the CPython
source tree; grep the C files for the string ``CConverter``.


How to write a custom return converter
--------------------------------------

Writing a custom return converter is much like writing
a custom converter.  Except it's somewhat simpler, because return
converters are themselves much simpler.

Return converters must subclass :py:class:`!CReturnConverter`.
There are no examples yet of custom return converters,
because they are not widely used yet.  If you wish to
write your own return converter, please read :cpy-file:`Tools/clinic/clinic.py`,
specifically the implementation of :py:class:`!CReturnConverter` and
all its subclasses.


How to convert ``METH_O`` and ``METH_NOARGS`` functions
-------------------------------------------------------

To convert a function using :c:macro:`METH_O`, make sure the function's
single argument is using the ``object`` converter, and mark the
arguments as positional-only::

    /*[clinic input]
    meth_o_sample

         argument: object
         /
    [clinic start generated code]*/


To convert a function using :c:macro:`METH_NOARGS`, just don't specify
any arguments.

You can still use a self converter, a return converter, and specify
a *type* argument to the object converter for :c:macro:`METH_O`.


How to convert ``tp_new`` and ``tp_init`` functions
---------------------------------------------------

You can convert :c:member:`~PyTypeObject.tp_new` and
:c:member:`~PyTypeObject.tp_init` functions.
Just name them ``__new__`` or ``__init__`` as appropriate.  Notes:

* The function name generated for ``__new__`` doesn't end in ``__new__``
  like it would by default.  It's just the name of the class, converted
  into a valid C identifier.

* No :c:type:`PyMethodDef` ``#define`` is generated for these functions.

* ``__init__`` functions return ``int``, not ``PyObject *``.

* Use the docstring as the class docstring.

* Although ``__new__`` and ``__init__`` functions must always
  accept both the ``args`` and ``kwargs`` objects, when converting
  you may specify any signature for these functions that you like.
  (If your function doesn't support keywords, the parsing function
  generated will throw an exception if it receives any.)


How to change and redirect Clinic's output
------------------------------------------

It can be inconvenient to have Clinic's output interspersed with
your conventional hand-edited C code.  Luckily, Clinic is configurable:
you can buffer up its output for printing later (or earlier!), or write
its output to a separate file.  You can also add a prefix or suffix to
every line of Clinic's generated output.

While changing Clinic's output in this manner can be a boon to readability,
it may result in Clinic code using types before they are defined, or
your code attempting to use Clinic-generated code before it is defined.
These problems can be easily solved by rearranging the declarations in your file,
or moving where Clinic's generated code goes.  (This is why the default behavior
of Clinic is to output everything into the current block; while many people
consider this hampers readability, it will never require rearranging your
code to fix definition-before-use problems.)

Let's start with defining some terminology:

*field*
  A field, in this context, is a subsection of Clinic's output.
  For example, the ``#define`` for the :c:type:`PyMethodDef` structure
  is a field, called ``methoddef_define``.  Clinic has seven
  different fields it can output per function definition:

  .. code-block:: none

      docstring_prototype
      docstring_definition
      methoddef_define
      impl_prototype
      parser_prototype
      parser_definition
      impl_definition

  All the names are of the form ``"<a>_<b>"``,
  where ``"<a>"`` is the semantic object represented (the parsing function,
  the impl function, the docstring, or the methoddef structure) and ``"<b>"``
  represents what kind of statement the field is.  Field names that end in
  ``"_prototype"``
  represent forward declarations of that thing, without the actual body/data
  of the thing; field names that end in ``"_definition"`` represent the actual
  definition of the thing, with the body/data of the thing.  (``"methoddef"``
  is special, it's the only one that ends with ``"_define"``, representing that
  it's a preprocessor #define.)

*destination*
  A destination is a place Clinic can write output to.  There are
  five built-in destinations:

  ``block``
    The default destination: printed in the output section of
    the current Clinic block.

  ``buffer``
    A text buffer where you can save text for later.  Text sent
    here is appended to the end of any existing text.  It's an
    error to have any text left in the buffer when Clinic finishes
    processing a file.

  ``file``
    A separate "clinic file" that will be created automatically by Clinic.
    The filename chosen for the file is ``{basename}.clinic{extension}``,
    where ``basename`` and ``extension`` were assigned the output
    from ``os.path.splitext()`` run on the current file.  (Example:
    the ``file`` destination for :file:`_pickle.c` would be written to
    :file:`_pickle.clinic.c`.)

    **Important: When using a** ``file`` **destination, you**
    *must check in* **the generated file!**

  ``two-pass``
    A buffer like ``buffer``.  However, a two-pass buffer can only
    be dumped once, and it prints out all text sent to it during
    all processing, even from Clinic blocks *after* the dumping point.

  ``suppress``
    The text is suppressed—thrown away.


Clinic defines five new directives that let you reconfigure its output.

The first new directive is ``dump``:

.. code-block:: none

   dump <destination>

This dumps the current contents of the named destination into the output of
the current block, and empties it.  This only works with ``buffer`` and
``two-pass`` destinations.

The second new directive is ``output``.  The most basic form of ``output``
is like this:

.. code-block:: none

    output <field> <destination>

This tells Clinic to output *field* to *destination*.  ``output`` also
supports a special meta-destination, called ``everything``, which tells
Clinic to output *all* fields to that *destination*.

``output`` has a number of other functions:

.. code-block:: none

    output push
    output pop
    output preset <preset>


``output push`` and ``output pop`` allow you to push and pop
configurations on an internal configuration stack, so that you
can temporarily modify the output configuration, then easily restore
the previous configuration.  Simply push before your change to save
the current configuration, then pop when you wish to restore the
previous configuration.

``output preset`` sets Clinic's output to one of several built-in
preset configurations, as follows:

``block``
   Clinic's original starting configuration.  Writes everything
   immediately after the input block.

   Suppress the ``parser_prototype``
   and ``docstring_prototype``, write everything else to ``block``.

``file``
   Designed to write everything to the "clinic file" that it can.
   You then ``#include`` this file near the top of your file.
   You may need to rearrange your file to make this work, though
   usually this just means creating forward declarations for various
   ``typedef`` and ``PyTypeObject`` definitions.

   Suppress the ``parser_prototype``
   and ``docstring_prototype``, write the ``impl_definition`` to
   ``block``, and write everything else to ``file``.

   The default filename is ``"{dirname}/clinic/{basename}.h"``.

``buffer``
   Save up most of the output from Clinic, to be written into
   your file near the end.  For Python files implementing modules
   or builtin types, it's recommended that you dump the buffer
   just above the static structures for your module or
   builtin type; these are normally very near the end.  Using
   ``buffer`` may require even more editing than ``file``, if
   your file has static ``PyMethodDef`` arrays defined in the
   middle of the file.

   Suppress the ``parser_prototype``, ``impl_prototype``,
   and ``docstring_prototype``, write the ``impl_definition`` to
   ``block``, and write everything else to ``file``.

``two-pass``
   Similar to the ``buffer`` preset, but writes forward declarations to
   the ``two-pass`` buffer, and definitions to the ``buffer``.
   This is similar to the ``buffer`` preset, but may require
   less editing than ``buffer``.  Dump the ``two-pass`` buffer
   near the top of your file, and dump the ``buffer`` near
   the end just like you would when using the ``buffer`` preset.

   Suppresses the ``impl_prototype``, write the ``impl_definition``
   to ``block``, write ``docstring_prototype``, ``methoddef_define``,
   and ``parser_prototype`` to ``two-pass``, write everything else
   to ``buffer``.

``partial-buffer``
   Similar to the ``buffer`` preset, but writes more things to ``block``,
   only writing the really big chunks of generated code to ``buffer``.
   This avoids the definition-before-use problem of ``buffer`` completely,
   at the small cost of having slightly more stuff in the block's output.
   Dump the ``buffer`` near the end, just like you would when using
   the ``buffer`` preset.

   Suppresses the ``impl_prototype``, write the ``docstring_definition``
   and ``parser_definition`` to ``buffer``, write everything else to ``block``.

The third new directive is ``destination``:

.. code-block:: none

    destination <name> <command> [...]

This performs an operation on the destination named ``name``.

There are two defined subcommands: ``new`` and ``clear``.

The ``new`` subcommand works like this:

.. code-block:: none

    destination <name> new <type>

This creates a new destination with name ``<name>`` and type ``<type>``.

There are five destination types:

``suppress``
   Throws the text away.

``block``
   Writes the text to the current block.  This is what Clinic
   originally did.

``buffer``
   A simple text buffer, like the "buffer" builtin destination above.

``file``
   A text file.  The file destination takes an extra argument,
   a template to use for building the filename, like so::

      destination <name> new <type> <file_template>

   The template can use three strings internally that will be replaced
   by bits of the filename:

   ``{path}``
      The full path to the file, including directory and full filename.
   ``{dirname}``
      The name of the directory the file is in.
   ``{basename}``
      Just the name of the file, not including the directory.
   ``{basename_root}``
      Basename with the extension clipped off
      (everything up to but not including the last '.').
   ``{basename_extension}``
      The last '.' and everything after it.  If the basename
      does not contain a period, this will be the empty string.

   If there are no periods in the filename, ``{basename}`` and ``{filename}``
   are the same, and ``{extension}`` is empty.  ``{basename}{extension}``
   is always exactly the same as ``{filename}``.

``two-pass``
   A two-pass buffer, like the "two-pass" builtin destination above.


The ``clear`` subcommand works like this:

.. code-block:: none

    destination <name> clear

It removes all the accumulated text up to this point in the destination.
(I don't know what you'd need this for, but I thought maybe it'd be
useful while someone's experimenting.)

The fourth new directive is ``set``:

.. code-block:: none

    set line_prefix "string"
    set line_suffix "string"

``set`` lets you set two internal variables in Clinic.
``line_prefix`` is a string that will be prepended to every line of Clinic's output;
``line_suffix`` is a string that will be appended to every line of Clinic's output.

Both of these support two format strings:

``{block comment start}``
   Turns into the string ``/*``, the start-comment text sequence for C files.

``{block comment end}``
   Turns into the string ``*/``, the end-comment text sequence for C files.

The final new directive is one you shouldn't need to use directly,
called ``preserve``:

.. code-block:: none

    preserve

This tells Clinic that the current contents of the output should be kept, unmodified.
This is used internally by Clinic when dumping output into ``file`` files; wrapping
it in a Clinic block lets Clinic use its existing checksum functionality to ensure
the file was not modified by hand before it gets overwritten.


How to use the ``#ifdef`` trick
-------------------------------

If you're converting a function that isn't available on all platforms,
there's a trick you can use to make life a little easier.  The existing
code probably looks like this::

    #ifdef HAVE_FUNCTIONNAME
    static module_functionname(...)
    {
    ...
    }
    #endif /* HAVE_FUNCTIONNAME */

And then in the ``PyMethodDef`` structure at the bottom the existing code
will have:

.. code-block:: none

    #ifdef HAVE_FUNCTIONNAME
    {'functionname', ... },
    #endif /* HAVE_FUNCTIONNAME */

In this scenario, you should enclose the body of your impl function inside the ``#ifdef``,
like so::

    #ifdef HAVE_FUNCTIONNAME
    /*[clinic input]
    module.functionname
    ...
    [clinic start generated code]*/
    static module_functionname(...)
    {
    ...
    }
    #endif /* HAVE_FUNCTIONNAME */

Then, remove those three lines from the :c:type:`PyMethodDef` structure,
replacing them with the macro Argument Clinic generated:

.. code-block:: none

    MODULE_FUNCTIONNAME_METHODDEF

(You can find the real name for this macro inside the generated code.
Or you can calculate it yourself: it's the name of your function as defined
on the first line of your block, but with periods changed to underscores,
uppercased, and ``"_METHODDEF"`` added to the end.)

Perhaps you're wondering: what if ``HAVE_FUNCTIONNAME`` isn't defined?
The ``MODULE_FUNCTIONNAME_METHODDEF`` macro won't be defined either!

Here's where Argument Clinic gets very clever.  It actually detects that the
Argument Clinic block might be deactivated by the ``#ifdef``.  When that
happens, it generates a little extra code that looks like this::

    #ifndef MODULE_FUNCTIONNAME_METHODDEF
        #define MODULE_FUNCTIONNAME_METHODDEF
    #endif /* !defined(MODULE_FUNCTIONNAME_METHODDEF) */

That means the macro always works.  If the function is defined, this turns
into the correct structure, including the trailing comma.  If the function is
undefined, this turns into nothing.

However, this causes one ticklish problem: where should Argument Clinic put this
extra code when using the "block" output preset?  It can't go in the output block,
because that could be deactivated by the ``#ifdef``.  (That's the whole point!)

In this situation, Argument Clinic writes the extra code to the "buffer" destination.
This may mean that you get a complaint from Argument Clinic:

.. code-block:: none

    Warning in file "Modules/posixmodule.c" on line 12357:
    Destination buffer 'buffer' not empty at end of file, emptying.

When this happens, just open your file, find the ``dump buffer`` block that
Argument Clinic added to your file (it'll be at the very bottom), then
move it above the :c:type:`PyMethodDef` structure where that macro is used.


How to use Argument Clinic in Python files
------------------------------------------

It's actually possible to use Argument Clinic to preprocess Python files.
There's no point to using Argument Clinic blocks, of course, as the output
wouldn't make any sense to the Python interpreter.  But using Argument Clinic
to run Python blocks lets you use Python as a Python preprocessor!

Since Python comments are different from C comments, Argument Clinic
blocks embedded in Python files look slightly different.  They look like this:

.. code-block:: python3

    #/*[python input]
    #print("def foo(): pass")
    #[python start generated code]*/
    def foo(): pass
    #/*[python checksum:...]*/


.. _clinic-howto-limited-capi:

How to use the Limited C API
----------------------------

If Argument Clinic :term:`input` is located within a C source file
that contains ``#define Py_LIMITED_API``, Argument Clinic will generate C code
that uses the :ref:`Limited API <limited-c-api>` to parse arguments. The
advantage of this is that the generated code will not use private functions.
However, this *can* result in Argument Clinic generating less efficient code
in some cases. The extent of the performance penalty will depend
on the parameters (types, number, etc.).

.. versionadded:: 3.13


.. _clinic-howto-override-signature:

How to override the generated signature
---------------------------------------

You can use the ``@text_signature`` directive to override the default generated
signature in the docstring.
This can be useful for complex signatures that Argument Clinic cannot handle.
The ``@text_signature`` directive takes one argument:
the custom signature as a string.
The provided signature is copied verbatim to the generated docstring.

Example from :cpy-file:`Objects/codeobject.c`::

   /*[clinic input]
   @text_signature "($self, /, **changes)"
   code.replace
       *
       co_argcount: int(c_default="self->co_argcount") = unchanged
       co_posonlyargcount: int(c_default="self->co_posonlyargcount") = unchanged
       # etc ...

       Return a copy of the code object with new values for the specified fields.
   [clinic start generated output]*/

The generated docstring ends up looking like this:

.. code-block:: none

   replace($self, /, **changes)
   --

   Return a copy of the code object with new values for the specified fields.


.. _clinic-howto-critical-sections:

How to use critical sections with Argument Clinic
-------------------------------------------------

You can use the ``@critical_section`` directive to instruct Argument Clinic to
wrap the call to the "impl" function in a "Python critical section".
In builds of CPython without the Global Interpreter Lock ("GIL"),
critical sections are required in order to achieve
thread safety without causing deadlocks between threads.
When a critical section is entered into, a per-object lock associated
with the first argument of the decorated function is acquired.
The lock is released on exiting the critical section.

Python critical sections are no-ops in builds of CPython with the GIL.
See :cpy-file:`Include/internal/pycore_critical_section.h`
and :pep:`PEP 703 <703#python-critical-sections>`
for more details about critical sections.

Example from :cpy-file:`Modules/_io/bufferedio.c`::

   /*[clinic input]
   @critical_section
   _io._Buffered.close
   [clinic start generated code]*/

The generated glue code looks like this:

.. code-block:: c

   static PyObject *
   _io__Buffered_close(buffered *self, PyObject *Py_UNUSED(ignored))
   {
      PyObject *return_value = NULL;

      Py_BEGIN_CRITICAL_SECTION(self);
      return_value = _io__Buffered_close_impl(self);
      Py_END_CRITICAL_SECTION();

      return return_value;
   }


.. versionadded:: 3.13


.. _clinic-howto-deprecate-positional:
.. _clinic-howto-deprecate-keyword:

How to deprecate passing parameters positionally or by keyword
--------------------------------------------------------------

Argument Clinic provides syntax that makes it possible to generate code that
deprecates passing :term:`arguments <argument>` for positional-or-keyword
:term:`parameters <parameter>` positionally or by keyword.
For example, say we've got a module-level function :py:func:`!foo.myfunc`
that has five parameters: a positional-only parameter *a*, three
positional-or-keyword parameters *b*, *c* and *d*, and a keyword-only
parameter *e*::

   /*[clinic input]
   module foo
   myfunc
       a: int
       /
       b: int
       c: int
       d: int
       *
       e: int
   [clinic start generated output]*/

We now want to make the *b* parameter positional-only and the *d* parameter
keyword-only;
however, we'll have to wait two releases before making these changes,
as mandated by Python's backwards-compatibility policy (see :pep:`387`).
For this example, imagine we're in the development phase for Python 3.12:
that means we'll be allowed to introduce deprecation warnings in Python 3.12
whenever an argument for the *b* parameter is passed by keyword or an argument
for the *d* parameter is passed positionally, and we'll be allowed to make
them positional-only and keyword-only respectively in Python 3.14 at
the earliest.

We can use Argument Clinic to emit the desired deprecation warnings
using the ``[from ...]`` syntax, by adding the line ``/ [from 3.14]`` right
below the *b* parameter and adding the line ``* [from 3.14]`` right above
the *d* parameter::

   /*[clinic input]
   module foo
   myfunc
       a: int
       /
       b: int
       / [from 3.14]
       c: int
       * [from 3.14]
       d: int
       *
       e: int
   [clinic start generated output]*/

Next, regenerate Argument Clinic code (``make clinic``),
and add unit tests for the new behaviour.

The generated code will now emit a :exc:`DeprecationWarning`
when an :term:`argument` for the :term:`parameter` *d* is passed positionally
(e.g ``myfunc(1, 2, 3, 4, e=5)``) or an argument for the parameter *b* is
passed by keyword (e.g ``myfunc(1, b=2, c=3, d=4, e=5)``).
C preprocessor directives are also generated for emitting
compiler warnings if the ``[from ...]`` lines have not been removed
from the Argument Clinic input when the deprecation period is over,
which means when the alpha phase of the specified Python version kicks in.

Let's return to our example and skip ahead two years:
Python 3.14 development has now entered the alpha phase,
but we forgot all about updating the Argument Clinic code
for :py:func:`!myfunc`!
Luckily for us, compiler warnings are now generated:

.. code-block:: none

   In file included from Modules/foomodule.c:139:
   Modules/clinic/foomodule.c.h:139:8: warning: In 'foomodule.c', update the clinic input of 'mymod.myfunc'. [-W#warnings]
    #    warning "In 'foomodule.c', update the clinic input of 'mymod.myfunc'. [-W#warnings]"
         ^

We now close the deprecation phase by making *a* positional-only and *c*
keyword-only;
replace the ``/ [from ...]`` line below *b* with the ``/`` from the line
below *a* and the ``* [from ...]`` line above *d* with the ``*`` from
the line above *e*::

   /*[clinic input]
   module foo
   myfunc
       a: int
       b: int
       /
       c: int
       *
       d: int
       e: int
   [clinic start generated output]*/

Finally, run ``make clinic`` to regenerate the Argument Clinic code,
and update your unit tests to reflect the new behaviour.

.. note::

   If you forget to update your input block during the alpha and beta phases,
   the compiler warning will turn into a compiler error when the
   release candidate phase begins.


===================================================
/. 🚀 ./development-tools/gdb.rst
===================================================

.. _gdb:

===========
GDB support
===========

.. highlight:: none

If you experience low-level problems such as crashes or deadlocks
(e.g. when tinkering with parts of CPython which are written in C),
it can be convenient to use a low-level debugger such as gdb in
order to diagnose and fix the issue.  By default, however, gdb (or any
of its front-ends) doesn't know about high-level information specific to the
CPython interpreter, such as which Python function is currently executing,
or what type or value has a given Python object represented by a standard
``PyObject *`` pointer.  We hereafter present two ways to overcome this
limitation.


GDB 7 and later
===============

In gdb 7, support for `extending gdb with Python
<https://sourceware.org/gdb/onlinedocs/gdb/Python.html>`_ was
added. When CPython is built you will notice a ``python-gdb.py`` file in the
root directory of your checkout. Read the module docstring for details on how
to use the file to enhance gdb for easier debugging of a CPython process.

To activate support, you must add the directory containing ``python-gdb.py``
to GDB's "auto-load-safe-path".  Put this in your ``~/.gdbinit`` file::

   add-auto-load-safe-path /path/to/checkout

You can also add multiple paths, separated by ``:``.

This is what a backtrace looks like (truncated) when this extension is
enabled::

   #0  0x000000000041a6b1 in PyObject_Malloc (nbytes=Cannot access memory at address 0x7fffff7fefe8
   ) at Objects/obmalloc.c:748
   #1  0x000000000041b7c0 in _PyObject_DebugMallocApi (id=111 'o', nbytes=24) at Objects/obmalloc.c:1445
   #2  0x000000000041b717 in _PyObject_DebugMalloc (nbytes=24) at Objects/obmalloc.c:1412
   #3  0x000000000044060a in _PyUnicode_New (length=11) at Objects/unicodeobject.c:346
   #4  0x00000000004466aa in PyUnicodeUCS2_DecodeUTF8Stateful (s=0x5c2b8d "__lltrace__", size=11, errors=0x0, consumed=
       0x0) at Objects/unicodeobject.c:2531
   #5  0x0000000000446647 in PyUnicodeUCS2_DecodeUTF8 (s=0x5c2b8d "__lltrace__", size=11, errors=0x0)
       at Objects/unicodeobject.c:2495
   #6  0x0000000000440d1b in PyUnicodeUCS2_FromStringAndSize (u=0x5c2b8d "__lltrace__", size=11)
       at Objects/unicodeobject.c:551
   #7  0x0000000000440d94 in PyUnicodeUCS2_FromString (u=0x5c2b8d "__lltrace__") at Objects/unicodeobject.c:569
   #8  0x0000000000584abd in PyDict_GetItemString (v=
       {'Yuck': <type at remote 0xad4730>, '__builtins__': <module at remote 0x7ffff7fd5ee8>, '__file__': 'Lib/test/crashers/nasty_eq_vs_dict.py', '__package__': None, 'y': <Yuck(i=0) at remote 0xaacd80>, 'dict': {0: 0, 1: 1, 2: 2, 3: 3}, '__cached__': None, '__name__': '__main__', 'z': <Yuck(i=0) at remote 0xaace60>, '__doc__': None}, key=
       0x5c2b8d "__lltrace__") at Objects/dictobject.c:2171

(Notice how the dictionary argument to ``PyDict_GetItemString`` is displayed
as its ``repr()``, rather than an opaque ``PyObject *`` pointer.)

The extension works by supplying a custom printing routine for values of type
``PyObject *``.  If you need to access lower-level details of an object, then
cast the value to a pointer of the appropriate type.  For example::

    (gdb) p globals
    $1 = {'__builtins__': <module at remote 0x7ffff7fb1868>, '__name__':
    '__main__', 'ctypes': <module at remote 0x7ffff7f14360>, '__doc__': None,
    '__package__': None}

    (gdb) p *(PyDictObject*)globals
    $2 = {ob_refcnt = 3, ob_type = 0x3dbdf85820, ma_fill = 5, ma_used = 5,
    ma_mask = 7, ma_table = 0x63d0f8, ma_lookup = 0x3dbdc7ea70
    <lookdict_string>, ma_smalltable = {{me_hash = 7065186196740147912,
    me_key = '__builtins__', me_value = <module at remote 0x7ffff7fb1868>},
    {me_hash = -368181376027291943, me_key = '__name__',
    me_value ='__main__'}, {me_hash = 0, me_key = 0x0, me_value = 0x0},
    {me_hash = 0, me_key = 0x0, me_value = 0x0},
    {me_hash = -9177857982131165996, me_key = 'ctypes',
    me_value = <module at remote 0x7ffff7f14360>},
    {me_hash = -8518757509529533123, me_key = '__doc__', me_value = None},
    {me_hash = 0, me_key = 0x0, me_value = 0x0}, {
      me_hash = 6614918939584953775, me_key = '__package__', me_value = None}}}

The pretty-printers try to closely match the ``repr()`` implementation of the
underlying implementation of Python, and thus vary somewhat between Python 2
and Python 3.

An area that can be confusing is that the custom printer for some types look a
lot like gdb's built-in printer for standard types.  For example, the
pretty-printer for a Python 3 ``int`` gives a ``repr()`` that is not
distinguishable from a printing of a regular machine-level integer::

    (gdb) p some_machine_integer
    $3 = 42

    (gdb) p some_python_integer
    $4 = 42

    (gdb) p *(PyLongObject*)some_python_integer
    $5 = {ob_base = {ob_base = {ob_refcnt = 8, ob_type = 0x3dad39f5e0}, ob_size = 1},
    ob_digit = {42}}

A similar confusion can arise with the ``str`` type, where the output looks a
lot like gdb's built-in printer for ``char *``::

    (gdb) p ptr_to_python_str
    $6 = '__builtins__'

The pretty-printer for ``str`` instances defaults to using single-quotes (as
does Python's ``repr`` for strings) whereas the standard printer for ``char *``
values uses double-quotes and contains a hexadecimal address::

    (gdb) p ptr_to_char_star
    $7 = 0x6d72c0 "hello world"

Here's how to see the implementation details of a ``str`` instance (for Python
3, where a ``str`` is a ``PyUnicodeObject *``)::

    (gdb) p *(PyUnicodeObject*)$6
    $8 = {ob_base = {ob_refcnt = 33, ob_type = 0x3dad3a95a0}, length = 12,
    str = 0x7ffff2128500, hash = 7065186196740147912, state = 1, defenc = 0x0}

As well as adding pretty-printing support for ``PyObject *``,
the extension adds a number of commands to gdb:

``py-list``
   List the Python source code (if any) for the current frame in the selected
   thread.  The current line is marked with a ">"::

        (gdb) py-list
         901        if options.profile:
         902            options.profile = False
         903            profile_me()
         904            return
         905
        >906        u = UI()
         907        if not u.quit:
         908            try:
         909                gtk.main()
         910            except KeyboardInterrupt:
         911                # properly quit on a keyboard interrupt...

   Use ``py-list START`` to list at a different line number within the python
   source, and ``py-list START,END`` to list a specific range of lines within
   the python source.

``py-up`` and ``py-down``
   The ``py-up`` and ``py-down`` commands are analogous to gdb's regular ``up``
   and ``down`` commands, but try to move at the level of CPython frames, rather
   than C frames.

   gdb is not always able to read the relevant frame information, depending on
   the optimization level with which CPython was compiled. Internally, the
   commands look for C frames that are executing ``PyEval_EvalFrameEx`` (which
   implements the core bytecode interpreter loop within CPython) and look up
   the value of the related ``PyFrameObject *``.

   They emit the frame number (at the C level) within the thread.

   For example::

        (gdb) py-up
        #37 Frame 0x9420b04, for file /usr/lib/python2.6/site-packages/
        gnome_sudoku/main.py, line 906, in start_game ()
            u = UI()
        (gdb) py-up
        #40 Frame 0x948e82c, for file /usr/lib/python2.6/site-packages/
        gnome_sudoku/gnome_sudoku.py, line 22, in start_game(main=<module at remote 0xb771b7f4>)
            main.start_game()
        (gdb) py-up
        Unable to find an older python frame

   so we're at the top of the python stack.  Going back down::

        (gdb) py-down
        #37 Frame 0x9420b04, for file /usr/lib/python2.6/site-packages/gnome_sudoku/main.py, line 906, in start_game ()
            u = UI()
        (gdb) py-down
        #34 (unable to read python frame information)
        (gdb) py-down
        #23 (unable to read python frame information)
        (gdb) py-down
        #19 (unable to read python frame information)
        (gdb) py-down
        #14 Frame 0x99262ac, for file /usr/lib/python2.6/site-packages/gnome_sudoku/game_selector.py, line 201, in run_swallowed_dialog (self=<NewOrSavedGameSelector(new_game_model=<gtk.ListStore at remote 0x98fab44>, puzzle=None, saved_games=[{'gsd.auto_fills': 0, 'tracking': {}, 'trackers': {}, 'notes': [], 'saved_at': 1270084485, 'game': '7 8 0 0 0 0 0 5 6 0 0 9 0 8 0 1 0 0 0 4 6 0 0 0 0 7 0 6 5 0 0 0 4 7 9 2 0 0 0 9 0 1 0 0 0 3 9 7 6 0 0 0 1 8 0 6 0 0 0 0 2 8 0 0 0 5 0 4 0 6 0 0 2 1 0 0 0 0 0 4 5\n7 8 0 0 0 0 0 5 6 0 0 9 0 8 0 1 0 0 0 4 6 0 0 0 0 7 0 6 5 1 8 3 4 7 9 2 0 0 0 9 0 1 0 0 0 3 9 7 6 0 0 0 1 8 0 6 0 0 0 0 2 8 0 0 0 5 0 4 0 6 0 0 2 1 0 0 0 0 0 4 5', 'gsd.impossible_hints': 0, 'timer.__absolute_start_time__': <float at remote 0x984b474>, 'gsd.hints': 0, 'timer.active_time': <float at remote 0x984b494>, 'timer.total_time': <float at remote 0x984b464>}], dialog=<gtk.Dialog at remote 0x98faaa4>, saved_game_model=<gtk.ListStore at remote 0x98fad24>, sudoku_maker=<SudokuMaker(terminated=False, played=[], batch_siz...(truncated)
                    swallower.run_dialog(self.dialog)
        (gdb) py-down
        #11 Frame 0x9aead74, for file /usr/lib/python2.6/site-packages/gnome_sudoku/dialog_swallower.py, line 48, in run_dialog (self=<SwappableArea(running=<gtk.Dialog at remote 0x98faaa4>, main_page=0) at remote 0x98fa6e4>, d=<gtk.Dialog at remote 0x98faaa4>)
                    gtk.main()
        (gdb) py-down
        #8 (unable to read python frame information)
        (gdb) py-down
        Unable to find a newer python frame

   and we're at the bottom of the python stack.

``py-bt``
   The ``py-bt`` command attempts to display a Python-level backtrace of the
   current thread.

   For example::

        (gdb) py-bt
        #8 (unable to read python frame information)
        #11 Frame 0x9aead74, for file /usr/lib/python2.6/site-packages/gnome_sudoku/dialog_swallower.py, line 48, in run_dialog (self=<SwappableArea(running=<gtk.Dialog at remote 0x98faaa4>, main_page=0) at remote 0x98fa6e4>, d=<gtk.Dialog at remote 0x98faaa4>)
                    gtk.main()
        #14 Frame 0x99262ac, for file /usr/lib/python2.6/site-packages/gnome_sudoku/game_selector.py, line 201, in run_swallowed_dialog (self=<NewOrSavedGameSelector(new_game_model=<gtk.ListStore at remote 0x98fab44>, puzzle=None, saved_games=[{'gsd.auto_fills': 0, 'tracking': {}, 'trackers': {}, 'notes': [], 'saved_at': 1270084485, 'game': '7 8 0 0 0 0 0 5 6 0 0 9 0 8 0 1 0 0 0 4 6 0 0 0 0 7 0 6 5 0 0 0 4 7 9 2 0 0 0 9 0 1 0 0 0 3 9 7 6 0 0 0 1 8 0 6 0 0 0 0 2 8 0 0 0 5 0 4 0 6 0 0 2 1 0 0 0 0 0 4 5\n7 8 0 0 0 0 0 5 6 0 0 9 0 8 0 1 0 0 0 4 6 0 0 0 0 7 0 6 5 1 8 3 4 7 9 2 0 0 0 9 0 1 0 0 0 3 9 7 6 0 0 0 1 8 0 6 0 0 0 0 2 8 0 0 0 5 0 4 0 6 0 0 2 1 0 0 0 0 0 4 5', 'gsd.impossible_hints': 0, 'timer.__absolute_start_time__': <float at remote 0x984b474>, 'gsd.hints': 0, 'timer.active_time': <float at remote 0x984b494>, 'timer.total_time': <float at remote 0x984b464>}], dialog=<gtk.Dialog at remote 0x98faaa4>, saved_game_model=<gtk.ListStore at remote 0x98fad24>, sudoku_maker=<SudokuMaker(terminated=False, played=[], batch_siz...(truncated)
                    swallower.run_dialog(self.dialog)
        #19 (unable to read python frame information)
        #23 (unable to read python frame information)
        #34 (unable to read python frame information)
        #37 Frame 0x9420b04, for file /usr/lib/python2.6/site-packages/gnome_sudoku/main.py, line 906, in start_game ()
            u = UI()
        #40 Frame 0x948e82c, for file /usr/lib/python2.6/site-packages/gnome_sudoku/gnome_sudoku.py, line 22, in start_game (main=<module at remote 0xb771b7f4>)
            main.start_game()

   The frame numbers correspond to those displayed by gdb's standard
   ``backtrace`` command.

``py-print``
   The ``py-print`` command looks up a Python name and tries to print it.
   It looks in locals within the current thread, then globals, then finally
   builtins::

        (gdb) py-print self
        local 'self' = <SwappableArea(running=<gtk.Dialog at remote 0x98faaa4>,
        main_page=0) at remote 0x98fa6e4>
        (gdb) py-print __name__
        global '__name__' = 'gnome_sudoku.dialog_swallower'
        (gdb) py-print len
        builtin 'len' = <built-in function len>
        (gdb) py-print scarlet_pimpernel
        'scarlet_pimpernel' not found

``py-locals``
   The ``py-locals`` command looks up all Python locals within the current
   Python frame in the selected thread, and prints their representations::

        (gdb) py-locals
        self = <SwappableArea(running=<gtk.Dialog at remote 0x98faaa4>,
        main_page=0) at remote 0x98fa6e4>
        d = <gtk.Dialog at remote 0x98faaa4>

You can of course use other gdb commands.  For example, the ``frame`` command
takes you directly to a particular frame within the selected thread.
We can use it to go a specific frame shown by ``py-bt`` like this::

        (gdb) py-bt
        (output snipped)
        #68 Frame 0xaa4560, for file Lib/test/regrtest.py, line 1548, in <module> ()
                main()
        (gdb) frame 68
        #68 0x00000000004cd1e6 in PyEval_EvalFrameEx (f=Frame 0xaa4560, for file Lib/test/regrtest.py, line 1548, in <module> (), throwflag=0) at Python/ceval.c:2665
        2665                            x = call_function(&sp, oparg);
        (gdb) py-list
        1543        # Run the tests in a context manager that temporary changes the CWD to a
        1544        # temporary and writable directory. If it's not possible to create or
        1545        # change the CWD, the original CWD will be used. The original CWD is
        1546        # available from test_support.SAVEDCWD.
        1547        with test_support.temp_cwd(TESTCWD, quiet=True):
        >1548            main()

The ``info threads`` command will give you a list of the threads within the
process, and you can use the ``thread`` command to select a different one::

        (gdb) info threads
          105 Thread 0x7fffefa18710 (LWP 10260)  sem_wait () at ../nptl/sysdeps/unix/sysv/linux/x86_64/sem_wait.S:86
          104 Thread 0x7fffdf5fe710 (LWP 10259)  sem_wait () at ../nptl/sysdeps/unix/sysv/linux/x86_64/sem_wait.S:86
        * 1 Thread 0x7ffff7fe2700 (LWP 10145)  0x00000038e46d73e3 in select () at ../sysdeps/unix/syscall-template.S:82

You can use ``thread apply all COMMAND`` or (``t a a COMMAND`` for short) to run
a command on all threads.  You can use this with ``py-bt`` to see what every
thread is doing at the Python level::

        (gdb) t a a py-bt

        Thread 105 (Thread 0x7fffefa18710 (LWP 10260)):
        #5 Frame 0x7fffd00019d0, for file /home/david/coding/python-svn/Lib/threading.py, line 155, in _acquire_restore (self=<_RLock(_Verbose__verbose=False, _RLock__owner=140737354016512, _RLock__block=<thread.lock at remote 0x858770>, _RLock__count=1) at remote 0xd7ff40>, count_owner=(1, 140737213728528), count=1, owner=140737213728528)
                self.__block.acquire()
        #8 Frame 0x7fffac001640, for file /home/david/coding/python-svn/Lib/threading.py, line 269, in wait (self=<_Condition(_Condition__lock=<_RLock(_Verbose__verbose=False, _RLock__owner=140737354016512, _RLock__block=<thread.lock at remote 0x858770>, _RLock__count=1) at remote 0xd7ff40>, acquire=<instancemethod at remote 0xd80260>, _is_owned=<instancemethod at remote 0xd80160>, _release_save=<instancemethod at remote 0xd803e0>, release=<instancemethod at remote 0xd802e0>, _acquire_restore=<instancemethod at remote 0xd7ee60>, _Verbose__verbose=False, _Condition__waiters=[]) at remote 0xd7fd10>, timeout=None, waiter=<thread.lock at remote 0x858a90>, saved_state=(1, 140737213728528))
                    self._acquire_restore(saved_state)
        #12 Frame 0x7fffb8001a10, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 348, in f ()
                    cond.wait()
        #16 Frame 0x7fffb8001c40, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 37, in task (tid=140737213728528)
                        f()

        Thread 104 (Thread 0x7fffdf5fe710 (LWP 10259)):
        #5 Frame 0x7fffe4001580, for file /home/david/coding/python-svn/Lib/threading.py, line 155, in _acquire_restore (self=<_RLock(_Verbose__verbose=False, _RLock__owner=140737354016512, _RLock__block=<thread.lock at remote 0x858770>, _RLock__count=1) at remote 0xd7ff40>, count_owner=(1, 140736940992272), count=1, owner=140736940992272)
                self.__block.acquire()
        #8 Frame 0x7fffc8002090, for file /home/david/coding/python-svn/Lib/threading.py, line 269, in wait (self=<_Condition(_Condition__lock=<_RLock(_Verbose__verbose=False, _RLock__owner=140737354016512, _RLock__block=<thread.lock at remote 0x858770>, _RLock__count=1) at remote 0xd7ff40>, acquire=<instancemethod at remote 0xd80260>, _is_owned=<instancemethod at remote 0xd80160>, _release_save=<instancemethod at remote 0xd803e0>, release=<instancemethod at remote 0xd802e0>, _acquire_restore=<instancemethod at remote 0xd7ee60>, _Verbose__verbose=False, _Condition__waiters=[]) at remote 0xd7fd10>, timeout=None, waiter=<thread.lock at remote 0x858860>, saved_state=(1, 140736940992272))
                    self._acquire_restore(saved_state)
        #12 Frame 0x7fffac001c90, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 348, in f ()
                    cond.wait()
        #16 Frame 0x7fffac0011c0, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 37, in task (tid=140736940992272)
                        f()

        Thread 1 (Thread 0x7ffff7fe2700 (LWP 10145)):
        #5 Frame 0xcb5380, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 16, in _wait ()
            time.sleep(0.01)
        #8 Frame 0x7fffd00024a0, for file /home/david/coding/python-svn/Lib/test/lock_tests.py, line 378, in _check_notify (self=<ConditionTests(_testMethodName='test_notify', _resultForDoCleanups=<TestResult(_original_stdout=<cStringIO.StringO at remote 0xc191e0>, skipped=[], _mirrorOutput=False, testsRun=39, buffer=False, _original_stderr=<file at remote 0x7ffff7fc6340>, _stdout_buffer=<cStringIO.StringO at remote 0xc9c7f8>, _stderr_buffer=<cStringIO.StringO at remote 0xc9c790>, _moduleSetUpFailed=False, expectedFailures=[], errors=[], _previousTestClass=<type at remote 0x928310>, unexpectedSuccesses=[], failures=[], shouldStop=False, failfast=False) at remote 0xc185a0>, _threads=(0,), _cleanups=[], _type_equality_funcs={<type at remote 0x7eba00>: <instancemethod at remote 0xd750e0>, <type at remote 0x7e7820>: <instancemethod at remote 0xd75160>, <type at remote 0x7e30e0>: <instancemethod at remote 0xd75060>, <type at remote 0x7e7d20>: <instancemethod at remote 0xd751e0>, <type at remote 0x7f19e0...(truncated)
                _wait()

.. note:: This is only available for Python 2.7, 3.2 and higher.


GDB 6 and earlier
=================

The file at ``Misc/gdbinit`` contains a gdb configuration file which provides
extra commands when working with a CPython process. To register these commands
permanently, either copy the commands to your personal gdb configuration file
or symlink ``~/.gdbinit`` to ``Misc/gdbinit``.  To use these commands from
a single gdb session without registering them, type ``source Misc/gdbinit``
from your gdb session.


Updating auto-load-safe-path to allow test_gdb to run
=====================================================

``test_gdb`` attempts to automatically load additional Python specific
hooks into gdb in order to test them. Unfortunately, the command line
options it uses to do this aren't always supported correctly.

If ``test_gdb`` is being skipped with an "auto-loading has been declined"
message, then it is necessary to identify any Python build directories as
auto-load safe. One way to achieve this is to add a line like the following
to ``~/.gdbinit`` (edit the specific list of paths as appropriate)::

    add-auto-load-safe-path ~/devel/py3k:~/devel/py32:~/devel/py27


GDB tips
========

Learning to use GDB effectively improves your chances of successfully
debugging problems with Python's internals.

Saving and loading breakpoints
------------------------------

With extended exposure to particular parts of the Python runtime, you
might find it helpful to define a routine set of breakpoints and
commands to execute when they are hit.
For convenience, save your breakpoints to a file and load them in future
sessions using the ``save breakpoints`` command::

   (gdb) save breakpoints python.brk

You can edit the file to your heart's content, then load it in a later
session::

   (gdb) source python.brk


Breaking at labels
------------------

You will most often set breakpoints at the start of functions, but
this approach is less helpful when debugging the runtime virtual
machine, since the main interpreter loop function,
``_PyEval_EvalFrameDefault``, is well over 4,000 lines long as of Python 3.12.
Fortunately, among the `many ways to set breakpoints
<https://sourceware.org/gdb/onlinedocs/gdb/Location-Specifications.html>`_,
you can break at C labels, such as those generated for computed gotos.
If you are debugging an interpreter compiled with computed goto support
(generally true, certainly when using GCC), each instruction will be
prefaced with a label named ``TARGET_<instruction>``, e.g.,
``TARGET_LOAD_CONST``.  You can then set a breakpoint with a command
like::

   (gdb) break ceval.c:_PyEval_EvalFrameDefault:TARGET_LOAD_CONST

Add commands, save to a file, then reload in future sessions without
worrying that the starting line number of individual instructions
change over time.


===================================================
/. 🚀 ./development-tools/clang.rst
===================================================

.. _clang:

===========================
Dynamic analysis with Clang
===========================

.. highlight:: bash

This document describes how to use Clang to perform analysis on Python and its
libraries. In addition to performing the analysis, the document will cover
downloading, building and installing the latest Clang/LLVM combination (which
is currently 3.4).

This document does not cover interpreting the findings. For a discussion of
interpreting results, see Marshall Clow's `Testing libc++ with
-fsanitize=undefined <https://cplusplusmusings.wordpress.com/tag/clang/>`_.  The
blog posting is a detailed examinations of issues uncovered by Clang in
``libc++``.

What is Clang?
==============

Clang is the C, C++ and Objective C front-end for the LLVM compiler.  The
front-end provides access to LLVM's optimizer and code generator. The
sanitizers - or checkers - are hooks into the code generation phase to
instrument compiled code so suspicious behavior is flagged.

What are sanitizers?
====================

Clang sanitizers are runtime checkers used to identify suspicious and undefined
behavior. The checking occurs at runtime with actual runtime parameters so false
positives are kept to a minimum.

There are a number of sanitizers available, but two that should be used on a
regular basis are the Address Sanitizer (or ASan) and the Undefined Behavior
Sanitizer (or UBSan). ASan is invoked with the compiler option
``-fsanitize=address``, and UBSan is invoked with ``-fsanitize=undefined``.  The
flags are passed through ``CFLAGS`` and ``CXXFLAGS``, and sometimes through
``CC`` and ``CXX`` (in addition to the compiler).

A complete list of sanitizers can be found at `Controlling Code Generation
<https://clang.llvm.org/docs/UsersManual.html#controlling-code-generation>`_.

.. note::

    Because sanitizers operate at runtime on real program parameters, its
    important to provide a complete set of positive and negative self tests.

Clang and its sanitizers have strengths (and weaknesses). Its just one tool in
the war chest to uncovering bugs and improving code quality. Clang should be
used to compliment other methods, including Code Reviews, Valgrind, Coverity,
etc.

Clang/LLVM setup
================

This portion of the document covers downloading, building and installing Clang
and LLVM. There are three components to download and build. They are the LLVM
compiler, the compiler front end and the compiler runtime library.

In preparation you should create a scratch directory. Also ensure you are using
Python 2 and not Python 3. Python 3 will cause the build to fail.

Download, build and install
---------------------------

Perform the following to download, build and install the Clang/LLVM 3.4. ::

    # Download
    wget https://llvm.org/releases/3.4/llvm-3.4.src.tar.gz
    wget https://llvm.org/releases/3.4/clang-3.4.src.tar.gz
    wget https://llvm.org/releases/3.4/compiler-rt-3.4.src.tar.gz

    # LLVM
    tar xvf llvm-3.4.src.tar.gz
    cd llvm-3.4/tools

    # Clang Front End
    tar xvf ../../clang-3.4.src.tar.gz
    mv clang-3.4 clang

    # Compiler RT
    cd ../projects
    tar xvf ../../compiler-rt-3.4.src.tar.gz
    mv compiler-rt-3.4/ compiler-rt

    # Build
    cd ..
    ./configure --enable-optimized --prefix=/usr/local
    make -j4
    sudo make install

.. note::

    If you receive an error ``'LibraryDependencies.inc' file not found``, then
    ensure you are utilizing Python 2 and not Python 3. If you encounter the
    error after switching to Python 2, then delete everything and start over.

After ``make install`` executes, the compilers will be installed in
``/usr/local/bin`` and the various libraries will be installed in
``/usr/local/lib/clang/3.4/lib/linux/``:

.. code-block:: console

    $ ls /usr/local/lib/clang/3.4/lib/linux/
    libclang_rt.asan-x86_64.a   libclang_rt.profile-x86_64.a
    libclang_rt.dfsan-x86_64.a  libclang_rt.san-x86_64.a
    libclang_rt.full-x86_64.a   libclang_rt.tsan-x86_64.a
    libclang_rt.lsan-x86_64.a   libclang_rt.ubsan_cxx-x86_64.a
    libclang_rt.msan-x86_64.a   libclang_rt.ubsan-x86_64.a

On macOS, the libraries are installed in
``/usr/local/lib/clang/3.3/lib/darwin/``:

.. code-block:: console

    $ ls /usr/local/lib/clang/3.3/lib/darwin/
    libclang_rt.10.4.a                    libclang_rt.ios.a
    libclang_rt.asan_osx.a                libclang_rt.osx.a
    libclang_rt.asan_osx_dynamic.dylib    libclang_rt.profile_ios.a
    libclang_rt.cc_kext.a                 libclang_rt.profile_osx.a
    libclang_rt.cc_kext_ios5.a            libclang_rt.ubsan_osx.a
    libclang_rt.eprintf.a

.. note::

    You should never have to add the libraries to a project. Clang will handle
    it for you. If you find you cannot pass the ``-fsanitize=XXX`` flag through
    ``make``'s implicit variables (``CFLAGS``, ``CXXFLAGS``, ``CC``,
    ``CXXFLAGS``, ``LDFLAGS``) during ``configure``, then you should modify the
    makefile after configuring to ensure the flag is passed through the
    compiler.

The installer does not install all the components needed on occasion. For
example, you might want to run a ``scan-build`` or examine the results with
``scan-view``. You can copy the components by hand with: ::

    sudo mkdir /usr/local/bin/scan-build
    sudo cp -r llvm-3.4/tools/clang/tools/scan-build /usr/local/bin
    sudo mkdir /usr/local/bin/scan-view
    sudo cp -r llvm-3.4/tools/clang/tools/scan-view /usr/local/bin

.. note::

    Because the installer does not install all the components needed on
    occasion, you should not delete the scratch directory until you are sure
    things work as expected. If a library is missing, then you should search for
    it in the Clang/LLVM build directory.

Python build setup
==================

This portion of the document covers invoking Clang and LLVM with the options
required so the sanitizers analyze Python with under its test suite. Two
checkers are used - ASan and UBSan.

Because the sanitizers are runtime checkers, its best to have as many positive
and negative self tests as possible. You can never have enough self tests.

The general idea is to compile and link with the sanitizer flags. At link time,
Clang will include the needed runtime libraries. However, you can't use
``CFLAGS`` and ``CXXFLAGS`` to pass the options through the compiler to the
linker because the makefile rules for ``BUILDPYTHON``, ``_testembed`` and
``_freeze_importlib`` don't use the implicit variables.

As a workaround to the absence of flags to the linker, you can pass the
sanitizer options by way of the compilers - ``CC`` and ``CXX``.  Passing the
flags though the compiler is used below, but passing them through ``LDFLAGS`` is
also reported to work.

Building Python
---------------

To begin, export the variables of interest with the desired sanitizers. Its OK
to specify both sanitizers: ::

    # ASan
    export CC="/usr/local/bin/clang -fsanitize=address"
    export CXX="/usr/local/bin/clang++ -fsanitize=address -fno-sanitize=vptr"

Or: ::

    # UBSan
    export CC="/usr/local/bin/clang -fsanitize=undefined"
    export CXX="/usr/local/bin/clang++ -fsanitize=undefined -fno-sanitize=vptr"

The ``-fno-sanitize=vptr`` removes vtable checks that are part of UBSan from C++
projects due to noise. Its not needed with Python, but you will likely need it
for other C++ projects.

After exporting ``CC`` and ``CXX``, ``configure`` as normal:

.. code-block:: console

    $ ./configure
    checking build system type... x86_64-unknown-linux-gnu
    checking host system type... x86_64-unknown-linux-gnu
    checking for --enable-universalsdk... no
    checking for --with-universal-archs... 32-bit
    checking MACHDEP... linux
    checking for --without-gcc... no
    checking for gcc... /usr/local/bin/clang -fsanitize=undefined
    checking whether the C compiler works... yes
    ...

Next is a standard ``make`` (formatting added for clarity):

.. code-block:: console

    $ make
    /usr/local/bin/clang -fsanitize=undefined -c -Wno-unused-result
        -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes -I.
        -IInclude -I./Include -DPy_BUILD_CORE -o Modules/python.o
        ./Modules/python.c
    /usr/local/bin/clang -fsanitize=undefined -c -Wno-unused-result
        -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes -I.
        -IInclude -I./Include -DPy_BUILD_CORE -o Parser/acceler.o
        Parser/acceler.c
    ...

Finally is ``make test`` (formatting added for clarity):

.. code-block:: none

    Objects/longobject.c:39:42: runtime error: index -1 out of bounds
        for type 'PyLongObject [262]'
    Objects/tupleobject.c:188:13: runtime error: member access within
        misaligned address 0x2b76be018078 for type 'PyGC_Head' (aka
        'union _gc_head'), which requires 16 byte alignment
        0x2b76be018078: note: pointer points here
        00 00 00 00  40 53 5a b6 76 2b 00 00  60 52 5a b6 ...
                     ^
    ...

If you are using the address sanitizer, its important to pipe the output through
``asan_symbolize.py`` to get a good trace. For example, from Issue 20953 during
compile (formatting added for clarity):

.. code-block:: none

    $ make test 2>&1 | asan_symbolize.py
    ...

    /usr/local/bin/clang -fsanitize=address -Xlinker -export-dynamic
        -o python Modules/python.o libpython3.3m.a -ldl -lutil
        /usr/local/ssl/lib/libssl.a /usr/local/ssl/lib/libcrypto.a -lm
    ./python -E -S -m sysconfig --generate-posix-vars
    =================================================================
    ==24064==ERROR: AddressSanitizer: heap-buffer-overflow on address
    0x619000004020 at pc 0x4ed4b2 bp 0x7fff80fff010 sp 0x7fff80fff008
    READ of size 4 at 0x619000004020 thread T0
      #0 0x4ed4b1 in PyObject_Free Python-3.3.5/./Objects/obmalloc.c:987
      #1 0x7a2141 in code_dealloc Python-3.3.5/./Objects/codeobject.c:359
      #2 0x620c00 in PyImport_ImportFrozenModuleObject
           Python-3.3.5/./Python/import.c:1098
      #3 0x620d5c in PyImport_ImportFrozenModule
           Python-3.3.5/./Python/import.c:1114
      #4 0x63fd07 in import_init Python-3.3.5/./Python/pythonrun.c:206
      #5 0x63f636 in _Py_InitializeEx_Private
           Python-3.3.5/./Python/pythonrun.c:369
      #6 0x681d77 in Py_Main Python-3.3.5/./Modules/main.c:648
      #7 0x4e6894 in main Python-3.3.5/././Modules/python.c:62
      #8 0x2abf9a525eac in __libc_start_main
           /home/aurel32/eglibc/eglibc-2.13/csu/libc-start.c:244
      #9 0x4e664c in _start (Python-3.3.5/./python+0x4e664c)

    AddressSanitizer can not describe address in more detail (wild
    memory access suspected).
    SUMMARY: AddressSanitizer: heap-buffer-overflow
      Python-3.3.5/./Objects/obmalloc.c:987 PyObject_Free
    Shadow bytes around the buggy address:
      0x0c327fff87b0: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff87c0: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff87d0: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff87e0: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff87f0: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
    =>0x0c327fff8800: fa fa fa fa[fa]fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff8810: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff8820: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff8830: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff8840: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
      0x0c327fff8850: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
    Shadow byte legend (one shadow byte represents 8 application bytes):
      Addressable:           00
      Partially addressable: 01 02 03 04 05 06 07
      Heap left redzone:     fa
      Heap right redzone:    fb
      Freed heap region:     fd
      Stack left redzone:    f1
      Stack mid redzone:     f2
      Stack right redzone:   f3
      Stack partial redzone: f4
      Stack after return:    f5
      Stack use after scope: f8
      Global redzone:        f9
      Global init order:     f6
      Poisoned by user:      f7
      ASan internal:         fe
    ==24064==ABORTING
    make: *** [pybuilddir.txt] Error 1

.. note::

    ``asan_symbolize.py`` is supposed to be installed during ``make install``.
    If its not installed, then look in the Clang/LLVM build directory for it and
    copy it to ``/usr/local/bin``.

Blacklisting (ignoring) findings
--------------------------------

.. highlight:: none

Clang allows you to alter the behavior of sanitizer tools for certain
source-level by providing a special blacklist file at compile-time. The
blacklist is needed because it reports every instance of an issue, even if the
issue is reported 10's of thousands of time in un-managed library code.

You specify the blacklist with ``-fsanitize-blacklist=XXX``. For example::

    -fsanitize-blacklist=my_blacklist.txt

``my_blacklist.txt`` would then contain entries such as the following. The entry
will ignore a bug in ``libc++``'s ``ios`` formatting functions::

    fun:_Ios_Fmtflags

As an example with Python 3.4.0, ``audioop.c`` will produce a number of
findings::

    ./Modules/audioop.c:422:11: runtime error: left shift of negative value -1
    ./Modules/audioop.c:446:19: runtime error: left shift of negative value -1
    ./Modules/audioop.c:476:19: runtime error: left shift of negative value -1
    ./Modules/audioop.c:504:16: runtime error: left shift of negative value -1
    ./Modules/audioop.c:533:22: runtime error: left shift of negative value -128
    ./Modules/audioop.c:775:19: runtime error: left shift of negative value -70
    ./Modules/audioop.c:831:19: runtime error: left shift of negative value -70
    ./Modules/audioop.c:881:19: runtime error: left shift of negative value -1
    ./Modules/audioop.c:920:22: runtime error: left shift of negative value -70
    ./Modules/audioop.c:967:23: runtime error: left shift of negative value -70
    ./Modules/audioop.c:968:23: runtime error: left shift of negative value -70
    ...

One of the function of interest is ``audioop_getsample_impl`` (flagged at line
422), and the blacklist entry would include::

    fun:audioop_getsample_imp

Or, you could ignore the entire file with::

    src:Modules/audioop.c

Unfortunately, you won't know what to blacklist until you run the sanitizer.

The documentation is available at `Sanitizer special case list
<https://clang.llvm.org/docs/SanitizerSpecialCaseList.html>`_.


===================================================
/. 🚀 ./development-tools/coverity.rst
===================================================

.. _coverity:

=============
Coverity Scan
=============

Coverity Scan is a free service for static code analysis of Open Source
projects. It is based on Coverity's commercial product and is able to analyze
C, C++ and Java code.

Coverity's static code analysis doesn't run the code. Instead of that it uses
abstract interpretation to gain information about the code's control flow and
data flow. It's able to follow all possible code paths that a program may
take. For example the analyzer understands that ``malloc()`` returns a memory
that must be freed with ``free()`` later. It follows all branches and function
calls to see if all possible combinations free the memory. The analyzer is
able to detect all sorts of issues like resource leaks (memory, file
descriptors), NULL dereferencing, use after free, unchecked return values,
dead code, buffer overflows, integer overflows, uninitialized variables, and
many more.


Access to analysis reports
==========================

The results are available on the `Coverity Scan`_ website. In order to
access the results you have to create an account yourself. Then go to
*Projects using Scan* and add yourself to the Python project. New members must
be approved by an admin (see `Contact`_).

Access is restricted to Python core developers only. Other individuals may be
given access at our own discretion, too. Every now and then Coverity detects a
critical issue in Python's code -- new analyzers may even find new bugs in
mature code. We don't want to disclose issues prematurely.


Building and uploading analysis
===============================

The process is automated. A script checks out the code, runs
``cov-build`` and uploads the latest analysis to Coverity. Since Coverity has
limited the maximum number of builds per week Python is analyzed every second
day. The build runs on a dedicated virtual machine on PSF's infrastructure at
OSU Open Source Labs. The process is maintained by Christian Heimes (see
`Contact`_). At present only the tip is analyzed with the 64bit Linux tools.


Known limitations
=================

Some aspects of Python's C code are not yet understood by Coverity.

False positives
---------------

``Py_BuildValue("N", PyObject*)``
  Coverity doesn't understand that ``N`` format char passes the object along
  without touching its reference count. On this ground the analyzer detects
  a resource leak. CID 719685

``PyLong_FromLong()`` for negative values
  Coverity claims that ``PyLong_FromLong()`` and other ``PyLong_From*()``
  functions cannot handle a negative value because the value might be used as
  an array index in ``get_small_int()``. CID 486783

``PyLong_FromLong()`` for n in [-5 ... +255]
  For integers in the range of Python's small int cache the ``PyLong_From*()``
  function can never fail and never returns NULL. CID 1058291

``PyArg_ParseTupleAndKeywords(args, kwargs, "s#", &data, &length)``
  Some functions use the format char combination such as ``s#``, ``u#`` or
  ``z#`` to get data and length of a character array. Coverity doesn't
  recognize the relation between data and length. Sometimes it detects a buffer
  overflow if data is written to a fixed size buffer although
  ``length <= sizeof(buffer)``.  CID 486613

``path_converter()`` dereferencing after null check
  The ``path_converter()`` function in ``posixmodule.c`` makes sure that
  either ``path_t.narrow`` or ``path_t.wide`` is filled unless
  ``path_t.nullable`` is explicitly enabled. CID 719648


Modeling
========

Modeling is explained in the *Coverity Help Center* which is available in
the help menu of `Coverity Connect`_. `coverity_model.c`_ contains a copy of
Python's modeling file for Coverity. Please keep the copy in sync with the
model file in *Analysis Settings* of `Coverity Scan`_.


Workflow
========

False positive and intentional issues
-------------------------------------

If the problem is listed under `Known limitations`_ then please set the
classification to either "False positive" or "Intentional", the action to
"Ignore", owner to your own account and add a comment why the issue
is considered false positive or intentional.

If you think it's a new false positive or intentional then please contact an
admin. The first step should be an updated to Python's `Modeling`_ file.


Positive issues
---------------

You should always create an issue unless it's really a trivial case. Please
add the full url to the ticket under *Ext. Reference* and add the CID
(Coverity ID) to both the ticket and the checkin message. It makes it much
easier to understand the relation between tickets, fixes and Coverity issues.


Contact
=======

Please include both Brett and Christian in any mail regarding Coverity. Mails
to Coverity should go through Brett or Christian, too.

Christian Heimes <christian (at) python (dot) org>
  admin, maintainer of build machine, intermediary between Python and Coverity

Brett Cannon <brett (at) python (dot) org>
  co-admin

Dakshesh Vyas <scan-admin@coverity.com>
  Technical Manager - Coverity Scan


.. seealso::

   `Coverity Scan FAQ <https://scan.coverity.com/faq/>`_


.. _Coverity Scan: https://scan.coverity.com/

.. _Coverity Connect: https://scan.coverity.com/projects/python

.. _coverity_model.c: https://github.com/python/cpython/blob/main/Misc/coverity_model.c


===================================================
/. 🚀 ./core-developers/index.rst
===================================================

===============
Core developers
===============

.. toctree::
   :maxdepth: 5

   responsibilities
   committing
   experts
   developer-log
   motivations
   become-core-developer


===================================================
/. 🚀 ./core-developers/responsibilities.rst
===================================================

.. _responsibilities:

================
Responsibilities
================

As contributors to the CPython project, our shared responsibility is to
collaborate constructively with other contributors, including core developers.
This responsibility covers all forms of contribution, whether that's submitting
patches to the implementation or documentation, reviewing other peoples'
patches, triaging issues on the issue tracker, or discussing design and
development ideas on the core
:ref:`communication channels <communication-channels>`.

Core developers accept key additional responsibilities around the ongoing
management of the project:

* core developers bear the additional responsibility of handling the
  consequences of accepting a change into the code base or documentation.
  That includes reverting or fixing it if it causes problems in the
  Buildbot fleet or someone spots a problem in post-commit review, as well
  as helping out the release manager in resolving any problems found during
  the pre-release testing cycle. While all contributors are free to help out
  with this part of the process, and it is most welcome when they do, the
  actual responsibility rests with the core developer that merged the change
* core developers also bear the primary responsibility for deciding when
  changes proposed on the issue tracker should be escalated to
  the appropriate :ref:`Discourse <communication-discourse>` category
  for wider discussion, as well as suggesting the use of the
  Python Enhancement Proposal process to manage the design and justification
  of complex changes, or changes with a potentially significant impact on
  end users

As a result of the additional responsibilities they accept, core developers
gain the privilege of being able to approve proposed changes, as well as being
able to reject them as inappropriate. Core developers are also able to request
that even already merged changes be escalated to
:ref:`Discourse <communication-discourse>` for further discussion,
and potentially even reverted prior to release.

Becoming a core developer isn't a binary "all-or-nothing" status - CPython
is a large project, and different core developers accept responsibility for
making design and development decisions in different areas (as documented
in the :ref:`experts` and :ref:`developers`).


Communication channels and bug notifications
============================================

Mailing lists have generally been replaced by the
`Discourse forum <https://discuss.python.org/>`_ (``discuss.python.org``).
Refer to the :ref:`mailinglists` and :ref:`communication-discourse` sections
for more information.

If you want notification of new issues, you can use the appropriate GitHub notification
settings for the `python/cpython <https://github.com/python/cpython>`_ repository —
follow the link and click on the :guilabel:`Watch` button to set your notification options.


.. _contributor_agreement:

Sign a contributor agreement
============================

Submitting a `contributor form for Python`_ licenses any code you contribute to
the Python Software Foundation. While you retain the copyright, giving the PSF
the ability to license your code means it can be put under the PSF license so
it can be legally distributed with Python.

This is a very important step! Hopefully you have already submitted a
contributor agreement if you have been submitting patches. But if you have not
done this yet, it is best to do this ASAP, probably before you even do your
first commit so as to not forget. Also do not forget to enter your GitHub
username into your details on the issue tracker.


.. _contributor form for Python: https://www.python.org/psf/contrib/


Pull request merging
====================

Once you have your commit privileges on GitHub you will be able to accept
pull requests on GitHub. You should plan to continue to submit your own
changes through pull requests as if you weren't a core developer to benefit
from various things such as automatic integration testing, but you
can accept your own pull requests if you feel comfortable doing so.


Expectations
============

As a core developer, there are certain things that are expected of you.

First and foremost, be a good person. This might sound melodramatic, but you
are now a member of the Python project and thus represent the project and your
fellow core developers whenever you discuss Python with anyone. We have a
reputation for being a very nice group of people and we would like to keep it
that way.  Core developers responsibilities include following the `PSF Code of
Conduct`_.

Second, please be prompt in responding to questions. Many contributors to Python
are volunteers so what little free time they can dedicate to Python should be
spent being productive. If you have been asked to respond to an issue or answer
a question and you put it off it ends up stalling other people's work. It is
completely acceptable to say you are too busy, but you need to say that instead
of leaving people waiting for an answer. This also applies to anything you
do on the issue tracker.

Third, please list what areas you want to be considered an expert in the
:ref:`experts`. This allows triagers to direct issues to you which involve
an area you are an expert in. But, as stated in the second point above, if you
do not have the time to answer questions promptly then please remove yourself as
needed from the file so that you will not be bothered in the future. Once again,
we all understand how life gets in the way, so no one will be insulted if you
remove yourself from the list.

Fourth, please consider whether or not you wish to add your name to the
:ref:`motivations` list. Core contributor participation in the list helps the
wider Python community to better appreciate the perspectives currently
represented amongst the core development team, the Python Software Foundation
to better assess the sustainability of current contributions to CPython core
development, and also serves as a referral list for organisations seeking
commercial Python support from the core development community.

And finally, enjoy yourself! Contributing to open source software should be fun
(overall). If you find yourself no longer enjoying the work then either take a
break or figure out what you need to do to make it enjoyable again.

.. _PSF Code of Conduct: https://www.python.org/psf/conduct/


===================================================
/. 🚀 ./core-developers/committing.rst
===================================================

.. _committing:

Accepting pull requests
=======================

.. highlight:: none

This page is a step-by-step guide for core developers who need to assess,
merge, and possibly backport a pull request on the main repository.

Assessing a pull request
------------------------

Before you can accept a pull request, you need to make sure that it is ready
to enter the public source tree. Ask yourself the following questions:

* **Are there ongoing discussions at the issue tracker?**
   Read the linked issue. If there are ongoing discussions, then
   we need to have a resolution there before we can merge the pull request.

* **Was the pull request first made against the appropriate branch?**
   The only branch that receives new features is ``main``, the
   in-development branch. Pull requests should only target bug-fix branches
   if an issue appears in only that version and possibly older versions.

* **Are the changes acceptable?**
   If you want to share your work-in-progress code on a feature or bugfix,
   then you can open a ``WIP``-prefixed pull request, publish patches on
   the `issue tracker`_, or create a public fork of the repository.

* **Do the checks on the pull request show that the test suite passes?**
   Make sure that all of the status checks are passing.

* **Is the patch in a good state?**
   Check :ref:`patch` and :ref:`helptriage` to review what is expected of
   a patch.

* **Does the patch break backwards-compatibility without a strong reason?**
   :ref:`Run the entire test suite <runtests>` to make sure that everything
   still passes. If there is a change to the semantics, then there needs to
   be a strong reason, because it will cause some peoples' code to break.
   If you are unsure if the breakage is worth it, then ask
   on the `Core Development Discourse category
   <https://discuss.python.org/c/core-dev/23>`__.

* **Does documentation need to be updated?**
   If the pull request introduces backwards-incompatible changes (e.g.
   deprecating or removing a feature), then make sure that those changes
   are reflected in the documentation before you merge the pull request.

* **Were appropriate labels added to signify necessary backporting of the pull request?**
   If it is determined that a pull request needs to be
   backported into one or more of the maintenance branches, then a core
   developer can apply the label ``needs backport to X.Y`` to the pull
   request. Once the backport pull request has been created, remove the
   ``needs backport to X.Y`` label from the original pull request. (Only
   core developers and members of the :ref:`Python Triage Team <triage-team>`
   can apply labels to GitHub pull requests).

* **Does the pull request pass a check indicating that the submitter has signed the CLA?**
   Make sure that the contributor has signed a `Contributor
   Licensing Agreement <https://www.python.org/psf/contrib/contrib-form/>`_
   (CLA), unless their change has no possible intellectual property
   associated with it (e.g. fixing a spelling mistake in documentation).
   The `CPython CLA Bot <https://github.com/apps/cpython-cla-bot/>`_
   checks whether the author has signed the CLA, and replies in the PR
   if they haven't. For further questions about the CLA
   process, write to contributors@python.org.

* **Were** ``What's New in Python`` **and** ``Misc/NEWS.d/next`` **updated?**
   If the change is particularly interesting for end users (e.g. new features,
   significant improvements, or backwards-incompatible changes), then an
   entry in the ``What's New in Python`` document (in ``Doc/whatsnew/``) should
   be added as well. Changes that affect only documentation generally do not
   require a ``NEWS`` entry. (See the following section for more information.)

.. _news-entry:
.. _what-s-new-and-news-entries:

Updating NEWS and What's New in Python
--------------------------------------

Almost all changes made to the code base deserve an entry in ``Misc/NEWS.d``.
If the change is particularly interesting for end users (e.g. new features,
significant improvements, or backwards-incompatible changes), then an entry in
the ``What's New in Python`` document (in ``Doc/whatsnew/``) should be added
as well. Changes that affect documentation only generally do not require
a ``NEWS`` entry.

There are two notable exceptions to this general principle, and they
both relate to changes that:

* Already have a ``NEWS`` entry
* Have not yet been included in any formal release (including alpha
  and beta releases)

These are the two exceptions:

#. **If a change is reverted prior to release**, then the corresponding
   entry is simply removed. Otherwise, a new entry must be added noting
   that the change has been reverted (e.g. when a feature is released in
   an alpha and then cut prior to the first beta).

#. **If a change is a fix (or other adjustment) to an earlier unreleased
   change and the original** ``NEWS`` **entry remains valid**, then no additional
   entry is needed.

If a change needs an entry in ``What's New in Python``, then it is very
likely not suitable for including in a maintenance release.

``NEWS`` entries go into the ``Misc/NEWS.d`` directory as individual files. The
``NEWS`` entry can be created by using `blurb-it <https://blurb-it.herokuapp.com/>`_,
or the `blurb <https://pypi.org/project/blurb/>`_ tool and its ``blurb add``
command.

If you are unable to use the tool, then you can create the ``NEWS`` entry file
manually. The ``Misc/NEWS.d`` directory contains a sub-directory named
``next``, which contains various sub-directories representing classifications
for what was affected (e.g. ``Misc/NEWS.d/next/Library`` for changes relating
to the standard library). The file name itself should be in the format
``<datetime>.gh-issue-<issue-number>.<nonce>.rst``:

* ``<datetime>`` is today's date joined with a hyphen (``-``) to your current
  local time, in the ``YYYY-MM-DD-hh-mm-ss`` format (e.g. ``2017-05-27-16-46-23``).
* ``<issue-number>`` is the issue number the change is for (e.g. ``12345``
  for ``gh-issue-12345``).
* ``<nonce>`` is a unique string to guarantee that the file name is
  unique across branches (e.g. ``Yl4gI2``). It is typically six characters
  long, but it can be any length of letters and numbers. Its uniqueness
  can be satisfied by typing random characters on your keyboard.

As a result, a file name can look something like
``Misc/NEWS.d/next/Library/2017-05-27-16-46-23.gh-issue-12345.Yl4gI2.rst``.

The contents of a ``NEWS`` file should be valid reStructuredText. An 80 character
column width should be used. There is no indentation or leading marker in the
file (e.g. ``-``). There is also no need to start the entry with the issue
number since it is part of the file name. You can use
:ref:`inline markups <rest-inline-markup>` too. Here is an example of a ``NEWS``
entry::

   Fix warning message when :func:`os.chdir` fails inside
   :func:`test.support.temp_cwd`. Patch by Chris Jerdonek.

The inline Sphinx roles like ``:func:`` can be used help readers
find more information. You can build HTML and verify that the
link target is appropriate by using :ref:`make html <building-using-make>`.

While Sphinx roles can be beneficial to readers, they are not required.
Inline ````code blocks```` can be used instead.


Working with Git_
-----------------

.. seealso::
   :ref:`gitbootcamp`

As a core developer, you have the ability to push changes to the official
Python repositories, so you need to be careful with your workflow:

* **You should not push new branches to the main repository.**  You can
  still use them in the fork that you use for the development of patches.
  You can also push these branches to a separate public repository
  for maintenance work before it is integrated into the main repository.

* **You should not commit directly into the** ``main`` **branch, or any of the maintenance branches.**
  You should commit against your own feature branch, and then create a
  pull request.

* **For a small change, you can make a quick edit through the GitHub web UI.**
  If you choose to use the web UI, be aware that GitHub will
  create a new branch in the main CPython repository rather than in your fork.
  Delete this newly created branch after it has been merged into the
  ``main`` branch or any of the maintenance branches. To keep the CPython
  repository tidy, remove the new branch within a few days.

Keep a fork of the main repository, since it will allow you to revert all
local changes (even committed ones) if you're not happy with your local
clone.


.. _Git: https://git-scm.com/


.. _committing-active-branches:

Seeing active branches
''''''''''''''''''''''

If you use ``git branch``, then you will see a :ref:`list of branches
<branchstatus>`. The only branch that receives new features is
``main``, the in-development branch. The other branches receive only
bug fixes or security fixes. In almost all cases the fixes should first
originate on ``main`` and then be ported back to older branches.


.. _branch-merge:

Backporting changes to an older version
'''''''''''''''''''''''''''''''''''''''

If it is determined that a pull request needs to be backported into one or
more of the maintenance branches, then a core developer can apply the label
``needs backport to X.Y`` to the pull request.

After the pull request has been merged, miss-islington (bot) will first try to
do the backport automatically. If miss-islington is unable to do it,
then the pull request author or the core developer who merged it should look into
backporting it themselves, using the backport generated by cherry_picker.py_
as a starting point.

You can get the commit hash from the original pull request, or you can use
``git log`` on the ``main`` branch. To display the 10 most recent commit
hashes and their first line of the commit, use the following command::

   git log -10 --oneline

.. _backport-pr-title:

You can prefix the backport pull request with the branch, and reference
the pull request number from ``main``. Here is an example::

   [3.9] gh-12345: Fix the Spam Module (GH-NNNN)

Here "gh-12345" is the GitHub *issue* number, and "GH-NNNN" is the
number of the original *pull request*.
Note that cherry_picker.py_ adds the branch prefix automatically.

Once the backport pull request has been created, remove the
``needs backport to X.Y`` label from the original pull request. (Only
core developers and members of the :ref:`Python Triage Team <triage-team>`
can apply labels to GitHub pull requests).

.. _cherry_picker.py: https://github.com/python/cherry-picker


Reverting a merged pull request
'''''''''''''''''''''''''''''''

To revert a merged pull request, press the ``Revert`` button at the
bottom of the pull request. That will bring up the page to create a
new pull request where the commit can be reverted. It will also create
a new branch on the main CPython repository. Delete the branch once
the pull request has been merged.

Always include the reason for reverting the commit to help others
understand why it was done. The reason should be included as part of
the commit message. Here is an example::

   Revert gh-NNNN: Fix Spam Module (GH-111)

   Reverts python/cpython#111.
   Reason: This commit broke the buildbot.

.. _issue tracker: https://github.com/python/cpython/issues


===================================================
/. 🚀 ./core-developers/experts.rst
===================================================

.. _experts:

=============
Experts index
=============

This document has tables that list Python Modules, Tools, Platforms and
Interest Areas and GitHub names for each item that indicate a maintainer or
an expert in the field.  This list is intended to be used by issue submitters,
issue triage people, and other issue participants to find people to @mention
or add as reviewers to issues and pull requests.  People on this list may be
asked to render final judgment on a feature or bug.  If no active maintainer
is listed for a given module, then questionable changes should be discussed
on the `Core Development Discourse category
<https://discuss.python.org/c/core-dev/23>`__,
while any other issues can and should be decided by any committer.

Developers can choose to follow labels, so if a label that they are
following is added to an issue or pull request, they will be notified
automatically.  The :cpy-file:`.github/CODEOWNERS` file is also used to indicate
maintainers that will be automatically added as reviewers to pull requests.

Unless a name is followed by a '*', you should never assign an issue to
that person.  Names followed by a '*' may be assigned issues involving the
module or topic.

Names followed by a '^' indicate old bugs.python.org usernames, for people
that did not transition to GitHub.

The Platform and Interest Area tables list broader fields in which various
people have expertise.  These people can also be contacted for help,
opinions, and decisions when issues involve their areas.

If a listed maintainer does not respond to requests for comment for an
extended period (three weeks or more), they should be marked as inactive
in this list by placing the word 'inactive' in parenthesis behind their
tracker id.  They are of course free to remove that inactive mark at
any time.

Committers should update these tables as their areas of expertise widen.
New topics may be added to the Interest Area table at will.

The existence of this list is not meant to indicate that these people
*must* be contacted for decisions; it is, rather, a resource to be used
by non-committers to find responsible parties, and by committers who do
not feel qualified to make a decision in a particular context.


Stdlib
======

====================  =============================================
Module                Maintainers
====================  =============================================
__future__
__main__              gvanrossum, ncoghlan
_thread
_testbuffer
abc
aifc                  bitdancer
argparse
array
ast                   benjaminp, pablogsal, isidentical
asyncio               1st1, asvetlov, gvanrossum, graingert, kumaraditya303, willingc
atexit
audioop               serhiy-storchaka
base64
bdb
binascii
bisect                rhettinger*
builtins
bz2
calendar
cgi                   ethanfurman*
cgitb                 ethanfurman*
chunk
cmath                 mdickinson
cmd
code
codecs                malemburg, doerwalter
codeop
collections           rhettinger*
collections.abc       rhettinger*, stutzbach^
colorsys
compileall            carljm
concurrent.futures    pitrou, brianquinlan, gpshead*
configparser          ambv*
contextlib            ncoghlan, 1st1
contextvars
copy                  avassalotti
copyreg               avassalotti
cProfile
crypt                 jafo^*
csv                   smontanaro (inactive)
ctypes                theller (inactive), abalkin, amauryfa, meadori
curses                Yhg1s
dataclasses           ericvsmith*, carljm
datetime              abalkin, pganssle
dbm
decimal               facundobatista, rhettinger, mdickinson
difflib               tim-one (inactive)
dis                   1st1
doctest               tim-one (inactive)
email                 warsaw, bitdancer*, maxking
encodings             malemburg
ensurepip             ncoghlan, dstufft, pradyunsg
enum                  eliben*, warsaw, ethanfurman*
errno                 Yhg1s
faulthandler          vstinner, gpshead
fcntl                 Yhg1s
filecmp
fileinput
fnmatch
fractions             mdickinson
ftplib                giampaolo*
functools             rhettinger*
gc                    pitrou, pablogsal
getopt
getpass
gettext
glob
grp
gzip
hashlib               tiran, gpshead*
heapq                 rhettinger*, stutzbach^
hmac                  tiran, gpshead*
html                  ezio-melotti*
http
idlelib               kbkaiser (inactive), terryjreedy*, serwy (inactive),
                      taleinat
imaplib
imghdr
importlib             brettcannon
inspect               1st1
io                    benjaminp, stutzbach^
ipaddress             pmoody^
itertools             rhettinger*
json                  etrepum (inactive), ezio-melotti, rhettinger
keyword
lib2to3               benjaminp
libmpdec
linecache
locale                malemburg
logging               vsajip
lzma
mailbox
mailcap
marshal
math                  mdickinson, rhettinger, stutzbach^
mimetypes
mmap                  Yhg1s
modulefinder          theller (inactive), jvr^
msilib
msvcrt
multiprocessing       applio*, pitrou, jnoller^ (inactive), sbt^ (inactive), gpshead*
netrc
nis
nntplib
numbers
operator
optparse              mitsuhiko
os
os.path               serhiy-storchaka
ossaudiodev
parser                pablogsal
pathlib               barneygale*
pdb
pickle                avassalotti
pickletools           avassalotti
pipes
pkgutil
platform              malemburg
plistlib
poplib
posix                 larryhastings, gpshead
pprint                freddrake
profile
pstats
pty                   Yhg1s*
pwd
py_compile            carljm
pyclbr                isidentical
pydoc                 AA-Turner
queue                 rhettinger*
quopri
random                rhettinger, mdickinson
re                    ezio-melotti, serhiy-storchaka
readline              Yhg1s
reprlib
resource              Yhg1s
rlcompleter
runpy                 ncoghlan
sched
secrets
select
selectors             neologix^, giampaolo
shelve
shlex
shutil                tarekziade, giampaolo
signal                gpshead
site
smtplib
sndhdr
socket                gpshead
socketserver
spwd
sqlite3               ghaering^, erlend-aasland*
ssl                   jackjansen, tiran, dstufft, alex
stat                  tiran
statistics            stevendaprano, rhettinger
string
stringprep
struct                mdickinson, meadori
subprocess            astrand^ (inactive), giampaolo, gpshead*
sunau
symtable              benjaminp
sys
sysconfig             FFY00
syslog                jafo^*
tabnanny              tim-one (inactive)
tarfile               gustaebel
telnetlib
tempfile
termios               Yhg1s
test                  ezio-melotti
textwrap
threading             pitrou, gpshead
time                  abalkin, pganssle
timeit
tkinter               gpolo^, serhiy-storchaka
token
tokenize              meadori
tomllib               hauntsaninja*
trace                 abalkin
traceback             iritkatriel
tracemalloc           vstinner
tty                   Yhg1s*
turtle                gregorlingl^, willingc
types                 1st1
typing                gvanrossum, JelleZijlstra*, AlexWaygood*, carljm
unicodedata           malemburg, ezio-melotti
unittest              voidspace*, ezio-melotti, rbtcollins, gpshead
unittest.mock         voidspace*
urllib                orsenthil
uu
uuid
venv                  vsajip
warnings
wave
weakref               freddrake
webbrowser
winreg                stutzbach^
winsound
wsgiref               pjenvey
xdrlib
xml.dom
xml.dom.minidom
xml.dom.pulldom
xml.etree             eliben*, scoder
xml.parsers.expat
xml.sax
xml.sax.handler
xml.sax.saxutils
xml.sax.xmlreader
xmlrpc
zipapp                pfmoore
zipfile               alanmcintyre^, serhiy-storchaka, Yhg1s, gpshead
zipimport             Yhg1s*
zlib                  Yhg1s, gpshead*
====================  =============================================


Tools
=====

==================  ===========
Tool                Maintainers
==================  ===========
Argument Clinic     larryhastings
Deepfreeze          gvanrossum, kumaraditya303
PEG Generator       gvanrossum, pablogsal, lysnikolaou
==================  ===========


Platforms
=========

===================   ===========
Platform              Maintainers
===================   ===========
AIX                   David.Edelsohn^
Android
Cygwin                jlt63^, stutzbach^
FreeBSD
HP-UX
Linux
macOS                 ronaldoussoren, ned-deily
NetBSD1
OS2/EMX               aimacintyre^
Solaris/OpenIndiana   jcea
Windows               tjguk, zware, zooba, pfmoore
JVM/Java              frank.wierzbicki^
===================   ===========


Miscellaneous
=============

==================  ==========================================================
Interest Area       Maintainers
==================  ==========================================================
algorithms          rhettinger*
argument clinic     larryhastings
ast/compiler        benjaminp, 1st1, pablogsal, markshannon, isidentical, brandtbucher, carljm, iritkatriel
autoconf/makefiles  Yhg1s*
bsd
issue tracker       ezio-melotti
buildbots           zware, pablogsal
bytecode            benjaminp, 1st1, markshannon, brandtbucher, carljm, iritkatriel
context managers    ncoghlan
core workflow       Mariatta, ezio-melotti, hugovk, AA-Turner
coverity scan       tiran, Yhg1s
cryptography        gpshead, dstufft
data formats        mdickinson
database            malemburg
devguide            merwok, ezio-melotti, willingc, Mariatta, hugovk,
                    AA-Turner
documentation       ezio-melotti, merwok, JulienPalard, willingc, hugovk,
                    AA-Turner
emoji               Mariatta
extension modules   encukou, ncoghlan
filesystem          giampaolo
frozen modules      ericsnowcurrently, gvanrossum, kumaraditya303
f-strings           ericvsmith*
GUI
i18n                malemburg, merwok
import machinery    brettcannon, ncoghlan, ericsnowcurrently
io                  benjaminp, stutzbach^, gpshead
locale              malemburg
mathematics         mdickinson, malemburg, stutzbach^, rhettinger
memory management   tim-one, malemburg, Yhg1s
memoryview
networking          giampaolo, gpshead
object model        benjaminp, Yhg1s
packaging           tarekziade, malemburg, alexis^, merwok, dstufft, pfmoore
pattern matching    brandtbucher*
peg parser          gvanrossum, pablogsal, lysnikolaou
performance         vstinner, serhiy-storchaka, 1st1, rhettinger, markshannon, brandtbucher, carljm, Fidget-Spinner
pip                 ncoghlan, dstufft, pfmoore, Marcus.Smith^, pradyunsg
py3 transition      benjaminp
release management  tarekziade, malemburg, benjaminp, warsaw,
                    gvanrossum, anthonybaxter^, merwok, ned-deily,
                    birkenfeld, JulienPalard
runtime lifecycle   ericsnowcurrently, kumaraditya303, zooba
str.format          ericvsmith*
subinterpreters     ericsnowcurrently, kumaraditya303
testing             voidspace, ezio-melotti
test coverage
threads             gpshead
time and dates      malemburg, abalkin, pganssle
unicode             malemburg, ezio-melotti, benjaminp
version control     merwok, ezio-melotti
==================  ==========================================================


Documentation translations
==========================

For a list of translators, see :ref:`this table about translations <translating>`.


===================================================
/. 🚀 ./core-developers/developer-log.rst
===================================================

.. _developer-log:
.. _developers:

Developer log
=============

This page lists the historical members of the Python development team. (The
master list is kept in a private repository due to containing sensitive contact
information.)

.. csv-table::
   :header: "Name", "GitHub username", "Joined", "Left", "Notes"
   :file: developers.csv
   :encoding: "utf-8"

Procedure for granting or dropping access
-----------------------------------------

To be granted the ability to manage who is a committer, you must be a
team maintainer of the `Python core team`_ on GitHub. Once you have
that privilege you can add people to the team. They will be asked to
accept the membership which they can do by visiting
https://github.com/python and clicking on the appropriate button that
will be displayed to them in the upper part of the page.

.. _Python core team: https://github.com/orgs/python/teams/python-core


===================================================
/. 🚀 ./core-developers/motivations.rst
===================================================

.. _motivations:

============================
Motivations and affiliations
============================

CPython core developers participate in the core development process for a
variety of reasons. Being accepted as a core developer indicates that
an individual is interested in acquiring those responsibilities, has the
ability to collaborate effectively with existing core developers, and has had
the time available to demonstrate both that interest and that ability.

This page allows core developers that choose to do so to provide more
information to the rest of the Python community regarding their personal
situation (such as their general location and professional affiliations), as
well as any personal motivations that they consider particularly relevant.

Core developers that wish to provide this additional information add a new
entry to the :ref:`published-motivations` section below. Guidelines relating
to content and layout are included as comments in the source code for this page.

Core developers that are available for training, consulting, contract, or
full-time work, or are seeking crowdfunding support for their community
contributions, may also choose to provide that information here (including
linking out to commercial sites with the relevant details).

For more information on the origins and purpose of this page, see
:ref:`goals-of-the-motivations-page`.

.. _published-motivations:

Published entries
=================

The following core developers have chosen to provide additional details
regarding their professional affiliations and (optionally) other reasons for
participating in the CPython core development process:

.. Entry guidelines:

   We use the "topic" directive rather than normal section headings in order to
   avoid creating entries in the main table of contents.

   Topic headings should be in the form of "Name (Country)" or
   "Name (Continent)" to help give some indication as to the geographic
   distribution of core developers.

   NOTE: The rest of these guidelines are highly provisional - we can evolve
   them as people add entries, and we decide on the style we like. The
   current iteration is based on feedback that the first version (which
   *required* coming up with a personal bio) was a bit excessive.

   Minimal entries just include relevant professional affiliations, as follows:

   .. topic:: <name> (<country/continent>)

      * <company> (<role>)

   Longer entries should be written as short third person biographies, rather
   than being written in first person (See existing entries for examples).

   Entries should be maintained in alphabetical order by last name, or by
   name-as-written (relative to other last names) if "last name" isn't a
   meaningful term for your name.

   Include a "Personal site" bullet point with a link if you'd like to highlight
   a personal blog or other site.

   Include an "Extended bio" bullet point with a link if you'd like to provide
   more than a couple of paragraphs of biographical information. (Use a
   double-trailing underscore on these links to avoid "Duplicate explicit
   target name" warnings from Sphinx/docutils)

   Include an "Available for <activity>" (or activities) bullet point with a
   link if you'd like to be contacted for professional training, consulting or
   contract work, or other employment opportunities. A link to a page with
   additional details is preferred to a direct email address or contact phone
   number, as this is a global site, and folks may not be familiar with the
   relevant practical details that apply to this kind of work in a contributor's
   country of residence.

   Include a "Crowdfunding" bullet point with a link if you'd like to highlight
   crowdfunding services (e.g. Patreon) that folks can use to support your core
   development work.

   Include additional bullet points (without links) for any other affiliations
   you would like to mention.

   If there's a kind of link you'd like to include in your entry that isn't
   already covered by the categories mentioned above, please start a discussion
   about that on the Committers category on the Python Discourse
   (discuss.python.org).

   The Committers Discourse category
   is also the appropriate point of contact for any other
   questions or suggestions relating to this page.

.. topic:: Brett Cannon (Canada)

   * Personal site: `snarky.ca <https://snarky.ca/>`_
   * Microsoft (Software Developer)
   * Python Software Foundation (Fellow)

.. topic:: Alyssa Coghlan (Australia)

   * Personal site: `Curious Efficiency <https://www.curiousefficiency.org/>`_
   * `Extended bio <https://www.curiousefficiency.org/pages/about>`__
   * Python Software Foundation (Fellow, Packaging Working Group)

   Alyssa began using Python as a testing and prototyping language while working
   for Boeing Defence Australia, and continues to use it for that purpose today.

   As a core developer, she is primarily interested in helping to ensure Python's
   continued suitability for educational, testing and data analysis use cases,
   as well as in encouraging good architectural practices when assembling Python
   applications and test harnesses from open source components.

   Note: prior to August 2023, Alyssa used her birth name (Nick Coghlan). Some records
   (e.g. mailing list archives, version control history) will still reference that name.

.. topic:: Steve Dower (United States/Australia)

   * Microsoft (Software Developer)
   * Personal site: `stevedower.id.au <https://stevedower.id.au/>`_
   * Speaking: `stevedower.id.au/speaking <https://stevedower.id.au/speaking>`_
   * Work blog: `devblogs.microsoft.com/python/ <https://devblogs.microsoft.com/python/>`_
   * Email address: steve.dower@python.org

   Steve started with Python while automating a test harness for medical
   devices, and now works for Microsoft on anything that makes Python more
   accessible to developers on any platform.

   As a core developer, his focus is on maintaining the already excellent
   Windows support and improving Python's ability to be embedded in other
   applications.

.. topic:: Christian Heimes (Germany)

   * Red Hat (Software Developer, Security Engineering / Identity Management)
   * Python Software Foundation (Fellow)

.. topic:: Mariatta (Canada)

   * Personal site: `mariatta.ca <https://mariatta.ca>`_
   * Works as a `Software Engineer <https://www.linkedin.com/in/mariatta/>`_
     in Vancouver, helps organize `Vancouver PyLadies
     <https://www.meetup.com/PyLadies-Vancouver/>`_ meetup on the side, and
     sometimes `speaks <https://mariatta.ca/pages/talk-chronology.html#talk-chronology>`_
     at conferences.
   * Email address: mariatta@python.org
   * `Sponsor Mariatta on GitHub <https://github.com/sponsors/Mariatta>`_
   * `Patreon <https://www.patreon.com/Mariatta>`_

   Support Mariatta by `becoming a sponsor <https://github.com/sponsors/Mariatta>`_,
   sending her a `happiness packet <https://www.happinesspackets.io/send/>`_,
   or `paypal <https://www.paypal.com/paypalme/mariatta>`_.

.. topic:: R. David Murray (United States)

   * Personal site: `bitdance.com <http://www.bitdance.com>`_
   * Available for `Python and Internet Services Consulting
     and Python contract programming <https://www.murrayandwalker.com/>`_

   David has been involved in the Internet since the days when the old IBM
   BITNET and the ARPANet got cross connected, and in Python programming since
   he first discovered it around the days of Python 1.4.  After transitioning
   from being Director of Operations for dialup Internet providers (when that
   business started declining) to being a full time independent consultant,
   David started contributing directly to CPython development.  He became a
   committer in 2009.  He subsequently took over primary maintenance of the
   email package from Barry Warsaw, and contributed the Unicode oriented API.
   David is also active in mentoring new contributors and, when time is
   available, working on the infrastructure that supports CPython development,
   specifically the Roundup-based bug tracker and the buildbot system.

   David currently does both proprietary and open source development work,
   primarily in Python, through the company in which he is a partner, `Murray &
   Walker, Inc <https://www.murrayandwalker.com>`_.  He has done contract work
   focused specifically on CPython development both through the PSF (the
   kickstart of the email Unicode API development) and directly funded by
   interested corporations (additional development work on email funded by
   QNX, and work on CPython ICC support funded by Intel).  He would like to
   spend more of his (and his company's) time on open source work, and so is
   actively seeking additional such contract opportunities.

.. topic:: Antoine Pitrou (France)

   * LinkedIn: `<https://www.linkedin.com/in/pitrou/>`_ (Senior Software Engineer)
   * Voltron Data
   * Python Software Foundation (Fellow)
   * Email address: antoine@python.org

   Antoine started working with Python in 2005 in order to implement a
   decentralized virtual world protocol.  He started contributing to CPython
   in 2007 and became a core developer in 2008.  His motivations have been
   driven both by the abstract desire to make Python better for the whole
   world, and by the concrete roadblocks he was hitting in professional
   settings.  Topics of choice have included interpreter optimizations,
   garbage collection, network programming, system programming and
   concurrent programming (such as maintaining ``multiprocessing``).

   As a professional, Antoine has been first specializing in network
   programming, and more lately in open source data science infrastructure.
   He is currently working full time on Apache Arrow as a technical leader
   for Voltron Data.

.. topic:: Victor Stinner (France)

   * `Personal website <https://vstinner.readthedocs.io/>`__
   * Red Hat (Senior Software Engineer)

   Victor is paid by Red Hat to maintain Python upstream and downstream (RHEL,
   CentOS, Fedora & Software collections). See `Victor's contributions to
   Python <https://vstinner.readthedocs.io/python_contrib.html>`_.

.. topic:: Kushal Das (India)

   * `Personal website <https://kushaldas.in>`__
   * `Freedom of the Press Foundation <https://freedom.press>`__ (Staff)
   * Python Software Foundation (Fellow)

.. topic:: Barry Warsaw (United States)

   * `LinkedIn: <https://www.linkedin.com/in/barry-warsaw/>`_ (Senior Staff
     Software Engineer - Python Foundation team)
   * Personal site: `barry.warsaw.us <https://barry.warsaw.us/>`_
   * Blog: `We Fear Change <https://www.wefearchange.org/>`_
   * Email address: barry@python.org
   * Python Software Foundation (Fellow)

   Barry has been working in, with, and on Python since 1994.  He attended the
   first Python workshop at NBS (now `NIST <https://www.nist.gov/>`_) in
   Gaithersburg, MD in 1994, where he met Guido and several other early Python
   adopters.  Barry subsequently worked with Guido for 8 years while at `CNRI
   <http://cnri.reston.va.us/>`_.  From 2007 until 2017, Barry worked for
   `Canonical <https://canonical.com/>`_, corporate sponsor of `Ubuntu
   <https://ubuntu.com/>`_ Linux, primarily on the Python ecosystem, and
   is both an Ubuntu and a `Debian <https://www.debian.org/>`_ uploading
   developer.  Barry has served as Python's postmaster, webmaster, release
   manager, Language Summit co-chair, `Jython <https://www.jython.org/>`_
   project leader, `GNU Mailman <http://www.list.org/>`_ project leader, and
   probably lots of other things he shouldn't admit to.

.. topic:: Eric Snow (United States)

   * Microsoft (Software Developer)
   * Python Software Foundation (Fellow)

.. topic:: Dino Viehland (United States)

   * Meta (Software Engineer)
   * Email address: dinoviehland@gmail.com

   Dino started working with Python in 2005 by working on IronPython, an
   implementation of Python running on .NET.  He was one of the primary
   developers on the project for 6 years.  After that he started the Python
   Tools for Visual Studio project focusing on providing advanced code completion
   and debugging features for Python.  Today he works on
   `Cinder <https://github.com/facebookincubator/cinder/>`_ improving Python
   performance for Instagram.

.. topic:: Carol Willing (United States)

   * Noteable: `<https://noteable.io/about-us/>`__ (VP Engineering)
   * Personal site: `Willing Consulting <https://www.willingconsulting.com/>`_
   * `Extended bio <https://www.willingconsulting.com/about/>`__
   * Project Jupyter (Software Council, Core Team for JupyterHub/Binder)
   * Python Software Foundation (Fellow)

   Carol is focused on Python's usage in education and scientific research.
   She is interested in distributed computing, organizational development,
   operational workflows, and sustainability of open source projects.


.. _goals-of-the-motivations-page:

Goals of this page
==================

The `issue metrics`_ automatically collected by the CPython issue tracker
strongly suggest that the current core development process is bottlenecked on
core developer time - this is most clearly indicated in the first metrics graph,
which shows both the number of open issues and the number of patches awaiting
review growing steadily over time, despite CPython being one of the most
active open source projects in the world. This bottleneck then impacts not only
resolving open issues and applying submitted patches, but also the process of
identifying, nominating and mentoring new core developers.

The core commit statistics monitored by sites like `OpenHub`_ provide a good
record as to *who* is currently handling the bulk of the review and maintenance
work, but don't provide any indication as to the factors currently influencing
people's ability to spend time on reviewing proposed changes, or mentoring new
contributors.

This page aims to provide at least some of that missing data by encouraging
core developers to highlight professional affiliations in the following two
cases (even if not currently paid for time spent participating in the core
development process):

* developers working for vendors that distribute a commercially supported
  Python runtime
* developers working for Sponsor Members of the Python Software Foundation

These are cases where documenting our affiliations helps to improve the
overall transparency of the core development process, as well as making it
easier for staff at these organisations to locate colleagues that can help
them to participate in and contribute effectively to supporting the core
development process.

Core developers working for organisations with a vested interest in the
sustainability of the CPython core development process are also encouraged to
seek opportunities to spend work time on mentoring potential new core
developers, whether through the general `core mentorship program`_, through
mentoring colleagues, or through more targeted efforts like Outreachy's paid
`internships`_ and Google's `Summer of Code`_.

Core developers that are available for consulting or contract work on behalf of
the Python Software Foundation or other organisations are also encouraged
to provide that information here, as this will help the PSF to better
facilitate funding of core development work by organisations that don't
directly employ any core developers themselves.

Finally, some core developers seeking to increase the time they have available
to contribute to CPython may wish to pursue crowdfunding efforts that allow
their contributions to be funded directly by the community, rather than relying
on institutional sponsors allowing them to spend some or all of their work
time contributing to CPython development.

.. _issue metrics: https://bugs.python.org/issue?@template=stats
.. _OpenHub: https://www.openhub.net/p/python/contributors
.. _core mentorship program: https://www.python.org/dev/core-mentorship/
.. _internships: https://www.outreachy.org/
.. _Summer of Code: https://wiki.python.org/moin/SummerOfCode/2016


Limitations on scope
====================

* Specific technical areas of interest for core developers should be captured in
  the :ref:`Experts Index <experts>`.

* This specific listing is limited to CPython core developers (since it's
  focused on the specific constraint that is core developer time), but it
  would be possible to create a more expansive listing on the Python wiki that
  also covers issue triagers, and folks seeking to become core developers.

* Changes to the software and documentation maintained by core developers,
  together with related design discussions, all take place in public venues, and
  hence are inherently subject to full public review. Accordingly, core
  developers are NOT required to publish their motivations and affiliations if
  they do not choose to do so. This helps to ensure that core contribution
  processes remain open to anyone that is in a position to sign the `Contributor
  Licensing Agreement`_, the details of which are filed privately with the
  Python Software Foundation, rather than publicly.

.. _Contributor Licensing Agreement: https://www.python.org/psf/contrib/contrib-form/


===================================================
/. 🚀 ./core-developers/become-core-developer.rst
===================================================

.. _become-core-developer:
.. _coredev:

==============================
How to become a core developer
==============================

What it takes
=============

When you have consistently contributed patches which meet quality standards
without requiring extensive rewrites prior to being committed,
you may qualify for commit privileges and become a core developer of Python.
You must also work well with other core developers (and people in general)
as you become an ambassador for the Python project.

Typically a core developer will offer you the chance to gain commit privilege.
The person making the offer will become your mentor and watch your commits for
a while to make sure you understand the development process. If other core
developers agree that you should gain commit privileges you are then extended
an official offer. How core developers come to that agreement are outlined in
:pep:`13`.


Gaining commit privileges
=========================

After a candidate has demonstrated consistent contributions, commit privileges
are granted through these steps:

#. A core developer (submitter, usually the mentor) starts a poll in the
   `Committers category`_ on the `Python Discourse`_.

   - open for 7 days
   - results shown upon close

#. If the candidate receives at least two-thirds positive votes when the poll closes
   (as per :pep:`13`), the submitter `emails the steering council
   <mailto:steering-council@python.org>`_ with the candidate's email address
   requesting that the council either accept or reject the proposed membership.

#. Assuming the steering council does not object, a member of the council or delegate
   (approver) will email the candidate:

   - A request for account details as required by
     `🔒 python/voters <https://github.com/python/voters>`_.
   - A reminder about the `Code of Conduct`_ and guidance on reporting issues
     to the PSF Conduct WG.

#. Once the candidate has provided the pertinent details, the approver will:

   - Enable the various new privileges.
   - Remove the new committer from the triage team, if applicable.
   - Add their details to `🔒 python/voters <https://github.com/python/voters>`_.
   - Update the devguide to publicly list their team membership
     at :ref:`developers`.
   - Send an announcement email to the `Committers Discourse category
     <https://discuss.python.org/c/committers/5>`_.

.. _Code of Conduct: https://www.python.org/psf/conduct/
.. _Committers category: https://discuss.python.org/c/committers/5
.. _Python Discourse: https://discuss.python.org


===================================================
/. 🚀 ./internals/index.rst
===================================================

===================
CPython's internals
===================

This guide describes the basics of CPython's internals.
It explains the layout of CPython's source code.
It also explains how the parser, compiler, and interpreter
work together to run your Python code.
Finally, it covers the garbage collector and how it manages memory.

.. toctree::
   :maxdepth: 3

   exploring
   parser
   compiler
   interpreter
   garbage-collector


===================================================
/. 🚀 ./internals/exploring.rst
===================================================

.. _exploring:

===================
CPython source code
===================

This section gives an overview of CPython's code structure and provides
a summary of file locations for modules and built-ins.


Source code layout
==================

For a Python :term:`module`, the typical layout is:

* :file:`Lib/{<module>}.py`
* :file:`Modules/_{<module>}.c` (if there's also a C accelerator module)
* :file:`Lib/test/test_{<module>}.py`
* :file:`Doc/library/{<module>}.rst`

For an :term:`extension module`, the typical layout is:

* :file:`Modules/{<module>}module.c`
* :file:`Lib/test/test_{<module>}.py`
* :file:`Doc/library/{<module>}.rst`

For :ref:`bltin-types`, the typical layout is:

* :file:`Objects/{<builtin>}object.c`
* :file:`Lib/test/test_{<builtin>}.py`
* :cpy-file:`Doc/library/stdtypes.rst`

For :ref:`built-in-funcs`, the typical layout is:

* :cpy-file:`Python/bltinmodule.c`
* :cpy-file:`Lib/test/test_builtin.py`
* :cpy-file:`Doc/library/functions.rst`

Some exceptions to these layouts are:

* built-in type ``int`` is at :cpy-file:`Objects/longobject.c`
* built-in type ``str`` is at :cpy-file:`Objects/unicodeobject.c`
* built-in module ``sys`` is at :cpy-file:`Python/sysmodule.c`
* built-in module ``marshal`` is at :cpy-file:`Python/marshal.c`
* Windows-only module ``winreg`` is at :cpy-file:`PC/winreg.c`


Additional references
=====================

The CPython code base is constantly changing and evolving.
Here's a sample of references about CPython's architecture aimed at
building your understanding of CPython internals and its evolution:

.. csv-table:: **Current references**
   :header: "Title", "Brief", "Author", "Version"
   :widths: 50, 50, 20, 5

    "`A guide from parser to objects, observed using GDB`_", "Code walk from Parser, AST, Sym Table and Objects", Louie Lu, 3.7.a0
    "`Green Tree Snakes`_", "The missing Python AST docs", Thomas Kluyver, 3.6
    "`Yet another guided tour of CPython`_", "A guide for how CPython REPL works", Guido van Rossum, 3.5
    "`Python Asynchronous I/O Walkthrough`_", "How CPython async I/O, generator and coroutine works", Philip Guo, 3.5
    "`Coding Patterns for Python Extensions`_", "Reliable patterns of coding Python Extensions in C", Paul Ross, 3.4
    "`Your Guide to the CPython Source Code`_", "Your Guide to the CPython Source Code", Anthony Shaw, 3.8

.. csv-table:: **Historical references**
   :header: "Title", "Brief", "Author", "Version"
   :widths: 50, 50, 20, 5

    "`Python's Innards Series`_", "ceval, objects, pystate and miscellaneous topics", Yaniv Aknin, 3.1
    "`Eli Bendersky's Python Internals`_", "Objects, Symbol tables and miscellaneous topics", Eli Bendersky, 3.x
    "`A guide from parser to objects, observed using Eclipse`_", "Code walk from Parser, AST, Sym Table and Objects", Prashanth Raghu, 2.7.12
    "`CPython internals: A ten-hour codewalk through the Python interpreter source code`_", "Code walk from source code to generators", Philip Guo, 2.7.8


.. _A guide from parser to objects, observed using GDB: https://hackmd.io/s/ByMHBMjFe

.. _Green Tree Snakes: https://greentreesnakes.readthedocs.io/en/latest/

.. _Yet another guided tour of CPython: https://paper.dropbox.com/doc/Yet-another-guided-tour-of-CPython-XY7KgFGn88zMNivGJ4Jzv

.. _Python Asynchronous I/O Walkthrough: https://www.youtube.com/playlist?list=PLpEcQSRWP2IjVRlTUptdD05kG-UkJynQT

.. _Coding Patterns for Python Extensions: https://pythonextensionpatterns.readthedocs.io/en/latest/

.. _Your Guide to the CPython Source Code: https://realpython.com/cpython-source-code-guide/

.. _Python's Innards Series: https://tech.blog.aknin.name/category/my-projects/pythons-innards/

.. _Eli Bendersky's Python Internals: https://eli.thegreenplace.net/tag/python-internals

.. _A guide from parser to objects, observed using Eclipse: https://docs.google.com/document/d/1nzNN1jeNCC_bg1LADCvtTuGKvcyMskV1w8Ad2iLlwoI/

.. _CPython internals\: A ten-hour codewalk through the Python interpreter source code: https://www.youtube.com/playlist?list=PLzV58Zm8FuBL6OAv1Yu6AwXZrnsFbbR0S


===================================================
/. 🚀 ./internals/parser.rst
===================================================

.. _parser:

===================
Guide to the parser
===================

.. highlight:: none

Abstract
========

The Parser in CPython is currently a `PEG (Parser Expression Grammar)
<https://en.wikipedia.org/wiki/Parsing_expression_grammar>`_ parser.  The first
version of the parser used to be an `LL(1)
<https://en.wikipedia.org/wiki/LL_parser>`_ based parser that was one of the
oldest parts of CPython implemented before it was replaced by :pep:`617`. In
particular, both the current parser and the old LL(1) parser are the output of a
`parser generator <https://en.wikipedia.org/wiki/Compiler-compiler>`_. This
means that the way the parser is written is by feeding a description of the
Grammar of the Python language to a special program (the parser generator) which
outputs the parser. The way the Python language is changed is therefore by
modifying the grammar file and developers rarely need to interact with the
parser generator itself other than use it to generate the parser.

How PEG parsers work
====================

.. _how-peg-parsers-work:

A PEG (Parsing Expression Grammar) grammar (like the current one) differs from a
context-free grammar in that the way it is written more closely
reflects how the parser will operate when parsing it. The fundamental technical
difference is that the choice operator is ordered. This means that when writing::

  rule: A | B | C

a context-free-grammar parser (like an LL(1) parser) will generate constructions
that given an input string will *deduce* which alternative (``A``, ``B`` or ``C``)
must be expanded, while a PEG parser will check if the first alternative succeeds
and only if it fails, will it continue with the second or the third one in the
order in which they are written. This makes the choice operator not commutative.

Unlike LL(1) parsers, PEG-based parsers cannot be ambiguous: if a string parses,
it has exactly one valid parse tree. This means that a PEG-based parser cannot
suffer from the ambiguity problems that can arise with LL(1) parsers and with
context-free grammars in general.

PEG parsers are usually constructed as a recursive descent parser in which every
rule in the grammar corresponds to a function in the program implementing the
parser and the parsing expression (the "expansion" or "definition" of the rule)
represents the "code" in said function. Each parsing function conceptually takes
an input string as its argument, and yields one of the following results:

* A "success" result. This result indicates that the expression can be parsed by
  that rule and the function may optionally move forward or consume one or more
  characters of the input string supplied to it.
* A "failure" result, in which case no input is consumed.

Notice that "failure" results do not imply that the program is incorrect, nor do
they necessarily mean that the parsing has failed. Since the choice operator is
ordered, a failure very often merely indicates "try the following option".  A
direct implementation of a PEG parser as a recursive descent parser will present
exponential time performance in the worst case, because PEG parsers have
infinite lookahead (this means that they can consider an arbitrary number of
tokens before deciding for a rule).  Usually, PEG parsers avoid this exponential
time complexity with a technique called "packrat parsing" [1]_ which not only
loads the entire program in memory before parsing it but also allows the parser
to backtrack arbitrarily. This is made efficient by memoizing the rules already
matched for each position. The cost of the memoization cache is that the parser
will naturally use more memory than a simple LL(1) parser, which normally are
table-based.


Key ideas
---------

.. important::
    Don't try to reason about a PEG grammar in the same way you would to with an EBNF
    or context free grammar. PEG is optimized to describe **how** input strings will
    be parsed, while context-free grammars are optimized to generate strings of the
    language they describe (in EBNF, to know if a given string is in the language, you need
    to do work to find out as it is not immediately obvious from the grammar).

* Alternatives are ordered ( ``A | B`` is not the same as ``B | A`` ).
* If a rule returns a failure, it doesn't mean that the parsing has failed,
  it just means "try something else".
* By default PEG parsers run in exponential time, which can be optimized to linear by
  using memoization.
* If parsing fails completely (no rule succeeds in parsing all the input text), the
  PEG parser doesn't have a concept of "where the :exc:`SyntaxError` is".


.. _consequences-of-ordered-choice:

Consequences of the ordered choice operator
-------------------------------------------

Although PEG may look like EBNF, its meaning is quite different. The fact
that in PEG parsers alternatives are ordered (which is at the core of how PEG
parsers work) has deep consequences, other than removing ambiguity.

If a rule has two alternatives and the first of them succeeds, the second one is
**not** attempted even if the caller rule fails to parse the rest of the input.
Thus the parser is said to be "eager". To illustrate this, consider
the following two rules (in these examples, a token is an individual character): ::

    first_rule:  ( 'a' | 'aa' ) 'a'
    second_rule: ('aa' | 'a'  ) 'a'

In a regular EBNF grammar, both rules specify the language ``{aa, aaa}`` but
in PEG, one of these two rules accepts the string ``aaa`` but not the string
``aa``. The other does the opposite -- it accepts the string ``aa``
but not the string ``aaa``. The rule ``('a'|'aa')'a'`` does
not accept ``aaa`` because ``'a'|'aa'`` consumes the first ``a``, letting the
final ``a`` in the rule consume the second, and leaving out the third ``a``.
As the rule has succeeded, no attempt is ever made to go back and let
``'a'|'aa'`` try the second alternative. The expression ``('aa'|'a')'a'`` does
not accept ``aa`` because ``'aa'|'a'`` accepts all of ``aa``, leaving nothing
for the final ``a``. Again, the second alternative of ``'aa'|'a'`` is not
tried.

.. caution::

    The effects of ordered choice, such as the ones illustrated above, may be hidden by many levels of rules.

For this reason, writing rules where an alternative is contained in the next one is in almost all cases a mistake,
for example: ::

    my_rule:
        | 'if' expression 'then' block
        | 'if' expression 'then' block 'else' block

In this example, the second alternative will never be tried because the first one will
succeed first (even if the input string has an ``'else' block`` that follows). To correctly
write this rule you can simply alter the order: ::

    my_rule:
        | 'if' expression 'then' block 'else' block
        | 'if' expression 'then' block

In this case, if the input string doesn't have an ``'else' block``, the first alternative
will fail and the second will be attempted without said part.

Syntax
======

The grammar consists of a sequence of rules of the form: ::

    rule_name: expression

Optionally, a type can be included right after the rule name, which
specifies the return type of the C or Python function corresponding to
the rule: ::

    rule_name[return_type]: expression

If the return type is omitted, then a ``void *`` is returned in C and an
``Any`` in Python.

Grammar expressions
-------------------

``# comment``
'''''''''''''

Python-style comments.

``e1 e2``
'''''''''

Match ``e1``, then match ``e2``.

::

    rule_name: first_rule second_rule

``e1 | e2``
'''''''''''

Match ``e1`` or ``e2``.

The first alternative can also appear on the line after the rule name
for formatting purposes. In that case, a \| must be used before the
first alternative, like so:

::

    rule_name[return_type]:
        | first_alt
        | second_alt

``( e )``
'''''''''

Match ``e``.

::

    rule_name: (e)

A slightly more complex and useful example includes using the grouping
operator together with the repeat operators:

::

    rule_name: (e1 e2)*

``[ e ] or e?``
'''''''''''''''

Optionally match ``e``.

::

    rule_name: [e]

A more useful example includes defining that a trailing comma is
optional:

::

    rule_name: e (',' e)* [',']

``e*``
''''''

Match zero or more occurrences of ``e``.

::

    rule_name: (e1 e2)*

``e+``
''''''

Match one or more occurrences of ``e``.

::

    rule_name: (e1 e2)+

``s.e+``
''''''''

Match one or more occurrences of ``e``, separated by ``s``. The generated parse
tree does not include the separator. This is otherwise identical to
``(e (s e)*)``.

::

    rule_name: ','.e+

``&e``
''''''

.. _peg-positive-lookahead:

Succeed if ``e`` can be parsed, without consuming any input.

``!e``
''''''

.. _peg-negative-lookahead:

Fail if ``e`` can be parsed, without consuming any input.

An example taken from the Python grammar specifies that a primary
consists of an atom, which is not followed by a ``.`` or a ``(`` or a
``[``:

::

    primary: atom !'.' !'(' !'['

``~``
''''''

Commit to the current alternative, even if it fails to parse (this is called
the "cut").

::

    rule_name: '(' ~ some_rule ')' | some_alt

In this example, if a left parenthesis is parsed, then the other
alternative won’t be considered, even if some_rule or ``)`` fail to be
parsed.

Left recursion
--------------

PEG parsers normally do not support left recursion but CPython's parser
generator implements a technique similar to the one described in Medeiros et al.
[2]_ but using the memoization cache instead of static variables. This approach
is closer to the one described in Warth et al. [3]_. This allows us to write not
only simple left-recursive rules but also more complicated rules that involve
indirect left-recursion like::

  rule1: rule2 | 'a'
  rule2: rule3 | 'b'
  rule3: rule1 | 'c'

and "hidden left-recursion" like::

  rule: 'optional'? rule '@' some_other_rule

Variables in the grammar
------------------------

A sub-expression can be named by preceding it with an identifier and an
``=`` sign. The name can then be used in the action (see below), like this: ::

    rule_name[return_type]: '(' a=some_other_rule ')' { a }

Grammar actions
---------------

.. _peg-grammar-actions:

To avoid the intermediate steps that obscure the relationship between the
grammar and the AST generation the PEG parser allows directly generating AST
nodes for a rule via grammar actions. Grammar actions are language-specific
expressions that are evaluated when a grammar rule is successfully parsed. These
expressions can be written in Python or C depending on the desired output of the
parser generator. This means that if one would want to generate a parser in
Python and another in C, two grammar files should be written, each one with a
different set of actions, keeping everything else apart from said actions
identical in both files. As an example of a grammar with Python actions, the
piece of the parser generator that parses grammar files is bootstrapped from a
meta-grammar file with Python actions that generate the grammar tree as a result
of the parsing.

In the specific case of the PEG grammar for Python, having actions allows
directly describing how the AST is composed in the grammar itself, making it
more clear and maintainable. This AST generation process is supported by the use
of some helper functions that factor out common AST object manipulations and
some other required operations that are not directly related to the grammar.

To indicate these actions each alternative can be followed by the action code
inside curly-braces, which specifies the return value of the alternative::

    rule_name[return_type]:
        | first_alt1 first_alt2 { first_alt1 }
        | second_alt1 second_alt2 { second_alt1 }

If the action is omitted, a default action is generated:

* If there's a single name in the rule, it gets returned.

* If there is more than one name in the rule, a collection with all parsed
  expressions gets returned (the type of the collection will be different
  in C and Python).

This default behaviour is primarily made for very simple situations and for
debugging purposes.

.. warning::

    It's important that the actions don't mutate any AST nodes that are passed
    into them via variables referring to other rules. The reason for mutation
    being not allowed is that the AST nodes are cached by memoization and could
    potentially be reused in a different context, where the mutation would be
    invalid. If an action needs to change an AST node, it should instead make a
    new copy of the node and change that.

The full meta-grammar for the grammars supported by the PEG generator is:

::

    start[Grammar]: grammar ENDMARKER { grammar }

    grammar[Grammar]:
        | metas rules { Grammar(rules, metas) }
        | rules { Grammar(rules, []) }

    metas[MetaList]:
        | meta metas { [meta] + metas }
        | meta { [meta] }

    meta[MetaTuple]:
        | "@" NAME NEWLINE { (name.string, None) }
        | "@" a=NAME b=NAME NEWLINE { (a.string, b.string) }
        | "@" NAME STRING NEWLINE { (name.string, literal_eval(string.string)) }

    rules[RuleList]:
        | rule rules { [rule] + rules }
        | rule { [rule] }

    rule[Rule]:
        | rulename ":" alts NEWLINE INDENT more_alts DEDENT {
                Rule(rulename[0], rulename[1], Rhs(alts.alts + more_alts.alts)) }
        | rulename ":" NEWLINE INDENT more_alts DEDENT { Rule(rulename[0], rulename[1], more_alts) }
        | rulename ":" alts NEWLINE { Rule(rulename[0], rulename[1], alts) }

    rulename[RuleName]:
        | NAME '[' type=NAME '*' ']' {(name.string, type.string+"*")}
        | NAME '[' type=NAME ']' {(name.string, type.string)}
        | NAME {(name.string, None)}

    alts[Rhs]:
        | alt "|" alts { Rhs([alt] + alts.alts)}
        | alt { Rhs([alt]) }

    more_alts[Rhs]:
        | "|" alts NEWLINE more_alts { Rhs(alts.alts + more_alts.alts) }
        | "|" alts NEWLINE { Rhs(alts.alts) }

    alt[Alt]:
        | items '$' action { Alt(items + [NamedItem(None, NameLeaf('ENDMARKER'))], action=action) }
        | items '$' { Alt(items + [NamedItem(None, NameLeaf('ENDMARKER'))], action=None) }
        | items action { Alt(items, action=action) }
        | items { Alt(items, action=None) }

    items[NamedItemList]:
        | named_item items { [named_item] + items }
        | named_item { [named_item] }

    named_item[NamedItem]:
        | NAME '=' ~ item {NamedItem(name.string, item)}
        | item {NamedItem(None, item)}
        | it=lookahead {NamedItem(None, it)}

    lookahead[LookaheadOrCut]:
        | '&' ~ atom {PositiveLookahead(atom)}
        | '!' ~ atom {NegativeLookahead(atom)}
        | '~' {Cut()}

    item[Item]:
        | '[' ~ alts ']' {Opt(alts)}
        |  atom '?' {Opt(atom)}
        |  atom '*' {Repeat0(atom)}
        |  atom '+' {Repeat1(atom)}
        |  sep=atom '.' node=atom '+' {Gather(sep, node)}
        |  atom {atom}

    atom[Plain]:
        | '(' ~ alts ')' {Group(alts)}
        | NAME {NameLeaf(name.string) }
        | STRING {StringLeaf(string.string)}

    # Mini-grammar for the actions

    action[str]: "{" ~ target_atoms "}" { target_atoms }

    target_atoms[str]:
        | target_atom target_atoms { target_atom + " " + target_atoms }
        | target_atom { target_atom }

    target_atom[str]:
        | "{" ~ target_atoms "}" { "{" + target_atoms + "}" }
        | NAME { name.string }
        | NUMBER { number.string }
        | STRING { string.string }
        | "?" { "?" }
        | ":" { ":" }

As an illustrative example this simple grammar file allows directly
generating a full parser that can parse simple arithmetic expressions and that
returns a valid C-based Python AST:

::

    start[mod_ty]: a=expr_stmt* ENDMARKER { _PyAST_Module(a, NULL, p->arena) }
    expr_stmt[stmt_ty]: a=expr NEWLINE { _PyAST_Expr(a, EXTRA) }

    expr[expr_ty]:
        | l=expr '+' r=term { _PyAST_BinOp(l, Add, r, EXTRA) }
        | l=expr '-' r=term { _PyAST_BinOp(l, Sub, r, EXTRA) }
        | term

    term[expr_ty]:
        | l=term '*' r=factor { _PyAST_BinOp(l, Mult, r, EXTRA) }
        | l=term '/' r=factor { _PyAST_BinOp(l, Div, r, EXTRA) }
        | factor

    factor[expr_ty]:
        | '(' e=expr ')' { e }
        | atom

    atom[expr_ty]:
        | NAME
        | NUMBER

Here ``EXTRA`` is a macro that expands to ``start_lineno, start_col_offset,
end_lineno, end_col_offset, p->arena``, those being variables automatically
injected by the parser; ``p`` points to an object that holds on to all state
for the parser.

A similar grammar written to target Python AST objects:

::

    start[ast.Module]: a=expr_stmt* ENDMARKER { ast.Module(body=a or [] }
    expr_stmt: a=expr NEWLINE { ast.Expr(value=a, EXTRA) }

    expr:
        | l=expr '+' r=term { ast.BinOp(left=l, op=ast.Add(), right=r, EXTRA) }
        | l=expr '-' r=term { ast.BinOp(left=l, op=ast.Sub(), right=r, EXTRA) }
        | term

    term:
        | l=term '*' r=factor { ast.BinOp(left=l, op=ast.Mult(), right=r, EXTRA) }
        | l=term '/' r=factor { ast.BinOp(left=l, op=ast.Div(), right=r, EXTRA) }
        | factor

    factor:
        | '(' e=expr ')' { e }
        | atom

    atom:
        | NAME
        | NUMBER


Pegen
=====

Pegen is the parser generator used in CPython to produce the final PEG parser used by the interpreter. It is the
program that can be used to read the python grammar located in :cpy-file:`Grammar/python.gram` and produce the final C
parser. It contains the following pieces:

* A parser generator that can read a grammar file and produce a PEG parser written in Python or C that can parse
  said grammar. The generator is located at :cpy-file:`Tools/peg_generator/pegen`.
* A PEG meta-grammar that automatically generates a Python parser that is used for the parser generator itself
  (this means that there are no manually-written parsers). The meta-grammar is
  located at :cpy-file:`Tools/peg_generator/pegen/metagrammar.gram`.
* A generated parser (using the parser generator) that can directly produce C and Python AST objects.

The source code for Pegen lives at :cpy-file:`Tools/peg_generator/pegen` but normally all typical commands to interact
with the parser generator are executed from the main makefile.

How to regenerate the parser
----------------------------

Once you have made the changes to the grammar files, to regenerate the ``C``
parser (the one used by the interpreter) just execute: ::

    make regen-pegen

using the :cpy-file:`!Makefile` in the main directory.  If you are on Windows you can
use the Visual Studio project files to regenerate the parser or to execute: ::

    ./PCbuild/build.bat --regen

The generated parser file is located at :cpy-file:`Parser/parser.c`.

How to regenerate the meta-parser
---------------------------------

The meta-grammar (the grammar that describes the grammar for the grammar files
themselves) is located at :cpy-file:`Tools/peg_generator/pegen/metagrammar.gram`.
Although it is very unlikely that you will ever need to modify it, if you make any modifications
to this file (in order to implement new Pegen features) you will need to regenerate
the meta-parser (the parser that parses the grammar files). To do so just execute: ::

    make regen-pegen-metaparser

If you are on Windows you can use the Visual Studio project files
to regenerate the parser or to execute: ::

    ./PCbuild/build.bat --regen


Grammatical elements and rules
------------------------------

Pegen has some special grammatical elements and rules:

* Strings with single quotes (') (e.g. ``'class'``) denote KEYWORDS.
* Strings with double quotes (") (e.g. ``"match"``) denote SOFT KEYWORDS.
* Uppercase names (e.g. ``NAME``) denote tokens in the :cpy-file:`Grammar/Tokens` file.
* Rule names starting with ``invalid_`` are used for specialized syntax errors.

  - These rules are NOT used in the first pass of the parser.
  - Only if the first pass fails to parse, a second pass including the invalid
    rules will be executed.
  - If the parser fails in the second phase with a generic syntax error, the
    location of the generic failure of the first pass will be used (this avoids
    reporting incorrect locations due to the invalid rules).
  - The order of the alternatives involving invalid rules matter
    (like any rule in PEG).

Tokenization
------------

It is common among PEG parser frameworks that the parser does both the parsing and the tokenization,
but this does not happen in Pegen. The reason is that the Python language needs a custom tokenizer
to handle things like indentation boundaries, some special keywords like ``ASYNC`` and ``AWAIT``
(for compatibility purposes), backtracking errors (such as unclosed parenthesis), dealing with encoding,
interactive mode and much more. Some of these reasons are also there for historical purposes, and some
others are useful even today.

The list of tokens (all uppercase names in the grammar) that you can use can be found in the :cpy-file:`Grammar/Tokens`
file. If you change this file to add new tokens, make sure to regenerate the files by executing: ::

    make regen-token

If you are on Windows you can use the Visual Studio project files to regenerate the tokens or to execute: ::

    ./PCbuild/build.bat --regen

How tokens are generated and the rules governing this is completely up to the tokenizer (:cpy-file:`Parser/tokenizer.c`)
and the parser just receives tokens from it.

Memoization
-----------

As described previously, to avoid exponential time complexity in the parser, memoization is used.

The C parser used by Python is highly optimized and memoization can be expensive both in memory and time. Although
the memory cost is obvious (the parser needs memory for storing previous results in the cache) the execution time
cost comes for continuously checking if the given rule has a cache hit or not. In many situations, just parsing it
again can be faster. Pegen **disables memoization by default** except for rules with the special marker ``memo`` after
the rule name (and type, if present): ::

    rule_name[typr] (memo):
        ...

By selectively turning on memoization for a handful of rules, the parser becomes faster and uses less memory.

.. note::
    Left-recursive rules always use memoization, since the implementation of left-recursion depends on it.

To know if a new rule needs memoization or not, benchmarking is required
(comparing execution times and memory usage of some considerably big files with
and without memoization). There is a very simple instrumentation API available
in the generated C parse code that allows to measure how much each rule uses
memoization (check the :cpy-file:`Parser/pegen.c` file for more information) but it
needs to be manually activated.

Automatic variables
-------------------

To make writing actions easier, Pegen injects some automatic variables in the namespace available
when writing actions. In the C parser, some of these automatic variable names are:

* ``p``: The parser structure.
* ``EXTRA``: This is a macro that expands to ``(_start_lineno, _start_col_offset, _end_lineno, _end_col_offset, p->arena)``,
  which is normally used to create AST nodes as almost all constructors need these attributes to be provided. All of the
  location variables are taken from the location information of the current token.

Hard and soft keywords
----------------------

.. note::
    In the grammar files, keywords are defined using **single quotes** (e.g. ``'class'``) while soft
    keywords are defined using **double quotes** (e.g. ``"match"``).

There are two kinds of keywords allowed in pegen grammars: *hard* and *soft*
keywords. The difference between hard and soft keywords is that hard keywords
are always reserved words, even in positions where they make no sense (e.g. ``x = class + 1``),
while soft keywords only get a special meaning in context. Trying to use a hard
keyword as a variable will always fail:

.. code-block::

    >>> class = 3
    File "<stdin>", line 1
        class = 3
            ^
    SyntaxError: invalid syntax
    >>> foo(class=3)
    File "<stdin>", line 1
        foo(class=3)
            ^^^^^
    SyntaxError: invalid syntax

While soft keywords don't have this limitation if used in a context other the one where they
are defined as keywords:

.. code-block:: python

    >>> match = 45
    >>> foo(match="Yeah!")

The ``match`` and ``case`` keywords are soft keywords, so that they are recognized as
keywords at the beginning of a match statement or case block respectively, but are
allowed to be used in other places as variable or argument names.

You can get a list of all keywords defined in the grammar from Python:

.. code-block:: python

    >>> import keyword
    >>> keyword.kwlist
    ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break',
    'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for',
    'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or',
    'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

as well as soft keywords:

.. code-block:: python

    >>> import keyword
    >>> keyword.softkwlist
    ['_', 'case', 'match']

.. caution::
    Soft keywords can be a bit challenging to manage as they can be accepted in
    places you don't intend to, given how the order alternatives behave in PEG
    parsers (see :ref:`consequences of ordered choice section
    <consequences-of-ordered-choice>` for some background on this). In general,
    try to define them in places where there is not a lot of alternatives.

Error handling
--------------

When a pegen-generated parser detects that an exception is raised, it will
**automatically stop parsing**, no matter what the current state of the parser
is and it will unwind the stack and report the exception. This means that if a
:ref:`rule action <peg-grammar-actions>` raises an exception all parsing will
stop at that exact point. This is done to allow to correctly propagate any
exception set by calling Python C-API functions. This also includes :exc:`SyntaxError`
exceptions and this is the main mechanism the parser uses to report custom syntax
error messages.

.. note::
    Tokenizer errors are normally reported by raising exceptions but some special
    tokenizer errors such as unclosed parenthesis will be reported only after the
    parser finishes without returning anything.

How syntax errors are reported
------------------------------

As described previously in the :ref:`how PEG parsers work section
<how-peg-parsers-work>`, PEG parsers don't have a defined concept of where
errors happened in the grammar, because a rule failure doesn't imply a
parsing failure like in context free grammars. This means that some heuristic
has to be used to report generic errors unless something is explicitly declared
as an error in the grammar.

To report generic syntax errors, pegen uses a common heuristic in PEG parsers:
the location of *generic* syntax errors is reported in the furthest token that
was attempted to be matched but failed. This is only done if parsing has failed
(the parser returns ``NULL`` in C or ``None`` in Python) but no exception has
been raised.

.. caution::
    Positive and negative lookaheads will try to match a token so they will affect
    the location of generic syntax errors. Use them carefully at boundaries
    between rules.

As the Python grammar was primordially written as an LL(1) grammar, this heuristic
has an extremely high success rate, but some PEG features can have small effects,
such as :ref:`positive lookaheads <peg-positive-lookahead>` and
:ref:`negative lookaheads <peg-negative-lookahead>`.

To generate more precise syntax errors, custom rules are used. This is a common practice
also in context free grammars: the parser will try to accept some construct that is known
to be incorrect just to report a specific syntax error for that construct. In pegen grammars,
these rules start with the ``invalid_`` prefix. This is because trying to match these rules
normally has a performance impact on parsing (and can also affect the 'correct' grammar itself
in some tricky cases, depending on the ordering of the rules) so the generated parser acts in
two phases:

1. The first phase will try to parse the input stream without taking into account rules that
   start with the ``invalid_`` prefix. If the parsing succeeds it will return the generated AST
   and the second phase will not be attempted.

2. If the first phase failed, a second parsing attempt is done including the rules that start
   with an ``invalid_`` prefix. By design this attempt **cannot succeed** and is only executed
   to give to the invalid rules a chance to detect specific situations where custom, more precise,
   syntax errors can be raised. This also allows to trade a bit of performance for precision reporting
   errors: given that we know that the input text is invalid, there is no need to be fast because
   the interpreter is going to stop anyway.

.. important::
    When defining invalid rules:

    * Make sure all custom invalid rules raise :exc:`SyntaxError` exceptions (or a subclass of it).
    * Make sure **all** invalid rules start with the ``invalid_`` prefix to not
      impact performance of parsing correct Python code.
    * Make sure the parser doesn't behave differently for regular rules when you introduce invalid rules
      (see the :ref:`how PEG parsers work section <how-peg-parsers-work>` for more information).

You can find a collection of macros to raise specialized syntax errors in the
:cpy-file:`Parser/pegen.h` header file. These macros allow also to report ranges for
the custom errors that will be highlighted in the tracebacks that will be
displayed when the error is reported.

.. tip::
    A good way to test if an invalid rule will be triggered when you expect is to test if introducing
    a syntax error **after** valid code triggers the rule or not. For example: ::

        <valid python code> $ 42

    Should trigger the syntax error in the ``$`` character. If your rule is not correctly defined this
    won't happen. For example, if you try to define a rule to match Python 2 style ``print`` statements
    to make a better error message and you define it as: ::

        invalid_print: "print" expression

    This will **seem** to work because the parser will correctly parse ``print(something)`` because it is valid
    code and the second phase will never execute but if you try to parse ``print(something) $ 3`` the first pass
    of the parser will fail (because of the ``$``) and in the second phase, the rule will match the
    ``print(something)`` as ``print`` followed by the variable ``something`` between parentheses and the error
    will be reported there instead of the ``$`` character.

Generating AST objects
----------------------

The output of the C parser used by CPython that is generated by the
:cpy-file:`Grammar/python.gram` grammar file is a Python AST object (using C
structures). This means that the actions in the grammar file generate AST objects
when they succeed. Constructing these objects can be quite cumbersome (see
the :ref:`AST compiler section <compiler-ast-trees>` for more information
on how these objects are constructed and how they are used by the compiler) so
special helper functions are used. These functions are declared in the
:cpy-file:`Parser/pegen.h` header file and defined in the :cpy-file:`Parser/action_helpers.c`
file. These functions allow you to join AST sequences, get specific elements
from them or to do extra processing on the generated tree.

.. caution::
    Actions must **never** be used to accept or reject rules. It may be tempting
    in some situations to write a very generic rule and then check the generated
    AST to decide if is valid or not but this will render the `official grammar
    <https://docs.python.org/3/reference/grammar.html>`_ partially incorrect
    (because actions are not included) and will make it more difficult for other
    Python implementations to adapt the grammar to their own needs.

As a general rule, if an action spawns multiple lines or requires something more
complicated than a single expression of C code, is normally better to create a
custom helper in :cpy-file:`Parser/action_helpers.c` and expose it in the
:cpy-file:`Parser/pegen.h` header file so it can be used from the grammar.

If the parsing succeeds, the parser **must** return a **valid** AST object.

Testing
=======

There are three files that contain tests for the grammar and the parser:

* :cpy-file:`Lib/test/test_grammar.py`
* :cpy-file:`Lib/test/test_syntax.py`
* :cpy-file:`Lib/test/test_exceptions.py`

Check the contents of these files to know which is the best place to place new tests depending
on the nature of the new feature you are adding.

Tests for the parser generator itself can be found in the :cpy-file:`Lib/test/test_peg_generator` directory.


Debugging generated parsers
===========================

Making experiments
------------------

As the generated C parser is the one used by Python, this means that if something goes wrong when adding some
new rules to the grammar you cannot correctly compile and execute Python anymore. This makes it a bit challenging
to debug when something goes wrong, especially when making experiments.

For this reason it is a good idea to experiment first by generating a Python parser. To do this, you can go to the
:cpy-file:`Tools/peg_generator/` directory on the CPython repository and manually call the parser generator by executing:

.. code-block:: shell

    $ python -m pegen python <PATH TO YOUR GRAMMAR FILE>

This will generate a file called :file:`parse.py` in the same directory that you can use to parse some input:

.. code-block:: shell

    $ python parse.py file_with_source_code_to_test.py

As the generated :file:`parse.py` file is just Python code, you can modify it and add breakpoints to debug or
better understand some complex situations.


Verbose mode
------------

When Python is compiled in debug mode (by adding ``--with-pydebug`` when running the configure step in Linux or by
adding ``-d`` when calling the :cpy-file:`PCbuild/build.bat` script in Windows), it is possible to activate a **very** verbose
mode in the generated parser. This is very useful to debug the generated parser and to understand how it works, but it
can be a bit hard to understand at first.

.. note::

    When activating verbose mode in the Python parser, it is better to not use interactive mode as it can be much harder to
    understand, because interactive mode involves some special steps compared to regular parsing.

To activate verbose mode you can add the ``-d`` flag when executing Python:

.. code-block:: shell

    $ python -d file_to_test.py

This will print **a lot** of output to ``stderr`` so is probably better to dump it to a file for further analysis. The output
consists of trace lines with the following structure::

    <indentation> ('>'|'-'|'+'|'!') <rule_name>[<token_location>]: <alternative> ...

Every line is indented by a different amount (``<indentation>``) depending on how deep the call stack is. The next
character marks the type of the trace:

* ``>`` indicates that a rule is going to be attempted to be parsed.
* ``-`` indicates that a rule has failed to be parsed.
* ``+`` indicates that a rule has been parsed correctly.
* ``!`` indicates that an exception or an error has been detected and the parser is unwinding.

The ``<token_location>`` part indicates the current index in the token array,
the ``<rule_name>`` part indicates what rule is being parsed and
the ``<alternative>`` part indicates what alternative within that rule
is being attempted.


References
==========

.. [1] Ford, Bryan
   https://pdos.csail.mit.edu/~baford/packrat/thesis/

.. [2] Medeiros et al.
   https://arxiv.org/pdf/1207.0443.pdf

.. [3] Warth et al.
   http://web.cs.ucla.edu/~todd/research/pepm08.pdf


.. admonition:: Document history
   :class: note

   Pablo Galindo Salgado - Original author


===================================================
/. 🚀 ./internals/compiler.rst
===================================================

.. _compiler:

===============
Compiler design
===============

.. highlight:: none

Abstract
========

In CPython, the compilation from source code to bytecode involves several steps:

1. Tokenize the source code (:cpy-file:`Parser/tokenizer.c`).
2. Parse the stream of tokens into an Abstract Syntax Tree
   (:cpy-file:`Parser/parser.c`).
3. Transform AST into an instruction sequence (:cpy-file:`Python/compile.c`).
4. Construct a Control Flow Graph and apply optimizations to it (:cpy-file:`Python/flowgraph.c`).
5. Emit bytecode based on the Control Flow Graph (:cpy-file:`Python/assemble.c`).

This document outlines how these steps of the process work.

This document only describes parsing in enough depth to explain what is needed
for understanding compilation.  This document provides a detailed, though not
exhaustive, view of the how the entire system works.  You will most likely need
to read some source code to have an exact understanding of all details.


Parsing
=======

As of Python 3.9, Python's parser is a PEG parser of a somewhat
unusual design. It is unusual in the sense that the parser's input is a stream
of tokens rather than a stream of characters which is more common with PEG
parsers.

The grammar file for Python can be found in
:cpy-file:`Grammar/python.gram`.  The definitions for literal tokens
(such as ``:``, numbers, etc.) can be found in :cpy-file:`Grammar/Tokens`.
Various C files, including :cpy-file:`Parser/parser.c` are generated from
these.

.. seealso::

  :ref:`parser` for a detailed description of the parser.

  :ref:`grammar` for a detailed description of the grammar.


Abstract syntax trees (AST)
===========================

.. _compiler-ast-trees:

.. sidebar:: Green Tree Snakes

   See also `Green Tree Snakes - the missing Python AST docs
   <https://greentreesnakes.readthedocs.io/en/latest/>`_ by Thomas Kluyver.

The abstract syntax tree (AST) is a high-level representation of the
program structure without the necessity of containing the source code;
it can be thought of as an abstract representation of the source code.  The
specification of the AST nodes is specified using the Zephyr Abstract
Syntax Definition Language (ASDL) [Wang97]_.

The definition of the AST nodes for Python is found in the file
:cpy-file:`Parser/Python.asdl`.

Each AST node (representing statements, expressions, and several
specialized types, like list comprehensions and exception handlers) is
defined by the ASDL.  Most definitions in the AST correspond to a
particular source construct, such as an 'if' statement or an attribute
lookup.  The definition is independent of its realization in any
particular programming language.

The following fragment of the Python ASDL construct demonstrates the
approach and syntax::

   module Python
   {
       stmt = FunctionDef(identifier name, arguments args, stmt* body,
                          expr* decorators)
              | Return(expr? value) | Yield(expr? value)
              attributes (int lineno)
   }

The preceding example describes two different kinds of statements and an
expression: function definitions, return statements, and yield expressions.
All three kinds are considered of type ``stmt`` as shown by ``|`` separating
the various kinds.  They all take arguments of various kinds and amounts.

Modifiers on the argument type specify the number of values needed; ``?``
means it is optional, ``*`` means 0 or more, while no modifier means only one
value for the argument and it is required.  ``FunctionDef``, for instance,
takes an ``identifier`` for the *name*, ``arguments`` for *args*, zero or more
``stmt`` arguments for *body*, and zero or more ``expr`` arguments for
*decorators*.

Do notice that something like 'arguments', which is a node type, is
represented as a single AST node and not as a sequence of nodes as with
stmt as one might expect.

All three kinds also have an 'attributes' argument; this is shown by the
fact that 'attributes' lacks a '|' before it.

The statement definitions above generate the following C structure type:

.. code-block:: c

  typedef struct _stmt *stmt_ty;

  struct _stmt {
        enum { FunctionDef_kind=1, Return_kind=2, Yield_kind=3 } kind;
        union {
                struct {
                        identifier name;
                        arguments_ty args;
                        asdl_seq *body;
                } FunctionDef;

                struct {
                        expr_ty value;
                } Return;

                struct {
                        expr_ty value;
                } Yield;
        } v;
        int lineno;
   }

Also generated are a series of constructor functions that allocate (in
this case) a ``stmt_ty`` struct with the appropriate initialization.  The
``kind`` field specifies which component of the union is initialized.  The
``FunctionDef()`` constructor function sets 'kind' to ``FunctionDef_kind`` and
initializes the *name*, *args*, *body*, and *attributes* fields.


Memory management
=================

Before discussing the actual implementation of the compiler, a discussion of
how memory is handled is in order.  To make memory management simple, an **arena**
is used that pools memory in a single location for easy
allocation and removal.  This enables the removal of explicit memory
deallocation.  Because memory allocation for all needed memory in the compiler
registers that memory with the arena, a single call to free the arena is all
that is needed to completely free all memory used by the compiler.

In general, unless you are working on the critical core of the compiler, memory
management can be completely ignored.  But if you are working at either the
very beginning of the compiler or the end, you need to care about how the arena
works.  All code relating to the arena is in either
:cpy-file:`Include/internal/pycore_pyarena.h` or :cpy-file:`Python/pyarena.c`.

``PyArena_New()`` will create a new arena.  The returned ``PyArena`` structure
will store pointers to all memory given to it.  This does the bookkeeping of
what memory needs to be freed when the compiler is finished with the memory it
used. That freeing is done with ``PyArena_Free()``.  This only needs to be
called in strategic areas where the compiler exits.

As stated above, in general you should not have to worry about memory
management when working on the compiler.  The technical details of memory
management have been designed to be hidden from you for most cases.

The only exception comes about when managing a PyObject.  Since the rest
of Python uses reference counting, there is extra support added
to the arena to cleanup each PyObject that was allocated.  These cases
are very rare.  However, if you've allocated a PyObject, you must tell
the arena about it by calling ``PyArena_AddPyObject()``.


Source code to AST
==================

The AST is generated from source code using the function
``_PyParser_ASTFromString()`` or ``_PyParser_ASTFromFile()``
(from :cpy-file:`Parser/peg_api.c`) depending on the input type.

After some checks, a helper function in :cpy-file:`Parser/parser.c` begins applying
production rules on the source code it receives; converting source code to
tokens and matching these tokens recursively to their corresponding rule.  The
production rule's corresponding rule function is called on every match.  These rule
functions follow the format :samp:`xx_rule`.  Where *xx* is the grammar rule
that the function handles and is automatically derived from
:cpy-file:`Grammar/python.gram`
:cpy-file:`Tools/peg_generator/pegen/c_generator.py`.

Each rule function in turn creates an AST node as it goes along.  It does this
by allocating all the new nodes it needs, calling the proper AST node creation
functions for any required supporting functions and connecting them as needed.
This continues until all nonterminal symbols are replaced with terminals.  If an
error occurs, the rule functions backtrack and try another rule function.  If
there are no more rules, an error is set and the parsing ends.

The AST node creation helper functions have the name :samp:`_PyAST_{xx}`
where *xx* is the AST node that the function creates.  These are defined by the
ASDL grammar and contained in :cpy-file:`Python/Python-ast.c` (which is
generated by :cpy-file:`Parser/asdl_c.py` from :cpy-file:`Parser/Python.asdl`).
This all leads to a sequence of AST nodes stored in ``asdl_seq`` structs.

To demonstrate everything explained so far, here's the
rule function responsible for a simple named import statement such as
``import sys``.  Note that error-checking and debugging code has been
omitted.  Removed parts are represented by ``...``.
Furthermore, some comments have been added for explanation.  These comments
may not be present in the actual code.

.. code-block:: c

   // This is the production rule (from python.gram) the rule function
   // corresponds to:
   // import_name: 'import' dotted_as_names
   static stmt_ty
   import_name_rule(Parser *p)
   {
       ...
       stmt_ty _res = NULL;
       { // 'import' dotted_as_names
           ...
           Token * _keyword;
           asdl_alias_seq* a;
           // The tokenizing steps.
           if (
               (_keyword = _PyPegen_expect_token(p, 513))  // token='import'
               &&
               (a = dotted_as_names_rule(p))  // dotted_as_names
           )
           {
               ...
               // Generate an AST for the import statement.
               _res = _PyAST_Import ( a , ...);
               ...
               goto done;
           }
           ...
       }
       _res = NULL;
     done:
       ...
       return _res;
   }


To improve backtracking performance, some rules (chosen by applying a
``(memo)`` flag in the grammar file) are memoized.  Each rule function checks if
a memoized version exists and returns that if so, else it continues in the
manner stated in the previous paragraphs.

There are macros for creating and using ``asdl_xx_seq *`` types, where *xx* is
a type of the ASDL sequence.  Three main types are defined
manually -- ``generic``, ``identifier`` and ``int``.  These types are found in
:cpy-file:`Python/asdl.c` and its corresponding header file
:cpy-file:`Include/internal/pycore_asdl.h`.  Functions and macros
for creating ``asdl_xx_seq *`` types are as follows:

``_Py_asdl_generic_seq_new(Py_ssize_t, PyArena *)``
        Allocate memory for an ``asdl_generic_seq`` of the specified length
``_Py_asdl_identifier_seq_new(Py_ssize_t, PyArena *)``
        Allocate memory for an ``asdl_identifier_seq`` of the specified length
``_Py_asdl_int_seq_new(Py_ssize_t, PyArena *)``
        Allocate memory for an ``asdl_int_seq`` of the specified length

In addition to the three types mentioned above, some ASDL sequence types are
automatically generated by :cpy-file:`Parser/asdl_c.py` and found in
:cpy-file:`Include/internal/pycore_ast.h`.  Macros for using both manually
defined and automatically generated ASDL sequence types are as follows:

``asdl_seq_GET(asdl_xx_seq *, int)``
        Get item held at a specific position in an ``asdl_xx_seq``
``asdl_seq_SET(asdl_xx_seq *, int, stmt_ty)``
        Set a specific index in an ``asdl_xx_seq`` to the specified value

Untyped counterparts exist for some of the typed macros.  These are useful
when a function needs to manipulate a generic ASDL sequence:

``asdl_seq_GET_UNTYPED(asdl_seq *, int)``
        Get item held at a specific position in an ``asdl_seq``
``asdl_seq_SET_UNTYPED(asdl_seq *, int, stmt_ty)``
        Set a specific index in an ``asdl_seq`` to the specified value
``asdl_seq_LEN(asdl_seq *)``
        Return the length of an ``asdl_seq`` or ``asdl_xx_seq``

Note that typed macros and functions are recommended over their untyped
counterparts.  Typed macros carry out checks in debug mode and aid
debugging errors caused by incorrectly casting from ``void *``.

If you are working with statements, you must also worry about keeping
track of what line number generated the statement.  Currently the line
number is passed as the last parameter to each ``stmt_ty`` function.

.. versionchanged:: 3.9
   The new PEG parser generates an AST directly without creating a
   parse tree. ``Python/ast.c`` is now only used to validate the AST for
   debugging purposes.

.. seealso:: :pep:`617` (PEP 617 -- New PEG parser for CPython)


Control flow graphs
===================

A **control flow graph** (often referenced by its acronym, **CFG**) is a
directed graph that models the flow of a program.  A node of a CFG is
not an individual bytecode instruction, but instead represents a
sequence of bytecode instructions that always execute sequentially.
Each node is called a *basic block* and must always execute from
start to finish, with a single entry point at the beginning and a
single exit point at the end.  If some bytecode instruction *a* needs
to jump to some other bytecode instruction *b*, then *a* must occur at
the end of its basic block, and *b* must occur at the start of its
basic block.

As an example, consider the following code snippet:

.. code-block:: Python

   if x < 10:
       f1()
       f2()
   else:
       g()
   end()

The ``x < 10`` guard is represented by its own basic block that
compares ``x`` with ``10`` and then ends in a conditional jump based on
the result of the comparison.  This conditional jump allows the block
to point to both the body of the ``if`` and the body of the ``else``.  The
``if`` basic block contains the ``f1()`` and ``f2()`` calls and points to
the ``end()`` basic block. The ``else`` basic block contains the ``g()``
call and similarly points to the ``end()`` block.

Note that more complex code in the guard, the ``if`` body, or the ``else``
body may be represented by multiple basic blocks. For instance,
short-circuiting boolean logic in a guard like ``if x or y:``
will produce one basic block that tests the truth value of ``x``
and then points both (1) to the start of the ``if`` body and (2) to
a different basic block that tests the truth value of y.

CFGs are usually one step away from final code output.  Code is directly
generated from the basic blocks (with jump targets adjusted based on the
output order) by doing a post-order depth-first search on the CFG
following the edges.


AST to CFG to bytecode
======================

With the AST created, the next step is to create the CFG. The first step
is to convert the AST to Python bytecode without having jump targets
resolved to specific offsets (this is calculated when the CFG goes to
final bytecode). Essentially, this transforms the AST into Python
bytecode with control flow represented by the edges of the CFG.

Conversion is done in two passes.  The first creates the namespace
(variables can be classified as local, free/cell for closures, or
global).  With that done, the second pass essentially flattens the CFG
into a list and calculates jump offsets for final output of bytecode.

The conversion process is initiated by a call to the function
``_PyAST_Compile()`` in :cpy-file:`Python/compile.c`.  This function does both
the conversion of the AST to a CFG and outputting final bytecode from the CFG.
The AST to CFG step is handled mostly by two functions called by
``_PyAST_Compile()``; ``_PySymtable_Build()`` and ``compiler_mod()``.
The former is in :cpy-file:`Python/symtable.c` while the latter is
:cpy-file:`Python/compile.c`.

``_PySymtable_Build()`` begins by entering the starting code block for the
AST (passed-in) and then calling the proper :samp:`symtable_visit_{xx}` function
(with *xx* being the AST node type).  Next, the AST tree is walked with
the various code blocks that delineate the reach of a local variable
as blocks are entered and exited using ``symtable_enter_block()`` and
``symtable_exit_block()``, respectively.

Once the symbol table is created, it is time for CFG creation, whose
code is in :cpy-file:`Python/compile.c`.  This is handled by several functions
that break the task down by various AST node types.  The functions are
all named :samp:`compiler_visit_{xx}` where *xx* is the name of the node type (such
as ``stmt``, ``expr``, etc.).  Each function receives a ``struct compiler *``
and :samp:`{xx}_ty` where *xx* is the AST node type.  Typically these functions
consist of a large 'switch' statement, branching based on the kind of
node type passed to it.  Simple things are handled inline in the
'switch' statement with more complex transformations farmed out to other
functions named :samp:`compiler_{xx}` with *xx* being a descriptive name of what is
being handled.

When transforming an arbitrary AST node, use the ``VISIT()`` macro.
The appropriate :samp:`compiler_visit_{xx}` function is called, based on the value
passed in for <node type> (so :samp:`VISIT({c}, expr, {node})` calls
:samp:`compiler_visit_expr({c}, {node})`).  The ``VISIT_SEQ()`` macro is very similar,
but is called on AST node sequences (those values that were created as
arguments to a node that used the '*' modifier).  There is also
``VISIT_SLICE()`` just for handling slices.

Emission of bytecode is handled by the following macros:

``ADDOP(struct compiler *, int)``
    add a specified opcode
``ADDOP_NOLINE(struct compiler *, int)``
    like ``ADDOP`` without a line number; used for artificial opcodes without
    no corresponding token in the source code
``ADDOP_IN_SCOPE(struct compiler *, int)``
    like ``ADDOP``, but also exits current scope; used for adding return value
    opcodes in lambdas and closures
``ADDOP_I(struct compiler *, int, Py_ssize_t)``
    add an opcode that takes an integer argument
``ADDOP_O(struct compiler *, int, PyObject *, TYPE)``
    add an opcode with the proper argument based on the position of the
    specified PyObject in PyObject sequence object, but with no handling of
    mangled names; used for when you
    need to do named lookups of objects such as globals, consts, or
    parameters where name mangling is not possible and the scope of the
    name is known; *TYPE* is the name of PyObject sequence
    (``names`` or ``varnames``)
``ADDOP_N(struct compiler *, int, PyObject *, TYPE)``
    just like ``ADDOP_O``, but steals a reference to PyObject
``ADDOP_NAME(struct compiler *, int, PyObject *, TYPE)``
    just like ``ADDOP_O``, but name mangling is also handled; used for
    attribute loading or importing based on name
``ADDOP_LOAD_CONST(struct compiler *, PyObject *)``
    add the ``LOAD_CONST`` opcode with the proper argument based on the
    position of the specified PyObject in the consts table.
``ADDOP_LOAD_CONST_NEW(struct compiler *, PyObject *)``
    just like ``ADDOP_LOAD_CONST_NEW``, but steals a reference to PyObject
``ADDOP_JUMP(struct compiler *, int, basicblock *)``
    create a jump to a basic block
``ADDOP_JUMP_NOLINE(struct compiler *, int, basicblock *)``
    like ``ADDOP_JUMP`` without a line number; used for artificial jumps
    without no corresponding token in the source code.
``ADDOP_JUMP_COMPARE(struct compiler *, cmpop_ty)``
    depending on the second argument, add an ``ADDOP_I`` with either an
    ``IS_OP``, ``CONTAINS_OP``, or ``COMPARE_OP`` opcode.

Several helper functions that will emit bytecode and are named
:samp:`compiler_{xx}()` where *xx* is what the function helps with (``list``,
``boolop``, etc.).  A rather useful one is ``compiler_nameop()``.
This function looks up the scope of a variable and, based on the
expression context, emits the proper opcode to load, store, or delete
the variable.

As for handling the line number on which a statement is defined, this is
handled by ``compiler_visit_stmt()`` and thus is not a worry.

Once the CFG is created, it must be flattened and then final emission of
bytecode occurs.  Flattening is handled using a post-order depth-first
search.  Once flattened, jump offsets are backpatched based on the
flattening and then a ``PyCodeObject`` is created.  All of this is
handled by calling ``assemble()``.


Code objects
============

The result of ``PyAST_CompileObject()`` is a ``PyCodeObject`` which is defined in
:cpy-file:`Include/cpython/code.h`.  And with that you now have executable
Python bytecode!

The code objects (byte code) are executed in :cpy-file:`Python/ceval.c`.  This file
will also need a new case statement for the new opcode in the big switch
statement in ``_PyEval_EvalFrameDefault()``.


Important files
===============

* :cpy-file:`Parser/`

  * :cpy-file:`Parser/Python.asdl`: ASDL syntax file.

  * :cpy-file:`Parser/asdl.py`: Parser for ASDL definition files.
    Reads in an ASDL description and parses it into an AST that describes it.

  * :cpy-file:`Parser/asdl_c.py`: Generate C code from an ASDL description.
    Generates :cpy-file:`Python/Python-ast.c` and
    :cpy-file:`Include/internal/pycore_ast.h`.

  * :cpy-file:`Parser/parser.c`: The new PEG parser introduced in Python 3.9.
    Generated by :cpy-file:`Tools/peg_generator/pegen/c_generator.py`
    from the grammar :cpy-file:`Grammar/python.gram`.  Creates the AST from
    source code.  Rule functions for their corresponding production rules
    are found here.

  * :cpy-file:`Parser/peg_api.c`: Contains high-level functions which are
    used by the interpreter to create an AST from source code.

  * :cpy-file:`Parser/pegen.c`: Contains helper functions which are used
    by functions in :cpy-file:`Parser/parser.c` to construct the AST.
    Also contains helper functions which help raise better error messages
    when parsing source code.

  * :cpy-file:`Parser/pegen.h`: Header file for the corresponding
    :cpy-file:`Parser/pegen.c`. Also contains definitions of the ``Parser``
    and ``Token`` structs.

* :cpy-file:`Python/`

  * :cpy-file:`Python/Python-ast.c`: Creates C structs corresponding to
    the ASDL types.  Also contains code for marshalling AST nodes (core
    ASDL types have marshalling code in :cpy-file:`Python/asdl.c`).
    "File automatically generated by :cpy-file:`Parser/asdl_c.py`".
    This file must be committed separately after every grammar change
    is committed since the ``__version__`` value is set to the latest
    grammar change revision number.

  * :cpy-file:`Python/asdl.c`: Contains code to handle the ASDL sequence type.
    Also has code to handle marshalling the core ASDL types, such as number
    and identifier.  Used by :cpy-file:`Python/Python-ast.c` for marshalling
    AST nodes.

  * :cpy-file:`Python/ast.c`: Used for validating the AST.

  * :cpy-file:`Python/ast_opt.c`: Optimizes the AST.

  * :cpy-file:`Python/ast_unparse.c`: Converts the AST expression node
    back into a string (for string annotations).

  * :cpy-file:`Python/ceval.c`: Executes byte code (aka, eval loop).

  * :cpy-file:`Python/compile.c`: Emits bytecode based on the AST.

  * :cpy-file:`Python/symtable.c`: Generates a symbol table from AST.

  * :cpy-file:`Python/pyarena.c`: Implementation of the arena memory manager.

  * :cpy-file:`Python/opcode_targets.h`: One of the files that must be
    modified if :cpy-file:`Lib/opcode.py` is.

* :cpy-file:`Include/`

  * :cpy-file:`Include/cpython/code.h`: Header file for
    :cpy-file:`Objects/codeobject.c`; contains definition of ``PyCodeObject``.

  * :cpy-file:`Include/opcode.h`: One of the files that must be modified if
    :cpy-file:`Lib/opcode.py` is.

  * :cpy-file:`Include/internal/pycore_ast.h`: Contains the actual definitions
    of the C structs as generated by :cpy-file:`Python/Python-ast.c`.
    "Automatically generated by :cpy-file:`Parser/asdl_c.py`".

  * :cpy-file:`Include/internal/pycore_asdl.h`: Header for the corresponding
    :cpy-file:`Python/ast.c`.

  * :cpy-file:`Include/internal/pycore_ast.h`: Declares ``_PyAST_Validate()``
    external (from :cpy-file:`Python/ast.c`).

  * :cpy-file:`Include/internal/pycore_symtable.h`: Header for
    :cpy-file:`Python/symtable.c`.  ``struct symtable`` and ``PySTEntryObject``
    are defined here.

  * :cpy-file:`Include/internal/pycore_parser.h`: Header for the
    corresponding :cpy-file:`Parser/peg_api.c`.

  * :cpy-file:`Include/internal/pycore_pyarena.h`: Header file for the
    corresponding :cpy-file:`Python/pyarena.c`.

* :cpy-file:`Objects/`

  * :cpy-file:`Objects/codeobject.c`: Contains PyCodeObject-related code
    (originally in :cpy-file:`Python/compile.c`).

  * :cpy-file:`Objects/frameobject.c`: Contains the ``frame_setlineno()``
    function which should determine whether it is allowed to make a jump
    between two points in a bytecode.

* :cpy-file:`Lib/`

  * :cpy-file:`Lib/opcode.py`: Master list of bytecode; if this file is
    modified you must modify several other files accordingly

  * :cpy-file:`Lib/importlib/_bootstrap_external.py`: Home of the magic number
    (named ``MAGIC_NUMBER``) for bytecode versioning.


Objects
=======

* :cpy-file:`Objects/locations.md`: Describes the location table
* :cpy-file:`Objects/frame_layout.md`: Describes the frame stack
* :cpy-file:`Objects/object_layout.md`: Descibes object layout for 3.11 and later
* :cpy-file:`Objects/exception_handling_notes.txt`: Exception handling notes


Specializing Adaptive Interpreter
=================================

Adding a specializing, adaptive interpreter to CPython will bring significant
performance improvements. These documents provide more information:

* :pep:`659`: Specializing Adaptive Interpreter
* :cpy-file:`Python/adaptive.md`: Adding or extending a family of adaptive instructions


References
==========

.. [Wang97]  Daniel C. Wang, Andrew W. Appel, Jeff L. Korn, and Chris
   S. Serra.  `The Zephyr Abstract Syntax Description Language.`_
   In Proceedings of the Conference on Domain-Specific Languages, pp.
   213--227, 1997.

.. _The Zephyr Abstract Syntax Description Language.:
   https://www.cs.princeton.edu/research/techreps/TR-554-97


===================================================
/. 🚀 ./internals/interpreter.rst
===================================================

.. _interpreter:

===============================
The bytecode interpreter (3.11)
===============================

.. highlight:: c

Preface
=======

The CPython 3.11 bytecode interpreter (a.k.a. virtual machine) has a number of improvements over 3.10.
We describe the inner workings of the 3.11 interpreter here, with an emphasis on understanding not just the code but its design.
While the interpreter is forever evolving, and the 3.12 design will undoubtedly be different again, knowing the 3.11 design will help you understand future improvements to the interpreter.

Other sources
-------------

* Brandt Bucher's talk about the specializing interpreter at PyCon US 2023.
  `Slides <https://github.com/brandtbucher/brandtbucher/blob/master/2023/04/21/inside_cpython_311s_new_specializing_adaptive_interpreter.pdf>`_
  `Video <https://www.youtube.com/watch?v=PGZPSWZSkJI&t=1470s>`_

Introduction
============

The job of the bytecode interpreter, in :cpy-file:`Python/ceval.c`, is to execute Python code.
Its main input is a code object, although this is not a direct argument to the interpreter.
The interpreter is structured as a (recursive) function taking a thread state (``tstate``) and a stack frame (``frame``).
The function also takes an integer ``throwflag``, which is used by the implementation of ``generator.throw``.
It returns a new reference to a Python object (``PyObject *``) or an error indicator, ``NULL``.
Per :pep:`523`, this function is configurable by setting ``interp->eval_frame``; we describe only the default function, ``_PyEval_EvalFrameDefault()``.
(This function's signature has evolved and no longer matches what PEP 523 specifies; the thread state argument is added and the stack frame argument is no longer an object.)

The interpreter finds the code object by looking in the stack frame (``frame->f_code``).
Various other items needed by the interpreter (e.g. globals and builtins) are also accessed via the stack frame.
The thread state stores exception information and a variety of other information, such as the recursion depth.
The thread state is also used to access per-interpreter state (``tstate->interp``) and per-runtime (i.e., truly global) state (``tstate->interp->runtime``).

Note the slightly confusing terminology here.
"Interpreter" refers to the bytecode interpreter, a recursive function.
"Interpreter state" refers to state shared by threads, each of which may be running its own bytecode interpreter.
A single process may even host multiple interpreters, each with their own interpreter state, but sharing runtime state.
The topic of multiple interpreters is covered by several PEPs, notably :pep:`684`, :pep:`630`, and :pep:`554` (with more coming).
The current document focuses on the bytecode interpreter.

Code objects
============

The interpreter uses a code object (``frame->f_code``) as its starting point.
Code objects contain many fields used by the interpreter, as well as some for use by debuggers and other tools.
In 3.11, the final field of a code object is an array of indeterminate length containing the bytecode, ``code->co_code_adaptive``.
(In previous versions the code object was a :class:`bytes` object, ``code->co_code``; it was changed to save an allocation and to allow it to be mutated.)

Code objects are typically produced by the bytecode :ref:`compiler <compiler>`, although they are often written to disk by one process and read back in by another.
The disk version of a code object is serialized using the :mod:`marshal` protocol.
Some code objects are pre-loaded into the interpreter using ``Tools/scripts/deepfreeze.py``, which writes ``Python/deepfreeze/deepfreeze.c``.

Code objects are nominally immutable.
Some fields (including ``co_code_adaptive``) are mutable, but mutable fields are not included when code objects are hashed or compared.

Instruction decoding
====================

The first task of the interpreter is to decode the bytecode instructions.
Bytecode is stored as an array of 16-bit code units (``_Py_CODEUNIT``).
Each code unit contains an 8-bit ``opcode`` and an 8-bit argument (``oparg``), both unsigned.
In order to make the bytecode format independent of the machine byte order when stored on disk, ``opcode`` is always the first byte and ``oparg`` is always the second byte.
Macros are used to extract the ``opcode`` and ``oparg`` from a code unit (``_Py_OPCODE(word)`` and ``_Py_OPARG(word)``).
Some instructions (e.g. ``NOP`` or ``POP_TOP``) have no argument -- in this case we ignore ``oparg``.

A simple instruction decoding loop would look like this:

.. code-block:: c

    _Py_CODEUNIT *first_instr = code->co_code_adaptive;
    _Py_CODEUNIT *next_instr = first_instr;
    while (1) {
        _Py_CODEUNIT word = *next_instr++;
        unsigned char opcode = _Py_OPCODE(word);
        unsigned int oparg = _Py_OPARG(word);
        switch (opcode) {
        // ... A case for each opcode ...
        }
    }

This format supports 256 different opcodes, which is sufficient.
However, it also limits ``oparg`` to 8-bit values, which is not.
To overcome this, the ``EXTENDED_ARG`` opcode allows us to prefix any instruction with one or more additional data bytes.
For example, this sequence of code units::

    EXTENDED_ARG  1
    EXTENDED_ARG  0
    LOAD_CONST    2

would set ``opcode`` to ``LOAD_CONST`` and ``oparg`` to ``65538`` (i.e., ``0x1_00_02``).
The compiler should limit itself to at most three ``EXTENDED_ARG`` prefixes, to allow the resulting ``oparg`` to fit in 32 bits, but the interpreter does not check this.
A series of code units starting with zero to three ``EXTENDED_ARG`` opcodes followed by a primary opcode is called a complete instruction, to distinguish it from a single code unit, which is always two bytes.
The following loop, to be inserted just above the ``switch`` statement, will make the above snippet decode a complete instruction:

.. code-block:: c

    while (opcode == EXTENDED_ARG) {
        word = *next_instr++;
        opcode = _Py_OPCODE(word);
        oparg = (oparg << 8) | _Py_OPARG(word);
    }

For various reasons we'll get to later (mostly efficiency, given that ``EXTENDED_ARG`` is rare) the actual code is different.

Jumps
=====

Note that when the ``switch`` statement is reached, ``next_instr`` (the "instruction offset") already points to the next instruction.
Thus, jump instructions can be implemented by manipulating ``next_instr``:

- An absolute jump (``JUMP_ABSOLUTE``) sets ``next_instr = first_instr + oparg``.
- A relative jump forward (``JUMP_FORWARD``) sets ``next_instr += oparg``.
- A relative jump backward sets ``next_instr -= oparg``.

A relative jump whose ``oparg`` is zero is a no-op.

Inline cache entries
====================

Some (specialized or specializable) instructions have an associated "inline cache".
The inline cache consists of one or more two-byte entries included in the bytecode array as additional words following the ``opcode`` /``oparg`` pair.
The size of the inline cache for a particular instruction is fixed by its ``opcode`` alone.
Moreover, the inline cache size for a family of specialized/specializable instructions (e.g., ``LOAD_ATTR``, ``LOAD_ATTR_SLOT``, ``LOAD_ATTR_MODULE``) must all be the same.
Cache entries are reserved by the compiler and initialized with zeros.
If an instruction has an inline cache, the layout of its cache can be described by a ``struct`` definition and the address of the cache is given by casting ``next_instr`` to a pointer to the cache ``struct``.
The size of such a ``struct`` must be independent of the machine architecture, word size and alignment requirements.
For 32-bit fields, the ``struct`` should use ``_Py_CODEUNIT field[2]``.
Even though inline cache entries are represented by code units, they do not have to conform to the ``opcode`` / ``oparg`` format.

The instruction implementation is responsible for advancing ``next_instr`` past the inline cache.
For example, if an instruction's inline cache is four bytes (i.e., two code units) in size, the code for the instruction must contain ``next_instr += 2;``.
This is equivalent to a relative forward jump by that many code units.
(The proper way to code this is ``JUMPBY(n)``, where ``n`` is the number of code units to jump, typically given as a named constant.)

Serializing non-zero cache entries would present a problem because the serialization (:mod:`marshal`) format must be independent of the machine byte order.

More information about the use of inline caches :pep:`can be found in PEP 659 <659#ancillary-data>`.

The evaluation stack
====================

Apart from unconditional jumps, almost all instructions read or write some data in the form of object references (``PyObject *``).
The CPython 3.11 bytecode interpreter is a stack machine, meaning that it operates by pushing data onto and popping it off the stack.
The stack is a pre-allocated array of object references.
For example, the "add" instruction (which used to be called ``BINARY_ADD`` in 3.10 but is now ``BINARY_OP 0``) pops two objects off the stack and pushes the result back onto the stack.
An interesting property of the CPython bytecode interpreter is that the stack size required to evaluate a given function is known in advance.
The stack size is computed by the bytecode compiler and is stored in ``code->co_stacksize``.
The interpreter uses this information to allocate stack.

The stack grows up in memory; the operation ``PUSH(x)`` is equivalent to ``*stack_pointer++ = x``, whereas ``x = POP()`` means ``x = *--stack_pointer``.
There is no overflow or underflow check (except when compiled in debug mode) -- it would be too expensive, so we really trust the compiler.

At any point during execution, the stack level is knowable based on the instruction pointer alone, and some properties of each item on the stack are also known.
In particular, only a few instructions may push a ``NULL`` onto the stack, and the positions that may be ``NULL`` are known.
A few other instructions (``GET_ITER``, ``FOR_ITER``) push or pop an object that is known to be an iterator.

Instruction sequences that do not allow statically knowing the stack depth are deemed illegal.
The bytecode compiler never generates such sequences.
For example, the following sequence is illegal, because it keeps pushing items on the stack::

    LOAD_FAST 0
    JUMP_BACKWARD 2

Do not confuse the evaluation stack with the call stack, which is used to implement calling and returning from functions.

Error handling
==============

When an instruction like ``BINARY_OP`` encounters an error, an exception is raised.
At this point, a traceback entry is added to the exception (by ``PyTraceBack_Here()``) and cleanup is performed.
In the simplest case (absent any ``try`` blocks), this results in the remaining objects being popped off the evaluation stack and their reference count decremented (if not ``NULL``) .
Then the interpreter function (``_PyEval_EvalFrameDefault()``) returns ``NULL``.

However, if an exception is raised in a ``try`` block, the interpreter must jump to the corresponding ``except`` or ``finally`` block.
In 3.10 and before, there was a separate "block stack" which was used to keep track of nesting ``try`` blocks.
In 3.11, this mechanism has been replaced by a statically generated table, ``code->co_exceptiontable``.
The advantage of this approach is that entering and leaving a ``try`` block normally does not execute any code, making execution faster.
But of course, this table needs to be generated by the compiler, and decoded (by ``get_exception_handler``) when an exception happens.

Exception table format
----------------------

The table is conceptually a list of records, each containing four variable-length integer fields (in a unique format, see below):

- start: start of ``try`` block, in code units from the start of the bytecode
- length: size of the ``try`` block, in code units
- target: start of the first instruction of the ``except`` or ``finally`` block, in code units from the start of the bytecode
- depth_and_lasti: the low bit gives the "lasti" flag, the remaining bits give the stack depth

The stack depth is used to clean up evaluation stack entries above this depth.
The "lasti" flag indicates whether, after stack cleanup, the instruction offset of the raising instruction should be pushed (as a ``PyLongObject *``).
For more information on the design, see :cpy-file:`Objects/exception_handling_notes.txt`.

Each varint is encoded as one or more bytes.
The high bit (bit 7) is reserved for random access -- it is set for the first varint of a record.
The second bit (bit 6) indicates whether this is the last byte or not -- it is set for all but the last bytes of a varint.
The low 6 bits (bits 0-5) are used for the integer value, in big-endian order.

To find the table entry (if any) for a given instruction offset, we can use bisection without decoding the whole table.
We bisect the raw bytes, at each probe finding the start of the record by scanning back for a byte with the high bit set, and then decode the first varint.
See ``get_exception_handler()`` in :cpy-file:`Python/ceval.c` for the exact code (like all bisection algorithms, the code is a bit subtle).

The locations table
-------------------

Whenever an exception is raised, we add a traceback entry to the exception.
The ``tb_lineno`` field of a traceback entry must be set to the line number of the instruction that raised it.
This field is computed from the locations table, ``co_linetable`` (this name is an understatement), using :c:func:`PyCode_Addr2Line`.
This table has an entry for every instruction rather than for every ``try`` block, so a compact format is very important.

The full design of the 3.11 locations table is written up in :cpy-file:`Objects/locations.md`.
While there are rumors that this file is slightly out of date, it is still the best reference we have.
Don't be confused by :cpy-file:`Objects/lnotab_notes.txt`, which describes the 3.10 format.
For backwards compatibility this format is still supported by the ``co_lnotab`` property.

The 3.11 location table format is different because it stores not just the starting line number for each instruction, but also the end line number, *and* the start and end column numbers.
Note that traceback objects don't store all this information -- they store the start line number, for backward compatibility, and the "last instruction" value.
The rest can be computed from the last instruction (``tb_lasti``) with the help of the locations table.
For Python code, a convenient method exists, :meth:`~codeobject.co_positions`, which returns an iterator of :samp:`({line}, {endline}, {column}, {endcolumn})` tuples, one per instruction.
There is also ``co_lines()`` which returns an iterator of :samp:`({start}, {end}, {line})` tuples, where :samp:`{start}` and :samp:`{end}` are bytecode offsets.
The latter is described by :pep:`626`; it is more compact, but doesn't return end line numbers or column offsets.
From C code, you have to call :c:func:`PyCode_Addr2Location`.

Fortunately, the locations table is only consulted by exception handling (to set ``tb_lineno``) and by tracing (to pass the line number to the tracing function).
In order to reduce the overhead during tracing, the mapping from instruction offset to line number is cached in the ``_co_linearray`` field.

Exception chaining
------------------

When an exception is raised during exception handling, the new exception is chained to the old one.
This is done by making the ``__context__`` field of the new exception point to the old one.
This is the responsibility of ``_PyErr_SetObject()`` in :cpy-file:`Python/errors.c` (which is ultimately called by all ``PyErr_Set*()`` functions).
Separately, if a statement of the form :samp:`raise {X} from {Y}` is executed, the ``__cause__`` field of the raised exception (:samp:`{X}`) is set to :samp:`{Y}`.
This is done by :c:func:`PyException_SetCause`, called in response to all ``RAISE_VARARGS`` instructions.
A special case is :samp:`raise {X} from None`, which sets the ``__cause__`` field to ``None`` (at the C level, it sets ``cause`` to ``NULL``).

(TODO: Other exception details.)

Python-to-Python calls
======================

The ``_PyEval_EvalFrameDefault()`` function is recursive, because sometimes the interpreter calls some C function that calls back into the interpreter.
In 3.10 and before, this was the case even when a Python function called another Python function:
The ``CALL`` instruction would call the ``tp_call`` dispatch function of the callee, which would extract the code object, create a new frame for the call stack, and then call back into the interpreter.
This approach is very general but consumes several C stack frames for each nested Python call, thereby increasing the risk of an (unrecoverable) C stack overflow.

In 3.11, the ``CALL`` instruction special-cases function objects to "inline" the call.
When a call gets inlined, a new frame gets pushed onto the call stack and the interpreter "jumps" to the start of the callee's bytecode.
When an inlined callee executes a ``RETURN_VALUE`` instruction, the frame is popped off the call stack and the interpreter returns to its caller,
by popping a frame off the call stack and "jumping" to the return address.
There is a flag in the frame (``frame->is_entry``) that indicates whether the frame was inlined (set if it wasn't).
If ``RETURN_VALUE`` finds this flag set, it performs the usual cleanup and returns from ``_PyEval_EvalFrameDefault()`` altogether, to a C caller.

A similar check is performed when an unhandled exception occurs.

The call stack
==============

Up through 3.10, the call stack used to be implemented as a singly-linked list of :c:type:`PyFrameObject` objects.
This was expensive because each call would require a heap allocation for the stack frame.
(There was some optimization using a free list, but this was not always effective, because frames are variable length.)

In 3.11, frames are no longer fully-fledged objects.
Instead, a leaner internal ``_PyInterpreterFrame`` structure is used, which is allocated using a custom allocator, ``_PyThreadState_BumpFramePointer()``.
Usually a frame allocation is just a pointer bump, which improves memory locality.
The function ``_PyEvalFramePushAndInit()`` allocates and initializes a frame structure.

Sometimes an actual ``PyFrameObject`` is needed, usually because some Python code calls :func:`sys._getframe` or an extension module calls :c:func:`PyEval_GetFrame`.
In this case we allocate a proper ``PyFrameObject`` and initialize it from the ``_PyInterpreterFrame``.
This is a pessimization, but fortunately happens rarely (as introspecting frames is not a common operation).

Things get more complicated when generators are involved, since those don't follow the push/pop model.
(The same applies to async functions, which are implemented using the same infrastructure.)
A generator object has space for a ``_PyInterpreterFrame`` structure, including the variable-size part (used for locals and eval stack).
When a generator (or async) function is first called, a special opcode ``RETURN_GENERATOR`` is executed, which is responsible for creating the generator object.
The generator object's ``_PyInterpreterFrame`` is initialized with a copy of the current stack frame.
The current stack frame is then popped off the stack and the generator object is returned.
(Details differ depending on the ``is_entry`` flag.)
When the generator is resumed, the interpreter pushes the ``_PyInterpreterFrame`` onto the stack and resumes execution.
(There is more hairiness for generators and their ilk; we'll discuss these in a later section in more detail.)

(TODO: Also frame layout and use, and "locals plus".)

All sorts of variables
======================

The bytecode compiler determines the scope in which each variable name is defined, and generates instructions accordingly.
For example, loading a local variable onto the stack is done using ``LOAD_FAST``, while loading a global is done using ``LOAD_GLOBAL``.
The key types of variables are:

- fast locals: used in functions
- (slow or regular) locals: used in classes and at the top level
- globals and builtins: the compiler does not distinguish between globals and builtins (though the specializing interpreter does)
- cells: used for nonlocal references

(TODO: Write the rest of this section. Alas, the author got distracted and won't have time to continue this for a while.)

Other topics
============

(TODO: Each of the following probably deserves its own section.)

- co_consts, co_names, co_varnames, and their ilk
- How calls work (how args are transferred, return, exceptions)
- Generators, async functions, async generators, and ``yield from`` (next, send, throw, close; and await; and how this code breaks the interpreter abstraction)
- Eval breaker (interrupts, GIL)
- Tracing
- Setting the current lineno (debugger-induced jumps)
- Specialization, inline caches etc.


Introducing new bytecode
========================

.. note::

   This section is relevant if you are adding a new bytecode to the interpreter.


Sometimes a new feature requires a new opcode.  But adding new bytecode is
not as simple as just suddenly introducing new bytecode in the AST ->
bytecode step of the compiler.  Several pieces of code throughout Python depend
on having correct information about what bytecode exists.

First, you must choose a name, implement the bytecode in
:cpy-file:`Python/bytecodes.c`, and add a documentation entry in
:cpy-file:`Doc/library/dis.rst`. Then run ``make regen-cases`` to
assign a number for it (see :cpy-file:`Include/opcode_ids.h`) and
regenerate a number of files with the actual implementation of the
bytecodes (:cpy-file:`Python/generated_cases.c.h`) and additional
files with metadata about them.

With a new bytecode you must also change what is called the magic number for
.pyc files.  The variable ``MAGIC_NUMBER`` in
:cpy-file:`Lib/importlib/_bootstrap_external.py` contains the number.
Changing this number will lead to all .pyc files with the old ``MAGIC_NUMBER``
to be recompiled by the interpreter on import.  Whenever ``MAGIC_NUMBER`` is
changed, the ranges in the ``magic_values`` array in :cpy-file:`PC/launcher.c`
must also be updated.  Changes to :cpy-file:`Lib/importlib/_bootstrap_external.py`
will take effect only after running ``make regen-importlib``. Running this
command before adding the new bytecode target to :cpy-file:`Python/bytecodes.c`
(followed by ``make regen-cases``) will result in an error. You should only run
``make regen-importlib`` after the new bytecode target has been added.

.. note:: On Windows, running the ``./build.bat`` script will automatically
   regenerate the required files without requiring additional arguments.

Finally, you need to introduce the use of the new bytecode.  Altering
:cpy-file:`Python/compile.c`, :cpy-file:`Python/bytecodes.c` will be the
primary places to change. Optimizations in :cpy-file:`Python/flowgraph.c`
may also need to be updated.
If the new opcode affects a control flow or the block stack, you may have
to update the ``frame_setlineno()`` function in :cpy-file:`Objects/frameobject.c`.
:cpy-file:`Lib/dis.py` may need an update if the new opcode interprets its
argument in a special way (like ``FORMAT_VALUE`` or ``MAKE_FUNCTION``).

If you make a change here that can affect the output of bytecode that
is already in existence and you do not change the magic number constantly, make
sure to delete your old .py(c|o) files!  Even though you will end up changing
the magic number if you change the bytecode, while you are debugging your work
you will be changing the bytecode output without constantly bumping up the
magic number.  This means you end up with stale .pyc files that will not be
recreated.
Running ``find . -name '*.py[co]' -exec rm -f '{}' +`` should delete all .pyc
files you have, forcing new ones to be created and thus allow you test out your
new bytecode properly.  Run ``make regen-importlib`` for updating the
bytecode of frozen importlib files.  You have to run ``make`` again after this
for recompiling generated C files.


===================================================
/. 🚀 ./internals/garbage-collector.rst
===================================================

.. _garbage-collector:
.. _gc:
.. _garbage_collector:

========================
Garbage collector design
========================

.. highlight:: none

Abstract
========

The main garbage collection algorithm used by CPython is reference counting. The basic idea is
that CPython counts how many different places there are that have a reference to an
object. Such a place could be another object, or a global (or static) C variable, or
a local variable in some C function. When an object’s reference count becomes zero,
the object is deallocated. If it contains references to other objects, their
reference counts are decremented. Those other objects may be deallocated in turn, if
this decrement makes their reference count become zero, and so on. The reference
count field can be examined using the ``sys.getrefcount`` function (notice that the
value returned by this function is always 1 more as the function also has a reference
to the object when called):

.. code-block:: python

    >>> x = object()
    >>> sys.getrefcount(x)
    2
    >>> y = x
    >>> sys.getrefcount(x)
    3
    >>> del y
    >>> sys.getrefcount(x)
    2

The main problem with the reference counting scheme is that it does not handle reference
cycles. For instance, consider this code:

.. code-block:: python

    >>> container = []
    >>> container.append(container)
    >>> sys.getrefcount(container)
    3
    >>> del container

In this example, ``container`` holds a reference to itself, so even when we remove
our reference to it (the variable "container") the reference count never falls to 0
because it still has its own internal reference. Therefore it would never be
cleaned just by simple reference counting. For this reason some additional machinery
is needed to clean these reference cycles between objects once they become
unreachable. This is the cyclic garbage collector, usually called just Garbage
Collector (GC), even though reference counting is also a form of garbage collection.

Memory layout and object structure
==================================

Normally the C structure supporting a regular Python object looks as follows:

.. code-block:: none

    . object -----> +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ \
    .               |                    ob_refcnt                  | |
    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ | PyObject_HEAD
    .               |                    *ob_type                   | |
    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ /
    .               |                      ...                      |


In order to support the garbage collector, the memory layout of objects is altered
to accommodate extra information **before** the normal layout:

.. code-block:: none

    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ \
    .               |                    *_gc_next                  | |
    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ | PyGC_Head
    .               |                    *_gc_prev                  | |
    . object -----> +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ /
    .               |                    ob_refcnt                  | \
    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ | PyObject_HEAD
    .               |                    *ob_type                   | |
    .               +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+ /
    .               |                      ...                      |


In this way the object can be treated as a normal python object and when the extra
information associated to the GC is needed the previous fields can be accessed by a
simple type cast from the original object: :code:`((PyGC_Head *)(the_object)-1)`.

As is explained later in the `Optimization: reusing fields to save memory`_ section,
these two extra fields are normally used to keep doubly linked lists of all the
objects tracked by the garbage collector (these lists are the GC generations, more on
that in the `Optimization: generations`_ section), but they are also
reused to fulfill other purposes when the full doubly linked list structure is not
needed as a memory optimization.

Doubly linked lists are used because they efficiently support most frequently required operations.  In
general, the collection of all objects tracked by GC are partitioned into disjoint sets, each in its own
doubly linked list.  Between collections, objects are partitioned into "generations", reflecting how
often they've survived collection attempts.  During collections, the generation(s) being collected
are further partitioned into, e.g., sets of reachable and unreachable objects.  Doubly linked lists
support moving an object from one partition to another, adding a new object,  removing an object
entirely (objects tracked by GC are most often reclaimed by the refcounting system when GC
isn't running at all!), and merging partitions, all with a small constant number of pointer updates.
With care, they also support iterating over a partition while objects are being added to - and
removed from - it, which is frequently required while GC is running.

Specific APIs are offered to allocate, deallocate, initialize, track, and untrack
objects with GC support. These APIs can be found in the `Garbage Collector C API
documentation <https://docs.python.org/3.8/c-api/gcsupport.html>`_.

Apart from this object structure, the type object for objects supporting garbage
collection must include the ``Py_TPFLAGS_HAVE_GC`` in its ``tp_flags`` slot and
provide an implementation of the ``tp_traverse`` handler. Unless it can be proven
that the objects cannot form reference cycles with only objects of its type or unless
the type is immutable, a ``tp_clear`` implementation must also be provided.


Identifying reference cycles
============================

The algorithm that CPython uses to detect those reference cycles is
implemented in the ``gc`` module. The garbage collector **only focuses**
on cleaning container objects (i.e. objects that can contain a reference
to one or more objects). These can be arrays, dictionaries, lists, custom
class instances, classes in extension modules, etc. One could think that
cycles are uncommon but the truth is that many internal references needed by
the interpreter create cycles everywhere. Some notable examples:

* Exceptions contain traceback objects that contain a list of frames that
  contain the exception itself.
* Module-level functions reference the module's dict (which is needed to resolve globals),
  which in turn contains entries for the module-level functions.
* Instances have references to their class which itself references its module, and the module
  contains references to everything that is inside (and maybe other modules)
  and this can lead back to the original instance.
* When representing data structures like graphs, it is very typical for them to
  have internal links to themselves.

To correctly dispose of these objects once they become unreachable, they need to be
identified first.  Inside the function that identifies cycles, two doubly linked
lists are maintained: one list contains all objects to be scanned, and the other will
contain all objects "tentatively" unreachable.

To understand how the algorithm works, let’s take the case of a circular linked list
which has one link referenced by a variable ``A``, and one self-referencing object which
is completely unreachable:

.. code-block:: python

    >>> import gc

    >>> class Link:
    ...    def __init__(self, next_link=None):
    ...        self.next_link = next_link

    >>> link_3 = Link()
    >>> link_2 = Link(link_3)
    >>> link_1 = Link(link_2)
    >>> link_3.next_link = link_1
    >>> A = link_1
    >>> del link_1, link_2, link_3

    >>> link_4 = Link()
    >>> link_4.next_link = link_4
    >>> del link_4

    # Collect the unreachable Link object (and its .__dict__ dict).
    >>> gc.collect()
    2

When the GC starts, it has all the container objects it wants to scan
on the first linked list. The objective is to move all the unreachable
objects. Since most objects turn out to be reachable, it is much more
efficient to move the unreachable as this involves fewer pointer updates.

Every object that supports garbage collection will have an extra reference
count field initialized to the reference count (``gc_ref`` in the figures)
of that object when the algorithm starts. This is because the algorithm needs
to modify the reference count to do the computations and in this way the
interpreter will not modify the real reference count field.

.. figure:: /_static/python-cyclic-gc-1-new-page.png

The GC then iterates over all containers in the first list and decrements by one the
``gc_ref`` field of any other object that container is referencing.  Doing
this makes use of the ``tp_traverse`` slot in the container class (implemented
using the C API or inherited by a superclass) to know what objects are referenced by
each container. After all the objects have been scanned, only the objects that have
references from outside the “objects to scan” list will have ``gc_ref > 0``.

.. figure:: /_static/python-cyclic-gc-2-new-page.png

Notice that having ``gc_ref == 0`` does not imply that the object is unreachable.
This is because another object that is reachable from the outside (``gc_ref > 0``)
can still have references to it. For instance, the ``link_2`` object in our example
ended having ``gc_ref == 0`` but is referenced still by the ``link_1`` object that
is reachable from the outside. To obtain the set of objects that are really
unreachable, the garbage collector re-scans the container objects using the
``tp_traverse`` slot; this time with a different traverse function that marks objects with
``gc_ref == 0`` as "tentatively unreachable" and then moves them to the
tentatively unreachable list. The following image depicts the state of the lists in a
moment when the GC processed the ``link_3`` and ``link_4`` objects but has not
processed ``link_1`` and ``link_2`` yet.

.. figure:: /_static/python-cyclic-gc-3-new-page.png

Then the GC scans the next ``link_1`` object. Because it has ``gc_ref == 1``,
the gc does not do anything special because it knows it has to be reachable (and is
already in what will become the reachable list):

.. figure:: /_static/python-cyclic-gc-4-new-page.png

When the GC encounters an object which is reachable (``gc_ref > 0``), it traverses
its references using the ``tp_traverse`` slot to find all the objects that are
reachable from it, moving them to the end of the list of reachable objects (where
they started originally) and setting its ``gc_ref`` field to 1. This is what happens
to ``link_2`` and ``link_3`` below as they are reachable from ``link_1``.  From the
state in the previous image and after examining the objects referred to by ``link_1``
the GC knows that ``link_3`` is reachable after all, so it is moved back to the
original list and its ``gc_ref`` field is set to 1 so that if the GC visits it again,
it will know that it's reachable. To avoid visiting an object twice, the GC marks all
objects that have already been visited once (by unsetting the ``PREV_MASK_COLLECTING``
flag) so that if an object that has already been processed is referenced by some other
object, the GC does not process it twice.

.. figure:: /_static/python-cyclic-gc-5-new-page.png

Notice that an object that was marked as "tentatively unreachable" and was later
moved back to the reachable list will be visited again by the garbage collector
as now all the references that that object has need to be processed as well. This
process is really a breadth first search over the object graph. Once all the objects
are scanned, the GC knows that all container objects in the tentatively unreachable
list are really unreachable and can thus be garbage collected.

Pragmatically, it's important to note that no recursion is required by any of this,
and neither does it in any other way require additional memory proportional to the
number of objects, number of pointers, or the lengths of pointer chains.  Apart from
``O(1)`` storage for internal C needs, the objects themselves contain all the storage
the GC algorithms require.

Why moving unreachable objects is better
----------------------------------------

It sounds logical to move the unreachable objects under the premise that most objects
are usually reachable, until you think about it: the reason it pays isn't actually
obvious.

Suppose we create objects A, B, C in that order. They appear in the young generation
in the same order. If B points to A, and C to B, and C is reachable from outside,
then the adjusted refcounts after the first step of the algorithm runs will be 0, 0,
and 1 respectively because the only reachable object from the outside is C.

When the next step of the algorithm finds A, A is moved to the unreachable list. The
same for B when it's first encountered. Then C is traversed, B is moved *back* to
the reachable list. B is eventually traversed, and then A is moved back to the reachable
list.

So instead of not moving at all, the reachable objects B and A are each moved twice.
Why is this a win? A straightforward algorithm to move the reachable objects instead
would move A, B, and C once each. The key is that this dance leaves the objects in
order C, B, A - it's reversed from the original order.  On all *subsequent* scans,
none of them will move.  Since most objects aren't in cycles, this can save an
unbounded number of moves across an unbounded number of later collections. The only
time the cost can be higher is the first time the chain is scanned.

Destroying unreachable objects
==============================

Once the GC knows the list of unreachable objects, a very delicate process starts
with the objective of completely destroying these objects. Roughly, the process
follows these steps in order:

1. Handle and clean weak references (if any). If an object that is in the unreachable
   set is going to be destroyed and has weak references with callbacks, these
   callbacks need to be honored. This process is **very** delicate as any error can
   cause objects that will be in an inconsistent state to be resurrected or reached
   by some Python functions invoked from the callbacks. In addition, weak references
   that also are part of the unreachable set (the object and its weak reference
   are in cycles that are unreachable) need to be cleaned
   immediately, without executing the callback. Otherwise it will be triggered later,
   when the ``tp_clear`` slot is called, causing havoc. Ignoring the weak reference's
   callback is fine because both the object and the weakref are going away, so it's
   legitimate to say the weak reference is going away first.

2. If an object has legacy finalizers (``tp_del`` slot) move them to the
   ``gc.garbage`` list.
3. Call the finalizers (``tp_finalize`` slot) and mark the objects as already
   finalized to avoid calling them twice if they resurrect or if other finalizers
   have removed the object first.
4. Deal with resurrected objects. If some objects have been resurrected, the GC
   finds the new subset of objects that are still unreachable by running the cycle
   detection algorithm again and continues with them.
5. Call the ``tp_clear`` slot of every object so all internal links are broken and
   the reference counts fall to 0, triggering the destruction of all unreachable
   objects.

Optimization: generations
=========================

In order to limit the time each garbage collection takes, the GC uses a popular
optimization: generations. The main idea behind this concept is the assumption that
most objects have a very short lifespan and can thus be collected shortly after their
creation. This has proven to be very close to the reality of many Python programs as
many temporary objects are created and destroyed very fast. The older an object is
the less likely it is that it will become unreachable.

To take advantage of this fact, all container objects are segregated into
three spaces/generations. Every new
object starts in the first generation (generation 0). The previous algorithm is
executed only over the objects of a particular generation and if an object
survives a collection of its generation it will be moved to the next one
(generation 1), where it will be surveyed for collection less often. If
the same object survives another GC round in this new generation (generation 1)
it will be moved to the last generation (generation 2) where it will be
surveyed the least often.

In order to decide when to run, the collector keeps track of the number of object
allocations and deallocations since the last collection. When the number of
allocations minus the number of deallocations exceeds ``threshold_0``,
collection starts. Initially only generation 0 is examined. If generation 0 has
been examined more than ``threshold_1`` times since generation 1 has been
examined, then generation 1 is examined as well. With generation 2,
things are a bit more complicated; see :ref:`gc-oldest-generation` for
more information. These thresholds can be examined using the
:func:`gc.get_threshold` function:

.. code-block:: python

    >>> import gc
    >>> gc.get_threshold()
    (700, 10, 10)


The content of these generations can be examined using the
``gc.get_objects(generation=NUM)`` function and collections can be triggered
specifically in a generation by calling ``gc.collect(generation=NUM)``.

.. code-block:: python

    >>> import gc
    >>> class MyObj:
    ...     pass
    ...

    # Move everything to the last generation so it's easier to inspect
    # the younger generations.

    >>> gc.collect()
    0

    # Create a reference cycle.

    >>> x = MyObj()
    >>> x.self = x

    # Initially the object is in the youngest generation.

    >>> gc.get_objects(generation=0)
    [..., <__main__.MyObj object at 0x7fbcc12a3400>, ...]

    # After a collection of the youngest generation the object
    # moves to the next generation.

    >>> gc.collect(generation=0)
    0
    >>> gc.get_objects(generation=0)
    []
    >>> gc.get_objects(generation=1)
    [..., <__main__.MyObj object at 0x7fbcc12a3400>, ...]


.. _gc-oldest-generation:

Collecting the oldest generation
--------------------------------

In addition to the various configurable thresholds, the GC only triggers a full
collection of the oldest generation if the ratio ``long_lived_pending / long_lived_total``
is above a given value (hardwired to 25%). The reason is that, while "non-full"
collections (i.e., collections of the young and middle generations) will always
examine roughly the same number of objects (determined by the aforementioned
thresholds) the cost of a full collection is proportional to the total
number of long-lived objects, which is virtually unbounded.  Indeed, it has
been remarked that doing a full collection every <constant number> of object
creations entails a dramatic performance degradation in workloads which consist
of creating and storing lots of long-lived objects (e.g. building a large list
of GC-tracked objects would show quadratic performance, instead of linear as
expected). Using the above ratio, instead, yields amortized linear performance
in the total number of objects (the effect of which can be summarized thusly:
"each full garbage collection is more and more costly as the number of objects
grows, but we do fewer and fewer of them").

Optimization: reusing fields to save memory
===========================================

In order to save memory, the two linked list pointers in every object with GC
support are reused for several purposes. This is a common optimization known
as "fat pointers" or "tagged pointers": pointers that carry additional data,
"folded" into the pointer, meaning stored inline in the data representing the
address, taking advantage of certain properties of memory addressing. This is
possible as most architectures align certain types of data
to the size of the data, often a word or multiple thereof. This discrepancy
leaves a few of the least significant bits of the pointer unused, which can be
used for tags or to keep other information – most often as a bit field (each
bit a separate tag) – as long as code that uses the pointer masks out these
bits before accessing memory.  E.g., on a 32-bit architecture (for both
addresses and word size), a word is 32 bits = 4 bytes, so word-aligned
addresses are always a multiple of 4, hence end in ``00``, leaving the last 2 bits
available; while on a 64-bit architecture, a word is 64 bits = 8 bytes, so
word-aligned addresses end in ``000``, leaving the last 3 bits available.

The CPython GC makes use of two fat pointers that correspond to the extra fields
of ``PyGC_Head`` discussed in the `Memory layout and object structure`_ section:

.. warning::

   Because the presence of extra information, "tagged" or "fat" pointers cannot be
   dereferenced directly and the extra information must be stripped off before
   obtaining the real memory address. Special care needs to be taken with
   functions that directly manipulate the linked lists, as these functions
   normally assume the pointers inside the lists are in a consistent state.


* The ``_gc_prev`` field is normally used as the "previous" pointer to maintain the
  doubly linked list but its lowest two bits are used to keep the flags
  ``PREV_MASK_COLLECTING`` and ``_PyGC_PREV_MASK_FINALIZED``. Between collections,
  the only flag that can be present is ``_PyGC_PREV_MASK_FINALIZED`` that indicates
  if an object has been already finalized. During collections ``_gc_prev`` is
  temporarily used for storing a copy of the reference count (``gc_ref``), in
  addition to two flags, and the GC linked list becomes a singly linked list until
  ``_gc_prev`` is restored.

* The ``_gc_next`` field is used as the "next" pointer to maintain the doubly linked
  list but during collection its lowest bit is used to keep the
  ``NEXT_MASK_UNREACHABLE`` flag that indicates if an object is tentatively
  unreachable during the cycle detection algorithm.  This is a drawback to using only
  doubly linked lists to implement partitions:  while most needed operations are
  constant-time, there is no efficient way to determine which partition an object is
  currently in.  Instead, when that's needed, ad hoc tricks (like the
  ``NEXT_MASK_UNREACHABLE`` flag) are employed.

Optimization: delay tracking containers
=======================================

Certain types of containers cannot participate in a reference cycle, and so do
not need to be tracked by the garbage collector. Untracking these objects
reduces the cost of garbage collection. However, determining which objects may
be untracked is not free, and the costs must be weighed against the benefits
for garbage collection. There are two possible strategies for when to untrack
a container:

1. When the container is created.
2. When the container is examined by the garbage collector.

As a general rule, instances of atomic types aren't tracked and instances of
non-atomic types (containers, user-defined objects...) are.  However, some
type-specific optimizations can be present in order to suppress the garbage
collector footprint of simple instances. Some examples of native types that
benefit from delayed tracking:

* Tuples containing only immutable objects (integers, strings etc,
  and recursively, tuples of immutable objects) do not need to be tracked. The
  interpreter creates a large number of tuples, many of which will not survive
  until garbage collection. It is therefore not worthwhile to untrack eligible
  tuples at creation time. Instead, all tuples except the empty tuple are tracked
  when created. During garbage collection it is determined whether any surviving
  tuples can be untracked. A tuple can be untracked if all of its contents are
  already not tracked. Tuples are examined for untracking in all garbage collection
  cycles. It may take more than one cycle to untrack a tuple.

* Dictionaries containing only immutable objects also do not need to be tracked.
  Dictionaries are untracked when created. If a tracked item is inserted into a
  dictionary (either as a key or value), the dictionary becomes tracked. During a
  full garbage collection (all generations), the collector will untrack any dictionaries
  whose contents are not tracked.

The garbage collector module provides the Python function ``is_tracked(obj)``, which returns
the current tracking status of the object. Subsequent garbage collections may change the
tracking status of the object.

.. code-block:: python

      >>> gc.is_tracked(0)
      False
      >>> gc.is_tracked("a")
      False
      >>> gc.is_tracked([])
      True
      >>> gc.is_tracked({})
      False
      >>> gc.is_tracked({"a": 1})
      False
      >>> gc.is_tracked({"a": []})
      True


.. admonition:: Document History
   :class: note

   Pablo Galindo Salgado - Original Author


===================================================
/. 🚀 ./versions.rst
===================================================

.. _versions:
.. _branchstatus:

=========================
Status of Python versions
=========================

The ``main`` branch is currently the future Python 3.13, and is the only
branch that accepts new features.  The latest release for each Python
version can be found on the `download page <https://www.python.org/downloads/>`_.


Python release cycle
====================

.. raw:: html
   :file: include/release-cycle.svg

Supported versions
==================

Dates shown in *italic* are scheduled and can be adjusted.

.. csv-table::
   :header-rows: 1
   :width: 100%
   :file: include/branches.csv

.. Remember to update main branch in the paragraph above too


Unsupported versions
====================

.. csv-table::
   :header-rows: 1
   :width: 100%
   :file: include/end-of-life.csv


Status key
==========

:feature: new features, bugfixes, and security fixes are accepted.
:prerelease: feature fixes, bugfixes, and security fixes are accepted for the
    upcoming feature release.
:bugfix: bugfixes and security fixes are accepted, new binaries are still
    released. (Also called **maintenance** mode or **stable** release)
:security: only security fixes are accepted and no more binaries are released,
    but new source-only versions can be released
:end-of-life: release cycle is frozen; no further changes can be pushed to it.

See also the :ref:`devcycle` page for more information about branches and backporting.

By default, the end-of-life is scheduled 5 years after the first release,
but can be adjusted by the release manager of each branch.  All Python 2
versions have reached end-of-life.
