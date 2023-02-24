feast -> eat -> fest -> festering
ellipsis -> elapse ->ellipse
precious -> treasure -> Jewellery


putrid

fetid
went extinct
Don’t seek death through the error of your ways. Don’t invite destruction on yourself by what you do.
creepy
greedy


# 🚩 QuickJS - JavaScript Engine
- JSLinux - Operating Systems in your browser! https://bellard.org/jslinux/
- FFMPEG - Open Source Multimedia System http://ffmpeg.org/
- QEMU - a generic machine emulator and virtualizer http://qemu.org/
- TCC - a tiny but complete ISOC99 C compiler https://bellard.org/tcc/
- OTCC - Obfuscated Tiny C Compiler https://bellard.org/otcc/
- QuickJS JavaScript Engine https://bellard.org/quickjs/quickjs.html
- QuickJS IEEE 754 Library https://bellard.org/libbf
- QuickJS 引擎一年见闻录 https://zhuanlan.zhihu.com/p/161722203
- JavaScript 20年 https://github.com/doodlewind/jshistory-cn
- mingw-w64 GCC for Windows 64 & 32 bits http://mingw-w64.org/doku.php/start
- Cross Compile to Windows From Linux https://arrayfire.com/cross-compile-to-windows-from-linux/

QuickJS 各种语言绑定：

- txiki.js - QuickJS + libuv and ❤️ https://github.com/saghul/txiki.js
- Sciter https://sciter.com/
- qjsuv - QuickJS ❤️ libuv https://github.com/saghul/qjsuv
- QuickJS - * https://github.com/quickjs-zh/QuickJS
- QuickJS - Windows build https://github.com/mengmo/QuickJS-Windows-Build/releases
- QuickJS - MS Visual Studio port https://github.com/c-smile/quickjs/
- QuickJS - C++ https://github.com/c-smile/quickjspp/
- QuickJS-iOS https://github.com/siuying/QuickJS-iOS
- quickjs-rs Rust wrapper https://github.com/quickjs-zh/quickjs-rs
- go-quickjs Go https://github.com/wspl/go-quickjs
- QuickJS - Python wrapper https://github.com/PetterS/quickjs
- QuickJS - Android https://github.com/seven332/quickjs-android

Fabrice Bellard 大佬的成就：

1972 年，天才降生上大学之前重写了LZSS压缩算法，解压软件速度快体积小。

1997 年，他发布了最快速的计算圆周率的算法，此算法是 Bailey-Borwein-Plouffe 公式的变体，前者的时间复杂度是O(n^3)，他给优化成了O(n^2)，使得计算速度提高了43%，这是他在数学领域的成就。

2000 年，他化名 Gérard Lantau，创建了 FFmpeg 项目，强大的多媒体音视频处理工具。FFmpeg 易扩展、功能强、速度快、占资源少，支持的音视频格式极其广泛，基本上超越了其他所有同类软件，这是他在多媒体处理领域的巨大成就。暴风影音、QQ影音、格式工厂，还有 YouTube、VLC 等都使用其编解码函数库，前三者因为不遵守开源协议被 FFmpeg 挂在官网耻辱榜 Hall of Shame 昭告天下。

2000-2002 年，他赢得两次国际 IOCCC - International Obfuscated C Code Contest 大赛，国际混淆 C 代码大赛，第一个作品写了个 4KB 大小的 C 语言编译器子集 OTCC，这可以算作是 TinyCC 的前身；第二个作品写了个 475B 大小的用于打印已知最大素数的程序，使用傅里叶变换。

2002 年他发布了 TinyGL，这是 OpenGL 的一个子集实现，体积小速度快，占资源还少，这是他在图像处理领域的成就。

2003 年开发了 QEmacs，是 Emacs 的一个变种。

2004 年8月在 OTCC 的基础上继续完善，使之具备了能够编译 Linux 内核的能力，这就是符合 ISOC99 C 标准的 TinyCC 的正式版，简称 TCC。为了证明 TCC 的威力，他又写了一个只有 138KB 的启动加载程序 TCCBOOT，可以在 15 秒内从源代码编译并启动 Linux 内核。

2005 年，Bellard 发布了 QEMU 开源虚拟机技术，仿真各种流行 CPU 及外设，Run operating systems for any machine, on any supported architecture。这是个爆炸性的项目，现在众多底层开发人员已经离不开它，可用来研究系统底层，学习嵌入式开发，相当的强大。开发这玩意儿需要非常广泛的底层硬件和操作系统知识，一般人搞不定。QEMU 的技术已经被应用于 KVM、XEN、VirtualBox 等多个虚拟化项目中。他至少领导了 QEMU 项目 4 年，这是他在虚拟化领域的成就。同年，他用普通 PC 和 VGA 卡设计了一个数字电视系统。

2009 年 12 月 31 日，他声称打破了圆周率计算的世界纪录，仅用一台普通 PC 机，耗时 116 天，算出了圆周率小数点后 2.7 万亿位，比 2009 年 8 月 17 日由超级计算机算出的世界纪录多了 1200 亿位。凭借这个突出的数学贡献，他登上了《科学美国人》法文版。

2011 年，他用 JavaScript 写了一个 PC 虚拟机 JSlinux 。这个虚拟机仿真了一个 32 位的 x86 兼容处理器，一个 8259 可编程中断控制器，一个 8254 可编程中断计时器，和一个 16450 UART。

2019-07-09 - QuickJS first public release.

我试着在 Chrome 浏览器上运行了 JSLinux，并成功执行 QuickJS：

```js
qjs > Number.MAX_SAFE_INTEGER
9007199254740991
``` 

还在浏览器上运行了 DOS 系统，还有 Windows 2000，都可以正常启动和使用，真的是太强大！所以，我断了一下网络，让虚拟机加载不了文件，再点一下开始菜单，然后 Windows 2000 系统的开始按键就再也起不来了。桌面也再也不响应了，所以这个问题其实不是问题，如果是问题，那一定是微软的问题，因为大神是不会有任何问题。如果大神有问题，JSLinux 就不可能可以运行 DOS 也不可能运行 Linux，更不可能运行闭源的 Windows。


QuickJS 的主要特性：

- 可嵌入：仅几个 C 文件，没有外部依赖，简单的 Hello World 程序需要 210 KiB 的 x86 代码。
- 快速启动：在单核的桌面 PC 上，运行 ECMAScript 测试套件的 75000 个测试大约在 100 秒内。
- 几乎完整支持 ES2020 的引用模块、异步生成器、完整的附录 B 支持，传统 Web 兼容性。
- ECMAScript 测试套件精选 ES2020 特性 100% 通过，总结报告参考 Test262 Report。
- 可以编译 JavaScript 源代码到可执行文件，而没有外部依赖，先生成 C 代码再编译成可执行程序。
- 垃圾回收使用引用计数（减少内存使用并具有确定性行为）和循环删除。
- 数学扩展：`BigInt`、`BigFloat`、操作符重载、bigint 模式、数学模式。
- 命令行解释器，用 JavaScript 在控制台上实现上下文着色。
- 内建小型 C 语言标准库。

QuickJS 内嵌以下 C 语言库：

- libregexp: 小巧快速的正则表达式库，完全兼容 ES2019。
- libunicode: 小型的 Unicode 全球码支持，支持编码转换、Unicode 规格化、Unicode script queries, unicode general category queries and all unicode binary properties.
- libbf: 一个小型浮点库，但实现任意精度的 IEEE 754 浮点运算和和超越函数，它作为一个单独的项目进行维护。

项目默认为 Linux 环境配置，Windows 支持需要通过 Linux 主机上 MingGW 进行交叉编译，可以在官网下载 mingw-w64 Pre-built toolchains，选择 Host 类型为工作主机使用的系统类型。

GCC 编译套件 GNU Compiler Collection 是免费的 C/C++ 等语言的编译器，而 MinGW-w64 则是通过 GCC 实现目标为 Windows 32-bit 或 64-bit 系统的程序编译工具。MinGW 可以运行在多种操作系统中，也可以在 Windows 上运行，如果一种操作系统中编译另一种目标系统上运行的程序，就是交叉编译，如 Cross Compile to Windows From Linux。

```sh
sudo apt-get install mingw-w64

# C
i686-w64-mingw32-gcc hello.c -o hello32.exe      # 32-bit
x86_64-w64-mingw32-gcc hello.c -o hello64.exe    # 64-bit

# C++
i686-w64-mingw32-g++ hello.cc -o hello32.exe     # 32-bit
x86_64-w64-mingw32-g++ hello.cc -o hello64.exe   # 64-bit
```

编译 QuickJS 得到命令主要有两个：

- qjs - 脚本解析器和交互命令。
- qjsc - 脚本编译器，可以生成 C 代码，也可以生成可执行程序，如 `qjsc -o hello hello.js`。

编译命令功能：

    QuickJS Compiler version 2021-03-27
    usage: qjsc [options] [files]

    options are:
    -c          only output bytecode in a C file
    -e          output main() and bytecode in a C file (default = executable output)
    -o output   set the output filename
    -N cname    set the C name of the generated data
    -m          compile as Javascript module (default=autodetect)
    -D module_name         compile a dynamically loaded module or worker
    -M module_name[,cname] add initialization code for an external C module
    -x          byte swapped output
    -p prefix   set the prefix of the generated C names
    -S n        set the maximum stack size to 'n' bytes (default=262144)
    -flto       use link time optimization
    -fbignum    enable bignum extensions
    -fno-[date|eval|string-normalize|regexp|json|proxy|map|typedarray|promise|module-loader|bigint]
                disable selected language features (smaller code size)

在 Fabrice 主页上，还公布了由 QuickJS 编译的 Typescript 编译器。

为了展示 QuickJS，Fabrice 还用 BitInt、BitFloat、BigDecimal 实现了实现丘德诺夫斯基 Chudnovsky 级数算法 PI 求值示范程序。

以下是 Core i5 4570 CPU at 3.2 GHz 机器上计算 100 000 位数 π 值的性能比较：

    | Size(digits) | QuickJS(2020-01-05) | Spider Monkey (C70.0a1) | V8(7.7.289) |
    |--------------|---------------------|-------------------------|-------------|
    | 100 000      | 0.26 s              | 3.6 s                   | 2.3 s       |

当然，Fabrice 也说明了这个值不公平，因为其它引擎并不是 PI 求值优化的。

更合理的是 QuickJS Benchmark 显示的数据，高分为好：

|      Engine     | QuickJS | DukTape |  XS  | MuJS | JerryScript | Hermes | V8 --jitless | V8 (JIT) |
|-----------------|---------|---------|------|------|-------------|--------|--------------|----------|
| Executable size | 620K    | 331K    | 1.2M | 244K | 211K        | 27M    | 28M          | 28M      |
| Richards        | 777     | 218     | 444  | 187  | 238         | 818    | 1036         | 29745    |
| DeltaBlue       | 761     | 266     | 553  | 245  | 209         | 651    | 1143         | 65173    |
| Crypto          | 1061    | 202     | 408  | 113  | 255         | 1090   | 884          | 34215    |
| RayTrace        | 915     | 484     | 1156 | 392  | 286         | 937    | 2989         | 69781    |
| EarleyBoyer     | 1417    | 620     | 1175 | 315  | -           | 1728   | 4583         | 48254    |
| RegExp          | 251     | 156     | -    | 155  | -           | 335    | 2142         | 7637     |
| Splay           | 1641    | 1389    | 1048 | 36.7 | -           | 1602   | 4303         | 26150    |
| NavierStokes    | 1856    | 1003    | 836  | 109  | 394         | 1522   | 1377         | 36766    |
| (w/o RegExp)    | 1138    | 468     | 738  | 159  | -           | 1127   | 1886         | 41576    |
| Total score     | 942     | 408     | -    | 158  | -           | 968    | 1916         | 33640    |

可以看到，对于 V8 是否启用 JIT 技术，结果差别很极大，Just-in-time 对运行效率的提升是极大的，所以解析器是否支持 JIT 应该区别对待。

QuickJS 在小型，即无 JIT 技术的解析器中属性高性能的队伍，但与 V8 JIT 的性能还有几十倍的差距。

Test 细节：

所有测试引擎都是解释器，可能在有限的资源下运行。V8 引擎的性能也可以作为使用 JIT 技术的高性能引擎的参考，并为此基准进行了优化跑分。

使用编译器版本 gcc 4.9.2 on a Fedora 21，测试主机环境 Core i5 4570 CPU at 3.2 GHz。

- QuickJS: 版本 2019-07-09, `qjs` 64bit 可执行程序，使用 -O2 优化。
- DukTape: 版本 2.3.0, `duk` 64bit 可执行程序，使用 -O2 优化。
- XS: 版本 8.8.0, `xst` 64bit 可执行程序，使用 -O3 优化。不能正确运行 RegExp 测试。
- MuJS: 版本 1.0.6, `mujs` 64bit 可执行程序，使用 -O2 优化，JS_STACKSIZE、JS_ENVLIMIT 设置为 32768 运行 EarleyBoyer，REG_MAXSUB=12 运行 RegExp。
- JerryScript: 版本 git 2b8c4286, `jerry` 64bit 可执行程序 不支持 EarleyBoyer, RegExp 和 Splay。
- Hermes: 版本 0.1.0, Linux 64bit 可执行程序，使用 -O 编译优化 (=enable expensive optimizations)。
- V8: 版本 7.7.289, Linux 64 bit 可执行程序。


初等函数 elementary function 指与常数经过有限次的有理运算（加、减、乘、除、有理数次乘方、有理数次开方）及有限次函数复合所产生，并且能用一个解析式表示的函数。

如三角函数、对数函数，反三角函数，指数函数，等就属于超越函数，它们属于初等函数中的初等超越函数。

初等函数包括：

- 幂函数（power function）
- 指数函数（exponential function）
- 对数函数（logarithmic function）
- 三角函数（trigonometric function）
- 反三角函数（inverse trigonometric function）

超越函数 Transcendental Functions 指变量之间的关系不能用有限次加、减、乘、除、乘方、开方运算表示的函数，也就是不满足以多项式作系数的多项式方程的函数。说的更技术一些，单变量函数若为代数独立于其变量的话，即称此函数为超越函数。超越函数这个名词通常被拿来描述三角函数，例如正弦、余弦、正割、余割、正切、余切、正矢、半正矢等。


