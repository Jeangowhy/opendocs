

===================================================
/. /RST docs combine script
===================================================

文档合并脚本中使用了 sed 流式文档处理工具，使用教程参考： 

1. [Sed in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info) "
2. [AWK in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)"

.. code-block:: sh

    #! /usr/bin/env bash
    
    print_title () {
        printf '\n%.0s' {1..2};
        printf '=%.0s' {1..51};
        printf "\n/. $1\n"
        printf '=%.0s' {1..51};
        printf '\n%.0s' {1..2};
    }
    
    print_title "/RST docs combine script"
    cat << EOF
    文档合并脚本中使用了 sed 流式文档处理工具，使用教程参考："
    
    1. [Sed in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info) "
    2. [AWK in 5 Minius](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)"
    
    EOF
    cat $0 | sed -n 's/^/    /p'
    
    function filter {
        local parent=`echo $1 | sed -n 's/[^/\]\+$//p'`
        for it in `sed -n "/^.. toctree/,/^\w/{ s/^ \+\w/\0/p }" $1`
        do
            rst=$parent$it.rst
            echo $rst
            filter $rst
        done
    }
    
    while read -r line
    do 
        print_title "$line"
        cat $line
    done << EOF
    `
    echo ../deps/uv/README.md
    filter ../deps/uv/docs/src/index.rst
    `
    EOF

-----------------
Table of Contents
-----------------

* ../deps/uv/README.md
* ../deps/uv/docs/src/design.rst
* ../deps/uv/docs/src/api.rst
   * ../deps/uv/docs/src/errors.rst
   * ../deps/uv/docs/src/version.rst
   * ../deps/uv/docs/src/loop.rst
   * ../deps/uv/docs/src/handle.rst
   * ../deps/uv/docs/src/request.rst
   * ../deps/uv/docs/src/timer.rst
   * ../deps/uv/docs/src/prepare.rst
   * ../deps/uv/docs/src/check.rst
   * ../deps/uv/docs/src/idle.rst
   * ../deps/uv/docs/src/async.rst
   * ../deps/uv/docs/src/poll.rst
   * ../deps/uv/docs/src/signal.rst
   * ../deps/uv/docs/src/process.rst
   * ../deps/uv/docs/src/stream.rst
   * ../deps/uv/docs/src/tcp.rst
   * ../deps/uv/docs/src/pipe.rst
   * ../deps/uv/docs/src/tty.rst
   * ../deps/uv/docs/src/udp.rst
   * ../deps/uv/docs/src/fs_event.rst
   * ../deps/uv/docs/src/fs_poll.rst
   * ../deps/uv/docs/src/fs.rst
   * ../deps/uv/docs/src/threadpool.rst
   * ../deps/uv/docs/src/dns.rst
   * ../deps/uv/docs/src/dll.rst
   * ../deps/uv/docs/src/threading.rst
   * ../deps/uv/docs/src/misc.rst
   * ../deps/uv/docs/src/metrics.rst
* ../deps/uv/docs/src/guide.rst
* ../deps/uv/docs/src/upgrading.rst
* ../deps/uv/docs/src/migration_010_100.rst


===================================================
/. ../deps/uv/README.md
===================================================

![libuv][libuv_banner]

-----------------------------
## Overview
-----------------------------

libuv is a multi-platform support library with a focus on asynchronous I/O. It
was primarily developed for use by [Node.js][], but it's also
used by [Luvit](http://luvit.io/), [Julia](http://julialang.org/),
[uvloop](https://github.com/MagicStack/uvloop), and [others](https://github.com/libuv/libuv/blob/v1.x/LINKS.md).

-----------------------------
## Feature highlights
-----------------------------

 * Full-featured event loop backed by epoll, kqueue, IOCP, event ports.

 * Asynchronous TCP and UDP sockets

 * Asynchronous DNS resolution

 * Asynchronous file and file system operations

 * File system events

 * ANSI escape code controlled TTY

 * IPC with socket sharing, using Unix domain sockets or named pipes (Windows)

 * Child processes

 * Thread pool

 * Signal handling

 * High resolution clock

 * Threading and synchronization primitives

-----------------------------
## Versioning
-----------------------------

Starting with version 1.0.0 libuv follows the [semantic versioning](http://semver.org/)
scheme. The API change and backwards compatibility rules are those indicated by
SemVer. libuv will keep a stable ABI across major releases.

The ABI/API changes can be tracked [here](http://abi-laboratory.pro/tracker/timeline/libuv/).

-----------------------------
## Licensing
-----------------------------

libuv is licensed under the MIT license. Check the [LICENSE](LICENSE) and
[LICENSE-extra](LICENSE-extra) files.

The documentation is licensed under the CC BY 4.0 license. Check the
[LICENSE-docs file](LICENSE-docs).

-----------------------------
## Community
-----------------------------

 * [Support](https://github.com/libuv/libuv/discussions)
 * [Mailing list](http://groups.google.com/group/libuv)

-----------------------------
## Documentation
-----------------------------

-----------------------------
### Official documentation
-----------------------------

Located in the docs/ subdirectory. It uses the [Sphinx](http://sphinx-doc.org/)
framework, which makes it possible to build the documentation in multiple
formats.

Show different supported building options:

```bash
$ make help
```

Build documentation as HTML:

```bash
$ make html
```

Build documentation as HTML and live reload it when it changes (this requires
sphinx-autobuild to be installed and is only supported on Unix):

```bash
$ make livehtml
```

Build documentation as man pages:

```bash
$ make man
```

Build documentation as ePub:

```bash
$ make epub
```

NOTE: Windows users need to use make.bat instead of plain 'make'.

Documentation can be browsed online [here](http://docs.libuv.org).

The [tests and benchmarks](https://github.com/libuv/libuv/tree/master/test)
also serve as API specification and usage examples.

-----------------------------
### Other resources
-----------------------------

 * [LXJS 2012 talk](http://www.youtube.com/watch?v=nGn60vDSxQ4)
   &mdash; High-level introductory talk about libuv.
 * [libuv-dox](https://github.com/thlorenz/libuv-dox)
   &mdash; Documenting types and methods of libuv, mostly by reading uv.h.
 * [learnuv](https://github.com/thlorenz/learnuv)
   &mdash; Learn uv for fun and profit, a self guided workshop to libuv.

These resources are not handled by libuv maintainers and might be out of
date. Please verify it before opening new issues.

-----------------------------
## Downloading
-----------------------------

libuv can be downloaded either from the
[GitHub repository](https://github.com/libuv/libuv)
or from the [downloads site](http://dist.libuv.org/dist/).

Before verifying the git tags or signature files, importing the relevant keys
is necessary. Key IDs are listed in the
[MAINTAINERS](https://github.com/libuv/libuv/blob/master/MAINTAINERS.md)
file, but are also available as git blob objects for easier use.

Importing a key the usual way:

```bash
$ gpg --keyserver pool.sks-keyservers.net --recv-keys AE9BC059
```

Importing a key from a git blob object:

```bash
$ git show pubkey-saghul | gpg --import
```

-----------------------------
### Verifying releases
-----------------------------

Git tags are signed with the developer's key, they can be verified as follows:

```bash
$ git verify-tag v1.6.1
```

Starting with libuv 1.7.0, the tarballs stored in the
[downloads site](http://dist.libuv.org/dist/) are signed and an accompanying
signature file sit alongside each. Once both the release tarball and the
signature file are downloaded, the file can be verified as follows:

```bash
$ gpg --verify libuv-1.7.0.tar.gz.sign
```

-----------------------------
## Build Instructions
-----------------------------

For UNIX-like platforms, including macOS, there are two build methods:
autotools or [CMake][].

For Windows, [CMake][] is the only supported build method and has the
following prerequisites:

<details>

* One of:
  * [Visual C++ Build Tools][]
  * [Visual Studio 2015 Update 3][], all editions
    including the Community edition (remember to select
    "Common Tools for Visual C++ 2015" feature during installation).
  * [Visual Studio 2017][], any edition (including the Build Tools SKU).
    **Required Components:** "MSbuild", "VC++ 2017 v141 toolset" and one of the
    Windows SDKs (10 or 8.1).
* Basic Unix tools required for some tests,
  [Git for Windows][] includes Git Bash
  and tools which can be included in the global `PATH`.

</details>

To build with autotools:

```bash
$ sh autogen.sh
$ ./configure
$ make
$ make check
$ make install
```

To build with [CMake][]:

```bash
$ mkdir -p build

$ (cd build && cmake .. -DBUILD_TESTING=ON) # generate project with tests
$ cmake --build build                       # add `-j <n>` with cmake >= 3.12

# Run tests:
$ (cd build && ctest -C Debug --output-on-failure)

# Or manually run tests:
$ build/uv_run_tests                        # shared library build
$ build/uv_run_tests_a                      # static library build
```

To cross-compile with [CMake][] (unsupported but generally works):

```bash
$ cmake ../..                 \
  -DCMAKE_SYSTEM_NAME=Windows \
  -DCMAKE_SYSTEM_VERSION=6.1  \
  -DCMAKE_C_COMPILER=i686-w64-mingw32-gcc
```

-----------------------------
### Install with Homebrew
-----------------------------

```bash
$ brew install --HEAD libuv
```

Note to OS X users:

Make sure that you specify the architecture you wish to build for in the
"ARCHS" flag. You can specify more than one by delimiting with a space
(e.g. "x86_64 i386").

-----------------------------
### Install with vcpkg
-----------------------------

```bash
$ git clone https://github.com/microsoft/vcpkg.git
$ ./bootstrap-vcpkg.bat # for powershell
$ ./bootstrap-vcpkg.sh # for bash
$ ./vcpkg install libuv
```

-----------------------------
### Running tests
-----------------------------

Some tests are timing sensitive. Relaxing test timeouts may be necessary
on slow or overloaded machines:

```bash
$ env UV_TEST_TIMEOUT_MULTIPLIER=2 build/uv_run_tests # 10s instead of 5s
```

-----------------------------
#### Run one test
-----------------------------

The list of all tests is in `test/test-list.h`.

This invocation will cause the test driver to fork and execute `TEST_NAME` in
a child process:

```bash
$ build/uv_run_tests_a TEST_NAME
```

This invocation will cause the test driver to execute the test in
the same process:

```bash
$ build/uv_run_tests_a TEST_NAME TEST_NAME
```

-----------------------------
#### Debugging tools
-----------------------------

When running the test from within the test driver process
(`build/uv_run_tests_a TEST_NAME TEST_NAME`), tools like gdb and valgrind
work normally.

When running the test from a child of the test driver process
(`build/uv_run_tests_a TEST_NAME`), use these tools in a fork-aware manner.

-----------------------------
##### Fork-aware gdb
-----------------------------

Use the [follow-fork-mode](https://sourceware.org/gdb/onlinedocs/gdb/Forks.html) setting:

```
$ gdb --args build/uv_run_tests_a TEST_NAME

(gdb) set follow-fork-mode child
...
```


-----------------------------
##### Fork-aware valgrind
-----------------------------

Use the `--trace-children=yes` parameter:

```bash
$ valgrind --trace-children=yes -v --tool=memcheck --leak-check=full --track-origins=yes --leak-resolution=high --show-reachable=yes --log-file=memcheck-%p.log build/uv_run_tests_a TEST_NAME
```

-----------------------------
### Running benchmarks
-----------------------------

See the section on running tests.
The benchmark driver is `./uv_run_benchmarks_a` and the benchmarks are
listed in `test/benchmark-list.h`.

-----------------------------
## Supported Platforms
-----------------------------

Check the [SUPPORTED_PLATFORMS file](SUPPORTED_PLATFORMS.md).

-----------------------------
### `-fno-strict-aliasing`
-----------------------------

It is recommended to turn on the `-fno-strict-aliasing` compiler flag in
projects that use libuv. The use of ad hoc "inheritance" in the libuv API
may not be safe in the presence of compiler optimizations that depend on
strict aliasing.

MSVC does not have an equivalent flag but it also does not appear to need it
at the time of writing (December 2019.)

-----------------------------
### AIX Notes
-----------------------------

AIX compilation using IBM XL C/C++ requires version 12.1 or greater.

AIX support for filesystem events requires the non-default IBM `bos.ahafs`
package to be installed.  This package provides the AIX Event Infrastructure
that is detected by `autoconf`.
[IBM documentation](http://www.ibm.com/developerworks/aix/library/au-aix_event_infrastructure/)
describes the package in more detail.

-----------------------------
### z/OS Notes
-----------------------------

z/OS compilation requires [ZOSLIB](https://github.com/ibmruntimes/zoslib) to be installed. When building with [CMake][], use the flag `-DZOSLIB_DIR` to specify the path to [ZOSLIB](https://github.com/ibmruntimes/zoslib):

```bash
$ (cd build && cmake .. -DBUILD_TESTING=ON -DZOSLIB_DIR=/path/to/zoslib)
$ cmake --build build
```

z/OS creates System V semaphores and message queues. These persist on the system
after the process terminates unless the event loop is closed.

Use the `ipcrm` command to manually clear up System V resources.

-----------------------------
## Patches
-----------------------------

See the [guidelines for contributing][].

[CMake]: https://cmake.org/
[node.js]: http://nodejs.org/
[guidelines for contributing]: https://github.com/libuv/libuv/blob/master/CONTRIBUTING.md
[libuv_banner]: https://raw.githubusercontent.com/libuv/libuv/master/img/banner.png
[Visual C++ Build Tools]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[Visual Studio 2015 Update 3]: https://www.visualstudio.com/vs/older-downloads/
[Visual Studio 2017]: https://www.visualstudio.com/downloads/
[Git for Windows]: http://git-scm.com/download/win


===================================================
/. ../deps/uv/docs/src/design.rst
===================================================


.. _design:

Design overview
===============

libuv is cross-platform support library which was originally written for `Node.js`_. It's designed
around the event-driven asynchronous I/O model.

.. _Node.js: https://nodejs.org

The library provides much more than a simple abstraction over different I/O polling mechanisms:
'handles' and 'streams' provide a high level abstraction for sockets and other entities;
cross-platform file I/O and threading functionality is also provided, amongst other things.

Here is a diagram illustrating the different parts that compose libuv and what subsystem they
relate to:

.. image:: static/architecture.png
    :scale: 75%
    :align: center


Handles and requests
^^^^^^^^^^^^^^^^^^^^

libuv provides users with 2 abstractions to work with, in combination with the event loop:
handles and requests.

Handles represent long-lived objects capable of performing certain operations while active. Some examples:

- A prepare handle gets its callback called once every loop iteration when active.
- A TCP server handle that gets its connection callback called every time there is a new connection.

Requests represent (typically) short-lived operations. These operations can be performed over a
handle: write requests are used to write data on a handle; or standalone: getaddrinfo requests
don't need a handle they run directly on the loop.


The I/O loop
^^^^^^^^^^^^

The I/O (or event) loop is the central part of libuv. It establishes the content for all I/O
operations, and it's meant to be tied to a single thread. One can run multiple event loops
as long as each runs in a different thread. The libuv event loop (or any other API involving
the loop or handles, for that matter) **is not thread-safe** except where stated otherwise.

The event loop follows the rather usual single threaded asynchronous I/O approach: all (network)
I/O is performed on non-blocking sockets which are polled using the best mechanism available
on the given platform: epoll on Linux, kqueue on OSX and other BSDs, event ports on SunOS and IOCP
on Windows. As part of a loop iteration the loop will block waiting for I/O activity on sockets
which have been added to the poller and callbacks will be fired indicating socket conditions
(readable, writable hangup) so handles can read, write or perform the desired I/O operation.

In order to better understand how the event loop operates, the following diagram illustrates all
stages of a loop iteration:

.. image:: static/loop_iteration.png
    :scale: 75%
    :align: center


#. The loop concept of 'now' is initially set.

#. Due timers are run if the loop was run with ``UV_RUN_DEFAULT``. All active timers scheduled
   for a time before the loop's concept of *now* get their callbacks called.

#. If the loop is *alive*  an iteration is started, otherwise the loop will exit immediately. So,
   when is a loop considered to be *alive*? If a loop has active and ref'd handles, active
   requests or closing handles it's considered to be *alive*.

#. Pending callbacks are called. All I/O callbacks are called right after polling for I/O, for the
   most part. There are cases, however, in which calling such a callback is deferred for the next
   loop iteration. If the previous iteration deferred any I/O callback it will be run at this point.

#. Idle handle callbacks are called. Despite the unfortunate name, idle handles are run on every
   loop iteration, if they are active.

#. Prepare handle callbacks are called. Prepare handles get their callbacks called right before
   the loop will block for I/O.

#. Poll timeout is calculated. Before blocking for I/O the loop calculates for how long it should
   block. These are the rules when calculating the timeout:

        * If the loop was run with the ``UV_RUN_NOWAIT`` flag, the timeout is 0.
        * If the loop is going to be stopped (:c:func:`uv_stop` was called), the timeout is 0.
        * If there are no active handles or requests, the timeout is 0.
        * If there are any idle handles active, the timeout is 0.
        * If there are any handles pending to be closed, the timeout is 0.
        * If none of the above cases matches, the timeout of the closest timer is taken, or
          if there are no active timers, infinity.

#. The loop blocks for I/O. At this point the loop will block for I/O for the duration calculated
   in the previous step. All I/O related handles that were monitoring a given file descriptor
   for a read or write operation get their callbacks called at this point.

#. Check handle callbacks are called. Check handles get their callbacks called right after the
   loop has blocked for I/O. Check handles are essentially the counterpart of prepare handles.

#. Close callbacks are called. If a handle was closed by calling :c:func:`uv_close` it will
   get the close callback called.

#. The loop concept of 'now' is updated.

#. Due timers are run. Note that 'now' is not updated again until the next loop iteration.
   So if a timer became due while other timers were being processed, it won't be run until
   the following event loop iteration.

#. Iteration ends. If the loop was run with ``UV_RUN_NOWAIT`` or ``UV_RUN_ONCE`` modes the
   iteration ends and :c:func:`uv_run` will return. If the loop was run with ``UV_RUN_DEFAULT``
   it will continue from the start if it's still *alive*, otherwise it will also end.


.. important::
    libuv uses a thread pool to make asynchronous file I/O operations possible, but
    network I/O is **always** performed in a single thread, each loop's thread.

.. note::
    While the polling mechanism is different, libuv makes the execution model consistent
    across Unix systems and Windows.


File I/O
^^^^^^^^

Unlike network I/O, there are no platform-specific file I/O primitives libuv could rely on,
so the current approach is to run blocking file I/O operations in a thread pool.

For a thorough explanation of the cross-platform file I/O landscape, check out
`this post <https://blog.libtorrent.org/2012/10/asynchronous-disk-io/>`_.

libuv currently uses a global thread pool on which all loops can queue work. 3 types of
operations are currently run on this pool:

    * File system operations
    * DNS functions (getaddrinfo and getnameinfo)
    * User specified code via :c:func:`uv_queue_work`

.. warning::
    See the :c:ref:`threadpool` section for more details, but keep in mind the thread pool size
    is quite limited.


===================================================
/. ../deps/uv/docs/src/api.rst
===================================================

.. _api:

API documentation
=================

.. toctree::
   :maxdepth: 1

   errors
   version
   loop
   handle
   request
   timer
   prepare
   check
   idle
   async
   poll
   signal
   process
   stream
   tcp
   pipe
   tty
   udp
   fs_event
   fs_poll
   fs
   threadpool
   dns
   dll
   threading
   misc
   metrics



===================================================
/. ../deps/uv/docs/src/errors.rst
===================================================


.. _errors:

Error handling
==============

In libuv errors are negative numbered constants. As a rule of thumb, whenever
there is a status parameter, or an API functions returns an integer, a negative
number will imply an error.

When a function which takes a callback returns an error, the callback will never
be called.

.. note::
    Implementation detail: on Unix error codes are the negated `errno` (or `-errno`), while on
    Windows they are defined by libuv to arbitrary negative numbers.


Error constants
---------------

.. c:macro:: UV_E2BIG

    argument list too long

.. c:macro:: UV_EACCES

    permission denied

.. c:macro:: UV_EADDRINUSE

    address already in use

.. c:macro:: UV_EADDRNOTAVAIL

    address not available

.. c:macro:: UV_EAFNOSUPPORT

    address family not supported

.. c:macro:: UV_EAGAIN

    resource temporarily unavailable

.. c:macro:: UV_EAI_ADDRFAMILY

    address family not supported

.. c:macro:: UV_EAI_AGAIN

    temporary failure

.. c:macro:: UV_EAI_BADFLAGS

    bad ai_flags value

.. c:macro:: UV_EAI_BADHINTS

    invalid value for hints

.. c:macro:: UV_EAI_CANCELED

    request canceled

.. c:macro:: UV_EAI_FAIL

    permanent failure

.. c:macro:: UV_EAI_FAMILY

    ai_family not supported

.. c:macro:: UV_EAI_MEMORY

    out of memory

.. c:macro:: UV_EAI_NODATA

    no address

.. c:macro:: UV_EAI_NONAME

    unknown node or service

.. c:macro:: UV_EAI_OVERFLOW

    argument buffer overflow

.. c:macro:: UV_EAI_PROTOCOL

    resolved protocol is unknown

.. c:macro:: UV_EAI_SERVICE

    service not available for socket type

.. c:macro:: UV_EAI_SOCKTYPE

    socket type not supported

.. c:macro:: UV_EALREADY

    connection already in progress

.. c:macro:: UV_EBADF

    bad file descriptor

.. c:macro:: UV_EBUSY

    resource busy or locked

.. c:macro:: UV_ECANCELED

    operation canceled

.. c:macro:: UV_ECHARSET

    invalid Unicode character

.. c:macro:: UV_ECONNABORTED

    software caused connection abort

.. c:macro:: UV_ECONNREFUSED

    connection refused

.. c:macro:: UV_ECONNRESET

    connection reset by peer

.. c:macro:: UV_EDESTADDRREQ

    destination address required

.. c:macro:: UV_EEXIST

    file already exists

.. c:macro:: UV_EFAULT

    bad address in system call argument

.. c:macro:: UV_EFBIG

    file too large

.. c:macro:: UV_EHOSTUNREACH

    host is unreachable

.. c:macro:: UV_EINTR

    interrupted system call

.. c:macro:: UV_EINVAL

    invalid argument

.. c:macro:: UV_EIO

    i/o error

.. c:macro:: UV_EISCONN

    socket is already connected

.. c:macro:: UV_EISDIR

    illegal operation on a directory

.. c:macro:: UV_ELOOP

    too many symbolic links encountered

.. c:macro:: UV_EMFILE

    too many open files

.. c:macro:: UV_EMSGSIZE

    message too long

.. c:macro:: UV_ENAMETOOLONG

    name too long

.. c:macro:: UV_ENETDOWN

    network is down

.. c:macro:: UV_ENETUNREACH

    network is unreachable

.. c:macro:: UV_ENFILE

    file table overflow

.. c:macro:: UV_ENOBUFS

    no buffer space available

.. c:macro:: UV_ENODEV

    no such device

.. c:macro:: UV_ENOENT

    no such file or directory

.. c:macro:: UV_ENOMEM

    not enough memory

.. c:macro:: UV_ENONET

    machine is not on the network

.. c:macro:: UV_ENOPROTOOPT

    protocol not available

.. c:macro:: UV_ENOSPC

    no space left on device

.. c:macro:: UV_ENOSYS

    function not implemented

.. c:macro:: UV_ENOTCONN

    socket is not connected

.. c:macro:: UV_ENOTDIR

    not a directory

.. c:macro:: UV_ENOTEMPTY

    directory not empty

.. c:macro:: UV_ENOTSOCK

    socket operation on non-socket

.. c:macro:: UV_ENOTSUP

    operation not supported on socket

.. c:macro:: UV_EOVERFLOW

    value too large for defined data type

.. c:macro:: UV_EPERM

    operation not permitted

.. c:macro:: UV_EPIPE

    broken pipe

.. c:macro:: UV_EPROTO

    protocol error

.. c:macro:: UV_EPROTONOSUPPORT

    protocol not supported

.. c:macro:: UV_EPROTOTYPE

    protocol wrong type for socket

.. c:macro:: UV_ERANGE

    result too large

.. c:macro:: UV_EROFS

    read-only file system

.. c:macro:: UV_ESHUTDOWN

    cannot send after transport endpoint shutdown

.. c:macro:: UV_ESPIPE

    invalid seek

.. c:macro:: UV_ESRCH

    no such process

.. c:macro:: UV_ETIMEDOUT

    connection timed out

.. c:macro:: UV_ETXTBSY

    text file is busy

.. c:macro:: UV_EXDEV

    cross-device link not permitted

.. c:macro:: UV_UNKNOWN

    unknown error

.. c:macro:: UV_EOF

    end of file

.. c:macro:: UV_ENXIO

    no such device or address

.. c:macro:: UV_EMLINK

    too many links

.. c:macro:: UV_ENOTTY

    inappropriate ioctl for device

.. c:macro:: UV_EFTYPE

    inappropriate file type or format

.. c:macro:: UV_EILSEQ

    illegal byte sequence

.. c:macro:: UV_ESOCKTNOSUPPORT

    socket type not supported

.. c:macro:: UV_EUNATCH

    protocol driver not attached

API
---

.. c:macro:: UV_ERRNO_MAP(iter_macro)

    Macro that expands to a series of invocations of `iter_macro` for
    each of the error constants above. `iter_macro` is invoked with two
    arguments: the name of the error constant without the `UV_` prefix,
    and the error message string literal.

.. c:function:: const char* uv_strerror(int err)

    Returns the error message for the given error code.  Leaks a few bytes
    of memory when you call it with an unknown error code.

.. c:function:: char* uv_strerror_r(int err, char* buf, size_t buflen)

    Returns the error message for the given error code. The zero-terminated
    message is stored in the user-supplied buffer `buf` of at most `buflen` bytes.

    .. versionadded:: 1.22.0

.. c:function:: const char* uv_err_name(int err)

    Returns the error name for the given error code.  Leaks a few bytes
    of memory when you call it with an unknown error code.

.. c:function:: char* uv_err_name_r(int err, char* buf, size_t buflen)

    Returns the error name for the given error code. The zero-terminated
    name is stored in the user-supplied buffer `buf` of at most `buflen` bytes.

    .. versionadded:: 1.22.0

.. c:function:: int uv_translate_sys_error(int sys_errno)

   Returns the libuv error code equivalent to the given platform dependent error
   code: POSIX error codes on Unix (the ones stored in `errno`), and Win32 error
   codes on Windows (those returned by `GetLastError()` or `WSAGetLastError()`).

   If `sys_errno` is already a libuv error, it is simply returned.

   .. versionchanged:: 1.10.0 function declared public.


===================================================
/. ../deps/uv/docs/src/version.rst
===================================================


.. _version:

Version-checking macros and functions
=====================================

Starting with version 1.0.0 libuv follows the `semantic versioning`_
scheme. This means that new APIs can be introduced throughout the lifetime of
a major release. In this section you'll find all macros and functions that
will allow you to write or compile code conditionally, in order to work with
multiple libuv versions.

.. _semantic versioning: https://semver.org


Macros
------

.. c:macro:: UV_VERSION_MAJOR

    libuv version's major number.

.. c:macro:: UV_VERSION_MINOR

    libuv version's minor number.

.. c:macro:: UV_VERSION_PATCH

    libuv version's patch number.

.. c:macro:: UV_VERSION_IS_RELEASE

    Set to 1 to indicate a release version of libuv, 0 for a development
    snapshot.

.. c:macro:: UV_VERSION_SUFFIX

    libuv version suffix. Certain development releases such as Release Candidates
    might have a suffix such as "rc".

.. c:macro:: UV_VERSION_HEX

    Returns the libuv version packed into a single integer. 8 bits are used for
    each component, with the patch number stored in the 8 least significant
    bits. E.g. for libuv 1.2.3 this would be 0x010203.

    .. versionadded:: 1.7.0


Functions
---------

.. c:function:: unsigned int uv_version(void)

    Returns :c:macro:`UV_VERSION_HEX`.

.. c:function:: const char* uv_version_string(void)

    Returns the libuv version number as a string. For non-release versions the
    version suffix is included.


===================================================
/. ../deps/uv/docs/src/loop.rst
===================================================


.. _loop:

:c:type:`uv_loop_t` --- Event loop
==================================

The event loop is the central part of libuv's functionality. It takes care
of polling for i/o and scheduling callbacks to be run based on different sources
of events.


Data types
----------

.. c:type:: uv_loop_t

    Loop data type.

.. c:enum:: uv_run_mode

    Mode used to run the loop with :c:func:`uv_run`.

    ::

        typedef enum {
            UV_RUN_DEFAULT = 0,
            UV_RUN_ONCE,
            UV_RUN_NOWAIT
        } uv_run_mode;

.. c:type:: void (*uv_walk_cb)(uv_handle_t* handle, void* arg)

    Type definition for callback passed to :c:func:`uv_walk`.


Public members
^^^^^^^^^^^^^^

.. c:member:: void* uv_loop_t.data

    Space for user-defined arbitrary data. libuv does not use and does not
    touch this field.


API
---

.. c:function:: int uv_loop_init(uv_loop_t* loop)

    Initializes the given `uv_loop_t` structure.

.. c:function:: int uv_loop_configure(uv_loop_t* loop, uv_loop_option option, ...)

    .. versionadded:: 1.0.2

    Set additional loop options.  You should normally call this before the
    first call to :c:func:`uv_run` unless mentioned otherwise.

    Returns 0 on success or a UV_E* error code on failure.  Be prepared to
    handle UV_ENOSYS; it means the loop option is not supported by the platform.

    Supported options:

    - UV_LOOP_BLOCK_SIGNAL: Block a signal when polling for new events.  The
      second argument to :c:func:`uv_loop_configure` is the signal number.

      This operation is currently only implemented for SIGPROF signals,
      to suppress unnecessary wakeups when using a sampling profiler.
      Requesting other signals will fail with UV_EINVAL.

    - UV_METRICS_IDLE_TIME: Accumulate the amount of idle time the event loop
      spends in the event provider.

      This option is necessary to use :c:func:`uv_metrics_idle_time`.

    .. versionchanged:: 1.39.0 added the UV_METRICS_IDLE_TIME option.

.. c:function:: int uv_loop_close(uv_loop_t* loop)

    Releases all internal loop resources. Call this function only when the loop
    has finished executing and all open handles and requests have been closed,
    or it will return UV_EBUSY. After this function returns, the user can free
    the memory allocated for the loop.

.. c:function:: uv_loop_t* uv_default_loop(void)

    Returns the initialized default loop. It may return NULL in case of
    allocation failure.

    This function is just a convenient way for having a global loop throughout
    an application, the default loop is in no way different than the ones
    initialized with :c:func:`uv_loop_init`. As such, the default loop can (and
    should) be closed with :c:func:`uv_loop_close` so the resources associated
    with it are freed.

    .. warning::
        This function is not thread safe.

.. c:function:: int uv_run(uv_loop_t* loop, uv_run_mode mode)

    This function runs the event loop. It will act differently depending on the
    specified mode:

    - UV_RUN_DEFAULT: Runs the event loop until there are no more active and
      referenced handles or requests. Returns non-zero if :c:func:`uv_stop`
      was called and there are still active handles or requests.  Returns
      zero in all other cases.
    - UV_RUN_ONCE: Poll for i/o once. Note that this function blocks if
      there are no pending callbacks. Returns zero when done (no active handles
      or requests left), or non-zero if more callbacks are expected (meaning
      you should run the event loop again sometime in the future).
    - UV_RUN_NOWAIT: Poll for i/o once but don't block if there are no
      pending callbacks. Returns zero if done (no active handles
      or requests left), or non-zero if more callbacks are expected (meaning
      you should run the event loop again sometime in the future).

    :c:func:`uv_run` is not reentrant. It must not be called from a callback.

.. c:function:: int uv_loop_alive(const uv_loop_t* loop)

    Returns non-zero if there are referenced active handles, active
    requests or closing handles in the loop.

.. c:function:: void uv_stop(uv_loop_t* loop)

    Stop the event loop, causing :c:func:`uv_run` to end as soon as
    possible. This will happen not sooner than the next loop iteration.
    If this function was called before blocking for i/o, the loop won't block
    for i/o on this iteration.

.. c:function:: size_t uv_loop_size(void)

    Returns the size of the `uv_loop_t` structure. Useful for FFI binding
    writers who don't want to know the structure layout.

.. c:function:: int uv_backend_fd(const uv_loop_t* loop)

    Get backend file descriptor. Only kqueue, epoll and event ports are
    supported.

    This can be used in conjunction with `uv_run(loop, UV_RUN_NOWAIT)` to
    poll in one thread and run the event loop's callbacks in another see
    test/test-embed.c for an example.

    .. note::
        Embedding a kqueue fd in another kqueue pollset doesn't work on all platforms. It's not
        an error to add the fd but it never generates events.

.. c:function:: int uv_backend_timeout(const uv_loop_t* loop)

    Get the poll timeout. The return value is in milliseconds, or -1 for no
    timeout.

.. c:function:: uint64_t uv_now(const uv_loop_t* loop)

    Return the current timestamp in milliseconds. The timestamp is cached at
    the start of the event loop tick, see :c:func:`uv_update_time` for details
    and rationale.

    The timestamp increases monotonically from some arbitrary point in time.
    Don't make assumptions about the starting point, you will only get
    disappointed.

    .. note::
        Use :c:func:`uv_hrtime` if you need sub-millisecond granularity.

.. c:function:: void uv_update_time(uv_loop_t* loop)

    Update the event loop's concept of "now". Libuv caches the current time
    at the start of the event loop tick in order to reduce the number of
    time-related system calls.

    You won't normally need to call this function unless you have callbacks
    that block the event loop for longer periods of time, where "longer" is
    somewhat subjective but probably on the order of a millisecond or more.

.. c:function:: void uv_walk(uv_loop_t* loop, uv_walk_cb walk_cb, void* arg)

    Walk the list of handles: `walk_cb` will be executed with the given `arg`.

.. c:function:: int uv_loop_fork(uv_loop_t* loop)

    .. versionadded:: 1.12.0

    Reinitialize any kernel state necessary in the child process after
    a :man:`fork(2)` system call.

    Previously started watchers will continue to be started in the
    child process.

    It is necessary to explicitly call this function on every event
    loop created in the parent process that you plan to continue to
    use in the child, including the default loop (even if you don't
    continue to use it in the parent). This function must be called
    before calling :c:func:`uv_run` or any other API function using
    the loop in the child. Failure to do so will result in undefined
    behaviour, possibly including duplicate events delivered to both
    parent and child or aborting the child process.

    When possible, it is preferred to create a new loop in the child
    process instead of reusing a loop created in the parent. New loops
    created in the child process after the fork should not use this
    function.

    This function is not implemented on Windows, where it returns ``UV_ENOSYS``.

    .. caution::

       This function is experimental. It may contain bugs, and is subject to
       change or removal. API and ABI stability is not guaranteed.

    .. note::

        On Mac OS X, if directory FS event handles were in use in the
        parent process *for any event loop*, the child process will no
        longer be able to use the most efficient FSEvent
        implementation. Instead, uses of directory FS event handles in
        the child will fall back to the same implementation used for
        files and on other kqueue-based systems.

    .. caution::

       On AIX and SunOS, FS event handles that were already started in
       the parent process at the time of forking will *not* deliver
       events in the child process; they must be closed and restarted.
       On all other platforms, they will continue to work normally
       without any further intervention.

    .. caution::

       Any previous value returned from :c:func:`uv_backend_fd` is now
       invalid. That function must be called again to determine the
       correct backend file descriptor.

.. c:function:: void* uv_loop_get_data(const uv_loop_t* loop)

    Returns `loop->data`.

    .. versionadded:: 1.19.0

.. c:function:: void* uv_loop_set_data(uv_loop_t* loop, void* data)

    Sets `loop->data` to `data`.

    .. versionadded:: 1.19.0


===================================================
/. ../deps/uv/docs/src/handle.rst
===================================================


.. _handle:

:c:type:`uv_handle_t` --- Base handle
=====================================

`uv_handle_t` is the base type for all libuv handle types.

Structures are aligned so that any libuv handle can be cast to `uv_handle_t`.
All API functions defined here work with any handle type.

Libuv handles are not movable. Pointers to handle structures passed to
functions must remain valid for the duration of the requested operation. Take
care when using stack allocated handles.

Data types
----------

.. c:type:: uv_handle_t

    The base libuv handle type.

.. c:enum:: uv_handle_type

    The kind of the libuv handle.

    ::

        typedef enum {
          UV_UNKNOWN_HANDLE = 0,
          UV_ASYNC,
          UV_CHECK,
          UV_FS_EVENT,
          UV_FS_POLL,
          UV_HANDLE,
          UV_IDLE,
          UV_NAMED_PIPE,
          UV_POLL,
          UV_PREPARE,
          UV_PROCESS,
          UV_STREAM,
          UV_TCP,
          UV_TIMER,
          UV_TTY,
          UV_UDP,
          UV_SIGNAL,
          UV_FILE,
          UV_HANDLE_TYPE_MAX
        } uv_handle_type;

.. c:type:: uv_any_handle

    Union of all handle types.

.. c:type:: void (*uv_alloc_cb)(uv_handle_t* handle, size_t suggested_size, uv_buf_t* buf)

    Type definition for callback passed to :c:func:`uv_read_start` and
    :c:func:`uv_udp_recv_start`. The user must allocate memory and fill the supplied
    :c:type:`uv_buf_t` structure. If NULL is assigned as the buffer's base or 0 as its length,
    a ``UV_ENOBUFS`` error will be triggered in the :c:type:`uv_udp_recv_cb` or the
    :c:type:`uv_read_cb` callback.

    Each buffer is used only once and the user is responsible for freeing it in the
    :c:type:`uv_udp_recv_cb` or the :c:type:`uv_read_cb` callback.

    A suggested size (65536 at the moment in most cases) is provided, but it's just an indication,
    not related in any way to the pending data to be read. The user is free to allocate the amount
    of memory they decide.

    As an example, applications with custom allocation schemes such as using freelists, allocation
    pools or slab based allocators may decide to use a different size which matches the memory
    chunks they already have.

    Example:

    ::

        static void my_alloc_cb(uv_handle_t* handle, size_t suggested_size, uv_buf_t* buf) {
          buf->base = malloc(suggested_size);
          buf->len = suggested_size;
        }

.. c:type:: void (*uv_close_cb)(uv_handle_t* handle)

    Type definition for callback passed to :c:func:`uv_close`.


Public members
^^^^^^^^^^^^^^

.. c:member:: uv_loop_t* uv_handle_t.loop

    Pointer to the :c:type:`uv_loop_t` the handle is running on. Readonly.

.. c:member:: uv_handle_type uv_handle_t.type

    The :c:type:`uv_handle_type`, indicating the type of the underlying handle. Readonly.

.. c:member:: void* uv_handle_t.data

    Space for user-defined arbitrary data. libuv does not use this field.


API
---

.. c:macro:: UV_HANDLE_TYPE_MAP(iter_macro)

    Macro that expands to a series of invocations of `iter_macro` for
    each of the handle types. `iter_macro` is invoked with two
    arguments: the name of the `uv_handle_type` element without the
    `UV_` prefix, and the name of the corresponding structure type
    without the `uv_` prefix and `_t` suffix.

.. c:function:: int uv_is_active(const uv_handle_t* handle)

    Returns non-zero if the handle is active, zero if it's inactive. What
    "active" means depends on the type of handle:

    - A uv_async_t handle is always active and cannot be deactivated, except
      by closing it with uv_close().

    - A uv_pipe_t, uv_tcp_t, uv_udp_t, etc. handle - basically any handle that
      deals with i/o - is active when it is doing something that involves i/o,
      like reading, writing, connecting, accepting new connections, etc.

    - A uv_check_t, uv_idle_t, uv_timer_t, etc. handle is active when it has
      been started with a call to uv_check_start(), uv_idle_start(), etc.

    Rule of thumb: if a handle of type `uv_foo_t` has a `uv_foo_start()`
    function, then it's active from the moment that function is called.
    Likewise, `uv_foo_stop()` deactivates the handle again.

.. c:function:: int uv_is_closing(const uv_handle_t* handle)

    Returns non-zero if the handle is closing or closed, zero otherwise.

    .. note::
        This function should only be used between the initialization of the handle and the
        arrival of the close callback.

.. c:function:: void uv_close(uv_handle_t* handle, uv_close_cb close_cb)

    Request handle to be closed. `close_cb` will be called asynchronously after
    this call. This MUST be called on each handle before memory is released.
    Moreover, the memory can only be released in `close_cb` or after it has
    returned.

    Handles that wrap file descriptors are closed immediately but
    `close_cb` will still be deferred to the next iteration of the event loop.
    It gives you a chance to free up any resources associated with the handle.

    In-progress requests, like uv_connect_t or uv_write_t, are cancelled and
    have their callbacks called asynchronously with status=UV_ECANCELED.

    `close_cb` can be `NULL` in cases where no cleanup or deallocation is
    necessary.

.. c:function:: void uv_ref(uv_handle_t* handle)

    Reference the given handle. References are idempotent, that is, if a handle
    is already referenced calling this function again will have no effect.

    See :ref:`refcount`.

.. c:function:: void uv_unref(uv_handle_t* handle)

    Un-reference the given handle. References are idempotent, that is, if a handle
    is not referenced calling this function again will have no effect.

    See :ref:`refcount`.

.. c:function:: int uv_has_ref(const uv_handle_t* handle)

    Returns non-zero if the handle referenced, zero otherwise.

    See :ref:`refcount`.

.. c:function:: size_t uv_handle_size(uv_handle_type type)

    Returns the size of the given handle type. Useful for FFI binding writers
    who don't want to know the structure layout.


Miscellaneous API functions
---------------------------

The following API functions take a :c:type:`uv_handle_t` argument but they work
just for some handle types.

.. c:function:: int uv_send_buffer_size(uv_handle_t* handle, int* value)

    Gets or sets the size of the send buffer that the operating
    system uses for the socket.

    If `*value` == 0, then it will set `*value` to the current send buffer size.
    If `*value` > 0 then it will use `*value` to set the new send buffer size.

    On success, zero is returned. On error, a negative result is
    returned.

    This function works for TCP, pipe and UDP handles on Unix and for TCP and
    UDP handles on Windows.

    .. note::
        Linux will set double the size and return double the size of the original set value.

.. c:function:: int uv_recv_buffer_size(uv_handle_t* handle, int* value)

    Gets or sets the size of the receive buffer that the operating
    system uses for the socket.

    If `*value` == 0, then it will set `*value` to the current receive buffer size.
    If `*value` > 0 then it will use `*value` to set the new receive buffer size.

    On success, zero is returned. On error, a negative result is
    returned.

    This function works for TCP, pipe and UDP handles on Unix and for TCP and
    UDP handles on Windows.

    .. note::
        Linux will set double the size and return double the size of the original set value.

.. c:function:: int uv_fileno(const uv_handle_t* handle, uv_os_fd_t* fd)

    Gets the platform dependent file descriptor equivalent.

    The following handles are supported: TCP, pipes, TTY, UDP and poll. Passing
    any other handle type will fail with `UV_EINVAL`.

    If a handle doesn't have an attached file descriptor yet or the handle
    itself has been closed, this function will return `UV_EBADF`.

    .. warning::
        Be very careful when using this function. libuv assumes it's in control of the file
        descriptor so any change to it may lead to malfunction.

.. c:function:: uv_loop_t* uv_handle_get_loop(const uv_handle_t* handle)

    Returns `handle->loop`.

    .. versionadded:: 1.19.0

.. c:function:: void* uv_handle_get_data(const uv_handle_t* handle)

    Returns `handle->data`.

    .. versionadded:: 1.19.0

.. c:function:: void* uv_handle_set_data(uv_handle_t* handle, void* data)

    Sets `handle->data` to `data`.

    .. versionadded:: 1.19.0

.. c:function:: uv_handle_type uv_handle_get_type(const uv_handle_t* handle)

    Returns `handle->type`.

    .. versionadded:: 1.19.0

.. c:function:: const char* uv_handle_type_name(uv_handle_type type)

    Returns the name for the equivalent struct for a given handle type,
    e.g. `"pipe"` (as in :c:type:`uv_pipe_t`) for `UV_NAMED_PIPE`.

    If no such handle type exists, this returns `NULL`.

    .. versionadded:: 1.19.0

.. _refcount:

Reference counting
------------------

The libuv event loop (if run in the default mode) will run until there are no
active `and` referenced handles left. The user can force the loop to exit early
by unreferencing handles which are active, for example by calling :c:func:`uv_unref`
after calling :c:func:`uv_timer_start`.

A handle can be referenced or unreferenced, the refcounting scheme doesn't use
a counter, so both operations are idempotent.

All handles are referenced when active by default, see :c:func:`uv_is_active`
for a more detailed explanation on what being `active` involves.


===================================================
/. ../deps/uv/docs/src/request.rst
===================================================


.. _request:

:c:type:`uv_req_t` --- Base request
===================================

`uv_req_t` is the base type for all libuv request types.

Structures are aligned so that any libuv request can be cast to `uv_req_t`.
All API functions defined here work with any request type.


Data types
----------

.. c:type:: uv_req_t

    The base libuv request structure.

.. c:type:: uv_any_req

    Union of all request types.


Public members
^^^^^^^^^^^^^^

.. c:member:: void* uv_req_t.data

    Space for user-defined arbitrary data. libuv does not use this field.

.. c:member:: uv_req_type uv_req_t.type

    Indicated the type of request. Readonly.

    ::

        typedef enum {
            UV_UNKNOWN_REQ = 0,
            UV_REQ,
            UV_CONNECT,
            UV_WRITE,
            UV_SHUTDOWN,
            UV_UDP_SEND,
            UV_FS,
            UV_WORK,
            UV_GETADDRINFO,
            UV_GETNAMEINFO,
            UV_REQ_TYPE_MAX,
        } uv_req_type;


API
---

.. c:macro:: UV_REQ_TYPE_MAP(iter_macro)

    Macro that expands to a series of invocations of `iter_macro` for
    each of the request types. `iter_macro` is invoked with two
    arguments: the name of the `uv_req_type` element without the `UV_`
    prefix, and the name of the corresponding structure type without the
    `uv_` prefix and `_t` suffix.

.. c:function:: int uv_cancel(uv_req_t* req)

    Cancel a pending request. Fails if the request is executing or has finished
    executing.

    Returns 0 on success, or an error code < 0 on failure.

    Only cancellation of :c:type:`uv_fs_t`, :c:type:`uv_getaddrinfo_t`,
    :c:type:`uv_getnameinfo_t`, :c:type:`uv_random_t` and :c:type:`uv_work_t`
    requests is currently supported.

    Cancelled requests have their callbacks invoked some time in the future.
    It's **not** safe to free the memory associated with the request until the
    callback is called.

    Here is how cancellation is reported to the callback:

    * A :c:type:`uv_fs_t` request has its req->result field set to `UV_ECANCELED`.

    * A :c:type:`uv_work_t`, :c:type:`uv_getaddrinfo_t`,
      :c:type:`uv_getnameinfo_t` or :c:type:`uv_random_t` request has its
      callback invoked with status == `UV_ECANCELED`.

.. c:function:: size_t uv_req_size(uv_req_type type)

    Returns the size of the given request type. Useful for FFI binding writers
    who don't want to know the structure layout.

.. c:function:: void* uv_req_get_data(const uv_req_t* req)

    Returns `req->data`.

    .. versionadded:: 1.19.0

.. c:function:: void* uv_req_set_data(uv_req_t* req, void* data)

    Sets `req->data` to `data`.

    .. versionadded:: 1.19.0

.. c:function:: uv_req_type uv_req_get_type(const uv_req_t* req)

    Returns `req->type`.

    .. versionadded:: 1.19.0

.. c:function:: const char* uv_req_type_name(uv_req_type type)

    Returns the name for the equivalent struct for a given request type,
    e.g. `"connect"` (as in :c:type:`uv_connect_t`) for `UV_CONNECT`.

    If no such request type exists, this returns `NULL`.

    .. versionadded:: 1.19.0


===================================================
/. ../deps/uv/docs/src/timer.rst
===================================================


.. _timer:

:c:type:`uv_timer_t` --- Timer handle
=====================================

Timer handles are used to schedule callbacks to be called in the future.


Data types
----------

.. c:type:: uv_timer_t

    Timer handle type.

.. c:type:: void (*uv_timer_cb)(uv_timer_t* handle)

    Type definition for callback passed to :c:func:`uv_timer_start`.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_timer_init(uv_loop_t* loop, uv_timer_t* handle)

    Initialize the handle.

.. c:function:: int uv_timer_start(uv_timer_t* handle, uv_timer_cb cb, uint64_t timeout, uint64_t repeat)

    Start the timer. `timeout` and `repeat` are in milliseconds.

    If `timeout` is zero, the callback fires on the next event loop iteration.
    If `repeat` is non-zero, the callback fires first after `timeout`
    milliseconds and then repeatedly after `repeat` milliseconds.

    .. note::
        Does not update the event loop's concept of "now". See :c:func:`uv_update_time` for more information.

        If the timer is already active, it is simply updated.

.. c:function:: int uv_timer_stop(uv_timer_t* handle)

    Stop the timer, the callback will not be called anymore.

.. c:function:: int uv_timer_again(uv_timer_t* handle)

    Stop the timer, and if it is repeating restart it using the repeat value
    as the timeout. If the timer has never been started before it returns
    UV_EINVAL.

.. c:function:: void uv_timer_set_repeat(uv_timer_t* handle, uint64_t repeat)

    Set the repeat interval value in milliseconds. The timer will be scheduled
    to run on the given interval, regardless of the callback execution
    duration, and will follow normal timer semantics in the case of a
    time-slice overrun.

    For example, if a 50ms repeating timer first runs for 17ms, it will be
    scheduled to run again 33ms later. If other tasks consume more than the
    33ms following the first timer callback, then the callback will run as soon
    as possible.

    .. note::
        If the repeat value is set from a timer callback it does not immediately take effect.
        If the timer was non-repeating before, it will have been stopped. If it was repeating,
        then the old repeat value will have been used to schedule the next timeout.

.. c:function:: uint64_t uv_timer_get_repeat(const uv_timer_t* handle)

    Get the timer repeat value.

.. c:function:: uint64_t uv_timer_get_due_in(const uv_timer_t* handle)

    Get the timer due value or 0 if it has expired. The time is relative to
    :c:func:`uv_now()`.

    .. versionadded:: 1.40.0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/prepare.rst
===================================================


.. _prepare:

:c:type:`uv_prepare_t` --- Prepare handle
=========================================

Prepare handles will run the given callback once per loop iteration, right
before polling for i/o.


Data types
----------

.. c:type:: uv_prepare_t

    Prepare handle type.

.. c:type:: void (*uv_prepare_cb)(uv_prepare_t* handle)

    Type definition for callback passed to :c:func:`uv_prepare_start`.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_prepare_init(uv_loop_t* loop, uv_prepare_t* prepare)

    Initialize the handle. This function always succeeds.

    :returns: 0

.. c:function:: int uv_prepare_start(uv_prepare_t* prepare, uv_prepare_cb cb)

    Start the handle with the given callback. This function always succeeds,
    except when `cb` is `NULL`.

    :returns: 0 on success, or `UV_EINVAL` when `cb == NULL`.

.. c:function:: int uv_prepare_stop(uv_prepare_t* prepare)

    Stop the handle, the callback will no longer be called.
    This function always succeeds.

    :returns: 0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/check.rst
===================================================


.. _check:

:c:type:`uv_check_t` --- Check handle
=====================================

Check handles will run the given callback once per loop iteration, right
after polling for i/o.


Data types
----------

.. c:type:: uv_check_t

    Check handle type.

.. c:type:: void (*uv_check_cb)(uv_check_t* handle)

    Type definition for callback passed to :c:func:`uv_check_start`.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_check_init(uv_loop_t* loop, uv_check_t* check)

    Initialize the handle. This function always succeeds.

    :returns: 0

.. c:function:: int uv_check_start(uv_check_t* check, uv_check_cb cb)

    Start the handle with the given callback. This function always succeeds,
    except when `cb` is `NULL`.

    :returns: 0 on success, or `UV_EINVAL` when `cb == NULL`.

.. c:function:: int uv_check_stop(uv_check_t* check)

    Stop the handle, the callback will no longer be called.
    This function always succeeds.

    :returns: 0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/idle.rst
===================================================


.. _idle:

:c:type:`uv_idle_t` --- Idle handle
===================================

Idle handles will run the given callback once per loop iteration, right
before the :c:type:`uv_prepare_t` handles.

.. note::
    The notable difference with prepare handles is that when there are active idle handles,
    the loop will perform a zero timeout poll instead of blocking for i/o.

.. warning::
    Despite the name, idle handles will get their callbacks called on every loop iteration,
    not when the loop is actually "idle".


Data types
----------

.. c:type:: uv_idle_t

    Idle handle type.

.. c:type:: void (*uv_idle_cb)(uv_idle_t* handle)

    Type definition for callback passed to :c:func:`uv_idle_start`.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_idle_init(uv_loop_t* loop, uv_idle_t* idle)

    Initialize the handle. This function always succeeds.

    :returns: 0

.. c:function:: int uv_idle_start(uv_idle_t* idle, uv_idle_cb cb)

    Start the handle with the given callback. This function always succeeds,
    except when `cb` is `NULL`.

    :returns: 0 on success, or `UV_EINVAL` when `cb == NULL`.

.. c:function:: int uv_idle_stop(uv_idle_t* idle)

    Stop the handle, the callback will no longer be called.
    This function always succeeds.

    :returns: 0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/async.rst
===================================================


.. _async:

:c:type:`uv_async_t` --- Async handle
=====================================

Async handles allow the user to "wakeup" the event loop and get a callback
called from another thread.


Data types
----------

.. c:type:: uv_async_t

    Async handle type.

.. c:type:: void (*uv_async_cb)(uv_async_t* handle)

    Type definition for callback passed to :c:func:`uv_async_init`.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_async_init(uv_loop_t* loop, uv_async_t* async, uv_async_cb async_cb)

    Initialize the handle. A NULL callback is allowed.

    :returns: 0 on success, or an error code < 0 on failure.

    .. note::
        Unlike other handle initialization  functions, it immediately starts the handle.

.. c:function:: int uv_async_send(uv_async_t* async)

    Wake up the event loop and call the async handle's callback.

    :returns: 0 on success, or an error code < 0 on failure.

    .. note::
        It's safe to call this function from any thread. The callback will be called on the
        loop thread.

    .. note::
        :c:func:`uv_async_send` is `async-signal-safe <https://man7.org/linux/man-pages/man7/signal-safety.7.html>`_.
        It's safe to call this function from a signal handler.

    .. warning::
        libuv will coalesce calls to :c:func:`uv_async_send`, that is, not every call to it will
        yield an execution of the callback. For example: if :c:func:`uv_async_send` is called 5
        times in a row before the callback is called, the callback will only be called once. If
        :c:func:`uv_async_send` is called again after the callback was called, it will be called
        again.

.. seealso::
    The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/poll.rst
===================================================


.. _poll:

:c:type:`uv_poll_t` --- Poll handle
===================================

Poll handles are used to watch file descriptors for readability,
writability and disconnection similar to the purpose of :man:`poll(2)`.

The purpose of poll handles is to enable integrating external libraries that
rely on the event loop to signal it about the socket status changes, like
c-ares or libssh2. Using uv_poll_t for any other purpose is not recommended;
:c:type:`uv_tcp_t`, :c:type:`uv_udp_t`, etc. provide an implementation that is faster and
more scalable than what can be achieved with :c:type:`uv_poll_t`, especially on
Windows.

It is possible that poll handles occasionally signal that a file descriptor is
readable or writable even when it isn't. The user should therefore always
be prepared to handle EAGAIN or equivalent when it attempts to read from or
write to the fd.

It is not okay to have multiple active poll handles for the same socket, this
can cause libuv to busyloop or otherwise malfunction.

The user should not close a file descriptor while it is being polled by an
active poll handle. This can cause the handle to report an error,
but it might also start polling another socket. However the fd can be safely
closed immediately after a call to :c:func:`uv_poll_stop` or :c:func:`uv_close`.

.. note::
    On windows only sockets can be polled with poll handles. On Unix any file
    descriptor that would be accepted by :man:`poll(2)` can be used.

.. note::
    On AIX, watching for disconnection is not supported.

Data types
----------

.. c:type:: uv_poll_t

    Poll handle type.

.. c:type:: void (*uv_poll_cb)(uv_poll_t* handle, int status, int events)

    Type definition for callback passed to :c:func:`uv_poll_start`.

.. c:type:: uv_poll_event

    Poll event types

    ::

        enum uv_poll_event {
            UV_READABLE = 1,
            UV_WRITABLE = 2,
            UV_DISCONNECT = 4,
            UV_PRIORITIZED = 8
        };


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_poll_init(uv_loop_t* loop, uv_poll_t* handle, int fd)

    Initialize the handle using a file descriptor.

    .. versionchanged:: 1.2.2 the file descriptor is set to non-blocking mode.

.. c:function:: int uv_poll_init_socket(uv_loop_t* loop, uv_poll_t* handle, uv_os_sock_t socket)

    Initialize the handle using a socket descriptor. On Unix this is identical
    to :c:func:`uv_poll_init`. On windows it takes a SOCKET handle.

    .. versionchanged:: 1.2.2 the socket is set to non-blocking mode.

.. c:function:: int uv_poll_start(uv_poll_t* handle, int events, uv_poll_cb cb)

    Starts polling the file descriptor. `events` is a bitmask made up of
    `UV_READABLE`, `UV_WRITABLE`, `UV_PRIORITIZED` and `UV_DISCONNECT`. As soon
    as an event is detected the callback will be called with `status` set to 0,
    and the detected events set on the `events` field.

    The `UV_PRIORITIZED` event is used to watch for sysfs interrupts or TCP
    out-of-band messages.

    The `UV_DISCONNECT` event is optional in the sense that it may not be
    reported and the user is free to ignore it, but it can help optimize the
    shutdown path because an extra read or write call might be avoided.

    If an error happens while polling, `status` will be < 0 and corresponds
    with one of the `UV_E*` error codes (see :ref:`errors`). The user should
    not close the socket while the handle is active. If the user does that
    anyway, the callback *may* be called reporting an error status, but this is
    **not** guaranteed. If `status == UV_EBADF` polling is discontinued for the
    file handle and no further events will be reported. The user should
    then call :c:func:`uv_close` on the handle.

    .. note::
        Calling :c:func:`uv_poll_start` on a handle that is already active is
        fine. Doing so will update the events mask that is being watched for.

    .. note::
        Though `UV_DISCONNECT` can be set, it is unsupported on AIX and as such
        will not be set on the `events` field in the callback.

    .. note::
        If one of the events `UV_READABLE` or `UV_WRITABLE` are set, the
        callback will be called again, as long as the given fd/socket remains
        readable or writable accordingly. Particularly in each of the following
        scenarios:

        * The callback has been called because the socket became
          readable/writable and the callback did not conduct a read/write on
          this socket at all.
        * The callback committed a read on the socket, and has not read all the
          available data (when `UV_READABLE` is set).
        * The callback committed a write on the socket, but it remained
          writable afterwards (when `UV_WRITABLE` is set).
        * The socket has already became readable/writable before calling
          :c:func:`uv_poll_start` on a poll handle associated with this socket,
          and since then the state of the socket did not changed.

        In all of the above listed scenarios, the socket remains readable or
        writable and hence the callback will be called again (depending on the
        events set in the bitmask). This behaviour is known as level
        triggering.

    .. versionchanged:: 1.9.0 Added the `UV_DISCONNECT` event.
    .. versionchanged:: 1.14.0 Added the `UV_PRIORITIZED` event.

.. c:function:: int uv_poll_stop(uv_poll_t* poll)

    Stop polling the file descriptor, the callback will no longer be called.

    .. note::
        Calling :c:func:`uv_poll_stop` is effective immediately: any pending
        callback is also canceled, even if the socket state change notification
        was already pending.

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/signal.rst
===================================================


.. _signal:

:c:type:`uv_signal_t` --- Signal handle
=======================================

Signal handles implement Unix style signal handling on a per-event loop bases.

Windows notes
-------------

Reception of some signals is emulated:

* SIGINT is normally delivered when the user presses CTRL+C. However, like
  on Unix, it is not generated when terminal raw mode is enabled.

* SIGBREAK is delivered when the user pressed CTRL + BREAK.

* SIGHUP is generated when the user closes the console window. On SIGHUP the
  program is given approximately 10 seconds to perform cleanup. After that
  Windows will unconditionally terminate it.

* SIGWINCH is raised whenever libuv detects that the console has been
  resized. When a libuv app is running under a console emulator, or when a
  32-bit libuv app is running on 64-bit system, SIGWINCH will be emulated. In
  such cases SIGWINCH signals may not always be delivered in a timely manner.
  For a writable :c:type:`uv_tty_t` handle libuv will only detect size changes
  when the cursor is moved. When a readable :c:type:`uv_tty_t` handle is used,
  resizing of the console buffer will be detected only if the handle is in raw
  mode and is being read.

* Watchers for other signals can be successfully created, but these signals
  are never received. These signals are: `SIGILL`, `SIGABRT`, `SIGFPE`, `SIGSEGV`,
  `SIGTERM` and `SIGKILL.`

* Calls to raise() or abort() to programmatically raise a signal are
  not detected by libuv; these will not trigger a signal watcher.

.. versionchanged:: 1.15.0 SIGWINCH support on Windows was improved.
.. versionchanged:: 1.31.0 32-bit libuv SIGWINCH support on 64-bit Windows was
                           rolled back to old implementation.

Unix notes
----------

* SIGKILL and SIGSTOP are impossible to catch.

* Handling SIGBUS, SIGFPE, SIGILL or SIGSEGV via libuv results into undefined behavior.

* SIGABRT will not be caught by libuv if generated by `abort()`, e.g. through `assert()`.

* On Linux SIGRT0 and SIGRT1 (signals 32 and 33) are used by the NPTL pthreads library to
  manage threads. Installing watchers for those signals will lead to unpredictable behavior
  and is strongly discouraged. Future versions of libuv may simply reject them.


Data types
----------

.. c:type:: uv_signal_t

    Signal handle type.

.. c:type:: void (*uv_signal_cb)(uv_signal_t* handle, int signum)

    Type definition for callback passed to :c:func:`uv_signal_start`.


Public members
^^^^^^^^^^^^^^

.. c:member:: int uv_signal_t.signum

    Signal being monitored by this handle. Readonly.

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_signal_init(uv_loop_t* loop, uv_signal_t* signal)

    Initialize the handle.

.. c:function:: int uv_signal_start(uv_signal_t* signal, uv_signal_cb cb, int signum)

    Start the handle with the given callback, watching for the given signal.

.. c:function:: int uv_signal_start_oneshot(uv_signal_t* signal, uv_signal_cb cb, int signum)

    .. versionadded:: 1.12.0

    Same functionality as :c:func:`uv_signal_start` but the signal handler is reset the moment
    the signal is received.

.. c:function:: int uv_signal_stop(uv_signal_t* signal)

    Stop the handle, the callback will no longer be called.

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/process.rst
===================================================


.. _process:

:c:type:`uv_process_t` --- Process handle
=========================================

Process handles will spawn a new process and allow the user to control it and
establish communication channels with it using streams.


Data types
----------

.. c:type:: uv_process_t

    Process handle type.

.. c:type:: uv_process_options_t

    Options for spawning the process (passed to :c:func:`uv_spawn`.

    ::

        typedef struct uv_process_options_s {
            uv_exit_cb exit_cb;
            const char* file;
            char** args;
            char** env;
            const char* cwd;
            unsigned int flags;
            int stdio_count;
            uv_stdio_container_t* stdio;
            uv_uid_t uid;
            uv_gid_t gid;
        } uv_process_options_t;

.. c:type:: void (*uv_exit_cb)(uv_process_t*, int64_t exit_status, int term_signal)

    Type definition for callback passed in :c:type:`uv_process_options_t` which
    will indicate the exit status and the signal that caused the process to
    terminate, if any.

.. c:type:: uv_process_flags

    Flags to be set on the flags field of :c:type:`uv_process_options_t`.

    ::

        enum uv_process_flags {
            /*
            * Set the child process' user id.
            */
            UV_PROCESS_SETUID = (1 << 0),
            /*
            * Set the child process' group id.
            */
            UV_PROCESS_SETGID = (1 << 1),
            /*
            * Do not wrap any arguments in quotes, or perform any other escaping, when
            * converting the argument list into a command line string. This option is
            * only meaningful on Windows systems. On Unix it is silently ignored.
            */
            UV_PROCESS_WINDOWS_VERBATIM_ARGUMENTS = (1 << 2),
            /*
            * Spawn the child process in a detached state - this will make it a process
            * group leader, and will effectively enable the child to keep running after
            * the parent exits. Note that the child process will still keep the
            * parent's event loop alive unless the parent process calls uv_unref() on
            * the child's process handle.
            */
            UV_PROCESS_DETACHED = (1 << 3),
            /*
            * Hide the subprocess window that would normally be created. This option is
            * only meaningful on Windows systems. On Unix it is silently ignored.
            */
            UV_PROCESS_WINDOWS_HIDE = (1 << 4),
            /*
            * Hide the subprocess console window that would normally be created. This 
            * option is only meaningful on Windows systems. On Unix it is silently
            * ignored.
            */
            UV_PROCESS_WINDOWS_HIDE_CONSOLE = (1 << 5),
            /*
            * Hide the subprocess GUI window that would normally be created. This 
            * option is only meaningful on Windows systems. On Unix it is silently
            * ignored.
            */
            UV_PROCESS_WINDOWS_HIDE_GUI = (1 << 6)
        };

.. c:type:: uv_stdio_container_t

    Container for each stdio handle or fd passed to a child process.

    ::

        typedef struct uv_stdio_container_s {
            uv_stdio_flags flags;
            union {
                uv_stream_t* stream;
                int fd;
            } data;
        } uv_stdio_container_t;

.. c:enum:: uv_stdio_flags

    Flags specifying how a stdio should be transmitted to the child process.

    ::

        typedef enum {
            /*
            * The following four options are mutually-exclusive, and define
            * the operation to perform for the corresponding file descriptor
            * in the child process:
            */

            /*
            * No file descriptor will be provided (or redirected to
            * `/dev/null` if it is fd 0, 1 or 2).
            */
            UV_IGNORE = 0x00,

            /*
            * Open a new pipe into `data.stream`, per the flags below. The
            * `data.stream` field must point to a uv_pipe_t object that has
            * been initialized with `uv_pipe_init(loop, data.stream, ipc);`,
            * but not yet opened or connected.
            /*
            UV_CREATE_PIPE = 0x01,

            /*
            * The child process will be given a duplicate of the parent's
            * file descriptor given by `data.fd`.
            */
            UV_INHERIT_FD = 0x02,

            /*
            * The child process will be given a duplicate of the parent's
            * file descriptor being used by the stream handle given by
            * `data.stream`.
            */
            UV_INHERIT_STREAM = 0x04,

            /*
            * When UV_CREATE_PIPE is specified, UV_READABLE_PIPE and UV_WRITABLE_PIPE
            * determine the direction of flow, from the child process' perspective. Both
            * flags may be specified to create a duplex data stream.
            */
            UV_READABLE_PIPE = 0x10,
            UV_WRITABLE_PIPE = 0x20,

            /*
            * When UV_CREATE_PIPE is specified, specifying UV_NONBLOCK_PIPE opens the
            * handle in non-blocking mode in the child. This may cause loss of data,
            * if the child is not designed to handle to encounter this mode,
            * but can also be significantly more efficient.
            */
            UV_NONBLOCK_PIPE = 0x40
        } uv_stdio_flags;


Public members
^^^^^^^^^^^^^^

.. c:member:: int uv_process_t.pid

    The PID of the spawned process. It's set after calling :c:func:`uv_spawn`.

.. note::
    The :c:type:`uv_handle_t` members also apply.

.. c:member:: uv_exit_cb uv_process_options_t.exit_cb

    Callback called after the process exits.

.. c:member:: const char* uv_process_options_t.file

    Path pointing to the program to be executed.

.. c:member:: char** uv_process_options_t.args

    Command line arguments. args[0] should be the path to the program. On
    Windows this uses `CreateProcess` which concatenates the arguments into a
    string this can cause some strange errors. See the
    ``UV_PROCESS_WINDOWS_VERBATIM_ARGUMENTS`` flag on :c:type:`uv_process_flags`.

.. c:member:: char** uv_process_options_t.env

    Environment for the new process. If NULL the parents environment is used.

.. c:member:: const char* uv_process_options_t.cwd

    Current working directory for the subprocess.

.. c:member:: unsigned int uv_process_options_t.flags

    Various flags that control how :c:func:`uv_spawn` behaves. See
    :c:type:`uv_process_flags`.

.. c:member:: int uv_process_options_t.stdio_count
.. c:member:: uv_stdio_container_t* uv_process_options_t.stdio

    The `stdio` field points to an array of :c:type:`uv_stdio_container_t`
    structs that describe the file descriptors that will be made available to
    the child process. The convention is that stdio[0] points to stdin,
    fd 1 is used for stdout, and fd 2 is stderr.

    .. note::
        On Windows file descriptors greater than 2 are available to the child process only if
        the child processes uses the MSVCRT runtime.

.. c:member:: uv_uid_t uv_process_options_t.uid
.. c:member:: uv_gid_t uv_process_options_t.gid

    Libuv can change the child process' user/group id. This happens only when
    the appropriate bits are set in the flags fields.

    .. note::
        This is not supported on Windows, :c:func:`uv_spawn` will fail and set the error
        to ``UV_ENOTSUP``.

.. c:member:: uv_stdio_flags uv_stdio_container_t.flags

    Flags specifying how the stdio container should be passed to the child.

.. c:member:: union @0 uv_stdio_container_t.data

    Union containing either the `stream` or `fd` to be passed on to the child
    process.


API
---

.. c:function:: void uv_disable_stdio_inheritance(void)

    Disables inheritance for file descriptors / handles that this process
    inherited from its parent. The effect is that child processes spawned by
    this process don't accidentally inherit these handles.

    It is recommended to call this function as early in your program as possible,
    before the inherited file descriptors can be closed or duplicated.

    .. note::
        This function works on a best-effort basis: there is no guarantee that libuv can discover
        all file descriptors that were inherited. In general it does a better job on Windows than
        it does on Unix.

.. c:function:: int uv_spawn(uv_loop_t* loop, uv_process_t* handle, const uv_process_options_t* options)

    Initializes the process handle and starts the process. If the process is
    successfully spawned, this function will return 0. Otherwise, the
    negative error code corresponding to the reason it couldn't spawn is
    returned.

    Possible reasons for failing to spawn would include (but not be limited to)
    the file to execute not existing, not having permissions to use the setuid or
    setgid specified, or not having enough memory to allocate for the new
    process.

    .. versionchanged:: 1.24.0 Added `UV_PROCESS_WINDOWS_HIDE_CONSOLE` and
                        `UV_PROCESS_WINDOWS_HIDE_GUI` flags.

.. c:function:: int uv_process_kill(uv_process_t* handle, int signum)

    Sends the specified signal to the given process handle. Check the documentation
    on :c:ref:`signal` for signal support, specially on Windows.

.. c:function:: int uv_kill(int pid, int signum)

    Sends the specified signal to the given PID. Check the documentation
    on :c:ref:`signal` for signal support, specially on Windows.

.. c:function:: uv_pid_t uv_process_get_pid(const uv_process_t* handle)

    Returns `handle->pid`.

    .. versionadded:: 1.19.0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/stream.rst
===================================================


.. _stream:

:c:type:`uv_stream_t` --- Stream handle
=======================================

Stream handles provide an abstraction of a duplex communication channel.
:c:type:`uv_stream_t` is an abstract type, libuv provides 3 stream implementations
in the form of :c:type:`uv_tcp_t`, :c:type:`uv_pipe_t` and :c:type:`uv_tty_t`.


Data types
----------

.. c:type:: uv_stream_t

    Stream handle type.

.. c:type:: uv_connect_t

    Connect request type.

.. c:type:: uv_shutdown_t

    Shutdown request type.

.. c:type:: uv_write_t

    Write request type. Careful attention must be paid when reusing objects of
    this type. When a stream is in non-blocking mode, write requests sent
    with ``uv_write`` will be queued. Reusing objects at this point is undefined
    behaviour. It is safe to reuse the ``uv_write_t`` object only after the
    callback passed to ``uv_write`` is fired.

.. c:type:: void (*uv_read_cb)(uv_stream_t* stream, ssize_t nread, const uv_buf_t* buf)

    Callback called when data was read on a stream.

    `nread` is > 0 if there is data available or < 0 on error. When we've
    reached EOF, `nread` will be set to ``UV_EOF``. When `nread` < 0,
    the `buf` parameter might not point to a valid buffer; in that case
    `buf.len` and `buf.base` are both set to 0.

    .. note::
        `nread` might be 0, which does *not* indicate an error or EOF. This
        is equivalent to ``EAGAIN`` or ``EWOULDBLOCK`` under ``read(2)``.

    The callee is responsible for stopping/closing the stream when an error happens
    by calling :c:func:`uv_read_stop` or :c:func:`uv_close`. Trying to read
    from the stream again is undefined.

    The callee is responsible for freeing the buffer, libuv does not reuse it.
    The buffer may be a null buffer (where `buf->base` == NULL and `buf->len` == 0)
    on error.

.. c:type:: void (*uv_write_cb)(uv_write_t* req, int status)

    Callback called after data was written on a stream. `status` will be 0 in
    case of success, < 0 otherwise.

.. c:type:: void (*uv_connect_cb)(uv_connect_t* req, int status)

    Callback called after a connection started by :c:func:`uv_connect` is done.
    `status` will be 0 in case of success, < 0 otherwise.

.. c:type:: void (*uv_shutdown_cb)(uv_shutdown_t* req, int status)

    Callback called after a shutdown request has been completed. `status` will
    be 0 in case of success, < 0 otherwise.

.. c:type:: void (*uv_connection_cb)(uv_stream_t* server, int status)

    Callback called when a stream server has received an incoming connection.
    The user can accept the connection by calling :c:func:`uv_accept`.
    `status` will be 0 in case of success, < 0 otherwise.


Public members
^^^^^^^^^^^^^^

.. c:member:: size_t uv_stream_t.write_queue_size

    Contains the amount of queued bytes waiting to be sent. Readonly.

.. c:member:: uv_stream_t* uv_connect_t.handle

    Pointer to the stream where this connection request is running.

.. c:member:: uv_stream_t* uv_shutdown_t.handle

    Pointer to the stream where this shutdown request is running.

.. c:member:: uv_stream_t* uv_write_t.handle

    Pointer to the stream where this write request is running.

.. c:member:: uv_stream_t* uv_write_t.send_handle

    Pointer to the stream being sent using this write request.

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_shutdown(uv_shutdown_t* req, uv_stream_t* handle, uv_shutdown_cb cb)

    Shutdown the outgoing (write) side of a duplex stream. It waits for pending
    write requests to complete. The `handle` should refer to a initialized stream.
    `req` should be an uninitialized shutdown request struct. The `cb` is called
    after shutdown is complete.

.. c:function:: int uv_listen(uv_stream_t* stream, int backlog, uv_connection_cb cb)

    Start listening for incoming connections. `backlog` indicates the number of
    connections the kernel might queue, same as :man:`listen(2)`. When a new
    incoming connection is received the :c:type:`uv_connection_cb` callback is
    called.

.. c:function:: int uv_accept(uv_stream_t* server, uv_stream_t* client)

    This call is used in conjunction with :c:func:`uv_listen` to accept incoming
    connections. Call this function after receiving a :c:type:`uv_connection_cb`
    to accept the connection. Before calling this function the client handle must
    be initialized. < 0 return value indicates an error.

    When the :c:type:`uv_connection_cb` callback is called it is guaranteed that
    this function will complete successfully the first time. If you attempt to use
    it more than once, it may fail. It is suggested to only call this function once
    per :c:type:`uv_connection_cb` call.

    .. note::
        `server` and `client` must be handles running on the same loop.

.. c:function:: int uv_read_start(uv_stream_t* stream, uv_alloc_cb alloc_cb, uv_read_cb read_cb)

    Read data from an incoming stream. The :c:type:`uv_read_cb` callback will
    be made several times until there is no more data to read or
    :c:func:`uv_read_stop` is called.

    .. versionchanged:: 1.38.0 :c:func:`uv_read_start()` now consistently
      returns `UV_EALREADY` when called twice, and `UV_EINVAL` when the
      stream is closing. With older libuv versions, it returns `UV_EALREADY`
      on Windows but not UNIX, and `UV_EINVAL` on UNIX but not Windows.

.. c:function:: int uv_read_stop(uv_stream_t*)

    Stop reading data from the stream. The :c:type:`uv_read_cb` callback will
    no longer be called.

    This function is idempotent and may be safely called on a stopped stream.

    This function will always succeed; hence, checking its return value is
    unnecessary. A non-zero return indicates that finishing releasing resources
    may be pending on the next input event on that TTY on Windows, and does not
    indicate failure.

.. c:function:: int uv_write(uv_write_t* req, uv_stream_t* handle, const uv_buf_t bufs[], unsigned int nbufs, uv_write_cb cb)

    Write data to stream. Buffers are written in order. Example:

    ::

        void cb(uv_write_t* req, int status) {
            /* Logic which handles the write result */
        }

        uv_buf_t a[] = {
            { .base = "1", .len = 1 },
            { .base = "2", .len = 1 }
        };

        uv_buf_t b[] = {
            { .base = "3", .len = 1 },
            { .base = "4", .len = 1 }
        };

        uv_write_t req1;
        uv_write_t req2;

        /* writes "1234" */
        uv_write(&req1, stream, a, 2, cb);
        uv_write(&req2, stream, b, 2, cb);

    .. note::
        The memory pointed to by the buffers must remain valid until the callback gets called.
        This also holds for :c:func:`uv_write2`.

.. c:function:: int uv_write2(uv_write_t* req, uv_stream_t* handle, const uv_buf_t bufs[], unsigned int nbufs, uv_stream_t* send_handle, uv_write_cb cb)

    Extended write function for sending handles over a pipe. The pipe must be
    initialized with `ipc` == 1.

    .. note::
        `send_handle` must be a TCP, pipe and UDP handle on Unix, or a TCP
        handle on Windows, which is a server or a connection (listening or
        connected state). Bound sockets or pipes will be assumed to be servers.

.. c:function:: int uv_try_write(uv_stream_t* handle, const uv_buf_t bufs[], unsigned int nbufs)

    Same as :c:func:`uv_write`, but won't queue a write request if it can't be
    completed immediately.

    Will return either:

    * > 0: number of bytes written (can be less than the supplied buffer size).
    * < 0: negative error code (``UV_EAGAIN`` is returned if no data can be sent
      immediately).

.. c:function:: int uv_try_write2(uv_stream_t* handle, const uv_buf_t bufs[], unsigned int nbufs, uv_stream_t* send_handle)

    Same as :c:func:`uv_try_write` and extended write function for sending
    handles over a pipe like c:func:`uv_write2`.

    Try to send a handle is not supported on Windows,
    where it returns ``UV_EAGAIN``.

    .. versionadded:: 1.42.0
    
.. c:function:: int uv_is_readable(const uv_stream_t* handle)

    Returns 1 if the stream is readable, 0 otherwise.

.. c:function:: int uv_is_writable(const uv_stream_t* handle)

    Returns 1 if the stream is writable, 0 otherwise.

.. c:function:: int uv_stream_set_blocking(uv_stream_t* handle, int blocking)

    Enable or disable blocking mode for a stream.

    When blocking mode is enabled all writes complete synchronously. The
    interface remains unchanged otherwise, e.g. completion or failure of the
    operation will still be reported through a callback which is made
    asynchronously.

    .. warning::
        Relying too much on this API is not recommended. It is likely to change
        significantly in the future.

        Currently only works on Windows for :c:type:`uv_pipe_t` handles.
        On UNIX platforms, all :c:type:`uv_stream_t` handles are supported.

        Also libuv currently makes no ordering guarantee when the blocking mode
        is changed after write requests have already been submitted. Therefore it is
        recommended to set the blocking mode immediately after opening or creating
        the stream.

    .. versionchanged:: 1.4.0 UNIX implementation added.

.. c:function:: size_t uv_stream_get_write_queue_size(const uv_stream_t* stream)

    Returns `stream->write_queue_size`.

    .. versionadded:: 1.19.0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/tcp.rst
===================================================


.. _tcp:

:c:type:`uv_tcp_t` --- TCP handle
=================================

TCP handles are used to represent both TCP streams and servers.

:c:type:`uv_tcp_t` is a 'subclass' of :c:type:`uv_stream_t`.


Data types
----------

.. c:type:: uv_tcp_t

    TCP handle type.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_stream_t` members also apply.


API
---

.. c:function:: int uv_tcp_init(uv_loop_t* loop, uv_tcp_t* handle)

    Initialize the handle. No socket is created as of yet.

.. c:function:: int uv_tcp_init_ex(uv_loop_t* loop, uv_tcp_t* handle, unsigned int flags)

    Initialize the handle with the specified flags. At the moment only the lower 8 bits
    of the `flags` parameter are used as the socket domain. A socket will be created
    for the given domain. If the specified domain is ``AF_UNSPEC`` no socket is created,
    just like :c:func:`uv_tcp_init`.

    .. versionadded:: 1.7.0

.. c:function:: int uv_tcp_open(uv_tcp_t* handle, uv_os_sock_t sock)

    Open an existing file descriptor or SOCKET as a TCP handle.

    .. versionchanged:: 1.2.1 the file descriptor is set to non-blocking mode.

    .. note::
        The passed file descriptor or SOCKET is not checked for its type, but
        it's required that it represents a valid stream socket.

.. c:function:: int uv_tcp_nodelay(uv_tcp_t* handle, int enable)

    Enable `TCP_NODELAY`, which disables Nagle's algorithm.

.. c:function:: int uv_tcp_keepalive(uv_tcp_t* handle, int enable, unsigned int delay)

    Enable / disable TCP keep-alive. `delay` is the initial delay in seconds,
    ignored when `enable` is zero.

    After `delay` has been reached, 10 successive probes, each spaced 1 second
    from the previous one, will still happen. If the connection is still lost
    at the end of this procedure, then the handle is destroyed with a
    ``UV_ETIMEDOUT`` error passed to the corresponding callback.

.. c:function:: int uv_tcp_simultaneous_accepts(uv_tcp_t* handle, int enable)

    Enable / disable simultaneous asynchronous accept requests that are
    queued by the operating system when listening for new TCP connections.

    This setting is used to tune a TCP server for the desired performance.
    Having simultaneous accepts can significantly improve the rate of accepting
    connections (which is why it is enabled by default) but may lead to uneven
    load distribution in multi-process setups.

.. c:function:: int uv_tcp_bind(uv_tcp_t* handle, const struct sockaddr* addr, unsigned int flags)

    Bind the handle to an address and port. `addr` should point to an
    initialized ``struct sockaddr_in`` or ``struct sockaddr_in6``.

    When the port is already taken, you can expect to see an ``UV_EADDRINUSE``
    error from :c:func:`uv_listen` or :c:func:`uv_tcp_connect`. That is,
    a successful call to this function does not guarantee that the call
    to :c:func:`uv_listen` or :c:func:`uv_tcp_connect` will succeed as well.

    `flags` can contain ``UV_TCP_IPV6ONLY``, in which case dual-stack support
    is disabled and only IPv6 is used.

.. c:function:: int uv_tcp_getsockname(const uv_tcp_t* handle, struct sockaddr* name, int* namelen)

    Get the current address to which the handle is bound. `name` must point to
    a valid and big enough chunk of memory, ``struct sockaddr_storage`` is
    recommended for IPv4 and IPv6 support.

.. c:function:: int uv_tcp_getpeername(const uv_tcp_t* handle, struct sockaddr* name, int* namelen)

    Get the address of the peer connected to the handle. `name` must point to
    a valid and big enough chunk of memory, ``struct sockaddr_storage`` is
    recommended for IPv4 and IPv6 support.

.. c:function:: int uv_tcp_connect(uv_connect_t* req, uv_tcp_t* handle, const struct sockaddr* addr, uv_connect_cb cb)

    Establish an IPv4 or IPv6 TCP connection. Provide an initialized TCP handle
    and an uninitialized :c:type:`uv_connect_t`. `addr` should point to an
    initialized ``struct sockaddr_in`` or ``struct sockaddr_in6``.

    On Windows if the `addr` is initialized to point to an unspecified address
    (``0.0.0.0`` or ``::``) it will be changed to point to ``localhost``.
    This is done to match the behavior of Linux systems.

    The callback is made when the connection has been established or when a
    connection error happened.

    .. versionchanged:: 1.19.0 added ``0.0.0.0`` and ``::`` to ``localhost``
        mapping

.. seealso:: The :c:type:`uv_stream_t` API functions also apply.

.. c:function:: int uv_tcp_close_reset(uv_tcp_t* handle, uv_close_cb close_cb)

    Resets a TCP connection by sending a RST packet. This is accomplished by
    setting the `SO_LINGER` socket option with a linger interval of zero and
    then calling :c:func:`uv_close`.
    Due to some platform inconsistencies, mixing of :c:func:`uv_shutdown` and
    :c:func:`uv_tcp_close_reset` calls is not allowed.

    .. versionadded:: 1.32.0

.. c:function:: int uv_socketpair(int type, int protocol, uv_os_sock_t socket_vector[2], int flags0, int flags1)

    Create a pair of connected sockets with the specified properties.
    The resulting handles can be passed to `uv_tcp_open`, used with `uv_spawn`,
    or for any other purpose.

    Valid values for `flags0` and `flags1` are:

      - UV_NONBLOCK_PIPE: Opens the specified socket handle for `OVERLAPPED`
        or `FIONBIO`/`O_NONBLOCK` I/O usage.
        This is recommended for handles that will be used by libuv,
        and not usually recommended otherwise.

    Equivalent to :man:`socketpair(2)` with a domain of AF_UNIX.

    .. versionadded:: 1.41.0


===================================================
/. ../deps/uv/docs/src/pipe.rst
===================================================


.. _pipe:

:c:type:`uv_pipe_t` --- Pipe handle
===================================

Pipe handles provide an abstraction over streaming files on Unix (including
local domain sockets, pipes, and FIFOs) and named pipes on Windows.

:c:type:`uv_pipe_t` is a 'subclass' of :c:type:`uv_stream_t`.


Data types
----------

.. c:type:: uv_pipe_t

    Pipe handle type.


Public members
^^^^^^^^^^^^^^

.. c:member:: int uv_pipe_t.ipc

    Whether this pipe is suitable for handle passing between processes.
    Only a connected pipe that will be passing the handles should have this flag
    set, not the listening pipe that uv_accept is called on.

.. seealso:: The :c:type:`uv_stream_t` members also apply.


API
---

.. c:function:: int uv_pipe_init(uv_loop_t* loop, uv_pipe_t* handle, int ipc)

    Initialize a pipe handle. The `ipc` argument is a boolean to indicate if
    this pipe will be used for handle passing between processes (which may
    change the bytes on the wire). Only a connected pipe that will be
    passing the handles should have this flag set, not the listening pipe
    that uv_accept is called on.

.. c:function:: int uv_pipe_open(uv_pipe_t* handle, uv_file file)

    Open an existing file descriptor or HANDLE as a pipe.

    .. versionchanged:: 1.2.1 the file descriptor is set to non-blocking mode.

    .. note::
        The passed file descriptor or HANDLE is not checked for its type, but
        it's required that it represents a valid pipe.

.. c:function:: int uv_pipe_bind(uv_pipe_t* handle, const char* name)

    Bind the pipe to a file path (Unix) or a name (Windows).

    Does not support Linux abstract namespace sockets,
    unlike :c:func:`uv_pipe_bind2`.

    Alias for ``uv_pipe_bind2(handle, name, strlen(name), 0)``.

    .. note::
        Paths on Unix get truncated to ``sizeof(sockaddr_un.sun_path)`` bytes,
        typically between 92 and 108 bytes.

.. c:function:: int uv_pipe_bind2(uv_pipe_t* handle, const char* name, size_t namelen, unsigned int flags)

    Bind the pipe to a file path (Unix) or a name (Windows).

    ``flags`` must be zero or ``UV_PIPE_NO_TRUNCATE``. Returns ``UV_EINVAL``
    for unsupported flags without performing the bind operation.

    Supports Linux abstract namespace sockets. ``namelen`` must include
    the leading nul byte but not the trailing nul byte.

    .. versionadded:: 1.46.0

    .. note::
        Paths on Unix get truncated to ``sizeof(sockaddr_un.sun_path)`` bytes,
        typically between 92 and 108 bytes, unless the ``UV_PIPE_NO_TRUNCATE``
        flag is specified, in which case an ``UV_EINVAL`` error is returned.

.. c:function:: void uv_pipe_connect(uv_connect_t* req, uv_pipe_t* handle, const char* name, uv_connect_cb cb)

    Connect to the Unix domain socket or the Windows named pipe.

    Does not support Linux abstract namespace sockets,
    unlike :c:func:`uv_pipe_connect2`.

    Alias for ``uv_pipe_connect2(req, handle, name, strlen(name), 0, cb)``.

    .. note::
        Paths on Unix get truncated to ``sizeof(sockaddr_un.sun_path)`` bytes,
        typically between 92 and 108 bytes.

.. c:function:: void uv_pipe_connect2(uv_connect_t* req, uv_pipe_t* handle, const char* name, size_t namelen, unsigned int flags, uv_connect_cb cb)

    Connect to the Unix domain socket or the Windows named pipe.

    ``flags`` must be zero or ``UV_PIPE_NO_TRUNCATE``. Returns ``UV_EINVAL``
    for unsupported flags without performing the connect operation.

    Supports Linux abstract namespace sockets. ``namelen`` must include
    the leading nul byte but not the trailing nul byte.

    .. versionadded:: 1.46.0

    .. note::
        Paths on Unix get truncated to ``sizeof(sockaddr_un.sun_path)`` bytes,
        typically between 92 and 108 bytes, unless the ``UV_PIPE_NO_TRUNCATE``
        flag is specified, in which case an ``UV_EINVAL`` error is returned.

.. c:function:: int uv_pipe_getsockname(const uv_pipe_t* handle, char* buffer, size_t* size)

    Get the name of the Unix domain socket or the named pipe.

    A preallocated buffer must be provided. The size parameter holds the length
    of the buffer and it's set to the number of bytes written to the buffer on
    output. If the buffer is not big enough ``UV_ENOBUFS`` will be returned and
    len will contain the required size.

    .. versionchanged:: 1.3.0 the returned length no longer includes the terminating null byte,
                        and the buffer is not null terminated.

.. c:function:: int uv_pipe_getpeername(const uv_pipe_t* handle, char* buffer, size_t* size)

    Get the name of the Unix domain socket or the named pipe to which the handle
    is connected.

    A preallocated buffer must be provided. The size parameter holds the length
    of the buffer and it's set to the number of bytes written to the buffer on
    output. If the buffer is not big enough ``UV_ENOBUFS`` will be returned and
    len will contain the required size.

    .. versionadded:: 1.3.0

.. c:function:: void uv_pipe_pending_instances(uv_pipe_t* handle, int count)

    Set the number of pending pipe instance handles when the pipe server is
    waiting for connections.

    .. note::
        This setting applies to Windows only.

.. c:function:: int uv_pipe_pending_count(uv_pipe_t* handle)
.. c:function:: uv_handle_type uv_pipe_pending_type(uv_pipe_t* handle)

    Used to receive handles over IPC pipes.

    First - call :c:func:`uv_pipe_pending_count`, if it's > 0 then initialize
    a handle of the given `type`, returned by :c:func:`uv_pipe_pending_type`
    and call ``uv_accept(pipe, handle)``.

.. seealso:: The :c:type:`uv_stream_t` API functions also apply.

.. c:function:: int uv_pipe_chmod(uv_pipe_t* handle, int flags)

    Alters pipe permissions, allowing it to be accessed from processes run by
    different users. Makes the pipe writable or readable by all users. Mode can
    be ``UV_WRITABLE``, ``UV_READABLE`` or ``UV_WRITABLE | UV_READABLE``. This
    function is blocking.

    .. versionadded:: 1.16.0

.. c:function:: int uv_pipe(uv_file fds[2], int read_flags, int write_flags)

    Create a pair of connected pipe handles.
    Data may be written to `fds[1]` and read from `fds[0]`.
    The resulting handles can be passed to `uv_pipe_open`, used with `uv_spawn`,
    or for any other purpose.

    Valid values for `flags` are:

      - UV_NONBLOCK_PIPE: Opens the specified socket handle for `OVERLAPPED`
        or `FIONBIO`/`O_NONBLOCK` I/O usage.
        This is recommended for handles that will be used by libuv,
        and not usually recommended otherwise.

    Equivalent to :man:`pipe(2)` with the `O_CLOEXEC` flag set.

    .. versionadded:: 1.41.0


===================================================
/. ../deps/uv/docs/src/tty.rst
===================================================


.. _tty:

:c:type:`uv_tty_t` --- TTY handle
=================================

TTY handles represent a stream for the console.

:c:type:`uv_tty_t` is a 'subclass' of :c:type:`uv_stream_t`.


Data types
----------

.. c:type:: uv_tty_t

    TTY handle type.

.. c:enum:: uv_tty_mode_t

    .. versionadded:: 1.2.0

    TTY mode type:

    ::

      typedef enum {
          /* Initial/normal terminal mode */
          UV_TTY_MODE_NORMAL,
          /* Raw input mode (On Windows, ENABLE_WINDOW_INPUT is also enabled) */
          UV_TTY_MODE_RAW,
          /* Binary-safe I/O mode for IPC (Unix-only) */
          UV_TTY_MODE_IO
      } uv_tty_mode_t;

.. c:enum:: uv_tty_vtermstate_t

    Console virtual terminal mode type:

    ::

      typedef enum {
          /*
           * The console supports handling of virtual terminal sequences
           * (Windows10 new console, ConEmu)
           */
          UV_TTY_SUPPORTED,
          /* The console cannot process virtual terminal sequences.  (Legacy
           * console)
           */
          UV_TTY_UNSUPPORTED
      } uv_tty_vtermstate_t



Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_stream_t` members also apply.


API
---

.. c:function:: int uv_tty_init(uv_loop_t* loop, uv_tty_t* handle, uv_file fd, int unused)

    Initialize a new TTY stream with the given file descriptor. Usually the
    file descriptor will be:

    * 0 = stdin
    * 1 = stdout
    * 2 = stderr

    On Unix this function will determine the path of the fd of the terminal
    using :man:`ttyname_r(3)`, open it, and use it if the passed file descriptor
    refers to a TTY. This lets libuv put the tty in non-blocking mode without
    affecting other processes that share the tty.

    This function is not thread safe on systems that don't support
    ioctl TIOCGPTN or TIOCPTYGNAME, for instance OpenBSD and Solaris.

    .. note::
        If reopening the TTY fails, libuv falls back to blocking writes.

    .. versionchanged:: 1.23.1: the `readable` parameter is now unused and ignored.
                        The correct value will now be auto-detected from the kernel.

    .. versionchanged:: 1.9.0: the path of the TTY is determined by
                        :man:`ttyname_r(3)`. In earlier versions libuv opened
                        `/dev/tty` instead.

    .. versionchanged:: 1.5.0: trying to initialize a TTY stream with a file
                        descriptor that refers to a file returns `UV_EINVAL`
                        on UNIX.

.. c:function:: int uv_tty_set_mode(uv_tty_t* handle, uv_tty_mode_t mode)

    .. versionchanged:: 1.2.0: the mode is specified as a
                        :c:type:`uv_tty_mode_t` value.

    Set the TTY using the specified terminal mode.

.. c:function:: int uv_tty_reset_mode(void)

    To be called when the program exits. Resets TTY settings to default
    values for the next process to take over.

    This function is async signal-safe on Unix platforms but can fail with error
    code ``UV_EBUSY`` if you call it when execution is inside
    :c:func:`uv_tty_set_mode`.

.. c:function:: int uv_tty_get_winsize(uv_tty_t* handle, int* width, int* height)

    Gets the current Window size. On success it returns 0.

.. seealso:: The :c:type:`uv_stream_t` API functions also apply.

.. c:function:: void uv_tty_set_vterm_state(uv_tty_vtermstate_t state)

    Controls whether console virtual terminal sequences are processed by libuv
    or console.
    Useful in particular for enabling ConEmu support of ANSI X3.64 and Xterm
    256 colors. Otherwise Windows10 consoles are usually detected automatically.

    This function is only meaningful on Windows systems. On Unix it is silently
    ignored.

    .. versionadded:: 1.33.0

.. c:function:: int uv_tty_get_vterm_state(uv_tty_vtermstate_t* state)

    Get the current state of whether console virtual terminal sequences are
    handled by libuv or the console.

    This function is not implemented on Unix, where it returns ``UV_ENOTSUP``.

    .. versionadded:: 1.33.0



===================================================
/. ../deps/uv/docs/src/udp.rst
===================================================


.. _udp:

:c:type:`uv_udp_t` --- UDP handle
=================================

UDP handles encapsulate UDP communication for both clients and servers.


Data types
----------

.. c:type:: uv_udp_t

    UDP handle type.

.. c:type:: uv_udp_send_t

    UDP send request type.

.. c:type:: uv_udp_flags

    Flags used in :c:func:`uv_udp_bind` and :c:type:`uv_udp_recv_cb`..

    ::

        enum uv_udp_flags {
            /* Disables dual stack mode. */
            UV_UDP_IPV6ONLY = 1,
            /*
            * Indicates message was truncated because read buffer was too small. The
            * remainder was discarded by the OS. Used in uv_udp_recv_cb.
            */
            UV_UDP_PARTIAL = 2,
            /*
            * Indicates if SO_REUSEADDR will be set when binding the handle in
            * uv_udp_bind.
            * This sets the SO_REUSEPORT socket flag on the BSDs and OS X. On other
            * Unix platforms, it sets the SO_REUSEADDR flag. What that means is that
            * multiple threads or processes can bind to the same address without error
            * (provided they all set the flag) but only the last one to bind will receive
            * any traffic, in effect "stealing" the port from the previous listener.
            */
            UV_UDP_REUSEADDR = 4,
            /*
             * Indicates that the message was received by recvmmsg, so the buffer provided
             * must not be freed by the recv_cb callback.
             */
            UV_UDP_MMSG_CHUNK = 8,
            /*
             * Indicates that the buffer provided has been fully utilized by recvmmsg and
             * that it should now be freed by the recv_cb callback. When this flag is set
             * in uv_udp_recv_cb, nread will always be 0 and addr will always be NULL.
             */
            UV_UDP_MMSG_FREE = 16,
            /*
             * Indicates if IP_RECVERR/IPV6_RECVERR will be set when binding the handle.
             * This sets IP_RECVERR for IPv4 and IPV6_RECVERR for IPv6 UDP sockets on
             * Linux. This stops the Linux kernel from suppressing some ICMP error messages
             * and enables full ICMP error reporting for faster failover.
             * This flag is no-op on platforms other than Linux.
             */
            UV_UDP_LINUX_RECVERR = 32,
            /*
            * Indicates that recvmmsg should be used, if available.
            */
            UV_UDP_RECVMMSG = 256
        };

.. c:type:: void (*uv_udp_send_cb)(uv_udp_send_t* req, int status)

    Type definition for callback passed to :c:func:`uv_udp_send`, which is
    called after the data was sent.

.. c:type:: void (*uv_udp_recv_cb)(uv_udp_t* handle, ssize_t nread, const uv_buf_t* buf, const struct sockaddr* addr, unsigned flags)

    Type definition for callback passed to :c:func:`uv_udp_recv_start`, which
    is called when the endpoint receives data.

    * `handle`: UDP handle
    * `nread`:  Number of bytes that have been received.
      0 if there is no more data to read. Note that 0 may also mean that an
      empty datagram was received (in this case `addr` is not NULL). < 0 if
      a transmission error was detected; if using :man:`recvmmsg(2)` no more
      chunks will be received and the buffer can be freed safely.
    * `buf`: :c:type:`uv_buf_t` with the received data.
    * `addr`: ``struct sockaddr*`` containing the address of the sender.
      Can be NULL. Valid for the duration of the callback only.
    * `flags`: One or more or'ed UV_UDP_* constants.

    The callee is responsible for freeing the buffer, libuv does not reuse it.
    The buffer may be a null buffer (where `buf->base` == NULL and `buf->len` == 0)
    on error.

    When using :man:`recvmmsg(2)`, chunks will have the `UV_UDP_MMSG_CHUNK` flag set,
    those must not be freed. If no errors occur, there will be a final callback with
    `nread` set to 0, `addr` set to NULL and the buffer pointing at the initially
    allocated data with the `UV_UDP_MMSG_CHUNK` flag cleared and the `UV_UDP_MMSG_FREE`
    flag set. If a UDP socket error occurs, `nread` will be < 0. In either scenario,
    the callee can now safely free the provided buffer.

    .. versionchanged:: 1.40.0 added the `UV_UDP_MMSG_FREE` flag.

    .. note::
        The receive callback will be called with `nread` == 0 and `addr` == NULL when there is
        nothing to read, and with `nread` == 0 and `addr` != NULL when an empty UDP packet is
        received.

.. c:enum:: uv_membership

    Membership type for a multicast address.

    ::

        typedef enum {
            UV_LEAVE_GROUP = 0,
            UV_JOIN_GROUP
        } uv_membership;


Public members
^^^^^^^^^^^^^^

.. c:member:: size_t uv_udp_t.send_queue_size

    Number of bytes queued for sending. This field strictly shows how much
    information is currently queued.

.. c:member:: size_t uv_udp_t.send_queue_count

    Number of send requests currently in the queue awaiting to be processed.

.. c:member:: uv_udp_t* uv_udp_send_t.handle

    UDP handle where this send request is taking place.

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_udp_init(uv_loop_t* loop, uv_udp_t* handle)

    Initialize a new UDP handle. The actual socket is created lazily.
    Returns 0 on success.

.. c:function:: int uv_udp_init_ex(uv_loop_t* loop, uv_udp_t* handle, unsigned int flags)

    Initialize the handle with the specified flags. The lower 8 bits of the `flags`
    parameter are used as the socket domain. A socket will be created for the given domain.
    If the specified domain is ``AF_UNSPEC`` no socket is created, just like :c:func:`uv_udp_init`.

    The remaining bits can be used to set one of these flags:

    * `UV_UDP_RECVMMSG`: if set, and the platform supports it, :man:`recvmmsg(2)` will
      be used.

    .. versionadded:: 1.7.0
    .. versionchanged:: 1.37.0 added the `UV_UDP_RECVMMSG` flag.

.. c:function:: int uv_udp_open(uv_udp_t* handle, uv_os_sock_t sock)

    Opens an existing file descriptor or Windows SOCKET as a UDP handle.

    Unix only:
    The only requirement of the `sock` argument is that it follows the datagram
    contract (works in unconnected mode, supports sendmsg()/recvmsg(), etc).
    In other words, other datagram-type sockets like raw sockets or netlink
    sockets can also be passed to this function.

    .. versionchanged:: 1.2.1 the file descriptor is set to non-blocking mode.

    .. note::
        The passed file descriptor or SOCKET is not checked for its type, but
        it's required that it represents a valid datagram socket.

.. c:function:: int uv_udp_bind(uv_udp_t* handle, const struct sockaddr* addr, unsigned int flags)

    Bind the UDP handle to an IP address and port.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param addr: `struct sockaddr_in` or `struct sockaddr_in6`
        with the address and port to bind to.

    :param flags: Indicate how the socket will be bound,
        ``UV_UDP_IPV6ONLY``, ``UV_UDP_REUSEADDR``, and ``UV_UDP_RECVERR``
        are supported.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_connect(uv_udp_t* handle, const struct sockaddr* addr)

    Associate the UDP handle to a remote address and port, so every
    message sent by this handle is automatically sent to that destination.
    Calling this function with a `NULL` `addr` disconnects the handle.
    Trying to call `uv_udp_connect()` on an already connected handle will result
    in an `UV_EISCONN` error. Trying to disconnect a handle that is not
    connected will return an `UV_ENOTCONN` error.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param addr: `struct sockaddr_in` or `struct sockaddr_in6`
        with the address and port to associate to.

    :returns: 0 on success, or an error code < 0 on failure.

    .. versionadded:: 1.27.0

.. c:function:: int uv_udp_getpeername(const uv_udp_t* handle, struct sockaddr* name, int* namelen)

    Get the remote IP and port of the UDP handle on connected UDP handles.
    On unconnected handles, it returns `UV_ENOTCONN`.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init` and bound.

    :param name: Pointer to the structure to be filled with the address data.
        In order to support IPv4 and IPv6 `struct sockaddr_storage` should be
        used.

    :param namelen: On input it indicates the data of the `name` field. On
        output it indicates how much of it was filled.

    :returns: 0 on success, or an error code < 0 on failure

    .. versionadded:: 1.27.0

.. c:function:: int uv_udp_getsockname(const uv_udp_t* handle, struct sockaddr* name, int* namelen)

    Get the local IP and port of the UDP handle.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init` and bound.

    :param name: Pointer to the structure to be filled with the address data.
        In order to support IPv4 and IPv6 `struct sockaddr_storage` should be
        used.

    :param namelen: On input it indicates the data of the `name` field. On
        output it indicates how much of it was filled.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_membership(uv_udp_t* handle, const char* multicast_addr, const char* interface_addr, uv_membership membership)

    Set membership for a multicast address

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param multicast_addr: Multicast address to set membership for.

    :param interface_addr: Interface address.

    :param membership: Should be ``UV_JOIN_GROUP`` or ``UV_LEAVE_GROUP``.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_source_membership(uv_udp_t* handle, const char* multicast_addr, const char* interface_addr, const char* source_addr, uv_membership membership)

    Set membership for a source-specific multicast group.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param multicast_addr: Multicast address to set membership for.

    :param interface_addr: Interface address.

    :param source_addr: Source address.

    :param membership: Should be ``UV_JOIN_GROUP`` or ``UV_LEAVE_GROUP``.

    :returns: 0 on success, or an error code < 0 on failure.

    .. versionadded:: 1.32.0

.. c:function:: int uv_udp_set_multicast_loop(uv_udp_t* handle, int on)

    Set IP multicast loop flag. Makes multicast packets loop back to
    local sockets.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param on: 1 for on, 0 for off.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_multicast_ttl(uv_udp_t* handle, int ttl)

    Set the multicast ttl.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param ttl: 1 through 255.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_multicast_interface(uv_udp_t* handle, const char* interface_addr)

    Set the multicast interface to send or receive data on.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param interface_addr: interface address.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_broadcast(uv_udp_t* handle, int on)

    Set broadcast on or off.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param on: 1 for on, 0 for off.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_set_ttl(uv_udp_t* handle, int ttl)

    Set the time to live.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param ttl: 1 through 255.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: int uv_udp_send(uv_udp_send_t* req, uv_udp_t* handle, const uv_buf_t bufs[], unsigned int nbufs, const struct sockaddr* addr, uv_udp_send_cb send_cb)

    Send data over the UDP socket. If the socket has not previously been bound
    with :c:func:`uv_udp_bind` it will be bound to 0.0.0.0
    (the "all interfaces" IPv4 address) and a random port number.

    On Windows if the `addr` is initialized to point to an unspecified address
    (``0.0.0.0`` or ``::``) it will be changed to point to ``localhost``.
    This is done to match the behavior of Linux systems.

    For connected UDP handles, `addr` must be set to `NULL`, otherwise it will
    return `UV_EISCONN` error.

    For connectionless UDP handles, `addr` cannot be `NULL`, otherwise it will
    return `UV_EDESTADDRREQ` error.

    :param req: UDP request handle. Need not be initialized.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param bufs: List of buffers to send.

    :param nbufs: Number of buffers in `bufs`.

    :param addr: `struct sockaddr_in` or `struct sockaddr_in6` with the
        address and port of the remote peer.

    :param send_cb: Callback to invoke when the data has been sent out.

    :returns: 0 on success, or an error code < 0 on failure.

    .. versionchanged:: 1.19.0 added ``0.0.0.0`` and ``::`` to ``localhost``
        mapping

    .. versionchanged:: 1.27.0 added support for connected sockets

.. c:function:: int uv_udp_try_send(uv_udp_t* handle, const uv_buf_t bufs[], unsigned int nbufs, const struct sockaddr* addr)

    Same as :c:func:`uv_udp_send`, but won't queue a send request if it can't
    be completed immediately.

    For connected UDP handles, `addr` must be set to `NULL`, otherwise it will
    return `UV_EISCONN` error.

    For connectionless UDP handles, `addr` cannot be `NULL`, otherwise it will
    return `UV_EDESTADDRREQ` error.

    :returns: >= 0: number of bytes sent (it matches the given buffer size).
        < 0: negative error code (``UV_EAGAIN`` is returned when the message
        can't be sent immediately).

    .. versionchanged:: 1.27.0 added support for connected sockets

.. c:function:: int uv_udp_recv_start(uv_udp_t* handle, uv_alloc_cb alloc_cb, uv_udp_recv_cb recv_cb)

    Prepare for receiving data. If the socket has not previously been bound
    with :c:func:`uv_udp_bind` it is bound to 0.0.0.0 (the "all interfaces"
    IPv4 address) and a random port number.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :param alloc_cb: Callback to invoke when temporary storage is needed.

    :param recv_cb: Callback to invoke with received data.

    :returns: 0 on success, or an error code < 0 on failure.

    .. note::
        When using :man:`recvmmsg(2)`, the number of messages received at a time is limited
        by the number of max size dgrams that will fit into the buffer allocated in `alloc_cb`, and
        `suggested_size` in `alloc_cb` for udp_recv is always set to the size of 1 max size dgram.

    .. versionchanged:: 1.35.0 added support for :man:`recvmmsg(2)` on supported platforms).
                        The use of this feature requires a buffer larger than
                        2 * 64KB to be passed to `alloc_cb`.
    .. versionchanged:: 1.37.0 :man:`recvmmsg(2)` support is no longer enabled implicitly,
                        it must be explicitly requested by passing the `UV_UDP_RECVMMSG` flag to
                        :c:func:`uv_udp_init_ex`.
    .. versionchanged:: 1.39.0 :c:func:`uv_udp_using_recvmmsg` can be used in `alloc_cb` to
                        determine if a buffer sized for use with :man:`recvmmsg(2)` should be
                        allocated for the current handle/platform.

.. c:function:: int uv_udp_using_recvmmsg(uv_udp_t* handle)

    Returns 1 if the UDP handle was created with the `UV_UDP_RECVMMSG` flag
    and the platform supports :man:`recvmmsg(2)`, 0 otherwise.

    .. versionadded:: 1.39.0

.. c:function:: int uv_udp_recv_stop(uv_udp_t* handle)

    Stop listening for incoming datagrams.

    :param handle: UDP handle. Should have been initialized with
        :c:func:`uv_udp_init`.

    :returns: 0 on success, or an error code < 0 on failure.

.. c:function:: size_t uv_udp_get_send_queue_size(const uv_udp_t* handle)

    Returns `handle->send_queue_size`.

    .. versionadded:: 1.19.0

.. c:function:: size_t uv_udp_get_send_queue_count(const uv_udp_t* handle)

    Returns `handle->send_queue_count`.

    .. versionadded:: 1.19.0

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/fs_event.rst
===================================================


.. _fs_event:

:c:type:`uv_fs_event_t` --- FS Event handle
===========================================

FS Event handles allow the user to monitor a given path for changes, for example,
if the file was renamed or there was a generic change in it. This handle uses
the best backend for the job on each platform.

.. note::
    For AIX, the non default IBM bos.ahafs package has to be installed.
    The AIX Event Infrastructure file system (ahafs) has some limitations:

        - ahafs tracks monitoring per process and is not thread safe. A separate process
          must be spawned for each monitor for the same event.
        - Events for file modification (writing to a file) are not received if only the
          containing folder is watched.

    See documentation_ for more details.

    The z/OS file system events monitoring infrastructure does not notify of file
    creation/deletion within a directory that is being monitored.
    See the `IBM Knowledge centre`_ for more details.

    .. _documentation: https://developer.ibm.com/articles/au-aix_event_infrastructure/
    .. _`IBM Knowledge centre`: https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.2.0/com.ibm.zos.v2r1.bpxb100/ioc.htm




Data types
----------

.. c:type:: uv_fs_event_t

    FS Event handle type.

.. c:type:: void (*uv_fs_event_cb)(uv_fs_event_t* handle, const char* filename, int events, int status)

    Callback passed to :c:func:`uv_fs_event_start` which will be called repeatedly
    after the handle is started. If the handle was started with a directory the
    `filename` parameter will be a relative path to a file contained in the directory.
    The `events` parameter is an ORed mask of :c:type:`uv_fs_event` elements.

.. c:type:: uv_fs_event

    Event types that :c:type:`uv_fs_event_t` handles monitor.

    ::

        enum uv_fs_event {
            UV_RENAME = 1,
            UV_CHANGE = 2
        };

.. c:type:: uv_fs_event_flags

    Flags that can be passed to :c:func:`uv_fs_event_start` to control its
    behavior.

    ::

        enum uv_fs_event_flags {
            /*
            * By default, if the fs event watcher is given a directory name, we will
            * watch for all events in that directory. This flags overrides this behavior
            * and makes fs_event report only changes to the directory entry itself. This
            * flag does not affect individual files watched.
            * This flag is currently not implemented yet on any backend.
            */
            UV_FS_EVENT_WATCH_ENTRY = 1,
            /*
            * By default uv_fs_event will try to use a kernel interface such as inotify
            * or kqueue to detect events. This may not work on remote file systems such
            * as NFS mounts. This flag makes fs_event fall back to calling stat() on a
            * regular interval.
            * This flag is currently not implemented yet on any backend.
            */
            UV_FS_EVENT_STAT = 2,
            /*
            * By default, event watcher, when watching directory, is not registering
            * (is ignoring) changes in its subdirectories.
            * This flag will override this behaviour on platforms that support it.
            */
            UV_FS_EVENT_RECURSIVE = 4
        };


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_fs_event_init(uv_loop_t* loop, uv_fs_event_t* handle)

    Initialize the handle.

.. c:function:: int uv_fs_event_start(uv_fs_event_t* handle, uv_fs_event_cb cb, const char* path, unsigned int flags)

    Start the handle with the given callback, which will watch the specified
    `path` for changes. `flags` can be an ORed mask of :c:type:`uv_fs_event_flags`.

    .. note:: Currently the only supported flag is ``UV_FS_EVENT_RECURSIVE`` and
              only on OSX and Windows.

.. c:function:: int uv_fs_event_stop(uv_fs_event_t* handle)

    Stop the handle, the callback will no longer be called.

.. c:function:: int uv_fs_event_getpath(uv_fs_event_t* handle, char* buffer, size_t* size)

    Get the path being monitored by the handle. The buffer must be preallocated
    by the user. Returns 0 on success or an error code < 0 in case of failure.
    On success, `buffer` will contain the path and `size` its length. If the buffer
    is not big enough `UV_ENOBUFS` will be returned and `size` will be set to
    the required size, including the null terminator.

    .. versionchanged:: 1.3.0 the returned length no longer includes the terminating null byte,
                        and the buffer is not null terminated.

    .. versionchanged:: 1.9.0 the returned length includes the terminating null
                        byte on `UV_ENOBUFS`, and the buffer is null terminated
                        on success.

.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/fs_poll.rst
===================================================


.. _fs_poll:

:c:type:`uv_fs_poll_t` --- FS Poll handle
=========================================

FS Poll handles allow the user to monitor a given path for changes. Unlike
:c:type:`uv_fs_event_t`, fs poll handles use `stat` to detect when a file has
changed so they can work on file systems where fs event handles can't.


Data types
----------

.. c:type:: uv_fs_poll_t

    FS Poll handle type.

.. c:type:: void (*uv_fs_poll_cb)(uv_fs_poll_t* handle, int status, const uv_stat_t* prev, const uv_stat_t* curr)

    Callback passed to :c:func:`uv_fs_poll_start` which will be called repeatedly
    after the handle is started, when any change happens to the monitored path.

    The callback is invoked with `status < 0` if `path` does not exist
    or is inaccessible. The watcher is *not* stopped but your callback is
    not called again until something changes (e.g. when the file is created
    or the error reason changes).

    When `status == 0`, the callback receives pointers to the old and new
    :c:type:`uv_stat_t` structs. They are valid for the duration of the
    callback only.


Public members
^^^^^^^^^^^^^^

N/A

.. seealso:: The :c:type:`uv_handle_t` members also apply.


API
---

.. c:function:: int uv_fs_poll_init(uv_loop_t* loop, uv_fs_poll_t* handle)

    Initialize the handle.

.. c:function:: int uv_fs_poll_start(uv_fs_poll_t* handle, uv_fs_poll_cb poll_cb, const char* path, unsigned int interval)

    Check the file at `path` for changes every `interval` milliseconds.

    .. note::
        For maximum portability, use multi-second intervals. Sub-second intervals will not detect
        all changes on many file systems.

.. c:function:: int uv_fs_poll_stop(uv_fs_poll_t* handle)

    Stop the handle, the callback will no longer be called.

.. c:function:: int uv_fs_poll_getpath(uv_fs_poll_t* handle, char* buffer, size_t* size)

    Get the path being monitored by the handle. The buffer must be preallocated
    by the user. Returns 0 on success or an error code < 0 in case of failure.
    On success, `buffer` will contain the path and `size` its length. If the buffer
    is not big enough `UV_ENOBUFS` will be returned and `size` will be set to
    the required size.

    .. versionchanged:: 1.3.0 the returned length no longer includes the terminating null byte,
                        and the buffer is not null terminated.

    .. versionchanged:: 1.9.0 the returned length includes the terminating null
                        byte on `UV_ENOBUFS`, and the buffer is null terminated
                        on success.


.. seealso:: The :c:type:`uv_handle_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/fs.rst
===================================================


.. _fs:

File system operations
======================

libuv provides a wide variety of cross-platform sync and async file system
operations. All functions defined in this document take a callback, which is
allowed to be NULL. If the callback is NULL the request is completed synchronously,
otherwise it will be performed asynchronously.

All file operations are run on the threadpool. See :ref:`threadpool` for information
on the threadpool size.

Starting with libuv v1.45.0, some file operations on Linux are handed off to
`io_uring <https://en.wikipedia.org/wiki/Io_uring>` when possible. Apart from
a (sometimes significant) increase in throughput there should be no change in
observable behavior. Libuv reverts to using its threadpool when the necessary
kernel features are unavailable or unsuitable.

.. note::
     On Windows `uv_fs_*` functions use utf-8 encoding.

Data types
----------

.. c:type:: uv_fs_t

    File system request type.

.. c:type:: uv_timespec_t

    Y2K38-unsafe data type for storing times with nanosecond resolution.
    Will be replaced with :c:type:`uv_timespec64_t` in libuv v2.0.

    ::

        typedef struct {
            long tv_sec;
            long tv_nsec;
        } uv_timespec_t;

.. c:type:: uv_stat_t

    Portable equivalent of ``struct stat``.

    ::

        typedef struct {
            uint64_t st_dev;
            uint64_t st_mode;
            uint64_t st_nlink;
            uint64_t st_uid;
            uint64_t st_gid;
            uint64_t st_rdev;
            uint64_t st_ino;
            uint64_t st_size;
            uint64_t st_blksize;
            uint64_t st_blocks;
            uint64_t st_flags;
            uint64_t st_gen;
            uv_timespec_t st_atim;
            uv_timespec_t st_mtim;
            uv_timespec_t st_ctim;
            uv_timespec_t st_birthtim;
        } uv_stat_t;

.. c:enum:: uv_fs_type

    File system request type.

    ::

        typedef enum {
            UV_FS_UNKNOWN = -1,
            UV_FS_CUSTOM,
            UV_FS_OPEN,
            UV_FS_CLOSE,
            UV_FS_READ,
            UV_FS_WRITE,
            UV_FS_SENDFILE,
            UV_FS_STAT,
            UV_FS_LSTAT,
            UV_FS_FSTAT,
            UV_FS_FTRUNCATE,
            UV_FS_UTIME,
            UV_FS_FUTIME,
            UV_FS_ACCESS,
            UV_FS_CHMOD,
            UV_FS_FCHMOD,
            UV_FS_FSYNC,
            UV_FS_FDATASYNC,
            UV_FS_UNLINK,
            UV_FS_RMDIR,
            UV_FS_MKDIR,
            UV_FS_MKDTEMP,
            UV_FS_RENAME,
            UV_FS_SCANDIR,
            UV_FS_LINK,
            UV_FS_SYMLINK,
            UV_FS_READLINK,
            UV_FS_CHOWN,
            UV_FS_FCHOWN,
            UV_FS_REALPATH,
            UV_FS_COPYFILE,
            UV_FS_LCHOWN,
            UV_FS_OPENDIR,
            UV_FS_READDIR,
            UV_FS_CLOSEDIR,
            UV_FS_MKSTEMP,
            UV_FS_LUTIME
        } uv_fs_type;

.. c:type:: uv_statfs_t

    Reduced cross platform equivalent of ``struct statfs``.
    Used in :c:func:`uv_fs_statfs`.

    ::

        typedef struct uv_statfs_s {
            uint64_t f_type;
            uint64_t f_bsize;
            uint64_t f_blocks;
            uint64_t f_bfree;
            uint64_t f_bavail;
            uint64_t f_files;
            uint64_t f_ffree;
            uint64_t f_spare[4];
        } uv_statfs_t;

.. c:enum:: uv_dirent_t

    Cross platform (reduced) equivalent of ``struct dirent``.
    Used in :c:func:`uv_fs_scandir_next`.

    ::

        typedef enum {
            UV_DIRENT_UNKNOWN,
            UV_DIRENT_FILE,
            UV_DIRENT_DIR,
            UV_DIRENT_LINK,
            UV_DIRENT_FIFO,
            UV_DIRENT_SOCKET,
            UV_DIRENT_CHAR,
            UV_DIRENT_BLOCK
        } uv_dirent_type_t;

        typedef struct uv_dirent_s {
            const char* name;
            uv_dirent_type_t type;
        } uv_dirent_t;

.. c:type:: uv_dir_t

    Data type used for streaming directory iteration.
    Used by :c:func:`uv_fs_opendir()`, :c:func:`uv_fs_readdir()`, and
    :c:func:`uv_fs_closedir()`. `dirents` represents a user provided array of
    `uv_dirent_t`s used to hold results. `nentries` is the user provided maximum
    array size of `dirents`.

    ::

        typedef struct uv_dir_s {
            uv_dirent_t* dirents;
            size_t nentries;
        } uv_dir_t;

.. c:type:: void (*uv_fs_cb)(uv_fs_t* req)

    Callback called when a request is completed asynchronously.


Public members
^^^^^^^^^^^^^^

.. c:member:: uv_loop_t* uv_fs_t.loop

    Loop that started this request and where completion will be reported.
    Readonly.

.. c:member:: uv_fs_type uv_fs_t.fs_type

    FS request type.

.. c:member:: const char* uv_fs_t.path

    Path affecting the request.

.. c:member:: ssize_t uv_fs_t.result

    Result of the request. < 0 means error, success otherwise. On requests such
    as :c:func:`uv_fs_read` or :c:func:`uv_fs_write` it indicates the amount of
    data that was read or written, respectively.

.. c:member:: uv_stat_t uv_fs_t.statbuf

    Stores the result of :c:func:`uv_fs_stat` and other stat requests.

.. c:member:: void* uv_fs_t.ptr

    Stores the result of :c:func:`uv_fs_readlink` and
    :c:func:`uv_fs_realpath` and serves as an alias to `statbuf`.

.. seealso:: The :c:type:`uv_req_t` members also apply.


API
---

.. c:function:: void uv_fs_req_cleanup(uv_fs_t* req)

    Cleanup request. Must be called after a request is finished to deallocate
    any memory libuv might have allocated.

.. c:function:: int uv_fs_close(uv_loop_t* loop, uv_fs_t* req, uv_file file, uv_fs_cb cb)

    Equivalent to :man:`close(2)`.

.. c:function:: int uv_fs_open(uv_loop_t* loop, uv_fs_t* req, const char* path, int flags, int mode, uv_fs_cb cb)

    Equivalent to :man:`open(2)`.

    .. note::
        On Windows libuv uses `CreateFileW` and thus the file is always opened
        in binary mode. Because of this the O_BINARY and O_TEXT flags are not
        supported.

.. c:function:: int uv_fs_read(uv_loop_t* loop, uv_fs_t* req, uv_file file, const uv_buf_t bufs[], unsigned int nbufs, int64_t offset, uv_fs_cb cb)

    Equivalent to :man:`preadv(2)`. If the `offset` argument is `-1`, then
    the current file offset is used and updated.

    .. warning::
        On Windows, under non-MSVC environments (e.g. when GCC or Clang is used
        to build libuv), files opened using ``UV_FS_O_FILEMAP`` may cause a fatal
        crash if the memory mapped read operation fails.

.. c:function:: int uv_fs_unlink(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`unlink(2)`.

.. c:function:: int uv_fs_write(uv_loop_t* loop, uv_fs_t* req, uv_file file, const uv_buf_t bufs[], unsigned int nbufs, int64_t offset, uv_fs_cb cb)

    Equivalent to :man:`pwritev(2)`. If the `offset` argument is `-1`, then
    the current file offset is used and updated.

    .. warning::
        On Windows, under non-MSVC environments (e.g. when GCC or Clang is used
        to build libuv), files opened using ``UV_FS_O_FILEMAP`` may cause a fatal
        crash if the memory mapped write operation fails.

.. c:function:: int uv_fs_mkdir(uv_loop_t* loop, uv_fs_t* req, const char* path, int mode, uv_fs_cb cb)

    Equivalent to :man:`mkdir(2)`.

    .. note::
        `mode` is currently not implemented on Windows.

.. c:function:: int uv_fs_mkdtemp(uv_loop_t* loop, uv_fs_t* req, const char* tpl, uv_fs_cb cb)

    Equivalent to :man:`mkdtemp(3)`. The result can be found as a null terminated string at `req->path`.

.. c:function:: int uv_fs_mkstemp(uv_loop_t* loop, uv_fs_t* req, const char* tpl, uv_fs_cb cb)

    Equivalent to :man:`mkstemp(3)`. The created file path can be found as a null terminated string at `req->path`.
    The file descriptor can be found as an integer at `req->result`.

    .. versionadded:: 1.34.0

.. c:function:: int uv_fs_rmdir(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`rmdir(2)`.

.. c:function:: int uv_fs_opendir(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Opens `path` as a directory stream. On success, a `uv_dir_t` is allocated
    and returned via `req->ptr`. This memory is not freed by
    `uv_fs_req_cleanup()`, although `req->ptr` is set to `NULL`. The allocated
    memory must be freed by calling `uv_fs_closedir()`. On failure, no memory
    is allocated.

    The contents of the directory can be iterated over by passing the resulting
    `uv_dir_t` to `uv_fs_readdir()`.

    .. versionadded:: 1.28.0

.. c:function:: int uv_fs_closedir(uv_loop_t* loop, uv_fs_t* req, uv_dir_t* dir, uv_fs_cb cb)

    Closes the directory stream represented by `dir` and frees the memory
    allocated by `uv_fs_opendir()`.

    .. versionadded:: 1.28.0

.. c:function:: int uv_fs_readdir(uv_loop_t* loop, uv_fs_t* req, uv_dir_t* dir, uv_fs_cb cb)

    Iterates over the directory stream, `dir`, returned by a successful
    `uv_fs_opendir()` call. Prior to invoking `uv_fs_readdir()`, the caller
    must set `dir->dirents` and `dir->nentries`, representing the array of
    :c:type:`uv_dirent_t` elements used to hold the read directory entries and
    its size.

    On success, the result is an integer >= 0 representing the number of entries
    read from the stream.

    .. versionadded:: 1.28.0

    .. warning::
        `uv_fs_readdir()` is not thread safe.

    .. note::
        This function does not return the "." and ".." entries.

    .. note::
        On success this function allocates memory that must be freed using
        `uv_fs_req_cleanup()`. `uv_fs_req_cleanup()` must be called before
        closing the directory with `uv_fs_closedir()`.

.. c:function:: int uv_fs_scandir(uv_loop_t* loop, uv_fs_t* req, const char* path, int flags, uv_fs_cb cb)
.. c:function:: int uv_fs_scandir_next(uv_fs_t* req, uv_dirent_t* ent)

    Equivalent to :man:`scandir(3)`, with a slightly different API. Once the callback
    for the request is called, the user can use :c:func:`uv_fs_scandir_next` to
    get `ent` populated with the next directory entry data. When there are no
    more entries ``UV_EOF`` will be returned.

    .. note::
        Unlike `scandir(3)`, this function does not return the "." and ".." entries.

    .. note::
        On Linux, getting the type of an entry is only supported by some file systems (btrfs, ext2,
        ext3 and ext4 at the time of this writing), check the :man:`getdents(2)` man page.

.. c:function:: int uv_fs_stat(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)
.. c:function:: int uv_fs_fstat(uv_loop_t* loop, uv_fs_t* req, uv_file file, uv_fs_cb cb)
.. c:function:: int uv_fs_lstat(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`stat(2)`, :man:`fstat(2)` and :man:`lstat(2)` respectively.

.. c:function:: int uv_fs_statfs(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`statfs(2)`. On success, a `uv_statfs_t` is allocated
    and returned via `req->ptr`. This memory is freed by `uv_fs_req_cleanup()`.

    .. note::
        Any fields in the resulting `uv_statfs_t` that are not supported by the
        underlying operating system are set to zero.

    .. versionadded:: 1.31.0

.. c:function:: int uv_fs_rename(uv_loop_t* loop, uv_fs_t* req, const char* path, const char* new_path, uv_fs_cb cb)

    Equivalent to :man:`rename(2)`.

.. c:function:: int uv_fs_fsync(uv_loop_t* loop, uv_fs_t* req, uv_file file, uv_fs_cb cb)

    Equivalent to :man:`fsync(2)`.

    .. note::
        For AIX, `uv_fs_fsync` returns `UV_EBADF` on file descriptors referencing
        non regular files.

.. c:function:: int uv_fs_fdatasync(uv_loop_t* loop, uv_fs_t* req, uv_file file, uv_fs_cb cb)

    Equivalent to :man:`fdatasync(2)`.

.. c:function:: int uv_fs_ftruncate(uv_loop_t* loop, uv_fs_t* req, uv_file file, int64_t offset, uv_fs_cb cb)

    Equivalent to :man:`ftruncate(2)`.

.. c:function:: int uv_fs_copyfile(uv_loop_t* loop, uv_fs_t* req, const char* path, const char* new_path, int flags, uv_fs_cb cb)

    Copies a file from `path` to `new_path`. Supported `flags` are described below.

    - `UV_FS_COPYFILE_EXCL`: If present, `uv_fs_copyfile()` will fail with
      `UV_EEXIST` if the destination path already exists. The default behavior
      is to overwrite the destination if it exists.
    - `UV_FS_COPYFILE_FICLONE`: If present, `uv_fs_copyfile()` will attempt to
      create a copy-on-write reflink. If the underlying platform does not
      support copy-on-write, or an error occurs while attempting to use
      copy-on-write, a fallback copy mechanism based on
      :c:func:`uv_fs_sendfile()` is used.
    - `UV_FS_COPYFILE_FICLONE_FORCE`: If present, `uv_fs_copyfile()` will
      attempt to create a copy-on-write reflink. If the underlying platform does
      not support copy-on-write, or an error occurs while attempting to use
      copy-on-write, then an error is returned.

    .. warning::
        If the destination path is created, but an error occurs while copying
        the data, then the destination path is removed. There is a brief window
        of time between closing and removing the file where another process
        could access the file.

    .. versionadded:: 1.14.0

    .. versionchanged:: 1.20.0 `UV_FS_COPYFILE_FICLONE` and
        `UV_FS_COPYFILE_FICLONE_FORCE` are supported.

    .. versionchanged:: 1.33.0 If an error occurs while using
        `UV_FS_COPYFILE_FICLONE_FORCE`, that error is returned. Previously,
        all errors were mapped to `UV_ENOTSUP`.

.. c:function:: int uv_fs_sendfile(uv_loop_t* loop, uv_fs_t* req, uv_file out_fd, uv_file in_fd, int64_t in_offset, size_t length, uv_fs_cb cb)

    Limited equivalent to :man:`sendfile(2)`.

.. c:function:: int uv_fs_access(uv_loop_t* loop, uv_fs_t* req, const char* path, int mode, uv_fs_cb cb)

    Equivalent to :man:`access(2)` on Unix. Windows uses ``GetFileAttributesW()``.

.. c:function:: int uv_fs_chmod(uv_loop_t* loop, uv_fs_t* req, const char* path, int mode, uv_fs_cb cb)
.. c:function:: int uv_fs_fchmod(uv_loop_t* loop, uv_fs_t* req, uv_file file, int mode, uv_fs_cb cb)

    Equivalent to :man:`chmod(2)` and :man:`fchmod(2)` respectively.

.. c:function:: int uv_fs_utime(uv_loop_t* loop, uv_fs_t* req, const char* path, double atime, double mtime, uv_fs_cb cb)
.. c:function:: int uv_fs_futime(uv_loop_t* loop, uv_fs_t* req, uv_file file, double atime, double mtime, uv_fs_cb cb)
.. c:function:: int uv_fs_lutime(uv_loop_t* loop, uv_fs_t* req, const char* path, double atime, double mtime, uv_fs_cb cb)

    Equivalent to :man:`utime(2)`, :man:`futimes(3)` and :man:`lutimes(3)` respectively.

    .. note::
      z/OS: `uv_fs_lutime()` is not implemented for z/OS. It can still be called but will return
      ``UV_ENOSYS``.

    .. note::
      AIX: `uv_fs_futime()` and `uv_fs_lutime()` functions only work for AIX 7.1 and newer.
      They can still be called on older versions but will return ``UV_ENOSYS``.

    .. versionchanged:: 1.10.0 sub-second precission is supported on Windows

.. c:function:: int uv_fs_link(uv_loop_t* loop, uv_fs_t* req, const char* path, const char* new_path, uv_fs_cb cb)

    Equivalent to :man:`link(2)`.

.. c:function:: int uv_fs_symlink(uv_loop_t* loop, uv_fs_t* req, const char* path, const char* new_path, int flags, uv_fs_cb cb)

    Equivalent to :man:`symlink(2)`.

    .. note::
        On Windows the `flags` parameter can be specified to control how the symlink will
        be created:

            * ``UV_FS_SYMLINK_DIR``: indicates that `path` points to a directory.

            * ``UV_FS_SYMLINK_JUNCTION``: request that the symlink is created
              using junction points.

.. c:function:: int uv_fs_readlink(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`readlink(2)`.
    The resulting string is stored in `req->ptr`.

.. c:function:: int uv_fs_realpath(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_fs_cb cb)

    Equivalent to :man:`realpath(3)` on Unix. Windows uses `GetFinalPathNameByHandle <https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getfinalpathnamebyhandlea>`_.
    The resulting string is stored in `req->ptr`.

    .. warning::
        This function has certain platform-specific caveats that were discovered when used in Node.

        * macOS and other BSDs: this function will fail with UV_ELOOP if more than 32 symlinks are
          found while resolving the given path.  This limit is hardcoded and cannot be sidestepped.
        * Windows: while this function works in the common case, there are a number of corner cases
          where it doesn't:

          - Paths in ramdisk volumes created by tools which sidestep the Volume Manager (such as ImDisk)
            cannot be resolved.
          - Inconsistent casing when using drive letters.
          - Resolved path bypasses subst'd drives.

        While this function can still be used, it's not recommended if scenarios such as the
        above need to be supported.

        The background story and some more details on these issues can be checked
        `here <https://github.com/nodejs/node/issues/7726>`_.

    .. versionadded:: 1.8.0

.. c:function:: int uv_fs_chown(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_uid_t uid, uv_gid_t gid, uv_fs_cb cb)
.. c:function:: int uv_fs_fchown(uv_loop_t* loop, uv_fs_t* req, uv_file file, uv_uid_t uid, uv_gid_t gid, uv_fs_cb cb)
.. c:function:: int uv_fs_lchown(uv_loop_t* loop, uv_fs_t* req, const char* path, uv_uid_t uid, uv_gid_t gid, uv_fs_cb cb)

    Equivalent to :man:`chown(2)`, :man:`fchown(2)` and :man:`lchown(2)` respectively.

    .. note::
        These functions are not implemented on Windows.

    .. versionchanged:: 1.21.0 implemented uv_fs_lchown

.. c:function:: uv_fs_type uv_fs_get_type(const uv_fs_t* req)

    Returns `req->fs_type`.

    .. versionadded:: 1.19.0

.. c:function:: ssize_t uv_fs_get_result(const uv_fs_t* req)

    Returns `req->result`.

    .. versionadded:: 1.19.0

.. c:function:: int uv_fs_get_system_error(const uv_fs_t* req)

    Returns the platform specific error code - `GetLastError()` value on Windows
    and `-(req->result)` on other platforms.

    .. versionadded:: 1.38.0

.. c:function:: void* uv_fs_get_ptr(const uv_fs_t* req)

    Returns `req->ptr`.

    .. versionadded:: 1.19.0

.. c:function:: const char* uv_fs_get_path(const uv_fs_t* req)

    Returns `req->path`.

    .. versionadded:: 1.19.0

.. c:function:: uv_stat_t* uv_fs_get_statbuf(uv_fs_t* req)

    Returns `&req->statbuf`.

    .. versionadded:: 1.19.0

.. seealso:: The :c:type:`uv_req_t` API functions also apply.

Helper functions
----------------

.. c:function:: uv_os_fd_t uv_get_osfhandle(int fd)

   For a file descriptor in the C runtime, get the OS-dependent handle.
   On UNIX, returns the ``fd`` intact. On Windows, this calls `_get_osfhandle <https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/get-osfhandle?view=vs-2019>`_.
   Note that the return value is still owned by the C runtime,
   any attempts to close it or to use it after closing the fd may lead to malfunction.

    .. versionadded:: 1.12.0

.. c:function:: int uv_open_osfhandle(uv_os_fd_t os_fd)

   For a OS-dependent handle, get the file descriptor in the C runtime.
   On UNIX, returns the ``os_fd`` intact. On Windows, this calls `_open_osfhandle <https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/open-osfhandle?view=vs-2019>`_.
   Note that this consumes the argument, any attempts to close it or to use it
   after closing the return value may lead to malfunction.

    .. versionadded:: 1.23.0

File open constants
-------------------

.. c:macro:: UV_FS_O_APPEND

    The file is opened in append mode. Before each write, the file offset is
    positioned at the end of the file.

.. c:macro:: UV_FS_O_CREAT

    The file is created if it does not already exist.

.. c:macro:: UV_FS_O_DIRECT

    File I/O is done directly to and from user-space buffers, which must be
    aligned. Buffer size and address should be a multiple of the physical sector
    size of the block device.

    .. note::
        `UV_FS_O_DIRECT` is supported on Linux, and on Windows via
        `FILE_FLAG_NO_BUFFERING <https://docs.microsoft.com/en-us/windows/win32/fileio/file-buffering>`_.
        `UV_FS_O_DIRECT` is not supported on macOS.

.. c:macro:: UV_FS_O_DIRECTORY

    If the path is not a directory, fail the open.

    .. note::
        `UV_FS_O_DIRECTORY` is not supported on Windows.

.. c:macro:: UV_FS_O_DSYNC

    The file is opened for synchronous I/O. Write operations will complete once
    all data and a minimum of metadata are flushed to disk.

    .. note::
        `UV_FS_O_DSYNC` is supported on Windows via
        `FILE_FLAG_WRITE_THROUGH <https://docs.microsoft.com/en-us/windows/win32/fileio/file-buffering>`_.

.. c:macro:: UV_FS_O_EXCL

    If the `O_CREAT` flag is set and the file already exists, fail the open.

    .. note::
        In general, the behavior of `O_EXCL` is undefined if it is used without
        `O_CREAT`. There is one exception: on Linux 2.6 and later, `O_EXCL` can
        be used without `O_CREAT` if pathname refers to a block device. If the
        block device is in use by the system (e.g., mounted), the open will fail
        with the error `EBUSY`.

.. c:macro:: UV_FS_O_EXLOCK

    Atomically obtain an exclusive lock.

    .. note::
        `UV_FS_O_EXLOCK` is only supported on macOS and Windows.

    .. versionchanged:: 1.17.0 support is added for Windows.

.. c:macro:: UV_FS_O_FILEMAP

    Use a memory file mapping to access the file. When using this flag, the
    file cannot be open multiple times concurrently.

    .. note::
        `UV_FS_O_FILEMAP` is only supported on Windows.

.. c:macro:: UV_FS_O_NOATIME

    Do not update the file access time when the file is read.

    .. note::
        `UV_FS_O_NOATIME` is not supported on Windows.

.. c:macro:: UV_FS_O_NOCTTY

    If the path identifies a terminal device, opening the path will not cause
    that terminal to become the controlling terminal for the process (if the
    process does not already have one).

    .. note::
        `UV_FS_O_NOCTTY` is not supported on Windows.

.. c:macro:: UV_FS_O_NOFOLLOW

    If the path is a symbolic link, fail the open.

    .. note::
        `UV_FS_O_NOFOLLOW` is not supported on Windows.

.. c:macro:: UV_FS_O_NONBLOCK

    Open the file in nonblocking mode if possible.

    .. note::
        `UV_FS_O_NONBLOCK` is not supported on Windows.

.. c:macro:: UV_FS_O_RANDOM

    Access is intended to be random. The system can use this as a hint to
    optimize file caching.

    .. note::
        `UV_FS_O_RANDOM` is only supported on Windows via
        `FILE_FLAG_RANDOM_ACCESS <https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea>`_.

.. c:macro:: UV_FS_O_RDONLY

    Open the file for read-only access.

.. c:macro:: UV_FS_O_RDWR

    Open the file for read-write access.

.. c:macro:: UV_FS_O_SEQUENTIAL

    Access is intended to be sequential from beginning to end. The system can
    use this as a hint to optimize file caching.

    .. note::
        `UV_FS_O_SEQUENTIAL` is only supported on Windows via
        `FILE_FLAG_SEQUENTIAL_SCAN <https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea>`_.

.. c:macro:: UV_FS_O_SHORT_LIVED

    The file is temporary and should not be flushed to disk if possible.

    .. note::
        `UV_FS_O_SHORT_LIVED` is only supported on Windows via
        `FILE_ATTRIBUTE_TEMPORARY <https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea>`_.

.. c:macro:: UV_FS_O_SYMLINK

    Open the symbolic link itself rather than the resource it points to.

.. c:macro:: UV_FS_O_SYNC

    The file is opened for synchronous I/O. Write operations will complete once
    all data and all metadata are flushed to disk.

    .. note::
        `UV_FS_O_SYNC` is supported on Windows via
        `FILE_FLAG_WRITE_THROUGH <https://docs.microsoft.com/en-us/windows/win32/fileio/file-buffering>`_.

.. c:macro:: UV_FS_O_TEMPORARY

    The file is temporary and should not be flushed to disk if possible.

    .. note::
        `UV_FS_O_TEMPORARY` is only supported on Windows via
        `FILE_ATTRIBUTE_TEMPORARY <https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea>`_.

.. c:macro:: UV_FS_O_TRUNC

    If the file exists and is a regular file, and the file is opened
    successfully for write access, its length shall be truncated to zero.

.. c:macro:: UV_FS_O_WRONLY

    Open the file for write-only access.


===================================================
/. ../deps/uv/docs/src/threadpool.rst
===================================================


.. _threadpool:

Thread pool work scheduling
===========================

libuv provides a threadpool which can be used to run user code and get notified
in the loop thread. This thread pool is internally used to run all file system
operations, as well as getaddrinfo and getnameinfo requests.

Its default size is 4, but it can be changed at startup time by setting the
``UV_THREADPOOL_SIZE`` environment variable to any value (the absolute maximum
is 1024).

.. versionchanged:: 1.30.0 the maximum UV_THREADPOOL_SIZE allowed was increased from 128 to 1024.

.. versionchanged:: 1.45.0 threads now have an 8 MB stack instead of the
   (sometimes too low) platform default.

The threadpool is global and shared across all event loops. When a particular
function makes use of the threadpool (i.e. when using :c:func:`uv_queue_work`)
libuv preallocates and initializes the maximum number of threads allowed by
``UV_THREADPOOL_SIZE``. This causes a relatively minor memory overhead
(~1MB for 128 threads) but increases the performance of threading at runtime.

.. note::
    Note that even though a global thread pool which is shared across all events
    loops is used, the functions are not thread safe.


Data types
----------

.. c:type:: uv_work_t

    Work request type.

.. c:type:: void (*uv_work_cb)(uv_work_t* req)

    Callback passed to :c:func:`uv_queue_work` which will be run on the thread
    pool.

.. c:type:: void (*uv_after_work_cb)(uv_work_t* req, int status)

    Callback passed to :c:func:`uv_queue_work` which will be called on the loop
    thread after the work on the threadpool has been completed. If the work
    was cancelled using :c:func:`uv_cancel` `status` will be ``UV_ECANCELED``.


Public members
^^^^^^^^^^^^^^

.. c:member:: uv_loop_t* uv_work_t.loop

    Loop that started this request and where completion will be reported.
    Readonly.

.. seealso:: The :c:type:`uv_req_t` members also apply.


API
---

.. c:function:: int uv_queue_work(uv_loop_t* loop, uv_work_t* req, uv_work_cb work_cb, uv_after_work_cb after_work_cb)

    Initializes a work request which will run the given `work_cb` in a thread
    from the threadpool. Once `work_cb` is completed, `after_work_cb` will be
    called on the loop thread.

    This request can be cancelled with :c:func:`uv_cancel`.

.. seealso:: The :c:type:`uv_req_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/dns.rst
===================================================


.. _dns:

DNS utility functions
=====================

libuv provides asynchronous variants of `getaddrinfo` and `getnameinfo`.


Data types
----------

.. c:type:: uv_getaddrinfo_t

    `getaddrinfo` request type.

.. c:type:: void (*uv_getaddrinfo_cb)(uv_getaddrinfo_t* req, int status, struct addrinfo* res)

    Callback which will be called with the getaddrinfo request result once
    complete. In case it was cancelled, `status` will have a value of
    ``UV_ECANCELED``.

.. c:type:: uv_getnameinfo_t

    `getnameinfo` request type.

.. c:type:: void (*uv_getnameinfo_cb)(uv_getnameinfo_t* req, int status, const char* hostname, const char* service)

    Callback which will be called with the getnameinfo request result once
    complete. In case it was cancelled, `status` will have a value of
    ``UV_ECANCELED``.


Public members
^^^^^^^^^^^^^^

.. c:member:: uv_loop_t* uv_getaddrinfo_t.loop

    Loop that started this getaddrinfo request and where completion will be
    reported. Readonly.

.. c:member:: struct addrinfo* uv_getaddrinfo_t.addrinfo

    Pointer to a `struct addrinfo` containing the result. Must be freed by the user
    with :c:func:`uv_freeaddrinfo`.

    .. versionchanged:: 1.3.0 the field is declared as public.

.. c:member:: uv_loop_t* uv_getnameinfo_t.loop

    Loop that started this getnameinfo request and where completion will be
    reported. Readonly.

.. c:member:: char[NI_MAXHOST] uv_getnameinfo_t.host

    Char array containing the resulting host. It's null terminated.

    .. versionchanged:: 1.3.0 the field is declared as public.

.. c:member:: char[NI_MAXSERV] uv_getnameinfo_t.service

    Char array containing the resulting service. It's null terminated.

    .. versionchanged:: 1.3.0 the field is declared as public.

.. seealso:: The :c:type:`uv_req_t` members also apply.


API
---

.. c:function:: int uv_getaddrinfo(uv_loop_t* loop, uv_getaddrinfo_t* req, uv_getaddrinfo_cb getaddrinfo_cb, const char* node, const char* service, const struct addrinfo* hints)

    Asynchronous :man:`getaddrinfo(3)`.

    Either node or service may be NULL but not both.

    `hints` is a pointer to a struct addrinfo with additional address type
    constraints, or NULL. Consult `man -s 3 getaddrinfo` for more details.

    Returns 0 on success or an error code < 0 on failure. If successful, the
    callback will get called sometime in the future with the lookup result,
    which is either:

    * status == 0, the res argument points to a valid `struct addrinfo`, or
    * status < 0, the res argument is NULL. See the UV_EAI_* constants.

    Call :c:func:`uv_freeaddrinfo` to free the addrinfo structure.

    .. versionchanged:: 1.3.0 the callback parameter is now allowed to be NULL,
                        in which case the request will run **synchronously**.

.. c:function:: void uv_freeaddrinfo(struct addrinfo* ai)

    Free the struct addrinfo. Passing NULL is allowed and is a no-op.

.. c:function:: int uv_getnameinfo(uv_loop_t* loop, uv_getnameinfo_t* req, uv_getnameinfo_cb getnameinfo_cb, const struct sockaddr* addr, int flags)

    Asynchronous :man:`getnameinfo(3)`.

    Returns 0 on success or an error code < 0 on failure. If successful, the
    callback will get called sometime in the future with the lookup result.
    Consult `man -s 3 getnameinfo` for more details.

    .. versionchanged:: 1.3.0 the callback parameter is now allowed to be NULL,
                        in which case the request will run **synchronously**.

.. seealso:: The :c:type:`uv_req_t` API functions also apply.


===================================================
/. ../deps/uv/docs/src/dll.rst
===================================================


.. _dll:

Shared library handling
=======================

libuv provides cross platform utilities for loading shared libraries and
retrieving symbols from them, using the following API.


Data types
----------

.. c:type:: uv_lib_t

    Shared library data type.


Public members
^^^^^^^^^^^^^^

N/A


API
---

.. c:function:: int uv_dlopen(const char* filename, uv_lib_t* lib)

    Opens a shared library. The filename is in utf-8. Returns 0 on success and
    -1 on error. Call :c:func:`uv_dlerror` to get the error message.

.. c:function:: void uv_dlclose(uv_lib_t* lib)

    Close the shared library.

.. c:function:: int uv_dlsym(uv_lib_t* lib, const char* name, void** ptr)

    Retrieves a data pointer from a dynamic library. It is legal for a symbol
    to map to NULL. Returns 0 on success and -1 if the symbol was not found.

.. c:function:: const char* uv_dlerror(const uv_lib_t* lib)

    Returns the last uv_dlopen() or uv_dlsym() error message.


===================================================
/. ../deps/uv/docs/src/threading.rst
===================================================


.. _threading:

Threading and synchronization utilities
=======================================

libuv provides cross-platform implementations for multiple threading and
synchronization primitives. The API largely follows the pthreads API.


Data types
----------

.. c:type:: uv_thread_t

    Thread data type.

.. c:type:: void (*uv_thread_cb)(void* arg)

    Callback that is invoked to initialize thread execution. `arg` is the same
    value that was passed to :c:func:`uv_thread_create`.

.. c:type:: uv_key_t

    Thread-local key data type.

.. c:type:: uv_once_t

    Once-only initializer data type.

.. c:type:: uv_mutex_t

    Mutex data type.

.. c:type:: uv_rwlock_t

    Read-write lock data type.

.. c:type:: uv_sem_t

    Semaphore data type.

.. c:type:: uv_cond_t

    Condition data type.

.. c:type:: uv_barrier_t

    Barrier data type.


API
---

Threads
^^^^^^^

.. c:type:: uv_thread_options_t

    Options for spawning a new thread (passed to :c:func:`uv_thread_create_ex`).

    ::

        typedef struct uv_thread_options_s {
          enum {
            UV_THREAD_NO_FLAGS = 0x00,
            UV_THREAD_HAS_STACK_SIZE = 0x01
          } flags;
          size_t stack_size;
        } uv_thread_options_t;

    More fields may be added to this struct at any time, so its exact
    layout and size should not be relied upon.

    .. versionadded:: 1.26.0

.. c:function:: int uv_thread_create(uv_thread_t* tid, uv_thread_cb entry, void* arg)

    .. versionchanged:: 1.4.1 returns a UV_E* error code on failure

.. c:function:: int uv_thread_create_ex(uv_thread_t* tid, const uv_thread_options_t* params, uv_thread_cb entry, void* arg)

    Like :c:func:`uv_thread_create`, but additionally specifies options for creating a new thread.

    If `UV_THREAD_HAS_STACK_SIZE` is set, `stack_size` specifies a stack size for the new thread.
    `0` indicates that the default value should be used, i.e. behaves as if the flag was not set.
    Other values will be rounded up to the nearest page boundary.

    .. versionadded:: 1.26.0

.. c:function:: int uv_thread_setaffinity(uv_thread_t* tid, char* cpumask, char* oldmask, size_t mask_size)

    Sets the specified thread's affinity to cpumask, which is specified in
    bytes. Optionally returning the previous affinity setting in oldmask.
    On Unix, uses :man:`pthread_getaffinity_np(3)` to get the affinity setting
    and maps the cpu_set_t to bytes in oldmask. Then maps the bytes in cpumask
    to a cpu_set_t and uses :man:`pthread_setaffinity_np(3)`. On Windows, maps
    the bytes in cpumask to a bitmask and uses SetThreadAffinityMask() which
    returns the previous affinity setting.

    The mask_size specifies the number of entries (bytes) in cpumask / oldmask,
    and must be greater-than-or-equal-to :c:func:`uv_cpumask_size`.

    .. note::
        Thread affinity setting is not atomic on Windows. Unsupported on macOS.

    .. versionadded:: 1.45.0

.. c:function:: int uv_thread_getaffinity(uv_thread_t* tid, char* cpumask, size_t mask_size)

    Gets the specified thread's affinity setting. On Unix, this maps the
    cpu_set_t returned by :man:`pthread_getaffinity_np(3)` to bytes in cpumask.

    The mask_size specifies the number of entries (bytes) in cpumask,
    and must be greater-than-or-equal-to :c:func:`uv_cpumask_size`.

    .. note::
        Thread affinity getting is not atomic on Windows. Unsupported on macOS.

    .. versionadded:: 1.45.0

.. c:function:: int uv_thread_getcpu(void)

    Gets the CPU number on which the calling thread is running.

    .. note::
        Currently only implemented on Windows, Linux and FreeBSD.

    .. versionadded:: 1.45.0

.. c:function:: uv_thread_t uv_thread_self(void)
.. c:function:: int uv_thread_join(uv_thread_t *tid)
.. c:function:: int uv_thread_equal(const uv_thread_t* t1, const uv_thread_t* t2)

Thread-local storage
^^^^^^^^^^^^^^^^^^^^

.. note::
    The total thread-local storage size may be limited. That is, it may not be possible to
    create many TLS keys.

.. c:function:: int uv_key_create(uv_key_t* key)
.. c:function:: void uv_key_delete(uv_key_t* key)
.. c:function:: void* uv_key_get(uv_key_t* key)
.. c:function:: void uv_key_set(uv_key_t* key, void* value)

Once-only initialization
^^^^^^^^^^^^^^^^^^^^^^^^

Runs a function once and only once. Concurrent calls to :c:func:`uv_once` with the
same guard will block all callers except one (it's unspecified which one).
The guard should be initialized statically with the UV_ONCE_INIT macro.

.. c:function:: void uv_once(uv_once_t* guard, void (*callback)(void))

Mutex locks
^^^^^^^^^^^

Functions return 0 on success or an error code < 0 (unless the
return type is void, of course).

.. c:function:: int uv_mutex_init(uv_mutex_t* handle)
.. c:function:: int uv_mutex_init_recursive(uv_mutex_t* handle)
.. c:function:: void uv_mutex_destroy(uv_mutex_t* handle)
.. c:function:: void uv_mutex_lock(uv_mutex_t* handle)
.. c:function:: int uv_mutex_trylock(uv_mutex_t* handle)
.. c:function:: void uv_mutex_unlock(uv_mutex_t* handle)

Read-write locks
^^^^^^^^^^^^^^^^

Functions return 0 on success or an error code < 0 (unless the
return type is void, of course).

.. c:function:: int uv_rwlock_init(uv_rwlock_t* rwlock)
.. c:function:: void uv_rwlock_destroy(uv_rwlock_t* rwlock)
.. c:function:: void uv_rwlock_rdlock(uv_rwlock_t* rwlock)
.. c:function:: int uv_rwlock_tryrdlock(uv_rwlock_t* rwlock)
.. c:function:: void uv_rwlock_rdunlock(uv_rwlock_t* rwlock)
.. c:function:: void uv_rwlock_wrlock(uv_rwlock_t* rwlock)
.. c:function:: int uv_rwlock_trywrlock(uv_rwlock_t* rwlock)
.. c:function:: void uv_rwlock_wrunlock(uv_rwlock_t* rwlock)

Semaphores
^^^^^^^^^^

Functions return 0 on success or an error code < 0 (unless the
return type is void, of course).

.. c:function:: int uv_sem_init(uv_sem_t* sem, unsigned int value)
.. c:function:: void uv_sem_destroy(uv_sem_t* sem)
.. c:function:: void uv_sem_post(uv_sem_t* sem)
.. c:function:: void uv_sem_wait(uv_sem_t* sem)
.. c:function:: int uv_sem_trywait(uv_sem_t* sem)

Conditions
^^^^^^^^^^

Functions return 0 on success or an error code < 0 (unless the
return type is void, of course).

.. note::
    1. Callers should be prepared to deal with spurious wakeups on :c:func:`uv_cond_wait`
       and :c:func:`uv_cond_timedwait`.
    2. The timeout parameter for :c:func:`uv_cond_timedwait` is relative to the time
       at which function is called.
    3. On z/OS, the timeout parameter for :c:func:`uv_cond_timedwait` is converted to an
       absolute system time at which the wait expires. If the current system clock time
       passes the absolute time calculated before the condition is signaled, an ETIMEDOUT
       error results. After the wait begins, the wait time is not affected by changes
       to the system clock.

.. c:function:: int uv_cond_init(uv_cond_t* cond)
.. c:function:: void uv_cond_destroy(uv_cond_t* cond)
.. c:function:: void uv_cond_signal(uv_cond_t* cond)
.. c:function:: void uv_cond_broadcast(uv_cond_t* cond)
.. c:function:: void uv_cond_wait(uv_cond_t* cond, uv_mutex_t* mutex)
.. c:function:: int uv_cond_timedwait(uv_cond_t* cond, uv_mutex_t* mutex, uint64_t timeout)

Barriers
^^^^^^^^

Functions return 0 on success or an error code < 0 (unless the
return type is void, of course).

.. note::
    :c:func:`uv_barrier_wait` returns a value > 0 to an arbitrarily chosen "serializer" thread
    to facilitate cleanup, i.e.

    ::

        if (uv_barrier_wait(&barrier) > 0)
            uv_barrier_destroy(&barrier);

.. c:function:: int uv_barrier_init(uv_barrier_t* barrier, unsigned int count)
.. c:function:: void uv_barrier_destroy(uv_barrier_t* barrier)
.. c:function:: int uv_barrier_wait(uv_barrier_t* barrier)


===================================================
/. ../deps/uv/docs/src/misc.rst
===================================================


.. _misc:

Miscellaneous utilities
=======================

This section contains miscellaneous functions that don't really belong in any
other section.


Data types
----------

.. c:type:: uv_buf_t

    Buffer data type.

    .. c:member:: char* uv_buf_t.base

        Pointer to the base of the buffer.

    .. c:member:: size_t uv_buf_t.len

        Total bytes in the buffer.

        .. note::
            On Windows this field is ULONG.

.. c:type:: void* (*uv_malloc_func)(size_t size)

        Replacement function for :man:`malloc(3)`.
        See :c:func:`uv_replace_allocator`.

.. c:type::  void* (*uv_realloc_func)(void* ptr, size_t size)

        Replacement function for :man:`realloc(3)`.
        See :c:func:`uv_replace_allocator`.

.. c:type::  void* (*uv_calloc_func)(size_t count, size_t size)

        Replacement function for :man:`calloc(3)`.
        See :c:func:`uv_replace_allocator`.

.. c:type:: void (*uv_free_func)(void* ptr)

        Replacement function for :man:`free(3)`.
        See :c:func:`uv_replace_allocator`.

.. c:type::  void (*uv_random_cb)(uv_random_t* req, int status, void* buf, size_t buflen)

    Callback passed to :c:func:`uv_random`. `status` is non-zero in case of
    error. The `buf` pointer is the same pointer that was passed to
    :c:func:`uv_random`.

.. c:type:: uv_file

    Cross platform representation of a file handle.

.. c:type:: uv_os_sock_t

    Cross platform representation of a socket handle.

.. c:type:: uv_os_fd_t

    Abstract representation of a file descriptor. On Unix systems this is a
    `typedef` of `int` and on Windows a `HANDLE`.

.. c:type:: uv_pid_t

    Cross platform representation of a `pid_t`.

    .. versionadded:: 1.16.0

.. c:type:: uv_timeval_t

    Y2K38-unsafe data type for storing times with microsecond resolution.
    Will be replaced with :c:type:`uv_timeval64_t` in libuv v2.0.

    ::

        typedef struct {
            long tv_sec;
            long tv_usec;
        } uv_timeval_t;

.. c:type:: uv_timeval64_t

    Y2K38-safe data type for storing times with microsecond resolution.

    ::

        typedef struct {
            int64_t tv_sec;
            int32_t tv_usec;
        } uv_timeval64_t;

.. c:type:: uv_timespec64_t

    Y2K38-safe data type for storing times with nanosecond resolution.

    ::

        typedef struct {
            int64_t tv_sec;
            int32_t tv_nsec;
        } uv_timespec64_t;

.. c:enum:: uv_clock_id

    Clock source for :c:func:`uv_clock_gettime`.

    ::

        typedef enum {
          UV_CLOCK_MONOTONIC,
          UV_CLOCK_REALTIME
        } uv_clock_id;

.. c:type:: uv_rusage_t

    Data type for resource usage results.

    ::

        typedef struct {
            uv_timeval_t ru_utime; /* user CPU time used */
            uv_timeval_t ru_stime; /* system CPU time used */
            uint64_t ru_maxrss; /* maximum resident set size */
            uint64_t ru_ixrss; /* integral shared memory size (X) */
            uint64_t ru_idrss; /* integral unshared data size (X) */
            uint64_t ru_isrss; /* integral unshared stack size (X) */
            uint64_t ru_minflt; /* page reclaims (soft page faults) (X) */
            uint64_t ru_majflt; /* page faults (hard page faults) */
            uint64_t ru_nswap; /* swaps (X) */
            uint64_t ru_inblock; /* block input operations */
            uint64_t ru_oublock; /* block output operations */
            uint64_t ru_msgsnd; /* IPC messages sent (X) */
            uint64_t ru_msgrcv; /* IPC messages received (X) */
            uint64_t ru_nsignals; /* signals received (X) */
            uint64_t ru_nvcsw; /* voluntary context switches (X) */
            uint64_t ru_nivcsw; /* involuntary context switches (X) */
        } uv_rusage_t;

    Members marked with `(X)` are unsupported on Windows.
    See :man:`getrusage(2)` for supported fields on UNIX-like platforms.

    The maximum resident set size is reported in kilobytes, the unit most
    platforms use natively.

.. c:type:: uv_cpu_info_t

    Data type for CPU information.

    ::

        typedef struct uv_cpu_info_s {
            char* model;
            int speed;
            struct uv_cpu_times_s {
                uint64_t user; /* milliseconds */
                uint64_t nice; /* milliseconds */
                uint64_t sys; /* milliseconds */
                uint64_t idle; /* milliseconds */
                uint64_t irq; /* milliseconds */
            } cpu_times;
        } uv_cpu_info_t;

.. c:type:: uv_interface_address_t

    Data type for interface addresses.

    ::

        typedef struct uv_interface_address_s {
            char* name;
            char phys_addr[6];
            int is_internal;
            union {
                struct sockaddr_in address4;
                struct sockaddr_in6 address6;
            } address;
            union {
                struct sockaddr_in netmask4;
                struct sockaddr_in6 netmask6;
            } netmask;
        } uv_interface_address_t;

.. c:type:: uv_passwd_t

    Data type for password file information.

    ::

        typedef struct uv_passwd_s {
            char* username;
            long uid;
            long gid;
            char* shell;
            char* homedir;
        } uv_passwd_t;

.. c:type:: uv_utsname_t

    Data type for operating system name and version information.

    ::

        typedef struct uv_utsname_s {
            char sysname[256];
            char release[256];
            char version[256];
            char machine[256];
        } uv_utsname_t;

.. c:type:: uv_env_item_t

    Data type for environment variable storage.

    ::

        typedef struct uv_env_item_s {
            char* name;
            char* value;
        } uv_env_item_t;

.. c:type:: uv_random_t

    Random data request type.

API
---

.. c:function:: uv_handle_type uv_guess_handle(uv_file file)

    Used to detect what type of stream should be used with a given file
    descriptor. Usually this will be used during initialization to guess the
    type of the stdio streams.

    For :man:`isatty(3)` equivalent functionality use this function and test
    for `UV_TTY`.

.. c:function:: int uv_replace_allocator(uv_malloc_func malloc_func, uv_realloc_func realloc_func, uv_calloc_func calloc_func, uv_free_func free_func)

    .. versionadded:: 1.6.0

    Override the use of the standard library's :man:`malloc(3)`,
    :man:`calloc(3)`, :man:`realloc(3)`, :man:`free(3)`, memory allocation
    functions.

    This function must be called before any other libuv function is called or
    after all resources have been freed and thus libuv doesn't reference
    any allocated memory chunk.

    On success, it returns 0, if any of the function pointers is `NULL` it
    returns `UV_EINVAL`.

    .. warning:: There is no protection against changing the allocator multiple
                 times. If the user changes it they are responsible for making
                 sure the allocator is changed while no memory was allocated with
                 the previous allocator, or that they are compatible.

    .. warning:: Allocator must be thread-safe.

.. c:function:: void uv_library_shutdown(void);

    .. versionadded:: 1.38.0

    Release any global state that libuv is holding onto. Libuv will normally
    do so automatically when it is unloaded but it can be instructed to perform
    cleanup manually.

    .. warning:: Only call :c:func:`uv_library_shutdown()` once.

    .. warning:: Don't call :c:func:`uv_library_shutdown()` when there are
                 still event loops or I/O requests active.

    .. warning:: Don't call libuv functions after calling
                 :c:func:`uv_library_shutdown()`.

.. c:function:: uv_buf_t uv_buf_init(char* base, unsigned int len)

    Constructor for :c:type:`uv_buf_t`.

    Due to platform differences the user cannot rely on the ordering of the
    `base` and `len` members of the uv_buf_t struct. The user is responsible for
    freeing `base` after the uv_buf_t is done. Return struct passed by value.

.. c:function:: char** uv_setup_args(int argc, char** argv)

    Store the program arguments. Required for getting / setting the process title
    or the executable path. Libuv may take ownership of the memory that `argv` 
    points to. This function should be called exactly once, at program start-up.

    Example:

    ::

        argv = uv_setup_args(argc, argv);  /* May return a copy of argv. */


.. c:function:: int uv_get_process_title(char* buffer, size_t size)

    Gets the title of the current process. You *must* call `uv_setup_args`
    before calling this function on Unix and AIX systems. If `uv_setup_args`
    has not been called on systems that require it, then `UV_ENOBUFS` is
    returned. If `buffer` is `NULL` or `size` is zero, `UV_EINVAL` is returned.
    If `size` cannot accommodate the process title and terminating `nul`
    character, the function returns `UV_ENOBUFS`.

    .. note::
        On BSD systems, `uv_setup_args` is needed for getting the initial process
        title. The process title returned will be an empty string until either
        `uv_setup_args` or `uv_set_process_title` is called.

    .. versionchanged:: 1.18.1 now thread-safe on all supported platforms.

    .. versionchanged:: 1.39.0 now returns an error if `uv_setup_args` is needed
                        but hasn't been called.

.. c:function:: int uv_set_process_title(const char* title)

    Sets the current process title. You *must* call `uv_setup_args` before
    calling this function on Unix and AIX systems. If `uv_setup_args` has not
    been called on systems that require it, then `UV_ENOBUFS` is returned. On
    platforms with a fixed size buffer for the process title the contents of
    `title` will be copied to the buffer and truncated if larger than the
    available space. Other platforms will return `UV_ENOMEM` if they cannot
    allocate enough space to duplicate the contents of `title`.

    .. versionchanged:: 1.18.1 now thread-safe on all supported platforms.

    .. versionchanged:: 1.39.0 now returns an error if `uv_setup_args` is needed
                        but hasn't been called.

.. c:function:: int uv_resident_set_memory(size_t* rss)

    Gets the resident set size (RSS) for the current process.

.. c:function:: int uv_uptime(double* uptime)

    Gets the current system uptime. Depending on the system full or fractional seconds are returned.

.. c:function:: int uv_getrusage(uv_rusage_t* rusage)

    Gets the resource usage measures for the current process.

    .. note::
        On Windows not all fields are set, the unsupported fields are filled with zeroes.
        See :c:type:`uv_rusage_t` for more details.

.. c:function:: uv_pid_t uv_os_getpid(void)

    Returns the current process ID.

    .. versionadded:: 1.18.0

.. c:function:: uv_pid_t uv_os_getppid(void)

    Returns the parent process ID.

    .. versionadded:: 1.16.0

.. c:function:: unsigned int uv_available_parallelism(void)

    Returns an estimate of the default amount of parallelism a program should
    use. Always returns a non-zero value.

    On Linux, inspects the calling thread's CPU affinity mask to determine if
    it has been pinned to specific CPUs.

    On Windows, the available parallelism may be underreported on systems with
    more than 64 logical CPUs.

    On other platforms, reports the number of CPUs that the operating system
    considers to be online.

    .. versionadded:: 1.44.0

.. c:function:: int uv_cpu_info(uv_cpu_info_t** cpu_infos, int* count)

    Gets information about the CPUs on the system. The `cpu_infos` array will
    have `count` elements and needs to be freed with :c:func:`uv_free_cpu_info`.

    Use :c:func:`uv_available_parallelism` if you need to know how many CPUs
    are available for threads or child processes.

.. c:function:: void uv_free_cpu_info(uv_cpu_info_t* cpu_infos, int count)

    Frees the `cpu_infos` array previously allocated with :c:func:`uv_cpu_info`.

.. c:function:: int uv_cpumask_size(void)

    Returns the maximum size of the mask used for process/thread affinities,
    or `UV_ENOTSUP` if affinities are not supported on the current platform.

    .. versionadded:: 1.45.0

.. c:function:: int uv_interface_addresses(uv_interface_address_t** addresses, int* count)

    Gets address information about the network interfaces on the system. An
    array of `count` elements is allocated and returned in `addresses`. It must
    be freed by the user, calling :c:func:`uv_free_interface_addresses`.

.. c:function:: void uv_free_interface_addresses(uv_interface_address_t* addresses, int count)

    Free an array of :c:type:`uv_interface_address_t` which was returned by
    :c:func:`uv_interface_addresses`.

.. c:function:: void uv_loadavg(double avg[3])

    Gets the load average. See: `<https://en.wikipedia.org/wiki/Load_(computing)>`_

    .. note::
        Returns [0,0,0] on Windows (i.e., it's not implemented).

.. c:function:: int uv_ip4_addr(const char* ip, int port, struct sockaddr_in* addr)

    Convert a string containing an IPv4 addresses to a binary structure.

.. c:function:: int uv_ip6_addr(const char* ip, int port, struct sockaddr_in6* addr)

    Convert a string containing an IPv6 addresses to a binary structure.

.. c:function:: int uv_ip4_name(const struct sockaddr_in* src, char* dst, size_t size)

    Convert a binary structure containing an IPv4 address to a string.

.. c:function:: int uv_ip6_name(const struct sockaddr_in6* src, char* dst, size_t size)

    Convert a binary structure containing an IPv6 address to a string.

.. c:function:: int uv_ip_name(const struct sockaddr *src, char *dst, size_t size)

    Convert a binary structure containing an IPv4 address or an IPv6 address to a string.

.. c:function:: int uv_inet_ntop(int af, const void* src, char* dst, size_t size)
.. c:function:: int uv_inet_pton(int af, const char* src, void* dst)

    Cross-platform IPv6-capable implementation of :man:`inet_ntop(3)`
    and :man:`inet_pton(3)`. On success they return 0. In case of error
    the target `dst` pointer is unmodified.

.. c:macro:: UV_IF_NAMESIZE

    Maximum IPv6 interface identifier name length.  Defined as
    `IFNAMSIZ` on Unix and `IF_NAMESIZE` on Linux and Windows.

    .. versionadded:: 1.16.0

.. c:function:: int uv_if_indextoname(unsigned int ifindex, char* buffer, size_t* size)

    IPv6-capable implementation of :man:`if_indextoname(3)`. When called,
    `*size` indicates the length of the `buffer`, which is used to store the
    result.
    On success, zero is returned, `buffer` contains the interface name, and
    `*size` represents the string length of the `buffer`, excluding the NUL
    terminator byte from `*size`. On error, a negative result is
    returned. If `buffer` is not large enough to hold the result,
    `UV_ENOBUFS` is returned, and `*size` represents the necessary size in
    bytes, including the NUL terminator byte into the `*size`.

    On Unix, the returned interface name can be used directly as an
    interface identifier in scoped IPv6 addresses, e.g.
    `fe80::abc:def1:2345%en0`.

    On Windows, the returned interface cannot be used as an interface
    identifier, as Windows uses numerical interface identifiers, e.g.
    `fe80::abc:def1:2345%5`.

    To get an interface identifier in a cross-platform compatible way,
    use `uv_if_indextoiid()`.

    Example:

    ::

        char ifname[UV_IF_NAMESIZE];
        size_t size = sizeof(ifname);
        uv_if_indextoname(sin6->sin6_scope_id, ifname, &size);

    .. versionadded:: 1.16.0

.. c:function:: int uv_if_indextoiid(unsigned int ifindex, char* buffer, size_t* size)

    Retrieves a network interface identifier suitable for use in an IPv6 scoped
    address. On Windows, returns the numeric `ifindex` as a string. On all other
    platforms, `uv_if_indextoname()` is called. The result is written to
    `buffer`, with `*size` indicating the length of `buffer`. If `buffer` is not
    large enough to hold the result, then `UV_ENOBUFS` is returned, and `*size`
    represents the size, including the NUL byte, required to hold the
    result.

    See `uv_if_indextoname` for further details.

    .. versionadded:: 1.16.0

.. c:function:: int uv_exepath(char* buffer, size_t* size)

    Gets the executable path. You *must* call `uv_setup_args` before calling
    this function.

.. c:function:: int uv_cwd(char* buffer, size_t* size)

    Gets the current working directory, and stores it in `buffer`. If the
    current working directory is too large to fit in `buffer`, this function
    returns `UV_ENOBUFS`, and sets `size` to the required length, including the
    null terminator.

    .. versionchanged:: 1.1.0

        On Unix the path no longer ends in a slash.

    .. versionchanged:: 1.9.0 the returned length includes the terminating null
                        byte on `UV_ENOBUFS`, and the buffer is null terminated
                        on success.


.. c:function:: int uv_chdir(const char* dir)

    Changes the current working directory.

.. c:function:: int uv_os_homedir(char* buffer, size_t* size)

    Gets the current user's home directory. On Windows, `uv_os_homedir()` first
    checks the `USERPROFILE` environment variable using
    `GetEnvironmentVariableW()`. If `USERPROFILE` is not set,
    `GetUserProfileDirectoryW()` is called. On all other operating systems,
    `uv_os_homedir()` first checks the `HOME` environment variable using
    :man:`getenv(3)`. If `HOME` is not set, :man:`getpwuid_r(3)` is called. The
    user's home directory is stored in `buffer`. When `uv_os_homedir()` is
    called, `size` indicates the maximum size of `buffer`. On success `size` is set
    to the string length of `buffer`. On `UV_ENOBUFS` failure `size` is set to the
    required length for `buffer`, including the null byte.

    .. warning::
        `uv_os_homedir()` is not thread safe.

    .. versionadded:: 1.6.0

.. c:function:: int uv_os_tmpdir(char* buffer, size_t* size)

    Gets the temp directory. On Windows, `uv_os_tmpdir()` uses `GetTempPathW()`.
    On all other operating systems, `uv_os_tmpdir()` uses the first environment
    variable found in the ordered list `TMPDIR`, `TMP`, `TEMP`, and `TEMPDIR`.
    If none of these are found, the path `"/tmp"` is used, or, on Android,
    `"/data/local/tmp"` is used. The temp directory is stored in `buffer`. When
    `uv_os_tmpdir()` is called, `size` indicates the maximum size of `buffer`.
    On success `size` is set to the string length of `buffer` (which does not
    include the terminating null). On `UV_ENOBUFS` failure `size` is set to the
    required length for `buffer`, including the null byte.

    .. warning::
        `uv_os_tmpdir()` is not thread safe.

    .. versionadded:: 1.9.0

.. c:function:: int uv_os_get_passwd(uv_passwd_t* pwd)

    Gets a subset of the password file entry for the current effective uid (not
    the real uid). The populated data includes the username, euid, gid, shell,
    and home directory. On non-Windows systems, all data comes from
    :man:`getpwuid_r(3)`. On Windows, uid and gid are set to -1 and have no
    meaning, and shell is `NULL`. After successfully calling this function, the
    memory allocated to `pwd` needs to be freed with
    :c:func:`uv_os_free_passwd`.

    .. versionadded:: 1.9.0

.. c:function:: void uv_os_free_passwd(uv_passwd_t* pwd)

    Frees the `pwd` memory previously allocated with :c:func:`uv_os_get_passwd`.

    .. versionadded:: 1.9.0

.. c:function:: uint64_t uv_get_free_memory(void)

    Gets the amount of free memory available in the system, as reported by
    the kernel (in bytes). Returns 0 when unknown.

.. c:function:: uint64_t uv_get_total_memory(void)

    Gets the total amount of physical memory in the system (in bytes).
    Returns 0 when unknown.

.. c:function:: uint64_t uv_get_constrained_memory(void)

    Gets the total amount of memory available to the process (in bytes) based on
    limits imposed by the OS. If there is no such constraint, or the constraint
    is unknown, `0` is returned. If there is a constraining mechanism, but there
    is no constraint set, `UINT64_MAX` is returned. Note that it is not unusual
    for this value to be less than or greater than :c:func:`uv_get_total_memory`.

    .. note::
        This function currently only returns a non-zero value on Linux, based
        on cgroups if it is present, and on z/OS based on RLIMIT_MEMLIMIT.

    .. versionadded:: 1.29.0

.. c:function:: uint64_t uv_get_available_memory(void)

    Gets the amount of free memory that is still available to the process (in bytes).
    This differs from :c:func:`uv_get_free_memory` in that it takes into account any
    limits imposed by the OS. If there is no such constraint, or the constraint
    is unknown, the amount returned will be identical to :c:func:`uv_get_free_memory`.

    .. note::
        This function currently only returns a value that is different from
        what :c:func:`uv_get_free_memory` reports on Linux, based
        on cgroups if it is present.

    .. versionadded:: 1.45.0

.. c:function:: uint64_t uv_hrtime(void)

    Returns the current high-resolution timestamp. This is expressed in
    nanoseconds. It is relative to an arbitrary time in the past. It is not
    related to the time of day and therefore not subject to clock drift. The
    primary use is for measuring performance between intervals.

    .. note::
        Not every platform can support nanosecond resolution; however, this value will always
        be in nanoseconds.

.. c:function:: int uv_clock_gettime(uv_clock_id clock_id, uv_timespec64_t* ts)

    Obtain the current system time from a high-resolution real-time or monotonic
    clock source.

    The real-time clock counts from the UNIX epoch (1970-01-01) and is subject
    to time adjustments; it can jump back in time.

    The monotonic clock counts from an arbitrary point in the past and never
    jumps back in time.

    .. versionadded:: 1.45.0

.. c:function:: void uv_print_all_handles(uv_loop_t* loop, FILE* stream)

    Prints all handles associated with the given `loop` to the given `stream`.

    Example:

    ::

        uv_print_all_handles(uv_default_loop(), stderr);
        /*
        [--I] signal   0x1a25ea8
        [-AI] async    0x1a25cf0
        [R--] idle     0x1a7a8c8
        */

    The format is `[flags] handle-type handle-address`. For `flags`:

    - `R` is printed for a handle that is referenced
    - `A` is printed for a handle that is active
    - `I` is printed for a handle that is internal

    .. warning::
        This function is meant for ad hoc debugging, there is no API/ABI
        stability guarantees.

    .. versionadded:: 1.8.0

.. c:function:: void uv_print_active_handles(uv_loop_t* loop, FILE* stream)

    This is the same as :c:func:`uv_print_all_handles` except only active handles
    are printed.

    .. warning::
        This function is meant for ad hoc debugging, there is no API/ABI
        stability guarantees.

    .. versionadded:: 1.8.0

.. c:function:: int uv_os_environ(uv_env_item_t** envitems, int* count)

    Retrieves all environment variables. This function will allocate memory
    which must be freed by calling :c:func:`uv_os_free_environ`.

    .. warning::
        This function is not thread safe.

    .. versionadded:: 1.31.0

.. c:function:: void uv_os_free_environ(uv_env_item_t* envitems, int count);

    Frees the memory allocated for the environment variables by
    :c:func:`uv_os_environ`.

    .. versionadded:: 1.31.0

.. c:function:: int uv_os_getenv(const char* name, char* buffer, size_t* size)

    Retrieves the environment variable specified by `name`, copies its value
    into `buffer`, and sets `size` to the string length of the value. When
    calling this function, `size` must be set to the amount of storage available
    in `buffer`, including the null terminator. If the environment variable
    exceeds the storage available in `buffer`, `UV_ENOBUFS` is returned, and
    `size` is set to the amount of storage required to hold the value. If no
    matching environment variable exists, `UV_ENOENT` is returned.

    .. warning::
        This function is not thread safe.

    .. versionadded:: 1.12.0

.. c:function:: int uv_os_setenv(const char* name, const char* value)

    Creates or updates the environment variable specified by `name` with
    `value`.

    .. warning::
        This function is not thread safe.

    .. versionadded:: 1.12.0

.. c:function:: int uv_os_unsetenv(const char* name)

    Deletes the environment variable specified by `name`. If no such environment
    variable exists, this function returns successfully.

    .. warning::
        This function is not thread safe.

    .. versionadded:: 1.12.0

.. c:function:: int uv_os_gethostname(char* buffer, size_t* size)

    Returns the hostname as a null-terminated string in `buffer`, and sets
    `size` to the string length of the hostname. When calling this function,
    `size` must be set to the amount of storage available in `buffer`, including
    the null terminator. If the hostname exceeds the storage available in
    `buffer`, `UV_ENOBUFS` is returned, and `size` is set to the amount of
    storage required to hold the value.

    .. versionadded:: 1.12.0

    .. versionchanged:: 1.26.0 `UV_MAXHOSTNAMESIZE` is available and represents
                               the maximum `buffer` size required to store a
                               hostname and terminating `nul` character.

.. c:function:: int uv_os_getpriority(uv_pid_t pid, int* priority)

    Retrieves the scheduling priority of the process specified by `pid`. The
    returned value of `priority` is between -20 (high priority) and 19 (low
    priority).

    .. note::
        On Windows, the returned priority will equal one of the `UV_PRIORITY`
        constants.

    .. versionadded:: 1.23.0

.. c:function:: int uv_os_setpriority(uv_pid_t pid, int priority)

    Sets the scheduling priority of the process specified by `pid`. The
    `priority` value range is between -20 (high priority) and 19 (low priority).
    The constants `UV_PRIORITY_LOW`, `UV_PRIORITY_BELOW_NORMAL`,
    `UV_PRIORITY_NORMAL`, `UV_PRIORITY_ABOVE_NORMAL`, `UV_PRIORITY_HIGH`, and
    `UV_PRIORITY_HIGHEST` are also provided for convenience.

    .. note::
        On Windows, this function utilizes `SetPriorityClass()`. The `priority`
        argument is mapped to a Windows priority class. When retrieving the
        process priority, the result will equal one of the `UV_PRIORITY`
        constants, and not necessarily the exact value of `priority`.

    .. note::
        On Windows, setting `PRIORITY_HIGHEST` will only work for elevated user,
        for others it will be silently reduced to `PRIORITY_HIGH`.

    .. note::
        On IBM i PASE, the highest process priority is -10. The constant
        `UV_PRIORITY_HIGHEST` is -10, `UV_PRIORITY_HIGH` is -7, 
        `UV_PRIORITY_ABOVE_NORMAL` is -4, `UV_PRIORITY_NORMAL` is 0,
        `UV_PRIORITY_BELOW_NORMAL` is 15 and `UV_PRIORITY_LOW` is 39.

    .. note::
        On IBM i PASE, you are not allowed to change your priority unless you
        have the \*JOBCTL special authority (even to lower it).

    .. versionadded:: 1.23.0

.. c:function:: int uv_os_uname(uv_utsname_t* buffer)

    Retrieves system information in `buffer`. The populated data includes the
    operating system name, release, version, and machine. On non-Windows
    systems, `uv_os_uname()` is a thin wrapper around :man:`uname(2)`. Returns
    zero on success, and a non-zero error value otherwise.

    .. versionadded:: 1.25.0

.. c:function:: int uv_gettimeofday(uv_timeval64_t* tv)

    Cross-platform implementation of :man:`gettimeofday(2)`. The timezone
    argument to `gettimeofday()` is not supported, as it is considered obsolete.

    .. versionadded:: 1.28.0

.. c:function:: int uv_random(uv_loop_t* loop, uv_random_t* req, void* buf, size_t buflen, unsigned int flags, uv_random_cb cb)

    Fill `buf` with exactly `buflen` cryptographically strong random bytes
    acquired from the system CSPRNG. `flags` is reserved for future extension
    and must currently be 0.

    Short reads are not possible. When less than `buflen` random bytes are
    available, a non-zero error value is returned or passed to the callback.

    The synchronous version may block indefinitely when not enough entropy
    is available. The asynchronous version may not ever finish when the system
    is low on entropy.

    Sources of entropy:

    - Windows: `RtlGenRandom <https://docs.microsoft.com/en-us/windows/desktop/api/ntsecapi/nf-ntsecapi-rtlgenrandom>_`.
    - Linux, Android: :man:`getrandom(2)` if available, or :man:`urandom(4)`
      after reading from `/dev/random` once, or the `KERN_RANDOM`
      :man:`sysctl(2)`.
    - FreeBSD: `getrandom(2) <https://www.freebsd.org/cgi/man.cgi?query=getrandom&sektion=2>_`,
      or `/dev/urandom` after reading from `/dev/random` once.
    - NetBSD: `KERN_ARND` `sysctl(7) <https://man.netbsd.org/sysctl.7>_`
    - macOS, OpenBSD: `getentropy(2) <https://man.openbsd.org/getentropy.2>_`
      if available, or `/dev/urandom` after reading from `/dev/random` once.
    - AIX: `/dev/random`.
    - IBM i: `/dev/urandom`.
    - Other UNIX: `/dev/urandom` after reading from `/dev/random` once.

    :returns: 0 on success, or an error code < 0 on failure. The contents of
        `buf` is undefined after an error.

    .. note::
        When using the synchronous version, both `loop` and `req` parameters
        are not used and can be set to `NULL`.

    .. versionadded:: 1.33.0

.. c:function:: void uv_sleep(unsigned int msec)

    Causes the calling thread to sleep for `msec` milliseconds.

    .. versionadded:: 1.34.0


===================================================
/. ../deps/uv/docs/src/metrics.rst
===================================================


.. _metrics:

Metrics operations
======================

libuv provides a metrics API to track various internal operations of the event
loop.


Data types
----------

.. c:type:: uv_metrics_t

    The struct that contains event loop metrics. It is recommended to retrieve
    these metrics in a :c:type:`uv_prepare_cb` in order to make sure there are
    no inconsistencies with the metrics counters.

    ::

        typedef struct {
            uint64_t loop_count;
            uint64_t events;
            uint64_t events_waiting;
            /* private */
            uint64_t* reserved[13];
        } uv_metrics_t;


Public members
^^^^^^^^^^^^^^

.. c:member:: uint64_t uv_metrics_t.loop_count

    Number of event loop iterations.

.. c:member:: uint64_t uv_metrics_t.events

    Number of events that have been processed by the event handler.

.. c:member:: uint64_t uv_metrics_t.events_waiting

    Number of events that were waiting to be processed when the event provider
    was called.


API
---

.. c:function:: uint64_t uv_metrics_idle_time(uv_loop_t* loop)

    Retrieve the amount of time the event loop has been idle in the kernel's
    event provider (e.g. ``epoll_wait``). The call is thread safe.

    The return value is the accumulated time spent idle in the kernel's event
    provider starting from when the :c:type:`uv_loop_t` was configured to
    collect the idle time.

    .. note::
        The event loop will not begin accumulating the event provider's idle
        time until calling :c:type:`uv_loop_configure` with
        :c:type:`UV_METRICS_IDLE_TIME`.

    .. versionadded:: 1.39.0

.. c:function:: int uv_metrics_info(uv_loop_t* loop, uv_metrics_t* metrics)

    Copy the current set of event loop metrics to the ``metrics`` pointer.

    .. versionadded:: 1.45.0


===================================================
/. ../deps/uv/docs/src/guide.rst
===================================================

.. _guide:

User guide
==========

.. warning::
    The contents of this guide have been recently incorporated into the libuv documentation
    and it hasn't gone through thorough review yet. If you spot a mistake please file an
    issue, or better yet, open a pull request!

   https://github.com/libuv/libuv/edit/v1.x/docs/src/guide.rst

.. .. toctree::
   :maxdepth: 2

   guide/introduction
   guide/basics
   guide/filesystem
   guide/networking
   guide/threads
   guide/processes
   guide/eventloops
   guide/utilities
   guide/about


===================================================
/. ../deps/uv/docs/src/upgrading.rst
===================================================

.. _upgrading:

Upgrading
=========

Migration guides for different libuv versions, starting with 1.0.

.. toctree::
   :maxdepth: 1

   migration_010_100


===================================================
/. ../deps/uv/docs/src/migration_010_100.rst
===================================================


.. _migration_010_100:

libuv 0.10 -> 1.0.0 migration guide
===================================

Some APIs changed quite a bit throughout the 1.0.0 development process. Here
is a migration guide for the most significant changes that happened after 0.10
was released.


Loop initialization and closing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In libuv 0.10 (and previous versions), loops were created with `uv_loop_new`, which
allocated memory for a new loop and initialized it; and destroyed with `uv_loop_delete`,
which destroyed the loop and freed the memory. Starting with 1.0, those are deprecated
and the user is responsible for allocating the memory and then initializing the loop.

libuv 0.10

::

    uv_loop_t* loop = uv_loop_new();
    ...
    uv_loop_delete(loop);

libuv 1.0

::

    uv_loop_t* loop = malloc(sizeof *loop);
    uv_loop_init(loop);
    ...
    uv_loop_close(loop);
    free(loop);

.. note::
    Error handling was omitted for brevity. Check the documentation for :c:func:`uv_loop_init`
    and :c:func:`uv_loop_close`.


Error handling
~~~~~~~~~~~~~~

Error handling had a major overhaul in libuv 1.0. In general, functions and status parameters
would get 0 for success and -1 for failure on libuv 0.10, and the user had to use `uv_last_error`
to fetch the error code, which was a positive number.

In 1.0, functions and status parameters contain the actual error code, which is 0 for success, or
a negative number in case of error.

libuv 0.10

::

    ... assume 'server' is a TCP server which is already listening
    r = uv_listen((uv_stream_t*) server, 511, NULL);
    if (r == -1) {
      uv_err_t err = uv_last_error(uv_default_loop());
      /* err.code contains UV_EADDRINUSE */
    }

libuv 1.0

::

    ... assume 'server' is a TCP server which is already listening
    r = uv_listen((uv_stream_t*) server, 511, NULL);
    if (r < 0) {
      /* r contains UV_EADDRINUSE */
    }


Threadpool changes
~~~~~~~~~~~~~~~~~~

In libuv 0.10 Unix used a threadpool which defaulted to 4 threads, while Windows used the
`QueueUserWorkItem` API, which uses a Windows internal threadpool, which defaults to 512
threads per process.

In 1.0, we unified both implementations, so Windows now uses the same implementation Unix
does. The threadpool size can be set by exporting the ``UV_THREADPOOL_SIZE`` environment
variable. See :c:ref:`threadpool`.


Allocation callback API change
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In libuv 0.10 the callback had to return a filled :c:type:`uv_buf_t` by value:

::

    uv_buf_t alloc_cb(uv_handle_t* handle, size_t size) {
        return uv_buf_init(malloc(size), size);
    }

In libuv 1.0 a pointer to a buffer is passed to the callback, which the user
needs to fill:

::

    void alloc_cb(uv_handle_t* handle, size_t size, uv_buf_t* buf) {
        buf->base = malloc(size);
        buf->len = size;
    }


Unification of IPv4 / IPv6 APIs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

libuv 1.0 unified the IPv4 and IPv6 APIS. There is no longer a `uv_tcp_bind` and `uv_tcp_bind6`
duality, there is only :c:func:`uv_tcp_bind` now.

IPv4 functions took ``struct sockaddr_in`` structures by value, and IPv6 functions took
``struct sockaddr_in6``. Now functions take a ``struct sockaddr*`` (note it's a pointer).
It can be stack allocated.

libuv 0.10

::

    struct sockaddr_in addr = uv_ip4_addr("0.0.0.0", 1234);
    ...
    uv_tcp_bind(&server, addr)

libuv 1.0

::

    struct sockaddr_in addr;
    uv_ip4_addr("0.0.0.0", 1234, &addr)
    ...
    uv_tcp_bind(&server, (const struct sockaddr*) &addr, 0);

The IPv4 and IPv6 struct creating functions (:c:func:`uv_ip4_addr` and :c:func:`uv_ip6_addr`)
have also changed, make sure you check the documentation.

..note::
    This change applies to all functions that made a distinction between IPv4 and IPv6
    addresses.


Streams / UDP  data receive callback API change
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The streams and UDP data receive callbacks now get a pointer to a :c:type:`uv_buf_t` buffer,
not a structure by value.

libuv 0.10

::

    void on_read(uv_stream_t* handle,
                 ssize_t nread,
                 uv_buf_t buf) {
        ...
    }

    void recv_cb(uv_udp_t* handle,
                 ssize_t nread,
                 uv_buf_t buf,
                 struct sockaddr* addr,
                 unsigned flags) {
        ...
    }

libuv 1.0

::

    void on_read(uv_stream_t* handle,
                 ssize_t nread,
                 const uv_buf_t* buf) {
        ...
    }

    void recv_cb(uv_udp_t* handle,
                 ssize_t nread,
                 const uv_buf_t* buf,
                 const struct sockaddr* addr,
                 unsigned flags) {
        ...
    }


Receiving handles over pipes API change
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In libuv 0.10 (and earlier versions) the `uv_read2_start` function was used to start reading
data on a pipe, which could also result in the reception of handles over it. The callback
for such function looked like this:

::

    void on_read(uv_pipe_t* pipe,
                 ssize_t nread,
                 uv_buf_t buf,
                 uv_handle_type pending) {
        ...
    }

In libuv 1.0, `uv_read2_start` was removed, and the user needs to check if there are pending
handles using :c:func:`uv_pipe_pending_count` and :c:func:`uv_pipe_pending_type` while in
the read callback:

::

    void on_read(uv_stream_t* handle,
                 ssize_t nread,
                 const uv_buf_t* buf) {
        ...
        while (uv_pipe_pending_count((uv_pipe_t*) handle) != 0) {
            pending = uv_pipe_pending_type((uv_pipe_t*) handle);
            ...
        }
        ...
    }


Extracting the file descriptor out of a handle
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While it wasn't supported by the API, users often accessed the libuv internals in
order to get access to the file descriptor of a TCP handle, for example.

::

    fd = handle->io_watcher.fd;

This is now properly exposed through the :c:func:`uv_fileno` function.


uv_fs_readdir rename and API change
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`uv_fs_readdir` returned a list of strings in the `req->ptr` field upon completion in
libuv 0.10. In 1.0, this function got renamed to :c:func:`uv_fs_scandir`, since it's
actually implemented using ``scandir(3)``.

In addition, instead of allocating a full list strings, the user is able to get one
result at a time by using the :c:func:`uv_fs_scandir_next` function. This function
does not need to make a roundtrip to the threadpool, because libuv will keep the
list of *dents* returned by ``scandir(3)`` around.
