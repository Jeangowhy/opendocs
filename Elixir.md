# Elixir
- https://elixir-lang.org/
- http://jonnyzheng.github.io/blog/2013/07/30/elixir-intro/
- [Elixir 编程入门](https://github.com/straightdave/programming_elixir)
- []()
- []()

Elixir，[ɪ'lɪksər]，意为灵丹妙药、圣水，其 logo 是一枚紫色水滴。

José Valim 开发的 Elixir 是一个基于 Erlang VM 的编程语言，它在语法上大量借鉴了 ruby 的元编程思想 meta programming，同时有一些自己的很有亮点的地方，而本身又与 Erlang 完全兼容，很好的将 Erlang 的语法缺点去除，保留了分布式的特性，是一门很有想象空间的语言。

Elixir 是基于 Exrlang 扩展出来的，但是 Elixir 生态逐渐完善，越来越多的专家开始关注这门语言，并且给予 Elixir 好评，包括 Erlang 创始人 Joe Armstrong。

Elixir 书籍参考：

- Programming Erlang 2nd edition，Erlang 设计者 Joe Armstrong 著作。
- Programming Elixir 1.2 著名的 Dave Thomas 写的。
- Metaprogramming Elixir 讲 Elixir 提供的元编程和宏。
- Programming Phoenix 讲 Phoenix Web 框架，作者是 Elixir 设计者 José Valim 本人。


对比一下 Erlang 和 Elixir 表达 atom 和变量的差别：

    {a,B,C} =  Person

    {:a,b,c} = person

人的大脑是很有趣的，他们能够模糊的处理一些事物，通常情况下可以忽略字母的大小写认为上面的 `{a B C}` 性质上是一样的东西，可谁知道 Erlang 的定义中小写和大写有这么明显的不同，a 是 atom，而 B C 是变量。

Elixir 用冒号加小写字母开始的方式来表示 atom 变量也不需要首字母大写，都是小写的。是不是让你想到了 ruby 里的 Symbol，因为只是首字母大小写的关系很容易让人区分不清，尤其是在 Tuples 这样的数据结构中和变量的区分就更不明显了。

在 Erlang 中一行的结束用句点表示，当碰到浮点数的写起来也很怪异：

    Pi = 3.14159.

问题是根据不同的控制结构还有各种各样的方式标识结束，其中包括了 `,`、 `;`、 `end`以及无符号，虽说熟了之后也知道都是代表什么意思，但写代码的时候却总是不放心想去查查看结束符有没有用对。

Elixir 处理结尾很简单，就是没有符号，和 ruby 一样，所有方法都用 end 结束 Less is More。

    def hello
        IO.puts "hello world"
    end

发送消息的语法差别就是，Erlang 使用 `!`，而 Elixir 使用 `<-` 符号。Pid 是进程，Message 是消息。

    Pid ! Message

    Process <- Message

Erlang 的字符串拼接是很麻烦的事情，尤其是想在一句话中间拼接变量的时候：

    Name = "jonny".
    Sentence = "This is " ++ Name ++ "speaking".

Elixir 借鉴了 Ruby 的表达方式，可以在双引号的字符串中连接变量：

    name = "jonny"
    sentence = "This is #{name} speaking"

Erlang、Elixir 运算符比较：

    X > Y X is greater than Y.
    X < Y X is less than Y.
    X =< Y X is equal to or less than Y.
    X >= Y X is greater than or equal to Y.
    X == Y X is equal to Y.
    X /= Y X is not equal to Y.
    X =:= Y X is identical to Y.
    X =/= Y X is not identical to Y

    a === b # strict equality (so 1 === 1.0 is false)
    a !== b # strict inequality (so 1 !== 1.0 is true)
    a == b # value equality (so 1 == 1.0 is true)
    a != b # value inequality (so 1 != 1.0 is false)
    a > b # normal comparison
    a >= b # :
    a < b # :
    a <= b # :

Elixir 的 iex 交互环境可以像 erl 一样执行代码，也可以保存到文件，使用 `elixir <filename>` 命令运行：

    iex> IO.puts "Hello World!"
    Hello World!

    iex> for n <- [1,2,3,4,5], rem(n,2) == 1, do: n*n
     
    [1, 9, 25]

    iex> [1, a] = [1, 2]
    iex> a

    iex> {:ok, [hello: a]} = {:ok, [hello: "world"]}
    iex> a
    "world"

    defmodule Fun do
      def fib(0), do: 0
      def fib(1), do: 1
      def fib(n) do
        fib(n-2) + fib(n-1)
      end
    end

    for num <- 1..1000, do: spawn fn -> IO.puts "#{num * 2}" end

    task = Task.async fn -> perform_complex_action() end
    other_time_consuming_action()
    Task.await task


Elixir Platform features

- Scalability 通过消息机制实现可伸缩

        current_process = self()

        # Spawn an Elixir process (not an operating system one!)
        spawn_link(fn ->
            send(current_process, {:msg, "hello world"})
        end)

        # Block until the message is received
        receive do
            {:msg, contents} -> IO.puts(contents)
        end


- Fault-tolerance 继承 Erlang supervisors 监督权框架实现高容错

        children = [
            TCP.Pool,
            {TCP.Acceptor, port: 4040}
        ]

        Supervisor.start_link(children, strategy: :one_for_one)


Language features

- Functional programming

        %User{name: name, age: age} = User.get("John Doe")
        name #=> "John Doe"

        def drive(%User{age: age}) when age >= 16 do
            # Code that drives a car
        end

        drive(User.get("John Doe"))
        #=> Fails if the user is under 16

- Extensibility and DSLs 可以扩展

        defmodule MathTest do
            use ExUnit.Case, async: true

            test "can add two numbers" do
                assert 1 + 1 == 2
            end
        end

- Tooling features 工具链

        $ mix new my_app
        $ cd my_app
        $ mix test
        .

        Finished in 0.04 seconds (0.04s on load, 0.00s on tests)
        1 tests, 0 failures

- Interactive development 交互开发

        $ iex
        Interactive Elixir - press Ctrl+C to exit (type h() ENTER for help)
        iex> h String.trim           # Prints the documentation for function
        iex> i "Hello, World"        # Prints information about the given data type
        iex> break! String.trim/1    # Sets a breakpoint in the String.trim/1 function
        iex> recompile               # Recompiles the current project on the fly

- Erlang compatible 兼容 Erlang

        iex> :crypto.hash(:md5, "Using crypto from Erlang OTP")
        <<192, 223, 75, 115, ...>>


作为个语言发烧友，之前接触过 Java、Erlang、PHP、JavaScript、C#、C、Python 等一大堆各种风格的编程语言。有人说，学那么多编程语言是想做翻译吗？其实事情并不那么简单。

不同的语言背后是风格截然不同的类库群、技术堆栈、生态和工具链。不同的语言针对了不同类型的问题。某些语言解决某些问题的成本会比其他语言低非常多。回归本质，学习编程语言还是为了低成本高效的解决实际的业务问题。

Java、 C 编译很慢，不适合频繁修改的项目。但是 PHP 、Node.js 修改即可见，可以极大提高开发效率。最好还能 hot-reload 就像很多前端工具一样，只要源码有一点变更，不需要刷新页面自动反应在浏览器中。Play framework 类似的自动加载功能也可以。

Elixir、Erlang 可以做到真正的任何情况下开着跑车换轮子。VM 调度线程，将计算划分为非常小的执行单元。可以支持非常多的进程。IO 阻塞可以自动释放资源。真正的抢占式调度。

项目构建、编译、测试工具比较完善。

比如 Java、Scala 项目的 maven、sbt 。Erlang 项目可以用 rebar ，但是 Elixir 的 mix 友好的很多倍。
另外一个好的 REPL 命令行工具非常重要，因为这可以方便的侵入应用进行调试，或者测试一条代码片段。
比如 PHP 的 php -a, sbt, Clojure 的 lein, Erlang 的 erl, Elixir 的 iex 等等。

脚本语言的一大优势，小任务可以立刻创建一个脚本执行，而不需要修改、编译部署现有运行的应用。
这点对于小任务非常重要。Erlang 和 Elixir 都支持这样运行，escript 或者 Elixir 脚本。比如，连接到集群，读取状态或者进行一次性的数据操作，然后断开。

Erlang 的优点 Elixir 完全具备。比如：真正的抢占式调度；充分利用多核心并行执行；Actor 模型；监控树；透明的分布式；极其高的稳定性；代码的热更新部署；函数式编程；模式匹配；等等。并且很多 Erlang 下工具也是可以直接使用。比如 entop 。

另外 Elixir 比 Erlang 多出的好处在于更加友好的语法、工具链、社群。很多之前写 Ruby 的开始写 Elixir，因为他们的语法最接近。

quote 将代码变成 AST，很像 LISP 语法。

    quote do: 1 + 2

执行 quote 的表达式

    Code.eval_quoted(quote do: 1 + 2)

unquote 用来引用 quote 范围之外的变量

    number = 13
    Macro.to_string(quote do: 11 + unquote(number))

Tip: Erlang Elixir Akka 都需要注意不要让某一个 Actor 的 Queue 积压过多消息成为系统瓶颈。监控 Queue 长度非常必要。


Elixir 成熟的工具链

- mix：项目创建、构建，依赖管理工具，与 Hex 高度集成
- hex：可以和 npm 媲美的依赖和库管理系统
- iex: 类似 Erlang 的 erl 既是 EPRL 又是应用启动命令
- exunit: 单元测试工具
- elixir 脚本执行工具
- elixirc 编译工具

Erlang、Elixir 一些有用的工具和库

- entop 监控 Elixir 应用状态
- gproc
- :observer.start()
- rebar



## Elixir Mix Tasks & Archive
- [Introduction to mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html)
- [ExUnit.DocTest](https://hexdocs.pm/ex_unit/ExUnit.DocTest.html)
- [ExUnit.Case](https://hexdocs.pm/ex_unit/ExUnit.Case.html)
- [Elixir Mix](https://hexdocs.pm/mix/Mix.html)
- [Mix New](https://hexdocs.pm/mix/Mix.Tasks.New.html)
- [Mix Archive](https://hexdocs.pm/mix/Mix.Tasks.Archive.html)
- [Umbrella Projects](https://elixirschool.com/en/lessons/advanced/umbrella-projects/)
- [Elixir School Mix](https://elixirschool.com/en/lessons/basics/mix/)
- []()

Mix 是 Elixir 提供的项目创建、构建，依赖管理工具，与 Hex 高度集成，还可以基于它的 Mix.Tasks 扩展开发脚手架工具。

工程通过扩展 Mix Tasks 可以实现自己的工具，例如，`lib/mix/tasks/hello.ex` 一个打印消息的扩展，通过 `mix hello` 执行：

    defmodule Mix.Tasks.Hello do
      use Mix.Task

      # @impl Mix.Task
      @shortdoc "Simply runs the Hello run/0 command."
      def run(args) do
        Mix.shell().info(["Hello ", Enum.join(args, " ")])
      end
    end

注意，实现 Mix.Task 扩展的模块要保存上面指定的目录下，目录不能随意指定，模块名也要使用 Mix.Tasks 前缀。`@shortdoc` 定义了 `mix help` 中显示的信息，编译后就会在列表中显示。

Mix 有一个 archive 扩展方式，即小工程实现的扩展： 

    > mix help
    mix                   # Runs the default task (current: "mix run")
    mix app.start         # Starts all registered apps
    mix archive           # Lists all archives
    mix archive.build     # Archives this project into a .ez file
    mix archive.install   # Installs an archive locally
    mix archive.uninstall # Uninstalls archives

上面的自定义的 Hello 可以通过 `mix archive.build` 打包，然后再安装到本地中。默认的 Archives 安装到 `~/.mix/archives`，Windows 系统则安装在 `c:/Users/xxx/.mix/archives`：

    >mix archive
    * hex-0.20.5
    * phx_new-1.5.3
    Archives installed at: c:/Users/XXX/.mix/archives

    >mix archive.build
    Generated archive "kv-0.1.0.ez" with MIX_ENV=dev

    >mix archive.install kv-0.1.0.ez
    Are you sure you want to install "kv-0.1.0.ez"? [Yn] y
    * creating c:/Users/XXX/.mix/archives/kv-0.1.0

    >mix archive
    * hex-0.20.5
    * kv-0.1.0
    * phx_new-1.5.3
    Archives installed at: c:/Users/XXX/.mix/archives

安装完后，就可以像其它工具一样使用 `mix help`。


使用 mix new 来创建工程：

    mix new PATH [--app APP] [--module MODULE] [--sup] [--umbrella]

Umbrella Projects 表示大工程目录结构，它会创建一个 apps 子目录用来存放程序。由于 Elixir 中
一个应用的粒度比较小，如果任由每个应用分开管理，则随着项目复杂度的逐渐增大，应用之间的依赖
关系也将失去控制。为了能妥善地管理应用之间的依赖，Mix 专门使用 apps 目录来管理应用。

使用 Mix 命令创建工程，它会创建一个 kv 目录。这里设置一个 MKV 模块，作为可选项，不指定 --module 则以工程名为模块名：

    >mix new kv --module MKV
    * creating README.md
    * creating .formatter.exs
    * creating .gitignore
    * creating mix.exs
    * creating lib
    * creating lib/mkv.ex
    * creating test
    * creating test/test_helper.exs
    * creating test/mkv_test.exs

    Your Mix project was created successfully.
    You can use "mix" to compile it, test it, and more:

        cd kv
        mix test

    Run "mix help" for more commands.


Mix 管理的工程会有一个 `mix.exs` 脚本文件，是用来配置工程的：

    defmodule KV.MixProject do
      use Mix.Project

      def project do
        [
          app: :kv,
          version: "0.1.0",
          elixir: "~> 1.9",
          start_permanent: Mix.env == :prod,
          deps: deps()
        ]
      end

      # Run "mix help compile.app" to learn about applications
      def application do
        [
          extra_applications: [:logger]
        ]
      end

      # Run "mix help deps" to learn about dependencies
      defp deps do
        [
          # {:dep_from_hexpm, "~> 0.3.0"},
          # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"},
        ]
      end
    end

它定义了 project 函数，对编译器提供工程信息。而 application 函数则用来生成 `.app` 应用程序元数据文件。


执行命令编译工程，它会在 `_build` 目录下生成结果：

    $ cd kv
    $ mix compile
    Compiling 1 file (.ex)
    Generated kv app

在生成目录下有程序元数据文件 ebin/kv.app，有它 Elixir 就知道如何运行程序了。

在工程目录下执行 iex：

    >iex -S mix
    Interactive Elixir (1.10.3) - press Ctrl+C to exit (type h() ENTER for help)
    iex(1)> pwd
    c:/coding/elixir/kv
    iex(2)> recompile()
    :noop
    iex(3)> recompile()
    Compiling 1 file (.ex)
    :ok

运行单元测试：

    >mix test
    Compiling 1 file (.ex)
    ..

    Finished in 0.04 seconds
    1 doctest, 1 test, 0 failures

    Randomized with seed 263000

也可以在 iex 中运行 `mkv_test.exs` 单元测试脚本，执行 `ExUnit.start()` 函数就可以启动单元测试模块：

    defmodule MKVTest do
      use ExUnit.Case
      doctest MKV

      test "greets the world" do
        assert MKV.hello() == :World
      end
    end

注意，使用 ExUnit.Case 单元测试用例模块时，还可以设置异步测试方式，其它功能参考文档： 

    # Use the module
    use ExUnit.Case, async: true

    setup do
        {:ok, pid} = KV.start_link()
        {:ok, pid: pid}
    end

单元测试发现有趣的宏 `doctest MKV` 表示对 MKV 模块的文档也进行测试，如果文档和 `mkv.ex` 模块中的函数实际表现不一致也会失败：

    defmodule MKV do
      @moduledoc """
      Documentation for `MKV`.
      """

      @doc """
      Hello world.

      ## Examples

          iex> MKV.hello()
          :World

      """
      def hello do
        :World
      end
    end

注意 `iex> MKV.hello()` 这里表示执行了一个函数，后一行表示一个返回值，如果这个返回值与真实值不匹配，测试就会失败。

文档测试使用的语法请参考 ExUnit.DocTest，它是 Python doctest 的相似实现。


Elixir 还提供了自动格式化代码功能 Automatic code formatting，可以通过 `.formatter.exs` 脚本进行配置，执行格式化命令如下：

    mix format
    mix format --check-formatted

大数编辑器提供了内置的格式化功能，如 Sublime 在保存时就可以对代码进行格式化。

Mix 提供了环境概念，允许开发者进行设置：

- :dev  - 通常执行 Mix tasks 时使用，如编译，即开发模式；
- :test - 通常在 mix test 单元测试使用；
- :prod - 通常在产品发布上线使用，即生产模式 production；

可以在命令行设置这些模式，也可以在 mix.exs 脚本文件中设置 `start_permanent: Mix.env == :prod`：

    $ MIX_ENV=prod mix compile

    > set "MIX_ENV=prod" && mix compile





## Naming Conventions 命名约定
- https://hexdocs.pm/elixir/master/naming-conventions.html

Elixir 脚本扩展名为 `.exs`，库或模块文件扩展名为 `.ex`，脚本执行命令或模块编译命令如下：

    elixir simple.exs
    elixirc test.ex

Elixir 工程通常包含三个目录：

- `ebin`    - 包含编译的字节码；
- `lib`     - 包含 Elixir 代码，通常是 `.ex` 文件；
- `test`    - 包含单元测试脚本，浣熊是 `.exs` 文件；

Elixir 的脚本和代码写法基本是一样的，作为脚本，可能会添加直接输出的代码：

    defmodule Math do
      def sum(a, b) do
        a + b
      end
    end

    IO.puts Math.sum(1, 2)


Elixir 有几条命名约定 Naming Conventions：

- `snake_case` 定义变量、函数、模块属性使用下线分隔词组；

- `CamelCase` 定义模块名使用驼峰写法，大写词组首字母，或者全大字简称，如内置的 IO 模块；

- `:CamelCase`、`:snake_case` 原子类型 Atoms 两种方式通用；

- `_`、`_foo` 在不需要使用的返回值上必需使用下划线，丢弃操作，或使用以下划线开关的变量；

        iex> {:ok, _contents} = File.read("README.md")

- `_func` 函数名以下划线开关不会导出；

- `__foo__` 双下划线用在元数据编程中，如 `__info__/1` 函数获取模块信息：

        iex> String.__info__(:functions)
        [at: 2, capitalize: 1, chunk: 2, capitalize: 1, ...]

- `foo!` Trailing bang，函数调用结尾加感叹号表示主动引发异常：

        iex(15)> File.read("file.txt")
        {:error, :enoent}
        iex(16)> File.read!("file.txt")
        (File.Error) could not read file "file.txt": no such file or directory

    主动处理异常：

        case File.read(file) do
            {:ok, body}      -> # do something with the `body`
            {:error, reason} -> # handle the error caused by `reason`
        end

- `foo?` Trailing question mark，函数结尾加问号表示返回布尔值。

- `is_foo` 前缀 `is_` 表示类型检查函数，不是单纯是布尔值返回。

- 使用 `size` 表示常量时间消耗的数据结构，`O(1) time`，如 `Kernel.map_size/1`, `Kernel.tuple_size/1`。

- 使用 `length` 表示线性时间消耗的数据结构，`O(n) time`，如 `Kernel.length/1`, `String.length/1`。




## Modules & Functions 模块与函数
- https://elixir-lang.org/getting-started/modules-and-functions.html

Elixir 的模块比 Erlang 更有对象的味道：

    iex> String.length("hello")
    5

Elixir 提供 defmodule 这个宏来定义模块：

    iex> defmodule Math do
    ...>   def sum(a, b) do
    ...>     a + b
    ...>   end
    ...> end

    iex> Math.sum(1, 2)
    3

可以将上面的代码写到 math.ex 中，然后编译生成 `Math.beam` 字节码再运行：

    $ elixirc math.ex

    $ iex
    Interactive Elixir (1.10.3) - press Ctrl+C to exit (type h() ENTER for help)
    iex> Math.sum(1, 2)
    3

注意，模块名不要使用 elixir 这会有冲突。在工程目录下编译，还可能会添加相应的命名空间，也可以在 iex 交互环境中编译，以下提示和内置的 Math 模块冲突了。所以，模块改名就可以，文件名可以不改：

    iex(7)> c("lib/math.ex","lib")
    warning: redefining module Math (current version loaded from lib/Elixir.Math.beam)
      lib/math.ex:1

    [Math]

作为一种脚本语言，模块当然也可以不编译执行，只要将代码保存到 `math.exs`：

    defmodule Math do
      def sum(a, b) do
        a + b
      end
    end

    IO.puts Math.sum(1, 2)

然后使用脚本命令执行：

    $ elixir math.exs


在模块内，可以使用 `def/2` 公开函数，使用 `defp/2` 定义私有函数：

    defmodule MyMath do
      def sum(a, b) do
        do_sum(a, b)
      end

      def zero?(0) do
        true
      end

      def zero?(a) when is_integer(a) do
        false
      end

      defp do_sum(a, b) do
        a + b
      end
    end

    IO.puts MyMath.sum(1, 2)    #=> 3
    IO.puts MyMath.do_sum(1, 2) #=> ** (UndefinedFunctionError)

    IO.puts MyMath.zero?(0)         #=> true
    IO.puts MyMath.zero?(1)         #=> false
    IO.puts MyMath.zero?([1, 2, 3]) #=> ** (FunctionClauseError)
    IO.puts MyMath.zero?(0.0)       #=> ** (FunctionClauseError)

问题结尾的函数表示返回布尔比较结果。


捕捉函数 Function capturing，将函数类型保存到变量，再通过变量调用函数：

    $ iex math.exs

    iex> Math.zero?(0)
    true
    iex> fun = &Math.zero?/1
    &Math.zero?/1
    iex> is_function(fun)
    true
    iex> fun.(0)
    true

    iex> &is_function/1
    &:erlang.is_function/1
    iex> (&is_function/1).(fun)
    true

这种表达可以用来定义匿名函数：

    iex> fun = &(&1 + 1)
    #Function<6.71889879/1 in :erl_eval.expr/5>
    iex> fun.(1)
    2

    iex> fun2 = &"Good #{&1}"
    #Function<6.127694169/1 in :erl_eval.expr/5>
    iex)> fun2.("morning")
    "Good morning"

这里 `&1` 表示函数接收到的第一个参数，`&(&1 + 1)` 表示函数的缩写 `fn x -> x + 1 end`。

捕捉模块函数 `&Module.function()`：

    iex> fun = &List.flatten(&1, &2)
    &List.flatten/2
    iex> fun.([1, [[2], 3]], [4, 5])
    [1, 2, 3, 4, 5]


Default arguments 使用函数默认参考：

    defmodule Concat do
      def join(a, b, sep \\ " ") do
        a <> sep <> b
      end
    end

    IO.puts Concat.join("Hello", "world")      #=> Hello world
    IO.puts Concat.join("Hello", "world", "_") #=> Hello_world

对于有多分支的函数，可以使用函数头设置默认参数：

    defmodule Concat do
      def join(a, b \\ nil, sep \\ " ")

      def join(a, b, _sep) when is_nil(b) do
        a
      end

      def join(a, b, sep) do
        a <> sep <> b
      end
    end

    IO.puts Concat.join("Hello", "world")      #=> Hello world
    IO.puts Concat.join("Hello", "world", "_") #=> Hello_world
    IO.puts Concat.join("Hello")               #=> Hello

下划线开关的变量 `_sep` 表示忽略此变量，这是约定的命名。

任何表达式都可以，默认参数会在执行函数时取值。注意，使用默认参数后的重载处理。



# Building a new MySQL adapter for Ecto
- [binpp - Erlang Binary Pretty Printer](https://github.com/jtendo/binpp)
- [Part I: Hello World](http://blog.plataformatec.com.br/2018/11/building-a-new-mysql-adapter-for-ecto-part-i-hello-world/)
- [Part II: Encoding/Decoding](http://blog.plataformatec.com.br/2018/12/building-a-new-mysql-adapter-for-ecto-part-ii-encoding-decoding/)
- [Part III: DBConnection Integration](http://blog.plataformatec.com.br/2018/12/building-a-new-mysql-adapter-for-ecto-part-iii-dbconnection-integration/)
- [Part IV: Ecto Integration](http://blog.plataformatec.com.br/2019/01/building-a-new-mysql-adapter-for-ecto-part-iv-ecto-integration/)
- [Erlang gen_tcp](http://erlang.org/doc/man/gen_tcp.html#connect-4)
- [MySQL Internals Manual 14.2.5 Connection Phase Packets](https://dev.mysql.com/doc/internals/en/connection-phase-packets.html)
- []()

Wojtek Mach 写的这系列文章，从低层实现一个 Ecto MySQL 适配器，从 TCP 低层数据分析做起。

首先，是与 MySQL 服务的 handshake 连接，先通过命令行登录并创建一个数据库账号，确保 MySQL 服务器处于运行中：

    $ mysql --user=root -p -e "CREATE USER myxql_test"
    $ mysql --user=myxql_test -e "SELECT NOW()"
    +---------------------+
    | NOW()               |
    +---------------------+
    | 2018-10-04 18:35:11 |
    +---------------------+

如果没有安装 MySQL，推荐 Homebrew 或 Docker 进行配置：

    $ docker run --publish=3306:3306 --name myxql_test -e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.12
    # note we connect via TCP, instead of the default UNIX domain socket:
    $ mysql --protocol=tcp --user=root --password=secret -e "CREATE USER myxql_test;"

    $ mysql --protocol=tcp --user=myxql_test -e "SELECT NOW()"
    +---------------------+
    | NOW()               |
    +---------------------+
    | 2018-10-04 18:40:04 |
    +---------------------+

现在使用 IEx 来连接 MySQL 服务器：

    iex> {:ok, sock} = :gen_tcp.connect('127.0.0.1', 3306, [:binary, active: false], 5000)
    {:ok, #Port<0.6>}


执行 `:gen_tcp.connect/4` 进行 TCP 连接，参数依次如下：

- Hostname 主机；
- Port 端口；
- Options 选项，proplist 列表，函数默认返回 iolist，这里指定 :binary；
- active: false 表示当前 socket 连接按 passive mode 被动模式进行，即使用 `:gen_tcp.recv/3` 函数获取数据并阻塞；
- Timeout 超时设置的毫秒数 (in milliseconds)

然后读取数据：

    iex> {:ok, data} = :gen_tcp.recv(sock, 0, 5000)
    iex> data
    <<74, 0, 0, 0, 10, 56, 46, 48, 46, 49, 50, 0, 12, 0, 0, 0, 11, ...>>


要读懂以上数据，就要通过阅读 MySQL manual，这些数据是 MySQL Client/Server Protocol 的握手连接产生的。每个 MySQL packet 有 3 个元素：

- length of the payload (3-byte integer)
- sequence id (1-byte integer),
- payload

这里的数据包的 payload 就是 Initial Handshake Packet，即初次握手连接。

    iex> <<payload_length::24, sequence_id::8, payload::binary>> = data
    iex> payload_length
    4849664
    iex> byte_size(payload)
    74

    iex> <<payload_length::24-little, sequence_id::8, payload::binary>> = data
    iex> payload_length
    74

注意，数据包的 length 是数值 <<74, 0, 0>>，按 `big-endian` 字节序表示 4849664，按 `little-endian` 字节序才是正确的 74，即数值的最小有效位在内存的低地址位置。

为了让 binary 显示更容易阅读，可以使用 binpp 模块的美化打印功能：

    iex> :binpp.pprint(payload)
    0000 0A 38 2E 30 2E 31 32 00 0F 00 00 00 27 73 79 59  .8.0.12.....'syY
    0001 7A 34 26 3B 00 FF FF FF 02 00 FF C3 15 00 00 00  z4&;.ÿÿÿ..ÿÃ....
    0002 00 00 00 00 00 00 00 43 55 6B 60 74 5A 71 08 75  .......CUk`tZq.u
    0003 6F 08 2F 00 63 61 63 68 69 6E 67 5F 73 68 61 32  o./.caching_sha2
    0004 5F 70 61 73 73 77 6F 72 64 00                    _password.

接下来的是协议版本号 protocol version 的提取，sequence id 总是以 10 (0x0A) 开始，使用模式匹配，后续的版本号是以 null-terminated 结束的字符串：

    iex> <<10, rest::binary>> = payload
    iex> [server_version, rest] = :binary.split(rest, <<0x00>>)
    iex> server_version
    "8.0.12"

解析到版本号是个好的开始，但是现在不管它。先处理授权问题，authentication method 在数据包的末尾， null-terminated 字符串，"caching_sha2_password"，现在要构造一个 Handshake Response 响应服务器：

    iex> use Bitwise
    iex> capability_flags = 0x00000200 ||| 0x00008000 ||| 0x00080000
    iex> max_packet_size = 65535
    iex> charset = 0x21
    iex> username = "myxql_test"
    iex> auth_response = <<0x00>>
    iex> client_auth_plugin = "caching_sha2_password"
    iex> payload = <<
           capability_flags::32-little,
           max_packet_size::32-little,
           charset, 0::8*23,
           username::binary, 0x00,
           auth_response::binary,
           client_auth_plugin::binary, 0x00
    >>
    iex> sequence_id = 1
    iex> data = <<byte_size(payload)::24-little, sequence_id, payload::binary>>

首先，使用 `CLIENT_PROTOCOL_41`,`CLIENT_SECURE_CONNECTION`,`CLIENT_PLUGIN_AUTH` 兼容标志，bitwise OR 运算合并。

然后，设置最大的数据大小 max packet size，字符集设置 charset (0x21 表示 utf8_general_ci)，跟着填充 23 个 0 值，username 跟着是密码，这里为空密码。

注意，username 和 client_auth_plugin 是 null-terminated 字符串，最后，生成用 payload 和 length 还有 sequence id 生成数据包，这是双方握手中的第二个数据包，序列号为 1。 

为了防止连接终止，现在重新连接到 MySQL 服务器上，并将上面的数据回应到服务器：

    iex> {:ok, sock} = :gen_tcp.connect('127.0.0.1', 3306, [:binary, active: false], 5000)
    iex> :ok = :gen_tcp.send(sock, data)
    iex> {:ok, data} = :gen_tcp.recv(sock, 0)
    iex> <<payload_length::24-little, sequence_id::8, payload::binary>> = data
    iex> :binpp.pprint(payload)
    0000 00 00 00 02 00 00 00

服务器响应的 payload 以 0x00 起头，表示一个 OK_Packet，即授权成功！




# Phoenix Framework
- [Phoenix Framework](https://www.phoenixframework.org/)
- [Phoenix Up and running](https://hexdocs.pm/phoenix/up_and_running.html)
- [Elixir Application behaviour](https://hexdocs.pm/elixir/Application.html)
- [Elixir Supervisor behaviour](https://hexdocs.pm/elixir/Supervisor.html)
- [Elixir DynamicSupervisor behaviour](https://hexdocs.pm/elixir/DynamicSupervisor.html)
- [Elixir GenServer behaviour](https://hexdocs.pm/elixir/GenServer.html)
- [Mix Tasks](https://hexdocs.pm/phoenix/mix_tasks.html)
- [Hex Package Manager Usage](https://hex.pm/docs/usage)
- [Edoc](http://erlang.org/doc/apps/edoc/chapter.html)
- [Mix Tasks archive.install](https://hexdocs.pm/mix/Mix.Tasks.Archive.Install.html)
- [Phoenix Ecto](https://hexdocs.pm/phoenix/ecto.html)
- [Ecto.Adapters.MyXQL](https://hexdocs.pm/ecto_sql/Ecto.Adapters.MyXQL.html)
- [Mix ecto Create](https://hexdocs.pm/phoenix/mix_tasks.html#mix-ecto-create)
- [Learn Phoenix](https://dev.to/oliverandrich/learn-elixir-and-phoenix-by-building-a-read-it-later-service-project-setup-3d1c)
- [Using Ecto and Sqlite3 with Nerves](https://embedded-elixir.com/post/2017-09-22-using-ecto-and-sqlite3-with-nerves/)
- [Elixir 数据库查询工具 Ecto 讲解](https://zhuanlan.zhihu.com/p/138533770)
- [Step by step phoenix tuitorial](https://www.poeticoding.com/step-by-step-tutorial-to-build-a-phoenix-app-that-supports-user-uploads/)
- [Creating Thumbnails of uploaded Images and PDF in Phoenix](https://www.poeticoding.com/creating-thumbnails-of-uploaded-images-and-pdf-in-phoenix/)
- [Add a Progress Bar in the Phoenix File Upload app](https://www.poeticoding.com/add-a-progress-bar-in-the-phoenix-file-upload-app/)


Phoenix 是函数式编程语言 Elixir v1.0.2+ 的 Web 开发框架。

Elixir 有 mix 这样类似 npm 的依赖管理工具，可以很方便地安装模块和工具，如 Hex 包管理，热门的 Phoenix Web 框架：

    $ mix archive.install hex phx_new
    $ mix phx.new demo --live --database mysql

Mix 提供一站式的项目维护工具，现代语言标配，不用一上来开始撸 Makefile，umbrella 模式管理大项目很好。

phx.new 工具参数：

- `--live` - 包含 Phoenix.LiveView 建立实时交互应用；
- `--umbrella` - 创建两个应用，一个作为主域，一个作为 Web 接口；
- `--app` - 设置 OTP 应用名称；
- `--module` - 设置骨架模块名称；
- `--database` - 设置 Ecto 使用的数据库:

    `postgres` - via https://github.com/elixir-ecto/postgrex 
    `mysql` - via https://github.com/elixir-ecto/myxql 
    `mssql` - via https://github.com/livehelpnow/tds 

- `--no-webpack` - 不生成 webpack 相关文件，手动管理 JavaScript 和 HTML 资源；
- `--no-ecto` - 不生成 Ecto 文件；
- `--no-html` - 不生成 HTML 文件；
- `--no-gettext` - 不生成 gettext 多语言支持文件；
- `--no-dashboard` - 不生成 Phoenix.LiveDashboard 页面；
- `--binary-id` - 使用 binary_id 作为 Ecto schemas 数据表的主键；
- `--verbose` - 输出详细信息；

项目中使用的其它相关命令，如添加 ecto 数据访问模块、启动 Phoenix 应用、或在 iex 运行项目等，参考如下：

    $ cd hello
    $ mix ecto.create
    $ mix phx.server
    $ iex -S mix phx.server

根据系统安装的模块，mix phx 可以提供不同的工具：

    > mix help --search "phx"
    mix local.phx          # Updates the Phoenix project generator locally
    mix phx                # Prints Phoenix help information
    mix phx.digest         # Digests and compresses static files
    mix phx.digest.clean   # Removes old versions of static assets.
    mix phx.gen.cert       # Generates a self-signed certificate for HTTPS testing
    mix phx.gen.channel    # Generates a Phoenix channel
    mix phx.gen.context    # Generates a context with functions around an Ecto schema
    mix phx.gen.embedded   # Generates an embedded Ecto schema file
    mix phx.gen.html       # Generates controller, views, and context for an HTML resource
    mix phx.gen.json       # Generates controller, views, and context for a JSON resource
    mix phx.gen.presence   # Generates a Presence tracker
    mix phx.gen.schema     # Generates an Ecto schema and migration file
    mix phx.gen.secret     # Generates a secret
    mix phx.new            # Creates a new Phoenix application
    mix phx.new.ecto       # Creates a new Ecto project within an umbrella project
    mix phx.new.web        # Creates a new Phoenix web project within an umbrella project
    mix phx.routes         # Prints all routes
    mix phx.server         # Starts applications and their servers


Phoenix 默认使用 webpack 作为资源管理工具，Webpack 的依赖模块则通过 NPM 即 node package manager 安装。在执行 `mix phx.new` 任务时，会提示是否安装依赖，选择 No 可以稍后通过 npm 命令安装依赖。可以使用选项 `mix phx.new --no-webpack` 来禁止 webpack 的使用。

提示：`Ecto` 模块是 Phoenix 用来访问数据库的，如 PostgreSQL, MySQL 或其它。如果，项目不需要使用，可以设置 `--no-ecto` 参数创建项目。

生成的工程目录结构：

    ├── _build  编译生成目录
    ├── assets  包含 Webpack 管理的资源，此目录下执行 npm install 安装 Web 依赖
    ├── config  工程配置
    ├── deps    Elixir Mix 依赖
    ├── lib     应用程序的模块代码目录
    │   ├── hello 站点主程序，Application behaviour 等
    │   │   ├── application.ex
    │   │   └── repo.ex
    │   ├── hello.ex
    │   ├── hello_web 站点程序目录，按 MVC 框架组织，PageController 模块就是默认的主页控制器
    │   │   ├── channels
    │   │   │   └── user_socket.ex
    │   │   ├── controllers
    │   │   │   └── page_controller.ex
    │   │   ├── templates
    │   │   │   ├── layout
    │   │   │   │   └── app.html.eex
    │   │   │   └── page
    │   │   │       └── index.html.eex
    │   │   ├── views
    │   │   │   ├── error_helpers.ex
    │   │   │   ├── error_view.ex
    │   │   │   ├── layout_view.ex
    │   │   │   └── page_view.ex
    │   │   ├── endpoint.ex
    │   │   ├── gettext.ex
    │   │   ├── router.ex
    │   │   └── telemetry.ex
    │   └── hello_web.ex
    ├── priv    私有资源，通常保存数据库迁移脚本等
    └── test    程序单元测试脚本目录


根据需要在 `config/dev.exs` 修改数据库配置，默认是 PostgreSQL，在 Hello.Repo 模块设置为 `Ecto.Adapters.Postgres`，可以更改其它数据库，如 MySQL 就使用 `Ecto.Adapters.MyXQL`：

    # Configure your database
    config :hello, Hello.Repo,
      username: "postgres",
      password: "postgres",
      database: "hello_dev",
      hostname: "localhost",
      show_sensitive_data_on_connection_error: true,
      pool_size: 

使用默认的 PostgreSQL 数据生成的工程，如果想改 MySQL，首先，要改依赖，其次要改模型，配置好后再执行 `mix ecto.create` 生成数据库：

    defp deps do
    [
      {:phoenix, "~> 1.5.3"},
      {:phoenix_ecto, "~> 4.1"},
      {:ecto_sql, "~> 3.4"},
      {:myxql, ">= 0.4.1"},
      ...
    ]
    end

配置脚本还可以添加其它设置，通常数据库的设置也不直接写入配置脚本：

    # config/prod.exs
    config :hello,
      uploads_directory: System.get_env("POETIC_UPLOADS_DIRECTORY") || "/uploads"


利用 `phx.gen.schema` 生成数据模型模块和数据表迁移脚本：

    $ mix phx.gen.schema Documents.Upload uploads \
    filename:string size:integer \
    content_type:string hash:string 

    * creating lib/hello/documents/upload.ex
    * creating priv/repo/migrations/20200622141226_create_uploads.exs

生成的数据模型只设置了四个字段：

    # lib/hello/documents/upload.ex
    defmodule Hello.Documents.Upload do
      use Ecto.Schema
      import Ecto.Changeset

      schema "uploads" do
        field :content_type, :string
        field :filename, :string
        field :hash, :string
        field :size, :integer

        timestamps()
      end
      
    end

迁移脚本：

    # priv/repo/migrations/20200622141226_create_uploads.exs

    defmodule Hello.Repo.Migrations.CreateUploads do
      use Ecto.Migration

      def change do
        create table(:uploads) do
          add :filename, :string
          add :size, :integer
          add :content_type, :string
          add :hash, :string

          timestamps()
        end

        create index(:uploads, [:hash])

      end
    end

ecto 提供了其它工具，如数据库迁移等：

    mix ecto.dump 
    mix ecto.gen.migration 
    mix ecto.load 
    mix ecto.migrate 
    mix ecto.migrations 
    mix ecto.rollback 

给模型文件添加字段验证，添加文件名摘要，本地目录属性：

    # lib/hello/documents/upload.ex
    defmodule Hello.Documents.Upload do
      ...
      # @upload_directory Application.get_env(:hello, :uploads_directory)
      # def local_path(id, filename) do
      #   [@upload_directory, "#{id}-#{filename}"]
      #   |> Path.join()
      # end

      def upload_directory do
        Application.get_env(:hello, :uploads_directory)
      end

      def local_path(id, filename) do
        [upload_directory(), "#{id}-#{filename}"]
        |> Path.join()
      end

      def changeset(upload, attrs) do
        upload
        |> cast(attrs, [:filename, :size, :content_type, :hash])
        |> validate_required([:filename, :size, :content_type, :hash])

        # added validations
        |> validate_number(:size, greater_than: 0) #doesn't allow empty files
        |> validate_length(:hash, is: 64)
      end

      def sha256(chunks_enum) do
        chunks_enum
        |> Enum.reduce(
            :crypto.hash_init(:sha256),
            &(:crypto.hash_update(&2, &1))
        ) 
        |> :crypto.hash_final()
        |> Base.encode16()
        |> String.downcase()
      end

    end

`validate_number(:size, greater_than: 0)` 保证 size 字段大于 0。

`validate_length(:hash, is: 64)` 保证 hash 是 64 字节的字符串。

尝试生成文件摘要：

    iex> File.stream!("assets/static/images/phoenix.png", [], 2048) \
    ...> |> Hello.Documents.Upload.sha256()
    "07aa9b01595fe10..."

然后执行迁移生成对应的数据表：

    $ mix ecto.migrate
    [info] == Running 20200622141226 Hello.Repo.Migrations.CreateUploads.change/0 forward
    [info] create table uploads
    [info] == Migrated 20200622141226 in 0.0s


实现一个控制器 HelloWeb.UploadController 提供以下 HTTP 功能：

- get   /uploads/new 生成文件上传表单；
- POST  /uploads 接收上传文件；
- GET   /uploads 展示文件列表；
- GET   /uploads/:id 下载文件；

修改路由配置 HelloWeb.Router，增加一个 resources 匹配条件：

    # lib/hello_web/router.ex
    defmodule HelloWeb.Router do
        ...
        
      scope "/", HelloWeb do
        pipe_through :browser
        
        resources "/uploads", UploadController, only: [:index, :new, :create, :show]
      end
    end

执行 mix phx.routes 看看路由列表：

    $ mix phx.routes
    ...
    upload_path  GET   /uploads         HelloWeb.UploadController :index
    upload_path  GET   /uploads/new     HelloWeb.UploadController :new
    upload_path  GET   /uploads/:id     HelloWeb.UploadController :show
    upload_path  POST  /uploads         HelloWeb.UploadController :create

在控制器中实现 :index, :new, :create, :show 等路由动作：

    # lib/hello_web/controllers/upload_controller.ex

    defmodule HelloWeb.UploadController do
      use HelloWeb, :controller

      alias Hello.Documents

      def new(conn, _params) do
        render(conn, "new.html")
      end
      
      def create(conn, %{"upload" => %Plug.Upload{}=upload}) do
        # IO.inspect(upload, label: "UPLOAD")
        # text conn, "ok"

        case Documents.create_upload_from_plug_upload(upload) do

          {:ok, upload}->
            put_flash(conn, :info, "file uploaded correctly")
            redirect(conn, to: Routes.upload_path(conn, :index))

          {:error, reason}->
            put_flash(conn, :error, "error upload file: #{inspect(reason)}")
            render(conn, "new.html")
        end

      end

      def index(conn, _params) do
        uploads = Documents.list_uploads()
        render(conn, "index.html", uploads: uploads)
      end

      def show(conn, %{"id" => id}) do
        upload = Documents.get_upload!(id)
        local_path = Upload.local_path(upload.id, upload.filename)
        send_download conn, {:file, local_path}, filename: upload.filename
      end

    end

为文件列表视图创建一个模板：

    # lib/hello_web/templates/upload/index.html.eex

    <table class="table">
      <thead>
        <th>ID</th>
        <th>Filename</th>
        <th>Type</th>
        <th>Time</th>
      </thead>
      <tbody>
            
        <%= for upload <- @uploads do %>
          <tr>
            <td><%= upload.id %></td>
            <td><%= upload.filename %></td>
            <td><%= upload.content_type %></td>
            <td><%= upload.inserted_at %></td>
          </tr>
        <% end %>
            
      </tbody>
    </table>

    # index.html.eex template, by adding a download link to the row of each upload.

    <%= for upload <- @uploads do %>
      ...
      <td>
        <%= link "download", to: Routes.upload_path(@conn, :show, upload.id) %>
      </td>
    <% end %>

在 :create 动作中，`%Plug.Upload{}` 结构体接收上传的文件。

    %Plug.Upload{
      content_type: "image/png",
      filename: "phoenix.png",
      path: "/var/folders.../multipart-1555258629-39672758309128-2"
    }

控制器中的视图模板 template file 位置 `lib/hello_web/templates/upload` 小写的 upload 对应了控制器，视图文件扩展名为 `.eex` 如 ` new.html.eex`：

    <%= form_for @conn, Routes.upload_path(@conn, :create), 
                        [multipart: true], fn f-> %>

        <%= file_input f, :upload, class: "form-control" %>
        <%= submit "Upload", class: "btn btn-primary" %>

    <% end %>


上面的 Routes.upload_path 配置了 multipart 会返回一个 `POST /uploads` HTTP 动作。UploadController 需要搭配一个 `UploadView` 来渲染视图模板：

    #lib/hello_web/templates/upload

    defmodule HelloWeb.UploadView do
      use HelloWeb, :view
    end

新建一个 Hello.Documents Contexts 模块专用于文件上传处理，而不是将上传功能和控制器一起实现，这样逻辑更清晰：

    # lib/hello/documents.ex

    defmodule Hello.Documents do
      import Ecto.Query, warn: false

      alias Hello.Repo
      alias Hello.Documents.Upload

      def get_upload!(id) do
        Upload
        |> Repo.get!(id)
      end

      def list_uploads do
        Repo.all(Upload)
      end

      def create_upload_from_plug_upload(%Plug.Upload{
        filename: filename,
        path: tmp_path,
        content_type: content_type
      }) do
            
        # upload creation logic

        hash = 
          File.stream!(tmp_path, [], 2048) 
          |> Upload.sha256()

        with {:ok, %File.Stat{size: size}} <- File.stat(tmp_path),  
          {:ok, upload} <- 
            %Upload{} |> Upload.changeset(%{
              filename: filename, content_type: content_type,
              hash: hash, size: size }) 
            |> Repo.insert(),
                        
          :ok <- File.cp(
              tmp_path,
              Upload.local_path(upload.id, filename)
           )

        do
          {:ok, upload}
        else
          {:error, reason}=error -> error
        end

      end
    end

默认的 HTTP 上传，即 multipart parser 最大处理的文件是 8_000_000 字节，可以通过定义 endpoint 来修改，这里修改为 500MB：

    # lib/hello_web/endpoint.ex
    plug Plug.Parsers,
         # parsers: [:urlencoded, :multipart, :json],
         parsers: [:urlencoded, {:multipart, length: 500_000_000}, :json],



运行服务器，在浏览器测试 http://localhost:4000/uploads/new：

    $ mix phx.server
    [info] Running HelloWeb.Endpoint with cowboy 2.6.3 at 0.0.0.0:4000 (http)
    [info] Access HelloWeb.Endpoint at http://localhost:4000


# ImageMagik 图像处理库
- https://www.w3cschool.cn/imagemagick_use/imagemagick_use-bcm32819.html
- https://imagemagick.org/index.php
- https://www.imagemagick.org/script/mogrify.php
- https://hexdocs.pm/mogrify/Mogrify.html

上传文件通常还会需要缩略图的生成功能，可以使用 ImageMagik 图像处理库，和 Mogrify 组件：

    # Ubuntu 18.04
    $ apt-get install imagemagick
    $ mogrify -version
    Version: ImageMagick 6.9.7-4 Q16 x86_64 20170114
    ...

在 mix.exs 添加 Mogrify 依赖，这个模块封装了 ImageMagick mogrify 命令，然后安装它：

    $ mix deps.get
    Resolving Hex dependencies...
    Dependency resolution completed:
    ...
      mogrify 0.7.2
    ...

ImageMagick7.0.6-7 发布了，用来创建、编辑、合成图片的软件。它可以读取、转换、写入多种格式的图片。图片切割、颜色替换、各种效果的应用，图片的旋转、组合，文本，直线， 多边形，椭圆，曲线，附加到图片伸展旋转。ImageMagick是免费软件：全部源码开放，可以自由使用，复制，修改，发布。支持大多数的操作系统。

不得不提一下 ffmpeg 视频处理库，它处理视频非常专业！

使用 ImageMagick 工具中的命令把 JPG、PNG 等图片转换为一个连续页面的 PDF 文档，以及如何使用 ImageMagick 工具中的命令将 PDF 文档转换成单独的多张图片。

    convert *.jpg 1.pdf
    conert 01.jpg 02.png 1.pdf

注意，在 Windows 系统执行完整的命令是 `magick convert`，这里是 Linux 系统使用脚本的表达。Mogrify 和 convert 是类似的命令行工具，而 Elixir Mogrify 模块则是包装 `magick mogrify` 命令的，在其源代码中可以找到细节：

      * `:path` - The output path of the image. Defaults to a temporary file.
      * `:in_place` - Overwrite the original image, ignoring `:path` option. Default false.
      """
      def save(image, opts \\ []) do
        output_path = output_path_for(image, opts)
        cmd_mogrify(arguments_for_saving(image, output_path), stderr_to_stdout: true)
        image_after_command(image, output_path)
      end

      defp image_after_command(image, output_path) do
        format = Map.get(image.dirty, :format, image.format)
        %{
          clear_operations(image)
          | path: output_path,
            ext: Path.extname(output_path),
            format: format
        }
      end

      defp cmd_mogrify(args, opts) do
        case :os.type() do
          {:win32, _} -> System.cmd("cmd.exe", ["/c", "magick", "mogrify"] ++ args, opts)
          _ -> System.cmd("mogrify", args, opts)
        end
      end

      defp cmd_convert(args, opts) do
        case :os.type() do
          {:win32, _} -> System.cmd("cmd.exe", ["/c", "magick", "convert"] ++ args, opts)
          _ -> System.cmd("convert", args, opts)
        end
      end

安装 ImageMagick 后，在 iex 中测试一下看是否可用，注意 mogrify 和 convert 有些区别，它输出的文件会覆盖原文件，除非用 `-format` 指定不同文件格式或 `-path` 指定不同的路径，又或者通过 `-write` 指定输出文件名。

    System.cmd("cmd.exe", ["/c", "magick", "mogrify"]++["-resize", "300x300"])

    magick mogrify -write uploads/thumb.jpg -resize 120x120 uploads/big.jpg

    magick convert big.jpg -resize 120x120 test.jpg


ImageMagick 的命令行由下面这些元素构成：

- 一个，或多个文件名。
- 零个，一个，或多个图像设置项。
- 零个，一个，或多个图像操作项。
- 零个，一个，或多个图像序列操作项。
- 零个，一个，或多个图像组。
- 零个，或一个图像输出名(convert, composite, montage, compare, import, conjure，这些需要)。

ImageMagick 的命令行形式有时非常的简单，可有时，它也非常的复杂，像下面这样：

    $ convert image.jpg image.png

    $ convert label.gif +matte \
    \( +clone -shade 110x90 -normalize -negate +clone -compose Plus -composite \)
    \( -clone 0 -shade 110x50 -normalize -channel BG -fx 0 +channel -matte \)
    -delete 0 +swap -compose Multiply -composite button.gif

上面第一个命令的作用是把一张 JPEG 格式的图片转为 PNG 格式，第二个命令可能就比较让人头大了。它的作用是把一张简单的二维质感的图片，修辞出一种浮雕效果。

先简单说明一下 ImageMagick 的命令行使用格式。从上面的第二个有些夸张的命令可以看出，为了让我们写出的东西更容易阅读，可以使用 \ 来分行。 \ 是 Unix 下的命令行分行用字符，在 Windows 下，你可以使用 ^ 来分行。

ImageMagick 缩放内嵌图像、裁切内嵌图像，读入一些图片的同时，重新定义它们的尺寸是很方便的，假设你有很多的大的 JPEG 图片需要转换成一组 PNG 格式的缩略图：

    $ convert '*.jpg' -resize 120x120 thumbnail%03d.png
    $ convert '*.jpg[120x120]' thumbnail%03d.png

    $ convert '*.jpg' -crop 120x120+10+5 thumbnail%03d.png
    $ convert '*.jpg[120x120+10+5]' thumbnail%03d.png

ImageMagick 选取一张图片中的部分区域，使用 ‑extract 选项也可以实现相同的功能：

    $ convert -size 6000x4000 -depth 8 'rgb:image[600x400+1900+2900]' image.jpg
    $ convert -size 6000x4000 -depth 8 -extract 600x400+1900+2900 rgb:image image.jpg

ImageMagick 选取图片的某些帧，为此，你可以在文件名之后，以方括号括起来的形式指定帧。

在 Unix shell 的环境下，一般中括号是会被转义的，所以，我们需要使用单引号把文件名引起来。Windows 的命令行环境下不用单引号也可以，但多写一对单引号并不会有什么问题。另外，对于单引号和双引号的作用，在 Unix 和 Windows 这两个平台上，常常是相反的，所以，如果你使用 Windows，那么请注意将我们例子中的单引号改为双引号。

    $ convert 'images.gif[0]' image.png
    $ convert 'images.gif[0-3]' images.mng
    $ convert 'images.gif[3,2,4]' images.mng

在 Elixir 项目中安装 Mogrify 后，可以进行测试，在 Windows 10 系统测试中发现 save 方法是有 Bug 的，不能正常保存到指定的文件中，会覆盖掉原图：

    > iex -S mix
    Interactive Elixir (1.10.3) - press Ctrl+C to exit (type h() ENTER for help)
    iex(1)> Mogrify.open("uploads/thumb-16.jpg") \
              |> Mogrify.resize_to_limit("100x100") \
              |> Mogrify.save(path: "uploads/16.jpg")
    %Mogrify.Image{
      animated: false,
      buffer: nil,
      dirty: %{},
      ext: ".jpg",
      format: nil,
      frame_count: 1,
      height: nil,
      operations: [],
      path: "uploads/16.jpg",
      width: nil
    }

    iex(2)> Mogrify.open("uploads/thumb-16.jpg") |> Mogrify.resize_to_limit("100x100")
    %Mogrify.Image{
      animated: false,
      buffer: nil,
      dirty: %{},
      ext: ".jpg",
      format: nil,
      frame_count: 1,
      height: nil,
      operations: [resize: "100x100>"],
      path: "....../uploads/thumb-16.jpg",
      width: nil
    }

如要修改依赖模块的代码，请修改后使用依赖编译命令更新：

    mix deps.compile

Mogrify.save 函数指定保存的路径，同时指定不同的扩展名就可以保存不同的格式，如 `.jpg`、`.png`。

写入模块：

      def mogrify_thumbnail(src_path, dst_path) do
        IO.puts(src_path, dst_path)

        try do
          Mogrify.open(src_path)
          |> Mogrify.resize_to_limit("300x300")
          |> Mogrify.save(path: dst_path)
        rescue
          File.Error -> {:error, :invalid_src_path}
          error -> {:error, error}
        else
          _image -> {:ok, dst_path}
        end
      end

      def pdf_thumbnail(pdf_path, thumb_path) do
        args = ["-density", "300", "-resize", "300x300", "#{pdf_path}[0]", thumb_path]

        case System.cmd("convert", args, stderr_to_stdout: true) do
          {_, 0} -> {:ok, thumb_path}
          {reason, _} -> {:error, reason}
        end
      end
























