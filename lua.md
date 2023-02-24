
# 🚩 Intro & Installation
                                                      [contents] [index] *intro*
+ http://luabinaries.sourceforge.net/
+ http://luabinaries.sourceforge.net/download.html
+ [官方网站](http://www.lua.org/download.html)
+ [参考手册](http://www.lua.org/manual/5.3/)
+ [云风的Blog](https://blog.codingnow.com/)
+ [lua-users wiki](http://lua-users.org/wiki)
+ [LuaJIT](https://github.com/LuaJIT/LuaJIT)
+ [Ravi](https://the-ravi-programming-language.readthedocs.io/)

Lua is a scripting language born in 1993 at PUC-Rio, the
Pontifical Catholic University of Rio de Janeiro in Brazil.

Lua 是巴西里约热内卢天主教大学里的一个研究小组于 1993 年开发的嵌入式、轻量化语言，用于嵌入应用
程序中，从而为应用程序提供灵活的扩展和定制功能。

Lua 的口号是：

    Lua - An Extensible Extension Language

Linux & Mac 上安装 Lua 安装非常简单，只需要下载源码包并在终端解压编译即可。

下载源代码编译安装 5.4.3 版本：

    curl -R -O http://www.lua.org/ftp/lua-5.4.3.tar.gz
    tar zxf lua-5.4.3.tar.gz
    cd lua-5.4.3
    make linux test
    make install

Lua 是一种轻量小巧的脚本语言，设计目的是嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。

- 轻量级: 它用标准 C 语言编写并以源代码形式开放，编译后 100K 左右，可以很方便的嵌入别的程序里。
- 可扩展: Lua 提供了非常易于使用的扩展接口和机制：由宿主语言提供，如 C/C++，Lua 当做内置的功能一样使用。
- 支持面向过程 procedure-oriented 编程和函数式编程 functional programming ；
- 自动内存管理；只提供了一种通用类型的表 Table，用它可以实现数组，哈希表，集合，对象；
- 语言内置模式匹配；闭包 Closure；函数也可以看做一个值；协程，但并非操作系统所支持的线程；
- 通过闭包和 Table 可以很方便地支持面向对象编程所需要的一些关键机制，比如数据抽象，虚函数，继承和重载等。

Lua 支持八种数据类型：nil、boolean、number、string、userdata、table、function 和 thread，
后者代表协程。前五个并不奇怪，而最后三个赋予 Lua 独特风味。Lua 没在语言规则上制定 OOP，支可以
通过数据结构灵活地实现它们。

Table 是动态的，随着元素的添加或者回收增长或者缩小。Lua 4.0 之前，Table 严格的按照 Hash 
方式实现，后续版本为了提升性能和节省空间，Table 内部重构为 Array 部分和 Hash 部分两块。

Lua 脚本与 C/C++ 代码互相调用很便利，这使得 Lua 在应用程序中可以被广泛应用。不仅仅作为扩展脚本，
也可以作为普通的配置文件，代替 XML，ini 等文件格式，并且更容易理解和维护。

Lua 由标准 C 编写而成，代码简洁优美，几乎在所有操作系统和平台上都可以编译，运行。一个完整的 Lua 
解释器不过 200k，目前脚本引擎中，Lua 的速度是最快的，这一切都决定了 Lua 嵌入式脚本的最佳选择。

LuaJIT is a Just-In-Time (JIT) compiler for the Lua programming language.

Ravi 是 Lua 的一种方言，具有有限的可选静态类型，通过 MIR 及 LLVM 支持的 JIT 编译器。

评测一般表明 LuaJIT 是最快的 JIT，甚至超越 V8 与 Java。标准 Lua 和 LuaJIT 是两回事儿，LuaJIT 只是兼容了 Lua 5.1 的语法，但要把这个语言用到像宣称那样高性能，并不是那么容易。

Lua 应用场景

- 游戏开发
- 独立应用脚本
- Web 应用脚本
- 扩展和数据库插件如：MySQL Proxy 和 MySQL WorkBench
- 安全系统，如入侵检测系统

Lua 提供了交互式编程模式
通过命令 lua -i 或 lua 来启用，在命令行中输入程序并立即查看效果。

Lua 脚本语言，作为一个精简的嵌入式脚本语言，可以运行于 C++，C#，Golang 等宿主语言，只要实现 
lua 解析器。通常作为游戏引擎领域嵌入式脚本，如 cocos2d-x、Unity，由于引擎自身使用的 C++ 或者 
C# 编写，游戏前端发布后，发现 bug 或者发布新逻辑，都需要重新出包，周期过长。Lua 作为脚本语言，可以
以资源的形式下载，重新加载运行，周期快，且效率损失有限。

服务端使用 Nginx + Lua，有人做了框架 OpenResty，基本也是利用 Nginx 的高性能 + Lua 脚本的
灵活性，逻辑修改之后只需要触发重新加载脚本就可以，开发运行效率都比较高，相比传统 C++、Java 等需要
重新编译部署，开发效率高很多。

- 作为配置文件：灵活强大，可以加入计算，甚至复杂逻辑
- 作为插件脚本：实时更新，不需要编译环节，比如 Nginx
- 开发简单DSL：快速小巧，语法简洁，比如跨平台UI布局描述
- 开发顶层项目：并无不可，无缝结合 C，更强大，比如 Kong

>   OpenResty （nginx 的 lua 模块）
>   Vim has Lua scripting support starting with version 7.3
>   MySQL Workbench uses Lua for its extensions and add-ons.
>   lighttpd web server uses Lua for hook scripts as well as a modern replacement for the Cache Meta Language.
>   Apache HTTP Server can use Lua anywhere in the request process (since version 2.3, via the core mod_lua module).
>   Adobe Photoshop Lightroom uses Lua for its user interface.
>   Awesome、Scite 的配置
>   Redis 支持服务端 Lua 脚本
>   PostgreSQL 支持服务端 Lua 脚本（以及其它一些语言）
>   LuaTeX，基于 TeX 的排版引擎
>   MediaWiki（维基百科所使用的软件）大量使用 Lua 编写的模块，用于生成特定的页面内容
>   WeeChat 也支持 Lua 脚本编写插件（以及其它一些语言）
>   Wireshark 支持 Lua 脚本编写插件



# 🚩 Lua Features
                                                   [contents] [index] *features*
+ [The Evolution of Lua](http://www.lua.org/doc/hopl.pdf)
- http://www.lua.org/versions.html

Lua Version History
                                                                   *lua-history*

    1993 1994  1995  1996  1997 1998 1999 2000 2001 2002 2003 2004 2005 2006
     ⬆    ⬆    ⬆  ⬆   ⬆ ⬆    ⬆    ⬆    ⬆     ⬆           ⬆              ⬆
    1.0  1.1   2.1/2 2.4/5  3.0  3.1  3.2   4.0         5.0            5.1

    Figure 1. The releases of Lua.

                         |  1.0 1.1 2.1 2.2 2.4 2.5 3.0 3.1 3.2 4.0 5.0 5.1 5.4
    ---------------------|-----------------------------------------------------
    constructors         |   x   x   x   x   x   x   x   x   x   x   x   x   x
    garbage collection   |   x   x   x   x   x   x   x   x   x   x   x   x   x
    extensible semantics |   ·   ·   x   x   x   x   x   x   x   x   x   x   x
    support for OOP      |   ·   ·   x   x   x   x   x   x   x   x   x   x   x
    long strings         |   ·   ·   ·   x   x   x   x   x   x   x   x   x   x
    debug API            |   ·   ·   ·   x   x   x   x   x   x   x   x   x   x
    external compiler    |   ·   ·   ·   ·   x   x   x   x   x   x   x   x   x
    vararg functions     |   ·   ·   ·   ·   ·   x   x   x   x   x   x   x   x
    pattern matching     |   ·   ·   ·   ·   ·   x   x   x   x   x   x   x   x
    conditional compilation  ·   ·   ·   ·   ·   ·   x   x   x   ·   ·   ·   ·
    anonymous, closures  |   ·   ·   ·   ·   ·   ·   ·   x   x   x   x   x   x
    debug library        |   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x   x   x
    multi-state API      |   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x   x
    for statement        |   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x   x
    long comments        |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x
    full lexical scoping |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x
    booleans             |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x
    coroutines           |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x   x
    incremental GC       |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x
    module system        |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x   x
    bitwise operations   |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x
    generational mode gc |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x
    const variables      |   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   x

                         |  1.0 1.1 2.1 2.2 2.4 2.5 3.0 3.1 3.2 4.0 5.0 5.1
    ---------------------|-------------------------------------------------
    libraries            |   4   4   4   4   4   4   4   4   5   6   8   9
    built-in functions   |   5   7  11  11  13  14  25  27  35   0   0   0
    API functions        |  30  30  30  30  32  32  33  47  41  60  76  79
    vm type (stack×reg)  |   S   S   S   S   S   S   S   S   S   S   R   R
    vm instructions      |  64  65  69  67  67  68  69 128  64  49  35  38
    keywords             |  16  16  16  16  16  16  16  16  16  18  21  21
    other tokens         |  21  21  23  23  23  23  24  25  25  25  24  26

    Table 1. The evolution of features in Lua.

Lua 版本变化比较大，特别是 Lua 5.1 5.2 5.4 等大变动版本，变动内容细节参考 readme 文档，或
⚡[ch8] - Incompatibilities with the Previous Version

Lua 脚本有以下一些基本的特性：

  1. Lua 一切都是变量，除了关键字。
  2. Lua 语句块使用 do ... end 括起来。  
  3. Lua 只有 false 和 nil 计算为 false，其它任何数据都计算为真值，包括 0！
  4. Lua 可以同时给多个变量赋值，值列表使用逗号分隔符，例如：a,b,c,d=1,2,3,4。
  5. Lua 函数也可以返回多值同时赋值给其它变量，赋值语句右边的值会依次赋给左边的变量。
  6. Lua 语言全局变量无须声明即可使用，初始值为 nil。
  7. Lua 语言不支持 ++ -- 或者 += -= 这类操作，但是支持求余 // 整除 % 与幂运算 ^。

Lua 会先计算赋值语句右边的表达式，然后再执行赋值操作，所以可以这样进行交换变量的值，如 a,b=b,a。
当变量个数和值的个数不一致时，= 号右侧多余值被忽略，左侧多余变量设置为 nil 值。

Lua 的运算符设计非常精简，大概需要保持语言的原汁原味，不希望像 Python 这些动态语言一样搞膨胀。
所以运算符号只有 7 个，除了四则运算，还有另外 3 个，求余 // 整除 % 与幂运算 ^。

Lua is a lexically scoped language. 词法作用域意思是变量从定义所在行开始到代码块结束为止。
参考 [§3.5] - Visibility Rules

Lua 变量有三种类型：全局变量、局部变量、表中的域。变量默认为全局变量，不管在语句块、或是函数内部，
除非显式定义为 local 局部变量，局部变量的作用域为从声明位置开始到所在语句块结束。

基本类型使用：

```lua
    a=1
    b="bad" .. "apple"
    c={}
    d=print

    print(_VERSION) --version info
    print(type(a))  --number
    print(type(b))  --string
    print(type(c))  --table
    print(type(d))  --function

    a, b = a+1, a+1         --> 1   1
    x, y = y, x             -- swap 'x' for 'y'
    a[i], a[j] = a[j], a[i] -- swap 'a[i]' for 'a[j]'
```

作用域测试：

```lua
    g = "_G['g']"
    print(_G['g'])  --access global symbol table

    a = "a"             -- global
    local b = "b"       -- local

    function scope()
        c = "c"
        local d = "d"
    end
    scope()
    print(c, d)         --> "c" nil

    do
        a = "a in block"
        local b = "b in block"
    end
    print(a, b)         --> "a" "b"
```


其它功能参考：

```lua
-- Multiple assignments are valid.
--  var1,var2=var3,var4
a,b,c,d,e = 1, 2, "three", "four", 5
print(a,b,c,d,e)

-- [§6.6] -  Table Manipulation
local list = {1,2,3,4};
print("length: ", #list)
print(table.concat(list,'=>', 2, #list))


-- Example -- Tables index style.
-- [§3.4.9] - Table Constructors
address={} -- empty address
address.Street="Wyman Street"
address.StreetNumber=360
address.AptNumber="2a"
address.City="Watertown"
address.State="Vermont"
address.Country="USA"
print(address.StreetNumber, address["AptNumber"])

t = {
    a = 100,
    b = function ()
        print("bad apple")
        return true
    end,
}
print(t)
print(t['a'])
print(t["a"])
print(t.a)
print(t.b())


-- Lua OOP
Shape = {area = 0}

function Shape:new (o,side)
 o = o or {}
 setmetatable(o, self)
 self.__index = self
 side = side or 0
 self.area = side*side;
 return o
end

function Shape:printArea ()
 print("area is ", self.area)
end

myshape = Shape:new(nil,10)
myshape:printArea()


-- Example 18   -- if elseif else statement

c=3
if c==1 then
    print("c is 1")
elseif c==2 then
    print("c is 2")
else
    print("c isn't 1 or 2, c is "..tostring(c))
end


-- Example 19   -- Conditional assignment.
-- value = test and x or y

a=1
b=(a==1) and "one" or "not one"
print(b)


-- Example 20   -- while statement.
a=1
while a~=5 do -- Lua uses ~= to mean not equal
    a=a+1
    io.write(a.." ")
end


-- Example 21   -- repeat until statement.

a=0
repeat
    a=a+1
    print(a)
until a==5


-- Example 22   -- for statement.
-- Numeric iteration form.

-- Count from 1 to 4 by 1.
for a=1,4 do io.write(a) end

print()

-- Count from 1 to 6 by 3.
for a=1,6,3 do io.write(a) end


-- Example 23   -- More for statement.
-- Sequential iteration form.

for key,value in pairs({1,2,3,4}) do print(key, value) end


-- Example 24   -- Printing tables.
-- Simple way to print tables.
-- [§3.4.9] - Table Constructors

a={1,2,3,4,"five","elephant", "mouse"}

for i,v in pairs(a) do print(i,v) end
```

# 🚩 Quick Lua Tour
                                                       [contents] [index] *tour*
+ https://github.com/rjpcomputing/luaforwindows

参考 Lua for Windows v5.1\examples\quickluatour.lua


## -- Example -- hello.lua
                                                  [contents] [index] *hello.lua*

```lua
-- hello.lua
-- the first program in every language

io.write("Hello world, from ",_VERSION,"!\n")
```

## -- Example -- globals.lua
                                                [contents] [index] *globals.lua*


```lua
-- globals.lua
-- show all global variables

local seen={}

function dump(t,i)
    seen[t]=true
    local s={}
    local n=0
    for k in pairs(t) do
        n=n+1 s[n]=k
    end
    table.sort(s)
    for k,v in ipairs(s) do
        print(i,v)
        v=t[v]
        if type(v)=="table" and not seen[v] then
            dump(v,i.."\t")
        end
    end
end

dump(_G,"")
```

## -- Example -- bisect.lua
                                                 [contents] [index] *bisect.lua*


非线性代数方程，就是因变量与自变量之间的关系不是线性的关系，这类方程很多，例如平方关系、对数关系、
指数关系、三角函数关系等等。求解此类方程往往很难得到精确解，经常需要求近似解问题。

代数方程又称为多项式方程，令某多项式等于零可得一个多项式方程，例如： 𝒙² + 𝒙 - 1 = 0

在数学上，一个线性函数（映射） 拥有以下两个性质：

  1. 叠加性： 𝒇(α+𝛽) = 𝒇(α) + 𝒇(𝛽)
  2. 齐次： 𝒇(α𝛽) = α𝒇(𝛽)

叠加性和齐次这两个条件常会被合并在一起，称之为叠加原理： 𝒇(αx+𝛽y) = α𝒇(x) + 𝛽𝒇(y)


```lua
-- bisect.lua
-- bisection method for solving non-linear equations

delta=1e-6  -- tolerance

function bisect(f,a,b,fa,fb)
 local c=(a+b)/2
 io.write(n," c=",c," a=",a," b=",b,"\n")
 if c==a or c==b or math.abs(a-b)<delta then return c,b-a end
 n=n+1
 local fc=f(c)
 if fa*fc<0 then return bisect(f,a,c,fa,fc) else return bisect(f,c,b,fc,fb) end
end

-- find root of f in the inverval [a,b]. needs f(a)*f(b)<0
function solve(f,a,b)
 n=0
 local z,e=bisect(f,a,b,f(a),f(b))
 io.write(string.format("after %d steps, root is %.17g with error %.1e, f=%.1e\n",n,z,e,f(z)))
end

-- our function
function f(x)
 return x*x*x-x-1
end

-- find zero in [1,2]
solve(f,1,2)
```


## -- Example -- sieve.lua
                                                  [contents] [index] *sieve.lua*


埃拉托色尼筛选法（The Sieve of Eratosthenes），简称埃氏筛法，是解决指定区间质数的常见算法。
算法基本性质：任何大于 1 的自然数，要么本身是质数，要么可以分解为几个质数之积，且这种分解是唯一的。

超过 500 范围可能导致 Lua 出现 C stack overflow

```lua
-- sieve.lua
-- the sieve of Eratosthenes programmed with coroutines
-- typical usage: lua -e N=500 sieve.lua | column

-- generate all the numbers from 2 to n
function gen (n)
  return coroutine.wrap(function ()
    for i=2,n do coroutine.yield(i) end
  end)
end

-- filter the numbers generated by `g', removing multiples of `p'
function filter (p, g)
  return coroutine.wrap(function ()
    for n in g do
      if n%p ~= 0 then coroutine.yield(n) end
    end
  end)
end

N=N or 500      -- from command line
x = gen(N)      -- generate primes up to N
while 1 do
  local n = x()     -- pick a number until done
  if n == nil then break end
  print(n)      -- must be a prime number
  x = filter(n, x)  -- now remove its multiples
end
```


## -- Example -- account.lua OOP
                                                [contents] [index] *account.lua*
- [A multiple-inheritance class library for Lua.](https://github.com/LuaDist/classlib)

Table 是 Lua 实现面向对象编程的一咱手段，通过扩展成员方法，配合 setmetatable 等函数实现。

```lua
-- account.lua
-- from PiL 1, Chapter 16 - Object-Oriented Programming
-- http://www.lua.org/pil/16.html
-- [§3.4.9] - Table Constructors

Account = {balance = 0}

function Account:new (o, name)
  o = o or {name=name}
  setmetatable(o, self)
  self.__index = self
  return o
end

function Account:deposit (v)
  self.balance = self.balance + v
end

function Account:withdraw (v)
  if v > self.balance then error("insufficient funds on account "..self.name) end
  self.balance = self.balance - v
end

function Account:show (title)
  print(title or "", self.name, self.balance)
end

a = Account:new(nil,"demo")
a:show("after creation")
a:deposit(1000.00)
a:show("after deposit")
a:withdraw(100.00)
a:show("after withdraw")

-- this would raise an error
--[[
b = Account:new(nil,"DEMO")
b:withdraw(100.00)
--]]
```

## -- Example -- File I/O
                                                  [contents] [index] *ex-fileio*
```lua
-- [§6.8] -  Input and Output Facilities
-- [io.open]  ==> Open a file
-- [io.read]  ==> Read data from a open file
-- [io.input] ==> Set file as default input
-- [io.output]==> Set file as default output
-- [io.write] ==> Write data to output file
-- [io.close] ==> Close a open file

file = io.open(arg[0], "r")
io.input(file)
print("read a line from file:", io.read())
io.close(file)

file = io.open(arg[0], "a")
io.output(file)
io.write("--  Lua Version: ", _VERSION)
io.close(file)
```

## -- Example -- CLI & shell
                                                     [contents] [index] *ex-cli*
```lua
-- [ch7] Lua Standalone
-- lua -e "a=1" "some.lua" bad apple ...
-- === == ===== ========== === ===== ===
-- [-3]...[-1]     [0]     [1]  [2]  ...
print("arguments for lua: ", arg[-1], arg[-2])
print("arguments for script: ", arg[0])
print("variale a from cli: ", a)
print(os.execute("chcp 936 & dir coding.lua"))
os.exit(0) -- return lasterror code
```


## -- Example 2   -- Comments.
                                                        [contents] [index] *ex2*

    -- Single line comments in Lua start with double hyphen.

    --[[ Multiple line comments start
    with double hyphen and two square brackets.
      and end with two square brackets. ]]

    -- And of course this example produces no
    -- output, since it's all comments!

## -- Example 3   -- Variables.
                                                        [contents] [index] *ex3*

    -- Variables hold values which have types, variables don't have types.

    a=1
    b="abc"
    c={}
    d=print

    print(type(a))
    print(type(b))
    print(type(c))
    print(type(d))


    -------- Output ------

    number
    string
    table
    function

## -- Example 5   -- More Variable names.
                                                        [contents] [index] *ex5*

    -- The underscore is typically used to start special values
    -- like _VERSION in Lua.

    print(_VERSION)

    -- So don't use variables that start with _,
    -- but a single underscore _ is often used as a
    -- dummy variable.


        -------- Output ------

    Lua 5.1

## -- Example 7   -- Keywords.
                                                        [contents] [index] *ex7*

    -- Lua reserved words are: and, break, do, else, elseif,
    --     end, false, for, function, if, in, local, nil, not, or,
    --     repeat, return, then, true, until, while.

    -- Keywords cannot be used for variable names,
    -- 'and' is a keyword, but AND is not, so it is a legal variable name.
    AND=3
    print(AND)


        -------- Output ------

    3

## -- Example 8   -- Strings.
                                                        [contents] [index] *ex8*

    -- [§3.1] -  Lexical Conventions

    a="single 'quoted' string and double \"quoted\" string inside"
    b='single \'quoted\' string and double "quoted" string inside'
    c= [[ multiple line
    with 'single'
    and "double" quoted strings inside.]]

    print(a)
    print(b)
    print(c)


    -------- Output ------

    single 'quoted' string and double "quoted" string inside
    single 'quoted' string and double "quoted" string inside
     multiple line
    with 'single'
    and "double" quoted strings inside.

## -- Example 9   -- Assignments.
                                                        [contents] [index] *ex9*

    -- Multiple assignments are valid.
    --  var1,var2=var3,var4

    a,b,c,d,e = 1, 2, "three", "four", 5

    print(a,b,c,d,e)


        -------- Output ------

    1       2       three   four    5

## -- Example 10   -- More Assignments.
                                                       [contents] [index] *ex10*

    -- Multiple assignments allows one line to swap two variables.

    print(a,b)
    a,b=b,a
    print(a,b)


        -------- Output ------

    1       2
    2       1

## -- Example 13   -- More Output.
                                                       [contents] [index] *ex13*

    -- io.write writes to stdout but without new line.

    io.write("Hello from Lua!")
    io.write("Hello from Lua!")

    -- Use an empty print to write a single new line.
    print()


        -------- Output ------

    Hello from Lua!Hello from Lua!

## -- Example 14   -- Tables.
                                                       [contents] [index] *ex14*


```lua
    -- Simple table creation.
    -- [§3.4.9] - Table Constructors

    a={} -- {} creates an empty table
    b={1,2,3} -- creates a table containing numbers 1,2,3
    c={"a","b","c"} -- creates a table containing strings a,b,c
    print(a,b,c) -- tables don't print directly, we'll get back to this!!


    -------- Output ------

    table: 00924648 table: 00924378 table: 00924670
```

## -- Example 15   -- More Tables.
                                                       [contents] [index] *ex15*


```lua
    -- Associate index style.
    -- [§3.4.9] - Table Constructors

    address={} -- empty address
    address.Street="Wyman Street"
    address.StreetNumber=360
    address.AptNumber="2a"
    address.City="Watertown"
    address.State="Vermont"
    address.Country="USA"

    print(address.StreetNumber, address["AptNumber"])


        -------- Output ------

    360     2a
```

## -- Example 18   -- if elseif else statement
                                                       [contents] [index] *ex18*


    c=3
    if c==1 then
        print("c is 1")
    elseif c==2 then
        print("c is 2")
    else
        print("c isn't 1 or 2, c is "..tostring(c))
    end


    -------- Output ------

    c isn't 1 or 2, c is 3

## -- Example 19   -- Conditional assignment.
                                                       [contents] [index] *ex19*

    -- value = test and x or y

    a=1
    b=(a==1) and "one" or "not one"
    print(b)

    -- is equivalent to
    a=1
    if a==1 then
        b = "one"
    else
        b = "not one"
    end
    print(b)


    -------- Output ------

    one
    one

## -- Example 20   -- while statement.
                                                       [contents] [index] *ex20*


    a=1
    while a~=5 do -- Lua uses ~= to mean not equal
        a=a+1
        io.write(a.." ")
    end


    -------- Output ------

    2 3 4 5

## -- Example 21   -- repeat until statement.
                                                       [contents] [index] *ex21*


    a=0
    repeat
        a=a+1
        print(a)
    until a==5


    -------- Output ------

    1
    2
    3
    4
    5

## -- Example 22   -- for statement. 
                                                       [contents] [index] *ex22*

    -- Numeric iteration form.

    -- Count from 1 to 4 by 1.
    for a=1,4 do io.write(a) end

    print()

    -- Count from 1 to 6 by 3.
    for a=1,6,3 do io.write(a) end


    -------- Output ------

    1234
    14

## -- Example 23   -- More for statement. 
                                                       [contents] [index] *ex23*

    -- Sequential iteration form.

    for key,value in pairs({1,2,3,4}) do print(key, value) end


    -------- Output ------

    1       1
    2       2
    3       3
    4       4

## -- Example 24   -- Printing tables. 
                                                       [contents] [index] *ex24*

    -- Simple way to print tables.

    a={1,2,3,4,"five","elephant", "mouse"}

    for i,v in pairs(a) do print(i,v) end


    -------- Output ------

    1       1
    2       2
    3       3
    4       4
    5       five
    6       elephant
    7       mouse

## -- Example 25   -- break statement. -- break is used to exit a loop.
                                                       [contents] [index] *ex25*


    a=0
    while true do
        a=a+1
        if a==10 then
            break
        end
    end

    print(a)


    -------- Output ------

    10

## -- Example 26   -- Functions. 
                                                       [contents] [index] *ex26*

    -- Define a function without parameters or return value.

    function myFirstLuaFunction()
        print("My first lua function was called")
    end

    -- Call myFirstLuaFunction.
    myFirstLuaFunction()


    -------- Output ------

    My first lua function was called

## -- Example 28   -- More functions.
                                                       [contents] [index] *ex28*

    -- Define function with multiple parameters and multiple return values.

    function myFirstLuaFunctionWithMultipleReturnValues(a,b,c)
        return a,b,c,"My first lua function with multiple return values", 1, true
    end

    a,b,c,d,e,f = myFirstLuaFunctionWithMultipleReturnValues(1,2,"three")
    print(a,b,c,d,e,f)


    -------- Output ------

    1       2       three   My first lua function with multiple return values       1       true

## -- Example 29   -- Variable scoping and functions.
                                                       [contents] [index] *ex29*

    -- All variables are global in scope by default.
    
    b="global"

    -- To make local variables you must put the keyword 'local' in front.
    function myfunc()
        local b=" local variable"
        a="global variable"
        print(a,b)
    end

    myfunc()
    print(a,b)


    -------- Output ------

    global variable  local variable
    global variable global

## -- Example 30   -- Formatted printing.
                                                       [contents] [index] *ex30*

    -- An implementation of printf.

    function printf(fmt, ...)
        io.write(string.format(fmt, ...))
    end

    printf("Hello %s from %s on %s\n",
           os.getenv"USER" or "there", _VERSION, os.date())


    -------- Output ------

    Hello there from Lua 5.1 on 08/21/18 12:37:03

## -- Example 32   -- Standard Libraries - math.
                                                       [contents] [index] *ex32*


    -- Math functions:
    -- math.abs, math.acos, math.asin, math.atan, math.atan2,
    -- math.ceil, math.cos, math.cosh, math.deg, math.exp, math.floor,
    -- math.fmod, math.frexp, math.huge, math.ldexp, math.log, math.log10,
    -- math.max, math.min, math.modf, math.pi, math.pow, math.rad,
    -- math.random, math.randomseed, math.sin, math.sinh, math.sqrt,
    -- math.tan, math.tanh

    print(math.sqrt(9), math.pi)


    -------- Output ------

    3       3.1415926535898

## -- Example 33   -- Standard Libraries - string.
                                                       [contents] [index] *ex33*


    -- String functions:
    -- string.byte, string.char, string.dump, string.find, string.format,
    -- string.gfind, string.gsub, string.len, string.lower, string.match,
    -- string.rep, string.reverse, string.sub, string.upper

    print(string.upper("lower"),string.rep("a",5),string.find("abcde", "cd"))


    -------- Output ------

    LOWER   aaaaa   3       4

## -- Example 35   -- Standard Libraries - input/output.
                                                       [contents] [index] *ex35*


    -- IO functions:
    -- io.close , io.flush, io.input, io.lines, io.open, io.output, io.popen,
    -- io.read, io.stderr, io.stdin, io.stdout, io.tmpfile, io.type, io.write,
    -- file:close, file:flush, file:lines ,file:read,
    -- file:seek, file:setvbuf, file:write

           print(io.open("file doesn't exist", "r"))

    -------- Output ------

    nil     file doesn't exist: No such file or directory   2

## -- Example 36   -- Standard Libraries - operating system facilities.
                                                       [contents] [index] *ex36*


    -- OS functions:
    -- os.clock, os.date, os.difftime, os.execute, os.exit, os.getenv,
    -- os.remove, os.rename, os.setlocale, os.time, os.tmpname

    print(os.date())


    -------- Output ------

    08/21/18 12:40:09

## -- Example 37   -- External Libraries.
                                                       [contents] [index] *ex37*

    -- Lua has support for external modules using the 'require' function
    -- INFO: A dialog will popup but it could get hidden behind the console.

    require( "iuplua" )
    ml = iup.multiline
        {
        expand="YES",
        value="Quit this multiline edit app to continue Tutorial!",
        border="YES"
        }
    dlg = iup.dialog{ml; title="IupMultiline", size="QUARTERxQUARTER",}
    dlg:show()
    print("Exit GUI app to continue!")
    iup.MainLoop()


    -------- Output ------

    failed to load & run sample code
    error loading module 'iuplua' from file 'C:\Lua51\clibs\iuplua51.dll':
            找不到指定的模块。


# 🚩 Skynet 
                                                                        *skynet*
+ [Skynet](https://github.com/cloudwu/skynet)
+ https://github.com/cloudwu/skynet/wiki
+ https://github.com/IronsDu/Joynet
+ https://blog.codingnow.com/2012/09/the_design_of_skynet.html

A lightweight online game framework.

Skynet 是为多人在线游戏打造的轻量级服务端框架，使用 C 实现多线程服务，Lua 实现业务逻辑代码的
快速开发。使用 Lua 动态脚本框架的一个好处就是，可以快速迭代，一定程度上提高了开发效率。

游戏框架要解决的核心问题是：游戏玩家的消息通信问题，比如某玩家准备好了，这个信息需要告诉联线的玩家。
即把一个消息（数据包）从一个服务（Actor）发送给另一个服务（Actor），并接收其响应信息。也就是在同
一进程内，或者集群间的通讯服务间接收并处理结果。而 Skynet 就是这些服务间收发数据包的服务框架。

Skynet 的核心是由 C 语言编写，但它使用 Lua 脚本以 Actor 模式的工作方式实现业务逻辑，Actor 以
独立线程运行 Lua 服务来协同工作。Lua 是必要的开发语言，使用 LuaAPI 来完成服务间的通讯协作。

每个 Skynet 服务都是一个 Lua State，也就是一个 Lua 虚拟机线程，而且每个服务彼此隔离，使用独立
的内存空间，服务之间通过发消息来完成数据交换。

Lua 本身没有多线程支持，Skynet 实现单进程多线程 Actor 模型下的消息调度机制，在一个线程运行多个
Lua 实例。为了提高并发性，Skynet 会启动一定数量的调度线程，利用 Lua 协程并发处理。

所以，Skynet 并发性有 3 点：

   1. 多个调度线程并发
   2. Lua 协程并发处理
   3. 服务调度的切换

Skynet 服务的设计基于 Actor 模型，彼此之间使用通信管道实现交流，有两个特点：

   1. 每个 Actor 依次处理收到的消息
   2. 不同 Actor 可同时处理各自的消息

CPU 时间会按照一定规则分摊给每个 Actor，不会独占 CPU 时间，Actor 处理一定数量消息后主动让出 
CPU 时间给其他进程处理消息。

但是 Skynet 的调度机制实现上使用全局队列保存要调度的服务，调度算法是先来先服务。有新消息时，就把
相应服务添加到调度队列等待调度线程调度。而服务的调度切换依赖于协程的挂起，如果当前调度的服务没有
主动挂起或退出，或者超时运行，线程调度就会一直得不到执行，其它服务也不能有效处理消息。

先到先处理这种机制的好处就是实现简单，有利于长作业，上下文切换较少，缺点就是并发效率低。



# 🚩 Lua Sources
                                                 [contents] [index] *lua-source*
+ [The Implementation of Lua 5.0](http://www.lua.org/doc/jucs05.pdf)
+ [The Evolution of Lua](http://www.lua.org/doc/hopl.pdf)
+ [Coroutines in Lua](http://www.lua.org/doc/jucs04.pdf)
+ https://www.lua.org/docs.html

阅读源代码是件非常有价值的事，但是需要有正确的方法，错误的阅读源代码就像读一本不合适自己的书，非常
浪费时间。阅读过程有几点需要注意的：

   ➡ 不要逐行逐行地深入，除非你已经完全掌握作者的思想；
   ➡ 明确阅读源代码的目的，避免陷入无谓的纠结，适当跳过非重点内容；
   ➡ 如果感觉到阻碍力量非常大，请停下来检查一下，自己的基础知识是否过关，知识是有门槛的；
   ➡ 请确认计算机原理、算法理论、操作系统、编译原理等课程是否过关；
   ➡ 某种意义上，阅读源代码也是一个逆向工程，虽然比起反汇编要容易点，所以尝试读取一下相关论文；

Lua 源码分析需要有一定的编译原理基础，最好对 Yacc/lex 等词法生成器工具有一定了解，虽然 Lua 只
在早期版本使用它们来生成记法解析器程序。Lua 提供手写的 Recusive descent parser 代码更精简，
效率也更高，以及更好的错误提示。

另外，Lua 也没有使用现代编译器构架中常见的中间表示层 IR - Intermediate Representation。这
使得社区提供了各自带有先进特性的 Lua 重制版本，其中包括 LuaJIT。

Pallene: A statically typed companion language for Lua - 2.2 JIT Compilers

Just-in-time (JIT) compilers are the state of the art in dynamic language 
optimization. A JIT compiler initially executes the program without any 
optimization, observes its behavior at runtime, and then, based on this, generates 
highly specialized and optimized executable code. For example, if it observes 
that some code is always operating on values of type double, the compiler will
optimistically compile a version of this code that is specialized for that type. 
It will also insert tests (guards) in the beginning of the code that jump back to 
a less optimized generic version in case some value is not of type double as expected.

Lua 的一个优点就是小巧，相比其它 10 万行代码级别起步的项目，Lua 1.5 万行的代码量可以说是相当
入门级的项目，特别适合做源代码分析学习。但是注意，通过源代码学习来掌握编译原理只是其中的一个方法，
并不能替代编译原理的课程。

早期 Lua 虚拟机基于栈实现，但从开始就使用虚拟机来解析字节码，2003 年后，Lua 5.0 版本开始采用
基于寄存器的虚拟机，解释效率得到提升。另一个直接变动是虚拟机指令更少，从 Lua 3.1 到 Lua 5.0，
虚拟机指令从 128 条缩减到 35 条。参考 Lua 版本历史 [lua-history]。

Lua 5.0 是一个非常重要的版本升级，它的核心功能包括：

  ★ Registerbased virtual machine, 
  ★ the new algorithm for optimizing tables used as arrays, 
  ★ the implementation of closures, 
  ★ and the addition of coroutines.

以下 PowerShell 脚本可以统计 Lua 源代码行数，Lua 5.1 版本源代码文件 57 个，共 16816 行。
多数代码文件不超过 500，头文件只有 lua.h 和 luaconf.h 较大点，只有 lapi.c 和 lparser.c 
两个文件超过千行。最新 Lua 5.4.4 版本代码已经接近 3 万行，增加了协程等功能。

从代码行数来看，Lua 5.0.0，Lua 5.2.0 和 Lua 5.4.0 增加的代码比例是较大的，是比较大的升级。

```sh
>> $measure = dir -Directory lua-all | % {
     $res = dir $_ | %{ 
        [pscustomobject]@{ file = $_.Name; lines = (Get-Content $_).Count}
     }
     $mea = $res | Measure-Object -Sum lines
     [pscustomobject]@{version = $_.Name; files = $mea.Count; lines = $mea.Sum}
   }
>> $measure | Format-Table
```

    version   files lines     version   files lines
    -------   ----- -----     -------   ----- -----
    lua-1.0      21  5503     lua-5.2.0    61 19841
    lua-1.1      24  5235     lua-5.2.1    61 20161
    lua-2.1      31  6351     lua-5.2.2    61 20253
    lua-2.2      34  6497     lua-5.2.3    61 20291
    lua-2.4      40  7643     lua-5.2.4    61 20320
    lua-2.5      37  7632     lua-5.3.0    63 22766
    lua-2.5.1    37  7657     lua-5.3.1    63 23199
    lua-3.0      41  9063     lua-5.3.2    63 23657
    lua-3.1      52  9869     lua-5.3.3    63 24041
    lua-3.2      55 10649     lua-5.3.4    63 24130
    lua-3.2.1    55 10650     lua-5.§3.5    63 24186
    lua-3.2.2    55 10653     lua-5.3.6    63 24207
    lua-4.0      56 11912     lua-5.4.0    64 28912
    lua-4.0.1    56 11916     lua-5.4.1    64 29141
    lua-5.0      55 15382     lua-5.4.2    64 29134
    lua-5.0.1    55 15404     lua-5.4.3    64 29502
    lua-5.0.2    55 15408     lua-5.4.4    64 29759
    lua-5.0.3    55 15432
    lua-5.1      57 16816
    lua-5.1.1    57 16874
    lua-5.1.2    57 16906
    lua-5.1.3    57 16950
    lua-5.1.4    57 16983
    lua-5.1.5    57 16987

以下是各个版本的操作码数量信息：

```sh
>> (dir lua-all\*\lopcodes.c)|%{
     $opcodes = ((Get-Content $_) |? { $_.Contains("opmode(") }).Count-1
     [pscustomobject]@{version = ("$_".Split('\')[-2]); opcodes = $opcodes}
   }
```
    version   opcodes         version   opcodes
    -------   -------         -------   -------
    lua-5.0        35         lua-5.3.0      47
    lua-5.0.1      35         lua-5.3.1      47
    lua-5.0.2      35         lua-5.3.2      47
    lua-5.0.3      35         lua-5.3.3      47
    lua-5.1        38         lua-5.3.4      47
    lua-5.1.1      38         lua-5.§3.5      47
    lua-5.1.2      38         lua-5.3.6      47
    lua-5.1.3      38         lua-5.4.0      82
    lua-5.1.4      38         lua-5.4.1      82
    lua-5.1.5      38         lua-5.4.2      82
    lua-5.2.0      40         lua-5.4.3      82
    lua-5.2.1      40         lua-5.4.4      82
    lua-5.2.2      40
    lua-5.2.3      40
    lua-5.2.4      40

源代码文件可以划分为 4 个部分：

1. 虚拟机核心功能
    - [Lua C API](lua-5.1/lapi.c)              1077 lines  函数前缀 lua_
    - ['ctype' functions](lua-5.1/lctype.c)      64 lines  Lua 5.2.0+ 
    - [Debug Interface](lua-5.1/ldebug.c)       620 lines  函数前缀 luaG_
    - [Stack & Call structure](lua-5.1/ldo.c)   515 lines  函数前缀 luaD_
    - [Prototypes & closures](lua-5.1/lfunc.c)  174 lines  函数前缀 luaF_
    - [Garbage Collector](lua-5.1/lgc.c)        707 lines  函数前缀 luaC_
    - [Memory Manager](lua-5.1/lmem.c)           86 lines  函数前缀 luaM_
    - [Lua objects](lua-5.1/lobject.c)          214 lines  函数前缀 luaO_
    - [opcodes](lua-5.1/lopcodes.c)             102 lines  函数前缀 luaP_
    - [Global State](lua-5.1/lstate.c)          214 lines  函数前缀 luaE_
    - [String table](lua-5.1/lstring.c)         111 lines  函数前缀 luaS_
    - [Lua tables (hash)](lua-5.1/ltable.c)     588 lines  函数前缀 luaH_
    - [Tag methods](lua-5.1/ltm.c)               75 lines  函数前缀 luaT_
    - [Lua virtual machine](lua-5.1/lvm.c)      762 lines  函数前缀 luaV_
    - [input stream interface](lua-5.1/lzio.c)   82 lines  函数前缀 luaZ_
2. 词法解析及节码编译
    - [Code generator](lua-5.1/lcode.c)         825 lines  函数前缀 luaK_
    - [Lexical Analyzer](lua-5.1/llex.c)        460 lines  函数前缀 luaX_
    - [Lua Parser](lua-5.1/lparser.c)          1336 lines  函数前缀 luaY_
    - [Dump Lua chunks](lua-5.1/ldump.c)        164 lines  函数前缀 luaU_
    - [Load Lua chunks](lua-5.1/lundump.c)      223 lines  函数前缀 luaU_
3. 内置标准库
    - [Debug API](lua-5.1/ldblib.c)             397 lines
    - [Dynamic lib loader](lua-5.1/loadlib.c)   667 lines
    - [Lib Initialization](lua-5.1/linit.c)      38 lines  函数前缀 luaL_
    - [Auxiliary of Lua libs](lua-5.1/lauxlib.c)647 lines  函数前缀 luaL_
    - [Basic library](lua-5.1/lbaselib.c)       643 lines  函数前缀 luaB_
    - [System I/O library](lua-5.1/liolib.c)    532 lines
    - [Math library](lua-5.1/lmathlib.c)        263 lines
    - [Operating System lib](lua-5.1/loslib.c)  238 lines
    - [String & pattern lib](lua-5.1/lstrlib.c) 863 lines
    - [Table Manipulation](lua-5.1/ltablib.c)   278 lines
    - [Coroutine Library](lua-5.1/lcorolib.c)   210 lines  Lua 5.2.0+
    - [print bytecodes](lua-5.1/print.c)        224 lines
4. 程序工具及其它
    - [Make script](lua-5.1/Makefile) 自动编译脚本
    - [Test script](lua-5.1/test.lua) 测试 lua 解析器和 luac 字节码编译
    - [Configuration file](lua-5.1/luaconf.h)   736 lines
    - lua.exe - Lua stand-alone interpreter
        - [lua srouce](lua-5.1/lua.c)           377 lines
        - [lua header](lua-5.1/lua.h)           384 lines
    - luac.exe - Lua compiler (saves bytecodes to files; also list bytecodes)
        - [luac srouce](lua-5.1/luac.c)         196 lines


## ⚡ TObject vs TValue - Datatypes
                                              [contents] [index] *lua-datatypes*
+ [§2.1]   - Values and Types
+ [Lua objects](lua-5.1/lobject.c)
+ [The Implementation of Lua 5.0](http://www.lua.org/doc/jucs05.pdf)
+ http://wiki.c2.com//?FirstClass
+ https://web.mit.edu/alexmv/6.037/sicp.pdf
+ https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-12.html#call_footnote_Temp_121

Lua 是动态类型语言，数据类型附着于数据而非变量上，也就是数据决定了它作为什么类型使用。

按手册说明，Lua 5.3 有 8 种基本数据类型，参考 Lua Version History [lua-history]：

   1. [nil], Nil is a marker type having only one value, also called nil. 
   2. [boolean] Lua 5.0+, Boolean values are the usual true and false. 
   3. [number], Numbers are double-precision ﬂoating-point numbers.
   4. [string], Strings are arrays of bytes or binary with an explicit size.
   5. [function], Functions are either Lua functions or C functions.
   6. [userdata], Userdata are essentially pointers to user memory blocks.
   7. [thread] Lua 5.0+, threads represent coroutines.
   8. and [table] are associative arrays, which can be indexed by any value (except nil) and can hold any value.

Lua 的数值默认使用双精度浮点数，但可以通过编译配置修改为 float 或 long 数据类型，如果硬件有限制。

Lua 函数可以是脚本中定义的 function 也可以是按 Lua virtual machine 协议编写的 C 语言函数。

所有类型的值都是一等公民，即可以：

   ➡ 将它们存储在全局变量、局部变量和 Table 字段中，
   ➡ 将它们作为参数传递给函数，
   ➡ 从函数返回它们，等等。

一等公民原意是 first-class citizen，有一等公民，就有二等公民，本质是能力与层级挂钩，将这个概念
借用到程序世界里，对应的权力有：创建，赋值，传递，有 first-class objects/functions/values
等表达方式，表示它们可以像其它一等公民一样拥有相同能力。

参考 SICP - Structure Interpretation of Computer Programs 2nd.

The notion of "first-class citizen" or "first-class element" in a programming 
language was introduced by British computer scientist Christopher Strachey in 
the 1960s in the context of first-class functions. The most famous formulation 
of this principle is probably in Structure and Interpretation of Computer 
Programs by Gerald Jay Sussman and Harry Abelson:

   1. They may be named by variables.
   2. They may be passed as arguments to procedures.
   3. They may be returned as the results of procedures.
   4. They may be included in data structures.

Lua 4.0 - 5.0 - 5.4 版本间的数据结构变化较大，有些结构改名，有些新结构引入，类型基本组合还是 
Value + TObject 或者 Value + TValue 结构上没有太大变化：

|     Lua 4.0     |     Lua 5.0     |     Lua 5.4      |
|-----------------|-----------------|------------------|
| union Value     | union Value     | union Value      |
| struct TObject  | struct TObject  | struct TValue    |
|-----------------|-----------------|------------------|
| struct TString  | union  TString  | struct TString   |
| struct Proto    | struct Proto    | struct Proto     |
| struct LocVar   | struct LocVar   | struct LocVar    |
| struct Node     | struct Node     | union Node       |
| struct Hash     | struct Table    | struct Table     |
| struct Closure  | union  Closure  | union Closure    |
| struct CallInfo | struct CClosure | struct CClosure  |
|                 | struct LClosure | struct LClosure  |
|                 | struct UpVal    | struct UpVal     |
|                 | struct GCObject | struct GCObject  |
|                 | union  Udata    | struct Udata     |
|                 |                 | struct Udata0    |
|                 |                 | union UValue     |
|                 |                 | union StackValue |

新版本的 TValue 称为 Tagged Values，取代了旧版本的 TObject，新的类型表现为 value + tag。
其实和旧版的结构基本一致，只是称为上有所不同。

部分类型，Nil、Booleans、Threads、Numbers 等，并不需要专门的结构体来表现，使用基本 Value 结构。
数据类型通过 TObject.tt 或者 TValue.tt_ 来标识，前者是 int 类型，后者是 unsigned char。配合
checktype() 宏函数来进行类型检测。

闭包 Closure 是联合体，它对应的两个子类型，struct CClosure 和 struct LClosure，前者是 C
语言的闭包模拟实现。Lua 4.0 Closure 结构包含了两种闭包的实现，新版本则独立使用 CClosure 结构体，
通过 C API lua_pushcclosure() 将 C 函数加入到虚拟栈中模拟 LClosure。

旧版本中将调试用的 CallInfo 直接作为 Value 结构的字段，而在新版本中则移除，用在 lua_State 或
lua_Debug 结构中。

```cpp
// Lua 4.0 Objects
typedef union {
  struct TString *ts;   /* LUA_TSTRING, LUA_TUSERDATA */
  struct Closure *cl;   /* LUA_TFUNCTION */
  struct Hash *a;       /* LUA_TTABLE */
  struct CallInfo *i;   /* LUA_TLMARK */
  Number n;             /* LUA_TNUMBER */
} Value;

typedef struct lua_TObject {
  int ttype;
  Value value;
} TObject;


/*
** Lua 5.4.4 Objects
** Union of all Lua values
*/
typedef union Value {
  struct GCObject *gc;  /* collectable objects */
  void *p;              /* light userdata */
  lua_CFunction f;      /* light C functions */
  lua_Integer i;        /* integer numbers */
  lua_Number n;         /* float numbers */
} Value;

/*
** Tagged Values
*/
#define TValuefields    Value value; int tt

typedef struct lua_TValue {
  TValuefields;
} TValue;
```

Lua 4.0 版本的 Table 是严格的 Hash 散列表，直接存放在 union Value 中，而 Lua 5.0 版本后，
独立出来，并增加了新功能，将数组与哈希合体实现 Table，并使用 TValue 和 Node 分别表示数组，原来
的 Hash 类型取消，功能溶合到 Table 类型。

Userdata 本质上是指向用户内存块的指针，实现上细分为两种子类型：

   ➡ LUA_TUSERDATA Udata 重度用户数据内存块由 Lua 分配并接受垃圾收集；
   ➡ LUA_TLIGHTUSERDATA Udata0 轻量用户数据内容块由用户分配并释放。

Lua 5.4.0 引入 UValue 来确保 UData 完全按内存边界对齐。


```cpp
/*
** tags for Tagged Values have the following use of bits:
** bits 0-3: actual tag (a LUA_T* constant)
** bits 4-5: variant bits
** bit 6: whether value is collectable
*/

/* add variant bits to a type */
#define makevariant(t,v)    ((t) | ((v) << 4))

/* Standard nil */
#define LUA_VNIL    makevariant(LUA_TNIL, 0)

/* Empty slot (which might be different from a slot containing nil) */
#define LUA_VEMPTY  makevariant(LUA_TNIL, 1)

/* Value returned for a key not found in a table (absent key) */
#define LUA_VABSTKEY    makevariant(LUA_TNIL, 2)
```

Lua 5.4.0 开始引入了可变类型的概念，makevariant() 宏函数会将可变标识的值组合到 tt_ 字段上的
variant bits 部分，用于区分更详细的类型。比如，nil 类型，就有三种变体，除了标准的 nil，还有
表示 Empty slot 和 absent key 两种状态下的 nil。

另外，bit 6 还用来标记对象是否是可收集，Lua 5.0 引入了 GCObject 作为 Value 结构体的一个字段，
所有能被 GC 的类型都存放在 GCObject 结构体中，如 Proto、String、Table 和用户数据对象 UData。
不能被 GC 的类型包含 Udata0 (LUA_TLIGHTUSERDATA)，C 函数，以及 Integer、Number 值类型等。

GCObject 结构只有 3 个字段：

   ➡ next 指针指向下一个 GCObject，在 GC 处理时通过它枚举所有可收集对象；
   ➡ tt 字段标识对象的数据类型；
   ➡ marked 字段用来标记对象被收集的状态；

在刚引入 GCObject 结构时，Lua 还使用了容易混淆的 union GCObject，它用来转换所以可 GC 对象，
在 Lua 5.3 开始更名为 union GCUnion，旧有的命名确实是很不妥当。

所有可 GC 的类型都会通过 CommonHeader 大宏函数嵌入一个 GCObject 结构，并且在内存的起始位置，
这可以确保在 GC 枚举所有对象时，方便将获取到的对象转换为 tt 字段对应的类型。

GCObject 就是一个由 CommonHeader 宏函数展开的结构，也是一个链表，它们的关系如下：

                                                     +================+
                                                 |==>| struct Table   |
                                                 |   |----------------|
    +===============+                            |   | GCObject *gc   |
    | struct TValue |                            |   | ...            |
    |---------------|     +===============+      |   +================+
    | Value value_  | ==> | union Value   |      |           ⬇
    +===============+     |---------------|      |   +================+
                          | GCObject *gc  | ===> |==>| struct TString |
                          +===============+      |   |----------------|
                                                 |   | GCObject *gc   |
                                                 |   | ...            |
                                                 |   +================+
                                                 |           ⬇
                                                 |==> struct Proto, 
                                                      union Closure...  


## ⚡ Lua Table
                                                  [contents] [index] *lua-table*
+ [§2.4]   - Metatables and Metamethods
+ [§3.4.7] - The Length Operator
+ [§3.4.9] - Table Constructors
+ [account.lua] Example -- account.lua OOP
+ [Lua tables (hash)](lua-5.1/ltable.c)
+ [Lua Programming Gems - ch2 Lua Performance Tips](https://www.lua.org/gems/)

Table 是 Lua 中唯一的结构化数据类型，Lua 有些内部任务需要 Table 的实现，它是 Lua 核心数据类型。

Lua 4.0 版本的 Table 是严格的 Hash 散列表，使用 Hash + Node 结构体实现，Hash 结构体作为链表
使用，Node 结构体作为 Key-Value 存储使用，。

Lua 5.0 版本后，Hash 从 Value 结构体中独立出来，并增加了新功能，与数组合体实现为 Table 结构，
并使用 TValue 和 Node 分别表示数组，原来的 Hash 类型取消，功能溶合到 Table 类型。

Tables 是 Lua 实现的 Associative Arrays，所谓关联即可以使用除 nil 以外的一切数据作为 key 来
存储任何类型的值，也就是 Key-Value 键值对。Table 是动态的，可以随着数据增加而扩容，随着数据减少而
收缩。元素的索引使用自然后数，从 1 开始，通过设置 nil 值就可以删除数据。

Table 另一个重要的用途是实现 Lua OOP 编程，通过扩展 Table，提供成员方法来实现面向对象编程。

Lua 没有实现其它语言中常用的数组类型，Table 除了作为 Hash 表的实现，同时它还承担了 Array 数据
类型的实现。Lua 4.0 版本为止，Table 都按严格的 Hash 表实现，新的版本中，Table = Hash + Array
两者的混合体，以下图表可以贴切说明 Table 的数据结构：


    +===============+
    | struct Table  |                     +-------+
    +===============+                     | value |
    | TValue *array | ------------------> |-------|
    | Node   *node  |                     | 100   |
    +===============+   +-----+-------+   | 100   |
        |               | key | value |   | 200   |
        ╰-------------> |-----|-------|   | 300   |
                        | "x" | 9.2   |   | nil   |
                        | nil |       |

    Figure 2: A Lua table.

```lua
    local t = {["x"]=9.2,100,200,300}
    local x = t.x -- t['x']
    local handred = t[1]
    local length  = #t
```

混合结构的好处包括：

  ★ 使用 integer keys 访问数组元素比 hash 访问更快速，因为不用计算 hash 函数值；
  ★ 更重要的是数组比纯 hash 结构更省内存，几乎 50% 的容量；
  ★ 其次，语法上更简洁，array 和 hash 可以混合使用 [index] 和 .key 两种方法方式；

使用自然数索引访问，Table 表现为一个数组，使用其它数据访问，Table 表现为一个 Hashtable。

相比 Perl 的数组，$a[1000000000]=1; 这样的代码可能会耗光内存，因为它真的会创建一个可以容纳 
10 亿元素的数组。而 Lua 中可以使用稀疏数组 a={[1000000000]=1} 它只有一个元素。

Table 数组长度的计算是一个边界值，它和数组包含的 nil 值有关，并不是真正的数组元素个数。

```lua
    --            ⬇     
    print(#{0, 1, 2})                        -- Length = 3
    --            ⬇     
    print(#{0, 1, 2, nil})                   -- Length = 3
    --                       ⬇     
    print(#{1, 2, 3, nil, 4, 5, nil})        -- Length = 6
    --            ⬇     
    print(#{1, 2, 3, nil, 4, 5, nil, nil})   -- Length = 3
    --                                    ⬇     
    print(#{0, 1, 2, nil, 4, 0, nil, nil, 6})-- Length = 9
    -- (border == 0 or t[border] ~= nil) and t[border + 1] == nil
```

从 border 计算规则来看，当 boder + 1 位置为 nil 且 border 不为 nil，或者长度为 0。
当出现末端连续的 nil 值时，长度将会比实际元素个数少，产生一种长度退化现象。

在 for-in 循环使用 ipairs 和 pairs 枚举元素时，两个迭代方法差别在于：

  ➡ ipairs 只处理长度边界内的元素，pairs 会处理不为 nil 的元素。
  ➡ ipairs 不处理 hash 元素，pairs 处理 hash 不为 nil 的元素。

当数字 key 过于离散的时候，部分较大的数字 key 会被移到 hash 中去。这个分割线是以
数组段的利用率不低于 50% 为准。 0 和 负数做 key 时是肯定放在 hash 段中的。

Lua 在哈希数组已满要插入新值时，就会触发哈希重建，新哈希第一步是决定新数组部分和
新哈希部分的大小。因此，Lua 遍历所有元素，并对其计数分类，然后根据计算得数组扩展
大小保持在 n 值，以使超过其一半的空间用于数组元素填充，防止稀疏数组浪费空间，保证
n/2+1 后的空间要有元素占用。

编程时主动避免哈希数组的重建是个有效优化策略，特定 Table 构造器可以避免那些初始再
哈希。当你写下 {true, true, true} 时，Lua 预先知道表的数组部分将会需要上三个空位，
因此 Lua 按大小创建表。类似地，编写 {x = 1, y = 2, z = 3}，Lua 会创建 4 个空位的
哈希表。以下简单做运行测试：


```lua
local start = os.clock()

for i = 1, 5000000 do                       --  5.1.0  | 5.4.2  | LuaJIT2.1.0
    local a = {}                            --  4.381s | 2.789s | 0.749s
    local a = {[1]=true, [2]=true, [3]=true}--  2.522s | 1.137s | 0.003s
    local a = {true, true, true}            --  1.839s | 1.241s | 0.002s
    local a = {1, 2, 3 }                    --  1.878s | 1.228s | 0.003s
    a[1] = 1; a[2] = 2; a[3] = 3
end

print("Elapsed time", os.clock() - start)
```

编写写像 {[1] = true, [2] = true, [3] = true} 这样的语句并不会优化 Lua 执行，表达式中是
文字数字不会被当作数组索引，因此会创建 4 个空位的哈希表，浪费了内存和 CPU 时间。


When a table needs to grow, Lua recomputes the sizes for its hash part and its
array part. Either part may be empty. The computed size of the array part is the
largest n such that at least half the slots between 1 and n are in use (to avoid
wasting space with sparse arrays) and there is at least one used slot between 
n/2+1 and n (to avoid a size n when n/2 would do).

After computing
the new sizes, Lua creates the new parts and re-inserts the elements from the
old parts into the new ones. As an example, suppose that a is an empty table;
both its array part and hash part have size zero. If we execute a[1]=v, the table
needs to grow to accommodate the new key. Lua will choose n = 1 for the size
of the new array part (with a single entry 1 → v). The hash part will remain
empty.


The hash part uses a mix of chained scatter table with Brent’s variation [3].
A main invariant of these tables is that if an element is not in its main position
(i.e., the original position given by its hash value), then the colliding element
is in its own main position. In other words, there are collisions only when two
elements have the same main position (i.e., the same hash values for that table
size). There are no secondary collisions. Because of that, the load factor of these
tables can be 100% without performance penalties.

> 3. R. P. Brent. Reducing the retrieval time of scatter storage
> techniques. Communi cations of the ACM, 16(2):105--109, 1973.


## ⚡ Function & Closures
                                                   [contents] [index] *closures*
+ [§4.4] -  C Closures
+ [Prototypes & closures](lua-5.1/lfunc.c)  174 lines  函数前缀 luaF_
+ [Lua objects](lua-5.1/lobject.c)          214 lines  函数前缀 luaO_

闭包 Closure 是一个基本程序概念，Wikipedia 解析如下：

In programming languages, a closure, also lexical closure or function closure, 
is a technique for implementing lexically scoped name binding in a language with 
first-class functions. Operationally, a closure is a record storing a function 
together with an environment. The environment is a mapping associating each free 
variable of the function (variables that are used locally, but defined in an 
enclosing scope) with the value or reference to which the name was bound when the 
closure was created. Unlike a plain function, a closure allows the function to 
access those captured variables through the closure's copies of their values or 
references, even when the function is invoked outside their scope.

简单来说，闭包就是将符号绑定到一个函数上，本质就是引用了自由变量的函数。所有语言都有作用域的概念，
当一个函数 A 中的变量可以被其内部函数 B 访问，这就是最简单的闭包，函数 A 就叫做闭包函数。

用以下 JavaScript 脚本来演示，执行 A 函数返回后，它的作用域就已经结束，其管理的变量 a 就成为了
自由变量，但是这个变量保持有效状态以待 B 函数使用：

```js
function A(){
    let a = 'local'
    return function (){ 
        console.log('closure test, a is', a); 
    }
}
```

等价 Lua 闭包函数的使用：

```lua
function A()
    local a = "local"
    print("a is", a)
    return function()
        print("closure teest, a is", a)
    end
end
```

闭包的特点就是携带了一个上下文环境，利用这个环境可以封装代码，避免受外部影响，Node.js 模块化就是
闭包的一种典型应用。

Lua 的函数是一等公民，即函数当作一般对象使用，可以给函数传递函数，这使得 Lua 可以实现函数式编程：

```lua
function add(x)
    return function(y) return x+y end
end
local add2 = add(2)
print(add2(2)) --> 4
```

闭包的实现给编程语言的实现出了一道难题，就是如何实现在闭包内访问外部本地变量。假设本地变量定义在栈
内存上，当前函数运行返回后，作用域结束，栈上相应的内存也被清理，栈上定义的变量也被销毁。

Lua 会将编译编译为函数原型对象，在 C 语言层面上使用 Proto 结构体表示，它通过一个 Table 记录全局
环境中的变量，使用一个数组 upvalues 来管理本地变量，正确点是 outer local variables。

pending vars.

+-----+-----------+---------------+
| top | > (open)  | pending vars. |
|     | >         |               |
|     | > upvalue |               |
+=====+===========+===============+
|     |           | (closed)      |
|     |           |               |
|     |           | upvalue       |
+-----+-----------+---------------+

    Figure 4: An upvalue before and after being “closed”.

创建 Lua 函数就是创建函数闭包，Closure 结构存储了函数本身，C 语言函数 lua_CFunction 以及脚本
函数原型 Proto，最重要的是一个在词法上包围该函数的环境，使用 Table 类型表达，该环境包含函数外围
作用域的局部变量，这些局部变量称作 Upvalues，通过 upvalue 或 upvals 指针访问，其中，UpVal 
包含了一个双向链表。

```cpp
#define ClosureHeader \
    CommonHeader; lu_byte isC; lu_byte nupvalues; GCObject *gclist; \
    struct Table *env

typedef struct CClosure {
  ClosureHeader;
  lua_CFunction f;
  TValue upvalue[1];
} CClosure;


typedef struct LClosure {
  ClosureHeader;
  struct Proto *p;
  UpVal *upvals[1];
} LClosure;


typedef union Closure {
  CClosure c;
  LClosure l;
} Closure;
```

闭包 Closure 是联合体，它对应的两个子类型，struct CClosure 和 struct LClosure，前者是 C
语言的闭包模拟实现。Lua 4.0 Closure 结构包含了两种闭包的实现，新版本则独立使用 CClosure 结构体，
通过 C API lua_pushcclosure() 将 C 函数加入到虚拟栈中模拟 LClosure。



## ⚡ Coroutine
                                                  [contents] [index] *coroutine*
- [§2.6]   - Coroutines
- [§6.2]   - Coroutine Manipulation
- Programming in Lua 4th, Chapter 24. Coroutines
- Game Programming Gems 6 - 4.3 Programming Advanced Control Mechanisms with Lua Coroutines

协程，Cooperative Multithreading 是非常轻量的类似多线程的一种多任务实现，它在单线程内实现，
不需要向操作系统 申请额外的线程，甚至 进程资源，所以非常有效率。对于 I/O 密集应用非常有效，但是
因为是单线程实现，不能有充分利用多核心 CPU，所以在处理计算密集型应用时，这种文案不太适用。

并行与并发是两个几乎一样的概念，但是区别确实很大：

   ➡ 并行 parallel 是同一时间刻度发生的事，例如运行于多核心 CPU 上的多线程、进程；
   ➡ 并发 concurrency 是同一时段发生的事，并行是一种特例，例如异步 I/O 读写多个文件；

并发是一种常见的程序模型需求，特别是 I/O 读写这处高延时的场合。假设一个文件的读写工作需要 10s，而
10 个文件的处理时间就需要将近 2 分钟，如何采用协程并发处理，10 个协和并发处理 10 个文件，假设
准备工作时间忽略不计，就相当于并行处理，只需要大约一个文件的处理时间，I/O 延时等待时间得到极大优化。

协程是单线程上实现的多任务，只能在单核心上运行，并且同一时刻只有一个协程运行，是实现并发的一种方式。
协程不是抢占式多任务，所以当一个协程卡死会导致持续占用 CPU 资源，其它协程不能得到响应。

创建建一个协和得到一个 thread 对象，协和运行状态及转换如下图：


      create()      
    +===========+  resume() -> +===========+    other    +===========+ 
    | suspended | <----------> |  running  | <---------> |   normal  | 
    +===========+ <- yield()   +===========+   running   +===========+ 
                  ↘                  ↓                  ↙
                    close()          ↓ return    close()
                            ↘        ↓         ↙
                               +===========+
                               |    dead   |
                               +===========+

当一个协程激活状态时，又执行 resume 运行其它协程，这个协程就会暂停运行，转入 `"normal"` 状态，
但仍然是活动的，只是当下没有在运行。

调用 resume() 方法向协程内部传递参数，而协程内部通过 yield() 获取传入的参数。同时，yield() 的参数列表的数据作为 resume() 的返回值，它们彼此是对方的数据接收端，这有点拗口。

```lua
-- in main
receive_data = coroutine.resume(thread, "data send to yield")

-- in coroutine
receive_data = coroutine.yield("data send to resume")
```

实例演示协程间通过 resume 和 yield 互传数据，并控制执行与让出 CPU 时间：

```lua
function foo(args)
    print("foo received 1:", args)
    rec = coroutine.yield('bad', 'apple')   -- send data to resume and pause
    print("foo received 2:", rec)
    rec = coroutine.yield('more', 'apple')  -- send data to resume and pause
    print("foo received 3:", rec)
end

local th = coroutine.create(foo)    -- thread
local status = coroutine.status(th) -- "suspended"
local running_th, ismain = coroutine.running()
-- coroutine.close(th)

isok, b, c = coroutine.resume(th, "bad")    -- return 'bad' 'apple'
isok, b, c = coroutine.resume(th, "apple")  -- return 'more' 'apple'
print(isok, b, c, coroutine.status(th))
isok, b, c = coroutine.resume(th)           -- "dead"
```

We do not need coroutines very often, but when we do, it is an unparalleled 
feature. Coroutines can literally turn upside-down the relationship between 
callers and callees, and this flexibility solves what I call the 
"who-is-the-boss" (or "who-has-the-main-loop") problem in software architecture. 
This is a generalization of several seemingly unrelated problems, such as 
entanglement in event-driven programs, building iterators through generators, 
and cooperative multithreading. Coroutines solve all these problems in simple 
and efficient ways.

A coroutine is similar to a thread (in the sense of multithreading): 

   1. it is a line of execution, 
   2. with its own stack, 
   3. its own local variables, 
   4. and its own instruction pointer; 
   5. it shares global variables and mostly anythingw else with other coroutines. 

The main difference between threads and coroutines is that a multithreaded 
program runs several threads in parallel, while coroutines are collaborative: at 
any given time, a program with coroutines is running only one of its coroutines, 
and this running coroutine suspends its execution only when it explicitly 
requests to be suspended.


## ⚡ Garbage Collect
                                                        [contents] [index]  *gc*
+ [§2.5] - Garbage Collection
+ [Lua设计与实现](https://github.com/lichuang/Lua-Source-Internal)
+ http://wiki.luajit.org/New-Garbage-Collector

Lua 5.0 GC 实现采用标记清除式 Mark-Sweep，和引用计数式 Reference Counting 策略不同，一个
是标记，另一个是计数，但都需要通过引用来处理内容回收。

引用计数算法：在一个对象被引用的情况下，将其引用计数加 1，反之则减 1，当计数值为 0，则清理掉对象，
回收内存，这个算法有个比较致命的问题就是难以处理循环引用。Python 使用的 GC 实现就是引用计数方案。

Mark-Sweep 方案在执行 GC 时，先枚举链表中的对象，对所有对象进行一次扫描，枚举对象的意义就是通过
引用关系找出存活的对象并标记，通过链表可以找到对象称为可达，reachable 表示存在引用关系，则标记它
其它不能通过链表到达的对象则为失活对象，dead objects，它们不会被标记，执行清除阶段发现对象没有被
标记，则回收对象所占用内存。完成对象标记就可以进入清除阶段，从链表中的标记信息确定并回收对象。

调用 [lua_gc] in C 或者 [collectgarbage] in Lua 都可以触发内存回收。

Lua 5.0 等早旧版本的 GC 使用一次性不可打断回收过程，Mark 算法是双色标记算法 Two color mark，
这种算法的问题是，非黑即白状态过于简单，对象要么被引用，要么不被引用，要么被回收，要么被保留。带来
的问题是 Stop the World 现象：GC 执行过程不能中断，所以要完全处理完待回收的对象后，其它任务才
会得到响应。

另外，一次扫描的问题还表现在新加入的对象的处理上，如果标记为白色，回收阶段会在该对象没有遍历其关联
对象的情况下被回收；如果标记为黑色，那么没有被扫描就被标记为不可回收，也不正确。

为了降低一次性回收带来的性能问题，以及双色算法的问题，Lua 5.1 采用分布回收以及三色增量标记清除算法
Tri-color incremental mark and sweep。

一次 GC 标记流程执行前所有对象默认为白色状态：

   ➡ 白：未标记状态，表示可回收，细分为 0 型和 1 型；
   ➡ 黑：已标记状态，不可回收，对象被引用中；
   ➡ 灰：已标记状态，待确认是否可回收，对象本身被 GC 程序标记，但它引用对象还未访问；

增量标记清除是一种分步 GC 方案，在标记结束之后，清理还未开始之前，如果对象之间的关系发生变化，对于
这些不确定因素的安全做法是，把它们标记成不可清除状态，但又不能直接设置为黑色。

Lua 是单遍扫描，处理完一个节点就重置一个节点的状态，直接设置成明确状态会导致它在 GC 结束时不能更改。

```cpp
/*
** Common Header for all collectable objects (in macro form, to be
** included in other objects)
*/
#define CommonHeader    GCObject *next; lu_byte tt; lu_byte marked


/*
** Common header in struct form
*/
typedef struct GCheader {
  CommonHeader;
} GCheader;
```

在 traversetable () 方法遍历对象链表时，会设置 marked 字段为对应的标记状态，对于 Table 类型，
这个字段对应 KEYWEAKBIT 和 VALUEWEAKBIT 的比特位用来标记弱引用。Table 可以使用除 nil 以外的
一切对象作为 key 使用，当一个元素的 key 或 value 是弱引用，表示引用关系不牢固，*weak table* 
表示引用关系可以随便处理，GC 程序会直接忽略弱引用表，即将只被弱引用的对象作为垃圾对象看待。

蜉蝣表就是指具有弱键和强值的表，ephemeron table。只有它的 key 对象可达，并且引用不是来自其对应
的 value 时，value 对象才看作可达，key-value 不会被清理回收。

可以使用 `__mode` 和 `__gc` 等 metatable 字段来协调 GC 程序的操作。

Lua 5.1 明确 GC 流程可能的五大阶段，Lua 5.4.4 更补充到 9 个阶段，启始步骤是标记链表的根节点。

```cpp
/*
** Lua 5.1 Possible states of the Garbage Collector
*/
#define GCSpause    0
#define GCSpropagate    1
#define GCSsweepstring  2
#define GCSsweep    3
#define GCSfinalize 4

/*
** Lua 5.4.4 Possible states of the Garbage Collector
*/
#define GCSpropagate    0
#define GCSenteratomic  1
#define GCSatomic   2
#define GCSswpallgc 3
#define GCSswpfinobj    4
#define GCSswptobefnz   5
#define GCSswpend   6
#define GCScallfin  7
#define GCSpause    8
```

Lua 5.1 采用的三色标记算法，实际是四色标记算法，白色分为 0 型和 1 型，GC 回收时会设置 
globalstate.currentwhite 为其中一种。这样在回收时，如果当前对象的白色标记不为 currentwhite，
则认为其暂不可回收，需要等到下一次 GC 才能决定是否回收。

最新的 Lua 5.4 引入了分代 GC 模型，Main changes 如下：

   1. new generational mode for garbage collection
   2. to-be-closed variables
   3. const variables
   4. userdata can have multiple user values
   5. new implementation for math.random
   6. warning system
   7. debug information about function arguments and returns
   8. new semantics for the integer 'for' loop
   9. optional 'init' argument to 'string.gmatch'
   10. new functions 'lua_resetthread' and 'coroutine.close'
   11. string-to-number coercions moved to the string library
   12. allocation function allowed to fail when shrinking a memory block
   13. new format '%p' in 'string.format'
   14. utf8 library accepts codepoints up to 2^31



## ⚡ Debug Interface
                                                [contents] [index] *lua-debug*
+ [§4.9]   - The Debug Interface
+ [§6.10]  - The Debug Library

Lua 并没有提供调试工具，但是通过 functions and *hooks* 提个了一个调用接口。通过它只可以获取
解析器内部的信息。调试工具基本的功能包括调用堆栈信息、表达式监视、局部或全局变量查看，单步或断点调试，
或者远程调试等等。

现有的图形调试工具有以下这些：

   ➡ SciTE − The default windows IDE for Lua provides multiple debugging 
     facilities like breakpoints, step, step into, step over, watch variables
     and so on.

   ➡ Decoda − This is a graphical debugger with remote debugging support.

   ➡ ZeroBrane Studio − Lua IDE with integrated remote debugger, stack view, 
     watch view, remote console, static analyzer, and more. Works with LuaJIT, 
     Love2d, Moai, and other Lua engines; Windows, OSX, and Linux. Open source.

   ➡ akdebugger − Debugger and editor Lua plugin for Eclipse.

   ➡ luaedit − This features remote debugging, local debugging, syntax 
     highlighting, completion proposal list, parameter proposition engine, 
     advance breakpoint management (including condition system on breakpoints 
     and hit count), function listing, global and local variables listing, 
     watches, solution oriented management.

Lua 提供最基本的调试接口内容是 [lua_Debug] 结构体，它负责携带可供调用的信息，有关函数或活动记录
的不同信息。[lua_getstack] 负责填充私密部分，其它信息通过调用 [lua_getinfo] 填充。

```cpp
struct lua_Debug {
  int event;
  const char *name;           /* (n) */
  const char *namewhat;       /* (n) 'global', 'local', 'field', 'method' */
  const char *what;           /* (S) 'Lua', 'C', 'main', 'tail' */
  const char *source;         /* (S) */
  size_t srclen;              /* (S) Lua 5.4+ */
  int currentline;            /* (l) */
  int linedefined;            /* (S) */
  int lastlinedefined;        /* (S) Lua 5.2+ */
  unsigned char nups;         /* (u) number of upvalues */
  unsigned char nparams;      /* (u) Lua 5.2+ number of parameters */
  char isvararg;              /* (u) Lua 5.2+ */
  char istailcall;            /* (t) Lua 5.2+ */
  unsigned short ftransfer;   /* (r) Lua 5.4+ index of first value transferred */
  unsigned short ntransfer;   /* (r) Lua 5.4+ number of transferred values */
  char short_src[LUA_IDSIZE]; /* (S) */
                              /* private part */
  struct CallInfo *i_ci;      /* active function */
};
```

在 Lua 线程状态结构体 lua_State 中保存有两个 CallInfo 信息，一个是当前正在执行的函数信息，另
一个是一级函数，即从 C 函数执行的第一个 Lua 函数。

```cpp
  CallInfo *ci;  /* call info for current function */
  CallInfo base_ci;  /* CallInfo for first level (C calling Lua) */
```

注意结构体中的注解信息，圆括号内的字符在调用 API 填充结构体时使用，lua_getinfo 的参数 what 指定：

```cpp
    lua_Debug ar
    lua_getglobal(L, "f");  /* get global 'f' */
    lua_getinfo(L, ">S", &ar);
    printf("%d\n", ar.linedefined);
```

设置 `what` 来选择填充什么字段的内容，或者什么值要 pushed 到运行栈中：

⛏ `'n'`: 填充 `name`, `namewhat`;
⛏ `'S'`: 填充 `source`, `short_src`, `linedefined`, `lastlinedefined`, `what`;
⛏ `'l'`: 填充 `currentline`;
⛏ `'t'`: 填充 `istailcall`;
⛏ `'u'`: 填充 `nups`, `nparams`, and `isvararg`;
⛏ `'f'`: pushes onto the stack the function that is running at the given level;
⛏ `'L'`: pushes onto the stack a table whose indices are the numbers of the lines
    that are valid on the function. (A *valid line* is a line with some associated 
    code, that is, a line where you can put a break point. Non-valid lines include 
    empty lines and comments.)

    If this option is given together with option `'f'`, its table is pushed after the function.

This function returns 0 on error (for instance, an invalid option in `what`).

部分相关 C API 原型：

```cpp
lua_Hook lua_gethook (lua_State *L);
// Returns the current hook function.
void lua_sethook (lua_State *L, lua_Hook f, int mask, int count);
// Sets the debugging hook function.

int lua_gethookcount (lua_State *L);
// Returns the current hook count.

int lua_gethookmask (lua_State *L);
// Returns the current hook mask.

int lua_getinfo (lua_State *L, const char *what, lua_Debug *ar);
// Gets information about a specific function or function invocation.
```

设置 hook function 是非常有用的 Lua 调试手段，mask 参数用来指定哪些事件会触发 hook 回调。
可以指定 LUA_MASKCALL or LUA_MASKRET or LUA_MASKLINE or LUA_MASKCOUNT 四种事件。如果
指定事件包含 LUA_MASKCOUNT，那么解析器每执行 count 条指令就触发一次。

```lua
function trace()
    print(debug.traceback())
    local pos = string.gsub("$what:$currentline", '%$(%w+)', debug.getinfo(3, 'Sl'))
    print(pos)
end
debug.sethook(trace, "l")
```

对于每种 hook 事件，有以下四种调用方式：

   ➡ call hook: The hook is called just after Lua enters the new function.
   ➡ return hook: The hook is called just before Lua leaves the function.
   ➡ line hook: is called when Lua to start the execution of a new line of code.
   ➡ count hook: is called after the interpreter executes every count instructions. 

line hook 和 count hook 只在执行一个 Lua function 时有效。


以下是 Debug Library 导出的函数，Lua 5.2 和 5.1 版本比较，API 变动较大：

|  Lua 5.0 (noprefix) | Lua 5.1 (prefix db_) | Lua 5.2 (prefix db_) |
|---------------------|----------------------|----------------------|
| debug               | db_debug             | db_debug             |
| gethook             | db_gethook           | db_gethook           |
| getinfo             | db_getinfo           | db_getinfo           |
| getlocal            | db_getlocal          | db_getlocal          |
| getupvalue          | db_getupvalue        | db_getupvalue        |
| sethook             | db_sethook           | db_sethook           |
| setlocal            | db_setlocal          | db_setlocal          |
| setupvalue          | db_setupvalue        | db_setupvalue        |
| traceback [errorfb] | db_errorfb           | db_traceback         |
|                     | db_getfenv           | db_getuservalue      |
|                     | db_getmetatable      | db_getmetatable      |
|                     | db_getregistry       | db_getregistry       |
|                     | db_setfenv           | db_setuservalue      |
|                     | db_setmetatable      | db_setmetatable      |
|                     |                      | db_upvaluejoin       |
|                     |                      | db_upvalueid         |

环境设置函数 db_getfenv 和 db_setfenv 对应更新为 db_getuservalue 和 db_setuservalue。
Lua 5.4 新增了一个 db_setcstacklimit 


## ⚡ Script & Chunk
                                                 [contents] [index] *lua-script*
+ [ch5] - The Auxiliary Library

Lua 脚本也是 chunk，这是 Lua 的代码组织单元，当脚本使用 luac 工具预编译为字码码后，就叫做
预编译的 binary chunk，和脚本字符串的差别在于经过预编译后加载速度更快，但失去了文字阅读的直观。

脚本加载相关源代码文件：

  - [Auxiliary of Lua libs](lua-5.1/lauxlib.c)647 lines  函数前缀 luaL_
  - [Basic library](lua-5.1/lbaselib.c)       643 lines  函数前缀 luaB_
  - [Dump Lua chunks](lua-5.1/ldump.c)        164 lines  函数前缀 luaU_
  - [Load Lua chunks](lua-5.1/lundump.c)      223 lines  函数前缀 luaU_

相关的函数说明，主要是 Basic library 导出的基本函数：

   ➡ [dofile] 执行脚本文件，加载到当前运行环境中以供使用，新版本会从 `stdin` 读取内容；
   ➡ [loadfile] 类似 load()，但不报错误，返回一个函数，执行该函数后才可使用文件中的符号。
   ➡ [load] 加载返回的是函数,需要调用的话,还需要加括号.
   ➡ [string.dump] Returns a binary representation of the given function.
   ➡ [loadstring] Similar to load, but gets the chunk from the given string.

执行 Basic library 的加载函数，调用 luaB_load()，它会尝试通过 lua_tolstring() 识别传入的
是字符串还是 reader function，再分别执行相应的 API 加载代码：

   ➡ [luaL_loadbufferx] - Auxiliary functions for building Lua libraries
   ➡ [lua_load] - Lua API
   ➡ [load_aux] - Basic library

Lua 5.1 引入的 loadstring() 在 5.2 版本就移除了，转而 load 和 loadfile 相应增加了功能。
所有移除的函数可以通过代码配置类似 [LUA_COMPAT_LOADSTRING](lua-5.1/luaconf.h) 这样的选项
符号来重新编译 Lua 以重新启用。

```lua
-- Lua 5.0
dofile (filename)
loadfile (filename)
loadlib (libname, funcname)
loadstring (string [, chunkname])
string.dump (function)

-- Lua 5.1
-- loadlib was renamed [package.loadlib]
load (func [, chunkname])
loadfile ([filename])
loadstring (string [, chunkname])

-- Lua 5.2
-- `loadstring` is deprecated. Use `load` instead;
load (ld [, source [, mode [, env]]])
loadfile ([filename [, mode [, env]]])

-- Lua 5.3
load (chunk [, chunkname [, mode [, env]]])
string.dump (function [, strip])
```


假设模块文件 mod.lua 定义如下，使用了一条全局语句来读取传入脚本的参数，在使用 loadfile 这类函数
加载脚本时可以传入参数，而使用 dofile 它会直接执行脚本：

```lua
function foo(...)
    print("foo()", ...)
end

function bar(...)
    print("bar()", ...)
end

print("mod.lua", something, ...)

return {foo=foo}
```

使用 dofile 或 loadfile 等方法加载脚本，可以使用 assert 检测 loadfile 返回值是否为 nil：

```lua
-- local something = "local shadow"
something = "something in global"

local f = "path/to/mod.lua"
assert(loadfile(f))()
-- dofile(f)
foo()
bar()

fun, e = load("print('script to load', something, ...)")
fun("A")

binchunk = string.dump(fun, true)
fun, e = load(binchunk)
fun("B")

-- LoadBlock(): truncated precompiled chunk
fun, e = load(io.lines(f, 'L'), 'bin chunk', 'bt')
print(fun, e)
fun("C")
```

新版本 load() 函数可以从给定字符串中读取代码，也可以通过一个函数中读取代码，返回一个封装函数。如果
参数 `chunk` 传入一个函数，load() 将不断调用该函数来获取代码片段，直到该函数返回 nil。加载的
代码总是在全局环境下进行编译，所以它可以使用全局词法作用域的符号定义，但是，同名局部符号的存在会
导致全局符号不能正常访问。

load() 常用于动态执行代码，配合 io.read() 读取用户输入，io.lines() 读取脚本文件内容，这样的
读取方式会一直读取直到 io.lines() 遇到文件结束，load() 才完成代码加载。

load() 还用来读取 binary chunk，配置 luac 命令工具将 Lua 源码文件预编译为二进制字节码，这样
既可以隐藏源码内容，且加载运行速度会更快。

几乎所有使用源代码的地方，都可以使用预编译后的代码，load()、loadfile() 都可以加载预编译代码。

通过 `mode` 模式参数，可以控制读取内容的类型，默认是 `"bt"`：

   ➡ `"b"` (only binary chunks),
   ➡ `"t"` (only text chunks),
   ➡ or `"bt"` (both binary and text).

> When you load a main chunk, the resulting function will always have exactly one 
> upvalue, the _ENV variable (see §2.2). However, when you load a binary chunk 
> created from a function (see string.dump), the resulting function can have an 
> arbitrary number of upvalues, and there is no guarantee that its first upvalue 
> will be the _ENV variable. (A non-main function may not even have an _ENV upvalue.)
>
> Regardless, if the resulting function has any upvalues, its first upvalue is set 
> to the value of env, if that parameter is given, or to the value of the global 
> environment. Other upvalues are initialized with nil. All upvalues are fresh, 
> that is, they are not shared with any other function.


加载 binary chunk 可能会遇到各种错误，包括使用 luac 版本不匹配，字节码截断等问题：

    checkHeader(): version mismatch in precompiled chunk
    LoadBlock(): truncated precompiled chunk
    loadByte(): bad binary format (truncated chunk)

直接从 LuaBinaries 网站上下载到的 Win32/64 可执行程序，在加载 binary chunk 文件时也会出错。
需要使用 MSYS 等编译器在自己的系统上重新编译 Lua 源代码可以解决加载问题。使用 MinGW 编译也会出现
加载出错问题。

使用脚本自动编译脚本为字节码：
```lua
function luacguess()
    local guess = _VERSION:gsub('Lua (%d).(%d)',"luac%1%2")
    for k,v in pairs({guess,"luac"}) do
        -- pcok, isok, status, code = pcall(os.execute, v..' -v')
        isok, status, code = os.execute(v.." -v")
        print(v, isok, status, code)
        if code == 0 or isok == 0 then return v end
    end
end

local f = "c:/scripting/mod.bin"
local fi = "c:/scripting/mod.lua"
-- local isok, status, code = os.execute("uname")
-- local uname = io.popen("uname", "r"):lines('a')()
isok, e = pcall(io.popen, "uname")
if isok and "Linux" == e:lines('a')() then
    print("UNIX-like System", e:lines('a')())
    f = "/mnt/c/scripting/mod.bin"
    fi = "/mnt/c/scripting/mod.lua"
end

luac = luacguess()
if luac then
    local cmd = luac.." -o "..f.." "..fi
    print(cmd)
    os.execute(cmd)
end
```


## ⚡ Library & Module
                                                [contents] [index] *lua-library*
+ [ch4] - The Application Program Interface
+ [ch5] - The Auxiliary Library
+ [Programming in Lua - 17. Modules and Packages](Programming-in-Lua.md)
+ https://github.com/luarocks/luarocks
+ [Parsing Expression Grammars For Lua](http://www.inf.puc-rio.br/~roberto/lpeg/)
+ [LuaSocket](https://lunarmodules.github.io/luasocket/)
+ [Load Library](https://lua-users.org/wiki/LoadLibrary)

Lua 扩展库接口及相关代码文件包括：

  - [Interface from Lua to its debug API](lua-5.1/ldblib.c)     397 lines
  - [Dynamic lib loader](lua-5.1/loadlib.c)                     667 lines
  - [Lib Initialization](lua-5.1/linit.c)      38 lines  函数前缀 luaL_

模块或库本质上是代码管理的一种方式，将相关的功能打包在一起并使用统一的方法加载使用，便于代码复用。

Lua 5.1 正式开始支持模块，使用 require 函数和 package 模块，使用 module 函数来定义模块。

   ➡ Module 使用 require() 函数加载模块；
   ➡ Package 使用 package.loadlib() 函数加载 C 语言动态连接库；

Lua 5.1 或 5.0 使用旧式模块定义，调用 module() 定义一个模块，而不是返回一个 Table。

    module("mymath", package.seeall)

Lua 使用 require 函数搜索目录列表的加载来加载模块，而 LuaRocks 则是现成的模块管理工具。 

It allows you to install Lua modules as self-contained packages called rocks, 
which also contain version dependency information. This information can be used 
both during installation, so that when one rock is requested all rocks it depends 
on are installed as well, and also optionally at run time, so that when a module 
is required, the correct version is loaded. LuaRocks supports both local and 
remote repositories, and multiple local rocks trees.

Basic example

```sh
# Add a rockspec to your default configured upload server:
luarocks-admin add lpeg-0.9-1.rockspec

# you can specify which repository to use with the --server flag:
luarocks-admin add --server=dev my_rock-scm-1.rockspec
```

可以提供配置文件，设置多个仓库地址：

```lua
-- Assuming your ~/.luarocks/config.lua file looks like this:
upload_server = "main"
upload_servers = {
   main = {
      http = "www.example.com/repos/main",
      sftp = "myuser@example.com/var/www/repos/main"
   },
   dev = {
      http = "www.example.com/repos/devel-rocks",
      sftp = "myuser@example.com/var/www/repos/devel-rocks"
   },
}
```


Lua 可以加载多种模块，包括 C 语言实现的扩展模块，参考 [§6.3] -  Modules

```lua
local m = require "mod"
local f = m.foo
f()
local f = require "mod".foo -- (require("mod")).foo
```

通过 [require] 方法加载，而 package 库管理已加载的模块，这是一个 Table 数据结构，加载一个模块
之前会检查模块是否已经加载，`package.loaded[modname]` 应该是一个加载器函数，如果没有加载，
就从搜索目录列表中查找模块。

   ➡ 尝试从 [package.path] 找到加载器，加载 Lua 模块；
   ➡ 尝试从 [package.cpath] 找到加载器，加载 C 语言扩展；
   ➡ 调用默认搜索函数 [package.searchers] 找到加载器，Lua 5.1 使用 package.loaders；

一旦 `require` 找到加载器， 就使用 `modname` 和额外的参数调用加载器，额外参数取决于如何获得
加载器。如果是加载器是脚本文件，额外参数就是脚本文件名。执行模块加载并返回非 nil 值表示加载成功，
并且设置到 `package.loaded[modname]`，如加载器没有设置它，就将其设置为 true，进行记录。
最后，[require] 返回 `package.loaded[modname]` 的最终值。

通常，一个模块返回一个 Table，用来引用所有模块导出的接口，当然可以导致一个字符串或者一个数值。模块
可以嵌套，加载一个子模块，如 "mod.sub"，它会作为 key 检索 package.loaded，看看是否存在相应的
加载器。句点会当作目录分级，并按各级子目录查看模块。可以使用以下方法加载动态链接库导出的函数：

    package.loadlib (libname, funcname)

C 语言的子模块只从父模块动态链接库中加载，函数名称不支持 . 符号，使用下划线替代。
例如导出函数 luaopen_a.b 应该使用 luaopen_a_b 名称替代。

以下脚本可以打印当前已经加载的模块信息：

```lua
local found = {[package.loaded]=true}
function traverse(t, p)
    for i,v in pairs(t) do
        if type(v) == "table" and found[v] == nil then
            found[v] = true
            io.write(p..'+-- ', i, ' ==> ', tostring(v),' \n')
            traverse(v, p.."  |")
        else--if type(v) ~= 'function' then
            io.write(p.."*-- ", i, ' ==> ', string.gsub(tostring(v), "\n", "\\n"), '\n')
        end
    end
end

traverse(package.loaded, '|')
```

每个库的实现基本都需要引用：

  - Lua 解析器头文件
  - Auxiliary functions for building Lua libraries
  - Lua standard libraries 标准库头文件

创建一个库需要，以下基本操作：

  - 定义 [luaL_Reg] 结构，提供库函数信息
  - 调用 [luaL_register] 注册相关的 C 函数：

扩展库的函数编写必需符合 [lua_CFunction] 协议规定：

```c
    typedef int (*lua_CFunction) (lua_State *L);
```

每个 Lua 线程的虚拟机状态使用 lua_State 结构体表示，几乎所以函数都需要它来操作虚拟机的寄存器。
导出函数需要定义一个入口供 Lua 装入时执行初始化，名称为 luaopen_MyLuaDLL。其中 MyLuaDLL 要与
工程生成程序名一致。Lua 执行 require 或 dofile 函数加载 DLL 时会定位这个初始化方法，若只需要
调用 loadlib 加载指定 DLL 导出函数则不要求一致。


```cpp
typedef struct luaL_Reg {
  const char *name;
  lua_CFunction func;
} luaL_Reg;

typedef struct lua_State lua_State;

typedef int (*lua_CFunction) (lua_State *L);
```

以 Table 函数库为例，[Table Manipulation](lua-5.1/ltablib.c)

```cpp
#include "lua.h"

#include "lauxlib.h"
#include "lualib.h"

...

static const luaL_Reg tab_funcs[] = {
  {"concat", tconcat},
  {"foreach", foreach},
  {"foreachi", foreachi},
  {"getn", getn},
  {"maxn", maxn},
  {"insert", tinsert},
  {"remove", tremove},
  {"setn", setn},
  {"sort", sort},
  {NULL, NULL}
};


LUALIB_API int luaopen_table (lua_State *L) {
  luaL_register(L, LUA_TABLIBNAME, tab_funcs);
  return 1;
}
```

全局状态机负责打开和关闭 Lua 状态，还有线程管理，对应函数有 [lua_newstate] [lua_close] 等等：

```c
    void lua_close (lua_State *L);

    lua_State *lua_newstate (lua_Alloc f, void *ud);

    LUAI_FUNC lua_State *luaE_newthread (lua_State *L);
    LUAI_FUNC void luaE_freethread (lua_State *L, lua_State *L1);
```

以下为一个 DLL 测试代码：

```c
// cl test.c /link /DLL /out:test.dll winmm.lib
// package.loadlib([[c:\path\to\winmm.dll]], 'luaopen_winmm')

#include <stdio.h>
#include <windows.h>

__declspec(dllexport) int __cdecl luaopen_winmm(void * x) {
  printf("called test, %d\n", (int)timeGetTime());
  return 0;
}

BOOL WINAPI DllMain(HINSTANCE hinstDLL, DWORD fdwReason, LPVOID lpvReserved) {
  printf("load/unload my DLL\n");
  return TRUE;
}
```


## ⚡ Lexical Analyzer
                                          [contents] [index]  *Lexical-Analyzer*

## ⚡ Lua Parser
                                                [contents] [index]  *Lua-Parser*

Lua 将源程序编译成为字节码，然后交由虚拟机解释执行。对于每一个函数，Lua 编译器将创建一个原型(prototype)，
它由一组指令及其使用到的常量组成。

体系结构与指令系统

与虚拟机和指令相关的文件主要有两个: lopcodes.c 和 lvm.c。从名称可以看出来，这两个文件分别用于描述操作码(指令)和虚拟机。



## ⚡ OpCodes & LVM
                                                       [contents] [index]  *lvm*
- https://the-ravi-programming-language.readthedocs.io/en/latest/lua_bytecode_reference.html

2003 年后，Lua 5.0 版本开始采用基于寄存器的虚拟机，解释效率得到提升，指令也更复杂。

Stack based VM 是目前大多数的虚拟机采用实现，JVM、Python、.NET CLR、Ruby 以及 Lua 5.0 之前
的版本都是，该模型的指令一般都是在当前 stack 中存取操作数据。例如，运算 a=b+c，该模型一般操作：

   - 使用 push b/c 指令将数据推入栈，
   - 再执行 add 指令完成加法并将结构保存在栈顶，
   - 再配合 mov 这样的指令将结果保存到指定位置。

Stack Based VM 的指令都是基于当前 stack 来查找操作数的，所有操作数的存储位置是运行期决定的，
编译器不用在代码生成阶段处理数据的存储位置，实现起来相对比较简单直接。同时，指令占用存储空间小。

Register Based VM 模型中的指令会在分配好的寄存器中存取操作数，Dalvik 和 Lua 5.0+ 是基于
寄存器的虚拟机，对于上面的加法运算一般会使用 add 指令直接对寄存器操作，指令表达为 add a b c，
结果保存在 a 寄存器上。这种涉及 3 个内存地址的指令称为三址指令 Three-Address Instructions。

Register Based VM 高效直接体现在指令的作用上，用一条指令完成了上面多条指令的计算工作，并且有效
减少了内存复制操作，这样的指令系统对于效率有很大的帮助。

但是在编译器设计上，增加了代码生成阶段对寄存器分配操作，需要采用图着色算法 Graph Coloring 等
算法的处理，增加了实现的复杂度，并且指令占用更多的存储空间。

Lua 使用的这些「寄存器」跟 CPU 中真实的寄存器并无关联，因为关联机器硬件既无可移植性，也受限于可用的
寄存器数量。Lua 使用一个栈来存放它的寄存器，由一个数组加上一些索引实现。

Lua 提供了两个最基本的程序工具，一个是 lua 解释器，另一个是 luac 编译器，可以反汇编字节码。

- lua.exe - Lua stand-alone interpreter
    - [lua srouce](lua-5.1/lua.c)           377 lines
    - [lua header](lua-5.1/lua.h)           384 lines
- luac.exe - Lua compiler (saves bytecodes to files; also list bytecodes)
    - [luac srouce](lua-5.1/luac.c)         196 lines

源代码提供的 test.lua 脚本只包含一条语句，可以用来测试编译器和解释器：

```sh
> cat test.lua
print("Hello from ".._VERSION)
> luac
luac: no input files given
usage: luac [options] [filenames]
Available options are:
  -l       list (use -l -l for full listing)
  -o name  output to file 'name' (default is "luac.out")
  -p       parse only
  -s       strip debug information
  -v       show version information
  --       stop handling options
  -        stop handling options and process stdin

> luac .\test.lua
> luac -l .\luac.out

main <.\test.lua:0,0> (7 instructions at 0000000000163170)
0+ params, 3 slots, 1 upvalue, 0 locals, 3 constants, 0 functions
        1       [1]     VARARGPREP      0
        2       [1]     GETTABUP        0 0 0   ; _ENV "print"
        3       [1]     LOADK           1 1     ; "Hello from "
        4       [1]     GETTABUP        2 0 2   ; _ENV "_VERSION"
        5       [1]     CONCAT          1 2
        6       [1]     CALL            0 2 1   ; 1 in 0 out
        7       [1]     RETURN          0 1 1   ; 0 out

> luac -l -l .\test.lua

main <.\test.lua:0,0> (6 instructions, 24 bytes at 007E1AB8)
0+ params, 3 slots, 0 upvalues, 0 locals, 3 constants, 0 functions
        1       [1]     GETGLOBAL       0 -1    ; print
        2       [1]     LOADK           1 -2    ; "Hello from "
        3       [1]     GETGLOBAL       2 -3    ; _VERSION
        4       [1]     CONCAT          1 1 2
        5       [1]     CALL            0 2 1
        6       [1]     RETURN          0 1
constants (3) for 007E1AB8:
        1       "print"
        2       "Hello from "
        3       "_VERSION"
locals (0) for 007E1AB8:
upvalues (0) for 007E1AB8:
```

机器码有两种查看方式，使用一个 -l 参数是精简模式，使用两个 -l 详细模式包含常量、局部变量等数据： 

   - 前面两行是函数的基本信息，后面是函数的指令列表
   - 函数的基本信息包括：函数名称、起始行列号、指令数量、函数地址
       - params 参数个数，0+ 表示不固定参数、
       - slots 寄存器数量、
       - upvalue 数量、
       - locals 局部变量数量、
       - constants 常量数量、
       - functions 子函数数量
   - 指令列表各列依次为指令序号、对应代码行号、操作码、操作数，分号后为注释。

```sh
> hexdump luac.out
0000000 4c1b 6175 0054 9319 0a0d 0a1a 0804 7808
```

字节码文件的 LUA_SIGNATURE 为开头 4 个字节 '\033Lua'，第一个字节 0x1b 即是 Esc，这里显示的
是 Little-Endina 方式，2 字节为一组，低有效位字节显示在后面。

第 5 字节为版本号，Major & Minor Version，这里显示的是 0x54 代表 Lua 5.4。

注意，字节码文件并没有标准化，Lua 5.2 与 5.3 的头都有差别，新版本文头中使用了 LUAC_DATA，它
包含 Lua 出厂日期，参考 luaU_header() 或 luaU_dump() 函数。

Lua 的字节码组织单位是 Chunk，语法上它等价于代码块，参考手册 [§3.3.2] 

   The unit of compilation of Lua is called a *chunk*. 
   Syntactically, a chunk is simply a block.

编译后得到 Binary Chunk，可以包含一条语句的字节码，也可以包含一个 lua 脚本所编译
后的字节码，保存、加载字节码的操作为：

   - [luaU_dump](lua-5.1/ldump.c)
   - [luaU_undump](lua-5.1/lundump.c)
   - [Lua objects](lua-5.1/lobject.h) 
   - [Proto & closures auxiliaries](lua-5.1/lfunc.c)

编译器以函数为单位对源代码进行编译，脚本的全局语句作为 main 函数部分，每个函数会被编译成一个
函数原型结构 Function Prototypes，对应 typedef struct Proto，包含以下信息：

   - basic info 参数数量、局部变量数量等信息
   - bytecodes 字节码，使用指针 `Instruction *code`
   - constants 常量表
   - upvalues 闭包捕获的非局部变量表
   - debug info 调试信息
   - sub functions 子函数原型列表，使用二级指针 `struct Proto **kproto`

测试脚本中只有一条语句，没有定义函数等结构，编译得到 Chunk 只有一个主函数原型。尝试将语句用
foo 函数进行包装再编译，结果除了 main 函数原型结构，还多了一个 foo 函数原型结构：

```sh
main <t.lua:0,0> (3 instructions, 12 bytes at 0x559bc562e860)
0+ params, 2 slots, 0 upvalues, 0 locals, 1 constant, 1 function
        1       [4]     CLOSURE         0 0     ; 0x559bc562e9d0
        2       [2]     SETGLOBAL       0 -1    ; foo
        3       [4]     RETURN          0 1

function <t.lua:2,4> (6 instructions, 24 bytes at 0x559bc562e9d0)
0 params, 3 slots, 0 upvalues, 0 locals, 3 constants, 0 functions
        1       [3]     GETGLOBAL       0 -1    ; print
        2       [3]     LOADK           1 -2    ; "Hello from "
        3       [3]     GETGLOBAL       2 -3    ; _VERSION
        4       [3]     CONCAT          1 1 2
        5       [3]     CALL            0 2 1
        6       [4]     RETURN          0 1
```

Lua 5.1 升级到 5.4.0，作码数量则从 38 个增加到了 82 个，并且结构更复杂，操作模式 OpMode 从 
iABC iABx iAsBx 三选一变成五选一，操作模式决定了指令可以使用什么样的操作数。其中 A 表示目的操作
数寄存器，作为结果存储是必要部分，B 和 C 表示源操作数寄存器，可以替换成立即数 Bx 或 sBx。

```cpp
    enum OpMode {iABC, iABx, iAsBx};            /* Lua 5.1.0 */
    enum OpMode {iABC, iABx, iAsBx, iAx};       /* Lua 5.2.0 */
    enum OpMode {iABC, iABx, iAsBx, iAx, isJ};  /* Lua 5.4.0 */
```

指令 *Instruction* 定义为至少 32-bit 无符号整数，Lua 5.1 指令格式如下，左侧为最低有效位：

    +=============================================================+
    | Instructions                                                | ...
    +=============================================================+
    0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
    ----------- --------------- ----------------- -----------------
    opcode 6-bit     A 8-bit         B 9-bit           C 9-bit     

    `Bx' : 18 bits (`B' and `C' together)
    `sBx' : signed Bx

Lua 5.4 指令格式如下：

           |3 3 2 2 2 2 2 2|2 2 2 2 1 1 1 1|1|1 1 1 1 1 0 0 0|0 0 0 0 0 0 0|
           |1 0 9 8 7 6 5 4|3 2 1 0 9 8 7 6|5|4 3 2 1 0 9 8 7|6 5 4 3 2 1 0|
    ------ |---------------|---------------|-|---------------|-------------|
    iABC   |      C(8)     |      B(8)     |k|     A(8)      |   Op(7)     |
    ------ |---------------------------------|---------------|-------------|
    iABx   |            Bx(17)               |     A(8)      |   Op(7)     |
    ------ |---------------------------------|---------------|-------------|
    iAsBx  |           sBx (signed)(17)      |     A(8)      |   Op(7)     |
    ------ |-------------------------------------------------|-------------|
    iAx    |                      Ax(25)                     |   Op(7)     |
    isJ    |                      sJ(25)                     |   Op(7)     |


- [opcodes](lua-5.1/lopcodes.c)
- [opcodes](lua-5.1/lopcodes.h)

```cpp
typedef enum {
/*----------------------------------------------------------------------
name          args      description
------------------------------------------------------------------------*/
OP_MOVE,     /* A B     R(A) := R(B)                                         */
OP_LOADK,    /* A Bx    R(A) := Kst(Bx)                                      */
OP_LOADBOOL, /* A B C   R(A) := (Bool)B; if (C) pc++                         */
OP_LOADNIL,  /* A B     R(A) := ... := R(B) := nil                           */
OP_GETUPVAL, /* A B     R(A) := UpValue[B]                                   */

OP_GETGLOBAL,/* A Bx    R(A) := Gbl[Kst(Bx)]                                 */
OP_GETTABLE, /* A B C   R(A) := R(B)[RK(C)]                                  */

OP_SETGLOBAL,/* A Bx    Gbl[Kst(Bx)] := R(A)                                 */
OP_SETUPVAL, /* A B     UpValue[B] := R(A)                                   */
OP_SETTABLE, /* A B C   R(A)[RK(B)] := RK(C)                                 */

OP_NEWTABLE, /* A B C   R(A) := {} (size = B,C)                              */

OP_SELF,     /* A B C   R(A+1) := R(B); R(A) := R(B)[RK(C)]                  */

OP_ADD,      /* A B C   R(A) := RK(B) + RK(C)                                */
OP_SUB,      /* A B C   R(A) := RK(B) - RK(C)                                */
OP_MUL,      /* A B C   R(A) := RK(B) * RK(C)                                */
OP_DIV,      /* A B C   R(A) := RK(B) / RK(C)                                */
OP_MOD,      /* A B C   R(A) := RK(B) % RK(C)                                */
OP_POW,      /* A B C   R(A) := RK(B) ^ RK(C)                                */
OP_UNM,      /* A B     R(A) := -R(B)                                        */
OP_NOT,      /* A B     R(A) := not R(B)                                     */
OP_LEN,      /* A B     R(A) := length of R(B)                               */

OP_CONCAT,   /* A B C   R(A) := R(B).. ... ..R(C)                            */

OP_JMP,      /* sBx     pc+=sBx                                              */

OP_EQ,       /* A B C   if ((RK(B) == RK(C)) ~= A) then pc++                 */
OP_LT,       /* A B C   if ((RK(B) <  RK(C)) ~= A) then pc++                 */
OP_LE,       /* A B C   if ((RK(B) <= RK(C)) ~= A) then pc++                 */

OP_TEST,     /* A C     if not (R(A) <=> C) then pc++                        */ 
OP_TESTSET,  /* A B C   if (R(B) <=> C) then R(A) := R(B) else pc++          */ 

OP_CALL,     /* A B C   R(A), ... ,R(A+C-2) := R(A)(R(A+1), ... ,R(A+B-1))   */
OP_TAILCALL, /* A B C   return R(A)(R(A+1), ... ,R(A+B-1))                   */
OP_RETURN,   /* A B     return R(A), ... ,R(A+B-2)  (see note)               */

OP_FORLOOP,  /* A sBx   R(A)+=R(A+2);
                        if R(A) <?= R(A+1) then { pc+=sBx; R(A+3)=R(A) }     */
OP_FORPREP,  /* A sBx   R(A)-=R(A+2); pc+=sBx                                */

OP_TFORLOOP, /* A C R(A+3), ... ,R(A+3+C) := R(A)(R(A+1), R(A+2)); 
                        if R(A+3) ~= nil then { pc++; R(A+2)=R(A+3); }       */ 
OP_SETLIST,  /* A B C   R(A)[(C-1)*FPF+i] := R(A+i), 1 <= i <= B             */

OP_CLOSE,    /* A       close all variables in the stack up to (>=) R(A      )*/
OP_CLOSURE,  /* A Bx    R(A) := closure(KPROTO[Bx], R(A), ... ,R(A+n))       */

OP_VARARG    /* A B     R(A), R(A+1), ..., R(A+B-1) = vararg                 */
} OpCode;
```


# 🚩 Lua 5.3 Reference Manual
- http://www.lua.org/manual/5.3/

The reference manual is the official definition of the Lua language.
For a complete introduction to Lua programming, see the book
<A HREF="http://www.lua.org/pil/">Programming in Lua</A>.
<A HREF="http://www.lua.org/manual/">other versions</A>

                                                              [contents] [index]

Copyright © 2015-2020 Lua.org, PUC-Rio. Freely available under the terms of
the <A HREF="http://www.lua.org/license.html">Lua license</A>.


## ⚡ Contents
                                                             [index]  *contents*

    🚩 Intro & Installation                                              [intro]
    🚩 Lua Features                                                   [features]
    🚩 Quick Lua Tour                                                     [tour]
    - ex -- hello.lua                                                [hello.lua]
    - ex -- globals.lua                                            [globals.lua]
    - ex -- bisect.lua                                              [bisect.lua]
    - ex -- sieve.lua                                                [sieve.lua]
    - ex -- account.lua                                            [account.lua]
    - ex -- File I/O                                                 [ex-fileio]
    - ex -- CLI & shell                                                 [ex-cli]
    - ex2  - Comments.                                                     [ex2]
    - ex3  - Variables.                                                    [ex3]
    - ex5  - More Variable names.                                          [ex5]
    - ex7  - Keywords.                                                     [ex7]
    - ex8  - Strings.                                                      [ex8]
    - ex9  - Assignments.                                                  [ex9]
    - ex10 - More Assignments.                                            [ex10]
    - ex13 - More Output.                                                 [ex13]
    - ex14 - Tables.                                                      [ex14]
    - ex15 - More Tables.                                                 [ex15]
    - ex18 - if elseif else statement                                     [ex18]
    - ex19 - Conditional assignment.                                      [ex19]
    - ex20 - while statement.                                             [ex20]
    - ex21 - repeat until statement.                                      [ex21]
    - ex22 - for statement.                                               [ex22]
    - ex23 - More for statement.                                          [ex23]
    - ex24 - Printing tables.                                             [ex24]
    - ex25 - break statement. -- break is used to exit a loop.            [ex25]
    - ex26 - Functions.                                                   [ex26]
    - ex28 - More functions.                                              [ex28]
    - ex29 - Variable scoping and functions.                              [ex29]
    - ex30 - Formatted printing.                                          [ex30]
    - ex32 - Standard Libraries - math.                                   [ex32]
    - ex33 - Standard Libraries - string.                                 [ex33]
    - ex35 - Standard Libraries - input/output.                           [ex35]
    - ex36 - Standard Libraries - operating system facilities.            [ex36]
    - ex37 - External Libraries.                                          [ex37]

    🚩 Lua Sources                                                  [lua-source]
    ⚡ Datatypes                                                 [lua-datatypes]
    ⚡ Lua Table                                                     [lua-table]
    ⚡ Function & Closures                                            [closures]
    ⚡ Coroutine                                                     [coroutine]
    ⚡ Garbage Collect                                                      [gc]
    ⚡ Debug Interface                                               [lua-debug]
    ⚡ Script & Chunk                                               [lua-script]
    ⚡ Library & Module                                            [lua-library]
    ⚡ Lexical Analyzer                                       [Lexical-Analyzer]
    ⚡ Lua Parser                                                   [Lua-Parser]
    ⚡ OpCodes & LVM                                                       [lvm]

    🚩 Lua 5.3 Reference Manual

    ⚡[ch1] - Introduction

    ⚡[ch2] - Basic Concepts

      [§2.1]   - Values and Types
      [§2.2]   - Environments and the Global Environment
      [§2.3]   - Error Handling
      [§2.4]   - Metatables and Metamethods
      [§2.5]   - Garbage Collection
      [§2.5.1] - Garbage-Collection Metamethods
      [§2.5.2] - Weak Tables
      [§2.6]   - Coroutines

    ⚡[ch3] - The Language

      [§3.1]   - Lexical Conventions
      [§3.2]   - Variables
      |§3.3|   - Statements
      [§3.3.1] - Blocks
      [§3.3.2] - Chunks
      [§3.3.3] - Assignment
      [§3.3.4] - Control Structures
      [§3.3.5] - For Statement
      [§3.3.6] - Function Calls as Statements
      [§3.3.7] - Local Declarations
      [§3.4]   - Expressions
      [§3.4.1] - Arithmetic Operators
      [§3.4.2] - Bitwise Operators
      [§3.4.3] - Coercions and Conversions
      [§3.4.4] - Relational Operators
      [§3.4.5] - Logical Operators
      [§3.4.6] - Concatenation
      [§3.4.7] - The Length Operator
      [§3.4.8] - Precedence
      [§3.4.9] - Table Constructors
      [§3.4.10]- Function Calls
      [§3.4.11]- Function Definitions
      [§3.5]   - Visibility Rules

    ⚡[ch4] - The Application Program Interface

      [§4.1]   - The Stack
      [§4.2]   - Stack Size
      [§4.3]   - Valid and Acceptable Indices
      [§4.4]   - C Closures
      [§4.5]   - Registry
      [§4.6]   - Error Handling in C
      [§4.7]   - Handling Yields in C
      [§4.8]   - Functions and Types
      [§4.9]   - The Debug Interface

    ⚡[ch5] - The Auxiliary Library

      [§5.1]   - Functions and Types

    ⚡[ch6] - Standard Libraries

      [§6.1]   - Basic Functions
      [§6.2]   - Coroutine Manipulation
      [§6.3]   - Modules
      [§6.4]   - String Manipulation
      [§6.4.1] - Patterns
      [§6.4.2] - Format Strings for Pack and Unpack
      [§6.5]   - UTF-8 Support
      [§6.6]   - Table Manipulation
      [§6.7]   - Mathematical Functions
      [§6.8]   - Input and Output Facilities
      [§6.9]   - Operating System Facilities
      [§6.10]  - The Debug Library

    ⚡[ch7] - Lua Standalone


    ⚡[ch8] - Incompatibilities with the Previous Version

      [§8.1]   - Changes in the Language
      [§8.2]   - Changes in the Libraries
      [§8.3]   - Changes in the API

    ⚡ Lua 5.1 - ch7 Incompatibilities with the Previous Version    [lua5.1-ch7]

      7.1 - Changes in the Language                                 [lua5.1-7.1]
      7.2 - Changes in the Libraries                                [lua5.1-7.2]
      7.3 - Changes in the API                                      [lua5.1-7.3]

    ⚡ Lua 5.2 - ch8 Incompatibilities with the Previous Version   [lua5.2-ch8]

      8.1 - Changes in the Language                                 [lua5.2-8.1]
      8.2 - Changes in the Libraries                                [lua5.2-8.2]
      8.3 - Changes in the API                                      [lua5.2-8.3]

    ⚡ Lua 5.4 - ch8 Incompatibilities with the Previous Version    [lua5.4-ch8]

      8.1 - Incompatibilities in the Language                       [lua5.4-8.1]
      8.2 - Incompatibilities in the Libraries                      [lua5.4-8.2]
      8.3 - Incompatibilities in the API                            [lua5.4-8.3]


    ⚡[ch9] - The Complete Syntax of Lua



## ⚡ Index
                                                             [contents]  *index*
- ⛏ Lua functions                                               [Lua-functions]
     [basic]        [os]
     [coroutine]    [package]
     [debug]        [string] 
     [io]           [table]
     [math]         [utf8] 
- ⛏ Metamethods                                                   [metamethods]
- ⛏ Environment variables                               [environment-variables]
- ⛏ C API                                                               [C-API]
- ⛏ Auxiliary library                                       [auxiliary-library]
- ⛏ Standard library                                         [standard-library]
- ⛏ constants                                                       [constants]

### ⛏ Lua functions
                                                                 *Lua-functions*
|----------------------|    |-------------------|   |----------------------|
|----------------------|    |-------------------|   |----------------------|
*basic*                     *io*                    *os*                    
|_G|                        |io.close|              |os.clock|              
|_VERSION|                  |io.flush|              |os.date|               
|assert|                    |io.input|              |os.difftime|           
|collectgarbage|            |io.lines|              |os.execute|            
|dofile|                    |io.open|               |os.exit|               
|error|                     |io.output|             |os.getenv|             
|getmetatable|              |io.popen|              |os.remove|             
|ipairs|                    |io.read|               |os.rename|             
|load|                      |io.stderr|             |os.setlocale|          
|loadfile|                  |io.stdin|              |os.time|               
|next|                      |io.stdout|             |os.tmpname|            
|pairs|                     |io.tmpfile|            |----------------------|
|pcall|                     |io.type|               *package*               
|print|                     |io.write|              |----------------------|
|rawequal|                  |file:close|            |package.config|        
|rawget|                    |file:flush|            |package.cpath|         
|rawlen|                    |file:lines|            |package.loaded|        
|rawset|                    |file:read|             |package.loadlib|       
|require|                   |file:seek|             |package.path|          
|select|                    |file:setvbuf|          |package.preload|       
|setmetatable|              |file:write|            |package.searchers|     
|tonumber|                  |-------------------|   |package.searchpath|    
|tostring|                  *math*                  |----------------------|
|type|                      |-------------------|   *string*                
|xpcall|                    |math.abs|              |----------------------|
|----------------------|    |math.acos|             |string.byte|           
*coroutine*                 |math.asin|             |string.char|           
|----------------------|    |math.atan|             |string.dump|           
|coroutine.create|          |math.ceil|             |string.find|           
|coroutine.isyieldable|     |math.cos|              |string.format|         
|coroutine.resume|          |math.deg|              |string.gmatch|         
|coroutine.running|         |math.exp|              |string.gsub|           
|coroutine.status|          |math.floor|            |string.len|            
|coroutine.wrap|            |math.fmod|             |string.lower|          
|coroutine.yield|           |math.huge|             |string.match|          
|----------------------|    |math.log|              |string.pack|           
*debug*                     |math.max|              |string.packsize|       
|----------------------|    |math.maxinteger|       |string.rep|            
|debug.debug|               |math.min|              |string.reverse|        
|debug.gethook|             |math.mininteger|       |string.sub|            
|debug.getinfo|             |math.modf|             |string.unpack|         
|debug.getlocal|            |math.pi|               |string.upper|          
|debug.getmetatable|        |math.rad|              |----------------------|
|debug.getregistry|         |math.random|           *table*                 
|debug.getupvalue|          |math.randomseed|       |----------------------|
|debug.getuservalue|        |math.sin|              |table.concat|          
|debug.sethook|             |math.sqrt|             |table.insert|          
|debug.setlocal|            |math.tan|              |table.move|            
|debug.setmetatable|        |math.tointeger|        |table.pack|            
|debug.setupvalue|          |math.type|             |table.remove|          
|debug.setuservalue|        |math.ult|              |table.sort|            
|debug.traceback|                                   |table.unpack|          
|debug.upvalueid|                                   |----------------------|
|debug.upvaluejoin|                                 *utf8*                  
                                                    |----------------------|
                                                    |utf8.char|             
                                                    |utf8.charpattern|      
                                                    |utf8.codepoint|        
                                                    |utf8.codes|            
                                                    |utf8.len|              
                                                    |utf8.offset|           

### ⛏ Metamethods
                                                                   *metamethods*
    |__add|                 |__idiv|               |__name|     
    |__band|                |__index|              |__newindex| 
    |__bnot|                |__le|                 |__pairs|    
    |__bor|                 |__len|                |__pow|      
    |__bxor|                |__lt|                 |__shl|      
    |__call|                |__metatable|          |__shr|      
    |__concat|              |__mod|                |__sub|      
    |__div|                 |__mode|               |__tostring| 
    |__eq|                  |__mul|                |__unm|      
    |__gc|                          


### ⛏ Environment variables
                                                         *environment-variables*
|LUA_CPATH|             
|LUA_CPATH_5_3|         
|LUA_INIT|              
|LUA_INIT_5_3|          
|LUA_PATH|              
|LUA_PATH_5_3|          


### ⛏ C API
                                                                         *C-API*
|lua_Alloc|              |lua_isboolean|              |lua_rawgetp|       
|lua_CFunction|          |lua_iscfunction|            |lua_rawlen|        
|lua_Debug|              |lua_isfunction|             |lua_rawset|        
|lua_Hook|               |lua_isinteger|              |lua_rawseti|       
|lua_Integer|            |lua_islightuserdata|        |lua_rawsetp|       
|lua_KContext|           |lua_isnil|                  |lua_register|      
|lua_KFunction|          |lua_isnone|                 |lua_remove|        
|lua_Number|             |lua_isnoneornil|            |lua_replace|       
|lua_Reader|             |lua_isnumber|               |lua_resume|        
|lua_State|              |lua_isstring|               |lua_rotate|        
|lua_Unsigned|           |lua_istable|                |lua_setallocf|     
|lua_Writer|             |lua_isthread|               |lua_setfield|      
|lua_absindex|           |lua_isuserdata|             |lua_setglobal|     
|lua_arith|              |lua_isyieldable|            |lua_sethook|       
|lua_atpanic|            |lua_len|                    |lua_seti|          
|lua_call|               |lua_load|                   |lua_setlocal|      
|lua_callk|              |lua_newstate|               |lua_setmetatable|  
|lua_checkstack|         |lua_newtable|               |lua_settable|      
|lua_close|              |lua_newthread|              |lua_settop|        
|lua_compare|            |lua_newuserdata|            |lua_setupvalue|    
|lua_concat|             |lua_next|                   |lua_setuservalue|  
|lua_copy|               |lua_numbertointeger|        |lua_status|        
|lua_createtable|        |lua_pcall|                  |lua_stringtonumber|
|lua_dump|               |lua_pcallk|                 |lua_toboolean|     
|lua_error|              |lua_pop|                    |lua_tocfunction|   
|lua_gc|                 |lua_pushboolean|            |lua_tointeger|     
|lua_getallocf|          |lua_pushcclosure|           |lua_tointegerx|    
|lua_getextraspace|      |lua_pushcfunction|          |lua_tolstring|     
|lua_getfield|           |lua_pushfstring|            |lua_tonumber|      
|lua_getglobal|          |lua_pushglobaltable|        |lua_tonumberx|     
|lua_gethook|            |lua_pushinteger|            |lua_topointer|     
|lua_gethookcount|       |lua_pushlightuserdata|      |lua_tostring|      
|lua_gethookmask|        |lua_pushliteral|            |lua_tothread|      
|lua_geti|               |lua_pushlstring|            |lua_touserdata|    
|lua_getinfo|            |lua_pushnil|                |lua_type|          
|lua_getlocal|           |lua_pushnumber|             |lua_typename|      
|lua_getmetatable|       |lua_pushstring|             |lua_upvalueid|     
|lua_getstack|           |lua_pushthread|             |lua_upvalueindex|  
|lua_gettable|           |lua_pushvalue|              |lua_upvaluejoin|   
|lua_gettop|             |lua_pushvfstring|           |lua_version|       
|lua_getupvalue|         |lua_rawequal|               |lua_xmove|         
|lua_getuservalue|       |lua_rawget|                 |lua_yield|         
|lua_insert|             |lua_rawgeti|                |lua_yieldk|        


### ⛏ Auxiliary library
                                                             *auxiliary-library*
|luaL_Buffer|           |luaL_checkversion|       |luaL_optinteger|    
|luaL_Reg|              |luaL_dofile|             |luaL_optlstring|    
|luaL_Stream|           |luaL_dostring|           |luaL_optnumber|     
|luaL_addchar|          |luaL_error|              |luaL_optstring|     
|luaL_addlstring|       |luaL_execresult|         |luaL_prepbuffer|    
|luaL_addsize|          |luaL_fileresult|         |luaL_prepbuffsize|  
|luaL_addstring|        |luaL_getmetafield|       |luaL_pushresult|    
|luaL_addvalue|         |luaL_getmetatable|       |luaL_pushresultsize|
|luaL_argcheck|         |luaL_getsubtable|        |luaL_ref|           
|luaL_argerror|         |luaL_gsub|               |luaL_requiref|      
|luaL_buffinit|         |luaL_len|                |luaL_setfuncs|      
|luaL_buffinitsize|     |luaL_loadbuffer|         |luaL_setmetatable|  
|luaL_callmeta|         |luaL_loadbufferx|        |luaL_testudata|     
|luaL_checkany|         |luaL_loadfile|           |luaL_tolstring|     
|luaL_checkinteger|     |luaL_loadfilex|          |luaL_traceback|     
|luaL_checklstring|     |luaL_loadstring|         |luaL_typename|      
|luaL_checknumber|      |luaL_newlib|             |luaL_unref|         
|luaL_checkoption|      |luaL_newlibtable|        |luaL_where|         
|luaL_checkstack|       |luaL_newmetatable|       
|luaL_checkstring|      |luaL_newstate|           
|luaL_checktype|        |luaL_openlibs|           
|luaL_checkudata|       |luaL_opt|                                 


### ⛏ Standard library
                                                              *standard-library*
|luaopen_base|          |luaopen_os|            
|luaopen_coroutine|     |luaopen_package|       
|luaopen_debug|         |luaopen_string|        
|luaopen_io|            |luaopen_table|         
|luaopen_math|          |luaopen_utf8|          


### ⛏ Constants
                                                                     *constants*

|LUA_ERRERR|            |LUA_OK|              |LUA_RIDX_GLOBALS|     
|LUA_ERRFILE|           |LUA_OPADD|           |LUA_RIDX_MAINTHREAD|  
|LUA_ERRGCMM|           |LUA_OPBAND|          |LUA_TBOOLEAN|         
|LUA_ERRMEM|            |LUA_OPBNOT|          |LUA_TFUNCTION|        
|LUA_ERRRUN|            |LUA_OPBOR|           |LUA_TLIGHTUSERDATA|   
|LUA_ERRSYNTAX|         |LUA_OPBXOR|          |LUA_TNIL|             
|LUA_HOOKCALL|          |LUA_OPDIV|           |LUA_TNONE|            
|LUA_HOOKCOUNT|         |LUA_OPEQ|            |LUA_TNUMBER|          
|LUA_HOOKLINE|          |LUA_OPIDIV|          |LUA_TSTRING|          
|LUA_HOOKRET|           |LUA_OPLE|            |LUA_TTABLE|           
|LUA_HOOKTAILCALL|      |LUA_OPLT|            |LUA_TTHREAD|          
|LUA_MASKCALL|          |LUA_OPMOD|           |LUA_TUSERDATA|        
|LUA_MASKCOUNT|         |LUA_OPMUL|           |LUA_USE_APICHECK|     
|LUA_MASKLINE|          |LUA_OPPOW|           |LUA_YIELD|            
|LUA_MASKRET|           |LUA_OPSHL|           |LUAL_BUFFERSIZE|      
|LUA_MAXINTEGER|        |LUA_OPSHR|           
|LUA_MININTEGER|        |LUA_OPSUB|           
|LUA_MINSTACK|          |LUA_OPUNM|           
|LUA_MULTRET|           |LUA_REFNIL|          
|LUA_NOREF|             |LUA_REGISTRYINDEX|   


Last update: Tue Aug 25 13:45:14 UTC 2020


## ⚡ 1 -  Introduction
                                                        [contents] [index] *ch1*

Lua is a powerful, efficient, lightweight, embeddable scripting language.
It supports 
    - procedural programming,
    - object-oriented programming, 
    - functional programming,
    - data-driven programming, 
    - and data description.

Lua combines simple procedural syntax with powerful data description constructs 
based on associative arrays and extensible semantics. Lua is dynamically typed,
runs by interpreting bytecode with a register-based virtual machine, and has 
automatic memory management with incremental garbage collection, making it ideal
for configuration, scripting, and rapid prototyping.

Lua is implemented as a library, written in *clean C*, the common subset of 
Standard C and C++. The Lua distribution includes a host program called `lua`,
which uses the Lua library to offer a complete, standalone Lua interpreter,
for interactive or batch use. Lua is intended to be used both as a powerful, 
lightweight, embeddable scripting language for any program that needs one,
and as a powerful but lightweight and efficient stand-alone language.

As an extension language, Lua has no notion of a "main" program: it works 
*embedded* in a host client, called the *embedding program* or simply the *host*.
(Frequently, this host is the stand-alone `lua` program.) The host program can 
invoke functions to execute a piece of Lua code, can write and read Lua variables,
and can register C functions to be called by Lua code. Through the use of C 
functions, Lua can be augmented to cope with a wide range of different domains,
thus creating customized programming languages sharing a syntactical framework.

Lua is free software, and is provided as usual with no guarantees, as stated in 
its license. The implementation described in this manual is available
at Lua's official web site, `www.lua.org`.

Like any other reference manual, this document is dry in places. For a discussion 
of the decisions behind the design of Lua, see the technical papers available at
Lua's web site. For a detailed introduction to programming in Lua,
see Roberto's book, *Programming in Lua*.


## ⚡ 2 -  Basic Concepts
                                                        [contents] [index] *ch2*
This section describes the basic concepts of the language.


### ⛏ 2.1 -  Values and Types
                                                       [contents] [index] *§2.1*
Lua is a *dynamically typed language*. This means that variables do not have 
types; only values do. There are no type definitions in the language.
All values carry their own type.

All values in Lua are *first-class values*. This means that all values can be 
stored in variables, passed as arguments to other functions, and returned as 
results.

There are eight basic types in Lua: 

   1. [nil],
   2. [boolean], 
   3. [number], 
   4. [string], 
   5. [function], 
   6. [userdata],
   7. [thread], 
   8. and [table].

The type *nil* has one single value, nil, whose main property is to be different
from any other value; it usually represents the absence of a useful value.

The type *boolean* has two values, false and true. Both nil and false make a 
condition false; any other value makes it true.

The type *number* represents both integer numbers and real (floating-point) numbers.

The type *string* represents immutable sequences of bytes.

Lua is 8-bit clean: 
strings can contain any 8-bit value, including embedded zeros (`'\0'`).

Lua is also encoding-agnostic;
it makes no assumptions about the contents of a string.


The type *number* uses two internal representations, or two subtypes, one called
*integer* and the other called *float*. Lua has explicit rules about when each 
representation is used, but it also converts between them automatically as needed
(see  [§3.4.3]). Therefore, the programmer may choose to mostly ignore the difference
between integers and floats or to assume complete control over the representation 
of each number. Standard Lua uses 64-bit integers and double-precision (64-bit) 
floats, but you can also compile Lua so that it uses 32-bit integers and/or 
single-precision (32-bit) floats. The option with 32 bits for both integers and 
floats is particularly attractive for small machines and embedded systems.
(See macro `LUA_32BITS` in file `luaconf.h`.)


Lua can call (and manipulate) functions written in Lua and functions written in C 
(see  [§3.4.10]). Both are represented by the type *function*.


The type *userdata* is provided to allow arbitrary C data to be stored in Lua 
variables. A userdata value represents a block of raw memory. There are two kinds
of userdata:

  1. *full userdata*, which is an object with a block of memory managed by Lua,
  2. and *light userdata*, which is simply a C pointer value.

Userdata has no predefined operations in Lua, except assignment and identity test.
By using *metatables*, the programmer can define operations for full userdata values
(see  [§2.4]).
Userdata values cannot be created or modified in Lua, only through the C API.
This guarantees the integrity of data owned by the host program.


The type *thread* represents independent threads of execution and it is used to
implement coroutines (see  [§2.6]). Lua threads are not related to operating-system 
threads. Lua supports coroutines on all systems, even those that do not support 
threads natively.


The type *table* implements associative arrays, that is, arrays that can have as
indices not only numbers, but any Lua value except nil and NaN. (*Not a Number*
is a special value used to represent undefined or unrepresentable numerical 
results, such as `0/0`.) Tables can be *heterogeneous*; that is, they can contain
values of all types (except nil). Any key with value nil is not considered part 
of the table. Conversely, any key that is not part of a table has an associated 
value nil.


Tables are the sole data-structuring mechanism in Lua; they can be used to 
represent ordinary arrays, lists, symbol tables, sets, records, graphs, trees, etc.
To represent records, Lua uses the field name as an index. The language supports 
this representation by providing `a.name` as syntactic sugar for `a["name"]`. 
There are several convenient ways to create tables in Lua (see  [§3.4.9]).

Like indices, the values of table fields can be of any type. In particular, 
because functions are first-class values, table fields can contain functions. 
Thus tables can also carry *methods* (see  [§3.4.11]).


The indexing of tables follows the definition of raw equality in the language.
The expressions `a[i]` and `a[j]` denote the same table element if and only if 
`i` and `j` are raw equal (that is, equal without metamethods). In particular, 
floats with integral values are equal to their respective integers (e.g., 
`1.0 == 1`). To avoid ambiguities, any float with integral value used as a key 
is converted to its respective integer. For instance, if you write `a[2.0] = true`,
the actual key inserted into the table will be the integer `2`. (On the other 
hand, 2 and "2" are different Lua values and therefore denote different table 
entries.)


Tables, functions, threads, and (full) userdata values are *objects*: variables 
do not actually *contain* these values, only *references* to them. Assignment, 
parameter passing, and function returns always manipulate references to such 
values; these operations do not imply any kind of copy.


The library function  [type] returns a string describing the type of a given value
(see  [§6.1]).



### ⛏ 2.2 -  Environments and the Global Environment
                                                       [contents] [index] *§2.2*

As will be discussed in [§3.2] and [§3.3.3], any reference to a free name (that is,
a name not bound to any declaration) `var` is syntactically translated to `_ENV.var`.
Moreover, every chunk is compiled in the scope of an external local variable 
named `_ENV` (see  [§3.3.2]), so `_ENV` itself is never a free name in a chunk.


Despite the existence of this external `_ENV` variable and the translation of 
free names, `_ENV` is a completely regular name. In particular, you can define 
new variables and parameters with that name. Each reference to a free name uses 
the `_ENV` that is visible at that point in the program, following the usual 
visibility rules of Lua (see  [§3.5]).


Any table used as the value of `_ENV` is called an *environment*.


Lua keeps a distinguished environment called the *global environment*.
This value is kept at a special index in the C registry (see  [§4.5]).
In Lua, the global variable  [_G] is initialized with this same value.
( [_G] is never used internally.)


When Lua loads a chunk, the default value for its `_ENV` upvalue is the global 
environment (see  [load]). Therefore, by default, free names in Lua code refer 
to entries in the global environment (and, therefore, they are also called 
*global variables*).

Moreover, all standard libraries are loaded in the global environment and some 
functions there operate on that environment. You can use [load] (or [loadfile])
to load a chunk with a different environment. 
(In C, you have to load the chunk and then change the value of its first upvalue.)



### ⛏ 2.3 -  Error Handling
                                                       [contents] [index] *§2.3*
Because Lua is an embedded extension language, all Lua actions start from C code 
in the host program calling a function from the Lua library. (When you use Lua 
standalone, the `lua` application is the host program.) Whenever an error occurs 
during the compilation or execution of a Lua chunk, control returns to the host, 
which can take appropriate measures (such as printing an error message).


Lua code can explicitly generate an error by calling the [error] function. 
If you need to catch errors in Lua, you can use [pcall] or [xpcall] to call 
a given function in *protected mode*.


Whenever there is an error, an *error object* (also called an *error message*) 
is propagated with information about the error. Lua itself only generates errors 
whose error object is a string, but programs may generate errors with any value 
as the error object. It is up to the Lua program or its host to handle such error 
objects.


When you use  [xpcall] or  [lua_pcall], you may give a *message handler* to be 
called in case of errors. This function is called with the original error object 
and returns a new error object. It is called before the error unwinds the stack, 
so that it can gather more information about the error, for instance by inspecting 
the stack and creating a stack traceback. This message handler is still protected 
by the protected call; so, an error inside the message handler will call the 
message handler again. If this loop goes on for too long, Lua breaks it and 
returns an appropriate message. (The message handler is called only for regular 
runtime errors. It is not called for memory-allocation errors nor for errors while running finalizers.)



### ⛏ 2.4 -  Metatables and Metamethods
                                                       [contents] [index] *§2.4*
Every value in Lua can have a *metatable*. This *metatable* is an ordinary Lua 
table that defines the behavior of the original value under certain special 
operations. You can change several aspects of the behavior of operations over a 
value by setting specific fields in its metatable. For instance, when a 
non-numeric value is the operand of an addition, Lua checks for a function in the 
field `"__add"` of the value's metatable. If it finds one, Lua calls this function 
to perform the addition.


The key for each event in a metatable is a string
with the event name prefixed by two underscores;
the corresponding values are called *metamethods*.
In the previous example, the key is `"__add`"
and the metamethod is the function that performs the addition.
Unless stated otherwise, metamethods should be function values.


You can query the metatable of any value
using the  [getmetatable] function.
Lua queries metamethods in metatables using a raw access (see  [rawget]).
So, to retrieve the metamethod for event `ev` in object `o`,
Lua does the equivalent to the following code:

```lua
     rawget(getmetatable(o) or {}, "__ev")
```


You can replace the metatable of tables
using the  [setmetatable] function.
You cannot change the metatable of other types from Lua code
(except by using the debug library ( [§6.10]));
you should use the C API for that.


Tables and full userdata have individual metatables
(although multiple tables and userdata can share their metatables).
Values of all other types share one single metatable per type;
that is, there is one single metatable for all numbers,
one for all strings, etc.
By default, a value has no metatable,
but the string library sets a metatable for the string type (see  [§6.4]).


A metatable controls how an object behaves in
arithmetic operations, bitwise operations,
order comparisons, concatenation, length operation, calls, and indexing.
A metatable also can define a function to be called
when a userdata or a table is garbage collected ( [§2.5]).


For the unary operators (negation, length, and bitwise NOT),
the metamethod is computed and called with a dummy second operand,
equal to the first one.
This extra operand is only to simplify Lua's internals
(by making these operators behave like a binary operation)
and may be removed in future versions.
(For most uses this extra operand is irrelevant.)


A detailed list of events controlled by metatables is given next.
Each operation is identified by its corresponding key.

                                                                         *__add*
⛏ `__add`: 
    the addition (`+`) operation.
    If any operand for an addition is not a number
    (nor a string coercible to a number),
    Lua will try to call a metamethod.
    First, Lua will check the first operand (even if it is valid).
    If that operand does not define a metamethod for `__add`,
    then Lua will check the second operand.
    If Lua can find a metamethod,
    it calls the metamethod with the two operands as arguments,
    and the result of the call
    (adjusted to one value)
    is the result of the operation.
    Otherwise,
    it raises an error.

                                                                         *__sub*
⛏ `__sub`: 
    the subtraction (`-`) operation.
    Behavior similar to the addition operation.

                                                                         *__mul*
⛏ `__mul`: 
    the multiplication (`*`) operation.
    Behavior similar to the addition operation.

                                                                         *__div*
⛏ `__div`: 
    the division (`/`) operation.
    Behavior similar to the addition operation.

                                                                         *__mod*
⛏ `__mod`: 
    the modulo (`%`) operation.
    Behavior similar to the addition operation.

                                                                         *__pow*
⛏ `__pow`: 
    the exponentiation (`^`) operation.
    Behavior similar to the addition operation.

                                                                         *__unm*
⛏ `__unm`: 
    the negation (unary `-`) operation.
    Behavior similar to the addition operation.

                                                                        *__idiv*
⛏ `__idiv`: 
    the floor division (`//`) operation.
    Behavior similar to the addition operation.

                                                                        *__band*
⛏ `__band`: 
    the bitwise AND (`&`) operation.
    Behavior similar to the addition operation,
    except that Lua will try a metamethod
    if any operand is neither an integer
    nor a value coercible to an integer (see  [§3.4.3]).

                                                                         *__bor*
⛏ `__bor`: 
    the bitwise OR (`|`) operation.
    Behavior similar to the bitwise AND operation.

                                                                        *__bxor*
⛏ `__bxor`: 
    the bitwise exclusive OR (binary `~`) operation.
    Behavior similar to the bitwise AND operation.

                                                                        *__bnot*
⛏ `__bnot`: 
    the bitwise NOT (unary `~`) operation.
    Behavior similar to the bitwise AND operation.

                                                                         *__shl*
⛏ `__shl`: 
    the bitwise left shift (`<<`) operation.
    Behavior similar to the bitwise AND operation.

                                                                         *__shr*
⛏ `__shr`: 
    the bitwise right shift (`>>`) operation.
    Behavior similar to the bitwise AND operation.

                                                                      *__concat*
⛏ `__concat`: 
    the concatenation (`..`) operation.
    Behavior similar to the addition operation,
    except that Lua will try a metamethod
    if any operand is neither a string nor a number
    (which is always coercible to a string).

                                                                         *__len*
⛏ `__len`: 
    the length (`#`) operation.
    If the object is not a string,
    Lua will try its metamethod.
    If there is a metamethod,
    Lua calls it with the object as argument,
    and the result of the call
    (always adjusted to one value)
    is the result of the operation.
    If there is no metamethod but the object is a table,
    then Lua uses the table length operation (see  [§3.4.7]).
    Otherwise, Lua raises an error.

                                                                          *__eq*
⛏ `__eq`: 
    the equal (`==`) operation.
    Behavior similar to the addition operation,
    except that Lua will try a metamethod only when the values
    being compared are either both tables or both full userdata
    and they are not primitively equal.
    The result of the call is always converted to a boolean.

                                                                          *__lt*
⛏ `__lt`: 
    the less than (`<`) operation.
    Behavior similar to the addition operation,
    except that Lua will try a metamethod only when the values
    being compared are neither both numbers nor both strings.
    The result of the call is always converted to a boolean.

                                                                          *__le*
⛏ `__le`: 
    the less equal (`<=`) operation.
    Unlike other operations,
    the less-equal operation can use two different events.
    First, Lua looks for the `__le` metamethod in both operands,
    like in the less than operation.
    If it cannot find such a metamethod,
    then it will try the `__lt` metamethod,
    assuming that `a <= b` is equivalent to `not (b < a)`.
    As with the other comparison operators,
    the result is always a boolean.
    (This use of the `__lt` event can be removed in future versions;
    it is also slower than a real `__le` metamethod.)

                                                                       *__index*
⛏ `__index`: 
    The indexing access operation `table[key]`.
    This event happens when `table` is not a table or
    when `key` is not present in `table`.
    The metamethod is looked up in `table`.


    Despite the name,
    the metamethod for this event can be either a function or a table.
    If it is a function, it is called with `table` and `key` as arguments,
    and the result of the call (adjusted to one value)
    is the result of the operation.
    If it is a table,
    the final result is the result of indexing this table with `key`.
    (This indexing is regular, not raw,
    and therefore can trigger another metamethod.)

                                                                    *__newindex*
⛏ `__newindex`: 
    The indexing assignment `table[key] = value`.
    Like the index event,
    this event happens when `table` is not a table or
    when `key` is not present in `table`.
    The metamethod is looked up in `table`.


    Like with indexing,
    the metamethod for this event can be either a function or a table.
    If it is a function,
    it is called with `table`, `key`, and `value` as arguments.
    If it is a table,
    Lua does an indexing assignment to this table with the same key and value.
    (This assignment is regular, not raw,
    and therefore can trigger another metamethod.)


    Whenever there is a `__newindex` metamethod,
    Lua does not perform the primitive assignment.
    (If necessary,
    the metamethod itself can call  [rawset]
    to do the assignment.)

                                                                        *__call*
⛏ `__call`: 
    The call operation `func(args)`.
    This event happens when Lua tries to call a non-function value
    (that is, `func` is not a function).
    The metamethod is looked up in `func`.
    If present,
    the metamethod is called with `func` as its first argument,
    followed by the arguments of the original call (`args`).
    All results of the call
    are the result of the operation.
    (This is the only metamethod that allows multiple results.)


It is a good practice to add all needed metamethods to a table
before setting it as a metatable of some object.
In particular, the `__gc` metamethod works only when this order
is followed (see  [§2.5.1]).


Because metatables are regular tables,
they can contain arbitrary fields,
not only the event names defined above.
Some functions in the standard library
(e.g.,  [tostring])
use other fields in metatables for their own purposes.



### ⛏ 2.5 -  Garbage Collection
                                                       [contents] [index] *§2.5*
Lua performs automatic memory management.
This means that
you do not have to worry about allocating memory for new objects
or freeing it when the objects are no longer needed.
Lua manages memory automatically by running
a *garbage collector* to collect all *dead objects*
(that is, objects that are no longer accessible from Lua).
All memory used by Lua is subject to automatic management:
strings, tables, userdata, functions, threads, internal structures, etc.


Lua implements an incremental mark-and-sweep collector.
It uses two numbers to control its garbage-collection cycles:
the *garbage-collector pause* and
the *garbage-collector step multiplier*.
Both use percentage points as units
(e.g., a value of 100 means an internal value of 1).


The garbage-collector pause
controls how long the collector waits before starting a new cycle.
Larger values make the collector less aggressive.
Values smaller than 100 mean the collector will not wait to
start a new cycle.
A value of 200 means that the collector waits for the total memory in use
to double before starting a new cycle.


The garbage-collector step multiplier
controls the relative speed of the collector relative to
memory allocation.
Larger values make the collector more aggressive but also increase
the size of each incremental step.
You should not use values smaller than 100,
because they make the collector too slow and
can result in the collector never finishing a cycle.
The default is 200,
which means that the collector runs at "twice"
the speed of memory allocation.


If you set the step multiplier to a very large number
(larger than 10% of the maximum number of bytes that the program may use),
the collector behaves like a stop-the-world collector.
If you then set the pause to 200, the collector behaves as in old Lua versions,
doing a complete collection every time Lua doubles its memory usage.


You can change these numbers by calling  [lua_gc] in C
or  [collectgarbage] in Lua.
You can also use these functions to control
the collector directly (e.g., stop and restart it).


### ⛏ 2.5.1 - Garbage-Collection Metamethods
                                              [contents] [index] *__gc* *§2.5.1*
You can set garbage-collector metamethods for tables and, using the C API,
for full userdata (see  [§2.4]).
These metamethods are also called *finalizers*.
Finalizers allow you to coordinate Lua's garbage collection
with external resource management
(such as closing files, network or database connections,
or freeing your own memory).


For an object (table or userdata) to be finalized when collected,
you must *mark* it for finalization.

You mark an object for finalization when you set its metatable
and the metatable has a field indexed by the string `"__gc`".
Note that if you set a metatable without a `__gc` field
and later create that field in the metatable,
the object will not be marked for finalization.


When a marked object becomes garbage,
it is not collected immediately by the garbage collector.
Instead, Lua puts it in a list.
After the collection, Lua goes through that list.
For each object in the list, it checks the object's `__gc` metamethod:
If it is a function, Lua calls it with the object as its single argument;
if the metamethod is not a function, Lua simply ignores it.


At the end of each garbage-collection cycle,
the finalizers for objects are called in
the reverse order that the objects were marked for finalization,
among those collected in that cycle;
that is, the first finalizer to be called is the one associated
with the object marked last in the program.
The execution of each finalizer may occur at any point during
the execution of the regular code.


Because the object being collected must still be used by the finalizer,
that object (and other objects accessible only through it)
must be *resurrected* by Lua.
Usually, this resurrection is transient,
and the object memory is freed in the next garbage-collection cycle.
However, if the finalizer stores the object in some global place
(e.g., a global variable),
then the resurrection is permanent.
Moreover, if the finalizer marks a finalizing object for finalization again,
its finalizer will be called again in the next cycle where the
object is unreachable.
In any case,
the object memory is freed only in a GC cycle where
the object is unreachable and not marked for finalization.


When you close a state (see  [lua_close]),
Lua calls the finalizers of all objects marked for finalization,
following the reverse order that they were marked.
If any finalizer marks objects for collection during that phase,
these marks have no effect.



### ⛏ 2.5.2 - Weak Tables
                                                     [contents] [index] *§2.5.2*
A *weak table* is a table whose elements are *weak references*.
A weak reference is ignored by the garbage collector.
In other words, if the only references to an object are weak references,
then the garbage collector will collect that object.


A weak table can have weak keys, weak values, or both.
A table with weak values allows the collection of its values,
but prevents the collection of its keys.
A table with both weak keys and weak values allows the collection of
both keys and values.
In any case, if either the key or the value is collected,
the whole pair is removed from the table.
The weakness of a table is controlled by the
`__mode` field of its metatable.
If the `__mode` field is a string containing the character `'k`',
the keys in the table are weak.
If `__mode` contains `'v`',
the values in the table are weak.


A table with weak keys and strong values is also called an *ephemeron table*.
In an ephemeron table,
a value is considered reachable only if its key is reachable.
In particular, if the only reference to a key comes through its value,
the pair is removed.


Any change in the weakness of a table may take effect only
at the next collect cycle.
In particular, if you change the weakness to a stronger mode,
Lua may still collect some items from that table
before the change takes effect.


Only objects that have an explicit construction
are removed from weak tables.
Values, such as numbers and light C functions,
are not subject to garbage collection,
and therefore are not removed from weak tables
(unless their associated values are collected).
Although strings are subject to garbage collection,
they do not have an explicit construction,
and therefore are not removed from weak tables.


Resurrected objects
(that is, objects being finalized
and objects accessible only through objects being finalized)
have a special behavior in weak tables.
They are removed from weak values before running their finalizers,
but are removed from weak keys only in the next collection
after running their finalizers, when such objects are actually freed.
This behavior allows the finalizer to access properties
associated with the object through weak tables.


If a weak table is among the resurrected objects in a collection cycle,
it may not be properly cleared until the next cycle.





### ⛏ 2.6 -  Coroutines
                                                       [contents] [index] *§2.6*
Lua supports coroutines, also called *collaborative multithreading*.
A coroutine in Lua represents an independent thread of execution.
Unlike threads in multithread systems, however,
a coroutine only suspends its execution by explicitly calling
a yield function.


You create a coroutine by calling  [coroutine.create].
Its sole argument is a function
that is the main function of the coroutine.
The `create` function only creates a new coroutine and
returns a handle to it (an object of type *thread*);
it does not start the coroutine.


You execute a coroutine by calling  [coroutine.resume].
When you first call  [coroutine.resume],
passing as its first argument
a thread returned by  [coroutine.create],
the coroutine starts its execution by
calling its main function.
Extra arguments passed to  [coroutine.resume] are passed
as arguments to that function.
After the coroutine starts running,
it runs until it terminates or *yields*.


A coroutine can terminate its execution in two ways:
normally, when its main function returns
(explicitly or implicitly, after the last instruction);
and abnormally, if there is an unprotected error.
In case of normal termination, [coroutine.resume] returns true,
plus any values returned by the coroutine main function.
In case of errors,  [coroutine.resume] returns false
plus an error object.


A coroutine yields by calling  [coroutine.yield].
When a coroutine yields,
the corresponding  [coroutine.resume] returns immediately,
even if the yield happens inside nested function calls
(that is, not in the main function,
but in a function directly or indirectly called by the main function).
In the case of a yield,  [coroutine.resume] also returns true,
plus any values passed to  [coroutine.yield].
The next time you resume the same coroutine,
it continues its execution from the point where it yielded,
with the call to  [coroutine.yield] returning any extra
arguments passed to  [coroutine.resume].


Like  [coroutine.create],
the  [coroutine.wrap] function also creates a coroutine,
but instead of returning the coroutine itself,
it returns a function that, when called, resumes the coroutine.
Any arguments passed to this function
go as extra arguments to  [coroutine.resume]. [coroutine.wrap] returns all the 
values returned by  [coroutine.resume],
except the first one (the boolean error code).
Unlike  [coroutine.resume], [coroutine.wrap] does not catch errors;
any error is propagated to the caller.


As an example of how coroutines work, consider the following code:

```lua
     function foo (a)
       print("foo", a)
       return coroutine.yield(2*a)
     end
     
     co = coroutine.create(function (a,b)
           print("co-body", a, b)
           local r = foo(a+1)
           print("co-body", r)
           local r, s = coroutine.yield(a+b, a-b)
           print("co-body", r, s)
           return b, "end"
     end)
     
     print("main", coroutine.resume(co, 1, 10))
     print("main", coroutine.resume(co, "r"))
     print("main", coroutine.resume(co, "x", "y"))
     print("main", coroutine.resume(co, "x", "y"))
```

When you run it, it produces the following output:

```sh
     co-body 1       10
     foo     2
     main    true    4
     co-body r
     main    true    11      -9
     co-body x       y
     main    true    10      end
     main    false   cannot resume dead coroutine
```


You can also create and manipulate coroutines through the C API:
see functions  [lua_newthread],  [lua_resume], and  [lua_yield].



## ⚡ 3 -  The Language
                                                        [contents] [index] *ch3*
This section describes the lexis, the syntax, and the semantics of Lua.
In other words,
this section describes
which tokens are valid,
how they can be combined,
and what their combinations mean.


Language constructs will be explained using the usual extended BNF notation,
in which
{*a*} means 0 or more *a*'s, and
[*a*] means an optional *a*.
Non-terminals are shown like non-terminal,
keywords are shown like kword,
and other terminal symbols are shown like '='.
The complete syntax of Lua can be found in  [§9]
at the end of this manual.


### ⛏ 3.1 -  Lexical Conventions
                                                       [contents] [index] *§3.1*
Lua is a free-form language. It ignores spaces (including new lines) and comments
between lexical elements (tokens), except as delimiters between names and keywords.


*Names* (also called *identifiers*) in Lua can be any string of letters, digits, 
and underscores, not beginning with a digit and not being a reserved word. 
Identifiers are used to name variables, table fields, and labels.


The following *keywords* are reserved and cannot be used as names:


```lua
     and       break     do        else      elseif    end
     false     for       function  goto      if        in
     local     nil       not       or        repeat    return
     then      true      until     while
```


Lua is a case-sensitive language: `and` is a reserved word, but `And` and `AND`
are two different, valid names. As a convention, programs should avoid creating
names that start with an underscore followed by one or more uppercase letters 
(such as  [_VERSION]).


The following strings denote other tokens:

```lua
     +     -     *     /     %     ^     #
     &     ~     |     <<    >>    //
     ==    ~=    <=    >=    <     >     =
     (     )     {     }     [     ]     ::
     ;     :     ,     .     ..    ...
```


A *short literal string* can be delimited by matching single or double quotes,
and can contain the following C-like escape sequences:

   1. `'\a'` (bell),
   2. `'\b'` (backspace),
   3. `'\f'` (form feed),
   4. `'\n'` (newline),
   5. `'\r'` (carriage return),
   6. `'\t'` (horizontal tab),
   7. `'\v'` (vertical tab),
   8. `'\\'` (backslash),
   9. `'\"'` (quotation mark [double quote]),
   10. and `'\`'' (apostrophe [single quote]).

A backslash followed by a line break results in a newline in the string. 
The escape sequence `'\z'` skips the following span of white-space characters, 
including line breaks; it is particularly useful to break and indent a long 
literal string into multiple lines without adding the newlines and spaces into the 
string contents. A short literal string cannot contain unescaped line breaks
nor escapes not forming a valid escape sequence.


We can specify any byte in a short literal string by its numeric value (including 
embedded zeros). This can be done with the escape sequence `\xXX`, where *XX* is 
a sequence of exactly two hexadecimal digits, or with the escape sequence `\ddd`,
where *ddd* is a sequence of up to three decimal digits. (Note that if a decimal
escape sequence is to be followed by a digit, it must be expressed using exactly 
three digits.)


The UTF-8 encoding of a Unicode character can be inserted in a literal string with 
the escape sequence `\u{XXX}` (note the mandatory enclosing brackets), where *XXX* 
is a sequence of one or more hexadecimal digits representing the character code 
point.


Literal strings can also be defined using a long format enclosed by *long brackets*.
We define an *opening long bracket of level n* as an opening square bracket 
followed by *n* equal signs followed by another opening square bracket. So, an 
opening long bracket of level 0 is written as `[[`, an opening long bracket of 
level 1 is written as `[=[`, and so on. 

A *closing long bracket* is defined similarly; for instance, a closing long 
bracket of level 4 is written as  `]====]`. A *long literal* starts with an 
opening long bracket of any level and ends at the first closing long bracket of 
the same level. It can contain any text except a closing bracket of the same 
level. Literals in this bracketed form can run for several lines, do not interpret 
any escape sequences, and ignore long brackets of any other level. Any kind of 
end-of-line sequence (carriage return, newline, carriage return followed by 
newline, or newline followed by carriage return) is converted to a simple newline.


For convenience, when the opening long bracket is immediately followed by a newline, the newline is not included in the string. As an example, in a system 
using ASCII (in which `'a'` is coded as 97, newline is coded as 10, and `'1'` is 
coded as 49), the five literal strings below denote the same string:

```lua
     a = 'alo\n123"'
     a = "alo\n123\""
     a = '\97lo\10\04923"'
     a = [[alo
     123"]]
     a = [==[
     alo
     123"]==]
```


Any byte in a literal string not explicitly affected by the previous rules 
represents itself. However, Lua opens files for parsing in text mode, and the 
system file functions may have problems with some control characters. So, it is 
safer to represent non-text data as a quoted literal with explicit escape 
sequences for the non-text characters.


A *numeric constant* (or *numeral*) can be written with an optional fractional 
part and an optional decimal exponent, marked by a letter `'e'` or `'E'`. Lua 
also accepts hexadecimal constants, which start with `0x` or `0X`. 


Hexadecimal constants also accept an optional fractional part plus an optional 
binary exponent, marked by a letter `'p'` or `'P'`. A numeric constant with a 
radix point or an exponent denotes a float; otherwise, if its value fits in an 
integer, it denotes an integer.

Examples of valid integer constants are

```lua
     3   345   0xff   0xBEBADA
```

Examples of valid float constants are

```lua
     3.0     3.1416     314.16e-2     0.31416E1     34e1
     0x0.1E  0xA23p-4   0X1.921FB54442D18P+1
```


A *comment* starts with a double hyphen (`--`) anywhere outside a string. If 
the text immediately after `--` is not an opening long bracket, the comment is 
a *short comment*, which runs until the end of the line. Otherwise, it is a
*long comment*, which runs until the corresponding closing long bracket. Long 
comments are frequently used to disable code temporarily.



### ⛏ 3.2 -  Variables
                                                       [contents] [index] *§3.2*
Variables are places that store values. There are three kinds of variables in Lua:

   1. global variables, 
   2. local variables, 
   3. and table fields.


A single name can denote a global variable or a local variable (or a function's
formal parameter, which is a particular kind of local variable):

```sh
    var ::= Name
```

Name denotes identifiers, as defined in  [§3.1].


Any variable name is assumed to be global unless explicitly declared as a local 
(see  [§3.3.7]). Local variables are *lexically scoped*: local variables can be 
freely accessed by functions defined inside their scope (see  [§3.5]).


Before the first assignment to a variable, its value is nil.


Square brackets are used to index a table:

```sh
    var ::= prefixexp '[' exp ']'
```

The meaning of accesses to table fields can be changed via metatables (see [§2.4]).


The syntax `var.Name` is just syntactic sugar for `var["Name"]`:

```sh
    var ::= prefixexp '.' Name
```


An access to a global variable `x` is equivalent to `_ENV.x`. Due to the way that 
chunks are compiled, `_ENV` is never a global name (see  [§2.2]).



### ⛏ 3.3 -  Statements
                                                       [contents] [index] *§3.3*
Lua supports an almost conventional set of statements, similar to those in 
Pascal or C. This set includes assignments, control structures, function calls, 
and variable declarations.


### ⛏ 3.3.1 - Blocks
                                                     [contents] [index] *§3.3.1*
A block is a list of statements, which are executed sequentially:

```sh
    block ::= {stat}
```

Lua has *empty statements* that allow you to separate statements with semicolons,
start a block with a semicolon or write two semicolons in sequence:

```sh
    stat ::= ';'
```

Function calls and assignments can start with an open parenthesis. This 
possibility leads to an ambiguity in Lua's grammar. Consider the following 
fragment:

```lua
     a = b + c
     (print or io.write)('done')
```

The grammar could see it in two ways:

```lua
     a = b + c(print or io.write)('done')
     a = b + c; (print or io.write)('done')
```

The current parser always sees such constructions in the first way,
interpreting the open parenthesis as the start of the arguments to a call.
To avoid this ambiguity, it is a good practice to always precede with a semicolon
statements that start with a parenthesis:

```lua
     ;(print or io.write)('done')
```


A block can be explicitly delimited to produce a single statement:

```sh
    stat ::= do block end
```

Explicit blocks are useful to control the scope of variable declarations.
Explicit blocks are also sometimes used to add a return statement in the middle
of another block (see  [§3.3.4]).



### ⛏ 3.3.2 - Chunks
                                                     [contents] [index] *§3.3.2*
The unit of compilation of Lua is called a *chunk*.
Syntactically, a chunk is simply a block:

```sh
    chunk ::= block
```


Lua handles a chunk as the body of an anonymous function with a variable number 
of arguments (see  [§3.4.11]). As such, chunks can define local variables,
receive arguments, and return values.
Moreover, such anonymous function is compiled as in the
scope of an external local variable called `_ENV` (see  [§2.2]).
The resulting function always has `_ENV` as its only upvalue,
even if it does not use that variable.


A chunk can be stored in a file or in a string inside the host program.
To execute a chunk, Lua first *loads* it, precompiling the chunk's code into 
instructions for a virtual machine, and then Lua executes the compiled code 
with an interpreter for the virtual machine.


Chunks can also be precompiled into binary form;
see program `luac` and function  [string.dump] for details.
Programs in source and compiled forms are interchangeable;
Lua automatically detects the file type and acts accordingly (see  [load]).



### ⛏ 3.3.3 - Assignment
                                                     [contents] [index] *§3.3.3*
Lua allows multiple assignments.
Therefore, the syntax for assignment
defines a list of variables on the left side
and a list of expressions on the right side.
The elements in both lists are separated by commas:

```sh
    stat ::= varlist '=' explist
    varlist ::= var {',' var}
    explist ::= exp {',' exp}
```

Expressions are discussed in  [§3.4].


Before the assignment,
the list of values is *adjusted* to the length of
the list of variables.
If there are more values than needed,
the excess values are thrown away.
If there are fewer values than needed,
the list is extended with as many  nil's as needed.
If the list of expressions ends with a function call,
then all values returned by that call enter the list of values,
before the adjustment
(except when the call is enclosed in parentheses; see  [§3.4]).


The assignment statement first evaluates all its expressions
and only then the assignments are performed.
Thus the code

```lua
     i = 3
     i, a[i] = i+1, 20
```

sets `a[3]` to 20, without affecting `a[4]`
because the `i` in `a[i]` is evaluated (to 3)
before it is assigned 4.
Similarly, the line

```lua
     x, y = y, x
```

exchanges the values of `x` and `y`,
and

```lua
     x, y, z = y, z, x
```

cyclically permutes the values of `x`, `y`, and `z`.


An assignment to a global name `x = val`
is equivalent to the assignment
`_ENV.x = val` (see  [§2.2]).


The meaning of assignments to table fields and
global variables (which are actually table fields, too)
can be changed via metatables (see  [§2.4]).



### ⛏ 3.3.4 - Control Structures
                                                     [contents] [index] *§3.3.4*
The control structures if, while, and repeat have the usual meaning and
familiar syntax:


```sh
    stat ::= while exp do block end
    stat ::= repeat block until exp
    stat ::= if exp then block {elseif exp then block} [else block] end
```

Lua also has a for statement, in two flavors (see  [§3.3.5]).


The condition expression of a
control structure can return any value.
Both false and nil are considered false.
All values different from nil and false are considered true
(in particular, the number 0 and the empty string are also true).


In the repeat-until loop,
the inner block does not end at the until keyword,
but only after the condition.
So, the condition can refer to local variables
declared inside the loop block.


The goto statement transfers the program control to a label.
For syntactical reasons,
labels in Lua are considered statements too:


```sh
    stat ::= goto Name
    stat ::= label
    label ::= '::' Name '::'
```


A label is visible in the entire block where it is defined,
except
inside nested blocks where a label with the same name is defined and
inside nested functions.
A goto may jump to any visible label as long as it does not
enter into the scope of a local variable.


Labels and empty statements are called *void statements*,
as they perform no actions.


The break statement terminates the execution of a
while, repeat, or for loop,
skipping to the next statement after the loop:


```sh
    stat ::= break
```

A break ends the innermost enclosing loop.


The return statement is used to return values
from a function or a chunk
(which is an anonymous function).

Functions can return more than one value,
so the syntax for the return statement is

```sh
    stat ::= return [explist] [';']
```


The return statement can only be written
as the last statement of a block.
If it is really necessary to return in the middle of a block,
then an explicit inner block can be used,
as in the idiom `do return end`,
because now return is the last statement in its (inner) block.



### ⛏ 3.3.5 - For Statement
                                                     [contents] [index] *§3.3.5*

The for statement has two forms: one numerical and one generic.


The numerical for loop repeats a block of code while a control variable runs 
through an arithmetic progression. It has the following syntax:

```sh
    stat ::= for Name '=' exp ',' exp [',' exp] do block end
```

The *block* is repeated for *name* starting at the value of the first *exp*, 
until it passes the second *exp* by steps of the third *exp*.

More precisely, a for statement like

```lua
     for v = e1, e2, e3 do block end
```

is equivalent to the code:

```lua
     do
       local var, limit, step = tonumber(e1), tonumber(e2), tonumber(e3)
       if not (var and limit and step) then error() end
       var = var - step
       while true do
         var = var + step
         if (step >= 0 and var > limit) or (step < 0 and var < limit) then
           break
         end
         local v = var
         block
       end
     end
```


Note the following:


⛏ All three control expressions are evaluated only once, before the loop starts.
    They must all result in numbers.

⛏ `var`, `limit`, and `step` are invisible variables. The names shown here are 
    for explanatory purposes only.

⛏ If the third expression (the step) is absent, then a step of 1 is used.

⛏ You can use break and goto to exit a for loop.

⛏ The loop variable `v` is local to the loop body. If you need its value after 
    the loop, assign it to another variable before exiting the loop.


The generic for statement works over functions, called *iterators*. On each 
iteration, the iterator function is called to produce a new value, stopping when 
this new value is nil. The generic for loop has the following syntax:

```sh
    stat ::= for namelist in explist do block end
    namelist ::= Name {',' Name}
```

A for statement like

```lua
     for var_1, ···, var_n in explist do block end
```

is equivalent to the code:

```lua
     do
       local f, s, var = explist
       while true do
         local var_1, ···, var_n = f(s, var)
         if var_1 == nil then break end
         var = var_1
         block
       end
     end
```

Note the following:


⛏ `explist` is evaluated only once. Its results are an *iterator* function, a 
    *state*, and an initial value for the first *iterator variable*.

⛏ `f`, `s`, and `var` are invisible variables. The names are here for 
    explanatory purposes only.

⛏ You can use break to exit a for loop.

⛏ The loop variables `var_i` are local to the loop; you cannot use their values 
    after the for ends. If you need these values, then assign them to other 
    variables before breaking or exiting the loop.


### ⛏ 3.3.6 - Function Calls as Statements
                                                     [contents] [index] *§3.3.6*
To allow possible side-effects, function calls can be executed as statements:

```sh
    stat ::= functioncall
```

In this case, all returned values are thrown away. Function calls are explained 
in  [§3.4.10].



### ⛏ 3.3.7 - Local Declarations
                                                     [contents] [index] *§3.3.7*
Local variables can be declared anywhere inside a block. The declaration can 
include an initial assignment:

```sh
    stat ::= local namelist ['=' explist]
```

If present, an initial assignment has the same semantics of a multiple assignment 
(see  [§3.3.3]). Otherwise, all variables are initialized with nil.


A chunk is also a block (see  [§3.3.2]), and so local variables can be declared 
in a chunk outside any explicit block.


The visibility rules for local variables are explained in  [§3.5].



### ⛏ 3.4 -  Expressions
                                                       [contents] [index] *§3.4*
The basic expressions in Lua are the following:

```sh
    exp ::= prefixexp
    exp ::= nil | false | true
    exp ::= Numeral
    exp ::= LiteralString
    exp ::= functiondef
    exp ::= tableconstructor
    exp ::= '...'
    exp ::= exp binop exp
    exp ::= unop exp
    prefixexp ::= var | functioncall | '(' exp ')'
```

Numerals and literal strings are explained in  [§3.1];
variables are explained in  [§3.2];
function definitions are explained in  [§3.4.11];
function calls are explained in  [§3.4.10];
table constructors are explained in  [§3.4.9].
Vararg expressions, denoted by three dots (`'...'`), can only be used when
directly inside a vararg function; they are explained in  [§3.4.11].


Binary operators comprise arithmetic operators (see  [§3.4.1]),
bitwise operators (see  [§3.4.2]),
relational operators (see  [§3.4.4]), logical operators (see  [§3.4.5]),
and the concatenation operator (see  [§3.4.6]).
Unary operators comprise the unary minus (see  [§3.4.1]),
the unary bitwise NOT (see  [§3.4.2]),
the unary logical not (see  [§3.4.5]),
and the unary *length operator* (see  [§3.4.7]).


Both function calls and vararg expressions can result in multiple values.
If a function call is used as a statement (see  [§3.3.6]), then its return list 
is adjusted to zero elements, thus discarding all returned values.
If an expression is used as the last (or the only) element of a list of expressions,
then no adjustment is made (unless the expression is enclosed in parentheses).
In all other contexts, Lua adjusts the result list to one element, either discarding 
all values except the first one or adding a single nil if there are no values.


Here are some examples:

```lua
     f()                -- adjusted to 0 results
     g(f(), x)          -- f() is adjusted to 1 result
     g(x, f())          -- g gets x plus all results from f()
     a,b,c = f(), x     -- f() is adjusted to 1 result (c gets nil)
     a,b = ...          -- a gets the first vararg argument, b gets
                        -- the second (both a and b can get nil if there
                        -- is no corresponding vararg argument)
     
     a,b,c = x, f()     -- f() is adjusted to 2 results
     a,b,c = f()        -- f() is adjusted to 3 results
     return f()         -- returns all results from f()
     return ...         -- returns all received vararg arguments
     return x,y,f()     -- returns x, y, and all results from f()
     {f()}              -- creates a list with all results from f()
     {...}              -- creates a list with all vararg arguments
     {f(), nil}         -- f() is adjusted to 1 result
```


Any expression enclosed in parentheses always results in only one value. Thus,
`(f(x,y,z))` is always a single value, even if `f` returns several values.
(The value of `(f(x,y,z))` is the first value returned by `f` or nil if `f` does 
not return any values.)


### ⛏ 3.4.1 - Arithmetic Operators
                                                     [contents] [index] *§3.4.1*
Lua supports the following arithmetic operators:

⛏ `+`: addition
⛏ `-`: subtraction
⛏ `*`: multiplication
⛏ `/`: float division
⛏ `//`: floor division
⛏ `%`: modulo
⛏ `^`: exponentiation
⛏ `-`: unary minus

With the exception of exponentiation and float division,
the arithmetic operators work as follows:
If both operands are integers,
the operation is performed over integers and the result is an integer.
Otherwise, if both operands are numbers
or strings that can be converted to
numbers (see  [§3.4.3]),
then they are converted to floats,
the operation is performed following the usual rules
for floating-point arithmetic
(usually the IEEE 754 standard),
and the result is a float.


Exponentiation and float division (`/`)
always convert their operands to floats
and the result is always a float.
Exponentiation uses the ISO C function `pow`,
so that it works for non-integer exponents too.


Floor division (`//`) is a division
that rounds the quotient towards minus infinity,
that is, the floor of the division of its operands.


Modulo is defined as the remainder of a division
that rounds the quotient towards minus infinity (floor division).


In case of overflows in integer arithmetic, all operations *wrap around*, 
according to the usual rules of two-complement arithmetic. (In other words, 
they return the unique representable integer that is equal modulo *2⁶⁴* to 
the mathematical result.)


### ⛏ 3.4.2 - Bitwise Operators
                                                     [contents] [index] *§3.4.2*
Lua supports the following bitwise operators:

⛏ `&`: bitwise AND
⛏ `|`: bitwise OR
⛏ `~`: bitwise exclusive OR
⛏ `>>`: right shift
⛏ `<<`: left shift
⛏ `~`: unary bitwise NOT

All bitwise operations convert its operands to integers (see  [§3.4.3]), 
operate on all bits of those integers, and result in an integer.


Both right and left shifts fill the vacant bits with zeros.
Negative displacements shift to the other direction;
displacements with absolute values equal to or higher than
the number of bits in an integer
result in zero (as all bits are shifted out).



### ⛏ 3.4.3 - Coercions and Conversions
                                                     [contents] [index] *§3.4.3*
Lua provides some automatic conversions between some types and representations 
at run time. Bitwise operators always convert float operands to integers. 
Exponentiation and float division always convert integer operands to floats. 
All other arithmetic operations applied to mixed numbers (integers and floats) 
convert the integer operand to a float; this is called the *usual rule*. 
The C API also converts both integers to floats and floats to integers, as needed. 
Moreover, string concatenation accepts numbers as arguments, besides strings.


Lua also converts strings to numbers, whenever a number is expected.


In a conversion from integer to float, if the integer value has an exact 
representation as a float, that is the result. Otherwise, the conversion gets the 
nearest higher or the nearest lower representable value. This kind of conversion 
never fails.


The conversion from float to integer checks whether the float has an exact 
representation as an integer (that is, the float has an integral value and 
it is in the range of integer representation). If it does, that representation 
is the result. Otherwise, the conversion fails.


The conversion from strings to numbers goes as follows:
First, the string is converted to an integer or a float,
following its syntax and the rules of the Lua lexer.
(The string may have also leading and trailing spaces and a sign.)
Then, the resulting number (float or integer)
is converted to the type (float or integer) required by the context
(e.g., the operation that forced the conversion).


All conversions from strings to numbers accept both a dot and the current locale
mark as the radix character. (The Lua lexer, however, accepts only a dot.)


The conversion from numbers to strings uses a non-specified human-readable format. 
For complete control over how numbers are converted to strings, use the `format` 
function from the string library (see  [string.format]).



### ⛏ 3.4.4 - Relational Operators
                                                     [contents] [index] *§3.4.4*
Lua supports the following relational operators:


⛏ `==`: equality
⛏ `~=`: inequality
⛏ `<`: less than
⛏ `>`: greater than
⛏ `<=`: less or equal
⛏ `>=`: greater or equal

These operators always result in false or true.

Equality (`==`) first compares the type of its operands.
If the types are different, then the result is false.
Otherwise, the values of the operands are compared.
Strings are compared in the obvious way.
Numbers are equal if they denote the same mathematical value.


Tables, userdata, and threads are compared by reference:
two objects are considered equal only if they are the same object.
Every time you create a new object (a table, userdata, or thread),
this new object is different from any previously existing object.
A closure is always equal to itself. Closures with any detectable difference
(different behavior, different definition) are always different.
Closures created at different times but with no detectable differences
may be classified as equal or not (depending on internal caching details).


You can change the way that Lua compares tables and userdata
by using the "eq" metamethod (see  [§2.4]).


Equality comparisons do not convert strings to numbers or vice versa.
Thus, `"0"==0` evaluates to false, and `t[0]` and `t["0"]` denote different
entries in a table.


The operator `~=` is exactly the negation of equality (`==`).


The order operators work as follows. If both arguments are numbers,
then they are compared according to their mathematical values
(regardless of their subtypes).
Otherwise, if both arguments are strings,
then their values are compared according to the current locale.
Otherwise, Lua tries to call the "lt" or the "le"metamethod (see  [§2.4]).
A comparison `a > b` is translated to `b < a`
and `a >= b` is translated to `b <= a`.


Following the IEEE 754 standard,
NaN is considered neither smaller than,
nor equal to, nor greater than any value (including itself).



### ⛏ 3.4.5 - Logical Operators
                                                     [contents] [index] *§3.4.5*
The logical operators in Lua are and, or, and not.
Like the control structures (see  [§3.3.4]),
all logical operators consider both false and nil as false
and anything else as true.


The negation operator not always returns false or true.
The conjunction operator and returns its first argument
if this value is false or nil;
otherwise, and returns its second argument.
The disjunction operator or returns its first argument
if this value is different from nil and false;
otherwise, or returns its second argument.
Both and and or use short-circuit evaluation;
that is, the second operand is evaluated only if necessary.
Here are some examples:

```lua
     10 or 20            --> 10
     10 or error()       --> 10
     nil or "a"          --> "a"
     nil and 10          --> nil
     false and error()   --> false
     false and nil       --> false
     false or nil        --> nil
     10 and 20           --> 20
```

(In this manual,
`-->` indicates the result of the preceding expression.)



### ⛏ 3.4.6 - Concatenation
                                                     [contents] [index] *§3.4.6*
The string concatenation operator in Lua is
denoted by two dots (`'..'`).
If both operands are strings or numbers, then they are converted to
strings according to the rules described in  [§3.4.3].
Otherwise, the `__concat` metamethod is called (see  [§2.4]).



### ⛏ 3.4.7 - The Length Operator
                                                     [contents] [index] *§3.4.7*
The length operator is denoted by the unary prefix operator `#`.


The length of a string is its number of bytes
(that is, the usual meaning of string length when each
character is one byte).


The length operator applied on a table returns a border in that table.
A *border* in a table `t` is any natural number
that satisfies the following condition:

```lua
     (border == 0 or t[border] ~= nil) and t[border + 1] == nil
```

In words,
a border is any (natural) index in a table
where a non-nil value is followed by a nil value
(or zero, when index 1 is nil).


A table with exactly one border is called a *sequence*.
For instance, the table `{10, 20, 30, 40, 50}` is a sequence,
as it has only one border (5).
The table `{10, 20, 30, nil, 50}` has two borders (3 and 5),
and therefore it is not a sequence.
The table `{nil, 20, 30, nil, nil, 60, nil}`
has three borders (0, 3, and 6), so it is not a sequence, too.
The table `{}` is a sequence with border 0.
Note that non-natural keys do not interfere
with whether a table is a sequence.


When `t` is a sequence, `#t` returns its only border,
which corresponds to the intuitive notion of the length of the sequence.
When `t` is not a sequence, `#t` can return any of its borders.
(The exact one depends on details of
the internal representation of the table,
which in turn can depend on how the table was populated and
the memory addresses of its non-numeric keys.)


The computation of the length of a table
has a guaranteed worst time of *O(log n)*,
where *n* is the largest natural key in the table.


A program can modify the behavior of the length operator for
any value but strings through the `__len` metamethod (see  [§2.4]).



### ⛏ 3.4.8 - Precedence
                                                     [contents] [index] *§3.4.8*
Operator precedence in Lua follows the table below,
from lower to higher priority:

```lua
     or
     and
     <     >     <=    >=    ~=    ==
     |
     ~
     &
     <<    >>
     ..
     +     -
     *     /     //    %
     unary operators (not   #     -     ~)
     ^
```

As usual,
you can use parentheses to change the precedences of an expression.
The concatenation (`'..'`) and exponentiation (`'^'`)
operators are right associative.
All other binary operators are left associative.



### ⛏ 3.4.9 - Table Constructors
                                                     [contents] [index] *§3.4.9*
Table constructors are expressions that create tables.
Every time a constructor is evaluated, a new table is created.
A constructor can be used to create an empty table
or to create a table and initialize some of its fields.
The general syntax for constructors is

```sh
    tableconstructor ::= '{' [fieldlist] '}'
    fieldlist ::= field {fieldsep field} [fieldsep]
    field ::= '[' exp ']' '=' exp | Name '=' exp | exp
    fieldsep ::= ',' | ';'
```


Each field of the form `[exp1] = exp2` adds to the new table an entry
with key `exp1` and value `exp2`.
A field of the form `name = exp` is equivalent to `["name"] = exp`.
Finally, fields of the form `exp` are equivalent to `[i] = exp`, 
where `i` are consecutive integers starting with 1.
Fields in the other formats do not affect this counting.
For example,

```lua
     a = { [f(1)] = g; "x", "y"; x = 1, f(x), [30] = 23; 45 }
```

is equivalent to

```lua
     do
       local t = {}
       t[f(1)] = g
       t[1] = "x"         -- 1st exp
       t[2] = "y"         -- 2nd exp
       t.x = 1            -- t["x"] = 1
       t[3] = f(x)        -- 3rd exp
       t[30] = 23
       t[4] = 45          -- 4th exp
       a = t
     end
```


The order of the assignments in a constructor is undefined.
(This order would be relevant only when there are repeated keys.)


If the last field in the list has the form `exp`
and the expression is a function call or a vararg expression,
then all values returned by this expression enter the list consecutively
(see  [§3.4.10]).


The field list can have an optional trailing separator,
as a convenience for machine-generated code.



### ⛏ 3.4.10 - Function Calls
                                                    [contents] [index] *§3.4.10*
A function call in Lua has the following syntax:

```sh
    functioncall ::= prefixexp args
```

In a function call, first prefixexp and args are evaluated.
If the value of prefixexp has type *function*, then this function is called
with the given arguments.
Otherwise, the prefixexp "call" metamethod is called, having as first argument 
the value of prefixexp, followed by the original call arguments (see  [§2.4]).


The form

```sh
    functioncall ::= prefixexp ':' Name args
```

can be used to call "methods".
A call `v:name(args)` is syntactic sugar for `v.name(v,args)`,
except that `v` is evaluated only once.


Arguments have the following syntax:

```sh
    args ::= '(' [explist] ')'
    args ::= tableconstructor
    args ::= LiteralString
```

All argument expressions are evaluated before the call.
A call of the form `f{fields}` is syntactic sugar for `f({fields})`;
that is, the argument list is a single new table.
A call of the form `f'string`' (or `f"string"` or `f[[string]]`)
is syntactic sugar for `f('string')`;
that is, the argument list is a single literal string.


A call of the form `return functioncall` is called a *tail call*.
Lua implements *proper tail calls* (or *proper tail recursion*):
in a tail call,
the called function reuses the stack entry of the calling function.
Therefore, there is no limit on the number of nested tail calls that
a program can execute.
However, a tail call erases any debug information about the calling function.
Note that a tail call only happens with a particular syntax,
where the return has one single function call as argument;
this syntax makes the calling function return exactly
the returns of the called function.
So, none of the following examples are tail calls:

```lua
     return (f(x))        -- results adjusted to 1
     return 2 * f(x)
     return x, f(x)       -- additional results
     f(x); return         -- results discarded
     return x or f(x)     -- results adjusted to 1
```



### ⛏ 3.4.11 - Function Definitions
                                                    [contents] [index] *§3.4.11*
The syntax for function definition is

```sh
    functiondef ::= function funcbody
    funcbody ::= '(' [parlist] ')' block end
```


The following syntactic sugar simplifies function definitions:

```sh
    stat ::= function funcname funcbody
    stat ::= local function Name funcbody
    funcname ::= Name {'.' Name} [':' Name]
```

The statements with equalvalent form

```lua
     function f () body end
     f = function () body end

     function t.a.b.c.f () body end
     t.a.b.c.f = function () body end

     local function f () body end
     local f; f = function () body end
```

last one not to

```lua
     local f = function () body end
```

(This only makes a difference when the body of the function
contains references to `f`.)


A function definition is an executable expression,
whose value has type *function*.
When Lua precompiles a chunk,
all its function bodies are precompiled too.
Then, whenever Lua executes the function definition,
the function is *instantiated* (or *closed*).
This function instance (or *closure*)
is the final value of the expression.


Parameters act as local variables that are
initialized with the argument values:

```sh
    parlist ::= namelist [',' '...'] | '...'
```

When a function is called, the list of arguments is adjusted to the length of 
the list of parameters, unless the function is a *vararg function*,
which is indicated by three dots ('`...`') at the end of its parameter list.
A vararg function does not adjust its argument list;
instead, it collects all extra arguments and supplies them
to the function through a *vararg expression*,
which is also written as three dots.
The value of this expression is a list of all actual extra arguments,
similar to a function with multiple results.
If a vararg expression is used inside another expression
or in the middle of a list of expressions,
then its return list is adjusted to one element.
If the expression is used as the last element of a list of expressions,
then no adjustment is made
(unless that last expression is enclosed in parentheses).


As an example, consider the following definitions:

```lua
     function f(a, b) end
     function g(a, b, ...) end
     function r() return 1,2,3 end
```

Then, we have the following mapping from arguments to parameters and
to the vararg expression:

```lua
     CALL            PARAMETERS
     
     f(3)             a=3, b=nil
     f(3, 4)          a=3, b=4
     f(3, 4, 5)       a=3, b=4
     f(r(), 10)       a=1, b=10
     f(r())           a=1, b=2
     
     g(3)             a=3, b=nil, ... -->  (nothing)
     g(3, 4)          a=3, b=4,   ... -->  (nothing)
     g(3, 4, 5, 8)    a=3, b=4,   ... -->  5  8
     g(5, r())        a=5, b=1,   ... -->  2  3
```


Results are returned using the return statement (see  [§3.3.4]).
If control reaches the end of a function
without encountering a return statement,
then the function returns with no results.



There is a system-dependent limit on the number of values
that a function may return.
This limit is guaranteed to be larger than 1000.


The *colon* syntax is used for defining *methods*,
that is, functions that have an implicit extra parameter `self`.
Thus, the statement

```lua
     function t.a.b.c:f (params) body end
```

is syntactic sugar for

```lua
     t.a.b.c.f = function (self, params) body end
```





### ⛏ 3.5 -  Visibility Rules
                                                       [contents] [index] *§3.5*

Lua is a lexically scoped language.

The scope of a local variable begins at the first statement after its declaration
and lasts until the last non-void statement of the innermost block that includes
the declaration.

Consider the following example:

```lua
     x = 10                -- global variable
     do                    -- new block
       local x = x         -- new 'x', with value 10
       print(x)            --> 10
       x = x+1
       do                  -- another block
         local x = x+1     -- another 'x'
         print(x)          --> 12
       end
       print(x)            --> 11
     end
     print(x)              --> 10  (the global one)
```


Notice that, in a declaration like `local x = x`,
the new `x` being declared is not in scope yet,
and so the second `x` refers to the outside variable.


Because of the lexical scoping rules,
local variables can be freely accessed by functions
defined inside their scope.
A local variable used by an inner function is called
an *upvalue*, or *external local variable*,
inside the inner function.


Notice that each execution of a local statement
defines new local variables.
Consider the following example:

```lua
     a = {}
     local x = 20
     for i=1,10 do
       local y = 0
       a[i] = function () y=y+1; return x+y end
     end
```

The loop creates ten closures
(that is, ten instances of the anonymous function).
Each of these closures uses a different `y` variable,
while all of them share the same `x`.



## ⚡ 4 -  The Application Program Interface
                                                        [contents] [index] *ch4*
This section describes the C API for Lua, that is, the set of C functions available
to the host program to communicate with Lua. All API functions and related types 
and constants are declared in the header file *lua.h*.


Even when we use the term "function",
any facility in the API may be provided as a macro instead.
Except where stated otherwise,
all such macros use each of their arguments exactly once
(except for the first argument, which is always a Lua state),
and so do not generate any hidden side-effects.


As in most C libraries,
the Lua API functions do not check their arguments for validity or consistency.
However, you can change this behavior by compiling Lua
with the macro *LUA_USE_APICHECK* defined.


The Lua library is fully reentrant:
it has no global variables.
It keeps all information it needs in a dynamic structure,
called the *Lua state*.


Each Lua state has one or more threads,
which correspond to independent, cooperative lines of execution.
The type  [lua_State] (despite its name) refers to a thread.
(Indirectly, through the thread, it also refers to the
Lua state associated to the thread.)


A pointer to a thread must be passed as the first argument to
every function in the library, except to  [lua_newstate],
which creates a Lua state from scratch and returns a pointer
to the *main thread* in the new state.


### ⛏ 4.1 -  The Stack
                                                       [contents] [index] *§4.1*
Lua uses a *virtual stack* to pass values to and from C.
Each element in this stack represents a Lua value
(nil, number, string, etc.).
Functions in the API can access this stack through the
Lua state parameter that they receive.


Whenever Lua calls C, the called function gets a new stack,
which is independent of previous stacks and of stacks of
C functions that are still active.
This stack initially contains any arguments to the C function
and it is where the C function can store temporary
Lua values and must push its results
to be returned to the caller (see  [lua_CFunction]).


For convenience,
most query operations in the API do not follow a strict stack discipline.
Instead, they can refer to any element in the stack
by using an *index*:
A positive index represents an absolute stack position
(starting at 1);
a negative index represents an offset relative to the top of the stack.
More specifically, if the stack has *n* elements,
then index 1 represents the first element
(that is, the element that was pushed onto the stack first)
and
index *n* represents the last element;
index -1 also represents the last element
(that is, the element at the top)
and index *-n* represents the first element.



### ⛏ 4.2 -  Stack Size
                                                       [contents] [index] *§4.2*
When you interact with the Lua API,
you are responsible for ensuring consistency.
In particular,
*you are responsible for controlling stack overflow*.
You can use the function  [lua_checkstack]
to ensure that the stack has enough space for pushing new elements.


Whenever Lua calls C,
it ensures that the stack has space for
at least *LUA_MINSTACK* extra slots.
`LUA_MINSTACK` is defined as 20,
so that usually you do not have to worry about stack space
unless your code has loops pushing elements onto the stack.


When you call a Lua function
without a fixed number of results (see  [lua_call]),
Lua ensures that the stack has enough space for all results,
but it does not ensure any extra space.
So, before pushing anything in the stack after such a call
you should use  [lua_checkstack].



### ⛏ 4.3 -  Valid and Acceptable Indices
                                                       [contents] [index] *§4.3*
Any function in the API that receives stack indices
works only with *valid indices* or *acceptable indices*.


A *valid index* is an index that refers to a
position that stores a modifiable Lua value.
It comprises stack indices between 1 and the stack top
(`1 < abs(index) < top`)

plus *pseudo-indices*,
which represent some positions that are accessible to C code
but that are not in the stack.
Pseudo-indices are used to access the registry (see  [§4.5])
and the upvalues of a C function (see  [§4.4]).


Functions that do not need a specific mutable position,
but only a value (e.g., query functions),
can be called with acceptable indices.
An *acceptable index* can be any valid index,
but it also can be any positive index after the stack top
within the space allocated for the stack,
that is, indices up to the stack size.
(Note that 0 is never an acceptable index.)
Except when noted otherwise,
functions in the API work with acceptable indices.


Acceptable indices serve to avoid extra tests
against the stack top when querying the stack.
For instance, a C function can query its third argument
without the need to first check whether there is a third argument,
that is, without the need to check whether 3 is a valid index.


For functions that can be called with acceptable indices,
any non-valid index is treated as if it
contains a value of a virtual type *LUA_TNONE*,
which behaves like a nil value.



### ⛏ 4.4 -  C Closures
                                                       [contents] [index] *§4.4*
When a C function is created,
it is possible to associate some values with it,
thus creating a *C closure* (see  [lua_pushcclosure]);
these values are called *upvalues* and are
accessible to the function whenever it is called.


Whenever a C function is called,
its upvalues are located at specific pseudo-indices.
These pseudo-indices are produced by the macro [lua_upvalueindex].
The first upvalue associated with a function is at index
`lua_upvalueindex(1)`, and so on.
Any access to `lua_upvalueindex(*n*)`,
where *n* is greater than the number of upvalues of the current function
(but not greater than 256,
which is one plus the maximum number of upvalues in a closure),
produces an acceptable but invalid index.



### ⛏ 4.5 -  Registry
                                                       [contents] [index] *§4.5*
Lua provides a *registry*,
a predefined table that can be used by any C code to
store whatever Lua values it needs to store.
The registry table is always located at pseudo-index
*LUA_REGISTRYINDEX*.
Any C library can store data into this table,
but it must take care to choose keys
that are different from those used
by other libraries, to avoid collisions.
Typically, you should use as key a string containing your library name,
or a light userdata with the address of a C object in your code,
or any Lua object created by your code.
As with variable names,
string keys starting with an underscore followed by
uppercase letters are reserved for Lua.


The integer keys in the registry are used
by the reference mechanism (see  [luaL_ref])
and by some predefined values.
Therefore, integer keys must not be used for other purposes.


When you create a new Lua state,
its registry comes with some predefined values.
These predefined values are indexed with integer keys
defined as constants in `lua.h`.
The following constants are defined:

⛏ *LUA_RIDX_MAINTHREAD*:  At this index the registry has
the main thread of the state.
(The main thread is the one created together with the state.)

⛏ *LUA_RIDX_GLOBALS*:  At this index the registry has
the global environment.


### ⛏ 4.6 -  Error Handling in C
                                                       [contents] [index] *§4.6*
Internally, Lua uses the C `longjmp` facility to handle errors.
(Lua will use exceptions if you compile it as C++;
search for `LUAI_THROW` in the source code for details.)
When Lua faces any error
(such as a memory allocation error or a type error)
it *raises* an error;
that is, it does a long jump.
A *protected environment* uses `setjmp`
to set a recovery point;
any error jumps to the most recent active recovery point.


Inside a C function you can raise an error by calling  [lua_error].


Most functions in the API can raise an error,
for instance due to a memory allocation error.
The documentation for each function indicates whether
it can raise errors.


If an error happens outside any protected environment,
Lua calls a *panic function* (see  [lua_atpanic])
and then calls `abort`,
thus exiting the host application.
Your panic function can avoid this exit by
never returning
(e.g., doing a long jump to your own recovery point outside Lua).


The panic function,
as its name implies,
is a mechanism of last resort.
Programs should avoid it.
As a general rule,
when a C function is called by Lua with a Lua state,
it can do whatever it wants on that Lua state,
as it should be already protected.
However,
when C code operates on other Lua states
(e.g., a Lua argument to the function,
a Lua state stored in the registry, or
the result of  [lua_newthread]),
it should use them only in API calls that cannot raise errors.


The panic function runs as if it were a message handler (see  [§2.3]);
in particular, the error object is at the top of the stack.
However, there is no guarantee about stack space.
To push anything on the stack,
the panic function must first check the available space (see  [§4.2]).



### ⛏ 4.7 -  Handling Yields in C
                                                       [contents] [index] *§4.7*
Internally, Lua uses the C `longjmp` facility to yield a coroutine.
Therefore, if a C function `foo` calls an API function
and this API function yields
(directly or indirectly by calling another function that yields),
Lua cannot return to `foo` any more,
because the `longjmp` removes its frame from the C stack.


To avoid this kind of problem,
Lua raises an error whenever it tries to yield across an API call,
except for three functions:
 [lua_yieldk],  [lua_callk], and  [lua_pcallk].
All those functions receive a *continuation function*
(as a parameter named `k`) to continue execution after a yield.


We need to set some terminology to explain continuations.
We have a C function called from Lua which we will call
the *original function*.
This original function then calls one of those three functions in the C API,
which we will call the *callee function*,
that then yields the current thread.
(This can happen when the callee function is  [lua_yieldk],
or when the callee function is either  [lua_callk] or  [lua_pcallk]
and the function called by them yields.)


Suppose the running thread yields while executing the callee function.
After the thread resumes,
it eventually will finish running the callee function.
However,
the callee function cannot return to the original function,
because its frame in the C stack was destroyed by the yield.
Instead, Lua calls a *continuation function*,
which was given as an argument to the callee function.
As the name implies,
the continuation function should continue the task
of the original function.


As an illustration, consider the following function:

```lua
     int original_function (lua_State *L) {
       ...     /* code 1 */
       status = lua_pcall(L, n, m, h);  /* calls Lua */
       ...     /* code 2 */
     }
```

Now we want to allow
the Lua code being run by  [lua_pcall] to yield.
First, we can rewrite our function like here:

```lua
     int k (lua_State *L, int status, lua_KContext ctx) {
       ...  /* code 2 */
     }
     
     int original_function (lua_State *L) {
       ...     /* code 1 */
       return k(L, lua_pcall(L, n, m, h), ctx);
     }
```

In the above code,
the new function `k` is a
*continuation function* (with type  [lua_KFunction]),
which should do all the work that the original function
was doing after calling  [lua_pcall].
Now, we must inform Lua that it must call `k` if the Lua code
being executed by  [lua_pcall] gets interrupted in some way
(errors or yielding),
so we rewrite the code as here,
replacing  [lua_pcall] by  [lua_pcallk]:

```lua
     int original_function (lua_State *L) {
       ...     /* code 1 */
       return k(L, lua_pcallk(L, n, m, h, ctx2, k), ctx1);
     }
```

Note the external, explicit call to the continuation:
Lua will call the continuation only if needed, that is,
in case of errors or resuming after a yield.
If the called function returns normally without ever yielding,
 [lua_pcallk] (and  [lua_callk]) will also return normally.
(Of course, instead of calling the continuation in that case,
you can do the equivalent work directly inside the original function.)


Besides the Lua state,
the continuation function has two other parameters:
the final status of the call plus the context value (`ctx`) that
was passed originally to  [lua_pcallk].
(Lua does not use this context value;
it only passes this value from the original function to the
continuation function.)
For  [lua_pcallk],
the status is the same value that would be returned by  [lua_pcallk],
except that it is  [LUA_YIELD] when being executed after a yield
(instead of  [LUA_OK]).
For  [lua_yieldk] and  [lua_callk],
the status is always  [LUA_YIELD] when Lua calls the continuation.
(For these two functions,
Lua will not call the continuation in case of errors,
because they do not handle errors.)
Similarly, when using  [lua_callk],
you should call the continuation function
with  [LUA_OK] as the status.
(For  [lua_yieldk], there is not much point in calling
directly the continuation function,
because  [lua_yieldk] usually does not return.)


Lua treats the continuation function as if it were the original function.
The continuation function receives the same Lua stack
from the original function,
in the same state it would be if the callee function had returned.
(For instance,
after a  [lua_callk] the function and its arguments are
removed from the stack and replaced by the results from the call.)
It also has the same upvalues.
Whatever it returns is handled by Lua as if it were the return
of the original function.



### ⛏ 4.8 -  Functions and Types
                                                       [contents] [index] *§4.8*
Here we list all functions and types from the C API in
alphabetical order.
Each function has an indicator like this:

                                                                   [-o, +p, *x*]

The first field, `o`, is how many elements the function pops from the stack.
The second field, `p`, is how many elements the function pushes onto the stack.
(Any function always pushes its results after popping its arguments.)
A field in the form `x|y` means the function can push (or pop)
`x` or `y` elements, depending on the situation;
an interrogation mark `'?'` means that we cannot know how many elements the 
function pops/pushes by looking only at its arguments
(e.g., they may depend on what is on the stack).

The third field, `x`, tells whether the function may raise errors:
`'-'` means the function never raises any error;
`'m'` means the function may raise out-of-memory errors
and errors running a `__gc` metamethod;
`'e'` means the function may raise any errors
(it can run arbitrary Lua code, either directly or through metamethods);
`'v'` means the function may raise an error on purpose.


#### lua_absindex
                                                                  *lua_absindex*
                                                                     [-0, +0, -]
```cpp
int lua_absindex (lua_State *L, int idx);
```

Converts the acceptable index `idx`
into an equivalent absolute index
(that is, one that does not depend on the stack top).



#### lua_Alloc
                                                                     *lua_Alloc*
```cpp
typedef void * (*lua_Alloc) (void *ud,
                             void *ptr,
                             size_t osize,
                             size_t nsize);
```

The type of the memory-allocation function used by Lua states.
The allocator function must provide a
functionality similar to `realloc`,
but not exactly the same.
Its arguments are
`ud`, an opaque pointer passed to  [lua_newstate];
`ptr`, a pointer to the block being allocated/reallocated/freed;
`osize`, the original size of the block or some code about what
is being allocated;
and `nsize`, the new size of the block.


When `ptr` is not `NULL`,
`osize` is the size of the block pointed by `ptr`,
that is, the size given when it was allocated or reallocated.


When `ptr` is `NULL`,
`osize` encodes the kind of object that Lua is allocating.
`osize` is any of
 [LUA_TSTRING],  [LUA_TTABLE],  [LUA_TFUNCTION],
 [LUA_TUSERDATA], or  [LUA_TTHREAD] when (and only when)
Lua is creating a new object of that type.
When `osize` is some other value,
Lua is allocating memory for something else.


Lua assumes the following behavior from the allocator function:


When `nsize` is zero,
the allocator must behave like `free`
and return `NULL`.


When `nsize` is not zero,
the allocator must behave like `realloc`.
The allocator returns `NULL`
if and only if it cannot fulfill the request.
Lua assumes that the allocator never fails when
`osize >= nsize`.


Here is a simple implementation for the allocator function.
It is used in the auxiliary library by  [luaL_newstate].

```lua
     static void *l_alloc (void *ud, void *ptr, size_t osize,
                                                size_t nsize) {
       (void)ud;  (void)osize;  /* not used */
       if (nsize == 0) {
         free(ptr);
         return NULL;
       }
       else
         return realloc(ptr, nsize);
     }
```

Note that Standard C ensures
that `free(NULL)` has no effect and that
`realloc(NULL,size)` is equivalent to `malloc(size)`.
This code assumes that `realloc` does not fail when shrinking a block.
(Although Standard C does not ensure this behavior,
it seems to be a safe assumption.)



#### lua_arith
                                                                     *lua_arith*
                                                               [-(2|1), +1, *e*]
```cpp
void lua_arith (lua_State *L, int op);
```

Performs an arithmetic or bitwise operation over the two values
(or one, in the case of negations)
at the top of the stack,
with the value at the top being the second operand,
pops these values, and pushes the result of the operation.
The function follows the semantics of the corresponding Lua operator
(that is, it may call metamethods).


The value of `op` must be one of the following constants:


⛏ *LUA_OPADD*:  performs addition (`+`)
⛏ *LUA_OPSUB*:  performs subtraction (`-`)
⛏ *LUA_OPMUL*:  performs multiplication (`*`)
⛏ *LUA_OPDIV*:  performs float division (`/`)
⛏ *LUA_OPIDIV*:  performs floor division (`//`)
⛏ *LUA_OPMOD*:  performs modulo (`%`)
⛏ *LUA_OPPOW*:  performs exponentiation (`^`)
⛏ *LUA_OPUNM*:  performs mathematical negation (unary `-`)
⛏ *LUA_OPBNOT*:  performs bitwise NOT (`~`)
⛏ *LUA_OPBAND*:  performs bitwise AND (`&`)
⛏ *LUA_OPBOR*:  performs bitwise OR (`|`)
⛏ *LUA_OPBXOR*:  performs bitwise exclusive OR (`~`)
⛏ *LUA_OPSHL*:  performs left shift (`<<`)
⛏ *LUA_OPSHR*:  performs right shift (`>>`)


#### lua_atpanic
                                                                   *lua_atpanic*
                                                                     [-0, +0, -]
```cpp
lua_CFunction lua_atpanic (lua_State *L, lua_CFunction panicf);
```

Sets a new panic function and returns the old one (see  [§4.6]).



#### lua_call
                                                                      *lua_call*
                                                    [-(nargs+1), +nresults, *e*]
```cpp
void lua_call (lua_State *L, int nargs, int nresults);
```

Calls a function.


To call a function you must use the following protocol:
first, the function to be called is pushed onto the stack;
then, the arguments to the function are pushed
in direct order;
that is, the first argument is pushed first.
Finally you call  [lua_call];
`nargs` is the number of arguments that you pushed onto the stack.
All arguments and the function value are popped from the stack
when the function is called.
The function results are pushed onto the stack when the function returns.
The number of results is adjusted to `nresults`,
unless `nresults` is *LUA_MULTRET*.
In this case, all results from the function are pushed;
Lua takes care that the returned values fit into the stack space,
but it does not ensure any extra space in the stack.
The function results are pushed onto the stack in direct order
(the first result is pushed first),
so that after the call the last result is on the top of the stack.


Any error inside the called function is propagated upwards
(with a `longjmp`).


The following example shows how the host program can do the
equivalent to this Lua code:

```lua
     a = f("how", t.x, 14)
```

Here it is in C:

```cpp
    lua_getglobal(L, "f");                  /* function to be called sh
     lua_pushliteral(L, "how");                       /* 1st argument h
     lua_getglobal(L, "t");                    /* table to be indexed h
     lua_getfield(L, -1, "x");        /* push result of t.x (2nd arg) h
     lua_remove(L, -2);                  /* remove 't' from the stack h
     lua_pushinteger(L, 14);                          /* 3rd argument h
     lua_call(L, 3, 1);     /* call 'f' with 3 arguments and 1 result h
     lua_setglobal(L, "a");                         /* set global 'a' /
```

Note that the code above is *balanced*:
at its end, the stack is back to its original configuration.
This is considered good programming practice.



#### lua_callk
                                                                     *lua_callk*
                                                  [-(nargs + 1), +nresults, *e*]
```cpp
void lua_callk (lua_State *L,
                int nargs,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

This function behaves exactly like  [lua_call],
but allows the called function to yield (see  [§4.7]).



#### lua_CFunction
                                                                 *lua_CFunction*
```cpp
typedef int (*lua_CFunction) (lua_State *L);
```

Type for C functions.


In order to communicate properly with Lua,
a C function must use the following protocol,
which defines the way parameters and results are passed:
a C function receives its arguments from Lua in its stack
in direct order (the first argument is pushed first).
So, when the function starts,
`lua_gettop(L)` returns the number of arguments received by the function.
The first argument (if any) is at index 1
and its last argument is at index `lua_gettop(L)`.
To return values to Lua, a C function just pushes them onto the stack,
in direct order (the first result is pushed first),
and returns the number of results.
Any other value in the stack below the results will be properly
discarded by Lua.
Like a Lua function, a C function called by Lua can also return
many results.


As an example, the following function receives a variable number
of numeric arguments and returns their average and their sum:

```c++
     static int foo (lua_State *L) {
       int n = lua_gettop(L);       /* number of arguments */
       lua_Number sum = 0.0;
       int i;
       for (i = 1; i <= n; i++) {
         if (!lua_isnumber(L, i)) {
           lua_pushliteral(L, "incorrect argument");
           lua_error(L);
         }
         sum += lua_tonumber(L, i);
       }
       lua_pushnumber(L, sum/n);    /* first result */
       lua_pushnumber(L, sum);      /* second result */
       return 2;                    /* number of results */
     }
```



#### lua_checkstack
                                                                *lua_checkstack*
                                                                     [-0, +0, -]
```cpp
int lua_checkstack (lua_State *L, int n);
```

Ensures that the stack has space for at least `n` extra slots
(that is, that you can safely push up to `n` values into it).
It returns false if it cannot fulfill the request,
either because it would cause the stack
to be larger than a fixed maximum size
(typically at least several thousand elements) or
because it cannot allocate memory for the extra space.
This function never shrinks the stack;
if the stack already has space for the extra slots,
it is left unchanged.



#### lua_close
                                                                     *lua_close*
                                                                     [-0, +0, -]
```cpp
void lua_close (lua_State *L);
```

Destroys all objects in the given Lua state
(calling the corresponding garbage-collection metamethods, if any)
and frees all dynamic memory used by this state.
In several platforms, you may not need to call this function,
because all resources are naturally released when the host program ends.
On the other hand, long-running programs that create multiple states,
such as daemons or web servers,
will probably need to close states as soon as they are not needed.



#### lua_compare
                                                                   *lua_compare*
                                                                   [-0, +0, *e*]
```cpp
int lua_compare (lua_State *L, int index1, int index2, int op);
```

Compares two Lua values.
Returns 1 if the value at index `index1` satisfies `op`
when compared with the value at index `index2`,
following the semantics of the corresponding Lua operator
(that is, it may call metamethods).
Otherwise returns 0.
Also returns 0 if any of the indices is not valid.


The value of `op` must be one of the following constants:


⛏ *LUA_OPEQ*:  compares for equality (`==`)
⛏ *LUA_OPLT*:  compares for less than (`<`)
⛏ *LUA_OPLE*:  compares for less or equal (`<=`)


#### lua_concat
                                                                    *lua_concat*
                                                                   [-n, +1, *e*]
```cpp
void lua_concat (lua_State *L, int n);
```

Concatenates the `n` values at the top of the stack,
pops them, and leaves the result at the top.
If `n` is 1, the result is the single value on the stack
(that is, the function does nothing);
if `n` is 0, the result is the empty string.
Concatenation is performed following the usual semantics of Lua
(see  [§3.4.6]).



#### lua_copy
                                                                      *lua_copy*
                                                                     [-0, +0, -]
```cpp
void lua_copy (lua_State *L, int fromidx, int toidx);
```

Copies the element at index `fromidx`
into the valid index `toidx`,
replacing the value at that position.
Values at other positions are not affected.



#### lua_createtable
                                                               *lua_createtable*
                                                                   [-0, +1, *m*]
```cpp
void lua_createtable (lua_State *L, int narr, int nrec);
```

Creates a new empty table and pushes it onto the stack.
Parameter `narr` is a hint for how many elements the table
will have as a sequence;
parameter `nrec` is a hint for how many other elements
the table will have.
Lua may use these hints to preallocate memory for the new table.
This preallocation is useful for performance when you know in advance
how many elements the table will have.
Otherwise you can use the function  [lua_newtable].



#### lua_dump
                                                                      *lua_dump*
                                                                     [-0, +0, -]
```cpp
int lua_dump (lua_State *L,
                        lua_Writer writer,
                        void *data,
                        int strip);
```

Dumps a function as a binary chunk.
Receives a Lua function on the top of the stack
and produces a binary chunk that,
if loaded again,
results in a function equivalent to the one dumped.
As it produces parts of the chunk,
 [lua_dump] calls function `writer` (see  [lua_Writer])
with the given `data`
to write them.


If `strip` is true,
the binary representation may not include all debug information
about the function,
to save space.


The value returned is the error code returned by the last
call to the writer;
0 means no errors.


This function does not pop the Lua function from the stack.



#### lua_error
                                                                     *lua_error*
                                                                   [-1, +0, *v*]
```cpp
int lua_error (lua_State *L);
```

Generates a Lua error,
using the value at the top of the stack as the error object.
This function does a long jump,
and therefore never returns
(see  [luaL_error]).



#### lua_gc
                                                                        *lua_gc*
                                                                   [-0, +0, *m*]
```cpp
int lua_gc (lua_State *L, int what, int data);
```

Controls the garbage collector.


This function performs several tasks,
according to the value of the parameter `what`:


⛏ `LUA_GCSTOP`: 
stops the garbage collector.

*\1*`LUA_GCRESTART`: 
restarts the garbage collector.

⛏ `LUA_GCCOLLECT`: 
performs a full garbage-collection cycle.

⛏ `LUA_GCCOUNT`: 
returns the current amount of memory (in Kbytes) in use by Lua.

⛏ `LUA_GCCOUNTB`: 
returns the remainder of dividing the current amount of bytes of
memory in use by Lua by 1024.

⛏ `LUA_GCSTEP`: 
performs an incremental step of garbage collection.

⛏ `LUA_GCSETPAUSE`: 
sets `data` as the new value
for the *pause* of the collector (see  [§2.5])
and returns the previous value of the pause.

⛏ `LUA_GCSETSTEPMUL`: 
sets `data` as the new value for the *step multiplier* of
the collector (see  [§2.5])
and returns the previous value of the step multiplier.

⛏ `LUA_GCISRUNNING`: 
returns a boolean that tells whether the collector is running
(i.e., not stopped).


For more details about these options,
see  [collectgarbage].



#### lua_getallocf
                                                                 *lua_getallocf*
                                                                     [-0, +0, -]
```lua
lua_Alloc lua_getallocf (lua_State *L, void **ud);
```

Returns the memory-allocation function of a given state.
If `ud` is not `NULL`, Lua stores in `*ud` the
opaque pointer given when the memory-allocator function was set.



#### lua_getfield
                                                                  *lua_getfield*
                                                                   [-0, +1, *e*]
```cpp
int lua_getfield (lua_State *L, int index, const char *k);
```

Pushes onto the stack the value `t[k]`,
where `t` is the value at the given index.
As in Lua, this function may trigger a metamethod
for the "index" event (see  [§2.4]).


Returns the type of the pushed value.



#### lua_getextraspace
                                                             *lua_getextraspace*
                                                                     [-0, +0, -]
```cpp
void *lua_getextraspace (lua_State *L);
```

Returns a pointer to a raw memory area associated with the
given Lua state.
The application can use this area for any purpose;
Lua does not use it for anything.


Each new thread has this area initialized with a copy
of the area of the main thread.


By default, this area has the size of a pointer to void,
but you can recompile Lua with a different size for this area.
(See `LUA_EXTRASPACE` in `luaconf.h`.)



#### lua_getglobal
                                                                 *lua_getglobal*
                                                                   [-0, +1, *e*]
```cpp
int lua_getglobal (lua_State *L, const char *name);
```

Pushes onto the stack the value of the global `name`.
Returns the type of that value.



#### lua_geti
                                                                      *lua_geti*
                                                                   [-0, +1, *e*]
```cpp
int lua_geti (lua_State *L, int index, lua_Integer i);
```

Pushes onto the stack the value `t[i]`,
where `t` is the value at the given index.
As in Lua, this function may trigger a metamethod
for the "index" event (see  [§2.4]).


Returns the type of the pushed value.



#### lua_getmetatable
                                                              *lua_getmetatable*
                                                                 [-0, +(0|1), -]
```cpp
int lua_getmetatable (lua_State *L, int index);
```

If the value at the given index has a metatable,
the function pushes that metatable onto the stack and returns 1.
Otherwise,
the function returns 0 and pushes nothing on the stack.



#### lua_gettable
                                                                  *lua_gettable*
                                                                   [-1, +1, *e*]
```cpp
int lua_gettable (lua_State *L, int index);
```

Pushes onto the stack the value `t[k]`,
where `t` is the value at the given index
and `k` is the value at the top of the stack.


This function pops the key from the stack,
pushing the resulting value in its place.
As in Lua, this function may trigger a metamethod
for the "index" event (see  [§2.4]).


Returns the type of the pushed value.



#### lua_gettop
                                                                    *lua_gettop*
                                                                     [-0, +0, -]
```cpp
int lua_gettop (lua_State *L);
```

Returns the index of the top element in the stack.
Because indices start at 1,
this result is equal to the number of elements in the stack;
in particular, 0 means an empty stack.



#### lua_getuservalue
                                                              *lua_getuservalue*
                                                                     [-0, +1, -]
```cpp
int lua_getuservalue (lua_State *L, int index);
```

Pushes onto the stack the Lua value associated with the full userdata
at the given index.


Returns the type of the pushed value.



#### lua_insert
                                                                    *lua_insert*
                                                                     [-1, +1, -]
```cpp
void lua_insert (lua_State *L, int index);
```

Moves the top element into the given valid index,
shifting up the elements above this index to open space.
This function cannot be called with a pseudo-index,
because a pseudo-index is not an actual stack position.



#### lua_Integer
                                                                   *lua_Integer*
```cpp
typedef ... lua_Integer;
```

The type of integers in Lua.


By default this type is `long long`,
(usually a 64-bit two-complement integer),
but that can be changed to `long` or `int`
(usually a 32-bit two-complement integer).
(See `LUA_INT_TYPE` in `luaconf.h`.)


Lua also defines the constants
*LUA_MININTEGER* and *LUA_MAXINTEGER*,
with the minimum and the maximum values that fit in this type.



#### lua_isboolean
                                                                 *lua_isboolean*
                                                                     [-0, +0, -]
```cpp
int lua_isboolean (lua_State *L, int index);
```

Returns 1 if the value at the given index is a boolean,
and 0 otherwise.



#### lua_iscfunction
                                                               *lua_iscfunction*
                                                                     [-0, +0, -]
```lua
     ```
int lua_iscfunction (lua_State *L, int index);

Returns 1 if the value at the given index is a C function,
and 0 otherwise.



#### lua_isfunction
                                                                *lua_isfunction*
                                                                     [-0, +0, -]
```lua
     ```
int lua_isfunction (lua_State *L, int index);

Returns 1 if the value at the given index is a function
(either C or Lua), and 0 otherwise.



#### lua_isinteger
                                                                 *lua_isinteger*
                                                                     [-0, +0, -]
```cpp
int lua_isinteger (lua_State *L, int index);
```

Returns 1 if the value at the given index is an integer
(that is, the value is a number and is represented as an integer),
and 0 otherwise.



#### lua_islightuserdata
                                                           *lua_islightuserdata*
                                                                     [-0, +0, -]
```cpp
int lua_islightuserdata (lua_State *L, int index);
```

Returns 1 if the value at the given index is a light userdata,
and 0 otherwise.



#### lua_isnil
                                                                     *lua_isnil*
                                                                     [-0, +0, -]
```cpp
int lua_isnil (lua_State *L, int index);
```

Returns 1 if the value at the given index is nil,
and 0 otherwise.



#### lua_isnone
                                                                    *lua_isnone*
                                                                     [-0, +0, -]
```cpp
int lua_isnone (lua_State *L, int index);
```

Returns 1 if the given index is not valid,
and 0 otherwise.



#### lua_isnoneornil
                                                               *lua_isnoneornil*
                                                                     [-0, +0, -]
```cpp
int lua_isnoneornil (lua_State *L, int index);
```

Returns 1 if the given index is not valid
or if the value at this index is nil,
and 0 otherwise.



#### lua_isnumber
                                                                  *lua_isnumber*
                                                                     [-0, +0, -]
```cpp
int lua_isnumber (lua_State *L, int index);
```

Returns 1 if the value at the given index is a number
or a string convertible to a number,
and 0 otherwise.



#### lua_isstring
                                                                  *lua_isstring*
                                                                     [-0, +0, -]
```cpp
int lua_isstring (lua_State *L, int index);
```

Returns 1 if the value at the given index is a string
or a number (which is always convertible to a string),
and 0 otherwise.



#### lua_istable
                                                                   *lua_istable*
                                                                     [-0, +0, -]
```cpp
int lua_istable (lua_State *L, int index);
```

Returns 1 if the value at the given index is a table,
and 0 otherwise.



#### lua_isthread
                                                                  *lua_isthread*
                                                                     [-0, +0, -]
```cpp
int lua_isthread (lua_State *L, int index);
```

Returns 1 if the value at the given index is a thread,
and 0 otherwise.



#### lua_isuserdata
                                                                *lua_isuserdata*
                                                                     [-0, +0, -]
```cpp
int lua_isuserdata (lua_State *L, int index);
```

Returns 1 if the value at the given index is a userdata
(either full or light), and 0 otherwise.



#### lua_isyieldable
                                                               *lua_isyieldable*
                                                                     [-0, +0, -]
```cpp
int lua_isyieldable (lua_State *L);
```

Returns 1 if the given coroutine can yield,
and 0 otherwise.



#### lua_KContext
                                                                  *lua_KContext*
```cpp
typedef ... lua_KContext;
```

The type for continuation-function contexts.
It must be a numeric type.
This type is defined as `intptr_t`
when `intptr_t` is available,
so that it can store pointers too.
Otherwise, it is defined as `ptrdiff_t`.



#### lua_KFunction
                                                                 *lua_KFunction*
```cpp
typedef int (*lua_KFunction) (lua_State *L, int status, lua_KContext ctx);
```

Type for continuation functions (see  [§4.7]).



#### lua_len
                                                                       *lua_len*
                                                                   [-0, +1, *e*]
```cpp
void lua_len (lua_State *L, int index);
```

Returns the length of the value at the given index.
It is equivalent to the `'#'` operator in Lua (see  [§3.4.7]) and
may trigger a metamethod for the "length" event (see  [§2.4]).
The result is pushed on the stack.



#### lua_load
                                                                      *lua_load*
                                                                     [-0, +1, -]
```cpp
int lua_load (lua_State *L,
              lua_Reader reader,
              void *data,
              const char *chunkname,
              const char *mode);
```

Loads a Lua chunk without running it.
If there are no errors, `lua_load` pushes the compiled chunk as a Lua
function on top of the stack.
Otherwise, it pushes an error message.


The return values of `lua_load` are:


⛏  [LUA_OK]:  no errors;
⛏  [LUA_ERRSYNTAX]: syntax error during precompilation;
⛏  [LUA_ERRMEM]: memory allocation (out-of-memory) error;
⛏  [LUA_ERRGCMM]: error while running a `__gc` metamethod.

(This error has no relation with the chunk being loaded.
It is generated by the garbage collector.)


The `lua_load` function uses a user-supplied `reader` function
to read the chunk (see  [lua_Reader]).
The `data` argument is an opaque value passed to the reader function.


The `chunkname` argument gives a name to the chunk,
which is used for error messages and in debug information (see  [§4.9]).


`lua_load` automatically detects whether the chunk is text or binary
and loads it accordingly (see program `luac`).
The string `mode` works as in function  [load],
with the addition that
a `NULL` value is equivalent to the string `"bt`".


`lua_load` uses the stack internally,
so the reader function must always leave the stack
unmodified when returning.


If the resulting function has upvalues,
its first upvalue is set to the value of the global environment
stored at index `LUA_RIDX_GLOBALS` in the registry (see  [§4.5]).
When loading main chunks,
this upvalue will be the `_ENV` variable (see  [§2.2]).
Other upvalues are initialized with nil.



#### lua_newstate
                                                                  *lua_newstate*
                                                                     [-0, +0, -]
```cpp
lua_State *lua_newstate (lua_Alloc f, void *ud);
```

Creates a new thread running in a new, independent state.
Returns `NULL` if it cannot create the thread or the state
(due to lack of memory).
The argument `f` is the allocator function;
Lua does all memory allocation for this state
through this function (see  [lua_Alloc]).
The second argument, `ud`, is an opaque pointer that Lua
passes to the allocator in every call.



#### lua_newtable
                                                                  *lua_newtable*
                                                                   [-0, +1, *m*]
```cpp
void lua_newtable (lua_State *L);
```

Creates a new empty table and pushes it onto the stack.
It is equivalent to `lua_createtable(L, 0, 0)`.



#### lua_newthread
                                                                 *lua_newthread*
                                                                   [-0, +1, *m*]
```cpp
lua_State *lua_newthread (lua_State *L);
```

Creates a new thread, pushes it on the stack,
and returns a pointer to a  [lua_State] that represents this new thread.
The new thread returned by this function shares with the original thread
its global environment,
but has an independent execution stack.


There is no explicit function to close or to destroy a thread.
Threads are subject to garbage collection,
like any Lua object.



#### lua_newuserdata
                                                               *lua_newuserdata*
                                                                   [-0, +1, *m*]
```cpp
void *lua_newuserdata (lua_State *L, size_t size);
```

This function allocates a new block of memory with the given size,
pushes onto the stack a new full userdata with the block address,
and returns this address.
The host program can freely use this memory.



#### lua_next
                                                                      *lua_next*
                                                               [-1, +(2|0), *e*]
```cpp
int lua_next (lua_State *L, int index);
```

Pops a key from the stack,
and pushes a key-value pair from the table at the given index
(the "next" pair after the given key).
If there are no more elements in the table,
then  [lua_next] returns 0 (and pushes nothing).


A typical traversal looks like this:

```lua
     /* table is in the stack at index 't' sh
     lua_pushnil(L);  /* first key /
     while (lua_next(L, t) != 0) {
       /* uses 'key' (at index -2) and 'value' (at index -1) */
       printf("%s - %s\n",
              lua_typename(L, lua_type(L, -2)),
              lua_typename(L, lua_type(L, -1)));
       /* removes 'value'; keeps 'key' for next iteration */
       lua_pop(L, 1);
     }
```


While traversing a table,
do not call  [lua_tolstring] directly on a key,
unless you know that the key is actually a string.
Recall that  [lua_tolstring] may change
the value at the given index;
this confuses the next call to  [lua_next].


See function  [next] for the caveats of modifying
the table during its traversal.



#### lua_Number
                                                                    *lua_Number*
```cpp
typedef ... lua_Number;
```

The type of floats in Lua.


By default this type is double,
but that can be changed to a single float or a long double.
(See `LUA_FLOAT_TYPE` in `luaconf.h`.)



#### lua_numbertointeger
                                                           *lua_numbertointeger*
```cpp
int lua_numbertointeger (lua_Number n, lua_Integer *p);
```

Converts a Lua float to a Lua integer.
This macro assumes that `n` has an integral value.
If that value is within the range of Lua integers,
it is converted to an integer and assigned to `*p`.
The macro results in a boolean indicating whether the
conversion was successful.
(Note that this range test can be tricky to do
correctly without this macro,
due to roundings.)


This macro may evaluate its arguments more than once.



#### lua_pcall
                                                                     *lua_pcall*
                                                [-(nargs + 1), +(nresults|1), -]
```cpp
int lua_pcall (lua_State *L, int nargs, int nresults, int msgh);
```

Calls a function in protected mode.


Both `nargs` and `nresults` have the same meaning as
in  [lua_call].
If there are no errors during the call,
 [lua_pcall] behaves exactly like  [lua_call].
However, if there is any error,
 [lua_pcall] catches it,
pushes a single value on the stack (the error object),
and returns an error code.
Like  [lua_call],
 [lua_pcall] always removes the function
and its arguments from the stack.


If `msgh` is 0,
then the error object returned on the stack
is exactly the original error object.
Otherwise, `msgh` is the stack index of a
*message handler*.
(This index cannot be a pseudo-index.)
In case of runtime errors,
this function will be called with the error object
and its return value will be the object
returned on the stack by  [lua_pcall].


Typically, the message handler is used to add more debug
information to the error object, such as a stack traceback.
Such information cannot be gathered after the return of  [lua_pcall],
since by then the stack has unwound.


The  [lua_pcall] function returns one of the following constants
(defined in `lua.h`):


⛏ *LUA_OK* (0): 
success.
⛏ *LUA_ERRRUN*: 
a runtime error.

⛏ *LUA_ERRMEM*: 
memory allocation error.
For such errors, Lua does not call the message handler.

⛏ *LUA_ERRERR*: 
error while running the message handler.

⛏ *LUA_ERRGCMM*: 
error while running a `__gc` metamethod.
For such errors, Lua does not call the message handler
(as this kind of error typically has no relation
with the function being called).


#### lua_pcallk
                                                                    *lua_pcallk*
                                                [-(nargs + 1), +(nresults|1), -]
```cpp
int lua_pcallk (lua_State *L,
                int nargs,
                int nresults,
                int msgh,
                lua_KContext ctx,
                lua_KFunction k);
```

This function behaves exactly like  [lua_pcall],
but allows the called function to yield (see  [§4.7]).



#### lua_pop
                                                                       *lua_pop*
                                                                     [-n, +0, -]
```cpp
void lua_pop (lua_State *L, int n);
```

Pops `n` elements from the stack.



#### lua_pushboolean
                                                               *lua_pushboolean*
                                                                     [-0, +1, -]
```cpp
void lua_pushboolean (lua_State *L, int b);
```

Pushes a boolean value with value `b` onto the stack.



#### lua_pushcclosure
                                                              *lua_pushcclosure*
                                                                   [-n, +1, *m*]
```cpp
void lua_pushcclosure (lua_State *L, lua_CFunction fn, int n);
```

Pushes a new C closure onto the stack.


When a C function is created,
it is possible to associate some values with it,
thus creating a C closure (see  [§4.4]);
these values are then accessible to the function whenever it is called.
To associate values with a C function,
first these values must be pushed onto the stack
(when there are multiple values, the first value is pushed first).
Then  [lua_pushcclosure]
is called to create and push the C function onto the stack,
with the argument `n` telling how many values will be
associated with the function.
 [lua_pushcclosure] also pops these values from the stack.


 The maximum value for `n` is 255.


 When `n` is zero,
this function creates a *light C function*,
which is just a pointer to the C function.
In that case, it never raises a memory error.



#### lua_pushcfunction
                                                             *lua_pushcfunction*
                                                                     [-0, +1, -]
```lua
     ```
void lua_pushcfunction (lua_State *L, lua_CFunction f);

Pushes a C function onto the stack.
This function receives a pointer to a C function
and pushes onto the stack a Lua value of type `function` that,
when called, invokes the corresponding C function.


Any function to be callable by Lua must
follow the correct protocol to receive its parameters
and return its results (see  [lua_CFunction]).



#### lua_pushfstring
                                                               *lua_pushfstring*
                                                                   [-0, +1, *e*]
```cpp
const char *lua_pushfstring (lua_State *L, const char *fmt, ...);
```

Pushes onto the stack a formatted string
and returns a pointer to this string.
It is similar to the ISO C function `sprintf`,
but has some important differences:


⛏ 
You do not have to allocate space for the result:
the result is a Lua string and Lua takes care of memory allocation
(and deallocation, through garbage collection).

⛏ 
The conversion specifiers are quite restricted.
There are no flags, widths, or precisions.
The conversion specifiers can only be
`'%%'` (inserts the character `'%'`),
`'%s'` (inserts a zero-terminated string, with no size restrictions),
`'%f'` (inserts a  [lua_Number]),
`'%I'` (inserts a  [lua_Integer]),
`'%p'` (inserts a pointer as a hexadecimal numeral),
`'%d'` (inserts an `int`),
`'%c'` (inserts an `int` as a one-byte character), and
`'%U'` (inserts a `long int` as a UTF-8 byte sequence).


Unlike other push functions,
this function checks for the stack space it needs,
including the slot for its result.



#### lua_pushglobaltable
                                                           *lua_pushglobaltable*
                                                                     [-0, +1, -]
```cpp
void lua_pushglobaltable (lua_State *L);
```

Pushes the global environment onto the stack.



#### lua_pushinteger
                                                               *lua_pushinteger*
                                                                     [-0, +1, -]
```cpp
void lua_pushinteger (lua_State *L, lua_Integer n);
```

Pushes an integer with value `n` onto the stack.



#### lua_pushlightuserdata
                                                         *lua_pushlightuserdata*
                                                                     [-0, +1, -]
```cpp
void lua_pushlightuserdata (lua_State *L, void *p);
```

Pushes a light userdata onto the stack.


Userdata represent C values in Lua.
A *light userdata* represents a pointer, a `void*`.
It is a value (like a number):
you do not create it, it has no individual metatable,
and it is not collected (as it was never created).
A light userdata is equal to "any"
light userdata with the same C address.



#### lua_pushliteral
                                                               *lua_pushliteral*
                                                                   [-0, +1, *m*]
```cpp
const char *lua_pushliteral (lua_State *L, const char *s);
```

This macro is equivalent to  [lua_pushstring],
but should be used only when `s` is a literal string.



#### lua_pushlstring
                                                               *lua_pushlstring*
                                                                   [-0, +1, *m*]
```cpp
const char *lua_pushlstring (lua_State *L, const char *s, size_t len);
```

Pushes the string pointed to by `s` with size `len`
onto the stack.
Lua makes (or reuses) an internal copy of the given string,
so the memory at `s` can be freed or reused immediately after
the function returns.
The string can contain any binary data,
including embedded zeros.


Returns a pointer to the internal copy of the string.



#### lua_pushnil
                                                                   *lua_pushnil*
                                                                     [-0, +1, -]
```cpp
void lua_pushnil (lua_State *L);
```

Pushes a nil value onto the stack.



#### lua_pushnumber
                                                                *lua_pushnumber*
                                                                     [-0, +1, -]
```cpp
void lua_pushnumber (lua_State *L, lua_Number n);
```

Pushes a float with value `n` onto the stack.



#### lua_pushstring
                                                                *lua_pushstring*
                                                                   [-0, +1, *m*]
```cpp
const char *lua_pushstring (lua_State *L, const char *s);
```

Pushes the zero-terminated string pointed to by `s`
onto the stack.
Lua makes (or reuses) an internal copy of the given string,
so the memory at `s` can be freed or reused immediately after
the function returns.


Returns a pointer to the internal copy of the string.


If `s` is `NULL`, pushes nil and returns `NULL`.



#### lua_pushthread
                                                                *lua_pushthread*
                                                                     [-0, +1, -]
```cpp
int lua_pushthread (lua_State *L);
```

Pushes the thread represented by `L` onto the stack.
Returns 1 if this thread is the main thread of its state.



#### lua_pushvalue
                                                                 *lua_pushvalue*
                                                                     [-0, +1, -]
```cpp
void lua_pushvalue (lua_State *L, int index);
```

Pushes a copy of the element at the given index
onto the stack.



#### lua_pushvfstring
                                                              *lua_pushvfstring*
                                                                   [-0, +1, *m*]
```cpp
const char *lua_pushvfstring (lua_State *L,
                              const char *fmt,
                              va_list argp);
```

Equivalent to  [lua_pushfstring], except that it receives a `va_list`
instead of a variable number of arguments.



#### lua_rawequal
                                                                  *lua_rawequal*
                                                                     [-0, +0, -]
```cpp
int lua_rawequal (lua_State *L, int index1, int index2);
```

Returns 1 if the two values in indices `index1` and
`index2` are primitively equal
(that is, without calling the `__eq` metamethod).
Otherwise returns 0.
Also returns 0 if any of the indices are not valid.



#### lua_rawget
                                                                    *lua_rawget*
                                                                     [-1, +1, -]
```cpp
int lua_rawget (lua_State *L, int index);
```

Similar to  [lua_gettable], but does a raw access
(i.e., without metamethods).



#### lua_rawgeti
                                                                   *lua_rawgeti*
                                                                     [-0, +1, -]
```cpp
int lua_rawgeti (lua_State *L, int index, lua_Integer n);
```

Pushes onto the stack the value `t[n]`,
where `t` is the table at the given index.
The access is raw,
that is, it does not invoke the `__index` metamethod.


Returns the type of the pushed value.



#### lua_rawgetp
                                                                   *lua_rawgetp*
                                                                     [-0, +1, -]
```cpp
int lua_rawgetp (lua_State *L, int index, const void *p);
```

Pushes onto the stack the value `t[k]`,
where `t` is the table at the given index and
`k` is the pointer `p` represented as a light userdata.
The access is raw;
that is, it does not invoke the `__index` metamethod.


Returns the type of the pushed value.



#### lua_rawlen
                                                                    *lua_rawlen*
                                                                     [-0, +0, -]
```cpp
size_t lua_rawlen (lua_State *L, int index);
```

Returns the raw "length" of the value at the given index:
for strings, this is the string length;
for tables, this is the result of the length operator (`'#'`)
with no metamethods;
for userdata, this is the size of the block of memory allocated
for the userdata;
for other values, it is 0.



#### lua_rawset
                                                                    *lua_rawset*
                                                                   [-2, +0, *m*]
```cpp
void lua_rawset (lua_State *L, int index);
```

Similar to  [lua_settable], but does a raw assignment
(i.e., without metamethods).



#### lua_rawseti
                                                                   *lua_rawseti*
                                                                   [-1, +0, *m*]
```cpp
void lua_rawseti (lua_State *L, int index, lua_Integer i);
```

Does the equivalent of `t[i] = v`,
where `t` is the table at the given index
and `v` is the value at the top of the stack.


This function pops the value from the stack.
The assignment is raw,
that is, it does not invoke the `__newindex` metamethod.



#### lua_rawsetp
                                                                   *lua_rawsetp*
                                                                   [-1, +0, *m*]
```cpp
void lua_rawsetp (lua_State *L, int index, const void *p);
```

Does the equivalent of `t[p] = v`,
where `t` is the table at the given index,
`p` is encoded as a light userdata,
and `v` is the value at the top of the stack.


This function pops the value from the stack.
The assignment is raw,
that is, it does not invoke `__newindex` metamethod.



#### lua_Reader
                                                                    *lua_Reader*
```cpp
typedef const char * (*lua_Reader) (lua_State *L,
                                    void *data,
                                    size_t *size);
```

The reader function used by  [lua_load].
Every time it needs another piece of the chunk,
 [lua_load] calls the reader,
passing along its `data` parameter.
The reader must return a pointer to a block of memory
with a new piece of the chunk
and set `size` to the block size.
The block must exist until the reader function is called again.
To signal the end of the chunk,
the reader must return `NULL` or set `size` to zero.
The reader function may return pieces of any size greater than zero.



#### lua_register
                                                                  *lua_register*
                                                                   [-0, +0, *e*]
```cpp
void lua_register (lua_State *L, const char *name, lua_CFunction f);
```

Sets the C function `f` as the new value of global `name`.
It is defined as a macro:

```lua
     #define lua_register(L,n,f) \
            (lua_pushcfunction(L, f), lua_setglobal(L, n))
```



#### lua_remove
                                                                    *lua_remove*
                                                                     [-1, +0, -]
```cpp
void lua_remove (lua_State *L, int index);
```

Removes the element at the given valid index,
shifting down the elements above this index to fill the gap.
This function cannot be called with a pseudo-index,
because a pseudo-index is not an actual stack position.



#### lua_replace
                                                                   *lua_replace*
                                                                     [-1, +0, -]
```cpp
void lua_replace (lua_State *L, int index);
```

Moves the top element into the given valid index
without shifting any element
(therefore replacing the value at that given index),
and then pops the top element.



#### lua_resume
                                                                    *lua_resume*
                                                                     [-?, +?, -]
```cpp
int lua_resume (lua_State *L, lua_State *from, int nargs);
```

Starts and resumes a coroutine in the given thread `L`.


To start a coroutine,
you push onto the thread stack the main function plus any arguments;
then you call  [lua_resume],
with `nargs` being the number of arguments.
This call returns when the coroutine suspends or finishes its execution.
When it returns, the stack contains all values passed to  [lua_yield],
or all values returned by the body function.
 [lua_resume] returns
 [LUA_YIELD] if the coroutine yields,
 [LUA_OK] if the coroutine finishes its execution
without errors,
or an error code in case of errors (see  [lua_pcall]).


In case of errors,
the stack is not unwound,
so you can use the debug API over it.
The error object is on the top of the stack.


To resume a coroutine,
you remove any results from the last  [lua_yield],
put on its stack only the values to
be passed as results from `yield`,
and then call  [lua_resume].


The parameter `from` represents the coroutine that is resuming `L`.
If there is no such coroutine,
this parameter can be `NULL`.



#### lua_rotate
                                                                    *lua_rotate*
                                                                     [-0, +0, -]
```cpp
void lua_rotate (lua_State *L, int idx, int n);
```

Rotates the stack elements between the valid index `idx`
and the top of the stack.
The elements are rotated `n` positions in the direction of the top,
for a positive `n`,
or `-n` positions in the direction of the bottom,
for a negative `n`.
The absolute value of `n` must not be greater than the size
of the slice being rotated.
This function cannot be called with a pseudo-index,
because a pseudo-index is not an actual stack position.



#### lua_setallocf
                                                                 *lua_setallocf*
                                                                     [-0, +0, -]
```cpp
void lua_setallocf (lua_State *L, lua_Alloc f, void *ud);
```

Changes the allocator function of a given state to `f`
with user data `ud`.



#### lua_setfield
                                                                  *lua_setfield*
                                                                   [-1, +0, *e*]
```cpp
void lua_setfield (lua_State *L, int index, const char *k);
```

Does the equivalent to `t[k] = v`,
where `t` is the value at the given index
and `v` is the value at the top of the stack.


This function pops the value from the stack.
As in Lua, this function may trigger a metamethod
for the "newindex" event (see  [§2.4]).



#### lua_setglobal
                                                                 *lua_setglobal*
                                                                   [-1, +0, *e*]
```cpp
void lua_setglobal (lua_State *L, const char *name);
```

Pops a value from the stack and
sets it as the new value of global `name`.



#### lua_seti
                                                                      *lua_seti*
                                                                   [-1, +0, *e*]
```cpp
void lua_seti (lua_State *L, int index, lua_Integer n);
```

Does the equivalent to `t[n] = v`,
where `t` is the value at the given index
and `v` is the value at the top of the stack.


This function pops the value from the stack.
As in Lua, this function may trigger a metamethod
for the "newindex" event (see  [§2.4]).



#### lua_setmetatable
                                                              *lua_setmetatable*
                                                                     [-1, +0, -]
```cpp
void lua_setmetatable (lua_State *L, int index);
```

Pops a table from the stack and
sets it as the new metatable for the value at the given index.



#### lua_settable
                                                                  *lua_settable*
                                                                   [-2, +0, *e*]
```cpp
void lua_settable (lua_State *L, int index);
```

Does the equivalent to `t[k] = v`,
where `t` is the value at the given index,
`v` is the value at the top of the stack,
and `k` is the value just below the top.


This function pops both the key and the value from the stack.
As in Lua, this function may trigger a metamethod
for the "newindex" event (see  [§2.4]).



#### lua_settop
                                                                    *lua_settop*
                                                                     [-?, +?, -]
```cpp
void lua_settop (lua_State *L, int index);
```

Accepts any index, or 0,
and sets the stack top to this index.
If the new top is larger than the old one,
then the new elements are filled with nil.
If `index` is 0, then all stack elements are removed.



#### lua_setuservalue
                                                              *lua_setuservalue*
                                                                     [-1, +0, -]
```cpp
void lua_setuservalue (lua_State *L, int index);
```

Pops a value from the stack and sets it as
the new value associated to the full userdata at the given index.



#### lua_State
                                                                     *lua_State*
```cpp
typedef struct lua_State lua_State;
```

An opaque structure that points to a thread and indirectly
(through the thread) to the whole state of a Lua interpreter.
The Lua library is fully reentrant:
it has no global variables.
All information about a state is accessible through this structure.


A pointer to this structure must be passed as the first argument to
every function in the library, except to  [lua_newstate],
which creates a Lua state from scratch.



#### lua_status
                                                                    *lua_status*
                                                                     [-0, +0, -]
```cpp
int lua_status (lua_State *L);
```

Returns the status of the thread `L`.


The status can be 0 ( [LUA_OK]) for a normal thread,
an error code if the thread finished the execution
of a  [lua_resume] with an error,
or *LUA_YIELD* if the thread is suspended.


You can only call functions in threads with status  [LUA_OK].
You can resume threads with status  [LUA_OK]
(to start a new coroutine) or  [LUA_YIELD]
(to resume a coroutine).



#### lua_stringtonumber
                                                            *lua_stringtonumber*
                                                                     [-0, +1, -]
```cpp
size_t lua_stringtonumber (lua_State *L, const char *s);
```

Converts the zero-terminated string `s` to a number,
pushes that number into the stack,
and returns the total size of the string,
that is, its length plus one.
The conversion can result in an integer or a float,
according to the lexical conventions of Lua (see  [§3.1]).
The string may have leading and trailing spaces and a sign.
If the string is not a valid numeral,
returns 0 and pushes nothing.
(Note that the result can be used as a boolean,
true if the conversion succeeds.)



#### lua_toboolean
                                                                 *lua_toboolean*
                                                                     [-0, +0, -]
```cpp
int lua_toboolean (lua_State *L, int index);
```

Converts the Lua value at the given index to a C boolean value (0 or 1).
Like all tests in Lua, [lua_toboolean] returns true for any Lua value
different from false and nil; otherwise it returns false.
(If you want to accept only actual boolean values,
use  [lua_isboolean] to test the value's type.)



#### lua_tocfunction
                                                               *lua_tocfunction*
                                                                     [-0, +0, -]
```cpp
lua_CFunction lua_tocfunction (lua_State *L, int index);
 ```

Converts a value at the given index to a C function.
That value must be a C function;
otherwise, returns `NULL`.



#### lua_tointeger
                                                                 *lua_tointeger*
                                                                     [-0, +0, -]
```cpp
lua_Integer lua_tointeger (lua_State *L, int index);
```

Equivalent to  [lua_tointegerx] with `isnum` equal to `NULL`.



#### lua_tointegerx
                                                                *lua_tointegerx*
                                                                     [-0, +0, -]
```cpp
lua_Integer lua_tointegerx (lua_State *L, int index, int *isnum);
```

Converts the Lua value at the given index
to the signed integral type  [lua_Integer].
The Lua value must be an integer,
or a number or string convertible to an integer (see  [§3.4.3]);
otherwise, `lua_tointegerx` returns 0.


If `isnum` is not `NULL`,
its referent is assigned a boolean value that
indicates whether the operation succeeded.



#### lua_tolstring
                                                                 *lua_tolstring*
                                                                   [-0, +0, *m*]
```cpp
const char *lua_tolstring (lua_State *L, int index, size_t *len);
```

Converts the Lua value at the given index to a C string.
If `len` is not `NULL`,
it sets `*len` with the string length.
The Lua value must be a string or a number;
otherwise, the function returns `NULL`.
If the value is a number,
then `lua_tolstring` also
*changes the actual value in the stack to a string*.
(This change confuses  [lua_next]
when `lua_tolstring` is applied to keys during a table traversal.)


`lua_tolstring` returns a pointer
to a string inside the Lua state.
This string always has a zero (`'\0'`)
after its last character (as in C),
but can contain other zeros in its body.


Because Lua has garbage collection,
there is no guarantee that the pointer returned by `lua_tolstring`
will be valid after the corresponding Lua value is removed from the stack.



#### lua_tonumber
                                                                  *lua_tonumber*
                                                                     [-0, +0, -]
```lua
lua_Number lua_tonumber (lua_State *L, int index);
```

Equivalent to  [lua_tonumberx] with `isnum` equal to `NULL`.



#### lua_tonumberx
                                                                 *lua_tonumberx*
                                                                     [-0, +0, -]
```lua
lua_Number lua_tonumberx (lua_State *L, int index, int *isnum);
```

Converts the Lua value at the given index
to the C type  [lua_Number] (see  [lua_Number]).
The Lua value must be a number or a string convertible to a number
(see  [§3.4.3]);
otherwise,  [lua_tonumberx] returns 0.


If `isnum` is not `NULL`,
its referent is assigned a boolean value that
indicates whether the operation succeeded.



#### lua_topointer
                                                                 *lua_topointer*
                                                                     [-0, +0, -]
```cpp
const void *lua_topointer (lua_State *L, int index);
```

Converts the value at the given index to a generic
C pointer (`void*`).
The value can be a userdata, a table, a thread, or a function;
otherwise, `lua_topointer` returns `NULL`.
Different objects will give different pointers.
There is no way to convert the pointer back to its original value.


Typically this function is used only for hashing and debug information.



#### lua_tostring
                                                                  *lua_tostring*
                                                                   [-0, +0, *m*]
```cpp
const char *lua_tostring (lua_State *L, int index);
```

Equivalent to  [lua_tolstring] with `len` equal to `NULL`.



#### lua_tothread
                                                                  *lua_tothread*
                                                                     [-0, +0, -]
```cpp
lua_State *lua_tothread (lua_State *L, int index);
```

Converts the value at the given index to a Lua thread
(represented as `lua_State*`).
This value must be a thread;
otherwise, the function returns `NULL`.



#### lua_touserdata
                                                                *lua_touserdata*
                                                                     [-0, +0, -]
```cpp
void *lua_touserdata (lua_State *L, int index);
```

If the value at the given index is a full userdata,
returns its block address.
If the value is a light userdata,
returns its pointer.
Otherwise, returns `NULL`.



#### lua_type
                                                                      *lua_type*
                                                                     [-0, +0, -]
```cpp
int lua_type (lua_State *L, int index);
```

Returns the type of the value in the given valid index,
or `LUA_TNONE` for a non-valid (but acceptable) index.
The types returned by  [lua_type] are coded by the following constants
defined in `lua.h`:
*LUA_TNIL* (0),
*LUA_TNUMBER*,
*LUA_TBOOLEAN*,
*LUA_TSTRING*,
*LUA_TTABLE*,
*LUA_TFUNCTION*,
*LUA_TUSERDATA*,
*LUA_TTHREAD*,
and
*LUA_TLIGHTUSERDATA*.



#### lua_typename
                                                                  *lua_typename*
                                                                     [-0, +0, -]
```cpp
const char *lua_typename (lua_State *L, int tp);
```

Returns the name of the type encoded by the value `tp`,
which must be one the values returned by  [lua_type].



#### lua_Unsigned
                                                                  *lua_Unsigned*
```cpp
typedef ... lua_Unsigned;
```

The unsigned version of  [lua_Integer].



#### lua_upvalueindex
                                                              *lua_upvalueindex*
                                                                     [-0, +0, -]
```cpp
int lua_upvalueindex (int i);
```

Returns the pseudo-index that represents the `i`-th upvalue of
the running function (see  [§4.4]).



#### lua_version
                                                                   *lua_version*
                                                                     [-0, +0, -]
```cpp
const lua_Number *lua_version (lua_State *L);
```

Returns the address of the version number
(a C static variable)
stored in the Lua core.
When called with a valid  [lua_State],
returns the address of the version used to create that state.
When called with `NULL`,
returns the address of the version running the call.



#### lua_Writer
                                                                    *lua_Writer*
```cpp
typedef int (*lua_Writer) (lua_State *L,
                           const void* p,
                           size_t sz,
                           void* ud);
```

The type of the writer function used by  [lua_dump].
Every time it produces another piece of chunk,
 [lua_dump] calls the writer,
passing along the buffer to be written (`p`),
its size (`sz`),
and the `data` parameter supplied to  [lua_dump].


The writer returns an error code:
0 means no errors;
any other value means an error and stops  [lua_dump] from
calling the writer again.



#### lua_xmove
                                                                     *lua_xmove*
                                                                     [-?, +?, -]
```cpp
void lua_xmove (lua_State *from, lua_State *to, int n);
```

Exchange values between different threads of the same state.


This function pops `n` values from the stack `from`,
and pushes them onto the stack `to`.



#### lua_yield
                                                                     *lua_yield*
                                                                   [-?, +?, *e*]
```cpp
int lua_yield (lua_State *L, int nresults);
```

This function is equivalent to  [lua_yieldk],
but it has no continuation (see  [§4.7]).
Therefore, when the thread resumes,
it continues the function that called
the function calling `lua_yield`.



#### lua_yieldk
                                                                    *lua_yieldk*
                                                                   [-?, +?, *e*]
```cpp
int lua_yieldk (lua_State *L,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

Yields a coroutine (thread).


When a C function calls  [lua_yieldk],
the running coroutine suspends its execution,
and the call to  [lua_resume] that started this coroutine returns.
The parameter `nresults` is the number of values from the stack
that will be passed as results to  [lua_resume].


When the coroutine is resumed again,
Lua calls the given continuation function `k` to continue
the execution of the C function that yielded (see  [§4.7]).
This continuation function receives the same stack
from the previous function,
with the `n` results removed and
replaced by the arguments passed to  [lua_resume].
Moreover,
the continuation function receives the value `ctx`
that was passed to  [lua_yieldk].


Usually, this function does not return;
when the coroutine eventually resumes,
it continues executing the continuation function.
However, there is one special case,
which is when this function is called
from inside a line or a count hook (see  [§4.9]).
In that case, `lua_yieldk` should be called with no continuation
(probably in the form of  [lua_yield]) and no results,
and the hook should return immediately after the call.
Lua will yield and,
when the coroutine resumes again,
it will continue the normal execution
of the (Lua) function that triggered the hook.


This function can raise an error if it is called from a thread
with a pending C call with no continuation function,
or it is called from a thread that is not running inside a resume
(e.g., the main thread).





### ⛏ 4.9 -  The Debug Interface
                                                       [contents] [index] *§4.9*
Lua has no built-in debugging facilities. Instead, it offers a special interface
by means of functions and *hooks*.
This interface allows the construction of different
kinds of debuggers, profilers, and other tools
that need "inside information" from the interpreter.


#### lua_Debug
                                                                     *lua_Debug*
```cpp
typedef struct lua_Debug {
  int event;
  const char *name;           /* (n) */
  const char *namewhat;       /* (n) */
  const char *what;           /* (S) */
  const char *source;         /* (S) */
  int currentline;            /* (l) */
  int linedefined;            /* (S) */
  int lastlinedefined;        /* (S) */
  unsigned char nups;         /* (u) number of upvalues */
  unsigned char nparams;      /* (u) number of parameters */
  char isvararg;              /* (u) */
  char istailcall;            /* (t) */
  char short_src[LUA_IDSIZE]; /* (S) */
  /* private part */
  /* other fields */
} lua_Debug;
```

A structure used to carry different pieces of information about a function or an 
activation record. [lua_getstack] fills only the private part of this structure, 
for later use. To fill the other fields of  [lua_Debug] with useful information,
call  [lua_getinfo].


The fields of  [lua_Debug] have the following meaning:


⛏ `source`: 
    the name of the chunk that created the function.
    If `source` starts with a `'@`',
    it means that the function was defined in a file where
    the file name follows the `'@'`.
    If `source` starts with a `'=`',
    the remainder of its contents describe the source in a user-dependent manner.
    Otherwise,
    the function was defined in a string where
    `source` is that string.

⛏ `short_src`: 
    a "printable" version of `source`, to be used in error messages.

⛏ `linedefined`: 
    the line number where the definition of the function starts.

⛏ `lastlinedefined`: 
    the line number where the definition of the function ends.

⛏ `what`: 
    the string `"Lua"` if the function is a Lua function,
    `"C"` if it is a C function,
    `"main"` if it is the main part of a chunk.

⛏ `currentline`: 
    the current line where the given function is executing.
    When no line information is available,
    `currentline` is set to -1.

⛏ `name`: 
    a reasonable name for the given function.
    Because functions in Lua are first-class values,
    they do not have a fixed name:
    some functions can be the value of multiple global variables,
    while others can be stored only in a table field.
    The `lua_getinfo` function checks how the function was
    called to find a suitable name.
    If it cannot find a name,
    then `name` is set to `NULL`.

⛏ `namewhat`: 
    explains the `name` field.
    The value of `namewhat` can be
    `"global"`, `"local"`, `"method"`,
    `"field"`, `"upvalue"`, or `""` (the empty string),
    according to how the function was called.
    (Lua uses the empty string when no other option seems to apply.)

⛏ `istailcall`: 
    true if this function invocation was called by a tail call.
    In this case, the caller of this level is not in the stack.

⛏ `nups`: 
    the number of upvalues of the function.

⛏ `nparams`: 
    the number of fixed parameters of the function
    (always 0 for C functions).

⛏ `isvararg`: 
    true if the function is a vararg function
    (always true for C functions).


#### lua_gethook
                                                                   *lua_gethook*
                                                                     [-0, +0, -]
```cpp
lua_Hook lua_gethook (lua_State *L);
```

Returns the current hook function.



#### lua_gethookcount
                                                              *lua_gethookcount*
                                                                     [-0, +0, -]
```cpp
int lua_gethookcount (lua_State *L);
```

Returns the current hook count.



#### lua_gethookmask
                                                               *lua_gethookmask*
                                                                     [-0, +0, -]
```cpp
int lua_gethookmask (lua_State *L);
```

Returns the current hook mask.



#### lua_getinfo
                                                                   *lua_getinfo*
                                                        [-(0|1), +(0|1|2), *e*]
```cpp
int lua_getinfo (lua_State *L, const char *what, lua_Debug *ar);
```

Gets information about a specific function or function invocation.


To get information about a function invocation,
the parameter `ar` must be a valid activation record that was
filled by a previous call to  [lua_getstack] or
given as argument to a hook (see  [lua_Hook]).


To get information about a function, you push it onto the stack
and start the `what` string with the character `'>'`.
(In that case, `lua_getinfo` pops the function from the top of the stack.)
For instance, to know in which line a function `f` was defined,
you can write the following code:

```cpp
    lua_Debug ar
    lua_getglobal(L, "f");  /* get global 'f' */
    lua_getinfo(L, ">S", &ar);
    printf("%d\n", ar.linedefined);
```


Each character in the string `what` selects some fields of the structure `ar` 
to be filled or a value to be pushed on the stack:


⛏ `'n'`:  fills in the field `name` and `namewhat`;

⛏ `'S'`: fills in the fields `source`, `short_src`, `linedefined`, 
    `lastlinedefined`, and `what`;

⛏ `'l'`:  fills in the field `currentline`;

⛏ `'t'`:  fills in the field `istailcall`;

⛏ `'u'`:  fills in the fields `nups`, `nparams`, and `isvararg`;

⛏ `'f'`:  pushes onto the stack the function that is running at the given level;

⛏ `'L'`: pushes onto the stack a table whose indices are the numbers of the lines
    that are valid on the function. (A *valid line* is a line with some associated 
    code, that is, a line where you can put a break point. Non-valid lines include 
    empty lines and comments.)

    If this option is given together with option `'f`', its table is pushed after the function.



This function returns 0 on error (for instance, an invalid option in `what`).



#### lua_getlocal
                                                                  *lua_getlocal*
                                                                 [-0, +(0|1), -]
```cpp
const char *lua_getlocal (lua_State *L, const lua_Debug *ar, int n);
```

Gets information about a local variable of
a given activation record or a given function.


In the first case,
the parameter `ar` must be a valid activation record that was
filled by a previous call to  [lua_getstack] or
given as argument to a hook (see  [lua_Hook]).
The index `n` selects which local variable to inspect;
see  [debug.getlocal] for details about variable indices
and names.




 [lua_getlocal] pushes the variable's value onto the stack
 and returns its name.


In the second case, `ar` must be `NULL` and the function
to be inspected must be at the top of the stack.
In this case, only parameters of Lua functions are visible
(as there is no information about what variables are active)
and no values are pushed onto the stack.


Returns `NULL` (and pushes nothing)
when the index is greater than
the number of active local variables.



#### lua_getstack
                                                                  *lua_getstack*
                                                                     [-0, +0, -]
```cpp
int lua_getstack (lua_State *L, int level, lua_Debug *ar);
```

Gets information about the interpreter runtime stack.


This function fills parts of a  [lua_Debug] structure with
an identification of the *activation record*
of the function executing at a given level.
Level 0 is the current running function,
whereas level *n+1* is the function that has called level *n*
(except for tail calls, which do not count on the stack).
When there are no errors,  [lua_getstack] returns 1;
when called with a level greater than the stack depth,
it returns 0.



#### lua_getupvalue
                                                                *lua_getupvalue*
                                                                 [-0, +(0|1), -]
```cpp
const char *lua_getupvalue (lua_State *L, int funcindex, int n);
```

Gets information about the `n`-th upvalue
of the closure at index `funcindex`.
It pushes the upvalue's value onto the stack
and returns its name.
Returns `NULL` (and pushes nothing)
when the index `n` is greater than the number of upvalues.


For C functions, this function uses the empty string `""`
as a name for all upvalues.
(For Lua functions,
upvalues are the external local variables that the function uses,
and that are consequently included in its closure.)


Upvalues have no particular order,
as they are active through the whole function.
They are numbered in an arbitrary order.



#### lua_Hook
                                                                      *lua_Hook*
```cpp
typedef void (*lua_Hook) (lua_State *L, lua_Debug *ar);
```

Type for debugging hook functions.


Whenever a hook is called, its `ar` argument has its field
`event` set to the specific event that triggered the hook.
Lua identifies these events with the following constants:
*LUA_HOOKCALL*, *LUA_HOOKRET*,
*LUA_HOOKTAILCALL*, *LUA_HOOKLINE*,
and *LUA_HOOKCOUNT*.
Moreover, for line events, the field `currentline` is also set.
To get the value of any other field in `ar`,
the hook must call  [lua_getinfo].


For call events, `event` can be `LUA_HOOKCALL`,
the normal value, or `LUA_HOOKTAILCALL`, for a tail call;
in this case, there will be no corresponding return event.


While Lua is running a hook, it disables other calls to hooks.
Therefore, if a hook calls back Lua to execute a function or a chunk,
this execution occurs without any calls to hooks.


Hook functions cannot have continuations,
that is, they cannot call  [lua_yieldk],


 [lua_pcallk], or  [lua_callk] with a non-null `k`.


 Hook functions can yield under the following conditions:
Only count and line events can yield;
to yield, a hook function must finish its execution
calling  [lua_yield] with `nresults` equal to zero
(that is, with no values).



#### lua_sethook
                                                                   *lua_sethook*
                                                                     [-0, +0, -]
```cpp
void lua_sethook (lua_State *L, lua_Hook f, int mask, int count);
```

Sets the debugging hook function.


Argument `f` is the hook function.
`mask` specifies on which events the hook will be called:
it is formed by a bitwise OR of the constants
*LUA_MASKCALL*,
*LUA_MASKRET*,
*LUA_MASKLINE*,
and *LUA_MASKCOUNT*.

The `count` argument is only meaningful when the mask includes `LUA_MASKCOUNT`.
For each event, the hook is called as explained below:


⛏ The call hook:  is called when the interpreter calls a function.
    The hook is called just after Lua enters the new function,
    before the function gets its arguments.

⛏ The return hook:  is called when the interpreter returns from a function.
    The hook is called just before Lua leaves the function.
    There is no standard way to access the values
    to be returned by the function.

⛏ The line hook:  is called when the interpreter is about to
    start the execution of a new line of code,
    or when it jumps back in the code (even to the same line).
    (This event only happens while Lua is executing a Lua function.)

⛏ The count hook:  is called after the interpreter executes every
    `count` instructions.
    (This event only happens while Lua is executing a Lua function.)


A hook is disabled by setting `mask` to zero.



#### lua_setlocal
                                                                  *lua_setlocal*
                                                                 [-(0|1), +0, -]
```cpp
const char *lua_setlocal (lua_State *L, const lua_Debug *ar, int n);
```

Sets the value of a local variable of a given activation record.
It assigns the value at the top of the stack
to the variable and returns its name.
It also pops the value from the stack.


Returns `NULL` (and pops nothing) when the index is greater than
the number of active local variables.


Parameters `ar` and `n` are as in function  [lua_getlocal].



#### lua_setupvalue
                                                                *lua_setupvalue*
                                                                 [-(0|1), +0, -]
```cpp
const char *lua_setupvalue (lua_State *L, int funcindex, int n);
```

Sets the value of a closure's upvalue.
It assigns the value at the top of the stack
to the upvalue and returns its name.
It also pops the value from the stack.


Returns `NULL` (and pops nothing)
when the index `n` is greater than the number of upvalues.


Parameters `funcindex` and `n` are as in function  [lua_getupvalue].



#### lua_upvalueid
                                                                 *lua_upvalueid*
                                                                     [-0, +0, -]
```cpp
void *lua_upvalueid (lua_State *L, int funcindex, int n);
```

Returns a unique identifier for the upvalue numbered `n`
from the closure at index `funcindex`.


These unique identifiers allow a program to check whether different
closures share upvalues.
Lua closures that share an upvalue
(that is, that access a same external local variable)
will return identical ids for those upvalue indices.


Parameters `funcindex` and `n` are as in function  [lua_getupvalue],
but `n` cannot be greater than the number of upvalues.



#### lua_upvaluejoin
                                                               *lua_upvaluejoin*
                                                                     [-0, +0, -]
```cpp
void lua_upvaluejoin (lua_State *L, int funcindex1, int n1,
                                    int funcindex2, int n2);
```

Make the `n1`-th upvalue of the Lua closure at index `funcindex1`
refer to the `n2`-th upvalue of the Lua closure at index `funcindex2`.


## ⚡ 5 -  The Auxiliary Library
                                                        [contents] [index] *ch5*
The *auxiliary library* provides several convenient functions
to interface C with Lua.
While the basic API provides the primitive functions for all
interactions between C and Lua,
the auxiliary library provides higher-level functions for some
common tasks.


All functions and types from the auxiliary library
are defined in header file `lauxlib.h` and
have a prefix `luaL_`.


All functions in the auxiliary library are built on
top of the basic API,
and so they provide nothing that cannot be done with that API.
Nevertheless, the use of the auxiliary library ensures
more consistency to your code.


Several functions in the auxiliary library use internally some
extra stack slots.
When a function in the auxiliary library uses less than five slots,
it does not check the stack size;
it simply assumes that there are enough slots.


Several functions in the auxiliary library are used to
check C function arguments.
Because the error message is formatted for arguments
(e.g., `"bad argument #1"`),
you should not use these functions for other stack values.


Functions called `luaL_check*`
always raise an error if the check is not satisfied.


### ⛏ 5.1 -  Functions and Types
                                                       [contents] [index] *§5.1*
Here we list all functions and types from the auxiliary library
in alphabetical order.


#### luaL_addchar
                                                                  *luaL_addchar*
                                                                   [-?, +?, *m*]
```cpp
void luaL_addchar (luaL_Buffer *B, char c);
```

Adds the byte `c` to the buffer `B`
(see  [luaL_Buffer]).



#### luaL_addlstring
                                                               *luaL_addlstring*
                                                                   [-?, +?, *m*]
```cpp
void luaL_addlstring (luaL_Buffer *B, const char *s, size_t l);
```

Adds the string pointed to by `s` with length `l` to
the buffer `B`
(see  [luaL_Buffer]).
The string can contain embedded zeros.



#### luaL_addsize
                                                                  *luaL_addsize*
                                                                     [-?, +?, -]
```cpp
void luaL_addsize (luaL_Buffer *B, size_t n);
```

Adds to the buffer `B` (see  [luaL_Buffer])
a string of length `n` previously copied to the
buffer area (see  [luaL_prepbuffer]).



#### luaL_addstring
                                                                *luaL_addstring*
                                                                   [-?, +?, *m*]
```cpp
void luaL_addstring (luaL_Buffer *B, const char *s);
```

Adds the zero-terminated string pointed to by `s`
to the buffer `B`
(see  [luaL_Buffer]).



#### luaL_addvalue
                                                                 *luaL_addvalue*
                                                                   [-1, +?, *m*]
```cpp
void luaL_addvalue (luaL_Buffer *B);
```

Adds the value at the top of the stack
to the buffer `B`
(see  [luaL_Buffer]).
Pops the value.


This is the only function on string buffers that can (and must)
be called with an extra element on the stack,
which is the value to be added to the buffer.



#### luaL_argcheck
                                                                 *luaL_argcheck*
                                                                   [-0, +0, *v*]
```cpp
void luaL_argcheck (lua_State *L,
                    int cond,
                    int arg,
                    const char *extramsg);
```

Checks whether `cond` is true.
If it is not, raises an error with a standard message (see  [luaL_argerror]).



#### luaL_argerror
                                                                 *luaL_argerror*
                                                                   [-0, +0, *v*]
```cpp
int luaL_argerror (lua_State *L, int arg, const char *extramsg);
```

Raises an error reporting a problem with argument `arg`
of the C function that called it,
using a standard message
that includes `extramsg` as a comment:

```lua
     bad argument #*arg* to '*funcname*' (*extramsg*)
```

This function never returns.



#### luaL_Buffer
                                                                   *luaL_Buffer*
```cpp
typedef struct luaL_Buffer luaL_Buffer;
```

Type for a *string buffer*.


A string buffer allows C code to build Lua strings piecemeal.
Its pattern of use is as follows:


⛏ First declare a variable `b` of type  [luaL_Buffer].
⛏ Then initialize it with a call `luaL_buffinit(L, &b)`.
⛏ Then add string pieces to the buffer calling any of the `luaL_add*` functions.

⛏ Finish by calling `luaL_pushresult(&b)`. This call leaves the final string 
    on the top of the stack.

If you know beforehand the total size of the resulting string, you can use the 
buffer like this:


⛏ First declare a variable `b` of type  [luaL_Buffer].
⛏ Then initialize it and preallocate a space of size `sz` with a call
    `luaL_buffinitsize(L, &b, sz)`.
⛏ Then copy the string into that space.
⛏ Finish by calling `luaL_pushresultsize(&b, sz)`, where `sz` is the total size 
    of the resulting string copied into that space.


During its normal operation, a string buffer uses a variable number of stack slots.
So, while using a buffer, you cannot assume that you know where the top of the stack is.
You can use the stack between successive calls to buffer operations as long as 
that use is balanced; that is, when you call a buffer operation, the stack is at 
the same level it was immediately after the previous buffer operation.
(The only exception to this rule is  [luaL_addvalue].)
After calling  [luaL_pushresult] the stack is back to its level when the buffer 
was initialized, plus the final string on its top.



#### luaL_buffinit
                                                                 *luaL_buffinit*
                                                                     [-0, +0, -]
```cpp
void luaL_buffinit (lua_State *L, luaL_Buffer *B);
```

Initializes a buffer `B`.
This function does not allocate any space;
the buffer must be declared as a variable
(see  [luaL_Buffer]).



#### luaL_buffinitsize
                                                             *luaL_buffinitsize*
                                                                   [-?, +?, *m*]
```cpp
char *luaL_buffinitsize (lua_State *L, luaL_Buffer *B, size_t sz);
```

Equivalent to the sequence


 [luaL_buffinit],  [luaL_prepbuffsize].



#### luaL_callmeta
                                                                 *luaL_callmeta*
                                                               [-0, +(0|1), *e*]
```cpp
int luaL_callmeta (lua_State *L, int obj, const char *e);
```

Calls a metamethod.


If the object at index `obj` has a metatable and this
metatable has a field `e`,
this function calls this field passing the object as its only argument.
In this case this function returns true and pushes onto the
stack the value returned by the call.
If there is no metatable or no metamethod,
this function returns false (without pushing any value on the stack).



#### luaL_checkany
                                                                 *luaL_checkany*
                                                                   [-0, +0, *v*]
```cpp
void luaL_checkany (lua_State *L, int arg);
```

Checks whether the function has an argument
of any type (including nil) at position `arg`.



#### luaL_checkinteger
                                                             *luaL_checkinteger*
                                                                   [-0, +0, *v*]
```cpp
lua_Integer luaL_checkinteger (lua_State *L, int arg);
```

Checks whether the function argument `arg` is an integer
(or can be converted to an integer)
and returns this integer cast to a  [lua_Integer].



#### luaL_checklstring
                                                             *luaL_checklstring*
                                                                   [-0, +0, *v*]
```cpp
const char *luaL_checklstring (lua_State *L, int arg, size_t *l);
```

Checks whether the function argument `arg` is a string
and returns this string;
if `l` is not `NULL` fills `*l`
with the string's length.


This function uses  [lua_tolstring] to get its result,
so all conversions and caveats of that function apply here.



#### luaL_checknumber
                                                              *luaL_checknumber*
                                                                   [-0, +0, *v*]
```lua
lua_Number luaL_checknumber (lua_State *L, int arg);
```

Checks whether the function argument `arg` is a number
and returns this number.



#### luaL_checkoption
                                                              *luaL_checkoption*
                                                                   [-0, +0, *v*]
```cpp
int luaL_checkoption (lua_State *L,
                      int arg,
                      const char *def,
                      const char *const lst[]);
```

Checks whether the function argument `arg` is a string and
searches for this string in the array `lst`
(which must be NULL-terminated).
Returns the index in the array where the string was found.
Raises an error if the argument is not a string or
if the string cannot be found.


If `def` is not `NULL`,
the function uses `def` as a default value when
there is no argument `arg` or when this argument is nil.


This is a useful function for mapping strings to C enums.
(The usual convention in Lua libraries is
to use strings instead of numbers to select options.)



#### luaL_checkstack
                                                               *luaL_checkstack*
                                                                   [-0, +0, *v*]
```cpp
void luaL_checkstack (lua_State *L, int sz, const char *msg);
```

Grows the stack size to `top + sz` elements,
raising an error if the stack cannot grow to that size.
`msg` is an additional text to go into the error message
(or `NULL` for no additional text).



#### luaL_checkstring
                                                              *luaL_checkstring*
                                                                   [-0, +0, *v*]
```cpp
const char *luaL_checkstring (lua_State *L, int arg);
```

Checks whether the function argument `arg` is a string
and returns this string.


This function uses  [lua_tolstring] to get its result,
so all conversions and caveats of that function apply here.



#### luaL_checktype
                                                                *luaL_checktype*
                                                                   [-0, +0, *v*]
```cpp
void luaL_checktype (lua_State *L, int arg, int t);
```

Checks whether the function argument `arg` has type `t`.
See  [lua_type] for the encoding of types for `t`.



#### luaL_checkudata
                                                               *luaL_checkudata*
                                                                   [-0, +0, *v*]
```cpp
void *luaL_checkudata (lua_State *L, int arg, const char *tname);
```

Checks whether the function argument `arg` is a userdata
of the type `tname` (see  [luaL_newmetatable]) and
returns the userdata address (see  [lua_touserdata]).



#### luaL_checkversion
                                                             *luaL_checkversion*
                                                                   [-0, +0, *v*]
```cpp
void luaL_checkversion (lua_State *L);
```

Checks whether the core running the call,
the core that created the Lua state,
and the code making the call are all using the same version of Lua.
Also checks whether the core running the call
and the core that created the Lua state
are using the same address space.



#### luaL_dofile
                                                                   *luaL_dofile*
                                                                   [-0, +?, *e*]
```cpp
int luaL_dofile (lua_State *L, const char *filename);
```

Loads and runs the given file.
It is defined as the following macro:

```lua
     (luaL_loadfile(L, filename) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

It returns false if there are no errors
or true in case of errors.



#### luaL_dostring
                                                                 *luaL_dostring*
                                                                     [-0, +?, -]
```cpp
int luaL_dostring (lua_State *L, const char *str);
```

Loads and runs the given string.
It is defined as the following macro:

```lua
     (luaL_loadstring(L, str) || lua_pcall(L, 0, LUA_MULTRET, 0))
```

It returns false if there are no errors
or true in case of errors.



#### luaL_error
                                                                    *luaL_error*
                                                                   [-0, +0, *v*]
```cpp
int luaL_error (lua_State *L, const char *fmt, ...);
```

Raises an error.
The error message format is given by `fmt`
plus any extra arguments,
following the same rules of  [lua_pushfstring].
It also adds at the beginning of the message the file name and
the line number where the error occurred,
if this information is available.


This function never returns,
but it is an idiom to use it in C functions
as `return luaL_error(*args*)`.



#### luaL_execresult
                                                               *luaL_execresult*
                                                                   [-0, +3, *m*]
```cpp
int luaL_execresult (lua_State *L, int stat);
```

This function produces the return values for
process-related functions in the standard library
( |os.execute| and  [io.close]).



#### luaL_fileresult
                                                               *luaL_fileresult*
                                                               [-0, +(1|3), *m*]
```cpp
int luaL_fileresult (lua_State *L, int stat, const char *fname);
```

This function produces the return values for
file-related functions in the standard library
( |io.open|,  [os.rename],  [file:seek], etc.).



#### luaL_getmetafield
                                                             *luaL_getmetafield*
                                                               [-0, +(0|1), *m*]
```cpp
int luaL_getmetafield (lua_State *L, int obj, const char *e);
```

Pushes onto the stack the field `e` from the metatable
of the object at index `obj` and returns the type of the pushed value.
If the object does not have a metatable,
or if the metatable does not have this field,
pushes nothing and returns `LUA_TNIL`.



#### luaL_getmetatable
                                                             *luaL_getmetatable*
                                                                   [-0, +1, *m*]
```cpp
int luaL_getmetatable (lua_State *L, const char *tname);
```

Pushes onto the stack the metatable associated with name `tname`
in the registry (see  [luaL_newmetatable])
(nil if there is no metatable associated with that name).
Returns the type of the pushed value.



#### luaL_getsubtable
                                                              *luaL_getsubtable*
                                                                   [-0, +1, *e*]
```cpp
int luaL_getsubtable (lua_State *L, int idx, const char *fname);
```

Ensures that the value `t[fname]`,
where `t` is the value at index `idx`,
is a table,
and pushes that table onto the stack.
Returns true if it finds a previous table there
and false if it creates a new table.



#### luaL_gsub
                                                                     *luaL_gsub*
                                                                   [-0, +1, *m*]
```cpp
const char *luaL_gsub (lua_State *L,
                       const char *s,
                       const char *p,
                       const char *r);
```

Creates a copy of string `s` by replacing
any occurrence of the string `p`
with the string `r`.
Pushes the resulting string on the stack and returns it.



#### luaL_len
                                                                      *luaL_len*
                                                                   [-0, +0, *e*]
```cpp
lua_Integer luaL_len (lua_State *L, int index);
```

Returns the "length" of the value at the given index
as a number;
it is equivalent to the `'#'` operator in Lua (see  [§3.4.7]).
Raises an error if the result of the operation is not an integer.
(This case only can happen through metamethods.)



#### luaL_loadbuffer
                                                               *luaL_loadbuffer*
                                                                     [-0, +1, -]
```cpp
int luaL_loadbuffer (lua_State *L,
                     const char *buff,
                     size_t sz,
                     const char *name);
```

Equivalent to  [luaL_loadbufferx] with `mode` equal to `NULL`.



#### luaL_loadbufferx
                                                              *luaL_loadbufferx*
                                                                     [-0, +1, -]
```cpp
int luaL_loadbufferx (lua_State *L,
                      const char *buff,
                      size_t sz,
                      const char *name,
                      const char *mode);
```

Loads a buffer as a Lua chunk.
This function uses  [lua_load] to load the chunk in the
buffer pointed to by `buff` with size `sz`.


This function returns the same results as  [lua_load].
`name` is the chunk name,
used for debug information and error messages.
The string `mode` works as in function  [lua_load].



#### luaL_loadfile
                                                                 *luaL_loadfile*
                                                                   [-0, +1, *m*]
```cpp
int luaL_loadfile (lua_State *L, const char *filename);
```

Equivalent to  [luaL_loadfilex] with `mode` equal to `NULL`.



#### luaL_loadfilex
                                                                *luaL_loadfilex*
                                                                   [-0, +1, *m*]
```cpp
int luaL_loadfilex (lua_State *L, const char *filename,
                                            const char *mode);
```

Loads a file as a Lua chunk.
This function uses  [lua_load] to load the chunk in the file
named `filename`.
If `filename` is `NULL`,
then it loads from the standard input.
The first line in the file is ignored if it starts with a `#`.


The string `mode` works as in function  [lua_load].


This function returns the same results as  [lua_load],
but it has an extra error code *LUA_ERRFILE*
for file-related errors
(e.g., it cannot open or read the file).


As  [lua_load], this function only loads the chunk;
it does not run it.



#### luaL_loadstring
                                                               *luaL_loadstring*
                                                                     [-0, +1, -]
```cpp
int luaL_loadstring (lua_State *L, const char *s);
```

Loads a string as a Lua chunk.
This function uses  [lua_load] to load the chunk in
the zero-terminated string `s`.


This function returns the same results as  [lua_load].


Also as  [lua_load], this function only loads the chunk;
it does not run it.



#### luaL_newlib
                                                                   *luaL_newlib*
                                                                   [-0, +1, *m*]
```cpp
void luaL_newlib (lua_State *L, const luaL_Reg l[]);
```

Creates a new table and registers there
the functions in list `l`.


It is implemented as the following macro:

```lua
     (luaL_newlibtable(L,l), luaL_setfuncs(L,l,0))
```

The array `l` must be the actual array,
not a pointer to it.



#### luaL_newlibtable
                                                              *luaL_newlibtable*
                                                                   [-0, +1, *m*]
```cpp
void luaL_newlibtable (lua_State *L, const luaL_Reg l[]);
```

Creates a new table with a size optimized
to store all entries in the array `l`
(but does not actually store them).
It is intended to be used in conjunction with  [luaL_setfuncs]
(see  [luaL_newlib]).


It is implemented as a macro.
The array `l` must be the actual array,
not a pointer to it.



#### luaL_newmetatable
                                                             *luaL_newmetatable*
                                                                   [-0, +1, *m*]
```cpp
int luaL_newmetatable (lua_State *L, const char *tname);
```

If the registry already has the key `tname`,
returns 0.
Otherwise,
creates a new table to be used as a metatable for userdata,
adds to this new table the pair `__name = tname`,
adds to the registry the pair `[tname] = new table`,
and returns 1.
(The entry `__name` is used by some error-reporting functions.)


In both cases pushes onto the stack the final value associated
with `tname` in the registry.



#### luaL_newstate
                                                                 *luaL_newstate*
                                                                     [-0, +0, -]
```cpp
lua_State *luaL_newstate (void);
```

Creates a new Lua state.
It calls  [lua_newstate] with an
allocator based on the standard C `realloc` function
and then sets a panic function (see  [§4.6]) that prints
an error message to the standard error output in case of fatal
errors.


Returns the new state,
or `NULL` if there is a memory allocation error.



#### luaL_openlibs
                                                                 *luaL_openlibs*
                                                                   [-0, +0, *e*]
```cpp
void luaL_openlibs (lua_State *L);
```

Opens all standard Lua libraries into the given state.



#### luaL_opt
                                                                      *luaL_opt*
                                                                   [-0, +0, *e*]
```lua
T luaL_opt (L, func, arg, dflt);
```

This macro is defined as follows:

```lua
     (lua_isnoneornil(L,(arg)) ? (dflt) : func(L,(arg)))
```

In words, if the argument `arg` is nil or absent,
the macro results in the default `dflt`.
Otherwise, it results in the result of calling `func`
with the state `L` and the argument index `arg` as
arguments.
Note that it evaluates the expression `dflt` only if needed.



#### luaL_optinteger
                                                               *luaL_optinteger*
                                                                   [-0, +0, *v*]
```cpp
lua_Integer luaL_optinteger (lua_State *L,
                             int arg,
                             lua_Integer d);
```

If the function argument `arg` is an integer
(or convertible to an integer),
returns this integer.
If this argument is absent or is nil,
returns `d`.
Otherwise, raises an error.



#### luaL_optlstring
                                                               *luaL_optlstring*
                                                                   [-0, +0, *v*]
```cpp
const char *luaL_optlstring (lua_State *L,
                             int arg,
                             const char *d,
                             size_t *l);
```

If the function argument `arg` is a string,
returns this string.
If this argument is absent or is nil,
returns `d`.
Otherwise, raises an error.


If `l` is not `NULL`,
fills the position `*l` with the result's length.
If the result is `NULL`
(only possible when returning `d` and `d == NULL`),
its length is considered zero.


This function uses  [lua_tolstring] to get its result,
so all conversions and caveats of that function apply here.



#### luaL_optnumber
                                                                *luaL_optnumber*
                                                                   [-0, +0, *v*]
```lua
lua_Number luaL_optnumber (lua_State *L, int arg, lua_Number d);
```

If the function argument `arg` is a number,
returns this number.
If this argument is absent or is nil,
returns `d`.
Otherwise, raises an error.



#### luaL_optstring
                                                                *luaL_optstring*
                                                                   [-0, +0, *v*]
```cpp
const char *luaL_optstring (lua_State *L,
                            int arg,
                            const char *d);
```

If the function argument `arg` is a string, returns this string. If this 
argument is absent or is nil, returns `d`. Otherwise, raises an error.



#### luaL_prepbuffer
                                                               *luaL_prepbuffer*
                                                                   [-?, +?, *m*]
```cpp
char *luaL_prepbuffer (luaL_Buffer *B);
```

Equivalent to  [luaL_prepbuffsize] with the predefined size *LUAL_BUFFERSIZE*.



#### luaL_prepbuffsize
                                                             *luaL_prepbuffsize*
                                                                   [-?, +?, *m*]
```cpp
char *luaL_prepbuffsize (luaL_Buffer *B, size_t sz);
```

Returns an address to a space of size `sz`
where you can copy a string to be added to buffer `B`
(see  [luaL_Buffer]).
After copying the string into this space you must call
 [luaL_addsize] with the size of the string to actually add
it to the buffer.



#### luaL_pushresult
                                                               *luaL_pushresult*
                                                                   [-?, +1, *m*]
```cpp
void luaL_pushresult (luaL_Buffer *B);
```

Finishes the use of buffer `B` leaving the final string on
the top of the stack.



#### luaL_pushresultsize
                                                           *luaL_pushresultsize*
                                                                   [-?, +1, *m*]
```cpp
void luaL_pushresultsize (luaL_Buffer *B, size_t sz);
```

Equivalent to the sequence  [luaL_addsize],  [luaL_pushresult].



#### luaL_ref
                                                                      *luaL_ref*
                                                                   [-1, +0, *m*]
```cpp
int luaL_ref (lua_State *L, int t);
```

Creates and returns a *reference*,
in the table at index `t`,
for the object at the top of the stack (and pops the object).


A reference is a unique integer key.
As long as you do not manually add integer keys into table `t`,
 [luaL_ref] ensures the uniqueness of the key it returns.
You can retrieve an object referred by reference `r`
by calling `lua_rawgeti(L, t, r)`.
Function  [luaL_unref] frees a reference and its associated object.


If the object at the top of the stack is nil,
 [luaL_ref] returns the constant *LUA_REFNIL*.
The constant *LUA_NOREF* is guaranteed to be different
from any reference returned by  [luaL_ref].



#### luaL_Reg
                                                                      *luaL_Reg*
```cpp
typedef struct luaL_Reg {
  const char *name;
  lua_CFunction func;
} luaL_Reg;
```

Type for arrays of functions to be registered by [luaL_setfuncs].
`name` is the function name and `func` is a pointer to the function.
Any array of  [luaL_Reg] must end with a sentinel entry
in which both `name` and `func` are `NULL`.



#### luaL_requiref
                                                                 *luaL_requiref*
                                                                   [-0, +1, *e*]
```cpp
void luaL_requiref (lua_State *L, const char *modname,
                    lua_CFunction openf, int glb);
```

If `modname` is not already present in  [package.loaded],
calls function `openf` with string `modname` as an argument
and sets the call result in `package.loaded[modname]`,
as if that function has been called through  [require].


If `glb` is true,
also stores the module into global `modname`.


Leaves a copy of the module on the stack.



#### luaL_setfuncs
                                                                 *luaL_setfuncs*
                                                                 [-nup, +0, *m*]
```cpp
void luaL_setfuncs (lua_State *L, const luaL_Reg *l, int nup);
```

Registers all functions in the array `l`
(see  [luaL_Reg]) into the table on the top of the stack
(below optional upvalues, see next).


When `nup` is not zero,
all functions are created sharing `nup` upvalues,
which must be previously pushed on the stack
on top of the library table.
These values are popped from the stack after the registration.



#### luaL_setmetatable
                                                             *luaL_setmetatable*
                                                                     [-0, +0, -]
```cpp
void luaL_setmetatable (lua_State *L, const char *tname);
```

Sets the metatable of the object at the top of the stack
as the metatable associated with name `tname`
in the registry (see  [luaL_newmetatable]).



#### luaL_Stream
                                                                   *luaL_Stream*
```cpp
typedef struct luaL_Stream {
  FILE *f;
  lua_CFunction closef;
} luaL_Stream;
```

The standard representation for file handles,
which is used by the standard I/O library.


A file handle is implemented as a full userdata,
with a metatable called `LUA_FILEHANDLE`
(where `LUA_FILEHANDLE` is a macro with the actual metatable's name).
The metatable is created by the I/O library
(see  [luaL_newmetatable]).


This userdata must start with the structure `luaL_Stream`;
it can contain other data after this initial structure.
Field `f` points to the corresponding C stream
(or it can be `NULL` to indicate an incompletely created handle).
Field `closef` points to a Lua function
that will be called to close the stream
when the handle is closed or collected;
this function receives the file handle as its sole argument and
must return either true (in case of success)
or nil plus an error message (in case of error).
Once Lua calls this field,
it changes the field value to `NULL`
to signal that the handle is closed.



#### luaL_testudata
                                                                *luaL_testudata*
                                                                   [-0, +0, *m*]
```cpp
void *luaL_testudata (lua_State *L, int arg, const char *tname);
```

This function works like  [luaL_checkudata],
except that, when the test fails,
it returns `NULL` instead of raising an error.



#### luaL_tolstring
                                                                *luaL_tolstring*
                                                                   [-0, +1, *e*]
```cpp
const char *luaL_tolstring (lua_State *L, int idx, size_t *len);
```

Converts any Lua value at the given index to a C string
in a reasonable format.
The resulting string is pushed onto the stack and also
returned by the function.
If `len` is not `NULL`,
the function also sets `*len` with the string length.


If the value has a metatable with a `__tostring` field,
then `luaL_tolstring` calls the corresponding metamethod
with the value as argument,
and uses the result of the call as its result.



#### luaL_traceback
                                                                *luaL_traceback*
                                                                   [-0, +1, *m*]
```cpp
void luaL_traceback (lua_State *L, lua_State *L1, const char *msg,
                     int level);
```

Creates and pushes a traceback of the stack `L1`.
If `msg` is not `NULL` it is appended
at the beginning of the traceback.
The `level` parameter tells at which level
to start the traceback.



#### luaL_typename
                                                                 *luaL_typename*
                                                                     [-0, +0, -]
```cpp
const char *luaL_typename (lua_State *L, int index);
```

Returns the name of the type of the value at the given index.



#### luaL_unref
                                                                    *luaL_unref*
                                                                     [-0, +0, -]
```cpp
void luaL_unref (lua_State *L, int t, int ref);
```

Releases reference `ref` from the table at index `t`
(see  [luaL_ref]).
The entry is removed from the table,
so that the referred object can be collected.
The reference `ref` is also freed to be used again.


If `ref` is  [LUA_NOREF] or  [LUA_REFNIL], [luaL_unref] does nothing.



#### luaL_where
                                                                    *luaL_where*
                                                                   [-0, +1, *m*]
```cpp
void luaL_where (lua_State *L, int lvl);
```

Pushes onto the stack a string identifying the current position
of the control at level `lvl` in the call stack.
Typically this string has the following format:

```lua
     *chunkname*:*currentline*:
```

Level 0 is the running function,
level 1 is the function that called the running function,
etc.


This function is used to build a prefix for error messages.





## ⚡ 6 -  Standard Libraries
                                                        [contents] [index] *ch6*
The standard Lua libraries provide useful functions
that are implemented directly through the C API.
Some of these functions provide essential services to the language
(e.g.,  [type] and  [getmetatable]);
others provide access to "outside" services (e.g., I/O);
and others could be implemented in Lua itself,
but are quite useful or have critical performance requirements that
deserve an implementation in C (e.g.,  [table.sort]).


All libraries are implemented through the official C API
and are provided as separate C modules.
Currently, Lua has the following standard libraries:


⛏ basic library ( [§6.1]);
⛏ coroutine library ( [§6.2]);
⛏ package library ( [§6.3]);
⛏ string manipulation ( [§6.4]);
⛏ basic UTF-8 support ( [§6.5]);
⛏ table manipulation ( [§6.6]);
⛏ mathematical functions ( [§6.7]) (sin, log, etc.);
⛏ input and output ( [§6.8]);
⛏ operating system facilities ( [§6.9]);
⛏ debug facilities ( [§6.10]).

Except for the basic and the package libraries,
each library provides all its functions as fields of a global table
or as methods of its objects.


To have access to these libraries,
the C host program should call the  [luaL_openlibs] function,
which opens all standard libraries.
Alternatively,
the host program can open them individually by using
 [luaL_requiref] to call
*luaopen_base* (for the basic library),
*luaopen_package* (for the package library),
*luaopen_coroutine* (for the coroutine library),
*luaopen_string* (for the string library),
*luaopen_utf8* (for the UTF8 library),
*luaopen_table* (for the table library),
*luaopen_math* (for the mathematical library),
*luaopen_io* (for the I/O library),
*luaopen_os* (for the operating system library),
and *luaopen_debug* (for the debug library).
These functions are declared in *lualib.h*.


### ⛏ 6.1 -  Basic Functions
                                                       [contents] [index] *§6.1*
The basic library provides core functions to Lua.
If you do not include this library in your application,
you should check carefully whether you need to provide
implementations for some of its facilities.


#### assert (v [, message])
                                                                        *assert*

Calls  [error] if
the value of its argument `v` is false (i.e., nil or false);
otherwise, returns all its arguments.
In case of error,
`message` is the error object;
when absent, it defaults to `"assertion failed!`"



#### collectgarbage ([opt [, arg]])
                                                                *collectgarbage*

This function is a generic interface to the garbage collector.
It performs different functions according to its first argument, `opt`:


⛏ `"collect"`: 
    performs a full garbage-collection cycle.
    This is the default option.

⛏ `"stop"`: 
    stops automatic execution of the garbage collector.
    The collector will run only when explicitly invoked,
    until a call to restart it.

⛏ `"restart"`: 
    restarts automatic execution of the garbage collector.

⛏ `"count"`: 
    returns the total memory in use by Lua in Kbytes.
    The value has a fractional part,
    so that it multiplied by 1024
    gives the exact number of bytes in use by Lua
    (except for overflows).

⛏ `"step"`: 
    performs a garbage-collection step.
    The step "size" is controlled by `arg`.
    With a zero value,
    the collector will perform one basic (indivisible) step.
    For non-zero values,
    the collector will perform as if that amount of memory
    (in KBytes) had been allocated by Lua.
    Returns true if the step finished a collection cycle.

⛏ `"setpause"`: 
    sets `arg` as the new value for the *pause* of
    the collector (see  [§2.5]).
    Returns the previous value for *pause*.

⛏ `"setstepmul"`: 
    sets `arg` as the new value for the *step multiplier* of
    the collector (see  [§2.5]).
    Returns the previous value for *step*.

⛏ `"isrunning"`: 
    returns a boolean that tells whether the collector is running
    (i.e., not stopped).


#### dofile ([filename])
                                                                        *dofile*
Opens the named file and executes its contents as a Lua chunk.
When called without arguments,
`dofile` executes the contents of the standard input (`stdin`).
Returns all values returned by the chunk.
In case of errors, `dofile` propagates the error
to its caller (that is, `dofile` does not run in protected mode).



#### error (message [, level])
                                                                         *error*
Terminates the last protected function called
and returns `message` as the error object.
Function `error` never returns.


Usually, `error` adds some information about the error position
at the beginning of the message, if the message is a string.
The `level` argument specifies how to get the error position.
With level 1 (the default), the error position is where the
`error` function was called.
Level 2 points the error to where the function
that called `error` was called; and so on.
Passing a level 0 avoids the addition of error position information
to the message.



#### `_G`
                                                                            *_G*

A global variable (not a function) that holds the global environment (see [§2.2]).
Lua itself does not use this variable; changing its value does not affect any 
environment, nor vice versa.



#### getmetatable (object)
                                                                  *getmetatable*

If `object` does not have a metatable, returns nil. Otherwise, if the object's 
metatable has a `__metatable` field, returns the associated value.
Otherwise, returns the metatable of the given object.



#### ipairs (t)
                                                                        *ipairs*
Returns three values (an iterator function, the table `t`, and 0)
so that the construction

```lua
     for i,v in ipairs(t) do body end
```

will iterate over the key-value pairs (`1,t[1]`), (`2,t[2]`), ...,
up to the first nil value.



#### load (chunk [, chunkname [, mode [, env]]])
                                                                          *load*

Loads a chunk.

If `chunk` is a string, the chunk is this string.
If `chunk` is a function, `load` calls it repeatedly to get the chunk pieces.
Each call to `chunk` must return a string that concatenates
with previous results.
A return of an empty string, nil, or no value signals the end of the chunk.


If there are no syntactic errors,
returns the compiled chunk as a function;
otherwise, returns nil plus the error message.


If the resulting function has upvalues,
the first upvalue is set to the value of `env`,
if that parameter is given,
or to the value of the global environment.
Other upvalues are initialized with nil.
(When you load a main chunk,
the resulting function will always have exactly one upvalue,
the `_ENV` variable (see  [§2.2]).
However,
when you load a binary chunk created from a function (see  [string.dump]),
the resulting function can have an arbitrary number of upvalues.)
All upvalues are fresh, that is,
they are not shared with any other function.


`chunkname` is used as the name of the chunk for error messages
and debug information (see  [§4.9]).
When absent,
it defaults to `chunk`, if `chunk` is a string,
or to `"=(load)"` otherwise.


The string `mode` controls whether the chunk can be text or binary
(that is, a precompiled chunk).
It may be the string `"b"` (only binary chunks), `"t"` (only text chunks),
or `"bt"` (both binary and text).
The default is `"bt`".


Lua does not check the consistency of binary chunks.
Maliciously crafted binary chunks can crash
the interpreter.



#### loadfile ([filename [, mode [, env]]])
                                                                      *loadfile*

Similar to  [load], but gets the chunk from file `filename`
or from the standard input, if no file name is given.



#### next (table [, index])
                                                                          *next*

Allows a program to traverse all fields of a table.
Its first argument is a table and its second argument
is an index in this table.
`next` returns the next index of the table and its associated value.
When called with nil as its second argument, `next` returns an initial index
and its associated value.
When called with the last index, or with nil in an empty table, `next` returns nil.
If the second argument is absent, then it is interpreted as nil.
In particular, you can use `next(t)` to check whether a table is empty.


The order in which the indices are enumerated is not specified,
*even for numeric indices*.
(To traverse a table in numerical order,
use a numerical for.)


The behavior of `next` is undefined if,
during the traversal,
you assign any value to a non-existent field in the table.
You may however modify existing fields.
In particular, you may clear existing fields.



#### pairs (t)
                                                                         *pairs*

If `t` has a metamethod `__pairs`,
calls it with `t` as argument and returns the first three results from the call.


Otherwise,
returns three values: the  [next] function, the table `t`, and nil,
so that the construction

```lua
     for k,v in pairs(t) do body end
```

will iterate over all key-value pairs of table `t`.


See function  [next] for the caveats of modifying
the table during its traversal.



#### pcall (f [, arg1, ···])
                                                                         *pcall*

Calls function `f` with the given arguments in *protected mode*.
This means that any error inside `f` is not propagated;
instead, `pcall` catches the error and returns a status code.
Its first result is the status code (a boolean),
which is true if the call succeeds without errors.
In such case, `pcall` also returns all results from the call,
after this first result.
In case of any error, `pcall` returns false plus the error message.



#### print (···)
                                                                         *print*
Receives any number of arguments and prints their values to `stdout`,
using the  [tostring] function to convert each argument to a string.
`print` is not intended for formatted output, but only as a quick way 
to show a value, for instance for debugging.
For complete control over the output, use  [string.format] and  [io.write].



#### rawequal (v1, v2)
                                                                      *rawequal*
Checks whether `v1` is equal to `v2`, without invoking the `__eq` metamethod.
Returns a boolean.



#### rawget (table, index)
                                                                        *rawget*
Gets the real value of `table[index]`, without invoking the `__index` metamethod.
`table` must be a table;
`index` may be any value.



#### rawlen (v)
                                                                        *rawlen*
Returns the length of the object `v`, which must be a table or a string,
without invoking the `__len` metamethod.
Returns an integer.



#### rawset (table, index, value)
                                                                        *rawset*
Sets the real value of `table[index]` to `value`,
without invoking the `__newindex` metamethod.
`table` must be a table,
`index` any value different from nil and NaN,
and `value` any Lua value.


This function returns `table`.



#### select (index, ···)
                                                                        *select*

If `index` is a number,
returns all arguments after argument number `index`;
a negative number indexes from the end (-1 is the last argument).
Otherwise, `index` must be the string `"#"`,
and `select` returns the total number of extra arguments it received.



#### setmetatable (table, metatable)
                                                                  *setmetatable*

Sets the metatable for the given table.
(To change the metatable of other types from Lua code,
you must use the debug library ( [§6.10]).)
If `metatable` is nil, removes the metatable of the given table.
If the original metatable has a `__metatable` field, raises an error.


This function returns `table`.



#### tonumber (e [, base])
                                                                      *tonumber*

When called with no `base`, `tonumber` tries to convert its argument to a number.
If the argument is already a number or a string convertible to a number,
then `tonumber` returns this number;
otherwise, it returns nil.


The conversion of strings can result in integers or floats,
according to the lexical conventions of Lua (see  [§3.1]).
(The string may have leading and trailing spaces and a sign.)


When called with `base`,
then `e` must be a string to be interpreted as
an integer numeral in that base.
The base may be any integer between 2 and 36, inclusive.
In bases above 10, the letter `'A'` (in either upper or lower case)
represents 10, `'B'` represents 11, and so forth,
with `'Z'` representing 35.
If the string `e` is not a valid numeral in the given base,
the function returns nil.



#### tostring (v)
                                                                      *tostring*
Receives a value of any type and
converts it to a string in a human-readable format.
(For complete control of how numbers are converted,
use  [string.format].)


If the metatable of `v` has a `__tostring` field,
then `tostring` calls the corresponding value
with `v` as argument,
and uses the result of the call as its result.



#### type (v)
                                                                          *type*
Returns the type of its only argument, coded as a string.
The possible results of this function are strings,
`"nil"` (a string, not the value nil),
`"number"`,
`"string"`,
`"boolean"`,
`"table"`,
`"function"`,
`"thread"`,
and `"userdata`".



#### `_VERSION`
                                                                      *_VERSION*

A global variable (not a function) that
holds a string containing the running Lua version.
The current value of this variable is `"Lua 5.3`".



#### xpcall (f, msgh [, arg1, ···])
                                                                        *xpcall*

This function is similar to [pcall],
except that it sets a new message handler `msgh`.





### ⛏ 6.2 -  Coroutine Manipulation
                                                       [contents] [index] *§6.2*
This library comprises the operations to manipulate coroutines,
which come inside the table *coroutine*.
See  [§2.6] for a general description of coroutines.


#### coroutine.create (f)
                                                              *coroutine.create*

Creates a new coroutine, with body `f`.
`f` must be a function.
Returns this new coroutine, an object with type `"thread"`.



#### coroutine.isyieldable ()
                                                         *coroutine.isyieldable*


Returns true when the running coroutine can yield.

A running coroutine is yieldable if it is not the main thread and
it is not inside a non-yieldable C function.



#### coroutine.resume (co [, val1, ···])
                                                              *coroutine.resume*

Starts or continues the execution of coroutine `co`.
The first time you resume a coroutine, it starts running its body.
The values `val1`, ... are passed as the arguments to the body function.
If the coroutine has yielded, `resume` restarts it;
the values `val1`, ... are passed as the results from the yield.


If the coroutine runs without any errors,
`resume` returns true plus any values passed to `yield`
(when the coroutine yields) or any values returned by the body function
(when the coroutine terminates).
If there is any error, `resume` returns false plus the error message.



#### coroutine.running ()
                                                             *coroutine.running*


Returns the running coroutine plus a boolean,
true when the running coroutine is the main one.



#### coroutine.status (co)
                                                              *coroutine.status*


Returns the status of coroutine `co`, as a string:
`"running"`, if the coroutine is running (that is, it called `status`);
`"suspended"`, if the coroutine is suspended in a call to `yield`,
or if it has not started running yet;
`"normal"` if the coroutine is active but not running
(that is, it has resumed another coroutine);
and `"dead"` if the coroutine has finished its body function,
or if it has stopped with an error.



#### coroutine.wrap (f)
                                                                *coroutine.wrap*

Creates a new coroutine, with body `f`.
`f` must be a function.
Returns a function that resumes the coroutine each time it is called.
Any arguments passed to the function behave as the
extra arguments to `resume`.
Returns the same values returned by `resume`,
except the first boolean.
In case of error, propagates the error.



#### coroutine.yield (···)
                                                               *coroutine.yield*

Suspends the execution of the calling coroutine.
Any arguments to `yield` are passed as extra results to `resume`.





### ⛏ 6.3 -  Modules
                                                       [contents] [index] *§6.3*
The package library provides basic facilities for loading modules in Lua.
It exports one function directly in the global environment: [require].
Everything else is exported in a table *package*.


#### require (modname)
                                                                       *require*

Loads the given module.
The function starts by looking into the  [package.loaded] table
to determine whether `modname` is already loaded.
If it is, then `require` returns the value stored
at `package.loaded[modname]`.
Otherwise, it tries to find a *loader* for the module.


To find a loader,
`require` is guided by the  [package.searchers] sequence.
By changing this sequence,
we can change how `require` looks for a module.
The following explanation is based on the default configuration
for  [package.searchers].


First `require` queries `package.preload[modname]`.
If it has a value, this value (which must be a function) is the loader.
Otherwise `require` searches for a Lua loader using the
path stored in  [package.path].
If that also fails, it searches for a C loader using the
path stored in  [package.cpath].
If that also fails,
it tries an *all-in-one* loader (see  [package.searchers]).


Once a loader is found,
`require` calls the loader with two arguments:
`modname` and an extra value dependent on how it got the loader.
(If the loader came from a file,
this extra value is the file name.)
If the loader returns any non-nil value,
`require` assigns the returned value to `package.loaded[modname]`.
If the loader does not return a non-nil value and
has not assigned any value to `package.loaded[modname]`,
then `require` assigns true to this entry.
In any case, `require` returns the
final value of `package.loaded[modname]`.


If there is any error loading or running the module,
or if it cannot find any loader for the module,
then `require` raises an error.



#### package.config
                                                                *package.config*

A string describing some compile-time configurations for packages.
This string is a sequence of lines:


⛏ The first line is the directory separator string.
    Default is `'\'` for Windows and `'/'` for all other systems.

⛏ The second line is the character that separates templates in a path.
    Default is `';'`.

⛏ The third line is the string that marks the
    substitution points in a template.
    Default is `'?'`.

⛏ The fourth line is a string that, in a path in Windows,
    is replaced by the executable's directory.
    Default is `'!'`.

⛏ The fifth line is a mark to ignore all text after it
    when building the `luaopen_` function name.
    Default is `'-'`.


#### package.cpath
                                                                 *package.cpath*

The path used by  [require] to search for a C loader.

Lua initializes the C path  [package.cpath] in the same way
it initializes the Lua path  [package.path],
using the environment variable *LUA_CPATH_5_3*,
or the environment variable *LUA_CPATH*,
or a default path defined in `luaconf.h`.



#### package.loaded
                                                                *package.loaded*

A table used by  [require] to control which
modules are already loaded.
When you require a module `modname` and
`package.loaded[modname]` is not false,
 [require] simply returns the value stored there.


 This variable is only a reference to the real table;
assignments to this variable do not change the
table used by  [require].



#### package.loadlib (libname, funcname)
                                                               *package.loadlib*

Dynamically links the host program with the C library `libname`.

If `funcname` is `"*"`,
then it only links with the library,
making the symbols exported by the library
available to other dynamically linked libraries.
Otherwise,
it looks for a function `funcname` inside the library
and returns this function as a C function.
So, `funcname` must follow the  [lua_CFunction] prototype
(see  [lua_CFunction]).


This is a low-level function.
It completely bypasses the package and module system.
Unlike  [require],
it does not perform any path searching and
does not automatically adds extensions.
`libname` must be the complete file name of the C library,
including if necessary a path and an extension.
`funcname` must be the exact name exported by the C library
(which may depend on the C compiler and linker used).


This function is not supported by Standard C.
As such, it is only available on some platforms
(Windows, Linux, Mac OS X, Solaris, BSD,
plus other Unix systems that support the `dlfcn` standard).



#### package.path
                                                                  *package.path*

The path used by  [require] to search for a Lua loader.

At start-up, Lua initializes this variable with
the value of the environment variable *LUA_PATH_5_3* or
the environment variable *LUA_PATH* or
with a default path defined in `luaconf.h`,
if those environment variables are not defined.
Any `";;"` in the value of the environment variable
is replaced by the default path.



#### package.preload
                                                               *package.preload*

A table to store loaders for specific modules
(see  [require]).


This variable is only a reference to the real table;
assignments to this variable do not change the
table used by  [require].



#### package.searchers
                                                             *package.searchers*

A table used by  [require] to control how to load modules.

Each entry in this table is a *searcher function*.
When looking for a module,
 [require] calls each of these searchers in ascending order,
with the module name (the argument given to  [require]) as its
sole parameter.
The function can return another function (the module *loader*)
plus an extra value that will be passed to that loader,
or a string explaining why it did not find that module
(or nil if it has nothing to say).


Lua initializes this table with four searcher functions.


The first searcher simply looks for a loader in the
 [package.preload] table.


 The second searcher looks for a loader as a Lua library,
using the path stored at  [package.path].
The search is done as described in function  [package.searchpath].


The third searcher looks for a loader as a C library,
using the path given by the variable  [package.cpath].
Again,
the search is done as described in function  [package.searchpath].
For instance,
if the C path is the string

```lua
     "./?.so;./?.dll;/usr/local/?/init.so"
```

the searcher for module `foo`
will try to open the files `./foo.so`, `./foo.dll`,
and `/usr/local/foo/init.so`, in that order.
Once it finds a C library,
this searcher first uses a dynamic link facility to link the
application with the library.
Then it tries to find a C function inside the library to
be used as the loader.
The name of this C function is the string `"luaopen_`"
concatenated with a copy of the module name where each dot
is replaced by an underscore.
Moreover, if the module name has a hyphen,
its suffix after (and including) the first hyphen is removed.
For instance, if the module name is `a.b.c-v2.1`,
the function name will be `luaopen_a_b_c`.


The fourth searcher tries an *all-in-one loader*.
It searches the C path for a library for
the root name of the given module.
For instance, when requiring `a.b.c`,
it will search for a C library for `a`.
If found, it looks into it for an open function for
the submodule;
in our example, that would be `luaopen_a_b_c`.
With this facility, a package can pack several C submodules
into one single library,
with each submodule keeping its original open function.


All searchers except the first one (preload) return as the extra value
the file name where the module was found,
as returned by  [package.searchpath].
The first searcher returns no extra value.



#### package.searchpath (name, path [, sep [, rep]])
                                                            *package.searchpath*

Searches for the given `name` in the given `path`.

A path is a string containing a sequence of
*templates* separated by semicolons.
For each template,
the function replaces each interrogation mark (if any)
in the template with a copy of `name`
wherein all occurrences of `sep`
(a dot, by default)
were replaced by `rep`
(the system's directory separator, by default),
and then tries to open the resulting file name.


For instance, if the path is the string

```lua
     "./?.lua;./?.lc;/usr/local/?/init.lua"
```

the search for the name `foo.a`
will try to open the files
`./foo/a.lua`, `./foo/a.lc`, and
`/usr/local/foo/a/init.lua`, in that order.


Returns the resulting name of the first file that it can
open in read mode (after closing the file),
or nil plus an error message if none succeeds.
(This error message lists all file names it tried to open.)





### ⛏ 6.4 -  String Manipulation
                                                       [contents] [index] *§6.4*
This library provides generic functions for string manipulation,
such as finding and extracting substrings, and pattern matching.
When indexing a string in Lua, the first character is at position 1
(not at 0, as in C).
Indices are allowed to be negative and are interpreted as indexing backwards,
from the end of the string.
Thus, the last character is at position -1, and so on.


The string library provides all its functions inside the table
*string*.
It also sets a metatable for strings
where the `__index` field points to the `string` table.
Therefore, you can use the string functions in object-oriented style.
For instance, `string.byte(s,i)`
can be written as `s:byte(i)`.


The string library assumes one-byte character encodings.


#### string.byte (s [, i [, j]])
                                                                   *string.byte*
Returns the internal numeric codes of the characters `s[i]`,
`s[i+1]`, ..., `s[j]`.
The default value for `i` is 1;
the default value for `j` is `i`.
These indices are corrected
following the same rules of function  [string.sub].


Numeric codes are not necessarily portable across platforms.



#### string.char (···)
                                                                   *string.char*
Receives zero or more integers.
Returns a string with length equal to the number of arguments,
in which each character has the internal numeric code equal
to its corresponding argument.


Numeric codes are not necessarily portable across platforms.



#### string.dump (function [, strip])
                                                                   *string.dump*
Returns a string containing a binary representation (a *binary chunk*)
of the given function, so that a later  [load] on this string returns
a copy of the function (but with new upvalues).
If `strip` is a true value,
the binary representation may not include all debug information
about the function, to save space.


Functions with upvalues have only their number of upvalues saved.
When (re)loaded,
those upvalues receive fresh instances containing nil.
(You can use the debug library to serialize
and reload the upvalues of a function
in a way adequate to your needs.)



#### string.find (s, pattern [, init [, plain]])
                                                                   *string.find*

Looks for the first match of
`pattern` (see  [§6.4.1]) in the string `s`.
If it finds a match, then `find` returns the indices of `s`
where this occurrence starts and ends;
otherwise, it returns nil.
A third, optional numeric argument `init` specifies
where to start the search;
its default value is 1 and can be negative.
A value of true as a fourth, optional argument `plain`
turns off the pattern matching facilities,
so the function does a plain "find substring" operation,
with no characters in `pattern` being considered magic.
Note that if `plain` is given, then `init` must be given as well.


If the pattern has captures,
then in a successful match
the captured values are also returned,
after the two indices.



#### string.format (formatstring, ···)
                                                                 *string.format*


Returns a formatted version of its variable number of arguments
following the description given in its first argument (which must be a string).
The format string follows the same rules as the ISO C function `sprintf`.
The only differences are that the options/modifiers
`*`, `h`, `L`, `l`, `n`,
and `p` are not supported
and that there is an extra option, `q`.


The `q` option formats a string between double quotes,
using escape sequences when necessary to ensure that
it can safely be read back by the Lua interpreter.
For instance, the call

```lua
     string.format('%q', 'a string with "quotes" and \n new line')
```

may produce the string:

```lua
     "a string with \"quotes\" and \
      new line"
```


Options
`A`, `a`, `E`, `e`, `f`,
`G`, and `g` all expect a number as argument.
Options `c`, `d`,
`i`, `o`, `u`, `X`, and `x`
expect an integer.
When Lua is compiled with a C89 compiler,
options `A` and `a` (hexadecimal floats)
do not support any modifier (flags, width, length).


Option `s` expects a string;
if its argument is not a string,
it is converted to one following the same rules of  [tostring].
If the option has any modifier (flags, width, length),
the string argument should not contain embedded zeros.



#### string.gmatch (s, pattern)
                                                                 *string.gmatch*
Returns an iterator function that,
each time it is called,
returns the next captures from `pattern` (see  [§6.4.1])
over the string `s`.
If `pattern` specifies no captures,
then the whole match is produced in each call.


As an example, the following loop
will iterate over all the words from string `s`,
printing one per line:

```lua
     s = "hello world from Lua"
     for w in string.gmatch(s, "%a+") do
       print(w)
     end
```

The next example collects all pairs `key=value` from the
given string into a table:

```lua
     t = {}
     s = "from=world, to=Lua"
     for k, v in string.gmatch(s, "(%w+)=(%w+)") do
       t[k] = v
     end
```


For this function, a caret `'^'` at the start of a pattern does not
work as an anchor, as this would prevent the iteration.



#### string.gsub (s, pattern, repl [, n])
                                                                   *string.gsub*
Returns a copy of `s` in which all (or the first `n`, if given)
occurrences of the `pattern` (see  [§6.4.1]) have been
replaced by a replacement string specified by `repl`,
which can be a string, a table, or a function.
`gsub` also returns, as its second value,
the total number of matches that occurred.
The name `gsub` comes from *Global SUBstitution*.


If `repl` is a string, then its value is used for replacement.
The character `%` works as an escape character:
any sequence in `repl` of the form `%*d*`,
with *d* between 1 and 9,
stands for the value of the *d*-th captured substring.
The sequence `%0` stands for the whole match.
The sequence `%%` stands for a single `%`.


If `repl` is a table, then the table is queried for every match,
using the first capture as the key.


If `repl` is a function, then this function is called every time a
match occurs, with all captured substrings passed as arguments,
in order.


In any case,
if the pattern specifies no captures,
then it behaves as if the whole pattern was inside a capture.


If the value returned by the table query or by the function call
is a string or a number,
then it is used as the replacement string;
otherwise, if it is false or nil,
then there is no replacement
(that is, the original match is kept in the string).


Here are some examples:

```lua
     x = string.gsub("hello world", "(%w+)", "%1 %1")
     --> x="hello hello world world"
     
     x = string.gsub("hello world", "%w+", "%0 %0", 1)
     --> x="hello hello world"
     
     x = string.gsub("hello world from Lua", "(%w+)%s*(%w+)", "%2 %1")
     --> x="world hello Lua from"
     
     x = string.gsub("home = $HOME, user = $USER", "%$(%w+)", os.getenv)
     --> x="home = /home/roberto, user = roberto"
     
     x = string.gsub("4+5 = $return 4+5$", "%$(.-)%$", function (s)
           return load(s)()
         end)
     --> x="4+5 = 9"
     
     local t = {name="lua", version="5.3"}
     x = string.gsub("$name-$version.tar.gz", "%$(%w+)", t)
     --> x="lua-5.3.tar.gz"
```



#### string.len (s)
                                                                    *string.len*
Receives a string and returns its length.
The empty string `""` has length 0.
Embedded zeros are counted,
so `"a\000bc\000"` has length 5.



#### string.lower (s)
                                                                  *string.lower*
Receives a string and returns a copy of this string with all
uppercase letters changed to lowercase.
All other characters are left unchanged.
The definition of what an uppercase letter is depends on the current locale.



#### string.match (s, pattern [, init])
                                                                  *string.match*
Looks for the first *match* of
`pattern` (see  [§6.4.1]) in the string `s`.
If it finds one, then `match` returns
the captures from the pattern;
otherwise it returns nil.
If `pattern` specifies no captures,
then the whole match is returned.
A third, optional numeric argument `init` specifies
where to start the search;
its default value is 1 and can be negative.



#### string.pack (fmt, v1, v2, ···)
                                                                   *string.pack*
Returns a binary string containing the values `v1`, `v2`, etc.
packed (that is, serialized in binary form)
according to the format string `fmt` (see  [§6.4.2]).



#### string.packsize (fmt)
                                                               *string.packsize*


Returns the size of a string resulting from  [string.pack]
with the given format.
The format string cannot have the variable-length options
`'s'` or `'z'` (see  [§6.4.2]).



#### string.rep (s, n [, sep])
                                                                    *string.rep*
Returns a string that is the concatenation of `n` copies of
the string `s` separated by the string `sep`.
The default value for `sep` is the empty string
(that is, no separator).
Returns the empty string if `n` is not positive.


(Note that it is very easy to exhaust the memory of your machine
with a single call to this function.)



#### string.reverse (s)
                                                                *string.reverse*
Returns a string that is the string `s` reversed.



#### string.sub (s, i [, j])
                                                                    *string.sub*
Returns the substring of `s` that
starts at `i`  and continues until `j`;
`i` and `j` can be negative.
If `j` is absent, then it is assumed to be equal to -1
(which is the same as the string length).
In particular,
the call `string.sub(s,1,j)` returns a prefix of `s`
with length `j`,
and `string.sub(s, -i)` (for a positive `i`)
returns a suffix of `s`
with length `i`.


If, after the translation of negative indices,
`i` is less than 1,
it is corrected to 1.
If `j` is greater than the string length,
it is corrected to that length.
If, after these corrections,
`i` is greater than `j`,
the function returns the empty string.



#### string.unpack (fmt, s [, pos])
                                                                 *string.unpack*


Returns the values packed in string `s` (see  [string.pack])
according to the format string `fmt` (see  [§6.4.2]).
An optional `pos` marks where
to start reading in `s` (default is 1).
After the read values,
this function also returns the index of the first unread byte in `s`.



#### string.upper (s)
                                                                  *string.upper*
Receives a string and returns a copy of this string with all
lowercase letters changed to uppercase.
All other characters are left unchanged.
The definition of what a lowercase letter is depends on the current locale.



### ⛏ 6.4.1 - Patterns
                                                     [contents] [index] *§6.4.1*
Patterns in Lua are described by regular strings,
which are interpreted as patterns by the pattern-matching functions
 [string]find|,
 [string]gmatch|,
 [string]gsub|,
and  [string.match].
This section describes the syntax and the meaning
(that is, what they match) of these strings.


#### Character Class:

A *character class* is used to represent a set of characters.
The following combinations are allowed in describing a character class:


⛏ *x*: (where *x* is not one of the *magic characters* `^$()%.[]*+-?`)
    represents the character *x* itself.

⛏ `.`:  (a dot) represents all characters.
⛏ `%a`:  represents all letters.
⛏ `%c`:  represents all control characters.
⛏ `%d`:  represents all digits.
⛏ `%g`:  represents all printable characters except space.
⛏ `%l`:  represents all lowercase letters.
⛏ `%p`:  represents all punctuation characters.
⛏ `%s`:  represents all space characters.
⛏ `%u`:  represents all uppercase letters.
⛏ `%w`:  represents all alphanumeric characters.
⛏ `%x`:  represents all hexadecimal digits.
⛏ `%*x*`:  (where *x* is any non-alphanumeric character)
represents the character *x*.
This is the standard way to escape the magic characters.
Any non-alphanumeric character
(including all punctuation characters, even the non-magical)
can be preceded by a `'%`'
when used to represent itself in a pattern.

⛏ `[*set*]`: 
represents the class which is the union of all
characters in *set*.
A range of characters can be specified by
separating the end characters of the range,
in ascending order, with a `'-'`.
All classes `%`*x* described above can also be used as
components in *set*.
All other characters in *set* represent themselves.
For example, `[%w_]` (or `[_%w]`)
represents all alphanumeric characters plus the underscore,
`[0-7]` represents the octal digits,
and `[0-7%l%-]` represents the octal digits plus
the lowercase letters plus the `'-'` character.


You can put a closing square bracket in a set
by positioning it as the first character in the set.
You can put a hyphen in a set
by positioning it as the first or the last character in the set.
(You can also use an escape for both cases.)


The interaction between ranges and classes is not defined.
Therefore, patterns like `[%a-z]` or `[a-%%]`
have no meaning.

⛏ `[^*set*]`: 
represents the complement of *set*,
where *set* is interpreted as above.


For all classes represented by single letters (`%a`, `%c`, etc.),
the corresponding uppercase letter represents the complement of the class.
For instance, `%S` represents all non-space characters.


The definitions of letter, space, and other character groups
depend on the current locale.
In particular, the class `[a-z]` may not be equivalent to `%l`.




#### Pattern Item:

A *pattern item* can be


⛏ 
a single character class,
which matches any single character in the class;

⛏ 
a single character class followed by `'*`',
which matches zero or more repetitions of characters in the class.
These repetition items will always match the longest possible sequence;

⛏ 
a single character class followed by `'+`',
which matches one or more repetitions of characters in the class.
These repetition items will always match the longest possible sequence;

⛏ 
a single character class followed by `'-`',
which also matches zero or more repetitions of characters in the class.
Unlike `'*`',
these repetition items will always match the shortest possible sequence;

⛏ 
a single character class followed by `'?`',
which matches zero or one occurrence of a character in the class.
It always matches one occurrence if possible;

⛏ 
`%*n*`, for *n* between 1 and 9;
such item matches a substring equal to the *n*-th captured string
(see below);

⛏ 
`%b*xy*`, where *x* and *y* are two distinct characters;
such item matches strings that start with *x*, end with *y*,
and where the *x* and *y* are *balanced*.
This means that, if one reads the string from left to right,
counting *+1* for an *x* and *-1* for a *y*,
the ending *y* is the first *y* where the count reaches 0.
For instance, the item `%b()` matches expressions with
balanced parentheses.

⛏ 
`%f[*set*]`, a *frontier pattern*;
such item matches an empty string at any position such that
the next character belongs to *set*
and the previous character does not belong to *set*.
The set *set* is interpreted as previously described.
The beginning and the end of the subject are handled as if
they were the character `'\0'`.



#### Pattern:

A *pattern* is a sequence of pattern items.
A caret `'^'` at the beginning of a pattern anchors the match at the
beginning of the subject string.
A `'$'` at the end of a pattern anchors the match at the
end of the subject string.
At other positions,
`'^'` and `'$'` have no special meaning and represent themselves.




#### Captures:

A pattern can contain sub-patterns enclosed in parentheses;
they describe *captures*.
When a match succeeds, the substrings of the subject string
that match captures are stored (*captured*) for future use.
Captures are numbered according to their left parentheses.
For instance, in the pattern `"(a*(.)%w(%s*))"`,
the part of the string matching `"a*(.)%w(%s*)"` is
stored as the first capture (and therefore has number 1);
the character matching `"."` is captured with number 2,
and the part matching `"%s*"` has number 3.


As a special case, the empty capture `()` captures
the current string position (a number).
For instance, if we apply the pattern `"()aa()"` on the
string `"flaaap"`, there will be two captures: 3 and 5.





### ⛏ 6.4.2 - Format Strings for Pack and Unpack
                                                     [contents] [index] *§6.4.2*
The first argument to  [string.pack], [string.packsize], and  [string.unpack]
is a format string, which describes the layout of the structure being created 
or read.


A format string is a sequence of conversion options.
The conversion options are as follows:

⛏ `<`: sets little endian
⛏ `>`: sets big endian
⛏ `=`: sets native endian
⛏ `![*n*]`: sets maximum alignment to `n` (default is native alignment)
⛏ `b`: a signed byte (`char`)
⛏ `B`: an unsigned byte (`char`)
⛏ `h`: a signed `short` (native size)
⛏ `H`: an unsigned `short` (native size)
⛏ `l`: a signed `long` (native size)
⛏ `L`: an unsigned `long` (native size)
⛏ `j`: a `lua_Integer`
⛏ `J`: a `lua_Unsigned`
⛏ `T`: a `size_t` (native size)
⛏ `i[*n*]`: a signed `int` with `n` bytes (default is native size)
⛏ `I[*n*]`: an unsigned `int` with `n` bytes (default is native size)
⛏ `f`: a `float` (native size)
⛏ `d`: a `double` (native size)
⛏ `n`: a `lua_Number`
⛏ `c*n*`: a fixed-sized string with `n` bytes
⛏ `z`: a zero-terminated string
⛏ `s[*n*]`: a string preceded by its length coded as an unsigned integer 
    with `n` bytes (default is a `size_t`)
⛏ `x`: one byte of padding
⛏ `X*op*`: an empty item that aligns according to option `op` 
    (which is otherwise ignored)
⛏ `' '`: (empty space) ignored 

(A `"[n]"` means an optional integral numeral.)
Except for padding, spaces, and configurations (options `"xX <=>!"`),
each option corresponds to an argument (in  [string.pack])
or a result (in  [string.unpack]).


For options `"!n"`, `"sn"`, `"in"`, and `"In"`, `n` can be any integer between 
1 and 16. All integral options check overflows; [string.pack] checks whether 
the given value fits in the given size; [string.unpack] checks whether the read 
value fits in a Lua integer.


Any format string starts as if prefixed by `"!1="`, that is,
with maximum alignment of 1 (no alignment) and native endianness.


Alignment works as follows:
For each option,
the format gets extra padding until the data starts
at an offset that is a multiple of the minimum between the
option size and the maximum alignment;
this minimum must be a power of 2.
Options `"c"` and `"z"` are not aligned;
option `"s"` follows the alignment of its starting integer.


All padding is filled with zeros by  [string.pack]
(and ignored by  [string.unpack]).


### ⛏ 6.5 -  UTF-8 Support
                                                       [contents] [index] *§6.5*
This library provides basic support for UTF-8 encoding.
It provides all its functions inside the table *utf8*.
This library does not provide any support for Unicode other
than the handling of the encoding.
Any operation that needs the meaning of a character,
such as character classification, is outside its scope.


Unless stated otherwise,
all functions that expect a byte position as a parameter
assume that the given position is either the start of a byte sequence
or one plus the length of the subject string.
As in the string library,
negative indices count from the end of the string.


#### utf8.char (···)
                                                                     *utf8.char*
Receives zero or more integers,
converts each one to its corresponding UTF-8 byte sequence
and returns a string with the concatenation of all these sequences.



#### utf8.charpattern
                                                              *utf8.charpattern*
The pattern (a string, not a function) `"[\0-\x7F\xC2-\xF4][\x80-\xBF]*"`
(see  [§6.4.1]), which matches exactly one UTF-8 byte sequence,
assuming that the subject is a valid UTF-8 string.



#### utf8.codes (s)
                                                                    *utf8.codes*
Returns values so that the construction

```lua
     for p, c in utf8.codes(s) do body end
```

will iterate over all characters in string `s`,
with `p` being the position (in bytes) and `c` the code point
of each character.
It raises an error if it meets any invalid byte sequence.



#### utf8.codepoint (s [, i [, j]])
                                                                *utf8.codepoint*
Returns the codepoints (as integers) from all characters in `s`
that start between byte position `i` and `j` (both included).
The default for `i` is 1 and for `j` is `i`.
It raises an error if it meets any invalid byte sequence.



#### utf8.len (s [, i [, j]])
                                                                      *utf8.len*
Returns the number of UTF-8 characters in string `s`
that start between positions `i` and `j` (both inclusive).
The default for `i` is 1 and for `j` is -1.
If it finds any invalid byte sequence,
returns a false value plus the position of the first invalid byte.



#### utf8.offset (s, n [, i])
                                                                   *utf8.offset*
Returns the position (in bytes) where the encoding of the `n-th` character of `s`
(counting from position `i`) starts.
A negative `n` gets characters before position `i`.
The default for `i` is 1 when `n` is non-negative and `#s + 1` otherwise,
so that `utf8.offset(s, -n)` gets the offset of the
`n`-th character from the end of the string.
If the specified character is neither in the subject
nor right after its end, the function returns nil.


As a special case,
when `n` is 0 the function returns the start of the encoding
of the character that contains the `i-th` byte of `s`.


This function assumes that `s` is a valid UTF-8 string.





### ⛏ 6.6 -  Table Manipulation
                                                       [contents] [index] *§6.6*
This library provides generic functions for table manipulation.
It provides all its functions inside the table *table*.


Remember that, whenever an operation needs the length of a table,
all caveats about the length operator apply (see  [§3.4.7]).
All functions ignore non-numeric keys
in the tables given as arguments.


#### table.concat (list [, sep [, i [, j]]])
                                                                  *table.concat*

Given a list where all elements are strings or numbers,
returns the string `list[i]..sep..list[i+1] ··· sep..list[j]`.
The default value for `sep` is the empty string,
the default for `i` is 1, and the default for `j` is `#list`.
If `i` is greater than `j`, returns the empty string.



#### table.insert (list, [pos,] value)
                                                                  *table.insert*

Inserts element `value` at position `pos` in `list`, shifting up the elements
`list[pos], list[pos+1], ···, list[#list]`.
The default value for `pos` is `#list+1`,
so that a call `table.insert(t,x)` inserts `x` at the end of list `t`.



#### table.move (a1, f, e, t [,a2])
                                                                    *table.move*

Moves elements from table `a1` to table `a2`,
performing the equivalent to the following
multiple assignment:
`a2[t],··· = a1[f],···,a1[e]`.
The default for `a2` is `a1`.
The destination range can overlap with the source range.
The number of elements to be moved must fit in a Lua integer.


Returns the destination table `a2`.



#### table.pack (···)
                                                                    *table.pack*
Returns a new table with all arguments stored into keys 1, 2, etc.
and with a field `"n"` with the total number of arguments.
Note that the resulting table may not be a sequence.



#### table.remove (list [, pos])
                                                                  *table.remove*

Removes from `list` the element at position `pos`,
returning the value of the removed element.
When `pos` is an integer between 1 and `#list`,
it shifts down the elements
`list[pos+1], list[pos+2], ···, list[#list]`
and erases element `list[#list]`;
The index `pos` can also be 0 when `#list` is 0,
or `#list + 1`;
in those cases, the function erases the element `list[pos]`.


The default value for `pos` is `#list`,
so that a call `table.remove(l)` removes the last element
of list `l`.



#### table.sort (list [, comp])
                                                                    *table.sort*

Sorts list elements in a given order, *in-place*, from `list[1]` to `list[#list]`.
If `comp` is given, then it must be a function that receives two list elements
and returns true when the first element must come before the second in the final
order (so that, after the sort, `i < j` implies `not comp(list[j],list[i])`).
If `comp` is not given, then the standard Lua operator `<` is used instead.


Note that the `comp` function must define a strict partial order over the 
elements in the list; that is, it must be asymmetric and transitive.
Otherwise, no valid sort may be possible.


The sort algorithm is not stable:
elements considered equal by the given order
may have their relative positions changed by the sort.



#### table.unpack (list [, i [, j]])
                                                                  *table.unpack*
Returns the elements from the given list. This function is equivalent to

```lua
     return list[i], list[i+1], ···, list[j]
```

By default, `i` is 1 and `j` is `#list`.





### ⛏ 6.7 -  Mathematical Functions
                                                       [contents] [index] *§6.7*
This library provides basic mathematical functions. It provides all its functions 
and constants inside the table *math*. Functions with the annotation 
"`integer/float"` give integer results for integer arguments and float results 
for float (or mixed) arguments. Rounding functions ( |math.ceil|,  [math.floor], 
and  [math.modf]) return an integer when the result fits in the range of an 
integer, or a float otherwise.


#### math.abs (x)
                                                                      *math.abs*
Returns the absolute value of `x`. (integer/float)



#### math.acos (x)
                                                                     *math.acos*
Returns the arc cosine of `x` (in radians).



#### math.asin (x)
                                                                     *math.asin*
Returns the arc sine of `x` (in radians).



#### math.atan (y [, x])
                                                                     *math.atan*

Returns the arc tangent of `y/x` (in radians), but uses the signs of both 
arguments to find the quadrant of the result.
(It also handles correctly the case of `x` being zero.)


The default value for `x` is 1, so that the call `math.atan(y)` 
returns the arc tangent of `y`.



#### math.ceil (x)
                                                                     *math.ceil*
Returns the smallest integral value larger than or equal to `x`.



#### math.cos (x)
                                                                      *math.cos*
Returns the cosine of `x` (assumed to be in radians).



#### math.deg (x)
                                                                      *math.deg*

Converts the angle `x` from radians to degrees.



#### math.exp (x)
                                                                      *math.exp*
Returns the value *eˣ* (where `e` is the base of natural logarithms).



#### math.floor (x)
                                                                    *math.floor*
Returns the largest integral value smaller than or equal to `x`.



#### math.fmod (x, y)
                                                                     *math.fmod*
Returns the remainder of the division of `x` by `y`
that rounds the quotient towards zero. (integer/float)



#### math.huge
                                                                     *math.huge*

The float value `HUGE_VAL`, a value larger than any other numeric value.



#### math.log (x [, base])
                                                                      *math.log*
Returns the logarithm of `x` in the given base.
The default for `base` is *e*
(so that the function returns the natural logarithm of `x`).



#### math.max (x, ···)
                                                                      *math.max*
Returns the argument with the maximum value,
according to the Lua operator `<`. (integer/float)



#### math.maxinteger
                                                               *math.maxinteger*
An integer with the maximum value for an integer.



#### math.min (x, ···)
                                                                      *math.min*
Returns the argument with the minimum value,
according to the Lua operator `<`. (integer/float)



#### math.mininteger
                                                               *math.mininteger*
An integer with the minimum value for an integer.



#### math.modf (x)
                                                                     *math.modf*
Returns the integral part of `x` and the fractional part of `x`.
Its second result is always a float.



#### math.pi
                                                                       *math.pi*

The value of *&pi;*.



#### math.rad (x)
                                                                      *math.rad*

Converts the angle `x` from degrees to radians.



#### math.random ([m [, n]])
                                                                   *math.random*

When called without arguments, returns a pseudo-random float with uniform 
distribution in the range  *[0,1)*.
When called with two integers `m` and `n`, `math.random` returns a pseudo-random 
integer with uniform distribution in the range *[m, n]*.
(The value *n-m* cannot be negative and must fit in a Lua integer.)
The call `math.random(n)` is equivalent to `math.random(1,n)`.


This function is an interface to the underling
pseudo-random generator function provided by C.



#### math.randomseed (x)
                                                               *math.randomseed*

Sets `x` as the "seed"for the pseudo-random generator:
equal seeds produce equal sequences of numbers.



#### math.sin (x)
                                                                      *math.sin*
Returns the sine of `x` (assumed to be in radians).



#### math.sqrt (x)
                                                                     *math.sqrt*
Returns the square root of `x`.
(You can also use the expression `x^0.5` to compute this value.)



#### math.tan (x)
                                                                      *math.tan*
Returns the tangent of `x` (assumed to be in radians).



#### math.tointeger (x)
                                                                *math.tointeger*

If the value `x` is convertible to an integer,
returns that integer.
Otherwise, returns nil.



#### math.type (x)
                                                                     *math.type*
Returns `"integer"` if `x` is an integer,
"`float"` if it is a float,
or nil if `x` is not a number.



#### math.ult (m, n)
                                                                      *math.ult*
Returns a boolean,
true if and only if integer `m` is below integer `n` when
they are compared as unsigned integers.





### ⛏ 6.8 -  Input and Output Facilities
                                                       [contents] [index] *§6.8*
The I/O library provides two different styles for file manipulation. 

The first one uses implicit file handles; that is, there are operations to set a 
default input file and a default output file, and all input/output operations are 
over these default files.

The second style uses explicit file handles.


When using implicit file handles, all operations are supplied by table *io*. When 
using explicit file handles, the operation  [io.open] returns a file handle and 
then all operations are supplied as methods of the file handle.


The table `io` also provides three predefined file handles with their usual 
meanings from C: *io.stdin*, *io.stdout*, and *io.stderr*. The I/O library never 
closes these files.


Unless otherwise stated, all I/O functions return nil on failure (plus an error 
message as a second result and a system-dependent error code as a third result) 
and some value different from nil on success. In non-POSIX systems, the 
computation of the error message and error code in case of errors may be not 
thread safe, because they rely on the global C variable `errno`.


#### io.close ([file])
                                                                      *io.close*

Equivalent to `file:close()`. Without a `file`, closes the default output file.



#### io.flush ()
                                                                      *io.flush*

Equivalent to `io.output():flush()`.



#### io.input ([file])
                                                                      *io.input*
When called with a file name, it opens the named file (in text mode), and sets its 
handle as the default input file. When called with a file handle, it simply sets 
this file handle as the default input file. When called without arguments, it 
returns the current default input file.


In case of errors this function raises the error, instead of returning an error 
code.



#### io.lines ([filename, ···])
                                                                      *io.lines*
Opens the given file name in read mode and returns an iterator function that works 
like `file:lines(···)` over the opened file. When the iterator function detects 
the end of file, it returns no values (to finish the loop) and automatically 
closes the file.


The call `io.lines()` (with no file name) is equivalent to 
`io.input():lines("*l")`; that is, it iterates over the lines of the default 
input file. In this case, the iterator does not close the file when the loop ends.


In case of errors this function raises the error, instead of returning an error 
code.



#### io.open (filename [, mode])
                                                                       *io.open*
This function opens a file, in the mode specified in the string `mode`. In case
of success, it returns a new file handle.


The `mode` string can be any of the following:

⛏ `"r"`:  read mode (the default);
⛏ `"w"`:  write mode;
⛏ `"a"`:  append mode;
⛏ `"r+"`:  update mode, all previous data is preserved;
⛏ `"w+"`:  update mode, all previous data is erased;
⛏ `"a+"`:  append update mode, previous data is preserved, writing is only 
    allowed at the end of file. The `mode` string can also have a `'b'` at the end,
    which is needed in some systems to open the file in binary mode.



#### io.output ([file])
                                                                     *io.output*
Similar to  [io.input], but operates over the default output file.



#### io.popen (prog [, mode])
                                                                      *io.popen*
This function is system dependent and is not available on all platforms.


Starts program `prog` in a separated process and returns a file handle that you 
can use to read data from this program (if `mode` is `"r"`, the default) or to 
write data to this program (if `mode` is `"w"`).



#### io.read (···)
                                                                       *io.read*
Equivalent to `io.input():read(···)`.



#### io.tmpfile ()
                                                                    *io.tmpfile*
In case of success, returns a handle for a temporary file. This file is opened 
in update mode and it is automatically removed when the program ends.



#### io.type (obj)
                                                                       *io.type*
Checks whether `obj` is a valid file handle.
Returns the string `"file"` if `obj` is an open file handle,
`"closed file"` if `obj` is a closed file handle,
or nil if `obj` is not a file handle.



#### io.write (···)
                                                                      *io.write*
Equivalent to `io.output():write(···)`.



#### file:close ()
                                                                    *file:close*
Closes `file`.
Note that files are automatically closed when
their handles are garbage collected,
but that takes an unpredictable amount of time to happen.


When closing a file handle created with  [io.popen],
 [file]close| returns the same values
returned by  [os.execute].



#### file:flush ()
                                                                    *file:flush*
Saves any written data to `file`.



#### file:lines (···)
                                                                    *file:lines*
Returns an iterator function that, each time it is called, reads the file 
according to the given formats. When no format is given, uses `"l"` as a default.

As an example, the construction

```lua
     for c in file:lines(1) do body end
```

will iterate over all characters of the file, starting at the current position.
Unlike  [io.lines], this function does not close the file when the loop ends.


In case of errors this function raises the error,
instead of returning an error code.



#### file:read (···)
                                                                     *file:read*
Reads the file `file`,
according to the given formats, which specify what to read.
For each format,
the function returns a string or a number with the characters read,
or nil if it cannot read data with the specified format.
(In this latter case,
the function does not read subsequent formats.)
When called without formats,
it uses a default format that reads the next line
(see below).


The available formats are


⛏ `"n"`: 
    reads a numeral and returns it as a float or an integer,
    following the lexical conventions of Lua.
    (The numeral may have leading spaces and a sign.)
    This format always reads the longest input sequence that
    is a valid prefix for a numeral;
    if that prefix does not form a valid numeral
    (e.g., an empty string, `"0x"`, or `"3.4e-"`),
    it is discarded and the function returns nil.

⛏ `"a"`: 
    reads the whole file, starting at the current position.
    On end of file, it returns the empty string.

⛏ `"l"`: 
    reads the next line skipping the end of line,
    returning nil on end of file.
    This is the default format.

⛏ `"L"`: 
    reads the next line keeping the end-of-line character (if present),
    returning nil on end of file.

⛏ *number*: 
    reads a string with up to this number of bytes,
    returning nil on end of file.
    If `number` is zero,
    it reads nothing and returns an empty string,
    or nil on end of file.


The formats `"l"` and `"L"` should be used only for text files.



#### file:seek ([whence [, offset]])
                                                                     *file:seek*
Sets and gets the file position,
measured from the beginning of the file,
to the position given by `offset` plus a base
specified by the string `whence`, as follows:

⛏ `"set"`:  base is position 0 (beginning of the file);
⛏ `"cur"`:  base is current position;
⛏ `"end"`:  base is end of file;

In case of success, `seek` returns the final file position,
measured in bytes from the beginning of the file.
If `seek` fails, it returns nil,
plus a string describing the error.


The default value for `whence` is `"cur"`,
and for `offset` is 0.
Therefore, the call `file:seek()` returns the current
file position, without changing it;
the call `file:seek("set")` sets the position to the
beginning of the file (and returns 0);
and the call `file:seek("end")` sets the position to the
end of the file, and returns its size.



#### file:setvbuf (mode [, size])
                                                                  *file:setvbuf*
Sets the buffering mode for an output file.
There are three available modes:


⛏ `"no"`: 
    no buffering; the result of any output operation appears immediately.

⛏ `"full"`: 
    full buffering; output operation is performed only
    when the buffer is full or when
    you explicitly `flush` the file (see  [io.flush]).

⛏ `"line"`: 
    line buffering; output is buffered until a newline is output
    or there is any input from some special files
    (such as a terminal device).


For the last two cases, `size` specifies the size of the buffer, in bytes.
The default is an appropriate size.



#### file:write (···)
                                                                    *file:write*
Writes the value of each of its arguments to `file`.
The arguments must be strings or numbers.


In case of success, this function returns `file`.
Otherwise it returns nil plus a string describing the error.





### ⛏ 6.9 - Operating System Facilities
                                                       [contents] [index] *§6.9*
This library is implemented through table *os*.


#### os.clock ()
                                                                      *os.clock*
Returns an approximation of the amount in seconds of CPU time
used by the program.



#### os.date ([format [, time]])
                                                                       *os.date*
Returns a string or a table containing date and time,
formatted according to the given string `format`.


If the `time` argument is present,
this is the time to be formatted
(see the  [os.time] function for a description of this value).
Otherwise, `date` formats the current time.


If `format` starts with `'!`',
then the date is formatted in Coordinated Universal Time.
After this optional character,
if `format` is the string `"*t"`,
then `date` returns a table with the following fields:
`year`, `month` (1-12), `day` (1-31),
`hour` (0-23), `min` (0-59), `sec` (0-61),
`wday` (weekday, 1-7, Sunday is 1),
`yday` (day of the year, 1-366),
and `isdst` (daylight saving flag, a boolean).
This last field may be absent if the information is not available.


If `format` is not `"*t"`, then `date` returns the date as a string,
formatted according to the same rules as the ISO C function `strftime`.


When called without arguments,
`date` returns a reasonable date and time representation that depends on
the host system and on the current locale.
(More specifically, `os.date()` is equivalent to `os.date("%c")`.)


In non-POSIX systems,
this function may be not thread safe
because of its reliance on C function `gmtime` and C function `localtime`.



#### os.difftime (t2, t1)
                                                                   *os.difftime*
Returns the difference, in seconds,
from time `t1` to time `t2`
(where the times are values returned by  [os.time]).
In POSIX, Windows, and some other systems,
this value is exactly `t2`*-*`t1`.



#### os.execute ([command])
                                                                    *os.execute*
This function is equivalent to the ISO C function `system`.
It passes `command` to be executed by an operating system shell.
Its first result is true
if the command terminated successfully,
or nil otherwise.
After this first result
the function returns a string plus a number,
as follows:


⛏ `"exit"`: 
    the command terminated normally;
    the following number is the exit status of the command.

⛏ `"signal"`: 
    the command was terminated by a signal;
    the following number is the signal that terminated the command.


When called without a `command`,
`os.execute` returns a boolean that is true if a shell is available.



#### os.exit ([code [, close]])
                                                                       *os.exit*
Calls the ISO C function `exit` to terminate the host program.
If `code` is true, the returned status is `EXIT_SUCCESS`;
if `code` is false, the returned status is `EXIT_FAILURE`;
if `code` is a number, the returned status is this number.
The default value for `code` is true.


If the optional second argument `close` is true,
closes the Lua state before exiting.



#### os.getenv (varname)
                                                                     *os.getenv*
Returns the value of the process environment variable `varname`,
or nil if the variable is not defined.



#### os.remove (filename)
                                                                     *os.remove*
Deletes the file (or empty directory, on POSIX systems) with the given name.
If this function fails, it returns nil,
plus a string describing the error and the error code.
Otherwise, it returns true.



#### os.rename (oldname, newname)
                                                                     *os.rename*
Renames the file or directory named `oldname` to `newname`.
If this function fails, it returns nil,
plus a string describing the error and the error code.
Otherwise, it returns true.



#### os.setlocale (locale [, category])
                                                                  *os.setlocale*
Sets the current locale of the program.
`locale` is a system-dependent string specifying a locale;
`category` is an optional string describing which category to change:
`"all"`, `"collate"`, `"ctype"`,
`"monetary"`, `"numeric"`, or `"time"`;
the default category is `"all"`.
The function returns the name of the new locale,
or nil if the request cannot be honored.


If `locale` is the empty string,
the current locale is set to an implementation-defined native locale.
If `locale` is the string `"C"`,
the current locale is set to the standard C locale.


When called with nil as the first argument,
this function only returns the name of the current locale
for the given category.


This function may be not thread safe
because of its reliance on C function `setlocale`.



#### os.time ([table])
                                                                       *os.time*
Returns the current time when called without arguments,
or a time representing the local date and time specified by the given table.
This table must have fields `year`, `month`, and `day`,
and may have fields
`hour` (default is 12),
`min` (default is 0),
`sec` (default is 0),
and `isdst` (default is nil).
Other fields are ignored.
For a description of these fields, see the  [os.date] function.


The values in these fields do not need to be inside their valid ranges.
For instance, if `sec` is -10,
it means -10 seconds from the time specified by the other fields;
if `hour` is 1000,
it means +1000 hours from the time specified by the other fields.


The returned value is a number, whose meaning depends on your system.
In POSIX, Windows, and some other systems,
this number counts the number
of seconds since some given start time (the "epoch").
In other systems, the meaning is not specified,
and the number returned by `time` can be used only as an argument to
 [os.date] and  [os.difftime].



#### os.tmpname ()
                                                                    *os.tmpname*
Returns a string with a file name that can
be used for a temporary file.
The file must be explicitly opened before its use
and explicitly removed when no longer needed.


In POSIX systems,
this function also creates a file with that name,
to avoid security risks.
(Someone else might create the file with wrong permissions
in the time between getting the name and creating the file.)
You still have to open the file to use it
and to remove it (even if you do not use it).


When possible,
you may prefer to use  [io.tmpfile],
which automatically removes the file when the program ends.





### ⛏ 6.10 -  The Debug Library
                                                      [contents] [index] *§6.10*
This library provides
the functionality of the debug interface ( [§4.9]) to Lua programs.
You should exert care when using this library.
Several of its functions
violate basic assumptions about Lua code
(e.g., that variables local to a function
cannot be accessed from outside;
that userdata metatables cannot be changed by Lua code;
that Lua programs do not crash)
and therefore can compromise otherwise secure code.
Moreover, some functions in this library may be slow.


All functions in this library are provided
inside the *debug* table.
All functions that operate over a thread
have an optional first argument which is the
thread to operate over.
The default is always the current thread.


#### debug.debug ()
                                                                   *debug.debug*
Enters an interactive mode with the user,
running each string that the user enters.
Using simple commands and other debug facilities,
the user can inspect global and local variables,
change their values, evaluate expressions, and so on.
A line containing only the word `cont` finishes this function,
so that the caller continues its execution.


Note that commands for `debug.debug` are not lexically nested
within any function and so have no direct access to local variables.



#### debug.gethook ([thread])
                                                                 *debug.gethook*


Returns the current hook settings of the thread, as three values:
the current hook function, the current hook mask,
and the current hook count
(as set by the  [debug.sethook] function).



#### debug.getinfo ([thread,] f [, what])
                                                                 *debug.getinfo*


Returns a table with information about a function.
You can give the function directly
or you can give a number as the value of `f`,
which means the function running at level `f` of the call stack
of the given thread:
level 0 is the current function (`getinfo` itself);
level 1 is the function that called `getinfo`
(except for tail calls, which do not count on the stack);
and so on.
If `f` is a number larger than the number of active functions,
then `getinfo` returns nil.


The returned table can contain all the fields returned by  [lua_getinfo],
with the string `what` describing which fields to fill in.
The default for `what` is to get all information available,
except the table of valid lines.
If present,
the option `'f`'
adds a field named `func` with the function itself.
If present,
the option `'L`'
adds a field named `activelines` with the table of
valid lines.


For instance, the expression `debug.getinfo(1,"n").name` returns
a name for the current function,
if a reasonable name can be found,
and the expression `debug.getinfo(print)`
returns a table with all available information
about the  [print] function.



#### debug.getlocal ([thread,] f, local)
                                                                *debug.getlocal*


This function returns the name and the value of the local variable
with index `local` of the function at level `f` of the stack.
This function accesses not only explicit local variables,
but also parameters, temporaries, etc.


The first parameter or local variable has index 1, and so on,
following the order that they are declared in the code,
counting only the variables that are active
in the current scope of the function.
Negative indices refer to vararg arguments;
-1 is the first vararg argument.
The function returns nil if there is no variable with the given index,
and raises an error when called with a level out of range.
(You can call  [debug.getinfo] to check whether the level is valid.)


Variable names starting with `'('` (open parenthesis) 
represent variables with no known names
(internal variables such as loop control variables,
and variables from chunks saved without debug information).


The parameter `f` may also be a function.
In that case, `getlocal` returns only the name of function parameters.



#### debug.getmetatable (value)
                                                            *debug.getmetatable*
Returns the metatable of the given `value`
or nil if it does not have a metatable.



#### debug.getregistry ()
                                                             *debug.getregistry*
Returns the registry table (see  [§4.5]).



#### debug.getupvalue (f, up)
                                                              *debug.getupvalue*


This function returns the name and the value of the upvalue
with index `up` of the function `f`.
The function returns nil if there is no upvalue with the given index.


Variable names starting with `'('` (open parenthesis) 
represent variables with no known names
(variables from chunks saved without debug information).



#### debug.getuservalue (u)
                                                            *debug.getuservalue*
Returns the Lua value associated to `u`.
If `u` is not a full userdata,
returns nil.



#### debug.sethook ([thread,] hook, mask [, count])
                                                                 *debug.sethook*


Sets the given function as a hook.
The string `mask` and the number `count` describe
when the hook will be called.
The string mask may have any combination of the following characters,
with the given meaning:


⛏ `'c'`:  the hook is called every time Lua calls a function;
⛏ `'r'`:  the hook is called every time Lua returns from a function;
⛏ `'l'`:  the hook is called every time Lua enters a new line of code.

Moreover, with a `count` different from zero,
the hook is called also after every `count` instructions.


When called without arguments, [debug.sethook] turns off the hook.


 When the hook is called, its first argument is a string
describing the event that has triggered its call:

`"call"` (or `"tail call"`),
`"return"`,
`"line"`, and `"count"`.

For line events, the hook also gets the new line number as its second parameter.
Inside a hook, you can call `getinfo` with level 2 to get more information about
the running function (level 0 is the `getinfo` function,
and level 1 is the hook function).



#### debug.setlocal ([thread,] level, local, value)
                                                                *debug.setlocal*

This function assigns the value `value` to the local variable
with index `local` of the function at level `level` of the stack.
The function returns nil if there is no local
variable with the given index,
and raises an error when called with a `level` out of range.
(You can call `getinfo` to check whether the level is valid.)
Otherwise, it returns the name of the local variable.


See  [debug.getlocal] for more information about
variable indices and names.



#### debug.setmetatable (value, table)
                                                            *debug.setmetatable*


Sets the metatable for the given `value` to the given `table` (which can be nil).
Returns `value`.



#### debug.setupvalue (f, up, value)
                                                              *debug.setupvalue*

This function assigns the value `value` to the upvalue
with index `up` of the function `f`.
The function returns nil if there is no upvalue
with the given index.
Otherwise, it returns the name of the upvalue.



#### debug.setuservalue (udata, value)
                                                            *debug.setuservalue*

Sets the given `value` as
the Lua value associated to the given `udata`.
`udata` must be a full userdata.


Returns `udata`.



#### debug.traceback ([thread,] [message [, level]])
                                                               *debug.traceback*


If `message` is present but is neither a string nor nil,
this function returns `message` without further processing.
Otherwise,
it returns a string with a traceback of the call stack.
The optional `message` string is appended
at the beginning of the traceback.
An optional `level` number tells at which level
to start the traceback
(default is 1, the function calling `traceback`).



#### debug.upvalueid (f, n)
                                                               *debug.upvalueid*


Returns a unique identifier (as a light userdata)
for the upvalue numbered `n`
from the given function.


These unique identifiers allow a program to check whether different
closures share upvalues.
Lua closures that share an upvalue
(that is, that access a same external local variable)
will return identical ids for those upvalue indices.



#### debug.upvaluejoin (f1, n1, f2, n2)
                                                             *debug.upvaluejoin*

Make the `n1`-th upvalue of the Lua closure `f1`
refer to the `n2`-th upvalue of the Lua closure `f2`.



## ⚡ 7 -  Lua Standalone
                                                        [contents] [index] *ch7*
Although Lua has been designed as an extension language, to be embedded in a host
C program, it is also frequently used as a standalone language. An interpreter 
for Lua as a standalone language, called simply `lua`, is provided with the 
standard distribution.

The standalone interpreter includes all standard libraries, including the debug 
library.

Its usage is:

```sh
    lua [options] [script [args]]
```

The options are:

⛏ `-e stat`:  executes string *stat*;
⛏ `-l mod`:  "requires" *mod* and assigns the result to global @*mod*;
⛏ `-i`:  enters interactive mode after running *script*;
⛏ `-v`:  prints version information;
⛏ `-E`:  ignores environment variables;
⛏ `--`:  stops handling options;
⛏ `-`:  executes `stdin` as a file and stops handling options.

After handling its options, `lua` runs the given *script*. When called without 
arguments, `lua` behaves as `lua -v -i` when the standard input (`stdin`) is a 
terminal, and as `lua -` otherwise.

When called without option `-E`, the interpreter checks for an environment 
variable *LUA_INIT_5_3* (or *LUA_INIT* if the versioned name is not defined)
before running any argument.

If the variable content has the format `@filename`, then `lua` executes the 
file. Otherwise, `lua` executes the string itself.


When called with option `-E`, besides ignoring `LUA_INIT`, Lua also ignores the
values of `LUA_PATH` and `LUA_CPATH`, setting the values of [package.path] and 
[package.cpath] with the default paths defined in `luaconf.h`.


All options are handled in order, except `-i` and `-E`.
For instance, an invocation like

```sh
    $ lua -e'a=1' -e 'print(a)' script.lua
```

will first set `a` to 1, then print the value of `a`, and finally run the file 
`script.lua` with no arguments.
(Here `$` is the shell prompt. Your prompt may be different.)


Before running any code, `lua` collects all command-line arguments in a global 
table called `arg`. The script name goes to index 0, the first argument after 
the script name goes to index 1, and so on. Any arguments before the script name
(that is, the interpreter name plus its options) go to negative indices.
For instance, in the call

```sh
    $ lua -la b.lua t1 t2
```

the table is like this:

```lua
     arg = { [-2] = "lua", [-1] = "-la",
             [0] = "b.lua",
             [1] = "t1", [2] = "t2" }
```

If there is no script in the call, the interpreter name goes to index 0,
followed by the other arguments.
For instance, the call

```sh
    $ lua -e "print(arg[1])"
```

will print `"-e`". If there is a script, the script is called with arguments 
`arg[1]`, ···, `arg[#arg]`.
(Like all chunks in Lua, the script is compiled as a vararg function.)


In interactive mode, Lua repeatedly prompts and waits for a line. After reading 
a line, Lua first try to interpret the line as an expression. If it succeeds, 
it prints its value. Otherwise, it interprets the line as a statement. If you 
write an incomplete statement, the interpreter waits for its completion by issuing 
a different prompt.


If the global variable *_PROMPT* contains a string, then its value is used as the 
prompt. Similarly, if the global variable *_PROMPT2* contains a string, its value 
is used as the secondary prompt (issued during incomplete statements).

In case of unprotected errors in the script, the interpreter reports the error to 
the standard error stream. If the error object is not a string but has a metamethod
`__tostring`, the interpreter calls this metamethod to produce the final message. 
Otherwise, the interpreter converts the error object to a string and adds a stack 
traceback to it.


When finishing normally, the interpreter closes its main Lua state (see [lua_close]).
The script can avoid this step by calling  [os.exit] to terminate.


To allow the use of Lua as a script interpreter in Unix systems, the standalone 
interpreter skips the first line of a chunk if it starts with `#`. Therefore, 
Lua scripts can be made into executable programs by using `chmod +x` and the 
`#!` form, as in

```sh
    #!/usr/local/bin/lua
```

Of course, the location of the Lua interpreter may be different in your machine.
If `lua` is in your `PATH`, then

```sh
    #!/usr/bin/env lua
```

is a more portable solution.


## ⚡ 8 -  Incompatibilities with the Previous Version
                                                        [contents] [index] *ch8*
Here we list the incompatibilities that you may find when moving a program from 
Lua 5.2 to Lua 5.3. You can avoid some incompatibilities by compiling Lua with
appropriate options (see file `luaconf.h`). However, all these compatibility 
options will be removed in the future.


Lua versions can always change the C API in ways that do not imply source-code 
changes in a program, such as the numeric values for constants or the 
implementation of functions as macros. Therefore, you should not assume that 
binaries are compatible between different Lua versions. Always recompile clients 
of the Lua API when using a new version.


Similarly, Lua versions can always change the internal representation of 
precompiled chunks; precompiled chunks are not compatible between different 
Lua versions.


The standard paths in the official distribution may change between versions.


### ⛏ 8.1 -  Changes in the Language
                                                       [contents] [index] *§8.1*

⛏ The main difference between Lua 5.2 and Lua 5.3 is the introduction of an 
    integer subtype for numbers. Although this change should not affect "normal"
    computations, some computations (mainly those that involve some kind of 
    overflow) can give different results.


   You can fix these differences by forcing a number to be a float (in Lua 5.2 all 
   numbers were float), in particular writing constants with an ending `.0` or 
   using `x = x + 0.0` to convert a variable. (This recommendation is only for a 
   quick fix for an occasional incompatibility; it is not a general guideline for 
   good programming. For good programming, use floats where you need floats and 
   integers where you need integers.)

⛏ The conversion of a float to a string now adds a `.0` suffix to the result if 
    it looks like an integer. (For instance, the float 2.0 will be printed as `2.0`
    , not as `2`.) You should always use an explicit format when you need a 
    specific format for numbers.


   (Formally this is not an incompatibility, because Lua does not specify how 
   numbers are formatted as strings, but some programs assumed a specific format.)

⛏ The generational mode for the garbage collector was removed.
    (It was an experimental feature in Lua 5.2.)


### ⛏ 8.2 -  Changes in the Libraries
                                                       [contents] [index] *§8.2*

⛏ The `bit32` library has been deprecated. It is easy to require a compatible 
    external library or, better yet, to replace its functions with appropriate 
    bitwise operations. (Keep in mind that `bit32` operates on 32-bit integers, 
    while the bitwise operators in Lua 5.3 operate on Lua integers, which by 
    default have 64 bits.)

⛏ The Table library now respects metamethods for setting and getting elements.

⛏ The [ipairs] iterator now respects metamethods and its `__ipairs` metamethod 
    has been deprecated.

⛏ Option names in [io.read] do not have a starting `'*'` anymore. For 
    compatibility, Lua will continue to accept (and ignore) this character.

⛏ The following functions were deprecated in the mathematical library: 
    `atan2`, `cosh`, `sinh`, `tanh`, `pow`, `frexp`, and `ldexp`.
    You can replace `math.pow(x,y)` with `x^y`;
    you can replace `math.atan2` with `math.atan`,
    which now accepts one or two arguments;
    you can replace `math.ldexp(x,exp)` with `x * 2.0^exp`.
    For the other operations, you can either use an external library or implement 
    them in Lua.

⛏ The searcher for C loaders used by  [require] changed the way it handles 
    versioned names. Now, the version should come after the module name (as is 
    usual in most other tools). For compatibility, that searcher still tries the 
    old format if it cannot find an open function according to the new style. (Lua 
    5.2 already worked that way, but it did not document the change.)

⛏ The call `collectgarbage("count")` now returns only one result. (You can 
    compute that second result from the fractional part of the first result.)


### ⛏ 8.3 -  Changes in the API
                                                       [contents] [index] *§8.3*

⛏ Continuation functions now receive as arguments what they needed to get 
    through `lua_getctx`, so `lua_getctx` has been removed. Adapt your code 
    accordingly.

⛏ Function  [lua_dump] has an extra parameter, `strip`. Use 0 as the value of 
    this parameter to get the old behavior.

⛏ Functions to inject/project unsigned integers (`lua_pushunsigned`, 
    `lua_tounsigned`, `lua_tounsignedx`, `luaL_checkunsigned`, `luaL_optunsigned`)
    were deprecated. Use their signed equivalents with a type cast.

⛏ Macros to project non-default integer types (`luaL_checkint`, `luaL_optint`, 
    `luaL_checklong`, `luaL_optlong`) were deprecated. Use their equivalent over
    [lua_Integer] with a type cast (or, when possible, use  [lua_Integer] in your code).



## ⚡ Lua 5.1 - ch7 Incompatibilities with the Previous Version
                                                 [contents] [index] *lua5.1-ch7*

Here we list the incompatibilities that you may find when moving a program
from Lua 5.0 to Lua 5.1.
You can avoid most of the incompatibilities compiling Lua with
appropriate options (see file `luaconf.h`).
However,
all these compatibility options will be removed in the next version of Lua.


### 7.1 - Changes in the Language
                                                 [contents] [index] *lua5.1-7.1*


⛏ The vararg system changed from the pseudo-argument `arg` with a
    table with the extra arguments to the vararg expression.
    (See compile-time option `LUA_COMPAT_VARARG` in `luaconf.h`.)

⛏ There was a subtle change in the scope of the implicit
    variables of the *for* statement and for the *repeat* statement.

⛏ The long string/long comment syntax (`[[string]]`)
    does not allow nesting.
    You can use the new syntax (`[=[string]=]`) in these cases.
    (See compile-time option `LUA_COMPAT_LSTR` in `luaconf.h`.)



### 7.2 - Changes in the Libraries
                                                  [contents] [index] *lua5.1-7.2*


⛏ Function `string.gfind` was renamed [string.gmatch] `string.gmatch`.
    (See compile-time option `LUA_COMPAT_GFIND` in `luaconf.h`.)

⛏ When [string.gsub] `string.gsub` is called with a function as its
    third argument, whenever this function returns *nil* or *false* the
    replacement string is the whole match, instead of the empty string.

⛏ Function `table.setn` was deprecated.
    Function `table.getn` corresponds
    to the new length operator (`#`);
    use the operator instead of the function.
    (See compile-time option `LUA_COMPAT_GETN` in `luaconf.h`.)

⛏ Function `loadlib` was renamed [package.loadlib] `package.loadlib`.
    (See compile-time option `LUA_COMPAT_LOADLIB` in `luaconf.h`.)

⛏ Function `math.mod` was renamed [math.fmod] `math.fmod`.
    (See compile-time option `LUA_COMPAT_MOD` in `luaconf.h`.)

⛏ Functions `table.foreach` and `table.foreachi` are deprecated.
    You can use a for loop with `pairs` or `ipairs` instead.

⛏ There were substantial changes in function [require] `require` due to
    the new module system.
    However, the new behavior is mostly compatible with the old,
    but `require` gets the path from [package.path] `package.path` instead
    of from `LUA_PATH`.

⛏ Function [collectgarbage] `collectgarbage` has different arguments.
    Function `gcinfo` is deprecated;
    use `collectgarbage("count")` instead.




### 7.3 - Changes in the API
                                                 [contents] [index] *lua5.1-7.3*


⛏ The `luaopen_*` functions (to open libraries)
    cannot be called directly, like a regular C function.
    They must be called through Lua, like a Lua function.

⛏ Function `lua_open` was replaced by [lua_newstate] `lua_newstate` to
    allow the user to set a memory-allocation function.
    You can use [luaL_newstate] `luaL_newstate` from the standard library to
    create a state with a standard allocation function
    (based on `realloc`).

⛏ Functions `luaL_getn` and `luaL_setn`
    (from the auxiliary library) are deprecated.
    Use [lua_objlen] `lua_objlen` instead of `luaL_getn`
    and nothing instead of `luaL_setn`.

⛏ Function `luaL_openlib` was replaced by [luaL_register] `luaL_register`.

⛏ Function `luaL_checkudata` now throws an error when the given value
    is not a userdata of the expected type.
    (In Lua 5.0 it returned `NULL`.)




## ⚡ Lua 5.2 - ch8 Incompatibilities with the Previous Version
                                                 [contents] [index] *lua5.2-ch8*

Here we list the incompatibilities that you may find when moving a program
from Lua 5.1 to Lua 5.2.
You can avoid some incompatibilities by compiling Lua with
appropriate options (see file `luaconf.h`).
However,
all these compatibility options will be removed in the next version of Lua.
Similarly, all features marked as deprecated in Lua 5.1
have been removed in Lua 5.2.



### 8.1 - Changes in the Language
                                                 [contents] [index] *lua5.2-8.1*

⛏ The concept of `environment` changed.
    Only Lua functions have environments.
    To set the environment of a Lua function,
    use the variable `_ENV` or the function [load] `load`.


   C functions no longer have environments.
   Use an upvalue with a shared table if you need to keep
   shared state among several C functions.
   (You may use [luaL_setfuncs] `luaL_setfuncs` to open a C library
   with all functions sharing a common upvalue.)


   To manipulate the "environment" of a userdata
   (which is now called user value), 
   use the new functions [lua_getuservalue] and [lua_setuservalue].

⛏ Lua identifiers cannot use locale-dependent letters.

⛏ Doing a step or a full collection in the garbage collector
    does not restart the collector if it has been stopped.

⛏ Weak tables with weak keys now perform like `ephemeron tables`.

⛏ The event `tail return` in debug hooks was removed.
    Instead, tail calls generate a special new event,
    `tail call`, so that the debugger can know that
    there will not be a corresponding return event.

⛏ Equality between function values has changed.
    Now, a function definition may not create a new value;
    it may reuse some previous value if there is no
    observable difference to the new function.




### 8.2 - Changes in the Libraries
                                                 [contents] [index] *lua5.2-8.2*

⛏ Function `module` is deprecated.
    It is easy to set up a module with regular Lua code.
    Modules are not expected to set global variables.

⛏ Functions `setfenv` and `getfenv` were removed,
    because of the changes in environments.

⛏ Function `math.log10` is deprecated.
    Use [math.log] `math.log` with 10 as its second argument, instead.

⛏ Function `loadstring` is deprecated.
    Use `load` instead; it now accepts string arguments
    and are exactly equivalent to `loadstring`.

⛏ Function `table.maxn` is deprecated.
    Write it in Lua if you really need it.

⛏ Function `os.execute` now returns *true* when command
    terminates successfully and *nil* plus error information
    otherwise.

⛏ Function `unpack` was moved into the table library
    and therefore must be called as [table.unpack] `table.unpack`.

⛏ Character class `%z` in patterns is deprecated,
    as now patterns may contain '`\0`' as a regular character.

⛏ The table `package.loaders` was renamed `package.searchers`.

⛏ Lua does not have bytecode verification anymore.
    So, all functions that load code ([load] `load` and [loadfile] `loadfile`)
    are potentially insecure when loading untrusted binary data.
    (Actually, those functions were already insecure because
    of flaws in the verification algorithm.)
    When in doubt, use the `mode` argument of those functions
    to restrict them to loading textual chunks.

⛏ The standard paths in the official distribution may
    change between versions.




### 8.3 - Changes in the API
                                                 [contents] [index] *lua5.2-8.3*

⛏ Pseudoindex `LUA_GLOBALSINDEX` was removed.
    You must get the global environment from the registry
    (see [§4.5]).

⛏ Pseudoindex `LUA_ENVIRONINDEX`
    and functions `lua_getfenv`/`lua_setfenv` were removed,
    as C functions no longer have environments.

⛏ Function `luaL_register` is deprecated.
    Use [luaL_setfuncs] `luaL_setfuncs` so that your module does not create globals.
    (Modules are not expected to set global variables anymore.)

⛏ The `osize` argument to the allocation function
    may not be zero when creating a new block, that is, when `ptr` is `NULL`
    (see [lua_Alloc] `lua_Alloc`).
    Use only the test `ptr == NULL` to check whether the block is new.

⛏ Finalizers (`__gc` metamethods) for userdata are called in the
    reverse order that they were marked for finalization,
    not that they were created (see [§2.5.1]).
    (Most userdata are marked immediately after they are created.)
    Moreover,
    if the metatable does not have a `__gc` field when set,
    the finalizer will not be called,
    even if it is set later.

⛏ `luaL_typerror` was removed. Write your own version if you need it.

⛏ Function `lua_cpcall` is deprecated.
    You can simply push the function with [lua_pushcfunction] `lua_pushcfunction`
    and call it with [lua_pcall] `lua_pcall`.

⛏ Functions `lua_equal` and `lua_lessthan` are deprecated.
    Use the new [lua_compare] `lua_compare` with appropriate options instead.

⛏ Function `lua_objlen` was renamed [lua_rawlen] `lua_rawlen`.

⛏ Function [lua_load] `lua_load` has an extra parameter, `mode`.
    Pass `NULL` to simulate the old behavior.

⛏ Function [lua_resume] `lua_resume` has an extra parameter, `from`.
    Pass `NULL` or the thread doing the call.



## ⚡ Lua 5.4 - 8 Incompatibilities with the Previous Version
                                                 [contents] [index] *lua5.4-ch8*



Here we list the incompatibilities that you may find when moving a program
from Lua 5.3 to Lua 5.4.


You can avoid some incompatibilities by compiling Lua with
appropriate options (see file `luaconf.h`).
However, all these compatibility options will be removed in the future.
More often than not,
compatibility issues arise when these compatibility options are removed.
So, whenever you have the chance,
you should try to test your code with a version of Lua compiled
with all compatibility options turned off.
That will ease transitions to newer versions of Lua.


Lua versions can always change the C API in ways that
do not imply source-code changes in a program,
such as the numeric values for constants
or the implementation of functions as macros.
Therefore,
you should never assume that binaries are compatible between
different Lua versions.
Always recompile clients of the Lua API when
using a new version.


Similarly, Lua versions can always change the internal representation
of precompiled chunks;
precompiled chunks are not compatible between different Lua versions.


The standard paths in the official distribution may
change between versions.




### 8.1 - Incompatibilities in the Language
                                                 [contents] [index] *lua5.4-8.1*


⛏ The coercion of strings to numbers in arithmetic and bitwise operations
    has been removed from the core language.
    The string library does a similar job
    for arithmetic (but not for bitwise) operations
    using the string metamethods.
    However, unlike in previous versions,
    the new implementation preserves the implicit type of the numeral
    in the string.
    For instance, the result of `"1" + "2"` now is an integer,
    not a float.

⛏ Literal decimal integer constants that overflow are read as floats,
    instead of wrapping around.
    You can use hexadecimal notation for such constants if you
    want the old behavior
    (reading them as integers with wrap around).

⛏ The use of the `__lt` metamethod to emulate `__le`
    has been removed.
    When needed, this metamethod must be explicitly defined.

⛏ The semantics of the numerical *for* loop
    over integers changed in some details.
    In particular, the control variable never wraps around.

⛏ A label for a *goto* cannot be declared where a label with the same
    name is visible, even if this other label is declared in an enclosing
    block.

⛏ When finalizing an object,
    Lua does not ignore `__gc` metamethods that are not functions.
    Any value will be called, if present.
    (Non-callable values will generate a warning,
    like any other error when calling a finalizer.)




### 8.2 - Incompatibilities in the Libraries
                                                [contents] [index]  *lua5.4-8.2*


⛏ The function [print] `print` does not call [tostring] `tostring`
    to format its arguments;
    instead, it has this functionality hardwired.
    You should use `__tostring` to modify how values are printed.

⛏ The pseudo-random number generator used by the function [math.random]
    now starts with a somewhat random seed.
    Moreover, it uses a different algorithm.

⛏ By default, the decoding functions in the [utf8] `utf8` library
    do not accept surrogates as valid code points.
    An extra parameter in these functions makes them more permissive.

⛏ The options `setpause` and `setstepmul`
    of the function [collectgarbage] `collectgarbage` are deprecated.
    You should use the new option `incremental` to set them.

⛏ The function [io.lines] `io.lines` now returns four values,
    instead of just one.
    That can be a problem when it is used as the sole
    argument to another function that has optional parameters,
    such as in `load(io.lines(filename, "L"))`.
    To fix that issue,

you can wrap the call into parentheses, to adjust its number of results to one.




### 8.3 - Incompatibilities in the API
                                                 [contents] [index] *lua5.4-8.3*


⛏ Full userdata now has an arbitrary number of associated user values.
    Therefore, the functions `lua_newuserdata`,
    `lua_setuservalue`, and `lua_getuservalue` were
    replaced by [lua_newuserdatauv] `lua_newuserdatauv`,
    [lua_setiuservalue] `lua_setiuservalue`, and [lua_getiuservalue] `lua_getiuservalue`,
    which have an extra argument.


   For compatibility, the old names still work as macros assuming
   one single user value.
   Note, however, that userdata with zero user values
   are more efficient memory-wise.

⛏ The function [lua_resume] `lua_resume` has an extra parameter.
    This out parameter returns the number of values on
    the top of the stack that were yielded or returned by the coroutine.
    (In previous versions,
    those values were the entire stack.)

⛏ The function [lua_version] `lua_version` returns the version number,
    instead of an address of the version number.
    The Lua core should work correctly with libraries using their
    own static copies of the same core,
    so there is no need to check whether they are using the same
    address space.

⛏ The constant `LUA_ERRGCMM` was removed.
    Errors in finalizers are never propagated;
    instead, they generate a warning.

⛏ The options `LUA_GCSETPAUSE` and `LUA_GCSETSTEPMUL`
    of the function [lua_gc] `lua_gc` are deprecated.
    You should use the new option `LUA_GCINC` to set them.



## ⚡ 9 - The Complete Syntax of Lua
                                                        [contents] [index] *ch9*
Here is the complete syntax of Lua in extended BNF. As usual in extended BNF, 
{A} means 0 or more As, and [A] means an optional A. (For operator precedences, 
see [§3.4.8]; for a description of the terminals Name, Numeral, and LiteralString, 
see [§3.1].)


```sh
    chunk ::= block

    block ::= {stat} [retstat]

    stat ::=  ';' | 
         varlist '=' explist | 
         functioncall | 
         label | 
         break | 
         goto Name | 
         do block end | 
         while exp do block end | 
         repeat block until exp | 
         if exp then block {elseif exp then block} [else block] end | 
         for Name '=' exp ',' exp [',' exp] do block end | 
         for namelist in explist do block end | 
         function funcname funcbody | 
         local function Name funcbody | 
         local namelist ['=' explist] 

    retstat ::= return [explist] [';']

    label ::= '::' Name '::'

    funcname ::= Name {'.' Name} [':' Name]

    varlist ::= var {',' var}

    var ::=  Name | prefixexp '[' exp ']' | prefixexp '.' Name 

    namelist ::= Name {',' Name}

    explist ::= exp {',' exp}

    exp ::=  nil | false | true | Numeral | LiteralString | '...' | functiondef | 
         prefixexp | tableconstructor | exp binop exp | unop exp 

    prefixexp ::= var | functioncall | '(' exp ')'

    functioncall ::=  prefixexp args | prefixexp ':' Name args 

    args ::=  '(' [explist] ')' | tableconstructor | LiteralString 

    functiondef ::= function funcbody

    funcbody ::= '(' [parlist] ')' block end

    parlist ::= namelist [',' '...'] | '...'

    tableconstructor ::= '{' [fieldlist] '}'

    fieldlist ::= field {fieldsep field} [fieldsep]

    field ::= '[' exp ']' '=' exp | Name '=' exp | exp

    fieldsep ::= ',' | ';'

    binop ::= '+' | '-' | '*' | '/' | '//' | '^' | '%' | 
              '&' | '~' | '|' | '>>' | '<<' | '..' | 
              '<' | '<=' | '>' | '>=' | '==' | '~=' | 
              and | or

    unop  ::= '-' | not | '#' | '~'
```


