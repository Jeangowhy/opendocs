
# 🚩 Language Reference
- PHP 8.1.0 Manual - Language Reference

PHP LSP 服务安装，Phpactor requires PHP 8.1.

```sh
# PHAR Installation
$ curl -Lo phpactor.phar https://github.com/phpactor/phpactor/releases/latest/download/phpactor.phar
$ curl -Lo phpactor.phar https://github.com/phpactor/phpactor/releases/download/2023.09.24.0/phpactor.phar
# Then make it executable and symlink it somewhere in your PATH:
$ chmod a+x phpactor.phar
$ mv phpactor.phar ~/.local/bin/phpactor

# Manual Installation
# https://getcomposer.org/download/
# curl -o 'composer-setup.php' https://getcomposer.org/installer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

$ cd ~/home/you/somewhere
$ git clone https://github.com/phpactor/phpactor.git
$ cd phpactor
$ composer install
$ cd /usr/local/bin
$ sudo ln -s ~/your/projects/phpactor/bin/phpactor phpactor
```

## ==⚡ Parallel Extension Compile
https://www.php.net/downloads.php
https://windows.php.net/downloads/php-sdk/
https://pecl.php.net/package/parallel
https://www.php.net/manual/en/install.pecl.windows.php
https://github.com/php/php-sdk-binary-tools/archive/refs/tags/php-sdk-2.2.0.zip

PEAR - PHP Extension and Application Repository 是官方的扩展模块打包系统，新版本的扩展模块管理中心是 PECL，但是都不是很好用。

parallel requires a build of PHP with ZTS (Zend Thread Safety) enabled (`--enable-zts`, or on non-Windows systems prior to PHP 8.0.0, `--enable-maintainer-zts`)

Caution
Zend Thread Safety cannot be enabled post build; it is a build time configuration option.

parallel should build anywhere there is a working Posix Threads header (pthread.h) and ZTS build of PHP, including Windows (using the pthread-w32 project from redhat).

使用 php -i 命令可以查看是否启用了线程安全模式编译，Thread Safely 对应显示为 enabled 即为线程安全模式编译的 PHP。

Thread-Safety (TS) 线程安全模式编译的 PHP 对多线程运行采用加锁机制，多个线程访问某个加锁数据时，同时只能允许一个线程访问，其他线程需要等待解锁。None Thread Safely (NTS) 没有使用加锁保护，需要用户保证数据逻辑在多线程下的安全性。

在线程安全模式下，还需要使用 --enable-zts 即启用 Zend Thread Safely (ZTS) 才能够使用最新的 parallel 扩展模块。

首先，到 PHP 源代码下载页面获取开发包，Development package (SDK to develop PHP extensions)。工具包中有头文件和导入库，还有 phpize.bat 脚本文件，它负责基本的配置：设置编译器及头文件路径等等。

Windows 环境构建新版本 PHP 环境要求：

1. Visual C++ 14.0 (Visual Studio 2015) for PHP 7.0 or PHP 7.1.
2. Visual C++ 15.0 (Visual Studio 2017) for PHP 7.2, PHP 7.3 or PHP 7.4.
3. Visual C++ 16.0 (Visual Studio 2019) for master.

另外，还需要使用到一些常用的工具，如 Bison。Windows 系统可以下载 php-sdk-binary-tools，它打包了这些工具，也可以直接使用 Msys2 环境安装。

接下来，到 PECL 下载扩展模块源代码，并且在源代码目录下运行：

```sh
phpize
./configure --with-parallel
make
```

新版本 PHP 使用 parallel 扩展支持多线程编程，相比旧版本使用的 pthread 并不支持 Windows 系统。官方 PECL 站点只提供了 PHP 7.x 版本的 paralle 二进制文件。

PHP 源代码包中的 ext/ext_skel.php 脚本以及 skeleton 目录是扩展模块骨架生成脚本，可以使用它作为扩展起步：

```sh
php ext_skel.php --ext learn_ext
cd learn_ext
phpize
./configure --enabled-learn_ext
make
```

编译完成后，扩展源代码文件 learn_ext.c 生成对应的 modules/learn_ext.so 扩展库。

执行 GNU Make 可能会报错，正常情况下，此错误信息是因为规则中的命令块没有使用 TAB 作为缩进时触发的：

    Makefile:77: *** missing separator.  Stop.

打开 Makefile 脚本检查，可以发现使用了 !if !else !endif 等非标准宏符号，这是 NMake 的操作，应该使用 M$ 版本的 nmake 命令进行构建。

另外，可能因为错误使用配置脚本，没有使用 `--enabled-learn_ext`，导致生成的 Makefile 构建目标规则错误而没有扩展库生成，构建目标依赖的 EXT_TARGETS 变量没有设置相关的模块名称。正确配置应该可以在配置脚本打印内容中的 Enabled extensions 列表中看到相关的扩展名称。否则，检查输出的警告信息，例如警告指示需要使用 Zend Thread Safely 版本的 PHP。使用启用 ZTS 编译的 PHP 会显示 php8ts.lib 依赖库，但仍需要 pthread 头文件：

    WARNING: Parallel extension requires ZTS build of PHP on windows
    WARNING: parallel not enabled; pthread headers not found

    PHP Core:  php8ts.dll and php8ts.lib

1. http://sources.redhat.com/pthreads-win32
2. https://www.sourceware.org/pthreads-win32
3. https://packages.msys2.org/search?q=pthread
4. http://www.mirrorservice.org/sites/sourceware.org/pub/pthreads-win32/

注意，Posix Threads header (pthread.h) 线程库不是 PHP pthreads 模块，Windows 系统上使用 Redhat 移植过来的 pthreads-w32 替代。PHP 旧的线程模块最后版本停止在 7.4， Halting development of pthreads for 7.4 #929。旧版本可在 PECL 中心下载 Pthreads 模块源代码，并解压到 php/ext 目录下，需要重新生成配置脚本以使用扩展模块生效：

```sh
> buildconf --force
> configure --help | grep pthreads
  --with-pthreads                   for pthreads support
  
> congifure --enable-zts --with-pthreads

Checking for pthread.h ...  <not found>
Checking for pthread.h ...  <not found>
WARNING: pthreads not enabled; libraries and headers not found
```

启用模块并且没有提示找不到头文件，就可以正常编译。已加入模块，但提示找不到头文件，问题。

使用 Msys2 编译环境，可以安装 winpthread 依赖库，此库没有提供 .pc 配置文件，pkg-config 工具不能自动检测到此依赖库，可以自行编写 lib\pkgconfig\pthread.pc：

```sh
prefix=/usr
includedir=${prefix}/include
libdir=${prefix}/lib

Name: pthread
Description: POSIX Threads for Win32. MinGW-w64 winpthreads library.
Version: 11.0.0.r170.g833753684-1
Libs: -L${libdir} -lpthread -lwinpthread
Cflags: -I${includedir}
```

另外，使用 MSVC 命令行环境时，需要使用正确的平台配置信息，否则编译到链接阶段会报错找不到符号。默认为 x86 平台，可以根据需要指定构建目标平台。vcvarsall.bat 是 MSVC 环境配置脚本，其它通过传递平台参数来调用它，比如 amd64_x86 就交叉编译环境，HOST=amd64，TARGET=x86：

    cmd.exe /k "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x86_amd64

    C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build
    |-- vcvars32.bat
    |-- vcvars64.bat
    |-- vcvarsall.bat
    |-- vcvarsamd64_x86.bat
    `-- vcvarsx86_amd64.bat

PowerShell 环境下可以使用 Launch-VsDevShell，它使用 -Arch 或 -HostArch 参数传递编译平台信息：

     &"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\Launch-VsDevShell.ps1" -Arch arm64

Windows 系统下要 PHP 源代码可以使用 buildconf.js 脚本，如果提示工具版本不兼容，则运行更新版本的 PHP-SDK-2.0 提供的环境配置脚本。另外，配置脚本并没有提供 --with-parallel 这样的配置项，需要 另外构建这个扩展：

```sh
> cscript win32/build/buildconf.js
> .\configure.bat --enabled-zts
ERROR: Incompatible binary tools version. Please consult
https://wiki.php.net/internals/windows/stepbystepbuild_sdk_2
> phpsdk-vs16-x64.bat
[vcvarsall.bat] Environment initialized for: 'x64'

PHP SDK 2.2.0
OS architecture:    64-bit
Build architecture: 64-bit
Visual C++:         14.29.30148.0
PHP-SDK path:       C:\php-sdk-2.2.0

> configure.bat --enable-zts --with-openssl --with-parallel
> nmake
```

pthread.h 头文件有可能出现符号重复定义，临时解决方法是在头文件头部添加 HAVE_STRUCT_TIMESPEC 符号避免 pthread 重复定义 timespec：

```cpp
#if !defined( PTHREAD_H )
#define PTHREAD_H
#define HAVE_STRUCT_TIMESPEC
...
#if !defined(HAVE_STRUCT_TIMESPEC)
#define HAVE_STRUCT_TIMESPEC
...
struct timespec {
        time_t tv_sec;
        long tv_nsec;
};
```

下载预构建的 Pthreads-w32，它提供了 MSVC 和 GNU C (MinGW32 MSys development kit) 构建的库文件。文件命令规则参考 Readme 文档，将 MSVC 版本文件拷贝到其安装目录下以备使用，然后将 DLL 文件放到环境变量搜索路径中的目录下：

    C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\14.35.32215

```sh
In general:
    pthread[VG]{SE,CE,C}[c].dll
    pthread[VG]{SE,CE,C}[c].lib

where:
    [VG] indicates the compiler
    V   - MS VC, or
    G   - GNU C

    {SE,CE,C} indicates the exception handling scheme
    SE  - Structured EH, or
    CE  - C++ EH, or
    C   - no exceptions - uses setjmp/longjmp

    c   - DLL compatibility number indicating ABI and API
          compatibility with applications built against
          a snapshot with the same compatibility number.
```

注意，如果自行构建 PHP 源代码，就应该覆盖掉下载好的 PHP-Dev 依赖库。并且一并将 main\config.w32.h 配置文件，以及 devl 目录下生成的脚本覆盖到 PHP-Devl 开发库。它包含了编译器 以及不能随意变换编译器标识 `PHP_COMPILER_ID`，这个值会被用来检测 ABI 是否兼容。否则，使用旧版本 PHP-Dvel 文件就可能导致 PHP 加载模块时提示编译的模块不兼容（其实是同一个编译器的生成文件）。

    #define PHP_COMPILER_ID "VS17"

    Warning: Can't load module 'php_parallel.dll' as it's linked with 14.35, but the core is linked with 14.29

    Warning: PHP Startup: parallel: Unable to initialize module
    Module compiled with build ID=API20220829,TS,VS16
    PHP    compiled with build ID=API20220829,TS,VS17

如果是相近 PHP 版本发布的 Development package (SDK to develop PHP extensions)，也可以尝试直接修改 PHP_COMPILER_ID 值以更新编译器信息，而不必再覆盖诸多文件。

    php_parallel.dll doesn't appear to be a valid Zend extension

另外，parallel 应该设置为 extension 扩展，而非 zend_extension，配置文件参考如下：

```sh
extension_dir=/php-8.2.10-src/x64/Release_TS
zend_extension=php_opcache.dll
extension=parallel
opcache.file_cache=/php-8.2.10-src/x64/Release_TS/test_file_cache
opcache.enable=1
opcache.enable_cli=1
```


## ==⚡ • Basic syntax

### ===🗝 • PHP tags

When PHP parses a file, it looks for opening and closing tags, which are <?php and ?> which tell PHP tostart and stop interpreting the code between them. Parsing in this mannerallows PHP to be embedded in all sorts of different documents, aseverything outside of a pair of opening and closing tags is ignored by thePHP parser. 

PHP includes a short echo tag `<?=` which is ashort-hand to the more verbose `<?php` echo. 


Example #1 PHP Opening and Closing Tags


```php
 1.  <?php echo 'if you want to serve PHP code in XHTML or XML documents,
                 use these tags'; ?>
 
 2.  You can use the short echo tag to <?= 'print this string' ?>.
     It's equivalent to <?php echo 'print this string' ?>.
 
 3.  <? echo 'this code is within short tags, but will only work '.
             'if short_open_tag is enabled'; ?>
```


Short tags (example three) are available by default but can be disabledeither via the short_open_tag php.ini configuration file directive, or are disabled by default ifPHP is built with the --disable-short-tags configuration. 


Note: 

As short tags can be disabled it is recommended to only use the normaltags (<?php ?> and <?= ?>) tomaximise compatibility. 


If a file contains only PHP code, it is preferable to omit the PHP closing tagat the end of the file. This prevents accidental whitespace or new linesbeing added after the PHP closing tag, which may cause unwanted effectsbecause PHP will start output buffering when there is no intention fromthe programmer to send any output at that point in the script. 

```php
<?php
echo "Hello world";

// ... more code

echo "Last statement";

// the script ends here with no PHP closing
```


### ===🗝 • Escaping from HTML

Everything outside of a pair of opening and closing tags is ignored by thePHP parser which allows PHP files to have mixed content. This allows PHPto be embedded in HTML documents, for example to create templates. 


```php
<p>This is going to be ignored by PHP and displayed by the browser.</p>
<?php echo 'While this is going to be parsed.'; ?>
<p>This will also be ignored by PHP and displayed by the browser.</p> 
```


This works as expected, because when the PHP interpreter hits the ?> closingtags, it simply starts outputting whatever it finds (except for theimmediately following newline - see instruction separation)until it hits another opening tag unless in the middle of a conditionalstatement in which case the interpreter will determine the outcome of theconditional before making a decision of what to skip over.See the next example. 

Using structures with conditions 


Example #1 Advanced escaping using conditions

```php
<?php if ($expression == true): ?>
  This will show if the expression is true.
<?php else: ?>
  Otherwise this will show.
<?php endif; ?>  
```


In this example PHP will skip the blocks where the condition is not met, eventhough they are outside of the PHP open/close tags; PHP skips them accordingto the condition since the PHP interpreter will jump over blocks containedwithin a condition that is not met. 

For outputting large blocks of text, dropping out of PHP parsing mode isgenerally more efficient than sending all of the text through echo or print. 


Note: 

If PHP is embeded within XML or XHTML the normal PHP <?php ?> must be used to remain compliantwith the standards. 


### ===🗝 • Instruction separation


As in C or Perl, PHP requires instructions to be terminatedwith a semicolon at the end of each statement. The closing tagof a block of PHP code automatically implies a semicolon; youdo not need to have a semicolon terminating the last line of aPHP block. The closing tag for the block will include the immediatelytrailing newline if one is present. 


Example #1 Example showing the closing tag encompassing the trailing newline


```php
<?php echo "Some text"; ?>
No newline
<?= "But newline now" ?>  
```


The above example will output:


    Some textNo newline
    But newline now


Examples of entering and exiting the PHP parser: 


```php
<?php
    echo 'This is a test';
?>

<?php echo 'This is a test' ?>

<?php echo 'We omitted the last closing tag';  
```


Note: 

The closing tag of a PHP block at the end of a file is optional,and in some cases omitting it is helpful when using includeor require, so unwanted whitespace willnot occur at the end of files, and you will still be able to addheaders to the response later. It is also handy if you use outputbuffering, and would not like to see added unwanted whitespaceat the end of the parts generated by the included files. 


### ===🗝 • Comments

PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments. For example: 


```php
<?php
    echo 'This is a test'; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo 'This is yet another test';
    echo 'One Final Test'; # This is a one-line shell-style comment
?>  
```


The "one-line" comment styles only comment to the end ofthe line or the current block of PHP code, whichever comes first.This means that HTML code after // ... ?> or # ... ?> WILL be printed:?> breaks out of PHP mode and returns to HTML mode, and // or # cannot influence that. 


```php
 <h1>This is an <?php # echo 'simple';?> example</h1>
<p>The header above will say 'This is an  example'.</p> 
```


'C' style comments end at the first `*/` encountered.Make sure you don't nest 'C' style comments. It is easy to make thismistake if you are trying to comment out a large block of code. 


```php
<?php
 /*
    echo 'This is a test'; /* This comment will cause a problem */
 */
?> 
```


## ==⚡ • Types

• Introduction

PHP supports ten primitive types. 

Four scalar types: 

◦ bool  
◦ int  
◦ float (floating-point number, aka double)  
◦ string  

Four compound types: 

◦ array  
◦ object  
◦ callable  
◦ iterable  

And finally two special types: 

◦ resource  
◦ NULL  

Some references to the type "double" may remain in the manual. Considerdouble the same as float; the two names exist only for historic reasons. 

The type of a variable is not usually set by the programmer; rather, it isdecided at runtime by PHP depending on the context in which that variable isused. 


Note: To check the type and value of an expression, use the var_dump() function.  

To get a human-readable representation of a type for debugging, use the gettype() function. To check for a certain type, do not use gettype(), but rather the is_type functions. Someexamples: 


```php
<?php
$a_bool = TRUE;   // a boolean
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string
$an_int = 12;     // an integer

echo gettype($a_bool); // prints out:  boolean
echo gettype($a_str);  // prints out:  string

// If this is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}

// If $a_bool is a string, print it out
// (does not print out anything)
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
?>  
```


To forcibly convert a variable to a certain type, either cast the variable or usethe settype() function on it. 

Note that a variable may be evaluated with different values in certainsituations, depending on what type it is at the time. For more information,see the section on TypeJuggling. The type comparisontables may also be useful, as they show examples of varioustype-related comparisons. 


### ===🗝 • Booleans


This is the simplest type. A bool expresses a truth value. Itcan be either true or false. 


Syntax 

To specify a bool literal, use the constants true or false. Both are case-insensitive. 


```php
<?php
$foo = True; // assign the value TRUE to $foo
?>  
```

Typically, the result of an operatorwhich returns a bool value is passed on to a control structure. 


```php
<?php
// == is an operator which tests
// equality and returns a boolean
if ($action == "show_version") {
    echo "The version is 1.23";
}

// this is not necessary...
if ($show_separators == TRUE) {
    echo "<hr>\n";
}

// ...because this can be used with exactly the same meaning:
if ($show_separators) {
    echo "<hr>\n";
}
?>  
```


Converting to boolean 

To explicitly convert a value to bool, use the (bool) or (boolean) casts. However, inmost cases the cast is unnecessary, since a value will be automaticallyconverted if an operator, function or control structure requires a bool argument. 

See also Type Juggling. 

When converting to bool, the following values are considered false: 

◦ the boolean false itself  
◦ the integer 0 (zero)  
◦ the floats 0.0 and -0.0 (zero)  
◦ the empty string, and the string "0"  
◦ an array with zero elements  
◦ the special type NULL (includingunset variables)  
◦ SimpleXML objects created from attributelessempty elements, i.e. elements which have neither children nor attributes.  

Every other value is considered true (including any resource and NAN). 

⚠Warning 
-1 is considered true, like any other non-zero(whether negative or positive) number! 

```php
<?php
var_dump((bool) "");        // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)
?> 
```


### ===🗝 • Integers

An int is a number of the set ℤ = {..., -2, -1, 0, 1, 2, ...}. 

See also: 

◦ Arbitrary length integer / GMP  
◦ Floating point numbers  
◦ Arbitrary precision / BCMath  


Syntax 

ints can be specified in decimal (base 10), hexadecimal(base 16), octal (base 8) or binary (base 2) notation.The negation operatorcan be used to denote a negative int. 

To use octal notation, precede the number with a 0 (zero).As of PHP 8.1.0, octal notation can also be preceded with 0o or 0O.To use hexadecimal notation precede the number with 0x.To use binary notation precede the number with 0b. 

As of PHP 7.4.0, integer literals may contain underscores (`_`) between digits,for better readability of literals. These underscores are removed by PHP's scanner. 


Example #1 Integer literals


```php

<?php
$a = 1234; // decimal number
$a = 0123; // octal number (equivalent to 83 decimal)
$a = 0o123; // octal number (as of PHP 8.1.0)
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
$a = 0b11111111; // binary number (equivalent to 255 decimal)
$a = 1_234_567; // decimal number (as of PHP 7.4.0)
?>  
```

Formally, the structure for int literals is as of PHP 7.4.0(previously, underscores have not been allowed): 


    decimal     : [1-9][0-9]*(_[0-9]+)*
                | 0

    hexadecimal : 0[xX][0-9a-fA-F]+(_[0-9a-fA-F]+)*

    octal       : 0[oO]?[0-7]+(_[0-7]+)*

    binary      : 0[bB][01]+(_[01]+)*

    integer     : decimal
                | hexadecimal
                | octal
                | binary


The size of an int is platform-dependent, although a maximumvalue of about two billion is the usual value (that's 32 bits signed). 64-bit platforms usually have a maximum value of about 9E18. PHP does not support unsigned ints. int size can be determinedusing the constant `PHP_INT_SIZE`, maximum value usingthe constant `PHP_INT_MAX`,and minimum value using the constant `PHP_INT_MIN`. 


Integer overflow 

If PHP encounters a number beyond the bounds of the inttype, it will be interpreted as a float instead. Also, anoperation which results in a number beyond the bounds of the int type will return a float instead. 


Example #2 Integer overflow on a 32-bit system

```php

<?php
$large_number = 2147483647;
var_dump($large_number);                     // int(2147483647)

$large_number = 2147483648;
var_dump($large_number);                     // float(2147483648)

$million = 1000000;
$large_number =  50000 * $million;
var_dump($large_number);                     // float(50000000000)
?>  
```


Example #3 Integer overflow on a 64-bit system


```php

<?php
$large_number = 9223372036854775807;
var_dump($large_number);                     // int(9223372036854775807)

$large_number = 9223372036854775808;
var_dump($large_number);                     // float(9.2233720368548E+18)

$million = 1000000;
$large_number =  50000000000000 * $million;
var_dump($large_number);                     // float(5.0E+19)
?>  
```

There is no int division operator in PHP, to achieve thisuse the intdiv() function. 1/2 yields the float 0.5.The value can be cast to an int to round it towards zero, orthe round() function provides finer control over rounding. 


```php

<?php
var_dump(25/7);         // float(3.5714285714286)
var_dump((int) (25/7)); // int(3)
var_dump(round(25/7));  // float(4)
?>  
```


Converting to integer 

To explicitly convert a value to int, use either the (int) or (integer) casts. However, inmost cases the cast is not needed, since a value will be automaticallyconverted if an operator, function or control structure requires an int argument. A value can also be converted to int with the intval() function. 

If a resource is converted to an int, thenthe result will be the unique resource number assigned to the resource by PHP at runtime. 

See also Type Juggling. 


From booleans

false will yield 0 (zero), and true will yield 1 (one). 


From floating point numbers 

When converting from float to int, the numberwill be rounded towards zero. 

If the float is beyond the boundaries of int (usually +/- 2.15e+9 = 2^31 on 32-bit platforms and +/- 9.22e+18 = 2^63 on 64-bit platforms),the result is undefined, since the float doesn'thave enough precision to give an exact int result.No warning, not even a notice will be issued when this happens! 


Note: 

NaN and Infinity will always be zero when cast to int. 


Warning 
Never cast an unknown fraction to int, as this cansometimes lead to unexpected results. 


```php

<?php
echo (int) ( (0.1+0.7) * 10 ); // echoes 7!
?>  
```

See also the warning about floatprecision. 


From strings

If the string is numericor leading numeric then it will resolve to thecorresponding integer value, otherwise it is converted to zero(0). 


From NULL

null is always converted to zero (0). 


From other types


### ===🗝 • Floating point numbers


Floating point numbers (also known as "floats", "doubles", or "real numbers")can be specified using any of the following syntaxes: 


```php
<?php
$a = 1.234; 
$b = 1.2e3; 
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0
?>  
```

Formally as of PHP 7.4.0 (previously, underscores have not been allowed): 


    LNUM          [0-9]+(_[0-9]+)*
    DNUM          ([0-9]*(_[0-9]+)*[\.]{LNUM}) | ({LNUM}[\.][0-9]*(_[0-9]+)*)
    EXPONENT_DNUM (({LNUM} | {DNUM}) [eE][+-]? {LNUM})


The size of a float is platform-dependent, although a maximum of approximately 1.8e308with a precision of roughly 14 decimal digits is a common value (the 64 bit IEEEformat). 

Warning 
Floating point precision 

Floating point numbers have limited precision. Although it depends on thesystem, PHP typically uses the IEEE 754 double precision format, which willgive a maximum relative error due to rounding in the order of 1.11e-16.Non elementary arithmetic operations may give larger errors, and, of course,error propagation must be considered when several operations arecompounded. 

Additionally, rational numbers that are exactly representable as floatingpoint numbers in base 10, like 0.1 or 0.7, do not have an exact representation as floatingpoint numbers in base 2, which is used internally, no matter the size ofthe mantissa. Hence, they cannot be converted into their internal binarycounterparts without a small loss of precision. This can lead to confusingresults: for example, `floor((0.1+0.7)*10)` will usually return 7 instead of the expected 8,since the internal representation will be something like 7.9999999999999991118.... 

So never trust floating number results to the last digit, and do not comparefloating point numbers directly for equality. If higher precision isnecessary, the arbitrary precision math functionsand gmp functions are available. 

For a "simple" explanation, see the » floating point guidethat's also titled "Why don’t my numbers add up?" 


Converting to float 


From strings

If the string is numericor leading numeric then it will resolve to thecorresponding float value, otherwise it is converted to zero(0). 


From other types

For values of other types, the conversion is performed by converting thevalue to int first and then to float. See Converting to integerfor more information. 


Note: 

As certain types have undefined behavior when converting to int, this is also the case when converting to float. 


Comparing floats 

As noted in the warning above, testing floating point values for equality isproblematic, due to the way that they are represented internally. However,there are ways to make comparisons of floating point values that work aroundthese limitations. 

To test floating point values for equality, an upper bound on the relativeerror due to rounding is used. This value is known as the machine epsilon,or unit roundoff, and is the smallest acceptable difference in calculations. 


$a and $b are equal to 5 digits ofprecision. 


```php
<?php
$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if(abs($a-$b) < $epsilon) {
    echo "true";
}
?>  

```

NaN 

Some numeric operations can result in a value represented by the constant NAN. This result represents an undefined orunrepresentable value in floating-point calculations. Any loose or strictcomparisons of this value against any other value, including itself, but except true, willhave a result of false. 

Because NAN represents any number of different values, NAN should not be compared to other values, includingitself, and instead should be checked for using is_nan(). 


### ===🗝 • Strings


A string is series of characters, where a character isthe same as a byte. This means that PHP only supports a 256-character set,and hence does not offer native Unicode support. See details of the stringtype. 

Note: On 32-bit builds, a string can be as large as up to 2GB(2147483647 bytes maximum)  

Syntax 

A string literal can be specified in four different ways: 

◦ single quoted  
◦ double quoted  
◦ heredoc syntax  
◦ nowdoc syntax  


#### Single quoted

The simplest way to specify a string is to enclose it in singlequotes (the character '). 

To specify a literal single quote, escape it with a backslash(\). To specify a literal backslash, double it(\\). All other instances of backslash will be treatedas a literal backslash: this means that the other escape sequences youmight be used to, such as \r or \n,will be output literally as specified rather than having any specialmeaning. 


Note: Unlike the double-quotedand heredoc syntaxes, variables and escape sequencesfor special characters will not be expanded when theyoccur in single quoted strings.  


```php
echo 'this is a simple string';

echo 'You can also have embedded newlines in
strings this way as it is
okay to do';

// Outputs: Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\\*.*?';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\*.*?';

// Outputs: This will not expand: \n a newline
echo 'This will not expand: \n a newline';

// Outputs: Variables do not $expand $either
echo 'Variables do not $expand $either';
```


#### Double quoted

If the string is enclosed in double-quotes ("), PHP willinterpret the following escape sequences for special characters: 

Escaped characters


| Sequence |                  Meaning                   |
|----------|--------------------------------------------|
| \n       | linefeed (LF or 0x0A (10) in ASCII)        |
| \r       | carriage return (CR or 0x0D (13) in ASCII) |
| \t       | horizontal tab (HT or 0x09 (9) in ASCII)   |
| \v       | vertical tab (VT or 0x0B (11) in ASCII)    |
| \e       | escape (ESC or 0x1B (27) in ASCII)         |
| \f       | form feed (FF or 0x0C (12) in ASCII)       |
| \\       | backslash                                  |
| \$       | dollar sign                                |
| \"       | double-quote                               |

\[0-7]{1,3} the sequence of characters matching the regular expression is acharacter in octal notation, which silently overflows to fit in a byte(e.g. "\400" === "\000")  


\x[0-9A-Fa-f]{1,2} the sequence of characters matching the regular expression is acharacter in hexadecimal notation  

\u{[0-9A-Fa-f]+} the sequence of characters matching the regular expression is aUnicode codepoint, which will be output to the string as thatcodepoint's UTF-8 representation  

As in single quoted strings, escaping any other character willresult in the backslash being printed too. 

The most important feature of double-quoted strings is the factthat variable names will be expanded. See string parsing fordetails. 


#### Heredoc

A third way to delimit strings is the heredoc syntax: <<<. After this operator, an identifier isprovided, then a newline. The string itself follows, and thenthe same identifier again to close the quotation. 

The closing identifier may be indented by space or tab, in which casethe indentation will be stripped from all lines in the doc string.Prior to PHP 7.3.0, the closing identifier mustbegin in the first column of the line. 

Also, the closing identifier must follow the same naming rules as anyother label in PHP: it must contain only alphanumeric characters andunderscores, and must start with a non-digit character or underscore. 


Example #1 Basic Heredoc example as of PHP 7.3.0


```php
// 4 spaces of indentation
echo <<<END
      a
     b
    c
\n
END;

// no indentation
echo <<<END
      a
     b
    c
    END;  
```


Output of the above example in PHP 7.3:


      a
     b
    c

  a
 b
c


If the closing identifier is indented further than any lines of the body, then a ParseError will be thrown: 


Example #2 Closing identifier must not be indented further than any lines of the body


```php
 echo <<<END
   a
  b
 c
    END; 
 ``` 


Output of the above example in PHP 7.3:


PHP Parse error:  Invalid body indentation level (expecting an indentation level of at least 3) in example.php on line 4


If the closing identifier is indented, tabs can be used as well, however,tabs and spaces must not be intermixed regardingthe indentation of the closing identifier and the indentation of the body(up to the closing identifier). In any of these cases, a ParseError will be thrown.These whitespace constraints have been included because mixing tabs andspaces for indentation is harmful to legibility. 


Example #3 Different indentation for body (spaces) closing identifier


```py
// All the following code do not work.

// different indentation for body (spaces) ending marker (tabs)
{
    echo <<<END
     a
        END;
}

// mixing spaces and tabs in body
{
    echo <<<END
        a
     END;
}

// mixing spaces and tabs in ending marker
{
    echo <<<END
          a
         END;
}  
```


Output of the above example in PHP 7.3:


PHP Parse error:  Invalid indentation - tabs and spaces cannot be mixed in example.php line 8


The closing identifier for the body string is not required to befollowed by a semicolon or newline. For example, the following codeis allowed as of PHP 7.3.0: 


Example #4 Continuing an expression after a closing identifier


```php
$values = [<<<END
a
  b
    c
END, 'd e f'];
var_dump($values);  
```


Output of the above example in PHP 7.3:


array(2) {
  [0] =>
  string(11) "a
  b
    c"
  [1] =>
  string(5) "d e f"
}


⚠Warning 
If the closing identifier was found at the start of a line, thenregardless of whether it was a part of another word, it may be consideredas the closing identifier and causes a ParseError. 


Example #5 Closing identifier in body of the string tends to cause ParseError


```php
$values = [<<<END
a
b
END ING
END, 'd e f'];  
```


Output of the above example in PHP 7.3:


PHP Parse error:  syntax error, unexpected identifier "ING", expecting "]" in example.php on line 6


To avoid this problem, it is safe for you to follow the simple rule: do not choose the closing identifier that appears in the bodyof the text. 

⚠Warning 
Prior to PHP 7.3.0, it is very important to note that the line with theclosing identifier must contain no other characters, except a semicolon(;).That means especially that the identifier may not be indented, and there may not be any spacesor tabs before or after the semicolon. It's also important to realize thatthe first character before the closing identifier must be a newline asdefined by the local operating system. This is \n onUNIX systems, including macOS. The closing delimiter must also befollowed by a newline. 

If this rule is broken and the closing identifier is not "clean", it willnot be considered a closing identifier, and PHP will continue looking forone. If a proper closing identifier is not found before the end of thecurrent file, a parse error will result at the last line. 


Example #6 Invalid example, prior to PHP 7.3.0


```php
class foo {
    public $bar = <<<EOT
bar
    EOT;
}
// Identifier must not be indented

```

Example #7 Valid example, even if prior to PHP 7.3.0


```php
class foo {
    public $bar = <<<EOT
bar
EOT;
}
```

Heredocs containing variables can not be used for initializing class properties. 

Heredoc text behaves just like a double-quoted string, withoutthe double quotes. This means that quotes in a heredoc do not need to beescaped, but the escape codes listed above can still be used. Variables areexpanded, but the same care must be taken when expressing complex variablesinside a heredoc as with strings. 


Example #8 Heredoc string quoting example


```php
$str = <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;

/* More complex example, with variables. */
class foo
{
    var $foo;
    var $bar;

    function __construct()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;
```


The above example will output:


My name is "MyName". I am printing some Foo.
Now, I am printing some Bar2.
This should print a capital 'A': A

It is also possible to use the Heredoc syntax to pass data to functionarguments: 


Example #9 Heredoc in arguments example


```php
var_dump(array(<<<EOD
foobar!
EOD
));
```

It's possible to initialize static variables and classproperties/constants using the Heredoc syntax: 


Example #10 Using Heredoc to initialize static values


```php
// Static variables
function foo()
{
    static $bar = <<<LABEL
Nothing in here...
LABEL;
}

// Class properties/constants
class foo
{
    const BAR = <<<FOOBAR
Constant example
FOOBAR;

    public $baz = <<<FOOBAR
Property example
FOOBAR;
}
```

The opening Heredoc identifier may optionally beenclosed in double quotes: 


Example #11 Using double quotes in Heredoc


```php
echo <<<"FOOBAR"
Hello World!
FOOBAR;
```


Nowdoc

Nowdocs are to single-quoted strings what heredocs are to double-quotedstrings. A nowdoc is specified similarly to a heredoc, but noparsing is done inside a nowdoc. The construct is ideal forembedding PHP code or other large blocks of text without the need forescaping. It shares some features in common with the SGML <![CDATA[ ]]> construct, in that it declares ablock of text which is not for parsing. 

A nowdoc is identified with the same <<<sequence used for heredocs, but the identifier which follows is enclosed insingle quotes, e.g. <<<'EOT'. All the rules forheredoc identifiers also apply to nowdoc identifiers, especially thoseregarding the appearance of the closing identifier. 


Example #12 Nowdoc string quoting example


```php
echo <<<'EOD'
Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.
EOD;  
```


The above example will output:


Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.


Example #13 Nowdoc string quoting example with variables


```php
class foo
{
    public $foo;
    public $bar;

    function __construct()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<'EOT'
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41
EOT;
```


The above example will output:


My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41


Example #14 Static data example


```php
class foo {
    public $bar = <<<'EOT'
bar
EOT;
}

```

#### Variable parsing

When a string is specified in double quotes or with heredoc, variables are parsed within it. 

There are two types of syntax: a simple one and a complex one.The simple syntax is the most common and convenient. It provides a way toembed a variable, an array value, or an objectproperty in a string with a minimum of effort. 

The complex syntax can be recognised by thecurly braces surrounding the expression. 


Simple syntax

If a dollar sign ($) is encountered, the parser willgreedily take as many tokens as possible to form a valid variable name.Enclose the variable name in curly braces to explicitly specify the end ofthe name. 


```php
$juice = "apple";

echo "He drank some $juice juice.".PHP_EOL;
// Invalid. "s" is a valid character for a variable name, but the variable is $juice.
echo "He drank some juice made of $juices.";
// Valid. Explicitly specify the end of the variable name by enclosing it in braces:
echo "He drank some juice made of ${juice}s.";
```

The above example will output:


He drank some apple juice.
He drank some juice made of .
He drank some juice made of apples.


Similarly, an array index or an object propertycan be parsed. With array indices, the closing square bracket(]) marks the end of the index. The same rules apply toobject properties as to simple variables. 


Example #15 Simple syntax example


```php
$juices = array("apple", "orange", "koolaid1" => "purple");

echo "He drank some $juices[0] juice.".PHP_EOL;
echo "He drank some $juices[1] juice.".PHP_EOL;
echo "He drank some $juices[koolaid1] juice.".PHP_EOL;

class people {
    public $john = "John Smith";
    public $jane = "Jane Smith";
    public $robert = "Robert Paulsen";

    public $smith = "Smith";
}

$people = new people();

echo "$people->john drank some $juices[0] juice.".PHP_EOL;
echo "$people->john then said hello to $people->jane.".PHP_EOL;
echo "$people->john's wife greeted $people->robert.".PHP_EOL;
echo "$people->robert greeted the two $people->smiths."; // Won't work
```


The above example will output:


He drank some apple juice.
He drank some orange juice.
He drank some purple juice.
John Smith drank some apple juice.
John Smith then said hello to Jane Smith.
John Smith's wife greeted Robert Paulsen.
Robert Paulsen greeted the two .


As of PHP 7.1.0 also negative numeric indices aresupported. 


Example #16 Negative numeric indices


```php
$string = 'string';
echo "The character at index -2 is $string[-2].", PHP_EOL;
$string[-3] = 'o';
echo "Changing the character at index -3 to o gives $string.", PHP_EOL;
```


The above example will output:


The character at index -2 is n.
Changing the character at index -3 to o gives strong.


For anything more complex, you should use the complex syntax. 


Complex (curly) syntax

This isn't called complex because the syntax is complex, but because itallows for the use of complex expressions. 

Any scalar variable, array element or object property with a string representation can be included via this syntax.The expression is written the same way as it would appear outside the string, and then wrapped in { and }. Since { can not be escaped, thissyntax will only be recognised when the $ immediatelyfollows the {. Use {\$ to get aliteral {$. Some examples to make it clear: 


```php
// Show all errors
error_reporting(E_ALL);

$great = 'fantastic';

// Won't work, outputs: This is { fantastic}
// echo "This is { $great}";

// Works, outputs: This is fantastic
echo "This is {$great}";

// Works
echo "This square is {$square->width}00 centimeters broad.";


// Works, quoted keys only work using the curly brace syntax
echo "This works: {$arr['key']}";


// Works
echo "This works: {$arr[4][3]}";

// This is wrong for the same reason as $foo[bar] is wrong  outside a string.
// In other words, it will still work, but only because PHP first looks for a
// constant named foo; an error of level E_NOTICE (undefined constant) will be
// thrown.
echo "This is wrong: {$arr[foo][3]}";

// Works. When using multi-dimensional arrays, always use braces around arrays
// when inside of strings
echo "This works: {$arr['foo'][3]}";

// Works.
echo "This works: " . $arr['foo'][3];

echo "This works too: {$obj->values[3]->name}";

echo "This is the value of the var named $name: {${$name}}";

echo "This is the value of the var named by the return value of getName(): {${getName()}}";

echo "This is the value of the var named by the return value of \$object->getName(): {${$object->getName()}}";

// Won't work, outputs: This is the return value of getName(): {getName()}
// echo "This is the return value of getName(): {getName()}";

// Won't work, outputs: C:\folder\{fantastic}.txt
// echo "C:\folder\{$great}.txt"

// Works, outputs: C:\folder\fantastic.txt
echo "C:\\folder\\{$great}.txt"
```

It is also possible to access class properties using variableswithin strings using this syntax. 


```php
class foo {
    var $bar = 'I am bar.';
}

$foo = new foo();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo "{$foo->$bar}\n";
echo "{$foo->{$baz[1]}}\n";
```

The above example will output:


I am bar.
I am bar.


Note: 

The value accessed from functions, method calls, static class variables,and class constants inside {$} will be interpreted as the nameof a variable in the scope in which the string is defined. Usingsingle curly braces ({}) will not work foraccessing the return values of functions or methods or thevalues of class constants or static class variables. 


```php
// Show all errors.
error_reporting(E_ALL);

class beers {
    const softdrink = 'rootbeer';
    public static $ale = 'ipa';
}

$rootbeer = 'A & W';
$ipa = 'Alexander Keith\'s';

// This works; outputs: I'd like an A & W
echo "I'd like an {${beers::softdrink}}\n";

// This works too; outputs: I'd like an Alexander Keith's
echo "I'd like an {${beers::$ale}}\n";
```


#### String access and modification by character

Characters within strings may be accessed and modified byspecifying the zero-based offset of the desired character after the string using square array brackets, as in $str[42]. Think of a string as an array of characters for this purpose. The functions substr() and substr_replace()can be used when you want to extract or replace more than 1 character. 


Note: As of PHP 7.1.0, negative string offsets are also supported. These specifythe offset from the end of the string.Formerly, negative offsets emitted E_NOTICE for reading(yielding an empty string) and E_WARNING for writing(leaving the string untouched).  


Note: Prior to PHP 8.0.0, strings could also be accessed using braces, as in $str{42}, for the same purpose.This curly brace syntax was deprecated as of PHP 7.4.0 and no longer supported as of PHP 8.0.0.  

⚠Warning 
Writing to an out of range offset pads the string with spaces.Non-integer types are converted to integer.Illegal offset type emits E_WARNING.Only the first character of an assigned string is used.As of PHP 7.1.0, assigning an empty string throws a fatal error. Formerly,it assigned a NULL byte. 

⚠Warning 
Internally, PHP strings are byte arrays. As a result, accessing ormodifying a string using array brackets is not multi-byte safe, andshould only be done with strings that are in a single-byte encoding suchas ISO-8859-1. 


Note: As of PHP 7.1.0, applying the empty index operator on an empty string throws a fatalerror. Formerly, the empty string was silently converted to an array.  


Example #17 Some string examples


```php
// Get the first character of a string
$str = 'This is a test.';
$first = $str[0];

// Get the third character of a string
$third = $str[2];

// Get the last character of a string.
$str = 'This is still a test.';
$last = $str[strlen($str)-1];

// Modify the last character of a string
$str = 'Look at the sea';
$str[strlen($str)-1] = 'e';
```


String offsets have to either be integers or integer-like strings,otherwise a warning will be thrown. 


Example #18 Example of Illegal String Offsets


```php
$str = 'abc';

var_dump($str['1']);
var_dump(isset($str['1']));

var_dump($str['1.0']);
var_dump(isset($str['1.0']));

var_dump($str['x']);
var_dump(isset($str['x']));

var_dump($str['1x']);
var_dump(isset($str['1x']));
```


The above example will output:


    string(1) "b"
    bool(true)

    Warning: Illegal string offset '1.0' in /tmp/t.php on line 7
    string(1) "b"
    bool(false)

    Warning: Illegal string offset 'x' in /tmp/t.php on line 9
    string(1) "a"
    bool(false)
    string(1) "b"
    bool(false)


Note: 

Accessing variables of other types (not including arrays or objectsimplementing the appropriate interfaces) using [] or {} silently returns null. 


Note: 

Characters within string literals can be accessedusing [] or {}. 


Note: 

Accessing characters within string literals using the {} syntax has been deprecated in PHP 7.4.This has been removed in PHP 8.0. 


#### Useful functions and operators 

Strings may be concatenated using the '.' (dot) operator. Notethat the '+' (addition) operator will not work for this.See String operators formore information. 

There are a number of useful functions for string manipulation. 

See the string functions section forgeneral functions, and the Perl-compatible regularexpression functions for advanced find & replace functionality. 

There are also functions for URL strings, andfunctions to encrypt/decrypt strings(Sodium and Hash). 

Finally, see also the character typefunctions. 


#### Converting to string 

A value can be converted to a string using the (string) cast or the strval() function. String conversion is automatically done in the scope of anexpression where a string is needed. This happens when using the echo or print functions, or when avariable is compared to a string. The sections on Types and Type Juggling will makethe following clearer. See also the settype() function. 

A bool true value is converted to the string "1". bool false is converted to "" (the empty string). This allows conversion back andforth between bool and string values. 

An int or float is converted to a string representing the number textually (including theexponent part for floats). Floating point numbers can beconverted using exponential notation (4.1E+6). 


Note: 

As of PHP 8.0.0, the decimal point character is always .. Prior to PHP 8.0.0,the decimal point character is defined in the script's locale (categoryLC_NUMERIC). See the setlocale() function. 


Arrays are always converted to the string "Array"; because of this, echo and print can not by themselves show the contents of an array. To view a single element, use a construction such as echo $arr['foo']. See below for tips on viewing the entirecontents. 

In order to convert objects to string magicmethod __toString must be used. 

Resources are always converted to strings with thestructure "Resource id #1", where 1is the resource number assigned to the resource by PHP atruntime. While the exact structure of this string should not be relied onand is subject to change, it will always be unique for a given resourcewithin the lifetime of a script being executed (ie a Web request or CLIprocess) and won't be reused. To get a resource's type, usethe get_resource_type() function. 

#### null is always converted to an empty string. 

As stated above, directly converting an array, object, or resource to a string doesnot provide any useful information about the value beyond its type. See thefunctions print_r() and var_dump() formore effective means of inspecting the contents of these types. 

Most PHP values can also be converted to strings for permanentstorage. This method is called serialization, and is performed by the serialize() function. 


#### Details of the String Type 

The string in PHP is implemented as an array of bytes and aninteger indicating the length of the buffer. It has no information about howthose bytes translate to characters, leaving that task to the programmer.There are no limitations on the values the string can be composed of; inparticular, bytes with value 0 (“NUL bytes”) are allowedanywhere in the string (however, a few functions, said in this manual not tobe “binary safe”, may hand off the strings to libraries that ignore dataafter a NUL byte.) 

This nature of the string type explains why there is no separate “byte” typein PHP – strings take this role. Functions that return no textual data – forinstance, arbitrary data read from a network socket – will still returnstrings. 

Given that PHP does not dictate a specific encoding for strings, one mightwonder how string literals are encoded. For instance, is the string "á" equivalent to "\xE1" (ISO-8859-1), "\xC3\xA1" (UTF-8, C form), "\x61\xCC\x81" (UTF-8, D form) or any other possiblerepresentation? The answer is that string will be encoded in whatever fashionit is encoded in the script file. Thus, if the script is written inISO-8859-1, the string will be encoded in ISO-8859-1 and so on. However,this does not apply if Zend Multibyte is enabled; in that case, the scriptmay be written in an arbitrary encoding (which is explicitly declared or isdetected) and then converted to a certain internal encoding, which is thenthe encoding that will be used for the string literals.Note that there are some constraints on the encoding of the script (or on theinternal encoding, should Zend Multibyte be enabled) – this almost alwaysmeans that this encoding should be a compatible superset of ASCII, such asUTF-8 or ISO-8859-1. Note, however, that state-dependent encodings wherethe same byte values can be used in initial and non-initial shift statesmay be problematic. 

Of course, in order to be useful, functions that operate on text may have tomake some assumptions about how the string is encoded. Unfortunately, thereis much variation on this matter throughout PHP’s functions: 
◦ Some functions assume that the string is encoded in some (any) single-byteencoding, but they do not need to interpret those bytes as specificcharacters. This is case of, for instance, substr(), strpos(), strlen() or strcmp(). Another way to think of these functions isthat operate on memory buffers, i.e., they work with bytes and byteoffsets.  
◦ Other functions are passed the encoding of the string, possibly they alsoassume a default if no such information is given. This is the case of htmlentities() and the majority of thefunctions in the mbstring extension.  
◦ Others use the current locale (see setlocale()), butoperate byte-by-byte. This is the case of strcasecmp(), strtoupper() and ucfirst().This means they can be used only with single-byte encodings, as long asthe encoding is matched by the locale. For instance strtoupper("á") may return "Á" if thelocale is correctly set and á is encoded with a singlebyte. If it is encoded in UTF-8, the correct result will not be returnedand the resulting string may or may not be returned corrupted, dependingon the current locale.  
◦ Finally, they may just assume the string is using a specific encoding,usually UTF-8. This is the case of most functions in the intl extension and in the PCRE extension(in the last case, only when the u modifier is used).Although this is due to their special purpose, the function utf8_decode() assumes a UTF-8 encoding and thefunction utf8_encode() assumes an ISO-8859-1 encoding.  

Ultimately, this means writing correct programs using Unicode depends oncarefully avoiding functions that will not work and that most likely willcorrupt the data and using instead the functions that do behave correctly,generally from the intl and mbstring extensions.However, using functions that can handle Unicode encodings is just thebeginning. No matter the functions the language provides, it is essential toknow the Unicode specification. For instance, a program that assumes there isonly uppercase and lowercase is making a wrong assumption. 


### ===🗝 • Numeric strings

A PHP string is considered numeric if it can be interpreted asan int or a float. 

Formally as of PHP 8.0.0: 


    WHITESPACES      \s*
    LNUM             [0-9]+
    DNUM             ([0-9]*)[\.]{LNUM}) | ({LNUM}[\.][0-9]*)
    EXPONENT_DNUM    (({LNUM} | {DNUM}) [eE][+-]? {LNUM})
    INT_NUM_STRING   {WHITESPACES} [+-]? {LNUM} {WHITESPACES}
    FLOAT_NUM_STRING {WHITESPACES} [+-]? ({DNUM} | {EXPONENT_DNUM}) {WHITESPACES}
    NUM_STRING       ({INT_NUM_STRING} | {FLOAT_NUM_STRING})


PHP also has a concept of leading numeric strings.This is simply a string which starts like a numeric string followed byany characters. 


Strings used in numeric contexts 

When a string needs to be evaluated as number (e.g. arithmeticoperations, int type declaration, etc.) the followingsteps are taken to determine the outcome: 

1. If the string is numeric, resolve to an int ifthe string is an integer numeric string and fits into thelimits of the int type limits (as defined by PHP_INT_MAX), otherwise resolve to a float.  

2. If the context allows leading numeric strings and the stringis one, resolve to an int if the leading part of the string is an integer numeric string and fits into thelimits of the int type limits (as defined by PHP_INT_MAX), otherwise resolve to a float.Additionally an error of level E_WARNING is raised.  

3. The string is not numeric, throw a TypeError.  


Behavior prior to PHP 8.0.0 

Prior to PHP 8.0.0, a string was considered numeric only if ithad leading whitespaces, if it had trailing whitespaces then the string was considered tobe leading numeric. 

Prior to PHP 8.0.0, when a string was used in a numeric context it wouldperform the same steps as above with the following differences: 

◦ The usage of a leading numeric string would raise an E_NOTICE instead of an E_WARNING.  
◦ If the string is not numeric, an E_WARNING wasraised and the value 0 would be returned.  
Prior to PHP 7.1.0, neither E_NOTICEnor E_WARNING was raised.


```php
$foo = 1 + "10.5";                // $foo is float (11.5)
$foo = 1 + "-1.3e3";              // $foo is float (-1299)
$foo = 1 + "bob-1.3e3";           // TypeError as of PHP 8.0.0, $foo is integer (1) previously
$foo = 1 + "bob3";                // TypeError as of PHP 8.0.0, $foo is integer (1) previously
$foo = 1 + "10 Small Pigs";       // $foo is integer (11) and an E_WARNING is raised in PHP 8.0.0, E_NOTICE previously
$foo = 4 + "10.2 Little Piggies"; // $foo is float (14.2) and an E_WARNING is raised in PHP 8.0.0, E_NOTICE previously
$foo = "10.0 pigs " + 1;          // $foo is float (11) and an E_WARNING is raised in PHP 8.0.0, E_NOTICE previously
$foo = "10.0 pigs " + 1.0;        // $foo is float (11) and an E_WARNING is raised in PHP 8.0.0, E_NOTICE previously
```


### ===🗝 • Arrays

An array in PHP is actually an ordered map. A map is a type thatassociates values to keys. This typeis optimized for several different uses; it can be treated as an array,list (vector), hash table (an implementation of a map), dictionary,collection, stack, queue, and probably more. As array values canbe other arrays, trees and multidimensional arraysare also possible. 

Explanation of those data structures is beyond the scope of this manual, butat least one example is provided for each of them. For more information, looktowards the considerable literature that exists about this broad topic. 


Syntax 


Specifying with array()

An array can be created using the array() language construct. It takes any number of comma-separated key => value pairsas arguments. 

    array(
        key  => value,
        key2 => value2,
        key3 => value3,
        ...
    )

The comma after the last array element is optional and can be omitted. This is usually donefor single-line arrays, i.e. array(1, 2) is preferred over array(1, 2, ). For multi-line arrays on the other hand the trailing commais commonly used, as it allows easier addition of new elements at the end. 


Note: 

A short array syntax exists which replaces array() with []. 


Example #1 A simple array


```php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
);

// Using the short array syntax
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
```

The key can either be an intor a string. The value can beof any type. 

Additionally the following key casts will occur: 

◦ Strings containing valid decimal ints, unless the number is preceded by a + sign, will be cast to the int type. E.g. the key "8" will actually bestored under 8. On the other hand "08" willnot be cast, as it isn't a valid decimal integer.  

◦ Floats are also cast to ints, which means that thefractional part will be truncated. E.g. the key 8.7 will actuallybe stored under 8.  

◦ Bools are cast to ints, too, i.e. the key true will actually be stored under 1and the key false under 0.  

◦ Null will be cast to the empty string, i.e. the key null will actually be stored under "".  

◦ Arrays and objects can not be used as keys. Doing so will result in a warning: Illegal offset type.  


If multiple elements in the array declaration use the same key, only the last onewill be used as all others are overwritten. 


Example #2 Type Casting and Overwriting example


```php
$array = array(
    1    => "a",
    "1"  => "b",
    1.5  => "c",
    true => "d",
);
var_dump($array);
```


The above example will output:


array(1) {
  [1]=>
  string(1) "d"
}


As all the keys in the above example are cast to 1, the value will be overwrittenon every new element and the last assigned value "d" is the only one left over. 

PHP arrays can contain int and string keys at the same timeas PHP does not distinguish between indexed and associative arrays. 


Example #3 Mixed int and string keys


```php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
    100   => -100,
    -100  => 100,
);
var_dump($array);
```


The above example will output:


array(4) {
  ["foo"]=>
  string(3) "bar"
  ["bar"]=>
  string(3) "foo"
  [100]=>
  int(-100)
  [-100]=>
  int(100)
}


The key is optional. If it is not specified, PHP willuse the increment of the largest previously used int key. 


Example #4 Indexed arrays without key


```php
$array = array("foo", "bar", "hello", "world");
var_dump($array);
```


The above example will output:


array(4) {
  [0]=>
  string(3) "foo"
  [1]=>
  string(3) "bar"
  [2]=>
  string(5) "hello"
  [3]=>
  string(5) "world"
}


It is possible to specify the key only for some elements and leave it out for others: 


Example #5 Keys not on all elements


```php
$array = array(
         "a",
         "b",
    6 => "c",
         "d",
);
var_dump($array);
```


The above example will output:


array(4) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [6]=>
  string(1) "c"
  [7]=>
  string(1) "d"
}


As you can see the last value "d" was assigned the key 7. This is because the largest integer key before thatwas 6. 


Example #6 Complex Type Casting and Overwriting example


This example includes all variations of type casting of keys and overwritingof elements. 


```php
$array = array(
    1    => 'a',
    '1'  => 'b', // the value "a" will be overwritten by "b"
    1.5  => 'c', // the value "b" will be overwritten by "c"
    -1 => 'd',
    '01'  => 'e', // as this is not an integer string it will NOT override the key for 1
    '1.5' => 'f', // as this is not an integer string it will NOT override the key for 1
    true => 'g', // the value "c" will be overwritten by "g"
    false => 'h',
    '' => 'i',
    null => 'j', // the value "i" will be overwritten by "j"
    'k', // value "k" is assigned the key 2. This is because the largest integer key before that was 1
    2 => 'l', // the value "k" will be overwritten by "l"
);

var_dump($array);
```


The above example will output:


array(7) {
  [1]=>
  string(1) "g"
  [-1]=>
  string(1) "d"
  ["01"]=>
  string(1) "e"
  ["1.5"]=>
  string(1) "f"
  [0]=>
  string(1) "h"
  [""]=>
  string(1) "j"
  [2]=>
  string(1) "l"
}


Accessing array elements with square bracket syntax

Array elements can be accessed using the array[key] syntax. 


Example #7 Accessing array elements


```php
$array = array(
    "foo" => "bar",
    42    => 24,
    "multi" => array(
         "dimensional" => array(
             "array" => "foo"
         )
    )
);

var_dump($array["foo"]);
var_dump($array[42]);
var_dump($array["multi"]["dimensional"]["array"]);
```


The above example will output:


string(3) "bar"
int(24)
string(3) "foo"


Note: 

Prior to PHP 8.0.0, square brackets and curly braces could be used interchangeablyfor accessing array elements (e.g. $array[42] and $array{42}would both do the same thing in the example above).The curly brace syntax was deprecated as of PHP 7.4.0 and no longer supported as of PHP 8.0.0. 


Example #8 Array dereferencing


```php
function getArray() {
    return array(1, 2, 3);
}

$secondElement = getArray()[1];

// or
list(, $secondElement) = getArray();
```


Note: 

Attempting to access an array key which has not been defined isthe same as accessing any other undefined variable:an E_NOTICE-level error message will beissued, and the result will be null. 


Note: 

Array dereferencing a scalar value which is not a stringyields null. Prior to PHP 7.4.0, that did not issue an error message.As of PHP 7.4.0, this issues E_NOTICE;as of PHP 8.0.0, this issues E_WARNING. 


Creating/modifying with square bracket syntax

An existing array can be modified by explicitly setting valuesin it. 

This is done by assigning values to the array, specifying thekey in brackets. The key can also be omitted, resulting in an empty pair ofbrackets ([]). 

```php
$arr[key] = value;
$arr[] = value;
// key may be an int or string
// value may be any value of any type
```

If $arr doesn't exist yet or is set to null or false, it will be created, so this isalso an alternative way to create an array. This practice ishowever discouraged because if $arr already containssome value (e.g. string from request variable) then thisvalue will stay in the place and [] may actually standfor string accessoperator. It is always better to initialize a variable by a directassignment. 


Note: As of PHP 7.1.0, applying the empty index operator on a string throws a fatalerror. Formerly, the string was silently converted to an array.  


Note: As of PHP 8.1.0, creating a new array from false value is deprecated.Creating a new array from null and undefined values is still allowed.  

To change a certainvalue, assign a new value to that element using its key. To remove akey/value pair, call the unset() function on it. 


```php
$arr = array(5 => 1, 12 => 2);

$arr[] = 56;    // This is the same as $arr[13] = 56;
                // at this point of the script

$arr["x"] = 42; // This adds a new element to
                // the array with key "x"
                
unset($arr[5]); // This removes the element from the array

unset($arr);    // This deletes the whole array
```


Note: 

As mentioned above, if no key is specified, the maximum of the existing int indices is taken, and the new key will be that maximumvalue plus 1 (but at least 0). If no int indices exist yet, the key willbe 0 (zero). 

Note that the maximum integer key used for this need notcurrently exist in the array. It need only haveexisted in the array at some time since the last time the array was re-indexed. The following example illustrates: 


```php
// Create a simple array.
$array = array(1, 2, 3, 4, 5);
print_r($array);

// Now delete every item, but leave the array itself intact:
foreach ($array as $i => $value) {
    unset($array[$i]);
}
print_r($array);

// Append an item (note that the new key is 5, instead of 0).
$array[] = 6;
print_r($array);

// Re-index:
$array = array_values($array);
$array[] = 7;
print_r($array);
```

The above example will output:


Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)
Array
(
)
Array
(
    [5] => 6
)
Array
(
    [0] => 6
    [1] => 7
)


#### Useful functions 


There are quite a few useful functions for working with arrays. See the array functions section. 


Note: 

The unset() function allows removing keys from an array. Be aware that the array will not bereindexed. If a true "remove and shift" behavior is desired, the array can be reindexed using the array_values() function. 


```php
$a = array(1 => 'one', 2 => 'two', 3 => 'three');
unset($a[2]);
/* will produce an array that would have been defined as
   $a = array(1 => 'one', 3 => 'three');
   and NOT
   $a = array(1 => 'one', 2 =>'three');
*/

$b = array_values($a);
// Now $b is array(0 => 'one', 1 =>'three')
```


The foreach controlstructure exists specifically for arrays. It provides an easyway to traverse an array. 


Array do's and don'ts 


Why is $foo[bar] wrong?

Always use quotes around a string literal array index. For example, $foo['bar'] is correct, while $foo[bar] is not. But why? It is common to encounter thiskind of syntax in old scripts: 


```php
$foo[bar] = 'enemy';
echo $foo[bar];
// etc
```

This is wrong, but it works. The reason is that this code has an undefinedconstant (bar) rather than a string ('bar' - notice thequotes). It works because PHP automatically converts a bare string (an unquoted string which doesnot correspond to any known symbol) into a string whichcontains the bare string. For instance, if there is no definedconstant named bar, then PHP will substitute in the string 'bar' and use that. 

Warning 
The fallback to treat an undefined constant as bare string issues an errorof level E_NOTICE.This has been deprecated as of PHP 7.2.0, and issues an errorof level E_WARNING.As of PHP 8.0.0, it has been removed and throws an Error exception. 


Note: This does not mean to always quote the key. Do notquote keys which are constants or variables, as this will preventPHP from interpreting them.  


```php
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('html_errors', false);
// Simple array:
$array = array(1, 2);
$count = count($array);
for ($i = 0; $i < $count; $i++) {
    echo "\nChecking $i: \n";
    echo "Bad: " . $array['$i'] . "\n";
    echo "Good: " . $array[$i] . "\n";
    echo "Bad: {$array['$i']}\n";
    echo "Good: {$array[$i]}\n";
}
```

The above example will output:


Checking 0: 
Notice: Undefined index:  $i in /path/to/script.html on line 9
Bad: 
Good: 1
Notice: Undefined index:  $i in /path/to/script.html on line 11
Bad: 
Good: 1

Checking 1: 
Notice: Undefined index:  $i in /path/to/script.html on line 9
Bad: 
Good: 2
Notice: Undefined index:  $i in /path/to/script.html on line 11
Bad: 
Good: 2


More examples to demonstrate this behaviour: 


```php
// Show all errors
error_reporting(E_ALL);

$arr = array('fruit' => 'apple', 'veggie' => 'carrot');

// Correct
print $arr['fruit'];  // apple
print $arr['veggie']; // carrot

// Incorrect.  This works but also throws a PHP error of level E_NOTICE because
// of an undefined constant named fruit
// 
// Notice: Use of undefined constant fruit - assumed 'fruit' in...
print $arr[fruit];    // apple

// This defines a constant to demonstrate what's going on.  The value 'veggie'
// is assigned to a constant named fruit.
define('fruit', 'veggie');

// Notice the difference now
print $arr['fruit'];  // apple
print $arr[fruit];    // carrot

// The following is okay, as it's inside a string. Constants are not looked for
// within strings, so no E_NOTICE occurs here
print "Hello $arr[fruit]";      // Hello apple

// With one exception: braces surrounding arrays within strings allows constants
// to be interpreted
print "Hello {$arr[fruit]}";    // Hello carrot
print "Hello {$arr['fruit']}";  // Hello apple

// This will not work, and will result in a parse error, such as:
// Parse error: parse error, expecting T_STRING' or T_VARIABLE' or T_NUM_STRING'
// This of course applies to using superglobals in strings as well
print "Hello $arr['fruit']";
print "Hello $_GET['foo']";

// Concatenation is another option
print "Hello " . $arr['fruit']; // Hello apple
```

When error_reporting is set toshow E_NOTICE level errors (by setting it to E_ALL, for example), such uses will become immediatelyvisible. By default, error_reporting is set not toshow notices. 

As stated in the syntaxsection, what's inside the square brackets ('[' and']') must be an expression. This means that code likethis works: 


```php
echo $arr[somefunc($bar)];
```

This is an example of using a function return value as the array index. PHPalso knows about constants: 


```php
$error_descriptions[E_ERROR]   = "A fatal error has occurred";
$error_descriptions[E_WARNING] = "PHP issued a warning";
$error_descriptions[E_NOTICE]  = "This is just an informal notice";
```

Note that E_ERROR is also a valid identifier, just like bar in the first example. But the last example is in factthe same as writing: 


```php
$error_descriptions[1] = "A fatal error has occurred";
$error_descriptions[2] = "PHP issued a warning";
$error_descriptions[8] = "This is just an informal notice";
```

because E_ERROR equals 1, etc. 


So why is it bad then?

At some point in the future, the PHP team might want to add anotherconstant or keyword, or a constant in other code may interfere. Forexample, it is already wrong to use the words empty and default this way, since they are reserved keywords. 


Note: To reiterate, inside a double-quoted string, it's valid tonot surround array indexes with quotes so "$foo[bar]"is valid. See the above examples for details on why as well as the sectionon variable parsing instrings.  


#### Converting to array 

For any of the types int, float, string, bool and resource,converting a value to an array results in an array with a singleelement with index zero and the value of the scalar which was converted. Inother words, (array)$scalarValue is exactly the same as array($scalarValue). 

If an object is converted to an array, the resultis an array whose elements are the object'sproperties. The keys are the member variable names, with a few notableexceptions: integer properties are unaccessible;private variables have the class name prepended to the variablename; protected variables have a `'*'` prepended to the variable name. Theseprepended values have NUL bytes on either side.Uninitialized typed propertiesare silently discarded. 


```php

class A {
    private $B;
    protected $C;
    public $D;
    function __construct()
    {
        $this->{1} = null;
    }
}

var_export((array) new A());
```

The above example will output:


array (
  '' . "\0" . 'A' . "\0" . 'B' => NULL,
  '' . "\0" . '*' . "\0" . 'C' => NULL,
  'D' => NULL,
  1 => NULL,
)


These NUL can result in some unexpected behaviour: 


```php

class A {
    private $A; // This will become '\0A\0A'
}

class B extends A {
    private $A; // This will become '\0B\0A'
    public $AA; // This will become 'AA'
}

var_dump((array) new B());
```

The above example will output:


array(3) {
  ["BA"]=>
  NULL
  ["AA"]=>
  NULL
  ["AA"]=>
  NULL
}


The above will appear to have two keys named 'AA', although one of them isactually named '\0A\0A'. 

Converting null to an array results in an empty array. 


#### Comparing 

It is possible to compare arrays with the array_diff()function and with array operators. 


#### Array unpacking 

An array prefixed by ... will be expanded in place during the definition of the array.Only arrays and objects which implement Traversable can be expanded.Array unpacking with ... is available as of PHP 7.4.0. 

It's possible to expand multiple times, and add normal elements before or after the ... operator: 


Example #9 Simple array unpacking


```php
// Using short array syntax.
// Also, works with array() syntax.
$arr1 = [1, 2, 3];
$arr2 = [...$arr1]; //[1, 2, 3]
$arr3 = [0, ...$arr1]; //[0, 1, 2, 3]
$arr4 = [...$arr1, ...$arr2, 111]; //[1, 2, 3, 1, 2, 3, 111]
$arr5 = [...$arr1, ...$arr1]; //[1, 2, 3, 1, 2, 3]

function getArr() {
  return ['a', 'b'];
}
$arr6 = [...getArr(), 'c' => 'd']; //['a', 'b', 'c' => 'd']
```


Unpacking an array with the ... operator follows the semantics of the array_merge() function.That is, later string keys overwrite earlier ones and integer keys are renumbered: 


Example #10 Array unpacking with duplicate key


```php
// string key
$arr1 = ["a" => 1];
$arr2 = ["a" => 2];
$arr3 = ["a" => 0, ...$arr1, ...$arr2];
var_dump($arr3); // ["a" => 2]

// integer key
$arr4 = [1, 2, 3];
$arr5 = [4, 5, 6];
$arr6 = [...$arr4, ...$arr5];
var_dump($arr6); // [1, 2, 3, 4, 5, 6]
// Which is [0 => 1, 1 => 2, 2 => 3, 3 => 4, 4 => 5, 5 => 6]
// where the original integer keys have not been retained.
```


Note: 

Keys that are neither integers nor strings throw a TypeError.Such keys can only be generated by a Traversable object. 


Note: 

Prior to PHP 8.1, unpacking an array which has a string key is not supported: 


```php

$arr1 = [1, 2, 3];
$arr2 = ['a' => 4];
$arr3 = [...$arr1, ...$arr2];
// Fatal error: Uncaught Error: Cannot unpack array with string keys in example.php:5

$arr4 = [1, 2, 3];
$arr5 = [4, 5];
$arr6 = [...$arr4, ...$arr5]; // works. [1, 2, 3, 4, 5]
```


#### Examples 

The array type in PHP is very versatile. Here are some examples: 


```php
// This:
$a = array( 'color' => 'red',
            'taste' => 'sweet',
            'shape' => 'round',
            'name'  => 'apple',
            4        // key will be 0
          );

$b = array('a', 'b', 'c');

// . . .is completely equivalent with this:
$a = array();
$a['color'] = 'red';
$a['taste'] = 'sweet';
$a['shape'] = 'round';
$a['name']  = 'apple';
$a[]        = 4;        // key will be 0

$b = array();
$b[] = 'a';
$b[] = 'b';
$b[] = 'c';

// After the above code is executed, $a will be the array
// array('color' => 'red', 'taste' => 'sweet', 'shape' => 'round', 
// 'name' => 'apple', 0 => 4), and $b will be the array 
// array(0 => 'a', 1 => 'b', 2 => 'c'), or simply array('a', 'b', 'c').
```


Example #11 Using array()


```php
// Array as (property-)map
$map = array( 'version'    => 4,
              'OS'         => 'Linux',
              'lang'       => 'english',
              'short_tags' => true
            );
            
// strictly numerical keys
$array = array( 7,
                8,
                0,
                156,
                -10
              );
// this is the same as array(0 => 7, 1 => 8, ...)

$switching = array(         10, // key = 0
                    5    =>  6,
                    3    =>  7, 
                    'a'  =>  4,
                            11, // key = 6 (maximum of integer-indices was 5)
                    '8'  =>  2, // key = 8 (integer!)
                    '02' => 77, // key = '02'
                    0    => 12  // the value 10 will be overwritten by 12
                  );
                  
// empty array
$empty = array();         
```


Example #12 Collection


```php
$colors = array('red', 'blue', 'green', 'yellow');

foreach ($colors as $color) {
    echo "Do you like $color?\n";
}

```


The above example will output:


Do you like red?
Do you like blue?
Do you like green?
Do you like yellow?


Changing the values of the array directly is possibleby passing them by reference. 


Example #13 Changing element in the loop


```php
foreach ($colors as &$color) {
    $color = strtoupper($color);
}
unset($color); /* ensure that following writes to
$color will not modify the last array element */

print_r($colors);
```


The above example will output:


Array
(
    [0] => RED
    [1] => BLUE
    [2] => GREEN
    [3] => YELLOW
)


This example creates a one-based array. 


Example #14 One-based index


```php
$firstquarter  = array(1 => 'January', 'February', 'March');
print_r($firstquarter);
```


The above example will output:


Array 
(
    [1] => 'January'
    [2] => 'February'
    [3] => 'March'
)


Example #15 Filling an array


```php
// fill an array with all items from a directory
$handle = opendir('.');
while (false !== ($file = readdir($handle))) {
    $files[] = $file;
}
closedir($handle); 
```

Arrays are ordered. The order can be changed using varioussorting functions. See the array functionssection for more information. The count() function can beused to count the number of items in an array. 


Example #16 Sorting an array


```php
sort($files);
print_r($files);
```

Because the value of an array can be anything, it can also beanother array. This enables the creation of recursive andmulti-dimensional arrays. 


Example #17 Recursive and multi-dimensional arrays


```php
$fruits = array ( "fruits"  => array ( "a" => "orange",
                                       "b" => "banana",
                                       "c" => "apple"
                                     ),
                  "numbers" => array ( 1,
                                       2,
                                       3,
                                       4,
                                       5,
                                       6
                                     ),
                  "holes"   => array (      "first",
                                       5 => "second",
                                            "third"
                                     )
                );

// Some examples to address values in the array above 
echo $fruits["holes"][5];    // prints "second"
echo $fruits["fruits"]["a"]; // prints "orange"
unset($fruits["holes"][0]);  // remove "first"

// Create a new multi-dimensional array
$juices["apple"]["green"] = "good"; 
```

Array assignment always involves value copying. Use the reference operator to copy an array by reference. 


```php
$arr1 = array(2, 3);
$arr2 = $arr1;
$arr2[] = 4; // $arr2 is changed,
             // $arr1 is still array(2, 3)
             
$arr3 = &$arr1;
$arr3[] = 4; // now $arr1 and $arr3 are the same
```


### ===🗝 • Iterables


Iterable is a pseudo-type introduced in PHP 7.1. It accepts any array or object implementing the Traversableinterface. Both of these types are iterable using foreach and can be usedwith yield from within a generator. 


Using Iterables 

Iterable can be used as a parameter type to indicate that a functionrequires a set of values, but does not care about the form of the value setsince it will be used with foreach. If a value is not an array orinstance of Traversable, a TypeError will be thrown. 


Example #1Iterable parameter type example 


```php
function foo(iterable $iterable) {
    foreach ($iterable as $value) {
        // ...
    } 
}
```


Parameters declared as iterable may use null or an array as a defaultvalue. 


Example #2 Iterable parameter default value example 


```php
function foo(iterable $iterable = []) {
    // ...
}
```


Iterable can also be used as a return type to indicate a function willreturn an iterable value. If the returned value is not an array or instanceof Traversable, a TypeErrorwill be thrown. 


Example #3 Iterable return type example 


```php
function bar(): iterable {
    return [1, 2, 3];
}
```


Functions declaring iterable as a return type may also be generators. 


Example #4 Iterable generator return type example 


```php
function gen(): iterable {
    yield 1;
    yield 2;
    yield 3;
}
```

### ===🗝 • Objects


Object Initialization 

To create a new object, use the new statementto instantiate a class: 


```php
class foo
{
    function do_foo()
    {
        echo "Doing foo."; 
    }
}

$bar = new foo;
$bar->do_foo();
```

For a full discussion, see the Classes and Objects chapter. 

Converting to object 

If an object is converted to an object, it is not modified. If a value of any other type is converted to an object, a new instance of the stdClass built-in class is created. If the value was null, the new instance will beempty. An array converts to an object with properties named by keys and corresponding values. Note that in this case before PHP 7.2.0 numeric keyshave been inaccessible unless iterated. 


```php
$obj = (object) array('1' => 'foo');
var_dump(isset($obj->{'1'})); // outputs 'bool(true)' as of PHP 7.2.0; 'bool(false)' previously
var_dump(key($obj)); // outputs 'string(1) "1"' as of PHP 7.2.0; 'int(1)' previously
```

For any other value, a member variable named scalar will containthe value. 


```php
$obj = (object) 'ciao';
echo $obj->scalar;  // outputs 'ciao'
```


### ===🗝 • Enumerations

Basic Enumerations 

Enumerations are a restricting layer on top of classes and class constants,intended to provide a way to define a closed set of possible values for a type. 


```php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

function do_stuff(Suit $s)
{
    // ...
}

do_stuff(Suit::Spades);
```

For a full discussion, see the Enumerations chapter. 


Casting 

If an enum is converted to an object, it is notmodified. If an enum is converted to an array,an array with a single name key (for Pure enums) oran array with both name and value keys(for Backed enums) is created. All other cast types will result in an error. 

### ===🗝 • Resources

A resource is a special variable, holding a reference to anexternal resource. Resources are created and used by special functions. Seethe appendix for a listing of all thesefunctions and the corresponding resource types. 

See also the get_resource_type() function. 


Converting to resource

As resource variables hold special handles to opened files,database connections, image canvas areas and the like, converting to a resource makes no sense. 


Freeing resources

Thanks to the reference-counting system being part of Zend Engine,a resource with no more references to it is detectedautomatically, and it is freed by the garbage collector. For this reason, itis rarely necessary to free the memory manually. 


Note: Persistent database links are an exception to this rule. They are not destroyed by the garbage collector. See the persistentconnections section for more information. 


### ===🗝 • NULL

The special null value represents a variable with no value. null is theonly possible value of type null. 

A variable is considered to be null if: 

- it has been assigned the constant null. 
- it has not been set to any value yet. 
- it has been unset(). 


Syntax

There is only one value of type null, and that is thecase-insensitive constant null. 


```php
$var = NULL;       
```

See also the functions is_null() and unset(). 


Casting to null


Warning
This feature has been DEPRECATED as of PHP 7.2.0, and REMOVED as of PHP 8.0.0. Relying on this feature is highly discouraged.

Casting a variable to null using (unset) $varwill not remove the variable or unset its value.It will only return a null value. 


### ===🗝 • Callbacks / Callables


Callbacks can be denoted by the callable type declaration. 

Some functions like call_user_func() or usort() accept user-defined callback functions as aparameter. Callback functions can not only be simple functions, but also object methods, including static class methods. 


Passing 

A PHP function is passed by its name as a string. Any built-inor user-defined function can be used, except language constructs such as: array(), echo, empty(), eval(), exit(), isset(), list(), print or unset(). 

A method of an instantiated object is passed as an array containing an object at index 0 and themethod name at index 1. Accessing protected and private methods fromwithin a class is allowed. 

Static class methods can also be passed without instantiating an object of that class by either, passing the class nameinstead of an object at index 0, or passing 'ClassName::methodName'. 

Apart from common user-defined function, anonymous functions and arrow functions can also bepassed to a callback parameter. 


Note: 

As of PHP 8.1.0, anonymous functions can also be created using the first class callable syntax. 


Generally, any object implementing `__invoke()` can alsobe passed to a callback parameter. 


Example #1 Callback function examples 


```php
// An example callback function
function my_callback_function() {
    echo 'hello world!';
}

// An example callback method
class MyClass {
    static function myCallbackMethod() {
        echo 'Hello World!';
    }
}

// Type 1: Simple callback
call_user_func('my_callback_function');

// Type 2: Static class method call
call_user_func(array('MyClass', 'myCallbackMethod'));

// Type 3: Object method call
$obj = new MyClass();
call_user_func(array($obj, 'myCallbackMethod'));

// Type 4: Static class method call
call_user_func('MyClass::myCallbackMethod');

// Type 5: Relative static class method call
class A {
    public static function who() {
        echo "A\n";
    }
}

class B extends A {
    public static function who() {
        echo "B\n";
    }
}

call_user_func(array('B', 'parent::who')); // A

// Type 6: Objects implementing __invoke can be used as callables
class C {
    public function __invoke($name) {
        echo 'Hello ', $name, "\n";
    }
}

$c = new C();
call_user_func($c, 'PHP!');
```

Example #2 Callback example using a Closure 


```php
// Our closure
$double = function($a) {
    return $a * 2;
};

// This is our range of numbers
$numbers = range(1, 5);

// Use the closure as a callback here to
// double the size of each element in our
// range
$new_numbers = array_map($double, $numbers);

print implode(' ', $new_numbers);
```


The above example will output:

2 4 6 8 10


Note: 

Callbacks registered with functions such as call_user_func() and call_user_func_array() will not be called if there is an uncaught exception thrown in a previous callback.


### ===🗝 • Type declarations

Type declarations can be added to function arguments, return values,and, as of PHP 7.4.0, class properties. They ensure that the valueis of the specified type at call time, otherwise a TypeError is thrown. 

Note: 

When overriding a parent method, the child's method must match any returntype declaration on the parent. If the parent doesn't define a returntype, then the child method may do so. 


#### Single types 


    |Type   |Description   |Version  

➡ `Class/interface` name The value must be an instanceof the given class or interface.    
➡ `self` The value must be an instanceof the same class as the onein which the type declaration is used.Can only be used in classes.    
➡ `parent` The value must be an instanceof the parent of the classin which the type declaration is used.Can only be used in classes.    
➡ `array` The value must be an array.    
callable The value must be a valid callable.Cannot be used as a class property type declaration.    
➡ `bool` The value must be a boolean value.    
➡ `float` The value must be a floating point number.    
➡ `int` The value must be an integer.    
➡ `string` The value must be a string.    
➡ `iterable` The value must be either an array or an instanceof Traversable.  PHP 7.1.0 
➡ `object` The value must be an object.  PHP 7.2.0 
➡ `mixed` The value can be any value.  PHP 8.0.0 

Warning 
Aliases for the above scalar types are not supported. Instead, they are treated as class or interface names.For example, using boolean as a type declaration will require the value to be an instanceof the class or interface boolean, rather than of type bool: 


```php
function test(boolean $param) {}
test(true);
```

Output of the above example in PHP 8:


Warning: "boolean" will be interpreted as a class name. Did you mean "bool"? Write "\boolean" to suppress this warning in /in/9YrUX on line 2

Fatal error: Uncaught TypeError: test(): Argument #1 ($param) must be of type boolean, bool given, called in - on line 3 and defined in -:2
Stack trace:
#0 -(3): test(true)
#1 {main}
  thrown in - on line 2


mixed

mixed is equivalent to the union type object|resource|array|string|int|float|bool|null.Available as of PHP 8.0.0. 


Examples


Example #1 Basic class type declaration


```php
class C {}
class D extends C {}

// This doesn't extend C.
class E {}

function f(C $c) {
    echo get_class($c)."\n";
}

f(new C);
f(new D);
f(new E);
```

Output of the above example in PHP 8:


C
D

Fatal error: Uncaught TypeError: f(): Argument #1 ($c) must be of type C, E given, called in /in/gLonb on line 14 and defined in /in/gLonb:8
Stack trace:
#0 -(14): f(Object(E))
#1 {main}
  thrown in - on line 8


Example #2 Basic interface type declaration


```php
interface I { public function f(); }
class C implements I { public function f() {} }

// This doesn't implement I.
class E {}

function f(I $i) {
    echo get_class($i)."\n";
}

f(new C);
f(new E);
```

Output of the above example in PHP 8:


C

Fatal error: Uncaught TypeError: f(): Argument #1 ($i) must be of type I, E given, called in - on line 13 and defined in -:8
Stack trace:
#0 -(13): f(Object(E))
#1 {main}
  thrown in - on line 8


Example #3 Basic return type declaration


```php
function sum($a, $b): float {
    return $a + $b;
}

// Note that a float will be returned.
var_dump(sum(1, 2));
```

The above example will output:


float(3)


Example #4 Returning an object


```php
class C {}

function getC(): C {
    return new C;
}

var_dump(getC());
```

The above example will output:


object(C)#1 (0) {
}


#### Nullable type 

As of PHP 7.1.0, type declarations can be marked nullable by prefixing thetype name with a question mark (?).This signifies that the value can be of the specified type or null. 


Example #5 Nullable argument type declaration


```php
class C {}

function f(?C $c) {
    var_dump($c);
}

f(new C);
f(null);
```

The above example will output:


object(C)#1 (0) {
}
NULL


Example #6 Nullable return type declaration


```php
function get_item(): ?string {
    if (isset($_GET['item'])) {
        return $_GET['item'];
    } else {
        return null;
    }
}
```


Note: 

It is possible to achieve nullable arguments by making null the default value.This is not recommended as this breaks during inheritance. 


Example #7 Old way to make arguments nullable


```php
class C {}

function f(C $c = null) {
    var_dump($c);
}

f(new C);
f(null);
```

The above example will output:


object(C)#1 (0) {
}
NULL


#### Composite types 

It is possible to combine simple types into composite types.PHP allows types to be combined in the following ways: 
◦ Union of simple types. As of PHP 8.0.0.  
◦ Intersection of class-types (interfaces and class names). As of PHP 8.1.0.  

Caution 
It is not possible to combine intersection types with union types. 


Union types

A union type declaration accepts values of multiple different simple types,rather than a single one.Union types are specified using the syntax T1|T2|....Union types are available as of PHP 8.0.0. 


Nullable union types

The null type is supported as part of unions,such that T1|T2|null can be used to create a nullable union.The existing ?T notation is considered a shorthandfor the common case of T|null. 

Caution 
null cannot be used as a standalone type. 


false pseudo-type

The false literal type is supported as part of unions,and is included as for historical reasons many internal functions return false instead of null for failures.A classic example of such a function is strpos(). 

Caution 
false cannot be used as a standalone type (includingnullable standalone type).As such, false, false|nulland ?false are not permitted. 

Caution 
The true literal type does notexist. 


Intersection types

An intersection type declaration accepts values which satisfies multipleclass-type declarations, rather than a single one.Intersection types are specified using the syntax T1&T2&....Intersection types are available as of PHP 8.1.0. 


#### Duplicate and redundant types

To catch simple bugs in composite type declarations, redundant types thatcan be detected without performing class loading will result in acompile-time error. This includes: 

◦ Each name-resolved type may only occur once. Types such as int|string|INT or Countable & Traversable & COUNTABLE result in an error.  
◦ Using mixed results in an error.  

◦ For union types: 

◦ If bool is used, false cannot be used additionally.  
◦ If object is used, class types cannot be used additionally.  
◦ If iterable is used, arrayand Traversable cannot be used additionally.  

◦ For intersection types: 

◦ Using a type which is not a class-type results in an error.  
◦ Using either self, parent, or static results in an error.  


Note: This does not guarantee that the type is “minimal”, because doing so wouldrequire loading all used class types.  

For example, if A and B are classaliases, then A|B remains a legal union type, eventhough it could be reduced to either A or B.Similarly, if class B extends A {}, then A|Bis also a legal union type, even though it could be reduced to just A. 


```php
function foo(): int|INT {} // Disallowed
function foo(): bool|false {} // Disallowed
function foo(): int&Traversable {} // Disallowed
function foo(): self&Traversable {} // Disallowed

use A as B;
function foo(): A|B {} // Disallowed ("use" is part of name resolution)
function foo(): A&B {} // Disallowed ("use" is part of name resolution)

class_alias('X', 'Y');
function foo(): X|Y {} // Allowed (redundancy is only known at runtime)
function foo(): X&Y {} // Allowed (redundancy is only known at runtime)
```


#### Return only types 


void

void is a return type indicating the function does notreturn a value.Therefore it cannot be part of a union type declaration.Available as of PHP 7.1.0. 


Note: 

Returning by reference from a void function is deprecated as of PHP 8.1.0,because such a function is contradictory.Previously, it already emitted the following E_NOTICE when called: Only variable references should be returned by reference. 


```php
function &test(): void {}
```


never

never is a return type indicating the function does notreturn. This means that it either calls exit(), throwsan exception, or is an infinite loop.Therefore it cannot be part of a union type declaration.Available as of PHP 8.1.0. 

never is, in type theory parlance, the bottom type.Meaning it is the subtype of every other type and can replace any otherreturn type during inheritance. 


static

The value must be an instanceof the same class as the one themethod is called in.Available as of PHP 8.0.0. 


#### Strict typing 

By default, PHP will coerce values of the wrong type into the expectedscalar type declaration if possible. For example, a function that is givenan int for a parameter that expects a stringwill get a variable of type string. 

It is possible to enable strict mode on a per-file basis. In strictmode, only a value corresponding exactly to the type declaration will beaccepted, otherwise a TypeError will be thrown.The only exception to this rule is that an int value willpass a float type declaration. 

Warning 
Function calls from within internal functions will not be affected bythe strict_types declaration. 

To enable strict mode, the declare statement is used with the strict_types declaration: 


Note: 

Strict typing applies to function calls made from within the file with strict typing enabled, not tothe functions declared within that file. If a file without stricttyping enabled makes a call to a function that was defined in a filewith strict typing, the caller's preference (coercive typing) will berespected, and the value will be coerced. 


Note: 

Strict typing is only defined for scalar type declarations. 


Example #8 Strict typing for arguments values


```php
declare(strict_types=1);

function sum(int $a, int $b) {
    return $a + $b;
}

var_dump(sum(1, 2));
var_dump(sum(1.5, 2.5));
```

Output of the above example in PHP 8:


int(3)

Fatal error: Uncaught TypeError: sum(): Argument #1 ($a) must be of type int, float given, called in - on line 9 and defined in -:4
Stack trace:
#0 -(9): sum(1.5, 2.5)
#1 {main}
  thrown in - on line 4


Example #9 Coercive typing for argument values


```php
function sum(int $a, int $b) {
    return $a + $b;
}

var_dump(sum(1, 2));

// These will be coerced to integers: note the output below!
var_dump(sum(1.5, 2.5));
```

The above example will output:


int(3)
int(3)


Example #10 Strict typing for return values


```php
declare(strict_types=1);

function sum($a, $b): int {
    return $a + $b;
}

var_dump(sum(1, 2));
var_dump(sum(1, 2.5));
```

The above example will output:


int(3)

Fatal error: Uncaught TypeError: sum(): Return value must be of type int, float returned in -:5
Stack trace:
#0 -(9): sum(1, 2.5)
#1 {main}
  thrown in - on line 5


#### Coercive typing with union types 

When strict_types is not enabled, scalar type declarationsare subject to limited implicit type coercions.If the exact type of the value is not part of the union, then the target typeis chosen in the following order of preference: 

1. int  
2. float  
3. string  
4. bool  

If the type both exists in the union, and the value can be coerced to thetype under PHPs existing type checking semantics, then the type is chosen.Otherwise the next type is tried. 

Caution 
As an exception, if the value is a string and both int and float are partof the union, the preferred type is determined by the existing “numeric string” semantics.For example, for "42" int is chosen,while for "42.0" float is chosen. 


Note: 

Types that are not part of the above preference list are not eligibletargets for implicit coercion. In particular no implicit coercions tothe null and false types occur. 


Example #11 Example of types being coerced into a type part of the union


```php
// int|string
42    --> 42          // exact type
"42"  --> "42"        // exact type
new ObjectWithToString --> "Result of __toString()"
                      // object never compatible with int, fall back to string
42.0  --> 42          // float compatible with int
42.1  --> 42          // float compatible with int
1e100 --> "1.0E+100"  // float too large for int type, fall back to string
INF   --> "INF"       // float too large for int type, fall back to string
true  --> 1           // bool compatible with int
[]    --> TypeError   // array not compatible with int or string

// int|float|bool
"45"    --> 45        // int numeric string
"45.0"  --> 45.0      // float numeric string

"45X"   --> true      // not numeric string, fall back to bool
""      --> false     // not numeric string, fall back to bool
"X"     --> true      // not numeric string, fall back to bool
[]      --> TypeError // array not compatible with int, float or bool
```

Misc 


Example #12 Typed pass-by-reference Parameters


Declared types of reference parameters are checked on function entry, butnot when the function returns, so after the function had returned, theargument's type may have changed. 


```php
function array_baz(array &$param)
{
    $param = 1;
}
$var = [];
array_baz($var);
var_dump($var);
array_baz($var);
```

Output of the above example in PHP 8:


int(1)

Fatal error: Uncaught TypeError: array_baz(): Argument #1 ($param) must be of type array, int given, called in - on line 9 and defined in -:2
Stack trace:
#0 -(9): array_baz(1)
#1 {main}
  thrown in - on line 2


Example #13 Catching TypeError


```php
declare(strict_types=1);

function sum(int $a, int $b) {
    return $a + $b;
}

try {
    var_dump(sum(1, 2));
    var_dump(sum(1.5, 2.5));
} catch (TypeError $e) {
    echo 'Error: ', $e->getMessage();
}
```

Output of the above example in PHP 8:


int(3)
Error: sum(): Argument #1 ($a) must be of type int, float given, called in - on line 10


### ===🗝 • Type Juggling


PHP does not require (or support) explicit type definition in variable declaration; a variable's type is determined by the context in which thevariable is used. That is to say, if a string value is assignedto variable $var, $var becomes a string. If an int value is then assigned to $var, it becomes an int. 

An example of PHP's automatic type conversion is the multiplication operator `'*'`. If either operand is a float, then both operands are evaluated as floats, and the result will be a float. Otherwise,the operands will be interpreted as ints, and the result willalso be an int. Note that this does notchange the types of the operands themselves; the only change is in how theoperands are evaluated and what the type of the expression itself is. 


```php
$foo = "1";  // $foo is string (ASCII 49)
$foo *= 2;   // $foo is now an integer (2)
$foo = $foo * 1.3;  // $foo is now a float (2.6)
$foo = 5 * "10 Little Piggies"; // $foo is integer (50)
$foo = 5 * "10 Small Pigs";     // $foo is integer (50)
```

If the last two examples above seem odd, see how numeric stringsconvert to integers. 

To force a variable to be evaluated as a certain type, see the section on Type casting. To change thetype of a variable, see the settype() function. 

To test any of the examples in this section, use the var_dump() function. 


Note: 

The behaviour of an automatic conversion to array is currentlyundefined. 

Also, because PHP supports indexing into strings via offsetsusing the same syntax as array indexing, the following exampleholds true for all PHP versions: 


```php
$a    = 'car'; // $a is a string
$a[0] = 'b';   // $a is still a string
echo $a;       // bar
```

See the section titled Stringaccess by character for more information. 


#### Type Casting 

Type casting in PHP works much as it does in C: the name of the desired typeis written in parentheses before the variable which is to be cast. 


```php
$foo = 10;   // $foo is an integer
$bar = (boolean) $foo;   // $bar is a boolean
```

The casts allowed are: 

◦ (int), (integer) - cast to int 
◦ (bool), (boolean) - cast to bool 
◦ (float), (double), (real) - cast to float 
◦ (string) - cast to string 
◦ (array) - cast to array 
◦ (object) - cast to object 
◦ (unset) - cast to NULL 

(binary) casting and b prefix exists for forward support. Note thatthe (binary) cast is essential the same as (string), but it should not be reliedupon. 

The (unset) cast has been deprecated as of PHP 7.2.0. Note that the (unset) castis the same as assigning the value NULL to the variable or call. The(unset) cast is removed as of PHP 8.0.0. 

Note that tabs and spaces are allowed inside the parentheses, so the following are functionally equivalent: 

```php
$foo = (int) $bar;
$foo = ( int ) $bar;
```

Casting literal strings and variables to binary strings: 


```php
$binary = (binary) $string;
$binary = b"binary string";
```


Note: 

Instead of casting a variable to a string, it is also possibleto enclose the variable in double quotes. 

```php
$foo = 10;            // $foo is an integer
$str = "$foo";        // $str is a string
$fst = (string) $foo; // $fst is also a string

// This prints out that "they are the same"
if ($fst === $str) {
    echo "they are the same";
}
```


It may not be obvious exactly what will happen when casting between certaintypes. For more information, see these sections: 

◦ Converting to boolean  
◦ Converting to integer  
◦ Converting to float  
◦ Converting to string  
◦ Converting to array  
◦ Converting to object  
◦ Converting to resource  
◦ Converting to NULL  
◦ The type comparison tables 


## ==⚡ • Variables

### ===🗝 • Basics


Variables in PHP are represented by a dollar sign followed by thename of the variable. The variable name is case-sensitive. 

Variable names follow the same rules as other labels in PHP. Avalid variable name starts with a letter or underscore, followedby any number of letters, numbers, or underscores. As a regularexpression, it would be expressed thus: ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$ 


Note: For our purposes here, a letter is a-z, A-Z, and the bytesfrom 128 through 255 (0x80-0xff).  


Note: $this is a special variable that can't beassigned.Prior to PHP 7.1.0, indirect assignment (e.g. by using variable variables)was possible.  

Tip
See also the Userland Naming Guide.

For information on variable related functions, see the Variable Functions Reference. 


```php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // outputs "Bob, Joe"

$4site = 'not yet';     // invalid; starts with a number
$_4site = 'not yet';    // valid; starts with an underscore
$täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
```


By default, variables are always assigned by value. That is to say,when you assign an expression to a variable, the entire value ofthe original expression is copied into the destinationvariable. This means, for instance, that after assigning onevariable's value to another, changing one of those variables willhave no effect on the other. For more information on this kind ofassignment, see the chapter on Expressions. 

PHP also offers another way to assign values to variables: assign by reference.This means that the new variable simply references (in other words,"becomes an alias for" or "points to") the original variable.Changes to the new variable affect the original, and vice versa. 

To assign by reference, simply prepend an ampersand (&) to thebeginning of the variable which is being assigned (the sourcevariable). For instance, the following code snippet outputs 'Myname is Bob' twice: 


```php
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo $bar;
echo $foo;                 // $foo is altered too.
```


One important thing to note is that only named variables may beassigned by reference. 


```php
$foo = 25;
$bar = &$foo;      // This is a valid assignment.
$bar = &(24 * 7);  // Invalid; references an unnamed expression.

function test()
{
   return 25;
}

$bar = &test();    // Invalid.
```


It is not necessary to initialize variables in PHP however it is a verygood practice. Uninitialized variables have a default value of their type depending on the context in which they are used- booleans default to false, integers and floats default to zero, strings (e.g. used in echo) areset as an empty string and arrays become to an empty array. 


Example #1 Default values of uninitialized variables


```php
// Unset AND unreferenced (no use context) variable; outputs NULL
var_dump($unset_var);

// Boolean usage; outputs 'false' (See ternary operators for more on this syntax)
echo($unset_bool ? "true\n" : "false\n");

// String usage; outputs 'string(3) "abc"'
$unset_str .= 'abc';
var_dump($unset_str);

// Integer usage; outputs 'int(25)'
$unset_int += 25; // 0 + 25 => 25
var_dump($unset_int);

// Float/double usage; outputs 'float(1.25)'
$unset_float += 1.25;
var_dump($unset_float);

// Array usage; outputs array(1) {  [3]=>  string(3) "def" }
$unset_arr[3] = "def"; // array() + array(3 => "def") => array(3 => "def")
var_dump($unset_arr);

// Object usage; creates new stdClass object (see http://www.php.net/manual/en/reserved.classes.php)
// Outputs: object(stdClass)#1 (1) {  ["foo"]=>  string(3) "bar" }
$unset_obj->foo = 'bar';
var_dump($unset_obj);
```


Relying on the default value of an uninitialized variable is problematicin the case of including one file into another which uses the samevariable name. E_NOTICE level error is issued in case ofworking with uninitialized variables, however not in the case of appendingelements to the uninitialized array. isset() languageconstruct can be used to detect if a variable has been already initialized. 


### ===🗝 • Predefined Variables

PHP provides a large number of predefined variables to any scriptwhich it runs. Many of these variables, however, cannot be fullydocumented as they are dependent upon which server is running, theversion and setup of the server, and other factors. Some of thesevariables will not be available when PHP is run on the command line. Refer to the list of predefined variablesfor details. 

PHP also provides an additional set of predefined arrayscontaining variables from the web server (if applicable), theenvironment, and user input. These arrays are rather specialin that they are automatically global - i.e., automaticallyavailable in every scope. For this reason, they are often known as"superglobals". (There is no mechanism in PHP foruser-defined superglobals.) Refer to the list of superglobalsfor details. 


Note: Variable variables


Superglobals cannot be used as variable variablesinside functions or class methods. 


If certain variables in variables_order are not set, theirappropriate PHP predefined arrays are also left empty. 


### ===🗝 • Variable scope


The scope of a variable is the context within which it is defined. For the most part all PHP variables only have a single scope.This single scope spans included and required files as well. For example: 


```php
$a = 1;
include 'b.inc';
```

Here the `$a` variable will be available withinthe included `b.inc` script. However, withinuser-defined functions a local function scope is introduced. Anyvariable used inside a function is by default limited to the localfunction scope. For example: 


```php
$a = 1; /* global scope */ 

function test()
{ 
    echo $a; /* reference to local scope variable */ 
} 

test();
```

This script will not produce any output because the echo statementrefers to a local version of the $a variable,and it has not been assigned a value within this scope. You maynotice that this is a little bit different from the C language inthat global variables in C are automatically available tofunctions unless specifically overridden by a local definition.This can cause some problems in that people may inadvertentlychange a global variable. In PHP global variables must bedeclared global inside a function if they are going to be used inthat function. 


#### The `global` keyword 

First, an example use of global: 


Example #1 Using global


```php
$a = 1;
$b = 2;

function Sum()
{
    global $a, $b;

    $b = $a + $b;
} 

Sum();
echo $b;
```

The above script will output 3. By declaring $a and $b global within thefunction, all references to either variable will refer to theglobal version. There is no limit to the number of globalvariables that can be manipulated by a function. 

A second way to access variables from the global scope is to usethe special PHP-defined $GLOBALS array. Theprevious example can be rewritten as: 


Example #2 Using `$GLOBALS` instead of global


```php
$a = 1;
$b = 2;

function Sum()
{
    $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
} 

Sum();
echo $b;
```

The $GLOBALS array is an associative array withthe name of the global variable being the key and the contents ofthat variable being the value of the array element.Notice how $GLOBALS exists in any scope, thisis because $GLOBALS is a superglobal.Here's an example demonstrating the power of superglobals: 


Example #3 Example demonstrating superglobals and scope


```php
function test_superglobal()
{
    echo $_POST['name'];
}
```


Note: 

Using global keyword outside a function is not anerror. It can be used if the file is included from inside a function. 


#### Using static variables 

Another important feature of variable scoping is the static variable. A static variable exists only in a local function scope, but it does not lose its valuewhen program execution leaves this scope. Consider the following example: 


Example #4 Example demonstrating need for static variables


```php
function test()
{
    $a = 0;
    echo $a;
    $a++;
}
```

This function is quite useless since every time it is called it sets $a to 0 and prints 0. The $a++ which increments thevariable serves no purpose since as soon as the function exits the $a variable disappears. To make a useful counting function which will not lose track of the current count, the $a variable is declared static: 


Example #5 Example use of `static` variables


```php
function test()
{
    static $a = 0;
    echo $a;
    $a++;
}
```

Now, $a is initialized only in first call of functionand every time the test() function is called it will print thevalue of $a and increment it. 

Static variables also provide one way to deal with recursivefunctions. A recursive function is one which calls itself. Caremust be taken when writing a recursive function because it ispossible to make it recurse indefinitely. You must make sure youhave an adequate way of terminating the recursion. The followingsimple function recursively counts to 10, using the staticvariable $count to know when to stop: 


Example #6 Static variables with recursive functions


```php
function test()
{
    static $count = 0;

    $count++;
    echo $count;
    if ($count < 10) {
        test();
    }
    $count--;
}
```

Static variables can be assigned values which are theresult of constant expressions, but dynamic expressions, such as functioncalls, will cause a parse error. 


Example #7 Declaring static variables


```php
function foo(){
    static $int = 0;          // correct 
    static $int = 1+2;        // correct
    static $int = sqrt(121);  // wrong  (as it is a function)

    $int++;
    echo $int;
}
```


Note: 

Static declarations are resolved in compile-time. 


#### References with global and static variables 


PHP implements the static and global modifierfor variables in terms of references. For example, a true global variableimported inside a function scope with the globalstatement actually creates a reference to the global variable. This canlead to unexpected behaviour which the following example addresses: 


```php
function test_global_ref() {
    global $obj;
    $new = new stdclass;
    $obj = &$new;
}

function test_global_noref() {
    global $obj;
    $new = new stdclass;
    $obj = $new;
}

test_global_ref();
var_dump($obj);
test_global_noref();
var_dump($obj);
```
The above example will output:


NULL
object(stdClass)#1 (0) {
}


A similar behaviour applies to the static statement.References are not stored statically: 


```php
function &get_instance_ref() {
    static $obj;

    echo 'Static object: ';
    var_dump($obj);
    if (!isset($obj)) {
        $new = new stdclass;
        // Assign a reference to the static variable
        $obj = &$new;
    }
    if (!isset($obj->property)) {
        $obj->property = 1;
    } else {
        $obj->property++;
    }
    return $obj;
}

function &get_instance_noref() {
    static $obj;

    echo 'Static object: ';
    var_dump($obj);
    if (!isset($obj)) {
        $new = new stdclass;
        // Assign the object to the static variable
        $obj = $new;
    }
    if (!isset($obj->property)) {
        $obj->property = 1;
    } else {
        $obj->property++;
    }
    return $obj;
}

$obj1 = get_instance_ref();
$still_obj1 = get_instance_ref();
echo "\n";
$obj2 = get_instance_noref();
$still_obj2 = get_instance_noref();
```
The above example will output:


Static object: NULL
Static object: NULL

Static object: NULL
Static object: object(stdClass)#3 (1) {
  ["property"]=>
  int(1)
}


This example demonstrates that when assigning a reference to a staticvariable, it's not remembered when you call the &get_instance_ref() function a second time. 


### ===🗝 • Variable variables

Sometimes it is convenient to be able to have variable variable names. That is, a variable name which can be set and used dynamically. A normal variable is set with a statement such as: 


```php
$a = 'hello';
```

A variable variable takes the value of a variable and treats thatas the name of a variable. In the above example, hello, can be used as the name of a variableby using two dollar signs. i.e. 


```php
$$a = 'world';
```

At this point two variables have been defined and stored in thePHP symbol tree: $a with contents "hello" and $hello with contents "world". Therefore, thisstatement: 


```php
echo "$a ${$a}";
```

produces the exact same output as: 


```php
echo "$a $hello";
```

i.e. they both produce: hello world. 

In order to use variable variables with arrays, you have toresolve an ambiguity problem. That is, if you write $$a[1] then the parser needs to know if youmeant to use $a[1] as a variable, or if youwanted $$a as the variable and then the [1]index from that variable. The syntax for resolving this ambiguityis: ${$a[1]} for the first case and ${$a}[1] for the second. 

Class properties may also be accessed using variable property names. Thevariable property name will be resolved within the scope from which thecall is made. For instance, if you have an expression such as $foo->$bar, then the local scope will be examined for $bar and its value will be used as the name of theproperty of $foo. This is also true if $bar is an array access. 

Curly braces may also be used, to clearly delimit the propertyname. They are most useful when accessing values within a property thatcontains an array, when the property name is made of multiple parts,or when the property name contains characters that are nototherwise valid (e.g. from json_decode()or SimpleXML). 


Example #1 Variable property example


```php
class foo {
    var $bar = 'I am bar.';
    var $arr = array('I am A.', 'I am B.', 'I am C.');
    var $r   = 'I am r.';
}

$foo = new foo();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo $foo->$bar . "\n";
echo $foo->{$baz[1]} . "\n";

$start = 'b';
$end   = 'ar';
echo $foo->{$start . $end} . "\n";

$arr = 'arr';
echo $foo->{$arr[1]} . "\n";

```

The above example will output:


 I am bar.
 I am bar.
 I am bar.
 I am r.


Warning 
Please note that variable variables cannot be used with PHP's Superglobal arrayswithin functions or class methods. The variable $thisis also a special variable that cannot be referenced dynamically. 


### ===🗝 • Variables From External Sources


#### HTML Forms (GET and POST) 

When a form is submitted to a PHP script, the information fromthat form is automatically made available to the script. Thereare few ways to access this information, for example: 


Example #1 A simple HTML form


```html
<form action="foo.php" method="post">
    Name:  <input type="text" name="username" /><br />
    Email: <input type="text" name="email" /><br />
    <input type="submit" name="submit" value="Submit me!" />
</form>
```


There are only two ways to access data from your HTML forms. Currently available methods are listed below: 

Example #2 Accessing data from a simple POST HTML form


```php
echo $_POST['username'];
echo $_REQUEST['username'];
```


Using a GET form is similar except you'll use the appropriateGET predefined variable instead. GET also applies to the QUERY_STRING (the information after the '?' in a URL). So,for example, http://www.example.com/test.php?id=3contains GET data which is accessible with `$_GET['id']`. See also `$_REQUEST`. 


Note: 

Dots and spaces in variable names are converted to underscores. Forexample `<input name="a.b" />` becomes `$_REQUEST["a_b"]`. 


PHP also understands arrays in the context of form variables(see the related faq). You may,for example, group related variables together, or use thisfeature to retrieve values from a multiple select input. Forexample, let's post a form to itself and upon submission displaythe data: 


Example #3 More complex form variables


```php
if ($_POST) {
    echo '<pre>';
    echo htmlspecialchars(print_r($_POST, true));
    echo '</pre>';
}
```

```html
<form action="" method="post">
    Name:  <input type="text" name="personal[name]" /><br />
    Email: <input type="text" name="personal[email]" /><br />
    Beer: <br />
    <select multiple name="beer[]">
        <option value="warthog">Warthog</option>
        <option value="guinness">Guinness</option>
        <option value="stuttgarter">Stuttgarter Schwabenbräu</option>
    </select><br />
    <input type="submit" value="submit me!" />
</form> 
```

Note: If an external variable name begins with a valid array syntax, trailing charactersare silently ignored. For example, `<input name="foo[bar]baz">` becomes `$_REQUEST['foo']['bar']`.  


#### IMAGE SUBMIT variable names

When submitting a form, it is possible to use an image insteadof the standard submit button with a tag like: 


<input type="image" src="image.gif" name="sub" />

When the user clicks somewhere on the image, the accompanyingform will be transmitted to the server with two additional variables, sub_x and sub_y. These contain the coordinates of the user click within the image. The experienced may note that theactual variable names sent by the browser contains a periodrather than an underscore, but PHP converts the period to anunderscore automatically. 


#### HTTP Cookies 

PHP transparently supports HTTP cookies as defined by » RFC 6265. Cookies are amechanism for storing data in the remote browser and thustracking or identifying return users. You can set cookies usingthe setcookie() function. Cookies are part ofthe HTTP header, so the SetCookie function must be called beforeany output is sent to the browser. This is the same restrictionas for the header() function. Cookie datais then available in the appropriate cookie data arrays, suchas `$_COOKIE` as well as in `$_REQUEST`. See the setcookie() manual page for more details andexamples. 


Note: As of PHP 7.2.34, 7.3.23 and 7.4.11, respectively, the namesof incoming cookies are no longer url-decoded for security reasons.  

If you wish to assign multiple values to a single cookie variable, youmay assign it as an array. For example: 


```php
  setcookie("MyCookie[foo]", 'Testing 1', time()+3600);
  setcookie("MyCookie[bar]", 'Testing 2', time()+3600);
```

That will create two separate cookies although MyCookie will nowbe a single array in your script. If you want to set just one cookiewith multiple values, consider using serialize() or explode() on the value first. 

Note that a cookie will replace a previous cookie by the samename in your browser unless the path or domain is different. So,for a shopping cart application you may want to keep a counterand pass this along. i.e. 


Example #4 A setcookie() example


```php
if (isset($_COOKIE['count'])) {
    $count = $_COOKIE['count'] + 1;
} else {
    $count = 1;
}
setcookie('count', $count, time()+3600);
setcookie("Cart[$count]", $item, time()+3600);
```


#### Dots in incoming variable names 

Typically, PHP does not alter the names of variables when they are passed into a script. However, it should be noted that thedot (period, full stop) is not a valid character in a PHPvariable name. For the reason, look at it: 


```php
$varname.ext;  /* invalid variable name */
```

Now, what the parser sees is a variable named $varname, followed by the string concatenationoperator, followed by the barestring (i.e. unquoted string which doesn't match any known key or reserved words) 'ext'. Obviously, this doesn't have the intended result. 

For this reason, it is important to note that PHP willautomatically replace any dots in incoming variable names with underscores. 


#### Determining variable types 

Because PHP determines the types of variables and converts them(generally) as needed, it is not always obvious what type a givenvariable is at any one time. PHP includes several functionswhich find out what type a variable is, such as: gettype(), is_array(), is_float(), is_int(), is_object(), and is_string(). See also the chapter on Types. 

HTTP being a text protocol, most, if not all, content that comes in Superglobal arrays,like `$_POST` and `$_GET` will remainas strings. PHP will not try to convert values to a specific type.In the example below, `$_GET["var1"]` will contain thestring "null" and `$_GET["var2"]`, the string "123". 


/index.php?var1=null&var2=123


Changelog 


Version \  Description
7.2.34, 7.3.23, 7.4.11 The names of incoming cookies are no longer url-decodedfor security reasons.  


## ==⚡ • Constants

A constant is an identifier (name) for a simple value. As the name suggests, that value cannot change during the execution of thescript (except for magic constants, which aren't actually constants). Constants are case-sensitive. By convention, constant identifiers are always uppercase. 

Note: 

Prior to PHP 8.0.0, constants defined using the define() function may be case-insensitive. 


The name of a constant follows the same rules as any label in PHP. Avalid constant name starts with a letter or underscore, followedby any number of letters, numbers, or underscores. As a regularexpression, it would be expressed thusly: `^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$` 

It is possible to define() constants with reserved or eveninvalid names, whose value can only be retrieved with the constant() function. However, doing so is not recommended. 

Tip
See also the Userland Naming Guide.


Example #1 Valid and invalid constant names


```php
// Valid constant names
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// Invalid constant names
define("2FOO",    "something");

// This is valid, but should be avoided:
// PHP may one day provide a magical constant
// that will break your script
define("__FOO__", "something"); 
```

Note: For our purposes here, a letter is a-z, A-Z, and the ASCIIcharacters from 128 through 255 (0x80-0xff).  

Like superglobals, the scope of a constant is global.Constants can be accessed from anywhere in a script without regard to scope.For more information on scope, read the manual section on variable scope. 


Note: As of PHP 7.1.0, class constant may declare a visibility of protectedor private, making them only available in the hierarchical scope of theclass in which it is defined. 


### ===🗝 • Syntax

Constants can be defined using the `const` keyword, or by using the `define()` function. While define() allows a constant to bedefined to an arbitrary expression, the const keyword hasrestrictions as outlined in the next paragraph.Once a constant is defined, it can never bechanged or undefined. 

When using the const keyword,only scalar (bool, int, float and string) expressions and constant arrays containing only scalar expressions are accepted.It is possible to define constants as a resource,but it should be avoided, as it can cause unexpected results. 

The value of a constant is accessed simply by specifying its name.Unlike variables, a constant is not prependedwith a $.It is also possible to use the constant() function toread a constant's value if the constant's name is obtained dynamically.Use get_defined_constants() to get a list ofall defined constants. 


Note: Constants and (global) variables are in a different namespace.This implies that for example true and $TRUE are generally different.  

If an undefined constant is used an Error is thrown.Prior to PHP 8.0.0, undefined constants would be interpreted as a bareword string, i.e. (CONSTANT vs "CONSTANT").This fallback is deprecated as of PHP 7.2.0, and an error of level E_WARNING is issued when it happens.Prior to PHP 7.2.0, an error of level E_NOTICE has been issued instead.See also the manual entry on why $foo[bar] iswrong (unless bar is a constant).This does not apply to (fully) qualified constants,which will always raise a Error if undefined. 


Note: To check if a constant is set, use the defined() function.  

These are the differences between constants and variables: 

◦ Constants do not have a dollar sign ($)before them;  
◦ Constants may be defined and accessed anywhere without regardto variable scoping rules;
◦ Constants may not be redefined or undefined once they have beenset; and  
◦ Constants may only evaluate to scalar values or arrays.  

Example #1 Defining Constants


```php
define("CONSTANT", "Hello world.");
echo CONSTANT; // outputs "Hello world."
echo Constant; // Emits an Error: Undefined constant "Constant"
               // Prior to PHP 8.0.0, outputs "Constant" and issues a warning.
```

Example #2 Defining Constants using the const keyword


```php
// Simple scalar value
const CONSTANT = 'Hello World';

echo CONSTANT;

// Scalar expression
const ANOTHER_CONST = CONSTANT.'; Goodbye World';
echo ANOTHER_CONST;

const ANIMALS = array('dog', 'cat', 'bird');
echo ANIMALS[1]; // outputs "cat"

// Constant arrays
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // outputs "cat"
```


Note: 

As opposed to defining constants using define(),constants defined using the const keyword must bedeclared at the top-level scope because they are defined at compile-time.This means that they cannot be declared inside functions, loops, if statements or try/catch blocks. 

See Also 


• Class Constants


### ===🗝 • Predefined constants

PHP provides a large number of predefined constants to any scriptwhich it runs. Many of these constants, however, are created byvarious extensions, and will only be present when those extensionsare available, either via dynamic loading or because they havebeen compiled in. 

Core Predefined Constants 

These constants are defined by the PHP core. This includes PHP,the Zend engine, and SAPI modules. 

➡ PHP_VERSION (string)
The current PHP version as a string in"major.minor.release[extra]" notation.

➡ PHP_MAJOR_VERSION (int)
The current PHP "major" version as an integer (e.g., int(5)from version "5.2.7-extra").

➡ PHP_MINOR_VERSION (int)
The current PHP "minor" version as an integer (e.g., int(2)from version "5.2.7-extra").

➡ PHP_RELEASE_VERSION (int)
The current PHP "release" version as an integer (e.g., int(7)from version "5.2.7-extra").

➡ PHP_VERSION_ID (int)
The current PHP version as an integer, useful forversion comparisons (e.g., int(50207)
from version "5.2.7-extra").

➡ PHP_EXTRA_VERSION (string)
The current PHP "extra" version as a string (e.g., '-extra'from version "5.2.7-extra"). Often used by distributionvendors to indicate a package version.

➡ PHP_ZTS (int)
➡ PHP_DEBUG (int)
➡ PHP_MAXPATHLEN (int)
 The maximum length of filenames (including path)
supportedby this build of PHP.

➡ PHP_OS (string)
The operating system PHP was built for.

➡ PHP_OS_FAMILY (string)
The operating system family PHP was built for. One of 'Windows', 'BSD', 'Darwin', 'Solaris', 'Linux' or 'Unknown'.Available as of PHP 7.2.0.

➡ PHP_SAPI (string)
The Server API for this build of PHP.See also php_sapi_name().

➡ PHP_EOL (string)
The correct 'End Of Line' symbol for this platform.

➡ PHP_INT_MAX (int)
The largest integer supported in this build of PHP. Usually int(2147483647)in 32 bit systems and int(9223372036854775807)
in 64 bit systems.

➡ PHP_INT_MIN (int)
The smallest integer supported in this build of PHP. Usually int(-2147483648)
in 32 bit systems andint(-9223372036854775808)
in 64 bit systems. Usually, PHP_INT_MIN === `~PHP_INT_MAX`.

➡ PHP_INT_SIZE (int)
The size of an integer in bytes in this build of PHP.

➡ PHP_FLOAT_DIG (int)
Number of decimal digits that can be rounded into a float and backwithout precision loss.Available as of PHP 7.2.0.

➡ PHP_FLOAT_EPSILON (float)
Smallest representable positive number x, so that x + 1.0 !=1.0.Available as of PHP 7.2.0.

➡ PHP_FLOAT_MIN (float)
Smallest representable positive floating point number.If you need the smallest representable negative floating point number, use - PHP_FLOAT_MAX.Available as of PHP 7.2.0.

➡ PHP_FLOAT_MAX (float)
Largest representable floating point number.Available as of PHP 7.2.0.

➡ DEFAULT_INCLUDE_PATH (string)
➡ PEAR_INSTALL_DIR (string)
➡ PEAR_EXTENSION_DIR (string)
➡ PHP_EXTENSION_DIR (string)
 The default directory where to look for dynamically loadable extensions(unless overridden by extension_dir). Defaults to PHP_PREFIX (or PHP_PREFIX . "\\ext" on Windows).

➡ PHP_PREFIX (string)
The value --prefix was set to at configure.On Windows, it is the value --with-prefixwas set to at configure.

➡ PHP_BINDIR (string)
The value --bindir was set to at configure.On Windows, it is the value --with-prefixwas set to at configure.

➡ PHP_BINARY (string)
Specifies the PHP binary path during script execution.

➡ PHP_MANDIR (string)
Specifies where the manpages were installed into.

➡ PHP_LIBDIR (string)
➡ PHP_DATADIR (string)
➡ PHP_SYSCONFDIR (string)
➡ PHP_LOCALSTATEDIR (string)
➡ PHP_CONFIG_FILE_PATH (string)
➡ PHP_CONFIG_FILE_SCAN_DIR (string)
➡ PHP_SHLIB_SUFFIX (string)
 The build-platform's shared library suffix, such as "so" (most Unixes)or "dll" (Windows).

➡ PHP_FD_SETSIZE(string)
The maximum number of file descriptors for select system calls. Availableas of PHP 7.1.0.

➡ E_ERROR (int)
➡ E_WARNING (int)
➡ E_PARSE (int)
➡ E_NOTICE (int)
➡ E_CORE_ERROR (int)
➡ E_CORE_WARNING (int)
➡ E_COMPILE_ERROR (int)
➡ E_COMPILE_WARNING (int)
➡ E_USER_ERROR (int)
➡ E_USER_WARNING (int)
➡ E_USER_NOTICE (int)
➡ E_RECOVERABLE_ERROR (int)
Error reporting constant.

➡ E_DEPRECATED (int)
Error reporting constant.

➡ E_USER_DEPRECATED (int)
Error reporting constant.

➡ E_ALL (int)
➡ E_STRICT(int)
Error reporting constant  

➡ __COMPILER_HALT_OFFSET__(int)

➡ true(bool)
 See Booleans.

➡ false(bool)
See Booleans.

➡ null(null)
See Null.

➡ PHP_WINDOWS_EVENT_CTRL_C(int)
A Windows CTRL+C event.Available as of PHP 7.4.0 (Windows only).

➡ PHP_WINDOWS_EVENT_CTRL_BREAK(int)
A Windows CTRL+BREAK event.Available as of PHP 7.4.0 (Windows only).

See also: Magicconstants. 

Standard Predefined Constants 

All constants from coreextensions are defined in PHP by default. 


### ===🗝 • List of Keywords


These words have special meaning in PHP. Some of them represent thingswhich look like functions, some look like constants, and so on - butthey're not, really: they are language constructs.The following words cannot be used as constants, class names, function or method names.They are, however, allowed as property, constant, andmethod names of classes, interfaces and traits, except that class may not be used as constant name. 

PHP Keywords

| __halt_compiler() | abstract     | and                   | array()    | as         |
| break             | callable     | case                  | catch      | class      |
| clone             | const        | continue              | declare    | default    |
| die()             | do           | echo                  | else       | elseif     |
| empty()           | enddeclare   | endfor                | endforeach | endif      |
| endswitch         | endwhile     | eval()                | exit()     | extends    |
| final             | finally      | fn (as of PHP 7.4)    | for        | foreach    |
| function          | global       | goto                  | if         | implements |
| include           | include_once | instanceof            | insteadof  | interface  |
| isset()           | list()       | match (as of PHP 8.0) | namespace  | new        |
| or                | print        | private               | protected  | public     |
| readonly *        | require      | require_once          | return     | static     |
| switch            | throw        | trait                 | try        | unset()    |
| use               | var          | while                 | xor        | yield      |
| yield             | from         |                       |            |            |

*  (as of PHP 8.1.0) readonly may be used as function name. 

Compile-time constants

__CLASS__  __DIR__  __FILE__  __FUNCTION__  __LINE__  __METHOD__  
__NAMESPACE__  __TRAIT__   


### ===🗝 • Magic constants


There are nine magical constants that change depending onwhere they are used. For example, the value of __LINE__ depends on the line that it'sused on in your script. All these "magical" constants are resolvedat compile time, unlike regular constants, which are resolved at runtime.These special constants are case-insensitive and are as follows: 

PHP's magic constants


|Name   |Description
➡ __LINE__  The current line number of the file.  
➡ __FILE__  The full path and filename of the file with symlinks resolved. If used inside an include,the name of the included file is returned.  
➡ __DIR__   The directory of the file. If used inside an include,the directory of the included file is returned. This is equivalentto dirname(__FILE__). This directory namedoes not have a trailing slash unless it is the root directory.  
➡ __FUNCTION__  The function name, or {closure} for anonymous functions.  
➡ __CLASS__     The class name. The class name includes the namespaceit was declared in (e.g. Foo\Bar).When usedin a trait method, __CLASS__ is the name of the class the traitis used in.  
➡ __TRAIT__     The trait name. The trait name includes the namespaceit was declared in (e.g. Foo\Bar).  
➡ __METHOD__    The class method name.  
➡ __NAMESPACE__     The name of the current namespace.  
➡ ClassName::class  The fully qualified class name.  


See Also 

• ::class
• get_class()
• get_object_vars()
• file_exists()
• function_exists()


## ==⚡ • Expressions

Expressions are the most important building blocks of PHP. In PHP,almost anything you write is an expression. The simplest yetmost accurate way to define an expression is "anything that has avalue". 

The most basic forms of expressions are constants and variables.When you type "$a = 5", you're assigning '5' into $a. '5', obviously,has the value 5, or in other words '5' is an expression with thevalue of 5 (in this case, '5' is an integer constant). 

After this assignment, you'd expect $a's value to be 5 aswell, so if you wrote $b = $a, you'd expect it to behave just asif you wrote $b = 5. In other words, $a is an expression with thevalue of 5 as well. If everything works right, this is exactlywhat will happen. 

Slightly more complex examples for expressions are functions. Forinstance, consider the following function: 


```php
function foo ()
{
    return 5;
}
```


Assuming you're familiar with the concept of functions (if you'renot, take a look at the chapter about functions), you'd assumethat typing $c = foo() is essentially just likewriting $c = 5, and you're right. Functionsare expressions with the value of their return value. Since foo()returns 5, the value of the expression 'foo()' is 5. Usuallyfunctions don't just return a static value but compute something. 

Of course, values in PHP don't have to be integers, and very often they aren't. PHP supports four scalar value types: intvalues, floating point values (float), stringvalues and bool values (scalar values are values that youcan't 'break' into smaller pieces, unlike arrays, for instance). PHP alsosupports two composite (non-scalar) types: arrays and objects. Each ofthese value types can be assigned into variables or returned from functions. 

PHP takes expressions much further, in the same way many other languagesdo. PHP is an expression-oriented language, in thesense that almost everything is an expression. Consider theexample we've already dealt with, '$a = 5'. It's easy to see thatthere are two values involved here, the value of the integerconstant '5', and the value of $a which is being updated to 5 aswell. But the truth is that there's one additional value involvedhere, and that's the value of the assignment itself. Theassignment itself evaluates to the assigned value, in this case 5.In practice, it means that '$a = 5', regardless of what it does,is an expression with the value 5. Thus, writing something like'$b = ($a = 5)' is like writing'$a = 5; $b = 5;' (a semicolonmarks the end of a statement). Since assignments are parsed in aright to left order, you can also write '$b = $a = 5'. 

Another good example of expression orientation is pre- andpost-increment and decrement. Users of PHP and many otherlanguages may be familiar with the notation of variable++ and variable--. These are increment and decrement operators. In PHP, like in C, thereare two types of increment - pre-increment and post-increment.Both pre-increment and post-increment essentially increment thevariable, and the effect on the variable is identical. Thedifference is with the value of the increment expression.Pre-increment, which is written '++$variable', evaluates to theincremented value (PHP increments the variable before reading itsvalue, thus the name 'pre-increment'). Post-increment, which iswritten '$variable++' evaluates to the original value of$variable, before it was incremented (PHP increments the variableafter reading its value, thus the name 'post-increment'). 

A very common type of expressions are comparisonexpressions. These expressions evaluate to either false or true. PHPsupports > (bigger than), >= (bigger than or equal to), == (equal),!= (not equal), < (smaller than) and <= (smaller than or equal to).The language also supports a set of strict equivalence operators: ===(equal to and same type) and !== (not equal to or not same type).These expressions are most commonly used inside conditional execution,such as if statements. 

The last example of expressions we'll deal with here is combinedoperator-assignment expressions. You already know that if youwant to increment $a by 1, you can simply write'$a++' or '++$a'.But what if you want to add more than one to it, for instance 3?You could write '$a++' multiple times, but thisis obviously not a very efficient or comfortable way. A much morecommon practice is to write '$a = $a + 3'. '$a + 3' evaluatesto the value of $a plus 3, and is assigned backinto $a, which results in incrementing $aby 3. In PHP, as in several other languages like C, you can write thisin a shorter way, which with time would become clearer and quicker tounderstand as well. Adding 3 to the current value of $acan be written '$a += 3'. This means exactly"take the value of $a, add 3 to it, and assign itback into $a". In addition to being shorter andclearer, this also results in faster execution. The value of'$a += 3', like the value of a regular assignment, isthe assigned value. Notice that it is NOT 3, but the combined valueof $a plus 3 (this is the value that'sassigned into $a). Any two-place operator can be usedin this operator-assignment mode, for example '$a -= 5'(subtract 5 from the value of $a), '$b *= 7'(multiply the value of $b by 7), etc. 

There is one more expression that may seem odd if you haven't seenit in other languages, the ternary conditional operator: 


```php
$first ? $second : $third
```


If the value of the first subexpression is true (non-zero), thenthe second subexpression is evaluated, and that is the result ofthe conditional expression. Otherwise, the third subexpression isevaluated, and that is the value. 

The following example should help you understand pre- andpost-increment and expressions in general a bit better: 


```php
function double($i)
{
    return $i*2;
}
$b = $a = 5;        /* assign the value five into the variable $a and $b */
$c = $a++;          /* post-increment, assign original value of $a 
                       (5) to $c */
$e = $d = ++$b;     /* pre-increment, assign the incremented value of 
                       $b (6) to $d and $e */

/* at this point, both $d and $e are equal to 6 */

$f = double($d++);  /* assign twice the value of $d before
                       the increment, 2*6 = 12 to $f */
$g = double(++$e);  /* assign twice the value of $e after
                       the increment, 2*7 = 14 to $g */
$h = $g += 10;      /* first, $g is incremented by 10 and ends with the 
                       value of 24. the value of the assignment (24) is 
                       then assigned into $h, and $h ends with the value 
                       of 24 as well. */
```


Some expressions can be considered as statements. Inthis case, a statement has the form of 'expr ;' that is, anexpression followed by a semicolon. In '$b = $a = 5;', '$a = 5' is a valid expression, but it's not a statementby itself. '$b = $a = 5;' however is a valid statement. 

One last thing worth mentioning is the truth value of expressions.In many events, mainly in conditional execution and loops, you'renot interested in the specific value of the expression, but onlycare about whether it means true or false.The constants true and false (case-insensitive) are the twopossible boolean values. When necessary, an expression isautomatically converted to boolean. See the section abouttype-casting for details about how. 

PHP provides a full and powerful implementation of expressions, anddocumenting it entirely goes beyond the scope of this manual. Theabove examples should give you a good idea about what expressionsare and how you can construct useful expressions. Throughout therest of this manual we'll write exprto indicate any valid PHP expression. 


## ==⚡ • Operators

Table of Contents 

• Operator Precedence
• Arithmetic Operators
• Assignment Operators
• Bitwise Operators
• Comparison Operators
• Error Control Operators
• Execution Operators
• Incrementing/Decrementing Operators
• Logical Operators
• String Operators
• Array Operators
• Type Operators

An operator is something that takes one or more values (orexpressions, in programming jargon) and yields another value (so that theconstruction itself becomes an expression). 

Operators can be grouped according to the number of values they take. Unaryoperators take only one value, for example ! (the logical not operator) or ++ (the increment operator).Binary operators take two values, such as the familiar arithmetical operators + (plus) and - (minus), and themajority of PHP operators fall into this category. Finally, there is asingle ternaryoperator, ? :, which takes three values; this isusually referred to simply as "the ternary operator" (although it couldperhaps more properly be called the conditional operator). 

A full list of PHP operators follows in the section Operator Precedence.The section also explains operator precedence and associativity, which governexactly how expressions containing several different operators areevaluated. 


### ===🗝 • Operator Precedence

The precedence of an operator specifies how "tightly" it binds twoexpressions together. For example, in the expression `1 +5 * 3`, the answer is 16 and not 18 because the multiplication `("*")` operatorhas a higher precedence than the addition ("+") operator.Parentheses may be used to force precedence, if necessary. Forinstance: (1 + 5) * 3 evaluates to 18. 

When operators have equal precedence their associativity decideshow the operators are grouped. For example "-" is left-associative, so 1 - 2 - 3 is grouped as (1 - 2) - 3and evaluates to -4. "=" on the other hand isright-associative, so $a = $b = $c is grouped as $a = ($b = $c). 

Operators of equal precedence that are non-associative cannot be usednext to each other, for example 1 < 2 > 1 isillegal in PHP. The expression 1 <= 1 == 1 on theother hand is legal, because the == operator has a lowerprecedence than the <= operator. 

Associativity is only meaningful for binary (and ternary) operators.Unary operators are either prefix or postfix so this notion is not applicable.For example !!$a can only be grouped as !(!$a). 

Use of parentheses, even when not strictly necessary, can often increasereadability of the code by making grouping explicit rather than relyingon the implicit operator precedence and associativity. 

The following table lists the operators in order of precedence, withthe highest-precedence ones at the top. Operators on the same linehave equal precedence, in which case associativity decides grouping. 

Operator Precedence


|  Associativity  |      Operators       |   Additional Information  |
|-----------------|----------------------|---------------------------|
| (n/a)           | clone new            | clone and  new            |
| right           | **                   | arithmetic                |
| (n/a)           | + - ++ -- ~ (int) (float) (string) (array) (object) (bool) @ | arithmetic (unary + and -), increment/decrement, bitwise, type casting and error control  |
| left            | instanceof           | type                      |
| (n/a)           | !                    | logical                   |
| left            | * / %                | arithmetic                |
| left            | + - .                | arithmetic (binary + and -), array and string (. prior to PHP 8.0.0)  |
| left            | << >>                | bitwise                   |
| left            | .                    | string (as of PHP 8.0. 0) |
| non-associative | < <= > >=            | comparison                |
| non-associative | == != === !== <> <=> | comparison                |
| left            | & bitwise and        | references                |
| left            | ^                    | bitwise                   |
| left            | |                    | bitwise                   |
| left            | &&                   | logical                   |
| left            | ||                   | logical                   |
| right           | ??                   | null coalescing           |
| non-associative | ? :                  | ternary(left-associative prior to PHP 8.0.0)  |
| right           | = += -= *= **= /= .= %= &= |= ^= <<= >>= ??=  | assignment |  
| (n/a)           | yield from yield     | from                      |
| (n/a)           | yield                | yield                     |
| (n/a)           | print                | print                     |
| left            | and                  | logical                   |
| left            | xor                  | logical                   |
| left            | or                   | logical                   |


Example #1 Associativity


```php
$a = 3 * 3 % 5; // (3 * 3) % 5 = 4
// ternary operator associativity differs from C/C++
$a = true ? 0 : true ? 1 : 2; // (true ? 0 : true) ? 1 : 2 = 2 (prior to PHP 8.0.0)

$a = 1;
$b = 2;
$a = $b += 3; // $a = ($b += 3) -> $a = 5, $b = 5
```

Operator precedence and associativity only determine how expressionsare grouped, they do not specify an order of evaluation. PHP does not(in the general case) specify in which order an expression is evaluatedand code that assumes a specific order of evaluation should be avoided,because the behavior can change between versions of PHP or depending onthe surrounding code. 


Example #2 Undefined order of evaluation


```php
$a = 1;
echo $a + $a++; // may print either 2 or 3

$i = 1;
$array[$i] = $i++; // may set either index 1 or 2
```

Example #3 +, - and . have the same precedence (prior to PHP 8.0.0)


```php
$x = 4;
// this line might result in unexpected output:
echo "x minus one equals " . $x-1 . ", or so I hope\n";
// because it is evaluated like this line (prior to PHP 8.0.0):
echo (("x minus one equals " . $x) - 1) . ", or so I hope\n";
// the desired precedence can be enforced by using parentheses:
echo "x minus one equals " . ($x-1) . ", or so I hope\n";
```

The above example will output:


-1, or so I hope
-1, or so I hope
x minus one equals 3, or so I hope


Note: 

Although = has a lower precedence thanmost other operators, PHP will still allow expressionssimilar to the following: if (!$a = foo()),in which case the return value of foo() isput into $a. 


Changelog 


Version  / Description


8.0.0 String concatenation (.) now has a lower precedence thanarithmetic addition/subtraction (+ and -) andbitwise shift left/right (<< and >>);previously it had the same precedence as + and -and a higher precedence than << and >>.  

8.0.0 The ternary operator (? :) is non-associative now;previously it was left-associative.  

7.4.0 Relying on the precedence of string concatenation (.) relative toarithmetic addition/subtraction (+ or -) orbitwise shift left/right (<< or >>),i.e. using them together in an unparenthesized expression, is deprecated.  

7.4.0 Relying on left-associativity of the ternary operator (? :),i.e. nesting multiple unparenthesized ternary operators, is deprecated.  


### ===🗝 • Arithmetic Operators

Remember basic arithmetic from school? These work justlike those. 

Arithmetic Operators


| Example  |      Name      |                      Result                      |
|----------|----------------|--------------------------------------------------|
| +$a      | Identity       | Conversion of $a to int or float as appropriate. |
| -$a      | Negation       | Opposite of $a.                                  |
| $a + $b  | Addition       | Sum of $a and $b.                                |
| $a - $b  | Subtraction    | Difference of $a and $b.                         |
| $a * $b  | Multiplication | Product of $a and $b.                            |
| $a / $b  | Division       | Quotient of $a and $b.                           |
| $a % $b  | Modulo         | Remainder of $a divided by $b.                   |
| $a ** $b | Exponentiation | Result of raising $a to the $b'th power.         |

The division operator ("/") returns a float value unless the two operandsare integers (or strings that get converted to integers) and the numbersare evenly divisible, in which case an integer value will be returned. Forinteger division, see intdiv(). 

Operands of modulo are converted to intbefore processing. For floating-point modulo, see fmod(). 

The result of the modulo operator % has the same signas the dividend — that is, the result of $a % $bwill have the same sign as $a. For example: 


```php
echo (5 % 3)."\n";           // prints 2
echo (5 % -3)."\n";          // prints 2
echo (-5 % 3)."\n";          // prints -2
echo (-5 % -3)."\n";         // prints -2
```

See Also 

• Math functions


### ===🗝 • Assignment Operators

The basic assignment operator is "=". Your first inclination mightbe to think of this as "equal to". Don't. It really means that theleft operand gets set to the value of the expression on theright (that is, "gets set to"). 

The value of an assignment expression is the value assigned. Thatis, the value of "$a = 3" is 3. This allows you to do some trickythings: 

```php
$a = ($b = 4) + 5; // $a is equal to 9 now, and $b has been set to 4.
```

In addition to the basic assignment operator, there are "combinedoperators" for all of the binaryarithmetic, array union and string operators that allow you to use a value in anexpression and then set its value to the result of that expression. Forexample: 


```php
$a = 3;
$a += 5; // sets $a to 8, as if we had said: $a = $a + 5;
$b = "Hello ";
$b .= "There!"; // sets $b to "Hello There!", just like $b = $b . "There!";
```

Note that the assignment copies the original variable to the newone (assignment by value), so changes to one will not affect theother. This may also have relevance if you need to copy somethinglike a large array inside a tight loop. 

An exception to the usual assignment by value behaviour within PHP occurswith objects, which are assigned by reference.Objects may be explicitly copied via the clone keyword. 


Assignment by Reference 

Assignment by reference is also supported, using the "$var = &$othervar;" syntax.Assignment by reference means that both variables end up pointing at thesame data, and nothing is copied anywhere. 


Example #1 Assigning by reference


```php
$a = 3;
$b = &$a; // $b is a reference to $a

print "$a\n"; // prints 3
print "$b\n"; // prints 3

$a = 4; // change $a

print "$a\n"; // prints 4
print "$b\n"; // prints 4 as well, since $b is a reference to $a, which has
              // been changed
```

The newoperator returns a reference automatically, as such assigning the result of new by reference is an error. 

```php
class C {}

$o = &new C;
```

The above example will output:

Parse error: syntax error, unexpected 'new' (T_NEW) in …


More information on references and their potential uses can be found inthe References Explainedsection of the manual. 


Arithmetic Assignment Operators 


    |  Example  |   Equivalent  |   Operation    |
    |-----------|---------------|----------------|
    | $a += $b  | $a = $a + $b  | Addition       |
    | $a -= $b  | $a = $a - $b  | Subtraction    |
    | $a *= $b  | $a = $a * $b  | Multiplication |
    | $a /= $b  | $a = $a / $b  | Division       |
    | $a %= $b  | $a = $a % $b  | Modulus        |
    | $a **= $b | $a = $a ** $b | Exponentiation |


Bitwise Assignment Operators 


    |  Example  |   Equivalent  |  Operation  |
    |-----------|---------------|-------------|
    | $a &= $b  | $a = $a & $b  | Bitwise And |
    | $a |= $b  | $a = $a | $b  | Bitwise Or  |
    | $a ^= $b  | $a = $a ^ $b  | Bitwise Xor |
    | $a <<= $b | $a = $a << $b | Left Shift  |
    | $a >>= $b | $a = $a >> $b | Right Shift |


Other Assignment Operators 


|  Example  |   Equivalent  |      Operation       |
|-----------|---------------|----------------------|
| $a .= $b  | $a = $a . $b  | String Concatenation |
| $a ??= $b | $a = $a ?? $b | Null Coalesce        |


See Also 

• arithmetic operators
• bitwise operators
• null coalescing operator


### ===🗝 • Bitwise Operators


Bitwise operators allow evaluation and manipulation of specificbits within an integer. 

Bitwise Operators


|Example |Name |Result
| $a & $b| And Bits | that are set in both $a and $b are set. 
| $a + $b| Or (inclusive or) Bits | that are set in either $a or $b are set. 
| $a ^ $b| Xor (exclusive or) Bits | that are set in $a or $b but not both are set.  
| ~ $a   |Not Bits | that are set in $a are not set, and vice versa.  
| $a << $b| Shift left | Shift the bits of $a $b steps to the left (each step means"multiply by two")  
| $a >> $b| Shift right | Shift the bits of $a $b steps to the right (each step means"divide by two")  

Bit shifting in PHP is arithmetic.Bits shifted off either end are discarded.Left shifts have zeros shifted in on the right while the signbit is shifted out on the left, meaning the sign of an operandis not preserved.Right shifts have copies of the sign bit shifted in on the left,meaning the sign of an operand is preserved. 

Use parentheses to ensure the desired precedence.For example, $a & $b == true evaluatesthe equivalency then the bitwise and; while ($a & $b) == true evaluates the bitwise andthen the equivalency. 

If both operands for the &, | and ^ operators are strings, then the operation will beperformed on the ASCII values of the characters that make up the strings andthe result will be a string. In all other cases, both operands will be converted to integersand the result will be an integer. 

If the operand for the ~ operator is a string, theoperation will be performed on the ASCII values of the characters that makeup the string and the result will be a string, otherwise the operand and theresult will be treated as integers. 

Both operands and the result for the << and >> operators are always treated as integers. 


PHP's error_reporting ini setting uses bitwise values,
providing a real-world demonstration of turning
bits off. To show all errors, except for notices,
the php.ini file instructions say to use:

    E_ALL & ~E_NOTICE
      


### ===🗝 • Comparison Operators


Comparison operators, as their name implies, allow you to comparetwo values. You may also be interested in viewing the type comparison tables,as they show examples of various type related comparisons. 

Comparison Operators


| Example    | Name | Result
| $a == $b   | Equal true if $a is equal to $b after type juggling. 
| $a === $b  | Identical true if $a is equal to $b, and they are of the sametype.  
| $a != $b   | Not equal true if $a is not equal to $b after type juggling. 
| $a <> $b   | Not equal true if $a is not equal to $b after type juggling. 
| $a !== $b  | Not identical true if $a is not equal to $b, or they are not of the sametype.  
| $a < $b    | Less than true if $a is strictly less than $b. 
| $a > $b    | Greater than true if $a is strictly greater than $b. 
| $a <= $b   | Less than or equal to  true if $a is less than or equal to $b. 
| $a >= $b   | Greater than or equal to  true if $a is greater than or equal to $b. 
| $a <=> $b  | Spaceship An int less than, equal to, or greater than zero when $a is less than, equal to, or greater than $b, respectively.  


If both operands are numeric strings,or one operand is a number and the other one is a numeric string,then the comparison is done numerically.These rules also apply to the switch statement.The type conversion does not take place when the comparison is === or !== as this involvescomparing the type as well as the value. 

⚠Warning 
Prior to PHP 8.0.0, if a string is compared to a numberor a numeric string then the string was converted to anumber before performing the comparison. This can lead to surprisingresults as can be seen with the following example: 


```php
var_dump(0 == "a");
var_dump("1" == "01");
var_dump("10" == "1e1");
var_dump(100 == "1e2");

switch ("a") {
case 0:
    echo "0";
    break;
case "a":
    echo "a";
    break;
``` 
}

Output of the above example in PHP 7:


bool(true)
bool(true)
bool(true)
bool(true)
0


Output of the above example in PHP 8:


bool(false)
bool(true)
bool(true)
bool(true)
a


```php
// Integers
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1
 
// Floats
echo 1.5 <=> 1.5; // 0
echo 1.5 <=> 2.5; // -1
echo 2.5 <=> 1.5; // 1
 
// Strings
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1
 
echo "a" <=> "aa"; // -1
echo "zz" <=> "aa"; // 1
 
// Arrays
echo [] <=> []; // 0
echo [1, 2, 3] <=> [1, 2, 3]; // 0
echo [1, 2, 3] <=> []; // 1
echo [1, 2, 3] <=> [1, 2, 1]; // 1
echo [1, 2, 3] <=> [1, 2, 4]; // -1
 
// Objects
$a = (object) ["a" => "b"]; 
$b = (object) ["a" => "b"]; 
echo $a <=> $b; // 0
 
$a = (object) ["a" => "b"]; 
$b = (object) ["a" => "c"]; 
echo $a <=> $b; // -1
 
$a = (object) ["a" => "c"]; 
$b = (object) ["a" => "b"]; 
echo $a <=> $b; // 1
 
// not only values are compared; keys must match
$a = (object) ["a" => "b"]; 
$b = (object) ["b" => "b"]; 
echo $a <=> $b; // 1
``` 


For various types, comparison is done according to the followingtable (in order). 

Comparison with Various Types


| Type of Operand 1  | Type of Operand 2 | Result |
|--------------------|-------------------|--------|
| null or string     | string     | Convert null to "", numerical or lexical comparison 
| bool or null       | anything   | Convert both sides to bool, false < true 
| object             | object     | Built-in classes can define its own comparison, different classesare uncomparable, same class see Object Comparison  
| string, resource, int or float  | string, resource, int or float | Translate strings and resources to numbers, usual math 
| array              | array      | Array with fewer members is smaller, if key from operand 1 is notfound in operand 2 then arrays are uncomparable, otherwise - compare value by value (see following example) 
| object             | anything   | object is always greater 
| array              | anything   | array is always greater 


Example #1 Boolean/null comparison


```php
// Bool and null are compared as bool always
var_dump(1 == TRUE);  // TRUE - same as (bool)1 == TRUE
var_dump(0 == FALSE); // TRUE - same as (bool)0 == FALSE
var_dump(100 < TRUE); // FALSE - same as (bool)100 < TRUE
var_dump(-10 < FALSE);// FALSE - same as (bool)-10 < FALSE
var_dump(min(-100, -10, NULL, 10, 100)); // NULL - (bool)NULL < (bool)-100 is FALSE < TRUE
``` 


Example #2 Transcription of standard array comparison


```php
// Arrays are compared like this with standard comparison operators
function standard_array_compare($op1, $op2)
{
    if (count($op1) < count($op2)) {
        return -1; // $op1 < $op2
    } elseif (count($op1) > count($op2)) {
        return 1; // $op1 > $op2
    }
    foreach ($op1 as $key => $val) {
        if (!array_key_exists($key, $op2)) {
            return null; // uncomparable
        } elseif ($val < $op2[$key]) {
            return -1;
        } elseif ($val > $op2[$key]) {
            return 1;
        }
    }
    return 0; // $op1 == $op2
``` 
}


Warning 
Comparison of floating point numbers 

Because of the way floats are represented internally, youshould not test two floats for equality. 

See the documentation for float for more information. 


See Also 


• strcasecmp()
• strcmp()
• Array operators
• Types


Ternary Operator 

Another conditional operator is the "?:" (or ternary) operator. 


Example #3 Assigning a default value


```php
// Example usage for: Ternary Operator
$action = (empty($_POST['action'])) ? 'default' : $_POST['action'];

// The above is identical to this if/else statement
if (empty($_POST['action'])) {
    $action = 'default';
} else {
    $action = $_POST['action'];
}
``` 

The expression (expr1) ? (expr2) : (expr3)evaluates to expr2 if expr1 evaluates to true, and expr3 if expr1 evaluates to false. 

It is possible to leave out the middle part of the ternary operator.Expression expr1 ?: expr3 returns expr1 if expr1evaluates to true, and expr3 otherwise. 


Note: Please note that the ternary operator is an expression, and that itdoesn't evaluate to a variable, but to the result of an expression. Thisis important to know if you want to return a variable by reference.The statement return $var == 42 ? $a : $b; in areturn-by-reference function will therefore not work and a warning isissued.  


Note: 

It is recommended to avoid "stacking" ternary expressions.PHP's behaviour when using more than one unparenthesized ternary operator within a singleexpression is non-obvious compared to other languages.Indeed prior to PHP 8.0.0, ternary expressions were evaluated left-associative,instead of right-associative like most other programming languages.Relying on left-associativity is deprecated as of PHP 7.4.0.As of PHP 8.0.0, the ternary operator is non-associative. 


Example #4 Non-obvious Ternary Behaviour


```php
// on first glance, the following appears to output 'true'
echo (true ? 'true' : false ? 't' : 'f');

// however, the actual output of the above is 't' prior to PHP 8.0.0
// this is because ternary expressions are left-associative

// the following is a more obvious version of the same code as above
echo ((true ? 'true' : false) ? 't' : 'f');

// here, one can see that the first expression is evaluated to 'true', which
// in turn evaluates to (bool)true, thus returning the true branch of the
// second ternary expression.
```


Null Coalescing Operator 

Further exists the "??" (or null coalescing) operator. 


Example #5 Assigning a default value


```php
// Example usage for: Null Coalesce Operator
$action = $_POST['action'] ?? 'default';

// The above is identical to this if/else statement
if (isset($_POST['action'])) {
    $action = $_POST['action'];
} else {
    $action = 'default';
}
``` 

The expression (expr1) ?? (expr2) evaluates to expr2 if expr1 is null, and expr1 otherwise. 

In particular, this operator does not emit a notice or warning if the left-hand sidevalue does not exist, just like isset(). This is especiallyuseful on array keys. 


Note: Please note that the null coalescing operator is an expression, and that itdoesn't evaluate to a variable, but to the result of an expression. Thisis important to know if you want to return a variable by reference.The statement return $foo ?? $bar; in areturn-by-reference function will therefore not work and a warning isissued.  


Note: 

Please note that the null coalescing operator allows for simple nesting: 


Example #6 Nesting null coalescing operator


```php

$foo = null;
$bar = null;
$baz = 1;
$qux = 2;

echo $foo ?? $bar ?? $baz ?? $qux; // outputs 1
```


### ===🗝 • Error Control Operators

PHP supports one error control operator: the at sign (@). When prepended to an expression in PHP, any diagnostic error that mightbe generated by that expression will be suppressed. 

If a custom error handler function is set with `set_error_handler()`, it will still be called even thoughthe diagnostic has been suppressed, as such the custom error handler shouldcall error_reporting() and verify that the @ operator was used in the following way: 


```php
function my_error_handler($err_no, $err_msg, $filename, $linenum) {
    if (!(error_reporting() & $err_no)) {
        return false; // Silenced
    }
    // ...
}
set_error_handler("my_error_handler");
```


⚠Warning 
Prior to PHP 8.0.0, the value of the severity passed to the custom errorhandler was always 0 if the diagnostic was suppressed. This is no longer the case as of PHP 8.0.0. 

Any error message generated by the expression is available in the "message"element of the array returned by error_get_last(). The result of that function will change on each error, so it needs to be checked early. 


```php
/* Intentional file error */
$my_file = @file ('non_existent_file') or
    die ("Failed opening file: error was '" . error_get_last()['message'] . "'");

// this works for any expression, not just functions:
$value = @$cache[$key];
// will not issue a notice if the index $key doesn't exist.
```

Note: The @-operator works only on expressions.A simple rule of thumb is: if one can take the value of something,then one can prepend the @ operator to it. For instance, it can be prepended to variables, functions calls,certain language construct calls (e.g. include),and so forth.It cannot be prepended to function or class definitions,or conditional structures such as if and foreach, and so forth.  

⚠Warning 
Prior to PHP 8.0.0, it was possible for the @ operatorto disable critical errors that will terminate script execution.For example, prepending @ to a call of a functionwhich did not exist, by being unavailable or mistyped, would causethe script to terminate with no indication as to why. 


See Also 

• error_reporting()
• Error Handling and Logging functions


### ===🗝 • Execution Operators

PHP supports one execution operator: backticks (``). Note that these are not single-quotes! PHP will attempt to execute the contents of the backticks as a shell command; the output will bereturned (i.e., it won't simply be dumped to output; it can beassigned to a variable). Use of the backtick operator is identicalto shell_exec(). 


```php
$output = `ls -al`;
echo "<pre>$output</pre>";
```


Note: 

The backtick operator is disabled when `shell_exec()` is disabled. 


Note: 

Unlike some other languages, backticks have no special meaningwithin double-quoted strings. 

See Also 

• Program Execution functions
• popen()
• proc_open()
• Using PHP from the commandline


### ===🗝 • Incrementing/Decrementing Operators

PHP supports C-style pre- and post-increment and decrementoperators. 

Note: The increment/decrement operators only affect numbers and strings.Arrays, objects, booleans and resources are not affected.Decrementing null values has no effect too, but incrementing themresults in 1.  

Increment/decrement Operators


| Example |      Name      |                 Effect                 |
|---------|----------------|----------------------------------------|
| ++$a    | Pre-increment  | Increments $a by one, then returns $a. |
| $a++    | Post-increment | Returns $a, then increments $a by one. |
| --$a    | Pre-decrement  | Decrements $a by one, then returns $a. |
| $a--    | Post-decrement | Returns $a, then decrements $a by one. |


Here's a simple example script: 


```php
echo "<h3>Postincrement</h3>";
$a = 5;
echo "Should be 5: " . $a++ . "<br />\n";
echo "Should be 6: " . $a . "<br />\n";

echo "<h3>Preincrement</h3>";
$a = 5;
echo "Should be 6: " . ++$a . "<br />\n";
echo "Should be 6: " . $a . "<br />\n";

echo "<h3>Postdecrement</h3>";
$a = 5;
echo "Should be 5: " . $a-- . "<br />\n";
echo "Should be 4: " . $a . "<br />\n";

echo "<h3>Predecrement</h3>";
$a = 5;
echo "Should be 4: " . --$a . "<br />\n";
echo "Should be 4: " . $a . "<br />\n";
```


PHP follows Perl's convention when dealing with arithmetic operationson character variables and not C's. For example, in PHP and Perl `$a = 'Z'; $a++;` turns `$a` into `'AA'`, while in C `a = 'Z'; a++;` turns `a` into `'['`(ASCII value of 'Z' is 90, ASCII value of '[' is 91). Note that character variables can be incremented but not decremented andeven so only plain ASCII alphabets and digits (a-z, A-Z and 0-9) are supported.Incrementing/decrementing other character variables has no effect, theoriginal string is unchanged. 


Example #1 Arithmetic Operations on Character Variables


```php
echo '== Alphabets ==' . PHP_EOL;
$s = 'W';
for ($n=0; $n<6; $n++) {
    echo ++$s . PHP_EOL;
}
// Digit characters behave differently
echo '== Digits ==' . PHP_EOL;
$d = 'A8';
for ($n=0; $n<6; $n++) {
    echo ++$d . PHP_EOL;
}
$d = 'A08';
for ($n=0; $n<6; $n++) {
    echo ++$d . PHP_EOL;
}
```


The above example will output:


== Characters ==
X
Y
Z
AA
AB
AC
== Digits ==
A9
B0
B1
B2
B3
B4
A09
A10
A11
A12
A13
A14

Incrementing or decrementing booleans has no effect. 


### ===🗝 • Logical Operators

Logical Operators


    |  Example  | Name |                     Result                     |
    |-----------|------|------------------------------------------------|
    | $a and $b | And  | true if both $a and $b are true.               |
    | $a or $b  | Or   | true if either $a or $b is true.               |
    | $a xor $b | Xor  | true if either $a or $b is true, but not both. |
    | ! $a      | Not  | true if $a is not true.                        |
    | $a && $b  | And  | true if both $a and $b are true.               |
    | $a || $b  | Or   | true if either $a or $b is true.               |

The reason for the two different variations of "and" and "or"operators is that they operate at different precedences. (See Operator Precedence.) 


Example #1 Logical operators illustrated


```php
// --------------------
// foo() will never get called as those operators are short-circuit

$a = (false && foo());
$b = (true  || foo());
$c = (false and foo());
$d = (true  or  foo());

// --------------------
// "||" has a greater precedence than "or"

// The result of the expression (false || true) is assigned to $e
// Acts like: ($e = (false || true))
$e = false || true;

// The constant false is assigned to $f before the "or" operation occurs
// Acts like: (($f = false) or true)
$f = false or true;

var_dump($e, $f);

// --------------------
// "&&" has a greater precedence than "and"

// The result of the expression (true && false) is assigned to $g
// Acts like: ($g = (true && false))
$g = true && false;

// The constant true is assigned to $h before the "and" operation occurs
// Acts like: (($h = true) and false)
$h = true and false;

var_dump($g, $h);
``` 


The above example will output something similar to:

    bool(true)
    bool(false)
    bool(false)
    bool(true)


### ===🗝 • String Operators


There are two string operators. The first is theconcatenation operator ('.'), which returns the concatenation of itsright and left arguments. The second is the concatenating assignmentoperator ('.='), which appends the argument on the right side tothe argument on the left side. Please read AssignmentOperators for more information. 


```php
$a = "Hello ";
$b = $a . "World!"; // now $b contains "Hello World!"

$a = "Hello ";
$a .= "World!";     // now $a contains "Hello World!"
```


See Also 

• String type
• String functions


### ===🗝 • Array Operators

Array Operators


  |  Example  |     Name     |                      Result                      |
  |-----------|--------------|--------------------------------------------------|
  | $a + $b   | Union        | Union of $a and $b.                              |
  | $a == $b  | Equality     | true if $a and $b have the same key/value pairs. |
  | $a === $b | Identity     | true if $a and $b have the same key/value/order/types. 
  | $a != $b  | Inequality   | true if $a is not equal to $b.                   |
  | $a <> $b  | Inequality   | true if $a is not equal to $b.                   |
  | $a !== $b | Non-identity | true if $a is not identical to $b.               |

The + operator returns the right-hand array appendedto the left-hand array; for keys that exist in both arrays, the elementsfrom the left-hand array will be used, and the matching elements from theright-hand array will be ignored. 


```php
$a = array("a" => "apple", "b" => "banana");
$b = array("a" => "pear", "b" => "strawberry", "c" => "cherry");

$c = $a + $b; // Union of $a and $b
echo "Union of \$a and \$b: \n";
var_dump($c);

$c = $b + $a; // Union of $b and $a
echo "Union of \$b and \$a: \n";
var_dump($c);

$a += $b; // Union of $a += $b is $a and $b
echo "Union of \$a += \$b: \n";
var_dump($a);
```
When executed, this script will print the following: 

Union of $a and $b:
array(3) {
  ["a"]=>
  string(5) "apple"
  ["b"]=>
  string(6) "banana"
  ["c"]=>
  string(6) "cherry"
}
Union of $b and $a:
array(3) {
  ["a"]=>
  string(4) "pear"
  ["b"]=>
  string(10) "strawberry"
  ["c"]=>
  string(6) "cherry"
}
Union of $a += $b:
array(3) {
  ["a"]=>
  string(5) "apple"
  ["b"]=>
  string(6) "banana"
  ["c"]=>
  string(6) "cherry"
}


Elements of arrays are equal for the comparison if they have thesame key and value. 


Example #1 Comparing arrays


```php
$a = array("apple", "banana");
$b = array(1 => "banana", "0" => "apple");

var_dump($a == $b); // bool(true)
var_dump($a === $b); // bool(false)
```

See Also 

• Array type
• Array functions

### ===🗝 • Type Operators

`instanceof` is used to determine whether a PHP variableis an instantiated object of a certain class: 


Example #1 Using `instanceof` with classes


```php
class MyClass
{
}

class NotMyClass
{
}
$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof NotMyClass);
``` 


The above example will output:


    bool(true)
    bool(false)


instanceof can also be used to determine whether a variableis an instantiated object of a class that inherits from a parent class: 


Example #2 Using instanceof with inherited classes


```php
class ParentClass
{
}

class MyClass extends ParentClass
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof ParentClass);
``` 


The above example will output:


bool(true)
bool(true)


To check if an object is not an instanceof a class, the logical notoperator can be used. 


Example #3 Using instanceof to check if object is not aninstanceof a class


```php
class MyClass
{
}

$a = new MyClass;
var_dump(!($a instanceof stdClass));
``` 


The above example will output:


bool(true)


Lastly, instanceof can also be used to determine whethera variable is an instantiated object of a class that implements an interface: 


Example #4 Using instanceof with interfaces


```php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof MyInterface);
``` 


The above example will output:


bool(true)
bool(true)


Although instanceof is usually used with a literal classname,it can also be used with another object or a string variable: 


Example #5 Using instanceof with other variables


```php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;
$b = new MyClass;
$c = 'MyClass';
$d = 'NotMyClass';

var_dump($a instanceof $b); // $b is an object of class MyClass
var_dump($a instanceof $c); // $c is a string 'MyClass'
var_dump($a instanceof $d); // $d is a string 'NotMyClass'
``` 


The above example will output:


bool(true)
bool(true)
bool(false)


instanceof does not throw any error if the variable being tested is notan object, it simply returns false. Constants, however, were not allowedprior to PHP 7.3.0. 


Example #6 Using instanceof to test other variables


```php
$a = 1;
$b = NULL;
$c = imagecreate(5, 5);
var_dump($a instanceof stdClass); // $a is an integer
var_dump($b instanceof stdClass); // $b is NULL
var_dump($c instanceof stdClass); // $c is a resource
var_dump(FALSE instanceof stdClass);
``` 


The above example will output:


bool(false)
bool(false)
bool(false)
PHP Fatal error:  instanceof expects an object instance, constant given


As of PHP 7.3.0, constants are allowed on the left-hand-side of the instanceof operator. 


Example #7 Using instanceof to test constants


```php
var_dump(FALSE instanceof stdClass);
``` 


Output of the above example in PHP 7.3:


bool(false)


As of PHP 8.0.0, instanceof can now be used with arbitrary expressions.The expression must be wrapped in parentheses and produce a string. 


Example #8 Using instanceof with an arbitrary expression


```php

class ClassA extends \stdClass {}
class ClassB extends \stdClass {}
class ClassC extends ClassB {}
class ClassD extends ClassA {}

function getSomeClass(): string
{
    return ClassA::class;
}

var_dump(new ClassA instanceof ('std' . 'Class'));
var_dump(new ClassB instanceof ('Class' . 'B'));
var_dump(new ClassC instanceof ('Class' . 'A'));
var_dump(new ClassD instanceof (getSomeClass()));
``` 


Output of the above example in PHP 8:


    bool(true)
    bool(true)
    bool(false)
    bool(true)

The instanceof operator has a functional variantwith the is_a() function. 


See Also 

• get_class()
• is_a()


## ==⚡ • Control Structures


Any PHP script is built out of a series of statements. A statementcan be an assignment, a function call, a loop, a conditionalstatement or even a statement that does nothing (an emptystatement). Statements usually end with a semicolon. In addition,statements can be grouped into a statement-group by encapsulating agroup of statements with curly braces. A statement-group is astatement by itself as well. The various statement types aredescribed in this chapter. 


See Also 

The following are also considered language constructs even though they arereferenced under functions in the manual. 

• list()
• array()
• echo
• eval()
• print


### ===🗝 • if-else


The if construct is one of the most importantfeatures of many languages, PHP included. It allows forconditional execution of code fragments. PHP features an if structure that is similar to that of C: 


    if (expr)
      statement


As described in the section aboutexpressions, expression is evaluated to itsBoolean value. If expression evaluates to true,PHP will execute statement, and if it evaluatesto false - it'll ignore it. More information about what values evaluateto false can be found in the 'Converting to boolean'section. 

The following example would display a is biggerthan b if $a is biggerthan $b: 


```php
if ($a > $b)
  echo "a is bigger than b";
```


Often you'd want to have more than one statement to be executedconditionally. Of course, there's no need to wrap each statementwith an if clause. Instead, you can groupseveral statements into a statement group. For example, this codewould display a is bigger than bif $a is bigger than $b, and would then assign the value of $a into $b: 


```php
if ($a > $b) {
  echo "a is bigger than b";
  $b = $a;
}
```

If statements can be nested infinitely within other if statements, which provides you with completeflexibility for conditional execution of the various parts of yourprogram. 


#### • else

Often you'd want to execute a statement if a certain condition ismet, and a different statement if the condition is not met. This is what `else` is for. elseextends an if statement to execute a statementin case the expression in the if statementevaluates to false. For example, the followingcode would display a is greater thanb if $a is greater than $b, and a is NOT greaterthan b otherwise: 


```php
if ($a > $b) {
  echo "a is greater than b";
} else {
  echo "a is NOT greater than b";
}
``` 

The else statement is only executed if the if expression evaluated to false, and if there were any elseif expressions - only if they evaluated to false as well (see elseif). 


Note: Dangling else


In case of nested if-else statements,an else is always associated with the nearest if. 


```php
$a = false;
$b = true;
if ($a)
    if ($b)
        echo "b";
else
    echo "c";
``` 

Despite the indentation (which does not matter for PHP), the elseis associated with the if ($b), so the example does not produceany output. While relying on this behavior is valid, it is recommended to avoidit by using curly braces to resolve potential ambiguities. 


#### • elseif/else if

elseif, as its name suggests, is a combinationof if and else. Like else, it extends an ifstatement to execute a different statement in case the original if expression evaluates to false. However, unlike else, it will execute that alternativeexpression only if the elseif conditionalexpression evaluates to true. For example, thefollowing code would display a is bigger thanb, a equal to bor a is smaller than b: 


```php
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
```


There may be several elseifs within the same if statement. The first elseif expression (if any) that evaluates to true would be executed. In PHP, you can alsowrite 'else if' (in two words) and the behavior would be identicalto the one of 'elseif' (in a single word). The syntactic meaningis slightly different (if you're familiar with C, this is the samebehavior) but the bottom line is that both would result in exactlythe same behavior. 

The elseif statement is only executed if thepreceding if expression and any preceding elseif expressions evaluated to false, and the current elseif expression evaluated to true. 


Note: Note that elseif and else ifwill only be considered exactly the same when using curly bracketsas in the above example. When using a colon to define your if/elseif conditions, you mustnot separate else if into two words, or PHP willfail with a parse error.  


```php
/* Incorrect Method: */
if ($a > $b):
    echo $a." is greater than ".$b;
else if ($a == $b): // Will not compile.
    echo "The above line causes a parse error.";
endif;


/* Correct Method: */
if ($a > $b):
    echo $a." is greater than ".$b;
elseif ($a == $b): // Note the combination of the words.
    echo $a." equals ".$b;
else:
    echo $a." is neither greater than or equal to ".$b;
endif;
```

### ===🗝 • Alternative syntax for control structures


PHP offers an alternative syntax for some of its controlstructures; namely, if, while, for, foreach, and switch. In each case, the basic form of the alternate syntax is to changethe opening brace to a colon (:) and the closing brace to endif;, endwhile;, endfor;, endforeach;, or endswitch;, respectively. 


    <?php if ($a == 5): ?>
    A is equal to 5
    <?php endif; ?>  


In the above example, the HTML block "A is equal to 5" is nested within an if statement written in the alternative syntax. TheHTML block would be displayed only if $a is equal to 5. 

The alternative syntax applies to else and elseif as well. The following is an if structure with elseif and else in the alternative format: 


```php
if ($a == 5):
    echo "a equals 5";
    echo "...";
elseif ($a == 6):
    echo "a equals 6";
    echo "!!!";
else:
    echo "a is neither 5 nor 6";
endif;
```


Note: 

Mixing syntaxes in the same control block is not supported. 


Warning 
Any output (including whitespace) between a switch statement and the first case will result in a syntaxerror. For example, this is invalid: 


    <?php switch ($foo): ?>
        <?php case 1: ?>
        ...
    <?php endswitch ?>  


Whereas this is valid, as the trailing newline after the switch statement is considered part of the closing ?> and hence nothing is output between the switch and case: 


    <?php switch ($foo): ?>
    <?php case 1: ?>
        ...
    <?php endswitch ?>  

See also while, for, and if for further examples. 


### ===🗝 • while

while loops are the simplest type of loop inPHP. They behave just like their C counterparts. The basic formof a while statement is: 


while (expr)
    statement


The meaning of a while statement is simple. Ittells PHP to execute the nested statement(s) repeatedly, as longas the while expression evaluates to true. The value of the expression is checkedeach time at the beginning of the loop, so even if this valuechanges during the execution of the nested statement(s), executionwill not stop until the end of the iteration (each time PHP runsthe statements in the loop is one iteration). If the while expression evaluates to false from the very beginning, the nestedstatement(s) won't even be run once. 

Like with the if statement, you can groupmultiple statements within the same while loopby surrounding a group of statements with curly braces, or byusing the alternate syntax: 


while (expr):
    statement
    ...
endwhile;


The following examples are identical, and both print the numbers1 through 10: 


```php
/* example 1 */

$i = 1;
while ($i <= 10) {
    echo $i++;  /* the printed value would be
                   $i before the increment
                   (post-increment) */
}

/* example 2 */

$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile;
```


### ===🗝 • do-while

do-while loops are very similar to while loops, except the truth expression ischecked at the end of each iteration instead of in the beginning.The main difference from regular while loops isthat the first iteration of a do-while loop isguaranteed to run (the truth expression is only checked at the endof the iteration), whereas it may not necessarily run with aregular while loop (the truth expression ischecked at the beginning of each iteration, if it evaluates to false right from the beginning, the loopexecution would end immediately). 

There is just one syntax for do-while loops: 


```php
$i = 0;
do {
    echo $i;
} while ($i > 0);
```


The above loop would run one time exactly, since after the firstiteration, when truth expression is checked, it evaluates to false ($i is not bigger than 0) and the loopexecution ends. 

Advanced C users may be familiar with a different usage of the do-while loop, to allow stopping execution inthe middle of code blocks, by encapsulating them with do-while (0), and using the breakstatement. The following code fragment demonstrates this: 


```php
do {
    if ($i < 5) {
        echo "i is not big enough";
        break;
    }
    $i *= $factor;
    if ($i < $minimum_limit) {
        break;
    }
   echo "i is ok";

    /* process i */

} while (0);
```


It is possible to use the gotooperator instead of this hack. 


### ===🗝 • for

for loops are the most complex loops in PHP.They behave like their C counterparts. The syntax of a for loop is: 


for (expr1; expr2; expr3)
    statement


The first expression (expr1) is evaluated (executed) once unconditionally at the beginning of the loop. 

In the beginning of each iteration, expr2 is evaluated. If it evaluates to true, the loop continues and the nestedstatement(s) are executed. If it evaluates to false, the execution of the loop ends. 

At the end of each iteration, expr3 is evaluated (executed). 

Each of the expressions can be empty or contain multipleexpressions separated by commas. In expr2, allexpressions separated by a comma are evaluated but the result is takenfrom the last part. expr2 being empty means the loop shouldbe run indefinitely (PHP implicitly considers it as true, like C). This may not be as useless asyou might think, since often you'd want to end the loop using aconditional breakstatement instead of using the for truthexpression. 

Consider the following examples. All of them display the numbers1 through 10: 

```php
/* example 1 */

for ($i = 1; $i <= 10; $i++) {
    echo $i;
}

/* example 2 */

for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo $i;
}

/* example 3 */

$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo $i;
    $i++;
}

/* example 4 */

for ($i = 1, $j = 0; $i <= 10; $j += $i, print $i, $i++);
``` 


Of course, the first example appears to be the nicest one (orperhaps the fourth), but you may find that being able to use emptyexpressions in for loops comes in handy in manyoccasions. 

PHP also supports the alternate "colon syntax" for for loops. 


for (expr1; expr2; expr3):
    statement
    ...
endfor;


It's a common thing to many users to iterate through arrays like in theexample below. 


```php
/*
 * This is an array with some data we want to modify
 * when running through the for loop.
 */
$people = array(
    array('name' => 'Kalle', 'salt' => 856412),
    array('name' => 'Pierre', 'salt' => 215863)
);

for($i = 0; $i < count($people); ++$i) {
    $people[$i]['salt'] = mt_rand(000000, 999999);
}
``` 


The above code can be slow, because the array size is fetched onevery iteration. Since the size never changes, the loop be easilyoptimized by using an intermediate variable to store the size insteadof repeatedly calling count(): 


```php
$people = array(
    array('name' => 'Kalle', 'salt' => 856412),
    array('name' => 'Pierre', 'salt' => 215863)
);

for($i = 0, $size = count($people); $i < $size; ++$i) {
    $people[$i]['salt'] = mt_rand(000000, 999999);
}
```

### ===🗝 • foreach


The foreach construct provides an easy way toiterate over arrays. foreach works only on arraysand objects, and will issue an error when you try to use it on a variablewith a different data type or an uninitialized variable. There are twosyntaxes: 


foreach (iterable_expression as $value)
    statement
foreach (iterable_expression as $key => $value)
    statement


The first form traverses the iterable given by iterable_expression. On each iteration, the value ofthe current element is assigned to $value. 

The second form will additionally assign the current element's key tothe $key variable on each iteration. 

Note that foreach does not modify the internal arraypointer, which is used by functions such as current()and key(). 

It is possible to customize object iteration. 

In order to be able to directly modify array elements within the loop precede $value with &. In that case the value will be assigned by reference. 

```php
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr is now array(2, 4, 6, 8)
unset($value); // break the reference with the last element
```


⚠Warning 
Reference of a `$value` and the last array element remain even after the foreach loop. It is recommendedto destroy it by unset(). Otherwise you will experience the following behavior: 

```php
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr is now array(2, 4, 6, 8)

// without an unset($value), $value is still a reference to the last item: $arr[3]

foreach ($arr as $key => $value) {
    // $arr[3] will be updated with each value from $arr...
    echo "{$key} => {$value} ";
    print_r($arr);
}
// ...until ultimately the second-to-last value is copied onto the last value

// output:
// 0 => 2 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 2 )
// 1 => 4 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 4 )
// 2 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
// 3 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
```

It is possible to iterate a constant array's value by reference: 

```php
foreach (array(1, 2, 3, 4) as &$value) {
    $value = $value * 2;
}
```

Note: 

foreach does not support the ability tosuppress error messages using @. 


Some more examples to demonstrate usage: 

```php
/* foreach example 1: value only */

$a = array(1, 2, 3, 17);

foreach ($a as $v) {
    echo "Current value of \$a: $v.\n";
}

/* foreach example 2: value (with its manual access notation printed for illustration) */

$a = array(1, 2, 3, 17);

$i = 0; /* for illustrative purposes only */

foreach ($a as $v) {
    echo "\$a[$i] => $v.\n";
    $i++;
}

/* foreach example 3: key and value */

$a = array(
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
);

foreach ($a as $k => $v) {
    echo "\$a[$k] => $v.\n";
}

/* foreach example 4: multi-dimensional arrays */
$a = array();
$a[0][0] = "a";
$a[0][1] = "b";
$a[1][0] = "y";
$a[1][1] = "z";

foreach ($a as $v1) {
    foreach ($v1 as $v2) {
        echo "$v2\n";
    }
}

/* foreach example 5: dynamic arrays */

foreach (array(1, 2, 3, 4, 5) as $v) {
    echo "$v\n";
}
```


#### Unpacking nested arrays with list() 

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

It is possible to iterate over an array of arrays and unpack thenested array into loop variables by providing a list()as the value. 

For example: 

```php
$array = [
    [1, 2],
    [3, 4],
];

foreach ($array as list($a, $b)) {
    // $a contains the first element of the nested array,
    // and $b contains the second element.
    echo "A: $a; B: $b\n";
}
```

The above example will output:


A: 1; B: 2
A: 3; B: 4


You can provide fewer elements in the list() than thereare in the nested array, in which case the leftover array values will beignored: 

```php
$array = [
    [1, 2],
    [3, 4],
];

foreach ($array as list($a)) {
    // Note that there is no $b here.
    echo "$a\n";
}
```

The above example will output:


1
3


A notice will be generated if there aren't enough array elements to fillthe list(): 

```php
$array = [
    [1, 2],
    [3, 4],
];

foreach ($array as list($a, $b, $c)) {
    echo "A: $a; B: $b; C: $c\n";
}
```

The above example will output:


Notice: Undefined offset: 2 in example.php on line 7
A: 1; B: 2; C: 

Notice: Undefined offset: 2 in example.php on line 7
A: 3; B: 4; C: 


### ===🗝 • break

break ends execution of the current for, foreach, while, do-while or switch structure. 

break accepts an optional numeric argumentwhich tells it how many nested enclosing structures are to bebroken out of. The default value is 1, onlythe immediate enclosing structure is broken out of. 


```php
$arr = array('one', 'two', 'three', 'four', 'stop', 'five');
foreach ($arr as $val) {
    if ($val == 'stop') {
        break;    /* You could also write 'break 1;' here. */
    }
    echo "$val<br />\n";
}

/* Using the optional argument. */

$i = 0;
while (++$i) {
    switch ($i) {
        case 5:
            echo "At 5<br />\n";
            break 1;  /* Exit only the switch. */
        case 10:
            echo "At 10; quitting<br />\n";
            break 2;  /* Exit the switch and the while. */
        default:
            break;
    }
}
```

### ===🗝 • continue

continue is used within looping structures toskip the rest of the current loop iteration and continue executionat the condition evaluation and then the beginning of the next iteration. 


Note: In PHP the switch statement isconsidered a looping structure for the purposes of continue. continue behaves like break (when no arguments are passed) but willraise a warning as this is likely to be a mistake. If a switch is inside a loop, continue 2 will continue with the next iterationof the outer loop.  

continue accepts an optional numeric argumentwhich tells it how many levels of enclosing loops it should skipto the end of. The default value is 1, thus skipping to the end of the current loop. 


```php
foreach ($arr as $key => $value) {
    if (!($key % 2)) { // skip even members
        continue;
    }
    do_something_odd($value);
}

$i = 0;
while ($i++ < 5) {
    echo "Outer<br />\n";
    while (1) {
        echo "Middle<br />\n";
        while (1) {
            echo "Inner<br />\n";
            continue 3;
        }
        echo "This never gets output.<br />\n";
    }
    echo "Neither does this.<br />\n";
}
```


Omitting the semicolon after continue can lead toconfusion. Here's an example of what you shouldn't do. 


```php
for ($i = 0; $i < 5; ++$i) {
    if ($i == 2)
        continue
    print "$i\n";
}
```

One can expect the result to be: 


0
1
3
4


Changelog for continue


Version / Description
7.3.0 continue within a switch that is attempting to act like a break statement for the switch will trigger an E_WARNING.  


### ===🗝 • switch

The switch statement is similar to a series of IF statements on the same expression. In many occasions, you maywant to compare the same variable (or expression) with manydifferent values, and execute a different piece of code dependingon which value it equals to. This is exactly what the switch statement is for. 

Note: Note that unlike some other languages, the continue statement applies to switch and acts similar to break. If you have a switch inside a loop and wish to continue to the next iteration ofthe outer loop, use continue 2.  


Note: 

Note that switch/case does loose comparison. 


The following two examples are two different ways to write thesame thing, one using a series of if and elseif statements, and the other using the switch statement: 


Example #1 switch structure

```php
if ($i == 0) {
    echo "i equals 0";
} elseif ($i == 1) {
    echo "i equals 1";
} elseif ($i == 2) {
    echo "i equals 2";
}

switch ($i) {
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
}
``` 


Example #2 switch structure allows usage of strings

```php
switch ($i) {
    case "apple":
        echo "i is apple";
        break;
    case "bar":
        echo "i is bar";
        break;
    case "cake":
        echo "i is cake";
        break;
}
``` 


It is important to understand how the switch statement is executed in order to avoid mistakes. The switch statement executes line by line(actually, statement by statement). In the beginning, no code isexecuted. Only when a case statement is foundwhose expression evaluates to a value that matches the value of the switch expression does PHP begin to execute thestatements. PHP continues to execute the statements until the endof the switch block, or the first time it seesa break statement. If you don't write a break statement at the end of a case'sstatement list, PHP will go on executing the statements of thefollowing case. For example: 


```php
switch ($i) {
    case 0:
        echo "i equals 0";
    case 1:
        echo "i equals 1";
    case 2:
        echo "i equals 2";
}
``` 


Here, if $i is equal to 0, PHP would execute all of the echostatements! If $i is equal to 1, PHP would execute the last twoecho statements. You would get the expected behavior ('i equals 2'would be displayed) only if $i is equal to 2. Thus,it is important not to forget break statements(even though you may want to avoid supplying them on purpose undercertain circumstances). 

In a switch statement, the condition isevaluated only once and the result is compared to each case statement. In an elseifstatement, the condition is evaluated again. If your condition ismore complicated than a simple compare and/or is in a tight loop,a switch may be faster. 

The statement list for a case can also be empty, which simplypasses control into the statement list for the next case. 


```php
switch ($i) {
    case 0:
    case 1:
    case 2:
        echo "i is less than 3 but not negative";
        break;
    case 3:
        echo "i is 3";
}
``` 


A special case is the default case. This case matchesanything that wasn't matched by the other cases. For example: 


```php
switch ($i) {
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
    default:
       echo "i is not equal to 0, 1 or 2";
}
``` 


Note: Multiple default cases will raise a E_COMPILE_ERROR error.  


The alternative syntax for control structures is supported with switches. For more information, see Alternative syntax for control structures. 


```php
switch ($i):
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
    default:
        echo "i is not equal to 0, 1 or 2";
endswitch;
``` 


It's possible to use a semicolon instead of a colon after a case like: 


```php
switch($beer)
{
    case 'tuborg';
    case 'carlsberg';
    case 'heineken';
        echo 'Good choice';
        break;
    default;
        echo 'Please make a new selection...';
        break;
}
```


### ===🗝 • match

The match expression branches evaluation based on anidentity check of a value.Similarly to a switch statement, a match expression has a subject expression that iscompared against multiple alternatives. Unlike switch,it will evaluate to a value much like ternary expressions.Unlike switch, the comparison is an identity check(===) rather than a weak equality check (==).Match expressions are available as of PHP 8.0.0. 

Example #1 Structure of a match expression

```php
$return_value = match (subject_expression) {
    single_conditional_expression => return_expression,
    conditional_expression1, conditional_expression2 => return_expression,
};
```


Example #2 Basic match usage

```php
$food = 'cake';

$return_value = match ($food) {
    'apple' => 'This food is an apple',
    'bar' => 'This food is a bar',
    'cake' => 'This food is a cake',
};

var_dump($return_value);
```


The above example will output:


string(19) "This food is a cake"


Note: The result of a match expression does not need to be used.  


Note: A match expression must beterminated by a semicolon ;.  

The match expression is similar to a switch statement but has some key differences: 
◦ A match arm compares values strictly (===) insteadof loosely as the switch statement does.  
◦ A match expression returns a value.  
◦ match arms do not fall-through to later cases the way switch statements do.  
◦ A match expression must be exhaustive.  


As switch statements, PHP 8 match expressions are executed `match` arm by match arm. In the beginning, no code is executed. The conditional expressions are only evaluated if all previous conditionalexpressions failed to match the subject expression.Only the return expression corresponding to the matching conditional expression will be evaluated.For example: 


```php
$result = match ($x) {
    foo() => ...,
    $this->bar() => ..., // $this->bar() isn't called if foo() === $x
    $this->baz => beep(), // beep() isn't called unless $x === $this->baz
    // etc.
};
```


match expression arms may contain multiple expressionsseparated by a comma. That is a logical OR, and is a short-hand for multiplematch arms with the same right-hand side. 


```php
$result = match ($x) {
    // This match arm:
    $a, $b, $c => 5,
    // Is equivalent to these three match arms:
    $a => 5,
    $b => 5,
    $c => 5,
};
```


A special case is the default pattern.This pattern matches anything that wasn't previously matched.For example: 


```php
$expressionResult = match ($condition) {
    1, 2 => foo(),
    3, 4 => bar(),
    default => baz(),
};
```


Note: Multiple default patterns will raise a E_FATAL_ERROR error.  


A match expression must be exhaustive. If thesubject expression is not handled by any match arm an UnhandledMatchError is thrown. 


Example #3 Example of an unhandled match expression

```php
$condition = 5;

try {
    match ($condition) {
        1, 2 => foo(),
        3, 4 => bar(),
    };
} catch (\UnhandledMatchError $e) {
    var_dump($e);
}
```


The above example will output:


object(UnhandledMatchError)#1 (7) {
  ["message":protected]=>
  string(33) "Unhandled match value of type int"
  ["string":"Error":private]=>
  string(0) ""
  ["code":protected]=>
  int(0)
  ["file":protected]=>
  string(9) "/in/ICgGK"
  ["line":protected]=>
  int(6)
  ["trace":"Error":private]=>
  array(0) {
  }
  ["previous":"Error":private]=>
  NULL
}


#### Using match expressions to handle non identity checks 

It is possible to use a match expression to handlenon-identity conditional cases by using true as the subjectexpression. 


Example #4 Using a generalized match expressions to branch on integer ranges

```php

$age = 23;

$result = match (true) {
    $age >= 65 => 'senior',
    $age >= 25 => 'adult',
    $age >= 18 => 'young adult',
    default => 'kid',
};

var_dump($result);
```


The above example will output:


string(11) "young adult"


Example #5 Using a generalized match expressions to branch on string content

```php

$text = 'Bienvenue chez nous';

$result = match (true) {
    str_contains($text, 'Welcome') || str_contains($text, 'Hello') => 'en',
    str_contains($text, 'Bienvenue') || str_contains($text, 'Bonjour') => 'fr',
    // ...
};

var_dump($result);
```


The above example will output:


string(2) "fr"


### ===🗝 • declare

(PHP 4, PHP 5, PHP 7, PHP 8)

The declare construct is used to set execution directives for a block of code.The syntax of declare is similar tothe syntax of other flow control constructs: 


declare (directive)
    statement


The directive section allows the behavior of the declare block tobe set. Currently only three directives are recognized: 

the `ticks` directive (See below for moreinformation on the ticks directive), 

the `encoding` directive (See below for moreinformation on the encoding directive) and 

the `strict_types` directive (See for moreinformation the strict typing section on the type declarations page) 

As directives are handled as the file is being compiled, only literals maybe given as directive values. Variables and constants cannot be used. To illustrate: 


```php
// This is valid:
declare(ticks=1);

// This is invalid:
const TICK_VALUE = 1;
declare(ticks=TICK_VALUE);
``` 


The statement part of the declare block will be executed - how it is executed and what side effects occur during executionmay depend on the directive set in the directive block. 

The declare construct can also be used in the globalscope, affecting all code following it (however if the file with declare was included then it does not affect the parentfile). 


```php
// these are the same:

// you can use this:
declare(ticks=1) {
    // entire script here
}

// or you can use this:
declare(ticks=1);
// entire script here
``` 


Ticks 

A tick is an event that occurs for every N low-level tickable statements executed by the parser within the declare block.The value for N is specified using `ticks=N` within the declare block's directive section. 

Not all statements are tickable. Typically, condition expressions and argument expressions are not tickable. 

The event(s) that occur on each tick are specified using the register_tick_function(). See the examplebelow for more details. Note that more than one event can occurfor each tick. 


Example #1 Tick usage example

```php

declare(ticks=1);

// A function called on each tick event
function tick_handler()
{
    echo "tick_handler() called\n";
}

register_tick_function('tick_handler'); // causes a tick event

$a = 1; // causes a tick event

if ($a > 0) {
    $a += 2; // causes a tick event
    print($a); // causes a tick event
}

``` 


See also register_tick_function() and unregister_tick_function(). 


Encoding 

A script's encoding can be specified per-script using the encoding directive. 


Example #2 Declaring an encoding for the script.

```php
declare(encoding='ISO-8859-1');
// code here
``` 


Caution 
When combined with namespaces, the only legal syntax for declareis `declare(encoding='...');` where ... is the encoding value. `declare(encoding='...') {}` will result in a parse error when combined with namespaces. 

See also zend.script_encoding. 


### ===🗝 • return

(PHP 4, PHP 5, PHP 7, PHP 8)

return returns program control to the calling module.Execution resumes at the expression following the called module's invocation. 

If called from within a function, the returnstatement immediately ends execution of the current function, andreturns its argument as the value of the functioncall. return also ends the execution ofan eval() statement or script file. 

If called from the global scope, then execution of the currentscript file is ended. If the current script file was included or required,then control is passed back to the calling file. Furthermore, ifthe current script file was included, thenthe value given to return will be returned asthe value of the include call. If return is called from within the main scriptfile, then script execution ends. If the current script file wasnamed by the auto_prepend_file or auto_append_fileconfiguration options in php.ini,then that script file's execution is ended. 

For more information, see Returning values. 


Note: Note that since return is a languageconstruct and not a function, the parentheses surrounding itsargument are not required and their use is discouraged.  


Note: If no parameter is supplied, then the parentheses must be omittedand null will bereturned. Calling return with parentheses butwith no arguments will result in a parse error.  


As of PHP 7.1.0, return statements without an argument trigger E_COMPILE_ERROR,unless the return type is void, in which case return statementswith an argument trigger that error. 


### ===🗝 • require

(PHP 4, PHP 5, PHP 7, PHP 8)

`require` is identical to `include` except upon failure it will also produce a fatal E_COMPILE_ERROR level error. In other words, it will halt the script whereas include only emits a warning(E_WARNING) which allows the script to continue. 

See the include documentation for how this works. 


### ===🗝 • include

(PHP 4, PHP 5, PHP 7, PHP 8)

The include expression includes and evaluatesthe specified file. 

The documentation below also applies to require. 

Files are included based on the file path given or, if none is given, the include_path specified. If the fileisn't found in the include_path, include will finally check in the calling script's owndirectory and the current working directory before failing. The include construct will emit an E_WARNING ifit cannot find a file; this is different behavior from require, which will emit an E_ERROR. 

Note that both include and requireraise additional E_WARNINGs, if the file cannot beaccessed, before raising the final E_WARNING or E_ERROR, respectively. 

If a path is defined — whether absolute (starting with a drive letteror \ on Windows, or / on Unix/Linuxsystems) or relative to the current directory (starting with . or ..) — the include_path will be ignoredaltogether. For example, if a filename begins with ../,the parser will look in the parent directory to find the requested file. 

For more information on how PHP handles including files and the include path,see the documentation for include_path. 

When a file is included, the code it contains inherits the variable scope of the line on which the include occurs. Any variables available at that linein the calling file will be available within the called file, from thatpoint forward. However, all functions and classes defined in the included file have the `global` scope. 


Example #1 Basic include example


vars.php

```php
$color = 'green';
$fruit = 'apple';
```

test.php

```php
echo "A $color $fruit"; // A

include 'vars.php';

echo "A $color $fruit"; // A green apple
```


If the include occurs inside a function within the calling file,then all of the code contained in the called file will behave asthough it had been defined inside that function. So, it will followthe variable scope of that function.An exception to this rule are magic constants which areevaluated by the parser before the include occurs. 


Example #2 Including within functions

```php

function foo()
{
    global $color;

    include 'vars.php';

    echo "A $color $fruit";
}

/* vars.php is in the scope of foo() so     *
* $fruit is NOT available outside of this  *
* scope.  $color is because we declared it *
* as global.                               */

foo();                    // A green apple
echo "A $color $fruit";   // A green

```


When a file is included, parsing drops out of PHP mode andinto HTML mode at the beginning of the target file, and resumesagain at the end. For this reason, any code inside the targetfile which should be executed as PHP code must be enclosed within valid PHP startand end tags. 

If "URL include wrappers"are enabled in PHP,you can specify the file to be included using a URL (via HTTP orother supported wrapper - see Supported Protocols and Wrappers for a listof protocols) instead of a local pathname. If the target server interpretsthe target file as PHP code, variables may be passed to the includedfile using a URL request string as used with HTTP GET. This isnot strictly speaking the same thing as including the file and havingit inherit the parent file's variable scope; the script is actuallybeing run on the remote server and the result is then beingincluded into the local script. 


Example #3 include through HTTP

```php

/* This example assumes that www.example.com is configured to parse .php
* files and not .txt files. Also, 'Works' here means that the variables
* $foo and $bar are available within the included file. */

// Won't work; file.txt wasn't handled by www.example.com as PHP
include 'http://www.example.com/file.txt?foo=1&bar=2';

// Won't work; looks for a file named 'file.php?foo=1&bar=2' on the
// local filesystem.
include 'file.php?foo=1&bar=2';

// Works.
include 'http://www.example.com/file.php?foo=1&bar=2';
```


Warning 
Security warning 

Remote file may be processed at the remote server (depending on the file extension and the fact if the remote server runs PHP or not) but it stillhas to produce a valid PHP script because it will be processed at thelocal server. If the file from the remote server should be processedthere and outputted only, readfile() is much betterfunction to use. Otherwise, special care should be taken to secure theremote script to produce a valid and desired code. 

See also Remote files, fopen() and file() for relatedinformation. 

Handling Returns: include returns FALSE on failure and raises a warning. Successfulincludes, unless overridden by the included file, return 1. It is possible to execute a returnstatement inside an included file in order to terminate processing inthat file and return to the script which called it. Also, it's possibleto return values from included files. You can take the value of theinclude call as you would for a normal function. This is not, however,possible when including remote files unless the output of the remotefile has valid PHP startand end tags (as with any local file). You can declare theneeded variables within those tags and they will be introduced atwhichever point the file was included. 

Because include is a special language construct,parentheses are not needed around its argument. Take care when comparingreturn value. 


Example #4 Comparing return value of include

```php
// won't work, evaluated as include(('vars.php') == TRUE), i.e. include('1')
if (include('vars.php') == TRUE) {
    echo 'OK';
}

// works
if ((include 'vars.php') == TRUE) {
    echo 'OK';
}
```


Example #5 include and the return statement


return.php

```php
$var = 'PHP';

return $var;
```

noreturn.php

```php
$var = 'PHP';
```

testreturns.php

```php
$foo = include 'return.php';

echo $foo; // prints 'PHP'

$bar = include 'noreturn.php';

echo $bar; // prints 1
```


$bar is the value 1 because the includewas successful. Notice the difference between the above examples. The first uses return within the included file while the other does not.If the file can't be included, false is returned and E_WARNING is issued. 

If there are functions defined in the included file, they can be used in themain file independent if they are before return or after.If the file is included twice, PHP will raise a fatal error because thefunctions were already declared.It is recommended to use include_once instead ofchecking if the file was already included and conditionally return insidethe included file. 

Another way to "include" a PHP file into a variable is to capture theoutput by using the Output ControlFunctions with include. For example: 


Example #6 Using output buffering to include a PHP file into a string

```php
$string = get_include_contents('somefile.php');

function get_include_contents($filename) {
    if (is_file($filename)) {
        ob_start();
        include $filename;
        return ob_get_clean();
    }
    return false;
}

```


In order to automatically include files within scripts, see also the auto_prepend_file and auto_append_fileconfiguration options in php.ini. 


Note: Because this is a language construct and not a function, it cannot be called using variable functions. 

See also require, require_once, include_once, get_included_files(), readfile(), virtual(), and include_path. 


### ===🗝 • require_once

(PHP 4, PHP 5, PHP 7, PHP 8)

The require_once expression is identical to require except PHP will check if the file hasalready been included, and if so, not include (require) it again. 

See the include_once documentation for informationabout the `_once` behaviour, and how it differs from its non `_once` siblings. 


### ===🗝 • include_once

(PHP 4, PHP 5, PHP 7, PHP 8)

The include_once statement includes and evaluatesthe specified file during the execution of the script.This is a behavior similar to the include statement,with the only difference being that if the code from a file has alreadybeen included, it will not be included again, and include_once returns true. As the name suggests,the file will be included just once. 

include_once may be used in cases wherethe same file might be included and evaluated more than once during aparticular execution of a script, so in this case it may help avoidproblems such as function redefinitions, variable value reassignments, etc. 

See the include documentation for information abouthow this function works. 


### ===🗝 • goto

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

What's the worse thing that could happen if you use goto? 

The goto operator can be used to jump to another section in the program. The target point is specified by a case-sensitive label followed by a colon, and the instruction is given as goto followed by the desired target label. Thisis not a full unrestricted goto. The target label must be within the same file and context, meaning that you cannot jumpout of a function or method, nor can you jump into one. You alsocannot jump into any sort of loop or switch structure. You may jumpout of these, and a common use is to use a gotoin place of a multi-level break. 


Example #1 goto example


```php
goto a;
echo 'Foo';
 
a:
echo 'Bar';
```


The above example will output:


Bar


Example #2 goto loop example


```php
for($i=0,$j=50; $i<100; $i++) {
  while($j--) {
    if($j==17) goto end; 
  }  
}
echo "i = $i";
end:
echo 'j hit 17';
```


The above example will output:


j hit 17


Example #3 This will not work


```php
goto loop;
for($i=0,$j=50; $i<100; $i++) {
  while($j--) {
    loop:
  }
}
echo "$i = $i";
```


The above example will output:


Fatal error: 'goto' into loop or switch statement is disallowed in
script on line 2


## ==⚡ • Functions

### ===🗝 • User-defined functions


A function may be defined using syntax such as the following: 


Example #1 Pseudo code to demonstrate function uses

```php
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Example function.\n";
    return $retval;
}
```


Any valid PHP code may appear inside a function, even otherfunctions and class definitions. 

Function names follow the same rules as other labels in PHP. Avalid function name starts with a letter or underscore, followedby any number of letters, numbers, or underscores. As a regularexpression, it would be expressed thus: `^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$`. 

Tip
See also the Userland Naming Guide.

Functions need not be defined before they are referenced, except when a function is conditionally defined asshown in the two examples below. 

When a function is defined in a conditional manner such as the twoexamples shown. Its definition must be processed priorto being called. 


Example #2 Conditional functions

```php

$makefoo = true;

/* We can't call foo() from here 
   since it doesn't exist yet,
   but we can call bar() */

bar();

if ($makefoo) {
  function foo()
  {
    echo "I don't exist until program execution reaches me.\n";
  }
}

/* Now we can safely call foo()
   since $makefoo evaluated to true */

if ($makefoo) foo();

function bar() 
{
  echo "I exist immediately upon program start.\n";
}

```


Example #3 Functions within functions

```php
function foo() 
{
  function bar() 
  {
    echo "I don't exist until foo() is called.\n";
  }
}

/* We can't call bar() yet
   since it doesn't exist. */

foo();

/* Now we can call bar(),
   foo()'s processing has
   made it accessible. */

bar();

```


All functions and classes in PHP have the global scope - they can becalled outside a function even if they were defined inside and vice versa. 

PHP does not support function overloading, nor is it possible toundefine or redefine previously-declared functions. 


Note: Function names are case-insensitive for the ASCII characters A to Z, though it is usually good formto call functions as they appear in their declaration.  

Both variable number ofarguments and defaultarguments are supported in functions. See also the function references for `func_num_args()`, `func_get_arg()`, and `func_get_args()` for more information. 

It is possible to call recursive functions in PHP. 


Example #4 Recursive functions

```php
function recursion($a)
{
    if ($a < 20) {
        echo "$a\n";
        recursion($a + 1);
    }
}
```

Note: Recursive function/method calls with over 100-200 recursion levels cansmash the stack and cause a termination of the current script. Especially,infinite recursion is considered a programming error. 


### ===🗝 • Function arguments

Information may be passed to functions via the argument list,which is a comma-delimited list of expressions. The arguments are evaluated from left to right, before the function is actually called(eager evaluation). 

PHP supports passing arguments by value (the default), passing byreference, and default argument values. Variable-length argument lists and Named Arguments are also supported. 


Example #1 Passing arrays to functions


```php
function takes_array($input)
{
    echo "$input[0] + $input[1] = ", $input[0]+$input[1];
}
``` 


As of PHP 8.0.0, the list of function arguments may include a trailing comma, which will be ignored. That is particularly useful in cases where the list of arguments islong or contains long variable names, making it convenient to list arguments vertically. 


Example #2 Function Argument List with trailing Comma


```php
function takes_many_args(
    $first_arg,
    $second_arg,
    $a_very_long_argument_name,
    $arg_with_default = 5,
    $again = 'a default string', // This trailing comma was not permitted before 8.0.0.
)
{
    // ...
}
``` 

As of PHP 8.0.0, declaring mandatory arguments after optional argumentsis deprecated. This can generally be resolved by dropping the default value. One exception to this rule are arguments of the form Type `$param = null`, where the null default makes the type implicitly nullable. This usage remains allowed, though it is recommended to use an explicit nullable type instead. 


Example #3 Declaring optional arguments after mandatory arguments


```php
function foo($a = [], $b) {} // Before
function foo($a, $b) {}      // After

function bar(A $a = null, $b) {} // Still allowed
function bar(?A $a, $b) {}       // Recommended
``` 


#### Passing arguments by reference 

By default, function arguments are passed by value (so that ifthe value of the argument within the function is changed, it doesnot get changed outside of the function). To allow a function to modify its arguments, they must be passed by reference. 

To have an argument to a function always passed by reference, prepend an ampersand (&) to the argument name in the function definition: 

Example #4 Passing function parameters by reference


```php
function add_some_extra(&$string)
{
    $string .= 'and something extra.';
}
$str = 'This is a string, ';
add_some_extra($str);
echo $str;    // outputs 'This is a string, and something extra.'
``` 


It is an error to pass a value as argument which is supposed to be passed by reference. 


#### Default argument values 

A function may define C++-style default values for scalararguments as follows: 


Example #5 Use of default parameters in functions


```php
function makecoffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
echo makecoffee();
echo makecoffee(null);
echo makecoffee("espresso");
``` 


The above example will output:


Making a cup of cappuccino.
Making a cup of .
Making a cup of espresso.


PHP also allows the use of arrays and the special type nullas default values, for example: 


Example #6 Using non-scalar types as default values


```php
function makecoffee($types = array("cappuccino"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
    return "Making a cup of ".join(", ", $types)." with $device.\n";
}
echo makecoffee();
echo makecoffee(array("cappuccino", "lavazza"), "teapot");
``` 


The default value must be a constant expression, not (forexample) a variable, a class member or a function call. 

Note that when using default arguments, any defaults should be onthe right side of any non-default arguments; otherwise, thingswill not work as expected. Consider the following code snippet: 


Example #7 Incorrect usage of default function arguments


```php
function makeyogurt($type = "acidophilus", $flavour)
{
    return "Making a bowl of $type $flavour.\n";
}
 
echo makeyogurt("raspberry");   // won't work as expected
``` 


The above example will output:


Warning: Missing argument 2 in call to makeyogurt() in 
/usr/local/etc/httpd/htdocs/phptest/functest.html on line 41
Making a bowl of raspberry .


Now, compare the above with this: 


Example #8 Correct usage of default function arguments


```php
function makeyogurt($flavour, $type = "acidophilus")
{
    return "Making a bowl of $type $flavour.\n";
}
 
echo makeyogurt("raspberry");   // works as expected
``` 


The above example will output:


Making a bowl of acidophilus raspberry.


Note: Arguments that are passed by reference may have a default value.  


#### Variable-length argument lists 

PHP has support for variable-length argument lists inuser-defined functions by using the ... token. 


Note: It is also possible to achieve variable-length arguments by using func_num_args(), func_get_arg(), and func_get_args() functions.This technique is not recommended as it was used prior to the introductionof the ... token.  

Argument lists may include the ... token to denote that the function accepts avariable number of arguments. The arguments will be passed into thegiven variable as an array; for example: 


Example #9 Using ... to access variable arguments


```php
function sum(...$numbers) {
    $acc = 0;
    foreach ($numbers as $n) {
        $acc += $n;
    }
    return $acc;
}

echo sum(1, 2, 3, 4);
``` 


The above example will output:


10


... can also be used when calling functions to unpackan array or Traversable variable orliteral into the argument list: 


Example #10 Using ... to provide arguments


```php
function add($a, $b) {
    return $a + $b;
}

echo add(...[1, 2])."\n";

$a = [1, 2];
echo add(...$a);
``` 


The above example will output:


3
3


You may specify normal positional arguments before the ... token. In this case, only the trailing argumentsthat don't match a positional argument will be added to the arraygenerated by .... 

It is also possible to add a type declaration before the ... token. If this is present, then all argumentscaptured by ... must match that parameter type. 


Example #11 Type declared variable arguments


```php
function total_intervals($unit, DateInterval ...$intervals) {
    $time = 0;
    foreach ($intervals as $interval) {
        $time += $interval->$unit;
    }
    return $time;
}

$a = new DateInterval('P1D');
$b = new DateInterval('P2D');
echo total_intervals('d', $a, $b).' days';

// This will fail, since null isn't a DateInterval object.
echo total_intervals('d', null);
``` 


The above example will output:


3 days
Catchable fatal error: Argument 2 passed to total_intervals() must be an instance of DateInterval, null given, called in - on line 14 and defined in - on line 2


Finally, variable arguments can also be passed by reference byprefixing the ... with an ampersand(&). 


#### Older versions of PHP

No special syntax is required to note that a function is variadic;however access to the function's arguments must use func_num_args(), func_get_arg()and func_get_args(). 

The first example above would be implemented as follows in old versions of PHP: 


Example #12 Accessing variable arguments in old PHP versions


```php
function sum() {
    $acc = 0;
    foreach (func_get_args() as $n) {
        $acc += $n;
    }
    return $acc;
}

echo sum(1, 2, 3, 4);
``` 


The above example will output:


10


#### Named Arguments 

PHP 8.0.0 introduced named arguments as an extension of the existingpositional parameters. Named arguments allow passing arguments to afunction based on the parameter name, rather than the parameter position.This makes the meaning of the argument self-documenting, makes thearguments order-independent and allows skipping default values arbitrarily. 

Named arguments are passed by prefixing the value with the parameter namefollowed by a colon. Using reserved keywords as parameter names is allowed.The parameter name must be an identifier, specifying dynamicallyis not allowed. 


Example #13 Named argument syntax


```php
myFunction(paramName: $value);
array_foobar(array: $value);

// NOT supported.
function_name($variableStoringParamName: $value);
``` 


Example #14 Positional arguments versus named arguments


```php
// Using positional arguments:
array_fill(0, 100, 50);

// Using named arguments:
array_fill(start_index: 0, count: 100, value: 50);
``` 

The order in which the named arguments are passed does not matter. 


Example #15 Same example as above with a different order of parameters


```php
array_fill(value: 50, count: 100, start_index: 0);
``` 

Named arguments can be combined with positional arguments. In this case,the named arguments must come after the positional arguments.It is also possible to specify only some of the optional arguments of afunction, regardless of their order. 


Example #16 Combining named arguments with positional arguments


```php
htmlspecialchars($string, double_encode: false);
// Same as
htmlspecialchars($string, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, 'UTF-8', false);
``` 

Passing the same parameter multiple times results in an Error exception. 


Example #17 Error exception when passing the same parameter multiple times


```php
function foo($param) { ... }

foo(param: 1, param: 2);
// Error: Named parameter $param overwrites previous argument
foo(1, param: 2);
// Error: Named parameter $param overwrites previous argument
```



### ===🗝 • Returning values

Values are returned by using the optional return statement. Anytype may be returned, including arrays and objects. This causes thefunction to end its execution immediately and pass control back tothe line from which it was called. See returnfor more information. 

Note: 

If the return is omitted the value null will bereturned. 


Use of return 


Example #1 Use of return


```php
function square($num)
{
    return $num * $num;
}
echo square(4);   // outputs '16'.
```  


A function can not return multiple values, but similar results can beobtained by returning an array. 


Example #2 Returning an array to get multiple values


```php
function small_numbers()
{
    return [0, 1, 2];
}
// Array destructuring will collect each member of the array individually
[$zero, $one, $two] = small_numbers();

// Prior to 7.1.0, the only equivalent alternative is using list() construct
list($zero, $one, $two) = small_numbers();
```  


To return a reference from a function, use the reference operator & inboth the function declaration and when assigning the returned value to avariable: 


Example #3 Returning a reference from a function


```php
function &returns_reference()
{
    return $someref;
}

$newref =& returns_reference();
```  


For more information on references, please check out References Explained.

### ===🗝 • Variable functions

PHP supports the concept of variable functions. This means that ifa variable name has parentheses appended to it, PHP will look for a function with the same name as whatever the variable evaluates to, and will attempt to execute it. Among other things, this canbe used to implement callbacks, function tables, and so forth. 

Variable functions won't work with language constructs suchas echo, print, unset(), isset(), empty(), include, require and the like. Utilize wrapper functions to makeuse of any of these constructs as variable functions. 


Example #1 Variable function example



```php
function foo() {
    echo "In foo()<br />\n";
}

function bar($arg = '')
{
    echo "In bar(); argument was '$arg'.<br />\n";
}

// This is a wrapper function around echo
function echoit($string)
{
    echo $string;
}

$func = 'foo';
$func();        // This calls foo()

$func = 'bar';
$func('test');  // This calls bar()

$func = 'echoit';
$func('test');  // This calls echoit()
```  


Object methods can also be called with the variable functions syntax. 


Example #2 Variable method example



```php
class Foo
{
    function Variable()
    {
        $name = 'Bar';
        $this->$name(); // This calls the Bar() method
    }
    
    function Bar()
    {
        echo "This is Bar";
    }
}

$foo = new Foo();
$funcname = "Variable";
$foo->$funcname();  // This calls $foo->Variable()

```  


When calling static methods, the function call is stronger than the static property operator: 


Example #3 Variable method example with static properties



```php
class Foo
{
    static $variable = 'static property';
    static function Variable()
    {
        echo 'Method Variable called';
    }
}

echo Foo::$variable; // This prints 'static property'. It does need a $variable in this scope.
$variable = "Variable";
Foo::$variable();  // This calls $foo->Variable() reading $variable in this scope.
```  


Example #4 Complex callables



```php
class Foo
{
    static function bar()
    {
        echo "bar\n";
    }
    function baz()
    {
        echo "baz\n";
    }
}

$func = array("Foo", "bar");
$func(); // prints "bar"
$func = array(new Foo, "baz");
$func(); // prints "baz"
$func = "Foo::bar";
$func(); // prints "bar"
```  


See Also 

• is_callable()
• call_user_func()
• function_exists()
• variable variables


### ===🗝 • Internal (built-in) functions

Internal (built-in) functions 

PHP comes standard with many functions and constructs. There are also functions that require specific PHP extensions compiled in, otherwise fatal "undefined function" errors will appear. For example, to use image functions such as imagecreatetruecolor(), PHP must be compiled with GD support. Or, to use mysqli_connect(), PHP must be compiled with MySQLi support. There are many core functionsthat are included in every version of PHP, such as the string and variable functions. A callto phpinfo() or get_loaded_extensions() will show which extensions areloaded into PHP. Also note that many extensions are enabled by default andthat the PHP manual is split up by extension. See the configuration, installation, and individualextension chapters, for information on how to set up PHP. 

Reading and understanding a function's prototype is explained within the manual section titled how to read a function definition. It's important to realize what a function returns or if a function works directly on a passed in value. For example, str_replace() will return the modified string while usort() works on the actual passed in variableitself. Each manual page also has specific information for eachfunction like information on function parameters, behavior changes,return values for both success and failure, and availability information.Knowing these important (yet often subtle) differences is crucial forwriting correct PHP code. 


Note: If the parameters given to a function are not what it expects, such aspassing an array where a string is expected,the return value of the function is undefined. In this case it will likely return null but this is just a convention, and cannot be reliedupon.As of PHP 8.0.0, a TypeError exception is supposed tobe thrown in this case.  


See Also 


• function_exists()
• the function reference
• get_extension_funcs()
• dl()


### ===🗝 • Anonymous functions

Anonymous functions, also known as closures, allow thecreation of functions which have no specified name. They are most useful asthe value of callableparameters, but they have many other uses. 

#### Anonymous functions are implemented using the Closure class. 


Example #1 Anonymous function example



```php
echo preg_replace_callback('~-([a-z])~', function ($match) {
    return strtoupper($match[1]);
}, 'hello-world');
// outputs helloWorld
```  

Closures can also be used as the values of variables; PHP automatically converts such expressions into instances of the Closure internal class. Assigning a closure to avariable uses the same syntax as any other assignment, including thetrailing semicolon: 


Example #2 Anonymous function variable assignment example



```php
$greet = function($name)
{
    printf("Hello %s\r\n", $name);
};

$greet('World');
$greet('PHP');
```  

Closures may also inherit variables from the parent scope. Any suchvariables must be passed to the use language construct. As of PHP 7.1, these variables must not include superglobals, $this, or variables with the same name as a parameter. A return type declaration of the function has to be placed after the use clause. 


Example #3 Inheriting variables from the parent scope



```php
$message = 'hello';

// No "use"
$example = function () {
    var_dump($message);
};
$example();

// Inherit $message
$example = function () use ($message) {
    var_dump($message);
};
$example();

// Inherited variable's value is from when the function
// is defined, not when called
$message = 'world';
$example();

// Reset message
$message = 'hello';

// Inherit by-reference
$example = function () use (&$message) {
    var_dump($message);
};
$example();

// The changed value in the parent scope
// is reflected inside the function call
$message = 'world';
$example();

// Closures can also accept regular arguments
$example = function ($arg) use ($message) {
    var_dump($arg . ' ' . $message);
};
$example("hello");

// Return type declaration comes after the use clause
$example = function () use ($message): string {
    return "hello $message";
};
var_dump($example());
```  


The above example will output something similar to:


Notice: Undefined variable: message in /example.php on line 6
NULL
string(5) "hello"
string(5) "hello"
string(5) "hello"
string(5) "world"
string(11) "hello world"
string(11) "hello world"


As of PHP 8.0.0, the list of scope-inherited variables may include a trailingcomma, which will be ignored. 

Inheriting variables from the parent scope is not the same as using global variables.Global variables exist in the global scope, which is the same nomatter what function is executing. The parent scope of a closure is thefunction in which the closure was declared (not necessarily the function itwas called from). See the following example: 


Example #4 Closures and scoping



```php
// A basic shopping cart which contains a list of added products
// and the quantity of each product. Includes a method which
// calculates the total price of the items in the cart using a
// closure as a callback.
class Cart
{
    const PRICE_BUTTER  = 1.00;
    const PRICE_MILK    = 3.00;
    const PRICE_EGGS    = 6.95;

    protected $products = array();
    
    public function add($product, $quantity)
    {
        $this->products[$product] = $quantity;
    }
    
    public function getQuantity($product)
    {
        return isset($this->products[$product]) ? $this->products[$product] :
               FALSE;
    }
    
    public function getTotal($tax)
    {
        $total = 0.00;
        
        $callback =
            function ($quantity, $product) use ($tax, &$total)
            {
                $pricePerItem = constant(__CLASS__ . "::PRICE_" .
                    strtoupper($product));
                $total += ($pricePerItem * $quantity) * ($tax + 1.0);
            };
        
        array_walk($this->products, $callback);
        return round($total, 2);
    }
}

$my_cart = new Cart;

// Add some items to the cart
$my_cart->add('butter', 1);
$my_cart->add('milk', 3);
$my_cart->add('eggs', 6);

// Print the total with a 5% sales tax.
print $my_cart->getTotal(0.05) . "\n";
// The result is 54.29
```  


Example #5 Automatic binding of $this



```php

class Test
{
    public function testing()
    {
        return function() {
            var_dump($this);
        };
    }
}

$object = new Test;
$function = $object->testing();
$function();
    
```  


The above example will output:


object(Test)#1 (0) {
}


When declared in the context of a class, the current class isautomatically bound to it, making $this availableinside of the function's scope. If this automatic binding of the currentclass is not wanted, then static anonymousfunctions may be used instead. 


#### Static anonymous functions 

Anonymous functions may be declared statically. Thisprevents them from having the current class automatically bound tothem. Objects may also not be bound to them at runtime. 




Example #6 Attempting to use $this inside a static anonymous function



```php

class Foo
{
    function __construct()
    {
        $func = static function() {
            var_dump($this);
        };
        $func();
    }
};
new Foo();

```  


The above example will output:


Notice: Undefined variable: this in %s on line %d
NULL






Example #7 Attempting to bind an object to a static anonymous function



```php

$func = static function() {
    // function body
};
$func = $func->bindTo(new StdClass);
$func();

```  


The above example will output:


Warning: Cannot bind an instance to a static closure in %s on line %d




Changelog 




Version

Description


7.1.0 Anonymous functions may not close over superglobals, $this, or any variable with the same name as aparameter.  



Notes 


Note: It is possible to use func_num_args(), func_get_arg(), and func_get_args()from within a closure. 

### ===🗝 • Arrow Functions

Arrow functions were introduced in PHP 7.4 as a more concise syntax for anonymous functions. 

Both anonymous functions and arrow functions are implemented using the Closure class. 

Arrow functions have the basic form `fn (argument_list) => expr`. 

Arrow functions support the same features as anonymous functions,except that using variables from the parent scope is always automatic. 

When a variable used in the expression is defined in the parent scopeit will be implicitly captured by-value.In the following example, the functions $fn1 and $fn2 behave the same way. 


Example #1 Arrow functions capture variables by value automatically



```php
$y = 1;
 
$fn1 = fn($x) => $x + $y;
// equivalent to using $y by value:
$fn2 = function ($x) use ($y) {
    return $x + $y;
};

var_export($fn1(3));
```  


The above example will output:


4



This also works if the arrow functions are nested: 




Example #2 Arrow functions capture variables by value automatically, even when nested



```php

$z = 1;
$fn = fn($x) => fn($y) => $x * $y + $z;
// Outputs 51
var_export($fn(5)(10));
```  


Similarly to anonymous functions,the arrow function syntax allows arbitrary function signatures,including parameter and return types, default values, variadics,as well as by-reference passing and returning.All of the following are valid examples of arrow functions: 




Example #3 Examples of arrow functions



```php

fn(array $x) => $x;
static fn(): int => $x;
fn($x = 42) => $x;
fn(&$x) => $x;
fn&($x) => $x;
fn($x, ...$rest) => $rest;

```  


Arrow functions `use` by-value variable binding.This is roughly equivalent to performing a `use($x)` for everyvariable $x used inside the arrow function.A by-value binding means that it is not possible to modify any valuesfrom the outer scope. Anonymous functions can be used instead for by-ref bindings. 




Example #4 Values from the outer scope cannot be modified by arrow functions



```php

$x = 1;
$fn = fn() => $x++; // Has no effect
$fn();
var_export($x);  // Outputs 1

```  



Changelog 

Version  / Description
7.4.0 Arrow functions became available.  



Notes 


Note: It is possible to use func_num_args(), func_get_arg(), and func_get_args()from within an arrow function. 

### ===🗝 • First class callable syntax


The first class callable syntax is introduced as of PHP 8.1.0, as a way of creating anonymous functions from callable.It supersedes existing callable syntax using strings and arrays.The advantage of this syntax is that it is accessible to static analysis, and uses the scope at the point where the callable is acquired. 

CallableExpr(...) syntax is used to create a Closure object from callable. CallableExpr accepts any expression that can be directly called in the PHP grammar: 


Example #1 Simple first class callable syntax



```php

class Foo {
   public function method() {}
   public static function staticmethod() {}
   public function __invoke() {} # invokable
}

$obj = new Foo();
$classStr = 'Foo';
$methodStr = 'method';
$staticmethodStr = 'staticmethod';


$f1 = strlen(...);
$f2 = $obj(...);  // invokable object
$f3 = $obj->method(...);
$f4 = $obj->$methodStr(...);
$f5 = Foo::staticmethod(...);
$f6 = $classStr::$staticmethodStr(...);

// traditional callable using string, array
$f7 = 'strlen'(...);
$f8 = [$obj, 'method'](...);
$f9 = [Foo::class, 'staticmethod'](...);
```  



Note: 

The ... is part of the syntax, and not an omission. 


CallableExpr(...) has the same semantics as Closure::fromCallable().That is, unlike callable using strings and arrays, CallableExpr(...) respects the scope at the point where it is created: 


Example #2 Scope comparison of CallableExpr(...) and traditional callable

```php
class Foo {
    public function getPrivateMethod() {
        return [$this, 'privateMethod'];
    }

    private function privateMethod() {
        echo __METHOD__, "\n";
    }
}

$foo = new Foo;
$privateMethod = $foo->getPrivateMethod();
$privateMethod();
// Fatal error: Call to private method Foo::privateMethod() from global scope
// This is because call is performed outside from Foo and visibility will be checked from this point.

class Foo1 {
    public function getPrivateMethod() {
        // Uses the scope where the callable is acquired.
        return $this->privateMethod(...); // identical to Closure::fromCallable([$this, 'privateMethod']);
    }

    private function privateMethod() {
        echo __METHOD__, "\n";
    }
}

$foo1 = new Foo1;
$privateMethod = $foo1->getPrivateMethod();
$privateMethod();  // Foo1::privateMethod
```  



Note: 

Object creation by this syntax (e.g new Foo(...)) is not supported, because new Foo() syntax is not considered a call. 



Note: 

The first-class callable syntax cannot be combined with the nullsafe operator. Both of the following result in a compile-time error: 

```php
$obj?->method(...);
$obj?->prop->method(...);
``` 


## ==⚡ • Classes and Objects

PHP includes a complete object model. Some of its features are: visibility, abstract and final classes and methods,additional magic methods, interfaces, and cloning. 

PHP treats objects in the same way as references or handles, meaning thateach variable contains an object reference rather than a copy of the entire object. See Objects and References 

Tip
See also the Userland Naming Guide.


### ===🗝 • The Basics

#### class 

Basic class definitions begin with the keyword `class`, followed by a class name, followed by a pair of curly braces which enclose the definitionsof the properties and methods belonging to the class. 

The class name can be any valid label, provided it is not aPHP reserved word. A valid classname starts with a letter or underscore, followed by any number ofletters, numbers, or underscores. As a regular expression, itwould be expressed thus: `^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$`. 

A class may contain its own constants, variables(called "`properties`"), and functions (called "`methods`"). 


Example #1 Simple Class definition



```php
class SimpleClass
{
    // property declaration
    public $var = 'a default value';

    // method declaration
    public function displayVar() {
        echo $this->var;
    }
}
```  

The pseudo-variable $this is available when amethod is called from within an object context. $this is the value of the calling object. 

Warning 
Calling a non-static method statically throws an Error.Prior to PHP 8.0.0, this would generate a deprecation notice,and $this would be undefined. 


Example #2 Some examples of the $this pseudo-variable



```php
class A
{
    function foo()
    {
        if (isset($this)) {
            echo '$this is defined (';
            echo get_class($this);
            echo ")\n";
        } else {
            echo "\$this is not defined.\n";
        }
    }
}

class B
{
    function bar()
    {
        A::foo();
    }
}

$a = new A();
$a->foo();

A::foo();

$b = new B();
$b->bar();

B::bar();
```  


Output of the above example in PHP 7:


$this is defined (A)

Deprecated: Non-static method A::foo() should not be called statically in %s  on line 27
$this is not defined.

Deprecated: Non-static method A::foo() should not be called statically in %s  on line 20
$this is not defined.

Deprecated: Non-static method B::bar() should not be called statically in %s  on line 32

Deprecated: Non-static method A::foo() should not be called statically in %s  on line 20
$this is not defined.



Output of the above example in PHP 8:


$this is defined (A)

Fatal error: Uncaught Error: Non-static method A::foo() cannot be called statically in %s :27
Stack trace:
#0 {main}
  thrown in %s  on line 27



#### new 

To create an instance of a class, the new keyword mustbe used. An object will always be created unless the object has a constructor defined that throws an exception on error. Classes should be defined before instantiation (and in some cases this is arequirement). 

If a string containing the name of a class is used with new, a new instance of that class will be created. Ifthe class is in a namespace, its fully qualified name must be used whendoing this. 


Note: 

If there are no arguments to be passed to the class's constructor,parentheses after the class name may be omitted. 



Example #3 Creating an instance



```php
$instance = new SimpleClass();

// This can also be done with a variable:
$className = 'SimpleClass';
$instance = new $className(); // new SimpleClass()
```  

As of PHP 8.0.0, using new with arbitrary expressionsis supported. This allows more complex instantiation if the expressionproduces a string. The expressions must be wrapped in parentheses. 


Example #4 Creating an instance using an arbitrary expression


In the given example we show multiple examples of valid arbitrary expressions that produce a class name.This shows a call to a function, string concatenation, and the ::class constant. 



```php

class ClassA extends \stdClass {}
class ClassB extends \stdClass {}
class ClassC extends ClassB {}
class ClassD extends ClassA {}

function getSomeClass(): string
{
    return 'ClassA';
}

var_dump(new (getSomeClass()));
var_dump(new ('Class' . 'B'));
var_dump(new ('Class' . 'C'));
var_dump(new (ClassD::class));
```  


Output of the above example in PHP 8:


object(ClassA)#1 (0) {
}
object(ClassB)#1 (0) {
}
object(ClassC)#1 (0) {
}
object(ClassD)#1 (0) {
}



In the class context, it is possible to create a new object by new self and new parent. 

When assigning an already created instance of a class to a new variable, the new variablewill access the same instance as the object that was assigned. Thisbehaviour is the same when passing instances to a function. A copyof an already created object can be made by cloning it. 


Example #5 Object Assignment



```php

$instance = new SimpleClass();

$assigned   =  $instance;
$reference  =& $instance;

$instance->var = '$assigned will have this value';

$instance = null; // $instance and $reference become null

var_dump($instance);
var_dump($reference);
var_dump($assigned);
```  


The above example will output:


NULL
NULL
object(SimpleClass)#1 (1) {
   ["var"]=>
     string(30) "$assigned will have this value"
}


It's possible to create instances of an object in a couple of ways: 


Example #6 Creating new objects



```php
class Test
{
    static public function getNew()
    {
        return new static;
    }
}

class Child extends Test
{}

$obj1 = new Test();
$obj2 = new $obj1;
var_dump($obj1 !== $obj2);

$obj3 = Test::getNew();
var_dump($obj3 instanceof Test);

$obj4 = Child::getNew();
var_dump($obj4 instanceof Child);
```  


The above example will output:


bool(true)
bool(true)
bool(true)


It is possible to access a member of a newly created objectin a single expression: 


Example #7 Access member of newly created object



```php
echo (new DateTime())->format('Y');
```  


The above example will output something similar to:


2016



Note: Prior to PHP 7.1, the arguments are not evaluated if there is no constructorfunction defined.  


#### Properties and methods 

Class properties and methods live in separate "namespaces", so it ispossible to have a property and a method with the same name. Referring toboth a property and a method has the same notation, and whether a propertywill be accessed or a method will be called, solely depends on the context,i.e. whether the usage is a variable access or a function call. 


Example #8 Property access vs. method call



```php
class Foo
{
    public $bar = 'property';
    
    public function bar() {
        return 'method';
    }
}

$obj = new Foo();
echo $obj->bar, PHP_EOL, $obj->bar(), PHP_EOL;  
```

The above example will output:


property
method


That means that calling an anonymousfunction which has been assigned to a property is not directlypossible. Instead the property has to be assigned to a variable first, forinstance. It is possible to call such a property directlyby enclosing it in parentheses. 


Example #9 Calling an anonymous function stored in a property



```php
class Foo
{
    public $bar;
    
    public function __construct() {
        $this->bar = function() {
            return 42;
        };
    }
}

$obj = new Foo();

echo ($obj->bar)(), PHP_EOL;  
```

The above example will output:


42



#### extends 

A class can inherit the constants, methods, and properties of another class byusing the keyword extends in the classdeclaration. It is not possible to extend multiple classes; aclass can only inherit from one base class. 

The inherited constants, methods, and properties can be overridden byredeclaring them with the same name defined in the parentclass. However, if the parent class has defined a method or constantas final,they may not be overridden. It is possible to access the overriddenmethods or static properties by referencing themwith parent::. 


Note: As of PHP 8.1.0, constants may be declared as final.  


Example #10 Simple Class Inheritance



```php
class ExtendClass extends SimpleClass
{
    // Redefine the parent method
    function displayVar()
    {
        echo "Extending class\n";
        parent::displayVar();
    }
}

$extended = new ExtendClass();
$extended->displayVar();
```  


The above example will output:


Extending class
a default value



#### Signature compatibility rules

When overriding a method, its signature must be compatible with the parentmethod. Otherwise, a fatal error is emitted, or, prior to PHP 8.0.0, an E_WARNING level error is generated.A signature is compatible if it respects the variance rules, makes amandatory parameter optional, and if any new parameters are optional.This is known as the Liskov Substitution Principle, or LSP for short.The constructor,and private methods are exempt from these signaturecompatibility rules, and thus won't emit a fatal error in case of asignature mismatch. 


Example #11 Compatible child methods



```php

class Base
{
    public function foo(int $a) {
        echo "Valid\n";
    }
}

class Extend1 extends Base
{
    function foo(int $a = 5)
    {
        parent::foo($a);
    }
}

class Extend2 extends Base
{
    function foo(int $a, $b = 5)
    {
        parent::foo($a);
    }
}

$extended1 = new Extend1();
$extended1->foo();
$extended2 = new Extend2();
$extended2->foo(1);  
```

The above example will output:


Valid
Valid


The following examples demonstrate that a child method which removes a parameter, or makes an optionalparameter mandatory, is not compatible with the parent method. 


Example #12 Fatal error when a child method removes a parameter



```php
class Base
{
    public function foo(int $a = 5) {
        echo "Valid\n";
    }
}

class Extend extends Base
{
    function foo()
    {
        parent::foo(1);
    }
}  
```

Output of the above example in PHP 8 is similar to:


Fatal error: Declaration of Extend::foo() must be compatible with Base::foo(int $a = 5) in /in/evtlq on line 13



Example #13 Fatal error when a child method makes an optional parameter mandatory



```php
class Base
{
    public function foo(int $a = 5) {
        echo "Valid\n";
    }
}

class Extend extends Base
{
    function foo(int $a)
    {
        parent::foo($a);
    }
}  
```

Output of the above example in PHP 8 is similar to:


Fatal error: Declaration of Extend::foo(int $a) must be compatible with Base::foo(int $a = 5) in /in/qJXVC on line 13


Warning 
Renaming a method's parameter in a child class is not a signatureincompatibility. However, this is discouraged as it will result in aruntime Error if named argumentsare used. 


Example #14 Error when using named arguments and parameters were renamed in a child class



```php
class A {
    public function test($foo, $bar) {}
}

class B extends A {
    public function test($a, $b) {}
}

$obj = new B;

// Pass parameters according to A::test() contract
$obj->test(foo: "foo", bar: "bar"); // ERROR!  
```

The above example will output something similar to:


Fatal error: Uncaught Error: Unknown named parameter $foo in /in/XaaeN:14
Stack trace:
#0 {main}
  thrown in /in/XaaeN on line 14



#### ::class 

The class keyword is also used for classname resolution. To obtain the fully qualified name of a class `ClassName` use `ClassName::class`. This is particularly useful with namespaced classes. 




Example #15 Class name resolution



```php
namespace NS {
    class ClassName {
    }
    
    echo ClassName::class;
}
```  


The above example will output:


NS\ClassName




Note: 

The class name resolution using ::class is acompile time transformation. That means at the time the class name stringis created no autoloading has happened yet. As a consequence, class namesare expanded even if the class does not exist. No error is issued inthat case. 


Example #16 Missing class name resolution



```php
print Does\Not\Exist::class;
```  


The above example will output:


    Does\Not\Exist



As of PHP 8.0.0, the ::class constant may also be used on objects. This resolution happens at runtime, not compile time. Its effect isthe same as calling get_class() on the object. 


Example #17 Object name resolution



```php
namespace NS {
    class ClassName {
    }
}
$c = new ClassName();
print $c::class;
```  


The above example will output:


NS\ClassName



#### Nullsafe methods and properties 

As of PHP 8.0.0, properties and methods may also be accessed with the"nullsafe" operator instead: ?->. The nullsafe operatorworks the same as property or method access as above, except that if theobject being dereferenced is null then nullwill be returned rather than an exception thrown. If the dereference is part of achain, the rest of the chain is skipped. 

The effect is similar to wrapping each access in an is_null()check first, but more compact. 




Example #18 Nullsafe Operator



```php

// As of PHP 8.0.0, this line:
$result = $repository?->getUser(5)?->name;

// Is equivalent to the following code block:
if (is_null($repository)) {
    $result = null;
} else {
    $user = $repository->getUser(5);
    if (is_null($user)) {
        $result = null;
    } else {
        $result = $user->name;
    }
}
```  

Note: 

The nullsafe operator is best used when null is considered a valid and expectedpossible value for a property or method return. For indicating an error,a thrown exception is preferable. 



### ===🗝 • Properties

Class member variables are called properties. They may be referred to using other terms such as fields, but for the purposes of this reference properties will be used. They are defined by using at least one modifier (such as Visibility, Static Keyword,or, as of PHP 8.1.0, readonly),optionally (except for readonly properties), as of PHP 7.4,followed by a type declaration, followed by a normal variable declaration.This declaration may include an initialization, but this initialization must be a constant value. 

Note: 

An obsolete way of declaring class properties, is by using the var keyword instead of a modifier. 



Note: A property declared without a Visibilitymodifier will be declared as public.  

Within class methods non-static properties may be accessed by using -> (Object Operator): `$this->property` (where property is the name of the property). Static properties are accessed by using the `::` (Double Colon): `self::$property`. See Static Keywordfor more information on the difference between static and non-static properties. 

The pseudo-variable $this is available insideany class method when that method is called from within an object context. $this is the value of the calling object. 




Example #1 Property declarations



```php
class SimpleClass
{
   public $var1 = 'hello ' . 'world';
   public $var2 = <<<EOD
hello world
EOD;
   public $var3 = 1+2;
   // invalid property declarations:
   public $var4 = self::myStaticMethod();
   public $var5 = $myVar;

   // valid property declarations:
   public $var6 = myConstant;
   public $var7 = [true, false];

   public $var8 = <<<'EOD'
hello world
EOD;

   // Without visibility modifier:
   static $var9;
   readonly int $var10;
}
```  





Note: 

There are various functions to handle classes and objects. See the Class/Object Functions reference. 


#### Type declarations 


As of PHP 7.4.0, property definitions can include a Type declarations,with the exception of callable. 


Example #2 Example of typed properties



```php
class User
{
    public int $id;
    public ?string $name;

    public function __construct(int $id, ?string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
}

$user = new User(1234, null);

var_dump($user->id);
var_dump($user->name);
```  


The above example will output:


int(1234)
NULL



Typed properties must be initialized before accessing, otherwise an Error is thrown. 


Example #3 Accessing properties



```php

class Shape
{
    public int $numberOfSides;
    public string $name;

    public function setNumberOfSides(int $numberOfSides): void
    {
        $this->numberOfSides = $numberOfSides;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getNumberOfSides(): int
    {
        return $this->numberOfSides;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$triangle = new Shape();
$triangle->setName("triangle");
$triangle->setNumberofSides(3);
var_dump($triangle->getName());
var_dump($triangle->getNumberOfSides());

$circle = new Shape();
$circle->setName("circle");
var_dump($circle->getName());
var_dump($circle->getNumberOfSides());
```  


The above example will output:


string(8) "triangle"
int(3)
string(6) "circle"

Fatal error: Uncaught Error: Typed property Shape::$numberOfSides must not be accessed before initialization




#### Readonly properties 

As of PHP 8.1.0, a property can be declared with the readonly modifier, which prevents modification of the property after initialization. 


Example #4 Example of readonly properties



```php

class Test {
   public readonly string $prop;

   public function __construct(string $prop) {
       // Legal initialization.
       $this->prop = $prop;
   }
}

$test = new Test("foobar");
// Legal read.
var_dump($test->prop); // string(6) "foobar"

// Illegal reassignment. It does not matter that the assigned value is the same.
$test->prop = "foobar";
// Error: Cannot modify readonly property Test::$prop
```  


Note: 

The readonly modifier can only be applied to typed properties.A readonly property without type constraints can be created using the mixed type. 



Note: 

Readonly static properties are not supported. 



A readonly property can only be initialized once, and only from the scope where it has been declared. Any other assignment or modification of the property will result in an Error exception. 


Example #5 Illegal initialization of readonly properties



```php
class Test1 {
    public readonly string $prop;
}

$test1 = new Test1;
// Illegal initialization outside of private scope.
$test1->prop = "foobar";
// Error: Cannot initialize readonly property Test1::$prop from global scope
```  



Note: 

Specifying an explicit default value on readonly properties is not allowed, because a readonly property with a default value is essentially the same as a constant, and thus not particularly useful. 




```php

class Test {
    // Fatal error: Readonly property Test::$prop cannot have default value
    public readonly int $prop = 42;
}
```  




Note: 

Readonly properties cannot be unset() once they are initialized. However, it is possible to unset a readonly property prior to initialization, from the scope where the property has been declared. 


Modifications are not necessarily plain assignments, all of the following will also result in an Error exception: 




```php
class Test {
    public function __construct(
        public readonly int $i = 0,
        public readonly array $ary = [],
    ) {}
}

$test = new Test;
$test->i += 1;
$test->i++;
++$test->i;
$test->ary[] = 1;
$test->ary[0][] = 1;
$ref =& $test->i;
$test->i =& $ref;
byRef($test->i);
foreach ($test as &$prop);
```  


However, readonly properties do not preclude interior mutability. Objects (or resources) stored in readonly properties may still be modified internally: 




```php
class Test {
    public function __construct(public readonly object $obj) {}
}

$test = new Test(new stdClass);
// Legal interior mutation.
$test->obj->foo = 1;
// Illegal reassignment.
$test->obj = new stdClass;
``` 


### ===🗝 • Class Constants

It is possible to define constantson a per-class basis remaining the same and unchangeable.The default visibility of class constants is public. 

Note: 

Class constants can be redefined by a child class. As of PHP 8.1.0, class constants cannot be redefined by a child class if it is defined as `final`. 


It's also possible for interfaces to have constants. Lookat the interface documentationfor examples. 

It's possible to reference the class using a variable. The variable's value can not be a keyword (e.g. self, parent and static). 

Note that class constants are allocated once per class, and not for each class instance. 


Example #1 Defining and using a constant

```php
class MyClass
{
    const CONSTANT = 'constant value';

    function showConstant() {
        echo  self::CONSTANT . "\n";
    }
}

echo MyClass::CONSTANT . "\n";

$classname = "MyClass";
echo $classname::CONSTANT . "\n";

$class = new MyClass();
$class->showConstant();

echo $class::CONSTANT."\n";
```

The special ::class constant allowsfor fully qualified class name resolution at compile time,this is useful for namespaced classes: 


Example #2 Namespaced ::class example

```php
namespace foo {
    class bar {
    }

    echo bar::class; // foo\bar
}
```


Example #3 Class constant expression example

```php
const ONE = 1;
class foo {
    const TWO = ONE * 2;
    const THREE = ONE + self::TWO;
    const SENTENCE = 'The value of THREE is '.self::THREE;
}
```


Example #4 Class constant visibility modifiers, as of PHP 7.1.0

```php
class Foo {
    public const BAR = 'bar';
    private const BAZ = 'baz';
}
echo Foo::BAR, PHP_EOL;
echo Foo::BAZ, PHP_EOL;
```


Output of the above example in PHP 7.1:


bar

Fatal error: Uncaught Error: Cannot access private const Foo::BAZ in …


Note: 

As of PHP 7.1.0 visibility modifiers are allowed for class constants. 


### ===🗝 • Autoloading Classes

Many developers writing object-oriented applications createone PHP source file per class definition. One of the biggest annoyances is having to write a long list of needed includesat the beginning of each script (one for each class). 

The spl_autoload_register() function registers any number ofautoloaders, enabling for classes and interfaces to be automatically loadedif they are currently not defined. By registering autoloaders, PHP is givena last chance to load the class or interface before it fails with an error. 

Caution 
Prior to PHP 8.0.0, it was possible to use `__autoload()` to autoload classes and interfaces. However, it is a less flexible alternative to spl_autoload_register() and `__autoload()` is deprecated as of PHP 7.2.0, and removedas of PHP 8.0.0. 




Example #1 Autoload example


This example attempts to load the classes MyClass1and MyClass2 from the files MyClass1.php and MyClass2.php respectively. 

```php
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$obj  = new MyClass1();
$obj2 = new MyClass2(); 
```



Example #2 Autoload other example


This example attempts to load the interface ITest. 

```php
spl_autoload_register(function ($name) {
    var_dump($name);
});

class Foo implements ITest {
}

/*
string(5) "ITest"

Fatal error: Interface 'ITest' not found in ...
*/
```



Example #3 Autoloading with exception handling


This example throws an exception and demonstrates the try/catch block. 

```php
spl_autoload_register(function ($name) {
    echo "Want to load $name.\n";
    throw new Exception("Unable to load $name.");
});

try {
    $obj = new NonLoadableClass();
} catch (Exception $e) {
    echo $e->getMessage(), "\n";
}
```



The above example will output:


Want to load NonLoadableClass.
Unable to load NonLoadableClass.



Example #4 Autoloading with exception handling - Missing custom exception


This example throws an exception for a non-loadable, custom exception. 

```php
spl_autoload_register(function ($name) {
    echo "Want to load $name.\n";
    throw new MissingException("Unable to load $name.");
});

try {
    $obj = new NonLoadableClass();
} catch (Exception $e) {
    echo $e->getMessage(), "\n";
}
```



The above example will output:


Want to load NonLoadableClass.
Want to load MissingException.

Fatal error: Class 'MissingException' not found in testMissingException.php on line 4



See Also 

• unserialize()
• unserialize_callback_func
• spl_autoload_register()
• spl_autoload()
• `__autoload()`



### ===🗝 • Constructors and Destructors

#### Constructor 

    __construct(mixed ...$values = ""): void

PHP allows developers to declare constructor methods for classes.Classes which have a constructor method call this method on eachnewly-created object, so it is suitable for any initialization that theobject may need before it is used. 


Note: Parent constructors are not called implicitly if the child class definesa constructor. In order to run a parent constructor, a call to `parent::__construct()` within the child constructor isrequired. If the child does not define a constructor then it may be inheritedfrom the parent class just like a normal class method (if it was not declaredas private).  


Example #1 Constructors in inheritance

```php
class BaseClass {
    function __construct() {
        print "In BaseClass constructor\n";
    }
}

class SubClass extends BaseClass {
    function __construct() {
        parent::__construct();
        print "In SubClass constructor\n";
    }
}

class OtherSubClass extends BaseClass {
    // inherits BaseClass's constructor
}

// In BaseClass constructor
$obj = new BaseClass();

// In BaseClass constructor
// In SubClass constructor
$obj = new SubClass();

// In BaseClass constructor
$obj = new OtherSubClass();
```


Unlike other methods, `__construct()` is exempt from the usual signature compatibility rules when being extended. 

Constructors are ordinary methods which are called during the instantiation of their corresponding object. As such, they may define an arbitrary number of arguments, whichmay be required, may have a type, and may have a default value. Constructor arguments are called by placing the arguments in parentheses after the class name. 


Example #2 Using constructor arguments

```php
class Point {
    protected int $x;
    protected int $y;

    public function __construct(int $x, int $y = 0) {
        $this->x = $x;
        $this->y = $y;
    }
}

// Pass both parameters.
$p1 = new Point(4, 5);
// Pass only the required parameter. $y will take its default value of 0.
$p2 = new Point(4);
// With named parameters (as of PHP 8.0):
$p3 = new Point(y: 5, x: 4);
```


If a class has no constructor, or the constructor has no required arguments, the parentheses may be omitted. 


#### Old-style constructors

Prior to PHP 8.0.0, classes in the global namespace will interpret a method named the same as the class as an old-style constructor. That syntax is deprecated, and will result in an `E_DEPRECATED` error but still call that function as a constructor. If both `__construct()` and a same-name method aredefined, `__construct()` will be called. 

In namespaced classes, or any class as of PHP 8.0.0, a method namedthe same as the class never has any special meaning. 

Always use `__construct()` in new code. 


#### Constructor Promotion

As of PHP 8.0.0, constructor parameters may also be promoted to correspond to anobject property. It is very common for constructor parameters to be assigned toa property in the constructor but otherwise not operated upon. Constructor promotionprovides a short-hand for that use case. The example above could be rewritten as the following. 


Example #3 Using constructor property promotion

```php
class Point {
    public function __construct(protected int $x, protected int $y = 0) {
    }
}  
```

When a constructor argument includes a visibility modifier, PHP will interpret it as both an object property and a constructor argument, and assign the argument value tothe property. The constructor body may then be empty or may contain other statements.Any additional statements will be executed after the argument values have been assigned to the corresponding properties. 

Not all arguments need to be promoted. It is possible to mix and match promoted and not-promoted arguments, in any order. Promoted arguments have no impact on code calling the constructor. 


Note: 

Object properties may not be typed callable due to engine ambiguity that would introduce. Promoted arguments, therefore, may not be typed callable either. Any other type declaration is permitted, however. 



Note: 

Attributes placed on apromoted constructor argument will be replicated to both the propertyand argument. 



#### Static creation methods

PHP only supports a single constructor per class. In some cases, however, it may bedesirable to allow an object to be constructed in different ways with different inputs. The recommended way to do so is by using static methods as constructor wrappers. 


Example #4 Using static creation methods

```php
class Product {

    private ?int $id;
    private ?string $name;

    private function __construct(?int $id = null, ?string $name = null) {
        $this->id = $id;
        $this->name = $name;
    }

    public static function fromBasicData(int $id, string $name): static {
        $new = new static($id, $name);
        return $new;
    }

    public static function fromJson(string $json): static {
        $data = json_decode($json);
        return new static($data['id'], $data['name']);
    }

    public static function fromXml(string $xml): static {
        // Custom logic here.
        $data = convert_xml_to_array($xml);
        $new = new static();
        $new->id = $data['id'];
        $new->name = $data['name'];
        return $new;
    }
}

$p1 = Product::fromBasicData(5, 'Widget');
$p2 = Product::fromJson($some_json_string);
$p3 = Product::fromXml($some_xml_string);  
```

The constructor may be made private or protected to prevent it from being called externally.If so, only a static method will be able to instantiate the class. Because they are in thesame class definition they have access to private methods, even if not of the same object instance. The private constructor is optional and may or may not make sense depending onthe use case. 

The three public static methods then demonstrate different ways of instantiating the object. 

• fromBasicData() takes the exact parameters that are needed, then creates theobject by calling the constructor and returning the result.

• fromJson() accepts a JSON string and does some pre-processing on it itselfto convert it into the format desired by the constructor. It then returns the new object.

• fromXml() accepts an XML string, preprocesses it, and then creates a bareobject. The constructor is still called, but as all of the parameters are optional the method skips them. It then assigns values to the object properties directly before returning the result.


In all three cases, the static keyword is translated into the name of the class the code is in.In this case, Product. 


#### Destructor 

    __destruct(): void

PHP possesses a destructor concept similar to that of otherobject-oriented languages, such as C++. The destructor method will becalled as soon as there are no other references to a particular object,or in any order during the shutdown sequence. 


Example #5 Destructor Example

```php
class MyDestructableClass 
{
    function __construct() {
        print "In constructor\n";
    }

    function __destruct() {
        print "Destroying " . __CLASS__ . "\n";
    }
}

$obj = new MyDestructableClass();  
```

Like constructors, parent destructors will not be called implicitly bythe engine. In order to run a parent destructor, one would have to explicitly call `parent::__destruct()` in the destructor body. Also like constructors, a child class may inherit the parent'sdestructor if it does not implement one itself. 

The destructor will be called even if script execution is stopped using exit(). Calling exit() in a destructorwill prevent the remaining shutdown routines from executing. 


Note: 

Destructors called during the script shutdown have HTTP headers already sent. The working directory in the script shutdown phase can be different with some SAPIs (e.g. Apache). 


Note: 

Attempting to throw an exception from a destructor (called in the time ofscript termination) causes a fatal error. 


### ===🗝 • Visibility

The visibility of a property, a method or (as of PHP 7.1.0) a constant can be defined by prefixing the declaration with the keywords `public`, `protected` or `private`.

Class members declared `public` can be accessed everywhere. 

Members declared `protected` can be accessed only within the class itself and by inheriting and parent classes. 

Members declared as `private` may only be accessed by theclass that defines the member. 


#### Property Visibility 

Class properties may be defined as public, private, orprotected. Properties declared without any explicit visibility keyword are defined as `public`. 




Example #1 Property declaration

```php
/**
 * Define MyClass
 */
class MyClass
{
    public $public = 'Public';
    protected $protected = 'Protected';
    private $private = 'Private';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass();
echo $obj->public; // Works
echo $obj->protected; // Fatal Error
echo $obj->private; // Fatal Error
$obj->printHello(); // Shows Public, Protected and Private


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // We can redeclare the public and protected properties, but not private
    public $public = 'Public2';
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public; // Works
echo $obj2->protected; // Fatal Error
echo $obj2->private; // Undefined
$obj2->printHello(); // Shows Public2, Protected2, Undefined
```




#### Method Visibility 

Class methods may be defined as public, private, orprotected. Methods declared without any explicit visibility keyword are defined as `public`. 




Example #2 Method Declaration

```php
/**
 * Define MyClass
 */
class MyClass
{
    // Declare a public constructor
    public function __construct() { }

    // Declare a public method
    public function MyPublic() { }

    // Declare a protected method
    protected function MyProtected() { }

    // Declare a private method
    private function MyPrivate() { }

    // This is public
    function Foo()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate();
    }
}

$myclass = new MyClass;
$myclass->MyPublic(); // Works
$myclass->MyProtected(); // Fatal Error
$myclass->MyPrivate(); // Fatal Error
$myclass->Foo(); // Public, Protected and Private work


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // This is public
    function Foo2()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate(); // Fatal Error
    }
}

$myclass2 = new MyClass2;
$myclass2->MyPublic(); // Works
$myclass2->Foo2(); // Public and Protected work, not Private

class Bar 
{
    public function test() {
        $this->testPrivate();
        $this->testPublic();
    }

    public function testPublic() {
        echo "Bar::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Bar::testPrivate\n";
    }
}

class Foo extends Bar 
{
    public function testPublic() {
        echo "Foo::testPublic\n";
    }
    
    private function testPrivate() {
        echo "Foo::testPrivate\n";
    }
}

$myFoo = new Foo();
$myFoo->test(); // Bar::testPrivate 
                // Foo::testPublic
```




#### Constant Visibility 

As of PHP 7.1.0, class constants may be defined as public, private, orprotected. Constants declared without any explicit visibility keyword are defined as public. 




Example #3 Constant Declaration as of PHP 7.1.0

```php
/**
 * Define MyClass
 */
class MyClass
{
    // Declare a public constant
    public const MY_PUBLIC = 'public';

    // Declare a protected constant
    protected const MY_PROTECTED = 'protected';

    // Declare a private constant
    private const MY_PRIVATE = 'private';

    public function foo()
    {
        echo self::MY_PUBLIC;
        echo self::MY_PROTECTED;
        echo self::MY_PRIVATE;
    }
}

$myclass = new MyClass();
MyClass::MY_PUBLIC; // Works
MyClass::MY_PROTECTED; // Fatal Error
MyClass::MY_PRIVATE; // Fatal Error
$myclass->foo(); // Public, Protected and Private work


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // This is public
    function foo2()
    {
        echo self::MY_PUBLIC;
        echo self::MY_PROTECTED;
        echo self::MY_PRIVATE; // Fatal Error
    }
}

$myclass2 = new MyClass2;
echo MyClass2::MY_PUBLIC; // Works
$myclass2->foo2(); // Public and Protected work, not Private
```




#### Visibility from other objects 

Objects of the same type will have access to each others private andprotected members even though they are not the same instances. This isbecause the implementation specific details are already known when insidethose objects. 


Example #4 Accessing private members of the same object type

```php
class Test
{
    private $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    private function bar()
    {
        echo 'Accessed the private method.';
    }

    public function baz(Test $other)
    {
        // We can change the private property:
        $other->foo = 'hello';
        var_dump($other->foo);

        // We can also call the private method:
        $other->bar();
    }
}

$test = new Test('test');

$test->baz(new Test('other'));
```

The above example will output:


string(5) "hello"
Accessed the private method.




### ===🗝 • Object Inheritance

Inheritance is a well-established programming principle, and PHP makes useof this principle in its object model. This principle will affect the way many classes and objects relate to one another. 

For example, when extending a class, the subclass inherits all of thepublic and protected methods, properties and constants from the parent class. Unless a class overrides those methods, they will retain their original functionality. 

This is useful for defining and abstracting functionality, and permits the implementation of additional functionality in similar objects without theneed to reimplement all of the shared functionality. 

Private methods of a parent class are not accessible to a child class. As a result,child classes may reimplement a private method themselves without regard for normal inheritance rules. Prior to PHP 8.0.0, however, final and static restrictions were applied to private methods. As of PHP 8.0.0, the only private method restriction that is enforced is private final constructors, as thatis a common way to "disable" the constructor when using static factory methods instead. 

The visibility of methods, properties and constants can be relaxed, e.g. a protected method can be marked as public, but they cannot be restricted, e.g. marking a public property as private. 


Note: 

Unless autoloading is used, the classes must be defined before they areused. If a class extends another, then the parent class must be declared before the child class structure. This rule applies to classes that inheritother classes and interfaces. 



Note: 

It is not allowed to override a read-write property with a readonly property or vice versa. 


```php
class A {
    public int $prop;
}
class B extends A {
    // Illegal: read-write -> readonly
    public readonly int $prop;
}
```



Example #1 Inheritance Example

```php
class Foo
{
    public function printItem($string)
    {
        echo 'Foo: ' . $string . PHP_EOL;
    }
    
    public function printPHP()
    {
        echo 'PHP is great.' . PHP_EOL;
    }
}

class Bar extends Foo
{
    public function printItem($string)
    {
        echo 'Bar: ' . $string . PHP_EOL;
    }
}

$foo = new Foo();
$bar = new Bar();
$foo->printItem('baz'); // Output: 'Foo: baz'
$foo->printPHP();       // Output: 'PHP is great' 
$bar->printItem('baz'); // Output: 'Bar: baz'
$bar->printPHP();       // Output: 'PHP is great'
```

### ===🗝 • Scope Resolution Operator (::)

The Scope Resolution Operator (also called Paamayim Nekudotayim) or in simpler terms, the double colon, is a token that allows access to static, constant, and overriddenproperties or methods of a class. 

When referencing these items from outside the class definition, usethe name of the class. 

It's possible to reference the class using a variable.The variable's value can not be a keyword (e.g. self, parent and static). 

Paamayim Nekudotayim would, at first, seem like a strange choice fornaming a double-colon. However, while writing the Zend Engine 0.5(which powers PHP 3), that's what the Zend team decided to call it.It actually does mean double-colon - in Hebrew! 


Example #1 :: from outside the class definition

```php
class MyClass {
    const CONST_VALUE = 'A constant value';
}

$classname = 'MyClass';
echo $classname::CONST_VALUE;

echo MyClass::CONST_VALUE;
```


Three special keywords self, parent and static are used to access properties or methods from insidethe class definition. 


Example #2 :: from inside the class definition

```php
class OtherClass extends MyClass
{
    public static $my_static = 'static var';

    public static function doubleColon() {
        echo parent::CONST_VALUE . "\n";
        echo self::$my_static . "\n";
    }
}

$classname = 'OtherClass';
$classname::doubleColon();

OtherClass::doubleColon();
```


When an extending class overrides the parents definition of a method,PHP will not call the parent's method. It's up to the extended classon whether or not the parent's method is called. This also applies to Constructors and Destructors, Overloading, and Magic method definitions. 


Example #3 Calling a parent's method

```php
class MyClass
{
    protected function myFunc() {
        echo "MyClass::myFunc()\n";
    }
}

class OtherClass extends MyClass
{
    // Override parent's definition
    public function myFunc()
    {
        // But still call the parent function
        parent::myFunc();
        echo "OtherClass::myFunc()\n";
    }
}

$class = new OtherClass();
$class->myFunc();
```

See also some examples of static call trickery. 

### ===🗝 • Static Keyword

Tip 
This page describes the use of the `static` keyword to define static methods and properties. static can also be used to define static variables and for late static bindings. Please refer to those pages for information on those meanings of static. 

Declaring class properties or methods as static makes them accessible without needing an instantiation of the class.These can also be accessed statically within an instantiated class object. 


#### Static methods 

Because static methods are callable without an instance ofthe object created, the pseudo-variable $this isnot available inside methods declared as static. 

Warning 
Calling non-static methods statically throws an Error. 

Prior to PHP 8.0.0, calling non-static methods statically were deprecated, andgenerated an E_DEPRECATED warning. 


Example #1 Static method example

```php
class Foo {
    public static function aStaticMethod() {
        // ...
    }
}

Foo::aStaticMethod();
$classname = 'Foo';
$classname::aStaticMethod();
```



#### Static properties 

Static properties are accessed using the Scope Resolution Operator(::) and cannot be accessed through the object operator(->). 

It's possible to reference the class using a variable.The variable's value cannot be a keyword (e.g. self, parent and static). 


Example #2 Static property example

```php
class Foo
{
    public static $my_static = 'foo';

    public function staticValue() {
        return self::$my_static;
    }
}

class Bar extends Foo
{
    public function fooStatic() {
        return parent::$my_static;
    }
}


print Foo::$my_static . "\n";

$foo = new Foo();
print $foo->staticValue() . "\n";
print $foo->my_static . "\n";      // Undefined "Property" my_static 

print $foo::$my_static . "\n";
$classname = 'Foo';
print $classname::$my_static . "\n";

print Bar::$my_static . "\n";
$bar = new Bar();
print $bar->fooStatic() . "\n";
```



Output of the above example in PHP 8 is similar to:


foo
foo

Notice: Accessing static property Foo::$my_static as non static in /in/V0Rvv on line 23

Warning: Undefined property: Foo::$my_static in /in/V0Rvv on line 23

foo
foo
foo
foo




### ===🗝 • Class Abstraction

PHP has abstract classes and methods. Classes defined as abstract cannot be instantiated, and any class thatcontains at least one abstract method must also be abstract. Methods defined as abstract simply declare the method's signature; they cannot define the implementation. 

When inheriting from an abstract class, all methods marked abstract inthe parent's class declaration must be defined by the child class, and follow the usual inheritance and signature compatibility rules. 


Example #1 Abstract class example

```php
abstract class AbstractClass
{
    // Force Extending class to define this method
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);

    // Common method
    public function printOut() {
        print $this->getValue() . "\n";
    }
}

class ConcreteClass1 extends AbstractClass
{
    protected function getValue() {
        return "ConcreteClass1";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass1";
    }
}

class ConcreteClass2 extends AbstractClass
{
    public function getValue() {
        return "ConcreteClass2";
    }

    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') ."\n";

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') ."\n";
```



The above example will output:


ConcreteClass1
FOO_ConcreteClass1
ConcreteClass2
FOO_ConcreteClass2



Example #2 Abstract class example

```php
abstract class AbstractClass
{
    // Our abstract method only needs to define the required arguments
    abstract protected function prefixName($name);

}

class ConcreteClass extends AbstractClass
{

    // Our child class may define optional arguments not in the parent's signature
    public function prefixName($name, $separator = ".") {
        if ($name == "Pacman") {
            $prefix = "Mr";
        } elseif ($name == "Pacwoman") {
            $prefix = "Mrs";
        } else {
            $prefix = "";
        }
        return "{$prefix}{$separator} {$name}";
    }
}

$class = new ConcreteClass;
echo $class->prefixName("Pacman"), "\n";
echo $class->prefixName("Pacwoman"), "\n";
```

The above example will output:


Mr. Pacman
Mrs. Pacwoman




### ===🗝 • Object Interfaces

Object interfaces allow you to create code which specifies which methods aclass must implement, without having to define how these methods areimplemented. Interfaces share a namespace with classes and traits, so they maynot use the same name. 

Interfaces are defined in the same way as a class, but with the `interface` keyword replacing the `class` keyword and without any of the methods havingtheir contents defined. 

All methods declared in an interface must be public; this is the nature of an interface. 

In practice, interfaces serve two complementary purposes: 

• To allow developers to create objects of different classes that may be used interchangeably because they implement the same interface or interfaces. A common example is multiple database access services,multiple payment gateways, or different caching strategies. Different implementations maybe swapped out without requiring any changes to the code that uses them. 

• To allow a function or method to accept and operate on a parameter that conforms to aninterface, while not caring what else the object may do or how it is implemented. These interfaces are often named like Iterable, Cacheable, Renderable, or so on to describe the significance of the behavior. 


Interfaces may define magic methods to require implementing classes toimplement those methods. 


Note: 

Although they are supported, including constructors in interfaces is strongly discouraged. Doing so significantly reduces the flexibility of the object implementing theinterface. Additionally, constructors are not enforced by inheritance rules, which can cause inconsistentand unexpected behavior. 




#### implements 

To implement an interface, the implements operator is used.All methods in the interface must be implemented within a class; failure to doso will result in a fatal error. Classes may implement more than one interfaceif desired by separating each interface with a comma. 

Warning 
A class can implement two interfaces which define a method with the same name, only if the method declaration in both interfaces is identical. 

Warning 
A class that implements an interface may use a different name for its parameters than the interface. However, as of PHP 8.0 the language supports named arguments, which means callers may rely on the parameter name in the interface. For that reason, it is strongly recommended that developers use the same parameter names as the interface being implemented. 


Note: 

Interfaces can be extended like classes using the extends operator. 



Note: 

The class implementing the interface must declare all methods in the interfacewith a compatible signature. 


#### Constants 

It's possible for interfaces to have constants. Interface constants work exactly like class constants. Prior to PHP 8.1.0, they cannot be overridden by a class/interface that inherits them. 


Examples 


Example #1 Interface example

```php
// Declare the interface 'Template'
interface Template
{
    public function setVariable($name, $var);
    public function getHtml($template);
}

// Implement the interface
// This will work
class WorkingTemplate implements Template
{
    private $vars = [];
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
  
    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }
 
        return $template;
    }
}

// This will not work
// Fatal error: Class BadTemplate contains 1 abstract methods
// and must therefore be declared abstract (Template::getHtml)
class BadTemplate implements Template
{
    private $vars = [];
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
}
```



Example #2 Extendable Interfaces

```php
interface A
{
    public function foo();
}

interface B extends A
{
    public function baz(Baz $baz);
}

// This will work
class C implements B
{
    public function foo() {}
    public function baz(Baz $baz) {}
}

// This will not work and result in a fatal error
class D implements B
{
    public function foo() {}
    public function baz(Foo $foo) {}
}
```



Example #3 Multiple interface inheritance

```php
interface A
{
    public function foo();
}

interface B
{
    public function bar();
}

interface C extends A, B
{
    public function baz();
}

class D implements C
{
    public function foo() {}
    public function bar() {}
    public function baz() {} 
}
```



Example #4 Interfaces with constants

```php
interface A
{
    const B = 'Interface constant';
}

// Prints: Interface constant
echo A::B;


class B implements A
{
    const B = 'Class constant';
}

// Prints: Class constant
// Prior to PHP 8.1.0, this will however not work because it was not
// allowed to override constants.
echo B::B;
```



Example #5 Interfaces with abstract classes

```php
interface A
{
    public function foo(string $s): string;

    public function bar(int $i): int;
}

// An abstract class may implement only a portion of an interface.
// Classes that extend the abstract class must implement the rest.
abstract class B implements A
{
    public function foo(string $s): string
    {
        return $s . PHP_EOL;
    }
}

class C extends B
{
    public function bar(int $i): int
    {
        return $i * 2;
    }
}
```



Example #6 Extending and implementing simultaneously

```php
class One
{
    /* ... */
}

interface Usable
{
    /* ... */
}

interface Updatable
{
    /* ... */
}

// The keyword order here is important. 'extends' must come first.
class Two extends One implements Usable, Updatable
{
    /* ... */
}
```


An interface, together with type declarations, provides a good way to make surethat a particular object contains particular methods. See instanceof operator and type declarations. 


### ===🗝 • Traits

PHP implements a way to reuse code called `Traits`. 

Traits are a mechanism for code reuse in single inheritance languages such as PHP. A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes living in different class hierarchies. The semantics of the combinationof Traits and classes is defined in a way which reduces complexity, and avoidsthe typical problems associated with `multiple inheritance` and `Mixins`. 

A Trait is similar to a class, but only intended to group functionality in afine-grained and consistent way. It is not possible to instantiate a Trait onits own. It is an addition to traditional inheritance and enables horizontalcomposition of behavior; that is, the application of class members without requiring inheritance. 


Example #1 Trait example

```php
trait ezcReflectionReturnInfo {
    function getReturnType() { /*1*/ }
    function getReturnDescription() { /*2*/ }
}

class ezcReflectionMethod extends ReflectionMethod {
    use ezcReflectionReturnInfo;
    /* ... */
}

class ezcReflectionFunction extends ReflectionFunction {
    use ezcReflectionReturnInfo;
    /* ... */
}
```



#### Precedence 

An inherited member from a base class is overridden by a member inserted by a Trait. The precedence order is that members from the current class override Trait methods, which in turn override inherited methods. 


Example #2 Precedence Order Example


An inherited method from a base class is overridden by the method inserted into MyHelloWorld from the SayWorld Trait. The behavior is the same for methods defined in the MyHelloWorld class. The precedence order is that methods from the current class override Trait methods, which in turn override methods from the base class. 

```php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}

class MyHelloWorld extends Base {
    use SayWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
```



The above example will output:


Hello World!



Example #3 Alternate Precedence Order Example

```php
trait HelloWorld {
    public function sayHello() {
        echo 'Hello World!';
    }
}

class TheWorldIsNotEnough {
    use HelloWorld;
    public function sayHello() {
        echo 'Hello Universe!';
    }
}

$o = new TheWorldIsNotEnough();
$o->sayHello();
```



The above example will output:


Hello Universe!


#### Multiple Traits 

Multiple Traits can be inserted into a class by listing them in the usestatement, separated by commas. 


Example #4 Multiple Traits Usage

```php
trait Hello {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait World {
    public function sayWorld() {
        echo 'World';
    }
}

class MyHelloWorld {
    use Hello, World;
    public function sayExclamationMark() {
        echo '!';
    }
}

$o = new MyHelloWorld();
$o->sayHello();
$o->sayWorld();
$o->sayExclamationMark();
```



The above example will output:


Hello World!




#### Conflict Resolution 

If two Traits insert a method with the same name, a fatal error is produced, if the conflict is not explicitly resolved. 

To resolve naming conflicts between Traits used in the same class, the `insteadof` operator needs to be used to choose exactly one of the conflicting methods. 

Since this only allows one to exclude methods, the asoperator can be used to add an alias to one of the methods. Note the as operator does not rename the method and it does notaffect any other method either. 


Example #5 Conflict Resolution


In this example, Talker uses the traits A and B.Since A and B have conflicting methods, it defines to usethe variant of smallTalk from trait B, and the variant of bigTalk fromtrait A. 


The Aliased_Talker makes use of the as operatorto be able to use B's bigTalk implementation under an additional alias talk. 

```php
trait A {
    public function smallTalk() {
        echo 'a';
    }
    public function bigTalk() {
        echo 'A';
    }
}

trait B {
    public function smallTalk() {
        echo 'b';
    }
    public function bigTalk() {
        echo 'B';
    }
}

class Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
    }
}

class Aliased_Talker {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
        B::bigTalk as talk;
    }
}
```




#### Changing Method Visibility 

Using the as syntax, one can also adjust the visibility of the method in the exhibiting class. 


Example #6 Changing Method Visibility

```php
trait HelloWorld {
    public function sayHello() {
        echo 'Hello World!';
    }
}

// Change visibility of sayHello
class MyClass1 {
    use HelloWorld { sayHello as protected; }
}

// Alias method with changed visibility
// sayHello visibility not changed
class MyClass2 {
    use HelloWorld { sayHello as private myPrivateHello; }
}
```


#### Traits Composed from Traits 

Just as classes can make use of traits, so can other traits. By using oneor more traits in a trait definition, it can be composed partially orentirely of the members defined in those other traits. 


Example #7 Traits Composed from Traits

```php
trait Hello {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait World {
    public function sayWorld() {
        echo 'World!';
    }
}

trait HelloWorld {
    use Hello, World;
}

class MyHelloWorld {
    use HelloWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
$o->sayWorld();
```



The above example will output:


Hello World!




#### Abstract Trait Members 

Traits support the use of abstract methods in order to impose requirementsupon the exhibiting class. Public, protected, and private methods are supported.Prior to PHP 8.0.0, only public and protected abstract methods were supported. 

Caution 
A concrete class fulfills this requirement by defining a concrete methodwith the same name; its signature may be different. 


Example #8 Express Requirements by Abstract Methods

```php
trait Hello {
    public function sayHelloWorld() {
        echo 'Hello'.$this->getWorld();
    }
    abstract public function getWorld();
}

class MyHelloWorld {
    private $world;
    use Hello;
    public function getWorld() {
        return $this->world;
    }
    public function setWorld($val) {
        $this->world = $val;
    }
}
```




#### Static Trait Members 

Traits can define static variables, static methods and static properties. 


Note: 

As of PHP 8.1.0, calling a static method, or accessing a static property directly on a trait is deprecated.Static methods and properties should only be accessed on a class using the trait. 



Example #9 Static Variables

```php
trait Counter {
    public function inc() {
        static $c = 0;
        $c = $c + 1;
        echo "$c\n";
    }
}

class C1 {
    use Counter;
}

class C2 {
    use Counter;
}

$o = new C1(); $o->inc(); // echo 1
$p = new C2(); $p->inc(); // echo 1
```



Example #10 Static Methods

```php
trait StaticExample {
    public static function doSomething() {
        return 'Doing something';
    }
}

class Example {
    use StaticExample;
}

Example::doSomething();
```



Example #11 Static Properties

```php
trait StaticExample {
    public static $static = 'foo';
}

class Example {
    use StaticExample;
}

echo Example::$static;
```




#### Properties 

Traits can also define properties. 


Example #12 Defining Properties

```php
trait PropertiesTrait {
    public $x = 1;
}

class PropertiesExample {
    use PropertiesTrait;
}

$example = new PropertiesExample;
$example->x;
```


If a trait defines a property then a class can not define a property withthe same name unless it is compatible (same visibility and initial value),otherwise a fatal error is issued. 


Example #13 Conflict Resolution

```php
trait PropertiesTrait {
    public $same = true;
    public $different = false;
}

class PropertiesExample {
    use PropertiesTrait;
    public $same = true;
    public $different = true; // Fatal error
}
```

### ===🗝 • Anonymous classes

Anonymous classes are useful when simple, one-off objects need to be created. 

```php
// Using an explicit class
class Logger
{
    public function log($msg)
    {
        echo $msg;
    }
}

$util->setLogger(new Logger());

// Using an anonymous class
$util->setLogger(new class {
    public function log($msg)
    {
        echo $msg;
    }
});  
```

They can pass arguments through to their constructors, extend other classes, implement interfaces, and use traits just like a normal class can: 


```php
class SomeClass {}
interface SomeInterface {}
trait SomeTrait {}

var_dump(new class(10) extends SomeClass implements SomeInterface {
    private $num;

    public function __construct($num)
    {
        $this->num = $num;
    }

    use SomeTrait;
});  
```

The above example will output:


object(class@anonymous)#1 (1) {
  ["Command line code0x104c5b612":"class@anonymous":private]=>
  int(10)
}


Nesting an anonymous class within another class does not give it access to any private or protected methods or properties of that outer class. In order to use the outer class' protected properties or methods, the anonymous class can extend the outer class. To use the private properties of the outer class in the anonymous class, they must be passed through its constructor: 


```php
class Outer
{
    private $prop = 1;
    protected $prop2 = 2;

    protected function func1()
    {
        return 3;
    }

    public function func2()
    {
        return new class($this->prop) extends Outer {
            private $prop3;

            public function __construct($prop)
            {
                $this->prop3 = $prop;
            }

            public function func3()
            {
                return $this->prop2 + $this->prop3 + $this->func1();
            }
        };
    }
}

echo (new Outer)->func2()->func3();  
```

The above example will output:


6


All objects created by the same anonymous class declaration are instances ofthat very class. 


```php
function anonymous_class()
{
    return new class {};
}

if (get_class(anonymous_class()) === get_class(anonymous_class())) {
    echo 'same class';
} else {
    echo 'different class';
}  
```

The above example will output:


same class



Note: 

Note that anonymous classes are assigned a name by the engine, asdemonstrated in the following example. This name has to be regarded animplementation detail, which should not be relied upon. 


```php
echo get_class(new class {});  
```

The above example will output something similar to:


class@anonymous/in/oNi1A0x7f8636ad2021


### ===🗝 • Overloading

Overloading in PHP provides means to dynamically 「create」 properties and methods. These dynamic entities are processed via magic methods one can establish in a class for various action types. 

The overloading methods are invoked when interacting with properties or methods that have not been declared or are not visible inthe current scope. The rest of this section will use the terms 「inaccessible properties」 and 「inaccessible methods」 to refer to this combination of declaration and visibility. 

All overloading methods must be defined as public. 


Note: 

None of the arguments of these magic methods can be passed by reference. 



Note: 

PHP's interpretation of 「overloading」 is different than most object-oriented languages. Overloading traditionally provides the ability to have multiple methods with the same name but different quantities and types of arguments. 



#### Property overloading 

```php
public __set(string $name, mixed $value): void

public __get(string $name): mixed

public __isset(string $name): bool

public __unset(string $name): void
```

`__set()` is run when writing data to inaccessible (protected or private) or non-existing properties. 

`__get()` is utilized for reading data frominaccessible (protected or private) or non-existing properties. 

`__isset()` is triggered by calling `isset()` or `empty()`on inaccessible (protected or private) or non-existing properties. 

`__unset()` is invoked when `unset()` is used on inaccessible (protected or private)or non-existing properties. 

The `$name` argument is the name of the property being interacted with. The `__set()`method's `$value` argument specifies the value the $name'ed property should be set to. 

Property overloading only works in object context. These magic methods will not be triggered in static context. Therefore these methods should not be declared static. A warning is issued if one of the magic overloading methods is declared static. 


Note: 

The return value of `__set()` is ignored because of the way PHP processes the assignment operator. Similarly, `__get()` is never called when chaining assignments together like this: 

 $a = $obj->b = 8; 




Example #1 Overloading properties via the `__get(), __set(), __isset(),  __unset()` methods 

```php
class PropertyTest
{
    /**  Location for overloaded data.  */
    private $data = array();

    /**  Overloading not used on declared properties.  */
    public $declared = 1;

    /**  Overloading only used on this when accessed outside the class.  */
    private $hidden = 2;

    public function __set($name, $value)
    {
        echo "Setting '$name' to '$value'\n";
        $this->data[$name] = $value;
    }

    public function __get($name)
    {
        echo "Getting '$name'\n";
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }

        $trace = debug_backtrace();
        trigger_error(
            'Undefined property via __get(): ' . $name .
            ' in ' . $trace[0]['file'] .
            ' on line ' . $trace[0]['line'],
            E_USER_NOTICE);
        return null;
    }

    public function __isset($name)
    {
        echo "Is '$name' set?\n";
        return isset($this->data[$name]);
    }

    public function __unset($name)
    {
        echo "Unsetting '$name'\n";
        unset($this->data[$name]);
    }

    /**  Not a magic method, just here for example.  */
    public function getHidden()
    {
        return $this->hidden;
    }
}


echo "<pre>\n";

$obj = new PropertyTest;

$obj->a = 1;
echo $obj->a . "\n\n";

var_dump(isset($obj->a));
unset($obj->a);
var_dump(isset($obj->a));
echo "\n";

echo $obj->declared . "\n\n";

echo "Let's experiment with the private property named 'hidden':\n";
echo "Privates are visible inside the class, so __get() not used...\n";
echo $obj->getHidden() . "\n";
echo "Privates not visible outside of class, so __get() is used...\n";
echo $obj->hidden . "\n";
```



The above example will output:


    Setting 'a' to '1'
    Getting 'a'
    1

    Is 'a' set?
    bool(true)
    Unsetting 'a'
    Is 'a' set?
    bool(false)

    1

    Let's experiment with the private property named 'hidden':
    Privates are visible inside the class, so __get() not used...
    2
    Privates not visible outside of class, so __get() is used...
    Getting 'hidden'


    Notice:  Undefined property via __get(): hidden in <file> on line 70 in <file> on line 29



#### Method overloading 

    public __call(string $name, array $arguments): mixed

    public static __callStatic(string $name, array $arguments): mixed

`__call()` is triggered when invoking inaccessible methods in an object context. 

`__callStatic()` is triggered when invoking inaccessible methods in a static context. 

The `$name` argument is the name of themethod being called. The `$arguments` argument is an enumerated array containing the parameterspassed to the $name'ed method. 


Example #2 Overloading methods via the `__call()` and `__callStatic()` methods 

```php
class MethodTest
{
    public function __call($name, $arguments)
    {
        // Note: value of $name is case sensitive.
        echo "Calling object method '$name' "
             . implode(', ', $arguments). "\n";
    }

    public static function __callStatic($name, $arguments)
    {
        // Note: value of $name is case sensitive.
        echo "Calling static method '$name' "
             . implode(', ', $arguments). "\n";
    }
}

$obj = new MethodTest;
$obj->runTest('in object context');

MethodTest::runTest('in static context');
```



The above example will output:


Calling object method 'runTest' in object context
Calling static method 'runTest' in static context


### ===🗝 • Object Iteration

PHP provides a way for objects to be defined so it is possible to iterate through a list of items, with, for example a foreach statement. By default, all visible properties will be used for the iteration. 


Example #1 Simple Object Iteration

```php
class MyClass
{
    public $var1 = 'value 1';
    public $var2 = 'value 2';
    public $var3 = 'value 3';

    protected $protected = 'protected var';
    private   $private   = 'private var';

    function iterateVisible() {
       echo "MyClass::iterateVisible:\n";
       foreach ($this as $key => $value) {
           print "$key => $value\n";
       }
    }
}

$class = new MyClass();

foreach($class as $key => $value) {
    print "$key => $value\n";
}
echo "\n";


$class->iterateVisible();
```



The above example will output:


var1 => value 1
var2 => value 2
var3 => value 3

MyClass::iterateVisible:
var1 => value 1
var2 => value 2
var3 => value 3
protected => protected var
private => private var


As the output shows, the foreach iterated through all of the visible properties that could be accessed. 


See Also 

• Generators
• Iterator
• IteratorAggregate 
• SPL Iterators


### ===🗝 • Magic Methods

Magic methods are special methods which override PHP's default's action when certain actions are performed on an object. 

Caution 
All methods names starting with __ are reserved by PHP. Therefore, it is not recommended to use such method names unless overriding PHP's behavior. 

The following method names are considered magical: 

    | __construct() | __destruct()    |
    | __call()      | __callStatic()  |
    | __get()       | __set()         |
    | __isset()     | __unset()       |
    | __sleep()     | __wakeup()      |
    | __serialize() | __unserialize() |
    | __toString()  |                 |
    | __invoke()    | __set_state()   |
    | __clone()     | __debugInfo()   |

Warning 
All magic methods, with the exception of `__construct()`, `__destruct()`, and `__clone()`, must be declared as public,otherwise an E_WARNING is emitted. Prior to PHP 8.0.0, no diagnostic was emitted for the magic methods `__sleep()`, `__wakeup()`, `__serialize()`, `__unserialize()`, and `__set_state()`. 

Warning 
If type declarations are used in the definition of a magic method, they must be identical to the signature described in this document. Otherwise, a fatal error is emitted. Prior to PHP 8.0.0, no diagnostic was emitted. However, `__construct()` and `__destruct()` must not declare a return type; otherwise a fatal error is emitted. 


#### `__sleep()` and `__wakeup()` 

    public __sleep(): array

    public __wakeup(): void

serialize() checks if the class has a function with the magic name `__sleep()`. If so, that function is executed prior to any serialization. It can clean up the objectand is supposed to return an array with the names of all variablesof that object that should be serialized.If the method doesn't return anything then null is serialized and E_NOTICE is issued. 


Note: 

It is not possible for `__sleep()` to return names of private properties in parent classes. Doing this will result in an E_NOTICE level error. Use `__serialize()` instead. 


The intended use of `__sleep()` is to commit pendingdata or perform similar cleanup tasks. Also, the function is useful if a very large objects doesn't need to be saved completely. 

Conversely, unserialize() checks for thepresence of a function with the magic name `__wakeup()`. If present, this function can reconstruct any resources that the object may have. 

The intended use of `__wakeup()` is to reestablish any database connections that may have been lost during serialization and perform other reinitialization tasks. 


Example #1 Sleep and wakeup

```php
class Connection
{
    protected $link;
    private $dsn, $username, $password;
    
    public function __construct($dsn, $username, $password)
    {
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connect();
    }
    
    private function connect()
    {
        $this->link = new PDO($this->dsn, $this->username, $this->password);
    }
    
    public function __sleep()
    {
        return array('dsn', 'username', 'password');
    }
    
    public function __wakeup()
    {
        $this->connect();
    }
}
``` 


#### `__serialize()` and `__unserialize()` 

    public __serialize(): array

    public __unserialize(array $data): void

serialize() checks if the class has a function withthe magic name `__serialize()`. If so, that function is executed prior to any serialization. It must construct and return an as sociative array of key/value pairs that represent the serialized form of the object. If no array is returned a TypeError will be thrown. 


Note: 

If both `__serialize()` and `__sleep()` are defined in the same object, only `__serialize()` will be called. `__sleep()` will be ignored. If the object implements the Serializable interface, the interface's serialize() method will be ignored and `__serialize()`used instead. 


The intended use of `__serialize()` is to define a serialization-friendly arbitrary representation of the object. Elements of the array may correspond to properties of the object butthat is not required. 

Conversely, unserialize() checks for the presence of a function with the magic name `__unserialize()`. If present, this function will be passed the restored array that was returned from `__serialize()`. It maythen restore the properties of the object from that array as appropriate. 


Note: 

If both `__unserialize()` and `__wakeup()` are defined in the same object, only `__unserialize()` will be called. `__wakeup()` will be ignored. 



Note: 

This feature is available as of PHP 7.4.0. 



Example #2 Serialize and unserialize

```php
class Connection
{
    protected $link;
    private $dsn, $username, $password;

    public function __construct($dsn, $username, $password)
    {
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connect();
    }

    private function connect()
    {
        $this->link = new PDO($this->dsn, $this->username, $this->password);
    }

    public function __serialize(): array
    {
        return [
          'dsn' => $this->dsn,
          'user' => $this->username,
          'pass' => $this->password,
        ];
    }

    public function __unserialize(array $data): void
    {
        $this->dsn = $data['dsn'];
        $this->username = $data['user'];
        $this->password = $data['pass'];

        $this->connect();
    }
}
```


#### `__toString()` 

    public __toString(): string

The `__toString()` method allows a class to decide how it will react when it is treated like a string. For example, what echo $obj; will print. 

Warning 
As of PHP 8.0.0, the return value follows standard PHP type semantics,meaning it will be coerced into a string if possible and if strict typingis disabled. 

As of PHP 8.0.0, any class that contains a `__toString()` method will also implicitly implement the Stringable interface, and willthus pass type checks for that interface. Explicitly implementing the interface anyway isrecommended. 

In PHP 7.4, the returned value must be a string, otherwise an Error is thrown. 

Prior to PHP 7.4.0, the returned value must be a string, otherwise a fatal E_RECOVERABLE_ERROR is emitted. 

Warning 
It was not possible to throw an exception from within a `__toString()` method prior to PHP 7.4.0. Doing so will result in a fatal error. 


Example #3 Simple example

```php
// Declare a simple class
class TestClass
{
    public $foo;

    public function __construct($foo)
    {
        $this->foo = $foo;
    }

    public function __toString()
    {
        return $this->foo;
    }
}

$class = new TestClass('Hello');
echo $class;
```



The above example will output:


Hello



#### `__invoke()` 

    __invoke( ...$values): mixed

The `__invoke()` method is called when a script tries to call an object as a function. 


Example #4 Using `__invoke()`

```php
class CallableClass
{
    public function __invoke($x)
    {
        var_dump($x);
    }
}
$obj = new CallableClass;
$obj(5);
var_dump(is_callable($obj));
```



The above example will output:


int(5)
bool(true)



#### `__set_state()` 

    static __set_state(array $properties): object

This static method is called for classes exported by var_export(). 

The only parameter of this method is an array containing exported properties in the form ['property' => value, ...]. 


Example #5 Using `__set_state()`

```php
class A
{
    public $var1;
    public $var2;

    public static function __set_state($an_array)
    {
        $obj = new A;
        $obj->var1 = $an_array['var1'];
        $obj->var2 = $an_array['var2'];
        return $obj;
    }
}

$a = new A;
$a->var1 = 5;
$a->var2 = 'foo';

$b = var_export($a, true);
var_dump($b);
eval('$c = ' . $b . ';');
var_dump($c);
```



The above example will output:


    string(60) "A::__set_state(array(
       'var1' => 5,
       'var2' => 'foo',
    ))"
    object(A)#2 (2) {
      ["var1"]=>
      int(5)
      ["var2"]=>
      string(3) "foo"
    }



Note: When exporting an object, var_export() does not check whether `__set_state()` isimplemented by the object's class, so re-importing objects will result in an Error exception,if `__set_state()` is not implemented. Particularly, this affects someinternal classes.  It is the responsibility of the programmer to verify that only objects willbe re-imported, whose class implements `__set_state()`.  


#### `__debugInfo()` 

    __debugInfo(): array

This method is called by var_dump() when dumping anobject to get the properties that should be shown. If the method isn't defined on an object, then all public, protected and private properties will be shown. 


Example #6 Using `__debugInfo()`

```php
class C {
    private $prop;

    public function __construct($val) {
        $this->prop = $val;
    }

    public function __debugInfo() {
        return [
            'propSquared' => $this->prop ** 2,
        ];
    }
}

var_dump(new C(42));
```



The above example will output:


object(C)#1 (1) {
  ["propSquared"]=>
  int(1764)
}




### ===🗝 • Final Keyword


The `final` keyword prevents child classes from overriding a method or constant by prefixing the definition with final. If the class itself is being defined final then it cannot be extended. 


Example #1 Final methods example

```php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called\n";
   }
}
// Results in Fatal error: Cannot override final method BaseClass::moreTesting()
```






Example #2 Final class example

```php
final class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }

   // As the class is already final, the final keyword is redundant
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
}
// Results in Fatal error: Class ChildClass may not inherit from final class (BaseClass)
```






Example #3 Final constants example as of PHP 8.1.0

```php
class Foo
{
    final public const X = "foo";
}

class Bar extends Foo
{
    public const X = "bar";
}

// Fatal error: Bar::X cannot override final constant Foo::X
```


Note: Properties cannot be declared final: only classes, methods, and constants (as of PHP 8.1.0) may be declared as final.  As of PHP 8.0.0, private methods may not be declared final except for the constructor. 

### ===🗝 • Object Cloning


Creating a copy of an object with fully replicated properties is not always the wanted behavior. A good example of the need for copy constructors, is if you have an object which represents a GTK window and the object holds the resource of this GTK window, when you create a duplicate you might want to create a new window with the same properties and have thenew object hold the resource of the new window. Another example is if yourobject holds a reference to another object which it uses and when your eplicate the parent object you want to create a new instance of this other object so that the replica has its own separate copy. 

An object copy is created by using the clone keyword(which calls the object's `__clone()` method if possible). 



$copy_of_object = clone $object;


When an object is cloned, PHP will perform a shallow copy of all of theobject's properties. Any properties that are references to other variableswill remain references. 

    __clone(): void

Once the cloning is complete, if a `__clone()` method is defined, then the newly created object's `__clone()` method will be called, to allow any necessary properties that need to be changed. 


Example #1 Cloning an object

```php
class SubObject
{
    static $instances = 0;
    public $instance;

    public function __construct() {
        $this->instance = ++self::$instances;
    }

    public function __clone() {
        $this->instance = ++self::$instances;
    }
}

class MyCloneable
{
    public $object1;
    public $object2;

    function __clone()
    {
        // Force a copy of this->object, otherwise
        // it will point to same object.
        $this->object1 = clone $this->object1;
    }
}

$obj = new MyCloneable();

$obj->object1 = new SubObject();
$obj->object2 = new SubObject();

$obj2 = clone $obj;


print("Original Object:\n");
print_r($obj);

print("Cloned Object:\n");
print_r($obj2);
```



The above example will output:


Original Object:
MyCloneable Object
(
    [object1] => SubObject Object
        (
            [instance] => 1
        )

    [object2] => SubObject Object
        (
            [instance] => 2
        )

)
Cloned Object:
MyCloneable Object
(
    [object1] => SubObject Object
        (
            [instance] => 3
        )

    [object2] => SubObject Object
        (
            [instance] => 2
        )

)


It is possible to access a member of a freshly clonedobject in a single expression: 


Example #2 Access member of freshly cloned object

```php
$dateTime = new DateTime();
echo (clone $dateTime)->format('Y');
```



The above example will output something similar to:


2016


### ===🗝 • Comparing Objects

When using the comparison operator (==), object variables are compared in a simple manner, namely: Two object instances are equal if they have the same attributes and values (values are compared with ==), and areinstances of the same class. 

When using the identity operator (===),object variables are identical if and only if they refer to the same instance of the same class. 

An example will clarify these rules. 


Example #1 Example of object comparison

```php
function bool2str($bool)
{
    if ($bool === false) {
        return 'FALSE';
    } else {
        return 'TRUE';
    }
}

function compareObjects(&$o1, &$o2)
{
    echo 'o1 == o2 : ' . bool2str($o1 == $o2) . "\n";
    echo 'o1 != o2 : ' . bool2str($o1 != $o2) . "\n";
    echo 'o1 === o2 : ' . bool2str($o1 === $o2) . "\n";
    echo 'o1 !== o2 : ' . bool2str($o1 !== $o2) . "\n";
}

class Flag
{
    public $flag;

    function __construct($flag = true) {
        $this->flag = $flag;
    }
}

class OtherFlag
{
    public $flag;

    function __construct($flag = true) {
        $this->flag = $flag;
    }
}

$o = new Flag();
$p = new Flag();
$q = $o;
$r = new OtherFlag();

echo "Two instances of the same class\n";
compareObjects($o, $p);

echo "\nTwo references to the same instance\n";
compareObjects($o, $q);

echo "\nInstances of two different classes\n";
compareObjects($o, $r);
```



The above example will output:


Two instances of the same class
o1 == o2 : TRUE
o1 != o2 : FALSE
o1 === o2 : FALSE
o1 !== o2 : TRUE

Two references to the same instance
o1 == o2 : TRUE
o1 != o2 : FALSE
o1 === o2 : TRUE
o1 !== o2 : FALSE

Instances of two different classes
o1 == o2 : FALSE
o1 != o2 : TRUE
o1 === o2 : FALSE
o1 !== o2 : TRUE




Note: 

Extensions can define own rules for their objects comparison(==). 


### ===🗝 • Late Static Bindings

PHP implements a feature called late static bindings which can be used to reference the called class in a context of static inheritance. 

More precisely, late static bindings work by storing the class named in the last "non-forwarding call". In case of static method calls, this is the class explicitly named (usually the one on the left of the ::operator); in case of non static method calls, it is the class of the object. A "forwarding call" is a static one that is introduced by self::, parent::, static::, or, if goingup in the class hierarchy, forward_static_call(). The function get_called_class() can be used to retrievea string with the name of the called class and static::introduces its scope. 

This feature was named "late static bindings" with an internal perspective inmind. "Late binding" comes from the fact that static::will not be resolved using the class where the method is defined but it willrather be computed using runtime information. It was also called a "static binding" as it can be used for (but is notlimited to) static method calls. 


#### Limitations of self:: 

Static references to the current class like self:: or __CLASS__ are resolved using the class in which the function belongs, as in where it was defined: 


Example #1 self:: usage

```php
class A {
    public static function who() {
        echo __CLASS__;
    }
    public static function test() {
        self::who();
    }
}

class B extends A {
    public static function who() {
        echo __CLASS__;
    }
}

B::test();
```



The above example will output:


A



#### Late Static Bindings' usage 

Late static bindings tries to solve that limitation by introducing a keyword that references the class that was initially called at runtime. Basically, a keyword that would allow referencing B from test() in the previous example. It was decided not to introduce a new keyword but rather use static that was already reserved. 


Example #2 static:: simple usage

```php
class A {
    public static function who() {
        echo __CLASS__;
    }
    public static function test() {
        static::who(); // Here comes Late Static Bindings
    }
}

class B extends A {
    public static function who() {
        echo __CLASS__;
    }
}

B::test();
```



The above example will output:


B



Note: 

In non-static contexts, the called class will be the class of the object instance. Since `$this->` will try to call private methods from the same scope, using `static::` may give different results. Another difference is that `static::` can only refer to static properties. 



Example #3 static:: usage in a non-static context

```php
class A {
    private function foo() {
        echo "success!\n";
    }
    public function test() {
        $this->foo();
        static::foo();
    }
}

class B extends A {
   /* foo() will be copied to B, hence its scope will still be A and
    * the call be successful */
}

class C extends A {
    private function foo() {
        /* original method is replaced; the scope of the new one is C */
    }
}

$b = new B();
$b->test();
$c = new C();
$c->test();   //fails
```



The above example will output:


success!
success!
success!


Fatal error:  Call to private method C::foo() from context 'A' in /tmp/test.php on line 9



Note: 

Late static bindings' resolution will stop at a fully resolved static call with no fallback. On the other hand, static calls using keywords like `parent::` or `self::` will forward the calling information. 


Example #4 Forwarding and non-forwarding calls

```php
class A {
    public static function foo() {
        static::who();
    }

    public static function who() {
        echo __CLASS__."\n";
    }
}

class B extends A {
    public static function test() {
        A::foo();
        parent::foo();
        self::foo();
    }

    public static function who() {
        echo __CLASS__."\n";
    }
}
class C extends B {
    public static function who() {
        echo __CLASS__."\n";
    }
}

C::test();
```



The above example will output:


A
C
C


### ===🗝 • Objects and references

One of the key-points of PHP OOP that is often mentioned is that "objects are passed by references by default". This is not completely true. This section rectifies that general thought using some examples. 

A PHP reference is an alias, which allows two different variables to write to the same value. In PHP, an object variable doesn't contain the object itself as value. It only contains an object identifier which allows object accessors to find the actual object. When an object is sent by argument, returned or assigned to another variable, the different variables are not aliases: they hold a copy of the identifier, which points to the same object. 


Example #1 References and Objects

```php
class A {
    public $foo = 1;
}  

$a = new A;
$b = $a;     // $a and $b are copies of the same identifier
             // ($a) = ($b) = <id>
$b->foo = 2;
echo $a->foo."\n";


$c = new A;
$d = &$c;    // $c and $d are references
             // ($c,$d) = <id>
$d->foo = 2;
echo $c->foo."\n";


$e = new A;

function foo($obj) {
    // ($obj) = ($e) = <id>
    $obj->foo = 2;
}

foo($e);
echo $e->foo."\n";
```



The above example will output:


2
2
2


### ===🗝 • Object Serialization

Serializing objects - objects in sessions 

serialize() returns a string containing a byte-stream representation of any value that can be stored in PHP. unserialize() can use this string to recreate the original variable values. Using serialize to save an object will save all variables in an object. The methods in an object will not be saved, only the name ofthe class. 

In order to be able to unserialize() an object, the class of that object needs to be defined. That is, if you have an object of class A and serialize this, you'll get a string that refers to class A and contains all values of variables contained in it. If you want to be able to unserialize this in another file, an object of class A, the definition of class A must be present in that file first. This can be done for example by storing the class definition of class Ain an include file and including this file or making use of the `spl_autoload_register()` function. 


```php
// classa.inc:
  
  class A {
      public $one = 1;
    
      public function show_one() {
          echo $this->one;
      }
  }
  
// page1.php:

  include("classa.inc");
  
  $a = new A;
  $s = serialize($a);
  // store $s somewhere where page2.php can find it.
  file_put_contents('store', $s);

// page2.php:
  
  // this is needed for the unserialize to work properly.
  include("classa.inc");

  $s = file_get_contents('store');
  $a = unserialize($s);

  // now use the function show_one() of the $a object.  
  $a->show_one();
```


It is strongly recommended that if an application serializes objects, for uselater in the application, that the application includes the class definition for that object throughout the application. Not doing so might result in anobject being unserialized without a class definition, which will result in PHP giving the object a class of `__PHP_Incomplete_Class_Name`, which has no methods and would render the object useless. 

So if in the example above $a became part of a sessionby running `session_register("a")`, you should include the file `classa.inc` on all of your pages, not only `page1.php` and `page2.php`. 

Beyond the above advice, note that you can also hook into the serialization and unserialization events on an object using the `__sleep()` and `__wakeup()` methods. Using `__sleep()` also allows you to only serialize a subset of the object's properties. 


### ===🗝 • Covariance and Contravariance

In PHP 7.2.0, partial contravariance was introduced by removing type restrictions on parameters in a child method. As of PHP 7.4.0, full covariance and contravariance support was added. 

Covariance allows a child's method to return a more specific type than the return typeof its parent's method. Whereas, contravariance allows a parameter type to be lesss pecific in a child method, than that of its parent. 

A type declaration is considered more specific in the following case: 

◦ A type is removed from a union type  
◦ A type is added to an intersection type  
◦ A class type is changed to a child class type  
◦ iterable is changed to array or Traversable  

A type class is considered less specific if the opposite is true. 


#### Covariance 

To illustrate how covariance works, a simple abstract parent class, Animalis created. Animal will be extended by children classes, Cat, and Dog. 


```php
abstract class Animal
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    abstract public function speak();
}

class Dog extends Animal
{
    public function speak()
    {
        echo $this->name . " barks";
    }
}

class Cat extends Animal 
{
    public function speak()
    {
        echo $this->name . " meows";
    }
}
```

Note that there aren't any methods which return values in this example. A few factories will be added which return a new object of class type Animal, Cat, or Dog. 


```php
interface AnimalShelter
{
    public function adopt(string $name): Animal;
}

class CatShelter implements AnimalShelter
{
    public function adopt(string $name): Cat // instead of returning class type Animal, it can return class type Cat
    {
        return new Cat($name);
    }
}

class DogShelter implements AnimalShelter
{
    public function adopt(string $name): Dog // instead of returning class type Animal, it can return class type Dog
    {
        return new Dog($name);
    }
}

$kitty = (new CatShelter)->adopt("Ricky");
$kitty->speak();
echo "\n";

$doggy = (new DogShelter)->adopt("Mavrick");
$doggy->speak();  
```

The above example will output:


Ricky meows
Mavrick barks



#### Contravariance 

Continuing with the previous example with the classes Animal, Cat, and Dog, a class called Food and AnimalFood will be included, and a method eat(AnimalFood $food) is added to the Animal abstract class. 


```php
class Food {}

class AnimalFood extends Food {}

abstract class Animal
{
    protected string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function eat(AnimalFood $food)
    {
        echo $this->name . " eats " . get_class($food);
    }
}
```

In order to see the behavior of contravariance, the eat method is overridden in the Dog class to allowany Food type object. The Cat class remains unchanged. 


```php
class Dog extends Animal
{
    public function eat(Food $food) {
        echo $this->name . " eats " . get_class($food);
    }
}
```

The next example will show the behavior of contravariance. 


```php
$kitty = (new CatShelter)->adopt("Ricky");
$catFood = new AnimalFood();
$kitty->eat($catFood);
echo "\n";

$doggy = (new DogShelter)->adopt("Mavrick");
$banana = new Food();
$doggy->eat($banana);
```

The above example will output:


Ricky eats AnimalFood
Mavrick eats Food


But what happens if $kitty tries to eat the $banana? 


    $kitty->eat($banana); 


The above example will output:


Fatal error: Uncaught TypeError: Argument 1 passed to Animal::eat() must be an instance of AnimalFood, instance of Food given


### ===🗝 • OOP Changelog

Changes to the PHP OOP model are logged here. Descriptions and other notes regarding these features are documented within the OOP model documentation. 


| Version | Description

✅ 8.1.0 Added: Support for the final modifier for class constants. Also, interface constants become overridable by default.  

⚠7.4.0 Changed: It is now possible to throw exception within `__toString()`.  

✅ 7.4.0 Added: Support for limited return type covariance and argumenttype contravariance. Full variance support is only available ifautoloading is used. Inside a single file only non-cyclic typereferences are possible.  

✅ 7.4.0 Added: It is now possible to type class properties.  

🚫 7.3.0 Incompatibility: Argument unpacking of Traversables with non-int keys is no longersupported. This behaviour was not intended and thus has been removed.  

🚫 7.3.0 Incompatibility: In previous versions it was possible to separate thestatic properties by assigning a reference. This has been removed.  

⚠7.3.0 Changed: The instanceofoperator now allows literals as the first operand, in which case theresult is always false.  

⛔ 7.2.0 Deprecated: The `__autoload()` method has been deprecated in favour of spl_autoload_register().  

⚠7.2.0 Changed: The following name cannot be used to name classes, interfaces,or traits: object.  

⚠7.2.0 Changed: A trailing comma can now be added to the group-use syntaxfor namespaces.  

⚠7.2.0 Changed: Parameter type widening. Parameter types from overriddenmethods and from interface implementations may now be omitted.  

⚠7.2.0 Changed: Abstract methods can now be overridden when an abstract classextends another abstract class.  

⚠7.1.0 Changed: The following names cannot be used to name classes, interfaces,or traits: void and iterable.  

✅ 7.1.0 Added: It is now possible to specify the visibility ofclass constants.  

⛔ 7.0.0 Deprecated: Static callsto methods that are not declared static.  

⛔ 7.0.0 Deprecated: PHP 4 style constructor. I.e. methods that have the same name as the classthey are defined in.  

✅ 7.0.0 Added: Group use declaration: classes, functionsand constants being imported from the same namespace can now be grouped together in a single use statement.  

✅ 7.0.0 Added: Support for anonymous classeshas been added via new class.  

🚫 7.0.0 Incompatibility: Iterating over a non-Traversable object will now have the same behaviour as iterating over by-reference arrays.  

⚠7.0.0 Changed: Defining (compatible) properties in two used traits no longertriggers an error.  

✅ 5.6.0 Added: The `__debugInfo()` method.  

✅ 5.5.0 Added: The ::class magic constant.  

✅ 5.5.0 Added: finally to handle exceptions.  

✅ 5.4.0 Added: traits.  

⚠5.4.0 Changed: If an abstract classdefines a signature for the constructor it will now be enforced.  

⚠5.3.3 Changed: Methods with the same name as the last element ofa namespaced class name will no longer be treated as constructor. This change doesn'taffect non-namespaced classes.  

⚠5.3.0 Changed: Classes that implement interfaces with methods that have defaultvalues in the prototype are no longer required to match the interface's defaultvalue.  

⚠5.3.0 Changed: It's now possible to reference the class using a variable (e.g., echo $classname::constant;).The variable's value can not be a keyword (e.g., self, parent or static).  

⚠5.3.0 Changed: An E_WARNING level error is issued ifthe magic overloading methods are declared static. It also enforces the public visibility requirement.  

⚠5.3.0 Changed: Prior to 5.3.0, exceptions thrown in the `__autoload()` function could not becaught in the catch block, andwould result in a fatal error. Exceptions now thrown in the `__autoload` function can be caught in the catch block, withone provison. If throwing a custom exception, then the custom exception class mustbe available. The `__autoload` function may be used recursively to autoload thecustom exception class.  

✅ 5.3.0 Added: The `__callStatic method`.  

✅ 5.3.0 Added: heredoc and nowdoc support for class const and property definitions. Note: heredoc values must follow the same rules as double-quoted strings,(e.g. no variables within).  

✅ 5.3.0 Added: Late Static Bindings.  

✅ 5.3.0 Added: The `__invoke()` method.  

⚠5.2.0 Changed: The `__toString()`method was only called when it was directly combined with echo or print. But now, it is called in any string context (e.g. in printf() with %s modifier) but notin other types contexts (e.g. with %d modifier). As of PHP 5.2.0, converting objects without a `__toString method` to stringemits a E_RECOVERABLE_ERROR level error.  

⚠5.1.3 Changed: In previous versions of PHP 5, the use of varwas considered deprecated and would issue an E_STRICT level error. It's no longer deprecated, therefore does not emit the error.  

⚠5.1.0 Changed: The `__set_state()` static method is now called for classes exported by var_export().  

✅ 5.1.0 Added: The `__isset()`and `__unset()` methods.  


## ==⚡ • Namespaces

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

What are namespaces? In the broadest definition namespaces are a way of encapsulating items. This can be seen as an abstract concept in many places. For example, in any operating system directories serve to group related files, and act as a namespace forthe files within them. As a concrete example, the file foo.txt canexist in both directory /home/greg and in /home/other,but two copies of foo.txt cannot co-exist in the same directory. Inaddition, to access the foo.txt file outside of the /home/greg directory, we must prepend the directory name to the filename using the directory separator to get /home/greg/foo.txt. Thissame principle extends to namespaces in the programming world. 

In the PHP world, namespaces are designed to solve two problems that authorsof libraries and applications encounter when creating re-usable code elementssuch as classes or functions: 


1. Name collisions between code you create, andinternal PHP classes/functions/constants or third-party classes/functions/constants.  

2. Ability to alias (or shorten) Extra_Long_Names designed to alleviate the first problem,improving readability of source code.  


PHP Namespaces provide a way in which to group related classes, interfaces,functions and constants. Here is an example of namespace syntax in PHP: 


Example #1 Namespace syntax example

```php
namespace my\name; // see "Defining Namespaces" section

class MyClass {}
function myfunction() {}
const MYCONST = 1;

$a = new MyClass;
$c = new \my\name\MyClass; // see "Global Space" section

$a = strlen('hi'); // see "Using namespaces: fallback to global
                   // function/constant" section

$d = namespace\MYCONST; // see "namespace operator and __NAMESPACE__
                        // constant" section
$d = __NAMESPACE__ . '\MYCONST';
echo constant($d); // see "Namespaces and dynamic language features" section
```


Note: Namespace names are case-insensitive.  


Note: 

The Namespace name PHP, and compound names startingwith this name (like PHP\Classes) are reserved for internal language useand should not be used in the userspace code. 

### ===🗝 • Defining namespaces
(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Much like directories and files, PHP namespaces also contain the ability to specifya hierarchy of namespace names. Thus, a namespace name can be defined withsub-levels: 


Example #1 Declaring a single namespace with hierarchy



<?php
namespace MyProject\Sub\Level;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

?>  
The above example creates constant MyProject\Sub\Level\CONNECT_OK,class MyProject\Sub\Level\Connection and function MyProject\Sub\Level\connect. 

### ===🗝 • Declaring sub-namespaces

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Much like directories and files, PHP namespaces also contain the ability to specifya hierarchy of namespace names. Thus, a namespace name can be defined with sub-levels: 


Example #1 Declaring a single namespace with hierarchy

```php
namespace MyProject\Sub\Level;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
```

The above example creates:

- constant MyProject\Sub\Level\CONNECT_OK, 
- class MyProject\Sub\Level\Connection and 
- function MyProject\Sub\Level\connect. 


### ===🗝 • Defining multiple namespaces in the same file


(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Multiple namespaces may also be declared in the same file. There are two allowed syntaxes. 


Example #1 Declaring multiple namespaces, simple combination syntax

```php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
```



This syntax is not recommended for combining namespaces into a single file. Instead it is recommended to use the alternate bracketed syntax. 




Example #2 Declaring multiple namespaces, bracketed syntax

```php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace AnotherProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}
```



It is strongly discouraged as a coding practice to combine multiple namespaces intothe same file. The primary use case is to combine multiple PHP scripts into the samefile. 

To combine global non-namespaced code with namespaced code, only bracketed syntax issupported. Global code should beencased in a namespace statement with no namespace name as in: 


Example #3 Declaring multiple namespaces and unnamespaced code

```php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
```



No PHP code may exist outside of the namespace brackets except for an openingdeclare statement. 


Example #4 Declaring multiple namespaces and unnamespaced code

```php
declare(encoding='UTF-8');
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // global code
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
```

### ===🗝 • Using namespaces: Basics

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Before discussing the use of namespaces, it is important to understand how PHP knows which namespaced element your code is requesting. A simple analogy can be made between PHP namespaces and a file system. There are three ways to access a file in afile system: 

1. Relative file name like foo.txt. This resolves to currentdirectory/foo.txt where currentdirectory is the directory currently occupied. So if the current directory is /home/foo, the name resolves to /home/foo/foo.txt.  

2. Relative path name like subdirectory/foo.txt. This resolvesto currentdirectory/subdirectory/foo.txt.  

3. Absolute path name like /main/foo.txt. This resolvesto /main/foo.txt.  
The same principle can be applied to namespaced elements in PHP. Forexample, a class name can be referred to in three ways: 

    1. Unqualified name, or an unprefixed class name like `$a = new foo();` or `foo::staticmethod();`. If the current namespace is `currentnamespace`, this resolves to `currentnamespace\foo`. Ifthe code is global, non-namespaced code, this resolves to foo.  One caveat: unqualified names for functions and constants willresolve to global functions and constants if the namespaced function or constantis not defined. See Using namespaces: fallback to global function/constant for details.  

    2. Qualified name, or a prefixed class name like `$a = new subnamespace\foo();` or `subnamespace\foo::staticmethod();`. If the current namespace is `currentnamespace`, this resolves to `currentnamespace\subnamespace\foo`. If the code is global, non-namespaced code, this resolves to `subnamespace\foo`.  

    3. Fully qualified name, or a prefixed name with global prefix operator like `$a = new \currentnamespace\foo();` or `\currentnamespace\foo::staticmethod();`. This always resolvesto the literal name specified in the code, `currentnamespace\foo`.  


Here is an example of the three kinds of syntax in actual code: 


file1.php

```php
namespace Foo\Bar\subnamespace;

const FOO = 1;
function foo() {}
class foo
{
    static function staticmethod() {}
}
```


file2.php

```php
namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo() {}
class foo
{
    static function staticmethod() {}
}

/* Unqualified name */
foo(); // resolves to function Foo\Bar\foo
foo::staticmethod(); // resolves to class Foo\Bar\foo, method staticmethod
echo FOO; // resolves to constant Foo\Bar\FOO

/* Qualified name */
subnamespace\foo(); // resolves to function Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // resolves to class Foo\Bar\subnamespace\foo,
                                  // method staticmethod
echo subnamespace\FOO; // resolves to constant Foo\Bar\subnamespace\FOO
                                  
/* Fully qualified name */
\Foo\Bar\foo(); // resolves to function Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // resolves to class Foo\Bar\foo, method staticmethod
echo \Foo\Bar\FOO; // resolves to constant Foo\Bar\FOO
```

Note that to access any globalclass, function or constant, a fully qualified name can be used, such as \strlen() or \Exception or \INI_ALL. 


Example #1 Accessing global classes, functions and constants from within a namespace

```php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // calls global function strlen
$b = \INI_ALL; // accesses global constant INI_ALL
$c = new \Exception('error'); // instantiates global class Exception
```

### ===🗝 • Namespaces and dynamic language features

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

PHP's implementation of namespaces is influenced by its dynamic nature as a programming language. Thus, to convert code like the following example into namespaced code: 


Example #1 Dynamically accessing elements


example1.php:

```php
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "global";

$a = 'classname';
$obj = new $a; // prints classname::__construct
$b = 'funcname';
$b(); // prints funcname
echo constant('constname'), "\n"; // prints global
```

One must use the fully qualified name (class name with namespace prefix).Note that because there is no difference between a qualified and a fully qualified Nameinside a dynamic class name, function name, or constant name, the leading backslash isnot necessary. 

Example #2 Dynamically accessing namespaced elements

```php
namespace namespacename;
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "namespaced";

/* note that if using double quotes, "\\namespacename\\classname" must be used */
$a = '\namespacename\classname';
$obj = new $a; // prints namespacename\classname::__construct
$a = 'namespacename\classname';
$obj = new $a; // also prints namespacename\classname::__construct
$b = 'namespacename\funcname';
$b(); // prints namespacename\funcname
$b = '\namespacename\funcname';
$b(); // also prints namespacename\funcname
echo constant('\namespacename\constname'), "\n"; // prints namespaced
echo constant('namespacename\constname'), "\n"; // also prints namespaced
```

Be sure to read the note aboutescaping namespace names in strings. 



### ===🗝 • namespace keyword and __NAMESPACE__ constant

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

PHP supports two ways of abstractly accessing elements within the current namespace, the __NAMESPACE__ magic constant, and the `namespace` keyword. 

The value of __NAMESPACE__ is a string that contains the currentnamespace name. In global, un-namespaced code, it contains an empty string. 


Example #1 __NAMESPACE__ example, namespaced code

```php
namespace MyProject;

echo '"', __NAMESPACE__, '"'; // outputs "MyProject"
```



Example #2 __NAMESPACE__ example, global code

```php
echo '"', __NAMESPACE__, '"'; // outputs ""
```

The __NAMESPACE__ constant is useful for dynamically constructingnames, for instance: 

Example #3 using __NAMESPACE__ for dynamic name construction

```php
namespace MyProject;

function get($classname)
{
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
}
```



The namespace keyword can be used to explicitly requestan element from the current namespace or a sub-namespace. It is the namespace equivalent of the self operator for classes. 


Example #4 the namespace operator, inside a namespace

```php
namespace MyProject;

use blah\blah as mine; // see "Using namespaces: Aliasing/Importing"

blah\mine(); // calls function MyProject\blah\mine()
namespace\blah\mine(); // calls function MyProject\blah\mine()

namespace\func(); // calls function MyProject\func()
namespace\sub\func(); // calls function MyProject\sub\func()
namespace\cname::method(); // calls static method "method" of class MyProject\cname
$a = new namespace\sub\cname(); // instantiates object of class MyProject\sub\cname
$b = namespace\CONSTANT; // assigns value of constant MyProject\CONSTANT to $b
```



Example #5 the namespace operator, in global code

```php
namespace\func(); // calls function func()
namespace\sub\func(); // calls function sub\func()
namespace\cname::method(); // calls static method "method" of class cname
$a = new namespace\sub\cname(); // instantiates object of class sub\cname
$b = namespace\CONSTANT; // assigns value of constant CONSTANT to $b
```



### ===🗝 • Using namespaces: Aliasing/Importing

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The ability to refer to an external fully qualified name with an alias, or importing, is an important feature of namespaces. This is similar to theability of unix-based filesystems to create symbolic links to a file or to a directory. 

PHP can alias(/import) constants, functions, classes, interfaces, and namespaces. 

Aliasing is accomplished with the use operator.Here is an example showing all 5 kinds of importing: 


Example #1 importing/aliasing with the use operator

```php
namespace foo;
use My\Full\Classname as Another;

// this is the same as use My\Full\NSname as NSname
use My\Full\NSname;

// importing a global class
use ArrayObject;

// importing a function
use function My\Full\functionName;

// aliasing a function
use function My\Full\functionName as func;

// importing a constant
use const My\Full\CONSTANT;

$obj = new namespace\Another; // instantiates object of class foo\Another
$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // instantiates object of class ArrayObject
// without the "use ArrayObject" we would instantiate an object of class foo\ArrayObject
func(); // calls function My\Full\functionName
echo CONSTANT; // echoes the value of My\Full\CONSTANT
```

Note that for namespaced names (fully qualified namespace names containing namespace separator, such as Foo\Bar as opposed to global names that do not, such as FooBar), the leading backslash is unnecessary and not recommended, as import namesmust be fully qualified, and are not processed relative to the current namespace. 

PHP additionally supports a convenience shortcut to place multiple use statementson the same line 


Example #2 importing/aliasing with the use operator, multiple use statements combined

```php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
```



Importing is performed at compile-time, and so does not affect dynamic class, functionor constant names. 


Example #3 Importing and dynamic names

```php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$a = 'Another';
$obj = new $a;      // instantiates object of class Another
```



In addition, importing only affects unqualified and qualified names. Fully qualified names are absolute, and unaffected by imports. 


Example #4 Importing and fully qualified names

```php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing
```



#### Scoping rules for importing 

The use keyword must be declared in theoutermost scope of a file (the global scope) or inside namespacedeclarations. This is because the importing is done at compiletime and not runtime, so it cannot be block scoped. The followingexample will show an illegal use of the use keyword: 




Example #5 Illegal importing rule

```php
namespace Languages;

function toGreenlandic()
{
    use Languages\Danish;

    // ...
}
```


Note: 

Importing rules are per file basis, meaning included files will NOT inherit the parent file's importing rules. 



#### Group use declarations 

Classes, functions and constants being imported fromthe same namespace can be grouped together in a single usestatement. 


```php
use some\namespace\ClassA;
use some\namespace\ClassB;
use some\namespace\ClassC as C;

use function some\namespace\fn_a;
use function some\namespace\fn_b;
use function some\namespace\fn_c;

use const some\namespace\ConstA;
use const some\namespace\ConstB;
use const some\namespace\ConstC;

// is equivalent to the following groupped use declaration
use some\namespace\{ClassA, ClassB, ClassC as C};
use function some\namespace\{fn_a, fn_b, fn_c};
use const some\namespace\{ConstA, ConstB, ConstC}; 
```


### ===🗝 • Global space


(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Without any namespace definition, all class and function definitions areplaced into the global space - as it was in PHP before namespaces weresupported. Prefixing a name with \ will specify thatthe name is required from the global space even in the context of thenamespace. 


Example #1 Using global space specification

```php
namespace A\B\C;

/* This function is A\B\C\fopen */
function fopen() { 
     /* ... */
     $f = \fopen(...); // call global fopen
     return $f;
} 
```

### ===🗝 • Using namespaces: fallback to global function/constant

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Inside a namespace, when PHP encounters an unqualified Name in a class name, function or constant context, it resolves these with different priorities. Class names always resolve to the current namespace name. Thus to access internal or non-namespaced user classes, one must refer to them with their fully qualified Name as in: 


Example #1 Accessing global classes inside a namespace

```php
namespace A\B\C;
class Exception extends \Exception {}

$a = new Exception('hi'); // $a is an object of class A\B\C\Exception
$b = new \Exception('hi'); // $b is an object of class Exception

$c = new ArrayObject; // fatal error, class A\B\C\ArrayObject not found
```



For functions and constants, PHP will fall back to global functions or constants if a namespaced function or constant does not exist. 


Example #2 global functions/constants fallback inside a namespace

```php
namespace A\B\C;

const E_ERROR = 45;
function strlen($str)
{
    return \strlen($str) - 1;
}

echo E_ERROR, "\n"; // prints "45"
echo INI_ALL, "\n"; // prints "7" - falls back to global INI_ALL

echo strlen('hi'), "\n"; // prints "1"
if (is_array('hi')) { // prints "is not array"
    echo "is array\n";
} else {
    echo "is not array\n";
}
```


### ===🗝 • Name resolution rules

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

For the purposes of these resolution rules, here are some important definitions: 

Namespace name definitions 

➡ Unqualified name
This is an identifier without a namespace separator, such as Foo 

➡ Qualified name
This is an identifier with a namespace separator, such as Foo\Bar 

➡ Fully qualified name
This is an identifier with a namespace separator that begins with anamespace separator, such as \Foo\Bar. The namespace \Foo is also a fully qualified name. 

➡ Relative name
This is an identifier starting with namespace, such as namespace\Foo\Bar. 


Names are resolved following these resolution rules: 

1. Fully qualified names always resolve to the name without leading namespace separator.For instance \A\B resolves to A\B.  

2. Relative names always resolve to the name with namespace replaced bythe current namespace. If the name occurs in the global namespace, the namespace\ prefix is stripped. For example namespace\Ainside namespace X\Y resolves to X\Y\A. The same name inside the global namespace resolves to A.  

3. For qualified names the first segment of the name is translated according to the currentclass/namespace import table. For example, if the namespace A\B\C isimported as C, the name C\D\E is translated to A\B\C\D\E.  

4. For qualified names, if no import rule applies, the current namespace is prepended to thename. For example, the name C\D\E inside namespace A\B,resolves to A\B\C\D\E.  

5. For unqualified names, the name is translated according to the current import table for the respective symbol type. This means that class-like names are translated according to the class/namespace import table, function names according to the function import table and constants according to the constant import table. For example, after use A\B\C; a usage such as new C() resolves to the name A\B\C(). Similarly, after use function A\B\fn; a usage such as fn() resolves to the name A\B\fn.  

6. For unqualified names, if no import rule applies and the name refers to a class-like symbol, the current namespace is prepended. For example new C() inside namespace A\B resolves to name A\B\C.  

7. For unqualified names, if no import rule applies and the name refers to a function or constantand the code is outside the global namespace, the name is resolved at runtime. Assuming the code is in namespace A\B, here is how a call to function foo() is resolved:

    1. It looks for a function from the current namespace: A\B\foo().  

    2. It tries to find and call the global function foo().  


Example #1 Name resolutions illustrated

```php
namespace A;
use B\D, C\E as F;

// function calls

foo();      // first tries to call "foo" defined in namespace "A"
            // then calls global function "foo"

\foo();     // calls function "foo" defined in global scope

my\foo();   // calls function "foo" defined in namespace "A\my"

F();        // first tries to call "F" defined in namespace "A"
            // then calls global function "F"

// class references

new B();    // creates object of class "B" defined in namespace "A"
            // if not found, it tries to autoload class "A\B"

new D();    // using import rules, creates object of class "D" defined in namespace "B"
            // if not found, it tries to autoload class "B\D"

new F();    // using import rules, creates object of class "E" defined in namespace "C"
            // if not found, it tries to autoload class "C\E"

new \B();   // creates object of class "B" defined in global scope
            // if not found, it tries to autoload class "B"

new \D();   // creates object of class "D" defined in global scope
            // if not found, it tries to autoload class "D"

new \F();   // creates object of class "F" defined in global scope
            // if not found, it tries to autoload class "F"

// static methods/namespace functions from another namespace

B\foo();    // calls function "foo" from namespace "A\B"

B::foo();   // calls method "foo" of class "B" defined in namespace "A"
            // if class "A\B" not found, it tries to autoload class "A\B"

D::foo();   // using import rules, calls method "foo" of class "D" defined in namespace "B"
            // if class "B\D" not found, it tries to autoload class "B\D"

\B\foo();   // calls function "foo" from namespace "B"

\B::foo();  // calls method "foo" of class "B" from global scope
            // if class "B" not found, it tries to autoload class "B"

// static methods/namespace functions of current namespace

A\B::foo();   // calls method "foo" of class "B" from namespace "A\A"
              // if class "A\A\B" not found, it tries to autoload class "A\A\B"

\A\B::foo();  // calls method "foo" of class "B" from namespace "A"
              // if class "A\B" not found, it tries to autoload class "A\B"
```


### ===🗝 • FAQ: things you need to know about namespaces


(PHP 5 >= 5.3.0, PHP 7, PHP 8)

This FAQ is split into two sections: common questions, and some specifics ofimplementation that are helpful to understand fully. 

First, the common questions. 

1. If I don't use namespaces, should I care about any of this?  
2. How do I use internal or global classes in a namespace?  
3. How do I use namespaces classes functions, or constants in their own namespace?  
4. How does a name like \my\name or \name resolve?   
5. How does a name like my\name resolve?  
6. How does an unqualified class name like `name` resolve?  
7. How does an unqualified function name or unqualified constant name like `name` resolve?  


There are a few implementation details of the namespace implementations that are helpful to understand. 

1. Import names must not conflict with classes defined in the same file.  
2. Nested namespaces are not allowed.   
3. Dynamic namespace names (quoted identifiers) should escape backslash.  
4. Undefined Constants referenced using any backslash die with fatal error  
5. Cannot override specialconstants NULL, TRUE, FALSE, ZEND_THREAD_SAFE or ZEND_DEBUG_BUILD  



If I don't use namespaces, should I care about any of this? 

No. Namespaces do not affect any existing code in any way, or anyas-yet-to-be-written code that does not contain namespaces. You canwrite this code if you wish: 

Example #1 Accessing global classes outside a namespace

```php
$a = new \stdClass;
```

This is functionally equivalent to: 


Example #2 Accessing global classes outside a namespace

```php
$a = new stdClass;
```




How do I use internal or global classes in a namespace? 




Example #3 Accessing internal classes in namespaces

```php
namespace foo;
$a = new \stdClass;

function test(\ArrayObject $parameter_type_example = null) {}

$a = \DirectoryIterator::CURRENT_AS_FILEINFO;

// extending an internal or global class
class MyException extends \Exception {}
```




How do I use namespaces classes, functions, or constants in their ownnamespace? 




Example #4 Accessing internal classes, functions or constants in namespaces

```php
namespace foo;

class MyClass {}

// using a class from the current namespace as a parameter type
function test(MyClass $parameter_type_example = null) {}
// another way to use a class from the current namespace as a parameter type
function test(\foo\MyClass $parameter_type_example = null) {}

// extending a class from the current namespace
class Extended extends MyClass {}

// accessing a global function
$a = \globalfunc();

// accessing a global constant
$b = \INI_ALL;
```




How does a name like \my\name or \name resolve? 

Names that begin with a \ always resolve to what theylook like, so \my\name is in fact my\name,and \Exception is Exception. 


Example #5 Fully Qualified names

```php
namespace foo;
$a = new \my\name(); // instantiates "my\name" class
echo \strlen('hi'); // calls function "strlen"
$a = \INI_ALL; // $a is set to the value of constant "INI_ALL"
```




How does a name like my\name resolve? 

Names that contain a backslash but do not begin with a backslash like my\name can be resolved in 2 different ways. 

If there isan import statement that aliases another name to my, thenthe import alias is applied to the my in my\name. 

Otherwise, the current namespace name is prepended to my\name. 




Example #6 Qualified names

```php
namespace foo;
use blah\blah as foo;

$a = new my\name(); // instantiates "foo\my\name" class
foo\bar::name(); // calls static method "name" in class "blah\blah\bar"
my\bar(); // calls function "foo\my\bar"
$a = my\BAR; // sets $a to the value of constant "foo\my\BAR"
```




How does an unqualified class name like name resolve? 

Class names that do not contain a backslash like name can be resolved in 2 different ways. 

If there isan import statement that aliases another name to name, thenthe import alias is applied. 

Otherwise, the current namespace name is prepended to name. 




Example #7 Unqualified class names

```php
namespace foo;
use blah\blah as foo;

$a = new name(); // instantiates "foo\name" class
foo::name(); // calls static method "name" in class "blah\blah"
```




How does an unqualified function name or unqualified constant namelike name resolve? 

Function or constant names that do not contain a backslash like name can be resolved in 2 different ways. 

First, the current namespace name is prepended to name. 

Finally, if the constant or function name does not existin the current namespace, a global constant or function nameis used if it exists. 




Example #8 Unqualified function or constant names

```php
namespace foo;
use blah\blah as foo;

const FOO = 1;

function my() {}
function foo() {}
function sort(&$a)
{
    \sort($a); // calls the global function "sort"
    $a = array_flip($a);
    return $a;
}

my(); // calls "foo\my"
$a = strlen('hi'); // calls global function "strlen" because "foo\strlen" does not exist
$arr = array(1,3,2);
$b = sort($arr); // calls function "foo\sort"
$c = foo(); // calls function "foo\foo" - import is not applied

$a = FOO; // sets $a to value of constant "foo\FOO" - import is not applied
$b = INI_ALL; // sets $b to value of global constant "INI_ALL"
```




Import names must not conflict with classes defined in the same file. 

The following script combinations are legal: 


file1.php

```php
namespace my\stuff;
class MyClass {}
```


another.php

```php
namespace another;
class thing {}
```


file2.php

```php
namespace my\stuff;
include 'file1.php';
include 'another.php';

use another\thing as MyClass;
$a = new MyClass; // instantiates class "thing" from namespace another
```



There is no name conflict, even though the class MyClass existswithin the my\stuff namespace, because the MyClass definition isin a separate file. However, the next example causes a fatal error on name conflictbecause MyClass is defined in the same file as the use statement. 


```php
namespace my\stuff;
use another\thing as MyClass;
class MyClass {} // fatal error: MyClass conflicts with import statement
$a = new MyClass;
```




Nested namespaces are not allowed. 

PHP does not allow nesting namespaces 


```php
namespace my\stuff {
    namespace nested {
        class foo {}
    }
}
```

However, it is easy to simulate nested namespaces like so: 

```php
namespace my\stuff\nested {
    class foo {}
}
```




Dynamic namespace names (quoted identifiers) should escape backslash 

It is very important to realize that because the backslash is used as an escape characterwithin strings, it should always be doubled when used inside a string. Otherwisethere is a risk of unintended consequences: 


Example #9 Dangers of using namespaced names inside a double-quoted string

```php
$a = "dangerous\name"; // \n is a newline inside double quoted strings!
$obj = new $a;

$a = 'not\at\all\dangerous'; // no problems here.
$obj = new $a;
```

Inside a single-quoted string, the backslash escape sequence is much safer to use, but itis still recommended practice to escape backslashes in all strings as a best practice. 


Undefined Constants referenced using any backslash die with fatal error 

Any undefined constant that is unqualified like FOO willproduce a notice explaining that PHP assumed FOO was the valueof the constant. Any constant, qualified or fully qualified, that contains abackslash will produce a fatal error if not found. 


Example #10 Undefined constants

```php
namespace bar;
$a = FOO; // produces notice - undefined constants "FOO" assumed "FOO";
$a = \FOO; // fatal error, undefined namespace constant FOO
$a = Bar\FOO; // fatal error, undefined namespace constant bar\Bar\FOO
$a = \Bar\FOO; // fatal error, undefined namespace constant Bar\FOO
```




Cannot override special constants NULL, TRUE, FALSE, ZEND_THREAD_SAFE or ZEND_DEBUG_BUILD 

Any attempt to define a namespaced constant that is a special, built-in constantresults in a fatal error 


Example #11 Undefined constants

```php
namespace bar;
const NULL = 0; // fatal error;
const true = 'stupid'; // also fatal error;
// etc.
```


## ==⚡ • Enumerations

Enumerations, or "Enums" allow a developer to define a custom type that is limited to oneof a discrete number of possible values. That can be especially helpful when defining adomain model, as it enables "making invalid states unrepresentable." 

Enums appear in many languages with a variety of different features. In PHP, Enums are a special kind of object. The Enum itself is a class, and its possible cases are all single-instance objects of that class. That means Enum cases arevalid objects and may be used anywhere an object may be used, including type checks. 

The most popular example of enumerations is the built-in boolean type, which is anenumerated type with legal values `true` and `false`. Enums allows developers to define their own arbitrarily robust enumerations. 


### ===🗝 • Basic enumerations

Enums are similar to classes, and share the same namespaces as classes, interfaces, and traits. They are also autoloadable the same way. An Enum defines a new type, which has a fixed, limited number of possible legal values. 

```php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}
```


This declaration creates a new enumerated type named Suit, which hasfour and only four legal values: Suit::Hearts, Suit::Diamonds, Suit::Clubs, and Suit::Spades. Variables may be assignedto one of those legal values. A function may be type checked against an enumerated type,in which case only values of that type may be passed. 

```php
function pick_a_card(Suit $suit) { ... }

$val = Suit::Diamonds;

// OK
pick_a_card($val);
// OK
pick_a_card(Suit::Clubs);
// TypeError: pick_a_card(): Argument #1 ($suit) must be of type Suit, string given
pick_a_card('Spades');
```


An Enumeration may have zero or more case definitions, with no maximum. A zero-case enum is syntactically valid, if rather useless. 

For Enumeration cases, the same syntax rules apply as to any label in PHP, see Constants. 

By default, cases are not intrinsically backed by a scalar value. That is, Suit::Heartsis not equal to "0". Instead, each case is backed by a singleton object of that name. That means that: 

```php
$a = Suit::Spades;
$b = Suit::Spades;

$a === $b; // true

$a instanceof Suit;  // true
```


It also means that enum values are never < or > each other, since those comparisons are not meaningful on objects. Those comparisons will always return false when working with enum values. 

This type of case, with no related data, is called a "Pure Case." An Enum that containsonly Pure Cases is called a Pure Enum. 

All Pure Cases are implemented as instances of their enum type. The enum type is represented internally as a class. 

All Cases have a read-only property, name, that is the case-sensitive nameof the case itself. 

```php
print Suit::Spades->name;
// prints "Spades"
```

### ===🗝 • Backed enumerations

By default, Enumerated Cases have no scalar equivalent. They are simply singleton objects. However, there are ample cases where an Enumerated Case needs to be able to round-trip to a database orsimilar datastore, so having a built-in scalar (and thus trivially serializable) equivalent defined intrinsically is useful. 

To define a scalar equivalent for an Enumeration, the syntax is as follows:

```php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}
```


A case that has a scalar equivalent is called a `Backed Case`, as it is "Backed"by a simpler value. An Enum that contains all Backed Cases is called a "`Backed Enum`."A Backed Enum may contain only Backed Cases. A `Pure Enum` may contain only Pure Cases. 

A Backed Enum may be backed by types of int or string, and a given enumeration supports only a single type at a time (that is, no union of int|string). If an enumeration is marked as having a scalar equivalent, then all cases must have a uniquescalar equivalent defined explicitly. There are no auto-generated scalar equivalents (e.g., sequential integers). Backed cases must be unique; two backed enum cases maynot have the same scalar equivalent. However, a constant may refer to a case, effectively creating an alias. See Enumeration constants. 

Equivalent values must be literals or literal expressions. Constants and constant expressionsare not supported. That is, 1 + 1 is allowed, but 1 + SOME_CONST is not. 

Backed Cases have an additional read-only property, value, which is the value specified in the definition. 

```php
print Suit::Clubs->value;
// Prints "C"
```


In order to enforce the value property as read-only, a variable cannotbe assigned as a reference to it. That is, the following throws an error: 

```php
$suit = Suit::Clubs;
$ref = &$suit->value;
// Error: Cannot acquire reference to property Suit::$value
```


Backed enums implement an internal BackedEnum interface, which exposes two additional methods: 

• from(int|string): self will take a scalar and return the corresponding Enum Case. If one is not found, it will throw a ValueError. This is mainly useful in cases where the input scalar is trusted and a missing enum value should bec onsidered an application-stopping error. 

• tryFrom(int|string): ?self will take a scalar and return the corresponding Enum Case. If one is not found, it will return null.This is mainly useful in cases where the input scalar is untrusted and the caller wantsto implement their own error handling or default-value logic. 

The from() and tryFrom() methods follow standard weak/strong typing rules. In weak typing mode, passing an integer or string is acceptable and the system will coerce the value accordingly. Passing a float will also work and becoerced. In strict typing mode, passing an integer to from() on astring-backed enum (or vice versa) will result in a TypeError,as will a float in all circumstances. All other parameter types will throw a TypeErrorin both modes. 

```php
$record = get_stuff_from_database($id);
print $record['suit'];

$suit =  Suit::from($record['suit']);
// Invalid data throws a ValueError: "X" is not a valid scalar value for enum "Suit"
print $suit->value;

$suit = Suit::tryFrom('A') ?? Suit::Spades;
// Invalid data returns null, so Suit::Spades is used instead.
print $suit->value;
```


Manually defining a from() or tryFrom() method on a Backed Enum will result in a fatal error.

### ===🗝 • Enumeration methods

Enums (both `Pure Enums` and `Backed Enums`) may contain methods, and may implement interfaces. If an Enum implements an interface, then any type check for that interface will also accept all cases of that Enum. 

```php
interface Colorful
{
    public function color(): string;
}

enum Suit implements Colorful
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

    // Fulfills the interface contract.
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    // Not part of an interface; that's fine.
    public function shape(): string
    {
        return "Rectangle";
    }
}

function paint(Colorful $c) { ... }

paint(Suit::Clubs);  // Works

print Suit::Diamonds->shape(); // prints "Rectangle"
```


In this example, all four instances of Suit have two methods, color() and shape(). As far as calling codeand type checks are concerned, they behave exactly the same as any other object instance. 

On a Backed Enum, the interface declaration goes after the backing type declaration. 

```php
interface Colorful
{
    public function color(): string;
}

enum Suit: string implements Colorful
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';

    // Fulfills the interface contract.
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }
}
```


Inside a method, the $this variable is defined and refers to the Case instance. 

Methods may be arbitrarily complex, but in practice will usually return a static value or match on $this to providedifferent results for different cases. 

Note that in this case it would be a better data modeling practice to also define a SuitColor Enum Type with values Red and Black and return that instead.However, that would complicate this example. 

The above hierarchy is logically similar to the following class structure(although this is not the actual code that runs): 

```php
interface Colorful
{
    public function color(): string;
}

final class Suit implements UnitEnum, Colorful
{
    public const Hearts = new self('Hearts');
    public const Diamonds = new self('Diamonds');
    public const Clubs = new self('Clubs');
    public const Spades = new self('Spades');

    private function __construct(public readonly string $name) {}

    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    public function shape(): string
    {
        return "Rectangle";
    }

    public static function cases(): array
    {
        // Illegal method, because manually defining a cases() method on an Enum is disallowed.
        // See also "Value listing" section.
    }
}
```

Methods may be public, private, or protected, although in practice private andprotected are equivalent as inheritance is not allowed. 


### ===🗝 • Enumeration static methods

Enumerations may also have static methods. The use for static methods on the enumeration itself is primarily for alternative constructors. E.g.: 


```php
enum Size
{
    case Small;
    case Medium;
    case Large;

    public static function fromLength(int $cm): static
    {
        return match(true) {
            $cm < 50 => static::Small,
            $cm < 100 => static::Medium,
            default => static::Large,
        };
    }
}
```

Static methods may be public, private, or protected, although in practice private and protected are equivalent as inheritance is not allowed. 


### ===🗝 • Enumeration constants

Enumerations may include constants, which may be public, private, or protected, although in practice private and protected are equivalent as inheritance is not allowed. 

An enum constant may refer to an enum case:

```php
enum Size
{
    case Small;
    case Medium;
    case Large;

    public const Huge = self::Large;
}
```

### ===🗝 • Traits

Enumerations may leverage traits, which will behave the same as on classes. The caveat is that traits used in an enum must not contain properties. They may only include methods and static methods. A trait with properties will result in a fatal error. 


```php
interface Colorful
{
    public function color(): string;
}

trait Rectangle
{
    public function shape(): string {
        return "Rectangle";
    }
}

enum Suit implements Colorful
{
    use Rectangle;

    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }
}
```

### ===🗝 • Enum values in constant expressions

Because cases are represented as constants on the enum itself, they may be used as static values in most constant expressions: property defaults, static variable defaults, parameter defaults, global and class constant values. They may not be used in other enum case values, butnormal constants may refer to an enum case. 

However, implicit magic method calls such as ArrayAccess on enums are not allowed in staticor constant definitions as we cannot absolutely guarantee that the resulting value is deterministicor that the method invocation is free of side effects. Function calls, method calls, andproperty access continue to be invalid operations in constant expressions. 

```php
// This is an entirely legal Enum definition.
enum Direction implements ArrayAccess
{
    case Up;
    case Down;

    public function offsetGet($val) { ... }
    public function offsetExists($val) { ... }
    public function offsetSet($val) { throw new Exception(); }
    public function offsetUnset($val) { throw new Exception(); }
}

class Foo
{
    // This is allowed.
    const Bar = Direction::Down;

    // This is disallowed, as it may not be deterministic.
    const Bar = Direction::Up['short'];
    // Fatal error: Cannot use [] on enums in constant expression
}

// This is entirely legal, because it's not a constant expression.
$x = Direction::Up['short'];
```


### ===🗝 • Differences from objects

Although Enums are built on classes and objects, they do not support all object-related functionality. In particular, Enum cases are forbidden from having state. 

• Constructors and Destructors are forbidden.
• Inheritance is not supported. Enums may not extend or be extended.
• Static or object properties are not allowed.
• Cloning an Enum case is not supported, as cases must be singleton instances
• Magic methods, except for those listed below, are disallowed.

The following object functionality is available, and behaves just as it does on any other object:

• Public, private, and protected methods.
• Public, private, and protected static methods.
• Public, private, and protected constants.
• Enums may implement any number of interfaces.
• Enums and cases may have attributes attachedto them. The TARGET_CLASS targetfilter includes Enums themselves. The TARGET_CLASS_CONST target filterincludes Enum Cases. 
• __call, __callStatic and __invoke magic methods 
• __CLASS__ and __FUNCTION__ constants behave as normal

The ::class magic constant on an Enum type evaluates to the typename including any namespace, exactly the same as an object. The ::classmagic constant on a Case instance also evaluates to the Enum type, as it is aninstance of that type. 

Additionally, enum cases may not be instantiated directly with new, nor with ReflectionClass::newInstanceWithoutConstructor() in reflection. Both will result in an error. 

```php
$clovers = new Suit();
// Error: Cannot instantiate enum Suit
$horseshoes = (new ReflectionClass(Suit::class))->newInstanceWithoutConstructor()
// Error: Cannot instantiate enum Suit
```

### ===🗝 • Value listing


Both `Pure Enums` and `Backed Enums` implement an internal interface named UnitEnum. UnitEnum includes a static method cases(). cases() returns a packed array of all defined Cases in the order of declaration. 

```php
Suit::cases();
// Produces: [Suit::Hearts, Suit::Diamonds, Suit::Clubs, Suit:Spades]
```


Manually defining a cases() method on an Enum will result in a fatal error.


### ===🗝 • Serialization


Enumerations are serialized differently from objects. Specifically, they have a new serialization code, "E", that specifies the name of the enum case. The deserialization routine is then able to use that to set a variable to the existing singleton value. That ensures that: 

```php
Suit::Hearts === unserialize(serialize(Suit::Hearts));

print serialize(Suit::Hearts);
// E:11:"Suit:Hearts";
```


On deserialization, if an enum and case cannot be found to match a serialized value a warning will be issued and false returned.

If a Pure Enum is serialized to JSON, an error will be thrown. If a Backed Enumis serialized to JSON, it will be represented by its value scalar only, in the appropriate type. The behavior of both may be overridden by implementing `JsonSerializable`. 

For print_r(), the output of an enum case is slightly differentfrom objects to minimize confusion. 

```php
enum Foo {
    case Bar;
}

enum Baz: int {
    case Beep = 5;
}

print_r(Foo::Bar);
print_r(Baz::Beep);

/* Produces

Foo Enum (
    [name] => Bar
)
Baz Enum:int {
    [name] => Beep
    [value] => 5
}
*/
```


### ===🗝 • Examples


Example #1 Basic limited values

```php
enum SortOrder
{
    case ASC;
    case DESC;
}

function query($fields, $filter, SortOrder $order = SortOrder::ASC) { ... }
```



The query() function can now proceed safe in the knowledge that $order is guaranteed to be either SortOrder::ASCor SortOrder::DESC. Any other value would have resulted in a TypeError, so no further error checking or testing is needed. 


Example #2 Advanced exclusive values

```php
enum UserStatus: string
{
    case Pending = 'P';
    case Active = 'A';
    case Suspended = 'S';
    case CanceledByUser = 'C';

    public function label(): string
    {
        return match($this) {
            static::Pending => 'Pending',
            static::Active => 'Active',
            static::Suspended => 'Suspended',
            static::CanceledByUser => 'Canceled by user',
        };
    }
}
```

In this example, a user's status may be one of, and exclusively, UserStatus::Pending, UserStatus::Active, UserStatus::Suspended, or UserStatus::CanceledByUser. A function can type a parameter against UserStatus and then only accept those four values, period. 


All four values have a label() method, which returns a human-readable string.That string is independent of the "machine name" scalar equivalent string, which can be used in,for example, a database field or an HTML select box. 

```php
foreach (UserStatus::cases() as $case) {
    printf('<option value="%s">%s</option>\n', $case->value, $case->label());
}
```


## ==⚡ • Errors

Sadly, no matter how careful we are when writing our code, errors are afact of life. PHP will report errors, warnings and notices for many commoncoding and runtime problems, and knowing how to detect and handle the seerrors will make debugging much easier. 


### ===🗝 • Handling errors with PHP 

PHP reports errors in response to a number of internal error conditions. These may be used to signal a number of different conditions, and can bedisplayed and/or logged as required. 

Every error that PHP generates includes a type. A list of these error types is available,along with a short description of their behaviour and how they can becaused. 


If no error handler is set, then PHP will handle any errors that occuraccording to its configuration. Which errors are reported and which areignored is controlled by the `error_reporting` php.ini directive, or at runtime by calling `error_reporting()`. It is strongly recommended that the configuration directive be set, however, as some errors can occur before execution of your script begins. 

In a development environment, you should always set error_reporting to E_ALL, as you need to be aware of and fix theissues raised by PHP. In production, you may wish to set this to a lessverbose level such as E_ALL & ~E_NOTICE & ~E_DEPRECATED, butin many cases E_ALL is also appropriate, as it mayprovide early warning of potential issues. 

What PHP does with these errors depends on two further php.ini directives. `display_errors` controls whether the error is shown as part of the script's output. This should always be disabled in a production environment, as it can includeconfidential information such as database passwords, but is often useful toenable in development, as it ensures immediate reporting of issues. 

In addition to displaying errors, PHP can log errors when the `log_errors` directive is enabled. This will log any errors to the file or syslog defined by error_log. This can be extremely useful in a production environment, as you can log errorsthat occur and then generate reports based on those errors. 


User error handlers 

If PHP's default error handling is inadequate, you can also handle many types of error with your own custom error handler by installing it with `set_error_handler()`. While some error types cannot behandled this way, those that can be handled can then be handled in the waythat your script sees fit: for example, this can be used to show a customerror page to the user and then report more directly than via a log, suchas by sending an e-mail. 

### ===🗝 • Errors in PHP 7

PHP 7 changes how most errors are reported by PHP. Instead of reporting errors through the traditional error reporting mechanism used by PHP 5, most errors are now reported by throwing Error exceptions. 

As with normal exceptions, these Error exceptionswill bubble up until they reach the first matching catchblock. If there are no matching blocks, then any default exception handler installed with `set_exception_handler()` will be called,and if there is no default exception handler, then the exception will beconverted to a fatal error and will be handled like a traditional error. 

As the Error hierarchy does not inherit from Exception, code that uses `catch (Exception $e) { ... }` blocks to handle uncaught exceptions in PHP 5 will find that these Errors arenot caught by these blocks. Either a `catch (Error $e) { ... }` block or a `set_exception_handler()` handler is required. 


Error hierarchy 

◦ Throwable
	◦ Error
		◦ ArithmeticError
		◦ DivisionByZeroError 
		◦ AssertionError 
		◦ CompileError
		    ◦ ParseError 
		◦ TypeError
		    ◦ ArgumentCountError 
		◦ ValueError 
		◦ UnhandledMatchError 
		◦ FiberError 
	◦ Exception ... 


## ==⚡ • Exceptions

A User defined Exception class can be defined by extending the built-inException class. The members and properties below, show what is accessible within the child class that derives from the built-in Exception class. 


Example #1 The Built in Exception class

```php
class Exception implements Throwable
{
    protected $message = 'Unknown exception';   // exception message
    private   $string;                          // __toString cache
    protected $code = 0;                        // user defined exception code
    protected $file;                            // source filename of exception
    protected $line;                            // source line of exception
    private   $trace;                           // backtrace
    private   $previous;                        // previous exception if nested exception

    public function __construct($message = '', $code = 0, Throwable $previous = null);

    final private function __clone();           // Inhibits cloning of exceptions.

    final public  function getMessage();        // message of exception
    final public  function getCode();           // code of exception
    final public  function getFile();           // source filename
    final public  function getLine();           // source line
    final public  function getTrace();          // an array of the backtrace()
    final public  function getPrevious();       // previous exception
    final public  function getTraceAsString();  // formatted string of trace

    // Overrideable
    public function __toString();               // formatted string for display
}
```


If a class extends the built-in Exception class and re-defines the constructor, it is highly recommended that it also call `parent::__construct()` to ensure all available data has been properly assigned. The `__toString()` method can be overridden to provide a custom output when the object is presented as a string. 


Note: 

Exceptions cannot be cloned. Attempting to clone an Exception will result in afatal E_ERROR error. 



Example #2 Extending the Exception class

```php
/**
 * Define a custom exception class
 */
class MyException extends Exception
{
    // Redefine the exception so message isn't optional
    public function __construct($message, $code = 0, Throwable $previous = null) {
        // some code
    
        // make sure everything is assigned properly
        parent::__construct($message, $code, $previous);
    }

    // custom string representation of object
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }

    public function customFunction() {
        echo "A custom function for this type of exception\n";
    }
}


/**
 * Create a class to test the exception
 */
class TestException
{
    public $var;

    const THROW_NONE    = 0;
    const THROW_CUSTOM  = 1;
    const THROW_DEFAULT = 2;

    function __construct($avalue = self::THROW_NONE) {

        switch ($avalue) {
            case self::THROW_CUSTOM:
                // throw custom exception
                throw new MyException('1 is an invalid parameter', 5);
                break;

            case self::THROW_DEFAULT:
                // throw default one.
                throw new Exception('2 is not allowed as a parameter', 6);
                break;

            default: 
                // No exception, object will be created.
                $this->var = $avalue;
                break;
        }
    }
}


// Example 1
try {
    $o = new TestException(TestException::THROW_CUSTOM);
} catch (MyException $e) {      // Will be caught
    echo "Caught my exception\n", $e;
    $e->customFunction();
} catch (Exception $e) {        // Skipped
    echo "Caught Default Exception\n", $e;
}

// Continue execution
var_dump($o); // Null
echo "\n\n";


// Example 2
try {
    $o = new TestException(TestException::THROW_DEFAULT);
} catch (MyException $e) {      // Doesn't match this type
    echo "Caught my exception\n", $e;
    $e->customFunction();
} catch (Exception $e) {        // Will be caught
    echo "Caught Default Exception\n", $e;
}

// Continue execution
var_dump($o); // Null
echo "\n\n";


// Example 3
try {
    $o = new TestException(TestException::THROW_CUSTOM);
} catch (Exception $e) {        // Will be caught
    echo "Default Exception caught\n", $e;
}

// Continue execution
var_dump($o); // Null
echo "\n\n";


// Example 4
try {
    $o = new TestException();
} catch (Exception $e) {        // Skipped, no exception
    echo "Default Exception caught\n", $e;
}

// Continue execution
var_dump($o); // TestException
echo "\n\n";
```


## ==⚡ • Fibers

Fibers overview 

(PHP 8 >= 8.1.0)

Fibers represent full-stack, interruptible functions. Fibers may be suspended from anywhere in the call-stack, pausing execution within the fiber until the fiber is resumed at a later time. 

Fibers pause the entire execution stack, so the direct caller of the function does not need to change how itinvokes the function. 

Execution may be interrupted anywhere in the call stack using `Fiber::suspend()`(that is, the call to Fiber::suspend() may be in a deeply nested function or not even exist at all). 

Unlike stack-less Generators, each Fiber has its own call stack, allowing them to be paused within deeply nested function calls. A function declaring an interruption point(that is, calling `Fiber::suspend()`) need not change its return type, unlike a function using yield which must return a Generator instance. 

Fibers can be suspended in any function call, including those called from within the PHP VM, such as functionsprovided to array_map() or methods called by foreach on an Iterator object. 

Once suspended, execution of the fiber may be resumed with any value using Fiber::resume() or by throwing an exception into the fiber using Fiber::throw(). The value is returned(or exception thrown) from Fiber::suspend(). 


Example #1 Basic usage

```php
$fiber = new Fiber(function (): void {
   $value = Fiber::suspend('fiber');
   echo "Value used to resume fiber: ", $value, PHP_EOL;
});

$value = $fiber->start();

echo "Value from fiber suspending: ", $value, PHP_EOL;

$fiber->resume('test');
```

The above example will output:


Value from fiber suspending: fiber
Value used to resume fiber: test


### ===🗝 • Generators

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generators provide an easy way to implement simple iterators without theoverhead or complexity of implementing a class that implements the Iterator interface. 

A generator allows you to write code that uses foreach to iterate over aset of data without needing to build an array in memory, which may causeyou to exceed a memory limit, or require a considerable amount ofprocessing time to generate. Instead, you can write a generator function, which is the same as a normal function, except that insteadof returning once, agenerator can yield as many times as it needs to in order to provide thevalues to be iterated over. 

A simple example of this is to reimplement the range() function as a generator. The standard range() functionhas to generate an array with every value in it and return it, which canresult in large arrays: for example, calling range(0, 1000000) will result in well over 100 MB ofmemory being used. 

As an alternative, we can implement an xrange() generator, which will only ever need enough memory to create an Iterator object and track the current state of the generator internally, which turns out to be less than 1 kilobyte. 


Example #1 Implementing range() as a generator

```php
function xrange($start, $limit, $step = 1) {
    if ($start <= $limit) {
        if ($step <= 0) {
            throw new LogicException('Step must be positive');
        }

        for ($i = $start; $i <= $limit; $i += $step) {
            yield $i;
        }
    } else {
        if ($step >= 0) {
            throw new LogicException('Step must be negative');
        }

        for ($i = $start; $i >= $limit; $i += $step) {
            yield $i;
        }
    }
}

/*
 * Note that both range() and xrange() result in the same
 * output below.
 */

echo 'Single digit odd numbers from range():  ';
foreach (range(1, 9, 2) as $number) {
    echo "$number ";
}
echo "\n";

echo 'Single digit odd numbers from xrange(): ';
foreach (xrange(1, 9, 2) as $number) {
    echo "$number ";
}
```



The above example will output:


Single digit odd numbers from range():  1 3 5 7 9 
Single digit odd numbers from xrange(): 1 3 5 7 9 



Generator objects 

When a generator function is called, a new object of theinternal Generator class is returned. This object implements the Iterator interface in much the same way as a forward-only iterator object would, and provides methods that canbe called to manipulate the state of the generator, including sending values to and returning values from it. 


### ===🗝 • Generator syntax

A generator function looks just like a normal function, except that instead of returning a value, a generator yields as many values as it needs to. Any function containing yield is a generator function. 

When a generator function is called, it returns an object that can beiterated over. When you iterate over that object (for instance, via a foreach loop), PHP will call the object's iteration methods each time it needs avalue, then saves the state of the generator when the generator yields avalue so that it can be resumed when the next value is required. 

Once there are no more values to be yielded, then the generatorcan simply exit, and the calling code continues just as if an array has runout of values. 


Note: 

A generator can return values, which can be retrieved using Generator::getReturn(). 



#### yield keyword 

The heart of a generator function is the yield keyword.In its simplest form, a yield statement looks much like a returnstatement, except that instead of stopping execution of the function andreturning, yield instead provides a value to the code looping over thegenerator and pauses execution of the generator function. 


Example #1 A simple example of yielding values

```php
function gen_one_to_three() {
    for ($i = 1; $i <= 3; $i++) {
        // Note that $i is preserved between yields.
        yield $i;
    }
}

$generator = gen_one_to_three();
foreach ($generator as $value) {
    echo "$value\n";
}
```



The above example will output:


1
2
3



Note: 

Internally, sequential integer keys will be paired with the yieldedvalues, just as with a non-associative array. 


Caution 
The value that will be assigned to $data is the valuepassed to Generator::send(), or null if Generator::next() is called instead. 


#### Yielding values with keys

PHP also supports associative arrays, and generators are no different. Inaddition to yielding simple values, as shown above, you can also yield akey at the same time. 

The syntax for yielding a key/value pair is very similar to that used todefine an associative array, as shown below. 


Example #2 Yielding a key/value pair

```php
/*
 * The input is semi-colon separated fields, with the first
 * field being an ID to use as a key.
 */

$input = <<<'EOF'
1;PHP;Likes dollar signs
2;Python;Likes whitespace
3;Ruby;Likes blocks
EOF;

function input_parser($input) {
    foreach (explode("\n", $input) as $line) {
        $fields = explode(';', $line);
        $id = array_shift($fields);

        yield $id => $fields;
    }
}

foreach (input_parser($input) as $id => $fields) {
    echo "$id:\n";
    echo "    $fields[0]\n";
    echo "    $fields[1]\n";
}
```



The above example will output:


1:
    PHP
    Likes dollar signs
2:
    Python
    Likes whitespace
3:
    Ruby
    Likes blocks


Caution 
As with the simple value yields shown earlier, yielding a key/value pairin an expression context requires the yield statement to be parenthesised: 


    $data = (yield $key => $value); 


#### Yielding null values

Yield can be called without an argument to yield a null value with anautomatic key. 


Example #3 Yielding nulls

```php
function gen_three_nulls() {
    foreach (range(1, 3) as $i) {
        yield;
    }
}

var_dump(iterator_to_array(gen_three_nulls()));
```



The above example will output:


array(3) {
  [0]=>
  NULL
  [1]=>
  NULL
  [2]=>
  NULL
}



#### Yielding by reference

Generator functions are able to yield values by reference as well as byvalue. This is done in the same way as returning references from functions:by prepending an ampersand to the function name. 


Example #4 Yielding values by reference

```php
function &gen_reference() {
    $value = 3;

    while ($value > 0) {
        yield $value;
    }
}

/*
 * Note that we can change $number within the loop, and
 * because the generator is yielding references, $value
 * within gen_reference() changes.
 */
foreach (gen_reference() as &$number) {
    echo (--$number).'... ';
}
```



The above example will output:


2... 1... 0... 


#### Generator delegation via yield from

Generator delegation allows you to yield values from another generator, `Traversable` object, or array by using the yield from keyword. The outer generator will then yield all values from the inner generator, object, or array until that is no longer valid, after which execution will continue in the outer generator. 

If a generator is used with yield from, the yield from expression will also return any valuereturned by the inner generator. 

Caution 
Storing into an array (e.g. with iterator_to_array()) 

yield from does not reset the keys. It preservesthe keys returned by the Traversable object, or array. Thus some values may share a common key with another yield or yield from, which, uponinsertion into an array, will overwrite former values with that key. 

A common case where this matters is iterator_to_array() returning a keyed array by default, leading to possibly unexpected results. iterator_to_array() has a second parameter use_keys which can be set to false to collectall the values while ignoring the keys returned by the Generator. 


Example #5 yield from with iterator_to_array()

```php
function inner() {
    yield 1; // key 0
    yield 2; // key 1
    yield 3; // key 2
}
function gen() {
    yield 0; // key 0
    yield from inner(); // keys 0-2, don't forget `from`
    yield 4; // key 1
}
// pass false as second parameter to get an array [0, 1, 2, 3, 4]
var_dump(iterator_to_array(gen()));
```



The above example will output:


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(4)
  [2]=>
  int(3)
}



Example #6 Basic use of yield from

```php
function count_to_ten() {
    yield 1;
    yield 2;
    yield from [3, 4];
    yield from new ArrayIterator([5, 6]);
    yield from seven_eight();
    yield 9;
    yield 10;
}

function seven_eight() {
    yield 7;
    yield from eight();
}

function eight() {
    yield 8;
}

foreach (count_to_ten() as $num) {
    echo "$num ";
}
```



The above example will output:


1 2 3 4 5 6 7 8 9 10 



Example #7 yield from and return values

```php
function count_to_ten() {
    yield 1;
    yield 2;
    yield from [3, 4];
    yield from new ArrayIterator([5, 6]);
    yield from seven_eight();
    return yield from nine_ten();
}

function seven_eight() {
    yield 7;
    yield from eight();
}

function eight() {
    yield 8;
}

function nine_ten() {
    yield 9;
    return 10;
}

$gen = count_to_ten();
foreach ($gen as $num) {
    echo "$num ";
}
echo $gen->getReturn();
```



The above example will output:


1 2 3 4 5 6 7 8 9 10




### ===🗝 • Comparing generators with Iterator objects
 

The primary advantage of generators is their simplicity. Much lessboilerplate code has to be written compared to implementing an Iterator class, and the code is generally much more readable. For example, the following function and class are equivalent: 


```php
function getLinesFromFile($fileName) {
    if (!$fileHandle = fopen($fileName, 'r')) {
        return;
    }
 
    while (false !== $line = fgets($fileHandle)) {
        yield $line;
    }
 
    fclose($fileHandle);
}

// versus...

class LineIterator implements Iterator {
    protected $fileHandle;
 
    protected $line;
    protected $i;
 
    public function __construct($fileName) {
        if (!$this->fileHandle = fopen($fileName, 'r')) {
            throw new RuntimeException('Couldn\'t open file "' . $fileName . '"');
        }
    }
 
    public function rewind() {
        fseek($this->fileHandle, 0);
        $this->line = fgets($this->fileHandle);
        $this->i = 0;
    }
 
    public function valid() {
        return false !== $this->line;
    }
 
    public function current() {
        return $this->line;
    }
 
    public function key() {
        return $this->i;
    }
 
    public function next() {
        if (false !== $this->line) {
            $this->line = fgets($this->fileHandle);
            $this->i++;
        }
    }
 
    public function __destruct() {
        fclose($this->fileHandle);
    }
}
```


This flexibility does come at a cost, however: generators are forward-only iterators, and cannot be rewound once iteration has started. This alsomeans that the same generator can't be iterated over multiple times: the generator will need to be rebuilt by calling the generator function again. 


See Also 

• Object Iteration



## ==⚡ • Attributes

Attributes offer the ability to add structured, machine-readable metadata informationon declarations in code: Classes, methods, functions, parameters, properties and class constants can be the target of an attribute. The metadatadefined by attributes can then be inspected at runtime using the Reflection APIs. Attributes could therefore be thought of as a configurationlanguage embedded directly into code. 

With attributes the generic implementation of afeature and its concrete use in an application can be decoupled. In a way it iscomparable to interfaces and their implementations. But whereinterfaces and implementations are about code, attributes are aboutannotating extra information and configuration. Interfaces canbe implemented by classes, yet attributes can also be declaredon methods, functions, parameters, properties and class constants.As such they are more flexible than interfaces. 

A simple example of attribute usage is to convert an interfacethat has optional methods to use attributes. Lets assume an ActionHandlerinterface representing an operation in an application, where someimplementations of an action handler require setup and others do not. Instead of requiring all classesthat implement ActionHandler to implementa method setUp(),an attribute can be used. One benefitof this approach is that we can use the attribute several times. 


Example #1 Implementing optional methods of an interface with Attributes

```php
interface ActionHandler
{
    public function execute();
}

#[Attribute]
class SetUp {}

class CopyFile implements ActionHandler
{
    public string $fileName;
    public string $targetDirectory;

    #[SetUp]
    public function fileExists()
    {
        if (!file_exists($this->fileName)) {
            throw new RuntimeException("File does not exist");
        }
    }

    #[SetUp]
    public function targetDirectoryExists()
    {
        if (!file_exists($this->targetDirectory)) {
            mkdir($this->targetDirectory);
        } elseif (!is_dir($this->targetDirectory)) {
            throw new RuntimeException("Target directory $this->targetDirectory is not a directory");
        }
    }

    public function execute()
    {
        copy($this->fileName, 
            $this->targetDirectory . '/' . basename($this->fileName));
    }
}

function executeAction(ActionHandler $actionHandler)
{
    $reflection = new ReflectionObject($actionHandler);

    foreach ($reflection->getMethods() as $method) {
        $attributes = $method->getAttributes(SetUp::class);

        if (count($attributes) > 0) {
            $methodName = $method->getName();

            $actionHandler->$methodName();
        }
    }

    $actionHandler->execute();
}

$copyAction = new CopyFile();
$copyAction->fileName = "/tmp/foo.jpg";
$copyAction->targetDirectory = "/home/user";

executeAction($copyAction);  
```


### ===🗝 • Attribute syntax

There are several parts to the attributes syntax. First, an attributedeclaration is always enclosed with a starting #[ and a corresponding ending ]. Inside, one or many attributes are listed,separated by comma. The attribute name is an unqualified, qualifiedor fully-qualified name as described in Using Namespaces Basics. Arguments to the attribute are optional, but are enclosed in the usual parenthesis ().Arguments to attributes can only be literal values or constant expressions. Both positional andnamed arguments syntax can be used. 

Attribute names and their arguments are resolved to a class and the arguments are passed to its constructor,when an instance of the attribute is requested through the Reflection API. As sucha class should be introduced for each attribute. 


Example #1 Attribute Syntax

```php
// a.php
namespace MyExample;

use Attribute;

#[Attribute]
class MyAttribute
{
    const VALUE = 'value';

    private $value;

    public function __construct($value = null)
    {
        $this->value = $value;
    }
}

// b.php

namespace Another;

use MyExample\MyAttribute;

#[MyAttribute]
#[\MyExample\MyAttribute]
#[MyAttribute(1234)]
#[MyAttribute(value: 1234)]
#[MyAttribute(MyAttribute::VALUE)]
#[MyAttribute(array("key" => "value"))]
#[MyAttribute(100 + 200)]
class Thing
{
}

#[MyAttribute(1234), MyAttribute(5678)]
class AnotherThing
{
}  
```


### ===🗝 • Reading Attributes with the Reflection API

To access attributes from classes, methods, functions, parameters, properties and class constants,the Reflection API provides the method getAttributes() on each of the correspondingReflection objects. This method returns an array of ReflectionAttribute instancesthat can be queried for attribute name, arguments and to instantiate an instance of the represented attribute. 

This separation of reflected attribute representation from actual instance increases control of the programmerto handle errors regarding missing attribute classes, mistyped or missing arguments. Only aftercalling ReflectionAttribute::newInstance(), objects of the attribute class are instantiated and the correct matching of argumentsis validated, not earlier. 


Example #1 Reading Attributes using Reflection API

```php
#[Attribute]
class MyAttribute
{
    public $value;

    public function __construct($value)
    {
        $this->value = $value;
    }
}

#[MyAttribute(value: 1234)]
class Thing
{
}

function dumpAttributeData($reflection) {
    $attributes = $reflection->getAttributes();

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpAttributeData(new ReflectionClass(Thing::class));
/*
string(11) "MyAttribute"
array(1) {
  ["value"]=>
  int(1234)
}
object(MyAttribute)#3 (1) {
  ["value"]=>
  int(1234)
}
*/  
```

Instead of iterating all attributes on the reflection instance, only thoseof a particular attribute class can beretrieved by passing the searched attribute class name as argument. 


Example #2 Reading Specific Attributes using Reflection API

```php
function dumpMyAttributeData($reflection) {
    $attributes = $reflection->getAttributes(MyAttribute::class);

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpMyAttributeData(new ReflectionClass(Thing::class));  
```



### ===🗝 • Declaring Attribute Classes

While not strictly required it is recommended to create an actual class for every attribute.In the most simple case only an empty class is needed with the `#[Attribute]` attribute declaredthat can be imported from the global namespace with a use statement. 


Example #1 Simple Attribute Class

```php
namespace Example;

use Attribute;

#[Attribute]
class MyAttribute { }
```

To restrict the type of declaration an attribute can be assigned to, a bitmask can be passed as the firstargument to the #[Attribute] declaration. 


Example #2 Using target specification to restrict where attributes can be used

```php
namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION)]
class MyAttribute { }
```

Declaring MyAttribute on another type will now throw an exception duringthe call to ReflectionAttribute::newInstance() 

The following targets can be specified:

• Attribute::TARGET_CLASS
• Attribute::TARGET_FUNCTION
• Attribute::TARGET_METHOD
• Attribute::TARGET_PROPERTY
• Attribute::TARGET_CLASS_CONSTANT
• Attribute::TARGET_PARAMETER
• Attribute::TARGET_ALL

By default an attribute can only be used once per declaration. If the attribute should be repeatable on declarations it mustbe specified as part of the bitmask to the #[Attribute] declaration. 


Example #3 Using IS_REPEATABLE to allow attribute on a declaration multiple times

```php
namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION | Attribute::IS_REPEATABLE)]
class MyAttribute { }
```



## ==⚡ • References Explained

### ===🗝 • What References Are

References in PHP are a means to access the same variable contentby different names. They are not like C pointers; for instance, you cannot perform pointer arithmetic using them, they are notactual memory addresses, and so on. See What References Are Not for moreinformation. Instead, they are symbol table aliases. Note that inPHP, variable name and variable content are different, so the samecontent can have different names. The closest analogy is with Unix filenames and files - variable names are directory entries, while variable content is the file itself. References can be likened to hard linking in Unix filesystem. 

### ===🗝 • What References Do

There are three basic operations performed using references: assigning byreference, passingby reference,and returning byreference. This section will give an introduction to theseoperations, with links for further reading. 


Assign By Reference 

In the first of these, PHP references allow you to make twovariables refer to the same content. Meaning, when you do: 


```php
$a =& $b;
```

it means that $a and $bpoint to the same content. 

Note: 

$a and $b are completelyequal here. $a is not pointing to $b or vice versa. $a and $b are pointing to thesame place. 




Note: 

If you assign, pass, or return an undefined variable by reference, it will get created. 


Example #1 Using references with undefined variables

```php
function foo(&$var) { }

foo($a); // $a is "created" and assigned to null

$b = array();
foo($b['b']);
var_dump(array_key_exists('b', $b)); // bool(true)

$c = new StdClass;
foo($c->d);
var_dump(property_exists($c, 'd')); // bool(true)
```




The same syntax can be used with functions that return references: 


```php
$foo =& find_var($bar);
```



Using the same syntax with a function that does notreturn by reference will give an error, as will using it with the resultof the new operator.Although objects are passed around as pointers, these are not the same as references,as explained under Objects and references. 

Warning 
If you assign a reference to a variable declared global inside a function, the reference will be visible only inside the function. You can avoid this by using the `$GLOBALS` array. 


Example #2 Referencing global variables inside functions

```php
$var1 = "Example variable";
$var2 = "";

function global_references($use_globals)
{
    global $var1, $var2;
    if (!$use_globals) {
        $var2 =& $var1; // visible only inside the function
    } else {
        $GLOBALS["var2"] =& $var1; // visible also in global context
    }
}

global_references(false);
echo "var2 is set to '$var2'\n"; // var2 is set to ''
global_references(true);
echo "var2 is set to '$var2'\n"; // var2 is set to 'Example variable'
```

Think about global $var; as a shortcut to `$var=& $GLOBALS['var'];`. Thus assigning another referenceto $var only changes the local variable's reference. 


Note: 

If you assign a value to a variable with references in a foreach statement, the references are modified too. 


Example #3 References and foreach statement

```php
$ref = 0;
$row =& $ref;
foreach (array(1, 2, 3) as $row) {
    // do something
}
echo $ref; // 3 - last element of the iterated array
```




While not being strictly an assignment by reference, expressions createdwith the language construct array() can alsobehave as such by prefixing & to the array elementto add. Example: 


```php
$a = 1;
$b = array(2, 3);
$arr = array(&$a, &$b[0], &$b[1]);
$arr[0]++; $arr[1]++; $arr[2]++;
/* $a == 2, $b == array(3, 4); */
```



Note, however, that references inside arrays are potentially dangerous.Doing a normal (not by reference) assignment with a reference on theright side does not turn the left side into a reference, but referencesinside arrays are preserved in these normal assignments. This also appliesto function calls where the array is passed by value. Example: 


```php
/* Assignment of scalar variables */
$a = 1;
$b =& $a;
$c = $b;
$c = 7; //$c is not a reference; no change to $a or $b

/* Assignment of array variables */
$arr = array(1);
$a =& $arr[0]; //$a and $arr[0] are in the same reference set
$arr2 = $arr; //not an assignment-by-reference!
$arr2[0]++;
/* $a == 2, $arr == array(2) */
/* The contents of $arr are changed even though it's not a reference! */
```

In other words, the reference behavior of arrays is defined in anelement-by-element basis; the reference behavior of individual elementsis dissociated from the reference status of the array container. 


Pass By Reference 

The second thing references do is to pass variables byreference. This is done by making a local variable in a functionand a variable in the calling scope referencing the samecontent. Example: 


```php
function foo(&$var)
{
    $var++;
}

$a=5;
foo($a);
```

will make $a to be 6. This happens because inthe function foo the variable $var refers to the same content as $a. For more information on this, readthe passing byreference section. 


Return By Reference 

The third thing references can do is return by reference. 


### ===🗝 • What References Are Not


As said before, references are not pointers. That means, the following construct won't do what you expect: 


```php
function foo(&$var)
{
    $var =& $GLOBALS["baz"];
}
foo($bar); 
```



What happens is that $var in foo will be bound with $bar in the caller, but thenre-bound with $GLOBALS["baz"]. There's no way to bind $bar in the calling scope to something elseusing the reference mechanism, since $bar is not available in the function foo (it is represented by $var, but $var has only variable contents and not name-to-value binding in the calling symbol table). You can use returning references to reference variables selected by the function. 

### ===🗝 • Passing by Reference


You can pass a variable by reference to a function so the functioncan modify the variable. The syntax is as follows: 


```php
function foo(&$var)
{
    $var++;
}

$a=5;
foo($a);
// $a is 6 here
```



Note: There is no reference sign on a function call - only onfunction definitions. Function definitions alone are enough tocorrectly pass the argument by reference.  


The following things can be passed by reference: 

◦ Variables, i.e. foo($a)  
◦ References returned from functions, i.e.: 


```php
function foo(&$var)
{
    $var++;
}
function &bar()
{
    $a = 5;
    return $a;
}
foo(bar());
```

See more about returning by reference. 


No other expressions should be passed by reference, as the result is undefined. For example, the following examples of passingby reference are invalid: 


```php
function foo(&$var)
{
    $var++;
}
function bar() // Note the missing &
{
    $a = 5;
    return $a;
}
foo(bar()); // Produces a notice

foo($a = 5); // Expression, not variable
foo(5); // Produces fatal error

class Foobar
{
}

foo(new Foobar()) // Produces a notice as of PHP 7.0.7
                  // Notice: Only variables should be passed by reference
```

### ===🗝 • Returning References

Returning by reference is useful when you want to use a functionto find to which variable a reference should be bound. Do not use return-by-reference to increase performance.The engine will automatically optimize this on its own. Only returnreferences when you have a valid technical reason to do so. Toreturn references, use this syntax: 


```php
class foo {
    public $value = 42;

    public function &getValue() {
        return $this->value;
    }
}

$obj = new foo;
$myValue = &$obj->getValue(); // $myValue is a reference to $obj->value, which is 42.
$obj->value = 2;
echo $myValue;                // prints the new value of $obj->value, i.e. 2.
```

In this example, the property of the object returned by the getValue function would be set, not thecopy, as it would be without using reference syntax. 


Note: Unlike parameter passing, here you have to use & in both places - to indicate that youwant to return by reference, not a copy, and to indicate thatreference binding, rather than usual assignment, should be donefor $myValue.  


Note: If you try to return a reference from a function with the syntax: `return ($this->value);` this will notwork as you are attempting to return the result of an expression, and not a variable, by reference. You canonly return variables by reference from a function - nothing else.  

To use the returned reference, you must use reference assignment: 


```php
function &collector() {
  static $collection = array();
  return $collection;
}
$collection = &collector();
$collection[] = 'foo';
```

To pass the returned reference to another function expecting a reference you can use this syntax: 

```php
function &collector() {
  static $collection = array();
  return $collection;
}
array_push(collector(), 'foo');
```

Note: Note that `array_push(&collector(), 'foo');` will not work, it results in a fatal error. 


### ===🗝 • Unsetting References

When you unset the reference, you just break the binding between variable name and variable content. This does not mean that variable content will be destroyed. For example: 


```php
$a = 1;
$b =& $a;
unset($a); 
```

won't unset $b, just $a. 

Again, it might be useful to think about this as analogous to the Unix unlink call. 

### ===🗝 • Spotting References

Many syntax constructs in PHP are implemented via referencing mechanisms, so everything mentioned herein about reference binding alsoapplies to these constructs. Some constructs, like passing and returning by reference, are mentioned above. Other constructs thatuse references are: 


global References 

When you declare a variable as global $var youare in fact creating reference to a global variable. That means, this is the same as: 


```php
$var =& $GLOBALS["var"];
```

This also means that unsetting $var won't unset the global variable. 


## ==⚡ • Predefined Variables

PHP provides a large number of predefined variables to all scripts. Thevariables represent everything from external variables tobuilt-in environment variables, last error messages to last retrievedheaders. 


### ===🗝 • Superglobals — Built-in variables that are always available in all scopes

Several predefined variables in PHP are "superglobals", which means theyare available in all scopes throughout a script. There is no need to do `global $variable;` to access them within functions or methods. 

These superglobal variables are: 

	• $GLOBALS
	• $_SERVER
	• $_GET
	• $_POST
	• $_FILES
	• $_COOKIE
	• $_SESSION
	• $_REQUEST
	• $_ENV

Note: Variable availability

By default, all of the superglobals are available but there are directives that affect this availability. For further information, referto the documentation for variables_order. 

Note: Variable variables


Superglobals cannot be used as variable variables inside functions or class methods. 

See Also 

• variable scope
• The variables_order directive
• The filter extension



### ===🗝 • `$GLOBALS` — References all variables available in global scope


(PHP 4, PHP 5, PHP 7, PHP 8)

$GLOBALS — References all variables available in global scope


Description 

An associative array containing references to all variables whichare currently defined in the global scope of the script. The variable names are the keys of the array. 


Examples 


Example #1 $GLOBALS example

```php
function test() {
    $foo = "local variable";

    echo '$foo in global scope: ' . $GLOBALS["foo"] . "\n";
    echo '$foo in current scope: ' . $foo . "\n";
}

$foo = "Example content";
test();
```


The above example will output something similar to:


$foo in global scope: Example content
$foo in current scope: local variable



Warning 
As of PHP 8.1.0, write access to the entire $GLOBALS array is no longer supported: 


Example #2 writing entire $GLOBALS will result in error.

```php
 // Generates compile-time error:
 $GLOBALS = [];
 $GLOBALS += [];
 $GLOBALS =& $x;
 $x =& $GLOBALS;
 unset($GLOBALS);
 array_pop($GLOBALS);
 // ...and any other write/read-write operation on $GLOBALS
 ```



Notes 


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



Note: Variable availability


Unlike all of the other superglobals, $GLOBALS has essentially always been available in PHP. 


Note: 

As of PHP 8.1.0, $GLOBALS is now a read-only copy of the global symbol table. That is, global variables cannot be modified via its copy. Previously, $GLOBALS array is excluded from the usual by-value behavior of PHP arrays and global variables can be modified via its copy. 


```php
// Before PHP 8.1.0
$a = 1;
$globals = $GLOBALS; // Ostensibly by-value copy
$globals['a'] = 2;
var_dump($a); // int(2)

// As of PHP 8.1.0
// this no longer modifies $a. The previous behavior violated by-value semantics.
$globals = $GLOBALS;
$globals['a'] = 1;

// To restore the previous behavior, iterate its copy and assign each property back to $GLOBALS.
foreach ($globals as $key => $value) {
    $GLOBALS[$key] = $value;
}
```


### ===🗝 • `$_SERVER` — Server and execution environment information

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_SERVER` — Server and execution environment information


Description 

`$_SERVER` is an array containing informationsuch as headers, paths, and script locations. The entries in thisarray are created by the web server. There is no guarantee thatevery web server will provide any of these; servers may omit some,or provide others not listed here. That said, a large number ofthese variables are accounted for in the » CGI/1.1 specification, so you shouldbe able to expect those. 


Indices 

You may or may not find any of the following elements in `$_SERVER`. Note that few, if any, of these will beavailable (or indeed have any meaning) if running PHP on the command line. 


➡ `'PHP_SELF'` The filename of the currently executing script, relative tothe document root. For instance, `$_SERVER['PHP_SELF']` in a script at theaddress http://example.com/foo/bar.phpwould be /foo/bar.php.

The __FILE__ constant contains the full path and filename of the current (i.e.included) file. If PHP is running as a command-line processor this variable containsthe script name.

➡ `'argv'` Array of arguments passed to the script. When the script isrun on the command line, this gives C-style access to thecommand line parameters. When called via the GET method, thiswill contain the query string.

➡ `'argc'` Contains the number of command line parameters passed to the script (if run on the command line).

➡ `'GATEWAY_INTERFACE'` What revision of the CGI specification the server is using;e.g. 'CGI/1.1'.

➡ `'SERVER_ADDR'` The IP address of the server under which the current script isexecuting.

➡ `'SERVER_NAME'` The name of the server host under which the current script isexecuting. If the script is running on a virtual host, thiswill be the value defined for that virtual host.  

Note: Under Apache 2, you must set UseCanonicalName = On and ServerName. Otherwise, this value reflects thehostname supplied by the client, which can be spoofed.It is not safe to rely on this value in security-dependent contexts.

➡ `'SERVER_SOFTWARE'` Server identification string, given in the headers whenresponding to requests.

➡ `'SERVER_PROTOCOL'` Name and revision of the information protocol via which thepage was requested; e.g. 'HTTP/1.0';

➡ `'REQUEST_METHOD'` Which request method was used to access the page; e.g. 'GET','HEAD', 'POST', 'PUT'.  

Note: 

PHP script is terminated after sending headers (it means afterproducing any output without output buffering) if the request methodwas HEAD. 

➡ `'REQUEST_TIME'` The timestamp of the start of the request.

➡ `'REQUEST_TIME_FLOAT'` The timestamp of the start of the request, with microsecond precision.

➡ `'QUERY_STRING'`The query string, if any, via which the page was accessed.

➡ `'DOCUMENT_ROOT'` The document root directory under which the current script isexecuting, as defined in the server's configuration file.

➡ `'HTTP_ACCEPT'` Contents of the Accept: header from thecurrent request, if there is one.

➡ `'HTTP_ACCEPT_CHARSET'` Contents of the Accept-Charset: headerfrom the current request, if there is one. Example:'iso-8859-1,*,utf-8'.

➡ `'HTTP_ACCEPT_ENCODING'` Contents of the Accept-Encoding: headerfrom the current request, if there is one. Example: 'gzip'.

➡ `'HTTP_ACCEPT_LANGUAGE'` Contents of the Accept-Language: headerfrom the current request, if there is one. Example: 'en'.

➡ `'HTTP_CONNECTION'` Contents of the Connection: header fromthe current request, if there is one. Example: 'Keep-Alive'.

➡ `'HTTP_HOST'` Contents of the Host: header from thecurrent request, if there is one.

➡ `'HTTP_REFERER'` The address of the page (if any) which referred the useragent to the current page. This is set by the user agent. Notall user agents will set this, and some provide the abilityto modify HTTP_REFERER as a feature. Inshort, it cannot really be trusted.

➡ `'HTTP_USER_AGENT'` Contents of the User-Agent: header fromthe current request, if there is one. This is a stringdenoting the user agent being which is accessing the page. Atypical example is: Mozilla/4.5 [en] (X11; U;Linux 2.2.9 i586). Among other things, youcan use this value with get_browser() totailor your page's output to the capabilities of the useragent.

➡ `'HTTPS'` Set to a non-empty value if the script was queried through the HTTPSprotocol.

➡ `'REMOTE_ADDR'` The IP address from which the user is viewing the currentpage.

➡ `'REMOTE_HOST'` The Host name from which the user is viewing the currentpage. The reverse dns lookup is based on the REMOTE_ADDR of the user.  

Note: Your web server must be configured to create this variable. Forexample in Apache you'll need HostnameLookups Oninside httpd.conf for it to exist. See also gethostbyaddr().

➡ `''REMOTE_PORT'` The port being used on the user's machine to communicate withthe web server.

➡ `'REMOTE_USER'` The authenticated user.

➡ `'REDIRECT_REMOTE_USER'` The authenticated user if the request is internally redirected.

➡ `'SCRIPT_FILENAME'` 
The absolute pathname of the currently executing script. 


Note: 

If a script is executed with the CLI, as a relative path,such as file.php or ../file.php, `$_SERVER['SCRIPT_FILENAME']` willcontain the relative path specified by the user. 


➡ `'SERVER_ADMIN'` The value given to the SERVER_ADMIN (for Apache) directive inthe web server configuration file. If the script is runningon a virtual host, this will be the value defined for thatvirtual host.

➡ `'SERVER_PORT'` The port on the server machine being used by the web serverfor communication. For default setups, this will be '80';using SSL, for instance, will change this to whatever yourdefined secure HTTP port is.

Note: Under the Apache 2, you must set UseCanonicalName = On,as well as UseCanonicalPhysicalPort = On in order toget the physical (real) port, otherwise, this value can be spoofed and itmay or may not return the physical port value.It is not safe to rely on this value in security-dependent contexts.

➡ `'SERVER_SIGNATURE'` String containing the server version and virtual host namewhich are added to server-generated pages, if enabled.

➡ `'PATH_TRANSLATED'` Filesystem- (not document root-) based path to the currentscript, after the server has done any virtual-to-realmapping.

Note: Apache 2 users may use AcceptPathInfo = On inside httpd.conf to define PATH_INFO.

➡ `'SCRIPT_NAME'` Contains the current script's path. This is useful for pageswhich need to point to themselves.The __FILE__ constant contains the full path and filename of the current (i.e.included) file.

➡ `'REQUEST_URI'` The URI which was given in order to access this page; forinstance, '/index.html'.

➡ `'PHP_AUTH_DIGEST'` When doing Digest HTTP authentication this variable is setto the 'Authorization' header sent by the client (which youshould then use to make the appropriate validation).

➡ `'PHP_AUTH_USER'` When doing HTTP authentication this variable is set to theusername provided by the user.

➡ `'PHP_AUTH_PW'` When doing HTTP authentication this variable is set to thepassword provided by the user.

➡ `'AUTH_TYPE'` When doing HTTP authentication this variable is set to theauthentication type.

➡ `'PATH_INFO'` Contains any client-provided pathname information trailing theactual script filename but preceding the query string, ifavailable. For instance, if the current script was accessed via the URL http://www.example.com/php/path_info.php/some/stuff?foo=bar, then `$_SERVER['PATH_INFO']` would contain /some/stuff.

➡ `'ORIG_PATH_INFO'` Original version of 'PATH_INFO' before processed byPHP.  


Example #1 `$_SERVER` example

```php
echo $_SERVER['SERVER_NAME'];
```

The above example will output something similar to:


www.example.com


Notes 


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



See Also 

• The filter extension


### ===🗝 • `$_GET` — HTTP GET variables

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_GET` — HTTP GET variables


Description 

An associative array of variables passed to the current scriptvia the URL parameters (aka. query string). Note that the array is not onlypopulated for GET requests, but rather for all requests with a query string. 


Example #1 `$_GET` example

```php
echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
```


Assuming the user entered http://example.com/?name=Hannes 


The above example will output something similar to:


Hello Hannes!


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



Note: 

The GET variables are passed through urldecode(). 



See Also 


• Handling external variables
• The filter extension

### ===🗝 • `$_POST` — HTTP POST variables

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_POST` — HTTP POST variables


Description 

An associative array of variables passed to the current scriptvia the HTTP POST method when using application/x-www-form-urlencodedor multipart/form-data as the HTTP Content-Type in the request. 

Example #1 `$_POST` example

```php
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
```

Assuming the user POSTed name=Hannes 


The above example will output something similar to:


Hello Hannes!



Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 

See Also 
• Handling external variables
• The filter extension




### ===🗝 • `$_FILES` — HTTP File Upload variables

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_FILES` — HTTP File Upload variables


Description 

An associative array of items uploaded to the current scriptvia the HTTP POST method. The structure of this array is outlined in the POST method uploadssection. 


Notes 


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



See Also 


• move_uploaded_file() - Moves an uploaded file to a new location
• Handling File Uploads

### ===🗝 • `$_REQUEST` — HTTP Request variables


(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_REQUEST` — HTTP Request variables


Description 

An associative array that by default contains the contents of `$_GET`, `$_POST` and `$_COOKIE`. 


Notes 


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



Note: 

When running on the command line , this will not include the argv and argc entries; these arepresent in the `$_SERVER` array. 



Note: 

The variables in `$_REQUEST` are provided to thescript via the GET, POST, and COOKIE input mechanisms andtherefore could be modified by the remote user and cannot betrusted. The presence and order of variables listed in this arrayis defined according to the PHP request_order, and variables_orderconfiguration directives. 



See Also 
• Handling external variables
• The filter extension

### ===🗝 • `$_SESSION` — Session variables


`$_SESSION` — Session variables


Description 

An associative array containing session variables available tothe current script. See the Sessionfunctions documentation for more information on how thisis used. 


Notes 


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



See Also 

• session_start() - Start new or resume existing session


### ===🗝 • `$_ENV` — Environment variables

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_ENV` — Environment variables


Description 

An associative array of variables passed to the current scriptvia the environment method. 

These variables are imported into PHP's global namespace from theenvironment under which the PHP parser is running. Many areprovided by the shell under which PHP is running and differentsystems are likely running different kinds of shells, adefinitive list is impossible. Please see your shell'sdocumentation for a list of defined environment variables. 

Other environment variables include the CGI variables, placedthere regardless of whether PHP is running as a server module orCGI processor. 


Example #1 `$_ENV` example

```php
echo 'My username is ' .$_ENV["USER"] . '!';
```



Assuming "bjori" executes this script 


The above example will output something similar to:


My username is bjori!


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 



See Also 

• getenv() - Gets the value of an environment variable
• The filter extension

### ===🗝 • `$_COOKIE` — HTTP Cookies

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

`$_COOKIE` — HTTP Cookies


Description 

An associative array of variables passed to the current scriptvia HTTP Cookies. 


Example #1 `$_COOKIE` example

```php
echo 'Hello ' . htmlspecialchars($_COOKIE["name"]) . '!';
```


Assuming the "name" cookie has been set earlier 


The above example will output something similar to:


Hello Hannes!


Note: 

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods. 


See Also 
• setcookie() - Send a cookie
• Handling external variables
• The filter extension



### ===🗝 • `$php_errormsg` — The previous error message

(PHP 4, PHP 5, PHP 7)

$php_errormsg — The previous error message


Warning
This feature has been `DEPRECATED` as of PHP 7.2.0. Relying on this feature is highly discouraged.

Use `error_get_last()` instead. 


Description 

$php_errormsg is a variable containing thetext of the last error message generated by PHP. This variablewill only be available within the scope in which the erroroccurred, and only if the track_errors configurationoption is turned on (it defaults to off). 

Warning 
If a user defined error handler (set_error_handler())is set $php_errormsg is only set if the error handlerreturns false. 


Changelog 

8.0.0 Directive track_errors whichcaused $php_errormsg to be available has beenremoved.  
7.2.0 Directive track_errors whichcaused $php_errormsg to be available has beendeprecated.  


Example #1 $php_errormsg example

```php
@strpos();
echo $php_errormsg;
```

The above example will output something similar to:


Wrong parameter count for strpos()


See Also 

• error_get_last() - Get the last occurred error



### ===🗝 • `$http_response_header` — HTTP response headers

The $http_response_header array is similar to the get_headers() function. When using the HTTP wrapper, $http_response_header will be populated with the HTTPresponse headers. $http_response_header will be createdin the local scope. 


Example #1 $http_response_header example

```php
function get_contents() {
  file_get_contents("http://example.com");
  var_dump($http_response_header);
}
get_contents();
var_dump($http_response_header);
```

The above example will output something similar to:


array(9) {
  [0]=>
  string(15) "HTTP/1.1 200 OK"
  [1]=>
  string(35) "Date: Sat, 12 Apr 2008 17:30:38 GMT"
  [2]=>
  string(29) "Server: Apache/2.2.3 (CentOS)"
  [3]=>
  string(44) "Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT"
  [4]=>
  string(27) "ETag: "280100-1b6-80bfd280""
  [5]=>
  string(20) "Accept-Ranges: bytes"
  [6]=>
  string(19) "Content-Length: 438"
  [7]=>
  string(17) "Connection: close"
  [8]=>
  string(38) "Content-Type: text/html; charset=UTF-8"
}
NULL


### ===🗝 • `$argc` — The number of arguments passed to script

(PHP 4, PHP 5, PHP 7, PHP 8)

$argc — The number of arguments passed to script


Description 

Contains the number of arguments passed to the current script when runningfrom the command line. 


Note: The script's filename is always passed as an argument to the script, thereforethe minimum value of $argc is 1.  


Note: This variable is not available when register_argc_argvis disabled.  


Example #1 $argc example

```php
var_dump($argc);
```


When executing the example with: php script.php arg1 arg2 arg3 


The above example will output something similar to:


int(4)


Note: 

This is also available as `$_SERVER['argc']`. 



See Also 

• getopt() - Gets options from the command line argument list
• $argv

### ===🗝 • `$argv` — Array of arguments passed to script

(PHP 4, PHP 5, PHP 7, PHP 8)

$argv — Array of arguments passed to script


Description 

Contains an array of all the arguments passed to the script when runningfrom the command line. 


Note: The first argument $argv[0] is always the name that wasused to run the script.  


Note: This variable is not available when register_argc_argvis disabled.  


Example #1 $argv example

```php
var_dump($argv);
```

When executing the example with: php script.php arg1 arg2 arg3 

The above example will output something similar to:


array(4) {
  [0]=>
  string(10) "script.php"
  [1]=>
  string(4) "arg1"
  [2]=>
  string(4) "arg2"
  [3]=>
  string(4) "arg3"
}

Note: 

This is also available as `$_SERVER['argv']`. 

See Also 

• getopt() - Gets options from the command line argument list
• $argc




## ==⚡ • Predefined Exceptions


Error hierarchy 

• Throwable
	• Error
		• ArithmeticError
		• DivisionByZeroError
		• AssertionError
		• CompileError
		    • ParseError
		• TypeError
		    • ArgumentCountError
		• ValueError
		• UnhandledMatchError
		• FiberError
	• Exception
		... 


### ===🗝 • Exception

Exception is the base class forall user exceptions. 

Class synopsis 

```php
class Exception  implements Throwable {

/* Properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Methods */

public __construct(string $message = "", int $code = 0, ?Throwable $previous = null)

final public getMessage(): string
final public getPrevious(): ?Throwable
final public getCode(): int
final public getFile(): string
final public getLine(): int
final public getTrace(): array
final public getTraceAsString(): string
public __toString(): string

private __clone(): void
}
```

Properties 

➡ `message` The exception message
➡ `code` The exception code
➡ `file` The filename where the exception was created
➡ `line` The line where the exception was created
➡ `previous` The previously thrown exception
➡ `string` The string representation of the stack trace
➡ `trace` The stack trace as an array

Table of Contents 

    • Exception::__construct — Construct the exception
    • Exception::getMessage — Gets the Exception message
    • Exception::getPrevious — Returns previous Throwable
    • Exception::getCode — Gets the Exception code
    • Exception::getFile — Gets the file in which the exception was created
    • Exception::getLine — Gets the line in which the exception was created
    • Exception::getTrace — Gets the stack trace
    • Exception::getTraceAsString — Gets the stack trace as a string
    • Exception::__toString — String representation of the exception
    • Exception::__clone — Clone the exception

### ===🗝 • ErrorException

An Error Exception. 


Class synopsis 

```php
class ErrorException  extends Exception {

/* Properties */

protected int $severity = E_ERROR;

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Methods */

public __construct(
    string $message = "",
    int $code = 0,
    int $severity = E_ERROR,
    ?string $filename = null,
    ?int $line = null,
    ?Throwable $previous = null
)

final public getSeverity(): int

/* Inherited methods */

final public Exception::getMessage(): string
final public Exception::getPrevious(): ?Throwable
final public Exception::getCode(): int
final public Exception::getFile(): string
final public Exception::getLine(): int
final public Exception::getTrace(): array
final public Exception::getTraceAsString(): string
public Exception::__toString(): string

private Exception::__clone(): void
}
```

Properties 

➡ `severity` The severity of the exception

Example #1 Use set_error_handler() to change error messages into ErrorException.

```php
function exception_error_handler($severity, $message, $file, $line) {
    if (!(error_reporting() & $severity)) {
        // This error code is not included in error_reporting
        return;
    }
    throw new ErrorException($message, 0, $severity, $file, $line);
}
set_error_handler("exception_error_handler");

/* Trigger exception */
strpos();
```


The above example will output something similar to:


Fatal error: Uncaught exception 'ErrorException' with message 'strpos() expects at least 2 parameters, 0 given' in /home/bjori/tmp/ex.php:12
Stack trace:
#0 [internal function]: exception_error_handler(2, 'strpos() expect...', '/home/bjori/php...', 12, Array)
#1 /home/bjori/php/cleandocs/test.php(12): strpos()
#2 {main}
  thrown in /home/bjori/tmp/ex.php on line 12


Table of Contents 

    • ErrorException::__construct — Constructs the exception
    • ErrorException::getSeverity — Gets the exception severity

### ===🗝 • Error

Error is the base class for all internal PHP errors. 


Class synopsis 

```php
class Error  implements Throwable {

/* Properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Methods */

public __construct(string $message = "", int $code = 0, ?Throwable $previous = null)

final public getMessage(): string
final public getPrevious(): ?Throwable
final public getCode(): int
final public getFile(): string
final public getLine(): int
final public getTrace(): array
final public getTraceAsString(): string
public __toString(): string

private __clone(): void
}
```

Properties 

➡ `message` The error message
➡ `code` The error code
➡ `file` The filename where the error happened
➡ `line` The line where the error happened
➡ `previous` The previously thrown exception
➡ `string` The string representation of the stack trace
➡ `trace` The stack trace as an array

Table of Contents 

    • Error::__construct — Construct the error object
    • Error::getMessage — Gets the error message
    • Error::getPrevious — Returns previous Throwable
    • Error::getCode — Gets the error code
    • Error::getFile — Gets the file in which the error occurred
    • Error::getLine — Gets the line in which the error occurred
    • Error::getTrace — Gets the stack trace
    • Error::getTraceAsString — Gets the stack trace as a string
    • Error::__toString — String representation of the error
    • Error::__clone — Clone the error

### ===🗝 • ArgumentCountError

ArgumentCountError is thrownwhen too few arguments are passed to a user-defined function or method. 


Class synopsis 

```php
class ArgumentCountError  extends TypeError {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```


### ===🗝 • ArithmeticError

ArithmeticError is thrown whenan error occurs while performing mathematical operations.These errors include attempting to perform a bitshift by a negativeamount, and any call to intdiv() that would result in avalue outside the possible bounds of an int. 


Class synopsis


```php
class ArithmeticError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```

### ===🗝 • AssertionError

AssertionError is thrown whenan assertion made via assert() fails. 

Class synopsis

```php
class AssertionError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```

### ===🗝 • DivisionByZeroError


DivisionByZeroError is thrownwhen an attempt is made to divide a number by zero. 


Class synopsis

```php
class DivisionByZeroError  extends ArithmeticError {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```


### ===🗝 • CompileError

CompileError is thrown for somecompilation errors, which formerly issued a fatal error. 

Class synopsis

```php
class CompileError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```

### ===🗝 • ParseError

ParseError is thrown when anerror occurs while parsing PHP code, such as when eval() is called. 


Note: ParseError extends CompileErroras of PHP 7.3.0. Formerly, it extended Error.  


Class synopsis

```php
class ParseError  extends CompileError {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```


### ===🗝 • TypeError

A TypeError may be thrown when: 

The value being set for a class property does not matchthe property's corresponding declared type. 

The argument type being passed to a function does not matchits corresponding declared parameter type. 

A value being returned from a function does not match thedeclared function return type. 



Class synopsis

```php
class TypeError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```

Changelog

Version /  Description
7.1.0 A TypeError is no longer thrown whenan invalid number of arguments are passed to a built-in PHP functionin strict mode.Instead, an ArgumentCountError is raised.  


### ===🗝 • ValueError

A ValueError is thrown when thetype of an argument is correct but the value of it is incorrect.For example, passing a negative integer when the function expects apositive one, or passing an empty string/array when the function expectsit to not be empty. 


Class synopsis

```php
class ValueError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```


### ===🗝 • UnhandledMatchError

(PHP 8)

An UnhandledMatchError is thrownwhen the subject passed to a match expression is not handled by any armof the match expression. 


Class synopsis

```php
class UnhandledMatchError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;

/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```


### ===🗝 • FiberError

(PHP 8 >= 8.1.0)

FiberError is thrownwhen an invalid operation is performed on a Fiber. 


Class synopsis

```php
final class FiberError  extends Error {

/* Inherited properties */

protected string $message = "";
private string $string = "";
protected int $code;
protected string $file = "";
protected int $line;
private array $trace = [];
private ?Throwable $previous = null;
/* Methods */

public __construct()


/* Inherited methods */

final public Error::getMessage(): string
final public Error::getPrevious(): ?Throwable
final public Error::getCode(): int
final public Error::getFile(): string
final public Error::getLine(): int
final public Error::getTrace(): array
final public Error::getTraceAsString(): string
public Error::__toString(): string

private Error::__clone(): void
}
```

Table of Contents

    FiberError::__construct — Constructor to disallow direct instantiation


## ==⚡ • Predefined Interfaces and Classes

### ===🗝 • Traversable — The Traversable interface

Interface to detect if a class is traversable using foreach. 

Abstract base interface that cannot be implemented alone. Instead it mustbe implemented by either IteratorAggregate or Iterator. 


Note: 

Internal (built-in) classes that implement this interface can be used ina foreach construct and do not need to implement IteratorAggregate or Iterator. 



Note: 

This is an internal engine interface which cannot be implemented in PHPscripts. Either IteratorAggregate or Iterator must be used instead.When implementing an interface which extends Traversable, make sure tolist IteratorAggregate or Iterator before its name in the implementsclause. 

Interface synopsis 


```php
interface Traversable {
}
```

This interface has no methods, its only purpose is to be the baseinterface for all traversable classes


### ===🗝 • Iterator — The Iterator interface

(PHP 5, PHP 7, PHP 8)

Interface for external iterators or objects that can be iteratedthemselves internally. 

Interface synopsis 


```php
interface Iterator extends Traversable {

/* Methods */

public current(): mixed
public key(): mixed
public next(): void
public rewind(): void
public valid(): bool 
}
```

Predefined iterators 

PHP already provides a number of iterators for many day to day tasks.See SPL iterators for a list. 


Example #1 Basic usage


This example demonstrates in which order methods are called when using foreach with an iterator. 

```php
class myIterator implements Iterator {
    private $position = 0;
    private $array = array(
        "firstelement",
        "secondelement",
        "lastelement",
    );  

    public function __construct() {
        $this->position = 0;
    }

    public function rewind() {
        var_dump(__METHOD__);
        $this->position = 0;
    }

    public function current() {
        var_dump(__METHOD__);
        return $this->array[$this->position];
    }

    public function key() {
        var_dump(__METHOD__);
        return $this->position;
    }

    public function next() {
        var_dump(__METHOD__);
        ++$this->position;
    }

    public function valid() {
        var_dump(__METHOD__);
        return isset($this->array[$this->position]);
    }
}

$it = new myIterator;

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
```



The above example will output something similar to:


string(18) "myIterator::rewind"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(0)
string(12) "firstelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(1)
string(13) "secondelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(2)
string(11) "lastelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"


See Also 

See also object iteration.


Table of Contents 
• Iterator::current — Return the current element
• Iterator::key — Return the key of the current element
• Iterator::next — Move forward to next element
• Iterator::rewind — Rewind the Iterator to the first element
• Iterator::valid — Checks if current position is valid


### ===🗝 • IteratorAggregate — The IteratorAggregate interface

(PHP 5, PHP 7, PHP 8)

Interface to create an external Iterator. 

Interface synopsis 

```php
interface IteratorAggregate extends Traversable {

/* Methods */

public getIterator(): Traversable
}
```


Example #1 Basic usage

```php
class myData implements IteratorAggregate {
    public $property1 = "Public property one";
    public $property2 = "Public property two";
    public $property3 = "Public property three";

    public function __construct() {
        $this->property4 = "last property";
    }

    public function getIterator() {
        return new ArrayIterator($this);
    }
}

$obj = new myData;

foreach($obj as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
```



The above example will output something similar to:


string(9) "property1"
string(19) "Public property one"

string(9) "property2"
string(19) "Public property two"

string(9) "property3"
string(21) "Public property three"

string(9) "property4"
string(13) "last property"


Table of Contents 

• IteratorAggregate::getIterator — Retrieve an external iterator

### ===🗝 • Throwable

(PHP 7, PHP 8)

Throwable is the base interface for any object thatcan be thrown via a throw statement, including Error and Exception. 


Note: 

PHP classes cannot implement the Throwableinterface directly, and must instead extend Exception. 


Interface synopsis 

```php
interface Throwable extends Stringable {

/* Methods */

public getMessage(): string
public getCode(): int
public getFile(): string
public getLine(): int
public getTrace(): array
public getTraceAsString(): string
public getPrevious(): ?Throwable
abstract public __toString(): string

/* Inherited methods */

public Stringable::__toString(): string 
}
```

Changelog 

8.0.0 Throwable implements Stringable now.  

Table of Contents 

	• Throwable::getMessage — Gets the message
	• Throwable::getCode — Gets the exception code
	• Throwable::getFile — Gets the file in which the object was created
	• Throwable::getLine — Gets the line on which the object was instantiated
	• Throwable::getTrace — Gets the stack trace
	• Throwable::getTraceAsString — Gets the stack trace as a string
	• Throwable::getPrevious — Returns the previous Throwable
	• Throwable::__toString — Gets a string representation of the thrown object

### ===🗝 • ArrayAccess — The ArrayAccess interface

(PHP 5, PHP 7, PHP 8)

Interface to provide accessing objects as arrays. 

Interface synopsis 

```php
interface ArrayAccess {

/* Methods */

public offsetExists(mixed $offset): bool
public offsetGet(mixed $offset): mixed
public offsetSet(mixed $offset, mixed $value): void
public offsetUnset(mixed $offset): void
}
```

Example #1 Basic usage

```php
class Obj implements ArrayAccess {
    private $container = array();

    public function __construct() {
        $this->container = array(
            "one"   => 1,
            "two"   => 2,
            "three" => 3,
        );
    }

    public function offsetSet($offset, $value) {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    public function offsetExists($offset) {
        return isset($this->container[$offset]);
    }

    public function offsetUnset($offset) {
        unset($this->container[$offset]);
    }

    public function offsetGet($offset) {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }
}

$obj = new Obj;

var_dump(isset($obj["two"]));
var_dump($obj["two"]);
unset($obj["two"]);
var_dump(isset($obj["two"]));
$obj["two"] = "A value";
var_dump($obj["two"]);
$obj[] = 'Append 1';
$obj[] = 'Append 2';
$obj[] = 'Append 3';
print_r($obj);
```

The above example will output something similar to:

bool(true)
int(2)
bool(false)
string(7) "A value"
obj Object
(
    [container:obj:private] => Array
        (
            [one] => 1
            [three] => 3
            [two] => A value
            [0] => Append 1
            [1] => Append 2
            [2] => Append 3
        )

)


Table of Contents 
• ArrayAccess::offsetExists — Whether an offset exists
• ArrayAccess::offsetGet — Offset to retrieve
• ArrayAccess::offsetSet — Assign a value to the specified offset
• ArrayAccess::offsetUnset — Unset an offset


### ===🗝 • Serializable — The Serializable interface

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Interface for customized serializing. 

Classes that implement this interface no longer support `__sleep()` and `__wakeup()`. The method serialize is called whenever an instance needs to be serialized. This does not invoke `__destruct()` or have any other side effect unless programmed inside the method. When the data isunserialized the class is known and the appropriate unserialize() method is called as a constructor instead of calling `__construct()`. If you need to execute the standardconstructor you may do so in the method. 

Warning 
As of PHP 8.1.0, a class which implements Serializable without also implementing `__serialize()` and `__unserialize()` will generate a deprecation warning. 


Interface synopsis

```php
interface Serializable {

/* Methods */

public serialize(): ?string
public unserialize(string $data): void
}
```


Example #1 Basic usage

```php
class obj implements Serializable {
    private $data;
    public function __construct() {
        $this->data = "My private data";
    }
    public function serialize() {
        return serialize($this->data);
    }
    public function unserialize($data) {
        $this->data = unserialize($data);
    }
    public function getData() {
        return $this->data;
    }
}

$obj = new obj;
$ser = serialize($obj);

var_dump($ser);

$newobj = unserialize($ser);

var_dump($newobj->getData());
```


The above example will output something similar to:


string(38) "C:3:"obj":23:{s:15:"My private data";}"
string(15) "My private data"


Table of Contents 
• Serializable::serialize — String representation of object
• Serializable::unserialize — Constructs the object


### ===🗝 • Closure — The Closure class

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Class used to represent anonymous functions. 

Anonymous functions yield objects of this type.This class has methods that allowfurther control of the anonymous function after it has been created. 

Besides the methods listed here, this class also has an `__invoke` method. This is for consistency with otherclasses that implement callingmagic, as this method is not used for calling the function. 


Class synopsis 

```php
final class Closure {

/* Methods */

private __construct()

public static bind(Closure $closure, ?object $newThis, object|string|null $newScope = "static"): ?Closure

public bindTo(?object $newThis, object|string|null $newScope = "static"): ?Closure

public call(object $newThis, mixed ...$args): mixed

public static fromCallable(callable $callback): Closure
}
```

Table of Contents 

    • Closure::__construct — Constructor that disallows instantiation
    • Closure::bind — Duplicates a closure with a specific bound object and class scope
    • Closure::bindTo — Duplicates the closure with a new bound object and class scope
    • Closure::call — Binds and calls the closure
    • Closure::fromCallable — Converts a callable into a closure


This static version of Closure::bindTo() has parameters: 

➡ `closure`
The anonymous functions to bind. 

➡ `newThis`
The object to which the given anonymous function should be bound, or null for the closure to be unbound. 

➡ `newScope`
The class scope to which the closure is to be associated, or'static' to keep the current one. If an object is given, the type of theobject will be used instead. This determines the visibility of protectedand private methods of the bound object.It is not allowed to pass (an object of) an internal class as this parameter. 


Return Values 

Returns a new Closure object, or null on failure. 

Example #1 Closure::bind() example

```php
class A {
    private static $sfoo = 1;
    private $ifoo = 2;
}
$cl1 = static function() {
    return A::$sfoo;
};
$cl2 = function() {
    return $this->ifoo;
};

$bcl1 = Closure::bind($cl1, null, 'A');
$bcl2 = Closure::bind($cl2, new A(), 'A');
echo $bcl1(), "\n";
echo $bcl2(), "\n";
```

The above example will output something similar to:


1
2


Example #1 Closure::bindTo() example

```php
class A {
    function __construct($val) {
        $this->val = $val;
    }
    function getClosure() {
        //returns closure bound to this object and scope
        return function() { return $this->val; };
    }
}

$ob1 = new A(1);
$ob2 = new A(2);

$cl = $ob1->getClosure();
echo $cl(), "\n";
$cl = $cl->bindTo($ob2);
echo $cl(), "\n";
```



The above example will output something similar to:


1
2


Example #1 Closure::call() example

```php
class Value {
    protected $value;

    public function __construct($value) {
        $this->value = $value;
    }

    public function getValue() {
        return $this->value;
    }
}

$three = new Value(3);
$four = new Value(4);

$closure = function ($delta) { var_dump($this->getValue() + $delta); };
$closure->call($three, 4);
$closure->call($four, 4);
```



The above example will output:


int(7)
int(8)



### ===🗝 • Generator — The Generator class

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator objects are returned from generators. 

Caution 
Generator objects cannot be instantiated via new. 


Class synopsis 

```php
final class Generator  implements Iterator {

/* Methods */
public current(): mixed
public getReturn(): mixed
public key(): mixed
public next(): void
public rewind(): void
public send(mixed $value): mixed
public throw(Throwable $exception): mixed
public valid(): bool
public __wakeup(): void
}
```

See Also 

See also object iteration.

Table of Contents 

• Generator::current — Get the yielded value
• Generator::getReturn — Get the return value of a generator
• Generator::key — Get the yielded key
• Generator::next — Resume execution of the generator
• Generator::rewind — Rewind the iterator
• Generator::send — Send a value to the generator
• Generator::throw — Throw an exception into the generator
• Generator::valid — Check if the iterator has been closed
• Generator::__wakeup — Serialize callback



Example #1 Using Generator::send() to inject values

```php
function printer() {
    echo "I'm printer!".PHP_EOL;
    while (true) {
        $string = yield;
        echo $string.PHP_EOL;
    }
}

$printer = printer();
$printer->send('Hello world!');
$printer->send('Bye world!');
```

The above example will output:


I'm printer!
Hello world!
Bye world!


### ===🗝 • Fiber — The Fiber class

(PHP 8 >= 8.1.0)

Fibers represent full-stack, interruptible functions. Fibers may be suspended from anywhere in the call-stack,pausing execution within the fiber until the fiber is resumed at a later time. 


Class synopsis 


```php
final class Fiber {

/* Methods */
public __construct(callable $callback)
public start(mixed ...$args): mixed
public resume(mixed $value = null): mixed
public throw(Throwable $exception): mixed
public getReturn(): mixed
public isStarted(): bool
public isSuspended(): bool
public isRunning(): bool
public isTerminated(): bool
public static suspend(mixed $value = null): mixed
public static getCurrent(): ?Fiber
}
```

Table of Contents 

	• Fiber::__construct — Creates a new Fiber instance
	• Fiber::start — Start execution of the fiber
	• Fiber::resume — Resumes execution of the fiber with a value
	• Fiber::throw — Resumes execution of the fiber with an exception
	• Fiber::getReturn — Gets the value returned by the Fiber
	• Fiber::isStarted — Determines if the fiber has started
	• Fiber::isSuspended — Determines if the fiber is suspended
	• Fiber::isRunning — Determines if the fiber is running
	• Fiber::isTerminated — Determines if the fiber has terminated
	• Fiber::suspend — Suspends execution of the current fiber
	• Fiber::getCurrent — Gets the currently executing Fiber instance

### ===🗝 • WeakReference — The WeakReference class

(PHP 7 >= 7.4.0, PHP 8)

Weak references allow the programmer to retain a reference to an object which does not preventthe object from being destroyed. They are useful for implementing cache like structures. 

WeakReferences cannot be serialized. 


Class synopsis 

```php
final class WeakReference {

/* Methods */
public __construct()
public static create(object $object): WeakReference
public get(): ?object
}
```

Example #1 Basic WeakReference Usage

```php
$obj = new stdClass;
$weakref = WeakReference::create($obj);
var_dump($weakref->get());
unset($obj);
var_dump($weakref->get());
?>  


The above example will output something similar to:


object(stdClass)#1 (0) {
}
NULL
```

Table of Contents 
• WeakReference::__construct — Constructor that disallows instantiation
• WeakReference::create — Create a new weak reference
• WeakReference::get — Get a weakly referenced Object



### ===🗝 • WeakMap — The WeakMap class

(PHP 8)

A WeakMap is map (or dictionary) that accepts objects as keys. However, unlike theotherwise similar SplObjectStorage, an object in a key of WeakMapdoes not contribute toward the object's reference count. That is, if at any point the only remaining referenceto an object is the key of a WeakMap, the object will be garbage collected and removedfrom the WeakMap. Its primary use case is for building caches of data derived froman object that do not need to live longer than the object. 

WeakMap implements ArrayAccess, Iterator, and Countable,so in most cases it can be used in the same fashion as an associative array. 


Class synopsis 

```php
final class WeakMap  implements ArrayAccess, Countable, IteratorAggregate {

/* Methods */
public __construct()
public count(): int
public getIterator(): Iterator
public offsetExists(object $object): bool
public offsetGet(object $object): mixed
public offsetSet(object $object, mixed $value): void
public offsetUnset(object $object): void
}
```



Example #1 Weakmap usage example


```php
$wm = new WeakMap();

$o = new StdClass;

class A {
    public function __destruct() {
        echo "Dead!\n";
    }
}

$wm[$o] = new A;

var_dump(count($wm));
echo "Unsetting...\n";
unset($o);
echo "Done\n";
var_dump(count($wm));  
```

The above example will output:


int(1)
Unsetting...
Dead!
Done
int(0)


Table of Contents 

	• WeakMap::__construct — Constructs a new map
	• WeakMap::count — Counts the number of live entries in the map
	• WeakMap::getIterator — Retrieve an external iterator
	• WeakMap::offsetExists — Checks whether a certain object is in the map
	• WeakMap::offsetGet — Returns the value pointed to by a certain object
	• WeakMap::offsetSet — Updates the map with a new key-value pair
	• WeakMap::offsetUnset — Removes an entry from the map

### ===🗝 • Stringable — The Stringable interface

(PHP 8)

The Stringable interface denotes a class ashaving a `__toString()` method. Unlike most interfaces, Stringable is implicitly present on any class thathas the magic `__toString()` method defined, although itcan and should be declared explicitly. 

Its primary value is to allow functions to type check against the uniontype string|Stringable to accept either a string primitiveor an object that can be cast to a string. 


Interface synopsis 

```php
interface Stringable {

/* Methods */
public __toString(): string

}
```

Example #1 Basic Stringable Usage

```php
class IPv4Address implements Stringable {
    private string $oct1;
    private string $oct2;
    private string $oct3;
    private string $oct4;

    public function __construct(string $oct1, string $oct2, string $oct3, string $oct4) {
        $this->oct1 = $oct1;
        $this->oct2 = $oct2;
        $this->oct3 = $oct3;
        $this->oct4 = $oct4;
    }

    public function __toString(): string {
        return "$this->oct1.$this->oct2.$this->oct3.$this->oct4";
    }
}

function showStuff(string|Stringable $value) {
    // A Stringable will get converted to a string here by calling
    // __toString.
    print $value;
}

$ip = new IPv4Address('123', '234', '42', '9');

showStuff($ip);
```

The above example will output something similar to:


123.234.42.9


Table of Contents 

    • Stringable::__toString — Gets a string representation of the object

### ===🗝 • UnitEnum — The UnitEnum interface

(PHP 8 >= 8.1.0)

The `UnitEnum` interface is automatically applied to all enumerations by the engine. It may not be implemented by user-defined classes. Enumerations may not override its methods, as default implementations are provided by the engine. It is available only for type checks. 


Interface synopsis 

```php
interface UnitEnum {

/* Methods */

public static cases(): array
}
```

Table of Contents 

    • UnitEnum::cases — Generates a list of cases on an enum


Example #1 Basic usage


The following example illustrates how enum cases are returned. 

```php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

var_dump(Suit::cases());
```

The above example will output:


array(4) {
    [0]=>
    enum(Suit::Hearts)
    [1]=>
    enum(Suit::Diamonds)
    [2]=>
    enum(Suit::Clubs)
    [3]=>
    enum(Suit::Spades)
}


### ===🗝 • BackedEnum — The BackedEnum interface

(PHP 8 >= 8.1.0)

The BackedEnum interface is automatically applied to backedenumerations by the engine. It may not be implemented by user-defined classes.Enumerations may not override its methods, as default implementations are providedby the engine. It is available only for type checks. 


Interface synopsis 

```php
interface BackedEnum extends UnitEnum {

/* Methods */

public static from(int|string $value): static

public static tryFrom(int|string $value): ?static

/* Inherited methods */

public static UnitEnum::cases(): array
}
```

Table of Contents 

• BackedEnum::from — Maps a scalar to an enum instance
• BackedEnum::tryFrom — Maps a scalar to an enum instance or null


The following example illustrates how enum cases are returned. 

```php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$h = Suit::from('H');

var_dump($h);

$b = Suit::from('B');
```


The above example will output:


enum(Suit::Hearts)

Fatal error: Uncaught ValueError: "B" is not a valid backing value for enum "Suit" in /file.php:15


The following example illustrates how enum cases are returned. 

```php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$h = Suit::tryFrom('H');

var_dump($h);

$b = Suit::tryFrom('B') ?? Suit::Spades;

var_dump($b);
```

The above example will output:


enum(Suit::Hearts)
enum(Suit::Spades)



## ==⚡ • Context options and parameters

PHP offers various context options and parameters which can be used with allfilesystem and stream wrappers. The context is created with `stream_context_create()`. Options are set with `stream_context_set_option()` and parameters with `stream_context_set_params()`. 

### ===🗝 • Socket context options — Socket context option listing

Socket context options — Socket context option listing


Socket context options are available for all wrappers that work oversockets, like tcp, http and ftp. 


Options 


➡ `bindto`
Used to specify the IP address (either IPv4 or IPv6) and/or theport number that PHP will use to access the network. The syntaxis ip:port for IPv4 addresses, and [ip]:port for IPv6 addresses.Setting the IP or the port to 0 will let the system choose the IP and/or port. 


Note: 

As FTP creates two socket connections during normal operation,the port number cannot be specified using this option. 

➡ `backlog`
Used to limit the number of outstanding connections in thesocket's listen queue. 


Note: 

This is only applicable to stream_socket_server(). 

➡ `ipv6_v6only`
Overrides the OS default regarding mapping IPv4 into IPv6. 


Note: 

This is important in particular when trying to listen on IPv4 addressesseparately while there exists a binding on [::]. 

This is only applicable to stream_socket_server(). 

➡ `so_reuseport`
Allows multiple bindings to a same ip:port pair, even from separate processes. 


Note: 

This is only applicable to stream_socket_server(). 

➡ `so_broadcast`
Enables sending and receiving data to/from broadcast addresses. 


Note: 

This is only applicable to stream_socket_server(). 

➡ `tcp_nodelay`
Setting this option to true will set SOL_TCP,NO_DELAY=1appropriately, thus disabling the TCP Nagle algorithm. 



Changelog 

7.1.0 Added tcp_nodelay.  
7.0.1 Added ipv6_v6only.  


Example #1 Basic bindto usage example

```php
// connect to the internet using the '192.168.0.100' IP
$opts = array(
    'socket' => array(
        'bindto' => '192.168.0.100:0',
    ),
);


// connect to the internet using the '192.168.0.100' IP and port '7000'
$opts = array(
    'socket' => array(
        'bindto' => '192.168.0.100:7000',
    ),
);


// connect to the internet using the '2001:db8::1' IPv6 address
// and port '7000'
$opts = array(
    'socket' => array(
        'bindto' => '[2001:db8::1]:7000',
    ),
);


// connect to the internet using port '7000'
$opts = array(
    'socket' => array(
        'bindto' => '0:7000',
    ),
);


// create the context...
$context = stream_context_create($opts);

// ...and use it to fetch the data
echo file_get_contents('http://www.example.com', false, $context);
```


### ===🗝 • HTTP context options — HTTP context option listing

Context options for http:// and https://transports. 


Options 



➡ `method` string 
GET, POST, orany other HTTP method supported by the remote server. 

Defaults to GET. 

➡ `header` array or string 
Additional headers to be sent during request. Valuesin this option will override other values (such as User-agent:, Host:,and Authentication:),even when following Location: redirects.Thus it is not recommended to set a Host: header,if follow_location is enabled. 

➡ `user_agent` string 
Value to send with User-Agent: header. This value willonly be used if user-agent is not specifiedin the header context option above. 

By default the user_agent php.ini setting is used. 

➡ `content` string 
Additional data to be sent after the headers. Typically usedwith POST or PUT requests. 

➡ `proxy` string 
URI specifying address of proxy server. (e.g. tcp://proxy.example.com:5100). 

➡ `request_fulluri` bool 
When set to true, the entire URI will be used whenconstructing the request. (e.g. GET http://www.example.com/path/to/file.html HTTP/1.0).While this is a non-standard request format, someproxy servers require it. 

Defaults to false. 

➡ `follow_location` int 
Follow Location header redirects. Set to 0 to disable. 

Defaults to 1. 

➡ `max_redirects` int 
The max number of redirects to follow. Value 1 orless means that no redirects are followed. 

Defaults to 20. 

➡ `protocol_version` float 
HTTP protocol version. 

Defaults to 1.1 as of PHP 8.0.0; prior to that version the default was 1.0. 

➡ `timeout` float 
Read timeout in seconds, specified by a float(e.g. 10.5). 

By default the default_socket_timeout php.ini setting is used. 

➡ `ignore_errors` bool 
Fetch the content even on failure status codes. 

Defaults to false. 


Example #1 Fetch a page and send POST data

```php
$postdata = http_build_query(
    array(
        'var1' => 'some content',
        'var2' => 'doh'
    )
);

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata
    )
);

$context = stream_context_create($opts);

$result = file_get_contents('http://example.com/submit.php', false, $context);
```


Example #2 Ignore redirects but fetch headers and content 

```php
$url = "http://www.example.org/header.php";

$opts = array('http' =>
    array(
        'method' => 'GET',
        'max_redirects' => '0',
        'ignore_errors' => '1'
    )
);

$context = stream_context_create($opts);
$stream = fopen($url, 'r', false, $context);

// header information as well as meta data
// about the stream
var_dump(stream_get_meta_data($stream));

// actual data at $url
var_dump(stream_get_contents($stream));
fclose($stream);
```


Note: Underlying socket stream context options
Additional context options may be supported by the underlying transport For http:// streams, refer to context options for the tcp:// transport. For https:// streams, refer to context optionsfor the ssl:// transport.  


Note: HTTP status line
When this stream wrapper follows a redirect, the wrapper_data returned by stream_get_meta_data() might not necessarily containthe HTTP status line that actually applies to the content data at index 0.  


array (
  'wrapper_data' =>
  array (
    0 => 'HTTP/1.0 301 Moved Permanently',
    1 => 'Cache-Control: no-cache',
    2 => 'Connection: close',
    3 => 'Location: http://example.com/foo.jpg',
    4 => 'HTTP/1.1 200 OK',
    ...

The first request returned a 301 (permanent redirect),so the stream wrapper automatically followed the redirect to get a 200 response (index = 4).  


See Also 


• http://
• Socket context options
• SSL context options

### ===🗝 • FTP context options — FTP context option listing

FTP context options — FTP context option listing

Context options for ftp:// and ftps:// transports. 


Options 


➡ `overwrite` bool 
Allow overwriting of already existing files on remote server.Applies to write mode (uploading) only. 

Defaults to false. 

➡ `resume_pos` int 
File offset at which to begin transfer. Applies to read mode (downloading) only. 

Defaults to 0 (Beginning of File). 

➡ `proxy` string 
Proxy FTP request via http proxy server. Applies to file readoperations only. Ex: tcp://squid.example.com:8000. 



Notes 


Note: Underlying socket stream context options
Additional context options may be supported by the underlying transportFor ftp:// streams, refer to contextoptions for the tcp:// transport. For ftps:// streams, refer to context optionsfor the ssl:// transport.  


See Also 


• ftp://
• Socket context options
• SSL context options


### ===🗝 • SSL context options — SSL context option listing

Context options for ssl:// and tls:// transports. 


Options 

➡ `peer_name` string 
Peer name to be used. If this value is not set, then the name is guessedbased on the hostname used when opening the stream. 

➡ `verify_peer` bool 
Require verification of SSL certificate used. 

Defaults to true. 

➡ `verify_peer_name` bool 
Require verification of peer name. 

Defaults to true. 

➡ `allow_self_signed` bool 
Allow self-signed certificates. Requires verify_peer. 

Defaults to false 

➡ `cafile` string 
Location of Certificate Authority file on local filesystemwhich should be used with the verify_peercontext option to authenticate the identity of the remote peer. 

➡ `capath` string 
If cafile is not specified or if the certificateis not found there, the directory pointed to by capath is searched for a suitable certificate. capathmust be a correctly hashed certificate directory. 

➡ `local_cert` string 
Path to local certificate file on filesystem. It must be a PEM encoded file which contains your certificate and private key.It can optionally contain the certificate chain of issuers.The private key also may be contained in a separate file specified by local_pk. 

➡ `local_pk` string 
Path to local private key file on filesystem in case of separatefiles for certificate (local_cert) and private key. 

➡ `passphrase` string 
Passphrase with which your local_cert filewas encoded. 

➡ `verify_depth` int 
Abort if the certificate chain is too deep. 

Defaults to no verification. 

➡ `ciphers` string 
Sets the list of available ciphers. The format of the string is described in » ciphers(1). https://www.openssl.org/docs/manmaster/man1/ciphers.html#CIPHER-LIST-FORMAT

Defaults to DEFAULT. 

➡ `capture_peer_cert` bool 
If set to true a peer_certificate context optionwill be created containing the peer certificate. 

➡ `capture_peer_cert_chain` bool 
If set to true a peer_certificate_chain contextoption will be created containing the certificate chain. 

➡ `SNI_enabled` bool 
If set to true server name indication will be enabled. Enabling SNIallows multiple certificates on the same IP address. 

➡ `disable_compression` bool 
If set, disable TLS compression. This can help mitigate the CRIME attackvector. 

➡ `peer_fingerprint` string | array 
Aborts when the remote certificate digest doesn't match the specifiedhash. 

When a string is used, the length will determine which hashing algorithmis applied, either "md5" (32) or "sha1" (40). 

When an array is used, the keys indicate the hashing algorithm nameand each corresponding value is the expected digest. 

➡ `security_level` int 
Sets the security level. If not specified the library default security level is used.The security levels are described in » SSL_CTX_get_security_level(3). https://www.openssl.org/docs/man1.1.0/man3/SSL_CTX_get_security_level.html

Available as of PHP 7.2.0 and OpenSSL 1.1.0. 


Changelog 


7.2.0 Added security_levels. Requires OpenSSL >= 1.1.0.  

Note: Because ssl:// is the underlying transport for the https:// and ftps:// wrappers,any context options which apply to ssl:// also apply to https:// and ftps://.  


Note: For SNI (Server Name Indication) to be available, then PHP must be compiledwith OpenSSL 0.9.8j or greater. Use the OPENSSL_TLSEXT_SERVER_NAME to determine whether SNI issupported.  

See Also 

• Socket context options


### ===🗝 • CURL context options — CURL context option listing

CURL context options — CURL context option listing


CURL context options are available when the CURL extension was compiled using the --with-curlwrappers configure option. 


Options 

➡ `method` string 
GET, POST, orany other HTTP method supported by the remote server. 

Defaults to GET. 

➡ `header` string 
Additional headers to be sent during request. Valuesin this option will override other values (such as User-agent:, Host:,and Authentication:). 

➡ `user_agent` string 
Value to send with User-Agent: header. 

By default the user_agent php.ini setting is used. 

➡ `content` string 
Additional data to be sent after the headers. This option is not usedfor GET or HEAD requests. 

➡ `proxy` string 
URI specifying address of proxy server. (e.g. tcp://proxy.example.com:5100). 

➡ `max_redirects` int 
The max number of redirects to follow. Value 1 orless means that no redirects are followed. 

Defaults to 20. 

➡ `curl_verify_ssl_host` bool 
Verify the host. 

Defaults to false 


Note: 

This option is available for both the http and ftp protocol wrappers. 


➡ `curl_verify_ssl_peer` bool 
Require verification of SSL certificate used. 

Defaults to false 


Note: 

This option is available for both the http and ftp protocol wrappers. 


Example #1 Fetch a page and send POST data

```php
$postdata = http_build_query(
    array(
        'var1' => 'some content',
        'var2' => 'doh'
    )
);

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata
    )
);

$context = stream_context_create($opts);

$result = file_get_contents('http://example.com/submit.php', false, $context);
```

See Also 

• Socket context options


### ===🗝 • Phar context options — Phar context option listing

Phar context options — Phar context option listing

Context options for phar:// wrapper. 

Options 

➡ `compress` int 
One of Phar compression constants. 

➡ `metadata` mixed 
Phar metadata. See Phar::setMetadata(). 

See Also 

• phar://
• Phar stream wrapper

### ===🗝 • Context parameters — Context parameter listing

These parameters can be set on a contextusing the stream_context_set_params() function. 


Parameters 


➡ `notification` callable 
A callable to be called when an event occurs on a stream. 

See `stream_notification_callback` for more details. 


### ===🗝 • Zip context options — Zip context option listing

Zip context options are available for zip wrappers. 


Options 


➡ `password`
Used to specify password used for encrypted archive. 


Changelog 

PHP 7.2.0, PECL zip 1.14.0 Added password.  


Example #1 Basic password usage example

```php
// Read encrypted archive
$opts = array(
    'zip' => array(
        'password' => 'secret',
    ),
);
// create the context...
$context = stream_context_create($opts);

// ...and use it to fetch the data
echo file_get_contents('zip://test.zip#test.txt', false, $context);
```


## ==⚡ • Supported Protocols and Wrappers

Supported Protocols and Wrappers 

PHP comes with many built-in wrappers for various URL-style protocols for use with the filesystem functions such as fopen(), copy(), file_exists() and filesize(). In addition to these wrappers, it is possible to register custom wrappers using the `stream_wrapper_register()` function. 


Note: The URL syntax used to describe a wrapper only supports the scheme://... syntax. The scheme:/and scheme: syntaxes are not supported.  

Table of Contents 

• file:// — Accessing local filesystem
• http:// — Accessing HTTP(s) URLs
• ftp:// — Accessing FTP(s) URLs
• php:// — Accessing various I/O streams
• zlib:// — Compression Streams
• data:// — Data (RFC 2397)
• glob:// — Find pathnames matching pattern
• phar:// — PHP Archive
• ssh2:// — Secure Shell 2
• rar:// — RAR
• ogg:// — Audio streams
• expect:// — Process Interaction Streams

使用 http:// Wrapper 需要 openssl 扩展支持，否则出错：

	file_get_contents(): Unable to find the wrapper &quot;https

需要在 php.ini 添加以下扩展，并通过 php -i 查看扩展状态是处于禁用状态：OpenSSL support => disabled (install ext/openssl)

	extension=openssl


### ===🗝 • `file://` — Accessing local filesystem

Filesystem is the default wrapper used with PHP and represents the local filesystem.When a relative path is specified (a path which does not begin with /, \, \\, or a Windows drive letter)the path provided will be applied against the current working directory. In many cases this is thedirectory in which the script resides unless it has been changed. Using the CLI sapi, this defaultsto the directory from which the script was called. 

With some functions, such as `fopen()` and `file_get_contents()`, include_path may be optionally searched for relative paths as well. 


Usage 

◦ /path/to/file.ext
◦ relative/path/to/file.ext
◦ fileInCwd.ext
◦ C:/path/to/winfile.ext
◦ C:\path\to\winfile.ext
◦ \\smbserver\share\path\to\winfile.ext
◦ file:///path/to/file.ext


Options 


Wrapper Summary

|                Attribute                | Supported |
|-----------------------------------------|-----------|
| Restricted by allow_url_fopen           | No        |
| Allows Reading                          | Yes       |
| Allows Writing                          | Yes       |
| Allows Appending                        | Yes       |
| Allows Simultaneous Reading and Writing | Yes       |
| Supports stat()                         | Yes       |
| Supports unlink()                       | Yes       |
| Supports rename()                       | Yes       |
| Supports mkdir()                        | Yes       |
| Supports rmdir()                        | Yes       |


### ===🗝 • `http://` — Accessing HTTP(s) URLs

Allows read-only access to files/resources via HTTP.By default, a HTTP 1.0 GET is used. A Host: header is sent with the requestto handle name-based virtual hosts. If you have configureda user_agent string usingyour php.ini file or the stream context, it will also be includedin the request. 

The stream allows access to the body ofthe resource; the headers are stored in the $http_response_header variable. 

If it's important to know the URL of the resource whereyour document came from (after all redirects have been processed),you'll need to process the series of response headers returned by thestream. 

The from directive will be used for the From: header if set and not overwritten by the Context options and parameters. 


Usage 
◦ http://example.com
◦ http://example.com/file.php?var1=val1&var2=val2
◦ http://user:password@example.com
◦ https://example.com
◦ https://example.com/file.php?var1=val1&var2=val2
◦ https://user:password@example.com


Options 



Wrapper Summary

Restricted by allow_url_fopen ➡ Yes 
Allows Reading ➡ Yes 
Allows Writing ➡ No 
Allows Appending ➡ No 
Allows Simultaneous Reading and Writing ➡ N/A 
Supports stat() ➡ No 
Supports unlink() ➡ No 
Supports rename() ➡ No 
Supports mkdir() ➡ No 
Supports rmdir() ➡ No 


Example #1 Detecting which URL we ended up on after redirects

```php
$url = 'http://www.example.com/redirecting_page.php';

$fp = fopen($url, 'r');

$meta_data = stream_get_meta_data($fp);
foreach ($meta_data['wrapper_data'] as $response) {

    /* Were we redirected? */
    if (strtolower(substr($response, 0, 10)) == 'location: ') {

        /* update $url with where we were redirected to */
        $url = substr($response, 10);
    }

}
```



Notes 


Note: HTTPS is only supported when the opensslextension is enabled.  

HTTP connections are read-only; writing data or copyingfiles to an HTTP resource is not supported. 

Sending POST and PUT requests, for example,can be done with the help of HTTP Contexts. 


See Also 
• HTTP context options
• $http_response_header
• stream_get_meta_data() - Retrieves header/meta data from streams/file pointers



### ===🗝 • `ftp://` — Accessing FTP(s) URLs


Allows read access to existing files and creation of new filesvia FTP. If the server does not support passive mode ftp, theconnection will fail. 

You can open files for either reading or writing, but not bothsimultaneously. If the remote file already exists on the ftpserver and you attempt to open it for writing but have not specifiedthe context option overwrite, the connectionwill fail. If you need to overwrite existing files over ftp,specify the overwrite option in the contextand open the file for writing. Alternatively, you canuse the FTP extension. 

If you have set the from directivein php.ini, then this value will be sent as the anonymous FTPpassword. 


Usage 

◦ ftp://example.com/pub/file.txt
◦ ftp://user:password@example.com/pub/file.txt
◦ ftps://example.com/pub/file.txt
◦ ftps://user:password@example.com/pub/file.txt

Wrapper Summary

Restricted by allow_url_fopen  ➡Yes 
Allows Reading ➡ Yes 
Allows Writing ➡ Yes (new files/existing files with overwrite) 
Allows Appending ➡ Yes 
Allows Simultaneous Reading and Writing No 
Supports stat() ➡ filesize(), filemtime(), filetype(), file_exists(), is_file(), and is_dir() elements only.  
Supports unlink() Yes 
Supports rename() ➡ Yes 
Supports mkdir() ➡ Yes 
Supports rmdir() ➡ Yes 


Notes 


Note: 

FTPS is only supported when the opensslextension is enabled. 
If the server does not support SSL, then the connection falls backto regular unencrypted ftp.  


Note: Appending
Files may be appended via the ftp:// URL wrapper.  


See Also 
• FTP context options

### ===🗝 • `php://` — Accessing various I/O streams

PHP provides a number of miscellaneous I/O streams that allow access toPHP's own input and output streams, the standard input, output and errorfile descriptors, in-memory and disk-backed temporary file streams, andfilters that can manipulate other file resources as they are read from andwritten to. 


php://stdin, php://stdout and php://stderr

php://stdin, php://stdout and php://stderr allow direct access to the corresponding input or output stream of the PHP process. The stream references aduplicate file descriptor, so if you open php://stdin and later close it, you close only your copy of the descriptor-the actualstream referenced by STDIN is unaffected. It is recommended that you simply use the constants STDIN, STDOUT and STDERR instead ofmanually opening streams using these wrappers. 

php://stdin is read-only, whereas php://stdout and php://stderr are write-only. 


php://input

php://input is a read-only stream that allows you toread raw data from the request body. php://input is not available with enctype="multipart/form-data". 


php://output

php://output is a write-only stream that allows you towrite to the output buffer mechanism in the same way as print and echo. 


php://fd

php://fd allows direct access to the given filedescriptor. For example, php://fd/3 refers to filedescriptor 3. 


php://memory and php://temp

php://memory and php://temp areread-write streams that allow temporary data to be stored in a file-likewrapper. The only difference between the two is that php://memory will always store its data in memory,whereas php://temp will use a temporary file once theamount of data stored hits a predefined limit (the default is 2 MB). Thelocation of this temporary file is determined in the same way as the sys_get_temp_dir() function. 

The memory limit of php://temp can be controlled byappending /maxmemory:NN, where NN isthe maximum amount of data to keep in memory before using a temporaryfile, in bytes. 


php://filter

php://filter is a kind of meta-wrapper designed topermit the application of filters to astream at the time of opening. This is useful with all-in-one file functions such as `readfile()`, `file()`, and `file_get_contents()` where there is otherwise no opportunity to apply a filter to the streamprior the contents being read. 

The php://filter target takes the following parametersas part of its path. Multiple filter chains can be specified on one path.Please refer to the examples for specifics on using these parameters. 



php://filter parameters

➡ `resource=<stream to be filtered>`  This parameter is required. It specifies the stream that you wouldlike to filter.  

➡ `read=<filter list to apply to read chain>`  This parameter is optional. One or more filter names can be providedhere, separated by the pipe character (|).  

➡ `write=<filter list to apply to write chain>`  This parameter is optional. One or more filter names can be providedhere, separated by the pipe character (|).  

➡ `<filter list to apply to both chains>`  Any filter lists which are not prefixed by read=or write= will be applied to both the read andwrite chains as appropriate.  



Options 


Wrapper Summary (for php://filter, refer to thesummary of the wrapper being filtered) 


- Restricted by allow_url_fopen ➡No 

- Restricted by allow_url_include ➡ php://input, php://stdin, php://memory and php://temp only.  

- Allows Reading ➡ php://stdin, php://input, php://fd, php://memory and php://temp only.  

- Allows Writing ➡ php://stdout, php://stderr, php://output, php://fd, php://memory and php://temp only.  

- Allows Appending ➡ php://stdout, php://stderr, php://output, php://fd, php://memory and php://temp only. (Equivalent to writing)  

- Allows Simultaneous Reading and Writing php://fd, php://memory and php://temp ➡only.  

- Supports stat() No. However, php://memory and php://temp support fstat➡().  

- Supports unlink() ➡No 

- Supports rename() ➡No 

- Supports mkdir() ➡No 

- Supports rmdir() ➡No 

- Supports stream_select() php://stdin, php://stdout, php://stderr, php://fd and php://temp ➡only.  


Example #1 php://temp/maxmemory


This optional parameter allows setting the memory limit before php://temp starts using a temporary file. 

```php
// Set the limit to 5 MB.
$fiveMBs = 5 * 1024 * 1024;
$fp = fopen("php://temp/maxmemory:$fiveMBs", 'r+');

fputs($fp, "hello\n");

// Read what we have written.
rewind($fp);
echo stream_get_contents($fp);
```



Example #2 php://filter/resource=<stream to be filtered>


This parameter must be located atthe end of your php://filter specification andshould point to the stream which you want filtered. 

```php
/* This is equivalent to simply:
  readfile("http://www.example.com");
  since no filters are actually specified */

readfile("php://filter/resource=http://www.example.com");
```



Example #3 php://filter/read=<filter list to apply to read chain>


This parameter takes one or morefilternames separated by the pipe character `|`. 

```php
/* This will output the contents of
  www.example.com entirely in uppercase */
readfile("php://filter/read=string.toupper/resource=http://www.example.com");

/* This will do the same as above
  but will also ROT13 encode it */
readfile("php://filter/read=string.toupper|string.rot13/resource=http://www.example.com");
```



Example #4 php://filter/write=<filter list to apply to write chain>


This parameter takes one or morefilternames separated by the pipe character `|`. 

```php
/* This will filter the string "Hello World"
  through the rot13 filter, then write to
  example.txt in the current directory */
file_put_contents("php://filter/write=string.rot13/resource=example.txt","Hello World");
```


Example #5 php://memory and php://temp are not reusable


php://memory and php://tempare not reusable, i.e. after the streams have been closed there is no wayto refer to them again. 


```php
file_put_contents('php://memory', 'PHP');
echo file_get_contents('php://memory'); // prints nothing
```

### ===🗝 • `zlib://` — Compression Streams


compress.zlib:// and compress.bzip2://

zlib: works like gzopen(), except that thestream can be used with fread() and the otherfilesystem functions. This is deprecated dueto ambiguities with filenames containing ':' characters; use compress.zlib:// instead. 

compress.zlib:// and compress.bzip2:// are equivalent to gzopen() and bzopen()respectively, and operate even on systems that do not supportfopencookie. 

ZIP extension registers zip: wrapper. As ofPHP 7.2.0 and libzip 1.2.0+, support for the passwords for encrypted archives were added, allowingpasswords to be supplied by stream contexts. Passwords can be set using the 'password' stream context option. 


Usage 
◦ compress.zlib://file.gz
◦ compress.bzip2://file.bz2
◦ zip://archive.zip#dir/file.txt


Wrapper Summary


- Restricted by allow_url_fopen ➡ No 
- Allows Reading ➡ Yes 
- Allows Writing ➡ Yes (except zip://) 
- Allows Appending ➡ Yes (except zip://) 
- Allows Simultaneous Reading and Writing ➡ No 
- Supports stat() ➡ No, use the normal file:// wrapperto stat compressed files.  
- Supports unlink() ➡ No, use the normal file:// wrapperto unlink compressed files.  
- Supports rename() ➡ No 
- Supports mkdir() ➡ No 
- Supports rmdir() ➡ No 


### ===🗝 • `data://` — Data (RFC 2397)

The data: (» RFC2397) stream wrapper. 


Usage 
◦ data://text/plain;base64,

Wrapper Summary

- Restricted by allow_url_fopen ➡Yes 
- Restricted by allow_url_include ➡Yes 
- Allows Reading ➡Yes 
- Allows Writing ➡No 
- Allows Appending ➡No 
- Allows Simultaneous Reading and Writing ➡No 
- Supports stat() ➡No 
- Supports unlink() ➡No 
- Supports rename() ➡No 
- Supports mkdir() ➡No 
- Supports rmdir() ➡No 



Example #1 Print data:// contents

```php
// prints "I love PHP"
echo file_get_contents('data://text/plain;base64,SSBsb3ZlIFBIUAo=');
```

Example #2 Fetch the media type

```php
$fp   = fopen('data://text/plain;base64,', 'r');
$meta = stream_get_meta_data($fp);

// prints "text/plain"
echo $meta['mediatype'];
```


### ===🗝 • `glob://` — Find pathnames matching pattern

The glob: stream wrapper. 


Usage 
◦ glob://


Wrapper Summary

- Restricted by allow_url_fopen ➡No 
- Restricted by allow_url_include ➡No 
- Allows Reading ➡No 
- Allows Writing ➡No 
- Allows Appending ➡No 
- Allows Simultaneous Reading and Writing ➡No 
- Supports stat() ➡No 
- Supports unlink() ➡No 
- Supports rename() ➡No 
- Supports mkdir() ➡No 
- Supports rmdir() ➡No 


Example #1 Basic usage

```php
// Loop over all *.php files in ext/spl/examples/ directory
// and print the filename and its size
$it = new DirectoryIterator("glob://ext/spl/examples/*.php");
foreach($it as $f) {
    printf("%s: %.1FK\n", $f->getFilename(), $f->getSize()/1024);
}
```



tree.php: 1.0K
findregex.php: 0.6K
findfile.php: 0.7K
dba_dump.php: 0.9K
nocvsdir.php: 1.1K
phar_from_dir.php: 1.0K
ini_groups.php: 0.9K
directorytree.php: 0.9K
dba_array.php: 1.1K
class_tree.php: 1.8K


### ===🗝 • `phar://` — PHP Archive

The phar:// stream wrapper.See Phar stream wrapperfor a detailed description. 


Usage 
◦ phar://

Wrapper Summary

- Restricted by allow_url_fopen `No`
- Restricted by allow_url_include `No`
- Allows Reading `Yes`
- Allows Writing `Yes`
- Allows Appending `No`
- Allows Simultaneous Reading and Writing `Yes`
- Supports stat() `Yes`
- Supports unlink() `Yes`
- Supports rename() `Yes`
- Supports mkdir() `Yes`
- Supports rmdir() `Yes`

See Also 

• Phar context options

### ===🗝 • `ssh2://` — Secure Shell 2

ssh2.shell:// ssh2.exec:// ssh2.tunnel:// ssh2.sftp:// ssh2.scp://(PECL) 


Note: This wrapper is not enabled by default
In order to use the `ssh2.*://` wrappers you must installthe » SSH2 extensionavailable from » PECL.  

In addition to accepting traditional URI login details, the ssh2 wrapperswill also reuse open connections by passing the connection resource in thehost portion of the URL. 


Usage 
◦ ssh2.shell://user:pass@example.com:22/xterm
◦ ssh2.exec://user:pass@example.com:22/usr/local/bin/somecmd
◦ ssh2.tunnel://user:pass@example.com:22/192.168.0.1:14
◦ ssh2.sftp://user:pass@example.com:22/path/to/filename


Wrapper Summary


|     Attribute     | shell | exec | tunnel | sftp | scp |
|-------------------|-------|------|--------|------|-----|
| Restricted by allow_url_fopen | Yes   | Yes  | Yes    | Yes  | Yes |
| Allows Reading    | Yes   | Yes  | Yes    | Yes  | Yes |
| Allows Writing    | Yes   | Yes  | Yes    | Yes  | No  |
| Allows Appending  | No    | No   | No     | Yes (When supported by server) | No  |
| Allows Simultaneous Reading and Writing | Yes   | Yes  | Yes    | Yes  | No  |
| Supports stat()   | No    | No   | No     | Yes  | No  |
| Supports unlink() | No    | No   | No     | Yes  | No  |
| Supports rename() | No    | No   | No     | Yes  | No  |
| Supports mkdir()  | No    | No   | No     | Yes  | No  |
| Supports rmdir()  | No    | No   | No     | Yes  | No  |


Context options

- `session` Preconnected ssh2 resource to be reused   
- `sftp` Preallocated sftp resource to be reused   
- `methods` Key exchange, hostkey, cipher, compression, and MAC methods to use   
- `callbacks`     
- `username` Username to connect as   
- `password` Password to use with password authentication   
- `pubkey_file` Name of public key file to use for authentication   
- `privkey_file` Name of private key file to use for authentication   
- `env` Associate array of environment variables to set   
- `term` Terminal emulation type to request when allocating a pty   
- `term_width` Width of terminal requested when allocating a pty   
- `term_height` Height of terminal requested when allocating a pty   
- `term_units` Units to use with term_width and term_height, Default value `SSH2_TERM_UNIT_CHARS` 

Example #1 Opening a stream from an active connection

```php
$session = ssh2_connect('example.com', 22);
ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',
                                            '/home/username/.ssh/id_rsa', 'secret');
$stream = fopen("ssh2.tunnel://$session/remote.example.com:1234", 'r');
```

Example #2 This $session variable must be kept available!


In order to use the `ssh2.*://$session` wrappers you must keep the $session resource variable. The code below will nothave the desired effect: 

```php
$session = ssh2_connect('example.com', 22);
ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',
                                            '/home/username/.ssh/id_rsa', 'secret');
$connection_string = "ssh2.sftp://$session/";
unset($session);
$stream = fopen($connection_string . "path/to/file", 'r');
```

unset() closes the session, because $connection_string does nothold a reference to the $session variable, just a string castderived from it. This also happens when the unset() is implicitbecause of leaving scope (like in a function). 

### ===🗝 • `rar://` — RAR


The wrapper takes the url encoded path to the RAR archive (relative or absolute),an optional asterik `(*)`, an optional number sign(#) and an optional url encoded entry name, as stored in thearchive. Specifying an entry name requires the number sign; a leading forwardslash in the entry name is optional. 

This wrapper can open both files and directories. When opening directories, theasterisk sign forces the directory entries names to be returned unencoded. If it'snot specified, they will be returned url encoded – the reason for this is to allowthe wrapper to be correctly used with built-in functionality like the RecursiveDirectoryIterator in the presence of file names that seem likeurl encoded data. 

If the pound sign and the entry name part are not included, the root of the archivewill be displayed. This differs from regular directories in that the resultingstream will not contain information such as the modification time, as the rootdirectory is not stored in an individual entry in the archive.The usage of the wrapper with RecursiveDirectoryIterator requiresthe number sign to be included in the URL when accessing the root, so that theURLs of the children may be constructed correctly. 


Note: This wrapper is not enabled by default
In order to use the rar:// wrapper, you must installthe » rar extensionavailable from » PECL.  

rar:// Available since PECL rar 3.0.0 


Usage 

◦ `rar://<url encoded archive name>[*][#[<url encoded entry name>]]`


Wrapper Summary

- Restricted by allow_url_fopen `No`
- Restricted by allow_url_include `No`
- Allows Reading `Yes`
- Allows Writing `No`
- Allows Appending `No`
- Allows Simultaneous Reading and Writing `No`
- Supports stat() `Yes`
- Supports unlink() `No`
- Supports rename() `No`
- Supports mkdir() `No`
- Supports rmdir() `No`




Context options

- `open_password` The password used to encrypt the headers of the archive,if any. WinRAR will encrypt all the files with the same passwordas the headers password when the later is present, so for archiveswith encrypted headers, file_password will beignored.    

- `file_password` The password used to encrypt a file, if any. If the headersare also encrypted, this option will be ignored in favor of open_password. The reason there are two optionsis to cover the possibility of supporting archives with differentheaders and file passwords, should those archives arise. Note thatif the archive does not have its headers encrypted, open_password will be ignored and this optionmust be used instead.    

- `volume_callback` A callback to determine the path of missing volumes. See RarArchive::open() for more information.    


Example #1 Traversing a RAR archive

```php
class MyRecDirIt extends RecursiveDirectoryIterator {
    function current() {
        return rawurldecode($this->getSubPathName()) .
            (is_dir(parent::current())?" [DIR]":"");
    }
}

$f = "rar://" . rawurlencode(dirname(__FILE__)) .
    DIRECTORY_SEPARATOR . 'dirs_and_extra_headers.rar#';

$it = new RecursiveTreeIterator(new MyRecDirIt($f));

foreach ($it as $s) {
    echo $s, "\n";
}
```

The above example will output something similar to:


    |-allow_everyone_ni [DIR]
    |-file1.txt
    |-file2_אּ.txt
    |-with_streams.txt
    \-אּ [DIR]
      |-אּ\%2Fempty%2E [DIR]
      | \-אּ\%2Fempty%2E\file7.txt
      |-אּ\empty [DIR]
      |-אּ\file3.txt
      |-אּ\file4_אּ.txt
      \-אּ\אּ_2 [DIR]
        |-אּ\אּ_2\file5.txt
        \-אּ\אּ_2\file6_אּ.txt


Example #2 Opening an encrypted file (header encryption)

```php
$stream = fopen("rar://" .
    rawurlencode(dirname(__FILE__)) . DIRECTORY_SEPARATOR .
    'encrypted_headers.rar' . '#encfile1.txt', "r", false,
    stream_context_create(
        array(
            'rar' =>
                array(
                    'open_password' => 'samplepassword'
                )
            )
        )
    );
var_dump(stream_get_contents($stream));
/* creation and last access date is opt-in in WinRAR, hence most
 * files don't have them */
var_dump(fstat($stream));
```



The above example will output something similar to:


string(26) "Encrypted file 1 contents."
Array
(
    [0] => 0
    [1] => 0
    [2] => 33206
    [3] => 1
    [4] => 0
    [5] => 0
    [6] => 0
    [7] => 26
    [8] => 0
    [9] => 1259550052
    [10] => 0
    [11] => -1
    [12] => -1
    [dev] => 0
    [ino] => 0
    [mode] => 33206
    [nlink] => 1
    [uid] => 0
    [gid] => 0
    [rdev] => 0
    [size] => 26
    [atime] => 0
    [mtime] => 1259550052
    [ctime] => 0
    [blksize] => -1
    [blocks] => -1
)


### ===🗝 • `ogg://` — Audio streams

Files opened for reading via the ogg:// wrapperare treated as compressed audio encoded using the OGG/Vorbis codec.Similarly, files opened for writing or appending via the ogg:// wrapper are written as compressed audio data. stream_get_meta_data(), when used on an OGG/Vorbisfile opened for reading will return various details about the streamincluding the vendor tag, any included comments, the number of channels, the sampling rate,and the encoding rate range described by: bitrate_lower, bitrate_upper, bitrate_nominal, and bitrate_window. 

ogg:// (PECL)


Note: This wrapper is not enabled by default
In order to use the ogg:// wrapper you must installthe » OGG/Vorbis extensionavailable from » PECL.  

Usage 

◦ ogg://soundfile.ogg
◦ ogg:///path/to/soundfile.ogg
◦ ogg://http://www.example.com/path/to/soundstream.ogg


Wrapper Summary


- Restricted by allow_url_fopen `No`
- Allows Reading `Yes`
- Allows Writing `Yes`
- Allows Appending `Yes`
- Allows Simultaneous Reading and Writing `No`
- Supports stat() `No`
- Supports unlink() `No`
- Supports rename() `No`
- Supports mkdir() `No`
- Supports rmdir() `No`


Context options

- `pcm_mode` PCM encoding to apply while reading, one of: OGGVORBIS_PCM_U8, OGGVORBIS_PCM_S8, OGGVORBIS_PCM_U16_BE, OGGVORBIS_PCM_S16_BE, OGGVORBIS_PCM_U16_LE, and default `OGGVORBIS_PCM_S16_LE`. (8 vs 16 bit, signed or unsigned, big or little endian)  `Read` 
- `rate` Sampling rate of input data, expressed in Hz, default 44100, `Write/Append` 
- `bitrate` When given as an integer, the fixed bitrate at which to encode. (16000 to 131072)When given as a float, the variable bitrate quality to use. (-1.0 to 1.0), default 128000, `Write/Append` 
- `channels` The number of audio channels to encode, typically 1 (Mono), or default 2 (Stereo). May range as high as 16. `Write/Append` 
- `comments` An array of string values to encode into the track header.    `Write/Append`

### ===🗝 • `expect://` — Process Interaction Streams

Streams opened via the expect:// wrapper provideaccess to process'es stdio, stdout and stderr via PTY. 

Note: This wrapper is not enabled by default
In order to use the expect:// wrapper you must installthe » Expect extensionavailable from » PECL.  

expect:// (PECL)

Usage 

◦ expect://command


Wrapper Summary

- Restricted by allow_url_fopen `No`
- Allows Reading `Yes`
- Allows Writing `Yes`
- Allows Appending `Yes`
- Allows Simultaneous Reading and Writing `No`
- Supports stat() `No`
- Supports unlink() `No`
- Supports rename() `No`
- Supports mkdir() `No`
- Supports rmdir() `No`


# 🚩 Basics Topics

## ⚡ Variables 变量

PHP 中的变量用一个美元符号后面跟变量名来表示，变量名是区分大小写的。 

变量名与 PHP 中其它的标签一样遵循相同的规则。一个有效的变量名由字母或者下划线开头，后面跟上任意数量的字母，数字，或者下划线。按照正常的正则表达式，它将被表述为：

	[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]* 

Note: 在此所说的字母是 a-z，A-Z，以及 ASCII 字符从 127 到 255（0x7f-0xff）。  
Note: $this 是一个特殊的变量，引用当前代码所在的类作用空间，它不能被赋值。  

	$var = 'Bob';
	$Var = 'Joe';
	echo "$var, $Var";      // 输出 "Bob, Joe"

	$4site = 'not yet';     // 非法变量名；以数字开头
	$_4site = 'not yet';    // 合法变量名；以下划线开头
	$i站点is = 'mansikka';  // 合法变量名；可以用中文


变量默认总是传值赋值，当将一个表达式的值赋予一个变量时，整个原始表达式的值被赋值到目标变量。这意味着，例如，当一个变量的值赋予另外一个变量时，改变其中一个变量的值，将不会影响到另外一个变量。 

另外一种方式引用赋值，这意味着新的变量简单的引用，换言之，"成为其别名" 或者 "指向"了原始变量。改动新的变量将影响到原始变量，反之亦然。 使用引用赋值，简单地将一个 & 符号加到将要赋值的变量前（源变量）。

例如，下列代码片断将输出"My name is Bob"两次： 

	$foo = 'Bob';              // 将 'Bob' 赋给 $foo
	$bar = &$foo;              // 通过 $bar 引用 $foo
	$bar = "My name is $bar";  // 修改 $bar 变量
	echo $bar;
	echo $foo;                 // $foo 的值也被修改


有一点重要事项必须指出，那就是只有有名字的变量才可以引用赋值。 

	$foo = 25;
	$bar = &$foo;      // 合法的引用赋值
	$bar = &(24 * 7);  // 非法; 引用没有名字的表达式

	function test()
	{
	   return 25;
	}

	$bar = &test();    // 非法


虽然在 PHP 中并不需要初始化变量，但对变量进行初始化是个好习惯。未初始化的变量具有其类型的默认值 - 布尔类型的变量默认值是 FALSE，整形和浮点型变量默认值是零，字符串型变量（例如用于 echo 中）默认值是空字符串以及数组变量的默认值是空数组。 

Example #1 未初始化变量的默认值

	// Unset AND unreferenced (no use context) variable; outputs NULL
	var_dump($unset_var);

	// Boolean usage; outputs 'false' (See ternary operators for more on this syntax)
	echo($unset_bool ? "true\n" : "false\n");

	// String usage; outputs 'string(3) "abc"'
	$unset_str .= 'abc';
	var_dump($unset_str);

	// Integer usage; outputs 'int(25)'
	$unset_int += 25; // 0 + 25 => 25
	var_dump($unset_int);

	// Float/double usage; outputs 'float(1.25)'
	$unset_float += 1.25;
	var_dump($unset_float);

	// Array usage; outputs array(1) {  [3]=>  string(3) "def" }
	$unset_arr[3] = "def"; // array() + array(3 => "def") => array(3 => "def")
	var_dump($unset_arr);

	// Object usage; creates new stdClass object (see http://www.php.net/manual/en/reserved.classes.php)
	// Outputs: object(stdClass)#1 (1) {  ["foo"]=>  string(3) "bar" }
	$unset_obj->foo = 'bar';
	var_dump($unset_obj);


依赖未初始化变量的默认值在某些情况下会有问题，例如把一个文件包含到另一个之中时碰上相同的变量名。另外把 register_globals 打开是一个主要的安全隐患。使用未初始化的变量会发出 E_NOTICE 错误，但是在向一个未初始化的数组附加单元时不会。isset() 语言结构可以用来检测一个变量是否已被初始化。 

	PHP Notice:  Undefined variable
	PHP Warning:  Creating default object from empty value


### 👉 Variable variables 可变变量

可变变量就是将变量的值作为要访问的变量名来使用，有时候使用可变变量名是很方便的。就是说，一个变量的变量名可以动态的设置和使用。

一个普通的变量通过声明来设置，例如： 

	$a = 'hello';

一个可变变量获取了一个普通变量的值作为这个可变变量的变量名。在上面的例子中 hello 使用了两个美元符号 $$ 以后，就可以作为一个可变变量的变量了。

	$$a = 'world';

这时，两个变量都被定义了：

	$a = "hello";
	$hello = "world";

因此，以下语句等价： 

	echo "$a ${$a}";
	echo "$a $hello";

它们都会输出：hello world。 


要将可变变量用于数组，必须解决一个模棱两可的问题。这就是当写下 $$a[1] 时，解析器需要知道是想要 $a[1] 作为一个变量呢，还是想要 $$a 作为一个变量并取出该变量中索引为 [1] 的值。解决此问题的语法是，对第一种情况用 ${$a[1]}，对第二种情况用 ${$a}[1]。 

类的属性也可以通过可变属性名来访问。可变属性名将在该调用所处的范围内被解析。例如，对于 $foo->$bar 表达式，则会在本地范围来解析 $bar 并且其值将被用于 $foo 的属性名。对于 $bar 是数组单元时也是一样。 

也可使用花括号来给属性名清晰定界。最有用是在属性位于数组中，或者属性名包含有多个部分或者属性名包含有非法字符时（例如来自 json_decode() 或 SimpleXML）。 

Example #1 可变属性示例

	class foo {
	    var $bar = 'I am bar.';
	    var $arr = array('I am A.', 'I am B.', 'I am C.');
	    var $r   = 'I am r.';
	    var $Array = ['I am Arp.', 'I am Bisque.'];
	}

	$foo = new foo();
	$bar = 'bar';
	$baz = array('foo', 'bar', 'baz', 'quux');
	echo $foo->$bar . "\n";
	echo @$foo->$baz[1] . "\n";

	$start = 'b';
	$end   = 'ar';
	echo $foo->{$start . $end} . "\n";

	$arr = 'arr';
	echo $foo->$arr[1] . "\n";
	echo $foo->{$arr}[1] . "\n";

以上例程会在不同版本下输出不同内容，但是在 PHP 7 中，@$foo->$baz 这里发生了 Array to string conversion：

	// PHP6
	I am bar.
	I am bar.
	I am bar.
	I am r.
	I am B.

	// PHP 7
	I am bar.
	I am Bisque.
	I am bar.
	I am B.
	I am B.


### 👉 Scroped Variables 变量作用域


变量的作用范围即它定义的上下文，也就是它的生效范围。大部分的 PHP 变量只有一个单独的范围，这个单独的范围跨度同样包含了 include 和 require 引入的文件。

例如： 

	$a = 1;
	include 'b.inc';


这里变量 $a 将会在包含文件 b.inc 中生效。但是，在用户自定义函数中，一个局部函数范围将被引入。任何用于函数内部的变量按缺省情况将被限制在局部函数范围内。

例如： 

	$a = 1; /* global scope */

	function Test()
	{
	    echo $a; /* reference to local scope variable */
	}

	Test();


这个脚本不会有任何输出，因为 echo 语句引用了一个局部版本的变量 $a，而且在这个范围内，它并没有被赋值。你可能注意到 PHP 的全局变量和 C 语言有一点点不同，在 C 语言中，全局变量在函数中自动生效，除非被局部变量覆盖。这可能引起一些问题，有些人可能不小心就改变了一个全局变量。PHP 中全局变量在函数中使用时必须声明为 global 关键字或  $GLOBALS 全局数组。 

Example #1 使用 global

	$a = 1;
	$b = 2;

	function Sum()
	{
	    global $a, $b;

	    $b = $a + $b;
	}

	Sum();
	echo $b;

以上脚本的输出将是 3，在函数中声明了全局变量 $a 和 $b 之后，对任一变量的所有引用都会指向其全局版本。对于一个函数能够声明的全局变量的最大个数，PHP 没有限制。在全局范围内访问变量的第二个办法，是用特殊的 PHP 自定义 $GLOBALS 数组。

Example #2 使用 $GLOBALS 替代 global

	$a = 1;
	$b = 2;

	function Sum()
	{
	    $GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
	}

	Sum();
	echo $b;

$GLOBALS 是一个关联数组，每一个变量为一个元素，键名对应变量名，值对应变量的内容。$GLOBALS 之所以在全局范围内存在，是因为 $GLOBALS 是一个超全局变量。

Example #3 演示超全局变量和作用域的例子

	function test_global()
	{
	    // 大多数的预定义变量并不 "super"，它们需要用 'global' 关键字来使它们在函数的本地区域中有效。
	    global $HTTP_POST_VARS;

	    echo $HTTP_POST_VARS['name'];

	    // Superglobals 在任何范围内都有效，它们并不需要 'global' 声明。Superglobals 是在 PHP 4.1.0 引入的。
	    echo $_POST['name'];
	}


在 Zend 引擎 1 代，它驱动了 PHP4，对于变量的 static 和 global 定义是以引用的方式实现的。例如，在一个函数域内部用 global 语句导入的一个真正的全局变量实际上是建立了一个到全局变量的引用，这有可能导致预料之外的行为。

如以下例子所演示： 

	function test_global_ref() {
	    global $obj;
	    $obj = &new stdclass;
	}

	function test_global_noref() {
	    global $obj;
	    $obj = new stdclass;
	}

	test_global_ref();
	var_dump($obj);
	test_global_noref();
	var_dump($obj);

以上例程会输出以下内容，但是 &new stdclass 这种语法 PHP 7 运行语法是不正确的：

	NULL
	object(stdClass)(0) {
	}

类似的行为也适用于 static 语句，引用并不是静态地存储的。 

	function &get_instance_ref() {
	    static $obj;

	    echo 'Static object: ';
	    var_dump($obj);
	    if (!isset($obj)) {
	        // 将一个引用赋值给静态变量
	        $oo7 = new stdclass;
	        $obj = &$oo7;
	    }
	    @$obj->property++;
	    return $obj;
	}

	function &get_instance_noref() {
	    static $obj;

	    echo 'Static object: ';
	    var_dump($obj);
	    if (!isset($obj)) {
	        // 将一个对象赋值给静态变量
	        $obj = new stdclass;
	    }
	    @$obj->property++;
	    return $obj;
	}

	$obj1 = get_instance_ref();
	$still_obj1 = get_instance_ref();
	echo "\n";
	$obj2 = get_instance_noref();
	$still_obj2 = get_instance_noref();

以上例程会输出：


	Static object: NULL
	Static object: NULL

	Static object: NULL
	Static object: object(stdClass)(1) {
	["property"]=>
	int(1)
	}


上例演示了当把一个引用赋值给一个静态变量时，第二次调用 &get_instance_ref() 函数时其值并没有被记住。 


### 👉 Predefined Variables 预定义变量

PHP 提供了大量的预定义变量。由于许多变量依赖于运行的服务器的版本和设置，及其它因素，所以并没有详细的说明文档。一些预定义变量在 PHP 以命令行形式运行时并不生效。

如果已经弃用的 register_globals 指令被设置为 on 那么局部变量也将在脚本的全局作用域中可用。例如，`$_POST['foo']` 也将以 $foo 的形式存在。PHP 4.2.0 以及后续版本中，PHP 指令 register_globals 的默认值为 off。这是 PHP 的一个主要变化，让 register_globals 的值为 off 将影响到预定义变量集在全局范围内的有效性。

例如，为了得到 DOCUMENT_ROOT 的值，将必须使用 `$_SERVER['DOCUMENT_ROOT']` 代替 $DOCUMENT_ROOT，又如，使用 `$_GET['id']` 来代替 $id 从请求的 URL http://www.example.com/test.php?id=3 中获取 id 值，亦或使用 `$_ENV['HOME']` 来代替 $HOME 获取环境变量 HOME 的值。 

如果有可用的 PHP 预定义变量那就使用，如超全局数组。超全局变量，是在全部作用域中始终可用的内置变量，PHP 中的许多预定义变量都是"超全局的"，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需执行 global $variable; 就可以访问它们。

这些超全局变量是：

	- $GLOBALS 引用全局作用域中可用的全部变量
	- $_SERVER -- $HTTP_SERVER_VARS [已删除] — 服务器和执行环境信息
	- $_GET    -- $HTTP_GET_VARS [已弃用] — HTTP GET 变量
	- $_POST   -- $HTTP_POST_VARS [已弃用] — HTTP POST 变量
	- $_FILES  -- $HTTP_POST_FILES [已弃用] — HTTP 文件上传变量
	- $_COOKIE  -- $HTTP_COOKIE_VARS [已弃用] — HTTP Cookies
	- $_SESSION -- $HTTP_SESSION_VARS [已弃用] — Session 变量
	- $_REQUEST -- HTTP Request 变量，默认情况下包含了 $_GET，$_POST 和 $_COOKIE 的数组。 
	- $_ENV     -- $HTTP_ENV_VARS [已弃用] — 环境变量
	- $HTTP_RAW_POST_DATA — 原生 POST 数据，一般而言，使用封装协议 php://input 输入流搭配函数读取来代替
	- $php_errormsg — 前一个错误信息
	- $argc — 传递给脚本的参数数目，参考 getopt() 从命令行参数列表中获取选项。
	- $argv — 传递给脚本的参数数组，和 $argc 一样仅在 register_argc_argv 打开时可用。 


参考：

	// Example to parse "PUT" requests, very useful for Restful API
	parse_str(file_get_contents('php://input'), $_PUT);

	// The result
	print_r($_PUT);

HTML 表单（GET 和 POST），当一个表单提交给 PHP 脚本时，表单中的信息会自动在脚本中可用 `$_GET` 和 `$_POST`，或者 `$_REQUEST` 等。

根据特定的设置和个人的喜好，有很多种方法访问 HTML 表单中的数据。 

Example #2 从一个简单的 POST HTML 表单访问数据


	// 自 PHP 4.1.0 起可用
	   echo $_POST['username'];
	   echo $_REQUEST['username'];
	   
	   import_request_variables('p', 'p_');
	   echo $p_username;

	// 自 PHP 5.0.0 起，这些长格式的预定义变量
	// 可用 register_long_arrays 指令关闭。

	   echo $HTTP_POST_VARS['username'];

	// 如果 PHP 指令 register_globals = on 时可用。不过自
	// PHP 4.2.0 起默认值为 register_globals = off。
	// 不提倡使用/依赖此种方法。

	   echo $username;

使用 GET 表单也类似，只不过要用适当的 GET 预定义变量。GET 也适用于 QUERY_STRING（URL 中在"?"之后的信息）。因此，举例说，http://www.example.com/test.php?id=3 包含有可用 `$_GET['id']` 来访问的 GET 数据。

变量名中的点和空格被转换成下划线。例如 `<input name="a.b" />` 变成了 `$_REQUEST["a_b"]`。 


## ⚡ Define Constants 常量定义

常量是一个简单值的标识符（名字），如同其名称所暗示的，在脚本执行期间该值不能改变（除了所谓的魔术常量，它们其实不是常量）。常量默认为大小写敏感，传统上常量标识符总是大写的。 

常量和变量有如下不同： 

- 常量前面没有美元符号（$）；  
- 常量只能用 define() 函数定义，而不能通过赋值语句；  
- 常量可以不用理会变量的作用域而在任何地方定义和访问；  
- 常量一旦定义就不能被重新定义或者取消定义；  
- 常量的值只能是标量。 

PHP 的魔术常量

	名称	说明
	__LINE__	文件中的当前行号。
	__FILE__	文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。自 PHP 4.0.2 起，__FILE__ 总是包含一个绝对路径（如果是符号连接，则是解析后的绝对路径），而在此之前的版本有时会包含一个相对路径。
	__DIR__	文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。它等价于 dirname(__FILE__)。除非是根目录，否则目录中名不包括末尾的斜杠。（PHP 5.3.0中新增） =
	__FUNCTION__	函数名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该函数被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。
	__CLASS__	类的名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该类被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。类名包括其被声明的作用区域（例如 Foo\Bar）。注意自 PHP 5.4 起 __CLASS__ 对 trait 也起作用。当用在 trait 方法中时，__CLASS__ 是调用 trait 方法的类的名字。
	__TRAIT__	Trait 的名字（PHP 5.4.0 新加）。自 PHP 5.4 起此常量返回 trait 被定义时的名字（区分大小写）。Trait 名包括其被声明的作用区域（例如 Foo\Bar）。
	__METHOD__	类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写）。
	__NAMESPACE__	当前命名空间的名称（区分大小写）。此常量是在编译时定义的（PHP 5.3.0 新增）。

参见 get_class()，get_object_vars()，file_exists() 和 function_exists()。 


可以用 define() 函数来定义常量，在 PHP 5.3.0 以后，可以使用 const 关键字在类定义之外定义常量。一个常量一旦被定义，就不能再改变或者取消定义。 

常量只能包含标量数据（boolean，integer，float 和 string）。可以定义 resource 常量，但应尽量避免，因为会造成不可预料的结果。 

可以简单的通过指定其名字来取得常量的值，与变量不同，不应该在常量前面加上 $ 符号。如果常量名是动态的，也可以用函数 constant() 来获取常量的值。用 get_defined_constants() 可以获得所有已定义的常量列表。 

如果使用了一个未定义的常量，PHP 假定想要的是该常量本身的名字，如同用字符串调用它一样（CONSTANT 对应 "CONSTANT"）。此时将发出一个 E_NOTICE 级的错误。参见手册中为什么 $foo[bar] 是错误的（除非事先用 define() 将 bar 定义为一个常量）。如果只想检查是否定义了某常量，用 defined() 函数。 


Example #1 合法与非法的常量名

	// 合法的常量名
	define("FOO",     "something");
	define("FOO2",    "something else");
	define("FOO_BAR", "something more");

	// 非法的常量名
	define("2FOO",    "something");

	// 下面的定义是合法的，但应该避免这样做：(自定义常量不要以__开头)
	// 也许将来有一天PHP会定义一个__FOO__的魔术常量
	// 这样就会与你的代码相冲突
	define("__FOO__", "something");

和 superglobals 一样，常量的范围是全局的。不用管作用区域就可以在脚本的任何地方访问常量。

尽管如此，还需要注意，常量要先定义后才能被使用，以下代码 foo() 就在 X 常量定义前执行，所以读取不倒值：

	foo();
	const X = 1;
	// define('X', 1);
	function foo() {
	    echo "Value of X: " . X;
	}


配合 defined 判断常量定义是否存在：

	define('MYKEY', 'The value is from outside of class');
	class Abc{
	     
	     const MAX = 10;     

	     public function __construct(){
	        if(defined('MYKEY')) define('TEST', 'hello world! ');
	     }
	     public function getOutput(){
	         if(defined("TEST")) echo (TEST . PHP_EOL);
	         if(defined("MYKEY")) echo (MYKEY . PHP_EOL);
	     }
	 }

	 $obj = new Abc();  // define function will call
	 $obj->getOutput(); // hello world! The value is from outside of class

	 echo Abc::MAX . PHP_EOL; // 10

	 if(defined("TEST")) echo TEST; // hello world!


## ⚡ Data Types 基本类型

PHP 支持 10 种原始数据类型。 

- 四种标量类型： 

	- ◦ boolean 布尔型
	- ◦ integer 整型
	- ◦ float & double 浮点型
	- ◦ string 字符串

- 四种复合类型： 

	- ◦ array 数组
	- ◦ object 对象
	- ◦ callable 可调用
	- ◦ *Iterable* is a pseudo-type introduced in PHP 7.1.

- 最后是两种特殊类型

	- ◦ resource 资源
	- ◦ NULL 无类型

There are also some pseudo-types for readability reasons: 

◦ *mixed*   indicates that a parameter may accept multiple (butnot necessarily all) types. 
◦ *number*  indicates that a parameter can be either integer or float. 
◦ *callback* (aka callable)  was introduced by PHP 5.4. It means exactly the same. 
◦ *array|object*  indicates that a parameter can be either *array* or *object*. 
◦ *void*  as a return type means that the return value is useless. *void* in a parameter list means that the function doesn't accept any parameters. 
◦ *$...*  in function prototypes means and so on. This variable name is used when a function can take an endless number of arguments.  

boolean 表达了真值，可以为 TRUE 或 FALSE，这是最简单的类型。 


资源 resource 是一种特殊变量，保存了到外部资源的一个引用，资源通过专门的函数来建立和使用的，参见 get_resource_type()。 

由于资源类型变量保存有为打开文件、数据库连接、图形画布区域等的特殊句柄，因此将其它类型的值转换为资源没有意义。 

引用计数系统是 Zend 引擎的一部分，和 Java 一样可以自动检测到一个资源不再被引用了，这种情况下此资源使用的所有外部资源都会被垃圾回收系统释放，因此，很少需要手工释放内存。持久数据库连接比较特殊，它们不会被垃圾回收系统销毁。


特殊的 NULL 值表示一个变量没有值，NULL 类型唯一可能的值就是 NULL。 在下列情况下一个变量被认为是 NULL：

- 被赋值为 NULL。 
- 尚未被赋值。 
- 被 unset()。 


为了确保代码的易读性，还有一些伪类型： 

- mixed 混合类型，说明一个参数可以接受多种不同的、但不一定是所有的类型。 例如 gettype() 可以接受所有的 PHP 类型，str_replace() 可以接受字符串和数组。 
- number 数字类型，说明一个参数可以是 integer 或者 float。 
- callback 回调类型，文档中在 PHP 5.4 引入 callable 类型之前使用了 callback 伪类型，二者含义完全相同。
- array|object  意思是参数既可以是 array 也可以是 object。
- void 作为返回类型意味着函数的返回值是无用的。void 作为参数列表意味着函数不接受任何参数。 
- 以及伪变量 $...，在函数原型中，$... 表示等等的意思。当一个函数可以接受任意个参数时使用此变量名。 

伪类型 pseudo-types 是 PHP 文档里用于指示参数可以使用的类型和值。请注意，它们不是 PHP 语言里原生类型。所以不能把伪类型用于自定义函数里的类型约束 typehint。 

如果想查看某个表达式的值和类型，用 var_dump() 函数。 如果只是想得到一个易读懂的类型的表达方式用于调试，用 gettype() 函数。要检验某个类型，不要用 gettype()，而用 is_type 函数。如果要将一个变量强制转换为某类型，可以对其使用强制转换或者 settype() 函数。 

以下是一些范例：

```php
$a_bool = TRUE;   // 布尔值 boolean
$a_str  = "foo";  // 字符串 string
$a_str2 = 'foo';  // 字符串 string
$an_int = 12;     // 整型 integer

echo gettype($a_bool); // 输出:  boolean
echo gettype($a_str);  // 输出:  string

// 如果是整型，就加上 4
is_int($an_int) && ($an_int += 4);
var_dump($an_int); // int(16)

// 如果 $bool 是字符串，就打印出来
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
```

gettype 返回值：

◦ "boolean"  
◦ "integer"  
◦ "double" (for historical reasons "double" isreturned in case of a float, and not simply"float")  
◦ "string"  
◦ "array"  
◦ "object"  
◦ "resource"  
◦ "resource (closed)" as of PHP 7.2.0  
◦ "NULL"  
◦ "unknown type" 


### 👉 PHP type comparison tables

Comparisons of $x with PHP functions

|       Expression      | gettype() | empty() | is_null() | isset() | boolean : if($x) |
|-----------------------|-----------|---------|-----------|---------|------------------|
| $x = "";              | string    | TRUE    | FALSE     | TRUE    | FALSE            |
| $x = null;            | NULL      | TRUE    | TRUE      | FALSE   | FALSE            |
| var $x;               | NULL      | TRUE    | TRUE      | FALSE   | FALSE            |
| $x is undefined       | NULL      | TRUE    | TRUE      | FALSE   | FALSE            |
| $x = array();         | array     | TRUE    | FALSE     | TRUE    | FALSE            |
| $x = array('a', 'b'); | array     | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = false;           | boolean   | TRUE    | FALSE     | TRUE    | FALSE            |
| $x = true;            | boolean   | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = 1;               | integer   | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = 42;              | integer   | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = 0;               | integer   | TRUE    | FALSE     | TRUE    | FALSE            |
| $x = -1;              | integer   | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = "1";             | string    | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = "0";             | string    | TRUE    | FALSE     | TRUE    | FALSE            |
| $x = "-1";            | string    | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = "php";           | string    | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = "true";          | string    | FALSE   | FALSE     | TRUE    | TRUE             |
| $x = "false";         | string    | FALSE   | FALSE     | TRUE    | TRUE             |

Loose comparisons with ==

|         |  TRUE | FALSE |   1   |   0   |   -1  |  "1"  |  "0"  |  "-1" |  NULL | array() | "php" |   ""  |
|---------|-------|-------|-------|-------|-------|-------|-------|-------|-------|---------|-------|-------|
| TRUE    | TRUE  | FALSE | TRUE  | FALSE | TRUE  | TRUE  | FALSE | TRUE  | FALSE | FALSE   | TRUE  | FALSE |
| FALSE   | FALSE | TRUE  | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | TRUE  | TRUE    | FALSE | TRUE  |
| 1       | TRUE  | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| 0       | FALSE | TRUE  | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | TRUE  | FALSE   | TRUE  | TRUE  |
| -1      | TRUE  | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE   | FALSE | FALSE |
| "1"     | TRUE  | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| "0"     | FALSE | TRUE  | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE   | FALSE | FALSE |
| "-1"    | TRUE  | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE   | FALSE | FALSE |
| NULL    | FALSE | TRUE  | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | TRUE  | TRUE    | FALSE | TRUE  |
| array() | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE  | TRUE    | FALSE | FALSE |
| "php"   | TRUE  | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | TRUE  | FALSE |
| ""      | FALSE | TRUE  | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE   | FALSE | TRUE  |


Strict comparisons with ===

|         |  TRUE | FALSE |   1   |   0   |   -1  |  "1"  |  "0"  |  "-1" |  NULL | array() | "php" |   ""  |
|---------|-------|-------|-------|-------|-------|-------|-------|-------|-------|---------|-------|-------|
| TRUE    | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| FALSE   | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| 1       | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| 0       | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| -1      | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| "1"     | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE | FALSE   | FALSE | FALSE |
| "0"     | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE | FALSE   | FALSE | FALSE |
| "-1"    | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE | FALSE   | FALSE | FALSE |
| NULL    | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE  | FALSE   | FALSE | FALSE |
| array() | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE    | FALSE | FALSE |
| "php"   | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | TRUE  | FALSE |
| ""      | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE   | FALSE | TRUE  |


### 👉 Type Cast 转型

变量的类型通常不是由程序员设定的，确切地说，是由 PHP 根据该变量使用的上下文在运行时决定的，即 PHP 和 JavaScript 一样是动态类型脚本语言。PHP 在变量定义中不需要或不支持明确的类型定义，变量类型是根据使用该变量的上下文所决定的。

PHP 实际上认为 double 和 float 是相同的，由于一些历史的原因，这两个名称同时存在。

也就是说，如果把一个 string 值赋给变量 $var，$var 就成了一个 string。如果又把一个integer 赋给 $var，那它就成了一个integer。 

	$foo = "1";  // $foo 是字符串 (ASCII 49)
	$foo *= 2;   // $foo 现在是一个整数 (2)
	$foo = $foo * 1.3;  // $foo 现在是一个浮点数 (2.6)
	$foo = 5 * "10 Little Piggies"; // $foo 是整数 (50)
	$foo = 5 * "10 Small Pigs";     // $foo 是整数 (50)


显式类型转换：

- (int), (integer) - 转换为整形 integer 
- (bool), (boolean) - 转换为布尔类型 boolean 
- (float), (double), (real) - 转换为浮点型 float 
- (string) - 转换为字符串 string 
- (array) - 转换为数组 array 
- (object) - 转换为对象 object 
- (unset) - 转换为 NULL (PHP 5) 
- (binary) 转换和 b 前缀转换为二进制数据支持为 PHP 5.2.1 新增。 


显式转换示范：

	$pi = 3.14;      //输出float(3.14)
	$i = (int)$pi;   //输出int(3)

函数式转换：  intval()  floatval()  strval()
  
	$str	= "123.9abc";   
	$int	= intval($str);     //转换后数值：123   
	$float	= floatval($str); //转换后数值：123.9   
	$str	= strval($float);   //转换后字符串："123.9"    

settype() 函数式转换

	$num4 = 12.8; 
	$flag = settype($num4,"int"); 
	var_dump($flg); // bool(true)
	var_dump($num4); // int(12)


注意在括号内允许有空格和制表符，所以下面两个例子功能相同： 

	$foo = (int) '$bar'; // for 0
	$foo = ( int ) $bar;
	settype($foo,'string');

	$binary = (binary)$string;
	$binary = b"binary string";


要明确地将一个值转换成 boolean，用 (bool) 或者 (boolean) 来强制转换。但是很多情况下不需要用强制转换，因为当运算符，函数或者流程控制结构需要一个 boolean 参数时，该值会被自动转换。 

当转换为 boolean 时，以下值被认为是 FALSE： 

- 布尔值 FALSE 本身  
- 整型值 0（零）  
- 浮点型值 0.0（零）  
- 空字符串，以及字符串 "0"  
- 不包括任何元素的数组  
- 特殊类型 NULL（包括尚未赋值的变量）  
- 从空标记生成的 SimpleXML 对象  

所有其它值都被认为是 TRUE 包括任何资源和 NAN。-1 和其它非零值（不论正负）一样，被认为是 TRUE！ 

	var_dump((bool) "");        // bool(false)
	var_dump((bool) 1);         // bool(true)
	var_dump((bool) -2);        // bool(true)
	var_dump((bool) "foo");     // bool(true)
	var_dump((bool) 2.3e5);     // bool(true)
	var_dump((bool) array(12)); // bool(true)
	var_dump((bool) array());   // bool(false)
	var_dump((bool) "false");   // bool(true)

对于任意 integer，float，string，boolean 和 resource 类型，如果将一个值转换为数组，将得到一个仅有一个元素的数组，其下标为 0，该元素即为此标量的值。换句话说，(array)$scalarValue 与 array($scalarValue) 完全一样。 

如果一个 object 类型转换为 array，则结果为一个数组，其单元为该对象的属性。键名将为成员变量名，不过有几点例外：整数属性不可访问；私有变量前会加上类名作前缀；保护变量前会加上一个 * 做前缀。这些前缀的前后都各有一个 NULL 字符。这会导致一些不可预知的行为： 

	class A {
	    private $A; // This will become '\0A\0A'
	}

	class B extends A {
	    private $A; // This will become '\0B\0A'
	    public $AA; // This will become 'AA'
	}

	var_dump((array) new B());

上例会有两个键名为 'AA'，不过其中一个实际上是 '\0A\0A'。 


一个值可以通过在其前面加上 (string) 或用 strval() 函数来转变成字符串。在一个需要字符串的表达式中，会自动转换为 string。比如在使用函数 echo 或 print 时，或在一个变量和一个 string 进行比较时，就会发生这种转换。类型和类型转换可以更好的解释下面的事情，也可参考函数 settype()。 

- TRUE 转换成 "1"，FALSE 转换成 "" 空字符串。这种转换可以在 boolean 和 string 之间相互进行。 
- Integer 或 float 被转换为数字的字面字符串，包括 float 中的指数部分。使用指数计数法的浮点数（4.1E+6）也可转换。 
- Array 总是转换成字符串 "Array"，因此，echo 和 print 无法显示出该数组的内容。要显示某个单元，可以用 echo $arr['foo'] 这种结构。 
- PHP 4 中 object 总是被转换成字符串 "Object"，使用 get_class() 函数可以获取对象的类的名称。PHP 5 起，适当时可以用 __toString 魔术方法。 
- Resource 总会被转变成 "Resource id #1" 这种结构的字符串，其中的 1 是运行时分配唯一值。要得到一个 resource 的类型，可以用函数 get_resource_type()。
- NULL 总是被转变成空字符串。

如上面所说的，直接把 array，object 或 resource 转换成 string 不会得到除了其类型之外的任何有用信息。可以使用函数 print_r() 和 var_dump() 列出这些类型的内容。 

大部分的 PHP 值可以转变成 string 来永久保存，这被称作串行化，可以用函数 serialize() 来实现。如果 PHP 引擎设定支持 WDDX，PHP 值也可被串行化为格式良好的 XML 文本。 


当一个字符串被当作一个数值来取值，其结果和类型如下： 

如果该字符串没有包含 '.'，'e' 或 'E' 并且其数字值在整型的范围之内（由 PHP_INT_MAX 所定义），该字符串将被当成 integer 来取值。其它所有情况下都被作为 float 来取值。 

该字符串的开始部分决定了它的值。如果该字符串以合法的数值开始，则使用该数值。否则其值为 0（零）。合法数值由可选的正负号，后面跟着一个或多个数字（可能有小数点），再跟着可选的指数部分。指数部分由 'e' 或 'E' 后面跟着一个或多个数字构成。 


	$foo = 1 + "10.5";                // $foo is float (11.5)
	$foo = 1 + "-1.3e3";              // $foo is float (-1299)
	$foo = 1 + "bob-1.3e3";           // $foo is integer (1)
	$foo = 1 + "bob3";                // $foo is integer (1)
	$foo = 1 + "10 Small Pigs";       // $foo is integer (11)
	$foo = 4 + "10.2 Little Piggies"; // $foo is float (14.2)
	$foo = "10.0 pigs " + 1;          // $foo is float (11)
	$foo = "10.0 pigs " + 1.0;        // $foo is float (11)   


要明确地将一个值转换为 integer，用 (int) 或 (integer) 强制转换。不过大多数情况下都不需要强制转换，因为当运算符，函数或流程控制需要一个 integer 参数时，值会自动转换。还可以通过函数 intval() 来将一个值转换成整型。 

- 将 resource 转换成 integer 时，结果会是 PHP 运行时为 resource 分配的唯一资源号。
- 从布尔值转换，FALSE 将产生出 0（零），TRUE 将产生出 1（壹）。
- 从浮点型转换成整数时，将向下取整。

如果浮点数超出了整数范围（32 位平台下通常为 +/- 2.15e+9 = 2^31，64 位平台下，除了 Windows，通常为 +/- 9.22e+18 = 2^63），则结果为未定义，因为没有足够的精度给出一个确切的整数结果。在此情况下没有警告，甚至没有任何通知！ 

PHP 7.0.0 起，NaN 和 Infinity 在转换成 integer 时，不再是 undefined 或者依赖于平台，而是都会变成零。 绝不要将未知的分数强制转换为 integer，这样有时会导致不可预料的结果。 

	echo (int) ( (0.1+0.7) * 10 ); // 显示 7!


对象的转换规则：

- 将一个对象转换成对象，不会有任何变化。
- 如果其它任何类型的值被转换成对象，将会创建一个 stdClass 内置类实例。
- 如果该值为 NULL，则新的实例为空。 
- array 转换成 object 将使键名成为属性名并具有相对应的值。
- 对于其他值，会包含进成员变量名 scalar。 

注意：在以下这个例子里，使用 PHP 7.2.0 之前的版本，关联数组的数字键只能通过迭代访问，所以同样的代码不同 PHP 版本将会有不同结果。

	$obj = (object) array('1' => 'foo');
	var_dump(isset($obj->{'1'})); // PHP 7.2.0 后输出 'bool(true)'，之前版本会输出 'bool(false)' 
	var_dump(key($obj)); // PHP 7.2.0 后输出 'string(1) "1"'，之前版本输出  'int(1)' 

	$obj = (object) 'ciao';
	echo $obj->scalar;  // outputs 'ciao'


PHP 中的数组实际上是一个有序映射，是一种把 values 关联到 keys 的类型，所以也叫关联数组 Associate Array。此类型在很多方面做了优化，因此可以把它当成真正的数组，或列表（向量），散列表（是映射的一种实现），字典，集合，栈，队列以及更多可能性。由于数组元素的值也可以是另一个数组，树形结构和多维数组也是允许的。 

	$array = array(
	    "foo" => "bar",
	    "bar" => "foo",
	);

	// 自 PHP 5.4 起
	$array = [
	    "foo" => "bar",
	    "bar" => "foo",
	];

key 可以是 integer 或者 string。value 可以是任意类型，此外 key 会有如下的强制转换：

- ◦ 包含有合法整型值的字符串会被转换为整型。例如键名 "8" 实际会被储存为 8。但是 "08" 则不会强制转换，因为其不是一个合法的十进制数值。  
- ◦ 浮点数也会被转换为整型，意味着其小数部分会被舍去。例如键名 8.7 实际会被储存为 8。  
- ◦ 布尔值也会被转换成整型。即键名 true 实际会被储存为 1 而键名 false 会被储存为 0。  
- ◦ Null 会被转换为空字符串，即键名 null 实际会被储存为 ""。  
- ◦ 数组和对象不能被用为键名，这么做会导致警告：Illegal offset type。 


### 👉 Integer 整型

整型值可以使用十进制，十六进制，八进制或二进制表示，前面可以加上可选的符号（- 或者 +）。 

二进制表达的 integer 自 PHP 5.4.0 起可用。 

要使用八进制表达，数字前必须加上 0（零）。要使用十六进制表达，数字前必须加上 0x。要使用二进制表达，数字前必须加上 0b。 

Example #1 整数文字表达

	$a = 1234; // 十进制数
	$a = -123; // 负数
	$a = 0123; // 八进制数 (等于十进制 83)
	$a = 0x1A; // 十六进制数 (等于十进制 26)
	$a = 0b11111111; // 二进制数字 (等于十进制 255)

integer 语法的结构形式是： 


	decimal     : [1-9][0-9]*
	            | 0

	hexadecimal : 0[xX][0-9a-fA-F]+

	octal       : 0[0-7]+

	binary      : 0b[01]+

	integer     : [+-]?decimal
	            | [+-]?hexadecimal
	            | [+-]?octal
	            | [+-]?binary


整型数的字长和平台有关，尽管通常最大值是大约二十亿（32 位有符号）。64 位平台下的最大值通常是大约 9E18，除了 Windows 下 PHP 7 以前的版本，总是 32 位的。 PHP 不支持无符号的 integer。

整形常量定义：

- PHP_INT_SIZE 常量表示 Integer 值的字长；
- PHP_INT_MAX 常量来表示最大值，自 PHP 4.4.0 和 PHP 5.0.5 后可用；
- PHP_INT_MIN 常量表示最小值，PHP 7.0.0 及以后的版本中可用。 

在 64 位机上测试值：

	var_dump(PHP_INT_SIZE); // int(8)
	var_dump(PHP_INT_MAX); // int(9223372036854775807)
	var_dump(PHP_INT_MIN); // int(-9223372036854775808)

PHP 7 以前的版本里，如果向八进制数传递了一个非法数字（即 8 或 9），则后面其余数字会被忽略。PHP 7 以后，会产生 Parse Error。 

如果给定的一个数超出了 integer 的范围，将会被解释为 float。同样如果执行的运算结果超出了 integer 范围，也会返回 float。 


Example #2 32 位系统下的整数溢出

	$large_number = 2147483647;
	var_dump($large_number);                     // int(2147483647)

	$large_number = 2147483648;
	var_dump($large_number);                     // float(2147483648)

	$million = 1000000;
	$large_number =  50000 * $million;
	var_dump($large_number);                     // float(50000000000)


Example #3 64 位系统下的整数溢出

	$large_number = 9223372036854775807;
	var_dump($large_number);                     // int(9223372036854775807)

	$large_number = 9223372036854775808;
	var_dump($large_number);                     // float(9.2233720368548E+18)

	$million = 1000000;
	$large_number =  50000000000000 * $million;
	var_dump($large_number);                     // float(5.0E+19)


PHP 中没有整除的运算符。1/2 产生出 float 0.5。值可以舍弃小数部分，强制转换为 integer，或者使用 round() 函数可以更好地进行四舍五入。 


### 👉 String 字符串

一个字符串 string 就是由一系列的字符组成，其中每个字符等同于一个字节。这意味着 PHP 只能支持 256 的字符集，因此不支持 Unicode 。string 最大可以达到 2GB。

PHP 中的 string 的实现方式是一个由字节组成的数组再加上一个整数指明缓冲区长度。并无如何将字节转换成字符的信息，由程序员来决定。字符串由什么值来组成并无限制；特别的，其值为 0（"NUL bytes"）的字节可以处于字符串任何位置（不过有几个函数，在本手册中被称为非"二进制安全"的，也许会把 NUL 字节之后的数据全都忽略）。 

字符串类型的此特性解释了为什么 PHP 中没有单独的"byte"类型 - 已经用字符串来代替了。返回非文本值的函数 - 例如从网络套接字读取的任意数据 - 仍会返回字符串。 

由于 PHP 并不特别指明字符串的编码，那字符串到底是怎样编码的呢？

例如字符串 "á" 到底是等于 "\xE1"（ISO-8859-1），"\xC3\xA1"（UTF-8，Cform），"\x61\xCC\x81"（UTF-8，Dform）还是任何其它可能的表达呢？

答案是，字符串会被按照该脚本文件相同的编码方式来编码。因此如果一个脚本的编码是 ISO-8859-1，则其中的字符串也会被编码为 ISO-8859-1，以此类推。不过这并不适用于激活了 Zend Multibyte 时；此时脚本可以是以任何方式编码的（明确指定或被自动检测）然后被转换为某种内部编码，然后字符串将被用此方式编码。注意脚本的编码有一些约束（如果激活了 Zend Multibyte 则是其内部编码）- 这意味着此编码应该是 ASCII 的兼容超集，例如 UTF-8 或 ISO-8859-1。不过要注意，依赖状态的编码其中相同的字节值可以用于首字母和非首字母而转换状态，这可能会造成问题。 

当然了，要做到有用，操作文本的函数必须假定字符串是如何编码的。不幸的是，PHP 关于此的函数有很多变种： 

- 某些函数假定字符串是以单字节编码的，但并不需要将字节解释为特定的字符。例如 substr()，strpos()，strlen() 和 strcmp()。理解这些函数的另一种方法是它们作用于内存缓冲区，即按照字节和字节下标操作。  
- 某些函数被传递入了字符串的编码方式，也可能会假定默认无此信息。例如 htmlentities() 和 mbstring 扩展中的大部分函数。  
- 其它函数使用了当前区域，见 setlocale()，但是逐字节操作。例如 strcasecmp()，strtoupper() 和 ucfirst()。这意味着这些函数只能用于单字节编码，而且编码要与区域匹配。例如 strtoupper("á") 在区域设定正确并且 á 是单字节编码时会返回 "á"。如果是用 UTF-8 编码则不会返回正确结果，其结果根据当前区域有可能返回损坏的值。  
- 最后一些函数会假定字符串是使用某特定编码的，通常是 UTF-8。intl 扩展和 PCRE（上例中仅在使用了 u 修饰符时）扩展中的大部分函数都是这样。尽管这是由于其特殊用途，utf8_decode() 会假定 UTF-8 编码而 utf8_encode() 会假定 ISO-8859-1 编码。  

最后，要书写能够正确使用 Unicode 的程序依赖于很小心地避免那些可能会损坏数据的函数。要使用来自于 intl 和 mbstring 扩展的函数。不过使用能处理 Unicode 编码的函数只是个开始。不管用何种语言提供的函数，最基本的还是了解 Unicode 规格。例如一个程序如果假定只有大写和小写，那可是大错特错。 


一个字符串可以用 4 种方式表达： 

- 单引号  
- 双引号  
- heredoc 语法结构  
- nowdoc 语法结构（自 PHP 5.3.0 起） 

单引号字符串只能转义单引号：

```php
echo 'this is a simple string';

// 可以录入多行
echo 'You can also have embedded newlines in 
strings this way as it is
okay to do';

// 输出： Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"';

// 输出： You deleted C:\*.*?
echo 'You deleted C:\\*.*?';

// 输出： You deleted C:\*.*?
echo 'You deleted C:\*.*?';

// 输出： This will not expand: \n a newline
echo 'This will not expand: \n a newline';

// 输出： Variables do not $expand $either
echo 'Variables do not $expand $either';
```


字符串是包围在双引号中，PHP 将对一些特殊的字符进行转义解析：

	\n 换行（ASCII 字符集中的 LF 或 0x0A (10)） 
	\r 回车（ASCII 字符集中的 CR 或 0x0D (13)） 
	\t 水平制表符（ASCII 字符集中的 HT 或 0x09 (9)） 
	\v 垂直制表符（ASCII 字符集中的 VT 或 0x0B (11)）（自 PHP 5.2.5 起） 
	\e Escape（ASCII 字符集中的 ESC 或 0x1B (27)）（自 PHP 5.4.0 起） 
	\f 换页（ASCII 字符集中的 FF 或 0x0C (12)）（自 PHP 5.2.5 起） 
	\\ 反斜线 
	\$ 美元标记 
	\" 双引号 
	\[0-7]{1,3} 符合该正则表达式序列的是一个以八进制方式来表达的字符  
	\x[0-9A-Fa-f]{1,2} 符合该正则表达式序列的是一个以十六进制方式来表达的字符  


Heredoc <<< 句法结构，在该运算符之后要提供一个标识符，然后换行。接下来是字符串 string 本身，最后要用前面定义的标识符作为结束标志。自 PHP 5.3.0 起还可以在 Heredoc 结构中用双引号来声明标识符

Nowdoc 结构是类似于单引号字符串的，结构很象 Heredoc，但是 nowdoc 中不进行解析操作。这种结构很适合用于嵌入 PHP 代码或其它大段文本而无需对其中的特殊字符进行转义。与 SGML 的 `<![CDATA[ ]]>` 结构是用来声明大段的不用解析的文本类似，Nowdoc 结构也有相同的特征。 

一个 nowdoc 结构也用和 heredocs 结构一样的标记 <<<， 但是跟在后面的标识符要用单引号括起来，即 <<<'EOT'。Heredoc 结构的所有规则也同样适用于 nowdoc 结构，尤其是结束标识符的规则。 

结束时所引用的标识符必须在该行的第一列，而且，标识符的命名也要像其它标签一样遵守 PHP 的规则：只能包含字母、数字和下划线，并且必须以字母和下划线作为开头。 

要注意的是结束标识符这行除了可能有一个分号（;）外，绝对不能包含其它字符。这意味着标识符不能缩进，分号的前后也不能有任何空白或制表符。更重要的是结束标识符的后面必须是个被本地操作系统认可的换行，即要在标识符结束后面保留空行。比如在 UNIX 和 Mac OS X 系统中是 \n，而结束定界符（可能其后有个分号）之后也必须紧跟一个换行。如果不遵守该规则导致结束标识不干净，PHP 将认为它不是结束标识符而继续寻找。如果在文件结束前也没有找到一个正确的结束标识符，PHP 将会在最后一行产生一个解析错误。 

Heredocs 结构不能用来初始化类的属性。自 PHP 5.3 起，此限制仅对 heredoc 包含变量时有效。 

Example #1 非法的示例

	class foo {
	    public $bar = <<<EOT
	bar
	    EOT;
	}

正确示例：

	$foo = new stdClass();
	$foo->foo = 'Foo';
	$foo->bar = ['Bar1', 'Bar2'];
	$name = 'MyName';

	echo <<<EOT
	My name is "$name". I am printing some $foo->foo.
	Now, I am printing some {$foo->bar[1]}.
	This should print a capital 'A': \x41
	EOT;
	// THIS NEW LINE NEEDED!


以上例程会输出以下结果：


	My name is "MyName". I am printing some Foo.
	Now, I am printing some Bar2.
	This should print a capital 'A': A


### 👉 Float 浮点型 

浮点型（也叫浮点数 float，双精度数 double 或实数 real）可以用以下任一语法定义： 

	$a = 1.234; 
	$b = 1.2e3; 
	$c = 7E-10;

浮点数的精度有限。尽管取决于系统，PHP 通常使用 IEEE 754 双精度格式，则由于取整而导致的最大相对误差为 1.11e-16。非基本数学运算可能会给出更大误差，并且要考虑到进行复合运算时的误差传递。 

此外，以十进制能够精确表示的有理数如 0.1 或 0.7，无论有多少尾数都不能被内部所使用的二进制精确表示，因此不能在不丢失一点点精度的情况下转换为二进制的格式。这就会造成混乱的结果：例如，floor((0.1+0.7) * 10) 通常会返回 7 而不是预期中的 8，因为该结果内部的表示其实是类似 7.9999999999999991118...。 

所以永远不要相信浮点数结果精确到了最后一位，也永远不要比较两个浮点数是否相等。如果确实需要更高的精度，应该使用任意精度数学函数或者 gmp 函数。 


如上述警告信息所言，由于内部表达方式的原因，比较两个浮点数是否相等是有问题的。不过还是有迂回的方法来比较浮点数值，使用一个仅比该数值大一丁点的最小误差值。该值也被称为机器极小值 epsilon 或最小单元取整数，是计算中所能接受的最小的差别值。 

	$a = 1.23456789;
	$b = 1.23456780;
	$epsilon = 0.00001;

	if(abs($a-$b) < $epsilon) {
	    echo "true";
	}

某些数学运算会产生一个由常量 NAN 所代表的结果。此结果代表着一个在浮点数运算中未定义或不可表述的值。任何拿此值与其它任何值（除了 TRUE）进行的松散或严格比较的结果都是 FALSE。 

PHP7.1.2 的 NAN 解释很像 TRUE，但不严格相等：

	var_dump(NAN || FALSE); // bool(true)
	var_dump(NAN && TRUE);  // bool(true)
	var_dump(NAN === FALSE);// bool(false)
	var_dump(NAN === TRUE); // bool(false)
	var_dump(NAN === "FDS");// bool(false)
	var_dump(NAN === NAN);  // bool(false)
	var_dump(NAN == NAN);   // bool(false)
	var_dump(NAN == FALSE); // bool(false)
	var_dump(NAN == TRUE);  // bool(true)


## ⚡ 数值/字符串 自动转换 简化三元 三元嵌套

JavaScript 中，与运算 || 可以简化赋值，如下句中b是 false/0/null 那么表达式就会将c赋值给a，这相当于简体版的三元运算。

>	var a = b || c;

PHP 中也有类似功能，位逻辑与运算 |。PHP在数值/字符串之间进行运算时，字符串会自动转型为数值，这个转换让PHP的简化三元变得古怪怪的。

>	$file = "p6.jpg";
>	$e = "";
>	$z = 0;
>	$o = 1;
>	$n = 2;
>	$s = "4";
>	var_dump($e or $file);	//bool(true)
>	var_dump($e || $file);	//bool(true)
>	var_dump($e |  $file);	//string(6) "p6.jpg"
>	var_dump($z |  $file);	//int(0) (int)$file=>0 and 0|0=>0
>	var_dump($z or $o);		//bool(true)
>	var_dump($z || $o);		//bool(true)
>	var_dump($z |  $o);		//int(1)
>	var_dump($n |  $o);		//int(3) (int)"2"=>2 and 2|1=>3
>	var_dump($file |  $s);	//string(6) "t6.jpg"
>	var_dump(null | $file);	//int(0)

简化三元运算在 PHP 7 才有相应的合并运算符 ??。

>	$foo = null;
>	$bar = null;
>	$baz = 1;
>	$qux = 2;
>	
>	echo $foo ?? $bar ?? $baz ?? $qux; // outputs 1

接下来讨论一下三元嵌套，下面两个三元嵌套结果一样

>	$z = 0;
>	$o = 1;
>	$n = 2;
>	$s = 4;
>	var_dump($z? $o:$n? $n:$s);	//int(2)
>	var_dump($o? $o:$n? $n:$s);	//int(2)

因为三无是左优先运算，它们等价式是，如果期望正解执行，还是用括号清晰一点

>	var_dump(($z? $o:$n)? $n:$s);	//int(2)
>	var_dump(($o? $o:$n)? $n:$s);	//int(2)


## ⚡ try to get property & suppressed warning

	echo $u->err; //  Undefined variable

	$a = "abc";
	echo ($a->err); // Trying to get property of non-object
	$n = null;
	echo $n->err; // Trying to get property of non-object
	$i = 1;
	echo $i->err; // Trying to get property of non-object
	$b = false;
	echo $b->err; // Trying to get property of non-object

	echo $u['err']; //  Undefined variable

	$a = "abc";
	echo ($a['err']); // Illegal string offset 'err'
	$n = null;
	echo $n['err'];
	$i = 1;
	echo $i['err'];
	$b = false;
	echo $b['err'];

	echo @($u['err']); // suppressed warning


## ⚡ var_dump var_export print_r

这三个方法常用来打印调试信息，var_export 可以返回内容而不直接输出

	$res = var_export([new OO()], true);
	var_dump($res);
	print_r($res);

## ⚡ $this->{$key} 关联属性

和关联数组用法 $array['key'] 的用法一样，对象也有这样通过传入关联键值来访问成员的方式，同时，如果访问到没有定义的属性就会触发魔术函数  `__get`

	class OO {
		public $name = "M";
		public function __get($key){ return "$key UNDEFINED!"; }
	}
	$oo = new OO();
	var_dump($oo->{'mame'});


## ⚡ Shadow Copy vs Deep Copy & reference 

下面语句并不会通过 $b 改变 $a 的值，php数组是 deep copy 的。但是通过 &$a 赋值情况就不同了，那是引用同一个内存地址

>	$a = ['one'=>1, 'two'=>2, 'three'=>[1,2,3]];
>	$b = $a; //$b = &$a;
>	$b['one'] = 'one';
>	$b['three'][1] = 'one';
>	var_dump($a);


## ⚡ Reference Parameter 引用传参

	function ref4test(&$ref) // 引用传参
	{
	    $ref[] = 'BOX';
	}

	$list = ['Anne '];
	ref4test($list);
	var_dump( $list ); // ['Anne', 'BOX']

	function normal($arg)
	{
	    $arg[] = 'BOX';
	}
	$list = ['Anne '];
	normal($list);
	var_dump( $list ); // ['Anne']


## ⚡ namespace & use

PHP 5 >= 5.3.0, PHP 7 引用了命名空间来组织管理代码，命名空间第三个层级使用反斜杠作为分隔符。
在命名空间内访问其它对象，直接使用名称，或子命名空间。如果访问上级命名空间就需要通过顶级命名空间，逐级下访。

- namespce 定义需要在第一行；
- 使用 `use NS as ALIAS;` 引入要访问的命名空间；
- 使用 `__NAMESPACE__ ` 常量访问当前命名空间；
- 一个文件中可以有多个命名空间，如果不指定名称则表示顶级命名空间；
- 命名空间定义可以使用花括号或无花括号两种形式，可以定义子层级，但不可以使用花括号嵌套；
- 命名空间同样具有动态语言特性，可以通过变量字符串的方式实现访问；

命名空间下的符号解析：

- Unqualified name 不含命名空间的符号，如 `Foo`，将会在当前命名空间中寻找符号，没有定义则自己在全局空间查找；
- Qualified name 带有一个命名空间的符号，如 `Foo\Bar` 会在当前命名空间的下级空间 `Foo` 中查找定义；
- Fully qualified name 完全命名空间指定的符号，`\Foo\Bar` 会从全局命名空间中查找对应的称号；
- Relative name 相对命名空间使用 `namespace` 开头，相对于当前命名空间查看符号定义；

使用其它文件的命名空间，假设 inc 文件定义了 INC 命名空间，那么按以下调用其内部定义的方法和类：

```php
require "inc.php";
use \INC as I;
use \INC\Test as Test;
\INC\Hi();
var_dump([new Test(), new I\TestB]);
```

假定 inc.php 内容如下：

```php
namespace INC {
    $file = __file__;
    function Hi(){
        global $file; # no content when it require by other script
        $f = __file__;
        $file = !$file? "NO_GLOBAL_FILE: $f":$file;
        echo "hi! $file\n"; # __FILE__, __DIR__;
    }
    class Test {}
    class TestB {}
}
```

在旧版本中实现类自动加载，原理就是利用 PHP 魔术方法，实例化一个 class 的时候，PHP 如果找不到这个类，就会去自动调用本文件中的 `__autoload($class_name)` 方法。

在新版本中，这是一个过时的方法，使用 `spl_autoload_register` 自动加载机制替代。

如果是小项目，用 `__autoload()` 也可以实现基本的自动加载。但是大项目就不好用了，因为大概率需要自动加载来不同路径的文件，而一个项目中只允许有一个 `__autoload()` 函数，因为 PHP 不允许函数重名。

可以在全局空间中注册，也可以在其它命名空间注册自动加载器，无论在什么命名空间注册，只要其它自动加载器没有成功加载需要的类定义，它就会被调用。调用顺序为，Global Space -> Local Space -> Other Space。

在创建类实例前，不会主动触发加载，可以手动调用 spl_autoload_call 触发加载行为。

以下是一个类自动加载对象的实现：

```php
namespace {
}
namespace NS {
    class BaseClass {
        function displayVar() {
            echo 'NS BaseClass';
        }
    }
    function classLoader($class)
    {
        echo "NS classLoader: $class \n";
    }
    spl_autoload_register('\NS\classLoader');
}
namespace NSB {
    class BaseClass {
        function displayVar() {
            echo 'NSB BaseClass';
        }
    }
    function classLoader($class)
    {
        $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
        $file = __DIR__ . '/' . dirname($path) . '.php';
        echo "NSB classLoader: $file\n";

        if (file_exists($file)) {
             require_once $file;
        }
    }
    spl_autoload_register('\NSB\classLoader');
}
namespace NS\SUB {
    class BaseClass { }

    $a = new \NS\BaseClass;  // NS\BaseClass
    $b = new BaseClass;      // NS\SUB\BaseClass
    $class = __NAMESPACE__.'\BaseClass';
    $c = new $class;
    $name = BaseClass::Class;
    var_dump([
        '     name = '=>$name, 
        '$a::class = '=>$a::class, 
        '       $a = '=>$a, 
        '       $b = '=>$b, 
        '       $c = '=>$c]);

    // # auto require "inc.php";
    use \INC\Test as Test;
    use \INC as I;

    # Create instance cause loading
    // $t = new Test();
    // $t = new I\Test();
    // $b = new I\TestB;
    // var_dump([$t, $b]);

    # Manually load or create class instance before fun called
    spl_autoload_call("\Inc\Test");
    \INC\Hi();
    I\Hi();  # Use Alias
}
```

无花括号形式，一个命名空间的作用范围在定义语句开始到下一个命名空间定义语句结束。

```php
namespace my\com;
class MyClass {};

namespace my\name;

class MyClass {}
function myfunction() {}
const MYCONST = 1;

// Local Space: my\name\MyClass
$a = new MyClass;

// see "Global Space" section
$b = new \my\com\MyClass;
$c = new \my\name\MyClass;
var_dump([$a, $b]);

// see "Using namespaces: fallback to global function/constant" section
$a = strlen('hi');

// see "namespace operator and __NAMESPACE__ constant" section
$d = namespace\MYCONST; 
echo __NAMESPACE__."\MYCONST", '-->', $d, "\n";

// see "Namespaces and dynamic language features" section
$d = __NAMESPACE__ . '\MYCONST';
echo $d, "-->", constant($d), "\n";
```

如果符号与全局空间重叠，需要显式使用前缀斜杠来访问全局空间的符号：

```php
namespace A\B\C;

/* This function is A\B\C\fopen */
function fopen() { 
     /* ... */
     $f = \fopen(...); // call global fopen
     return $f;
} 
```


## ⚡ autoload vs. spl_autoload_register 自动加载机制

这是一个过时的方法，使用 spl_autoload_register 自动加载机制替代。

	function __autoload($className) { 
	    $filePath = “project/class/{$className}.php”; 
	    if (is_readable($filePath)) { 
	        require($filePath); 
	    } 
	} 
	$a = new A(); 
	$b = new B(); 
	$c = new C(); 

	function classLoader($class)
	{
		echo "class load:", $class;
		$path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
		$file = __DIR__ . '/src/' . $path . '.php';

		if (file_exists($file)) {
			 require_once $file;
		}
	}
	spl_autoload_register('classLoader');

	$o = new Path\To\YourClass();


## ⚡ Enum 枚举类型实现
- https://segmentfault.com/a/1190000018836345?utm_source=tag-newest

利用魔术函数 callStatic 为派生类实现静态方法：

	class Enum
	{
	    const __default = null;

	    protected static $value;

	    protected static $reflectionClass;

	    protected function __construct($value = null)
	    {
	        self::$value = is_null($value) ? static::__default : $value;
	    }

	    public function __toString()
	    {
	        return (string)self::$value;
	    }

	    public static function __callStatic($name, $arguments)
	    {
	        $reflectionClass = self::getReflectionClass();
	        $constant = $reflectionClass->getConstant(strtoupper($name));
	        $construct = $reflectionClass->getConstructor();
	        $construct->setAccessible(true);
	        $static = new static($constant);
	        return $static;
	    }

	    protected static function getReflectionClass()
	    {
	        if (!self::$reflectionClass instanceof ReflectionClass) {
	            self::$reflectionClass = new ReflectionClass(static::class);
	        }
	        return self::$reflectionClass;
	    }

	    public static function isValid($val)
	    {
	        return in_array($val, self::toArray());
	    }

	    public static function toArray()
	    {
	        return self::getEnumMembers();
	    }

	    public static function getEnumMembers()
	    {
	        return self::getReflectionClass()->getConstants();
	    }

	    public static function values()
	    {
	        return array_values(self::toArray());
	    }

	    public static function keys()
	    {
	        return array_keys(self::getEnumMembers());
	    }

	    public static function isKey($key)
	    {
	        return in_array($key, array_keys(self::getEnumMembers()));
	    }

	    public static function forKey($key)
	    {
	        return self::$key();
	    }

	    /**
	     * 格式枚举结果类型
	     * @param null|bool|int $type 当此处的值时什么类时 格式化输出的即为此类型
	     * @return bool|int|string|null
	     */
	    public function format($type = null)
	    {
	        switch (true) {
	            case ctype_digit(self::$value) || is_int($type):
	                return (int)self::$value;
	                break;
	            case $type === true:
	                return (bool)filter_var(self::$value, FILTER_VALIDATE_BOOLEAN);
	                break;
	            default:
	                return self::$value;
	                break;
	        }
	    }

	}

	class OrderStatus extends Enum
	{
	    const __default = self::WAIT_PAYMENT;
	    const WAIT_PAYMENT = 0;
	    const WAIT_SHIP = 1;
	    const WAIT_RECEIPT = 2;
	    const WAIT_COMMENT = 3;

	}

	// Instance of OrderStatus from __callStatic("WAIT_SHIP", null)
	$WAIT_SHIP = OrderStatus::WAIT_SHIP();

	var_dump((string)$WAIT_SHIP); // string(1)
	var_dump($WAIT_SHIP instanceof OrderStatus); // bool(true)
	var_dump($WAIT_SHIP->format());// auto int(1))
	var_dump($WAIT_SHIP->format(1));    // int(1)
	var_dump($WAIT_SHIP->format(true)); // bool(true)
	var_dump(OrderStatus::isValid(2));  // bool(true)
	var_dump(OrderStatus::isValid(8));  // bool(false)

	// ["__default","WAIT_PAYMENT","WAIT_SHIP","WAIT_RECEIPT","WAIT_COMMENT"]
	var_dump(json_encode(OrderStatus::keys()));
	// [0,0,1,2,3]
	var_dump(json_encode(OrderStatus::values()));
	// {"__default":0,"WAIT_PAYMENT":0,"WAIT_SHIP":1,"WAIT_RECEIPT":2,"WAIT_COMMENT":3}
	var_dump(json_encode(OrderStatus::toArray()));

	var_dump(OrderStatus::isKey('WAIT_PAYMENT')); // bool(true)
	var_dump(OrderStatus::isKey('WAIT_PAYMENT_TMP')); // bool(false)
	var_dump(OrderStatus::forKey('WAIT_PAYMENT')->format(1)); // int(0)


# 🚩 Class 类继承

自 PHP 5 起完全重写了对象模型以得到更佳性能和更多特性。这是自 PHP 4 以来的最大变化。PHP 5 具有完整的对象模型。 

PHP 5 中的新特性包括访问控制，抽象类和 final 类与方法，附加的魔术方法，接口，对象复制和类型约束。 

PHP 对待对象的方式与引用和句柄相同，即每个变量都持有对象的引用，而不是整个对象的拷贝。

当一个方法在类定义内部被调用时，有一个可用的伪变量 $this 表示当前实例对象的引用（通常是该方法所从属的对象，但如果是从第二个对象静态调用时也可能是另一个对象）。 


类对象定义后，就可以使用了，但使用前一般需要进行实例化，创建一个同样结构的对象，并用数据初始化它。

要创建一个类的实例，必须使用 new 关键字。在类定义内部，可以用 new self 和 new parent 创建新对象。 当创建新对象时该对象总是被赋值，除非该对象定义了构造函数并且在出错时抛出了一个异常。

如果在 new 之后跟着的是一个包含有类名的字符串 string，则该类的一个实例被创建。如果该类属于一个命名空间，则必须使用其完整名称。 


当把一个对象已经创建的实例赋给一个新变量时，新变量会访问同一个实例，就和用该对象赋值一样。此行为和给函数传递入实例时一样，可以用克隆给一个已创建的对象建立一个新实例。 

```php

namespace MyProject;
use stdClass;

class CameHump extends stdClass
{
    private $p = "Private _p";
    public $pp = "Property pp";
    static $QQ = "Static QQ";
    const  OO  = "Const OO";

    static function S(string $arg)
    {
        print(<<<EOD
            static method = [{$arg}]

            EOD);
        return strtoupper($arg);
    }
    function fun(...$args)
    {
        print(<<<EOD
            #   this fun = [{$this->pp}] arg=[$args[0], ...]
            # private pp = [{$this->p}]

            EOD);
        return __CLASS__."'s fun()";
    }
}
namespace\CameHump::S("AB"); // calls static method "method" of class MyProject\cname

$i = new CameHump();
$oo = CameHump::OO;
$cc = CameHump::class;
$that = "MyProject\CameHump"; # to be use as a Variable Class

    #   that fun = {$i->fun} Undefined property: CameHump fun 
print(<<<EOD
    #   that fun = {$i->fun("ABC")}
    #    that pp = [{$i->pp}]
    #   const OO = {$oo}
    #  static QQ = {$i::$QQ}
    #   static S = {$that::S("Something")} Use variable class
    #   const QQ = {CameHump::OO} Can't be use in EOD directly
    # class type = {$cc}
    # class type = {CameHump::class} Can't be use in EOD
    EOD);
    # ${CameHump::OO} Undefined variable `$Const OO`, ref Variable Variables
```

PHP 5.3.0 引进了两个新方法来创建一个对象的实例 new static 和 new $instance： 


	class Test
	{
	    static public function getNew()
	    {
	        return new static;
	    }
	}

	class Child extends Test {}

	$obj1 = new Test();
	$obj2 = new $obj1;
	var_dump($obj1 !== $obj2);

	$obj3 = Test::getNew();
	var_dump($obj3 instanceof Test);

	$obj4 = Child::getNew();
	var_dump($obj4 instanceof Child);


## ⚡ extends 继承扩展

一个类可以在声明中用 extends 关键字继承另一个类的方法和属性。PHP不支持多重继承，一个类只能继承一个基类。 

被继承的方法和属性可以通过用同样的名字重新声明被覆盖。但是如果父类定义方法时使用了 final，则该方法不可被覆盖。可以通过 parent:: 来访问被覆盖的方法或属性。 

当覆盖方法时，参数必须保持一致否则 PHP 将发出 E_STRICT 级别的错误信息。但构造函数例外，构造函数可在被覆盖时使用不同的参数。 


Example #9 简单的类继承

    class BaseClass {
        function displayVar() {
            echo 'BaseClass';
        }
    }

    class ExtendClass extends BaseClass
    {
        // Redefine the parent method
        function displayVar()
        {
            echo "Extending class\n";
            if(method_exists('BaseClass', 'displayVar')) parent::displayVar();
        }
    }

    $extended = new ExtendClass();
    $extended->displayVar();


自 PHP 5.5 起，关键词 class 也可用于类名的解析。使用 ClassName::class 你可以获取一个字符串，包含了类 ClassName 的完全限定名称。这对使用了 命名空间 的类尤其有用。 

Example #10 类名的解析

	namespace NS {
	    class ClassName {
	    }
	    
	    echo ClassName::class; // NS\ClassName
	}


## ⚡ stdClass 内置类
- PHP Predefined Classes https://www.php.net/manual/en/reserved.classes.php

stdClass Predefined Classes 在 PHP5 才开始被流行。而 stdClass 也是 zend 的一个保留类。stdClass 类是 PHP 的一个内部保留类，初始时没有成员变量也没成员方法，所有的魔术方法都被设置为 NULL。通过 `json_decode('{}')` 得到的对象就是 stdClass，凡是 stdClass，都不可能会出现 `$a->test()` 这种方式的使用。PHP 5 的对象的独特性，对象在任何地方被调用，都是引用地址型的，所以相对消耗的资源会少一点。在其它页面为它赋值时是直接修改，而不是引用一个拷贝。

	// $anonymous = new class{}
    // $object = new stdClass;
    $object = new stdClass();
    $object->$name = $value;
	
	class Dynamic extends stdClass{
	    public function __call($key,$params){
	        if(!isset($this->{$key})) throw new Exception("Call to undefined method ".get_class($this)."::".$key."()");
	        $subject = $this->{$key};
	        call_user_func_array($subject,$params);
	    }
	}

    $dynamic->myMethod = "thatFunction";
    $dynamic->hisMethod = array($instance,"aMethod");
    $dynamic->newMethod = array(SomeClass,"staticMethod");
    $dynamic->anotherMethod = function(){
        echo "Hey there";
    };


## ⚡ static 静态成员

静态，是对于当前进程的静态，不同进程，类静态成员在内存中有不同的副本，静态成员也可以加访问修饰，不加则使用默认访问控制 `public`。函数体内的静态成员初始化值只执行一次，不能使用函数返回值进行初始化。

可以通过 `php -f coding.php` 执行以下代码，保存代码到 `coding.php`。

	class OO {
		static function count(){
			static $count = 1;
			return $count++;
		}
		static $title = "Dr.";
		public static $name = "Racy";
		private static $age = 32;
	}

	echo OO::count();
	echo OO::count();
	echo OO::$title;
	OO::$title = "XYZ";
	sleep(6);
	echo OO::$title;

关于静态成员与继承

	class OO
	{
		static $count = 0;
		function test(){
			echo self::$count."\n";
		}
	}

	class OO2 extends OO
	{
		// static $count = 1;
		function __construct(){
			self::$count = 2; // working
		}
		// function test(){
		// 	echo self::$count."\n";
		// }
	}

	$a = new OO2();
	$a->test();

在子类中直接可以访问父类的静态成员，而不必使用 `parent` 关键字，但是如果子类又重新定义了同名的静态成员，那么通过 `self` 和 `parent` 访问的静态成员就有区别了。


## ⚡ self parent const static include $this extends 文件返回值

这里编写一个例程展示 `self`、 `parent`、 `const`、 `static`等关键字的使用，还有 `$this` 关键字与 `include` 的关系。

`extends` 关键字用来做类继承，类成员如果不指定访问权，默认为 `public`。

- `static` 在类中定义静态变量。
- `const` 在类中定义常量。
- `self` 用在类定义中引用自身的变量或 `static` 静态变量、`const` 常量。
- `parent` 用在类定义中引用自身的变量或 `static` 静态变量、`const` 常量。
- `$this` 上下文关键字，在类定义中引用当前类实例，即当前类在内存的一个副本。
- `include` 包含其它代码，也可以 `require`、 `include_once`、 `require_once`，尽管加 once 后缀的方法能避免重复包含，但对于不同文件的同名类或函数引起的冲突是无法处理的。

先来编写一个 `inc.php` 文件，它将通过 `include` 的形式被 `Derived` 类包含：

	<?php
	print_r(['$this'=>$this,'name'=>$name]);

再编写一个主程序文件，用于展示类的继承关系与各个关键字的使用：

	<?php
	class Base {
		public function __construct(){
			echo "Base constructor ... \n";
		}
		public function __destruct(){
			echo "Base destructor ... \n";
		}
	}

	class Derived extends Base {
		const SPECIES = "humanbeing";
		static $counter = 0;

		private $secret = "***";
		protected $age = 39;
		public $name = "Derived";
		
		public function __construct(){
			parent::__construct();
			Derived::$counter++;
			echo "{$this->name} constructor ... ".self::$counter."\n";
		}
		public function __destruct(){
			parent::__destruct();
			self::$counter--;
			echo "{$this->name} destructor ... ".self::$counter."\n";
		}
		public function view(){
			extract(["name"=>$this->name, "age"=>$this->age, "secret"=>$this->secret]);
			include "inc.php";
		}
	}

	$oa = new Derived();
	$ob = new Derived();
	$oc = new Derived();
	$oc->view();

	print_r([
		"species"=>Derived::SPECIES,
		"counter"=>Derived::$counter,
	]);

这个例程序中 `view()` 方法加载了 `inc.php`，观察输出结果可以了解到，被包含的代码文件中，其上下文关键字 `$this` 引用的是当前执行中的类实例。通过 `extract()` 方法将关联数组转化为变量供视图调用。这里使用了 `$oa`、 `$ob`、 `$oc` 三个变量来引用对象，可以尝试改为同一个变量名，PHP 解析器会在变量实例被覆盖时执行析构函数。这段代码展示的内容就是一些 PHP 框架的实现视图的基本原理，如 CodeIgniter。另外，可以将 `inc.php` 改造一下，增加一条返回语句

	return ['$this'=>$this,'name'=>$name];
	
这样在包含指令中将可以捕获这个文件的返回值，这种返回方式常用在框架的配置文件，通过将返回值赋值到变量，可以随时访问配置文件的内容：

	$conf = include "inc.php";

注意：类名是不区分大小写，但是为了视觉一致，保持大小写是非常推荐的做法！

	Base constructor ... 
	Derived constructor ... 1
	Base constructor ... 
	Derived constructor ... 2
	Base constructor ... 
	Derived constructor ... 3
	Array
	(
	    [$this] => Derived Object
	        (
	            [secret:Derived:private] => ***
	            [age:protected] => 39
	            [name] => Derived
	        )

	)
	Array
	(
	    [species] => humanbeing
	    [counter] => 3
	)
	Base destructor ... 
	Derived destructor ... 2
	Base destructor ... 
	Derived destructor ... 1
	Base destructor ... 
	Derived destructor ... 0


## ⚡ traits[treɪt] 实现类多继承

	traits是php5.4以后新增加的一个功能，可以使类继承像搭积木一样组合trait可以互相嵌套。一个trait类中可以用use导入另一个trait类，理解成代码复制就可以了。
	http://tabalt.net/blog/php-traits/

>	get_declared_traits ( void ) - Returns an array of all declared traits
>	class_uses() - Return the traits used by the given class
>	trait_exists() - Checks if the trait exists

trait 配合关键字 use 可以当作 class 使用：

>	trait Drive {
>	    public $name = 'trait';
>	    public function driving() {
>	        echo "driving {$this->name}\n";
>	    }
>	}
>	class Person {
>	    public function eat() {
>	        echo "eat\n";
>	    }
>	    public function driving_() {
>	        echo "driving from Person\n";
>	    }
>	}
>	class Student extends Person {
>	    use Drive;
>	    public function study() {
>	        echo "study\n";
>	    }
>	    public function driving_() {
>	        echo "driving from Student\n";
>	    }
>	}
>	$student = new Student();
>	$student->study();
>	$student->eat();
>	$student->driving();

输出结果如下：

>	study
>	eat
>	driving trait

如果Trait、基类和本类中都存在某个同名的属性或者方法，当前类中的方法会覆盖 trait的 方法，而 trait 的方法又覆盖了基类中的方法。

如果要组合多个Trait，通过逗号分隔 Trait名称：

>	use Trait1, Trait2;

如果多个Trait中包含同名方法或者属性时，需要明确声明解决冲突，否则会产生一个致命错误。可以使用insteadof和as操作符来解决冲突，insteadof是使用某个方法替代另一个，而as是给方法取一个别名，as关键词还有另外一个用途，那就是修改方法的访问控制:

>    use Trait1, Trait2 {
>        Trait2::methodA insteadof Trait1; // use Trait2->methodA
>        Trait1::methodB insteadof Trait2; // use Trait1->methodB
>        Trait1::methodA as private pmethodA;
>    }


# 🚩 Magic Methods & Static Member

PHP 中把以两个下划线开头的方法称为魔术方法 Magic methods，这些方法在 PHP 中充当了举足轻重的作用。

	__construct()	类的构造函数
	__destruct()	类的析构函数
	__call()		在对象中调用一个不可访问方法时调用
	__callStatic()	用静态方式中调用一个不可访问方法时调用
	__get()			获得一个类的成员变量时调用
	__set()			设置一个类的成员变量时调用
	__isset()		当对不可访问属性调用isset()或empty()时调用
	__unset()		当对不可访问属性调用unset()时被调用。
	__sleep()		执行serialize()时，先会调用这个函数
	__wakeup()		执行unserialize()时，先会调用这个函数
	__toString()	类被当成字符串时的回应方法
	__invoke()		调用函数的方式调用一个对象时的回应方法 PHP 5.3.0+
	__set_state()	调用var_export()导出类时，此静态方法会被调用。 PHP 5.1.0+
	__clone()		当对象复制完成时调用
	__autoload()	尝试加载未定义的类 (PHP 5, DEPRECATED in PHP 7.2.0)
	__debugInfo()	打印所需调试信息 PHP 5.6.0+

魔术常量：

	|       Name       |                          Description                           |
	|------------------|----------------------------------------------------------------|
	| __LINE__         | The current line number of the file.                           |
	| __FILE__         | The full path and filename of the file with symlinks resolved. |
	| __DIR__          | The directory of the file.                                     |
	| __FUNCTION__     | The function name.                                             |
	| __CLASS__        | The class name.                                                |
	| __TRAIT__        | The trait name.                                                |
	| __METHOD__       | The class method name.                                         |
	| __NAMESPACE__    | The name of the current namespace.                             |
	| ClassName::class | The fully qualified class name. See also ::class.              |

示范：

	class Father
	{
		public function __construct()
		{
			// self::init();
			$this->init();
			self::test();    // call self test(), so call Father::test();
			static::test(); // Son::test() may call 
		}
	    public function __destruct() {
	        echo "[life end]-->";
	    }

		public static function test()
		{
			echo "[father test]-->";
		}

		public function init()
		{
			echo "[father init]-->";
		}

	}

	class Son extends Father
	{
		public function init()
		{
			echo "[son init]-->";
		}

		public static function test()
		{
			echo "[son test]-->";
		}
		// Magic Methods 
		public function __call($method,$args) {
			$json = json_encode($args);
			echo "[matic call]-->[$method]($json)-->";
		}
	}

	$son = new Son();
	$son->justCallIt("Hi, Magic Call!");
	// [son init]-->[father test]-->[son test]-->[matic call]-->[justCallIt](["Hi, Magic Call!"])-->[life end]-->


# 🚩 跨域上传 HTTP OPTIONS
[Preflight Request 预检请求](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)

CORS 跨域请求会先发 option 请求，如果 server 返回access-control-allow-origin头为`*`或者和当前域名一致的话，才会进入第二段的真正请求。

这个先行请求是 CORS 跨域机制的 preflight（一个 OPTIONS 请求）， 该请求成功后才会发送真正的请求。 这一设计旨在确保服务器对 CORS 标准知情，以保护不支持 CORS 的旧服务器。

而通过 AJAX 跨域上传文件会使用 x-requested-with 头，不属于简单请求，因此客户端需要发送 OPTIONS 确认服务器是否许可跨域 AJAX 上传：

	Access-Control-Request-Headers: x-requested-with
	Access-Control-Request-Method: POST
	Origin: https://ice.work

服务器端只需要许可客户端的询问就可以进入正式的上传阶段：

	if( $_SERVER['REQUEST_METHOD']==='OPTIONS'){
		header("Access-Control-Allow-Credentials: true");
		header("Access-Control-Allow-Headers: ".$_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]);
		header("Access-Control-Allow-Methods: ".$_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]);
		header("Access-Control-Allow-Origin: ".$_SERVER["HTTP_ORIGIN"]);
		die();
	}


如果客户端使用了 withCredentials，服务端又响应了 `Access-Control-Allow-Origin: *`，如 PHP 的内置调试服务器就会，这会导致客户端跨域行为的终止：

Access to XMLHttpRequest at 'http://localhost/' from origin 'http://localhost:4444' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard `'*'` when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

	header("Access-Control-Allow-Origin: ".$_SERVER["HTTP_ORIGIN"]);


CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

两种请求

浏览器将CORS请求分为两类：简单请求（simple request）和非简单请求（not-so-simple request）。

同时满足以下条件，就是简单请求：

（1) 请求方法是以下三种方法之一：

	HEAD
	GET
	POST

（2）HTTP的头信息不超出以下几种字段：

	Accept
	Accept-Language
	Content-Language
	Last-Event-ID
	Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

## ⚡ 简单请求

对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。

Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。

如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段（详见下文），就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。都以Access-Control- 开头：

（1）Access-Control-Allow-Origin 

该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个 * ，表示接受任意域名的请求。

需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。
（2）Access-Control-Allow-Credentials

该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。

（3）Access-Control-Expose-Headers

该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。


# 🚩 Reflection 反查类文件位置 

	$config = new WxPayConfig();
	$object = new ReflectionClass($config);
	$methods = $object->getMethods();
	$method = $methods[0]; 
	$declaringclass = $method->getDeclaringClass();
	$filename = $declaringclass->getFilename();
	echo $filename;


# 🚩 CURL ERROR CODE
[Libcurl Errors](https://curl.haxx.se/libcurl/c/libcurl-errors.html)

CURLcode is one of the following:

- **CURLE_OK** (0) All fine. Proceed as usual.
- **CURLE_UNSUPPORTED_PROTOCOL** (1) The URL you passed to libcurl used a protocol that this libcurl does not support. The support might be a compile-time option that you didn't use, it can be a misspelled protocol string or just a protocol libcurl has no code for.
- **CURLE_FAILED_INIT** (2) Very early initialization code failed. This is likely to be an internal error or problem, or a resource problem where something fundamental couldn't get done at init time.
- **CURLE_URL_MALFORMAT** (3) The URL was not properly formatted.
- **CURLE_NOT_BUILT_IN** (4) A requested feature, protocol or option was not found built-in in this libcurl due to a build-time decision. This means that a feature or option was not enabled or explicitly disabled when libcurl was built and in order to get it to function you have to get a rebuilt libcurl.
- **CURLE_COULDNT_RESOLVE_PROXY** (5) Couldn't resolve proxy. The given proxy host could not be resolved.
- **CURLE_COULDNT_RESOLVE_HOST** (6) Couldn't resolve host. The given remote host was not resolved.
- **CURLE_COULDNT_CONNECT** (7) Failed to connect() to host or proxy.
- **CURLE_FTP_WEIRD_SERVER_REPLY** (8) The server sent data libcurl couldn't parse. This error code is used for more than just FTP and is aliased as CURLE_WEIRD_SERVER_REPLY since 7.51.0.
- **CURLE_REMOTE_ACCESS_DENIED** (9) We were denied access to the resource given in the URL. For FTP, this occurs while trying to change to the remote directory.
- **CURLE_FTP_ACCEPT_FAILED** (10) While waiting for the server to connect back when an active FTP session is used, an error code was sent over the control connection or similar.
- **CURLE_FTP_WEIRD_PASS_REPLY** (11) After having sent the FTP password to the server, libcurl expects a proper reply. This error code indicates that an unexpected code was returned.
- **CURLE_FTP_ACCEPT_TIMEOUT** (12) During an active FTP session while waiting for the server to connect, the CURLOPT_ACCEPTTIMEOUT_MS (or the internal default) timeout expired.
- **CURLE_FTP_WEIRD_PASV_REPLY** (13) libcurl failed to get a sensible result back from the server as a response to either a PASV or a EPSV command. The server is flawed.
- **CURLE_FTP_WEIRD_227_FORMAT** (14) FTP servers return a 227-line as a response to a PASV command. If libcurl fails to parse that line, this return code is passed back.
- **CURLE_FTP_CANT_GET_HOST** (15) An internal failure to lookup the host used for the new connection.
- **CURLE_HTTP2** (16) A problem was detected in the HTTP2 framing layer. This is somewhat generic and can be one out of several problems, see the error buffer for details.
- **CURLE_FTP_COULDNT_SET_TYPE** (17) Received an error when trying to set the transfer mode to binary or ASCII.
- **CURLE_PARTIAL_FILE** (18) A file transfer was shorter or larger than expected. This happens when the server first reports an expected transfer size, and then delivers data that doesn't match the previously given size.
- **CURLE_FTP_COULDNT_RETR_FILE** (19) This was either a weird reply to a 'RETR' command or a zero byte transfer complete.
- **CURLE_QUOTE_ERROR** (21) When sending custom "QUOTE" commands to the remote server, one of the commands returned an error code that was 400 or higher (for FTP) or otherwise indicated unsuccessful completion of the command.
- **CURLE_HTTP_RETURNED_ERROR** (22) This is returned if CURLOPT_FAILONERROR is set TRUE and the HTTP server returns an error code that is >= 400.
- **CURLE_WRITE_ERROR** (23) An error occurred when writing received data to a local file, or an error was returned to libcurl from a write callback.
- **CURLE_UPLOAD_FAILED** (25) Failed starting the upload. For FTP, the server typically denied the STOR command. The error buffer usually contains the server's explanation for this.
- **CURLE_READ_ERROR** (26) There was a problem reading a local file or an error returned by the read callback.
- **CURLE_OUT_OF_MEMORY** (27) A memory allocation request failed. This is serious badness and things are severely screwed up if this ever occurs.
- **CURLE_OPERATION_TIMEDOUT** (28) Operation timeout. The specified time-out period was reached according to the conditions.
- **CURLE_FTP_PORT_FAILED** (30) The FTP PORT command returned error. This mostly happens when you haven't specified a good enough address for libcurl to use. See CURLOPT_FTPPORT.
- **CURLE_FTP_COULDNT_USE_REST** (31) The FTP REST command returned error. This should never happen if the server is sane.
- **CURLE_RANGE_ERROR** (33) The server does not support or accept range requests.
- **CURLE_HTTP_POST_ERROR** (34) This is an odd error that mainly occurs due to internal confusion.
- **CURLE_SSL_CONNECT_ERROR** (35) A problem occurred somewhere in the SSL/TLS handshake. You really want the error buffer and read the message there as it pinpoints the problem slightly more. Could be certificates (file formats, paths, permissions), passwords, and others.
- **CURLE_BAD_DOWNLOAD_RESUME** (36) The download could not be resumed because the specified offset was out of the file boundary.
- **CURLE_FILE_COULDNT_READ_FILE** (37) A file given with FILE:// couldn't be opened. Most likely because the file path doesn't identify an existing file. Did you check file permissions?
- **CURLE_LDAP_CANNOT_BIND** (38) LDAP cannot bind. LDAP bind operation failed.
- **CURLE_LDAP_SEARCH_FAILED** (39) LDAP search failed.
- **CURLE_FUNCTION_NOT_FOUND** (41) Function not found. A required zlib function was not found.
- **CURLE_ABORTED_BY_CALLBACK** (42) Aborted by callback. A callback returned "abort" to libcurl.
- **CURLE_BAD_FUNCTION_ARGUMENT** (43) Internal error. A function was called with a bad parameter.
- **CURLE_INTERFACE_FAILED** (45) Interface error. A specified outgoing interface could not be used. Set which interface to use for outgoing connections' source IP address with CURLOPT_INTERFACE.
- **CURLE_TOO_MANY_REDIRECTS** (47) Too many redirects. When following redirects, libcurl hit the maximum amount. Set your limit with CURLOPT_MAXREDIRS.
- **CURLE_UNKNOWN_OPTION** (48) An option passed to libcurl is not recognized/known. Refer to the appropriate documentation. This is most likely a problem in the program that uses libcurl. The error buffer might contain more specific information about which exact option it concerns.
- **CURLE_TELNET_OPTION_SYNTAX** (49) A telnet option string was Illegally formatted.
- **CURLE_GOT_NOTHING** (52) Nothing was returned from the server, and under the circumstances, getting nothing is considered an error.
- **CURLE_SSL_ENGINE_NOTFOUND** (53) The specified crypto engine wasn't found.
- **CURLE_SSL_ENGINE_SETFAILED** (54) Failed setting the selected SSL crypto engine as default!
- **CURLE_SEND_ERROR** (55) Failed sending network data.
- **CURLE_RECV_ERROR** (56) Failure with receiving network data.
- **CURLE_SSL_CERTPROBLEM** (58) problem with the local client certificate.
- **CURLE_SSL_CIPHER** (59) Couldn't use specified cipher.
- **CURLE_PEER_FAILED_VERIFICATION** (60) The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK. This error code has been unified with CURLE_SSL_CACERT since 7.62.0. Its previous value was 51.
CURL 60 SSL证书问题：无法获得本地颁发者证书

有关“SSL证书问题：无法获得本地颁发者证书”错误。显然，这适用于发送cURL请求的系统(而不是接收请求的服务器)。

1)从https://curl.haxx.se/ca/cacert.pem

2)将以下行添加到php.ini(如果这是共享主机，并且您无法访问php.ini，则可以将其添加到public_html中的.user.ini中)

	openssl.cafile=C:\php7.2.6\extras\ssl\cacert.pem

确保您将路径用双引号括起来！


- **CURLE_BAD_CONTENT_ENCODING** (61) Unrecognized transfer encoding.
- **CURLE_LDAP_INVALID_URL** (62) Invalid LDAP URL.
- **CURLE_FILESIZE_EXCEEDED** (63) Maximum file size exceeded.
- **CURLE_USE_SSL_FAILED** (64) Requested FTP SSL level failed.
- **CURLE_SEND_FAIL_REWIND** (65) When doing a send operation curl had to rewind the data to retransmit, but the rewinding operation failed.
- **CURLE_SSL_ENGINE_INITFAILED** (66) Initiating the SSL Engine failed.
- **CURLE_LOGIN_DENIED** (67) The remote server denied curl to login (Added in 7.13.1)
- **CURLE_TFTP_NOTFOUND** (68) File not found on TFTP server.
- **CURLE_TFTP_PERM** (69) Permission problem on TFTP server.
- **CURLE_REMOTE_DISK_FULL** (70) Out of disk space on the server.
- **CURLE_TFTP_ILLEGAL** (71) Illegal TFTP operation.
- **CURLE_TFTP_UNKNOWNID** (72) Unknown TFTP transfer ID.
- **CURLE_REMOTE_FILE_EXISTS** (73) File already exists and will not be overwritten.
- **CURLE_TFTP_NOSUCHUSER** (74) This error should never be returned by a properly functioning TFTP server.
- **CURLE_CONV_FAILED** (75) Character conversion failed.
- **CURLE_CONV_REQD** (76) Caller must register conversion callbacks.
- **CURLE_SSL_CACERT_BADFILE** (77) Problem with reading the SSL CA cert (path? access rights?)
- **CURLE_REMOTE_FILE_NOT_FOUND** (78) The resource referenced in the URL does not exist.
- **CURLE_SSH** (79) An unspecified error occurred during the SSH session.
- **CURLE_SSL_SHUTDOWN_FAILED** (80) Failed to shut down the SSL connection.
- **CURLE_AGAIN** (81) Socket is not ready for send/recv wait till it's ready and try again. This return code is only returned from curl_easy_recv and curl_easy_send (Added in 7.18.2)
- **CURLE_SSL_CRL_BADFILE** (82) Failed to load CRL file (Added in 7.19.0)
- **CURLE_SSL_ISSUER_ERROR** (83) Issuer check failed (Added in 7.19.0)
- **CURLE_FTP_PRET_FAILED** (84) The FTP server does not understand the PRET command at all or does not support the given argument. Be careful when using CURLOPT_CUSTOMREQUEST, a custom LIST command will be sent with PRET CMD before PASV as well. (Added in 7.20.0)
- **CURLE_RTSP_CSEQ_ERROR** (85) Mismatch of RTSP CSeq numbers.
- **CURLE_RTSP_SESSION_ERROR** (86) Mismatch of RTSP Session Identifiers.
- **CURLE_FTP_BAD_FILE_LIST** (87) Unable to parse FTP file list (during FTP wildcard downloading).
- **CURLE_CHUNK_FAILED** (88) Chunk callback reported error.
- **CURLE_NO_CONNECTION_AVAILABLE** (89) (For internal use only, will never be returned by libcurl) No connection available, the session will be queued. (added in 7.30.0)
- **CURLE_SSL_PINNEDPUBKEYNOTMATCH** (90) Failed to match the pinned key specified with CURLOPT_PINNEDPUBLICKEY.
- **CURLE_SSL_INVALIDCERTSTATUS** (91) Status returned failure when asked with CURLOPT_SSL_VERIFYSTATUS.
- **CURLE_HTTP2_STREAM** (92) Stream error in the HTTP/2 framing layer.
- **CURLE_RECURSIVE_API_CALL** (93) An API function was called from inside a callback.
- **CURLE_OBSOLETE*** These error codes will never be returned. They were used in an old libcurl version and are currently unused.


# 🚩 file cache util

	function file_cache($key, $data = null){
		$magic = '<'.'?php exit();?'.'>';
		$file = "file_cache_{$key}.php";
		$res = @trim(file_get_contents($file, false, null, strlen($magic)));
		$json = json_decode($res);
		if( !is_null($data) ) {
			$json = json_encode($data, JSON_UNESCAPED_UNICODE);
			file_put_contents($file, $magic.$json);
		}
		return $json? $json:$res;
	}

	// test script
	@unlink("file_cache_token.php");
	assert(file_cache("token")==="", 'file deleted test...');
	file_cache("token", "abcd");
	assert(file_cache("token")==="abcd", 'string cache test...');
	file_cache("token", ['name'=>'Jeango']);
	assert(file_cache("token")->name==="Jeango", 'array2json cache test...');
	$oo = new stdClass();
	$oo->name = "Jimbowhy";
	file_cache("token", $oo);
	assert(file_cache("token")->name==="Jimbowhy", 'object2json cache test...');

# 🚩 pack unpack Big-Endian Little-Endian

PHP pack 函数用于将其它进制的数字压缩到二进位字符串之中。举例，将 1000 这个数值保存到文件中，会转成字符串占用 4 个字节，而通过 pack 打包，当短整数处理只需要两个字节。

	$pk = pack("s", 1000);
	file_put_contents('out100.txt', 1000);
	file_put_contents('out.txt', $pk);
	var_dump( unpack('s', $pk) ); [1000]

打包后保存到文件的结果是 0xe8、0x03 即 0x03e8，1000 的十六进制表达，打包后字节序在不同平台保持一致可以用于不同平台的数据传递，通过相应的 unpack 即可以逆向还原数据。

打包多字节字符，格式 a 和 A 的差别就是后都会使用空格来填充，如下面两个中文字符总共6个字节，格式中指定了8个字节，空出来的两个字节空间就会以 NULL 填充，即填 0。

	$bin = pack("a8", "中文");
	var_dump(bin2hex($bin));    // e4b8ade696870000
	var_dump(bin2hex($bin{0})); // e4
	print_r( [$bin, unpack('a8', $bin)] );

格式字符参考：

	a -- 将字符串空白以 NULL 字符填满
	A -- 将字符串空白以 SPACE 字符 (空格) 填满
	h -- 16进制字符串，低位在前以半字节为单位
	H -- 16进制字符串，高位在前以半字节为单位
	c -- 有符号字符
	C -- 无符号字符

	s -- 有符号短整数 (16位，主机字节序)
	S -- 无符号短整数 (16位，主机字节序)
	n -- 无符号短整数 (16位, 大端字节序)
	v -- 无符号短整数 (16位, 小端字节序)
	i -- 有符号整数 (依赖机器大小及字节序)
	I -- 无符号整数 (依赖机器大小及字节序)
	l -- 有符号长整数 (32位，主机字节序)
	L -- 无符号长整数 (32位，主机字节序)
	N -- 无符号长整数 (32位, 大端字节序)
	V -- 无符号长整数 (32位, 小端字节序)
	f -- 单精度浮点数 (依计算机的范围)
	d -- 双精度浮点数 (依计算机的范围)
	x -- 空字节
	X -- 倒回一位
	@ -- 填入 NULL 字符到绝对位置

一共就分为两类，字符串和数值两类，另外要理解字节序。

两种字节存储顺序大端序和小端序 Big-Endian 和 Little-Endian，字节序只针对于多字节类型的数据处理，比如对于 int 整数 0x12345678，它占有 4 个字节的存储空间：

- 0x12 0x34 0x56 0x78 Big-Endian 高位存于低地址端，你们字节排放在内存的高地址端；
- 0x78 0x56 0x34 0x12 Little-Endian 低位存于低地址端，高位字节排放在内存的高地址端。


`h` 和 `H` 的描述看起来有些奇怪。它们都是读取十进制，以十六进制方式读取，以半字节(4位)为单位。这听起来有些拗口，还是以实例来说明：

	echo "output: " . pack("H", 0x5) . "\n";
	echo "output: " . chr(0x50) . "\n";
	// output: P

首先是读取十进制，所以0x5会转成十进制的5，然后以半字节为单位并且以十六进制方式读取，为了补足8位，所以需要在5后面补0，变成0x50。0x50正好是字符P的ASCII码。

`h` 和 `H` 的差别在于前者是低位在前，后者是高位在前，拿前面的例子来看看h的行为：

	$bin = pack("h", 0x5);
	echo "output: " . ord($bin) . "\n";
	// output: 5

读取十进制的5，因为是高位在前，所以没有变化。由于0x05是不可见字符，直接输出会是空的。

h和H是以半字节为单位，h2和H2则表示一次读取8位，同理h3和H3可以推导出来，但是会补足8位！

PHP: 深入pack/unpack 字节序 - https://www.cnblogs.com/andydao/p/4200662.html


# 🚩 [String] heredoc nowdoc
- String https://www.php.net/manual/zh/language.types.string.php

一个字符串可以用 4 种方式表达：

* 单引号，不能进行变量插值，`$s = 'some string';`
* 双引号，可以进行变量插值，`$s = "some variable $a or {$b}";`
* heredoc 语法结构，`<<<EOT ... EOT;`
* nowdoc 语法结构，`<<<'EOT' ... EOT;`， PHP 5.3.0+

```php
echo 'this is a simple string';

echo 'You can also have embedded newlines in 
strings this way as it is
okay to do';

echo 'Arnold once said: "I\'ll be back"';
// 输出： Arnold once said: "I'll be back"

echo 'You deleted C:\\*.*?';
// 输出： You deleted C:\*.*?

echo 'You deleted C:\*.*?';
// 输出： You deleted C:\*.*?

echo 'This will not expand: \n a newline';
// 输出： This will not expand: \n a newline

echo 'Variables do not $expand $either';
// 输出： Variables do not $expand $either
```


当字符串用双引号或 heredoc 结构定义时，可以做变量扩展，可以扩展数组元素或对象成员，复杂表达还可以使用花括号

```php
$pinf = pathinfo("/path/to/file.ext");

// Heredoc
echo <<<EOT
echo <<<EOT
<br/>pathinfo: 
<br/> dirname   => {$pinf["dirname"]}
<br/> basename  => {$pinf["basename"]}
<br/> extension => {$pinf["extension"]}
<br/> filename  => {$pinf["filename"]}
EOT;


$juice = "apple";
echo "He drank some $juice juice.".PHP_EOL;  // He drank some apple juice.
echo "He drank some juice made of $juices."; // He drank some juice made of .

$juices = array("apple", "orange", "koolaid1" => "purple");

echo "He drank some $juices[0] juice.".PHP_EOL;
echo "He drank some $juices[1] juice.".PHP_EOL;
echo "He drank some $juices[koolaid1] juice.".PHP_EOL;
echo "He drank some juice made of $juice[0]s.".PHP_EOL; // Won't work
echo "He drank some juice made of {$juice[0]}s.".PHP_EOL; // OK

class people {
    public $john = "John Smith";
    public $jane = "Jane Smith";
    public $robert = "Robert Paulsen";
    
    public $smith = "Smith";
}

$people = new people();

echo "$people->john drank some $juices[0] juice.".PHP_EOL;
echo "$people->john then said hello to $people->jane.".PHP_EOL;
echo "$people->john's wife greeted $people->robert.".PHP_EOL;
echo "$people->robert greeted the two $people->smiths."; // Won't work
echo "$people->robert greeted the two {$people->smiths}."; // OK
```

函数、方法、静态类变量和类常量扩展在 PHP 5+ 中有效

```php
class beers {
    const softdrink = 'rootbeer';
    public static $ale = 'ipa';
}

$rootbeer = 'A & W';
$ipa = 'Alexander Keith\'s';

// 有效，输出： I'd like an A & W
echo "I'd like an {${beers::softdrink}}\n";

// 也有效，输出： I'd like an Alexander Keith's
echo "I'd like an {${beers::$ale}}\n";
```


转义字符

|序列	|含义|
|-------|----|
|\n	|换行（ASCII 字符集中的 LF 或 0x0A (10)）|
|\r	|回车（ASCII 字符集中的 CR 或 0x0D (13)）|
|\t	|水平制表符（ASCII 字符集中的 HT 或 0x09 (9)）|
|\v	|垂直制表符（ASCII 字符集中的 VT 或 0x0B (11)）（自 PHP 5.2.5 起）|
|\e	|Escape（ASCII 字符集中的 ESC 或 0x1B (27)）（自 PHP 5.4.0 起）|
|\f	|换页（ASCII 字符集中的 FF 或 0x0C (12)）（自 PHP 5.2.5 起）|
|\\	|反斜线|
|\$	|美元标记|
|\"	|双引号|
|\[0-7]{1,3}	|符合该正则表达式序列的是一个以八进制方式来表达的字符|
|\x[0-9A-Fa-f]{1,2}	|符合该正则表达式序列的是一个以十六进制方式来表达的字符|


## ⚡ Heredoc & Nowdoc

Heredoc，用来输出大段的字符串，和双引号字符串一样支持变量解析。句法结构：<<<。在该运算符之后要提供一个标识符，后面不能有空格，然后换行。接下来是字符串 string 本身，最后要用前面定义的标识符作为结束标志。末尾的结束符必须靠边，并且前面不能有空格和缩进符。PHP 5.3.0+ 可以在 Heredoc 结构中用双引号来声明标识符，也可以用 Heredoc 结构来初始化静态变量和类的属性和常量。

Nowdoc 结构类似于 heredoc，是单引号字符串的。Nowdoc 结构很象 heredoc 结构，但是 nowdoc 中不进行解析操作。这种结构很适合用于嵌入 PHP 代码或其它大段文本而无需对其中的特殊字符进行转义。与 SGML 的 `<![CDATA[ ]]>` 结构是用来声明大段的不用解析的文本类似，nowdoc 结构也有相同的特征。 Nowdoc 结构可以用在任意的静态数据环境中，最典型的示例是用来初始化类的属性或常量，以下代码演示 Heredoc 和 Nowdoc:

```php
class foo
{
	// Nowdoc
    public $foo = <<<'EOT'
foo
EOT;
    public $bar;

    function foo()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

// Heredoc
echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;

// Nowdoc
echo <<<'EOT'
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41
EOT;
```

数字字符自动转型

	$foo = 1 + "10.5";                // $foo is float (11.5)
	$foo = 1 + "-1.3e3";              // $foo is float (-1299)
	$foo = 1 + "bob-1.3e3";           // $foo is integer (1)
	$foo = 1 + "bob3";                // $foo is integer (1)
	$foo = 1 + "10 Small Pigs";       // $foo is integer (11)
	$foo = 4 + "10.2 Little Piggies"; // $foo is float (14.2)
	$foo = "10.0 pigs " + 1;          // $foo is float (11)
	$foo = "10.0 pigs " + 1.0;        // $foo is float (11)     


# 🚩 TIMESTAMP & DATETIME

TIMESTAMP和DATETIME的相同点：

1> 两者都可用来表示YYYY-MM-DD HH:MM:SS[.fraction]类型的日期。

TIMESTAMP和DATETIME的不同点：

1> 两者的存储方式不一样，对TIMESTAMP，它把客户端插入的时间从当前时区转化为UTC（世界标准时间）进行存储。查询时，将其又转化为客户端当前时区进行返回。

而对于DATETIME，不做任何改变，基本上是原样输入和输出。

# 🚩 strtotime("last monday") 获取周一日期问题

strtotime('last Monday') 返回的是上个周一的时间戳，如果当天就是周一的话，也是往前找到上一个周一，过了周一返回当前周的周一日期时间，可以使用 last week。

	$time = strtotime("2019-04-01 00:00:00");
	if( date("w")==1 ){
		$time += 24*60*60;
		echo "Monday";
	}
	$thisweek = strtotime("last monday", $time);
	var_dump(date("y-m-d H:i:s",$thisweek));

# 🚩 popen 与Linux后台运行实现异步

popen()函数通过创建一个管道，调用fork()产生一个子进程。而Linxu多任务系统的特性可以完美结合php实现多进程，通过给命令后缀一个与号&，命令的运行动作就会自动转入后台不必等待。下面代码展示了 popen()结合对象序列化函数 serialize() unserialize() 的使用方法。

	<?php // main.php
	$handle = popen("php more.php &","w");
	$params = [
	    'to' => 'somebody@mail.com',
	    'content' => 'hi!',
	    'subject' => 'Test',
	];
	fwrite($handle, serialize($params));
	fclose($handle);

	<?php // more.php
	// if( @$argc>0 ) print_r(['arguments'=>$argv]);
	date_default_timezone_set("Asia/Shanghai"); 
	// sleep(5);
	for ($i=0; $i<1000000000; $i++) {
		continue;
	}
	$params = file_get_contents('php://stdin');
	$params = @unserialize($params);
	if( isset($params) ) {
		file_put_contents("out.txt", "\n# ITEM ".date("Y-m-d H:i:s"), FILE_APPEND);
		file_put_contents("out.txt", $params, FILE_APPEND);
	}

# 🚩 php同步锁
- SSM(十五) 乐观锁与悲观锁的实际应用 - https://crossoverjie.top/2017/07/09/SSM15/
- PHP程序中的文件锁、互斥锁、读写锁 - https://www.jb51.net/article/81246.htm
- php多进程读写同一个文件锁的问题及flock详解 - https://blog.csdn.net/zhang197093/article/details/52216081


## ⚡ 读写锁(Reader Writer Lock)

假设我们有一个共享内存区域，可以保护互斥锁后面的共享数据，在这种情况下，没有两个线程可以同时访问数据。但是，此解决方案不是最理想的，因为读取器R1可能具有锁定，然后另一个读取器R2请求访问。R2在开始自己的读操作之前等到R1完成是愚蠢的。相反，R2应立即开始。这是Reader Writer Lock模式的动机。


## ⚡ 文件锁 advisory file locking

文件锁比较常见，例如 mysql, php-fpm 启动之后都会有一个pid文件记录了进程id，这个文件就是文件锁。 这个锁可以防止重复运行一个进程，例如在使用crontab时，限定每一分钟执行一个任务，但这个进程运行时间可能超过一分钟，如果不用进程锁解决冲突的话两个进程一起执行就会有问题。 使用PID文件锁还有一个好处，方便进程向自己发停止或者重启信号。例如重启php-fpm的命令，发送USR2信号给pid文件记录的进程，信号属于进程通信，会另开一个篇幅。 

	kill -USR2 `cat /usr/local/php/var/run/php-fpm.pid`

flock 在官方文档中的全称是 Portable advisory file locking 翻译过来应该是 可移植的协同锁，php文件锁函数 flock() 默认是阻塞的，有共享锁 LOCK_SH 和互斥锁 LOCK_EX，互斥锁也可以在 file_put_contents 函数中使用。如果想非阻塞可以在 operation 加一个 bitmask LOCK_NB，在阻塞方式下，代码执行到加锁区时就进入阻塞等待解锁，然后获取到锁的进程继续执行。非阻塞的方式，在获取文件锁时，如果已牌加锁状态则返回false，代码跳过取锁继续执行。

	LOCK_SH 取得共享锁定，该进程只能读不能写，其他进程还是能读取该文件的。
	LOCK_EX 取得独占锁定，该进程能读写该文件，其他进程则不能读写。

协同锁(advisory lock) 要求参与操作的进程之间协同合作。假设进程“A”获得一个WRITE锁，并开始向文件中写入内容；此时，进程“B”并没有试图获取一个锁，它仍然可以打开文件并向文件中写入内容。在此过程中，进程“B”就是一个非合作进程。如果进程“B”试图获取一个锁，那么整个过程就是一个合作的过程，从而可以保证操作的“序列化”。只有当参与操作的进程是协同合作的时候，协同锁才能发挥作用。协同锁有时也被称为“非强制”锁。

强制锁 (mandatory lock)不需要参与操作的进程之间保持协同合作。它利用内核来查检每个打开、读取、写入操作，从而保证在调用这些操作时不违反文件上的锁规则。

flock锁是基于内核中打开文件句柄的，《linux/unix系统编程手册》一书第5.4节介绍了linux内核对于打开文件的处理机制。flock施加的锁是基于内核中打开的文件句柄，也就是说指向内核中同一个打开文件句柄的文件描述符（或文件句柄）是共享一个文件锁的，对其中任何一个文件句柄的加锁操作都会反映到其他的文件句柄。对于一个已经获得锁的内核打开文件句柄，再次加锁会先释放之前的锁，然后再次加新锁，可以理解是更新了一次锁。假设打开同一个文件两次，对应句柄fp1和fp2指向不同的内核打开文件句柄，fp1获得锁后没有释放，此时再对fp2加锁将会因获取不到锁而一直阻塞。但对同一个句柄进行第二次加锁是可以的，这就是更新锁的情况。父子进程的文件句柄指向同一个内核打开文件句柄，父子进程每次加锁都相当于在更新同一个锁，所以虽然子进程先拿到了锁并且没有释放锁，父进程却仍然可以拿到锁，这本质上还是一种更新锁的情况，flock并没有达到并发控制的目的。使用 pcntl_fork() 实现多线程时要先开启子线程，再打开文件句柄这样才能正确上锁。

	$pid_file = "lock.pid";
	// $pid = posix_getpid();
	$pid = getmypid();
	$fp = fopen($pid_file, 'w+');
	if(flock($fp, LOCK_EX | LOCK_NB)){
		echo "got the lock \n";
		ftruncate($fp, 0);
		fwrite($fp, $pid." ".implode(",",$argv));
		fflush($fp);         // flush output before releasing the lock
		sleep(6);            // long running process
		flock($fp, LOCK_UN); // 释放锁定
	} else {
		echo "Cannot get pid lock. The process is already up \n";
	}
	fclose($fp);

保存为 process.php，后台运行 php process.php &, 然后再次运行php process.php，就可以看到错误提示文件锁访问冲突。如果使用浏览器来测试需要注意，同一个浏览器的情况下，因为存在请求优化，对同一个地址的请求，即使打开多个标签页面，其背后也可能只有一个HTTP请求发送到服务器，也就是说多个标签页优化成了一个服务器端进程。因为可以使用两个不同的浏览器来测试，或者在同一个浏览器的同一个标签页进行刷新来测试，再或者使用没有这种优化的浏览器，调试工具Fiddler就可以做这样的测试。


	class My extends Thread {
	    public function run() {
	        $this->synchronized(function($thread){
	            if (!$thread->done)
	                $thread->wait();
	        }, $this);
	    }
	}
	$my = new My();
	$my->start();
	$my->synchronized(function($thread){
	    $thread->done = true;
	    $thread->notify();
	}, $my);
	var_dump($my->join());


# 🚩 定位函数定义所在模块
寻找函数定义在哪个模块 - 风雪之隅 - http://www.laruence.com/2008/08/22/404.html

	$function_name = "uniqid";
	 
	$modules = get_loaded_extensions();
	foreach($modules as $m){
	    $funcs = get_extension_funcs($m);
	    if(in_array($function_name, $funcs)){
	        printf("%s was defined in Module: %s\n", $function_name, $m);;
	        exit;
	    }
	}
	
	print $function_name ." Must be defined in user defined PHP script files\n";

# 🚩 strtotime -1 month 的怪问题

	$lastmonth[] = date("Y-m-d",strtotime("2018-09-31 -1 month")); // 2018-09-01
	$lastmonth[] = date("Y-m-d",strtotime("2018-07-31 -1 month")); // 2018-07-01
	$lastmonth[] = date("Y-m-d",strtotime("2018-04-30 -2 month")); // 2018-03-02
	$lastmonth[] = date("Y-m-d",strtotime("2018-03-31 -1 month")); // 2018-03-03
	var_dump($lastmonth);

解决方法是可以把时间戳先转换成年月，不保留日。


# 🚩 YAF框架试用
YAF框架入门教程 - https://www.jianshu.com/p/1460d2296f19
下载地址 - http://pecl.php.net/package/yaf
Yaf - Manual - http://php.net/manual/en/book.yaf.php
Yaf(Yet Another Framework)用户手册 - http://www.laruence.com/manual/index.html
yaf程序模板生成工具 https://github.com/laruence/yaf/tree/master/tools/cg
PHP-Yaf执行流程-源码分析 - https://www.jianshu.com/p/130389235abc
数据库外扩 Medoo Guidebook - https://medoo.in/api/new
yaf-example | Larave - https://laravel-china.org/articles/4308/yaf-example
Medoo 1.6.1 API 手册(HTML单文件版本示例代码包内包含) - https://www.aiirobo.com/yaf/install/medoo_1.6.1.html
YAF手册CHM文件下载(示例代码包内含) - https://www.aiirobo.com/yaf/install/yaf_manual.chm
setview 自定义视图 - 
http://www.laruence.com/manual/yaf.class.dispatcher.setView.html
http://www.php.net/manual/zh/yaf-dispatcher.setview.php


## ⚡ 介绍与安装

Yaf框架是一个c语言编写的PHP框架，是一个以PHP扩展形式提供的PHP开发框架，相比于一般的PHP框架， 它更快，更轻便，内存占用率更低，就是本着对性能的追求，Yaf把框架中不易变的部分抽象出来，类如路由、自动加载、bootstrap、分发等，采用PHP扩展去实现，以此来保证性能。

Yaf优点

	用c语言开发的PHP框架，相比原生的PHP，几乎不会带来额外的性能开销。
	所有的框架类，不需要编译，在PHP启动的时候加载，并常驻内存。
	更快的执行速度，更少的内存占用。
	灵巧的自动加载。 支持全局和局部两种加载规则, 方便类库共享。

yaf缺点

	维护成本高，要维护PHP扩展，需要熟练C开发和Zend Api。
	目标用户群小，现在国内很多中小型站都是使用虚拟主机，并不能随意的给PHP添加扩展。
	不像其他框架一样提供各种丰富功能的类库和各种优雅的写法，它只提供一个MVC的基本骨架。

linux 平台下安装上海步骤如，首先使用 wget 下载yaf源代码，再使用 phpize 去安装扩展。假如你的服务器上安装了多个版本php，那么需要告诉phpize要建立基于哪个版本的扩展。通过使用 `--with-php-config` 指定你使用哪个php版本，`whereis php-config` 命令可以提供定位信息，安装扩展后根据 `extension_dir` 配置一下 php.ini 以加载 yaf.so。php 7.0 建议使用 yaf 3.0，yaf 2.3.5 是最后一个支持 php 5.x 的版本。

	wget http://pecl.php.net/get/yaf-2.3.5.tgz
	tar -zxf yaf-2.3.5.tgz
	cd yaf-2.3.5
	apt install php7.0-dev
	phpize
	whereis php-config
	./configure --with-php-config=/usr/local/php56/bin/php-config
	make
	make install

使用 php 5.6 可以下载 yaf 2.3.3，windows平台有DLL库，下载后解压到php扩展目录下，并相应设置 php.ini 的 extension。 `extension_loaded("yaf")` 可以用来检测扩展是否安装成功。

	[yaf]
	yaf.use_namespace = 0
	yaf.environ = 'product'
	yaf.cache_config = 0
	yaf.name_suffix = 1
	yaf.lowcase_path = 1
	 
	extension = yaf.so


## ⚡ 基本程序结构

基本程序目录结构如下，yaf框架是精简的，本身不含数据访问模块，只能自行编写数据库访问模块或使用现成的如轻量级PHP数据库框架Medoo，WHERE 语法非常精练，轻量级的yaf搭轻量级的Medoo是绝配，如果还需要视图模板可以考虑使用 Smarty，当然我更喜欢直接使用vue前端框架来实现视图。

	+ public
	  |- index.php //入口文件
	  |- .htaccess //重写规则    
	  |+ css
	  |+ img
	  |+ js
	+ conf
	  |- application.ini // 默认配置文件   
	+ application
	  |+ controllers
	     |- Index.php //默认控制器
	  |+ views    
	     |+ index    //控制器
	        |- index.phtml //默认视图
	  |+ modules //其他模块
	  |+ library //本地类库
	  |+ models  //model目录
	  |+ plugins //插件目录


Yaf 配置选项

	选项名称	默认值	可修改范围	更新记录
	yaf.environ	product	PHP_INI_ALL	环境名称, 当用INI作为Yaf的配置文件时, 这个指明了Yaf将要在INI配置中读取的节的名字
	yaf.library	NULL	PHP_INI_ALL	全局类库的目录路径
	yaf.cache_config	0	PHP_INI_SYSTEM	是否缓存配置文件(只针对INI配置文件生效), 打开此选项可在复杂配置的情况下提高性能
	yaf.name_suffix	1	PHP_INI_ALL	在处理Controller, Action, Plugin, Model的时候, 类名中关键信息是否是后缀式, 比如UserModel, 而在前缀模式下则是ModelUser
	yaf.name_separator	""	PHP_INI_ALL	在处理Controller, Action, Plugin, Model的时候, 前缀和名字之间的分隔符, 默认为空, 也就是UserPlugin, 加入设置为"_", 则判断的依据就会变成:"User_Plugin", 这个主要是为了兼容ST已有的命名规范
	yaf.forward_limit	5	PHP_INI_ALL	forward最大嵌套深度
	yaf.use_namespace	0	PHP_INI_SYSTEM	开启的情况下, Yaf将会使用命名空间方式注册自己的类, 比如Yaf_Application将会变成Yaf\Application
	yaf.use_spl_autoload	0	PHP_INI_ALL	开启的情况下, Yaf在加载不成功的情况下, 会继续让PHP的自动加载函数加载, 从性能考虑, 除非特殊情况, 否则保持这个选项关闭

[警告]
在开启 `yaf.cache_config` 的情况下, Yaf会使用INI文件路径作为 `Key`, 这就有一个陷阱, 就是如果在一台服务器上同时运行俩个应用, 那么它们必须不能使用同一个路径名下的INI配置文件, 否则就会出现 Application Path 混乱的问题，所以，尽量不要使用相对路径。

如果在 `application.ini` 中定义了模块功能，则需要在程序目录下 `modules` 目录下建立模块目录，再建 `controllers` 目录，测试中没有发现有大小写要求，但尽量保持目录字母大写一到致。一个简单的 `index.php` 入口程序可以实例化一个Yaf程序类，执行 `run()` 方法，`bootstrap()` 是可选的，它指示 `Yaf_Application` 去寻找 `Bootstrap.php`, 而这个文件中, 必须定义一个Bootstrap类, 而这个类也必须继承自 `Yaf_Bootstrap_Abstract`。`Bootstrap`, 也叫做引导程序。它是Yaf提供的一个全局配置的入口, 在 `Bootstrap` 中, 你可以做很多全局自定义的工作。所有在 `Bootstrap` 类中定义的, 以 `_init` 开头的方法, 都会被依次调用, 而这些方法都可以接受一个 `Yaf_Dispatcher` 实例作为参数。方法在 `Bootstrap` 类中的定义出现顺序, 决定了它们的被调用顺序。

	define("APP_PATH",  dirname(__FILE__));
	$app  = new Yaf_Application(APP_PATH . "/yaf.ini");
	$app->bootstrap()->run();

Bootstrap 类样例：

	class Bootstrap extends Yaf_Bootstrap_Abstract 
	{ 

		public function _initRoute(Yaf_Dispatcher $dispatcher) {
			$router = Yaf_Dispatcher::getInstance()->getRouter();
			$router->addConfig(Yaf_Registry::get("config")->routes);
		}
		
	    public function _initSession(Yaf_Dispatcher $dispatcher) 
	    { 
	        $session = new Vendor\Session(); 
	        $session->start(); 
	    } 

	    public function _initDatabase(Yaf_Dispatcher $dispatcher) 
	    { 
	        $config = Yaf_Application::app()->getConfig()->application->database; 
	        Yaf_Registry::set('db', Vendor\Database($config)); 
	    } 
	}

配置文件可以这样写

	[common]
	application.directory=APP_PATH "/application/"

	[product : common]

可以添加其它配置组内容，通过 application.modules 添加了两个模块，多模块配置用逗号分隔，使用模块后目录结，如app这个模块的控制器及视图就要存放到 application/modules/controllers 目录下：

	[modules]
	application.ext=php
	application.modules="app,index"

	[redis]
	;用作缓存的redis服务器
	redis.cache.host = 192.168.254.128
	redis.cache.port = 6379
	redis.cache.dbIndex = 1

	;用作存储用户信息的redis服务器
	redis.user.host = 192.168.254.128
	redis.user.port = 6379
	redis.user.dbIndex = 12

	;别忘了在这里加上你要读取的配置组名
	[product : common : redis : modules]

配置好后需要一个控制器，保存到程序目录的 controllers 子目录下，控制器的默认动作方法是 indexAction。

	class IndexController extends Yaf_Controller_Abstract {
	    public function indexAction() {
	    	$this->getView()->assign("content", "Hello World");
	        //读取配置文件
	        $config = Yaf_Application::app()->getConfig();
	        //打印配置信息
	        echo '<pre>';
	        print_r($config);
	        echo '</pre>';
	    }
	}

另外还需要一个视图文件，getView()->assign() 是给视图传递数据，视图文件保存到程序目录的 views 目录下建立的和控制同名的子目录内，默认为 phtml 扩展名。

	<html>
		<head>
			<title>Hello World</title>
		</head>
		<body>
			<?php echo $content;?>
		</body>
	</html>

如果是Ajax请求, 可以关闭HTML视图输出，disableView() 会关闭视图模块，而 autoRender(false) 则只关闭视图输出:

     if ($this->getRequest()->isXmlHttpRequest()) {
         Yaf_Dispatcher::getInstance()->disableView();
         Yaf_Dispatcher::getInstance()->autoRender(false);
     }
 
一般在yaf项目调试的时候，如果代码有错误，页面只会响应500错误，但看不到哪里报了什么错误，通过开启yaf的一个配置可以将错误信息显示在页面上。

打开项目的index.php入口文件，在开头加入如下代码：

	ini_set('display_errors', 1);
	error_reporting(E_ALL);


## ⚡ 路由使用与CLI执行

Yaf摒弃了0.1版本中的自定义路由器方式, 而采用了更为灵活的路由器和路由协议分离的模式。路由协议事实上主要负责匹配我们预先定义好的路由协议, 意思就是我们只有一个路由器, 但我们可以有许多路由协议。 路由器主要负责管理和运行路由链,它根据路由协议栈倒序依次调用各个路由协议, 一直到某一个路由协议返回成功以后, 就匹配成功。路由注册的顺序很重要, 最后注册的路由协议, 最先尝试路由, 这就有个陷阱。 请注意。路由的过程发生派遣过程的最开始,并且路由解析仅仅发生一次。路由过程在何控制器动作(Controller, Action)被派遣之前被执行, 一旦路由成功, 路由器将会把解析出得到的信息传递给请求对象(Yaf_Request_Abstract object),  这些信息包括moduel、controller、action、用户params等。 然后派遣器(Yaf_Dispatcher)就会按照这些信息派遣正确的控制器动作。 路由器也有插件钩子, 就是routerStartup和routerShutdown, 他们在路由解析前后分别被调用。


默认的路由协议Yaf_Route_Static, 就是分析请求中的request_uri, 在去除掉base_uri以后, 获取到真正的负载路由信息的request_uri片段, 具体的策略是, 根据"/"对request_uri分段, 依次得到Module,Controller,Action, 在得到Module以后, 还需要根据Yaf_Application::$modules来判断Module是否是合法的Module, 如果不是, 则认为Module并没有体现在request_uri中, 而把原Module当做Controller, 原Controller当做Action。

Yaf_Route_Simple是基于请求中的query string来做路由的, 在初始化一个Yaf_Route_Simple路由协议的时候, 我们需要给出3个参数, m/c/a这3个参数分别代表在query string中Module, Controller, Action的变量名。路由设置可以在 Bootstrap 中进行，也可以在 Yaf_Application 实例化之后 run() 之前进行。

	$router = Yaf_Dispatcher::getInstance()->getRouter();
	$route = new Yaf_Route_Simple("m", "c", "a");
	$router->addRoute("name", $route);
	// $router->addConfig(Yaf_Registry::get("config")->routes);

Yaf_Route_Supervar和Yaf_Route_Simple相似, 都是在query string中获取路由信息, 不同的是, 它获取的是一个类似包含整个路由信息的request_uri。Yaf_Route_Map议是一种简单的路由协议, 它将REQUEST_URI中以'/'分割的节, 组合在一起, 形成一个分层的控制器或者动作的路由结果. 

Yaf_Route_Map的构造函数接受俩个参数, 第一个参数表示路由结果是作为动作的路由结果，还是控制器的路由结果。默认的是动作路由结果，第二个参数是一个字符串, 表示一个分隔符, 如果设置了这个分隔符, 那么在REQUEST_URI中, 分隔符之前的作为路由信息载体, 而之后的作为请求参数。

Yaf_Route_Rewrite是一个强大的路由协议, 它能满足我们绝大部分的路由需求。如果这些还不能满足，那就用复杂点的 Yaf_Route_Regex，这是一个正则匹配路由。

	http://domain.com/index.php/index/test      Yaf_Route_Static
	http://domain.com/index.php?c=index&a=test  Yaf_Route_Simple
	http://domain.com/index.php?r=/m/index/test Yaf_Route_Supervar

使用命令行(Cli模式)运行，为了更好的与web区分重新创建一个入口文件是比较好的做法。 Yaf_Request_Simple 特别的被用于测试，例如：CLI模式下模拟一些特殊的要求。

	$app = new YafApplication(APP_PATH . "/conf/application.ini");
	$app->getDispatcher()->dispatch(new Yaf_Request_Simple());

这样入口文件就完成了。接下来，你需要学会yaf命令行的调用方法。来一个示例：

	php index.php request_uri="/daemon/start"

Yaf_Request_Simple的构造函数可以不接受任何参数, 在这种情况下, Yaf_Request_Simple会在命令行参数中, 寻找一个字符串参数, 如果找到, 则会把请求的request_uri置为这个字符串。CLI参数中指定的路径便是 Controller 的路由路径。在例子里指向/Controller/Daemon.php 中的 startAction()方法。

要使得yaf在命令行模式下运行, 有俩种方式, 第一种方式专门为用Yaf开发Contab等任务脚本设计的方式, 这种方式下, 对Yaf的唯一要求就是能自动加载所需要的Model或者类库, 所以可以简单的通过Yaf_Application::execute来实现。它的第一参数需要定义一个回调函数，也可以是一个类中的某个函数。

	$application->execute("main", $argc, $argv);
	$application->execute(array("Class","Method"), $argc, $argv);

后面的参数为一个可变列表，值为你希望传入的参数。综上所述，我们的另外一种入口文件可以写成：

	$app = new YafApplication(APP_PATH . "/conf/application.ini");
	$app->execute('callback', $avg1, $avg2 , ...);

如果需要通过bootstrap去初始化。只需要和web一样改为：

	$app->bootstrap()->execute('callback', $avg1, $avg2 , ...);


## ⚡ 异常处理

Yaf实现了一套错误和异常捕获机制, 主要是对常见的错误处理和异常捕获方法做了一个简单抽象, 方便应用组织自己的错误统一处理逻辑。 Yaf自身出错时候, 根据配置可以分别采用抛异常或者触发错误的方式来通知错误。在配置文件 appliation.dispatcher.throwException 打开的情况下, Yaf会抛异常, 或者通过Yaf_Dispatcher::throwException(true) 亦可以，否则触发错误。

那么对应的, 就有俩套错误处理方式可供应用选用。 在配置文件开启 application.dispatcher.catchException 或者可通过Yaf_Dispatcher::catchException(true)时，当Yaf遇到未捕获异常的时候, 就会把运行权限, 交给当前模块的Error Controller的Error Action动作, 而异常或作为请求的一个参数, 传递给Error Action。

在Error Action中可以通过$request->getRequest()->getParam("exception")获取当前发生的异常。

从Yaf1.0.0.12开始, 也可以通过$request->getException()来获取当前发生的异常, 而如果Error Action定义了一个名为$exception的参数的话, 也可以直接通过这个参数获取当前发生的异常。

有了这样的最终异常处理逻辑, 应用就可以在出错的时候直接抛出异常, 在统一异常处理逻辑中, 根据各种不同的异常逻辑, 处理错误, 记录日志，Error Action实现参考如下:

	class ErrorController extends Yaf_Controller_Abstract {
		public function errorAction($exception) {
			assert($exception === $exception->getCode());
			$this->getView()->assign("code", $exception->getCode());
			$this->getView()->assign("message", $exception->getMessage());
		}
	}

	class ErrorController extends Yaf_Controller_Abstract {
		public function errorAction($exception) {
			switch($exception->getCode()) {
				case YAF_ERR_LOADFAILD:
				case YAF_ERR_LOADFAILD_MODULE:
				case YAF_ERR_LOADFAILD_CONTROLLER:
				case YAF_ERR_LOADFAILD_ACTION:
				//404
				header("Not Found");
				break;

				case CUSTOM_ERROR_CODE:
				//自定义的异常
				break;
			}
		}
	}
    
	class ErrorController extends Yaf_Controller_Abstract {
		public function errorAction() {
			$exception = $this->getRequest()->getException();
			try {
				throw $exception;
			} catch (Yaf_Exception_LoadFailed $e) {
				//加载失败
			} catch (Yaf_Exception $e) {
				//其他错误
			}
		}
	}


## ⚡ 定义插件

插件类是用户编写的, 但是它需要继承自Yaf_Plugin_Abstract，通过编写插件可以在yaf运行过程中实现自己的逻辑。对于插件来说，主要还是借助yaf提供的6个Hook来实现，只需要在插件类中定义和hook事件同名的方法，那么这个方法就会在该事件触发的时候被调用，这就是yaf插件的原理。 插件方法可以接受俩个参数, Yaf_Request_Abstract实例和Yaf_Response_Abstract实例。


	class UserPlugin extends Yaf_Plugin_Abstract {
		public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) { .... }
		public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) { .... }
	}

Yaf定义了6个Hook, 它们分别是:

	触发顺序   名称                  触发时机说明
	1         routerStartup         在路由之前触发, 这个是6个事件中, 最早的一个. 但是一些全局自定的工作, 还是应该放在Bootstrap中去完成。
	2         routerShutdown        路由结束之后触发, 此时路由一定正确完成, 否则这个事件不会触发。
	3         dispatchLoopStartup   分发循环开始之前被触发。
	4         preDispatch           分发之前触发, 如果在一个请求处理过程中, 发生了forward, 则这个事件会被触发多次。
	5         postDispatch          分发结束之后触发, 此时动作已经执行结束, 视图也已经渲染完成, 和preDispatch类似, 此事件也可能触发多次。
	6         dispatchLoopShutdown  分发循环结束之后触发, 此时表示所有的业务逻辑都已经运行完成, 但是响应还没有发送。

插件要生效, 还需要向Yaf_Dispatcher注册, 那么一般的插件的注册都会放在 Bootstra中 进行。

	class Bootstrap extends Yaf_Bootstrap_Abstract{
		public function _initPlugin(Yaf_Dispatcher $dispatcher) {
			$user = new UserPlugin();
			$dispatcher->registerPlugin($user);
		}
	}

一般的, 插件应该放置在APPLICATION_PATH下的plugins目录, 这样在自动加载的时候, 加载器通过类名, 发现这是个插件类, 就会在这个目录下查找。 当然, 插件也可以放在任何你想防止的地方, 只要你能把这个类加载进来就可以。


## ⚡ yaf自动加载器与Medoo模块

Medoo 是采用了ORM (Object Relational Mapping) 设计模式，基于PDO数据对象(PHP Data Object)封装，轻量单文件实现易于使用，适用于所有PHP框架，如Laravel，Codeigniter，Yii，Slim和支持单例扩展或编写器的框架，支持各种常见和复杂的SQL查询，数据映射以及防止SQL注入。访问mysql数据库参考如下，只需要按配置实例化即可以使用。实例化后，可以通过使用pdo成员直接访问PDO对象 `$db->pdo`。

注意 Medoo 使用了命令空间前缀，在 library 目录下要用小写字母命名空间目录，以免找不类定义。

	require_once "Medoo.php";
	use Medoo\Medoo;

	class DBCONFIG {
		const CONF = [
			// required
			'database_type' => 'mysql',
			'database_name' => 'dbname',
		 	'server' => '192.168.0.242',
			'username' => 'root',
			'password' => 'xxx',

			// [optional]
			'charset' => 'utf8mb4',
			'collation' => 'utf8mb4_general_ci',
			'port' => 3306,
		 
			// [optional] Table prefix
			// 'prefix' => '',
		 
			// [optional] Enable logging (Logging is disabled by default for better performance)
			// 'logging' => true,
		 
			// [optional] MySQL socket (shouldn't be used with server and port)
			// 'socket' => '/tmp/mysql.sock',
		 
			// [optional] driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
			'option' => [
				PDO::ATTR_CASE => PDO::CASE_NATURAL
			],
		 
			// [optional] Medoo will execute those commands after connected to the database for initialization
			'command' => [
				'SET SQL_MODE=ANSI_QUOTES'
			]
		];
	}
	$db = new Medoo(DBCONFIG::CONF);
	$db = new Medoo\Medoo(DBCONFIG::CONF);
	$rows = $db->select("users", "name");
	$rows = $db->select("users", ["name", "role", "timestamp"]);


如果使用 SQLite 配置更简单，还可以使用 In-memory database(IMDB) 即内存数据库，SQLite 数据库通常是存储在磁盘文件中的。然而在有些情况下，我们可以让数据库始终驻留在内存中。最常用的一种方式是在调用sqlite3_open()的时候，数据库文件名参数传递":memory:"。相比传统的基于磁盘的数据库管理系统，IMDB速度快得多。

	$database = new medoo([
	    'database_type' => 'sqlite',
	    'database_file' => 'my/database/path/database.db'
	]);

	$database = new Medoo([
		'database_type' => 'sqlite',
		'database_file' => ':memory:'
	]);

配置信息也可以写到程序配置文件上

	[sqlite]
	database.database_type='sqlite'
	database.database_file='e:\coding\Yeen\ci\yaf\database.db'

	[memdb]
	database.database_type='sqlite'
	database.database_file=':memory:'

	[mysql]
	database.database_type='mysql'
	database.database_name='mins'
	database.server='192.179.175.242'
	database.username='user'
	database.password='password'

	;[optional]
	database.charset='utf8mb4'
	database.collation='utf8mb4_general_ci'
	database.port=3306

	;[optional] Table prefix
	database.prefix='tbl_'

	;[optional] Enable logging (Logging is disabled by default for better performance)
	database.logging='true'

	;[optional] MySQL socket (shouldn't be used with server and port)
	;database.socket='/tmp/mysql.sock'

	;[optional] driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
	;database.option[] = PDO::ATTR_CASE "=" PDO::CASE_NATURAL

	;[optional] Medoo will execute those commands after connected to the database for initialization
	database.command[] = 'SET SQL_MODE=ANSI_QUOTES'

读取配置方法示例有两种，一是直接使用Yaf程序已经加载的配置，另一种是直接实例化一个 Yaf_Config_Ini 对象来读入配置文件。使用 Yaf_Config_Ini 可以指定读取的配置节点，如 [sqlite] 配置节点的内容。

	$config = Yaf_Application::app()->getConfig()->toArray();
	$db = new Medoo\Medoo($config['database']);
	$rows = $db->select("users", ["name", "role", "timestamp"]);

	// $conf = (new Yaf_Config_Ini('yaf.ini', "sqlite"))->toArray();
	$conf = (new Yaf_Config_Ini('yaf.ini'))->toArray();
	$database = $conf['product']['database'];
	$db = new Medoo\Medoo($database);

在Yaf中使用Medoo，只需要将下载到Medoo.php放到程序目录下的library目录下即可，Yaf 会在实例化 Medoo 时自动加载它。注意 Medoo 使用了命令空间，自PHP 5.3开始支付命令空间，在使用时要使用use引入Medoo类或者在实例化时将命令空间写上 new Medoo\Medoo($config)。注意 use 引入的命令空间不被include引入的文件识别，所以即使在入口 index.php 引入了 Medoo 命令空间，想要在模型或控制器中使用 Medoo 则还是需要重新引入命令空间的。

composer就是用来解决自动加载的工具，有了自动加载基本就抛弃了require和include函数。一个项目中，这两个函数只可能出现一次，那就是require '../vendor/autoload.php'。这个工具根据配置文件 composer.json 的依赖项 require 和加载项 autoload 来完成自动加载任务。autoload 中又包含主要的两个选项 files 和 psr-4。files 就是需要 composer 自动加载的函数库，不含类。只要在 files 这个数组中将函数库的文件路径填写好即可。PSR-4 是PHP Standards Recommendation的简称，是FIG-PHP工作组推出的自动加载技术规范，它能够满足面向package的自动加载，它规范了如何从文件路径自动加载类，同时规范了自动加载文件的位置。psr-4 顾名思义，是一个基PSR-4自动加载规则的类库信息，只要在其后的配置项以 {"命名空间": "类实现文件路径"} 的方式写入类库信息即可。

php中对应的spl_autoload_register函数用来实现自动加载，如下实现的一个autoload.php，在实例化时，PHP遇到没有定义的类就会执行 spl_autoload_register 注册的自动加载函数，函数接收到类命令空间信息后再引入指定目录下的类文件。

	function classLoader($class)
	{
	    $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
	    $file = __DIR__ . '/src/' . $path . '.php';

	    if (file_exists($file)) {
	        require_once $file;
	    }
	}
	spl_autoload_register('classLoader');


Yaf为了方便在一台服务器上部署的不同产品之间共享公司级别的共享库, 支持全局类和本地类两种加载方式。 全局类是指, 所有产品之间共享的类, 这些类库的路径是在 php.ini 配置项 ap.library 设置的。当然，如果PHP在编译的时候, 支持了 with-config-file-scan-dir 那么也可以写在单独的 ap.ini 中设置。而本地类是指, 产品自身的类库, 这些类库的路径是通过在产品的配置文件中, 通过ap.library配置的。 在Yaf中, 通过调用 Yaf_Loader的registerLocalNamespace方法来申明哪些类前缀是本地类即可。

Yaf运行时配置项参考，其中 yaf.library yaf.use_namespace yaf.use_spl_autoload 这三个配置是和类自动加载相关的。

	选项名称              默认值  可修改范围       更新记录
	yaf.environ          product PHP_INI_ALL     环境名称, 当用INI作为Yaf的配置文件时, 这个指明了Yaf将要在INI配置中读取的节的名字
	yaf.cache_config     0       PHP_INI_SYSTEM  是否缓存配置文件只针对INI配置文件生效, 打开此选项可在复杂配置的情况下提高性能
	yaf.name_suffix      1       PHP_INI_ALL     在处理Controller, Action, Plugin, Model的时候, 类名中关键信息是否是后缀式, 比如UserModel, 而在前缀模式下则是ModelUser
	yaf.name_separator   ""      PHP_INI_ALL     在处理Controller, Action, Plugin, Model的时候, 前缀和名字之间的分隔符, 默认为空, 也就是UserPlugin, 加入设置为下划线_, 则判断的依据就会变成:"User_Plugin", 这个主要是为了兼容ST已有的命名规范
	yaf.forward_limit    5       PHP_INI_ALL     forward最大嵌套深度
	yaf.library          NULL    PHP_INI_ALL     全局类库的目录路径
	yaf.use_namespace    0       PHP_INI_SYSTEM  开启的情况下, Yaf将会使用命名空间方式注册自己的类, 比如Yaf_Application将会变成Yaf\Application
	yaf.use_spl_autoload 0       PHP_INI_ALL     开启的情况下, Yaf在加载不成功的情况下, 会继续让PHP的自动加载函数加载, 从性能考虑, 除非特殊情况, 否则保持这个选项关闭

Yaf应用配置中关于自动加载的配置项有三个

	application.library               本地类库目录路径
	application.library.directory     本地类库目录路径
	application.library.namespace     以逗号分隔的本地库命名空间前缀

在配置项 yaf.use_spl_autoload 关闭的情况下, Yaf Autoloader在一次找不到的情况下, 会立即返回, 而剥夺其后的自动加载器的执行机会。

Yaf类的自动加载规则, 都是一样的: Yaf规定类名中必须包含路径信息, 也就是以下划线 _ 分割的目录信息。Yaf将依照类名中的目录信息, 完成自动加载，例如, 在没有申明本地类的情况下，Yaf将在类库目录中寻找类定义文件，类库路径在 php.ini 的配置项 ap.library 中指定，默认路径是程序目录下的 library 子目录。如 Foo_Dummy_Bar 这样的类对应了 library/Foo/Dummy/Bar.php。

如果通过 registerLocalNamespace 方式注册注册本地类，下面申明凡是以Foo和Local开头的类, 都是本地类，

     $loader = Yaf_Loader::getIgnstance();
     $loader->registerLocalNamespace(array("Foo", "Local"));

那么对于刚才的例子, 将会在程序配置文件中指定的类库路径，即 application.ini 中指定的 ap.library 目录下寻找Foo_Dummy_Bar。

分析源代码可以得到Yaf_Loader自动加载策略有以下几个要点

	1）yaf.library和application.library匀未配置时，Yaf_Loader::$_library及Yaf_Loader::$_global_library都将设置为[application.directory]/library；故不管是否配置application.library.namespace或者Yaf/Loader::registerLocalNamespace()是否注册本地命名空间前缀，加载类文件时，自动到[application.directory]/library目录查找类并加载。
	2）如果配置了application.library时，但未配置application.library。namespace时或者未通过Yaf/Loader::registerLocalNamespace()注册本地命名空间前缀，不管yaf.library是否配置都到yaf.library中加载相应类文件。
	3）如果配置了application.library和application.library.namespace，且类名中包含配置的命名空间前缀，则到application.library加载相应的类文件，否则到yaf.library中加载相应类文件。
	4）Yaf内部中加载文件时，类名中有”_”会转换为目录分隔符。

Yaf在自启动的时候, 会通过SPL注册一个自己的Autoloader, 出于性能的考虑, 对于框架相关的MVC类, Yaf Autoloader只以目录映射的方式尝试一次。但是要注意的一点是, 从2.1.18开始, Yaf支持在PHP脚本中触发对Controller的自动加载, 但是因为Controller的定位需要根据Module路由结果来判断, 这就造成了 在Bootstrap或者RouteStarrup之前, 无法确定. 所以, 对于Controller的加载, Yaf将只会尝试去加载默认Module的Controller, 也就是只在"{项目路径}/controllers" 目录下寻找。

具体的目录映射规则如下，后缀或者前缀可以通过php.ini中ap.name_suffix来切换:

	类型      后缀或者前缀   映射路径
	控制器    Controller    默认模块下为{项目路径}/controllers/, 否则为{项目路径}/modules/{模块名}/controllers/
	数据模型  Model         {项目路径}/models/
	插件      Plugin        {项目路径}/plugins/

而对于非框架MVC相关的类, Yaf支持全局类和自身类的两种加载方式, 并且Yaf支持大小写敏感和不敏感两种方式来处理文件路径。


## ⚡ Yaf_Registry 对象仓库的使用

对象注册表(或称对象仓库)是一个用于在整个应用空间(application space)内存储对象和值的容器。通过把对象存储在其中，我们可以在整个项目的任何地方使用同一个对象，这种机制相当于一种全局存储。我们可以通过 `Yaf_Registry` 类的静态方法来使用对象注册表，另外，由于该类是一个数组对象，你可以使用数组形式来访问其中的类方法。

利用对象仓库接入数据库API Medoo，到 Medoo 官方网站下载Db类并放入library/Medoo，解压下载包得到的 src 里面有一个 Medoo.php，它就是主文件，将其放入 library 目录中。

打开配置文件applica.ini，添加 database 的配置信息

	application.db.hostname = '127.0.0.1'
	application.db.username = 'root'
	application.db.password = '123456'
	application.db.database = 'test_db'
	application.db.prefix = 'test'
	application.db.log = true
	application.db.logfilepath = './'

打开 application\Bootstrap.php，加入载入Db的相关代码

	//载入数据库
	public function _initDatabase() {
		$arrConfig = Yaf_Registry::get(‘config’);
		$option = [
			‘database_type’ => ‘mysql’,
			‘database_name’ => $arrConfig->application->db->database,
			‘server’ => $arrConfig->application->db->hostname,
			‘username’ => $arrConfig->application->db->username,
			‘password’ => $arrConfig->application->db->password,
			‘prefix’ => $arrConfig->application->db->prefix,
			‘logging’ => $arrConfig->application->db->log,
			‘charset’ => ‘utf8’
		];
		Yaf_Registry::set(‘db’, new \Medoo\Medoo($option));
	}

使用db示例

	$db = Yaf_Registry::get('db');
	$db->insert('tablename',$data); //tablename是表名,$data是数据（结构[‘name’=>’name’]）


## ⚡ 应用SQLite数据与前端框架结合
SQLite 教程 - http://www.runoob.com/sqlite/sqlite-tutorial.html
SQLite Download Page - https://www.sqlite.org/download.html

SQLite 是一个软件库，实现了自给自足的、无服务器的、零配置的、事务性的 SQL 数据库引擎。SQLite 是在世界上最广泛部署的 SQL 数据库引擎，特别是在小型设置上。SQLite 源代码不受版权限制。在windows平台上php一般自带了 sqlite.dll 扩展，配置文件中打开就好，在Ubuntu系统上可以执行以下命令安装，视php版本选择。一般安装后会自动配置，可以查看 Additional.ini 是否有 pdo_sqlite.ini，有则表明已经自动加载了。

	sudo apt-get install php7.0-sqlite
	sudo apt-get install php5.6-sqlite

SQLite 数据库的数据类型简单：

	存储类	描述
	NULL	值是一个 NULL 值。
	INTEGER	值是一个带符号的整数，根据值的大小存储在 1、2、3、4、6 或 8 字节中。
	REAL	值是一个浮点值，存储为 8 字节的 IEEE 浮点数字。
	TEXT	值是一个文本字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储。
	BLOB	值是一个 blob 数据，完全根据它的输入存储。

SQLite 的存储类稍微比数据类型更普遍。INTEGER 存储类，例如，包含 6 种不同的不同长度的整数数据类型。如果对 SQLite 系统不熟悉，可以考虑使用一些数据库管理工具如 Navicat 之类。SQLite 官方也提供了命令工具，可以用来做查询调试。

为了方便开发，可以使用 php 内置的 Server，执行以下命令即可在本地运行一个服务器 通过localhost即可以访问，如果要在局域网其它主机上访问，可以在80端口前指定IP地，localhost 或IP最好选一个，避免服务器接收不到请求，在 Windows 平台还可以使用 start 命令打开页面。注意修改php配置，如果Medoo使用了PDO方式访问mysql数据库，请确保打开配置文件中的 extension=php_pdo_mysql.dll。在 Linux 服务器上要确保目录读写权限打开。

	php -S localhost:80 -t e:\coding\Yeen\ci\yaf
	start http://localhost && php -S localhost:80 -t e:\coding\Yeen\ci\yaf

将 Medoo 类文件拷贝到 library 目录后，就可以开始正式写程序，实现自己的控制器和视图了，那么这里就结合 vue + bootstrap 等写个例子程序，这个例子代码可以直接替换默认的 Index.php 控制器。

	// use Medoo\Medoo;

	class IndexController extends Yaf_Controller_Abstract {
		
		public function tryDisableView($forced=false) {
			if( $forced || $this->getRequest()->isXmlHttpRequest() ){
				Yaf_Dispatcher::getInstance()->disableView();
				Yaf_Dispatcher::getInstance()->autoRender(false);
			}
		}

		public function dbinitAction (){
			$this->tryDisableView(true);
			// $conf = (new Yaf_Config_Ini('yaf.ini', "sqlite"))->toArray();
			$conf = (new Yaf_Config_Ini('yaf.ini'))->toArray();
			$database = $conf['product']['database'];
			$db = new Medoo\Medoo($database);
			$return['drop table users'] = $db->query("DROP TABLE IF EXISTS `users`;");
			$return['create table users'] = $db->query("
				CREATE TABLE `users` (
				  `id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
				  `name` text NOT NULL,
				  `role` text NOT NULL,
				  `text` text NOT NULL,
				  `timestamp` integer NOT NULL DEFAULT 0
				);
			");
			$users = [
				'Jimbowhy'=>'administrator',
				'Shery'=>'administrator',
				'Fairy'=>'advanced',
				'Oskar'=>'member',
				'Lee'=>'operator',
				'Bluece'=>'agent',
				'Garly'=>'guest',
			];
			foreach ($users as $name => $role) {
				$records = [];
				$records[] = ['name'=>$name, 'role'=>$role, 'text'=>date("Y-m-d"), 'timestamp'=>time()];
				$records[] = ['name'=>$name."_copy", 'role'=>$role, 'text'=>date("Y-m-d"), 'timestamp'=>time()];
				$stat = $db->insert('users',$records);
				$return["$name id "] = $db->id();
				$return['insert user '.$name] = $stat;
			}
			$stat = $db->delete('users', ['name[~]'=>'%_copy']);
			$return['delete copy row '] =  $stat->rowCount();
			print_r( ['log'=>$db->log(), 'error'=>$db->error(), 'lastSql'=>$db->last(), 'return'=>$return] );
		}

		public function indexAction() {
			// $db = new Medoo\Medoo(DBCONFIG::CONF);
			$config = Yaf_Application::app()->getConfig()->toArray();
			$db = new Medoo\Medoo($config['database']);
			$rows = $db->select("users", ["name", "role", "timestamp"]);
			// print_r( ['log'=>$db->log(), 'error'=>$db->error()] );

			// print_r($config);
			$this->getView()->assign("content", "Hello World");
			$this->getView()->assign("rows", $rows);
		}

	}

视图展示了VUE的表单处理能力，代码稍有点长

	<html>
		<head>
			<meta charset="utf-8">
			<title>Hello World</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
			<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
		</head>
		<body>
			<div id="app" class="container">
				<div class="jumbotron">
				<h1><?php echo $content;?></h1>
				<div class="table-responsive"><table class="table">
					<tr class="row" v-for="item in rows">
						<td class="col-xs-1"><label class="btn btn-primary">{{item.name}}</label></td>
						<td class="col-xs-1"><label class="btn btn-danger"  v-if="item.role=='administrator'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-danger"  v-if="item.role=='advanced'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-danger"  v-if="item.role=='operator'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-success" v-if="item.role=='agent'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-warning" v-if="item.role=='member'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-info"    v-if="item.role=='guest'">{{item.role}}</label></td>
						<td class="col-xs-1"><label class="btn btn-info">{{item.timestamp}}</label></td>
					</tr>
				</table></div>
				</div>
				<div class="panel">

					<div class="well">
						<p>单选框：</p>
						<input type="radio" value="ABC" name="group" v-model="radio">
						<input type="radio" value="XYZ" name="group" v-model="radio">
						<label for="checkbox">{{ radio }}</label>
					</div>

					<div class="well">
						<p>单个复选框：</p>
						<input type="checkbox" value="true" id="checkbox1" v-model="listA">
						<label for="checkbox1">{{ listA }}</label>
						<input type="checkbox" value="false" id="checkbox2" v-model="listB">
						<label for="checkbox2">{{ listB }}</label>
					</div>

					<div class="well">
						<p>多个复选框：</p>
						<input type="checkbox" id="vue" value="Vue" v-model="checkedNames">
						<label for="vue">vue</label>
						<input type="checkbox" id="bootstrap" value="Bootstrap" v-model="checkedNames">
						<label for="bootstrap">Bootstrap</label>
						<p>选择的值为: {{ checkedNames }}</p>
					</div>

					<div class="well">
						<select v-model="selected" name="strawberry">
						<option value="">单选选择</option>
						<option value="vue">vue</option>
						<option value="bootstrap">bootstrap</option>
						</select>
						<p>选择的是: {{selected}}</p>
					</div>

					<div class="well">
						<select multiple v-model="multiple" name="strawberry">
						<option value="">多选列表</option>
						<option value="vue">vue</option>
						<option value="bootstrap">bootstrap</option>
						</select>
						<p>选择的是: {{multiple}}</p>
					</div>

				</div>
			</div>
			<script>
			new Vue({
				el: '#app',
				data: {
					rows:<?php echo json_encode($rows,JSON_UNESCAPED_UNICODE);?>,
					radio : "XYZ",
					listA : "true",
					listB : "true",
					selected : '',
					multiple : ['vue','bootstrap'],
					checkedNames: []
				}
			})
			</script>
		</body>
	</html>

![AF + VUE + Bootstrap demo.jpg](https://upload-images.jianshu.io/upload_images/5509701-5d1d67a00e95521b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## ⚡ PDO、PDOStatement方法参考

	PDO::beginTransaction 	— 启动一个事务
	PDO::commit 			— 提交一个事务
	PDO::__construct 		— 创建一个表示数据库连接的 PDO 实例
	PDO::errorCode 			— 获取跟数据库句柄上一次操作相关的 SQLSTATE
	PDO::errorInfo 			— 获取错误信息
	PDO::exec 				— 执行一条 SQL 语句,并返回受影响的行数
	PDO::getAttribute 		— 取回一个数据库连接的属性
	PDO::getAvailableDrivers — 返回一个可用驱动的数组(了解即可)
	PDO::inTransaction 		— 检查是否在一个事务内(了解即可)
	PDO::lastInsertId 		— 返回最后插入行的ID或序列值
	PDO::prepare 			— 创建SQL的预处理,返回PDOStatement对象
	PDO::query 				— 用于执行查询SQL语句,返回PDOStatement对象
	PDO::quote 				— 为sql字串添加单引号
	PDO::rollBack 			— 回滚一个事务
	PDO::setAttribute 		— 设置属性
	
	PDOStatement::bindColumn 	— Bind a column to a PHP variable [读取数据时使用]
	PDOStatement::bindParam 	— Binds a parameter to the specified variable name
	PDOStatement::bindValue 	— Binds a value to a parameter
	PDOStatement::closeCursor 	— Closes the cursor, enabling the statement to be executed again
	PDOStatement::columnCount 	— Returns the number of columns in the result set
	PDOStatement::debugDumpParams — Dump an SQL prepared command
	PDOStatement::errorCode 	— Fetch the SQLSTATE associated with the last operation on the statement handle
	PDOStatement::errorInfo 	— Fetch extended error information associated with the last operation on the statement handle
	PDOStatement::execute 		— Executes a prepared statement
	PDOStatement::fetch 		— Fetches the next row from a result set
	PDOStatement::fetchAll 		— Returns an array containing all of the result set rows
	PDOStatement::fetchColumn 	— Returns a single column from the next row of a result set
	PDOStatement::fetchObject 	— Fetches the next row and returns it as an object
	PDOStatement::getAttribute 	— Retrieve a statement attribute
	PDOStatement::getColumnMeta — Returns metadata for a column in a result set
	PDOStatement::nextRowset 	— Advances to the next rowset in a multi-rowset statement handle
	PDOStatement::rowCount 		— Returns the number of rows affected by the last SQL statement
	PDOStatement::setAttribute 	— Set a statement attribute
	PDOStatement::setFetchMode 	— Set the default fetch mode for this statement

	$stmt = $pdo->query('select * from user limit 2');
	$row = $stmt->fetch();
	$rows = $stmt->fetchAll();


## ⚡ 数据表转JSON

	$db = new PDO("mysql:host=192.168.0.1.242;dbname=mins", 'username', 'password');
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$stmt = $db->prepare("show tables;");
	$stmt->execute();
	$tables = $stmt->fetchAll(PDO::FETCH_ASSOC);
	foreach ($tables as $key => $item) {
		$table = array_values($item)[0];
		echo $key." get json from ".$table."\n";
		$sql = "SELECT * from $table";
		$smt = $db->prepare($sql);
		$smt->execute();
		$data = $smt->fetchAll(PDO::FETCH_ASSOC);
		$json = json_encode($data, JSON_UNESCAPED_UNICODE);
		file_put_contents("..\\minis\\vu\\json\\{$table}.json", $json);
	}


## ⚡ bindValue bindParam 使用 PDO 防 SQL 注入

用 `str_replace` 以及各种php字符替换函数来防注入已经这种黑名单式的防御已经被证明是经不起时间考验的。巧妙构造的脚本完全可以绕过 `addslasher` 和 `mysql_real_escape_string`。完美解决方案就是使用拥有 Prepared Statement 机制的 PDO 和 MYSQLi 来代替 `mysql_query`，这个方法自 PHP 5.5.0 起已废弃，在PHP 7.0 中移除了。使用参数化查询可能会让程序更不好维护，或者在实现部份功能上会非常不便，然而，使用参数化查询造成的额外开发成本，通常都远低于因为SQL注入攻击漏洞被发现而遭受攻击，所造成的重大损失。除了安全因素，相比起拼接字符串的 SQL 语句，参数化的查询往往有性能优势。在编写数据访问接口时更要仔细考虑功能需求，避免重复编写相同的功能代码。

	try {
		$db = new PDO("mysql:host=192.168.0.1.242;dbname=mins", 'username', 'password');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		// 打印数据表
		$stmt = $db->prepare("show tables;");
		$stmt->execute();
		$tables = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($tables as $key => $item) {
			echo $key." ".array_values($item)[0]."\n";
		}

		// 打印数据表字段结构
		$table = array_values($tables[17])[0];
		$stmt = $db->prepare("show columns from {$table};");
		$stmt->execute();
		$fields = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($fields as $key => $item) {
			print_r( $item );
		}

		$role = "administrator";
		$gaps = 90;
		$sql  = "select id,name,role,timestamp from users where id<:gap and role=:role";
		$stmt = $db->prepare($sql);

		// #1 - bind parameters by value
		// $stmt->bindValue(':gap', 10);
		// $stmt->bindValue(':gap', 10, PDO::PARAM_INT);
		$stmt->bindValue(':gap', $gaps, PDO::PARAM_INT);

		// #2 - bind parameters by variable
		$stmt->bindParam(':role', $role, PDO::PARAM_STR);

		$role = "advanced";
		$gaps = 120;

		// #3 - bind parameters by array
		// $stmt->execute([':gap' => $gaps, ':role' => $role));
		$stmt->execute();

		// #4 - bind column to variable
		// $stmt->bindColumn('name', $name);

		// $row = $stmt->fetch(PDO::FETCH_ASSOC);
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($rows as $key => $row) {
			echo sprintf("[#%d] - [%s] - [%s] - [%s]\n", $row['id'], $row['name'], $row['role'], $row['timestamp']);
		}

		// $detail = $stmt->debugDumpParams();
		// print_r($detail);

	} catch(Exception $e){
		echo $e->getMessage();
	}

bindValue 与 bindParam 的一个差别是前者在方法调用时立即绑定常数，这里的例子中 `bindValue` 会绑定 `:gap=90`，`bindParam` 则是 `execute` 之前绑定，因为它是在引用变量，例子中会绑定 `:role=advanced`，如果在多参数绑定时又使用了相同的变量名那就要注意逻辑是否有问题。

	public bool PDOStatement::bindValue ( mixed $parameter , mixed $value [, int $data_type = PDO::PARAM_STR ] )
	public bool PDOStatement::bindParam ( mixed $parameter , mixed &$variable [, int $data_type = PDO::PARAM_STR [, int $length [, mixed $driver_options ]]] )

参数绑定结合数据库存储过程时，对于存储过程的 `INOUT` 参数需要在 `data_type` 传入 `PDO::PARAM_INPUT_OUTPUT` 来显式指定参数是双向的参数，而 `length` 则是在回写参数 `OUT` 指定回写数据长度。

绑定可以指定参数类型，也可以省略，由系统进行推测，通过是使用默认字符类型来对待。 还有一个绑定方法是 `bindColumn`，在记录读取时，与 `fetch()` 方法搭配使用，指定常数 `PDO::FETCH_BOUND`，每读取一条记录相应的字段就会绑定到指定的变量中。可以指定绑定的字段名，也可以指定列序号，但这个绑定方法比较少用，如果搭配 `fetchAll()` 方法只能获取到最后一行的对应字段。

除了调用绑定的方法来传入参数，还可以直接使用 `execute()` 传入数组的方式，SQL 语句中绑定的参数和数组元素个数一样，所有的值作为 PDO::PARAM_STR 对待。

PDO 支持命名参数和问号参数，除了前面 `:gap` 这种命名参数，占位符还可以使用问号参数。每一个问号按出现的顺序来编号，以序号 1 开始编号，绑定时只需要用指定编号替代原来的命名参数即可。

	$sql  = "select id,name,role,timestamp from users where id<? and role=?";
	$stmt = $db->prepare($sql);
    $stmt ->bindparam(1,$id);
    $stmt ->bindparam(2,$name);	

使用问题占位符的一个好处就是在多参数绑定时使用更灵活，比如在 `in` 从语中绑定多个条件，以下示例用来选择多个指定 ID 记录：

	$ids = array(1, 3, 7, 8);
	$place_holders = implode(',', array_fill(0, count($ids), '?'));
	$stmt = $db->prepare("SELECT * FROM t2b_packages WHERE id IN ($place_holders)");
	$stmt->execute($ids);
	$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
	print_r($rows);

注意，参考中没有指定数据类型时，使用默认是字符串，并且会使用双引号包括起来，这时就要考虑参数绑定后产生的 SQL 能否被正确执行了。比如以下两列中，原本是数值的参数，省略类型后产生的 SQL 语句就会有差别，后者语法有错而不能执行：

	select * from t2b_packages where id>"10";
	select * from t2b_packages limit "10";

PDO对象没有提供像 `getLastSql()` 这样的方法来获取最后执行的脚本，但可以通过 `debugDumpParams()` 来获取类似以下这样的SQL语句，然后根据参数内容替换原有的点位符也可以得到需要的脚本内容。

	SQL: [69] select id,name,role,timestamp from users where id<:gap and role=:role

如果启用了MySQL的binlog二进制日志，它也会记录了所有的DDL和DML(除了数据查询语句)语句，以事件形式记录，还包含语句所执行的消耗的时间，MySQL的二进制日志是事务安全型的。

`fetch()`、 `fetchAll()` 方法常用的返回数据格式常数

	PDO::FETCH_BOTH); FETCH_BOTH是默认的，可省，返回关联和索引。
	PDO::FETCH_ASSOC); FETCH_ASSOC参数决定返回的只有关联数组。
	PDO::FETCH_NUM); 返回索引数组
	PDO::FETCH_OBJ); 如果fetch()则返回对象，如果是fetchall(),返回由对象组成的二维数组

绑定时使用到的预定义数据类型

	PDO::PARAM_BOOL Represents a boolean data type.  
	PDO::PARAM_NULL Represents the SQL NULL data type.  
	PDO::PARAM_INT Represents the SQL INTEGER data type.  
	PDO::PARAM_STR Represents the SQL CHAR, VARCHAR, or other string data type. 

PDO 错误与错误处理有三种模式，通过 PDO 属性设定 `PDO::setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)`

`PDO::ERRMODE_SILENT`
此为默认模式。 PDO 将只简单地设置错误码，可使用 `PDO::errorCode()` 和 `PDO::errorInfo()` 方法来检查语句和数据库对象。如果错误是由于对语句对象的调用而产生的，那么可以调用那个对象的 `PDOStatement::errorCode()` 或 `PDOStatement::errorInfo()` 方法。如果错误是由于调用数据库对象而产生的，那么可以在数据库对象上调用上述两个方法。

`PDO::ERRMODE_WARNING`
除设置错误码之外，PDO 还将发出一条传统的 E_WARNING 信息。如果只是想看看发生了什么问题且不中断应用程序的流程，那么此设置在调试/测试期间非常有用。

`PDO::ERRMODE_EXCEPTION`
除设置错误码之外，PDO 还将抛出一个 PDOException 异常类并设置它的属性来反射错误码和错误信息。此设置在调试期间也非常有用，因为它会有效地放大脚本中产生错误的点，从而可以非常快速地指出代码中有问题的潜在区域。记住：如果异常导致脚本终止，则事务被自动回滚。

## ⚡ PDO execute sql file 执行脚本文件

    $sql = file_get_contents("../xcx/naixue/api-template/yinliao01-20190527.sql");

    $config = array(
        'DB_TYPE'  => 'mysql',
        'DB_USER'  => 'lihai1',
        'DB_PWD'   => 'Lihai1001',
        'DB_HOST'  => 'rds2lhyg4cn3hk2kmvnks.mysql.rds.aliyuncs.com',
        'DB_PORT'  => '3306',
        'DB_NAME'  => 'liwulaile',
        'DB_CHARSET' => 'utf8mb4',
    );

    $DB_HOST = $config['DB_HOST'];
    $DB_NAME = $config['DB_NAME'];
    $DB_PORT = $config['DB_PORT'];
    $DB_PWD = $config['DB_PWD'];
    $DB_USER = $config['DB_USER'];

	try {

		$db = new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME}", $DB_USER, $DB_PWD);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$db->exec($sql);
		// $stmt = $db->prepare($sql);
		// $stmt->execute();

		$stmt = $db->prepare("show tables");
		$stmt->execute();
		$tables = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($tables as $key => $item) {
			echo $key." ".array_values($item)[0]."\n";
		}
	} catch(Exception $e){
		print_r($e->errorInfo);
		echo $e->getMessage();
	}


# 🚩 Error trobleshoot try-catch
https://www.cnblogs.com/zyf-zhaoyafei/p/6928149.html

PHP中什么是错误：
　　属于php脚本自身的问题，大部分情况是由错误的语法，服务器环境导致，使得编译器无法通过检查，甚至无法运行的情况。warning、notice都是错误，只是他们的级别不同而已，并且错误是不能被try-catch捕获的。

	try {
		throw $exception;
	} catch (Yaf_Exception_LoadFailed $e) {
		//加载失败
	} catch (Yaf_Exception $e) {
		//其他错误
	}


　　上面的说法是有前提条件的：
　　在PHP中，因为在其他语言中就不能这样下结论了，也就是说异常和错误的说法在不同的语言有不同的说法。在PHP中任何自身的错误或者是非正常的代码都会当做错误对待，并不会以异常的形式抛出，但是也有一些情况会当做异常和错误同时抛出(据说是，我没有找到合适的例子)。也就是说，你想在数据库连接失败的时候自动捕获异常是行不通的，因为这就不是异常，是错误。但是在java中就不一样了，他会把很多和预期不一致的行为当做异常来进行捕获。

　　PHP异常处理很鸡肋？
　　在上面的分析中我们可以看出，PHP并不能主动的抛出异常，但是你可以手动抛出异常，这就很无语了，如果你知道哪里会出问题，你添加if else解决不就行了吗，为啥还要手动抛出异常，既然能手动抛出就证明这个不是异常，而是意料之中。以我的理解，这就是PHP异常处理鸡肋的地方（不一定对啊）。所以PHP的异常机制不是那么的完美，但是使用过框架的同学都知道有这个情况：你在框架中直接写开头那段php“自动”捕获异常的代码是可以的，这是为什么？看过源码的同学都知道框架中都会涉及三个函数： register_shutdown_function set_error_handler set_exception_handler 后面我会重点讲解着三个黑科技，通过这几个函数我们可以实现PHP假自动捕获异常和错误。

•restore_exception_handler() - Restores the previously defined exception handler function
•restore_error_handler() - Restores the previous error handler function
•error_reporting() - Sets which PHP errors are reported

	ERROR LEVEL CONST
	2		E_WARNING		非致命的 run-time 错误。不暂停脚本执行。
	8		E_NOTICE 		Run-time 通知。 脚本发现可能有错误发生，但也可能在脚本正常运行时发生。
	256		E_USER_ERROR	致命的用户生成的错误。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_ERROR。
	512		E_USER_WARNING	非致命的用户生成的警告。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_WARNING。
	1024	E_USER_NOTICE	用户生成的通知。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_NOTICE。
	4096	E_RECOVERABLE_ERROR	可捕获的致命错误。类似 E_ERROR，但可被用户定义的处理程序捕获。(参见 set_error_handler())
	8191	E_ALL			所有错误和警告，除级别 E_STRICT 以外。 （在 PHP 6.0，E_STRICT 是 E_ALL 的一部分）

## ⚡ ERROR的级别

	Fatal Error:致命错误（脚本终止运行）
	    E_ERROR         // 致命的运行错误，错误无法恢复，暂停执行脚本
	    E_CORE_ERROR    // PHP启动时初始化过程中的致命错误
	    E_COMPILE_ERROR // 编译时致命性错，就像由Zend脚本引擎生成了一个E_ERROR
	    E_USER_ERROR    // 自定义错误消息。像用PHP函数trigger_error（错误类型设置为：E_USER_ERROR）
	Parse Error：编译时解析错误，语法错误（脚本终止运行）
	    E_PARSE  //编译时的语法解析错误
	Warning Error：警告错误（仅给出提示信息，脚本不终止运行）
	    E_WARNING         // 运行时警告 (非致命错误)。
	    E_CORE_WARNING    // PHP初始化启动过程中发生的警告 (非致命错误) 。
	    E_COMPILE_WARNING // 编译警告
	    E_USER_WARNING    // 用户产生的警告信息
	Notice Error：通知错误（仅给出通知信息，脚本不终止运行）
	    E_NOTICE      // 运行时通知。表示脚本遇到可能会表现为错误的情况.
	    E_USER_NOTICE // 用户产生的通知信息。


## ⚡ use custom error_function

	error_function( level, message, file, line, context)
	参数	描述
	level   必需。为用户定义的错误规定错误报告级别，如 E_USER_ERRO。
	message	必需。为用户定义的错误规定错误消息。
	file	可选。规定错误在其中发生的文件名。
	line	可选。规定错误发生的行号。
	context	可选。规定一个数组，包含了当错误发生时在用的每个变量以及它们的值。


## ⚡ use set_error_handler()

	//error handler function
	function customError($errno, $errstr)
	{ 
		echo "<b>Error:</b> [$errno] $errstr";
	}

	//set error handler
	set_error_handler("customError");

	//trigger an undefined variable error
	echo($test);

	// trigger error directlly, error level for the second argument
	trigger_error("Value must be 1 or below");

## ⚡ use set_exception_handler()

	function exception_handler($exception) {
		echo "Uncaught exception: " , $exception->getMessage(), "\n";
	}

	set_exception_handler('exception_handler');

	throw new Exception('Uncaught Exception');
	echo "Not Executed\n";

## ⚡ use register_shutdown_function() & error_get_last()

注册一个shutdown_function，就可以捕获PHP的错误：Fatal Error、Parse Error等，这个方法是PHP脚本执行结束前最后一个调用的函数，比如脚本错误、die()、exit、异常、正常结束都会调用，多么牛逼的一个函数啊！

通过shutdown_function就可以在脚本结束前判断这次执行是否有错误产生，这时就要借助于 error_get_last ，它可以拿到本次执行产生的所有错误：

	register_shutdown_function('shutdown_function');
	function shutdown_function()
	{
		if ($error = error_get_last()) {
			$report = implode(",",[
				'Type:' . $error['type'],
				'Msg: ' . $error['message'],
				'In '   . $error['file'],
				'Line ' . $error['line']
			]);
			 var_dump('shutdown_function: ' .$report);
		}
	}
	var_dump(23+-+); //此处语法错误

上面例子不会执行 shutdown_function，直接给出语法错误，

	Parse error: syntax error, unexpected ')'

parse-time出错时是不会调用本函数的。只有在run-time出错的时候，才会调用本函数，我的理解是语法检查器前没有执行register_shutdown_function()去把需要注册的函数放到调用的堆栈中，所以就根本不会运行。那框架中为什么任何错误都能进入到register_shutdown_function()中呢，其实在框架中一般会有统一的入口index.php，然后每个类库文件都会通过 include 的方式加载，你写的具有语法错误的文件也会被引入到入口文件中。调用框架，index.php本身并没有语法错误，也就不会产生parse-time错误，而是 include 文件出错了，是run-time的时候出错了，所以框架执行完之后就会触发register_shutdown_function()。


# 🚩 multi-array sort 多维数组排序

	$a = [
		['name'=>'apply', 'rank'=>2, 'title'=>'apply'],
		['name'=>'pie', 'rank'=>1, 'title'=>'pie'],
		['name'=>'wood', 'rank'=>3, 'title'=>'wood'],
	];

	function sortby( $a, $key, $type='asc' ){ 
	    $keys = $sorted = array();
	    foreach ($a as $k=>$v) $keys[$k] = $v[$key];
	    $type == 'asc' && asort($keys) || arsort($keys);
	    reset($keys);
	    foreach ($keys as $k=>$v) $sorted[] = $a[$k];
	    return $sorted; 
	}
	$a = sortby($a,'rank');
	print_r($a);

# 🚩 	递归 XML生成 带缩进格式 微信公众号 被动回复用户消息 图文信息

	function ToXml($values, $indent=0, $root=true)
	{
		if( !is_array($values) || count($values) <= 0) throw new Exception("数组数据异常！");
		
		$indent = str_pad("",$indent);
		$root && ($xml = "<xml>") || ($xml = "");
		foreach ($values as $key=>$val)
		{
			if (is_numeric($val)){
				$xml = "$xml$indent<$key>".$val."</$key>\n";
			}elseif(is_string($val)){
				$xml = "$xml$indent<$key><![CDATA[".$val."]]></$key>\n";
			}else{
				$xml = "$xml<$key>\n".ToXml($val, $indent+4, false)."</$key>\n";
			}
		}
		$root && ($xml.="</xml>");
		return $xml;
	}

	$data=array(
		"ToUserName"=>'$openid',
		"FromUserName"=>'$me',
		"CreateTime"=>time(),
		"MsgType"=>"news",
		"ArticleCount"=>1,
		"Articles"=>[
			"item"=>["title"=>"图文消息DMEO", "Description"=>"DMEO CARD", "PicUrl"=>"https://path/to/image", "Url"=>"https://path/to/webpage"]
		]
	);
	$data = ToXml($data);
	
	<xml><ToUserName><![CDATA[oegoCwOHm6FwMC584pyUN59i6tss]]></ToUserName>
	<FromUserName><![CDATA[gh_f31d0bb913ac]]></FromUserName>
	<CreateTime>1535443158</CreateTime>
	<MsgType><![CDATA[news]]></MsgType>
	<ArticleCount>1</ArticleCount>
	<Articles>
	<item>
	    <title><![CDATA[图文消息DMEO]]></title>
	    <Description><![CDATA[DMEO CARD]]></Description>
	    <PicUrl><![CDATA[https://path/to/image]]></PicUrl>
	    <Url><![CDATA[https://path/to/webpage]]></Url>
	</item>
	</Articles>
	</xml>

# 🚩 对象转相数组

 	function object_to_array($obj) {
	    $obj = (array)$obj;
	    foreach ($obj as $k => $v) {
	        if (gettype($v) == 'resource') {
	            return;
	        }
	        if (gettype($v) == 'object' || gettype($v) == 'array') {
	            $obj[$k] = (array)object_to_array($v);
	        }
	    }
	 
	    return $obj;
	}

	$xml = new SimpleXMLElement("<xml><names><item>Jeango</item></names></xml>");
	var_dump(object_to_array($xml));

# 🚩 array_splice 数组元素替换 插入元素

	指定长度为0，即可以实现元素插入，array_splice返回值是被替换的部分，此列反回空数组。

	$name = "some.txt";
	$p = explode(".", $name);
	array_splice($p,1,0, ["_".time()]);
	var_dump($p);

# 🚩 随机数据唯一ID

	print_r([mt_rand(), uniqid()]);
	Array
	(
	    [0] => 1079643110
	    [1] => 5c019b52b9855
	)

# 🚩 PHP遍历对象 foreach 自定义类实现
http://php.net/manual/zh/language.oop5.iterations.php
https://www.cnblogs.com/catcrazy/p/6369629.html

参考微博粉丝消息API的实现
http://open.weibo.com/wiki/2/messages/reply

php4中引入了foreach结构，这是一种遍历数组的简单方式。相比传统的for循环，foreach能够更加便捷的获取键值对。在php5之前，foreach仅能用于数组；php5之后，利用foreach还能遍历 IteratorAggregate Iterator 接口对象。

	$arr = array(1,2,3);
	foreach($arr as $k => &$v) {
	    $v = $v * 2;
	}
	// unset($v); // KEY CODE
	// now $arr is array(2, 4, 6)
	foreach($arr as $k => $v) {
		// print_r($arr);
	    echo "$k", " => ", "$v", "; ";
	}
	//final output: 0 => 2; 1 => 4; 2 => 4;

先从简单的开始，注意使用了引用，如果我们尝试运行上述代码，发现最后输并不是期待的 2 4 6，真是诡异。
其实，我们可以认为 foreach($arr as $k => $v) 结构隐含了如下操作，分别将数组当前的'键'和当前的'值'赋给变量$k和$v。具体展开形如：
复制代码 代码如下:

	foreach($arr as $k => $v){ 
	    //隐含赋值操作
	    $v = currentVal(); 
	    $k = currentKey();
	    //继续运行用户代码
	    ……
	}

根据上述理论，现在我们重新来分析下第一个foreach：

	第1遍循环，由于$v是一个引用，因此$v = &$arr[0]，$v=$v*2相当于$arr[0]*2，因此$arr变成2,2,3
	第2遍循环，$v = &$arr[1]，$arr变成2,4,3
	第3遍循环，$v = &$arr[2]，$arr变成2,4,6

随后代码进入了第二个foreach：

	第1遍循环，隐含操作$v=$arr[0]被触发，由于此时$v仍然是$arr[2]的引用，即相当于$arr[2]=$arr[0]，$arr变成2,4,2
	第2遍循环，$v=$arr[1]，即$arr[2]=$arr[1]，$arr变成2,4,4
	第3遍循环，$v=$arr[2]，即$arr[2]=$arr[2]，$arr变成2,4,4

如何解决类似问题呢？php手册上有一段提醒：
Warning : 数组最后一个元素的 $value 引用在 foreach 循环之后仍会保留。建议使用unset()来将其销毁。

# 🚩 生成指定周时间区间数据 月份列表

		function generateWeeksList($startpoint="2017-03-13", $finalpoint=false){
			$finalpoint = !$finalpoint? strtotime("last Monday"):time();
			$startpoint = strtotime($startpoint);
			$weekseconds = 7*24*60*60;
			$res = [];
			$list = [];
			while($startpoint<$finalpoint){
				$year = date("Y", $startpoint);
				if( !isset($list['years']) || $list['years']!=$year ) {
					$th = 1;
					if( $list ) $res[] = $list;
					$list = ["years"=>"$year","dates"=>""];
				}
				$list['dates'][] = ([
					'period'=>"第{$th}期",
					'start_time'=>date("Y-m-d H:i:s", $startpoint),
					'end_time'=>date("Y-m-d H:i:s", $startpoint+$weekseconds-1)
				]);
				$th += 1;
				$startpoint += $weekseconds;
			}
			if( $list ) $res[] = $list;
			return $res;
		}

		function generateMonthList($startpoint="2017-04-01", $finalpoint=false){
			$finalpoint = !$finalpoint? strtotime(date("Y-m-01")):time();
			$startpoint = strtotime($startpoint);
			$offset = 31*24*60*60;
			$res = [];
			$list = [];
			while($startpoint<$finalpoint){
				$year = date("Y", $startpoint);
				if( !isset($list['years']) || $list['years']!=$year ) {
					$th = 1;
					if( $list ) $res[] = $list;
					$list = ["years"=>"$year","dates"=>""];
				}
				$cur = date("Y-m-d H:i:s", $startpoint);
				$list['dates'][] = ([
					'period'=>"第{$th}期",
					'start_time'=>$cur,
					'end_time'=>date("Y-m-d H:i:s", strtotime($cur." +1 month -1 second"))
				]);
				$th += 1;
				$startpoint = strtotime(date("Y-m-01", $startpoint+$offset));
			}
			if( $list ) $res[] = $list;
			return $res;
		}

		$a = generateWeeksList();
		print_r($a);

# 🚩 PHP 长连接与WebSocket服务
https://www.cnblogs.com/jiangzuo/p/5896301.html

	/**
	 * socket 长连接 foreach 枚举接口 Iterator
	 * 参考 http://open.weibo.com/wiki/2/messages/reply
	 */
	class MessageClient implements Iterator {

	    protected $_host = '';
	    protected $_request = "";
	    protected $_socket;
	    protected $_port = 80;
	    protected $_ftimeout = 30;
	    protected $_timeout = 300;
	    protected $_key = 0;
	    protected $_value = '';
	    protected $_httpauth = '';

	    public function __construct($args, $url, $user, $passwd) {
	        $parse = parse_url($url);
	        $this->_host = $parse['host'];
	        $this->_port = isset($parse['port']) ? $parse['port'] : 80;
	        $path = $parse['path'];
	        $query = http_build_query($args);
	        $this->_httpauth = base64_encode($user . ":" . $passwd);
	        $this->_request = $path . '?' . $query;
	    }

	    public function __destruct() {
	        $this->close();
	    }

	    public function current() {
	        return $this->_value;
	    }

	    public function key() {
	        return $this->_key;
	    }

	    public function next() {
	        ++$this->_key;
	    }

	    public function rewind() {
	        $this->close();
	        $this->_key = $err_no = 0;
	        $this->_value = $err_str = '';
	        $this->_socket = @fsockopen($this->_host, $this->_port, $err_no, $err_str, $this->_ftimeout);
	        if ($this->_socket) {
	            stream_set_timeout($this->_socket, $this->_timeout);
	            stream_set_blocking($this->_socket, 1);
	            $header = "GET " . $this->_request . " HTTP/1.1\r\n";
	            $header .= "Host: " . $this->_host . "\r\n";
	            $header .= "Authorization:Basic {$this->_httpauth}\r\n";
	            $header .= "Connection: Close\r\n\r\n";

	            fwrite($this->_socket, $header);
	            do {
	                $data = fgets($this->_socket);
	            } while (trim($data));
	        }
	    }

	    public function valid() {
	        $eof = true;
	        if (is_resource($this->_socket)) {
	            do {
	                $eof = feof($this->_socket);
	            //     $this->_value = json_decode(trim(fgets($this->_socket)), true);
	            // } while (!$eof && !is_array($this->_value));
	                $res = fgets($this->_socket);
	                print_r("$res");
	                $this->_value = trim($res);
	            } while (!$eof);
	            $eof && $this->close();
	        }
	        return !$eof;
	    }

	    private function close() {
	        if (is_resource($this->_socket)) {
	            fclose($this->_socket);
	            $this->_socket = null;
	        }
	        return true;
	    }

	    public static function httpPost($args, $url, $user, $passwd, $timeout = 30) {
	        $postdata = http_build_query($args);
	        $ch = curl_init();
	        curl_setopt($ch, CURLOPT_URL, $url);
	        curl_setopt($ch, CURLOPT_HEADER, 0);
	        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	        curl_setopt($ch, CURLOPT_USERPWD, $user . ':' . $passwd);
	        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
	        curl_setopt($ch, CURLOPT_POST, 1);
	        curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
	        $data = curl_exec($ch);
	        curl_close($ch);
	        return $data;
	    }

	    public function start(){
			foreach ($this as $v) {
			    print_r($v);
			    //开始处理业务
			}
	    }

	}

	$url = "http://www.jinian.com/wxappApi3";
	$client = new MessageClient(['a'=>'debug', 'debug'=>'true'],$url,'myname','mypassword');
	$client->start();


# 🚩 匿名对象创建的几种方法

	$obj1 = new \stdClass; // Instantiate stdClass object
	// $obj2 = new class { }; // Instantiate anonymous class in PHP7
	$obj3 = (object)[]; // Cast empty array to object
	$obj3 = (object)array(); // Cast empty array to object
	$obj4 = (object) 'ciao';
	echo $obj4->scalar;  // outputs 'ciao'

# 🚩 动态访问属性

	class BOX {
		protected $a = "box";
		public function ask($val){
			$v = isset($this->$val)? $this->$val:"NOTHING";
			echo $v;
		}
	}
	
	$b = new Box();
	$b->ask("a"); // box
	$b->ask("b"); // NOTHING


# 🚩 弹出文件下载框

    //以只读和二进制模式打开文件   
    $file = fopen ( $file_dir . $file_name, "rb" ); 

    //告诉浏览器这是一个文件流格式的文件    
    Header ( "Content-type: application/octet-stream" ); 
    //请求范围的度量单位  
    Header ( "Accept-Ranges: bytes" );  
    //Content-Length是指定包含于请求或响应中数据的字节长度    
    Header ( "Content-Length: " . filesize ( $file_dir . $file_name ) );  
    //用来告诉浏览器，文件是可以当做附件被下载，下载后的文件名称为$file_name该变量的值。
    Header ( "Content-Disposition: attachment; filename=" . $file_name );    

    //读取文件内容并直接输出到浏览器    
    echo fread ( $file, filesize ( $file_dir . $file_name ) );    
    fclose ( $file );    
    exit ();

如果Server支持Range，首先就要告诉客户端，咱支持Range，之后客户端才可能发起带Range的请求。

	response.setHeader('Accept-Ranges', 'bytes');

Server通过请求头中的Range: bytes=0-xxx来判断是否是做Range请求，如果这个值存在而且有效，则只发回请求的那部分文件内容，响应的状态码变成206，表示Partial Content，并设置Content-Range。如果无效，则返回416状态码，表明Request Range Not Satisfiable（http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.17 ）。如果不包含Range的请求头，则继续通过常规的方式响应。


# 🚩 opcache

OPcache 函数

	opcache_compile_file
	opcache_get_configuration
	opcache_get_status
	opcache_invalidate
	opcache_is_script_cached
	opcache_reset


validate_timestamps 这个参数很重要，假如等于 0，那么 PHP 解析器只要发现内存中有对应 PHP 文件的 byte-code 内容就会加载。validate_timestamps 等于 1，PHP 解析器从内存中获取某个 PHP 文件对应的 byte-code，会通过一定的方法比较 byte-code 内容是不是最新的，假如比较后发现 byte-code 已经过期，应该重新编译生成。检查的频率取决于 revalidate_freq 参数（ 0 表示每次都检查）。

; 设置不缓存的黑名单
; 不缓存指定目录下cache 开头的PHP文件
;opcache.blacklist_filename=/www/example.com/cache

在开发过程中可以使用以下一种方法临时缓存：

	$opr = function_exists('opcache_reset') && opcache_reset();
	ini_set("opcache.enable", 0);


## ⚡ opcache_get_configuration

获取设置的缓存配置信息，以数组形式返回配置信息、黑名单及版本号。

	array opcache_get_configuration(void);

	{
	    "directives": {
	        "opcache.enable": true,
	        "opcache.enable_cli": true,
	        "opcache.use_cwd": true,
	        "opcache.validate_timestamps": true,
	        "opcache.validate_permission": false,
	        "opcache.validate_root": false,
	        "opcache.inherited_hack": true,
	        "opcache.dups_fix": false,
	        "opcache.revalidate_path": false,
	        "opcache.log_verbosity_level": 1,
	        "opcache.memory_consumption": 201326592,
	        "opcache.interned_strings_buffer": 8,
	        "opcache.max_accelerated_files": 4000,
	        "opcache.max_wasted_percentage": 0.05,
	        "opcache.consistency_checks": 0,
	        "opcache.force_restart_timeout": 180,
	        "opcache.revalidate_freq": 60,
	        "opcache.preferred_memory_model": "",
	        "opcache.blacklist_filename": "",
	        "opcache.max_file_size": 0,
	        "opcache.error_log": "",
	        "opcache.protect_memory": false,
	        "opcache.save_comments": false,
	        "opcache.load_comments": true,
	        "opcache.fast_shutdown": true,
	        "opcache.enable_file_override": false,
	        "opcache.optimization_level": 2147467263
	    },
	    "version": {
	        "version": "7.0.6-dev",
	        "opcache_product_name": "Zend OPcache"
	    },
	    "blacklist": []
	}


## ⚡ opcache_get_status

获取缓存状态信息，`scripts` 部分就是已缓存脚本，包括击中即访问缓存的次数。

	array opcache_get_status(void);

	{
	    "opcache_enabled": false,
	    "cache_full": false,
	    "restart_pending": false,
	    "restart_in_progress": false,
	    "memory_usage": {
	        "used_memory": 10935064,
	        "free_memory": 190391528,
	        "wasted_memory": 0,
	        "current_wasted_percentage": 0
	    },
	    "interned_strings_usage": {
	        "buffer_size": 8388608,
	        "used_memory": 536904,
	        "free_memory": 7851704,
	        "number_of_strings": 4155990
	    },
	    "opcache_statistics": {
	        "num_cached_scripts": 0,
	        "num_cached_keys": 0,
	        "max_cached_keys": 7963,
	        "hits": 0,
	        "start_time": 1547450388,
	        "last_restart_time": 1555828381,
	        "oom_restarts": 2,
	        "hash_restarts": 0,
	        "manual_restarts": 917,
	        "misses": 0,
	        "blacklist_misses": 0,
	        "blacklist_miss_ratio": 0,
	        "opcache_hit_rate": 0
	    },
	    "scripts": {
	        "/application/core/Users_Controller.php": {
	            "full_path": "/application/core/Users_Controller.php",
	            "hits": 3,
	            "memory_consumption": 47064,
	            "last_used": "Tue May 21 16:10:19 2019",
	            "last_used_timestamp": 1558426219,
	            "timestamp": 1557787014
	        },
	        "/ThinkPHP/Lib/Core/ThinkException.class.php": {
	            "full_path": "/ThinkPHP/Lib/Core/ThinkException.class.php",
	            "hits": 153,
	            "memory_consumption": 1792,
	            "last_used": "Tue May 21 16:10:16 2019",
	            "last_used_timestamp": 1558426216,
	            "timestamp": 1478250480
	        }, ......
	    }    
	}

## ⚡ opcache_invalidate

	opcache_invalidate ( string $script [, boolean $force = FALSE ] ) : boolean

该函数的作用是使得指定脚本的字节码缓存失效。 如果 force 没有设置或者传入的是 FALSE，那么只有当脚本的修改时间 比对应字节码的时间更新，脚本的缓存才会失效。


## ⚡ opcache_reset;

形式:boolean opcache_reset(void);

该函数将重置整个字节码缓存。在调用 opcache_reset() 之后，所有的脚本将会重新载入并且在下次被点击的时候重新解析。

 

## ⚡ opcache_compile_file；

形式:boolean opcache_compile_file (string);

编译并缓存脚本，无需运行。

 

## ⚡ opcache_is_script_cached

形式:boolean opcache_is_script_cached (string);

判断某个脚本是否已经缓存到Opcache。


## ⚡ extension_loaded 

	if(!extension_loaded("ZendOpcache")) {
	    echo "You do nothave the Zend OPcache extension loaded , please open it up,then retry!";
	}


# 🚩 PHP CLI 执行与参数获取

通过命令行执行 php 脚本，在 Linux 系统上，可以在命令行后缀 & 号将脚本运行于后台任务中。

还可以使用 nohup 命令来避免 php 执行脚本时因退出终端而被系统中断：

	nohup php -f script-all.php Default>attack0726all.json&

	if( $argc>1 && $argv[1]=="Default" ){
		//$argv = ['path\to\php',cli_argumense...]
		$arg = $argv[1];
		echo "GOT COMMAND LINE ARGUMENT:$arg \r\n";
	}

使用 -r 指令执行在命令行中的脚本，注意如果命令行把$符号当变量标记处理，那么代码就应该改为单引号包裹，以免被命令解析器误读

	php -r '$a=file_get_contents("https://beijing1.jishen.net/wxappApi6/");echo $a;'
	php -r '$a=file_get_contents("https://oxyxl.xiubao.com:9090/");echo $a;'

## ⚡ Built-in Web 

As of PHP 5.4.0, the CLI SAPI provides a built-in web server. 

The web server runs a only one single-threaded process, soPHP applications will stall if a request is blocked. 

php_sapi_name() 函数可能返回值：aolserver, apache, apache2filter, apache2handler, caudium, cgi (until PHP 5.3), cgi-fcgi, cli, cli-server, continuity, embed, fpm-fcgi, isapi, litespeed, milter, nsapi, phttpd, pi3web, roxen, thttpd, tux, and webjames. 


```sh
# Example #1 Starting the web server

$ cd ~/public_html
$ php -S localhost:8000

# Example #2 Starting with a specific document root directory
$ cd ~/public_html
$ php -S localhost:8000 -t foo/

# Example #3 Using a Router Script
<?php
// router.php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
    # return true;   // solved by this script
} else { 
    echo "<p>Welcome to PHP</p>";
}
?>  

$ php -S localhost:8000 router.php

# Example #4 Checking for CLI Web Server Use
<?php
// router.php
if (php_sapi_name() == 'cli-server') {
    /* route static assets and return false */
}
/* go on with normal index.php operations */
?>  

$ php -S localhost:8000 router.php


# Example #5 Handling Unsupported File MIME Types
<?php
// router.php
$path = pathinfo($_SERVER["SCRIPT_FILENAME"]);
if ($path["extension"] == "el") {
    header("Content-Type: text/x-script.elisp");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
else {
    return FALSE;
}
?>  

$ php -S localhost:8000 router.php


# Example #6 Accessing the CLI Web Server From Remote Machines
$ php -S 0.0.0.0:8000
```

## ⚡ STDIN STDOUT STDERR
- https://www.php.net/manual/en/wrappers.php.php
- https://www.php.net/manual/en/features.commandline.io-streams.php

• php:// — Accessing various I/O streams

通过 php://stdin, php://stdout and php://stderr 可以访问标准语言 I/O 流，包括控制台信息打印。对应 CLI SAPI 常量定义 STDIN STDOUT STDERR。

```php
$pinf = pathinfo("path/to/file.ext");
$stdout = fopen("php://stdout", 'w');
fwrite( $stdout, <<<EOT
php_sapi_name: {$sapi}
Request URI: {$URI}
Script File Name: {$file}
pathinfo: 
dirname   => {$pinf["dirname"]}
basename  => {$pinf["basename"]}
extension => {$pinf["extension"]}
filename  => {$pinf["filename"]}
EOT);

$handle = fopen('php://stdin', 'r');
$count = 0;
while(!feof($handle)) {
    $buffer = fgets($handle);
    echo $count++, ": ", $buffer;
}
fclose($handle);
```

注意，使用 fwrite 输出单行内容需要使用 PHP_EOL 作为行结束符号，否则内容不会输出。

## ⚡ Setting Response Headers
- https://www.php.net/manual/zh/features.commandline.webserver.php

HTTP 协议中，头标信息 header 和 body 是在一起发送的，并且 header 在 body 之前，使用两个换行符号 `\r\n\r\n` 作为分割标志。因为每个 header 都占一行，额外添加的一个换行符表示头部结束。

```php
// router.php
$sapi = php_sapi_name();
$URI = $_SERVER["REQUEST_URI"];
$file = $_SERVER['SCRIPT_FILENAME'];
$pinf = pathinfo($URI);

$stdout = fopen("php://stdout", 'w');
// fwrite ($stdout, <<<EOT
// php_sapi_name: {$sapi}
// Request URI: {$URI}
// Script File Name: {$file}
// pathinfo: 
// dirname   => {$pinf["dirname"]}
// basename  => {$pinf["basename"]}
// extension => {$pinf["extension"]}
// filename  => {$pinf["filename"]}
// EOT);

if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $URI)) {
    return false;    // serve the requested resource as-is.
    // return true; // solved by this script
} elseif (preg_match('/.html?$/', $file)) {
    // $size = filesize($URI);
    // $obsize = $size + ob_get_length();
    // header("Content-Type: text/html; charset=UTF-8");
    // header("Content-Length: $obsize");
    // header("File-Length: $size");
    // flush(); // send headers
    return false;
} elseif (preg_match('/.ts?$/', $URI)) {
    $index = $pinf["filename"];
    $dir = preg_replace("/(^\/)/", '.$1', $pinf["dirname"]);
    try_download($dir, "$dir/index.m3u8", $index ++ );
    // try_download($dir, "$dir/index.m3u8", $index ++ );
    return false;
} else {
    return false;
}

function gen_index($dir, $m3u8, $index_file)
{
    global $stdout;
    if(!file_exists("$index_file")){
        fwrite ($stdout, "TODO: generate $index_file".PHP_EOL); // 👈
        $lists = file_get_contents("$m3u8");
        if($utf16 = @iconv("UTF-16", "UTF-8", $lists)) $lists = $utf16;
        $lists = preg_split("/\r?\n/", $lists);
        foreach ($lists as $key => $value) {
            if(str_ends_with($value, ".ts")){
                // fwrite ($stdout, "Item: $value".PHP_EOL); // 👈
                file_put_contents("$index_file", $value.PHP_EOL, FILE_APPEND);
            }
        }
    }
}

function try_download($dir, $m3u8, $index)
{
    global $stdout;
    $index = substr(10000 + $index, 1, 4);
    $basename = "$index.ts";
    $index = $index - 1000;
    $index_file = "$dir/index.txt";
    if(!file_exists("$dir/$basename"))
    {
        gen_index($dir, $m3u8, $index_file);
        fwrite ($stdout, "TODO: download remote file $index.ts".PHP_EOL); // 👈
        if(!file_exists("$index_file")){
            fwrite ($stdout, "TODO: $index_file is needed.".PHP_EOL); // 👈
        }else{
            $lists = preg_split("/\r?\n/", file_get_contents("$index_file"));
            $count = count($lists);
            if($count<$index) return;
            $ts = $lists[$index];
            $URL = file_get_contents("$m3u8");
            if($utf16 = @iconv("UTF-16", "UTF-8", $URL)) $URL = $utf16;
            $URL = substr($URL, 1, 1024 );
            $URL = str_replace("index.m3u8", "", preg_split("/\r?\n/", trim($URL))[0]);
            fwrite($stdout, "Lists Length: {$count} ==> to find $index ==> $URL$ts".PHP_EOL);
            $out = file_get_contents("$URL$ts");
            if($out){
                file_put_contents("$dir/$basename", $out);
                fwrite($stdout, "Done: $URL$ts".PHP_EOL);
            }else{
                fwrite($stdout, "Fail: $URL$ts".PHP_EOL);
            } 
        }
    }
}
```

发送 Content-Type 和 Content-Length 是个好习惯，这样可以节省浏览器接收数据所需要的探测时间，在没有明确的数据长度情况下，浏览器会操持 TCP/IP 连接并等到没有接收到更多的数据时，才会确认已经完全接收数据。

如果头部已经发送，表示头部缓冲区数据已经发出，进入 body 数据发送阶段时，就不能再使用 *header()* 或 *setcookie()* 这些修改头标的函数添加其它头标，否则：

	Warning: Cannot add header information - headers already sent

反过思考问题，就是如何控制头标的发送时机。通过执行 *flush()* 可以主动发送系统缓冲区的数据，以达到头标信息主动发送的目的。

You can instead use an output buffer; see *ob_start()*, *ob_end_flush()*, and related functions for more information on
using output buffers.

尽管可以通过 Output Buffer 来操纵输出缓冲区的数据，但是，无法用它来操纵在 PHP Built-in web server 中输出的静态文件内容。也就是说它是相对独立的一个文件请求处理，毕竟它只是一个用来做本地开发时使用的服务器，不可用于线上产品环境。即使用已经发送完头部信息，内置服务器还是会按原来逻辑发送静态文件的 Headers、Body 数据。

See also:

• *ob_start()* - Turn on output buffering
• *ob_get_flush()* - Flush the output buffer, return it as a string and turn off output buffering
• *ob_flush()* - Flush (send) the output buffer
• *ob_get_contents()* - Return the contents of the output buffer
• *ob_end_clean()* - Clean (erase) the output buffer and turn off output buffering
• *ob_end_flush()* - Flush (send) the output buffer and turn off output buffering
• *ob_implicit_flush()* - Turn implicit flush on/off
• *ob_gzhandler()* - ob_start callback function to gzip output buffer
• *ob_iconv_handler()* - Convert character encoding as output buffer handler
• *mb_output_handler()* - Callback function converts character encoding in output buffer
• *ob_tidyhandler()* - ob_start callback function to repair the buffer

• *flush()* - Flush system output buffer
• *header()* - Send a raw HTTP header for a more detailed discussion of thematters involved. 
• *headers_list()* - Returns a list of response headers sent (or ready to send)
• *headers_sent()* - Checks if or where headers have been sent
• *setcookie()* - Send a cookie
• *trigger_error()* - Generates a user-level error/warning/notice message
• *apache_response_headers()* - Fetch all HTTP response headers
• *http_response_code()* - Get or Set the HTTP response code


# 🚩 include()与require()

getcwd() 获取的是程序执行入口的所在的目录，即一个圆点表示的当前目录，__DIR__ 则是当前代码所在文件的目录。通过 include 引入的php文件可以直接使用引入点之前定义的变量。include_once 最大的好处就是自动防止二次引入，避免类定义重复错误。

php中include()和require()的区别

1.引用文件方式

对 include()来说，在include()执行时文件每次都要进行读取和评估；而对于require()来说，文件只处理一次（实际上，文件内容替换 了require()语句。这就意味着如果有包含这些指令之一的代码和可能执行多次的代码，则使用require()效率比较高。另一方面，如果每次执行代码时读取不同的文件，或者有通过一组文件叠代的循环，就使用include(),因为可以给想要包括的文件名设置一个变量。

2.是否有条件引用

在PHP变成中，include()与require()的功能相同，但在用法上却有一些不同，include()是有条件包含函数，而require()则是无条件包含函数。例如在下面的一个例子中，如果变量$somgthing为真，则将包含文件somefile：

	if($something){
		include("somefile");
	}

但不管$something取何值，下面的代码将把文件somefile包含进文件里：

	if($something){
		require("somefile");
	}
下面的这个有趣的例子充分说明了这两个函数之间的不同。

	$i = 1;
	while ($i < 3) {
		require("somefile.$i");
		$i++;
	}
在这段代码中，每一次循环的时候，程序都将把同一个文件包含进去。很显然这不是程序员的初衷，从代码中我们可以看出这段代码希望在每次循环时，将不同的文件包含进来。如果要完成这个功能，必须求助函数include()：

	$i = 1;
	while ($i < 3) {
		include("somefile.$i");
		$i++;
	}

3.报错

    用例子来说话，写两个php文件，名字为test1.php  和test2.php，注意相同的目录中，不要存在一个名字是test999.php的文件。

 
test.php <?PHP include (”test999.php”); echo “abc”; ?> test2.php <?PHP require(”test999.php”) echo “abc”; ?>
 
浏览第一个文件，因为没有找到test999.php文件，我们看到了报错信息，同时，报错信息的下边显示了abc，你看到的可能是类似下边的情况：

	Warning: include(test1aaa.php) [function.include]: failed to open stream: No such file or directory in D:\WebSite\test.php on line 2

	Warning: include() [function.include]: Failed opening ‘test1aaa.php’ for inclusion (include_path=’.;C:\php5\pear’) in D:\WebSite\test.php on line 2
	abc

浏览第二个文件，因为没有找到test999.php文件，我们看到了报错信息，但是，报错信息的下边没有显示abc，你看到的可能是类似下边的情况：
Warning: require(test1aaa.php) [function.require]: failed to open stream: No such file or directory in D:\WebSite\test.php on line 2

Fatal error: require() [function.require]: Failed opening required ‘test1aaa.php’ (include_path=’.;C:\php5\pear’) in D:\WebSite\test.php on line 2

现在就能很清楚的知道include和require的区别：include引入文件的时候，如果碰到错误，会给出提示，并继续运行下边的代码，require引入文件的时候，如果碰到错误，会给出提示，并停止运行下边的代码。

main.php 文件代码：

	// include 'coding_inc.php'; // pass some $argc/$argv

	class BasePage {
		public function __construct(){
			// echo __METHOD__;
		}
		public function index(){
			$json = '{"openid":"oAu6A1Mr6VuTDt8LhRNs35BEgyf0","nickname":" Jeango",}';
			include 'coding_inc.php';
			// include 'coding_inc.php'; // Fatal error: Cannot redeclare class
		}
		function demo(){
			include_once 'ranking/coding_inc.php';
			TemplatePage::index(["title" => "TEST"]);
		}
		function inc(){
			// php.ini allow_url_include=1 allow_url_include = On
			include 'http://www.jinian.com/wxappApi3/demo?foo=1&bar=2';
			include 'http://www.jinian.com/wxappApi3/demo?foo=1&bar=2';
		}
		function once(){
			// php.ini allow_url_include=1 allow_url_include = On
			include_once 'http://www.jinian.com/wxappApi3/demo?foo=1&bar=2';
			include_once 'http://www.jinian.com/wxappApi3/demo?foo=1&bar=2';
		}
	}

	$page = new BasePage();
	// $page->index();
	$page->demo();


coding_inc.php 文件代码：

	<?php
	if( @$argc>0 ) print_r(['arguments'=>$argv]);
	if( @$json ) echo "Read json:".$json;

	class TemplatePage {

		public function __construct(){
			echo __METHOD__;
		}

		public static function index($arguments){
			extract($arguments);
			?>
			<h1>Hello Included!</h1>
			<h2>Hello <?php echo $title?>!</h2>
			<h2>__DIR__ = <?php echo __DIR__?></h2>
			<h2>CWD = <?php echo getcwd()?></h2>
			<?php
		}

	}

# 🚩 file_put_contents
https://www.php.net/file_get_contents/
https://www.php.net/file_put_contents/

file_put_contents — 将一个字符串写入文件

说明
file_put_contents ( string $filename , mixed $data [, int $flags = 0 [, resource $context ]] ) : int
和依次调用 fopen()，fwrite() 以及 fclose() 功能一样。

If filename does not exist, the file is created. Otherwise, the existing file is overwritten, unless the FILE_APPEND flag is set.

参数
filename
要被写入数据的文件名。

data
要写入的数据。类型可以是 string，array 或者是 stream 资源（如上面所说的那样）。

如果 data 指定为 stream 资源，这里 stream 中所保存的缓存数据将被写入到指定文件中，这种用法就相似于使用 stream_copy_to_stream() 函数。

参数 data 可以是数组（但不能为多维数组），这就相当于 file_put_contents($filename, join('', $array))。

flags
flags 的值可以是 以下 flag 使用 OR (|) 运算符进行的组合。

Available flags
Flag	描述
FILE_USE_INCLUDE_PATH	在 include 目录里搜索 filename。 更多信息可参见 include_path。
FILE_APPEND	如果文件 filename 已经存在，追加数据而不是覆盖。
LOCK_EX	在写入时获得一个独占锁。
context
一个 context 资源。

返回值
该函数将返回写入到文件内数据的字节数，失败时返回FALSE

⚠ Warning
此函数可能返回布尔值 FALSE，但也可能返回等同于 FALSE 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

范例
Example #1 Simple usage example

	<?php
	$file = 'people.txt';
	// Open the file to get existing content
	$current = file_get_contents($file);
	// Append a new person to the file
	$current .= "John Smith\n";
	// Write the contents back to the file
	file_put_contents($file, $current);
	?>
	Example #2 Using flags

	<?php
	$file = 'people.txt';
	// The new person to add to the file
	$person = "John Smith\n";
	// Write the contents to the file, 
	// using the FILE_APPEND flag to append the content to the end of the file
	// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
	file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
	?>

# 🚩 file_get_contents 302 Moved Temporarily 301 Moved Permanently 

curl 可以通过 `CURLOPT_FOLLOWLOCATION` 来获取服务器跳转页面，`file_get_contents` 也会追踪跳转，如果不能获取到内容，那就是服务器有屏蔽。

如果在请求头中使用了 "Accept-Encoding:gzip, deflate" 还会得到 Gzip 压缩内容，对于 Curl 可以使用 `CURLOPT_ENCODING` 完成解压。

	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_ENCODING, "gzip");

对于 file_get_contents 则需要使用 zlib 扩展，或者使用 gzip 算法解压：

	$data = file_get_contents("compress.zlib://".$url);

抓取抖音页面需要传送浏览器的 UserAgent。

	$headers = [
		"User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.4094.1 Safari/537.36",
	];
	$ret = http($target, [], "GET", $headers);

	function http($url, $paras, $method='POST', $headers = []){
		$body = http_build_query($paras);
		$opts = ['http' => [
			'method'  => $method,
			'timeout'  => 9, // seconds
			'header' => $headers,
			// 'header' => 'Content-type: application/json; charset=UTF-8',
			// 'header' => 'Content-type: application/x-www-form-urlencoded',
			// 'header' => 'Content-type: multipart/form-data',
			// 'content' => json_encode($paras)
			// 'content' => $body
		]];
		$context = stream_context_create($opts);  
		if( $method=="GET" ){
			if( $paras ) $url = $url."?".$body;
			unset($opts['http']['content']);
			// unset($opts['http']['header']);
		}
		$result = file_get_contents($url, false, $context);
		foreach ($http_response_header as $key => $item) {
			if( $key===0 ) $item = "Status: {$item}";
			$ps = explode(": ", $item);
			if( !isset($ps[1]) ){
				$ps[1] = $ps[0];
				$ps[0] = "Status";
			}
			$resheader[$ps[0]] = $ps[1];
		}

		$res = [
			"url"		=> $url,
			"length"	=> strlen($result),
			"options"	=> $opts,
			"paras"		=> $paras,
			"headers"	=> $resheader,
			"raw"		=> $result,
			"json"		=> json_decode($result, true),
		];
		return $res;
	}

	function post($url, $postbody, $headers=false){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HEADER, true);
		curl_setopt($ch, CURLOPT_ENCODING, "gzip");
		// curl_setopt($ch, CURLOPT_NOBODY, true);

		if(!empty($postbody)){
			curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/x-www-form-urlencoded']);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $postbody);
			curl_setopt($ch, CURLOPT_POST, true);
		}
		if( $headers ) curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

		$result = curl_exec($ch);
		$error = curl_error($ch); 

		$size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
		$headers = explode("\r\n", substr($result, 0, $size-4));
		$httpstatus = $headers[0];
		$http_response_header = array_slice($headers, 2);
		foreach ($http_response_header as $key => $item) {
			if( $key===0 ) $item = "Status: {$item}";
			$ps = explode(": ", $item);
			if( !isset($ps[1]) ){
				$ps[1] = $ps[0];
				$ps[0] = "Status";
			}
			$resheader[$ps[0]] = $ps[1];
		}


		$body = substr($result, $size);

		curl_close($ch);
		$res = [
			"url"		=> $url,
			// "version"	=> curl_version(),
			"status"	=> $httpstatus,
			"paras"		=> $postbody,
			"error"		=> $error,
			"length"	=> strlen($result),
			"h-size"	=> $size,
			"headers"	=> $resheader,
			"raw"		=> $body,
			// "json"		=> json_decode($body, true),
		];
		return $res;
	}


# 🚩 file_get_contents https

	Warning: file_get_contents(): SSL operation failed with code 1. 
	error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed
	$img = file_get_contents("https://s0.2mdn.net/simgad/18427993337468662353");
	

	PHP.ini默认配置下，用file_get_contents读取https的链接，就会如下错误：
	Warning: fopen() [function.fopen]: Unable to find the wrapper "https" - did you forget to enable it when you configured PHP?

	解决方案有：
	1.windows下的PHP，只需要到php.ini中把extension=php_openssl.dll前面的;删掉，重启服务就可以了。
	2.linux下的PHP，就必须安装openssl模块，安装好了以后就可以访问了。

# 🚩 phar
http://www.webhek.com/post/packaging-your-php-apps-with-phar.html

类似 jar　的打包运行方式。


# 🚩 获取关联数组的方法  反射 对象属性/对象/类属性 类定义/接口定义 变量/常量 traits
	
	get_object_vars() - Gets the properties of the given object
	get_class_methods() - Gets the class methods' names
	get_class_vars() - Get the default properties of the class

	get_declared_traits ( void ) - Returns an array of all declared traits
	class_uses() - Return the traits used by the given class
	trait_exists() - Checks if the trait exists

	get_defined_vars() - Returns an array of all defined variables
	get_defined_constants() - Returns an associative array with the names of all the constants and their values

	get_declared_interfaces() - Returns an array of all declared interfaces
	get_declared_classes() - Returns an array with the name of the defined classes
	get_defined_functions() - Returns an array of all defined functions

# 🚩 反射类 ReflectionClass

	class Box {
		private $key0 = "private";
		public $key1 = "public";
		public static $key2 = "static";
		const key3 = "const";
		private function fun_private(){}
		public function fun_public(){}
		protected function fun_protected(){}
	}
	$oClass = new ReflectionClass("Box");
	print_r( $oClass->getConstants() );
	print_r( $oClass->getMethods() );

	$box = new Box();
	print_r( get_class_vars('Box') );

# 🚩 list() 将数组中的值赋给变量
	Like array(), this is not really a function, but a language construct. list() is used to assign a list of variables in one operation. 

	$result = mysql_query("SELECT id, username, email FROM user",$conn);
	while(list($id, $username, $email) = mysql_fetch_row($result)) {
	  echo "用户名：$username<br />";
	  echo "电子邮箱：$email";
	}

	list() 中允许使用另一个数组来接收数组赋值过来的值，其赋值顺序跟 list() 中列出的顺序是相反的：
	$numbers = array(18, 20, 25);
	list($a[0], $a[1], $a[2]) = $numbers;
	print_r($a); // Array ( [2] => 25 [1] => 20 [0] => 18 )

# 🚩 extract — 数组成员暴露 Import variables into the current symbol table from an array

	$size = "large";
	$var_array = array("color" => "blue", "size"  => "medium", "shape" => "sphere");
	extract($var_array, EXTR_PREFIX_SAME, "wddx");

	echo "$color, $size, $shape, $wddx_size\n";
	// blue, large, sphere, medium


# 🚩 php http 数组对象传递
	典型的数组对象可以按以下get参数形式传送：
	https://beijing1.jishen.net/?list[]=4&list[]=5

	php收到参数list，就会解析为数组：
	var_dump($_REQUEST['list'])
	// array(2) { [0]=> string(1) "4" [1]=> string(1) "5" }

	可以通过 http_build_query() 来检验php如何构造数组参数的URL：
	$a = ['members'=>[4,5,6]];
	var_dump(http_build_query($a));
	// members%5B0%5D=4&members%5B1%5D=5&members%5B2%5D=6
	// members[0]=4&members[0]=5
	
	二维数组：
	$a = ['class'=>"fruits",'members'=>["apple"=>4,'banana'=>5]];
	var_dump(http_build_query($a));
	// class=fruits&members%5Bapple%5D=4&members%5Bbanana%5D=5
	// class=fruits&members[apple]=4&members[banana]=5

	三维数组：
	$a = ['class'=>["fruits"=>['members'=>["apple"=>4,'banana'=>5]]]];
	var_dump(http_build_query($a));
	// class%5Bfruits%5D%5Bmembers%5D%5Bapple%5D=4&class%5Bfruits%5D%5Bmembers%5D%5Bbanana%5D=5
	// class[fruits][members][apple]=4&class[fruits][members][banana]=5

	根据这样的规则，就可以构造出以下数组的URL：
	 [['id'=>46, 'nickName'=>'Jimbowhy'],['id'=>46, 'nickName'=>'Year']];
	https://beijing1.jishen.net/wxappApi3/doEventsTemplateMsg?list[0][id]=46&list[0][nickName]=Jimbowhy&list[1][id]=46&list[1][nickName]=Year

# 🚩 json_encode API
https://www.php.net/json_encode/

json_encode — 对变量进行 JSON 编码

	json_encode ( mixed $value [, int $options = 0 [, int $depth = 512 ]] ) : string

返回字符串，包含了 value 值 JSON 形式的表示。

编码受传入的 options 参数影响，此外浮点值的编码依赖于 serialize_precision。

参数

- value 待编码的 value ，除了resource 类型之外，可以为任何数据类型。 所有字符串数据的编码必须是 UTF-8。PHP 实现了 JSON 的一个超集，参考 » RFC 7159.
- options 由以下常量组成的二进制掩码： JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP, JSON_HEX_APOS, JSON_NUMERIC_CHECK, JSON_PRETTY_PRINT, JSON_UNESCAPED_SLASHES, JSON_FORCE_OBJECT, JSON_PRESERVE_ZERO_FRACTION, JSON_UNESCAPED_UNICODE, JSON_PARTIAL_OUTPUT_ON_ERROR。 关于 JSON 常量详情参考JSON 常量页面。
- depth 设置最大深度。 必须大于0。

返回值
成功则返回 JSON 编码的 string 或者在失败时返回 FALSE 。

# 🚩 json_decode API
https://www.php.net/json_decode/

	$d = ["a"=>100,"b"=>109];
	var_dump($d["a"]);
	$json_string = json_encode($d);
	$json = json_decode($json_string);
	var_dump($json_string);
	var_dump($json->a);

	json_decode ( string $json [, bool $assoc = FALSE [, int $depth = 512 [, int $options = 0 ]]] ) : mixed

接受一个 JSON 编码的字符串并且把它转换为 PHP 变量

参数
- json 待解码的 json string 格式的字符串。 这个函数仅能处理 UTF-8 编码的数据。PHP 实现了 JSON 的一个超集，参考 » RFC 7159.
- assoc 当该参数为 TRUE 时，将返回 array 而非 object 。
- depth 指定递归深度。
- options 由 JSON_BIGINT_AS_STRING, JSON_INVALID_UTF8_IGNORE, JSON_INVALID_UTF8_SUBSTITUTE, JSON_OBJECT_AS_ARRAY, JSON_THROW_ON_ERROR 组成的掩码。 这些常量的行为在JSON constants页面有进一步描述。

返回值
通过恰当的 PHP 类型返回在 json 中编码的数据。值true, false 和 null 会相应地返回 TRUE, FALSE 和 NULL。 如果 json 无法被解码， 或者编码数据深度超过了递归限制的话，将会返回NULL 。


# 🚩 PHP Session 机制

cookie 部分

	session.use_cookies = 1			开启cookie功能
	session.cookie_lifetime = 0		cookie 存活时间秒数
	session.use_only_cookies = 1	不通过URL传递PHPSESSID
	session.name = PHPSESSID		PHP SESSION ID名字

garbage 部分

	session.gc_probability = 1		回收概率数分子
	session.gc_divisor = 1000		回收概率数分母
	session.gc_maxlifetime = 1440	SESSION 存活期秒数默认24分钟

过期的SESSION不一定会被删除，涉及回收概率问题，当 gc_probability/gc_divisor=1 即 100% 时表示过期SESSION信息一定会被删除。正确设置这两个部分，过期的SESSION信息才能触发回收动作，然后才会引起cookie过期失效，响应头才会有expires信息：

	Set-Cookie: PHPSESSID=s7ecnot8q1fdavonjpses4340f; expires=Wed, 13-Jun-2018 02:11:47 GMT; Max-Age=1800; path=/

	// specify session id before start
	session_id("2dc65023d5c4571ae72c280e08edc0b6");
	// Set-Cookie: session_name()=session_id(); path=/
	// if no cookie from client or no id specify then 
	// session_status() == 0 PHP_SESSION_DISABLED;
	// session_status() == 1 PHP_SESSION_NONE; before session_start()
	// session_status() == 2 PHP_SESSION_ACTIVE; after session_start()
	ini_set('session.gc_maxlifetime', $s); 
	ini_set("session.cookie_lifetime",$s);	
	session_start();
	setcookie(session_name(),'',0,'/');// expires session
	// session_unset(); clear session same as session_destroy()
	var_dump($_SESSION);
    $_SESSION["whiteCookie"] = time();
	var_dump($_SESSION);
	var_dump(session_name());
	var_dump(session_id());
	//unset($_session['whiteCookie']);
	//isset($_session['whiteCookie']);
	// a new session can be start after session commit
	session_commit(); // Alias of session_write_close()

	注意微信小程序存在以下限制但是可以自定义header，所以通过定制header可以间接实现cookie功能，但是把openID当sessionID可能是更好的方法：
	• 不支持cookie，所以使用cookie储存登录状态的方案不可行；
	• http请求header不携带设备信息，服务器无法获取。

	再使用ThinkPHP时，遇到SESSION丢失现象，实验得出结果是ThinkPHP内部执行了session_start，因此要先关闭后再做自己的SESSION:
	// session init avoid thinkPHP's
	session_commit(); // Alias of session_write_close()

# 🚩 SESSION失效问题

服务器SESSION配置问题

	session.auto_start	Off	Off
	session.cache_expire	180	180
	session.cache_limiter	nocache	nocache
	...
	session.name	PHPSESSID	PHPSESSID
	session.referer_check	no value	no value
	session.save_handler	files	files
	session.save_path	no value	no value
	session.use_trans_sid = 1

	需要指定PHPSESSID时，注意使用不合法字符会导致无效状态，合法字符是 a-z A-Z 0-9 , - 
	session_id();

	没有打开自动装入 auto_start=off, 需要手动启动session
	session_start();

	
save_path 指定 session 存储的文件路径有问题，如没有读写权限，或磁盘空间不足，可用磁盘统计命令 df 检查，文件夹占用空间信息用 du 命令：

	# df -h
	Filesystem      Size  Used Avail Use% Mounted on
	/dev/vda1        40G   38G   97M 100% /
	devtmpfs        3.9G     0  3.9G   0% /dev
	tmpfs           3.9G     0  3.9G   0% /dev/shm
	tmpfs           3.9G  540K  3.9G   1% /run
	tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
	tmpfs           783M     0  783M   0% /run/user/0

统计或一级目录统计，信息表明TP的缓存太占空间了！

	# du -sh /data/wwwroot
	32G     /data/wwwroot

	# du -hd 1 /data/wwwroot
	47M     /data/wwwroot/default
	3.3G    /data/wwwroot/oxyx1.com
	28G     /data/wwwroot/oxyx2.com
	12M     /data/wwwroot/oxyx3.com
	32G     /data/wwwroot

	# du -hd 1 /data/wwwroot/oxyxl.xiubao.com/application
	4.0K    /data/wwwroot/oxyxl.xiubao.com/application/upload
	415M    /data/wwwroot/oxyxl.xiubao.com/application/Lib
	28G     /data/wwwroot/oxyxl.xiubao.com/application/Runtime
	4.0K    /data/wwwroot/oxyxl.xiubao.com/application/Common
	8.0K    /data/wwwroot/oxyxl.xiubao.com/application/Conf
	4.0K    /data/wwwroot/oxyxl.xiubao.com/application/Lang
	28G     /data/wwwroot/oxyxl.xiubao.com/application

清理日志

	rm -f /data/wwwroot/beijing1.jishen.net/application/Runtime/Logs/*

日志点空间，请记得关闭调试模式和日记记录设置：

	define("APP_DEBUG", false);

	'DB_SQL_LOG' => false,  // SQL执行日志记录
	'LOG_RECORD' => false,  // 默认不记录日志
	'LOG_TYPE' => 3,        // 日志记录类型 0 系统 1 邮件 3 文件 4 SAPI 默认为文件方式
	'LOG_DEST' => '',       // 日志记录目标
	'LOG_EXTRA' => '',      // 日志记录额外信息
	'LOG_LEVEL' => 'EMERG,ALERT,CRIT,ERR',       // 允许记录的日志级别
	'LOG_FILE_SIZE' => 2097152,	                 // 日志文件大小限制
	'LOG_EXCEPTION_RECORD' => false,             // 是否记录异常信息日志

警告：TP日志有泄密风险，默认路径可下载到日志文件 - https://oxyxl.xiubao.com/application/Runtime/Logs/18_12_16.log

	public function checkSession($clear=false){
		print_r([
			"SAVEPATH"=>session_save_path(),// php.ini文件,搜索 session.save_path
			"SESSION"=>$_SESSION
		]);
		// if ( !file_exists($savePath) ) mkdir($savePath,0777,true);
		// session_save_path($savePath);
		if( $clear ) session_unset(); // session_destroy();
	}

# 🚩 array_walk & array_map

	function attach(&$v,$key){$v = "$key=$v";}
	$params = ['a'=>1,'b'=>2];
	array_walk($params, "attach");
	$string = implode("&",$params);

	function sign($params){
		ksort($params);
		$keys = array_keys($params);
		$serial = array_map(create_function('$k, $v', 'return "$k:$v";'), $keys, $params);
		$serial = (implode("",$serial));
		return md5($serial);
	}


# 🚩 create_function 键名排序 拼接参数 MD5摘要

	function sign($params){
		ksort($params);
		$keys = array_keys($params);
		$serial = array_map(create_function('$k, $v', 'return "$k:$v";'), $keys, $params);
		$serial = (implode("",$serial));
		return md5($serial);
	}

	$params = [
		"click_user_id" => "344876",
		"click_time" => "1530754718",
		"share_user_id" => "344876",
		"share_time" => "1530754473",
		"timestamp" => "1530754718",
	];
	ksort($params);
	$keys = array_keys($params);
	$serial = array_map(create_function('$k, $v', 'return "$k:$v";'), $keys, $params);
	$serial = (implode("",$serial));
	// "click_time:1530754718click_user_id:344876share_time:1530754473share_user_id:344876timestamp:1530754718"

	$sign = "e01db756895d18d8979137e0417b6e01";

	echo md5($serial)==$sign?"TRUE":"FALSE";
	die();

# 🚩 php output buffer
	<?php
	ob_start();
	echo 'one ';
	$text[] = ob_get_contents(); // one
	echo 'two ';
	$text[] = ob_get_contents(); // one two
	ob_flush();
	echo 'three ';
	$text[] = ob_get_contents(); // three
	?>
	four
	<?php
	$text[] = ob_get_clean(); //ob_get_contents(); // three four
	ob_clean();

	var_dump($text);

# 🚩 preg_split preg_match 正则 拆分汉字 字符分割

	str_split("abcde", 3);                         // ['abc','de']
	$words = preg_split('//', "abcd");             // ["","a","b","c","d",""]
	$words = preg_split('/(?<!^)(?!$)/u', "益恩"); // ["益","恩"]
	$words = preg_split('//u', "萱儿");            // ["","萱","儿",""]

	$ok = preg_match('/^(KG)([\d]{11})([\da-z]+)$/', "KG15483454165c49e0486fe57", $matches);
	if( $matches ) var_dump($matches); // ["KG15483454165c49e0486fe57", "KG", "15483454165", "c49e0486fe57"]

# 🚩 空白字符过滤

	$c =  "  萱  儿 ";
	$c = str_replace('  ', " ", $c);
	$c = trim($c);
	// $c = preg_replace('/^ +| +$/', '', $c);
	var_dump($c);

# 🚩 URL参数附加

	$url = "https://oxyxl.zhuanru.com/wxappApi8/vip?code=021NR6as1Tb9vn02U8as13jjas1NR6aG&state=login#hash/path";
	$url = "https://oxyxl.zhuanru.com/wxappApi8/vip";
	function attachUrlParams($url, $data){
		$keys = array_keys($data);
		$a = explode("#", $url);
		$b = explode("?", $a[0]);
		$c = count($b)>1? explode("&", $b[1]):[];
		foreach ($c as $k => $p) {
			$pair = explode("=", $p);
			if( in_array($pair[0], $keys) ){
				$p = $pair[0]."=".$data[$pair[0]];
				unset($data[$pair[0]]);
			}
			$c[$k] = $p;
		}
		$hash = count($a)>1? "#".$a[1]:"";
		foreach ($data as $key => $value) $data[$key] = "$key=$value";
		$query = implode("&", $data).implode("&",$c);
		$url = $b[0]."?".$query.$hash;
		return $url;
	}
	var_dump(attachUrlParams($url, ["id"=>100, "code"=>"abc"]));

	$url = "http://www.jinian.com/wxappApi3?i=18914429245c0a3b01dc314";
	function attachUrlParams($url, $data){
		$keys = array_keys($data);
		$a = explode("#", $url); // no hash on server side
		$b = explode("?", $a[0]);
		$query = count($b)>1? explode("&", $b[1]):[];
		foreach ($query as $k => $p) {
			$pair = explode("=", $p);
			if( in_array($pair[0], $keys) ) continue;
			$data[$pair[0]] = $pair[1];
		}
		$hash = count($a)>1? "#".$a[1]:"";
		foreach ($data as $key => $value) $data[$key] = "$key=$value";
		$query = implode("&", $data);
		$url = $b[0]."?".$query.$hash;
		return $url;
	}
	$json = '{"openid":"oAu6A1Mr6VuTDt8LhRNs35BEgyf0","nickname":" Jeango",}';
	var_dump(attachUrlParams($url, ['d'=>urlencode($json)]));


# 🚩 sql generater

	$a = "The first function is provided by the form helper and renders the form element and adds extra functionality";
	$names = explode(' ',$a);
	foreach( $names as $name) {
		$gender = ['male','female'][rand(0,1)];
		$pass = rand(9999, 99999);
		echo "INSERT INTO `mins`.`users`(`name`, `pass`, `gender`) VALUES ('$name', '$pass', '$gender');\n";
	}


# 🚩 array_column function
	$a = [
		"0"=>["Field"=>"id","value"=>"a"],
		"1"=>["Field"=>"time","value"=>"b"],
		"2"=>["Field"=>"count","value"=>"c"],
		"3"=>["Field"=>"list","value"=>"d"]
	];
	var_dump( array_column($a, 'value')); // a b c d


# 🚩 file_get_contents 发送post请求 微信小程序模板消息
	
	需要打开 extension=php_openssl.dll

	/* return data format and errcodes: { "errcode": 0, "errmsg": "ok" }
		40037	template_id不正确
		41028	form_id不正确，或者过期
		41029	form_id已被使用
		41030	page不正确
		45009	接口调用超过限额(目前默认每个帐号日调用限额为100万)
	*/
	public function postTemplateMsg($openid, $formid, $templateid){
		$url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='.$this->getApiToken();
        $postbody = ['touser'=>$openId,
        	'template_id'=>$templateid,
        	'form_id'=>$formid,
        	'page'=>"pages/index/index",
        	'emphasis_keyword'=>"keyword2.DATA",
        	'data'=> [
		        "keyword1"=>["value"=>"守护榜排名更新了！","color"=>"#800000"],
		        "keyword2"=>["value"=>"最新守护排名粉丝名单：","color"=>"#376a2f"]
		    ]
		];
        $postbody = http_build_query($postbody);
        $opts = ['http' => [
        	'method'  => 'POST',
        	'timeout'  => 9, // seconds
        	'header' => 'Content-type: application/x-www-form-urlencoded',
        	'content' => $postbody
        ]];  
        $context = stream_context_create($opts);  
        $result = file_get_contents($url, false, $context);
        if( isset($_GET['debug']) )  var_dump($result);
    	$this->appOption('postTemplatesMsg_debug', $result);
        return $result;
	}


# 🚩 图像处理 圆角 图片拼合

	function imagePainted($bg, $avatar, $nickname, $qrcode){
	    $path_qr = $_SERVER["DOCUMENT_ROOT"]."/get_wxqrcode.png";
	    $path_bg = $_SERVER["DOCUMENT_ROOT"]."/wxqrcode-bg.png";
	    $path_av = $_SERVER["DOCUMENT_ROOT"]."/wxqrcode-av.png";
	    if( !file_exists($path_av) || filesize($path_av)<1024 ){
		    $result = file_get_contents($avatar, false);
		    $size = file_put_contents($path_av, $result);
		}
	    if( !file_exists($path_bg) || filesize($path_bg)<1024 ){
		    $result = file_get_contents($bg, false);
		    $size = file_put_contents($path_bg, $result);
		}
	    if( !file_exists($path_qr) || filesize($path_qr)<1024 ){
		    $result = file_get_contents($qrcode, false);
		    $size = file_put_contents($path_qr, $result);
		}

		$inf=getimagesize($path_av, $info);
		list($width_av,$height_av,$type_av)=$inf;
		$inf=getimagesize($path_qr, $info);
		list($width_qr,$height_qr,$type_qr)=$inf;
		$inf=getimagesize($path_bg, $info);
		list($width,$height,$type,$htmls)=$inf;
		$bits = $inf['bits'];
		$mime = $inf['mime'];
		// $channels =  $inf['channels'];

		// (imagetypes() & IMG_PNG) && echo "PNG Support is enabled";
		// (imagetypes() & IMG_JPG) && echo "JPG Support is enabled";
		$types =[IMAGETYPE_PNG=>"png", IMAGETYPE_JPEG=>"jpg"];
		$creater =[IMAGETYPE_PNG=>"imagecreatefrompng", IMAGETYPE_JPEG=>"imagecreatefromjpeg"];
		$render =[IMAGETYPE_PNG=>"imagepng", IMAGETYPE_JPEG=>"imagejpeg"];

		$res_av = $creater[$type_av]($path_av);
		$res_qr = $creater[$type_qr]($path_qr);
		$res_bg = $creater[$type]($path_bg);
	    imageantialias( $res_av, true);
	    imageantialias( $res_qr, true);
	    imageantialias( $res_bg, true);


	    $mask = imagecreatetruecolor($width_av, $height_av);
	    imageantialias( $mask, true);
	    $bgcolor = imagecolorallocate($mask, 1, 1, 1);
	    $fgcolor = imagecolorallocate($mask, 0, 0, 0);
	    imagefill($mask, 0, 0, $bgcolor);
	    imagefilledarc($mask, $width_av/2, $height_av/2, $width_av, $height_av, 0, 360, $fgcolor, IMG_ARC_PIE);
	    imagecolortransparent($mask, $fgcolor);
		imagecopyresized($res_av, $mask, 0,0, 0,0, $width_av,$height_av, $width_av,$height_av);
	    imagecolortransparent($res_av, $bgcolor);

		$w = $width/3;
		$h = $w*$width_qr/$height_qr;
		$x = $width*0.5-$w/2;
		$y = $height*0.63;
		imagecopyresized($res_bg, $res_qr, $x,$y, 0,0, $w,$h, $width_qr,$height_qr);

		$w = $width/4;
		$h = $w*$width_av/$height_av;
		$x = $width*0.5-$w/2;
		$y = $height*0.1;
		imagecopyresized($res_bg, $res_av, $x,$y, 0,0, $w,$h, $width_av,$height_av);

	    // $font = 'simsun.ttc';//'Microsoft Yahei'; //'arial.ttf';//"simhei.ttf";
	    // $font  =  '/usr/share/fonts/truetype/ttf-dejavu/DejaVuSans.ttf' ;  
	    // $font  = '/usr/share/fonts/truetype/cwtex/cwkai.ttf';
	    // $font = "c:\windows\Fonts\simhei.ttf";
	    // $font = "c:\windows\Fonts\simsun.ttc"; 
	    $font = "c:\windows\Fonts\msyh.ttc"; 
	    $color = imagecolorallocate($res_bg, 255, 255, 255);  
	    $fontsize = 28;
	    $angle = 0;
	    $fontBox = imagettfbbox($fontsize, $angle, $font, $nickname);//文字水平居中算量
	    imagettftext($res_bg, $fontsize, $angle, ($width-$fontBox[2])/2,$height*0.3, $color, $font, $nickname);  

		header('Content-Type: '.$mime);
		$render[$type]($res_bg);

		// header('Content-Type: image/jpeg');
		// imagejpeg($res);
	}

	$bg = "http://oyj0xtv4f.bkt.clouddn.com/uploads/image/56/561ba3e12883fafd838bd6ac5c633e94.jpg";
	$qrcode = "./get_wxqrcode.png";
	$avatar = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIh5J8uUe5ONbibKkDd8fUxwNO2OuoobbYhoQgAticGqTVxuTHL410Zs0jlQicr0ZDAePkp3mNreHeFQ/132";
	imagePainted($bg, $avatar, "坚果 jeangowhy", $qrcode);

# 🚩 XML 数组 简单互换

	通过SimpleXMLElement将xml数据转换成对象, 再用json函数转换成数组

	$xml ="
	    <xml>
	        <appid><![CDATA[wx877c61a42e2f0704]]></appid>
	        <attach><![CDATA[来呗燕Sivanna思薇娜气垫眉粉]]></attach>
	        <bank_type><![CDATA[CFT]]></bank_type>
	        <cash_fee><![CDATA[1]]></cash_fee>
	        <fee_type><![CDATA[CNY]]></fee_type>
	        <id><![CDATA[116]]></id>
	        <is_subscribe><![CDATA[N]]></is_subscribe>
	        <mch_id><![CDATA[1497261222]]></mch_id>
	        <nonce_str><![CDATA[urpgatogv2oa570xen50xoy97kgzpcrt]]></nonce_str>
	        <openid><![CDATA[oeOr05frotjYr8se01u-gGvC6BXM]]></openid>
	        <out_trade_no><![CDATA[ORDER1527150229]]></out_trade_no>
	        <result_code><![CDATA[SUCCESS]]></result_code>
	        <return_code><![CDATA[SUCCESS]]></return_code>
	        <sign><![CDATA[9F3B1B5A6669F9FF746668AF161EE708]]></sign>
	        <time_end><![CDATA[20180524162508]]></time_end>
	        <total_fee>1</total_fee>
	        <trade_type><![CDATA[JSAPI]]></trade_type>
	        <transaction_id><![CDATA[4200000115201805246364524312]]></transaction_id>
	        <userid><![CDATA[46]]></userid>
	    </xml>
	";
    //禁止引用外部xml实体
    libxml_disable_entity_loader(true);
	$class = 'SimpleXMLElement';
	$xmlElement = simplexml_load_string($xml, $class, LIBXML_NOCDATA);
	$xmlArray = json_decode(json_encode($xmlElement), true);
	var_dump($xmlArray );


	public function ToXml($values)
	{
		if( !is_array($values) || count($values) <= 0)
		{
			throw new Exception("数组数据异常！");
		}

		$xml = "<xml>";
		foreach ($values as $key=>$val)
		{
			if (is_numeric($val)){
				$xml.="<".$key.">".$val."</".$key.">";
			}else{
				$xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
			}
		}
		$xml.="</xml>";
		return $xml;
	}


# 🚩 PHP day & time
http://php.net/manual/zh/timezones.others.php

	时间差值，累计天数

	$a= "2018-06-28 23:00:00";
	$b = "2018-06-29 01:00:00";
	$diff = date_diff(date_create($a), date_create($b));
	$days = $diff->days;
	var_dump($days); // date diff: 0 day

	$dt = new DateTime("2018/6/13 wed");
	var_dump($dt->getTimestamp());

	$dt = new DateTime();
	$d1 = new DateTime('+1 day');
	$d2 = new DateTime('2017/4/24');
	$days = date_diff($dt,$d2)->days;
	var_dump( $days );
	var_dump( $dt );
	var_dump(strtotime('1970/1/1'));
	var_dump( date("y-m-d h:i:s",time()) );
	var_dump(time());

	date_default_timezone_set("Asia/Shanghai"); 
	date_default_timezone_set("UTC");
	var_dump(date("Y/m/d H:m:s",time())); // H for 24h

	$d1 = strtotime("2018/4/28");
	$d2 = strtotime("2018/4/27");
	var_dump($d1-$d2);
	var_dump(($d1-$d2)/60/60/24);
	$d1 = date_create("2018/4/28");
	$d2 = date_create("2018/4/27");
	$diff = date_diff($d1,$d2);
	var_dump(($diff->days));

	date_default_timezone_set("Asia/Shanghai"); 
	var_dump(date_create("now"));
	var_dump(new DateTime("now"));
	var_dump(new DateTime("2018/6/13 wed"));
	var_dump(new DateTime(date("Y-m-d H:m:s",time())));

	$timezone = new DateTimeZone('Asia/Shanghai');
	$dt = new DateTime(); // UTC
	$dt->setTimeZone($timezone);
	var_dump($dt);
	
	// 1st & last day for a month or week
	$time = time();
	$gd = getdate($time);
	$weekday = $gd['wday']; // 0 sunday 1 monday...

	$firstday = date("y-m-01", $time);
	$lastday = date("y-m-d", strtotime("$firstday +1 month -1 day"));
	var_dump($firstday);
	var_dump($lastday);

	$date = "2018-11-15";
	$lastday=date('Y-m-d',strtotime("$date Sunday"));
	$firstday=date('Y-m-d',strtotime("$lastday -6 days"));
	print_r( array(["Monday"=>$firstday,"Sunday"=>$lastday]));
	// [Monday => 2018-11-12, Sunday => 2018-11-18]

	$lastmonday = strtotime("last monday");
	if( $lastmonday>time()-7*24*60*60 ) $lastmonday = $lastmonday-7*24*60*60;

# 🚩 array_slice() & array_splice()

	$a = explode("\n", "[1, \n2,\n3,\n4,\n5,\n6]");
	$b = array_slice($a, 1, 3); // 切片 获取片段不改动原数组
	$c = [1,2,3,4,5,6];
	$d = array_splice($c, 1, 3); // 捻接 获修改原数组为指定的片段
	print_r([$a, $b, $c, $d]);

# 🚩 array_merge OR array_combine

	$a = ['name','age'];
	$b = ['age','sex'];

	var_dump( array_merge($a, $b) );	// array(4) {[0]=> "name",[1]=> "age",[2]=> "age",[3]=> "sex"}
	var_dump( array_combine($a, $b) );	// array(2) {["name"]=> "age", ["age"]=> "sex"}

	$a = ['name'=>"Jack",'age'=>"17"];
	$b = ['age'=>"18",'sex'=>"male"];

	var_dump( array_merge($a, $b) );	// array(3) {["name"]=> "Jack",["age"]=> "18",["sex"]=>  "male"}
	var_dump( array_combine($a, $b) );	// array(2) {["Jack"]=> "18",[17]=> "male"}


# 🚩 thinkPHP 分页

	第一种：利用Page类和limit方法
	$User = M('User'); // 实例化User对象
	$count      = $User->where('status=1')->count();// 查询满足要求的总记录数
	$Page       = new \Think\Page($count,25);// 实例化分页类 传入总记录数和每页显示的记录数(25)
	$show       = $Page->show();// 分页显示输出
	// 进行分页数据查询 注意limit方法的参数要使用Page类的属性
	$list = $User->where('status=1')->order('create_time')->limit($Page->firstRow.','.$Page->listRows)->select();
	$this->assign('list',$list);// 赋值数据集
	$this->assign('page',$show);// 赋值分页输出
	$this->display(); // 输出模板
	
	第二种：分页类和page方法的实现
	$User = M('User'); // 实例化User对象
	// 进行分页数据查询 注意page方法的参数的前面部分是当前的页数使用 $_GET[p]获取
	$list = $User->where('status=1')->order('create_time')->page($_GET['p'].',25')->select();
	$this->assign('list',$list);// 赋值数据集
	$count      = $User->where('status=1')->count();// 查询满足要求的总记录数
	$Page       = new \Think\Page($count,25);// 实例化分页类 传入总记录数和每页显示的记录数
	$show       = $Page->show();// 分页显示输出
	$this->assign('page',$show);// 赋值分页输出
	$this->display(); // 输出模板

# 🚩 文件写入 服务器端调试信息DUMP

	$filed = file_put_contents($_SERVER["DOCUMENT_ROOT"]."/debug.data", json_encode($return), FILE_APPEND);


# 🚩 神奇的 PHP 数字和字符串比较 非同类型数据不要比较

	function test($var)
	{
	    switch ($var)
	    {
	        case 'apple':
	            echo 'apple', PHP_EOL;
	            break;
	        case 0:
	            echo '0', PHP_EOL;
	            break;
	        default:
	            echo 'default', PHP_EOL;
	    }
	}

	$arr = array('0', 0, 'apple');

	foreach ($arr as $value)
	{
	    test($value);
	}

	结果

	0
	apple
	apple

	字符串和数字比较的时候会把字符串强制转数字，apple 就变成了 0，就相等了...


# 🚩 $_SERVER 内置变量
        
	array(39) {
	["TEMP"]=>                   string(4) "/tmp"
	["TMPDIR"]=>                 string(4) "/tmp"
	["TMP"]=>                    string(4) "/tmp"
	["PATH"]=>                   string(28) "/usr/local/bin:/usr/bin:/bin"
	["USER"]=>                   string(3) "www"
	["HOME"]=>                   string(9) "/home/www"
	["FCGI_ROLE"]=>              string(9) "RESPONDER"
	["QUERY_STRING"]=>           string(21) "s=/wxappMinis&id=1330"
	["REQUEST_METHOD"]=>         string(3) "GET"
	["CONTENT_TYPE"]=>           string(0) ""
	["CONTENT_LENGTH"]=>         string(0) ""
	["SCRIPT_NAME"]=>            string(10) "/index.php"
	["REQUEST_URI"]=>            string(19) "/wxappMinis?id=1330"
	["DOCUMENT_URI"]=>           string(10) "/index.php"
	["DOCUMENT_ROOT"]=>          string(33) "/data/wwwroot/beijing1.jishen.net"
	["SERVER_PROTOCOL"]=>        string(8) "HTTP/1.1"
	["REQUEST_SCHEME"]=>         string(5) "https"
	["HTTPS"]=>                  string(2) "on"
	["GATEWAY_INTERFACE"]=>      string(7) "CGI/1.1"
	["SERVER_SOFTWARE"]=>        string(12) "nginx/1.12.2"
	["REMOTE_ADDR"]=>            string(14) "116.24.214.125"
	["REMOTE_PORT"]=>            string(5) "49985"
	["SERVER_ADDR"]=>            string(13) "120.79.112.14"
	["SERVER_PORT"]=>            string(3) "443"
	["SERVER_NAME"]=>            string(19) "beijing1.jishen.net"
	["REDIRECT_STATUS"]=>        string(3) "200"
	["SCRIPT_FILENAME"]=>        string(43) "/data/wwwroot/beijing1.jishen.net/index.php"
	["HTTP_HOST"]=>              string(19) "beijing1.jishen.net"
	["HTTP_CONNECTION"]=>        string(10) "keep-alive"
	["HTTP_UPGRADE_INSECURE_REQUESTS"]=>                     string(1) "1"
	["HTTP_USER_AGENT"]=>        string(114) "Mozilla/5.0 (Windows NT 6.1; Win64; x64) ..."
	["HTTP_ACCEPT"]=>            string(85) "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
	["HTTP_ACCEPT_ENCODING"]=>   string(17) "gzip, deflate, br"
	["HTTP_ACCEPT_LANGUAGE"]=>   string(23) "zh-CN,zh;q=0.9,it;q=0.8"
	["HTTP_COOKIE"]=>            string(36) "PHPSESSID=qplapa585vdsdq7e56u9g9sps1"
	["PHP_SELF"]=>               string(10) "/index.php"
	["REQUEST_TIME_FLOAT"]=>     float(1526610019.7026)
	["REQUEST_TIME"]=>           int(1526610019)
	["PATH_INFO"]=>              string(11) "/wxappMinis"
	}

	$_COOKIE
	array(1) {
	  ["PHPSESSID"]=>
	  string(26) "qplapa585vdsdq7e56u9g9sps1"
	}


# 🚩 `$_FILES` 上传文件内置变量 

file 是 input[name] 属性, 多文件与单文件对比, 单文件上传方式也可以设置  multiple="", 这样就可以多选文件, 像 jQuery FileUploader 是单个文件逐次上传的.
https://github.com/blueimp/jQuery-File-Upload/wiki/API


	<input id="fileupload" type="file" name="file[]" multiple="" >

	array(1) {
	  ["file"]=>  array(5) {
		["name"]=>    array(1) {
		  [0]=>      string(13) "itworking.png"
		}
		["type"]=>    array(1) {
		  [0]=>      string(9) "image/png"
		}
		["tmp_name"]=>    array(1) {
		  [0]=>      string(14) "/tmp/phpkwYGBd"
		}
		["error"]=>    array(1) {
		  [0]=>      int(0)
		}
		["size"]=>    array(1) {
		  [0]=>      int(124901)
		}
	  }
	}

	<input id="fileupload" type="file" name="file" >

	array(1) {
	  ["file"]=>  array(5) {
		["name"]=>    string(13) "itworking.jpg"
		["type"]=>    string(10) "image/jpeg"
		["tmp_name"]=>    string(14) "/tmp/phpNn1XeS"
		["error"]=>    int(0)
		["size"]=>    int(153489)
	  }
	}


## ⚡ getopt() 解析传入脚本的选项

获取命令行参数列表中的选项

	getopt( string $options[, array $longopts[, int &$optind]] ) : array


options 该字符串中的每个字符会被当做选项字符，匹配传入脚本的选项以单个连字符(-)开头。  比如，一个选项字符串 "x" 识别了一个选项 -x。  只允许 a-z、A-Z 和 0-9。

longopts 选项数组。此数组中的每个元素会被作为选项字符串，匹配了以两个连字符(--)传入到脚本的选项。  例如，长选项元素 "opt" 识别了一个选项 --opt。

If the optind parameter is present, then theindex where argument parsing stopped will be written to this variable. 


Example #2 getopt() 例子：引入长选项

	// Script example.php
	$shortopts  = "";
	$shortopts .= "f:";  // Required value
	$shortopts .= "v::"; // Optional value
	$shortopts .= "abc"; // These options do not accept values

	$longopts  = array(
	    "required:",     // Required value
	    "optional::",    // Optional value
	    "option",        // No value
	    "opt",           // No value
	);
	$options = getopt($shortopts, $longopts);
	var_dump($options);
	?>  


	shell> php example.php -f "value for f" -v -a --required value --optional="optional value" --option


## ⚡ settype() 设置变量类型

说明：

	settype( mixed &$var, string $type) : bool

将变量 var 的类型设置成 type。 

	$foo = "5bar"; // string
	$bar = true;   // boolean

	settype($foo, "integer"); // $foo 现在是 5   (integer)
	settype($bar, "string");  // $bar 现在是 "1" (string)

type 的可能值为： 

- ◦ "boolean" （或为"bool"，从 PHP 4.2.0 起）  
- ◦ "integer" （或为"int"，从 PHP 4.2.0 起）  
- ◦ "float" （只在 PHP 4.2.0 之后可以使用，对于旧版本中使用的"double"现已停用）  
- ◦ "string"  
- ◦ "array"  
- ◦ "object"  
- ◦ "null" （从 PHP 4.2.0 起） 


# 🚩 Function Reference
- PHP 8.1.0.x Manual - Function Reference

Tip 
See also Extension List/Categorization. 

### • Affecting PHP's Behaviour
• APCu — APC User Cache
• Componere
• Error Handling — Error Handling and Logging
• FFI — Foreign Function Interface
• OPcache
• Output Control — Output Buffering Control
• PHP Options/Info — PHP Options and Information
• phpdbg — Interactive PHP Debugger
• runkit7
• uopz — User Operations for Zend
• WinCache — Windows Cache for PHP
• Xhprof — Hierarchical Profiler
• Yac

### • Audio Formats Manipulation
• OpenAL — OpenAL Audio Bindings

### • Authentication Services
• Radius

### • Command Line Specific Extensions
• Readline — GNU Readline

### • Compression and Archive Extensions
• Bzip2
• LZF
• Phar
• Rar — Rar Archiving
• Zip
• Zlib — Zlib Compression

### • Cryptography Extensions
• CSPRNG
• Hash — HASH Message Digest Framework
• Mcrypt
• Mhash
• OpenSSL
• Password Hashing
• Sodium

### • Database Extensions
• Abstraction Layers
• Vendor Specific Database Extensions

### • Date and Time Related Extensions
• Calendar
• Date/Time — Date and Time
• HRTime — High resolution timing

### • File System Related Extensions
• Direct IO
• Directories
• Fileinfo — File Information
• Filesystem
• Inotify
• xattr
• xdiff

### • Human Language and Character Encoding Support
• Enchant — Enchant spelling library
• Gender — Determine gender of firstnames
• Gettext
• iconv
• intl — Internationalization Functions
• Multibyte String
• Pspell
• Recode — GNU Recode

### • Image Processing and Generation
• Exif — Exchangeable image information
• GD — Image Processing and GD
• Gmagick
• ImageMagick — Image Processing (ImageMagick)

### • Mail Related Extensions
• IMAP — IMAP, POP3 and NNTP
• Mail
• Mailparse

### • Mathematical Extensions
• BC Math — BCMath Arbitrary Precision Mathematics
• GMP — GNU Multiple Precision
• Math — Mathematical Functions
• Trader — Technical Analysis for Traders

### • Non-Text MIME Output
• FDF — Forms Data Format
• GnuPG — GNU Privacy Guard
• wkhtmltox
• PS — PostScript document creation
• RpmInfo
• XLSWriter

### • Process Control Extensions
• Eio
• Ev
• Expect
• PCNTL — Process Control
• POSIX
• Program execution — System program execution
• parallel
• pthreads
• pht
• Semaphore — Semaphore, Shared Memory and IPC
• Shared Memory
• Sync

### • Other Basic Extensions
• GeoIP — Geo IP Location
• FANN — FANN (Fast Artificial Neural Network)
• Igbinary
• JSON — JavaScript Object Notation
• Lua
• LuaSandbox
• Misc. — Miscellaneous Functions
• Seaslog
• SPL — Standard PHP Library (SPL)
• Streams
• Swoole
• Tidy
• Tokenizer
• URLs
• V8js — V8 Javascript Engine Integration
• Yaml — YAML Data Serialization
• Yaf — Yet Another Framework
• Yaconf
• Taint
• Data Structures
• var_representation

### • Other Services
• cURL — Client URL Library
• Event
• FTP
• Gearman
• LDAP — Lightweight Directory Access Protocol
• Memcache
• Memcached
• mqseries
• Network
• RRD — RRDtool
• ScoutAPM
• SNMP
• Sockets
• SSH2 — Secure Shell2
• Stomp — Stomp Client
• SVM — Support Vector Machine
• SVN — Subversion
• TCP — TCP Wrappers
• Varnish
• YAZ
• 0MQ messaging — ZMQ
• ZooKeeper

### • Search Engine Extensions
• Solr — Apache Solr

### • Server Specific Extensions
• Apache
• FastCGI Process Manager

### • Session Extensions
• Sessions — Session Handling

### • Text Processing
• CommonMark
• Parle — Parsing and lexing
• PCRE — Regular Expressions (Perl-Compatible)
• ssdeep — ssdeep Fuzzy Hashing
• Strings

### • Variable and Type Related Extensions
• Arrays
• Classes/Objects — Class/Object Information
• Ctype — Character type checking
• Filter — Data Filtering
• Function Handling
• Reflection
• Variable handling

### • Web Services
• OAuth
• SOAP
• Yar — Yet Another RPC Framework
• XML-RPC

### • Windows Only Extensions
• COM — COM and .Net (Windows)
• win32service

### • XML Manipulation
• DOM — Document Object Model
• libxml
• SimpleXML
• WDDX
• XMLDiff — XML diff and merge
• XML Parser
• XMLReader
• XMLWriter
• XSL

### • GUI Extensions
• UI

# =🚩 • Affecting PHP's Behaviour

# =🚩 • Audio Formats Manipulation

# =🚩 • Authentication Services

# =🚩 • Command Line Specific Extensions

# =🚩 • Compression and Archive Extensions

# =🚩 • Cryptography Extensions

# =🚩 • Database Extensions

# =🚩 • Date and Time Related Extensions

# =🚩 • File System Related Extensions

# =🚩 • Human Language and Character Encoding Support

# =🚩 • Image Processing and Generation

# =🚩 • Mail Related Extensions

# =🚩 • Mathematical Extensions

# =🚩 • Non-Text MIME Output

# =🚩 • Process Control Extensions
## ==⚡ • Eio
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Eio Functions


## ==⚡ • Ev
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Watchers
• Watcher callbacks
• Periodic watcher operation modes
• Ev — The Ev class
• EvCheck — The EvCheck class
• EvChild — The EvChild class
• EvEmbed — The EvEmbed class
• EvFork — The EvFork class
• EvIdle — The EvIdle class
• EvIo — The EvIo class
• EvLoop — The EvLoop class
• EvPeriodic — The EvPeriodic class
• EvPrepare — The EvPrepare class
• EvSignal — The EvSignal class
• EvStat — The EvStat class
• EvTimer — The EvTimer class
• EvWatcher — The EvWatcher class


## ==⚡ • Expect
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Expect Functions


## ==⚡ • PCNTL — Process Control
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• PCNTL Functions


## ==⚡ • POSIX
• Introduction
• Installing/Configuring
• Predefined Constants
• POSIX Functions


## ==⚡ • Program execution — System program execution
• Introduction
• Installing/Configuring
• Predefined Constants
• Program execution Functions


## ==⚡ • parallel
• Introduction
• Installation
• Philosophy
• Functional API
• parallel\Runtime — The parallel\Runtime class
• parallel\Future — The parallel\Future class
• parallel\Channel — The parallel\Channel class
• parallel\Events — The parallel\Events class
• parallel\Events\Input — The parallel\Events\Input class
• parallel\Events\Event — The parallel\Events\Event class
• parallel\Events\Event\Type — The parallel\Events\Event\Type class
• parallel\Sync — The parallel\Sync class


### ===🗝 • Introduction

parallel is a parallel concurrency extension for PHP 7.2+. 

A brief description of the concepts core to parallel follows, more detailed information may be found within this section of the manual. 


Runtime 

A parallel\Runtime represents a PHP interpreter thread. A parallel\Runtime is configured with an optional bootstrap file passed to `parallel\Runtime::__construct()`, this is typically an autoloader,or some other preloading routine: The bootstrap file will be included before any task is executed. 

After construction the `parallel\Runtime` remains available until it is closed, killed, or destroyed by the normal scoping rules of PHP objects. `parallel\Runtime::run()` allows the programmer to schedule tasks for execution in parallel. A parallel\Runtime has a FIFO schedule, tasks will be executed in the order that they are scheduled. 


Functional API 

parallel implements a functional, higher level API on top of parallel\Runtime that provides a single function entry point to executing parallel codewith automatic scheduling: parallel\run(). 


Task 

A task is simply a Closure intended for parallel execution. The Closure may contain almost any instruction, including nested closures.However, there are some instructions that are prohibited in tasks: 

◦ yield
◦ use by-reference
◦ declare class
◦ declare named function


✒Note: 

Nested closures may yield or use by-reference, but must not contain class or named function declarations. 


✒Note: 

No instructions are prohibited in the files which the task may include. 


Future 

The parallel\Future is used to access the return value from the task, and exposes an API for cancellation of the task. 


Channel 

A task may be scheduled with arguments, use lexical scope variables (by-value), and return a value (via a parallel\Future), but these only allow uni-directional communication:They allow the programmer to send data into and retrieve data from a task, but do not allow bi-directional communication between tasks.The parallel\Channel API allows bi-directional communication between tasks, a parallel\Channel is a socket-like link between tasks that the programmer can use to send and receive data. 


Events 

The parallel\Events API implements a native feel (Traversable) event loop, and parallel\Events::poll() method.It allows the programmer to work with sets of channels and or futures.The programmer simply adds channels and futures to the event loop, optionally setting the input for writes with parallel\Events::setInput(),and enters into a foreach: parallel will read from and write to objects as they become available yielding parallel\Events\Event objectsdescribing the operations that have occurred. 


See Also 
• Philosophy


### ===🗝 • Installation
- https://www.php.net/manual/en/parallel.setup.php
- https://www.php.net/manual/en/parallel.run.php

Requirements 

parallel requires a build of PHP with ZTS (Zend Thread Safety) enabled ( --enable-maintainer-zts or --enable-zts on Windows ) 

🚸Caution 
Zend Thread Safety cannot be enabled post build; it is a build time configuration option. 

parallel should build anywhere there is a working Posix Threads header (pthread.h) and ZTS build of PHP, including Windows (using the pthread-w32 project from redhat). 


Installation 

parallel releases are hosted by PECL and the source code by » github,the easiest route to installation is the normal PECL route: » https://pecl.php.net/package/parallel. 

Windows users can download prebuilt release binaries from the » PECL website. 

🚸Caution 
Windows users need to take the additional step of adding pthreadVC2.dll (distributed with Windows releases) to their PATH. 

On Windows Systems:

- Install PHP TS (Thread Safe)
- Download Extension from PECL (PHP-Version, Thread Safe (TS), Compiler - Version (VC15, VC16), Architecture must match)
- Copy extension to folder: <your php dir>/ext/php_parallel.dll
- Copy app to folder: <your php dir>/pthreadVC2.dll (It is important to copy pthreadVC2.dll not into the ext folder!)
- add pthreadVC2.dll to windows system environment path
- add in php.ini the line extension=parallel to load the extension
- restart

Try on console: php -v

Hello World
===========

```php
$runtime = new \parallel\Runtime();

$future = $runtime->run(function(){
    for ($i = 0; $i < 500; $i++)
        echo "*";

    return "easy";
});

for ($i = 0; $i < 500; $i++) {
    echo ".";
}

printf("\nUsing \\parallel\\Runtime is %s\n", $future->value());
```

This may output something like (output abbreviated):

```
.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*
Using \parallel\Runtime is easy
```

虽然函数有定义，但在不能在 parallel Closure 内访问到，可以在 Closure 内使用 include 引入再调用。

Here's a more substantial example of how to use the run functional API.


```php
use \parallel\{Runtime, Future, Channel, Events};

$minId = 11001;
$maxId = 1382130;
$workers = 8;
$totalIds = $maxId - $minId;
// Try to divide IDs evenly across the number of workers
$batchSize = ceil($totalIds / $workers);
// The last batch gets whatever is left over
$lastBatch = $totalIds % $batchSize;
// The number of IDs (rows) to divide the overall
// task into sub-batches
$rowsToFetch = 5000;

print "Total IDs: " . $totalIds . "\n";
print "Batch Size: " . $batchSize . "\n";
print "Last Batch: " . $lastBatch . "\n";

$producer = function(int $worker, int $startId, int $endId, int $fetchSize) {
    $tempMinId = $startId;
    $tempMaxId = $tempMinId + $fetchSize;
    $fetchCount = 1;
   
    print "Worker " . $worker . " working on IDs from " . $startId . " to " . $endId . "\n";
   
    while($tempMinId < $endId) {
        for($i = $tempMinId; $i < $tempMaxId; $i++) {
            $usleep = rand(500000, 1000000);
            usleep($usleep);
            print "Worker " . $worker .  " finished batch " . $fetchCount . " from ID " . $tempMinId . " to " . $tempMaxId . "\n";
            // Need to explicitly break out of the for loop once complete or else it will forever process only the first sub-batch
            break;
        }
       
        // Now we move on to the next sub-batch for this worker
        $tempMinId = $tempMaxId;
        $tempMaxId = $tempMinId + $fetchSize;
        if($tempMaxId > $endId) {
            $tempMaxId = $endId;
        }
        // Introduce some timing randomness
        // $sleep = rand(1,5);
        // sleep($sleep);
        // $fetchCount++;
    }
   
    // This worker has completed their entire batch
    print "Worker " . $worker .  " finished\n";
   
};

// Create our workers and have them start working on their task
// In this case, it's a set of 171392 IDs to process
for($i = 0; $i < $workers; $i++) {
    $startId = $minId + ($i * $batchSize);
    $endId = $startId + $batchSize;
    if($i == ($workers - 1)) {
        $endId = $maxId;
    }
    $args = array(($i+1), $startId, $endId, $rowsToFetch);
    \parallel\run($producer, $args);
}
```


### ===🗝 • Philosophy

参考 Rust - Fearless Concurrency

在并发模型上面，Rust 是典型的 Actor Model，而 Go 则是 CSP - Communicating Sequential Processes Model。在语法上面 Rust 和 Go 非常类似，都是通过 Channel 来实现自己的模型，但是具体的行为却有些细微的差别。

在 CSP 并发模型，进程与进程之间通过一个管道来进行通信。消息可以顺序的填入这个管道，也可以被逐次的从管道取出。注意到这个管道并不归属于某个进程。传统上，CSP 管道没有缓存，填入与取出是同步的，由此也就保证了消息不会在通信的过程中丢失。Go 额外的支持了带 buffer 的管道，用于提供与 AM 模型类似的异步通信。

This section contains philosophies important to writing parallel code and some details about the internal implementation of parallel. 


⚠Do not communicate by sharing memory; instead, share memory by communicating.

This philosophy which is embraced by parallel has its origins in Go, one of the most widely admired if not used platforms for writing parallel code at the moment.Go programmers have to work hard to live up to this ideal: PHP and parallel do all the hard work for the programmer, and by default. 

In conventional threading models found in other languages, generally threads are communicating with one another through nothing more than by virtue of the fact thatthey operate in the same address space.The programmer must deploy mutual exclusion, condition variables, and other low level threading or synchronization primitives in order to ensure proper communicationof state and consistency. 

When the conventional model is inversed, it means that threads only share memory as a result of communication (a variable is passed over a Channel for example). 

When parallel passes a variable from one thread to another by any means - Task arguments, return via Future, and Channels - it is passed by value.In all but the case of unbuffered channels, the variable is also buffered so that it may not change (or be destroyed) before it is used in whichever thread the variableis being passed to. An unbuffered read over a channel is the only instance in which a thread directly reads memory allocated by another thread, it can do so safely becausethe thread that owns the memory is waiting for the read to complete before it can continue to manipulate it, and the thread that does not own the memory reads by value. Whenboth threads continue, they are no longer sharing memory. 

This makes writing and reasoning about parallel code much easier than the conventional model of threading. It means the programmer does not need to consider that threadsmay be manipulating data concurrently, because that is not possible. 

This also makes PHP the perfect platform for implementing a parallel concurrency API based on CSP (message passing over channels), because PHP itself is shared nothing -PHP threads operate in their own virtual address space by default, and so may only share memory by communicating. 


⚠Data should have a definitive single owner

When approaching the CSP model for the first time, a programmer versed in the traditional model of threading may find themselves looking for concurrent data structures,because that is what they are used too: they pass around shared objects for manipulation. 

When it comes to the CSP model, there is no need for data structures to be shared by many tasks, and indeed, it is simpler if they are not. The data should be ownedby a single task, changes to (or operations on) that data structure should be communicated over channels and performed by the owner of the data, the success, failure,or result (state) of the change (or operation) being communicated back. 

Once again the share nothing nature of PHP and copy by value nature of parallel helps the programmer to achieve this goal, no data will be shared by accident,only ever as a result of communication. 


### ===🗝 • Functional API
• parallel\bootstrap — Bootstrapping
• parallel\run — Execution

The parallel\Runtime API provides a great degree of control to the power PHP programmer, and those intimately familiar with writing applications that useparallel concurrency. 

The functional API provides less control in exchange for the ability to make decisions for the programmer: 

◦ all executing runtimes are bootstrapped identically
◦ scheduling is determined by the API, not the programmer

parallel\run() provides the guarantee that the task will begin to execute in parallel as soon as allowed by hardware and operating system constraints, withoutneedlessly creating runtimes. For most applications the functional API should be preferred. 


#### parallel\bootstrap 

(1.0.0)

parallel\bootstrap — Bootstrapping


Description 

    parallel\bootstrap(string $file): void

Shall use the provided file to bootstrap all runtimes created for automatic scheduling via parallel\run(). 


Parameters 

file
Path to the file to bootstrap all runtimes. 


Return Values 

No value is returned. 


Errors/Exceptions 

Warning 
Shall throw parallel\Runtime\Error\Bootstrap if previously called for this process. 

Warning 
Shall throw parallel\Runtime\Error\Bootstrap if called after parallel\run(). 


#### parallel\run 

(1.0.0)

parallel\run — Execution


Description 

    parallel\run(Closure $task): ?Future

Shall schedule task for execution in parallel. 

    parallel\run(Closure $task, array $argv): ?Future

Shall schedule task for execution in parallel, passing argv at execution time. 


#### Automatic Scheduling 

If a \parallel\Runtime internally created and cached by a previous call to parallel\run() is idle,it will be used to execute the task. If no \parallel\Runtime is idle parallel will create and cache a \parallel\Runtime. 


Note: 

\parallel\Runtime objects created by the programmer are not used for automatic scheduling. 


Parameters 
task
A Closure with specific characteristics. 
argv
An array of arguments with specific characteristics to be passed to task at execution time. 


#### Task Characteristics 

Closures scheduled for parallel execution must not: 

• accept or return by reference
• accept or return internal objects (see notes)
• execute a limited set of instructions


Instructions prohibited in Closures intended for parallel execution are: 

• yield
• use by-reference
• declare class
• declare named function


Note: 

Nested closures may yield or use by-reference, but must not contain class or named function declarations. 


Note: 

No instructions are prohibited in the files which the task may include. 


Arguments Characteristics 

Arguments must not: 

• contain references
• contain resources
• contain internal objects (see notes)


Note: 

In the case of file stream resources, the resource will be cast to the file descriptor and passed as int where possible, this is unsupported on Windows. 


#### Internal Objects Notes 

Internal objects generally use a custom structure which cannot be copied by value safely, PHP currently lacks the mechanics to do this (without serialization)and so only objects that do not use a custom structure may be shared. 

Some internal objects do not use a custom structure, for example parallel\Events\Event and so may be shared. 

Closures are a special kind of internal object and support being copied by value, and so may be shared. 

Channels are central to writing parallel code and support concurrent access and execution by necessity, and so may be shared. 

Warning 
A user class that extends an internal class may use a custom structure as defined by the internal class, in which case they cannot be copied by value safely,and so may not be shared. 


Return Values 

Warning 
The return parallel\Future must not be ignored when the task contains a return or throw statement. 


Exceptions 

Warning 
Shall throw parallel\Runtime\Error\Closed if parallel\Runtime was closed. 

Warning 
Shall throw parallel\Runtime\Error\IllegalFunction if task is a closure created from an internal function. 

Warning 
Shall throw parallel\Runtime\Error\IllegalInstruction if task contains illegal instructions. 

Warning 
Shall throw parallel\Runtime\Error\IllegalParameter if task accepts or argv contains illegal variables. 

Warning 
Shall throw parallel\Runtime\Error\IllegalReturn if task returns illegally. 


### ===🗝 • parallel\Runtime — The parallel\Runtime class
• `parallel\Runtime::__construct` — Runtime Construction
• parallel\Runtime::run — Execution
• parallel\Runtime::close — Runtime Graceful Join
• parallel\Runtime::kill — Runtime Join

Runtime Objects 

Each runtime represents a single PHP thread, the thread is created (and bootstrapped) upon construction.The thread then waits for tasks to be scheduled: Scheduled tasks will be executed FIFO and then the thread will resume waiting untilmore tasks are scheduled, or it's closed, killed, or destroyed by the normal scoping rules of PHP objects. 

⚠Warning 
When a runtime is destroyed by the normal scoping rules of PHP objects, it will first execute all of the tasks that were scheduled,and block while doing so. 


Runtime Bootstrapping 

When a new runtime is created, it does not share code with the thread (or process) that created it. This means it doesn't have the sameclasses and functions loaded, nor the same autoloader set. In some cases, a very lightweight runtime is desirable because the tasks thatwill be scheduled do not need access to the code in the parent thread. In those cases where the tasks do need to access the same code, itis enough to set an autoloader as the bootstrap. 


✒Note: 

preloading may be used in conjunction with parallel, in this case preloaded code is available without bootstrapping 


Class synopsis 


```php
final class parallel\Runtime {

    /* Create */

    public __construct()

    public __construct(string $bootstrap)

    /* Execute */

    public run(Closure $task): ?Future

    public run(Closure $task, array $argv): ?Future

    /* Join */

    public close(): void

    public kill(): void
}
```

#### • `parallel\Runtime::__construct` — Runtime Construction

parallel\Runtime::__construct — Runtime Construction


Description 

    public parallel\Runtime::__construct()

Shall construct a new runtime without bootstrapping. 

    public parallel\Runtime::__construct(string $bootstrap)

Shall construct a bootstrapped runtime. 


Parameters 
bootstrap
The location of a bootstrap file, generally an autoloader. 


Exceptions 

⚠Warning 
Shall throw parallel\Runtime\Error if thread could not be created 

⚠Warning 
Shall throw parallel\Runtime\Bootstrap if bootstrapping failed 


#### • parallel\Runtime::run — Execution

parallel\Runtime::run — Execution


Description 

    public parallel\Runtime::run(Closure $task): ?Future

Shall schedule task for execution in parallel. 

    public parallel\Runtime::run(Closure $task, array $argv): ?Future

Shall schedule task for execution in parallel, passing argv at execution time. 


Parameters 
task
A Closure with specific characteristics. 
argv
An array of arguments with specific characteristics to be passed to task at execution time. 


Task Characteristics 

Closures scheduled for parallel execution must not: 

• accept or return by reference
• accept or return internal objects (see notes)
• execute a limited set of instructions


Instructions prohibited in Closures intended for parallel execution are: 

• yield
• use by-reference
• declare class
• declare named function


Note: 

Nested closures may yield or use by-reference, but must not contain class or named function declarations. 


Note: 

No instructions are prohibited in the files which the task may include. 


Arguments Characteristics 

Arguments must not: 

• contain references
• contain resources
• contain internal objects (see notes)


Note: 

In the case of file stream resources, the resource will be cast to the file descriptor and passed as int where possible, this is unsupported on Windows. 


Internal Objects Notes 

Internal objects generally use a custom structure which cannot be copied by value safely, PHP currently lacks the mechanics to do this (without serialization)and so only objects that do not use a custom structure may be shared. 

Some internal objects do not use a custom structure, for example parallel\Events\Event and so may be shared. 

Closures are a special kind of internal object and support being copied by value, and so may be shared. 

Channels are central to writing parallel code and support concurrent access and execution by necessity, and so may be shared. 

⚠Warning 
A user class that extends an internal class may use a custom structure as defined by the internal class, in which case they cannot be copied by value safely,and so may not be shared. 


Return Values 

⚠Warning 
The return parallel\Future must not be ignored when the task contains a return or throw statement. 


Exceptions 

⚠Warning 
Shall throw parallel\Runtime\Error\Closed if parallel\Runtime was closed. 

⚠Warning 
Shall throw parallel\Runtime\Error\IllegalFunction if task is a closure created from an internal function. 

⚠Warning 
Shall throw parallel\Runtime\Error\IllegalInstruction if task contains illegal instructions. 

⚠Warning 
Shall throw parallel\Runtime\Error\IllegalParameter if task accepts or argv contains illegal variables. 

⚠Warning 
Shall throw parallel\Runtime\Error\IllegalReturn if task returns illegally. 

#### • parallel\Runtime::close — Runtime Graceful Join


parallel\Runtime::close — Runtime Graceful Join


Description 

	public parallel\Runtime::close(): void

Shall request that the runtime shutsdown. 


Note: 

Tasks scheduled for execution will be executed before the shutdown occurs. 


Exceptions 

⚠Warning 
Shall throw parallel\Runtime\Error\Closed if Runtime was already closed. 


#### • parallel\Runtime::kill — Runtime Join


parallel\Runtime::kill — Runtime Join


Description 

	public parallel\Runtime::kill(): void

Shall attempt to force the runtime to shutdown. 


Note: 

Tasks scheduled for execution will not be executed, the currently running task shall be interrupted. 


⚠Warning 
Internal function calls in progress cannot be interrupted. 


Exceptions 

⚠Warning 
Shall throw parallel\Runtime\Error\Closed if Runtime was closed. 


### ===🗝 • parallel\Future — The parallel\Future class
• parallel\Future::cancel — Cancellation
• parallel\Future::cancelled — State Detection
• parallel\Future::done — State Detection
• parallel\Future::value — Resolution


### ===🗝 • parallel\Channel — The parallel\Channel class
• `parallel\Channel::__construct` — Channel Construction
• parallel\Channel::make — Access
• parallel\Channel::open — Access
• parallel\Channel::recv — Sharing
• parallel\Channel::send — Sharing
• parallel\Channel::close — Closing


### ===🗝 • parallel\Events — The parallel\Events class
• parallel\Events::setBlocking — Behaviour
• parallel\Events::setTimeout — Behaviour
• parallel\Events::setInput — Input
• parallel\Events::addChannel — Targets
• parallel\Events::addFuture — Targets
• parallel\Events::remove — Targets
• parallel\Events::poll — Polling


### ===🗝 • parallel\Events\Input — The parallel\Events\Input class
• parallel\Events\Input::add — Inputs
• parallel\Events\Input::clear — Inputs
• parallel\Events\Input::remove — Inputs


### ===🗝 • parallel\Events\Event — The parallel\Events\Event class
• parallel\Events\Event\Type — The parallel\Events\Event\Type class
• parallel\Sync — The parallel\Sync class
• `parallel\Sync::__construct` — Construction
• parallel\Sync::get — Access
• parallel\Sync::set — Access
• parallel\Sync::wait — Synchronization
• parallel\Sync::notify — Synchronization
• `parallel\Sync::__invoke` — Synchronization


## ==⚡ • pthreads
• Introduction
• Installing/Configuring
• Predefined Constants
• Threaded — The Threaded class
• Thread — The Thread class
• Worker — The Worker class
• Collectable — The Collectable interface
• Pool — The Pool class
• Volatile — The Volatile class


### ===🗝 • Introduction

pthreads is an object-orientated API that provides all of the tools neededfor multi-threading in PHP. PHP applications can create, read, write,execute and synchronize with Threads, Workers and Threaded objects. 

⚠ Warning 
This extension is considered unmaintained and dead. 

Tip 
Consider using parallel instead. 

⚠ Warning 
The pthreads extension cannot be used in a web server environment.Threading in PHP is therefore restricted to CLI-based applications only. 

⚠ Warning 
pthreads (v3) can only be used with PHP 7.2+: This is due to ZTSmode being unsafe in 7.0 and 7.1. 


### ===🗝 • Installing/Configuring


### ===🗝 • Requirements


### ===🗝 • Installation


### ===🗝 • Runtime Configuration


## ==⚡ • Predefined Constants

### ===🗝 • Threaded — The Threaded class


### ===🗝 • Threaded::chunk — Manipulation


### ===🗝 • Threaded::count — Manipulation


### ===🗝 • Threaded::extend — Runtime Manipulation


### ===🗝 • Threaded::isRunning — State Detection


### ===🗝 • Threaded::isTerminated — State Detection


### ===🗝 • Threaded::merge — Manipulation


### ===🗝 • Threaded::notify — Synchronization


### ===🗝 • Threaded::notifyOne — Synchronization


### ===🗝 • Threaded::pop — Manipulation


### ===🗝 • Threaded::run — Execution


### ===🗝 • Threaded::shift — Manipulation


### ===🗝 • Threaded::synchronized — Synchronization


### ===🗝 • Threaded::wait — Synchronization


## ==⚡ • Thread — The Thread class

### ===🗝 • Thread::getCreatorId — Identification


### ===🗝 • Thread::getCurrentThread — Identification


### ===🗝 • Thread::getCurrentThreadId — Identification


### ===🗝 • Thread::getThreadId — Identification


### ===🗝 • Thread::isJoined — State Detection


### ===🗝 • Thread::isStarted — State Detection


### ===🗝 • Thread::join — Synchronization


### ===🗝 • Thread::start — Execution


## ==⚡ • Worker — The Worker class

### ===🗝 • Worker::collect — Collect references to completed tasks


### ===🗝 • Worker::getStacked — Gets the remaining stack size


### ===🗝 • Worker::isShutdown — State Detection


### ===🗝 • Worker::shutdown — Shutdown the worker


### ===🗝 • Worker::stack — Stacking work


### ===🗝 • Worker::unstack — Unstacking work


## ==⚡ • Collectable — The Collectable interface

### ===🗝 • Collectable::isGarbage — Determine whether an object has been marked as garbage


## ==⚡ • Pool — The Pool class

### ===🗝 • Pool::collect — Collect references to completed tasks


### ===🗝 • `Pool::__construct` — Creates a new Pool of Workers


### ===🗝 • Pool::resize — Resize the Pool


### ===🗝 • Pool::shutdown — Shutdown all workers


### ===🗝 • Pool::submit — Submits an object for execution


### ===🗝 • Pool::submitTo — Submits a task to a specific worker for execution


## ==⚡ • Volatile — The Volatile class


## ==⚡ • pht
• Introduction
• Installing/Configuring
• pht\Thread — The Thread class
• pht\Runnable — The Runnable interface
• pht\HashTable — The HashTable class
• pht\Vector — The Vector class
• pht\Queue — The Queue class
• pht\AtomicInteger — The AtomicInteger class
• pht\Threaded — The Threaded interface


## ==⚡ • Semaphore — Semaphore, Shared Memory and IPC
• Introduction
• Installing/Configuring
• Predefined Constants
• Semaphore Functions
• SysvMessageQueue — The SysvMessageQueue class
• SysvSemaphore — The SysvSemaphore class
• SysvSharedMemory — The SysvSharedMemory class


## ==⚡ • Shared Memory
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Shared Memory Functions
• Shmop — The Shmop class


## ==⚡ • Sync
• Introduction
• Installing/Configuring
• Predefined Constants
• SyncMutex — The SyncMutex class
• SyncSemaphore — The SyncSemaphore class
• SyncEvent — The SyncEvent class
• SyncReaderWriter — The SyncReaderWriter class
• SyncSharedMemory — The SyncSharedMemory class


# =🚩 • Other Basic Extensions


### • GeoIP — Geo IP Location
• Introduction
• Installing/Configuring
• Predefined Constants
• GeoIP Functions


### • FANN — FANN (Fast Artificial Neural Network)
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Fann Functions
• FANNConnection — The FANNConnection class


### • Igbinary
• Introduction
• Installing/Configuring
• Igbinary Functions


### • JSON — JavaScript Object Notation
• Introduction
• Installing/Configuring
• Predefined Constants
• JsonException — The JsonException class
• JsonSerializable — The JsonSerializable interface
• JSON Functions


### • Lua
• Introduction
• Installing/Configuring
• Lua — The Lua class
• LuaClosure — The LuaClosure class


### • LuaSandbox
• Introduction
• Installing/Configuring
• Differences from Standard Lua
• Examples
• LuaSandbox — The LuaSandbox class
• LuaSandboxFunction — The LuaSandboxFunction class
• LuaSandboxError — The LuaSandboxError class
• LuaSandboxErrorError — The LuaSandboxErrorError class
• LuaSandboxFatalError — The LuaSandboxFatalError class
• LuaSandboxMemoryError — The LuaSandboxMemoryError class
• LuaSandboxRuntimeError — The LuaSandboxRuntimeError class
• LuaSandboxSyntaxError — The LuaSandboxSyntaxError class
• LuaSandboxTimeoutError — The LuaSandboxTimeoutError class


### • Misc. — Miscellaneous Functions
• Introduction
• Installing/Configuring
• Predefined Constants
• Misc. Functions
• Changelog


### • Seaslog
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Seaslog Functions
• SeasLog — The SeasLog class


### • SPL — Standard PHP Library (SPL)


• Introduction
• Installing/Configuring
• Predefined Constants
• Datastructures
• Iterators
• Interfaces
• Exceptions
• SPL Functions
• File Handling
• Miscellaneous Classes and Interfaces


### • Streams
• Introduction
• Installing/Configuring
• Predefined Constants
• Stream Filters
• Stream Contexts
• Stream Errors
• Examples
• php_user_filter — The php_user_filter class
• streamWrapper — The streamWrapper class
• Stream Functions


### • Swoole
• Introduction
• Installing/Configuring
• Predefined Constants
• Swoole Functions
• Swoole\Async — The Swoole\Async class
• Swoole\Atomic — The Swoole\Atomic class
• Swoole\Buffer — The Swoole\Buffer class
• Swoole\Channel — The Swoole\Channel class
• Swoole\Client — The Swoole\Client class
• Swoole\Connection\Iterator — The Swoole\Connection\Iterator class
• Swoole\Coroutine — The Swoole\Coroutine class
• Swoole\Event — The Swoole\Event class
• Swoole\Exception — The Swoole\Exception class
• Swoole\Http\Client — The Swoole\Http\Client class
• Swoole\Http\Request — The Swoole\Http\Request class
• Swoole\Http\Response — The Swoole\Http\Response class
• Swoole\Http\Server — The Swoole\Http\Server class
• Swoole\Lock — The Swoole\Lock class
• Swoole\Mmap — The Swoole\Mmap class
• Swoole\MySQL — The Swoole\MySQL class
• Swoole\MySQL\Exception — The Swoole\MySQL\Exception class
• Swoole\Process — The Swoole\Process class
• Swoole\Redis\Server — The Swoole\Redis\Server class
• Swoole\Serialize — The Swoole\Serialize class
• Swoole\Server — The Swoole\Server class
• Swoole\Table — The Swoole\Table class
• Swoole\Timer — The Swoole\Timer class
• Swoole\WebSocket\Frame — The Swoole\WebSocket\Frame class
• Swoole\WebSocket\Server — The Swoole\WebSocket\Server class


### • Tidy
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• tidy — The tidy class
• tidyNode — The tidyNode class
• Tidy Functions


### • Tokenizer
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• PhpToken — The PhpToken class
• Tokenizer Functions


### • URLs
• Introduction
• Installing/Configuring
• Predefined Constants
• URL Functions


### • V8js — V8 Javascript Engine Integration
• Introduction
• Installing/Configuring
• Examples
• V8Js — The V8Js class
• V8JsException — The V8JsException class


### • Yaml — YAML Data Serialization
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Callbacks
• Yaml Functions


### • Yaf — Yet Another Framework
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Application Configuration
• Yaf_Application — The Yaf_Application class
• Yaf_Bootstrap_Abstract — The Yaf_Bootstrap_Abstract class
• Yaf_Dispatcher — The Yaf_Dispatcher class
• Yaf_Config_Abstract — The Yaf_Config_Abstract class
• Yaf_Config_Ini — The Yaf_Config_Ini class
• Yaf_Config_Simple — The Yaf_Config_Simple class
• Yaf_Controller_Abstract — The Yaf_Controller_Abstract class
• Yaf_Action_Abstract — The Yaf_Action_Abstract class
• Yaf_View_Interface — The Yaf_View_Interface class
• Yaf_View_Simple — The Yaf_View_Simple class
• Yaf_Loader — The Yaf_Loader class
• Yaf_Plugin_Abstract — The Yaf_Plugin_Abstract class
• Yaf_Registry — The Yaf_Registry class
• Yaf_Request_Abstract — The Yaf_Request_Abstract class
• Yaf_Request_Http — The Yaf_Request_Http class
• Yaf_Request_Simple — The Yaf_Request_Simple class
• Yaf_Response_Abstract — The Yaf_Response_Abstract class
• Yaf_Route_Interface — The Yaf_Route_Interface class
• Yaf_Route_Map — The Yaf_Route_Map class
• Yaf_Route_Regex — The Yaf_Route_Regex class
• Yaf_Route_Rewrite — The Yaf_Route_Rewrite class
• Yaf_Router — The Yaf_Router class
• Yaf_Route_Simple — The Yaf_Route_Simple class
• Yaf_Route_Static — The Yaf_Route_Static class
• Yaf_Route_Supervar — The Yaf_Route_Supervar class
• Yaf_Session — The Yaf_Session class
• Yaf_Exception — The Yaf_Exception class
• Yaf_Exception_TypeError — The Yaf_Exception_TypeError class
• Yaf_Exception_StartupError — The Yaf_Exception_StartupError class
• Yaf_Exception_DispatchFailed — The Yaf_Exception_DispatchFailed class
• Yaf_Exception_RouterFailed — The Yaf_Exception_RouterFailed class
• Yaf_Exception_LoadFailed — The Yaf_Exception_LoadFailed class
• Yaf_Exception_LoadFailed_Module — The Yaf_Exception_LoadFailed_Module class
• Yaf_Exception_LoadFailed_Controller — The Yaf_Exception_LoadFailed_Controller class
• Yaf_Exception_LoadFailed_Action — The Yaf_Exception_LoadFailed_Action class
• Yaf_Exception_LoadFailed_View — The Yaf_Exception_LoadFailed_View class


### • Yaconf
• Introduction
• Installing/Configuring
• Predefined Constants
• Yaconf — The Yaconf class


### • Taint
• Introduction
• Installing/Configuring
• More Details
• Taint Functions


### • Data Structures
• Introduction
• Installing/Configuring
• Predefined Constants
• Examples
• Collection — The Collection interface
• Hashable — The Hashable interface
• Sequence — The Sequence interface
• Vector — The Vector class
• Deque — The Deque class
• Map — The Map class
• Pair — The Pair class
• Set — The Set class
• Stack — The Stack class
• Queue — The Queue class
• PriorityQueue — The PriorityQueue class


### • var_representation
• Introduction
• Installing/Configuring
• Predefined Constants
• var_representation Functions


## ==⚡ • GeoIP — Geo IP Location

## ==⚡ • FANN — FANN (Fast Artificial Neural Network)

## ==⚡ • Igbinary

## ==⚡ • JSON — JavaScript Object Notation

## ==⚡ • Lua

## ==⚡ • LuaSandbox

## ==⚡ • Misc. — Miscellaneous Functions

## ==⚡ • Seaslog

## ==⚡ • SPL — Standard PHP Library (SPL)


### ===🗝 • Introduction

The Standard PHP Library (SPL) is a collection of interfaces and classes that are meant to solvecommon problems. 

SPL provides a set of standard datastructure, a set of iterators to traverse over objects, a set of interfaces, a set of standard Exceptions, a number of classes to work with files and it provides a set of functions like spl_autoload_register() 


### ===🗝 • Installing/Configuring


• Requirements

No external libraries are needed to build this extension.

• Installation

There is no installation needed to use these functions; they are part of the PHP core.

• Runtime Configuration

This extension has no configuration directives defined in php.ini.

• Resource Types

This extension has no resource types defined.


### ===🗝 • Predefined Constants
#### • Datastructures
#### • SplDoublyLinkedList — The SplDoublyLinkedList class
#### • SplStack — The SplStack class
#### • SplQueue — The SplQueue class
#### • SplHeap — The SplHeap class
#### • SplMaxHeap — The SplMaxHeap class
#### • SplMinHeap — The SplMinHeap class
#### • SplPriorityQueue — The SplPriorityQueue class
#### • SplFixedArray — The SplFixedArray class
#### • SplObjectStorage — The SplObjectStorage class


### ===🗝 • Iterators
#### • AppendIterator — The AppendIterator class
#### • ArrayIterator — The ArrayIterator class
#### • CachingIterator — The CachingIterator class
#### • CallbackFilterIterator — The CallbackFilterIterator class
#### • DirectoryIterator — The DirectoryIterator class
#### • EmptyIterator — The EmptyIterator class
#### • FilesystemIterator — The FilesystemIterator class
#### • FilterIterator — The FilterIterator class
#### • GlobIterator — The GlobIterator class
#### • InfiniteIterator — The InfiniteIterator class
#### • IteratorIterator — The IteratorIterator class
#### • LimitIterator — The LimitIterator class
#### • MultipleIterator — The MultipleIterator class
#### • NoRewindIterator — The NoRewindIterator class
#### • ParentIterator — The ParentIterator class
#### • RecursiveArrayIterator — The RecursiveArrayIterator class
#### • RecursiveCachingIterator — The RecursiveCachingIterator class
#### • RecursiveCallbackFilterIterator — The RecursiveCallbackFilterIterator class
#### • RecursiveDirectoryIterator — The RecursiveDirectoryIterator class
#### • RecursiveFilterIterator — The RecursiveFilterIterator class
#### • RecursiveIteratorIterator — The RecursiveIteratorIterator class
#### • RecursiveRegexIterator — The RecursiveRegexIterator class
#### • RecursiveTreeIterator — The RecursiveTreeIterator class
#### • RegexIterator — The RegexIterator class


### ===🗝 • Interfaces
#### • Countable — The Countable interface
#### • OuterIterator — The OuterIterator interface
#### • RecursiveIterator — The RecursiveIterator interface
#### • SeekableIterator — The SeekableIterator interface


### ===🗝 • Exceptions
#### • BadFunctionCallException — The BadFunctionCallException class
#### • BadMethodCallException — The BadMethodCallException class
#### • DomainException — The DomainException class
#### • InvalidArgumentException — The InvalidArgumentException class
#### • LengthException — The LengthException class
#### • LogicException — The LogicException class
#### • OutOfBoundsException — The OutOfBoundsException class
#### • OutOfRangeException — The OutOfRangeException class
#### • OverflowException — The OverflowException class
#### • RangeException — The RangeException class
#### • RuntimeException — The RuntimeException class
#### • UnderflowException — The UnderflowException class
#### • UnexpectedValueException — The UnexpectedValueException class


### ===🗝 • SPL Functions
#### • class_implements — Return the interfaces which are implemented by the given class or interface
#### • class_parents — Return the parent classes of the given class
#### • class_uses — Return the traits used by the given class
#### • iterator_apply — Call a function for every element in an iterator
#### • iterator_count — Count the elements in an iterator
#### • iterator_to_array — Copy the iterator into an array
#### • spl_autoload_call — Try all registered `__autoload()` functions to load the requested class
#### • spl_autoload_extensions — Register and return default file extensions for spl_autoload
#### • spl_autoload_functions — Return all registered `__autoload()` functions
#### • spl_autoload_register — Register given function as `__autoload()` implementation
#### • spl_autoload_unregister — Unregister given function as `__autoload()` implementation
#### • spl_autoload — Default implementation for `__autoload()`
#### • spl_classes — Return available SPL classes
#### • spl_object_hash — Return hash id for given object
#### • spl_object_id — Return the integer object handle for given object


### ===🗝 • File Handling
#### • SplFileInfo — The SplFileInfo class
#### • SplFileObject — The SplFileObject class
#### • SplTempFileObject — The SplTempFileObject class


### ===🗝 • Miscellaneous Classes and Interfaces
#### • ArrayObject — The ArrayObject class
#### • SplObserver — The SplObserver interface
#### • SplSubject — The SplSubject interface


## ==⚡ • Streams

## ==⚡ • Swoole

## ==⚡ • Tidy

## ==⚡ • Tokenizer

## ==⚡ • URLs

## ==⚡ • V8js — V8 Javascript Engine Integration

## ==⚡ • Yaml — YAML Data Serialization

## ==⚡ • Yaf — Yet Another Framework

## ==⚡ • Yaconf

## ==⚡ • Taint

## ==⚡ • Data Structures

## ==⚡ • var_representation


# =🚩 • Other Services

# =🚩 • Search Engine Extensions

# =🚩 • Server Specific Extensions

# =🚩 • Session Extensions

# =🚩 • Text Processing

# =🚩 • Variable and Type Related Extensions

# =🚩 • Web Services

# =🚩 • Windows Only Extensions

# =🚩 • XML Manipulation

# =🚩 • GUI Extensions
