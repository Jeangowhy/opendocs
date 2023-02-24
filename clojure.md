

# =🚩 Clojure
- https://docs.opencv.org/3.4/d7/d1e/tutorial_clojure_dev_intro.html
- https://djpowell.github.io/leiningen-win-installer/
- https://github.com/clojure/tools.deps.alpha/wiki/clj-on-Windows

Clojure Programming 总结了 Clojure 特性：

- Clojure is hosted on the JVM
- Clojure is a Lisp
- Clojure is a functional programming language
- Clojure offers innovative solutions to the challenges inherent in concurrency and parallelization
- Clojure is a dynamic programming language

Clojure 是一种运行在 Java 虚拟机上的 Lisp 方言，可以很方便地里德 Java 与 Clojure 互相调用。Lisp 是一种以表达性和功能强大著称的编程语言，但人们通常认为它不太适合应用于一般情况，而 Clojure 的出现彻底改变了这一现状。

Clojure 是一种高级的，动态的函数式编程语言，可以在 Java 和 .Net 运行时环境上运行。

Leiningen 是一个创建、构建自动化 Clojure 项目的重要工具。

Clojure 函数式编程含义：

• A preference for working with immutable values; this includes:
	- The use of immutable data structures that satisfy simple abstractions, rather than mutable bags of state
	- The treatment of functions as values themselves, enabling higher-order functions
• A preference for declarative processing of data over imperative control structures and iteration
• The natural incremental composition of functions, higher-order functions, and immutable data structures in order to solve complex problems by working with higher-level (or, right-level) abstractions


在 Windows PowerShell 中可以执行以下命令安装并使用 clj 命令。

```sh
> Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://download.clojure.org/install/win-install-1.11.1.1113.ps1')

> clj -M --repl
> clj -M .\core.clj

> clj -Spath
src;C:\Users\X\.m2\repository\org\clojure\clojure\1.11.1\clojure-1.11.1.jar;C:\Users\X\.m2\repository\org\clojure\core.specs.alpha\0.2.62\core.specs.alpha-0.2.62.jar;C:\Users\X\.m2\repository\org\clojure\spec.alpha\0.3.218\spec.alpha-0.3.218.jar
```

执行 clj 命令可以直接进入 REPL 交互模式，Ctrl-D Ctrl-C 分别用于结构输入和结束交互。

REPL (Read-Eval-Print-Loop) 含义如下：

- *Read* an expression (a string of characters) to produce Clojure data.
- *Evaluate* the data returned from #1 to yield a result (also Clojure data).
- *Print* the result by converting it from data back 
- *Loop* back to the beginning.

还可以将 clj 作为 PowerShell 模块执行，方便在外部命令中调用：

```sh
# run outside powershell
powershell -command clj 
# With command line argument:
powershell -command clj '-J"-Dfile.encoding=UTF-8"'

# Escaping quotes can be a bit tricky. Here is the same command in different shells:
# PowerShell
clj -Sdeps '{:deps {viebel/klipse-repl {:mvn/version ""0.2.3""}}}' -m klipse-repl.main
# Command Prompt
powershell -command clj -Sdeps '{:deps {viebel/klipse-repl {:mvn/version """"""0.2.3""""""}}}' -m klipse-repl.main
# Git Bash
powershell -command 'clj -Sdeps "{:deps {viebel/klipse-repl {:mvn/version """"0.2.3""""}}}" -m klipse-repl.main'
```

	Usage:
	  Start a REPL   clj     [clj-opt*] [-Aaliases] [init-opt*]
	  Exec fn(s)     clojure [clj-opt*] -X[aliases] a/fn? [kpath v]* kv-map?
	  Run tool       clojure [clj-opt*] -T[name|aliases] a/fn [kpath v] kv-map?
	  Run main       clojure [clj-opt*] -M[aliases] [init-opt*] [main-opt] [arg*]
	  Prepare        clojure [clj-opt*] -P [other exec opts]

	exec-opts:
	  -Aaliases      Use concatenated aliases to modify classpath
	  -X[aliases]    Use concatenated aliases to modify classpath or supply exec fn/args
	  -T[name|aliases]  Invoke tool by name or via aliases ala -X
	  -M[aliases]    Use concatenated aliases to modify classpath or supply main opts
	  -P             Prepare deps - download libs, cache classpath, but don't exec

	clj-opts:
	  -Jopt          Pass opt through in java_opts, ex: -J-Xmx512m
	  -Sdeps EDN     Deps data to use as the final deps file
	  -Spath         Compute classpath and echo to stdout only
	  -Spom          Generate (or update) pom.xml with deps and paths
	  -Stree         Print dependency tree
	  -Scp CP        Do NOT compute or cache classpath, use this one instead
	  -Srepro        Use only the local deps.edn (ignore other config files)
	  -Sforce        Force recomputation of the classpath (don't use the cache)
	  -Sverbose      Print important path info to console
	  -Sdescribe     Print environment and command parsing info as data
	  -Sthreads      Set specific number of download threads
	  -Strace        Write a trace.edn file that traces deps expansion
	  --             Stop parsing dep options and pass remaining arguments to clojure.main
	  --version      Print the version to stdout and exit
	  -version       Print the version to stderr and exit

	init-opt:
	  -i, --init path     Load a file or resource
	  -e, --eval string   Eval exprs in string; print non-nil values
	  --report target     Report uncaught exception to "file" (default), "stderr", or "none"

	main-opt:
	  -m, --main ns-name  Call the -main function from namespace w/args
	  -r, --repl          Run a repl
	  path                Run a script from a file or resource


## ==⚡ Clojure Lisp Basic
- https://clojure.org/reference/repl_and_main
- https://clojure.org/guides/learn/syntax
- https://clojure.org/guides/deps_and_cli#local_jar
- https://clojuredocs.org/clojure.core

Lisp 语法的一般形式：任何语句的一般形式需要在大括号中求值，如下面的示例所示加法:

```clj
; Consider a Clojure expression:
(+ 1 2)
```

上面语句的要素，Structure vs Semantics：

- () 圆括号表示一个 *List*，也是一个函数的调用符号，*Invocation*；
- + 是一个 *Symbol*，加号运算符表示一个加法函数，*Function*；
- 1、2 都是 *Number*，作为函数的参数，*Arguments*；

List 也就是 Lisp - List Processing Language 这门语言的第一公民。

另一个例子，str 是用于连接两个字符串的运算符：

	(str "Hello" "World")


REPL 环境中，可以使用特殊的 clojure.core 变量来引用前面表达式输出的结果：

- `*1` (the last result)
- `*2` (the result two expressions ago)
- `*3` (the result three expressions ago)

```clj
user=> (+ 3 4)
7
user=> (+ 10 *1)
17
user=> (+ *1 *2)
24
```

在 REPL 环境中会自动加载 clojure.repl 命名空间的辅助函数，如 *doc*, *find-doc*, *apropos*, *source*, *dir*，这是 Standard Clojure Library 基础功能。在 clj 脚本文件中，就需要先加载再使用。

例如，查询 clojure.core/+ 函数的文档：

```clj
(require '[clojure.repl :refer :all])

(doc +)
; (find-doc "doc")
; (dir clojure.repl)
; (source dir)
-------------------------
clojure.core/+
([] [x] [x y] [x y & more])
  Returns the sum of nums. (+) returns 0. Does not auto-promote
  longs, will throw on overflow. See also: +'
```

Clojure provides several functions for printing values:

|                 | For humans | Readable as data |
|-----------------|------------|------------------|
| With newline    | println    | prn              |
| Without newline | print      | pr               |

使用 def 在当前命名空间定义符号，如下定义 symbol (x) 和 symbol (y)：

```clj
(def x 7) ; #'user/x
(def y (+ 1 2 3))

(println x)
(println y)
```

## ==⚡ Opertors

LISP 一般没有运算优先级问题，所有函数从左到右和从内到外，这是 S 表达式和前缀符号的好处之一。

Clojure 中的运算符只是函数，并且一切都完全括起来。

算术运算符：

| 操作 |           例           |                描述               |
|------|------------------------|-----------------------------------|
| +    | (+ 1 2)   => 3         | 两个操作数相加                    |
| -    | (- 2 1)   => 1         | 从第一个操作数中减去第二个操作数  |
| *    | (* 2 2)   => 4         | 两个操作数的乘法                  |
| /    | (float (/ 3 2)) => 1.5 | 分子除以分母                      |
| inc  | inc 5     => 6         | 用于将操作数的值增加1的增量运算符 |
| dec  | dec 5     => 4         | 用于将操作数的值减1的增量运算符   |
| max  | max 1 2 3 => 3         | 返回其最大值的参数                |
| min  | min 1 2 3 => 1         | 返回其最小值的参数                |
| rem  | rem 3 2   => 1         | 将第一个数除以第二个数的余数      |


关系运算符允许比较对象：

| 操作者 |         例          |                  描述                  |
|--------|---------------------|----------------------------------------|
| =      | (= 2 2) => true     | 测试两个对象之间的相等性               |
| not=   | (not = 3 2) => true | 测试两个对象之间的差异                 |
| <      | (< 2 3) => true     | 检查左对象是否小于右对象正确的运算符   |
| <=     | (<= 2 3) => true    | 检查左对象是否小于或等于右对象的运算符 |
| >      | (> 3 2) => true     | 检查左对象是否大于右对象的运算符       |
| >=     | (>= 3 2) => true    | 检查左对象是否大于或等于右对象的运算符 |


逻辑运算符用于计算布尔表达式：

| 操作者 |            例             |     描述     |
|--------|---------------------------|--------------|
| and    | (and true false) => false | 逻辑“与”运算 |
| or     | (or true true) => true    | 逻辑“或”运算 |
| not    | (not false) => true       | 逻辑“非”运算 |

Bit-wise 运算符：

| 运算符  |          运算符说明           |
|---------|-------------------------------|
| bit-and | 位“与”运算符                  |
| bit-or  | 位“或”运算符                  |
| bit-xor | 位“xor”或 Exclusive or 运算符 |
| bit-not | 位取反运算符                  |


## ==⚡ Date Types
- https://clojure.org/guides/learn/functions
- https://clojure.org/reference/sequences
- https://clojure.org/reference/datatypes
- https://clojure.org/reference/data_structures
- https://clojure.org/reference/java_interop

Clojure 数据类型：

- *Integers* - 整数:
	- *Decimal Integers* (Short, Long, Int) 十进制，例如，1234。
	- *Octal Numbers* 八进制表示中的数字，例如，012。
	- *Hexadecimal Numbers* 十六进制，例如，0xff。
	- *Radix Numbers* 基数表示的数字。 例如，2r1111，其中基数是 [2, 36] 之间的整数。
- *Floating point*：
	- 默认值用于表示 32 位浮点数。 例如，12.34。
	- 另一种表示是科学记数法。 例如，1.35e-12。
- *char* 单个字符文字，用反向间隔符号定义。 例如，'/ e'。
- *Boolean* 布尔值，可以是 true 或 false。
- *String* 字符串文本，例如，"Hello World"。
- *Nil* 表示 NULL 值。
- *Atom* 提供了一种管理共享，同步，独立状态的方法。 它们是引用类型，如 refs 和 vars。

Clojure Numbers 数据类型派生自 Java 类，主要包括整形和浮点两类，Byte、Short、Integer、Long、Float、Double。


```clj
; Character types
"hello"         ; string
\e              ; character
#"[0-9]+"       ; regular expression

; Numeric types
42        ; integer
-1.5      ; floating point
22/7      ; ratio

; Symbols and idents
map             ; symbol
+               ; symbol - most punctuation allowed
clojure.core/+  ; namespaced symbol
nil             ; null value
true false      ; booleans
:alpha          ; keyword
:release/alpha  ; keyword with namespace

; Literal collections
; Clojure also includes literal syntax for four collection types:

'(1 2 3)     ; list
[1 2 3]      ; vector
#{1 2 3}     ; set
{:a 1, :b 2} ; map
```

使用 Java 的数据类型，调用构造器进行实例化，通过静态成员可以获取取值范围及占用内存字节：

```clj
(Byte. "127") 	; java.lang.Byte [-128, 127]
(Short. "1") 	; java.lang.Short [-32768, 32768]
(Integer. 1)	; java.lang.Integer
(Long.    1) 	; java.lang.Long
(Float.  1.) 	; java.lang.Float
(Double. 1.) 	; java.lang.Double

user=> (Integer/MIN_VALUE)
-32768
user=> (Integer/MAX_VALUE)
32767
user=> (Integer/SIZE)
16

user=>
(Integer/MIN_VALUE)
(Integer/MAX_VALUE)
(Integer/SIZE)
user=> -2147483648
user=> 2147483647
user=> 32
```

## ==⚡ Functions
- https://clojure.org/guides/learn/functions
- https://clojure.org/reference/macros
- https://clojure.org/reference/other_functions
- https://clojure.org/reference/java_interop

内容概要：

- Creating Functions
	- Multi-arity functions
	- Variadic functions
	- Anonymous Functions
	- defn vs fn
	- Anonymous function syntax
	- Gotcha
- Applying Functions - apply
- Locals and Closures - let - Closures
- Java Interop
	- Invoking Java code
	- Java Methods vs Functions


使用 defn 定义函数，可以定义多层函数体相当于重载函数，格式为 `([param*] body*)`。

可变参数函数 Variadic functions 使用 & 符号，后面指定一个 List 变量名。

例如定义一个 greet 用于连接 "Hello, " 文本：

```clj
; defn defines a named function:
;;    name   params         body
;;    -----  ------  -------------------
(defn greet  [name]  (str "Hello, " name) )

; Multi-arity functions
(defn messenger
  ([]     (messenger "Hello world!"))
  ([msg]  (println msg)))

; Variadic functions
; The beginning of the variable parameters is marked with &.
(defn hello [greeting & who]
  (println greeting who))

; Anonymous Functions
; An anonymous function can be created with fn:
;;    params         body
;;   ---------  -----------------
(fn  [message]  (println message) )
```

使用 fn 定义匿名函数，Anonymous Functions，因为它没有为函数绑定一个名称。

defn vs fn 两者的差别就在于名称绑定，可以使用 def 为匿名函数绑定一个符号，这相价于 defn。 

```clj
(defn greet [name] (str "Hello, " name))

(def greet (fn [name] (str "Hello, " name)))
```

匿名函数还可以简化表达为 #()，参数列表省略，函数体中根据参数序号来引用参数：

- `%` is used for a single parameter
- `%1`, `%2`, `%3`, etc are used for multiple parameters
- `%&` is used for any remaining (variadic) parameters

不允许嵌套匿名函数 Nested anonymous functions，因为会导致参数序号混淆。

```clj
;; Equivalent to: (fn [x] (+ 6 x))
#(+ 6 %)

;; Equivalent to: (fn [x y] (+ x y))
#(+ %1 %2)

;; Equivalent to: (fn [x y & zs] (println x y zs))
#(println %1 %2 %&)
```

一个常见的需求是一个匿名函数，它接受一个元素并将其包装在一个向量中。注意，不要使用 `#([%])` 这样的写法。

```clj
;; Instead do this:
#(vector %)

;; or this:
(fn [x] [x])

;; or most simply just the vector function itself:
vector
```

使用 apply 可以调用函数并传递一个参数列表：

```clj
(apply f '(1 2 3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 '(2 3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 2 '(3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 2 3 '(4))    ;; same as  (f 1 2 3 4)
```

使用 let 可以定义局部的词法作用域变量，lexical scope，它们优先于外部变量：

```clj
;;      bindings     name is defined here
;;    ------------  ----------------------
(let  [name value]  (code that uses name))

; Each let can define 0 or more bindings and can have 0 or more expressions in the body.
(let [x 1
      y 2]
  (+ x y))

(defn messenger [msg]
  (let [a 7
        b 5
        c (clojure.string/capitalize msg)]
    (println a b c)
  ) ;; end of let scope
) ;; end of function
```

The messenger function takes a *msg* argument. Here the defn is also creating lexical scope for *msg* - it only has meaning within the messenger function.

Within that function scope, the let creates a new scope to define a, b, and c. If we tried to use a after the let expression, the compiler would report an error.

The *fn* special form creates a "closure". It "closes over" the surrounding lexical scope (like msg, a, b, or c above) and captures their values beyond the lexical scope.


Java Interop 与 Java 代码交互：

Invoking Java code，从 Clojure 调用 Java 代码约定总结如下：

|       Task      |        Java       |     Clojure      |
|-----------------|-------------------|------------------|
| Instantiation   | new Widget("foo") | (Widget. "foo")  |
| Instance method | rnd.nextInt()     | (.nextInt rnd)   |
| Instance field  | object.field      | (.-field object) |
| Static method   | Math.sqrt(25)     | (Math/sqrt 25)   |
| Static field    | Math.PI           | Math/PI          |

Java Methods vs Functions，Java 方法不是 Clojure 函数，不可以存储或者将它们作为参数传递，但可以在函数中包装它们。

```clj
;; make a function to invoke .length on arg
(fn [obj] (.length obj))

;; same thing
#(.length %)
```

## ==⚡ Sequential Collections
- https://clojure.org/guides/learn/sequential_colls

内容概要：

- Vectors
	- Indexed access
	- count
	- Constructing
	- Adding elements
	- Immutability
- Lists
	- Constructing
	- Adding elements
	- Stack access

向量 Vectors 使用方括号表示，如 `[1 2 3]`，可以使用各种方法来访问，或者使用 vector 方法构造向量：

```clj
; Constructing
; In addition to the literal [ ] syntax, Clojure vectors can be created with the vector function:
user=> (vector 1 2 3)
[1 2 3]

; Indexed access
user=> (get ["abc" false 99] 0)
"abc"
user=> (get ["abc" false 99] 1)
false
user=> (get ["abc" false 99] 14)
nil

; count
; All Clojure collections can be counted:
user=> (count [1 2 3])
3

; Adding elements
; Elements are added to a vector with conj (short for conjoin). 
; Elements are always added to a vector at the end:
user=> (conj [1 2 3] 4 5 6)
[1 2 3 4 5 6]

; Immutability
; Clojure collections share important properties of simple values like strings and numbers,
; such as immutability and equality comparison by value.
; For example, lets create a vector and modify it with conj.
; Here conj returned a new vector but if we examine the original vector, we see it’s unchanged:
user=> (def v [1 2 3])
#'user/v
user=> (conj v 4 5 6)
[1 2 3 4 5 6]
user=> v
[1 2 3]
```

列表 Lists 是连续的链表结构，新元素位于链表头部，而向量的新添加的元素位于末尾。

链表结构不像向量，不能进行索引来获取元素，只能逐个枚举链表的元素，使用 first 和 reset 方法，或者使用 peek 和 pop 方法，像栈数据结构一样，但原始数据不变。

添加元素时，链表和向量一样确保时间复杂度为 O(1)，所以新元素直接添加头部。

因为列表会将第一个元素作为函数进行调用，所以定义列表时，需要使用单引号避免函数调用。

```clj
; Constructing
; Because lists are evaluated by invoking the first element as a function, 
; we must quote a list to prevent evaluation:
(def cards '(10 :ace :jack 9))

; Lists are not indexed so they must be walked using first and rest.
user=> (first cards)
10
user=> (rest cards)
'(:ace :jack 9)

; Adding elements
; conj can be used to add elements to a list just as with vectors.
; However, conj always adds elements where it can be done in constant time 
; for the data structure. In the case of lists, elements are added at the front:
user=> (conj cards :queen)
(:queen 10 :ace :jack 9)

; Stack access
; Lists can also be used as a stack with peek and pop:
user=> (def stack '(:a :b :c))
#'user/stack
user=> (peek stack)
:a
user=> (pop stack)
(:b :c)
```

## ==⚡ Hashed Collections
- https://clojure.org/guides/learn/hashed_colls

内容概要：

- Sets
	- Adding to a set
	- Removing from a set
	- Checking containment
	- Sorted sets
	- into
- Maps
	- Creating a literal map
	- Adding new key-value pairs
	- Removing key-value pairs
	- Looking up by key
	- Looking up with a default
	- Checking contains
	- Keys or values
	- Building a map
	- Combining maps
	- Sorted maps
- Representing application domain information
	- Field accessors
	- Updating fields
	- Removing a field
	- Nested entities
	- Records

Clojure 的 4 种关键集合类型中，vectors, lists, sets, maps，后面两个是哈希数据结构，用于实现快速查找数据，时间复杂度为常量 O(1)，不会随数据的增加而变慢。 

集合 Sets 和数学概念非常像，元素具有无序、不重复的特点。可以快速检测是否包含指定元素，以及从集合移除指定元素。

```clj
; Sets
; Sets are like mathematical sets - unordered and with no duplicates. 
; Sets are ideal for efficiently checking whether a collection contains 
; an element, or to remove any arbitrary element.
(def players #{"Alice", "Bob", "Kelly"})

; Adding to a set
; As with vectors and lists, conj is used to add elements.
user=> (conj players "Fred")
#{"Alice" "Fred" "Bob" "Kelly"}

; Removing from a set
; The disj ("disjoin") function is used to remove one or more elements from a set.
user=> (disj players "Bob" "Sal")
#{"Alice" "Kelly"}

; Checking containment
user=> (contains? players "Kelly")
true

; Sorted sets
; Sorted sets are sorted according to a comparator function which can compare 
; two elements. By default, Clojure’s compare function is used, which sorts 
; in "natural" order for numbers, strings, etc.
; A custom comparator can also be used with sorted-set-by.
user=> (conj (sorted-set) "Bravo" "Charlie" "Sigma" "Alpha")
#{"Alpha" "Bravo" "Charlie" "Sigma"}

; into
; into is used for putting one collection into another.
; into returns a collection of the same type as its first argument.
user=> (def players #{"Alice" "Bob" "Kelly"})
user=> (def new-players ["Tim" "Sue" "Greg"])
user=> (into players new-players)
#{"Alice" "Greg" "Sue" "Bob" "Tim" "Kelly"}
```

映射 Maps 有两个主要应用，基于键值对的关联管理数据，或表示域应用程序数据。前者，在其它语言中作为字典或哈希映射。

映射使用花括号，元素之间可以使用逗号，但 Clojure 当其为空白字符看待，只是提高可读性。

```clj
; Creating a literal map
; Maps are represented as alternating keys and values surrounded by { and }.
(def scores {"Fred"  1400
             "Bob"   1240
             "Angela" 1024})
;; same as the last one!
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})
(def scores {"Fred" 1400 "Bob" 1240 "Angela" 1024})

; Adding new key-value pairs
; New values are added to maps with the assoc (short for "associate") function:
user=> (assoc scores "Sally" 0)
{"Angela" 1024, "Bob" 1240, "Fred" 1400, "Sally" 0}
; If the key used in assoc already exists, the value is replaced.
user=> (assoc scores "Bob" 0)
{"Angela" 1024, "Bob" 0, "Fred" 1400}

; Removing key-value pairs
; The complementary operation for removing key-value pairs is dissoc ("dissociate"):
user=> (dissoc scores "Bob")
{"Angela" 1024, "Fred" 1400}

; Looking up by key
; There are several ways to look up a value in a map. The most obvious is the function get:
user=> (get scores "Angela")
1024

; When the map in question is being treated as a constant lookup table, 
; its common to invoke the map itself, treating it as a function:
user=> (def directions {:north 0
                        :east 1
                        :south 2
                        :west 3})
#'user/directions

user=> (directions :north)
0

; You should not directly invoke a map unless you can guarantee it will be non-nil:

user=> (def bad-lookup-map nil)
#'user/bad-lookup-map

user=> (bad-lookup-map :foo)
Execution error (NullPointerException) at user/eval154 (REPL:1).
null

; Looking up with a default
; If you want to do a lookup and fall back to a default value when the key is not found, 
; specify the default as an extra parameter:
user=> (get scores "Sam" 0)
0
user=> (directions :northwest -1)
-1

; Checking contains
; There are two other functions that are helpful in checking whether a map contains an entry.
; The contains? function is a predicate for checking containment. 
; The find function finds the key/value entry in a map, not just the value.

user=> (contains? scores "Fred")
true

user=> (find scores "Fred")
["Fred" 1400]

; Keys or values
; You can also get just the keys or just the values in a map:
; While maps are unordered, there is a guarantee that keys, vals, and other functions 
; that walk in "sequence" order will always walk a particular map instance entries 
; in the same order.
user=> (keys scores)
("Fred" "Bob" "Angela")

user=> (vals scores)
(1400 1240 1024)

; Building a map
; The zipmap function can be used to "zip" together two sequences (the keys and vals) into a map:
user=> (def players #{"Alice" "Bob" "Kelly"})
#'user/players

user=> (zipmap players (repeat 3 0))
{"Kelly" 0, "Bob" 0, "Alice" 0}

;; with map and into
(into {} (map (fn [player] [player 0]) players))

;; with reduce
(reduce (fn [m player]
          (assoc m player 0))
        {} ; initial value
        players)

; Combining maps
; The merge function can be used to combine multiple maps into a single map:
; We merged two maps here but you can pass more as well.
user=> (def new-scores {"Angela" 300 "Jeff" 900})
#'user/new-scores
user=> (merge scores new-scores)
{"Fred" 1400, "Bob" 1240, "Jeff" 900, "Angela" 300}

; If both maps contain the same key, the rightmost one wins. 
; Alternately, you can use merge-with to supply a function to invoke when there is a conflict:
; In the case of a conflict, the function is called on both values to get the new value.

user=> (def new-scores {"Fred" 550 "Angela" 900 "Sam" 1000})
#'user/new-scores

user=> (merge-with + scores new-scores)
{"Sam" 1000, "Fred" 1950, "Bob" 1240, "Angela" 1924}


; Sorted maps
; Similar to sorted sets, sorted maps maintain the keys in sorted order based on a comparator, 
; using compare as the default comparator function.

user=> (def sm (sorted-map
         "Bravo" 204
         "Alfa" 35
         "Sigma" 99
         "Charlie" 100))
{"Alfa" 35, "Bravo" 204, "Charlie" 100, "Sigma" 99}

user=> (keys sm)
("Alfa" "Bravo" "Charlie" "Sigma")

user=> (vals sm)
(35 204 100 99)
```

映射的另一个应用就是表达应用的域信息，Representing application domain information。


```clj
; When we need to represent many domain information with the same set of fields known in advance, 
; you can use a map with keyword keys.
(def person
  {:first-name "Kelly"
   :last-name "Keen"
   :age 32
   :occupation "Programmer"})

; Field accessors
; Since this is a map, the ways we’ve already discussed for looking up a value by key also work:
user=> (get person :occupation)
"Programmer"

user=> (person :occupation)
"Programmer"

; But really, the most common way to get field values for this use is by invoking the keyword. 
; Just like with maps and sets, keywords are also functions. When a keyword is invoked, 
; it looks itself up in the associative data structure that it was passed.

user=> (:occupation person)
"Programmer"

; Keyword invocation also takes an optional default value:
user=> (:favorite-color person "beige")
"beige"

; Updating fields
; Since this is a map, we can just use assoc to add or modify fields:
user=> (assoc person :occupation "Baker")
{:age 32, :last-name "Keen", :first-name "Kelly", :occupation "Baker"}

; Removing a field
; Use dissoc to remove fields:
user=> (dissoc person :age)
{:last-name "Keen", :first-name "Kelly", :occupation "Programmer"}

; Nested entities
; It is common to see entities nested within other entities:
(def company
  {:name "WidgetCo"
   :address {:street "123 Main St"
             :city "Springfield"
             :state "IL"}})

; You can use get-in to access fields at any level inside nested entities:
user=> (get-in company [:address :city])
"Springfield"

; You can also use assoc-in or update-in to modify nested entities:
user=> (assoc-in company [:address :street] "303 Broadway")
{:name "WidgetCo",
 :address
 {:state "IL",
  :city "Springfield",
  :street "303 Broadway"}}

; Records
; An alternative to using maps is to create a "record". Records are designed specifically 
; for this use case and generally have better performance. In addition, they have a named 
; "type" which can be used for polymorphic behavior (more on that later).

; Records are defined with the list of field names for record instances. 
; These will be treated as keyword keys in each record instance.

;; Define a record structure
(defrecord Person [first-name last-name age occupation])

;; Positional constructor - generated
(def kelly (->Person "Kelly" "Keen" 32 "Programmer"))

;; Map constructor - generated
(def kelly (map->Person
             {:first-name "Kelly"
              :last-name "Keen"
              :age 32
              :occupation "Programmer"}))

; Records are used almost exactly the same as maps, with the caveat that they cannot be invoked 
; as a function like maps.
user=> (:occupation kelly)
"Programmer"
```

## ==⚡ Flow Control
- https://clojure.org/guides/learn/flow

内容概要：

- Statements vs. Expressions
- Flow Control Expressions
	- if
	- Truth
	- if and do
	- when
	- cond
	- cond and else
	- case
	- case with else-expression
- Iteration for Side Effects
	- dotimes
	- doseq
	- doseq with multiple bindings
- Clojure’s for
- Recursion
	- Recursion and Iteration
	- loop and recur
	- defn and recur
	- recur for recursion
- Exceptions
	- Exception handling
	- Throwing exceptions
	- Exceptions with Clojure data
	- with-open

Statements vs. Expressions

In Java, expressions return values, whereas statements do not.

```java
// "if" is a statement because it doesn't return a value:
String s;
if (x > 10) {
    s = "greater";
} else {
    s = "less or equal";
}
obj.someMethod(s);

// Ternary operator is an expression; it returns a value:
obj.someMethod(x > 10 ? "greater" : "less or equal");
```

In Clojure, however, everything is an expression! Everything returns a value, and a block of multiple expressions returns the last value. Expressions that exclusively perform side-effects return *nil*.


### ===🗝 if/do/when/cond/case

```clj
; if
; if is the most important conditional expression - it consists of a condition, 
; a "then", and an "else". if will only evaluate the branch selected by the conditional.

user=> (str "2 is " (if (even? 2) "even" "odd"))
2 is even

user=> (if (true? false) "impossible!") ;; else is optional
nil

; Truth
; In Clojure, all values are logically true or false. The only "false" values are false and nil - 
; all other values are logically true.

user=> (if true :truthy :falsey)
:truthy
user=> (if (Object.) :truthy :falsey) ; objects are true
:truthy
user=> (if [] :truthy :falsey) ; empty collections are true
:truthy
user=> (if 0 :truthy :falsey) ; zero is true
:truthy
user=> (if false :truthy :falsey)
:falsey
user=> (if nil :truthy :falsey)
:falsey

; if and do
; The if only takes a single expression for the "then" and "else". 
; Use do to create larger blocks that are a single expression.
(if (even? 5)
  (do (println "even")
      true)
  (do (println "odd")
      false))

; when
; when is an if with only a then branch. It checks a condition and then evaluates 
; any number of statements as a body (so no do is required). The value of the last 
; expression is returned. If the condition is false, nil is returned.
; when communicates to a reader that there is no "else" branch.
(when (neg? x)
  (throw (RuntimeException. (str "x must be positive: " x))))

; cond
; cond is a series of tests and expressions. Each test is evaluated in order and 
; the expression is evaluated and returned for the first true test.
(let [x 5]
  (cond
    (< x 2) "x is less than 2"
    (< x 10) "x is less than 10"))

; cond and else
; If no test is satisfied, nil is returned. A common idiom is to use a final 
; test of :else. Keywords (like :else) always evaluate to true so this will 
; always be selected as a default.
(let [x 11]
  (cond
    (< x 2)  "x is less than 2"
    (< x 10) "x is less than 10"
    :else  "x is greater than or equal to 10"))

; case
; case compares an argument to a series of values to find a match. This is done
; in constant (not linear) time! However, each value must be a compile-time 
; literal (numbers, strings, keywords, etc).
; Unlike cond, case will throw an exception if no value matches.

user=> (defn foo [x]
         (case x
           5 "x is 5"
           10 "x is 10"))
#'user/foo

user=> (foo 10)
x is 10

user=> (foo 11)
IllegalArgumentException No matching clause: 11

; case with else-expression
; case can have a final trailing expression that will be evaluated if no test matches.

user=> (defn foo [x]
         (case x
           5 "x is 5"
           10 "x is 10"
           "x isn't 5 or 10"))
#'user/foo

user=> (foo 11)
x isn't 5 or 10
```


### ===🗝 Iteration for Side Effects

```clj
; dotimes
; Evaluate expression n times
; Returns nil

user=> (dotimes [i 3]
         (println i))
0
1
2
nil

; doseq
; Iterates over a sequence
; If a lazy sequence, forces evaluation
; Returns nil

user=> (doseq [n (range 3)]
         (println n))
0
1
2
nil


; doseq with multiple bindings
; Similar to nested foreach loops
; Processes all permutations of sequence content
; Returns nil

user=> (doseq [letter [:a :b]
               number (range 3)] ; list of 0, 1, 2
         (prn [letter number]))
[:a 0]
[:a 1]
[:a 2]
[:b 0]
[:b 1]
[:b 2]
nil
```


### ===🗝 Clojure’s for

List comprehension, not a for-loop

Generator function for sequence permutation

Bindings behave like doseq

```clj
user=> (for [letter [:a :b]
             number (range 3)] ; list of 0, 1, 2
         [letter number])
([:a 0] [:a 1] [:a 2] [:b 0] [:b 1] [:b 2])
```

### ===🗝 Recursion

Recursion and Iteration

- Clojure provides *recur* and the sequence abstraction
- *recur* is "classic" recursion
	- Consumers don’t control it, considered a lower-level facility
- Sequences represent iteration as values
	- Consumers can partially iterate
- Reducers represent iteration as function composition
	- Added in Clojure 1.5, not covered here

loop and recur

- Functional looping construct
	- *loop* defines bindings
	- *recur* re-executes *loop* with new bindings
- Prefer higher-order library functions instead

```clj
(loop [i 0]
  (if (< i 10)
    (recur (inc i))
    i))
```

defn and recur

- Function arguments are implicit loop bindings

```clj
(defn increase [i]
  (if (< i 10)
    (recur (inc i))
    i))
```

recur for recursion

- *recur* must be in "tail position"
	- The last expression in a branch
- *recur* must provide values for all bound symbols by position
	- Loop bindings
	- defn/fn arguments
- Recursion via *recur* does not consume stack


### ===🗝 Exceptions

```clj
; Exception handling
; - try/catch/finally as in Java
(try
  (/ 2 1)
  (catch ArithmeticException e
    "divide by zero")
  (finally
    (println "cleanup")))

; Throwing exceptions
(try
  (throw (Exception. "something went wrong"))
  (catch Exception e (.getMessage e)))

; Exceptions with Clojure data
; - ex-info takes a message and a map
; - ex-data gets the map back out
; 	- Or nil if not created with ex-info

(try
  (throw (ex-info "There was a problem" {:detail 42}))
  (catch Exception e
    (prn (:detail (ex-data e)))))

; with-open
(let [f (clojure.java.io/writer "/tmp/new")]
  (try
    (.write f "some text")
    (finally
      (.close f))))

;; Can be written:
(with-open [f (clojure.java.io/writer "/tmp/new")]
  (.write f "some text"))
```



## ==⚡ Namespaces
- https://clojuredocs.org/core-library
- https://clojure.org/guides/learn/namespaces
- https://clojure.org/community/libraries
- https://clojure.org/reference/libs
- https://clojure.org/reference/vars
- https://clojure.org/reference/namespaces

内容概要：

- Namespaces and names
	- Vars
	- Loading
- Declaring namespaces
	- Refer
	- require
	- Java classes and imports

命名空间是一种组织代码方式，并且为代码提供更简洁地使用符号名称的方法，还去除了符号的歧义。

具体来说，它们允许我们为函数或其他值赋予新的明确名称。这些全名自然很长，因为它们包含上下文。因此，名称空间提供了一种方法，可以明确引用其他函数和值的名称，但使用的名称较短且易于键入。

命名空间既是名称上下文，也是变量的容器。名称空间名称是用句点分隔名称空间部分的符号，例如 clojure.string，按照惯例，名称空间名称通常是小写的，句号用于分隔单词，尽管这不是必需的。



考虑下面的语句引用一个命名空间，将 clojure.set 别名化为 set，它包含了在程序中使用的各种类和方法：

```clj
user=> (require '[clojure.set :as set])
nil
user=> (dir clojure.set)
difference
index
intersection
join
map-invert
project
rename
rename-keys
select
subset?
superset?
union
nil
```

例如，上述命名空间包含称为 map-invert 的函数，用于反转键值映射。明确在程序包含这个命名空间后，才能使用这个函数。


让我们看看可用于命名空间的不同方法。

|   S.No.    |                     方法和说明                 |
|------------|-----------------------------------------------|
| *ns*       | 此 clojure.core 变量保存当前的命名空间。         |
| ns         | 创建一个新的命名空间并将其与正在运行的程序相关联。 |
| alias      | 创建一个新的命名空间并将其与正在运行的程序相关联。 |
| all-ns     | 返回所有命名空间的列表。                         |
| find-ns    | 查找并返回特定的命名空间。                       |
| ns-name    | 返回特定命名空间的名称。                         |
| ns-aliases | 返回与任何命名空间关联的别名。                   |
| ns-map     | 返回命名空间的所有映射的映射。                   |
| un-alias   | 返回仅包含键在键中的地图中的条目的地图。          |

变量是名称（符号）和值之间的关联，名称空间中的变量有一个完全限定的名称，它是名称空间名称和变量名称的组合。例如字符串连接函数完全的限定名称为 clojure.string/join。

所有变量都可以通过其完全限定名进行全局访问。按照惯例，变量的名称采用小写形式，并带有分隔的单词，尽管这也不是必需的。变量名称可能包含大多数非空白字符。

当前命令空间在 clojure.core/*ns* 记录，改变当前命名空间使用 in-ns 函数。

```clj
user=> *ns*
#object[clojure.lang.Namespace 0x4e2916c3 "user"]

user=> all-ns
#object[clojure.core$all_ns 0xae7950d "clojure.core$all_ns@ae7950d"]

(all-ns)
(
 #object[clojure.lang.Namespace 0x476a736d "clojure.core"]
 #object[clojure.lang.Namespace 0x3d43fe   "clojure.core.protocols"]
 #object[clojure.lang.Namespace 0x53e3a87a "clojure.core.server"] 
 #object[clojure.lang.Namespace 0x7e9da981 "clojure.core.specs.alpha"]
 #object[clojure.lang.Namespace 0x2822c6ff "clojure.edn"] 
 #object[clojure.lang.Namespace 0x3db64bd4 "clojure.instant"]
 #object[clojure.lang.Namespace 0x676ff3b0 "clojure.java.browse"]
 #object[clojure.lang.Namespace 0x40368a46 "clojure.java.io"] 
 #object[clojure.lang.Namespace 0x16c8b7bd "clojure.java.javadoc"]
 #object[clojure.lang.Namespace 0x4ed38226 "clojure.java.shell"]
 #object[clojure.lang.Namespace 0x5f80fa43 "clojure.main"]
 #object[clojure.lang.Namespace 0x35ff8fc9 "clojure.pprint"]
 #object[clojure.lang.Namespace 0x65bcf7c2 "clojure.repl"]
 #object[clojure.lang.Namespace 0x6e106680 "clojure.spec.alpha"])
 #object[clojure.lang.Namespace 0x4dafba3e "clojure.spec.gen.alpha"] 
 #object[clojure.lang.Namespace 0x74ad8d05 "clojure.string"]
 #object[clojure.lang.Namespace 0x5fb7183b "clojure.uuid"]
 #object[clojure.lang.Namespace 0x7159139f "clojure.walk"]
 #object[clojure.lang.Namespace 0x4e2916c3 "user"]
```

命名空间和路径之间的转换：

- Periods become directory separators
- Hyphens become underscores
- The file extension .clj is added

如 com.some-example.my-app 对应的加载路径为 com/some_example/my_app.clj，并搜索 JVM classpath 指定的 jar 包文件。


Declaring namespaces

多数 Clojure 文件对应一个命名空间，并且在文件顶部使用 ns 宏定义命名空间，以及依赖引用：

```clj
(ns com.some-example.my-app
  "My app example"
  (:require
    [clojure.set :as set]
    [clojure.string :as str]))
```

命名空间中的 :require 对应 require 函数，引用外部模块的命名空间，*:as* 创建别名方便使用：

- Load (or reload) the namespace
- Optionally assign an alias that can be used to refer to vars from the loaded namespace only in the scope of this namespace
- Optionally refer vars from the loaded namespace for use by unqualified name in this namespace

通常 clojure.core 核心库函数及变量自动引用到当前名称空间中，*:refer* 在当前名称空间的符号表中创建一个条目，该条目引用另一个名称空间中的变量。

clojure.core 由 ns 宏完成推荐到当前命名空间，*:refer*，如果希望在 core 中重复使用名称而不发出警告，有一些方法可以部分抑制这种情况。

Java classes and imports

在 ns 宏中使用 *:import* 可以导入 Java.lang 包中的类，以方便直接使用类名，而不必键入完整的限定名称。

以下是 examples.ns 命名空间的两种等价写法，in-ns 和 ns 两种方式：

```clj
(in-ns 'examples.ns)
	(clojure.core/refer 'clojure.core :exclude '[next replace remove])
	(require '(clojure [string :as string] [set :as set])
			 '[clojure.java.shell :as sh])
	(use '(clojure zip xml))
	(import 'java.util.Date
			'java.text.SimpleDateFormat
			'(java.util.concurrent Executors LinkedBlockingQueue))

; is equivalent to this ns declaration:
(ns examples.ns
	(:refer-clojure :exclude [next replace remove])
	(:require (clojure [string :as string] [set :as set])
				[clojure.java.shell :as sh])
	(:use (clojure zip xml))
	(:import java.util.Date
			 java.text.SimpleDateFormat
			(java.util.concurrent Executors LinkedBlockingQueue)))
```


## ==⚡ deps.edn & tools.build
- https://clojure.org/guides/deps_and_cli
- https://clojure.org/guides/tools_build
- https://clojure.org/reference/repl_and_main
- https://clojure.org/reference/compilation
- https://clojure.org/reference/deps_and_cli
- https://tomekw.com/clojure-deps-edn-a-basic-guide/
- Clojure Toolbox http://www.clojure-toolbox.com/
- Clojars - Clojure-focused Maven repository https://clojars.org/
- Maven Central - searchable repo of Java and Clojure libs https://search.maven.org/
- Clojure API v1.11 https://clojure.github.io/clojure/index.html
- Clojure Core and Contrib Library API https://clojure.github.io/index.html
- Clojure Reference Docs https://clojure.org/reference/documentation
- Clojure 1.11 Cheat Sheet (v54) https://clojure.org/api/cheatsheet


Clojure 提供了一个依赖配置 (deps.edn)，这是一个静态文本文件配置，使用 Map 数据结构！也就是说，.edn 文件中必须是一堆 key-value 配置数据，可嵌套。

有三个顶级配置项：

- `:deps` - map of lib (symbol) to coordinate
- `:paths` - vector of project source paths
- `:aliases` - map of alias name to alias data

如下，:paths 设置源代码目录，:deps 设置依赖，:aliases 设置别名数据，可以在命令行中指定别名以修改 classpath，例如 *clj -Auberjar*：

```clj
;; deps.edn
{:paths ["src/main/clojure"]
 :deps  {org.clojure/clojure {:mvn/version "1.10.1"}}
 :aliases {:test    {:extra-paths ["test/main/clojure"]
                     :extra-deps  {lambdaisland/kaocha {:mvn/version "0.0-529"}}
                     :main-opts   ["-m" "kaocha.runner"]}
           :outdated {:extra-deps {olical/depot {:mvn/version "1.8.4"}}
                      :main-opts  ["-m" "depot.outdated.main" "-a" "outdated"]}
           :uberjar {:extra-deps {uberdeps {:mvn/version "0.1.4"}}
                     :main-opts  ["-m" "uberdeps.uberjar" "--target" "target/cdeps-0.1.0.jar"]}}}
```

配合 tools.build 工具，可以实现自动化编译，这个工具是一个用于构建 Clojure 项目的函数库：

```clj
;; deps.edn
{:paths ["src"] ;; project paths
 :deps {}       ;; project deps

 :aliases
 {;; Run with clj -T:build function-in-build
  :build {:deps {io.github.clojure/tools.build {:git/tag "v0.8.1" :git/sha "7d40500"}}
          :ns-default build}}}
```

通过 clj -T 命令执行 tools.build 工具时会创建不包含项目 *:paths* 和 *:deps* 的  classpath 配置。而 -T:build 执行 *:build* 别名只使用 *:paths* 和 *:deps*，包信 deps.edn 所在的根目录。执行 clj -T 时，默认包含当前目录，在 *:paths* 指定额外的代码路径列表。

以上配置文件提供了一个 :build 命令别名，执行命令调用它 `clj -T:build jar` 时会自动克隆工具代码到 .m2 仓库目录下，并设置相应的 classpath：

- "." (added by -T)
- org.clojure/clojure (from the root deps.edn :deps) and transitive deps
- org.clojure/tools.build (from the :build alias :deps) and transitive deps

以上命令会执行构建工具的 jar 功能，并且是在 *build* 命名空间下执行，其中 `:ns-default` 指定了默认的 Clojure 命名空间以查找 classpath 中提供的 tools.build 工具函数。因为也包含当前目录，可以在根目录下提供构建程序 *build.clj*。

请注意，根路径（通过 *:build* 别名内 *:path* 指定）和构建程序本身名称空间，相对于这些路径根的完全可控，也可以将构建程序放在项目的子目录中。

Clojure 提供了一个编译函数，可以对脚本库进行 AOT 编译，Compiler 类主要有三个入口函数：

- *compile* 被 clojure.core/compile 调用
- *load* 被 clojure.core/require 和 clojure.core/use 调用
- *eval* 被 clojure.core/eval 调用

比如，命名空间 my.domain.lib 代码文件对应 my/domain/lib.clj，在 classpath 应该包含：

- 会在 *compile-path* 指定的目录下产生一个类加载器，my/domain/lib__init.class
- 命名空间下的每一个 fn 都相应生成一个类文件，例如 my/domain/lib$fnname__1234.class
- 对于 `gen-class` 定义的类，会根据指定名称产生 stub classfile

一个 `gen-class` 示例，只定义了一个空内容的 *:gen-class* 以简化结构，这个生成类只实现一个 main 静态方法：

```clj
; src/examples/hello.clj

(ns examples.hello
    (:gen-class))

(defn -main
  [greetee]
  (println (str "Hello " greetee "!")))
```

编译前确保类文件输出目录已经创建，以正确保存 Java 类文件：

	mkdir classes

设置 deps.edn 的代码路径，这些路径可以在执行 *clj -Spath* 命令时获取到：

	{:paths ["src" "classes"]}

如果没有添加源代码目录到搜索列表，在执行编译时会找不到文件：

```sh
> clj
user=> (require 'examples.hello)
Execution error (FileNotFoundException) at user/eval1 (REPL:1).
Could not locate examples/hello__init.class, examples/hello.clj or examples/hello.cljc on classpath.
```

可以手动设置 clojure.core 变量 *compile-path* 以改变类输出目录，其默认值为 "classes"：

```sh
# PowerShell
# > $spath = Get-Content "$env:UserProfile\.lein\leiningen-core\.lein-bootstrap"
# > java -cp "$spath;./src" clojure.main
# > java -cp (clj -Spath) clojure.main
> clj
Clojure 1.10.1
user=> (set! *compile-path* "./target")
user=> (compile 'examples.hello)
examples.hello
```

经过 ahead-of-time (AOT) 编译的 Clojure 脚本生成类就可以像普通的 Java 程序一样运行。Clojure 脚本总是会编译成 JVM bytecode，通常是 Just-in-time (JIT) 编译方式，而主动进行 AOT 事先编译，可以节省运行时的编译时间。而 AOT 编译通常会使用 leiningen 工具进行工程管理，而不必手动处理。

```sh
# PowerShell
> java -cp (clj -Spath) examples.hello Fred
# java -cp `clj -Spath` examples.hello Fred
Hello Fred!
```

依赖的名称设置可以在 Clojars 等站点查询，本地库需要设置为 :local/root。依赖命名空间作为 key，而版本等选项作为 value，多个依赖设置参考如下：

```clj
;; deps.edn

{
:deps {
    clojure.java-time/clojure.java-time {:mvn/version "0.3.2"}
    processing-opengl/processing-opengl {:mvn/version "1.5.1"}
    ; opencv/opencv {:mvn/version "4.0.0-0"}
    opencv/opencv {:local/root "C:\\download\\OpenCV\\opencv\\build\\java\\opencv-455.jar"}
    }
}
```

打印依赖树：

```sh
> clj -Stree
org.clojure/clojure 1.11.1
  . org.clojure/spec.alpha 0.3.218
  . org.clojure/core.specs.alpha 0.2.62
clojure.java-time/clojure.java-time 0.3.2
  . clj-tuple/clj-tuple 0.2.2
processing-opengl/processing-opengl 1.5.1
opencv/opencv C:\download\OpenCV\opencv\build\java\opencv-455.jar
```

执行已经定义的 -main 函数，需要指定命名空间，并且在项目根目录下执行命令，以 OpenCV 4.5.5 提供的示范程序为例：

	clj -M --main simple-sample.core

要求加载的动态链接库所在目录需要在 PATH 环境变量中可以搜索到，或者使用 System.load() 方法直接指定路径加载。

```clj
;;; to run this code from the terminal: "$ lein run". It will save a
;;; blurred image version of resources/images/lena.png as
;;; resources/images/blurred.png

(ns simple-sample.core
  (:import [org.opencv.core Point Rect Mat CvType Size Scalar Core]
           org.opencv.imgcodecs.Imgcodecs
           org.opencv.imgproc.Imgproc))

; (println (Core/NATIVE_LIBRARY_NAME))
; (System/loadLibrary Core/NATIVE_LIBRARY_NAME)
; (System/load "C:/opencv/build/java/x64/opencv_java455.dll")

(defn -main [& args]
  (let [lena (Imgcodecs/imread "resources/images/lena.png")
        blurred (Mat. 512 512 CvType/CV_8UC3)]
    (print "Blurring...")
    (Imgproc/GaussianBlur lena blurred (Size. 5 5) 3 3)
    (Imgcodecs/imwrite "resources/images/blurred.png" blurred)
    (println "done!")))

; (-main )
```


## ==⚡ Project & leiningen
- https://djpowell.github.io/leiningen-win-installer/
- https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md

由于 tools.build 这套函数使用起来比较麻烦，而使用 Leiningen 自动化工具就简单的多：

- https://github.com/technomancy/leiningen/releases/tag/2.9.8
- 下载 Source code (zip) 解包并重命名 leiningen-2.9.8 为 %UserProfile%\.lein
- 下载 leiningen-2.9.8-standalone.jar 并保存到 %UserProfile%\.lein\self-installs
- 添加 %UserProfile%\.lein\bin 到环境变量中，以文件执行 lein 命令

执行以下 PowerShell 命令构建 leiningen core 工程以生成 .lein-bootstrap 和 target 目录下的相关 jar 文件：

	mkdir -f $env:UserProfile\.lein\self-installs
	cd $env:UserProfile\.lein

	curl -L -O https://github.com/technomancy/leiningen/releases/download/2.9.8/leiningen-2.9.8-standalone.jar
	curl -L -O https://github.com/technomancy/leiningen/archive/refs/tags/2.9.8.zip

	tar -xvf .\2.9.8.zip leiningen-2.9.8
	mv .\leiningen-2.9.8\* .

	mkdir self-installs
	mv *.jar self-installs
	mv leiningen-2.9.8

	cd $env:UserProfile\.lein\leiningen-core; lein bootstrap

安装 Leiningen 工具后，就可以使用工程脚本文件 (project.clj) 来管理依赖等等相关内容，包括其它相关的工程设置:

- Project name
- Project description
- What libraries the project depends on
- What Clojure version to use
- Where to find source files
- What's the main namespace of the app
- and more.

工程配置 :aliases 可以指定要执行的各种 lein 命令，如以下配置可以通过 *lein bootstrap* 调用 `lein do`, `lein with-profiles`, `lein install`, `lein classpath` 等命令，后两个命令会安装 jar 包到仓库目录，以及生成 classpath 配置文件。

```clj
  :aliases {"bootstrap" ["with-profile" "base"
                       "do" "install," "classpath" ".lein-bootstrap"]}
```

其中 `lein with-profile base do install` 包含 do 高阶任务，只有成功执行前面的任务后，才会执行 do 后面的命令。

生成包的两个命令 `lein jar` 和 `lein uberjar`，差别在于后者还会生成 standalone.jar 独立可运行的包，脚本会进行 ahead-of-time (AOT) 编译。Über 是德语，above or over 的意思。

打包 jar 时，如果工程设置了 :main 指向脚本文件，那么 MANIFEST.MF 可能直接包含脚本而不是 Java 类，会提示以下警告，因为脚本需要 Main-Class: clojure.main 主类来执行：

	Warning: The Main-Class specified does not exist within the jar.

可以通过 lein classpath 生成的类库路径文件来定位 clojure.main 类所在位置，例如 clojure-1.10.3.jar。

```sh
# PowerShell
> $bootstrapfile = Get-Content "$env:UserProfile\.lein\leiningen-core\.lein-bootstrap"
> java -cp $bootstrapfile clojure.main
Clojure 1.10.3
user=>
```

	Several tasks are available:
	change              Rewrite project.clj with f applied to the value at key-or-path.
	check               Check syntax and warn on reflection.
	classpath           Write the classpath of the current project to output-file.
	clean               Removes all files from paths in clean-targets for a project
	compile             Compile Clojure source into .class files.
	deploy              Deploy jar and pom to remote repository.
	deps                Download and examine dependencies.
	do                  Higher-order task to perform other tasks in succession.
	help                Display a list of tasks or help for a given task or subtask.
	install             Install jar and pom to the local repository; typically ~/.m2.
	jar                 Package up all the project's files into a jar file.
	javac               Compile Java source files.
	new                 Generate scaffolding for a new project based on a template.
	plugin              DEPRECATED. Please use the :user profile instead.
	pom                 Write a pom.xml file to disk for Maven interoperability.
	release             Perform release tasks.
	repl                Start a repl session either with the current project or standalone.
	retest              Run only the test namespaces which failed last time around.
	run                 Run the project's -main function.
	search              Search Central and Clojars for published artifacts.
	show-profiles       List all available profiles or display one if given an argument.
	test                Run the project's tests.
	trampoline          Run a task without nesting the project's JVM inside Leiningen's.
	uberjar             Package up the project files and all dependencies into a jar file.
	update-in           Perform arbitrary transformations on your project map.
	upgrade             Upgrade Leiningen to specified version or latest stable.
	vcs                 Interact with the version control system.
	version             Print version for Leiningen and the current JVM.
	with-profile        Apply the given task with the profile(s) specified.

直接运行 lein run 就可以执行 -main 函数。

```clj
;; project.clj

(defproject simple-sample "0.1.0-SNAPSHOT"
  :pom-addition [:developers [:developer {:id "magomimmo"}
                              [:name "Mimmo Cosenza"]
                              [:url "https://github.com/magomimmoo"]]]

  :description "A simple project to start REPLing with OpenCV"
  :url "http://example.com/FIXME"
  :license {:name "Apache 2.0 License"
            :url "https://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [opencv/opencv "2.4.7"]
                 [opencv/opencv-native "2.4.7"]]
  :main simple-sample.core
  :injections [(clojure.lang.RT/loadLibrary org.opencv.core.Core/NATIVE_LIBRARY_NAME)])
```

执行 lein new 命令创建工程模板：

```sh
# Generating a project called my-stuff based on the 'app' template.
$ lein new app my-stuff

# see how it looks like using the "tree" command
$ tree -F -a --dirsfirst my-stuff/

my-stuff/
├── doc/
│   └── intro.md
├── resources/
├── src/
│   └── my_stuff/
│       └── core.clj
├── test/
│   └── my_stuff/
│       └── core_test.clj
├── CHANGELOG.md
├── .gitignore
├── .hgignore
├── LICENSE
├── project.clj
└── README.md
```

Sublime 编译工具配置 Packages\User\java.sublime-build：

```json
{
    "env": {
        "path":"C:/download/OpenCV/opencv/build/java/x64",
        "cv2":"-classpath C:/download/OpenCV/opencv/build/java/opencv-455.jar;.;",
        "lib":"-Djava.library.path=C:/download/OpenCV/opencv/build/java/x64/;",
    },
    "shell_cmd": "where javac & javac --version",
    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
    "file_regex": "source at \\((.+?):([0-9]*):?([0-9]*)\\)",
    "working_dir": "${folder:${project_path}}",
    "selector": "source.java, source.clojure, source.edn",
    "encoding":"gbk",
    "quiet": true,
    "variants":[
        {   
            "name":"lein run",
            "shell_cmd": "cd & lein run & echo DONE!",
        },
        {   
            "name":"lein pom.xml",
            "shell_cmd": "cd & ein pom & echo DONE!",
        },
        {   
            "name":"lein pom.xml [pwsh]",
            "shell_cmd": "pwsh.exe -command lein pom & echo DONE!",
        },
        {   
            "name":"lein jar [pwsh]",
            "shell_cmd": "pwsh.exe -command lein jar & echo DONE!",
        },
        {   
            "name":"lein uberjar [pwsh]",
            "shell_cmd": "pwsh.exe -command lein uberjar & echo DONE!",
        },
        {   
            "name":"lein install [pwsh]",
            "shell_cmd": "pwsh.exe -command lein install & echo DONE!",
        },
        {   
            "name":"Clojure",
            "shell_cmd": "echo clj $file & pwsh.exe -command clj -M '$file' & echo DONE!",
        },
        {   
            "name":"Clojure -M --main projec.core",
            "shell_cmd": "echo clj --main $project_base_name.core & pwsh.exe -command clj -M --main $project_base_name.core & echo DONE!",
        },
        {   
            "name":"Clojure -M --main simple-sample.core",
            "shell_cmd": "echo clj --main simple-sample.core & pwsh.exe -command clj -M --main simple-sample.core & echo DONE!",
        },
        {   
            "name":"编译运行",
            "shell_cmd": "ECHO Compiling $file_base_name.java & javac %cv2% -d . -encoding UTF-8 \"$file\" && echo Runing ... && java %cv2% %lib% \"$file_base_name\"",
        },
        {   
            "name":"运行当前类",
            "shell_cmd":" java \"$file_base_name\" "       
        },
        {   
            "name":"cmd中运行",
            "shell_cmd":" start cmd /c \"javac -encoding UTF-8 \"$file\" & java \"$file_base_name\" & pause \""  
        }
   ]
}
```


