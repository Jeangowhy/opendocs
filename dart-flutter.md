
# 🚩 Dart 跨平台开发
- Dart programming https://www.dartlang.org/
- Dart Language Tour https://www.dartlang.org/guides/language/language-tour
- Flutter Install https://flutter.dev/docs/get-started/install
- Flutter与Dart 入门 https://www.imooc.com/article/67042
- Visual Studio Code - Flutter https://flutter.dev/docs/development/tools/vs-code
- 为什么说Flutter是革命性的？ https://www.infoq.cn/article/why-is-flutter-revolutionary
- Get Dart SDK https://dart.cn/get-dart
- DartPad 线上工具 https://github.com/dart-lang/dart-pad
- Dart Programming Language Specification 5th https://dart.dev/guides/language/specifications/DartLangSpec-v2.10.pdf

DartPad 是一个开源的在线编程工具，http://dartpad.cn/ 在任何现代化的浏览器中体验 Dart 编程语言。

Dart 是一个跨平台的客户端快速开发语言。

- Optimized for UI: 快速开发用户界面应用。
- Productive: 产品级开发，热重载支持，交互地修改。
- Fast on all platforms: 多平台支持 ARM & x64 架构移动端、桌面或后端，或者编译生成 JavaScript Web 应用。

Dart 具有横跨三个维度的独特功能组合:

- 可移植性: 高效的编译器可针对设备生成 x86 和 ARM 机器代码，并针对 web 生成优化的 JavaScript。同时兼容移动设备、桌面 PC、应用后端等多种 目标平台。大量的开发库和 package 提供了可在所有平台上使用的一致的 API，进一步降低了开发者创建真正多平台应用的成本。
- 高生产力: Dart 平台支持热重载，因此可在原生设备和 web 上实现快速迭代开发。此外，Dart 还提供了丰富的结构，如 isolates 和 async/await 等，用以处理和实现常见的并发和事件驱动的应用模式。
- 稳健: Dart 的健全空安全类型系统可以在开发过程中就捕捉到错误。整个平台拥有极好的可扩展性和可靠性，已经被大量且多样的应用在累计超过十年的生产环境中实战检验过，其中包括 Google 的一些关键业务应用，如 Google Ads 和 Google Assistant 等。

Dart 语言 3 个设计原则：

- Everything Is an Object
- Program to an Interface, not an Implementation
- Types in the Service of the Programmer

Dart 系统中一切皆对象，包括布尔值 true 和 false，也包括数值、字符串等等。

基于接口编程体现在以下几点：

- 类定义就是接口，可以被其它类实现，而不管这两个类是否共享实现，除核心类型有一些例外，如数字、布尔值和字符串。
- Dart 没有 final 方法，几乎所有方法都可以被 overriding，同样除了少量 built-in 运算符。
- Dart 对象的抽象表达通过 getter/setter 访问器方法实现确保类封闭内部状态的访问。
- Dart 的构造器允许缓存或生成子类实例，所以构造器并不绑定到特定的实现。

Dart 是一种类型可选的静态类型语言：

- Types are syntactically optional.
- Types have no effect on runtime semantics.

以上两个说的是可以使用 var 关键字定义变量，具体类型 Dart 可以自行推导。也可以使用 dynamic 关键字或 Object 类型。这三个者的区别在于，动态类型 dynamic 不进行静态类型检查，可以存储任意类型，需要在运行时进行推断，通过 runtimeType 属性获取运行时类型。而 Object 是具体的类型，它是所有对象的基类，包括 Function 和 Null，所以任何类型也都可以赋值给 Object。

后一点远比前一点重要，它是 Dart 设计的基石，与传统静态类型语言不太相同。

首先，Dart 是一种动态类型的语言，任何动态语言编写的程序都应该能用 Dart 来表达。代码不断发展，随着时间的推移获得类型注释，如果类型注释要更改 Dart 程序的行为，则工作程序很可能会在向其添加类型注释时停止正常工作。这会阻碍类型注释的使用，因为程序员会担心工作代码会出现故障。

此外，Dart 程序通常会包含键入的部分和未键入的部分，这意味着不能假设类型安全，也不能假设类型注释实际上是真的。在这种情况下，允许类型注释假定语义意义可能会造成混乱和不稳定。

作为运行时行为依赖于类型的语言特征的一个例子，请考虑基于类型的方法重载，重载是静态类型的面向对象语言的一个常见特性。

在类型的优点和缺点之间提供了有效的平衡，静态类型可以有助于提供易读的代码，也可以简化类型分析，另一方面也引入了额外的类型检查工作。

Dart 2.12 现已发布，其中包含健全的 Null 安全和 Dart FFI 的稳定版。Null 安全是主打的一项生产力强化功能，意在帮助规避空值错误，以前这种错误通常很难被发现。FFI -  foreign function interface 则是一种互操作机制，支持调用以 C 语言编写的既有代码，例如调用 Windows Win32 API。

从 Flutter 1.21 版本开始，Flutter SDK 会同时包含完整的 Dart SDK 因此如果你已经安装了 Flutter，可能就无需再特别下载 Dart SDK 了。

多个 SDK 版本可以通过脚本进行管理，在 Windows 平台上，可以使用以下 dvm.bat 进行版本切换，假设 Flutter 安装在 c:\flutter 目录下：

```sh
@echo off
set v0=Dart SDK 2.10.5 + Flutter 1.22.6
set v1=Dart SDK 2.13.3 + Flutter 2.2.2

@REM setlocal

cls
echo Choose a Dart SDK version, ESC to end
echo [1] %v1%
echo [0] %v0%
:loop
for /F %%k in ('PowerShell Write-Host $Host.UI.RawUI.ReadKey(\"NoEcho,IncludeKeyDown\"^).VirtualKeyCode') do set "key=%%k"
rem echo "Key press %key%"
rem set /p="Key press %key%"
if %key% equ 48 goto v0
if %key% equ 49 goto v1
if %key% neq 27 goto loop
goto end

:v0
echo Switch to %v1%
rmdir C:\flutter
mklink /d C:\flutter C:\flutter_1.22.6
goto end

:v1
echo Switch to %v1%
rmdir C:\flutter
mklink /d C:\flutter C:\flutter_2.2.2
goto end

:end
```

如果你有下述的需求，也可以独立下载安装 Dart SDK：

- 不需要使用 Flutter；
- 使用 Flutter 1.21 之前的版本；
- 希望降低电脑存储空间的使用，此次用例并不需要 Flutter，比如：设置 CI 时，需要 Dart 并不需要 Flutter。

使用包管理轻松地安装和更新 Dart SDK，也可以以编译 SDK 源码的形式安装，或者下载 SDK 的 zip 压缩文件。

除了下载安装，还可以按官方网站提示使用 chocolatey 管理工具安装，安装目录如：

    C:\ProgramData\chocolatey\lib

配置环境变量，国内用户需要设置可用的 PUB 仓库地址，否则管理工具不能正常获取服务器的资源。Pub 是 Dart 官方的包管理器，跨平台的前端应开发框架，Flutter 也基于 Dart 并且可以使用大部分 Pub 中的库。如果希望通过 TUNA 的 pub 镜像安装软件，只需要设置 PUB_HOSTED_URL 这个环境变量指向 TUNA 即可。

如果你在国内使用 Flutter，那么你可能需要找一个与官方同步的可信的镜像站点，帮助你的 Flutter 命令行工具到该镜像站点下载其所需的资源。
你需要为此设置两个环境变量：“PUB_HOSTED_URL”和“FLUTTER_STORAGE_BASE_URL”，然后再运行 Flutter 命令行工具，查看设置教程。

    Flutter 社区
    FLUTTER_STORAGE_BASE_URL: https://storage.flutter-io.cn
    PUB_HOSTED_URL: https://pub.flutter-io.cn

    上海交通大学 Linux 用户组
    FLUTTER_STORAGE_BASE_URL: https://mirrors.sjtug.sjtu.edu.cn
    PUB_HOSTED_URL: https://dart-pub.mirrors.sjtug.sjtu.edu.cn

以 bash 为例，临时使用 TUNA 的镜像来安装依赖，若希望长期使用 TUNA 镜像请设置到环境变量：

    $ PUB_HOSTED_URL="https://mirrors.tuna.tsinghua.edu.cn/dart-pub/" pub get # pub
    $ PUB_HOSTED_URL="https://mirrors.tuna.tsinghua.edu.cn/dart-pub/" flutter packages get # flutter

    export PUB_HOSTED_URL=https://pub.flutter-io.cn
    export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
    export PATH= /path/to/flutter/bin:$PATH

    $ echo 'export PUB_HOSTED_URL="https://mirrors.tuna.tsinghua.edu.cn/dart-pub/"' >> ~/.bashrc

模块安装目录在以下位置，Administrator 替换对应系统的用户名

    C:\Users\Administrator\AppData\Roaming\Pub\Cache

将环境变量配置到 vim $HOME/.bash_profile

    # .bash_profile

    # Get the aliases and functions
    if [ -f ~/.bashrc ]; then
            . ~/.bashrc
    fi

    # User specific environment and startup programs

    PATH=$PATH:$HOME/bin

    export PATH

Dart 版本升迁后命令变化指导 [Dart 2 Migration Guide for Web Apps]

|        Dart 1.x        |                           Dart 2                           |
|------------------------|------------------------------------------------------------|
| Dartium, content shell | Chrome and dartdevc                                        |
| pub build              | webdev build                                               |
| pub serve              | webdev serve                                               |
| pub run angular_test   | pub run build_runner test -- -p chrome. See: Running tests |
| pub transformers       | build package transformers. See: Transforming code         |

在 Windows 系统上 `webdev` 命令不能使用，可以使用替代命令 `dart pub global run webdev serve`。


## ⚡ Keywords
- https://dart.dev/guides/language/language-tour#keywords

Dart 提供了 63 个关键字，其中 interface 已经移除，通过 abstract 类或者 implements 从类中隐式地获得接口。

    | abstract  2 | else         | import    2 | show    1 |
    | as        2 | enum         | in          | static  2 |
    | assert      | export     2 | interface 2 | super     |
    | async     1 | extends      | is          | switch    |
    | await     3 | extension  2 | late      2 | sync    1 |
    | break       | external   2 | library   2 | this      |
    | case        | factory    2 | mixin     2 | throw     |
    | catch       | false        | new         | true      |
    | class       | final        | null        | try       |
    | const       | finally      | on        1 | typedef 2 |
    | continue    | for          | operator  2 | var       |
    | covariant 2 | Function   2 | part      2 | void      |
    | default     | get        2 | required  2 | while     |
    | deferred  2 | hide       1 | rethrow     | with      |
    | do          | if           | return      | yield   3 |
    | dynamic   2 | implements 2 | set       2 |           |

避免将关键字当作标识符号使用，数字标记说明如下：

- 1 are contextual keywords, which have meaning only in specific places. They’re valid identifiers everywhere.
- 2 are built-in identifiers. To simplify the task of porting JavaScript code to Dart, these keywords are valid identifiers in most places, but they can’t be used as class or type names, or as import prefixes.
- 3 are limited reserved words related to asynchrony support. You can’t use await or yield as an identifier in any function body marked with `async`, `async*`, or `sync*`.
- All other words in the table are reserved words, which can’t be identifiers.

使用 typedef 声明类型别名：

    typedef IntList = List<int>;
    IntList il = [1, 2, 3];


## ⚡ Flutter 前端框架
- Using Flutter in China https://flutter.dev/community/china
- Flutter Installation https://flutter.dev/docs/get-started/install/windows
- install the Flutter and Dart plugins https://flutter.dev/docs/get-started/editor
- Visual Studio Code https://flutter.dev/docs/development/tools/vs-code
- Install Android Studio https://developer.android.google.cn/studio/install
- Flutter Version Manager https://fvm.app/docs/getting_started/configuration

克隆 Flutter 仓库即可安装，现在仓库已经集成 Dart SDK，目录位置 bin\cache\dart-sdk：

    git clone -b stable git@github.com:flutter/flutter.git

安装 Flustter 版本管理工具：

```sh
dart pub global activate fvm
fvm install - # Installs version found in project config
fvm install {version} - # Installs specific version
fvm config --cache-path <CACHE_PATH>
```

VS Code 中安装 [Dart DevTools] 支持 Dart 语言，还有 Flutter 扩展用来做调试。进入调试状态后，可以通过命令面板执行 `Dart: Open DevTools` 打开调试器界面，快捷键 `Ctrl` + `Alt` + `D`。这个工具简直不要太好了，如果用过 Vue DevTools，那么 Dart DevTools 绝对是更胜一筹。

目前 VS Code V1.9.0 还不支持自定义修改插件的安装位置，但可以通过启动参数修改 `code.exe --extensions-dir /path/to/plugins`

提供五个主要功能视图 `Flutter Inspector`、 `Timeline View`、 `Memory View`、 `Debugger`、 `Logging View`。探测器视图提供了 `Performance Overlay` 动态直方图性能监视器、 `Debug Paint` 元素边界标记、 `Paint Baselines` 基准线指示、 `Slow Animations` 慢动作显示、 `Repaint Rainbow` 渲染区多彩指示，还有组件树状图。最重要的是要有热重启和热加载 `Hot Restart`、 `Hot Reload`。VS Code 可以连接真机调试，支持热加载，强烈建议还是使用真机调试。

默认情况下 DevTools 的日志视图 [Using the Logging View] 中打印了回收机制事件 Garbage collect、Flutter 框架事件、通过 `print()` 打印的标准输出 `stdout` 和自定义日志事件信息。可以引入 `dart:convert`、 `dart:developer` 提供的 `jsonEncode()` 和日志功能。

    import 'dart:convert';
    import 'dart:developer' as developer;

    stderr.writeln('print me');
    developer.log('log me', name: 'my.app.category', error: jsonEncode(["Some object"]), );
    developer.log('log me 2', name: 'my.other.category');

在 VS Code 中使用快捷键 shift + command + p 运行命令，`Flutter: Run Flutter Doctor` 验证操作，以帮助解决配置问题。

    [flutter] flutter doctor
    Waiting for another flutter command to release the startup lock...
    Doctor summary (to see all details, run flutter doctor -v):
    [√] Flutter (Channel stable, v1.2.1, on Microsoft Windows [Version 10.0.14393], locale zh-CN)
    [X]  - develop for Android devices
        X Unable to locate Android SDK.
          Install Android Studio from: https://developer.android.com/studio/index.html
          On first launch it will assist you in installing the Android SDK components.
          (or visit https://flutter.io/setup/#android-setup for detailed instructions).
          If Android SDK has been installed to a custom location, set ANDROID_HOME to that location.
          You may also want to add it to your PATH environment variable.

    [!] Android Studio (version 3.2)
        X Flutter plugin not installed; this adds Flutter specific functionality.
        X Dart plugin not installed; this adds Dart specific functionality.
    [!] IntelliJ IDEA Ultimate Edition (version 2018.3)
        X Flutter plugin not installed; this adds Flutter specific functionality.
        X Dart plugin not installed; this adds Dart specific functionality.
    [√] VS Code, 64-bit edition (version 1.32.3)
    [!] Connected device
        ! No devices available

    ! Doctor found issues in 4 categories.

检查后提示，Android toolchain 这个问题是因为没装 Android SDK，如果安装了请在环境变量 `ANDROID_HOME` 设置好路径。 Android Studio 或 IntelliJ IDEA 安装好，但是没有安装相应的 `Flutter`、`Dart` 插件，去安装这两个插件即可。没检测到连接设备 Connected device，是因为没有安装虚拟机或没有连接可以调试的设备。需要在 AVD Manager 创建一个虚拟机，虚拟机需要配套使用系统镜像文件。映像文件存放在 SDK 安装目录下的 `system-images` 内，通过使用 SDK 管理工具下载。如果在安装虚拟机后出现虚拟黑屏的情况，多半是系统兼容问题，可以试试其它 Android 平台版本，如本机 Window 10 使用 Android 6.0(API 23)，映像文件只下载配套的 `Intel x86 Atom System Image`。

开发 Android App 用到了 Android 开发工具包需要 JDK，需要配置一下 JAVA_HOME，注意不需要指定到 bin 目录，使用 OpenJDK 1.8.0，可以使用 Android Studio 安装包自带的 JDK。提醒 Android licenses 状态时可以执行一下命令：

    flutter doctor --android-licenses

使用 Android Studio 做开发只需要在配置界面 `File` -> `Settings` -> `Plugins` 中安装 Flutter、Dart 插件，重启后就可以开发 Flutter 程序。安装插件后，配置界面中的 `Languages & Frameworks` 会出现 Flutter 和 Dart 的配置项。菜单上也会出现新建 Flutter App 模板。

如果开发机器配置不够，运行虚拟机会比较慢，可以直接使用手机进行连接调试。需要打开 Android 手机的开发者模式及 USB 调试模式，如打开小米 8 的开发者模式，`设置` -> `我的设备` -> `全部参数` 连续点击 `MIUI版本` 直到提示进入开发者模式，然后可以去 `设置` -> `更多设置` -> `开发者选项` 管理更多的选项，如打开 USB 调试与安装选项。

可以通过命令面板执行 `Flutter: New Project` 创建一个测试项目，相应可以执行以下命令来创建一个模板 `material.AppBar` 程序，然后在设备上运行：

    flutter create --project-name sample --sample material.AppBar.actions --overwrite ./demo_app
    flutter run [-d chrome]

在 VS Code 开发环境中，界面底部会展示连接用于调试的模拟器或真机设备。

开发 Android 应用，不一定需要 Android Studio 或 IntelliJ IDEA 这样的集成开发工具，但 Android SDK 和 JDK 1.8 是必要的，安装时需要设置相应环境变量 `JAVA_HOME`、 `ANDROID_HOME`。App 需要通过 Android SDK 来编译打包生成 apk。Android SDK 目录结构中，`platforms`、 `platform-tools`、 `tools`、 `build-tools` 这几个目录是比较重要的，

`platforms` 包含是每个平台的SDK真正的文件，即开发出来的 App 将会运行在这里指定版本的平台之上，即 `targetsdkversion`，这个版本号是根据 API Level 划分的 SDK 版本，每一个 Level 都对应一个 Android 系统版本。项目开发时使用的 SDK 版本号为 `compilesdkversion`，项目可以设置一个目标版本号 `targetsdkversion` 用来确实期待运行在什么版本的 Android 系统上，因为 Android 提供向前兼容，需要通过目标版本号和最小版本号 `minsdkversion` 来确定项目应该使用到哪些兼容特性。

`platform-tools` 包含 Android 平台相关的通用工具，比如管理模拟器和连通真机的万能工具 Android Debug Bridge `adb`、 刷机工具 `Fastboot` 等，旧版本 SDK 中和 `platforms`、`build-tools` 目录会有些重复。

`tools` 包含了 Android 的开发和调试工具，比如 Dalvik Debug Monitor Service `ddms.jar` 调试服务工具。模拟器 SD 映像创建工具 `mksdcard.exe`，虚拟调试器主程序 `emulator.exe`，从 Android 1.5 开始，需要输入合适的参数才能启动模拟器。TraceView 则是 Android 平台配备一个很好的性能分析的工具。

`build-tools` 包含和编译打包相关的通用工具，如资源打包工具 Android Asset Packaging Tool `aapt.exe`，工具可以查看、创建、更新 ZIP 格式的文档附件如 zip、 jar、 apk。还有接口定义语言 Android Interface Definition Language 编译器 `aidl.exe`，AIDL 是一种进程通信接口的描述语言，通过可以定义进程间的通信接口。Dex 格式转换工具 `dx.jar`，Android 系统使用的是 Dalvik 虚拟机，需要将 Java 编译的字节码转译成 Dex 格式。`dexdump.exe` 即运行中的 Android 应用在内存中的映像分析工具，通过它可以查看出 dex 文件的执行情况，粗略分析出原始 Java 代码是什么样的。

Android SDK 文件中 `system-images` 目录下的仿真安卓系统镜像用于模拟器，占用硬盘空间最多，选择当前系统运行的映像文件就可以了，如当前主机是 Intel x86 CPU，只要下载 `Intel x86 Atom System Image`。



## ⚡ Flutter Workflows
- Dart SDK https://github.com/dart-lang/sdk
- The Flutter engine https://github.com/flutter/engine
- Introduction to Dart VM https://mrale.ph/dartvm/
- Dart虚拟机运行原理 http://gityuan.com/2019/10/05/dart_vm/
- Flutter 跨平台演进及架构开篇 http://gityuan.com/flutter/
- Flutter engine rchitecture https://github.com/flutter/flutter/wiki/The-Engine-architecture
- Flutter architectural overview https://flutter.dev/docs/resources/architectural-overview
- Reverse engineering Flutter apps https://blog.tst.sh/reverse-engineering-flutter-apps-part-1/
- https://dart.cn/tools/dart-compile

Flutter 与 Dart 是伴生的，与 ReactNative 比较：

ReactNative

- 采用 JavaScript 开发，需要掌握 React
- 需要桥接 JavaScript 到 Native，转化过程有性能耗损
- 访问原生 UI，频繁操作易出性能问题
- 支持线上动态性，可有效避免频繁更新版本

Flutter

- 采用 Dart 开发，可直接编译成 Native 代码
- 自带 UI 组件和 Skia 渲染引擎，仅依赖系统提供的 Canvas，无桥接耗损
- 暂不支持线上动态性

Flutter 架构主要分成 Framework、Engine、Embedder 三部分，示意如下：

    =============================================================
    | Framework (Dart)                                          |
    | ========================================================= |
    | |           Material       |        Cupertino           | |
    | ========================================================= |
    | |                       Widgets                         | |
    | ========================================================= |
    | |                      Rendering                        | |
    | ========================================================= |
    | |      Animation   |   Painting   |   Gestures          | |
    | ========================================================= |
    | |                   Foundation                          | |
    =============================================================
    | Engine (C/C++)                                            |
    | ========================================================= |
    | Service Protocol   | Composition      | Platform Channels |
    | ========================================================= |
    | Dart Isolate Setup | Rendering        | System Events     |
    | ========================================================= |
    | Dart VM Management | Frame Scheduling | Asset Resolution  |
    | ========================================================= |
    |                    | Frame Pipelining | Text Layout       |
    =============================================================
    | Embedder (Platform Specific)                              |
    | ========================================================= |
    | Render Sudace Setup | Native Plugins     | Packaging |
    | ========================================================= |
    | Thread Setup        | Event Loop Interop |           |
    =============================================================
    https://blog.tst.sh/content/images/2020/02/framework.png

Flutter 的系统架构包含大量基于 Material Design 风格设计的赏心悦目、快速、可定制、可扩展的 Widgets，不需要使用系统 UI 组件（或 DOM WebViews）。

Flutter 框架中存在一个 Rendering pipline，由系统提供的垂直同步信号驱动，在 Android 上，这个信号就是 Android V-Sync 信号。可以简单理解为硬件定时中断，周期性的硬件中断，频率为 60Hz，周期为 16ms。

显示器并不是一次性将画面显示到屏幕上，而是从左到右边，从上到下逐行扫描显示，不过这一过程快到人眼无法察觉到变化，现代的液晶屏幕常用 60 Hz 刷新率刷新，这也表示 GPU 在一秒内绘制屏幕的帧数。通常，12 fps 就可以达到人眼的视觉暂留现象引起的动画效应，例如电影采用 24 fps，在游戏中需要更高的 fps 如 120 或 150 fps 才有逼真的效果，因为游戏图像的切换中，边缘是清晰。

在每个信号周期内，Flutter 会按照顺序执行一系列程序动作，最终生成 Scene 送往底层，由 GPU 绘制到屏幕上: 

- 动画阶段 Animate： 因为动画会随每个 Vsync 信号的到来而改变 State，所以动画阶段是流水线的第一个阶段。
- 构建阶段 Build： 重新构建的需要更新的 Widget，即 StatelessWidget.build() 或者 State.build() 被调用。
- 布局阶段 Layout： 确定各个显示元素的位置、尺寸，即 RenderObject.performLayout() 被调用。
- 绘制阶段 Paint： 此时 RenderObject.paint() 被调用。

Flutter App 只有在状态发生变化的时候需要触发渲染流水线，App 什么都不做的时候不需要重新渲染页面。所以，Vsync 信号需要 App 去调度，比如，某个页面需要发生变化的时候有可能会调用 State.setState()，这个调用最终会发起 Vsync 信号的请求给底层。然后底层会在 Vsync 信号到来的时候驱动渲染流水线开始运作，最后把新的页面显示到屏幕上。

Dart VM 有多种方式去运行 Dart 代码，比如：

- JIT 模式运行源码或者 Kernal binary；
- Snapshot 方式运行：AppAOT snapshot 和 AppJIT shanpshot；

两者的主要区别在于 VM 将源码转换成可执行代码的时机和方式。

在 Dart 中，它的线程运行于 Isolate，就是虚拟机中的一个隔离运行环境，可以看作一个虚拟机实例进程。这个概念源自 V8 虚拟机，也称为为沙箱。

任何 Dart 代码都运行在 isolate 环境中的 mutator 线程，每个 isolate 实例具有自己的内存(堆)和线程控制的隔离运行环境。除了包含一个 mutator 线程，isolate 还可以有多个 helper 线程，它们负责处理 Dart 内部任务，如后台运行 GC、JIT 等任务。

多个 isolate 之间无法共享内存空间，因此也不存在锁竞争问题，各自有独立的 event loop。只能通过 Port 传递消息，然后在另一个 isolate 中处理然后将结果传递回来，这样 UI 线程就有更多余力处理 pipeline，而不会被卡住。

Root isolate 负责 UI 渲染以及用户交互操作，需要及时响应。基于事件循环的异步模型仍然是有很大缺点的，当任务队列存在耗时操作，会拖慢整个事件循环的处理，甚至是阻塞，则必须创建新的 isolate，否则 UI 渲染会被阻塞。 

![Dart Isolates](https://mrale.ph/dartvm/images/isolates.png)

Dart 2 VM 开始，不再支持直接运行 Dart 代码，而是运行 Kernel binaries 即包含序列化的 Kernel AST 的 dill 文件。由 Common front-end (CFE) 负责将代码转译为 Kernel AST，这个功能由各种 Dart tools 如 VM, dart2js, Dart Dev Compiler 提供。

为了保持直接从源代码执行 Dart 的便利性，独立的 Dart 可执行文件寄主在一个名为 Kernel service 的 Helper 线程，它负责将 Dart 源代码编译为 Kernel binary，然后由 VM 将其运行在 Isolate 实例中。

![Kernel Service](https://mrale.ph/dartvm/images/kernel-service.png)

这并不是 CFE 和 VM 运行 Dart 代码的唯一方式，在 Flutter 框架中，将编译和执行从内核完全分离，将它们放在不同的设备上：编译发生在开发主机上，执行在目标移动设备上处理，目标移动设备接收由 Flutter 工具发送的 Kernel binary。

![Flutter CFE](https://mrale.ph/dartvm/images/flutter-cfe.png)

    ================      | flutter run --debug  |    =================     =======================
    | Dart sources |  ->  | ==================== | -> | Kernel binary |  -> | Flutter Engine (VM) |
    ================      | Frontend_server(CFE) |    =================     =======================

Dart VM 一旦加载完内核二进制文件，就会被解析并创建表示各种程序实体的对象。然而，这是懒惰地完成的：首先只加载有关库和类的基本信息。内核二进制文件的每个实体都保留一个指向该二进制文件的指针，以便以后可以根据需要加载更多信息。

![Kernel binary loading](https://mrale.ph/dartvm/images/kernel-loading-1.png)
![Kernel binary loading](https://mrale.ph/dartvm/images/kernel-loading-2.png)

Snapshots 就是 Dart VM 运行中的程序映像，通过串行化保存到快照文件，然后再通过反串行化加载映像文件到虚拟机，可以节省那些需要重复执行又消耗时间的操作，如脚本运行环境中的全局符号初始设置，可以实现程序的快速启动。

AppJIT Snapshot 的引入可以解决大型 Dart 应用程序的 JIT 预热时间，如 dartanalyzer 或 dart2js。当这些工具用于小项目时，它们实际工作上的时间消耗和 VM 花在 JIT 编译这些应用程序上的时间一样多。

在执行 dart 命令时，通过设置命令行参数 --snapshot-kind=app-jit --snapshot=path-to-snapshot 即可以生成 AppJIT 快照文件：

```sh
# Run from source in JIT mode.
$ dart pkg/compiler/lib/src/dart2js.dart -o hello.js hello.dart
Compiled 7,359,592 characters Dart to 10,620 characters JavaScript in 2.07 seconds
Dart file (hello.dart) compiled to JavaScript: hello.js

# Training run to generate app-jit snapshot
$ dart --snapshot-kind=app-jit --snapshot=dart2js.snapshot \
   pkg/compiler/lib/src/dart2js.dart -o hello.js hello.dart
Compiled 7,359,592 characters Dart to 10,620 characters JavaScript in 2.05 seconds
Dart file (hello.dart) compiled to JavaScript: hello.js

# Run from app-jit snapshot.
$ dart dart2js.snapshot -o hello.js hello.dart
Compiled 7,359,592 characters Dart to 10,620 characters JavaScript in 0.73 seconds
Dart file (hello.dart) compiled to JavaScript: hello.js
```

而 AppAOT Snapshot 则是为不可能进行 JIT 编译的平台引入的，但它们也可以用于快速启动和一致性能值得潜在峰值性能损失的情况。

AOT 编译过程会进行全局静态分析 TFA - Type flow analysis 以确定应用程序的哪些部分可以从已知的入口点访问，以及类型如何在程序中流动。所有这些分析都是保守的：这意味着它们会在正确性方面有所出入，这与 JIT 可能在性能方面有所出入形成鲜明对比，因为它总是可以去优化为未优化的代码来实现正确的行为。

![AppAOT Snapshot](https://mrale.ph/dartvm/images/aot.png)

Flutter 使用 Dart 作为开发语言，自然和 Dart 的编译模式脱离不了关系，所以我们先来看一下 Dart 的编译模式。

- Script: 开发阶段常用的 JIT 模式，就像 Node.js 那样，可以在命令行直接执行 Dart 源代码。
- Script Snapshot: 此模式载入的是已经 token 化的 Dart 源码，提前做了编译期间的 Lexer 步骤，也是属于 JIT 模式。
- Application Snapshot: JIT 模式，Dart VM 直接载入 dump 出的 snapshot 数据，用于加速启动程序。
- AOT: Dart 源代码会被编译成汇编文件，汇编再经过汇编器生成不同架构下的二进制代码。

Dart exe 子命令编译生成的可执行程序只是用含有类型检查和 garbage collection 功能的 Dart Runtime 封装程序代码，以实现 Windows, macOS, Linux 跨平台的运行能力，和 Deno 中的做法类似。

虽然 Flutter 采用 Dart，但由于 Android 和 iOS 平台差异，Flutter 也衍生出了非常丰富的编译模式。

- Script：同 Dart Script，虽然 Flutter 支持，但暂未看到使用，毕竟影响启动速度；
- Script Snapshot：同 Dart Script Snapshot 一致，同样支持但未使用，Flutter 有大量的视图渲染逻辑，纯 JIT 模式影响执行速度；
- Kernel Snapshot：AOT 编译，Dart 的 bytecode 模式，也叫 Core Snapshot，与 Application Snapshot 不同，此模式不区分 CPU 架构；
- Core JIT：Dart 的一种二进制模式，也叫 AOTBlob，将指令代码和 heap 数据打包成文件，然后在 VM 和 isolate 启动时载入，直接标记内存可执行；
- AOT Assembly: 即 Dart 的 AOT 模式。直接生成汇编源代码文件，由各平台自行汇编。

在开发阶段，支持 Hot Reload 和 Hot Restart 功能，方便 UI 快速成型。同时，框架层也需要比较高的性能来进行视图渲染展现。因此开发模式下，Flutter 使用了 Kernel Snapshot 模式编译。

在打包产物中，你将发现几样东西：

- isolate_snapshot_data：用于加速 isolate 启动，业务无关代码，固定，仅和 flutter engine 版本有关；
- platform.dill：和 Dart VM 相关的 kernel 代码，仅和 Dart 版本以及 engine 编译版本有关。固定，业务无关代码；
- vm_snapshot_data: 用于加速 Dart VM 启动的产物，业务无关代码，仅和 flutter engine 版本有关；
- kernel_blob.bin：业务代码产物

Dart 弹性编译技术支持：

- Dart Native: 针对各种设置开发 (mobile, desktop, server, and more)，包含 Dart VM，自带 JIT (just-in-time) 编译和 AOT (ahead-of-time) 编译。
- Dart Web: 针对 Web 应用开发，包括开发时编译器 (dartdevc) 和生产时编译器 (dart2js)。

通过 Dart FFI -  foreign function interface 调用 C 语言编写的既有代码库，从而增强可移植性，还可以通过精心打磨的 C 代码完成对性能要求极为严苛的任务。从 Dart 2.12 起，Dart FFI -  foreign function interface 已结束 Beta 测试阶段，现已进入稳定状态，可以用于生产环境。我们还添加了一些新功能，包括嵌套结构和按值传递结构。



## ⚡ HelloWorld
- dart: The Dart command-line tool https://dart.dev/tools/dart-tool
- Web platform https://dart.dev/web
- Bindings for the ReactJS library https://pub.dev/packages/react
- Bindings for the Vue.js library https://pub.dev/packages/vue

Dart 是针对现代 Web 浏览器的新语言，良好结构化适合从小型到大型的 Web 应用。最初是由 Google 的 Chrome V8 团队打造，主要成员包括虚拟机和编程语言大师 Lars Bak、Gilad Bracha 等人。

Dart 是一种开源的、通用的、基于类的、面向对象的语言，具有 C 语言风格的语法，用于构建移动、桌面和 Web 应用程序。它支持各种编程概念，如接口、类、集合、泛型、混合和可选类型。它由谷歌开发，后来被 ECMA 批准为标准。

Dart 本身是动态语言，是一种简单、熟悉的面向对象语言，基于类、单继承、多实现，可选的静态类型，单线程，支持异步（Future）和并发（Isolate）编程。支持库，有自己的包管理工具 Pub。Dart 有良好的工具支持（Dart Editor），支持调试、重构、代码自动完成、代码导航、静态代码分析（显示警告和错误）……

Dart 有许多非常好语言特性，比如方法级联调用、工厂构造函数、可选类型、字段与方法统一的 getter/setter、可选参数、接口和类的统一、提供接口的默认实现、操作符重载、Markdown注释等。比如方法级联调用是语言级别的支持，减轻了设计者前期的设计负担。

Dart 有自己原生的虚拟机，可以直接在 VM 上运行，并且性能高于 JavaScript V8。高性能本身就是 Dart 的目标之一，以 snapshot 的方式可以使应用启动速度提高 10 倍（仅限VM）。

创建一个 dart 代码文件，和 C 语言类似需要一个 main 函数：

```ts
// void main(){ ... }
// void main()=>{ ... }
void main(List<String> args) {
  print('Hello, World! ${args}');
}
```

入口函数 main 接收一个列表接收命令行参数，函数可以使用箭头格式。

使用 dart 命令可以直接生成工程，可以指定模板，然后通过命令运行，或将其编译为可执行文件，或者转译为 JavaScript：

    dart create demo
    dart run
    dart run demo.dart
    dart run [pkg]:prog

    dart compile js demo.dart
    dart compile exe demo.dart

尝试创建一个 Web 应用，并使用命令行工具 webdev 运行它：

    dart pub global activate webdev
    dart create -t web-simple quickstart
    cd quickstart
    webdev serve

参考 Web 脚本：

```js
import 'dart:convert';
import 'dart:html';

void main(List<String> args) async {
  var heliodoxa = 'https://cn.bing.com/th?id=OHR.Heliodoxa_ZH-CN9872355419_1920x1080.jpg';
  var img = Element.img();
  img.setAttribute('src', heliodoxa);
  var api = 'https://api.github.com/users/jimboyeah';
  var jn = await HttpRequest.getString(api).then((res) => json.decode(res));
  querySelector('#output')
    ..text = 'Your Dart app is running.'+ jn['bio']
    ..children.add(img);
}
```

Flutter 官方网站项目就是 Dart 工程，可以克隆代码仓库：

    $ git clone --recurse-submodules https://github.com/flutter/website.git

    $ git submodule update --init --recursive
    $ git pull; git submodule update --init --recursive

命令参考：

    A command-line utility for Dart development.

    Usage: dart [<vm-flags>] <command|dart-file> [<arguments>]

    Global options:
    -h, --help                 Print this usage information.
    -v, --verbose              Show additional command output.
        --version              Print the Dart SDK version.
        --enable-analytics     Enable anonymous analytics.
        --disable-analytics    Disable anonymous analytics.

    Available commands:
      analyze   Analyze the project's Dart code.
      compile   Compile Dart to various formats.
      create    Create a new project.
      format    Idiomatically format Dart source code.
      pub       Work with packages.
      run       Run a Dart program.
      test      Run tests in this package.


    Usage: dart compile <subcommand> [arguments]
    -h, --help    Print this usage information.

    Available subcommands:
      aot-snapshot   Compile Dart to an AOT snapshot.
      exe            Compile Dart to a self-contained executable.
      jit-snapshot   Compile Dart to a JIT snapshot.
      js             Compile Dart to JavaScript.
      kernel         Compile Dart to a kernel snapshot.


    Usage: dart create [arguments] <directory>
    -h, --help        Print this usage information.
    -t, --template    The project template to use.
                      [console-simple (default), console-full, package-simple, web-simple]
        --[no-]pub    Whether to run 'pub get' after the project has been created.
                      (defaults to on)
        --force       Force project generation, even if the target directory already exists.

    Run "dart help" to see global options.

    Available templates:
      console-simple: A simple command-line application. (default)
        console-full: A command-line application sample.
      package-simple: A starting point for Dart libraries or applications.
          web-simple: A web app that uses only core Dart libraries.


## ⚡ Dart Pub 依赖管理
- pub package manager https://dart.dev/tools/pub/cmd
- How to use packages https://dart.dev/guides/packages
- Pakcage layout https://dart.dev/tools/pub/package-layout
- Dart doc https://github.com/dart-lang/dartdoc#dartdoc
- Effective Dart: Documentation guide https://dart.dev/guides/language/effective-dart/documentation

Pub is a package manager for Dart or Flutter.

创建 dart 工程后，项目配置文件 pubspec.yaml 指定的 name 就是包名。

和包相关的几个关键字是 export import library deferred part part-of show hide，以下逐个解释关键字的使用。

根据包的来源属于核心还是社区，引入包时分别指定 dart 或 package 前缀，配合 show 和 hide 导入部分内容。

```js
import 'dart:io' 
import 'package:lib1/libfile.dart' 

import 'package: lib1/lib1.dart' show foo, bar;  
import 'package: lib1/lib1.dart' show foo, bar;  
// Import only foo and bar. 

import 'package: mylib/mylib.dart' hide foo;  
import 'package: mylib/mylib.dart' hide foo;  
// Import all names except foo
```

创建自定义包只需要使用 `library` 定义，然后在其它代码文件中通过 `import` 引用。

另外配合 `part` 和 `part-of` 实现拆分库，将一个庞大的库拆分成各种小库，这两个关键字分别用于导入拆分库、定义拆分库。

以下假定为 library.dart 代码中的库定义，并且 part-of-library.dart 是一个拆分库文件，包含 `part of library_name;` 这样的定义。

```ts
library library_name
part 'include/part-of-library.dart'
// library contents go here 
```

使用时，通过 `import` 导入，以下是使用相对目录的方式导入：

```ts
// Within the same directory
import 'library_name.dart'

// From a different directory
import 'dir/library_name.dart'
```

导入导出需要注意 Diamond Imports 问题，假设一个库 `food` 包含 IceCreamCone 定义，并被另外两个库 `cooking` 和 `containers` 导入后再导出，而 `kitchen` 再导入它们时，就会得到这两个库导出的两个 IceCreamCone。但这并不是错误，因为它就是通过 `food` 这个库导出的，Dart 只给出警告信息。

但是，考虑一种情况，假设 `containers` 定义了自己的 IceCreamCone，那么就会有两个不同的同名类型。`containers` 库保持了它的公共 API 不变，因此客户端不会遇到任何困难。但是，更改会导致代码非法，编译器给出警告信息。警告很有用，这样程序员就不会忽视潜在的名字冲突，这是鼓励的最佳实践，即始终避免含糊不清。


在引入的包文件后还可以通过 `as` 指定命名空间前缀，以防止和其它标识冲突。

支持延迟载入库 Deferred loading 可以让应用在需要的时候再 loadLibrary() 函数来加载，下面是一些使用延迟加载库的场景：

- 减少 APP 的启动时间。
- 执行 A/B 测试，例如 尝试各种算法的 不同实现。
- 加载很少使用的功能，例如可选的屏幕和对话框。

```js
import 'package:deferred/hello.dart' deferred as hello;

greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
```

在一个库上你可以多次调用 loadLibrary() 函数，但是只是载入一次。

使用延迟加载库的时候，请注意一下问题：

- 延迟加载库的常量只有在库加载完毕的时候才可以使用。
- 在导入文件的时候无法使用延迟库中的类型，可以考虑把接口类型移动到另外一个库中， 让两个库都分别导入这个接口库。
- Dart 隐含的把 loadLibrary() 函数导入到 deferred as 指定的命名空间中，执行这个方法返回一个 Future。

在库中定义私有单元需要使用以下划线作为标识符前缀，这样只有在库内部可见。每个 Dart app 都是一个库， 即使没有使用 library 命令也是一个库。

    dart create -t package-simple tt
    Creating /flutter/tt using template package-simple...

    .gitignore
    CHANGELOG.md
    README.md
    analysis_options.yaml
    example\tt_example.dart
    lib\tt.dart
    lib\src\tt_base.dart
    pubspec.yaml
    test\tt_test.dart

    Running pub get...
    Resolving dependencies...
    Downloading test 1.15.7...
    Downloading test_core 0.3.11+4...
    Downloading test_api 0.2.18+1...
    Downloading source_map_stack_trace 2.0.0...
    Downloading coverage 0.14.2...
    Downloading boolean_selector 2.0.0...
    Downloading node_preamble 1.4.13...
    Downloading vm_service 4.2.0...
    Changed 51 dependencies!

从命令中生成的模板也可以了解到目录结构，库代码位于 lib 目录中，在其他包中通过 `import` 导入就是访问这里面的代码。 在 lib 目录下可以创建任意的目录结构，通常情况下都把实现代码放到 lib/src 目录中。位于 lib/src 下面的代码被认为是私有的，其他包不应该直接导入 src 里面的代码。要分享 lib/src 下的 API，可以在 lib 目录下创建一个文件，在这个文件中导入 lib/src 中的代码。

例如，库对象导出内容编写在 tt.dart 文件：

```js
/// Support for doing something awesome.
///
/// More dartdocs go here.
library tt;

export 'src/tt_base.dart';

// TODO: Export any libraries intended for clients of this package.
```

把库项目提交到版本库中的时候，过滤掉 .packages 和 pubspec.lock 这些文件，也不要提交 packages 目录。

在示范目录中已经提供了一个 tt_example.dart，注意 `import` 指定的 tt 是创建库时指定的，即 pubspec.yaml 配置的 name 属性。

```js
import 'package:tt/tt.dart';

void main() {
  var awesome = Awesome();
  print('awesome: ${awesome.isAwesome}');
}
```

编写好的库，经过单元测试后，使用 pub publish 命令可以在 pub.dev 上分享你的库。

通常，一个库需要相应的文档，Dart 支持使用 Markdown 注解生成文档，使用 dartdoc 命令可以为 Library 生成 API 文档，它会解析源文件中的 /// 语法标注的文档注释，同时会生成一个 index.json 作为内容搜索索引文件。

使用以下命令激活 dartdoc 命令，并执行它生成文档：

    dart pub global activate dartdoc
    dartdoc

例如，以下注解会生成一个 JSON 文件：

    /// {@category Basics}
    /// {@category Assets, Images, and Icons}
    /// {@subCategory Information displays}
    /// {@image <image alt='' src='/images/catalog-widget-placeholder.png'>}
    class Icon extends StatelessWidget {}

对应的 categories.json 文件内容：

    [{
        "name": "Icon",
        "qualifiedName": "widgets.Icon",
        "href": "widgets/Icon-class.html",
        "type": "class",
        "categories": ["Assets, Images, and Icons", "Basics"],
        "subcategories": ["Information displays"],
        "image": "<image alt='' src='/images/catalog-widget-placeholder.png'>"
    }]

以下示范模板定义与宏配合使用，以及 Markdown 语法使用：

    /// {@template template_name}
    /// {@animation name 100 200 path/to/some/video.mp4}
    /// # Markdown
    /// ```dart
    /// print("Hello part-of...");
    /// ```
    /// - Item 1
    /// - Item 2
    /// ![宋优秀](https://p26.douyinpic.com/img/tos-cn-p-0015/1d60cf46f17f438c9e06fe5c760b7186_1624437711~c5_300x400.jpeg)
    /// {@endtemplate}

    /// Some comment
    /// {@macro template_name}
    /// More comments

在工程根目录中可以配置 dartdoc_options.yaml 以实现定制需求：

```yaml
dartdoc:
  categories:
    "First Category":
      markdown: doc/First.md
      name: Awesome
    "Second Category":
      markdown: doc/Second.md
      name: Great
  categoryOrder: ["First Category", "Second Category"]
  examplePathPrefix: 'subdir/with/examples'
  includeExternal: ['bin/unusually_located_library.dart']
  nodoc: ['lib/sekret/*.dart']
  linkTo:
    url: "https://my.dartdocumentationsite.org/dev/%v%"
  showUndocumentedCategories: true
  ignore:
    - ambiguous-doc-reference
  errors:
    - unresolved-doc-reference
  warnings:
    - tool-error
```

Pub 命令参考：

    Usage: pub <command> [arguments]

    Global options:
    -h, --help             Print this usage information.
        --version          Print pub version.
        --[no-]trace       Print debugging information when an error occurs.
        --verbosity        Control output verbosity.

              [all]        Show all output including internal tracing messages.
              [error]      Show only errors.
              [io]         Also show IO operations.
              [normal]     Show errors, warnings, and user messages.
              [solver]     Show steps during version resolution.
              [warning]    Show only errors and warnings.

    -v, --verbose          Shortcut for "--verbosity=all".

    Available commands:
      cache       Work with the system cache.
      deps        Print package dependencies.
      downgrade   Downgrade the current package's dependencies to oldest versions.
      get         Get the current package's dependencies.
      global      Work with global packages.
      logout      Log out of pub.dartlang.org.
      outdated    Analyze your dependencies to find which ones can be upgraded.
      publish     Publish the current package to pub.dartlang.org.
      run         Run an executable from a package.
      upgrade     Upgrade the current package's dependencies to latest versions.
      uploader    Manage uploaders for a package on pub.dartlang.org.
      version     Print pub version.

## ⚡ Unit Test
- Dart Testing https://dart.dev/guides/testing
- Testing Flutter Apps https://flutter.dev/docs/testing
- https://pub.flutter-io.cn/packages/test
- https://pub.flutter-io.cn/packages/webdriver
- https://api.flutter.dev/flutter/flutter_test/flutter_test-library.html

单元测试是一种常用的测试方式，基本思想是将代码划分为最小可测试粒度进行单独测试。

软件测试是软件工程中的一个基本流程，基于单元测试，还衍生出测试驱动开发 TDD：Test-Driven Development，即通过测试来指导开发。

常见的测试技术：

- Unit tests 单元测试聚集于最小可测试代码，如函数、方法、类对象等。
- Component tests 组件测试通常模仿用户操作来检查整个组件的行为、性能、事件、布局等。
- Integration and end-to-end tests 集成测试或端到端测试关注的是整个应用的测试，包含应用程序本身和测试应用程序，通常在真实设备或模拟器中运行 App，进行性能等测试。

对于 Web 应用，可以运行于浏览器中，并通过测试接口对应用进行测试。Dart 提供了 package:webdriver 接口通过 WebDriver servers 来操作浏览器。

对于单元测试，Dart 平台提供了 package:test 和 package:mockito 两个库。

可以使用 package:test 来：

- 编写单个或一组测试。
- 使用 `@TestOn` 注解限制测试在特定的环境中运行。
- 像编写同步测试一样编写异步测试。
- 使用 `@Tag` 注解进行 Tag 测试。例如，定义 Tag 为某些测试创建自定义配置， 或表示一些测试完成需要更多的时间。
- 创建一个 dart_test.yaml 文件，以跨多个文件或整个包配置 Tag 测试。

好的单元测试应当包含四种特性：正确，清晰，完整，健壮

- 正确：单元测试是最基础的要求，必须要保证所写的函数或者类实现的功能是正确的，如果实现的功能都不能满足，那就是缺陷！
- 清晰：单元测试可以帮助其他开发理解函数或者类的实现，所以要求单元测试用例简洁、清晰，需要有良好的可读性。
- 完整：单元测试需要考虑输入与输出组合的各种场景，保证单元测试的覆盖率。
- 健壮：健壮性是最容易被忽略的一项，当被测试的类或者函数被修改内部实现或者添加功能时，⼀个好的单测应该完全不需要被修改或者只有极少的修改。

单元测试的代码结构一般包含三部分：

- 准备：准备部分的⽬的是准备好调⽤所需要的外部环境，如数据，Stub（桩代码），Mock，临时变量，调⽤请求，环境背景变量等等。
- 调用：调⽤部分则是实际调⽤需要测试⽅法，即函数或者流程本身。
- 断言：断⾔部分判断调⽤部分的返回结果是否符合预期。

单元测试的三个重要部分：

- 驱动程序 Driver 也称作驱动模块，用以模拟被测模块的上级模块，能够调用被测模块。在测试过程中，驱动模块接收测试数据，调用被测模块并把相关的数据传送给被测模块。
- 桩程序 Stub 也称桩模块，用来代替关联代码或者未实现的代码，为了让测试对象可以正常的执行，其实一般会硬编码一些输入和输出，保证被测模块能够正常运行。
- 模拟 Mock，除了保证Stub的功能之外，还可深入的模拟对象之间的交互方式，如：调用了几次、在某种情况下是否会抛出异常以及提供数据断言。

以下是编写单元测试的一般步骤：

- Step 1: Installing the "test" package
- Step 2: Importing the "test" package
- Step 3: Writing Tests
- Step 3: Execute Tests

Dart 集成单元测试功能，如何创建一个库工程，则会配置好依赖：

    dart create -t package-simple tt

也可以手动添加依赖到 pubspec.yaml 配置文件：

    dev_dependencies:
      test: ^1.14.4

以下是一个示范：

```js
import 'package:tt/tt.dart';
import 'package:test/test.dart';

void main() {
  group('A group of tests', () {
    Awesome awesome;

    setUp(() {
      awesome = Awesome();
    });

    test('First Test', () {
      expect(awesome.isAwesome, isTrue);
    });
  });
}
```

每一个测试调用一次 test 函数，并设置相应的断言，这些测试可以使用 group 包装起来作为一个测试分组。

使用 dart test 命令执行测试：

```sh
$ dart test
Precompiling executable...
Precompiled test:test.
00:04 +1: All tests passed
```

## ⚡ Types System
- The Dart type system https://dart.dev/guides/language/type-system
- https://api.dart.dev/stable/2.13.4/dart-core/dart-core-library.html
- The IEEE 754 Format http://mathcenter.oxford.emory.edu/site/cs170/ieee754/
- Numerical Computation Guide https://docs.oracle.com/cd/E19957-01/806-3568/ncgTOC.html
- CIS-77 Introduction to Computer Systems - Bits, Numbers Representation http://www.c-jump.com/CIS77/CPU/Numbers/index.html
- https://api.dart.dev/stable/2.13.4/dart-typed_data/dart-typed_data-library.html
- https://api.flutter.dev/flutter/dart-typed_data/TypedData-class.html

Dart 是类型安全语言，具有 static type checking，还有 runtime checks 以确保变量类型符合静态类型定义。尽管类型是必需的，但由于 Dart 支持类型推断，所以类型注释是可选的。

Dart 系统中一切皆对象，包括布尔值 true 和 false，也包括数值、字符串等等。

例如，以下定义局部变量时都不需指定类型，Dart 从初始化参数中感知具体类型：

```js
num y = 3; // A num can be double or int.
y = 4.0;
var x = 3; // x is inferred as an int.
x = 4.0;   // ✗ static analysis: error/warning
```

基于以上两种类型检查机制，Dart 提供了健全的类型系统 sound type system，即表达式总是返回确定的静态类型，而不是其它意外的类型。

健全类型系统的优点：

- Revealing type-related bugs at compile time.
- More readable code.
- More maintainable code.
- Better ahead of time (AOT) compilation.

Dart 有 8 种内置数据类型：

- `Boolean`：布尔类型 `bool`，有两个值 `true` 和 `false`。
- `Number`：数字类型 `num`，又分为 `int` 整型，64-bit 取值范围为 -2^63 ~ 2^63 - 1，和 `double` 64-bit 双精度浮点型。
- `String`：字符串类型，是 UTF-16 编码的序列，可用 "", '' 表示，可使用模板语法 '${expression}'，当 expression 是一个标识符时可省略 {}。 
- `List`：相当于 Array，例如 `var arr = [1, 2, 3]`。
- `Set`：表示无序且无重复元素的集合，例如 `var cc = {'china', 'usa', 'russia', 'german'}`。
- `Map`：表示一组键值对的集合，其中键必须唯一，键和值都可以为任意类型，例如 `var gifts = { '1st': 'partridge', '2nd': 'turtledoves' };`
- `Runes`：用来表示 UTF-32 编码字符值，例如 `String.fromCharCodes(new Runes('\u2665\u{1f605}\u{1f60e}')); // 😅😎👻`
- `Symbol`：Dart 引入符号类型的意义在于在压缩代码后，依然能通过标识符的 Symbol 去访问相关的成员。

说明数值的浮点数表达，总是离不开 IEE 754 格式规范，IEEE 754 规定了 3 种表示浮点数值格式，对应 C 语言的 C89 规范的三种浮点类型，float、double、long double。

在 Web 平台，JavaScript 整形数值也是 64-bit 浮点表达，只是没有小数部分，有效范围是 -2^53 ~ 2^53 - 1，这一点需要注意。

IEEE 浮点数标准是从逻辑上用三元组 {S，E，M} 来表示一个数 V 的，即 V=(-1)S×M×2^E。

符号位 S (sign bit) 决定数的正负，是正数 S=0，是负数 S=1，而对于数值 0 的符号位解释则作为特殊情况处理。

有效数字位 M (Significand) 是二进制小数，在内存记录中使用科学计数法，二进制表达省略开头的 1，这样可以多利用一个 bit 来增加有效精度。它的取值范围为 1 ~ 2^-ε，或者为 0 ~ 1^-ε。它也被称为尾数位 Mantissa、系数位 Coefficient，甚至还被称作“小数”。

指数位 E (Exponent Bias) 是 2 的幂，可能是负数，它的作用是对浮点数加权。

对于 `double` 类型，将 64-bit 分成 1-bit 符号位，11-bit 指数位，53-bit 有效位，可以表达 15 ~ 17 个十进制数字。

列表类型 `List` 即数组类型，只不过不像 C 语言的数组那样单纯是内存中的一块连续空间，列表作为对象类型，可以保存各种类型作为元素。

而 `Set` 和 `Map` 相对比列表更复杂的数据结构类型，通常通过 Hash 函数和二叉树来实现快速的元素查找，下级扩展了 HashSet、LinkedHashSet 和 HashMap、LinkedHashMap、SplayTreeMap 等专用的类型。

Dart 所有 built-in 类型都是 class 类型，所有类型的父类都是 `Object`，除了 `Null`，所有的值都是其实例。

                                        ==========
                                        | Object |
                                        ==========
             ┌───────────┬──────────┬───────┴─┬─────────┬─────────┬──────────┬──────────┐
        ==========  ==========  ==========  =======  =======  =========  ========  ==========  
        |   num  |  | String |  |  List  |  | Set |  | Map |  | Runes |  | Null |  | Symbol |
        ==========  ==========  ==========  =======  =======  =========  ========  ==========  
       ┌─────┴───┐
    =======  ========== 
    | int |  | double |
    =======  ========== 

符号字面量使用 # 前缀表示，也可以实例化 Symbol：

```js
assert(Symbol("foo") == #foo);
assert(Symbol("[]=") == #[]=);
assert(Symbol("foo.bar") == #foo.bar);
assert(identical(const Symbol("foo"), #foo));
assert(identical(const Symbol("[]="), #[]=));
assert(identical(const Symbol("foo.bar"), #foo.bar));
```

除了基础的内置类型，还有其它的一些专用对象类型：

- `Future` and `Stream`: Used in asynchrony support.
- `Iterable`: Used in for-in loops and in synchronous generator functions.
- `Never`: Indicates that an expression can never successfully finish evaluating.
- `dynamic`: Indicates that you want to disable static checking. Usually you should use Object or Object? instead.
- `void`: Indicates that a value is never used. Often used as a return type.

`Object`, `Object?`, `Null`, `Never` 类型在类的继承结构中有特殊作用，服务于健全的 Null 安全性。

可以将 `Object?` 看作是 `Object` 和 `Null` 两个类型的组合，其它 nullable 类型同理。而 `Null` 类型不能实例化，只能通过 `null` 关键字来表达。

Dart 对 Binary 数据的处理能力是通过 TypedData 包提供的，如 ByteData、Int8List、Uint8ClampedList、Uint8List 等类型，这种设计考虑到了 JavaScript 的兼容。

以下是通过静态类型分析的几点规则提示：

- Use sound return types when overriding methods.
- Use sound parameter types when overriding methods.
- Don’t use a dynamic list as a typed list.

例如，以下的类型继承关系中，HoneyBadger 重写了父类的 chase 方法，并将参数声明为 Object，即可以处理比父类方法中更广泛的类型：

    class Animal 
    {
      void chase(Animal c){}
      Animal? get parent => null;
    }
    class HoneyBadger extends Animal 
    {
      @override
      void chase(Object a) { }
      @override
      HoneyBadger? get parent => null;
    }

而下面的 Cat 重写父类 chase 方法，参数从 Animal 收紧到 Mouse，这是 Animal 的一个子类。这意味可处理类型比父类方法更窄，此代码不是类型安全的，因为可以给 Cat 实例的 chase 方法传递鳄鱼实例：

    class Alligator extends Animal { }
    class Mouse extends Animal { }
    class Cat extends Animal 
    {
      @override
      void chase(Mouse x) { }
    }

    Aniaml a = Cat();
    a.chase(Alligator());

不要给类型化的变量指定动态类型，如下：

```js
List<Cat> foo = <dynamic>[Mouse()]; // Error
List<dynamic> bar = <dynamic>[Mouse(), Cat()]; // OK
```
在 Dart 中，未初始化的变量拥有一个默认的初始化值 `null`。即便数字也是如此，因为在 Dart 中一切皆为对象，数字也不例外，而 `final` 声明变量时必须给定一个初始值，除非使用 `late` 延后初始化，或者定义为 nullable 变量。

    var some;  // -> null
    bool flag;  // -> null
    int number;  // -> null
    String str;  // -> null
    Object obj;  // -> null
    final namic;  // Error: must be initialized

Dart 2.12 版本将健全的空值安全 Sound null safety 作为一个重点功能，引入了 ? 和 ! 两个符号，变量可以定义 nullability 或 non-nullability 属性。

Null safety principles

- Non-nullable by default. Unless you explicitly tell Dart that a variable can be null, it’s considered non-nullable.
- Incrementally adoptable. You can migrate incrementally, mixing null-safe and non-null-safe code in the same project.
- Fully sound. Dart’s null safety is sound, which enables compiler optimizations, fewer bugs, smaller binaries and faster execution.

比如，一般是不可以直接将 null 赋值给 int 整形变量，实现这一需求可以使用 ? 定义为可空值类型。同时，作为 null-aware 运算符 ? 可以用在 nullable 变量表达式中确保其不为 `null` 才执行后续的代码。 另外，如果确定变量不为 null，那么就可以使用 null assertion operator (!) 告诉编译器路过空值检查，如果出现空值那么就会在运行时触发异常：

```js
int? a;
a = null;
print('a is $a.');

// Using null safety:
late final String? notAString;
notAString = DateTime.now().millisecond%2==0? null: 'null';
print(notAString?.length);
print(notAString!.toUpperCase()');
```

新的底层类型 `Never` 是没有任何值的，表示不可触及的代码，意味着这个表达式永远无法成功的推导和执行。它必须要抛出一个异常、中断或者确保调用它的代码永远不会执行。

```js
// Using null safety:
Never wrongType(String type, Object value) {
  throw ArgumentError('Expected $type, but was ${value.runtimeType}.');
}
```

不同 C++ 与 Java 使用 `public`、 `protected`、 `private` 关键字约束访问控制权，Dart 直接使用下划线开头表示私有成员，如 `_screct`。

Dart 用关键字 is 或 is! 来进行类型判断，返回布尔值，`assert` 断言会在生产环境忽略，debug 模式开启有效。

    var a = 123;
    print(a is dynamic);  // true
    assert(a is Object);  // true


### 👉 var 变量定义
- https://dart.dev/null-safety/understanding-null-safety#late-final-variables

Dart 为静态类型语言，定义变量需要指定类型，或者使用 `var` 定义由编译器进行类型推断。

Dart 也支持弱类型：

- `var` 变量定义，其类型由初始值推导而来；
- `dynamic` 动态任意类型，编译阶段不检查类型，而在运行检查；
- `Object` 动态任意类型，编译阶段检查类型；

这三个者的区别在于，动态类型 dynamic 不进行静态类型检查，可以存储任意类型，需要在运行时进行推断，通过 runtimeType 属性获取运行时类型。而 Object 是具体的类型，它是所有对象的基类，包括 Function 和 Null，所以任何类型也都可以赋值给 Object。

未初始化变量为 null。

    var name = 'Bob';
    dynamic name = 'Bob';
    String name = 'Bob';

    int lineCount;
    assert(lineCount == null);

使用 var 关键词进行声明的时候，Dart 会自动推断出 当前变量的类型，如果在变量声明的时候没有进行赋值，那么该类型就是动态的。

```ts
var a = 'defalut';     // ok, string
Object b = 'defalut';  // ok, Object
dynamic c = 'defalut'; // ok, anything

a = 123; 
// Error: A value of type 'int' can't be assigned to a variable of type 'String'
// Try changing the type of the variable, or casting the right-hand type to 'String'

b = 123;
c = 123;

// b.foo(); 
// Error: The method 'foo' isn't defined for the class 'Object'.
// Try correcting the name to the name of an existing method, or defining a method 
// named 'foo'.dart(undefined_method)

// c.foo();
// Passed by compiler, crash when run!
```

Dart 是强类型语言，不会像 JavaScript 一样进行自动类型转换：

    bool flag = 1 == '1';
    print(flag);  // -> false

    var fullName = '';
    assert(fullName.isEmpty);

    var hitPoints = 0;
    assert(hitPoints <= 0);

    var unicorn;
    assert(unicorn == null);

    var iMeantToDoThis = 0 / 0;
    assert(iMeantToDoThis.isNaN);



### 👉 Const Static Final
- Const, Static, Final, Oh my! https://news.dartlang.org/2012/06/const-static-final-oh-my.html

`static`、 `final`、 `const` 在 Dart 中意味着完全不同的东西：

- `static` 修饰成员，表示成员在类本身上可用，而不是在类的实例上。 这就是它的意思，并没有用于其他地方。
- `final` 修饰只读变量，表示单一赋值，一旦赋值，就不能改变final变量的值。
- `const` 修饰值，意味着对象的整个深度状态可以在编译时完全确定，运行时完全不可变。如 `const [1,2,3]`，或构造对象时代替 `new` 如 `const Point(2,3)`。

const 对象有几个有趣的属性和限制，编译期固定和深层固定。`const` 对象无法访问运行时需要计算的任何内容。 `1 + 2` 的值在编译期可以固定，是一个合法的 `const` 表达式，但 `new DateTime.now()`不是。包含集合的 `final` 字段，该集合仍然可变。 一个 `const` 集合中的所有东西也必须是递归的 `const`。对于任何给定的 `const` 值，无论 `const` 表达式被计算多少次，都将创建并重用单个 `const` 对象。 也就是说：

    getConst() => const [1, 2]; 
    main() { 
      var a = getConst(); 
      var b = getConst(); 
      print(a === b); // true 
    } 

需要指明的是，当你想定义一个单一赋值的成员和类本身时，你必须使用 `static` 关键字!

它和 const 其实很像，都是必须初始化，初始化后都是只读的，不可变。

区别在于 const 比 final 更加严格。final 只是要求变量在初始化后值不变，无法在编译时知道这个变量的值；而 const 所修饰的是编译时常量，在编译时就已经知道了它的值。

    // 定义常量
    final a = 90;
    static const b = 90;

    final c = new DateTime.now(); // 在编译时不知道他的值
    static const d = new DateTime.now(); // Const variables must be initialized with a
    // constant value.Try changing the initializer to be a constant 

    final String nickname = 'Bobby';
    const bar = 1000000; // Unit of pressure (dynes/cm2)

    const double atm = 1.01325 * bar; // Standard atmosphere

    var   foo = const [];
    final bar = const [];
    const baz = []; // Equivalent to `const []`


### 👉 String 灵活的字符串表达
- https://api.dart.cn/stable/2.13.4/dart-core/String-class.html
- https://api.dart.cn/stable/2.13.4/dart-core/Pattern-class.html
- https://api.dart.dev/stable/2.13.4/dart-core/RegExp-class.html

Dart String 类型提供了日常会用到的各种字符串操作方法，通常还和正则表达式配合使用，同时 String 是 Pattern 的子类。

```js
RegExp exp = RegExp(r"(\w+)");
String str = "Parse my string";
Iterable<RegExpMatch> matches = exp.allMatches(str);
for (Match m in matches) {
  String match = m[0]!;
  print(match);
}
print('banana'.matchAsPrefix('ripe banana', 5)!.groups([0]));
```

字符串类型已经实现的操作符有以下 4 个：

- operator * 生成指定重复次数的字符串，如 'O' * 2 得到 'OO'；
- operator + 连接两个字符串；
- operator == 判断两个字符串内容是否一致；
- operator [] 获取字符串中下标指定位置的字符；

引号换行字符串可连接，或 + 号连接

    var s1 = 'String '
        'concatenation'
        " works even over line breaks.";
    assert(s1 ==
        'String concatenation works even over '
        'line breaks.');

    var s2 = 'The + operator ' + 'works, as well.';
    assert(s2 == 'The + operator works, as well.');

    
文本模板 String Template `'''`

    var s1 = '''
    You can create
    multi-line strings like this one.
    ''';

    var s2 = """This is also a
    multi-line string.""";

原样字符串 Raw String `r"abc"`

    var raw = r'In a raw string, not even \n gets special treatment.';

字符串插值 String interpolation `${expression}`

    String name = 'hello';
    assert('$name string'); // hello string
    assert('${name} string'); // hello string

    var s = 'string interpolation';
    assert('That deserves all caps. ' +
            '${s.toUpperCase()} is very handy!' ==
        'That deserves all caps. ' +
            'STRING INTERPOLATION is very handy!');

    // These work in a const string.
    const aConstNum = 0;
    const aConstBool = true;
    const aConstString = 'a constant string';

    // These do NOT work in a const string.
    var aNum = 0;
    var aBool = true;
    var aString = 'a string';
    const aConstList = [1, 2, 3];

    const validConstString = '$aConstNum $aConstBool $aConstString';
    // const invalidConstString = '$aNum $aBool $aString $aConstList';

其它字符串方法参考：

    assert(name.length);         // 6 字符串长度
    assert(name.isEmpty)         // false 判断是否为空
    assert(name.isNotEmpty)      // true 是否不为空
    assert(name.substring(0, 2)) // he 字符串切割
    assert(name.substring(3))    // lo 从指定index至末尾

    String e = "a,b,,"; 
    List<String> a6 = e.split(",");// 使用，分割，返回的是一个数组,同js [a,b, , ]

    String f = "a b,c";
    String g = f.splitMapJoin(",",
       onMatch: (Match match) {
         return "a";
       }, 
       onNonMatch: (String nonMatch) {
         return "b";
       });
    assert(g); // a b,c  =>   bab

    // 字符串判断
    String = 'aabbbcccc';
    assert(h.startsWith("aa")); //true startsWith以某某开始
    assert(h.startsWith("aa", 3)); //false 从index=3开始判断
    assert(h.endsWith("c")); //true endsWith 以xx结尾
    assert(h.contains("ab")); //true contains是否包含
    assert(h.contains("ac")); //false
    assert(h.contains("ab", 3)); //false 从index=3开始判断

    // 字符串替换
    String i = "stringing";
    assert(i.replaceAll("st","cc"));// ccringing 替换全部符合条件的
    assert(i.replaceFirst("ing", "ss"));//strssing 只替换第一个符合条件的
    assert(i.replaceFirst("ing", "dd",5));//stringdd 从index=5开始 替换第一个符合条件的
    assert(i.replaceRange(0, 3, "z"));// zinging 范围替换 从0-3 含0不含3
    assert(i.replaceAllMapped("i", (Match match){//stryngyng 用方法返回值替换指定的字符串
      return "y";
    }));
    assert(i.replaceFirstMapped("i", (Match match){
      return "333";
    },5)); //string333ng 从index=5开始 用方法返回值替换指定的字符串
    
    // 字符串查找
    Sting j = 'hello'
    assert(j.indexOf('l')); // 2 从前往后找 返回第一个符合条件的index
    assert(j.lastIndexOf('l')); // 3 从后往前找 返回第一个符合条件的index
    
    // 转换为大小写
    Stinrg k = 'aaBBcC'
    assert(k.toLowerCase()); // aabbcc
    assert(k.toUpperCase()); // AABBCC  
    
    // 去除空格
    String l = " aab bcc ";
    assert(l.trim()); //aabbcc 去除左右空格
    assert(l.trimLeft()); //aabbcc 去除左边空格
    assert(l.trimRight()); // aabbcc去除右边空格
    
    // 补齐长度 剩余位使用指定字符串替换
    String j = "111";
    assert(j.padLeft(6));// 111 剩余3个位 默认使用""补齐
    assert(j.padRight(6,"c")); //111ccc 剩余3个位 指定使用"c"
    assert(j.padRight(6,"dd")); //111dddddd 剩余3个位 每个位指定使用"dd" 替换后总长度不是6
    assert(j.padLeft(2,"e"));//111 如果指定长度小于原字符串长度 返回原字符串

### 👉 Array 数组

    var list = [1, 2, 3];
    assert(list.length == 3);
    assert(list[1] == 2);

    list[1] = 1;
    assert(list[1] == 1);

    list.forEach((i) => print(i)); // 遍历数组
    list.map(i=>i+1) // [2, 3, 4]
    list.sort((num1, num2) => num1 - num2); // 排序
    list.every(i=>i<5) // true 用法同上
    list.reduce((curr, next) => curr + next); // 15 数组相加的总和

    list.fold(2,(curr, next) => curr + next);// 17 用法同reduce，有一个初始值
    list.contains(5) // false 用于判断数组是否包含某个元素
    list.where((i) => i > 2); // [3] 返回数组中满足给定条件的元素集合

    // firstWhere() 返回数组中满足给定条件的第一个元素
    list.firstWhere((i) => i > 2, orElse: () => null); // 3
    // singleWhere() 返回数组中满足给定条件的唯一一个元素，若有多个元素满足条件会抛出异常
    list.singleWhere((i) => i < 2, orElse: () => null);

    List arr = [1, 3, 5, 2, 7, 9];
    arr.take(3).toList() // [1, 3, 5] take(n) 从数组里取 n 个元素
    arr.skip(4).toList() // [7, 9] skip(n) 跳过数组中的 n 个元素
    arr.take(3).skip(2).take(1).toList() // [5]
    var clonedArr = List.from(list); // [1, 2, 3] from 克隆一个数组
    print(clonedArr);
    var arr1 = [[2, 5], [7], [11, 12]];
    arr1.expand((item) => item).toList(); // [2, 5, 7, 11, 12]
    list.expand((item) => [item * 8]).toList();// [8, 16, 24]

    // 当对每一项进行计算时类似于 map() [8, 16, 24]
    list.map((item) => item * 8).toList();
    list.add(10); // [1,2,3,10] 向数组中添加元素
    list.addAll([15, 21]); // [1,2,3,15,21] 向数组中添加另一个数组的所有元素


### 👉 Lists Sets Maps 集合类型
- https://api.dart.dev/stable/2.13.4/dart-core/Map-class.html
- https://api.dart.dev/stable/2.13.4/dart-core/List-class.html
- https://api.dart.dev/stable/2.13.4/dart-core/Set-class.html

集合类型有 `Lists`、 `Sets`、 `Maps` 三种，泛型实现，`Lists` 像是 JavaScript 的数组。

在 JavaScript 中 `{"a":"b"}` 是匿名对象 JSON 表达式，但在 Dart 这是 Map 的表达式，第一个 `Key:Value` 组合就是一个 `MapEntity`。`Map` 和 `Set` 的表达很相似，并且空的花括号 `{}` 表示 `Map`，[Dart API - Map]。`Set` 是无顺序不重复的元素集合，数组元素是可以重复的，`Map` 则是无序的键值映射对，它们都是可枚举类型 `Iterable`。

使用示范：

```js
// `List` 基本用法
var list = [1,2,"three",4,5,6];
list.add(7);
print(list.getRange(2,3)); // "three"

// `Map` 基本用法
var map = <int,String>{1:"abc", 2:"xyz"};
map.addAll({3:'cd', 4:"3D"}); // NO add() for Map
map[5] = "LOV";
print(map[1]);

// `Set` 基本用法
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
var elements = <String>{};
elements.add('fluorine');
elements.addAll(halogens);
assert(elements.length == 5);
```

比较一下 Set 和 Map 的语法，默认 {} 会解析为 Map 实例，除非指定 Set 类型：

```js
var map = {}; // Creates a map, not a set.
var set1 = <String>{};
Set<String> set2 = {};
```

List 和 Map 的字面量 Literal 都可以指定类型参数，增加类型安全性：

```js
var names = <String>['Seth', 'Kathy', 'Lars'];
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

它们仨都是枚举类型 `Iterable`，都可以使用 `map()` 方法构造新副本，但 `Map.map()` 有点不同的是它会立即执行，并且需要返回 `MapEntry` 元素。

```dart
var map = <int,String>{1:"abc", 2:"xyz"};
var newmap = map.map((int i, String s){
    print("MapEntry {$i：$s}"); // run right away
    return MapEntry(i, s);
});
print("new map "+newmap.toString()); // "new map {1: abc, 2: xyz}"
```

`List.map()` 和 `Set.map()` 传入的转换函数则会在使用新副本时执行。

```js
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
var newset = halogens.map((v){
    // print("sets element $v"); // run before use
    return "[$v]";
});
// print("new set " + newset.toString());
print("new set " + newset.toList().join(",")); // "new set [fluorine],..."

var a = [1,2,3,4,6];
var newlist = a.map((i){
    // print("list element $i"); // run before use
    return i * 2; 
});
print("new list $newlist"); // "new list (2, 4, 6, 8, 12)"
```

将映射集合的键、值转变成数组：

```js
var keyset = map.keys;     // Iterable<int>
var valuelist = map.values;// Iterable<String>

print("keyList "+keyset.toList().toString());     // keyList [1, 2]
print("keySet "+keyset.toSet().toString());       // keySet {1, 2}
print("valueList "+valuelist.toList().toString());// valueList [abc, xyz]
print("valueSet "+valuelist.toSet().toString());  // valueSet {abc, xyz}
```

### 👉 DateTime
- https://api.dart.dev/stable/2.13.4/dart-core/DateTime-class.html
- https://api.dart.dev/stable/2.13.4/dart-core/Duration-class.html

DateTimes can represent time values that are at a distance of at most 100,000,000 days from epoch (1970-01-01 UTC): -271821-04-20 to 275760-09-13.

日期时间 `DateTime`，可以返回 Unix Epoch 的毫秒数或微秒数 `microsecondsSinceEpoch`、 `millisecondsSinceEpoch`，可以表示从 epoch (1970-01-01 UTC) 开始的 100,000,000 天时间，即 -271821-04-20 - 275760-09-13 范围。

方法参考：

```js
add(Duration duration) → DateTime
compareTo(DateTime other) → int ['override']
difference(DateTime other) → Duration
isAfter(DateTime other) → bool
isAtSameMomentAs(DateTime other) → bool
isBefore(DateTime other) → bool
subtract(Duration duration) → DateTime
toIso8601String() → String
toLocal() → DateTime
toString() → String ['override']
toUtc() → DateTime
```

日期时间通常配合 Duration 类型使用，它表示一个时间跨度，使用以下属性记录这个跨度：

- inDays
- inHours
- inMicroseconds
- inMilliseconds
- inMinutes
- inSeconds

日期时间跨度可以丰富的符号运算，可以将一个 Duration 看作一个包含 microseconds 的整数看待：

- operator `*` 与一个系数相乘；
- operator `+` 叠加一个时间跨度；
- operator `-` 减去一个时间跨度；
- operator `<` 比较大小；
- operator `<=`比较大小；
- operator `==`比较大小；
- operator `>` 比较大小；
- operator `>=`比较大小；
- operator `unary-` 取负值；
- operator `~/` 除一个自然数并取整数；

格式化可以使用 intl 包的 `DateFormat`，在 `pubspec.yaml` 工程配置文件中添加依赖：

    dependencies:
      intl: ^0.15.8

然后使用 `pub get` 安装依赖包，再将包引入代码即可使用。

示例：

```js
import 'package:intl/intl.dart';

var now = DateTime.now(); // 2019-04-05 Friday
String text = new DateFormat('yyyy-MM-dd').format(now);
debugPrint("Date & time... $text ${now.toString()}");
```

格式化有许多选项，示例如下：

|  Skeleton  |          Demo         |           ICU Name          |
|------------|-----------------------|-----------------------------|
| d          | 5                     | DAY                         |
| E          | Fri                   | ABBR_WEEKDAY                |
| EEEE       | Friday                | WEEKDAY                     |
| LLL        | Apr                   | ABBR_STANDALONE_MONTH       |
| LLLL       | April                 | STANDALONE_MONTH            |
| M          | 4                     | NUM_MONTH                   |
| Md         | 4/5                   | NUM_MONTH_DAY               |
| MEd        | Fri, 4/5              | NUM_MONTH_WEEKDAY_DAY       |
| MMM        | Apr                   | ABBR_MONTH                  |
| MMMd       | Apr 5                 | ABBR_MONTH_DAY              |
| MMMEd      | Fri, Apr 5            | ABBR_MONTH_WEEKDAY_DAY      |
| MMMM       | April                 | MONTH                       |
| MMMMd      | April 5               | MONTH_DAY                   |
| MMMMEEEEd  | Friday, April 5       | MONTH_WEEKDAY_DAY           |
| QQQ        | Q2                    | ABBR_QUARTER                |
| QQQQ       | 2nd quarter           | QUARTER                     |
| y          | 2019                  | YEAR                        |
| yM         | 4/2019                | YEAR_NUM_MONTH              |
| yMd        | 4/5/2019              | YEAR_NUM_MONTH_DAY          |
| yMEd       | Fri, 4/5/2019         | YEAR_NUM_MONTH_WEEKDAY_DAY  |
| yMMM       | Apr 2019              | YEAR_ABBR_MONTH             |
| yMMMd      | Apr 5, 2019           | YEAR_ABBR_MONTH_DAY         |
| yMMMEd     | Fri, Apr 5, 2019      | YEAR_ABBR_MONTH_WEEKDAY_DAY |
| yMMMM      | April 2019            | YEAR_MONTH                  |
| yMMMMd     | April 5, 2019         | YEAR_MONTH_DAY              |
| yMMMMEEEEd | Friday, April 5, 2019 | YEAR_MONTH_WEEKDAY_DAY      |
| yQQQ       | Q2 2019               | YEAR_ABBR_QUARTER           |
| yQQQQ      | 2nd quarter 2019      | YEAR_QUARTER                |
| H          | 11                    | HOUR24                      |
| Hm         | 11:54                 | HOUR24_MINUTE               |
| Hms        | 11:54:18              | HOUR24_MINUTE_SECOND        |
| j          | 11 AM                 | HOUR                        |
| jm         | 11:54 AM              | HOUR_MINUTE                 |
| jms        | 11:54:18 AM           | HOUR_MINUTE_SECOND          |
| m          | 54                    | MINUTE                      |
| ms         | 54:18                 | MINUTE_SECOND               |
| s          | 18                    | SECOND                      |



## ⚡ Functions
- https://dart.dev/guides/language/language-tour#functions

函数方法也是对象，具体类型是 Function。方法没有指定返回值，默认 return null。

Dart 主函数没有返回值，函数的返回类型、参数类型都可以省略：

    void main(List<String> args) {
      print(args); //[]
    }

函数返回值没有指定类型，即 void 返回对应返回 dynamic 类型。如果函数体没有 return 一个值，会默认返回 null。

支持命名参数，如指定部分参数实例化一个时间跨度 Duration:

```js
var d = Duration(minutes: 30, seconds:20);
```

匿名函数 Anonymous functions

    (x) {return x;} // and another

箭头语法： =>expr 是 {return expr;} 缩写，只是用一个表达式，也可以使用匿名方法：

    (x) => x; // yet another identity function
    (x, [step = 1]) => x + step; // a closure with an optional parameter
    (a, b) => a + b; // a closure with two required parameters
    twice(x) => x * 2;

可选参数 Optional Parameters 使用方括号，可以指定默认值：

    /// Sets the [bold] and [hidden] flags ...
    void enableFlags({bool bold = false, bool hidden = false}) {...}

    // bold will be true; hidden will be false.
    enableFlags(bold: true);

    // Optional named parameters and default value
    String say(String from, String msg, [String device, String location="SZ"]) {
        var result = '$from says $msg';
        if (device != null) {
            result = '$result with a $device';
        }
        return result +" @$location";
    }
    print(say("JJ","Hi!"));
    print(say({from: "JJ", msg: "Hi!"}));

必选参数 @required

    const Scrollbar({Key key, @required Widget child})

函数可以作为其他方法的参数进行传递，或者作为变量一样使用。

    library function_param;
    
    add(a, b) {
        return a + b;
    }
    executor(operation, x, y) {
        return operation(x, y);
    }
    void main() {
        var result = executor(add, 2, 1);
        print("Result is ${result}");
    }

Named Parameters 命名参数使用花括号包括，可以指定默认值，命名参数是可选参数，必选在具体参数的后面：

    optionParams(String name, {int age=30, String gender='女'}) {
      print('name=$name, age=$age, gender=$gender');
    }

可以使用闭包，如下声明一个无返回值类型、无参数的函数，它返回一个闭包函数：

    closure() { 
        int count = 0;
        printCount()  {
            count += 1;
            print(count);
        }
        return printCount;
    }


## ⚡ Generators
- https://dart.dev/guides/language/language-tour#generators
- https://api.dart.dev/stable/dart-core/Iterable-class.html
- https://api.dart.dev/stable/dart-async/Stream-class.html

生成器即 Generator 函数可以简单理解为一个状态机，封装了多个内部状态，这些状态就是一个集合的值。

生成器可以提供数据的懒生成，即在需要的时候才生成数据并派发给数据消费者，Dart 内置支持两类生成器：

- Synchronous generator: Returns an `Iterable` object.
- Asynchronous generator: Returns a `Stream` object.

所谓迭代对象就是实现了迭代接口，可以使用 for-in 结构枚举集合中的值。

形式上，Generator 函数和普通函数的差别在于返回值特征：

- `sync*`  表明是一个 synchronous generator，使用 `yield` 语句派送异步数据；
- `async*` 表明是一个 asynchronous generator，使用 `yield` 语句派送异步数据；

如果生成器需要递归调用，则通过 `yield*` 可以提高效率。

```js
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}

Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}

Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```


## ⚡ Class
- https://dart.dev/guides/language/language-tour#classes

Dart 是一种面向对象语言，包含类和基于 Mixin 的继承两部分。每个对象是一个类的实例，并且 Object 是所有类的父类。基于 Mixin 的继承指的是每个类(除了 Object )都只有一个父类，类体还可以在多个类继承中被重用。

Dart 一切都是对象，都是类的实例，类本身也是对象，也是类的实例，背后这个类称为 metaclass。这很绕，你可以将类当作对象看待，也可以当作类型来看待，取决于怎样使用它。

和 JavaScript 类似，Dart 所有函数数作为一种类型对象，它们的父类是 `Function`，并且有一个静态方法 apply 可以调用函数：

```js
static apply(Function function, List positionalArguments, [Map<Symbol, dynamic> namedArguments] );
```

Dart 引入了一个级联运算符号，方便对象的链式表达：

```js
'Hello'.length.toString(); // evaluates to ‘5’
'Hello'..length.toString(); // evaluates to “Hello”
```

Dart 的类有具体 `Type` 类型，但不需要指定它属于什么类。

    Type.runtimeType; // Ouch! NoSuchMethodError
    (Type).runtimeType; // works

以上两行代码，runtimeType 是所有对象都具有的属性，而类对象没有此属性，因此可以通过第二种方式调用，将 Type 当作一个对象而不是类。

上面的 `Type` 是私有类型，主要用于反射模块，注意它不是关键字而是类对象，可以使用以下方法创建类型对象：

```js
// 1. By a type literal, a type name occurring as an expression, like
Type type = int;
// 2. or a type variable occurring as an expression, like 
Type type = T;.
// 3. By reading the run-time type of an object, like 
Type type = o.runtimeType;
// 4. Through dart:mirrors.
```
通常 Type 类型是自身的实例，否则可能是无法解决无限倒退的问题。比如说一个对象 aC 属于 C 类型，而 C 属于 Type 类型，Type 是自身类型。

可靠地发现对象的类的唯一方法是通过反射，对象也确实支持 getter runtimeType，默认情况下它返回对象的类，但是子类可以自由重写它。

作为所有类型的父类，有必要了解 `Object` 的定义：

```js
class Object {
    bool operator == (other)=> identical(this, other);
    external int get hashCode;
    external String toString();
    external noSuchMethod(Invocation im);
    external Type get runtimeType;
}
```

其中，identical 是内建的比较方法，内建关键字 `external` 表示对应的方法在其它地方提供实现。


一般类型定义，注意 setter 并没有返回值，省略 void：

```js
class Point {
  var rho, theta;
  Point(this.rho, this.theta);
  
  double get x => rho * cos(theta);
  set x(newX) {
    rho = sqrt(newX * newX + y * y);
    theta = acos(newX / rho);
  }

  double get y => rho * sin(theta);
  set y(newY) {
    rho = sqrt(x * x + newY * newY);
    theta = asin(newY / rho);
  }

  Point scale(factor) => Point(rho * factor, theta);
  operator +(p) => Point(x + p.x, y + p.y);
  static double distance(p1, p2) {
    var dx = p1.x() - p2.x();
    var dy = p1.y() - p2.y();
    return sqrt(dx * dx + dy * dy);
  }
}
```

静态方法也叫 Class Methods，直接通过类调用 `Point.distance(...)`，类似的静态字段也叫 Class Variables，通过类符号访问。实例方法和实例变量则通过实例的变量符号去调用域访问。

另外，常量定义需要赋值一个常量，例如以下代码片断，注意常量构造器的调用，等号右侧的 const 关键字相当于 new 在调用常量构造器，同样关键字可以省略：

```js
class Point {
    final x, y;
    const Point(this.x, this.y);
    // … the usual
}
const origin = const Point(0,0);
```

省略 new 或 const 执行构造器就像调用一个函数，这称为 functor，就是使一个类的使用看上去像一个函数。其实现就是类中实现一个 operator()，这个类就有了类似函数的行为。

每个实例都有一个 Identity 即身份，在使用 == 比较时，内建的 identical 方法会判断同一个实例才是相等的 Equality。不同的的实例，即类型相同，字段设置相同也不相等。但是，通过操作符号重载可改变 operator == 的行为。

下面以几个方面的内容进行解析：

- 类与对象、声明、创建及基本特性
- 构造方法及初始化列表
- 静态成员及对象操作符的使用

类与对象

- 使用关键字 `class` 声明一个类
- 使用关键字 `new` 创建一个对象，new 可省略
- 所有对象都继承于 `Object` 类

属性与方法

- 属性默认会生成 getter 和 setter 方法
- 声明为 `final` 的属性只有 getter 方法（只读）
- 属性和方法通过 . 成员操作符号访问
- 方法不能被重载

类及成员的可见性

- 可见性以 library 为单位
- 默认情况下，每个 Dart 文件就是一个库
- 命名前缀 _ 表示库、类、方法的私有性
- 使用 import 导入库

初始化列表

- 初始化列表会在构造方法体执行之前执行
- 初始化列表写在方法括号后，并使用冒号引导初始化表达式
- 使用逗号分隔初始化表达式
- 初始化列表常用于设置 `final` 变量的值

静态成员

- 使用 `static` 关键字来实现类级别的变量和函数
- 静态成员不能访问非静态成员，非静态成员可以访问静态成员
- 类中的常量需要使用 `static const` 声明

由于方法不可重载，Dart 提供命名构造方法实现多个构造方法的定义，语法格式 `class.method(args) {...}`，可以在构造函数中的初始化列表中调用命名构造方法，即 Redirecting Constructors。

每个类至少有一个默认的构造器，可以省略不写，以下三种表达是等价的，通过 `super()` 调用父构造器：

```js
class Box {
  var contents;
}

class Box {
  var contents;
  Box();
}

class Box {
  var contents;
  Box() {}
}
```

示范：

    void main() {
        var person = Person('李四', 35);
        // var person = Person.NN('李四');
        // get attribute via getter
        var who = person.name;
        // update via setter
        person.name = who + '方';
        person._taxonomy = 'Primates';
        // person.genus = 'Primates'; // readonly
        person.work();
    }

    class Person {
      String name;
      int age;
      // internally
      String _taxonomy = 'mammals';
      // readonly
      final String genus = 'Homo';
      // constructor with initializer-list
      Person(String name, int age): name = name, age = age {
        // this.name = name;
        // this.age = age;
      }
      // named constructor
      Person.NN(String name) { this.name = name; }

      // methods
      void work() {
          print('$name ${age} is working');
      }
      // void work(int num) { } // can't overload method
    }

使用 is 和 is! 判断子类型：

    print(person is Function);
    print(person is! Function);

级联操作符号 .. 访问成员同时返回类实例的引用：

    var person = new Person();
    person..name = '张三'
          ..age=20
          ..work();

条件成员访问操作符 `?.` 表示对象不为空才往下执行，访问成员属性。例如，以下 person 为 null 就不会执行 work() 方法。

    person?.work();

类型转换 as 可以将对象转换为指定类型：

    (person as Person).work();

如果类实现了 call() 方法即为 Callable classes，则该类的实例对象可以作为方法使用：

    class WannabeFunction {
      String call(String a, String b, String c) => '$a $b $c!';
    }

    var wf = WannabeFunction();
    var out = wf('Hi', 'there,', 'gang');

    void main() => print(out);

如果，满足以下两个条件之一，调用未实现的类方法可以触发 `noSuchMethod` 魔术方法：

- The receiver has the static type `dynamic`.
- The receiver has a static type that defines the unimplemented method (`abstract` is OK), and the `dynamic` type of the receiver has an implemention of `noSuchMethod()` that’s different from the one in class Object.

对于 final 成员进行赋值也会触发 `noSuchMethod()` 因为 final 成员没有相应的 setter。
示范：

    class Person {
      missing(int age,String name);

      @override //overriding noSuchMethod
        noSuchMethod(Invocation invocation) => '''
        Got the ${invocation.memberName} with arguments ${invocation.positionalArguments}
        ''';
    }

    main(List<String> args) {
      dynamic person = new Person(); // the receiver person could be var, Person or dynamic
      print(person.missing(20,'shubham')); //calling abstract method
    }

以下是一个基于 `noSuchMethod()` 实现的简单代理类：

```js
class Proxy {
  final forwardee;
  Proxy(this.forwardee);
  @override
  void noSuchMethod(inv) { return runMethod(forwardee, inv);}
  void runMethod(forwardee, Invocation inv){
    var im = reflect(forwardee);
    im.delegate(inv);
  }
}
```

## ⚡ Factory Constructors

Dart 引入了工厂构造函数这一概念，它们看起来像普通的构造函数，只是使用 `factor` 关键字修饰构造器，它们可能没有初始值列表或初始化形式参数。相反，它们必须有一个返回对象的函数体。工厂方法可以从缓存中返回对象，也可以根据自己的选择分配一个新实例。它甚至可以分配不同类的实例，或者在缓存或任何其他数据结构中查找它们，只要结果对象符合类的接口。

通过工厂构造器，Dart 解决了传统构造函数的一些经典缺点。

```js
enum ShapeType {
  triangle,
  rectangle
}

abstract class Shape {
  factory Shape(ShapeType type) {
    switch (type) {
      case ShapeType.triangle: return 'Triangle()';
      case ShapeType.rectangle: return 'Rectangle()';
      default: return null;
    }
  }
}
```

注意 factory constructors 不能访问 this 引用。

官方文档也提供了一个 Logger 示范：

```js
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(
        name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}

var logger = Logger('UI');
logger.log('Button clicked');

var logMap = {'name': 'UI'};
var loggerJson = Logger.fromJson(logMap);
```



## ⚡ Abstract & Interface
- https://dart.dev/guides/language/language-tour#implicit-interfaces
- https://dart.dev/guides/language/language-tour#adding-features-to-a-class-mixins

抽象类

- 抽象类使用 `abstract` 表示，不能直接被实例化
- 抽象方法只声明不提供实现，不能用 `abstract` 修饰
- 抽象类可以没有抽象方法，但有抽象方法的类一定得声明为抽象类

示范：

    void main(List<String> args) {
      var student = new Student();
      student.act();
    }

    abstract class Person {
      void act();
    }

    class Teacher extends Person {
      @override
      void act() {
        print('teacher in class');
      }
    }

    class Student extends Person {
      @override
      void act() {
        print('Student in class');
      }
    }

接口

- 类和接口是统一的，类就是接口
- 每个类都隐式的定义了一个包含所有实例成员的接口
- 如果是复用已有类的实现，使用 `extends` 继承
- 如果只是使用已有的外在行为，则使用 `implements` 实现接口，类对象作为接口来使用，类就是接口，所有属性方法都要重新实现

示范：

    void main(List<String> args) {
      var student = Student();
      student.run();

      var child = Children();
      child.run();
    }

    class Person {
      String name;
      int get age => 18;

      void run() {
        print('person run');
      }
    }

    // abstract class as interface
    abstract class IPerson {
        void run();
    }

    class Children implements IPerson {
      @override
      void run() {
        print('children run');
      }
    }

    // class as interface
    class Student implements Person {
      @override
      String name;

      @override
      int get age => 15;

      @override
      void run() {
        print('student run');
      } 
    }

Mixins

- Mixins 混入可以理解为多继承，是重用一个类代码的方式
- Mixins 类不能显式声明构造方法
- Mixins 类只能继承自 Object
- 使用关键字 `with` 连接一个或者多个 Mixins 类

一般语法格式如下，如果没有类没有实现代码可以省略花括号：

    class D extends A with B, C {}

示范：

    void main(List<String> args) {
      var a = new A();
      a.work();
    }

    class B extends Object {
      void work() {
        print('B.work');
      }
    }

    class C {

    }

    class A with B {

    }

定义 Mixin 类只需要将 class 关键字改为 mixin，并且不要定义构造函数：

    class Musician {
      // ...
    }
    mixin MusicalPerformer on Musician {
      // ...
    }
    class SingerDancer extends Musician with MusicalPerformer {
      // ...
    }

## ⚡ Operators & overload
- https://dart.dev/guides/language/language-tour#operators

运算符优先级：

    |       Description        |                         Operator                         |
    |--------------------------|----------------------------------------------------------|
    | unary postfix            | expr++    expr--    ()    []    .    ?.                  |
    | unary prefix             | -expr    !expr    ~expr    ++expr    --expr   await expr |
    | multiplicative           | *    /    %    ~/                                        |
    | additive                 | +    -                                                   |
    | shift                    | <<    >>    >>>                                          |
    | bitwise AND              | &                                                        |
    | bitwise XOR              | ^                                                        |
    | bitwise OR               | ||                                                       |
    | relational and type test | >=    >    <=    <    as    is    is!                    |
    | equality                 | ==    !=                                                 |
    | logical AND              | &&                                                       |
    | logical OR               |                                                          |
    | if null                  | ??                                                       |
    | conditiona               | l expr1 ? expr2 : expr3                                  |
    | cascade                  | ..    ?..                                                |
    | assignment               | =    *=    /=   +=   -=   &=   ^=   etc.                 |

类似 Python，`i ~/ 2` 表示 i 除以 2，并且向下取整。

操作符覆写需要在类中定义，语法参考：

    return-type operator OP (args...) {
        body
        return
    }

如果覆写 == ，还需要覆写对象的 hashCode getter 方法。

可覆写的操作符：

    <  +  |  []  >  /  ^  []=  <=  /  &    >=  *  <<  ==  -  %  >>

示范覆写操作符 > 以比较两个对象，[] 实现取值：

    void main() {
      var p1 = new Person(18);
      var p2 = new Person(22);

      p1 > p2;
      print(p1 > p2);

      print(p1.age);
      print(p1['age']);
      print(p1['aa']);
    }

    class Person {
      
      int age;
      Person(this.age);

      bool operator > (Person p) {
        return this.age > p.age;
      }

      int operator [](String name) {
        if(name == 'age') {
          return this.age;
        }
        return 0;
      }
    }


## ⚡ Generics 泛型

泛型是降低代码重复的工具，在前面已经使用过泛型列表，例如定义一个字符串列表：

    var names = <String>[];
    names.addAll(['Seth', 'Kathy', 'Lars']);
    // names.add(42); 
    // Error: The argument type 'int' can't be assigned to the parameter type 'String'.

列表 `List<T>` 是一种泛型类对象，声明时指定泛型类型参数 T 为 String，那么这个列表就只能存放字符串元素，而不可以存放数值类型元素。如果定义为 Object 类型列表，那么它们都可以是列表的元素。

从这一点可以看到，泛型也具有提高类型安全特性。

Map 和 Set 类型都是泛型实现：

    var names = <String>['Seth', 'Kathy', 'Lars', 'Lars'];
    var uniqueNames = <String>{'Seth', 'Kathy', 'Lars'};
    var pagesMap = <String, String>{
      'index.html': 'Homepage',
      'robots.txt': 'Hints for web robots',
      'humans.txt': 'We are people, not machines'
    };
    var views = Map<int, View>();
    var nameSet = Set<String>.from(names);


以下通过一个 first 函数来解析泛型是如何实现降低代码重复的：

    T first<T>(List<T> ts) {
      // Do some initial work or error checking, then...
      T tmp = ts[0];
      // Do some additional checking or processing...
      return tmp;
    }

这个函数只返回列表中的第一个元素，参数可以传入字符串列表，也可以传入数值列表，根据具体类型，编译生成相应的函数实例。

函数或成员方法中使用泛型，可以增强类型安全性，同时避免类型相关代码的硬编码提高代码书写效率，加强类型安全和减少类型转换次数是能显著提高程序质量的技术，泛型则是最优化实现，通过最少最灵活的代码增强类型安全和减少类型转换。通过引入泛型 `first<T>` 定义，可以在参数中、返回类型和局部变量使用泛型 T。Dart 的泛型在运行时绑定，在运行时才可以知道 T 的具体类型。

泛型定义可以引入类型范围约束，用 extends 关键字指定约束类型。

    class Foo<T extends SomeBaseClass> {
      // Implementation goes here...
      String toString() => "Instance of 'Foo<$T>'";
    }

    class Extender extends SomeBaseClass {...}

    var foo = Foo<Extender>();

## ⚡ async & await
- https://dart.dev/guides/language/language-tour#asynchrony-support
- https://dart.dev/codelabs/async-await
- https://api.flutter.dev/flutter/dart-async/Completer-class.html
- flutter实战5：异步async、await和Future的使用技巧 https://segmentfault.com/a/1190000014396421

ES6 与异步相关的就是 `Promise`、 `async`、 `await`，JavaScript 在可能耗时的操作如 I/O 中使用异步可以直返回，只留下回调函数等待操作完成后通知，而必不等待操作完成。但有时候的程序流程是按每个异步结果来进行的，这种情况就会需要在异步回调函数中设置条件并按条件执行其它步骤，这就产生的回调嵌回调，函数再嵌函数的难堪。这时希望将异步同步化，`async` 和 `await` 关键字就是要实现异步同步化编程的，让你写异步代码看起来像同步代码一样简洁。

```js
let takeTime = (n) => {
    return new Promise((resolve,reject) => {
        n = n+200;
        setTimeout(() => resolve(n), n);
    });
}

let step1 = (n) => {
    console.log(`step1: with ${n}`);
    return takeTime(n);
}

let step2 = (n) => {
    console.log(`step2: with ${n}`);
    return takeTime(n);
}

async function test() {
    console.time("test");
    var delay = 200;
    delay = await step1(delay);
    delay = delay + await step2(delay);
    console.log(`result is ${delay}`);
    console.timeEnd("test");
}
test();
console.log("END");

// step1: with 200
// END
// step2: with 400
// result is 1000
// test: 1010.539ms
```

Dart 则是使用 `dart:async` 模块的 `Future`、 `async`、 `await`，但是在函数体前而设置 async 关键字。 Dart 充满了返回 Future 或 Stream 对象的函数。

    void main() async { ··· }
    Future<void> main() async { ··· }

Dart 也是一个单线程的语言，遇到有延迟的运算，线程中按顺序执行的运算就会阻塞卡顿，于是通常用异步处理来解决这个问题。当遇到有需要延迟的运算（async）时，将其放入到延迟运算的队列（await）中去，把不需要延迟运算的部分先执行掉，最后再来处理延迟运算的部分。

泛型类 `Future<T>` 和 JavaScript 的 Promise 类是等价的，T 类型表示一个异步操作结果。如果异步操作不需要结果，则类型为 `Future<void>`。

Future 使用示范：

```js
void main() async {
  var myfut1 = Future.value(14);
  print(myfut1); // Instance of 'Future<int>'

  var myfut2 = await Future.value(14);
  print(myfut2); // 14

  Future.delayed(Duration(seconds: 2), () => 14).then((value) => print(value));

  final res = await Future.delayed(Duration(seconds: 2), () => 14);
  print(res);

  // await Future.wait([ futures... ])
}
```

Future 还可以配合 Completer 使用，相当于 Promise 的 resolve 和 reject 这两个函数的类对象实现。 

```js
import 'dart:async';

Future<String> someFutureResult(){
   final c = new Completer<String>();
   // complete will be called in 3 seconds.
   new Timer(Duration(seconds:3), () => c.complete("2nd"));
   return c.future;
}

main(){
   someFutureResult().then((String result) => print('$result'));
   print("1st");
}
```

例如使用 `HttpServer` 来做服务器，先来看不使用 async 和 await 的写法，`bind()` 方法返回了一个 `Future<HttpServer>`，在这个 `Future` 身上，可以使用 `then()` 方法传入异步回调，当服务器执行 `bind()` 成功后再通过回调函数来通知。注意一下，这里出现的两点语法糖，因为 `write()` 这个方法返回 `void` 而不是原有对象。为了实现链式操作，Dart 提供了级连运算符 Cascade notation `..` 操作符号就像是上级目录的意思，它可以直接引用原有对象进行链式表达书写，有了它给对象属性赋值也可以使用链式表达！

    import 'dart:io';

    main() {
        HttpServer.bind(InternetAddress.anyIPv4, 8080)
        .then((httpServer){ 
            print('Web Server Listening ${httpServer.address.host}:${httpServer.port}');
            httpServer.listen((request){
                var res = request.response;
                res.headers.add("content-type", "text/html");
                var page = '''<h1>Hello Dart!</h1>''';
                res..write('''$page
                    <a href="/">Index Page</a> | 
                ''')..close();
            });
        })
        .catchError((res){ print("onError $res"); });
    }

使用 async 和 await 来同步化 `HttpServer.bind()` 这个方法，写法就完全改变了

    main() async {
        var httpServer = await HttpServer.bind(InternetAddress.loopbackIPv4, 8080);
        print('Web server listening on ${httpServer.address.host}:${httpServer.port}');

        await for(HttpRequest request in httpServer){
            var res = request.response;
            res.headers.add("content-type", "text/html");
            var time = DateTime.now().toString().substring(10);
            switch(request.uri.toString()){

                case "/close":
                res.write('''<h1>Bye!</h1><p>END ${time}</p>''');
                httpServer.close();
                break;
                
                case "/center":
                res.write('''<h1>Hi!</h1><p>Update ${time}</p>''');
                break;

                default:
                res.write('''<h1>Hello Dart!</h1>''');
            }
            res..write('''
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
                <a href="/center">Center Page</a> | 
                <a href="/">Index Page</a> | 
                <a href="/close">Close Server!</a>
            ''')..close();
            print("request ${request.requestedUri} ${request.uri}");
        }
    }

还可以给服务器加入文件读取服务

    Directory directory = await new Directory('logs').create(recursive: true);

    File file = new File('${directory.path}/web.md');
    file.exists().then((isExists){
        file.writeAsString("#info: $isExists", mode: FileMode.append);
    });

类似 setTimeout 的操作。

    await new Future.delayed(const Duration(milliseconds: 2000));
    new Future.delayed(const Duration(milliseconds: 2000)).then(() { ... });


## ⚡ Asynchronous Streams
- Asynchronous programming: Streams https://dart.dev/tutorials/language/streams
- https://api.dart.dev/stable/2.13.4/dart-async/Stream-class.html
- https://api.dart.dev/stable/dart-core/Iterable-class.html

Dart 有 single subscription 和 broadcast 两类流对象提供异步数据序列。

单订阅流在整个流的生命存活期内，只允许存在一个监听者。在没有监听者之前不会发送数据的，解除订阅时，会停止数据的发送，但是并不应影响数据的产生。

```js
void main() {
  var stream = Stream.value(2);
  stream.first;
  stream.last;
}
// Unhandled exception:
// Bad state: Stream has already been listened to.
//因为 first 和 last 都调用了 listen
```

广播流允许任意数量的订阅者，无论是否订阅，它会随时发送数据，因此晚于数据发送的时机的订阅者不会收到过时的数据。

```js
void main() {
  var count = 0;
  var controller = StreamController();
  var t1;
  t1 = Timer.periodic(Duration(seconds: 1), (value) {
    controller.sink.add(count++);
    if(count>10) t1.cancel();
  });

  var broadcastStream = controller.stream.asBroadcastStream();
  broadcastStream.listen((value) {
    print(value);
  });
  Future.delayed(Duration(seconds: 3), () {
    broadcastStream.listen((value) {
      print('$value second');
    });
  });
}
```

数据序列可以由 yield 生成器返回，并通过 `await for` 或者 listen() 这个 Stream API 进行处理： 

```js
Future<int> sumStream(Stream<int> stream) async {
  var sum = 0;
  try {
    await for (var value in stream) {
      sum += value;
    }
  } catch (e) {
    return -1;
  }
  return sum;
}

Stream<int> countStream(int to) async* {
  for (int i = 1; i <= to; i++) {
    if (i == 4) {
      throw Exception('Intentional exception');
    } else {
      yield i;
    }
  }
}

Future<void> main() async {
  var stream = countStream(10);
  var sum = await sumStream(stream);
  print(sum); // -1
}
```

在 await for 循环中处理的是流对象的数据事件，这个过程可能会触发错误事件，它也会像数据事件一样派送，可以通过 try-catch 进行处理。

Stream 提供了多个命名构造器，根据数据分类使用：

- `Stream.empty()` Creates an empty broadcast stream.
- `Stream.error(Object error, [StackTrace? stackTrace])` Creates a stream which emits a single error event before completing.
- `Stream.eventTransformed(Stream source, EventSink mapSink(EventSink<T> sink))` Creates a stream where all events of an existing stream are piped through a sink-transformation.
- `Stream.fromFuture(Future<T> future)` Creates a new single-subscription stream from the future.
- `Stream.fromFutures(Iterable<Future<T>> futures)` Create a single-subscription stream from a group of futures.
- `Stream.fromIterable(Iterable<T> elements)` Creates a single-subscription stream that gets its data from elements.
- `Stream.periodic(Duration period, [T computation(int computationCount)?])` Creates a stream that repeatedly emits events at period intervals.
- `Stream.value(T value)` Creates a stream which emits a single data event before completing.

示范，使用 Future 在一秒后打印消息 “1” 和 “done”，即将 future 的结果和完成事件发射出去：

```js
Stream.fromFuture(Future.delayed(Duration(seconds: 1), () {
    return 1;
  })).listen((value) {
    print('${value}');
  }, onError: (obj, str) {
    print('error');
  }, onDone: () {
    print('done');
  });
}
```

一次 打印 0-9 和 done 事件。

```js
void main() {
  var list = List.generate(10, (value) {
    return value;
  });

  Stream.eventTransformed(Stream.fromIterable(list), (eventSink) {
    return MapSink(eventSink);
  }).listen((value) {
    print('${value}');
  }, onError: (obj, str) {
    print('error');
  }, onDone: () {
    print('done');
  });
}

class MapSink implements EventSink<int> {
  EventSink _outputSink;

  MapSink(this._outputSink);

  @override
  void add(int event) {
    _outputSink.add('$event');
  }

  void addError(e, [st]) {
    _outputSink.addError(e, st);
  }

  void close() {
    _outputSink.close();
  }
}
```

流式编程支持聚合、转换、过滤、判断等，方法参考：

- `Stream<T> where(bool test(T event))` 过滤符合条件的元素创建一个新流。
- `Stream<M> map <M>(M convert(T event))` 元素映射变换后创建一个新流。
- `Stream<T> handleError(Function onError, {bool test(error)})` 创建一个新流，用于拦截满足test的error事件。
- `Stream<M> expand<M>(Iterable<M> convert(T element))` 变换原元素创建一个新流，注意新流的每一个元素是一个数据序列。
- `Stream<M> transform<M>(StreamTransformer<T, M> streamTransformer)` 执行 streamTransformer 转换，注意这里返回的还是旧流。
- `Stream<T> take(int count)` 返回一个新的流，取旧流的前 count 个元素。
- `Stream<T> skip(int count)` 返回以新流，新流的元素从旧流元素的第 count 个开始。
- `Stream<T> distinct([bool equals(T previous, T next)])` 流中元素去重。

- `Future pipe(StreamConsumer<T> streamConsumer)` 返回一个Future，当流被消费 且被关闭时，future会自动计算。
- `Future<T> reduce(T combine(T previous, T element))` 聚合流中元素，对流中元素迭代调用combine函数。
- `Future<M> fold<M>(M initialValue, M combine(M previous, T element))` 和reduce相似，只是多了一个初始值。
- `Future<String> join([String separator = ""])` 拼接流中元素的字符串形式，separator为分隔符。
- `Future<bool> contains(Object needle)` 是否包含needle。
- `Future forEach(void action(T element))` 流中元素迭代执行action。
- `Future<bool> every(bool test(T element))` 检查 流种元素是否 全都满足test。
- `Future<bool> any(bool test(T element))` 检查流中元素 是否 存在满足test 的元素。
- `Future<List<T>> toList()` 将流中元素 收集到 集合中。
- `Future<Set<T>> toSet()` 将流中元素 收集到 Set中。

使用 StreamController 管理流对象：

```js
void main() {
  var streamController = StreamController(onListen: () {
    print('listen');
  }, onPause: () {
    print('pause');
  }, onResume: () {
    print('resume');
  }, onCancel: () {
    print('cancel');
  });

  var count = 0;
  Timer.periodic(Duration(seconds: 1), (value) {
    streamController.sink.add(count++);
  });
  
  var subscription = streamController.stream.listen((value) {
    print('${value}');
  }, onError: (obj, str) {
    print('error');
  }, onDone: () {
    print('done');
  }, cancelOnError: true);

  Future.delayed(Duration(seconds: 5),(){
    subscription.pause();
  });

  Future.delayed(Duration(seconds: 10),(){
    subscription.resume();
  });

  Future.delayed(Duration(seconds: 15),(){
    subscription.cancel();
  });
}
```


## ⚡ Metadata & dart:mirrors
- Dart SDK repository https://github.com/dart-lang/sdk
- Reflection in Dart https://dartcn.com/articles/server/reflection-with-mirrors
- dart:mirrors library https://api.dart.dev/stable/dart-mirrors/dart-mirrors-library.html
- The fear of dart:mirrors https://mrale.ph/blog/2017/01/08/the-fear-of-dart-mirrors.html
- Mirrors: Design Principles for Meta-level Facilities of Object-Oriented Programming Languages http://bracha.org/mirrors.pdf
- Symbol class https://api.dart.dev/stable/2.13.4/dart-core/Symbol-class.html
- A fluent API for generating valid Dart source code https://github.com/dart-lang/code_builder

Dart 支持元数据编程，所谓元数据即代码中使用一个标注向编译器提供相关代码的额外信息，是简化编程的一种手段。通常元数据标注前缀一个 @ 符号，后接一个编译期常量，如 `@deprecated`，或者后接一个常量构造器的调用。

所有 Dart 代码都支持的两个元数据是标注是 `@deprecated` 和 `@override`，分别用来告知某个功能已经过时、告知编译在重写基类定义。

用户可以自定义元数据标注，以下是一个 `@todo` 实现示范：

```js
library todo;

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}
```

注意构造器的 const 修饰，常量在编译期确定，表示这个类在编译器被实例化。

示范使用 `@todo` 标注：

```js
import 'todo.dart';

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}
```

Metadata 标注可以出现在 library, class, typedef, type parameter, constructor, factory, function, field, parameter, 或变量声明之前，也可以在 `import` or `export` 指令前面使用，在运行时，可以通过反射技术来获取元数据。

反射是程序检查或修改自身的能力，可以进一步细分为程序在运行时改变自身的能力和内省 introspection 即程序在运行时确定其结构的能力。

Dart Reflection 基于 mirrors 的概念实现，目前 `dart:mirrors` 还是实验性的库，Mirror 是反射 API 的一种特殊形式，在发布、部署和安全方面具有优势。

Basic reflection with support for introspection and dynamic invocation. JIT only (not Flutter).

就目前而言，Dart 只支持内省，其它能力支持会随着时间的推移而发展。

Mirrors 目前不能进行 AOT 编译生成可执行程序，只能在命令行应用和服务端应用中引入，不能在 Web 应用中引入，Flutter 中也不能通过 JIT 使用 mirrors，所以无法进行反射操作。

内省是运行程序可以检查其自身结构的反射子集，例如，一个打印出任意对象的所有成员名称的函数。

动态调用是指在编译时不按字面指定评估代码的能力，例如调用一个其名称作为参数提供的方法（因为它在数据库中查找，或者由用户以交互方式提供）。

Gilad Bracha 作为 Dart 语言设计作者，他在 The Dart Programming Language 一书中设计解释了 Mirrors Reflect API 的设计。

另外，在 Mirrors 设计论文中，提出了面向对象编程语言中反射和元编程工具的三个设计原则：

- Encapsulation 封装：元级设施必须封装它们的实现。
- Stratification 分层：元级设施必须与基本级功能分开。
- Ontological correspondence 本体对应：元级设施的本体应与它们所操作的语言的本体相对应。

传统的主流反射式架构不遵循这些规则，相反，围绕镜像概念构建的反射 API 的特点是遵循这三个原则。因此，基于镜像的体系结构在分发、部署和通用元编程方面具有显著的优势。

Mirrors can be made to work on remote code, not just local code, since you don't need the reflected object to be in the same Isolate or VM as the mirror.

因为 Dart 需要考虑 JavaScript 的支持，Mirrors 作为可选的模块，在不支持的 Web 项目中就可以很好地进行解耦处理。

对大多数用户，Dart 的反射和 Java 没有太多的差别，语法上就是 obj.getClass() 和 reflect(obj) 的差别，最重要的是 Mirrors Reflect API 的设计将其从标准对象的 API 中解耦出来成为独立模块。

```js
// Java:
myObject.getClass().getMethods(); // returns an array

// Dart:
reflect(myObject).type.methods; // returns a map

// Javascript:
var methods = [];
for (var m in myObject) {
  if (typeof m === 'function') {
    methods.push(m);
  }
}
```

各种不同的 Dart 类型都可以进行反射，通过反射 API 获取相应的各种反射类，反射包实现了四个顶层反射函数，其中 reflect 方法获取对象实例的反射对象：

```js
external InstanceMirror reflect(dynamic reflectee);
external ClassMirror reflectClass(Type key);
external TypeMirror reflectType(Type key, [List<Type>? typeArguments]);
external MirrorSystem currentMirrorSystem();

var closureMirror = reflect(main);
var functionTypeMirror = reflectType(main.runtimeType);
print(functionTypeMirror.metadata);

var classMirrorOnClosure = reflectClass(main.runtimeType);
var pg = classMirrorOnClosure.metadata[0].reflectee as pragma;
print(pg.name);
```

反射包的类型参考，其中 `LibraryMirror` 和 `ClassMirror` 实现了多个接口：

    Mirror 
      +-- IsolateMirror 
      +-- DeclarationMirror 
      |    +-- TypeMirror
      |         +-- TypedefMirror
      |    +-- MethodMirror
      |    +-- VariableMirror
      |         +-- ParameterMirror
      +-- ObjectMirror 
      |    +-- InstanceMirror
      |         +-- ClosureMirror
      +-- LibraryDependencyMirror 
      +-- CombinatorMirror 

      +-- DeclarationMirror, ObjectMirror
      |    +-- LibraryMirror
      +-- TypeMirror, ObjectMirror
           +-- ClassMirror
                +-- FunctionTypeMirror

- `Mirror` 抽象类，反射对象接口。
- A `MirrorSystem` is the main interface used to reflect on a set of associated libraries. 
- `Comment` Class used for encoding comments as metadata annotations.
- A `SourceLocation` describes the span of an entity in Dart source code.
- A `ClosureMirror` reflects a closure. 
- `CombinatorMirror` A mirror on a show/hide combinator declared on a library dependency.
- A `DeclarationMirror` reflects some entity declared in a Dart program.
- A `FunctionTypeMirror` represents the type of a function in the Dart language.
- An `IsolateMirror` reflects an isolate.
- `LibraryDependencyMirror` A mirror on an import or export declaration.
- A `MethodMirror` reflects a Dart language function, method, constructor, getter, or setter.
- An `ObjectMirror` is a common superinterface of InstanceMirror, ClassMirror, and LibraryMirror that represents their shared functionality. 
- A `ClassMirror` reflects a Dart language class.
- An `InstanceMirror` reflects an instance of a Dart language object.
- A `LibraryMirror` reflects a Dart language library, providing access to the variables, functions, and classes of the library.
- A `ParameterMirror` reflects a Dart formal parameter declaration.
- `TypedefMirror` A TypedefMirror represents a typedef in a Dart language program.
- A `TypeMirror` reflects a Dart language class, typedef, function type or type variable.
- `TypeVariableMirror` A TypeVariableMirror represents a type parameter of a generic type.
- A `VariableMirror` reflects a Dart language variable declaration.

这些反射类型接口可分为多种，包括类型声明反射 `DeclarationMirror`、实例反射 `ObjectMirror`，和其它反射功能类型。

以下示范如何通过声明反射类型来获取元数据，获取到的元数据反射对象就是一个实例反射类型 `InstanceMirror`，通过 reflectee 属性获取被反射的实例对象：

```js
import 'dart:mirrors';

@Todo('say', 'this is a class.')
class A{
  @Todo('say', 'this is a field.')
  int a;
  @Todo('say', 'this is a constructor method.')
  A(this.a);
}

class Todo {
  final String act;
  final String what;
  const Todo(this.act, this.what);
}

main(){
  var classMirror = reflectClass(A);
  classMirror.metadata.forEach((metadata) {
    print(metadata.reflectee.act + ' ==> ' + metadata.reflectee.what);
  });
  
  var methodMirror = classMirror.declarations[#A]!;
  var todo = methodMirror.metadata[0].reflectee;
  print('Symbol #A:' + todo.what);

  var variableMirror = classMirror.declarations[#a]!;
  todo = variableMirror.metadata[0].reflectee;
  print('Symbol #a:' + todo.what);
}
```

Dart 使用符号来作为反射类型的字段，代码片断中使用了符号字面量，Symbol("A") 和 #A 等价。

另外，利用类型的魔术方法 noSuchMethod 也可以作为 Reflection 的替代方法。


## ⚡ JSON 编码
- Using JSON https://dart.dev/guides/json
- The fear of dart:mirrors https://mrale.ph/blog/2017/01/08/the-fear-of-dart-mirrors.html
- Cryptographic hashing functions for Dart https://pub.flutter-io.cn/packages/crypto

项目中，后台接口往往会返回一些结构化数据，如 JSON、XML 等，可以通过 dart:convert 内置的解码器 json.decode() 来进行转换。
 
通过 json.decode() 将 JSON 字符串转为 List/Map 的方法比较简单，它没有外部依赖或其它的设置，对于小项目很方便。但当项目变大时，这种手动编写序列化逻辑可能变得难以管理且容易出错，`JSON.decode()` 仅返回一个 `Map<String, dynamic>`，这意味着我们直到运行时才知道值的类型。

通过这种方法，我们失去了大部分静态类型语言特性：类型安全、自动补全和最重要的编译时异常。

    import 'dart:convert';
    String str='[{"name":"Jack"},{"name":"Rose"}]';

    List items = json.decode(str);
    print(items[0]["name"]);

尽管 Dart 中操作 JSON 是很方便，但是和 JavaScript 还有些差别。

Dart 是静态类型语言，所以不能像 Javascript 那样直接将 JSON 字符串解析为一个类对象，而是解析为一个 Map 对象。

可以通过实现 marshaling helpers 来辅助得到目标类型：

```
Map userData = JSON.decode(str);
console.log("Got user ${userData['name']} from ${userData['city']}");  // OK

class UserData {
  String name;
  String city;

  UserData(this.name, this.city);

  UserDate.fromJson(Map m)
      : this(m['name'], m['city']);
}

UserData userData = new UserDate.fromJson(JSON.decode(str));
console.log("Got user ${userData.name} from ${userData.city}");
```

可以使用社区提供的 crypto 库来调用各种 hash 函数：

```js
import 'package:crypto/crypto.dart';
import 'dart:convert'; // for the utf8.encode method

void main() {
  var bytes = utf8.encode("foobar"); // data being hashed

  var digest = sha1.convert(bytes);

  print("Digest as bytes: ${digest.bytes}");
  print("Digest as hex string: $digest");
}
```


## ⚡ Isolate & Concurrency
- https://www.tutorialspoint.com/dart_programming/dart_programming_concurrency.htm
- https://api.dart.dev/stable/2.13.4/dart-isolate/Isolate-class.html
- https://api.flutter.dev/flutter/foundation/compute-constant.html
- https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

前面已经介绍过 isolate 是 Dart VM 中代码的运行环境，每个 isolate 实例可以看作一个进程，Dart 的并发编程就需要它。

```js
import 'dart:isolate';  
void foo(var message){ 
   print('execution from foo ... the message is :${message}'); 
}  
void main(){ 
   Isolate.spawn(foo,'Hello!!'); 
   Isolate.spawn(foo,'Greetings!!'); 
   Isolate.spawn(foo,'Welcome!!'); 
   
   print('execution from main1'); 
   print('execution from main2'); 
   print('execution from main3'); 
}
```

通过 `spawn` 方法孵化进程，它的参数列表中接收一个待执行的函数，和一个传入这个函数的参数对象，如果不需要传入参数可以指定为 `null`。

```js
external static Future<Isolate> spawn<T>(
    void entryPoint(T message), T message,
    {bool paused = false,
    bool errorsAreFatal = true,
    SendPort? onExit,
    SendPort? onError,
    @Since("2.3") String? debugName});
```

这里的 foo 和 main 执行顺序是还确定的，foo 也可能因为 main 的退出而不完全执行。

Isolates 不同于线程，它拥有独立的内存，没有途径与其它 isolates 实例共享，只能通过 port 进行消息通信传递数据。创建一个 ReceivePort，它是一个双向通讯端口，可以获取一个 SendPort 实例来向这个端口发送消息，然后通过 listen 绑定的监听函数处理数据。

A ReceivePort is a non-broadcast stream. This means that it buffers incoming messages until a listener is registered. Only one listener can receive messages. See Stream.asBroadcastStream for transforming the port to a broadcast stream.


```js
import 'dart:isolate';

main() { // in the main isolate
  ReceivePort r1 = new ReceivePort();
  SendPort s1 = r1.sendPort;
  Isolate.spawnUri(new Uri(path:’./otherIsolate.dart’), [], s1);
  r1.listen((data){
    print('Receied: $data');
    r1.close();
  });
}

main(args, SendPort s1) { // in otherIsolate.dart
  ReceivePort r2 = new ReceivePort();
  SendPort s2 = r2.sendPort;
  s1.send(s2);
}
```

Flutter 进一步封装了 ReceivePort 提供的更简洁 API，使用 compute 函数来创建新的 Isolate 执行耗时任务：

```js

import 'package:flutter/foundation.dart';
import  'dart:io';

create_new_task() async{
  var str = "New Task";
  var result = await compute(doWork, str);
  print(result);
}

String doWork(String value){
  sleep(Duration(seconds:5));
  return "complete:$value";
}
```

compute 函数有两个必须的参数，第一个是待执行的函数，这个函数必须是一个顶级函数，不能是类的实例方法，可以是类的静态方法，第二个参数为动态的消息类型，可以是被运行函数的参数。

注意，Web 应用不支持 Isolate，只能在服务端使用。


# 🚩 Core libraries
- A tour of the core libraries https://dart.dev/guides/libraries/library-tour
- https://api.dart.dev/stable/2.13.4/dart-core/dart-core-library.html

Dart 有一批核心库提供最基础的程序任务支持，如集合 dart:collection，算术 dart:math，数据编码 dart:convert 等，而其它功能库则通过社区贡献。

核心库分为三大类：

- Multi-platform libraries that work on all Dart platforms.

    - `dart:async` Support for asynchronous programming, with classes such as Future and Stream.
    - `dart:collection` Classes and utilities that supplement the collection support in `dart:core`. 
    - `dart:convert` Encoders and decoders for converting between different data representations, including JSON and UTF-8.
    - `dart:core` Built-in types, collections, and other core functionality for every Dart program.
    - `dart:developer` Interaction with developer tools such as the debugger and inspector. JIT and dartdevc only.
    - `dart:math` Mathematical constants and functions, plus a random number generator.
    - `dart:typed_data` Lists that efficiently handle fixed sized data and SIMD numeric types.

- Native platform libraries that work on the Dart native platform (AOT- and JIT-compiled code).

    - `dart:io` File, socket, HTTP, and other I/O support for non-web applications.
    - `dart:isolate` Concurrent programming using isolates: independent workers similar to threads.
    - `dart:mirrors` (`Experimental`) Basic reflection with support for introspection and dynamic invocation. JIT only (not Flutter)

- Web platform libraries that work on the Dart web platform (code compiled to JavaScript).

    - `dart:html` HTML elements and other resources for web-based applications.
    - `dart:indexed_db` Client-side key-value store with support for indexes.
    - `dart:web_audio` High-fidelity audio programming in the browser.
    - `dart:web_gl` 3D programming in the browser.
    - `dart:js` (`DEPRECATED`)Don’t use. Instead, use the js package, as described in JavaScript interoperability.
    - `dart:js_util` APIs to supplement missing functionality in dart:html or the js package.


# 🚩 FLutter Widgets
- Flutter Gallery https://gallery.flutter.dev/
- Flutter API reference https://api.flutter-io.cn/
- Flutter API reference https://api.flutter.dev/index.html
- Flutter get Started https://flutter.dev/docs/get-started/codelab

Flutter 应用中，万物皆 widget，即目前主流的组件化思想，由于 UI 控件解耦需要，慢慢演变出组件化的思想。

Flutter 控件主要分为两大类：

- StatelessWidget
- StatefulWidget

StatelessWidget 用来展示静态的文本或者图片，如果控件需要根据外部数据或者用户操作来改变的话，就需要使用 StatefulWidget。

State 的概念也是来源于 Facebook 的 React 框架，使用虚拟控件树和组件各自的状态来构建界面，当某个控件的状态发生变化时由框架负责对比前后状态差异并且采取最小代价来更新渲染结果。

一个 App 界面的基本结构可以由 Scaffold 类表示，它为页面定义以下基本布局：

- App bar 状态条，提供应用的快捷菜单、标题信息、导航按键等；
- Body 内容容器；

示范：

```js
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Welcome to Flutter'),
        ),
        body: const Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```

部件 Widget 是 Flutter 的基本概念，Widget 实际上是一个树状配置信息，而真正的 UI 渲染树由 Element 构成，一个部件对象可以对应多个 Element 对象。不过，由于 Element 是通过 Widget 生成的，所以它们之间有对应关系。在大多数场景，可以认为 Widget 树就是指 UI 控件树。

动态部件 Stateful 和静态部件 Stateless，前者持有状态，可能在部件生命周期中发生变化。后者是没有状态变化的，这意味着它们的属性不能改变，所有的值都是最终的。动态部件和静态的核心内容是一致的，它们都会在每一帧中被重构，不同之处在于，动态部件有一个 State 对象，它可以为动态部件在不同帧之间存储数据。

静态部件 StatelessWidget lifecycle 很简单，只需要构造器和一个 build 方法，子类扩展时，只要覆盖它即可。

动态部件 StatefulWidget lifecycle 就复杂点，增加了状态管理，子类需要覆盖 createState 方法： 

```js
class JournalEdit extends StatefulWidget {
    @override
    _JournalEditState createState() => _JournalEditState();
}
class _JournalEditState extends State<JournalEdit> {
    @override
    Widget build(BuildContext context) {
        return Container();
    }
}
```

动态组件生命周期流程如下：

    =========================      ===============================================================
    |     StatefulWidget    |      |                            State                            |
    |===========v===========|      |                  ============v============                  |
    |      Constructor      | ==>  |                  |       initState       |                  |
    |===========v===========|      |                  ============v============                  |
    |      createState      |      |                  | didChangeDependencies |                  |
    =========================      |                  ============v============                  |
                                   |                              v                              |
                                   |                         ===========                         |
                                   |           +===========> |  dirty  | <========+              |
                                   |           |             =====v=====          |              |
                                   |           |             |  build  |          |              |
                                   |  =========^=========    =====v=====    ======^=====         |
                                   |  | didUpdateWidget | <= |  clean  | => | setState |         |
                                   |  ===================    =====v=====    ============         |
                                   |                         | dispose |                         |
                                   |                         ===========                         |
                                   ===============================================================

各 React 框架类似，通过 setState 方法来标记状态处理 dirty 状态，即需要更新绘图。不同的是，Flutter 中设置状态传入的是一个回调函数，它会立即被执行，并且不可以使用 async 或返回 Future 对象，如：

    setState(() { _myState = newValue; });

Scaffold 是绞手架部件，实现了基本的 Material Design 布局结构。在 Material 设计中定义的单个界面上的各种布局元素，在 Scaffold 中都支持，结合多部件布局或单子部件布局可以实现各种布局结构，单子部件的布局能提供丰富的装饰能力如 `Container`，通过给 `Text` 加个容器设置样式对象，即可以像 Web 一样修饰内容。 Scaffold 有下面几个主要属性：


|主要属性       |解析                     |
|---------------|--------------------------|
|`appBar`           |显示在界面顶部的一个 AppBar。|
|`body`                     |当前界面所显示的主要内容 Widget。|
|`floatingActionButton`     |Material 设计中所定义的 FAB，界面的主要功能按钮。|
|`persistentFooterButtons`  |固定在下方显示的按钮，比如对话框下方的确定、取消按钮。|
|`drawer`                       |抽屉菜单控件。|
|`backgroundColor`          |内容的背景颜色，默认值是 ThemeData.scaffoldBackgroundColor。|
|`bottomNavigationBar`      |显示在页面底部的导航栏。|
|`resizeToAvoidBottomPadding`   |类似于 Android 中的 android:windowSoftInputMode='adjustResize'，控制界面内容 body 是否重新布局来避免底部被覆盖了，比如当键盘显示的时候，重新布局避免被键盘盖住内容。默认值为 true。|


|常用部件或对象  |子部件数量|用途|
|---------------|---------|----|
|`Flex`         |可以多个|弹性布局|
|`Row`          |可以多个|行组织布局|
|`Column`       |可以多个|列组织布局|
|`GridView`     |可以多个|栅格布局|
|`Stack`        |可以多个|堆叠布局|
|`IndexedStack` |可以多个|堆叠布局|
|`Flow`，        |可以多个|流式布局|
|`Container`    |单独一个|容器|
|`BoxConstraints`|单独一个|容器|
|`Padding`      |单独一个|填充式|
|`Center`       |单独一个|居中式|
|`RichText`     |富文本|显示文字|
|`TextSpan`     |富文本元素|显示文字|
|`Text`         |普通部件|显示文字|
|`Image`        |普通部件|显示图像|
|`GestureDetector`      |无      |手势交互|


|CSS 样式模拟对象  |用途|
|---------------|----|
|`TextStyle`    |文字样式|
|`FontWeight`   |字体样式|
|`Alignment`    |对齐样式|
|`Colors`       |颜色预置|
|`Icons`        |图标预置|
|`BoxShape`     |图形样式|
|`BoxShadow`    |阴影样式|
|`BoxDecoration`|装饰样式|
|`BorderRadius` |边框样式|
|`LinearGradient`|渐变样式|

Colors 中定义了多种颜色常量，参考 HTML 和 CSS 颜色规范中定义了 147 中颜色名，17 种标准颜色加 130 种命名颜色。


|可滚动的部件         |用途|
|-------------------|----|
|`ListView`         |一个可滚动的列表|
|`ListTile`         |一个列表项目|
|`NestedScrollView` | 一个可以嵌套其它可滚动widget的widget|
|`GridView`         | 一个可滚动的二维空间数组|
|`SingleChildScrollView`| 有一个子widget的可滚动的widget，子内容超过父容器时可以滚动。|
|`Scrollable`       | 实现了可滚动widget的交互模型，但不包含UI显示相关的逻辑|
|`Scrollbar`        | 一个Material Design 滚动条，表示当前滚动到了什么位置|
|`CustomScrollView`     | 一个使用slivers创建自定义的滚动效果的ScrollView|
|`NotificationListener` | 一个用来监听树上冒泡通知的widget。|
|`ScrollConfiguration`  | 控制可滚动组件在子树中的表现行为|
|`RefreshIndicator`     | Material Design下拉刷新指示器，包装一个可滚动widget|


## ⚡ StatefulWidget

实现一个动态部件至少需要一个 `StatefulWidget` 类和一个 `State` 类。 `StatefulWidget` 类本身是不变的，State 类在部件生命周期中始终存在。Widget 都是静态的 immutable，这能提高渲染效率，Flutter 在页面渲染上面的核心思想是 simple is fast！`StatefulWidget` 通过调用 `setState((){})` 标记自身为 dirty 状态，以等待下一次系统的重绘检查。动态部件比静态部件更加耗能，所以优秀的布局应该尽量多用静态部件。

动态部件拥有一套自己的生命周期:

|名称           |状态   |
|---------------|------|
|`initState`        |插入渲染树时调用，只调用一次|
|`didChangeDependencies`    |state依赖的对象发生变化时调用|
|`didUpdateWidget`|组件状态改变时候调用，可能会调用多次|
|`build`            |构建Widget时调用|
|`deactivate`       |当移除渲染树的时候调用|
|`dispose`      |组件即将销毁时调用|

App 也有相应的生命周期

|名称     |状态|
|-----------|----|
|`resumed`  |可见并能相应用户的输入|
|`inactive` |处在并不活动状态，无法处理用户相应|
|`paused`   |不可见并不能相应用户的输入，但是在后台继续活动中|

官方文档是写了有3种模式：控件自己管理状态、交给父控件管理状态以及混合管理。下面结全 english_words 来包装一个动态部件，`GestureDetector` 部件用来响应用户行为事件。

    class RandomWordsState extends State<RandomWords> {
        bool _state = false;
      bool _light = false;

        @override
        Widget build(BuildContext context){

            final wp = new WordPair.random();
        Color color = _light? Colors.brown:Colors.lime;
        TextStyle style = new TextStyle(fontSize: _state? 20:50, color:color);

            return new GestureDetector(
                onTapDown:(detail){
                    print("tap down $_state ${DateTime.now().toString()} ${detail.toString()}");
                    setState(() { _state = true; });
                },
                new Future.delayed(const Duration(milliseconds: 60)).then((t){
                    setState(() { _state = false; });
                });
                onTap: (){
                    print("tap... ${DateTime.now().toString()}");
                },
                onDoubleTap:(){
                    setState(() { _light = !_light; });
                    debugPrint("double tap... $_light ${DateTime.now().microsecondsSinceEpoch}");
                },
                child: new Text(wp.asPascalCase, style:style),
            );
        }
    }

    class RandomWords extends StatefulWidget {
        @override   
        State<StatefulWidget> createState(){
            return new RandomWordsState();
        }
    }

去掉原有代码这行 `Text text = new Text(wp.asUpperCase);`， 相应修改 `child` 为 `child: new RandomWords()`。`StatefulWidget` 这个类继承中只重写了 `cretaeState` 方法。程序运行时，通过响应点击 `onTap` 再弹起 `onTapUp` 和双击事件 `onDoubleTap`，对 `State` 部件调用 `setState()` 来标记脏数据状态，部件会进行 UI 重构过程的等待中，在下一回视图渲染时执行视图重构 `build`。按下会缩小字体，弹起回复大字体，双击改变颜色。在一个快速完成的点击事件中，`onTapDown` 到 `onTapUp` 的间隔是很短的，只有最后一个状态更新体现在 UI 上，因为 UI 重构是按固定间隔去刷新的，所以这里的 `onTapUp` 使用了一个 `Future` 来延时，实现两个状态的确定可以表现在 UI 上。


## ⚡ english_words

以 `english_words` 这个软件包演示，可以在 `pub.dev` 上找到，将 `english_words` 添加到依赖配置文件 `pubspec.yaml` 文件中

    dependencies:
      flutter:
        sdk: flutter

      # The following adds the Cupertino Icons font to your application.
      # Use with the CupertinoIcons class for iOS style icons.
      cupertino_icons: ^0.1.2
      english_words: ^3.1.3

    dev_dependencies:
      flutter_test:
        sdk: flutter

在终端中运行安装命令

    flutter packages get

然后在 AppBar 模板工程代码中使用 `import` 导入

    // This sample shows adding an action to an [AppBar] that opens a shopping cart.

    import 'package:flutter/material.dart';
    import 'package:english_words/english_words.dart';

    void main() => runApp(MyApp());

    class MyApp extends StatelessWidget {
        // This widget is the root of your application.
        @override
        Widget build(BuildContext context) {
            return MaterialApp(
                title: 'Flutter Code Sample for material.AppBar.actions',
                theme: ThemeData(
                    primarySwatch: Colors.blue,
                ),
                home: MyStatelessWidget(),
            );
        }
    }

    class MyStatelessWidget extends StatelessWidget {
        MyStatelessWidget({Key key}) : super(key: key);

        @override
        Widget build(BuildContext context) {

            final wp = new WordPair.random();
            Text text = new Text(wp.asUpperCase);

            var icons = <Widget>[];
            for (var i=0; i < 5; i++) {
                icons.add(IconButton( 
                    icon: Icon(Icons.shopping_cart), 
                    tooltip: "Open this #$i", 
                    onPressed: (){ 
                        print("tab #$i"); 
                    }
                ));
            }

            return Scaffold(
                appBar: AppBar(
                    title: Text('Hello World'),
                    actions: icons,
                ),
                body: new Center(
                    child: text,
                ),
            );
        }
    }

## ⚡ Flex
- Flutter第4天--基础控件(下)+Flex布局详解 https://cloud.tencent.com/developer/article/1379041


## ⚡ 事件处理与通知

Flutter 中的手势系统有两层数据，第一层为原始触点事件，它描述了屏幕接收到的触点 Pointer 如触摸、鼠标和触控笔的位置和移动状态。 第二层为是经过规则处理过的手势，描述由任意个触点及不同动作组成的语义动作，如拖动、缩放、双击、长按等。一次完整的事件分为三个阶段：手指按下、手指移动、和手指抬起，而更高级别的手势，如点击、双击、拖动等都是基于这些原始事件的。

当指针按下时，Flutter 执行命中测试 Hit Test 以确定接触点位置对应的部件，后续的事件将与命中的部件发生关联。事件会在部件树中向上冒泡，这些事件会从最开始命令的部件到根部件的路径上逐个轮询，和 Web 开发中浏览器的事件冒泡机制相似，但是 Flutter 中没有机制取消或停止冒泡过程，而浏览器的冒泡是可以停止的。

Flutter中可以使用Listener widget来监听原始触摸事件，它也是一个功能性widget。

    Listener({
      Key key,
      this.onPointerDown, //手指按下回调
      this.onPointerMove, //手指移动回调
      this.onPointerUp,//手指抬起回调
      this.onPointerCancel,//触摸事件取消回调
      this.behavior = HitTestBehavior.deferToChild, //在命中测试期间如何表现
      Widget child
    })

`GestureDetector` 内部是使用一个或多个 `GestureRecognizer` 来识别各种手势的，它是一个抽象类，通过 `Listener` 将原始指针事件转换为语义手势，一种手势的识别器对应一个 `GestureRecognizer` 的子类。Flutter 实现了丰富的手势识别器，我们可以直接使用，如果有特殊手势需求则可以通过 `Listener` 来自定义实现。

在 App 中经常会需要一个广播机制，用以跨越部件的事件处理，比如页面 A 会根据用户登录状态来进行页面更新，如果直接在部件内部分传递事件消息，会增加部件的耦合度，不利于开发维护。在 Dart 中实现事件总线机制便会非常有用，事件总线实现了订阅者模式，订阅者模式包含发布者和订阅者两种角色，可以通过事件总线来触发事件和监听事件。A 页面需要侦听登录状态，就在事件总线上注册监听函数即可以，而其登录部件无需注意有那些部件需要收听登录事件。一个事件总线通常需要三个方法注册方法、注销方法、触发方法，部件要侦听指定的事件通过注册方法登录回调函数，而事件的提供者则通过触发方法来广播事件数据源，事件总线则需要实现数据广播在侦听函数中的传递，最后侦听函数可以通过注销方法来解除侦听。

和事件总线类似的，Flutter 提供了 Notification 机制，可以给部件树中的每一个节点分发通知，通知会沿着当前节点 context 向上传递，所有父节点都可以通过 `NotificationListener` 来监听通知，这种由子向父的传递为通知冒泡 Notification Bubbling，这个和用户触摸事件冒泡是相似的，但通知冒泡可以中止，户触摸事件不行。


## ⚡ 滚动列表 ListView
- 精讲Flutter官网的第一个例子 – Try Enough https://tryenough.com/flutter04
- ❤️ Red Heart Emoji https://emojipedia.org/heavy-black-heart/
❤ fill heart
💛 Yellow Heart
💚 Green Heart
💗 Growing Heart


在前面学习到事件处理、部件动态管理等基础上，这里再结合 `ListView` 与    `ListTile` 等部件实现一个具有无限元素，可以点击切换喜欢状态的列表。使用 `ListView` 扩展 `RandomWordsState` 类生成并显示单词对列表。 当用户滚动时，`ListView.itemBuilder()` 回调函数将无限生成列表条目，参考 [精讲Flutter官网的第一个例子 – Try Enough]。需要实现 `WordsList` 和 `WordsListState`，这个部件功能：

* 使用 `ListView.builder()` 创建列表
* 在列表行内容生成回调函数 `itemBuilder` 中给列表填充 `ListTile` 或隔行出现的分隔线 `Divider`
* 给 `ListTile` 各子栏 `leading`、 `title`、 `subtitle`、 `trailing` 补充相应的文字标题图标按钮
* 给 `喜欢` 按钮绑定 `onPressed` 事件处理器，前结合记录数据来管理条目的状态标记。

这里针对 `leading` 这栏使用了 `Container` 来实现垂直剧中，如果不便用容器，`leading` 会和 `title` 等高位置，相对没有那么美观。还有设置了 `Divider` 的高度为 0，避免了每一行空白太多，显得视图结构散乱。在行处理中将数据 `word` 及编号 `count` 传到 `buildListTile()` 函数有好好处，就是可以通过与事件处理器形成的闭包来保存所在行及其关联的数据 `word`、 `count`。如果直接在 `itemBuilder` 使用匿名函数或普通函数则要考虑数据与所在行的关联问题。

为了避免在点选喜欢按钮时将文字内容更新，需要将 `RandomWordsState` 的 `final wp = new WordPair.random();` 移到 `build()` 函数外部。主程序只要将  `MyStatelessWidget` 绞手架的 body 修改为 `new WordsList()` 即可。


    import 'package:flutter/material.dart';
    import 'package:english_words/english_words.dart';

    void main() => runApp(MyApp());

    class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
            return MaterialApp(
                title: 'Flutter Code Sample for material.AppBar.actions',
                theme: ThemeData(
                    primarySwatch: Colors.green,
                ),
                home: MyStatelessWidget(),
            );
        }
    }

    class MyStatelessWidget extends StatelessWidget {
        MyStatelessWidget({Key key}) : super(key: key);

        @override
        Widget build(BuildContext context) {

            var icons = <Widget>[];
            icons.add(IconButton( 
                    icon: Icon(Icons.wb_cloudy), 
                    tooltip: "Open this", 
                    onPressed: (){ print("tab this $this"); }
                ));

            return Scaffold(
                appBar: AppBar( title: Text('Hello Dart & Flutter'), actions: icons, ),
                body: new WordsList(),
            );
        }
    }

    class WordsList extends StatefulWidget{
        @override
        State<StatefulWidget> createState() {
        return new WordsListState();
      }
    }

    class WordsListState extends State<WordsList>{

        var _list = <RandomWords>[];
        var _favorite = <int>[]; //new Set<RandomWords>();
        Map<int,RandomWords> current;

        @override
        Widget build(BuildContext ctx){
            return buildList(ctx);
        }
        Widget buildListTile(RandomWords word, int index){

            var has = _favorite.contains(index);
            
            return new ListTile(
                contentPadding: EdgeInsets.all(0),
                // onTap: (){ print("list tile tap.."); },
                leading: new Container(
                    // alignment: new Alignment(-1, 1),
                    margin: EdgeInsets.fromLTRB(8, 8, 0, 0),
                    child:new Text("${index ~/ 2}", style: new TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
                ),
                title:word,
                subtitle: new Text("❤ 💛 💚 💗"),
                trailing:new IconButton(
                    color:Colors.lime,
                    tooltip:"favorite ${index ~/ 2}",
                    icon:new Icon(has? Icons.favorite:Icons.favorite_border),
                    onPressed:(){ 
                        setState(() {
                            current = <int, RandomWords>{index:word};
                            has? _favorite.remove(index):_favorite.add(index);
                            print("favorite this... $word $current $has $_favorite");
                        });
                    },
                )
            );

        }

        Widget buildList(BuildContext ctx){
            return new ListView.builder(
                shrinkWrap:true,
                padding: EdgeInsets.fromLTRB(6, 0, 0, 0),
                // itemExtent:64,
                itemBuilder: (BuildContext ctx, int count){
                    if( count.isEven ) return Divider(color: Colors.lime, height:0, indent: 0,);
                    RandomWords word = new RandomWords();
                    _list.add(word);
                    print("build List length ${_list.length} $count");
                    return buildListTile(word, count);
                },
            );

        }
    }

    class RandomWordsState extends State<RandomWords> {
        bool _state = false;
        bool _light = false;
        final wp = new WordPair.random();

        @override
        Widget build(BuildContext context){

            Color color = _light? Colors.lime: _state? Colors.pink:Colors.blueGrey;
            TextStyle style = new TextStyle(fontSize: 24, color:color);

            return new GestureDetector(
                onTapDown:(detail){
                    setState(() { _state = true; });
                },
                onTapUp:(detail){
                    new Future.delayed(const Duration(milliseconds: 60)).then((t){
                        setState(() { _state = false; });
                    });
                },
                onTap: (){
                    print("tap... ${DateTime.now().toString()}");
                },
                onDoubleTap:(){
                    setState(() { _light = !_light; });
                },
                child: new Text(wp.asPascalCase, style:style),
            );
        }
    }

    class RandomWords extends StatefulWidget {
        @override   
        State<StatefulWidget> createState(){
            return new RandomWordsState();
        }
    }


## ⚡ 页面导航 Navigator

`Navigator` 结合 `MaterialPageRoute`

