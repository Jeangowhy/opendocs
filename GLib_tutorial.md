
# 📜 Msys2 Packages

GNU Make 不像 CMake 等现代的自动化构建工具，内部提供了基本的网络功能。但是，Make 可以通过 shell 与各种工具进行配合作战，一点不影响它发挥 Makefile 脚本的功能性。另外，Make 插件接口可以很方便接入 C/C++ 编写的程序，但是通常不需要这样做。直接通过 shell 配合 Node 或者 Deno 等开发平台，或者直接使用的命令行工具，如 curl 和 wget 等等就可以很好地完成网络访问功能。

关于 curl 和 wget，它们都是网络访问工具，前者依赖 libcurl，后者独立，都支持文件上传下载，分别使用 -F 和 --post-file 参数上传文件。另外，curl 默认输出到 stdout，wget 则是输出到文件，可以通过 -o stdout 重定向到标准输出文件。

curl 通用性较好，并且支持常见的协议：FTP, FTPS, GOPHER, HTTP, HTTPS, SCP, SFTP, TFTP, TELNET, DICT, LDAP, LDAPS, FILE, POP3, IMAP, SMTP, RTMP and RTSP。wget 支持 HTTP, HTTPS and FTP。https://eternallybored.org/misc/wget/

```sh
curl https://packages.msys2.org/api/search?query=pkg-config
curl -o pkg-config.json https://packages.msys2.org/api/search?query=pkg-config
wget -q -O    - https://www.gnu.org/software/make/manual/html_node/index.html
wget -q -o stdout https://www.gnu.org/software/make/manual/html_node/index.html
wget -r -l=1 -L https://www.gnu.org/software/make/manual/html_node/index.html
```

当然，这些工具限制性较多，适用于简单的静态页面处理，这些下载工具非常专职，没有多线程模式，make 提供的多进程构建功能就可以很好地实现多线程下载。另外使用 Node 或者 Deno 平台，或者是 Python 等等，使用异步 I/O 就可以很方便实现类型多线程下载的功能。但是别忘了，这里是《面向 Makefile 编程》，并且 wget 不会检查是否已经下载过文件。

另外，wget 实现了递归下载功能，很像曾经的 webzip 网站打包软件，可以下载页面上匹配条件的链接文件。需要使用 -l 和 -np 参数来避免下载整个站点，除非确实是这样的目的：

    -r 或者 -recursive 激活递归下载；
    -l, --level=Number 设置递归深度，比如 -l=2；
    -L, --relative 只跟随相对路径，避免下载到整个站点的文件；
    -np, --no-parent 递归下载时不搜索上层目录；
    -nd, --no-directories不创建层级目录，统一存放到当前目录；  
    -k, –convert-links 下载页面后将内容链接地址转换为相对链接，方便本地打开；
    -p, --page-requisties 下载网页使用到的文件，如图片、样式表、脚本等；
    -A, --accept=List 指定要下载的文件类型列表，用逗号分隔；  
    -R, --reject=List 指定不要下载的文件类型列表，用逗号分隔；  

使用 make 多进程下载，首先就必需“搞”到文件链接地址列表。但是 make 虽然天生就是处理字符串的宏编程工具，但是它是专职于构建系统的，提供的字符串处理函数也是基于文件名的处理。即使是其内置的 patsust 字符串替换函数，也只是按“空格”、“Tab”或“换行”作为分隔的列表进行字符串的替换操作，本身不提供向字符串插入功能字符的功能，如插入换行符这种操作是不能够的。

因此，在处理 JSON 这样的数据时需要使用 jq 这样的外部工具来打配合，或者更自由的方案是编写 Node 或者 Deno 等等平台的 JavaScript/TypeScript 脚本扩展。JSON 作为一个通用数据格式规范，应该领域非常广泛，个人认为它的价值超过 XML 格式，至少比 XML 节能多了。 https://jqlang.github.io/jq/

jq 是命令行工具，它可以格式化 json 数据，也可以指定 filter 过滤器来查询 json 中对应的数据。jq 的目标是要做 JSON 数据的查询语言，就像数据库使用的 SQL 语言一样。最基本的就是 . 这个过滤器，它表示等值，输入什么就输出什么。然后就是各种获取指定数据的过滤器，这里介绍几种最基础最常用的：

1. Object Identifier-Index: .string
2. Object Index: [string]
3. Array Index: [number]
4. Array/Object Value Iterator: .[]  .[]? 
5. Array/String Slice: .[<number>:<number>]
6. Array construction: []
7. Object Construction: {}
8. Recursive Descent: ..

重新映射指定字段，构造输出 JSON，逻辑是先选择数据集再使用管道挑选需要的字段，管道有省略形式的表达，`.a.b.c` 的等价表达是 `.a | .b | .c`。另外，还支持使用函数，或者：

```sh
    jq '.[] | {myfile: .target.filed, myfile2: .target.filed2 }'
    jq '.[] | length'

    echo [{"foo": 42}, {}] | jq 'map(has("foo"))'   # Output  [true, false]
    echo  [[0,1], ["a","b","c"]] | jq 'map(has(2))' # Output  [false, true]

    curl https://packages.msys2.org/api/search?query=jq | \
    jq '[.results.exact, .results.other[] | {n: .realname, r: .repos}]'
```

1. https://jqlang.github.io/jq/tutorial/
2. https://jqlang.github.io/jq/manual/
3. https://github.com/jqlang/jq/blob/master/docs/content/manual/v1.7/manual.yml

官方教程示范： 

    curl 'https://api.github.com/repos/jqlang/jq/commits?per_page=5' | jq '.'

    jq '[.[] | {message: .commit.message, name: .commit.committer.name, parents: [.parents[].html_url]}]'

```json
"parents": [
  {
    "sha": "f2ad9517c72f6267ae317639ab56bbfd4a8653d4",
    "url": "https://api.github.com/repos/jqlang/jq/commits/f2ad9517c72f6267ae317639ab56bbfd4a8653d4",
    "html_url": "https://github.com/jqlang/jq/commit/f2ad9517c72f6267ae317639ab56bbfd4a8653d4"
  }
]
```


示范使用 curl 和 jq 处理 Msys2 软件包 API 接口数据，接口返回 JSON 数据会包含软件包在 Msys2 数据库中的精确匹配、模糊匹配到的名字，：

    {"query":"pkg-config","qtype":"pkg","results":{"exact":{"name":"mingw-w64-pkg-config"...

如果 json 文件已经下载到本地还可以直接使用 more or less 命令配合管道操作符将文件内容传递给 jq 命令进行解析，以下命令提供参考，最终输出结果是 "mingw-w64-pkg-config"：

```sh
curl https://packages.msys2.org/api/search?query=jq | jq .results.exact.name
curl https://packages.msys2.org/api/search?query=pkg-config | jq .results.exact.name
more pkg-config.json | jq .results.exact.name
less pkg-config.json | jq .results.exact.name
```

秉承生命就是折腾的原则，这里不使用 pacman 这么好用的软件包管理工具，因为它确实太好用了，我就想用 Makefile 锤它。

Msys2 虽然提供了一套 API，但是提供的功能太简单了，只负责查软件包的名字，至于其依赖还得通过返回的 JSON 数据去对应的 Web 页面上找。因为，其本身提供的 Pacman 就提供了自动依赖处理功能。

既然决定要用 Makefile 这把锤，那么就用尝试用 Node.js 给它装上舒服一点的锤把手：编写一个模块脚本处理 Web 页面的文件链接地址列表。

Node 模块实现代码放到面，现在来实现 Makefile 脚本：

1. 定义了 Trace 调试宏函数，设置 TRACE 变量就可以激活它打印函数调用信息；
2. 定义了 counter 计数器，此函数借用了 shell 环境中的 $((a+b)) 算术语法；
3. 定义了一个 PACKGE 指定记录等下载的文件列表，列表使用 file 读取；
4. 每个待下载文件将使用静态匹配规则映射为使用 foeach 生成的 pkg1 pkg2 pkg3 ...；
5. 获取文件列表使用 %.init 规则，调用 shell 命令执行 Node 的 JavaScript 脚本获得；

counter 计数器将用来映射 PACKAGE 文件列表，每一个行使用前缀名 pkg 加序号表示，映射后的名称就可以作为规则中的 Target 命令使用，因为所以文件没有依赖关系，都是独立的构建目标。通过 -jN 指定 Makefile 运行的进程数据，即可以实现多进程下载。但有一个问题：如果手动更新列表文件，那么 Makefile 脚本执行时就会执行初始目标的构建，去调用外部脚本获取新的列表： 

    make clean
    make init
    make download -j8

```makefile
# TRACE = 1
ifdef TRACE
Trace = $(warning $0('$1','$2'))
else
Trace :=
endif

# $(call counter, 1) = 1
# $(call counter, 2) = 3
# $(call counter,-3) = 0
counter = $(Trace)$(strip $(eval ID=$$(shell echo $$$$(( $1+$(if $($0_ID),$($0_ID),0) )) )) \
        $(eval $0_ID=$(ID)) $(ID) )

PACKAGE = packages.mk

all: download

download : init $(foreach X,$(file < $(PACKAGE)),pkg$(call counter,1))
    @echo "All packages: $^"

pkg% : init
#   @echo "💻simu-download: $(word $*,$(file < $(PACKAGE)))"
    @echo "💻simu-download: $@"
    @sleep 0.5

init : pkg-config jq

pkg-config jq : % : %.init
    @echo "|||$@"

%.init : $(PACKAGE)
    @echo "init: $@ "
    $(shell node.exe msys2pac.js mingw64 "$*" >> $(PACKAGE))
    touch $*.init

$(PACKAGE) :
    @echo "clear $(PACKAGE)"
    $(shell echo "" > $(PACKAGE))

clean : 
    $(RM) pkg-config.init jq.init $(PACKAGE)
```


## 📜 Mysy2 with pkg-config

这里给 Msys2 作个简要介绍，并说明如何从 Cygwin 发展到 MinGW，再到 Msys2 交叉编译环境。
https://www.msys2.org/docs/what-is-msys2/

1995 年 Cygnus 工程师 Steve Chamberlain 发现 Windows 系统使用的 COFF 目标文件，即可执行文件格式，与此同时 GNU 的工具链已经支持 x86 和 COFF 的目标文件，并提供 C 语言库 newlib，这是嵌入式系统上的 C 标准库的实现。他认为既然 GNU 的工具链已经能够编译生成 x86 指令集的机器码，并可链接生成 COFF 格式的目标文件，而且还提供可移植到任意平台的 C 标准库 newlib, 那么理论上只要将 GCC 根据对应目标平台重新编译，重定向作为一个交叉编译器。那么这个 GCC 编译器可以生成 Windows 平台下的可执行文件。Steve Chamberlain 开发出原型，将他这个项目命名为 Cygwin。

Cygwin 的编译和调用方式需要依赖一层 POSIX 到 Windows API 的中间层，比起日渐庞大的 Cygwin, 或许一个最小化且不需要中间层 GNU 工具链更能满足一些开发的需求, 于是 Colin Peters 在 1998 年创建了一个开源项目并撰写了最初的版本，将其命名为 mingw32 (Minimalist GNU for W32)。其意思就是 Windows 上的最小化 GNU 工具链，Windows 简称为 W32。后来为了避免暗示它仅限于生成 32 位二进制文件，就移除名称中的 32 变成 MinGW。

Msys 2.0 也是为 Windows 系统提供 Unix 类系统编译环境的基础平台软件，它是基于现代 Cygwin 和 MinGW，对 MSys 的独立重写版本。MSYS2 vs Cygwin，MSYS2 中的 Unix 类工具直接基于 Cygwin，因此两者存在一些功能重叠。Cygwin 专注于在 Windows 上按原样构建 Unix 软件，MSYS2 则专注于构建基于 Windows API 的本地软件。也就是说，Cygwin 移植更彻底，这就是为何 Cygwin POSIX 到 Windows 的中间层特别巨大。

有了 Msys2 就可以在 Windows 开发 Unix 应用程序，并构建出可以运行在 Windows 系统环境中的应用程序。Msys2 本身基于 Cygwin 构建，结合了 Arch Linux 的 pacman 依赖管理工具，使用它可以很方便地安装需要的组件，比如 ARM 嵌入式开发需要使用 GCC 交叉编译。

MSYS2 提供一个 Unix 类系统环境外，还有 shell 命令行界面和软件库，使得在 Windows 上安装、使用、构建和移植软件更加容易。这意味着 Bash, Autotools, Make, Git, GCC, GDB 等等 GNU 软件都可以通过 Pacman 软件包管理工具进行安装。

比如，安装 pkg-config 应用就可以执行以下命令安装，这是一个开发环境的依赖处理工具，可以用它来检测依赖库文件的位置信息，并生成 GCC 或 MSVC 编译器命令行参数：

```sh
pacman -S pkg-config
pkg-config --cflags --short-errors "guile-3.0"
# -IC:/MinGW/include/guile/3.0 -I/usr 
pkg-config --libs --static --short-errors --msvc-syntax "guile-2.0"
# /libpath:C:/MinGW/lib /libpath:d:/usr/lib /libpath:$(libdir) /libpath:d:/usr/lib 
# guile-2.0.lib gc.lib gmp.lib ltdl.lib ffi.lib unistring.lib intl.lib iconv.lib crypt.lib ws2_32.lib m.lib 
```

Msys2 基础软件仓库有三个：

1. msys2: MSYS2-dependent software
2. mingw64: 64-bit Windows 原生应用程序，使用 mingw-w64 x86_64 编译工具链编译；
3. mingw32: 32-bit Windows 原生应用程序，使用 mingw-w64 i686 编译工具链编译；

目前，已经发展出包括 LLVM 编译工具链的共 7 大软件仓库，它们的软件包命名规则如下：

    |            | Prefix      | Name         | Package prefix      
    | ---------- |---------| ------------ |-------------- |      
    | msys       | /usr       | MSYS        | None      
    | mingw64    | /mingw32   | MINGW64     | mingw-w64-x86_64-      
    | ucrt64     | /mingw64   | UCRT64      | mingw-w64-ucrt-x86_64-      
    | clang64    | /ucrt64     | CLANG64     | mingw-w64-clang-x86_64-      
    | mingw32    | /clang64    | MINGW32     | mingw-w64-i686-      
    | clang32    | /clang32    | CLANG32     | mingw-w64-clang-i686-      
    | clangarm64 | /clangarm64 | CLANGARM64  | mingw-w64-clang-aarch64-      

     Name: environment variable MSYSTEM 
     Package: environment variable MINGW_PACKAGE_PREFIX

为了避免使用长前缀名，可以使用 bash pacboy 脚本替代 pacman 执行软件包安装，在软件包名指定一个简写后缀即可：

    For 64-bit MSYS2 shell:
        name:i means i686-only
        name:x means x86_64-only
        name:z means clang-i686-only
        name:c means clang-x86_64-only
        name:u means ucrt-x86_64-only
        name:a means clang-aarch64-only
        name:p means MINGW_PACKAGE_PREFIX-only
    For MSYS shell:
        name:m means mingw-w64
        name:l means mingw-w64-clang

    For all shells:
        name: disables any translation for name

Pacboy 脚本可能需要通过 pacman 安装，如果不默认没有提供；

```sh
> pacman -S pactoys
> bash pacboy -S jq:x
resolving dependencies...
looking for conflicting packages...

Packages (4) mingw-w64-x86_64-gcc-libs-13.2.0-2
             mingw-w64-x86_64-libwinpthread-git-11.0.0.r147.gddc5b0f6e-1
             mingw-w64-x86_64-oniguruma-6.9.8-1
             mingw-w64-x86_64-jq-1.7-1

Total Download Size:   1.52 MiB
Total Installed Size:  6.18 MiB

:: Proceed with installation? [Y/n] y
```

1. https://www.msys2.org/docs/pkgconfig/
2. https://www.msys2.org/dev/build-process/

MSYS2 shells 默认会设置以下环境变量以支持 pkgconf，这是 Msys2 中实现 pkg-confg 的依赖管理软件：

    PKG_CONFIG_PATH - e.g. /ucrt64/lib/pkgconfig:/ucrt64/share/pkgconfig
    PKG_CONFIG_SYSTEM_INCLUDE_PATH - e.g. /ucrt64/include
    PKG_CONFIG_SYSTEM_LIBRARY_PATH - e.g. /ucrt64/lib

Msys2 中涉及 Prefix / Relocation，因为 Unix 类系统中 /usr 这样的路径在 Windows 系统上无效。在依赖包配置文件 .pc 中通常会包含以下内容：

    prefix=/ucrt64
    includedir=${prefix}/include
    libdir=${prefix}/lib

可以看到 /ucrt64 这不是一个有效的 Windows 路径，这不是主要问题，它会被忽略，会根据 pkgconfig 或 pkg-config 路径中的 .pc 信息文件的路径来检测 Msys2 的顶级目录以替代默认路径前缀。

假设配置文件存在 C:/msys64/ucrt64/lib/pkgconfig/glib-2.0.pc 就会取其  C:/msys64/ucrt64 作为真正的路径前缀，滤除 lib 目录之后的内容，这个目录对应 Msys2 其中一个软件仓库，基于 VS Stuio 的通用运行时编译的软件包。使用 --dont-define-prefix 参数，可以让 pkgconf 禁用这个默认前缀处理特性。

前缀路径重定向处理依赖于 ${prefix} 变量，就像以上所述，但是以下这种硬编码的绝对路径就不支持：

```sh
    prefix=/ucrt64
    includedir=/ucrt64/include
    libdir=/ucrt64/lib
```

因此，pkg-config 和 pkgconf 都包含一个 hack 功能，以处理像以上这种使用绝对路径的目录前缀，/ucrt64/include 替换为 ${prefix}/include，使它可以重新定向。
https://www.bassi.io/articles/2018/03/15/pkg-config-and-paths/

以上前缀目录重定向逻辑不能在 .pc 文件安装到自定义目录的情况下生效，比如，安装到 /lib/mylib-1.2/pkgconfig，这会导致错误的目录前缀值。

依赖库默认会将自身的 .pc 信息文件存入 /lib/pkgconfig 或者 /share/pkgconfig目录，默认的依赖包信息由此读取。可以向 PKG_CONFIG_PATH 等环境变量添加额外的依赖库搜索目录。


https://people.freedesktop.org/~dbn/pkg-config-guide.html
GLib 基础库中的 glib-2.0.pc 配置参考：

```sh
prefix=/usr
includedir=${prefix}/include
libdir=${prefix}/lib

bindir=${prefix}/bin
glib_genmarshal=${bindir}/glib-genmarshal
gobject_query=${bindir}/gobject-query
glib_mkenums=${bindir}/glib-mkenums

Name: GLib
Description: C Utility Library
Version: 2.76.5
Requires.private: libpcre2-8 >= 10.32
Libs: -L${libdir} -lglib-2.0 -lintl
Libs.private: -luser32 -lkernel32 -liconv -lm -pthread
Cflags: -I${includedir}/glib-2.0 -I${libdir}/glib-2.0/include
```

    --variable=NAME                 get the value of variable named NAME
    --define-variable=NAME=VALUE    set variable NAME to VALUE
    --print-variables               output list of variables defined by the module
    --prefix-variable=PREFIX        set the name of the variable that pkg-config automatically sets

使用 pkg-config 检测指定依赖库所指定的目录前缀，以及使用 define-variable 覆盖依赖库 .pc 文件的默认设置：

```sh
pkg-config --variable=prefix glib-2.0
# C:/MinGW
pkg-config --print-errors --define-variable=prefix=/foo --variable=prefix glib-2.0
# /foo
pkg-config --print-variables 'glib-2.0'
# bindir
# glib_genmarshal
# glib_mkenums
# gobject_query
# includedir
# libdir
# pcfiledir
# prefix
```

使用 pkg-config 检测依赖库是否已经安装，如果有安装就返回 0 值，--print-errors 可以打印错误信息，--list-all 查询已经安装的、可以通过搜索目录搜到 .pc 信息的依赖库：

```sh
pkg-config --print-errors --exists 'glib-2.0 >= 1.3.4'
pkg-config --exists 'glib-2.0 >= 1.3.4 libxml = 1.8.3'
pkg-config --exists 'glib-2.0 >= 1.3.4 libxml = 1.8.3'
pkg-config --list-all
```

## 📜 pkg-config CLI

Environment Variables
https://man.archlinux.org/man/pkgconf.1.en

*PKG_CONFIG_PATH*
    A colon-separated (on Windows, semicolon-separated) list of directories to search for .pc files. The default directory will always be searched after searching the path; the default is `libdir/pkgconfig:datadir/pkgconfig` where libdir is the libdir where pkg-config and datadir is the datadir where pkg-config was installed.

*PKG_CONFIG_DEBUG_SPEW*
    If set, causes pkg-config to print all kinds of debugging information and report all errors.

*PKG_CONFIG_TOP_BUILD_DIR*
    A value to set for the magic variable pc_top_builddir which may appear in .pc files. If the environment variable is not set, the default value '$(top_builddir)' will be used. This variable should refer to the top builddir of the Makefile where the compile/link flags reported by pkg-config will be used. This only matters when compiling/linking against a package that hasn't yet been installed.

*PKG_CONFIG_DISABLE_UNINSTALLED*
    Normally if you request the package "foo" and the package "foo-uninstalled" exists, pkg-config will prefer the "-uninstalled" variant. This allows compilation/linking against uninstalled packages. If this environment variable is set, it disables said behavior.

*PKG_CONFIG_ALLOW_SYSTEM_CFLAGS*
    Don't strip -I/usr/include out of cflags.

*PKG_CONFIG_ALLOW_SYSTEM_LIBS*
    Don't strip -L/usr/lib out of libs

*PKG_CONFIG_SYSROOT_DIR*
    Modify -I and -L to use the directories located in target sysroot. this option is usefull when crosscompiling package that use pkg-config to determine CFLAGS anf LDFLAGS. -I and -L are modified to point to the new system root. this means that a -I/usr/include/libfoo will become -I/var/target/usr/include/libfoo with a PKG_CONFIG_SYSROOT_DIR equal to /var/target (same rule apply to -L)

*PKG_CONFIG_LIBDIR*
    Replaces the default pkg-config search directory.


Usage:
  pkg-config.exe [OPTION...]

Help Options:
  -h, --help                              Show help options

Application Options:
  --version                               output version of pkg-config
  --modversion                            output version for package
  --atleast-pkgconfig-version=VERSION     require given version of pkg-config
  --libs                                  output all linker flags
  --static                                output linker flags for static linking
  --short-errors                          print short errors
  --libs-only-l                           output -l flags
  --libs-only-other                       output other libs (e.g. -pthread)
  --libs-only-L                           output -L flags
  --cflags                                output all pre-processor and compiler flags
  --cflags-only-I                         output -I flags
  --cflags-only-other                     output cflags not covered by the cflags-only-I option
  --variable=NAME                         get the value of variable named NAME
  --define-variable=NAME=VALUE            set variable NAME to VALUE
  --exists                                return 0 if the module(s) exist
  --print-variables                       output list of variables defined by the module
  --uninstalled                           return 0 if the uninstalled version of one or more module(s) or their dependencies will be used
  --atleast-version=VERSION               return 0 if the module is at least version VERSION
  --exact-version=VERSION                 return 0 if the module is at exactly version VERSION
  --max-version=VERSION                   return 0 if the module is at no newer than version VERSION
  --list-all                              list all known packages
  --debug                                 show verbose debug information
  --print-errors                          show verbose information about missing or conflicting packages (default unless --exists or --atleast/exact/max-version given on the command line)
  --silence-errors                        be silent about errors (default when --exists or --atleast/exact/max-version given on the command line)
  --errors-to-stdout                      print errors from --print-errors to stdout not stderr
  --print-provides                        print which packages the package provides
  --print-requires                        print which packages the package requires
  --print-requires-private                print which packages the package requires for static linking
  --validate                              validate a package's .pc file
  --define-prefix                         try to override the value of prefix for each .pc file found with a guesstimated value based on the location of the .pc file
  --dont-define-prefix                    don't try to override the value of prefix for each .pc file found with a guesstimated value based on the location of the .pc file
  --prefix-variable=PREFIX                set the name of the variable that pkg-config automatically sets
  --msvc-syntax                           output -l and -L flags for the Microsoft compiler (cl)


## 📜 Node.js Module for Make


这里使用 Node 进行 JavaScrip/TypesScript 脚本编程需要了解决的一些基本概念：

1. 每个 .js 脚本文件就是一个 Node 模块；
2. 每个脚本模块在 Node 加载运行时，会通过模块加载器传入以下参数：
3. process 引用当前 Node 进程，可以通过它获取当前运行环境信息，包括命令行参数；
4. module 当前模块的引用，它包含 exports 变量，用于导出模块中需要导出的符号；

https://nodejs.org/api/packages.html#package-entry-points
因为只使用一个脚本模块就可以配合 Makefile 脚本完成任务，所以不需要创建 package.json 进行工程管理设置，也不需要设置工程的入口脚本和导出文件，"main" and "exports"。

命令行参数保存在 `process.argv` 变量，是字符串列表，首个元素即 0 号索引对应的是 Node 进程文件路径，其次是当前脚本模块路径，后面是其它命令行参数。使用 `length` 属性可以获取命令行参数数量，甚至还可以使用 `Object.keys(process.argv).length`。

Node 模块没有默认入口函数，将模块脚本传递给 node 命令就执行它，如果执行取决于模块代码逻辑。但是有一个默认导出符号 exports.default，默认导出符号和 exports 其它所有导出符号构成整个模块的可以供外部调用的接口。使用 require() 方法就可以引用其它脚本模块，或者在最新版本中，使用 import 引用 ESM 规范模块。

Node v12.0.0 引入参数来指定输入的模块规范类型，例如，指定为 ESM 模块输入，这样就可以在顶级代码块中使用 await 异步编程：

    node --input-type=commonjs --eval='((msg)=>console.log({msg}))("Hello!")'
    node --input-type=module --eval='await ((msg)=>console.log({msg}))("Hello!")'

https://nodejs.org/api/packages.html#--input-type-flag
Use mjs extension or type:"module" in package.json, to use import/export.
CommonJS is Node default setting, use cjs extension or type:"commonjs" to use require/module.exports.

以下为 Node 脚本模拟扩展，供 Make 调用以获取 Msys2 软件仓库中软件包以及依赖包下载地址，暂时命名为 msys2pac.js，和 Makefile 脚本中调用一致即可。此脚本将近 200 行，对于《面向 Makefile 编程》来说，有点“夺目”了。这里就作一个简单的说明：

1. 脚本中设置了一个 help() 函数，在输入参数不正确时提示使用方法；
2. 脚本中使用了 Fetch API，这是 Node 试用特性，为了消隐警告信息重置了 warning 事件；
3. Prefix ApiInfo PackageInfo 等等都用于说明 Msys2 API 接口返回的 JSON 数据结构引入的类型定义，目标是为启用 TypeScript LSP 服务智能提示参考；

以上这些辅助性功能就占据脚本将近一半，接下来主要是三个功能函数，用于查询软件包归属的分类，并分类页面提供的地址去提供出 Web 页面的下载地址。因为依赖关系是多层的，脚本中设置了 3 层页面跳转。脚本并不一定处理好所有依赖包，目前只处理了常规的依赖包页面，还有 Virtual Package，至于会不会有其它特殊的页面还不清楚，这可能会导致脚本运行报错，就需要根据具体问题进行处理。

    async function search_api(pkg)
    async function packages_list(pkg, repo, maxLevel=3)
    async function packages_recursive(url, level) 


```ts
// Filter Msys2 Package File and Dependencies
const path = require('node:path')
const fs = require('node:fs')
const { stdin, stdout } = require('node:process')

const argc = Object.keys(process.argv).length
const script = path.basename(process.argv[1])
const DOESNT = "Package doesn't exist"
const VIRTUAL_PACKAGE = "Virtual Package"

function help() {
    console.info(`Usage of ${script}:
----------------------------
    node msys2pac.js repo msys2_package_name

    where repo can be:
    1. ${Prefix.repo_clang32} ( prefix: ${Prefix.prefix_clang32} )
    2. ${Prefix.repo_clang64} ( prefix: ${Prefix.prefix_clang64} )
    3. ${Prefix.repo_clangarm64}( prefix: ${Prefix.prefix_clangarm64})
    4. ${Prefix.repo_mingw32} ( prefix: ${Prefix.prefix_mingw32} )
    5. ${Prefix.repo_mingw64} ( prefix: ${Prefix.prefix_mingw64} )
    6. ${Prefix.repo_ucrt64} ( prefix: ${Prefix.prefix_ucrt64} )

    ex.
    node msys2pac.js ${Prefix.repo_mingw64} jq
    `)
}

// Replce default warning event handler, and comstom it to skip known warnings
process.removeAllListeners('warning');
process.on('warning', (warning) => {
  let { name, message } = warning;
  if (name === 'ExperimentalWarning' && message.indexOf('Fetch API') > -1)
    return;
  if (name === 'DeprecationWarning' && message.indexOf('Obsolete loader hook') > -1)
    return;

  console.warn({warning});
});

class Prefix {
    static arch_x86_64 = "x86_64"
    static arch_i686 = "i686"
    static arch_aarch64 = "aarch64"
    static repo_clang32 = 'clang32'
    static repo_clang64 = 'clang64'
    static repo_clangarm64 = 'clangarm64'
    static repo_mingw32 = 'mingw32'
    static repo_mingw64 = 'mingw64'
    static repo_ucrt64 = 'ucrt64'
    static prefix_msys2 = "mingw-w64"
    static prefix_clang32 = "clang-i686"
    static prefix_clang64 = "clang-x86_64"
    static prefix_clangarm64 = "clang-aarch64"
    static prefix_mingw32 = "i686"
    static prefix_mingw64 = "x86_64"
    static prefix_ucrt64 = "ucrt-x86_64"
    static repo_list() { 
        return [ Prefix.repo_clang32, Prefix.repo_clang64, Prefix.repo_clangarm64, 
               Prefix.repo_mingw32, Prefix.repo_mingw64, Prefix.repo_ucrt64,]
    } 
}

class ApiInfo {
    query = "string"
    qtype = "string"
    results = { exact: new PackageInfo, other: [new PackageInfo] }
}

class PackageInfo {
    name = "string"
    realname = "string"
    url = "string"
    version = "string"
    descriptions = "string"
    arches = ["string"]
    repos = ["string"]
    source_url = ["string"]
    build_date = "integer"
    licenses = ["string"]
    groups = ["string"]
}


/** 
 * @param {string} pkg
 * @return {Promise<{exact: PackageInfo, other:PackageInfo[]}>}
 */
async function search_api(pkg) {
    const url = `https://packages.msys2.org/api/search?query=${pkg}`
    return await fetch(url).then(res=>{
        return res.json()
    }).then( (/** @type {ApiInfo} */ json)=>{
        // if (Object.keys(json.results.exact).length===0) {
        //     throw DOESNT+' '+pkg;
        // }
        return json.results
    }).catch(error=>{
        console.warn( {url, pkg, error} )
        Promise.reject('search_api()') 
    }) 
}

/**
 * @param {string} pkg
 * @param {string} repo
 * @return {Promise<string[]>} list
 */
async function packages_list(pkg, repo, maxLevel=3) {
    const repo_ = Prefix["prefix_"+repo]
    const msys_ = Prefix.prefix_msys2
    const url = `https://packages.msys2.org/package/${msys_}-${repo_}-${pkg}?repo=${repo}`
    return await packages_recursive(url, maxLevel-1)
}

async function packages_recursive(url, level) {
    return await fetch(url).then(res=>{
        return res.text()
    }).then( async text=>{
        if (text.indexOf(DOESNT) > -1) {
            throw DOESNT
        }
        if (text.indexOf(VIRTUAL_PACKAGE) > -1) {
            try {
                const file = text.split('Provided By:')[1].split(/href=["']/)[1].split(/['"]/)[0]
                if (level > 0) {
                    return packages_recursive(file, level-1)
                } else {
                    return [file]
                }
            } catch (ex) { throw ex }
        }
        try {
            const file = text.split(/File:/)[1].split(/href="/)[1].split(/'|"/)[0]
            const deps = text.split('Dependencies:')[1].split('</ul>')[0].matchAll(/http[^"'>]+/g)
            const list = [file]
            for( let it of deps) {
                if( level > 0 ) {
                    try {
                        const cds = await packages_recursive(it[0], level-1)
                        list.push(...cds)
                    } catch (ex) {
                        list.push(ex)
                    }
                } else {
                    list.push( it[0] )
                }
            }
            return list
        } catch ( /** @ts-check {Error} */ ex ) {
            throw ex
        }
    }).catch(error=>{
        console.warn( {url, level, error} )
        Promise.reject('package_list()') 
    }) 
}


const repo = process.argv[2]
const pkg = process.argv[3]

if (process.argv.length!==4) {
    help();
} else if ( Prefix.repo_list().indexOf(repo) !== -1) {
    (async ()=> {
        const res = await search_api(pkg)
        if ( Object.keys(res.exact).length && res.exact.repos.indexOf(repo) > -1) {
            const list = await packages_list(pkg, repo);
            stdout.write(list.join('\n')+"\n")
        } else {
            console.warn("No match version: ", repo, pkg)
            console.log( JSON.stringify(res) )
        }
    })()
} else {
    console.log( "Not a vaild input:", process.argv[2])
    help()
}

```



# 📜 GLib–2.0 前置教程：Msys + Meson 构建工具


研究开源库过程中养成了一个不知是好是坏的习惯（自觉更能进入心流状态），那就是首先分析源代码中的开源文档结构。通常，官方文档是研究开源库的第一手资料，其次是搜索引擎能找到的优质资料，之所以强制优质，是因为现代社会制造垃圾信息的成本太低了。换个“不恰当”的说法就是：造谣一张嘴，辟谣跑断腿！

可以从 gitlab.gnome.org 上下载到 glib2 框架源代码，感谢 GTK+ 开发团队提供高质量的开源文档。源代码使用基于 Python 3 +
Ninja 组合实现的 meson 作为构建工具，默认以 meson.build 为配置脚本，Meson Build system 工作模式类似 CMake：

```sh
# https://github.com/ninja-build/ninja/archive/refs/tags/v1.11.1.zip
# https://github.com/ninja-build/ninja/releases/download/v1.11.1/ninja-win.zip
# https://mesonbuild.com/Quick-guide.html
# https://github.com/mesonbuild/meson/releases
> pip3 install --user meson
> git clone https://github.com/mesonbuild/meson.git path/to/menson
> cd path/to/menson
> python setup.py install
> pip list | grep meson
meson                  1.2.99
# 使用 pip -i 手动指定软件源再安装以解决网络问题
> pip install meson -i http://mirrors.aliyun.com/pypi/simple --trusted-host mirrors.aliyun.com

# Compiling a Meson project
$ cd /path/to/source/root
$ meson setup builddir && cd builddir
$ meson compile
$ meson test
```

理解 Makefile 基本原理后（依赖关系网络），学习 CMake 或者 Meson 这些高级自动化构建工具就易如反掌。Meson sample 提供的 meson.build 脚本示范参考，一眼就可以看到它们隐含的依赖关系处理，子目录下的 `meson.build` 脚本只需要调用 `subdir('gio')` 这样的函数就可以嵌套处理 ：

```py
# Meson sample 01.
project('simple', 'c')
executable('myexe', 'source.c')

# Meson sample 02.
project('simple', 'c')
src = 'source.c'
executable('myexe', src)

# Meson sample 03.
project('simple', 'c')
src = ['source1.c', 'source2.c', 'source3.c']
executable('myexe', src)

# Meson sample 04.
project('simple', 'c')
src = ['source1.c', 'source2.c', 'source3.c']
executable('myexe', sources : src)

# Meson sample 05.
project('simple', 'c')
src = ['source1.c', 'source2.c', 'source3.c']
exe = executable('myexe', src)
test('simple test', exe)

# meson\docs\markdown\Build-targets.md
project('shared lib', 'c')
lib = library('mylib', 'source.c')
executable('program', 'prog.c', link_with : lib)

# Object files
lib = shared_library('somelib', 'internalclass.cc', 'file.cc', ...)
eo = lib.extract_objects('internalclass.cc')
executable('classtest', 'classtest.cpp', objects : eo)

# meson\docs\markdown\Dependencies.md
zdep = dependency('zlib', version : '>=1.2.8')
exe = executable('zlibprog', 'prog.c', dependencies : zdep)
ex2 = executable('manydeps', 'file.c', dependencies : [dep1, dep2, dep3, dep4])
opt_dep = dependency('somedep', required : false)
if opt_dep.found()
  # Do something.
else
  # Do something else.
endif

# Dependency detection method
cups_dep = dependency('cups', method : 'pkg-config')
```

以下 `meson.build` 示例来自 Meson IndepthTutorial.md 文档，演示如何使用 pkg-config 查找依赖库：

```py
project('c++ foolib', 'cpp',
  version : '1.0.0',
  license : 'MIT')
add_global_arguments('-DSOME_TOKEN=value', language : 'cpp')
glib_dep = dependency('glib-2.0')

inc = include_directories('include')

subdir('include')
subdir('src')
subdir('test')

pkg_mod = import('pkgconfig')
pkg_mod.generate(libraries : foolib,
                 version : '1.0',
                 name : 'libfoobar',
                 filebase : 'foobar',
                 description : 'A Library to barnicate your foos.')
```


CMake 和 Meson 都是非常现代的自动构建工具，都是值得学习的自动化构建工具，前者使用 C++ 实现，代码量较后者多几倍。由于 Meson 基于 Python 之上构建，所以节省了一定的代码量。双方都有非常完善的文档，CMake 文档使用 reStructured Text 格式，内容非常精细，甚至可以用繁多来形容，具体到每个变量、每个函数都有一个文档对应，当然也有目录。Meson 使用 Markdown 用户指南加 YAML 参考手册格式，它们都是非常好用的文档格式，和 markdown，或者专业排版的 TeX 或者 LaTeX 都是非常优秀的开源文档格式。

它们两者本身就是一个 DSL 领域特定语言，专用于处理构建过程中的依赖关系、依赖库处理等问题。甚至可以将二者的源代码作为研究编译实现的范本项目：

    git clone -b v3.27.5 --depth=1 git@github.com:Kitware/Cmake

Meson 为了降低自身出现依赖问题，约定一条规则：不使用 Python 基础标准库以外的模块，只需要 Pyton 3 和 Ninja。Ninja 使用 C++ 实现极轻量的构建工具，其设计目标之一是“必须易于嵌入大型构建系统”。Ninja 的规则文件 ninja.build 并没有条件语句或是基于文件后缀的规则，相反，使用列表记录确切的输入文件路径，以及所产生的确切结果。因为这种简单的表达并不需要额外的解释，所以，在运行时，这些规则文件能够被快速载入。由于 Ninja 追求目标简洁，就像是一个新式的 GNU Make，它没有隐式规则、没有函数、也没有第三方依赖，源文件不到 1MB，使用 CMake 就可以执行编译。注意，Msys2 编译环境有可能出现 ‘Subprocess’ 类型字段没有定义的错误，不能通过编译：

```sh
cmake -B build-cmake
cmake --build build-cmake

cmake -B release-build -DCMAKE_BUILD_TYPE=Release
cmake -Bbuild -G Ninja -DCMAKE_BUILD_TYPE=Release

cmake -Bbuild -G 'MSYS Makefiles'
cmake --build build
```

Meson 为非原生构建的项目提供 Wrap database 服务，项目中可以使用 .warp 文件提供模块信息，其功能类似 pkg-config 中使用的 .pc 文件。可以使用 `meson wrap` 命令进行查询、安装等等操作。

Meson 支持多种依赖库配置工具，可以在其依赖对象中 method 设置中指定：默认值是 `auto`，可选择使用 `pkg-config`, `config-tool`, `cmake`, `builtin`, `system`, `sysconfig`, `qmake`, `extraframework` 还有 `dub`。默认的依赖库查找控以下顺序处理：

  1. `pkg-config`
  2. `cmake`
  3. `extraframework` (OSX only)

Meson 官方文档自信满满，各项指标都暴打 GNU Autotools 这套臃肿的自动化构建工具。作为后来都，Meson 还支持将 CMake 项目作为子项目导入。作为 GNU Autotools 的反面，GNU Make 真正做到小而美，它在实现上的克制（绝对不乱加代码实现混乱的功能）使用得 GNU Make 始终是自动化构建工具的典范！当然，现代的自动化构建工具，已经不需要开发者手写 Makefile 脚本了，很多规则定义工作只需要 CMake 或者 Meson 的一个函数就可以替代，包括代码文件的生成，但是 GNU Make 传承下来的依赖处理的理念始终是根本。

Meson Build system Features

*   multiplatform support for Linux, macOS, Windows, GCC, Clang, Visual Studio and others
*   supported languages include C, C++, D, Fortran, Java, Rust
*   build definitions in a very readable and user friendly non-Turing complete DSL
*   cross compilation for many operating systems as well as bare metal
*   optimized for extremely fast full and incremental builds without sacrificing correctness
*   built-in multiplatform dependency provider that works together with distro packages
*   fun!

Meson 文档目录记录在 docs\sitemap.txt 文件。
https://github.com/mesonbuild/meson/blob/master/docs/sitemap.txt


Meson 文档 Vala.md 展示了 Gnome 为了简化基于 GLib 的图形应用程序而开发的 Vala 和 Genie 编程语言项目。Vala 支持现代语言特性，借鉴了大量的 C# 语法。而发行在两年后的 Genie 则参考了 Python 和 Delphi 语言，但是它们都使用相同的 `valac` 编译器（转译器），.vala .gs .vapi 等代码文件会转换成 C 语言代码，再编译成二进制程序执行。

https://wiki.gnome.org/Projects/Genie?action=AttachFile&do=get&target=genie_and_valac.svg

Vala 是一门新兴的编程语言，由 GNOME 主导开发，支持很多现代语言特性，借鉴了大量的 C# 语法，Python 的手感，C 的执行速度，Vala 最终会转换为 C 语言，然后把 C 代码编译为二进制文件，使用 Vala 编写应用程序和直接使用 C 语言编写应用程序，运行效率是一样的，但是 Vala 相比 C 语言更加容易，可以快速编写和维护

```sh
# https://wiki.gnome.org/Projects/Genie
# https://wiki.gnome.org/Projects/Vala
# https://github.com/GNOME/vala
# https://gitee.com/mirrors/vala/tree/0.56/
# https://mirror.ossplanet.net/gnome/sources/vala/0.56/vala-0.56.12.tar.xz
git clone -b 0.56.12 git@github.com:GNOME/vala

# https://packages.msys2.org/search?q=vala
# https://wiki.gnome.org/Projects/Vala/ValaOnWindows
# To install Vala on 64-bit Windows:
pacman -S mingw-w64-x86_64-gcc 
pacman -S mingw-w64-x86_64-pkg-config
pacman -S mingw-w64-x86_64-vala
pacman -S mingw-w64-vala-language-server
```


GLib 官方网站上的文档都可以在源代码中找到对应的 xml 源文件，分别可以在以下三个 meson.build 脚本中找到对应的目录：

1. glib-2.78.0\docs\reference\gio\meson.build
2. glib-2.78.0\docs\reference\glib\meson.build
3. glib-2.78.0\docs\reference\gobject\meson.build

GLib 框架文档列表，其中 glib-docs.xml 即 API 文档目录文件：

00. glib-2.78.0\docs\reference\glib\glib-docs.xml
01. glib-2.78.0\docs\reference\glib\cross.xml
02. glib-2.78.0\docs\reference\glib\running.xml
03. glib-2.78.0\docs\reference\glib\building.xml
04. glib-2.78.0\docs\reference\glib\changes.xml
05. glib-2.78.0\docs\reference\glib\compiling.xml
06. glib-2.78.0\docs\reference\glib\programming.xml
07. glib-2.78.0\docs\reference\glib\resources.xml
08. glib-2.78.0\docs\reference\glib\regex-syntax.xml
09. glib-2.78.0\docs\reference\glib\glib-gettextize.xml
10. glib-2.78.0\docs\reference\glib\gtester.xml
11. glib-2.78.0\docs\reference\glib\gtester-report.xml
12. glib-2.78.0\docs\reference\glib\gvariant-varargs.xml
13. glib-2.78.0\docs\reference\glib\gvariant-text.xml
14. glib-2.78.0\docs\reference\glib\compiling.xml

GObject 模块文档列表，其中 gobject-docs.xml  即 API 文档目录文件：

00. glib-2.78.0\docs\reference\gobject\gobject-docs.xml 
01. glib-2.78.0\docs\reference\gobject\glib-mkenums.xml 
02. glib-2.78.0\docs\reference\gobject\glib-genmarshal.xml 
03. glib-2.78.0\docs\reference\gobject\gobject-query.xml 
04. glib-2.78.0\docs\reference\gobject\tut_gobject.xml 
05. glib-2.78.0\docs\reference\gobject\tut_gsignal.xml 
06. glib-2.78.0\docs\reference\gobject\tut_gtype.xml 
07. glib-2.78.0\docs\reference\gobject\tut_howto.xml 
08. glib-2.78.0\docs\reference\gobject\tut_intro.xml 
09. glib-2.78.0\docs\reference\gobject\tut_tools.xm 

GIO 模块文档列表，其中 gio-docs.xml 即 API 文档目录文件：

00. glib-2.78.0\docs\reference\gio\gio-docs.xml
01. glib-2.78.0\docs\reference\gio\overview.xml
02. glib-2.78.0\docs\reference\gio\migrating-posix.xml
03. glib-2.78.0\docs\reference\gio\migrating-gnome-vfs.xml
04. glib-2.78.0\docs\reference\gio\migrating-gconf.xml
05. glib-2.78.0\docs\reference\gio\migrating-gdbus.xml
06. glib-2.78.0\docs\reference\gio\gio-querymodules.xml
07. glib-2.78.0\docs\reference\gio\glib-compile-schemas.xml
08. glib-2.78.0\docs\reference\gio\glib-compile-resources.xml
09. glib-2.78.0\docs\reference\gio\gapplication.xml
10. glib-2.78.0\docs\reference\gio\gsettings.xml
11. glib-2.78.0\docs\reference\gio\gresource.xml
12. glib-2.78.0\docs\reference\gio\gdbus.xml
13. glib-2.78.0\docs\reference\gio\gdbus-codegen.xml

入门应该先读 GObject 教程部分，即 tut_intro 入门教程。以下 GnomeVFS Overview 架构图可以帮助理解 GLib 的大体结构。Virtual File System (VFS) 即构建于内存空间的文件系统，相对于传统磁盘中的文件系统。

https://docs.gtk.org/gio/gvfs-overview.png


Msys2 平台中使用 pacman 安装依赖库，包括安装 pkg-config 依赖库信息管理工具（使用 pkgconf 作为其兼容实现）：
1. https://packages.msys2.org/base/pkgconf
2. https://packages.msys2.org/base/mingw-w64-pkg-config

```sh
> pacman -Fy
:: Synchronizing package databases...
> pacman -S pkg-config guile libguile libguile-devel
> pacman -S pkg-config glib2 glib2-devel
> pacman -Q glib2 glib2-devel
glib2 2.68.1-1
> pkg-config --list-all
guile-2.0             GNU Guile - GNU's Ubiquitous Intelligent Language for Extension
guile-3.0             GNU Guile - GNU's Ubiquitous Intelligent Language for Extension
gio-2.0                        GIO - glib I/O library
gio-unix-2.0                   GIO unix specific APIs - unix specific headers for glib I/O library
glib-2.0                       GLib - C Utility Library
gmodule-2.0                    GModule - Dynamic module loader for GLib
gmodule-export-2.0             GModule - Dynamic module loader for GLib
gmodule-no-export-2.0          GModule - Dynamic module loader for GLib
gobject-2.0                    GObject - GLib Type, Object, Parameter and Signal Library
gthread-2.0                    GThread - Thread support for GLib
```



# 📜 GLib–2.0 GObject ADT 类型系统库

0. https://docs.gtk.org/glib/
1. https://docs.gtk.org/gobject/
2. https://docs.gtk.org/gio/
3. https://docs.gtk.org/gmodule/
4. https://gitlab.gnome.org/GNOME/glib/

Gobject 即 GTK 为 C 语言提供类型系统实现而开发的 Glib 基础库的扩展，用于辅助 C 语言编写面向对象程序，提供以下内容：

1. 一个通用的动态类型系统（GType）
2. 一个基本类型的实现集（如整型、枚举等）
3. 一个基本对象类型 Gobject
4. 一个信号系统以及一个可扩展的参数/变量体系。

GObject 基于 Glib 实现动态类型系统 GType，原来是 GTK+ 的一部分，GTK+ 2.0 中将与 GUI 不相关的部份都移到 GObject 而创建了此类库，源码包含在 Glib。gobject-query 命令可以用来查询类型树。


GObject 世界里，一个类类型定义是*实例结构体* GObject 和*类结构体* GObjectClass 两个者的组合。GObject 的继承机制需要实现实例结构体的继承和类结构体的继承，Gobject 对象的初始化可分为两个部分：类结构体初始化、实例结构体初始化。类结构体初始化函数只被调用一次，而实例结构体的初始化函数的调用次数等于对象实例化的次数。这意味着，所有对象共享的数据，可保存在类结构体中，而所有对象私有的数据，则保存在实例结构体中。为每一个对象分配一个 ID，即 GType 这个用于标识类型的值，使用引用计数方式进行内存管理。

GLib 可谓 C 语言中的“STL”，在此之前，动态数组、链表、哈希表等通用容器，可能每个 C 开发者实现过 N 次以上。甚至在同一个项目里，出现几份链表的实现，也并非罕见。GLib 的开放终结了重复造轮子的恶梦。GLib 提供动态数组、单/双向链表、哈希表、多叉树、平衡二叉树、字符串等常用容器。完全面向对象设计，完全跨平台，通用的 set/get 属性访问，内部实现信号机制，官方文档 Minimum versions 要求：

 * macOS: minimum version OS X 10.7 (we
   [don’t support universal binaries](https://bugzilla.gnome.org/show_bug.cgi?id=780238);
   some features (like notification support)
   [require OS X 10.9](https://bugzilla.gnome.org/show_bug.cgi?id=747146)
   * Note that older versions of macOS than what’s currently officially
     supported by Apple are supported by GLib on a best-effort basis due to
     still having significant user bases
 * Windows:
   [minimum version is Windows 8](https://gitlab.gnome.org/GNOME/glib/-/merge_requests/1970),
   minimum build chain is Visual Studio 2012
   * Static builds are only supported with MinGW-based toolchains (cf
     [this comment](https://gitlab.gnome.org/GNOME/glib/-/merge_requests/2384#note_1336662))
 * Android: [minimum NDK version 15](https://gitlab.gnome.org/GNOME/glib/issues/1113)
 * Linux: glibc newer than 2.5 (if using glibc; other forms of libc are supported)

GStreamer 就是一个基于 GLib 构建的通用流媒体应用程序开发框架，GStreamer 最显著的用途是在构建一个播放器上，支持多种格式，包括: MP3、Ogg/Vorbis. MPEG-12、AVI、Quickime、mod 等等。 https://gstreamer.freedesktop.org/documentation/tutorials

Geany 是基于 GTK+ GLib 实现的一个轻量快速的 IDE，集成了语法高亮、命令自定义、项目构建功能以及插件扩展，可以实现 Make 等外部功能集成，基本上达到轻量与快速的目标。但是远达不好好用的级别，界面设计还是停留在传统的区域分割设计，强制需要鼠标点点点（鼠标手警告）。和 Sublime Text 不在同一级别，只能和 Notepad 或 Editplus 相比较，但也打不过人家小巧可爱。 

基于 GLib OOP 程序开发涉及以下方面的内容：

1. GObject instantiation
2. GObject properties (set/get)
3. GObject casting
4. GObject referencing/dereferencing
5. glib memory management
6. glib signals and callbacks
7. glib main loop

面向对象编程本质上是人类抽象能力集中体现，计算机编程中一切数据类型都是抽象概念。比如说，整数、浮点数它们真实存在计算机系统内吗？其实没有。它们基于人类构建出来用于表达抽象概念的机械之上才得以呈现。同样的，高级语言中的函数、类方法等等，都是抽象而来的概念，本质上它们都是 CPU 控制数据总线从磁盘加载到内存中的一段具有典型特征的代码，这些特征包括：使用 push 以及 call 指令，在返回的位置调用 pop 指令。

“抽象”这一概念的最佳说明就是毕加索的《公牛》，全画几乎就是用了少量简单的线条完全概括出牛的生物结构。这副画并不是一次画成的，而是从具象的牛慢慢地，经过多次演绎才演变为最终版本的极简牛！《公牛》画作创作时间从 1945年12月5日到1946年1月17日完稿，长达 6 周有余。

https://img.zcool.cn/community/027ef5556d6b720000016b627a994a.jpg

说明抽象这一概念的另一个例子是数学，一个苹果和另一苹果，一个绳结和另一个绳结，这些都是具象，这些都在人数数学诞生前计数的概念，当一个苹果成为 1，一个绳结也成为 1 之后，两个苹果或者两个绳结就是 1+1=2，数学就这样诞生了！而 1、2 和 + 都是数学符号，= 号是约定规则符号。

抽象就是要教会我们抓住研究对象最本质的东西，通过概括完成对复杂的事物进行系统的梳理，这就是少即是多的哲理。抽象是共通于生活、编程、艺术等等领域共通的基本能力。

从抽象出发，OOP 中的类形这一概念就是对一切可能的数据结构的高度概括，类定义就可以看到是这一概念具象化的第一步，*类型实例化*则是这一概念具象化的下一步，最后*类实例化*完成了抽像概念的最终具象。这个过程就像是从抽象的牛到各种品种的牛，再到某人家的牛，从概念到具象的过程。

实现“类型实例”就是在创建更多的 "Class"，而“类实例化”就创建更多某种类型的具象 "Instance of Class"。这个描述可能有点拗口或混乱，换个说法就是“type instances”和“class instances”的区别。在编程中，`Type` 和 `Class` 是两个经常用到的术语，当使用 Type 时通常是指高度抽象的类型，使用 Class 则是指经过一轮具象处理的类型，就像从“牛”到“奶牛”这一过程。具象化即实例化，对抽象类型进行具象化就是具体的类型，对具体类型的具象化就是类实例。在实际的编程工作中，主要关心的是使用 `class` 关键字定义类型，使用 `new` 关键字实例化这个类型得到一个具体的“对象”。OOP 中最令人迷惑的术语大概就是 Object 一词，这个问题在 JavaScript 的实现中尤甚。

动态类型语言中，典型代表有 JavaScript、TypeScript、Python、PHP 等等，这此语言更多的是使用 duck typed，即叫起来像鸭子、走起路来也像鸭子、长得也像鸭子，那么就可以认它是鸭子。这是一种生物学人类思想，是动态类型语言的基本类型实现逻辑：dynamically typed。

TypeScript 示范代码如下，注意花括号是 JavaScript 中的对象字面类的表达形式。可以进行 duck = darkDuck 这样的赋值，因为 darkDuck 拥有 duck 的所有特性（这里指 gaga），相当于 C++ 继承类型系统中的子类型。返过来，并不能将 duck 赋值给 darkDuck，因为它缺失部分兼容的特性：

```ts
let duck = { gaga:"..." }
let darkDuck = { gaga:"...", color:"dark" }
duck = darkDuck
```

原生类型可以认为是只有数据的对像的抽象结构（char, int, long, float, double），而复杂类型可以认为是除了数据，还封装了相应接口方法的抽象结构。C++ 入门课程一般都会学习 Abstract Data Types (ADT) 概念，通常指的是复杂的类型 (Lists, Sets, and Maps)，但是在我看来，编程中涉及的所有数据类型都是抽象数据类型，只是复杂程度不一样。

另外，在中文编程教材中经常会出现一个词“堆栈”，比如说堆栈溢出导致程序崩溃。其中栈和堆对应 Stack & Heap，是程序装入内存后运行中需要使用的两块内在区域。Heap 单词本来指一些东西凌乱地堆在一起的状态，Stack 单词同样也指一些东西堆在一起，但是整齐堆叠在一起。堆内存相对较大，可以是操作系统中所有未使用的内存空间，而栈内存相对较小，通常在程序运行时配置其大小，比如说 10MB。

Stack 是一种 FIrst-in Last-Out (FILO) 或者 Last-in First-Out (LIFO) 数据结构，它的特别之处在于：CPU 硬件内置了一个 Stack Pointer (SP) 栈内存指针寄存器。另一个重要的寄存器是 Program Counter (PC) 通用寄存器，用来指向程序要运行的下一条指令的地址。程序执行时，每当调用函数就会使用 push 指令在 Stack 内存中规则地存入参数和返回上层函数的地址，函数返回时则使用 pop 指令将相应传入的数据从 Stack 中移除（回收 Stack 内存）。所以这些有限的 Stack
 memory 总会有可能出现耗尽的时候，递归函数调用经常会导致堆栈溢出问题。


回到 GLib OOP 框架，GObject 则是意图呈现上面所述的抽象过程，开发者从这个抽象（GTypeInstance 和 GTypeClass）演化出更多其它类型的实现，最终用户对这些构建出来的类型进行实例化并使用它。

C 语言本身发布比较早，1971 年的时候还没有 OOP 编程的语法规范，所以在 C 上使用 OOP 编程思想，就是直接定义函数作用类型对象的 API 方法。本质上，函数就是内存上的一段代码，根据 C 语言调用函数规则以及函数地址，就可以在外部（其它语言）调用 C 语言实现程序中导出的函数。比如，Python、Erlang、JavaScript (WebAssembly) 或者 PHP 等等，这种语言间的互调用 (interoperability Interprogramming) 最能体现 C 语言作为底层语言的强大。

以下是一段 C 语言程序代码，以及调用静态函数时对应的汇编指令。静态函数就是 C/C++ 中一个处理单元（一个源代码文件）可以访问的函数。

```cpp
static void function_foo (int foo) { }

int main (int argc,  char *argv[])
{
    function_foo (10);
    return 0;
}

push   $0xa
call   0x80482f4 <function_foo>
```

函数的调用约定 calling conventions 包含参数的入栈顺序，对寄存器也有影响，以 x86 cdecl，即 C 语言函数的调用约定为例：

- 函数参数通过栈传递，参数列表按从右到左顺序压入栈内存，并且由调用者负责清理栈中的参数。
- 整型值和内存地址通过 EAX 返回。
- EAX, ECX, EDX 由调用者负责保存，其余的由被调函数负责保存。

C/C++ 默认使用 `__cdecl` 调用约定，由于此方式由主调函数负责参数入栈、清栈，所以可以实现 `vararg` 即变参函数，参数列表使用 `va_list` 引用。


|   调用约定   | 清理堆栈 |         说明         |
|--------------|----------|----------------|
| `__cdecl`    | 主调函数 | 参数从右到左 push 入栈 |
| `__stdcall`  | 被调函数 | 同 `cdecl` |
| `__fastcall` | 被调函数 | 参数从右到左 push 入栈，但优先使用寄存器传递，如 EAX、ECX、EDX |
| `__thiscall` | 被调函数 | 参数从右到左 push 入栈，this 指针通过 ECX 传递 |
| `__declspec` | 被调函数 | 用于 DLL 导出函数，如 `__declspec(dllexport)` |

微软官方声明 `__pascal`, `__fortran`, `__syscall` 等为过时约定不再支持，参考下表
https://learn.microsoft.com/en-us/cpp/cpp/calling-conventions

|   Keyword    | Stack cleanup  |       Parameter passing       |
|---------|---------------|-----------------|
| __cdecl      | Caller   | Pushes parameters on the stack (right to left) |
| __clrcall    | n/a      | Load parameters onto CLR expression stack (left to right).        |
| __stdcall    | Callee   | Pushes parameters on the stack (right to left) |
| __fastcall   | Callee   | Stored in registers, then pushed on stack |
| __thiscall   | Callee   | Pushed on stack; this pointer stored in ECX |
| __vectorcall | Callee   | Stored in registers, then pushed on stack (right to left) |


假设，要通过 Python 调用以上定义了静态函数，那么就需要按以下步骤操作：

1. 在 C 语言编译器生成的程序中找到导出函数的地址；
2. 加载可执行内存（操作系统根据程序代码需求分类内存）中的函数代码；
3. Python 将参数转换为兼容 C 语言的类型；
4. 按照 C 语言调用约定 `__cdecl` 处理参数入栈并调用函数；
5. 将返回值转换回 Pythong 的数据类型；


Foreign function interface (FFI) 就是用来表示这种互调用的术语，这两种语言中间进行数据转换的代码称为胶水代码 glue code。

参考 Python-3.11.0 源代码中的文档：

1. Doc\c-api\abstract.rst  Abstract Objects Layer
2. Doc\library\ctypes.rst  A foreign function library for Python
3. Doc\extending\embedding.rst Extending and Embedding the Python Interpreter

胶水代码可以手写，为每一个导出函数手写脱水代码是劳动生产效率最低的方式。另一种更高效的方式是使用专用编译器，根据导出函数的签名自动生成相应的脱水代码。

GType 的解决方案是使用通用胶水代码，其最大优点是：位于运行时域边界的胶水代码只写一次，下图更清楚地说明了这一点。

https://docs.gtk.org/gobject/glue.png

目前，存在多个通用的粘合代码，这使得可以在各种语言中直接使用 GType 编写的 C 对象，只需最少的工作量：不需要自动或手动生成大量的粘合代码。GType/GObject 的设计不仅是为了向 C 程序员提供类似 OOP 功能，而且是透明的跨语言互操作性。


# 📜 GLib GType Structues 基本结构

设计类型时就需要考虑类名选取、继承链信息、类型初始化顺序、类接口方法设计等信息，这些基本概念涉及到的主要源代码文件如下：

0. 使用 GLib 框架需要引用 glib.h 头文件；
0. 使用 GObject 框架需要引用 glib-object.h 头文件；
1. `GObject` 各个结构声明在 gtype.h 文件；
2. `GObject` 各个函数声明在 gobject.h 文件；

源代码包含了丰富的注解内容，一般函数命名规律是：以相关对象名称为前缀。比如 GObject 对象的相关函数就有 getv 或 setv，完整名称就是 `g_object_getv` 和 `g_object_setv`。文档包含了一个符号列表文件，所有 GObject 模块中定义的宏符号、函数都分类罗列在： glib-2.78.0\docs\reference\gobject\gobject-sections.txt

`GObject` 各个结构声明在 gtype.h 文件，注意对位关系，逻辑说明如下：

 * `GObject` 结构定义的所有字段都为私有，类型实现者不该直接访问；
 * `GObjectClass` 为类型实例提供构建、析构、属性访问、消息机制等接口机制；
 * `GTypeInstance` 内部结构，表示类型实例的基础结构；
 * `GTypeClass` 内部结构，表示类型基础结构，Basic Type Structures；
 * `GType` 是一个用于标识各种类型实例数值，即 Type ID；
 * `GTypeInterface` 是所有接口类型的基础结构；
 * `TypeNode` 是记录类型关系数据的节点树中节点结构；
 * `GTypeQuery` 是用于记录类型信息的结构；
 * `GTypeInfo` 和 `GTypeFundamentalInfo`，以及 `GInterfaceInfo` 是记录类型信息的结构；
 * `GTypeFundamentalFlags` 和 `GTypeFlags` 枚举值用于控制不同类型的功能特性；

一般地，64-bit 环境下，`GObject` 类型占据 24 字节：两个指针加一个 unsigned int 用于记录引用计数。

```cpp
typedef struct  _GObject
{
  GTypeInstance  g_type_instance; /* GTypeClass *g_class -> GType g_type */

  guint          ref_count;  /* (atomic) */
  GData         *qdata;
} GObject;
```

假定要派生一个 GObject 子类型，即定义一个类型通常需要将父类型基础结构重叠（boilerplate）到子类型的结构中，并且需要作为前缀字段定义，这样在进行向上转型（转换为父类型）就可以通过原指针获取到父类型的结构：

1. 一个包含 `GObject` 的结构体作为类型实例的本体，顶级类使用 `GTypeInstance`；
2. 一个包含 `GObjectClass` 的结构体作为类型本体；

参考 `g_type_module_get_type` 方法的实现，内部的 `GTypeModuel` 就是这样的一个子类型。

简单概括为一个嵌套结构，类型信息结构则会传递给注册函数以登记到类型树数据系统中：

    +=================================+
    | GObject                         |
    |    +=========================+  |
    |    | GTypeInstance           |  |
    |    |    +=================+  |  |
    |    |    | GTypeClass      |  |  |
    |    |    |     +=======+   |  |  |
    |    |    |     | GType |   |  |  |
    |    |    |     +-------+   |  |  |
    |    |    +-----------------+  |  |
    |    +-------------------------+  |
    +=================================+

    +=================================+
    | GTypeModuleClass                |
    |    +=========================+  |
    |    | GObjectClass            |  |
    |    |    +=================+  |  |
    |    |    | GTypeClass      |  |  |
    |    |    |     +=======+   |  |  |
    |    |    |     | GType |   |  |  |
    |    |    |     +-------+   |  |  |
    |    |    +-----------------+  |  |
    |    +-------------------------+  |
    +=================================+

从三个最基本的信息记录用途的结构： `GTypeFundamentalInfo` 和 `GTypeInfo`，以及 `GInterfaceInfo` 就可以发现，GLib 类型系统中的基础类型、一般类型以及接口类型所有具有的基本功能。结合 Flags 控制位，开启或关闭某种特性，比如是否可被继承、是否可以实例化、是否是 Final 类型等等。

GTypeFundamentalFlags 用于控制基础类型特性，GTypeFundamentalInfo 中设置：

1. `G_TYPE_FLAG_CLASSED`: Indicates a classed type
2. `G_TYPE_FLAG_INSTANTIATABLE`: Indicates an instantiatable type (implies classed)
3. `G_TYPE_FLAG_DERIVABLE`: Indicates a flat derivable type
4. `G_TYPE_FLAG_DEEP_DERIVABLE`: Indicates a deep derivable type (implies derivable)

GTypeFlags 用于控制一般类型特性，也用于基本类型，在注册函数中设置：

1. `G_TYPE_FLAG_NONE`: No special flags. Since: 2.74
2. `G_TYPE_FLAG_ABSTRACT`: Indicates an abstract type. No instances can be created for an abstract type
3. `G_TYPE_FLAG_VALUE_ABSTRACT`: Indicates an abstract value type, i.e. a type that introduces a value table, but can't be used for g_value_init()
4. `G_TYPE_FLAG_FINAL`: Indicates a final type. A final type is a non-derivable leaf node in a deep derivable type hierarchy tree. Since: 2.70
5. `G_TYPE_FLAG_DEPRECATED`: The type is deprecated and may be removed in a future version. A warning will be emitted if it is instantiated while running with `G_ENABLE_DIAGNOSTIC=1`. Since 2.76

Glib 并没有提供 Flags 枚举值来指定是不否是静态类型，而是提供了多个注册函数，来区别静态类型、基础类型、一般类型和接口类型。

创建一般用户类型时，`GTypeInfo` 必不可少，注册基础类型时还额外增了 `GTypeFundamentalInfo`。基本类型信息记录包括 ：

1. `class_size`: class size.
2. `base_init` and `class_init`: class initialization functions (C++ constructor).
3. `base_finalize` and `class_finalize`: class destruction functions (C++ destructor).
4. `instance_size`: instance size (C++ parameter to new).
5. `n_preallocs`: instantiation policy (C++ type of new operator).
6. `value_table`: copy functions (C++ copy operators).
7. type characteristic flags: `GTypeFlags`. 

可以从 `GTypeInfo` 结构中看到，设置有 base 和 class 两对初始化、终止方法，而对于一个类的实例则只设置一个初始化方法。base 相关的两个方法一般用不上，它可以在类型初始化之前，或类型析构之后做一些工作。

```cpp
typedef void (*GBaseInitFunc)          (gpointer      g_class);
typedef void (*GBaseFinalizeFunc)      (gpointer      g_class);
typedef void (*GClassInitFunc)         (gpointer      g_class, gpointer   class_data);
typedef void (*GClassFinalizeFunc)     (gpointer      g_class, gpointer   class_data);
typedef void (*GInstanceInitFunc)      (GTypeInstance *instance, gpointer g_class);

typedef void (*GInterfaceInitFunc)     (gpointer      g_iface, gpointer   iface_data);
typedef void (*GInterfaceFinalizeFunc) (gpointer      g_iface, gpointer   iface_data);
```


```cpp
// C:\dl\pl\glib-2.78.0\gobject\gobject.h
struct  _GObject
{
  GTypeInstance  g_type_instance;
  
  guint          ref_count;  /* (atomic) */
  GData         *qdata;
};

typedef struct _GTypeInstance
{
  GTypeClass *g_class;
} GTypeInstance;

typedef struct _GTypeClass
{
  GType g_type;
} GTypeClass;

typedef struct _GTypeQuery
{
  GType     type;
  const gchar  *type_name;
  guint     class_size;
  guint     instance_size;
} GTypeQuery;

typedef struct _GTypeInterface
{
  GType g_type;         /* iface type */
  GType g_instance_type;
} GTypeInterface;

typedef struct _GTypeInfo
{
  /* interface types, classed types, instantiated types */
  guint16                class_size;
  
  GBaseInitFunc          base_init;
  GBaseFinalizeFunc      base_finalize;
  
  /* interface types, classed types, instantiated types */
  GClassInitFunc         class_init;
  GClassFinalizeFunc     class_finalize;
  gconstpointer          class_data;
  
  /* instantiated types */
  guint16                instance_size;
  guint16                n_preallocs;
  GInstanceInitFunc      instance_init;
  
  /* value handling */
  const GTypeValueTable *value_table;
} GTypeInfo;

typedef struct _GTypeFundamentalInfo
{
  GTypeFundamentalFlags  type_flags;
} GTypeFundamentalInfo;

typedef struct _GInterfaceInfo
{
  GInterfaceInitFunc     interface_init;
  GInterfaceFinalizeFunc interface_finalize;
  gpointer               interface_data;
} GInterfaceInfo;

struct _GTypeValueTable
{
  GTypeValueInitFunc value_init;
  GTypeValueFreeFunc value_free;
  GTypeValueCopyFunc value_copy;
  GTypeValuePeekPointerFunc value_peek_pointer;

  const gchar *collect_format;
  GTypeValueCollectFunc collect_value;

  const gchar *lcopy_format;
  GTypeValueLCopyFunc lcopy_value;
} GTypeValueTable;

typedef enum
{
  /* There is no G_TYPE_FUNDAMENTAL_FLAGS_NONE: this is implemented to use
   * the same bits as GTypeFlags */
  G_TYPE_FLAG_CLASSED           = (1 << 0),
  G_TYPE_FLAG_INSTANTIATABLE    = (1 << 1),
  G_TYPE_FLAG_DERIVABLE         = (1 << 2),
  G_TYPE_FLAG_DEEP_DERIVABLE    = (1 << 3)
} GTypeFundamentalFlags;

typedef enum
{
  G_TYPE_FLAG_NONE GOBJECT_AVAILABLE_ENUMERATOR_IN_2_74 = 0,
  G_TYPE_FLAG_ABSTRACT = (1 << 4),
  G_TYPE_FLAG_VALUE_ABSTRACT = (1 << 5),
  G_TYPE_FLAG_FINAL GOBJECT_AVAILABLE_ENUMERATOR_IN_2_70 = (1 << 6),
  G_TYPE_FLAG_DEPRECATED GOBJECT_AVAILABLE_ENUMERATOR_IN_2_76 = (1 << 7)
} GTypeFlags;


struct  _GObjectClass
{
  GTypeClass   g_type_class;

  /*< private >*/
  GSList      *construct_properties;

  /*< public >*/
  /* seldom overridden */
  GObject*   (*constructor)     (GType                  type,
                                 guint                  n_construct_properties,
                                 GObjectConstructParam *construct_properties);
  /* overridable methods */
  void       (*set_property)    (GObject        *object,
                                         guint           property_id,
                                         const GValue   *value,
                                         GParamSpec     *pspec);
  void       (*get_property)    (GObject        *object,
                                         guint           property_id,
                                         GValue         *value,
                                         GParamSpec     *pspec);
  void       (*dispose)     (GObject        *object);
  void       (*finalize)    (GObject        *object);
  /* seldom overridden */
  void       (*dispatch_properties_changed) (GObject      *object,
               guint     n_pspecs,
               GParamSpec  **pspecs);
  /* signals */
  void       (*notify)      (GObject  *object,
           GParamSpec *pspec);

  /* called when done constructing */
  void       (*constructed)   (GObject  *object);

  /*< private >*/
  gsize   flags;

  gsize         n_construct_properties;

  gpointer pspecs;
  gsize n_pspecs;

  /* padding */
  gpointer  pdummy[3];
} GObjectClass;
```


# 📜 GLib TypeNode 类型节点树

Glib 类型系统中，记录类型层次结构信息的数据结构是 TypeNode。

```cpp
typedef struct _TypeNode
{
  guint        ref_count;  /* (atomic) */
#ifdef G_ENABLE_DEBUG
  guint        instance_count;  /* (atomic) */
#endif
  GTypePlugin *plugin;
  guint        n_children; /* writable with lock */
  guint        n_supers : 8;
  guint        n_prerequisites : 9;
  guint        is_classed : 1;
  guint        is_instantiatable : 1;
  guint        is_final : 1;
  guint        mutatable_check_cache : 1;   /* combines some common path checks */

  GType       *children; /* writable with lock */
  TypeData    *data;
  GQuark       qname;
  GData       *global_gdata;
  union {
    GAtomicArray iface_entries;     /* for !iface types */
    GAtomicArray offsets;
  } _prot;
  GType       *prerequisites;
  GType        supers[1]; /* flexible array */
} TypeNde;
```

节点权查询方法 `lookup_type_node_I` 是一个 inline 函数，即调用它不会产生额外的函数调用指令，它将函数代码以一般语句内联，即替换到其调用处，内联函数就像一般语句一样执行。

全局静态变量 `static_type_nodes_ht` 引用一个哈希表 `GHashTable`，会在 `gobject_init` 方法中初始化。

Hash Tables 哈希表是基于`哈希函数`实现快速插入与查找的一种数据结构，同时又是一种搜索算法的解决方案，几乎到处都有它的身影，从操作系统底层，到各种语言的标准库的实现。Hash Table 存储数据的位置和 key 之间的映射关系用函数 f(key)=hash 表示，使每个关键字和一个唯一的存储位置相对应，称这个对应关系为 Hash 哈希函数。



```cpp
#define G_TYPE_FUNDAMENTAL_SHIFT  (2)
#define G_TYPE_FUNDAMENTAL_MAX    (255 << G_TYPE_FUNDAMENTAL_SHIFT)

// glib-2.78.0\gobject\gtype.c:412
/* --- type nodes --- */
static GHashTable       *static_type_nodes_ht = NULL;
static TypeNode   *static_fundamental_type_nodes[(G_TYPE_FUNDAMENTAL_MAX >> G_TYPE_FUNDAMENTAL_SHIFT) + 1] = { NULL, };
static GType     static_fundamental_next = G_TYPE_RESERVED_USER_FIRST;

static inline TypeNode*
lookup_type_node_I (GType utype)
{
  if (utype > G_TYPE_FUNDAMENTAL_MAX)
    return (TypeNode*) (utype & ~TYPE_ID_MASK);
  else
    return static_fundamental_type_nodes[utype >> G_TYPE_FUNDAMENTAL_SHIFT];
}
```

# 📜 GLib Interface 接口类型

接口 Interface 即一类具有相同方法类型的一种抽象，通过接口概括这些类型的相同特征。在编程中，接口负责定义抽象方法，并且由具体的类型去实现这些抽象的方法，而实现某接口的类型就拥有了这接口所代表的抽象特征。一个类型可以实现多个接口，这属性于组合式编程，与 C++ 的类型多继承机制完全不同的思维，组合接口特性 vs. 合并父类特性。

实现了某接口的类型，就可以使用接口方法进行实例化。

定义并且给接口的基础结构设置 `GTypeInterface` 作为父类弄重叠结构（boilerplate）。

注册接口类型同样需要 `GTypeInfo` 结构提供基础信息，使用 `g_type_register_static` 方法，以及指定 `G_TYPE_INTERFACE` 作为父类型。

C 语言没有抽象函数的概念，但可以使用函数指针来表达，定义接口结构时为相应的接口方法声明一个函数指针即可。接口实现者则需要设置类型初始化函数，更重要的是设置好接口的初始化回调函数，并在初始化回调函数中设置好相应的接口方法的指针。

初始化接收到的接口实例则是一个只包含接口方法指针的结构，实现者需要使用 `GInterfaceInfo` 结构以及 `g_type_add_interface_static` 方法向接口管理中心注册接口初始化方法，此信息结构体中包含一个 `GInterfaceInitFunc` 回调函数。在接口初始化方法中，设置好接口方法的指针，以引用正确的函数。

为了便于管理类型 ID，通常会在封装类型注册过程的函数内定义一个 `static` 局部变量，以记录注册函数返回的类型 ID。后续再调用这个封闭函数时，就根据是否已经存在 ID 值来决定调用注册函数，还是直接返回现有记录的类型 ID。

注册好接口实现类，就可以通过 `g_object_new` 方法创建新实例，并且使用 `G_TYPE_INSTANCE_GET_INTERFACE` 将实例转换为接口类型。此宏函数就可以根据指定的实例 instance、实现类 g_type，以及目标接口 c_type 三者的关联，进行类型转换。如果实例对象 instance 属于指定的 g_type 类型，并且通过 `g_type_add_interface_static` 添加（实现）了所有接口方法，那么就可以成功转换。否则返回无效类型 `G_TYPE_INVALID`，或者空指针。

注意：接口 API 能数中的 instance_type 是指实现者，即要实现接口的类型，即接口实例。

```cpp
GType g_type_register_static (GType parent_type,
      const gchar     *type_name,
      const GTypeInfo *info,
      GTypeFlags   flags)

void g_type_add_interface_static (GType instance_type, GType interface_type, const GInterfaceInfo *info);

typedef struct _GInterfaceInfo
{
  GInterfaceInitFunc     interface_init;
  GInterfaceFinalizeFunc interface_finalize;
  gpointer               interface_data;
} GInterfaceInfo;

#define G_TYPE_INSTANCE_GET_INTERFACE(instance, g_type, c_type) (_G_TYPE_IGI ((instance), (g_type), c_type))
```


# 📜 GLib Signal 信号系统
https://developer-old.gnome.org/gobject/unstable/signal.html

GLib 信号系统本质是一种编程模式：Observer Design Pattern。所以其信号系统中需要 Observer 或 Listener 基本角色，它向事件（数据）发布中心注册（connection）响应函数，在中心触发信号时（emission）就调用注册好的响应函数。

1. Signal registration
2. Signal connection
3. Signal emission

通常，信号的创建（定义信号）放在类型初始化函数中进行，相应的信号就可以承类型激活。

其中部分和信息相关的函数，完整符号定义参考 glib-2.78.0\gobject\gsignal.h ：

```cpp
guint                 g_signal_new          (const gchar        *signal_name,
               GType               itype,
               GSignalFlags        signal_flags,
               guint               class_offset,
               GSignalAccumulator  accumulator,
               gpointer    accu_data,
               GSignalCMarshaller  c_marshaller,
               GType               return_type,
               guint               n_params,
               ...);

#define g_signal_connect(instance, detailed_signal, c_handler, data) \
    g_signal_connect_data ((instance), (detailed_signal), (c_handler), (data), NULL, (GConnectFlags) 0)

#define g_signal_connect_after(instance, detailed_signal, c_handler, data) \
    g_signal_connect_data ((instance), (detailed_signal), (c_handler), (data), NULL, G_CONNECT_AFTER)

void                  g_signal_emit         (gpointer            instance,
               guint               signal_id,
               GQuark              detail,
               ...);

void                  g_signal_emit_by_name (gpointer            instance,
               const gchar        *detailed_signal,
               ...);
```

# 📜 GLib GType Registers & Initialize 类型与注册

GLib 这个类型制造系统就是一个 Dynamic Type System，通过 C API 提供的功能，将要定义的类型信息注册到 GLib 系统中，记录这些新类型的层级关系。

而定义这些新类型的过程又需要一些 GType 结构体实例，而新定义的类型的用户在未来会对它们实例化，这个过程就像鸡生蛋，蛋又生鸡的过程。

Glib 使用 Flags 枚举值来指定类型的 FInal 类型、抽象类、或者是否可实例化等特性，但是静态类型要通过注册函数指定设定，以下四种注册方法用于来区别静态类型、基础类型和动态类型。所有已经注册的类型信息，都可以通过 `g_type_query` 方法查询，它返回一个与指定类型 ID 相关信息的 `GTypeQuery` 结构：

```cpp
typedef struct _GTypeQuery
{
  GType   type;
  const gchar  *type_name;
  guint   class_size;
  guint   instance_size;
} GTypeQuery;
```

调用类型信息注册函数就是建立类型节点数据库的过程，这些注册方法原型如下：

```cpp
GType g_type_register_static        (GType   parent_type,
                     const gchar            *type_name,
                     const GTypeInfo        *info,
                     GTypeFlags              flags);

GType g_type_register_static_simple (GType   parent_type,
                     const gchar            *type_name,
                     guint                   class_size,
                     GClassInitFunc          class_init,
                     guint                   instance_size,
                     GInstanceInitFunc       instance_init,
                     GTypeFlags              flags);

GType g_type_register_dynamic       (GType   parent_type,
                     const gchar            *type_name,
                     GTypePlugin            *plugin,
                     GTypeFlags              flags);

GType g_type_register_fundamental   (GType   type_id,
                     const gchar            *type_name,
                     const GTypeInfo        *info,
                     const GTypeFundamentalInfo *finfo,
                     GTypeFlags              flags);
```

类型注册方法需要父类型 GType ID，用于建立层次关系，GLib 支持三种类型：静态类型、动态类型、基础类型，根据注册类型使用不同的信息结构体：`GTypeInfo`, `GTypePlugin`, `GTypeFundamentalInfo`，其中简间静态类型只需要两个初始化函数：类型初始化、实例初始化。

基本类型，即没有类型层次关系的类型，或者是顶层类型（Top-level types），比如 `GObject` 就是基本类型，大部分的基本类型都已经预先注册好，一般不需要注册基本类型。

类型信息由 `GTypeInfo` 或者 `GTypePlugin` 传入，后者供动态类型动态地变换以实现类型的动态性，动态类型可以在运行时加载和卸载。而 GTK 构架中各种窗口和容器类型都注册为静态类型。

进行类型初始化时，类型系统不仅初始化类型内部数据结构，还需要注册一系列核心类型，比如 GObject 等等，其它所有类型都派生自顶层类型。

核心类型 ID 使用 `G_TYPE_MAKE_FUNDAMENTAL` 宏函数定义，它会按 
`G_TYPE_FUNDAMENTAL_SHIFT` 常量指定值进行 left bit-shift 操作，默认是左移 2 bit，即数值上放大了 4 倍。定义核心类型 ID 的代码会使用 `G_BEGIN_DECLS` 和 `G_END_DECLS` 宏符号包括，它们其实就是 C++ 规范中的 `extern "C`，注意这是 C++ 规范中定义的关键字，C 语言中没有定义，所以需要使用预处理条件让它只出现在 C++ 编译器。

使用 `extern "C"` 关键字目的是告诉 C++ 编译器进行 external linkage，同时避免导出符号因 C++ 方式重载机制进行 Name mangling。因为 C++ 代码中的重载函数使用相同函数名称，在编译过程中需要对各种重载实现进行名称重新编排。因此 C++ 编译器编译 `extern "C"` 代码块时将它们当作 C 语言符号，不进行名字混杂，这也就是 C++ 兼容 C 语言的机制之一。

编写动态链接库时，在声明语句中使用 **extern "C"** 可以防止 C++ 编译器使用装饰名，提高动态库的可用性。保持符号名称不变，就可以在 MSVC 和 MinGW 等等编译器之间，相互调用另一方编译出来的动态库。因为所有 **extern "C"** 方式导出的符号名称保持不变。

```cpp
// glib-2.78.0\glib\gmacros.h
/* Guard C code in headers, while including them from C++ */
#ifdef  G_CXX_STD_VERSION
#define G_BEGIN_DECLS  extern "C" {
#define G_END_DECLS    }
#else
#define G_BEGIN_DECLS
#define G_END_DECLS
#endif
```

定义用户类型时，不需关心 ID 编号具体是什么值，只需要通过 `G_TYPE_RESERVED_USER_FIRST  (49)` 宏定义保证 ID 属于用户类型即可。在所有核心类型中，只有 `G_TYPE_INVALID` 是没有注册的，严格来说，它不是类型定义，它是识别未定义类型的标志。

另外，还可以使用 `g_type_fundamental_next (void)` 方法来获取自动生成的 Type ID。

以下是相关的顶级类型的注册代码参考，它们在相应的 type_ini 函数中完成注册，参考宏符号 `G_REAL_CLOSURE`，各种值类型注册在 `_g_value_types_init` 方法：

```cpp
// glib-2.78.0\gobject\gtype-private.h
void    _g_value_c_init          (void); /* sync with gvalue.c */
void    _g_value_types_init      (void); /* sync with gvaluetypes.c */
void    _g_enum_types_init       (void); /* sync with genums.c */
void    _g_param_type_init       (void); /* sync with gparam.c */
void    _g_boxed_type_init       (void); /* sync with gboxed.c */
void    _g_object_type_init      (void); /* sync with gobject.c */
void    _g_param_spec_types_init (void); /* sync with gparamspecs.c */
void    _g_value_transforms_init (void); /* sync with gvaluetransform.c */
void    _g_signal_init           (void); /* sync with gsignal.c */

// glib-2.78.0\gobject\gboxed.c
g_type_register_fundamental (G_TYPE_BOXED, g_intern_static_string ("GBoxed"), &info, &finfo,
g_type_register_fundamental (G_TYPE_ENUM, g_intern_static_string ("GEnum"), &info, &finfo,
g_type_register_fundamental (G_TYPE_FLAGS, g_intern_static_string ("GFlags"), &info, &finfo,
g_type_register_fundamental (G_TYPE_OBJECT, g_intern_static_string ("GObject"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_PARAM, g_intern_static_string ("GParam"), &param_spec_info, &finfo, G_TYPE_FLAG_ABSTRACT);

// glib-2.78.0\gobject\gvaluetypes.c
g_type_register_fundamental (G_TYPE_CHAR, g_intern_static_string ("gchar"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_UCHAR, g_intern_static_string ("guchar"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_BOOLEAN, g_intern_static_string ("gboolean"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_INT, g_intern_static_string ("gint"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_UINT, g_intern_static_string ("guint"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_LONG, g_intern_static_string ("glong"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_ULONG, g_intern_static_string ("gulong"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_INT64, g_intern_static_string ("gint64"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_UINT64, g_intern_static_string ("guint64"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_FLOAT, g_intern_static_string ("gfloat"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_DOUBLE, g_intern_static_string ("gdouble"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_STRING, g_intern_static_string ("gchararray"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_POINTER, g_intern_static_string ("gpointer"), &info, &finfo, 0);
g_type_register_fundamental (G_TYPE_VARIANT, g_intern_static_string ("GVariant"), &info, &finfo, 0);
```

# 📜 Initialization & Destruction 初始化与销毁

GLib 对象层次结构使用注册函数登记，每个类型都通过初始化函数进行状态设置，这些全局对象管理、初始化函数。

```cpp
// glib-2.78.0\gobject\gtype-private.h
// C:\dl\pl\glib-2.78.0\gobject\gobject.c
void    _g_value_c_init          (void); /* sync with gvalue.c */
void    _g_value_types_init      (void); /* sync with gvaluetypes.c */
void    _g_enum_types_init       (void); /* sync with genums.c */
void    _g_param_type_init       (void); /* sync with gparam.c */
void    _g_boxed_type_init       (void); /* sync with gboxed.c */
void    _g_object_type_init      (void); /* sync with gobject.c */
void    _g_param_spec_types_init  (void); /* sync with gparamspecs.c */
void    _g_value_transforms_init  (void); /* sync with gvaluetransform.c */
void    _g_signal_init           (void); /* sync with gsignal.c */
```

# 📜 GObject Mem 内存管理
glib-2.78.0\glib\gmem.h
https://developer-old.gnome.org/gobject/unstable/gobject-memory.html
Object memory management

1. Reference count
2. Weak References
3. Reference counts and cycles


# 📜 Startup Your Type System

## 🍀 Hello GObject
https://www.iteye.com/blog/cloverprince-486567

一个几乎没有任何用途（除了测试编译流程）的示范程序如下：

```cpp
#include <stdio.h>
#include <glib-object.h>

int main( int argc, char *argv[] ) {
    g_type_init();
    for (int i = 0; i<argc; i++) {
        printf("argument %d: %s\n", i, argv[i]);
    }
    return 0;
}
```

GLib 2.36 版本后，已经不需要主动调用 `g_type_init` 方法，GLib 系统自动初始化类型系统，而这个函数什么也不做。

Windows 系统上使用 Msys2 环境开发 GLib 应用，以下命令用于检测环境要求，以及编译源代码，以供参考：

```sh
gcc -v
# Target: x86_64-pc-msys
pkg-config --modversion "glib-2.0"
# 2.76.5
pacman -Sl | grep "glib" | grep installed
# msys glib2 2.76.5-1 [installed]
# msys glib2-devel 2.76.5-1 [installed] 
pacman -Sl | grep "gcc" | grep "installed"
# msys gcc 13.2.0-2 [installed]
# msys gcc-libs 13.2.0-2 [installed]
pacman -S mingw-w64-x86_64-toolchain
# 1) mingw-w64-x86_64-binutils  2) mingw-w64-x86_64-crt-git  3) mingw-w64-x86_64-gcc


# bash
msys2_shell.cmd -msys2
gcc hello.c -o hello `pkg-config --cflags --libs "gobject-2.0"`

# PowerShell
$env:PKG_CONFIG_SYSROOT_DIR="c:/msys64"
gcc hello.c -o hello $(pkg-config --cflags --libs "gobject-2.0")
# $flags=pkg-config --cflags --libs "gobject-2.0"
# gcc hello.c -o hello $flags
```

可能遇到的问题：

    /usr/lib/gcc/x86_64-pc-msys/13.2.0/../../../../x86_64-pc-msys/bin/ld: 
    /tmp/ccM6fxNh.o:hello.c:(.text+0x10): undefined reference to `__imp_g_type_init'

    hello.c:1:10: fatal error: glib-object.h: No such file or directory
        1 | #include <glib-object.h> 

    /usr/lib/gcc/x86_64-pc-msys/13.2.0/../../../../x86_64-pc-msys/bin/ld: 
    cannot find -lgobject-2: No such file or directory
    cannot find -lglib-2: No such file or directory

还有一个潜在问题，Msys2 使用的编译器平台不兼容，导致编译出来的程序出现非法指针，内存违规访问。这种情况会导致 bash 不能检测到返回码，-1073741819 0xC0000005 STATUS_ACCESS_VIOLATION。错误码参考 2.3.1 NTSTATUS Values。

```sh
# bash
$ ./hello.exe a b c; if [ $? = 0 ]; then echo OK $?; else echo fail $?; fi
OK 0

# PowerShell
> .\hello.exe 1 b c; if ($LASTEXITCODE -eq 0) { echo ok } else { echo $("fail 0x{0:X}" -f $LASTEXITCODe);} 
fail 0xC0000005
> .\hello.exe 1 b c; if ($? -eq $True) { echo ok } else { echo $?;} 
False
```

Memory Access Volation 是最常见的 C/C++ 程序运行错误，诱发原因如下：

1. NULL Pointer - addresses between 0x0 and 0x10000 (64K) - e.g. a function that usually returns a pointer returned NULL (0x0), and the pointer was accessed without verification
2. Memory Corruption - the address was mistakenly or maliciously overwritten - commonly via a buffer overrun (or underrun)
3. Use-After-Free - the address was valid, but is now being accessed after it is freed (data) or unloaded (code)
4. Bit-Flip - RAM (hardware) issue where one or more bits have flipped (rare)

Msys2 bash 环境中出现引用未定义符号；
PowerShell 环境下找不到头文件或者库文件，是因为命令行没有正确传递头文件目录，以及依赖库名称中包含句点，这会导致编译器误判文件名。应该使用引号包括依赖库 `-l"gobject-2.0" -l"glib-2.0"`。

Msys2 中的依赖包默认使用 /usr 此类绝路径前缀，pkg-config 可以根据 PKG_CONFIG_SYSROOT_DIR 环境变量指定的路径替换依赖包 .pc 文件中的 $(prefix) 路径。

另外，就是 PowerShell 中使用变量、或者同命令行中传递 pkg-config 返回的编译器参数时，会因为自动给变量加引号面导致参数失效（所有配置项变成一个字符串参数）。此情形不能直接使用 -split 进行字符串分割，PowerShell 使用反引号作为转义符号，也不能像 bash 一样使用反引号插入其它命令。解决方法有多种：

1. 使用新 pwsh 进程的 -c 选项解释命令行（恶心）。
2. Invoke-Expression 执行字符串包含的命令及参数（依然有 glib-2.0 名称问题）。
3. 最佳方法是 Make 或者 CMake、Meson 等构建工具，可以很好处理这样的问题。
4. 终极的解决方法是：手动给 GCC 指定参数或者修改 GLib 依赖库名称和 .pc 配置。

PowerShell 调用运算符 (&) 用于执行脚本、脚本块或命令，但它不会像 Invoke-Expression 那样解释 command 参数，它会将字符串当作一个命令（不含要传递的参数）。

```sh
> $flags=pkg-config --cflags --libs "gobject-2.0"
> &"./hello.exe" hello.c -o hello $flags
> &"./hello.exe" hello.c -o hello $(pkg-config --cflags --libs "gobject-2.0")
argument 0: /c/dl/pl/glib-2.78.0/examples/hello
argument 1: hello.c
argument 2: -o
argument 3: hello
argument 4: -Ic:/msys64/usr/include -Ic:/msys64/usr/include/glib-2.0 \
          -Ic:/msys64/usr/lib/glib-2.0/include -Lc:/msys64/usr/lib \
          -lgobject-2.0 -lglib-2.0 -lintl
> pwsh -c "./hello.exe $(pkg-config --cflags --libs "gobject-2.0")"
argument 0: /c/dl/pl/glib-2.78.0/examples/hello
argument 1: -Ic:/msys64/usr/include
argument 2: -Ic:/msys64/usr/include/glib-2.0
argument 3: -Ic:/msys64/usr/lib/glib-2.0/include
argument 4: -Lc:/msys64/usr/lib
argument 5: -lgobject-2
argument 6: .0
argument 7: -lglib-2
argument 8: .0
argument 9: -lintl
```

比较棘手的是引用符号未定义，这是高发编译错误，解决难度罗列：

1. 没有给链接程序指定链接库，比如缺失 `"-lglib-2.0"` 或者路径错误;
2. GCC 链接库参数 -l 不要写在源代码文件之前，会链接不到库；
3. 指定依赖库依然报错，此情况就可能是使用了不兼容编译器版本；
4. 最后，是真得找不到相应的符号，可能是代码写错或者库中没有定义；

GCC 链接器链接文件时的流程：

1. 从左往右链接源文件；
2. 源文件调用了没有定义的函数、变量等，则记录下来；
3. 如果遇到 -l 指定的库，则在库中尽可能检索所有记录下来的没有定义的函数、变量，只从库中提取用到的部分，然后抛弃此库；
4. 在全部链接完后，如果依然存在未定义的函数、变量，则报错

正因为 GCC 链接器的这样的链接流程，并不会回过头来检索之前链接过的库，因此要求按正确顺序传递依赖库。由此可知，即使两个库有相同的函数、变量的定义，最终只有先找到的库中定义的符号才生效。

1. https://gcc.gnu.org/onlinedocs/
2. https://stackoverflow.com/questions/11893996/why-does-the-order-of-l-option-in-gcc-matter
3. https://en.wikibooks.org/wiki/GNU_C_Compiler_Internals/GNU_C_Compiler_Architecture
4. https://www.slideserve.com/dandre/gnu-compiler-collection
5. https://image3.slideserve.com/5506117/slide10-l.jpg

使用 Make 脚本必需熟悉编译器命令的使用，并且要掌握基本参数应用。

GNU Compiler Collection (GCC) 即作为大写时，是指 GUN 编译器工具链集合，提供 C、C++、JAV、Fortran、Pascal、Object-C、Ada 等语言的编译支持。而使用小写字母，常常表示其中的某个工作：

1. gcc 是 GCC 中的 GUN C Compiler（C 编译器）
2. g++是GCC中的GUN C++ Compiler（C++编译器）

事实上，gcc 和 g++ 命令并不是编译器，它们只是一种驱动器，根据参数中要编译的文件的类型，调用对应的 GUN 编译器而已，真正的编译器是 cc 或者 cc1。调用以上两个命令会对不同扩展名的源代码文件进行不同的处理，比如，编译一个文件，会有以下几个步骤：

1. Step1：Call a preprocessor, like cpp.
2. Step2：Call an actual compiler, like cc or cc1.
3. Step3：Call an assembler, like as.
4. Step4：Call a linker, like ld

所以，更准确的说法是：gcc 调用了 C compiler，g++ 调用 C++ compiler。由于编译器可更换，所以 gcc 不仅仅可以编译 C 文件，也可以处理 C++ 代码文件。两者主要行为差异如下：

1. 对于 .c 和 .cpp 文件，gcc 分别当做 C 和 C++ 文件编译；
2. 对于 .c 和 .cpp 文件，g++ 则统一当做 C++ 文件编译；
3. 使用 g++ 编译文件时，会自动链接 STL 标准库，gcc 则不会；
4. gcc 在编译 C 文件时，可使用的预定义宏数量比较；
5. gcc 在编译 C++ 文件时，或者使用 g++，就是使用 C++ 编译器，会加入一些额外的宏；
6. gcc 编译 C++ 文件时，也可使用 C++ 标准库 –lstdc++，但这并不代表和 g++ 等价。

```cpp
// https://gcc.gnu.org/onlinedocs/cpp/Standard-Predefined-Macros.html
#define __GXX_WEAK__ 1
#define __cplusplus 1
#define __DEPRECATED 1
#define __GNUG__ 4
#define __EXCEPTIONS 1
#define __private_extern__ extern
```


以下是 meson.build 脚本用 Meson 构建命令参考（glib-2.0 依赖可以省略，因为 gobject-2.0 已经包含）：

```py
project('Hello GObect', 'c', version: '0.0.1')
deps = [ dependency('glib-2.0', version:'=2.76.5'),
        dependency('gobject-2.0', version:'=2.76.5')]

message( 'gobject-2.0:', deps[1].found()?'++':'--not', 'found.' )

if deps[1].found()
    hello = executable('hello', sources:['hello.c'], dependencies: deps)
    # run test by `meson test` or `meson test "*hello"`
    test( 'test hello', hello, args: ['some', 'args'], is_parallel: false )
endif
```

```sh
meson setup build-example
meson compile -C build-example
meson test '*hello' -C build-example
```

以下是 Makefile 脚本参考：

```makefile
CFLAGS = $(shell pkg-config --cflags --libs "gobject-2.0")
OUTPUT = ../build-examples
ifeq ($(OS), Windows_NT)
    BINEXT=.exe
else
    BINEXT=
endif


ifneq "Makefile" "$(lastword $(MAKEFILE_LIST))"
    $(info Please run make under the same folder of Makefile.)
    $(info   cd $(dir $(lastword $(MAKEFILE_LIST))) && make)
    $(error )
endif

all : prepare $(OUTPUT)/hello$(BINEXT) test
  @echo All done.

$(OUTPUT)/hello$(BINEXT) : 
  @echo $(OUTPUT)
  $(CXX) -o $@ hello.c $(CFLAGS)

test :
  @echo ========== Run ==========
  $(OUTPUT)/hello $(CFLAGS)
  @echo ========== Done ==========

prepare : $(OUTPUT)
$(OUTPUT):
  if [ -d $(OUTPUT) ]; then echo Out: $(OUTPUT) ; else mkdir $(OUTPUT); fi

clear :
  rm -rf $(OUTPUT))
```

很难下结论说，到底 CMake、Meson 这类功能丰富的自动化构建功能好（甚至支持 CI/CD 功能），还是说 GNU Make 这种经典的小可爱好。双方都有优点和缺点。功能丰富意味着，学习它需要涉及更多的概念（心智负担、学习曲线），但是经过优化，有些功能可以做到开箱即用。比如说 Unit tests，可以在 meson.build 脚本中调用 `test` 函数设置需要进行单元测试的程序，它可以接收 `excutable` 函数返回的 exe 对象。如果事先不知道这一点，那么就会对编脚本中返回的 exe 对象形成抽象概念理解的困难。

Meson 单元测试使用 `meson test` or `meson test "*hello"` 等命令形式调用，生成的报告会保存在 `meson-logs/testlog.txt`。

使用传统的 Make 脚本，由于它功能特性保持稳定，一旦掌握就不需要消耗更多的精力去学习各种细枝末节的功能。并且，Make 也可以通过和第三方编程工具结合，比如 Node、Deno 或者 Python 等脚本编程工具实现各种功能，根本不需要用到 GNU Make 本身提供的 C/C++ 插件机制。

最后，使用 watch 工具进行开发测试依然是更方便的操作：

```sh
npm install -g watch
meson setup ../build-meson 
meson compile -C ../build-meson 
watch 'echo -------watching------- && meson test -C ../build-meson'
```

## 🍀 Static Class

在缺少文档的时候，源代码中提供的测试代码、脚本都算是不错的指导材料。虽然测试代码并不是用途指导目的，这会让这些代码的结构显式混杂，但是作为一后备材料还是可以的。

0. glib-2.78.0\gobject\gvaluetypes.c
1. glib-2.78.0\gobject\tests\basics-gobject.c
2. glib-2.78.0\gobject\tests\dynamictype.c
3. glib-2.78.0\gobject\tests\objects-refcount1.c
4. glib-2.78.0\gobject\tests\objects-refcount2.c
5. glib-2.78.0\gobject\tests\properties-refcount1.c
6. glib-2.78.0\gobject\tests\properties-refcount2.c
7. glib-2.78.0\gobject\tests\signals-refcount.c
8. glib-2.78.0\gobject\tests\testcommon.h
9. glib-2.78.0\gobject\tests\performance\performance-threaded.c

首先，要明确 GLib 各种结构的基本功能与关系，至少要清楚创建一个子类型的基本要素。
假定要派生一个 GObject 子类型，即定义一个类型通常需要：

1. 一个包含 `GObject` 的结构体作为类型实例的本体；
2. 一个包含 `GObjectClass` 的结构体作为类型本体；

参考 `g_type_module_get_type` 方法的实现，内部的 `GTypeModuel` 就是这样的一个子类型。GLib 内部使用 `g_type_register_static` 注册的类型，还可以称之为 Module Type。 glib-2.78.0\gobject\gtypemodule.c

可以使用 `GObject` 作为父类型进行扩展，它提供了以下功能：

1. 引用计数器 reference counting，当实例引用计数重置为 0 时就会回收其所占内存；
2. 子类型可以添加任意属性进行扩展；
3. 提供异步信号事件处理服务；

为了简化起见，现在来实现一个不能乾实例化操作的单例静态类型，所谓单例 Singleton 即是指只有一个实例存在的类，这是一种常用编程模式。

最简单的类型定义就是各种内置的值类型，参考宏符号 `G_REAL_CLOSURE`，以及注册各种值类型的 `_g_value_types_init` 方法。

另外，还可以使用 `g_type_fundamental_next (void)` 方法来获取自动生成的 Type ID。

`GTypeInfo` 中的 n_preallocs 字段适用于 GLib 2.10 之前版本，GLib 2.10 开始忽略此字段。用于指定预分配内存空间（预先保留内存空间），0 表示不使用缓存。

如果要定义派生类型，那么派生类型必需使用以上所说的父类型基础结构，在子类型工中称之为重叠结构 boilerplate，因此子类型占据内存空间必然比父类型多。否则，在注册类型时就会给出异常提示信息。如果，后续对错误的类型进行引用、实例化，则会触发运行时错误终止程序：

    GLib-GObject-CRITICAL **: 08:23:04.517: 
    specified class size for type 'KickStatic' is smaller than the parent type's 'GObject' class size
    
    GLib-GObject-CRITICAL **: 08:23:04.520
    : cannot retrieve class for invalid (unclassed) type '<invalid>'
          1 [main] static 638 cygwin_exception::open_stackdumpfile: 
          Dumping stack trace to static.exe.stackdump

与 `GObject` 相对应的是 `GObjectClass`，这个结构与 `GObectInfo` 结构同样重要。后者提供类型信息，前者为各种类型提供类型构建、析构、属性访问、消息机制等接口机制。全局类型的定义与注册在 `_g_object_type_init` 方法中完成。

如果是注册顶级基础类型，就像 `GObject` 不需要父类型的信息，使用 `g_type_register_fundamental` 方法进行注册。可以使用 `g_type_fundamental_next()` 为用户定义的顶级类型获取一个自动分配的 ID，

对于可以实例化的类型，那么就可以使用 `g_type_create_instance` 方法进行实例化。如果有成员方法，那么它应该接收一个 instance 作为第一个参数，成员方法的操作应该相对于这个指定的实例对象。就像 Python 中定义类成员方法时，第一个参数总是为 self。

因为类型 ID 已经登记在 GLib 类型节点树中，调用实例化方法时，就会根据指定类型 ID 找到相应的类型定义，并且判断此类型是否是 instantiatable 类型，如果确定是才可以继续进行实例化。

使用 `G_TYPE_CHECK_INSTANCE_TYPE` 或者 `G_TYPE_CHECK_INSTANCE_FUNDAMENTAL_TYPE` 两个宏就可以判断指定的实例与指定类型 ID 是否有关系，从而判断其是否为指定类型的实例。它们根据类型信息结构中提供的 `GTypeInstance` -> `GTypeClass` 关系链来确定其类型：instance->g_class->g_type。如果类型不能通过这个此方法判断，内部还有两个备选的方法，它们会调用 `lookup_type_node_I` 方法去 `TypeNode` 查找节点数据：

```cpp
gboolean g_type_check_instance_is_a (GTypeInstance *instance, GType iface_type) G_GNUC_PURE;
gboolean g_type_check_instance_is_fundamentally_a (GTypeInstance *instance, GType fundamental_type) G_GNUC_PURE;
```

项目尝试使用双 Makefile 设计，根目录中的 Makefile 只包含一条 `include src/Makefile` 指令，用于引用 src 目录下的主脚本。主脚本中实现的功能：

1. 设置默认的构建输出目录 OUTPUT = build-examples；
2. 设置默认的源代码目录 SRC = src；
3. 设置默认的构建输出的程序文件 BINS，包含 hello.c 和 static.c 两个演示程序；
4. 强制用户在根据目录中执行 make 命令，并将构建生成的文件保存在 OUTPUT 目录；
5. 检测系统是否 Windows NT，如果是就使用 .exe 作为默认程序扩展名；
6. 果系统还没有设置 PKG_CONFIG_SYSROOT_DIR 环境变量，就以 c:/msys64 为默认值；
7. 设置了测试功能，并且为每个程序 touch 一个 .test 目标文件用作更新时间检测；
8. 使用命令前缀 - 忽略错误，可以根据命令返回码来决定是否执行 touch .test；

依赖关系是 all -> prepare BINS test，在构建程序之前先准备创建好输出目录，构建完程序后，再执行测试。测试目标规则中，定义依赖对应的程序目标。每个程序目标规则定义了依赖的源代码文件，由于一个源代码文件生成一个程序，所以这种依赖处理起来显得更容易。另一方面，测试目标依赖关系是：test -> BINS -> sources，所以源代码更新会导致程序重新构建，进行导致测试需要重新执行。如果程序没有更新，就不会触发重新测试。主脚本中主要是使用了 Static Pattern Rules 来重新映射 Targets 或者依赖关系，同时结合高级变量引用表达 `$(VAR:%=%)`，实现目标命名的批量处理、得命名。参考 Make 手册 4.12 Static Pattern Rules 以及 6.3.1 Substitution References。

因为要对待测试程序的返回码乾验证，就需要将测试命令块定义为 `.ONESHELL`，这样才会在一个 shell 进程中执行命令，否则命令按行为单位执行，这就导致无法获取到前面程序的返回码。


Makefile 主脚本内容如下：

```makefile
OUTPUT := build-examples
SRC   := src
ifeq ($(OS), Windows_NT)
    BINEXT=.exe
else
    BINEXT=
endif
BINS = $(OUTPUT)/hello$(BINEXT)  $(OUTPUT)/static$(BINEXT)


ifneq "$(SRC)/Makefile" "$(lastword $(MAKEFILE_LIST))"
    $(info Please run make under the parent folder of Makefile.)
    $(info   cd $(dir $(lastword $(MAKEFILE_LIST))).. && make)
    $(error $(lastword $(MAKEFILE_LIST)))
endif

ifndef PKG_CONFIG_SYSROOT_DIR
    export PKG_CONFIG_SYSROOT_DIR=c:/msys64
endif
CFLAGS = $(foreach X,$(shell pkg-config --cflags --libs "gobject-2.0"),"$(X)")


all : prepare $(BINS) test
  @echo All done.

$(BINS) : $(OUTPUT)/%$(BINEXT) : $(SRC)/%.c
  @echo "Build $@ <-- $(SRC)/$*.c"
  $(CC) -o $@ $(SRC)/$*.c $(CFLAGS)

$(SRC)/%.c : 
  @echo "||| To check source file $@ ... "

test : $(BINS:%=%.test) ;

.ONESHELL:
$(BINS:%=%.test) : %.test : %
  @echo ========== Run ==========
  -$* $(CFLAGS)
  @if [ $$? = 0 ]; then echo touching .test; touch $@; else echo Test failed: $$?; fi
  @echo ========== Done ==========

prepare : $(OUTPUT) ;
$(OUTPUT):
  @if [ -d $(OUTPUT) ]; then echo Out: $(OUTPUT) ; else mkdir $(OUTPUT); fi

clean :
  rm -rf $(OUTPUT) $(BINS:$(OUTPUT)/%=%) $(BINS:$(OUTPUT)/%$(BINEXT)=%.o) 
```

以下为项目目录结构，build-examples 是构建输出目录，stackdump 文件是 GLib 程序运行时错误产生的内存转储文件：

```sh
.
|-- Makefile
|-- build-examples
|   |-- hello.exe
|   |-- hello.exe.test
|   |-- static.exe
|   `-- static.exe.test
|-- src
|   |-- Makefile    (Main Makefile)
|   |-- hello.c
|   |-- meson.build
|   `-- static.c
`-- static.exe.stackdump
```

经过以上目录结构设计，就可以很方便地使用 watch 工具进行监测并自动捃重新构建，几乎就是完全自动化的开发构建体验。另外，配合 Sublime Text + Origami 布局插件 + Terminus 控制台插件，使用体验略胜 VS Code（除程序调试功能外）。

```sh
npm install -g watch
watch 'echo -------watching------- && make'
```

测试程序应该输出类似以下内容，如果是这样，那么恭喜你已经可以开发 GObject 应用了！

```sh
-------watching-------
Build build-examples/static.exe <-- src/static.c
========== Run ==========
Type Basic Info:
        TYPE ID: 196
      Tppe Name: KickFundament
    Parent Type: INVALID
Type Query Info:
        TYPE ID: 196
      Tppe Name: KickFundament
     Class Size: 144
  Instance Size: 32
Type Basic Info:
Type message: Hello, World!
```

## 🍀 Derived Class

C 语言结构体中的数据成员一般称为字段，也可以称为属性（Attributes）。Object-oriented Programming (OOP) 引进了一个新概念：Properties，即就是指那些需要通过 getter 和 setter 方法控制访问的属性，象征它们比一般的属性更高贵。

这样的功能对应在 `GObjectClass` 定义的两个专用 API，因此这是一种集中式的属性访问接口：

```cpp
  /* overridable methods */
  void       (*set_property)    (GObject        *object,
                                         guint           property_id,
                                         const GValue   *value,
                                         GParamSpec     *pspec);
  void       (*get_property)    (GObject        *object,
                                         guint           property_id,
                                         GValue         *value,
                                         GParamSpec     *pspec);
```

使用此功能，就需要在类型基础结构中定义 `GObjectClass` 为重叠属性，然后在类型初始化函数中，使用 `G_OBJECT_CLASS`（内部调用 G_TYPE_CHECK_CLASS_CAST）将类型转换为 `GObjectClass`，再设置 set_property 和 get_property 这两个函数指针指向相应的属性访问控制函数。属性 ID 完全根据需要定义相应的常量即可，调用以上 `g_object_get_property` 或者 `g_object_set_property` 时传入对应值。

```cpp
void        g_object_set_property             (GObject        *object,
                 const gchar    *property_name,
                 const GValue   *value);

void        g_object_get_property             (GObject        *object,
                 const gchar    *property_name,
                 GValue         *value);
```

创建 `GObject` 类型实例或者引用就对应了引用计数器自增，调用 `g_object_unref` 则释放引用：

```cpp
gpointer    g_object_newv  (GType         object_type,
                               guint      n_parameters,
                          GParameter     *parameters);
gpointer    g_object_ref   (gpointer        object);
void        g_object_unref (gpointer        object);
```

https://developer-old.gnome.org/gobject/unstable/howto-gobject.html
官方教程演示了三种不同形式的类成员方法的定义：

1. Non-virtual public methods
2. Virtual public methods
3. Virtual private Methods

和类型、实例有关的两组织检测方法：G_TYPE_CHECK 前缀表示与类型检查相关的宏符号，CAST 后缀表示类型转换，TYPE 后缀表示类型判断。

与私有成员相关的两个宏符号：分别用于获取类型、类型实例中的私有结构：

```cpp
#define G_TYPE_INSTANCE_GET_PRIVATE(instance, g_type, c_type) \
              ((c_type*) g_type_instance_get_private ((GTypeInstance*) (instance), (g_type)))
#define G_TYPE_CLASS_GET_PRIVATE(klass, g_type, c_type) \
              ((c_type*) g_type_class_get_private ((GTypeClass*) (klass), (g_type)))

#define G_TYPE_CHECK_CLASS_CAST(g_class, g_type, c_type)        (_G_TYPE_CCC ((g_class), (g_type), c_type))
#define G_TYPE_CHECK_CLASS_TYPE(g_class, g_type)                (_G_TYPE_CCT ((g_class), (g_type)))

#define G_TYPE_CHECK_INSTANCE_CAST(instance, g_type, c_type)    (_G_TYPE_CIC ((instance), (g_type), c_type))
#define G_TYPE_CHECK_INSTANCE_TYPE(instance, g_type)            (_G_TYPE_CIT ((instance), (g_type)))

#define G_TYPE_INSTANCE_GET_CLASS(instance, g_type, c_type)     (_G_TYPE_IGC ((instance), (g_type), c_type))

void g_type_class_add_private (gpointer g_class, gsize private_size);
```

## 🍀 Use Interface

## 🍀 Use SIgnals

