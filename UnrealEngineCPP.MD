
# 🌟 Unreal Engine C++ 编程
- Programming Quick Start https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ProgrammingWithCPP/CPPProgrammingQuickStart/
- Framework Class Relationships https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/QuickReference/
- Blueprint Visual Scripting https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/
- Gameplay Architecture https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/GameplayArchitecture
- UE4 C++ 编程简介 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/IntroductionToCPP/
- Actor https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Actors
- C++ 编程实例教程 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials
- 代码规范 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/DevelopmentSetup/CodingStandard/
- Visual Studio Setup https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/DevelopmentSetup/VisualStudioSetup/

在虚幻引擎 4 中编写 C++ 代码通常会认为是辅助功能，因为 Blueprint 蓝图等有很多功能可以让所有人都能更简单的使用 C++。

在内容开始之前，必须对 C++ 或另一种编程语言有所认知。了解 C#、Java 或 JavaScript，也会发现有许多相似之处。

如果您完全没有编程经验，可以参考蓝图可视化脚本编程指南，可以使用蓝图脚本创建整个游戏！

下列表格列出了虚幻引擎二进制版本和已集成的 Visual Studio 版本。

    |        虚幻引擎版本       |      Visual Studio 版本      |
    |---------------------------|------------------------------|
    | Unreal Engine 4.25+       | Visual Studio 2019 (Default) |
    | Unreal Engine 4.22+       | Visual Studio 2017 or 2019   |
    | Unreal Engine 4.15+       | Visual Studio 2017           |
    | Unreal Engine 4.10 - 4.14 | Visual Studio 2015           |
    | Unreal Engine 4.2 - 4.9   | Visual Studio 2013           |

可以使用 VS Code 开发 UE 项目，已经安装 Visual Studio 社区版，包含 .NET Core SDK 用于执行 HBT 编译工具。另外，可以安装一个代码片段插件 Unreal Engine 4 Snippets，这个小插件提供了一些常用代码提示功能。

此外，一定要记得在你的 UE4 编辑器设置中将代码编辑器选为 Editor Settings -> General -> Source Editor -> Visual Studio Code。添加 C++ 类代码时，UE4 编辑器就会正常打开 VS Code 新工作区。

使用 UE4 编辑器文件菜单的 Refresh Visual Studio Code Project 可以自动生成 **.vscode** 配置，目录下包含 **task.json** 和 **launch.json**，这两个文件分别包含编译任务配置和执行程序时的相应配置。同时可以解决 VS Code 中打开的 C++ 文件中出现的红色波浪线提示错误，即不能识别代码。

编译中不能识别头文件还有一个可能是工程规则配置有问题，build.cs 文件没有添加相应的依赖模块，也会导致编译找不到相应的头文件。

编译任务配置文件 **task.json** 中，主要是提供对 uproject 文件执行编译的配置，编译命令通过是引擎安装目录下的 Engine\Build\BatchFiles 脚本执行。编写好的代码，可以使用 VSCode 的 Terminal -> Run Task... 运行编译命令。

也可以返回虚幻编辑器，使用编辑器顶部工具栏中的 Compile 按钮执行编译，对于 UE5EA 更新了界面，编译命令改到右下角，其它 Visual Studio Code 菜单也移到了工具菜单下。

编译遇到内存不足以生成预编译头文件，c1xx: fatal error C1076: 编译器限制: 达到内部堆限制。需要使用 Visual Sutido 提高 /Zm (Specify Precompiled Header Memory Allocation Limit) 系数，默认值是 100% 即 75MB。设置 /Zm200 就是 150MB。

比如，工程名为 P2D，添加了一个 Actor C++ 类实现，编译工程会执行命令：

```sh
> Executing task in folder P2D: Engine\Build\BatchFiles\Build.bat P2D Win32 Development "C:\Unreal Projects\P2D\P2D.uproject" -waitmutex <

Parsing headers for P2D
  Running UnrealHeaderTool "C:\Unreal Projects\P2D\P2D.uproject" "C:\Unreal Projects\P2D\Intermediate\Build\Win32\P2D\Development\P2D.uhtmanifest" -LogCmds="loginit warning, logexit warning, logdatabase error" -Unattended -WarningsAsErrors -abslog="C:\Users\OCEAN\AppData\Local\UnrealBuildTool\Log_UHT.txt" -installed   
LogInit: Display: Loading text-based GConfig....
Reflection code generated for P2D in 5.2693318 seconds
Building P2D...
Using Visual Studio 2019 14.26.28806 toolchain (C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801) and Windows 10.0.18362.0 SDK (C:\Program Files (x86)\Windows Kits\10).
Building 4 actions with 8 processes...
  [1/4] MyPawn.cpp
  [2/4] MyPawn.gen.cpp
  [3/4] P2D.exe
    正在创建库 C:\Unreal Projects\P2D\Binaries\Win32\P2D.lib 和对象 C:\Unreal Projects\P2D\Binaries\Win32\P2D.exp
  [4/4] P2D.target
Total time in Parallel executor: 18.01 seconds
Total execution time: 24.77 seconds
```
编译完成后，就可以在 UE 编辑器的 Place Actors 面板中找到 C++ 类。

注意，和只使用蓝图可视化脚本编程不同，C++ 编程方式需要进行静态编译，这会在**Intermediate**目录产生很多编译中间文件，因为项目会使用到引擎的各种模块。

使用引擎编译时可能会在中文 Windows 系统中产生乱码，因为，编译命令产生的 GBK 编码的信息输出交由 UnrealBuildTool 当作 UTF-8 处理了，所以返回给 UE4Editor.exe 的结果主是乱码。在引擎 C++ 原代码中，会调用 UnrealBuildTool 并且获取其输出：

```js
// Engine\Source\Developer\DesktopPlatform\Private\Windows\DesktopPlatformWindows.cpp
bool FDesktopPlatformWindows::RunUnrealBuildTool(const FText& Description, const FString& RootDir, const FString& Arguments, FFeedbackContext* Warn);
// ...
bool FFeedbackContextMarkup::PipeProcessOutput(const FText& Description, const FString& URL, const FString& Params, FFeedbackContext* Warn, int32* OutExitCode);
// ....
FPlatformProcess::ReadPipe(PipeRead);
// ....
FString FWindowsPlatformProcess::ReadPipe( void* ReadPipe )
{
    FString Output;
 
    uint32 BytesAvailable = 0;
    if (::PeekNamedPipe(ReadPipe, NULL, 0, NULL, (::DWORD*)&BytesAvailable, NULL) && (BytesAvailable > 0))
    {
        UTF8CHAR* Buffer = new UTF8CHAR[BytesAvailable + 1];
        uint32 BytesRead = 0;
        if (::ReadFile(ReadPipe, Buffer, BytesAvailable, (::DWORD*)&BytesRead, NULL))
        {
            if (BytesRead > 0)
            {
                Buffer[BytesRead] = '\0';
                Output += FUTF8ToTCHAR((const ANSICHAR*)Buffer).Get();    #1
            }
        }
        delete [] Buffer;
    }
 
    return Output;
}
```

Buffer 被当成 UTF-8 编码的字符串，并转换成 FString 造成乱码，解决方法也简单，通过 Windows 操作系统的区域设置，在“非 Unicode 程序的语言”中更改系统区域设置，勾选使用“Beta 版：使用 Unicode UTF-8 提供全球语言支持”，这样操作系统会在底层将 GBK 输出的内容转化为 Unicode 编码内容输出。然后重启电脑问题就解决，没有此项的请升级操作系统版本。方法二，比较笨一点，修改 FWindowsPlatformProcess 处理逻辑，这样需要重新编译引擎。添加进行编码检查的代码是合适的，直接替换代码处理逻辑或许也是个办法。

使用 UE 4 的编译命令有其它好处，比如加载资源时会检查对应路径有没有资源，还会同时使用 Hot Reload 刷新 C++ 类的状态。另外，UE 4.22 开始可以打开编译选项 Live Code，热重新加载的模块处于活动状态时，无法启用实时编码。Ctrl + Alt + F11 快捷键执行构建。

UE4 提供了 C++ 编程和蓝图视觉脚本这两种创建新 Gameplay 开发方法，程序员利用 C++ 即可添加基础 Gameplay 系统，然后设计师可基于这些系统，利用蓝图节点编排其关卡或游戏本身的逻辑。

Gameplay API 和框架类在这两个系统中都可以使用，可以单独使用，但组合使用，互补长短才能发挥出它们真正的作用。

大部分 Gameplay 类分为 4 种主要类型，分别是 *UObject*、*AActor*、*UActorComponent* 和 *UStruct*。

虚幻引擎中的类拥有一个标准化的命名方案，通过首字母或前缀即可立即明了其为哪种类。

GamePlay 架构类的前缀有：

- A 从可生成的 GamePlay 对象的基础类进行扩展，它们是 Actor 子类，如 AController，可直接生成添加到世界场景中。
- U 从所有 GamePlay 的基础类进行扩展，它们是 UComponent 子类，无法被实例到世界场景中，必须从属于 Actor。
- Enums 的前缀是 E，如 EFortificationType。
- Interface 的前缀通常是 I，如 IAbilitySystemInterface。
- Template 的前缀是 T，如 TArray。
- Slate UI 构架的 SWidget 子类带有前缀 S，如 SButton。
- 其他类的前缀为字母 F，如 FVector。

虚幻对象（UObject）虚幻引擎中的基本构建块叫做 UObject，结合 UClass 实现运行时类型系统，可以提供多个最重要的引擎服务：

- 反射属性和方法
- 序列化属性
- 垃圾回收
- 按名称查找 UObject
- 属性的可配置值
- 属性和方法的联网支持

从 UObject 派生的每个类都会创建有一个 UClass，它包含有关该类实例的所有元数据。UObject 和 UClass 一起位于 Gameplay 对象在其生命周期所有作用的最根部位置。如果要解释 UClass 和 UObject 的差异在哪里，最合适的方法是 UClass 描述的是 UObject 实例的样子、可序列化和联网的属性等。大多数 Gameplay 开发不会直接从 UObject 派生，而是从 AActor 和 UActorComponent 派生。

AActor 是 UObject 子类，具有上一节所列的所有标准功能，表示可由设计师放在关卡中，或者通过 Gameplay 系统在运行时创建的对象。可以放入关卡的所有对象都是从该类扩展而来的，如 AStaticMeshActor、ACameraActor 和 APointLight Actor。

Actor 可以显式销毁，使用 Gameplay 代码（C++或蓝图），或者在所属关卡从内存中卸载时通过标准的垃圾回收机制销毁。Actor 负责游戏对象的高级行为，还是可以在联网时复制的基本类型。在网络复制期间，Actor 还可以分发其拥有的、需要网络支持或同步的任何 UActorComponent 的信息。

Actor 还有它们自己的行为（通过继承实现特殊化），但它们也充当 Actor Component 层级容器（通过复合实现特殊化）。这个过程通过 Actor 的 `RootComponent` 成员实现，它包含一个 `USceneComponent`，而后者可以包含许多其他成员。在可以将 Actor 放入关卡之前，它必须包含至少一个 Scene Component，以使 Actor 可以从后者绘制其平移、旋转和缩放。

Actor 包含在 AActor 生命周期中调用的一系列事件。以下列表是一组简化的事件，描绘了整个生命周期：

- `BeginPlay`：Actor 首次在 Gameplay 中存在时调用。
- `Tick`：每帧调用一次，随着时间的进行持续完成工作。
- `EndPlay`：对象离开 Gameplay 空间时调用。

对于关卡中放置的 Actor，了解生命周期是很容易想象的到的：Actor 加载并存在，最终关卡被卸载后，Actor 被销毁。

产生 Actor 比在游戏中创建普通对象稍微复杂一点，因为 Actor 需要注册到多个运行时系统才能满足其所有需要。需要设置 Actor 的初始位置和旋转，物理可能需要知道这些信息，负责告诉 Actor 执行 tick 事件的管理器也需要知道，诸如此类。因此，我们有一种方法专门用来产生Actor，叫做 SpawnActor （UWorld 的成员之一）。成功产生 Actor 后，引擎会调用它的 BeginPlay 方法，下一帧调用 Tick。

Actor 生命周期结束时，您可以调用 Destroy 来将它销毁。在该过程中，将调用 EndPlay，让您能在 Actor 进入回收站之前执行自定义逻辑。另一个控制 Actor 生命周期时长的方法是使用 Lifespan 成员。您可以在对象的构造函数中设置 Actor 的时间跨度，也可以在运行时使用其他代码进行设置。当这段时间到期后，会自动对该 Actor 调用 Destroy。

编写 C++ 代码向蓝图公开游戏进程元素，蓝图对象也可以选择继承 C++ 类，获取 C++ 中定义的变量，调用 C++ 中定义的函数，或者实现 C++ 中定义的 event。就是可以将 C++ 对象用于可视化编辑，这样 C++ 程序员可借助虚幻引擎中可用的特定蓝图标记创建基线系统，而此系统又可被设计师加以拓展。

引擎中的宏定义解析：

- `GENERATED_BODY()` 此宏允许类没有定义标准构造函数。
- `GENERATED_UCLASS_BODY()` 此宏声明了标准构造函数，需要自己提供其实现，具体是指类似 `NO_API AMyPawn(const FObjectInitializer& ObjectInitializer);` 这样的构造函数。
- `UCLASS()` 
- `UENUM()`
- `UFIELD()`
- `UFUNCTION()` 搭配 `GENERATED_UCLASS_BODY()` 使用
- `UPROPERTY()`
- `USCRIPTSTRUCT()`
- `USTRUCT()` 搭配 `GENERATED_UCLASS_BODY()` 使用

在构造函数中还可创建组件子对象并将其附着到 actor 的层级。生成一个 actor 时，将从 CDO 复制其组件。为确保组件固定被创建、被销毁和被正确地垃圾回收，构建函数中创建的每个组件的指针应被存储在拥有类的一个 *UPROPERTY* 标记的属性中。

所有的 GamePlay 类必须使用 *GENERATED_BODY* 宏进行正常实现。类源代码文件和头文件的命名与实现的类相匹配，减去 A 或 U 这样的前缀。因此，AActor 类的源文件命名为 Actor.cpp，其头文件命名为 Actor.h。对编辑器中 Add C++ Class 向导创建的类而言，此操作将自动进行。

具体代码参考引擎源代码 UE_4.23\Engine\Source\Runtime\CoreUObject\Public\UObject\ObjectMacros.h。

GamePlay 架构源代码位于 UE_4.23\Engine\Source\Runtime\Engine\Classes\GameFramework。

可蓝图化类最简单的声明形式如下所示，Blueprintable 表示这个类可以作为创建蓝图对象时的可接受基类：

```cpp
UCLASS(Blueprintable)
class AMyBlueprintableClass : AActor
{
    GENERATED_BODY()
}
```

还可以指定为 BlueprintType 将该类作为可用于蓝图中的变量的类型进行公开，默认值是不可蓝图化（NotBlueprintable），指定此类不是用于创建蓝图的可接受基类。

类名的前缀 A 表示 Actor 类，如果前缀 U 表示 Component，会被编辑器省略不显示，而显示友好可读的 My Blueprintable Class。



## ⚡ Assertions 断言
- Assertions  https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assertions/

在 C/C++ 编程中，*assert* 可在开发期间帮助检测和诊断不正常或无效的运行时条件。

这些条件通常检查是否指针为非空、除数为非零、函数并非递归运行，或代码要求的其他重要假设，但每次检查会使得效率十分低下。某些情况下，*assert* 会在延迟崩溃发生之前发现导致该崩溃的 bug，例如删除未来 tick 所需的对象，协助开发人员发现引起崩溃的根本原因。*assert* 的关键特性之一是不存在于发布代码中，这意味着不但不会影响发布产品的性能，也没有任何副作用。对 *assert* 最简单的理解就是：断言必须一律为 true，否则程序会停止运行。

虚幻引擎 4 提供 *assert* 等同项的三个不类别：*check*、*verify* 和 *ensure*。可以在源代码 AssertionMacros.h 中找到相关的宏。各个功能的行为略有不同，但它们都是开发期间使用的诊断工具，目标大致相同。

以下假设情况展示了一些用例，其中Check、Verify和Ensure可帮助理清代码或协助调试。

```C++
// 决不可使用空 JumpTarget 调用此函数。若发生此情况，则停止程序。
void AMyActor::CalculateJumpVelocity(AActor* JumpTarget, FVector& JumpVelocity)
{
    check(JumpTarget != nullptr);
    // 现在可确定JumpTarget为非空。
}

// 这将设置 Mesh 的值，并预计为非空值。若之后 Mesh 的值为空，则停止程序。
// 使用 Verify 而非 Check，是因为需要此表达式存在副作用（设置网格体）。
verify((Mesh = GetRenderMesh()) != nullptr);

// 此 UObject 拥有测试函数 IsEverythingOK，没有副作用，若出现问题则返回 false。
// 若发生这种情况，将出现致命错误并终止。
// 因为代码无副作用，仅作诊断之用，因此无需在发布版本中运行。
checkCode(
    if (!IsEverythingOK())
    {
        UE_LOG(LogUObjectGlobals, Fatal, TEXT("Something is wrong with %s!Terminating."), *GetFullName());
    }
);
```

Check 族系最接近基础 *assert*，因为当第一个参数得出的值为 false 时，此族系的成员会停止执行，且默认不会在发布版本中运行：

- *check(Expression)* 或 *checkSlow(Expression)* 若表达式为 false，停止执行。
- *checkf* 或 *checkfSlow*，参数格式：*Expression, FormattedText, ...*，若表达式为 false，则停止执行并将格式化信息输出到日志。
- *checkCode(Code)* 在运行一次的 do-while 循环结构中执行 Code；主要用于准备另一个 Check 所需的信息。
- *checkNoEntry()* 若此行被hit，则停止执行，类似于 check(false)，但主要用于应不可到达的代码路径。
- *checkNoReentry()* 若此行被hit超过一次，则停止执行。
- *checkNoRecursion()* 若此行被hit超过一次而未离开作用域，则停止执行。
- *unimplemented()* 若此行被hit，则停止执行，类似于 check(false)，但主要用于应被覆盖而不会被调用的虚拟函数。

检查宏在调试、开发、测试和发布编辑器（Shipping Editor）版本中运行，另外以 Slow 结尾的宏仅在调试版本中运行。

定义 *USE_CHECKS_IN_SHIPPING* 以保留一个 true 值（通常为 1），使 Check 宏可在所有版本中运行。此法在以下情况中十分实用：怀疑 Check 宏中的代码正在修改值；发现了仅存在于在发布版本中且难以追踪的 bug，但认为现有 Check 宏能找到这些 bug。项目发布时应将 *USE_CHECKS_IN_SHIPPING* 设为默认值 0。

在大部分版本中，Verify 族系的行为与 Check 族系相同。但是，即便禁用 Check 宏，Verify 宏也会计算其表达式的值。这意味着仅当该表达式需要独立于诊断检查之外运行时，才应使用 Verify 宏。举例而言，若某个函数执行操作，然后返回 bool 来说明该操作是否成功，则应使用 Verify 而非 Check 来确保该操作成功。因为在发布版本中 Verify 将忽略返回值，但仍将执行操作。而 Check 在发布版本中根本不调用该函数，所以行为才会有所不同。

- *verify* 或 *verifySlow* 若表达式为 false，即停止执行。
- *verify* 或 *verifyfSlow* 参数格式：*(Expression, FormattedText, ...)*，若表达式为 false，则停止执行并将格式化信息输出到日志。

验证宏在调试、开发、测试和发布编辑器（Shipping Editor）版本中完整运行，以"Slow"结尾的宏仅在调试版本中运行。定义 *USE_CHECKS_IN_SHIPPING* 来保留一个 true 值（通常为 1），从而覆盖此行为。在所有其他情况下，Verify 宏将计算其表达式，但不会停止执行或将文本输出到日志。


Ensure 族系类似于 Verify 族系，但可在出现非致命错误时使用。这意味着，若 Ensure 宏的表达式计算得出的值为 false，引擎将通知崩溃报告器，但仍会继续运行。为避免崩溃报告器收到太多通知，Ensure 宏在每次引擎或编辑器会话中仅报告一次。若实际情况需要 Ensure 宏在每次表达式计算得值为 false 时都报告一次，则使用 Always 版本的宏。

- *ensure(Expression)*  表达式首次为 false 时通知崩溃报告器。
- *ensureMsgf(Expression, FormattedText, ...)*  表达式首次为 false 时通知崩溃报告器并将格式化信息输出到日志。
- *ensureAlways(Expression)*  表达式为 false 时总是通知崩溃报告器。
- *ensureAlwaysMsgf(Expression, FormattedText, ...)*  表达式为 false 时通知崩溃报告器并将格式化信息输出到日志。

Ensure 宏在所有版本中计算其表达式的值，但仅在调试、开发、测试和发布编辑器版本中联系崩溃报告器。


## ⚡ SharedPointer 智能指针库
- 共享指针原代码包含文档 \Epic Games\UE_5.0EA\Engine\Source\Runtime\Core\Public\Templates\SharedPointer.h
- 虚幻智能指针库 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/SmartPointerLibrary/

通过使用 SharedPointer - Unreal smart pointer library，UE4 为 UObject 对象提供垃圾回收，但不对 C++ 原生对象除外。

测试使用参考 SharedPointerTesting.inl。

C++ 原生内存管理两种方式：

- malloc 和 free 标准 C/C++ **函数**，必须严格一一配对使用；
- new 和 delete 标准 C++ **操作符**，必须严格一一配对使用；

它们都有相同缺点：

- 如果不及时清理，则会占用内存，或者导致内存泄漏。
- 如果不小心提前清理，则会导致野指针。

这两种方式都可以用来动态申请内存和释放内存，new 与 malloc 有明显的区别，new 在分配内存完成之后会调用构造函数，具有复杂的内部逻辑。

除了标准库的函数和操作符之间的差别，两种方式具体差异表现如下：

- C++ 允许重载 new/delete 操作符，new 在分配好的内存上为对象调用构造函数完成初始化工作，并返回此地址。
- 申请内存位置不同，**malloc** 函数是从堆上动态分配内存，**new** 操作符从自由存储区上为对象动态分配内存空间的。
- 返回值类型不同，**new**操作符内存分配成功时，返回的是对象类型的指针，**malloc** 返回的是 `void *` 指针，要强制转换类型。
- 定制内存大小不同，**malloc** 需要手动计算类型大小，而 **new** 由编译器自动计算。
- 内存分配失败时的返回值不同，**malloc**分配内存失败时返回 NULL，**new**内存分配失败时会直接抛 std::bad_alloc 异常。
- malloc/free 只是动态分配/释放内存空间。new/delete 除了分配空间还涉及调用构造/析构函数，执行初始化与清理工作，这是最重要也是 C++ 最要命的点！

对于用户自定义的对象而言，库函数 maloc/free 无法满足动态管理对象的要求，因为它们无法自动执行构造器与析构器。因此，作为往前兼容 C 语言的 C++ 确实需要一个能完成动态内存分配和初始化工作的运算符 new，以及一个能完成清理与释放内存工作的运算符 delete。

如果用 free 释放 new 创建的动态对象，逻辑上可能因为没有调用析构器而导致程序出错。如果用 delete 释放 malloc 申请的动态内存，理论上讲程序不会出错，但是该程序的可读性很差。所以 new/delete 或者 malloc/free 必须严格一一配对使用。

内存组织管理上，C 语言和 C++ 也有差别：

- 在 C 语言内存区分为堆、栈、全局/静态存储区、常量存储区；
- 在 C++ 内存区分中增加了自由存储区 Free Store；

自由存储区 Free Store 是 C++ 基于 new 操作符的一个抽象概念，凡是通过 new 操作符申请的内存都位于自由存储区。而自由存储区的位置取决于 operator new 的实现细节。自由存储区不仅可以是堆，也可以是静态存储区，取决于底层实现。

因为考虑到性能问题，不可能一需要内存就去跟操作系统申请。UE4 也有自己的虚拟内存分配器，就叫 *MallocBinned*，最新的是 MallocBinned3，虽然是 Binned 的升级版，但是在 iOS 系统默认使用 MallocBinned 内存分配器，因为有 iOS nanomalloc 支持。

UE4 的 SharedPointer - Unreal smart pointer library 包含：

- Shared references **TSharedRef**，不可为空、引用计数的非侵入性权威智能指针。共享引用的行为与共享指针类似，即其拥有自身引用的对象。共享引用须引用非空对象，而共享指针无此类限制。因此共享引用可转换为共享指针，且保证该共享指针有效引用对象。
- Shared pointers **TSharedPtr**，引用计数的非侵入式权威智能指针。共享指针拥有其引用的对象，无限防止该对象被删除，并在无共享指针或共享引用引用其时，最终处理其的删除。共享指针可为空白，意味其不引用任何对象。任何非空共享指针都可对其引用的对象生成共享引用。
- Weak pointers **TWeakPtr**，引用计数的非侵入性弱指针引用。弱指针类与共享指针类似，但不拥有其引用的对象，因此不影响其生命周期。此属性中断引用循环，因此十分有用，但也意味弱指针可在无预警的情况下随时变为空。因此，弱指针可生成指向其引用对象的共享指针，确保程序员能对该对象进行安全临时访问。
- **TUniquePtr** 唯一指针，会显式拥有其引用的对象。仅有一个唯一指针指向给定资源，因此唯一指针可转移所有权，但无法共享。复制唯一指针的任何尝试都将导致编译错误，唯一指针超出范围时，其将自动删除其所引用的对象。

对唯一指针引用的对象使用共享指针或共享引用的操作十分危险，即使其他智能指针继续引用该对象，此操作不会取消唯一指针自身被销毁时删除该对象的行为。同样，不应为共享指针或共享引用引用的对象创建唯一指针。

根据共享引用的定义，以下代码都是无效的：

```C++
// Neither of these will compile:
TSharedRef<FMyObjectType> UnassignedReference;
TSharedRef<FMyObjectType> NullAssignedReference = nullptr;
// This will compile, but will assert if NullObject is actually null.
TSharedRef<FMyObjectType> NullAssignedReference = NullObject;
```

尽可能使用共享引用，它更安全，以下示范如何将智能指针转换为智能引用：

```C++
TSharedPtr<FMyObjectType> MySharedPointer = MySharedReference;
// Ensure your shared pointer is valid before dereferencing to avoid a potential assertion.
If (MySharedPointer.IsValid())
{
    MySharedReference = MySharedPointer.ToSharedRef();
}
```

共享指针是非侵入性的，意味对象不知道其是否为智能指针拥有。但在某些情况下，可能要将对象作为共享引用或共享指针进行访问，这就导致同一个对象被多个共享指针或共享引用所拥有。为此，使用对象的类作为模板参数，在 TSharedFromThis 衍生对象的类。TSharedFromThis 提供两个函数：AsShared 和 SharedThis，可将对象转换为共享引用（并从共享引用转换为共享指针）。使用固定返回共享引用的类 factory 时，或需将对象传到需要共享引用或共享指针的系统时，此操作十分有用。AsShared 会将类返回为最初作为模板参数传到 TSharedFromThis 的类型返回，其可能是调用对象的父类型，而 SharedThis 将直接从该类型衍生类型，并返回引用该类型对象的智能指针。

以下范例代码中演示这两种函数：

```C++
class FRegistryObject;
class FMyBaseClass: public TSharedFromThis<FMyBaseClass>
{
    virtual void RegisterAsBaseClass(FRegistryObject* RegistryObject)
    {
        // 访问对"this"的共享引用。
        // 直接继承自< TSharedFromThis >，因此AsShared()和SharedThis(this)会返回相同的类型。
        TSharedRef<FMyBaseClass> ThisAsSharedRef = AsShared();
        // RegistryObject需要 TSharedRef<FMyBaseClass>，或TSharedPtr<FMyBaseClass>。TSharedRef可被隐式转换为TSharedPtr.
        RegistryObject->Register(ThisAsSharedRef);
    }
};
class FMyDerivedClass : public FMyBaseClass
{
    virtual void Register(FRegistryObject* RegistryObject) override
    {
        // 并非直接继承自TSharedFromThis<>，因此AsShared()和SharedThis(this)不会返回相同类型。
        // 在本例中，AsShared()会返回在TSharedFromThis<> - TSharedRef<FMyBaseClass>中初始指定的类型。
        // 在本例中，SharedThis(this)会返回具备"this"类型的TSharedRef - TSharedRef<FMyDerivedClass>。
        // SharedThis()函数仅在与 'this'指针相同的范围内可用。
        TSharedRef<FMyDerivedClass> AsSharedRef = SharedThis(this);
        // FMyDerivedClass是FMyBaseClass的一种类型，因此RegistryObject将接受TSharedRef<FMyDerivedClass>。
        RegistryObject->Register(ThisAsSharedRef);
    }
};
class FRegistryObject
{
    // 此函数将接受到FMyBaseClass或其子类的TSharedRef或TSharedPtr。
    void Register(TSharedRef<FMyBaseClass>);
};
```

不要在构造函数中调用 AsShared 或 Shared，共享引用此时并未初始化，将导致崩溃或断言。


有了这套智能指针，可以为应用带来以下优点：

- **防止内存泄漏** 共享引用不存在时，智能指针（弱指针除外）会自动删除对象。
- **弱引用** 弱指针会中断引用循环并阻止悬挂指针。
- **线程安全** 虚幻智能指针库包括线程安全代码，可跨线程管理引用计数。如无需线程安全，可用其换取更好性能。
- **运行时安全** 共享引用从不为空，可固定随时取消引用。
- **授予意图** 你可轻松区分对象所有者和观察者。
- **无循环引用** 使用弱引用打断了原有的循环引用问题。
- **高效能** 共享指针负担很小，所有操作效率都是常量时间。
- **内存** 智能指针在 64-bit 下仅为 C++ 指针大小的两倍，外加共享的16字节引用控制器。唯一指针除外，其与 C++ 指针大小相同。
- **Robust features**.  Supports 'const', forward declarations to incomplete types, type-casting, etc.

此库的实现基于 C++0x 标准库的 **shared_ptr** 共享指针还有 Boost 的智能指针，此外还有其它一些助手函数和类。

- **MakeShareable()** - Used to initialize shared pointers from C++ pointers (enables implicit conversion)
- **TSharedFromThis -** You can derive your own class from this to acquire a TSharedRef from "this"
- **StaticCastSharedRef()** - Static cast utility function, typically used to downcast to a derived type. 
- **ConstCastSharedRef()** - Converts a 'const' reference to 'mutable' smart reference
- **StaticCastSharedPtr()** - Dynamic cast utility function, typically used to downcast to a derived type. 
- **ConstCastSharedPtr()** - Converts a 'const' smart pointer to 'mutable' smart pointer

SharedPointer 源文件提供了详实的 API 文档，另外 SharedPointerTesting.inl 内联函数的源文件也提供了不少例子。

Tips:

- Use *TSharedRef* instead of *TSharedPtr* whenever possible -- it can never be nullptr!
- You can call *TSharedPtr::Reset()* to release a reference to your object (and potentially deallocate) 
- Use the *MakeShareable()* helper function to implicitly convert to *TSharedRefs* or *TSharedPtrs*
- You can never reset a *TSharedRef* or assign it to *nullptr*, but you can assign it a new object
- Shared pointers assume ownership of objects -- no need to call delete yourself!
- Usually you should *operator new* when passing a C++ pointer to a new shared pointer
- Use *TSharedRef* or *TSharedPtr* when passing smart pointers as function parameters, not *TWeakPtr*
- The "thread-safe" versions of smart pointers are a bit slower -- only use them when needed
- You can forward declare shared pointers to incomplete types, just how you'd expect to!
- Shared pointers of compatible types will be converted implicitly (e.g. upcasting)
- You can create a typedef to *TSharedRef< MyClass >* to make it easier to type
- For best performance, minimize calls to *TWeakPtr::Pin* (or conversions to *TSharedRef*/*TSharedPtr*)
- Your class can return itself as a shared reference if you derive from *TSharedFromThis*
- To downcast a pointer to a derived object class, to the *StaticCastSharedPtr* function
- 'const' objects are fully supported with shared pointers!
- You can make a 'const' shared pointer mutable using the *ConstCastSharedPtr* function

 Limitations:
 
 - Shared pointers are not compatible with Unreal objects (*UObject* classes)!
 - Currently only types with that have regular destructors (no custom deleters)
 - Dynamically-allocated arrays are not supported yet (e.g. *MakeSharable( new int32[20] )*)
 - Implicit conversion of *TSharedPtr*/*TSharedRef* to *bool* is not supported yet
 
 
 Differences from other implementations (e.g. *boost:shared_ptr*, *std::shared_ptr*):
 
 - Type names and method names are more consistent with Unreal's codebase
 - You must use *Pin()* to convert weak pointers to shared pointers (no explicit constructor)
 - Thread-safety features are optional instead of forced
 - TSharedFromThis returns a shared *reference*, not a shared *pointer*
 - Some features were omitted (e.g. *use_count()*, *unique()*, etc.)
 - No exceptions are allowed (all related features have been omitted)
 - Custom allocators and custom delete functions are not supported yet
 - Our implementation supports non-nullable smart pointers (*TSharedRef*)
 - Several other new features added, such as *MakeShareable* and *nullptr* assignment
 
 
 Why did we write our own Unreal shared pointer instead of using available alternatives?
 
 - *std::shared_ptr* (and even *tr1::shared_ptr*) is not yet available on all platforms
 - Allows for a more consistent implementation on all compilers and platforms
 - Can work seamlessly with other Unreal containers and types
 - Better control over platform specifics, including threading and optimizations
 - We want thread-safety features to be optional (for performance)
 - We've added our own improvements (*MakeShareable*, assign to *nullptr*, etc.)
 - Exceptions were not needed nor desired in our implementation
 - We wanted more control over performance (inlining, memory, use of virtuals, etc.)
 - Potentially easier to debug (liberal code comments, etc.)
 - Prefer not to introduce new third party dependencies when not needed
 

## ⚡ TSubclassOf 子类型安全模板
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/TSubclassOf/

TSubclassOf 是提供 UClass 类型安全性的模板类。

例如游戏中需要创建一个投射物类，允许设计者指定伤害类型。可只创建一个 UClass 类型的 UPROPERTY，让设计者指定派生自 UDamageType 的类；或者您可使用 TSubclassOf 模板强制要求此选择。

以下示例代码展示了不同之处：

```C++
/** type of damage */
UPROPERTY(EditDefaultsOnly, Category=Damage)
UClass* DamageType;

// Vs.

/** type of damage */
UPROPERTY(EditDefaultsOnly, Category=Damage)
TSubclassOf<UDamageType> DamageType;
```

在第二个声明中，模板类告知虚幻编辑器，在其属性窗口只列出派生自 UDamageType 的类（作为属性选择）。而在第一个声明中可选择任意 UClass。

除 *UPROPERTY* 安全外，还能获得 C++ 层级上的类型安全。如尝试进行不兼容 *TSubclassOf* 类型的相互指定，将出现编译错误。尝试指定泛型 UClass 时，它将执行一个运行时检查，以确定它可执行指定。如运行时检查失败，结果数值为 *nullptr*。

```C++
UClass* ClassA = UDamageType::StaticClass();

TSubclassOf<UDamageType> ClassB;

ClassB = ClassA; // Performs a runtime check

TSubclassOf<UDamageType_Lava> ClassC;

ClassB = ClassC; // Performs a compile time check
```


## ⚡ FName/FText/FString 字符串处理
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/StringHandling/
- 编程与编码 https://blog.csdn.net/winsenjiansbomber/article/details/50693186
- The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)

UE4 中提供的字符串类有三种，FName、FText 和 FString。

```C++
// 创建 FNames
FName TestHUDName = FName(TEXT("ThisIsMyTestFName"));

// 可使用 FText::GetEmpty() 或仅使用 FText() 创建空白 FText。

// 创建 FString
FString TestHUDString = FString(TEXT("This is my test FString."));
```

在内容浏览器中为新资源命名时，变更动态材质实例中的参数，或访问骨骼网格体中的一块骨骼时，都需要使用 *FNames* 这个轻型字符串。在此系统中，特定字符串即使会被重复使用，在数据表中也只存储一次。

FNames 不区分大小写。它们为不可变，无法被操作。FNames 的存储系统和静态特性决定了通过键进行 FNames 的查找和访问速度较快。 FName 子系统的另一个功能是使用 Hash 散列表为 FName 转换提供快速字符串。

在虚幻引擎 4 中，文本本地化的主要组件是 *FText* 类。此类通过提供下列功能支持文本本地化，因此面向用户的所有文本都应使用此类：

- 创建本地化的文本文字。
- 设置文本格式（根据占位符模式生成文本）。
- 根据数字生成文本。
- 根据日期时间生成文本。
- 生成衍生文本，如将文本设为大写或小写。

*FText* 同时具有 *AsCultureInvariant* 函数（或 INVTEXT 宏），可创建非本地化的（即"语言不变"）文本。这在进行如将玩家名从外部 API 转换为可在用户界面显示的文本等操作时，十分有用。


与 *FName* 和 *FText* 不同，*FString* 提供搜索、修改并且与其他字符串比较功能，不过，这些操作会导致 FString 的开销比不可变字符串类更大。这是因为 FString 对象保存自己的字符数组，而 FName 和 FText 对象保存共享字符数组的指针，并且可以完全根据索引值建立相等性。

FString 函数 *Printf* 可以像 C++ 中的 printf 函数那样，使用格式化参数创建 FString 对象。类似的，*UE_LOG* 宏会打印一个 printf 格式化字符串到虚幻编辑器中 Window > Output Log 上，或者打印到日志输入和日志文件中，具体取决于当前正在运行的 UE4 构建类型。

UE_LOG 使用 printf 标记进行参数化。

```C++
UE_LOG(LogClass, Log, TEXT("This is a testing statement.%s"), *TestHUDString);
```

LogClass 为日志类别。可使用现有的类别在 OutputDevices.h 中用 *DECLARE_LOG_CATEGORY_EXTERN* 宏设置，或使用 *DEFINE_LOG_CATEGORY_STATIC* 自行定义。

Log 为使用的冗余度，在 *ELogVerbosity* 枚举中定义，有效值为 Fatal、Error、Warning、Display、Log、Verbose 或 VeryVerbose。

下一个参数即为希望输出的文本，包括对参数的标记。此范例使用一个 %s 参数，因此 * 运算符用于返回 %s 参数所需的 `TCHAR*`。


使用 UEngine 的 *AddOnScreenDebugMessage()* 将调试信息打印到视口，此函数按照顺序接受以下四个参数：

- Key: int 防止相同信息多次添加的唯一键，使用 -1 作为键，使调试信息短时出现。
- TimeToDisplay: float 信息显示时长，按秒计。
- DisplayColor: FColor 文本显示的颜色。
- DebugMessage: FString 显示的信息。

```C++
// Console Log:
UE_LOG(LogTemp, Warning, TEXT("TODO: int32 AMyPawn::RandomInteger(int32 Max)"));
UE_LOG(YourLog, Warning, TEXT("This is a message to yourself during runtime!"));

// On Play Screen:
if(GEngine != nullptr)
{
    GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("This is an on screen message!"));
    // GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, FString::Printf(TEXT("{x: %f, y: %f}"), x, y));
    // UKismetSystemLibrary::PrintString
}
```

注意，在使用这些字符串和转换前，你需要包含必要的头文件。你可以在各个字符串的 API 参考文档中，找到需要包含的头文件名单。

```C++
// FName -> FString
TestHUDString = TestHUDName.ToString();

// FName -> FText 在一些情况下有效，但是 FNames 内容不会从 FText 的"自动本地化"中受益。
TestHUDText = FText::FromName(TestHUDName);

// FString -> FName 不可靠。因为 FName 不区分大小写，所以转换存在损耗。
TestHUDName = FName(*TestHUDString);

// FString -> FText 在一些情况下有效，但是 FString 内容不会从 FText 的"自动本地化"中受益。
TestHUDText = FText::FromString(TestHUDString);

// FText -> FString 不可靠。它在一些语言的转换中存在潜在损耗。
TestHUDString = TestHUDText.ToString();

// FText -> FName 的转换不存在。但可先转换到 FString，再转换到 FName。
// FText -> FString -> FName 不可靠。因为 FName 不区分大小写，所以转换存在损耗。

// FString -> int32 or float
int32 TestInt = FCString::Atoi(*MyFString);
float TestFloat = FCString::Atof(*MyFString);

// int32 or float -> FString
FString TestString = FString::FromInt(MyInt);
FString TestString = FString::SanitizeFloat(MyFloat);
```

总体而言，设置字符串变量文字时应使用 *TEXT()* 宏将其转换为 Unicode 是佳的。如未指定 TEXT() 宏，将使用 ANSI 对文字进行编码，会导致支持字符高度受限。 传入 FString 的 ANSI 文字需要先转换为 TCHAR（本地万国码编码），使用 *TEXT()* 更高效。

虚幻引擎 4 中的所有字符串都作为 FStrings 或 TCHAR 数组以 UTF-16 格式存储在内存中。大多数代码假设 2 个字节等于一个代码点，因此只支持基本多文种平面（BMP），这样虚幻内部编码可以更准确地描述为 UCS-2。字符串以适合于当前平台的字节次序存储。

当向/从磁盘序列化到程序包，或在联网期间序列化时，TCHAR 字符小于 0xff 的字符串均存储为一串 8 位字节，否则存储为双字节 UTF-16 字符串。

当虚幻加载外部文本文件（例如，运行时读取.INT文件）时，几乎总是使用 UnMisc.cpp 中的*appLoadFileToString()*函数来完成这个过程。主要操作由*appBufferToString()*函数完成。

该函数识别 UTF-16 文件中的 Unicode 字节顺序标记（BOM），如果存在，则按任一字节次序作为 UTF-16 加载文件。

BOM 不存在时作何处理则取决于平台。

在 Windows 上，尝试使用默认的 Windows MBCS 编码将文本转换，并使用 MultiByteToWideChar(CP_ACP, MB_ERR_INVALID_CHARS...)。

如果在非 Windows 平台上这种转换失败，则读取每个字节并填补到 16 位，形成 TCHAR 数组。

请注意，对于使用*appLoadFileToString()*加载的 UTF-8 编码文本文件，没有可以用于检测或解码的代码。

引擎生成的大部分文本文件将使用*appSaveStringToFile()*保存。

所有 TCHAR 字符都可以用单字节表示的字符串将存储为一串 8 位字节，否则存储为 UTF-16，除非*bAlwaysSaveAsAnsi*参数为 true ，在这种情况下，字符串将先转换为默认的 Windows 编码。该操作当前仅对着色器文件执行，以解决着色器编译器在处理 UTF-16 文件时存在的问题。

引擎提供了一些宏，可以将字符串转换为各种编码或从各种编码转换字符串。这些宏使用局部范围内声明的类实例，在堆栈上分配空间，因此保留指向这些宏的指针非常重要！它们仅用于将字符串传递给函数调用。

```C++
TCHAR_TO_ANSI(str)
TCHAR_TO_OEM(str)
ANSI_TO_TCHAR(str)
TCHAR_TO_UTF8(str)
UTF8_TO_TCHAR(str)

// 以下是 UnStringConv.h 中的助手类：
typedef TStringConversion< TCHAR, ANSICHAR, FANSIToTCHAR_Convert> FANSIToTCHAR;
typedef TStringConversion< ANSICHAR, TCHAR, FTCHARToANSI_Convert> FTCHARToANSI;
typedef TStringConversion< ANSICHAR, TCHAR, FTCHARToOEM_Convert > FTCHARToOEM;
typedef TStringConversion< ANSICHAR, TCHAR, FTCHARToUTF8_Convert> FTCHARToUTF8;
typedef TStringConversion< TCHAR, ANSICHAR, FUTF8ToTCHAR_Convert> FUTF8ToTCHAR;
```

使用 TCHAR_TO_ANSI 时还必须注意的是，不要假设字节数将等于 TCHAR 字符串长度。多字节字符集可能要求每个 TCHAR 字符占多个字节。如果您需要知道所产生字符串的字节长度，可以使用助手类，而不是宏。例如：

```C++
FString String;
...
FTCHARToANSI Convert(*String);
// FTCHARToANSI::Length() returns the number of bytes for the encoded string, excluding the null terminator.
Ar->Serialize((ANSICHAR*)Convert, Convert.Length());  // FTCHARToANSI::Length() 返回已编码字符串的字节数，不含 null 终止符。
```

这些宏声明的对象拥有很短的生命周期。它们的主要用途是作为函数的参数，并且很适合用于这类情形。请不要把变量赋值给转换后的字符串内容，因为对象回超出范围，字符串会被释放。假如你的代码继续访问指向已释放内存的指针，那么就会导致报错。


## ⚡ Tarray & TMap & TSet 集合与映射
https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/TArrays/
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/TMap/
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/TSet/

TSet 和 TMap 是 UE4 中两个最基本的最重要的数据容器类型，都基于哈希散列数据结构实现。

*TArray* 是 UE4 中最常用的也是最简单的容器类，负责同类型对象（称为"元素"）序列的所有权和组织。由于 TArray 是一个序列，其元素的排序定义明确，其函数用于确定性地操纵此类对象及其顺序。其速度快、内存消耗小、安全性高。TArray 类型由两大属性定义：元素类型和可选分配器。

TArray 拥有支持二叉堆数据结构的函数。堆是一种二叉树，其中父节点的排序等于或高于其子节点。作为数组实现时，树的根节点位于元素0，索引 N 处节点的左右子节点的指数分别为 2N+1 和 2N+2。子节点彼此间不存在特定排序，调用 Heapify 函数可将现有数组转换为堆。

元素类型是存储在数组中的对象类型。TArray 被称为同质容器。换言之，其所有元素均完全为相同类型。单个 TArray 中不能存储不同类型的元素。

分配器常被省略，默认为最常用的分配器。其定义对象在内存中的排列方式；以及数组如何进行扩展，以容纳更多的元素。若默认行为不符合要求，可选取多种不同的分配器，或自行编写。此部分将稍后讨论。

Tarray 为数值类型。意味其与其他内置类型（如 int32 或 浮点）的处理方式相同。其设计时未考虑扩展问题，因此建议在实际操作中勿使用 新建（new） 和 删除（delete） 创建或销毁 TArray 实例。元素也为数值类型，为容器所拥有。TArray 被销毁时其中的元素也将被销毁。若在另一TArray中创建TArray变量，其元素将复制到新变量中，且不会共享状态。

```C++
// 有多种填充 Tarray 的方法。一种方式是使用 Init 函数，将大量元素副本填入数组。
IntArray.Init(10, 5);
// IntArray == [10,10,10,10,10]

// Add 和 Emplace 函数用于在数组末尾新建对象：
TArray<FString> StrArr;
StrArr.Add    (TEXT("Hello"));
StrArr.Emplace(TEXT("World"));
// StrArr == ["Hello","World"]

// 利用 Append 可一次性添加其他 TArray 中的多个元素，或者通过标准 C 数组的指针及该数组的大小添加：
// 作为 Append 函数的替代，可使用 运算符+= 对数组进行串联
FString Arr[] = { TEXT("of"), TEXT("Tomorrow") };
StrArr.Append(Arr, ARRAY_COUNT(Arr));
// StrArr == ["Hello","World","of","Tomorrow"]

// 仅在尚不存在等值元素时，AddUnique 才会向容器添加新元素。使用以下元素类型的运算符检查等值性：运算符==:
StrArr.AddUnique(TEXT("!"));
// StrArr == ["Hello","World","of","Tomorrow","!"]
StrArr.AddUnique(TEXT("!"));
// StrArr is unchanged as "!" is already an element

// 有多种方法可迭代数组的元素，建议使用 C++的 ranged-for：

FString JoinedStr;
for (auto& Str :StrArr)
{
    JoinedStr += Str;
    JoinedStr += TEXT(" ");
}
// JoinedStr == "Hello Brave World of Tomorrow !"

// 同时也可使用基于索引的常规迭代：
for (int32 Index = 0; Index != StrArr.Num(); ++Index)
{
    JoinedStr += StrArr[Index];
    JoinedStr += TEXT(" ");
}

// 最后，还可通过数组迭代器类型控制迭代。函数 CreateIterator 和 CreateConstIterator 可分别用于元素的读写和只读访问：
for (auto It = StrArr.CreateConstIterator(); It; ++It)
{
    JoinedStr += *It;
    JoinedStr += TEXT(" ");
}
```

*TMap* 是继 TArray 之后，虚幻引擎4（UE4）中最常用的容器。TMap 与 TSet 类似，它们的结构均基于对键进行散列运算。但与 TSet 不同的是，此容器将数据存储为键值对（`TPair<KeyType, ValueType>`），只将键用于存储和获取。

映射有两种类型：TMap 和 TMultiMap。两者之间的不同点是，TMap 中的键是唯一的，而`TMultiMap` 可存储多个相同的键。在 TMap 中添加新的键值时，若所用的键与原有的对相同，新对将替换原有的对。在 `TMultiMap` 中，容器可以同时存储新对和原有的对。

在 TMap 中，键值对被视为映射的元素类型，相当于每一对都是个体对象。在本文中，元素就意味着键值对，而各个组件就被称作元素的键或元素的值。元素类型实际上是 `TPair<KeyType, ElementType>`，但很少需要直接引用 TPair 类型。

和 TArray 一样，TMap 也是同质容器，就是说它所有元素的类型都应完全相同。TMap 也是值类型，支持通常的复制、赋值和析构函数运算，以及它的元素的强所有权。在映射被销毁时，它的元素都会被销毁。键和值也必须为值类型。

TMap 是散列容器，这意味着键类型必须支持 GetTypeHash 函数，并提供 运算符== 来比较各个键是否等值。稍后将详细介绍散列。

TMap 也可使用任选分配器来控制内存分配行为。但不同于 TArray，这些是集合分配器，而不是 FHeapAllocator 和 TInlineAllocator 之类的标准UE4分配器。集合分配器（`TSetAllocator`类）定义映射应使用的散列桶数量，以及应使用哪个标准UE4分配器来存储散列和元素。

*KeyFuncs* 是 TMap 的最后一个模板参数，该参数告知映射如何从元素类型获取键，如何比较两个键是否相等，以及如何对键进行散列计算。这些参数有默认值，它们只会返回对键的引用，使用 *operator ==* 确定相等性，并调用非成员 GetTypeHash 函数进行散列计算。如果您的键类型支持这些函数，可使用它作为映射键，不需要提供自定义 KeyFuncs。

与 TArray 不同的是，内存中 TMap 元素的相对排序既不可靠也不稳定，对这些元素进行迭代很可能会使它们返回的顺序和它们添加的顺序有所不同。这些元素也不太可能在内存中连续排列。映射的支持数据结构是稀疏数组，这种数组可有效支持元素之间的空位。当元素从映射中被移除时，稀疏数组中就会出现空位。将新的元素添加到数组可填补这些空位。但是，即便 TMap 不会打乱元素来填补空位，指向映射元素的指针仍然可能失效，因为如果存储器被填满，又添加了新的元素，整个存储可能会重新分配。

```C++
TMap<int32, FString> FruitMap;
FruitMap.Add(5, TEXT("Banana"));
FruitMap.Add(2, TEXT("Grapefruit"));
FruitMap.Add(7, TEXT("Pineapple"));
// FruitMap == [
//  { Key:5, Value:"Banana"     },
//  { Key:2, Value:"Grapefruit" },
//  { Key:7, Value:"Pineapple"  }
// ]

// Replace "Grapefruit" by "Pear".
FruitMap.Add(2, TEXT("Pear"));

// Add new item with a value of "".
FruitMap.Add(4);

// 和 TArray 一样，还可使用 Emplace 代替 Add，防止插入映射时创建临时文件：
FruitMap.Emplace(3, TEXT("Orange"));

TMaps 的迭代类似于 TArrays。可使用C++的设置范围功能，注意元素类型是 TPair：

for (auto& Elem :FruitMap)
{
    FPlatformMisc::LocalPrint(
        *FString::Printf( TEXT("(%d, \"%s\") "), Elem.Key, *Elem.Value )
    );
}

// 也可以用 CreateIterator 返回拥有读写访问权限的迭代器，或者用 CreateConstIterator 返回拥有只读访问权限的迭代器。
for (auto It = FruitMap.CreateConstIterator(); It; ++It)
{
    FPlatformMisc::LocalPrint(
        *FString::Printf(
            TEXT("(%d, \"%s\")\n"),
            It.Key(),   // same as It->Key
            *It.Value() // same as *It->Value
        )
    );
}
// Output:
// (5, "Mango") (2, "Pear") (7, "Pineapple") (4, "Kiwi") (3, "Orange") (9, "Melon")
```

*TSet* 类似于 *TMap* 和 *TMultiMap*，但有一个重要区别：TSet 是通过对元素求值的可覆盖函数，使用数据值本身作为键，而不是将数据值与独立的键相关联。TSet 可以非常快速地添加、查找和删除元素（恒定时间）。默认情况下，TSet 不支持重复的键，但使用模板参数可激活此行为。

TSet 是一种快速容器类，用于在排序不重要的情况下存储唯一元素。在大多数情况下，只需要一种参数——元素类型。但是，TSet 可配置各种模板参数来改变其行为，使其更全面。除了可指定从 DefaultKeyFuncs 的派生结构体来提供散列功能，还可允许集合中的多个键拥有相同的值。它和其它容器类一样，可设置自定义内存分配器来存储数据。

和 TArray 一样，TSet 是同质容器。换而言之，其所有元素均完全为相同类型。TSet 也是值类型，支持常规复制、赋值和析构函数操作，以及其元素较强的所有权。TSet 被销毁时，其元素也将被销毁。键类型也必须是值类型。

TSet 使用散列，即如果给出了 KeyFuncs 模板参数，该参数会告知集合如何从某个元素确定键，如何比较两个键是否相等，如何对键进行散列，以及是否允许重复键。它们默认只返回对键的引用，使用 *operator ==* 对比相等性，使用非成员函数 GetTypeHash 进行散列。默认情况下，集合中不允许有重复的键。如果您的键类型支持这些函数，则可以将其用作集合键，无需提供自定义 KeyFuncs。要写入自定义 KeyFuncs，可扩展 DefaultKeyFuncs 结构体。

最后，TSet 可通过任选分配器控制内存分配行为。标准虚幻引擎 4 分配器（如 FHeapAllocator 和 TInlineAllocator）不能用作 TSet 的分配器。实际上，TSet 使用集合分配器，该分配器可定义集合中使用的散列桶数量以及用于存储元素的标 准UE4 分配器。

与 TArray 不同的是，内存中 TSet 元素的相对排序既不可靠也不稳定，对这些元素进行迭代很可能会使它们返回的顺序和它们添加的顺序有所不同。这些元素也不太可能在内存中连续排列。集合中的后台数据结构是稀疏数组，即在数组中有空位。从集合中移除元素时，稀疏数组中会出现空位。将新的元素添加到阵列可填补这些空位。但是，即便 TSet 不会打乱元素来填补空位，指向集元素的指针仍然可能失效，因为如果存储器被填满，又添加了新的元素，整个存储可能会重新分配。

```C++
TSet<FString> FruitSet;
FruitSet.Add(TEXT("Banana"));
FruitSet.Add(TEXT("Grapefruit"));
FruitSet.Add(TEXT("Pineapple"));
// FruitSet == [ "Banana", "Grapefruit", "Pineapple" ]

FruitSet.Add(TEXT("Pear"));
FruitSet.Add(TEXT("Banana"));
// FruitSet == [ "Banana", "Grapefruit", "Pineapple", "Pear" ]
// Note:Only one banana entry.

// 使用 C++ Range-for 或者用 CreateIterator 和 CreateConstIterators 函数来创建迭代器。
for (auto& Elem :FruitSet)
{
    FPlatformMisc::LocalPrint(
        *FString::Printf(TEXT(" \"%s\"\n"), *Elem )
    );
}
for (auto It = FruitSet.createConstIterator(); It; ++It)
{
    FPlatformMisc::LocalPrint( *FString::Printf( Text("(%s) "), *It) );
}
// Output:
//  "Banana" "Grapefruit" "Pineapple" "Pear" "Orange" "Kiwi" "Melon" "Mango"
```


## ⚡ Timers 定时器
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Timers/

定时器用来安排在经过一定延迟或一段时间结束后要执行的操作。

例如，您可能希望玩家在获取某个能力提升道具后变得无懈可击，然后 10 秒钟后恢复可受伤害状态。又或者，您可能希望玩家在穿过一间充满毒气的房间时，每秒受到一次伤害。

定时器在全局定时器管理器 `FTimerManager` 中管理，全局定时器管理器存在于游戏实例对象上以及每个场景 中。

有两个重载函数可以使用定时器管理器来设置定时器，都可以连接到任意类型的对象或函数委托：

- `SetTimer` 可以设为根据需要定期重复。
- `SetTimerForNextTick` 只在下次 Tick 事件触发。

如果要对其调用定时器的对象（如Actor）在时间结束前被销毁，则相关定时器会自动取消。在此情况下，定时器句柄将变为无效，并且不会调用该函数。

要访问定时器管理器，可以使用`AActor`函数`GetWorldTimerManager`，它会在`UWorld`中调用`GetTimerManager`函数。要访问全局定时器管理器，使用`UGameInstance`函数`GetTimerManager`。如果场景因为任何原因而没有自己的定时器管理器，也可以退而求其次，使用全局定时器管理器。全局管理器可以用于与任何特定场景的存在没有相关性或依赖性的函数调用。

定时器可以与标准的 C++ 函数指针、`TFunction`对象或委托一起使用。

`FTimerManager`的`SetTimer`函数将定时器设置为在一段延迟后调用函数或委托，可以设置为不限次重复调用该函数。这些函数将填充定时器句柄（`FTimerHandle`类型），它可用于暂停和恢复倒计时，查询或更改剩余时间，甚至可以取消定时器。可以在定时器调用的函数内部设置定时器，甚至可以重复使用用来调用这个函数的定时器句柄。一种用法是延迟依赖于尚未产生、但预计很快会产生的 Actor 的初始化；从属 Actor 初始化函数可以设置一个定时器，在经过固定时长（如一秒）后再次调用这个初始化函数。或者，该初始化函数可以由在成功时自动清空的循环定时器调用。

定时器还可以通过 `SetTimerForNextTick` 设置在下一帧运行，而不是按固定间隔，但需要注意的是，该函数不填充定时器句柄。

要清空定时器，将`FTimerHandle`传递到`FTimerManager`函数`ClearTimer`中。定时器句柄将在此刻失效，并可以再次用于管理新定时器。使用现有定时器句柄调用`SetTimer`将清空该定时器句柄引用的定时器，并将它换成新定时器。

以小于等于 0 的速率调用`SetTimer`等效于调用`ClearTimer`。

最后，与特定对象关联的所有定时器都可以通过调用`ClearAllTimersForObject`来清空。

示例：

```C++
void AMyActor::BeginPlay()
{
    Super::BeginPlay();
    // 从现在开始两秒后，每秒调用一次 RepeatingFunction。
    GetWorldTimerManager().SetTimer(MemberTimerHandle, this, &AMyActor::RepeatingFunction, 1.0f, true, 2.0f);
}

void AMyActor::RepeatingFunction()
{
    // 调用该函数达到足够次数后，清空定时器。
    if (--RepeatingCallsRemaining <= 0)
    {
        GetWorldTimerManager().ClearTimer(MemberTimerHandle);
        // MemberTimerHandle现在可以复用于其他任意定时器。
    }
    // 在此进行一些操作...
}
```

FTimerManager 函数 `PauseTimer`使用定时器句柄来暂停正在运行的定时器。这样可阻止定时器执行其函数调用，但经过的时间和剩余时间将保持暂停时的状态。`UnPauseTimer`使暂停的定时器恢复运行。

除了管理定时器，定时器管理器还提供了用于获取特定定时器信息的函数，如速率、经过的时间和剩余时间等。

定时器是否活跃可以通过 FTimerManager 的`IsTimerActive`函数用于确定指定定时器当前是否活跃且未暂停。

示例：

```C++
// 这个武器是否正在等待再次射击？
bool canRefire = GetWorldTimerManager().IsTimerActive(this, &AUTWeapon::RefireCheckTimer);
```

FTimerManager 有一个函数`GetTimerRate`，它用于从定时器句柄获取定时器的当前速率（两次激活之间的时间）。定时器速率不能直接更改，但可以使用其定时器句柄调用`SetTimer`来清空定时器并创建新定时器，新定时器除了速率不同，其他保持不变。如果定时器句柄无效，则`GetTimerRate`将返回值-1。

示例：

```C++
// 该武器的射击速率在预热时变化。当前是否正在等待射击，如果是，两次射击之间的当前间隔是多久？
float rate = GetWorldTimerManager().GetTimerRate(this, &AUTWeapon::RefireCheckTimer);
```


经过时间和剩余时间
FTimermanager`通过`GetTimerElapsed`和`GetTimerRemaining，针对与所提供的定时器句柄关联的定时器，提供了返回经过时间和剩余时间的功能。与`GetTimerRate`一样，如果定时器句柄无效，则这两个函数将返回-1。

示例：

// 该武器准备好再次射击之前将经过多长时间？如果答案为-1，则表示现在已准备就绪。
GetWorldTimerManager().GetTimerElapsed(this, &AUTWeapon::RefireCheckTimer);
定时器的经过时间和剩余时间之和应该等于定时器的速率。

## ⚡ Delegates 委托
- Delegates 委托 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Delegates
- Actor 通信：EventDispatcher https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ActorCommunication/EventDispatcherQuickStart/
- Event Dispatchers https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Blueprints/UserGuide/EventDispatcher/

委托是一种泛型，但是类型安全地在 C++ 对象上调用成员函数的方式。可使用委托动态绑定到任意对象的成员函数，之后在该对象上调用函数，即使调用程序不知对象类型也可进行操作。复制委托对象很安全。你也可以利用值传递委托，但这样操作需要在堆上分配内存，因此通常并不推荐。请尽量通过引用传递委托。

虚幻引擎共支持三种类型的委托：

- 单点委托
- 组播委托，包括事件委托
- 动态委托(UObject, serializable)可序列化，其函数可按命名查找，但其执行速度比常规委托慢。

如需声明委托，请使用下文所述的宏。请根据与委托相绑定的函数（或多个函数）的函数签名来选择宏。每个宏都为新的委托类型名称、函数返回类型（如果不是 void 函数）及其参数提供了参数。当前，支持以下使用任意组合的委托签名：

- 返回一个值的函数。
- 声明为 const 函数。
- 最多 4 个载荷变量，OwningType、EventName、DelegateName、ReturnValueType。
- 最多 8 个函数参数，OneParam 到 NineParams。

所谓载荷 payloads 在这里就是指那些对委托机制有用的函数参数。

不同载荷个数的函数签名与对应声明宏如下：

```cpp
void Function()
DECLARE_DELEGATE(DelegateName)

void Function(Param1)
DECLARE_DELEGATE_OneParam(DelegateName, Param1Type)

void Function(Param1, Param2)
DECLARE_DELEGATE_TwoParams(DelegateName, Param1Type, Param2Type)

void Function(Param1, Param2, ...)
DECLARE_DELEGATE_<Num>Params(DelegateName, Param1Type, Param2Type, ...)

<RetValType> Function()
DECLARE_DELEGATE_RetVal(RetValType, DelegateName)

<RetValType> Function(Param1)
DECLARE_DELEGATE_RetVal_OneParam(RetValType, DelegateName, Param1Type)

<RetValType> Function(Param1, Param2)
DECLARE_DELEGATE_RetVal_TwoParams(RetValType, DelegateName, Param1Type, Param2Type)

<RetValType> Function(Param1, Param2, ...)
DECLARE_DELEGATE_RetVal_<Num>Params(RetValType, DelegateName, Param1Type, Param2Type, ...)
```

委托函数支持与 UFunctions 相同的说明符，但使用 `UDELEGATE` 宏而不是 UFUNCTION。例如，以下代码将 BlueprintAuthorityOnly 说明符添加到 FInstigatedAnyDamageSignature 委托中

```cpp
UDELEGATE(BlueprintAuthorityOnly)
DECLARE_DYNAMIC_MULTICAST_DELEGATE_FourParams(FInstigatedAnyDamageSignature, float, Damage, const UDamageType*, DamageType, AActor*, DamagedActor, AActor*, DamageCauser);
```

关于组播委托、动态委托和封装委托，上述宏的其它变体如下：

```cpp
DECLARE_DELEGATE_NineParams( DelegateName, Param1Type, ... 
DECLARE_DELEGATE_RetVal_NineParams( ReturnValueType, DelegateName, Param1Type, ... 
DECLARE_MULTICAST_DELEGATE_NineParams( DelegateName, Param1Type, ... 
DECLARE_EVENT_NineParams( OwningType, EventName, Param1Type, ... 
DECLARE_DYNAMIC_DELEGATE_NineParams( DelegateName, Param1Type, Param1Name, ... 
DECLARE_DYNAMIC_MULTICAST_DELEGATE_NineParams( DelegateName, Param1Type, Param1Name, ... 
DECLARE_DYNAMIC_DELEGATE_RetVal_NineParams( ReturnValueType, DelegateName, Param1Type, Param1Name, ... 
```

委托签名声明可存在于全局范围内、命名空间内、甚至类声明内，此类声明可能不在于函数体内。

参考源代码 UE_4.27\Engine\Source\Runtime\Core\Public\Delegates\DelegateCombinations.h：

委托系统理解某些类型的对象，使用此类对象时将启用附加功能。将委托绑定到 UObject 或共享指针类的成员， 委托系统可保留对该对象的弱引用，因此对象在委托下方被销毁时，可通过调用 IsBound() 或 ExecuteIfBound() 函数进行处理。注意各类受支持对象的特殊绑定语法。

- `Bind` 绑定到现有委托对象。
- `BindStatic` 绑定原始 C++ 指针全局函数委托。
- `BindRaw` 绑定原始 C++ 指针委托。由于原始指针不使用任何类型的引用，因此在删除目标对象后调用`Execute 或 ExecuteIfBound` 会不安全。
- `BindLambda` 绑定一个函子。这通常用于拉姆达函数。
- `BindSP` 绑定基于指针的共享成员函数委托。共享指针委托会保留对对象的弱引用。可使用 ExecuteIfBound() 进行调用。
- `BindUObject` 绑定 UObject 的成员函数委托。UObject 委托会保留对你的对象 UObject 的弱引用。可使用 ExecuteIfBound() 进行调用。
- `UnBind` 取消绑定此委托。

多播委托可以绑定多个函数，当委托触发时，将调用所有这些函数。因此，绑定函数在语义上与数组更加类似。

- `Add()` 将函数委托添加到该多播委托的调用列表中。
- `AddStatic()` 添加原始 C++ 指针全局函数委托。
- `AddRaw()` 添加原始 C++ 指针委托。原始指针不使用任何类型的引用，因此如果从委托下面删除了对象，则调用此函数可能不安全。调用 Execute() 时请小心！
- `AddSP()` 添加基于共享指针的（快速、非线程安全）成员函数委托。共享指针委托保留对对象的弱引用。
- `AddUObject()` 添加基于 UObject 的成员函数委托。UObject 委托保留对对象的弱引用。
- `Remove()` 从该多播委托的调用列表中删除函数（性能为O(N)）。请注意，委托的顺序可能不会被保留！
- `RemoveAll()` 从该多播委托的调用列表中删除绑定到指定 UserObject 的所有函数。请注意，委托的顺序可能不会被保留！

请参见 DelegateSignatureImpl.inl（位于 ..\UE4\Engine\Source\Runtime\Core\Public\Templates\），了解此类函数的变体、参数和实现。

绑定到委托时，可同时传递载荷数据，此操作十分有用，利用载荷可在绑定时将参数存储在委托内。所有委托类型（除"动态"外）均自动支持载荷变量。

以下范例将两个自定义载荷变量（一个布尔，一个int32）传递到委托。之后调用该委托时，此类参数将被传到绑定函数。须始终接受委托类型参数后的额外变量参数。

```cpp
MyDelegate.BindRaw( &MyFunction, true, 20 );
```

通过调用委托的 Execute() 函数执行绑定到委托的函数，执行前须检查委托是否已绑定。对于无返回值的委托，可调用 ExecuteIfBound()，但需注意输出参数可能未初始化。

- `Execute` 不检查其绑定情况即执行一个委托
- `ExecuteIfBound` 检查一个委托是否已绑定，如是，则调用 Execute
- `IsBound` 检查一个委托是否已绑定，经常出现在包含 Execute 调用的代码前

动态委托绑定：

- `BindDynamic( UserObject, FuncName )` 用于在动态委托上调用 BindDynamic() 的辅助宏。自动生成函数命名字符串。
- `AddDynamic( UserObject, FuncName )` 用于在动态组播委托上调用 AddDynamic() 的辅助宏。自动生成函数命名字符串。
- `RemoveDynamic( UserObject, FuncName )` 用于在动态组播委托上调用 RemoveDynamic() 的辅助宏。自动生成函数命名字符串。

多播委托拥有大部分与单播委托相同的功能，它们只拥有对对象的弱引用，可以与结构体一起使用，可以四处轻松复制等等。

就像常规委托一样，多播委托可以远程加载/保存和触发；但多播委托函数不能使用返回值，它们最适合用来传递一组委托。

事件是一种特殊类型的多播委托，它在访问 Broadcast()、IsBound() 和 Clear() 函数时会受到限制。

事件允许附带多个函数委托，然后调用事件的 Broadcast() 函数将此事件广播到所有绑定对象，已失效的对象除外。事件签名不允许使用返回值。对于事件而言，只有定义事件的类才能调用 Broadcast() 函数。

即使不存在绑定，在事件上调用 Broadcast() 也是安全操作。唯一需要注意的情况是使用事件初始化输出变量，通常不建议执行此操作。

调用 Broadcast() 函数时，被绑定函数的执行顺序尚未定义。有可能不按照函数的添加顺序执行。


用法示例，假设类拥有可在任何地方随意调用的方法：

```cpp
class FLogWriter
{
    void WriteToLog(FString);
};
```

要调用 WriteToLog 函数，需创建该函数签名的委托类型，以下是一个简单的委托类型声明及使用：

```cpp
DECLARE_DELEGATE_OneParam(FStringDelegate, FString);
class FMyClass
{
    FStringDelegate WriteToLogDelegate;
};
```

以上创建名为 FStringDelegate 的委托类型，该类型使用 FString 类型的单个参数。

现在分配委托，只需创建委托类的实例，将拥有该方法的类作为模板参数传递，同时还需传递对象的实例和方法的实际函数地址。因此，现在需创建 FLogWriter 类的实例， 然后创建该对象实例 WriteToLog 方法的委托：

```cpp
TSharedRef<FLogWriter> LogWriter(new FLogWriter());

WriteToLogDelegate.BindSP(LogWriter, &FLogWriter::WriteToLog);
```

注意：绑定的对象由共享指针拥有，因此 BindSP 的 SP 部分代表共享指针。此外，还有不同对象类型的绑定版本，例如 BindRaw() 和 BindUObject()。

FMyClass 现在可调用 WriteToLog 方法，甚至无需了解 FLogWriter 类的任何信息！只需调用委托，使用 Execute() 方法：

```cpp
WriteToLogDelegate.Execute(TEXT("Delegates are great!"));
```

如在将函数绑定到委托前调用 Execute()，将触发断言。多数情况下，建议进行以下操作：

```cpp
WriteToLogDelegate.ExecuteIfBound(TEXT("Only executes if a function was bound!"));
```




## ⚡ Networking 联网多人游戏
- 联网多人游戏 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking
- Actor 的复制 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/Actors/
- UDP wrapper for Unreal Engine 4 https://github.com/getnamo/udp-ue4/
- 设置专用服务器 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/HowTo/DedicatedServers/
- Blueprint Networking Tutorial https://www.bilibili.com/video/BV1KW411d7nT

在多人游戏会话中，游戏状态信息将通过互联网连接在多台机器之间通信，而非单独驻留于一台计算机上。玩家之间的信息共享十分微妙，并会增加部分额外步骤，因此此操作导致多人游戏编程比单人游戏编辑复杂。虚幻引擎 提供的网络框架非常强大，支持部分世界上最流行的网络游戏，可简化此流程。

在单人游戏或本地多人游戏中，游戏在本地主机上运行。玩家们的输入将连接到一台计算机，直接控制其上所有内容，而包括 Actor、场景和各玩家的用户界面在内的所有游戏项目均存在于这台本地机器上。

在网络多人游戏中，虚幻引擎使用 C/S 客户端/服务器模型。网络中的一台计算机作为 Server 主持多人游戏会话，而所有其他玩家的计算机作为 Client 连接到该服务器。然后，服务器与连接的客户端分享游戏状态信息，并提供一种客户端之间通信的方法。

服务器作为游戏主机，保留一个真实授权的游戏状态。换句话说，服务器是多人游戏实际发生的地方。客户端会远程控制其在服务器上各自拥有的 Pawn，发送过程调用以使其执行游戏操作。但服务器不会将视觉效果直接流送至客户端显示器。服务器会将游戏状态信息复制到各客户端，告知应存在的 Actor 及其行为，以及不同变量应拥有的值。然后各客户端使用此信息，对服务器上正在发生的情况进行高度模拟。

服务器是 UE4 多人游戏的一个重要部分。服务器的作用包括：

- 做出所有重要决定，包含所有的主控状态；
- 处理客户端连接，转移到新的地图以及处理比赛开始/结束时的总体游戏流程等。

命令行启动服务器，这些命令调用了编辑器执行文件，因此不需要熟数据（cooked data）：

```sh
# 监听服务器
UE4Editor.exe ProjectName MapName?Listen -game

# 专用服务器
UE4Editor.exe ProjectName MapName -server -game -log

# 客户端
UE4Editor.exe ProjectName ServerIP -game
```

Network Modes 和 Server Types 描述了计算机与网络多人游戏会话的关系，游戏实例可采用以下网络模式：

- Standalone： 游戏作为独立服务器运行，用于单人游戏和本地多人游戏，不接受远程客户端连接，只有本地玩家。
- Client： 游戏作为网络多人游戏会话中的客户端，与服务器连接运行，不会运行服务器逻辑。
- Listen Server： 监听状态的服务器，游戏作为主持网络多人游戏会话的服务器运行，随时接受远程客户端中的连接，且直接在服务器上拥有本地玩家。
- Dedicated Server： 游戏作为主持网络多人游戏会话的专属服务器运行，无本地玩家，更高效运行，因其废弃图形、音效、输入和其他面向玩家的功能。

专用服务器是一种无界面运行的服务器，不会呈现任何视觉效果，并且玩家不会在服务器本地运行游戏。这使得专用服务器可以专注于游戏逻辑并调整来自客户端的传入信息，从而充分利用其资源来主持游戏。此外，这确保了参与多人游戏的所有玩家都能享有公平竞技环境。监听服务器通常适用于多人休闲游戏和合作游戏，而专用服务器则是大型或竞技游戏的理想之选。

在虚幻编辑器中的 Active Play Mode 中可以设置相应的 Net Mode。 

连接过程主要步骤如下：

- 客户端发送连接请求。
- 如果服务器接受连接，则发送当前地图。
- 服务器等待客户端加载此地图。
- 加载之后，服务器将在本地调用 `AGameModeBase::PreLogin`，这时 GameMode 有机会拒绝连接。
- 如果接受连接，服务器将调用 `AGameModeBase::Login`，这里创建一个 PlayerController 用于后续复制到新连接的客户端，在成功接收后，作为代客户端的临时使用。
- 调用 `APlayerController::BeginPlay`，应当注意的是，在此 actor 上调用 RPC 函数尚存在安全风险，应当等待 PostLogin 被调用完成。
- 最后调用 `AGameModeBase::PostLogin`，然后让服务器在 PlayerController 上开始调用 RPC 函数。

Actor 复制是指在网络会话中的不同机器间复制游戏状态信息。若正确设置复制，将可同步不同机器的游戏实例。多数 Acto 默认不会启用复制，且将本地执行所有功能。在 C++ Actor 类中设置 bReplicates 变量，或将 Actor 蓝图的 Replicates 设置设为 true，可启用给定类的 Actor 复制。

以下为创建网络游戏时的常见复制功能：

- 创建和销毁： 服务器上生成复制 Actor 的授权版本时，其会在所有连接客户端上自动生成远程代理。其之后会将信息复制到这些远程代理。若销毁授权 Actor，则将自动销毁所有连接客户端上的远程代理。
- 移动复制： 若授权 Actor 启用了复制移动，或将 C++ 中的 bReplicateMovement 设为 true，其将自动复制位置、旋转和速度。
- 变量复制： 在指定为复制变量的值变更时，其将自动从授权 Actor 复制到其远程代理。
- 组件复制：  Actor 组件复制为其所属 Actor 的一部分。组件内指定为复制变量将复制，而组件内调用的 RPC 将与 Actor 类中调用的 RPC 保持一致。
- RPC 远程过程调用：是传输到网络游戏中特定机器的特殊函数。无论初始调用 RPC 的是哪台机器，其实现仅在目标机器上运行。此类 RPC 可指定为服务器（仅在服务器上运行）、客户端（仅在 Actor 的拥有客户端上运行）或 NetMulticast（在连接会话的所有机器上运行，包括服务器）。

虽然创建、销毁和移动等常见使用可自动处理，但即使启用复制，其他所有 gameplay 功能也不会默认自动复制。必须根据游戏的需求明确指定要复制的变量和函数。

Actor、Pawn 和角色的部分常用功能不会复制：

- Skeletal Mesh & Static Mesh Components 骨架网格体和静态网格体组件
- Materials 材质
- Animation Blueprints 动画蓝图
- Particle Systems 粒子系统
- Sound Emitters 音效发射器
- Physics Objects 物理对象
 
此类项目均在所有客户端上单独运行。但是，若复制驱动此类视觉元素的变量，则可确保所有客户端都具有相同信息，从而以大致相同的方式进行模拟。

Actor 的 Network Role 将决定网络游戏期间控制 Actor 的机器。授权 Actor 被认为可控制 Actor 的状态，并可将信息复制到网络多人游戏会话中的其他机器上。远程代理 是该 Actor 在远程机器上的副本，其将接收授权 Actor 中的复制信息。其由 Local Role 和 Remote Role 变量进行追踪，可取以下值：

- `None` Actor 在网络游戏中无角色，不会复制。
- `Authority` 授权状态，会将 Actor 信息复制到其他机器上的远程代理。
- `Simulated Proxy` 模拟代理，Actor 为远程代理，由另一台机器上的授权 Actor 完全控制。网络游戏中如拾取物、发射物或交互对象等多数 Actor 将在远程客户端上显示为模拟代理。
- `Autonomous Proxy` 自主代理，Actor 为远程代理，能够本地执行部分功能，但会接收授权 Actor 中的矫正。自主代理通常为玩家直接控制的 Actor 所保留，如 pawn。

虚幻引擎使用的默认模型是服务器授权，意味着服务器对游戏状态固定具有权限，而信息固定从服务器复制到客户端。服务器上的 Actor 应具有授权的本地角色，而其在远程客户端上的对应 Actor 应具有模拟或自主代理的本地角色。


Actor 主要通过两种方式进行更新：

- 直接设置属性更新；
- RPC 远程过程调用复制更新；

属性更新和 RPC 更新的主要区别在于，属性可以在发生变化时随时自动更新，而 RPC 只能在被执行时获得调用更新。

通过设置属性和 RPC 的过程，在组件上与在 Actor 上并无区别。将一个类设置为具有复本后，这些组件的实际实例也必须经过设置后才能复制。

要进行组件复制，只需调用 AActorComponent::SetIsReplicated(true)。如果您的组件是一个默认子对象，就应当在生成组件之后通过类构造函数来完成此调用。

示例：

```C++
ACharacter::ACharacter()
{
    // Etc...
    CharacterMovement = CreateDefaultSubobject<UMovementComp_Character>(TEXT("CharMoveComp"));
    if (CharacterMovement)
    {
        CharacterMovement->UpdatedComponent = CapsuleComponent;

        CharacterMovement->GetNavAgentProperties()->bCanJump = true;
        CharacterMovement->GetNavAgentProperties()->bCanWalk = true;
        CharacterMovement->SetJumpAllowed(true);
        CharacterMovement->SetNetAddressable(); // Make DSO components net addressable
        CharacterMovement->SetIsReplicated(true); // Enable replication by default

    }
}
```



## ⚡ Sockets API
- Steam Sockets https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/HowTo/SteamSockets/
- 《Exploring in UE4》网络同步原理深入 https://zhuanlan.zhihu.com/p/34723199
- UE4 Sockets多线程TCP通信 https://blog.csdn.net/zilisen/article/details/75007447

这部分内容需要有网络编程底层基础，要理解 TCP/IP 等基础协议。

源代码参考：

- UE_4.27\Engine\Source\Runtime\Sockets\Public\Sockets.h
- UE_4.27\Engine\Source\Runtime\Networking\Public\Networking.h

UE4 针对众多不同的操作系统的不同的 Socket 实现提供统一的 Socket 编程接口，几乎所有操作系统都实现了 BSD socket 接口。同时，不同的操作系统也提供了一些差异化的操作，这些操作由 ISocketSubsystem 定义。

常用 API:

- `socket()` 创建 Socket 对象并分配系统硬件等资源。
- `bind()` 服务端用来绑定一个 socket 地址结构体，它指定了本地 IP 地址和端口号，可设定为绑定到本机的任何 IP。
- `listen()` 用在服务端，使得一个被绑定的 TCP socket 进入监听状态。
- `connect()` 客户端用来分配一个空闲的 Socket 端口号，对于 TCP Socket，还会尝试建立一个新的 TCP 连接。
- `accept()` 服务端用来接受客户端请求的 TCP 连接，即响应客户端 connect，并创建一个新的 Socket 完成 TCP 连接。
- `send()`， `recv()`， `sendto()`， `recvfrom()` 用于发送和接收数据，标准 IO 函数 `write()` 和 `read()` 也可以使用。
- `close()` 释放 socket 对象占用的系统资源，TCP 连接会终止。
- `gethostbyname()`，`gethostbyaddr()` 用于获取 host 名字和地址，仅在 IPv4 下可用。
- `select()` 用于挂起，等待列表中的一个或多个套接字准备好读取或写入或出现错误。
- `poll()` 检查 socket 集合中的一个 socket 的状态。这个集合可以被测试是否有 socket 可以被写入或读出或出现错误。
- `getsockopt()` 获取一个 socket 的指定选项的当前值。
- `setsockopt()` 设置一个 socket 的指定选项的值。

根据不同的软件需要，Socket 基本使用方式如下，可以单独实现服务器或客户端：

- 服务器创建 Socket 设置绑定好地址端口等，并执行侦听方法等待客户发起连接请求；
- 客户端创建 Socket 并设置好服务器信息，并执行 connet 请求与服务器连接；

建立连接后，就进入数据传递的流程。

虚幻引擎提供 Socket 和 Networking 模块进行网络通信开发，提供了 `FSocket` 底层类对象，在 Build.cs 文件中添加这两个模块，并且在 C++ 中引入头文件：

```cpp
// C++ Header:
// #include "Networking.h"

PublicDependencyModuleNames.AddRange(
new string[]
{
    "Core",
    "Sockets",
    "Networking"
    // ... add other public dependencies that you statically link with here ...
}
);
```


## ⚡ Steam Sockets
- Steam Sockets https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/HowTo/SteamSockets/

Steam Sockets 是一款利用 Steam 平台新网络协议层的网络插件，虚幻引擎从 Steamworks SDK 1.46 版起支持此款插件。

与上一个 SteamNetworking 协议相比，此插件利用 Steam 通信网络提供更高的安全性和可靠性，并内置 DDoS 保护、端到端加密和 NAT 遍历。Steam Sockets 还为监听服务器提供 ping 计算 功能，匹配系统可利用此功能将用户匹配到性能更佳的服务器。与仅在用户连接到服务器后才能提供 ping 计算的 SteamNetworking 相比，这是一个重大的改进。

Steam Sockets 用自身的网络驱动器取代了虚幻引擎的默认网络驱动器，且只有共同使用 Steam Sockets 创建的版本可以互相连接。此外，Steam Sockets 版本支持 Windows、Mac 和 Linux 之间的跨平台运行，但不支持其他设备。

启用 Steam Sockets 插件，虚幻编辑器操作路径 Edit -> Plugins -> Built-in Plugins -> Networking -> Steam Sockets 插件。

对于要使用Steam Sockets插件的各个平台，打开其 Engine.ini 文件，将 Net Driver Definitions 更改为使用 SteamSockets.SteamSocketsNetDriver。例如，若要为某个Windows版本启用Steam Sockets，可将以下内容添加到 WindowsEngine.ini：

WindowsEngine.ini

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="/Script/SteamSockets.SteamSocketsNetDriver",DriverClassNameFallback="/Script/SteamSockets.SteamNetSocketsNetDriver")
完成这些步骤后，项目即可启用Steam Sockets及其功能。

任何针对非Windows、Mac和Linux设备的版本在打包前都将剥离Steam Sockets，而默认使用UE4的标准网络协议。

若在任意这些操作系统上使用非Steam平台，例如Windows上的Oculus商店，则版本仍将使用Steam网络驱动器打包，但针对该平台的设置会不正确。考虑到这一点，有必要为分布于不同PC平台上的版本适当地配置项目。




## ⚡ Core Redirects 类名重定向
- Core Redirects https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assets/CoreRedirects/

开发过程中，在某些情况下需要重命名现有类、属性、函数名称或相似代码成员。 然而，如果存在大量受这些更改影响的资源，仅重命名代码成员然后重新编译项目会导致相当数量的数据丢失，因为虚幻引擎无法再识别现有资源。 为解决此问题，引擎使用 Core Redirects。 你应在项目的`DefaultEngine.ini`文件中配置 Core Redirects，对于插件，则为相应插件名称添加前缀得到的 ini 文件中配置，例如，对于引擎的 Paper2D 插件，相应的文件为`BasePaper2D.ini`，对于游戏插件，相应的文件为`Default.ini`。 在任何一种情况下，都需要将 Core Redirects 放置在"[CoreRedirects]"部分中。 加载资源时，这些设置将自动重新映射已过时数据，从而防止因重命名过程导致的数据丢失。 有关当前有效的 Core Redirects 的示例，请查看`BaseEngine.ini`文件。

在 Core Redirect 中指定类或结构体的名称时，输入的名称应与它在虚幻引擎的反射系统中显示的名称相同，这就是说，需要省略前缀字母。例如，`AMyActor`应写作`MyActor`，`FMyStruct`应写作`MyStruct`。由于对于列举类型，虚幻引擎的反射系统不使用前缀，在 Core Redirects 中，列举类型名称的显示方式与在代码中完全相同。例如，被 Core Redirect 引用时，`ESampleEnum`将仍为`ESampleEnum`。


## ⚡ C++ & Blueprint

使用 Add C++ Class 类向导会生成你的类，并提供 BeginPlay 和 Tick 两个重载方法。BeginPlay 事件告诉您 Actor 以可运行状态进入了游戏。这是启动类 Gameplay 逻辑的好位置。Tick 每帧调用一次，使用自上次调用传递以来经过的时间，可以在这里执行任何重复逻辑。但是，如果您不需要该功能，最好将其移除以提升性能。如果将其移除，确保移除构造函数中指示 tick 事件应发生的 PrimaryActorTick.bCanEverTick。

可以将创建的类公开给编辑器，使用设计师可以在虚幻编辑器中设置的属性，只需要使用说明符即可实现。列如，在属性声明的上一行加入 `UPROPERTY(EditAnywhere)` 即可。

Hot Reload 是虚幻引擎 UnrealBuildTool 中引入的非常棒的功能，不必关闭编辑器就可以编译 C++ 更改！

在编辑器继续运行的情况下启用该功能，正常操作那样通过 Visual Studio 或 Xcode 构建。编辑器会检测出新编译的 DLL，并立即加载修改！如果您已经连接了调试器，需要先断开连接，这样 Visual Studio 才会允许您构建。

或者直接点击编辑器主工具栏中的 Compile 编译按钮，即可以直接更新编译好的类库。

新版本 UE 4.22 开始可提供 Live Codind 实验性实时编码功能，但它不能在热重新加载的模块处于活动状态时使用，通过编辑器配置设置 Hot Reload。

    Live Coding cannot be enabled while hot-reloaded modules are active. Please close the editor and build from your IDE before restarting.

需要修改 UnrealBuildTool 编译配置 bAllowHotReloadFromIDE 以禁止在 IDE 热重载。

通过 C++ 类向导创建的类，还可以继续通过蓝图扩展 C++ 类，只需要创建新的蓝图类时，将 All Classes 列表中的 C++ 类设置父类。

还可以将 C++ 函数等内容公开给蓝图界面中调用，这样在创建 Gameplay 系统期间，设计师就能够通过蓝图调用 C++ 程序员创建的 API。并且，也可以从 C++ 代码调用蓝图中实现的函数。

将函数公开给蓝图就像公开属性一样简单。只需在头文件函数声明前放置一个 UFUNCTION 宏即可！以下代码片段显示了所需内容。

```cpp
UFUNCTION(BlueprintCallable, Category="Damage")
void CalculateValues();
```

函数宏负责处理将 C++ 函数公开给反射系统。`BlueprintCallable` 将其公开给蓝图虚拟机。每一个公开给蓝图的函数都需要一个与之关联的类别，所有具有相同 Category 内容将会在列表中以同一个分组显示，这样蓝图右键点击快捷菜单的列表就更有条理。

让 C++ 代码能够调用蓝图中定义的函数，可以将设计师在认为合适时可以响应的事件通知给设计师。这通常包括产生效果或其他视觉影响，如隐藏或取消隐藏Actor。下面的代码片段显示了蓝图实现的函数。

```cpp
UFUNCTION(BlueprintImplementableEvent, Category="Damage")
void CalledFromCpp();
```

该函数的调用方法与任何其他 C++ 函数一样。在后台，虚幻引擎生成基本 C++ 函数实现，用以理解如何在蓝图 VM 中调用，这通常称为 Thunk 形实转换程序。计算机编程语言在函数参数求值策略方面有两大流派，"传值调用" VS "传名调用" 。 而在实现传名调用时候编译器需要将参数放置到一个零时函数中，调用时将这个临时函数传入函数体，这个函数就叫做形式转换函数，也就是 Thunk。

如果所提及蓝图不为这种方法提供函数体，则函数行为就像没有实体行为的 C++ 函数一样：不执行任何操作。如果想要提供 C++ 默认实现，同时仍允许蓝图覆盖此方法，该怎么办呢？或许可以使用 UFUNCTION() 宏的 `BlueprintNativeEvent` 选项。

以下代码片段显示了为达到此目的需要在标头中进行的更改：

```cpp
UFUNCTION(BlueprintNativeEvent, Category="Damage")
void CalledFromCpp();
```

该版本仍会生成用于在蓝图 VM 中调用的形实替换方法，但是提供实现时，需要用一个指定规则的函数名，即给原函数名加后缀 `_Implementation`。蓝图 VM 规则要求必须提供该命名版本的函数，否则项目无法建立关联。

下面是对上述声明的实现代码，该版本函数会在所提及蓝图不覆盖此方法时被调用：

```cpp
void AMyActor::CalledFromCpp_Implementation()
{
    // 这里可以添加些有趣的代码
}
```

注意，在先前版本的构建工具中，会自动生成这个带后缀的函数声明。在 UE 4.8+ 版本中，需要显式将该声明添加到标头中。

UFunction 是虚幻引擎反射系统可识别的 C++ 函数。UObject 或蓝图函数库可将成员函数声明为 UFunction，方法是将 UFUNCTION 宏放在头文件中函数声明上方的行中。宏将支持使用函数说明符来更改 UE4 解译和使用函数的方式。属性使用标准的 C++ 变量语法声明，前面用 UPROPERTY 宏来定义属性元数据和变量说明符。

```cpp
UPROPERTY([specifier, specifier, ...], [meta(key=value, key=value, ...)])
Type VariableName;

UFUNCTION([specifier1=setting1, specifier2, ...], [meta(key1="value1", key2, ...)])
ReturnType FunctionName([Parameter1, Parameter2, ..., ParameterN1=DefaultValueN1, ParameterN2=DefaultValueN2]) [const];
```

为了将 C++ 类中定义的变量公开给从该类扩展而来的蓝图，必须使用变量定义之前的 `UPROPERTY()` 宏，并指定关键字 *EditAnywhere*, *BlueprintReadWrite*。使蓝图系统能够感知该变量，并在右键菜单列表的 Variables -> My Character 中显示该变量，并且可以设置或访问该变量的值。另外，注解按以下格式指定，还会在虚幻编辑器中作为 Tooltip 信息使用，这样可以给函数、变量的使用提供在线说明。

```cpp
/**
 * Tooltip: Character's Health
 */
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="My Character")
float health;
```

关键字说明，后两个是 Multicast Delegate Keywords：

- `BlueprintReadOnly` 此属性可以由蓝图读取，但不能修改。
- `BlueprintReadWrite` 此属性可以通过蓝图读取或写入。
- `BlueprintAssignable` 应公开属性以在蓝图中分配。
- `BlueprintCallable` 应公开属性以在蓝图图表中调用。

使用 EditAnywhere 或 VisibleAnywhere 修饰类变量的可编辑性，或只可见，让变量可见，编辑框是灰色，不能修改变量的值。

为了自定义位标记名称，首先必须使用"bitflags"元标记来创建 UENUM，创建枚举类型后，可以使用"BitmaskEnum"元标记来引用它：

```cpp
UENUM(Meta = (Bitflags))
enum class EColorBits
{
    ECB_Red,
    ECB_Green,
    ECB_Blue
};

UPROPERTY(EditAnywhere, Meta = (Bitmask, BitmaskEnum = "EColorBits"))
int32 ColorFlags;
```

程序员创建对蓝图公开的 API 时需要考虑以下几点提示和技巧：

```cpp
// 可选参数便于在蓝图中处理：
/**
 * 将字符串显示到日志中，也可选择显示到屏幕上。
 * 如 Print To Log 为 true，它将显示在 Output Log 窗口中。否则它将被记录为"Verbose"，通常不会显示。
 *
 * @param   InString        登出字符串
 * @param   bPrintToScreen  是否将输出显示到屏幕上
 * @param   bPrintToLog     是否将输出保存到日志中
 * @param   bPrintToConsole 是否将输出显示到控制台
 * @param   TextColor       是否将输出显示到控制台
 */
UFUNCTION(BlueprintCallable, meta=(WorldContext="WorldContextObject", CallableWithoutWorldContext, Keywords = "log print", AdvancedDisplay = "2"), Category="Utilities|String")
static void PrintString(UObject* WorldContextObject, const FString& InString = FString(TEXT("Hello")), bool bPrintToScreen = true, bool bPrintToLog = true, FLinearColor TextColor = FLinearColor(0.0,0.66,1.0));


// 在带大量返回参数的函数和返回结构体的函数之间优先前者。以下片段显示如何在节点上创建多个输出引脚：
UFUNCTION(BlueprintCallable, Category = "Example Nodes")
static void MultipleOutputs(int32& OutputInteger, FVector& OutputVector);


// 可在现有函数上添加新参数，但如果要进行移除或变更，则需要否决原始函数并添加一个新函数。必须使用否决元数据，使新函数的信息显示在蓝图中：
UFUNCTION(BlueprintCallable, Category="Collision", meta=(DeprecatedFunction, DeprecationMessage = "Use new CapsuleOverlapActors", WorldContext="WorldContextObject", AutoCreateRefTerm="ActorsToIgnore"))
static ENGINE_API bool CapsuleOverlapActors_DEPRECATED(UObject* WorldContextObject, const FVector CapsulePos, float Radius, float HalfHeight, EOverlapFilterOption Filter, UClass* ActorClassFilter, const TArray<AActor*>& ActorsToIgnore, TArray<class AActor*>& OutActors);


// 如果函数需要接受枚举，考虑将"expand enum as execs"用作元数据，可使节点更易于使用。
UFUNCTION(BlueprintCallable, Category = "DataTable", meta = (ExpandEnumAsExecs="OutResult", DataTablePin="CurveTable"))
static void EvaluateCurveTableRow(UCurveTable* CurveTable, FName RowName, float InXY, TEnumAsByte<EEvaluateCurveTableResult::Type>& OutResult, float& OutXY);


// 许多完成耗时较长的操作（如 move here）均为隐藏函数。
/** 
 * 执行带延迟的隐藏操作。
 * 
 * @param WorldContext  世界背景。
 * @param Duration      延迟长度。
 * @param LatentInfo    隐藏操作。
 */
UFUNCTION(BlueprintCallable, Category="Utilities|FlowControl", meta=(Latent, WorldContext="WorldContextObject", LatentInfo="LatentInfo", Duration="0.2"))
static void Delay(UObject* WorldContextObject, float Duration, struct FLatentActionInfo LatentInfo );

// 如有可能，考虑将函数放入共享库。便于在多个类之间使用，避开"target"引脚。
class DOCUMENTATIONCODE_API UTestBlueprintFunctionLibrary : public UBlueprintFunctionLibrary

// 尽可能将节点标记为纯，可避免在节点上使用连线的执行引脚。
/* 在 0 和 最大 - 1 之间返回一致分配的随机数 */
UFUNCTION(BlueprintPure, Category="Math|Random")
static int32 RandomInteger(int32 Max);

// 将一个函数标记为 const 也可使蓝图节点不带执行引脚：
/**
 * 获得 actor 到世界的转换。
 * @return 从 actor 空间转换到世界空间的转换。
 */
UFUNCTION(BlueprintCallable, meta=(DisplayName = "GetActorTransform"), Category="Utilities|Transformation")
FTransform GetTransform() const;
```

API 函数作为类成员向蓝图公开，Category 指定蓝图创建节点时搜索列表中的分类，竖线表示多个分组的分隔符号。

可以使用以下方法在屏幕或控制台打印测试消息：

```C++
int32 AMyPawn::RandomInteger(int32 Max){
    // Console Log:
    // UE_LOG(LogTemp, Warning, TEXT("TODO: int32 AMyPawn::RandomInteger(int32 Max)"));
    // UE_LOG(YourLog, Warning, TEXT("This is a message to yourself during runtime!"));

    // On Screen:
    if(GEngine != nullptr)
    {
        GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("This is an on screen message!"));
        // GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, FString::Printf(TEXT("Some variable values: x: %f, y: %f"), x, y));
        // UKismetSystemLibrary::PrintString
    }
    return Max;
}
```

要调用蓝图定义的函数，只需要在 C++ 头文件中声明函数，并且使用说明符 `BlueprintImplementableEvent`，这个标记告诉引擎生成中间代码，自动调用蓝图 VM 的相应功能。打开蓝图编辑器查看，这个函数名对应的是蓝图可执行事件。注意，该函数不需要在 C++ 类中实现，只要在需要的位置调用这个函数即可。如果蓝图没有实现该函数，则函数行为就像 C++ 空函数体一样，不执行任何操作。

如果想要提供 C++ 函数的默认实现，同时仍允许蓝图覆盖此函数，则需要另一个说明符 `BlueprintNativeEvent`。该说明符仍会自动生成 C++ 函数的基本实现，但是同时还会生成一个新的函数声明，函数名类似于 MyFunctionName_Implementation()。必须实现该函数，否则项目无法建立联接。

代码应用有清晰且准确的注释，`/**` 开头这样特定的注释格式可提供自动文档系统生成编辑器的 Tooltips。

最后提醒一下，Category 是必须指定的，否则在蓝图列表中不会有相应的 API 函数，反倒是 Blueprintable 可以不用，除非要想蓝图能够实现指定的接口。


## ⚡ Blueprint Function Libraries 蓝图函数库
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/BlueprintFunctionLibraries/

在开发过程中，你通常会发现需要通过函数集简化项目开发。这些函数通常无状态，可在多种游戏性代码之间重复使用。C++ 可以将游戏对象的函数和属性对蓝图公开。然而，如果需要公开共享这些工具函数，则不需要将它们和一种特定的游戏性对象类型捆绑在一起。对于这类情况，我们使用蓝图函数库。

蓝图函数库是一个静态函数的合集，提供不与特定游戏性对象绑定的效用功能。这些库可群组化为逻辑函数集，如 AI 蓝图库，或包含提供多种不同功能区域访问的函数，如系统蓝图库。

创建蓝图函数库与使用 *UFUNCTION()* 宏对蓝图公开函数十分相似。只需要继承 *UBlueprintFunctionLibrary*，而非派生自 Actor 或 UObject，而且只应包含静态方法。

以下代码是分析蓝图库的一个片段，展示如何设置库类。

```C++
UCLASS()
class UAnalyticsBlueprintLibrary : public UBlueprintFunctionLibrary
{
    GENERATED_UCLASS_BODY()
    /** 在不指定自定义属性的情况下开始分析会话 */
    UFUNCTION(BlueprintCallable, Category="Analytics")
    static bool StartSession();
}
```

正如上例所示，蓝图函数库为 *UObject* 间接派生类，因此需要标准 *UCLASS()* 和 *GENERATED_UCLASS_BODY()* 宏。还要为可从蓝图进行调用的函数上添加 *UFUNCTION()* 宏。蓝图函数库中的函数可被设计为 *BlueprintCallable* 或 *BlueprintPure*，取决于调用是否存在副作用。完整源代码在 AnalyticsBlueprintLibrary 文件中。

此处为 StartSession() 函数的实现：

```C++
bool UAnalyticsBlueprintLibrary::StartSession()
{
    TSharedPtr<IAnalyticsProvider> Provider = FAnalytics::Get().GetDefaultConfiguredProvider();
    if (Provider.IsValid())
    {
        return Provider->StartSession();
    }
    else
    {
        UE_LOG(LogAnalyticsBPLib, Warning, TEXT("StartSession:Failed to get the default analytics provider.Double check your [Analytics] configuration in your INI"));
    }
    return false;
}
```

注意：以上实现与非 UObject 派生的单例对象存在互动。这种方法可将第三方库函数对蓝图公开，或与 UObject 不支持的 C++ 类进行互动。以下代码是蓝图函数库法的一个范例，可执行一些常规操作，为受控 Actor 寻找 AIController：

```C++
AAIController* UAIBlueprintHelperLibrary::GetAIController(AActor* ControlledActor)
{
    APawn* AsPawn = Cast<APawn>(ControlledActor);
    if (AsPawn != nullptr)
    {
        return Cast<AAIController>(AsPawn->GetController());
    }
    return Cast<AAIController>(ControlledActor);
}
```

此函数提取多个蓝图节点的内容，使其变为单个节点。你也可以在蓝图中为其生成一个函数。如经常调用，C++ 版本将达到更佳的性能。



## ⚡ Meta 说明符参考
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Metadata/

声明类、接口、结构体、列举、列举值、函数，或属性时，可添加元数据说明符 来控制其与引擎和编辑器各方面的相处方式。每一种类型的数据结构或成员都有自己专用的的元数据说明符列表。

要添加元数据说明符，需使用单词 `meta`，后接说明符列表。如有必要，可以将它们的值添加到 UCLASS、UENUM、UINTERFACE、USTRUCT、UFUNCTION 或 UPROPERTY 宏，如下所示：

    {UCLASS/UENUM/UINTERFACE/USTRUCT/UFUNCTION/UPROPERTY}(SpecifierX, meta=(MetaTag1="Value1", MetaTag2, ..), SpecifierY)

要添加元数据说明符到列举值，可将 `UMETA` 标签添加到值本身。如果存在用于分隔列举值成员的逗号，则要添加到逗号之前，如下所示：

```cpp
UENUM()
enum class EMyEnum : uint8
{
    // Default Value Tooltip
    DefaultValue = 0 UMETA(MetaTag1="Value1", MetaTag2, ..),

    // ValueWithoutMetaSpecifiers Tooltip
    ValueWithoutMetaSpecifiers,

    // ValueWithMetaSpecifiers Tooltip
    ValueWithMetaSpecifiers UMETA((MetaTag1="Value1", MetaTag2, ..),

    // FinalValue Tooltip
    FinalValue (MetaTag1="Value1", MetaTag2, ..)
};
```

元数据仅存在于编辑器版本中，请不要围绕元数据构建游戏逻辑。


## ⚡ UClass 蓝图类说明符
- Gameplay Classes https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/GameplayArchitecture/Classes
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Classes/Specifiers/

使用 C++ 类声明宏时，可以为声明添加类说明符，以控制类相对于引擎和编辑器的各个方面的行为。

- `Abstract` 说明符会将类声明为"抽象基类"，阻止用户向关卡中添加此类的 Actor。对于单独存在时没有意义的类，对于统一接口规范，此说明符非常有用。
- `AdvancedClassDisplay` 说明符强制类的所有属性仅在显示这些属性的 Details -> Advanced 部分中显示。要覆盖单个属性上的此说明符，在该属性上使用 **SimpleDisplay** 说明符。
- `AutoCollapseCategories=(Category1, Category2, ...)` 说明符使父类上的 **AutoExpandCategories** 说明符的列出类别的效果无效。
- `AutoExpandCategories=(Category1, Category2, ...)` 为此类的对象指定应自动在虚幻编辑器属性窗口中展开的一个或多个类别。要自动展开未使用类别声明的变量，请使用声明变量的类的名称。
- `Blueprintable` 将此类公开为用于创建蓝图的可接受基类。默认为**NotBlueprintable**，除非继承时就并非如此。此说明符由子类继承。
- `BlueprintType` 将此类公开为可用于蓝图中的变量的类型。
- `ClassGroup=GroupName` 指示在虚幻编辑器的 Actor 浏览器中启用 Group View 时，Actor 浏览器应在指定的 GroupName 中包含此类及此类的所有子类。
- `CollapseCategories` 指示此类的属性不应划分到虚幻编辑器属性窗口的类别中。此说明符会传播到子类，可由**DontCollapseCategories**说明符覆盖。
- `Config=ConfigName` 指示此类可在配置文件（.ini）中存储数据。如果存在任何使用**config**或**globalconfig**说明符声明的类属性，此说明符将使这些属性存储在指定的配置文件中。此说明符会传播到所有子类并且无法使此说明符无效，但是子类可通过重新声明**config**说明符并指定配置文件。常见的**ConfigName**值是"Engine"、"Editor"、"Input"和"Game"。
- `Const` 此类中的所有属性和函数都是**const**并且导出为**const**。此说明符由子类继承。
- `ConversionRoot` 根转换，将子类限制为仅可沿层级向上转换为第一个根类的子类。
- `CustomConstructor` 阻止构造函数声明自动生成。
- `DefaultToInstanced` 此类的所有实例都被认为是"实例化的"。实例化的类（组件）将在构造时被复制。此说明符由子类继承。
- `DependsOn=(ClassName1, ClassName2, ...)` 列出的所有类将先于此类被编译。提供的类名必须指示同一个或前一个包中的类。可以使用单个`DependsOn`行（以逗号分隔）来标识多个依赖类，或者可以通过为每个类使用单独的**DependsOn**行来指定多个依赖类。当某个类使用在另一个类中声明的结构体或枚举时，这非常重要，因为编译器仅知道它已编译了类中的哪些部分。
- `Deprecated` 此类已弃用，序列化时将不保存此类的对象。此说明符由子类继承。
- `DontAutoCollapseCategories=(Category, Category, ...)` 使列出的类别的继承自父类的**AutoCollapseCategories**说明符无效。
- `DontCollapseCategories` 使继承自基类的`CollapseCatogories`说明符无效。
- `EditInlineNew` 指示可以从虚幻编辑器 Property 窗口创建此类的对象，而非从现有资源引用。默认行为是仅可通过 Property 窗口指定对现有对象的引用。此说明符会传播到所有子类；子类可通过 **NotEditInlineNew** 说明符覆盖它。
- `HideCategories=(Category1, Category2, ...)` 列出一个或多个应该对用户完全隐藏的分类。要隐藏未使用类别声明的属性，请使用声明变量的类的名称。此说明符会传播到子类。
- `HideDropdown` 阻止此类在属性窗口组合框中显示。
- `HideFunctions=(Category1, Category2, ...)` 让指定分类中的所有函数都对用户完全隐藏。
- `HideFunctions=FunctionName` 将提到的函数对用户完全隐藏。
- `Intrinsic` 指示此类直接在 C++ 中声明，无 Unreal Header Tool 生成的样板。请勿在新类上使用此说明符。
- `MinimalAPI` 导致仅导出此类的类型信息，以供其他模块使用。可以以此类为目标进行强制转换，但此类的函数无法被调用（除了使用内联方法）。这可以缩短编译时间，因为没有针对无需从其他模块访问其所有函数的类导出一切。
- `NoExport` 指示此类的声明不应包含在由标头生成器自动生成的 C++ 头文件中。必须在单独的头文件中手动定义该 C++ 类声明。仅对本地类有效。请勿对新类使用此说明符。
- `NonTransient` 使继承自基类的**Transient**说明符无效。
- `NotBlueprintable` 指定此类不是可用于创建蓝图的可接受基类。此为默认说明符，将由子类继承。
- `NotPlaceable` 使继承自基类的**Placeable**说明符无效。指示不可以在编辑器中将此类的对象放置到关卡、UI场景或蓝图中。
- `PerObjectConfig` 此类的配置信息将按对象存储，在 .ini 文件中，每个对象都有一个分段，根据对象命名，格式为[ObjectName ClassName]。此说明符会传播到子类。
- `Placeable` 指示可在编辑器中创建此类，而且可将此类放置到关卡、UI场景或蓝图（取决于类类型）中。此标志会传播到所有子类；子类可使用**NotPlaceable**说明符覆盖此标志。
- `ShowCategories=(Category1, Category2, ...)` 使列出的类别的继承自基类的**HideCategories**说明符无效。
- `ShowFunctions=(Category1, Category2, ...)` 在属性查看器中显示列出的类别中的所有函数。
- `ShowFunctions=FunctionName` 在属性查看器中显示指定的函数。
- `Transient` 从不将属于此类的对象保存到磁盘。当与播放器或窗口等本质上不持久的特定种类的原生类配合使用时，它非常有用。此说明符会传播到子类，但是可由`NonTransient`说明符覆盖。
- `Within=OuterClassName` 此类的对象无法在**OuterClassName**对象的实例之外存在。这意味着，要创建此类的对象，需要提供**OuterClassName**的一个实例作为其**Outer**对象。

类可以使用以下元标签说明符：

- `BlueprintSpawnableComponent` 如其存在，组件类可由蓝图生成。
- `BlueprintThreadSafe` 只在蓝图函数库上有效。此说明符将把此类中的函数在动画蓝图中的非游戏线程上标记为可调用。
- `ChildCannotTick` 用于 Actor 和组件类。如果本地类无法 tick，那么基于此 Actor 或组件的蓝图生成类则无法 tick，即使 bCanBlueprintsTickByDefault 为 true 也同样如此。
- `ChildCanTick` 用于 Actor 和组件类。如果本地类无法 tick，那么可以覆盖基于此 Actor 或组件的蓝图生成类的 bCanEverTick 标签，即使 bCanBlueprintsTickByDefault 为 false 也同样如此。
- `DeprecatedNode` 用于行为树节点，说明类已废弃，编译时将显示一条警告。
- `DeprecationMessage="Message Text"` 如果类已废弃，尝试编译使用此类的蓝图时，其将被添加到标准废弃警告。
- `DisplayName="Blueprint Node Name"` 设置友好名称，此节点在蓝图中的命名将被此处提供的值所取代，而非代码生成的命名。
- `DontUseGenericSpawnObject` 不使用蓝图中的 Generic Create Object 节点来生成类的一个对象。此说明符只有在用于既非 Actor 又非 ActorComponent 的 **BluprintType** 类时才有意义。
- `ExposedAsyncProxy` 在 Async Task 节点中公开此类的一个代理对象。
- `IgnoreCategoryKeywordsInSubclasses` 用于让一个类的首个子类忽略所有继承的 `ShowCategories` 和 `HideCategories` 说明符。
- `IsBlueprintBase="true/false"` 说明此类是否为创建蓝图的一个可接受基类，与 UCLASS 说明符、`Blueprintable` 或 `NotBlueprintable` 相似。
- `KismetHideOverrides="Event1, Event2, .."` 不允许被覆盖的蓝图事件的列表。
- `ProhibitedInterfaces="Interface1, Interface2, .."` 列出与类不兼容的接口。
- `RestrictedToClasses="Class1, Class2, .."` 由蓝图函数库类使用，用于限制列表中命名类的用法。
- `ShortToolTip="Short tooltip"` 完整提示文本过长时使用的简短提示文本，例如父类选取器对话。
- `ShowWorldContextPin` 说明放置在此类拥有的图表中的蓝图节点必须显式其 World 情景引脚（即使其通常状态下为隐藏也同样如此），因为此类的对象无法被用作 World 情景。
- `UsesHierarchy` 说明类使用层级数据。用于实例化"细节"面板中的层级编辑功能。
- `ToolTip="Hand-written tooltip"` 覆盖从代码注释自动生成的提示文本。



## ⚡ UInterface 蓝图接口
- GmaePlay 架构 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture
- GmaePlay 架构 Interfaces https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Interfaces/

接口类有助于确保一组（可能）不相关的类实现一组通用函数。例如，某个游戏可能有这样一个系统，依靠该系统输入一个触发器体积可以激活陷阱、警告敌人或向玩家奖励点数。这可以通过针对陷阱、敌人和点数奖励器执行 ReactToTrigger 函数来实现。然而，这个陷阱对象可能派生自 `AActor` ，敌人可能派生自专门的 `APawn` 或 `ACharacter` 子类，点数奖励可能派生自 `UDataAsset` 。所有这些类都需要共享同一功能，但它们没有除 `UObject` 之外的共同上级。在这种情况下，推荐使用接口，所有实现同一接口的对象具有同样的功能。

声明接口类与声明普通的虚幻类相似，但仍有两个主要区别。首先，接口类使用 `UINTERFACE` 宏而不是 `UCLASS` 宏，且直接继承 `UInterface` 而不是它的父类 `UObject`。

```cpp
UINTERFACE([specifier, specifier, ...], [meta(key=value, key=value, ...)])
class UClassName : public UInterface
{
    GENERATED_BODY()
};
```

其次，UINTERFACE 类不是实际的接口；它是一个空白类，它的存在只是为了向虚幻引擎反射系统确保可见性。将由其他类继承的实际接口必须具有相同的类名，但是开头字母 U 必须改为 I。前缀为 U 的类不需要构造函数或任何其他函数，而前缀为 I 的类将包含所有接口函数，且此类实际上将被其他类继承。

在头文件（例如"ReactToTriggerInterface.h"）中：

```cpp
#pragma once

#include "ReactToTriggerInterface.generated.h"

UINTERFACE(MinimalAPI, Blueprintable)
c除非要想蓝图能够实现指定的接口lassUReactToTriggerInterface : public UInterface
{
    GENERATED_BODY()
};

class IReactToTriggerInterface
{    
    GENERATED_BODY()

public:
    /** 在此处添加接口函数声明 */
    virtual bool ReactToTrigger();
};
```

接口说明符：

- `Blueprintable` 则必须使用**Blueprintable**元数据说明符。蓝图类要覆盖的每个接口函数都必须是**BlueprintNativeEvent**或**BlueprintImplementableEvent**。标记为**BlueprintCallable**的函数仍然可以被调用，但不能被覆盖，但无法从蓝图访问所有其他函数。
- `BlueprintType` 将该类公开为可用于蓝图中的变量的类型。
- `DependsOn=(ClassName1, ClassName2, ...)` 所有列出的类都将在该类之前编译。ClassName 必须在同一个（或上一个）包中指定一个类。多个依赖性类可以使用以逗号分隔的单个"DependsOn"行来指定，也可以使用单个"DependsOn"行为每个类指定。当一个类使用在另一个类中声明的结构体或枚举时，这一点非常重要，因为编译器只知道它已经编译的类中的内容。
- `MinimalAPI` 仅导致该类的类型信息被导出以供其他模块使用。您可以向该类转换，但不能调用该类的函数（内联方法除外）。对于不需要其所有函数在其他模块中均可供访问的类，通过不导出这些类的所有内容，这可以缩短编译时间。

示范，C++ 中实现 GamePlay 接口，只需从前缀为 I 的接口类继承（除了您正在使用的任何基于"UObject"的类）即可。

```cpp
// Trap.h
#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "ReactToTriggerInterface.h"
#include "Trap.generated.h"

UCLASS(Blueprintable, Category="MyGame")
class ATrap : public AActor, public IReactToTriggerInterface
{
    GENERATED_BODY()

public:
    /** Add interface function overrides here. */
    virtual bool ReactToTrigger() override;
}
```

可以在接口的头文件中声明一个不带 UFUNCTION 说明的虚拟 C++ 函数。这些函数必须为虚拟的，以便在实现接口的类中覆盖它们。但是，这些 C++ 接口函数对蓝图不可见。

要创建蓝图可调用的接口函数，必须在带 `BlueprintCallable` 说明符的函数声明中提供一个 `UFUNCTION` 宏。还必须使用 `BlueprintImplementableEvent` 或 `BlueprintNativeEvent` 说明，而且不能为虚函数。

```cpp
public:
/**只能在蓝图中实现的 ReactToTrigger 版本。*/
UFUNCTION(BlueprintCallable, BlueprintImplementableEvent, Category=Trigger Reaction)
bool ReactToTrigger();

public:
/**可以在 C++ 或蓝图中实现的 ReactToTrigger 版本。*/
UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category=Trigger Reaction)
bool ReactToTrigger();
```

接口函数使用的说明符：

- `BlueprintCallable` 引用实现接口的对象的C++或蓝图可以调用使用 BlueprintCallable 说明符的函数。
- `BlueprintImplementableEvent` 表示函数不能在 C++ 中被腹杆，但可以任何实现或继承接口的蓝图类中被覆盖。
- `BlueprintNativeEvent` 表示可以在 C++ 中覆盖实现一个同名函数，但要在末尾添加上后缀 `_Implementation`。

C++ 实现 `BlueprintNativeEvent` 函数参考代码：

```cpp
// Trap.h
public:
bool ReactToTrigger_Implementation() override;

// Trap.cpp
bool ATrap::ReactToTrigger_Implementation() const
{
    return false;
}
```

为了与实现接口的 C++ 和蓝图类兼容，可以使用以下任意函数判断是否实现了接口：

```cpp
bool bIsImplemented = OriginalObject->GetClass()->ImplementsInterface(UReactToTriggerInterface::StaticClass()); 
// 如果 OriginalObject 实现了 UReactToTriggerInterface，则 bisimplemated 将为 true。

bIsImplemented = OriginalObject->Implements<UReactToTriggerInterface>(); 
// 如果 OriginalObject 实现了 UReactToTrigger，bIsImplemented 将为 true。

IReactToTriggerInterface* ReactingObject = Cast<IReactToTriggerInterface>(OriginalObject); 
// 如果 OriginalObject 实现了 UReactToTriggerInterface，则 ReactingObject 将为非空。
```

如果 StaticClass 函数在前缀为 I 的类中没有实现，尝试在前缀为 U 的类上使用 Cast 将失败，代码将无法编译。

虚幻引擎的转换系统支持从一个接口转换到另一个接口，或者在适当的情况下，从一个接口转换到一个虚幻类型。

```cpp
IReactToTriggerInterface* ReactingObject = Cast<IReactToTriggerInterface>(OriginalObject); 
// 如果接口被实现，则 ReactingObject 将为非空。

ISomeOtherInterface* DifferentInterface = Cast<ISomeOtherInterface>(ReactingObject); 
// 如果 ReactingObject 为非空而且还实现了 ISomeOtherInterface，则 DifferentInterface 将为非空。

AActor* Actor = Cast<AActor>(ReactingObject); 
// 如果 ReactingObject 为非空且 OriginalObject 为 AActor 或其派生的类，则 Actor 将为非空。
```

## ⚡ UStructs 结构体说明符参考
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Structs/

结构体是可以帮助你整理和操作相关属性的数据结构，使用结构体创建自定义变量类型，以便帮助整理项目。

虚幻引擎 4 中的结构体属于引擎的反射系统，但不属于 UObject 生态圈的一部分。因此，创建它们要比在同样的数据布局中创建 UObject 更快，且支持 UProperties，但无法被垃圾回收系统处理，也不能提供 UFunctions。注意，UStructs 无法在类中使用。

要将一个 C++ 结构体变成 UStruct，需在结构体定义上方加入 **USTRUCT** 标签，并在结构体定义的第一行中包含 **GENERATED_BODY()**，如下所示：

```C++
USTRUCT([Specifier, Specifier, ...])
struct FStructName
{
    GENERATED_BODY()
};
```

现在，你可以使用 UPROPERTY 标记结构体的成员变量，以便使其对 UE 的反射系统和蓝图脚本可见。

实现结构体示例：

```C++
USTRUCT(BlueprintType)
struct FMyStruct
{
    GENERATED_BODY()

    //~ 蓝图图表可以访问以下成员变量：
    // 这是我们测试变量的提示文本。
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Test Variables")
    int32 MyIntegerMemberVariable;

    //~ 蓝图图表无法访问以下成员变量：
    int32 NativeOnlyMemberVariable;

    //~ 蓝图图表无法访问此 UObject 指针，但是指针对 UE4 的反射、智能指针和垃圾回收系统 见。
    UPROPERTY()
    UObject* SafeObjectPointer;
};
```

以下是一些有用的提示和使用结构体时要记住的事情：

- Ustructs 可以使用 UE 的智能指针和垃圾回收系统防止 Uobjects 被垃圾回收删除。
- 结构体与 Uobjects 不同，原因在于此类结构体最适用于简单的数据类型。
- 对于项目中更复杂的交互，可能要创建 UObject 或 AActor 子类。
- 不要考虑对 UStructs 使用复制，这可能导致数据对象的管理失控。
- 复制时可考虑 UProperty 变量。
- UE 能够为结构体自动创建 **Make** 和 **Break** 函数。
- 对于带有 BlueprintType 标签的任何 UStruct 都会显示 Make 函数。
- 如果 UStruct 中至少有一个 BlueprintReadOnly 或 BlueprintReadWrite 属性，则会显示 Break。
- Break 创建的纯节点会为每个标记为 BlueprintReadOnly 或 BlueprintReadWrite 的属性提供一个输出引脚。

结构体说明符：

- `Atomic` 表面此结构体应该永远序列化为单个对象。不会为该类创建自动生成代码；只为稀疏元数据提供头文件。
- `BlueprintType` 将此结构体作为可以在蓝图中被用于变量的类型公开。
- `Immutable` 不可变说明符只在 Object.h 中有效，并且在逐渐被淘汰，请不要在新的结构体上使用它！
- `NoExport` 不会为该类创建自动生成代码；只为稀疏元数据提供头文件。

元数据说明符的使用参考 UClass，每一种类型的数据结构或成员都有自己的元数据说明符列表。


## ⚡ UFUNCTION 说明符参考
- UFUNCTION https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Functions/

声明函数时，可以为声明添加 函数说明符，以控制函数相对于引擎和编辑器的各个方面的行为方式。

函数说明符：

- `BlueprintAuthorityOnly` 如果在具有网络权限的机器上运行（服务器、专用服务器或单人游戏），此函数将仅从蓝图代码执行。
- `BlueprintCallable` 此函数可在蓝图或关卡蓝图图表中执行。
- `BlueprintCosmetic` 此函数为修饰性的，无法在专用服务器上运行。
- `BlueprintImplementableEvent` 此函数可在蓝图或关卡蓝图图表中实现。
- `BlueprintNativeEvent` 此函数旨在被蓝图覆盖掉，但是也具有默认原生实现。用于声明名称与主函数相同的附加函数，但是末尾添加了 Implementation，是写入代码的位置。如果未找到任何蓝图覆盖，该自动生成的代码将调用 Implementation 方法。
- `BlueprintPure` 此函数不对拥有它的对象产生任何影响，可在蓝图或关卡蓝图图表中执行。
- `CallInEditor` 可通过细节（Details）面板`中的按钮在编辑器中的选定实例上调用此函数。
- `Category = "TopCategory|SubCategory|Etc"` 在蓝图编辑工具中显示时指定函数的类别。使用 | 运算符定义嵌套类别。
- `Client` 此函数仅在拥有在其上调用此函数的对象的客户端上执行。用于声明名称与主函数相同的附加函数，但是末尾添加了 Implementation。必要时，此自动生成的代码将调用 Implementation 方法。
- `CustomThunk` UnrealHeaderTool 代码生成器将不为此函数生成thunk，用户需要自己通过 DECLARE_FUNCTION 或 DEFINE_FUNCTION 宏来提供thunk。
- `Exec` 此函数可从游戏内控制台执行。仅在特定类中声明时，Exec命令才有效。
- `NetMulticast` 此函数将在服务器上本地执行，也将复制到所有客户端上，无论该Actor的 NetOwner 为何。
- `Reliable` 此函数将通过网络复制，并且一定会到达，即使出现带宽或网络错误。仅在与`Client`或`Server`配合使用时才有效。
- `SealedEvent` 无法在子类中覆盖此函数。SealedEvent 关键词只能用于事件。对于非事件函数，请将它们声明为`static`或`final`，以密封它们。
- `ServiceRequest` 此函数为RPC（远程过程调用）服务请求。这意味着 NetMulticast 和 Reliable。
- `ServiceResponse` 此函数为RPC服务响应。这意味着 NetMulticast 和 Reliable。
- `Server` 此函数仅在服务器上执行。用于声明名称与主函数相同的附加函数，但是末尾添加了 `_Implementation`，是写入代码的位置。必要时，此自动生成的代码将调用 `_Implementation` 方法。
- `Unreliable` 此函数将通过网络复制，但是可能会因带宽限制或网络错误而失败。仅在与`Client`或`Server`配合使用时才有效。
- `WithValidation` 用于声明名称与主函数相同的附加函数，但是末尾需要添加`_Validate`。此函数使用相同的参数，但是会返回`bool`，以指示是否应继续调用主函数。

函数可以使用的元数据说明符：

- `AdvancedDisplay="Parameter1, Parameter2, .."` 以逗号分隔的参数列表将显示为高级引脚（需要UI扩展）。
- `AdvancedDisplay=N` 用一个数字替代 N ，第N之后的所有参数将显示为高级引脚（需要UI扩展）。举例而言：'AdvancedDisplay=2' 将把前两个之外的所有参数标记为高级。
- `ArrayParm="Parameter1, Parameter2, .."` 说明蓝图可调函数应使用一个Call Array Function节点，且列出的参数应被视为通配符数组属性。
- `ArrayTypeDependentParams="Parameter"` 使用 ArrayParm 时，此说明符将指定一个参数，其将确定 ArrayParm 列表中所有参数的类型。
- `AutoCreateRefTerm="Parameter1, Parameter2, .."` 如列出参数（由引用传递）的引脚未连接，其将拥有一个自动创建的默认项。这是蓝图的一个便利功能，经常在数组引脚上使用。
- `BlueprintAutocast` 仅能由来自蓝图函数库的静态 BlueprintPure 函数使用。Cast节点将根据返回类型和函数首个参数的类型来自动添加。
- `BlueprintInternalUseOnly` 此函数是一个内部实现细节，用于实现另一个函数或节点。其从未直接在蓝图图表中公开。
- `BlueprintProtected` 此函数只能在蓝图中的拥有对象上调用。其无法在另一个实例上调用。
- `CallableWithoutWorldContext` 用于拥有一个 WorldContext 引脚的蓝图可调函数，说明函数可被调用，即使其类不实现 GetWorld 函数也同样如此。
- `CommutativeAssociativeBinaryOperator` 说明蓝图可调函数应使用Commutative Associative Binary节点。此节点缺少引脚命名，但拥有一个创建额外输入引脚的 Add Pin 按钮。
- `CompactNodeTitle="Name"` 说明蓝图可调函数应在压缩显示模式中显示，并提供在该模式中显示的命名。
- `CustomStructureParam="Parameter1, Parameter2, ..")` 列出的参数都会被视为通配符。此说明符需要 UFUNCTION-level specifier、CustomThunk，而它们又需要用户提供自定义的 exec 函数。在此函数中，可对参数类型进行检查，可基于这些参数类型执行合适的函数调用。永不应调用基础 UFUNCTION，出现错误时应进行断言或记录。要声明自定义 exec 函数，使用语法 DECLARE_FUNCTION(execMyFunctionName)，MyFunctionName 为原函数命名。
- `DefaultToSelf` 用于蓝图可调函数，说明对象属性的命名默认值应为节点的自我情境。
- `DeprecatedFunction` 蓝图对此函数进行引用时将引起编译警告，告知用户函数已废弃。可使用 DeprecationMessage 元数据说明符添加到废弃警告消息（如提供说明如何替代已废弃的函数）。
- `DeprecationMessage="Message Text"` 如果函数已废弃，尝试编译使用此函数的蓝图时，其将被添加到标准废弃警告。
- `DevelopmentOnly` 被标记为 DevelopmentOnly 的函数只会在Development模式中运行。这适用于调试输出之类的功能（但其不应存在于发布产品中）。
- `DisplayName="Blueprint Node Name"` 此节点在蓝图中的命名将被此处提供的值所取代，而非代码生成的命名。
- `ExpandEnumAsExecs="Parameter"` 用于蓝图可调函数，说明应为参数使用的 列举 中的每个条目创建一个输入执行引脚。命名参数必须是引擎通过 UENUM 标签识别的一个列举类型。
- `HidePin="Parameter"` 用于蓝图可调函数，说明参数引脚应从用户视图中隐藏。注意：使用此方式每个函数只能隐藏一个参数引脚。
- `HideSelfPin` 隐藏用于指出函数调用所处对象的self引脚。self引脚在与调用蓝图的类兼容的 BlueprintPure 函数上为自动隐藏状态。这通常与 DefaultToSelf 说明符共用。
- `InternalUseParam="Parameter"` 与 HidePin 相似，这将在用户视图中隐藏命名参数的引脚，只能用于一个函数的一个参数。
- `KeyWords="Set Of Keywords"` 指定在搜索此函数时可使用的一套关键词，例如合适放置节点在蓝图图表中调用函数。
- `Latent` 说明一个延迟操作。延迟操作拥有类型为 FLatentActionInfo 的一个参数，此参数由 LatentInfo 说明符命名。
- `LatentInfo="Parameter"` 用于延迟蓝图可调函数，说明哪个参数是LatentInfo参数。
- `MaterialParameterCollectionFunction` 用于蓝图可调函数，说明应使用材质覆盖节点。
- `NativeBreakFunc` 用于蓝图可调函数，说明函数应以标准Break Struct节点的方式进行显示。
- `NotBlueprintThreadSafe` 只在蓝图函数库中有效。此函数将被视为拥有类的整体 BlueprintThreadSafe 元数据的一个例外。
- `ShortToolTip="Short tooltip"` 完整提示文本过长时使用的简短提示文本，例如父类选取器对话。
- `ToolTip="Hand-written tooltip` 覆盖从代码注释自动生成的提示文本。
- `UnsafeDuringActorConstruction` 在Actor构造时调用此函数并非安全操作。
- `WorldContext="Parameter"` 由蓝图可调函数使用，说明哪个参数决定运算正在发生的World。

函数参数说明符

 - `Out` 声明由引用传递的参数，使函数对其进行修改。
 - `Optional` 通过任选关键词可使部分函数参数变为任选，便于调用。

 任选参数的数值（调用方未指定）取决于函数。例如，SpawnActor 函数使用任选位置和旋转，默认为生成的 Actor 根组件的位置和旋转。添加 = [value] 参数可指定任选参数的默认值。例如：function myFunc(optional int x = -1)。在多数情况下，如无数值被传递到任选参数，将使用变量类型的默认值或零（例如 0、false、""、none）。


## ⚡ UPROPERTY 说明符参考
- UPROPERTY https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Properties

声明属性时，属性说明符 可被添加到声明，以控制属性与引擎和编辑器诸多方面的相处方式。

属性说明符参考： 

- `AdvancedDisplay` 属性将被放置在其出现的任意面板的高级（下拉）部分中。
- `AssetRegistrySearchable` 说明此属性与其值将被自动添加到将此包含为成员变量的所有资源类实例的资源注册表。不可在结构体属性或参数上使用。
- `BlueprintAssignable` 只能与组播委托共用。公开属性在蓝图中指定。
- `BlueprintAuthorityOnly` 此属性必须为一个组播委托。在蓝图中，其只接受带 BlueprintAuthorityOnly 标签的事件。
- `BlueprintCallable` 仅用于组播委托。应公开属性在蓝图代码中调用。
- `BlueprintGetter`=GetterFunctionName 此属性指定一个自定义存取器函数。如此属性不带 BlueprintSetter 或 BlueprintReadWrite 标签，则其为隐式 BlueprintReadOnly。 
- `BlueprintReadOnly` 此属性可由蓝图读取，但不能被修改。此说明符与 BlueprintReadWrite 说明符不兼容。
- `BlueprintReadWrite` 可从蓝图读取或写入此属性。此说明符与 BlueprintReadOnly 说明符不兼容。
- `BlueprintSetter=SetterFunctionName` 此属性拥有一个自定义编译函数，被隐式标记为 BlueprintReadWrite。注意：必须对变异函数进行命名，并为相同类的一部分。
- `Category="TopCategory|SubCategory|..."` 指定在蓝图编辑工具中显示时的属性类别。使用 | 运算符定义嵌套类目。
- `Config` 此属性将被设为可配置。当前值可被存入与类相关的 .ini 文件中，创建后将被加载。无法在默认属性中给定一个值。暗示为 BlueprintReadOnly。
- `DuplicateTransient` 说明在任意类型的复制中（复制/粘贴、二进制复制等），属性的值应被重设为类默认值。
- `EditAnywhere` 说明此属性可通过属性窗口在原型和实例上进行编辑。此说明符与所有"可见"说明符均不兼容。
- `EditDefaultsOnly` 说明此属性可通过属性窗口进行编辑，但只能在原型上进行。此说明符与所有"可见"说明符均不兼容。
- `EditFixedSize` 只适用于动态数组。这能防止用户通过虚幻编辑器属性窗口修改数组长度。
- `EditInline` 允许用户在虚幻编辑器的属性查看器中编辑此属性所引用的Object的属性（只适用于Object引用，包括Object引用的数组）。
- `EditInstanceOnly` 说明此属性可通过属性窗口进行编辑，但只能在实例上进行，不能在原型上进行。此说明符与所有"可见"说明符均不兼容。
- `Export` 只适用于Object属性（或Object数组）。说明Object被复制时（例如复制/粘贴操作）指定到此属性的Object应整体导出为一个子Object块，而非只是输出Object引用本身。
- `GlobalConfig` 工作原理与 Config 相似，不同点是无法在子类中进行覆盖。无法在默认属性中对其给定一个值。暗示为 BlueprintReadOnly。
- `Instanced` 仅限Object（UCLASS）属性。此类的一个实例创建时，其将被给定一个Object的特殊副本，指定到默认项中的此属性。用于实例化类默认属性中定义的子Object。暗示为 EditInline 和 Export。
- `Interp` 说明值可随时间由*Sequencer*中的一个轨道驱动。
- `Localized` 此属性的值将拥有一个定义的本地化值。多用于字符串。暗示为 ReadOnly。
- `Native` 属性为本地：C++代码负责对其进行序列化并公开到垃圾回收。
- `NoClear` 阻止从编辑器将此Object引用设为空。隐藏编辑器中的清除（和浏览）按钮。
- `NoExport` 只适用于本地类。此属性不应包含在自动生成的类声明中。
- `NonPIEDuplicateTransient` 属性将在复制中被重设为默认值，除非其被复制用于PIE会话。
- `NonTransactional` 说明对此属性值的修改不会包含在编辑器的撤销/重新执行历史中。
- `NotReplicated` 跳过复制。这只会应用到服务请求函数中的结构体成员和参数。
- `Replicated` 属性应随网络进行复制。 
- `ReplicatedUsing=FunctionName`  指定一个回调函数，其在属性通过网络更新时执行。
- `RepRetry` 只适用于结构体属性。如果此属性未能完全发送（举例而言：Object引用尚无法通过网络进行序列化），则重新尝试对其的复制。对简单引用而言，这是默认选择；但对结构体而言，这会产生带宽开销，并非优选项。因此在指定此标签之前其均为禁用状态。
- `SaveGame` 此说明符可简便地将域显式包含，用于属性关卡中的检查点/保存系统。应在作为游戏存档一部分的所有域上设置此标签，并使用代理归档器对其进行读写。
- `SerializeText` 本地属性应被序列化为文本（ImportText、ExportText）。
- `SkipSerialization` 此属性不会被序列化，但仍能导出为一个文本格式（例如用于复制/粘贴操作）。
- `SimpleDisplay` 出现在 细节 面板中的可见或可编辑属性，无需打开"高级"部分即可见。
- `TextExportTransient` 此属性将不会导出为一个文本格式（因此其无法用于复制/粘贴操作）。
- `Transient` 属性为临时，意味着其无法被保存或加载。以此方法标记的属性将在加载时被零填充。
- `VisibleAnywhere` 说明此属性在所有属性窗口中可见，但无法被编辑。此说明符与"Edit"说明符不兼容。
- `VisibleDefaultsOnly` 说明此属性只在原型的属性窗口中可见，无法被编辑。此说明符与所有"Edit"说明符均不兼容。
- `VisibleInstanceOnly` 说明此属性只在实例的属性窗口中可见（在原型属性窗口中不可见），无法被编辑。此说明符与所有"Edit"说明符均不兼容。

属性可使用的元标签，元数据说明符参考：

- `AllowAbstract="true/false"` 用于 Subclass 和 SoftClass 属性。说明抽象类属性是否应显示在类选取器中。
- `AllowedClasses="Class1, Class2, .."` 用于 FSoftObjectPath 属性。逗号分隔的列表，表明要显示在资源选取器中的资源类类型。
- `AllowPreserveRatio` 用于 Fvector 属性。在细节面板中显示此属性时将添加一个比率锁。
- `ArrayClamp="ArrayProperty"` 用于整数属性。将可在UI中输入的有效值锁定在0和命名数组属性的长度之间。
- `AssetBundles` 用于 SoftObjectPtr 或 SoftObjectPath 属性。主数据资源中使用的束列表命名，指定此引用属于哪个束的一部分。
- `BlueprintBaseOnly` 用于 Subclass 和 SoftClass 属性。说明蓝图类是否应显示在类选取器中。
- `BlueprintCompilerGeneratedDefaults` 属性默认项由蓝图编译器生成，CopyPropertiesForUnrelatedObjects 在编译后调用时将不会被复制。
- `ClampMin="N"` 用于浮点和整数属性。指定可在属性中输入的最小值 N。
- `ClampMax="N"` 用于浮点和整数属性。指定可在属性中输入的最大值 N。
- `ConfigHierarchyEditable` 此属性被序列化为一个配置（.ini）文件，可在配置层级中的任意处进行设置。
- `ContentDir` 由 FDirectoryPath 属性使用。说明将使用 Content 文件夹中的Slate风格目录选取器来选取路径。
- `DisplayAfter="PropertyName"` 在蓝图编辑器中，名为 PropertyName 的属性后即刻显示此属性。前提是两个属性属于同一类别，则忽略其在源代码中的顺序进行显示。如多个属性有相同的 DisplayAfter 值和相同的 DisplayPriority 值，将在指定属性之后，按照自身在标头文件中声明的顺序显示。
- `DisplayName="Property Name"` 此属性显示的命名，不显示代码生成的命名。
- `DisplayPriority="N"` 如两个属性有相同的 DisplayAfter 值，或属于同一类别且无 DisplayAfter 元标签，则此属性将决定其顺序。最高优先级值为1，表示 DisplayPriority 值为1的属性将在 DisplayProirity 值为2的属性之上显示。如多个属性有相同的 DisplayAfter 值，其将按照在标头文件中声明的顺序显示。
- `DisplayThumbnail="true"` 说明属性是一个资源类型，其应显示选中资源的缩略图。
- `EditCondition="BooleanPropertyName"` 对一个布尔属性进行命名，此属性用于说明此属性的编辑是否被禁用。将"!"放置在属性命名前可颠倒测试。
- `EditFixedOrder` 使排列的元素无法通过拖拽来重新排序。EditCondition 元标签不再仅限于单个布尔属性。它现在由完全成熟的算式解析器计算，意味着可以包含一个完整的C++表达式。
- `ExactClass="true"` 结合 AllowedClasses 用于 FSoftObjectPath 属性。说明是否只能使用 AllowedClasses 中指定的准确类，或子类是否同样有效。
- `ExposeFunctionCategories="Category1, Category2, .."` 在蓝图编辑器中编译一个函数列表时，指定其函数应被公开的类目的列表。
- `ExposeOnSpawn="true"` 指定此属性是否应在此类类型的一个Spawn Actor节点上公开。
- `FilePathFilter="FileType"` 由 FFilePath 属性使用。说明在文件选取器中显示的路径过滤器。常规值包括"uasset"和"umap"，但这些并非唯一可能的值。
- `GetByRef` 使该属性的"Get"蓝图节点返回对属性的常量引用，而不是其值的副本。只对稀疏类数据生效，只能在不存在 NoGetter 时使用。
- `HideAlphaChannel` 用于 Fcolor 和 FLinearColor 属性。说明详细显示属性控件时 Alpha 属性应为隐藏状态。
- `HideViewOptions` 用于 Subclass 和 SoftClass 属性。隐藏在类选取器中修改显示选项的功能。
- `InlineEditConditionToggle` 表示出布尔属性只内联显示为其他属性中的一个编辑条件切换，不应显示在其自身的行上。
- `LongPackageName` 由 FDirectoryPath 属性使用。将路径转换为一个长的包命名。
- `MakeEditWidget` 用于变换或旋转体属性，或变换/旋转体的排列。说明属性应在视口中公开为一个可移动控件。
- `NoGetter` 防止蓝图为该属性生成一个"get"节点。只对稀疏类数据生效。


## ⚡ FMath & KismetMathLibrary 数学函数库
- 数学运算大厅内容示例 https://docs.unrealengine.com/4.27/zh-CN/Resources/ContentExamples/MathHall/


插值函数是很常见的，*FMath::Lerp<float>(a, b, Alpha)*，通过 Alpha 来调用输出值，介于 a 和 b 之间。源代码参考 KismetMathLibrary.inl 内联函数文件，或者 KismetMathLibrary.h, UnrealMathUtility.h。

```C++
/** Performs a linear interpolation between two values, Alpha ranges from 0-1 */
template< class T, class U > 
static FORCEINLINE_DEBUGGABLE T Lerp( const T& A, const T& B, const U& Alpha )
{
    return (T)(A + Alpha * (B-A));
}

/** Performs a 2D linear interpolation between four values values, FracX, FracY ranges from 0-1 */
template< class T, class U > 
static FORCEINLINE_DEBUGGABLE T BiLerp(const T& P00,const T& P10,const T& P01,const T& P11, const U& FracX, const U& FracY)
{
    return Lerp(
        Lerp(P00,P10,FracX),
        Lerp(P01,P11,FracX),
        FracY
        );
}

KISMET_MATH_FORCEINLINE
float UKismetMathLibrary::Lerp(float A, float B, float V)
{
    return A + V*(B-A);
}

/**
 * Linearly interpolates between two colors by the specified Alpha amount (100% of A when Alpha=0 and 100% of B when Alpha=1).  The interpolation is performed in HSV color space taking the shortest path to the new color's hue.  This can give better results than a normal lerp, but is much more expensive.  The incoming colors are in RGB space, and the output color will be RGB.  The alpha value will also be interpolated.
 * 
 * @param   A       The color and alpha to interpolate from as linear RGBA
 * @param   B       The color and alpha to interpolate to as linear RGBA
 * @param   Alpha   Scalar interpolation amount (usually between 0.0 and 1.0 inclusive)
 * 
 * @return  The interpolated color in linear RGB space along with the interpolated alpha value
 */
UFUNCTION(BlueprintPure, meta=(DisplayName = "Lerp Using HSV (LinearColor)", ScriptMethod = "LerpUsingHSVTo"), Category="Math|Color")
static FLinearColor LinearColorLerpUsingHSV(FLinearColor A, FLinearColor B, float Alpha);
```



# 🌟 C++ Demos 示范教程
- CPP Tutorials https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/



## ⚡ AutoCamera 摄像机控制
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/AutoCamera/

本教程将会向你展示如何激活摄像机以及如何切换你激活的摄像机。

利用你所学到知识，尝试执行以下操作：

- 将摄像机附加到移动Actor上来创建摇臂或移动车镜头。
- 使用一个数组变量来存储摄像机，而不是 CameraOne 和 CameraTwo，这样你就可以遍历任意数量摄像机的序列，而不是仅仅两个。
- 不要使用 Actor 指针来存储摄像机，而是创建一个结构来保持指针以及在更改视图之前的时间，并将时间混合到新视图中。

创建一个新的基本代码项目开始，名为"HowTo_AutoCamera"，其中包含初学者内容。我们需要做的第一件事是在我们的场景中创建两个摄像机。由于设置摄像机有多种方法，在这里我们将使用最常见的两种方法。对于我们的第一个摄像机，Place Actors -> All Classes -> Camera。将其拖拽到 关卡编辑器中，并将其放置在合适的位置，以便它能清楚地看到我们的场景。

完成此操作后，只要我们选择了新的摄像机，关卡编辑器窗口就会有一个画中画视图，显示该 摄像机可以看到的内容。

对于我们的第二个摄像机，我们将使用一种更深入的方法，用几何体作为摄像机的容器使用，让我们可以进行更多的控制。首先，将 Place Actor -> Basic -> Cube 拖放到 关卡编辑器窗口中。

放置我们的 立方体（Cube），单击 Details -> + Add Component 按钮，来为立方体添加摄像机组件（CameraComponent）。你现在可以设置该 摄像机组件（CameraComponent） 的位置和旋转，让我们看到一个不同于我们之前放置的 CameraActor 的场景视图。

我们应该打开 约束高宽比（Constrain Aspect Ratio） 来自定义我们的摄像机组件，以便它与我们的 CameraActor 上的设置匹配。这会使摄像机视图之间的转换更流畅，但这不是必需的。

设置好我们的场景后，我们现在可以开始创建控制摄像机视图的类。

现在可以创建一个 C++ 类来控制摄像机视图了。可以扩展 Actor 为新类，我们将其称之为 CameraDirector。

在代码编译完成后，我们可以将 内容浏览器（Content Browser） 中的新类的实例拖曳到 关卡编辑器（Level Editor） 中。

接下来，我们需要设置 CameraOne 和 CameraTwo 变量。在 World Outliner 中找到 CameraDirector，并在 Details Panel 中进行编辑。

单击属性中标记为 None 的下拉框，然后将变量设置为 Cube 和我们之前创建的 CameraActor。

CameraDirector.h

```C++
// 版权所有 1998-2017 Epic Games, Inc。保留所有权利。

#pragma once

#include "GameFramework/Actor.h"
#include "CameraDirector.generated.h"

UCLASS()
class HOWTO_AUTOCAMERA_API ACameraDirector : public AActor
{
    GENERATED_BODY()

public: 
    // 为此Actor的属性设置默认值
    ACameraDirector();

protected:
    // 当游戏开始或生成时调用
    virtual void BeginPlay() override;

public:
    // 每一帧调用
    virtual void Tick( float DeltaSeconds ) override;

    UPROPERTY(EditAnywhere)
    AActor* CameraOne;

    UPROPERTY(EditAnywhere)
    AActor* CameraTwo;

    float TimeToNextCameraChange;
};
```

CameraDirector.cpp


```C++
// 版权所有 1998-2017 Epic Games, Inc。保留所有权利。

#include "HowTo_AutoCamera.h"
#include "CameraDirector.h"
#include "Kismet/GameplayStatics.h"

// 设置默认值
ACameraDirector::ACameraDirector()
{
    // 将此Actor设置为每一帧调用Tick()。如果不需要，可以关闭此选项来提高性能。
    PrimaryActorTick.bCanEverTick = true;

}

// 当游戏开始或生成时调用
void ACameraDirector::BeginPlay()
{
    Super::BeginPlay();

}

// 每一帧调用
void ACameraDirector::Tick( float DeltaTime )
{
    Super::Tick( DeltaTime );

    const float TimeBetweenCameraChanges = 2.0f;
    const float SmoothBlendTime = 0.75f;
    TimeToNextCameraChange -= DeltaTime;
    if (TimeToNextCameraChange <= 0.0f)
    {
        TimeToNextCameraChange += TimeBetweenCameraChanges;

        //查找处理本地玩家控制的Actor。
        APlayerController* OurPlayerController = UGameplayStatics::GetPlayerController(this, 0);
        if (OurPlayerController)
        {
            if (CameraTwo && (OurPlayerController->GetViewTarget() == CameraOne))
            {
                //平滑地混合到摄像机2。
                OurPlayerController->SetViewTargetWithBlend(CameraTwo, SmoothBlendTime);
            }
            else if (CameraOne)
            {
                //立即切换到摄像机1。
                OurPlayerController->SetViewTarget(CameraOne);
            }
        }
    }
}
```



## ⚡ PlayerCamera 用户控制摄像机
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/PlayerCamera/

利用你学到的知识，试着完成以下任务：

- 为玩家添加一个奔跑按键，按住它后将增加 Pawn 的移动速度。
- 尝试不同的方式，试着混合使用摄像机自动移动和输入驱动的摄像机移动。这是一个非常深奥的游戏开发领域，有很多值得探索的地方！
- 增加、减少或消除弹簧组件（Spring Component）的滞后效果（Lag），试着进一步理解滞后对摄像机的整体影响。
- 实现少量的周期运动，如有可能的话，略微应用一些随机效果，或者使用曲线（Curve） 资产，以便为你的摄像机创建一种手持的感觉。
- 为你的摄像机实现一定程度的自动旋转功能，以便摄像机会逐渐移到玩家的移动对象后面，并朝向玩家移动的方向。

本教程将讲解如何激活摄像机，以及如何将你的活跃摄像机从一台变更为另一台的方法。

1. 先要将摄像机连接到 Pawn。

    首先打开 虚幻引擎，然后新建一个空白模板。

    选择一个新的游戏项目。在项目设置窗口中，我们将默认代码从 Blueprint 改为 C++，并启用启动内容。 选择你希望虚幻项目保存的目录，然后将你的项目命名为 HowTo_PlayerCamera，然后点击创建项目。

    在内容浏览器源码目录中，找到到你的 C++ 类文件夹。你应该能看到一个单类，包含你的游戏模式基类。在相邻的灰色空间上单击右键，从下拉窗口中选择 New C++ class，或从文件菜单上执行创建新类。

    选择 Pawn 作为父类，命名为 PawnWithCamera，添加以下代码。

    头文件中 *UPROPERTY* 声明的这些变量，将会用来创建一个 *SpringArmComponent*，并在末端绑定一个 *CameraComponent*。弹簧臂是一种绑定摄像机或其它组件的简单方式，能让摄像机跟随拍摄对象时平稳自然。

    在构造函数中，我们创建了一个 *SceneComponent* 作为当前组件层级的根节点 *RootComponent*，然后在它下面添加了一个 *StaticMeshComponent*。之后，我们又创建了一个 *SpringArmComponent* 和一个 摄像机 组件，并且将摄像机组件绑定到了弹簧臂末端的插槽上。弹簧臂的默认角度被设置为 -60 度，并且位于根节点上方 50 单位。我们还为 *SpringArmComponent* 声明了一些变量，用于设置它的长度和移动平滑程度。

    你可以随意添加 Static Mesh 或其它可视化组件 ，或者索性不添加。摄像机在关卡中会一直跟随你，并且摄像机的加速和减速应该会很平滑，但摄像机的旋转会十分即时、紧凑的。尝试调整 SpringArmComponent 的属性，感受它们带来的影响，比如添加摄像机旋转延迟 "Camera Rotation Lag" 或增大/降低摄像机延迟 "Camera Lag"。

2. 配置输入以控制摄像机

    你首先要确定使用哪些输入按键来控制你的摄像机和 Pawn，然后进行相应设置。在这个项目中，我们希望按住鼠标右键后，跟随距离会变小并且视野会放大。

    我们还希望使用鼠标来控制视角，并且用 WASD 键控制 Pawn 的移动。为此，在虚幻引擎编辑器中，进入项目配置，Edit -> Project Settings。

    在"项目设置"窗口中，找到 Engine -> Input -> Bindings。然后，点击动作和轴映射旁边的 + 标志，添加一个新的键值对。

    参照下表来定义动作映射 Action Mapping 和轴映射 Axis Mappings，后者是轮询查询事件，也就是说一直在触发输入事件返回硬件的当前状态，不管用户有没有动作。

    Action Mapping:

    ZoomIn <--- Right Mouse Button

    Axis Mapping:

    MoveForward <--- W(Scale=1) S(Scale=-1)
    MoveRight   <--- D(Scale=1) A(Scale=-1)
    CameraYaw   <--- MouseX
    CameraPitch <--- MouseY

    完成玩家输入映射配置，后面还需要通过函数绑定输入事件处理和 Pawn 关联起来。

3. 编写 C++ 代码以便响应输入操作

    你应该已经在项目设置中为输入按键创建了映射。为了能够利用这些输入，让我们编写代码并设置一些成员变量来存储我们接收到的数据吧。 在 Event Tick 更新时，你需要获取移动数据和鼠标轴的移动方向数据。在 Axis Mapping 映射的事件中，它们给的都是一个浮点类型的数值。Action Mapping 事件没有数据。

    你需要把Pawn的输入事件和函数相绑定，方法是添加如下代码到 *APawnWithCamera::SetupPlayerInputComponent* 中使用 BindAction 和 BindAxis 绑定输入到相应的事件处理函数，并存储输入数据。

    你还需要了解接下来摄像机画面应该是放大还是缩小，以及摄像机当前距离这两种状态有多少距离。

    借助 *GetActorForwardVector* 和 *GetActorRightVector*，我们可以往 Actor 的朝向移动。由于摄像机朝的向和 Actor 一样，这使得我们按下"前进键"后，始终能朝着玩家所看的方向移动。

    注意代码段会直接使用鼠标的 X 轴来旋转 Pawn 实现左右偏转，但只有相机系统会对来自鼠标 Y 轴的倾斜变更来进行响应。旋转任意 Actor 或 Actor 子类实际上会旋转根级组件 ，而这又会间接地影响所有附着的内容。

    摄像机通过 SpringArmComp->SetWorldRotation 来旋转，因为弹簧是摄像机的父级，可以影响它。

插值函数是很常见的，*FMath::Lerp<float>(a, b, Alpha)*，通过 Alpha 来调用输出值，介于 a 和 b 之间。源代码参考 KismetMathLibrary.inl 内联函数文件，或者 KismetMathLibrary.h, UnrealMathUtility.h。

PawnWithCamera.h

```C++
// Copyright 1998-2021 Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Pawn.h"
#include "PawnWithCamera.generated.h"

UCLASS()
class HOWTO_PLAYERCAMERA_API APawnWithCamera : public APawn
{
    GENERATED_BODY()

public:
    // 为Pawn的属性设置默认值
    APawnWithCamera();

protected:
    // 游戏开始时或对象生成时调用
    virtual void BeginPlay() override;

public:
    // 每帧调用
    virtual void Tick( float DeltaSeconds ) override;

    // 用于绑定功能和输入
    virtual void SetupPlayerInputComponent(class UInputComponent* InputComponent) override;

protected:

    UPROPERTY(EditAnywhere)
    class USpringArmComponent* OurCameraSpringArm;

    UPROPERTY(EditAnywhere)
    class UCameraComponent* OurCamera;

    UPROPERTY(EditAnywhere)
    UStaticMeshComponent* StaticMeshComp;

    // 输入变量
    FVector2D MovementInput;
    FVector2D CameraInput;
    float ZoomFactor;
    bool bZoomingIn;

    // 输入函数
    void MoveForward(float AxisValue);
    void MoveRight(float AxisValue);
    void PitchCamera(float AxisValue);
    void YawCamera(float AxisValue);
    void ZoomIn();
    void ZoomOut();
};
```

PawnWithCamera.cpp

```C++
// Copyright 1998-2021 Epic Games, Inc. All Rights Reserved.

#include "PawnWithCamera.h"
#include "GameFramework/SpringArmComponent.h"
#include "Camera/CameraComponent.h"

// 设置默认值
APawnWithCamera::APawnWithCamera()
{
    // 让这个Pawn每帧调用Tick()。如不需要，你可以关闭这个函数以便提升性能。
    PrimaryActorTick.bCanEverTick = true;

    // 创建组件
    RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("RootComponent"));
    StaticMeshComp = CreateDefaultSubobject <UStaticMeshComponent>(TEXT("StaticMeshComponent"));
    SpringArmComp = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArmComponent"));
    CameraComp = CreateDefaultSubobject<UCameraComponent>(TEXT("CameraComponent"));

    StaticMeshComp->SetupAttachment(RootComponent);
    SpringArmComp->SetupAttachment(StaticMeshComp);
    CameraComp->SetupAttachment(SpringArmComp,USpringArmComponent::SocketName);

    // 设置SpringArmComponent的默认数值和行为
    SpringArmComp->SetRelativeLocationAndRotation(FVector(0.0f, 0.0f, 50.0f), FRotator(-60.0f, 0.0f, 0.0f));
    SpringArmComp->TargetArmLength = 400.f;
    SpringArmComp->bEnableCameraLag = true;
    SpringArmComp->CameraLagSpeed = 3.0f;
    // 控制默认玩家
    AutoPossessPlayer = EAutoReceiveInput::Player0;
}

// 游戏开始时或对象生成时调用
void APawnWithCamera::BeginPlay()
{
    Super::BeginPlay();

}

// 每帧调用
void APawnWithCamera::Tick( float DeltaTime )
{
    Super::Tick(DeltaTime);

    // 按下ZoomIn按钮时进行放大，否则恢复正常
    {
        if (bZoomingIn)
        {
            ZoomFactor += DeltaTime / 0.5f;         //Zoom in over half a second
        }
        else
        {
            ZoomFactor -= DeltaTime / 0.25f;        //Zoom out over a quarter of a second
        }
        ZoomFactor = FMath::Clamp<float>(ZoomFactor, 0.0f, 1.0f);
        // 基于ZoomFactor设置摄像机的视野和SpringArm的长度 
        CameraComp->FieldOfView = FMath::Lerp<float>(90.0f, 60.0f, ZoomFactor);
        SpringArmComp->TargetArmLength = FMath::Lerp<float>(400.0f, 300.0f, ZoomFactor);
    }

    // 旋转Actor的偏转角度，由于摄像机是Actor内层对象，相互绑定，因此摄像机也会偏转
    {
        FRotator NewRotation = GetActorRotation();
        NewRotation.Yaw += CameraInput.X;
        SetActorRotation(NewRotation);
    }

    // 旋转摄像机的俯仰角度，但对其进行限制，确保我们始终朝下看，这里不对 Actor 旋转确保其朝向保持一致
    {
        FRotator NewRotation = SpringArmComp->GetComponentRotation();
        NewRotation.Pitch = FMath::Clamp(NewRotation.Pitch + CameraInput.Y, -80.0f, -15.0f);
        SpringArmComp->SetWorldRotation(NewRotation);
    }

    // 根据"MoveX"和"MoveY"的处理移动
    {
        if (!MovementInput.IsZero())
        {
            //Scale our movement input axis values by 100 units per second
            MovementInput = MovementInput.SafeNormal() * 100.0f;
            FVector NewLocation = GetActorLocation();
            NewLocation += GetActorForwardVector() * MovementInput.X * DeltaTime;
            NewLocation += GetActorRightVector() * MovementInput.Y * DeltaTime;
            SetActorLocation(NewLocation);
        }
    }
}

// 用于绑定输入和函数
void APawnWithCamera::SetupPlayerInputComponent(class UInputComponent* InputComponent)
{
    Super::SetupPlayerInputComponent(InputComponent);

    // 为"ZoomIn"事件绑定函数
    InputComponent->BindAction("ZoomIn", IE_Pressed, this, &APawnWithCamera::ZoomIn);
    InputComponent->BindAction("ZoomIn", IE_Released, this, &APawnWithCamera::ZoomOut);

    // 分别为四个方向轴的移动事件绑定函数
    InputComponent->BindAxis("MoveForward", this, &APawnWithCamera::MoveForward);
    InputComponent->BindAxis("MoveRight", this, &APawnWithCamera::MoveRight);
    InputComponent->BindAxis("CameraPitch", this, &APawnWithCamera::PitchCamera);
    InputComponent->BindAxis("CameraYaw", this, &APawnWithCamera::YawCamera);
}

// 输入函数
void APawnWithCamera::MoveForward(float AxisValue)
{
    MovementInput.X = FMath::Clamp<float>(AxisValue, -1.0f, 1.0f);
}

void APawnWithCamera::MoveRight(float AxisValue)
{
    MovementInput.Y = FMath::Clamp<float>(AxisValue, -1.0f, 1.0f);
}

void APawnWithCamera::PitchCamera(float AxisValue)
{
    CameraInput.Y = AxisValue;
}

void APawnWithCamera::YawCamera(float AxisValue)
{
    CameraInput.X = AxisValue;
}

void APawnWithCamera::ZoomIn()
{
    bZoomingIn = true;
}

void APawnWithCamera::ZoomOut()
{
    bZoomingIn = false;
}
```

## ⚡ FPS 第一人称射击游戏教程
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/FirstPersonShooter/

如你已可使用 UE4 中的 C++，但不确定如何创建 Pawn 类或配置输入，可通过玩家输入和 Pawn 教程开始学习上手必需的 C++ 概念和技能。

此教程旨在说明如何使用 C++ 构建基本的第一人称射击游戏（FPS）。

目的，完成教程之后你将学会：

- 设置项目
- 实现角色
- 实现发射物
- 设置角色动画

项目使用到的四个类对象：

- AFPSGameModeBase 游戏模式设置对象；
- FPSCharacter 玩家角色对象；
- FPSProjectile 武器投射物；
- FPSHUD 信息平台显示对象；

### ✒ FPS 项目创建

1. 建立项目

在这一步，最重要的是学会为项目添加日志消息，并且会编译你的第一个 C++ 类，更重要的是掌握设置默认游戏模式。

使用虚幻引擎创建一个 Blank template 空白模板项目作为我们的第一人称射击游戏(FPS)创建一个起始点。

将项目类型更改为 C++（而非蓝图 Blueprint 项目），确保选中无初学者内容（No Starter Content）。

将新项目命名为"FPSProject"，如果使用了其他项目名称，则本教程中的一些代码示例需要相应更改。

空白项目会提供一个可以通过 WASD 控制移动的摄像机，点击运行，便可进入编辑器内运行 Play-In-Editor（PIE）模式。

用鼠标调整视角，同时使用 WASD 键在关卡内移动。按 Esc 键或在关卡编辑器中点击停止退出 PIE 模式。

你已完成对关卡的探索，现在转到内容浏览器（Content Browser），在 Content 文件夹下创建一个 Maps 文件夹。在内容文件夹任意位置点击右键，选择 New Folder。

现在使用文件菜单将当前关卡地图保存为副本， File -> Save Current as...，保存路径 /Content/Maps/FPSMap。

现在设置编辑器将自动加载 FPSMap 作为默认地图，Edit -> Project Settings -> Project -> Maps & Modes。展开 Editor Startup Map 的下拉菜单，选择 FPSMap。

创建基础项目后，需要为虚幻引擎创建了一个游戏模式（Game Mode）。游戏模式定义游戏规则和获胜条件，游戏模式还会设置一些默认类，用于某些基本游戏框架类型，包括 Pawn、PlayerController 和 HUD 等。开始游戏时，会根据 GameMode 类的配置，Default Pawn Class 生成玩家控制的角色。

向项目中 FPSGameMode 添加代码来打印一条日志消息是一个不错的起点。日志消息对于在开发期间验证和调试代码非常有用。在这一步中，你将使用日志消息来验证自己确实在使用 FPSGameMode 而非虚幻引擎提供的默认游戏模式。

按以下 *AFPSGameModeBase* 展示的代码实现一个 GameMode，使用 File -> Add C++ Class... 创建类，并选择 GameModeBase 为基类。编写好代码后，回到编辑器，点击编译（Compile）按钮编译代码。这样你就能看到新代码在游戏中的表现。

现在将新修改的游戏模式扩展到蓝图，右键点击 C++ Classes 目录下的 AFPSGameModeBase 类，选择菜单 C++ Class Actions -> Create Blueprint class based on ... 开始创建蓝图。打开 Add Blueprint Class 对话框后，将你的新蓝图类命名为*BP_AFPSGameModeBase*，然后选择蓝图文件夹，之后点击 Create Blueprint Class 按钮完成蓝图类的创建。请确保在关闭蓝图编辑器之前保存你的 *BP_AFPSGameModeBase* 蓝图。

现在需要设置你的项目，使用 *BP_AFPSGameModeBase* 作为默认游戏模式，Edit -> Project Settings -> Project -> Maps & Modes。注意：除了可以为整个工程设置以外，还可以在每个关卡设置独有的 GameMode，操作路径：Window -> World Settings -> Game Mode。

设置使用*BP_AFPSGameModeBase* 作为默认游戏模式后，就可以在项目中修改其它游戏模式参数了，包括指定 Default Spawn Class。

展开 Default GameMode 下拉菜单，选择 *BP_AFPSGameModeBase*，然后关闭项目设置。

点击关卡编辑器工具栏中的运行（Play） 按钮。"Hello World, this is FPSGameMode!" 这句话应在视口左上角以黄色文本显示五秒钟，这就算完成 GameMode 的基本设置。


### ✒ FPSCharacter 角色处理

2. 实现你的角色

2.1 - 创建新角色
2.2 - 设置轴映射
2.3 - 实现角色移动函数
2.4 - 实现鼠标摄像机控制
2.5 - 实现角色跳跃
2.6 - 将网格体添加到角色
2.7 - 更改摄像机视角
2.8 - 将第一人称网格体添加到角色

先来设置用户输入的映射。

通常，Axis Mappings 轴映射支持将键盘、鼠标和控制器输入映射到"友好名称"，该名称稍后可以绑定到游戏行为上（例如移动）。轴映射会不断被轮询，从而实现无缝的移动过渡和流畅的游戏行为。硬件轴（例如游戏摇杆）所提供的输入值为程度值，而不是离散的数字输入（例如，按下为 1，不按下为 0）。虽然游戏摇杆输入方法在提供可平滑伸缩的移动输入方面很有效，但轴映射也可以将常见的移动键（如 WASD 键或箭头键）映射到持续轮询的游戏行为。

在继续此步骤之前，如果你想要了解有关玩家输入的更多信息，请参阅玩家输入和 Pawn 教程。在此步骤中，你将设置 W、A、S 和 D 键的输入轴映射，从而使新角色可以在地图上四处移动。

操作路径：Edit -> Project Settings -> Engine -> Input -> Bindings，点击轴映射（Axis Mappings）旁边的 + 号。

点击轴映射（Axis Mappings）左侧的箭头，展开面板，在文本框中输入友好事件名*MoveForward*，同样使用左侧的箭头展开轴绑定选项。在下拉菜单中，选择 Keyboard -> W 并且 scale 设置为 1.0，然后再添加一个 Keyboard -> S 绑定并且设置 scale 为 -1。后面通过 C++ 代码调用 *BindAxis* 将友好事件名与处理函数绑定，这里的 scale 值会传入处理函数内。

同样操作，设置一个*MoveRight*友好事件名，然后点击文本框左侧的箭头，展开轴绑定选项。添加 Keyboard -> D 和 Keyboard -> A，scale 值分别设置为 1.0 和 -1.0。现在你已设置好向左移动（MoveLeft）和向右移动（MoveRight）轴映射。

*EAxis* 这个枚举类型包含 X、Y、Z 三种值，用来标记函数操作和什么轴相关，如 *GetScaledAxis(EAxis::X)* 表示获取 X 轴上的分量。

类似地设置一个 Action Mapping，将空格键映射为*Jump*友好事件名称。后面会通过代码调用 *BindAction* 与处理函数绑定，和 Axis Mapping 绑定不同，动作只会在用户动作一次才触发一次输入事件，同时没有参数。关闭项目设置，开始编写*FPSCharacter*类代码。

Pawn 提供了叠加输入值的函数 *AddControllerPitchInput*、*AddControllerRollInput*、*AddControllerYawInput*，注意 AController 本身是 AActor 的子类。

在文件 File -> New C++ Class... 创建一个角色类，并选择 Character 作为基类，它派生自 Pawn 类，并且内置功能支持走、跑和跳等双足运动。角色类命名为 *FPSCharacter*。

同样，在 BeginPlay 事件中，使用 *AddOnScreenDebugMessage* 在屏幕上打印信息，以确认你的角色类正常加载。执行 Build 编译构建 C++ 类，完成后，打开虚幻编辑器，确认新编译的 *FPSCharacter* 类在内容浏览器中可见。

现在可以扩展 C++ FPS 角色类到蓝图了，类似之前进行的 *BP_AFPSGameModeBase* 蓝图类的操作。 基于*FPSCharacter*创建蓝图类，将新的蓝图类命名为 *BP_FPSCharacter*，保存在 Blueprints 文件夹。

接着设置项目，将 *BP_FPSCharacter* 作为默认的 Pawn，这样游戏开始时就会创建*BP_FPSCharacter*作为玩家控制的角色。执行菜单 Edit -> Project Settings -> Project -> Maps & Modes。展开 Selected GameMode 段，并设置 Default Pawn Class 为 *BP_FPSCharacter*。

关闭项目设置，在关卡编辑器工具栏中点击运行按钮，观察视口左上角，按照 FPSCharacter.cpp 代码预期一样出现红色文本 We are using FPSCharacter 表示成功设置。

在角色移动时，摄像机也会一起移动，因为摄像机是内置在 Character 内部的，受到外层 Actor 的变换影响，所以直接使用*AddMovementInput*方法修改 Actor 自身的位置就可以实现角色与摄像机的移动。另外，Character 已经有跳跃的功能，只需要设置 bPressedJump 状态即可触发相应的动作。

由于*BP_FPSCharacter*所继承的父类中没有设置角色的风格模式，所以本身没有任何可视元素。在此，将为角色提供骨骼网格体。默认情况下，角色类为你创建了*SkeletalMeshComponent*对象引用，因此仅需了解使用哪个*SkeletalMesh*资产。

现在，导入其它模板工程中提供的资产文件，执行内容浏览器的添加 + ADD -> Add Features or Content Pack...，从模板工程提供的资产列表中选择 Third Person，这个模板中有 Mannequin 机器人模型。另外，First Person 项目也有相应的素材，包含声音、投射物、第一人称使用的手臂网格体等，可以直接使用系统的资源管理器将引擎安装目录下的模板资源复制到项目的内容目录中，Templates\TemplateResources\Standard\FirstPerson\Content。

使用 Import Asset 可以导入其它工具制作的外部模型资源。右键点击目录或直接点击 Import 按钮，打开导入资产对话框。找到外部工具制作的网格体文件，像 Blender 这类工具可以非常方便地建模，并导出 FBX 文件。外部文件导入到你的项目后，就会转换成资产格式。Content Browser 中将显示 FBX Import Options 对话框。点击 Import All，将你的网格体添加到项目。

将导入的网格体附加到 Mesh 属性。双击 *BP_FPSCharacter* 蓝图类图标，在蓝图编辑器中打开它。如果你看到有关此蓝图为仅数据蓝图的说明，请点击 Open Full Blueprint Editor，转换到完整蓝图编辑器。在右侧面板选中网格组件属性：Components -> Mesh，然后在屏幕右侧，或者在 Window -> Details -> Mesh，点击骨骼网格体 Skeletal Mesh 的下拉列表，然后选择一个骨骼网格体资产附加到此属性。这个操作意思就是使 Character 类型的 *Mesh* 属性引用一个具体的风格对象。

滚动到 Details -> Transform 段，然后，将变换的 Z 轴向位置设置为 "-88.0"，使 *SkeletalMeshComponent* 与 *CapsuleComponent* 对齐。打开视口（Viewport）预览骨骼网格体，确认骨骼网格体在 *CapsuleComponent* 内部，并且网格体的朝向与 *ArrowComponent* 指示相同。正确确定骨骼网格体组件的朝向，将确保你的角色朝正确的方向在整个世界中移动。

请确保在关闭蓝图编辑器之前编译（Compile) 并保存 *BP_FPSCharacter* 蓝图。

使用 C++ 代码也可以为角色创建网格体，这里演示创建 *UCameraComponent*，并将其附加到角色的 *CapsuleComponent*。

构建 FPS 游戏的常见方法是使用两个分开的角色网格体，其中一个是以第三人称视角观察角色使用的全身网格体，另一个是只有武器和手部网格体。因为第一人称视角中，不用看到自身的身体。但是，当玩家以第一人称视角进行游戏时，全身网格体是隐藏的。"武器和手部"网格体通常附着到摄像机，并且仅当玩家以第一人称视角查看地图时才对玩家可见。

玩家角色类新增加了 *FPSMesh* 属性用来引用第一人称角度可见的模型，并附加到摄像机对象下，*SetOnlyOwnerSee* 设置此网格体仅对拥有此角色的 PlayerController 可见，即第一人称角度可见而第三人称角度不可见。而第三人称角度可见的全身模型风格体则放到 Character 对象上一层，并使用 *SetOwnerNoSee* 设置用于全身网格体只能被第三人称观察到，而不被所属玩家看到。同时，由于这个代码设置，通过 Window -> Details -> Skeletal Mesh 指定的组件所使用风格体也对玩家自身不可见了。代码将*FPSMesh*网格体附加到摄像机，并禁用某些环境阴影，*bCastDynamicShadow* 和 *CastShadow*。让手臂投射阴影会破坏第一人称角色应该只有单个网格体的感觉。

可见性设置也可以在蓝图编辑器中对 Mesh 组件细节进行设置，Rendering -> *Owner No See* 和 *Only Owner See*。

注意：你也可以将网络对象拖放到 Mesh 下层，而不通过 Details -> Mesh 属性附加上去，但是这样做，就多了一层。并且，使用*SetOnlyOwnerSee* 或 *SetOwnerNoSee* 设置只对当前的网格对象生效，下层的网格对象不受影响。 

### ✒ Projectile 抛射物处理
- Collision 碰撞概述 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/Collision/Overview/
- 碰撞响应参考 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/Collision/Reference/
- Collision Filtering By James Golding https://www.unrealengine.com/en-US/blog/collision-filtering
- Unreal Engine Physics Essentials by Katax Emperore Devin Sherry
- UMG 虚幻运动图形界面 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/UMG/
- Slate UI 框架 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Slate/

3. 实现发射物

3.1 - 将发射物添加到游戏
3.2 - 实现射击
3.3 - 设置发射物碰撞和生命周期
3.4 - 让发射物与世界交互
3.5 - 将十字准星添加到视口

前面已经基本设置好角色，但是还没有添加骨骼动画，这部分放到后面。

现在可以实现武器发射物。你将通过编程实现简单的手榴弹状发射物，它将从屏幕中心射击并飞行，直到与世界中的物体碰撞。在此步骤中，你将添加输入并为发射物创建新的代码类。

参考前面，设置一个 Fire 动作输入映射，关联到 Left Mouse Button。

现在，为抛射物创建类文件，File -> New C++ Class...，选择 Actor 作为父类，将新类命名为*FPSProjectile*。

添加 *USphere* 组件模拟弹药，使用*UProjectileMovementComponent*来提供运动能力支持。抛射物只需要简单的运动能力，定义一个 *Fire* 方法，它接收一个向量作为运动初始状态，余下的工作就交给物理系统模拟。另外，需要使用 *OnHit* 事件来处理击中的状态，通过*AddImpulseAtLocation*向被击中的对象击中点传递能量，碰撞检测的轮廓体只需要使用球形网格体。使用*IsSimulatingPhysics()*方法判断碰撞的对象是否启用了物理模拟，如果是，才对它产生冲击作用。

给玩家角色定义一个 *Fire* 方法用来激发抛射物，通过 UWorld 的*SpawnActor*方法生成对象，添加一个*MuzzleOffset*属性模拟武器的瞄准向量。

在构造器中，检测到没有设置静态网格体或材质，就会加载默认值，需要创建新材质，简单配置一下 底色（Base Color）、高光度（Specular）、自发光颜色等属性，然后保存到内容目录下，并命名为*SphereMaterial*。代码中的路径也可以修改为其它值，资产引用路径根据资产位置可能会有所不同，具体取决于你在内容浏览器中保存球体网格体时所选择的位置。

此外，在内容浏览器中，使用对象的右键菜单 Copy Reference 来获取资产的引用路径。注意，粘贴复制的资产引用路径时，该引用会在资产的引用路径之前包含资产类型名称。你将看到 *StaticMesh'/Game/Sphere.Sphere'*，又或者 *Material'/Engine/BasicShapes/BasicShapeMaterial.BasicShapeMaterial'*这样的信息。请确保在代码中使用引用路径时，删除资产的类型名称（例如 Material）和单引号。

有了抛射物体后，接下来就是附加到角色对象的 *Projectile* 属性上，角色类已经具体这此基本功能属性。前往内容浏览器中的蓝图文件夹，并打开*BP_FPSCharacter*文件。打开完整的编辑器，如有必要，然后导航到 Detail 面板。设置发射物类 Projectile Class，从旁边的下拉列表中，选择前面创建好的*FPSProjectile*。

构建工程，然后尝试模式运行游戏，确认在 Fire 事件中在场景中生成了静态网格体。

事件激发时，你会在世界大纲视图中看到发射物的数量不断增加，通过在抛射物的构造函数中设置*InitialLifeSpan*属性可以限制对象的存活时间，单位为秒。

提示：如果将 *FPSProjectile* 拖到场景中，并且正常可以看到相应的材质及模型形状，但是在 PIE 运行时却看不到抛射物，那么可能是其 *Velocity* 属性设置一个默认值，比如 (1, 0, 0) 这个向量使它可以沿着 X 轴运动。

接下来要做的事件有点复杂，涉及到引擎中的物理系统如何处理碰撞问题，也就是碰撞检测相关的逻辑。

为了设置抛射物与场景中的物体发生 Hit 事件，就需要两个物体都对另一方设置为 `Block` 响应方式。碰撞检测中使用了对象通道，不同通道的对象对其它通道的对象如何响应碰撞，就看双方的通道类型中的配置

虚幻引擎自带了数个预设碰撞通道配置，(WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle, Destructible)不过，引擎也支持游戏项目使用自定义 18 个对象类型通道，或者 18 个追踪通道类型。

创建自定义碰撞通道，并加载到对象实例上使用。打开项目设置 Project Settings -> Engine -> Collision，可以展开预设 Preset 查看现有的各种内置通道的配置。列如，*OverlapAll* 设置对所有其它所有对象通道都触发 Overlap 事件，只要碰触对象不是设置为 `Ignore` 响应方式。

最接近的需求预设就是 *Ragdoll*，它只对 Pawn 对象响应 `Overlap` 事件，即对玩家自身是可以穿过，对其它所有对象响应 `Block`，即阻挡继续运动，触发 `Hit` 事件。

新建对象通道，将新碰撞通道命名为 *Projectile*，确保将默认响应（Default Response）设置为 Block，然后点击接受设置。

在预设（Preset）中新建配置，同样将新配置文件命名为 *Projectile*，各个对象通道的碰撞预设为`Block`，除 Pawn 通道设置为 `Overlap`，然后点击接受完成设置。此碰撞配置文件将发射物设定为将被 WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle, Destructible 等通道的对象阻挡。但是，设定发射物与 Pawn 重叠，触发 Overlap 事件。

在 *FPSProjectile* 构造函数中，在后面添加以下代码，使用*SetCollisionProfileName* 方法加载碰撞配置文件。

现在我们可以检测到发射物的碰撞交互，在 FPSProjectile 的 OnHit 函数中，会检测碰撞的对象是否启用了物理模拟功能，如果是就给它冲击*AddImpulseAtLocation*。可以在场景中添加一个 Cube 测试，将其属性 Details -> Physics -> Simulate Physics 复选框勾选以进行物理模拟。既然是物理系统，也应该设置相关的属性，如质量 Mass 设置合理的值。

在关卡编辑器工具栏中点击运行（Play In），确认发射物与立方体碰撞，请点击鼠标左键发射发射物，并使立方体在关卡内移动。

完成射击功能后，再来添加一个准星，它基于平面绘图作为 AHUD 子对象，不需要经过 3D 环境的坐标，相当于贴在镜头前一样。

在内容浏览器的文件框，使用 Import Asset -> Import to ... 将外部图片导入，比如 crosshair.TGA 图像文件。

创建一个新的 HUD 类，File -> New C++ Class...，选择 Choose Parent Class 列表中的 HUD 作为父类，然后点击下一步将新类命名为*FPSHUD*，然后完成创建。

*FPSHUD* 类头文件，只需要加一个 *UTexture2D* 类型的成员，用来引用准星图片纹理。主要程序逻辑都写在 *DrawHUD* 方法上，它负责在适当的运行机会中进行 2D 画布绘图。使用 *FCanvasTileItem* 来包装纹理对象，然后通过画布的 *DrawItem()* 方法绘制到屏幕。

接下来通过蓝图来扩展*FPSHUD*，这样就可以直接在蓝图编辑器中设置准星。

右键点击 *FPSHUD* 类，执行菜单 C++ Class Actions -> Create Blueprint class based on FPSHUD 打开添加蓝图类对话框。将新的蓝图类命名为*BP_FPSHUD*，并保存到统一的蓝图文件夹。完成后，在蓝图文件夹内，你应该有一个新创建的 *BP_FPSHUD* 蓝图类。

打开 *BP_FPSHUD* 蓝图编辑器，点击位于蓝图编辑器的 FPSHUD 分段的下拉菜单，选择十字准星纹理。

最后，在关闭蓝图编辑器之前编译并保存 *BP_FPSHUD* 蓝图。

每个游戏项目中，都可以通过 GameMode 设置一个默认的 HUD 对象，打开 Edit -> Project Settings -> Project -> Maps & Modes。

将 *BP_FPSHUD* 设置到 Default HUD 属性中，通过右侧的下拉菜单选择。

最后，验证你的 HUD，在关卡编辑器工具栏中点击运行（Play）按钮。现在，你应该可以使用新添加的十字准星进行发射物的瞄准操作，完成 HUD 界面使用。

更多内容参考 UGM UI 和 Slate UI 界面框架。


### ✒ Animation Sequences 角色动画
- 设置角色动作 创建动画状态机 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo/CharacterMovement/

4. 添加角色动画
4.1 - 为角色添加动画
4.2 - 设置事件图表
4.3 - 添加动画状态机
4.4 - 添加动画过渡状态
4.4.1 - 添加空闲到奔跑/奔跑到空闲的过渡
4.4.2 - 添加空闲到跳跃开始的过渡
4.4.3 - 添加奔跑到跳跃开始的过渡
4.4.4 - 添加跳跃开始到跳跃循环的过渡
4.4.5 - 添加跳跃循环到跳跃结束的过渡
4.4.6 - 添加跳跃结束到空闲的过渡
4.5 - 关联动画蓝图和角色蓝图


完成教程的这一节后，你将能够：

- 为角色添加动画
- 设置事件图表
- 添加动画状态机
- 为动画添加过渡状态
- 关联动画蓝图与角色蓝图

为统一存储管理模型动画，创建一个新文件夹，命名为 Animations。

在弹出的的对话框中，选择 选择骨架（Select Skeleton） 标题下的 HeroFPP_Skeleton，然后点击 全部导入（Import All） 导入所有动画。

在内容浏览器中右键点击动画文件夹。在 创建高级资产（Create Advanced Asset） 分段里，展开 动画（Animation） 并选择 动画蓝图（Animation Blueprint）。

AddNewAnimBP.png

选择 AnimInstance 作为父类，并选择 HeroFPP_Skeleton 作为目标骨架。

CreateAnimBP.png

将新动画蓝图命名为"Arms_AnimBP"。

双击 Arms_AnimBP 打开 蓝图编辑器（Blueprint Editor）。

DoubleClickAnimBP.png

添加状态机过渡变量
在 我的蓝图（My Blueprint） 选项卡中，点击 新增（Add New） 按钮，并选择 变量（Variable）。

AddingNewVariable.png

将该变量设置为 布尔（Boolean）（可能已经这样设置了，但最好通过 细节（Details） 面板确认一下），并将其命名为"IsRunning"。

在 我的蓝图（My Blueprint） 选项卡中，点击 新增（Add New） 按钮，并选择 变量（Variable）。

将该变量设置为 布尔型（Boolean），并将其命名为"IsFalling"。

现在你应该有两个动画过渡变量，用于驱动动画的状态机。

进入下一节时，保持 Arms_AnimBP 处于打开状态。




### ✒ AFPSGameModeBase 模式类

游戏模式类 AFPSGameModeBase：

```C++
// AFPSGameModeBase.h
// Epic Games, Inc版权所有。保留所有权利。

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "AFPSGameModeBase.generated.h"

/**
 * 
 */
UCLASS()
class FPSPROJECT_API AAFPSGameModeBase : public AGameModeBase
{
    GENERATED_BODY()

    virtual void StartPlay() override;
};


// AFPSGameModeBase.cpp
// Epic Games, Inc版权所有。保留所有权利。

#include "FPSProjectGameMode.h"

void AFPSGameModeBase::StartPlay()
{
    Super::StartPlay();

    check(GEngine != nullptr);

    // 显示调试消息五秒。 
    // -1"键"值参数防止该消息被更新或刷新。
    GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Yellow, TEXT("Hello World, this is FPSGameModeBase!"));
}
```

### ✒ FPSCharacter 游戏角色类

游戏角色类 FPSCharacter：

```C++
// FPSCharacter.h
//版权所有Epic Games, Inc。保留所有权利。

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "Camera/CameraComponent.h"
#include "Components/CapsuleComponent.h"
#include "FPSProjectile.h"
#include "FPSCharacter.generated.h"

UCLASS()
class FPSPROJECT_API AFPSCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    // 为此角色的属性设置默认值
    AFPSCharacter();

protected:
    // 当游戏开始或重生（Spawn）时被调用
    virtual void BeginPlay() override;

    // 要生成的发射物类。
    UPROPERTY(EditAnywhere, Category = Projectile)
    TSubclassOf<class AFPSProjectile> ProjectileClass;

public: 
    // 每一帧都被调用
    virtual void Tick(float DeltaTime) override;

    // 被调用，将功能与输入绑定
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

    // 处理用于前后移动的输入。
    UFUNCTION()
    void MoveForward(float Value);

    // 处理用于左右移动的输入。
    UFUNCTION()
    void MoveRight(float Value);

    // 按下键时，设置跳跃标记。
    UFUNCTION()
    void StartJump();

    // 释放键时，清除跳跃标记。
    UFUNCTION()
    void StopJump();

    // 发射发射物的函数。
    UFUNCTION()
    void Fire();

    // FPS摄像机
    UPROPERTY(VisibleAnywhere)
    UCameraComponent* FPSCameraComponent;

    // 第一人称网格体（手臂），仅对所属玩家可见。
    UPROPERTY(VisibleDefaultsOnly, Category = Mesh)
    USkeletalMeshComponent* FPSMesh;

    // 枪口相对于摄像机位置的偏移。
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = Gameplay)
    FVector MuzzleOffset;
};

// FPSCharacter.cpp
//版权所有Epic Games, Inc。保留所有权利。         

#include "FPSCharacter.h"

// 设置默认值
AFPSCharacter::AFPSCharacter()
{
    // 将此角色设置为每帧调用Tick()。  如果不需要此特性，可以关闭以提升性能。
    PrimaryActorTick.bCanEverTick = true;

    // 创建第一人称摄像机组件。
    FPSCameraComponent = CreateDefaultSubobject<UCameraComponent>(TEXT("FirstPersonCamera"));
    check(FPSCameraComponent != nullptr);

    // 将摄像机组件附加到我们的胶囊体组件。
    FPSCameraComponent->SetupAttachment(CastChecked<USceneComponent, UCapsuleComponent>(GetCapsuleComponent()));

    // 将摄像机置于略高于眼睛上方的位置。
    FPSCameraComponent->SetRelativeLocation(FVector(0.0f, 0.0f, 50.0f + BaseEyeHeight));

    // 启用Pawn控制摄像机旋转。
    FPSCameraComponent->bUsePawnControlRotation = true;

    // 为所属玩家创建第一人称网格体组件。
    FPSMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("FirstPersonMesh"));
    check(FPSMesh != nullptr);

    // 仅所属玩家可以看见此网格体。
    FPSMesh->SetOnlyOwnerSee(true);

    //将 FPS 网格体连接到 FPS 摄像机。
    FPSMesh->SetupAttachment(FPSCameraComponent);

    // 禁用某些环境阴影，实现只有单个网格的感觉。
    FPSMesh->bCastDynamicShadow = false;
    FPSMesh->CastShadow = false;

    // 所属玩家看不到常规（第三人称）全身网格体。
    GetMesh()->SetOwnerNoSee(true);
}

// 当游戏开始或重生（Spawn）时被调用
void AFPSCharacter::BeginPlay()
{
    Super::BeginPlay();

    if (GEngine)
    {
        // 显示调试消息五秒。
        // -1"键"值参数可以防止更新或刷新消息。
        GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Red, TEXT("We are using FPSCharacter."));
    }
}

// 每一帧都被调用
void AFPSCharacter::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);

}

// 被调用，将功能与输入绑定
void AFPSCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);

    // 设置"移动"绑定。
    PlayerInputComponent->BindAxis("MoveForward", this, &AFPSCharacter::MoveForward);
    PlayerInputComponent->BindAxis("MoveRight", this, &AFPSCharacter::MoveRight);

    // 设置"观看"绑定。
    PlayerInputComponent->BindAxis("Turn", this, &AFPSCharacter::AddControllerYawInput);
    PlayerInputComponent->BindAxis("LookUp", this, &AFPSCharacter::AddControllerPitchInput);

    // 设置"操作"绑定。
    PlayerInputComponent->BindAction("Jump", IE_Pressed, this, &AFPSCharacter::StartJump);
    PlayerInputComponent->BindAction("Jump", IE_Released, this, &AFPSCharacter::StopJump);
    PlayerInputComponent->BindAction("Fire", IE_Pressed, this, &AFPSCharacter::Fire);
}

void AFPSCharacter::MoveForward(float Value)
{
    // 找出"前进"方向，并记录玩家想向该方向移动。
    FVector Direction = FRotationMatrix(Controller->GetControlRotation()).GetScaledAxis(EAxis::X);
    AddMovementInput(Direction, Value);
}

void AFPSCharacter::MoveRight(float Value)
{
    // 找出"右侧"方向，并记录玩家想向该方向移动。
    FVector Direction = FRotationMatrix(Controller->GetControlRotation()).GetScaledAxis(EAxis::Y);
    AddMovementInput(Direction, Value);
}

void AFPSCharacter::StartJump()
{
    bPressedJump = true;
}

void AFPSCharacter::StopJump()
{
    bPressedJump = false;
}

void AFPSCharacter::Fire()
{
    // 试图发射发射物。
    if (ProjectileClass)
    {
        // 获取摄像机变换。
        FVector CameraLocation;
        FRotator CameraRotation;
        GetActorEyesViewPoint(CameraLocation, CameraRotation);

        // 设置MuzzleOffset，在略靠近摄像机前生成发射物。
        MuzzleOffset.Set(100.0f, 0.0f, 0.0f);

        // 将MuzzleOffset从摄像机空间变换到世界空间。
        FVector MuzzleLocation = CameraLocation + FTransform(CameraRotation).TransformVector(MuzzleOffset);

        // 使目标方向略向上倾斜。 
        FRotator MuzzleRotation = CameraRotation;
        MuzzleRotation.Pitch += 10.0f;

        UWorld* World = GetWorld();
        if (World)
        {
            FActorSpawnParameters SpawnParams;
            SpawnParams.Owner = this;
            SpawnParams.Instigator = GetInstigator();

            // 在枪口位置生成发射物。
            AFPSProjectile* Projectile = World->SpawnActor<AFPSProjectile>(ProjectileClass, MuzzleLocation, MuzzleRotation, SpawnParams);
            if (Projectile)
            {
                // 设置发射物的初始轨迹。
                FVector LaunchDirection = MuzzleRotation.Vector();
                Projectile->FireInDirection(LaunchDirection);
            }

        }
    }
}
```

### ✒ FPSProjectile 抛射物体类

FPSProjectile

```C++
// FPSProjectile.h
//版权所有Epic Games, Inc。保留所有权利。

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Components/SphereComponent.h"
#include "GameFramework/ProjectileMovementComponent.h"
#include "FPSProjectile.generated.h"

UCLASS()
class FPSPROJECT_API AFPSProjectile : public AActor
{
    GENERATED_BODY()

public: 
    // 为此Actor的属性设置默认值
    AFPSProjectile();

protected:
    // 当游戏开始或重生（Spawn）时被调用
    virtual void BeginPlay() override;

public: 
    // 每一帧都被调用
    virtual void Tick(float DeltaTime) override;

    // 当发射物击中物体时会调用的函数。
    UFUNCTION()
    void OnHit(UPrimitiveComponent* HitComponent, AActor* OtherActor, UPrimitiveComponent* OtherComponent, FVector NormalImpulse, const FHitResult& Hit);

    // 球体碰撞组件
    UPROPERTY(VisibleDefaultsOnly, Category = Projectile)
    USphereComponent* CollisionComponent;

    // 发射物移动组件
    UPROPERTY(VisibleAnywhere, Category = Movement)
    UProjectileMovementComponent* ProjectileMovementComponent;

    // 发射物网格体
    UPROPERTY(VisibleDefaultsOnly, Category = Projectile)
    UStaticMeshComponent* ProjectileMeshComponent;

    // 发射物材质
    UPROPERTY(VisibleDefaultsOnly, Category = Movement)
    UMaterialInstanceDynamic* ProjectileMaterialInstance;

    // 初始化射击方向上发射物速度的函数。
    void FireInDirection(const FVector& ShootDirection);

};

// FPSProjectile.cpp
//版权所有Epic Games, Inc。保留所有权利。         

#include "FPSProjectile.h"

// 设置默认值
AFPSProjectile::AFPSProjectile()
{
    // 将此actor设置为每帧调用Tick()。  如果不需要此特性，可以关闭以提升性能。
    PrimaryActorTick.bCanEverTick = true;

    if (!RootComponent)
    {
        RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("ProjectileSceneComponent"));
    }

    if (!CollisionComponent)
    {
        // 用球体进行简单的碰撞展示。
        CollisionComponent = CreateDefaultSubobject<USphereComponent>(TEXT("SphereComponent"));
        // 将球体的碰撞配置文件名称设置为"Projectile"。
        CollisionComponent->BodyInstance.SetCollisionProfileName(TEXT("Projectile"));
        // 组件击中某物时调用的事件。
        CollisionComponent->OnComponentHit.AddDynamic(this, &AFPSProjectile::OnHit);
        // 设置球体的碰撞半径。
        CollisionComponent->InitSphereRadius(15.0f);
        // 将根组件设置为碰撞组件。
        RootComponent = CollisionComponent;
    }

    if (!ProjectileMovementComponent)
    {
        // 使用此组件驱动发射物的移动。
        ProjectileMovementComponent = CreateDefaultSubobject<UProjectileMovementComponent>(TEXT("ProjectileMovementComponent"));
        ProjectileMovementComponent->SetUpdatedComponent(CollisionComponent);
        ProjectileMovementComponent->InitialSpeed = 3000.0f;
        ProjectileMovementComponent->MaxSpeed = 3000.0f;
        ProjectileMovementComponent->bRotationFollowsVelocity = true;
        ProjectileMovementComponent->bShouldBounce = true;
        ProjectileMovementComponent->Bounciness = 0.3f;
        ProjectileMovementComponent->ProjectileGravityScale = 0.0f;
    }

    if (!ProjectileMeshComponent)
    {
        ProjectileMeshComponent = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("ProjectileMeshComponent"));
        static ConstructorHelpers::FObjectFinder<UStaticMesh>Mesh(TEXT("'/Game/Sphere.Sphere'"));
        if (Mesh.Succeeded())
        {
            ProjectileMeshComponent->SetStaticMesh(Mesh.Object);
        }

        static ConstructorHelpers::FObjectFinder<UMaterial>Material(TEXT("'/Game/SphereMaterial.SphereMaterial'"));
        if (Material.Succeeded())
        {
            ProjectileMaterialInstance = UMaterialInstanceDynamic::Create(Material.Object, ProjectileMeshComponent);
        }
        ProjectileMeshComponent->SetMaterial(0, ProjectileMaterialInstance);
        ProjectileMeshComponent->SetRelativeScale3D(FVector(0.09f, 0.09f, 0.09f));
        ProjectileMeshComponent->SetupAttachment(RootComponent);
    }

    // 3 秒后删除发射物。
    InitialLifeSpan = 3.0f;
}

// 当游戏开始或重生（Spawn）时被调用
void AFPSProjectile::BeginPlay()
{
    Super::BeginPlay();

}

// 每一帧都被调用
void AFPSProjectile::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);

}

void AFPSProjectile::OnHit(UPrimitiveComponent* HitComponent, AActor* OtherActor, UPrimitiveComponent* OtherComponent, FVector NormalImpulse, const FHitResult& Hit)
{
    if (OtherActor != nullptr && OtherActor != this && OtherComponent != nullptr && OtherComponent->IsSimulatingPhysics())
    {
        OtherComponent->AddImpulseAtLocation(ProjectileMovementComponent->Velocity * 100.0f, Hit.ImpactPoint);
    }

    Destroy();
}

// 初始化射击方向上发射物速度的函数。
void AFPSProjectile::FireInDirection(const FVector& ShootDirection)
{
    ProjectileMovementComponent->Velocity = ShootDirection * ProjectileMovementComponent->InitialSpeed;
}
```

### ✒ FPSHUD 准星平面对象

FPSHUD 信息显示组件

```C++
// FPSHUD.h
//版权所有Epic Games, Inc。保留所有权利。

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/HUD.h"
#include "Engine/Canvas.h"
#include "FPSHUD.generated.h"

/**
 * 
 */
UCLASS()
class FPSPROJECT_API AFPSHUD : public AHUD
{
    GENERATED_BODY()

public:
    // HUD绘制的主要调用。
    virtual void DrawHUD() override;

protected:
    // 将被绘制在屏幕中心。
    UPROPERTY(EditDefaultsOnly)
    UTexture2D* CrosshairTexture;
};

// FPSHUD.cpp
//版权所有Epic Games, Inc。保留所有权利。         

#include "FPSHUD.h"

void AFPSHUD::DrawHUD()
{
    Super::DrawHUD();

    if (CrosshairTexture)
    {
        // 找出我们的画布的中心点。
        FVector2D Center(Canvas->ClipX * 0.5f, Canvas->ClipY * 0.5f);

        // 偏移纹理大小的一半，以便纹理中心与画布中心对齐。
        FVector2D CrossHairDrawPosition(Center.X - (CrosshairTexture->GetSurfaceWidth() * 0.5f), Center.Y - (CrosshairTexture->GetSurfaceHeight() * 0.5f));

        // 在中心点绘制十字准星。
        FCanvasTileItem TileItem(CrossHairDrawPosition, CrosshairTexture->Resource, FLinearColor::White);
        TileItem.BlendMode = SE_BLEND_Translucent;
        Canvas->DrawItem(TileItem);
    }
}
```






## ⚡ PlayerCharacter 模板参考
- 设置角色动作 https://docs.unrealengine.com/4.26/zh-CN/InteractiveExperiences/HowTo/CharacterMovement/

要为角色制作动画，你将需要动画初学者包（Animation Starter Pack），可从 Epic Games 虚幻商城免费下载。

Epic 动画初学者内容包，内容大概 20MB，含 62 个动画，可以与 Epic 经典人模或未来的商城发布产品完美配合使用。该动画合集非常适合用于为你的下一个项目制作原型，或让你的下一个模组运行起来。

在 C++ 类向导中，新建名为 PlayerCharacter 的 Character 类，并声明以下类定义 PlayerCharactor.h：

```C++
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "PlayerCharacter.generated.h"

UCLASS()
class CHARACTERMOVEMENT_API APlayerCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    APlayerCharacter();

protected:
    // 当游戏开始或重生（Spawn）时被调用
    virtual void BeginPlay() override;

    //跟随玩家背后摄像机的弹簧臂组件
    UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
    class USpringArmComponent* SpringArmComp;

    //玩家跟随摄像机
    UPROPERTY(VisibleAnywhere, BlueprintReadWrite)
    class UCameraComponent* CameraComp; 

    void MoveForward(float InputAxis);
    void MoveRight(float InputAxis);

    // 角色冲刺移动速度设置
    void BeginSprint();
    void EndSprint();

    // 角色蹲伏设置
    void BeginCrouch();
    void EndCrouch();

public: 

    virtual void Tick(float DeltaTime) override;

    // 用户输入与功能之间的绑定处理
    virtual ACharacter SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
};
```

PlayerCharactor.cpp 实现参考：

```C++
#include "PlayerCharacter.h"
#include "Camera/CameraComponent.h"
#include "GameFramework/SpringArmComponent.h"
#include "GameFramework/CharacterMovementComponent.h"

// 设置默认值
APlayerCharacter::APlayerCharacter()
{
    // 将此角色设置为每帧调用Tick()。  如果你不需要此特性，你可以关闭以提升性能。
    PrimaryActorTick.bCanEverTick = true;

    //实例化你的类组件
    SpringArmComp = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArmComp"));
    CameraComp = CreateDefaultSubobject<UCameraComponent>(TEXT("CameraComp"));

    //设置角色网格体变换的位置和旋转
    GetMesh()->SetRelativeLocationAndRotation(FVector(0.0f, 0.0f, -90.0f), FQuat(FRotator(0.0f, -90.0f, 0.0f)));

    //将你的类组件附加到默认角色的骨骼网格体组件。
    SpringArmComp->SetupAttachment(GetMesh());
    CameraComp->SetupAttachment(SpringArmComp,USpringArmComponent::SocketName);

    //设置弹簧臂的类变量
    SpringArmComp->bUsePawnControlRotation = true;

    //设置角色动作组件的类变量
    GetCharacterMovement()->bOrientRotationToMovement = true;
    GetCharacterMovement()->bUseControllerDesiredRotation = true;
    GetCharacterMovement()->bIgnoreBaseRotation = true;
}

// 当游戏开始或重生（Spawn）时被调用
void APlayerCharacter::BeginPlay()
{
    Super::BeginPlay();

}

void APlayerCharacter::MoveForward(float AxisValue)
{
    if ((Controller != nullptr) && (AxisValue != 0.0f))
    {
        // 找出向前方向
        const FRotator Rotation = Controller->GetControlRotation();
        const FRotator YawRotation(0, Rotation.Yaw, 0);

        // 获取向前矢量
        const FVector Direction = FRotationMatrix(YawRotation).GetUnitAxis(EAxis::X);
        AddMovementInput(Direction, AxisValue);
    }
}

void APlayerCharacter::MoveRight(float AxisValue)
{
    if ((Controller != nullptr) && (AxisValue != 0.0f))
    {
        // 找出向右方向
        const FRotator Rotation = Controller->GetControlRotation();
        const FRotator YawRotation(0, Rotation.Yaw, 0);

        // 获取向右矢量 
        const FVector Direction = FRotationMatrix(YawRotation).GetUnitAxis(EAxis::Y);

        // 添加该方向动作
        AddMovementInput(Direction, AxisValue);
    }
}

void APlayerCharacter::BeginSprint()
{
GetCharacterMovementComponent()->MaxWalkSpeed = 1000.0f;
}

void APlayerCharacter::EndSprint()
{
    GetCharacterMovementComponent()->MaxWalkSpeed = 600.f;
}

void APlayerCharacter::BeginCrouch()
{
    Crouch();
}

void APlayerCharacter::EndCrouch()
{
    UnCrouch();
}

void APlayerCharacter::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
}

// 为将功能绑定到输入而调用
void APlayerCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);
    PlayerInputComponent->BindAxis("MoveForward",this, &APlayerCharacter::MoveForward);
    PlayerInputComponent->BindAxis("MoveRight", this, &APlayerCharacter::MoveRight);
    PlayerInputComponent->BindAxis("Turn", this, &APawn::AddControllerYawInput);
    PlayerInputComponent->BindAxis("LookUp", this, &APawn::AddControllerPitchInput);
    PlayerInputComponent->BindAction("Jump",IE_Pressed,this, &ACharacter::Jump);
    PlayerInputComponent->BindAction("Jump",IE_Released,this, &ACharacter::StopJumping);
    PlayerInputComponent->BindAction("Crouch",IE_Pressed,this,&APlayerCharacter::BeginCrouch);
    PlayerInputComponent->BindAction("Crouch",IE_Released,this,&APlayerCharacter::EndCrouch);
    PlayerInputComponent->BindAction("Sprint",IE_Pressed,this, &APlayerCharacter::BeginSprint);
    PlayerInputComponent->BindAction("Sprint",IE_Released,this, &APlayerCharacter::EndSprint);
}
```

## ⚡ RespawnPlayerGameMode 模板参考
- 重生玩家 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo/RespawnPlayer/
- Delegates 委托 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Delegates
- Actor 通信：EventDispatcher https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ActorCommunication/EventDispatcherQuickStart/
- Event Dispatchers https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Blueprints/UserGuide/EventDispatcher/

注意，使用第三人称模板创建 C++ 工程，修改 build.cs 添加 HeadMountedDisplay 支持。

RespawnPlayerGameMode.h

```C++
//版权所有Epic Games, Inc。保留所有权利。
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "RespawnPlayerGameMode.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPlayerDiedSignature, ACharacter*, Character);

UCLASS(minimalapi)

class ARespawnPlayerGameMode : public AGameModeBase
{
    GENERATED_BODY()

public:

    ARespawnPlayerGameMode();

    const FOnPlayerDiedSignature& GetOnPlayerDied() const { return OnPlayerDied; }

//尝试生成玩家的Pawn。
virtual void RestartPlayer(AController* NewPlayer) override;

protected:

    virtual void BeginPlay() override;

    //在玩家角色死亡时调用。
    UFUNCTION()
    virtual void PlayerDied(ACharacter* Character);

    //要绑定委托的签名。 
    UPROPERTY()
    FOnPlayerDiedSignature OnPlayerDied;
};
```

RespawnPlayerGameMode.cpp

```C++
#include "RespawnPlayerGameMode.h"
#include "RespawnPlayerCharacter.h"
#include "UObject/ConstructorHelpers.h"

ARespawnPlayerGameMode::ARespawnPlayerGameMode()
{
    //将默认Pawn类设置为已绘制蓝图的角色
    static ConstructorHelpers::FClassFinder<APawn> 
        PlayerPawnBPClass(TEXT("/Game/ThirdPersonCPP/Blueprints/ThirdPersonCharacter"));
        // C:/Unreal Projects/TpCPP/Content/ThirdPersonCPP/Blueprints/ThirdPersonCharacter.uasset
        // PlayerPawnBPClass(TEXT("PawnBlueprint'/Game/FirstPersonBP/Blueprints/FirstPersonCharacter'"));
        // C:/Unreal Projects/Fp/Content/FirstPersonBP/Blueprints/FirstPersonCharacter.uasset
    if (PlayerPawnBPClass.Class != NULL)
    {
        DefaultPawnClass = PlayerPawnBPClass.Class;
    }
}

void ARespawnPlayerGameMode::BeginPlay()
{
    Super::BeginPlay();

    //将我们的玩家已死亡委托绑定到GameMode的PlayerDied函数。
    if (!OnPlayerDied.IsBound())
    {
        OnPlayerDied.AddDynamic(this, &ARespawnPlayerGameMode::PlayerDied);
    }
}

void ARespawnPlayerGameMode::RestartPlayer(AController* NewPlayer)
{
    Super::RestartPlayer(NewPlayer);
}

void ARespawnPlayerGameMode::PlayerDied(ACharacter* Character)
{
    //获得角色玩家控制器的引用
    AController* CharacterController = Character->GetController();
    RestartPlayer(CharacterController);
}
```

这里创建了事件委托用于监听，通知方是 RespawnPlayerCharacter，它通过 `CallRestartPlayer` 执行委托，然后调用上面的 `PlayerDied` 方法，实现角色重生。



## ⚡ RespawnPlayerCharacter 模板参考
- 重生玩家 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo/RespawnPlayer/
- 生成/销毁Actor总览 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/SpawnAndDestroyActors/

前往 Edit -> Project Settings -> Engine -> Input -> Details -> Bindings 设置操作映射（Action Mappings） 变量旁边的 添加（Add）(+) 按钮，创建名为 Restart 的新操作映射，将 Restart 操作映射键值设置为 R，用于触发 `CallRestartPlayer`函数将销毁玩家角色。若发生了导致玩家角色消失的 Gameplay 事件，玩家因此失去足够的生命值，通常会调用 销毁（Destroy） 方法。

RespawnPlayerCharacter.h

```C++
//版权所有Epic Games, Inc。保留所有权利。

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "RespawnPlayerCharacter.generated.h"

UCLASS(config=Game)
class ARespawnPlayerCharacter : public ACharacter
{
    GENERATED_BODY()

    /** 用于将摄像机放置在角色身后的摄像机升降臂 */
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = Camera, meta = (AllowPrivateAccess = "true"))
    class USpringArmComponent* CameraBoom;

    /** 跟随摄像机 */
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = Camera, meta = (AllowPrivateAccess = "true"))
    class UCameraComponent* FollowCamera;

public:

    ARespawnPlayerCharacter();

    /** 基础旋转速度，以度/秒为单位。其他单位可能会影响最终旋转速度。*/
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=Camera)
    float BaseTurnRate;

    /** 基础向上看/向下看速度，以度/秒为单位。其他单位可能会影响最终速度。*/
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=Camera)
    float BaseLookUpRate;

protected:

    virtual void BeginPlay();
    virtual void Destroyed();
    void CallRestartPlayer();

    /** 重置VR中的HMD方向。*/
    void OnResetVR();

    /** 为向前/向后输入而调用*/
    void MoveForward(float Value);

    /** 为侧面到侧面输入而调用 */
    void MoveRight(float Value);

    /** 
     * 通过输入进行调用，从而以给定的速度旋转 
     * @param 速度    这是规范化速度，即1. 0表示100%的所需旋转速度
     */
    void TurnAtRate(float Rate);

    /**
     * 通过输入进行调用，从而以给定的速度向上看/向下看 
     * @param 速度    这是规范化速度，即1. 0表示100%的所需旋转速度
     */
    void LookUpAtRate(float Rate);

    /** 在触摸输入开始时使用的处理程序。*/
    void TouchStarted(ETouchIndex::Type FingerIndex, FVector Location);

    /** 在触摸输入停止时使用的处理程序。*/
    void TouchStopped(ETouchIndex::Type FingerIndex, FVector Location);

protected:

    // APawn接口
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
    // APawn末端接口

public:
    /** 返回CameraBoom子对象 **/
    FORCEINLINE class USpringArmComponent* GetCameraBoom() const { return CameraBoom; }

    /** 返回FollowCamera子对象 **/
    FORCEINLINE class UCameraComponent* GetFollowCamera() const { return FollowCamera; }
};
```

ARespawnPlayerCharacter.cpp

注意，加载动画资产时，多了后缀 ThirdPerson_AnimBP -> ThirdPerson_AnimBP_C。

```C++
//版权所有Epic Games, Inc。保留所有权利。

#include "RespawnPlayerCharacter.h"
#include "HeadMountedDisplayFunctionLibrary.h"
#include "Camera/CameraComponent.h"
#include "Components/CapsuleComponent.h"
#include "Components/InputComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "GameFramework/Controller.h"
#include "GameFramework/SpringArmComponent.h"
#include "RespawnPlayerGameMode.h"

//////////////////////////////////////////////////////////////////////////
// ARespawnPlayerCharacter

ARespawnPlayerCharacter::ARespawnPlayerCharacter()
{
    // 设置碰撞胶囊体的大小
    GetCapsuleComponent()->InitCapsuleSize(42.f, 96.0f);

    // 为输入设置我们的旋转速度
    BaseTurnRate = 45.f;
    BaseLookUpRate = 45.f;

    // 当控制器旋转时不旋转使其仅影响摄像机。
    bUseControllerRotationPitch = false;
    bUseControllerRotationYaw = false;
    bUseControllerRotationRoll = false;

    // 配置角色移动
    GetCharacterMovement()->bOrientRotationToMovement = true; // Character moves in the direction of input...   
    GetCharacterMovement()->RotationRate = FRotator(0.0f, 540.0f, 0.0f); // ...以此旋转速度
    GetCharacterMovement()->JumpZVelocity = 600.f;
    GetCharacterMovement()->AirControl = 0.2f;

    // 创建摄像机升降臂（发生碰撞则朝着玩家推进）
    CameraBoom = CreateDefaultSubobject<USpringArmComponent>(TEXT("CameraBoom"));
    CameraBoom->SetupAttachment(RootComponent);
    CameraBoom->TargetArmLength = 300.0f; // The camera follows at this distance behind the character   
    CameraBoom->bUsePawnControlRotation = true; // 基于控制器旋转升降臂

    // 创建一个跟随摄像机
    FollowCamera = CreateDefaultSubobject<UCameraComponent>(TEXT("FollowCamera"));
    FollowCamera->SetupAttachment(CameraBoom, USpringArmComponent::SocketName); // 将摄像机连接到升降臂末端，对升降臂进行调整以便与控制器方向保持一致
    FollowCamera->bUsePawnControlRotation = false; // 摄像机不相对于升降臂旋转

    // 注意：网格体组件上的骨骼网格体和动画蓝图引用（从角色继承） 
    // 是在名为MyCharacter的推导蓝图资产中设置的（以避免在C++中直接引用内容）
    static ConstructorHelpers::FObjectFinder<USkeletalMesh>
        SkeletalMeshAsset(TEXT("SkeletalMesh'/Game/Mannequin/Character/Mesh/SK_Mannequin.SK_Mannequin'"));
        // C:/Unreal Projects/Tp/Content/Mannequin/Character/Mesh/SK_Mannequin.uasset
    GetMesh()->SetSkeletalMesh(SkeletalMeshAsset.Object);
    GetMesh()->SetRelativeLocation(FVector(0.0f, 0.0f, -97.0f));
    GetMesh()->SetRelativeRotation(FQuat(FRotator(0.0f, 270.0f, 0.0f)));
    static ConstructorHelpers::FObjectFinder<UAnimBlueprintGeneratedClass>
        AnimInstanceAsset(TEXT("AnimBlueprint'/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP_C'"));
        // C:/Unreal Projects/Tp/Content/Mannequin/Animations/ThirdPerson_AnimBP.uasset
    GetMesh()->SetAnimInstanceClass(AnimInstanceAsset.Object);
}

//////////////////////////////////////////////////////////////////////////
// 输入

void ARespawnPlayerCharacter::SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent)
{
    // 设置Gameplay键绑定
    check(PlayerInputComponent);
    PlayerInputComponent->BindAction("Jump", IE_Pressed, this, &ACharacter::Jump);
    PlayerInputComponent->BindAction("Jump", IE_Released, this, &ACharacter::StopJumping);
    PlayerInputComponent->BindAxis("MoveForward", this, &ARespawnPlayerCharacter::MoveForward);
    PlayerInputComponent->BindAxis("MoveRight", this, &ARespawnPlayerCharacter::MoveRight);

    // 我们提供了两个版本的旋转绑定来处理不同类型的设备，
    // "旋转"负责处理可以提供绝对增量的设备，例如鼠标。
    // "旋转速度"适用于我们选择作为更改速度来处理的设备，例如模拟摇杆
    PlayerInputComponent->BindAxis("Turn", this, &APawn::AddControllerYawInput);
    PlayerInputComponent->BindAxis("TurnRate", this, &ARespawnPlayerCharacter::TurnAtRate);
    PlayerInputComponent->BindAxis("LookUp", this, &APawn::AddControllerPitchInput);
    PlayerInputComponent->BindAxis("LookUpRate", this, &ARespawnPlayerCharacter::LookUpAtRate);

    // 处理触摸设备
    PlayerInputComponent->BindTouch(IE_Pressed, this, &ARespawnPlayerCharacter::TouchStarted);
    PlayerInputComponent->BindTouch(IE_Released, this, &ARespawnPlayerCharacter::TouchStopped);

    // VR头戴设备功能
    PlayerInputComponent->BindAction("ResetVR", IE_Pressed, this, &ARespawnPlayerCharacter::OnResetVR);
    PlayerInputComponent->BindAction("Restart", IE_Pressed, this, &ARespawnPlayerCharacter::CallRestartPlayer);
}

void ARespawnPlayerCharacter::BeginPlay()
{
    Super::BeginPlay();
}

void ARespawnPlayerCharacter::Destroyed()
{
    Super::Destroyed();

    //关于绑定至GameMode中的OnPlayerDied事件的示例如果是多人游戏，那么此方法_不是_一个好选项。
    if (UWorld* World = GetWorld())
    {
        if (ARespawnPlayerGameMode* GameMode = Cast<ARespawnPlayerGameMode>(World->GetAuthGameMode()))
        {
            GameMode->GetOnPlayerDied().Broadcast(this);
        }
    }
}

void ARespawnPlayerCharacter::CallRestartPlayer()
{
    AController* CortollerRef = GetController();
    Destroy();

    if (UWorld* World = GetWorld())
    {
        if (ARespawnPlayerGameMode* GameMode = Cast<ARespawnPlayerGameMode>(World->GetAuthGameMode()))
        {
            GameMode->RestartPlayer(CortollerRef);
        }
    }
}

void ARespawnPlayerCharacter::OnResetVR()
{
    // 如果在虚幻编辑器中通过"添加功能（Add Feature）"将RespawnPlayer添加到项目，则RespawnPlayer.Build.cs中HeadMountedDisplay上的依赖关系不会自动传播，
    // 并将产生连接器错误。
    // 你将需要：
    //      将"HeadMountedDisplay"添加到[YourProject].Build.cs，以成功构建PublicDependencyModuleNames（如果支持VR则适用）
    // 或者：
    //      注释或删除以下对ResetOrientationAndPosition的调用（如果不支持VR则适用）
    UHeadMountedDisplayFunctionLibrary::ResetOrientationAndPosition();
    CallDestroyPlayer();
}

void ARespawnPlayerCharacter::TouchStarted(ETouchIndex::Type FingerIndex, FVector Location)
{
        Jump();
}

void ARespawnPlayerCharacter::TouchStopped(ETouchIndex::Type FingerIndex, FVector Location)
{
        StopJumping();
}

void ARespawnPlayerCharacter::TurnAtRate(float Rate)
{
    // 根据速度信息计算此帧的增量
    AddControllerYawInput(Rate * BaseTurnRate * GetWorld()->GetDeltaSeconds());
}

void ARespawnPlayerCharacter::LookUpAtRate(float Rate)
{
    // 根据速度信息计算此帧的增量
    AddControllerPitchInput(Rate * BaseLookUpRate * GetWorld()->GetDeltaSeconds());
}

void ARespawnPlayerCharacter::MoveForward(float Value)
{
    if ((Controller != nullptr) && (Value != 0.0f))
    {
        // 找出向前方向
        const FRotator Rotation = Controller->GetControlRotation();
        const FRotator YawRotation(0, Rotation.Yaw, 0);

        // 获取向前向量
        const FVector Direction = FRotationMatrix(YawRotation).GetUnitAxis(EAxis::X);
        AddMovementInput(Direction, Value);
    }
}

void ARespawnPlayerCharacter::MoveRight(float Value)
{
    if ( (Controller != nullptr) && (Value != 0.0f) )
    {
        // 找出向右方向
        const FRotator Rotation = Controller->GetControlRotation();
        const FRotator YawRotation(0, Rotation.Yaw, 0);

        // 获取向右向量 
        const FVector Direction = FRotationMatrix(YawRotation).GetUnitAxis(EAxis::Y);
        // 添加该方向动作
        AddMovementInput(Direction, Value);
    }
}
```



## ⚡ Pawn 类模板参考
- Programming Quick Start https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ProgrammingWithCPP/CPPProgrammingQuickStart/

在工程内容浏览器中，使用菜单 Add New -> New C++ Class 打开类创建向导窗口，最新 UE 4.27 版本界面变更了，使用文件菜单创建 File -> New C++ Class... 

以下代码，修改了 Pawn 类模板，添加了两个属性：

- Message 类型为 FString 即 UE 4 的字符串容器，源代码位于 Runtime\Core\Public\Containers\UnrealString.h
- VisualMesh 类形为 UStaticMeshComponent，即在场景中可见的静态风格模型，通过 `FObjectFinder` 泛型加载资产文件。

ConstructorHelpers 还有一个 `FClassFinder` 用来加载，但是只能在构造函数中使用，否则会出错。

其它涉及的 API：

- FindPackage
- LoadPackage
- LoadObject 内部调用 StaticLoadObject；
- LoadClass 内部调用 StaticLoadClass；

列如，使用 LoadObject 加载静态网络资产：

```cpp
UStaticMesh *mesh = LoadObject<UStaticMesh>(nullptr, TEXT("/Engine/StarterContent/Shapes/Shape_Cube"));
if (mesh != nullptr) {
    VisualMesh->SetStaticMesh(mesh);
    VisualMesh->SetRelativeLocation(FVector(0.0f, 0.0f, 0.0f)); 
}
```

参考源代码 UE_4.27\Engine\Source\Runtime\CoreUObject\Public\UObject\UObjectGlobals.h

编译生成类库后，可以将 My Pawn 类添加到关卡中，并且可以在主界面的 Detail 面板中查看到 My Character 分组中有这两个属性。使用 VisibleAnywhere 说明符的属性不会出现在 Detail 面板中。

另外，加载资产时，扩展名可以省略。特别地，比如通过内容浏览器可以查看到 /Game/Engine Content/StarterContent/Shapes/Shape_Cube.Shape_Cube 这个立方体模型，加载时，使用 `/Engine` 路径开头替代 /Game/Engine Content，而不是使用 `/Game` 开头。

```cpp
// MyPawn.h
// Fill out your copyright notice in the Description page of Project Settings.
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Pawn.h"
#include "MyPawn.generated.h"

UCLASS()
class STARTER_API AMyPawn : public APawn
{
    GENERATED_BODY()

public:
    // Sets default values for this pawn's properties
    AMyPawn();

    UPROPERTY(EditAnyWhere, BlueprintReadWrite, Category="MyCharacter")
    FString Message;

    // UPROPERTY(VisibleAnywhere)
    UPROPERTY(EditAnyWhere, BlueprintReadWrite, Category="MyCharacter")
    UStaticMeshComponent* VisualMesh;

protected:
    // Called when the game starts or when spawned
    virtual void BeginPlay() override;

public: 
    // Called every frame
    virtual void Tick(float DeltaTime) override;

    // Called to bind functionality to input
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
};
```

```cpp
// Fill out your copyright notice in the Description page of Project Settings.

#include "MyPawn.h"

// Sets default values
AMyPawn::AMyPawn(): Message(FString(TEXT("Hello Blueprintable!")))
{
    // Set this pawn to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
    PrimaryActorTick.bCanEverTick = true;

    VisualMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    VisualMesh->SetupAttachment(RootComponent);

    static ConstructorHelpers::FObjectFinder<UStaticMesh> 
    CubeVisualAsset(TEXT("/Engine/StarterContent/Shapes/Shape_Cube"));
    // "/Game/Engine Content/StarterContent/Shapes/Shape_Cube.Shape_Cube";

    if (CubeVisualAsset.Succeeded()) 
    { 
            VisualMesh->SetStaticMesh(CubeVisualAsset.Object); 
            VisualMesh->SetRelativeLocation(FVector(0.0f, 0.0f, 0.0f)); 
    }
}


// Called when the game starts or when spawned
void AMyPawn::BeginPlay()
{
    Super::BeginPlay();
}

// Called every frame
void AMyPawn::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
    FVector loc = GetActorLocation();
    FRotator rot = GetActorRotation();
    float time = GetGameTimeSinceCreation();
    float delta = FMath::Sin(time - DeltaTime) - FMath::Sin(time);
    loc.Z += delta * 20.0f; // add to height
    rot.Yaw += DeltaTime * 20.0f; // rotate 20.0 degress per tick
    SetActorLocationAndRotation(loc, rot);
}

// Called to bind functionality to input
void AMyPawn::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);

}
```

经过 UBT 编译，原代码会在项目目录 Intermediate\Build\Win64\UE4Editor\Inc 下生成相应的 MyPawn.generated.h 这样的 C++ 代码，里面就包含具体的宏定义：

```cpp
// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.
/*===========================================================================
    Generated code exported from UnrealHeaderTool.
    DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
#ifdef STARTER_MyPawn_generated_h
#error "MyPawn.generated.h already included, missing '#pragma once' in MyPawn.h"
#endif
#define STARTER_MyPawn_generated_h

#define starter_Source_starter_MyPawn_h_12_RPC_WRAPPERS
#define starter_Source_starter_MyPawn_h_12_RPC_WRAPPERS_NO_PURE_DECLS
#define starter_Source_starter_MyPawn_h_12_INCLASS_NO_PURE_DECLS \
private: \
    static void StaticRegisterNativesAMyPawn(); \
    friend struct Z_Construct_UClass_AMyPawn_Statics; \
public: \
    DECLARE_CLASS(AMyPawn, APawn, COMPILED_IN_FLAGS(0), CASTCLASS_None, TEXT("/Script/starter"), NO_API) \
    DECLARE_SERIALIZER(AMyPawn)


#define starter_Source_starter_MyPawn_h_12_INCLASS \
private: \
    static void StaticRegisterNativesAMyPawn(); \
    friend struct Z_Construct_UClass_AMyPawn_Statics; \
public: \
    DECLARE_CLASS(AMyPawn, APawn, COMPILED_IN_FLAGS(0), CASTCLASS_None, TEXT("/Script/starter"), NO_API) \
    DECLARE_SERIALIZER(AMyPawn)


#define starter_Source_starter_MyPawn_h_12_STANDARD_CONSTRUCTORS \
    /** Standard constructor, called after all reflected properties have been initialized */ \
    NO_API AMyPawn(const FObjectInitializer& ObjectInitializer); \
    DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(AMyPawn) \
    DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AMyPawn); \
DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AMyPawn); \
private: \
    /** Private move- and copy-constructors, should never be used */ \
    NO_API AMyPawn(AMyPawn&&); \
    NO_API AMyPawn(const AMyPawn&); \
public:


#define starter_Source_starter_MyPawn_h_12_ENHANCED_CONSTRUCTORS \
private: \
    /** Private move- and copy-constructors, should never be used */ \
    NO_API AMyPawn(AMyPawn&&); \
    NO_API AMyPawn(const AMyPawn&); \
public: \
    DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AMyPawn); \
DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AMyPawn); \
    DEFINE_DEFAULT_CONSTRUCTOR_CALL(AMyPawn)


#define starter_Source_starter_MyPawn_h_12_PRIVATE_PROPERTY_OFFSET
#define starter_Source_starter_MyPawn_h_9_PROLOG
#define starter_Source_starter_MyPawn_h_12_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
    starter_Source_starter_MyPawn_h_12_PRIVATE_PROPERTY_OFFSET \
    starter_Source_starter_MyPawn_h_12_RPC_WRAPPERS \
    starter_Source_starter_MyPawn_h_12_INCLASS \
    starter_Source_starter_MyPawn_h_12_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define starter_Source_starter_MyPawn_h_12_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
    starter_Source_starter_MyPawn_h_12_PRIVATE_PROPERTY_OFFSET \
    starter_Source_starter_MyPawn_h_12_RPC_WRAPPERS_NO_PURE_DECLS \
    starter_Source_starter_MyPawn_h_12_INCLASS_NO_PURE_DECLS \
    starter_Source_starter_MyPawn_h_12_ENHANCED_CONSTRUCTORS \
private: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


template<> STARTER_API UClass* StaticClass<class AMyPawn>();

#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID starter_Source_starter_MyPawn_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS
```

GENERATED_BODY()，该宏是重中之重，其他的 UCLASS 宏只是提供信息，不参与编译，而 GENERATED_BODY 正是把声明和元数据定义关联到一起的枢纽。

查看`GENERATED_BODY`宏定义：

```cpp
#define BODY_MACRO_COMBINE_INNER(A,B,C,D) A##B##C##D
#define BODY_MACRO_COMBINE(A,B,C,D) BODY_MACRO_COMBINE_INNER(A,B,C,D)
#define GENERATED_BODY(...) BODY_MACRO_COMBINE(CURRENT_FILE_ID,_,__LINE__,_GENERATED_BODY)
```

如果需要自定义实现标准构造函数，则用 GENERATED_UCLASS_BODY 宏来让生成的代码包含 STANDARD_CONSTRUCTORS 宏定义，具体是指 `NO_API AMyPawn(const FObjectInitializer& ObjectInitializer);` 构造函数。

