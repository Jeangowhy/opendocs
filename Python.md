
# =🚩 Python 应用场景

✓ Web应用开发

Python经常被用于Web开发。比如，通过mod_wsgi模块，Apache可以运行用Python编写的Web程序。Python定义了WSGI标准应用接口来协调Http服务器与基于Python的Web程序之间的通信。一些Web框架，如Django，TurboGears，web2py，Zope等，可以让程序员轻松地开发和管理复杂的Web程序。

✓ 网络爬虫

也称网络蜘蛛，是大数据行业获取数据的核心工具。没有网络爬虫自动地、不分昼夜地、高智能地在互联网上爬取免费的数据，那些大数据相关的公司恐怕要少四分之三。能够编写网络爬虫的编程语言有不少，但Python绝对是其中的主流之一，其Scripy爬虫框架应用非常广泛。

✓ 自动化运维

操作系统管理、服务器运维的自动化脚本编写，这几乎是Python应用的自留地，作为运维工程师首选的编程语言，Python在自动化运维方面已经深入人心，比如Saltstack和Ansible都是大名鼎鼎的自动化平台。

在很多操作系统里，Python是标准的系统组件。大多数Linux发行版以及NetBSD、OpenBSD和MacOSX都集成了Python，可以在终端下直接运行Python。有一些Linux发行版的安装器使用Python语言编写，比如Ubuntu的Ubiquity安装器，RedHatLinux和Fedora的Anaconda安装器。GentooLinux使用Python来编写它的Portage包管理系统。Python标准库包含了多个调用操作系统功能的库。通过pywin32这个第三方软件包，Python能够访问Windows的COM服务及其它WindowsAPI。使用IronPython，Python程序能够直接调用.NetFramework。一般说来，Python编写的系统管理脚本在可读性、性能、代码重用度、扩展性几方面都优于普通的shell脚本。

✓ 科学计算

NumPy，SciPy，Matplotlib可以让Python程序员编写科学计算程序。随着NumPy，SciPy，Matplotlib，Enthoughtlibrarys等众多程序库的开发，Python越来越适合于做科学计算、绘制高质量的2D和3D图像。和科学计算领域最流行的商业软件Matlab相比，Python是一门通用的程序设计语言，比Matlab所采用的脚本语言的应用范围更广泛，有更多的程序库的支持。虽然Matlab中的许多高级功能和toolbox目前还是无法替代的，不过在日常的科研开发之中仍然有很多的工作是可以用Python代劳的。

✓ 桌面软件

PyQt、PySide、wxPython、PyGTK是Python快速开发桌面应用程序的利器。Python支持函数式编程和OOP面向对象编程，能够承担任何种类软件的开发工作，因此常规的软件开发、脚本编写、网络编程等都属于标配能力。

如 pyqtgraph 是 Python 平台上一种功能强大的2D/3D绘图库，相对于 matplotlib 库，由于内部实现方式上，使用了高速计算的 numpy 信号处理库以及 Qt 的 GraphicsView 框架，因此，它在大数据量的数字处理和快速显示方面有着巨大的优势，它适合于需要快速绘图更新、视频或实时交互性的操作场合。另外，它不仅为各种数据提供了快速可交互式的图形显示，同时也提供了用于快速开发应用程序的各种小工具，如属性树、流程图等小部件，在数学、科学和工程领域都有着广泛的应用。以下命令及代码可以执行示例：

    pip install wxpython pyside pyqt pyqt4 pyqt5 pyqtgraph 
    pip install pyopengl PyOpenGL_accelerate

    import pyqtgraph.examples as demo
    demo.run()


✓ 服务器软件（网络软件）

Python对于各种网络协议的支持很完善，因此经常被用于编写服务器软件、网络爬虫。第三方库Twisted支持异步网络编程和多数标准的网络协议（包含客户端和服务器），并且提供了多种工具，被广泛用于编写高性能的服务器软件。

✓ 游戏

很多游戏使用C++编写图形显示等高性能模块，而使用Python或者Lua编写游戏的逻辑、服务器。相较于Python，Lua的功能更简单、体积更小；而Python则支持更多的特性和数据类型。

✓ 构思实现，产品早期原型和迭代

YouTube、Google、Yahoo！、NASA都在内部大量地使用Python。

✓ 云计算

开源云计算解决方案OpenStack就是基于Python开发的，搞云计算的同学都懂的。

✓ 数据分析

在大量数据的基础上，结合科学计算、机器学习等技术，对数据进行清洗、去重、规格化和针对性的分析是大数据行业的基石。Python是数据分析的主流语言之一。

✓ 人工智能

Python在人工智能大范畴领域内的机器学习、神经网络、深度学习等方面都是主流的编程语言，得到广泛的支持和应用。


职业方向

✓ 数据分析师、大数据工程师 - 熟练 Excel、SQL、BI 等工具，使用 SPSS 等分析工具，业务洞察力、数据报告设计能力。

✓ 推荐算法工程师 - 高级机器学习算法原理与应用，数据挖掘全流程与专业报告，善用机器学习解决用户画像、精准营销、风险管理等商业问题。

✓ NLP/AI工程师 - AI工具如 TensorFlow、Keras、Caffe、PyTorch，熟悉深度学习应用如图形处理、语音识别、计算机视觉、OCR等，熟悉卷积神经网络（Convolutional Neural Networks, CNN）、s深度神经网络模型(Deep Neural Network, DNN)、循环神经网络(Recurrent Neural Network, RNN)、Faster RCNN 等深度神经网络模型，掌握优化算法，了解深度学习高级算法包括生成对抗网络、强化学习等。

✓ 数据科学家 - 数据治理、数据安全、大数据架构，高级机器学习与深度学习算法，企业战略决策，计算机高性能处理技术。



# =🚩 Wave Format Specifications
- WAVE File Format http://www.piclist.com/techref/io/serial/midi/wave.html
- WAVE Sample Files http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/Samples.html
- Audio File Format Specifications http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html
- Digital Audio - Creating a WAV (RIFF) file http://www.topherlee.com/software/pcm-tut-wavformat.html


    

# =🚩 Intro & Installation
- [The Zen of Python](https://www.python.org/dev/peps/pep-0020/)
- [Python Tutorial](https://docs.python.org/3/tutorial/index.html)
- [Python HOWTOs](https://docs.python.org/3/howto/index.html)
- [Python Developer's Guide](https://devguide.python.org)
- [PEP 0 -- Index of Python Enhancement Proposals (PEPs)](https://www.python.org/dev/peps/#introduction)
- [The Performance of Open Source Applications II: PyPy](http://aosabook.org/en/pypy.html)
- [A Web Crawler With asyncio Coroutines](http://aosabook.org/en/500L/a-web-crawler-with-asyncio-coroutines.html)

Python is a high-level, dynamic programming language. It was invented by the Dutch programmer 
Guido van Rossum in the late 1980s. Guido's original implementation is a traditional bytecode 
interpreter written in C, and consequently known as *CPython*. There are now many other Python 
implementations. Among the most notable are *Jython*, which is written in Java and allows for 
interfacing with Java code, *IronPython*, which is written in C# and interfaces with Microsoft's 
.NET framework, and *PyPy*, the subject of this chapter. *CPython* is still the most widely used 
implementation and currently the only one to support Python 3, the next generation of the Python 
language.

Python 手册内容介绍：

- 基础入门教程参考 The Python Tutorial；
- 进阶指导教程 Python HOWTOs；
- 各个 Python 版本新引入特性参数 What’s New in Python；
- 语言特性、语法词法规则参考 The Python Language Reference；
- 标准库及 API 使用参考 The Python Standard Library；
- 如果有计划扩展 CPython 现有功能，或在 C/C++ 项目中嵌入解析器运行时，参考：
    - Extending and Embedding the Python Interpreter
    - Python/C API Reference Manual；

除了以上官方手册提供的参数内容，终极的资料还是在 Python 源代码中，官方手册内容对应源代码 Doc 目录下的 rst 文档，现在 Python 3.10.2 已经发布。

    git clone git@github.com:python/cpython
    git clone git@github.com:python/devguide
    git clone git@github.com:python/peps

编译源代码需要下载外部依赖库，可能需要指令 codeload.github.com 服务器 ：

    # https://github.com/python/cpython-source-deps/archive/
    140.82.114.9 codeload.github.com

Python 是脚本语言，通过解析器执行脚本程序，打开解析器主程序就可以进行 Interactive Mode 解析用户输入的脚本。

最受欢迎的两个特性是“简单”和“可移植”，与可用的工具和库一起，Python 为建模、游戏脚本、仿真开发人员提供了一种很好的语言。最重要的是，它是免费的，为 Python 程序员编写的工具和库也是免费的。

下载安装包解压安装后，直接在命令行执行解析器，并运行脚本字符串，或者直接读取 stdin 输入的脚本内容：

```sh
> python -c "import sys; print(sys.hash_info.width)"

# powershell
> "print(`"hi`")"  | python -

# cmd
> echo print("hi") | python -
```

Powershell 的输入中使用反引号转义字符，因为它本身是一种编程脚本，字符串直接通过管道传输后会移除字符串引号，所以给 Python 的脚本字符串要合理设置字符串的引号。

直接执行 Python 进行交互模式，输入以下脚本代码并按回车执行：

>>>print("Hello", "Python");
>>>quit()
>>>help() 
>>>help(object)
>>>help("object") 

以上三种方式均可查询 object 的帮助内容，比如 help(dict) 或 help('dict')。 退出 help 函数，输入 quit 或缩写 q。要结束交互程序，使用 quit() 函数终止程序，或者使用 Ctrl+D 输入 EOF 表示用户结束输入。

Python Enhancement Proposals (PEPs) 是 Python 增强建议，是社区文章集合，也是深入学习 Python 的一个去处，其中 PEP-0 页面是所有文章索引。

The Zen of Python:

1.  Beautiful is better than ugly.
2.  Explicit is better than implicit.
3.  Simple is better than complex.
4.  Complex is better than complicated.
5.  Flat is better than nested.
6.  Sparse is better than dense.
7.  Readability counts.
8.  Special cases aren't special enough to break the rules.
9.  Although practicality beats purity.
10. Errors should never pass silently.
11. Unless explicitly silenced.
12. In the face of ambiguity, refuse the temptation to guess.
13. There should be one-- and preferably only one --obvious way to do it.
14. Although that way may not be obvious at first unless you're Dutch.
15. Now is better than never.
16. Although never is often better than *right* now.
17. If the implementation is hard to explain, it's a bad idea.
18. If the implementation is easy to explain, it may be a good idea.
19. Namespaces are one honking great idea -- let's do more of those!

以上内容使用 import this 可以查看，。

1.安装依赖环境

    yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel

2.下载Python3 https://www.python.org/downloads/

    wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tgz

3.安装python3

　　个人习惯安装在/usr/local/python3（具体安装位置看个人喜好）

    mkdir -p /usr/local/python3

　　解压下载好的Python-3.x.x.tgz包(具体包名因你下载的Python具体版本不同而不同，如：我下载的是Python3.6.1.那我这里就是Python-3.6.1.tgz)

    tar -zxvf Python-3.6.1.tgz

4.进入解压后的目录，编译安装。

    cd Python-3.6.1
    ./configure --prefix=/usr/local/python3
    make
    make install

　　或者 make && make install

5.建立python3的软链

    ln -s /usr/local/python3/bin/python3 /usr/bin/python3

6.并将 /usr/local/python3/bin 加入 PATH

```sh
# vim ~/.bash_profile
# .bash_profile
# Get the aliases and functions
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi
# User specific environment and startup programs
PATH=$PATH:$HOME/bin:/usr/local/python3/bin
export PATH

# 按ESC，输入 :wq 回车退出。

# 修改完记得执行行下面的命令，让上一步的修改生效：

source ~/.bash_profile

# 用版本查看命令检查Python3及pip3是否正常可用：

python3 -V
pip3 -V
```

Python 有下面几个重要的环境变量：

|      变量名      |                                 描述                                 |
|------------------|----------------------------------------------------------------------|
| PYTHONPATH       | 默认 import 模块都会从这里指定的路径寻找，也可以通过 sys.path 设置。 |
| PYTHONSTARTUP    | 解释器启动后执行此变量指定的脚本文件。                               |
| PYTHONCASEOK     | 使 python 导入模块的时候不区分大小写。                               |
| PYTHONHOME       | 解释器主目录，也是模块查找路径。                                     |
| PYTHONIOENCODING | 解释器编码方案设置，如 "utf-8"。                                     |


运行 Python 就进入命令行交互模式，输入简单代码回车执行，可以当做计算器使用，结构语句如 if-else 输入后需要使用 Shift+Enter 执行。

    >>> x = int(input("Please enter an integer: "))
    Please enter an integer: 42
    >>> if x < 0:
    ...     x = 0
    ...     print('Negative changed to zero')
    ... elif x == 0:
    ...     print('Zero')
    ... elif x == 1:
    ...     print('Single')
    ... else:
    ...     print('More')
    ... <SHIFT>+<ENTER>
    More

开发工具可以使用 Sublime Text 3，安装 Anaconda 插件，进行适当的配置：

`python_interprete` 修改的 python.exe 路径。

`suppress_word_completions`：禁用掉Sublime Text原生的自动补全，默认是false。这个推荐设为true，否则会同时出现Anaconda和sublime原生的自动补全单词，自动补全列表就变得杂乱了

`suppress_explicit_completions`：这个和上面是一个意思，也是默认false。两个设为一样的就好了

`complete_parameters`：自动填充函数参数，默认是false。这个设为true，在打函数名的时候，如果选择自动完成列表中的选项，则会根据调用函数的定义，自动填充函数必须的参数。这个我一开始是用true的，后来发现在写参数的时候就不能用tab来选中自动补全选项，tab键变成了切换光标位置到下一个参数了，我觉得不是很习惯就又设为了false。

`anaconda_linter_phantoms`：Anaconda有一个很酷炫的功能叫做linter，就是说可以识别代码中的语法错误，代码建议，格式建议等。而在Sublime Text 3 build 3124中加入了一个叫做Phantoms的API，这个API允许插件在编辑界面插入HTML注释。anaconda_linter_phantoms就是将刚才的语法错误等信息直接通过Phantoms的形式显示在编辑器中，不用再查看error list来查看了。此功能最好可以和下面两个选项一起使用。

`pyflakes_explicit_ignore`：这个告诉PyFlakes要忽视哪些警告。PyFlakes是一个代码检查的插件，Anaconda已经包含进去了，其默认也是采用PyFlakes来进行代码语法检查的。我这里将UnusedImport取消注释掉了，因为我不想让Anaconda警告我哪些模块没有使用

`anaconda_linting_behaviour`：由于开启了anaconda_linter_phantoms，所以每写一下代码，系统都会自动进行检查，并且显示出来提示框，这是非常烦的，我们不想让它每时每刻都检查。因此将这个选项设置为save-only，就是只有在保存的时候进行检查，另外还有一个选项是可以打开和保存的时候进行检查，我的想法是经常也要打开别人的python代码，别人可不一定按照PEP8来写，因此打开的话恐怕就是一大堆提示框，因此只选择了save-only。

设置环境变量控制编码方案：

        "PYTHONIOENCODING": "utf-8",


## ==⚡ Virtual Environments
- - https://docs.python.org/3/tutorial/venv.html
- [pep:`405` Python virtual environments](peps/pep_0405.txt)
- [Virtual Environments and Packages](doc/tutorial/venv.rst)
- [`venv` --- Creation of virtual environments](doc/library/venv.rst)
- [Python venv: How To Create, Activate, Deactivate, And Delete](https://python.land/virtual-environments/virtualenv)

因为 Python 开发一般需要安装大量扩展模块，并且模块依赖版本关系的变化可能导致程序运行不正确，可以使用虚拟环境 Virtual Enviroments 来管理程序的运行环境。

每个虚拟环境都有自己的 Python 运行库和 site-packages 目录，还可以和系统默认的 site 目录隔离，所以不同的虚拟环境可以安装不同的模块以适应项目的依赖需要。像 Conda 这些第三方管理工具就是根据这些机制实现 Python 模块管理的。

The :mod:`venv` module provides support for creating lightweight "virtual
environments" with their own site directories, optionally isolated from system
site directories.  Each virtual environment has its own Python binary (which
matches the version of the binary that was used to create this environment) and
can have its own independent set of installed Python packages in its site
directories.

When the Python binary is executed, it attempts to determine its
prefix (which it stores in ``sys.prefix``), which is then used to find
the standard library and other key files, and by the ``site`` module
to determine the location of the site-package directories.  Currently
the prefix is found (assuming ``PYTHONHOME`` is not set) by first
walking up the filesystem tree looking for a marker file (``os.py``)
that signifies the presence of the standard library, and if none is
found, falling back to the build-time prefix hardcoded in the binary.

只要两步操作，先执行 venv 模块创建虚拟环境管理目录，再通过模块生成的 activate 脚本激活虚拟环境以使用它，这样安装的依赖就会受当前的虚拟环境管理：

```sh
# Create an virtual enviroment: tutorial-env
python3 -m venv tutorial-env
# Activate venv created, Windows, Unix or MacOS, run respectively:
tutorial-env\Scripts\activate.bat
source tutorial-env/bin/activate

# Have a look of path info
# python -c "import sys; print(sys.path)"
# python -m sysconfig
> python -m site
sys.path = [
    'C:\\Python310\\Lib',
    'C:\\Python310\\python310.zip',
    'C:\\Python310\\DLLs',
    'C:\\Python310',
    'C:\\Python310\\tutorial-env',
    'C:\\Python310\\tutorial-env\\lib\\site-packages',
]
USER_BASE: 'AppData\\Roaming\\Python' (doesn't exist)
USER_SITE: 'AppData\\Roaming\\Python\\Python310\\site-packages' (doesn't exist)
ENABLE_USER_SITE: False
```

新创建的虚拟环境只包含 Python 内置标准模块，其它扩展模块另外通过 pip 工具安装，安装位置可以查询 sys.path 记录的位置，或者使用 `site` 模块查询，这个模块负责虚拟环境的检测。

根据 PEP 技术建议，在搜索虚拟环境流程中，设置了第一个步骤就是指定 `pyvenv.cfg` 配置来指定解释器的路径：

```sh
home = /usr/bin
include-system-site-packages = false
version = 3.8.10
```

虚拟环境配置文件中 `home` 指定了创建这个环境的 Python 解析器所在目录。

执行这个虚拟环境上下的解析器副本时，例如 `python -m site` 查询命令，解释器会在上一级目录中的虚拟环境配置文件中获取 site 目录信息，并将其添加到 `sys.path` 列表中。

在 Windows WSL 环境中可不可以在 Linux 与宿主 Windows 之间共享虚拟环境的文件呢？

因为，配置文件 `pyvenv.cfg` 只是一个静态内容文件，不是脚本，不能动态地根据系统属性来调整。

This PEP proposes to add a new first step to this search.  If a
``pyvenv.cfg`` file is found either adjacent to the Python executable or
one directory above it (if the executable is a symlink, it is not
dereferenced), this file is scanned for lines of the form ``key =
value``.  If a ``home`` key is found, this signifies that the Python
binary belongs to a virtual environment, and the value of the ``home``
key is the directory containing the Python executable used to create
this virtual environment.

In this case, prefix-finding continues as normal using the value of
the ``home`` key as the effective Python binary location, which finds
the prefix of the base installation.  ``sys.base_prefix`` is set to
this value, while ``sys.prefix`` is set to the directory containing
``pyvenv.cfg``.

(If ``pyvenv.cfg`` is not found or does not contain the ``home`` key,
prefix-finding continues normally, and ``sys.prefix`` will be equal to
``sys.base_prefix``.)

Also, ``sys.base_exec_prefix`` is added, and handled similarly with
regard to ``sys.exec_prefix``. (``sys.exec_prefix`` is the equivalent of
``sys.prefix``, but for platform-specific files; by default it has the
same value as ``sys.prefix``.)

The ``site`` and ``sysconfig`` standard-library modules are modified
such that the standard library and header files are found relative
to ``sys.base_prefix`` / ``sys.base_exec_prefix``, while site-package
directories ("purelib" and "platlib", in ``sysconfig`` terms) are still
found relative to ``sys.prefix`` / ``sys.exec_prefix``.

Thus, a Python virtual environment in its simplest form would consist
of nothing more than a copy or symlink of the Python binary
accompanied by a ``pyvenv.cfg`` file and a site-packages directory.



## ==⚡ pip 依赖管理工具
- [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/)
- [pip installation](https://pip.pypa.io/en/stable/installation/)
- [Software Packaging and Distribution](https://docs.python.org/3/library/distribution.html)

毕竟丰富的第三方库是 python 的优势所在，为了更加方便的安装第三方库，提供了 pip 用于管理依赖。

    pip -> [ setuptools | Distribute ] -> Distutils -> Python core
                                        |
        3rd party packages              |      included in Python
                                        |

Python 提供了以下模块用于依赖管理或模块安装：

- *distutils* — Building and installing Python modules
- *ensurepip* — Bootstrapping the pip installer
- *venv* — Creation of virtual environments
- *zipapp* — Manage executable Python zip archives

A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system.

A virtual environment is a directory tree which contains Python executable files and other files which indicate that it is a virtual environment.

Common installation tools such as *setuptools* and *pip* work as expected with virtual environments. In other words, when a virtual environment is active, they install Python packages into the virtual environment without needing to be told to do so explicitly.

注意，*site-packages* 目录是 python 默认的模块搜索目录，它保存了那些通过源代码手动安装的模块，比如使用 distutils 执行 *python setup.py install* 安装的模块。

安装 setuptools 命令如下：

```sh
wget --no-check-certificate  https://pypi.python.org/packages/source/s/setuptools/setuptools-19.6.tar.gz#md5=c607dd118eae682c44ed146367a17e26
tar -zxvf setuptools-19.6.tar.gz
cd setuptools-19.6
python3 setup.py build
python3 setup.py install
```

pip 依赖工具安装命令如下：

```sh
wget --no-check-certificate  https://pypi.python.org/packages/source/p/pip/pip-8.0.2.tar.gz
tar -zxvf pip-8.0.2.tar.gz
cd pip-8.0.2
python3 setup.py build
python3 setup.py install
```

使用内置的模块安装、更新 pip：

```sh
python -m ensurepip
python -m ensurepip --upgrade
python -m pip install -U pip
python -m pip install --upgrade pip
```

如果没有搞好 HTTPS 连接环境，可能报错：

    pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.

然后开始进行如下操作

```sh
yum install openssl
yum install openssl-devel
cd python3.6.1
make && make install
```

依赖包会保存到以下目录：

    Lib\site-packages

可是使用以下命令查询，USER_BASE 和 USER_SITE 是用户自定义的启用Python脚本和依赖安装包的基础路径:

```sh
python -m site
```

有三处设置可以改变 pip 命令行为：

- command line options
- environment variables
- configuration files

配置文件有 3 个等级：

- global: system-wide configuration file, shared across users.
- user: per-user configuration file.
- site: per-environment configuration file; i.e. per-virtualenv.

在不同系统下的配置文件位置：

- Global
    - Windows 7+: C:\ProgramData\pip\pip.ini
    - Windows Vista: Global configuration is not supported.
    - Windows XP: C:\Documents and Settings\All Users\Application Data\pip\pip.ini
    - Linux: In a “pip” subdirectory of any of the paths set in the environment variable XDG_CONFIG_DIRS (if it exists), for example /etc/xdg/pip/pip.conf.
    - Linux: This will be followed by loading /etc/pip.conf.
- User
    - Windows: %APPDATA%\pip\pip.ini
    - Windows: The legacy “per-user” %HOME%\pip\pip.ini
    - Linux: $HOME/.config/pip/pip.conf
    - Linux: $HOME/.pip/pip.conf
- Site
    - %VIRTUAL_ENV%\pip.ini
    - Linux: $VIRTUAL_ENV/pip.conf

配置文件中使用 [global] 进行全局配置，也可以针对命令进行配置，如 [install] 针对安装命令进行配置。

避免网络不能访问问题，考虑 pip 换源到国内的镜像服务器：

```sh
# 临时使用安装模块，或写入配置文件
> pip install –i https://pypi.tuna.tsinghua.edu.cn/simple requests
> pip install requests -i https://pypi.douban.com/simple/ --trusted-host pypi.douban.com
> pip config set global.index-url https://pypi.douban.com/simple/
Writing to C:\Users\OCEAN\AppData\Roaming\pip\pip.ini
> pip config edit --editor subl
> pip config list
global.index-url='https://pypi.douban.com/simple/'
install.trusted-host='\nmirrors.aliyun.com\npypi.douban.com\npypi.tuna.tsinghua.edu.cn\npypi.mirrors.ustc.edu.cn\nmirrors.bfsu.edu.cn'
```

或者在 pip 配置文件中加入 trusted-host 选项：

```sh
[global]
timeout = 60
index-url = https://pypi.douban.com/simple/
# index-url = https://mirrors.aliyun.com/pypi/simple/
# index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
# index-url = https://pypi.mirrors.ustc.edu.cn/simple/
# index-url = https://mirrors.bfsu.edu.cn/pypi/web/simple/

[install]
trusted-host =
    mirrors.aliyun.com
    pypi.douban.com
    pypi.tuna.tsinghua.edu.cn
    pypi.mirrors.ustc.edu.cn
    mirrors.bfsu.edu.cn
```

有可能因为 HTTPS 服务器安全信任问题，如 https://pypi.douban.com 就不能正常使用，导致以下协议错误、异常，可以使用 --trusted-host 强制信任 HTTP 服务器：

    >WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProtocolError('Connection aborted.', FileNotFoundError(2, 'No such file or di
    rectory'))': /pypi/simple/pip/

    WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProtocolError('Connection aborted.', FileNotFoundError(2, 'No such file or directory'))': /simple/meson/


使用 pip -i 手动指定软件源，注意 simple 后缀是固定格式，软件源参考：

    pip install meson -i http://mirrors.aliyun.com/pypi/simple --trusted-host mirrors.aliyun.com

安装 Wireshark、Fiddler、Caharless 等网络调试软件也有可能导致 HTTPS 访问出错，以上问题就是这个原因导致的，并且没有打印完整的异常链，隐藏下面这段最重要的异常信息。如果 urllib 访问网络时出现类似以下异常基本都是这类软件导致的，这也导致了 HTTPS 服务器无法为 pip 正常使用。

>Traceback (most recent call last):
  File "C:\Python310\tutorial-env\lib\site-packages\urllib3\connectionpool.py", line 703, in urlopen
    httplib_response = self._make_request(
  File "C:\Python310\tutorial-env\lib\site-packages\urllib3\connectionpool.py", line 386, in _make_request
    self._validate_conn(conn)
  File "C:\Python310\tutorial-env\lib\site-packages\urllib3\connectionpool.py", line 1040, in _validate_conn
    conn.connect()
  File "C:\Python310\tutorial-env\lib\site-packages\urllib3\connection.py", line 397, in connect
    self.ssl_context = create_urllib3_context(
  File "C:\Python310\tutorial-env\lib\site-packages\urllib3\util\ssl_.py", line 350, in create_urllib3_context
    context.keylog_filename = sslkeylogfile
FileNotFoundError: [Errno 2] No such file or directory: 'C:\\Wireshark\\p.key'

通过代码可以看到网络请求上下文件对象存在 keylog_filename 设置，需要调用环境变量设置获取文件路径设置于：

```py
    if hasattr(context, "keylog_filename"):
        sslkeylogfile = os.environ.get("SSLKEYLOGFILE")
        if sslkeylogfile:
            context.keylog_filename = sslkeylogfile
```

本地系统安装过 Wireshark 又卸载了，导致环境变量指向的目录路径不存在而出错，解决方法是重新指定路径或删除环境变量。

从下载包代码目录手动安装 requests 模块出现警告：

```sh
# $ python -m pip install requests
$ git clone git://github.com/psf/requests.git
# Or, download the tarball:
# $ curl -OL https://github.com/psf/requests/tarball/master
# optionally, zipball is also available (for Windows users).
$ cd requests
$ python -m pip install .

> DEPRECATION: A future pip version will change local packages to be built in-place without first copying to a temporary directory. We recommend you use --use-feature=in-tree-build to test your packages with this new behavior before it becomes the default.
   pip 21.3 will remove support for this functionality. You can find discussion regarding this at https://github.com/pypa/pip/issues/7555.
```

现场编译安装而非拷贝到临时目录进行，在未来 pip 版本会改变当前包。建议在置其为默认包前，使用 in-tree-build 特性测试此包的行为，pip 21.3 会移除此功能的支持。


pip 命令基本用法：

```sh
Usage:   
  pip <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  cache                       Inspect and manage pip’s wheel cache.
  index                       Inspect information available from package indexes.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  debug                       Show information useful for debugging.
  help                        Show help for commands.

# Installing Packages
python -m pip install SomePackage            # latest version
python -m pip install SomePackage==1.0.4     # specific version
python -m pip install 'SomePackage>=1.0.4'   # minimum version

# Requirements Files
# “Requirements files” are files containing a list of items 
# to be installed using pip install like so:
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt

# Constraints Files
# Constraints files are requirements files that only control which 
# version of a requirement is installed, not whether it is installed or not. 
python -m pip install -c constraints.txt

# Installing from Wheels
# “Wheel” is a built, archive format that can greatly speed installation 
# compared to building and installing from source archives. 
python -m pip install SomePackage-1.0-py2.py3-none-any.whl
python -m pip install './somepackage-1.0-py2.py3-none-any.whl[my-extras]'
python -m pip install wheel
python -m pip wheel --wheel-dir=/local/wheels -r requirements.txt
python -m pip install --no-index --find-links=/local/wheels -r requirements.txt

# Uninstalling Packages
# pip is able to uninstall most packages like so:
python -m pip uninstall SomePackage

# Listing Packages
# To list installed or outdated packages:
python -m pip list
python -m pip list --outdated
python -m pip show sphinx

# Searching for Packages
# pip can search PyPI for packages using the pip search command:
python -m pip search "query"

# Installing from local packages
# In some cases, you may want to install from local packages only, with no traffic to PyPI.
python -m pip download --destination-directory DIR -r requirements.txt
python -m pip wheel --wheel-dir DIR -r requirements.txt
python -m pip install --no-index --find-links=DIR -r requirements.txt
```

## ==⚡ Shell execute

Python 提供多种模式创建 shell 进程，参考标准库 `multiprocessing` --- Process-based parallelism：
  *spawn*
    The parent process starts a fresh Python interpreter process.  The
    child process will only inherit those resources necessary to run
    the process object's :meth:`~Process.run` method.  In particular,
    unnecessary file descriptors and handles from the parent process
    will not be inherited.  Starting a process using this method is
    rather slow compared to using *fork* or *forkserver*.

1. *spawn* 方式：慢但是通用，创建子进程运行 Python 解析器，并继承必要资源以运行 `Process.run`；
2. *fork* 方式：使用 os.fork 方法创建子进程，仅支持 Unix 系统；
3. *forkserver* 方式：server 进程以单线程运行，父进程通过 server 执行 fork 产生子进程；

Windows 仅支持 spawn， Unix 支持 fork、spawn、forkserver（部分系统支持）。

通过 os.system() 调用系统 shell 外部命令、脚本，filename 最好是全路径，使用 os.popen() 方式则可获取程序输出数据，直接使用 subprocess 模块则拥有更多灵活性：

```py
    import os
    os.system("python filename")
    os.popen(filename)

    import subprocess

    ps = subprocess.Popen(["cat"], stdin=subprocess.PIPE, 
         stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    output, errors = ps.communicate(input="Hello from the other side!")
    ps.wait()
    print(output, errors)
```

使用 Popen 可以将多个命令连接成一个管线，就像命令行工具中使用管道命令将输入输出串联在一起。
只需要将一个 Popen 实例的 stdout 属性连接到下一个 Popen 实例的 stdin 参数即可。

os 模块提供了一系列 exec 方法，它们会创建新进程，并且，会替换掉当前的进程，因此不会返回：

    ----------------------------------------------------
    .. function:: execl(path, arg0, arg1, ...)
    ----------------------------------------------------
              execle(path, arg0, arg1, ..., env)
              execlp(file, arg0, arg1, ...)
              execlpe(file, arg0, arg1, ..., env)
              execv(path, args)
              execve(path, args, env)
              execvp(file, args)
              execvpe(file, args, env)

另外，os 模块提供了一系列 spawn 方法，不同变体在处理外部定位、参数传递上有差异：

|          Spawn Variants         |    Arguments     |  Use PATH?   |   Use Env?  |
|---------------------------------|------------------|--------------|-------------|
| spawnl(mode, path, ...)         | l - by args list |              |             |
| spawnle(mode, path, ..., env)   | l - by args list |              | e - Use Env |
| spawnlp(mode, file, ...)        | l - by args list | p - uss PATH |             |
| spawnlpe(mode, file, ..., env)  | l - by args list | p - uss PATH | e - Use Env |
| spawnv(mode, path, args)        | v - by an Aarray |              |             |
| spawnve(mode, path, args, env)  | v - by an Aarray |              | e - Use Env |
| spawnvp(mode, file, args)       | v - by an Aarray | p - uss PATH |             |
| spawnvpe(mode, file, args, env) | v - by an Aarray | p - uss PATH | e - Use Env |

```py
    (arg, shell) = ("/c", "C:/Windows/System32/cmd.exe")
    (arg, shell) = ("-c", "C:/msys64/usr/bin/bash.exe")
    env = {"PATH":"C:/msys64/usr/bin/"}
    # os.execlp('bash', '-c', code) # this method will cause Sublime plugin-host exit.
    # ecode = os.system("bash -c '%s ; sleep 3'" % code)
    # for cmd shell
    # pid = os.spawnle(os.P_NOWAIT, shell, "'%s %s'" %(arg, code), env)
    # pid = os.spawnve(os.P_NOWAIT, shell, ["'%s %s'" %(arg, code)], env)
    # for bash shell
    pid = os.spawnv(os.P_NOWAIT, shell, [shell, arg, "'%s"%(code)])
    # pid = os.spawnv(os.P_NOWAIT, shell, [shell, arg, "'%s'" %(code)])
    # pid = os.spawnle(os.P_NOWAIT, shell, shell, arg, "'%s'" %(code), env)
    # pid = os.spawnve(os.P_NOWAIT, shell, [shell, arg, "'%s'" % (code)], env)
    # excode = os.spawnv(os.P_WAIT, shell, [shell, arg, "'%s"%(code)])
    # print("exit code: ", shell, arg, excode)
    # (pid, ecode_shift8) = os.waitpid(pid, 0)
    # print("exit code: ", shell, arg, pid, ecode_shift8>>8)
```

函数名称没有后缀 p 表示需要在 path 参数指定命令的完整路径，它不会根据 PATH 环境变量去搜索。
另外，在省略号 ... 表示的参数中，还需要将命令作为第一省略参数传入。

这些方法直接在新进程中将命令运行结果输出到 stdout，命令输出内容不能被当前进程捕捉。如果需要
处理命令输出，应该使用 `subprocess` 模块，当然可以使用命令行管道操作将命令输出写入文件再
处理。对于当前进程，可以自行设置 sys.stdout 来捕捉当前进程的标准输出。参考 Logging Cookbook，
或者使用 `sys.stdout = io.StringIO()` 转接，`TextIOWrapper`，`TextIOBase` 等等，
也可以将其包装成 StdoutCatcher 写入字符串对象。

还有一个差异就在于线程的阻塞状态，os.P_WAIT 或者 os.waitpid() 等待线程进入阻塞状态。

不同的 shell 有不同的调用方式，可以使用以下命令进行测试：

```sh
# for Windows
pwd && sleep 1
echo 123 && C:/msys64/usr/bin/sleep.exe 1
C:/msys64/usr/bin/pwd.exe && C:/msys64/usr/bin/sleep.exe 1
# for Unix/Linuxt
pwd; sleep 5
pwd; /usr/bin/sleep.exe 1
C:/msys64/usr/bin/pwd.exe; C:/msys64/usr/bin/sleep.exe 1
```

虽然，spawnle 和 spawnve 两个变体不使用当前进程的 PATH 环境变量来定位命令文件，
但是可以通过 env 参数来设置 PATH。

根据函数返回的 exit code 来判断命令运行状态，Bash 退出码取值 [0, 255] 含义：

- 0   命令正常执行并退出；
- 128 exit 方法的参数错误；
- 127 命令文件找不到，所以子进行不能执行相应命令；
- 126 命令文件存在，但它不是可执行程序；
- 2   内置命令执行错误，一般是因为参数传递错误，或者缺失参数；
- 1    通用错误码，可以表示任何可能的错误；
- 128+n  信号"n"触发的致命错误，例如 kill -9 终止脚本，$? = 137 = 128 + 9；
- 130  Control-C 或者 D 强制终止，触发 SIGINT 2 信号, $? = 130 = 128 + 2；

参考 bash 文档：
3.2.4 Lists of Commands
3.7.5 Exit Status


## ==⚡ Import Package.Modules
- The Python Tutorial - 6. Modules
- The Python Language Reference » 5. The import system - 5.2.1. Regular packages
- The Python Standard Library » Importing Modules
- PEP 302 -- New Import Hooks https://legacy.python.org/dev/peps/pep-0302/
- PEP 328 -- Imports: Multi-Line and Absolute/Relative https://www.python.org/dev/peps/pep-0328/
- PEP 420 -- Implicit Namespace Packages  https://www.python.org/dev/peps/pep-0420
- https://docs.python.org/3/reference/import.html

这部分内容将从以下几个方面解释导入与包、模块方面的知识：

- 什么是模块，什么是包，包的分类。
- 按磁盘文件目录结构组织的包与模块如何使用。
- 导入语句的使用与模块的符号定义、使用。
- 初始化模块 `__init__.py` 文件。
- 作为深入，还探讨了模块加载器原理。
- 涉及了 Code Objects & Frame Object 两种核心对象的基本认识。

Python Module，模块是一种对象层次结构的组织方式，可以理解为磁盘目录以及 .py 脚本文件，它包含了 Python 对象定义和语句。

每个模块都有自己的私有符号表，该表中定义的所有函数符号作为模块的全局符号表。因此，模块的作者可以在模块中使用全局变量，而不用担心与用户的全局变量发生意外冲突。

- 函数是一组实现某种功能的代码，也是代码复用的一种组织形式；
- 模块是为实现某种逻辑将相关连的函数写在同一个文件里，使逻辑更清楚，简单理解，.py 文件就模块；
- 包是为了方便管理模块，作为模块组织单元而在 Python 中引入的抽象概念；

但事实上 Python 程序代码对象不一定以文件目录组织，可以是包含 `__init__.py` 文件的 ZIP 压缩包等不同的存储形式，并且，模块也不一定必需是 Python 脚本，也可以是 C/C++ 实现扩展模块。同一个包的模块可以在物理上连续存储，也可以分开。

1) modules written in Python (.py);
2) modules written in C and dynamically loaded (.dll, .pyd, .so, .sl, etc);
3) modules written in C and linked with the interpreter; to get a list of these,

type::

      import sys
      print(sys.builtin_module_names)

一般情况下，module 和 package 模块或包是 Python 管理代码，是指代相同的含义，是代码组织单元，一种管理方式。当然，它们概念上还是有些区别的：

- Package 包通常对应的是目录层次结构，这一点出于方便理解使用目录结构，实际上不一定是目录这种组织；
- Module 模块通常是指一个脚本文件，这一点也是出于方便理解举例，实际上也不一定是通过文件来组织；


Python 定义了 `Regular packages` 和 `Namespace packages` 两种包。

命名空间包和常规包非常相似，区别在于：

- 命名空间包的一部分不必全部来自同一个目录结构，甚至不需要来自同一个加载器。常规包是自包含的：所有部分都位于同一目录层次结构中。
- 命名空间包没有 __file__ 属性。
- 命名空间包的 __path__ 属性是字符串的只读迭代，当父路径被修改时会自动更新。
- 命名空间包没有 __init__.py 模块。
- 命名空间包的 __loader__ 属性具有不同类型的对象 。

正常包是 Python 3.2 及之前版本使用的传统包类型，一般以文件目录层次结构组织，这也是最常用的一种方式。每一个包被导入位置都可以有一个 `__init__.py` 文件，这个文件可以是空文件，也可以包含正常 Python 代码，因为它本身就是一个初始化模块。之所有以称之为初始化模块而非初始化脚本，是因为在程序逻辑上它确实是一个模块。导入包时，就会隐含地执行初始化模块代码，并将其全局变量符号绑定到包命名空间上使用。注意，导入子级模块时，上级所有的初始化模块代码都会执行。

命名空间包多个部分的组合，其中每个部分为父包提供一个子包，它们可以位于文件系统上的不同位置，也可以以在 zip 文件内、网络或 Python 在导入期间搜索到的任何其他位置。命名空间包可能与文件系统上的文件对应，也可能不直接对应，它们可能是没有具体表示的虚拟模块。

命名空间包并不使用一般的 list 来定义 __path__ 属性，而是使用自定义的可迭代类型，来进行子包部分的搜索。如果父包，或顶级包的 `sys.path` 的路径发生更改，则在下一次导入该包时，动态路径计算，该迭代类型将自动对该包中的子包部分执行新的搜索。

没有父级初始化模块的情况，即没有 `parent/__init__.py` ，事实上是因为可能有多个位置来导入命名空间包的各个部分，所以当顶级父包或其子包被导入时，Python 都会为其创建一个顶级的父命名空间包。

在定义上，只要一个模块定义了 __path__ 属性，那么它就是一个包，这个属性不能通过 dir() 获取。从这一点来说，`__init__.py` 就是一个包，同时在实用中它也是一个模块。使用全局函数 `globals()` 可以获取当前模块的全局符号表，并通过这个函数返回的字典数据来测试 __path__ 属性是否存在。调用这个函数时，返回的是定义它的模块的全局符号表，而不是执行它的模块。

在文件目录这种代码组织方式下，Package 对应一个目录，也可以说它就是 __init__.py 脚本文件对应的模块。

所以，一般应用中，Package 等效于 Module，只是它由关联的多个模块组成，但也一样可以当作模块看待。

当前的 Python 提供了 *pkgutil.extend_path* 方法来显式声明一个命名空间包，在 `__init__.py` 中使用以下方法：

```py
from pkgutil import extend_path
__path__ = extend_path(__path__, __name__)
```

代码的作用就是将所有 `sys.path` 搜索到的子目录添加到 __path__ 这个包路径属性上，以包命名路径。如果想要将单个逻辑包的不同部分作为多个目录分发，这非常有用，所以分发包都需要包含相同的这段代码。它还查找 `*.pkg` 文件，开头的 * 与 name 参数匹配。

另外，当一个模块被导入时，其顶层代码只会被执行一次，要再次执行，可以使用 `importlib.reload()` 重载模块，比如 *import importlib; importlib.reload(modulename)*。


包和模块有两个对应的全局魔术变量，并且在全局执行的脚本中，__name__ 和 __package__ 默认值分别为 `__main__` 和 None，强行修改它们并不起作用。之所以使用这个模块名，是因为解析器默认使用的顶级运行环境就是使用这个名称，并且默认使用 `__main__.py` 作为入口文件。

文档参考：The Python Standard Library » Python Runtime Services » __main__ — Top-level code environment

通常，一个 .py 脚本文件就可以当作一个模块看待，模块名就是文件名，通过全局的 `__name__` 魔术变量获取。在使用 Python 解析器运行脚本文件时，这时，解析器会创建主模块 `main`，脚本中要引用的变量符号等都会绑定到主模块，代码运行于 Top Level，以 `calculator mode` 模式运行。

> print({"module __name__":__name__})
{'module __name__': '__main__'}

交互模式、计算器模式是一回事，只不过在交互模式下 Python 控制台会提供用户输入数据的时机。


了解一点 Python 解析器执行参数：

    python [-bBdEhiIOqsSuvVWx?] [-c command | -m module-name | script | - ] [args]

选项 `-c` 后面直接指定要执行的脚本字符串，文档称之为命令，和直接运行脚本模块没有不同，都是当作主模块运行。

选项 `-m` 后面指定要运行的模块的命名空间，注意不要在 *script* 后面指定，这样无效：

    python -m modulName
    python -m pkgName.modulName

只要脚本文件可以在指定的目录中被搜索到，就可以被执行，搜索目录包括当前目录、`PYTHONPATH` 等环境变量指定的目录，以及 `sys.path` 指定的目录搜索列表等等。当然作为入口执行的脚本，还是默认为模块名为 __main__，包名则是命令参数中指定的 pkgName 如果有指定。也可能是空值而不是 `None` 或具体的包名，如果执行的是顶级模块。

另一方面，如果你知道自己在做什么，也可以用 *modname.itemname* 这种语法来使用模块中的全局变量。

比如，coding.py 脚本中，就可以使用以下方式导入本身这个模块，并访问函数等全局符号，同时也可以访问自己的私有符号定义，私有符号不能通过 * 自动导入，需要显式指定名称引入：

```py
import coding
# import __main__ as coding

def writeCode(): pass

_var = "it's _var"
print({"module __name__":__name__, _var:_var})
print(coding.writeCode)
# {'module __name__': '__main__', "it's _var": "it's _var"}
# <function writeCode at 0x000002AF9EB73E20>
```

使用 import 可以导入一个包中的一个或多个函数或模块，引入到另一个 Python 代码模块中，从而实现代码的复用。

导入基本语法如下：

```py
import module1, module2
import Package.module, Package.mod2
import module1 as alias, mod2 as a2   # 逗号分隔导入一个或者多个模块，并为模块起别名
from   Package import (a, b, c)       # Parentheses support was added to Python 2.4.
from   Package import module          # 导入包中的模块，导入多个模块使用逗号分隔
from   module  import a, b, c         # 导入模块中的符号元素（类、变量、函数等等）
from  .here    import *               # 相对当前包位置导入 here 模块的所有公开元素
from . import symbol
from ..import symbol
from ..module import symbol
```

注意，虽然可以用 `import *` 语句导入多个模块及符号，但是不推荐这样做，因为可能导入了不想要的符号。比如，`from os import *` 会导入 `os.open()` 并覆盖操作完全不同的内置函数 `open()`，但 `import os` 不会。

➡ `os.open(file, flags[, mode])` 打开一个文件，并且设置文件读取打开选项，mode 参数是可选的
➡ `open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)`


模块导入的语法，不仅可以导入模块、指定包下的模块，还可以导入模块中指定的符号。从导入语法上，模块的导入可以使用 `import *` 或者 `from * import *` 这两种方式，而导入模块中的符号，如全局变量、函数就要使用后一种语法格式。

在使用 `import *` 语法时，可以配合 __all__ 定义那么符号应该作为公开的符号被导入，没有设置这个变量时，默认是除了下划线开关的符号都是公开的。设设置这个变量后，就以设置的列表为准。

    __all__ = ["{fun}", "VAR", "var", "_var"]

模块使用前一定要先导入，而符号的使用可以不显式导入，可以通过模块命名空间去访问。一般显式导入符号是为了简化表达，毕竟可以少写一个命名空间前缀。


相对导入语法，每个点表示相对往上一个层级，通过当前模块的 __name__ 属性来确定要导入的模块在包层次结构中的位置，模块定位算法是基于 __name__ 和 __package__ 变量的值。

但是对于顶层执行的脚本，作为入口脚本执行时，它们的默认值为 `__main__` 和 `None`，并且手动修改无效，同时，也不会执行同目录下的 __init__.py。

这种情况下，这些变量不包含任何父模块、包信息，Python 解释器不知道如何定位父模块位置信息。顶层执行的脚本作为整个程序项目的起始执行入口，只能通过绝对导入模块，和顶层脚本同层的其它脚本也一样。

使用相对导入语法将产生导入异常，并且不能使用如下这样的条件语句来控制是否进行相对导入：

```py
if __name__=="__main__":
    import Here
else:
    from .Here import *
    # ImportError: attempted relative import with no known parent package
```

导入并打印 Python 关键字符号：

```py

'''
## import keyword lib & print Python keywords
Let study more lexical in Python
and multiple-line comment can type between """ and
'''
import keyword
print(keyword.kwlist);
```

import 语句执行导入时，按以下目录搜索模块放置的文件位置：

- 默认的模块搜索目录 *site-packages* 
- 当前文件目录
- 环境变量指定的目录 PYTHONPATH
- sys.path 指定的目录位置，可以使用 *python -m site* 命令查看

Python 程序包的搜索路径默认在环境变量中 PYTHONPATH 指定，也可以通过脚本设置 sys.path (list 类型) 以添加其它搜索路径。

    sys.path.append(base_dir)

获取模块相关的全局变量，除了 __doc__，这些特殊属性都是由模块加载器设置的：

- `__name__` 当前模块命名空间；
- `__package__` 当前模块所在包名；
- `__file__` 获取当前模块绝对路径；
- `__loader__` 获取当前模所使用的加载器，准确地说这是被加载器加载并设置的属性值；
- `__doc__`  获取编写在模块头部模块注释，function’s documentation string，这些内容可用于自动生成文档；

Python 导入器协议涉及两个主要对象：

- Finder 模块查找器主要提供一个查找模块的方法 `finder.find_module(fullname, path=None)`。
- Loader 模块加载器主要提供一个加载模块的方法 `loader.load_module(fullname)`。

模块加载器执行加载时的一个任务就是给模块设置一些特殊属性，像模块命、包名、文件绝对路径，还有 __path__ 这个变量只会在包中设置。

加载器的 load_module() 文件基本执行流程；先判断如果 sys.modules 中存在 'fullname' 模块，加载器就使用这个模块。否则，reload() 方法就不能正确执行。如果不存在这个模块，就必需创建一个新的模块对象并添加到 `sys.modules` 字典中。

请注意，加载程序执行模块代码之前，模块对象必须在 `sys.modules`。这一点至关重要，因为模块代码可能（直接或间接）导入自身。预先将其添加到 `sys.modules` 中可以防止在最坏的情况下出现无边界递归，跟死循环一样，在最好的情况下可以防止多次加载。

如果加载失败，就要从 sys.modules 移除先前添加的模块对象。

如果成功加载 Python 模块，不包括内置模块或动态扩展库模块，就需要在模块的全局命名空间上，即在 module.__dict__ 上执行模块代码。


模块导入过程中有两种钩子：

- Meta hooks 在开始处理导入时执行，所以可以覆盖 sys.path、frozen modules 甚至是内置模块的处理过程。将 Finder 对象添加 `sys.meta_path` 进行注册。
- Path hooks 在部分 sys.path (or package.__path__) 处理中调用，通过添加 importer factory 到 `sys.path_hooks` 进行注册，这个列表保存可回调对象。

可调用对象接收一个参数，即路径项，如果调用对象无法处理路径项，则必须引发 `ImportError`。如果可以处理路径项，则必须返回 importer 对象。请注意，如果返回特定的 `sys.path` 条目，而内置导入机制后续将不再来处理该条目，即使导入器对象后续无法找到特定模块。可调回对象通常被称为 Import Hook，自此，类型的 __init__() 方法被调用。因为 __init__() 方法可以不返回任何东西，这也是 Import Hook 应该引发 ImportError 的原因。在新样式类中，使用 __new__()  方法可能会出现这种情况。

Path Hook 检查后的结构会缓存到 sys.path_importer_cache 字典中，用路径映射导入器对象。缓存会先于 sys.path_hooks 被扫描，如果需要强制重扫 sys.path_hooks，可以手动清除 sys.path_importer_cache 中的记录。

期间用到的属性数据类型：

- sys.path `<class 'list'>`
- sys.meta_path  `<class 'list'>`
- sys.path_hooks `<class 'list'>`
- sys.path_importer_cache  `<class 'dict'>`


模块名魔术变量 `__name__` 会根据运行方式有所不同，Python 执行脚本时，会自动创建 *__main__* 模块，所以通过它可以判断是不是直接运行解析脚本：

以下演示一个二级目录模块包的组织，首先通过程序输出了解决模块目录结构：

    📂 ~/
    ├── 📂 pak_root
    │  ├── 🐍 __init__.py
    │  ├── 🐍 Roo_Module.py
    │  ├── 🐍 Here.py
    │  └── 📂 pak_sub
    │       ├── 🐍 __init__.py
    │       ├── 🐍 Sub_Module.py
    │       └── 🐍 Here.py

注意 CodeGen 提提示的是生成的文件及其路径：

    CodeGen = "mod_root/Here.py"
    Path    = None
    Script  = /coding/pak_root/Here.py
    Module  = pak_root.Here
    Package = pak_root <Not a package>

    CodeGen = "pak_root/__init__.py"
    Path    = __path__ -> ['/coding/pak_root']
    Script  = /coding/pak_root/__init__.py
    Module  = pak_root
    Package = pak_root <A Package (__path__)>

    CodeGen = "pak_root/pak_sub/Here.py"
    Path    = None
    Script  = /coding/pak_root/pak_sub/Here.py
    Module  = pak_root.pak_sub.Here
    Package = pak_root.pak_sub <Not a package>

    CodeGen = "pak_root/pak_sub/__init__.py"
    Path    = __path__ -> ['/coding/pak_root/pak_sub']
    Script  = /coding/pak_root/pak_sub/__init__.py
    Module  = pak_root.pak_sub
    Package = pak_root.pak_sub <A Package (__path__)>

    CodeGen = "pak_root/pak_sub/SubModule.py"
    Path    = None
    Script  = /coding/pak_root/pak_sub/SubModule.py
    Module  = pak_root.pak_sub.SubModule
    Package = pak_root.pak_sub <Not a package>

    CodeGen = "pak_root/RootModule.py"
    Path    = None
    Script  = /coding/pak_root/RootModule.py
    Module  = pak_root.RootModule
    Package = pak_root <Not a package>

    Module   = __main__
    Package  = None <Not a package>
    Path     = None
    Doc      = function's documentation string
    sys.path = ['/coding', 'PY310/PY310.zip', 'PY310/lib', 'PY310', 'PY310/lib/site-packages']
    VAR =  global variable:  VAR @:/coding/pak_root/pak_sub/SubModule.py
    var =  global variable:  var @:/coding/pak_root/pak_sub/SubModule.py
    _var = <private symbol> private variable: _var @:/coding/pak_root/RootModule.py
    pak_root.pak_sub.HereFun is pak_root.pak_sub.SubModule.HereFun? True
    pak_root.HereFun is pak_root.RootModule.HereFun? True
    pak_root.HereFun is pak_root.pak_sub.HereFun? False
    
如果 __init__.py 文件没有导入其它内容，在导入这个包时，只会执行这个模块的默认初始化脚本。在 __init__.py 导入了其它模块的符号，那么这些被导入的全局符号它们就可以被其它模块导入使用。

如果存在 __init__.py 这个默认模块文件，导入这个模块目录中任何模块，包括子模块，它里的脚本代码都会被执行。但是，它里面定义的私有符号需要使用 import 进行显式导入，而不能通过 * 自动导入，这样才会将其定义的符号绑定到可用的命名空间。

Python 没有像 C++ 那样使用 public、protected、private 访问控制修饰符号，而是通过符号命名来隐含访问控制，下划线表示内部符号，不可被 * 自动导入。如果多个模块存在同名符号，那么最后使用 * 导入的就会自动覆盖前面导入的符号。


## ==⚡ RootModule SubModule 程序结构生成脚本

包与模块导入示范程序目录结构及代码文件自动生成：

```py
'''function's documentation string'''
import os, sys, importlib

def writeCode(lib_file, root):

    init_file = "__init__"
    here_file = "Here"

    def codegen(lib_file, dir):
        fun = lib_file + "Fun"
        code = f"""
if __name__=="__main__":
    import Here
else:
    pass
    from .Here import *

VAR  = " global variable:  VAR @:"+__file__
var  = " global variable:  var @:"+__file__
_var = "private variable: _var @:"+__file__
# __all__ = ["{fun}", "VAR", "var", "_var"]

def {fun}():
    print("{fun} @ {dir}{lib_file}.py")

go = globals()
path = "__path__ -> " + str(go['__path__']) if '__path__' in go else None
ispackage = "<Not a package>" if not path else "<A Package (__path__)>" 
print(f'''
    CodeGen = "{dir}{lib_file}.py"
    Path    = {{path}}
    Script  = {{__file__}}
    Module  = {{__name__}}
    Package = {{__package__}} {{ ispackage }}''')
"""
        return code

    init_code = codegen(init_file, root)
    lib_code  = codegen(lib_file , root)
    here_code = codegen(here_file, root)

    if not os.path.exists(root):
        os.mkdir(root)
    with open(f"{root}{init_file}.py", "w") as f: print(init_code, file=f)
    with open(f"{root}{lib_file}.py",  "w") as f: print(lib_code,  file=f)
    with open(f"{root}{here_file}.py", "w") as f: print(here_code, file=f)
    return print(f"writeCode done with {root}")
    print(f"""
============================================
# Python Code write to {root:20}#
============================================

==============={init_file}.py===============
{init_code}
==============={lib_file}.py================
{lib_code}
==============={here_file}.py===============
{here_code}
""")

if 1 or not os.path.exists("pkg_root") or not os.path.exists("pkg_root/pkg_sub/"):
    writeCode("RootModule", "pkg_root/")
    writeCode("SubModule",  "pkg_root/pkg_sub/")

if __name__=="__main__":

    # This two import statements just import __init__.py
    import pkg_root
    from pkg_root import *
    from pkg_root.pkg_sub import *
    from pkg_root.pkg_sub.SubModule import *
    from pkg_root.RootModule import VAR as RVAR, var as Rvar, _var
    from pkg_root.RootModule import RootModuleFun

    # import pkg_root
    # AttributeError: module 'pkg_root' has no attribute 'RootModule'
    import pkg_root.RootModule
    # pkg_root.RootModule.RootModuleFun()
    # pkg_root.HereFun()
    # AttributeError: module 'pkg_root' has no attribute 'RootModuleFun'. Did you mean: 'RootModule'?
    # pkg_root.RootModuleFun()

    go = globals()
    path = "path -> " + str(go['__path__']) if '__path__' in go else None
    ispackage = "<Not a package>" if not path else "<A Package>" 

    print(f'''
    Module   = {__name__}
    Package  = {__package__} {ispackage}
    Path     = {path}
    Doc      = {__doc__}
    sys.path = {sys.path}
    sys.argv = {sys.argv}
    VAR = {VAR}
    var = {var}
   _var = <private symbol> {_var}
    pkg_root.pkg_sub.HereFun is pkg_root.pkg_sub.SubModule.HereFun? {pkg_root.pkg_sub.HereFun is pkg_root.pkg_sub.SubModule.HereFun}
    pkg_root.HereFun is pkg_root.RootModule.HereFun? {pkg_root.HereFun is pkg_root.RootModule.HereFun}
    pkg_root.HereFun is pkg_root.pkg_sub.HereFun? {pkg_root.HereFun is pkg_root.pkg_sub.HereFun}
    ''')
```

作为另一个选择，使用 Powershell 脚本来生成脚本文件及目录结构：

```sh
chcp 65001

Function writeCode 
{
    Param([String]$lib_file, [String]$root)

    $init_file = "__init__"
    $here_file = "Here"

    Function codegen
    {
        param([String]$dir, [String]$lib_file)
        $fun = $lib_file + "Fun"
        $code = @"
print("$dir$lib_file.py")

VAR  = " global variable:  VAR @"+__name__+":"+__file__
var  = " global variable:  var @"+__name__+":"+__file__
_var = "private variable: _var @"+__name__+":"+__file__

def $fun():
    print("$fun @ $dir$lib_file.py")

"@
        return $code
    }

    $init_code = codegen $root $init_file
    $lib_code  = codegen $root $lib_file
    $here_code = codegen $root $here_file

    if(!(Test-Path $root)){ mkdir $root }
    # concatenate string syntax: $root+$init_file 
    out-file -InputObject $here_code -FilePath $root$here_file".py"  -Encoding UTF8
    out-file -InputObject $init_code -FilePath $root$init_file".py" -Encoding UTF8
    out-file -InputObject $lib_code  -FilePath  $root$lib_file".py"  -Encoding UTF8
    # Defulat Encoding UTF-16 with BOM may cause:
    # ValueError: source code string cannot contain null bytes

    echo @"
Python Code write to $root
=======================================

============$init_file.py==============
$init_code
============$lib_file.py===============
$lib_code
============$here_file.py==============
$here_code
"@

}

writeCode "RootModule" "pak_root/"
writeCode "SubModule"  "pak_root/pak_sub/"


# $Script:thisDir = Split-Path $MyInvocation.MyCommand.Path -Parent
# Error: ParameterArgumentValidationError
# out-file -InputObject $init_code + $dir + $init_file -FilePath $dir+$init_file
# OK
# out-file -InputObject ($init_code + $dir + $init_file) -FilePath $dir+$init_file
```




## ==⚡ scope global & nonlocal 作用域解析
- The Python Language Reference » 4. Execution model 4.2. Naming and binding 4.2.2. Resolution of names

```py
def setVariable():
    global var
    var = "var"

def main():
    print({"var":var}) # NameError: name 'var' is not defined
    setVariable()
    print({"var":var})
```

global 声明可以访问外部作用域变量，按函数嵌套结构一层一层回溯。nonlocal 声明只能访问函数外层变量，不进行回溯。

```py
g007 = l007 = 9         # define global g007 and l007

def scope_test():
    g007 = l007 = 8     # define local g007 and l007, and l007 as nonlocal of closure()
    def closure():      # define local function
        global g007     # define global variable
        nonlocal l007   # define nonlocal variable
        g007 = l007 = 7 # modify global g007 and nonlocal l007
    closure()
    print("inner g007 = %d  l007 = %d" % (g007, l007)) # print local g007 and l007

scope_test()
print("final g007 = %d  l007 = %d" % (g007, l007)) # print global g007 and l007

# inner g007 = 8  l007 = 7
# final g007 = 7  l007 = 9
```

小结：

1. global 变量查找顺序： Top Level -> 模块命名空间 -> Python 内置作用域；
2. 只有模块/类/函数能引入新作用域；
3. 内部作用域声明变量会覆盖外部变量，不声明直接用就逐级向上搜索变量变量；
4. nonlocal 变量只查找外一层作用域。



## ==⚡ Scopes and Namespaces
- The Python Tutorial 9.2.1. Scopes and Namespaces Example

This is an example demonstrating how to reference the different scopes and namespaces, and how global and nonlocal affect variable binding:

```py
def scope_test():
    """A simple scope test example class"""
    def do_local():
        spam = "local spam"

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"

    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)

scope_test()
print("In global scope:", spam)
```

The output of the example code is:

    After local assignment: test spam
    After nonlocal assignment: nonlocal spam
    After global assignment: nonlocal spam
    In global scope: global spam

Note how the local assignment (which is default) didn’t change scope_test’s binding of spam. The nonlocal assignment changed scope_test’s binding of spam, and the global assignment changed the module-level binding.

You can also see that there was no previous binding for spam before the global assignment.




## ==⚡ Anaconda
[Anaconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

Anaconda 是一个开源的包、环境管理器，可以用于在同一个机器上安装不同版本的软件包及其依赖，并能够在不同的环境之间切换。Anaconda 指的是一个开源的 Python 发行版本，其包含了 conda、Python 等180多个科学包及其依赖项。 因为包含了大量的科学包，Anaconda 的下载文件比较大（约 531 MB），如果只需要某些包，或者需要节省带宽或存储空间，也可以使用Miniconda这个较小的发行版，仅包含conda和 Python。

我们常常会遇到这样的情况，正在做的项目A和项目B分别基于python2和python3，而第电脑只能安装一个环境，这个时候Anaconda就派上了用场，它可以创建多个互不干扰的环境，分别运行不同版本的软件包，以达到兼容的目的。

Anaconda 通过管理工具包、开发环境、Python版本，大大简化了你的工作流程。不仅可以方便地安装、更新、卸载工具包，而且安装时能自动安装相应的依赖包，同时还能使用不同的虚拟环境隔离不同要求的项目。

有时下载特别慢，是因为Anaconda默认的镜像源在国外，非常不稳定。这里可以换成清华的镜像源，下载速度可以提升将近10倍。

在 conda 的设计中，目录 pkgs 是下载、存放缓存，以及提取下载包的地方。同时，anaconda 一起携带的包也会放在这里。

它有一个非常关键的作用：我们在构建一些envs的时候，对一些包的依赖会通过硬盘链接链接到 pkgs 目录，这样虚拟环境生成的速度大大加快，占用空间就大大减小了！！！

清理 pkgs 的方式，一是直接删除 pkgs，大大节省空间。但坏处就是当创建新环境时，现有包（在其他环境中）的共享文件将不再共享硬链接。官方推荐的方式更加安全，通过命令来删除：

    conda clean -h

清理的方式，tarballs 就是打包备份文件：

    -a, --all   Remove index cache, lock files, unused cache packages, and tarballs.
    -i, --index-cache       Remove index cache.
    -l, --lock  Remove all conda lock files.
    -p, --packages  Remove unused packages from writable package caches. WARNING: This does not check for packages installed using symlinks back to the package cache.
    -t, --tarballs  Remove cached package tarballs.


安装，首先建立配置文件：

windows下的路径为 `C:\Users\xxx\pip\pip.ini`
linux下的路径为 `~/.pip/pip.conf`

    [global]
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
    [install]
    trusted-host=pypi.tuna.tsinghua.edu.cn

然后执行 conda 命令设置安装源镜像地址，show_channel_urls 可以在安装时显示相应的安装源地址：

    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    conda config --set show_channel_urls yes

镜像源的切换完成，检测命令行 conda info，其它命令参考：

    activate                             // 切换到默认base环境
    activate py3                         // 切换到py3环境
    conda create -n py3 python=3         // 创建一个名为py3的环境并指定python版本为3(的最新版本)
    conda list                           // 列出当前环境的所有包
    conda env list                       // 列出conda管理的所有环境
    conda install requests               // 安装requests包
    conda remove requests                // 卸载requets包
    conda remove -n py3 --all            // 删除learn环境及下属所有包
    conda update requests                // 更新requests包
    conda env export > environment.yaml  // 导出当前环境的包信息
    conda env create -f environment.yaml // 用配置文件创建新的虚拟环境


Windows 下通过 Anaconda 安装 tensorflow 的方法，

Anaconda版本为Anaconda 4.4.0，对应的python版本为3.6，想直接使用python35版的Anaconda，可以去清华镜像，找对应的Anaconda4.2.0的版本进行下载。 

命令验证安装

    >conda --version

配置 python 3.5

前面提到了，我们所下载的Anaconda的默认环境是python3.6的，而tensorflow目前支持的是python3.5的，所以我们就需要在Anaconda上配置python3.5的环境。 
在cmd中输入>conda create --name python35 python=3.5 

当然，python35的环境名你可以自行命名，官方教程上命名是tensorflow，过程中会提示输入y/n,输入y即可，输入3.5会自动选择3.5.x中最高版本，你可以输入3.5.x自行选择版本。等待一会安装完成后，在cmd中键入

    >conda info --envs 

确认刚才的环境配置成功。

Tensorflow安装

作为初学者，我们安装cpu版本的tensorflow足够使用，如需安装gpu版的，跟cpu的小同大异，官方教程写的足够清楚，需要显卡为Nvidia，并且配置cuda才可以使用。这里我们安装cpu版本。 
输入命令切换到python35的环境。 deactivate 可切换到默认环境。

    >activate python35

在python35的环境下，使用pip安装tensorflow。

    >pip install --upgrade --ignore-installed tensorflow

安装完成后，测试安装的tensorflow； 
在python35环境下，键入>python后，进行如下操作

    >>> import tensorflow as tf
    >>> hello = tf.constant('Hello,tensorflow')
    >>> sess = tf.Session()
    >>> print(sess.run(hello))

这里会出现很多的Warning，暂时没有影响，意思大概是可以优化cpu性能，后面研究一下进行解决。

安装Spyder和ipython

打开 Anaconda Navigator，在Environments里的python35环境中，选择选项为Not installed，在搜索框中搜索spy和ipy找到spyder和ipython进行勾选，点击apply进行安装，有很多相关的依赖包一并会安装上。 

某些版本 Anaconda 会在配置环境时出现无法定位程序输入点 OPENSSL_sk_new_reserve 问题，这是因为 Anaconda\Library\bin 目录下的 libssl-1_1-x64.dll 版本问题，可以用 Anaconda\DLLS 目录下的版本替代。

    >conda create  -n py27 python=2.7
    Collecting package metadata (repodata.json): done
    Solving environment: done


    ==> WARNING: A newer version of conda exists. <==
      current version: 4.7.11
      latest version: 4.7.12

    Please update conda by running

        $ conda update -n base -c defaults conda



    ## Package Plan ##

      environment location: C:\Anaconda3\envs\py27

      added / updated specs:
        - python=2.7


    The following packages will be downloaded:

        package                    |            build
        ---------------------------|-----------------
        certifi-2016.2.28          |           py27_0         213 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        pip-9.0.1                  |           py27_1         1.6 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        python-2.7.13              |                1        23.8 MB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        setuptools-36.4.0          |           py27_1         525 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        vc-9                       |                0          705 B  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        vs2008_runtime-9.00.30729.5054|                0        1016 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        wheel-0.29.0               |           py27_0         121 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        wincertstore-0.2           |           py27_0          14 KB  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
        ------------------------------------------------------------
                                               Total:        27.3 MB

    The following NEW packages will be INSTALLED:

      certifi            anaconda/pkgs/free/win-64::certifi-2016.2.28-py27_0
      pip                anaconda/pkgs/free/win-64::pip-9.0.1-py27_1
      python             anaconda/pkgs/free/win-64::python-2.7.13-1
      setuptools         anaconda/pkgs/free/win-64::setuptools-36.4.0-py27_1
      vc                 anaconda/pkgs/free/win-64::vc-9-0
      vs2008_runtime     anaconda/pkgs/free/win-64::vs2008_runtime-9.00.30729.5054-0
      wheel              anaconda/pkgs/free/win-64::wheel-0.29.0-py27_0
      wincertstore       anaconda/pkgs/free/win-64::wincertstore-0.2-py27_0


    Proceed ([y]/n)? y


    Downloading and Extracting Packages
    vs2008_runtime-9.00. | 1016 KB   | ############################################################################ | 100%
    setuptools-36.4.0    | 525 KB    | ############################################################################ | 100%
    certifi-2016.2.28    | 213 KB    | ############################################################################ | 100%
    vc-9                 | 705 B     | ############################################################################ | 100%
    wincertstore-0.2     | 14 KB     | ############################################################################ | 100%
    python-2.7.13        | 23.8 MB   | ############################################################################ | 100%
    wheel-0.29.0         | 121 KB    | ############################################################################ | 100%
    pip-9.0.1            | 1.6 MB    | ############################################################################ | 100%
    Preparing transaction: done
    Verifying transaction: done
    Executing transaction: done
    #
    # To activate this environment, use
    #
    #     $ conda activate py27
    #
    # To deactivate an active environment, use
    #
    #     $ conda deactivate

    >conda env list
    # conda environments:
    #
    base                  *  C:\Anaconda3
    py27                     C:\Anaconda3\envs\py27



## ==⚡ Python 2.7 和 3.7 差别

区别一: print 语法使用

>>> print "Hello Python"  # Python 2.7
>>> print("Hello Python") # Python 3.7


例子:在 Python 3.7 使用双引号触发 SyntaxError 异常机制，提示 Did you mean print("Hello Python")  

print 换行和不换行区别

- Python 2.7 print 不换行使用","即可
- Python 3.7 print 不换行使用end=""


区别二: raw_input()和input()

- Python 2.7 使用 raw_input() 接收字符串，input() 接收数字 int/float。
- Python 3.7 仅存在 input()，两者合并，接收任意格式 返回 string


区别三: 函数 cmp()

python 2.7 使用 cmp(x,y) 函数比较 2 个对象，如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1
python 3.7 移除 cmp()，需要实现比较功能，引入 operator 模块，适合任何对象

    >>> import operator
    >>> operator.eq('hello', 'name');
    False
    >>> operator.eq('hello', 'hello');
    True

区别四: string 字母 大小写字符串

- string.letters 包含所有字母（大写或小写）的字符串
- Python 3.0 中 string.ascii_letters


## ==⚡ Waf build 工具
- [The Waf Book](https://waf.io/book/#_projects_and_commands)

Waf 是用来帮助编译软件工程的 Python 工具。

Waf 脚本与命令

build 了之后，可以跟踪到 `${SRC}` 和 `${TGT}` 有关联的文件，只有 `${SRC}` 被修改过，下次会重新 build 这个文件，想想如果一个 project 非常大，在测试过程中或者发布，每次都要全部 build 一遍，尽管你只修改了一个文件，当然如果你知道你改了哪个文件，可以单独 build 那个文件，但是谁能记得清自己修改了哪些文件，waf 可以解决这个问题，不过 waf 虽然可以用相对路径，但是最终还是绝对路径，如果移动了 project 文件夹，那么 SRC 和 TGT 的关系就丢失了，如果 build 关系也能用相对路径，那就更完美了。

软件通常有保存在版本管理系统 git, subversion 中，有些用于描述如何处理这些源文件的编译脚本 build scripts/Makefiles...。一些生成文件 build files 通常由 源文件转换而来，但它们是可选的。在 Waf 中编译脚本是那些命名为 wscript 的文件。

通常，一个工程包含下面若干阶段：

- 配置（configure）： 配置工程，找到依赖项的位置
- 编译（build）： 将源文件转换为生成文件
- 安装（install）： 安装生成文件
- 卸载（uninstall）： 卸载生成文件
- 打包（dist）： 生成源文件的存档
- 清理（clean）： 删除生成文件

每一阶段在 wscript 文件中都是以一个 Python 函数构造的，该函数使用 waflib.Context.Context 的一个实例作为函数。

让我们从在文件夹 /tmp/myproject 下 新建一个 wscript 文件开始：

    def configure(conf):
        print("configure!")

    def build(bld):
        print("build!")

我们也需要一个 Waf 二进制文件，如 http://waf.googlecode.com/files/waf-1.6.1 并把该文件拷贝到工程目录下：

    $ cd /tmp/myproject
    $ wget http://waf.googlecode.com/files/waf-1.6.1

我们只需简单地将命令作为参数传递给 waf 即可运行此工程：

    $ ./waf-1.6.1 configure build
    configure!
    build!

目标
编译系统的一个重要组成部分是声明目标的创建过程。这里有一个非常简单的例子：

    def build(bld):
        tg = bld(rule='cp ${SRC} ${TGT}', source='wscript', target='foo.txt')
        bld(rule='cp ${SRC} ${TGT}', source='foo.txt', target='bar.txt')

调用 bld(..) 创建了一个 任务生成器（task generator） ，它用来生成 任务（tasks） 。 任务则实际运行命令 cp。 命令直到所有脚本都被读取后才会运行，这对计算编译顺序非常重要。

表达式 ${SRC} 和 ${TGT} 是快捷方式，用来避免文件名重复。更多的快捷方式可以通过使用 ${} 符合定义，该符号能从 bld.env 属性读取对应的值。

    def build(bld):
        bld.env.MESSAGE = 'Hello, world!'
        bld(rule='echo ${MESSAGE}', always=True)

bld 对象是类 waflib.Build.BuildContext，它的 env 属性是类 waflib.ConfigSet.ConfigSet 的一个实例。

这些值被保存在此对象中以便于共享/保存/加载。这里是如何在配置和编译过程中共享数据来实现和上个例子同样的事情：

    def configure(cnf):
        cnf.env.MESSAGE = 'Hello, world!'

    def build(bld):
        bld(rule='echo ${MESSAGE}', always=True)

脚本与工具
为让一个脚本使用子目录下的另一脚本，需要使用方法 waflib.Context.Context.recurse 及包含 wscript 文件夹的相对路径。例如，调用 src/wscript 脚本中 build 函数，应该这样写：、

    def build(bld):
        bld.recurse('src')

Waf 通过特定模块 Waf tools 提供了对特定语言和编译器的支持。这些工具与 wscript 文件类似且提供如 configure 或者 build 函数。这里是一个C语言的简单工程：


    def options(opt):
        opt.load('compiler_c')
    def configure(cnf):
        cnf.load('compiler_c')
    def build(bld):
        bld(features='c cprogram', source='main.c', target='app')

options 函数是另一个预定义的命令，用来设置命令行选项。它的参数是 waflib.Options.OptionsContext 的一个实例。 提供了工具 compiler_c用以检测是否有 C 编译器存在，并设置各种参数如 cnf.env.CFLAGS。

用 bld 声明的任务生成器并没有 规则（rule） 关键字，而是用一系列 特性（features） 来引用那些调用适当规则的方法。 在这个例子中，一个规则被调用以编译文件，而另一个用来链接目标文件到二进制文件 app 。 还存在其他一些工具依赖的 特性（features） 如： javac，cs 或者 tex 。

一个同时使用C和C++的工程
下面是一个更复杂一些工程的脚本


    def options(opt):
        opt.load('compiler_c compiler_cxx')
    def configure(cnf):
        cnf.load('compiler_c compiler_cxx')
        configure.check(features='cxx cxxprogram', lib=['m'], cflags=['-Wall'], defines=['var=foo'], uselib_store='M')
    def build(bld):
        bld(features='c cshlib', source='b.c', target='mylib')
        bld(features='c cxx cxxprogram', source='a.c main.cpp', target='app', use=['M','mylib'], lib=['dl'])

方法 waflib.Tools.c_config.check 会内部执行编译以检测在操作系统中是否存在 libm 库。然后它会定义变量如：

    conf.env.LIB_M = ['m']
    conf.env.CFLAGS_M = ['-Wall']
    conf.env.DEFINES_M = ['var=foo']

通过声明 use=['M', 'mylib']，程序 app 会继承所有在配置过程中定义的 M 变量。该程序也会使用库 mylib 并且编译顺序和依赖项都会更改以使 mylib 在 app 之前链接。

use 属性也适用于其他语言如Java（jar 文件之间的依赖）或者C#（程序集之间的依赖）。


工程特定扩展
feature 关键字是高层次的对现有 Waf 方法的引用。例如： c feature 会添加方法 waflib.Tools.ccroot.apply_incpaths 以执行。要添加一个为所有C目标加入任务生成器路径到包含路径的新方法，可以采用如下声明：


    from waflib import Utils
    from waflib.TaskGen import feature, before_method
    @feature('c')
    @before_method('apply_incpaths')
    def add_current_dir_to_includes(self):
        self.includes = Utils.to_list(self.includes)
        self.includes.append(self.path)

    def build(bld):
        tg = bld(features='c', source='main.c', target='app')

这些 feature 方法被绑定到类 waflib.TaskGen.task_gen ，在这个例子中是对象 tg 的类。新的 feature 可以以相同的方式声明：


    from waflib.TaskGen import feature, after_method
    @feature('debug_tasks')
    @after_method('apply_link')
    def print_debug(self):
        print('tasks created %r' % self.tasks)

    def build(bld):
        tg = bld(features='c cprogram debug_tasks', source='main.c', target='app')

通过绑定新方法到 context 类， 声明可以变得更加用户友好。


    from waflib.Build import BuildContext
    def enterprise_program(self, *k, **kw):
        kw['features'] = 'c cprogram debug_tasks'
        return self(*k, **kw)
    BuildContext.enterprise_program = enterprise_program

    def build(bld):
        # no feature line
        bld.enterprise_program(source='main.c', target='app')

这些辅助代码放到单独文件中即可以成为一个 Waf 工具。为了便于部署，新的 Waf 工具甚至可以被添加到 Waf 文件中。



## ==⚡ Fabric & Invoke
- Fabric https://www.fabfile.org/
- Invoke https://www.pyinvoke.org/

网络上将 pip, virtualenv, fabric 通称为 Python 三大神器，一个用来管理依赖，一个管理虚拟环境，另一个用来进行自动化发布。

Fabric 是 Python 自动化发布工具，它提供了丰富的同 SSH 交互的接口，用来在本地、远程机器上自动化、流水化地执行 Shell 命令。

核心的 invoke 基础组件是一个命令行工具，它专注于通过 CLI 和 shell 命令来执行任务，通过它可以实现一个自动化构建工具。

    $ python3 -m pip install fabric
    $ python3 -m pip install invoke

在 Windows WSL 系统上启用 SSH 服务，先适当修改配置文件，更改端口 Port 22 改成 Port，或启用密码验证 PasswordAuthentication，并创建密钥对：

```sh
$ sudo vi /etc/ssh/sshd_config
$ cd /etc/ssh              
$ sudo ssh-keygen -A
 ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519   
$ sudo /etc/init.d/ssh start
  * Starting OpenBSD Secure Shell server sshd          [ OK ]
$ sudo service ssh restart

# 开机自启设置
# vi /etc/rc.local
# service sshd start
```

启用密码验证就可以使用用户账户登录：

    ssh root@localhost -p 22

未启用密码登录，且未正确配置登录密钥，就可能出现公钥权限问题 Permission denied (publickey).

使用公钥登录需要在服务器中记录受认可的公钥，以下情况都会导致公钥访问权限被拒绝：

- 本地访问远程主机的公钥没有添加或者被取消（无法认证）
- 远程服务器公钥文件夹权限错误，.ssh 和 .ssh/authorized_keys，需要保证只有用户自己有权限，否则验证无效。

使用 ssh-keygen 为本地机器生成的一对秘钥，公钥文件的内容，C:\Users\XXX\.ssh\id_rsa.pub，应该保存在远程服务器端已认证秘钥文件内 `~/.ssh/authorized_keys`。登录时，注意要指定相应的用户账户。


示范，通过 SSH 登录，在多个服务器上执行命令：

```py
from fabric import Connection, SerialGroup

def disk_free(c):
    uname = c.run('uname -s', hide=True)
    if 'Linux' in uname.stdout:
        command = "df -h / | tail -n1 | awk '{print $5}'"
        return c.run(command, hide=True).stdout.strip()
    err = "No idea how to get disk space on {}!".format(uname)
    raise Exit(err)

for cxn in SerialGroup('web1', 'web2', 'db1'):
    print("{}: {}".format(cxn, disk_free(cxn)))

# Transfer files
# result = Connection('localhost').run('uname -s', hide=True)
c = Connection('web1')
c.put('myfiles.tgz', '/opt/mydata')
c.run('tar -C /opt/mydata -xzvf /opt/mydata/myfiles.tgz')
c.run('whoami')     # who am I?
c.sudo('whoami')    # as root
c.local('echo ---------- now from local')
c.local('dir /w')   # assuming client is windows

pool = SerialGroup('web1', 'web2', 'web3')
pool.put('myfiles.tgz', '/opt/mydata')
pool.run('tar -C /opt/mydata -xzvf /opt/mydata/myfiles.tgz')

```

示范，任务脚本 tasks.py 内容如下，使用 @task 装饰器定义任务函数：

```py
from invoke import task

@task
def clean(c, docs=False, bytecode=False, extra=''):
    patterns = ['build']
    if docs:
        patterns.append('docs/_build')
    if bytecode:
        patterns.append('**/*.pyc')
    if extra:
        patterns.append(extra)
    for pattern in patterns:
        c.run("rm -rf {}".format(pattern))

@task
def build(c, docs=False):
    c.run("python setup.py build")
    if docs:
        c.run("sphinx-build docs docs/_build")
```

特别继承自 GNU Make 通用模式的最小模板，实现在一次调用中运行多个任务的能力：

    $ python3 -m invoke --list
    $ python3 -m invoke clean build

直接在脚本中运行任务：

```py
from invoke import run
cmd = "pip install -r requirements.txt"
result = run(cmd, hide=True, warn=True)
print(result.ok)
print(result.stdout.splitlines()[-1])
```

任务参数列表与命令行：

```py
@task
def hi(c, name):
    print("Hi {}!".format(name))

# It can be invoked in the following ways, all resulting in “Hi Name!”:
# $ invoke hi Name
# $ invoke hi --name Name
# $ invoke hi --name=Name
# $ invoke hi -n Name
# $ invoke hi -nName
```

使用前置任务和后置任务，pre 和 post 数组指定预先执行、或后续执行的任务，默认在参数列表中传入任务函数名就是指定 pre 任务：

```py
from invoke import task

@task
def clean(c):
    c.run("rm -rf docs/_build")

# @task(pre=[clean], post=[moretask])
@task(clean)
def build(c):
    c.run("sphinx-build docs docs/_build")
```

创建任务命名空间，将上面的脚本命名为 docs.py 作为命名空间 docs 下的任务，并创建以下任务脚本：

```py
from invoke import Collection, task
import docs

@task
def deploy(c):
    c.run("python setup.py sdist")
    c.run("twine upload dist/*")

namespace = Collection(docs, deploy)
# $ invoke --list
# Available tasks:
#     deploy
#     docs.build
#     docs.clean
```

使用响应，自动答复正在调用的命令，例如除目录下的文件：

```py
from invoke import task, Responder

@task
def always_ready(c):
    responder = Responder(
        # pattern=r"Are you ready? \[Y/n\] ",
        pattern=r"是否确认(Y/N)?",
        response="y\n",
    )
    c.run("del /s cache_files", watchers=[responder])
```



# =🚩 What’s New in Python
- Python 3.10.2 Documentation » What’s New in Python
- Python Changelog https://docs.python.org/3/whatsnew/changelog.html

The “What’s New in Python” series of essays takes tours through the most important changes between major Python versions. They are a “must read” for anyone wishing to stay up-to-date after a new release.

The “Changelog” is an HTML version of the file built from the contents of the Misc/NEWS.d directory tree, which contains all nontrivial changes to Python for the current version.


了解 Python 各版本引入的特性对排除因为版本出现的兼容问题很有帮助，参考源代码 Doc\whatsnew 目录。

例如，Python 3。10 引入的模式匹配 match 和泛型别名（可以指泛型的具体类型）或类型别名、Union 类型等，这些新功能在旧版本上就会出现运行错误，可能是无效语法，也可以是操作错误之类，显得非常奇怪：

```py
# Python 3.10+ is OK
a = 1
match a:
    case 1: print("one")
    case _: print(_)
# one
a = list[int]
print(type(a))
# <class 'types.GenericAlias'>

# Python 3.9- is fault
    match status:
          ^
SyntaxError: invalid syntax

TypeError: 'type' object is not subscriptable
```

Python 2.2 在类型上有重大更新，PEPs 252 and 253: Type and Class Changes，引入新式类，Old and New Classes。新类型在多继承时处理多个同名方法时，对应解析算法 MRO。Python 3.0a1 版本后，所有类都是新式类实现，旧式类成为过去，Python-3.10.2\Misc\HISTORY： Classic classes are a thing of the past. 

```py
class C(object):
    def __init__ (self):
        ...
    ...
```

其中，Python 2.x 和 Python 3.x 两大版本是断裂式更新，Python 3.x 不向下兼容，与上一代语法上有很大不同。在非生产环境，譬如学习阶段，使用不同版本并不会有太大的区别，但建议使用最新的 3.x 版本。

Python 3.0 也叫 Python 3000 或 Py3K。

区别一: print 语句变 print() 函数

>>> print "Hello Python"  # Python 2.7
>>> print("Hello Python") # Python 3.7


例子:在 Python 3.7 使用双引号触发 SyntaxError 异常机制，提示 Did you mean print("Hello Python")  

print 换行和不换行区别

- Python 2.7 print 不换行使用","即可
- Python 3.7 print 不换行使用 end=""


区别二: raw_input() 和 input()

- Python 2.7 使用 raw_input() 接收字符串，input() 接收数字 int/float。
- Python 3.7 仅存在 input()，两者合并，接收任意格式 返回 string


区别三: 函数 cmp()

Python 2.7 使用 cmp(x,y) 比较 2 个对象，如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1
Python 3.7 移除 cmp()，需要实现比较功能，引入 operator 模块，适合任何对象

>>> import operator
>>> operator.eq('hello', 'name');
False
>>> operator.eq('hello', 'hello');
True

区别四: string 字母 大小写字符串

- string.letters 包含所有字母（大写或小写）的字符串
- Python 3.0 中 string.ascii_letters


## ==⚡ Python 3.10.2 Doc - rsStructuredText

官方文档基于 reStructuredText 格式，使用 Sphinx documentation 转译。

Python-3.10.2 Doc 目录、文件标注，标准库部分内容最多，独立放后面：

+-- Doc\c-api
|   ✒ [Python/C API Reference Manual](c-api\index.rst)
|   ✒ [Introduction](c-api\intro.rst)
|   |   ◦ Coding standards
|   |   ◦ Include Files
|   |   ◦ Useful macros
|   |   ◦ Objects, Types and Reference Counts
|   |   ◦ Exceptions
|   |   ◦ Embedding Python
|   |   ◦ Debugging Builds
|   ✒ [C API Stability](c-api\stable.rst)
|   |   ◦ Stable Application Binary Interface
|   |   ◦ Platform Considerations
|   |   ◦ Contents of Limited API
|   ✒ [The Very High Level Layer](c-api\veryhigh.rst)
|   ✒ [Reference Counting](c-api\refcounting.rst)
|   ✒ [Exception Handling](c-api\exceptions.rst)
|   |   ◦ Printing and clearing
|   |   ◦ Raising exceptions
|   |   ◦ Issuing warnings
|   |   ◦ Querying the error indicator
|   |   ◦ Signal Handling
|   |   ◦ Exception Classes
|   |   ◦ Exception Objects
|   |   ◦ Unicode Exception Objects
|   |   ◦ Recursion Control
|   |   ◦ Standard Exceptions
|   |   ◦ Standard Warning Categories
|   ✒ [Utilities](c-api\utilities.rst)
|   • [Operating System Utilities](c-api\sys.rst)
|   • [Importing Modules](c-api\import.rst)
|   • [Data marshalling support](c-api\marshal.rst)
|   • [Parsing arguments and building values](c-api\arg.rst)
|   • [String conversion and formatting](c-api\conversion.rst)
|   • [Reflection](c-api\reflection.rst)
|   • [Codec registry and support functions](c-api\codec.rst)
|   ✒ [Abstract Objects Layer](c-api\abstract.rst)
|   • [Object Protocol](c-api\object.rst)
|   • [Call Protocol](c-api\call.rst)
|   • [Number Protocol](c-api\number.rst)
|   • [Sequence Protocol](c-api\sequence.rst)
|   • [Mapping Protocol](c-api\mapping.rst)
|   • [Iterator Protocol](c-api\iter.rst)
|   • [Buffer Protocol](c-api\buffer.rst)
|   • [Old Buffer Protocol](c-api\objbuffer.rst)
|   ✒ [Concrete Objects Layer](c-api\concrete.rst)
|   |   + Fundamental Objects
|   |       • [The ``None`` Object](c-api\none.rst)
|   |       • [Type Objects](c-api\type.rst)
|   |   + Numeric Objects
|   |       • [Integer Objects](c-api\long.rst)
|   |       • [Boolean Objects](c-api\bool.rst)
|   |       • [Floating Point Objects](c-api\float.rst)
|   |       • [Complex Number Objects](c-api\complex.rst)
|   |   + Sequence Objects
|   |       • [Bytes Objects](c-api\bytes.rst)
|   |       • [Byte Array Objects](c-api\bytearray.rst)
|   |       • [Unicode Objects and Codecs](c-api\unicode.rst)
|   |       • [Tuple Objects](c-api\tuple.rst)
|   |       • [List Objects](c-api\list.rst)
|   |   + Container Objects
|   |       • [Dictionary Objects](c-api\dict.rst)
|   |       • [Set Objects](c-api\set.rst)
|   |   + Function Objects
|   |       • [Cell Objects](c-api\cell.rst)
|   |       • [Code Objects](c-api\code.rst)
|   |       • [Function Objects](c-api\function.rst)
|   |       • [Instance Method Objects](c-api\method.rst)
|   |   + Other Objects
|   |       • [File Objects](c-api\file.rst)
|   |       • [Module Objects](c-api\module.rst)
|   |       • [Iterator Objects](c-api\iterator.rst)
|   |       • [Descriptor Objects](c-api\descriptor.rst)
|   |       • [Slice Objects](c-api\slice.rst)
|   |       • [MemoryView objects](c-api\memoryview.rst)
|   |       • [Weak Reference Objects](c-api\weakref.rst)
|   |       • [Capsules](c-api\capsule.rst)
|   |       • [Generator Objects](c-api\gen.rst)
|   |       • [Coroutine Objects](c-api\coro.rst)
|   |       • [Context Variables Objects](c-api\contextvars.rst)
|   |       • [DateTime Objects](c-api\datetime.rst)
|   |       • [Objects for Type Hinting](c-api\typehints.rst)
|   ✒ [Initialization, Finalization, and Threads](c-api\init.rst)
|   |   ◦ Before Python Initialization
|   |   ◦ Global configuration variables
|   |   ◦ Initializing and finalizing the interpreter
|   |   ◦ Process-wide parameters
|   |   ◦ Thread State and the Global Interpreter Lock
|   |   ◦ Sub-interpreter support
|   |   ◦ Asynchronous Notifications
|   |   ◦ Profiling and Tracing
|   |   ◦ Advanced Debugger Support
|   |   ◦ Thread Local Storage Support
|   ✒ [Python Initialization Configuration](c-api\init_config.rst)
|   |   ◦ Example
|   |   ◦ PyWideStringList
|   |   ◦ PyStatus
|   |   ◦ PyPreConfig
|   |   ◦ Preinitialize Python with PyPreConfig
|   |   ◦ PyConfig
|   |   ◦ Initialization with PyConfig
|   |   ◦ Isolated Configuration
|   |   ◦ Python Configuration
|   |   ◦ Python Path Configuration
|   |   ◦ Py_RunMain()
|   |   ◦ Py_GetArgcArgv()
|   |   ◦ Multi-Phase Initialization Private Provisional API
|   ✒ [Memory Management](c-api\memory.rst)
|   |   ◦ Overview
|   |   ◦ Allocator Domains
|   |   ◦ Raw Memory Interface
|   |   ◦ Memory Interface
|   |   ◦ Object allocators
|   |   ◦ Default Memory Allocators
|   |   ◦ Customize Memory Allocators
|   |   ◦ Debug hooks on the Python memory allocators
|   |   ◦ The pymalloc allocator
|   |   ◦ tracemalloc C API
|   |   ◦ Examples
|   ✒ [Object Implementation Support](c-api\objimpl.rst)
|   • Memory Management
|   |   ◦ Allocating Objects on the Heap
|   |   ◦ Common Object Structures
|   |   ◦ Type Objects
|   |   ◦ Number Object Structures
|   |   ◦ Mapping Object Structures
|   |   ◦ Sequence Object Structures
|   |   ◦ Buffer Object Structures
|   |   ◦ Async Object Structures
|   |   ◦ Slot Type typedefs
|   |   ◦ Examples
|   |   ◦ Supporting Cyclic Garbage Collection
|   • [Allocating Objects on the Heap](c-api\allocation.rst)
|   • [Common Object Structures](c-api\structures.rst)
|   • [Type Objects](c-api\typeobj.rst)
|   • [Supporting Cyclic Garbage Collection](c-api\gcsupport.rst)
|   ✒ [API and ABI Versioning](c-api\apiabiversion.rst)
+-- Doc\distributing
|   • [Distributing Python Modules](distributing\index.rst)
+-- Doc\distutils
|   • [Distributing Python Modules (Legacy version)](distutils\index.rst)
|   • [An Introduction to Distutils](distutils\introduction.rst)
|   • [Writing the Setup Script](distutils\setupscript.rst)
|   • [Writing the Setup Configuration File](distutils\configfile.rst)
|   • [Creating a Source Distribution](distutils\sourcedist.rst)
|   • [Uploading Packages to the Package Index](distutils\uploading.rst)
|   • [Extending Distutils](distutils\extending.rst)
|   • [Distutils Examples](distutils\examples.rst)
|   • [Command Reference](distutils\commandref.rst)
|   • [API Reference](distutils\apiref.rst)
|   • [Creating Built Distributions](distutils\builtdist.rst)
|   • [The Python Package Index (PyPI)](distutils\packageindex.rst)
|   • [https://setuptools.pypa.io/en/latest/](distutils\_setuptools_disclaimer.rst)
+-- Doc\extending
|   • [Extending and Embedding the Python Interpreter](extending\index.rst)
|   • [Extending Python with C or C++](extending\extending.rst)
|   • [Defining Extension Types: Tutorial](extending\newtypes_tutorial.rst)
|   • [Defining Extension Types: Assorted Topics](extending\newtypes.rst)
|   • [Building C and C++ Extensions](extending\building.rst)
|   • [Building C and C++ Extensions on Windows](extending\windows.rst)
|   • [Embedding Python in Another Application](extending\embedding.rst)
+-- Doc\faq
|   • [Python Frequently Asked Questions](faq\index.rst)
|   • [Design and History FAQ](faq\design.rst)
|   • [Extending/Embedding FAQ](faq\extending.rst)
|   • [General Python FAQ](faq\general.rst)
|   • [Graphic User Interface FAQ](faq\gui.rst)
|   • ["Why is Python Installed on my Computer?" FAQ](faq\installed.rst)
|   • [Library and Extension FAQ](faq\library.rst)
|   • [Programming FAQ](faq\programming.rst)
|   • [Python on Windows FAQ](faq\windows.rst)
+-- Doc\howto
|   • [Python HOWTOs](howto\index.rst)
|   • [Porting Python 2 Code to Python 3](howto\pyporting.rst)
|   • [Porting Extension Modules to Python 3](howto\cporting.rst)
|   • [Curses Programming with Python](howto\curses.rst)
|   • [Descriptor HowTo Guide](howto\descriptor.rst)
|   • [Functional Programming HOWTO](howto\functional.rst)
|   • [Logging HOWTO](howto\logging.rst)
|   • [Logging Cookbook](howto\logging-cookbook.rst)
|   • [Regular Expression HOWTO](howto\regex.rst)
|   • [Socket Programming HOWTO](howto\sockets.rst)
|   • [Sorting HOW TO](howto\sorting.rst)
|   • [Unicode HOWTO](howto\unicode.rst)
|   • [HOWTO Fetch Internet Resources Using The urllib Package](howto\urllib2.rst)
|   • [Argparse Tutorial](howto\argparse.rst)
|   • [An introduction to the ipaddress module](howto\ipaddress.rst)
|   • [Argument Clinic How-To](howto\clinic.rst)
|   • [Instrumenting CPython with DTrace and SystemTap](howto\instrumentation.rst)
|   • [Annotations Best Practices](howto\annotations.rst)
+-- Doc\install
|   • [Installing Python Modules (Legacy version)](install\index.rst)
+-- Doc\installing
|   • [Installing Python Modules](installing\index.rst)
+-- Doc\reference
|   • [The Python Language Reference](reference\index.rst)
|   • [Introduction](reference\introduction.rst)
|   • [Lexical analysis](reference\lexical_analysis.rst)
|   • [Data model](reference\datamodel.rst)
|   • [Execution model](reference\executionmodel.rst)
|   • [The import system](reference\import.rst)
|   • [Expressions](reference\expressions.rst)
|   • [Simple Statements](reference\simple_stmts.rst)
|   • [Compound statements](reference\compound_stmts.rst)
|   • [Top Level Components](reference\toplevel_components.rst)
|   • [Full Grammar specification python.gram](reference\grammar.rst)
+-- Doc\tutorial
|   • [The Python Tutorial](tutorial\index.rst)
|   • [Whetting Your Appetite](tutorial\appetite.rst)
|   • [Using the Python Interpreter](tutorial\interpreter.rst)
|   • [An Informal Introduction to Python](tutorial\introduction.rst)
|   • [More Control Flow Tools](tutorial\controlflow.rst)
|   • [Data Structures](tutorial\datastructures.rst)
|   • [Modules](tutorial\modules.rst)
|   • [Input and Output](tutorial\inputoutput.rst)
|   • [Errors and Exceptions](tutorial\errors.rst)
|   • [Classes](tutorial\classes.rst)
|   • [Brief Tour of the Standard Library](tutorial\stdlib.rst)
|   • [Brief Tour of the Standard Library --- Part II](tutorial\stdlib2.rst)
|   • [Virtual Environments and Packages](tutorial\venv.rst)
|   • [What Now?](tutorial\whatnow.rst)
|   • [Interactive Input Editing and History Substitution](tutorial\interactive.rst)
|   • [Floating Point Arithmetic:  Issues and Limitations](tutorial\floatingpoint.rst)
|   • [Appendix](tutorial\appendix.rst)
+-- Doc\using
|   • [Python Setup and Usage](using\index.rst)
|   • [Command line and environment](using\cmdline.rst)
|   • [Configure Python](using\configure.rst)
|   • [Editors and IDEs](using\editors.rst)
|   • [Using Python on a Mac](using\mac.rst)
|   • [Using Python on Unix platforms](using\unix.rst)
|   • [Virtual Environments Creation](using\venv-create.inc)
|   • [Using Python on Windows](using\windows.rst)
+-- Doc\whatsnew
|   • [What's New in Python](whatsnew\index.rst)
|   • [What's New in Python 2.0](whatsnew\2.0.rst)
|   • [What's New in Python 2.1](whatsnew\2.1.rst)
|   • [What's New in Python 2.2](whatsnew\2.2.rst)
|   • [What's New in Python 2.3](whatsnew\2.3.rst)
|   • [What's New in Python 2.4](whatsnew\2.4.rst)
|   • [What's New in Python 2.5](whatsnew\2.5.rst)
|   • [What's New in Python 2.6](whatsnew\2.6.rst)
|   • [What's New in Python 2.7](whatsnew\2.7.rst)
|   • [What's New In Python 3.0](whatsnew\3.0.rst)
|   • [What's New In Python 3.1](whatsnew\3.1.rst)
|   • [What's New In Python 3.2](whatsnew\3.2.rst)
|   • [What's New In Python 3.3](whatsnew\3.3.rst)
|   • [What's New In Python 3.4](whatsnew\3.4.rst)
|   • [What's New In Python 3.5](whatsnew\3.5.rst)
|   • [What's New In Python 3.6](whatsnew\3.6.rst)
|   • [What's New In Python 3.7](whatsnew\3.7.rst)
|   • [What's New In Python 3.8](whatsnew\3.8.rst)
|   • [What's New In Python 3.9](whatsnew\3.9.rst)
|   • [What's New In Python 3.10](whatsnew\3.10.rst)
|   • [Changelog](whatsnew\changelog.rst)
• [About these documents](Doc\about.rst)
• [Dealing with Bugs](Doc\bugs.rst)
• [Python documentation build configuration file](Doc\conf.py)
• [Python Documentation contents](Doc\contents.rst)
• [Copyright](Doc\copyright.rst)
• [名词术语解释](Doc\glossary.rst)
• [License](Doc\license.rst)
• [make for Windows](Doc\make.bat)
• [Makefile for Python documentation](Doc\Makefile)
• [Python Documentation README](Doc\README.rst)
• [Doc project requirements](Doc\requirements.txt)
• [Runtime version](Doc\runtime.txt)

其中 data、include、tools 三个目录不属于文档性内容，是 ABI 数据、示范代码、和 rsStructuredText 文档构建工具：

    +-- Doc\data                              => 
    |   • -- python3.10.abi               => 
    |   • -- refcounts.dat                => Refcount behavior 引用计数参考
    |   • -- stable_abi.dat               => 
    +-- Doc\includes                          => 
    |   +-- sqlite3                       => 
    |   |   • -- adapter_datetime.py      => 
    |   |   • -- adapter_point_1.py       => 
    |   |   • -- adapter_point_2.py       => 
    |   |   • -- collation_reverse.py     => 
    |   |   • -- complete_statement.py    => 
    |   |   • -- converter_point.py       => 
    |   |   • -- ctx_manager.py           => 
    |   |   • -- executemany_1.py         => 
    |   |   • -- executemany_2.py         => 
    |   |   • -- executescript.py         => 
    |   |   • -- execute_1.py             => 
    |   |   • -- load_extension.py        => 
    |   |   • -- md5func.py               => 
    |   |   • -- mysumaggr.py             => 
    |   |   • -- pysqlite_datetime.py     => 
    |   |   • -- rowclass.py              => 
    |   |   • -- row_factory.py           => 
    |   |   • -- shortcut_methods.py      => 
    |   |   • -- text_factory.py          => 
    |   • -- custom.c                     => Example module that creates an extension type
    |   • -- custom2.c                    => 
    |   • -- custom3.c                    => 
    |   • -- custom4.c                    => 
    |   • -- dbpickle.py                  => 
    |   • -- email-alternative.py         => 
    |   • -- email-dir.py                 => 
    |   • -- email-headers.py             => 
    |   • -- email-mime.py                => 
    |   • -- email-read-alternative.py    => 
    |   • -- email-simple.py              => 
    |   • -- email-unpack.py              => 
    |   • -- minidom-example.py           => 
    |   • -- mp_newtype.py                => 
    |   • -- mp_pool.py                   => 
    |   • -- mp_workers.py                => 
    |   • -- run-func.c                   => 
    |   • -- setup.py                     => 
    |   • -- sublist.c                    => 
    |   • -- test.py                      => 
    |   • -- turtle-star.py               => 
    |   • -- typestruct.h                 => 
    |   • -- tzinfo_examples.py           => 
    +-- Doc\tools                          => Documentation Tools
    |   +-- extensions                    => 
    |   |   • -- asdl_highlight.py        => 
    |   |   • -- c_annotations.py         => 
    |   |   • -- escape4chm.py            => 
    |   |   • -- glossary_search.py       => 
    |   |   • -- patchlevel.py            => 
    |   |   • -- peg_highlight.py         => 
    |   |   • -- pyspecific.py            => 
    |   |   • -- suspicious.py            => 
    |   +-- static                        => 
    |   |   • -- changelog_search.js      => 
    |   +-- templates                     => 
    |   |   • -- customsourcelink.html    => 
    |   |   • -- download.html            => 
    |   |   • -- dummy.html               => 
    |   |   • -- indexcontent.html        => 
    |   |   • -- indexsidebar.html        => 
    |   |   • -- layout.html              => 
    |   |   • -- opensearch.xml           => 
    |   |   • -- search.html              => 
    |   • -- rstlint.py                   => 
    |   • -- susp-ignored.csv             => 


## ==⚡ Python 3.10.2 Doc - Standard Library

标准模块多达几百个，按目录独立整理：

+-- Doc\library
|  ✒ [The Python Standard Library](library\index.rst)
|   |   • [Python library Introduction](library\intro.rst)
|   |   • [61 Built-in Functions](library\functions.rst)
|   |   • [Built-in Constants](library\constants.rst)
|   |   • [Built-in Types](library\stdtypes.rst)
|   |   • [Built-in Exceptions](library\exceptions.rst)
|  ✒ [Text Processing Services](library\text.rst)
|   |   • [`string` --- Common string operations](library\string.rst)
|   |   • [`difflib` --- Helpers for computing deltas](library\difflib.rst)
|   |   • [`re` --- Regular expression operations](library\re.rst)
|   |   • [`readline` --- GNU readline interface](library\readline.rst)
|   |   • [`rlcompleter` --- Completion function for GNU readline](library\rlcompleter.rst)
|   |   • [`stringprep` --- Internet String Preparation](library\stringprep.rst)
|   |   • [`textwrap` --- Text wrapping and filling](library\textwrap.rst)
|   |   • [`unicodedata` --- Unicode Database](library\unicodedata.rst)
|  ✒ [Binary Data Services](library\binary.rst)
|   |   • [`codecs` --- Codec registry and base classes](library\codecs.rst)
|   |   • [`struct` --- Interpret bytes as packed binary data](library\struct.rst)
|  ✒ [Data Types](library\datatypes.rst)
|   |   • [`datetime` --- Basic date and time types](library\datetime.rst)
|   |   • [`zoneinfo` --- IANA time zone support](library\zoneinfo.rst)
|   |   • [`calendar` --- General calendar-related functions](library\calendar.rst)
|   |   • [`collections` --- Container datatypes](library\collections.rst)
|   |   • [`collections.abc` --- Abstract Base Classes for Containers](library\collections.abc.rst)
|   |   • [`heapq` --- Heap queue algorithm](library\heapq.rst)
|   |   • [`bisect` --- Array bisection algorithm](library\bisect.rst)
|   |   • [`array` --- Efficient arrays of numeric values](library\array.rst)
|   |   • [`weakref` --- Weak references](library\weakref.rst)
|   |   • [`types` --- Dynamic type creation and names for built-in types](library\types.rst)
|   |   • [`copy` --- Shallow and deep copy operations](library\copy.rst)
|   |   • [`pprint` --- Data pretty printer](library\pprint.rst)
|   |   • [`reprlib` --- Alternate `repr` implementation](library\reprlib.rst)
|   |   • [`enum` --- Support for enumerations](library\enum.rst)
|   |   • [`graphlib` --- Functionality to operate with graph-like structures](library\graphlib.rst)
|  ✒ [Numeric and Mathematical Modules](library\numeric.rst)
|   |   • [`numbers` --- Numeric abstract base classes](library\numbers.rst)
|   |   • [`cmath` --- Mathematical functions for complex numbers](library\cmath.rst)
|   |   • [`math` --- Mathematical functions](library\math.rst)
|   |   • [`decimal` --- Decimal fixed point and floating point arithmetic](library\decimal.rst)
|   |   • [`fractions` --- Rational numbers](library\fractions.rst)
|   |   • [`random` --- Generate pseudo-random numbers](library\random.rst)
|   |   • [`statistics` --- Mathematical statistics functions](library\statistics.rst)
|  ✒ [Functional Programming Modules](library\functional.rst)
|   |   • [`functools` --- Higher-order functions and operations on callable objects](library\functools.rst)
|   |   • [`itertools` --- Functions creating iterators for efficient looping](library\itertools.rst)
|   |   • [`operator` --- Standard operators as functions](library\operator.rst)
|  ✒ [File and Directory Access](library\filesys.rst)
|   |   • [`pathlib` --- Object-oriented filesystem paths](library\pathlib.rst)
|   |   • [`os.path` --- Common pathname manipulations](library\os.path.rst)
|   |   • [`fileinput` --- Iterate over lines from multiple input streams](library\fileinput.rst)
|   |   • [`stat` --- Interpreting `~os.stat` results](library\stat.rst)
|   |   • [`filecmp` --- File and Directory Comparisons](library\filecmp.rst)
|   |   • [`tempfile` --- Generate temporary files and directories](library\tempfile.rst)
|   |   • [`glob` --- Unix style pathname pattern expansion](library\glob.rst)
|   |   • [`fnmatch` --- Unix filename pattern matching](library\fnmatch.rst)
|   |   • [`linecache` --- Random access to text lines](library\linecache.rst)
|   |   • [`shutil` --- High-level operations](library\shutil.rst)
|  ✒ [Data Persistence](library\persistence.rst)
|   |   • [`pickle` --- Python object serialization](library\pickle.rst)
|   |   • [`copyreg` --- Register `pickle` support functions](library\copyreg.rst)
|   |   • [`shelve` --- Python object persistence](library\shelve.rst)
|   |   • [`marshal` --- Internal Python object serialization](library\marshal.rst)
|   |   • [`dbm` --- Interfaces to Unix "databases"](library\dbm.rst)
|   |   • [`sqlite3` --- DB-API 2.0 interface for SQLite databases](library\sqlite3.rst)
|  ✒ [Data Compression and Archiving](library\archiving.rst)
|   |   • [`zlib` --- Compression compatible with :program:`gzip`](library\zlib.rst)
|   |   • [`bz2` --- Support for :program:`bzip2` compression](library\bz2.rst)
|   |   • [`gzip` --- Support for :program:`gzip` files](library\gzip.rst)
|   |   • [`lzma` --- Compression using the LZMA algorithm](library\lzma.rst)
|   |   • [`tarfile` --- Read and write tar archive files](library\tarfile.rst)
|   |   • [`zipfile` --- Work with ZIP archives](library\zipfile.rst)
|  ✒ [File Formats](library\fileformats.rst)
|   |   • [`csv` --- CSV File Reading and Writing](library\csv.rst)
|   |   • [`configparser` --- Configuration file parser](library\configparser.rst)
|   |   • [`netrc` --- netrc file processing](library\netrc.rst)
|   |   • [`xdrlib` --- Encode and decode XDR data](library\xdrlib.rst)
|   |   • [`plistlib` --- Generate and parse Apple ``.plist`` files](library\plistlib.rst)
|  ✒ [Cryptographic Services](library\crypto.rst)
|   |   • [`hashlib` --- Secure hashes and message digests](library\hashlib.rst)
|   |   • [`hmac` --- Keyed-Hashing for Message Authentication](library\hmac.rst)
|   |   • [`secrets` --- Generate secure random numbers for managing secrets](library\secrets.rst)
|  ✒ [Generic Operating System Services](library\allos.rst)
|   |   • [`os` --- Miscellaneous operating system interfaces](library\os.rst)
|   |   • [`io` --- Core tools for working with streams](library\io.rst)
|   |   • [`time` --- Time access and conversions](library\time.rst)
|   |   • [`argparse` --- Parser for command-line options, arguments and sub-commands](library\argparse.rst)
|   |   • [`getopt` --- C-style parser for command line options](library\getopt.rst)
|   |   • [`logging` --- Logging facility for Python](library\logging.rst)
|   |   • [`logging.config` --- Logging configuration](library\logging.config.rst)
|   |   • [`logging.handlers` --- Logging handlers](library\logging.handlers.rst)
|   |   • [`getpass` --- Portable password input](library\getpass.rst)
|   |   • [`curses` --- Terminal handling for character-cell displays](library\curses.rst)
|   |   • [`curses.ascii` --- Utilities for ASCII characters](library\curses.ascii.rst)
|   |   • [`curses.panel` --- A panel stack extension for curses](library\curses.panel.rst)
|   |   • [`platform` ---  Access to underlying platform's identifying data](library\platform.rst)
|   |   • [`errno` --- Standard errno system symbols](library\errno.rst)
|   |   • [`ctypes` --- A foreign function library for Python](library\ctypes.rst)
|  ✒ [Concurrent Execution](library\concurrency.rst)
|   |   • [`threading` --- Thread-based parallelism](library\threading.rst)
|   |   • [`multiprocessing` --- Process-based parallelism](library\multiprocessing.rst)
|   |   • [Provides shared memory for direct access across processes](library\multiprocessing.shared_memory.rst)
|   |   • [The `concurrent` package](library\concurrent.rst)
|   |   • [`concurrent.futures` --- Launching parallel tasks](library\concurrent.futures.rst)
|   |   • [`subprocess` --- Subprocess management](library\subprocess.rst)
|   |   • [`sched` --- Event scheduler](library\sched.rst)
|   |   • [`queue` --- A synchronized queue class](library\queue.rst)
|   |   • [`contextvars` --- Context Variables](library\contextvars.rst)
|   |   • [`_thread` --- Low-level threading API](library\_thread.rst)
|  ✒ [Networking and Interprocess Communication](library\ipc.rst)
|   |   • [`asyncio` --- Asynchronous I/O](library\asyncio.rst)
|   +   • High-level APIs
|   |   • [Coroutines and Tasks](asyncio-task.rst)
|   |   • [Streams](asyncio-stream.rst)
|   |   • [Synchronization Primitives](asyncio-sync.rst)
|   |   • [Subprocesses](asyncio-subprocess.rst)
|   |   • [Queues](asyncio-queue.rst)
|   |   • [Exceptions](asyncio-exceptions.rst)
|   +   • Low-level APIs
|   |   • [Event Loop](asyncio-eventloop.rst)
|   |   • [Futures](asyncio-future.rst)
|   |   • [Transports and Protocols](asyncio-protocol.rst)
|   |   • [Policies](asyncio-policy.rst)
|   |   • [Platform Support](asyncio-platforms.rst)
|   +   • Guides and Tutorials
|   |   • [High-level API Index](asyncio-api-index.rst)
|   |   • [Low-level API Index](asyncio-llapi-index.rst)
|   |   • [Developing with asyncio   ](asyncio-dev.rst)
|   |   • [`socket` --- Low-level networking interface](library\socket.rst)
|   |   • [`ssl` --- TLS/SSL wrapper for socket objects](library\ssl.rst)
|   |   • [`select` --- Waiting for I/O completion](library\select.rst)
|   |   • [`selectors` --- High-level I/O multiplexing](library\selectors.rst)
|   |   • [`asyncore` --- Asynchronous socket handler](library\asyncore.rst)
|   |   • [`asynchat` --- Asynchronous socket command/response handler](library\asynchat.rst)
|   |   • [`signal` --- Set handlers for asynchronous events](library\signal.rst)
|   |   • [`mmap` --- Memory-mapped file support](library\mmap.rst)
|  ✒ [Internet Data Handling](library\netdata.rst)
|   |   • [`email` --- An email and MIME handling package](library\email.rst)
|   |   |   • [`email.contentmanager`: Managing MIME Content](email.contentmanager.rst)
|   |   |   • [`email.errors`: Exception and Defect classes](email.errors.rst)
|   |   |   • [`email`: Examples](email.examples.rst)
|   |   |   • [`email.generator`: Generating MIME documents](email.generator.rst)
|   |   |   • [`email.headerregistry`: Custom Header Objects](email.headerregistry.rst)
|   |   |   • [`email.message`: Representing an email message](email.message.rst)
|   |   |   • [`email.parser`: Parsing email messages](email.parser.rst)
|   |   |   • [`email.policy`: Policy Objects](email.policy.rst)
|   |   • library\Legacy Email API
|   |   |   • [`email.message.Message`: Representing an email message using the `~email.policy.compat32` API](email.compat32-message.rst)
|   |   |   • [`email.mime`: Creating email and MIME objects from scratch](email.mime.rst)
|   |   |   • [`email.header`: Internationalized headers](email.header.rst)
|   |   |   • [`email.charset`: Representing character sets](email.charset.rst)
|   |   |   • [`email.encoders`: Encoders](email.encoders.rst)
|   |   |   • [`email.utils`: Miscellaneous utilities](email.utils.rst)
|   |   |   • [`email.iterators`: Iterators](email.iterators.rst)
|   |   • [`json` --- JSON encoder and decoder](library\json.rst)
|   |   • [`mailcap` --- Mailcap file handling](library\mailcap.rst)
|   |   • [`mailbox` --- Manipulate mailboxes in various formats](library\mailbox.rst)
|   |   • [`mimetypes` --- Map filenames to MIME types](library\mimetypes.rst)
|   |   • [`base64` --- Base16, Base32, Base64, Base85 Data Encodings](library\base64.rst)
|   |   • [`binhex` --- Encode and decode binhex4 files](library\binhex.rst)
|   |   • [`binascii` --- Convert between binary and ASCII](library\binascii.rst)
|   |   • [`quopri` --- Encode and decode MIME quoted-printable data](library\quopri.rst)
|   |   • [`uu` --- Encode and decode uuencode files](library\uu.rst)
|  ✒ [Structured Markup Processing Tools](library\markup.rst)
|   |   • [`html.entities` --- Definitions of HTML general entities](library\html.entities.rst)
|   |   • [`html.parser` --- Simple HTML and XHTML parser](library\html.parser.rst)
|   |   • [`html` --- HyperText Markup Language support](library\html.rst)
|   |   • [XML Processing Modules](library\xml.rst)
|   |   • [`xml.etree.ElementTree` --- The ElementTree XML API](library\xml.etree.elementtree.rst)
|   |   • [`xml.dom` --- The Document Object Model API](library\xml.dom.rst)
|   |   • [`xml.dom.minidom` --- Minimal DOM implementation](library\xml.dom.minidom.rst)
|   |   • [`xml.dom.pulldom` --- Support for building partial DOM trees](library\xml.dom.pulldom.rst)
|   |   • [`xml.sax` --- Support for SAX2 parsers](library\xml.sax.rst)
|   |   • [`xml.sax.handler` --- Base classes for SAX handlers](library\xml.sax.handler.rst)
|   |   • [`xml.sax.xmlreader` --- Interface for XML parsers](library\xml.sax.reader.rst)
|   |   • [`xml.sax.saxutils` --- SAX Utilities](library\xml.sax.utils.rst)
|   |   • [`xml.parsers.expat` --- Fast XML parsing using Expat](library\pyexpat.rst)
|  ✒ [Internet Protocols and Support](library\internet.rst)
|   |   • [`webbrowser` --- Convenient web-browser controller](library\webbrowser.rst)
|   |   • [`cgi` --- Common Gateway Interface support](library\cgi.rst)
|   |   • [`cgitb` --- Traceback manager for CGI scripts](library\cgitb.rst)
|   |   • [`wsgiref` --- WSGI Utilities and Reference Implementation](library\wsgiref.rst)
|   |   • [`urllib` --- URL handling modules](library\urllib.rst)
|   |   • [`urllib.parse` --- Parse URLs into components](library\urllib.parse.rst)
|   |   • [`urllib.request` --- Extensible library for opening URLs](library\urllib.request.rst)
|   |   • [`urllib.error` --- Exception classes raised by urllib.request](library\urllib.error.rst)
|   |   • [`urllib.robotparser` ---  Parser for robots.txt](library\urllib.robotparser.rst)
|   |   • [`http` --- HTTP modules](library\http.rst)
|   |   • [`http.server` --- HTTP servers](library\http.server.rst)
|   |   • [`http.client` --- HTTP protocol client](library\http.client.rst)
|   |   • [`http.cookiejar` --- Cookie handling for HTTP clients](library\http.cookiejar.rst)
|   |   • [`http.cookies` --- HTTP state management](library\http.cookies.rst)
|   |   • [`xmlrpc` --- XMLRPC server and client modules](library\xmlrpc.rst)
|   |   • [`xmlrpc.server` --- Basic XML-RPC servers](library\xmlrpc.server.rst)
|   |   • [`xmlrpc.client` --- XML-RPC client access](library\xmlrpc.client.rst)
|   |   • [`ftplib` --- FTP protocol client](library\ftplib.rst)
|   |   • [`poplib` --- POP3 protocol client](library\poplib.rst)
|   |   • [`imaplib` --- IMAP4 protocol client](library\imaplib.rst)
|   |   • [`nntplib` --- NNTP protocol client](library\nntplib.rst)
|   |   • [`smtplib` --- SMTP protocol client](library\smtplib.rst)
|   |   • [`smtpd` --- SMTP Server](library\smtpd.rst)
|   |   • [`telnetlib` --- Telnet client](library\telnetlib.rst)
|   |   • [`socketserver` --- A framework for network servers](library\socketserver.rst)
|   |   • [`uuid` --- UUID objects according to :rfc:`4122`](library\uuid.rst)
|   |   • [`ipaddress` --- IPv4/IPv6 manipulation library](library\ipaddress.rst)
|  ✒ [Multimedia Services](library\mm.rst)
|   |   • [`audioop` --- Manipulate raw audio data](library\audioop.rst)
|   |   • [`aifc` --- Read and write AIFF and AIFC files](library\aifc.rst)
|   |   • [`sunau` --- Read and write Sun AU files](library\sunau.rst)
|   |   • [`wave` --- Read and write WAV files](library\wave.rst)
|   |   • [`chunk` --- Read IFF chunked data](library\chunk.rst)
|   |   • [`colorsys` --- Conversions between color systems](library\colorsys.rst)
|   |   • [`imghdr` --- Determine the type of an image](library\imghdr.rst)
|   |   • [`sndhdr` --- Determine type of sound file](library\sndhdr.rst)
|   |   • [`ossaudiodev` --- Access to OSS-compatible audio devices](library\ossaudiodev.rst)
|  ✒ [Internationalization](library\i18n.rst)
|   |   • [`gettext` --- Multilingual internationalization services](library\gettext.rst)
|   |   • [`locale` --- Internationalization services](library\locale.rst)
|  ✒ [Program Frameworks](library\frameworks.rst)
|   |   • [`cmd` --- Support for line-oriented command interpreters](library\cmd.rst)
|   |   • [`shlex` --- Simple lexical analysis](library\shlex.rst)
|   |   • [`turtle` --- Turtle graphics](library\turtle.rst)
|  ✒ [Graphical User Interfaces with Tk](library\tk.rst)
|   |   • [`tkinter` --- Python interface to Tcl/Tk](library\tkinter.rst)
|   |   • [`tkinter.colorchooser` --- Color choosing dialog](library\tkinter.colorchooser.rst)
|   |   • [`tkinter.font` --- Tkinter font wrapper](library\tkinter.font.rst)
|   |   • [Tkinter Dialogs](library\dialog.rst)
|   |   • [`tkinter.messagebox` --- Tkinter message prompts](library\tkinter.messagebox.rst)
|   |   • [`tkinter.scrolledtext` --- Scrolled Text Widget](library\tkinter.scrolledtext.rst)
|   |   • [`tkinter.dnd` --- Drag and drop support](library\tkinter.dnd.rst)
|   |   • [`tkinter.ttk` --- Tk themed widgets](library\tkinter.ttk.rst)
|   |   • [`tkinter.tix` --- Extension widgets for Tk](library\tkinter.tix.rst)
|   |   • [IDLE - Integrated Development Environment](library\idle.rst)
|  ✒ [Development Tools](library\development.rst)
|   |   • [`typing` --- Support for type hints](library\typing.rst)
|   |   • [`pydoc` --- Documentation generator and online help system](library\pydoc.rst)
|   |   • [Python Development Mode](library\devmode.rst)
|   |   • [`doctest` --- Test interactive Python examples](library\doctest.rst)
|   |   • [`unittest` --- Unit testing framework](library\unittest.rst)
|   |   • [`unittest.mock` --- mock object library](library\unittest.mock.rst)
|   |   • [`unittest.mock` --- getting started](library\unittest.mock-examples.rst)
|   |   • [2to3 - Automated Python 2 to 3 code translation](library\2to3.rst)
|   |   • [`test` --- Regression tests package for Python](library\test.rst)
|  ✒ [Debugging and Profiling](library\debug.rst)
|   |   • [Audit events table](library\audit_events.rst)
|   |   • [`bdb` --- Debugger framework](library\bdb.rst)
|   |   • [`faulthandler` --- Dump the Python traceback](library\faulthandler.rst)
|   |   • [`pdb` --- The Python Debugger](library\pdb.rst)
|   |   • [The Python Profilers](library\profile.rst)
|   |   • [`timeit` --- Measure execution time of small code snippets](library\timeit.rst)
|   |   • [`trace` --- Trace or track Python statement execution](library\trace.rst)
|   |   • [`tracemalloc` --- Trace memory allocations](library\tracemalloc.rst)
|  ✒ [Software Packaging and Distribution](library\distribution.rst)
|   |   • [`distutils` --- Building and installing Python modules](library\distutils.rst)
|   |   • [`ensurepip` --- Bootstrapping the ``pip`` installer](library\ensurepip.rst)
|   |   • [`venv` --- Creation of virtual environments](library\venv.rst)
|   |   • [`zipapp` --- Manage executable Python zip archives](library\zipapp.rst)
|  ✒ [Python Runtime Services](library\python.rst)
|   |   • [`sys` --- System-specific parameters and functions](library\sys.rst)
|   |   • [`sysconfig` --- Provide access to Python's configuration information](library\sysconfig.rst)
|   |   • [`builtins` --- Built-in objects](library\builtins.rst)
|   |   • [`__main__` --- Top-level code environment](library\__main__.rst)
|   |   • [`warnings` --- Warning control](library\warnings.rst)
|   |   • [`!contextlib` --- Utilities for :keyword:`!with`\ -statement contexts](library\contextlib.rst)
|   |   • [`abc` --- Abstract Base Classes](library\abc.rst)
|   |   • [`atexit` --- Exit handlers](library\atexit.rst)
|   |   • [`traceback` --- Print or retrieve a stack traceback](library\traceback.rst)
|   |   • [`__future__` --- Future statement definitions](library\__future__.rst)
|   |   • [`gc` --- Garbage Collector interface](library\gc.rst)
|   |   • [`inspect` --- Inspect live objects](library\inspect.rst)
|   |   • [`site` --- Site-specific configuration hook](library\site.rst)
|   |   • [`dataclasses` --- Data Classes](library\dataclasses.rst)
|  ✒ [Custom Python Interpreters](library\custominterp.rst)
|   |   • [`code` --- Interpreter base classes](library\code.rst)
|   |   • [`codeop` --- Compile Python code](library\codeop.rst)
|  ✒ [Importing Modules](library\modules.rst)
|   |   • [`zipimport` --- Import modules from Zip archives](library\zipimport.rst)
|   |   • [`pkgutil` --- Package extension utility](library\pkgutil.rst)
|   |   • [`modulefinder` --- Find modules used by a script](library\modulefinder.rst)
|   |   • [`runpy` --- Locating and executing Python modules](library\runpy.rst)
|   |   • [`!importlib` --- The implementation of :keyword:`!import`](library\importlib.rst)
|   |   • [Using `!importlib.metadata`](library\importlib.metadata.rst)
|  ✒ [Python Language Services](library\language.rst)
|   |   • [`ast` --- Abstract Syntax Trees](library\ast.rst)
|   |   • [`symtable` --- Access to the compiler's symbol tables](library\symtable.rst)
|   |   • [`token` --- Constants used with Python parse trees](library\token.rst)
|   |   • [`keyword` --- Testing for Python keywords](library\keyword.rst)
|   |   • [`tokenize` --- Tokenizer for Python source](library\tokenize.rst)
|   |   • [`tabnanny` --- Detection of ambiguous indentation](library\tabnanny.rst)
|   |   • [`pyclbr` --- Python module browser support](library\pyclbr.rst)
|   |   • [`py_compile` --- Compile Python source files](library\py_compile.rst)
|   |   • [`compileall` --- Byte-compile Python libraries](library\compileall.rst)
|   |   • [`dis` --- Disassembler for Python bytecode](library\dis.rst)
|   |   • [`pickletools` --- Tools for pickle developers](library\pickletools.rst)
|  ✒ [MS Windows Specific Services](library\windows.rst)
|   |   • [`winsound` --- Sound-playing interface for Windows](library\winsound.rst)
|   |   • [`msilib` --- Read and write Microsoft Installer files](library\msilib.rst)
|   |   • [`msvcrt` --- Useful routines from the MS VC++ runtime](library\msvcrt.rst)
|   |   • [`winreg` --- Windows registry access](library\winreg.rst)
|  ✒ [Unix Specific Services](library\unix.rst)
|   |   • [`posix` --- The most common POSIX system calls](library\posix.rst)
|   |   • [`pwd` --- The password database](library\pwd.rst)
|   |   • [`spwd` --- The shadow password database](library\spwd.rst)
|   |   • [`grp` --- The group database](library\grp.rst)
|   |   • [`crypt` --- Function to check Unix passwords](library\crypt.rst)
|   |   • [`termios` --- POSIX style tty control](library\termios.rst)
|   |   • [`tty` --- Terminal control functions](library\tty.rst)
|   |   • [`pty` --- Pseudo-terminal utilities](library\pty.rst)
|   |   • [`fcntl` --- The ``fcntl`` and ``ioctl`` system calls](library\fcntl.rst)
|   |   • [`pipes` --- Interface to shell pipelines](library\pipes.rst)
|   |   • [`nis` --- Interface to Sun's NIS (Yellow Pages)](library\nis.rst)
|   |   • [`resource` --- Resource usage information](library\resource.rst)
|   |   • [`syslog` --- Unix syslog library routines](library\syslog.rst)
|  ✒ [Superseded Modules](library\superseded.rst)
|   |   • [`imp` --- Access the :ref:`import <importsystem>` internals](library\imp.rst)
|   |   • [`optparse` --- Parser for command line options](library\optparse.rst)
|  ✒ [Undocumented Modules](library\undoc.rst)
|  ✒ [Security Considerations](library\security_warnings.rst)


# =🚩 C/C++ Extensions

源代码文件参考及官方文档：

↪ Python-3.10.2\Doc\includes\custom.c
↪ Python-3.10.2\Doc\extending\newtypes_tutorial.rst

    +-- Doc\extending
    |   • -- index.rst               => Extending and Embedding the Python Interpreter
    |   • -- extending.rst              => Extending Python with C or C++
    |   • -- newtypes_tutorial.rst      => Defining Extension Types: Tutorial
    |   • -- newtypes.rst               => Defining Extension Types: Assorted Topics
    |   • -- building.rst               => Building C and C++ Extensions
    |   • -- windows.rst                => Building C and C++ Extensions on Windows
    |   • -- embedding.rst              => Embedding Python in Another Application

使用 C/C++ 实现 Python 扩展的一般用途：

- 使用现有的已经稳定的 C/C++ 库；
- 将关键代码/需要性能提供的部分使用 C/C++ 实现，解除 GIL 的限制；
- 利用 Python 测试工具对现有系统进行大规模的测试；

从 1946 年第一台手动操作的计算机诞生，到1976年4月11日，苹果发布了第一台 PC 计算机 Apple I，1977 年发布 Apple II 和 1981 年发布的 IBM PC，在这短短 35 年间，电子计算机的巨大变革离婚不开第二次世界大战的催化作用。

回到 Python 的发展史，Python 第一个公开发行版发行于 1991 年，同年，Linus Torvalds 在吸收了 MINIX 精华的基础上，写出了属于自己的 Linux 操作系统。到 1981 才出现 IBM PC DOS 1.0，这不是安全的操作系统，任何进程都可以访问其他进程的资源。

GIL 简言之就是解释器实例中使用的一个互斥量 mutex，也就是一个资源锁，早在操作系统的线程模型形成之前就采用的技术，尽管线程一词早在 1967 年左右就提出。GIL 的使用避免了多重对象加锁带来的死锁问题，也简化了 C 代码的线程安全的实现，并且效能上也不见得比对象加锁方式差。

扩展开发需要稍为设置一下开发环境，这需要了解一些 GCC、Clang、MSVC 等编译器的安装及使用流程。

Windows 系统中，下载源代码包并安装 C/C++ 开发工具即可，如 MinGW GCC 编译工具：

- A C++ library installed and knowledge of the path for command-line invocation
- Python development tools:
    - For Linux, this is the *python3-dev* or *python3-devel* package, depending on your distro.
    - For Windows, there are multiple options.
- Python 3.6 or greater
- A virtual environment (recommended, but not required)
- The *invoke* tool, will be using to build and test your Python bindings

The distutils package is deprecated and slated for removal in Python 3.12. Use setup tools or check PEP 632 for potential alternatives

编写 Python 扩展需要使用到最基本的工具是 C/C++ 编译器，其次是 distutils 或最新的 setuptools 工具，它们 会调用编译生成扩展的动态链接库文件，并将其安装到 site-packages 目录下。

虽然，distutils 工具目前已经被最新的 setuptools 所取代，但是还是兼容可用状态。

参考 distutils.core 源代码，或者源代码 Doc 目录下的示范文件，可以查询可用的参数，列如，使用 *library_dirs* 和 *libraries* 给编译器添加库文件及引用目录。


## ==⚡  C/C++ Extensions with distutils
- PEP 632, Deprecate distutils module https://www.python.org/dev/peps/pep-0632
- Python Packaging User Guide https://packaging.python.org/
- Setup Tools https://setuptools.pypa.io/en/latest/
- Distributing Python Modules (Legacy version) https://setuptools.pypa.io/en/latest/deprecated/distutils/index.html
- Python Bindings: Calling C or C++ From Python by by Jim Anderson https://realpython.com/python-bindings-overview/
- What Is the Python Global Interpreter Lock (GIL)? https://realpython.com/python-gil/

使用 C/C++ 扩展 Python 目的是通过扩展实现 C/C++ 代码调用 Python 代码功能，或者反向操作，这个过程会涉及数据类型的转换，以及在 C/C++ 和 Python 之间传递数据。

因为两种语言数据类型几乎不可能一致，传递之前就需要有一个预先处理的过程，Marshalling Data Types：

The process of transforming the memory representation of an object to a data format suitable for storage or transmission. (Source)

- 整数，Python 使用任意精度的数据结构实现，而 C 语言是固定精度的；
- 浮点数，Python 可以存储比 C 更大、也更小的浮点数，转换时要确保它们保持在范围内。
- 复数，Python 和 C 语言都有复数，但后者没有相应 marshal/unmarshal 方法。
- 字符串，Python 的字符串是一种复杂结构体，使用 Unicode 编码，和 C 语言的字符串不同。
- 布尔值，这种简单的数据在 Python 和 C 语言都非常相似，只有两个值，所以处理起来相当简单。

Python 根据所有对象在内存中可否修改，分为两类，mutable or immutable，像字符串数据序列，定义后就是固定不能修改，属于 immutable 类型对象。

C 语言的函数参数也有相似的概念，pass-by-value or pass-by-reference，所有参数默认都是按值传递，即将复制的传递到函数内部，除非使用指针才能实现按引用方式传递参数。

除非你需要实现丑陋和不可移植的应用，否则 Python 不会给你一个指向对象的指针。如果您想在 C 语言中修改 Python 对象，那么您需要采取额外的步骤来实现这一点。创建 Python 绑定时添加不可更改性的检查清单，这可以助你理解如何处理 Python 和 C 处理内存管理方式的差异。

C 和 Python 内存管理方式差别很大，C 语言通过 *malloc* 和 *free* 等函数申请内存和释放内存，而 Python 实现了 GC - Garbage collector，它通过引用计数的方式来处理内存回收问题。前者优点是自由度非常大，但是需要开发者自行管理内存的分配。

例如，Python 脚本中，`x = 3` 就会在解释器内部分配内存保存一个 PyLongObject 对象。而 C 语言则调用函数动态分配和释放内存：

```c
int* iPtr = (int*)malloc(sizeof(int));
free(iPtr)
```


编写编译、安装脚本 setup.py 内容，执行它就会编译模块并将模块文件安装到 site-packages 目录：

```py
from distutils.core import setup, Extension
# ref Python310\Lib\distutils\core.py

spam = Extension('spam',
    library_dirs = ['c:/Python310/libs'],
    libraries = ['_tkinter', 'python3', 'python310'],
    sources = ['spammodule.c'])

setup (name = 'spamp',
    version = '1.0',
    description = 'This is a spamp package',
    ext_modules = [spam])
```

或者使用 setuptools 替代 distutils 发布工具，编写 setup.py 脚本，并执行 python setup.py build 或 install 命令进行编译、安装操作：

```py
from setuptools import setup, Extension

setup(
    name='spamp',
    version='0.0.1',
    packages=['spamp'],
    description="This is a spamp package",
    ext_modules=[Extension("spam", sources=["spamp/spammodule.c"])],
    # install_requires=[
    #     'requests',
    #     'importlib; python_version == "2.6"',
    # ],
)
```


可能需要根据查询到的 Python 库文件使用的编译器版本来编译扩展：

>>> import sys
>>> sys.version
'3.10.2 (tags/v3.10.2:a58ebcc, Jan 17 2022, 14:12:15) [MSC v.1929 64 bit (AMD64)]'

扩展模块实现代码文件参考 spammodule.c：

```c
#define PY_SSIZE_T_CLEAN
#include <Python.h>
    
static PyObject *
spam_system(PyObject *self, PyObject *args)
{
    const char *command;
    int sts;

    if (!PyArg_ParseTuple(args, "s", &command))
        return NULL;
    sts = system(command);
    return PyLong_FromLong(sts);
};

static PyMethodDef SpamMethods[] = {
    // ...
    { "system", spam_system, METH_VARARGS, "Execute a shell command"},
    // ...
    { NULL, NULL, 0, NULL } /* Sentinel */
};

static struct PyModuleDef spammodule = {
    PyModuleDef_HEAD_INIT,
    "spam",     /* name of module */
    "spam_doc", /* module documentation, may be NULL */
    -1,         /* size of per-interpreter state of the module,
                   or -1 if the module keeps state in global variables. */
    SpamMethods
};


PyMODINIT_FUNC
PyInit_spam(void) // module initialization function
{
    return PyModule_Create(&spammodule);
}
```

执行编译命令会调用 C/C++ 编译器，并在构建输出目录生成 pyd 动态库模块文件，需要执行安装命令才能正常使用扩展模块，否则，模块可以被加载，但是可能找不到方法定义。

动态扩展库只是众多库文件格式中的一种，参考官方代码文档 Library and Extension FAQ： Python-3.10.2\Doc\faq\library.rst

1) modules written in Python (.py);
2) modules written in C and dynamically loaded (.dll, .pyd, .so, .sl, etc);
3) modules written in C and linked with the interpreter;


```sh
> python setup.py build
# output build/lib.win-amd64-3.10/spam.cp310-win_amd64.pyd
> python setup.py install
running install
running build
running build_ext
running install_lib
copying build/lib.win-amd64-3.10/spam.cp310-win_amd64.pyd -> /py3102/Lib/site-packages
running install_egg_info
Writing /py3102/Lib/site-packages/spamp-1.0-py3.10.egg-info
```

编写模块测试脚本：

```py
import spam

spam.system("dir")

print(f"""
    {'__doc__':>16} = {spam.__doc__}
    {'__file__':>16} = {spam.__file__}
    {'__loader__':>16} = {spam.__loader__}
    {'__name__':>16} = {spam.__name__}
    {'__package__':>16} = {spam.__package__}
    {'__spec__':>16} = {spam.__spec__}
    """)
    # {'__path__':>16} = {spam.__path__}
```

相应的模块信息文件 egg-info 文件内容如下，其它配置设置参考 Python310\Lib\distutils\core.py 代码文件：

```yaml
Metadata-Version: 1.0
Name: spamp
Version: 1.0
Summary: This is a spamp package
Home-page: UNKNOWN
Author: UNKNOWN
Author-email: UNKNOWN
License: UNKNOWN
Description: UNKNOWN
Platform: UNKNOWN
```

这是完全基于 C 语言进行扩展库函数的复杂构建方法，但是，有时你需要做的只是调用一些系统调用或一些 C 库函数，可以使用 Python 现有的 ctypes 模块或 cffi 等工具库来简化扩展的开发过程。

C/C++ 工程提供 Python 接口，有利于融合进 Python 的生态。现在 Python 在应用层，有其得天独厚的优势。尤其因为人工智能和大数据的推波助澜， Python 现在以及未来，将长期是最流行的语言之一。

那 C/C++ 怎么提供 Python 接口呢？提供实现的框架非常多，比如：

- ctypes: C 与 Python 绑定，Python 内建模块
- Boost.Python: C++ 与 Python 绑定， Boost 模块
- pybind11: C++11 与 Python 绑定， 减去了旧 C++ 支持，更轻量化

PyBind11 是 header-only 开源库，不需要编译动态链接库，直接使用头文件。

    git clone git@github.com:pybind/pybind11.git

另外，通过将关键部分转换为 C/C++，是摆脱 Python GIL 限制的方法，可以用来加快 Python 代码的特定部分的速度。



## ==⚡  C/C++ Extensions with ctypes
- Python Bindings: Calling C or C++ From Python by by Jim Anderson https://realpython.com/python-bindings-overview/#ctypes
- https://github.dev/realpython/materials/blob/master/python-bindings/
- Understanding “extern” keyword in C https://www.geeksforgeeks.org/understanding-extern-keyword-in-c/


Python 2.5 开始内置了 ctypes 模块，通过它可以很方便地实现 C/C++ 扩展只需要以下三个步骤，无需要其它额外的操作，支持各种 C/C++ 数据类型转换：

- Load your library.
- Wrap some of your input parameters.
- Tell ctypes the return type of your function.

官方源代码文档参考：

    +-- Doc\library
    |  ✒ python.rst            => Python Runtime Services
    |   • - gc.rst                   => `gc` --- Garbage Collector interface
    |  ✒ allos.rst             => Generic Operating System Services
    |   • - ctypes.rst               => `ctypes` --- A foreign function library for Python

示范，使用 ctypes 库接口加载 Linux 库文件，并调用库函数，注意数据类型的转换，包括指定函数的返回类型，文档中 Fundamental data types 有详细的类型列表：

```py
import ctypes
import sys
import pathlib
import os

def test(lib):
    # Sample data for our call:
    x, y = 6, 2.3

    # This will not work: Don't know how to convert parameter 2
    # answer = lib.mult(x, y)

    # This produces a bad answer:
    answer = lib.mult(x, ctypes.c_float(y))
    print(f"    In Python: int: {x} float {y:.1f} return bad val {answer:.1f}")

    # You need tell ctypes that the function returns a float
    lib.mult.restype = ctypes.c_float
    # lib.mult.argtypes = [ctypes.c_int, ctypes.c_float]
    # answer = lib.mult(1, 0.1)
    answer = lib.mult(x, ctypes.c_float(y))
    print(f"    In Python: int: {x} float {y:.1f} return val {answer:.1f}")

def load_lib(lib):
   # Load the shared library into ctypes
   # libname = os.path.abspath(os.getcwd())+ f"/lib{lib}.so"
   libname = str(pathlib.Path().absolute()) + f"/lib{lib}.so"
   if sys.platform.startswith("win"):
      libname = os.path.abspath(".") + f"\\{lib}.dll"
   lib = ctypes.CDLL(libname)
   print("lib load: %s" % (lib))
   return lib

if __name__ == "__main__":
   os.add_dll_directory("C:/mingw/bin")
   test(load_lib("cmult"))
   test(load_lib("cppmult"))
```

以下是 Invoke 配置脚本文件 tasks.py，执行它以构建 C/C++ 语言实现的动态库：

```py
from invoke import run, task, Context
import sys
import os

on_win = sys.platform.startswith("win")

@task()
def build_cmult(c, path=None):
    """Build the shared library for the sample C code"""
    # Moving this type hint into signature causes an error (???)
    c: Context
    if on_win:
        if not path:
            print("Path is missing")
        else:
            # Using c.cd didn't work with paths that have spaces :/
            path = f'"{path}vcvars32.bat" x64'  # Enter the VS venv
            path += f'&& cd "{os.getcwd()}/python-bindings"'  # Change to current dir
            path += "&& cl /o ../cmult.dll /LD cmult.c"  # Compile
            # Uncomment line below, to suppress stdout
            # path = path.replace("&&", " >nul &&") + " >nul"
            c.run(path)
    else:
        print("Building C Library")
        run("gcc -c -Wall -Werror -fpic cmult.c -I /usr/include/python3.7")
        run("gcc -shared -o libcmult.so cmult.o")
        print("* Complete")

@task()
def build_cppmult(c):
    """Build the shared library for the sample C++ code"""
    print("Building C++ Library")
    run(
        "cd python-bindings & "
        "g++ -O3 -Wall -Werror -shared -std=c++11 -fPIC cppmult.cpp "
        "-o ../cppmult.dll "
    )
    print("* Complete")


if __name__ == '__main__':
    vcvar = "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Auxiliary/Build/"
    build_cmult(Context(), vcvar)
    build_cppmult(Context())
```

根据库使用的参数入栈约定方式不同，有 CDLL、OleDLL、WinDLL、PyDLL 等库类型加载方式，主要是 `cdecl` 和 
`stdcall` 两种参数入栈约定方式。

注意，编译的动态库和 Python 版本 32-bit 或 64-bit 要匹配，否则会出现类似错误：[WinError 193] %1 不是有效的 Win32 应用程序。命令行调用 MSVC 时，正确指定匹配的 x86 或 x64。

注意，Python 使用系统的 API 加载动态库还会涉及依赖动态库，所以在 Window 系统上使用 GCC 编译的动态库导入时可能会出现异常：FileNotFoundError: Could not find module (or one of its dependencies).

需要将被依赖的动态库文件路径添加到搜索目录中，查询依赖了什么动态库，可以通过 dumpbin 工具查询，如下：

    os.add_dll_directory("C:/mingw/bin")

    dumpbin /Imports libcmult.so

在 Windows 系统下使用 GCC 编译 C++ 动态库时，还是出现了异常，不及 MSVC 稳定：OSError: exception: access violation reading.

既然是内存访问违规，那就离不开错误的指针，这个异常是在 `_call_function_pointer` 调用库函数时发出的。


以下是 C 语言实现的库函数，待 Python 通过 ctypes 接口调用：

```c
#include <stdio.h>
#include "cmult.h"

float mult(int int_param, float float_param) {
    float return_value = int_param * float_param;
    printf("    In cmult : int %d float %.1f returning  %.1f\n", int_param,
            float_param, return_value);
    return return_value;
}
```

和一般 C 程序区别不大，主要是头文件为动态库定义了导出符号，它可以让其它程序找到库函数：

```c
#ifdef _MSC_VER
    #define EXPORT_SYMBOL __declspec(dllexport)
#else
    #define EXPORT_SYMBOL
#endif

EXPORT_SYMBOL float mult(int int_param, float float_param);
```

以下是 C++ 语言程序 cppmult.cpp 实现的库函数：

```cpp
#include <iostream>
#include <iomanip>
#include "cppmult.hpp"

float mult(int int_param, float float_param) {
    float return_value = int_param * float_param;
    std::cout << std::setprecision(2) << std::fixed
              << "    In cppmul: int " << int_param
              << " float " <<  float_param
              << " returning  " << return_value
              << std::endl;
    return return_value;
}
```

头文件 "cppmult.hpp" 基本和 C 语言一致，除了增加了 `extern "c"` 关键字告诉 C++ 编译器这里包含 C 语言符号，不要进行名字混杂：

```cpp
#ifdef _MSC_VER
    #define EXPORT_SYMBOL __declspec(dllexport)
#else
    #define EXPORT_SYMBOL
#endif

#ifdef __cplusplus
extern "C" {
#endif

EXPORT_SYMBOL float mult(int int_param, float float_param);

#ifdef __cplusplus
}
#endif
```

C 语言的 `extern` 关键字主要是定义 `external linkage` 静态链接，表示符号可以在整个工程中使用，而不仅仅在局部或文件内有效，作用包括：

1. 声明符号可使用任意次但不分配内存，如 `extern int var`；
2. extern 关键字用来扩展符号在各个程序中可见；
3. 因为函数默认就是整个程序可见，所以不需要显式使用 extern 关键字； 
4. 用在变量上，只是表示声明而不是定义，使用初始化值则是定义符号，仅使用一次，如 `extern int var = 1`；


## ==⚡  C/C++ Extensions with PyBind11
- https://realpython.com/python-bindings-overview/#pybind11
- https://pybind11.readthedocs.io/en/stable/

PyBind11 是一个轻量级的 hpp 头文件库，它在 Python 和 C++ 程序之间公开类型，主要用于创建现有 C++ 代码的 Python 绑定，支持 C++11 规范。它的目标和语法类似于 David Abrahams 的 Boost.Python 库：通过使用编译时自省来推断类型信息，从而最大限度地减少传统扩展模块中的样板代码。

Boost.Python 的主要问题是它结构庞大而复杂，几乎可以与现有的所有 C++ 编译器一起使用。这种兼容性是有代价的：为了支持最古老和漏洞最多的编译器样本，需要使用晦涩难懂的模板技巧和变通方法。

如果没有注释，PyBind11 核心头文件只需要大约 4K 行代码，并且依赖于 C++ 标准库和 Python 2.7 或 3.5+，或 PyPy。

由于一些新的 C++11 语言特性（特别是：元组、lambda 函数和可变参数模板），这种紧凑的实现成为可能。自创建以来，该库在许多方面都超越了 Boost.Python，从而在许多常见情况下显着简化了绑定代码。

PyBind11 相比 ctypes、CFFI 这些较原始的框架，最大的优势是支持 C++11 等新特性，包括：

- class 类形的支持；
- polymorphic subclassing 多态子类型支持；
- 以及方便地动态添加属性，而其它基于 C 语言的工具没有这么方便的操作；

pybind11 can map the following core C++ features to Python:

01. Functions accepting and returning custom data structures per value, reference, or pointer
02. Instance methods and static methods
03. Overloaded functions
04. Instance attributes and static attributes
05. Arbitrary exception types
06. Enumerations
07. Callbacks
08. Iterators and ranges
09. Custom operators
10. Single and multiple inheritance
11. STL data structures
12. Smart pointers with reference counting like std::shared_ptr
13. Internal references with correct reference counting
14. C++ classes with virtual (and pure virtual) methods can be extended in Python

安装 pybind11

    pip install pybind11

在 git 工程中，可以将其作为子模块加载：

    git submodule add -b stable git@github.com:pybind/pybind11.git extern/pybind11
    git submodule update --init

或者使用 Microsoft vcpkg 依赖管理工具进行安装：

```sh
git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
./bootstrap-vcpkg.sh
./vcpkg integrate install
vcpkg install pybind11
```

PyBind11 源代码中包含了 CMake 编写的测试脚本，它会尝试通过 *PYTHON_EXECUTABLE* 变量指定 Python 主程序，并通过脚本查询 sysconfig 模块提供的信息来确定库文件位置。在 Linux 系统上安装好 python-dev 或 python3-dev 开发包，以及 cmake 工具就可以进行测试。

部分测试依赖 Boost.Python，这是可选的，根据需要安装，另外还需要用到 build、numpy、pytest 以及 scipy 科学计算等模块，可以直接通过依赖列表文件安装。

```sh
# vcpkg install boost-python:x64-windows
# vcpkg install boost-python:x64-mingw
# pip freeze > requirements.txt
pip install -r requirements.txt

mkdir build
cd build
# Linux/macOS
cmake ..
make check -j 4
# Windows
cmake -A x64 ..
cmake --build . --config Release --target check
```

Windows 系统上，cmake 默认生成 Win32 平台构架的脚本，可以指定 64-bit 目标平台构架。

需要 Visual Studio 2015 以上支持 PyBind11 依赖的 C++11 语言特性。Visual Studio 2017 (MSVC 14.1) 上启用 C++17，需要为 PyBind11 传入 `/permissive-` 编译器选项。


在 Linux 系统可以使用 `python3 -m pybind11 --includes` 命令来获取头文件的位置，bash 支持给命令加反引号以获得命令输出的内容。在 Windows 平台上，需要给编译器指定链接的 Python 库文件名及位置，否则会出现符号未定义错误。在 Linux 平台上，安装开发包后 sudo apt install python3.9-dev，就可以自动定位到库文件。

```py
import sysconfig
print(sysconfig.get_config_var('EXT_SUFFIX'))
# Python-3.10.2\Misc\python-config.in
```

和 CFFI 类似，PyBind11 也需要编写代码来绑定动态库导出的符号，但是使用的是标准的 C++ 程序，以下是最简单的 Python 模块绑定：

```cpp
// pybind11_wrapper.cpp
#include <pybind11/pybind11.h>
#include <cppmult.hpp>

PYBIND11_MODULE(pybind11_example, m) {
    m.doc() = "pybind11 example plugin"; // Optional module docstring
    m.def("cpp_function", &cppmult, "A function that multiplies two numbers");
}
```

PyBind11 的绑定代码编写和 CPython 模块结构定义有许多类似，通过 *PYBIND11_MODULE* 宏实现一个 CPython 模块，解释器运行时会对模块进行初始化。第一个参数是模块名，即脚本中通过 import 导入模块名称，第二个参数是 py::module 变量名。这个宏的结构非常巧妙地通过嵌套其它宏定义实现了完整的 CPython 模块的实现，并且简化的原始 C 言语代码方式的实现。

为了查看宏展开的内容，可以使用 g++ -E -P 命令，它只将宏展开但不编译程序，花括号部分展开后就是：

```c
extern "C" {
    float mult(int int_param, float float_param);
}

void pybind11_init_pybind11_example(::pybind11::module_ & (m)) 
{
    m.doc() = "pybind11 example plugin";
    m.def("cpp_function", &mult, "A function which multiplies two numbers");
}
```

m.doc() 是给模块定义 docstring，可以使用 `R"pbdoc(...)pbdoc"` 定义多行文档内容。

m.def() 定义模块的方法，和 CPython 模块的 *PyMethodDef* 结构一致，它会将 mult 库函数导致为模块方法 cpp_function，后面是这个模块方法 __doc__ 说明内容。

展开结构是一个完整的 C++ 程序，需要根据系统安装的编译器对模块代码进行编译，如指定 PyBind11 和 Python 头文件路径及导入库文件的指定。

可以先将库函数的实现编译到独立的动态链接库文件，也可以和 PyBind11 实现的模块一起编译，通常要绑定的库都是事先编译好的 shared library。


因为 PyBind11 的实现方式不需要像 Cython 那样经过一个转译操作，所以只需要使用 setuptools 编写一般的安装脚本即可，执行相应的 python setup.py 命令编译、安装模块：

```py
from setuptools import setup, Extension
import os
import sys
import pybind11

os.chdir("python-bindings")
os.popen("chcp 65001")

if __name__ == '__main__':
    sys.argv = [__file__, "build", "-c", "msvc", "install"]

setup(
    name='pybind11_example',
    version='0.0.1',
    # packages=['pybind11_example'],
    description="This is pybind11_example package",
    ext_modules=[Extension("pybind11_example", 
        sources=["pybind11_wrapper.cpp", "cppmult.cpp"], 
        include_dirs=['.', pybind11.get_include()],
        # extra_compile_args=["/std:c++17", "/UPYBIND11_CPP14"],
        )],
    setup_requires=["pybind11>=2.9.2"],
    install_requires=[
        'pybind11>=2.9.2; python_version == "3.10"',
    ],
)
# python setup.py build -c mingw32
# python setup.py install
# python setup.py build -c mingw32 install
```

使用 MSVC 14 (2019) 编译 PyBind11 2.10.0.dev1 时，出现常用表达式对象没有进行初始化错误：

    common.h(1037): error C2737: 'pybind11::overload_cast': 'constexpr' object must be initialized

MSVC 2019 的版本号 MSC_VER 定义为 1926，通过以下宏定义可以查看到，而 PyBind11 中指定 `_MSC_VER < 1920` MSVC 2017 才会对 overload_cast 初始化，更正版本号可以解决：

    #define PP_STR(T) #T
    #define PP_GET(T) PP_STR(T)
    #pragma message (PP_GET(_MSC_VER))

这里有一个更通用的 #PRAGMA message 实现：

```c
// GCC preprocessor documentation 
// https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html
// https://stackoverflow.com/questions/24225006/warning-and-error-as-macro
#if defined( __clang__ )
#   define PRAGMA( x )        _Pragma( #x )
#elif defined( __GNUC__ )
#   define PRAGMA( x )        _Pragma( #x )
#elif defined( _MSC_VER )
#   define PRAGMA( x )       __pragma( x )
#endif

#define STRINGIFY( str )      #str
#define STR( str )            STRINGIFY( str )

#define LINE                  STR( __LINE__ )
#define FILE                  __FILE__
#define FILE_LINE             __FILE__ "(" LINE ")"

#define LOG( info , msg )     PRAGMA( message( FILE_LINE ": " #info ": " msg ) )

LOG(INFO, STR(_MSC_VER))
```

编写测试脚本：

```py
import os
os.add_dll_directory("c:/mingw/bin")

# pybind11_test.py
import pybind11_example
a = 2
b = 3.1
ans = pybind11_example.cpp_function(a, b)
print(f"PyBind11 mult: {a} * {b} = {ans}")

# cython_test.py
import cython_example

x, y = 6, 2.3
answer = cython_example.pymult(x, y)
print(f"Cython mult: int: {x} float {y:.1f} = {answer:.1f}")
```

以下是编译脚本 tasks.py，可以直接执行，也可以通过 invoke all 模块命令执行：

```py
import invoke
import glob
import shutil
import os
import sys
import sysconfig
import pybind11

# Python-3.10.2\Misc\python-config.in
ext = sysconfig.get_config_var('EXT_SUFFIX')
inc = ['-I' + sysconfig.get_path('include'), '-I' + pybind11.get_include(), "-I."]

on_win = sys.platform.startswith("win")

def print_banner(msg):
    print("==================================================")
    print("= {} ".format(msg))

def compile_python_module(cpp_name, extension_name, libs = ""):
    if on_win:
        libs += " -LC:/Python310/libs -lpython3 -lpython310"
    # invoke.run(f"g++ -E -P {' '.join(inc)} {cpp_name}")
    invoke.run(
        "g++ -O3 -Wall -Werror -shared -std=c++11 -fPIC -DMS_WIN64 "
        # "`python -m pybind11 --includes` "
        # "-I /usr/include/python3.7 -I .  "
        "{3} "
        "{0} "
        "-o {1}{2} " # `python3.7-config --extension-suffix` 
        "-L. {4} -Wl,-rpath,.".format(cpp_name, extension_name, ext, " ".join(inc), libs)
    )

@invoke.task()
def build_pybind11(c):
    """Build the pybind11 wrapper library"""
    print_banner("Building PyBind11 Module")
    compile_python_module("pybind11_wrapper.cpp cppmult.cpp", "pybind11_example")
    print("* Complete")


@invoke.task()
def build_cppmult(c):
    """Build the shared library for the sample C++ code"""
    print_banner("Building C++ Library")
    
    libname = "libcppmult.so"
    if on_win: libname = "cppmult.dll" 

    invoke.run(
        "g++ -O3 -Wall -Werror -shared -std=c++11 -fPIC cppmult.cpp "
        "-o {} ".format(libname)
    )
    print("* Complete")

@invoke.task(build_cppmult)
def build_cython(c):
    """Build the cython extension module"""
    print_banner("Building Cython Module")
    # Run cython on the pyx file to create a .cpp file
    invoke.run("cython --cplus -3 cython_example.pyx -o cython_wrapper.cpp")

    # Compile and link the cython wrapper library
    compile_python_module("cython_wrapper.cpp", "cython_example", "-lcppmult")
    print("* Complete")

@invoke.task
def clean(c):
    """Remove any built objects"""
    for file_pattern in (
        "*.o",
        "*.so",
        "*.obj",
        "*.dll",
        "*.exp",
        "*.lib",
        "*.pyd",
        "cython_wrapper.cpp",
        "cffi_example*",
        "Release*",
        "Build*",
    ):
        for file in glob.glob(file_pattern, root_dir=c.cwd):
            if os.path.isdir(file):
                shutil.rmtree(file)
            else:
                os.remove(file)

@invoke.task(
    clean,
    build_pybind11,
    build_cython,
)
def all(c):
    """Build and run all tests"""
    pass

if __name__ == '__main__':
    if os.path.exists("python-bindings"):
        os.chdir("python-bindings")
    import __main__
    program = invoke.Program(namespace=invoke.Collection.from_module(__main__))
    program.run(argv=[__file__, "all"])
```

## ==⚡  C/C++ Extensions with Cython
- Cython’s Documentation https://cython.readthedocs.io/en/latest/


Cython 整个编译流程和 PyBind11 方式实现的扩展类似，都是编译 C/C++ 动态链接库，只是 Cython 实现模块的绑定就像编写 Python 脚本一样。

也就是多了一个中间语言处理过程，可以手动调用 cython 命令将 pyx 代码转序为 C/C++ 代码。

```py
# cython_example.pyx
""" Example cython interface definition """
# cython --cplus -3 cython_example.pyx -o cython_wrapper.cpp

cdef extern from "cppmult.hpp":
    float mult(int int_param, float float_param)

def pymult( int_param, float_param ):
    return mult( int_param, float_param )
```

安装 cython 模块，并执行以下命令，就会按脚本生成 C++ 模块代码，然后再进行编译，模块名称和脚本文件名一致 cython_example，库函数导出到模块的名称为 pymult：

```sh
python3 -m pip install cython
cython --cplus -3 cython_example.pyx -o cython_wrapper.cpp
```

Cython 是一个相对复杂的工具，它可以为 C/C++ 创建的 Python 绑定提供深层次的控制，提供类似 Python 语言的方法来编写手动控制 GIL 的代码，这可以显著加快某些类型的问题处理。然而，这种类似 Python 的语言，Pyrex，并不完全是 Python 语言，所以当你快速了解 C 和 Python 的哪些部分适合于哪些地方时，学习曲线就会平缓些。

为扩展编写 setup.py 安装脚本：

```py
# file: setup.py
from setuptools import setup, Extension
from Cython.Build import cythonize
import os
import sys

if os.path.exists("python-bindings"): os.chdir("python-bindings")
if sys.platform.startswith("win"):    os.popen("chcp 65001")

if __name__ == '__main__':
    # sys.argv = [__file__, "build", "-c", "msvc", "install"]
    sys.argv = [__file__, "build", "-c", "mingw32", "install"]

extension = Extension(
    name="cython_example",
    sources=["cython_example.pyx", "cppmult.cpp"], 
    language="c++",
    extra_compile_args=["-DMS_WIN64"],
    include_dirs=['.'],
    # library_dirs=['.'],
    # libraries=["cppmult"],
)

setup(
    name="cython_mult",
    version="0.0.3",
    author="Jenago",
    author_email="254141293@qq.com",
    url="https://github.com/jimboyeah/run-snippet",
    description="Hello World!",
    ext_modules=cythonize([extension])
)
```

在 Windows 系统下使用 Mingw-w64 编译 Cython 模块，会出现 ModuleSetupCode.c 报错，div-by-zero，因为 `SIZEOF_VOID_P` 宏定义和实际计算值 `sizeof(void*)` 不相等，在编译参数中传入宏定义 -DMS_WIN64 可以解决。


## ==⚡  C/C++ Extensions with cffi
- Python Bindings: Calling C or C++ From Python by by Jim Anderson https://realpython.com/python-bindings-overview/#cffi
- C Foreign Function Interface https://cffi.readthedocs.io/en/latest/
- CFFI Overview https://cffi.readthedocs.io/en/latest/overview.html

CFFI 是 Python 的 C 外部函数接口，它采用一种更加自动化的方法来生成 Python 绑定。 CFFI 有多种构建和使用 Python 绑定的方式。 有两个不同的选项可供选择，这为您提供了四种可能的模式：

➡ ABI vs API 模式，在稳定与便利之间权衡：
    ➡ API 模式使用 C 编译器生成完整的 Python 模块，文档强烈建议使用 API 模式。
    ➡ ABI 模式加载共享库并直接与其交互。 如果不运行编译器，则正确构造结构和参数很容易出错。 
➡ in-line vs out-of-line 模式，在速度和便利性之间的权衡：
    ➡ In-line mode 在每次脚本运行时，都会编译 Python 绑定。这很方便，因为您不需要额外的构建步骤。但是，它的确会使您的程序变慢。
    ➡ Out-of-line mode 需要一个额外的步骤来一次生成 Python 绑定，然后在每次运行程序时都使用它们。这要快得多，但是对于您的应用程序可能并不重要。

由于 CFFI 不是标准库的一部分，使用 pip 进行安装，建议您为此创建一个虚拟环境，这会将软件包安装到您的虚拟环境中，避免与其它虚拟环境的版本相冲突。

    $ python3 -m pip install cffi

不同于 ctypes，使用 CFFI 或 PyBind11 都是创建完整的 Python 扩展模块，可以使用 import 语句导入方式来使用。

在大型的模块中使用 CFFI 而不是 ctypes，这可以大大提高自动化效率。

CFFI Python bindings 只需要三个步骤：

1. Write some Python code describing the bindings.
2. Run that code to generate a loadable module.
3. Modify the calling code to import and use your newly created module.

假设使用 CFFI 绑定一个导出了函数 `float pi_approx(int n);` 的库 piapprox，在不同平台下库文件格式不同，静态库也适用：

- Windows: piapprox.dll, piapprox.lib (static library) 
- Linux and others: libpiapprox.so, libpiapprox.a  (static library)
- OS X: libpiapprox.dylib

要在 Python 中调用这个库函数，就创建以下 *piapprox_build.py* 脚本，调用 cdef() 传入原型声明，不支持 C/C++ 的预处理。调用 set_source() 传入要生成的封装层文件名及引用的头文件，还有 C/C++ 编译器参数。

API Mode, calling the C standard library

```py
from cffi import FFI
ffibuilder = FFI()

# cdef() expects a single string declaring the C types, functions and
# globals needed to use the shared object. It must be in valid C syntax.
ffibuilder.cdef("""
    float pi_approx(int n);
""")

# set_source() gives the name of the python extension module to
# produce, and some C source code as a string.  This C code needs
# to make the declarated functions, types and globals available,
# so it is often just the "#include".
ffibuilder.set_source("pi_cffi",
"""
     #include "pi.h"   // the C header of the library
""",
    extra_link_args=["-Wl,-rpath,."],
    include_dirs=[this_dir.as_posix()],
    library_dirs=[this_dir.as_posix()],
    libraries=['piapprox'])   # library name, for the linker

if __name__ == "__main__":
    ffibuilder.compile(verbose=True)
```

执行以上脚本后，生成 pi_cffi.c 文件，它实现了一个完整的 CPython 模块，并且将声明的库函数连结到模块中供调用。

执行编译时需要正确的编译器输入，包含 Python 头文件的位置，源代码及其它相关头文件。使用的参数和 distutils 模块的 Extension 类型类似。

编译完成并安装模块后就可以在 Python 脚本中调用库函数：

```py
from pi_cffi import ffi, lib
print(lib.pi_approx(5000))
```

正确配置脚本并执行编译后，还可以使用最新内置的 Setuptools 发布工具调用 piapprox_build.py 脚本进行编译并安装模块到 site-packages 目录，编写类似以下的安装脚本 *setup.py*，并执行 python setup.py build 或 install 命令进行编译、安装操作：

```py
from setuptools import setup, Extension

setup(
    name='cffi_example',
    version='0.0.1',
    # packages=['cffi_example'],
    description="This is cffi_example package",
    # cffi_modules=["piapprox_build:ffibuilder"], # "filename:global"
    # cffi_modules=["tasks.py:ffi"], # 'path/build.py:ffi_variable'
    ext_modules=[Extension("cffi_example", 
        sources=["cffi_example.c", "python-bindings/cppmult.cpp"], 
        include_dirs=['python-bindings']
        )],
    setup_requires=["cffi>=1.15.0"],
    install_requires=[
        'cffi>=1.15.0; python_version == "3.10"',
    ],
)
```

Setuptools 工具本身就可以调用编译程序进行编译，生成 cffi 模块实现代码后，也可以直使用 setup.py 脚本中设置的 ext_modules 来编译模块。根据是否使用了模块目录来使用 packages 参数，它指定模块目录路径。

执行脚本时，传递 --help 获取使用帮助，例如查看可指定的编译器类型：

```sh
> python setup.py build --help-compiler
List of available compilers:
  --compiler=bcpp     Borland C++ Compiler
  --compiler=cygwin   Cygwin port of GNU C Compiler for Win32
  --compiler=mingw32  Mingw32 port of GNU C Compiler for Win32
  --compiler=msvc     Microsoft Visual C++
  --compiler=unix     standard UNIX-style compiler
```

在使用 Visual Studio 2015 或更高版本时，并且指定编译器为 mingw32 就会触发一个异常 Unknown MS Compiler version，需要给 distutils/cygwinccompiler.py 文件打补丁，修改 get_msvcr() 函数：

```py
# https://bugs.python.org/issue25251
# https://bugs.python.org/file40608/patch.diff
elif msc_ver == '1700':
    # Visual Studio 2012 / Visual C++ 11.0
    return ['msvcr110']
elif msc_ver == '1800':
    # Visual Studio 2013 / Visual C++ 12.0
    return ['msvcr120']
elif msc_ver == '1929':
# elif msc_ver == '1900':
    # Visual Studio 2015 / Visual C++ 14.0
    # "msvcr140.dll no longer exists" http://blogs.msdn.com/b/vcblog/archive/2014/06/03/visual-studio-14-ctp.aspx
    return ['vcruntime140']
```

另外，如果使用 32-bit 编译器编译 64-bit 扩展就会触发：LONG_BIT definition appears wrong for platform (bad gcc/glibc config?). 正确的情况下 LONG_BIT 等于 8 * SIZEOF_LONG，如果使用 32-bit 编译器，LONG_BIT 设置为 32，和目标值 64 不匹配。

另外，模块依赖外部 DLL 时，Python 3.8 默认 `ctypes.CDLL` 加载信任路径的库文件，这可能导致 ImportError 异常，参考 whatsnew 3.8 ctypes。需要通过 os.add_dll_directory() 模块方法指定 DLL 所在目录，使用 dumpbin /imports 命令查询依赖，或者使用 CFF Explorer 工具：

    ImportError: DLL load failed while importing cffi_example: 找不到指定的模块。

以下是 Python Bindings: Calling C or C++ From Python by by Jim Anderson 文章配套脚本 tasks.py 参考：

```py
from invoke import run, task, Context
import cffi
import pathlib
import re

print("Building CFFI Module")
ffi = cffi.FFI()

run("chcp 65001")
this_dir = pathlib.Path("python-bindings").resolve()
h_file_name = this_dir / "cmult.h"
with open(h_file_name) as h_file:
    # cffi does not like our preprocessor directives, so we remove them
    lns = h_file.read().splitlines()
    flt = filter(lambda ln: not re.match(r" *#", ln), lns)
    flt = map(lambda ln: ln.replace("EXPORT_SYMBOL ", ""), flt)
    ffi.cdef(str("\n").join(flt))

ffi.set_source(
    "cffi_example",
    # Since we are calling a fully built library directly no custom source
    # is necessary. We need to include the .h files, though, because behind
    # the scenes cffi generates a .c file which contains a Python-friendly
    # wrapper around each of the functions.
    '#include "cmult.h"',
    # The important thing is to include the pre-built lib in the list of
    # libraries we are linking against:
    libraries=["cmult"],
    sources=["python-bindings/cppmult.cpp"], 
    library_dirs=[this_dir.as_posix()],
    include_dirs=[this_dir.as_posix()],
    extra_link_args=["-Wl,-rpath,."],
)

ffi.compile(verbose=True)
print("* Complete")
```

加载 cffi_example 模块并测试：

```py
import os
os.add_dll_directory("c:/mingw/bin")

from cffi_example import ffi, lib
lib.mult(1, 2.0)
```


Simple example (ABI level, in-line)

```py
>>> from cffi import FFI
>>> ffi = FFI()
>>> ffi.cdef("""
...     int printf(const char *format, ...);   // copy-pasted from the man page
... """)
>>> C = ffi.dlopen(None)                     # loads the entire C namespace
>>> arg = ffi.new("char[]", b"world")        # equivalent to C code: char arg[] = "world";
>>> C.printf(b"hi there, %s.\n", arg)        # call printf
hi there, world.
17                                           # this is the return value
>>>
```

本例不调用任何 C 编译器，即所谓的 ABI 模式下工作，这意味着如果调用某个函数或访问 cdef() 中声明错误的结构的某些字段，它将使用程序崩溃。

Windows 上的 Python 3 不能正确执行 ffi.dlopen(None)，这个问题很混乱，无法真正解决。如果使用  ffi.dlopen("path.dll") 从系统加载存在的 DLL 来加载并调用函数，则不会出现问题。

如果可以选择使用 C 编译器安装模块，强烈建议使用 API 模式，速度也更快。

Struct/Array Example (minimal, in-line)

```py
from cffi import FFI
ffi = FFI()
ffi.cdef("""
    typedef struct {
        unsigned char r, g, b;
    } pixel_t;
""")
image = ffi.new("pixel_t[]", 800*600)

f = open('data', 'rb')     # binary mode -- important
f.readinto(ffi.buffer(image))
f.close()

image[100].r = 255
image[100].g = 192
image[100].b = 128

f = open('data', 'wb')
f.write(ffi.buffer(image))
f.close()
```






## ==⚡  C/C++ Extensions with SWIG
- SWIG Tutorial https://www.swig.org/tutorial.html

SWIG - Simplified Wrapper and Interface Generator 是一个通用跨平台的语言桥接工具，类似 interface definition language (IDL) ，能将 C/C++ 的程序与脚本语言，如 Perl，Python，Ruby 和 Tcl 进行绑定。

最新的 SWIG-4.0.0 支持了大量流行编程语言，包括 C#、D、Go、Guile、Java、Javascript、Lua、MzScheme/Racket、OCaml、Octave、Perl、PHP、Python、R、Ruby、Scilab、Tcl。

SWIG 是目的就是要为 C/C++ API 提供脚本语言的接口，所做的事情其实就是两件事：

- 根据要调用的 C API 生成 Wrapper 函数，作为胶水来让脚本解析器和底层函数进行交互。
- 为生成的 Wrapper 函数生成脚本语言的调用接口。

To illustrate the use of SWIG, suppose you have some C functions you want added to Tcl, Perl, Python, Java and C#. Specifically, let's say you have them in a file 'example.c'

```c
/* File : example.c */

#include <time.h>
double My_variable = 3.0;

int fact(int n) {
    if (n <= 1) return 1;
    else return n*fact(n-1);
}

int my_mod(int x, int y) {
    return (x%y);
}
   
char *get_time()
{
    time_t ltime;
    time(&ltime);
    return ctime(&ltime);
}
```

Interface file

Now, in order to add these files to your favorite language, you need to write an "interface file" which is the input to SWIG. An interface file for these C functions might look like this :

```sh
 /* example.i */
 %module example
 %{
 /* Put header files here or function declarations like below */
 extern double My_variable;
 extern int fact(int n);
 extern int my_mod(int x, int y);
 extern char *get_time();
 %}
 
 extern double My_variable;
 extern int fact(int n);
 extern int my_mod(int x, int y);
 extern char *get_time();
```
 
Building a Tcl module
At the UNIX prompt, type the following (shown for Linux, see the SWIG Wiki Shared Libraries FAQ page for help with other operating systems):

```sh
 unix % swig -tcl example.i
 unix % gcc -fpic -c example.c example_wrap.c -I/usr/local/include 
 unix % gcc -shared example.o example_wrap.o -o example.so
 unix % tclsh
 % load ./example.so example
 % puts $My_variable
 3.0
 % fact 5
 120
 % my_mod 7 3
 1
 % get_time
 Sun Feb 11 23:01:07 2018
 
 % 
```
 
The swig command produces a file *example_wrap.c* that should be compiled and linked with the rest of the program. In this case, we have built a dynamically loadable extension that can be loaded into the Tcl interpreter using the 'load' command.


Building a Python module
Turning C code into a Python module is also easy. Simply do the following (shown for Irix, see the SWIG Wiki Shared Libraries FAQ page for help with other operating systems):
 
```sh
 unix % swig -python example.i
 unix % gcc -c example.c example_wrap.c -I/usr/local/include/python2.7
 unix % ld -shared example.o example_wrap.o -o _example.so 
```

We can now use the Python module as follows :

```sh
 >>> import example
 >>> example.fact(5)
 120
 >>> example.my_mod(7,3)
 1
 >>> example.get_time()
 'Sun Feb 11 23:01:07 2018'
 >>>
```
 
Building a Perl module
You can also build a Perl5 module as follows (shown for Linux, see the SWIG Wiki Shared Libraries FAQ page for help with other operating systems):

```sh
 unix % swig -perl5 example.i
 unix % gcc -c `perl -MConfig -e 'print join(" ", @Config{qw(ccflags optimize cccdlflags)}, \
        "-I$Config{archlib}/CORE")'` example.c example_wrap.c
 unix % gcc `perl -MConfig -e 'print $Config{lddlflags}'` example.o example_wrap.o -o example.so
 unix % perl
 use example;
 print $example::My_variable,"\n";
 print example::fact(5),"\n";
 print example::get_time(),"\n";
 <ctrl-d>
 3.0
 120
 Sun Feb 11 23:01:07 2018
 unix % 
```
 
Building a Java module
SWIG will also generate JNI code for accessing C/C++ code from Java. Here is an example building a Java module (shown for Cygwin, see the SWIG Wiki Shared Libraries FAQ page for help with other operating systems):

```sh
 $ swig -java example.i
 $ gcc -c example.c example_wrap.c -I/c/jdk1.3.1/include -I/c/jdk1.3.1/include/win32
 $ gcc -shared example.o  example_wrap.o -mno-cygwin -Wl,--add-stdcall-alias  -o example.dll
 $ cat main.java
 public class main {
   public static void main(String argv[]) {
     System.loadLibrary("example");
     System.out.println(example.getMy_variable());
     System.out.println(example.fact(5));
     System.out.println(example.get_time());
   }
 }
 $ javac main.java
 $ java main
 3.0
 120
 Mon Mar  4 18:20:31  2002
 $
```
 
Building a C# module
SWIG will also generate code for accessing C/C++ code from C# using PInvoke. Here is an example building a C# module (shown for Linux, see the SWIG Wiki Shared Libraries FAQ page for help with other operating systems). It uses the open source Mono C# compiler which runs on Windows and most Unix systems, but the Microsoft C# compiler (csc.exe) works equally well on Windows:

```sh
 $ swig -csharp example.i
 $ gcc -c -fpic example.c example_wrap.c
 $ gcc -shared example.o  example_wrap.o   -o libexample.so
 $ mono-csc -out:runme.exe *.cs
 $ cat runme.cs
 using System;
 public class runme {
     static void Main() {
         Console.WriteLine(example.My_variable);
         Console.WriteLine(example.fact(5));
         Console.WriteLine(example.get_time());
     }
 }
 $ ./runme.exe
 3
 120
 Thu Nov 17 21:24:13 2016
 
 $
```
 
SWIG for the truly lazy
As it turns out, it is not always necessary to write a special interface file. If you have a header file, you can often just include it directly in the SWIG interface. For example:

```sh
 %module example
 %{
 /* Includes the header in the wrapper code */
 #include "header.h"
 %}
 
 /* Parse the header file to generate wrappers */
 %include "header.h"
```
 
Alternatively, some people might just include SWIG directives in a header file with conditional compilation. For example:

```sh
 #ifdef SWIG
 %module example
 %{
 #include "header.h"
 %}
 #endif
 
 extern int fact(int n);
 ...
```
 
Running SWIG under Microsoft Windows
SWIG also works perfectly well under all known 32-bit and 64-bit versions of Windows. SWIG is typically invoked from the command prompt and can be used with NMAKE or as custom builds from Visual Studio. Modules are typically compiled in the form of a DLL that can be dynamically loaded into Java, Python, or whatever language you are using.

That's it (well, more or less)
That's about everything you need to know to get started. Here's the short checklist :

- Make sure you specify a module name.
- Use ISO C/C++ syntax
- Figure out how to compile a shared library module / dynamic link library (may require reading a few man pages for your compiler).
- Relax.


Surely there's more to it...
The above example is intentionally simple, but the general idea extends to more complicated C/C++ programming tasks. In fact, it is important to know that SWIG is a fairly complete C++ compiler with support for nearly every language feature. This includes preprocessing, pointers, classes, inheritance, and even C++ templates. SWIG can also be used to package structures and classes into proxy classes in the target language---exposing the underlying functionality in a very natural manner.

To illustrate, suppose you wanted to wrap the following C++ data structure:

```sh
 // pair.h.  A pair like the STL
 namespace std {
    template<class T1, class T2> struct pair {
        T1 first;
        T2 second;
        pair() : first(T1()), second(T2()) { };
        pair(const T1 &f, const T2 &s) : first(f), second(s) { }
    };
 }
```
 
To wrap with SWIG, you might specify the following interface:

```sh
 // pair.i - SWIG interface
 %module pair
 %{
 #include "pair.h"
 %}
 
 // Ignore the default constructor
 %ignore std::pair::pair();      
 
 // Parse the original header file
 %include "pair.h"
 
 // Instantiate some templates
 
 %template(pairii) std::pair<int,int>;
 %template(pairdi) std::pair<double,int>;
```
 
Now, compiling for Linux (Python):

```sh
 $ swig -python -c++ pair.i
 $ g++ -c -fpic pair_wrap.c -I/usr/include/python2.7
 $ g++ -shared pair_wrap.o -o _pair.so
 $ python
 Python 2.7.15 (default, Nov 12 2018, 14:31:15) 
 [GCC 7.3.0] on linux2
 Type "help", "copyright", "credits" or "license" for more information.
 >>> import pair
 >>> a = pair.pairii(3,4)
 >>> a.first
 3
 >>> a.second
 4
 >>> a.second = 16
 >>> a.second
 16
 >>> b = pair.pairdi(3.5,8)
 >>> b.first
 3.5
 >>> b.second
 8
```


# =🚩 Abstract Objects Layer


    +-- Doc\c-api
    |  ✒ -- abstract.rst            => Abstract Objects Layer
    |   • -- object.rst                 => Object Protocol
    |   • -- call.rst                   => Call Protocol
    |   • -- number.rst                 => Number Protocol
    |   • -- sequence.rst               => Sequence Protocol
    |   • -- mapping.rst                => Mapping Protocol
    |   • -- iter.rst                   => Iterator Protocol
    |   • -- buffer.rst                 => Buffer Protocol
    |   • -- objbuffer.rst              => Old Buffer Protocol

## ==⚡ Zero-Copy & Buffer Protocol

Less copies in Python with the buffer protocol and memoryviews
https://eli.thegreenplace.net/2011/11/28/less-copies-in-python-with-the-buffer-protocol-and-memoryviews

Python使用Zero-Copy和Buffer Protocol实现高性能编程
https://www.cnblogs.com/erhuabushuo/p/10314803.html

安装一个内存分析工具：

```sh
# https://pypi.org/project/memory-profiler/
$ pip install -U memory_profiler
$ python -m memory_profiler example.py
# A function decorator is also available. Use as follows:
# from memory_profiler import profile
```

处理大量数据时，充分利用 buffer 数据避免拷贝是一个非常有效率的提速方案。

当你对字符串大批量的拷贝，切片和修改操作时是相当低效的。为什么？

假设一个读取二进制数据的大文件示例，然后将部分数据拷贝到另外一个文件。要展示该程序所使用的内存，memory_profiler 扩展可以一行一行观察程序所使用的内存。

```py
from memory_profiler import profile
import sys

@profile
def read_random():
    nul = "/dev/null" if sys.platform != "win32" else "NUL"
    bigfile = "/dev/urandom" if sys.platform != "win32" else \
        "c:/videos/qian99703-7015009652802866445.mp4"

    with open(bigfile, "rb") as source:
        content = source.read(1024 * 10000)
        content_to_write = content[1024:]
    print(f"content length: {len(content)}, content to write length {len(content_to_write)}")
    with open(nul, "wb") as target:
        target.write(content_to_write)


if __name__ == "__main__":
    read_random()
```



```sh
content length: 2292793, content to write length 2291769
Filename: C:\coding\md-code\coding\__main__.py

Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
    47     19.7 MiB     19.7 MiB           1   @profile
    48                                         def read_random():
    49     19.8 MiB      0.0 MiB           1       nul = "/dev/null" if sys.platform != "win32" else "NUL"
    50     19.8 MiB      0.0 MiB           2       bigfile = "/dev/urandom" if sys.platform != "win32" else \
    51     19.8 MiB      0.0 MiB           1           "c:/videos/qian99703-7015009652802866445.mp4"
    52                                         
    53     24.1 MiB      0.0 MiB           2       with open(bigfile, "rb") as source:
    54     21.9 MiB      2.2 MiB           1           content = source.read(1024 * 10000)
    55     24.1 MiB      2.2 MiB           1           content_to_write = content[1024:]
    56     24.1 MiB      0.0 MiB           1       print(f"content length: {len(content)}, content to write length {len(content_to_write)}")
    57     24.1 MiB      0.0 MiB           2       with open(nul, "wb") as target:
    58     24.1 MiB      0.0 MiB           1           target.write(content_to_write)
```

读取大文件分配好 buffer 内存后，再来以字符串存储这个数据。之后的切片 content[1024:]指令越过开头的 1KB 数据进行数据拷贝，也分配几乎同样的尺寸的内存空间，只是少了 1kb。

如果处理类似大量的字节数组对象操作那是简直就是灾难，C 语言使用 memcpy() 分配内存很快，但需要注意是：在内存使用以及总体性能来说，复制内存很慢。

通过 C 语言扩展，可以避免缓冲区拷贝，Python buffer protocol 使用 C-API 实现各种类型的缓冲区。

当一个对象实现了该协议，就可以使用 memoryview 类构造一个无拷贝的引用原始内存数据的对象，对内置已经实现的字符类型，可以直接使用 `memoryview(content)[1024:]` 来避免 buffer 重复拷贝。

相比拷贝的方式，直接节省了大概 50% 的内存开销。在处理 sockets 通信的时候极其有用，发送数据时，所有的数据可能并没有在一次调用就发送，避免拷贝就可以极大提高效率。

Python  New I/O Library 已经实现了 buffer protocol 机制，我们并不需要memoryview对象，我可以请求 I/O 函数写入我们预定义好的对象

Buffer protocol 有两方面：

- 数据生产方导出 "buffer interface" 以许可原始 buffer 被访问，参考 `buffer-structs`；
- 数据消费方，有多种方法直接访问原始 buffer 数据，如，通过方法参数指定 memoryview；

简单的数据类型对象，如 `bytes` 或 `bytearray` 都公开了字节方式的原始 buffer，其它方式也可以，`array.array` 就可以提供多字节的值。

原始数据消费的接口方法如 `~io.BufferedIOBase.write` 可以将原始 buffer 数据写入到文件，只需要传入对象具有只读访问。而 `~io.BufferedIOBase.readinto` 接口方法可以将原始 buffer 读取并写入参数指定的 buffer，要求读写访问。

通过 memoryview 还可以将数据写入指定偏移的位置：

```py
ba = bytearray(8)
# Reference the _bytearray_ from offset 4 to its end
ba_at_4 = memoryview(ba)[4:]
with open("/dev/urandom", "rb") as source:
# Write the content of /dev/urandom from offset 4 to the end of the
# bytearray, effectively reading 4 bytes only
    source.readinto(ba_at_4)
```


# =🚩 Python Setup and Usage

参考源代码文档：

    +-- Doc\using
    |   • -- index.rst               => Python Setup and Usage
    |   • -- cmdline.rst                => Command line and environment
    |   • -- configure.rst              => Configure Python
    |   • -- editors.rst                => Editors and IDEs
    |   • -- mac.rst                    => Using Python on a Mac
    |   • -- unix.rst                   => Using Python on Unix platforms
    |   • -- venv-create.inc            => Virtual Environments Creation
    |   • -- windows.rst                => Using Python on Windows

This part of the documentation is devoted to general information on the setup of the Python environment on different platforms, the invocation of the interpreter and things that make working with Python easier.

•1. Command line and environment
◦ 1.1. Command line
◾1.1.1. Interface options
◾1.1.2. Generic options
◾1.1.3. Miscellaneous options
◾1.1.4. Options you shouldn’t use

◦ 1.2. Environment variables
◾1.2.1. Debug-mode variables


•2. Using Python on Unix platforms
◦ 2.1. Getting and installing the latest version of Python
◾2.1.1. On Linux
◾2.1.2. On FreeBSD and OpenBSD
◾2.1.3. On OpenSolaris

◦ 2.2. Building Python
◦ 2.3. Python-related paths and files
◦ 2.4. Miscellaneous

•3. Using Python on Windows
◦ 3.1. The full installer
◾3.1.1. Installation steps
◾3.1.2. Removing the MAX_PATH Limitation
◾3.1.3. Installing Without UI
◾3.1.4. Installing Without Downloading
◾3.1.5. Modifying an install

◦ 3.2. The Microsoft Store package
◾3.2.1. Known Issues

◦ 3.3. The nuget.org packages
◦ 3.4. The embeddable package
◾3.4.1. Python Application
◾3.4.2. Embedding Python

◦ 3.5. Alternative bundles
◦ 3.6. Configuring Python
◾3.6.1. Excursus: Setting environment variables
◾3.6.2. Finding the Python executable

◦ 3.7. UTF-8 mode
◦ 3.8. Python Launcher for Windows
◾3.8.1. Getting started
◾3.8.1.1. From the command-line
◾3.8.1.2. Virtual environments
◾3.8.1.3. From a script
◾3.8.1.4. From file associations

◾3.8.2. Shebang Lines
◾3.8.3. Arguments in shebang lines
◾3.8.4. Customization
◾3.8.4.1. Customization via INI files
◾3.8.4.2. Customizing default Python versions

◾3.8.5. Diagnostics

◦ 3.9. Finding modules
◦ 3.10. Additional modules
◾3.10.1. PyWin32
◾3.10.2. cx_Freeze
◾3.10.3. WConio

◦ 3.11. Compiling Python on Windows
◦ 3.12. Other Platforms

•4. Using Python on a Macintosh
◦ 4.1. Getting and Installing MacPython
◾4.1.1. How to run a Python script
◾4.1.2. Running scripts with a GUI
◾4.1.3. Configuration

◦ 4.2. The IDE
◦ 4.3. Installing Additional Python Packages
◦ 4.4. GUI Programming on the Mac
◦ 4.5. Distributing Python Applications on the Mac
◦ 4.6. Other Resources

•5. Editors and IDEs


## ==⚡ 1. Command line and environment

The CPython interpreter scans the command line and the environment for various settings.


CPython implementation detail: Other implementations’ command line schemes may differ. See Alternate Implementations for further resources.


### ===🗝 1.1. Command line

When invoking Python, you may specify any of these options:


    python [-bBdEhiIOqsSuvVWx?] [-c command | -m module-name | script | - ] [args]


The most common use case is, of course, a simple invocation of a script:

    python myscript.py


### ===🗝 1.1.1. Interface options

The interpreter interface resembles that of the UNIX shell, but provides some additional methods of invocation:

1. • When called with standard input connected to a tty device, it prompts for commands and executes them until an `EOF` (an end-of-file character, you can produce that with `Ctrl-D` on UNIX or `Ctrl-Z`, Enter on Windows) is read.
2. • When called with a file name argument or with a file as standard input, it reads and executes a script from that file.
3. • When called with a directory name argument, it reads and executes an appropriately named script from that directory.
4. • When called with `-c command`, it executes the Python statement(s) given as command. Here command may contain multiple statements separated by newlines. Leading whitespace is significant in Python statements!
5. • When called with `-m module-name`, the given module is located on the Python module path and executed as a script.

In non-interactive mode, the entire input is parsed before it is executed.

An interface option terminates the list of options consumed by the interpreter, all consecutive arguments will end up in `sys.argv` – note that the first element, subscript zero (`sys.argv[0]`), is a string reflecting the program’s source.

➡ `-c <command>`
Execute the Python code in command. command can be one or more statements separated by newlines, with significant leading whitespace as in normal module code.

If this option is given, the first element of `sys.argv` will be "-c" and the current directory will be added to the start of `sys.path` (allowing modules in that directory to be imported as top level modules).

Raises an auditing event `cpython.run_command` with argument command.

➡ `-m <module-name>`
Search `sys.path` for the named module and execute its contents as the __main__ module.

Since the argument is a module name, you must not give a file extension (.py). The module name should be a valid absolute Python module name, but the implementation may not always enforce this (e.g. it may allow you to use a name that includes a hyphen).

Package names (including namespace packages) are also permitted. When a package name is supplied instead of a normal module, the interpreter will execute <pkg>.__main__ as the main module. This behaviour is deliberately similar to the handling of directories and zipfiles that are passed to the interpreter as the script argument.

Note:
 This option cannot be used with built-in modules and extension modules written in C, since they do not have Python module files. However, it can still be used for precompiled modules, even if the original source file is not available.
 

If this option is given, the first element of `sys.argv` will be the full path to the module file (while the module file is being located, the first element will be set to "`-m`"). As with the `-c` option, the current directory will be added to the start of sys.path.

`-I` option can be used to run the script in isolated mode where `sys.path` contains neither the current directory nor the user’s site-packages directory. All PYTHON* environment variables are ignored, too.

Many standard library modules contain code that is invoked on their execution as a script. An example is the timeit module:


    python -m timeit -s 'setup here' 'benchmarked code here'
    python -m timeit -h # for details


Raises an auditing event `cpython.run_module` with argument module-name.

See also:
 runpy.run_module() Equivalent functionality directly available to Python code
PEP 338 – Executing modules as scripts https://www.python.org/dev/peps/pep-0338
Changed in version 3.1: Supply the package name to run a __main__ submodule.

Changed in version 3.4: namespace packages are also supported


➡ `-`
Read commands from standard input (``sys.stdin``). If standard input is a terminal, `-i` is implied.

If this option is given, the first element of `sys.argv` will be "-" and the current directory will be added to the start of `sys.path`.

Raises an auditing event cpython.run_stdin with no arguments.

➡ `<script>`
Execute the Python code contained in script, which must be a filesystem path (absolute or relative) referring to either a Python file, a directory containing a __main__.py file, or a zipfile containing a __main__.py file.

If this option is given, the first element of `sys.argv` will be the script name as given on the command line.

If the script name refers directly to a Python file, the directory containing that file is added to the start of `sys.path`, and the file is executed as the __main__ module.

If the script name refers to a directory or zipfile, the script name is added to the start of `sys.path` and the __main__.py file in that location is executed as the __main__ module.

Raises an auditing event cpython.run_file with argument filename.

See also:
 runpy.run_path() Equivalent functionality directly available to Python code

If no interface option is given, `-i` is implied, `sys.argv[0]` is an empty string ("") and the current directory will be added to the start of `sys.path`. Also, tab-completion and history editing is automatically enabled, if available on your platform (see Readline configuration).

See also: Python Tutorial - 2.1 Invoking the Interpreter
Changed in version 3.4: Automatic enabling of tab-completion and history editing.



### ===🗝 1.1.2. Generic options

➡ `-?` `-h` `--help`
Print a short description of all command line options.

➡ `-V` `--version`
Print the Python version number and exit. Example output could be:

>Python 3.8.0b2+

When given twice, print more information about the build, like:


    Python 3.8.0b2+ (3.8:0c076caaa8, Apr 20 2019, 21:55:00)
    [GCC 6.2.0 20161005]
New in version 3.6: The -VV option.



### ===🗝 1.1.3. Miscellaneous options


➡ `-b`
Issue a warning when comparing bytes or bytearray with str or bytes with int. Issue an error when the option is given twice (-bb).

Changed in version 3.5: Affects comparisons of bytes with int.


➡ `-B`
If given, Python won’t try to write .pyc files on the import of source modules. See also PYTHONDONTWRITEBYTECODE.
--check-hash-based-pycs default|always|never
Control the validation behavior of hash-based .pyc files. See Cached bytecode invalidation. When set to default, checked and unchecked hash-based bytecode cache files are validated according to their default semantics. When set to always, all hash-based .pyc files, whether checked or unchecked, are validated against their corresponding source file. When set to never, hash-based .pyc files are not validated against their corresponding source files.

The semantics of timestamp-based .pyc files are unaffected by this option.

➡ `-d`
Turn on parser debugging output (for expert only, depending on compilation options). See also PYTHONDEBUG.

➡ `-E`
Ignore all PYTHON* environment variables, e.g. PYTHONPATH and PYTHONHOME, that might be set.

➡ `-i`
When a script is passed as first argument or the `-c` option is used, enter interactive mode after executing the script or the command, even when `sys.stdin` does not appear to be a terminal. The PYTHONSTARTUP file is not read.

This can be useful to inspect global variables or a stack trace when a script raises an exception. See also PYTHONINSPECT.

➡ `-I`
Run Python in isolated mode. This also implies `-E` and `-s`. In isolated mode `sys.path` contains neither the script’s directory nor the user’s site-packages directory. All PYTHON* environment variables are ignored, too. Further restrictions may be imposed to prevent the user from injecting malicious code.

New in version 3.4.


➡ `-O`
Remove assert statements and any code conditional on the value of __debug__. Augment the filename for compiled (bytecode) files by adding .opt-1 before the .pyc extension (see PEP 488). See also PYTHONOPTIMIZE.

Changed in version 3.5: Modify .pyc filenames according to PEP 488.


➡ `-OO`
Do -O and also discard docstrings. Augment the filename for compiled (bytecode) files by adding .opt-2 before the .pyc extension (see PEP 488).

Changed in version 3.5: Modify .pyc filenames according to PEP 488.


➡ `-q`
Don’t display the copyright and version messages even in interactive mode.

New in version 3.2.


➡ `-R`
Turn on hash randomization. This option only has an effect if the PYTHONHASHSEED environment variable is set to 0, since hash randomization is enabled by default.

On previous versions of Python, this option turns on hash randomization, so that the __hash__() values of str and bytes objects are “salted” with an unpredictable random value. Although they remain constant within an individual Python process, they are not predictable between repeated invocations of Python.

Hash randomization is intended to provide protection against a denial-of-service caused by carefully-chosen inputs that exploit the worst case performance of a dict construction, O(n^2) complexity. See http://www.ocert.org/advisories/ocert-2011-003.html for details.

PYTHONHASHSEED allows you to set a fixed value for the hash seed secret.

Changed in version 3.7: The option is no longer ignored.


New in version 3.2.3.


➡ `-s`
Don’t add the user site-packages directory to `sys.path`.

See also:
 PEP 370 – Per user site-packages directory
 

➡ `-S`
Disable the import of the module site and the site-dependent manipulations of `sys.path` that it entails. Also disable these manipulations if site is explicitly imported later (call `site.main()` if you want them to be triggered).

➡ `-u`
Force the `stdout` and `stderr` streams to be unbuffered. This option has no effect on the `stdin` stream.

See also PYTHONUNBUFFERED.

Changed in version 3.7: The text layer of the `stdout` and `stderr` streams now is unbuffered.


➡ `-v`
Print a message each time a module is initialized, showing the place (filename or built-in module) from which it is loaded. When given twice (`-vv`), print a message for each file that is checked for when searching for a module. Also provides information on module cleanup at exit. See also PYTHONVERBOSE.

➡ `-W arg`
Warning control. Python’s warning machinery by default prints warning messages to `sys.stderr`. A typical warning message has the following form:


    file:line: category: message


By default, each warning is printed once for each source line where it occurs. This option controls how often warnings are printed.

Multiple `-W` options may be given; when a warning matches more than one option, the action for the last matching option is performed. Invalid `-W` options are ignored (though, a warning message is printed about invalid options when the first warning is issued).

Warnings can also be controlled using the PYTHONWARNINGS environment variable and from within a Python program using the warnings module.

The simplest settings apply a particular action unconditionally to all warnings emitted by a process (even those that are otherwise ignored by default):


    -Wdefault  # Warn once per call location
    -Werror    # Convert to exceptions
    -Walways   # Warn every time
    -Wmodule   # Warn once per calling module
    -Wonce     # Warn once per Python process
    -Wignore   # Never warn


The action names can be abbreviated as desired (e.g. -Wi, -Wd, -Wa, -We) and the interpreter will resolve them to the appropriate action name.

See The Warnings Filter and Describing Warning Filters for more details.

➡ `-x`
Skip the first line of the source, allowing use of non-Unix forms of `#!cmd`. This is intended for a DOS specific hack only.

➡ `-X`
Reserved for various implementation-specific options. CPython currently defines the following possible values:

• `-X faulthandler` to enable faulthandler;
• `-X oldparser`: enable the traditional LL(1) parser. See also PYTHONOLDPARSER and PEP 617.
• `-X showrefcount` to output the total reference count and number of used memory blocks when the program finishes or after each statement in the interactive interpreter. This only works on debug builds.
• `-X tracemalloc` to start tracing Python memory allocations using the tracemalloc module. By default, only the most recent frame is stored in a traceback of a trace. Use -X tracemalloc=NFRAME to start tracing with a traceback limit of NFRAME frames. See the tracemalloc.start() for more information.
• `-X importtime` to show how long each import takes. It shows module name, cumulative time (including nested imports) and self time (excluding nested imports). Note that its output may be broken in multi-threaded application. Typical usage is python3 -X importtime -c 'import asyncio'. See also PYTHONPROFILEIMPORTTIME.
• `-X dev`: enable Python Development Mode, introducing additional runtime checks that are too expensive to be enabled by default.
• `-X utf8` enables UTF-8 mode for operating system interfaces, overriding the default locale-aware mode. `-X utf8=0` explicitly disables UTF-8 mode (even when it would otherwise activate automatically). See PYTHONUTF8 for more details.
• `-X pycache_prefix`=PATH enables writing .pyc files to a parallel tree rooted at the given directory instead of to the code tree. See also PYTHONPYCACHEPREFIX.

It also allows passing arbitrary values and retrieving them through the `sys._xoptions dictionary`.

Changed in version 3.2: The -X option was added.
New in version 3.3: The -X faulthandler option.
New in version 3.4: The -X showrefcount and -X tracemalloc options.
New in version 3.6: The -X showalloccount option.
New in version 3.7: The -X importtime, -X dev and -X utf8 options.
New in version 3.8: The -X pycache_prefix option. The -X dev option now logs close() exceptions in io.IOBase destructor.
Changed in version 3.9: Using -X dev option, check encoding and errors arguments on string encoding and decoding operations.

The -X showalloccount option has been removed.

Deprecated since version 3.9, will be removed in version 3.10: The -X oldparser option.


### ===🗝 1.1.4. Options you shouldn’t use

➡ `-J`
Reserved for use by Jython.


### ===🗝 1.2. Environment variables

These environment variables influence Python’s behavior, they are processed before the command-line switches other than `-E` or `-I`. It is customary that command-line switches override environmental variables where there is a conflict.

➡ `PYTHONHOME`
Change the location of the standard Python libraries. By default, the libraries are searched in prefix/lib/pythonversion and exec_prefix/lib/pythonversion, where prefix and exec_prefix are installation-dependent directories, both defaulting to /usr/local.

When PYTHONHOME is set to a single directory, its value replaces both prefix and exec_prefix. To specify different values for these, set PYTHONHOME to prefix:exec_prefix.
➡ `PYTHONPATH`
Augment the default search path for module files. The format is the same as the shell’s PATH: one or more directory pathnames separated by os.pathsep (e.g. colons on Unix or semicolons on Windows). Non-existent directories are silently ignored.

In addition to normal directories, individual PYTHONPATH entries may refer to zipfiles containing pure Python modules (in either source or compiled form). Extension modules cannot be imported from zipfiles.

The default search path is installation dependent, but generally begins with prefix/lib/pythonversion (see PYTHONHOME above). It is always appended to PYTHONPATH.

An additional directory will be inserted in the search path in front of PYTHONPATH as described above under Interface options. The search path can be manipulated from within a Python program as the variable `sys.path`.
➡ `PYTHONPLATLIBDIR`
If this is set to a non-empty string, it overrides the sys.platlibdir value.

New in version 3.9.

➡ `PYTHONSTARTUP`
If this is the name of a readable file, the Python commands in that file are executed before the first prompt is displayed in interactive mode. The file is executed in the same namespace where interactive commands are executed so that objects defined or imported in it can be used without qualification in the interactive session. You can also change the prompts sys.ps1 and sys.ps2 and the hook sys.__interactivehook__ in this file.

Raises an auditing event cpython.run_startup with the filename as the argument when called on startup.
➡ `PYTHONOPTIMIZE`
If this is set to a non-empty string it is equivalent to specifying the -O option. If set to an integer, it is equivalent to specifying -O multiple times.
➡ `PYTHONBREAKPOINT`
If this is set, it names a callable using dotted-path notation. The module containing the callable will be imported and then the callable will be run by the default implementation of sys.breakpointhook() which itself is called by built-in breakpoint(). If not set, or set to the empty string, it is equivalent to the value “pdb.set_trace”. Setting this to the string “0” causes the default implementation of sys.breakpointhook() to do nothing but return immediately.

New in version 3.7.

➡ `PYTHONDEBUG`
If this is set to a non-empty string it is equivalent to specifying the -d option. If set to an integer, it is equivalent to specifying -d multiple times.
➡ `PYTHONOLDPARSER`
If this is set to a non-empty string, enable the traditional LL(1) parser.

See also the -X oldparser option and PEP 617.

Deprecated since version 3.9, will be removed in version 3.10.

➡ `PYTHONINSPECT`
If this is set to a non-empty string it is equivalent to specifying the -i option.

This variable can also be modified by Python code using os.environ to force inspect mode on program termination.
➡ `PYTHONUNBUFFERED`
If this is set to a non-empty string it is equivalent to specifying the -u option.
➡ `PYTHONVERBOSE`
If this is set to a non-empty string it is equivalent to specifying the -v option. If set to an integer, it is equivalent to specifying -v multiple times.
➡ `PYTHONCASEOK`
If this is set, Python ignores case in import statements. This only works on Windows and OS X.
➡ `PYTHONDONTWRITEBYTECODE`
If this is set to a non-empty string, Python won’t try to write .pyc files on the import of source modules. This is equivalent to specifying the -B option.
➡ `PYTHONPYCACHEPREFIX`
If this is set, Python will write .pyc files in a mirror directory tree at this path, instead of in __pycache__ directories within the source tree. This is equivalent to specifying the -X pycache_prefix=PATH option.

New in version 3.8.

➡ `PYTHONHASHSEED`
If this variable is not set or set to random, a random value is used to seed the hashes of str and bytes objects.

If PYTHONHASHSEED is set to an integer value, it is used as a fixed seed for generating the hash() of the types covered by the hash randomization.

Its purpose is to allow repeatable hashing, such as for selftests for the interpreter itself, or to allow a cluster of python processes to share hash values.

The integer must be a decimal number in the range [0,4294967295]. Specifying the value 0 will disable hash randomization.

New in version 3.2.3.

➡ `PYTHONIOENCODING`
If this is set before running the interpreter, it overrides the encoding used for stdin/stdout/stderr, in the syntax encodingname:errorhandler. Both the encodingname and the :errorhandler parts are optional and have the same meaning as in str.encode().

For stderr, the :errorhandler part is ignored; the handler will always be 'backslashreplace'.

Changed in version 3.4: The encodingname part is now optional.


Changed in version 3.6: On Windows, the encoding specified by this variable is ignored for interactive console buffers unless PYTHONLEGACYWINDOWSSTDIO is also specified. Files and pipes redirected through the standard streams are not affected.

➡ `PYTHONNOUSERSITE`
If this is set, Python won’t add the user site-packages directory to `sys.path`.

See also:
 PEP 370 – Per user site-packages directory
 
➡ `PYTHONUSERBASE`
Defines the user base directory, which is used to compute the path of the user site-packages directory and Distutils installation paths for python setup.py install --user.

See also:
 PEP 370 – Per user site-packages directory
 
➡ `PYTHONEXECUTABLE`
If this environment variable is set, sys.argv[0] will be set to its value instead of the value got through the C runtime. Only works on Mac OS X.
➡ `PYTHONWARNINGS`
This is equivalent to the -W option. If set to a comma separated string, it is equivalent to specifying -W multiple times, with filters later in the list taking precedence over those earlier in the list.

The simplest settings apply a particular action unconditionally to all warnings emitted by a process (even those that are otherwise ignored by default):

    PYTHONWARNINGS=default  # Warn once per call location
    PYTHONWARNINGS=error    # Convert to exceptions
    PYTHONWARNINGS=always   # Warn every time
    PYTHONWARNINGS=module   # Warn once per calling module
    PYTHONWARNINGS=once     # Warn once per Python process
    PYTHONWARNINGS=ignore   # Never warn

See The Warnings Filter and Describing Warning Filters for more details.


➡ `PYTHONFAULTHANDLER`
If this environment variable is set to a non-empty string, `faulthandler.enable()` is called at startup: install a handler for SIGSEGV, SIGFPE, SIGABRT, SIGBUS and SIGILL signals to dump the Python traceback. This is equivalent to `-X faulthandler` option.

New in version 3.3.


➡ `PYTHONTRACEMALLOC`
If this environment variable is set to a non-empty string, start tracing Python memory allocations using the tracemalloc module. The value of the variable is the maximum number of frames stored in a traceback of a trace. For example, PYTHONTRACEMALLOC=1 stores only the most recent frame. See the tracemalloc.start() for more information.

New in version 3.4.


➡ `PYTHONPROFILEIMPORTTIME`
If this environment variable is set to a non-empty string, Python will show how long each import takes. This is exactly equivalent to setting -X importtime on the command line.

New in version 3.7.


➡ `PYTHONASYNCIODEBUG`
If this environment variable is set to a non-empty string, enable the debug mode of the asyncio module.

New in version 3.4.


➡ `PYTHONMALLOC`
Set the Python memory allocators and/or install debug hooks.

Set the family of memory allocators used by Python:
• default: use the default memory allocators.
• malloc: use the malloc() function of the C library for all domains (PYMEM_DOMAIN_RAW, PYMEM_DOMAIN_MEM, PYMEM_DOMAIN_OBJ).
• pymalloc: use the pymalloc allocator for PYMEM_DOMAIN_MEM and PYMEM_DOMAIN_OBJ domains and use the malloc() function for the PYMEM_DOMAIN_RAW domain.

Install debug hooks:
• debug: install debug hooks on top of the default memory allocators.
• malloc_debug: same as malloc but also install debug hooks.
• pymalloc_debug: same as pymalloc but also install debug hooks.

See the default memory allocators and the PyMem_SetupDebugHooks() function (install debug hooks on Python memory allocators).

Changed in version 3.7: Added the "default" allocator.


New in version 3.6.


➡ `PYTHONMALLOCSTATS`
If set to a non-empty string, Python will print statistics of the pymalloc memory allocator every time a new pymalloc object arena is created, and on shutdown.

This variable is ignored if the PYTHONMALLOC environment variable is used to force the malloc() allocator of the C library, or if Python is configured without pymalloc support.

Changed in version 3.6: This variable can now also be used on Python compiled in release mode. It now has no effect if set to an empty string.


➡ `PYTHONLEGACYWINDOWSFSENCODING`
If set to a non-empty string, the default filesystem encoding and errors mode will revert to their pre-3.6 values of ‘mbcs’ and ‘replace’, respectively. Otherwise, the new defaults ‘utf-8’ and ‘surrogatepass’ are used.

This may also be enabled at runtime with `sys._enablelegacywindowsfsencoding()`.

Availability: Windows.

New in version 3.6: See PEP 529 for more details.


➡ `PYTHONLEGACYWINDOWSSTDIO`
If set to a non-empty string, does not use the new console reader and writer. This means that Unicode characters will be encoded according to the active console code page, rather than using utf-8.

This variable is ignored if the standard streams are redirected (to files or pipes) rather than referring to console buffers.

Availability: Windows.

New in version 3.6.


➡ `PYTHONCOERCECLOCALE`
If set to the value 0, causes the main Python command line application to skip coercing the legacy ASCII-based C and POSIX locales to a more capable UTF-8 based alternative.

If this variable is not set (or is set to a value other than 0), the `LC_ALL` locale override environment variable is also not set, and the current locale reported for the `LC_CTYPE` category is either the default C locale, or else the explicitly ASCII-based POSIX locale, then the Python CLI will attempt to configure the following locales for the `LC_CTYPE` category in the order listed before loading the interpreter runtime:
• C.UTF-8
• C.utf8
• UTF-8

If setting one of these locale categories succeeds, then the `LC_CTYPE` environment variable will also be set accordingly in the current process environment before the Python runtime is initialized. This ensures that in addition to being seen by both the interpreter itself and other locale-aware components running in the same process (such as the GNU readline library), the updated setting is also seen in subprocesses (regardless of whether or not those processes are running a Python interpreter), as well as in operations that query the environment rather than the current C locale (such as Python’s own `locale.getdefaultlocale()`).

Configuring one of these locales (either explicitly or via the above implicit locale coercion) automatically enables the surrogateescape error handler for `sys.stdin` and `sys.stdout` (`sys.stderr` continues to use backslashreplace as it does in any other locale). This stream handling behavior can be overridden using PYTHONIOENCODING as usual.

For debugging purposes, setting PYTHONCOERCECLOCALE=warn will cause Python to emit warning messages on stderr if either the locale coercion activates, or else if a locale that would have triggered coercion is still active when the Python runtime is initialized.

Also note that even when locale coercion is disabled, or when it fails to find a suitable target locale, PYTHONUTF8 will still activate by default in legacy ASCII-based locales. Both features must be disabled in order to force the interpreter to use ASCII instead of UTF-8 for system interfaces.

Availability: Unix/Linux.

New in version 3.7: See PEP 538 for more details.


➡ `PYTHONDEVMODE`
If this environment variable is set to a non-empty string, enable Python Development Mode, introducing additional runtime checks that are too expensive to be enabled by default.

New in version 3.7.


➡ `PYTHONUTF8`
If set to 1, enables the interpreter’s UTF-8 mode, where UTF-8 is used as the text encoding for system interfaces, regardless of the current locale setting.

This means that:


• `sys.getfilesystemencoding()` returns 'UTF-8' (the locale encoding is ignored).
• `locale.getpreferredencoding()` returns 'UTF-8' (the locale encoding is ignored, and the function’s do_setlocale parameter has no effect).
• `sys.stdin`, `sys.stdout`, and `sys.stderr` all use UTF-8 as their text encoding, with the surrogateescape error handler being enabled for `sys.stdin` and `sys.stdout` (`sys.stderr` continues to use backslashreplace as it does in the default locale-aware mode)

As a consequence of the changes in those lower level APIs, other higher level APIs also exhibit different default behaviours:


• Command line arguments, environment variables and filenames are decoded to text using the UTF-8 encoding.
• `os.fsdecode()` and `os.fsencode()` use the UTF-8 encoding.
• `open()`, `io.open()`, and `codecs.open()` use the UTF-8 encoding by default. However, they still use the strict error handler by default so that attempting to open a binary file in text mode is likely to raise an exception rather than producing nonsense data.

Note that the standard stream settings in UTF-8 mode can be overridden by PYTHONIOENCODING (just as they can be in the default locale-aware mode).

If set to 0, the interpreter runs in its default locale-aware mode.

Setting any other non-empty string causes an error during interpreter initialisation.

If this environment variable is not set at all, then the interpreter defaults to using the current locale settings, unless the current locale is identified as a legacy ASCII-based locale (as described for PYTHONCOERCECLOCALE), and locale coercion is either disabled or fails. In such legacy locales, the interpreter will default to enabling UTF-8 mode unless explicitly instructed not to do so.

Also available as the -X utf8 option.

New in version 3.7: See PEP 540 for more details.


### ===🗝 1.2.1. Debug-mode variables

Setting these variables only has an effect in a debug build of Python.

➡ `PYTHONTHREADDEBUG`
If set, Python will print threading debug info.

Need Python configured with the --with-pydebug build option.

➡ `PYTHONDUMPREFS`
If set, Python will dump objects and reference counts still alive after shutting down the interpreter.

Need Python configured with the --with-trace-refs build option.



## ==⚡ operators 运算符

参考源代码文档：

➡ The Python Standard Library - Built-in Types: stdtypes.rst
➡ The Python Language Reference - Expressions: expressions.rst

Python 语言支持以下类型的运算符:

- 算术运算符
- 比较（关系）运算符
- 赋值运算符
- 逻辑运算符
- 位运算符
- 成员运算符
- 标识运算符
- 运算符优先级


These are the Boolean operations, ordered by ascending priority:

+-------------+---------------------------------+-------+
| Operation   | Result                          | Notes |
+=============+=================================+=======+
| ``x or y``  | if *x* is false, then *y*, else | \(1)  |
|             | *x*                             |       |
+-------------+---------------------------------+-------+
| ``x and y`` | if *x* is false, then *x*, else | \(2)  |
|             | *y*                             |       |
+-------------+---------------------------------+-------+
| ``not x``   | if *x* is false, then ``True``, | \(3)  |
|             | else ``False``                  |       |
+-------------+---------------------------------+-------+

This table summarizes the comparison operations:

+------------+-------------------------+
| Operation  | Meaning                 |
+============+=========================+
| ``<``      | strictly less than      |
+------------+-------------------------+
| ``<=``     | less than or equal      |
+------------+-------------------------+
| ``>``      | strictly greater than   |
+------------+-------------------------+
| ``>=``     | greater than or equal   |
+------------+-------------------------+
| ``==``     | equal                   |
+------------+-------------------------+
| ``!=``     | not equal               |
+------------+-------------------------+
| ``is``     | object identity         |
+------------+-------------------------+
| ``is not`` | negated object identity |
+------------+-------------------------+

All numeric types (except complex) support the following operations (for priorities of
the operations, see :ref:`operator-summary`):

+---------------------+---------------------------------+---------+--------------------+
| Operation           | Result                          | Notes   | Full documentation |
+=====================+=================================+=========+====================+
| ``x + y``           | sum of *x* and *y*              |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``x - y``           | difference of *x* and *y*       |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``x * y``           | product of *x* and *y*          |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``x / y``           | quotient of *x* and *y*         |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``x // y``          | floored quotient of *x* and     | \(1)    |                    |
|                     | *y*                             |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``x % y``           | remainder of ``x / y``          | \(2)    |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``-x``              | *x* negated                     |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``+x``              | *x* unchanged                   |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``abs(x)``          | absolute value or magnitude of  |         | :func:`abs`        |
|                     | *x*                             |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``int(x)``          | *x* converted to integer        | \(3)\(6)| :func:`int`        |
+---------------------+---------------------------------+---------+--------------------+
| ``float(x)``        | *x* converted to floating point | \(4)\(6)| :func:`float`      |
+---------------------+---------------------------------+---------+--------------------+
| ``complex(re, im)`` | a complex number with real part | \(6)    | :func:`complex`    |
|                     | *re*, imaginary part *im*.      |         |                    |
|                     | *im* defaults to zero.          |         |                    |
+---------------------+---------------------------------+---------+--------------------+
|  ``c.conjugate()``  | conjugate of the complex number |         |                    |
|                     | *c*                             |         |                    |
+---------------------+---------------------------------+---------+--------------------+
| ``divmod(x, y)``    | the pair ``(x // y, x % y)``    | \(2)    | :func:`divmod`     |
+---------------------+---------------------------------+---------+--------------------+
| ``pow(x, y)``       | *x* to the power *y*            | \(5)    | :func:`pow`        |
+---------------------+---------------------------------+---------+--------------------+
| ``x ** y``          | *x* to the power *y*            | \(5)    |                    |
+---------------------+---------------------------------+---------+--------------------+

All :class:`numbers.Real` types (:class:`int` and :class:`float`) also include
the following operations:

+--------------------+---------------------------------------------+
| Operation          | Result                                      |
+====================+=============================================+
| :func:`math.trunc(\| *x* truncated to :class:`~numbers.Integral` |
| x) <math.trunc>`   |                                             |
+--------------------+---------------------------------------------+
| :func:`round(x[,   | *x* rounded to *n* digits,                  |
| n]) <round>`       | rounding half to even. If *n* is            |
|                    | omitted, it defaults to 0.                  |
+--------------------+---------------------------------------------+
| :func:`math.floor(\| the greatest :class:`~numbers.Integral`     |
| x) <math.floor>`   | <= *x*                                      |
+--------------------+---------------------------------------------+
| :func:`math.ceil(x)| the least :class:`~numbers.Integral` >= *x* |
| <math.ceil>`       |                                             |
+--------------------+---------------------------------------------+

This table lists the bitwise operations sorted in ascending priority:

+------------+--------------------------------+----------+
| Operation  | Result                         | Notes    |
+============+================================+==========+
| ``x | y``  | bitwise :dfn:`or` of *x* and   | \(4)     |
|            | *y*                            |          |
+------------+--------------------------------+----------+
| ``x ^ y``  | bitwise :dfn:`exclusive or` of | \(4)     |
|            | *x* and *y*                    |          |
+------------+--------------------------------+----------+
| ``x & y``  | bitwise :dfn:`and` of *x* and  | \(4)     |
|            | *y*                            |          |
+------------+--------------------------------+----------+
| ``x << n`` | *x* shifted left by *n* bits   | (1)(2)   |
+------------+--------------------------------+----------+
| ``x >> n`` | *x* shifted right by *n* bits  | (1)(3)   |
+------------+--------------------------------+----------+
| ``~x``     | the bits of *x* inverted       |          |
+------------+--------------------------------+----------+


Common Sequence Operations

+--------------------------+--------------------------------+----------+
| Operation                | Result                         | Notes    |
+==========================+================================+==========+
| ``x in s``               | ``True`` if an item of *s* is  | \(1)     |
|                          | equal to *x*, else ``False``   |          |
+--------------------------+--------------------------------+----------+
| ``x not in s``           | ``False`` if an item of *s* is | \(1)     |
|                          | equal to *x*, else ``True``    |          |
+--------------------------+--------------------------------+----------+
| ``s + t``                | the concatenation of *s* and   | (6)(7)   |
|                          | *t*                            |          |
+--------------------------+--------------------------------+----------+
| ``s * n`` or             | equivalent to adding *s* to    | (2)(7)   |
| ``n * s``                | itself *n* times               |          |
+--------------------------+--------------------------------+----------+
| ``s[i]``                 | *i*\ th item of *s*, origin 0  | \(3)     |
+--------------------------+--------------------------------+----------+
| ``s[i:j]``               | slice of *s* from *i* to *j*   | (3)(4)   |
+--------------------------+--------------------------------+----------+
| ``s[i:j:k]``             | slice of *s* from *i* to *j*   | (3)(5)   |
|                          | with step *k*                  |          |
+--------------------------+--------------------------------+----------+
| ``len(s)``               | length of *s*                  |          |
+--------------------------+--------------------------------+----------+
| ``min(s)``               | smallest item of *s*           |          |
+--------------------------+--------------------------------+----------+
| ``max(s)``               | largest item of *s*            |          |
+--------------------------+--------------------------------+----------+
| ``s.index(x[, i[, j]])`` | index of the first occurrence  | \(8)     |
|                          | of *x* in *s* (at or after     |          |
|                          | index *i* and before index *j*)|          |
+--------------------------+--------------------------------+----------+
| ``s.count(x)``           | total number of occurrences of |          |
|                          | *x* in *s*                     |          |
+--------------------------+--------------------------------+----------+

Mutable Sequence Types

+------------------------------+--------------------------------+---------------------+
| Operation                    | Result                         | Notes               |
+==============================+================================+=====================+
| ``s[i] = x``                 | item *i* of *s* is replaced by |                     |
|                              | *x*                            |                     |
+------------------------------+--------------------------------+---------------------+
| ``s[i:j] = t``               | slice of *s* from *i* to *j*   |                     |
|                              | is replaced by the contents of |                     |
|                              | the iterable *t*               |                     |
+------------------------------+--------------------------------+---------------------+
| ``del s[i:j]``               | same as ``s[i:j] = []``        |                     |
+------------------------------+--------------------------------+---------------------+
| ``s[i:j:k] = t``             | the elements of ``s[i:j:k]``   | \(1)                |
|                              | are replaced by those of *t*   |                     |
+------------------------------+--------------------------------+---------------------+
| ``del s[i:j:k]``             | removes the elements of        |                     |
|                              | ``s[i:j:k]`` from the list     |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.append(x)``              | appends *x* to the end of the  |                     |
|                              | sequence (same as              |                     |
|                              | ``s[len(s):len(s)] = [x]``)    |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.clear()``                | removes all items from *s*     | \(5)                |
|                              | (same as ``del s[:]``)         |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.copy()``                 | creates a shallow copy of *s*  | \(5)                |
|                              | (same as ``s[:]``)             |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.extend(t)`` or           | extends *s* with the           |                     |
| ``s += t``                   | contents of *t* (for the       |                     |
|                              | most part the same as          |                     |
|                              | ``s[len(s):len(s)] = t``)      |                     |
+------------------------------+--------------------------------+---------------------+
| ``s *= n``                   | updates *s* with its contents  | \(6)                |
|                              | repeated *n* times             |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.insert(i, x)``           | inserts *x* into *s* at the    |                     |
|                              | index given by *i*             |                     |
|                              | (same as ``s[i:i] = [x]``)     |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.pop()`` or ``s.pop(i)``  | retrieves the item at *i* and  | \(2)                |
|                              | also removes it from *s*       |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.remove(x)``              | remove the first item from *s* | \(3)                |
|                              | where ``s[i]`` is equal to *x* |                     |
+------------------------------+--------------------------------+---------------------+
| ``s.reverse()``              | reverses the items of *s* in   | \(4)                |
|                              | place                          |                     |
+------------------------------+--------------------------------+---------------------+

以下假设变量： a=10，b=20：

    运算符 描述  实例
    +       加 - 两个对象相加  a + b 输出结果 30
    -       减 - 得到负数或是一个数减去另一个数 a - b 输出结果 -10
    *       乘 - 两个数相乘或是返回一个被重复若干次的字符串   a * b 输出结果 200
    /       除 - x除以y    b / a 输出结果 2
    %       取模 - 返回除法的余数    b % a 输出结果 0
    **      幂 - 返回x的y次幂 a**b 为10的20次方， 输出结果 100000000000000000000
    //      取整除 - 返回商的整数部分（向下取整）    

    >>> 9//2
    4
    >>> -9//2
    -5

以下实例演示了 Python 所有算术运算符的操作：

实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 21
    b = 10
    c = 0
     
    c = a + b
    print "1 - c 的值为：", c
     
    c = a - b
    print "2 - c 的值为：", c 
     
    c = a * b
    print "3 - c 的值为：", c 
     
    c = a / b
    print "4 - c 的值为：", c 
     
    c = a % b
    print "5 - c 的值为：", c
     
    # 修改变量 a 、b 、c

    a = 2
    b = 3
    c = a**b 
    print "6 - c 的值为：", c
     
    a = 10
    b = 5
    c = a//b 
    print "7 - c 的值为：", c

以上实例输出结果：

    1 - c 的值为： 31
    2 - c 的值为： 11
    3 - c 的值为： 210
    4 - c 的值为： 2
    5 - c 的值为： 1
    6 - c 的值为： 8
    7 - c 的值为： 2

注意：Python2.x 里，整数除整数，只能得出整数。如果要得到小数部分，把其中一个数改成浮点数即可。

    >>> 1/2
    0
    >>> 1.0/2
    0.5
    >>> 1/float(2)
    0.5

### Compare Operators 比较运算符

以下假设变量a为10，变量b为20：

    运算符 描述  实例
    ==      等于 - 比较对象是否相等   (a == b) 返回 False。
    !=      不等于 - 比较两个对象是否不相等   (a != b) 返回 true.
    <>      不等于 - 比较两个对象是否不相等   (a <> b) 返回 true。这个运算符类似 != 。
    >       大于 - 返回x是否大于y   (a > b) 返回 False。
    <       小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。   (a < b) 返回 true。
    >=      大于等于    - 返回x是否大于等于y。   (a >= b) 返回 False。
    <=      小于等于 -  返回x是否小于等于y。 (a <= b) 返回 true。

以下实例演示了Python所有比较运算符的操作：
实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 21
    b = 10
    c = 0
     
    if  a == b :
       print "1 - a 等于 b"
    else:
       print "1 - a 不等于 b"
     
    if  a != b :
       print "2 - a 不等于 b"
    else:
       print "2 - a 等于 b"
     
    if  a <> b :
       print "3 - a 不等于 b"
    else:
       print "3 - a 等于 b"
     
    if  a < b :
       print "4 - a 小于 b" 
    else:
       print "4 - a 大于等于 b"
     
    if  a > b :
       print "5 - a 大于 b"
    else:
       print "5 - a 小于等于 b"
     
    # 修改变量 a 和 b 的值
    a = 5
    b = 20
    if  a <= b :
       print "6 - a 小于等于 b"
    else:
       print "6 - a 大于  b"
     
    if  b >= a :
       print "7 - b 大于等于 a"
    else:
       print "7 - b 小于 a"

以上实例输出结果：

    1 - a 不等于 b
    2 - a 不等于 b
    3 - a 不等于 b
    4 - a 大于等于 b
    5 - a 大于 b
    6 - a 小于等于 b
    7 - b 大于等于 a

### Assignment Operators 赋值运算符

以下假设变量a为10，变量b为20：

    运算符 描述  实例
    =       简单的赋值运算符    c = a + b 将 a + b 的运算结果赋值为 c
    +=      加法赋值运算符 c += a 等效于 c = c + a
    -=      减法赋值运算符 c -= a 等效于 c = c - a
    *=      乘法赋值运算符 c *= a 等效于 c = c * a
    /=      除法赋值运算符 c /= a 等效于 c = c / a
    %=      取模赋值运算符 c %= a 等效于 c = c % a
    **=     幂赋值运算符  c **= a 等效于 c = c ** a
    //=     取整除赋值运算符    c //= a 等效于 c = c // a

以下实例演示了Python所有赋值运算符的操作：
实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 21
    b = 10
    c = 0
     
    c = a + b
    print "1 - c 的值为：", c
     
    c += a
    print "2 - c 的值为：", c 
     
    c *= a
    print "3 - c 的值为：", c 
     
    c /= a 
    print "4 - c 的值为：", c 
     
    c = 2
    c %= a
    print "5 - c 的值为：", c
     
    c **= a
    print "6 - c 的值为：", c
     
    c //= a
    print "7 - c 的值为：", c

以上实例输出结果：

    1 - c 的值为： 31
    2 - c 的值为： 52
    3 - c 的值为： 1092
    4 - c 的值为： 52
    5 - c 的值为： 2
    6 - c 的值为： 2097152
    7 - c 的值为： 99864

### Bitwish Operators 位运算符
按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：

下表中变量 a 为 60，b 为 13，二进制格式如下：

    a = 0011 1100
    b = 0000 1101

    a&b = 0000 1100
    a|b = 0011 1101
    a^b = 0011 0001
    ~a  = 1100 0011

    运算符 描述  实例
    &       按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0    (a & b) 输出结果 12 ，二进制解释： 0000 1100
    |       按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。 (a | b) 输出结果 61 ，二进制解释： 0011 1101
    ^       按位异或运算符：当两对应的二进位相异时，结果为1    (a ^ b) 输出结果 49 ，二进制解释： 0011 0001
    ~       按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1 。~x 类似于 -x-1  (~a ) 输出结果 -61 ，二进制解释： 1100 0011，在一个有符号二进制数的补码形式。
    <<      左移动运算符：运算数的各二进位全部左移若干位，由 << 右边的数字指定了移动的位数，高位丢弃，低位补0。    a << 2 输出结果 240 ，二进制解释： 1111 0000
    >>      右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，>> 右边的数字指定了移动的位数 a >> 2 输出结果 15 ，二进制解释： 0000 1111

以下实例演示了Python所有位运算符的操作：
实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 60            # 60 = 0011 1100 
    b = 13            # 13 = 0000 1101 
    c = 0
     
    c = a & b;        # 12 = 0000 1100
    print "1 - c 的值为：", c
     
    c = a | b;        # 61 = 0011 1101 
    print "2 - c 的值为：", c
     
    c = a ^ b;        # 49 = 0011 0001
    print "3 - c 的值为：", c
     
    c = ~a;           # -61 = 1100 0011
    print "4 - c 的值为：", c
     
    c = a << 2;       # 240 = 1111 0000
    print "5 - c 的值为：", c
     
    c = a >> 2;       # 15 = 0000 1111
    print "6 - c 的值为：", c

以上实例输出结果：

    1 - c 的值为： 12
    2 - c 的值为： 61
    3 - c 的值为： 49
    4 - c 的值为： -61
    5 - c 的值为： 240
    6 - c 的值为： 15

### 逻辑运算符
Python语言支持逻辑运算符，以下假设变量 a 为 10, b为 20:

    运算符 逻辑表达式   描述  实例
    and x and y 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 (a and b) 返回 20。
    or  x or y  布尔"或"   - 如果 x 是非 0，它返回 x 的值，否则它返回 y 的计算值。  (a or b) 返回 10。
    not not x   布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。    not(a and b) 返回 False

以上实例输出结果：

实例(Python 2.0+)

```py
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
a = 10
b = 20
 
if  a and b :
   print "1 - 变量 a 和 b 都为 true"
else:
   print "1 - 变量 a 和 b 有一个不为 true"
 
if  a or b :
   print "2 - 变量 a 和 b 都为 true，或其中一个变量为 true"
else:
   print "2 - 变量 a 和 b 都不为 true"
 
# 修改变量 a 的值

a = 0
if  a and b :
   print "3 - 变量 a 和 b 都为 true"
else:
   print "3 - 变量 a 和 b 有一个不为 true"
 
if  a or b :
   print "4 - 变量 a 和 b 都为 true，或其中一个变量为 true"
else:
   print "4 - 变量 a 和 b 都不为 true"
 
if not( a and b ):
   print "5 - 变量 a 和 b 都为 false，或其中一个变量为 false"
else:
   print "5 - 变量 a 和 b 都为 true"
```

以上实例输出结果：

    1 - 变量 a 和 b 都为 true
    2 - 变量 a 和 b 都为 true，或其中一个变量为 true
    3 - 变量 a 和 b 有一个不为 true
    4 - 变量 a 和 b 都为 true，或其中一个变量为 true
    5 - 变量 a 和 b 都为 false，或其中一个变量为 false

### Member Operator 成员运算符
除了以上的一些运算符之外，Python还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组。

    运算符 描述  实例
    in      如果在指定的序列中找到值返回 True，否则返回 False。 x 在 y 序列中 , 如果 x 在 y 序列中返回 True。
    not in  如果在指定的序列中没有找到值返回 True，否则返回 False。   x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。

以下实例演示了Python所有成员运算符的操作：

实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 10
    b = 20
    list = [1, 2, 3, 4, 5 ];
     
    if ( a in list ):
       print "1 - 变量 a 在给定的列表中 list 中"
    else:
       print "1 - 变量 a 不在给定的列表中 list 中"
     
    if ( b not in list ):
       print "2 - 变量 b 不在给定的列表中 list 中"
    else:
       print "2 - 变量 b 在给定的列表中 list 中"
     
    # 修改变量 a 的值

    a = 2
    if ( a in list ):
       print "3 - 变量 a 在给定的列表中 list 中"
    else:
       print "3 - 变量 a 不在给定的列表中 list 中"

以上实例输出结果：

    1 - 变量 a 不在给定的列表中 list 中
    2 - 变量 b 不在给定的列表中 list 中
    3 - 变量 a 在给定的列表中 list 中

## ==⚡ Types 类型系统

|  ✒ [The Python Standard Library](library\index.rst)
|   |   • [Python library Introduction](library\intro.rst)
|   |   • [61 Built-in Functions](library\functions.rst)
|   |   • [Built-in Constants](library\constants.rst)
|   |   • [Built-in Types](library\stdtypes.rst)
|   |   • [Built-in Exceptions](library\exceptions.rst)

- Truth Value Testing
- Boolean Operations --- :keyword:`!and`, :keyword:`!or`, :keyword:`!not`
- Comparisons

- Numeric Types --- :class:`int`, :class:`float`, :class:`complex`
- Iterator Types
- Sequence Types --- :class:`list`, :class:`tuple`, :class:`range`
- Text Sequence Type --- :class:`str`
- Binary Sequence Types --- :class:`bytes`, :class:`bytearray`, :class:`memoryview`
- Set Types --- :class:`set`, :class:`frozenset`
- Mapping Types --- :class:`dict`
- Context Manager Types
- Type Annotation Types --- :ref:`Generic Alias <types-genericalias>`, :ref:`Union <types-union>`
- Other Built-in Types
    - Modules
    - Classes and Class Instances
    - Functions
    - Methods
    - Code Objects
    - Type Objects
    - The Null Object
    - The Ellipsis Object
    - The NotImplemented Object
    - Boolean Values
    - Internal Objects
- Special Attributes
    - .. attribute:: object.__dict__
    - .. attribute:: instance.__class__
    - .. attribute:: class.__bases__
    - .. attribute:: definition.__name__
    - .. attribute:: definition.__qualname__
    - .. attribute:: class.__mro__
    - .. method:: class.mro()
    - .. method:: class.__subclasses__
- Integer string conversion length limitation

Python 是一门动态语言，也是动态类型语言，是强类型的动态类型。谈论一个语言的类型系统时，需要先确认
这门语言的类型系统是动态类型（结构运行时可变），还是静态类型（编译时确实类型结构）。以及类型的强弱
要求，强类型语言，即不同类型之间不能直接赋值。

- Dynamic Programming Language
- Static Programming Language

C/C++、Java、Go、Rust 等都是典型的静态语言类型语言，还有 TypeScript 脚本也是，尽管目前它通常会
转译为 JavaScript 脚本再运行，而后者是动态类型脚本语言。静态语言的优点很明显，高效、安全规范，当然
动态语言也有优点，易用灵活是动态语言的最大特点，同时这也带来了项目管理难的问题。


利用内置函数 type 构造一个类型，对的，这个函数构建的是类型对象，它返回的对象就如 class 定义的类。
结合 is 关键字可以判断是否是相同的类型：

```py
type("abc") is bytes           # false
type("abc".encode()) is bytes  # true
```


## ==⚡ is id 等价判断

    +-- Doc\reference
    |   • -- index.rst               => The Python Language Reference
    |   • -- datamodel.rst              => Data model
    +-- Doc\library
    |  ✒ index.rst         => The Python Standard Library
    |   • - intro.rst           => Python library Introduction
    |   • - functions.rst       => 61 Built-in Functions
    |   • - constants.rst       => Built-in Constants
    |   • - stdtypes.rst        => Built-in Types
    |   • - exceptions.rst      => Built-in Exceptions

Python 是 OOP 语言，一切皆对象，判断相等有两种形式：

1. `==` 运算符，只进行值判断，会调用 __eq__ 魔术函数；
2. `is` 运算符，判断引用是不是同一个对象，利用 id() 函数可以确定是否是同一个引用；
3. `id()` 标识函数用于获取对象的存储单元地址；
4. `isinstance()` 判断对象是否为指定的类型。

```py
a = "hello"
b = "hello"
print("a = b? %s" % (a==b))     # True
print("a is b? %s" % (a is b))  # True

a = a+"!"
b = b+"!"
print("a = b? %s" % (a==b))     # True
print("a is b? %s" % (a is b))  # False
print(id(a), id(b))
```

相同的字面常量总是引用同一个对象，无论字符或数值。但是经过运算处理后，就变其它对象，对于 immutable 对象总是会创建新的对象：

- immutable 对象类型包括： 字符串及数值，str, bool, int, float, set, tuple, byte, slice
- mutable 对象类型包括： dict, list, bytearray

is 或 is not 判断两个标识符是不是引用自一个对象，如果引用的是同一个对象则返回 True，否则返回 False，加 not 则取反。

    x is y      #==> id(x) == id(y)
    x is not y  #==> id(a) != id(b)

注： id() 函数用于获取对象内存地址。

❓请解释 is 和 == 这两个操作的区别。

is 用于判断两个变量引用对象是否为同一个(同一块内存空间)， == 用于判断引用变量的值是否相等。

❓在 Python 中与 None 比较时，为什么要用 is None 而不是 == None。

actually, it isn't about programming style, is and == are very different:

- the is operator checks if the two items reference the same object
- the == operator checks if the objects that the two items reference are the identicle

The authoritative reason is because PEP-8 says so:

Comparisons to singletons like *None* should always be done with *is* or *is not*, never the equality operators.

```py
class Foo:
    def __eq__(self, other):
        return True
foo = Foo()

print(foo == None)   # True
print(foo is None)   # False
```

布尔值的实现和整形是同源的，True = 1，False = 0，都是基于 *PyLongObject* 实现，参考 CPython *SETBUILTIN* 宏定义。

布尔值和数值相加就会变成数值类型，而 Python 会缓存小数值整形对象，所以在 [-5, 256] 这个范围的整形都会引用同一个整形数值对象。

```py
print(None is None)  # True
print(False is False)# True
print(True is True)  # True

print(False+0 is False+0)   # True
print(True +0 is True +0)   # True
print(False+0. is False+0.) # False
print(True +0. is True +0.) # False
print(False+0 is False)     # False
print(True+ 0 is True)      # False
```

实例，相同的数值在 CPython 中具有相同的引用：

```py
a = 20
b = 20
c = 257.1
d = 257.1
( a is b ) and print( "✅ - a is b")
( a is not c ) and print( "✅ - a is not c")
( d is c ) and print( "✅ - d is c")

a += 1
b += 1
c += 1
d += 1
( a is b ) and print( "✅ - a is b")
( d is c ) and print( "⛔ - d is c")

# item =[ it for it in range(-6, 257)]
# for it in range(-6, 257):
#     print("{} is {}: {}".format(it, item[6+it], it is item[6+it]))
```

Python 启动时会生成一个小整形数值对象缓存 small_ints [-5, 256] 这些数值会缓存下来，也就是创建和缓存一样的数值引用的还是同一个数值对象，这也就是为何 0 值出现么多的引用。使用 is 运算符可以判断两个等值的数值，就是引用同一个对象。但是，对于等什的字面常量，它们无论什么值，都是同一个对象引用，当它们被修改后，即是值相等也不是引用同一个字面量对象。

    static PyLongObject small_ints[NSMALLNEGINTS + NSMALLPOSINTS]

注意，使用交互模式转入脚本时，每个 blocks 代码块中的相同常量才会引用相同对象。如果是通过回车输入的相同常量，因为它们归属不同的 blocks 所以引用不同的对象。


### Operator Priority 运算符优先级

以下表格列出了从最高到最低优先级的所有运算符：

    运算符     描述
    **          指数 (最高优先级)
    ~ + -       按位翻转, 一元加号和减号 (最后两个的方法名为 +@ 和 -@)
    * / % //    乘，除，取模和取整除
    + -         加法减法
    >> <<       右移，左移运算符
    &           位 'AND'
    ^ |         位运算符
    <= < > >=   比较运算符
    <> == !=    等于运算符
    = %= /= //= -= += *= **=    赋值运算符
    is is not   标识运算符
    in not in   成员运算符
    not and or  逻辑运算符

以下实例演示了Python所有运算符优先级的操作：

实例(Python 2.0+)

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
     
    a = 20
    b = 10
    c = 15
    d = 5
    e = 0
     
    e = (a + b) * c / d       #( 30 * 15 ) / 5
    print "(a + b) * c / d 运算结果为：",  e
     
    e = ((a + b) * c) / d     # (30 * 15 ) / 5
    print "((a + b) * c) / d 运算结果为：",  e
     
    e = (a + b) * (c / d);    # (30) * (15/5)
    print "(a + b) * (c / d) 运算结果为：",  e
     
    e = a + (b * c) / d;      #  20 + (150/5)
    print "a + (b * c) / d 运算结果为：",  e

以上实例输出结果：

    (a + b) * c / d 运算结果为： 90
    ((a + b) * c) / d 运算结果为： 90
    (a + b) * (c / d) 运算结果为： 90
    a + (b * c) / d 运算结果为： 50





## ==⚡ string in Python


字符串是一个单、双引号包括的、有序的、字符序列，属于 immutable 对象，用于存储和表示基本的文本信息：

- 只能存放一个值
- 不可变 immutable
- 按照从左到右的顺序定义字符集合，下标从 0 开始顺序访问，有序
- 可以给字符串变量重新赋值
- 取消引号内所有转义字符特殊意义，在引号前面加 r，如 `special＝r'\t\n\r'`
- Unicode 字符串与 r 连用必需在 r 前面，如 `name＝ur'l\thf'` 

```py
words = "A coding programmer"
coding = words[2:8]  # [start:end)

charcode = ord('A') # 65
char     = chr(65)  # 'A'
print(charcode, char)

print('\x23' * len("19 duplication of #"))

ct = "Content-Type: text/plain; charset=UTF-8"
print(ct.lower().index("utf"))    # 34
print(ct.lower().rindex("utf"))   # 34
print(ct.lower().find("utf"))     # 34
print(ct.lower().rfind("utf"))    # 34

print("string".capitalize())     # 把第一个字母转化为大写字母，其余小写
print("string".title())          # 把每个单词的第一个字母转化为大写，其余小写 
print("string".upper())          # 把所有字符中的小写字母转换成大写字母
print("string".lower())          # 把所有字符中的大写字母转换成小写字母
print("string".rjust(24))        # 右对齐，填充空格
print("string".ljust(24))        # 左对齐，填充空格
```


### ===👉 转义字符

在Python中有一些特殊字符，用“\”来进行转义，所用到的转义字符如下所示：

- \' 单引号
- \" 双引号
- \a 发出系统响铃声
- \b 退格符
- \n 换行符
- \t 横向制表符
- \v 纵向制表符
- \r 回车符
- \f 换页符
- \o 八进制数代表的字符
- \x 十六进制数代表的字符
- \000 终止符，\000后的字符串全部忽略


### ===👉 访问字符串中的值

Python在访问字符串的时候，采用切片操作，用方括号来截取字符串；

例如：

    >>>str1 = 'Hello World!'
    >>>print(str1[:3], str1[:1], str1[0], str1[1])#输出：Hel H H e
    >>>print(str1[7:], str1[2:8])#输出：orld! llo Wo

下面详细说明一下“:”在里面所起的作用;

    格式： [start:end:step]
    [:] 提取从开头（默认位置0）到结尾（默认位置-1）的整个字符串
    [start:] 从start 提取到结尾
    [:end] 从开头提取到end - 1
    [start:end] 从start 提取到end - 1
    [start:end:step] 从start 提取到end - 1，每step 个字符提取一个

左侧第一个字符的位置/偏移量为0，右侧最后一个字符的位置/偏移量为-1

### ===👉 字符串的运算

在Python中，字符串也是能运算的，就像上面用到的“+”（参见“字符串(String)(上)”），将两个字符串进行了拼接，字符串运算的符号列举如下所示：

    +：字符串连接
    *： 重复输出字符串
    []：通过索引获取字符串中的字符
    [:]：截取字符串中的一部分
    in： 成员运算符，如果字符串中包含给定的字符，返回true
    not in：成员运算符，如果字符串中不包含给定的字符，返回true
    r/R： 原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符原始字符串在字符串的第一个引号前加上字母‘r’以外（可以大小写），与普通字符串有着几乎完全相同的语法。

以例子来说明：


    >>>a = "Hello"
    >>>b = "Python"
    #in的用法

    >>>if( "H" in a) :
    >>> print("H 在字符串a中")
    >>>else :
    >>> print("H 不在字符串a中")
    H 在字符串a中

    #not in的用法

    >>>if( "H" not in b) :
    >>> print("H 不在字符串b中")
    >>>else :
    >>> print("H 在字符串b中")
    H 不在字符串b中

    #r/R的用法
    print(r'\n') #输出：\n
    print(R'\n') #输出：\n



### ===👉 字母处理

- upper()    # 全部大写
- lower()    # 全部小写
- swapcase()    # 大小写互换
- capitalize()    # 首字母大写，其余小写
- title()    # 首字母大写

### ===👉 格式化相关
 
- ljust(width)     # 获取固定长度，左对齐，右边不够用空格补齐
- rjust(width)     # 获取固定长度，右对齐，左边不够用空格补齐
- center(width)    # 获取固定长度，中间对齐，两边不够用空格补齐
- zfill(width)     # 获取固定长度，右对齐，左边不足用0补齐


### ===👉  字符串搜索相关
 
- find()     # 搜索指定字符串，没有返回-1
- index()    # 同上，但是找不到会报错
- rfind()    # 从右边开始查找
- count()    # 统计指定的字符串出现的次数
 
        # 上面所有方法都可以用index代替，不同的是使用index查找不到会抛异常，而find返回-1
        s='hello world'
        print(s.find('e'))  # 搜索指定字符串,没有返回-1
        print(s.find('w',1,2))  # 顾头不顾尾，找不到则返回-1不会报错，找到了则显示索引
        print(s.index('w',1,2)) # 同上，但是找不到会报错
        print(s.count('o')) # 统计指定的字符串出现的次数
        print(s.rfind('l')) # 从右边开始查找
 

### ===👉 字符串替换

- replace('old','new')    # 替换old为new
- replace('old','new',次数)    # 替换指定次数的old为new

        s='hello world'
        print(s.replace('world','python'))
        print(s.replace('l','p',2))
        print(s.replace('l','p',5))

        hello python
        heppo world
        heppo worpd


### ===👉 trim 字符串去空格及去指定字符

- strip()    # 去两边空格
- lstrip()   # 去左边空格
- rstrip()   # 去右边空格
- split()    # 默认按空格分隔
- split('指定字符')    # 按指定字符分割字符串为数组

        s='   h e-l lo   '
        print(s)
        print(s.strip())
        print(s.lstrip())
        print(s.rstrip())
        print(s.split('-'))
        print(s.split())
 

### ===👉 字符串判断相关

- startswith('start')    # 是否以start开头
- endswith('end')    # 是否以end结尾
- isalnum()    # 是否全为字母或数字
- isalpha()    # 是否全字母
- isdigit()    # 是否全数字
- islower()    # 是否全小写
- isupper()    # 是否全大写
- istitle()    # 判断首字母是否为大写
- isspace()    # 判断字符是否为空格

### ===👉 制数转换 格式化等

- bin()    # 十进制数转八进制
- hex()    # 十进制数转十六进制
- format() # 格式化字符串，类似%s，传递值能多不能少
- range()  # 函数：可以生成一个整数序列
- type()   # 查看数据类型
- len()    # 计算字符串长度
- "/".join(("a","b","c")) # 拼接字符串 a/b/c
- "/".join("abc") # 等效拼接字符串 a/b/c

### ===👉 isdigit、isdecimal、isnumeric 的区别

- isdigit()
    True: Unicode数字，byte数字（单字节），全角数字（双字节），罗马数字
    False: 汉字数字
    Error: 无
     
- isdecimal()
    True: Unicode数字，，全角数字（双字节）
    False: 罗马数字，汉字数字
    Error: byte数字（单字节）
     
- isnumeric()
    True: Unicode数字，全角数字（双字节），罗马数字，汉字数字
    False: 无
    Error: byte数字（单字节）



### ===👉 string format

    name = 'John'
    price = 9999
    s = 'this name is %s %i' % (name, price)
    print(s)

    print('this name is %s'%(name))
    print('this price is %f'%(price))
    print('and price is %.2f'%(price))
    print('this name is {name} and price is {price}'.format(name=name, price=price))
    print("a is %(a) b is %(b)"%{"a": "Land", "b": 101})
    
    print("".join(tuple));

整数的输出

    %o —— oct 八进制
    %d —— dec 十进制
    %x —— hex 十六进制

浮点输出

    3.1415926   {:.2f}  3.14    保留小数点后两位
    3.1415926   {:+.2f} +3.14   带符号保留小数点后两位
    -1          {:+.2f} -1.00   带符号保留小数点后两位
    2.71828     {:.0f}  3       不带小数
    5           {:0>2d} 05      数字补零 (填充左边, 宽度为2)
    5           {:x<4d} 5xxx    数字补x (填充右边, 宽度为4)
    10          {:x<4d} 10xx    数字补x (填充右边, 宽度为4)
    1000000     {:,}    1,000,000   以逗号分隔的数字格式
    0.25        {:.2%}  25.00%  百分比格式
    1000000000  {:.2e}  1.00e+09    指数记法
    13          {:>10d}         13  右对齐 (默认, 宽度为10)
    13          {:<10d} 13  左对齐 (宽度为10)
    13          {:^10d}     13  中间对齐 (宽度为10)

    '{:b}'.format(11)     1011
    '{:d}'.format(11)     11
    '{:o}'.format(11)     13
    '{:x}'.format(11)     b
    '{:#x}'.format(11)    0xb
    '{:#X}'.format(11)    0XB

字符串输出

    %s
    %10s——右对齐，占位符10位
    %-10s——左对齐，占位符10位
    %.2s——截取2位字符串
    %10.2s——10位占位符，截取两位字符串



## ==⚡ skills in Python

```py
# enumerate with index
list = ["iterable", "with", "index"]
for i, item in enumerate(list):
    print (i, item)

# dict comperhension
dict = [{ "index": i, "value": v} for i,v in enumerate(list)]
print(dict)

# Lazy eveluation: output 9
tenlams = [lambda :x for x in range(10)]
print( tenlams[2]() )

# share list/dict/set in argument
def share_list(share = []):
    print(share)
share_list("apple")
share_list("pie")

# eval code string
print(eval("[1,2,3]"))

# import os
# print(os.listdir())

# multiple context manager
with open("changelog.txt", encoding="utf-8") as source, \
    open('target.txt', 'w', encoding="utf-8") as target:
    target.write(source.read())
```






## ==⚡ Python FAQs

    +-- Doc\faq
    |   • -- index.rst               => Python Frequently Asked Questions
    |   • -- design.rst                 => Design and History FAQ
    |   • -- extending.rst              => Extending/Embedding FAQ
    |   • -- general.rst                => General Python FAQ
    |   • -- gui.rst                    => Graphic User Interface FAQ
    |   • -- installed.rst              => "Why is Python Installed on my Computer?" FAQ
    |   • -- library.rst                => Library and Extension FAQ
    |   • -- programming.rst            => Programming FAQ
    |   • -- windows.rst                => Python on Windows FAQ


### ===🗝 Monkey Patch

Monkey Patch 允许在运行期间动态修改一个类或模块，因为 Python 中一切皆对象，动态创建及修改，包括类、方法、甚至是模块。

Monkey Patch 这个词原来为 Guerrilla Patch，杂牌军、游击队，说明这部分不是原装的，在英文里 guerilla 发音和 gorllia (猩猩)相似，再后来就写了 monkey。

这里有一个比较实用的例子，json 模块使用为例，后来发现 ujson 性能更高，如果觉得把每个文件的 import json 改成 import ujson as json 就很麻烦，或者说想测试一下用 ujson 替换 json 是否符合预期，只需要在入口加上动态修改接口的代码：

```py
import json  
import ujson  

def monkey_patch_json():  
    json.__name__ = 'ujson'  
    json.dumps = ujson.dumps  
    json.loads = ujson.loads  

monkey_patch_json()
```
单元测试 unittest.mock 就是一个典型应用场景，通过修改运行时，实现测试预备条件。

Monkey Patch 带了便利的同时也有搞乱源代码优雅的风险，所以这个名字是符合特点的。


### ===🗝 UnboundLocalError

UnboundLocalError 很常见，根源是对变量赋值会确定其为本地变量，除非使用 global 或 nonlocal 声明，而读取变量没有这样的问题。

https://eli.thegreenplace.net/2011/05/15/understanding-unboundlocalerror-in-python
https://docs.python.org/3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value

```py
lst = [1, 2, 3]
x = 123

def foo():
    lst.append(5)   # OK
    print(lst)      # Ok read global variable

    # UnboundLocalError: local variable referenced before assignment
    # lst += [5]     # UnboundLocalError
    # x += 321       # UnboundLocalError

    # But two line above turn error when define lst as a local variabl
    # lst = 321       # Ok write local variable

foo()
print (lst)
```

So where does the exception come from? Quoting the FAQ:

This is because when you make an assignment to a variable in a scope, that variable becomes local to that scope and shadows any similarly named variable in the outer scope.

So what do we do about this? The solution is very simple - Python has the global statement just for this purpose.



## ==⚡ prefix or postfix list item

in Python2 return list from map function
in Python3 return map from map function

```py
from pprint import pprint

def listfix(items):
    m = map(lambda x: 'prefix_'+x+'_postfix', items)
    return list(m)

a = ['abc','def','xyz']
print("["+"],[".join(a)+"]")

pprint( listfix(['abc','def','xyz']) )
```


## ==⚡ if-else ternary 三目运算

    s = 100;
    # t = "000" if s<10 else "00"
    t = ("000" if s<10 else "00" if s<100 else "0")+str(s)+".ts"
    # t = (s<10 and ["000"] or ["00"])[0]+".ts"
    print(t)

Python 更多的是用短路机制，

不同于物理学中的「短路」(Short circuit)那般危险，编程语言的短路机制非常有用：条件判断表达式在从左到右按顺序执行的过程中，提前确定了表达式的 True/False 结果，从而终止右边剩余的运算。

    a = None
    b = "abc"
    print(a or b) # "abc"


## ==⚡ tuple in Python
- [Built-in Types](libarary/stdtypes.rst)
- [New, Improved, and Deprecated Modules](whatsnew/3.1.rst)
- [collections.namedtuple](library/collections.rst)

```py
lists = ["a","b","c"]
a = (lists, "A")
b = [lists, 'B']
if isinstance(a, tuple):
    first,last = a
    print(dict(first=first, last=last))
    # {'first': ['a', 'b', 'c'], 'last': 'b'}
if isinstance(b, list):
    first,last = b
    print(dict(first=first, last=last))
    # {'first': ['a', 'b', 'c'], 'last': 'B'}
```

空值判断：

```py
a,*b = [1,]
print(dict(a=a, b=b))
if b:
    print("b %s" % b)

a,*b = [1,]
print(dict(a=a, b=b))
if b:
    print("b %s" % b)

# {'a': 1, 'b': []}
# {'a': 1, 'b': []}


a,*b = [1,None]
print(dict(a=a, b=b))
if b:
    print("b %s" % b)

a,*b = [1,None]
print(dict(a=a, b=b))
if b:
    print("b %s" % b)

# {'a': 1, 'b': [None]}
# b [None]
# {'a': 1, 'b': [None]}
# b [None]
```

命名元组 named tuple 是 Python 3.1 新引入功能，元组可以像字典一样使用字段名称，sys.version_info 就是一个命名元组，

```py
import sys
from collections import namedtuple
Point = namedtuple('Point', 'x y')
pt1 = Point(1.0, 5.0)
pt2 = Point(2.5, 1.5)

from math import sqrt
line_length = sqrt((pt1.x-pt2.x)**2 + (pt1.y-pt2.y)**2)
print(line_length, sys.version_info)
```

tuple 因为使用的是圆括号，和函数调用、条件表达式等会有混淆，所以使用后缀逗号：

>>> n=(None)
print(type(n))
<class 'NoneType'>
>>> n=(None,)
print(type(n))
<class 'tuple'>

>>> n=[None]
print(type(n))
<class 'list'>


与字符串一样，元组之间可以使用 + 号和 * 号进行运算。这就意味着他们可以组合和复制，运算后会生成一个新的元组。

```py
tuple = ("tuple", 10, 3.1415926535897932, "jimbowhy");
smart = ("that", "is", "ok", "for", "plus");
print(tuple);
print(tuple[1]);
print(tuple[1:3]);
print(tuple * 2);
print(tuple + smart);
print("tuple to string".join(tuple);

len((1, 2, 3))        # 3 计算 tuple 元素个数
(1, 2, 3) + (4, 5, 6) # (1, 2, 3, 4, 5, 6) 连接 tuple
('Hi!',) * 4          # ('Hi!', 'Hi!', 'Hi!', 'Hi!') 复制 tuple 元素
3 in (1, 2, 3)        # True 检查元素是否在 tuple 内
for x in (1, 2, 3): print x, # 1 2 3 迭代

L = ('spam', 'Spam', 'SPAM!')
# Python 表达式    结果  描述
L[2]    # 'SPAM!'   读取第三个元素
L[-2]   # 'Spam'    反向读取，读取倒数第二个元素
L[1:]   # ('Spam', 'SPAM!') 截取元素
```

元组包含了以下内置函数

- cmp(tuple1, tuple2)  比较两个元组元素。
- len(tuple)           计算元组元素个数。
- max(tuple)           返回元组中元素最大值。
- min(tuple)           返回元组中元素最小值。
- tuple(seq)           将列表转换为元组。

## ==⚡ list in Python
- [Built-in Types](libarary/stdtypes.rst)

```py
list = ["this","is","a","list",1,2,3];
list[0] = "number";
print(list);
print(list[2:4]);
print(list[-1:]);
print(list * 3);
print(list + list);

list.append(4)
del list1[2]

len([1, 2, 3])        # 3
[1, 2, 3] + [4, 5, 6] # [1, 2, 3, 4, 5, 6]  组合
['Hi!'] * 4           # ['Hi!', 'Hi!', 'Hi!', 'Hi!']    重复
3 in [1, 2, 3]        # True    元素是否存在于列表中
for x in [1, 2, 3]: print x,  ## 1 2 3  迭代
```

list 包含以下函数:

- cmp(list1, list2)         比较两个列表的元素
- len(list)                 列表元素个数
- max(list)                 返回列表元素最大值
- min(list)                 返回列表元素最小值
- list(seq)                 将元组转换为列表

Python包含以下方法:

- list.append(obj)         在列表末尾添加新的对象
- list.count(obj)          统计某个元素在列表中出现的次数
- list.extend(seq)         在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
- list.index(obj)          从列表中找出某个值第一个匹配项的索引位置
- list.insert(index, obj)  将对象插入列表
- list.pop([index=-1])     移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
- list.remove(obj)         移除列表中某个值的第一个匹配项
- list.reverse()           反向列表中元素
- list.sort(cmp=None, key=None, reverse=False)                                对原列表进行排序

>>> squares = []
>>> for x in range(10):
...     squares.append(x**2)
...
>>> squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

Tuples lists sets dicts 这四种数据类型太常用了，特别是 tuples 和 lists 两者太相似了，使用的比较方法也是，但是这几种类型中只有 list 才是可以排序的：

```py
a=(1)   # <class 'int'>
b=(1,)  # <class 'tuple'>
print(type(a))
print(type(b))

a_tuple =  (1,(2 ),3) # a_tuple[1]: <class 'int'>
a_tuple =  (1,(2,),3) # a_tuple[1]: <class 'tuple'>

# dic = {'a':1,'b':2} >= {'a':1,'b':2}
# '>=' not supported between instances of 'dict' and 'dict'
sliceA = [1,2,3,4]
sliceB = [1,2,3,4]
sliceC = [1,2,3,3]
print(f'''
      sliceA is  sliceB ? {sliceA is sliceB} # False
    {sliceA} == {sliceB}? {sliceA == sliceB} # True
    {sliceA} == {sliceB}? {sliceA == sliceB} # True
    {sliceA} >= {sliceB}? {sliceA >= sliceB} # True
    {sliceC} >= {sliceB}? {sliceC >= sliceB} # False
    ''')
```
### ===🗝 list 去空字符串

    # 使用 filter() 过滤 list 中的空字符和 None
    list1 = ['1', '2', '3', '', '  ', None]
    a = list(filter(None, list1))
    print(a)  # ['1', '2', '3']
     
    # 给 filter() 传入函数自定义过滤器，依次作用于每个元素，返回真值表示保留该元素
    list2 = ['1', '2', '3', ' ', '    ', None]
    print(list(filter(lambda x: x and x.strip(), list2)))  # ['1', '2', '3', '422', '54']

    # 注意: Pyhton2.7 返回列表，Python3.x 返回迭代器对象


### ===🗝 list 去重的多种方法
- [itertools groupby](library/itertools.rst#itertools.groupby)
- [functions reduce](library/functions.rst#reduce)

以下的几种情况除了 for-in，其它两种去重之后顺序会改变:

    # for-in
    ids = [1,2,3,3,4,2,3,4,5,6,1]
    news_ids = []
    for id in ids:
        if id not in news_ids:
            news_ids.append(id)
    print(news_ids)

    # set
    ids = [1,4,3,3,4,2,3,4,5,6,1]
    ids = list(set(ids))

    # itertools.grouby
    import itertools
    ids = [1,4,3,3,4,2,3,4,5,6,1]
    ids.sort()
    it = itertools.groupby(ids)
    for k, g in it:
        print k

怎么能不改变原来的顺序呢？要用到 reduce 

    In [5]: ids = [1,4,3,3,4,2,3,4,5,6,1]
    In [6]: func = lambda x,y:x if y in x else x + [y]
    In [7]: reduce(func, [[], ] + ids)
    Out[7]: [1, 4, 3, 2, 5, 6]

其中的 lambda x,y:x if y in x else x + [y] 等价于 lambda x,y: y in x and x or x+[y] 。
思路其实就是先把ids变为[[], 1,4,3,......] ,然后在利用reduce的特性.

去列表去重，不改变原来的顺序，还可以使用一个空列表把原列表里面不重复的数据"装起来"，例如：

    list2 = []
    list1 = [1,2,3,2,2,2,4,6,5]
    for i in list1:
        if i not in list2:
            list2.append(i)
    list2
    [1, 2, 3, 4, 6, 5]

或者使用删除元素索引的方法对列表去重，并且不改变原列表的顺序

    # python for删除的时候会往前移(垃圾回收机制)，未遍历到的后一个占了前一个被删除的"位置"，导致这个数不会被遍历到，而使最后的结果错误
    # 局部变量在栈内存中存在,当for循环语句结束,那么变量会及时被gc(垃圾回收器)及时的释放掉,不浪费空间；
    # 如果使用循环之后还想去访问循环语句中控制那个变量,使用while循环。
    # 所以使用while循环删除nums中的Val(的下标)
    nums = [1,2,3,3,4,2,3,4,5,6,1]
    val = 3
    while val in nums:
          nums.pop(nums.index(val))
    print nums
    return len(nums)



## ==⚡ dictionary in Python
- [Built-in Types](libarary/stdtypes.rst)

```py
dict = { "one":"this is a dictionary", "two":2, "three":3, 4:"four" };
tiny = { "id":1234 };
print( dict );
print( dict["one"] );
print( dict[4] );
del(dict[4]);
dict[5] = "something else";
for key in dict.keys(): print("dictionary key:", key);
dict.clear();

task = {}
item = {'1.jpg': "Thread #1"}
task['1.jpg'] = "Thread #1"
task['2.jpg'] = "Thread #2"
print(task)          # {'1.jpg': 'Thread #1', '2.jpg': 'Thread #2'} 
print(str(task))     # {'1.jpg': 'Thread #1', '2.jpg': 'Thread #2'} 
print(task.keys())   # dict_keys(['1.jpg', '2.jpg'])
print(task.items())  # dict_items([('1.jpg', 'Thread #1'), ('2.jpg', 'Thread #2')])
```

Dictionaries can be created by several means:

   * Use a comma-separated list of `key: value` pairs within braces:
     `{'jack': 4098, 'sjoerd': 4127}` or `{4098: 'jack', 4127: 'sjoerd'}`
   * Use a dict comprehension: `{}`, `{x: x ** 2 for x in range(10)}`
   * Use the type constructor: `dict()`, `dict([('foo', 100), ('bar', 200)])`, `dict(foo=100, bar=200)`

使用 dict() 构建字典就不能使用数字做 key。

Python3 没有 dict.has_key() 方法，

    if dict.has_key("key"):
        pass 
    if "key" in dict:
        pass 

    print( dict['one'] if "one" in dict else "EMPTY");

字典包含了以下内置函数：

- cmp(dict1, dict2)         比较两个字典元素, Python 2 适用。
- len(dict)                 计算字典元素个数，即键的总数。
- str(dict)                 输出字典可打印的字符串表示。
- type(variable)            返回输入的变量类型，如果变量是字典就返回字典类型。

Python 字典包含了以下内置方法：

- dict.clear()                  删除字典内所有元素
- dict.copy()                   返回一个字典的浅复制
- dict.fromkeys(seq[, val])     创建一个新字典，以序列 seq 中元素做字典的键，val 为字典所有键对应的初始值
- dict.get(key, default=None)   返回指定键的值，如果值不在字典中返回default值
- dict.has_key(key)             如果键在字典dict里返回true，否则返回false
- dict.items()                  以列表返回可遍历的(键, 值)元组数组
- dict.keys()                   以列表返回一个字典所有的键
- dict.setdefault(key, default=None) 和 get() 类似, 但如果键不存在于字典中，将会添加键并将值设为 default
- dict.update(dict2)            把字典dict2的键/值对更新到dict里
- dict.values()                 以列表返回字典中的所有值
- dict.pop(key[,default])       删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。
- dict.popitem()                随机返回并删除字典中的一对键和值。


## ==⚡ set in Python
- [Built-in Types](libarary/stdtypes.rst)

集合中的元素一定要满足一个基本条件：“这个东西必须是可以进行哈希摘要（Hashable）”，或者说定义了对象的 __hash__ 方法。

Python 里的字典和集合对象都基于哈希表（Hash Table）实现，在查找一个元素时算法效率非常高，判断一个东西是不是在集合里的平均时间复杂度是常数 O(1)，不会随着数据增加而增加。

集合是一种重要且基础的数学概念，也是一种基本的数据结构：

```py
a = {1, 3, 5, 7}
b = {3, 5, 8}

symmetric_difference = a ^ b  # {8, 1, 7} 
difference   = a - b  # {1, 7} 
intersection = a & b  # {3, 5} 
union        = a | b  # {1, 3, 5, 7, 8} 

subset       = a >= b # b is subset of a? Falss, b has 8 but a doesn't
proper_subset= a > b  # b is proper subset of a?  Falss
isdisjoint   = a.isdisjoint(b) # is dis-joint? False

a = {(1,"a"), (2,"b"), (3,"c"), (4,"d"), }
b = {(1,"a"), (3,"c"), (4,"d"), }
print(a-b) # {(2, 'b')}


a = { {"1":"a"}, {2:"b"}, {3:"c"}, {4:"d"}, }
b = { {"1":"a"}, {3:"c"}, {4:"d"}, }
print(a-b) # TypeError: unhashable type: 'dict'
```

## ==⚡ for a while in Python
- [Built-in Types](reference/index.rst)
- [Expression](reference/expression.rst)
- [Compound statements](reference/compound_stmts.rst)


```py
count = 0;
while( count<9 ):
    if( count%2!=0 ):
        print (count, "is odd.");
    else:
        print (count, "is event.");
    count = count + 1;
print ("while loop end.");
```

可以使用 takewhile(predicate, iterable) 函数来简化条嵌套，在迭代过程中不断使用当前对象作为参数调用 predicate 函数并测试返回结果，如果函数返回值为真，则生成当前对象，循环继续。

    from itertools import takewhile

    for user in takewhile(is_qualified, users):
        pass

itertools 里面还有一些其他有意思的工具函数，他们都可以用来和循环搭配使用，比如使用 chain 函数扁平化双层嵌套循环、使用 zip_longest 函数一次同时循环多个对象等等。

Python 没有 C/C++ 的 for 循环结构，只有 for in 枚举：

    for letter in 'Python':
        print(" Letter:", letter);

    datas = ["apricot", "beechnut", "carambola", "chestnut", "cumquat", "dates", "filbert", "gingko"];
    for fruitornut in datas:
        print("I love", fruitornut);

    for index in range(len(datas)):
        print(index, "in datas is", datas[index]);


## ==⚡ time

    #!/usr/bin/python
    import time

    vt = time.time()
    vlt = time.localtime( vt )
    vat = time.asctime( vlt )
    print ("time.time(): %f " %  vt)
    print ( vlt )
    print ( vat )
    # 以上实例输出结果为：
    # time.time(): 1234892919.655932
    # (2009, 2, 17, 10, 48, 39, 1, 48, 0)
    # Tue Feb 17 10:48:39 2009




## ==⚡ Errors & Exceptions
The Python Tutorial 8. Errors and Exceptions - https://docs.python.org/3/tutorial/errors.html
BaseException https://docs.python.org/3/library/exceptions.html#BaseException

错误类型 BaseException 是所有异常错误的基础类，它右两个公开属性：

- args 包含异常的构造参数，tuple 类型，通常只包含一个错误信息字符串，内置异常如 OSError 只右一个错误号，关联特定的错误信息。
- with_traceback(tb) 为异常对象设置一个新的 traceback 对象，通常用法如下：

        try:
            ...
        except SomeException:
            tb = sys.exc_info()[2]
            raise OtherException(...).with_traceback(tb)


## ==⚡ sys.exc_info 捕获异常详细信息

一般程序中，我们需要对异常进行捕获来保证程序的健壮。但是debug的时候，我们可能需要异常的详细信息，这时可以使用sys.exec_info来处理：

    import traceback
    import sys
    try:
         raise ValueError('this is an exception')
    except Exception as ex:
        ex_type, ex_val, ex_stack = sys.exc_info()
        print("ex_type:", ex_type)
        print("ex_name:", ex_type.__name__)
        print("ex_val:", ex_val)
        for stack in traceback.extract_tb(ex_stack):
            print(stack)

以上代码执行结果：

    ex_type: <class 'ValueError'>
    ex_name: ValueError
    ex_val: this is an exception
    <FrameSummary file test.py, line 4 in <module>>


## ==⚡ traceback 错误信息追踪

traceback 模块可以打印出程序当前具体的异常信息。常用的函数是:

- traceback.format_exc() 以字符串返回异常信息
- traceback.print_exc() 直接打印出异常信息

测试代码如下：

    import traceback
    import serial
     
    try:
        ser = serial.Serial('COM13', 115200)
        ser = serial.Serial('COM13', 115200)
    except:
        traceback.print_exc()


traceback.print_exc() 和 traceback.format_exc() 输出的错误信息是一模一样的。traceback.print_exc() 可以填入file参数，把异常信息填入到指定的 file 里。

    import traceback
    import serial
     
    try:
        ser = serial.Serial('COM13', 115200)
        ser = serial.Serial('COM13', 115200)
    except:
        traceback.print_exc(file=open('error.txt','a'))


## ==⚡ try-except

The Python Language Reference » 8. Compound statements

    8.4. The try statement

    The try statement specifies exception handlers and/or cleanup code for a group of statements:
    try_stmt  ::=  try1_stmt | try2_stmt
    try1_stmt ::=  "try" ":" suite
                   ("except" [expression ["as" identifier]] ":" suite)+
                   ["else" ":" suite]
                   ["finally" ":" suite]
    try2_stmt ::=  "try" ":" suite
                   "finally" ":" suite

异常即是一个事件，该事件会在程序执行过程中发生，影响了程序的正常执行。Python 提供了两个非常重要的功能来处理 Python 程序在运行中出现的异常和错误，你可以使用该功能来调试 Python 程序。

- Assertions 断言
- Exception 异常处理: try-except 结构

    - try / except  Catch and recover from exceptions raised by Python, or by you.
    - try / finally Perform cleanup actions, whether exceptions occur or not.
    - raise         Trigger an exception manually in your code.
    - assert        Conditionally trigger an exception in your code.
    - with / as     Implement context managers in Python 2.6, 3.0, and later (optional in 2.5).


使用 except 而不带任何异常类型，或带多种异常类型都是可以的。在 Python 异常中，Exception 是常规异常错误的基类，可以捕获任意非特定常规异常，以下是 Python 2 的语法：

    s1 = 'hello'
    try:
        int(s1)
    # except Exception,e: Python 2
    except Exception as e:
        print e
        raise Exception('error triger')

如果 try 代码块可能出现多种错误类型，可以编写多个 except 代码块来处理；此外，如果没有发生错误，还可以在except代码块后面加上else语句，当没有错误的时候，会自动执行else语句：

    try:
        print('开始：')
        r = 10 / int('2')
        print('结果：',r)
    except ValueError as e:
        print('ValueError:',e)
    except ZeroDivisionError as e:
        print('ZeroDivision:',r)
    except (OSError, TypeError) as reason:
        print('错误的原因是:', str(reason))
    else:
        print('没有出错！')
    finally:
        print('最后要执行的代码')

例如标准库 socket 通信中，绑定主机，端口，监听，接收连接，发送接收数据等等都能会返回错误，为了使程序运行更可靠，必须进行错误检查，加入异常处理，Socket 模块常见的异常有以下几个，都是 OSError 异常：

- socket.error    与一般I/O和通信问题有关的
- socket.gaierror 查询DNS时出错，Error where Get Addrress Info from DNS
- socket.herror   与其他地址错误有关
- socket.timeout  超时错误，与socket.settimeout()设置有关

通过创建一个新的异常类，程序可以命名它们自己的异常。异常应该是典型的继承自Exception类，通过直接或间接的方式。

以下为与RuntimeError相关的实例,实例中创建了一个类，基类为RuntimeError，用于在异常触发时输出更多的信息。

在try语句块中，用户自定义的异常后执行except块语句，变量 e 是用于创建Networkerror类的实例。

    class Networkerror(RuntimeError):
        def __init__(self, arg):
            self.args = arg

在你定义以上类后，你可以触发该异常，如下所示：
    
    try:
        raise Networkerror("Bad hostname")
    except Networkerror,e:
        print e.args

异常对象所携带的字符串信息是通过 `__str__` 魔术方法获取的，对一个异常对象 e 进行 str(e) 转型就会触发这个魔术方法。

- ArithmeticError   所有数值计算错误的基类
- AssertionError    断言语句失败
- AttributeError    对象没有这个属性
- BaseException     所有异常的基类
- DeprecationWarning    关于被弃用的特征的警告
- EnvironmentError  操作系统错误的基类
- EOFError          没有内建输入,到达EOF 标记
- Exception         常规错误的基类
- FloatingPointError    浮点计算错误
- FutureWarning     关于构造将来语义会有改变的警告
- GeneratorExit     生成器(generator)发生异常来通知退出
- ImportError       导入模块/对象失败
- IndentationError  缩进错误
- IndexError        序列中没有此索引(index)
- IOError           输入/输出操作失败
- KeyboardInterrupt 用户中断执行(通常是输入^C)
- KeyError          映射中没有这个键
- LookupError       无效数据查询的基类
- MemoryError       内存溢出错误(对于Python 解释器不是致命的)
- NameError         未声明/初始化对象 (没有属性)
- NotImplementedError   尚未实现的方法
- OSError           操作系统错误
- OverflowError     数值运算超出最大限制
- OverflowWarning   旧的关于自动提升为长整型(long)的警告
- PendingDeprecationWarning 关于特性将会被废弃的警告
- ReferenceError    弱引用(Weak reference)试图访问已经垃圾回收了的对象
- RuntimeError      一般的运行时错误
- RuntimeWarning    可疑的运行时行为(runtime behavior)的警告
- StandardError     所有的内建标准异常的基类
- StopIteration     迭代器没有更多的值
- SyntaxError       Python 语法错误
- SyntaxWarning     可疑的语法的警告
- SystemError       一般的解释器系统错误
- SystemExit        解释器请求退出
- TabError          Tab 和空格混用
- TypeError         对类型无效的操作
- UnboundLocalError 访问未初始化的本地变量
- UnicodeDecodeError    Unicode 解码时的错误
- UnicodeEncodeError    Unicode 编码时错误
- UnicodeError      Unicode 相关的错误
- UnicodeTranslateError Unicode 转换时错误
- UserWarning       用户代码生成的警告
- ValueError        传入无效的参数
- Warning           警告的基类
- WindowsError      系统调用失败
- ZeroDivisionError 除(或取模)零 (所有数据类型)

## ==⚡ Exception hierarchy

参考代码文档 Built-in Exceptions: exceptions.rst

The class hierarchy for built-in exceptions is:

    BaseException
     +-- SystemExit
     +-- KeyboardInterrupt
     +-- GeneratorExit
     +-- Exception
          +-- StopIteration
          +-- StopAsyncIteration
          +-- ArithmeticError
          |    +-- FloatingPointError
          |    +-- OverflowError
          |    +-- ZeroDivisionError
          +-- AssertionError
          +-- AttributeError
          +-- BufferError
          +-- EOFError
          +-- ImportError
          |    +-- ModuleNotFoundError
          +-- LookupError
          |    +-- IndexError
          |    +-- KeyError
          +-- MemoryError
          +-- NameError
          |    +-- UnboundLocalError
          +-- OSError
          |    +-- BlockingIOError
          |    +-- ChildProcessError
          |    +-- ConnectionError
          |    |    +-- BrokenPipeError
          |    |    +-- ConnectionAbortedError
          |    |    +-- ConnectionRefusedError
          |    |    +-- ConnectionResetError
          |    +-- FileExistsError
          |    +-- FileNotFoundError
          |    +-- InterruptedError
          |    +-- IsADirectoryError
          |    +-- NotADirectoryError
          |    +-- PermissionError
          |    +-- ProcessLookupError
          |    +-- TimeoutError
          +-- ReferenceError
          +-- RuntimeError
          |    +-- NotImplementedError
          |    +-- RecursionError
          +-- SyntaxError
          |    +-- IndentationError
          |         +-- TabError
          +-- SystemError
          +-- TypeError
          +-- ValueError
          |    +-- UnicodeError
          |         +-- UnicodeDecodeError
          |         +-- UnicodeEncodeError
          |         +-- UnicodeTranslateError
          +-- Warning
               +-- DeprecationWarning
               +-- PendingDeprecationWarning
               +-- RuntimeWarning
               +-- SyntaxWarning
               +-- UserWarning
               +-- FutureWarning
               +-- ImportWarning
               +-- UnicodeWarning
               +-- BytesWarning
               +-- ResourceWarning


## ==⚡ pytest & assert
- https://docs.pytest.org/en/7.1.x/
- https://docs.pytest.org/en/7.1.x/reference/reference.html
- https://pluggy.readthedocs.io/en/stable/index.html


从 Python Assertions 断言说起。

Python 的断言语句 *assert* 出现条件不成立，断言失败时，打印错误信息并终止程序，参考 Simple statements。

Assert statements are a convenient way to insert debugging assertions into a
program:

       assert_stmt: "assert" `expression` ["," `expression`]

The simple form, ``assert expression``, is equivalent to ::

       if __debug__:
           if not expression: raise AssertionError

The extended form, ``assert expression1, expression2``, is equivalent to ::

       if __debug__:
           if not expression1: raise AssertionError(expression2)

断言用起来非常简单，你可以在 assert 后面跟上任意判断条件，如果断言失败则会抛出异常。

    >>> assert 1 + 1 == 2
    >>> assert isinstance('Hello', str)
    >>> assert isinstance('Hello', int)

    Traceback (most recent call last):
      File "<input>", line 1, in <module>
    AssertionError

其实 assert 看上去不错，然而用起来并不爽。就比如有人告诉你程序错了，但是不告诉哪里错了。

一个稍微改进一丢丢的方案就是把必要的信息也放到 assert 语句后面，比如这样。

    >>> s = "nothin is impossible."
    >>> key = "nothing"
    >>> assert key in s, "Key: '{}' is not in Target: '{}'".format(key, s)

    Traceback (most recent call last):
      File "<input>", line 1, in <module>
    AssertionError: Key: 'nothing' is not in Target: 'nothin is impossible.'

看上去还行吧，但是其实写的很蛋疼。假如你是一名测试汪，有成千上万的测试案例需要做断言做验证，相信你面对以上做法，心中一定有千万只那种马奔腾而过。


pytest 是一个轻量级的测试框架，它甚至没有实现自己的断言，但是它接管了 Python 自带的断言，如果断言失败，那么框架本身会尽可能多地提供断言失败的原因。那么也就意味着，用 pytest 实现测试，你一行代码都不用改。

用于测试的脚本或测试，名称使用 test 前缀，执行 pytest 会自动调用，可以使用类来组织测试函数，使用 Test 名称前缀。

pytest 的主要功能之一是使用简单的断言语句，以及在断言失败时对表达式进行详细的自省，即断言重写 Assertion Rewriting。

断言重写实现断言失败情况的处理，PEP 302 – New Import Hooks 可以实现模块在导入时，在被编译成字节码之前，修改已解析的 AST。pytest 启动时尽早安装 PEP 302 所描述的 Import Hooks ，并在模块导入时执行断言重写。


示范，test_simple.py：

```py
import pytest
# mod = pytest.importorskip("mod")

def test_case():
    expected = "Hello"
    actual = "hello"
    assert expected == actual

if __name__ == '__main__':
    pytest.main()
"""
================================== FAILURES ===================================
__________________________________ test_case __________________________________

    def test_case():
        expected = "Hello"
        actual = "hello"
>       assert expected == actual
E       assert 'Hello' == 'hello'
E         - Hello
E         ? ^
E         + hello
E         ? ^

assertion_in_python.py:7: AssertionError
========================== 1 failed in 0.05 seconds ===========================
"""
```

运行 pytest 模块进行测试：

```sh
pytest
pytest -q test_simple.py
python.exe -m pytest -q
```

如果当前目录有 pyd 等模块文件待加载，就可以通过 python -m 方式运行，这会将当前目录追加到搜索目录列表中。

除了使用原生的 assert 语句，测试脚本中还可以使用 pytest 模块提供的其它方法：

- importorskip(modname, minversion=None, reason=None) 导致的模块未安装时，就会跳过这个测试。
- approx(expected, rel=None, abs=None, nan_ok=False) 允许误差的断言；
- fail(reason[, pytrace=True, msg=None]) 直接给出失败状态信息；
- skip(reason[, allow_module_level=False, msg=None]) 跳过测试并给出理由；
- xfail(reason='') 强制使用一个理由来结束一个正在测试或设置的函数；
- exit(reason[, returncode=False, msg=None]) 退出当前的测试任务；
- main(args=None, plugins=None) 开始在进程内进行测试；
- `param(*values[, id][, marks])` 在 pytest.mark.parametrize 或 parametrized fixtures 设置参数；
- `with raises(expected_exception: Exception[, *, match])` as excinfo 断言代码志会引起异常；
- `with deprecated_call()` 断言代码块会产生警告: DeprecationWarning 或 PendingDeprecationWarning；
- `with warns(expected_warning: Exception[, match])` 断言代码块产生指定的警告；
- `register_assert_rewrite(*names)` 断言重写，指定一系列要在导入时进行重写的模块名；
- freeze_includes() 返回 pytest 使用到的模块名称列表，它们会包含到 cx_freeze 模块。


pytest 的测试函数中，通过不同的参数名称可以获取不同的对象，这种根据参数名来传入的对象称为 Fixtures，也可以在 @pytest.fixture 装饰的函数中使用。

pytest 有勾子插件机制，使用 pluggy 模块实现：

- 所有 Hook API 使用 pluggy.HookspecMarker 装饰，@hookspec；
- 所有插件实现方法使用 pluggy.HookimplMarker 装饰，@hookimpl；

插件的两种类型：

- pip-installable plugins
- conftest.py: local per-directory plugins

Historic hooks 是指在注册之前可以使用 call_historic() 调用的钩子。

```py
import pluggy

hookspec = pluggy.HookspecMarker("myproject")
hookimpl = pluggy.HookimplMarker("myproject")


class MySpec:
    """A hook specification namespace."""

    @hookspec
    def myhook(self, arg1, arg2):
        """My special little hook that you can customize."""


class Plugin_1:
    """A hook implementation namespace."""

    @hookimpl
    def myhook(self, arg1, arg2):
        print("inside Plugin_1.myhook()")
        return arg1 + arg2


class Plugin_2:
    """A 2nd hook implementation namespace."""

    @hookimpl
    def myhook(self, arg1, arg2):
        print("inside Plugin_2.myhook()")
        return arg1 - arg2


# create a manager and add the spec
pm = pluggy.PluginManager("myproject")
pm.add_hookspecs(MySpec)
# register plugins
pm.register(Plugin_1())
pm.register(Plugin_2())
# call our `myhook` hook
results = pm.hook.myhook(arg1=1, arg2=2)
print(results)
```

在测试脚本目录中，可以放置一个自动加载的插件，conftest.py，这里面可以使用各种 Hooks 函数，它们定义在 site-packages\_pytest\hookspec.py。

Bootstrapping hooks

   - pytest_load_initial_conftests(early_config, parser, args)
   - pytest_cmdline_preparse(config, args)
   - pytest_cmdline_parse(pluginmanager, args)
   - pytest_cmdline_main(config)

Initialization hooks

   - pytest_addoption(parser, pluginmanager)
   - pytest_addhooks(pluginmanager)
   - pytest_configure(config)
   - pytest_unconfigure(config)
   - pytest_sessionstart(session)
   - pytest_sessionfinish(session, exitstatus)
   - pytest_plugin_registered(plugin, manager)

Collection hooks

   - pytest_collection(session)
   - pytest_ignore_collect(collection_path, path, config)
   - pytest_collect_file(file_path, path, parent)
   - pytest_pycollect_makemodule(module_path, path, parent)
   - pytest_pycollect_makeitem(collector, name, obj)
   - pytest_generate_tests(metafunc)
   - pytest_make_parametrize_id(config, val, argname)
   - pytest_markeval_namespace(config)
   - pytest_collection_modifyitems(session, config, items)
   - pytest_collection_finish(session)

Test running (runtest) hooks

   - pytest_runtestloop(session)
   - pytest_runtest_protocol(item, nextitem)
   - pytest_runtest_logstart(nodeid, location)
   - pytest_runtest_logfinish(nodeid, location)
   - pytest_runtest_setup(item)
   - pytest_runtest_call(item)
   - pytest_runtest_teardown(item, nextitem)
   - pytest_runtest_makereport(item, call)
   - pytest_pyfunc_call(pyfuncitem)

Reporting hooks

   - pytest_collectstart(collector)
   - pytest_make_collect_report(collector)
   - pytest_itemcollected(item)
   - pytest_collectreport(report)
   - pytest_deselected(items)
   - pytest_report_header(config, start_path, startdir)
   - pytest_report_collectionfinish(config, start_path, startdir, items)
   - pytest_report_teststatus(report, config)
   - pytest_report_to_serializable(config, report)
   - pytest_report_from_serializable(config, data)
   - pytest_terminal_summary(terminalreporter, exitstatus, config)
   - pytest_fixture_setup(fixturedef, request)
   - pytest_fixture_post_finalizer(fixturedef, request)
   - pytest_warning_recorded(warning_message, when, nodeid, location)
   - pytest_runtest_logreport(report)
   - pytest_assertrepr_compare(config, op, left, right)
   - pytest_assertion_pass(item, lineno, orig, expl)

Debugging/Interaction hooks

   - pytest_internalerror(excrepr, excinfo)
   - pytest_keyboard_interrupt(excinfo)
   - pytest_exception_interact(node, call, report)
   - pytest_enter_pdb(config, pdb)
   - pytest_leave_pdb(config, pdb)


提供配置文件 pytest.ini 约束测试行为：

```yaml
[pytest]
minversion = 3.10
norecursedirs = test_* extra_*
xfail_strict = True
addopts =
    # show summary of tests
    -ra
    # capture only Python print and C++ py::print, but not C output (low-level Python errors)
    --capture=sys
    # Show local info when a failure occurs
    --showlocals
log_cli_level = info
filterwarnings =
    # make warnings into errors but ignore certain third-party extension issues
    error
    # somehow, some DeprecationWarnings do not get turned into errors
    always::DeprecationWarning
    # importing scipy submodules on some version of Python
    ignore::ImportWarning
    # bogus numpy ABI warning (see numpy/#432)
    ignore:.*numpy.dtype size changed.*:RuntimeWarning
    ignore:.*numpy.ufunc size changed.*:RuntimeWarning

testpaths = "C:/Python310/pybind11/tests"
```

- *addopts*     Add the specified OPTS to the set of command line arguments
- *cache_dir*   Sets a directory where stores content of cache plugin.
- *console_output_style* Sets the console output style while running tests:
    - *classic*: classic pytest output.
    - *progress*: like classic pytest output, but with a progress indicator.
    - *count*: like progress, but shows progress as the number of tests completed instead of a percent.
- *doctest_encoding* Default encoding to use to decode text files with docstrings.
- *doctest_optionflags* One or more doctest flag names from the standard doctest module.
- *empty_parameter_set_mark* Allows to pick the action for empty parametersets in parameterization
    - *skip* skips tests with an empty parameterset (default)
    - *xfail* marks tests with an empty parameterset as xfail(run=False)
    - *fail_at_collect* raises an exception if parametrize collects an empty parameter set
- *python_classes* One or more name prefixes or glob-style patterns determining which classes are considered for test collection.
- *python_files* One or more Glob-style file patterns determining which python files are considered as test modules. 
- *python_functions* One or more name prefixes or glob-patterns determining which test functions and methods are considered tests.
- *pythonpath* Sets list of directories that should be added to the python search path.
- *testpaths* Sets list of directories that should be searched for tests when no specific directories.
- *norecursedirs* Set the directory basename patterns to avoid when recursing for test discovery. 
- *minversion* Specifies a minimal pytest version required for running tests.
- *log_file* Sets a file name relative to the pytest.ini file where log messages should be written to.
- *log_file_date_format* Sets a time.strftime()-compatible string that will be used when formatting dates for the logging file.
- *log_file_format* Sets a logging-compatible string used to format logging messages redirected to the logging file.
- *log_file_level* Sets the minimum log message level that should be captured for the logging file. 
- *log_format* Sets a logging-compatible string used to format captured logging messages.
- *log_level* Sets the minimum log message level that should be captured for logging capture. 


## ==⚡ unit test

Python 自带的 unittest 单元测试框架就有了自己的断言方法 self.assertXXX()，而且不推荐使用 assert XXX 语句。

    import unittest

    class TestStringMethods(unittest.TestCase):

        def test_upper(self):
            self.assertEqual('foo'.upper(), 'FoO')

    if __name__ == '__main__':
        unittest.main()
        
    """
    Failure
    Expected :'FOO'
    Actual   :'FoO'

    Traceback (most recent call last):
      File "assertion_in_python.py", line 6, in test_upper
        self.assertEqual('foo'.upper(), 'FoO')
    AssertionError: 'FOO' != 'FoO'
    """

## ==⚡ assertpy

Python 断言还不够好，所以大家都争相发明自己的 assert 包，推荐 assertpy，它异常强大而且好评如潮。

    pip install assertpy

看例子:

    from assertpy import assert_that

    def test_something():
        assert_that(1 + 2).is_equal_to(3)
        assert_that('foobar')\
            .is_length(6)\
            .starts_with('foo')\
            .ends_with('bar')
        assert_that(['a', 'b', 'c'])\
            .contains('a')\
            .does_not_contain('x')

从它的github 主页 文档上你会发现它支持了几乎你能想到的所有测试场景，包括但不限于以下列表。

- Strings
- Numbers
- Lists
- Tuples
- Dicts
- Sets
- Booleans
- Dates
- Files
- Objects

而且它的断言信息简洁明了，不多不少。

    Expected <foo> to be of length <4>, but was <3>.
    Expected <foo> to be empty string, but was not.
    Expected <False>, but was not.
    Expected <foo> to contain only digits, but did not.
    Expected <123> to contain only alphabetic chars, but did not.
    Expected <foo> to contain only uppercase chars, but did not.
    Expected <FOO> to contain only lowercase chars, but did not.
    Expected <foo> to be equal to <bar>, but was not.
    Expected <foo> to be not equal to <foo>, but was.
    Expected <foo> to be case-insensitive equal to <BAR>, but was not.

在发现assertpy之前我也想写一个类似的包，尽可能通用一些。但是现在，我为毛要重新去造轮子？完全没必要！

断言在软件系统中有非常重要的作用，写的好可以让你的系统更稳定，也可以让你有更多面对（女）对象的时间，而不是在调试代码。

Python中默认的断言语句其实还有一个作用，如果你写了一个类型相关的断言，IDE会把这个对象当成这种类型，这时候智能提示就有如神助。

要不要把内置的断言语句换成可读性更好功能更强大的第三方断言，完全取决于实际情况。比如你真的需要验证某个东西并且很关心验证结果，那么必须不能用简单的assert；如果你只是担心某个点可能有坑或者让IDE认识某个对象，用内置的assert既简单又方便。

所以说，项目经验还是蛮重要的。


## ==⚡ ptest

ptest 中的断言可读性很好，而且通过IDE的智能提示你能轻松完成各种断言语句。

    from ptest.decorator import *
    from ptest.assertion import *

    @TestClass()
    class TestCases:
        @Test()
        def test1(self):
            actual = 'foo'
            expected = 'bar'
            assert_that(expected).is_equal_to(actual)

    """
    Start to run following 1 tests:
    ------------------------------
    ...
    [demo.assertion_in_python.TestCases.test1@Test] Failed with following message:
    ...
    AssertionError: Unexpectedly that the str <bar> is not equal to str <foo>.
    """

## ==⚡ type cast

数值、字符串基本类型转换涉及以下方式：

- 数值转换字符串，目的是将数值转换为 b'\x30\x39' 这区间的 10 个数字字符表示内置函数 hex() oct() bin() 或 str() 可以处理；
- 字符串转换数值，一是字面中是数字字符组成的字符串解析为数值，使用内置的 int() float() 函数处理；另一种是将字符当作数值进行处理；

Binary 数值数据转换还需要 Binary Data Services » struct — Interpret bytes as packed binary data

标准库中还有一个处理二进制数据的模块 `codecs` (encoders and decoders)，编码与解码。


## ===👉 cast to int

可以由 float、str、bytes 转换，其他类型均不支持。

float -> int 会去掉小数点及后面的数值，仅保留整数部分。

    int(-12.94)     # -12

str -> int 如果字符串中有数字(0-9)和正负号(+/-)以外的字符，就会报错。

    int('1209')     # 1209
    int('-12')      # -12
    int('+1008')    # 1008

bytes -> int 如果 bytes 中有数字(0-9)和正负号(+/-)以外的字符，就会报错。

    int(b'1209')     # 1209
    int(b'-12')      # -12
    int(b'+1008')    # 1008

字面量数字字符串 binary 数据可以使用这种方法解析得到数值。


## ===👉 cast to float

支持 int、str、bytes 转换，其他类型均不支持。

int -> float 时，会自动给添加一位小数。

    float(-1209)     # -1209.0

str -> float 如果字符串含有正负号(+/-)、数字(0-9)和小数点(.)以外的字符，则不支持转换。

    float('-1209')          # -1209.0
    float('-0120.29023')    # -120.29023

bytes -> float 如果 bytes 中含有正负号(+/-)、数字(0-9)和小数点(.)以外的字符，则不支持转换。

    float(b'-1209')         # -1209.0
    float(b'-0120.29023')   # -120.29023

## ===👉 cast to complex

仅支持 int、float、str 转换。

int -> complex 时，会自动添加虚数部分并以0j表示。

    complex(12)         # (12+0j)

float -> complex 时，会自动添加虚数部分并以0j表示。

    complex(-12.09)     # (-12.09+0j)

str -> complex 时，如果能转换成 int 或 float，则会转换后再转为 complex。如果字符串完全符合 complex 表达式规则，也可以转换为 complex 类型值。

    complex('-12.09')       # (-12.09+0j)
    complex('-12.0')        # (-12+0j)，去除了小数部分
    complex('-12')          # (-12+0j)
    complex('-12+9j')       # (-12+9j)
    complex('(-12+9j)')     # (-12+9j)
    complex('-12.0-2.0j')   # (-12-2j)，去除了小数部分
    complex('-12.0-2.09j')  # (-12-2.09j)
    complex(b'12')          # 报错，不支持 bytes 转换为 complex
    complex('12 + 9j')      # 报错，加号两侧不可有空格

## ===👉 cast to bytes

string -> bytes

    str.encode("ABC")
    bytes("ABC", encoding='utf8')

## ===👉 cast to str

可以通过 str() 函数将任意对象转换为字符串。

int -> str 会直接完全转换。

    str(12)     # 12

float -> str 会去除末位为 0 的小数部分。

    str(-12.90)     # -12.9

complex -> str 会先将值转化为标准的 complex 表达式，然后再转换为字符串。

    str(complex(12 + 9j))   # (12+9j)
    str(complex(12, 9))     # (12+9j)

bytes -> str 的转换比较特殊点，在 Python 3.x 中，字符串和字节不再混淆，而是完全不同的数据类型。

转换为可执行的表达式字符串：

    str(b'hello world')        # b'hello world'
    b.decode()

str() 函数指定 encoding 参数，或者使用 bytes.decode() 方法，可以作实际数据的转换：

    b'hello world'.decode()                             # hello world
    str(b'hello world', encoding='utf-8')               # hello world
    str(b'\xe4\xb8\xad\xe5\x9b\xbd', encoding='utf-8')  # 中国

list -> str 会先将值格式化为标准的 list 表达式，然后再转换为字符串。

    str([])                      # []
    str([1, 2, 3])              # [1, 2, 3]
    ''.join(['a', 'b', 'c'])    # abc

tuple -> str 会先将值格式化为标准的 tuple 表达式，然后再转换为字符串。

    str(())                     # ()
    str((1, 2, 3))              # (1, 2, 3)
    ''.join(('a', 'b', 'c'))    # abc

dict -> str 会先将值格式化为标准的 dict 表达式，然后再转换为字符串。

    str({'name': 'hello', 'age': 18})       # {'name': 'hello', 'age': 18}
    str({})                                 # {}
    ''.join({'name': 'hello', 'age': 18})   # nameage

set -> str 会先将值格式化为标准的 set 表达式，然后再转换为字符串。

    str(set({}))                # set()
    str({1, 2, 3})              # {1, 2, 3}
    ''.join({'a', 'b', 'c'})    # abc

转换内置对象：

    str(int)                # <class 'int'>，转换内置类
    str(hex)                # <built-in function hex>，转换内置函数

转换类实例：

    class Hello:
        pass


    obj = Hello()

    print(str(obj))

    # <__main__.Hello object at 0x1071c6630>

转换函数：

    def hello():
        pass


    print(str(hello))

    # <function hello at 0x104d5a048>

bytes 仅支持 str 转换为 bytes 类型。

    '中国'.encode()                   # b'\xe4\xb8\xad\xe5\x9b\xbd'

    bytes('中国', encoding='utf-8')   # b'\xe4\xb8\xad\xe5\x9b\xbd'

## ===👉 cast to list

支持转换为 list 的类型，只能是序列，比如：str、tuple、dict、set等。

str -> list

    list('123abc')      # ['1', '2', '3', 'a', 'b', 'c']

bytes -> list 转换会取每个字节的 ASCII 十进制值并组合成列表

    list(b'hello')      # [104, 101, 108, 108, 111]

tuple -> list 转换比较简单。

    list((1, 2, 3))     # [1, 2, 3]

dict -> list 字典转换列表会取键名作为列表的值。

    list({'name': 'hello', 'age': 18})  # ['name', 'age']

set -> list 集合转换列表会先去重为标准的集合数值，然后再转换。

    list({1, 2, 3, 3, 2, 1})    # [1, 2, 3]

## ===👉 cast to tuple

与列表一样，支持转换为 tuple 的类型，只能是序列。

str -> tuple

    tuple('中国人')    # ('中', '国', '人')

bytes -> tuple 转换会取每个字节的 ASCII 十进制值并组合成列表。

    tuple(b'hello')     # (104, 101, 108, 108, 111)

list -> tuple

    tuple([1, 2, 3])    # (1, 2, 3)

dict -> tuple

    tuple({'name': 'hello', 'age': 18})     # ('name', 'age')

set -> tuple

    tuple({1, 2, 3, 3, 2, 1})       # (1, 2, 3)

## ===👉 cast to dict

str -> dict 使用 json 模块转换 JSON 字符串为字典时，需要求完全符合 JSON 规范，尤其注意键和值只能由单引号包裹，否则会报错。

    import json

    user_info = '{"name": "john", "gender": "male", "age": 28}'
    print(json.loads(user_info))

    # {'name': 'john', 'gender': 'male', 'age': 28}

使用 eval 函数，因为 eval 函数能执行任何符合语法的表达式字符串，所以存在严重的安全问题，不建议。

    user_info = "{'name': 'john', 'gender': 'male', 'age': 28}"
    print(eval(user_info))

    # {'name': 'john', 'gender': 'male', 'age': 28}

使用 ast.literal_eval 方法进行转换既不存在使用 json 进行转换的问题，也不存在使用 eval 进行转换的 安全性问题，因此推荐使用 ast.literal_eval。

    import ast

    user_info = "{'name': 'john', 'gender': 'male', 'age': 28}"
    user_dict = ast.literal_eval(user_info)
    print(user_dict)

    # {'name': 'john', 'gender': 'male', 'age': 28}

list -> dict 通过 zip 将 2 个列表映射为字典：

    list1 = [1, 2, 3, 4]
    list2 = [1, 2, 3]
    print(dict(zip(list1, list2)))

    # {1: 1, 2: 2, 3: 3}

将嵌套的列表转换为字典：

    li = [
        [1, 111],
        [2, 222],
        [3, 333],
    ]

    print(dict(li))

    # {1: 111, 2: 222, 3: 333}

tuple -> dict 通过 zip 将 2 个元组映射为字典：

    tp1 = (1, 2, 3)
    tp2 = (1, 2, 3, 4)

    print(dict(zip(tp1, tp2)))

    # {1: 1, 2: 2, 3: 3}

将嵌套的元组转换为字典：

    tp = (
        (1, 111),
        (2, 222),
        (3, 333),
    )

    print(dict(tp))

    # {1: 111, 2: 222, 3: 333}

set -> dict 通过 zip 将 2 个集合映射为字典：

    set1 = {1, 2, 3}
    set2 = {'a', 'b', 'c'}

    print(dict(zip(set1, set2)))

    # {1: 'c', 2: 'a', 3: 'b'}

## ===👉 cast to set

str -> set 先将字符切割成元组，然后再去重转换为集合。

    print(set('hello'))     # {'l', 'o', 'e', 'h'}

bytes -> set 会取每个字节的 ASCII 十进制值并组合成元组，再去重。

    set(b'hello')           # {104, 108, 101, 111}

list -> set 先对列表去重，再转换。

    set([1, 2, 3, 2, 1])    # {1, 2, 3}

tuple -> set 先对列表去重，再转换。

    set((1, 2, 3, 2, 1))    # {1, 2, 3}

dict -> set 会取字典的键名组合成集合。

    set({'name': 'hello', 'age': 18})

    # {'age', 'name'}


## ==⚡ print

打印函数，这是一个常用的输出函数。

print() 函数自身有限制，Python 默认编码是 gbk，不能完全打印所有的 UTF-8 字符。

    print('\u00bb')

    UnicodeEncodeError: 'gbk' codec can't encode character '\xbb' in position 0: illegal multibyte sequence

修改默认编码为 utf8，gb18030，gbk 等：

    import io
    import sys
    import urllib.request
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')
    res = urllib.request.urlopen('http://www.baidu.com')
    htmlBytes=res.read()
    print(htmlBytes.decode('utf-8'))


## ==⚡ sys.argv & CLI
- [OptParse 分析命令行输入模块](https://www.jianshu.com/p/bec089061742)

Python 提供了 getopt 模块来获取命令行参数 Command-Line Arguments。也可以用 sys.argv 来获取命令行参数：

- sys.argv 是命令行参数列表。
- len(sys.argv) 是命令行参数个数。

注：sys.argv[0] 表示脚本名，包括通过 python -m module 执行模块代码时也是，头一个参数是入口文件。

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import sys

    print 'argc:', len(sys.argv)
    print 'argv:', str(sys.argv)

    $ python test.py arg1 arg2 arg3
    argc: 4
    argv: ['test.py', 'arg1', 'arg2', 'arg3']

getopt 模块是专门处理命令行参数的模块，用于获取命令行选项和参数，也就是 sys.argv。命令行选项使得程序的参数更加灵活。支持短选项模式（-）和长选项模式（--）。

该模块提供了两个方法及一个异常处理来解析命令行参数。

    getopt.getopt(args, options[, long_options])

方法参数说明：

`args` 要解析的命令行参数列表。
`options` 以字符串的格式定义，options 后的冒号 : 表示如果设置该选项，必须有附加的参数，否则就不附加参数。
`long_options` 以列表的格式定义，long_options 后的等号 = 表示该选项必须有附加的参数，不带冒号表示该选项不附加参数。

该方法返回值由两个元素组成: 第一个是 (option, value) 元组的列表。 第二个是参数列表，包含那些没有 - 或 -- 的参数。

另外一个方法是 getopt.gnu_getopt()。

    Exception getopt.GetoptError

在没有找到参数列表，或选项的需要的参数为空时会触发该异常。

异常的参数是一个字符串，表示错误的原因。属性 msg 和 opt 为相关选项的错误信息。

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import sys, getopt

    def main(argv):
       inputfile = ''
       outputfile = ''
       try:
          opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
       except getopt.GetoptError:
          print ('test.py -i <inputfile> -o <outputfile>')
          sys.exit(2)
       for opt, arg in opts:
          if opt == '-h':
             print ('test.py -i <inputfile> -o <outputfile>')
             sys.exit()
          elif opt in ("-i", "--ifile"):
             inputfile = arg
          elif opt in ("-o", "--ofile"):
             outputfile = arg
       print (' inputfile:', inputfile)
       print ('outputfile:', outputfile)

    if __name__ == "__main__":
       main(sys.argv[1:])


执行以上代码，输出结果为：

    $ python test.py -h
    usage: test.py -i <inputfile> -o <outputfile>

    $ python test.py -i ifile -o ofile
     inputfile: ifile
    outputfile: ofile




## ==⚡ type & dir Introspection 对象自省

自省 Introspection 在计算机编程领域里，是指在运行时来判断一个对象的类型的能力。它是 Python 作为动态解析型语言的强项之一，Python 中所有一切都是一个对象，而且我们可以仔细勘察那些对象。Python 还包含了许多内置函数和模块来帮助处理类型信息。

它 dir() 是用于自省的最重要的函数之一，返回一个列表，包含了一个对象所拥有的属性和方法：

    my_list = [1, 2, 3]
    dir(my_list)
    # [
    #  '__add__', '__class__', '__contains__', '__delattr__', '__delitem__',
    #  '__delslice__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__',
    #  '__getitem__', '__getslice__', '__gt__', '__hash__', '__iadd__', '__imul__',
    #  '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__',
    #  '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__',
    #  '__setattr__', '__setitem__', '__setslice__', '__sizeof__', '__str__',
    #  '__subclasshook__', 'append', 'count', 'extend', 'index', 'insert', 'pop',
    #  'remove', 'reverse', 'sort'
    # ]

    s = "ABC"
    print(dir(s))
    # [
    #  '__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__',
    #  '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', 
    #  '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__',
    #  '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__',
    #  '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__',
    #  '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize',
    #  'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find',
    #  'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal',
    #  'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace',
    #  'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 
    #  'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit',
    #  'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title',
    #  'translate', 'upper', 'zfill'
    # ]

    import queue

    q = queue.LifoQueue()
    q = queue.PriorityQueue()
    print(dir(q))

    # ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__',
    #  '__eq__','__format__', '__ge__', '__getattribute__', '__gt__', '__hash__',
    #  '__init__','__init_subclass__', '__le__', '__lt__', '__module__', '__ne__',
    #  '__new__','__reduce__', '__reduce_ex__', '__repr__', '__setattr__',
    #  '__sizeof__','__str__', '__subclasshook__', '__weakref__', '_get', '_init',
    #  '_put', '_qsize','all_tasks_done', 'empty', 'full', 'get', 'get_nowait',
    #  'join', 'maxsize','mutex', 'not_empty', 'not_full', 'put', 'put_nowait',
    #  'qsize', 'queue','task_done', 'unfinished_tasks'
    # ]

    print(dir())
    # [
    #  '__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', 
    #  '__loader__', '__name__', '__package__', '__spec__', 'q', 'queue'
    # ]


上面的自省给了我们一个列表对象的所有方法的名字。当你没法回忆起一个方法的名字，这会非常有帮助。如果我们运行dir()而不传入参数，那么它会返回当前作用域的所有名字。

type() 函数返回一个对象的类型：

    print(type(''))
    # Output: <type 'str'>

    print(type([]))
    # Output: <type 'list'>

    print(type({}))
    # Output: <type 'dict'>

    print(type(dict))
    # Output: <type 'type'>

    print(type(3))
    # Output: <type 'int'>

id() 函数返回任意对象的唯一ID，举个例子：

    print(id("name"))
    # Output: 3042185964152

inspect 反射模块提供了许多有用的函数来获取对象的信息。比方说，你可以查看一个对象的成员，只需运行：

    import inspect
    print(inspect.getmembers(str))
    # Output: [('__add__', <slot wrapper '__add__' of ... ...

还有好多个其他方法也能有助于自省。如果你愿意，你可以去探索它们。


    # coding = UTF-8

    import re

    def test(f):
        if "function" == type(f).__name__:
            f("from test")
        elif "str" == type(f).__name__:
             print("Test:", f)

    def main():
        test(test)
        test("for test")

    main()



## ==⚡ Mutation

Python 中可变 mutable 与不可变 immutable 的数据类型让新手很是头痛。简单的说，可变 mutable 意味着可以被改动，而不可变 immutable 的意思是常量 constant 。考虑下这个例子：

    foo = ['hi']
    print(foo) # Output: ['hi']
    
    bar = foo
    bar += ['bye']

    print(foo) # Output: ['hi', 'bye']

是不是期望看到两次 foo = ['hi']？需要认识对象可变性 mutability，每当你将一个变量赋值为另一个可变类型的变量时，对这个数据的任意改动会同时反映到这两个变量上去。新变量只不过是老变量的一个别名而已，这个情况只是针对可变数据类型。

下面的函数和可变数据类型让你一下就明白了：

    def add_to(num, target=[]):
        target.append(num)
        return target
    
    add_to(1) # Output: [1] 
    add_to(2) # Output: [1, 2] 
    add_to(3) # Output: [1, 2, 3]

你可能预期它表现的不是这样子。你可能希望，当你调用 add_to 时，有一个新的列表被创建。

Python 函数被定义时，默认参数只会运算一次，而不是每次被调用时都会重新运算。你应该永远不要定义可变类型的默认参数，除非你知道你正在做什么。你应该像这样做：

    def add_to(element, target=None):
        if target is None:
            target = []
        target.append(element)
        return target

现在每当你在调用这个函数不传入target参数的时候，一个新的列表会被创建。举个例子：

    add_to(42) # Output: [42] 
    add_to(42) # Output: [42] 
    add_to(42) # Output: [42]


## ==⚡ Map Filter Reduce
[Python进阶 - Intermediate Python](https://eastlakeside.gitbook.io/interpy-zh/map_n_filter)

Map，Filter 和 Reduce 三个函数能为函数式编程提供便利。我们会通过实例一个一个讨论并理解它们。

Map会将一个函数映射到一个输入列表的所有元素上。这是它的规范：

    map(function_to_apply, list_of_inputs)

大多数时候，我们要把列表中所有元素一个个地传递给一个函数，并收集输出。使用 Map 结合 lambdas 表达式就简洁得多了，对比如下：

    items = [1, 2, 3, 4, 5]
    squared = []
    for i in items:
        squared.append(i**2)

    # Map style
    items = [1, 2, 3, 4, 5]
    squared = list(map(lambda x: x**2, items))

大多数时候，我们使用匿名函数 lambdas 来配合 map, 所以我在上面也是这么做的。 不仅用于列表的输入，我们甚至可以将满是函数的列表作为输入！

    def multiply(x):
            return (x*x)
    def add(x):
            return (x+x)

    funcs = [multiply, add]
    for i in range(5):
        value = map(lambda x: x(i), funcs)
        print(list(value))
        # list 转换是为了兼容性，因为 Python 3 中 map 返回迭代器

map内建函数的python实现：

    def map(func,seq):  
        mapped_seq = []  
        for eachItem in seq:  
            mapped_seq.append(func(eachItem))  
        return mapped_seq  

顾名思义，filter 过滤列表中的元素，并且返回一个由所有符合要求的元素所构成的列表，符合要求即函数映射到该元素时返回值为 True. 这里是一个简短的例子：

    number_list = range(-5, 5)
    less_than_zero = filter(lambda x: x < 0, number_list)
    print(list(less_than_zero)) # [-5, -4, -3, -2, -1]
    # list 转换是为了兼容性，因为 Python 3 中 filter 返回迭代器


这个 filter 类似于一个 for 循环，但它是一个内置函数，并且更快。大部分情况下推导式的可读性更好。

filter 内建函数的实现：

    def filter(bool_func,seq):  
        filtered_seq = []  
        for eachItem in seq:  
            if bool_func(eachItem):  
                filtered_seq.append(eachItem)  
        return filtered_seq  

reduce(func,seq[,init]) 为二元函数，将 func 作用于 seq 序列的元素，每次携带先前的结果以及下一个序列的元素，最后返回值减少序列为一个单一的返回值：如果初始值 init 给定，第一个比较会是init和第一个序列元素而不是序列的头两个元素。

当需要对一个列表进行一些计算并返回结果时，Reduce 是个非常有用的函数。如需要计算一个整数列表的乘积时：

    from functools import reduce
    product = reduce( (lambda x, y: x * y), [1, 2, 3, 4] )
    print(product) # 24

reduce 的实现：

    def reduce(bin_func,seq,initial=None):  
        lseq = list(seq)  
        if initial is None:  
            res = lseq.pop(0)  
        else:  
            res = initial  
        for eachItem in lseq:  
            res = bin_func(res,eachItem)  
        return res  


## ==⚡ file process tips
- https://github.com/piglei/one-python-craftsman/blob/master/zh_CN/11-three-tips-on-writing-file-related-codes.md

使用 with 语句和 open 函数配合读写文件流，它会自动在离开作用域时调用 close 关闭文件，并且保存关闭。多个文件使用逗号分隔。

open 函数返回一个 BufferedReader 对象，如果直接使用 for 语句处理每一行，这会要求一次过读取所有内容。对于操作大文件这种方法有个缺点就是内存占用大，所以需要使用底层 read 函数，进行批量读取，但每次读取又不能太小，这也不利于磁盘的文件读取。

```py
from memory_profiler import profile
import time
import pathlib

pys = pathlib.Path(".").glob("*.py")
for py in pys:
    print(py)
    # py.rename(py.with_suffix('.py.bak'))

file = "C:/Videos/002YZDbhgx07Q4VXV6oo010412076tcU0E030.mp4"

@profile
def file_v1():
    with open(file, "rb") as cin:
        for line in cin:
            pass
            # print( 9 in line and "9")
@profile
def file_v2():
    with open(file, "rb") as cin:
        bufsize = 1024 * 1024
        while 1:
            chunk = cin.read(bufsize)
            if len(chunk)!=bufsize: break
            pass

@profile
def file_chunks(file, bufsize = 1024 * 1024):
    with open(file, "rb") as cin:
        while 1:
            chunk = cin.read(bufsize)
            if not chunk: 
                break;
            yield chunk

@profile
def file_v3():
    line = 0
    for chunk in file_chunks(file, 1):
        line += 1
        # print(f"line {line}: {len(chunk)}", end="\t")
        pass

start = time.time()
file_v3()
end = time.time()
print(f"Duration {end - start}")
```


## ==⚡ PyV8 模块

Pyv8 是 V8 脚本引擎的 Python 绑定，安装包链接：

1. PyV8-1.0-preview-r443.win32-py2.7.exe http://pan.baidu.com/s/1hsJOSQg
3. PyV8 Binaries https://github.com/emmetio/pyv8-binaries
2. 多系统环境安装包 http://pan.baidu.com/s/1kVjQTk7

PyV8 是 V8 引擎的 Python 语言封装，这是 Python 和 JavaScript 对象之间的桥，支持在 Python 脚本中调用 V8 引擎，执行 JavaScript。

    >>> import PyV8
    >>> ctxt = PyV8.JSContext()          # create a context with an implicit global object
    >>> ctxt.enter()                     # enter the context (also support with statement)
    >>> ctxt.eval("1+2")                 # evalute the javascript expression
    3                                    # return a native python int
    >>> class Global(PyV8.JSClass):      # define a compatible javascript class
    ...   def hello(self):               # define a method
    ...     print "Hello World"    
    ...
    >>> ctxt2 = PyV8.JSContext(Global()) # create another context with the global object
    >>> ctxt2.enter()                    
    >>> ctxt2.eval("hello()")            # call the global object from javascript
    Hello World                          # the output from python script

例子：JavaScript 字典转 JSON

    from pyv8 import PyV8

    def get_ctx():
        if not hasattr(get_ctx, 'ctx'):
            ctx = PyV8.JSContext()
            ctx.enter()
            get_ctx.ctx = ctx
        return get_ctx.ctx

    def js2json(data):
        """ convert from javascript data
            to json data
        """
        ctx = get_ctx()
        fret = ctx.eval("""
                function func() {
                  var data = """ + data + """;
                  var json_data = JSON.stringify(data);
                  return json_data;
                }
                """)
        
        jsond = ctx.locals.func()
        return jsond

    jsond = js2json("""
        who: 'john',
        age: 28,
    """)
    import json
    js = json.loads(jsond)


安装 PyV8 之后运行提示错误信息如下：

    AttributeError: module 'PyV8' has no attribute 'JSContext



## ==⚡ f-string & r-string
- The Python Language Reference » 2. Lexical analysis

f-string 格式化字符串 f"{format}"。

r-string 原值字符串表达 r"as-is"，不会执行转义，如 r"\n\n" 得到的就是双引号里面的字符串。。


```py
# Python 3.6+ f-string syntax: f"{format}"

# Python version check
def checkVersion(v='3.6'):
    import sys
    info = sys.version_info
    version = "%d.%d.%d" % (info.major, info.minor, info.micro)
    ex = "Python version %s is below %s." % (version,v)
    if(version > v): 
        print(f"Python version {version} > {v} is checked.")
        print(sys.version_info)
    else:
        raise Exception(ex)
        print(sys.version_info)
    return True
checkVersion("3.6")

# Python string formatting
name = 'Peter'; age = 23

# Peter is 23 years old
print('%s is %d years old' % (name, age))     # old normal printf
print('{} is {} years old'.format(name, age)) # normal format
print('{0} is {1} years old'.format(name, age)) # normal format
print(f'{name} is {age} years old')           # f-string format

# Python f-string expressions
# Peter is 24 next year.
print(f'{name} is {age + 1} next year.')

# Python f-string dictionaries
# John Doe is a gardener
user = {'name': 'John Doe', 'occupation': 'gardener'}
print(f"{user['name']} is a {user['occupation']}")

# Python 3.8+ introduce f-string debug
# math.cos(age) = -0.5328330203333975
# math.sin(age) = -0.8462204041751706
checkVersion("3.8")
import math
print(f'{math.cos(age) = }')
print(f'{math.sin(age) = }')

# Python multi-line f-string
# They are placed between round brackets
msg = (
    f'Name: {name}\n'
    f'Age: {age}\n'
)
print(msg)

# Python f-string calling function
print(f'version check again: {checkVersion("3.6")}')

# Python f-string accepts objects as well 
# Can use either __str__ or __repr__ magic functions.
class User:
    def __init__(self, name, occupation):
        self.name = name
        self.occupation = occupation

    def __repr__(self):
        return f"{self.name} is a {self.occupation}"

u = User('John Doe', 'gardener')
print(f'{u}')


# Python f-string escaping characters: {} ' \
print(f'Python uses {{}} to evaludate variables in f-strings')
print(f'This was a \'great\' film')
print(f'This was a \\great\\ film')


# Python f-string format datetime
import datetime
now = datetime.datetime.now()
print(f'{now:%Y-%m-%d %H:%M}') # 2021-08-20 15:13


# Python f-string format floats {v:width.precision}
# Floating point values have the f suffix.
# We can also specify the precision: the number of decimal places. 
print(f'{age:.2f}') # 23.00
print(f'{age:.5f}') # 23.00000


# Python f-string format integer {v:width&format}
# Filled with spaces or other characters if the value is shorter than the specified width.
# hexadecimal   octal decimal     scientific   character
#        0x41   0o101      65    4.225000e+03         A
#        0x42   0o102      66    4.356000e+03         B
print(f"%12s%8s%8s%15s%12s" % 
    ("hexadecimal","octal","decimal","scientific","character"))
for x in range(65, 72):
    print(f'{x:#12x}{x:#8o}{x:8}{x*x:16e}{x:10c}')

# Python f-string justify string
# The > can follows the colon to justify the strings to the right.
print(f'{"x":>10}')
print(f'{"apple":>10}')
```


2.4.3. Formatted string literals

New in version 3.6.

A formatted string literal or f-string is a string literal that is prefixed with 'f' or 'F'. These strings may contain replacement fields, which are expressions delimited by curly braces {}. While other string literals always have a constant value, formatted strings are really expressions evaluated at run time.

Escape sequences are decoded like in ordinary string literals (except when a literal is also marked as a raw string). After decoding, the grammar for the contents of the string is:

    f_string          ::=  (literal_char | "{{" | "}}" | replacement_field)*
    replacement_field ::=  "{" f_expression ["="] ["!" conversion] [":" format_spec] "}"
    f_expression      ::=  (conditional_expression | "*" or_expr)
                             ("," conditional_expression | "," "*" or_expr)* [","]
                           | yield_expression
    conversion        ::=  "s" | "r" | "a"
    format_spec       ::=  (literal_char | NULL | replacement_field)*
    literal_char      ::=  <any code point except "{", "}" or NULL>

Some examples of formatted string literals:

>>> name = "Fred"
>>> f"He said his name is {name!r}."
"He said his name is 'Fred'."
>>> f"He said his name is {repr(name)}."  # repr() is equivalent to !r
"He said his name is 'Fred'."
>>> width = 10
>>> precision = 4
>>> value = decimal.Decimal("12.34567")
>>> f"result: {value:{width}.{precision}}"  # nested fields
'result:      12.35'
>>> today = datetime(year=2017, month=1, day=27)
>>> f"{today:%B %d, %Y}"  # using date format specifier
'January 27, 2017'
>>> f"{today=:%B %d, %Y}" # using date format specifier and debugging
'today=January 27, 2017'
>>> number = 1024
>>> f"{number:#0x}"  # using integer format specifier
'0x400'
>>> foo = "bar"
>>> f"{ foo = }" # preserves whitespace
" foo = 'bar'"
>>> line = "The mill's closed"
>>> f"{line = }"
'line = "The mill\'s closed"'
>>> f"{line = :20}"
"line = The mill's closed   "
>>> f"{line = !r:20}"
'line = "The mill\'s closed" '


A consequence of sharing the same syntax as regular string literals is that characters in the replacement fields must not conflict with the quoting used in the outer formatted string literal:


    f"abc {a["x"]} def"    # error: outer string literal ended prematurely
    f"abc {a['x']} def"    # workaround: use different quoting


Backslashes are not allowed in format expressions and will raise an error:

    f"newline: {ord('\n')}"  # raises SyntaxError

To include a value in which a backslash escape is required, create a temporary variable.


>>> newline = ord('\n')
>>> f"newline: {newline}"
'newline: 10'


Formatted string literals cannot be used as docstrings, even if they do not include expressions.

>>> def foo():
...     f"Not a docstring"
...
>>> foo.__doc__ is None
True



## ==⚡ Docstring & DocTest

基于注解文档的测试，Python 2.1 引入，比单元测试更方便的单元测试！

Docstring 文档既包含了帮助文档，同时又可以作用编写单元测试代码，以下代码有错误，通过测试就可以发现：

```py
def average(values):
    """Computes the arithmetic mean of a list of numbers.

    >>> print(average([20, 30, 70]))
    40.0
    """

    return sum(values) // len(values)

def power(x, y=2):
    """Return x to the power of y, y defaults
    to 2 if not provided
        
    >>> power(2)
    4
    >>> power(4)
    16
    >>> power(2, 3)  
    8
    """
    
    return x*y

if __name__ == '__main__':
    # help(power) # Help on docstring
    import doctest
    ret = doctest.testmod()   # automatically validate the embedded tests
    print(f'''
    Test Results:
          failed = {ret.failed}
       attempted = {ret.attempted}
    {"All Pass!" if ret.failed == 0 else "DocTest Failure!"}
    {ret}
    ''')
```

## ==⚡ Functions
- The Python Tutorial » 4. More Control Flow Tools - 4.6. Defining Functions
- The Python Language Reference » 8. Compound statements

8.6. Function definitions
A function definition defines a user-defined function object (see section The standard type hierarchy):

    funcdef                   ::=  [decorators] "def" funcname "(" [parameter_list] ")"
                                   ["->" expression] ":" suite
    decorators                ::=  decorator+
    decorator                 ::=  "@" assignment_expression NEWLINE
    parameter_list            ::=  defparameter ("," defparameter)* "," "/" ["," [parameter_list_no_posonly]]
                                     | parameter_list_no_posonly
    parameter_list_no_posonly ::=  defparameter ("," defparameter)* ["," [parameter_list_starargs]]
                                   | parameter_list_starargs
    parameter_list_starargs   ::=  "*" [parameter] ("," defparameter)* ["," ["**" parameter [","]]]
                                   | "**" parameter [","]
    parameter                 ::=  identifier [":" expression]
    defparameter              ::=  parameter ["=" expression]
    funcname                  ::=  identifier

函数定义与使用示范：

```py 
def arrow(a,b) -> int:
    return a+b

print(arrow(1,2))
```


We can create a function that writes the Fibonacci series to an arbitrary boundary:

>>> def fib(n):    # write Fibonacci series up to n
...     """Print a Fibonacci series up to n."""
...     a, b = 0, 1
...     while a < n:
...         print(a, end=' ')
...         a, b = b, a+b
...     print()
...
>>> #` Now call the function we just defined:
... fib(2000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597


The keyword *def* introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

The first statement of the function body can optionally be a string literal; this string literal is the function’s documentation string, or docstring. (More about docstrings can be found in the section *Documentation Strings*.) There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it’s good practice to include docstrings in code that you write, so make a habit of it.

The execution of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table; whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables and variables of enclosing functions cannot be directly assigned a value within a function (unless, for global variables, named in a *global* statement, or, for variables of enclosing functions, named in a *nonlocal* statement), although they may be referenced.

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). [1] When a function calls another function, or calls itself recursively, a new local symbol table is created for that call.

A function definition associates the function name with the function object in the current symbol table. The interpreter recognizes the object pointed to by that name as a user-defined function. Other names can also point to that same function object and can also be used to access the function:


>>> fib
<function fib at 10042ed0>
>>> f = fib
>>> f(100)
0 1 1 2 3 5 8 13 21 34 55 89


Coming from other languages, you might object that fib is not a function but a procedure since it doesn’t return a value. In fact, even functions without a return statement do return a value, albeit a rather boring one. This value is called *None* (it’s a built-in name). Writing the value *None* is normally suppressed by the interpreter if it would be the only value written. You can see it if you really want to using print():


>>> fib(0)
>>> print(fib(0))
None


It is simple to write a function that returns a list of the numbers of the Fibonacci series, instead of printing it:


>>> def fib2(n):  # return Fibonacci series up to n
...     """Return a list containing the Fibonacci series up to n."""
...     result = []
...     a, b = 0, 1
...     while a < n:
...         result.append(a)    # see below
...         a, b = b, a+b
...     return result
...
>>> f100 = fib2(100)    # call it
>>> f100                # write the result
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


This example, as usual, demonstrates some new Python features:
• The *return* statement returns with a value from a function. return without an expression argument returns *None*. Falling off the end of a function also returns *None*.
• The statement *result.append(a)* calls a method of the list object *result*. A method is a function that ‘belongs’ to an object and is named *obj.methodname*, where *obj* is some object (this may be an expression), and methodname is the name of a method that is defined by the object’s type. Different types define different methods. Methods of different types may have the same name without causing ambiguity. (It is possible to define your own object types and methods, using classes, see Classes) The method *append()* shown in the example is defined for list objects; it adds a new element at the end of the list. In this example it is equivalent to *result = result + [a]*, but more efficient.


4.7.1. Default Argument Values

It is also possible to define functions with a variable number of arguments. There are three forms, which can be combined.

The most useful form is to specify a default value for one or more arguments. This creates a function that can be called with fewer arguments than it is defined to allow. For example:

```py
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
```

This function can be called in several ways:

• giving only the mandatory argument: ask_ok('Do you really want to quit?')
• giving one of the optional arguments: ask_ok('OK to overwrite the file?', 2)
• or even giving all arguments: ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')

This example also introduces the in keyword. This tests whether or not a sequence contains a certain value.

The default values are evaluated at the point of function definition in the defining scope, so that


```py
i = 5

def f(arg=i):
    print(arg)

i = 6
f()
```

will print 5.

Important warning: The default value is evaluated only once. This makes a difference when the default is a mutable object such as a list, dictionary, or instances of most classes. For example, the following function accumulates the arguments passed to it on subsequent calls:


```py
def f(a, L=[]):
    L.append(a)
    return L

print(f(1))
print(f(2))
print(f(3))
```

This will print


    [1]
    [1, 2]
    [1, 2, 3]

If you don’t want the default to be shared between subsequent calls, you can write the function like this instead:

```py
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

## ==⚡ Lambda - Anonymous Functions

Small anonymous functions can be created with the lambda keyword. This function returns the sum of its two arguments: `lambda a, b: a+b`. Lambda functions can be used wherever function objects are required. 

    >>> def make_incrementor(n):
    ...     return lambda x: x + n
    ...
    >>> f(0)
    42
    >>> f(1)
    43

当我们在传入函数时，有些时候，不需要显式地定义函数，直接传入匿名函数更方便
关键字 lambda 表示匿名函数，冒号前面的x表示函数参数

    >>> list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    [1, 4, 9, 16, 25, 36, 49, 64, 81]

注：匿名函数有个限制，就是只能有一个表达式，没有 `return`，返回值就是该表达式的结果

优点：函数没有名字，不必担心函数名冲突。

此外，匿名函数也是一个函数对象，也可以把匿名函数赋值给一个变量，再利用变量来调用该函数

    >>> f = lambda x : x * x
    >>> f
    <function <lambda> at 0x000001B11F2327B8>
    >>> f(10)
    100

也可以把匿名函数作为返回值返回

    def build(x, y):
        return lambda: x * x + y * y

演示闭包创建，lambda 不能和 match 这样的复合语句搭配使用，功能弱了：

```py
from time import sleep

for i in range(1,9):
    # make closure by lambada
    s = lambda x: print(f"single: x={x}")
    t = (lambda x: lambda: (sleep(0.1), print(f"twice: x={x}")) )(i)
    t(), s(i)
```


## ==⚡ Class & Function Decorator 修饰函数
- The Python Language Reference » 8.6. Function definitions - 8.7. Class definitions
- Functional Programming HOWTO https://docs.python.org/3/howto/functional.html


软件开发领域中最经典的口头禅就是 DRY - “don’t repeat yourself”。

也就是说，任何时候当你的程序中存在高度重复,或者是通过剪切复制的代码时，都应该想想是否有更好的解决方案。

在 Python 当中，通常都可以通过元编程来解决这类问题。

简而言之，元编程就是关于创建操作源代码的函数和类 (比如修改、生成或包装原来的代码)，主要技术是使用装饰器、类装饰器和元类。

其本质就是高阶函数 Higher Order Function：一个函数接收输入并将其原样输出，并且保持其逻辑关系。

在组件化编程中，高阶函数概念又演变为高阶组件：HOC - Higher Order Components。

参考函数式编程，函数第一公民 first class functions 中的定义，你可以把函数当成变量来使用。

通过 @Decorator 注解语法糖 Syntactic Sugar 引入并最终调用一个高阶函数。使用修饰函数时，就是加一层高阶函数封装它。因为高阶修饰函数可以任意添加使用而不会破坏程序结构，所有可以任意多次使用。

系统内置的修饰器：

➡ `@classmethod` Transform a method into a class method.
➡ `@staticmethod` Transform a method into a static method.
✅ `class property(fget=None, fset=None, fdel=None, doc=None)` Return a property attribute，`@property` decorator

函数、静态方法、类成员方法在本质上都是可被调用的代码块，但是这三者的调用方式有所差别，主要区别在于：

- 是否传递实例参数作为第一个参数；
- 是否传递类型对象作为第一个参数；

| Transformation | Called from an object | Called from a class |
|----------------|-----------------------|---------------------|
| function       | `f(obj, *args)`       | f(*args)            |
| staticmethod   | `f(*args)`            | f(*args)            |
| classmethod    | `f(type(obj), *args)` | f(cls, *args)       |


For example, the following code

    @f1(arg)
    @f2
    def func(): pass

is roughly equivalent to

    def func(): pass
    func = f1(arg)(f2(func))

Classes can also be decorated: just like when decorating functions,

    @f1(arg)
    @f2
    class Foo: pass


is roughly equivalent to

    class Foo: pass
    Foo = f1(arg)(f2(Foo))


类修饰器与函数修饰器同样，只不过差别在于：高阶函数接收的参数是类型对象。并且，要解除修饰器也很方便，只需要注解掉，或直接删除变可以了，没有复杂的依赖关系。

函数、类型修饰器实例演示：

```py
def hoc(h):
    print(f"hoc(): {type(h)}")
    return h

@hoc
class FD(object):
    """docstring for FD"""
    def __init__(self):
        super(FD, self).__init__()
        print("FD __init__")

@hoc
def fun():
    print("fun")

fun()
FD()

# Output:
# hoc(): <class 'type'>
# hoc(): <class 'function'>
# fun
# FD __init__
```

高阶函数不一定要使用 @hoc 这种形式，也可以定义一个返回 hoc 的函数，并使用 @hoc() 这种方法调用，同时可以传入参数。

```py
def rhoc(msg):
    print(f"rhoc: {msg}")
    return hoc

def hoc(h):
    print(f"hoc(): {type(h)}")
    return h

@rhoc("CLASS")
class FD(object):
    """docstring for FD"""
    def __init__(self):
        super(FD, self).__init__()
        print("FD __init__")

@rhoc("FUNCTION")
def fun():
    print("fun")
```

修饰类方法成员也一样，Python CookBook 上演示了如何将装饰器定义为类的一部分，或者将装饰器定义为类型。

在类中定义装饰器初看上去好像很奇怪，但是在标准库中有很多这样的例子。特别
的，@property 装饰器实际上是一个类，它里面定义了三个方法 getter(), setter(),
deleter() , 每一个方法都是一个装饰器。

函数式编程模块 functools 提供了一个包装函数，它会返回一个高阶函数：

```py
from functools import wraps
class A:
    # Decorator as an instance method
    def decorator1(self, func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print('Decorator 1')
            return func(*args, **kwargs)
        return wrapper

    # Decorator as a class method
    @classmethod
    def decorator2(cls, func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print('Decorator 2')
            return func(*args, **kwargs)
        return wrapper

# As an instance method
a = A()
@a.decorator1
def spam():
    pass

# As a class method
@A.decorator2
def grok():
    pass

spam()
grok()
```

## ==⚡ Decorator Class 修饰器类型
- 描述器使用指南 https://docs.python.org/zh-cn/3/howto/descriptor.html
- Descriptor HowTo Guide https://docs.python.org/3/howto/descriptor.html

参考官方描述器指南文档，或 Python CookBook 演示如何定义装饰器类型。

将装饰器定义成类通常是很简单的，为了将装饰器定义成一个实例，需要实现 __call__ __get__ 两个魔术方法。

一个描述器类型就是一个实现了三个核心的属性访问操作的类型，分别
为 __get__() 、 __set__() 和 __delete__() 这三个特殊的方法。

```py
# Descriptor protocol
descr.__get__(self, obj, type=None) -> value
descr.__set__(self, obj, value) -> None
descr.__delete__(self, obj) -> None
```

一个对象具有其中任一个方法就会成为描述器，从而在被当作对象属性时重写默认的查找行为。

例如，下面的代码定义了一个类，它在其他函数上放置一个简单的记录层，可以将它当做一个普通的装饰器来使用，在类里面或外面都可以。

```py
import types
from functools import wraps

class Profiled: # define a decorator class
    def __init__(self, taget): 
        # print(f"init -> taget: {taget}")
        wraps(taget)(self)  # make a __wrapped__ for target
        self.ncalls = 0

    def __call__(self, *args, **kwargs): 
        self.ncalls += 1 
        # args = (self,) + args if len(args)==1 else args
        # print(f"call -> args:{args} kw: {kwargs}")
        return self.__wrapped__(*args, **kwargs)

    def __get__(self, instance, cls): 
        # print(f"get -> instance: {instance} cls: {cls}")
        if instance is None: 
            return self 
        else: 
            return types.MethodType(self, instance)

@Profiled # Profiled.__init__(self, <function add>)
def add(x, y):
    return x + y

@Profiled # Profiled.__init__(self, <class Spam>)
class Spam:
    @Profiled # Profiled.__init__(self, <function Spam.bar>)
    def bar(self, x):
        print(self, x)

add(1,2)   # Profiled.__call__(self, 1, 2)
s = Spam() # Profiled.__call__(self)
s.bar(3)   # Profiled.__get__(self, instance, cls)(3)
```

但是这里还是有一些细节需要解释下，特别是当你想将它作用在实例方法上的时候。

首先，使用 `functools.wraps()` 函数的作用跟之前还是一样，将被包装函数的元信息复制到可调用实例中去。

其次，通常很容易会忽视上面的 get 方法。如果你忽略它，调用被装饰实例方法时出现很奇怪的问题。原来调用 __get__ 方法获取实例，会变成调用 __call__ 方法，丢失 types.MethodType 的包装，调用的就不是类成员方法。

虽然可以在 __call__ 方法中将其 self 传入，但是这个 self 是 Profiled 实例，而不是被修饰的类型实例。这也是 __get__ 方法与 __call__ 方法的差别之一。

当方法函数被调用，解析器会在一个类中查找，这时 __get__ 方法依据描述器协议被调用。在这里，get 的目的是创建一个绑定方法对象，最终会向这个方法传递 self 参数。为了确保绑定方法对象能被正确的创建，使用 type.MethodType() 手动创建一个绑定类型的方法成员。



## ==⚡ Function Annotations 类型注解

Python 是动态语言，变量随时可以被赋值，且能赋值为不同的类型，变量类型是在运行器决定的；

动态语言很灵活，但是这种特性也是弊端；

- 难发现潜在问题：由于没有静态类型检查阶段，直到运行期间问题才可能显现出来，或者线上运行时才能暴露出问题；
- 难确定参数类型：函数的使用者看到函数的时候，并不知道你的函数的设计，并不知道应该传入什么类型的数据；

如何解决这种动态语言定义的弊端呢？

增加文档 Documentation String，这只是一个惯例，不是强制标准，不能要求程序员一定为函数提供说明文档。函数定义更新了，文档未必同步更新；

Python 3.X 新增加特性（Feature），叫作函数注释 Function Annotations，还有使用三联引号包括的 docstrings 多行文本。

- 对函数的参数进行类型注解；
- 对函数的返回值进行类型注解；
- 只对函数参数做一个辅助的说明，并不对函数参数进行类型检查；
- 提供给第三方工具，做代码分析，发现隐藏的 bug；

```py
def add(x: int, y: int) -> int:
    '''
    :param x: int
    :param y: int
    :return: int
    '''
    return x + y

print(help(add))
print(add('hello', 'world'))
print(add.__annotations__)
# {'x': <class 'int'>, 'y': <class 'int'>, 'return': <class 'int'>}
```

函数注解的信息，保存在 __annotations__ 字典属性中，包括返回值类型的声明。假设要做位置参数的判断，无法和字典中的声明对应。


使用 inspect 模块提供的用于获取对象信息的函数，可以检查函数和类、类型信息。

通过 `signature(callable)` 方法获取函数签名，它包括了一个函数的信息，包括函数名，参数类型，它所在的类和名称空间及其他信息。

```py
import inspect

def add(x: int, y: int, *args, **kwargs) -> int:
    return x + y

sig = inspect.signature(add)

print(f'''
      signature  = {sig}
    return type  = {sig.return_annotation} # <class 'type'>
         params  = {sig.parameters} # OrderedDict

     parameters    <class 'inspect.Parameter'>:
              x  = {type(sig.parameters['y'])}
              y  = {type(sig.parameters['y'])}
           args  = {type(sig.parameters['args'])}
         kwargs  = {type(sig.parameters['kwargs'])}

    annotations    <class 'type'>
   x annotation  = {type(sig.parameters['x'].annotation)}
   y annotation  = {type(sig.parameters['y'].annotation)}
args annotation  = {type(sig.parameters['args'].annotation)}
kwargs annotation= {type(sig.parameters['kwargs'].annotation)}

isfunction(add)     = {inspect.isfunction(add)!s:8}     # 判断是否是函数；
ismethod(add)       = {inspect.ismethod(add)!s:8}       # 判断是否是类的方法
isgenerator(add)    = {inspect.isgenerator(add)!s:8}    #  判断是否是生成器对象；
isgeneratorfunction(add) = {inspect.isgeneratorfunction(add)!s:8}    # 判断是否是生成器函数；
isclass(add)        = {inspect.isclass(add)!s:8}        #  判断是否是类；
ismodule(inspect)   = {inspect.ismodule(inspect)!s:8}   # 判断是否是模块
isbuiltin(print)    = {inspect.isbuiltin(print)!s:8}    #  判断是否是内建对象
    ''')
```

其它更多的 is 类型判断函数参考模块帮助文档。

只读元组对象 parameter 包含了参数信息：

- ↪ name    参数的名字；
- ↪ annotation  参数的注解，可能没有定义；
- ↪ default     参数的缺省值，可能没有定义；
- ↪ empty   用来标记 default 属性或者注释 annotation 属性的空值；
- ↪ kind    就是形参的类型
    - *POSITIONAL_ONLY* 指示参数是一个位置参数
    - *POSITIONAL_OR_KEYWORD* 指示参数可以作为关键字或者位置参数两种方式提供；
    - *VAR_POSITIONAL* 可变位置参数，对应 `*args`； 
    - *KEYWORD_ONLY* 关键字参数，对应 `*args` 之后出现的非可变关键字参数；
    - *VAR_KEYWORD* 可变关键字参数，对应 `**kwargs`；


## ==⚡ `*args` & `**kwargs` 可变长参数
- [The Python Tutorial](tutorial\index.rst)
- [The Python Tutorial - Keyword Arguments](tutorial\controlflow.rst)
- [The Python Language Reference](reference\index.rst)
- [The Python Language Reference 6.3. Primaries](reference\expressions.rst#Calls)
- [The Python Language Reference 8.6. Function definitions](reference\compound_stmts.rst#Function_definitions)

Changed in version 3.5: 

Function calls accept any number of * and ** unpackings, positional arguments may follow iterable unpackings ( * ), and keyword arguments may follow dictionary unpackings ( ** ). Originally proposed by PEP 448.

```py
a= (1,2,3,4)
b, *c = a # b = 1  c = [2, 3, 4]
print(b,c)
```
所谓 positional argument 定位参数，是指用相对位置指代参数。

Python 采用可命名参数的函数调用方式，即调用函数时，可以使用参数名来指定要传递的数据。关键字参数 Keyword arguments 见名知意使用关键字指代参数。位置参数或者按顺序传递参数，或者使用名字，自然使用名字时，对顺序没有要求。

可变长参数传递的两种方式、两种数据类型：

- `*args` 列表传递，用在函数参数列表以接收任意数量的非命名参数，用在调用函数时将 *tuple* 扩展开来；
- `*kwargs` 字典传递，用在函数参数列表以接收任意数量的命名参数，用在调用函数时将 *dict* 扩展开来；

可变长参数函数方法中，`*args` 用来将传入参数打包成 tuple 给函数体调用，`**kwargs` 打包关键字参数成 dict 给函数体调用，这是 Python 特有的语法结构。

定义函数时，参数列表必需按：非命名参数、`*args`、命名参数和、`**kwargs` 这样的位置必须保持以下这种顺序，不能打乱，可以省略不传，但参形式不能乱放。args 或 kwargs 这个名字不重要，重点是星号的数量。

```py
def variant(arg1, arg2, *args, kwarg1 = "ABC", kwarg2 = "XYZ", **kwargs):
    print(arg1, arg2, kwarg1, kwarg2) # Append Prepend xyz abc
    print(args)   # print 1 argument: <class 'tuple'>
    print(kwargs) # print 1 argument: <class 'dict'>
    print(*args)   # print 4 arguments: "Override", "more", "and", "more over"
    print(*kwargs) # print 5 keys: k1 k2 k3 morekwargs andmore
    print_kwargs(**kwargs)

def print_kwargs(**dict):
    for key in dict.keys():
        print(f"{key} = {dict[key]}")

a = "Append"
b = "Prepend"
c = "Override"
keyValues = {"k1":"Key one", "k2":"Key two", "k3":"Key three"}
variant(
    a, b, c,   # Ok: positional argument at very first
    kwarg2="abc", kwarg1="xyz", 
    # a, b, c, # Error: positional argument follows keyword argument
    *["more", "and", "more over"], # OK: iterable argument unpacking at first,
    **keyValues,                   # Ok: then keyword argument unpacking
    morekwargs="key", andmore="at last")
```

此外，Python 引入两个特殊参数，用来标记 `*args` 和 `**kwargs` 位置分隔：

```sh
def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
      -----------    ----------     ----------
        |             |                  |
        |        Positional or keyword   |
        |                                - Keyword only
         -- Positional only
```

使用这两个特殊参数来控制函数参数如何设置，默认是 positional-or-keyword，Keyword parameters 也叫做命名参数。


## ==⚡ CamelHump vs. Underscores Naming

驼峰命名和下线命名是两种代码编写习惯，目的是为了提高代码可读性，降低出错率，没有哪个好与坏的区别。

```py
class CamelHumPPpPostfix():
    def underScoreName(self):
        name = self.__class__.__name__
        underScores = name[0].lower()
        lastUpper = False
        for c in name[1:]:
            if c.isupper() and not lastUpper:
                underScores += '_'
            underScores += c.lower()
            lastUpper = c.isupper()
        if underScores.endswith("_postfix"):
            underScores = underScores[1:-8]
        return underScores

varCamel = CamelHumPPpPostfix()
print(varCamel.underScoreName())
```



## ==⚡ Comprehension 推导式
- [The Python Tutorial](tutorial\index.rst)
- [The Python Language Reference](reference\index.rst)
- [Comprehensions](reference\expressions.rst)
- Python-3.10.2\Doc\library\ast.rst Comprehensions
- Python-3.10.2\Doc\tutorial\datastructures.rst List_Comprehensions
- Python-3.10.2\Doc\whatsnew\2.0.rst List_Comprehensions
- Python-3.10.2\Doc\whatsnew\3.6.rst PEP530


推导式又称解析式是 Python的一种独有特性，推导式可以方便地从一个数据序列构建另一个新的数据序列的结构体。 共有三种推导，在 Python 2/3 中都有支持：

- 列表(list)推导式
- 字典(dict)推导式
- 集合(set)推导式

一旦你知道了使用列表推导式的诀窍，你就能轻易使用任意一种推导式了。

列表推导式的结构是在一个中括号里包含一个表达式，然后是一个 for 语句，然后是任意个 for/if 语句。表达式 out_exp 可以是任意的，意思是你可以在列表中放入任意类型的对象，返回结果将是一个新的列表。

    variable = [out_exp for out_exp in input_list if out_exp == 2]

    multiples = [i for i in range(30) if i % 3 is 0]
    # [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

这将对快速生成列表非常有用，比 filter 函数还好用。列表推导式在有些情况下超赞，特别是当你需要使用for循环来生成一个新列表。以下例子就是一个对比：

    squared = []
    for x in range(10):
        squared.append(x**2)

    # Comprehension Style
    squared = [x**2 for x in range(10)]


字典推导和列表推导的使用方法是类似的：

    mcase = {'a': 10, 'b': 34, 'A': 7, 'Z': 3}

    mcase_frequency = {
        k.lower(): mcase.get(k.lower(), 0) + mcase.get(k.upper(), 0)
        for k in mcase.keys()
    }

    # mcase_frequency == {'a': 17, 'z': 3, 'b': 34}

在上面的例子中我们把同一个字母但不同大小写的值合并起来了。你还可以快速对换一个字典的键和值：

    {v: k for k, v in some_dict.items()}


集合推导式跟列表推导式也是类似的，唯一的区别在于它使用大括号{}：

    squared = {x**2 for x in [1, 1, 2]}
    print(squared)
    # Output: {1, 4}

混合写法：

```py
view_ids = sublime_api.window_views(window_id, True)
views = [{ "view": View(x), "file": View(x).file_name()} for x in view_ids]

RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()
SUITS = '♣ ♢ ♡ ♠'.split()

cards = [(r, s) for s in SUITS for r in RANKS]
print(cards)
```


## ==⚡ Dependence Inject & IoC

在 Python 里一切事物皆为对象，而所有的类都是对象，默认是由 *type* 创建，创建类的执行流程：

- 类例化时会调用 *type* 类的 `__call__` 方法获取类实列。
- 在 call 方法里调用 `__new__` 方法负责创建对象。
- 执行类实例的 `__init__` 方法进行初始化。

了解其中的原理，我们就可以在 __call__ 里面大做文章啦。 可变长参数函数方法中，`*args` 用来将参数打包成 tuple 给函数体调用，`**kwargs` 打包关键字参数成 dict 给函数体调用，这是 Python 特有的语法结构。参数 arg、`*args`、`**kwargs` 位置必须保持这种顺序，不能把 arg 这种常规参数放到后边。

```py
class MyType(type):

    def __call__(cls, *args, **kwargs):
        obj = cls.__new__(cls, *args, **kwargs)
        obj.__init__(*args, **kwargs)
        return obj

class Foo(metaclass=MyType):

    def __init__(self, arg):
        self.name = 'alex ' + arg

f = Foo("xyz")
print(f.name)
```

将类实列当函数使用时也会执行 __call__ 这个魔术方法，实现这个方法即表示对象为 callable。在一般的类实例中，如 obj() 这种函数式表达中会自动调用，但是当它定义在 metaclass 属性指定的类，就不会被自动，除非 metaclass 类继承了 *type* 类型，因为需要通过它来自定 metaclass。

```py
class MyClass:
    def __init__(self):
        print("I was called!")
    def __call__(self):
        print("Uhm, was I called?")

obj = MyClass() #==> __init__()
obj()           #==> __call__()
```

依赖注入 DI 是控制反转 IoC 的一种实现，本质就是通过组合实现解耦，减少依赖性，原来以某个具体的值或对象传入到内部改成以参数的形式传入。

```py
class IOC(type):
 
    __relation = {}
 
    @staticmethod
    def register(cls, value):
        IOC.__relation[cls] = value

    @staticmethod
    def exist(cls):
        return True if cls in IOC.__relation else False

    @staticmethod
    def get(cls):
        return IOC.__relation[cls]

    # def __call__(cls, bases, classdict): #==> for IOC() or IOC(type)
    def __call__(cls, *args, **kwargs):
        print("call: ", cls, args, kwargs)
        obj = cls.__new__(cls, *args, **kwargs)
        arg_list = list(args)
        if IOC.exist(cls):
            value = IOC.get(cls)
            arg_list.append(value)
        obj.__init__(*arg_list,**kwargs)
        return obj

class Eagle(metaclass=IOC):

    def __init__(self, fly):
        fly()


class Ostrich(metaclass=IOC):

    def __init__(self, run):
        run()

IOC.register(Eagle, lambda act="fly": print(act))
IOC.register(Ostrich, lambda act="run": print(act))

Eagle()
Ostrich()
```

一个 metaclass 继承与不继承 type 类，其 __init__ 方法接收的参数出不同：

```py
# def __init__(cls, clsname, bases, classdict): #==> for IOC(type)
# def __init__(self, clsname, bases, classdict): #==> for IOC()
def __init__(self, *args, **kwds):
    self.__init__ = self.__init_ori__
    self.__init_ori__ = None
    self.__init__(IOC.get(self.__class__))

def __new__(metacls, cls, bases, classdict, **kwds):
    classdict['__init_ori__'] = classdict['__init__']
    classdict['__init__'] = metacls.__init__
    c = type(cls, bases, classdict)
    return c
```



## ==⚡ Style Guide for Python Code - PEP 0008 编码规范指南
- Python Enhancement Proposals (PEPs) https://www.python.org/dev/peps/
- Style Guide for Python Code PEP 0008 https://www.python.org/dev/peps/pep-0008

👉 缩进

4 个空格的缩进（编辑器都可以完成此功能），不使用 Tap，更不能混合使用 Tap 和空格。
每行最大长度 79，换行可以使用反斜杠，最好使用圆括号。换行点要在操作符的后边敲回车。
类和 top-level 函数定义之间空两行；类中的方法定义之间空一行；函数内逻辑无关段落之间空一行；其他地方尽量不要再空行。

👉 文档编排

模块内容的顺序：模块说明和 docstring—import—globals&constants—其他定义。其中import部分，又按标准、三方和自己编写顺序依次排放，之间空一行
不要在一句 import 中多个库，比如 import os, sys 不推荐
如果采用 from XX import XX 引用库，可以省略‘module.’，都是可能出现命名冲突，这时就要采用 import XX

👉 空格的使用

各种右括号前不要加空格。
逗号、冒号、分号前不要加空格。
函数的左括号前不要加空格。如Func(1)
序列的左括号前不要加空格。如list[2]
操作符左右各加一个空格，不要为了对齐增加空格
函数默认参数使用的赋值符左右省略空格
不要将多句语句写在同一行，尽管使用‘；’允许
if/for/while语句中，即使执行语句只有一句，也必须另起一行

👉 Comment 注释

总体原则，错误的注释不如没有注释。所以当一段代码发生变化时，第一件事就是要修改注释！注释必须使用英文，最好是完整的句子，首字母大写，句后要有结束符，结束符后跟两个空格，开始下一句。如果是短语，可以省略结束符。

块注释，在一段代码前增加的注释。在‘#’后加一空格。段落之间以只有‘#’的行间隔。比如：

    # Description : Module config.
    # 
    # Input : None
    #
    # Output : None

行注释，在一句代码后加注释，比如：

    x = x + 1 # Increment x

文档描述、块注解，使用三连引号

为所有的共有模块、函数、类、方法写 docstrings；非共有的没有必要，但是可以写注释（在def的下一行）。
单行注释请参考如下方式

    def kos_root():
        """Return the pathname of the KOS root directory."""
        global _kos_root
        if _kos_root: return _kos_root
        ...


👉 命名规则

**总体原则，新编代码必须按下面命名风格进行，现有库的编码尽量保持风格。绝不要单独使用例如大写的 I 和大写的 O**

模块命名尽量短小，使用全部小写的方式，可以使用下划线。
包命名尽量短小，使用全部小写的方式，不可以使用下划线。
类的命名使用CapWords的方式，模块内部使用的类采用_CapWords的方式。
异常命名使用CapWords+Error后缀的方式。
全局变量尽量只在模块内有效，类似C语言中的static。实现方法有两种，一是all机制;二是前缀一个下划线。
函数命名使用全部小写的方式，可以使用下划线。
常量命名使用全部大写的方式，可以使用下划线。
类的属性（方法和变量）命名使用全部小写的方式，可以使用下划线。
类的属性有3种作用域public、non-public和subclass API，可以理解成C++中的public、private、protected，non-public属性前，前缀一条下划线。
类的属性若与关键字名字冲突，后缀一下划线，尽量不要使用缩略等其他方式。
为避免与子类属性命名冲突，在类的一些属性前，前缀两条下划线。比如：类Foo中声明__a,访问时，只能通过`Foo._Foo__a`，避免歧义。如果子类也叫Foo，那就无能为力了。
类的方法第一个参数必须是self，而静态方法第一个参数必须是cls。

👉 编程建议

编码中考虑到其他python实现的效率等问题，比如运算符‘+’在CPython（Python）中效率很高，都是Jython中却非常低，所以应该采用.join()的方式。
尽可能使用 is，is not 取代 ==，比如 if x is not None 要优于 if x
使用基于类的异常，每个模块或包都有自己的异常类，此异常类继承自Exception。
常中不要使用裸露的 except，except 后跟具体的 exceptions 例如

    try:
        ...
    except Exception as ex:
        print ex

异常中try的代码尽可能少。

使用startswith() and endswith()代替切片进行序列前缀或后缀的检查。

    foo = 'abc000xyz'

    if foo.startswith('abc') and foo.endswith('xyz'):
        print 'yes'
    else:
        print 'no'

    #而如下的方式不提倡
    if foo[:3]=='abc' and foo[-3:]=='xyz':
        print 'yes'
    else:
        print 'no'

使用isinstance()比较对象的类型。比如:

    foo = 'abc000xyz'

    # 提倡
    print isinstance(foo,int) # false

    # 不提倡
    print type(foo) == type('1') #true

判断序列空或不空，有如下规则：

    foo = 'abc000xyz'

    if foo:
        print "not empty"
    else:
        print "empty"

    #不提倡使用如下
    if len(foo):
        print "not empty"
    else:
        print "empty"

二进制数据判断使用 if boolvalue 的方式。




# =🚩 Classes & OOP
- Python 3.10.2 Documentation » The Python Language Reference » 3. Data model 
- Python 3.10.2 Documentation » The Python Tutorial » 9. Classes 
- PEP 636 – Structural Pattern Matching: Tutorial https://www.python.org/dev/peps/pep-0636
- [Python入门之类(class)](https://www.cnblogs.com/chengd/articles/7287528.html)

Python OOP 第一印象：类型属性与实例属性：

```py
class Point:
    x:int = 1 # Class variables
    y:int = 1

    def __init__(self, x,y):
        self.X = x # Instance variables
        self.Y = y

    def __str__(self):
        return f"<Point xy=({self.x}, {self.y}) XY=({self.X}, {self.Y})>"

p1 = Point(1,2)
p2 = Point(3,4)

print(p1, p2)
Point.x = 2
Point.y = 3
print(p1, p2)
# Output
# <Point xy=(1, 1) XY=(1, 2)> <Point xy=(1, 1) XY=(3, 4)>
# <Point xy=(2, 3) XY=(1, 2)> <Point xy=(2, 3) XY=(3, 4)>


def where_is(p):
    match p:
        case Point(x=0, y=y):
            print(f"Position at y={y}")
        case Point(x=x, y=0):
            print(f"Position at x={x}")
        case Point(x=x, y=y):
            print(f"Position at x={x} y={y}")
        case _:
            print(f"Unknow position {_}")

where_is(Point(0,1))
where_is(Point(1,0))
where_is(Point(1,2))
where_is((1,2))
# Output
# Position at x=2 y=3
# Position at x=2 y=3
# Position at x=2 y=3
# Unknow position None
```

示范代码的第二部分是模式匹配语句 match，在 Erlang 语言中，这是非常基本的编程思想，通过两者的模式相似度匹配变量，而不是直接进行变量赋值。


**类(Class)** 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。
**类变量** 类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用。
**数据成员** 类变量或者实例变量用于处理类及其实例对象的相关的数据。
**方法重写** 如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。
**实例变量** 定义在方法中的变量，只作用于当前实例的类。
**继承** 即一个派生类（derived class）继承基类（base class）的字段和方法。例如，设计一个Dog类型的对象派生自Animal类，Dog也就是一个Animal。
**实例化** 创建一个类的实例，类的具体对象。
**方法** 类中定义的函数。
**对象** 通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。

Python 特殊的类属性

__dict__ : 类的属性（包含一个字典，由类的数据属性组成）
__doc__ : 类的文档字符串
__name__: 类名
__module__: 类定义所在的模块（类的全名是`__main__.className`，如果类位于一个导入模块mymod中，那么`className.__module__` 等于 mymod）
__bases__ : 类的所有父类构成元素（包含了一个由所有父类组成的元组）

Special attributes:

__doc__ The function's documentation string, or None if unavailable; not inherited by subclasses Writable 
__name__ The function's name Writable 
__qualname__ The function's qualified name New in version 3.3. Writable
__module__ The name of the module the function was defined in, or None if unavailable. Writable 
__defaults__ A tuple containing default argument values for those arguments that have defaults, or None if no arguments have a default value Writable 
__code__ The code object representing the compiled function body. Writable 
__globals__ A reference to the dictionary that holds the function's global variables for the global namespace of the module in which the function was defined. Read-only 
__dict__ The namespace supporting arbitrary function attributes. Writable 
__closure__ None or a tuple of cells that contain bindings for the function's free variables. See below for information on the cell_contents attribute. Read-only 
__annotations__ A dict containing annotations of parameters. The keys of the dict are the parameter names, and 'return' for the return annotation, if provided. Writable 
__kwdefaults__ A dict containing defaults for keyword-only parameters. Writable 


和其它编程语言相比，Python 在尽可能不增加新的语法和语义的情况下加入了类机制。类就是一个模板，模板里可以包含多个函数，函数里实现一些功能。对象则是根据模板创建的实例，通过实例对象可以执行类中的函数。

面向对象的三大特性是指：封装、继承和多态，类这种数据类型也称为抽象数据类型 ADT Abstract Data Type。

一、封装

封装，顾名思义就是将内容封装到某个地方，以后再去调用被封装在某处的内容。

二、继承

继承，面向对象中的继承和现实生活中的继承相同，即：子可以继承父的内容。

例如动物：

　　猫可以：喵喵叫、吃、喝、拉、撒
　　狗可以：汪汪叫、吃、喝、拉、撒

猫狗拥有动物的共同特性。

三、多态 

 Pyhon不支持Java和C#这一类强类型语言中多态的写法，但是原生多态，其Python崇尚“鸭子类型”。



## ==⚡ Dynamically Creating Classes with type

```py
# Dynamically Creating Classes with type
# ✅ class type(object)
# ✅ class type(name, bases, dict, **kwds)

import sys
class Foobar:
    def __init__(self, what):
        print({"foobar":what})
    pass

def str_to_class(str):
    return getattr(sys.modules[__name__], str)

T1 = str_to_class("Foobar")
T2 = type(Foobar)
print (T1, T2)
print (T1("What?"),T2("n"))
# <class '__main__.Foobar'> <class 'type'>
# {'foobar': 'What?'}
# <__main__.Foobar object at 0x6fffffef19a0> <class 'str'>
# print(getattr(T2, "Foobar"))

num = 1; s = "something";
print(Foobar)
print(type(num), type(s), type(Foobar)) 
print(type(type(num)), type(type(s)), type(type(Foobar))) 
# <class '__main__.Foobar'>
# <class 'int'>  <class 'str'>  <class 'type'>
# <class 'type'> <class 'type'> <class 'type'>

foo = type("Foo", (), {})
print(foo, foo())
# <class '__main__.Foo'> <__main__.Foo object at 0x6fffffef1e80>

def Rob_init(self, name):
    self.name = name

Robot = type("Robot", 
          (), # bases in a tuple then attributes in a dict
          {"counter":0, 
           "__init__": Rob_init,
           "sayHello": lambda self: "Hi, I am " + self.name})

print(Robot("Rob").sayHello()) # Hi, I am Rob
```


## ==⚡ Class Property

类属性 Property 即包含读写器的属性，getter setter 用于控制属性数据的存取：

```py
class PP(object):
    """docstring for PP"""
    def __init__(self, x):
        super(PP, self).__init__()
        self._x = x

    def x(self):
        return self._x
        pass
        
    def setx(self, value:int):
        self._x = value
        pass

    def delx(self):
        print(f"delx {self._x}")
        del self._x
        pass

    x = property(x, setx, delx, "I'm the 'x' property")

pp = PP(100)
print(pp.x)
del pp.x    # delx 100
print(pp.x) # AttributeError: x
```

在子类中扩展一个 property 可能会引起很多不易察觉的问题，因为一个 property
其实是 getter、setter 和 deleter 方法的集合，而不是单个方法。特殊是在方法中使用 super() super(SubPerson, SubPerson) 来调用父类的实现时，参考 Python Cookbook。

Property 作为函数修饰器方式使用，注意：

- 只定义 getter 表示一个只读属性。
- @property @x.setter @x.deleter 修饰的方法名称要一致，不一致就不是同一个属性。

```py
class PP(object):
    """docstring for PP"""
    def __init__(self, x):
        super(PP, self).__init__()
        self._x = x

    @property # Turns x method into a getter
    def x(self):
        """I'm the 'x' property"""
        return self._x
        pass

    @x.setter # Turns x method into a setter
    def x(self, value:int):
        self._x = value
        pass

    @x.deleter # turns x method into a deleter
    def x(self):
        print(f"delx {self._x}")
        del self._x
        pass


pp = PP(100)
pp.x = 99
del pp.x    # delx 100
# if @x.setter decorates setx:
# AttributeError: can't set attribute
print(pp.x)
# if @x.deleter decorates delx:
# AttributeError: can't delete attribute
print(pp.x) 
# @property: AttributeError: 'PP' object has no attribute '_x'
```


## ==⚡ Magic Methods/Attributes
- The Python Language Reference » 3. Data model - 3.1. Objects, values and types

参考 Python 官方参考手册 3. Data model -> 3.3 Special method names

- Basic customization: Python-3.10.2\Doc\reference\datamodel.rst
- Programming FAQ: Python-3.10.2\Doc\faq\programming.rst

3.3.1. Basic customization
3.3.2. Customizing attribute access
3.3.2.1. Customizing module attribute access
3.3.2.2. Implementing Descriptors
3.3.2.3. Invoking Descriptors
3.3.2.4. __slots__
3.3.2.4.1. Notes on using __slots__
3.3.3. Customizing class creation
3.3.3.1. Metaclasses
3.3.3.2. Resolving MRO - Method Resolution Order 算法 entries
3.3.3.3. Determining the appropriate metaclass
3.3.3.4. Preparing the class namespace
3.3.3.5. Executing the class body
3.3.3.6. Creating the class object
3.3.3.7. Uses for metaclasses
3.3.4. Customizing instance and subclass checks
3.3.5. Emulating generic types
3.3.5.1. The purpose of __class_getitem__
3.3.5.2. __class_getitem__ versus __getitem__
3.3.6. Emulating callable objects
3.3.7. Emulating container types
3.3.8. Emulating numeric types
3.3.9. With Statement Context Managers
3.3.10. Customizing positional arguments in class pattern matching
3.3.11. Special method lookup

.. method:: object.__new__(cls[, ...])

   .. index:: pair: subclassing; immutable types

   Called to create a new instance of class *cls*.  :meth:`__new__` is a static
   method (special-cased so you need not declare it as such) that takes the class
   of which an instance was requested as its first argument.  The remaining
   arguments are those passed to the object constructor expression (the call to the
   class).  The return value of :meth:`__new__` should be the new object instance
   (usually an instance of *cls*).

   Typical implementations create a new instance of the class by invoking the
   superclass's :meth:`__new__` method using ``super().__new__(cls[, ...])``
   with appropriate arguments and then modifying the newly-created instance
   as necessary before returning it.

   If :meth:`__new__` is invoked during object construction and it returns an
   instance of *cls*, then the new instance’s :meth:`__init__` method
   will be invoked like ``__init__(self[, ...])``, where *self* is the new instance
   and the remaining arguments are the same as were passed to the object constructor.

   If :meth:`__new__` does not return an instance of *cls*, then the new instance's
   :meth:`__init__` method will not be invoked.

   :meth:`__new__` is intended mainly to allow subclasses of immutable types (like
   int, str, or tuple) to customize instance creation.  It is also commonly
   overridden in custom metaclasses in order to customize class creation.


.. method:: object.__init__(self[, ...])

   .. index:: pair: class; constructor

   Called after the instance has been created (by :meth:`__new__`), but before
   it is returned to the caller.  The arguments are those passed to the
   class constructor expression.  If a base class has an :meth:`__init__`
   method, the derived class's :meth:`__init__` method, if any, must explicitly
   call it to ensure proper initialization of the base class part of the
   instance; for example: ``super().__init__([args...])``.

   Because :meth:`__new__` and :meth:`__init__` work together in constructing
   objects (:meth:`__new__` to create it, and :meth:`__init__` to customize it),
   no non-``None`` value may be returned by :meth:`__init__`; doing so will
   cause a :exc:`TypeError` to be raised at runtime.



在 Python 中，所有以 `__` 双下划线包起来的方法，都统称为 Magic Method 『魔术方法』。例如类的初始化方法 `__init__`，通过此方法我们可以定义一个对象的初始化操作。还有一个更优先执行的实列化方法 `__new__` 会在类实例化时执行，两个结合相当 C++ 的构造函数。在对象生命周期调用结束时，`__del__` 方法会被调用，可以理解为构析函数。

下面通过代码的看一看这三个方法:

    from os.path import join 

    class FileObject: 
        '''file demo'''
        def __init__(self, filepath='~', filename='sample.txt'): 
            self.file = open(join(filepath, filename), 'r+') 
        def __del__(self): 
            self.file.close() 
            del self.file

Python 可以通过魔术方法来完成封装，控制属性访问，实现私有成员:

    __getattr__(self, name)
    __setattr__(self, name, value)
    __delattr__(self, name)
    __getattribute__(self, name)

`__getattr__`定义当用户试图获取一个不存在的属性时的行为，这适用于对普通拼写错误的获取和重定向，对获取一些不建议的属性时候给出警告或者处理一个 AttributeError 。只有当调用不存在的属性的时候会被返回。

`__setattr__` 是一个封装属性的解决方案。无论属性是否存在，它都允许你定义对对属性的赋值行为，以为这你可以对属性的值进行个性定制。实现时要避免无限递归的错误。

`__delattr__` 是删除一个属性，实现时也要防止无限递归现象发生。

`__getattribute__`定义了你的属性被访问时的行为，相比较，`__getattr__`只有该属性不存在时才会起作用。因此，在支持`__getattribute__`的 Python 版本调用`__getattr__`前必定会调用`__getattribute__`。`__getattribute__`同样要避免无限递归的错误。需要提醒的是，最好不要尝试去实现它，因为很少见到这种做法，而且很容易出bug。

    #  错误用法 
    def __setattr__(self, name, value): 
        self.name = value 
        # 每当属性被赋值的时候(如self.name = value)， ``__setattr__()`` 会被调用，这样就造成了递归调用。 
        # 这意味这会调用 ``self.__setattr__('name', value)`` ，每次方法会调用自己。这样会造成程序崩溃。 

    #  正确用法 
    def __setattr__(self, name, value): 
        self.__dict__[name] = value  # 给类中的属性名分配值 

Python 的魔术方法很强大，但是用时却需要慎之又慎，了解正确的使用方法非常重要。


创建自定义容器

有很多方法可以让你的 Python 类行为像内置容器类型如 list、dict、tuple、string 等等。Python 的容器类型分为可变类型如 list、dict 和不可变类型如 string、tuple。区别在于，不可变容器一旦赋值后，不可对其中的某个元素进行修改。

实现不可变容器的只用到 `__len__` 和 `__getitem__`。可变容器则还额外需要 `__setitem__` 和 `__delitem__`。可迭代对象需要定义 `__iter__`，它需要返回一个迭代器。迭代器必须遵循迭代器协议，需要有 `__iter__` 返回它本身 和 next() 方法。

    __len__(self): 返回可变和不可变容器的长度。
    __getitem__(self, key): 定义当某一项被访问时，使用self[key]所产生的行为。键不存在或类型错误将产生KeyError/TypeError。
    __setitem__(self, key, value): 当你执行 self[key] = value 时调用该方法。
    __delitem__(self, key): 删除时如 del self[key] 执行。无效的键导致抛出异常。
    __iter__(self): 返回一个容器迭代器，如内置的iter()方法被调用时，使用 for-in 循环时。
    __reversed__(self): 实现当reversed()被调用时的行为。应该返回序列反转后的版本。
    __contains__(self, item): 调用 in/not in 来测试成员是否存在的时候所产生的行为。
    __missing__(self, key): 字典类型会有该方法，它定义了key如果在容器中找不到时触发的行为。

反射相关魔术方法:

    __instancecheck__(self, instance): 　　检查一个实例是不是你定义的类的实例
    __subclasscheck__(self, subclass): 　　检查一个类是不是你定义的类的子类


有一个魔术方法可以让类的实例的行为表现的像函数一样，你可以调用它们，将一个函数当做一个参数传到另外一个函数中等等。

    __call__(self, [args...]):

允许一个类的实例像函数一样被调用，意味着 `x()` 与 `x.__call__()` 是相同的。注意其参数可变，你可以定义为其他想要的函数形式，无论有多少个参数。在那些类的实例经常改变状态的时候会非常有效。调用这个实例是一种改变这个对象状态的直接和优雅的做法:

    class Entity:

        def __init__(self, size, x, y):
            self.x, self.y = x, y
            self.size = size

        def __call__(self, x, y):
            """
            类实列当函数使用时执行
            """
            self.x, self.y = x, y
            return self


    e = Entity(1, 2, 3)
    e(3, 4)


上下文管理

with 声明是从 Python 2.5 开始引进的关键词，通常和文件句柄一起使用以保证文件正确自动关闭，而不必关心留意其关闭过程:

    with open('foo.txt') as bar: 
        # do something with bar

在 with 声明可以结合到类对象的开始操作和退出操作，还能对异常进行处理，只需要实现 `__enter__` 和 `__exit__` 两个魔术方法。

    __enter__(self):  当使用 with 语句的时候，会话管理器在块被初始创建时调用。其返回值与 with 语句的目标或者 as 后的名字绑定。
    __exit__(self, exception_type, exception_value, traceback): with 码块被执行或者终止后，由会话管理器调用。

退出方法可以被用来处理异常、执行清理工作或做一些代码块执行完毕之后的日常工作。如果代码块执行成功，exception_type，exception_value，和 traceback 将会为 None。否则，你可以选择处理这个异常或者是直接交给用户处理。如果你想处理这个异常的话，请确保 `__exit__` 在所有语句结束之后返回 True。如果你想让异常被会话管理器处理的话，那么就让其产生该异常。


描述符 Descriptor

所谓描述符就是通过具有描述符特征的类型封装类数据成员，这样获取、设置以及删除的数据成员时的操作就会由描述符的魔术方法代理。引入描述符封装数据成员的那个类就是 owner，instance 就时那个类的实列。一个描述符类型需要用到以下三个魔术函数实现：

    __get__(self, instance, owner): 描述符的值被取得的时候的行为，instance 是拥有该描述符对象的一个实例。owner是拥有者本身。
    __set__(self, instance, value): 描述符的值被改变的时候的行为，instance 是拥有该描述符类的一个实例。value是要设置的值。
    __delete__(self, instance): 描述符的值被删除的时候的行为，instance 是拥有该描述符对象的一个实例。

如果只定义了 `__get__` 方法，而没有定义 `__set__`, `__delete__` 方法，则认为是非数据描述符； 反之，实现`__get__`、 `__set__` 则成为数据描述符。

Python 获取成员时按以下顺序进行查找：

- `__getattribute__`， 无条件调用；
- 数据描述符，由 `__getattribute__` 触发调用，若人为的重载了该方法，可能会无法调用描述符；
- 实例对象的字典，若与描述符对象同名，会被覆盖哦；
- 类的字典；
- 非数据描述符 `__get__`；
- 父类的字典；
- `__getattr__` 方法；

以下是一个稍微有点用的实列，可以将数值在标准单位米、英制英尺之间转换：


```py
class Meter(object):
    """
    descriptor for meter
    """
    def __init__(self, value=0.0):
        self.value = float(value)

    def __get__(self, instance, owner):
        return str(self.value) + " Meter"

    def __set__(self, instance, value):
        self.value = float(value)


class Foot(object):
    """
    descriptor for foot
    """
    def __get__(self, instance, owner):
        return str(float(instance.meter.split(" ")[0]) * 3.2808) + " ft"

    def __set__(self, instance, value):
        instance.meter = float(value) / 3.2808


class Distance(object):
    """
    use descriptors in this demo
    """
    meter = Meter(10)
    foot = Foot()


d = Distance()
d.meter = 1  # Meter.__set__(...)
d.foot = 1   # Foot.__set__(...)
print("Meter.__get__(): %s" % d.meter)
print(" Foot.__get__(): %s" % d.foot)
```


复制

有时候，尤其是当你在处理可变对象时，你可能想要复制一个对象，然后对其做出一些改变而不希望影响原来的对象。这就是Python的copy所发挥作用的地方。

    __copy__(self)

定义了当对你的类的实例调用copy.copy()时所产生的行为。copy.copy()返回了你的对象的一个浅拷贝——这意味着，当实例本身是一个新实例时，它的所有数据都被引用了——例如，当一个对象本身被复制了，它的数据仍然是被引用的（因此，对于浅拷贝中数据的更改仍然可能导致数据在原始对象的中的改变）。

    __deepcopy__(self, memodict={})

定义了当对你的类的实例调用copy.deepcopy()时所产生的行为。copy.deepcopy()返回了你的对象的一个深拷贝——对象和其数据都被拷贝了。memodict是对之前被拷贝的对象的一个缓存——这优化了拷贝过程并且阻止了对递归数据结构拷贝时的无限递归。当你想要进行对一个单独的属性进行深拷贝时，调用copy.deepcopy()，并以memodict为第一个参数。


用于比较的魔术方法

    __cmp__(self, other)    是比较方法里面最基本的的魔法方法
    __eq__(self, other) 定义相等符号的行为，==
    __ge__(self,other)  定义大于等于符号的行为，>=
    __gt__(self,other)  定义大于符号的行为，>
    __le__(self,other)  定义小于等于符号的行为，<=
    __lt__(self,other)  定义小于符号的行为，<
    __ne__(self,other)  定义不等符号的行为，！=
 

单目运算符和函数

    __abs__(self)   实现一个内建的abs()函数的行为
    __ceil__(self)  实现math.ceil()的函数行为
    __floor__(self) 实现math.floor()的函数行为
    __invert__(self)    实现一个取反操作符（～操作符）的行为
    __neg__(self)   实现一个取负数的操作
    __pos__(self)   实现一个取正数的操作
    __round__(self, n)  实现一个内建的round（）函数的行为
    __trunc__(self) 实现math.trunc()的函数行为
 

双目运算符或函数

    __add__(self, other)    实现一个加法
    __and__(self, other)    实现一个按位进行与操作（&）的行为
    __div__(self, other)    实现一个“/”除法操作符
    __divmod__(self, other) 实现一个内建函数divmod（）
    __floordiv__(self, other)   实现一个整除操作符（//）
    __lshift__(self, other) 实现一个位左移操作（<<）的功能
    __mod__(self, other)    实现一个“%”操作符代表的取模操作
    __mul__(self, other)    实现一个乘法
    __or__(self, other) 实现一个按位进行或操作的行为
    __pow__ 实现一个指数操作(“**”操作符）的行为
    __rshift__(self, other) 实现一个位右移操作（>>）的功能
    __sub__(self, other)    实现一个减法
    __truediv__(self, other)实现真实除法
    __xor__(self, other)    实现异或运算
 

增量运算

    __iadd__(self, other)   加法赋值
    __iand__(self, other)   与赋值，相当于 &= 运算符
    __idiv__(self, other)   除法赋值，相当于 /= 运算符
    __ifloordiv__(self, other)  整除赋值，地板除，相当于 //= 运算符
    __ilshift__(self, other)    左移赋值，相当于 <<= 运算符
    __imod_(self, other)    模赋值，相当于 %= 运算符
    __imul__(self, other)   乘法赋值
    __ior__(self, other)    或赋值
    __ipow__                乘方赋值，相当于 **= 运算符
    __irshift__(self, other)    左移赋值，相当于 >>= 运算符
    __isub__(self, other)   减法赋值
    __itruediv__(self, other)   真除赋值
    __ixor__(self, other)   异或运算符，相当于 ^= 运算符
 

类型转换

    __coerce__(self, other) 执行混合类型的运算
    __complex__(self)   转换成 复数型
    __float__(self) 转换成浮点型
    __hex__(self)   转换成十六进制
    __index__(self) 如果你定义了一个可能被用来做切片操作的数值型，你就应该定义__index__
    __int__(self)   转换成整型
    __long__(self)  转换成长整型
    __oct__(self)   转换成八进制
    __str__(self)   转换字符串
    __trunc__(self) 当 math.trunc(self) 使用时被调用__trunc__返回自身类型的整型截取


### ===🗝 `__slots__` 插槽

➡ `__slots__` 通过属性槽槽限制形式定义并存储类数据成员、属性，避免随意动态创建属性，禁止使用 `__dict__` 存储动态内容，在一些场景下能够节约极大的内存空间。也禁止使用弱引用 `__weakref__`，除非将其添加到插槽。

Python 是动态语言，对于普通的类，可以为类实例赋值任何属性或使用 types.MethodType 动态类型库方法绑定等，它们会存储在 `__dict__` 字典中。

```py
# Python f-string accepts objects as well 
# Can use either __str__ or __repr__ magic functions.
class User:
    def __init__(self, name, occupation):
        self.name = name
        self.occupation = occupation

    # def __repr__(self):
    #     return f"{self.name} is a {self.occupation}"

# Dynamic bindding
from types import MethodType
def fmt(self):
    return "FMT"

u = User('John Doe', 'gardener')
u.__str__ = MethodType(fmt, "")
print(u.__str__());
# 动态绑定魔术函数，原有自动调用的特性不支持
```

使用动态特性带来两个问题：

- 数据通过字典(Hash)存储所占用的空间较大；
- 如何禁止随意生成类属性；

继承方式有两种表现：

- 子类未声明 `__slots__`，不使用插槽，子类实例可以随意赋值属性。
- 子类声明和父类一样使用了 `__slots__`，即此时子类的可以定义的属性包括父类的 `__slots__` 定义。

```py
class MyDict():
    name = "Default"
    pass

md = MyDict()   # new instance
md.any = "ANY"  # new attribute, dynamically create
print(md.__dict__) # {'any': 'ANY'}


class MySlots():
    __slots__ = ["name", "size"]
    def __init__(self, *args):
        # self.name = "Default"
        pass

# ms = MySlots         # Type Ref
# print(type(ms))      # <class 'type'>
# print(type(ms.name)) # <class 'member_descriptor'>
# ms.name = "Default"  # set default value for MySlots Type
# print(type(ms.name)) # <class 'str'>
# print(ms.name == MySlots.name) # True: <class 'str'> equal to <class 'str'>

ms = MySlots()      # ctor. __init__(self)
print(type(ms))     # <class '__main__.MySlots'> -- instance of MySlots
print(ms.__slots__) # ['name', 'size']
# ms.any = "ANY?"   # AttributeError: 'MySlots' object has no attribute 'any'
# ms.any            # MySlots has no attribute 'any'
# ms.__dict__       # AttributeError: 'MySlots' object has no attribute '__dict__'

# print(type(ms.name))  # AttributeError: name
ms.name = "Default"     # OK, set attribute defined by slots
print(type(ms.name))    # <class 'str'>
```



## ==⚡ class & abstract

Python 里无接口类型，定义接口只是一个人为规定，在编程过程自我约束

    class Animal(object):
        def __init__(self, name):
            self.name = name

        def walk(self):
            pass

        @staticmethod
        def animal_walk(obj):
            obj.walk()

    
    class Cat(Animal):
        def walk(self):
            print("mow!")

    
    class Dog(Animal):
        def walk(self):
            print("wang, wang")

    c = Cat('Abe')
    d = Dog('Wang')

    Animal.animal_walk(c) #多态：一个接口多种实现
    Animal.animal_walk(d)

抽象类，可以说是类和接口的混合体，既可以定义常规方法，也可以约束子类的方法（抽象方法）

    import abc

    #抽象类
    class Foo(metaclass=abc.ABCMeta):

        def f1(self):
            print('f1')

            #抽象方法
        @abc.abstractmethod
        def f2(self):
            '''
            打印f2
            '''

    class Bar(Foo):

        def f2(self):
            print('f2')

    b = Bar()
    b.f1()
    b.f2()


## ==⚡ MRO & Multiple Inheritance
- [The Python 2.3 Method Resolution Order By Michele Simionato](https://www.python.org/download/releases/2.3/mro/)

多承继方法查找问题：如果继承多个父类中，都定了相同的函数，那么选用哪一个？这就是 MRO - 
Method Resolution Order 中 C3 算法要做的事，C3 即三个约束条件。

C3 算法保证了三件事情：

1. 单调性：任意两个类的相对顺序和自己所有父类的 MRO 顺序一致，即父集与子集关系。
2. 一致性：任意两个类的顺序和继承图里所有直接继承自这两个类的声明顺序一致。
3. 有序性：如果两个类不具有直接的继承关系，那么找到两个类的最小公共子类，这个最小公共子类的多继承顺序靠前的分支上的类具有高优先级。


Python 和 C++ 一样，使用多继承，可以继承多个父类，Java 和 C# 单继承，不存在这种问题。
Python 类对象如果继承了多个类，那么其寻找方法的方式有两种，分别是：Depth-first 
深度优先【经典类】和广度优先【新式类】；

多继承必然会遇到棱形法则关系处理 Multiple Inheritance: The Diamond Rule，以下示意图摘自 PEP 253 -- Subtyping Built-in Types by Guido van Rossum，即 Python 创始人:


          class A:
            ^ ^  def save(self): ...
           /   \
          /     \
         /       \
        /         \
    class B     class C:
        ^         ^  def save(self): ...
         \       /
          \     /
           \   /
            \ /
          class D

Python之父，荷兰人Guido van Rossum。他于 1982 年从阿姆斯特丹大学取得了数学和计算机硕士学位。

20 世纪 80 年代中期，Guido van Rossum 在 CWI(数学和理论计算机科学领域的研究中心，位于阿姆斯特丹)为 ABC 语言贡献代码，这是一个为编程初学者打造的研究项目。ABC 语言给了 Guido 很大影响，Python 从 ABC 语言中继承了很多东西：比如字符串、列表和字节数列都支持索引、切片排序和拼接操作。

MRO 是一种在多重继承中用于确定方法搜索顺序的算法，又称 C3 超类线性化(superclass linearization)。Python 会计算出每一个类的 MRO 列表。一个类的 MRO 列表是一个包含了其继承链上所有基类的线性顺序列，并且列表中的每一项均保持唯一。当需要在继承链中寻找某个属性时，Python 会在 MRO 列表中从左到右开始查找各个基类，直到找到第一个匹配这个属性的类为止。

MRO 算法的原理：拓扑排序算法

对一个有向无环图 G 进行拓扑排序，是将 G 中所有顶点排成一个线性序列，使得图中任意一对顶点 u 和 v，若边 (u,v)∈E(G)，则 u 在线性序列中出现在 v 之前。

拓扑排序的实现步骤，循环执行以下两步，直到不存在入度为0的顶点为止

- 选择一个入度为0的顶点并输出之；
- 从网中删除此顶点及所有出边。

我们不必深究这个算法的数学原理，它实际上就是合并所有父类的 MRO 列表并遵循如下三条准则：

- 先子类后父类进行检查
- 根据父类在列表中的左右顺序进行检查
- 如果对下一个类存在两个合法的选择，选择第一个父类

其实我们只需要知道 MRO 列表中类的顺序代表着类层次结构间的关系即可。

Example:

```py
class X(object): pass
class Y(object): pass
class Z(object): pass
class A(X, Y): pass
class B(Y, Z): pass
class C(A, B): pass
class D(C, B): pass
print(D.__mro__)
print(D.mro())

# Cannot create a consistent MRO for bases B, C
# class D(B, C): pass
        +========+
        | object |
        +========+
             |
      +------+-------+
      |      |       |
    +===+  +===+   +===+
    | X |  | Y |   | Z |
    +===+  +===+   +===+
      |      |       |
      |  ----+-----  |
      |  |        |  |
      |  |        |  |
    +=====+      +=====+
    |  A  |      |  B  |
    +=====+      +=====+
       |            |   
    +==================+
    |         C        |
    +==================+
```

结果显示顺序，符合新式类的广度优先 MRO 算法： 

    D => C => A => X | object
      => B => Y => Z
      => object

如果 B 没有继续 Y，那么区别就会在：在搜索 A -> X 之后，就会搜索 Y。
对于广度优先搜索，画菱形继承图，顺时针画圈找。

当前类或者父类继承了 object 类，那么该类便是【新式类】，否则便是【经典类】，即新式类使用广度优先搜索算法，参考 Python 2.2 更新文档。

```py
class Animal:
    age = 0

    def eat(self):
        print( "%s animal eat" %self.name)

    def skill(self):
        print( '%s animal skill' %self.name )


class Cat(Animal):

    def __init__(self, name):
        self.name = name
        self.breed = '猫'

    def eat(self):
        print( 'cat eat')

class WhiteCat(Cat, Animal):
    
    def __init__(self, name):
        self.name = name
        self.breed = '狗'
        
    def eat(self):
        print( 'white cat eat')

class BlackCat(object): # 【新式类】
    pass
        

cat = WhiteCat('小花')
cat.eat();
cat.skill();
```

类的私有方法或成员使用两个下划线开头，即可声明为私，不能在类的外部调用。Python 没有访问限定符，Python 类的 static 静态成员这样的特性被称为类的属性，和对象的属性相区别。Python 是动态语言，和 C++ 这样的静态语言不同，其类实例是可以动态添加属性的，即实例的属性和类的属性不一定一样。与 JavaScript 脚本语言类似，以下例程展示了类成员 StaticDemo.arg 的用法，也就是说 arg 是否是类成员还要看是通过什么途径去访问：

    class StaticDemo:
        """docstring for StaticDemo"""
        arg=0
        def __init__(self, arg):
            self.arg = arg

    obj = StaticDemo(2)
    print(obj.arg) # 2
    print(StaticDemo.arg) # 0




## ==⚡ Properties Access

方法参考：

- *dir([obj])*  返回 obj 对象中大多数特殊的属性名称列表，省略 obj 时默认值是当前的模块对象。
- *hasattr(obj, 'attr')* 这个方法用于检查 obj.attr 属性是否存在，返回一个布尔值。
- *getattr(obj, 'attr')* 这个方法返回 obj.attr 属性的值，例如 attr 为 'bar'，则返回 obj.bar。
- *setattr(obj, 'attr', val)* 这个方法设置 obj.attr 属性值为 val。

假如有以下类：

```py
class Person(object):
  def __init__(self, name, age):
    self.name = name
    self.age = age
   
  def __str__(self):
    print("__str__...")
    return 'name=%s, age=%i' % (self.name, self.age)
```

属性访问有多种方法，除了基本的 . 成员运算符访问方式，还可以使用魔术方法 *__dict__* 或使用全局方法 *getattr* 方法等。

参考代码：

```py
import operator

man = Person("Alpha", 1)

op = operator.attrgetter('name')
print(op(man))
print(man.name)
print(man.__dict__['name'])
print(getattr(man, 'name'))

p_list = [Person('Beta', 18), Person('Gamma', 17), Person('Delta', 20), Person('Sigma', 25)]
r = sorted(p_list, key=operator.attrgetter('age'))
for i in r:
  print(i)
```

其中 operator.attrgetter 封装 getattr 方法。可以用于对象的排序，比如需要根据年龄 age 来排序 Person 对象：

输出结果，其中访问 name 属性不会触发魔术方法 *__str__*，因为它本身是字符串类型不需要转换：

    Alpha
    Alpha
    Alpha
    Alpha
    name=Gamma, age=17
    name=Beta, age=18
    name=Delta, age=20
    name=Sigma, age=25

## ==⚡ Class Methods
- The Python Standard Library » Built-in Functions

Python 类型定义中，有实例方法、类方法、静态方法、私有方法（加下划线开头）等概念。

一般的类实例方法与 Class Methods 是两种不同的方法概念。@classmethod 装饰的方法有点像静态方法，不同的是它传入的第一个参数为当前类形。

例如，一个 Sublime Text 插件的实现中：

```py
import sublime
import sublime_plugin


class ViewLatexCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.insert(edit, 0, "#Hello, World!\n")

        print(self.view.file_name())
        self.info()

        for region in self.view.sel():
            dir(region)
            # self.view.replace(edit, region, "%i %s" %(i, region.`)

    @classmethod 
    def inf(cls):
        print("cls.inf() %s"%cls.inf);
        print("cls.info() %s"%cls.info);

    def info(self):
        print(self.inf());
```

执行插件命令时输出：

    cls.inf() <bound method ViewLatexCommand.inf of <class 'User.ViewLatex.ViewLatexCommand'>>
    cls.info() <function ViewLatexCommand.info at 0x0000014128BCECA0>

可以看到，实例方法在内存中保存实例的位置，类型方法在在内存中保存类形的位置，绑定到类型上而不是具体的实例上。

    info is <class 'function'>
    inf  is <class 'method'>

@classmethod Transform a method into a class method.

A class method receives the class itself as its first argument. This way we are able to call the method inside a class without first creating an instance from the class. We just use the decorator @classmethod before the declaration of the method contained in the class and then we can directly access the method. Below are the main features of classmethids.

- A classmethod is bound to a class and does not depend on the instantiation of a class to be used.
- A classmethod can modify a class which in turn propagates to all instances of the class.

A class method receives the class as implicit first argument, just like an instance method receives the instance. To declare a class method, use this idiom:

```py
class C:
    @classmethod
    def f(cls, arg1, arg2, ...): ...
```

The @classmethod form is a function decorator – see Function definitions for details.

A class method can be called either on the class (such as C.f()) or on an instance (such as C().f()). The instance is ignored except for its class. If a class method is called for a derived class, the derived class object is passed as the implied first argument.

Class methods are different than C++ or Java static methods. If you want those, see staticmethod() in this section. For more information on class methods, see The standard type hierarchy.

Changed in version 3.9: Class methods can now wrap other descriptors such as property().


## ==⚡ Static Methods
- The Python Standard Library » Built-in Functions
- The Python Language Reference - 3.2. The standard type hierarchy

@staticmethod Transform a method into a static method.

A static method does not receive an implicit first argument. To declare a static method, use this idiom:


```py
class C:
    @staticmethod
    def f(arg1, arg2, ...): ...
```


The @staticmethod form is a function decorator – see Function definitions for details.

A static method can be called either on the class (such as C.f()) or on an instance (such as C().f()).

Static methods in Python are similar to those found in Java or C++. Also see classmethod() for a variant that is useful for creating alternate class constructors.

Like all decorators, it is also possible to call staticmethod as a regular function and do something with its result. This is needed in some cases where you need a reference to a function from a class body and you want to avoid the automatic transformation to instance method. For these cases, use this idiom:


```py
class C:
    builtin_open = staticmethod(open)
```



# =🚩 Class Data Model

## ==⚡ Class & Type

一切尽对象 - Objects are Python’s abstraction for data！ 这是 Python 基本的数据抽象方法，参考 Python 官方参考手册第三部分 3. Data model。所有对象由三部分构成，唯一标识 `identity` 部分，类型 `type` 部分和值 `value` 部分。标识 identity 可以简化理解为对象在内存中的唯一地址，类型则确定了对象支持什么功能，对于一个对象而言这两部分是不可变的，对象的值由类型决定是不是可变的 Mutable 或 Immutable。

Python 提供了一个内置类 type 和内置函数 type()，它们只是同名而已。object 是所有类继承的基类，与 object 类一样，type 类也是 class 类对象，type() 就是用来获取对象类型的内置函数。

class 是 Python 的一个关键字，它意味一切尽对象这句话中的对象，属于面向对象编程 OOP - Object-Oriented Programming 的概念，没有对象与之关联。如果非要由个说话，那就是对象的 `__class__` 这个属性，也是 type() 函数返回的那个对象。

    print(str)    # <class 'str'>
    print(type)   # <class 'type'>
    print(object) # <class 'object'>

以下代码可以比较 type 和 class 两种对象的属性差别，这些差别是由对象的类型决定的，即对象的 type 部分，也就是上面代码注解中单引号显示的类型信息：

    print(dir(object))
    # [
    #  '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
    #  '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__',
    #  '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__',
    #  '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__'
    # ]

    print(dir(object.__class__))
    # [
    #  '__abstractmethods__', '__base__', '__bases__', '__basicsize__', '__call__',
    #  '__class__', '__delattr__', '__dict__', '__dictoffset__', '__dir__', '__doc__',
    #  '__eq__', '__flags__', '__format__', '__ge__', '__getattribute__', '__gt__',
    #  '__hash__', '__init__', '__init_subclass__', '__instancecheck__', '__itemsize__',
    #  '__le__', '__lt__', '__module__', '__mro__', '__name__', '__ne__', '__new__',
    #  '__prepare__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__',
    #  '__setattr__', '__sizeof__', '__str__', '__subclasscheck__', '__subclasses__',
    #  '__subclasshook__', '__text_signature__', '__weakrefoffset__', 'mro'
    # ]

Python 一切尽对象可以通过以下代码体现，无论是 123，"abc"，还是内置类型 str，object 都是对象，通过 type() 函数可以取得对象的 type 类型部分：

    print(type(123))                 # <class 'int'>
    print(type("abc"))               # <class 'str'>

    print(type(str))                 # <class 'type'>
    print(type(object))              # <class 'type'>

    print(type("string", (), {}))    # <class '__main__.string'>

注意上面最后一行并不是在调用 type() 函数，实际上是实列化 type 类型，即构建自定义类型，这看起来相当迷惑。通过 type 实列化类型的语法如下：

    type(name, bases, namespace)

即要创建一个对象，type() 函数依次传入 3 个参数：

- class 的名称；
- bases 传入继承的父类集合 tuple；
- namespace 传入类成员及属性组成的字典 dict。

下面这个无用示例展示如何使用 type 类型实列化自定义类型：

    def init(self, val):
        self.val = val


    @classmethod
    def test(cls):
        print("class method of %s" % cls)


    @staticmethod
    def Test():
        print("static method ...")


    def hello(self):
        print(self.val + " this is abc")


    inheritance = (object,)
    members = {
        "__init__": init,
        "__str__": lambda self: self.val,
        "hello": hello,
        "test": test,
        "Test": Test,
    }
    # define <class '__main__.string'>
    abc = type("string", inheritance, members)

    abc.test() # class method of <class '__main__.string'>
    abc.Test() # static method ...

    hi = abc("Hi!")

    hi.test()
    hi.Test()
    hi.hello() # Hi! this is abc
    print(hi)  # Output Hi! via __str__ magic function


## ==⚡ dataclasses
- https://github.com/piglei/one-python-craftsman/blob/master/zh_CN/10-a-good-player-know-the-rules.md
- Data Classes in Python 3.7+ by Geir Arne Hjelle https://realpython.com/python-data-classes/

Data Classes 是一种数据类，比起一般的类型，定义数据类这种需求实在太常见了，所以在 Python 3.7 标准库中新增了 dataclasses 模块，简化类据类的使用。

通过 @dataclass 装饰器，可以自动提供数据类的常用方法实现，如 `__repr__`, `__eq__`, `__hash__`等，还会根据数据成员提供构造器 __init__，它会尝试调用 __post_init__ 进行构造后期工作。

    dataclass(*, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False)

默认参考含义：

   - `init`：默认生成 __init__ 方法。
   - `repr`：默认生成 __repr__ 方法。
   - `eq`  ： 默认生成 __eq__ 方法，传入 False 使用 object.__eq__。
   - `order`：默认不生成 __gt__ __ge__ __lt__ __le__ 方法。
   - `unsafe_hash` : 默认根据 `eq` and `frozen` 来实现 `__hash__` 方法。
       - `eq` and `frozen` 都为 True 就提供 `__hash__` 方法实现；
       - `eq` is true and `frozen` is false 则 `__hash__` 设置为 `None`，表示不可进行哈希，因为是 mutable；
       - `eq` is false 则不管 `__hash__`，可能是继承父类的实现，如果是 `object`；
   - `frozen` : 默认各成员是可赋值的，不模拟 read-only frozen instances。
   - `match_args` : 默认从构造参数列表中生成 `__match_args__` tuple，除非显式定义了。
   - `kw_only` : 默认不将 `__init__` 参数标记为 keyword-only。
   - `slots` : 默认不生成 `__slots__` 也不创建新类实例，而是返回原始的实例。

`__hash__` 方法的存在暗示了一个 immutable 对象。

`__slots__` 是 Python 3.10 添加的新功能，可以限制不使用动态属性，禁止 __dict__ 的使用。

字段自定义：

    field(*, default=MISSING, default_factory=MISSING, init=True, repr=True, hash=None, compare=True, metadata=None, kw_only=MISSING)

参数列表使用 `MISSING` 而不是 `None` 是因为后者可能是数据类字段的值，但是没有用户代码直接使用 MISSING。

参数含义如下：

   - `default`: 字段默认值，`default_factory` 只能二选一；
   - `default_factory`: 默认值工厂，只能是 0 参数的方法；
   - `init`: 默认作为 `__init__` 构造器的参数；
   - `repr`: 默认作为 `__repr__` 格式化时表现的内容；
   - `hash`: 可以使用 bool or `None`，默认按 `compare` 指示，而不作为 `__hash__` 方法生成摘要时的输入；
   - `compare`: 默认用于比较操作，`__eq__`, `__gt__` 等等；
   - `metadata`: 可以使用 mapping or None，默认表示空字典对象。
   - `kw_only`: 默认不将此字段设置为`__init__` 方法的 keyword-only 参数；


Example::

```py
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0
    # def __init__(self, x: float, y: float, z: float = 0.0):
    # ...

p = Point(1.5, 2.5)
print(p)   # produces "Point(x=1.5, y=2.5, z=0.0)"
```

.. seealso::

    :pep:`557` -- Data Classes
       PEP written and implemented by Eric V. Smith


21🃏 点游戏由玩家和庄家（即赌场的发牌员）对玩，看谁的牌面点数更靠近 21 点。但如果超过了 21 点，则称为“爆掉”，算输。其中花牌（J，Q，K）都算10点，A 可以算 1 点，也可以算 11 点，玩家之间不做比较。

游戏开始时，所有玩家和庄家各拿两张牌，一般来说，是玩家两张牌牌面朝上，庄家一张牌面朝上，一张牌面朝下。

两张牌的点数，肯定介于 2 到 21 点之间。21 点只可能是一张 10（包括 J，Q，K）和一张 A，这叫“天成（BlackJack，以下简称BJ）”，除非庄家也拿到了BJ，不然赢一倍半的赌注。

要牌（Hit），停牌（Stand），加倍（Double down），投降（Surrender）。

以下代码测试在不同的概念下要牌出现暴点的概率，注意 index 字段添加到第一，它用于进行大小比较排序时确定不同的牌面所代码的序号。

```py
from dataclasses import dataclass, field
from random import sample

@dataclass(order=True)
class Card:
    index:int = field(init=False, repr=False)
    rank: int
    suit: str

    def __post_init__(self):
        self.index = RANKS.index(self.rank)

    def __repr__(self):
        return self.__str__()

    def __str__(self):
        return f" {self.rank}{self.suit}"

class Player:
    _holds: list[Card] = None
    def __init__(self):
        self._holds = []

    def inquire(self):
        if self.probability()>60:
            return True
        return False

    def deliver(self, card):
        self._holds.append(card)

    def probability(self):
        dif = 21 - self.sum()
        if 'A' in self._holds: dif -= 10
        if dif<2: return 0
        return dif / 0.1

    def sum(self):
        s = 0
        ace = False
        for c in self._holds:
            if c.rank =='A': 
                ace = True
            elif RANKS.index(c.rank)<8:
                s += RANKS.index(c.rank) + 2
            else:
                s += 10
        if ace and s<11: 
            s += 11
        elif ace:
            s += 1
        return s

RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()
SUITS = '♠ ♥ ♦ ♣'.split()
cards = [Card(r, s) for s in SUITS for r in RANKS]

bomb = 0
for t in range(0,1000):
    player = Player()
    shuffle = sample(cards, k=len(cards))
    for card in shuffle:
        if player.inquire():
            # print(f"acquire a new card: {card}")
            player.deliver(card)
        else:
            break
    bomb += 1 if player.sum()>21 else 0
    print(player.sum(), "💥" if player.sum()>21 else "", end="")
print("\n", f"💥 {bomb}")
```


## ==⚡ Metaclass & type
- Metaclasses in Python 3000 https://www.python.org/dev/peps/pep-3115
- https://stackoverflow.com/questions/100003/what-are-metaclasses-in-python
- https://stackoverflow.com/questions/tagged/python

Python 中一切都是对象，包含 class 也是对象，在 CPython 实现上，都基于 *PyObject*，而类型多了一个 *PyTypeObject*，它包含了可以创建实例的方法。

所以 metaclass 元类，也就是可以创建 class 对象的类。一般上，类的实例化就是在内存中创建一个对象实例，而 metaclass 创建的实例是 class，所以它显得非常特殊。

但这个功能是 Python 天生具有的，全局函数 *type()* 本身也是类，它就是用来创建类的类，它返回的值是 class 类型。全局函数/类 type 和其它类对象的 __class__ 属性具有同样的 *type* 类型，就是元类。

假设有以下这样一个 MetaClass，它可以创建类，并用它创建的类来实例化出具体的对象实例，就可以用 type 函数来实现 MetaClass：

```py
# What you want:
MyClass = MetaClass()
my_object = MyClass()

# What you need:
MyClass = type('MyClass', (), {})
my_object = MyClass()

# MyClass.__class__ # <class 'MyClass'>
# MyClass           # <class 'type'>
# type              # <class 'type'>
```

Python 2 到 Python 3 使用不同方法来使用元类，someting 是可以调用对象，能返回类型即可：

```py
# Metaclasses in Python 2
class Foo(object):
    __metaclass__ = something
    pass

# Metaclasses in Python 3
class Foo(object, metaclass=something):
    pass
```

Python 2 使用 __metaclass__ 来实现自定义类，按以下规则顺序进行：

● If dict['__metaclass__'] exists, it is used.
● 使用基类的 metaclass 如果有，或者基类的 __class__ 指定的类型；
● 使用全局变量 __metaclass__ 定义的元类型；
● 否则使用旧式类 old-style 即经典类元类型 types.ClassType。


一个类定义包含类型名称 class name，class dictionary 和一个基类列表 base classes，而 metaclass 的职责就是在这三个参数的基础上构建类型，这个过程在大多数 OOP 语言中是内置的默认的实现。

Metaclass 就是 The class of a class，参考代码文档 Python-3.10.2\Doc\glossary.rst 及 datamodel.rst

➡ Class definitions create a class name, a class dictionary, and a list of base classes.
➡ The metaclass is responsible for taking those three arguments and creating the class.
➡ Most object oriented programming languages provide a default implementation.
➡ What makes Python special is that it is possible to create custom metaclasses.
➡ They have been used for logging attribute access, adding thread-safety, tracking object creation, implementing singletons, and many other tasks.

示范：使用函数方式定义 metaclass 将类属性更名为大写：

```py
# the metaclass will automatically get passed the same argument
# that you usually pass to `type`
def upper_attr(future_class_name, future_class_parents, future_class_attrs):
    """
      Return a class object, with the list of its attribute turned
      into uppercase.
    """
    # pick up any attribute that doesn't start with '__' and uppercase it
    uppercase_attrs = {
        attr if attr.startswith("__") else attr.upper(): v
        for attr, v in future_class_attrs.items()
    }

    # let `type` do the class creation
    print(future_class_name, future_class_parents, uppercase_attrs)
    return type(future_class_name, future_class_parents, uppercase_attrs)

__metaclass__ = upper_attr # this will affect all classes in the module

# for Python 2.x
# global __metaclass__ won't work with "object" though
# but we can define __metaclass__ here instead to affect only this class
# and this will work with "object" children
class Foo(): 
    bar = 'bip'

# for Python 3.x
class Foo(metaclass=upper_attr):
    bar = "rip"

print(hasattr(Foo, 'bar'))
print(hasattr(Foo, 'BAR'))
print(Foo.BAR)
```

重新使用类型方式实现：

```py
from collections import OrderedDict

class UpperAttrMetaclass(type):

    # @classmethod
    # def __prepare__(metacls, cls, bases, **kwds):
    def __prepare__(cls, bases, **kwds):
        global OrderedDict
        attrs = OrderedDict()
        attrs['__UPPERED__'] = True
        return attrs

    def __init__(self, args):
        print("__init__:", args)

    def __new__(metacls, cls, bases, classdict, **kwds):
        uppercase_attrs = {
            attr if attr.startswith("__") else attr.upper(): v
            for attr, v in classdict.items()
        }
        return type(cls, bases, uppercase_attrs)

class Foo(metaclass=UpperAttrMetaclass):
    bar = "rip"

print(hasattr(Foo, 'bar'))
print(hasattr(Foo, 'BAR'))
print(Foo.BAR)
```

自定义类型涉及的魔术方法：

- `__prepare__` 和 `__new__` 魔术方法先后被调用，且在类型创建前，可以修改类型成员属性字典；
- `__new__` 方法被调用，进行类型实例化，返回另一个类型实列，这是工厂函数 factory function 的典型做法；
- `__init__` 类型初始化方法被调用，注意此时第一个参数已经变成 self 而不像前两个方法接收的是类型。


Python 中一切皆引用，这使得他不会像 C++ 一样使用虚基类处理基类对象重复的问题，但是如果父类存在同名函数的时候还是会产生二义性，Python 中处理这种问题的方法就是 MRO 方法解析顺序 C3 算法。旧式类 MRO 的查找只需要记住一个原则：在经典类中采的是深度优先遍历方案。即沿一条继承路径搜索到源头，找不到方法定义再回来继续找下一条继承路径。

新式类的 MRO 是采用广度优先的 C3 算法来完成的，C3 把我们多个类方法共同继承留到最后去找。当前类或者父类继承了 object 基类，那么该类便是【新式类】，否则便是【经典类】。 


子类的 metaclass 类必须继承自基类的 metaclass 类，否则：

    TypeError: metaclass conflict: the metaclass of a derived class must be a (non-strict) subclass of the metaclasses of all its bases



## ==⚡ Metaclass & ORM
[使用元类 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1016959663602400/1017592449371072)

通过 metaclass 实现即对象-关系表映射 ORM - Object Relational Mapping 是一个典型的实列。ORM 目的就是把关系数据库的一行映射为一个对象，也就是一个类对应一个表，这样写代码更简单，不用直接操作 SQL 语句。

要编写一个 ORM 框架，所有的类都只能动态定义，因为只有使用者才能对数据表的结构下定义，即必须由使用者定义 ORM 的模型类。而 ORM 框架只负责将模型类的数据构造成相应的 SQL 以更新到数据库中。一般情况下，ORM 会定义基础模型类 Model，它提供基础的 save/select/add/delete 等魔术方法供使用者继承使用，以完成相应的数据库操作。

假设用户期望按以下的方式使用这个 ORM 框架：

```py
class User(Model):
    id = FieldInt('id')
    name = FieldVarchar('username')
    password = FieldVarchar('password')

u = User(id=12345, name='Demo', password='demopass')
u.save()
```

那么实现这个 ORM 可以分成几步：

- 先定义元类，及基础模型类 Model，这样用户在继承 Model 时就自动继承的 metaclass 的功能。
- 定义字段助手类，如 FieldInt/FieldVarchar，在元类中进行助手类检测，以确定那些属性可以写入数据库。
- 补充 metaclass 的功能，如 add/save/update/delete 等。

```py
class ModelMeta(type):

    def __new__(cls, name, bases, attrs):
        if name == "Model":
            return type.__new__(cls, name, bases, attrs)
        print("User model found: %s" % (name))
        mappings = dict()
        for k, v in attrs.items():
            if isinstance(v, FieldUtil):
                print("Mapping field: %s -> %s" % (k, v))
                mappings[k] = v

        for k in mappings.keys():
            del attrs[k]

        attrs['__table__'] = name
        attrs['__mappings__'] = mappings
        return type.__new__(cls, name, bases, attrs)


class Model(dict, metaclass=ModelMeta):

    def __init__(self, **kw):
        super(Model, self).__init__(kw)

    # def __getitem__(self, key):  # for a = Model['key'] or getattr(...)
    #     return getattr(self, key, None)

    def __getattr__(self, key):  # for a = Model.key
        try:
            return self[key]
        except KeyError:
            print(AttributeError(r"Undefined attribute for Model.%s" % key))

    def __setattr__(self, key, value):
        self[key] = value

    def save(self):
        fields = []
        params = []
        for k, v in self.__mappings__.items():
            fields.append('`%s`' % (v.name))
            params.append(getattr(self, k, None))
        args = ','.join(["?" for i in range(len(params))])
        sql = 'insert into %s (%s) value(%s)' % (self.__table__, ",".join(fields), args)
        print("SQL: %s" % sql)
        print("PARAMS: %s" % params)

class FieldUtil(object):

    def __init__(self, name, type):
        self.name = name
        self.type = "undefined"

    def __str__(self):
        return '<%s "%s">' % (self.__class__.__name__, self.name)


class FieldInt(FieldUtil):

    def __init__(self, name):
        super(FieldInt, self).__init__(name, 'int(10)')


class FieldVarchar(FieldUtil):

    def __init__(self, name):
        super(FieldVarchar, self).__init__(name, 'varchar(64)')
```

结合前面的用户代码，可以得到输出正确的 SQL 和参数列表，后续只要通过数据库连接执行后就可以完成数据保存：

    User model found: User
    Mapping field: id -> <FieldInt "id">
    Mapping field: name -> <FieldVarchar "username">
    Mapping field: password -> <FieldVarchar "password">
    SQL: insert into User (`id`,`username`,`password`) value(?,?,?)
    PARAMS: [1, 'Demo', 'demopass']

这个微缩版 ORM 中的 Model 继承了 dict，通过索引访问属性时会触发 `__getitem__` 或 `__setitem__`，通过成员运算符即 Model.id 这样访问时会触发 `__getattr__` 或 `__setattr__`。为了避免循环死锁，model.id = 1 这个赋值操作将会通过 `__setattr__` 设置到父类即字典类型上。同样，读取数据时，也经过了这样的转换。



## ==⚡ Metaclass & Mixin

Mixin 混入时组合化编程的方法，不同过继承就可以灵活地将其它功能整合到一起，如以下将 Ostrich 的能力通过 MetaMixin 整合到了 Bird 类型中，其之类也具有同等的能力：

```py
import inspect
import types

class Ostrich(object):

    # passby inspect.ismethod or else use inspect.isfunction
    # @classmethod
    def run(self):
        print('Ostrich running ...')


class MetaMixin(type):
    def __init__(cls, name, bases, dic):
        super(MetaMixin, cls).__init__(name, bases, dic)
        mixins = (Ostrich, )

        for mix in mixins:
            if not mix:
                continue

            for method, fun in inspect.getmembers(mix, inspect.ismethod):
                # assert not hasattr(cls, name), "name exist: %s" % name
                # setattr(cls, method, fun.im_func)
                setattr(cls, name, fun.__func__) # Python 3


class Bird(object, metaclass=MetaMixin):

    def fly(self):
        print('Bird flying ...')


class Eagle(Bird):
    def fly(self):
        print('Eagle flying')

if True or __name__ == '__main__':
    b = Eagle()
    b.fly()
    # Bird().run()
```

What's New in Python 3.0a2?

- Unbound methods are gone for good. ClassObject.method returns an
  ordinary function object, instance.method still returns a bound
  method object.  The API of bound methods is cleaned up, too. The
  im_class attribute is removed and im_func + im_self are renamed to
  __func__ and __self__. The factory PyMethod_New takes only func and
  instance as argument.



# =🚩 Asyncio & Generator

## ==⚡ Iterator & Generator

Python 中任意的对象，只要它定义了可以返回一个迭代器的`__iter__()`方法，或者定义了可以支持下标索引的`__getitem__()`方法，那么它就是一个可迭代对象。简单说，可迭代对象就是能提供迭代器的对象。

Python 2 中任意对象，只要定义了 `next()` 它就是一个迭代器。Python 3 是`__next__()`方法。

迭代 iteration 行为可以简单理解它就是从某个地方，比如从一个列表取出一个元素的过程。当我们使用一个循环来遍历某个东西时，这个过程本身就叫迭代。

生成器 Generator 也是一种迭代器，但是你只能对其迭代一次。这是因为它们并没有把所有的值存在内存中，而是在运行时生成值。你通过遍历来使用它们，要么用一个 for 循环，要么将它们传递给任意可以进行迭代的函数和结构。大多数时候生成器是以函数来实现的。然而，它们并不返回一个值，而是 yield 产生一个值。

生成器函数的简单例子：

    def generator_function():
        for i in range(10):
            yield i
    
    for item in generator_function():
        print(item)

生成器最佳应用场景是：避免消耗大量内存，不要同一时间将所有计算出来的大量结果集分配到内存当中，特别是结果集里还包含循环。

许多 Python 2 里的标准库函数都会返回列表，而 Python 3 应用了更多的生成器，因为生成器占用更少的资源。

下面是一个计算 Fibonacci 斐波那契数列的生成器：

    # generator version
    def fibon(n):
        a = b = 1
        for i in range(n):
            yield a
            a, b = b, a + b

    for x in fibon(1000000):
        print(x)

用这种方式，我们可以不用担心它会使用大量资源。然而，之前如果我们这样来实现的话：

    def fibon(n):
        a = b = 1
        result = []
        for i in range(n):
            result.append(a)
            a, b = b, a + b
        return result

这也许会在计算很大的输入参数时，用尽所有的资源。我们已经讨论过生成器使用一次迭代，但我们并没有测试过。在测试前你需要再知道一个 Python 内置函数 next()，它允许我们获取一个序列的下一个元素。那我们来验证下我们的理解：

    def generator_function():
        for i in range(3):
            yield i
    
    gen = generator_function()
    print(next(gen))
    print(next(gen))
    print(next(gen))
    print(next(gen)) # StopIteration

我们可以看到，在 yield 掉所有的值后，next() 触发了一个 StopIteration 的异常。基本上这个异常告诉我们，所有的值都已经迭代完了。for 循环会自动捕捉到这个异常并停止调用 next() 因此不会产生 StopIteration。Python 中一些内置数据类型也支持迭代：

    my_string = "Yasoob"
    my_iter = iter(my_string)
    next(my_iter)
    # Output: 'Y'

字符串它是一个可迭代对象，而不是一个迭代器。这意味着它支持迭代，但我们不能直接对其进行迭代操作。可以使用内置函数 iter 将可迭代对象包装成一个迭代器。不能直接把可迭代对象当迭代器使用，可以使用 for 来迭代可迭代对象：

    s = "ABC"
    # next(s) TypeError: str object is not an iterator
    for i in s:
        print(i) 


## ==⚡ Generator expressions 生成器表达式

生成器表达式 Generator expressions 是列表推导式和生成器的高性能，高内存使用效率的推广。

例如：对 1 ~ 9 所有数字进行平方求和，常规过程是首先在内存中创建平方数列值列表，然后遍历列表，求和后释放内存。

对于大量的运算需要下，传统这种求和方式的大列表会占用比较多的内存空间：

>>> sum([x * x for x in range(1, 10)])
>>> sum( x * x for x in range(1, 10) )

通过生成器表达式就可以节省内存使用，比较两者的内存占用：

>>> L = [x * x for x in range(1, 10)]
>>> L
[1,4,9,16,25,36,49,64,81]
>>> G = (x * x for x in range(1, 10))
>>> G
<generator object <genexgr> at 0x7f43bee46a98>
>>> next(G)
1
>>> next(G)
4
>>> next(G)
9
>>> next(G)
16
>>> any(G)
True
>>> max(G)
64
>>> min(G)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: min() arg is an empty sequence
>>> all(G)
True
>>> any(G)
False

生成器创建语法类似列表推导式，列表推导式是 [ ] 而生成器是 ( )

综合测试：以下输出 ['xyz']，由于生成器惰性求值，会在使用时执行求值，而 if 条件却在定义生成器绑定了第一个 item 列表。

```py
from dis import dis

def test():
    item = ["abc", "xyz"]
    test = (n for n in item if n in item)
    item = ['xyz', '123']
    print([n for n in test])

test()
# dis(test)
```


## ==⚡ Coroutine & Generator
- [A Curious Course on Coroutines and Concurrency](http://www.dabeaz.com/coroutines/Coroutines.pdf)
- [廖雪峰的Python教程 - 协程](https://www.liaoxuefeng.com/wiki/1016959663602400/1017968846697824)
- [王垠 - 如何掌握所有的程序语言](http://www.yinwang.org/blog-cn/2017/07/06/master-pl)
- https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work/51116910#51116910

Coroutine 协程又称微线程，协程的在执行函数 A 时，可以随时中断去执行函数 B，然后中断继续执行函数 A，可以自由切换。但这一过程并不是函数调用，没有调用语句，这一整个过程看似像多线程，然而协程只有一个线程执行。协程由于由程序主动控制切换，没有线程切换的开销，所以执行效率极高。对于 IO 密集型任务非常适用，如果是 CPU 密集型，推荐多进程+协程的方式。

协程的本质是个单线程多任务，它不能同时利用多个 CPU，因为线程无法分割到不同的 CPU 或多内核上运行，协程需要和进程配合才能运行在多 CPU 上运行。协程会对其所在进行阻塞 Blocking 操作，如 IO 时会阻塞掉整个程序。如果是多线程或多进程，IO 阻塞只对当前执行的线程起作用。

Coroutine 优点：

- 无需线程上下文切换的开销
- 无需原子操作锁定及同步的开销
- 方便切换控制流，简化编程模型
- 高并发+高扩展性+低成本：一个CPU支持上万的协程都不是问题，很适合用于高并发处理。

所谓原子操作是指不会被线程调度机制打断的操作，即计算机系统中最小单位的操作行为，这种操作一旦开始，就一直运行到结束，中间不会有任何 context switch 线程切换消耗。原子操作可以是一个步骤，也可以是多个操作步骤，但是其顺序是不可以被打乱，或者切割掉只执行部分，视作整体是原子性的核心。


由于 GIL 的存在，导致 Python 多线程性能甚至比单线程更糟。

GIL - Global Interpreter Lock 全局解释器锁是计算机程序设计语言解释器用于同步线程的一种机制，它使得任何时刻仅有一个线程在执行。即便在多核心处理器上，使用 GIL 的解释器也只允许同一时间执行一个线程。

coroutine 可以处于 4 种状态，通过 inspect.getgeneratorstate() 函数来确定状态：

1.GEN_CREATED  等待开始
2.GEN_RUNNING  被解释器执行
3.GEN_SUSPENED  在yield表达式处挂起
4.GEN_CLOSED  执行结束

Python 3.4 之前，官方没有对协程的支持，存在一些三方库的实现，比如 gevent，greenlet 和 Tornado。之后就内置了 asyncio 标准库，官方真正实现了协程这一特性。而 Python 对协程的支持，是通过 Generator 实现的，协程是遵循某些规则的生成器。


先来看一个没有用的 Demo， 好对异步修饰关键字 async 涉及的各种对象有个概念：

    # def a generator
    def grep(pattern):
        print("grep for %s" % pattern)
        while True:
            line = (yield)
            # coroutine code below...
            if pattern in line:
                print(line)

    gene = grep("miss")
    print(type(grep))       # <class 'function'>
    print(type(gene))       # <class 'generator'>


    async def get_coro():
        print('get_coro ...')

    coro = get_coro()
    print(type(get_coro))   # <class 'function'>
    print(type(coro))       # <class 'coroutine'>

    try:
        coro.send(None)     # execute coroutine's function body
    except StopIteration as e:
        print("StopIteration: %s" % e.value)  # None


可以看到 get_coro() 是一个函数对象，这是没问题，但是它没有定义返回值，却可以通过调用得到一个 coroutine 协程对象！关键就在于 async 关键字，它修饰的函数与普通函数的差别在于，调用协程函数 get_coro() 的时候，并不是执行函数体中的语句，而是生成一个协程对象 coroutine！这个概念很重要，跟生成器函数执行时返回生成器的对象 generator 类似，协程对象也有 send() 方法。

当协程的 send(None) 时，才会执行协程函数中的语句，也就是关键字 async 或者 yield 的出现改变了函数原来正经的意义定义，这些关键字的引用将原本的函数定义变成了一种对象的封装，并把函数体封装到特定对象内部。就协程函数而言，封装的结果就是协程对象，通过调用协程对象方法 send() 启动执行协程封装的函数体代码，这里只是打印了一条字符串信息。

协程对象也是一个 Awaitable 可等待对象，它可以和 await 表达式使用，可等待对象一般实现了 `__await__()` 魔术方法，协程的执行流程可以通过调用这个魔术方法，递归结果来实现控制，当协程函数执行完毕时递归器就会抛出 StopIteration 异常，这个异常对象的 value 属性中保存着协程的返回值，因为协程的函数体没有 return 语句，其实默认返回 None。
 
    coroutine.send(value)
    coroutine.throw(type[, value[, traceback]])
    coroutine.close()

注意：通过生成器装饰器 `@types.coroutine` 和 `@asyncio.coroutine` 封装得到的生成器递归器 generator iterator 虽然是 Awaitable 对象，但是并没有实现 `__await__()` 方法。

关键字 await 表达式，通常和协程函数一起出现，await 后面必须是一个 Awaitable 对象，如协程 Coroutine 还有后面要接触到的 Generator、Future、Task 等。await 关键字的语义是当前执行流程进入等待状态，即挂起 suspended，进入到 await 表达式中的 Awaitable 对象内开始执行。执行完毕后，执行流程才又回到挂起的地方继续执行，直到最后执行完毕抛出 StopIteration 异常。


异步递归器 Asynchronous Iterators 需要实现 `__aiter__`、 `__anext__` 魔术方法：

    object.__aiter__(self) 返回一个异步递归器对象
    object.__anext__(self) 在 next 递归时返回 awaitable 对像


异步上下文管理器 Asynchronous Context Managers 可以通过 `__aenter__` 和 `__aexit__` 方法将控制流程挂起，与 async with 一起使用。语义上类似 `__enter__()` 、 `__exit__()`，但它们返回 awaitable 对象。

    object.__aenter__(self)
    object.__aexit__(self, exc_type, exc_value, traceback) 



现在将 yield 和 await 结合一起看看：

    import asyncio, types


    # @types.coroutine
    @asyncio.coroutine
    def printer():
        print('printer enter')
        res = yield
        print('printer got %s' % res)
        print('printer exit')
        return 'from printer'

    async def get_coro():
        print('get_coro enter')
        res = await printer()
        print("res = %s" % res)
        print('get_coro exit')
        return 'from get_coro'

    coro = get_coro()

    try:
        coro.send(None)
        print("blocking in yield ...")
        coro.send("ABC")
        coro.send("XYZ")
    except StopIteration as e:
        print("StopIteration: %s" % e.value)  # None

这里调用了三次 send() 方法，第一次式启动执行协程函数 get_coro 内部的代码，然后进入 pointer() 函数体遇到 yield 阻塞了。第二次 send() 发送了字符串过来，yield 从 pipeline 读取到数据返回给 res，然后打印处理后再返回到挂起的协程函数中继续执行。第三次 send() 就没有来得及执行就被来自 get_coro() 协程的 StopIteration 异常终止了，因为协程已经完全执行完毕。这里引用了装饰器 @asyncio.coroutine 只是为了将函数 printer 包装成 Awaitable 对象，方便与 await 表达式一起使用。

    get_coro enter
    printer enter
    blocking in yield ...
    printer got ABC
    printer exit
    res = from printer
    get_coro exit
    StopIteration: from get_coro

关于 yield 一般和 generator 配合使用，参考后面的小节。



## ==⚡ @asyncio.Coroutine 协程装饰器

Python 3.4 开始新增 asyncio 相关的API，语法使用 @asyncio.coroutine 和 yield from 实现协程。

- PEP 342 还加入了 throw 和 close，允许 caller 抛出异常，该异常在 generator 里面处理，也可以结束 generator。
- PEP 380 让 coroutine 支持 return 和 yield from。 
- PEP 492 Python 3.5 中引入 async/await 语法糖，直接使用 async def 来定义协程函数，await 替换 yield from，简化了 coroutine 代码。

在 @asyncio.coroutine 的源码中 Lib/asyncio/corouine.py 就是在做封装，通过 isgeneratorfunction(func) 判断被封装的函数是否是 generator，如果不是就使用 yield from 封装。再使用 types.coroutine() 将 generator 转换为协程函数，并设置 `_is_coroutine` 属性，iscoroutinefunction() 方法就是返回这个属性。调用协程函数返回的对象称为协程对象，iscoroutine() 函数可以判断。

```py
def coroutine(func):
    if inspect.iscoroutinefunction(func):
        # In Python 3.5 that's all we need to do for coroutines
        # defined with "async def".
        return func

    if inspect.isgeneratorfunction(func):
        coro = func
    else:
        @functools.wraps(func)
        def coro(*args, **kw):
            res = func(*args, **kw)
            if (base_futures.isfuture(res) or inspect.isgenerator(res) or
                    isinstance(res, CoroWrapper)):
                res = yield from res
            else:
                # If 'res' is an awaitable, run it.
                try:
                    await_meth = res.__await__
                except AttributeError:
                    pass
                else:
                    if isinstance(res, collections.abc.Awaitable):
                        res = yield from await_meth()
            return res

    coro = types.coroutine(coro)
    wrapper = coro
    wrapper._is_coroutine = _is_coroutine  # For iscoroutinefunction().
    return wrapper
```


## ==⚡ yield & generator

基于生成器的协程，也就是非原生协程，需要了解一下 yield 和 yield from。生成器 Generator 一般是指生成器函数，即出现 yield 关键字的函数，它和协程函数定义类似，执行生成器函数并不是立即执行函数体，而是得到一个生成器迭代器 Generator Iterator，为了简化表达，在不产生意义混淆的情况下，直接把这个迭代器称为生成器 Generator。

    generator.__next__()
    generator.send(value)
    generator.throw(type[, value[, traceback]])
    generator.close()

以下实列中定义了一个生成器函数，如上面所说它与一般函数不同，grep() 内部包含 yield 表达式所以不是一个函数，也并不会像函数那样 grep("python") 调用时立即执行函数体的代码，而是返回一个 Generator，只有调用 next() 方法对其初始化复位时才会执行函数体。next() 主要用来恢复 generator 的执行，相当于 send(None)。

- Generator 是数据的产生者，它通过 send() 方法推送数据 push data into pipeline;
- Coroutine 是数据的消费者，它拉取数据 pull data 通过 iteration

循环中的 line = (yield) 相当于定义了一个 coroutine，同时需要消费一条数据，后面的代码就是协程。在 yield 表达式没有等到数据到来的时候，它就守在这里，相当于被阻塞。先通过 next() 来初始化 grep 这个 generator，然后通过 send() 方法将数据发送到管线 pipeline 给 yield 表达式，这样 yield 就可以获取到数据返回给 line，同时相当于自动运行 next() 复位，最终调用 close() 关闭这个协程。

```py
# def a generator
def grep(pattern):
    print("grep for %s" % pattern)
    while True:
        line = (yield)
        # coroutine code below...
        if pattern in line:
            print(line)

if __name__ == '__main__':
    g = grep("python")
    print("Demo for coroutine & generator...")
    # g.next() for python 2
    # g.__next__()
    next(g)
    g.send("A series string")
    g.send("python generators rock!")
    g.send("More messages")
    g.close()
```
    

上面的例子中，代码中断和切换执行，体现出了协程的部分特点。传统的生产者-消费者模型是一个线程写消息，一个线程取消息，通过锁机制控制队列和等待，但一不小心就可能死锁。现在改用协程，生产者生产消息后，直接通过 yield 跳转到消费者开始执行，待消费者执行完毕后，切换回生产者继续生产，效率极高。

```py
def consumer():
    print("[CONSUMER] start")
    ret = 'start'
    while True:
        n = yield ret
        if not n:
            print("n is empty")
            continue
        print("[CONSUMER] consuming %s" % n)
        ret = "200 ok"


def producer(c):
    # init generator
    start_value = c.send(None)
    print(start_value)
    n = 0
    while n < 3:
        n += 1
        print("[PRODUCER] producing %d" % n)
        r = c.send(n)
        print('[PRODUCER] Consumer return: %s' % r)
    # close generator
    c.close()


c = consumer()
producer(c)
```

- 首先调用 c.send(None) 启动生成器；
- 然后，一旦生产了东西，通过c.send(n)切换到consumer执行；
- consumer 通过 yield 拿到消息，处理，又通过 yield 把结果传回；
- producer 拿到 consumer 处理的结果，继续生产下一条消息；
- producer 决定不生产了，通过 c.close() 关闭 consumer，整个过程结束。

整个流程无锁，由一个线程执行，produce和consumer协作完成任务，所以称为协程，而非线程的抢占式多任务。

Generator 生成器主要讨论 yield 和 yield from 这两个表达式，这两个表达式和协程的实现息息相关。Generator 的作用是可以作为 data pipeline 使用，例如可以使用 coroutine 来做 filter，或者多路广播 broadcast。

以下作为 filter 运行，follow 将 file 中的每一行读取，send 到 grep 中的 coroutine 以查找匹配的 line，再 send 到 printer 的 coroutine 中打印输出，完成整个 filter 的流程。

```py
import time
import asyncio
import io


def follow(thefile, target):
    # Go to the end of the file, SEEK_SET or 0, SEEK_CUR or 1, SEEK_END or 2
    # thefile.seek(0, io.SEEK_END)
    next(target)
    while True:
        line = thefile.readline()
        if not line:
            time.sleep(0.1)
            continue
        target.send(line)


# @coroutine for python 2
@asyncio.coroutine
def grep(pattern, target):
    next(target)
    while True:
        line = (yield)
        if pattern in line:
            target.send(line)


# @coroutine for python 2
@asyncio.coroutine
def printer():
    while True:
        line = (yield)
        print(line)


f = open(__file__)
follow(f, grep('python', printer()))
```

对上面的实列再修改一下，添加一层 boardcast 做数据分发，注意，generator 不能连续执行 next()：

```py
import time
import asyncio
import io


def follow(thefile, target):
    # Go to SEEK_SET or 0, SEEK_CUR or 1, SEEK_END or 2
    thefile.seek(0, io.SEEK_SET)
    next(target)
    while True:
        line = thefile.readline()
        if not line:
            time.sleep(0.1)
            continue
        target.send(line)


# @coroutine for python 2
@asyncio.coroutine
def grep(pattern, target):
    while True:
        line = (yield)
        if pattern in line:
            target.send(line)


# @coroutine for python 2
@asyncio.coroutine
def printer():
    while True:
        line = (yield)
        print(line)


# @coroutine for python 2
@asyncio.coroutine
def broadcast(targets):
    for target in targets:
        target.send(None)
    while True:
        line = (yield)
        for target in targets:
            target.send(line)

try:
    f = open(__file__)
    p = printer()
    next(p)
    follow(f, broadcast([
        grep('python', p),
        grep('boardcast', p),
    ]))
except KeyboardInterrupt:
    print(__file__ + " exit...")
```


## ==⚡ yield from

Python 2.5 中引入 yield 表达式，参见 PEP342。定义方法中包含 yield 表达式后，Python 会将其视作 generator 对象，而不再是普通的函数方法。Python 3.3 版本新增 yield from 语法，新语法用于将一个生成器部分操作委托给另一个生成器。此外，允许子生成器，即 yield from 后的参数返回一个值，该值可供委派生成器，即包含 yield from 的生成器使用。并且在委派生成器中，可对子生成器进行优化。引入 yield from 的目的就是为了屏蔽那个多出来一层的让人难以理解的for循环，同时又能实现内外连通 yield from 的实现机制可参考《流畅的Python》第16章

    # 子生成器
    def test(n):
        i = 0
        while i < n:
            yield i
            i += 1


    # 委派生成器
    def test_yield_from(n):
        # yield from test(n)
        for item in test(n):
            yield item
            print("got item " + str(item))


    for i in test_yield_from(3):
        print(i)


输出

    0
    got item 0
    1
    got item 1
    2
    got item 2

yield from 几大特征:

- 子生成器产出的值都直接传给委派生成器的调用方。
- 使用 send() 方法发给委派生成器的值都直接传给子生成器。如果发送的值是 None，那么会调用子生成器的 next() 方法。如果发送的值不是 None，那么会调用子生成器的 send() 方法。如果调用的方法抛出 StopIteration 异常，那么委派生成器恢复运行。任何其他异常都会向上冒泡，传给委派生成器。
- 生成器退出时，生成器（或子生成器）中的 return expr 表达式会触发StopIteration(expr) 异常抛出。
- yield from 表达式的值是子生成器终止时传给 StopIteration 异常的第一个参数。
- 传入委派生成器的异常，除了 GeneratorExit 之外都传给子生成器的 throw() 方法。如果调用 throw() 方法时抛出 StopIteration 异常，委派生成器恢复运行。StopIteration 之外的异常会向上冒泡，传给委派生成器。
- 如果把 GeneratorExit 异常传入委派生成器，或者在委派生成器上调用 close() 方法，那么在子生成器上调用 close() 方法，如果它有的话。如果调用 close() 方法导致异常抛出，那么异常会向上冒泡，传给委派生成器；否则，委派生成器抛出GeneratorExit 异常。



## ==⚡ EventLoop & Tasks
[什么是 Event Loop？](http://www.ruanyifeng.com/blog/2013/10/event_loop.html)
[《Understanding The Node.js Event Loop》]()

asyncio 的编程模型就是一个消息循环 EventLoop，大概流程是从 asyncio 模块中获取一个 EventLoop 引用，然后将需要异步执行的协程包装成 Future、Task 再扔到 EventLoop 中执行。以下是一个基本执行流程，asyncio.sleep() 在这里用来模拟耗时的操作，但它的作用主要是将当前协程的流程控制权归还给   EventLoop，以使得其它处于等待中的协程有机会运行：

    import asyncio


    async def cor():
        print('enter cor ...')
        await asyncio.sleep(2)
        print('exit cor ...')
        
        return 'cor'

    loop = asyncio.get_event_loop()
    task = loop.create_task(cor())
    rst = loop.run_until_complete(task)
    print(rst)

get_event_loop() 得到一个事件循环对象，对于同一个线程中只存在唯一的一个实例，只要在同一个线程中调用此方法，得到的都是同一个对象，运行线程时可以通过 set_event_loop() 显式设置。create_task() 把协程包装成 Task 对象，事件循环执行其中的运行方法 run_until_complete() 就会将 Task 对象添加到事件循环中去运行。在事件循环内部，执行的主要流程有以下几个步骤：

    BaseEventLoop.run_forever()
    BaseEventLoop._run_once()
    handle._run()
    handle._context.run(self._callback, *self._args)

Handle 类是核心封装类，对 EventLoop 的 call_soon() 或 call_soon_threadsafe() 进行包装，EventLoop 在 `_run_once()` 方法中运行协程就是通过 Handle 的 `_run()` 方法执行的。Handle 对象提供 cancel() 方法来取消任务的执行，和 cancelled() 方法来获取状态。

执行 EventLoop 的方法有多种方式，run_until_complete() 方法执行是其中一种，可以给它传入一个协程函数，其内部会自动包装成 Task，再通过 run_forever() 运行，也可以使用 create_task() 先将协程函数封装成 Task。多个协程函数的异步任务并发可以 用 asyncio.wait(list) 或 asyncio.gather() 进行包装，注意它们参数格式。这两个方法返回值也不一样，wait 也可以在第一个 future 完全或者出错时就返回，可能返回 done 为已完成的协程 Task，返回 pending 为超时未完成的协程 Task，需通过 future.result 获取异步操作结果。而 asyncio.gather() 返回的是已完成 Task 的 result。与 wait_for() 不同，wait() 在任务超时并不会取消 cancel future 任务。

以下三个方式都可以运行协程，或 asyncio.run() 直接运行协程，但这个方法不能在 EventLoop 运行的协程内使用；用 Python 3.7 提供的 create_task() 为 EventLoop 添加任务，或包装任务在通过其它方法如 run_until_complete() 运行，又或者使用 run_coroutine_threadsafe() 动态将协程添加到任务中运行。在 EventLoop 创建待运行的协程，使用 EventLoop 可以实现多协程，可以对多个 Task/Future 运行管理；或使用 ensure_future() 对协程方法进行包装形成 Task 对象以在 EventLoop 中运行：

    asyncio.run(coro, *, debug=False)

    loop = asyncio.get_event_loop()
    loop.create_task(coro)
    loop.run_forever()

    task = asyncio.ensure_future(coro)
    loop.run_utnil_complete(task)

还可以通过以下方法在指定的时间或延时运行协程:

    loop.call_soon(callback, *args, context=None)
    loop.call_soon_threadsafe(callback, *args, context=None)

    delay = 3
    when = loop.time() + 3
    loop.call_later(delay, callback, *args, context=None)
    loop.call_at(when, callback, *args, context=None)


以下是个关于 EventLoop 的无用演示，把 asyncio.sleep() 看成是一个耗时的 IO 操作，代替 time.sleep() 就不会阻塞事件循环。期间主线程并未等待，而是去执行 EventLoop 中其他协程了，因此可以实现并发执行：

    import asyncio
    from random import random

    async def compute(task, x, y):
        cost = random()*10  # random between 0 and 10
        print("Task %s would cost %0.2f seconds to eveluate %s + %s ..." % (task, cost, x, y))
        await asyncio.sleep(cost)
        return x + y


    async def print_sum(task, x, y):
        result = await compute(task, x, y)
        print("Task %s: %s + %s = %s" % (task, x, y, result))


    eventloop = asyncio.get_event_loop()
    print("asyncio tasks start ...")
    eventloop.run_until_complete(print_sum("A", 1, 2))
    eventloop.run_until_complete(asyncio.gather(
        print_sum("G1", 1, 2),
        print_sum("G2", 3, 4),
    ))
    eventloop.run_until_complete(asyncio.wait([
        print_sum("W1", 1, 2),
        print_sum("W2", 3, 4),
    ]))
    print("asyncio tasks is done!")
    eventloop.close()


测试输出：

    asyncio tasks start ...
    Task A would cost 3.24 seconds to eveluate 1 + 2 ...
    Task A: 1 + 2 = 3
    Task G1 would cost 3.69 seconds to eveluate 1 + 2 ...
    Task G2 would cost 5.53 seconds to eveluate 3 + 4 ...
    Task G1: 1 + 2 = 3
    Task G2: 3 + 4 = 7
    Task W1 would cost 9.42 seconds to eveluate 1 + 2 ...
    Task W2 would cost 2.52 seconds to eveluate 3 + 4 ...
    Task W2: 3 + 4 = 7
    Task W1: 1 + 2 = 3
    asyncio tasks is done!


这个实列的协程运行流程在官方资料这样描述的，以下图表就是 EventLoop 内一个完整协程运行过程：

    EventLoop                     Task                      print_sum                     compute
       |                           |                            |                            |
       |    the loop is running    |    the task is pendding    | the coroutine is running   | the coroutine is suspended
    +-----+                     +-----+                      +-----+  await compute(x, y) +-----+ await asyncio.sleep()
    |     |--------------------->     |---------------------->     |---------------------->     |
    |     |                     |     |                      |     |                      |     |
    |     |                     |     |                      |     |                      |     |
    |     <---------------------|     <---------------------------------------------------|     |
    |     |                     |     |                      |     |                      |     |
    ------------------------------------- 1 seconds later ---------------------------------------
    |     | got a notification  |     |                      |     |                      |     | the coroutine is running
    |     |--------------------->     |--------------------------------------------------->     | return 3 + 4
    |     |                     |     |                      |     |                      |     |
    |     |                     |     |                      |     | print("%s + %s ...)  |     |
    |     <---------------------|     <----------------------|     <----------------------|     |
    |     |                     |     | raise StopIteration  |     | raise StopIteration  |     |
    |     |                     |     |                      |     |                      |     |
    +-----+ the loop is stoped  +-----+ the task is done!    +-----+ the coroutine done!  +-----+


还有 await Future 的用法，可以将 Future 理解为一个容器，用于接受异步的结果，异步操作结果通过 set_result() 保存到 Feture 对象同时撤销 Feture 的阻塞，这里 Future 可以和 Task 等价看待，Task 继承自 Future，它们都是可以做为 EventLoop 上运行的任务，参考上面的流程图。Task 用来包装协程函数，得到 Task 对象可以在 EventLoop 中运行，可以动态往 EventLoop 添加 Task 任务。多个任务并发可以通过 asyncio.gather() 或 asyncio.wait() 进行打包成。Task 其内部应该会有一个异步回调通知，异步 IO 完成后就通知 EventLoop 唤醒处于 suspended 悬挂状态的协程去获取并处理结果：


    import asyncio
    from random import random

    future = asyncio.Future()


    async def cost_time(future):
        cost = random() * 10  # 0 ~ 10 seconds
        print("wait for %0.2f seconds" % cost)
        try:
            await asyncio.sleep(cost)
            future.set_result('work done!')
        except asyncio.InvalidStateError as e:
            print("Task broken: %s %s" % (type(e), e))



    async def waiting(future):
        # result = await future
        try:
            result = await asyncio.wait_for(future, 3.0)
            print("result is %s" % result)
        except (TimeoutError, Exception) as e:
            print("Task fail [canceled:%s]: %s %s" % (future.cancelled(), type(e), e))


    loop = asyncio.get_event_loop()
    asyncio.ensure_future(cost_time(future))
    loop.run_until_complete(waiting(future))
    # loop.run_until_complete(asyncio.gather(
    #     waiting(future),
    #     cost_time(future),
    # ))
    # loop.run_until_complete(asyncio.wait([
    #     waiting(future),
    #     cost_time(future),
    # ]))
    loop.close()



这里的 future 对象可以和 yield from 或者 await 结合使用，其作用就是暂停协程，直到 future.set_result() 执行返回 result 或者抛出异常。在例子中，await future 必须要等待 future.set_result() 就表示异步操作结束，可以通知 EventLoop 唤醒协程来处理后续工作。因为使用了 asyncio.wait_for()，异步操作如果没在限定时间完成就会超时而被取消。需要注意的是，如果使用 gather() 或者 wait() 包裹 future，那么 wait_for() 的逻辑就会被改写。

对于单个 Future 对象，如果 asyncio.wait_for(future, timeout=....) 超时了，它会撤销 future 操作，这对于参数中的 future 是一个 Future 对象是正常的，因为 Future.cancel() 是同步方法。 但是 future 是 Task 对象时，结果就不同了，task.cancel() 调用后总是返回 True，只是它保证不了立刻结束异步操作，它只是转达你的需求而已。所以，以上代码中注解的俩方式不会因为 wait_for() 的超时而取消 task 任务，它会继续等待 const_time 执行直到其内部超时结束为止。


async with 异步上下文管理器

    async with EXPR as VAR:
        BLOCK

实现代码范本：

    mgr = (EXPR)
    aexit = type(mgr).__aexit__
    aenter = type(mgr).__aenter__(mgr)

    VAR = await aenter
    try:
        BLOCK
    except:
        if not await aexit(mgr, *sys.exc_info()):
            raise
    else:
        await aexit(mgr, None, None, None)


async for 异步迭代器

    async for TARGET in ITER:
        BLOCK
    else:
        BLOCK2

实现代码范本：

    iter = (ITER)
    iter = type(iter).__aiter__(iter)
    running = True
    while running:
        try:
            TARGET = await type(iter).__anext__(iter)
        except StopAsyncIteration:
            running = False
        else:
            BLOCK
    else:
        BLOCK2



## ==⚡ Explorer asyncio under IPC
[Interprocess Communication and Networking](https://docs.python.org/3.5/library/ipc.html)

官方文档将 asyncio 的文档归类到了官方标准库进程间通讯 IPC - Interprocess Communication 这一个大类别中，[Interprocess Communication and Networking] 有关于 asyncio 模块的完整资料，提供的 API 接口直接可以查询到详细信息，还有相应的实列代码。例如 start_server() 函数可以建立一个服务器端的侦听程序，和 EventLoop.create_server() 用法相似。

还有 asyncio 提供了一 open_connection() 可以用来做异步 Web 请求，实际上它是 create_connection() 方法的包装函数，连接方法成功后返回 asyncio.StreamReader 和 asyncio.StreamWriter，它们分别对应一个 Web 服务器响应和 HTTP 请求。这是相对底层的操作，需要了解基本的 HTTP 协议，知道数据包的结构。首先需要往 HTTT 请求对象即 StreamWrite 写入 HTTP 请求数据包。然后执行 drain() 发送到服务器，这是一个异步方法，会阻塞到服务返回为止。drain 就是排空的意思，类似的还有 flush 的说法。服务器成功返回后就可以通过 StreamWriter 读取内容了。


    import asyncio

    @asyncio.coroutine
    def wget(host):
        print('wget %s...' % host)
        connect = asyncio.open_connection(host, 80)
        reader, writer = yield from connect
        header = 'GET / HTTP/1.0\r\nHost: %s\r\n\r\n' % host
        writer.write(header.encode('utf-8'))
        yield from writer.drain()
        while True:
            line = yield from reader.readline()
            if line == b'\r\n':  # gap between http headders and body
                break
            print('%s header > %s' % (host, line.decode('utf-8').rstrip()))
        # Ignore the body, close the socket
        writer.close()

    loop = asyncio.get_event_loop()
    tasks = [wget(host) for host in ['localhost', 'nim-lang.org']]
    loop.run_until_complete(asyncio.wait(tasks))
    loop.close()


## ==⚡ echo server for asyncio & socket

一个异步并发服务器需要有动态添加连接任务的能力，以下是一个无用的演示，主进程定时创建任务，并使用另一个 EventLoop 来避免主进程退出。子线程通过 run_forever() 执行阻塞到永久的 EventLoop。主进程没有做异常处理，启动之后 Ctrl+C 会触发 run_until_complete 的执行异常 KeyBorardInterrupt，主进程结束不再产生新任务，但子线程还在运行，从而进入假死状态。可以通过 thread.daemon = True 在线程启动前设置子线程为守护线程，这样当主线程结束的时候，子线程也随机退出。可以认为，守护线程是不太重要的线程，主线程不等它结束。


    import asyncio
    import random
    from threading import Thread


    async def create_task(event_loop):
        i = 0
        while True:
            # make a task every second and pupp it into event_loop
            print("event_loop task %s" % len(asyncio.all_tasks(event_loop)))
            asyncio.run_coroutine_threadsafe(cost_time(i), event_loop)
            await asyncio.sleep(1)
            i += 1


    async def cost_time(i):
        print("#{} coroutine task".format(i))
        await asyncio.sleep(random.randint(1,10))
        print("#{} coroutine task is done!".format(i))


    def start_loop(loop):
        asyncio.set_event_loop(loop)
        loop.run_forever()


    event_loop = asyncio.new_event_loop()
    thread = Thread(target=start_loop, args=(event_loop,))  # make a thrad for service
    # thread.setDaemon(True)
    thread.start()

    # pid = multiprocessing.current_process().pid
    pid = os.getpid()
    print("thread tid %s" % thread.ident)
    print("current_thread[main] tid %s" % threading.current_thread().ident)
    print("current_process[main] pid %s" % pid)

    # os._exit(0)  # kill all process & thread 
    # sys.exit(0)  # exit current thread

    main_loop = asyncio.new_event_loop()
    main_loop.run_until_complete(create_task(event_loop))  # main process create coroutine object


Python 提供了 sys.exit() 用于退出当前线程，就以下列子，sys.exit() 并不能完全退出程序。因为主进程的线程虽然可以关掉，但是子线程并没有响应退出，除非设置了守护进程 thead.daemon = True 或者使用 `os._exit()` 强制退出：

EventLoop 不是线程安全的，一个 EventLoop 只能在一个线程内调度和执行任务，并且同一时间只有一个任务在运行，因此在 A 线程中运行的 EventLoop ，不能使用它来调度 B 线程的任务。当程序调用 get_event_loop() 获取 EventLoop 应用时，会从一个本地的 Thread Local 对象获取属于当前线程的 EventLoop。在主线程中，调用 get_event_loop() 总能返回属于主线程的 EventLoop 对象。

但如果有要将多个基于 asyncio 的协程运行在不同线程中的需求，可创建一个 EventLoop，在子线程中使用 asyncio.set_event_loop() 为子线程设置其事件循环，这样调用 get_event_loop() 才能获取到关联的 EventLoop 对象。

为专门解决针对线程安全的调用 asyncio 提供了 run_coroutine_threadsafe() 方法，有几个要点：

1. 提交一个协程任务到参数指定的 EventLoop 循环中运行；
2. 返回 Futures 供查询结果；
3. 当事件循环运行时, 必须在相同线程下添加协程任务到此循环中；
4. 其内部用到了 call_soon_threadsafe。

那么 call_soon_threadsafe 与 call_soon 相比，主要在前者多了一个`_write_to_self`调用。通过原代码可以发现，EventLoop 其内部会维护着一个 self-pipe，它由一对 socketpair 组成，`_write_to_self` 的作用就是把一个信号写到 `self-pipe` 的一端。这样一来，EventLoop 在检测到 self-pipe 发生事件后，就会响应并唤醒事件循环来处理任务。

如果以上面的方式写并发服务器很有可能会遇到一个问题，可以有多个客户端连接进来，但是只有一个进入了交互状态而且一直保持，可以试着运行以下程序：

    #!/usr/bin/env python
    #!encoding: utf-8
    # python 3.5+ await, async

    import socket
    import asyncio
    import itertools
    import sys, os

    loop = asyncio.get_event_loop()

    async def reader(client):
        # data = await loop.sock_recv(client, 1024)
        # return data.decode()
        write, flush = sys.stdout.write, sys.stdout.flush
        for char in itertools.cycle('|/-\\'):
            try:
                data = client.recv(1024)
                return data.decode()
            except BlockingIOError:
                write(char)
                flush()
                write('\x08' * len(char))
                # await asyncio.sleep(0.1)  # AVOID BLOCKING CURRENT THREADING!
                continue
            except Exception as e:
                print("reader exception: %s" % e)
                break

    async def writer(client, data):
        await loop.sock_sendall(client, data.encode())
        # client.send(data.encode())


    async def handler(client):
        hello = await reader(client)
        peer = client.getpeername()
        print("client hello <%s:%s>: %s" % (peer[0], peer[1], hello))
        hello = 'Welcome! this is %s' % __file__
        # await loop.sock_sendall(client, str.encode(hello))
        client.send(hello.encode())
        while True:
            msg = await reader(client)
            if msg == None:
                break

            print("echo <%s:%s>: %s" % (peer[0], peer[1], msg))
            if msg == 'exit':
                print('client %s:%d disconnected[%d] ...' % (peer[0], peer[1], len(asyncio.all_tasks())))
                client.close()
                break
            elif msg == 'kill':
                msg = "%s & Server sucide ..." % msg
                await writer(client, msg)
                print(msg)
                client.close()
                os._exit(0)
            else:
                await writer(client, msg)

    async def echo_server():
        target = ('0.0.0.0', 8888)
        srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        srv.setblocking(False)
        srv.bind(target)
        srv.listen(5)
        print('listening %s:%s ...' % (target[0], target[1]))

        while True:
            # addr = ('IP', port)
            client, addr = await loop.sock_accept(srv)
            # try:
            #     client, addr = srv.accept()
            # except BlockingIOError:
            #     await asyncio.sleep(0.1)
            #     continue
            peer = client.getpeername()
            print('[%d]client %s:%d connected.' % (len(asyncio.all_tasks()), peer[0], peer[1]))
            loop.create_task(handler(client))

    loop.create_task(echo_server())
    loop.run_forever()


可以使用以下两个命令连接到服务器进行测试，curl 模拟进行 Web 请求，telnet 可以进行交互式的操作：

    curl 127.0.0.1:8888
    telnet 127.0.0.1 8888

在多个客户端连接时，显示时成功的，但是服务器端并没有连接成功的信息提示。这是因为协程会对其所在进行阻塞 Blocking 操作，如 IO 时会阻塞掉整个线程，而 Python 的协程时基于单线程的，所以网络请求或 time.sleep() 都会阻塞整个程序。包括以上实列，即使设置了 setblocking(False) 非阻塞模式的 socket，因为 reader() 方法使用的是一个无限循环，在控制台上打印动态提示字符，漏掉了将线程的时间片归还到 EventLoop，从而使得主线程根本无法响应其它客户端的连接请求。解决办法就是在 BlockingIOError 异常处理中加入 asyncio.sleep() 将流程控制权归还给 EventLoop。

    await asyncio.sleep(0.1)  # AVOID BLOCKING CURRENT THREADING!

在非阻塞模式下，socket.accept() 执行时没有客户端要求连接，或 recv() 调用时系统缓冲区没有任何数据都会触发 BlockingIOError 异常，这个异常出现时就可以暂时挂起当前协程，去处理其它事务。socket 默认值是阻塞模式，会阻塞整个主线程，不能在协程并发场景下使用，包括 time.sleep() 也是。

    sock.setblocking(True)  blocking mode
    sock.settimeout(None)   blocking mode

    sock.setblocking(False) non-blocking
    sock.settimeout(0.0)    non-blocking

底层 socket 函数可以参考官方文档的 socket — Low-level networking interface 部分。使用协程实现并发时，socket 必须以非阻塞方式运行，否则主线程会因为 socket.accept() 方法的阻塞而无法正常执行其它协程任务。将 socket 设置为非阻塞状态时，socket.accept() 执行时就会在没有需要连接的客户端时立即返回 BlockingIOError 异常。因此代码就要收到解决这个异常，并将流程控制器归还给 EventLoop：

    try:
        client, addr = srv.accept()
    except BlockingIOError:
        await asyncio.sleep(0.1)
        continue

为了简化代码，asyncio 在 EventLoop 提供了这部分的底层方法的包装版本，上面的代码就可以等价作为 client, addr = await loop.sock_accept(srv)：

    coroutine AbstractEventLoop.sock_recv(sock, nbytes)
    coroutine AbstractEventLoop.sock_recv_into(sock, buf)
    coroutine AbstractEventLoop.sock_sendall(sock, data)
    coroutine AbstractEventLoop.sock_connect(sock, address)
    coroutine AbstractEventLoop.sock_accept(sock)
    coroutine AbstractEventLoop.sock_sendfile(sock, file, offset=0, count=None, *, fallback=True)

reader() 方法也可以使用 sock_recv() 而不用去理 BlockingIOError 异常，为了在 reader() 读取数据时加入动态文字效果，还是可以使用原始的方法多写几行代码，但是这样的定制更灵活：

    async def reader(client):
        data = await loop.sock_recv(client, 1024)
        return data.decode()

根据 TCP 协议建立和结束连接定义，三次握手建立，四次挥手 Four-Way Wavehand 终止连接。socket 连接的 A 方在调用 close() 方法时只是准备断开连接，会给 B 方发送 FIN 信号，B 方收到 FIN 信号包，TCP 层会回复 ACK 信号，然后进入半关闭状态 Half-Close，即 socket 状态就处于 CLOSE_WAIT 状态。这一来一回，FIN - ACK 的交互都是 TCP 底层的任务。此时 socket 主动 close() 的一方，即 A 方不能再主动发送数据，而 B 方还是可以 send()，并且发送完数据之后也应该尽快调用 close() 完全关闭连接。B 发送 FIN 给 A 方才能变为 LAST_ACK，A 接收到到后回应 ACK 信号，才进入 CLOSED 状态。如果应用层不调用 close()，那么 socket 会一直处于 CLOSE_WAIT。 recv() 返回 None 时，就是表明断开了。一个常规的探测方法是使用心跳机制，定时给服务器发送 heartbeat 数据包，根据获得的回复内容确定连接状态。

通过 socket.sendall() 发送完所有数据也会关闭 socket，但有可以会因为数据较大，卡在某个位置了，这就会导致 socket 一直处在 CLOSE_WAIT 状态。所以要去判断 socket 状态，确定是否关闭 socket。底层提供了 socket.shutdown(how) 方法来处理半连接状态，需要在 close() 释放连接之前执行它，how = SHUT_RD 不再接收数据，how = SHUT_WR 不再发送数据，即 Shutdown Write Channel，how = SHUT_RDWR 完全关闭，不发送数据也不接收数据。SHUT_RD、SHUT_WR、SHUT_RDWR 三个静态变量分别对应数字常量 0、1、2。shutdown() 会立即 flush 缓冲区，将缓冲区全数发送清空，这样可以提前发现错误。发送 FIN/EOF 给所有socket的持有线程，告诉他们这个 socket 已经关闭了RD/WR/RDWR，以后所有不正确的使用都会产生一个错误。close() 方法其实就是关闭文件描述符，socket 文件的引用减一。

TCP 是流方式，有粘包和漏包的问题，不能保证一边发送 5B 时对方会马上收到，有可能连续发送 2 次 5B，对方一次收到 10B，或者发送 10B，对方只收到 5B，后面才收到另外 5B。所以一般协议里都需要同步头和数据长度等信息，让应用层来确定消息边界。这涉及到 recv() 接收函数在什么情况下返回的问题。

socket 从接收缓存区读取内容与 kernel 向接收缓存区填充内容是互斥的两个过程，recv() 只从接收缓存区中获取一次内容，只关心获取时接收缓存区有多少内容：

a、缓存区中没有数据，则进入接收阻塞状态，等待 kernel 在缓存区填入数据后重新激活。
b、缓存区中的数据比用户接收使用的 buffer 大，则 recv 函数返回 buffer 大小的数据。
c、缓存区中的数据比用户接收使用的 buffer 小，则 recv 函数返回缓存区中的所有数据。

kernel 向接收缓存区填充则是收到数据包后到自己的时间片并且缓存区空闲状态下，则将拿到的包内容全部放入缓存区中。

不要期待利用 TCP 协议双方 send 一次，另一方 recv 一次的逻辑，这种逻辑是不可靠，也没有理论依据，不符合 TCP 协议规则。需要固定包大小的，在本机进行消息逻辑控制，或者说信令级传输，建议使用 UDP 协议。若必须要使用 TCP 消息传输时，可以在应用层要加同步头处理，例如一个固定的值，用来分割数据包或者验证是否包乱序或越界。

最后，配合测试的客户端可以这样实现：

    #!/usr/bin/env python
    #!encoding: utf-8

    import socket

    conn = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    conn.connect(('127.0.0.1', 8888))
    print('server connected ...')

    data = "Hello! this is %s" % __file__
    conn.send(data.encode())

    hello = conn.recv(1024).decode()
    print("server hello: %s" % hello)

    while True:
        data = input('send: ')
        if not data:
            continue
        try:
            sz = conn.send(data.encode())
        except Exception as e:
            print('Exception %s' % e)

        if data == 'exit':
            conn.shutdown(socket.SHUT_RDWR)
            conn.close()
            break
        else:
            response = conn.recv(1024)
            if response == None:
                print("None received!")
            msg = response.decode()
            print('receive: ' + msg)

        if data == 'kill':
            conn.close()
            break


以非阻塞方式运行的实现：

    #!/usr/bin/env python
    #!encoding: utf-8

    import socket, time, asyncio, sys

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setblocking(False)

    while True:
        try:
            server.connect(('127.0.0.1', 8888))
            print('server connected ...')
            break
        except BlockingIOError as e:  # errno = 10035
            print("connect %s %s %s" % (type(e), e.errno, e.strerror))
            # time.sleep(0.3)
            continue
        except OSError as e:
            print("connect %s %s %s" % (type(e), e.errno, e.strerror))
            if e.errno == 10056:  # reconnected
                break
            elif e.errno == 10022:  # server down!
                sys.exit(0)
        except Exception as e:
            print("connect %s %s" % (type(e), e))
            continue

    data = "Hello! this is %s" % __file__
    server.send(data.encode())


    def write(msg):
        try:
            server.send(msg.encode())
        except Exception as e:
            print('write %s %s' % (type(e), e))


    def read():
        while True:
            try:
                hello = server.recv(1024)
                return hello
            except BlockingIOError as e:
                time.sleep(0.3)
                print("read %s %s %s" % (type(e), e.errno, e.strerror))
                continue
            except Exception as e:
                print("read %s %s" % (type(e), e))
                return e

    hello = read()
    if not issubclass(type(hello), Exception):
        print("server hello: %s" % hello.decode())

    while True:
        data = input('send: ')
        if not data:
            continue
        write(data)
        if data == 'exit':
            server.shutdown(socket.SHUT_RDWR)
            server.close()
            break
        else:
            response = read()
            if not issubclass(type(response), Exception):
                msg = response.decode()
                print('receive: ' + response.decode())
            if isinstance(response, ConnectionAbortedError):
                print("ConnectionAbortedError")
                server.close()
                break

        if data == 'kill':
            server.close()
            break


## ==⚡ echo server with threading

    #! /usr/bin/env python3
    # -*- coding:utf-8 -*-
    # asyncio echo-server

    import asyncio, threading, queue, socket, os, sys, time, itertools

    conf = ('127.0.0.1', 8888, )
    server = socket.socket()
    server.setblocking(False)
    server.bind(conf)
    server.listen()

    client_loop = asyncio.new_event_loop()
    queueIncome = queue.Queue(100)
    KILL = False

    async def request(conn):
        # data = await client_loop.sock_recv(conn, 1024)
        # return data
        while True:
            try:
                data = conn.recv(1024)
                return data
            except BlockingIOError as e:
                await asyncio.sleep(0.2)
            except Exception as e:  # ConnectionAbortedError
                return e

    async def response(conn, data):
        try:
            return await client_loop.sock_sendall(conn, data)
            # conn.send(data)
        except Exception as e:
            print(e)
            return e


    async def interactive(conn, addr):
        global KILL
        msg = "Hello! this is %s" % (__file__)
        conn.send(msg.encode())
        hello = await request(conn)
        if not issubclass(type(hello), Exception):
            print("client hello: %s" % hello.decode())

        while True:
            receive = await request(conn)
            if issubclass(type(receive), Exception):
                print("Request Exception %s %s" % (type(receive), receive))
                return
            req = receive.decode('utf-8')
            print('echo %s:%s: %s' % (addr[0], addr[1], req))
            if req == "kill":
                msg = 'Server sucide...'
                print(msg)
                conn.send(msg.encode())
                conn.close()
                KILL = True
                try:
                    # os._exit(0)
                    sys.exit(0)  # kill current thread onlly
                except SystemExit as e:  # got error code
                    print("client kill ", e)
                break
            elif req == "bye":
                msg = 'Server bye...'
                conn.send(msg.encode())
                conn.shutdown(socket.SHUT_RDWR)
                conn.close()
                return None
            await response(conn, receive)  # Echo Reuqest to Response


    async def agent():
        print("agent running ...")
        agent_loop = asyncio.get_event_loop()
        while True:
            if KILL:
                break
            try:
                thread = threading.current_thread()
                if queueIncome.empty():
                    await asyncio.sleep(0.3)
                    continue
            except Exception as e:
                print("thread %s %s" % (type(e), e))
            item = queueIncome.get()  # blocking if queue is empty
            conn, addr = item[0], item[1]
            client_loop.create_task(interactive(conn, addr))
            count = len(asyncio.all_tasks(agent_loop))
            print("client dectected [%d] %s:%s" % (count, addr[0], addr[1]))
        agent_loop.stop()
        print("agent stop ...")

    async def spinner():
        write, flush = sys.stdout.write, sys.stdout.flush
        print("spinner running ...")
        for char in itertools.cycle('CGOGCGOGC-\\|/-\\'):
            if KILL:
                break
            write('%s%s' % (char, '\x08' * len(char)))
            flush()
            await asyncio.sleep(0.1)
        print("spinner stop ...")


    def start_loop():
        asyncio.set_event_loop(client_loop)
        # client_loop.run_until_complete(asyncio.wait([
        #     spinner(),
        #     agent(),
        # ]))
        # client_loop.run_until_complete(asyncio.gather(
        #     spinner(),
        #     agent(),
        # ))
        # asyncio.run_coroutine_threadsafe(spinner(), client_loop)
        # asyncio.run_coroutine_threadsafe(agent(), client_loop)
        client_loop.create_task(agent())
        client_loop.create_task(spinner())
        client_loop.run_forever()
        client_loop.close()
        print("start_loop stop ...")


    async def server_run():
        print("running server on %s:%s" % (conf[0], conf[1]))

        thread = threading.Thread(target=start_loop, args=())
        thread.daemon = True
        thread.start()
        # thread.join()  # block and wait until thread terminated

        while True:
            if not thread.is_alive():
                print("daemon thread terminated.")
                break
            # conn, addr = await srv_loop.sock_accept(server)
            try:
                conn, addr = server.accept()
            except BlockingIOError:
                await asyncio.sleep(0.3)
                continue

            queueIncome.put((conn, addr, ))
            print('client connected %s:%s' % (addr[0], addr[1]))
        print("Server down ...")

    if __name__ == '__main__':

        try:
            asyncio.run(server_run())
        except KeyboardInterrupt:
            pass

        # srv_loop = asyncio.new_event_loop()
        # srv_loop.run_until_complete(server_run())

        # task = asyncio.ensure_future(server_run(), loop=srv_loop)
        # srv_loop.run_until_complete(task)

        # asyncio.run_coroutine_threadsafe(server_run(), srv_loop)
        # asyncio.ensure_future(server_run(), loop=srv_loop)
        # srv_loop.create_task(server_run())
        # srv_loop.run_forever() 


## ==⚡ apscheduler 任务调试
- [Advanced Python Scheduler](https://pypi.org/project/APScheduler/)
- [User guide](https://apscheduler.readthedocs.io/en/3.x/userguide.html)
- [Examples](https://github.dev/agronholm/apscheduler/tree/3.x/examples)
- [IntervalTrigger](https://apscheduler.readthedocs.io/en/3.x/modules/triggers/interval.html)
- [Threading.timer](library/threading.rst)

APScheduler 作用为在指定的时间规则执行指定的作业。

指定时间规则的方式可以是间隔多久执行，可以是指定日期时间的执行，也可以类似 Linux Crontab 方式执行任务。

APScheduler has four kinds of components:

- triggers
- job stores
- executors
- schedulers

Choosing the right scheduler, job store(s), executor(s) and trigger(s)

Your choice of scheduler depends mostly on your programming environment and what you’ll be using APScheduler for. Here’s a quick guide for choosing a scheduler:

- *BlockingScheduler*: use when the scheduler is the only thing running in your process
- *BackgroundScheduler*: use when you’re not using any of the frameworks below, and want the scheduler to run in the background inside your application
- *AsyncIOScheduler*: use if your application uses the asyncio module
- *GeventScheduler*: use if your application uses gevent
- *TornadoScheduler*: use if you’re building a Tornado application
- *TwistedScheduler*: use if you’re building a Twisted application
- *QtScheduler*: use if you’re building a Qt application

```py
from apscheduler.scheduler import Scheduler
import datetime as dt

sched = Scheduler()
sched.start()

def timeout(job_fn, *fn_args, **delta_args):
    """Like setTimeout in javascript; returns a job object

    First argument is the function to be called.

    Positional arguments will be passed to the function when it's called.

    Keyword arguemnts will be passed to datetime.timedelta

    Usage:
        # calls `fn()` after 3 seconds
        timeout(fn, seconds=3)

        # calls `fn(foo, bar)` after 10 seconds
        timeout(fn, foor, bar, seconds=10)
    """
    time = dt.datetime.now() + dt.timedelta(**delta_args)
    return sched.add_date_job(job_fn, time, fn_args)
```

Mimic of setInterval()，此外，Threading Timer 也可以实现并且不会阻塞，使用 asyncio 模块类似以下实现，调用 start() 进入阻塞：

```py
from datetime import datetime

from apscheduler.schedulers.blocking import BlockingScheduler


def job_function():
    print("Hello World")

sched = BlockingScheduler()

# Schedule job_function to be called every one second
sched.add_job(job_function, 'interval', seconds=1)

sched.start()
```


# =🚩 Concurrency in Python
- Operating System Concepts 10th by Abraham Silberschatz, Peter B. Galvin, Greg Gagne
- C++ Concurrency in Action by Anthony Williams
- Seven Concurrency Models in Seven Weeks by Paul Butcher
- Seven Languages in Seven Weeks by Bruce A. Tate
- Learning Python 5th Edition
- Learn Python with Olof Paulson https://scrimba.com/learn/python
- Fearless Concurrency https://doc.rust-lang.org/book/ch16-00-concurrency.html
- Python Concurrency with asyncio by Matthew Fowler
- Mastering Concurrency in Python by Quan Nguyen
- Advanced Python Programming by Lanaro, Dr GabrieleNguyen, QuanKasampalis, Sakis
- GIL 全局解释锁 https://wiki.python.org/moin/GlobalInterpreterLock
- Understanding the Python GIL by David Beazley http://www.dabeaz.com/GIL/
- The Python GIL Visualized by David Beazley http://www.dabeaz.com/blog/2010/01/python-gil-visualized.html
- https://sqljunkieshare.com/2012/01/06/preemptive-vs-non-preemptive-and-multitasking-vs-multithreading/

CPython 是用 C 语言编写的解释器，此外还有 PyPy，Jython，IronPython 等实现。CPython 的独特之处在于它是原始的，维护最久，最受欢迎的 Python 解析器。

CPython 的实现上，使用了一个全局解析锁，Global Interpreter Lock 这是脚本语言解释器用于同步线程的一种机制，它使得任何时刻仅有 一个线程在执行，即便在多核心处理器上。

所以，无论电脑是单核心或者多核，还是代码使用了多线程，因为 GIL 的存在，也就只能运行一个线程，无法同时运行多个线程。

这个锁其实是 Python 之父想一劳永逸解决线程的安全问题，也就是禁止多线程同时运行。


高性能程序开发入门要诀在于 3 个要点：

- 一个核心目标：实现高并发编程模型；
- 一个核心手段：异步编程接口实现单线程并发编程模型；
- 两个核心问题：CPU-bound 和 I/O-bound 并发编程模型解决的是两大问题，bound 表示性能瓶颈所在。

从基础概念辨析入手：

- 同步（Synchronous）
- 异步( Asynchronous)
- 阻塞( Blocking )
- 非阻塞( Nonblocking)

这几个概念直接和 I/O 关联，但又和并发、并行、串行编程模型有关，要从计算机硬件体系、操作系统概念或者通信系统上理解这几个概念。

计算机硬件体系中，CPU 是整个系统最高速度运行的单元，其实是内存，最大延时的是外部设备的 I/O 操作。CPU 运行由晶振产生的稳定周期脉冲时钟信号驱动，假设指令周期为 1 个时钟周期（例如最简单的 NOP 空操作指令），在时钟周期为 1G 主频的 CPU 上运行一条单指令，只需要 1/10^9 秒时间。

而外部设备 I/O 操作，快则以毫秒计量，慢则以秒计量，和快速的 CPU 操作相差 1 亿倍级别。比如机械硬盘读写数据，光磁头寻道操作时间就需要 100ms 级别，所以需要通过缓存技术来解决这么大的延时。

计算机诞生之初，并没有操作系统这种东西，当时使用打孔纸带通过输入机实现对计算机编程，再启动运行。在程序执行完毕之后，打印机输出计算结果，现场监督程序执行的程序员再取走纸带。在这个时期，同一个计算机系统在同一时间只能处理唯一确定的一件事情。

后来人们发明了**批处理系统**，它相当于计算机上的一个任务监督程序，在它的控制和调度下，计算机能够自动的、成批的处理一个或多个用户的任务。在批处理系统的帮助下，各个任务之间可以自动衔接，减少了需要人工建立任务和手工操作的时间，提高了计算机的利用效率。

再后来，随着 CPU 性能的不断提升，出现了**分时系统**和**实时系统**，Time Sharing System & Real Time System。

**分时系统**是把 CPU 的运行时间分成很短的时间片，通常为 10 ~ 100ms 数量级，而 Linux/Unix 中则是 5 ~ 800ms，按时间片轮流把 CPU 分配给各联机任务使用。若某个任务在分配给它的时间片内不能完成其计算，则该任务暂时中断，把 CPU 让给另一任务使用，等待下一轮调度时再继续其运行。由于计算机速度很快，各个任务之间轮转得也很快，给每个用户的感觉是他独占了一台计算机。而每个用户可以通过自己的终端向系统发出各种操作控制命令，在充分的人机交互情况下，完成作业的运行。为了解决分时系统不能及时响应用户指令的情况，又出现了能够在严格的时间范围内完成事件处理、及时响应随机外部事件的**实时系统**。

在芯片技术上，不断提高晶体管的集成度，以前使用多个 CPU 芯片制造的机器获得的性能，现在可以在一个 CPU 芯片上制造，将多个 CPU 集成到一个芯片上，这就是多核处理器 Multicore Processors。


Erlang 之父 Joe Armstrong 用一张咖啡机工作图给 5 岁孩子解释并发（concurrency）并行（parallelism）概念：

- Concurrent：两个排队一个咖啡机，轮流使用（Two queues and one coffee machine）
- Parallel：两个排队两个咖啡机（Two queues and two coffee machines）

![Erlang](https://pic4.zhimg.com/80/v2-674f0d37fca4fac1bd2df28a2b78e633_1440w.jpg)

- 并发：两个队列交替使用一台咖啡机，即一个线程处理多个任务，当然实现方式不仅限于多线程、多进程方式；
- 并行：两个队列同时使用两台咖啡机，即多个线程处理多个任务；
- 串行(Serial)：一个任务队列使用一台咖啡机，多个任务队列就需要排除，即一个线程处理一个任务；

再举行一个生活的例子：

- 你吃饭吃到一半，电话来了，你一直到吃完了以后才去接，这就说明你不支持并发也不支持并行。
- 你吃饭吃到一半，电话来了，你停了下来接了电话，接完后继续吃饭，这说明你支持并发。
- 你吃饭吃到一半，电话来了，你一边打电话一边吃饭，这说明你支持并行。

代码执行也是一个道理：

- 同步执行代码是最直观的程序执行方式，从始到终执行完毕，包括高延时的 I/O 等待也不放过。
- 异步执行代码是最自然程序执行方式，像高延时的 I/O 等待会交给底层通讯机制，等待事件回调通知。

在操作系统层面上，Process 进程是 CPU 分配系统资源的最单位，Threads 线程是 CPU 执行指令的最小调度单位，每个进程至少包含一个线程，它们都是描述程序运行方式的概念。把进程或线程理解为黑咖啡机可能还不太合适，但将多核心 CPU 的每个核心理解为一台咖啡机是恰当的。

Process 和 Threads 单词本意分别是事情处理过程和丝线的意思，在计算机领域是基于操作系统层面上的高度抽象概念，Wiki 上的概念解释：

>In computing, a process is the instance of a computer program that is being executed by one or many threads.

并发强调的是某个时间段同时发生的事，并行却并不是强调某个瞬间同时发生的事，而是一种状态，比如，单车道就无法实现两辆车相向行使，这就不是并行。

“同时”这个概念也是一个容易混淆的词，它同时又体现了实时性的概念，比如 simultaneous translation 同声传译。这个词要和 the same time 进行对比，同声传译永远做不到这点，也只有在多核心或 CPU 上，才能实现程序 the same time 运行。

单线程也可以实现并发，但作为操作系统的基本调度单元，需要按时间片进行切换，虽然时间很很短，但始终不属于并行执行，而在多核心 CPU 上的执行多线程就是并行执行的。

在单核心 CPU 上，是不是就不存在共享资源竞态问题呢？单核 CPU 确实仍然存在线程安全问题，非原子操作的情况下，无法控制 CPU 在什么时机切换线程。比如，自增操作不具备原子性，它包含取数据、+1、数据写回等操作，在不加保护前提下，CPU 可能在其中间隙切换线程，导致线程不安全。


不同语言实现的多线程方式不同，大多数操作系统提供 API 来创建线程，通过 API 方式创建的称为 1:1 线程模型，可以称为 native-threading。

而 Rust 和许多语言一样，也实现了自己的线程模型，语言层面上的实现称为 green-threading 模型，即 M:N 线程模型，M 和 N 不一定相等，即操作系统在 N 个线程上运行 M 个绿色线程。

Erlang 采用 M:N 模型很好的解决了 Green Thread 存在的问题，每个 native thread 都有一个自己的调度器。而且，Erlang 采用 shared nothing concurrency，可以把 Native Thread 存在的问题都抛之脑后。


总结起来，同步执行意味着等待，在高延时的 I/O 操作中，或者内存读写成为软件瓶颈时，必需伴随阻塞状态。这个问题的解决方案就是异步 I/O 机制，所以在 CPU 资源越来越丰富的条件下，各种编程语言，不限 Rust、Golang、Python、JavaScript 等等都提供了异步编程接口。

所以，异步是解决同步（阻塞）等待问题的机制，并发是一种高性能软件目标需求，异步、并行、多线程或者单线程都可以是实现并发编程模型的形式，这些概念交织在一起很容易混淆。

单线程并发的实现不局限于多异步 I/O 接口 *asyncio*，原始一点的就是回调函数方式。异步 I/O 机制要高级并且复杂一点，通常，需要一个事件循环机制来处理异步 I/O 产生的各种任务。*Event loop* 对象负责执行异步代码，以及决定异步函数如何进行切换，协程的运行机制也是在事件循环中实现的。

生成器 Generators 是一个可以枚举的编程接口，重要的是它可以用来中断函数的执行，且具有 *send()* 通信能力，是实现异步执行的基础。


为了拥有更轻量化的线程，现代编程语言环境引入了协程 Coroutine 的概念，在语法层面实现了纤程 Fiber 的功能。可以理解为由程序而非操作系统实现调度的线程，纤程和协程描述了相同的概念，都不是真正意义上的并行。但是，它们能让你更容易地处理异步 I/O 的问题。

从协程的实现上也可以看出它的优势在于：

➡ 执行效率极高，因为不需要通过操作系统层面切换线程，而是直接在进程内部完成协程切换，由程序自身控制，没有切换线程的开销。

➡ 因为只有一个线程，不需要多线程编程模型下的加锁机制，也不存在共享数据 Race Condition 问题，因此执行效率高很多。

协程具有处理 I/O 密集型程序最高效率，但是计算密集型应用不是它的长处，如要充分发挥 CPU性能，可以结合多进程。

在 Python 异步 I/O 接口中，引入了 Coroutines、Tasks、Feture 等通用概念，前者是一个函数装饰器，后两者是类型，它们都是可等待对象。

Awaitables Objects

    ➡ `Coroutines` (Decorator)
    ➡ `Tasks`
    ➡ `Futures`

在异步 I/O 接口中，一个可等待对象意味着这是一个可跳过同步等待时间功能，结合 `async` 关键字定义一个协程函数，并配置 `await` 关键字调用可等待对象，这就是异步 I/O 编程接口的基本用法。


操作系统在线程与异步之间的任务轮换的方式上存在巨大差别。

多线程模型中，操作系统实际上知道每个线程，并且可以随时中断它，以开始运行不同的线程。这被称为抢占式多任务处理，Pre-emptive multitasking，因为操作系统具有线程调度权，可以主动调度线程来进行切换，这意味着非原子操作可能被操作系统打断。抢占式多任务也叫做分时多任务 Time-shared multitasking。

而 Asyncio 异步模型中，使用的是协同多任务处理，Cooperative Multitasking，异步任务必须通过宣布何时准备好被切换来配合。

下表对协同多任务处理、抢先多任务处理，与多进程 Multiprocessing 实现的并发进行对比：

| Type | Cores |                  CPU Scheduling / Switching Decision                  |
|------|-------|-----------------------------------------------------------------------|
| PMT  | 1     | The operating system decides when to switch tasks external to Python. |
| CMT  | 1     | The tasks decide when to give up control.                             |
| MP   | Many  | The processes all run at the same time on different processors.       |

参考材料：操作系统恐龙书 Operating System Concepts by Abraham Silberschatz, Greg Gagne, Peter B. Galvin。

在应该使用多线程、还是多进程的程序模块选择上，有一个共识是：计算密集型应用选择多进程，I/O 密集型应用选择多线程。

多进程有助于利用现有的 CPU 运算能力，但随之带来的是进程间通信问题，Inter-Process Communication，因为进程间禁止共享内存，同时还有进程同步需求，毕竟不需要通信的多进程应用少见。而多线程在处理 I/O 有足够的运行性能，并且避免占用过多的系统资源。当然，同一进程的多个线程路虽然可以共享内存，避去了进程间通信的问题，但是多线程的资源共享、抢夺也是一大棘手问题。

➡ 多进程有进程同步方法、进程间通信问题；
➡ 多线程有共享数据竞态处理，需要解决数据加锁保护方面的问题；

为了解决软件工程问题，人们总结了一些并发模型，比如：

- Fork & Join 模型，C++ 标准库采用，将大任务拆解为小任务并发执行，结果再拼起来。
- Actor Model 模型，Erlang 采用，将问题拆解多个步骤交给多个 Actor 进程处理，它们之间只通过直接发消息进行通信。
- CSP 模型，Communicating Sequential Processes Model，Golang 语言采用，各个拆解步骤由 goroutine 协程处理，之间通过订阅通话的频道(管道)来协作。
- 线程 & 锁模型，共享数据通过锁机制保护面实现多线程协作，避免被多个线程进行读写而出来数据错误。

在 Go/Python 语言的文档中都有一句口号：“Do not communicate by sharing memory; instead, share memory by communicating.”

参考材料：Seven Concurrency Models in Seven Weeks by Paul Butcher


最后再说说高并发，它和并发这个概念差了一个“高”字，是个宽泛得多的概念。高并发是指可以让软件系统在一段时间内能够处理大量的请求。比如，每秒钟可以完成 10 万个请求，这种高并发是互联网系统的一个重要的特征。并发概念上说的是“处理”，并行概念上说的是“执行”，而高并发说的是最终效果。只要能达到效果，不管怎么实现都行。因此，极端一点高并发甚至并不一定需要并行，只要处理速度快的足够满足要求就可以。

如启动一个 Nginx 进程，它只能用到一个 CPU 核心，也就不可能并行。但是他如果能每秒能处理 10 万个请求，而业务需求只要求 8 万个请求就可以了，那么这个单进程的 Nginx 本身就算高并发了。

拓展一下，从商业上考虑，高并发实际的意思是“用尽可能少的资源实现足够满足需要的并发请求数量，以形成竞争优势“，用有限资源、短时间内处理大量请求。



## ==⚡ Speed Up Your Python Program With Concurrency
- Speed Up Your Python Program With Concurrency by Jim Anderson https://realpython.com/python-concurrency/

Jim Anderson 关于并发编程模型的这篇教程写得真得是不要太好了，我决定不翻译，而是摘录其中关键的部分，另外再添加一些需要结合自己状况的一些补充内容，作为我的 Concurrency in Python 文章的实操代码。

在开始之前，引用原文配置的一条幽默的测试题：

> Python Concurrency Quiz
> You have an I/O-bound program that takes about 2 seconds to run and that only gets run once a week. Which concurrency library should you use?
>
> A. Multiprocessing
> B. Threading
> C. You should not use concurrency.
> D. Asyncio


内容目录：

- What Is Concurrency?
- What Is Parallelism?
- When Is Concurrency Useful?
- How to Speed Up an I/O-Bound Program
    - Synchronous Version
    - threading Version
    - asyncio Version
    - multiprocessing Version
- How to Speed Up a CPU-Bound Program
    - CPU-Bound Synchronous Version
    - threading and asyncio Versions
    - CPU-Bound multiprocessing Version
- When to Use Concurrency
- Conclusion

How some of Python’s concurrency methods compare, including threading, asyncio, and multiprocessing.

✅ What Is Concurrency?

The dictionary definition of concurrency is simultaneous occurrence. In Python, the things that are occurring simultaneously are called by different names (**thread**, **task**, **process**) but at a high level, they all refer to a sequence of instructions that run in order.

✅ What Is Parallelism?

So far, you’ve looked at concurrency that happens on a single processor. What about all of those CPU cores your cool, new laptop has? How can you make use of them? multiprocessing is the answer.

With multiprocessing, Python creates new processes. A process here can be thought of as almost a completely different program, though technically they’re usually defined as a collection of resources where the resources include memory, file handles and things like that. One way to think about it is that each process runs in its own Python interpreter.

Because they are different processes, each of your trains of thought in a multiprocessing program can run on a different core. Running on a different core means that they actually can run at the same time, which is fabulous. There are some complications that arise from doing this, but Python does a pretty good job of smoothing them over most of the time.

✅ When Is Concurrency Useful?

Concurrency can make a big difference for two types of problems. These are generally called CPU-bound and I/O-bound.

I/O-bound problems cause your program to slow down because it frequently must wait for input/output (I/O) from some external resource. They arise frequently when your program is working with things that are much slower than your CPU.

Examples of things that are slower than your CPU are legion, but your program thankfully does not interact with most of them. The slow things your program will interact with most frequently are the file system and network connections.

Let’s see what that looks like:

![Timing Diagram of an I/O Bound Program](https://files.realpython.com/media/IOBound.4810a888b457.png)

In the diagram above, the blue boxes show time when your program is doing work, and the red boxes are time spent waiting for an I/O operation to complete. This diagram is not to scale because requests on the internet can take several orders of magnitude longer than CPU instructions, so your program can end up spending most of its time waiting. This is what your browser is doing most of the time.

On the flip side, there are classes of programs that do significant computation without talking to the network or accessing a file. These are the CPU-bound programs, because the resource limiting the speed of your program is the CPU, not the network or the file system.

Here’s a corresponding diagram for a CPU-bound program:

![Timing Diagram of an CPU Bound Program](https://files.realpython.com/media/CPUBound.d2d32cb2626c.png)

As you work through the examples in the following section, you’ll see that different forms of concurrency work better or worse with CPU-bound and I/O-bound programs. Adding concurrency to your program adds extra code and complications, so you’ll need to decide if the potential speed up is worth the extra effort. By the end of this article, you should have enough info to start making that decision.


### ✅ I/O-bound - Synchronous Version

- https://docs.python-requests.org/en/master/
- https://docs.python-requests.org/en/master/user/advanced/

We’ll start with a non-concurrent version of this task. Note that this program requires the requests module. You should `run pip install requests` before running it, probably using a virtualenv. This version does not use concurrency at all:

使用 requests 包简化网络请求操作，其中 Session 是一个带有 Cookie 会话支持的实现，使用 httpbin 服务进行测试：

```py
import requests
s = requests.Session()
r = s.get('https://httpbin.org/cookies/set/sessioncookie/xyz')
print(r.text) # {"cookies": {"sessioncookie": "xyz"} }
r = s.get('https://httpbin.org/cookies')
print(r.text) # {"cookies": {"sessioncookie": "xyz"} }
```

第一个示范代码版本为同步代码实现，没有异步、没有并发，目的是展示高延时 I/O 操作条件下的同步方案弊端：同步等待花费大量时间。每一个页面请求都需要等待上一个请求返回数据后再进行，在这段时间整个系统只向网络发送了一个请求，连网络带宽都没有使用完，更别说 CPU 资源。

- 注意 sites 列表后面的 * 80 表示数据复制为 80 份进行测试；
- 测试包含两个网站地址，主要目的是提供一个高延时 I/O 数据，一般页面访问从几百毫秒到几秒都是正常的；
- 这个基本测试大概需要一到两分钟完成，同机器测试用时 47.69s；

```py
import requests
import time


def download_site(url, session):
    with session.get(url) as response:
        print(f"Read {len(response.content)} from {url}")


def download_all_sites(sites):
    with requests.Session() as session:
        for url in sites:
            download_site(url, session)


if __name__ == "__main__":
    sites = [
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ] * 80
    start_time = time.time()
    download_all_sites(sites)
    duration = time.time() - start_time
    print(f"Downloaded {len(sites)} in {duration} seconds")
```

### ✅ I/O-bound - threading Version

As you probably guessed, writing a threaded program takes more effort. You might be surprised at how little extra effort it takes for simple cases, however. Here’s what the same program looks like with threading.

In this version, you’re creating a ThreadPoolExecutor, which seems like a complicated thing. Let’s break that down: `ThreadPoolExecutor` = Thread + Pool + Executor.

The other interesting change in our example is that each thread needs to create its own requests.Session() object. When you’re looking at the documentation for requests, it’s not necessarily easy to tell, but reading this issue 2766, it seems fairly clear that you need a separate Session for each thread.

https://github.com/requests/requests/issues/2766

This is one of the interesting and difficult issues with threading. Because the operating system is in control of when your task gets interrupted and another task starts, any data that is shared between the threads needs to be protected, or thread-safe. Unfortunately requests.Session() is not thread-safe.

There are several strategies for making data accesses thread-safe depending on what the data is and how you’re using it. One of them is to use thread-safe data structures like Queue from Python’s queue module.

These objects use low-level primitives like threading.Lock to ensure that only one thread can access a block of code or a bit of memory at the same time. You are using this strategy indirectly by way of the ThreadPoolExecutor object.

Another strategy to use here is something called thread local storage. threading.local() creates an object that looks like a global but is specific to each individual thread. In your example, this is done with thread_local and get_session():


将同步版本改成多线程版本，通过多个线程同时执行页面请求，例子设置为 5 个线程，这样意味着同样每执行 5 个页面请求只需要大约等待一个连接所花费的时间，也就是大概比同步版本节省了 4/5 的时间，同机器测试用时 8.90s，当然这很受网络环境的影响。

多线程版本要点：

- 使用 concurrent.futures 提供的现成线程池管理工具，通过 ThreadPoolExecutor 方法获取；
- 线程池管理工具 Executor 提供 map() 方法可以将数据一对一地指派给空闲线程；
- 使用 threading 线程库 threading.local() 提供的当前线程本地变量，保证数据的线程安全；
- 在线程本地变量创建 requests.Session 实例，因为要确保它在独立线程上运行；

![Multi-Threading Execution Timing Diagram](https://files.realpython.com/media/Threading.3eef48da829e.png)

```py
import concurrent.futures
import requests
import threading
import time


thread_local = threading.local()


def get_session():
    if not hasattr(thread_local, "session"):
        thread_local.session = requests.Session()
    return thread_local.session


def download_site(url):
    session = get_session()
    with session.get(url) as response:
        print(f"Read {len(response.content)} from {url}")


def download_all_sites(sites):
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        executor.map(download_site, sites)


if __name__ == "__main__":
    sites = [
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ] * 80
    start_time = time.time()
    download_all_sites(sites)
    duration = time.time() - start_time
    print(f"Downloaded {len(sites)} in {duration} seconds")
```

虽然多线程大大提高了性能，同时也展示了如何在线程之前共享数据，这里是页面地址数据，但是多个线程对共享数据的读写存在 Race conditions 问题，竞态是多线程同时读写数据，导致数据逻辑混乱引发程序错误的状态，这种状态也即是 Non-Therad Safe 非线程安状态。

为了演示这种状态，使用以下代码进行测试：

- 创建一个全局变量 counter 作为线程间共享了的数据；
- 创建 5000 线程，每个线程对 counter 自增操作，加 100；
- 在线程安装的状态下，counter 最后的值总是为 5000 * 100 = 500000

但是，在 CPython 运行这个例子也会打印出 counter = 500000，实际上这只是一种巧合。因为，CPython 实现上使用了 GIL 全局锁来保证单线程运行，在 Python 层面，list 、dict 等内建对象是线程安全的，这是最基本的常识。

CPython 开发者认为测试结果表明，引入对象锁获得的多线程 并行执行能力，几乎被加解锁开销完全抵消。而在单线程环境下， GIL 方案优势明显，无需频繁加锁、解锁。


即使是单线程运行，要在这 += 操作中间遇到操作系统的调度也是相当罕见，无论如何，就算是百万之一的出错机率，也足以说明这个程序不可靠！

重要的是，counter += 1 不是原子操作，这里需要先读取数据再加 1 后保存，涉及两步操作，并且没有加保护，所以不是线程安全的操作。

操作系统并不知道代码结构，它只是按线程调度算法安排线程的运行，对于现代高速 CPU 来说，100 个数的自增操作是很快可以完成的工作，并且通常会在一个任务切换前就完成。所以，当第二个线程开始工作时，读取到的 counter 数据就是上一个线程处理好的数据，是正确的。对于已经上线的产品来说，这种隐秘的逻辑错误是最致命，也是最难解决的问题之一。

```py
import concurrent.futures

counter = 0

def increment_counter(fake_value):
    global counter
    for _ in range(100):
        counter += 1
    pass

def main():
    fake_data = [x for x in range(5000)]
    counter = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers = 5000) as executor:
        executor.map(increment_counter, fake_data)
    pass

if __name__ == "__main__":
    main()
    print(f"counter = {counter}")
```

为了让竞态导致数据逻辑混乱问题更加明显，可以使用 time.sleep() 函数让线程进入短时暂停运行，模拟重运算工作量，并大大增加中间遭遇 CPU 调度的机会：

```py
c = counter
time.sleep(0.1**4)
counter = c+1
# tid = threading.get_native_id()
# ppid = os.getppid()
# pid = os.getpid()
# print(f"counter = {counter} parent {ppid} pid: {pid} tid: {tid}" )
```


### ✅ I/O-bound - asyncio Version
https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work/51116910#51116910

Generators are objects that allow us to suspend the execution of a python function. User curated generators are implement using the keyword yield. By creating a normal function containing the yield keyword, we turn that function into a generator.

Communicating with a generator

A less-known feature of generators, is the fact that you can communicate with them using two methods: *send()* and *throw()*.

>>> def test():
...     val = yield 1
...     print(val)
...     yield 2
...     yield 3
...
>>> gen = test()
>>> next(gen)
1
>>> gen.send("abc")
abc
2
>>> gen.throw(Exception())

Returning values from generators

Returning a value from a generator, results in the value being put inside the StopIteration exception. We can later on recover the value from the exception and use it to our need.

>>> def test():
...     yield 1
...     return "abc"
...
>>> gen = test()
>>> next(gen)
1
>>> try:
...     next(gen)
... except StopIteration as exc:
...     print(exc.value)
...
abc

模块参考文档：

    +-- Doc\library
    |  ✒ ipc.rst               => Networking and Interprocess Communication
    |   • - asyncio.rst              => `asyncio` --- Asynchronous I/O
    |   • High-level APIs
    |   |   • asyncio-task.rst       => Coroutines and Tasks
    |   |   • asyncio-stream.rst     => Streams
    |   |   • asyncio-sync.rst       => Synchronization Primitives
    |   |   • asyncio-subprocess.rst => Subprocesses
    |   |   • asyncio-queue.rst      => Queues
    |   |   • asyncio-exceptions.rst => Exceptions
    |   • Low-level APIs
    |   |   • asyncio-eventloop.rst  => Event Loop
    |   |   • asyncio-future.rst     => Futures
    |   |   • asyncio-protocol.rst   => Transports and Protocols
    |   |   • asyncio-policy.rst     => Policies
    |   |   • asyncio-platforms.rst  => Platform Support
    |   • Guides and Tutorials
    |   |   • asyncio-api-index.rst  => High-level API Index
    |   |   • asyncio-llapi-index.rst=> Low-level API Index
    |   |   • asyncio-dev.rst        => Developing with asyncio   


异步 I/O 实现版本需要使用 aiohttp 模块：

    https://aiohttp.readthedocs.io/en/stable/
    pip install aiohttp[speedups]


异步版本在测试中，网络响应比多线程的响应要好，速度明显要快，同时间段相同网络环境下测试时间为 2.50 秒。

原因极有可能是受到 GIL - Global Interpreter Lock 全局解释器锁的限制，在 GIL 同步线程机制下，它使得任何时刻仅有一个线程在执行。即便在多核心处理器上，使用 GIL 的解释器也只允许同一时间执行一个线程，并且在 I/O-bound 应用中，线程的切换明显会劣于异步协和任务的切换。

协程本身运行于单线程环境，即不会触发 GIL，同时也不需要系统的线程调度器参与抢占式的调度，避免了多线程的上下文切换。所以它的性能要比多线程好，相比多线程，协程只需要极少的系统资源。

协程的缺点也是明显的，因为单线程，所以，当其中一个任务不稳定时，将影响整个线程的工作，这直接导致异步多任务的作用完全无效，所以升级版是多进程版本。

另外，协程锁是因为异步编程也会因为执行时机的不确定引起逻辑上的混乱，为了协程同步，保证逻辑上先后关系引入协程锁。

如果协程在操作共享变量的过程中，没有主动放弃执行权，没有主动请求挂起，那就不需要加锁，执行过程本身就是安全的。

协程锁原理很简单，同一个 key 只有一个协程能执行，其它同一个 key 的协程将队列，这个协程执行完会唤醒下一个协程。

注意，协程锁只应用于单线程环境，所以并不能保证线程安装。

异步 I/O 接口中有三类对象是可等待的，Awaitables：

✅.. rubric:: Coroutines
✅.. rubric:: Tasks
✅.. rubric:: Futures

异步 I/O 版本的要点：

- 使用 async 声明异步函数，并且使用 await 等待异步函数执行返回结果；
- 使用 asyncio.ensure_future() 创建 Future，这是异步任务的父类；
- 使用 asyncio.create_task() 创建任务，将异步函数包装成协程；
- 等待 asyncio.gather() 汇集的异步任务；
- 使用 asyncio.run() 执行异步任务;
- Python 3.7 以下旧版本，先获取事件环再执行 asyncio.get_event_loop().run_until_complete()；


```py
import asyncio
import time
import aiohttp


async def download_site(session, url):
    async with session.get(url) as response:
        print("Read {0} from {1}".format(response.content_length, url))


async def download_all_sites(sites):
    async with aiohttp.ClientSession() as session:
        tasks = []
        for url in sites:
            task = asyncio.ensure_future(download_site(session, url))
            tasks.append(task)
        await asyncio.gather(*tasks, return_exceptions=True)


if __name__ == "__main__":
    sites = [
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ] * 80
    start_time = time.time()
    # Older version then Python 3.7
    # asyncio.get_event_loop().run_until_complete(download_all_sites(sites))
    # Python 3.7+
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(download_all_sites(sites))
    duration = time.time() - start_time
    print(f"Downloaded {len(sites)} sites in {duration} seconds")
```

![Timing Diagram of a Asyncio Solution](https://files.realpython.com/media/Asyncio.31182d3731cf.png)



Python 3.7 后对 asyncio 进行了改进，可以直接调用 asyncio.run() 执行协程程序，而不需管底层 API，事件循环 loop 的操作。像 aiohttp 这类第三方协程库都是依赖于 asyncio 标准库，但它对 Windows 的支持本来就不好。

Python 3.8 后默认为 Windows 系统启用 ProactorEventLoop 事件循环，文档描述了其在 Windows 下的缺陷：https://docs.python.org/zh-cn/3/library/asyncio-platforms.html#windows 👈

在 Windows 上，默认的事件循环 ProactorEventLoop 支持子进程，而 SelectorEventLoop 则不支持。

引发异常的函数是 ProactorBasePipeTransport.__del__ ，aiohttp 在程序退出释放内存时自动调用了其__del__ 方法，一串连环反应最终抛出了 RuntimeError: Event loop is closed

一般的协程程序不使用 ProactorBasePipeTransport 也不会出现这种问题，解决方法可以加 try except 处理，当然这种隐藏 Exception 的操作并不好，即使判断 str(exception) == "Event loop is closed" 也不是一种好方法。

更好的方法是在调用 run 函数前，替换默认的 ProactorEventLoop 为 SelectorEventLoop，只是这样就不支持子进程：

```py
asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
asyncio.run(main())
```

The Problems With the asyncio Version

There are a couple of issues with asyncio at this point. You need special async versions of libraries to gain the full advantage of asyncio. Had you just used requests for downloading the sites, it would have been much slower because requests is not designed to notify the event loop that it’s blocked. This issue is getting smaller and smaller as time goes on and more libraries embrace asyncio.

Another, more subtle, issue is that all of the advantages of cooperative multitasking get thrown away if one of the tasks doesn’t cooperate. A minor mistake in code can cause a task to run off and hold the processor for a long time, starving other tasks that need running. There is no way for the event loop to break in if a task does not hand control back to it.




### ✅ I/O-bound - multiprocessing

Unlike the previous approaches, the multiprocessing version of the code takes full advantage of the multiple CPUs that your cool, new computer has. Or, in my case, that my clunky, old laptop has. Let’s start with the code:

多进程版本测试中明显感受到重度资源消耗，这也是多核心 CPU 资源利用的最好方式，但是在 I/O-bound 问题上，就算增加再多的 CPU 也无法提高 I/O 瓶颈限制。所以在多进程版本中，HTTP 请求的效率并不及异步 I/O 版本来得好，测试结果时间在 6.50 秒上也显示了差别。但是表现仍然好于多线程版本，一方面 CPython 的 GIL 无法发挥多线程作用，另一方面，多进程确实是利用 CPU 资源的最佳方式。

根据不同的系统，多进程模块提供多种方式启动进程，set_start_method() 函数设置启动进程的方式：

- *spawn*：从头构建一个子进程，父进程的数据等拷贝到子进程空间内，拥有自己的Python解释器，所以需要重新加载一遍父进程的包，因此启动较慢，由于数据都是自己的，安全性较高。

- *fork*：除了必要的启动资源外，其他变量，包，数据等都继承自父进程，并且是copy-on-write的，也就是共享了父进程的一些内存页，因此启动较快，但是由于大部分都用的父进程数据，所以是不安全的进程。

- *forkserver*： 启动一个进程服务器，然后需要新进程，就连接服务器请求 `os.fork()` 创建新进程。


多进程版本要点：

- 使用 multiprocessing.Pool() 创建进程池，默认进程数由 `os.cpu_count()` 返回值指定；
- 使用 multiprocessing.Process() 创建进程；
- 使用 multiprocessing.Queue() 创建队列在多进程间安全地共享对象数据；
- 使用 map() 方法将数据传递给每个进程；

```py
import requests
import multiprocessing
import time

session = None


def set_global_session():
    global session
    if not session:
        session = requests.Session()


def download_site(url):
    with session.get(url) as response:
        name = multiprocessing.current_process().name
        print(f"{name}:Read {len(response.content)} from {url}")


def download_all_sites(sites):
    with multiprocessing.Pool(initializer=set_global_session) as pool:
        pool.map(download_site, sites)


if __name__ == "__main__":
    sites = [
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ] * 80
    start_time = time.time()
    download_all_sites(sites)
    duration = time.time() - start_time
    print(f"Downloaded {len(sites)} in {duration} seconds")
```


![Timing Diagram of a Multiprocessing Solution](https://files.realpython.com/media/MProc.7cf3be371bbc.png)



### ✅ CPU-bound - multiprocessing

对于 CPU-bound 问题，只能在 CPU 的运算能力，即硬件上提高性能，其次是尽量用好现有的 CPU 资源。如果使用异步、或多线程，不仅不会有帮助，反而会因为频频切换任务浪费 CPU 资源。

加锁也是一个重大的资源消耗，并且加锁意味在关键位置，只能单进程/线程运行。所以，从算法设计上，能不加锁是最好，一定要加锁，那就要考虑什么形式的锁更优。

更多的情况是，多进程程序需要相互通信，完全隔离运行的多进程/线程应用是不多见的。

The Problems With the multiprocessing Version

There are some drawbacks to using multiprocessing. They don’t really show up in this simple example, but splitting your problem up so each processor can work independently can sometimes be difficult.

Also, many solutions require more communication between the processes. This can add some complexity to your solution that a non-concurrent program would not need to deal with.

Pool 可以同步使用、异步使用进程池，配合队列可以获取进程返回值。

                  | Multi-args   Concurrence    Blocking     Ordered-results
---------------------------------------------------------------------
Pool.apply        | ✅          ⛔             ✅           ✅
Pool.apply_async  | ✅          ✅             ⛔           ⛔
---------------------------------------------------------------------
Pool.map          | ⛔          ✅             ✅           ✅
Pool.map_async    | ⛔          ✅             ⛔           ✅
---------------------------------------------------------------------
Pool.starmap      | ✅          ✅             ✅           ✅
Pool.starmap_async| ✅          ✅             ⛔           ⛔

    ## ✅ class:: Pool([processes[, initializer[, initargs[, maxtasksperchild [, context]]]]])
    ## ⚡    method:: apply         (func[, args[, kwds]])
    ## ⚡    method:: map           (func, iterable[, chunksize])
    ## ⚡    method:: imap          (func, iterable[, chunksize])
    ## ⚡    method:: imap_unordered(func, iterable[, chunksize])
    ## ⚡    method:: starmap       (func, iterable[, chunksize])
    ## ⚡    method:: apply_async   (func[, args[, kwds[, callback[, error_callback]]]])
    ## ⚡    method:: map_async     (func, iterable[, chunksize[, callback[, error_callback]]])
    ## ⚡    method:: starmap_async (func, iterable[, chunksize[, callback[, error_callback]]])
    ## ✅ class:: AsyncResult = ApplyResult       # create alias -- see #17805)
    ## ✅ class:: MapResult(ApplyResult)
    ## ⚡    method:: get([timeout])
    ## ⚡    method:: wait([timeout])
    ## ⚡    method:: ready()
    ## ⚡    method:: successful()
    ## ✅ class IMapIterator(object)
    ## ✅ class IMapUnorderedIterator(IMapIterator)
    ## ⚡    method:: next([timeout])

`Pool.imap` is lazier version of `.map`, can be MUCH slower than `Pool.map()`, and it return a iterator.

Async methods submit all the processes at once and retrieve the results once they are finished. Use get method to obtain the results.

`Pool.map` (or `Pool.apply`) methods are very much similar to Python built-in map(or apply). They block the main process until all the processes complete and return the result.

`Pool.starmap` like `Pool.map` except that the elements of the *iterable* are expected to be iterables that are unpacked as arguments. Hence an *iterable* of ``[(1,2), (3, 4)]`` results in `[func(1,2), func(3,4)]`.

求值方法设置 timeout 可以在指定时间后触发 multiprocessing.TimeoutError，如果进程未产生结果。在未处理进程异常时，任何进程触发异常会导致整个应用计算失败。


```py
import multiprocessing
import time

def cpu_bound(number):
    return sum(i * i for i in range(number))

def find_sums_synchronous(numbers):
    sc = 0 # 6848960830 # 6666846668950010830
    for it in numbers:
        sc += cpu_bound(it)
    print(f"result: {sc}")


def find_sums_apply(numbers):
    """
    pool.apply() version: Blocking, not parallel
    """
    with multiprocessing.Pool() as pool:
        sc = 0
        for arg in numbers:
            result = pool.apply(cpu_bound, [arg])
            sc += result
        print(f"result: {(sc)}")

def find_sums_apply_async(numbers):
    """
    apply_async version: Non-Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = []
        sc = 0
        for arg in numbers:
            asyncresult = pool.apply_async(cpu_bound, [arg])
            result.append(asyncresult)
        for it in result:
            sc += it.get()
        print(f"result: {(sc)}")


def find_sums_imap(numbers):
    """
    imap - map lazier version: Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map(cpu_bound, numbers)
        print(f"result: {sum(result)}")

def find_sums_imap_unordered(numbers):
    """
    imap - unordered version: Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map(cpu_bound, numbers)
        print(f"result: {sum(result)}")


def find_sums_map(numbers):
    """
    map version: Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map(cpu_bound, numbers)
        print(f"result: {sum(result)}")
        
def find_sums_map_async(numbers):
    """
    map_async version: Non-Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map_async(cpu_bound, numbers)
        print(f"result: {sum(result.get())}")

def find_sums_starmap(numbers):
    """
    starmap version: Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map(cpu_bound, numbers)
        print(f"result: {sum(result)}")
        
def find_sums_starmap_async(numbers):
    """
    starmap_async version: Non-Blocking, parallel
    """
    with multiprocessing.Pool() as pool:
        result = pool.map_async(cpu_bound, numbers)
        print(f"result: {sum(result.get())}")

if __name__ == '__main__':
    numbers = [1_000_000 + x for x in range(20)]
    ticks = []
    ticks.append(time.time())

    find_sums_synchronous(numbers)
    ticks.append(time.time())
    print(f"find_sums_synchronous in {ticks[-1] - ticks[-2]} seconds\n")

    find_sums_apply(numbers)
    ticks.append(time.time())
    print(f"      find_sums_apply in {ticks[-1] - ticks[-2]} seconds\n")

    find_sums_apply_async(numbers)
    ticks.append(time.time())
    print(f"find_sums_apply_async in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_map(numbers)
    ticks.append(time.time())
    print(f"        find_sums_map in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_map_async(numbers)
    ticks.append(time.time())
    print(f"  find_sums_map_async in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_imap(numbers)
    ticks.append(time.time())
    print(f"       find_sums_imap in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_imap_unordered(numbers)
    ticks.append(time.time())
    print(f"find_sums_imap_unordered in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_starmap(numbers)
    ticks.append(time.time())
    print(f"       find_sums_starmap in {ticks[-1] - ticks[-2]} seconds\n")
    
    find_sums_starmap_async(numbers)
    ticks.append(time.time())
    print(f" find_sums_starmap_async in {ticks[-1] - ticks[-2]} seconds\n")
```


# =🚩 Mouse & Keyboard Control
- https://pypi.org/project/mouse/
- https://github.com/boppreh/mouse#api
- https://pyautogui.readthedocs.io/en/latest/
- https://nitratine.net/blog/post/simulate-keypresses-in-python
- https://www.kernel.org/doc/Documentation/input/event-codes.txt
- https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendinput
- [`ctypes` Sources Code](Python-3.10.2\Modules\_ctypes\ctypes.c)
- [`ctypes` --- A foreign function library for Python](library/ctypes.rst)

Python ctypes 模块提供了 Windows 系统 API 调用，输入事件数据流的数据可以通过 SendInput 插入新的事件数据，旧 API 有 keybd_event, mouse_event。

- 继承 ctypes.Structure 实现 C/C++ 的结构体
- 继承 ctypes.Union 实现 C/C++ 的联合体
- 使用 ctypes.pointer() 获取指针
- 使用 ctypes.byref() 函数参数中传递指针

所有 ctypes 导出类型会在 `_ctypes_add_types()` 方法中注册。

另外，ctypes.wintypes 包含了 Windows 平台的各种类型别名。

```cpp
UINT SendInput(
  [in] UINT    cInputs,
  [in] LPINPUT pInputs,
  [in] int     cbSize
);

typedef struct tagINPUT {
  DWORD type;
  union {
    MOUSEINPUT    mi;
    KEYBDINPUT    ki;
    HARDWAREINPUT hi;
  } DUMMYUNIONNAME;
} INPUT, *PINPUT, *LPINPUT;

typedef struct tagMOUSEINPUT {
  LONG      dx;
  LONG      dy;
  DWORD     mouseData;
  DWORD     dwFlags;
  DWORD     time;
  ULONG_PTR dwExtraInfo;
} MOUSEINPUT, *PMOUSEINPUT, *LPMOUSEINPUT;

typedef struct tagKEYBDINPUT {
  WORD      wVk;
  WORD      wScan;
  DWORD     dwFlags;
  DWORD     time;
  ULONG_PTR dwExtraInfo;
} KEYBDINPUT, *PKEYBDINPUT, *LPKEYBDINPUT;

typedef struct tagHARDWAREINPUT {
  DWORD uMsg;
  WORD  wParamL;
  WORD  wParamH;
} HARDWAREINPUT, *PHARDWAREINPUT, *LPHARDWAREINPUT;
```

SendInput API 及结构体应用示范：

```py
# https://github.com/Gautam-J/Self-Driving-Car/blob/master/directkeys.py
import ctypes
import time

SendInput = ctypes.windll.user32.SendInput

W = 0x11
A = 0x1E
S = 0x1F
D = 0x20
UP = 0xC8
LEFT = 0xCB
RIGHT = 0xCD
DOWN = 0xD0
ENTER = 0x1C
ESC = 0x01
TWO = 0x03

# C struct redefinitions
PUL = ctypes.POINTER(ctypes.c_ulong)


class KeyBdInput(ctypes.Structure):
    _fields_ = [("wVk", ctypes.c_ushort),
                ("wScan", ctypes.c_ushort),
                ("dwFlags", ctypes.c_ulong),
                ("time", ctypes.c_ulong),
                ("dwExtraInfo", PUL)]


class HardwareInput(ctypes.Structure):
    _fields_ = [("uMsg", ctypes.c_ulong),
                ("wParamL", ctypes.c_short),
                ("wParamH", ctypes.c_ushort)]


class MouseInput(ctypes.Structure):
    _fields_ = [("dx", ctypes.c_long),
                ("dy", ctypes.c_long),
                ("mouseData", ctypes.c_ulong),
                ("dwFlags", ctypes.c_ulong),
                ("time", ctypes.c_ulong),
                ("dwExtraInfo", PUL)]


class Input_I(ctypes.Union):
    _fields_ = [("ki", KeyBdInput),
                ("mi", MouseInput),
                ("hi", HardwareInput)]


class Input(ctypes.Structure):
    _fields_ = [("type", ctypes.c_ulong),
                ("ii", Input_I)]


# Actuals Functions
def PressKey(hexKeyCode):
    extra = ctypes.c_ulong(0)
    ii_ = Input_I()
    ii_.ki = KeyBdInput(0, hexKeyCode, 0x0008, 0, ctypes.pointer(extra))
    x = Input(ctypes.c_ulong(1), ii_)
    ctypes.windll.user32.SendInput(1, ctypes.pointer(x), ctypes.sizeof(x))


def ReleaseKey(hexKeyCode):
    extra = ctypes.c_ulong(0)
    ii_ = Input_I()
    ii_.ki = KeyBdInput(0, hexKeyCode, 0x0008 | 0x0002, 0,
                        ctypes.pointer(extra))
    x = Input(ctypes.c_ulong(1), ii_)
    ctypes.windll.user32.SendInput(1, ctypes.pointer(x), ctypes.sizeof(x))


# directx scan codes
# http://www.gamespp.com/directx/directInputKeyboardScanCodes.html

if __name__ == '__main__':
    while (True):
        PressKey(0x11)
        time.sleep(1)
        ReleaseKey(0x11)
        time.sleep(1)
```

PyAutoGUI is a cross-platform GUI automation Python module for human beings. Used to programmatically control the mouse & keyboard.

PyAutoGUI supports Python 2 and 3. If you are installing PyAutoGUI from PyPI using pip:

- Windows has no dependencies. The Win32 extensions do not need to be installed.
- macOS needs the pyobjc-core and pyobjc module installed (in that order).
- Linux needs the python3-xlib (or python-xlib for Python 2) module installed.
- Pillow needs to be installed, and on Linux you may need to install additional libraries to make sure Pillow's PNG/JPEG works correctly.

How Does PyAutoGUI Work?

The three major operating systems (Windows, macOS, and Linux) each have different ways to programmatically control the mouse and keyboard. This can often involve confusing, obscure, and deeply technical details. The job of PyAutoGUI is to hide all of this complexity behind a simple API.

- On Windows, PyAutoGUI accesses the Windows API (also called the WinAPI or win32 API) through the built-in ctypes module. The nicewin module at https://github.com/asweigart/nicewin provides a demonstration for how Windows API calls can be made through Python.
- On macOS, PyAutoGUI uses the rubicon-objc module to access the Cocoa API.
- On Linux, PyAutoGUI uses the Xlib module to access the X11 or X Window System.

```sh
> pip install pyautogui
Installing collected packages: PyTweening, pyscreeze, pyrect, pyperclip, pymsgbox, pygetwindow, mouseinfo, pyautogui
  Running setup.py install for PyTweening ... done
  Running setup.py install for pyrect ... done
  Running setup.py install for pyperclip ... done
  Running setup.py install for pygetwindow ... done
  Running setup.py install for mouseinfo ... done
  Running setup.py install for pyautogui ... done
```

Example Usage

```py
import pyautogui
import time

# Keyboard and Mouse Control
screenWidth, screenHeight = pyautogui.size() # Returns two integers, the width and height of the screen. (The primary monitor, in multi-monitor setups.)
currentMouseX, currentMouseY = pyautogui.position() # Returns two integers, the x and y of the mouse cursor's current position.
pyautogui.moveTo(100, 350) # Move the mouse to the x, y coordinates 100, 150.
pyautogui.click() # Click the mouse at its current location.
pyautogui.click(200, 220) # Click the mouse at the x, y coordinates 200, 220.
pyautogui.move(currentMouseX, 10)  # Move mouse 10 pixels down, that is, move the mouse relative to its current position.

pyautogui.doubleClick() # Double click the mouse at the
time.sleep(0.6)
pyautogui.mouseDown() # onDrag
pyautogui.moveTo(500, 500, duration=2, tween=pyautogui.easeInOutQuad) # Use tweening/easing function to move mouse over 2 seconds.
pyautogui.mouseUp() # onDrop
pyautogui.dragTo(500, 500, duration=2, tween=pyautogui.easeInOutQuad)
pyautogui.drag(500, 500, duration=2, tween=pyautogui.easeInOutQuad)

pyautogui.write('Hello world!', interval=0.125)  # Type with quarter-second pause in between each key.
pyautogui.press('esc') # Simulate pressing the Escape key.
pyautogui.keyDown('shift')
pyautogui.write(['left', 'left', 'left', 'left', 'left', 'left'])
pyautogui.keyUp('shift')
pyautogui.hotkey('ctrl', 'c')

# Display Message Boxes
    >>> pyautogui.alert('This is an alert box.')
    'OK'
    >>> pyautogui.confirm('Shall I proceed?')
    'Cancel'
    >>> pyautogui.confirm('Enter option.', buttons=['A', 'B', 'C'])
    'B'
    >>> pyautogui.prompt('What is your name?')
    'Al'
    >>> pyautogui.password('Enter password (text will be hidden)')
    'swordfish'

# Screenshot Functions
# (PyAutoGUI uses Pillow for image-related features.)

    >>> im1 = pyautogui.screenshot()
    >>> im1.save('my_screenshot.png')
    >>> im2 = pyautogui.screenshot('my_screenshot2.png')

# You can also locate where an image is on the screen:

    >>> button7location = pyautogui.locateOnScreen('button.png') # returns (left, top, width, height) of matching region
    >>> button7location
    (1416, 562, 50, 41)
    >>> buttonx, buttony = pyautogui.center(button7location)
    >>> buttonx, buttony
    (1441, 582)
    >>> pyautogui.click(buttonx, buttony)  # clicks the center of where the button was found

# The locateCenterOnScreen() function returns the center of this match region:

    >>> buttonx, buttony = pyautogui.locateCenterOnScreen('button.png') # returns (x, y) of matching region
    >>> buttonx, buttony
    (1441, 582)
    >>> pyautogui.click(buttonx, buttony)  # clicks the center of where the button was found
```


*mouse* Take full control of your mouse with this small Python library. Hook global events, register hotkeys, simulate mouse movement and clicks, and much more.

Huge thanks to Kirill Pavlov for donating the package name. If you are looking for the Cheddargetter.com client implementation, *pip install mouse==0.5.0*.

Features

- Global event hook on all mice devices (captures events regardless of focus).
- **Listen** and **sends** mouse events.
- Works with **Windows** and **Linux** (requires sudo).
- **Pure Python**, no C modules to be compiled.
- **Zero dependencies**. Trivial to install and deploy, just copy the files.
- **Python 2 and 3**.
- Includes **high level API** (e.g. [record](#mouse.record) and [play](#mouse.play).
- Events automatically captured in separate thread, doesn't block main program.
- Tested and documented.

Usage

    Install the PyPI package:
    $ sudo pip install mouse

    or clone the repository (no installation required, source files are sufficient):
    $ git clone https://github.com/boppreh/mouse

Then check the API docs to see what features are available.

Known limitations:

- Events generated under Windows don't report device id (`event.device == None`). #21
- To avoid depending on X the Linux parts reads raw device files (`/dev/input/input*`) but this requries root.
- Other applications, such as some games, may register hooks that swallow all key events. In this case *mouse* will be unable to report events.

```py
import mouse
import keyboard
import time

# pip install mouse
# pip install keyboard

# Simulate a Mouse Click with Python
mouse.click('left')
mouse.click('right')
mouse.click('middle')
mouse.press("left")
mouse.release("left")

# Get the Location of the Mouse Cursor using Python
# Output: (width, height)
print(mouse.get_position())

# Drag the Mouse Cursor using Python
# from (100,120) to (800, 250) absolute screen in 1 sec
mouse.drag(100, 120, 800, 250, absolute=False, duration=1)

# Move the Mouse Cursor using Python
# move -800px right and 500px down
mouse.move(-800,500, absolute=False, duration=1)

# Check the Mouse Click
print(mouse.is_pressed("left"))
print(mouse.is_pressed("right"))
print(mouse.is_pressed("middle"))

# Control the Wheel of the Mouse
# scroll up (positive) and scroll down (negative)
mouse.wheel(100)
time.sleep(1.5)
mouse.wheel(-10)

# Event record and replay
mouse.hook(lambda x: print(x))
events = mouse.record()
mouse.play(events)
mouse.unhook_all()

# Action on Mouse Click
mouse.on_button(lambda : print("Button press or release Events"))
mouse.on_click(lambda : print("Left Button was clicked"))
mouse.on_double_click(lambda : print("Left Button was double clicked"))
mouse.on_middle_click(lambda : print("Middle Button was clicked"))
mouse.on_right_click(lambda : print("Right Button was clicked"))

# press Esc to kill the event
if not keyboard.wait("Esc"):
    mouse.unhook_all()
```