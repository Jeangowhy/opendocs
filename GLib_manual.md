# GLib Reference Manual
https://docs.gtk.org/glib/index.html

      for GLib 2.78.0
      The latest version of this documentation can be found on-line at
      <ulink role="online-location" url="https://developer.gnome.org/glib/unstable/">https://developer.gnome.org/glib/unstable/</ulink>.

🍀 GLib Overview

GLib is a general-purpose utility library, which provides many useful
data types, macros, type conversions, string utilities, file utilities,
a mainloop abstraction, and so on. It works on many UNIX-like platforms,
as well as Windows and OS X. GLib is released under the GNU Lesser
General Public License (GNU LGPL).


1. building.xml
2. cross.xml
3. programming.xml
4. xml/compiling.xml
5. running.xml
6. changes.xml
7. resources.xml

🍀 GLib Fundamentals

1. xml/version.xml
2. xml/types.xml
3. xml/macros.xml
4. xml/type_conversion.xml
5. xml/byte_order.xml
6. xml/checkedmath.xml
7. xml/numerical.xml
8. xml/macros_misc.xml
9. xml/atomic_operations.xml

🍀 GLib Core Application Support

01. xml/main.xml
02. xml/threads.xml
03. xml/thread_pools.xml
04. xml/async_queues.xml
05. xml/modules.xml
06. xml/memory.xml
07. xml/memory_slices.xml
08. xml/iochannels.xml
09. xml/error_reporting.xml
10. xml/warnings.xml
11. xml/messages.xml

🍀 GLib Utilities

01. xml/string_utils.xml
02. xml/conversions.xml
03. xml/unicode.xml
04. xml/base64.xml
05. xml/checksum.xml
06. xml/hmac.xml
07. xml/i18n.xml
08. xml/date.xml
09. xml/timezone.xml
10. xml/date-time.xml
11. xml/random_numbers.xml
12. xml/hooks.xml
13. xml/misc_utils.xml
14. xml/scanner.xml
15. xml/timers.xml
16. xml/spawn.xml
17. xml/fileutils.xml
18. xml/gpathbuf.xml
19. xml/guri.xml
20. xml/ghostutils.xml
21. xml/shell.xml
22. xml/goptioncontext.xml
23. xml/patterns.xml
24. xml/gregex.xml
25. regex-syntax.xml
26. xml/markup.xml
27. xml/gkeyfile.xml
28. xml/gbookmarkfile.xml
29. xml/testing.xml
30. xml/gunix.xml
31. xml/windows.xml
32. xml/uuid.xml

🍀 GLib Data Types

01. xml/linked_lists_double.xml
02. xml/linked_lists_single.xml
03. xml/queue.xml
04. xml/sequence.xml
05. xml/trash_stack.xml
06. xml/hash_tables.xml
07. xml/strings.xml
08. xml/string_chunks.xml
09. xml/arrays.xml
10. xml/arrays_pointer.xml
11. xml/arrays_byte.xml
12. xml/trees-binary.xml
13. xml/trees-nary.xml
14. xml/quarks.xml
15. xml/datalist.xml
16. xml/datasets.xml
17. xml/gvarianttype.xml
18. xml/gvariant.xml
19. gvariant-varargs.xml
20. gvariant-text.xml
21. xml/refcount.xml
22. xml/rcbox.xml
23. xml/arcbox.xml
24. xml/refstring.xml

🍀 Deprecated APIs

1. xml/threads-deprecated.xml
2. xml/caches.xml
3. xml/relations.xml
4. xml/completion.xml

🍀 GLib Tools

1. glib-gettextize.xml

🍀 Deprecated Tools

1. gtester.xml
2. gtester-report.xml


## 📜 Compiling the GLib Package


### 🍀 Building the Library on UNIX
On UNIX, GLib uses the standard Meson build
system. The normal sequence for compiling and installing the GLib library
is thus:

```sh
meson setup _build
meson compile -C _build
meson install -C _build
```

On FreeBSD:

```sh
env CPPFLAGS="-I/usr/local/include" LDFLAGS="-L/usr/local/lib -Wl,--disable-new-dtags"
meson setup -Dxattr=false -Dinstalled_tests=true -Db_lundef=false _build
meson compile -C _build
```


The standard options provided by Meson may be
passed to the `meson` command.  Please see the
Meson documentation or run
`meson configure --help` for information about
the standard options.

GLib is compiled with
<ulink url="https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html#index-fstrict-aliasing">strict aliasing</ulink>
disabled. It is strongly recommended that this is not re-enabled by
overriding the compiler flags, as GLib has not been tested with strict
aliasing and cannot be guaranteed to work.

The GTK documentation contains
<ulink url="https://developer.gnome.org/gtk3/stable/gtk-building.html">further details</ulink>
about the build process and ways to influence it.


### 🍀 Dependencies

1. GNU libiconv library
2. Python 3.5 or newer 
3. GNU gettext package
4. PCRE library
5. [optional] SystemTap

Before you can compile the GLib library, you need to have
various other tools and libraries installed on your system.
If you are building from a release archive, you will need
<ulink url="https://gitlab.gnome.org/GNOME/glib/-/blob/main/docs/toolchain-requirements.md">a compliant C toolchain</ulink>,
Meson, and pkg-config;
the requirements are the same when building from a Git repository clone
of GLib.

<ulink url="https://www.freedesktop.org/wiki/Software/pkg-config/">pkg-config</ulink>
is a tool for tracking the compilation flags needed for
libraries that are used by the GLib library. (For each
library, a small .pc text file is
installed in a standard location that contains the compilation
flags needed for that library along with version number
information).

A UNIX build of GLib requires that the system implements at
least the original 1990 version of POSIX. Beyond this, it
depends on a number of other libraries.

The <ulink url="http://www.gnu.org/software/libiconv/">GNU
libiconv library</ulink> is needed to build GLib if your
system doesn't have the `iconv()`
function for doing conversion between character
encodings. Most modern systems should have
`iconv()`, however many older systems lack
an `iconv()` implementation. On such systems,
you must install the libiconv library. This can be found at:
<ulink url="http://www.gnu.org/software/libiconv">libiconv</ulink>.

If your system has an `iconv()` implementation but
you want to use libiconv instead, make sure it is installed to the
default compiler header/library search path (for instance, in
`/usr/local/`). The `iconv.h`
that libiconv installs hides the system iconv. Meson then detects
this, recognizes that the system iconv is unusable and the external
one is mandatory, and automatically forces it to be used.

If you are using the native iconv implementation on Solaris
instead of libiconv, you'll need to make sure that you have
the converters between locale encodings and UTF-8 installed.
At a minimum you'll need the SUNWuiu8 package. You probably
should also install the SUNWciu8, SUNWhiu8, SUNWjiu8, and
SUNWkiu8 packages.

The native iconv on Compaq Tru64 doesn't contain support for
UTF-8, so you'll need to use GNU libiconv instead. (When
using GNU libiconv for GLib, you'll need to use GNU libiconv
for GNU gettext as well.) This probably applies to related
operating systems as well.

Python 3.5 or newer is required. Your system Python must
conform to <ulink
url="https://www.python.org/dev/peps/pep-0394/">PEP 394
</ulink>
For FreeBSD, this means that the
lang/python3 port must be installed.

The libintl library from the <ulink
url="http://www.gnu.org/software/gettext">GNU gettext
package</ulink> is needed if your system doesn't have the
`gettext()` functionality for handling
message translation databases.

A thread implementation is needed. The thread support in GLib
can be based upon POSIX threads or win32 threads.

GRegex uses the <ulink url="http://www.pcre.org/">PCRE library</ulink>
for regular expression matching. The system version of PCRE is used,
unless not available (which is the case on Android), in which case a
fallback subproject is used.

The optional extended attribute support in GIO requires the
`getxattr()` family of functions that may be
provided by the C library or by the standalone libattr library. To
build GLib without extended attribute support, use the
`-Dxattr=false` option.

The optional SELinux support in GIO requires libselinux.
To build GLib without SELinux support, use the
`-Dselinux=disabled` option.

The optional support for DTrace requires the
`sys/sdt.h` header, which is provided
by SystemTap on Linux. To build GLib without DTrace, use
the `-Ddtrace=false` option.

The optional support for
<ulink url="http://sourceware.org/systemtap/">SystemTap</ulink>
can be disabled with the `-Dsystemtap=false`
option. Additionally, you can control the location
where GLib installs the SystemTap probes, using the
`-Dtapset_install_dir=DIR` option.


### 🍀 Extra Configuration Options

In addition to the normal options, these additional ones are supported
when configuring the GLib library:


`--buildtype`

This is a standard Meson option which
specifies how much debugging and optimization to enable. If the build
type is debug,
G_ENABLE_DEBUG will be defined and GLib will be built
with additional debug code enabled. You can override this behavior using
`-Dglib_debug`.

`-Dforce_posix_threads=true`

Normally, Meson should be able to work out
the correct thread implementation to use. This option forces POSIX
threads to be used even if the platform provides another threading API
(for example, on Windows).

`-Dbsymbolic_functions=false` and
`-Dbsymbolic_functions=true`

By default, GLib uses the `-Bsymbolic-functions`
linker flag to avoid intra-library PLT jumps. A side-effect
of this is that it is no longer possible to override
internal uses of GLib functions with
LD_PRELOAD. Therefore, it may make
sense to turn this feature off in some situations.
The `-Dbsymbolic_functions=false` option allows
to do that.

`-Dgtk_doc=false` and
`-Dgtk_doc=true`

By default, GLib will detect whether the
gtk-doc package is installed.
If it is, then it will use it to extract and build the
documentation for the GLib library. These options
can be used to explicitly control whether
gtk-doc should be
used or not. If it is not used, the distributed,
pre-generated HTML files will be installed instead of
building them on your machine.

`-Dman=false` and
`-Dman=true`

By default, GLib will detect whether xsltproc
and the necessary DocBook stylesheets are installed.
If they are, then it will use them to rebuild the included
man pages from the XML sources. These options can be used
to explicitly control whether man pages should be rebuilt
used or not. The distribution includes pre-generated man
pages.

`-Dxattr=false` and
`-Dxattr=true`

By default, GLib will detect whether the
`getxattr()`
family of functions is available. If it is, then extended
attribute support will be included in GIO. These options can
be used to explicitly control whether extended attribute
support should be included or not. `getxattr()`
and friends can be provided by glibc or by the standalone
libattr library.

`-Dselinux=auto`,
`-Dselinux=enabled` or
`-Dselinux=disabled`

By default, GLib will detect if libselinux is available and
include SELinux support in GIO if it is. These options can be
used to explicitly control whether SELinux support should
be included.

`-Ddtrace=false` and
`-Ddtrace=true`

By default, GLib will detect if DTrace support is available, and use it.
These options can be used to explicitly control whether DTrace support
is compiled into GLib.

`-Dsystemtap=false` and
`-Dsystemtap=true`

This option requires DTrace support. If it is available, then
GLib will also check for the presence of SystemTap.

`-Db_coverage=true` and
`-Db_coverage=false`

Enable the generation of coverage reports for the GLib tests.
This requires the lcov frontend to gcov from the
<ulink url="http://ltp.sourceforge.net">Linux Test Project</ulink>.
To generate a coverage report, use
`ninja coverage-html`. The report is placed in the `meson-logs` directory.


## 📜 Cross-compiling the GLib Package

### 🍀 Building the Library for a different architecture

Cross-compilation is the process of compiling a program or
library on a different architecture or operating system then
it will be run upon. GLib is slightly more difficult to 
cross-compile than many packages because much of GLib is
about hiding differences between different systems. 
These notes cover things specific to cross-compiling GLib;
for general information about cross-compilation, see the
<ulink url="http://mesonbuild.com/Cross-compilation.html">meson</ulink>
info pages.

GLib tries to detect as much information as possible about
the target system by compiling and linking programs without
actually running anything; however, some information GLib
needs is not available this way. This information needs
to be provided to meson via a ‘cross file’.

As an example of using a cross file, to cross compile for
the ‘MingW32’ Win64 runtime environment on a Linux system,
create a file `cross_file.txt` with the following contents:

```sh
[host_machine]
system = 'windows'
cpu_family = 'x86_64'
cpu = 'x86_64'
endian = 'little'

[properties]
c_args = []
c_link_args = []

[binaries]
c = 'x86_64-w64-mingw32-gcc'
cpp = 'x86_64-w64-mingw32-g++'
ar = 'x86_64-w64-mingw32-ar'
ld = 'x86_64-w64-mingw32-ld'
objcopy = 'x86_64-w64-mingw32-objcopy'
strip = 'x86_64-w64-mingw32-strip'
pkgconfig = 'x86_64-w64-mingw32-pkg-config'
windres = 'x86_64-w64-mingw32-windres'
```

Then execute the following commands:

```sh
meson --cross-file cross_file.txt builddir
```

The complete list of cross properties follows. Most
of these won't need to be set in most cases.

### 🍀 Cross properties

`have_[function]`

When meson checks if a function is supported, the test can be
overridden by setting the `have_FUNCTION` property to `true` or `false`.
For example `Checking for function "fsync" : YES`
can be overridden by setting `have_fsync = false`

`growing_stack=[true/false]`

Whether the stack grows up or down. Most places will want `false`.
A few architectures, such as PA-RISC need `true`.

`have_strlcpy=[true/false]`

Whether you have `strlcpy()` that matches 
OpenBSD. Defaults to `false`, which is safe,
since GLib uses a built-in version in that case.

`va_val_copy=[true/false]`

Whether `va_list` can be copied as a pointer. If set to `false`, then `memcopy()`
will be used. Only matters if you don't have `va_copy()` or `__va_copy()`.
(So, doesn't matter for GCC.)
Defaults to `true` which is slightly more common
than `false`.

`have_c99_vsnprintf=[true/false]`

Whether you have a `vsnprintf()` with C99 
semantics. (C99 semantics means returning the number of bytes 
that would have been written had the output buffer had enough 
space.) Defaults to `false`.

`have_c99_snprintf=[true/false]`

Whether you have a `snprintf()` with C99 
semantics. (C99 semantics means returning the number of bytes 
that would have been written had the output buffer had enough 
space.) Defaults to `false`.


## 📜 Writing GLib Applications

### 🍀 Memory Allocations

Unless otherwise specified, all functions which allocate memory in GLib will
abort the process if heap allocation fails. This is because it is too hard to
recover from allocation failures in any non-trivial program and, in particular,
to test all the allocation failure code paths.


### 🍀 UTF-8 and String Encoding

All GLib, GObject and GIO functions accept and return strings in
<ulink url="https://en.wikipedia.org/wiki/UTF-8">UTF-8 encoding</ulink>
unless otherwise specified.

Input strings to function calls are NOT checked to see if
they are valid UTF-8: it is the application developer’s responsibility to
validate input strings at the time of input, either at the program or library
boundary, and to only use valid UTF-8 string constants in their application.
If GLib were to UTF-8 validate all string inputs to all functions, there would
be a significant drop in performance.

<para>Similarly, output strings from functions are guaranteed to be in UTF-8,
and this does not need to be validated by the calling function. If a function
returns invalid UTF-8 (and is not documented as doing so), that’s a bug.

See `g_utf8_validate()` and `g_utf8_make_valid()` for validating UTF-8 input.


### 🍀 Threads

The general policy of GLib is that all functions are invisibly threadsafe
with the exception of data structure manipulation functions, where, if
you have two threads manipulating the SAME data
structure, they must use a lock to synchronize their operation.

GLib creates a worker thread for its own purposes so GLib applications
will always have at least 2 threads.

In particular, this means that programs must only use
`async-signal-safe` functions between calling `fork()` and `exec()`, even if
they haven’t explicitly spawned another thread yet.

See the sections on glib threads and thread pools for GLib APIs that
support multithreaded applications.



### 🍀 Security and setuid use

When writing code that runs with elevated privileges, it is important
to follow some basic rules of secure programming. David Wheeler has an
excellent book on this topic,
<ulink url="http://www.dwheeler.com/secure-programs/Secure-Programs-HOWTO/index.html">Secure Programming for Linux and Unix HOWTO</ulink>.

When it comes to GLib and its associated libraries, GLib and
GObject are generally fine to use in code that runs with elevated
privileges; they don't load modules (executable code in shared objects)
or run other programs ‘behind your back’. GIO, however, is not designed to be
used in privileged programs, either ones which are spawned by a privileged
process, or ones which are run with a setuid bit set.

setuid programs should always reset their environment to contain only
known-safe values before calling into non-trivial libraries such as GIO. This
reduces the risk of an attacker-controlled environment variable being used to
get a privileged GIO process to run arbitrary code via loading a GIO module or
similar.


## 📜 Compiling GLib Applications on UNIX

To compile a GLib application, you need to tell the compiler where to
find the GLib header files and libraries. This is done with the
pkg-config utility.
The following interactive shell session demonstrates how
pkg-config is used (the actual output on
your system may be different):

```sh
$ pkg-config --cflags glib-2.0
 -I/usr/include/glib-2.0 -I/usr/lib/glib-2.0/include
$ pkg-config --libs glib-2.0
 -L/usr/lib -lm -lglib-2.0
```

See the <ulink url="http://www.freedesktop.org/wiki/Software/pkg-config">pkg-config website</ulink>
for more information about pkg-config.
If your application uses or `GObject`
features, it must be compiled and linked with the options returned
by the following pkg-config invocation:

```sh
$ pkg-config --cflags --libs gobject-2.0
```
If your application uses modules, it must be compiled and linked
with the options returned by one of the following
pkg-config invocations:

```sh
$ pkg-config --cflags --libs gmodule-no-export-2.0
$ pkg-config --cflags --libs gmodule-2.0
```
The difference between the two is that gmodule-2.0 adds
--export-dynamic to the linker flags, which is often not needed.
The simplest way to compile a program is to use command substitution
feature of a shell. A command written in the format
`$(command)` gets substituted into the command line
before execution. So to compile a GLib Hello, World, you would type
the following:

```sh
$ cc hello.c $(pkg-config --cflags --libs glib-2.0) -o hello
```

Note that the name of the file must come before the other options
(such as `pkg-config`), or else you may get an
error from the linker.

Deprecated GLib functions are annotated to make the compiler
emit warnings when they are used (e.g. with gcc, you need to use
the -Wdeprecated-declarations option). If these warnings are
problematic, they can be turned off by defining the preprocessor
symbol %GLIB_DISABLE_DEPRECATION_WARNINGS by using the commandline
option `-DGLIB_DISABLE_DEPRECATION_WARNINGS`

GLib deprecation annotations are versioned; by defining the
macros %GLIB_VERSION_MIN_REQUIRED and %GLIB_VERSION_MAX_ALLOWED,
you can specify the range of GLib versions whose API you want
to use. APIs that were deprecated before or introduced after
this range will trigger compiler warnings.

Since GLib 2.62, the older deprecation mechanism of hiding deprecated interfaces
entirely from the compiler by using the preprocessor symbol
`G_DISABLE_DEPRECATED` has been removed. All deprecations
are now handled using the above mechanism.

The recommended way of using GLib has always been to only include the
toplevel headers *glib.h*, *glib-object.h*, *gio.h*.
Starting with 2.32, GLib enforces this by generating an error
when individual headers are directly included.

Still, there are some exceptions; these headers have to be included
separately: gmodule.h, glib-unix.h, glib/gi18n-lib.h or
glib/gi18n.h (see the <link linkend="glib-I18N">Internationalization section</link>),
glib/gprintf.h and glib/gstdio.h (we don't want to pull in all of stdio).


## 📜 Running GLib Applications

Running and debugging GLib Applications

### 🍀 Environment variables

The runtime behaviour of GLib applications can be influenced by a
number of environment variables.

Standard variables

GLib reads standard environment variables like `LANG`,
`PATH`, `HOME`, `TMPDIR`,
`TZ` and `LOGNAME`.

XDG directories

GLib consults the environment variables `XDG_DATA_HOME`,
`XDG_DATA_DIRS`, `XDG_CONFIG_HOME`,
`XDG_CONFIG_DIRS`, `XDG_CACHE_HOME` and
`XDG_RUNTIME_DIR` for the various XDG directories.
For more information, see the <ulink url="http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html">XDG basedir spec</ulink>.

01. `G_FILENAME_ENCODING`

    This environment variable can be set to a comma-separated list of character
    set names. GLib assumes that filenames are encoded in the first character
    set from that list rather than in UTF-8. The special token "@locale" can be
    used to specify the character set for the current locale.

02. `G_BROKEN_FILENAMES`

    If this environment variable is set, GLib assumes that filenames are in
    the locale encoding rather than in UTF-8. G_FILENAME_ENCODING takes
    priority over G_BROKEN_FILENAMES.

03. `G_MESSAGES_PREFIXED`

    A list of log levels for which messages should be prefixed by the
    program name and PID of the application. The default is to prefix
    everything except `G_LOG_LEVEL_MESSAGE` and
    `G_LOG_LEVEL_INFO`.
    The possible values are `error`, `warning`, `critical`, `message`,
    `info` and `debug`.
    You can also use the special values `all` and `help`.

    This environment variable only affects the default log handler,
    g_log_default_handler().

04. `G_MESSAGES_DEBUG`

    A space-separated list of log domains for which informational
    and debug messages should be printed. By default, these
    messages are not printed.

    You can also use the special value `all`.

    This environment variable only affects the default log handler,
    g_log_default_handler().

05. `G_DEBUG`

    This environment variable can be set to a list of debug options,
    which cause GLib to print out different types of debugging information.

    01. fatal-warnings
        Causes GLib to abort the program at the first call
        to g_warning() or g_critical().  Use of this flag is not
        recommended except when debugging.

    02. fatal-criticals
        Causes GLib to abort the program at the first call
        to g_critical().  This flag can be useful during debugging and
        testing.

    03. gc-friendly
        Newly allocated memory that isn't directly initialized,
        as well as memory being freed will be reset to 0. The point here is
        to allow memory checkers and similar programs that use Boehm GC alike
        algorithms to produce more accurate results.

    04. resident-modules
        All modules loaded by GModule will be made resident.
        This can be useful for tracking memory leaks in modules which are
        later unloaded; but it can also hide bugs where code is accessed
        after the module would have normally been unloaded.

    05. bind-now-modules
        All modules loaded by GModule will bind their symbols
        at load time, even when the code uses %G_MODULE_BIND_LAZY.


        The special value `all` can be used to turn on all debug options.
        The special value `help` can be used to print all available options.

06. `G_SLICE`

    This environment variable allowed reconfiguration of the GSlice
    memory allocator. Since GLib 2.76, GSlice uses the system
    `malloc()` implementation internally, so this variable is
    ignored.

07. `G_RANDOM_VERSION`

    If this environment variable is set to '2.0', the outdated
    pseudo-random number seeding and generation algorithms from
    GLib 2.0 are used instead of the newer, better ones. You should
    only set this variable if you have sequences of numbers that were
    generated with Glib 2.0 that you need to reproduce exactly.

08. `LIBCHARSET_ALIAS_DIR`

    Allows to specify a nonstandard location for the
    `charset.aliases` file that is used by the
    character set conversion routines. The default location is the
    libdir specified at compilation time.

09. `TZDIR`

    Allows to specify a nonstandard location for the timezone data files
    that are used by the #GDateTime API. The default location is under
    `/usr/share/zoneinfo`. For more information,
    also look at the zset manual page.

10. `G_ENABLE_DIAGNOSTIC`

    If set to a non-zero value, this environment variable enables
    diagnostic messages, like deprecation messages for GObject properties
    and signals.

11. `G_DEBUGGER`

    When running on Windows, if set to a non-empty string, GLib will
    try to interpret the contents of this environment variable as
    a command line to a debugger, and run it if the process crashes.
    The debugger command line should contain `%p` and `%e` substitution
    tokens, which GLib will replace with the process ID of the crashing
    process and a handle to an event that the debugger should signal
    to let GLib know that the debugger successfully attached to the
    process. If `%e` is absent, or if the debugger is not able to
    signal events, GLib will resume execution after 60 seconds.
    If `%p` is absent, the debugger won't know which process to attach to,
    and GLib will also resume execution after 60 seconds.

    Additionally, even if `G_DEBUGGER` is not set, GLib would still
    try to print basic exception information (code and address) into
    stderr.

    By default the debugger gets a new console allocated for it.
    Set the `G_DEBUGGER_OLD_CONSOLE` environment variable to any
    non-empty string to make the debugger inherit the console of
    the crashing process. Normally this is only used by the GLib
    testsuite.

    The exception handler is written with the aim of making it as
    simple as possible, to minimize the risk of it invoking
    buggy functions or running buggy code, which would result
    in exceptions being raised recursively. Because of that
    it lacks most of the amenities that one would expect of GLib.
    Namely, it does not support Unicode, so it is highly advisable
    to only use ASCII characters in `G_DEBUGGER`.

    See also `G_VEH_CATCH`.

12. `G_VEH_CATCH`

    Catching some exceptions can break the program, since Windows
    will sometimes use exceptions for execution flow control and
    other purposes other than signalling a crash.

    The `G_VEH_CATCH` environment variable augments
    <ulink url="https://docs.microsoft.com/en-us/windows/desktop/debug/vectored-exception-handling">Vectored Exception Handling</ulink>
    on Windows (see `G_DEBUGGER`), allowing GLib to catch more
    exceptions. Set this variable to a comma-separated list of
    hexadecimal exception codes that should additionally be caught.

    By default GLib will only catch Access Violation, Stack Overflow and
    Illegal Instruction <ulink url="https://docs.microsoft.com/en-us/windows/desktop/api/winnt/ns-winnt-_exception_record">exceptions</ulink>.


### 🍀 Locale

A number of interfaces in GLib depend on the current locale in which
an application is running. Therefore, most GLib-using applications should
call `setlocale (LC_ALL, "")` to set up the current
locale.

On Windows, in a C program there are several locale concepts
that not necessarily are synchronized. On one hand, there is the
system default ANSI code-page, which determines what encoding is used
for file names handled by the C library's functions and the Win32
API. (We are talking about the "narrow" functions here that take
character pointers, not the "wide" ones.)

On the other hand, there is the C library's current locale. The
character set (code-page) used by that is not necessarily the same as
the system default ANSI code-page. Strings in this character set are
returned by functions like `strftime()`.

### 🍀 Debugging with GDB

GLib ships with a set of Python macros for the GDB debugger. These includes pretty
printers for lists, hashtables and GObject types. It also has a backtrace filter
that makes backtraces with signal emissions easier to read.

To use this you need a version of GDB that supports Python scripting; anything
from 7.0 should be fine. You then need to install GLib in the same prefix as
GDB so that the Python GDB autoloaded files get installed in the right place
for GDB to pick up.

General pretty printing should just happen without having to do anything special.
To get the signal emission filtered backtrace you must use the "new-backtrace" command
instead of the standard one.

There is also a new command called gforeach that can be used to apply a command
on each item in a list. E.g. you can do

```sh
gforeach i in some_list_variable: print *(GtkWidget *)l
```

Which would print the contents of each widget in a list of widgets.

### 🍀 SystemTap

<ulink url="http://sourceware.org/systemtap/">SystemTap</ulink> is a dynamic whole-system
analysis toolkit.  GLib ships with a file `libglib-2.0.so.*.stp` which defines a
set of probe points, which you can hook into with custom SystemTap scripts.
See the files `libglib-2.0.so.*.stp`, `libgobject-2.0.so.*.stp`
and `libgio-2.0.so.*.stp` which
are in your shared SystemTap scripts directory.


### 🍀 Memory statistics

g_mem_profile() will output a summary g_malloc() memory usage, if memory
profiling has been enabled by calling
`g_mem_set_vtable (glib_mem_profiler_table)` upon startup.

If GLib has been configured with `--enable-debug=yes`,
then g_slice_debug_tree_statistics() can be called in a debugger to
output details about the memory usage of the slice allocator.


## 📜 Changes to GLib
6. changes.xml

## 📜 Mailing lists and bug reports
7. resources.xml

## 📜 The Main Event Loop
glib-2.78.0\glib\gmain.c
https://docs.gtk.org/glib/main-loop.html

https://docs.gtk.org/glib/mainloop-states.gif

## 📜 Internationalization
https://docs.gtk.org/glib/i18n.html
http://www.gnu.org/software/gettext/manual/gettext.html#Maintainers

GLib doesn't force any particular localization method upon its users. But since GLib itself is localized using the gettext() mechanism, it seems natural to offer the de-facto standard gettext() support macros in an easy-to-use form.

In order to use these macros in an application, you must include <glib/gi18n.h>. For use in a library, you must include <glib/gi18n-lib.h> after defining the GETTEXT_PACKAGE macro suitably for your library:

```cpp
#define GETTEXT_PACKAGE "gtk4"
#include <glib/gi18n-lib.h>
```
For an application, note that you also have to call bindtextdomain(), bind_textdomain_codeset(), textdomain() and setlocale() early on in your main() to make gettext() work. For example:

```cpp
#include <glib/gi18n.h>
#include <locale.h>

int
main (int argc, char **argv)
{
  setlocale (LC_ALL, "");
  bindtextdomain (GETTEXT_PACKAGE, DATADIR "/locale");
  bind_textdomain_codeset (GETTEXT_PACKAGE, "UTF-8");
  textdomain (GETTEXT_PACKAGE);

  // Rest of your application.
}
```

where DATADIR is as typically provided by Automake or Meson.

For a library, you only have to call bindtextdomain() and bind_textdomain_codeset() in your initialization function. If your library doesn’t have an initialization function, you can call the functions before the first translated message.

The gettext manual covers details of how to integrate gettext into a project’s build system and workflow.


## 📜 Error Reporting
https://docs.gtk.org/glib/error-reporting.html

## 📜 Message Logging
https://docs.gtk.org/glib/logging.html

## 📜 Testing Framework
https://docs.gtk.org/glib/testing.html

## 📜 Threads
https://docs.gtk.org/glib/threads.html

## 📜 Regular expression syntax
25. regex-syntax.xml

## 📜 GVariant Format Strings
19. gvariant-varargs.xml

## 📜 GVariant Text Format
20. gvariant-text.xml

## 📜 Character set conversions
https://docs.gtk.org/glib/character-set.html

## 📜 glib-gettextize
1. glib-gettextize.xml

## 📜 Reference counting types
https://docs.gtk.org/glib/reference-counting.html


# 📜 GLib Symbols sections
glib-2.78.0\docs\reference\glib\glib-sections.txt.in

```cpp
#include <glib.h>
```

## 🍀 Basic Types

### File: types

```cpp
    gboolean;
    gpointer;
    gconstpointer;
    gchar;
    guchar;
```

```cpp
    gint;
    G_MININT;
    G_MAXINT;
    guint;
    G_MAXUINT;
    gshort;
    G_MINSHORT;
    G_MAXSHORT;
    gushort;
    G_MAXUSHORT;
    glong;
    G_MINLONG;
    G_MAXLONG;
    gulong;
    G_MAXULONG;
```

```cpp
    gint8;
    G_MININT8;
    G_MAXINT8;
    guint8;
    G_MAXUINT8;
    gint16;
    G_MININT16;
    G_MAXINT16;
    G_GINT16_MODIFIER;
    G_GINT16_FORMAT;
    guint16;
    G_MAXUINT16;
    G_GUINT16_FORMAT;
    gint32;
    G_MININT32;
    G_MAXINT32;
    G_GINT32_MODIFIER;
    G_GINT32_FORMAT;
    guint32;
    G_MAXUINT32;
    G_GUINT32_FORMAT;
    gint64;
    G_MININT64;
    G_MAXINT64;
    G_GINT64_MODIFIER;
    G_GINT64_FORMAT;
    G_GINT64_CONSTANT;
    guint64;
    G_MAXUINT64;
    G_GUINT64_FORMAT;
    G_GUINT64_CONSTANT;
```

```cpp
    gfloat;
    G_MINFLOAT;
    G_MAXFLOAT;
    gdouble;
    G_MINDOUBLE;
    G_MAXDOUBLE;
```

```cpp
    gsize;
    G_MAXSIZE;
    G_GSIZE_MODIFIER;
    G_GSIZE_FORMAT;
    gssize;
    G_MINSSIZE;
    G_MAXSSIZE;
    G_GSSIZE_MODIFIER;
    G_GSSIZE_FORMAT;
    goffset;
    G_MINOFFSET;
    G_MAXOFFSET;
    G_GOFFSET_MODIFIER;
    G_GOFFSET_FORMAT;
    G_GOFFSET_CONSTANT;
```

```cpp
    gintptr;
    G_GINTPTR_MODIFIER;
    G_GINTPTR_FORMAT;
    guintptr;
    G_GUINTPTR_FORMAT;
```

### Subsection Private

```cpp
    GLIB_SIZEOF_SSIZE_T;
    GLIB_SIZEOF_VOID_P;
    GLIB_SIZEOF_LONG;
    GLIB_SIZEOF_SIZE_T;
    G_HAVE_GINT64;
```

## 🍀 Version Information

### File: version

```cpp
    glib_major_version;
    glib_minor_version;
    glib_micro_version;
    glib_binary_age;
    glib_interface_age;
    glib_check_version;
```

```cpp
    GLIB_MAJOR_VERSION;
    GLIB_MINOR_VERSION;
    GLIB_MICRO_VERSION;
    GLIB_CHECK_VERSION;
```

```cpp
    GLIB_VERSION_CUR_STABLE;
    GLIB_VERSION_PREV_STABLE;
    GLIB_VERSION_MIN_REQUIRED;
    GLIB_VERSION_MAX_ALLOWED;
    GLIB_DISABLE_DEPRECATION_WARNINGS;
    @GLIB_VERSIONS@;
```

### Subsection Private

```cpp
    G_ENCODE_VERSION;
    GLIB_AVAILABLE_IN_ALL;
    GLIB_DEPRECATED_ENUMERATOR;
    GLIB_DEPRECATED_ENUMERATOR_FOR;
    GLIB_DEPRECATED_MACRO;
    GLIB_DEPRECATED_MACRO_FOR;
    GLIB_DEPRECATED_TYPE;
    GLIB_DEPRECATED_TYPE_FOR;
    GLIB_VERSION_CUR_STABLE;
    GLIB_VERSION_PREV_STABLE;
```

## 🍀 Standard Macros

### File: macros

```cpp
    G_OS_WIN32;
    G_OS_UNIX;
```

```cpp
    G_DIR_SEPARATOR;
    G_DIR_SEPARATOR_S;
    G_IS_DIR_SEPARATOR;
    G_SEARCHPATH_SEPARATOR;
    G_SEARCHPATH_SEPARATOR_S;
```

```cpp
    TRUE;
    FALSE;
```

```cpp
    NULL;
```

```cpp
    MIN;
    MAX;
```

```cpp
    ABS;
    CLAMP;
    G_APPROX_VALUE;
```

```cpp
    G_SIZEOF_MEMBER;
    G_STRUCT_MEMBER;
    G_STRUCT_MEMBER_P;
    G_STRUCT_OFFSET;
```

```cpp
    G_MEM_ALIGN;
```

```cpp
    G_ALIGNOF;
```

```cpp
    G_CONST_RETURN;
    G_NORETURN;
    G_NORETURN_FUNCPTR;
```

```cpp
    G_ALWAYS_INLINE;
    G_NO_INLINE;
```

```cpp
    G_N_ELEMENTS;
```

## 🍀 Type Conversion Macros

### File: type_conversion

```cpp
    GINT_TO_POINTER;
    GPOINTER_TO_INT;
```

```cpp
    GUINT_TO_POINTER;
    GPOINTER_TO_UINT;
    GSIZE_TO_POINTER;
    GPOINTER_TO_SIZE;
```

## 🍀 Byte Order Macros

### File: byte_order

```cpp
    G_BYTE_ORDER;
    G_LITTLE_ENDIAN;
    G_BIG_ENDIAN;
    G_PDP_ENDIAN;
```

```cpp
    g_htonl;
    g_htons;
    g_ntohl;
    g_ntohs;
```

```cpp
    GINT_FROM_BE;
    GINT_FROM_LE;
    GINT_TO_BE;
    GINT_TO_LE;
```

```cpp
    GUINT_FROM_BE;
    GUINT_FROM_LE;
    GUINT_TO_BE;
    GUINT_TO_LE;
```

```cpp
    GLONG_FROM_BE;
    GLONG_FROM_LE;
    GLONG_TO_BE;
    GLONG_TO_LE;
```

```cpp
    GULONG_FROM_BE;
    GULONG_FROM_LE;
    GULONG_TO_BE;
    GULONG_TO_LE;
```

```cpp
    GSIZE_FROM_BE;
    GSIZE_FROM_LE;
    GSIZE_TO_BE;
    GSIZE_TO_LE;
```

```cpp
    GSSIZE_FROM_BE;
    GSSIZE_FROM_LE;
    GSSIZE_TO_BE;
    GSSIZE_TO_LE;
```

```cpp
    GINT16_FROM_BE;
    GINT16_FROM_LE;
    GINT16_TO_BE;
    GINT16_TO_LE;
```

```cpp
    GUINT16_FROM_BE;
    GUINT16_FROM_LE;
    GUINT16_TO_BE;
    GUINT16_TO_LE;
```

```cpp
    GINT32_FROM_BE;
    GINT32_FROM_LE;
    GINT32_TO_BE;
    GINT32_TO_LE;
```

```cpp
    GUINT32_FROM_BE;
    GUINT32_FROM_LE;
    GUINT32_TO_BE;
    GUINT32_TO_LE;
```

```cpp
    GINT64_FROM_BE;
    GINT64_FROM_LE;
    GINT64_TO_BE;
    GINT64_TO_LE;
```

```cpp
    GUINT64_FROM_BE;
    GUINT64_FROM_LE;
    GUINT64_TO_BE;
    GUINT64_TO_LE;
```

```cpp
    GUINT16_SWAP_BE_PDP;
    GUINT16_SWAP_LE_BE;
    GUINT16_SWAP_LE_PDP;
```

```cpp
    GUINT32_SWAP_BE_PDP;
    GUINT32_SWAP_LE_BE;
    GUINT32_SWAP_LE_PDP;
```

```cpp
    GUINT64_SWAP_LE_BE;
```

### Subsection Private

```cpp
    GUINT16_SWAP_LE_BE_CONSTANT;
    GUINT32_SWAP_LE_BE_CONSTANT;
    GUINT64_SWAP_LE_BE_CONSTANT;
    GUINT16_SWAP_LE_BE_IA32;
    GUINT32_SWAP_LE_BE_IA32;
    GUINT64_SWAP_LE_BE_IA32;
    GUINT16_SWAP_LE_BE_IA64;
    GUINT32_SWAP_LE_BE_IA64;
    GUINT64_SWAP_LE_BE_IA64;
    GUINT32_SWAP_LE_BE_X86_64;
    GUINT64_SWAP_LE_BE_X86_64;

```

## 🍀 Bounds-checked integer arithmetic

### File: checkedmath

```cpp
    g_uint_checked_add;
    g_uint_checked_mul;
    g_uint64_checked_add;
    g_uint64_checked_mul;
    g_size_checked_add;
    g_size_checked_mul;
```

## 🍀 Numerical Definitions

### File: numerical

```cpp
    G_IEEE754_FLOAT_BIAS;
    G_IEEE754_DOUBLE_BIAS;
    GFloatIEEE754;
    GDoubleIEEE754;
```

```cpp
    G_E;
    G_LN2;
    G_LN10;
    G_PI;
    G_PI_2;
    G_PI_4;
    G_SQRT2;
    G_LOG_2_BASE_10;
```

## 🍀 Miscellaneous Macros

### File: macros_misc

```cpp
    G_INLINE_FUNC;
```

```cpp
    g_auto;
    g_autoptr;
    g_autofree;
    g_autolist;
    g_autoslist;
    g_autoqueue;
    G_DEFINE_AUTOPTR_CLEANUP_FUNC;
    G_DEFINE_AUTO_CLEANUP_CLEAR_FUNC;
    G_DEFINE_AUTO_CLEANUP_FREE_FUNC;
```

```cpp
    G_STMT_START;
    G_STMT_END;
```

```cpp
    G_BEGIN_DECLS;
    G_END_DECLS;
```

```cpp
    G_VA_COPY;
```

```cpp
    G_STRINGIFY;
    G_PASTE;
    G_STATIC_ASSERT;
    G_STATIC_ASSERT_EXPR;
```

### Subsection

```cpp
    G_GNUC_CHECK_VERSION;
    G_GNUC_EXTENSION;
    G_GNUC_CONST;
    G_GNUC_PURE;
    G_GNUC_MALLOC;
    G_GNUC_ALLOC_SIZE;
    G_GNUC_ALLOC_SIZE2;
    G_GNUC_DEPRECATED;
    G_GNUC_DEPRECATED_FOR;
    G_GNUC_BEGIN_IGNORE_DEPRECATIONS;
    G_GNUC_END_IGNORE_DEPRECATIONS;
    G_GNUC_NORETURN;
    G_GNUC_FALLTHROUGH;
    G_GNUC_UNUSED;
    G_GNUC_PRINTF;
    G_GNUC_SCANF;
    G_GNUC_STRFTIME;
    G_GNUC_FORMAT;
    G_GNUC_NULL_TERMINATED;
    G_GNUC_WARN_UNUSED_RESULT;
    G_GNUC_FUNCTION;
    G_GNUC_PRETTY_FUNCTION;
    G_GNUC_NO_INLINE;
    G_GNUC_NO_INSTRUMENT;
    G_HAVE_GNUC_VISIBILITY;
    G_GNUC_INTERNAL;
    G_GNUC_MAY_ALIAS;
```

### Subsection

```cpp
    G_C_STD_VERSION;
    G_C_STD_CHECK_VERSION;
    G_CXX_STD_VERSION;
    G_CXX_STD_CHECK_VERSION;
```

```cpp
    G_DEPRECATED;
    G_DEPRECATED_FOR;
    G_UNAVAILABLE;
```

```cpp
    G_LIKELY;
    G_UNLIKELY;
```

```cpp
    G_STRLOC;
    G_STRFUNC;
```

### Subsection Private

```cpp
    GLIB_VAR;
    G_STRINGIFY_ARG;
    G_PASTE_ARGS;
    G_HAVE_INLINE;
    G_CAN_INLINE;
    inline 
    G_HAVE___INLINE;
    G_HAVE___INLINE__;
    G_INLINE_DEFINE_NEEDED;
    G_HAVE_GNUC_VARARGS;
    G_HAVE_ISO_VARARGS;
    G_HAVE_GROWING_STACK;
    G_VA_COPY_AS_ARRAY;
    GLIB_CANNOT_IGNORE_DEPRECATIONS;
    GLIB_DEPRECATED;
    GLIB_DEPRECATED_FOR;
    GLIB_UNAVAILABLE;
    GLIB_UNAVAILABLE_ENUMERATOR;
    GLIB_UNAVAILABLE_MACRO;
    GLIB_UNAVAILABLE_STATIC_INLINE;
    GLIB_UNAVAILABLE_TYPE;
    G_ANALYZER_ANALYZING;
    G_ANALYZER_NORETURN;
    g_autoptr_cleanup_generic_gfree;
    glib_typeof;
    g_macro__has_attribute;
    g_macro__has_builtin;
    g_macro__has_feature;
    g_macro__has_extension;
    g_macro__has_attribute___always_inline__;
    g_macro__has_attribute___alloc_size__;
    g_macro__has_attribute___const__;
    g_macro__has_attribute___deprecated__;
    g_macro__has_attribute___format__;
    g_macro__has_attribute___format_arg__;
    g_macro__has_attribute___malloc__;
    g_macro__has_attribute___no_instrument_function__;
    g_macro__has_attribute___noreturn__;
    g_macro__has_attribute___pure__;
    g_macro__has_attribute___sentinel__;
    g_macro__has_attribute___unused__;
    g_macro__has_attribute_fallthrough;
    g_macro__has_attribute_may_alias;
    g_macro__has_attribute___noinline__;
    g_macro__has_attribute_warn_unused_result;
    g_macro__has_attribute_cleanup;
```

## 🍀 Error Reporting

### File: error_reporting

```cpp
    GError;
    g_error_new;
    g_error_new_literal;
    g_error_new_valist;
    g_error_free;
    g_error_copy;
    g_error_matches;
    g_set_error;
    g_set_error_literal;
    g_propagate_error;
    g_clear_error;
    g_prefix_error;
    g_prefix_error_literal;
    g_propagate_prefixed_error;
```

```cpp
    GErrorInitFunc;
    GErrorCopyFunc;
    GErrorClearFunc;
    G_DEFINE_EXTENDED_ERROR;
    g_error_domain_register_static;
    g_error_domain_register;
```

## 🍀 The Main Event Loop

### File: main

```cpp
    GMainLoop;
    g_main_loop_new;
    g_main_loop_ref;
    g_main_loop_unref;
    g_main_loop_run;
    g_main_loop_quit;
    g_main_loop_is_running;
    g_main_loop_get_context;
    g_main_new;
    g_main_destroy;
    g_main_run;
    g_main_quit;
    g_main_is_running;
```

```cpp
    G_PRIORITY_HIGH;
    G_PRIORITY_DEFAULT;
    G_PRIORITY_HIGH_IDLE;
    G_PRIORITY_DEFAULT_IDLE;
    G_PRIORITY_LOW;
```

```cpp
    G_SOURCE_CONTINUE;
    G_SOURCE_REMOVE;
```

### Subsection

```cpp
    GMainContext;
    GMainContextFlags;
    g_main_context_new;
    g_main_context_new_with_flags;
    g_main_context_ref;
    g_main_context_unref;
    g_main_context_default;
    g_main_context_iteration;
    g_main_iteration;
    g_main_context_pending;
    g_main_pending;
    g_main_context_find_source_by_id;
    g_main_context_find_source_by_user_data;
    g_main_context_find_source_by_funcs_user_data;
    g_main_context_wakeup;
    g_main_context_acquire;
    g_main_context_release;
    g_main_context_is_owner;
    g_main_context_wait;
    g_main_context_prepare;
    g_main_context_query;
    g_main_context_check;
    g_main_context_dispatch;
    g_main_context_set_poll_func;
    g_main_context_get_poll_func;
    GPollFunc;
    g_main_context_add_poll;
    g_main_context_remove_poll;
    g_main_depth;
    g_main_current_source;
    g_main_set_poll_func;
    g_main_context_invoke;
    g_main_context_invoke_full;
```

### Subsection

```cpp
    GMainContextPusher;
    g_main_context_pusher_new;
    g_main_context_pusher_free;
```

```cpp
    g_main_context_get_thread_default;
    g_main_context_ref_thread_default;
    g_main_context_push_thread_default;
    g_main_context_pop_thread_default;
```

```cpp
    g_timeout_source_new;
    g_timeout_source_new_seconds;
    g_timeout_add;
    g_timeout_add_once;
    g_timeout_add_full;
    g_timeout_add_seconds;
    g_timeout_add_seconds_full;
    g_timeout_add_seconds_once;
```

```cpp
    g_idle_source_new;
    g_idle_add;
    g_idle_add_once;
    g_idle_add_full;
    g_idle_remove_by_data;
```

```cpp
    GPid;
    G_PID_FORMAT;
    GChildWatchFunc;
    g_child_watch_source_new;
    g_child_watch_add;
    g_child_watch_add_full;
```

```cpp
    GPollFD;
    g_poll;
    G_POLLFD_FORMAT;
```

### Subsection

```cpp
    GSource;
    GSourceDummyMarshal;
    GSourceFuncs;
    GSourceDisposeFunc;
    GSourceCallbackFuncs;
    g_source_new;
    g_source_ref;
    g_source_unref;
    g_source_set_funcs;
    g_source_set_dispose_function;
    g_source_attach;
    g_source_destroy;
    g_source_is_destroyed;
    g_source_set_priority;
    g_source_get_priority;
    g_source_set_can_recurse;
    g_source_get_can_recurse;
    g_source_get_id;
    g_source_get_name;
    g_source_set_name;
    g_source_set_static_name;
    g_source_set_name_by_id;
    g_source_get_context;
    g_source_set_callback;
    GSourceFunc;
    G_SOURCE_FUNC;
    GSourceOnceFunc;
    g_source_set_callback_indirect;
    g_source_set_ready_time;
    g_source_get_ready_time;
    g_source_add_unix_fd;
    g_source_remove_unix_fd;
    g_source_modify_unix_fd;
    g_source_query_unix_fd;
    g_source_add_poll;
    g_source_remove_poll;
    g_source_add_child_source;
    g_source_remove_child_source;
    g_source_get_time;
    g_source_get_current_time;
    g_source_remove;
    g_source_remove_by_funcs_user_data;
    g_source_remove_by_user_data;
    GClearHandleFunc;
    g_clear_handle_id;
```

### Subsection

```cpp
    g_steal_fd;
```

### Subsection Private

```cpp
    GLIB_HAVE_ALLOCA_H;
    alloca;
    GLIB_USING_SYSTEM_PRINTF;
    GLIB_SYSDEF_POLLERR;
    GLIB_SYSDEF_POLLHUP;
    GLIB_SYSDEF_POLLIN;
    GLIB_SYSDEF_POLLNVAL;
    GLIB_SYSDEF_POLLOUT;
    GLIB_SYSDEF_POLLPRI;
    GLIB_SYSDEF_AF_INET;
    GLIB_SYSDEF_AF_INET6;
    GLIB_SYSDEF_AF_UNIX;
    GLIB_SYSDEF_MSG_DONTROUTE;
    GLIB_SYSDEF_MSG_OOB;
    GLIB_SYSDEF_MSG_PEEK;
    G_WIN32_MSG_HANDLE;
    g_idle_funcs;
    g_timeout_funcs;
    g_child_watch_funcs;
    g_unix_signal_funcs;
    g_unix_fd_source_funcs;
    GSourcePrivate;
```


## 🍀 Threads

### File: threads

```cpp
    G_THREAD_ERROR;
    GThreadError;
```

```cpp
    GThread;
    GThreadFunc;
    g_thread_new;
    g_thread_try_new;
    g_thread_ref;
    g_thread_unref;
    g_thread_join;
    g_thread_yield;
    g_thread_exit;
    g_thread_self;
```

```cpp
    GMutex;
    g_mutex_init;
    g_mutex_clear;
    g_mutex_lock;
    g_mutex_trylock;
    g_mutex_unlock;
```

```cpp
    GMutexLocker;
    g_mutex_locker_new;
    g_mutex_locker_free;
```

```cpp
    G_LOCK_DEFINE;
    G_LOCK_DEFINE_STATIC;
    G_LOCK_EXTERN;
    G_LOCK;
    G_TRYLOCK;
    G_UNLOCK;
```

```cpp
    GRecMutex;
    g_rec_mutex_init;
    g_rec_mutex_clear;
    g_rec_mutex_lock;
    g_rec_mutex_trylock;
    g_rec_mutex_unlock;
```

```cpp
    GRecMutexLocker;
    g_rec_mutex_locker_new;
    g_rec_mutex_locker_free;
```

```cpp
    GRWLockWriterLocker;
    g_rw_lock_writer_locker_new;
    g_rw_lock_writer_locker_free;
```

```cpp
    GRWLockReaderLocker;
    g_rw_lock_reader_locker_new;
    g_rw_lock_reader_locker_free;
```

```cpp
    GRWLock;
    g_rw_lock_init;
    g_rw_lock_clear;
    g_rw_lock_writer_lock;
    g_rw_lock_writer_trylock;
    g_rw_lock_writer_unlock;
    g_rw_lock_reader_lock;
    g_rw_lock_reader_trylock;
    g_rw_lock_reader_unlock;
```

```cpp
    GCond;
    g_cond_init;
    g_cond_clear;
    g_cond_wait;
    g_cond_timed_wait;
    g_cond_wait_until;
    g_cond_signal;
    g_cond_broadcast;
```

```cpp
    GPrivate;
    G_PRIVATE_INIT;
    g_private_get;
    g_private_set;
    g_private_replace;
```

```cpp
    GOnce;
    GOnceStatus;
    G_ONCE_INIT;
    g_once;
    g_once_init_enter;
    g_once_init_leave;
```

```cpp
    g_bit_lock;
    g_bit_trylock;
    g_bit_unlock;
    g_pointer_bit_lock;
    g_pointer_bit_trylock;
    g_pointer_bit_unlock;
```

```cpp
    g_get_num_processors;
```

### Subsection Private

```cpp
    G_LOCK_NAME;
    atexit;
    g_thread_error_quark;
    g_once_impl;
```

## 🍀 Deprecated Thread APIs

### File: threads-deprecated

```cpp
    G_THREADS_IMPL_POSIX;
    G_THREADS_IMPL_WIN32;
```

```cpp
    g_thread_init;
    g_thread_supported;
    g_thread_get_initialized;
```

```cpp
    g_thread_create;
    g_thread_create_full;
    GThreadPriority;
    g_thread_set_priority;
    g_thread_foreach;
```

```cpp
    g_mutex_new;
    g_mutex_free;
    g_cond_new;
    g_cond_free;
    g_private_new;
```

```cpp
    GStaticMutex;
    G_STATIC_MUTEX_INIT;
    g_static_mutex_init;
    g_static_mutex_lock;
    g_static_mutex_trylock;
    g_static_mutex_unlock;
    g_static_mutex_get_mutex;
    g_static_mutex_free;
```

```cpp
    GStaticRecMutex;
    G_STATIC_REC_MUTEX_INIT;
    g_static_rec_mutex_init;
    g_static_rec_mutex_lock;
    g_static_rec_mutex_trylock;
    g_static_rec_mutex_unlock;
    g_static_rec_mutex_lock_full;
    g_static_rec_mutex_unlock_full;
    g_static_rec_mutex_free;
```

```cpp
    GStaticRWLock;
    G_STATIC_RW_LOCK_INIT;
    g_static_rw_lock_init;
    g_static_rw_lock_reader_lock;
    g_static_rw_lock_reader_trylock;
    g_static_rw_lock_reader_unlock;
    g_static_rw_lock_writer_lock;
    g_static_rw_lock_writer_trylock;
    g_static_rw_lock_writer_unlock;
    g_static_rw_lock_free;
```

```cpp
    GStaticPrivate;
    G_STATIC_PRIVATE_INIT;
    g_static_private_init;
    g_static_private_get;
    g_static_private_set;
    g_static_private_free;
```

### Subsection Private

```cpp
    GThreadFunctions;
    g_thread_init_with_errorcheck_mutexes;
    G_THREADS_ENABLED;
    g_static_mutex_get_mutex_impl;
    g_thread_use_default_impl;
    g_threads_got_initialized;
    g_thread_functions_for_glib_use;
    g_thread_gettime;
    g_once_init_enter_impl;
```

## 🍀 Thread Pools

### File: thread_pools

```cpp
    GThreadPool;
    g_thread_pool_new;
    g_thread_pool_new_full;
    g_thread_pool_push;
    g_thread_pool_set_max_threads;
    g_thread_pool_get_max_threads;
    g_thread_pool_get_num_threads;
    g_thread_pool_unprocessed;
    g_thread_pool_free;
    g_thread_pool_set_max_unused_threads;
    g_thread_pool_get_max_unused_threads;
    g_thread_pool_get_num_unused_threads;
    g_thread_pool_stop_unused_threads;
    g_thread_pool_set_sort_function;
    g_thread_pool_set_max_idle_time;
    g_thread_pool_get_max_idle_time;
    g_thread_pool_move_to_front;
```

## 🍀 Asynchronous Queues

### File: async_queues

```cpp
    GAsyncQueue;
    g_async_queue_new;
    g_async_queue_new_full;
    g_async_queue_ref;
    g_async_queue_unref;
    g_async_queue_push;
    g_async_queue_push_sorted;
    g_async_queue_push_front;
    g_async_queue_remove;
    g_async_queue_pop;
    g_async_queue_try_pop;
    g_async_queue_timeout_pop;
    g_async_queue_length;
    g_async_queue_sort;
```

```cpp
    g_async_queue_lock;
    g_async_queue_unlock;
    g_async_queue_ref_unlocked;
    g_async_queue_unref_and_unlock;
    g_async_queue_push_unlocked;
    g_async_queue_push_sorted_unlocked;
    g_async_queue_push_front_unlocked;
    g_async_queue_remove_unlocked;
    g_async_queue_pop_unlocked;
    g_async_queue_try_pop_unlocked;
    g_async_queue_timeout_pop_unlocked;
    g_async_queue_length_unlocked;
    g_async_queue_sort_unlocked;
```

```cpp
    g_async_queue_timed_pop;
    g_async_queue_timed_pop_unlocked;
```

## 🍀 Atomic Operations

### File: atomic_operations

```cpp
    G_ATOMIC_LOCK_FREE;
```

```cpp
    g_atomic_int_get;
    g_atomic_int_set;
    g_atomic_int_inc;
    g_atomic_int_dec_and_test;
    g_atomic_int_compare_and_exchange;
    g_atomic_int_compare_and_exchange_full;
    g_atomic_int_exchange;
    g_atomic_int_add;
    g_atomic_int_and;
    g_atomic_int_or;
    g_atomic_int_xor;
```

```cpp
    g_atomic_pointer_get;
    g_atomic_pointer_set;
    g_atomic_pointer_compare_and_exchange;
    g_atomic_pointer_compare_and_exchange_full;
    g_atomic_pointer_exchange;
    g_atomic_pointer_add;
    g_atomic_pointer_and;
    g_atomic_pointer_or;
    g_atomic_pointer_xor;
```

```cpp
    g_atomic_int_exchange_and_add;
```

## 🍀 IO Channels

### File: iochannels

```cpp
    GIOChannel;
```

```cpp
    g_io_channel_unix_new;
    g_io_channel_unix_get_fd;
    g_io_channel_win32_new_fd;
    g_io_channel_win32_new_socket;
    g_io_channel_win32_new_messages;
```

```cpp
    g_io_channel_init;
```

```cpp
    g_io_channel_new_file;
    g_io_channel_read_chars;
    g_io_channel_read_unichar;
    g_io_channel_read_line;
    g_io_channel_read_line_string;
    g_io_channel_read_to_end;
    g_io_channel_write_chars;
    g_io_channel_write_unichar;
    g_io_channel_flush;
    g_io_channel_seek_position;
    GSeekType;
    g_io_channel_shutdown;
```

```cpp
    GIOStatus;
    GIOChannelError;
    G_IO_CHANNEL_ERROR;
    g_io_channel_error_from_errno;
```

```cpp
    g_io_channel_ref;
    g_io_channel_unref;
```

```cpp
    g_io_create_watch;
    g_io_add_watch;
    g_io_add_watch_full;
    GIOCondition;
    GIOFunc;
```

```cpp
    GIOFuncs;
```

```cpp
    g_io_channel_get_buffer_size;
    g_io_channel_set_buffer_size;
    g_io_channel_get_buffer_condition;
    g_io_channel_get_flags;
    g_io_channel_set_flags;
    GIOFlags;
    g_io_channel_get_line_term;
    g_io_channel_set_line_term;
    g_io_channel_get_buffered;
    g_io_channel_set_buffered;
    g_io_channel_get_encoding;
    g_io_channel_set_encoding;
    g_io_channel_get_close_on_unref;
    g_io_channel_set_close_on_unref;
```

```cpp
    g_io_channel_read;
    GIOError;
    g_io_channel_write;
    g_io_channel_seek;
    g_io_channel_close;
```

### Subsection Private

```cpp
    g_io_channel_win32_poll;
    g_io_channel_win32_make_pollfd;
    g_io_channel_win32_get_fd;
    g_io_channel_win32_new_stream_socket;
    g_io_channel_win32_set_debug;
    g_io_channel_error_quark;
    g_io_watch_funcs;
    G_IO_FLAG_IS_WRITEABLE;
```

## 🍀 Memory Allocation

### File: memory

```cpp
    g_new;
    g_new0;
    g_renew;
    g_try_new;
    g_try_new0;
    g_try_renew;
```

```cpp
    g_malloc;
    g_malloc0;
    g_realloc;
    g_try_malloc;
    g_try_malloc0;
    g_try_realloc;
    g_malloc_n;
    g_malloc0_n;
    g_realloc_n;
    g_try_malloc_n;
    g_try_malloc0_n;
    g_try_realloc_n;
```

```cpp
    g_free;
    g_free_sized;
    g_clear_pointer;
    g_steal_pointer;
    g_mem_gc_friendly;
```

```cpp
    g_alloca;
    g_alloca0;
    g_newa;
    g_newa0;
```

```cpp
    g_aligned_alloc;
    g_aligned_alloc0;
    g_aligned_free;
    g_aligned_free_sized;
```

```cpp
    g_memmove;
    g_memdup;
    g_memdup2;
```

```cpp
    GMemVTable;
    g_mem_set_vtable;
    g_mem_is_system_malloc;
```

```cpp
    glib_mem_profiler_table;
    g_mem_profile;
```

## 🍀 Warnings and Assertions

### File: warnings

```cpp
    g_print;
    g_set_print_handler;
    GPrintFunc;
```

```cpp
    g_printerr;
    g_set_printerr_handler;
```

```cpp
    g_return_if_fail;
    g_return_val_if_fail;
    g_return_if_reached;
    g_return_val_if_reached;
    g_warn_if_fail;
    g_warn_if_reached;
```

```cpp
    g_on_error_query;
    g_on_error_stack_trace;
```

```cpp
    G_BREAKPOINT;
```

### Subsection Private

```cpp
    g_return_if_fail_warning;
    g_assert_warning;
    g_warn_message;
```

## 🍀 Glob-style pattern matching

### File: patterns

```cpp
    GPatternSpec;
    g_pattern_spec_new;
    g_pattern_spec_free;
    g_pattern_spec_equal;
    g_pattern_spec_copy;
    g_pattern_spec_match;
    g_pattern_spec_match_string;
    g_pattern_match;
    g_pattern_match_string;
    g_pattern_match_simple;
```

## 🍀 Perl-compatible regular expressions

### File: gregex

```cpp
    GRegexError;
    G_REGEX_ERROR;
    GRegexCompileFlags;
    GRegexMatchFlags;
    GRegex;
    GRegexEvalCallback;
    g_regex_new;
    g_regex_ref;
    g_regex_unref;
    g_regex_get_pattern;
    g_regex_get_max_backref;
    g_regex_get_capture_count;
    g_regex_get_has_cr_or_lf;
    g_regex_get_max_lookbehind;
    g_regex_get_string_number;
    g_regex_get_compile_flags;
    g_regex_get_match_flags;
    g_regex_escape_string;
    g_regex_escape_nul;
    g_regex_match_simple;
    g_regex_match;
    g_regex_match_full;
    g_regex_match_all;
    g_regex_match_all_full;
    g_regex_split_simple;
    g_regex_split;
    g_regex_split_full;
    g_regex_replace;
    g_regex_replace_literal;
    g_regex_replace_eval;
    g_regex_check_replacement;
    GMatchInfo;
    g_match_info_get_regex;
    g_match_info_get_string;
    g_match_info_ref;
    g_match_info_unref;
    g_match_info_free;
    g_match_info_matches;
    g_match_info_next;
    g_match_info_get_match_count;
    g_match_info_is_partial_match;
    g_match_info_expand_references;
    g_match_info_fetch;
    g_match_info_fetch_pos;
    g_match_info_fetch_named;
    g_match_info_fetch_named_pos;
    g_match_info_fetch_all;
```

### Subsection Private

```cpp
    g_regex_error_quark;
```

## 🍀 Message Logging

### File: messages

```cpp
    G_LOG_DOMAIN;
    G_LOG_FATAL_MASK;
    G_LOG_LEVEL_USER_SHIFT;
    GLogFunc;
    GLogLevelFlags;
```

```cpp
    g_log;
    g_logv;
    g_message;
    g_warning;
    g_warning_once;
    g_critical;
    g_error;
    g_info;
    g_debug;
```

```cpp
    g_log_set_handler;
    g_log_set_handler_full;
    g_log_remove_handler;
    g_log_set_always_fatal;
    g_log_set_fatal_mask;
    g_log_default_handler;
    g_log_set_default_handler;
    g_log_get_debug_enabled;
    g_log_set_debug_enabled;
```

```cpp
    g_log_structured;
    g_log_variant;
    GLogField;
    g_log_structured_array;
    G_DEBUG_HERE;
```

```cpp
    GLogWriterOutput;
    GLogWriterFunc;
    g_log_set_writer_func;
    g_log_writer_supports_color;
    g_log_writer_is_journald;
    g_log_writer_format_fields;
    g_log_writer_journald;
    g_log_writer_standard_streams;
    g_log_writer_default;
    g_log_writer_default_set_use_stderr;
    g_log_writer_default_would_drop;
```

### Subsection Private

```cpp
    g_log_structured_standard;
```

## 🍀 Timers

### File: timers

```cpp
    GTimer;
    g_timer_new;
    g_timer_start;
    g_timer_stop;
    g_timer_continue;
    g_timer_elapsed;
    g_timer_reset;
    g_timer_destroy;
    g_timer_is_active;
```

## 🍀 Spawning Processes

### File: spawn

```cpp
    GSpawnError;
    G_SPAWN_ERROR;
    GSpawnFlags;
    GSpawnChildSetupFunc;
    g_spawn_async_with_fds;
    g_spawn_async_with_pipes;
    g_spawn_async_with_pipes_and_fds;
    g_spawn_async;
    g_spawn_sync;
    G_SPAWN_EXIT_ERROR;
    g_spawn_check_wait_status;
    g_spawn_check_exit_status;
    g_spawn_command_line_async;
    g_spawn_command_line_sync;
    g_spawn_close_pid;
```

### Subsection Private

```cpp
    g_spawn_error_quark;
    g_spawn_exit_error_quark;
```

## 🍀 Simple XML Subset Parser

### File: markup

```cpp
    GMarkupError;
    G_MARKUP_ERROR;
    GMarkupParseFlags;
    GMarkupParseContext;
    GMarkupParser;
    g_markup_escape_text;
    g_markup_printf_escaped;
    g_markup_vprintf_escaped;
    g_markup_parse_context_new;
    g_markup_parse_context_parse;
    g_markup_parse_context_end_parse;
    g_markup_parse_context_free;
    g_markup_parse_context_get_position;
    g_markup_parse_context_get_element;
    g_markup_parse_context_get_element_stack;
    g_markup_parse_context_get_user_data;
    g_markup_parse_context_push;
    g_markup_parse_context_pop;
    g_markup_parse_context_ref;
    g_markup_parse_context_unref;
    GMarkupCollectType;
    g_markup_collect_attributes;
```

### Subsection Private

```cpp
    g_markup_error_quark;
```


## 🍀 Shell-related Utilities

### File: shell

```cpp
    GShellError;
    G_SHELL_ERROR;
    g_shell_parse_argv;
    g_shell_quote;
    g_shell_unquote;
```

### Subsection Private

```cpp
    g_shell_error_quark;
```

## 🍀 Commandline option parser

### File: goptioncontext

```cpp
    GOptionError;
    G_OPTION_ERROR;
    GOptionArgFunc;
    GOptionContext;
    g_option_context_new;
    g_option_context_set_summary;
    g_option_context_get_summary;
    g_option_context_set_description;
    g_option_context_get_description;
    GTranslateFunc;
    g_option_context_set_translate_func;
    g_option_context_set_translation_domain;
    g_option_context_free;
    g_option_context_parse;
    g_option_context_parse_strv;
    g_option_context_set_help_enabled;
    g_option_context_get_help_enabled;
    g_option_context_set_ignore_unknown_options;
    g_option_context_get_ignore_unknown_options;
    g_option_context_get_help;
    g_option_context_get_strict_posix;
    g_option_context_set_strict_posix;
    GOptionArg;
    GOptionFlags;
    G_OPTION_REMAINING;
    GOptionEntry;
    G_OPTION_ENTRY_NULL;
    g_option_context_add_main_entries;
    GOptionGroup;
    g_option_context_add_group;
    g_option_context_set_main_group;
    g_option_context_get_main_group;
    g_option_group_new;
    g_option_group_ref;
    g_option_group_unref;
    g_option_group_free;
    g_option_group_add_entries;
    GOptionParseFunc;
    g_option_group_set_parse_hooks;
    GOptionErrorFunc;
    g_option_group_set_error_hook;
    g_option_group_set_translate_func;
    g_option_group_set_translation_domain;
```

### Subsection Private

```cpp
    g_option_error_quark;
```

## 🍀 File Utilities

### File: fileutils

include:

    glib.h
    glib/gstdio.h
    fcntl.h
    sys/types.h
    sys/stat.h

```cpp
    GFileError;
    G_FILE_ERROR;
    GFileTest;
    g_file_error_from_errno;
    g_file_get_contents;
    GFileSetContentsFlags;
    g_file_set_contents;
    g_file_set_contents_full;
    g_file_test;
    g_mkstemp;
    g_mkstemp_full;
    g_file_open_tmp;
    g_file_read_link;
    g_mkdir_with_parents;
    g_mkdtemp;
    g_mkdtemp_full;
    g_dir_make_tmp;
```

```cpp
    GDir;
    g_dir_open;
    g_dir_read_name;
    g_dir_rewind;
    g_dir_close;
```

```cpp
    GMappedFile;
    g_mapped_file_new;
    g_mapped_file_new_from_fd;
    g_mapped_file_ref;
    g_mapped_file_unref;
    g_mapped_file_free;
    g_mapped_file_get_length;
    g_mapped_file_get_contents;
    g_mapped_file_get_bytes;
```

```cpp
    g_open;
    g_rename;
    g_mkdir;
    GStatBuf;
    g_stat;
    g_lstat;
    g_unlink;
    g_remove;
    g_rmdir;
    g_fopen;
    g_freopen;
    g_fsync;
    g_chmod;
    g_access;
    g_creat;
    g_chdir;
    g_utime;
    g_close;
    g_clear_fd;
    g_autofd;
```

### Subsection Private

```cpp
    g_file_error_quark;
    utimbuf;
```


## 🍀 String Utility Functions

### File: string_utils

include:

    glib.h
    glib/gprintf.h

```cpp
    g_set_str;
    g_strdup;
    g_strndup;
    g_strdupv;
    g_strnfill;
    g_stpcpy;
    g_strstr_len;
    g_strrstr;
    g_strrstr_len;
    g_str_has_prefix;
    g_str_has_suffix;
    g_strcmp0;
    g_str_to_ascii;
    g_str_tokenize_and_fold;
    g_str_match_string;
```

```cpp
    g_strlcpy;
    g_strlcat;
```

```cpp
    g_strdup_printf;
    g_strdup_vprintf;
    g_printf;
    g_vprintf;
    g_fprintf;
    g_vfprintf;
    g_sprintf;
    g_vsprintf;
    g_snprintf;
    g_vsnprintf;
    g_vasprintf;
    g_printf_string_upper_bound;
```

```cpp
    g_str_is_ascii;
    g_ascii_isalnum;
    g_ascii_isalpha;
    g_ascii_iscntrl;
    g_ascii_isdigit;
    g_ascii_isgraph;
    g_ascii_islower;
    g_ascii_isprint;
    g_ascii_ispunct;
    g_ascii_isspace;
    g_ascii_isupper;
    g_ascii_isxdigit;
```

```cpp
    g_ascii_digit_value;
    g_ascii_xdigit_value;
```

```cpp
    g_ascii_strcasecmp;
    g_ascii_strncasecmp;
```

```cpp
    g_ascii_strup;
    g_ascii_strdown;
```

```cpp
    g_ascii_tolower;
    g_ascii_toupper;
```

```cpp
    g_string_ascii_up;
    g_string_ascii_down;
```

```cpp
    g_strup;
    g_strdown;
```

```cpp
    g_strcasecmp;
    g_strncasecmp;
```

```cpp
    g_strreverse;
```

```cpp
    g_ascii_strtoll;
    g_ascii_strtoull;
    G_ASCII_DTOSTR_BUF_SIZE;
    g_ascii_strtod;
    g_ascii_dtostr;
    g_ascii_formatd;
    g_strtod;
```

```cpp
    GNumberParserError;
    G_NUMBER_PARSER_ERROR;
    g_ascii_string_to_signed;
    g_ascii_string_to_unsigned;
```

### Subsection Private

```cpp
    g_number_parser_error_quark;
```

```cpp
    g_strchug;
    g_strchomp;
    g_strstrip;
```

```cpp
    g_strdelimit;
    G_STR_DELIMITERS;
    g_strescape;
    g_strcompress;
    g_strcanon;
    g_strsplit;
    g_strsplit_set;
    g_strfreev;
    g_strconcat;
    g_strjoin;
    g_strjoinv;
```

```cpp
    GStrv;
    GStrvBuilder;
    g_strv_length;
    g_strv_contains;
    g_strv_equal;
    g_strv_builder_new;
    g_strv_builder_ref;
    g_strv_builder_unref;
    g_strv_builder_add;
    g_strv_builder_addv;
    g_strv_builder_add_many;
    g_strv_builder_end;
```

```cpp
    g_strerror;
    g_strsignal;
```

### Subsection Private

```cpp
    GAsciiType;
    g_ascii_table;
```

## 🍀 Date and Time Functions

### File: date

```cpp
    G_USEC_PER_SEC;
    GTimeVal;
    g_get_current_time;
    g_usleep;
    g_time_val_add;
    g_time_val_from_iso8601;
    g_time_val_to_iso8601;
```

```cpp
    g_get_monotonic_time;
    g_get_real_time;
```

```cpp
    GDate;
    GTime;
    GDateDMY;
    GDateDay;
    GDateMonth;
    GDateYear;
    GDateWeekday;
```

```cpp
    G_DATE_BAD_DAY;
    G_DATE_BAD_JULIAN;
    G_DATE_BAD_YEAR;
```

```cpp
    g_date_new;
    g_date_new_dmy;
    g_date_new_julian;
    g_date_clear;
    g_date_free;
    g_date_copy;
```

```cpp
    g_date_set_day;
    g_date_set_month;
    g_date_set_year;
    g_date_set_dmy;
    g_date_set_julian;
    g_date_set_time;
    g_date_set_time_t;
    g_date_set_time_val;
    g_date_set_parse;
```

```cpp
    g_date_add_days;
    g_date_subtract_days;
    g_date_add_months;
    g_date_subtract_months;
    g_date_add_years;
    g_date_subtract_years;
    g_date_days_between;
    g_date_compare;
    g_date_clamp;
    g_date_order;
```

```cpp
    g_date_get_day;
    g_date_get_month;
    g_date_get_year;
    g_date_get_julian;
    g_date_get_weekday;
    g_date_get_day_of_year;
```

```cpp
    g_date_get_days_in_month;
    g_date_is_first_of_month;
    g_date_is_last_of_month;
    g_date_is_leap_year;
    g_date_get_monday_week_of_year;
    g_date_get_monday_weeks_in_year;
    g_date_get_sunday_week_of_year;
    g_date_get_sunday_weeks_in_year;
    g_date_get_iso8601_week_of_year;
```

```cpp
    g_date_strftime;
    g_date_to_struct_tm;
```

```cpp
    g_date_valid;
    g_date_valid_day;
    g_date_valid_month;
    g_date_valid_year;
    g_date_valid_dmy;
    g_date_valid_julian;
    g_date_valid_weekday;
```

### Subsection Private

```cpp
    g_date_weekday;
    g_date_month;
    g_date_year;
    g_date_day;
    g_date_julian;
    g_date_day_of_year;
    g_date_monday_week_of_year;
    g_date_sunday_week_of_year;
    g_date_days_in_month;
    g_date_monday_weeks_in_year;
    g_date_sunday_weeks_in_year;
```

### File: timezone

```cpp
    GTimeZone;
    g_time_zone_unref;
    g_time_zone_ref;
    g_time_zone_new;
    g_time_zone_new_identifier;
    g_time_zone_new_local;
    g_time_zone_new_utc;
    g_time_zone_new_offset;
    GTimeType;
    g_time_zone_find_interval;
    g_time_zone_adjust_time;
    g_time_zone_get_identifier;
    g_time_zone_get_abbreviation;
    g_time_zone_get_offset;
    g_time_zone_is_dst;
```

### File: date-time

```cpp
    GTimeSpan;
    G_TIME_SPAN_DAY;
    G_TIME_SPAN_HOUR;
    G_TIME_SPAN_MINUTE;
    G_TIME_SPAN_SECOND;
    G_TIME_SPAN_MILLISECOND;
```

```cpp
    GDateTime;
    g_date_time_unref;
    g_date_time_ref;
```

```cpp
    g_date_time_new_now;
    g_date_time_new_now_local;
    g_date_time_new_now_utc;
```

```cpp
    g_date_time_new_from_unix_local;
    g_date_time_new_from_unix_utc;
```

```cpp
    g_date_time_new_from_timeval_local;
    g_date_time_new_from_timeval_utc;
    g_date_time_new_from_iso8601;
```

```cpp
    g_date_time_new;
    g_date_time_new_local;
    g_date_time_new_utc;
```

```cpp
    g_date_time_add;
```

```cpp
    g_date_time_add_years;
    g_date_time_add_months;
    g_date_time_add_weeks;
    g_date_time_add_days;
```

```cpp
    g_date_time_add_hours;
    g_date_time_add_minutes;
    g_date_time_add_seconds;
```

```cpp
    g_date_time_add_full;
```

```cpp
    g_date_time_compare;
    g_date_time_difference;
    g_date_time_hash;
    g_date_time_equal;
```

```cpp
    g_date_time_get_ymd;
```

```cpp
    g_date_time_get_year;
    g_date_time_get_month;
    g_date_time_get_day_of_month;
```

```cpp
    g_date_time_get_week_numbering_year;
    g_date_time_get_week_of_year;
    g_date_time_get_day_of_week;
```

```cpp
    g_date_time_get_day_of_year;
```

```cpp
    g_date_time_get_hour;
    g_date_time_get_minute;
    g_date_time_get_second;
    g_date_time_get_microsecond;
    g_date_time_get_seconds;
```

```cpp
    g_date_time_to_unix;
    g_date_time_to_timeval;
```

```cpp
    g_date_time_get_utc_offset;
    g_date_time_get_timezone;
    g_date_time_get_timezone_abbreviation;
    g_date_time_is_daylight_savings;
```

```cpp
    g_date_time_to_timezone;
    g_date_time_to_local;
    g_date_time_to_utc;
```

```cpp
    g_date_time_format;
    g_date_time_format_iso8601;
```

## 🍀 Hook Functions

### File: hooks

```cpp
    GHookList;
    GHookFinalizeFunc;
    GHook;
    GHookFunc;
    GHookCheckFunc;
```

```cpp
    g_hook_list_init;
    g_hook_list_invoke;
    g_hook_list_invoke_check;
    g_hook_list_marshal;
    GHookMarshaller;
    g_hook_list_marshal_check;
    GHookCheckMarshaller;
    g_hook_list_clear;
```

```cpp
    g_hook_alloc;
    g_hook_append;
    g_hook_prepend;
    g_hook_insert_before;
    g_hook_insert_sorted;
    GHookCompareFunc;
    g_hook_compare_ids;
```

```cpp
    g_hook_get;
    g_hook_find;
    GHookFindFunc;
    g_hook_find_data;
    g_hook_find_func;
    g_hook_find_func_data;
```

```cpp
    g_hook_first_valid;
    g_hook_next_valid;

    GHookFlagMask;
    G_HOOK_FLAGS;
    G_HOOK_FLAG_USER_SHIFT;
```

```cpp
    G_HOOK;
    G_HOOK_IS_VALID;
    G_HOOK_ACTIVE;
    G_HOOK_IN_CALL;
    G_HOOK_IS_UNLINKED;
```

```cpp
    g_hook_ref;
    g_hook_unref;

    g_hook_free;
    g_hook_destroy;
    g_hook_destroy_link;
```

## 🍀 Miscellaneous Utility Functions

### File: misc_utils

```cpp
    g_get_application_name;
    g_set_application_name;
    g_get_prgname;
    g_set_prgname;
    g_get_environ;
    g_environ_getenv;
    g_environ_setenv;
    g_environ_unsetenv;
    g_getenv;
    g_setenv;
    g_unsetenv;
    g_listenv;
    g_get_user_name;
    g_get_real_name;
    g_get_user_cache_dir;
    g_get_user_data_dir;
    g_get_user_config_dir;
    g_get_user_state_dir;
    g_get_user_runtime_dir;
    GUserDirectory;
    g_get_user_special_dir;
    g_get_system_data_dirs;
    g_get_system_config_dirs;
    g_reload_user_special_dirs_cache;
    g_get_os_info;
```

```cpp
    G_OS_INFO_KEY_NAME;
    G_OS_INFO_KEY_PRETTY_NAME;
    G_OS_INFO_KEY_VERSION;
    G_OS_INFO_KEY_VERSION_CODENAME;
    G_OS_INFO_KEY_VERSION_ID;
    G_OS_INFO_KEY_ID;
    G_OS_INFO_KEY_HOME_URL;
    G_OS_INFO_KEY_DOCUMENTATION_URL;
    G_OS_INFO_KEY_SUPPORT_URL;
    G_OS_INFO_KEY_BUG_REPORT_URL;
    G_OS_INFO_KEY_PRIVACY_POLICY_URL;
```

```cpp
    g_get_host_name;
    g_get_home_dir;
    g_get_tmp_dir;
    g_get_current_dir;
    g_basename;
    g_dirname;
    g_canonicalize_filename;
    g_path_is_absolute;
    g_path_skip_root;
    g_path_get_basename;
    g_path_get_dirname;
    g_build_filename;
    g_build_filenamev;
    g_build_filename_valist;
    g_build_path;
    g_build_pathv;
```

```cpp
    g_format_size;
    GFormatSizeFlags;
    g_format_size_full;
    g_format_size_for_display;
```

```cpp
    g_find_program_in_path;
```

```cpp
    g_bit_nth_lsf;
    g_bit_nth_msf;
    g_bit_storage;
```

```cpp
    g_spaced_primes_closest;
```

```cpp
    g_atexit;
    g_abort;
```

```cpp
    g_parse_debug_string;
    GDebugKey;
```

```cpp
    GVoidFunc;
    GFreeFunc;
```

```cpp
    g_qsort_with_data;
```

```cpp
    g_nullify_pointer;
```

### Subsection Private

```cpp
    G_NATIVE_ATEXIT;
    g_ATEXIT;
    g_win32_get_system_data_dirs_for_module;
    ATEXIT;
    g_bit_nth_lsf_impl;
    g_bit_nth_msf_impl;
    g_bit_storage_impl;

```

## 🍀 Lexical Scanner

### File: scanner

```cpp
    GScanner;
    GScannerConfig;
    g_scanner_new;
    g_scanner_destroy;
```

```cpp
    g_scanner_input_file;
    g_scanner_sync_file_offset;
    g_scanner_input_text;
    g_scanner_peek_next_token;
    g_scanner_get_next_token;
    g_scanner_eof;
```

```cpp
    g_scanner_cur_line;
    g_scanner_cur_position;
    g_scanner_cur_token;
    g_scanner_cur_value;
```

```cpp
    g_scanner_set_scope;
    g_scanner_scope_add_symbol;
    g_scanner_scope_foreach_symbol;
    g_scanner_scope_lookup_symbol;
    g_scanner_scope_remove_symbol;
    g_scanner_add_symbol;
    g_scanner_remove_symbol;
    g_scanner_foreach_symbol;
```

```cpp
    g_scanner_freeze_symbol_table;
    g_scanner_thaw_symbol_table;
    g_scanner_lookup_symbol;
```

```cpp
    g_scanner_warn;
    g_scanner_error;
    g_scanner_unexp_token;
    GScannerMsgFunc;
```

```cpp
    G_CSET_a_2_z;
    G_CSET_A_2_Z;
    G_CSET_DIGITS;
    G_CSET_LATINC;
    G_CSET_LATINS;
    GTokenType;
    GTokenValue;
    GErrorType;
```

## 🍀 Key-value file parser

### File: gkeyfile

```cpp
    GKeyFile;
    G_KEY_FILE_ERROR;
    GKeyFileError;
    GKeyFileFlags;
```

```cpp
    g_key_file_new;
    g_key_file_free;
    g_key_file_ref;
    g_key_file_unref;
    g_key_file_set_list_separator;
    g_key_file_load_from_file;
    g_key_file_load_from_data;
    g_key_file_load_from_bytes;
    g_key_file_load_from_data_dirs;
    g_key_file_load_from_dirs;
    g_key_file_to_data;
    g_key_file_save_to_file;
    g_key_file_get_start_group;
    g_key_file_get_groups;
    g_key_file_get_keys;
    g_key_file_has_group;
    g_key_file_has_key;
```

```cpp
    g_key_file_get_value;
    g_key_file_get_string;
    g_key_file_get_locale_string;
    g_key_file_get_locale_for_key;
    g_key_file_get_boolean;
    g_key_file_get_integer;
    g_key_file_get_int64;
    g_key_file_get_uint64;
    g_key_file_get_double;
    g_key_file_get_string_list;
    g_key_file_get_locale_string_list;
    g_key_file_get_boolean_list;
    g_key_file_get_integer_list;
    g_key_file_get_double_list;
    g_key_file_get_comment;
```

```cpp
    g_key_file_set_value;
    g_key_file_set_string;
    g_key_file_set_locale_string;
    g_key_file_set_boolean;
    g_key_file_set_integer;
    g_key_file_set_int64;
    g_key_file_set_uint64;
    g_key_file_set_double;
    g_key_file_set_string_list;
    g_key_file_set_locale_string_list;
    g_key_file_set_boolean_list;
    g_key_file_set_integer_list;
    g_key_file_set_double_list;
    g_key_file_set_comment;
    g_key_file_remove_group;
    g_key_file_remove_key;
    g_key_file_remove_comment;
```

```cpp
    G_KEY_FILE_DESKTOP_GROUP;
    G_KEY_FILE_DESKTOP_KEY_TYPE;
    G_KEY_FILE_DESKTOP_KEY_VERSION;
    G_KEY_FILE_DESKTOP_KEY_NAME;
    G_KEY_FILE_DESKTOP_KEY_GENERIC_NAME;
    G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY;
    G_KEY_FILE_DESKTOP_KEY_COMMENT;
    G_KEY_FILE_DESKTOP_KEY_ICON;
    G_KEY_FILE_DESKTOP_KEY_HIDDEN;
    G_KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN;
    G_KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN;
    G_KEY_FILE_DESKTOP_KEY_TRY_EXEC;
    G_KEY_FILE_DESKTOP_KEY_EXEC;
    G_KEY_FILE_DESKTOP_KEY_PATH;
    G_KEY_FILE_DESKTOP_KEY_TERMINAL;
    G_KEY_FILE_DESKTOP_KEY_MIME_TYPE;
    G_KEY_FILE_DESKTOP_KEY_CATEGORIES;
    G_KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY;
    G_KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS;
    G_KEY_FILE_DESKTOP_KEY_URL;
    G_KEY_FILE_DESKTOP_KEY_ACTIONS;
    G_KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE;
    G_KEY_FILE_DESKTOP_TYPE_APPLICATION;
    G_KEY_FILE_DESKTOP_TYPE_LINK;
    G_KEY_FILE_DESKTOP_TYPE_DIRECTORY;
```

### Subsection Private

```cpp
    g_key_file_error_quark;
    g_key_file_get_type;
```

## 🍀 Bookmark file parser

### File: gbookmarkfile

```cpp
    GBookmarkFile;
    G_BOOKMARK_FILE_ERROR;
    GBookmarkFileError;
    g_bookmark_file_new;
    g_bookmark_file_copy;
    g_bookmark_file_free;
    g_bookmark_file_load_from_file;
    g_bookmark_file_load_from_data;
    g_bookmark_file_load_from_data_dirs;
    g_bookmark_file_to_data;
    g_bookmark_file_to_file;
    g_bookmark_file_has_item;
    g_bookmark_file_has_group;
    g_bookmark_file_has_application;
    g_bookmark_file_get_size;
    g_bookmark_file_get_uris G_GNUC_MALLOC;
```

```cpp
    g_bookmark_file_get_title;
    g_bookmark_file_get_description;
    g_bookmark_file_get_mime_type;
    g_bookmark_file_get_is_private;
    g_bookmark_file_get_icon;
    g_bookmark_file_get_added;
    g_bookmark_file_get_added_date_time;
    g_bookmark_file_get_modified;
    g_bookmark_file_get_modified_date_time;
    g_bookmark_file_get_visited;
    g_bookmark_file_get_visited_date_time;
    g_bookmark_file_get_groups;
    g_bookmark_file_get_applications;
    g_bookmark_file_get_app_info;
    g_bookmark_file_get_application_info;
```

```cpp
    g_bookmark_file_set_title;
    g_bookmark_file_set_description;
    g_bookmark_file_set_mime_type;
    g_bookmark_file_set_is_private;
    g_bookmark_file_set_icon;
    g_bookmark_file_set_added;
    g_bookmark_file_set_added_date_time;
    g_bookmark_file_set_groups;
    g_bookmark_file_set_modified;
    g_bookmark_file_set_modified_date_time;
    g_bookmark_file_set_visited;
    g_bookmark_file_set_visited_date_time;
    g_bookmark_file_set_app_info;
    g_bookmark_file_set_application_info;
    g_bookmark_file_add_group;
    g_bookmark_file_add_application;
    g_bookmark_file_remove_group;
    g_bookmark_file_remove_application;
    g_bookmark_file_remove_item;
    g_bookmark_file_move_item;
```

### Subsection Private

```cpp
    g_bookmark_file_error_quark;
```

## 🍀 Dynamic Loading of Modules

### File: modules

include

    gmodule.h

```cpp
    GModule;
    GModuleError;
    G_MODULE_ERROR;
    g_module_supported;
    g_module_build_path;
    g_module_open;
    g_module_open_full;
    GModuleFlags;
    g_module_symbol;
    g_module_name;
    g_module_make_resident;
    g_module_close;
    g_module_error;
    GModuleCheckInit;
    GModuleUnload;
    G_MODULE_SUFFIX;
    G_MODULE_EXPORT;
    G_MODULE_IMPORT;
```

### Subsection Private

```cpp
    g_module_error_quark;
```

## 🍀 Automatic String Completion

### File: completion

```cpp
    GCompletion;
    g_completion_new;
    GCompletionFunc;
    g_completion_add_items;
    g_completion_remove_items;
    g_completion_clear_items;
    g_completion_complete;
    g_completion_complete_utf8;
    g_completion_set_compare;
    GCompletionStrncmpFunc;
    g_completion_free;
```

## 🍀 Windows Compatibility Functions

### File: windows

```cpp
    MAXPATHLEN;
    GWin32OSType;

    g_win32_check_windows_version;
    g_win32_get_command_line;
    g_win32_error_message;
    g_win32_getlocale;
    g_win32_get_package_installation_directory;
    g_win32_get_package_installation_directory_of_module;
    g_win32_get_package_installation_subdirectory;
    g_win32_get_windows_version;
    g_win32_locale_filename_from_utf8;
    G_WIN32_DLLMAIN_FOR_DLL_NAME;
    G_WIN32_HAVE_WIDECHAR_API;
    G_WIN32_IS_NT_BASED;
```

### Subsection Private

```cpp
    g_win32_ftruncate;
```

## 🍀 UNIX-specific utilities and integration

### File: gunix

```cpp
    G_UNIX_ERROR;
    g_unix_open_pipe;
    g_unix_set_fd_nonblocking;
```

```cpp
    g_unix_signal_add;
    g_unix_signal_add_full;
    g_unix_signal_source_new;
```

```cpp
    GUnixFDSourceFunc;
    g_unix_fd_add;
    g_unix_fd_add_full;
    g_unix_fd_source_new;
```

```cpp
    g_unix_get_passwd_entry;
```

### Subsection Private

```cpp
    g_unix_error_quark;
```


## 🍀 Memory Slices

### File: memory_slices

```cpp
    g_slice_alloc;
    g_slice_alloc0;
    g_slice_copy;
    g_slice_free1;
    g_slice_free_chain_with_offset;
```

```cpp
    g_slice_new;
    g_slice_new0;
    g_slice_dup;
    g_slice_free;
    g_slice_free_chain;
```

### Subsection Private

```cpp
    GSliceConfig;
    g_slice_set_config;
    g_slice_get_config;
    g_slice_get_config_state;
    g_slice_debug_tree_statistics;
```

## 🍀 Doubly-Linked Lists

### File: linked_lists_double

```cpp
    GList;
```

```cpp
    g_list_append;
    g_list_prepend;
    g_list_insert;
    g_list_insert_before;
    g_list_insert_before_link;
    g_list_insert_sorted;
    g_list_remove;
    g_list_remove_link;
    g_list_delete_link;
    g_list_remove_all;
    g_list_free;
    g_list_free_full;
    g_clear_list;
```

```cpp
    g_list_alloc;
    g_list_free_1;
    g_list_free1;
```

```cpp
    g_list_length;
    g_list_copy;
    g_list_copy_deep;
    g_list_reverse;
    g_list_sort;
    GCompareFunc;
    g_list_insert_sorted_with_data;
    g_list_sort_with_data;
    GCompareDataFunc;
    g_list_concat;
    g_list_foreach;
    GFunc;
```

```cpp
    g_list_first;
    g_list_last;
    g_list_previous;
    g_list_next;
    g_list_nth;
    g_list_nth_data;
    g_list_nth_prev;
```

```cpp
    g_list_find;
    g_list_find_custom;
    g_list_position;
    g_list_index;
```

## 🍀 Singly-Linked Lists

### File: linked_lists_single

```cpp
    GSList;
```

```cpp
    g_slist_alloc;
    g_slist_append;
    g_slist_prepend;
    g_slist_insert;
    g_slist_insert_before;
    g_slist_insert_sorted;
    g_slist_remove;
    g_slist_remove_link;
    g_slist_delete_link;
    g_slist_remove_all;
    g_slist_free;
    g_slist_free_full;
    g_slist_free_1;
    g_slist_free1;
    g_clear_slist;
```

```cpp
    g_slist_length;
    g_slist_copy;
    g_slist_copy_deep;
    g_slist_reverse;
    g_slist_insert_sorted_with_data;
    g_slist_sort;
    g_slist_sort_with_data;
    g_slist_concat;
    g_slist_foreach;
```

```cpp
    g_slist_last;
    g_slist_next;
    g_slist_nth;
    g_slist_nth_data;
```

```cpp
    g_slist_find;
    g_slist_find_custom;
    g_slist_position;
    g_slist_index;
```

## 🍀 Double-ended Queues

### File: queue

```cpp
    GQueue;
    g_queue_new;
    g_queue_free;
    g_queue_free_full;
    G_QUEUE_INIT;
    g_queue_init;
    g_queue_clear;
    g_queue_clear_full;
    g_queue_is_empty;
    g_queue_get_length;
    g_queue_reverse;
    g_queue_copy;
    g_queue_foreach;
    g_queue_find;
    g_queue_find_custom;
    g_queue_sort;
    g_queue_push_head;
    g_queue_push_tail;
    g_queue_push_nth;
    g_queue_pop_head;
    g_queue_pop_tail;
    g_queue_pop_nth;
    g_queue_peek_head;
    g_queue_peek_tail;
    g_queue_peek_nth;
    g_queue_index;
    g_queue_remove;
    g_queue_remove_all;
    g_queue_insert_before;
    g_queue_insert_before_link;
    g_queue_insert_after;
    g_queue_insert_after_link;
    g_queue_insert_sorted;
    g_queue_push_head_link;
    g_queue_push_tail_link;
    g_queue_push_nth_link;
    g_queue_pop_head_link;
    g_queue_pop_tail_link;
    g_queue_pop_nth_link;
    g_queue_peek_head_link;
    g_queue_peek_tail_link;
    g_queue_peek_nth_link;
    g_queue_link_index;
    g_queue_unlink;
    g_queue_delete_link;
```

## 🍀 Sequences

### File: sequence

```cpp
    GSequence;
    GSequenceIter;
    GSequenceIterCompareFunc;
```

```cpp
    g_sequence_new;
    g_sequence_free;
    g_sequence_get_length;
    g_sequence_is_empty;
    g_sequence_foreach;
    g_sequence_foreach_range;
    g_sequence_sort;
    g_sequence_sort_iter;
```

```cpp
    g_sequence_get_begin_iter;
    g_sequence_get_end_iter;
    g_sequence_get_iter_at_pos;
    g_sequence_append;
    g_sequence_prepend;
    g_sequence_insert_before;
    g_sequence_move;
    g_sequence_swap;
    g_sequence_insert_sorted;
    g_sequence_insert_sorted_iter;
    g_sequence_sort_changed;
    g_sequence_sort_changed_iter;
    g_sequence_remove;
    g_sequence_remove_range;
    g_sequence_move_range;
    g_sequence_search;
    g_sequence_search_iter;
    g_sequence_lookup;
    g_sequence_lookup_iter;
```

```cpp
    g_sequence_get;
    g_sequence_set;
```

```cpp
    g_sequence_iter_is_begin;
    g_sequence_iter_is_end;
    g_sequence_iter_next;
    g_sequence_iter_prev;
    g_sequence_iter_get_position;
    g_sequence_iter_move;
    g_sequence_iter_get_sequence;
```

```cpp
    g_sequence_iter_compare;
    g_sequence_range_get_midpoint;
```

## 🍀 Trash Stacks

### File: trash_stack

```cpp
    GTrashStack;

    g_trash_stack_push;
    g_trash_stack_pop;
    g_trash_stack_peek;
    g_trash_stack_height;
```

## 🍀 Hash Tables

### File: hash_tables

```cpp
    GHashTable;
    g_hash_table_new;
    g_hash_table_new_full;
    g_hash_table_new_similar;
    GHashFunc;
    GEqualFunc;
    GEqualFuncFull;
    g_hash_table_insert;
    g_hash_table_replace;
    g_hash_table_add;
    g_hash_table_contains;
    g_hash_table_size;
    g_hash_table_lookup;
    g_hash_table_lookup_extended;
    g_hash_table_foreach;
    g_hash_table_find;
    GHFunc;
    g_hash_table_remove;
    g_hash_table_steal;
    g_hash_table_steal_extended;
    g_hash_table_steal_all_keys;
    g_hash_table_steal_all_values;
    g_hash_table_foreach_remove;
    g_hash_table_foreach_steal;
    g_hash_table_remove_all;
    g_hash_table_steal_all;
    g_hash_table_get_keys;
    g_hash_table_get_values;
    g_hash_table_get_values_as_ptr_array;
    g_hash_table_get_keys_as_array;
    g_hash_table_get_keys_as_ptr_array;
    GHRFunc;
    g_hash_table_freeze;
    g_hash_table_thaw;
    g_hash_table_destroy;
    g_hash_table_ref;
    g_hash_table_unref;
    GHashTableIter;
    g_hash_table_iter_init;
    g_hash_table_iter_next;
    g_hash_table_iter_get_hash_table;
    g_hash_table_iter_replace;
    g_hash_table_iter_remove;
    g_hash_table_iter_steal;
```

```cpp
    g_direct_equal;
    g_direct_hash;
    g_int_equal;
    g_int_hash;
    g_int64_equal;
    g_int64_hash;
    g_double_equal;
    g_double_hash;
    g_str_equal;
    g_str_hash;

```

## 🍀 Strings

### File: strings

```cpp
    GString;
    g_string_new;
    g_string_new_take;
    g_string_new_len;
    g_string_sized_new;
    g_string_assign;
    g_string_sprintf;
    g_string_sprintfa;
    g_string_vprintf;
    g_string_append_vprintf;
    g_string_printf;
    g_string_append_printf;
    g_string_append;
    g_string_append_c;
    g_string_append_unichar;
    g_string_append_len;
    g_string_append_uri_escaped;
    g_string_prepend;
    g_string_prepend_c;
    g_string_prepend_unichar;
    g_string_prepend_len;
    g_string_insert;
    g_string_insert_c;
    g_string_insert_unichar;
    g_string_insert_len;
    g_string_overwrite;
    g_string_overwrite_len;
    g_string_replace;
    g_string_erase;
    g_string_truncate;
    g_string_set_size;
    g_string_free;
    g_string_free_to_bytes;
    g_string_free_and_steal;
```

```cpp
    g_string_up;
    g_string_down;
```

```cpp
    g_string_hash;
    g_string_equal;
```

### Subsection Private

```cpp
    g_string_append_c_inline;
    g_autoptr_cleanup_gstring_free;
```

## 🍀 String Chunks

### File: string_chunks

```cpp
    GStringChunk;
    g_string_chunk_new;
    g_string_chunk_insert;
    g_string_chunk_insert_const;
    g_string_chunk_insert_len;
    g_string_chunk_clear;
    g_string_chunk_free;

```

## 🍀 Arrays

### File: arrays

```cpp
    GArray;
    g_array_new;
    g_array_new_take;
    g_array_new_take_zero_terminated;
    g_array_steal;
    g_array_sized_new;
    g_array_copy;
    g_array_ref;
    g_array_unref;
    g_array_get_element_size;
    g_array_append_val;
    g_array_append_vals;
    g_array_prepend_val;
    g_array_prepend_vals;
    g_array_insert_val;
    g_array_insert_vals;
    g_array_remove_index;
    g_array_remove_index_fast;
    g_array_remove_range;
    g_array_sort;
    g_array_sort_with_data;
    g_array_binary_search;
    g_array_index;
    g_array_set_size;
    g_array_set_clear_func;
    g_array_free;
```

## 🍀 Pointer Arrays

### File: arrays_pointer

```cpp
    GPtrArray;
    g_ptr_array_new;
    g_ptr_array_steal;
    g_ptr_array_sized_new;
    g_ptr_array_new_with_free_func;
    g_ptr_array_copy;
    g_ptr_array_new_full;
    g_ptr_array_new_null_terminated;
    g_ptr_array_new_take;
    g_ptr_array_new_take_null_terminated;
    g_ptr_array_new_from_array;
    g_ptr_array_new_from_null_terminated_array;
    g_ptr_array_set_free_func;
    g_ptr_array_is_null_terminated;
    g_ptr_array_ref;
    g_ptr_array_unref;
    g_ptr_array_add;
    g_ptr_array_extend;
    g_ptr_array_extend_and_steal;
    g_ptr_array_insert;
    g_ptr_array_remove;
    g_ptr_array_remove_index;
    g_ptr_array_remove_fast;
    g_ptr_array_remove_index_fast;
    g_ptr_array_remove_range;
    g_ptr_array_steal_index;
    g_ptr_array_steal_index_fast;
    g_ptr_array_sort;
    g_ptr_array_sort_with_data;
    g_ptr_array_sort_values;
    g_ptr_array_sort_values_with_data;
    g_ptr_array_set_size;
    g_ptr_array_index;
    g_ptr_array_free;
    g_ptr_array_foreach;
    g_ptr_array_find;
    g_ptr_array_find_with_equal_func;

```

## 🍀 Byte Arrays

### File: arrays_byte

```cpp
    GByteArray;
    g_byte_array_new;
    g_byte_array_steal;
    g_byte_array_new_take;
    g_byte_array_sized_new;
    g_byte_array_ref;
    g_byte_array_unref;
    g_byte_array_append;
    g_byte_array_prepend;
    g_byte_array_remove_index;
    g_byte_array_remove_index_fast;
    g_byte_array_remove_range;
    g_byte_array_sort;
    g_byte_array_sort_with_data;
    g_byte_array_set_size;
    g_byte_array_free;
    g_byte_array_free_to_bytes;
```

```cpp
    GBytes;
    g_bytes_new;
    g_bytes_new_take;
    g_bytes_new_static;
    g_bytes_new_with_free_func;
    g_bytes_new_from_bytes;
    g_bytes_get_data;
    g_bytes_get_region;
    g_bytes_get_size;
    g_bytes_hash;
    g_bytes_equal;
    g_bytes_compare;
    g_bytes_ref;
    g_bytes_unref;
    g_bytes_unref_to_data;
    g_bytes_unref_to_array;
```

### Subsection Private

```cpp
    g_bytes_get_type;
```

## 🍀 Balanced Binary Trees

### File: trees-binary

```cpp
    GTree;
    GTreeNode;
    g_tree_new;
    g_tree_ref;
    g_tree_unref;
    g_tree_new_with_data;
    g_tree_new_full;
    g_tree_node_first;
    g_tree_node_last;
    g_tree_node_previous;
    g_tree_node_next;
    g_tree_insert_node;
    g_tree_insert;
    g_tree_replace_node;
    g_tree_replace;
    g_tree_node_key;
    g_tree_node_value;
    g_tree_nnodes;
    g_tree_height;
    g_tree_lookup_node;
    g_tree_lookup;
    g_tree_lookup_extended;
    g_tree_foreach_node;
    g_tree_foreach;
    g_tree_traverse;
    GTraverseFunc;
    GTraverseNodeFunc;
    g_tree_search_node;
    g_tree_search;
    g_tree_lower_bound;
    g_tree_upper_bound;
    g_tree_remove;
    g_tree_steal;
    g_tree_remove_all;
    g_tree_destroy;
```

## 🍀 N-ary Trees

### File: trees-nary

```cpp
    GNode;
    g_node_new;
    g_node_copy;
    GCopyFunc;
    g_node_copy_deep;
```

```cpp
    g_node_insert;
    g_node_insert_before;
    g_node_insert_after;
    g_node_append;
    g_node_prepend;
```

```cpp
    g_node_insert_data;
    g_node_insert_data_after;
    g_node_insert_data_before;
    g_node_append_data;
    g_node_prepend_data;
```

```cpp
    g_node_reverse_children;
    g_node_traverse;
    GTraverseType;
    GTraverseFlags;
    GNodeTraverseFunc;
    g_node_children_foreach;
    GNodeForeachFunc;
```

```cpp
    g_node_get_root;
    g_node_find;
    g_node_find_child;
    g_node_child_index;
    g_node_child_position;
    g_node_first_child;
    g_node_last_child;
    g_node_nth_child;
    g_node_first_sibling;
    g_node_next_sibling;
    g_node_prev_sibling;
    g_node_last_sibling;
```

```cpp
    G_NODE_IS_LEAF;
    G_NODE_IS_ROOT;
    g_node_depth;
    g_node_n_nodes;
    g_node_n_children;
    g_node_is_ancestor;
    g_node_max_height;
```

```cpp
    g_node_unlink;
    g_node_destroy;
```


## 🍀 Quarks

### File: quarks

```cpp
    GQuark;
    G_DEFINE_QUARK;
    g_quark_from_string;
    g_quark_from_static_string;
    g_quark_to_string;
    g_quark_try_string;
    g_intern_string;
    g_intern_static_string;
```

## 🍀 Keyed Data Lists

### File: datalist

```cpp
    GData;
    g_datalist_init;
```

```cpp
    g_datalist_id_set_data;
    g_datalist_id_set_data_full;
    g_datalist_id_get_data;
    g_datalist_id_remove_data;
    g_datalist_id_remove_no_notify;
    g_datalist_id_remove_multiple;
    GDuplicateFunc;
    g_datalist_id_dup_data;
    g_datalist_id_replace_data;
```

```cpp
    g_datalist_set_data;
    g_datalist_set_data_full;
    g_datalist_get_data;
    g_datalist_remove_data;
    g_datalist_remove_no_notify;
```

```cpp
    g_datalist_foreach;
    g_datalist_clear;
    g_datalist_set_flags;
    g_datalist_unset_flags;
    g_datalist_get_flags;
    G_DATALIST_FLAGS_MASK;
```


## 🍀 Datasets

### File: datasets

```cpp
    g_dataset_id_set_data;
    g_dataset_id_set_data_full;
    GDestroyNotify;
    g_dataset_id_get_data;
    g_dataset_id_remove_data;
    g_dataset_id_remove_no_notify;
```

```cpp
    g_dataset_set_data;
    g_dataset_set_data_full;
    g_dataset_get_data;
    g_dataset_remove_data;
    g_dataset_remove_no_notify;
```

```cpp
    g_dataset_foreach;
    GDataForeachFunc;
    g_dataset_destroy;

```

## 🍀 Relations and Tuples

### File: relations

```cpp
    GRelation;
    g_relation_new;
    g_relation_index;
    g_relation_insert;
    g_relation_exists;
    g_relation_count;
    g_relation_select;
    g_relation_delete;
    g_relation_destroy;
```

```cpp
    g_relation_print;
```

```cpp
    GTuples;
    g_tuples_destroy;
    g_tuples_index;
```

## 🍀 Caches

### File: caches

```cpp
    GCache;
    g_cache_new;
    g_cache_insert;
    g_cache_remove;
    g_cache_destroy;
```

```cpp
    g_cache_key_foreach;
    g_cache_value_foreach;
```

```cpp
    GCacheDestroyFunc;
    GCacheDupFunc;
    GCacheNewFunc;
```

## 🍀 Random Numbers

### File: random_numbers

```cpp
    GRand;
    g_rand_new_with_seed;
    g_rand_new_with_seed_array;
    g_rand_new;
    g_rand_copy;
    g_rand_free;
    g_rand_set_seed;
    g_rand_set_seed_array;
    g_rand_boolean;
    g_rand_int;
    g_rand_int_range;
    g_rand_double;
    g_rand_double_range;
    g_random_set_seed;
    g_random_boolean;
    g_random_int;
    g_random_int_range;
    g_random_double;
    g_random_double_range;
```

## 🍀 Character Set Conversion

### File: conversions

```cpp
    g_convert;
    g_convert_with_fallback;
    GIConv;
    g_convert_with_iconv;
    G_CONVERT_ERROR;
    g_iconv_open;
    g_iconv;
    g_iconv_close;
    g_locale_to_utf8;
    g_filename_to_utf8;
    g_filename_from_utf8;
    g_get_filename_charsets;
    g_filename_display_name;
    g_filename_display_basename;
    g_locale_from_utf8;
    GConvertError;
```

```cpp
    g_get_charset;
    g_get_codeset;
    g_get_console_charset;
```

### Subsection Private

```cpp
    g_convert_error_quark;
```

## 🍀 Unicode Manipulation

### File: unicode

```cpp
    gunichar;
    gunichar2;
```

```cpp
    g_unichar_validate;
    g_unichar_isalnum;
    g_unichar_isalpha;
    g_unichar_iscntrl;
    g_unichar_isdefined;
    g_unichar_isdigit;
    g_unichar_isgraph;
    g_unichar_islower;
    g_unichar_ismark;
    g_unichar_isprint;
    g_unichar_ispunct;
    g_unichar_isspace;
    g_unichar_istitle;
    g_unichar_isupper;
    g_unichar_isxdigit;
    g_unichar_iswide;
    g_unichar_iswide_cjk;
    g_unichar_iszerowidth;
    g_unichar_toupper;
    g_unichar_tolower;
    g_unichar_totitle;
    g_unichar_digit_value;
    g_unichar_xdigit_value;
    g_unichar_compose;
    g_unichar_decompose;
    g_unichar_fully_decompose;
    G_UNICHAR_MAX_DECOMPOSITION_LENGTH;
    GUnicodeType;
    G_UNICODE_COMBINING_MARK;
    g_unichar_type;
    GUnicodeBreakType;
    g_unichar_break_type;
    g_unichar_combining_class;
    g_unicode_canonical_ordering;
    g_unicode_canonical_decomposition;
    g_unichar_get_mirror_char;
    GUnicodeScript;
    g_unichar_get_script;
    g_unicode_script_from_iso15924;
    g_unicode_script_to_iso15924;
```

```cpp
    g_utf8_next_char;
    g_utf8_get_char;
    g_utf8_get_char_validated;
    g_utf8_offset_to_pointer;
    g_utf8_pointer_to_offset;
    g_utf8_prev_char;
    g_utf8_find_next_char;
    g_utf8_find_prev_char;
    g_utf8_strlen;
    g_utf8_strncpy;
    g_utf8_strchr;
    g_utf8_strrchr;
    g_utf8_strreverse;
    g_utf8_substring;
    g_utf8_truncate_middle;
    g_utf8_validate;
    g_utf8_validate_len;
    g_utf8_make_valid;
```

```cpp
    g_utf8_strup;
    g_utf8_strdown;
    g_utf8_casefold;
    g_utf8_normalize;
    GNormalizeMode;
    g_utf8_collate;
    g_utf8_collate_key;
    g_utf8_collate_key_for_filename;
```

```cpp
    g_utf8_to_utf16;
    g_utf8_to_ucs4;
    g_utf8_to_ucs4_fast;
    g_utf16_to_ucs4;
    g_utf16_to_utf8;
    g_ucs4_to_utf16;
    g_ucs4_to_utf8;
    g_unichar_to_utf8;
```

### Subsection Private

```cpp
    g_utf8_skip;
```

## 🍀 I18N

### File: i18n

include

    glib.h
    glib/gi18n.h

```cpp
    _;
    Q_;
    C_;
    N_;
    NC_;
    g_dgettext;
    g_dcgettext;
    g_dngettext;
    g_dpgettext;
    g_dpgettext2;
    g_strip_context;
    g_get_language_names;
    g_get_locale_variants;
```

## 🍀 Base64 Encoding

### File: base64

```cpp
    g_base64_encode_step;
    g_base64_encode_close;
    g_base64_encode;
    g_base64_decode_step;
    g_base64_decode;
    g_base64_decode_inplace;
```

## 🍀 URI Functions

### File: guri

```cpp
    GUri;
    g_uri_ref;
    g_uri_unref;
    GUriFlags;
    g_uri_split;
    g_uri_split_with_user;
    g_uri_split_network;
    g_uri_is_valid;
    g_uri_join;
    g_uri_join_with_user;
    g_uri_parse;
    g_uri_parse_relative;
    g_uri_resolve_relative;
    g_uri_build;
    g_uri_build_with_user;
    g_uri_peek_scheme;
    g_uri_parse_scheme;
    GUriHideFlags;
    g_uri_to_string;
    g_uri_to_string_partial;
    g_uri_get_scheme;
    g_uri_get_userinfo;
    g_uri_get_user;
    g_uri_get_password;
    g_uri_get_auth_params;
    g_uri_get_host;
    g_uri_get_port;
    g_uri_get_path;
    g_uri_get_query;
    g_uri_get_fragment;
    g_uri_get_flags;
    GUriParamsIter;
    GUriParamsFlags;
    g_uri_params_iter_init;
    g_uri_params_iter_next;
    g_uri_parse_params;
    G_URI_RESERVED_CHARS_ALLOWED_IN_PATH;
    G_URI_RESERVED_CHARS_ALLOWED_IN_PATH_ELEMENT;
    G_URI_RESERVED_CHARS_ALLOWED_IN_USERINFO;
    G_URI_RESERVED_CHARS_GENERIC_DELIMITERS;
    G_URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS;
    g_uri_escape_string;
    g_uri_unescape_string;
    g_uri_escape_bytes;
    g_uri_unescape_bytes;
    g_uri_unescape_segment;
    g_uri_list_extract_uris;
    g_filename_from_uri;
    g_filename_to_uri;
    G_URI_ERROR;
    GUriError;
```

### Subsection Private

```cpp
    g_uri_error_quark;
```

## 🍀 Data Checksums

### File: checksum

```cpp
    GChecksumType;
    g_checksum_type_get_length;
    GChecksum;
    g_checksum_new;
    g_checksum_copy;
    g_checksum_free;
    g_checksum_reset;
    g_checksum_update;
    g_checksum_get_string;
    g_checksum_get_digest;
    g_compute_checksum_for_data;
    g_compute_checksum_for_string;
    g_compute_checksum_for_bytes;
```

## 🍀 Data HMACs

### File: hmac

```cpp
    GHmac;
    g_hmac_new;
    g_hmac_copy;
    g_hmac_ref;
    g_hmac_unref;
    g_hmac_update;
    g_hmac_get_string;
    g_hmac_get_digest;
    g_compute_hmac_for_data;
    g_compute_hmac_for_string;
    g_compute_hmac_for_bytes;
```

## 🍀 Testing

### File: testing

```cpp
    G_TEST_OPTION_ISOLATE_DIRS;
    g_test_minimized_result;
    g_test_maximized_result;
    g_test_init;
    g_test_initialized;
    g_test_quick;
    g_test_slow;
    g_test_thorough;
    g_test_perf;
    g_test_verbose;
    g_test_undefined;
    g_test_quiet;
    g_test_subprocess;
    g_test_run;
    GTestFunc;
    g_test_add_func;
    GTestDataFunc;
    g_test_add_data_func;
    g_test_add_data_func_full;
    g_test_add;
    g_test_get_path;

    GTestFileType;
    g_test_build_filename;
    g_test_get_filename;
    g_test_get_dir;

    g_test_fail;
    g_test_fail_printf;
    g_test_skip;
    g_test_skip_printf;
    g_test_incomplete;
    g_test_incomplete_printf;
    g_test_failed;
    g_test_message;
    g_test_bug_base;
    g_test_bug;
    g_test_summary;
    GTestLogFatalFunc;
    g_test_log_set_fatal_handler;

    g_test_timer_start;
    g_test_timer_elapsed;
    g_test_timer_last;

    g_test_queue_free;
    g_test_queue_destroy;
    g_test_queue_unref;

    g_test_expect_message;
    g_test_assert_expected_messages;

    GTestTrapFlags;
    GTestSubprocessFlags;
    g_test_trap_subprocess;
    g_test_trap_has_passed;
    g_test_trap_reached_timeout;
    g_test_trap_assert_passed;
    g_test_trap_assert_failed;
    g_test_trap_assert_stdout;
    g_test_trap_assert_stdout_unmatched;
    g_test_trap_assert_stderr;
    g_test_trap_assert_stderr_unmatched;
    g_test_trap_fork;
    g_test_disable_crash_reporting;

    g_test_rand_bit;
    g_test_rand_int;
    g_test_rand_int_range;
    g_test_rand_double;
    g_test_rand_double_range;

    g_assert;
    g_assert_not_reached;

    g_assert_cmpstr;
    g_assert_cmpstrv;
    g_assert_cmpint;
    g_assert_cmpuint;
    g_assert_cmphex;
    g_assert_cmpfloat;
    g_assert_cmpfloat_with_epsilon;
    g_assert_cmpmem;
    g_assert_cmpvariant;
    g_assert_no_error;
    g_assert_error;
    g_assert_true;
    g_assert_false;
    g_assert_null;
    g_assert_nonnull;
    g_assert_no_errno;
    g_test_set_nonfatal_assertions;

    GTestCase;
    GTestSuite;
    GTestFixtureFunc;
    g_test_create_case;
    g_test_create_suite;
    g_test_get_root;
    g_test_suite_add;
    g_test_suite_add_suite;
    g_test_run_suite;
    g_test_case_free;
    g_test_suite_free;
```

### Subsection Private

```cpp
    g_test_trap_assertions;
    g_assertion_message;
    g_assertion_message_expr;
    g_assertion_message_cmpstr;
    g_assertion_message_cmpint;
    g_assertion_message_cmpnum;
    g_assertion_message_error;
    g_test_assert_expected_messages_internal;

    g_test_config_vars;

    g_test_add_vtable;
    GTestConfig;
    GTestLogType;
    GTestLogMsg;
    GTestLogBuffer;
    GTestResult;

    g_test_log_type_name;
    g_test_log_buffer_new;
    g_test_log_buffer_free;
    g_test_log_buffer_push;
    g_test_log_buffer_pop;
    g_test_log_msg_free;
```

## 🍀 GVariantType

### File: gvarianttype

```cpp
    GVariantType;
    G_VARIANT_TYPE_BOOLEAN;
    G_VARIANT_TYPE_BYTE;
    G_VARIANT_TYPE_INT16;
    G_VARIANT_TYPE_UINT16;
    G_VARIANT_TYPE_INT32;
    G_VARIANT_TYPE_UINT32;
    G_VARIANT_TYPE_INT64;
    G_VARIANT_TYPE_UINT64;
    G_VARIANT_TYPE_HANDLE;
    G_VARIANT_TYPE_DOUBLE;
    G_VARIANT_TYPE_STRING;
    G_VARIANT_TYPE_OBJECT_PATH;
    G_VARIANT_TYPE_SIGNATURE;
    G_VARIANT_TYPE_VARIANT;
    G_VARIANT_TYPE_ANY;
    G_VARIANT_TYPE_BASIC;
    G_VARIANT_TYPE_MAYBE;
    G_VARIANT_TYPE_ARRAY;
    G_VARIANT_TYPE_TUPLE;
    G_VARIANT_TYPE_UNIT;
    G_VARIANT_TYPE_DICT_ENTRY;
    G_VARIANT_TYPE_DICTIONARY;
    G_VARIANT_TYPE_STRING_ARRAY;
    G_VARIANT_TYPE_OBJECT_PATH_ARRAY;
    G_VARIANT_TYPE_BYTESTRING;
    G_VARIANT_TYPE_BYTESTRING_ARRAY;
    G_VARIANT_TYPE_VARDICT;
```

```cpp
    G_VARIANT_TYPE;
    g_variant_type_free;
    g_variant_type_copy;
    g_variant_type_new;
```

```cpp
    g_variant_type_string_is_valid;
    g_variant_type_string_scan;
    g_variant_type_get_string_length;
    g_variant_type_peek_string;
    g_variant_type_dup_string;
```

```cpp
    g_variant_type_is_definite;
    g_variant_type_is_container;
    g_variant_type_is_basic;
    g_variant_type_is_maybe;
    g_variant_type_is_array;
    g_variant_type_is_tuple;
    g_variant_type_is_dict_entry;
    g_variant_type_is_variant;
```

```cpp
    g_variant_type_hash;
    g_variant_type_equal;
    g_variant_type_is_subtype_of;
```

```cpp
    g_variant_type_new_maybe;
    g_variant_type_new_array;
    g_variant_type_new_tuple;
    g_variant_type_new_dict_entry;
```

```cpp
    g_variant_type_element;
    g_variant_type_n_items;
    g_variant_type_first;
    g_variant_type_next;
    g_variant_type_key;
    g_variant_type_value;
```

## 🍀 GVariant

### File: gvariant

```cpp
    GVariant;
    g_variant_unref;
    g_variant_ref;
    g_variant_ref_sink;
    g_variant_is_floating;
    g_variant_take_ref;
    g_variant_get_type;
    g_variant_get_type_string;
    g_variant_is_of_type;
    g_variant_is_container;
    g_variant_compare;
```

```cpp
    g_variant_classify;
    GVariantClass;
```

```cpp
    g_variant_check_format_string;
    g_variant_get;
    g_variant_get_va;
    g_variant_new;
    g_variant_new_va;
```

```cpp
    g_variant_new_boolean;
    g_variant_new_byte;
    g_variant_new_int16;
    g_variant_new_uint16;
    g_variant_new_int32;
    g_variant_new_uint32;
    g_variant_new_int64;
    g_variant_new_uint64;
    g_variant_new_handle;
    g_variant_new_double;
    g_variant_new_string;
    g_variant_new_take_string;
    g_variant_new_printf;
    g_variant_new_object_path;
    g_variant_is_object_path;
    g_variant_new_signature;
    g_variant_is_signature;
    g_variant_new_variant;
    g_variant_new_strv;
    g_variant_new_objv;
    g_variant_new_bytestring;
    g_variant_new_bytestring_array;
```

```cpp
    g_variant_get_boolean;
    g_variant_get_byte;
    g_variant_get_int16;
    g_variant_get_uint16;
    g_variant_get_int32;
    g_variant_get_uint32;
    g_variant_get_int64;
    g_variant_get_uint64;
    g_variant_get_handle;
    g_variant_get_double;
    g_variant_get_string;
    g_variant_dup_string;
    g_variant_get_variant;
    g_variant_get_strv;
    g_variant_dup_strv;
    g_variant_get_objv;
    g_variant_dup_objv;
    g_variant_get_bytestring;
    g_variant_dup_bytestring;
    g_variant_get_bytestring_array;
    g_variant_dup_bytestring_array;
```

```cpp
    g_variant_new_maybe;
    g_variant_new_array;
    g_variant_new_tuple;
    g_variant_new_dict_entry;
    g_variant_new_fixed_array;
```

```cpp
    g_variant_get_maybe;
    g_variant_n_children;
    g_variant_get_child_value;
    g_variant_get_child;
    g_variant_lookup_value;
    g_variant_lookup;
    g_variant_get_fixed_array;
```

```cpp
    g_variant_get_size;
    g_variant_get_data;
    g_variant_get_data_as_bytes;
    g_variant_store;
    g_variant_new_from_data;
    g_variant_new_from_bytes;
    g_variant_byteswap;
    g_variant_get_normal_form;
    g_variant_is_normal_form;
```

```cpp
    g_variant_hash;
    g_variant_equal;
```

```cpp
    g_variant_print;
    g_variant_print_string;
```

```cpp
    GVariantIter;
    g_variant_iter_copy;
    g_variant_iter_free;
    g_variant_iter_init;
    g_variant_iter_n_children;
    g_variant_iter_new;
    g_variant_iter_next_value;
    g_variant_iter_next;
    g_variant_iter_loop;
```

```cpp
    G_VARIANT_BUILDER_INIT;
    GVariantBuilder;
    g_variant_builder_unref;
    g_variant_builder_ref;
    g_variant_builder_new;
    g_variant_builder_init;
    g_variant_builder_clear;
    g_variant_builder_add_value;
    g_variant_builder_add;
    g_variant_builder_add_parsed;
    g_variant_builder_end;
    g_variant_builder_open;
    g_variant_builder_close;
```

```cpp
    G_VARIANT_DICT_INIT;
    GVariantDict;
    g_variant_dict_unref;
    g_variant_dict_ref;
    g_variant_dict_new;
    g_variant_dict_init;
    g_variant_dict_clear;
    g_variant_dict_contains;
    g_variant_dict_lookup;
    g_variant_dict_lookup_value;
    g_variant_dict_insert;
    g_variant_dict_insert_value;
    g_variant_dict_remove;
    g_variant_dict_end;
```

```cpp
    GVariantParseError;
    G_VARIANT_PARSE_ERROR;
    g_variant_parse;
    g_variant_new_parsed_va;
    g_variant_new_parsed;
    g_variant_parse_error_print_context;
```

### Subsection Private

```cpp
    g_variant_parse_error_quark;
    g_variant_parser_get_error_quark;
    g_variant_type_checked_;
    g_variant_type_string_get_depth_;
```

## 🍀 Hostname Utilities

### File: ghostutils


```cpp
    g_hostname_to_ascii;
    g_hostname_to_unicode;
    g_hostname_is_non_ascii;
    g_hostname_is_ascii_encoded;
    g_hostname_is_ip_address;
```

## 🍀 GUuid

### File: uuid

```cpp
    g_uuid_string_is_valid;
    g_uuid_string_random;
```

### File: refcount

```cpp
    grefcount;
    g_ref_count_init;
    g_ref_count_inc;
    g_ref_count_dec;
    g_ref_count_compare;

    G_REF_COUNT_INIT;
```

### Subsection

```cpp
    gatomicrefcount;
    g_atomic_ref_count_init;
    g_atomic_ref_count_inc;
    g_atomic_ref_count_dec;
    g_atomic_ref_count_compare;
    G_ATOMIC_REF_COUNT_INIT;
```

### File: rcbox

```cpp
    g_rc_box_alloc;
    g_rc_box_alloc0;
    g_rc_box_new;
    g_rc_box_new0;
    g_rc_box_dup;
    g_rc_box_acquire;
    g_rc_box_release;
    g_rc_box_release_full;
    g_rc_box_get_size;
```

### File: arcbox

```cpp
    g_atomic_rc_box_alloc;
    g_atomic_rc_box_alloc0;
    g_atomic_rc_box_new;
    g_atomic_rc_box_new0;
    g_atomic_rc_box_dup;
    g_atomic_rc_box_acquire;
    g_atomic_rc_box_release;
    g_atomic_rc_box_release_full;
    g_atomic_rc_box_get_size;
```

### File: refstring

```cpp
    GRefString;
    g_ref_string_new;
    g_ref_string_new_intern;
    g_ref_string_new_len;
    g_ref_string_acquire;
    g_ref_string_release;
    g_ref_string_length;
```

### File: gpathbuf

```cpp
    GPathBuf;
    G_PATH_BUF_INIT;
    g_path_buf_new;
    g_path_buf_new_from_path;
    g_path_buf_init;
    g_path_buf_init_from_path;
    g_path_buf_clear;
    g_path_buf_clear_to_path;
    g_path_buf_free;
    g_path_buf_free_to_path;
    g_path_buf_push;
    g_path_buf_pop;
    g_path_buf_set_filename;
    g_path_buf_set_extension;
    g_path_buf_to_path;
    g_path_buf_copy;
    g_path_buf_equal;
```
