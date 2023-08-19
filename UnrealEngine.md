

# 🌟 Unreal Engine 4 入门
- Installing Unreal Engine https://docs.unrealengine.com/4.26/en-US/Basics/InstallingUnrealEngine
- 许可用户的上手指南 https://docs.unrealengine.com/4.27/zh-CN/Basics/InstallingUnrealEngine/CustomLicenseInstructions/GamesGettingStarted/
- Starter Content 初学者内容资源包 https://docs.unrealengine.com/4.27/zh-CN/Basics/Projects/Browser/Packs/
- Content Example 示例与教学资源 https://docs.unrealengine.com/4.27/zh-CN/Resources/
- 虚幻构建系统 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/UnrealBuildSystem/
- UBT 虚幻引擎和游戏编译工具 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/BuildTools/
- 虚幻引擎 4 术语 https://docs.unrealengine.com/4.27/zh-CN/Basics/UnrealEngineTerminology/
- UE 4.23 HTML5 游戏开发 https://docs.unrealengine.com/4.27/zh-CN/SharingAndReleasing/HTML5/
- Web Remote Control https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/ScriptingAndAutomation/WebControl/
- Pixel Streaming Overview https://docs.unrealengine.com/4.27/zh-CN/SharingAndReleasing/PixelStreaming/PixelStreamingOverview/
- Pixel Streaming Demo https://docs.unrealengine.com/4.27/en-US/Resources/Showcases/PixelStreamingShowcase/
- Unreal Pixel Streaming in Azure https://docs.microsoft.com/en-us/gaming/azure/reference-architectures/unreal-pixel-streaming-in-azure
- UE5 全新渲染特性 https://docs.unrealengine.com/5.0/zh-CN/RenderingFeatures
- 剖析虚幻渲染体系 - 综述和基础 https://www.cnblogs.com/timlly/p/13877623.html
- MetaHuman 数字人 https://metahuman.unrealengine.com
- UE4 C++ 编程简介 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/IntroductionToCPP/
- 维度：数学漫步 Dimensions: a walk through mathematics https://www.bilibili.com/video/BV1zg41177Dk?p=5
- 3B1B 线性代数的本质 - 07 - 点积与对偶性 https://www.bilibili.com/video/BV1ys411472E?p=10

正确的 Unreal Engine 学习姿势：

- 有一定的 C++ 编程语言基础；
- 有一定的 C# 基础，因为模块化编程需要使用；
- 理解可视化编程的概念，因为 UE4 的 Blueprint 就是可视化脚本编程；
- 有计算机图形学基础，了解 3D 游戏引擎的一些基础概念，如知道什么是材质、着色器、骨骼动画融合等；

虚幻引擎历经 20 多年的发展，已经作为一款强大的通用引擎，被广泛应用于游戏制作，影视虚拟制片，AR，VR，
设计与可视化表现等多个领域，UE4 的全球用户就超过 400 万人。

最新的 UE 5 预告宣传里有两大核心技术：

- Lumen，全局光照和反射系统，解决实时渲染中的全局光照问题；
- Nanite，实时同屏上亿三角形，准子像素级的几何渲染技术；

对于现有项目，比如使用虚幻引擎 4 创建的项目，不会自动启用 Lumen，为了防止破坏或更改这些项目的
任何光照路径。

通过项目配置启用 Lumen 照明，将动态全局光照类别设置为 Lumen。还要将反射方法（Reflection Method）
设置为 Lumen，并启用生成网格体距离场（Generate Mesh Distance Fields），在 Lumen 的软件
光线追踪模式下，这是必需的。
Project Settings -> Rendering -> Dynamic Global Illumination


Nanite的优势

- 几何体形状的复杂度提高了数个数量级；三角形和对象的实时渲染数量达到了前所未有的高度。
- 帧预算（Frame Budget）不再会因为多边形数量、绘制调用和内存使用情况而受限。
- 可以直接导入电影级品质的美术资源，例如 ZBrush 雕刻模型和摄影测量扫描数据
- 通过高模实现细节，而非通过烘培法线贴图来实现
- 自动处理 LOD，不再需要手动设置
- 品质损失极少或没有损失，特别是在 LOD 发生过渡时


虚拟纹理并不要求与Nanite一起使用，但推荐这么做。虚拟纹理是一个单独的虚幻引擎功能，它与纹理数据的
关系类似于 Nanite 对网格体数据的关系。

可以通过多种方法在符合条件的几何体上启用 Nanite：在导入时打开、通过单独的网格体编辑器打开、或者在
内容浏览器中批量设置。

- 在导入要用于 Nanite 的网格体时，选中 Mesh -> Build Nanite 复选框，再导入。
- 对于已有的大量希望启用 Nanite 的资产，那么有两种办法：一个是使用内容浏览器批量启用资产，二是在每个资产的编辑器中单独启用。
- 批量静态网格体资产启用 Nanite，在 Content Browser 选择它们，然后右键点击并选择 Nanite -> Enable。
- 你也可以在静态网格体资产和几何体集合 （由 Chaos 物理系统驱动的破碎网格体）各自的编辑器中将其打开，并通过 Details 面板启用。
- 对于（Static Meshes），先打开静态网格体资产，在细节面板设置 Details -> Nanite Settings -> Enabled，点击（Apply Changes） 按钮。
- 对于几何体集合（Geometry Collections），先打开几何体集合资产，设置 Details ->  Nanite -> Enabled。


从虚幻引擎 4.24 起，对 HTML5 平台的支持已从引擎转移到公开的平台扩展上，由社区成员维护和改良。
所以 Unreal Engine 4.23.1 是最后一个集成 HTML5 平台支持的版本。

同时，虚幻引擎 4.21 推出的像素流技术 Pixel Streaming 使得在网页端流畅使用大型程序成为可能，
也扩展了虚幻程序终端的使用类型。官方的 MetaHubman 数字人工具现在就是通过 Pixel Streaming 
技术在 Web 提供试用。

利用像素流送技术，可以在用户不可见的电脑上远程运行虚幻引擎应用程序，而玩家通过一个浏览器运行的 
Web 应用来参与游戏。虚幻引擎将使用该电脑可用的资源（CPU、GPU、内存等）来运行游戏逻辑并渲染每一帧。
它会不断将此渲染输出编码到一个媒体流送中，再通过一个轻量级的网页服务堆栈进行传递。用户即可在其他
电脑和移动设备上运行的标准网页浏览器中查看直播流送，并将输入控制回传到远程运行中的虚幻引擎。

安装 UE4 时，可以选择安装 StarterContent，这接近 1GB 的资源可以用于初始学者学习时使用，里面
包含用于示范的声频、Blueprints、HDRI、Maps、材质、粒子、纹理贴图等。

在创建项目时，使用 with Starter Content 选项就可以在项目中使用这些素材的副本，可以在项目中
删除它。在内容浏览器中删除 StarterContent，然后右键最上级内容，选择修复目录重定向：
Fix Up Redirectors in Folder。

用户通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。

使用像素流送系统有以下几个优点：

- 移动设备和轻量级网页浏览器能借此显示原本无法显示的高质量画面。其能借助拥有强大GPU的本地桌面应用程序中可用的渲染功能，以高分辨率显示复杂场景。
- 用户无需提前下载大型可执行文件或内容文件，也不需要安装任何内容，用户需要下载的唯一内容便是播放的媒体流送的 Web 应用。
- 无需创建并发布多个单独的包即可支持多平台，并且程序存在服务器上，可以重复使用且不用担心资源泄露。针对 Windows 打包应用程序后，用户使用任意平台均可体验项目。用户可在任意支持 WebRTC 连接模型的主流浏览器，Chrome 或 Firefox，在电脑、iOS 和 Android 平台观看流送。
- 像素流送系统所含的组件数极少，在本地网络中进行设置相对容易。然而，经验丰富的团队也完全可以将其用作基础来创建自定义云端平台，部署网页服务。
- 像素流送使用 WebRTC 点对点通信框架，使用者和虚幻引擎应用程序之间的延迟很低。

像素流送插件在虚幻引擎中运行，它使用 H.264 视频压缩对每个渲染帧的最终结果进行编码，将这些视频帧随游戏音频一同打包到媒体流送中，并通过直接点对点连接将该流送发送到一个或多个连线的浏览器上。

另外一个组件就是信令 Web 服务器负责交涉浏览器和像素流送插件之间的连接，将播放媒体流送的 HTML 和 JavaScript 环境提供给浏览器。

在虚幻引擎安装文件夹中可以找到信令服务器，Engine/Source/Programs/PixelStreaming/WebServers/SignallingWebServer。

UHT - Unreal Header Tool 虚幻头文件分析工具是支持 UObject 系统的自定义解析和代码生成工具。是 Unreal engine 背后强大的反射机制，如 UENUM()、UCLASS()、USTRUCT()、UFUNCTION()、UPROPERTY() 这些宏用来标记不同的类型和成员变量。

代码编译分两个阶段进行：

- 调用 UHT，它将解析 C++ 头文件中引擎相关类元数据，并生成自定义代码，以实现诸多 UObject 相关的功能。
- 调用普通 C++ 编译器，以便对结果进行编译。

UBT - Unreal Build Tool 是 UE4 编译器，由 C# 编写，当你运行"GenerateProjectFiles"（一个批处理文件，用于 Window 平台下生成 Visual Studio 的解决方案和工程），第一个步骤就是在 UE4 源代码 Source/Programs/UnrealBuildTool/UnrealBuiltTool.csproj 工程目录下执行 MSBuild 来编译这个"Unreal Build Tool"，所以可以理解UBT其实就是一个命令行程序，却可以完成很多事情，比如生成工程文件、执行 UBT、为各种不同的平台构建风格来调用编译器（Compiler）和链接器（Linker）

开发者编写的 C++ 代码，糅合 UHT 转换成标准的 C++ 代码，而 UBT 负责调用 UHT 来实现这个转化工作，转化完之后 UBT 调用 C++ 编译器完成二进制文件的编译。

虚幻引擎中的类拥有一个标准化的命名方案，通过首字母或前缀即可立即明了其为哪种类。

GamePlay 架构类的前缀有：

- A 从可生成的 GamePlay 对象的基础类进行扩展，它们是 Actor 子类，如 AController，可直接生成添加到世界场景中。
- U 从所有 GamePlay 的基础类进行扩展，它们是 UComponent 子类，无法被实例到世界场景中，必须从属于 Actor。

从源代码组织上，也可以看到它们归属于 Components 和 GameFramework 两个不同的文件夹，逻辑用途的差别也是明显的。

UE4 GamePlay 架构中的基本对象解析：

- `Actor` 一个可以在世界中摆放，或者生成的角色。
    - 所有可以放入关卡的对象都是 Actor，比如摄像机、静态网格体、玩家起始位置。
    - Actor 支持三维变换，例如平移、旋转和缩放。你可以通过游戏逻辑代码（C++或蓝图）创建（生成）或销毁 Actor。
    - 在 C++ 中，`AActor` 是所有 Actor 的基类。
- `Pawn` 是一个可以从控制器获得输入信息并进行处理的 `Actor`。
    - Pawn 是 Actor 的子类，它可以充当游戏中的化身或人物（例如游戏中的角色）。
    - Pawn 可以由玩家控制，也可以由游戏 AI 控制，如非玩家角色 NPC。
    - 当 Pawn 被人类玩家或 AIController 控制时，它被视为已被控制（Possessed），否则视为未被控制（Unpossessed）。
- `Character` 人物角色是一个包含了行走，跑步，跳跃以及更多动作的 `Pawn`，还可以添加由玩家控制的运动附加代码。
- `PlayerController` 控制器负责控制场景中的 Actor。
    - 玩家控制器 Player Controller 会获取游戏中玩家的输入信息，然后转换为交互效果，每个游戏中至少有一个玩家控制器。
    - 玩家控制器通常会控制一个 Pawn 或角色，将其作为玩家在游戏中的化身。
    - 在多人联网游戏中，控制器还是的主要网络交互节点。服务器会为游戏中的每个玩家生成一个玩家控制器实例，因为它必须对每个玩家进行联网控制。
    - 每个客户端只拥有与其玩家相对应的玩家控制器，并且只能使用其玩家控制器与服务器通信。
- `Game Mode` 游戏模式类负责设置当前游戏的规则。规则包括：
    - 1.玩家如何加入游戏。
    - 2.是否可以暂停游戏。
    - 3.任何与游戏相关的行为，例如获胜条件等等。
- `World` 世界场景是一个容器，包含了游戏中的所有关卡。它可以处理关卡流送，还能生成动态 Actor。
- `Level` 关卡，即游戏阶段逻辑的拆分，比如完成一个游戏任务，通常保存在 Maps 目录。任意个关卡组成一个 World，每个关卡里包含多个 Actor。相应的 ULevel 类也是继承于 UObject，所以支持蓝图，对应关卡蓝图 ALevelScriptActor。

不同的游戏引擎开发者思维也不一样，Cocos2dx 中，认为游戏世界由 Scene 组成，每个场景再由多个 Layer 层叠表现，然后由一个 Director 来导演整个游戏。

                        +-------------+
                        |    Game     |
                        |  GameMode   |
                        |  GameState  |
                        +------^------+
                               |
         Contains:  +----------+-----------+           +---------------+
       +----------- |    PlayerController  |           |  AIController |
       |            +----------+-----------+           +-------+-------+
       |                       |                               |
       |    +---------+        | Possess  +---------+  Possess |
       +--> |   HUD   |        +--------> |   Pawn  | <--------+
       |    +---------+                   +---------+
       |    +---------+
       +--> |  Input  |
       |    +---------+
       |    +------------------------+
       +--> |  PlayerCameraManager   |
            +------------------------+

[GamePlay Framework Class Relationships](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/QuickReference/)

UE4 中 Brush 这个概念有点特别，它可以用 Mesh 当作静态模型的构造元件，但是用得越多就需要越多内存，因为 UE4 需要不断地复制副本，就像是画笔上的颜料不断地消耗。而 Static Mesh 就不同，它就是现在的一组数据，直接复用，不用复制。参考 Beginning Unreal Game Development by David Nixon。


# 🌟 Viewport Shortcut
- Gameplay Debugger https://docs.unrealengine.com/4.26/zh-CN/ProgrammingAndScripting/GameplayDebugger/
- 虚幻引擎中的各种坐标空间 https://docs.unrealengine.com/4.27/zh-CN/Basics/Actors/CoordinateSpace/
- Viewport Basics https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/Viewports/Basics/
- Viewport Modes https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LevelEditor/Viewports/ViewModes/
- Viewport Controls https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LevelEditor/Viewports/ViewportControls/
- 编辑器 VR 模式 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/VRMode
- Useful Editor Preferences https://benui.ca/unreal/useful-editor-preferences/
- 网格体绘制用户指南 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LevelEditor/Modes/MeshPaintMode/VertexColor/

关卡编辑器是最常用的界面，打开 UE 编辑器界面基本上就是在使用关卡编辑器。

首先，设置你的编辑器，将资产编辑器窗口的默认模式改为 Main Windown，这样就可以作为主窗口的选项卡出现，节省切换窗口的麻烦。General > Appearance > User Interface > Asset Editor Open Location to Main Window

另外，各种资产编辑过后会需要编译操作，设置 Save on Compile 为 On Success Only 可以自动执行保存。

可以在编辑器配置 Level Editor - Viewports - Controls 摄像机飞行类型 Flight Camera Control Type，默认是 Use WASD only when a Mouse Button is Pressed。

掌握 Viewport 视图的导航操作很重要，关键是 Focus 焦点，视场角 FOV - Field-of-View 和移动及旋转的把握：

- 按住 Left Button 向前移、向后退对应移动将摄像机位，左右移动表示旋转摄像机的方向，对应 WASD 功能键。
- 按住 Right Button 移动鼠标则是摇动摄像机镜头方向；
- 按住 Left + Rigth Button 则可以沿 Z 轴进行升降移动摄像机，以及左右移动。
- 按住 Alt + Left Button 再移动鼠标对场景进行各个轴的旋转，以摄像*焦点*为中心点。
- 按住 Alt + Right Button 左右移动鼠标，对应远离或推近镜头到*焦点*。
- 滚轮调整 FOV 视场角，可以放大或缩小画面，按着鼠标时使用 Z 和 C 键临时调整 FOV。
- 使用 F 可以聚集到选中的 Static Mesh 对象，如果对象内部有摄像机机组件，则会定位到内部视角。
- 在其它编辑器中，还可以使用 Browser 功能，Ctrl + B 来定位对象在 Content Browser 的目录位置。

将摄像机聚焦在选定对象上，要充分利用翻转摄像机，只要你定位好观察物体的镜头的角度，按下 F 键就会自动帮你将镜头移动到物体的前方。

对于有 SkyAtmosphere 和 VolumetricCloud 的场景，如 DayOfTime 关卡模板，需要将镜头定位到一百万米的高层天空，Viewport 视口摄像机镜头坐标不能直接设置，可以通过放置 Actor 并设置相应的 Z 轴高度，保持选中状态并按 F 键就可以将镜头移到相应的高度。

在场景中，还可以使用 Pilot 功能，Ctrl + Shift + P，选择物体进入飞行模式后，就可以使用以上的操作来给 Flying Mode 状态的对象设置位置、旋转等属性，并且实时观察到对象正面的画面。设置完成后，通过 Viewport 左上角的 Stop Piloting 退出飞行模式。

选中摄像机时，会有镜头画面预览窗口，可以调整大小：Editor Settings -> Level Editor -> Viewports -> Look and Feel -> Preview Selected Cameras, Camera Preview Size, Use Camera Location from Play-In-Viewport。

在游戏运行时按下撇号（'）键即可启用 AI 调试，分号（;）键打开 Gameplay Debugger，它会添加一个支持 WASD 运动的摄像机。

UE 4 不再使用 1 uu = 0.75 in = 1.905 cm 这样的单位，而是直接使用 cm，在工程配置可以设置 Measuring Tool Unit，Centimeters/Meters/Kilometers。

UE4 坐标系统使用 Z 轴朝下的左手坐标系统，拇指对应 Y 轴向右，食指对应 Z 轴向前，中指对应 X 轴。在 3D 视图中 X 轴向右，Y 轴向垂直屏幕向外，Z 轴向上，分别用红、黄、蓝三种色表示。和 Blender 的坐标系统不同，它使用右手坐标系统，拇指对应 X 轴正方向右，食指对应 Y 轴正向垂直于屏幕向里，朝向刚好和 UE4 相反，中指对应 Z 轴竖起向上。

锁定一个轴向，就表示不能在这个轴上移动，或者不能以这个轴为中心进行旋转。

在航空领域，X 轴正方向为右方，Y 轴正方向为上方，Z 轴负方向为前方：

- Pitch 俯仰角调整即以 Y 轴为中心旋转；
- Yaw 偏航角调整即以 Z 轴为中心旋转；
- Roll 滚转角调整即以 X 轴为中心旋转；

虚幻编辑器中主要有两种视口类型：透视和正交视图 Perspective & Orthographic。透视视图是进入游戏场景 的一个 3D 窗口。正交视图（正面视图、侧面视图和顶部视图）是 2D 视口，每个视图俯视一个主轴（X轴、Y轴或Z轴）。

可以设想在视口中，沿 X 轴放一架飞机，机头向右，即朝向 X 轴正向。Pitch 就是抬起或下降机头角度，Roll 就是将机身沿 X 轴旋转的翻滚，Yaw 就是按驾驶员的视角左右偏转，沿着 Z 轴旋转。默认状态下，透视视口的镜头位于接近 Right 视口的一个角度。Front 视口往 X 轴负向看，Left 视口往 Y 轴正向向，Top 视口往 Z 轴负向看。

三维软件对象的操作界面通常叫 Gizmo，对象的调用使用两个坐标系统，一个全局坐标 Global Space，另一个是对象内部坐标 Local Space，使用 Ctrl + ~ 切换。全局坐标就是 Viewport 左下角显示的坐标。这两个坐标互相影响，刚添加到场景的对象，默认两个坐标保持方向一致。但是，将对象 Local Space 进行旋转一下，比如沿 Y 轴旋转 90°，先切换为 Local Space 再旋转操作。就是往 Y 轴负方向看，让物体逆时针转 90°，这和数学上的二维坐标旋转同样。旋转后，对象的局部坐标变成 X 轴指向上即原先 Z 轴的正向，而新的 Z 轴指向原先 X 轴负方向。这里移动对象，如果按本地 X 轴方向移动，那么就相当在全局空间的 Z 轴方向移动。在程序处理中，就需要考虑这个关系，比如本地坐标的某个点映射全局空间的什么坐标，相互之间需要进行变换。

在 Details -> Transform 面板中，Location、Rotation、Scale 等属性都可以设置 Relative 或 World，但对象刚添加到场景中，所以其父级就是 World，这个设置没有影响。但是，当对象添加到其它对象内部作为子对象后，这个相对指的就是不是相对 World 而是另外那个父级对象了。

视口选项功能操作：

- Ctrl + Shift + T 显示/隐藏工具条 Hide Viewport UI；
- Ctrl + Shift + H 显示 FPS 帧率，等于运行控制台命令 stat fps；
- Shift + L 显示基本统计信息，等于运行控制台命令 stat unit；

选中对象操作：

- Escape 取消选择；
- W 使用移动操作工具；
    - Alt + 拖动，复制对象，相当 Ctrl + W；
    - Shift + 拖动，移动对象周日也移动镜头；
    - Ctrl + 拖动（LMB），锁定到 X 轴向移动；
    - Ctrl + 拖动（RMB），锁定到 Y 轴向移动；
    - Ctrl + 拖动（LMB+RMB），锁定到 Z 轴向移动；
- E 使用旋转操作工具；
    - CTRL + 拖动（LMB），沿着 X 轴旋转；
    - CTRL + 拖动（RMB），沿着 Y 轴旋转；
    - CTRL + 拖动（LMB+RMB），沿着 Z 轴旋转；
- R 使用绽放操作工具；
    - CTRL + 拖动（LMB），沿着所有轴一致缩放（正交和透视视口都适用）；
- V 切换顶点对齐，它允许你对齐到场景中其他几何体的顶点。

正交视口下的移动工具、缩放工具可以使用 Ctrl + 拖动（LMB）来约束轴向。

视图切换：

- ALT + G 切换到 Perspective Viewport；
- ALT + H/J/K 分别切换 Front/Top/Left 视口。
- ALT + Shift + H/J/K 分别切换 Back/Bottom/Right 视口。
- G 启用游戏视图，隐藏不可见的 Actor 和辅助工具；
- F11 沉浸模式（Immersive Mode）即将当前视口全屏化减少其它干扰因素；

在 Mac 计算机上，System Preference -> Mouse 中为鼠标启用辅助点击后，或在 System Preference -> Trackpad 中为触控板启用两根手指辅助点击后，可以使用以下功能按钮。

透视视口操作：

- 单指点击 + 拖动，前后移动摄像机，并左右旋转。
- 双指点击 + 拖动，转视口摄像机。
- 双指点触 + 拖动，旋转视口摄像机。

正交（顶端、前端、侧面）操作：

- 单指点击 + 拖动，创建一个区域选择框。
- 双指点击 + 拖动，平移视口摄像机。
- 双指点触 + 拖动，平移视口摄像机。


虚幻编辑器视口提供了许多可视化模式来帮助您查看场景中正在处理的数据类型，以及诊断任何错误或意外结果。较为常用的视图模式有自己的热键，但所有视图模式都可从视口内通过视图模式（View Mode）菜单进行访问。

以下为各模式快捷键和控制台命令：

- Alt + 2 线框视图模式，*viewmode wireframe* 显示场景中的所有多边形边缘。对于"画刷"，您将看到所产生的几何体。
- Alt + 3 不照亮视图模式，*viewmode unlit* 从场景中移除所有照明，从而只显示底色。
- Alt + 4 照亮视图模式，*viewmode lit* 显示应用所有材质和照明之后的场景最终结果。
- Alt + 5 细节照明视图模式，*viewmode lit_detaillighting*  使用原始材质的法线贴图在整个场景内激活中性材质。这对于进行隔离而言非常有用，而无论底色是否因为过暗或噪声过高而遮蔽了光线。
- Alt + 6 仅照明视图模式，*viewmode lightingonly* 显示仅受照明影响的中性材质。此模式与细节照明模式的区别在于，看不到法线贴图。
- Alt + 7 光线复杂性视图模式，*viewmode lightcomplexity* 显示影响几何体的非静态光线数目。这对于跟踪照明成本而言非常有用 - 影响表面的光线越多，进行明暗处理的成本越高，颜色从黑到绿，再到红。此颜色方案是在着色器代码中定义的。
- Alt + 8 着色器复杂性视图模式，*viewmode shadercomplexity* 用来显示用于计算场景中每个像素的着色器指令数。通常，这可以很好地指示场景的性能状况。一般来说，此模式用来测试基本场景的整体性能以及优化粒子效果，这些效果可能会导致短时间内发生大量过度绘制，从而导致性能突降。此视图模式使用色谱来指示场景的成本。*绿色*到*红色*表示"成本非常低"到"成本高"的线性关系，而*粉红色*和*白色*表示快速跳跃至"成本非常高"的像素。较小的白色区域可以容忍，但如果屏幕的大部分区域都显示为鲜红色或白色，那么表示性能不佳。
- 静止光线重叠视图模式 StationaryLightOverlap，默认情况下只能通过菜单进行访问。
- Alt + 0 光照贴图密度视图模式 LightmapDensity，显示进行了纹理贴图的对象的光照贴图密度，按其与理想/最大密度设置的关系对其进行颜色编码，并显示映射到实际光照贴图纹素的网格。在整个场景内使用偶数纹素密度以获得一致的光照贴图照明十分重要。


利用网格体绘制 `Mesh Paint` 工具可以在关卡视口中交互式地在静态网格体上绘制顶点颜色。可以用独有的颜色/透明度值来对单一网格体的多个实例进行绘制，并随心所欲地在材质中使用此数据。

UE4 Mesh Paint 提供三种绘画模式：

- 顶点颜色绘制（Vertex Color Painting），该模式将颜色数据直接绘制到网格体的顶点上；
- 顶点权重绘制（Vertex Weight Painting），在网格体上绘制顶点权重，绘制时混合不同的纹理；
- 纹理权重绘制（Texture Weight Painting），该模式允许在纹理上绘制。

顶点绘制是目前很通用的材质处理技术，像 Blender 就非常重视顶点绘制技术。 

网格体绘制系统要求网格体材质包含一个顶点颜色节点 `Vertex Color`，因为这是从网格体将模型的顶点颜色数据传至材质的方式，Mesh -> Vertex Color -> Material。

Vertex Color 四个输出端点说明：

- RGB 风格体顶点的三通道色彩输出；
- R 风格体顶点的的 Red 分量输出；
- G 风格体顶点的的 Green 分量输出；
- B 风格体顶点的的 Blue 分量输出；
- A 风格体顶点的的 Alpha 分量输出；

实际上有无数种方法来应用顶点颜色材质表达式中的颜色，如 Lerp 或 HeightLerp 插值节点。简单一些，可以仅通过乘法表达式把颜色加入到现有材质中。比如，添加 Multiply 节点来连接对应的 Vertex Color 节点到材质的 Base Color。这使我们可以具备原始贴图，通过网格体描画工具给其着色。

点击 `Paint` 按钮激活网格体绘制面板，此时，你仍然可以执行大部分常见的编辑器操作，例如移动并选中摄象机。但特定功能会被禁用，如转换对象。网格体绘制面板激活时，Place Actors 面板仍然可以使用。透视视口将默认使用实时模式 Realtime。要修改它或者其他视口设置，可点击视口左上角的下拉箭头。

你可以按 X 键在绘制颜色和擦除颜色之间切换，SHIFT + LMB + 拖动用作橡皮擦颜色的颜色。

纹理权重绘制模式可以让你给纹理上色，并在此过程中访问其可用属性。你可以使用工具栏，或者按 句号（.）和 逗号（,）键在纹理间切换。在完成给纹理上色后，你可以使用工具栏或按 Ctrl + Shift + C 执行修改，等价点击 Commit Texture 按钮。



# 🌟 Folder Structure 虚幻引擎的目录结构
- 虚幻引擎目录结构 https://docs.unrealengine.com/4.27/zh-CN/Basics/DirectoryStructure/
- 虚幻引擎和游戏编译工具 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/BuildTools/
- 创建虚幻引擎插件 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/Plugins/
- 设置专用服务器 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Networking/HowTo/DedicatedServers/
- Getting started with the Unreal Engine API https://docs.unrealengine.com/5.0/en-US/API/QuickStart/
- Include What You Use https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/BuildTools/UnrealBuildTool/IWYU/
- Creating a Gameplay Module https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/ModuleQuickStart/
- Unreal Engine Modules https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Modules/

源代码根目录中的引擎目录（Engine），Engine 目录包含引擎自身及其随附工具。
引擎目录也存在于游戏项目根目录中，每个游戏目录都包含与该游戏有关的所有文件。
与先前的引擎版本相比，UE4 中的引擎和游戏在目录结构上有了更明显的区分。

Unreal Engine 引擎本身的开发是基于模块化的，基本引擎开发的工程也传承了模块化管理。

根目录结构：

- **Engine** - 包含构成引擎的所有源代码、内容等。
- **Templates** - 创建新项目时可用的项目模板集合。
- **GenerateProjectFiles.bat** - 脚本用于创建 UE4 的 Visual Studio 解决方案和项目文件。
- **UE4Games.uprojectdirs** - 辅助文件，帮助引擎找到子目录中的项目。

引擎专有目录，部分子目录只存在于 Engine 目录中。

- **Documentation** - 包含引擎文档，包括源文件和发布的文件。
    - **HTML** - 发布的 HTML 文档文件。
    - **Source** - markdown 源文档文件。
- **Extras** - 其他辅助和工具文件。
- **Plugins** - 包含引擎中使用的插件。
- **Programs** - 包含虚幻子程序的配置文件和日志文件，如 UnrealFrontend、UnrealHeaderTool。
- **Shaders** - 保存引擎的着色器源文件（.usf）。

通用目录，某些子目录在 Engine 目录和游戏项目中都能找到：

- **Binaries** - 包含可执行文件或编译期间创建的其他文件。
- **Build** - 包含编译引擎或游戏所需的文件，包括为某些特定平台创建项目版本时所需的文件。
- **Config** - 配置文件包含的参数可用于控制引擎的行为。项目中设置的配置值会覆盖此目录中设置的值。
- **Content** - 保存引擎或游戏中的内容，例如资产包、贴图。
- **DerivedDataCache** - 包含派生数据文件。这类数据专为被引用内容生成，并且在加载时生成。
- **Intermediate** - 包含编译引擎或游戏时生成的临时文件。在游戏目录中，着色器也保存在此目录中。
- **Saved** - 包含自动保存文件、配置文件（.ini）、日志文件、崩溃日志、硬件信息和 Swarm 选项与数据。
- **Source** - 包含引擎或游戏的所有源文件，包括引擎源代码、工具和游戏类等。
    - 引擎源文件中的 **Sources** 文件夹组织结构如下：
        - **Developer** - 编辑器和引擎共同使用的文件。
        - **Editor** - 仅供编辑器使用的文件。
        - **Programs** - 引擎或编辑器使用的外部工具。
        - **Runtime** - 仅供引擎使用的文件。
    - 游戏项目中的 **Sources** 文件按模块分组，一个模块一个目录，每个游戏模块包含以下内容：
        - **Classes** - 包含所有的头文件（.h）。
        - **Private** - 包含所有 .cpp 文件，包括游戏逻辑类以及各种模块的实现文件。
        - **Public** - 包含模块的头文件。

游戏项目目录

- **Binaries** 包含可执行文件或编译期间创建的其他文件。
- **Config** 游戏的默认项目设置。
- **Content** 包含引擎或游戏的内容，包括资产包和贴图。
- **External dependencies** 显示公有的引擎头文件（仅在Visual Studio中可见）。
- **Intermediate** 包含 UnrealBuildTool 生成的文件，如 Visual Studio 项目文件。
- **Saved** 包含引擎生成的文件，如配置文件和日志。这些文件可以删除并重新构建。
- **Source** 包含游戏模块对象类文件。

解决方案目录

- **Classes** 包含游戏对象的类定义（.h 文件）。
- **Config** 游戏的默认项目设置。
- **External dependencies** 显示公有引擎头文件（仅在Visual Studio中可见）。
- **Private** 包含私有游戏对象类的实现文件（.cpp 文件）。
- **Public** 包含公有游戏对象类的实现文件（.cpp 文件）。

注意，项目中 Binaries、Intermediate、Saved 三个目录，会随着开发过程不断的添加的内容以及
编译操作不断产生大量临时文件，可以删除，但再次打开时就需要重新编译缺失的文件。

另外，在用户目录下的 AppData\Local\UnrealEngine 目录下也会大量的缓存文件。

在 UE3 的时候用 MakeFiles 实现项目的自动化编译，UE4 引入 C# 编写的 UBT（UnrealBuildTool）
和 UnrealHeaderTool 编译辅助工具，引入了模块机制。UE4 源码工程本身也使用 UBT 来组织编译。


剖析虚幻渲染体系（10）- RHI
https://www.cnblogs.com/timlly/p/15156626.html
https://docs.unrealengine.com/5.2/en-US/graphics-programming-overview-for-unreal-engine/
UE 的渲染流程中，存在 4 种工作线程：

1. 游戏线程（Game Thread）
2. 渲染线程（Render Thread）
3. RHI 线程
4. GPU（含驱动）

RHI - Render Hardware Interface（渲染硬件接口）是 UE 渲染体系中非常基础且重要的模块，
封装了众多图形 API（DirectX、OpenGL、Vulkan、Metal）之间的差异，提供了简便且一致的概念、
数据、资源和接口供给  Game 和 Renderer 模块调用，实现一份渲染代码跑在多个平台的目标。

RHI 线程负责将渲染线程 Push 进来的 RHI 中间指令转译到对应图形平台的 GPU 指令。在部分图形 
API（DX12、Vulkan、主机）支持并行的情况下，如果渲染线程是并行生成的 RHI 中间指令，那么 RHI 
线程也会并行转译。

游戏线程是整个引擎的驱动者，提供所有的源数据和事件，以驱动渲染线程和 RHI 线程。游戏线程领先渲染线程
不超过 1 帧，更具体地说如果第N帧的渲染线程在第 N+1 帧的游戏线程的 Tick 结束时还没有完成，那么游戏
线程会被渲染线程卡住。反之，如果游戏线程负载过重，没能及时发送事件和数据给渲染线程，渲染线程也会卡住。

渲染线程负责产生 RHI 的中间命令，在适当的时机派发、刷新指令到 RHI 线程。因此，渲染线程的卡顿
也可能导致 RHI 的卡顿。

RHI 线程负责派发（可选）、转译、提交指令，且渲染的最后一步需要 SwapBuffer，这一步需要等待 GPU 
完成渲染工作。因此，渲染 GPU 的繁忙也会导致 RHI 线程的卡顿。

除了游戏线程，渲染线程、RHI 线程和 GPU 的工作都是存在间隙的，即游戏线程提供给渲染任务的时机
会影响渲染工作的密度，也会影响到渲染的时间，小量多次会浪费渲染效率。


Windows 平台上，主要使用 DirectX 游戏图形编程接口，官方提供的 DirectXShaderCompiler 
是着色器程序编译器，也就是 HLSL 着色器编译器开源项目。HLSL Shader 目前最新的版本为 v6.6，
按微软的叫法就是 sm6.6，又增加了很多新的光追 Shader 特性。

UE5 中可以设置项目启用 SM6。Platforms -> Windows -> D3D12TargetedShaderFormats -> SM6。
但是，Intel 的核显驱动可能不支持 shader model 6.0，可以使用 DirectX Capabilities Viewer
工具检测 DirectX 12 当前支持的 SM 版本：
Identifying the Shader Model of Your Graphics Card in Windows
https://www.chiefarchitect.com/support/article/KB-03146/identifying-the-shader-model-of-your-graphics-card-in-windows.html 
https://cloud.chiefarchitect.com/1/downloads/support/dxcapsviewer.exe
https://docs.unrealengine.com/5.1/zh-CN/hardware-and-software-specifications-for-unreal-engine/

如果确认不支持，就需要禁止光追或者切换成 DirectX11。官方社区说 UE5.1.0 系统要搭配最新的 DX12，
而对于 Windows 系统(1909版本等)要在系统设置点击 Windows 更新最新 DX12，要么就用回 UE5.0.3。

VSM 和 Nanite 需要 shading model 6.6，建议更新驱动，也可能 Intel 拉垮还没做出来支持的驱动。
不过 Intel 核显性能好像本来就跑不起来什么高级渲染功能，不及 AMD 核显，建议改回 sm5 安心用。

https://www.nvidia.com/en-us/geforce/technologies/directx-12-ultimate/
GeForce 10 系列显示不支持最新的 DirectX 12 Ultimate，因此只能使用兼容 DirectX API，
不能使用 DX12 Ultimate 高级功能，应该使用 RTX 20, RTX 30 或者 Radeon 6000 等级别显卡，
以支持 DirectX 12 Ultimate 高级功能：

    DXR (DirectX Ray Tracing)
    VRS (Variable Rate Shading)
    Mesh Shading
    Sampler Feedback

UE4 支持模块和插件共生，通过在 uproject 文件中启用插件，项目模块就可依赖插件。类似地，通过在
插件自身 的 uplugin 文件中启用其他插件表明依赖。

游戏项目开发是模块化的，编译发布时只会打包项目用到的模块。

虚幻编译工具支持数个目标类型的编译：

- 游戏   —— 需要烘焙数据才能运行的 standalone 游戏。
- 客户端 —— 与游戏相同，但不包含任何服务器代码。适用于联网游戏。
- 服务器 —— 与游戏相同，但不包含任何客户端代码。适用于联网游戏中的专用服务器。
- 编辑器 —— 扩展虚幻编辑器的目标。
- 程序   —— 基于虚幻引擎打造的 standalone 工具程序。

目标文件的典型结构如下：

```cpp,ignore
    using UnrealBuildTool;
    using System.Collections.Generic;
    public class MyProjectTarget :TargetRules
    {
        public MyProjectTarget(TargetInfo Target) : base(Target)
        {
            Type = TargetType.Game;
            // 此处为其他属性
        }
    }
```

类的名称必须与在其中声明这个类的文件的名称相匹配，后跟"Target"，例如，MyProject.target.cs
定义类 "MyProjectTarget"。

UE4 每个模块都拥有控制其编译方式的 build.cs 文件，包括定义模块相依性的选项、额外的库、包含路径等。
这些模块被默认编译为 DLL 文件，并通过单一可执行文件进行加载，可选择在 BuildConfiguration.cs 
文件中编译一个单块可执行文件。

模块通过 C# 源文件声明，扩展名为 build.cs，存储在项目的 Source 目录下。属于一个模块的 C++ 
源代码与 build.cs 文件并列存储，或者存储在它的子目录中。每个. build.cs 文件都声明一个类，
从 `ModuleRules` 基类衍生而来，并设置属性来控制如何从其构造函数进行构建。这些 build.cs 文件
都由 UnrealBuildTool 编译，并被构造来确定整个编译环境。

目标通过 C# 源文件声明，扩展名为 target.cs，并存储在项目的 Source 目录下。每个 target.cs 
文件都声明一个类，从 `TargetRules` 基类衍生而来，并设置属性来控制如何从其构造函数进行编译。
类名称必须与在其中声明这个类的文件的名称相匹配，当要求编译目标时，虚幻编译工具将编译 target.cs 
文件，并在其中构造类来确定其设置。

项目的 Games 程序或 Unreal Editor 都是 Target 定义，每个 Target 都由一系列 C++ 模块构成。
每个模块的代码可以被其它模块引用，只需要在构成配置文件中添加依赖模块。每个 Targets 和 Modules 
都通过 C# 编写的 UnrealBuildTool 虚幻引擎专用构建工具编译。`Modules` 的构建规则配置代码
文件以 `build.cs` 为扩展名，`Target` 的构建规则配置代码文件以 `target.cs` 为扩展名。

Unreal Engine 将模块分成三类：

- Runtime 这是大多数开发者需要使用的运行时模块，游戏运行需要的基本模块；
- Editor 功能支持模块，虚幻编辑器的功能可以通过插件的形式扩展；
- Developer utilities 开发者工具；

而在 Runtime 模块中，开发者最常用到的三个部分是：

- `Core` 核心部分，提供一个供各模块互相通信的通常构架，包含支持多平台的硬件层抽象，还有：
    - 基本数据类型，如 bool, float/double, int8/int16/int32/int64, uint8/uint16/uint32/uint64, ANSICHAR, TCHAR, FString；
    - 数学库，如 FMath, FVector, FRotator, FTransform, FMatrix, More...
    - 容器库，如 TArray, TList, TMap, More...
    - Other:  FName, FArchive, FOutputDevice
- `CoreUObject` 核心对象基类，定义了 `UObject` 实现了强大的运行时类型的支持，使得引擎可以对其子类进行管理，并与蓝图编辑集成。提供 serialization, network replication, and runtime type information, garbage collected。
    - Classes: UObject, UClass, UProperty, UPackage
    - Functions: ConstructObject, FindObject, Cast, CastChecked
- `Engine` 游戏引擎核心，包括游戏模拟世界中的对象，world, actors, characters, physics and special effects；
    - Actors: AActor, AVolume, AGameMode, AHUD, More...
    - Pawns: APawn, ACharacter, AWheeledVehicle
    - Controllers: AController, AAIController, APlayerController
    - Components: UActorComponent, UBrainComponent, UInputComponent, USkeletalMeshComponent, UParticleSystemComponent, More...
    - Gameplay: UPlayer, ULocalPlayer, UWorld, ULevel
    - Assets: UTexture, UMaterial, UStaticMesh, USkeletalMesh, UParticleSystem

Include What You Use（IWYU）包含您所使用，意味着引擎的源代码只包括其需要编译的依赖性。
IWYU 规范的目的是为避免包含单块头文件，如 *Engine.h* 或 *UnrealEd.h*，借此省去不必要的依赖性。

如需要游戏使用 IWYU，需要注意以下几点：

- 在每个头文件的顶部包含 *CoreMinimal.h*。
- 禁用PCH文件，在非统一模式中编译游戏项目，即可验证所有源文件包含其必需的所有依赖性。
- 如果需要访问 Runtime\Engine\Classes\Engine\Engine.h 中定义的 UEngine 或 GEngine，可 *#include Engine/Engine.h*，它有别于 Runtime\Engine\Public\Engine.h。
- 如果您使用了编译器无法识别的类，也不了解需要包括的内容，则可能会缺失头文件。如果从正确编译的非 IWYU 代码转换而来，情况尤为如此。您可以在 API 文档中查找类，并在页面底部查找必要的模块和头文件。


创建新项目时，一般有 Blueprint Project 和 C++ Project 两种风格。

以 2D Side Scroller 模板创建一个蓝图工程，名称为 P2D。默认状态下，项目文件 P2D.uproject 不含 Modules 配置，模块配置内容由 `ModuleDescriptor` 描述。

在项目中通过 New C++ Class 类向导创建类时，比如创建一个 MyActor 类，它就可以变成一个 C++ 工程，也就是创建了一个游戏模块，项目文件会添加 Modules 配置：

```json
{
    "FileVersion": 3,
    "EngineAssociation": "4.27",
    "Category": "",
    "Description": "",
    "Modules": [
        {
            "Name": "P2D",
            "Type": "Runtime",
            "LoadingPhase": "Default",
            "AdditionalDependencies": [
                "Engine"
            ]
        }
    ],
    "Plugins": [
        {
            "Name": "Paper2D",
            "Enabled": true
        }
    ]
}
```

并且会创建 Sources 目录，除了类文件，还会创建 UBT 相关的编译规则类文件，如下：

- P2D.Target.cs 游戏项目编译规则类 `TargetRules`，UBT 执行时会编译出最终可执行的游戏程序；
- P2DEditor.Target.cs 编译器编译规则 `TargetRules`，UBT 执行编译出扩展虚幻编辑器的目标；
- P2D/ 游戏项目模块目录，保存模块相关代码；
- p2D/MyActor.h
- p2D/MyActor.cpp
- p2D/P2D.h 游戏模块头文件，主要引入引擎最基本的头文件 `#include "CoreMinimal.h"`；
- p2D/P2D.cpp 模块实现文件，主要包含 `IMPLEMENT_PRIMARY_GAME_MODULE` 宏的使用；
- p2D/P2D.Build.cs 模块依赖规则配置类 `ModuleRules`，编译时根据它引入依赖模块，并最终生成 DLL 文件；

模块类定义根据 ModuleManager 提供的 `IModuleInterface` 接口实现，也可以直接使用 `IMPLEMENT_PRIMARY_GAME_MODULE` 宏实现基本骨架。

```C++,
    // P2D.h
    #pragma once

    #include "CoreMinimal.h"

    // P2D.cpp
    #include "P2D.h"
    #include "Modules/ModuleManager.h"

    IMPLEMENT_PRIMARY_GAME_MODULE( FDefaultGameModuleImpl, P2D, "P2D" );
```

根据默认模块实现宏的定义，在生成的 Intermediate\Build\Win64\UnrealEditor\Development\Puzzle\Definitions.Puzzle.h 就会包含以下定义，在定义类时可以用来声明导出 API：

```C++,
#define P2D_API DLLEXPORT
```

例如 MyPawn.h 中使用它来定义导出的 API：

```C++,
    #pragma once

    #include "CoreMinimal.h"
    #include "GameFramework/Pawn.h"
    #include "MyPawn.generated.h"

    UCLASS()
    class P2D_API AMyPawn : public APawn
    {
        GENERATED_BODY()

    public:
        // Sets default values for this pawn's properties
        AMyPawn();

    };
```

刚创建的 Target.cs 和 Editor.Target.cs 差别不大，主要是 TargetType 类型选择不同，前者是 Game 后者是 Editor。

```C#,
    // Fill out your copyright notice in the Description page of Project Settings.

    using UnrealBuildTool;
    using System.Collections.Generic;

    public class P2DTarget : TargetRules
    {
        public P2DTarget(TargetInfo Target) : base(Target)
        {
            Type = TargetType.Game;
            DefaultBuildSettings = BuildSettingsVersion.V2;

            ExtraModuleNames.AddRange( new string[] { "P2D" } );
        }
    }
```

还可以构建专有服务器程序，只需设置为 `TargetType.Server`。然后，在项目基本目录中找到项目的 uproject 文件，使用右键菜单 Generate Visual Studio Project Files 为游戏重新生成 Visual Studio 解决方案，这个方案会提供用于构建专有服务器程序的配置。

Build.cs 文件内容参考：

```C#,
    // Fill out your copyright notice in the Description page of Project Settings.

    using UnrealBuildTool;

    public class P2D : ModuleRules
    {
        public P2D(ReadOnlyTargetRules Target) : base(Target)
        {
            PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        
            PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore" });

            PrivateDependencyModuleNames.AddRange(new string[] {  });

            // Uncomment if you are using Slate UI
            // PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });
            
            // Uncomment if you are using online features
            // PrivateDependencyModuleNames.Add("OnlineSubsystem");

            // To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true
        }
    }
```

手动添加模块按以下步骤操作：

- 修改 `uproject` 文件，添加新模块配置；
- 创建 `Build.cs` 文件，将新的模块作为依赖模块添加，并且合创建 `Private` 和 `Public` 子目录，分别存放代码和头文件；
- 创建模块类，根据 ModuleManager 提供的 `IModuleInterface` 接口实现模块类；
- 创建至少一个类，包括头文件和代码；

如上所说，游戏模块至少要包 Private、Public 文件夹，另外，还有一个编译文件 `*.Build.cs`。

按以下目录结构，添加 ModuleTest 模块，并创建 ModuleTest.Build.cs 构建规则，再在工程中添加此模块：

    - P2D/
       +- Source/
           +- P2D.Target.cs 
           +- P2DEditor.Target.cs
           +- P2D/ (Primary game module folder)
           |    +- Private/
           |    +- Public/
           |    +- P2D.Build.cs
           |    +- Other C++ classes in your game module
           +- ModuleTest
               +- Private/
               +- Public/


参考 https://www.orfeasel.com/creating-custom-modules/

相关源代码：

- Epic Games\UE_4.27\Engine\Source\Runtime\Core\Public\Modules\ModuleManager.h
- Epic Games\UE_4.27\Engine\Source\Runtime\Projects\Public\ModuleDescriptor.h


# 🌟 Actor & Component
- Framework Class Relationships https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/QuickReference/
- 为Unity开发者准备的虚幻引擎4指南 https://docs.unrealengine.com/4.27/zh-CN/Basics/UnrealEngineForUnityDevs/
- Gameplay 框架快速参考 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Framework/QuickReference/
- Gameplay Actors https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Actors/
- Actors 对象介绍 https://docs.unrealengine.com/4.27/zh-CN/Basics/Actors
- Components 对象介绍  https://docs.unrealengine.com/4.27/zh-CN/Basics/Components
- AActor API https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/AActor/
- UActorComponent API https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Components/UActorComponent/
- USceneComponent API https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Components/USceneComponent/
- UPrimitiveComponent API https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Components/UPrimitiveComponent/

绝大部分游戏引擎都得解决一个基本问题：将现实世界抽象为一个 3D 游戏模拟的世界。根据基本的计算机图形学知识，为了展示这个世界，需要一个个带着变换的游戏对象，接着让它们父子嵌套以表现更复杂的结构。本质上，其他的物理模拟，游戏逻辑等功能组件，最终目的也只是为了操作这些游戏世界中的对象。

UE4 的世界中，万物皆 `UObject`，接着有 `AActor` 和
`UActorComponent`，以及它们的生命周期，BeginPlay、EndPlay、Tick，事件传递等机制。

藉着 UObject 提供的元数据、反射生成、GC垃圾回收、序列化、编辑器可见，Class Default Object 等，UE4 可以构建一个对象运行的世界。

Actor 的概念在 UE 里其实不是某种具象化的 3D 世界里的对象，而是世界里的种种元素，用更泛化抽象的概念来看，小到一个个地上的石头，大到整个世界的运行规则。

Actor 之间还可以互相嵌套，拥有相对的父子关系，还有 Tick 心跳事件，这样在游戏中进行定期的事件处理，不同的 Actor 类型具有不同的功能用途。

可能因为 UE 更遵循 C++ 设计哲学“不为你不需要的东西付代价”，而一个 Transform 再加上附带的逆矩阵之类的表示，内存占用上其实也是挺可观的。所以，Actor 不像 GameObject 一样自带 Transform。

在整个复杂的 UE 模拟世界中，Actor 只提供一些通用的基本能力，通过组合不同的 Component 就可以让 Actor 具有特定的能力。

组件就是可以添加到 Actor 上的一项功能性扩展，组件必须绑定在 Actor 身上。由于组件是渲染网格体和图像、实现碰撞和播放音频的唯一方法，因此玩家游戏期间在场景中看到或进行交互的一切其实都是某一类组件的成果。

当你为 Actor 添加组件后，该 Actor 便获得了该组件所提供的功能，将 Component 与 Actor 组件在一起又关系着生命周期事件。

其它一些组件参考：

- Application Lifecycle 组件负责接收来自操作系统的应用状态（开始、停止、结束等）通知。
- Cable Component 插件创建和控制缆绳的外观、响应方式，甚至是让它和关卡中的物体发生碰撞。
- Widget 控件组件是控件蓝图的 3D 实例，可以在游戏场景中与之交互。
- 聚光灯组件（Spot Light Component）允许你的 Actor 像聚光灯一样发光，
- 旋转移动组件（Rotating Movement Component）能使你的 Actor 四处旋转，
- AudioComponent 用于创建和控制游戏内部声音的实例，使你的 Actor 能够播放声音。

Actor 并没有 AddChild 函数，只有使用 AttachToActor 和 AttachToComponent 来创建父子链接。

类似于 Unity 的 Start，OnDestroy 和 Update 函数，虚幻 4 在 Actor 中有类似的方法，而组件使用不同的函数，以下是示例：

```C++,
    UCLASS()
    class AMyActor : public AActor
    {
        GENERATED_BODY()

        // 游戏开始时调用
        // 蓝图事件：Event Begin Play
        void BeginPlay();

        // 当此Actor销毁时调用
        // 蓝图事件：Event End Play
        void EndPlay(const EEndPlayReason::Type EndPlayReason);

        // 每帧调用，用于更新此Actor
        // 蓝图事件：Event Tick
        void Tick(float DeltaSeconds);
    };


    UCLASS()
    class UMyComponent : public UActorComponent
    {
        GENERATED_BODY()

        // 当所属Actor创建时调用
        // 蓝图事件：Event Initialize Component
        void InitializeComponent();

        // 当组件或所属Actor销毁时调用
        // 蓝图事件：Event Uninitialize Component
        void UninitializeComponent();

        // 组件版的Tick函数
        // 蓝图事件：Event Tick Component
        void TickComponent(float DeltaTime, enum ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction);
    };
```

组件是一种特殊类型的对象，Actor 可以将组件作为子对象附加到自身。组件适用于共享相同的行为，例如显示视觉表现、播放声音。它们还可以表示项目特有的概念，例如载具解译输入和改变其速度与方向的方式。举例而言，某个项目拥有用户可控制车辆、飞机和船只。可以通过更改载具 Actor 所使用的组件来实现载具控制和移动的差异。

创建自己的组件时，需要了解三大基础组件 AC/SC/PC：

- `UActorComponent` 所有组件基类，最适用于 Actor 的抽象行为，例如移动、物品栏或属性管理，以及其他非物理概念。AC 组件不具有嵌套能力，没有变换能力，即它们在场景中不存在任何物理位置或旋转。
- `USceneComponent` 场景组件，UActorComponent 的子类，支持基于位置的行为，这类行为不需要几何表示。这包括弹簧臂、摄像机、物理力和约束（但不包括物理对象），甚至音频。
- `UPrimitiveComponent` 基元组件，USceneComponent 的子类，是拥有几何表示的场景组件，通常用于渲染视觉元素或与物理对象发生碰撞或重叠。这包括静态或骨架网格体、Sprite 或公告板、粒子系统以及盒体、胶囊体和球体碰撞体积。

Actor 支持拥有一个 SceneComponent 层级。UE 把 Transform 功能封装进了 SceneComponent 组件，当作 Actor 的 RootComponent 成员。但在权衡到使用的便利性，大部分 Actor 都有 Transform API，如(Get/Set)ActorLocation 等，其实内部都是转发到 RootComponent 引用的场景组件上进行的。

Actor 其实更像是一个容器，只提供了基本的创建销毁，网络复制，事件触发等一些逻辑性的功能，而把父子的关系维护都交给了具体的 Component，所以更准确的说，其实是不同 Actor 的 SceneComponent 之间有父子关系，而 Actor 本身其实并不太关心。

只有场景组件及其子类可以彼此附加，因为需要变换来描述子项和父项组件之间的空间关系。虽然场景组件可以拥有任意数量的子项，但只能拥有一个父项，或可直接放置在场景中。场景组件系统不支持附加循环。

提供两种主要方法：

- `SetupAttachment` 由 USceneComponent 组件提供，在构造函数中、以及处理尚未注册的组件时十分实用；
- `AttachToComponent` 方法，Actor 和 USceneComponent 都提供，会立即将场景组件附加到另一个组件，在游戏进行中十分实用。许将 Actor 彼此之间进行附加，方法是将一个 Actor 的根组件附加到属于另一个 Actor 的组件。

所有可放置到关卡的 Actor 都有一个 RootComponent 属性，引用放置子级对象的 SceneComponent。场景组件指定了 Actor 在世界中的位置、角度及缩放比例，而这些属性会影响该 Actor 的所有子对象。

即便是一个空 Actor，也拥有一个默认场景根 Default Scene Root 对象，这是一个最简单的场景组件。在编辑器操作阶段，当我们给某个 Actor 放置一个新的场景组件时，该 Actor 的默认场景根对象会被替换掉。

    +===========+ 
    |   Actor   | 
    +===========+ 
          |       
          |       +===============+          Next Level
          +-----> | RootComponent | <-------------+
          |       +===============+               |
          |                                       |
          |       +================+      +=======v========+         Next Level
          +-----> | ActorComponent |      | SceneComponent | -------------+
          |       +================+      +================+              |
          |                                       |                       |
          |       +================+      +=======v========+      +=======v========+
          +-----> | ActorComponent |      | SceneComponent |      | SceneComponent |
          |       +================+      +================+      +================+
          |                                       |                       |
          |       +==========+               +====v====+             +====v====+    
          +-----> | More.... |               | More... |             | More... |    
                  +==========+               +=========+             +=========+    

    Actor & Component 层次结构

以下代码片段示范在 Pawn 类中附加一个静态网格组件：

```C++,
    UStaticMeshComponent* VisualMesh;

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
```

组织结构上，Component 有且仅有一个 Owner，即一个 Actor 拥有任意个组件，但组件只能被同一个 Actor 拥有。

组件在 Actor 作为类的数据成员存在，基于 UHT 实现的运行时类型系统，从 Actor 获取 Component 可以通过组件 Class 类型查找，而获取组件的所有者则简单多了。

```C++,
    AActor* Actor = Component->GetOwner();

    UInputComponent* InputComponent;
    InputComponent = GetOwner()->FindComponentByClass<UInputComponent>();
```

Actor 的 RootComponent 成员是相当重要的，它引用的是 USceneComponent 实例，这种从 UActorComponet 扩展的组件具有可嵌套性。

```C++,
    /** Adds a component to the instance components array */
    void AddInstanceComponent(UActorComponent* Component);

    /** Removes a component from the instance components array */
    void RemoveInstanceComponent(UActorComponent* Component);

    /** Clears the instance components array */
    void ClearInstanceComponents(bool bDestroyComponents);

    /** Returns the instance components array */
    const TArray<UActorComponent*>& GetInstanceComponents() const;
```


## ⚡ Actor Lifecycle
- Actor Lifecycle https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Actors/ActorLifecycle/

Actor 的产生有多种途径，具有差异化的生命周期过程：

- Play in Editor 在引擎编辑器中所有 Actor 都复制实例到一个新的 World 环境中；
- Load from Disk 通过 `UEngine::LoadMap` 或 `UWorld::AddToWorld` 从磁盘加载 Actor；
- Spawning  通过 `UWorld::SpawnActor` 生成；
- Deferred Spawn 通过 `UWorld::SpawnActorDeferred` 延时生成；

在运行完前期的生命周期流程事件，Actor 会进入 Ticking 即以规则间隔（常为每帧一次）在一个 actor 或组件上运行一段代码或蓝图脚本。正确理解游戏 actor 和组件之间相对的 tick 顺序和 引擎执行的其他每帧任务十分重要，可避免帧差一问题，并确保游戏运行的一致性。Actors 和组件可设为每帧 tick，也可设为以最低时间间隔 tick，或完全不使用 tick。此外，它们可在引擎每帧更新循环中的不同阶段被合并为组；也可接受单独指令，等待特定 tick 完成后再开始。

可以认为没有组件的 Actor 就是个空壳，所以，无论哪种方式，所有进场的组件都经过初始化才能完成 Actor 实例的初始化：

- `PreInitializeComponents` - 在 Actor 的组件上调用 InitializeComponent 之前进行调用。
- `InitializeComponent` - Actor 上定义的每个组件的创建辅助函数。
- `PostInitializeComponents` - Actor 的组件初始化后调用。

执行完组件的初始化事件，就会进入如以下流程图所提示的执行过程：

          +=============+                  +==========================+
          |  BeginPlay  |  <-------------- | PostInitializeComponents |
          +=============+                  +==========================+
                 |
    +============v============+
    |     Actor is Ticking    |
    | Or stuff is appening in |
    |     the application.    |
    +=========================+
                 |                            
                 |     +=======================+                 +=============+
                 +---> | Event Destory calle   | ----+---------> ||  EndPlay  ||
                 |     | on Actor?             |     |           +=============+
                 |     +=======================+     |                  |
                 |                                   |      +===========v============+
                 |     +=======================+     |      |      Actor marked      |
                 +---> | Actor Life Time       | ----+      |     RF_PendingKill     |
                 |     | execeeded?            |     |      +========================+
                 |     +=======================+     |                  |
                 |                                   |      +===========v============+
                 |     +=======================+     |      |     Next GC cycle      |
                 +---> | Is a Level Transition | ----+      |   will deallocate it   |
                 |     | occurring?            |     |      +========================+
                 |     +=======================+     |                  |
                 |                                   |      +===========v============+
                 |     +=======================+     |      |    Remove Actor from   |
                 +---> | Is Play in Editor     | ----+      | ULevel array of actors |
                 |     | ending?               |     |      +========================+
                 |     +=======================+     |                  |
                 |                                   |      +===========v============+
                 |     +=======================+     |      ||     BeginDestroy     ||
                 +---> | Is the Game ending?   | ----+      +========================+
                 |     |                       |     |                  |
                 |     +=======================+     |      +===========v=============+
                 |                                   |      ||IsReadyForFinishDestroy||
                 |     +=======================+     |      +=========================+
                 +---> | Is the application    | ----+                  |
                       | closing?              |            +===========v============+
                       +=======================+            ||     FinishDestroy    ||
                                                            +========================+

在 *BeginPlay* 事件执行之前，根据不同的 Actor 产生途径，会有以下的不同执行流程，它们后续紧接着组件初始化过程。


    +==================+     +=========+       +============+          +============+            +============+
    |  Play in Editor  |     | LoadMap | --+-- | AddToWorld |          | SpawnActor |            | SpawnActor |
    +==================+     +=========+   |   +============+          +============+            +============+
              |                            |                                  |                         |
    +=========v========+       +===========v===========+           +==========v==========+   +==========v==========+
    |  All Actors are  |       | Load Actors from Disk |           | PostSpawnInitialize |   | PostSpawnInitialize |
    |  Duplicated to a |       +=======================+           +=====================+   +=====================+
    |  new World       |                   |                                  |                         |
    +==================+       +===========v===========+           +==========v==========+   +==========v==========+
              |                | Each loaded actor     |           |  PostActorCreated   |   |  PostActorCreated   |
    +=========v========+       | Calls PostLoad        |           +=====================+   +=====================+
    |  PostDuplicate   |       +=======================+                      |                         |                         |
    +==================+                   |                       +==========v==========+   +==========v==========+
              |               +============v============+          | ExecuteConstruction |   |  FinishSpawingActor |
              +-------------> | InitializeActorsForPlay |          +=====================+   +=====================+
                              +=========================+                     |                         |
                                           |                       +==========v==========+              |
                              +============v============+          ||   OnConstruction  || <------------+
                              |   RouteActorInitialize  |          +=====================+
                              +=========================+                     |
                                          |                                   |
                                          |    +=========================+    |
                                          +--> | PreInitializeComponents | <--+
                                               +=========================+

从磁盘加载的基本流程：

- 已位于关卡中的 Actor 适用此流程，如 `LoadMap` 发生时、或 `AddToWorld`（从流关卡或子关卡）被调用时。
- 从磁盘中进行加载包/关卡中的 Actor 对象。
- `PostLoad` - 在序列化 Actor 从磁盘加载完成后被调用，在此处可执行自定义版本化和修复操作，与 `PostActorCreated` 互斥。
- `InitializeActorsForPlay` 被执行。
    - 为未初始化的 Actor 执行 `RouteActorInitialize`（包含无缝行程携带）
    - `PreInitializeComponents` - 在 Actor 的组件上调用 InitializeComponent 之前进行调用。
    - `InitializeComponent` - Actor 上定义的每个组件的创建辅助函数。
    - `PostInitializeComponents` - Actor 的组件初始化后调用。
- `BeginPlay` - 关卡开始后调用。

Play in Editor 方式加载流程，与 Load from Disk 十分相似，然而 Actor 却并非从磁盘中加载，而是从编辑器中复制而来。

- 编辑器中的 Actor 被复制到新场景中，`PostDuplicate` 被调用。
- `InitializeActorsForPlay` 被执行。
    - 为未初始化的 Actor 执行 `RouteActorInitialize`（包含无缝行程携带）。
    - `PreInitializeComponents` - 在 Actor 的组件上调用 InitializeComponent 之前进行调用。
    - `InitializeComponent` - Actor 上定义的每个组件的创建辅助函数。
    - `PostInitializeComponents` - Actor 的组件初始化后调用。
- `BeginPlay` - 关卡开始后调用。

SpawnActor 方式实例化生成流程：

- `SpawnActor` 被调用。
- `PostSpawnInitialize`
- `PostActorCreated` - 创建后即被生成的 Actor 调用，构建函数类行为在此发生，与 `PostLoad` 互斥。
- ExecuteConstruction：
    - `OnConstruction` - Actor 的构建。蓝图 Actor 的组件在此处创建，蓝图变量在此处初始化
- PostActorConstruction：
    - `PreInitializeComponents` - 在 Actor 的组件上调用 InitializeComponent 之前进行调用。
    - `InitializeComponent` - Actor 上定义的每个组件的创建辅助函数。
    - `PostInitializeComponents` - Actor 的组件初始化后调用。
    - `OnActorSpawned` 在 UWorld 上播放。
- `BeginPlay` 被调用。

Deferred Spawn 延迟生成方式流程：

- 将任意属性设为 Expose on Spawn 即可延迟 Actor 的生成。
- `SpawnActorDeferred` - 生成程序化 Actor，在蓝图构建脚本之前进行额外设置。
- `SpawnActor` 中的所有操作发生；`PostActorCreated` 之后发生以下操作：
    - 通过一个有效但不完整的 Actor 实例设置/调用多个"初始化函数"。
    - `FinishSpawningActor` -调用后对 Actor 进行最终化，在 Spawn Actor 行中选取 ExecuteConstruction。


Actor 生命走向终点进行销毁，销毁 Actor 的方式有许多种，但终结其存在的方式始终如一。

在游戏进程中：它们的销毁行为完全为可选，因为许多 Actor 在游戏进程中不会实际消亡。

- `Destroy` - 游戏在 Actor 需要被移除时手动调用，但游戏进程仍在继续。Actor 被标记为等待销毁并从关卡的 Actor 阵列中移除。
- `EndPlay` - 在数个地方调用，保证 Actor 的生命走向终点。在游戏过程中，如包含流关卡的 Actor 被卸载，Destroy 将发射此项和关卡过渡。
- `OnDestroy` - 这是对 Destroy 的旧有反应。也许应该将这里的所有内容移到 EndPlay，因为它被关卡过渡和其他游戏清理函数调用。

调用 EndPlay 的全部情形：

- 对 Destroy 方法显式调用。
- Play in Editor 终结。
- 关卡过渡，无缝行程或加载地图，包含 Actor 的流关卡被卸载。
- Actor 的生命期已过。
- 应用程序关闭，全部 Actor 被销毁。

无论这些情形出现的方式如何，Actor 都将被标记为 RF_PendingKill，因此在下个垃圾回收周期中它将被解除分配。此外，可以考虑使用更整洁的 `FWeakObjectPtr<AActor>` 代替手动检查"等待销毁"。

垃圾回收阶段：一个对象被标记待销毁的一段时间后，垃圾回收会将其从内存中实际移除，释放其使用的资源。

在对象的销毁过程中，以下函数将被调用：

- `BeginDestroy` - 对象可利用此机会释放内存并处理其他多线程资源（即为图像线程代理对象）。与销毁相关的大多数游戏性功能理应在 EndPlay 中更早地被处理。
- `IsReadyForFinishDestroy` - 垃圾回收过程将调用此函数，以确定对象是否可被永久解除分配。返回 false，此函数即可延迟对象的实际销毁，直到下一个垃圾回收过程。
- `FinishDestroy` - 最后对象将被销毁，这是释放内部数据结构的另一个机会。这是内存释放前的最后一次调用。

虚幻引擎 4 中的垃圾回收过程将构建共同被销毁对象的集群。较之于单个删除对象，集群可减少垃圾回收相关的总体时间和整体内存流失。可能随对象的加载创建子对象。将对象与其子对象组合到垃圾回收器的单个集群后，引擎可延迟释放集群使用的资源，直到整个对象可被释放时一次性释放全部资源。

多数项目中无需对垃圾回收进行配置或修改，但存在一些特定情况，可以对项目配置的垃圾回收器的"集群"行为进行调整，以提高效率。


为了让 Actor 组件能够逐帧更新并影响场景，引擎必须注册这类组件。如果在 Actor 产生过程中，作为 Actor 子对象自动创建的组件会自动注册。但是，游戏期间创建的组件可以使用手动注册。`UActorComponent::RegisterComponent` 函数提供了这个功能，要求是组件与 Actor 关联。

注意：游戏期间注册组件可能会影响性能，因此只应在必要时进行此操作。

在注册组件的过程中，引擎会将组件与场景关联起来，让其可用于逐帧更新，并运行以下 UActorComponent 函数：

- `OnRegister` 在注册组件时，可以覆写此函数来添加代码。
- `CreateRenderState` 初始化组件的渲染状态。
- `OnCreatePhysicsState` 初始化组件的物理状态。

要从更新、模拟或渲染过程中移除 Actor 组件，可以使用 UnregisterComponent 函数将其取消注册。

在组件取消注册时，将运行下面的 UActorComponent 函数：

- `OnUnregister` 在取消注册组件时，可以覆写此函数来添加代码。
- `DestroyRenderState` 取消初始化组件的渲染状态。
- `OnDestroyPhysicsState` 取消初始化组件的物理状态。

这些事件函数都涉及更新、渲染状态和物理状态的管理。

Actor 组件能够以类似于 Actor 的方法逐帧更新，使用 `TickComponent` 函数允许组件逐帧运行代码。例如，USkeletalMeshComponent 使用此函数来更新动画和骨架控制器，而 UParticleSystemComponent 更新其发射器和处理粒子事件。

默认情况下，Actor 组件不更新，为了让Actor组件逐帧更新，必须在构造函数中设置 `PrimaryComponentTick.bCanEverTick = true` 来启用 tick。之后，在构造函数中或其他位置处，必须调用 `PrimaryComponentTick.SetTickFunctionEnable(true)` 以开启更新，之后可调用并传入 false 停用 tick。如果打算手动调用自己的更新函数（也许从拥有的Actor类），将 PrimaryComponentTick.bCanEverTick 保留为默认值 false 即可，这样可以稍微改善性能。

为进行渲染管理，Actor 组件必须创建渲染状态，它会告诉引擎，需要更新渲染数据的组件已发生变更。当发生此类变更时，渲染状态会被标记为"dirty"。如果编译您自己的组件，可以使用 `MarkRenderStateDirty` 函数将渲染数据标记为 dirty。在一帧结束时，所有 dirty 组件的渲染数据都会在引擎中更新。场景组件，包括基元组件默认会创建渲染状态，而 Actor 组件则不会。

要与引擎的物理模拟系统交互，Actor 组件需要物理状态。物理状态会在发生变化时立即更新，防止出现"帧落后"瑕疵等问题，也不需要"dirty"标记。默认情况下，Actor 组件和场景组件没有物理状态，但基元组件有。覆盖 `ShouldCreatePhysicsState` 函数以确定组件类实例是否需要物理状态。

如果类使用物理，不建议只返回 true，请参阅 UPrimitiveComponent::ShouldCreatePhysicsState() 的实现，主要是了解不应创建物理状态的情况（例如在组件破坏期间）。在正常返回 true 的情况下，还可以返回 Super::ShouldCreatePhysicsState。


## ⚡ FObjectInitializer 对象初始化机制
- UE4 FObjectInitializer https://zhuanlan.zhihu.com/p/423567885
- Archetypes Technical Guide https://docs.unrealengine.com/udk/Three/ArchetypesTechnicalGuide.html
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Objects/Creation/

先了解一个引擎内部使用的层次概念，当你在编辑器中将一个 Actor 从内容浏览器拖放到场景中时，这个过程涉及的对象层次关系如下：

- 你眼前的地图最外层即 Outermost 是一个 Package；
- 而 Package 里面包含 World；
- World 里面包含 Level，当然，这个 World 不能通过 *GetOuter()* 获取到；
- Level 里面包含各种 Actors；
- Component 通常将 Actor 作为外部对象(Outer)。

所有对象都可以设置一个名称，使用专用的 *FName* 数据类型。对开发者来说，*UObject* 就是所有 UE4 对象的基类，而在内部，它基于另外两个底层的基类，*UObjectBaseUtility* -> *UObjectBase*。

另外，*UObject*还拥有*OuterPrivate*、*ClassPrivate*等属性，它们标记了 Outer 对象：

```C++
private:

/** Flags used to track and report various object states. This needs to be 8 byte aligned on 32-bit
    platforms to reduce memory waste */
EObjectFlags                    ObjectFlags;

/** Index into GObjectArray...very private. */
int32                           InternalIndex;

/** Class the object belongs to. */
UClass*                         ClassPrivate;

/** Name of this object */
FName                           NamePrivate;

/** Object this object resides in. */
UObject*                        OuterPrivate;
```

在 *UObjectBase* 构造函数中，会调用 AddObject 函数把自己加到两个全局的大容器内管理，在销毁的时候把自己从管理自己的容器中移除：

- UObjectArray 虚幻对象管理数组，每个应用中的 UObject 实例数量级很大，一般游戏都会有几十万个，UObjectArray 为了保证能存下这么多 UObject 就划分了 Chunk。
- UObjectHash 基于哈希散列结构实现快速插入/快速查找的数据结构。

在引擎代码的组织中，Outer 这一词就理解为层次关系中的父级，可以理解为父对象，称之为外部对象。使用*UObjectBaseUtility*提供的方法*GetOutermost()*来获取它的最顶层对象。或者使用 *UObjectBase* 提供的 *GetOuter()* 获取上一级对象。

Outer 这一概念表明它对子对象的拥有权，而并不是指编程语言中的继承关系，它被用来控制对象的生命周期，在垃圾收集起到参考作用，因为被引用对象的任何外部也必须留在内存中。当父对象生命周期结束时，它拥有的子对象也应该结束。就像人的细胞依赖于人而存在一样，人一旦死亡，细胞也会全部死亡。

对象可以存在多层级的管理中，所以可以有多个 Outer，但是最外层对象 OuterMost 都一定是一个 UPackage。它是一个抽象的概念，你可以将一个*Package*理解为一个资产文件，uasset 或 umap 等等，它包含一些可以在 UE4 进行操作和访问的二进制数据文件。

假设现在你有一个蓝图类，位于项目内容目录 */Content/blueprints/MyActor_BP.uasset*，这个蓝图类本身 UClass 的 Outer 是与它同名的。
使用*UObjectBaseUtility*提供的方法获取 Outermost 对应的就是 */Game/blueprints/MyActor_BP*。

测试代码如下：

```C++
UClass* Class = this->GetClass();
UObject* Outer = Class->GetOutermost();// GetOuter() from UObjectBase
FString OuterName = Outer->GetName();
GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Green, OuterName);
```

在 Actor 里构造函数中，通常会通过调用 *CreateDefaultSubobject* 来完成组件层次的创建，这个方法定义在 UObject 基类上。在内部，*UObjectGlobals*提供了一个传用于 UObject 初始化的类型 *FObjectInitializer*，所提供重载函数的最简单形式就是传入一个 *FName* 参数，对已经执行过 C++ 构造器的对象进行一次全面的 UObject 对象属性设置。

在 UObjectGlobals 还提供了全局重载模板方法*NewObject()*来创建对象，它是最简单的 UObject 工厂方法。最基本的参数为对像所在层级父对象 *Outer* 和对象名称。

```C++
// GObjTransientPkg = NewObject<UPackage>(nullptr, TEXT("/Engine/Transient"), RF_Transient);
MyObject* Obj = NewObject<MyObject>();// Outer = (UObject*)GetTransientPackage()
MyObject* Obj = NewObject<MyObject>(this, TEXT("MyName"));
MyObejct* obj = CreateDefaultSubobject<UMyObject>(TEXT("MyName"));
```

不给 NewObject 指定 Outer 对象，则使用*GetTransientPackage()*获取当前的瞬态顶级包对象作为 Outer，即 *GObjTransientPkg* 全局变量引用的对象，方法实现在 *Obj.cpp*。所谓瞬态对象，就是即那些临时起作用的，不应该被保存的对象。关于对象实例的各种状态，参考 ObjectMacros 定义的*EObjectFlags*枚举类型。它简明地标记了一个对象实例的类型、垃圾回收机制的相关状态、生命周期状态等信息。

官方 UE 4.27 文档提到了 NewObject 的三种形式，除了默认无参数形式外，另外两种是：

- *NewNamedObject* 重载形式，通过允许为新实例指定一个名称以及对象标记和一个要指定为参数的模板对象。
- *ConstructObject*形式可以获得完全的灵活性来创建 UObject 的新实例。结合`FObjectInstancingGraph`结构体，它包含实例化对象和组件到其模板的映射，用于实例化新对象所拥有的组件。

无论哪种方法创建虚幻对象，这个过程都会使用到内部的*StaticConstructObject_Internal*全局函数，它创建一个对象并完成初始化后返回给上层。注意，如果传入参数，通过*FStaticConstructObjectParameters*结构体的*SetFlags*传入的*InFlags*包含 *RF_NeedsLoad* 表示这个组件资产需要从磁盘中加载，因此会触发 *PostLoad()*。

对比 *StaticConstructObject* 和 *StaticAllocateObject* 差异，前者它分配对象，执行*ClassConstructor*，并执行任何初始化，如加载配置属性，加载本地化属性和实例化组件。

*StaticAllocateObject*的功能是创建一个实例或者替换一个已经存在的实例。如果 Outer 和 Name 都被指定，并且内存中同样存在一个对象，如果参数 Class、Outer、Name 完全一样，那么这个存在的对象将会被销毁，新对象将会占用原有对象的内存空间.

前面提到的`FObjectInstancingGraph`定义在*UObject\Class.h*，从它的名字中的 Instancing 可以了解到，它是在对象实例化过程中起作用的。比如，是否允许对象实例化，给构造器传入*bDisableInstancing*参数就可以控制。

以下摘录一段自含文档的源代码，这些数据成员的用途就可以说明这个结构的作用：

```C++
/**
 * The root of the object tree that is the source used for instancing components;
 * - when placing an instance of an actor class, this would be the actor class default object
 * - when placing an instance of an archetype, this would be the archetype
 * - when creating an archetype, this would be the actor instance
 * - when duplicating an object, this would be the duplication source
 */
class       UObject*                        SourceRoot;

/**
 * The root of the object tree that is the destination used for instancing components
 * - when placing an instance of an actor class, this would be the placed actor
 * - when placing an instance of an archetype, this would be the placed actor
 * - when creating an archetype, this would be the actor archetype
 * - when updating an archetype, this would be the source archetype
 * - when duplicating an object, this would be the copied object (destination)
 */
class       UObject*                        DestinationRoot;

/**
 * Indicates whether we are currently instancing components for an archetype. 
 * true if we are creating or updating an archetype.
 */
bool                                        bCreatingArchetype;

/**
 * If false, components will not be instanced.
 */
bool                                        bEnableSubobjectInstancing;

/**
 * true when loading object data from disk.
 */
bool                                        bLoadingObject;

/**
 * Maps the source (think archetype) to the destination (think instance)
 */
TMap<class UObject*,class UObject*>         SourceToDestinationMap;

/**
* Maps instanced objects that need to have references updated
*/
TMap<UObject*, UObject*> ReplaceMap;
```

这里还有一个 Archetype 的概念，这是从 UE3 系统中遗留的产物，新引擎中已经不再使用，就像 UnrealScript 被 Blueprint 替换掉了一样。简单来说，Archetypes 就是允许内容开发者对现有对象进行快照保存的技术，包括对象的属性值、组件、对象引用等等。快照可以当作内容模板，供 Unrealscript 使用。

Archetypes 就像普通的资产包文件一样存储，并且允许内容开发者在地图上放置基于 Archetypes 的实例，而无需任何程序员。基于原型的对象仍然允许内容开发人员引用其他内容和属性，但这些内容和属性不可放置在虚拟编辑器中。

源代码参考：

- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Public\UObject\Object.h
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Private\UObject\Obj.cpp
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Public\UObject\Class.h
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Private\UObject\CoreNative.cpp
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Public\UObject\ObjectMacros.h
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Public\UObject\UObjectGlobals.h
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Private\UObject\UObjectGlobals.cpp
- UE_5.0EA\Engine\Source\Runtime\CoreUObject\Public\UObject\UObjectBaseUtility.h

以下是 UE5EA 源代码中的 `UObject` 对象构造器的重载形式参考：

```C++
/** Default constructor */
UObject();

/** Deprecated constructor, ObjectInitializer is no longer needed but is supported for older classes. */
UObject(const FObjectInitializer& ObjectInitializer);

/** DO NOT USE. This constructor is for internal usage only for statically-created objects. */
UObject(EStaticConstructor, EObjectFlags InFlags);

/** DO NOT USE. This constructor is for internal usage only for hot-reload purposes. */
UObject(FVTableHelper& Helper);
```

除了后面两个不能使用，前面两个构造形式中最常用的是默认构造器，即无参数的那个。

而带`FObjectInitializer`参数的那个作用很大，它可以改写原有的对象初始化逻辑。比如给某些 Actor 替换某个组件。如果是统一装上一个新组件还好说，但是如果是统一替换掉某个组件，比如统一替换掉 Character 的移动组件。

首先我们先声明一个 *MyCharacter*，派生自 *ACharacter*，并使用初始化器*SetDefaultSubobjectClass*来修改原有子对象设置逻辑：

```C++,
// AMyCharacter.h
#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "MyCharacter.generated.h"

UCLASS()
class CPPLEARNING_API AMyCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    // Sets default values for this character's properties
    AMyCharacter();
    AMyCharacter(const FObjectInitializer& ObjInitializer);
    //其它默认代码略。
};


// MyCharacter.cpp
#include "AMyCharacter.h"

AMyCharacter::AMyCharacter(const FObjectInitializer& ObjInitializer)
    :Super(ObjInitializer.SetDefaultSubobjectClass<UMyMovementComponent>(TEXT("CharMoveComp")))
{
    // 只给移动组件的传入名字，后续通过 GetName() 获取组件名字。
}

// UMyMovementComponent.h
#include "CoreMinimal.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "MyMovementComponent.generated.h"

UCLASS()
class CPPLEARNING_API UMyMovementComponent : public UCharacterMovementComponent
{
    GENERATED_BODY()
        UMyMovementComponent();
protected:
    // Called when the game starts or when spawned
    virtual void BeginPlay() override;
};

// UMyMovementComponent.cpp
UMyMovementComponent::UMyMovementComponent()
{
    // 使用打印语句验证替换是否成功：
    UE_LOG(LogTemp, Warning, TEXT("UMyMovementComponent Constructing..."));
}

void UMyMovementComponent::BeginPlay()
{
    Super::BeginPlay(); // 给父类执行 BeingPlay 事件的机会。
    FString Name = this->GetName();
    UE_LOG(LogTemp, Warning, TEXT("UMyMovementComponent BeginPlay..."));
    GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Yellow, Name);
}
```



## ⚡ UObjectBase 底层结构
- UObject https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Objects/
- UObject 处理系统 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Objects/Optimizations/
- Unreal Property System (Reflection) https://www.unrealengine.com/en-US/blog/unreal-property-system-reflection

虚幻引擎拥有处理游戏对象的强大系统。虚幻引擎中的对象基础类为 *UObject*。 `UCLASS` 宏可用于标记从 UObject 派生的类，使 UObject 处理系统识别到它们。

使用适当的宏标记类、属性和函数可以将它们转变为`UClasses`、`UProperties`和`UFunctions`。这让虚幻引擎能够访问它们，从而允许实现一些后台处理功能。为实现 UObject 派生类型所提供的功能，引擎需要在头文件上为这些类型执行一个预处理步骤，以核对需要的信息。该预处理步骤由 UnrealHeaderTool（简称 UHT）执行。

```C++,
#pragma once

#include 'Object.h'
#include 'MyObject.generated.h'

/**
 * 注意此处的注解格式，内容会作为编辑器的 tooltip 提示信息展示。
 */
UCLASS()
class MYPROJECT_API UMyObject : public UObject
{
    GENERATED_BODY()
};
```

`UCLASS` 宏为 UObject 提供一个对 UCLASS 的引用，描述其基于虚幻引擎的类型。 每个 UCLASS 保留一个称作 Class Default Object 的对象，简称 CDO，本质上它是一个默认模板对象，由类构建函数生成，之后并未进行修改。 UCLASS 和 CDO 均可为特定对象实例恢复，但它们通常为只读。使用 *GetClass()* 函数即可随时访问对象实例的 UCLASS。

UCLASS 包含定义类的一套属性和函数，是本地代码可用的普通 C++ 函数和变量，但被虚幻引擎特有的元数据所标记，它们在对象系统中的行为也因此受到控制。

注意：UObject 类还可包括仅限本地的属性，这些属性不存在于相应的 UCLASS 中。

有多个函数可用于新建 *UObject* 实例：

- `NewObject<class>` 使用所有可用创建选项的可选参数创建一个新实例，提供极高的灵活性，包括带自动生成命名的简单使用案例。
- `new` 使用 C++ 的关键字创建新实例，用于在特定低层情况下构建对象，如构建函数需要参数时。

```C++,
    Public function T *  NewObject ( UObject* Outer )
    Public function T *  NewObject ( UObject* Outer, FName Name, EObjectFlags Flags, UObject* Template, 
                                     bool bCopyTransientsFromClassDefaul..., FObjectInstancingGraph* InInst... )

    // Convenience template for constructing a gameplay object
    Public function T *  NewObject ( UObject* Outer, const UClass* Class, FName Name, EObjectFlags Flags,
                                     UObject* Template, bool bCopyTransientsFromClassDefaul...,
                                     FObjectInstancingGraph* InInst..., UPackage* ExternalPackage )
```

UObject 处理系统的工作内容非常多，而且复杂：

- Automatic Property Initialization 自动属性初始化。

    在调用构造函数之前，`UObject`在初始化时对整个类自动执行归零，`UProperties`和 C++ 原生成员类似，成员随后可以使用类构造函数中的自定义值进行初始化。

- Automatic Updating of References 自动更新引用。

    `AActor`或`UActorComponent`被销毁或者从运行中删除时，反射系统中可见的所有对它的引用都将自动清空，包括`UProperty`指针和虚幻引擎容器类中存储的指针，如`TArray`。这样的好处是防止悬挂指针持久存在并导致后续问题，但也意味着如果其他某段代码将`AActor`和`UActorComponent`销毁，这些指针也会变为空。最终的好处是空检查更可靠，因为会检测标准情况空指针和非空指针指向删除内存的情况。

    必须理解的是，这种功能仅适用于标记了`UPROPERTY`或存储在虚幻引擎容器类中的`UActorComponent`或`AActor`引用。存储在原始指针中的 Object 引用对于虚幻引擎将为未知，并且不会自动清空，也不会妨碍垃圾回收。请注意，这不意味着所有`UObject*`指针变量都必须是`UProperties`。如果你需要的 Object 指针不是`UProperty`，请考虑使用`TWeakObjectPtr`。这是弱引用指针，意味着不会妨碍垃圾回收，但可以查询有效性，然后再接受访问，并且它所指向的 Object 要被销毁时，它将被设置为空。

    另一种自动清空被引用的 UObject UProperty 的情况是在编辑器中对资源使用强制删除 Force Delete 操作。因此，作用于属于资源的 UObject 的所有代码都必须处理这些变为空的指针。

- Serialization 序列化。

    当`UObject`被序列化时，所有`UProperty`值都将被自动写入或读取，除非显式标记为"瞬时"或无法从后构造函数默认值进行更改。例如，你可以在关卡中放入`AEnemy`实例，将其"体力（Health）"设置为500，保存并成功地重新加载，而不必在`UClass`定义之外编写一行代码。

    当添加或删除UProperties时，系统会无缝处理加载预先存在的内容。新属性从新的CDO复制默认值。删除的属性将会被静默忽略。

    如果需要自定义行为，则可以覆盖`UObject::Serialize`函数。这对于检测数据错误，检查版本号或执行自动转换或更新（如果数据格式有所更改）十分有用。

- Updating of Property Values 更新属性值。

    当更改`UClass`的 CDO 对象，引擎将尝试在加载类的所有实例时对这些实例应用这些更改。对于给定 Object 实例，如果更新的变量值与旧 CDO 中的值相匹配，则将更新为它在新 CDO 中保存的值。如果变量包含任何其他值，系统会假设这个值是故意设置的，这些更改将会被保留。
    
    例如，假设你在一个关卡中放置了多个 AEnemy Object 并保存，然后将 AEnemy 构造函数中的默认 Health 值设置为100。再假设将 Enemy_3 的Health 值设置为 500，因为它们特别难对付。现在，假设你改变注意了，将 Health 的默认值增加到 150。下次加载关卡时，虚幻意识到你更改了 CDO，就会更新且只更所有使用旧 Health 默认值（100）的`AEnemy`实例。

- Editor Integration 和虚幻编辑器集成。

    编辑器理解`UObject`和`UProperties`，编辑器可以自动公开这些值以供编辑，而不必编写特殊代码。这可以选择在蓝图视觉脚本系统中融入集成。有许多选项可以控制变量和函数的可访问性和公开。

- Run-Time Type Information and Casting 运行时类型信息系统和类型转换支持。

    由于`UObject`是虚幻引擎反射系统的一部分，它们始终知道它们是哪些`UClass`，并可以在运行时做出有关类型的决定和类型转换。

    在原生代码中，每个`UObject`类都将自定义`Super`类型定义设置为其父类，从而可以轻松控制覆盖行为。

- Garbage Collection，虚幻实现垃圾回收机制，不再被引用或已被显式标记为销毁的`UObject`将定期清除。

    引擎构建一个引用图表以确定哪些`UObject`仍在使用，哪些是孤立遗弃的。该图表根部是一组指定为 Root Set 根集的一组对象。任何`UObject`都可以添加到根集。当进行垃圾回收时，引擎将从根集开始，搜索已知`UObject`引用树来跟踪所有引用的`UObject`。任何未被引用的`UObject`（意味着未在树搜索中找到的对象）将被假设为不再需要，因此被删除。

    一个实际的影响是，你通常需要保持对希望保持活跃的任何 Object 的`UPROPERTY`引用，或者将指向它的指针存储在`TArray`或其他引擎容器类中。Actor 及其组件通常属于例外情况，因为 Actor 通常被链接回到根集的 Object 引用（例如它们所属的关卡），而 Actor 的组件被 Actor 自身引用。Actor 可以显式标记为销毁，方法是调用它们的`Destroy`函数，这是从进行中游戏移除Actor的标准方法。组件可以使用`DestroyComponent`函数显式销毁，但它们通常在拥有它们的 Actor 从游戏中移除时被销毁。

    虚幻引擎4中的垃圾回收速度快，效率高，内置大量的优化功能，能够尽量降低开销，如多线程可访问性分析可以标识孤立Object，优化的反加密代码能够尽快从容器中移除Actor。还有一些其他功能以调节，以更精准地控制如何以及何时执行垃圾回收，大部分都可以在 项目设置（Project Settings） 中的 引擎 - 垃圾回收（Engine - Garbage Collection） 下找到。

- Network Replication，`UObject` 系统包含一组可靠的功能，能够促进网络通信和多人游戏。

    `UProperties`可以标记为告诉引擎在网络游戏期间复制数据。常见模型是一个变量在服务器上发生更改，引擎检测到这个更改，并将其可靠地发送到所有客户端。当变量通过复制发生更改时，客户端可以选择性接收回调函数。

    `UFunctions`也可以标记为在远程机器上执行。例如，"server"函数在客户端上调用时，将会在服务器上执行这个函数以获取服务器版本的Actor。而另一方面，"client"函数可以从服务器调用，并在拥有这个函数的客户端版本的对应Actor上运行。


以下示范 RIIT 的使用：

```C++,
class AEnemy : public ACharacter
{
    virtual void Speak()
    {
        Say("Time to fight!");
    }
};

class AMegaBoss : public AEnemy
{
    virtual void Speak()
    {
        Say("Powering up!");
        Super::Speak();
    }
};
```

不出意料，调用`Speak`将会让 MegaBoss 说"Powering up!Time to fight!"。

此外，你可以使用模板化 `Cast` 函数安全地将对象从基类转换为衍生类，或者`IsA`查询看对象是不是特定类。

```C++,
class ALegendaryWeapon : public AWeapon
{
    void SlayMegaBoss()
    {
        TArray<AEnemy> EnemyList = GetEnemyListFromSomewhere();

        // The legendary weapon is only effective against the MegaBoss
        for (AEnemy Enemy :EnemyList)
        {
            AMegaBoss* MegaBoss = Cast<AMegaBoss>(Enemy);
            if (MegaBoss)
            {
                Incinerate(MegaBoss);
            }
        }
    }
};
```

这里我们使用了`Cast`来尝试将`AEnemy`转换为`AMegaBoss`。如果所提及 Object 实际上不是`AMegaBoss`或者其子类，则 Cast 会返回空指针，我们可以适当的做出反应。在以上代码中，`Incinerate`将仅对 MegaBoss 调用。





# 🌟 Assets & Packages
- 资产和包 https://docs.unrealengine.com/4.27/zh-CN/Basics/AssetsAndPackages/
- 内容资产类型 https://docs.unrealengine.com/4.27/zh-CN/WorkingWithContent/Types/
- 缩减游戏包容量 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/ReducingPackageSize/
- 烘焙和数据块划分 https://docs.unrealengine.com/4.27/zh-CN/SharingAndReleasing/Patching/GeneralPatching/CookingAndChunking/
- 资产管理-加载与卸载 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/AssetManagement/
- 资源和包的版本控制 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/VersioningAssetsAndPackages/

资产 Assets 是虚幻引擎项目中的一项内容，可将其看作序列化到文件中的 `UObject`。在内容浏览器的 Sources Panel 上点击左侧的 Show/Hide Sources and Collections 按钮，显示资产目录树。

资产树以列表形式显示内容目录中的文件内容，内容目录是 .uasset 文件所在的位置，内容目录**Content**是工程专用目录，所有资产文件都在这个目录下。

推荐通过内容浏览器来移动资产，这是因为对资产的引用包含资产的完整目录路径。如果移动资产，其路径将更改。 你可以在虚幻编辑器外，在文件夹间移动资产文件，但引用将无法保持完整。

用户可在导入或创建资产时对其进行命名，资产路径将与它在磁盘上的位置直接关联，用户创建或导入资产时指定的文件夹将自动设置此路径。例如，路径 Content/Characters/MyCharacter 将保存至 /UE4/MyProject/Content/Characters/MyCharacter.MyCharacter.uasset。

可在内容浏览器中对资产进行重命名，选中然后左键单击其名称或按 F2 键。通过这种方式重命名或移动资产之后，其他资产引用会根据重命名或移动操作进行相应更新，而且在原始资产所在位置将会留下不可见的重定向器。可通过在内容浏览器中右键单击并选择 Fix Up Redirectors in Folder 来清除重定向器。

请注意，你需要重新保存资产。另外，如果删除被引用的资产，将会显示询问应使用哪个现有资产（如有）替代删除的资产的菜单。

资产通常由虚幻引擎自动加载或卸载。但是，在某些情况下，直接控制该过程可以显著提升性能，例如，可以减少甚至消除冗余加载时间，消除游戏进程中的卡顿。有关管理资产加载和卸载的详细信息，请参阅资源管理页面。部署项目时，资产将被转化二进制格式，并可分到多个 .pak 文件中，以用于分发。

当工作流包含多个包（package）文件，且每个包文件都包含多个资产时，可能会发生源控制冲突问题。然而，如果工作流支持并鼓励创建多个单独的资产文件，那么就可分别检出每个资产。这可以减少工作流中的源控制冲突和瓶颈，同步单个资产文件的时间也要短于同步包含多个资产的包文件。

在虚幻编辑器中，资产以 .uasset 文件格式存储，通常仅包含单个资产。每个资产引用都包含目录式的路径，每个路径都可唯一地标识游戏中的任何资产。

许多资产是有依赖关系的，比如安装可选用户资源包 StarterContent，其中 Shapes 目录下的第三种 StaticMesh 对象依赖了 Materials 目录下的各种材质对象，而材质对象又依赖 Textures 目录下的各种纹理贴图文件。并且这些被依赖的对象使用的路径是以 /Game/StarterContent/Shapes/Shape_Cube.Shape_Cube 这样的路径，因此直接复制 StarterContent 目录下的文件到其它目录，如果不是项目的 Content 目录下，就会导致依赖的资源不能正确定位。

将资产复制到其他项目，需要使用内容浏览器中的迁移工具 Asset Actions -> Migrate Tool 来创建资产的副本（以及处理依赖性资产），以在其他项目中使用。

需要注意，使用 Migrate Tool 迁移资产后，资产文件依赖的其它资产路径并不会改变，它只是按原有资产的依赖关系复制一个副本。所以，将工程 Content 目录下的资产，如 StarterContent 迁移到 Engine Content 目录，虽然这样每个项目中都可以访问，资源也可以单独使用。但是 Engine Content 目录的资产不能正确迁移处理，其路径使用的是 `/Engine`  开头替代，而不是使用 `/Game` 开头，它们具有特殊含义，迁移工具不会去修改它。所以，下次迁移就不能正确处理之前迁移到 Engine Content 目录下的资产依赖。

使用 API 加载资产时，扩展名可以省略。特别地，比如通过内容浏览器可以查看到 /Game/Engine Content/StarterContent/Shapes/Shape_Cube.Shape_Cube 这个立方体模型，加载时，使用 `/Engine` 路径开头替代 /Game/Engine Content。如果加载工程 Content 目录下的资产，就使用 `/Game` 开头。

也就是说 Migrate Tool 只能做同类目录的资产迁移，如工程 Content 目录的资产互相迁移，而不能正确地和 Engine Content 目录下的资产互相迁移。

使用引用关系浏览器 Shift + Alt + R，可以快速定位到被依赖的或依赖的对象，并且可以将依赖关系复制下来：

    [/Game/SnowFoot/RenderTarget_BP - Dependencies]
      [HARD]
        /Game/SnowFoot/Mat_Depth.Mat_Depth
        /Game/SnowFoot/RenderTargetPersistent.RenderTargetPersistent
        /Game/SnowFoot/SnowMPC.SnowMPC
        /Game/SnowFoot/DrawToPersistent.DrawToPersistent
        /Game/SnowFoot/RenderTarget.RenderTarget
      [SOFT]
        /Game/SnowFoot/RenderTarget_BP.RenderTarget_BP

项目设置 Packaging 指定烘焙时排除编辑器内容，烘焙指定的关卡地图。编辑器内容只在开发阶段使用，
在游戏打包发行后不需要。编译时，配置指定 Shipping（Production），就会对打包内容进行压缩，
可以进一步减小打包体积。

启用“创建压缩的已烘培包”（Create compressed cooked packages）复选框的情况下打包游戏后，
项目 APK 包大小下降 50% 并不罕见。


## ⚡ Assets Reference 资源引用
- 如何引用资源 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assets/ReferencingAssets/

虚幻引擎 4 提供了许多种机制来控制引用资源的方式并通过扩展将其装入内存。

这些引用分为两种基本方式：

- 硬性引用，即对象 A 引用对象 B，并导致对象 B 在对象 A 加载时加载；
- 软性引用，即对象 A 通过间接机制来引用对象 B，例如字符串形式的对象路径，又或者属性方式等等。
    - Native UClass 的加载路径格式为 **/Script/MODULE.CLASSNAME**， 类型名要去掉 U、A 等前缀。
    - Blueprint UClass 的加载路径格式为 **/Engine|Game|PLUGINNAME/.../CLASSNAME.CLASSNAME_C**，多了后缀的 *_C*。

以下按这三种方法进行说明：

- Direct Property Reference
- Construction Time Reference
- Indirect Property Reference

直接属性引用是最常见的硬性资源引用情况，并通过 **UPROPERTY** 宏公开，允许设计人员通过蓝图继承对原型指定特定资源，或通过放在环境中的实例来指定该资源。例如，以下代码来自 StrategyGame 包含的 AStrategyBuilding，它允许设计人员选择建造某种类型的建筑时播放的声音。

```C++
/** construction start sound stinger */
UPROPERTY(EditDefaultsOnly, Category=Building)
USoundCue* ConstructionStartStinger;
```

此属性只能作为对象默认属性的一部分进行设置（由 EditDefaultsOnly 关键字控制）。设计人员创建扩展 AStrategyBuilding 的新蓝图类。然后，可以为该蓝图保存设计人员所需要的声音。每当设计人员所创建的该蓝图加载时，还将自动加载该 UPROPERTY 中引用的声音。

构造时引用也是常见硬性引用方式，当程序员知道需要为给定属性加载的确切资源，并在对象的构造中设置该属性。这项任务是使用特殊的 **ConstructorHelpers** 类完成的，这个类在构造阶段查找某个对象的对象和类。
以下 HUD 片段同样来自 StrategyGame，它在其渲染过程中指派要使用的资源。

```C++,
    /** gray health bar texture */

    UPROPERTY()

    class UTexture2D* BarFillTexture;

    AStrategyHUD::AStrategyHUD(const FObjectInitializer& ObjectInitializer) :
        Super(ObjectInitializer)
    {
        static ConstructorHelpers::FObjectFinder<UTexture2D> BarFillObj(TEXT("/Game/UI/HUD/BarFill"));

        ...

        BarFillTexture = BarFillObj.Object;

        ...

    }
```

在以上构造函数中，ConstructorHelpers 类将尝试在内存中查找该资源，如果找不到，则进行资产加载。请注意，使用资源的完整路径来指定要加载的内容。如果该资源不存在或者由于出错而无法加载，那么该属性将设置为 nullptr。发生这种情况时，尝试访问纹理的代码将崩溃。最好进行声明，指出资源已正确加载（如果后续代码假设引用有效）。

UPROPERTY 的声明与前面的硬性引用示例相同。它们的工作方式相同，只不过是最初的设置方式有所差别。有关硬性引用的一个注意事项是，当对象加载并实例化时，还将加载以硬性方式引用的资源。您必须仔细地进行考虑，否则内存使用量会因为同时加载许多资源而迅速增加。


ConstructorHelpers 有一个 `FObjectFinder` 和一个 `FClassFinder` 来加载资源，但是前者 CDO Constructor 只能在构造函数中使用，否则会出错。

其它涉及的 API：

- FindPackage
- LoadPackage
- FindObject<>() 和 LoadObject 类似，内部调用 StaticLoadObject；
- LoadClass 内部调用 StaticLoadClass；

参考源代码 UE_4.27\Engine\Source\Runtime\CoreUObject\Public\UObject\UObjectGlobals.h


间接属性引用方式，可以控制何时加载资源，一种简单方法是使用 **TSoftObjectPtr**。对于设计人员，间接属性引用的工作方式就像直接属性引用一样。但是，属性以字符串形式与模版代码存储在一起以便安全地检查资源是否已加载，而不是进行直接指针引用。使用 **IsPending()** 方法可检查资源是否已准备好可供访问。请注意，使用 **TSoftObjectPtr** 要求在您想要使用资源时手动加载该资源。您可使用模板化 **LoadObject<>()** 方法、**StaticLoadObject()** 或 **FStreamingManager** 来加载对象。前两个方法以同步方式加载资源，这可能会导致帧速率突增，因此，仅当您知道不会影响游戏时，才应使用这些方法。

```C++,
    UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category=Building)
    TSoftObjectPtr<UStaticMesh> BaseMesh;

    UStaticMesh* GetLazyLoadedMesh()
    {
        if (BaseMesh.IsPending())
        {
            const FSoftObjectPath& AssetRef = BaseMesh.ToStringReference();
            BaseMesh = Cast<UStaticMesh>(Streamable.SynchronousLoad(AssetRef));
        }
        return BaseMesh.Get();
    }
```

以上代码，**TSoftObjectPtr** 将其使用的 UStaticMesh 网格的加载推迟到运行时进行。会进行检查资源，以确定对象是否已加载。如果尚未加载，那么将使用 **FStreamingManager** 执行同步加载。然后，返回 **TSoftObjectPtr** 内的 UStaticMesh 指针给调用者。

如果您希望推迟加载 Uclass，请使用与 **TSoftObjectPtr** 相同的方法，并替换类特定版本 TSoftClassPtr 模版类型。其工作方式与引用特定的资源相同，但改为引用资源的 Uclass，而不是引用接口。

以上这些示例全都基于 UPROPERTY，以下是通过查找/装入的方式加载对象。在运行时构建字符串并使用该字符串来引用对象，可使用两个选项：

- 如果您仅在 UObject 已加载或已创建时才使用它，那么正确的选择是使用 **FindObject<>()**。
- 如果您希望对象未加载时将其加载，那么正确的选择是使用 **LoadObject<>()**。

请注意，LoadObject<>() 在内部执行的操作与 FindObject 相同，因此您不必先尝试查找对象再进行加载。

以下是各个函数的一些用法示例。

```C++
AFunctionalTest* TestToRun = FindObject<AFunctionalTest>(TestsOuter, *TestName);
GridTexture = LoadObject<UTexture2D>(NULL, TEXT("/Engine/EngineMaterials/DefaultWhiteGrid.DefaultWhiteGrid"), NULL, LOAD_None, NULL);
```

加载 UClass 时，可以使用 LoadObject 的一种特殊形式。这无非是加载类的一种较简单方法，它会自动验证类型。以下代码片段对此作了说明。

```C++
DefaultPreviewPawnClass = LoadClass<APawn>(NULL, *PreviewPawnName, NULL, LOAD_None, NULL);

// 等同于：
DefaultPreviewPawnClass = LoadObject<UClass>(NULL, *PreviewPawnName, NULL, LOAD_None, NULL);

if (!DefaultPreviewPawnClass->IsChildOf(APawn::StaticClass()))
{
    DefaultPreviewPawnClass = nullptr;
}
```


## ⚡ Assets Registry 资源注册表
- Assets Registry https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assets/Registry/

要按类建立资源列表，只需加载资源注册表（Asset Registry）模块然后调用 *Module.Get().GetAssetsByClass()* 即可。

```C++
FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
TArray<FAssetData> AssetData;
const UClass* Class = UStaticMesh::StaticClass();
AssetRegistryModule.Get().GetAssetsByClass(Class->GetFName(), AssetData);
```

以上代码将返回一系列 *FAssetData* 对象，它们描述已加载或未加载的资源，还容纳有关资源的信息，这些信息在资源被加载前就可以确定。

下面是其成员列表和说明：

- FName *ObjectPath* 资源的对象路径，形式是 Package.GroupNames.AssetName。
- FName *PackageName* 包含该资源的包的名称。
- FName *PackagePath* 包含该资源的包的路径。
- FName *GroupNames* 包含该资源的组名称的列表（使用"."分隔）。如果无组，则为 NAME_None。
- FName *AssetName* 无包或组的资源的名称。
- FName *AssetClass* 资源的类的名称。
- TMap<FName, FString> *TagsAndValues* 标记为 AssetRegistrySearchable 的属性的值映射。

你也可以通过调用下列任意一个函数，使用其他条件建立列表：

- *GetAssetsByPackageName()* 返回来自特定包的资源的列表。
- *GetAssetsByPath()* 返回特定路径中的资源的列表。
- *GetAssetByObjectPath()* 返回具有特定对象路径的资源的列表。
- *GetAssetsByTagValues()* 返回具有特定标记和值组合的资源的列表。
- *GetAllAssets()* 返回所有资源的列表。此过程可能较慢。

FAssetData 对象具有一个名称为 *GetAsset()* 的函数，它将返回 FAssetData 表示的 UObject* 。如果需要，它将加载资源然后返回它。

如果仅希望检查资源是否已加载，可使用 *IsAssetLoaded()*。

如果需要使用多个条件建立资源列表，可以使用 *GetAssets()* 并提供 *FARFilter* 结构体，如创建过滤器部分中所述。

过滤器由多个成分组成：

- 包名称（PackageName）
- 包路径（PackagePath）
- 集合（Collection）
- 类（Class）
- 标记/值对（Tags/Value）

一个成分可能具有多个元素。要通过过滤器，资源必须满足所有成分。要满足成分，资源必须与其中的任意元素匹配。

例如，存在一个路径为*/Game/Meshes/BeachBall*的静态网格体资源：

- 如果过滤器仅含包路径 */Game/Meshes*，资源将通过过滤，仅存在一个具有一个元素的成分。
- 如果过滤器含包路径 */Game/Meshes* 还有 *UParticleSystem* 和 *UStaticMesh* 类，资源将通过过滤。因为，包路径匹配且 *BeachBall* 属于静态风格资源。存在两个成分，第一个成分具有一个元素，第二个成分具有两个元素即两个类。
- 如果过滤器含包路径 */Game/Meshes* 并且仅含 *UParticleSystem* 类，资源将无法通过过滤。
- 如果过滤器含包路径 */Game/NotMeshes* 和 *UStaticMesh* 类，资源将无法通过过滤，因为包路径不匹配。

使用具有两个组件（类和包路径）的过滤器的一个示例：

```C++
FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
TArray<FAssetData> AssetData;
FARFilter Filter;
Filter.Classes.Add(UStaticMesh::StaticClass());
Filter.PackagePaths.Add("/Game/Meshes");
AssetRegistryModule.Get().GetAssets(Filter, AssetData);
```

从资源注册表返回的 *FAssetData* 对象包含名称和称作 TagsAndValues 的值映射。 它们是 *FAssetData* 表示的资源的属性名称和关联值。 此信息是在资源被保存时收集的，存储在包含资源的 UAsset 文件的标头中。 资源注册表读取此标头并相应地填充 TagsAndValues 映射。 资源注册表仅收集使用 *AssetRegistrySearchable* 标记标记的 UPROPERTY() 属性。

例如（来自 UTexture）：

```C++
/** 对此纹理采样时使用的纹理过滤模式。*/
UPROPERTY(Category=Texture, AssetRegistrySearchable)
TEnumAsByte<enum TextureFilter> Filter;
```

将此标记添加到 UTexture 的过滤器（Filter）属性后，之后保存的所有 UTexture 都将具有一个 Key 为 Filter、值是表示枚举值的字符串的可查询 *FAssetData* 条目保留在 TagsAndValues 映射中（例如，"TF_Linear"）的条目。

要使资源注册表能够发现资源的属性，必须重新保存资源。

如果你希望资源注册表能够搜索本身不是 UProperty 的信息， 资源的类可以实现继承自 UObject 的虚函数*GetAssetRegistryTags()*，以手动将键/值 对添加到*TagsAndValues*映射。

使用异步数据收集时，资源注册表异步读取 UAsset 文件，在请求资源列表时， 列表可能并非包含所有资源的完整列表。如果编辑器代码需要完整列表，资源注册表可提供委托回调，涵盖资源被发现/创建、重命名或删除等情况。也存在适用于 资源注册表已完成初始搜索的情况的委托，它对于很多系统都非常有用。

注册这些委托的方法是，加载资源注册表（Asset Registry）模块，然后使用 *IAssetRegistry* 接口提供的函数：

```C++,
    /** 注册/取消注册：适用于资源被添加到注册表中的情况的回调*/
    virtual FAssetAddedEvent& OnAssetAdded() = 0;

    /** 注册/取消注册：适用于资源被从注册表中删除的情况的回调*/
    virtual FAssetRemovedEvent& OnAssetRemoved() = 0;

    /** 注册/取消注册：适用于资源在注册表中被重命名的情况的回调*/
    virtual FAssetRenamedEvent& OnAssetRenamed() = 0;

    /** 注册/取消注册：适用于资源注册表加载完文件的情况的回调*/
    virtual FFilesLoadedEvent& OnFilesLoaded() = 0;

    /** 注册/取消注册：更新后台文件加载进度的回调*/
    virtual FFileLoadProgressUpdatedEvent& OnFileLoadProgressUpdated() = 0;

    /** 如果资源注册表当前正在加载文件，尚无法返回有关所有资源的信息时返回 True*/
    virtual bool IsLoadingAssets() = 0;
```

例如：

```C++,
    void FMyClass::FMyClass()
    {
        // 加载资源注册表模块，以侦听更新
        FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
        AssetRegistryModule.Get().OnAssetAdded().AddRaw( this, &FMyClass::OnAssetAdded );
    }

    FMyClass::~FMyClass()
    {
        // 加载资源注册表模块，以将委托取消注册
        FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
        AssetRegistryModule.Get().OnAssetAdded().RemoveAll( this );
    }

    void FMyClass::OnAssetAdded(const FAssetData& AssetData)
    {
        // 资源注册表发现某个资源。
        // 这意味着该资源刚被创建或刚在磁盘上被发现。
        // 确保此函数中的代码速度较快，否则它将拖慢收集过程。
    }
```

可在 commandlet 中使用资源注册表，但是这样 会同步收集信息。*LoadModule()* 调用将被阻止，直至收集完成。

如果代码期望资源被异步发现，并且具有 Slate UI 前端，它应 包含 SAssetDiscoveryIndicator 控件，以将进度传达给用户。



## ⚡ Assets AsyncLoading 资源异步加载
- 异步资源加载 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assets/AsyncLoading/
- 资源注册表 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/Assets/Registry

按需引用和加载数据，通常有两种方法：**FSoftObjectPaths** 和 **TSoftObjectPtr**。

在蓝图中设置一个 UObject 或子类引用时，会涉及 4 种引用：

- Object Reference 对一个 UObject 的硬引用，即其引用的类被实例化，被引用的资源也会被实例化。
- Class Reference 对一个 UClass 的引用。
- Soft Object Reference，等价于 C++ 的 FSoftObjectPtr。
- Soft Class Reference，等价于 C++ 的 TSoftClassPtr。

以下这几个基本类型名字有点混，注意前缀 F 表示基本数据类型，前面两个有 Path 后缀表示其指路功能：

- FSoftObjectPath 使用字符串引用一个对象的结构体，内部使用 FName 指向顶级资产，如**/package/path.assetname**，还有一个可选子对象路径。MetaClass 元数据用它来约束 FProperty 类型。
- FSoftClassPath 继承前者，使用字符串引用一个类型，可以用来创建类型的软引用。
- FSoftObjectPtr 软引用智能保持 UObject 的弱引用，并且包含追踪磁盘资源的路径信息。
- TSoftObjectPtr 是泛型结构体 **FSoftObjectPtr** 的模板化包装器，可用于 UProperties。
- TSoftClassPtr 是围绕 **FSoftObjectPtr** 的模板化包装器，其工作原理类似于 TSubclassOf，它可以在蓝图子类的 UProperties 中使用。

当被引用对象加载或卸载时，FSoftObjectPtr 将在有效和挂起两种状态之间来回切换。它对对象是否被垃圾收集没有影响，这对于按需异步加载的资产非常有用。

```js
UPROPERTY(Category = MyTest1, EditAnywhere) 
TSoftObjectPtr<UTexture2D> SourceTexture1; // 软引用

UPROPERTY(Category = MyTest1, EditAnywhere) 
UTexture2D* SourceTexture2; // 硬引用
```



## ⚡ Assets Loading 资产加载参考
- Respawning a Player Character https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/HowTo/RespawnPlayer/
- GamePlay 类与资源 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Classes/

提示：，可以在内容浏览器中，使用对象的右键菜单 Copy Reference 获取资产文件的引用路径。但是注意，粘贴复制的资产引用时，该引用在资产的引用路径之前包含资产类型名称。你将看到 *StaticMesh'/Game/Sphere.Sphere'*，又或者 *Material'/Engine/BasicShapes/BasicShapeMaterial.BasicShapeMaterial'*这样的信息。在代码中使用引用路径时，请确保从引用路径中删除资产的类型名称，例如 Material，包括单引号也要清理。

使用蓝图加载资产，实际操作中需要通过一个需要加载的文件的名字获取到对应资源：

- 可以先通过 Get Asset Registry + Get Asset by Path 获得到 Assets，只需要指定资产路径，不需要指定资产名称；
- 再通过 Asset 数据结构对象的 Get Full Name + Contains 筛选包含指定名称的目标内容；
- 配合 Get Class，Get Asset 获取到 Array 中的数据，再 Cast To 转换为目标类型，例如 StaticMesh 或者 Material。

参考：AssetRegistry.h


为更可靠的数据类型设置数值时（尤其是类引用、命名和资源引用），需要在构造函数中定义并实例化一个 *ConstructorStatics* 结构体，以保存所需的诸多属性数值。*ConstructorStatics* 结构体在构造函数首次运行时才会被创建。在随后的运行上它只会复制一个指针，使其处理速度极快。*ConstructorStatics* 被创建时，数值将被指定到结构体成员，以便稍后在构建函数上指定数值到实际属性时进行访问。

`ContructorHelpers` 是 ObjectBase.h 中定义的特殊命名空间，这个命名空间包含用于执行构建函数特定常规操作的助手模板。例如为资源或类寻找引用、以及创建并寻找组件的助手模板。

理想状态下，类中的资源引用并不存在。硬编码资源引用很脆弱，优选方法是使用蓝图配置资源属性。然而，仍然完全支持硬编码引用。不需要在每次构造对象时搜索资源，因此这些搜索只执行一次。一个静态结构体可确保只执行一次资源搜索：`ConstructorHelpers::FObjectFinder` 通过 *StaticLoadObject* 为特定的 UObject 寻找引用。它常用于引用存储在内容包中的资源。如未找到对象， 则报告失败。

```C++,
    ATimelineTestActor::ATimelineTestActor()
    {
        // 进行一次性初始化的结构
        struct FConstructorStatics
        {
            ConstructorHelpers::FObjectFinder<UStaticMesh> Object0;
            FConstructorStatics()
            :Object0(TEXT("StaticMesh'/Game/UT3/Pickups/Pickups/Health_Large/Mesh/S_Pickups_Base_Health_Large.S_Pickups_Base_Health_Large'"))
            {
            }
        };
        static FConstructorStatics ConstructorStatics;

        // 属性初始化
        StaticMesh = ConstructorStatics.Object0.Object;
    }
```

类引用使用 *ConstructorHelpers::FClassFinder* 为特定的 UClass 寻找引用。如类未找到，则报告失败。

```C++,
    APylon::APylon(const class FObjectInitializer& ObjectInitializer)
    :Super(ObjectInitializer)
    {
        // 进行一次性初始化的结构
        static FClassFinder<UNavigationMeshBase> ClassFinder(TEXT("class'Engine.NavigationMeshBase'"));
        if (ClassFinder.Succeeded())
        {
            NavMeshClass = ClassFinder.Class;
        }
        else
        {
            NavMeshClass = nullptr;
        }
    }
```

在许多情况下，可只使用 USomeClass::StaticClass()，绕开复杂的全部 ClassFinder。例如，在多数情况下均可使用以下方法：

```C++
NavMeshClass = UNavigationMeshBase::StaticClass();
```

对跨模块的引用而言，使用 ClassFinder 法较好。


加载并设置材质：

```C++,
    // Find assets
    static ConstructorHelpers::FObjectFinder<UStaticMesh> ofMesh(TEXT("StaticMesh'/Game/StaticMeshes/Shape_Cube.Shape_Cube'"));
    static ConstructorHelpers::FObjectFinder<UMaterial> ofMat(TEXT("Material'/Game/Materials/M_Ray.M_Ray'"));

    m_pMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    m_pMesh->SetCollisionProfileName(TEXT("NoCollision"));

    if (ofMesh.Succeeded() &&
        ofMat.Succeeded())
    {
        m_pMesh->SetStaticMesh(ofMesh.Object);
        m_pMesh->SetRelativeLocation(FVector(0.0f, 0.0f, -50.0f));
        m_pParentMat = ofMat.Object;
    }
```

在许多情况下，可只使用 USomeClass::StaticClass()，绕开复杂的全部 ClassFinder。例如，在多数情况下均可使用以下方法：

```C++
NavMeshClass = UNavigationMeshBase::StaticClass();
```

对跨模块的引用而言，使用 ClassFinder 法较好。

以下代码片段示范使用 LoadObject 和  加载静态网络资产：

```C++,
    UStaticMeshComponent* VisualMesh;

    VisualMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    VisualMesh->SetupAttachment(RootComponent);

    UStaticMesh *mesh = LoadObject<UStaticMesh>(nullptr, TEXT("/Engine/StarterContent/Shapes/Shape_Cube"));
    if (mesh != nullptr) {
        VisualMesh->SetStaticMesh(mesh);
        VisualMesh->SetRelativeLocation(FVector(0.0f, 0.0f, 0.0f)); 
    }

    static ConstructorHelpers::FObjectFinder<UStaticMesh> 
    CubeVisualAsset(TEXT("/Engine/StarterContent/Shapes/Shape_Cube"));
    // "/Game/Engine Content/StarterContent/Shapes/Shape_Cube.Shape_Cube";

    if (CubeVisualAsset.Succeeded()) 
    { 
        VisualMesh->SetStaticMesh(CubeVisualAsset.Object); 
        VisualMesh->SetRelativeLocation(FVector(0.0f, 0.0f, 0.0f)); 
    }
```

以下代码片段演示如何加载蓝图类、动画蓝图、骨骼蓝图。使用第三人称模板创建 C++ 工程和蓝图工程有些结构差别，存放类对象的目录分别是 ThirdPersonCPP 和 FirstPersonBP，虽格式还是资产文件类型，但内容肯定是有差别的。

注意，加载动画资产时，因为是蓝图类，多了后缀 ThirdPerson_AnimBP -> ThirdPerson_AnimBP_C。

```C++,
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

    ARespawnPlayerCharacter::ARespawnPlayerCharacter()
    {
        // ...
        // 注意：网格体组件上引用的骨骼网格体和动画蓝图（从ACharacter继承） 
        // 是在名为MyCharacter的推导蓝图资产中设置的（以避免在C++中直接引用内容）
        // Note: The skeletal mesh and anim blueprint references on the Mesh component (inherited from Character) 
        // are set in the derived blueprint asset named MyCharacter (to avoid direct content references in C++)
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
```

## ⚡ Data Driven 数据驱动的游戏性
- 数据驱动游戏性元素 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/DataDriven/

做过游戏的应该都清楚，如果游戏稍微有点规模，那么使用数据驱动来做游戏一般是必不可少的一步，一般也就是策划通过本表的方式来解决。下面我们来简单说一下 UE4 中如何使用 DataTable 来实现数据驱动开发。

顾名思义，数据表就是以有意义且有用的方式将各种相关的数据归类的表格， 其中，数据字段可以是任何有效的 UObject 属性，包括资产引用。在设计师将 CSV 文件导入数据表前，程序员必须创建行容器以指示引擎如何解释数据。 这些数据表包含了列名，这些列名和基于代码的 UStruct 结构以及它的（子）变量一一对应， 这个 UStruct 的结构必须继承自 FTableRowBase 才可以被导入器辨识。



# 🌟 Physics 物理系统
- Physics https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/

虚幻引擎默认使用 PhysX 来驱动它的物理模拟计算并执行所有的碰撞计算。物理引擎子系统提供了执行准确的碰撞检测以及模拟世界中对象之间的物理互动的功能。

使用 NVIDIA APEX 工具组创建和导入可破坏物，虚幻编辑器可导入 .APX 和 .APB 两种 Nvidia PhysX APEX 文件格式。布料和可破坏网格体均可导出这两种文件类型，但 Content Browser 只能导入可破坏网格体。布料资源须通过 Persona 导入。

## ⚡ Collision 碰撞检测
- Collision 碰撞概述 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/Collision/Overview/
- 碰撞响应参考 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/Collision/Reference/
- Collision Filtering By James Golding https://www.unrealengine.com/en-US/blog/collision-filtering
- Traces with Raycasts https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Tracing/
- Unreal Engine Physics Essentials by Katax Emperore Devin Sherry

虚幻引擎 4 在运行时处理碰撞和光线投射的基础由两种响应模型决定：

- Collision Responses 碰撞响应，内置通道类型：WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle, Destructible；
- Trace Responses 追踪响应使用光线投射进行检测，内置通道类型：Visibility, Camera；

追踪响应描述对象在与跟踪交互时应如何反应，光线投射进行检测。对象可以选择阻止、重叠甚至忽略来自特定源的跟踪。默认情况下，有两种不同的跟踪响应：

- Visibility 可见性跟踪：指定从一个位置到另一个位置。
- Camera 摄影机跟踪：这与可见性跟踪响应相似，但在使用摄影机的光线投射时应使用此响应。

追踪响应的原理基本相同，唯一的区别是追踪（光线投射）本身可以定义为一种追踪响应类型，因此 Actor 可以根据其追踪响应阻挡或忽略。

在 HMD 设备启用的条件下，使用 KismetSystemLibrary::LineTraceByChannel 进行光线碰撞追踪，并返回首个阻挡命中，只返回对特定追踪通道响应的对象。

对于一个游戏系统来说，对象数量可以是极其庞大的。使用对象类型通道的目的就是进行相关性分类，避免处理不相关的对象。

假设，我们在游戏中定义了两个 Trace Channel，一个视线通道，另一个为武器通道。一堵砖墙可以同时阻挡这两种情况，灌木可以阻挡视线但不能阻挡武器，防弹玻璃可以阻挡武器但不能阻挡视线。在执行此类查询时，指定一个跟踪通道。

虽然，响应方式只有三种，但是两个对象即将交叠，碰撞检测需要确定哪些事件会被激发？

首先要知道的是，当你说某物应该碰撞时，必须选择是否能穿透它。如果砖墙就应该阻挡玩家，如果 触发器将和玩家重叠，并允许他们通过。两者都会生成相应的事件，分别为 Hit 命中和 Overlap 重叠，这两个概念是一个重要的区别。

处理两个同时运动的对象的碰撞要复杂点，UE4 中每个对象都有自己的 Object Channel 设置，还有响应其它各种类型对象的 Object Channels 设置。当两个对象交叠，最终如何响应取决于两者的设置。

以爆炸为例子，希望快速找到某个半径内 Pawn 或 PhysicsBody 类型的所有对象。执行此类查询时，可以指定多个对象通道。

那么参考下表，竖直方向表示 A 对象设置对 B 对象的响应方式，横向表示 B 对象对 A 对象设置的响应方式：

    |         | Ignore | Overlap |  Block  |
    |---------|--------|---------|---------|
    | Ignore  | Ignore | Ignore  | Ignore  |
    | Overlap | Ignore | Overlap | Overlap |
    | Block   | Ignore | Overlap | Block   |

上表可能还不能清晰，可以用具体的对象类型通道替换 A 和 B，意思是一样的，就是归属于两个类型通道的对象在检测碰撞时，结果如何响应。


```js
// 设置是否开启物理模拟
Cube->SetSimulatePhysics(false);

// 开启 Generated Hit Event
Cube->SetNotifyRigidBodyCollision(true);

// 开启CCD Continuous collision detection (CCD) 连续式碰撞检测
Cube->BodyInstance.SetUseCCD(true);

// 开启Generate Overlap Events
Cube->SetGenerateOverlapEvents(true);

// 设置碰撞预设
Cube->SetCollisionProfileName(TEXT("OverlapAll"));
//Cube->SetCollisionResponseToAllChannels(ECR_Overlap);

// 设置碰撞响应设置
Cube->SetCollisionEnabled(ECollisionEnabled::QueryAndPhysics);

// 绑定函数
Cube->OnComponentBeginOverlap.AddDynamic(this, &ACollisionActor::OnOverlapBegin);

// 绑定函数 使用委托
FScriptDelegate OverlapEndDelegate;
OverlapEndDelegate.BindUFunction(this, TEXT("OnOverlapEnd"));
Cube->OnComponentBeginOverlap.Add(OverlapEndDelegate);

// 绑定碰撞函数
Cube->OnComponentHit.AddDynamic(this, &ACollisionActor::OnHit);
```

关于碰撞的处理方式，需要记住几点规则：

- 设置为 `Block` 的两个（或更多）Actor 之间自然发生阻挡行为。但是，Event Hit 需要启用 Simulation Generates Hit Events，该功能在蓝图、可破坏物 Actor、触发器等处使用。
- 将 Actors 设置为 `Overlap` 就像设置为 `Ignore`，如果没有 Generate Overlap Events，则二者基本相同。
- 对于彼此阻挡的两个或更多模拟对象，它们都需要设置阻挡相应的对象类型。
- 对于两个或更多模拟对象：如果一个设置为 `Overlap`，另一个设置为 `Block`，则发生重叠，而不会发生阻挡。
- 即使一个对象会 `Block` 另一个对象，也 可以 生成重叠事件，尤其是高速运行的对象。
- 不建议一个对象同时拥有碰撞和重叠事件，虽然可以，但需要手动处理的部分太多。
- 如果一个对象设置为 `Ignore`，另一个设置为 `Overlap`，则不会触发重叠事件。

以武器的发射物为例，碰撞设置原则就是只对作用对象触发 Overlap 事件，其它对象忽略，或者 Block，这样可以提供运行效率，尽量避免过多的检测运算。

虚幻引擎自带了数个预设碰撞通道配置，(WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle, Destructible)不过，引擎也支持游戏项目使用自定义 18 个对象类型通道，或者 18 个追踪通道类型。

创建自定义碰撞通道，并加载到对象实例上使用。打开项目设置 Project Settings -> Engine -> Collision，可以展开预设 Preset 查看现有的各种内置通道的配置。列如，*OverlapAll* 设置对所有其它所有对象通道都触发 Overlap 事件，只要碰触对象不是设置为 `Ignore` 响应方式。

最接近的发射物设置需求预设就是 *Ragdoll*，它只对 Pawn 对象响应 `Overlap` 事件，即对玩家自身是可以穿过，对其它所有对象响应 `Block`，即阻挡继续运动，触发 `Hit` 事件。

自定义通道配置有两种：

- Object Channels 对象通道；
- Trace Channels 追踪通道；

新建对象通道，将新碰撞通道命名为 *Projectile*，确保将默认响应（Default Response）设置为 Block，然后点击接受设置。

在预设（Preset）中新建配置，同样将新配置文件命名为 *Projectile*，各个对象通道的碰撞预设为`Block`，除 Pawn 通道设置为 `Overlap`，然后点击接受完成设置。此碰撞配置文件将发射物设定为将被 WorldStatic, WorldDynamic, Pawn, PhysicsBody, Vehicle, Destructible 等通道的对象阻挡。但是，设定发射物与 Pawn 重叠，触发 Overlap 事件。

在构造函数中，在后面添加以下代码，使用*SetCollisionProfileName* 方法加载碰撞配置文件。

```C++
// 用球体进行简单的碰撞展示。
CollisionComponent = CreateDefaultSubobject<USphereComponent>(TEXT("SphereComponent"));
// 将球体的碰撞配置文件名称设置为"Projectile"。
CollisionComponent->BodyInstance.SetCollisionProfileName(TEXT("Projectile"));
// 组件击中某物时调用的事件。
CollisionComponent->OnComponentHit.AddDynamic(this, &AFPSProjectile::OnHit);
```

对于测试关卡和检视场景：

- 默认的，在编辑器中的摄像机是一个 Pawn。因此可以被设置为阻挡 Pawn 的任何对象阻挡。
- 在编辑器中模拟摄像机在处理任何事务之前不是 Pawn，它可以自由穿过任何对象，不会造成任何碰撞或重叠事件。

用一个 PhysicsBody 球体，和一个 WorldDynamic 箱体模拟墙壁来做说明，通过更改如下碰撞设置，可以得出多种行为：

- 碰撞 Collision
- 碰撞和模拟生成命中事件 Generates Hit Events
- 重叠和忽略 Overlap & Ignore
- 重叠和生成重叠事件 Overlap & Generates Overlap Events

与可以随时触发的碰撞不同，重叠事件是 ReceiveBeginOverlap 和 ReceiveEndOverlap，仅在特定情况下触发。

为了使重叠发生，两个 Actor 都需要启用 Generate Overlap Events，这是为效果考虑。如果球体和箱体都希望在我们移动球体或箱体时发生重叠，则执行重叠查询以确认是否需要触发任何事件。

如果箱体不希望在移动时发生重叠，则不执行重叠查询。但现在，可以与球体重叠，因此球体需要 tick 事件，并逐帧检查是否有重叠以防有对象与它们相撞。

- PhysicsBody 球体设置对 WorldDynamic Actor（比如墙壁）产生 `Overlap`，它会在发生重叠时针对自己生成事件。
- WorldDynamic 墙壁设置对 PhysicsBody Actor（这是球体的类型）产生 `Block`。

如上所述，两个 Actor 都需要设置为 `Block` 彼此相应的对象类型才会有碰撞、阻挡。但是，这里会发生 `Overlap`，并触发球体和箱体的事件。

两个物理形体的对象类型 Object Type 和碰撞响应 Collision Responses 都很重要，它们决定了交互事件会不会发生。

以下是物理形体 *BodyInstance* 上的 Collision 属性：

Object Type 设置当前对象通道类型：

- `WorldStatic` 应用于不移动的 Actor，静态网格体是最容易理解的 WorldStatic Actor。
- `WorldDynamic` 用于受到 kinematic 动画或代码的影响而移动的 Actor 类型。电梯和门是 WorldDynamic Actor 的典型例子。
- `Pawn` 任何由玩家控制的实体的对象类型，玩家角色是 Pawn Actor 的典型例子。
- `PhysicsBody` 由于物理模拟而移动的任意 Actor。
- `Vehicle` 此为载具的默认类型。
- `Destructible` 此为可破坏物网格体的默认类型。

Collision Responses 碰撞响应设置需要对什么类型的对象的响应方式，可以创建多个响应配置，在 Channel 中填写要响应的 Object Type：

- Ignore 无论另一个物理形体的 Collision Responses 如何设置，此物理形体都将忽略交互事件。
- Overlap 此物理形体将发生重叠事件，如果另一个是设置为 `Overlap` 或 `Block` 的物理形体。
- Block 此物理形体将发生撞击事件，如果另一个是设置为 `Block` 的物理形体。

Object Responses 设置对什么对象类型进行响应。

Collision Enabled 碰撞启用方式：

- NoCollision 无碰撞响应
- Query Only (No Physics Collision) 只会触发 Overlap 事件，无刚体碰撞响应
- Physics Only (No Query Collision) 只有刚体碰撞响应，不触发 Overlap 事件
- Collision Enabled (Query and Physics ) 刚体碰撞响应和 Overlap 事件都可以

Collision Presets 碰撞预设值，也可以在直接填写到 Collision Profile Name 中：

- Default 使用已在静态网格体编辑器中应用给静态网格体的设置。
- Custom... 为此实例设置所有自定义碰撞设置。
- NoCollision 在默认情况下 `WorldStatic` 会阻挡所有 Actor 对象。。
- BlockAll 在默认情况下 `WorldStatic` 会阻挡所有 Actor 对象。
- OverlapAll 在默认情况下 `WorldStatic` 与所有 Actor 对象重叠。
- BlockAllDynamic 在默认情况下 `WorldDynamic` 阻挡所有 Actor 对象。
- OverlapAllDynamic 在默认情况下 `WorldDynamic` 与所有 Actor 对象重叠。
- IngoreOnlyPawn `WorldDynamic` 忽略 Pawn 和载具对象。
- OverlapOnlyPawn `WorldDynamic` 与 Pawn、摄像机和载具对象重叠。
- Pawn 可用于任意可操作角色或 AI 的胶囊体，对大多数对象响应 `Block`。
- Spectator 忽略所有其他 Actor 的 Pawn 对象，对 `WorldStatic` 响应以 `Block`。
- CharacterMesh 用于角色网格体的 Pawn 对象，`Block` 大多数其它对象。
- PhysicsActor 模拟 Actor，`Block` 大多数其它对象。
- Destructible 可破坏物 Actor，`Block` 大多数其它对象。
- InvisibleWall 不可见的 `WorldStatic` 对象，`Block` 大多数其它对象。
- InvisibleWallDynamic 不可见的 `WorldStatic` 对象。
- Trigger 用于触发器的 `WorldStatic` 对象，触发 Overlap 事件。
- Ragdoll 模拟骨架网格体组件，类似 CharacterMesh。
- Vehicle 阻挡载具、`WorldStatic` 和 `WorldStatic` 的载具对象，`Block` 大多数其它对象。
- UI 在默认情况下与所有 Actor 重叠的 `WorldStatic` 对象，类似 Trigger。

在编辑 StaticMesh 时，可以使用工具栏 Collision -> Auto Convex Collision 自动凸包碰撞工具创建一个轮廓，或者移除碰撞轮廓 Remove Collision。在 Viewport 中使用菜单 Show -> Collision 显示碰撞轮廓，快捷键  Alt + C。

另外，除了一些简单的碰撞检测轮廓，还有一系列 K-DOP 简单碰撞生成器，这是包围体的一种，是 K 离散导向多面体（K discrete oriented polytope） 的缩写，K 是轴对齐平面的数字。它抓取轴对齐的平面，将其尽力推向离网格体最近的位置。结果形态用作碰撞凸包。在 Static Mesh Editor 中，K 可为：

- 10 - 方块有 4 条边形成斜角 - 可选择 X、Y 或 Z 轴对齐的边。
- 18 - 方块中所有边均形成斜角。
- 26 - 方块中所有边和角均形成斜角。

在游戏中，有几个控制台命令可用于获得关于游戏中碰撞的信息，运行游戏，按反勾号/重音符键即 ~ 所在按键，调出控制台输入框，输入下列命令：

- show COLLISION - 此命令将画出关卡中使用的所有碰撞模型和阻挡体积。
- stat game - 此命令会向你显示关于各种不同碰撞所用时间的有用统计信息。

OnComponentBeginOverlap 事件节点各输出端口用途如下：

- OverlappedComponent 当前触发事件的组件；
- OtherActor 与当前组件发生碰撞的 Actor 对象；
- OtherComponent 与当前组件发生碰撞的组件；
- OtherBodyIndex 
- bFromSweep 
- SweepResult 返回一个 Hit Result 结构体；


# 🌟 Blueprints 蓝图
- 蓝图可视化脚本 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/
- 使用蓝图编写编辑器脚本 https://docs.unrealengine.com/4.27/zh-CN/ProductionPipelines/ScriptingAndAutomation/Blueprints/
- C++ 代码与蓝图 https://docs.unrealengine.com/4.27/-CN/ProgrammingAndScripting/ClassCreation/CodeAndBlueprints/
- C++ 与蓝图性能平衡 https://docs.unrealengine.com/4.27/zh-CN/Resources/SampleGames/ARPG/BalancingBlueprintAndCPP/
- Gameplay 架构 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/GameplayArchitecture/Classes/
- Creating Blueprints and Editor UI https://learn.unrealengine.com/course/2436619/module/5328666
- 蓝图可视化脚本中的变量和执行流程 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/Scripting/
- 向蓝图公开游戏进程元素 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/TechnicalGuide/ExtendingBlueprints/
- 类创建基础知识 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ClassCreation/
- 蓝图接口快速入门 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ActorCommunication/InterfaceQuickStart/
- Math Expression https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/MathNode/
- 蓝图流程控制节点 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/FlowControl/
- 节点的连接操作 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/BP_HowTo/ConnectingNodes/
- 蓝图操作速查 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/CheatSheet/

虚幻引擎的可视化脚本编程系统，即蓝图功能是一类完整的游戏性脚本系统，此系统的基础概念是使用基于节点的界面在虚幻编辑器中创建游戏性元素。与诸多常用脚本语言相同，其用于定于引擎中的对象驱动（OO）类或对象。使用UE4后便知，使用蓝图所定义的对象通常被直接称为 Blueprint。

蓝图可以使用直观、基于节点的方式创建逻辑，或者设置一些变量数据。通过可视化节点的定义和连接就可以创建自定义的Actor、Event、函数等等，快速的做 Gameplay 迭代，不需要写任何代码。

简单地讲，蓝图是创建新的 UClasses 的一种方法，这种方法不需要书写或编译任何代码。创建一个蓝图时，可以选择继承原生 C++ 类或者继承另一个蓝图类。然后，您可以添加、排列及自定义组件，使用可视化的脚本语言实现自定义的逻辑，对事件及交互做出反应，定义自定义变量，处理输入， 及创建一种完全自定义的对象类型。

每个蓝图都具有一个 `Construction Script` 图表，它的作用等价 C++ 中的构造函数，当创建蓝图对象实例时会运行它。该脚本可以动态地基于多个因素构建 Actor 实例，比如，一个可以自动调整大小来填充建筑物间空隙的篱笆。从这个角度来说，蓝图也可以看成是一个非常强大的预制系统。

掌握 Gameplay 构架中的各种类的 C++ 功能编程，将可以更好地帮助使用蓝图编辑器进行可视化脚本开发。

事件是从游戏性代码中调用的节点， 在事件图表（EventGraph） 中开始执行个体网络。在蓝图中，要执行的第一个节点是一个事件，然后是从左至右通过白色执行线的执行流。游戏运行时，您可以在编辑器中可视化执行流，这有助于调试。数据还流经采用匹配变量类型的彩色导线。当节点执行时，将对输入引脚进行评估，反向从右至左跟踪数据线，直到计算出最终结果并将其提供给节点。

带有执行引脚（非纯节点）的节点在执行时存储其输出引脚的值，而不带执行引脚（纯节点）的节点则在每次与其输出相连的节点执行时重新计算其输出。

蓝图可以含有脚本代码、组件、或只有数据，仅包含数据的蓝图 Data-Only Blueprint 是指仅包含代码(以节点图表的形式)、变量及从其父类继承的组件
的类蓝图。仅包含数据的蓝图允许您调整及修改继承的属性，但是不能添加新元素。 从本质上讲，这些蓝图是原型的替代物，设计人员可以使用它们来调整属性或者设置具有变种的项目。

Data-Only Blueprints 在合并的属性编辑器中进行编辑，但是也可以转换为完整的蓝图来添加代码、变量或组件。

蓝图有很多功能，包括数据资源配置、创建 UI 界面等等，可以基于节点和连线使用图形化的方式创建逻辑流程，不用写 C++ 代码。这极大的提升了项目的迭代速度，而且能解放程序员生产力。而蓝图的图形化变成功能主要就是由图和节点这两个概念实现的。

蓝图作为脚本语言的一种可视化编程方法，就其本身而言，此系统与标准书面脚本语言有许多细微差别，例如数据类型化变量、数组、结构体等等。执行流的工作方式与在典型脚本语言中一样，但蓝图要求每个节点的显式线性执行。

添加节点到蓝图的方法：

- 从 Components 窗口将节点拖放到图表上。
- 从 My Blueprint 窗口将节点拖放到图表上。
- 多数情况下，在蓝图图表中通过右键快捷菜单可以放置任何节点。
- 也可使用快捷键替代和使用节点，提升工作效率。

窗口右上角有一个名为 Context Sensitive 的选项，它为默认开启，单击右键并搜索节点时，会出现根据上下文筛选后的节点列表。

为了更有条理的组织节点，可以选择节点，使用右键菜单 Create Comment from Select 或添加 Comment Box 节点，或者使用快捷键 C 将其它多个节点组织起来，相当一个分组，移动时也可以一起。

Note：对于一个变量，可以放置 Getter 或 Setter 节点，分别用于读、写操作。左键拖动变量到蓝图中 Node 的接受 input / output 端口，也可以自动变成变量的 GET / SET。

UE4 蓝图中的快捷键默认配置：

- Alt + 鼠标左键拖动 My Blueprint 一个变量到蓝图中，就是放置 Setter 节点；
- Ctrl + 左键拖动变量到蓝图中，就是放置 Getter 节点；
- Ctrl + W 复制蓝图中选中的节点；
- Ctrl + Shift + F 在所有蓝图中搜索；
- Ctrl + F 当前蓝图中搜索（Find）；
- Alt + 单击端口断开所有连接；
- Ctrl + 鼠标左键拖拽到引脚移动所有连接；
- 按住 S 键在蓝图中点击鼠标左键快速生成 Sequence 节点；
- 按住 D 键在蓝图中点击鼠标左键快速生成 Delay 节点；
- 按住 F 键在蓝图中点击鼠标左键快速生成 ForEachLoop 节点；
- 按住 G 键在蓝图中点击鼠标左键快速生成 Gate 节点；
- 按住 B 键在蓝图中点击鼠标左键快速生成 Branch 节点；
- 按住 N 键在蓝图中点击鼠标左键快速生成 DoN 节点；
- 按住 M 键在蓝图中点击鼠标左键快速生成 MultiGate 节点；
- 按住 O 键在蓝图中点击鼠标左键快速生成 DoOnce 节点；
- 按住 P 键在蓝图中点击鼠标左键快速生成 Add Selected Actor Reference 节点；
- 按住 R 键在蓝图中点击鼠标左键快速生成 ReceiveBeginPlay 即 Event BeginPlay 节点；

Gate 节点用来开启或关闭执行流，如果当前执行流状态是 Open 则能正常执行，如果当前状态是 Close 则阻断当前执行。Toggle 是用来反转 Open 和 Close 状态的，Start Closed 标记门的起始状态，若勾选了则标记起始状态为 Closed。

Gate 节点只有一个执行出口 Exit，MultiGate 则有多个执行出口。可以设置第一个出口的索引是哪个，也可以指定是否循环，如果不循环所有出口都执行一遍后将不再执行，除非 Reset，还可以指定这些出口之间是顺序执行还是随机执行，Sequence 节点一般用于顺序执行一系列事情。

蓝图常用操作备忘：

- *Mod* 求余操作，需要从输出数值节点引出，不能直接通过 % 搜索到；
- *Make Literal* 各种常量节点；
- *Make Array* 数组节点；
- *Operators* 各种算术运算和关系运算符；
- *Select* 多值选择性输出节点；
- *Switch* 多分支选择执行节点；
- *Sequence* 逐次分支选择执行；
- *Math Expression* 添加数学表达式，命名为 `(1+x)*sin(myVar)-2.4/rand()` 即可创建数学算式，而不用独个节点设置。
- 字符串处理使用 Append 或 Join 函数，也可以使用 Format Text，格式字符串设置参考 *Hello {name}!*。
- *Teleport* 是实现 UE4 VR 瞬移的功能。
- *For Each Loop* 枚举数组。
- 除了使用 DoN 循环，For Loop 或 While Loop 这些循环节点，还可以利用 Custom Event 实现循环。
- 使用 *Reroute* 节点来固定引线，使用图表更整洁。
- 蓝图节点的数据类型显示为 Wildcads 表示会自动在连接时确定数据类型，在断开连接时可以手动改变。

以下步骤，示范如使用蓝图来创建接口及类对象，而不用编写 C++ 代码，实现功能：按下B键，Dog、Cat 打印相应的字符到屏幕。

- 在 UE4 主界面，在 Content Browser 中一目录下新建蓝图接口 Blueprint -> Blueprint Interface，改名为 BPI_Barking。
- 同样，新建蓝图类 Blueprint -> Blueprint Class，分别创建 Dog 和 Cat 类。
- 双击打开蓝图接口，新建一个接口函数，点击 Add New 即可，函数名为 barking。
- 然后，在添加过该接口的类中写实现，并在别的地方调用这个函数。
- 打开新建的 Dog 或 Cat 蓝图类，指定上面创建的蓝图接口 `Class Setting -> Interface -> BPI_Barking`。
- 指定蓝图类实现的接口后，通过 My Blueprint -> Interfaces 列表可以看到已经添加了相应的接口。
- 使用右键菜单 `My Blueprint -> Interfaces -> Barking -> Implement event` 自动在 EventGraph 创建一个 Event Barking 节点。
- 实现 barking 只需要在输出端接上一个 Print String 节点用于打印测试内容，In String 节点不接输入，填定任意内容即可，如 Hello Dog!。

设置好蓝图类和接口的实现，接着是使用它们，在关卡蓝图中调用已实现的接口函数：

- 使用 Editor 工具栏打开当前关卡蓝图，Blueprints -> Open Level Blueprint，添加 Input -> KeyBoard Events 选择一个按键事件，如 B。
- 将键盘事件的 Pressed 端口连接到 Barking BP 接口的 barking 方法。
- 另外，barking 方法还有一个 Target 端口，这个表示调用这个方法的对象，需要按以下操作获取 Dog 或 Cat 的对象引用。
- 只需要先将 Dog 或 Cat 添加到关卡上，即创建 Actor 对象，保持选中状态，然后在关卡蓝图中使用右键 Create a Reference to Dog 获取引用，并连接到 Target 端口。
- 模拟运行，按下 B，得到相应的内容输出。类似地，使用 C 按键来调用 Cat::barking 而不使用接口方法节点。

蓝图接口可以进行一对多、甚至多对多的广播，一处调用，多处响应。

如果使用接口节点来调用 Barking 函数，可以使用 Select 节点来做 Dog、Cat 的选择分支，只需定义一个变量做为选择的序号。连接节点时需要注意，先连接 Select 的输出端到接口方法的 Target 端口，这样就可以确定 Select 节点的输入也为对象引用，这里再接入 Dog 和 Cat 就不会有问题。如果先将 Dog 或 Cat 接入 Select 节点，那么两个输入端口的类型就确定为 Dog 或 Cat 的对象引用，只能接入一个具体对象引用。所以，需要额外设置 Change Pin Type -> Object 即 UObject 对象引用。

直接将蓝图类从内容浏览器拖到蓝图编辑器，会自动创建 AddChildActorComponent 函数调用节点，这表示将蓝图类当作 ChildActor 组件添加到关卡场景中。因此，要从这个节点的返回值获取原来的蓝图类，就需要执行 ChildActorComponent 组件的 GetChildActor 方法。

蓝图支持 Macros、Functions 和 Events 还有变量，以下是这几个方式的功能细节对比：

    |                    |   Macros   | Functions | Events |
    |--------------------|------------|-----------|--------|
    | Input              | Yes        | Yes       | Yes    |
    | Output             | Yes        | Yes       | No     |
    | Exec I/O           | Any number | One       | One    |
    | Call by another BP | No         | Yes       | Yes    |
    | Delay              | Yes        | No        | Yes    |
    | Timeline           | No         | No        | Yes    |

另外，蓝图的 Event Dispatchers 是基于委托实现的，可以通过学习 C++ 中委托使用来理解事件分发器的使用。

非程序员完全可以使用蓝图的原因是蓝图节点 在虚拟机（VM）中运行，让它们能够调用 C++ 函数。但弊端是，依赖 VM 将蓝图转换为原生 C++ 代码需要付出一些代价， 将蓝图代码转换为原生 C++ 函数可能会拖慢每一帧的游戏性能。

尽管，蓝图功能非常强大，可以进行项目的快速迭代开发，但是对于需要大量运算的程序，出于性能考虑，蓝图并不是一个好的选择。为了降低项目运行时版本中的虚拟机开销，使用 C++ 实现更恰当。

在 UE 4 中提个的蓝图原生化工具 Nativizing Blueprints 可以实现将蓝图转换为 C++ 实现，虽然你能够用文本编辑器阅读转换后的 C++ 代码，但你会注意到，该代码并没有设计为可重用（或者生成为"读者友好型"）。注意，蓝图原生化在新版本 UE5EA 中被移除。

你可以在工程目录 \Intermediate\Plugins\NativizedAssets 中找到蓝图的原生化代码。

首次创建项目时，蓝图原生化默认是禁用的。启用蓝图原生化设置 Project Settings -> Packaging -> Blueprint ->Blueprint Nativization Method：

- Disabled 默认值，不启用蓝图原生化；
- Inclusive 启用原生化，然后将蓝图设置原生化，打开蓝图编辑器操作，Class Settings -> Details -> Packaging -> Nativize。
- Exclusive 启用原生化，排他蓝图原生化方法烘焙和打包项目，向硬件资源有限的设备交付大项目时使用；

保存并编译蓝图后，就可以看到工程设置中的 List of Blueprint assets to Nativize 列表中已经包含指定原生化的蓝图。注意，所有受支持的依赖项也会标记为需要原生化，包括它实现的接口也会自动设为原生化。

选择 包含（Inclusive） 原生化方法后，在打包过程中注意务必要注意的是， 虚幻自动化工具（UAT）将对以下支持的蓝图资源进行原生化：

- 蓝图类
- 蓝图函数库
- 蓝图接口
- 动画蓝图
- 小部件蓝图
- 用户定义的结构
- 用户定义的枚举值

目前，关卡蓝图和蓝图宏不受蓝图原生化工具的支持，不会转换为原生C++代码。

选择排他 Exclusive 蓝图原生化方法一些优势：

- 限制可执行文件的最终大小。
- 有效防止转换未使用蓝图资源。
- 能够显式选择要转换的蓝图资源。

一般来说，如果你的蓝图较为占用计算资源，则建议选择排他（Exclusive）蓝图原生化方法，包括（但不限于）：

- 有大量节点的蓝图。
- 需要优化循环的蓝图。
- 执行复杂数学运算的蓝图。


## ⚡ Class Creation - LightSwitch
- Class 创建方法 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ClassCreation/

蓝图和 C++ 都可以创建类，并且，它们可以搭配使用，使用蓝图可以扩展 C++ 类并修改其代码。

这些示例展示了：

- 如何仅使用蓝图创建光源开关类*LightSwitch_BPOnly*；
- 仅使用 C++ 代码创建光源开关类*LightSwitchCodeOnly*；
- 以及同时使用 C++ 代码和蓝图创建新光源开关类*LightSwitchBoth*，并且在蓝图中覆盖 C++ 的代码逻辑。

目标是分别使用这三种工作流程创建具有相同属性和行为的新类， 然后将每个新类的一个实例添加到关卡中，这样关卡中就具有三个新的光源开关 Actor。

它们各自包含一个 *PointLightComponent* 根组件，还有一个子组件 *SphereComponent*。每个光源开关类都还包含一个名称为*DesiredIntensity*的变量，用于设置光线的强度。最后，这些类的默认行为是当玩家进入或离开*SphereComponent*时，*PointLightComponent*的可视性会切换。


## ⚡ LightSwitch BlueprintOnly
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ClassCreation/BlueprintOnly/

使用蓝图可视化脚本系统设置新类，创建新蓝图类后，你可以添加组件，借助可视化脚本设置函数和其他游戏性或设计行为，及设置类变量的默认值。仅使用蓝图设置的示范类名为 *LightSwitch_BPOnly*。

首先，要创建蓝图类并进行设置。

在内容浏览器中，使用右键菜单或 + ADD 按钮，执行 Blueprint -> Blueprint Class 创建*LightSwitch_BPOnly*类，并选择 Actor 作为父类。

向蓝图中添加组件的方法有两种：

- 静态方式：在蓝图编辑器的*Components*选项卡中添加；
- 动态方式：在图表编辑器中通过可视化脚本添加。

由于*LightSwitch_BPOnly*类将始终具有`PointLightComponent`和`SphereComponent`，我们在 Components 选项卡中静态地添加了这些组件。

使用 Components 选项卡添加`PointLightComponent`，将其命名为`PointLight1`，作为根组件。然后添加`SphereComponent`，将其命名为`Sphere1`，附着在`PointLightComponent`上。 在蓝图编辑器中添加到类上的组件具有淡蓝色图标，而从父类继承的组件则具有深蓝色图标。在新版本编辑器中，使用 (Inherited) 后缀表示继承自父类的属性。

在蓝图编辑器的 My Blueprint 选项卡中，你可以添加新的变量、 函数和宏。你还可以访问蓝图类中包含的所有图表 。在图表中，节点通过引线连接在一起，以创建设计时功能和游戏性功能，它们可由类变量、游戏性事件、 甚至*Actor*的周围环境驱动。

使用 My Blueprint 选项卡将浮点变量 *DesiredIntensity* 添加到*LightSwitch_BPOnly*类。My Blueprint 选项卡也会显示在 Components 窗口中添加的组件，这样，需要时就在图表中访问它们。

我们使用了两个图表来设置*LightSwitch_BPOnly*类行为。第一个图表是构造脚本函数图表*Construction Script*，它包含 构造脚本函数输入节点。 当某个 Actor 被添加到关卡时，或某个现有 Actor 在关卡中被移动时，此事件将执行。在 *LightSwitch_BPOnly* 类中，构造脚本事件与 *Set Intensity* 节点相连接，这样，当该 Actor 被添加到关卡中或在关卡中被移动时，`PointLight1` 的强度会被设置为 *DesiredIntensity* 的数值。

在 *LightSwitch_BPOnly* 类中设置的另一个图表是事件图表*EventGraph*。在事件图表中，执行从 *OnComponentBeginOverlap* 和 *OnComponentEndOverlap* 等事件开始。这些事件在关卡中的某些其他 Actor 与`SphereComponent`重叠或离开它时执行。两个事件都与 切换可视性（Toggle Visibility）节点相连接，这样，当这些事件执行时，`PointLightComponent`的可视性将被切换。

如果找不到 Toggle Visibility，在右键单击 菜单中取消选中 Context Sensitive，或尝试在 Find a Node 菜单中搜索它。你也可以通过从点光源变量节点 拖出引线，然后搜索"Toggle Visibility"的方法取得相同的结果。

如果找不到`Sphere1`的*OnComponentEndOverlap*，确保选中该球体变量，然后使用位于 Event -> Add Event 中的节点， 或者从右键菜单中依次转至 Add Event -> Collision -> OnComponentBeginOverlap / OnComponentEndOverlap。新版编辑器中，可以直接在 Components 面板上，使用组件的右键菜单添加事件节点。

在 *DesiredIntensity* 变量的变量设置中，它被设置为 *Instance Editable*，因此在蓝图编辑器的 Class Defaults 中它可见并且可被编辑，注意要先编译蓝图以更新状态。这也意味着可针对该类的每个实例修改该变量，以使每个 Actor 都可以拥有其自己的 *DesiredIntensity*。

可以通过两种方法使用其他蓝图类扩展蓝图类，使用开发者工具 Class Viewer 中类旁的下拉按钮创建新蓝图，或者，在内容浏览器中，使用蓝图的右键菜单，Create New Blueprint Based on This。

到此，所有操作都是通过蓝图编辑器完成的，只是对各种节点的连接就完成了功能逻辑。



## ⚡ LightSwitch C++ Code Only
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ClassCreation/CodeOnly

使用 C++ 类向导创建 *LightSwitchCodeOnly* 类，且选择 Actor 作为父类，因为这些类的主要要求是它们可被放置在关卡中。

头文件 *LightSwitchCodeOnly.h* 中包含了该类的声明。使用 C++ 类向导创建的类声明自动通过 `UCLASS()` 宏进行处理，使得引擎意识到这个类的存在，并且还可以同键盘修饰符结合使用来在引擎中设置该类的行为。

类声明包含很多变量 和/或 函数声明。 这些可以通过 UPROPERTY() 和 UFUNCTION() 宏分别进行处理，这些宏的功能和`UCLASS()` 宏类似。
组件也和`UPROPERTY()`宏一起设置。

声明*PointLightComponent* 和 *SphereComponent*，二者都设置为 *VisibleAnywhere*，这意味着可以在 Actor 编辑界面的 Details 选卡中看到它们的属性。

另外，由于引擎版本的升级，需要引入不同的头文件。而*bVisible* 改变为私有属性，需要通过*SetVisibleFlag*方法设置。

```C++
// #include "CoreMinimal.h"
#include "Components/PointLightComponent.h"
#include "Components/SphereComponent.h"

// PointLight1->bVisible = true;
PointLight1->SetVisibleFlag(true);
```

声明 `OnOverlapBegin` 和`OnOverlapEnd`函数, 当另一个 Actor 进入或离开 *SphereComponent* 时将调用该函数。当一个 Actor 和 SphereComponent 相重叠或者离开重叠区时，指定`OnOverlap`函数作为委托进行调用。进入或离开对应的委托是*OnComponentBeginOverlap*和*OnComponentEndOverlap*，调用*AddDynamic*表示注册一个 *OverlapAllDynamic* 配置的事件响应方式，即在默认情况下 `WorldDynamic` 与所有 Actor 对象重叠时都会执行重叠事件。重叠事件的触发条件参考 Collision 碰撞检测机制。

一个更好的改进是，增加一个开关属性，通过编辑器来指定这个开关，并且开关可以放置在场景的任何地址，触发开关才执行开灯或关灯。

声明 *DesiredIntensity* 变量，并使用 `VisibleAnywhere` 修饰符设置该属性为在任何地方都可见。 此属性将显示在 *LightSwitchCodeOnly* Actor的 Details（详细信息） 选卡中的 Switch Variables（切换变量） 类目中。 对于不是子对象的变量，比如这个浮点值，`VisibleAnywhere` 修饰符将使得该变量显示在详细信息选卡中。 你还可以使用 `EditAnywhere`修饰符，但是由于此变量仅在把 Actor 添加到关卡中时使用，所以不需要设置成为可编辑的。

源文件中定义类声明过的函数，比如，LightSwitchCodeOnly.cpp 中有 `OnOverlapBegin` 和 `OnOverlapEnd`函数的实现，该函数通过调用`ToggleLight`来切换*PointLightComponent*的可见性，通常光源的`ToggleVisibility`方法。

如果这是你添加到空白项目的第一个代码类，你需要关闭虚幻编辑器，在 Visual Studio 或 Xcode 中编译项目，然后打开虚幻编辑器并重新打开项目，以确保创建了游戏模块并正确载入。 同时，需要注意的一点是，要确保 Build Configuration 和你打开该项目使用的虚幻编辑器可执行文件的版本一致。

如果你正在添加代码到现存的 C++ 项目，你可以使用 Hot Reload 功能来编译虚幻编辑器中的新代码。

C++ 类既可以通过 C++ 类进行扩展也可以通过类蓝图进行扩展。在 C++ 类向导中及在类蓝图创建过程中的 Pick Parent Class 窗口的 Custom Classes 部分中选中 Show All Classes 复选框，便可以显示这两种扩展选项。

*LightSwitchCodeOnly*位于类查看器中，可以从那里将其拖拽到关卡中。

最终的 C++ 实现的 *LightSwitchCodeOnly* 文件如下所示，替换`[PROJECTNAME]`为相应的工程名：

```C++,
    // LightSwitchCodeOnly.h
    // Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

    #pragma once

    #include "GameFramework/Actor.h"
    #include "LightSwitchCodeOnly.generated.h"

    /**
     * 
     */
    UCLASS()
    class [PROJECTNAME]_API ALightSwitchCodeOnly : public AActor
    {
        GENERATED_BODY()
        public:
        /** 点光源组件 */
        UPROPERTY(VisibleAnywhere, Category = "Switch Components")
        class UPointLightComponent* PointLight1;

        /** 球体组件 */
        UPROPERTY(VisibleAnywhere, Category = "Switch Components")
        class USphereComponent* Sphere1;

        ALightSwitchCodeOnly();

        /** 当某对象进入球体组件时调用 */
        UFUNCTION()
        void OnOverlapBegin(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

        /** 当某对象离开球体组件时调用 */
        UFUNCTION()
        void OnOverlapEnd(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

        /** 切换光照组件的可见性*/
        UFUNCTION()
        void ToggleLight();

        /** 该光照的所需强度 */
        UPROPERTY(VisibleAnywhere, Category = "Switch Variables")
        float DesiredIntensity;

    };


    // LightSwitchCodeOnly.cpp
    // Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

    #include "BasicClasses.h"
    #include "LightSwitchCodeOnly.h"

    ALightSwitchCodeOnly::ALightSwitchCodeOnly()
    {
        DesiredIntensity = 3000.0f;

        PointLight1 = CreateDefaultSubobject<UPointLightComponent>(TEXT("PointLight1"));
        PointLight1->Intensity = DesiredIntensity;
        PointLight1->bVisible = true;
        RootComponent = PointLight1;

        Sphere1 = CreateDefaultSubobject<USphereComponent>(TEXT("Sphere1"));
        Sphere1->InitSphereRadius(250.0f);
        Sphere1->SetupAttachment(RootComponent);

        Sphere1->OnComponentBeginOverlap.AddDynamic(this, &ALightSwitchCodeOnly::OnOverlapBegin);       // 当此组件与某对象重叠时，设置通知
        Sphere1->OnComponentEndOverlap.AddDynamic(this, &ALightSwitchCodeOnly::OnOverlapEnd);       // 当此组件与某对象重叠时，设置通知

    }

    void ALightSwitchCodeOnly::OnOverlapBegin(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
    {
        if (OtherActor && (OtherActor != this) && OtherComp)
        {
            ToggleLight();
        }
    }

    void ALightSwitchCodeOnly::OnOverlapEnd(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex)
    {
        if (OtherActor && (OtherActor != this) && OtherComp)
        {
            ToggleLight();
        }
    }

    void ALightSwitchCodeOnly::ToggleLight()
    {
        PointLight1->ToggleVisibility();
    }
```

## ⚡ LightSwitch with both C++ & Blueprint
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ClassCreation/CodeAndBlueprints

利用蓝图可延伸 C++，程序员可在代码中设置新的 Gameplay 类，关卡设计师可利用蓝图编译和修改此类代码。有些说明符可修改 C++ 类与蓝图系统的交互方式，其中一部分将在本范例中高亮显示。

类设置的第一部分：使用 C++ 类向导创建名为 *LightSwitchBoth* 的类，大多数代码与纯 C++ 实现的范例中的代码类似。可使用蓝图延展 *LightSwitchCodeOnly* 类，但是蓝图图表无法访问这个类中的组件、变量和函数。

此范例将讲解 *UPROPERTY()* 和 *UFUNCTION()* 说明符，通过在这两个说明符中指定说明符，就可使 C++ 实现的*LightSwitchBoth*作为派生自其中的蓝图模板进行运作。

首先参考纯 C++ 光源开关范例会十分有用，可了解设置标头文件和源文件来创建 LightSwitchComponent、SphereComponent、DesiredIntensity 变量和 OnOverlap 函数的方法。

此标头文件源自纯 C++ 光源开关范例，以添加以下功能：

- *PointLightComponent*和*SphereComponent*为`BlueprintReadOnly`，在蓝图编辑器的 My Blueprint 选项卡的 Switch Components 目录中显示但不可编辑，通过 *Category* 说明符产生目录。
- *DesiredIntensity*为`BlueprintReadWrite`，现为`EditAnywhere`，而非`VisibleAnywhere`。将在 My Blueprint 选项卡的 Switch Variables 目录中显示。

最重要的是*OnOverlapBegin*和*OnOverlapEnd*现为`BlueprintNativeEvents`，它告诉引擎这是一个可以由蓝图进行覆盖实现的类函数，即通过蓝图修改 C++ 代码。或者说引擎通过给 C++ 函数加后缀*_Implementation*，并且提供自己的生成代码来与蓝图实现的函数绑定。如果蓝图没有提供实现，那么引擎就调用 C++ 的加后缀版本函数，从而实现 C++ 代码的改写。将在 My Blueprint 选项卡的 Switch Functions 目录中显示。在编写代码时，只需要提供后缀*_Implementation*版本的函数实现即可，原型由引擎自动实现。

当然，C++ 实现的带后缀版本函数还可以提供给蓝图进行调用，只需要在说明 `UFUNCTION()` 时使用说明符`BlueprintCallable`。

`UCLASS()` 宏含有 `Blueprintable` 说明符。*LightSwitchBoth*可设为蓝图且直接继承自 Actor，而可设为蓝图说明符已继承，因此其在此情况下并非必需。

有了 `UPROPERTY()` 和 `UFUNCTION()` 宏中的附加说明符后，*LightSwitchBoth* 类的实现代码在后面一起展示。

编译此类后，就可以将其扩展为蓝图类。操作路径：Content Browser -> C++ Classes，使用类的右键菜单 Create Blueprint Class Base on LightSwitchBoth。在这种情况下，*LightSwitchBoth*被用作蓝图的父类，然后指定命名为 *LightSwitchBoth_BP*，并保存。

C++ 中添加的*PointLightComponent*和*SphereComponent*同样会在蓝图编辑器中的 *Components* 选项卡中显示。其图标为深蓝色，表明为继承自父类*LightSwitchBoth*的原生组件。而添加至 *LightSwitchBoth_BP* 蓝图的新组件将显示为淡蓝色图标。具体参考名称后面括号的提示，(Inherited) 表示继承自父类。

蓝图编辑器组件的 Components 和 My Blueprint 面板是蓝图编辑的核心，在面板内，可添加新的变量、函数和宏。同时可存取蓝图内的所有图表，图表中的节点互相连线，创建由类变量、Gameplay 事件，甚至是 Actor 周围环境，用它们来驱动设计时和 Gameplay 功能。

我的蓝图（My Blueprint）选项卡显示了添加到 C++ 类*LightSwitchBoth*中的*PointLightComponent*和*SphereComponent*。这是因为指定了 `BlueprintReadOnly` 说明符产生的。在 My Blueprint 中点击此类组件的节点并将其拖入图表，即可添加至图表，创建相应的蓝图节点。之后可将这些节点与修改变量可视度或光源颜色的变量相连接。*DesiredIntensity* 变量同样在 My Blueprint 选项卡中显示。其为变量而非组件，因此可使用 *BlueprintReadWrite* 说明符。这意味可创建节点在蓝图图表中同时获取和赋予 *DesiredIntensity* 的值。

默认不显示父*LightSwitchBoth*类的组件和变量。勾选 My Blueprint 选项卡设置选项 Show inherited variables 即可以显示继承自父类的变量。

有两种图表用于设置*LightSwitchBoth_BP*类在场景中被编辑时的行为：

- 第一种是构造脚本图表，`Construction Script`，含有专用的构造脚本事件。
- 第二种是使用 `EventGraph` 事件图表。

Actor 在关卡编辑器中移动或修改*DesiredIntensity*时，构造脚本会被执行。使用构造脚本意味着可轻易修改公开到蓝图的 Actor 变量，还能快速地看到这些变更的效果。若未设置构造脚本，新的 *LightSwitchBoth_BP* 实例将只使用*LightSwitchBoth*构造函数。

可以在构造函数中，添加一个调试语句，将消息打印在屏幕的左上角：

```C++
if (GEngine != nullptr)
{
    GEngine->AddOnScreenDebugMessage(-1, 5.0, FColor::Yellow, TEXT("LightSwitchBoth constructor..."));
}
```

打开 *LightSwitchBoth_BP* 类中的构造脚本事件图表，从 Components 将*PointLight1*拖到图表上创建一个节点，然后从输出端引出 Set Intensity 节点。因此将 Actor 添加至关卡中或在其中移动时，或是 *DesiredIntensity* 发生变更时，*PointLightComponent*的亮度将更新为相应的值。

比如，根据高度来改变灯光亮度：

- 创建 self 自身引用节点；
- 从 self 节点输出端引出 Get Actor Location 节点；
- 再从 ActorLocation 输出端引出 Break Vector 节点，将 Vector 分解成 X/Y/Z 三个分量；
- 并使用一个 Multiply 节点将 Z 乘上一个比例值，如 50，再将乘积输出连接到 Set Intensity 节点的强度输入端。

设置*LightSwitchBoth_BP*类的另一个图表是事件图表，*EventGraph* 中的执行将从各种事件开始。因此，C++ 定义的 *OnOverlap* 被调用时，对应蓝图中的*OnOverlap*事件将执行。在*LightSwitchBoth*源文件中设置委托，通过 *AddDynamic* 方法向 *OnComponentBeginOverlap* 和 *OnComponentEndOverlap*委托了两个事件处理函数，以便 Actor 进入或离开*SphereComponent*时激发*OnOverlap*事件。

设置蓝图节点以覆盖 C++ 代码逻辑：

- 点击 Functions 面板上的 Override 下拉列表，或者使用右键菜单，Override Functions -> On BeginOverlap Event 创建事件节点。
- 将*OnOverlap* 事件节点与 Set Light Color 节点相连，事件执行时设置*PointLightComponent*的光源颜色为随机颜色。
- 这个事件会覆盖 C++ 源文件中的 *OnOverlap_Implementation* 功能，将改写原来 C++ 中的*PointLightComponent*的逻辑。
- 创建一个 Make LinearColor 或 Color 节点，Alpha 设置为 1.0，RGB 三个分量使用 Random Float in Range 生成随机的 0.0 ~ 1.0 之间的值。使用 Ctrl + W 可以复制节点，使用 Home 聚集选中的节点。

*LightSwitchBoth*标头文件中的 *DesiredIntensity* 变量设为`EditAnywhere`，因此，在蓝图编辑器的默认项中可见。点击 Class Defaults  按钮在细节面板中显示类默认项后，即可对其进行编辑。这也意味着可依据类的各实例修改变量，以便各 Actor 可拥有各自的*DesiredIntensity*。同样，为了在构造脚本中读写，使用`BlueprintReadWrite`，因此对其进行更新也会导致构造脚本再次执行。

蓝图类也可以被延展成，使用类查看器(新版已经移除此界面)，Window -> Developer Tools -> Class Viewer，类旁的下拉按钮，或是使用蓝图类右键菜单 Create New Blueprint Based on This，新建蓝图。

蓝图类*LightSwitchBoth_BP*位于内容浏览器中，可将其从其中拖入关卡。该蓝图类同样位于类查看器中。

```C++，
    // LightSwitchBoth.h
    // 版权所有 1998-2018 Epic Games, Inc. 保留所有权利。

    #pragma once

    #include "GameFramework/Actor.h"
    #include "LightSwitchBoth.generated.h"

    /**
     * 纯C++代码实现的，并且可以被蓝图改写的（BlueprintNativeEvent）自动光源开关
     */
    UCLASS()
    class [PROJECTNAME]_API ALightSwitchBoth : public AActor
    {
        GENERATED_BODY()
        public:
        /** 点光源组件 */
        UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Switch Components")
        class UPointLightComponent* PointLight1;

        /** 球体组件 */
        UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Switch Components")
        class USphereComponent* Sphere1;

        ALightSwitchBoth();

        /** 当某对象进入球体组件时调用（BlueprintNativeEvent）可在蓝图中改写 */
        UFUNCTION(BlueprintNativeEvent, Category="Switch Functions")
        void OnOverlapBegin(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

        void OnOverlapBegin_Implementation(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

        /** 当某对象离开球体组件时调用（BlueprintNativeEvent）可在蓝图中改写 */
        UFUNCTION(BlueprintNativeEvent, Category="Switch Functions")
        void OnOverlapEnd(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

        void OnOverlapEnd_Implementation(class UPrimitiveComponent* OverlappedComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

        /** 切换光源组件的可视性*/
        UFUNCTION()
        void ToggleLight();

        /** 光源的理想强度 */
        UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Switch Variables")
        float DesiredIntensity;

    };


    // LightSwitchBoth.cpp
    // 版权所有 1998-2018 Epic Games, Inc. 保留所有权利。

    #include "BasicClasses.h"
    #include "LightSwitchBoth.h"

    ALightSwitchBoth::ALightSwitchBoth()
    {

        DesiredIntensity = 3000.0f;

        PointLight1 = CreateDefaultSubobject<UPointLightComponent>(TEXT("PointLight1"));
        PointLight1->Intensity = DesiredIntensity;
        PointLight1->bVisible = true;
        RootComponent = PointLight1;

        Sphere1 = CreateDefaultSubobject<USphereComponent>(this, TEXT("Sphere1"));
        Sphere1->InitSphereRadius(250.0f);
        Sphere1->SetupAttachment(RootComponent);

        // 设置 Overlaps 事件委托，添加相应的处理函数
        Sphere1->OnComponentBeginOverlap.AddDynamic(this, &ALightSwitchBoth::OnOverlapBegin);
        Sphere1->OnComponentEndOverlap.AddDynamic(this, &ALightSwitchBoth::OnOverlapEnd);
    }

    void ALightSwitchBoth::OnOverlapBegin_Implementation(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
    {
        if (OtherActor && (OtherActor != this) && OtherComp)
        {
            ToggleLight();
        }
    }

    void ALightSwitchBoth::OnOverlapEnd_Implementation(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex)
    {
        if (OtherActor && (OtherActor != this) && OtherComp)
        {
            ToggleLight();
        }
    }

    void ALightSwitchBoth::ToggleLight()
    {
        PointLight1->ToggleVisibility();
    }
```




## ⚡ Event Dispatchers
- Event Dispatchers https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/EventDispatcher/
- Actor 通信：EventDispatcher https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ActorCommunication/EventDispatcherQuickStart/
- Delegates 委托 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Delegates
- Blueprint Content Examples https://docs.unrealengine.com/4.27/zh-CN/Resources/ContentExamples/Blueprints

事件委托，是多播委托的一种特殊形式，它可以通过事件分发器（Event Dispatcher）将事件广播给绑定到事件委托的对象。

通过将一个或多个事件绑定到 Event Dispatcher，您可以在调用事件分发器时触发所有这些事件。这些事件可以绑定到蓝图类中，但事件分发器也允许在关卡蓝图中触发事件。

在 My Blueprint 面板中，单击事件分发器类别上的加号按钮创建事件分发器，该字段显示在 My Blueprint 选项卡中列表的末尾。选中事件分发器，可在 Details 面板中编辑其属性。主要是为事件分发器设置提示文本和类别，并可添加输入。

点击 Inputs 右侧加号向事件分发器添加事件分发器参数，这些参数会在执行委托时，传递给每一个事件处理方。这不仅允许蓝图类中的数据流，还允许蓝图类与关卡蓝图之间的数据流。

向事件分发程序添加输入的过程类似于向函数、自定义事件和宏添加输入和输出的工作流程。如果和另一个事件具有相同的输入，可以使用 Copy Signature from 来自动添加参数设置。

设置好事件参数后，就可以创建事件分发器的 Event 节点，通过将其右上角的红色方形引脚连接到 Bind Event 节点上的红色方形 Event 输入端上，从而完成事件绑定。

创建了事件分发器后，可以添加和种事件分发器提供的节点。虽然您可以双击打开 My Blueprint 列表中的事件分发器的图表，但是图表处于锁定状态，因此无法直接修改事件分发器。

可以拖动到 EventGraph，在引出菜单中提供了以下节点：

- Call 执行委托的节点，它将激活存储在事件列表中的所有事件。；
- Bind 绑定指定事件的节点；
- Unbind 执行指定事件解绑的节点；
- Unbind All 执行清除已绑定事件的节点；
- Assign 分配事件节点给 Bind Event 节点；
- Event 事件节点；

添加事件分发器的 Bind, Unbind 节点用来移除或添加到事件分发器的事件列表中。Assign 节点可以自动创建 Bind 节点和一个相应的 Event 节点，并连接在一起。

如果事件分发器未绑定任何事件，对其进行调用将没有任何效果。每个事件分发器均维护着一个事件列表，使用 Bind Event 节点可以向此列表中添加事件，使用 Unbind Event 节点可以从此列表中移除事件。 此外，通过 Unbind All Events 节点可以解除当前绑定到事件分发器上的所有事件。

Bind Event 节点可以执行多次，但每个事件只能绑定一次。此外，蓝图类和关卡蓝图中的事件都将添加到相同的事件列表中， 因此 Unbind All Events 节点将解除蓝图类和关卡蓝图中的事件绑定。

- 在蓝图类中执行 Unbind All Events 节点后，将针对此类的所有实例来解除蓝图类和关卡蓝图中的事件绑定。
- 在关卡蓝图中执行 Unbind All Events 节点后，只会针对 Target 解除蓝图类和关卡蓝图中的事件绑定。

Event, Bind, 和 Unbind 节点都可以添加到蓝图类和关卡蓝图中，除了事件节点，各个节点都有一个 Target 输入。

在蓝图类中，Target 自动设置为 Self，这意味着事件列表针对该蓝图类发生了更改，因此，该类的每个实例都会产生变化。

在关卡蓝图中，Target 必须关联到对关卡中的一个类实例的引用。这意味着，事件列表将仅针对该类的特定实例进行更改。

使用 Call 节点调用一个 Event Dispatcher，会触发绑定到该事件分发器的所有事件。对于每个事件分发器，可以应用多个 Call 节点，既可以在蓝图类中调用事件分发器也可以在关卡蓝图中进行调用。也可以通过右键菜单创建 Call 节点，在出现的列表中选择 Event Dispatcher 下的 Call 事件分发器名称。 

按 EventDispatcher Actor 通信示范，总结一下操作步骤：

- 创建一个 Actor 蓝图类 `BP_Boss`，用一个 Cube 也可以模拟，甚至不需要 Cube 也可以，关键是它要通过事件分发器广播事件；
- 打开 `BP_Boss` 蓝图编辑器，在 Viewport 中点击 Add Components 按钮，在 DefaultSceneRoot 下添加 Box Collision 用于碰撞检测，产生碰撞事件。
- 选中 Box Collision 组件，设置 Details -> Rendering -> Hidden in Game checkbox，取消选中以在游戏中显示碰撞盒体轮廓。
- 使用右键菜单为 Box Collision 添加 OnComponentBeginOverlap 事件处理节点，可以看到相应的节点被添加到 Event Graph。
- 在此蓝图类的 My Blueprint 面板中新增一个 Event Dispatcher 事件分发器，命名为 `OnBossDied`；
- 为 Event Dispatcher 创建 Call 节点执行委托的事件，只需要将 `OnBossDied` 拖动到 Event Graph，然后选择添加 Call 节点。
- 将前面创建的 Overlap 事件节点连接到 Call OnBossDied 节点，Target 默认为 Self 引用即可，即在 Overlap 事件触发时执行委托，执行所有绑定的事件。
- 将 `BP_Boss` 蓝图拖动到关卡中。

OnComponentBeginOverlap 是指两个对象边界碰撞时触发的事件，在同一个组件内部的对象也可以发生，比如当 `BP_Boss` 踩到雷时触发这个事件，然后就会执行委托在 Event Dispatcher 的事件。简化起见，`BP_Boss` 放置的 Box Collision 用来产生 Overlap 事件，将通过这个事件来执行委托，执行事件分发器上绑定的事件。 所以 `BP_Boss` 就相当于是广播站，现在还缺一些听众。

接下来，就要创建要响应 Boss Died 事件的的 Actor，可以创建任意多个，只要将事件处理函数绑定到 `BP_Boss` 对象的 `OnBossDied` 事件分发器上，这个过程相当于要报名收听广播。这样，在执行委托，绑定好的事件处理函数都可以响应 Boss Died 事件。

利用 Starter Content 内容包 Particles 子目录下的 `P_Explosion` 粒子系统可以创建爆炸效果，现成提供的蓝图类 `Blueprint_Effect_Explosion` 已经将粒子系统和声效组件组织在一起，可以直接使用：

- 通过内容浏览器操作，复制一份 `Blueprint_Effect_Explosion` 到指定目录，只需要拖动到指定目录即可。
- 在蓝图编辑器打开副本，在 Components 面板中选择 `P_Explosion` 组件，然后在禁用自动激活 Details -> Activation -> Auto Activate。
- 针对 Explosion Audio 组件重复执行以上步骤，禁用自动激活目的是，在适当时机通过组件的 Activate 函数来激活粒子和声音效果。
- 在面板的 Variable 部分创建一个变量，点击 + 按钮添加新变量，用来引用 `BP_Boss` 对象，命名为 `BossReference`。
- 在 Details 面板上修改 Variable Type，指定为 Object Type 下的 `BP_Boss`，即对象引用（Object Reference），并勾选 Instance Editable 复选框。
- 在 Event Graph 添加 Event BeginPlay 事件节点，在这个事件流中执行 `OnBossDied` 事件的绑定。
- 按下 Ctrl 将变量 `BossReference` 拖动到 Event Graph，即创建 Get BossReference。
- 再从 BossReference 节点中拖出一条引线，并选择 Assign On Boss Died，这样会自动创建一个新的自定义事件节点和 Bind Event 节点。
- 将前面的 Event BeginPlay 节点执行流连接到 Bind Event to Boss Died 节点，以实现自定义事件的绑定。
- 将 P_Explosion 和 Explosion Audio 组件拖动到 Event Graph，各自拖出一根引线，然后创建并连接到 Set Activate 节点，用于激活粒子动画和声音。
- 需要给 Activate 节点的 bNewActive 端口输入一个 True 值，可以使用 Make Literal Bool 节点创建布尔值，bReset 可以不管。
- 最后将自定义事件的执行流连接到 Set Activate 节点，这样就可以响应 `BP_Boss` 对象的 `OnBossDied` 事件分发器的执行。

最后，是设置关卡用于测试 Event Dispatcher 执行流程。

将 BP_Boss Actor 拖动到关卡中，再将任意数量的 Blueprint_Effect_Explosion 拖动到关卡中，并在 Details 面板设置 `BossReference` 变量引用 BP_Boss。

然后运行测试，通过操作角色触发 BP_Boss 对象的 Overlap 事件，让 BP_Boss 触发器模拟 Boss 在游戏中的死亡。

另外，如果在关卡中没有为 `BossReference` 指定引用，那么在执行 Bind Event 时就会产生异常，因为没有做空引用的判断。可以使用 Utilities 提供的 IsValid 操作来过滤，使用有问题标记的 IsValid 节点，它提供了 Is Valid 和 Is Not Valid 两个执行流。

使用 Equal/NotEqual 也可以判断是否空引用，只需要将 A 和 B 端口中的期中一个留空，但它们没有执行流端口，需要配合 Branch 节点使用。 



## ⚡ Timeline Node
- Timelines https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/Timelines
- Actor 通信：接口快速入门指南(Timeline) https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ActorCommunication/InterfaceQuickStart/
- Sequencer 多轨迹编辑器 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/Overview/

时间轴节点 Timeline Nodes 是蓝图中的特殊节点，允许你快速设计出基于时间的动画效果，并在时间轴上设置关键帧，触发 事件 ，或调整 浮点数、向量 或 颜色。

你可以直接在蓝图编辑器中编辑时间轴，只需在图表（Graph）选项卡中或我的蓝图（My Blueprint）选项卡中双击时间轴（Timeline）。它们主要用于处理一些简单的、非动画任务，例如开门、改变光源或在场景中对 Actor 执行其他基于相关的操作。它们类似于 Sequencer 关卡序列，因为它们都允许你在不同帧之间对浮点、向量、颜色的数值进行插值运算。

Timeline 用来实现一些和时间相联系的功能，例如在一段时间内完成一个动作，播放一段动画，也可倒放，或者只是单纯的延迟函数的执行时间，即调整事件的执行顺序。在 UE4 的蓝图自带函数中有一个很好用的函数可以完美地解决这些需求，它就是 Timeline。

添加 Timeline 节点，并双击打开编辑界面，就是一个曲线编辑器，左上角的按钮分别对应 4 种时间轨迹：

- Float Track 浮点型轨迹，用于调整数值的大小，比较常见的功能比如制作一个随时间变化的浮点数值曲线，例如一名角色在受伤状态下的生命值随曲线减少；
- Vector Track 向量轨迹，创建矢量曲线，分别可以设置 x，y，z 三个分量的对应曲线。
- Event Track 事件节点，其作用是在指定时间触发后续函数，每个关键帧相当于一个 Delay 节点。所以，关键帧之间没有曲线连接，同时输出端口是一个 Exec 执行流。
- Color Track 使用颜色曲线，根据关键帧设置的色彩产生过度效果。

输出的 0.0 ~ 1.0 的浮点值，还可以再使用 `Lerp Float` 节点进行浮点插值运算，可以得到指定两个值之间插值。

可添加多个不同类型的 Track，节点会自动创建对应的数据输出端口，放置完轨道后，添加关键帧以定义您的时间动画。

端口功能解释：

- Play 正向播放时间轴；
- Play from Start 从头开始执行，执行期间条件改变，重新开始执行；
- Stop 停止执行，执行期间条件改变，停止执行；
- Reverse 反向执行，期间条件改变，从中间某一位置立刻反向执行；
- Reverse from End 事件从末尾反向执行，期间条件改变，再从尾部开始反向执行；
- Set New Time 更改事件的开始执行时间；
- New Time 设置函数执行起始时间点；
- Updata 事件在执行过程中的后续执行流；
- Finished 事件在完成后的执行流；
- Direction 输出播放方向，是一个枚举值；

创建时间轴后，会在 My Blueprint 选项卡中创建 Timeline 变量，用于获取时间轴组件的引用，在必须使用时间轴节点的时候，此法尤为有用。这些节点的存在是为了能够访问某时间轴的特定功能，例如其播放速率。



# 🌟 Gameplay 入门指南
- 常见 Actor 类型 https://docs.unrealengine.com/4.27/zh-CN/Basics/Actors/Types
- 常见 ActorComponent 类型 https://docs.unrealengine.com/4.27/zh-CN/Basics/Components/
- Gameplay 入门指南 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo
- Blueprints Events https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/Events/
- AActor Hierarchy https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/AActor/AActorHierarchy/
- UActorComponent Hierarchy https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Components/UActorComponent/UActorComponentHierarchy/
- Movement Components 移动组件 https://docs.unrealengine.com/4.27/zh-CN/Basics/Components/Movement/
- 《Exploring in UE4》移动组件详解[原理分析] https://zhuanlan.zhihu.com/p/34257208
- Pawn 玩家具化对象 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Framework/Pawn/
- Pawn 的操纵 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo/PossessPawns/
- 重生玩家 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/HowTo/RespawnPlayer/
- 摄像机代表玩家的视角 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Framework/Camera/
- Using Cameras https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/UsingCameras

Gameplay 框架是 UE4 游戏流程框架，官方提供的构架结构简单地显示各种对象的组织：

                        +-------------+
                        |    Game     |
                        |  GameMode   |
                        |  GameState  |
                        +------^------+
                               |
         Contains:  +----------+-----------+           +---------------+
       +----------- |    PlayerController  |           |  AIController |
       |            +----------+-----------+           +-------+-------+
       |                       |                               |
       |    +---------+        | Possess  +---------+  Possess |
       +--> |   HUD   |        +--------> |   Pawn  | <--------+
       |    +---------+                   +---------+
       |    +---------+
       +--> |  Input  |
       |    +---------+
       |    +------------------------+
       +--> |  PlayerCameraManager   |
            +------------------------+

[GamePlay Framework Class Relationships](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/QuickReference/)

这个构架图已经解释了游戏的工作流程：

- 首先，是运行游戏的最初期的工作是 GameMode 和 GameState 完成的，主要是 GameMode，它管理游戏如何开始的基本逻辑；
- 完成前期的配置工作后，

通过 Project Settings -> Project -> Maps & Modes 可以给项目指定一个 GameMode 对象：

- Default GameMode 指定工程默认游戏模式对象；
- Game Startup Map 指定开始游戏时加载的关卡地图；
- Editor Startup Map 指定打开编辑器时加载的关卡地图；

注意：除了可以为整个工程设置以外，还可以在每个关卡设置独有的 GameMode，操作路径：Window -> World Settings -> Game Mode。

每个关卡都有对应的游戏模式，也就意味着我们切换关卡，所有的数据都会被初始化。

尽管，*GameModeBase* 中定义了各种可以供蓝图编辑的属性，但是通过 C++ 继承后，并设置在工程中设置，由于蓝图机制，并不能直接修改这些属性，需要将 C++ 扩展为蓝图类，才可以在编辑器中设置这些属性。

```C++
/** The default pawn class used by players. */
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=Classes)
TSubclassOf<APawn> DefaultPawnClass;
```

GameMode 基本设置:

- Default Pawn Class 指定默认的游戏玩家是什么类型的对象，在进入游戏时，这种对象就由玩家操纵，即被 PlayController 操控；
- HUD Class 指定 Head-up Display 类型，开始游戏时会加载它用来显示游戏中的平面 UI 界面，主要用来显示信息，如玩家的生命值；
- Player Controller Class 玩家控制器，这是游戏程序控制的核心类，比如用户输入如何传递的 Pawn Class 这样的工作就是它处理的；
- Game State Class 游戏状态类，记录数据用，如得分、排行榜等，保存游戏进度时就需要使用它；
- Player State Class 玩家状态类，和游戏状态类相似，记录玩家状态信息；
- Spectator Class 旁观者类，也就是非玩家角色 NPC；

如果未指定 HUD Class 和 Default Pawn Class，开始游戏时，不会自动创建 HUD 界面，也不会创建玩家控制的对象。

可以直接将 Pawn 角色添加到场景，然后设置属性，将其指派给玩家控制：Details -> Pwan -> Auto Possess Player，另外还可以指派给 AI 控制器来控制。

使用引擎提供的 AGameModeBase，将使用 `DefaultPawn` 作为玩家操纵的对象，它只实现了最基本的空间移动能力。配套的 `DefaultPawnMovementComponent` 移动风格被设置为无重力并且可飞行。除了原有的 MovementComponent 变量外，它还包括 MaxSpeed、Acceleration 和 Deceleration 等浮点值，可以在子类的蓝图中访问。

通常，需要实现自己的玩家角色，直接使用 `Character` 类进行扩展是不不错的选择，它已经内含了 `UCharacterMovementComponent`，只需要根据用户输入实现相应的动作。另外，需要指定摄像机来产生需要的画面。如果不设置摄像机，引擎就会以 Default Pawn 对象的 Face 方向中的画面渲染到屏幕上，即第一人称角度提供画面。移动组件 `UMovementComponent` 是一个抽象类，旨在能为所属的 Actor（或角色）提供基本移动功能接口。

画个图理清一下它们的族谱，同时复习一下 AC/SC/PC 三大基础组件：


                                   +=============+
                                   |   UObject   |
                                   +=============+                     +=====================+
                                         |                        +--> |   UAudioComponent   |
                               +=========v=========+              |    +=====================+
                               |  UActorComponent  |              |
                               +===================+              |    +=====================+
                                         |                        +--> |   UCameraComponent  |
                  +----------------------+----------+             |    +=====================+
                  |                                 |             |
    +=============v===============+       +=========v=========+   |    +=====================+
    |      UMovementComponent     |       |  USceneComponent  |---+--> | USpringArmComponent |
    +=============================+       +===================+   |    +=====================+
                  |                                               |
    +=============v===============+                               |    +======================+
    |     UNavMovementComponent   |                               +--> |  UPrimitiveComponent |
    +=============================+                                    +======================+
                  |                                                               |
    +=============v===============+                  +----------------------------+-----+
    |    UPawnMovementComponent   |                  |                                  |
    +=============================+    +=============v===============+    +=============v===============+
                  |                    |       UMeshComponent        |    |       UShapeComponent       |
    +=============v===============+    +=============================+    +=============================+
    | UCharacterMovementComponent |                  |                                  |
    +=============================+    +=============v===============+    +=============v===============+
                                       |    USkinnedMeshComponent    |    |      UCapsuleComponent      |
                                       +=============================+    +=============================+
                                                     |
                                       +=============v===============+
                                       |   USkeletalMeshComponent    |
                                       +=============================+

创建自己的组件时，需要了解三大基础组件：

- `UActorComponent` 所有组件基类，最适用于 Actor 的抽象行为，例如移动、物品栏或属性管理，以及其他非物理概念。AC 组件不具有嵌套能力，没有变换能力，即它们在场景中不存在任何物理位置或旋转。
- `USceneComponent` 场景组件，UActorComponent 的子类，支持基于位置的行为，这类行为不需要几何表示。这包括弹簧臂、摄像机、物理力和约束（但不包括物理对象），甚至音频。
- `UPrimitiveComponent` 基元组件，USceneComponent 的子类，是拥有几何表示的场景组件，通常用于渲染视觉元素或与物理对象发生碰撞或重叠。这包括静态或骨架网格体、Sprite 或公告板、粒子系统以及盒体、胶囊体和球体碰撞体积。

经典的角色对象具有以下内部层次结构，根据 Character.h 头文件，尽管它们都是私有成员，但是可以通过蓝图编辑器给它们增加子对象：

- USkeletalMeshComponent* `Mesh`; 基本骨架网格组件，用于组织具体的形象模型
- UCapsuleComponent* `CapsuleComponent`; 胶囊碰撞轮廓，用于碰撞检查并处理相应事件
- UArrowComponent* `ArrowComponent`; 方向示意箭头，不在游戏时渲染
- UCharacterMovementComponent* `CharacterMovement`; 角色运动组件，提供运动能力，可在蓝图编辑器中方便修改

```C++
// Character.h 
private:
    /** The main skeletal mesh associated with this Character (optional sub-object). */
    UPROPERTY(Category=Character, VisibleAnywhere, BlueprintReadOnly, meta=(AllowPrivateAccess = "true"))
    TObjectPtr<USkeletalMeshComponent> Mesh;

    /** Movement component used for movement logic in various movement modes (walking, falling, etc), containing relevant settings and functions to control movement. */
    UPROPERTY(Category=Character, VisibleAnywhere, BlueprintReadOnly, meta=(AllowPrivateAccess = "true"))
    TObjectPtr<UCharacterMovementComponent> CharacterMovement;

    /** The CapsuleComponent being used for movement collision (by CharacterMovement). Always treated as being vertically aligned in simple collision check functions. */
    UPROPERTY(Category=Character, VisibleAnywhere, BlueprintReadOnly, meta=(AllowPrivateAccess = "true"))
    TObjectPtr<UCapsuleComponent> CapsuleComponent;

#if WITH_EDITORONLY_DATA
    /** Component shown in the editor only to indicate character facing */
    UPROPERTY()
    TObjectPtr<UArrowComponent> ArrowComponent;
#endif
```

而使用中，通常还会增加跟随玩家背后摄像机的弹簧臂组件 `USpringArmComponent`，在摄像机发生碰撞时进行机位调整，组合玩家跟随摄像机 `UCameraComponent`，这样就可以得到跟随玩家的第三人称画面。摄像机数量不限，也可以放一个专供 VR 设置使用，当连接了 VR HMD 输入设备就通过 `SetActive` 方法激活并使用它。

所谓摄像机，其实就是一个抽象，用软件模拟的世界中，需要有一个角度来看虚拟出来的世界，就是渲染到屏幕上的画面。在什么位置，什么角度，多大的 FOV 等等都是模拟成像的技术参数。摄像机就是模拟眼睛看世界的过程，它有一个视点 POV - Point Of View，可以通过 ViewTarget 目标来获取，这一切参数决定了它会看到什么。

在游戏开发中，摄像机的视角有几种模式，注意 Face 朝向 X 轴正方向：

- 第一人称视角，即游戏玩家看到的画面就相当真实世界中看到的画面一样，但看不到所控制对象的全样，比如看不到脸部。
- 第三人称视角，玩家屏幕上的画面可以看到自己控制的角色如何运动；
- 前面两种都是运动视角，当然还可以使用固定机位视角，还可以有一些细小变化的模式。

摄像机的位置、角度的调整涉及矩阵变换操作，PlayerController 对象提供蓝图方法 `SetViewTargetWithBlend` 来平滑地切换摄像机镜头方位，注意，这个过程不需要添加摄像机对象，参数 ViewTarget 接收一个 Actor 被用来获取镜头要调整的位置和角度。如果，ViewTarget 指向的这个 Actor 内部包含摄像机，就优先使用摄像机的机位，否则使用 Actor 本身的 Face 朝向来调整。通过 GetPlayerController 获取控制器，如果场景内已经有 Pwan 可以通过实例执行这个方法，否则就执行全局方法来获取玩家控制器。

过场动画一般有两种切入方式：渐变和融合（Fade & Blend），镜头融合在 Sequencer 动画上应用相当常见。渐变是一种稍为简单的镜头切换方法，先黑屏、白屏或其它纯色，然后将下一个画面慢慢从纯色过度出来，最后完成两个画面的对接。

粗鲁点，直接切换不过度。比如需要一个全局的摄影机对场景进行观察的画面，这就需要重新创建一个摄影机，并在这两个摄影机直接切换。下面看下如何实现。在 APlayerController 类中，有一个 `SetViewTarget` 方法，参数是一个 AActor 指针，就是实现此功能的，这个方法不提个蓝图调用。

ViewTarget 结构在 PlayerCameraManager 中定义，负责向其提供理想的视角(POV)。ViewTarget 包含有关 Actor 目标、Actor 目标的控制器 （用于非本地控制的 Pawn），以及 PlayerState 的信息（用于在观看的同时跟随同一个玩家完成 Pawn 过渡和其它变更）。摄像机信息 被通过视角属性以 FMinimalViewInfo 结构的形式传给 PlayerCameraManager。该结构包含来自 `CameraComponent` 的基本摄像机信息，包括位置、转动、 放映模式（透视或正交）、视场、投影宽度、宽高比和后期处理效果。这些信息使 PlayerCameraManager 能在 摄像机管理期间混合两种摄像机镜头。

PlayerCameraManager 中的 UpdateViewTarget 函数查询 ViewTarget，并返回该 ViewTarget 的视角。如果你有子类化的 APlayerCameraManager，并且没在查看 CameraComponent，该函数也称为 BlueprintUpdateCamera。

如果场景内没有摄像机，UE4 会提供默认的镜头，如果摄像机是像前面那样设置在 Pawn 对象内部的，就会当作专属使用。在添加将摄像机到场景后，可以直接将镜头指定给玩家：Details -> Auto Player Activation。

对于玩家角色，通常是使用人物移动组件 `UCharacterMovementComponent`，它允许非物理刚体类的角色移动（Walking, Falling, Jump, Swimming, Flying）。 该组件专用于 Characters，无法由其他类实现。当你创建一个继承自 Characters 的蓝图对象时，CharacterMovementComponent 会自动添加，无需你手动添加。

角色运动优组件包含一些可设置属性，包括角色跌落和行走时的摩擦力、角色飞行、游泳、以及行走时的速度、浮力、重力系数、以及人物可施加在物理对象上的力。还包含动画自带的、且已经转换成世界空间的根骨骼运动参数，可供物理系统使用。此组件与物理系统紧密相关，只有正确的物理规则才能保证它不会穿墙而过。

此外，角色动作组件具有强大的网络 Gameplay 集成功能，并提供框架帮助开发人员创建自定义的联网动作。

玩家出生点放置和一般 Actor 一样，了解以下技巧能使开发过程更容易：

- No Player Start（无玩家出生点）： 如开始游戏时世界场景中不存在玩家出生点，玩家角色在世界场景中出现的坐标将为 0,0,0。
- 可以放置多个实例在关卡中，如果是多人游戏就可以选择在多个位置出场。也可以不放置，游戏选择默认位置出场。
- 在 Viewport 中，使用右键菜单 Play From Here 设置出场位置，也可设置以从非玩家出生点的其他位置开始游戏。
- 还可以设置 Play Setting -> Spawn Player At... -> Default Player Start or Current  Camera Location。
- 玩家出生点出现尺寸错误 BadSize 表示空间不够容纳，调整一个位置，不要与其它对象有交叠即可。

用典型的网线对战游戏的连接过程可以更好地解释 GameMode 的作用，主要步骤如下：

- 客户端发送连接请求。
- 如果服务器接受连接，则发送当前地图。
- 服务器等待客户端加载此地图。
- 加载之后，服务器将在本地调用 `AGameModeBase::PreLogin`，这时 GameMode 有机会拒绝连接。
- 如果接受连接，服务器将调用 `AGameModeBase::Login`，这里创建一个 `PlayerController` 用于后续复制到新连接的客户端，在成功接收后，作为代客户端的临时使用。
- 调用 `APlayerController::BeginPlay`，应当注意的是，在此 Actor 上调用 RPC 函数尚存在安全风险，应当等待 `PostLogin` 被调用完成。
- 最后调用 `AGameModeBase::PostLogin`，然后让服务器在 `PlayerController` 上开始调用 RPC 函数。

用户输入会经过 `PlayerInput` 映射转换 Actor 能够理解并使用的数据，再传递给 `InputComponent`，再由输入组件将输入转递给 Actor，如 PlayerController，Level Blueprint 或 Pawn 处理。所以，可以在蓝图编辑器编写事件处理代码，直接处理在 Project Settings -> Engine -> Input 工程设置的输入映射 `ActionMappings` 离散动作输入事件或者 `AxisMappings` 轴数据轮询事件映射。

`PlayerController` 此操作将指示玩家控制器要支配和控制的目标 Pawn。`PlayerController` 是人类玩家控制 Pawn 使用的，而 AIController 则对 Pawn 施加人工智能控制效果。控制器用 `OnPossess` 函数控制 Pawn，用 `OnUnPossess` 函数放弃控制 Pawn。调用 Possess 函数时，该函数将自动检查 Pawn 当前是否被控制并在试图支配新的 Pawn 前先 UnPossess 它。让 Pawn 进入不直接控制可玩人物的旁观者状态，就可以使用 UnPossess 函数。

GameModeBase 或其子类 GameMode 负责在玩家角色在游戏过程中被销毁时重新生成玩家角色类。

重生玩家 `RestartPlayer` 是 GameModeBase 类中的实现的其中一个重生方法，它会尝试在 `FindPlayerStart` 返回的位置上生成 Pawn 玩家对象。因为角色是由 Controller 控制的，所以它接收一个 `AController` 引用作为参数。

- RestartPlayer
- RestartPlayerAtPlayerStart
- RestartPlayerAtTransform
- Spawning  通过 `UWorld::SpawnActor` 生成；
- Deferred Spawn 通过 `UWorld::SpawnActorDeferred` 延时生成；
- 在蓝图中使用 Spawn Actor from Class

源代码参考：

- UE_4.27\Engine\Source\Editor\UnrealEd\Classes\ActorFactories\ActorFactory.h
- UE_4.27\Engine\Source\Runtime\Engine\Classes\Engine\World.h

游戏中玩家被击败或被杀死，可以调用 Destroy() 来清除角色，然后通过 GameModeBase 将它重生。

```C++
void ARespawnPlayerCharacter::CallRestartPlayer()
{
    AController* CortollerRef = GetController();
    Destroy();

    if (UWorld* World = GetWorld())
    {
        if (ARespawnPlayerGameMode* GameMode = Cast<ARespawnPlayerGameMode>(World->GetAuthGameMode()))
        {
            AController* CortollerRef = GetController();
            GameMode->RestartPlayer(CortollerRef);
        }
    }
}
```
以上代码在蓝图上实现存在一些问题，因为直接在对象内部调用了 Destroy 方法进行销毁自身，并且又在后续执行其它代码。这逻辑上有问题，即使用使用 Timer 执行也行不通，因为定时器任务也同时被销毁。官方使用的是 Event Dispatchers 方式，销毁对象之前，发送信息告知要执行重生函数的代理方，这样就可以在对象销毁后完成重生。

在蓝图中可以直接使用 Get Game Mode 节点获取游戏模式对象，不必使用 World 对象。

如果理解了 Actor 的生命周期，就可以使用 SpawnActor 全局方法生成玩家对象，再让控制器 Possess 它，这是最直接的方法：

```C++
SpawnedActor = GetWorld()->SpawnActor<AMyFirstActor>
(AMyFirstActor::StaticClass(), SpawnLocation);
```

在蓝图中，需要使用 SpawnActorFromClass、SpawnActorForGameplayTask，属性 Spawn Transform 指定一个位置转换矩阵，可以将其它对象中的 Location 经过 Math Conversions 库 ToTransform 进行转换。如果是 C++，基础类 FTransform 构造器可以直接转换得到。




## ⚡ GameMode & GameState
- Game Mode and Game State https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/GameMode/
- Game Mode 和 Game State https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Framework/GameMode/

两个主要类负责处理进行中游戏的相关信息：Game Mode 和 Game State。

即使最开放的游戏也拥有基础规则，而这些规则构成了 Game Mode。

在最基础的层面上，这些规则包括：

- 出现的玩家和观众数量，以及允许的玩家和观众最大数量。
- 玩家进入游戏的方式，可包含选择生成地点和其他生成/重生成行为的规则。
- 游戏是否可以暂停，以及如何处理游戏暂停。
- 关卡之间的过渡，包括游戏是否以动画模式开场。

基于规则的事件在游戏中发生，需要进行追踪并和所有玩家共享时，信息将通过 Game State 进行存储和同步。

这些信息包括：

- 游戏已运行的时间（包括本地玩家加入前的运行时间）。
- 每个个体玩家加入游戏的时间和玩家的当前状态。
- 当前 Game Mode 的基类。
- 游戏是否已开始。

特定的基础（如进行游戏所需要的玩家数量，或玩家加入游戏的方法）在多种类型的游戏中具有共通性。可根据开发的特定游戏进行无穷无尽的规则变化。无论规则如何，Game Modes 的任务都是定义和实现规则。

UE 4.14 版本中加入了简洁高效的 `AGameModeBase`，是新代码项目中包含的全新默认游戏模式。是所有 Game Mode 的基类，是经典的 `AGameMode` 简化版本。AGameMode 是 4.14 版本之前的基类，仍然保留，功能 如旧，但现在是 AGameModeBase 的子类。由于其比赛状态概念的实现，AGameMode 更适用于标准游戏类型（如多人射击游戏）。

所有 Game Mode 均为 AGameModeBase 的子类。而 AGameModeBase 包含大量可覆盖的基础功能，Game Modes 当前常用的基类就只有这两个。

AGameModeBase 函数包括：

- `InitGame` 事件在其他脚本之前调用（包括 PreInitializeComponents），由 AGameModeBasePreInitializeComponents
- `PreLogin` 接受或拒绝尝试加入服务器的玩家。如它将 ErrorMessage 设为一个非空字符串，会导致 Login 函数失败。PreLogin 在 Login 前调用，Login 调用前可能需要大量时间，加入的玩家需要下载游戏内容时尤其如此。
- `PostLogin` 成功登录后调用。这是首个在 PlayerController 上安全调用复制函数之处。OnPostLogin 可在蓝图中实现，以添加额外的逻辑。
- `HandleStartingNewPlayer` 在 PostLogin 后或无缝游历后调用，可在蓝图中覆盖，修改新玩家身上发生的事件。它将默认创建一个玩家 pawn。
- `RestartPlayer` 调用开始生成一个玩家 pawn。如需要指定 Pawn 生成的地点，还可使用 RestartPlayerAtPlayerStart 和 RestartPlayerAtTransform 函数。OnRestartPlayer 可在蓝图中实现，在此函数完成后添加逻辑。
- `SpawnDefaultPawnAtTransform` 这实际生成玩家 Pawn，可在蓝图中覆盖。
- `Logout` 玩家离开游戏或被摧毁时调用。可实现 OnLogout 执行蓝图逻辑。

可针对游戏提供的每个比赛格式、任务类型或特殊区域创建 AGameModeBase 的子类。一款游戏可拥有任意数量的 Game Mode，因此也可拥有任意数量的 AGameModeBase 类子类；然而，给定时间上只能使用一个 Game Mode。每次关卡进行游戏实例化时 Game Mode Actor 将通过 UGameEngine::LoadMap() 函数进行实例化。

Game Mode 不会复制到加入多人游戏的远程客户端；它只存在于服务器上，因此本地客户端可看到之前使用过的留存 Game Mode 类（或蓝图）；但无法访问实际的实例并检查其变量，确定游戏进程中已发生哪些变化。如玩家确实需要更新与当前 Game Mode 相关的信息，可将信息保存在一个 AGameStateBase Actor 上，轻松保持同步。AGameStateBase Actor 随 Game Mode 而创建，之后被复制到所有远程客户端。

AGameMode 是 AGameModeBase 的子类，拥有一些额外的功能支持多人游戏和旧行为。所有新建项目默认使用 AGameModeBase。如果需要此额外行为，可切换到从 AGameMode 进行继承。如从 AGameMode 进行继承，也可从 AGameState 继承游戏状态（其支持比赛状态机）。

AGameMode 包含一个跟踪比赛状态或整体游戏流程的状态机。可使用 GetMatchState 或 HasMatchStarted、IsMatchInProgress 和 HasMatchEnded 之类的封装器查询当前的状态。以下是可能的比赛状态：

```cpp
/** Possible state of the current match, where a match is all the gameplay that happens on a single map */
namespace MatchState
{
    extern ENGINE_API const FName EnteringMap;          // We are entering this map, actors are not yet ticking
    extern ENGINE_API const FName WaitingToStart;       // Actors are ticking, but the match has not yet started
    extern ENGINE_API const FName InProgress;           // Normal gameplay is occurring. Specific games will have their own state machine inside this state
    extern ENGINE_API const FName WaitingPostMatch;     // Match has ended so we aren't accepting new players, but actors are still ticking
    extern ENGINE_API const FName LeavingMap;           // We are transitioning out of the map to another location
    extern ENGINE_API const FName Aborted;              // Match has failed due to network issues or other problems, cannot continue
}
```

游戏状态将固定为 InProgress，因为这是调用 BeginPlay、actor 开始 tick 的状态。然而，个体游戏可能覆盖这些状态的行为，用更复杂的规则构建一个多人游戏，如在一款多人射击游戏中等待其他玩家加入时允许玩家在关卡中自由飞行。

可创建派生自 Game Mode 类的蓝图，并将它们用作项目或关卡的默认 Game Mode。

派生自 Game Mode 的蓝图可进行以下默认设置：

- Default Pawn Class 指定默认的游戏玩家是什么类型的对象，在进入游戏时，这种对象就由玩家操纵，即被 PlayController 操控；
- HUD Class 指定 Head-up Display 类型，开始游戏时会加载它用来显示游戏中的平面 UI 界面，主要用来显示信息，如玩家的生命值；
- Player Controller Class 玩家控制器，这是游戏程序控制的核心类，比如用户输入如何传递的 Pawn Class 这样的工作就是它处理的；
- Game State Class 游戏状态类，记录数据用，如得分、排行榜等，保存游戏进度时就需要使用它；
- Player State Class 玩家状态类，和游戏状态类相似，记录玩家状态信息；
- Spectator Class 旁观者类，也就是非玩家角色 NPC；

此外，Game Mode 的蓝图十分实用，因为它们无需调整代码即可启用变量调整。因此可用于使单一 Game Mode 适用到多个不同关卡，无需使用硬编码资源引用或为每次调整请求工程支持和代码修改。

Game State 负责启用客户端监控游戏状态。从概念上而言，Game State 应该管理所有已连接客户端已知的信息（特定于 Game Mode 但不特定于任何个体玩家）。它能够追踪游戏层面的属性，如已连接玩家的列表、夺旗游戏中的团队得分、开放世界游戏中已完成的任务，等等。

Game State 并非追踪玩家特有内容（如夺旗比赛中特定玩家为团队获得的分数）的最佳之处，因为它们由 Player State 更清晰地处理。整体而言，GameState 应该追踪游戏进程中变化的属性。这些属性与所有人皆相关，且所有人可见。Game mode 只存在于服务器上，而 Game State 存在于服务器上且会被复制到所有客户端，保持所有已连接机器的游戏进程更新。

AGameStateBase 是基础实现，其部分默认功能包括：

- `GetServerWorldTimeSeconds` 这是 UWorld 函数 GetTimeSeconds 的服务器版本，将在客户端和服务器上同步，因此该时间可用于复制，十分可靠。
- `PlayerArray` 这是所有 APlayerState 对象的阵列，对游戏中所有玩家执行操作时十分实用。
- `HasBegunPlay` 如 BeginPlay 函数在游戏中的 actor 上调用，则返回 true。

AGameStateBase 通常在 C++ 或蓝图中延展，包含用于使游戏中玩家知晓当前情况的额外变量和函数。进行的特定修改通常基于 Game State 的配对 Game Mode。Game Mode 自身也可将其默认 Game State 类覆盖为派生自 AGameStateBase 的任意 C++ 类或蓝图。

GameSession 是在网络联机游戏中做管理的类，并不存储数据。在单机游戏中，也存在该类对象用来做 LoginPlayer。


## ⚡ Input & Interactive
- https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Input/
- Gamepad Events https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Input/GamepadEvents/

Input Processing Procedure 示意图：

    +============================+
    |       InputComponent       |             +============================+
    |            Checks    +-----+<----------- |    PlayerInput Mapping     |
    |                      |     |             +=============^==============+
    |  +===================V==+  |                           |              
    |  | Input-Enabled Actor  |->+----+        +============================+
    |  | (Most recent first)  |  |    |        | Hardware Input from Player |
    |  +======================+  |    |        | Keyboard, Touchpad, Mouse, |
    |             |              |    |        | Gamepad, Oculus and so on. |
    |  +==========V===========+  |    |        +============================+
    |  |   PlayerController   |->+----+
    |  +======================+  |    |
    |             |              |    |
    |  +==========V===========+  |    |
    |  |   Level Blueprint    |->+----+
    |  +======================+  |    |
    |             |              |    |
    |  +==========V===========+  |    |    +=============+
    |  |         Pawn         |->+----+--->|  Game Logic |
    |  +======================+  |         +=============+
    |                            |
    +============================+

Controller 是一种可以控制 Pawn 或其派生类，例如 Character，从而控制其动作的非实体 Actor。

`PlayerController` 是人类玩家控制 Pawn 使用的，而 AIController 则对 Pawn 施加人工智能控制效果。控制器用 `OnPossess` 函数控制 Pawn，用 `OnUnPossess` 函数放弃控制 Pawn。调用 Possess 函数时，该函数将自动检查 Pawn 当前是否被控制并在试图支配新的 Pawn 前先 UnPossess 它。让 Pawn 进入不直接控制可玩人物的旁观者状态，就可以使用 UnPossess 函数。

控制器会接收其控制的 Pawn 对象所发生诸多事件的通知，因此，控制器可借机实现响应此事件的行为，拦截事件并接替 Pawn 的默认行为。 可以让控制器在给定的 Pawn 之前运行，从而从而最大限度减少输入处理与 Pawn 移动之间的延迟。

默认情况下，控制器与 Pawn 是一对一的关系，也就是说，每个控制器在任何给定的时间只控制一个 Pawn。这对于大多数 类型的游戏都是可以接受的，但对于某些类型的游戏可能需要进行调整，因为实时策略可能需要能够同时控制多个实体。

默认工程设置中，Project Settings -> Engine -> Input -> Default Class 设置了 `PlayerInput` 和 `InputComponent` 类作为标准的输入处理类。可以更改它，比如将项目配置为使用 Enhanced Input，先启用这个插件，重启编辑器，再将 Default Player Input class 和 Default Input Component Class 指定为 Enhanced Input 插件提供的实现。

`InputComponent` 最常应用在 Pawn 和控制器中，但如果需要，也可以在其他 Actor 和关卡脚本中使用。它将项目中的轴映射 AxisMapping 和操作映射 ActionMapping 链接到以 C++ 代码或蓝图图表建立的游戏操作（通常为函数）。

输入组件可以绑定的输入事件类型如下：

```cpp
// UE_4.27\Engine\Source\Runtime\Engine\Classes\Components\InputComponent.h
TArray<FInputKeyBinding> KeyBindings;
TArray<FInputTouchBinding> TouchBindings;
TArray<FInputAxisBinding> AxisBindings;
TArray<FInputAxisKeyBinding> AxisKeyBindings;
TArray<FInputVectorAxisBinding> VectorAxisBindings;
TArray<FInputGestureBinding> GestureBindings;
```

输入组件用于执行输入处理的优先级堆栈如下（最高优先级优先）：

- 设置 Accepts input 已启用的 Actor，从最晚启用者到最早启用者。
- 如果你希望某个特定的 Actor 总是第一个被考虑进行输入处理的 Actor，那么你可以重新启用它的 Accepts input，它将被移动到堆栈的顶部。
- 控制器。
- 关卡脚本。
- Pawn。

如果一个 InputComponent 获得了输入，那么它在堆栈的后继部分将不再可用。

`PlayerInput` 负责将玩家的输入映射转换为 Actor，如 PlayerController 或 Pawn 能够理解并使用的数据。

PlayerInput 中定义了两种结构体：

- FInputActionKeyMapping 定义了操作映射 ActionMapping。
- FInputAxisKeyMapping 定义了轴映射 AxisMapping。

`ActionMappings` 将离散按钮或按键映射到一个"友好的名称"，该名称稍后将与事件驱动型行为绑定。最终的效果是，按下（和/或释放）单个键、鼠标按钮或键盘按钮将直接触发某个游戏行为，注意不是连续触发。

`AxisMappings` 将键盘、控制器或鼠标输入映射到一个"友好的名称"，该名称稍后将绑定到连续的游戏行为，例如移动。AxisMapping 映射的输入会被持续轮询，即使当它们刚刚报告它们的输入值当前为零时也是如此。这可实现移动或其他游戏行为的平稳过渡，而不是 ActionMapping 那样离散地输入触发游戏事件。

映射中使用的硬件输入定义都是在 InputCoreType 中建立的。

可以在 UE4 工程配置中设置用户输入与事件的映射关系，Edit -> Project Settings... -> Engine -> Input。

使用 C++ 实现映射，可以直接使用 `UInputSettings` 类中的函数，这个类用于加载和保存配置文件中的映射关系。

可以在执行 ACharacter::SetupPlayerInputComponent 逻辑中嵌入输入映射，部分关键 API 参考如下：

```C++,
    void AddAxisMapping(const FInputAxisKeyMapping&amp; KeyMapping, bool bForceRebuildKeymaps = true);
    void RemoveAxisMapping(const FInputAxisKeyMapping& InKeyMapping, const bool bForceRebuildKeymaps)
    void AddActionMapping(const FInputActionKeyMapping&amp; KeyMapping, bool bForceRebuildKeymaps = true);
    void RemoveActionMapping(const FInputActionKeyMapping&amp; KeyMapping, bool bForceRebuildKeymaps = true);

    #include "GameFramework/PlayerInput.h"
    #include "GameFramework/InputSettings.h"

    FInputAxisKeyMapping AxisMap;
    AxisMap.AxisName = TEXT("MoveRight");
    AxisMap.Key = EKeys::E;

    FInputActionKeyMapping ActionMap;
    ActionMap.ActionName = TEXT("Jump");
    ActionMap.bAlt = true;
    ActionMap.Key = EKeys::G;
    //添加轴向事件绑定 注意此函数有默认参数bool，如果为false则下次启动程序应用新的按键映射，默认为true立即生效
    UInputSettings::GetInputSettings()->AddAxisMapping(AxisMap);
    //移除一个已经添加的按键事件
    UInputSettings::GetInputSettings()->RemoveActionMapping(ActionMap);
    UInputSettings::GetInputSettings()->SaveKeyMappings();
```

添加映射后，就可以直接使用映射设置的友好名称与事件处理函数绑定：

```C++,
    void APlayerCharacter::SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent)
    {
        check(PlayerInputComponent);
        PlayerInputComponent->BindAction("Jump", IE_Pressed, this, &ACharacter::Jump);
        PlayerInputComponent->BindAxis("MoveRight", this, &ARespawnPlayerCharacter::MoveRight);
    }
```

UE 4 的配置文件多种多样，其目录信息可以通过 FPaths 提供的静态方法获取：

```C++
// UE_4.27\Engine\Source\Runtime\Core\Public\Misc\Paths.h
// UE_4.27\Engine\Source\Runtime\Engine\Private\Kismet\BlueprintPathsLibrary.cpp
// UE_4.27\Engine\Source\Programs\UnrealBuildTool\System\ConfigHierarchy.cs
FString PluginConfigDir = FPaths::GetPath(Plugin.FileName) / TEXT("Config/");
FString EngineConfigDir = FPaths::EngineConfigDir();
FString SourceConfigDir = FPaths::SourceConfigDir();
FString ProjectConfigDir = FPaths::ProjectConfigDir();
```


## ⚡ Enemy & AI
- AI https://docs.unrealengine.com/4.26/zh-CN/InteractiveExperiences/ArtificialIntelligence
- Reynolds, Craig W. "Steering behaviors for autonomous characters". Game developers conference. Vol. 1999. 1999.
- Steering Behaviors 行为控制 https://www.rharel.com/projects/steering-behaviors
- steering behaviors 示范脚本 https://github.com/rharel/js-steering-behaviors
- [Amit 讲 A* 寻路算法](https://blog.csdn.net/denghecsdn/article/details/78778769)
- [Amit’s A* Pages](http://theory.stanford.edu/~amitp/GameProgramming/)
- 虚幻引擎4的AI系统 https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/ArtificialIntelligence/
- Navmesh - Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/NavMesh/

提到游戏 AI 就不得不说 Pacman 经典吃豆人游戏，作为经典游戏，其最有特色的部分就是带有 AI 原型的四个幽灵对手：

- 红色的幽灵 Blinky 代表执着，它会一直跟着玩家走，并且随着玩家吃的豆越多移动速度会变的越快。
- 粉色的幽灵 Clyde 代表预知，它会以玩家路径的前方为目的地，经常会围堵玩家，官方的名称叫做“埋伏者”。
- 青色的幽灵 Linky 代表变化，它有时候会追着玩家走，有时候又会提前堵在玩家必经的路上，善于变化。
- 黄色的幽灵 Pinky 代表随意，它的行动路线完全随机，甚至大多数时间它会完全不理会玩家，一个人自己在地图上漫游。

更多参考资源：

- [https://www.googlepacman.net/](https://www.googlepacman.net/)
- [http://macek.github.io/google_pacman/](http://macek.github.io/google_pacman/)
- [https://passer-by.com/pacman/](https://passer-by.com/pacman/)

- [Play Online](https://jimboyeah.github.io/pacman/)
- [Pacman on Github](https://github.com/jimboyeah/demo/tree/pacman)

用户可以同时使用多个系统，在虚幻引擎 4 项目中创建角色或其他实体的 AI。在项目中创建高可信度 AI 时，从分支为不同决策或行动的行为树 Behavior Trees，到通过环境查询系统（EQS）运行查询来获得环境信息，再到使用 AI Perception 感知系统获取感官信息（如视觉、声音或伤害信息），所有这些系统都发挥着关键的作用。此外，所有这些工具都可以通过 AI Debugging 工具进行调试，帮助用户了解 AI 在特定时间的思维和行为。 

在 UE4 中打造 AI 和使用这些系统时，构建思路如下：

- 行为树处理决策进程；
- AI 感知系统将源自环境的刺激（例如感官信息）传输到行为树；
- 然后 EQS 处理关于环境本身的查询。

为充分利用 AI 调试工具，需要在运行行为树、或拥有一个 AI 感知组件的关卡中设置一个具备 AI Controller 的 Pawn。如果 AI 正在执行一个 EQS，其运行时将被反映到 AI 调试工具中。在游戏运行时按下撇号（'）键即可启用 AI 调试，分号（;）键打开 Gameplay Debuge。

通常，最基本的 AI 控制能力是一个角色的寻路能力，而在一些类型的游戏中，敌人有固定的行为模式而不需要这部分功能。

经典寻路算法是 `Dijkstra` 算法，是算法名称也是作者名称。算法基于格子 Grid，一个格子可以往八个方向移动，但是效率低下，真正在项目中实用的是经过优化的 `A*` 寻路算法。相对于迪杰斯特拉的算法，不同点在于，加了一个启发系数，极大降低了搜索空间，提高算法效率，没有这个算法估计很多游戏的 NPC 寻路都跑不动。

在一些情况下，如果可以预先计算出每个节点到终点的直线距离，则可以利用这个信息更快的到达终点。虽然，给定一张带有阻碍物的格子地图，人脑可以瞬间就通过眼睛观察到的图像得到起点到目标点的最佳路径。但是计算机需要的是数据，为了得到这个最佳数据，就需要对全部输入的格子进行处理，这就需要优化算法来提高工作效率。

与 Dijkstra 算法类似，也使用一个优先队列，但此时以每个节点到达终点的距离作为优先级，每次始终选取到终点移动代价最小（离终点最近）的节点作为下一个遍历的节点，这种算法称之为 `Best First` BFS 最佳优先算法，也可以看作是一种深度优先或贪心策略的寻路算法。

Dijkstra 算法是一种广度优先遍历的算法，在没有障碍的情况下就像波浪扩散一样去搜索目标。而改良的 Best First 的速度很快，以最靠近目标点的优先去找到达目标点的路径。

但是，当遇到障碍时，最佳优先算法不一定可以获取最佳结果，它大体趋势会沿着起点到终点的直线为对称轴，左右来回寻点。就你知道前面有一条桥可以过河，结果直到桥头发现当...当...当...在施工，封桥不给过了，最后还得回到码头搭船过渡。

假设，在起点和目标点之间有一个巨大的凹口形阻碍物，且开口向着起点，那么以上两种寻路算法的结果可能是：

-  `Dijkstra` 算法摸索了大面积区域，即经过大量运算，并最终找到一个避开了凹口内部的最佳路径；
-  `Best First` 则快速找到一条直接往凹口内部走，并且遇到阻碍后再折回的一条比较长的路径；

所以，这里就有一个算法性能和路径最优的平衡性问题，找到一种既有效率，又能找到捷径的算法是最佳答案。

在 `Dijkstra` 算法和 `Best First` 算法的基础上，`A*` 算法提供的解决方法是根据起点到参考点的距离 + 参考点到目标点的距离之和来寻路。

可以用 f(n)=g(n)+h(n) 表达，其中：

- f(n) 是节点 n 的综合优先级。选择下一个要遍历的节点时，总会选取综合优先级最高（值最小）的节点。
- g(n) 是节点 n 距离起点的代价。
- h(n) 是节点 n 距离终点的预计代价，这也就是 `A*` 算法的启发函数 Heuristic Function。

这是迪杰斯特拉算法和最佳优先算法的结合体，可以加个权重参数 K 来调节这两种算法的影响程度

    f(n)= k * g(n) + (1-k) * h(n) ； k 取值 为 [0,1]

- 当 k=0 时，f(n)= h(n) ，就变成了最佳优先算法；
- 当 k=1 时，f(n)= g(n) ，就变成了迪杰斯特拉算法；
- 当 k=0.5 时，f(n)=g(n)+h(n) ，就变成 `A*` 算法；

AI 系统的引入，可以解决 Steering Behaviors 行为控制需求，这是使用动力学的数据结构，加速度和角速度参数等模拟真实有生命的活动，如：

- 敌人的游走行为 wandering behavior；
- Seeking 地图探索；
- Arriving 到达指定点；
- Pursuit 包抄对手；
- Evade 规避对手；
- Flee 跳跑；
- Separate 分散行为；
- Align 队列行为； 
- Patrol 巡逻行为，可以适当设置巡逻点 PatrolPoint。

在 UE4 项目中，通过 Navigation System 实现：

- Navigation Mesh 设置 AI traversing 穿越区域；
- Path Following 通过 Path 节点设计 AI 穿越路线；
- Behavior Tree 行为树的设置可以有目的地创造更加多样化的玩家体验，模拟更真实的 NPC 活动；
- Steering behaviors 运动行为控制，通过它来设置一个具有各种行为的有限状态机 Finite State Machines (FSM) ；
- Sensory systems 感知系统可以提供关键细节，例如附近的播放机、声级、附近的覆盖范围以及许多其他可以改变运动的环境变量。

官方文档 Navmesh Content Examples 提供了三个示例：

- 1.1 Simple navigation around obstacles 简单障碍物导航，演示如何让 pawn 通过一组障碍物、翻过斜坡或从窗台上跳下来。
- 1.2 Navigation using a Nav Link Proxy 使用 `NavLinkProxy` 进行导航，演示让 pawn 导航到斜坡并跳下。
- 1.3 Navmesh rebuild after moving Actors 演示在编辑器移动 Actor 后自动重建寻路网格体。

导航系统通常会将事情列为简单状态，因为它不需要接收太多外部数据，就像一个 Actor 在冰上行走或通过柏油，但是可以非常方便地在三维空间中导航到任何想要的位置。

当如包含 Static Meshes 的 actor 在编辑器内移动时，NavMesh 会自动更新。 示例中，可以移动 Static Mesh 块并放置它，使它充当两个斜坡间隙的桥梁。NavMesh 将会在新形成的桥梁上自动更新并构建，使得你在 Play 或 Simulate 时，pawn 可以通过导航来穿越它。

在编辑器中，将 `NavMeshBoundsVolume` 放置在关卡中后，按下 P 键将显示/隐藏 NavMesh 覆盖的区域。可以关闭关卡编辑器的 NavMesh 覆盖区域自动更新功能，操作路径：Editor Settings -> Level Editor -> Miscellaneous -> Update Navigation Automatically。

MaxEnemies  SpawnAIFromClass

    APawn* UAIBlueprintHelperLibrary::SpawnAIFromClass

    UE_4.27\Engine\Source\Runtime\AIModule\Private\Blueprint\AIBlueprintHelperLibrary.cpp:
    UE_4.27\Engine\Source\Developer\FunctionalTesting\Private\FunctionalAITest.cpp



## ⚡ Levels 关卡地图
- Level 关卡地图 https://docs.unrealengine.com/4.27/zh-CN/Basics/Levels/
- Level Blueprint https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Types/LevelBlueprint/
- Level Designer Quick Start https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LDQuickStart/
- 光照与阴影 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LightingAndShadows/

在游戏中，玩家看到的所有对象，交互的所有对象，都保存在一个世界中。这个世界我们称之为 关卡地图（Level）。在虚幻引擎 4 中关卡包含静态网格体（Static Mesh）、体积（Volume）、光源（Light）、蓝图（Blueprint）等内容。

每个关卡都有一个默认的关卡蓝图 Level Blueprint。它很特别，与一般的蓝图不同，它是管理整个地图的全局事件，并且 UE 4 不允许自己创建关卡蓝图。

使用 File -> New Level 菜单，引擎会打开一个新关卡向导窗口，其中包含可用作关卡起点的各种模板：

- Default 创建一个包含最基本设置的关卡，包括一个玩家出生点、一个天空盒，以及关卡正常运行所需的其他 Actor。
- TimeofDay 新建一个能够让你实时观察大气昼夜变化的关卡。
- VR-Basic 创建一个包含可交互 Actor 的 VR 关卡，有助于你熟悉 VR 编辑器操作。
- Blank 新建一个完全空白的关卡，相当于在 Content Browser 中直接创建 Level Map。

一个 TimeofDay 场景包含：

- DirectionalLight 平行光源，设置：Atmosphere and Cloud -> `Atmosphere Sun Light` 以及 `Cast Cloud Shadows`，这样才能使用 Ctrl + L 快捷键调整照射角；
- SkyLight 大气漫反射光，设置：Light -> `Real Time Capture`, `Lower Hemisphere Is Solid Color`；Atomosphere and Cloud -> `Cloud Ambient Occlusion`；Mobility -> `Movable Light`；
- SkyAtmosphere 大气环境模拟组件，配合使用了引擎提供的 `M_SkyTimeOfDay` 材质的穹顶形成世界环境；
- SkyDomeMesh 穹顶静态网格，模拟高层云，默认配置：Z 轴移动 -7300000； X 旋转 90°，绽放(1000000, 150000, 1000000)；
- VolumetricClound 体积云组件，模拟低空云层；

除了以下模拟整个天空环境的关键组件，还有以下几个场景装饰：

- Floor 静态网格体地板；
- SM_MatPreviewMess 静态网格体展示，一个带基座的 UE Logo 球体；
- TextRenderActor 文字渲染组件，给一些提示性文字；
- PlayerStart 玩家出场点，游戏开始时，默认以出场点生成玩家角色；

TimeofDay 关卡中，启用 DirectionalLight 的 `Atmosphere Sun Light` 选项后，就可以通过 Ctrl + L + 鼠标移动调整 DirectionLight 照射经维度，分别对应左右、上下移动。

如果需要在蓝图中使用`SetActorRotation`或`AddActorWorldRotation`等方法动态调整，实现时光流逝的效果，就需要将 DirectionalLight 设置为 Movable 光源。通过旋转直射光源来实现光照角度的调整，XY 轴调用高度角，Z 轴调用方位角。如果，需要模拟太阳的移动，还需要添加 *BP_Sky_Sphere* 对象，设置 Details -> Default -> Directional Light Actor 引用当前的直射光源，并调用 *UpdateSunDirection* 方法更新太阳位置。

关卡是可以嵌套的，游戏中的每个关卡始终有一个固定关卡 Persistent Level 也叫持久关卡，还可以有多个子关卡。而子关卡可以通过关卡流送体积 Level Streaming Volume、蓝图或 C++ 代码动态地在游戏进行时加载。子关卡也是一个标准的 Level，当它作为子级附加到其它关卡时，它就是一个子关卡，并且与 Persistent Level 中的内容一起构造出完整的关卡地图。通过关卡管理窗口，可以点击列表中右侧的眼睛按钮来选择隐藏或显示各个子关上的内容。

使用关卡管理窗口 Window -> Levels 可以对当前的关卡进入子关卡进行管理，操作功能如下：

- 创建并添加新的子关卡，只需要执行菜单 Levels -> Create New；
- 添加已有关卡，只需要执行菜单 Levels -> Add Existing；
- 将关卡的对象拆分到子关卡；
- 在关卡间迁移 Actor；

拆分关卡操作，先在 Scene Outliner 或 Viewport 中选中 Actors，再执行 Levels -> Create New with Selected Actors。所有选中的 Actor 都会在原有关卡中被移除，并被添加到新关中。新关卡将作为当前持久关卡的一个子关卡，并被设置为当前关卡，供你在视口中处理。

使用 Levels 窗口，在多个关卡中复制或移动 Actor 很方便，先在 Scene Outliner 或 Viewport 中选中要移动的 Actor。然后在 Levels  窗口中，执行子关卡右键菜单 Move Selected Actors to Level 即可。

操作关卡后，该关卡会自动成为当前活动关卡，在使用 Levels 菜单时注意通过右键设置当前活动关卡 Levels -> Make Current。

在 Levels 关卡窗口中，点击工具栏中的 Summons Level Details 按钮打开关卡细节设置窗口，它允许你访问当前关卡的更多设置。主要是 Level Streaming Volumes 关卡流送体积功能设置。

可以设置子关卡的 Position 和 Rotation，点击 Viewport Edit 可以直接在主界面的视口中编辑。

可以设置调试用的 Level Color，在 Levels 窗口中也可以设置。使用 Level Color 只需要切换关卡颜色显示，请点击视口窗口菜单 Show -> Advanced -> Level Coloration 即可察看调试效果。

持久关卡没有额外的细节信息，除了一个用于切换到其他关卡的菜单。


游戏通关，需要切换到新的关卡，那么就可以使用关卡蓝图的 OpenLevel 节点加载新的关卡。

操作步骤：

- 创建一个 Level Map，打开关卡蓝图，方法：Tools -> Blueprints -> Open Level Blueprint；
- 创建盒体触发器，Place Actors -> Box Trigger，拖放到地图需要触发事件的位置，调整盒体大小以便于触发；
- 编辑关卡蓝图

在关卡中选中步骤2创建的触发器，然后在关卡蓝图中右键选择触发器事件
触发器事件
触发器事件的输出引脚触发OpenLevel函数，最终的关卡蓝图如下
关卡蓝图
运行游戏，控制角色走到碰撞器位置
运行游戏
触发并切换到新的关卡


## ⚡ Level Streaming
- Level Streaming 关卡流送 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LevelStreaming/
- Level Streaming - Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/NavMesh/
- Volumes 体积对象参考 https://docs.unrealengine.com/4.27/zh-CN/Basics/Actors/Volumes/  

所谓关卡流送 Level Streaming，即是一种大型地图的性能优化技术。它可以在游戏过程中将地图文件加载到内存中并切换地图，或者从内存中卸载。 这样一来，场景便能拆分为较小的地图块，并且只有相关部分才会占用资源并被渲染。关卡分布在平面网格中，并在玩家靠近时流入。正确设置后，开发者便能创建大型、无缝衔接的游戏场景，让玩家仿佛置身于大世界之中。

世界场景构成 World Composition 用于创建大型场景的特定关卡流送形式。其目的之一是避免使用 持久关卡来存储流送信息，因为这会给团队中的关卡设计师同时处理关卡造成瓶颈。持久关卡不存储任何流送信息，而是扫描文件夹 并将找到的所有关卡视为流送关卡。每个流送关卡的信息存储在包头中，所以不用把关卡加载到内存中，世界场景构成就能读取这些信息。默认情况下，除 Persistent Level 之外的所有关卡内容都会在世界场景构成中卸载，但可以随时手动加载或卸载世界场景的任何部分。

World Composition 依赖于世界场景原点移位功能，在基于距离的关卡流送中使用时，可以创建出的世界场景不局限于引擎中硬编码的 `WORLD_MAX`常量值。

激活 World Composition 管理的世界场景，操作路径：Tools -> World Settings -> World -> Enable World Composition。

当移动世界场景原点时，会向世界场景中注册的所有 Actor 添加偏移矢量。Actor 一个 ApplyWorldOffset 函数，可在子类中覆盖该函数以执行其他操作。如果创建了一个新的 AActor 派生类并将绝对位置值存储在其中，则必须覆盖 ApplyWorldOffset 函数，以使其适用于世界场景原点更改并将绝对值移至其中。渲染和物理 Primitives 会与游戏线程中的 Actor 并行移位。

目前，多人游戏不支持世界场景原点移位，禁用世界场景原点移位功能，操作路径：Tools -> World Settings -> World (Advanced) -> Enable World Origin Rebasing。

在 Levels 关卡窗口中，点击工具栏中的 Summons Level Details 按钮打开关卡细节设置窗口，它允许你访问当前关卡的 Level Streaming Volumes 关卡流送体积功能设置。

如果关卡的流送类型被设为 Always Loaded，它将与固定关卡一同加载，也将和固定关卡同时变为可见状态。它将无视指定的流送体积域，以及来自蓝图或 C++ 的所有加载/卸载请求。

通过 Levels 右键菜单设置流送类型，Change Streaming Method: `Always Loaded` 或 `Blueprint`。

流送类型设置为 Blueprint 是动态流送方法，流送关卡实际上会受到关卡流送体积域、蓝图或 C++ 代码的控制，这些关卡可被动态加载或卸载。

动态流送就是动态地在游戏进行时加载，可选方法如下：

- 关卡流送体积 Level Streaming Volume；
- 通过蓝图节点配置关上动态流送；
- 通过编写 C++ 代码动动态流送。

UE 4 有各种用途的 Volumes 体积对象，在以下说明的官方示范中就使用了四种体积对象：

- Level Streaming Volume 关卡流送体积，触发关卡流送行为；
- Precomputed Visibility Volume 预计算可视性体积，用于性能优化，根据对象在场景中位置的可视性，通过离线剔除方法来动态剔除关卡中的对象。
- Lightmass Importance Volume 重要体积可以为区域内对象提供更精细的全局光照效果。
- Post Process Volum 后期处理体积，给摄像机画面添加后期处理设置。

官方 Content Examples 提供的 Level Streaming 关卡流送示范功能分解：

- `Level_Streaming` 是主关卡，它将包含 StreamingLevels 子目录下的所以关卡作为 SubLevel。
- `StreamingLevel_SKY` 和主关卡一样作为固定关卡使用 Persistent Level，主要提供一个 SM_SkySphere 用于模拟天空，还有通过 Text Material 材质提供提示性文字。可以通过右键菜单修改流送方式 Change Streaming Method: `Always Loaded`；
- `StreamingLevel1` 流送关卡，标记为深红色，因为在它 Level Details 关联的流送区域对象 `LevelStreamingVolume1` 设置了 Streaming Usage: SVB Loading & Visibility，进入游戏时，只要摄像机进入这个区域就会加载它；
- `StreamingLevel2` 流送关卡，标记为蓝色，因为在它 Level Details 关联了三个流送区域对象：
    - `LevelStreamingVolume6` 设置了 Streaming Usage: SVB Loading & Not Visibility，到达此区域时加载但不显示；
    - `LevelStreamingVolume7` 设置了 Streaming Usage: SVB Loading & Visibility，到达此区域时加载并且显示；
    - `LevelStreamingVolume8` 设置了 Streaming Usage: SVB Visibility Blocking on Load，到达此区域时显示；
    - `LevelStreamingVolume9` 设置了 Streaming Usage: SVB Visibility Blocking on Load，到达此区域时显示；
- `StreamingLevel3` 流送关卡，标记为绿色，因为在它通过蓝图脚本加载。`TriggerBox1` 和 `TriggerBox5` 都设置在主关卡，并且设置了 Overlap 事件执行 LoadStreamLevel 来加载，使用场景中 TriggerBox 对象的右键菜单可以快速跳到蓝图的事件节点。但是，在 Level 4 往前位置设置的 `TriggerBox3` 触发 Overlap 事件通过 `UnloadStreamLevel` 执行卸载。
- `StreamingLevel4` 流送关卡，标记为绿色，因为在它通过蓝图脚本加载。Level 3 中的 `TriggerBox2` 设置了 Overlap 事件使用 LoadStreamLevel 来加载它，并且触发 Level 3 的自动门打开。使用场景中 TriggerBox 对象的右键菜单可以快速跳到蓝图的事件节点。
- `StreamingLevel5` 流送关卡，标记为绿色，因为在它通过蓝图脚本加载。使用 Level 4 中的 `TriggerBox4` 触发自动打开时加载，并且在 CloseDoor 事件中执行 `UnloadStreamLevel` 执行卸载。
    - `LevelStreamingVolume10` 设置了 Streaming Usage: SVB Loading，到达此区域时预加载；
    - `LevelStreamingVolume11` 设置了 Streaming Usage: SVB Loading & Visibility，到达此区域时显示；

Content Example 工程设置的 BP_Double_Doors 蓝图对象是一个带有开关动画效果的自动门，基于 Timeline 实现动画。


## ⚡ World Partition
- 世界分区系统 World Partition https://docs.unrealengine.com/5.0/zh-CN/WorldFeatures/WorldPartition/

世界分区（World Partition）是 UE5EA 用于处理大型流送世界的系统，用于替代 World Composition，旧功能将在未来版本中移除。这是一种全新的数据管理和流送系统，可以在编辑器中以及在运行时使用。你再也不用将世界划分成无数的子关卡来管理流送，从而减少了编辑器中的数据争用（data contention）。

世界分区系统的工作原理是将你的场景保存在一持久关卡文件中，并使用可配置的运行时网格将空间划分为可流送的网格单元。

这些单元在运行时通过流送源的存在（如玩家）来加载和卸载。通过这种方式，引擎只加载玩家在特定时间看到并与之互动的关卡部分。

使用世界分区功能后，世界场景会以单个持久关卡（persistent level）的形式存在。在编辑器中，世界场景以编辑器网格为参照进行划分，而数据会根据你的需求进行局部加载。这样一来，你就能加载那些本需要花很长加载时间的大型世界。在烘焙场景或启动 PIE 后，场景会被划分成多个单元，而这些单元会作为关卡单独流送。

世界分区系统（World Partition）是一种全新的数据管理系统，它基于距离进行关卡流，能够为大型开放场景提供一个完整的管理方案。该系统将你的场景保存在一个被划分成多个网格单元的单一持久关卡中，消除了之前版本中需要将大关卡划分成多个子关卡的需要。同时，系统还为你提供一个自动流送系统，能根据与流送源的距离加载和卸载这些网格单元。

为整个项目启用世界分区系统：项目设置 -> 引擎 -> 世界分区 -> 启用世界分区 Enable World Partition。或者可以将现有的场景转换为世界分区系统，引擎提供 WorldPartitionConvert 命令工具来完成。设置 Auto Cell Loading Max World Size 可以将小于这一大小的网格自动加载。

世界分区系统用到了以下这些系统：

- One File Per Actor 一文件一Actor，提升团队协作的灵活性；
- Data Layers 数据层，用来替换旧版本的 Layers 系统；
- Level Instancing 关卡实例化；
- Hierarchical LOD 分层细节级别；

世界分区系统利用网格将你的场景分隔成可在运行期间动态加载和卸载的单元。但有时候，你会希望一些相隔较远且无法互动的Actor仍然可见，比如远方的山脉、树木和悬崖。

- HLOD 关闭，只有被加载的单元格中的内容会显示。
- HLOD 开启，卸载单元格中的内容会被替换为 HLOD。

世界分区 - 分层细节级别（HLOD） 系统使用自定义HLOD层组织大量静态网格体Actor，生成单个代理模型和材质。此技术用于使未加载的世界分区网格单元可视化，以减少每帧的绘图调用次数，提高性能，尤其是在使用大型开放世界的情况下。目前，地形和水域组件等世界组件目前不支持 HLOD Actor。

在编辑世界场景时，Actor 可以被添加到任何位置，并能根据细节面板中的网格放置 Grid Placement 设置被自动分配到某个网格单元中：

- Bounds 将 Actor 放置在所有与其边界体积（bounds volume）相交的网格单元中。
- Location 将 Actor 放置在包含 Actor 边界体积中心点的网格单元中。
- Always Loaded 始终加载 Actor。

由于采用"一Actor一文件"系统的 Actor 会被保存到单独的文件中，所以不需要从版本控制软件中检出关卡文件以便对场景中的 Actor 进行修改。这就为团队中其他人使用关卡文件提供了便利。

在运行时，网格内的网格单元流送由两个因素决定：

- 第一个是流送源在关卡中的位置，流送源所在的风格单元就会被流送。
- 第二个因素是运行时网格本身的设置，它决定流送源影响的范围。

流送源 Streaming sources 是一种组件，它会在世界场景中定义一个位置，并触发该位置周围的单元进行加载。玩家始终是一种流送源，流送源可以通过流送源组件添加到场景中。例如，你可以在玩家即将抵达的位置放置一个流送源组件，这样就能在传送位置附近加载单元格。一旦单元格加载完成，玩家就会传送到该地点，而流送源组件会被停用。由于玩家之前的位置没有了流送源，相关单元格就会被卸载。

运行时网格（Runtime grid）设置，操作路径：World Settings -> World Partition Setup，属性如下：

- Enable World Partition 为当前关卡启用世界分区，勾选前需要保存关卡，并且不能有子关卡。
- Grid Name 运行时网格的名称。
- Cell Size 确定用于生成流送关卡的单元格的大小，注意默认 Unreal Unit 单位是 cm。
- Loading Range 确定流送源周围多少范围内的单元格被加载。
- Debug Color 启用预览网格时网格线框的显示颜色。
- Preview Grids 在视口中显示网格线。

为了支持大型场景的开发，所有网格单元一开始都处于卸载。关卡被打开后，编辑器只会加载那些把 Grid Placement 设置为 Always Loaded  的 Actor，例如场景背景和管理器。这样能方便那些不可能在编辑器中加载整张地图的大型场景。

你可以使用 Windows -> World Partition 世界分区窗口来手动选择要使用的网格单元。在窗口中，点击并拖动网格单元来选中它们。然后点击右键，打开上下文菜单，加载和卸载这些单元。


## ⚡ Level Streaming Volume

关卡流送体积域原理十分简单：流送关卡的加载/卸载请求基于视点是否处于关卡相关的关卡流送体积域中而发出。

具体而言，关卡流送体积域可以两种方式使用：

- 在游戏中，玩家视点处于体积域中时，关卡流送体积域将使关卡加载；玩家视点处于体积域外时，关卡将卸载。
- 编辑器中，关卡流送体积域可基于透视视口摄像机的位置自动隐藏/取消隐藏关卡，用于预览关卡流送。

基于体积域的关卡流送易于使用，不要求脚本编写，是控制关卡流送的理想方式。此外，与基于脚本的流送相比更易于维护：加载系统的需求发生变化时，调整体积域的大小即可对关卡加载/卸载行为进行修改。

先给固定关卡添加一个 Level Streaming Volume 组件，Place Actor -> Level Streaming Volume，并调整合适的位置和大小。增加体积可以让玩家更早进入而导致关联关卡更早加载，更晚卸载，而减少体积则会导致更晚加载， 更早卸载。

加载流送关卡后，到流送关卡的卸载请求之间的最小时间通过 Min Time Between Volume Unload Requests 来调整，默认卸载滞后量为 2.0 秒。

然后，进行通过 Details -> Level Streaming Volume 面板调整属性来设置处理关卡流送的方式：

- Streaming Levels 显示需要被流送的关卡，通过 Window -> Levels -> Summons Level Details 面板添加要流送的关卡；
- Editor Pre Vis Only 仅限编辑器预可视化，确定流送体积是否仅用于编辑器流送关卡预可视化。
- Disabled 是否禁用，如果为真，则按流送体积代码忽略流送体积。此外也用于禁用关卡流送体积而不将其与关卡分离，或者用于在蓝图和体积流送之间切换关卡流送的控制。
- Streaming Usage 确定体积的用途如下：
    - SVB Loading 控制流送关卡加载；
    - SVB Loading & Visibility 控制流送关卡加载和可视性；
    - SVB Visibility Blocking on Load 控制流送关卡可视性，但阻止加载；
    - SVB Blocking on Load 控制流送关卡可视性，但阻止加载；
    - SVB Loading Not Visibility 控制流送关卡加载但不可视性；

蓝图和 C++ 都可以通过 bDisabled 属性来切换 Level Streaming Volume 的禁用状态。

基于体积的关卡流送的工作说明，每个 Streaming Level 都可以关联一组 Level Streaming Volume。每一帧中，引擎方法 `UWorld::ProcessLevelStreamingVolumes` 会在每一关卡上迭代， 并检查玩家的视点是否位于与该关卡相关的任何 Level Streaming Volume内。如果该视点在至少一个 Level Streaming Volume 内，则发出请求以开始加载该关卡。如果该视点在所有 Level Streaming Volume 之外，关卡将标记为卸载。

重要细节信息：

- 所有 Level Streaming Volume 组件都必须存在于固定关卡中，并且，存在于其他关卡内的 Level Streaming Volume 不可用于关卡流送，并将在 检查地图错误时生成警告。
- 如果一个关卡具有任何与之关联的流送体积，则该关卡的其他流送方法将无法正确工作。
- 一个 Level Streaming Volume 组件可以影响多个关卡，类似地，一个关卡可以受多个 Level Streaming Volume 影响。
- 基于体积的流送可用于分割屏幕，在发出任何加载/卸载请求之前，所有本地玩家的视点都将予以考虑。
- Level Streaming Volume 的逻辑是追踪使用中摄像机的位置。因此，如果摄像机离玩家 Pawn 或角色较远，就需要相应地调整关卡流送体积的大小和放置。

设置操作步骤参考：

- 在 Place Actors 面板中，将一个 Volumes - Level Streaming Volume 拖入关卡。
- 调整其大小，使关卡流送体积包含整个角色可行走的区域，并且必需包含摄像机，事实是只需要摄像机可以进入这个区域即可。
- 打开关卡细节设置面板，Windows -> Levels -> Summons Level Details。
- 点击 Streaming Volumes 旁边的加号（+）新添加一个体积，然后使用下拉菜单或滴管选择前面创建的关卡流送体积对象。
- 确保 Initially Loaded 和 Initially Visible 复选框未勾选，保证其处于未加载及不可见状态，然后关闭 Level Details 面板。
- 返回视口，选择 Level Streaming Volume 对象，并在 Details 面板中设置体积的以下属性：取消勾选 Editor Pre Vis Only 和 Disabled；Streaming Usage 应被设为 SVB Visibility Blocking on Load。
- 使用 Play in Editor 测试流送关卡。



## ⚡ Level Streaming & Blueprint

使用蓝图流送关卡就像使用 C++ 一样调用相应的方法来实现关卡的流送。

需要做的就是用一个对象来模拟 Level Streaming Volume，并让指定角色对象与之触发一个事件，通常是 Overlap 事件，然后在这个事件内调用 Load/Unload Stream Level 这样的节点来加载或卸载流送关卡。通过蓝图设置方式，不必像 Level Streaming Volume 那样一定要摄像机与之交叠。

以下操作步骤使用 `LevelStreamer` 来充当 Level Streaming Volume，当角色与之发生 Overlap 事件时加载需要流送的关卡：

- 打开 Content Browser，新建一个 Actor 蓝图类，命名为 `LevelStreamer` 并保存。
- 在蓝图编辑器打开 `LevelStreamer`，在面板中为其添加碰撞检测组件 Components -> Add Component -> Box Collision。
- 保持 Components 标签中的 Box 组件处于选择状态。
- 打开蓝图的 EventGraph，右键呼出快捷菜单，输入 Begin Overlap，然后选择 Add On Component Begin Overlap 添加事件节点。
- 点击并从 Other Actor 引脚连出引线，然后在快捷菜单的搜索中输入"="，选择 Equal (Object) 节点，用于检查与之碰撞的是否为 `LevelStreamer`。
- 点击 == 节点的第二个 Object 引脚并连出引线，然后在快捷菜单的搜索中输入"character"。选择 `Get Player Character` 条目添加节点。
- 按住 B 键并在图表中点击添加一个 Branch 节点，然后将 == 节点的布尔引脚连接到 Branch 节点的输入。
- 将 OnComponentBeginOverlap 节点的执行输出引脚和 Branch 节点的执行输入引脚相连。
- 在图表中 单击右键，然后输入"level"在快捷菜单中进行搜索，从菜单中选择 `Load Stream Level`。
- 使用右键菜单将 Level Name 引脚提升为变量，将变量命名为 `LevelToStream`，在 Details 面板中勾选 `Instance Editable`，并编译保存。
- 在 Load Stream Level 节点上将 `Make Visible After Load` 和 `Should Block on Load` 勾选为 true。
- 将 Branch 节点的 True 执行输出引脚和 Load Stream Level 节点的输出执行引脚连接起来。
- 将 `LevelStreamer` 蓝图放入关卡，调整其放置和大小，与被流送的关卡内容位置大概匹配即可。
- 假定 SunTemple_Streaming 为被流送的关卡，将其设置给 `LevelStreamer` 的 `LevelToStream` 变量。

最后，使用 Play In Editor 测试流送关卡。

使用蓝图卸载关卡非常相似，只需在事件处理中使用 Unload Stream Level 节点结束。

需要注意，必需是当前关卡的子卡才可以流送的关卡。


## ⚡ Level Streaming & C++

基于脚本的关卡流送可以设置更复杂的关卡载入和卸载行为，也可设置关卡载入和卸载的蓝图或 C++ 逻辑。关键函数为 `UGameplayStatics` 提供的静态方法 Load Stream Level 和 Unload Stream Level，并指定关卡按命名加载。

在 Load Stream Level 和 Unload Stream Level 之外，Get Streaming Level 函数可实现更为动态的流送行为。利用它访问实际的关卡流送对象后，即可修改和查询其状态。结合 Create Instance 使用此函数，也可创建并流入特定关卡分段的副本。对这些副本应用变形和发送参数，即可创建程序化的世界场景。


参考官方文档使用 C++ 流入关卡提供的 LevelStreamerActor 示范，如下。使用一个 UBoxComponent 充当关卡流送体积域，当玩家与它触碰产生 Overlap 事件时执行关卡流送，分别在 BeginOverlap 和 EndOverlap 事件中执行流入和流出。

这样，玩家进入流送体积域时就会看到场景中加载了子关卡的内容，离开时内容又被移除。

LevelStreamerActor.h 如下：

```C++,
    #pragma once

    #include "GameFramework/Actor.h"
    #include "LevelStreamerActor.generated.h"

    UCLASS()
    class LEVELS_API ALevelStreamerActor : public AActor
    {
        GENERATED_BODY()

    public: 
        // 构造器中设置该 actor 属性的默认值
        ALevelStreamerActor();

        // 每帧调用
        virtual void Tick( float DeltaSeconds ) override;

    protected:

        // 游戏开始或生成时调用
        virtual void BeginPlay() override;

        UFUNCTION()
        void OverlapBegins(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult & SweepResult);
        UFUNCTION()
        void OverlapEnds(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

        UPROPERTY(EditAnywhere)
        FName LevelToLoad;

    private:
        // 重叠体积域触发关卡流送
        UPROPERTY(VisibleAnywhere, BlueprintReadOnly, meta = (AllowPrivateAccess = "true"))
        UBoxComponent* OverlapVolume;

    };
```

LevelStreamerActor.cpp 如下：

```C++,
    #include "Levels.h"
    #include "Kismet/GameplayStatics.h"
    #include "LevelStreamerActor.h"

    // 设置默认值
    ALevelStreamerActor::ALevelStreamerActor()
    {
        // 将此 actor 设为每帧调用 Tick()。不需要时可将此关闭，以提高性能。
        PrimaryActorTick.bCanEverTick = true;

        OverlapVolume = CreateDefaultSubobject<UBoxComponent>(TEXT("OverlapVolume"));
        RootComponent = OverlapVolume;

        OverlapVolume->OnComponentBeginOverlap.AddUniqueDynamic(this, &ALevelStreamerActor::OverlapBegins);
        OverlapVolume->OnComponentEndOverlap.AddUniqueDynamic(this, &ALevelStreamerActor::
    }
    // 游戏开始时或生成时调用
    void ALevelStreamerActor::BeginPlay()
    {
        Super::BeginPlay();

    }

    // 每帧调用
    void ALevelStreamerActor::Tick( float DeltaTime )
    {
        Super::Tick( DeltaTime );

    }

    void ALevelStreamerActor::OverlapBegins(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult & SweepResult)
    {
            ACharacter* MyCharacter = UGameplayStatics::GetPlayerCharacter(this, 0);
            if (OtherActor == MyCharacter && LevelToLoad != "")
            {
                FLatentActionInfo LatentInfo;
                UGameplayStatics::LoadStreamLevel(this, LevelToLoad, true, true, LatentInfo);
            }
    }

    void ALevelStreamerActor::OverlapEnds(UPrimitiveComponent* OverlappedComponent, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex)
    {
            ACharacter* MyCharacter = UGameplayStatics::GetPlayerCharacter(this, 0);
            if (OtherActor == MyCharacter && LevelToLoad != "")
            {
                FLatentActionInfo LatentInfo;
                UGameplayStatics::UnloadStreamLevel(this, LevelToLoad, LatentInfo);
            }
    }
```


## ⚡ Subsystems 编程子系统
- 虚幻引擎4编程子系统 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Subsystems/
- 《InsideUE4》GamePlay架构（十一）Subsystems https://zhuanlan.zhihu.com/p/158717151

虚幻引擎 4.22 GamePlay 架构中的子系统是生命周期受控的自动实例化类。这些类提供了易用的扩展点，程序员可直接获得这些子系统的蓝图和 Python 公开，同时避免繁复的引擎类修改或覆盖。

当前支持的子系统生命周期包括：

- *UEngineSubsystem* auto instanced and initialized systems that share the lifetime of the Engine
- *UEditorSubsystem* auto instanced and initialized systems that share the lifetime of the Editor.
- *UGameInstanceSubsystem* auto instanced and initialized systems that share the lifetime of the game instance.
- *ULocalPlayerSubsystem* auto instanced and initialized subsystem that share the lifetime of local players.
- *UWorldSubsystem* auto instanced and initialized systems that share the lifetime of a *UWorld*.

举例而言，如果创建了一个派生自游戏实例子系统基类的类：

    class UMyGamesSubsystem : public UGameInstanceSubsystem

将出现以下结果：

- 创建 *UGameInstance* 之后，还会创建一个名为 *UMyGamesSubsystem* 的实例。
- *UGameInstance* 初始化时，将在子系统上调用 *Initialize()*。
- *UGameInstance* 关闭时，将在子系统上调用 *Deinitialize()*。
- 此时将放弃对子系统的引用，如果不再有对子系统的引用，则其将被垃圾回收。

使用编程子系统有以下几个原因：

- 子系统可节省编程时间。
- 子系统使您无需覆盖引擎类。
- 子系统使您无需再已经很复杂的类上添加更多API。
- 子系统使您能通过用户友好的类型化节点来访问蓝图。
- 子系统允许访问Python脚本来编写编辑器脚本或编写测试代码。
- 子系统在代码库中提供模块化和一致性。

子系统在创建插件时尤为实用。您不需要代码相关的说明即可让插件工作。用户只需将插件添加到游戏中，就可以确切了解插件将在何时被实例化和初始化。因此，您可以专注于UE4中提供的API和功能的使用方式。

子系统将自动公开到蓝图，智能节点理解情境，且不需要强制转换。您可以使用标准的 UFUNCTION() 标记和规则来控制蓝图可以使用哪些API。

右键点击蓝图图表来显示快捷菜单并搜索"子系统"，将出现对应的子系统内容。这里有每个主要类型的类目，以及每个特定子系统的单个条目。

如果正在使用 Python，则可以用内置访问器来访问子系统，如下方示例所示。

```py
my_engine_subsystem = unreal.get_engine_subsystem(unreal.MyEngineSubsystem)
my_editor_subsystem = unreal.get_editor_subsystem(unreal.MyEditorSubsystem)
```
Python 当前是一个实验性功能。

当引擎子系统、编辑器子系统等模块加载时，子系统将在模块的 *Startup()* 函数返回后执行 *Initialize()*，子系统将在模块的 *Shutdown()* 函数返回后执行 *Deinitialize()*。

这些子系统通过 *GEngine* 或*GEEditor*这样的全局变量访问，如下所示。

```C++,
    class UMyEngineSubsystem : public UEngineSubsystem { ... };
    class UMyEditorSubsystem : public UEditorSubsystem { ... };
    class UMyGameSubsystem   : public UGameInstanceSubsystem { ... };
    class UMyPlayerSubsystem : public ULocalPlayerSubsystem { ... };

    UMyEngineSubsystem* MySubsystem = GEngine->GetEngineSubsystem<UMyEngineSubsystem>();
    UMyEditorSubsystem* MySubsystem = GEditor->GetEditorSubsystem<UMyEditorSubsystem>();

    UGameInstance* GameInstance = ...;
    UMyGameSubsystem* MySubsystem = GameInstance->GetSubsystem<UMyGameSubsystem>();

    ULocalPlayer* LocalPlayer = ...;
    UMyPlayerSubsystem * MySubsystem = LocalPlayer->GetSubsystem<UMyPlayerSubsystem>();
```

在以下示例中，为游戏添加一个统计数据系统，以跟踪收集资源的数量。

我们可以从 *UGameInstance* 派生，并创建 *UMyGamesGameInstance*，然后为其添加 *IncrementResourceStat()* 函数。然而我们知道，团队最终希望添加其他统计数据以及统计数据聚合器和统计数据的保存/加载等。因此，您决定将所有这些内容放入类中，例如 *UMyGamesStatsSubsystem*。

同样，我们可以创建 *UMyGamesGameInstance* 并添加 *UMyGamesStatsSubsystem* 类型的成员。然后我们可以向它添加一个存取器，并连接Initialize和Deinitialize函数。然而这会存在几个问题。

不存在 *UGameInstance* 的游戏特定导数。

*UMyGamesGameInstance* 存在，但是它已拥有大量函数，添加更多函数并不理想。

在一个足够复杂的游戏中，从 *UGameInstance* 进行派生有很多好处。然而当您拥有子系统时，便不需要使用它。最重要的是，较之于使用其他方法，使用子系统需要编写的代码更少。

因此，我们最终使用的代码将显示在下例中。

```C++,
    UCLASS()
    class UMyGamesStatsSubsystem : public UGameInstanceSubsystem
    {
        GENERATED_BODY()
    public:
        // Begin USubsystem
        virtual void Initialize(FSubsystemCollectionBase& Collection) override;
        virtual void Deinitialize() override;
        // End USubsystem

        void IncrementResourceStat();
    private:
        // All my variables
    };
```



# 🌟 Content Examples 模板工程分解
- Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/
- 内容示例 https://docs.unrealengine.com/4.27/zh-CN/Resources/ContentExamples/

官方提供的学习示范资源 Content Examples 包含大量基础的知识点示范案例，每个关卡就是一个主题教学内容。而这个示范项目本身的结构就是一个值得学习的主题内容，学习成熟的虚幻工程的组织和各种知识点的使用。

内容示例 Content Examples 是很好的学习途径，你可以在其中将示例资产与相关文档对照检索，以此加深印象。在内容示例项目中，每款示例都有一个单独的关卡。该项目可以从 Epic Games Launcher 的学习选项卡下载，搜索 Content Examples 就下载使用，内容大概 4GB。在关卡中移动时，你会看到一系列标有数字的底座，每个数字编号都代表着一套示例资产。你可以点击相应的编号并查看内容示例文档，了解该示例是如何被创建的。

可以打开任意内容示例关卡，改动或编辑它们，制作属于你自己的版本，并了解它们的构成方式。

先了解 Content Example 工程基本的构件：

- BP_Double_Doors 蓝图对象是一个带有开关动画效果的自动门，基于 Timeline 实现动画。



# 🌟 Puzzle 模板工程分解

以 Puzzle 蓝图工程为例，这个拼图游戏实现了用户点击一个棋盘格子就进行计分的简单逻辑，棋盘通过蓝图节点自动复制生成。

主要对象是位于 PuzzleBP/Blueprints 目录下的蓝图：

`PuzzleBlockGrid` 格子棋盘，层次结构包含 *DummyRoot* -> *ScoreText*，使用 TextRender 组件显示字符串信息。

- 它在 *BeginPlay* 事件中，使用 For Loop 初始化生成棋盘格子，尺寸在 *Size* 变量中指定为 3，即 3 X 3 大小。
    - 注意 For Loop 的 Last Index 使用序号基于 0 开始，所以 Size 经过 Multiply 乘方运算后，还要减一。
    - Loop Body 后使用 *SpawnActor* 生成格子对象 PuzzleBlock，并将 Owning Grid 设置 Self 即棋盘供格子对象引用。
    - PuzzleBlock 生成时的位置根据行列以及*BlockSpacing*变量中设置的默认间距 400 分布排列。
    - 使用 Integer Modulo 对当前序号 Index % Size 求余得到列位置，乘上间距即为 X 坐标。
    - 使用 Operators Divide 对当前序号 Index / Size 求商得到行位置，乘上间距即为 Y 坐标。
    - 使用 Make Vector 将 X/Y 坐标生成矢量，并与 GetActorLocation 获得的棋盘位置相加；
    - 使用 To Transform(Vector) 将上面得到的向量转换成转换矩阵输入 *SpawnActor* 的 Spawn Transform。
- 自定义事件 *AddScore* 是可以由外部调用的方法，格子对象会调用它来记录分数，其内部中处理分数的更新与显示。
    - 使用 Add 递增 *Score* 变量的值，并使用 Set 进行设置。
    - 经过 ToText(Integer) 转换为字符串，并使用 Format Text 格式化为 "Score:{Score}" 样式。
    - 格式化后的字符串传入 ScoreText 组件的 SetText 方法进行更新显示。

`PuzzleBlock` 即棋盘中的格子方块，层次结构包含 *DummyRoot* -> *BlockMesh* -> *Box*，它处理三类事件：

- 用户点击事件，包括*HandleControllerClick*，*BeginInputTouch*，*OnClicked*。
    - 使用 *IsActive* 变量来标记当前格子是不是已处理过，点击过的格子不再进行处理。
    - 使用 Set 节点将其设置为 True，并结合 Branch 来决定流程是否继续。
    - 使用 SetMaterial 改变 *BlockMesh* 的材质为 OrangeMaterial，
    - 调用 *OwingGrid* 引用 PuzzleBlockGrid 提供的 AddScore() 方法增加显示的分数。
- 自定义事件 *HighlightOn* 和 *HighlightOff* 供 VR 头载设备使用，使用*Highlighted?*变量标记是否处于焦点状态。处理鼠标滑过格子上面时，临时切换格子材质为 BaseMaterial 和 BlueMaterial。已经处理过的 IsActive 标记过的格子不进行响应。
- 在 *BlockMesh* 对象上启用 OnBeginCursorOver 和 OnEndCursorOver 事件，鼠标移动时就会滑过的焦点响应行为和上面一样。 

逻辑最多的是 `PuzzlePlayerCharater` 玩家角色对象，组件层次结构包括：

- Capsule Component(CollisionCylinder) 碰撞检测轮廓；
    - Arrow Component 朝向指示组件；
    - Mesh (Skeletal Mesh) 组件，不含内容；
    - VR_Camera 用于 VR 头戴设备的摄像机组件；
    - FP_Camera 用于第一人称角度的摄像机组件；
- Character Movement 组件；

它为需要为 VR 设备处理多个事件，使用了 *UHeadMountedDisplayFunctionLibrary* 函数库：

- *BeginPlay* 初始事件，根据 IsHeadMountedDisplayEnabled 方法来决定启用哪个摄像机，并调用 Camera 组件的 Active 方法激活。
- *Tick* 心跳事件，在 HMD 设备启用的条件下执行。
    - 使用 KismetSystemLibrary::LineTraceByChannel 进行光线碰撞追踪，并返回首个阻挡命中，只返回对特定追踪通道响应的对象。
    - 配合摄像机的 GetWorldLocation、GetWorldRotation、GetForwardVector 来产生光线的起止定位点。
    - 对输出的 HitResult 使用 Break Hit Result 来获取 Hit Actor 即碰撞到的对象，并尝试转换为 Cast To PuzzleBlock。
    - 如果转换成功，就保存到 *CurrenBlockFocus* 变量便于后继引用，并执行 `PuzzleBlock` 的 *HighlightOn*、*HighlightOff* 事件。
- 另外两个输入映射事件，*ResetVR* 和 *TriggerClick*
    - 在工程设置 Engine -> Input -> Action Mapping 配置中，添加了 ResetVR 和 TriggerClick。
    - *TriggerClick* 事件根据 *CurrenBlockFocus* 是否有效引用棋盘格子对象，来决定是否调用它的 *HandleControllerClick* 方法。
    - *ResetVR* 事件处理头戴设备的重置，调用 ResetOrientationAndPosition 方法。

`PuzzleGameMode` 游戏模式对象，它的设置决定了如何开始游戏，双击打开游戏模式蓝图，在 Details 面板中显示以下主要的设置：

- Default Pawn Class 默认的玩家控制角色对象类型，开始游戏时，引擎会自动为玩家创建一个实例。
- Play Controller Class 玩家控制器类型，这个类决定了如何操纵玩家的角色。这个游戏控制器本身不做什么特别的事。只是修改一下默认的配置，主要是 Mouse Interface 中的设置，启用了以下各种涉及的鼠标或触摸板事件：
    - Show Mouse Cursor
    - Enable Click Events
    - Enable Touch Events
    - Enable Mouse Over Events
    - Enable Touch Over Events
    - Default Mouse Cursor 光标显示风格

在 World Settings 面板中，可以能完 Lightmass Settings 设置环境色和环境色强度等参数改变光线效果，Environment Color/Intensity。

PuzzleBP 目录下还有 Maps 中的关卡地图，它只是简单放置了棋盘和玩家对象实例。Tutorial 子目录下的是教程，这些对象是通过内容浏览器创建的，右键菜单 Miscellaneous -> Tutorial Blueprint，它可以按步骤地解析项目的结构。教程蓝图对象也是模块的一种，也需要实现 IModuleInterface 接口，参考代码 IntroTutorials.h，阅读 *StartupModule()* 和 *ShutdownModule()* 函数的逻辑。

此外，还有 Puzzle/Meshes 目录下的简单模型和材质，就一个方块和其它纯色材质。





# 🌟 UMG UI 界面框架
- Introduction to UIs in Unreal https://benui.ca/unreal/ui-introduction/
- http://jollymonsterstudio.com/2019/03/12/unreal-engine-c-fundamentals-ahud-uuserwidget-and-uwidgetanimation/
- https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/Blueprints_HUD/1_1/

UMG（Unreal Motion Graphics）是基于 Slate UI 封装开发的 GUI，可在编辑设计，支持蓝图、C++ 访问。

UMG 基于原 Slate UI 开发封装的 GUI，提供了现成的常用 UI 组件，还添加了很多事件和方法并支持蓝图编辑。Slate 则是完全 C++ 代码化，所有布局和组件创建只能用 C++ 实现，当然 Slate 提供更底层的组件灵活度要更高，如 SSplitter 等，更便于开发复杂 UI。

基于 Slate 框架逻辑，UGM 也使用槽位 Slot 的概念，即可以嵌套放置子元件。

- 不可以包含子层的对象有： Image, TextBlock
- 只能包含一个子对象的有： UserWidget root, Border, NamedSlot
- 可以包含多个子对象的有： CanvasPanel, Overlay, WidgetSwitcher, HorizontalBox, VerticalBox

常用元件如下：

- 基本元件： Image, TextBlock, Button
- 基本容器： Overlay, Canvas, HorizontalBox, VerticalBox, UniformGrid
- 边框元件： Border
- 补充元件： NamedSlot, RetainerBox

*UserWidget* 是最基本的元件，它可以创建任何可复用的 UI 对象：

- 使用 `UserWidget` 来自定义包含其它按钮实例的按钮，并且含有 `TextBlock` 作为标签，还有 `Image` 作为按钮图标。
- 使用 `Userwidget` 来制作 HP 血条，内含 `ProgressBar` 零件，并且设置其百分比属性，还可以包含 `TextBlock` 来显示具体数值。
- 使用 `UserWidget` 来制作 Tooltip，内含 `Image` 做装饰，还有 `NamedSlot` 来插入内容元件。

通常通过内容浏览器的 User Interface -> Widget Blueprint 创建蓝图扩展类。



## ⚡ UMG 组件层次结构
- Widget Type Reference https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/UMG/UserGuide/WidgetTypeReference/
- Widget Interaction Component https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/UMG/UserGuide/WidgetInteraction/
- Widget Component https://docs.unrealengine.com/4.27/en-US/Basics/Components/Widget/

UMG 中常用的 UWidget 控件类型有四种：

- Common
- Input
- Panel
- Miscellaneous

此外，还有用户控件，从内容浏览器中创建的 User Interface -> Widget Blueprint 是基于 UUserWidget 创建的。用户创建的、可放在另一个控件蓝图中的 控件蓝图。非常适用于创建 UI 元素"部件"作为个体控件蓝图，然后将它们添加到一起，构造整体 UI 布局。

UMG 组件层次结构如下，底层主要是是 UVisual 类下的两个分支，它本身不做什么。*UPanelSlot* 用于组件槽位逻辑，*UWidget* 用于可视 UI 组件：

                        +=============+
                        |   UObject   |
                        +=============+
                               |
                        +======v======+
                        |   UVisual   |
                        +=============+
                               |
           +-------------------+-----------------+
           |                                     |
    +============+                         +=====v=====+
    | UPanelSlot |                         |  UWidget  |
    +============+                         +===========+
          |     +-------------------------+      |     +===================+            +===================+           +---------------------+
          +---> | UBackgroundBlurSlot     |      +---> | UPanelWidget      |----->+---> | UContentWidget    |---->+---> | UBackgroundBlur     |
          |     +-------------------------+      |     +===================+      |     +===================+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UBorderSlot             |      +---> | UComboBox         |      +---> | UGridPanel        |     +---> | UBorder             |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UButtonSlot             |      +---> | UComboBoxString   |      +---> | UHorizontalBox    |     +---> | UButton             |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UGridSlot               |      +---> | UEditableText     |      +---> | UOverlay          |     +---> | UCheckBox           |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UHorizontalBoxSlot      |      +---> | UEditableTextBox  |      +---> | UScrollBox        |     +---> | UInvalidationBox    |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UOverlaySlot            |      +---> | UExpandableArea   |      +---> | UUniformGridPanel |     +---> | UMenuAnchor         |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | USafeZoneSlot           |      +---> | UImage            |      +---> | UVerticalBox      |     +---> | UNamedSlot          |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UScaleBoxSlot           |      +---> | UInputKeySelector |      +---> | UWidgetSwitcher   |     +---> | URetainerBox        |
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+      |     +-------------------+     |     +---------------------+
          +---> | UScrollBoxSlot          |      +---> | UNativeWidgetHost |      +---> | UWrapBox          |     +---> | USafeZone           |
          |     +-------------------------+      |     +-------------------+            +-------------------+     |     +---------------------+
          |     +-------------------------+      |     +===================+            +===================+     |     +---------------------+
          +---> | USizeBoxSlot            |      +---> | UListViewBase     |----->----> | UListView         |     +---> | UScaleBox           |
          |     +-------------------------+      |     +===================+            +===================+     |     +---------------------+
          |     +-------------------------+      |     +-------------------+                      |               |     +---------------------+
          +---> | UVerticalBoxSlot        |      +---> | UProgressBar      |            +---------v---------+     +---> | USizeBox            |
          |     +-------------------------+      |     +-------------------+            | UTileView         |     |     +---------------------+
          |     +-------------------------+      |     +-------------------+            +-------------------+     |     +---------------------+
          +---> | UUniformGridSlot        |      +---> | UScrollBar        |            +-------------------+     +---> | UViewport           |
          |     +-------------------------+      |     +-------------------+            | UTreeView         |     |     +---------------------+
          |     +-------------------------+      |     +-------------------+            +-------------------+     |     +---------------------+
          +---> | UWidgetSwitcherSlot     |      +---> | USlider           |                                      +---> | UWindowTitleBarArea |
          |     +-------------------------+      |     +-------------------+                                            +---------------------+
          |     +-------------------------+      |     +-------------------+            +--------------------------+
          +---> | UWindowTitleBarAreaSlot |      +---> | UTextLayoutWidget |------+---> | UMultiLineEditableText   |
          |     +-------------------------+      |     +-------------------+      |     +--------------------------+
          |     +-------------------------+      |     +-------------------+      |     +--------------------------+
          +---> | UWrapBoxSlot            |      +---> | USpinBox          |      +---> | UMultiLineEditableTextBox|
                +-------------------------+      |     +-------------------+      |     +--------------------------+
                                                 |     +-------------------+      |     +--------------------------+
                                                 +---> | USpacer           |      +---> | URichTextBlock           |
                                                 |     +-------------------+      |     +--------------------------+
                                                 |     +-------------------+      |     +--------------------------+
                                                 +---> | UThrobber         |      +---> | UTextBlock               |
                                                 |     +-------------------+            +--------------------------+
                                                 |     +-------------------+
                                                 +---> | UCircularThrobber |
                                                 |     +-------------------+
                                                 |     +-------------+
                                                 +---> | UUserWidget |
                                                       +-------------+


*UMeshComponent* 继承 3D 组件，为 2D UI 组件三角化渲染提供支持，而 *UWidgetInteractionComponent* 提供交互能力支持：

                       +============+
                       |   UObject  |
                       +============+
                             |
                  +==========v==========+
                  |   UActorComponent   |
                  +=====================+
                             |
               +----------------------------+
               |                            |
    +==========v==========+       +=========v=========+
    | UPrimitiveComponent |       |  USceneComponent  |
    +=====================+       +===================+
               |                            |
    +==========v==========+  +==============v==============+
    |   UMeshComponent    |  | UWidgetInteractionComponent |
    +=====================+  +=============================+
               |
    +==========v==========+
    |  UWidgetComponent   |
    +=====================+

所以，在 3D 场景中要使用 UWidget 组件，就需要通过以下两个组件来实现，为 Widget Component 组件的 Widget Class 属性指定 UI 组件类。



## ⚡ UserWidget UMG 组件绘制
- UMG 虚幻运动图形界面 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/UMG/
- Unreal Motion Graphics UI Designer (UMG) https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/UMG/
- UMG UI Designer Quick Start Guide https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/UMG/QuickStart/

UMG 通过内容浏览器的 User Interface 提供选项：

- Font 
- State Brush
- State Widget Style
- Widget Blueprint 创建 UserWidget 的蓝图扩展类，然后可以使用编辑器创建 UI 组件界面。

创建所有用户界面元素（HUD、菜单等）并放置在控件蓝图中。控件蓝图允许您以可视化方式对 UI 元素进行布局，并为这些元素提供脚本化功能。

使用蓝图向关卡添加 UMG WidgetBlueprint：

- 创建 UI 控件：Content Browser -> User Interface -> Widget Blueprint，命名为*MyWidget_BP*；
- 双击打开 *MyWidget_BP*，在 UI 编辑器中设计好需要的界面元素，比如添加一个按钮；
- 打开关卡蓝图，添加 BeginPlay 节点，从执行流输出端引出，创建一个 Create Widget 节点，并设置 Class 端口为 *MyWidget_BP*；
- 再从 Return Value 即已经创建的*MyWidget_BP*实例引出一个 Add To View 节点，即调用*AddToViewport*方法将 UI 控件实例添加到关卡中。
- 可以使用一个蓝图变量，比如 *WidgetRef* 将创建好的实例引用起来，使用 Set WidgetRef 节点保存引用，后继需要做数据驱动显示，就用得上。
- 拖出 Set 节点的输出引脚，再添加 Add to Viewport 节点。

这些设置将在游戏启动时创建我们的 HUD 控件蓝图，并将其存储为一个变量，以便稍后访问。这对于以后调用函数或设置 HUD 的属性很有用，例如，如果您想在游戏暂停时隐藏 HUD，可以通过该变量访问 HUD。


双击 HUD 控件蓝图以打开控件蓝图编辑器（Widget Blueprint Editor），在控件蓝图编辑器中提供了 HUD 的视觉效果布局和脚本功能。在控件蓝图编辑器的右上角可以切换 Graph 和 Designer 工作模式切换。

现在，切换到 Graph 中的 Event Construct 节点下，右键单击并添加 Get Player Character 节点，获取玩家对象引用并存储到蓝图变量。UI 界面需要使用玩家的信息就需要通过它来获取数据，比如玩家蓝图中定义好了子弹数量 *Ammo* 等变量。

拖出返回值（Return Value）引脚，并经过 Cast to 节点转换类型，假定玩家对象的类型为 *FirstPersonCharacter*。执行流从 Event Construct 节点引入。

现在切换到 Designer 工作模式，给 UI 界面添加一个 Text 文本控件，在 Details -> Content 属性中，使用下拉列表可以看到已经有*FirstPersonCharacter*的属性供绑定使用，可以选择其提供的 *Ammo* 变量。也可以点击 Bind -> Create Binding 来创建一个绑定函数，默认有 Get Text 和 Return Node 两个节点，前面一个是执行流入的节点。现在，只需要使用前面保存到变量中的玩家引用读取其 *Ammo* 变量的数据，再连接到 Return Node 即完成设置。连接时将自动为您创建一个转换节点 To Text 将数值转换为字符串。

就像使用 Sub-Object Properties 绑定相同类型的属性一样，我们也可以创建自己的自定义绑定。这里，我们将文本控件的 Text 属性绑定到玩家角色蓝图中的一个类型为 Integer 的属性，以显示当前弹药。

单击 Compile 编译蓝图并且保存，注意更改玩家的蓝图后也要进行编译，否则在 UI 控件的蓝图中可以获取不到相应的信息。

现在，可以按同样的方法将生命值（Health）、能量（Energy）和弹药（Ammo）值都显示在的 HUD 上，并反映我们角色蓝图中的当前值。

然后单击 Play 按钮以在编辑器中运行测试，看数据是不是和显示的一致。

源代码参考：

- UMG/Public/Blueprint/UserWidget.h

后续学习 UMG 的设计，并且可以按不同的任务制作不同的 HUD 界面，通过蓝图来切换显示。


使用 SceneCaptureComponent2D 可以实现场景中的图像捕捉，结合 HUD 还可以显示在屏幕上，操作如下：

- 创建 Scene Capture 2D，从 Place Actors 面板中拖放到场景中，设置好镜头。
- 在 Details -> Scene Capture 面板中设置`Texture Target`，将摄像机采集到的图像转储到 `TextureRenderTarget` 或 `CanvasRenderTarget`。
- Primitive Render Mode 渲染模式指定为 Use ShowOnly List。
    - Render Scene Primitives(Legacy)，使用黑名单数组(Hidden Actors) ，指定不被摄像机捕捉的 Actors。
    - Render Scene Primitives，基本图元渲染，摄像机捕捉所有 Actors。
    - Use ShowOnly List，使用白名单数组(Show Only Actors)，摄像机只捕捉指定的 Actors。
- CaptureSource 设置为 SceneColor（HDR）in RGB，Inv Opacity in A，即默认，空间颜色输出为 RGB，透明度输出到蓝图 A 端口。
- 通过 RenderTarget 创建材质，并设置 `Texture Sample` 输入节点的纹理为上面输出的 `TextureRenderTarget` 文件。
- 将 RGB 连接到材质输出端 Final Color，将 A 输出的 Alpha 信息，经过一个 OneMinus 节点取反再接入 Opacity Mask 用于过滤背景。
- 创建 User Interface -> Widget Blueprint，使用 Image 组件，指定 Appearance -> Brush -> Image 为上面得到的材质。

如果要基于 RenderTarget 创建材质，则要设置属性材质属性 Material Domain -> Uer Interface，如此该材质才可以在 UI 上使用。


## ⚡ UWidget & UUserWidget UMG 组件开发
- Unreal UIs and C++: Slate https://benui.ca/unreal/ui-cpp-slate/
- Creating new UWidgets in C++ https://benui.ca/unreal/ui-cpp-uwidget/
- Creating a UserWidget in C++ https://benui.ca/unreal/ui-cpp-uuserwidget/

通过 C++ 扩展 UUserWidget 创建设计良好的 UMG Widget 或子类，可以提供代码重用效率。

比如，带图标的按钮，到处都需要用到，UButton::RebuildWidget 方法提供给使用者一定的灵活度，让用户可以绑定自己的事件处理函数。

以下示范在 RebuildWidget() 函数中创建一个 Slate 按钮组件 SButton：

```C++,
    TSharedRef<SWidget> UButton::RebuildWidget()
    {
        MyButton = SNew(SButton)
            .OnClicked(BIND_UOBJECT_DELEGATE(FOnClicked,
                SlateHandleClicked))
            .OnPressed(BIND_UOBJECT_DELEGATE(FSimpleDelegate,
                SlateHandlePressed))
            .OnReleased(BIND_UOBJECT_DELEGATE(FSimpleDelegate,
                SlateHandleReleased))
            .OnHovered_UObject(this, &ThisClass::SlateHandleHovered)
            .OnUnhovered_UObject(this, &ThisClass::SlateHandleUnhovered)
            .ButtonStyle(&WidgetStyle)
            .ClickMethod(ClickMethod)
            .TouchMethod(TouchMethod)
            .IsFocusable(IsFocusable)
            ;

        if ( GetChildrenCount() > 0 )
        {
            Cast<UButtonSlot>(GetContentSlot())
                ->BuildSlot(MyButton.ToSharedRef());
        }
        
        return MyButton.ToSharedRef();
    }
```

UOverlay 组件扩展示范：

```C++,
    // ExampleOverlay.h
    UCLASS()
    class UExampleOverlay : public UOverlay
    {
        GENERATED_UCLASS_BODY()
    public:

    #if WITH_EDITOR
        virtual const FText GetPaletteCategory() override;
    #endif

    protected:
        // UWidget interface
        virtual TSharedRef<SWidget> RebuildWidget() override;
        // End of UWidget interface
    };


    // ExampleOverlay.cpp
    #define LOCTEXT_NAMESPACE "ExampleUMG"

    TSharedRef<SWidget> UExampleOverlay::RebuildWidget()
    {
        auto Result = Super::RebuildWidget();

        for (UPanelSlot* InSlot : Slots)
        {
            // Do something custom
        }

        return Result;
    }

    #if WITH_EDITOR
    const FText UExampleOverlay::GetPaletteCategory()
    {
        return LOCTEXT("ExampleUI", "ExampleOverlay");
    }
    #endif
```




# 🌟 Slate UI 界面框架
- Slate UI 框架 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Slate/

UE4 的编辑器是基于 Slate UI 框架创建的，包括 UE4 用于游戏的 UMG 也是。

何时该使用 Slate UI 而不是 UMG 的一些提示：

- 创建 Editor UI 时，因为 Slate 更底层，可定制的灵活度更高，适合千奇百怪的 UI 功能。
- 需要实现当前 UMG 组件都不支持的功能时，使用 Slate 而不是 UMG。

UE 4.22 开始，可以使用 UMG + Blueprints 修改虚幻编辑器的用户界面，使用 Editor Utility Widgets 来添加新的 UI 元素。编辑器工具控件基于虚幻运动图形 UMG，所以您可以像在任何其他 UMG 控件蓝图中一样设置蓝图中的控件。

这些控件专门用于编辑器 UI，可以使用它们来创建自定义编辑器选项卡。然后，可以从窗口菜单中选择这些自定义选项卡，就像选择现有的编辑器选项卡一样。


Slate UI 系统随编辑器、引擎源码一起开源，包括开发者工具 Window > Developer Tools > Widget Reflector。

虚幻编辑器的 UI 是使用 Slate UI 框架编译的，Widget Reflector 工具让开发人员可以标识要用于为工具集渲染不同控件的 Slate API。

或者键入 Ctrl + Shift + W 或在控制台中输入 WidgetReflector 以打开工具。

Slate 的初衷来自对现有可用 UI 解决方案的审视。

在多数工具包中从控件构建 UI 已非难处。而难处在于：

- UI 设计和迭代。
- 控制数据流：通常视为控件（视图）和基层数据（模型）之间的绑定。
- 学习描述 UI 的其他语言。

IMGUI 直接模式图形用户界面优点：

- 程序员喜欢 UI 描述"接近"代码，易于获取数据。
- 失效不会成为问题，直接轮询数据即可。
- 易于程序化构建界面。

IMGUI 的缺点：

- 添加动画和设计较难。
- UI 描述为命令式代码，因此无法将其设为数据驱动。

所需的 Slate 特性：

- 易于访问模型的代码和数据。
- 支持程序化 UI 生成。
- UI 描述不易出错。
- 支持动画和设计。

核心原则旨在设计尽量提高开发效率，程序员的时间很宝贵，而 CPU 快速且开销较低。

- 防止不透明缓存和重复状态。以往，UI 缓存状态并要求显式失效。Slate 使用以下方法（按优先到非优先排列）：
    - 轮询
    - 透明缓存
    - 带粗粒度失效的不透明缓存
- UI 结构变化时优先轮询到通知。（需要通知时，优先粗粒度通知到细粒度通知。）
- 放置反馈循环。举例而言，所有布局均从程序员设置计算，不会依赖于之前的布局状态。
    - UI 状态成为模型是唯一的例外。例如滚动条可见 UI 状态。
    - 操作目的是针对正确性和程序完整性，而非性能。
- 为需要大量一次性操作的凌乱 ad-hoc 式 UI 做好计划。理解使用情况后，将它们归纳到一个较好的系统中。

Slate 是一个 IMGUI 即时模式的 UI 框架，这意味着它会在每一帧中重新绘制整个 UI。这对于具有丰富的图形和动画的动态接口非常有用，但 当 UI 中无需更改任何内容时，会导致不必要的处理器使用。在 Slate 中使用活跃定时器系统允许它在 无需更新 UI 时进入休眠状态。在编辑器 UI 上工作时应该使用活跃定时器功能，而在 UI 上使用实时视口进行游戏工作时则不应该使用该功能。

对于给定帧，同时满足以下两个条件时，Slate 就会休眠：

- 没有用户操作，用户操作为任何鼠标移动、单击或按键。
- 无需执行 Active Timers 活跃定时器


Slate 控件可以用于在游戏中创建平头显示信息(HUD)或其他用户界面(UI)元素， 比如菜单。你一般可以创建一个或多个容器控件，每个容器可以包含几个其他类型的控件， 这些控件负责用户界面的特定方面。

比如，你可能具有一个针对游戏 HUD 的总体控件，同时具有针对主菜单、 选项菜单、暂停菜单、记分板等的各种控件。每种控件又可能由其他 自定义控件、标签、文本框、图片及其他类型的元素构成。

然后，可以根据游戏情境添加或删除这些容器控件：

- 当游戏启动时，将添加主菜单控件。
- 当他们选择菜单中的其中一个选项时 - 可能是启动游戏 - 那么主菜单控件将会被删除。
- 如果玩家在任何时候暂停了游戏，那么将会添加暂停菜单控件。
- 当游戏继续时，将会删除暂停菜单控件。
- 当为玩家初始化了 HUD 时，将会添加 HUD 控件。

使用 Slate UI 框架，必须正确设置项目，以便它能识别出框架。添加 Slate.h 头文件并引用框架中的各种元素 从而构建 Slate UI。

Slate 框架保存在若干个模块中，必须在 `*.build.cs` 文件中为项目设置这些依赖项。

以下是你的项目需要访问的模块及其依赖项类型：

- InputCore 公有
- Slate 私有
- SlateCore 私有

设置 Slate 模块的依赖项：

打开你的项目的 build.cs 文件，位于 Source 目录中。

添加 InputCore 公有依赖项：

    PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore" });

代码类项目被创建时，InputCore 模块会被默认设置为公有依赖项。

添加 Slate 和 SlateCore 私有依赖项：

    PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });


## ⚡ Slate 组件开发
- Unreal UIs and C++: Slate https://benui.ca/unreal/ui-cpp-slate/
- Creating new UWidgets in C++ https://benui.ca/unreal/ui-cpp-uwidget/

和封装 Slate UI 实现的 UMG UI 不同，Slate UI 框架的语法更特别，或者说更不像 C++ 代码。

以下示范如何定义一个带有图标和文本的按钮：

```C++
SNew( SButton )
+ SButton::Slot()
[
    SNew( SHorizontalBox )
    + SHorizontalBox::Slot()
        .VAlign( VAlign_Center )
        .HAlign( HAlign_Center )
    [
        SNew( SImage )
            .Image( MyIconBrush )
    ]
    + SHorizontalBox::Slot()
        .VAlign( VAlign_Center )
        .HAlign( HAlign_Fill )
    [
        SNew( STextBlock )
            .Text( FText::FromString( "Click me!" ) )
    ]
]
```

如何已经了解如何用 C++ 扩展 UMG 组件，这些代码看起来会有点眼熟：

- 注意 + 号这个运算符，它表示将组件排列在一起。
- *SButton* 是 Slate 构架中的按钮组件。
- SButton::Slot() 表示一个可以放置其它组件的槽位，它含有各种参数，可以在蓝图编辑器中查看。
- *SHorizontalBox* 是水平布局格子，等价 UMG UHorizontalBox。

事实上，SButton 不等价 UButton，但是 UMG 通过包装 SButton 来实现 UButton：

```C++,
    class UButton : public UVisual
    {
    // ...
        /** Cached pointer to the underlying slate
            button owned by this UWidget */
        TSharedPtr<SButton> MyButton;
    };
```

扩展现有的 Slate 组件使用的 C++ 代码初一看是有点怪的，它和 UE 引擎一样使用了多种宏定义。

学习 Slate 最好的方法就是，复制和扩展现有的小部件。例如，创建一个支持多个图像的 SImage，让这些图像相互叠加。

去 Unreal Engine 安装目录打开 SImage 的源代码，试着阅读，掌控关键的信息：

```C++,
    SLATE_BEGIN_ARGS( SImage )
        : _Image( FCoreStyle::Get().GetDefaultBrush() )
        , _ColorAndOpacity( FLinearColor::White )
        , _FlipForRightToLeftFlowDirection( false )
        { }

        /** Image resource */
        SLATE_ATTRIBUTE(const FSlateBrush*, Image)

        /** Color and opacity */
        SLATE_ATTRIBUTE(FSlateColor, ColorAndOpacity)

        /** When specified, ignore the brushes size and report the DesiredSizeOverride as the desired image size. */
        SLATE_ATTRIBUTE(TOptional<FVector2D>, DesiredSizeOverride)

        /** Flips the image if the localization's flow direction is RightToLeft */
        SLATE_ARGUMENT( bool, FlipForRightToLeftFlowDirection )

        /** Invoked when the mouse is pressed in the widget. */
        SLATE_EVENT(FPointerEventHandler, OnMouseButtonDown)
    SLATE_END_ARGS()
```

- 构造器如何初始化 Slate 组件；
- *SLATE_BEGIN_ARGS* 宏表示后续可以开始定义组件属性。
- *OnPaint* 组图函数决定了组件呈现什么样子。

尝试扩展一个组件，可以选择各种现有的组件作为父类，SLeafWidget、SPanel，或者 SCompoundWidget 这个最为通常的组件。

以下是 ExampleSlate.h 示范：

```C++,
    #pragma once

    #include "CoreMinimal.h"

    class SExampleSlate : public SCompoundWidget
    {
        SLATE_BEGIN_ARGS(SStandardSlateWidget){}

        // See private declaration of OwnerHUD below.
        SLATE_ARGUMENT(TWeakObjectPtr<class AStandardHUD>, OwnerHUD)
     
        SLATE_END_ARGS()
     
    public:
      // Required
        void Construct(const FArguments& InArgs);

        // Begin SWidget interface
        void OnArrangeChildren(const FGeometry& AllottedGeometry, FArrangedChildren& ArrangedChildren) const override;
        virtual FReply OnMouseMove(const FGeometry& MyGeometry, const FPointerEvent& MouseEvent) override;
        virtual void Tick(const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime) override;
        // End SWidget interface

     
    private:
        TWeakObjectPtr<class AStandardHUD> OwnerHUD;
    };
```

在这个列子中，并不能直接体现使用 C++ 扩展 Slate UI 比 UMG UI 的强大之处。 

然而，对于原始的、更复杂的行为，不能分解为现有 Slate 组件的需求，创建一个新的 Slate 组件是您唯一的选择。




## ⚡ SWidget 类层次结构
- Slate 初探: Editor UI https://www.cnblogs.com/shiroe/p/14826787.html

SNew 和 SAssignNew

- SNew( SlateWidget )，返回智能引用 *TSharedRef*；
- SNew( SWeakWidget ).PossiblyNullContent()；
- SAssignNew( TSharedPtr<SlateWidget>，SlateWidget），返回智能指针 *TSharedPtr*；
- SAssignNew( SWidget, SWeakWidget).PossiblyNullContent()；

Slate 框架逻辑层模块 Slate、SlateCore，渲染模块 SlateRHIRenderer。UI 基类是 *SWidget*。槽位 Slot 可以放置 SWidget。


                                +=========+
                                | SWidget |
                                +=========+

                                     |
                  +------------------+-------------+---------------------------------------+
                  |                                |                                       |
            +=====v=====+                 +========v========+                       +======v======+
            |  SPanel   |                 | SCompoundWidget |                       | SLeafWidget |
            +===========+                 +=================+                       +=============+
                  |                                |                                       |
          +-------+-------+              +---------+---------+                +------------+
          |               |              |                   |                |
    +=====v=====+   +=====v====+    +====v====+       +======v======+     +===v====+
    | SBoxPanel |   | SOverlay |    | SWindow |       | SUserWidget |     | SImage |
    +===========+   +==========+    +=========+       +=============+     +========+
          |                                                                   |
          |  +==============+                                         +=======v=======+
          +--| SVerticalBox |                                         | SLayeredImage |
          |  +==============+                                         +===============+
          |  +==============+  
          +--| SVerticalBox |   
             +==============+

    +=======================+
    | FSlateApplicationBase |
    +=======================+
                |
      +=========v=========+
      | FSlateApplication |
      +===================+



## ⚡ Widget Adding/Removing

游戏视口是 `GameViewportClient` 类的一个实例。当前游戏视口的引用可以通过 `GameViewport` 成员获得，该成员可以通过使用到游戏当前 UEngine 实例 的`GEngine` 指针访问。

因为 GEngine 和 GameViewport 都可以为 NULL ，所以在你尝试访问它们或者 其任何成员时，总是应该判断它们的值。

Slate 控件通过向 GameViewportClient::AddViewportWidgetContent() 传入一个控件的共享引用，确切地说是 `TSharedref<SWidget>` 来添加到视口中。该函数取入一个控件和 Z-Order 即决定新控件的排列顺序，Z 排序是可选的，其默认值为 0。

到你想添加到视口中的控件的引用可以存储为某个类的一个成员，比如你的 HUD， 或者可以在调用该函数时创建及传入该控件。

传入一个存储在成员变量中的控件引用 TSharedPtr：

```cpp
GEngine->GameViewport->AddViewportWidgetContent(
    SNew(MyWidgetPtr.ToSharedRef())
);
```

当将控件传入到 GameViewportClient::AddViewportWidgetContent() 时使用 SNew() 创建该控件：

```cpp
GEngine->GameViewport->AddViewportWidgetContent(
    SNew(SWeakWidget)
    .PossiblyNullContent(MyWidgetClass)
); 
```

或者使用 SAssignNew() 来创建控件，并将它分配给 TSharedPtr 成员，然后传入它：

```cpp
GEngine->GameViewport->AddViewportWidgetContent(
    SAssignNew(MyWidgetPtr, SWeakWidget)
    .PossiblyNullContent(MyWidgetClass)
);
```

可以从视口中单独地删除 Slate 控件，也可以通过调用 RemoveAllViewportWidgets() 删除所有控件。

```cpp
GEngine->GameViewport->RemoveAllViewportWidgets();
GEngine->GameViewport->RemoveViewportWidgetContent(
    SNew(MyWidgetPtr.ToSharedRef())
);
```



## ⚡ HUD & Slate UI 绘制

构架提供的示范参考代码 UE_5.0EA\Engine\Source\Runtime\AppFramework\Private\Framework\Testing\SLayoutExample.cpp ...

使用蓝图扩展创建 GameModeBase，命名为 *MyGameMode_BP*，并配置为当前关卡的 GameMode：

- 关卡 World Setting->GameMode Override 设置为 MyGameMode_BP
- 设定 HUDClass 为 AMyHUD；

创建 HUD 派生类：AMyHUD

```C++,
    #pragma once
    #include "CoreMinimal.h"
    #include "GameFramework/HUD.h"
    #include "MyHUD.generated.h"
    UCLASS()
    class DESIGNPATTERNS_API AMyHUD : public AHUD
    {
        GENERATED_BODY()
    public:
        virtual void BeginPlay() override;

        void ShowMySlate();
        void RemoveMySlate();

        // 使用 class 声明，没有 include 头文件
        TSharedPtr<class SMyCompoundWidget> MyCompoundWidget;

        // 添加视口方法三
        TSharedPtr<SWidget> WidgetContainer;
    };

    #pragma once
    #include "MyHUD.h"
    #include "Kismet/GameplayStatics.h"
    #include "SMyCompoundWidget.h"
    #include "Widgets/SWeakWidget.h"

    void AMyHUD::BeginPlay()
    {
        Super::BeginPlay();
        ShowMySlate();
    }

    void AMyHUD::ShowMySlate()
    {
        if (GEngine && GEngine->GameViewport)
        {
            // 第二个参数为 ZOrder,默认为 0
            //GEngine->GameViewport->AddViewportWidgetContent(SNew(SMyCompoundWidget), 0);
            //GEngine->GameViewport->AddViewportWidgetContent(SAssignNew(MyCompoundWidget, SMyCompoundWidget));
            
            MyCompoundWidget = SNew(SMyCompoundWidget).OwnerHUDArg(this);
            //SAssignNew(MyCompoundWidget, SMyCompoundWidget);

            // 添加视口方法一，可被移除
            //GEngine->GameViewport->AddViewportWidgetContent(MyCompoundWidget.ToSharedRef());

            // 添加视口方法二，此处无法移除，因为 weak widget
            //GEngine->GameViewport->AddViewportWidgetContent( SNew(SWeakWidget).PossiblyNullContent(MyCompoundWidget.ToSharedRef()), 0);
            
            // 添加视口方法三，可被移除
            GEngine->GameViewport->AddViewportWidgetContent(
                SAssignNew(WidgetContainer,SWeakWidget).PossiblyNullContent(MyCompoundWidget.ToSharedRef()), 0);

            // 显示鼠标及设置输入模式
            APlayerController* PC = UGameplayStatics::GetPlayerController(GetWorld(), 0);
            if (PC)
            {
                PC->bShowMouseCursor = true;
                PC->SetInputMode(FInputModeUIOnly());
            }
        }
    }

    void AMyHUD::RemoveMySlate()
    {
        if (GEngine && GEngine->GameViewport && WidgetContainer.IsValid())
        {
            // 移除添加视口方法一
            GEngine->GameViewport->RemoveViewportWidgetContent(MyCompoundWidget.ToSharedRef());
            
            // 移除添加视口方法三
            GEngine->GameViewport->RemoveViewportWidgetContent(WidgetContainer.ToSharedRef());
            
            // 移除所有
            //GEngine->GameViewport->RemoveAllViewportWidgets();
            
            // 显示鼠标及设置输入模式
            APlayerController* PC = UGameplayStatics::GetPlayerController(GetWorld(), 0);
            if (PC)
            {
                PC->bShowMouseCursor = false;
                PC->SetInputMode(FInputModeGameOnly());
            }
        }
    }
```

创建 SCompoundWidget 派生类：SMyCompoundWidget

```C++,
    #include "CoreMinimal.h"
    #include "Widgets/SCompoundWidget.h"
    #include "MyHUD.h"

    /**
     * 
     */
    class DESIGNPATTERNS_API SMyCompoundWidget : public SCompoundWidget
    {
    public:
        SLATE_BEGIN_ARGS(SMyCompoundWidget)
        {}
        // 添加参数
        SLATE_ARGUMENT(TWeakObjectPtr<AMyHUD>, OwnerHUDArg);
        SLATE_END_ARGS()

        /** Constructs this widget with InArgs */
        void Construct(const FArguments& InArgs);

        FReply OnPlayClicked() const;
        FReply OnQuitClicked() const;

    private:
        TWeakObjectPtr<AMyHUD> OwnerHUD;
    };

    #include "SMyCompoundWidget.h"
    #include "SlateOptMacros.h"
    #include "Widgets/Images/SImage.h"
    #include "MyHUD.h"
    #include "Kismet/KismetSystemLibrary.h"
    #include "Kismet/GameplayStatics.h"
    #include "Widgets/Layout/SBackgroundBlur.h"
    #define LOCTEXT_NAMESPACE "MyNamespace"

    BEGIN_SLATE_FUNCTION_BUILD_OPTIMIZATION
    void SMyCompoundWidget::Construct(const FArguments& InArgs)
    {
        // 注意此处带下划线
        OwnerHUD = InArgs._OwnerHUDArg;
        // 文本和按钮间距设置
        const FMargin ContentPadding = FMargin(500.0f, 300.0f);
        const FMargin ButtonPadding = FMargin(10.f);
        // 按钮和标题文本
        const FText TitleText = LOCTEXT("SlateTest", "Just a Slate Test");
        const FText PlayText = LOCTEXT("PlayGame", "Play");
        const FText QuitText = LOCTEXT("QuitGame", "Quit Game");
        //按钮字体及大小设置
        FSlateFontInfo ButtonTextStyle = FCoreStyle::Get().GetFontStyle("EmbossedText");
        ButtonTextStyle.Size = 40.f;
        //标题字体及大小设置
        FSlateFontInfo TitleTextStyle = ButtonTextStyle;
        TitleTextStyle.Size = 60.f;

        //所有UI控件都写在这里
        ChildSlot
            [
                SNew(SOverlay)
                + SOverlay::Slot()
                .HAlign(HAlign_Fill).VAlign(VAlign_Fill)
                [
                    SNew(SImage)    // 背景（半透明黑）
                    .ColorAndOpacity(FColor(0,0,0,127))             
                ]

                + SOverlay::Slot()
                .HAlign(HAlign_Fill).VAlign(VAlign_Fill)
                [
                    SNew(SBackgroundBlur) // 高斯模糊
                    .BlurStrength(10.0f)
                ]

                + SOverlay::Slot()
                .HAlign(HAlign_Fill).VAlign(VAlign_Fill)
                .Padding(ContentPadding)
                [
                    SNew(SVerticalBox)

                    // Title Text
                    + SVerticalBox::Slot()
                    [
                        SNew(STextBlock)
                        .Font(TitleTextStyle)
                        .Text(TitleText)
                        .Justification(ETextJustify::Center)
                    ]

                    // Play Button
                    + SVerticalBox::Slot()
                    .Padding(ButtonPadding)
                    [
                        SNew(SButton)
                        .OnClicked(this, &SMyCompoundWidget::OnPlayClicked)
                        [
                            SNew(STextBlock)
                            .Font(ButtonTextStyle)
                            .Text(PlayText)
                            .Justification(ETextJustify::Center)
                        ]
                    ]

                    // Quit Button
                    + SVerticalBox::Slot()
                    .Padding(ButtonPadding)
                    [
                        SNew(SButton)
                        .OnClicked(this, &SMyCompoundWidget::OnQuitClicked)
                        [
                            SNew(STextBlock)
                            .Font(ButtonTextStyle)
                            .Text(QuitText)
                            .Justification(ETextJustify::Center)
                        ]
                    ]
                ]
            ];

        
    }

    FReply SMyCompoundWidget::OnPlayClicked() const
    {
        if (OwnerHUD.IsValid())
        {
            OwnerHUD->RemoveMySlate();
        }
        return FReply::Handled();
    }

    FReply SMyCompoundWidget::OnQuitClicked() const
    {
        if (OwnerHUD.IsValid())
        {
            OwnerHUD->PlayerOwner->ConsoleCommand("quit");  
        }
        return FReply::Handled();
    }

    END_SLATE_FUNCTION_BUILD_OPTIMIZATION

    #undef LOCTEXT_NAMESPACE
```



# 🌟 Performance & Profiling
- 调整引擎功能的级别 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Options/
- 缩减游戏包容量 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/ReducingPackageSize/
- Packaging & Cooking https://docs.unrealengine.com/4.27/zh-CN/SharingAndReleasing/Deployment/
- 可延展性和开发人员 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Scalability/ScalabilityAndYou/
- Console Commands https://docs.unrealengine.com/udk/Two/ConsoleCommands.html
- Unreal Engine 4 Console Variables and Commands https://digilander.libero.it/ZioYuri78/
- 性能与分析概述 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Overview/
- 对立体渲染进行分析 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/ProfilingStereoRendering/
- 系统设置 https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/SystemSettings/

在做游戏的过程中，性能 是个无所不在的话题。为了创建梦幻般的画面，我们需要至少游戏帧数至少达到每秒 15 帧。根据不同的平台和游戏类型，这个帧数可能是 30 或者 60，甚至在某些情况下要求更高。

虚幻引擎提供了很多功能，它们也有不同的性能特性。为了达到性能的要求会需要对游戏素材和代码进行优化。因此需要能够知道性能花费在何处。这一点可以通过使用引擎的性能分析工具。 每个性能问题都可能是不同的，需要对当前的硬件、软件都有一定的了解。

本指南主要阐述渲染主题，因为这是对性能要求最高的区域。添加更多对象、提高分辨率、添加照明以及改进材质都会 对性能产生实质影响。幸运的是，在渲染中，通常很容易恢复一定的性能。许多渲染功能可通过控制台变量进行调整。

您可使用编辑器输出日志或游戏控制台来完成下列操作：

- 设置控制台变量 (cvarname value)
- 获取当前状态 (cvarname)
- 获取变量的帮助 (cvarname ?)。

Stat 命令（例如 *stat unit* 和 *stat fps*）可以为您提供一些起步数值。准确的概要分析应该以毫秒 (ms) 而非 每秒帧数 (fps) 为单位来执行。您可在数值之间轻松完成转换，但以 fps 为单位进行测量时，相对的改善没有多大意义。在讨论个别的功能时，我们的讨论 是以毫秒为单位，因为它不会测量帧。

如果您看到 30 fps (~33.3ms) 或 60 fps (~16.6ms) 的限制，那么可能已启用 VSync。为了更准确地进行计时，最好在不使用该功能的情况下进行概要分析。

您不应期望在非常简单的场景下可获得极高的帧速率。许多设计选项支持复杂场景（例如，延迟渲染），但以基本成本较高为代价。您还可能会遇到 限制帧速率的对象。有需要时，应该对此类选项（例如，t.MaxFPS 和 r.VSync）加以调整。

确定限制因素是前提性条件，优化错误的因素纯属浪费时间。

现代的硬件有许多并行运行的单元（例如，GPU：内存、三角形/顶点/像素处理等等，以及 CPU：多个 CPU、内存等等）。通常，这些单元需要彼此等待。 首先，您需要确定限制因素。优化该因素有可能提高性能。优化错误的因素纯属浪费时间，并可能会引入新的错误，甚至 会导致其他情况下的性能下降。在改进该区域之后，通常最好再次进行概要分析，因为这可能会揭示以前未显现的新性能瓶颈。

首先，您应检查帧速率是否受 CPU 或 GPU 成本限制。一如既往，您可调整工作负载（例如，更改分辨率）并查看效果。从下图中，您可轻松了解 引擎的内置功能 *stat unit* 命令查看各种时间消耗，包括：

- *Frame* 帧时是生成一帧游戏内容所花费的总时间。由于 Game 线程和 Draw 线程在完成一帧之前保持同步，所以帧时往往接近其中一个线程中显示的时间。
- *Game* 如果帧时接近 Game 线程中显示的时间，则游戏的性能很可能会受到 Game 线程的阻碍（负面影响）。
- *Draw* 如果帧时接近 Draw 线程中显示的时间，则游戏的性能很可能会受到渲染线程的阻碍。
- *GPU* GPU 时间用来衡量显卡渲染场景需要多长时间。由于 GPU 时间会被同步到帧上，所以它很可能与帧时相同。
- *RHIT* 通常，RHI线程时间会被同步到帧上，因此它很可能与帧时相差无几。
- *DynRes* 如果支持（并启用），DynRes 将显示主要屏幕百分比和次要屏幕百分比。


实际帧时间受下列三项因素中的某一项限制，限制因素是三者中的最大者，为了获得较小的帧 时间，必须对其优化工作负载。

- 如果 Game 时间过高，就应该使用 Unreal Insights 等抽样 CPU 分析器。
- 如果 GPU 时间过高，传统的 GPU 分析 分析方法通常也适用。
- 如果 Draw 时间过高，可能需要减少绘制调用计数。


引擎显示标志可用来切换许多渲染功能。编辑器将在一个方便使用的二维 UI 中列出所有显示标志。您可单击复选框以切换多个复选框，而无需关闭菜单。

在游戏中，您可使用 show 命令。使用 show 可获取所有显示标志及其状态的列表。使用 show showflagname 可切换功能。请注意，此命令仅在游戏视口中有效，因此在编辑器 视口中，需要使用编辑器 UI。您可在游戏中或在编辑器中使用控制台变量（例如 showflag.Bloom）来覆盖显示标志值，但这样做还会禁用 UI。

某些功能仍会消耗性能，即使不再渲染也是如此，例如，show particles 会隐藏粒子，但仍需要模拟时间 以便支持稍后重新启用这些功能。控制台变量 fx.freezeparticlesimulation 允许您同时禁用更新部分（也有编辑器 UI）。 另一个命令，show tessellation，可禁用三角形放大，但仍使用铺嵌着色器。

良好的概要分析起点是对高级别功能进行概要分析，例如 *show StaticMeshes* 或 *show tessellation*。

所有显示标志也作为控制台变量公开，例如 console show Bloom 为 showflag.Bloom 0，或在配置文件中公开：showflag.Bloom = 0 控制台变量需要较多的键盘输入，但它们还会覆盖编辑器 UI 显示标志，并可像其他控制台变量一样放入配置文件。

对概要分析最有用的标志如下所示：

- ScreenSpaceReflections 切换屏幕空间反射，可能会产生大量性能成本，仅影响像素直至特定粗糙度（通过 r.SSR.MaxRoughness 进行调整，或在后处理设置中进行调整）。
- AmbientOcclusion 屏幕空间环境光遮蔽（对某些场景的益处非常有限，对于静态对象，您在光照系统中烘培 AO）。
- AntiAliasing 切换任何抗锯齿效果（TemporalAA 和 FXAA），使用 TemporalAA 可切换到 FXAA（速度更快，质量更低）。
- Bloom 根据镜头光斑和高光功能来影响图像。
- DeferredLighting 切换所有延迟照明处理过程。
- DirectionalLights PointLights SpotLights 切换不同的光源类型（对于了解各类光源的效果及性能影响非常有用）。
- DynamicShadows 切换所有动态阴影（阴影贴图渲染和阴影过滤/投射）。
- GlobalIllumination 切换烘培式照明与动态间接照明 (LPV)。
- LightFunctions 切换光函数渲染。
- PostProcessing 切换所有后处理过程。
- ReflectionEnvironment 切换反射环境处理过程。
- Refraction 切换折射处理过程。
- Rendering 整体切换渲染。
- Decals 切换贴花渲染。
- Landscape Brushes StaticMeshes SkeletalMeshes Landscape 切换所渲染的几何体。
- Translucency 切换半透明渲染。
- Tessellation 切换铺嵌（仍运行铺嵌着色器，但产生更多三角形）。
- IndirectLightingCache 切换具有已失效的光照贴图的动态对象或静态对象是否使用间接照明缓存。
- Bounds 显示编辑器中选择的对象的界限量。
- Visualize SSR 将所有受屏幕空间反射影响的像素渲染为亮橙色（速度较慢），如下所示。


## ⚡ Profile CPU/GPU
- https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/GPU/
- https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/CPU/

如渲染线程中出现 CPU 受限，原因可能是绘制调用过多。这是一个常见问题，美术师通常会将绘制调用进行组合，从而减少消耗（如：将多个墙壁组合为一个网格体）。

实际消耗存在于多个区域中：

- 渲染线程需要处理每个物体（剔除、材质设置、灯光设置、碰撞、更新消耗等）。 材质越复杂，设置消耗越高。
- 渲染线程需要准备 GPU 指令，以便为每个绘制调用（常量缓冲、纹理、实例属性、着色器）设置状态，并执行实际的 API 调用。 基础通道绘制调用的消耗通常比仅限深度的绘制调用更高。
- DirectX 将验证部分数据并将信息传递到显卡驱动。
- 驱动（如 NVIDIA、AMD、Intel...）将进一步验证并为硬件创建指令缓冲区。该部分有时会在另一线程中分离。

使用 stats 命令显示由 3D 网格体引起的绘制调用时将显示 Mesh Draw Calls - 美术师可通过以下方法减少此项的数量：

- 减少物体数量（静态/动态网格体、网格体粒子）
- 缩短可视距离（如：场景捕捉 Actor 或每个物体上的距离）
- 调整画面（将画面拉得更远、使移动物体不在同一个画面中）
- 不使用 SceneCaptureActor（须重新渲染场景、调低帧率、或只在需要时进行更新）
- 不使用分屏（分屏比单屏的 CPU 受限更大，需对可延展性设置进行自定义或将内容设为更加主动）
- 减少每次绘制调用的元素（将接受更复杂像素着色器的材质进行组合或单纯地减少材质数量，将纹理组合为少数几块较大的纹理 - 只在减少材质数量时才使用元素较少的 LOD 模型）
- 禁用网格体上自定义深度或阴影投射的功能
- 将光源设为不投射阴影，或拥有更紧凑的边界体（视锥、衰减半径）

在一些情况下，硬件实例化不失为一个选择（相同的 3D 模型、相同的着色器、较少的参数变化、需硬件支持）。硬件实例化可极大降低每次绘制调用的驱动过载，但会使灵活性受限。我们将其用于网格体粒子和实例化植物。

高端 PC 上的实验说明每帧可拥有数千次绘制调用（DirectX11、OpenGL）。更新的 API（AMD Mantle、DirectX12）将尝试解决驱动过载，并可执行更大次数的绘制调用。 在移动设备上，绘制调用次数为数百次（OpenGL ES2、OpenGL ES3），但即使如此仍能极大地降低驱动过载（Apple Metal）。

如在游戏线程中 CPU 受限，需要找到引起此问题的游戏代码（如蓝图、光线投射、物理、AI、内存分配）。

如 CPU 未受限，则为 GPU 受限。

GPU 有许多并行工作的单元，框架的不同部分被不同的单元绑定是常见现象。 正因为如此，在寻找瓶颈时，了解 GPU 成本的去向以及 GPU 瓶颈是什么具有重要意义。

在编辑器中使用 ProfileGPU（*Ctrl + Shift + ,*）快速了解信息以及哪部分比较慢。

GPU 成本的去向

ProfileGPU 命令允许您快速识别各种传递的 GPU 成本，有时甚至可以具体至绘制调用。 您可以使用基于鼠标的UI或文本版本。您可以使用 r.ProfileGPU.ShowUI 来禁用 UI。数据基于GPU时间戳， 通常非常准确。然而某些优化会降低数字的可靠性，因此最好以批判性的态度审视任何数字。我们发现一些驱动程序 倾向于在使用着色器几秒钟后对着色器成本进行优化。这种情况可能会很明显，因此等待一段时间或再测量一次以获得更高的置信度可能是有益的做法。

什么是GPU瓶颈？

通常，性能成本随像素数量的增加而增加。若要测试这一点，您可以使用 *r.SetRes* 改变渲染分辨率或在编辑器中缩放视口。 虽然使用 *r.ScreenPercentage* 更方便，但是请切记，一旦使用该特性，就会增加一些额外的增采样成本。

如果您看到一个可测量的性能变化，那么您将受到与像素相关项的约束。通常，它要么是内存带宽（读写），要么是数学限制（ALU），但在极少数情况下， 某些特定的单元是饱和的（例如MRT导出）。如果您能够降低相关通道的内存（或数学）并查看性能差异，您就会知道它受内存带宽（或ALU单元）所限制。 变化不必如出一辙 - 毕竟这只是一次测试。现在您已意识到您必须降低成本来提高性能。

虽然阴影贴图的分辨率与屏幕分辨率不成比例（使用 r.Shadow.MaxResolution），但除非您有非常大面积的阴影投影遮罩或半透明材料， 否则您将不受像素着色器限制。阴影贴图渲染通常受顶点处理或三角形处理限制（原因：密集网格体、无LOD、曲面细分、使用 WorldPositionOffset）。 阴影贴图渲染成本与灯光的数量、级联/立方体贴图的边数以及光源视锥中投影对象的数量成比例。这是十分常见的瓶颈， 只有更大的内容更改才能降低成本。

高度曲面细分的网格体（其中的线框显示为纯色）可能会受到较低四边形利用率的困扰。这是 因为 GPU 在2x2像素块中处理三角形，稍后会拒绝三角形之外的像素。这是 mip 映射计算所需要的。对于较大的三角形，这不是问题， 但如果三角形很小或很长，性能可能会受到影响，因为虽然处理的像素很多，但实际上其中只有很少的像素对图像作出贡献。延迟着色改善了这种情况， 因为我们得到了很好的四边形照明利用率。这个问题将会在基本通道期间继续存在，所以复杂的材质渲染可能会相当慢。 解决这个问题的方法是使用密度较小的网格体。如果是细节层级网格体，这只能在问题发生处（在远处）完成。

您可调整 *r.EarlyZPass* 以查看您的场景是否会受益于一个完整的早期Z通道（基本通道期间有更多的绘制调用和更少的过度绘制）。

如果更改分辨率不会产生太大的影响，您可能会受到顶点处理（顶点着色器或曲面细分）成本的限制。 通常，您必须更改内容来验证这一点。典型的原因包括：

- 顶点太多。（使用细节层级网格体）
- 复杂的世界场景位置偏移/位移材质使用纹理与不良的MIP映射。（调整材质）
- 曲面细分（尽可能避免，调整曲面细分因子 - 最快的方法：显示曲面细分，有些硬件在更大的曲面细分级别下扩展性很差）
- 许多UV或法线接缝导致更多的顶点。（看看展开的UV - 许多岛状区都很糟糕，平坦的阴影网格体每个三角形具有3个顶点）
- 顶点属性太多。（额外的UV通道）
- 验证顶点数量是否合理，一些导入器代码可能没有焊接顶点。（合并具有相同位置、UV和法线的顶点）

在较为少见的情况下，您会被某些其他因素所约束。它们可能是：

- 对象成本（更有可能是CPU成本，但也可能是一些GPU成本）
- 三角形设置成本（非常昂贵的多边形网格体与一个便宜的顶点着色器，例如阴影贴图静态网格体，很少是这个问题）
- 使用细节层级(LOD)网格体
- 视图成本（例如HZB遮挡剔除）
- 场景成本（例如GPU粒子模拟）


## ⚡ Unreal Insights
- Unreal Insights https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/UnrealInsights/

Unreal Insights 可帮助开发者识别瓶颈，适用于优化性能。从较高层面看，Unreal Insights 是一款集成了虚幻引擎的 standalone 分析系统，用于收集、分析和显示引擎发出的数据。除充分覆盖引擎的现有系统外，利用 Unreal Insights 还可轻松添加用户自身的分析数据。最后，该系统拥有远程数据录制功能，对项目执行的影响非常低。

虚幻引擎随附的 Unreal Insights 工具位于 Engine/Binaries/Win64 目录中。下载并在本地编译 UE4 源码用户可使用以下方式编译：在开发或发布模式中构建整个 UE4 解决方案；或直接编译"UnrealInsights"项目。

Unreal Insights包含用于优化、分析和调试网络流量的 Networking Insights。用户可以利用以下功能记录追踪信息，以显示网络行为：

- 游戏实例（Game Instance）功能按钮，用于在记录网络会话期间显示可见机器
- 连接模式（Connection Mode）功能按钮，用于显示传出或传入的数据
- 数据包概览（Packet Overview）面板，用于显示游戏期间传输或接收的数据包时间轴（和大小）
- 数据包内容（Packet Content）面板，用于显示数据包内容，例如重复的对象、属性和远程函数调用
- 网络统计数据（Net Stats）面板，用于显示选定数据包的追踪事件，包括数据包总大小、大小上限、以及排除式或包含式数据包平均大小。

编辑器拥有 Animation Insights 插件，可显示 gameplay 状态和实时动画行为。用户可以使用 Animation Insights 记录追踪信息，使用以下功能显示动画行为：

- 通道过滤，选择写至记录数据集的追踪数据
- 源过滤，选择输出追踪数据的gameplay对象
- 姿势、曲线、混合权重、动画图表、蒙太奇和动画通知轨迹
- 包含实时更新的动画图表原理视图，用于替换 showdebug animation 系统。

Animation Insights 扩展了现有 showdebug animation 功能（其显示动画运行时内部数据）。信息的显示和分析让用户能够识别动画故障或bug原因。

showdebug animation 系统仅会在屏幕上输出文本，因此 showdebug animation 会随时间限制用户追踪动画问题的能力。Animation Insights 可记录包含动画 bug 的帧范围，同时在查看数据分解时拖动（或播放）这些帧。

在为应用程序开发用户界面时，UI 程序员可能会难以找到触发 UI 更新的更改源。随着 UE4.26 的发布，Slate Insights 插件扩展了 Unreal Insights，为开发人员提供了多种工具来识别特定 Slate 和 UMG 更新的根本原因，帮助他们提高 UI 性能。

在使用 Slate Insights 插件时，开发人员可以使用 Slate 帧视图（Slate Frame View）来获取要逐帧绘制、作废或更新的控件列表。Slate Insights 让开发人员可以调试和优化他们的UI。

要开始在编辑器中使用 Slate Insights，可以从编辑器内部或从 uproject 文件启用插件。要从编辑器启用 Slate Insights 插件，请在 Editor -> Plugins -> Built-In > Slate Insights 中找到它。


## ⚡ VisualLogger 可视记录议
- https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/VisualLogger/

可视记录器 是一款强大的调试工具，用于创建和录制游戏进程状态的可视显示，可在编辑器中查看此数据。开发者能够在游戏会话期间实时查看调试输出，或会话结束后在编辑器中进行查看，在面对仅靠用户报告或游戏画面难以追踪的游戏漏洞时，可轻松对其进行修复。处理罕见的或者很难重现的漏洞时，记录信息以供后续检查的功能非常重要。例如，单个帧上的游戏状态变量发生改变可能会引起一次意外的AI行为，但通过记录数据和拖至漏洞发生的帧数便就可在之后研究该意外。

要启动可视记录器，使用 Windows > Developer Tools > 可视记录器 中的菜单即可。在虚幻引擎4.7之前的版本中，输入控制台命令*VisLog*。如正在使用编辑器，可视记录器视口便会打开。


## ⚡ 写给美术师和设计师的性能指南
https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Guidelines/

我们针对内容制作和关卡设计在性能优化方面有一些通用的指南。

对美术而言

- 最小化每个物体的元素数量。
- 将模型合并，形成单个元素上有一定数量的三角面（比如每个元素 300+ 个三角面）。
- 不透明的材质性能最快，因为有最佳的 ZBuffer 裁剪，蒙版会稍慢一些，半透明则最慢，因为有多次绘制的开销。
- 限制 UV seam 的数量和 hard edges 的数量，因为它们会导致硬件计算时更多的顶点数据。在最糟的情形下，一些外部的建模软件计算下，具有大量多边形的模型采用 hard edge 可能会导致三倍于非 hard edge 的顶点数据。
- Skinned Mesh 的顶点处理通常都比 Static Mesh 的顶点处理要求更多的性能。
- 当添加了 Morph Target 或者使用 WorldPositionOffset 时，顶点处理需要更多的性能开销。由于缓存的原因，贴图的查找过程也会更慢。
- 曲面细分要求很多额外的性能开销，应该尽可能避免使用。预先细分好的模型通常会快得多。
- 较大的模型可以分为多个，以获得更好的裁剪优化。这不止对于可见性的裁剪，光照则在更细的粒度上被处理。
- 越小的贴图格式能带来更快的材质（比如 DXT1 是每像素 4 bit（即 4 bpp），DXT5 是 8 bpp，而 ARGB 则是 32 bpp）。
- 越低的贴图分辨率越快（当放大时）。有时也会更加平滑，因为双向线性过滤可以在 shade 层面比实际贴图展现得到更好的效果。
- 较少 shader 指令数的材质及贴图能运行的更快。优化材质的话，应使用材质编辑器中的 stat，以及在编辑器窗口中用 Shader 复杂度的视图模式。
- 如果一个贴图可以在较小的比例下被用到，应一直都为它采用 mipmaps，可以避免因为贴图缓存的未命中导致的性能下降。
- 有些材质表达式会比其他更花费性能（sin, pow, cos, divide, Noise）。最快的几个表达式是：multiply, add, subtract, 以及使用 0 和 1 的 clamp()。
- 着色模式本身具有一定的性能开销：无光模式最快，光照模式应该在大部分情况下使用。其他模式都会费一些。

对于关卡设计师而言

- 控制固定光照和动态光照的数量。
- 区域光照源会更费一些，应当在可能的情形下避免使用。
- 根据较小的物体来调整绘制距离，来达到更好的裁剪效果。
- 确认 LOD 是设置在一个比较激进的范围变化上。LOD 的顶点数通常应该是 2x 的变化。要做这个优化的时候，查看线框模式，一整块区域颜色就说明存在问题。使用整合的 Simplygon，这个过程很快的。
- 尽量将类似信息的光源合并。比如，车的头灯可以用一个光源以及一个光照函数让它看起来是两个灯的效果。
- 静态光照最快，固定光照稍慢一些，动态光照最慢。
- 按照需要，尽量限制光照的衰减半径以及光锥的角度。
- 动态/固定点光源是最费的。方向光源要稍好一些，最好的是聚光灯光源。阴影贴图生成的性能开销根据造成阴影的物体的光照锥体有关。
- 光照函数具有额外的性能开销（实际开销取决于材质），并能防止灯光被渲染成 Tiled Light。
- IES profiles 具有额外性能开销（比光照函数好一些），并能防止灯光被渲染成 Tiled Light。但不要在可以用聚光灯光锥就能完成效果的情形下，还使用 IES。
- Billboards，imposter meshes，或 skybox textures 都能用来代替实际的几何体物件并有效的提高性能。
- 好的关卡设计师能够将遮蔽裁剪纳入考虑优化关卡（添加一些阻挡视线的物件来提高性能）。使用 r.VisualizeOccludedPrimitives 可以直接查看。
- 避免使用 Light Propagation Volumes 或者通过使用 GIReplace 材质表达式来限制它，或者在带部分物件上禁用它。
- 在不需要的地方应该关闭阴影生成，一个个物件的关闭，或者一个个灯光来关闭。
- 在编辑器中使用 ProfileGPU（Ctrl + Shift + ,）快速了解信息以及哪部分比较慢。
- 贴花的性能开销和它们覆盖的像素数量有关。

## ⚡ Scalability 性能调整
- https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Scalability/

可延展性（*Scalability*）不仅仅是指图形设置方面，还涉及到选择目标平台及选择适合该平台的美术效果、游戏可玩性、音效、人工智能及任何其他子系统。对于主机平台来说，因为平台是固定的，所以这更简单一些。但是，对于由多个不同设备构成的PC平台来说，仅针对一种单独的硬件规格进行制作是不可能的。

这就是可延展性选项发挥作用的地方，但即便在个体开发人员需要调整这些选项之前，他们还是可以做很多事情，来确保他们所制作的应用程序可以在他们选择的最低配置规格上运行。

不同的机器可以具有不同的 性能/内存/质量 特性，比如：

- 硬盘 大小/延迟时间/带宽
- 主内存 大小/延迟时间/带宽，运行 32 位程序而不是 64 位可以进一步限制该项要求。
- CPU (一个或多个主处理器、超线程、SSE 功能、分支预测)
- GPU (内存、多个 GPU、带宽、功能、共享内存)
- 分辨率（现在的笔记本具有高分辨率显示器，但却仅具有较慢的 GPU）

一般，图形是最容易调整的，不需太多地影响游戏性。玩家一般接受可延展性这个概念，但是仅有少数玩家会主动地跳转到这些选项菜单并进行适当地调整。选项屏幕通常充斥着大量的选项和吓人的名称。当然，还为玩家提供了很多选项，供他们做出很多主观的、折中的选择：

- 帧数
- 分辨率
- 图像质量
- 运动模糊
- 贴图细节
- 闪烁（抗锯齿）
- 电池寿命

要在编辑器中访问可延展性设置，可使用工具栏中的 Settings 菜单。引擎可延展性设置（Engine Scalability Settings） 包含 BaseScalability.ini 文件中定义的最常用设置，而 材质质量级别（Material Quality Level）设置全局材质质量设置。

工具栏设置 Settings -> Engine Scalability Settings。

材质可以使用 Quality Switch 材质表达式蓝图节点来禁用对最终效果影响较小的高成本材质部分。要查看该表达式效果，需要切换到 Low Quality 模式。

无论材质质量级别 Material Quality Level 设置为低还是高，它都能决定针对该材质要评估哪些表达式（低或高引脚）。如果高和/或低没有输入，则默认引脚将替代高或低。设置为高时，该材质包含2个合理的高成本柏林噪点运算。

骨架网格体可以有静态细节层次模型，通过控制台变量 r.SkeletalMeshLODBias，可以全局让 LOD 层次有偏差。

可以使用控制台命令访问和设置相关变量，使用反引号按键打开控制台，直接在控制台变量后指定一个值就可以设置：

- r.ScreenPercentage 分辨率缩放，使用 10-100 之间的值，-1 等同于 100%。
- r.ViewDistanceScale 视图距离系数，可以对离观察者大于一定距离的对象剔除，1.0（默认值）
- r.PostProcessAAQuality 抗锯齿级别 0 ~ 6，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3。
- r.DetailMode 三个级别，0 为低细节模式，1 为中等细节模式，2 表示高细节模式，显示所有细节。
- sg.PostProcessQuality 后期处理，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3
- sg.ShadowQuality 阴影质量，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3
- sg.TextureQuality 纹理质量，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3
- sg.EffectsQuality 特效质量，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3
- sg.FoliageQuality 植被质量，0:low, 1:med, 2:high, 3:epic, 4:cinematic, default: 3

每个 Actor 都有一个细节模式属性 Details -> Rendering -> Detail Mode，本质上该设置定义的是Actor渲染的最低细节层次。

也可以在蓝图中，使用 Execute Console Command 节点执行命令，可以使用 Append 节点构造命令字符串。

## ⚡ Profiler 工具
- https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/Profiler

分析工具（Profiler）是对虚幻引擎 3 中的 StatsViewer 工具的替代，它收集并跟踪游戏数据，监控游戏性能。此数据可用于确定游戏中故障和速度减慢的原因。

如你对性能调试了解不多，请先查阅 性能及分析 文档，其中包含的技巧将指导你对游戏性能进行监控。

启用分析工具并收集数据的方法有即时连接和加载之前采集的数据两种：

- 使用参数 -\messaging 运行游戏（如：UE4Editor-Win64-Debug.exe -messaging）。
- 使用参数 -\messaging 运行 UFE（如：UnrealFrontend-Win64-Debug.exe -messaging）。
- 按下 Profiler 标签工具栏上的 Load 按钮并选择一个 .ue4stats 文件。
- 将来自浏览器或其他文件管理器的 stats 文件放入 Profiler 窗口。

也可从引擎安装目录下 Binaries 文件夹运行单独的 UnrealFrontEnd.exe，以便访问 Session FrontEnd 和 Profiler 标签。

Profiler 工具窗口和 UI 组件：

- Connected Session 和 Session Information 窗口 - 用作获取 stats 数据的会话。
- Main Toolbar 窗口 - 包含基础整体功能。
- Data Graph Full  窗口 - 包含 stats 图像展示的全貌。
- Data Graph 窗口 - stats 图像展示。
- Filter and Presets 和 预设 窗口 - 包含所有 stats 和群组（用户可对这些 stats 和群组进行过滤和排序）。
- Event Graph  窗口 - 以事件图表显示所选帧。


# 🌟 Animations 动画
- The Animator's Survival Kit Animated 动画师求生手册
- Unreal Engine + Substance Designer + Blender 西部小镇 https://www.bilibili.com/video/BV1JP4y187Bz
- UE5 - Learn to Create Professional Cinematics https://www.bilibili.com/video/BV1Sf4y1873i?p=10
- 动画系统概述 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Overview/
- spine-ue4 http://zh.esotericsoftware.com/spine-ue4
- Spine Examples https://github.com/EsotericSoftware/spine-runtimes/tree/4.0/examples
- Spine User Guide http://esotericsoftware.com/spine-user-guide
- DragonBonesPro https://dragonbones.github.io/en/index.html
- Spine 零基础教程 待机/走/跑动画 https://www.bilibili.com/video/BV1eZ4y1P7ec
- Spine 演示迪士尼动画十二原则 https://www.bilibili.com/video/BV1Nz4y127sM
- Rhubarb Lip Sync for Spine https://github.com/DanielSWolf/rhubarb-lip-sync
- [PhotoshopToSpine.jsx](https://github.com/EsotericSoftware/spine-scripts)


简单了解一下动画系统，所有游戏动画技术的前身是传统动画 Traditional animation 或手绘动画，最早期的卡通动画。这种动画的动感由连续快速显示一串静止图片所产生，这些图片称为帧 frame。而相应的电子版就是 Sprite Animation，将具有动作连续性的多张图片依次展示就是动画，Paper2D 中提供的 Flipbook 就是这种技术。

电子动画的下一个阶段就是刚体结构动画 Rigid Hierarcical Animation，就像是皮影戏，将一个整体形象按关节结构拆成小块，然后给各个小块单独制作运动效果再组装在一起，这种方法的好处是可以用程序实现控制，但是接合部会有连接不顺畅的图像。

接下来的蒙皮动画技术解决了刚体结构动画的缺点，它不用进行拆解过程，而是通过数学上的变换，使用一个蒙皮矩阵来形成连续的运动图像，原图就像皮肤一样按变换矩阵进行拉伸或压缩。这种方法使用了骨骼和关节的概念，蒙皮如何拉伸，取取决于骨骼和关节的设置。

现代的动画技术越来越深入，已经可以做到模拟人脸的肌肉运动，可以给模型直接摆姿势，并按动画序列播放出来。利用插值技术，结合关键 Poses，可以自动生成补间动画。

常用的技术还有关节自动，IK（Inverse Kinematics）反向运动学，是指在一个相互连结的动力链中，移动某一个节点时，其他节点的参数会自动计算以达到期望的位置。简而言之，IK 是给某个骨骼直接设置一个目标位置，比如将两手固定在一处，身体其它部位的状态通过反向解算得到合适的旋转和位置。FK（Forward Kinematics），正向运动学，则是按顺序设置每个骨骼的位置与旋转。

通过 3D 建模得到 Static Mesh，然后再使用骨骼来控制静态风格模型得到 Skeletal Mesh 骨骼模型，通俗来说就是绑定骨骼后的网格体。然后再经过模型的材质处理，相当于蒙皮，最后就得到在游戏中能够看到的角色的肉身。

现代的动画软件还提供其它生产力工具，像动作捕捉、面部表情捕捉等等，可以大大节省在模型动作上面的工作，并且提供更真实的动画效果。


Spine 是非常专业的 2D 骨骼动画制作软件，可以导出 GIF/PNG/APNG/PSD/JPEG 等图像，或者 AVI/MOV 视频。每一个 Spine 工程都是以骨架为中心，以动画产出，以各种约束、皮肤、事件图片、音频为辅助内容组织的。节点树显示各种和骨架相关的资源，每个工程中可以设置多幅骨架，每幅骨架上可以设置多个动画。

Spine 可以将骨架动画数据导出为 JSON 或 *.skel* 二进制文件，然后由 Spine 运行库加载，并像在 Spine 中一样显示在各种应用程序中播放动画。二进制数据比 JSON 小得多，在运行时解析非常快。

Spine 可以将图片打包到纹理图集或网格(精灵表单)中，以便在运行时更高效地渲染。Spine 的纹理打包器是一个通用工具。虽然它可以用于你的 Spine 骨架，但也可以单独运行以打包你的应用程序的所有图片。

在大多数图形 API 中，如 OpenGL，绑定一个纹理会完成一些绘图，绑定另一个纹理会完成更多绘图，以此类推。绑定纹理的成本相对较高。因此理想的做法是在较大的图片上存储许多较小的图片，一次过绑定较大的纹理，然后多次绘制其各个部分。Spine 可以有效地将许多较小的图片打包成较大的图片，从而形成所谓的“纹理图集”。

纹理图集由一个文件扩展名为 *.atlas* 的文本文件和一个或多个称为图集页面图片的文件组成。图集文件描述每个打包的较小图片在页面图片中的位置，称为图集区域，这些区域在图集文件中按名称引用。

Sping 为了简化程序，只支持一到二个骨骼的 IK 约束，可以使用多个 IK 约束实现多级骨骼的 IK。和骨骼的变换约束或路径约束一样，这些约束器是骨骼动画的常用技术。IK 约束中，动画师可以通过摆布 Target 指定的对象位置来让 IK 程序自行计算父子骨骼链的位置。而变换约束中，Target 指定的骨骼相当控制器，它的位置等信息决定了变换约束中关联骨骼状态。

约束顺序很重要！如果在应用 IK 后另一个约束移动目标，则骨骼不会指向该 IK 目标，可拖动约束更改它们的应用顺序。

变换约束可将骨骼的世界旋转、平移、缩放和/或剪切(其变换)复制到一个或多个其他骨骼，对高级装配有许多巧妙的用途。最简单的方法是移动一个骨骼，然后让其他骨骼也移动。它可用于模拟有不同父对象的骨骼，例如摘下帽子、装备武器或抛出物体。

在变换约束面板中，可以设置偏移量，然后通过混合指定的百分比，将偏移量与混约束目标的指定变换值进行混合。混合量指定的百分比可以是负值，表示按比例反向叠加。变换约束提供了两个坐标选项 Local & Relative，可以设置变换操作是按本地坐标、相对值进行变换，这样就可以给受约束骨骼设置初始值。

在调整受约束骨骼时，可以打开 Compensate 面板中的图片开关，这样图片附件不会受父级骨骼影响，同样也不受直接控制网格的骨骼影响。

通过这些约束工具，可以使用少量的骨骼来控制大量的骨骼，以实现复杂的动画效果。例如，2.5D 头部装配，通过控制器的旋转，来控制眼睛、耳朵、鼻子、轮廓部分关联的骨骼，可以非常真实地模拟出 3D 效果。

官方的变形人项目 stretchyman 演示通过使用 IK、路径和权重来创建可伸缩的四肢，先通过路径约束一组同级的骨骼，这组骨骼绑了网格权重，然后再使用 IK 约束的骨骼来控制配置了权重的路径，这样使用简单的控制来简化动画过程。


插槽 Slot 是一个放置和各种附件内容的容器，例如图片，图片附件还可以转换为网格附件，并且绑定骨骼到网格，再通过控制骨骼来实现附件的各种变换效果。插槽可以设置填充颜色，以影响附件的原貌。还有贝塞尔曲线路径、Bounding Box 等等附件，它们的控制点也可以绑定骨骼进行控制。

Slot 中多张图切换的方式也是圆形同步动画的实现方式，像 Moho 或 OpenToonz 等软件就是类似的原理。使用 Rhubarb Lip Sync 可以识别音频文件中的语音口形信息，并生成相应的配置数据供动画软件使用。


各种功能附件类型如下：

- 图片附件 Region Attachments：放置图片，通过拖动图片到骨骼中创建，或者导入；
- 网格附件 Mesh Attachments：将图片附件装入网格附件，再将骨骼绑定网络权重进行控制；
- 边界框附件 Bounding Box：一个多边形，用于运行时程序中进行物理碰撞检测，也可以进行权重控制变形。
- 剪裁附件 Clipping Attachments：对图像进行裁剪，只显示曲线标记内的图像；
- 路径附件 Path Attachments：使用贝塞尔曲线作为骨骼的运动约束路径；
- 点附件 Point Attachments：点是空间中具有旋转和位置属性的点，可用于产生粒子或任何涉及位置和/或旋转的其他东西。

官方运行时代码库提供完整示例，可以直接克隆下载：

```sh
>git clone git@github.com:EsotericSoftware/spine-runtimes
>git clone -b 4.0 --single-branch git@github.com:EsotericSoftware/spine-runtimes

>git init
>git remote add origin git@github.com:EsotericSoftware/spine-runtimes
#git pull <repository> <branch>
>git pull origin 4.0
>git remote show origin
* remote origin
  Fetch URL: git@github.com:EsotericSoftware/spine-runtimes
  Push  URL: git@github.com:EsotericSoftware/spine-runtimes
  HEAD branch: 4.0
  Remote branches:
    3.5              new (next fetch will store in remotes/origin)
    3.6              new (next fetch will store in remotes/origin)
    3.7              new (next fetch will store in remotes/origin)
    3.7-c            new (next fetch will store in remotes/origin)
    3.8              new (next fetch will store in remotes/origin)
    4.0              new (next fetch will store in remotes/origin)
    4.1-beta         new (next fetch will store in remotes/origin)
    4.1-beta-physics new (next fetch will store in remotes/origin)
    cocos2dx-v4      new (next fetch will store in remotes/origin)
    spine-godot      new (next fetch will store in remotes/origin)
    ts-modules       new (next fetch will store in remotes/origin)
```

Spine 界面中的关键帧图标不同颜色含义：

- 🗝 绿色钥匙：当前节点有设置关键帧；
- 🗝 红色钥匙：当前帧是节点的关键帧；
- 🗝 橙色钥匙：当前帧的关键帧数据没有保存；


事件关键帧是一个方便用于编程处理事件触发机制，列如创建一个 Attack 事件，在播放攻击动画同时在时间轴上的合适帧位置启用 Attack 事件，通过节点树中事件节点左侧的钥匙标记创建事件关键帧。这样每次播放攻击动画时，运行时处理程序都可以检测并对事件进行处理。

事件关键帧也可以用来触发声音播放动画，Spine 还会在事件触发时显示事件名称以提示动画师目前触发了什么事件。

以下代码片段示范如何通过 Spine 运行时对事件进行编程：

```C++,
    AnimationState state = ...
    state.addListener (new AnimationStateAdapter() {
        public void event (int trakIndex, Event event) {
            if (event.name == "Attack")
                Audio.play(event.name + event.intValue + ".wav");
        }
    })

    TrackEntry entry = state.setAnimation(0, "run", true);
    entry.setListener (new AnimationStateAdapter() {
        public void event (int trakIndex, Event event) {
            if (event.name == "audio")
                Audio.play(event.stringValue);
        }
    })
```


Spine 的皮肤功能可使用不同的附件集，从而实现骨架动画的重复利用。皮肤可以用于简单的服装切换，也可以用来将许多不同的部件组合成完整的角色。

参考官方提供的示例，goblins 或 mix-and-match，后面这个示例更复杂，主要是为各个部分单独设置了皮肤配置，同时使用了风格权重绑定。这样就可以选择显示角色的某些部位进行动画展示，如衣服部分，或者其它配饰单独显示。

皮肤由仅当皮肤可见时才处于活动状态的附件、骨骼和约束组成。使用皮肤视图，骨架可以同时显示多个皮肤。可以将骨骼和约束添加到皮肤，它们只有在皮肤可见状态下才生效。骨骼或约束添加到皮肤后，在节点树中就会显示一个衣服图标在右侧。皮肤占位符的图标更形象，是一个衣架图标。

皮肤的关键是骨骼上创建的皮肤占位符 *Skin Placeholder*，它是一种附件，与任何其他附件一样位于层级树中的插槽下。但是，它显示出来的只是实际使用的附件，这些附件来自当前可见的皮肤。

动画可以像显示和隐藏附件一样显示和隐藏皮肤占位符，方法是设置插槽附件的关键帧。这样，动画就不再局限于显示和隐藏特定附件。而通过显示和隐藏皮肤占位符，实际显示的附件则来自可见的皮肤，从而使动画能够与任何皮肤一起使用。

在骨骼中创建在命名皮肤占位符时，名称不需要指明它用于哪个皮肤，而应该根据附件代表的名称对其进行命名。

例如，为头部创建了 *red* 和 *blue* 两个皮肤，则 *head* 将是一个很好的头部皮肤占位符名称，而不是 red head 或 blue head。在创建皮肤占位符时可以勾选重命名附件 Rename attachments 这样会在每个被复制的附件前加上皮肤名称。例如，red/head 代表 red 皮肤的头部，在将每个皮肤的图片组织到子文件夹中时很有用。

皮肤可以有一个附件(或无附件)，创建皮肤后保持皮肤设置为当前活动状态，即节点树左侧的可视状态处于激活状态，然后将图片拖动到骨骼下的皮肤占位符中。设置好各个皮肤的附体后，就可以通过 Skins 节点下的皮肤来切换附件的显示，或者骨骼、约束的有效状态。

将附件拖到皮肤占位符下的附件进行替换，而不是拖到皮肤占位符，则可以保留现有附件的变换。如果拖到皮肤点位符下，则活动皮肤的皮肤占位符以前的任何附件都将被删除。

要清除皮肤占位符的附件，请将其删除或拖动到其他位置。

创建皮肤占位符并逐个移动现有附件非常繁琐，更有效地执行是使用层级树筛选器隐藏骨骼和插槽，以便只显示附件。这样就可以方便选择许多附件，接下来，创建皮肤或确保皮肤为活动状态，然后选择你的附件并选择新建... 皮肤占位符。这将为使用相同名称的每个附件创建一个皮肤占位符，并且附件将移动到活动皮肤的皮肤占位符下。

通常整套皮肤图片需要单独的目录进行管理，使用查找替换功能可以对整个项目，或选中的节点，或当前皮肤使用的附件路径进行批量替换。

Spine 为 Adobe Photoshop 导出图层提供了脚本 PhotoshopToSpine.jsx，可以命名图层来指定图层的用途。作为皮肤的图层命名规则 *[skin]name*，方括号标记可以放在图层名称的任意位置，如 `head [slot]` or `[slot] head`，其它支持的 GroupTag 参考脚本代码片段：

```js
function isValidGroupTag (tag) {
    switch (tag) {
    case "bone":
    case "slot":
    case "skin":
    case "merge":
    case "folder":
    case "ignore":
        return true;
    }
    if (startsWith(tag, "path:")) return true;
    return false;
}
```

**Group names:**

* `[bone]`  Slot and bone layers in the group are placed under a bone, named after the group. The bone is created at the center of a visible attachment.
* `[slot]`  Layers in the group are placed in a slot, named after the group.
* `[skin]` Layers in the group are placed in a skin, named after the group. Skin images are output in a subfolder for the skin.
* `[merge]` Layers in the group are merged and a single image is output, named after the group.
* `[folder]` Layers in the group will be output in a subfolder. Folder groups can be nested.
* `[ignore]` Layers in the group and any child groups will not be output.

**Layer names:**

* `[ignore]` The layer will not be output.
* `[path:name]` Specifies the image file name, which can be different from the attachment name. Whitespace trimming is required. Can be used on a group with `[merge]`.


和收费的 Spine 不同，DragonBones 完全免费的骨骼动画软件，也可以算是 Spine 导出的动画数据文件，被各种 2D 游戏引擎广泛采用。旧版 DragonBones 不支持直接读取 skel 文件，因此需要转换器。


2D 骨骼动画中的常用术语：

- *骨架*：骨架Armature,是2D骨骼动画中最常用的名词，一般指的是由很多骨骼组成的一个整体。DragonBones中同时代表一个可以包含动画的角色。

- *骨骼*（骨头）：骨格或骨头Bone,是骨骼动网中组成骨架的最重要的一个基础单元。骨头自身不能拆解，在骨架中可以进行相对的平移、旋转、缩放、运动，组合起来就形成了骨格动画。另外骨骼之间可以有父子关系。一般来说，在默认正向动力学的情况下，父骨骼运动会带动子骨骼一起运动、比如一个人物举起大臂，那小臂作为大臂的子骨骼，也会随之被抬起。

- *插槽*：插槽是骨骼动画中显示图片的容器，隶属于骨骼。每个插槽可以包含多张图片，但是同一时间只显示一张图片。每个骨格可以包含多个插槽。插槽链接了骨骼这个动画逻辑单元和图片这个动画显示单元，组成了骨骼-插槽-图片，这个DragonBones骨骼动画中的基本骨骼结构。

- *图片*(纹理)：图片就是显示图像的元素，在2D骨骼系统中，图片和纹理的意义区别不大，所以这里也可以叫纹理。

- *纹理集*：纹理集是将图片打包之后组成的大图，方便资源整合传播和在游戏中加载，使用硬件加速引擎或者Egret Runtime 的话，纹理集能大幅度提高渲染效率。所以DragonBones默认提供的导入资源的接口就是用纹理集。

- *动画补间*：一般设计师在做骨骼动画的时候，并不需要在每帧都为角色摆动作，而只是在一些关键的地方(关键帧)摆出关键的动作，关键动作之间全部由程序生成的补间代替，这就是动画补间。动画补间可以是线性的也可以是非线性的。线性补间意味着补间上的元件是匀速变换的(平移、旋转、缩放)。非线性补间般由各种曲线表示，DragonBones 中默认使用贝塞尔曲线表示非线性补间。

- *动画过渡*：动画过渡是指从一个动画切换到另一一个动画时，产生的过渡效果。DragonBones提供了动画动面切换时的过渡效果功能，只要设置一个过渡时间，就能自动生成平滑的过渡效果。

- *动画融合*：动面融合提供了一个角色同时播放多个动画的功能。这个功能一般会在两种情况下使用。第1种是如一个人物角色动画比较复杂，可能需要上半身和下半身分别做动画设计，然后可以任意组合。第2种是如需要个角色在跑步的同时中弹，身体后仰，也就是同时插放跑步和中弹的动画。动画融合的功能通过给不同的动画设置权值，给不同的骨路增加动画遮罩来实现这两种需求。需要注意的是DragonBones只有普通模式提供了动画融合的功能，极速模式是不提供这个功能的。

- *正向动力学*(FK)和*反向动力学*(IK)：在骨骼动画中，一般来讲，子骨骼的运动会受到父骨骼的影响，例如大臂旋转，小臂也会跟随旋转，这叫作正向动力学，也就是父亲影响孩子。当然现实世界也存在反过来的情况，例如有入打你一拳，你用小臂去阻挡，那小臂受力运动的同时也会带动大臂一同做受力运动，这叫作反向动力学。在DragonBones中控制骨路调节动作的时候，一般情况骨骼是符合正向动力学规律的，也就是调节父骨骼，子骨骼也会受影响。如果希望通过反向动力学调节动画，可以选选择相应的IK工具来实现。


UE4 的动画系统主要分为两大系统：

- Sequence Animation 基于序列的动画系统。
- Skeletal Mesh Animation 基于骨骼的动画系统。

另外，在 2D Sprite Animation 动画系统的支持上，提供了 Paper2D 二维游戏系统。

骨骼模型主要包含以下信息：

- 模型的顶、线、面信息；
- 顶点的骨骼蒙皮权重；
- 模型的材质信息；
- 模型 LOD 信息；
- 所属骨架；
- Morph Target 信息；
- Physics Asset 设置信息；
- 布料系统相关设置；

动画序列（Animation Sequence）也会用于记录骨骼运动状态，也是让骨骼动动起来的关键之一，其主要包含了一下信息：

- 动画关键帧信息；
- 包含运动的骨骼信息；
- 每帧骨骼的 Transform 信息，包含旋转、位移和缩放；
- 动画通知信息，记录触发通知的类型和时间；
- 动画曲线信息，记录随时间轴变化的曲线信息；
- 其他基础信息，包括叠加动画设置、根骨骼位移设置等信息；

通过 Content Browser 右键菜单可以创建的 Animation 对象：

- Aim Offset
- Aim Offset 1D
- Animation Bluprint 动画蓝图；
- Animation Composite 动画合成器，将多个动画组合在一起将它们作为单个单元进行处理的方法；
- Animation Layer Interface
- Animation Montage 动画蒙太奇；
- Animation Sharing Setup
- Blend Space
- Blend Space 1D
- Bone Compression Settings
- Camera Animation Sequence 自带 Cine Camera Actor 的动画序列；
- Curve Compression Settings
- Level Sequence 关卡序列，默认不含任何轨迹；
- Paper Flipbook 逐帧播放的 Sprite Animation 动画对象。
- Pose Asset
- Template Sequence 序列模板；

`Aim Offset` 瞄准偏移是一种资源，它存储了一系列可混合的姿势，以帮助角色瞄准武器。 在动画过程中，瞄准偏移的结果与其他动作（如奔跑、行走、跳跃等）混合在一起，使角色从各个方向上看起来都很平滑。

瞄准偏移背后的关键概念是，它们被设计成与现有动画进行额外混合。因此，打个比方，如果您使用瞄准偏移来让角色瞄准一个武器，您会想要确保角色上的其他运动不会妨碍那个附加运动。换句话说，您的奔跑、站立、跳跃等操作应该具有相对刚性的手臂，这样它们就可以通过瞄准偏移进行额外的控制。

在很多方面，瞄准偏移就像一个混合空间。因此，在使用混合空间之前，最好先对它们有一个透彻的了解。

`Animation Blueprint` 动画蓝图主要负责动画的混合驱动逻辑以及后处理的相关工作。一般大部分动画程序的工作就是在这里完成。动画蓝图中可以搭建动画状态机以及动画后处理逻辑，例如 IK、叠加动画等。

`Animation Montage` 动画蒙太奇，对动画序列等资源的扩充，可以方便的使用蓝图、代码控制动画资源的播放，并且可以方便的实现根骨骼动画和动画播放结束后的回调。

`Animation Sequence` 动画序列是用来记录骨骼运动状态的资源，也是让动画动起来的关键之一。每个动画序列资源专门针对一个特定 骨架，且只能在该骨架上播放。换言之，为了能在多个骨架网格体之间共享动画，每个网格体必须使用相同的骨架资源。

动画编辑器提供预览和编辑单个动画序列资源的功能。可以设置包括压缩模式在内的动画序列属性，也可以添加动画通知事件（也称为通知）以便根据动画触发摄像机效果、粒子效果、声音，等等。

动画通知（`AnimNotifies`）为动画程序员提供了一种方式，以便设置事件在 动画序列 中的特定点上发生。通知常用于在行走或跑步动画中添加脚步声之类的效果，或在动画中生成粒子系统。它们用途广泛，系统可随自定义通知类型进行延展，以满足各种游戏的需求。

动画曲线（`Animation Curves`） 提供一种在动画播放时更改材质参数值或变形目标值的方法。它们的工作流要求您指定要修改的资源（材质或变形目标），相应地命名曲线，然后在动画的持续时间内调整关键帧值。

混合空间（`Blend Space`） 是可以在动画图（AnimGraph） 中采样的特殊资源， 允许根据两个输入的值混合动画。要根据一个输入在两个动画之间实现简单混合， 可以使用动画蓝图中提供的一个标准 混合节点。混合空间提供的方法是根据多个值（目前仅限于两个） 在多个动画之间进行更复杂的混合。

混合空间的目的是避免创建单个硬编码节点 来根据特定属性或条件执行混合。通过允许动画师或程序员指定输入、动画 以及如何使用输入来混合动画，几乎可以使用通用 混合空间执行任一类型的混合。

Live Link 通用接口是 UE4 的一个基础插件，基于 Live Link 可以和外接设备实现诸如虚拟制片 Virtual Production、动作捕捉 Motion Capture 等现代化的生产工具。比如，`Virtual Camera` 就利用了苹果手机，来虚拟实现摄像机的拍摄。还可以与其它支持 Live Link 的软件协同，比如 Maya。

使用镜头试拍录制器（`Take Recorder`）插件，能快速迭代录制性能并快速查看之前虚拟制造工作流的镜头。 可轻松录制与关卡角色关联的动作捕捉中的动画及未来播放的 Live Link 实际数据。通过录制镜头并将其添加到 Sequencer，可轻松适应各种大小和数量的镜头制作。

确保启用镜头试拍录制器插件：导航到 Edit -> Plugins，并搜索镜头试拍录制器即可完成操作。通过菜单 Window -> Take Recorder 打开。



## ⚡ Paper2D 二维游戏系统
- 蓝图中的Flipbook组件 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Paper2D/Flipbooks/Components/Blueprints/
- 设置 2D 角色的动画状态机 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Paper2D/HowTo/Animation/
- Paper 2D Import Options https://docs.unrealengine.com/4.27/en-US/AnimatingObjects/Paper2D/Importing/
- Paper 2D Sprites https://docs.unrealengine.com/4.27/en-US/AnimatingObjects/Paper2D/Sprites/
- Paper 2D 组件 https://docs.unrealengine.com/4.27/zh-CN/Basics/Components/Paper2D/
- Components 组件 https://docs.unrealengine.com/4.27/zh-CN/Basics/Components
- Paper 2D 图块集/图块地图 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Paper2D/TileMaps/
- Paper 2D Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/Paper2D/

Paper2D 是 UE4 提供的基于精灵的 2D 游戏系统，可以用于构建 2D 和 2D/3D 混合游戏。

在 2D 游戏中，基于动画帧来创建运动角色形象是常用技术。使用 UE4 自带的 2D Side Scroller 即 2D 横卷轴游戏工程模板就自带了 Flipbook 的示范内容，包括 2DCharacter_IdleAnimAtlas 和 2DCharacter_RunAnimAtlas.TGA 两张动画帧图片，可以将它们从工程中导出：右键菜单 Asset Actions -> Export。也可以上 Game Art 2D 网站上找图片资源。

目前 Paper2D 的动画系统是基于帧动画的，社区讨论中虽然有加入 2D 骨骼动画系统的讨论，但是目前的正式引擎版本中并没有这样的功能。

Paper2D 提供了四种 Components 对象，可以在内容浏览器中添加：

- Sprite 精灵
- Flipbook 帧动画
- Tile Set
- Tile Map

### ✒ PaperSprite

`Sprite` 是帧动画的基本组织单位，它来源于对 Texture 即动画帧图片的裁剪，形成动画的一个帧精灵并最终用于 FlipBook 动画播放。同时 UE4 支持导入 Texture Packer 和 Adobe Flash CS6 生成的帧动画。

精灵的默认材质是 Paper2D 系统提供的 MaskedUnlitSpriteMaterial 材质，它可以将 Texture 透明区过滤掉，如果需要反转过滤使用 MaskedLitSpriteMaterial。

Sprite 属性参考：

- Source Texture 当前精灵所使用的 2D 图像
- Source UV 裁剪的起始点在原图形上的偏离，像素单位
- Source Dimension 从起点开始裁剪指定的像素大小，和前面一组设置就可以将动画帧中的一个状态图片裁剪出来。
- Default Material 精灵的默认材质，这个材质属性可以被 Flipbook 的设置覆盖。
- Additional Textures 为精灵提供额外的贴图，当前文档中没有给出描述。
- Pixels per unit 设置像素与引擎内部单位之间的缩放比例，用于调整精灵在 UE 世界中的大小。在 Paper2D 的插件设置中有全局设定，也可以对每个精灵进行指定。
- Pivot Mode 中心点位置。设置为 Custom 的话可以进行精细的设置。
- Sockets 和 3D 动画中的 Sockets 功能时类似的，提供一个槽口来放置装饰物件。
- Collision 精灵碰撞系统设置，可以选择无碰撞或者3D。

往 Sprite 添加插槽装饰物，可以生成粒子特效，如身上着火的角色，或将一把武器（如一把枪或一把剑）附加到角色手上，或生成任意数量的各种物品并附加到 Sprite 的插槽。添加插槽后，通过蓝图访问 Sprite 插槽，并设置将其它 Sprite 组件附加到插槽上。可以使用 Property Matrix 同时对所有 sprite 进行修改，节约时间。

通过蓝图访问 Sprite 插槽：

- 在人物角色蓝图的 My Blueprint 窗口中点击眼睛图标和 Show Inherited Variables。
- 将角色的 Character 中的 Sprite 组件拖入到蓝图。
- 在 `Event Begin Play` 节点的引出连线后添加一个 `Spawn Actor from Class` 节点（设为所需的 Actor 类）。
- 添加 `Make Transform` 节点并应用到 Spawn Transform 端，在 Return Value 的引出连线后使用一个 `Attach To` 节点。
- 将 Sprite 组件作为 In Parent 接入，在 In Socket Name 输入选择创建好的插槽。
- 编译并在编辑器中进行游戏，生成的 Actor 类将在插槽位置生成并成功附加。

可添加一个插槽到一个 Sprite，并在插槽中附加任意数量的不同内容。Sprite 是否为 Flipbook 的一部分，是否已设置动画，以及插槽中的内容均完全取决于您的选择。


Paper2D 中可以选择的碰撞使用的引擎内通用的 PhysX，以前的 2D 碰撞使用的是 Box2D，也只能支持 Win32 和 Win64 两个平台，要使用额外的功能还要在项目设置中打开 Enable 2DPhysics 开关。

对于 2D 系统，Sprite 对象可以应用物理系统，及物理约束。物理对象需要对世界场景和玩家交互作出反应，然而需要将其限制在关卡内，使用约束可以防止其在特定的轴上旋转。

在关卡中选择需要应用物理的 Sprite，在 Details 面板中，点击 Physics 下的 Simulate Physics 选项，展开 Constraints 并设置：

- Lock Position（对横卷轴游戏而言，通常锁定到 Y 轴）。
- Lock Rotation（对横卷轴游戏而言，通常锁定到 X 轴）。

Paper2D 的坐标系统，X 轴向右，Y 轴向垂直屏幕向外，Z 轴向上，分别用红、黄、蓝三种色表示，锁定一个轴向，就表示不能在这个轴上移动，或者不能以这个轴为中心进行旋转。

碰撞检测的边界有几个不同的方式，越简单规则的边界运算越快速：

- Source Bounding Box 源边界框式，在 Sprite 上使用源图形的边界框。
- Tight Bounding Box 严格边界框式，将 sprite 的全透明区域排除在外，多数情况下这种方式能生成更佳的碰撞效果。
- Shrink Wrapped 收缩包裹式（实验性）生成匹配 Sprite 不透明区域的复杂几何体，效果最真实，但额外的几何体可能对运行性能产生影响。
- Fully Custom 自定义式,可指定视口中互动使用的几何体。
- Diced 方块式，由多个小方块组合，包括最终几何体中仅为非空的小方块。

使用上的建议是使用默认的简单图形进行碰撞，如果需要使用精细的碰撞的话可以使用 Sockets 来外挂碰撞体来进行碰撞检测，逐帧进行精细的碰撞检测是相当消耗系统运算力的。

渲染区域调整功能更重要的是对渲染区域进行调整，将有的精灵中多余的空白部分排除到渲染之外的话，可以很好的降低渲染压力。

`PaperSpriteComponent` 负责处理 UPaperSprite 实例的渲染和碰撞。 当你将 Sprite 资产从内容浏览器拖到蓝图，该组件就会自动创建；或者，当你将某些 Actor 拖入关卡中时，该组件会包含在其中。

这类组件的一种用途就是充当搭建关卡的 Sprite，比如，岩架或平台、梯子和斜坡等。将这些 Sprite 资产放置在关卡中将创建一个 PaperSpriteActor，该 Actor 使用的 PaperSpriteComponent 实例基于选定 Sprite 资产生成。

### ✒ FlipBook

`FlipBook` 是帧动画的管理类，将 Sprite 组织成动画进行播放，只需要将创建好的 Sprite 对象添加到 FlipBook 组件的 Frame 中，设置好播放帧率就可以在蓝图中使用。

创建 Sprite 时，先导入原始动画帧图片，再通过 Sprite 编辑器编辑新建的精灵对象，将 Source Texture 指定为刚导入的图片。在编辑器的右上角，有一个四棵小树的图标，即 Edit the sprite source region，点击后可以使用 Extract Sprites 功能将所有帧图像提取为相应的 Sprite，功能位于左上角的格子图标。对于规整的图像，使用 Grid 提取模式，并将 Cell 的宽高设置为适当大小即可。

将多个 Sprite 拖入 Flipbook 的 Frame 列表，即编辑器的底部格子上，可以快速创建动画帧。或者，直接选择所有 Sprite，使用右键菜单的 Create Flipbook 创建。 

属性如下：

- Frames Per Seconds 每秒帧率，值越大运动越快；
- Default Material 动画帧使用的材质；
- Key Frames 中存储的是每一个用到的关键帧的精灵的属性，可以调整的目前只有 Frame Run，为帧的持续帧数；
- Collision Source 为碰撞模式选择，可以选择关闭碰撞、逐帧碰撞或者使用第一帧进行碰撞。

实际运用中更加重要的是 FlipBook，这个蓝图类提供了很多方便的对 Flipbook 进行操作的接口。设置 2D 角色的动画状态机，可以使角色基于定义的条件在不同 Flipbook 动画之间切换。

`PaperFlipbookComponent` 可以在 3D 空间中任意放置、附加到其他组件上或自身附带其他组件。 你可以为每个实例指定一个自定义颜色；该颜色会被传递给 Flipbook 材质作为顶点颜色参数。你也可以为它们指定一个自定义材质，用于替代 SourceFlipbook 中定义的默认材质。

使用脚本，你可通过调用 SetFlipbook 函数更改当前 SourceFlipbook 资产，但是，请注意仅当 Mobility 属性设为可移动（或在 Actor 构建过程中调用该函数）时，上述操作才有效。 你也可使用组件上的各种其他方式来控制播放速度、播放方向以及循环等。

### ✒ TileSet & TileMap

是瓦片地图功能，原理就是利用一小块图片 Tile 拼接组成一个大地图。TileSet 指定包含多个 Tile 的 Texture 图片资源，并设置好每个 Tile 占据的像素大小。然后将 TileSet 作为绘图色彩一样绘制到 TileMap 的图层上，得到地图，绘制时指定 Active Tile Set。TileMap 也需要设置每个 Tile 的大小，和整个 Map 的大小，即容纳 Tile 数量。

Tile 本身的碰撞在 TileSet 中进行设置和调整，在 TileMap 中也有开关进行碰撞类型的选择，Sprite Collision。

有一个属性需要注意，Sepration Per Layer，这个属性是用于调整每一层地图之间的距离的，在多层地图中，相当于通常的 Z-Order 设置的位置，可以为一些地图特效提供帮助。


### ✒ 2D Side Scroller 模板工程分解
- Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/

UE4 自带的 2D Side Scroller 即 2D 横卷轴游戏工程模板，基于 Paper2D 动画帧来创建运动角色形象是常用技术。使用了 Flipbook 的示范内容，包括 2DCharacter_IdleAnimAtlas 和 2DCharacter_RunAnimAtlas.TGA 两张动画帧图片，可以将它们从工程中导出：右键菜单 Asset Actions -> Export。也可以上 Game Art 2D 网站上找图片资源。

分解一下 2D Side Scroller 模板项目，2DSideScroller 目录下主要是包含了 Textures 目录下的动画帧图片，和 Sprites 目录下和个动画帧对应的精灵对象。

最主要是 2DSideScrollerBP 目录下的蓝图对象，Maps/2DSideScrollerExampleMap 是一个默认关卡地图，打开项目后，视图看到的场景就是它。这个关卡上设置了简单的场景，可以在 World Outline 窗口中看到，Ledges 分组下有几个固定的平台挡板，包括场景两边的边界限制 LeftEdge、RightEdge，还有背景，它们都是 `PaperSprite` 类型，在 Details 可以看到 Collision 设置了 Can Character Step Up On，可以站在这个对象上面而不会掉下来。注意 Collsion Presets 设置了 PhysicsActor，这表示角色对象在模拟的物理世界中，如果没有相应的碰撞设置，物理对象就不会边界接触时产生的效果。

Enable Gravity 默认打开表示受重力，但 Simulate Physics 没有，所以重力模拟并没有生效，物件也不会有下坠跌落的效果。在打开物理模拟的情况下，即使没有重力，其它物理对象踩踏也会有作用。

场景中还有一个人物角色，对应内容浏览器的 Blueprints/2DSideScrollerCharacter，这个蓝图对象的设置才是重点，整个示范工程的逻辑基本都是它编排的。

在选中蓝图对象的情况下，可以点击 Details 面板上的 Edit Blueprint 按钮打开蓝图编辑器，可以看到 2DSideScrollerCharacter 蓝图对象的层次结构，并可以在蓝图的 Viewport 中编辑这些对象：

    +-- 2DSideScrollerCharacter(Blueprint 对象)
        +-- CapsuleComponent(Inherited) 用于碰撞检测的胶囊几何体 
        |   +-- ArrowComponent(Inherited) 箭头组件是简单的形状，表示对象的朝向，箭头不会在实际游戏中显示
        |   +-- Sprite(Inherited) 角色 Flipbook 动画组件
        |   +-- CameraBoom(Spring Arm Component) 弹簧手臂组件
        |       +-- SideViewCameraComponent(Camera Component) 对角色进行摄像
        +-- CharacterMovement(Inherited) 运动组件让角色具有运动能力 

SpringArmComponent 使其子项延长固定距离，然后在发生碰撞时收回，和 CameraComponent 一起使用，可以提供一个第三人称视角，切换摄像机使用 SetViewTargetWithBlend。

打开蓝图对象的 EventGraph，里面主要处理了用户输入时对应的响应逻辑，如跳跃、移动等，还有引擎因为的事件 BeginPlay 和 Tick。此外还有自定义的动画更新 UpdateAnimation 事件，这个事件由 Event Tick 调用，根据状态来调用 SetFlipbook 函数更改角色动画。

`UpdateAnimation` 事件的蓝图逻辑：

- 首先，由 Event Tick 调用，即 Event Tick 节点的执行流接入到 Call Function UpdateAnimation 节点的执行流输入端；
- 调用 Actor 对象的 GetVelocity() 得到移动速度值；
- 经过 Math Library 的 VectorLength() 处理得到向量长度，注意是向量的模，并经过一个浮点值比较，使用 `Float Greater` 节点，看是否大于 0 即有移动； 
- 使用一个 Select 分支选择节点，匹配前面的得到的布尔值，并按布尔值输入 RunningAnimation 或 IdleAnimation；
- 将 Select 分支节点输出的 Flipbook 对象输入到 SetFlipbook 函数节点的 NewFlipbook 参数端口；
- SetFlipbook 的 Target 端口是一个 Flipbook 引用，这里就是蓝图对象中的 Sprite，通过 GetSprite() 获取引用；

UpdateAnimation 事件处理走完流程后，蓝图对象的 Sprite 就会设置正确的一个 Flipbook 动画，如果是 RunningAnimation 则还要在 Tick 流程中处理左右方向，只需要沿 Z 轴即竖直方向翻转 180° 即可。

`Event Tick` 事件的蓝图逻辑：

- 由 UE4 引擎触发 Event Tick 事件的处理；
- 执行流程进入自定义的 UpdateAnimation 事件处理，并设置好 Sprite 对象；
- 另一边，通过 GetMovementComponent() 获取移动组件，获取其 Velocity 属性，也可以直接将 CharacterMovement 组件拖放到 EventGraph；
- 注意，因为是移动组织的属性，所以添加节点时，选择 Movement Component 的 GetVelocity()，可以关闭 Context Sensitive 选项以检索完整的节点列表；
- 使用 `Break Vector` 节点从 Velocity 向量中分离出 X 轴上的分量；
- 将 X 分量通过 `CompareFloat` 节点与 0.0 进行比较，得到 3 种结果，对应三个子流程；
- 小于或大于 0.0 的两种情况表示向左、向右有移动，那么就根据移动方向，执行 SetControllerRotation()，需要做翻转的一个流程输入一个 `MakeRotator` 并配置 Z 值 180，这样 Flipbook 的角色动画方向就正确了；
- 对于等于 0.0 的情况，只需要播放 IdleAnimation，根据蓝图变量 bisMovingRight 来判断角色最后是往什么方向移动，配合 `Branch` 节点做条件分支，使用同样的控制器翻转操作。
- 使用 Pawn GetController() 来获取角色的控制器对象；

`Axis Events MoveRight` 事件处理即运动处理逻辑：

- 由引擎接收到用户输入，并执行 MoveRight 事件，得到 AxisValue 浮点值；
- 使用 Branch 节点做流行执行；
    - 使用 Float Greater 判断，AxisValue 大于 0.0 就执行 Set bisMovingRight 节点，将变量设置为 true 值，表示向右移动了；
    - 否则，使用 Float Less 节点，也可以用 float < float 找到，判断 AxisValue 小于 0.0 就执行 Set bisMovingRight 将变量设置 false 值；
- 最后，执行 Pawn 的 AddMovementInput 函数，WorldDirection 使用单位向量 (1,0,0)，AxisValue 作为 ScaleValue 与单位向量运算，得到移动的向量；

Pawn 还有其它类似的叠加输入值的函数 *AddControllerPitchInput*、*AddControllerRollInput*、*AddControllerYawInput*，注意 AController 本身是 AActor 的子类。

跳跃事件处理逻辑中使用了两个事件：

- `Action Events Jump` 引擎默认的跳跃事件，如按空格、向上箭头；
- `Input Touch` 触屏输入，触摸时就会跳跃，离屏就停止跳跃动作；
- 两个事件的 Pressed 执行流程都会调用角色的 Jump 函数；
- 两个事件的 Released 执行流程都会调用角色的 StopJumping 函数；

也可以直接设置一个 Keyboard Events J 事件来触发跳跃动作，但是这样硬编码不是很好。

UE4 的工程配置中，默认设置了用户输入的事件映射关系：

- Action Mappings 配置中将 W、UP、SpaceBar、Gamepad Face Button Bottom 即手柄的 A 按钮映射为 Jump 事件；
- Axis Mappings 配置中将 A、D、Left、Right、Gamepad Left Thumbstick X-Axis 即手柄的左摇杆的左右方向映射为移动事件；

相当于使用 C++ 代码的 BindAxis 和 BindAction 方法绑定事件与调用函数：

```cpp
void AMyPawn::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    Super::SetupPlayerInputComponent(PlayerInputComponent);
    // 移动轴事件逐帧反应，并提供 AxisValue 值。
    PlayerInputComponent->BindAxis("MoveRight", this, &AMyPawn::move);
    // 动作事件只在按下或松开按键时做出响应。
    PlayerInputComponent->BindAction("Jump",IE_Pressed,this,&AMyCharacter::jump);
}
```

绑定是通过委托 Delegate 泛型类型安全实现的，参考 `InputComponent` 类实现。

涉及对象的源代码位于 Paper2D 插件和 Engine\Source\Runtime\Engine\Classes\GameFramework\Actor.h

地图中有一个 PlayerStart 对象，表示游戏玩家的出场位置。

另一个重要的对象是 2DSideScrollerGameMode，它是一个 Data-Only Blueprint Class，只是单纯继承 AGameBase 基类。工程模板只创建这个可使用简单人物的 GameMode 对象，并让它使用人物角色，在 Default Pawn Class 属性指定 2DSideScrollerCharacter，这样开始游戏时，引擎就会将其实例化作为玩家操控的角色。

- 在 Content Browser 中，单击 New 按钮，然后单击 Blueprint Classs 选项。
- 在弹出的窗口内单击 Game Mode 按钮，以它为父类。
- 命名后打开 GameMode 蓝图并单击 Defaults 选项卡。
- 在 Defaults 选项卡的 Classes 部分，单击 Default Pawn Class 下拉菜单并选择新人物。
- Compile 并 Save，然后关闭蓝图。
- 在主编辑器窗口中，单击菜单栏上的 Edit 按钮并选择 Project Settings。
- 现在，我们要让我们的项目使用新建的 GameMode。
- 在 Project Settings 中，单击 Maps & Modes 选项。
- 在 Maps & Modes 的 Default Modes 部分，单击 Default GameMode 下拉菜单并选择你的 GameMode。

最后，游戏的进行还需要一个场所，即 Level Map 中设计的场景，项目提供的是 2DSideScrollerExampleMap，还有相应的 MapBuildData 即地图注册数据。 

通过 Project Settings -> Project -> Maps & Modes 可以给项目指定一个 GameMode 对象：

- Default GameMode 指定工程默认游戏模式对象；
- Game Startup Map 指定开始游戏时加载的关卡地图；
- Editor Startup Map 指定打开编辑器时加载的关卡地图；

每个关卡都有一个默认的关卡蓝图 Level Blueprint。它很特别，与一般的蓝图不同，它是管理整个地图的全局事件，并且 UE 4 不允许自己创建关卡蓝图。

另外，场景内容已经将 Pawn 角色添加到场景，并且将其指派给第一个玩家控制：Details -> Pwan -> Auto Possess Player，另外还可以指派给 AI 控制器来控制。

此工程模板中的关卡蓝图并没有设置什么功能，只是布置了场景内容的一些跳台和阻挡物。

这也是一个简单的功能示范，缺少完整游戏的其它功能，比如与敌人的搏杀，武器，关卡的转换，各种上 NPC 角色的设置等等。

下一步，通过官方文档学习其它关键内容，也可以使用官方提供的学习示范资源，如 Content Examples 就包含大量基础的知识点示范案例。


## ⚡ Sequencer & Matinee 过场动画
- Sequencer 过场动画 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/
- Matinee 过场动画 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Matinee/
- 游戏引擎架构 Game Engine Architecture by Jason Gregory，译者 叶劲峰
- Sequencer快速入门 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/QuickStart/
- Sequencer 快捷操作速查表 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/CheatSheet/

虚幻引擎拥有强大的过场动画工具，可以帮助你创建动画及过场动画序列。你可以引导摄像机在关卡中穿梭飞行，也可以为光源添加动画、移动对象、为角色添加动画、渲染输出序列等。这些工作流的核心是 `Sequencer` 序列编辑器，这是一个功能强大的非线性编辑工具。在虚幻引擎中创建过场动画内容时，序列编辑器就是最主要的工具。

利用序列录制器 Sequence Recorder，您可以在关卡编辑或游戏进程期间采集指定的 Actor，另存为一个新的关卡序列，还可以在 Sequencer 内进行编辑。这对于快速采集场景的内容非常有用，因为您可以使用一个可操作角色，在游戏进程中执行一些操作，同时使用序列录制器进行录制，然后将这些数据输入到 Sequencer 中，围绕这些数据创建一个过场动画。

Sequencer 编辑器使用户能够用专业的多轨迹编辑器创建游戏内过场动画。通过创建 Level Sequences 和添加 Tracks，用户可以定义各个轨迹的组成，这样将确定场景的内容。

轨迹可以嵌入多层，但每层可以使用的轨迹类型受到上一层轨迹类型约束，顶级的轨迹参考：

- Audio Track，音频轨迹用于包括音乐或音效；
- Shots Track 多镜头组织轨迹镜头组件轨，在一个序列中组织其它序列提供的动画镜头，可以方便进行多序列编辑；
- Camera Cuts Track 摄像机组件轨迹，在同一个序列中组件多个摄像机的镜头；
- Event Track 播放过场动画时触发事件来启动部分脚本功能，有 Trigger 和 Repeater 两种类型，前一种可以设置关键帧来触发事件。

其它二级轨迹类型参考：

- Animation Track，用于 Skeletal Mesh 对象装入角色动画 Animation Skeletal Mesh；
- Transformation Track，记录场景中的对象的移动、旋转等；
- Camera Shake Track 镜头晃动效果；
- Camera Animation 镜头动画；
- Attach
- Patch 将对象绑定到路径对象，如 Camera Rig Rail 摄像机轨道。

利用事件轨迹，可将过场动画中要调用事件的指定帧设为关键帧。比如打开或产生粒子效果，并以某种方式影响玩家。无需访问蓝图，即可通过 Sequencer 轨迹添加事件。可向对象添加多个事件，也可向单个事件添加多个对象绑定。若打开蓝图，还可向一个事件添加多个参数。

### ✒ Sequencer Shortcut 快捷操作

Sequencer Editor 快捷键：

- Enter 在所选轨道的当前时间位置设置一个键。
- Space 播放或暂停所选序列的播放；
- Ctrl + G 转到序列中设定的时间/帧。
- Home 重置轨迹区的缩放/视图范围。
- - 和 = 以 10% 为增量缩放视图范围。
- , 和 . 在设置的关键帧之间前后移动。
- Down 播放所选序列。
- Up 返回到所指定播放范围的开始位置。
- Left 在当前序列中逐帧回退。
- Right 在当前序列中逐帧前进。
- [ 或 ] 限制播放范围；
- I 或 O 设置选区起止点；

在关卡中选择 Actor 后，选中轨道后按以下快捷键可在当前时间位置添加关键帧。

- S 添加一条转换子轨道（如果尚不存在该子轨道），并添加对应位置、旋转和比例的键。
- Shift + W 添加一条转换子轨道（如果尚不存在该子轨道），并只添加对应位置的键。
- Shift + E 添加一条转换子轨道（如果尚不存在该子轨道），并只添加对应旋转的键。
- Shift + R 添加一条转换子轨道（如果尚不存在该子轨道），并只添加对应比例的键。

使用下列数字键来设置所选键的关键帧插值方法，注意图标变化对应不同的插值方式：

- 1 将所选键设置为使用自动切线。
- 2 将所选键设置为使用用户定义的切线。
- 3 将所选键设置为使用间断切线。
- 4 将所选键设置为使用线性切线。
- 5 将所选键设置为使用常量切线。

在轨迹区中选择某个片段（音频或动画资产以及摄像机，等等）之后，可使用下列命令进行编辑。

- Ctrl + / 在当前时间位置分割当前片段。
- Ctrl + , 修剪掉当前片段中位于当前时间位置左侧的部分。
- Ctrl + . 修剪掉当前片段中位于当前时间位置右侧的部分。

轨道组织

- Ctrl + O 所选轨道的展开/折叠开关。
- Shift + O 所选轨道及其子轨道的展开/折叠开关。

打开关卡序列后，按住以下组合键将对象从 Place Actors 面板或内容浏览器拖到视口时，会将这些对象自动添加到 Sequencer。

- Ctrl + 拖动资产到视口，这会将对象自动添加到 Sequencer。
- Shift + 拖动资产到视口，这会将对象作为 Spawnable 可再生对象自动添加到 Sequencer。

在 Matinee 中，过场动画中的所有内容都必须存在于关卡中，并被 Matinee 占有，以便获得每个 Actor 的控制权和向 Actor 提供指令。 它存在于 Sequencer 中，但也有一个 可生成物（Spawnables） 概念，即你可以将 Actor 转换为 Sequencer 不需要占有、而是在需要时产生的对象。 如果你有要在多个关卡中复用的内容这将很有用，因为 Actor 不再与关卡绑定，而是与关卡序列绑定。

Viewport 快捷键：

- Shift + C 将活动视口切换到过场动画视口查看模式 Cinematic Viewport。
- Shift + D 将活动视口切换到默认视口查看模式 Default Viewport。
- Ctrl + Shift + T 切换活动视口中工具栏的显示。
- G 进入游戏视图（隐藏所有编辑器图标）。

### ✒ Sequences 过场动画

创建关卡序列操作：Content Browser -> Animations -> Level Sequence，然后再将其放置到关卡中。

通过菜单 Window -> Cinematics -> Sequencer 打开过场动画和序列编辑器。
 
在详细信息（Details）面板中，你可以定义 Level Sequence 是否将在关卡开始时自动播放，序列是否应循环，序列的播放速率（Play Rate for the Sequence）和其他设置。

与 Matinee 不同，Level Sequence 是自包含资源，你可以将一个关卡序列嵌入到另一个关卡序列中。例如，你可以创建具有动画角色和摄像机的关卡序列作为一个场景，而该场景是更大的过场动画序列的一部分。

创建关卡序列后，双击它以打开 Sequencer Editor，这样你便可以开始创建你的过场动画。

对于一个新建的空关卡序列，要做的第一件事是添加一个轨迹（`Track`），注意，Track 是可以嵌套的：

- Track 的类型决定它可以记录什么数据，关联的类型决定了轨迹的关键帧数据如何作用于场景中的对象；
- 比如，*Audio Track* 可以在关键帧中记录当下的 Pitch 音调和 Volume 音量等信息。
- Material Parameter Collection Track 可以记录材质的参数变化。
- Camera Cut Track 用于在 Sequencer 中多个摄像机画面的切换，使用 + 号以在轨道上添加镜头片段。
- Shot Track 用于切换编辑多个 LevelSequence，相同名称不同编号的镜头会被识别为副镜头（Take），方便在片段上切换。
- Subsecene Track 用于嵌套编辑多个 LevelSequence 之间的混合。

从 + Track 按钮的下拉菜单 Actor To Sequencer 将已在关卡中的任何 Actor 添加到 Sequencer，然后可以给它们添加属性轨迹，比如 Transform Track 来记录对象的位置，比如摄像机的镜头控制。

设置视口选项 Viewport Options -> Allow Cinematic Control 允许过场动画控制。设置视图模式 View Mode -> Cinematic Viewport 切换为过场动画视口，这会将选定的视口转为过场动画视口，然后可以在 Sequencer Editor 中的摄像机轨迹中激活要播放的镜头画面。

点击在摄像机轨迹右侧的摄像机图标按钮，将视口锁定到摄像机（Lock Viewport to Camera），再次点击就解锁摄像机。处于锁定的摄像机就是进入了 Pilot 模式，Ctrl + Shift + P，可以使用 WASD 加鼠标点进行镜头调整。

Sequencer 包含强大的摄像机工具，可方便你使用虚幻引擎制作电影。在对象放置面板 Place Actors -> Cinematic 下有三个和摄像机动画有关的 Actor，它们可以控制镜头运动：

- Camera Rig Crane 摄像机吊臂，升降器绑定，是拍电影的常用工具。
- Camera Rig Rail 镜头导轨车绑定，摄像机平移推车。
- Cine Camera Actor 电影专用摄像机。

通过 Place Actors -> Cinematic 选项卡，将一个摄像机导轨（Camera Rig Rail）资产拖动到关卡中。在关卡中选择 CameraRigRail，然后选择两端的控制点，通过移动、旋转来改变轨道形状。控制点可以复制，保持控制点选中的情况下，按住 Alt 然后拖动即可以复制出另一个点。多次端点复制，就可以调整出任意的轨道，比如周围形成一个平滑的环形。

使用摄像机导轨的目的就是让摄像机沿着轨道移动，在面板中设置 Details -> Current Position on Rail 设置 0.0 ~ 1.0 的值表示轨道的起点到终点。通过全局大纲（World Outliner），将 CineCameraActor 拖放到 CameraRig_Rail 上就可以连接它，使用电影摄像机沿着轨道运行。同样，Camera Rig Crane 摄像机吊臂也可以和 Camera Rig Rail 相互形成子级被控的关系。或者在 Viewport 中使用右键菜单 `Attach To` 将其添加到吊臂的子级。

摄像机吊臂设置麻烦点，其对象本身分基座和吊臂两部分，双击吊臂歌词对其单独进行移动、缩放操作，但是旋转操作需要通过 Details 面板来设置。因为其内部有骨架控制 CraneYawControl & CranePitchControl。

Details -> Crane Controls 面板中设置：

- Crane Pitch 吊臂俯仰角度；
- Crane Yaw 偏向角度；
- Crane Arm Length 吊臂长度；

同样，在 Sequencer Editor 中，也需要为吊臂轨迹添加相应的属性轨道。


电影摄像机将是在 Sequencer 中使用的主要电影摄像机对象，它包含用于模拟真实世界摄像机镜头和机身的各种属性。你可以控制焦距、镜头设置、光圈、颜色分级，以及各种其他后期处理效果。

向场景中添加电影摄像机，保持选中 CineCameraActor 的情况下，按 S 为当前 Transform 轨迹添加一个关键帧。此操作让 Sequencer 知道摄像机的起始位置和移动起点，将时间轴移动到关卡序列的结尾，并调整摄像机，然后按 S 在所需位置添加一个关键帧。这样一来，我们的场景中就有了一些摄像机运动。

在 CineCameraActor 的 Details -> Current Camera Settings 面板中，设置：

- Look at Tracking Settings 部分：
    - Enable Look at Tracking - 选取此选项可以让摄像机跟踪 Actor，即镜头始终看向某一角色。
    - Draw Debug Look at Tracking Position - 显示调试观看跟踪位置，选取此选项可以让我们看到摄像机正在观看的位置。
    - Actor to Track - 指定要跟踪的对象，比如将此项设置为场景内的 Character，因为我们希望在镜头中跟踪此角色。
    - Relative Offset - 相对偏移，将 Z 设置为 60 以将跟踪位置从默认跟踪位置稍稍提高。
    - Look at Tracking Interp Speed 设置镜头跟踪时的响应速度。
- Lens Settings 部分，将最小焦距（Min Focal Length）设置为 50.0mm，最大焦距（Max Focal Length）设置为 1000.0mm。最小/最大焦距设置将影响我们可以应用焦距的范围，稍后我们就将以毫米为单位设置焦距。
- Focus Settings 部分，设置 Focus Method 为 Tracking。Actor to Track 旁边滴管用来选择关卡中的角色，焦点始终跟踪我们选择的 Actor。


还可以给摄像机创建镜头抖动效果，首先需要创建振动源组件，添加晃动源，从 Place Actos 中搜索 Camera Shake Source，并拖动到关卡上。然后使用蓝图扩展 CameraShake > MatineeCameraShake 两者之一，得到摄像机晃资产蓝图，然后在 Sequencer、蓝图和摄像机晃动源中播放它们。

- 从 Sequencer 播放，只需要给电影摄像机轨道上增加 Camera Shake 摄像机晃动轨道，并从菜单中选择摄像机晃资产蓝图。
- 从蓝图播放，使用 Start Camera Shake 节点，从蓝图播放晃动。该节点包含用于指定晃动、比例和播放空间的参数。

摄像机晃动源会基于摄像机与某个位置的接近程度来触发摄像机晃动，它还包含控制晃动影响的大小和半径。你可以将其添加为关卡的 Actor，或在蓝图中添加为组件。

双击打开摄像机晃动蓝图资产的编辑器，可以在 Class Defaults 设置中看到 Camera Shake Pattern 拥有以下基本细节：

- Single Instance 勾选仅允许播放此晃动的单个实例一次。随后尝试播放此晃动将重新启动它，而不是额外分层。
- Root Shake Pattern 根晃动模式设置要使用的晃动类型，晃动模式控制摄像机晃动的形状和行为。
    - Perlin Noise 柏林噪声模式，通过基于指定的振幅和频率对随机点进行采样，可以生成随时间变化的 Perlin 噪声。
    - Sinusoidal Wave 正弦波晃动模式，使用拥有平滑周期振荡的连续波生成随时间变化的噪声。通常，波噪声对于较低强度的晃动非常有用，如摇摆的船或梦幻般的漂流效果。
    - Sequence Shake 序列晃动模式，使用摄像机动画序列中包含的摄像机动画生成晃动。如果希望完全控制摄像机晃动的样式和行为，序列噪声会非常实用。
    - Matinee Camera Shake 过场摄像机晃动
    - Composite 合成晃动可通过添加子模式，将 Perlin、正统波和序列式晃动组合到一个层系统中，创建包含来自每种晃动类型的元素的更多元的晃动。

然后给 `Location`、`Rotation`、`FOV` 的各个分量设置振幅和频率，并且可以给它们设置倍频器将各个分量效果统一放大。在 Timing 中设置作用时间，`Duration` 设置小于或等于 0 表示晃动一直有效，混合输入/输出时间 控制晃动开始和结束时的线性混合长度，0 值表示不会发生混合。。 


在 Sequencer 中进行操作时，用户可修改 Actor 状态，并在过场动画结束后将状态保留。举例而言，创建一个过场动画，角色解锁并打开一扇门，之后这扇门仍然保持打开状态。然而在影片制作环境中，用户可能需要在镜头中设置动画数值，使其及时返回设置动画之前的状态，避免渗入到下个镜头中。用户可通过 `When Finished` 属性以每个轨道为基础来确定轨道应返回设置动画之前的状态，或在序列播放完成后保留修改。序列中设置 `Keep State` 是本地效果，Level Sequence 还有一个全局选项在 Details 面板中，`Restore State` 选项将在关卡序列停止播放时保存所有状态。如要在序列完全结束后保持轨道的状态，则需要将动画序列设为 Keep State，且 Level Sequence 没有勾选 Restore State，否则全局值将覆盖本地设置。


Matinee 动画工具可对 Actor 属性设置随时间变化动画，以创建动态游戏进程或游戏中过场动画序列。该系统基于对专用动画轨迹的使用，可在该轨迹上放置关键帧来设置关卡中 Actor 的部分属性值。Matinee 编辑器与用于视频编辑的非线性编辑器类似，使其为专业视频制作者所熟知。

虚幻引擎 4.24 无法再通过过场动画（Cinematics）菜单和细节面板访问 Matinee 编辑器，后续版本将会移除这一功能。

在创建好过场动画之后，甚或在制作过程中作为日常审核工作的一部分，你可能想要将其渲染成可与其他人共享的电影文件。通过 Sequencer 中的工具栏，渲染影片（`Render Movie`）选项使你能够通过可用大部分媒体播放器播放的 AVI 文件与其他人共享电影。

在渲染电影设置窗口，可以设置输出图片或 AVI 视频格式，单击 Capture Movie 按钮以开始记录场景的采集过程。注意选择输出目录，如果没有写入权限会提示 Read Only Output Directory。输出 AVI 会和音频分离，可以使用 FFMPEG 工具进行合并，但是处理 AVI 编码好像有问题，不能得到正确输出。可以使用 Blender 提供的 Video Sequencer 进行后期处理合成。

渲染过场动画时，在 Burn In Options 设置外可能还需要提供额外信息或功能，包括时间、镜头和帧信息。通过 虚幻动态图形和蓝图可视化脚本 即可创建自定义烧入和覆层功能。

还可以使用 Movie Render Queue 插件。

在 Content Browser 上单击右键创建一个 *LevelSequenceBurnInInitSettings* 类型的蓝图类，通过它可以制定渲染电影时的烧入内容，例如文字。在 Content Browser 中点击 View Options -> Show Engine Content。进行此操作后即可查看和使用随引擎内容提供的字体选项。

*Level Sequence* 是过场动画场景的容器，必须创建它才能使用序列编辑器（*Sequencer Editor*），这两个概念要区别，否则打开序列编辑器时看不到有用的内容。Master Sequence 也就是包含其它序列，作为一个主要序列来使用而已。

在使用序列编辑器前，先设置合适的视口布局，Viewport 
对于创建好过场动画序列，还可以使用 Instance Data 对场景中的 Actor 应用动态变形数据（Dynamic Transforms），但需要将整个场景移到关卡中的新位置。

例如，角色的行走序列动画已经制作好，但是新的运动起点及路线需要偏移，这样就可以使用实例数据来应用变形：

- 关卡中任意放置一个 Empty Actor，它只用来提供位置、旋转等信息。 
- 将序列放置到关卡中，设置 Details -> Playback，启用自动播放（Auto Play）、无限循环（Loop Indefinitely）。
- 设置 Details -> Instance Data，勾选覆盖实例数据（Override Instance Data），并选择前面放置的 Empty Actor 作为 Transform Origin Actor。
- 变形原点对象（Transform Origin Actor）被序列用作新原点参考，让序列的运动变形相对于指定的原点参考进行。 

为了获得最佳结果，需要让 Empty Actor 的变形先归零，然后再在 Sequencer 中为其添加关键帧。如果为变形数据添加关键帧，而它并不是零，则在关卡中移动 Transform Origin Actor 时会应用偏移值。 
-> Viewport Options -> Layout 下选择视口布局，比如垂直的两个窗格（Vertical Two Panes）。

另外，每个序列通常只设置一个镜头，这样可以保持序列的简洁性，当然，在同一个序列可以也可以利用 `Shots Track` 或者 `Camera Cuts` 来组织多个镜头。多镜头过场动画，可以从取景菜单（Take Menu）中使用不同的取景（Takes）。镜头的组织，只是 Sequencer 功能的一小部分，但它彰显了该工具的一些核心方面，你可以使用它们来创建场景。


### ✒ Sequence 混合动画蓝图
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/HowTo/GameplayAnimBlending/
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/HowTo/BlendingAnimBPs/

要将 Sequencer 中指定的动画与角色动画蓝图中定义的动画相混合，可以使用 Sequencer 中的动画轨道的插槽（Slot）节点和权重（Weight）属性来完成。 

在本示例中，我们从动画蓝图获取闲散姿势，并将它混合到 Sequencer 中定义的奔跑动画中。 

角色首先为闲散姿态（这是动画蓝图中的状态），然后将混合到我们在关卡序列中指定的动画（奔跑），最后恢复为闲散姿态。 

在本操作指南中，我们现在使用 蓝图第三人称模板 项目。

操作步骤：

- 在 Content/Mannequin/Character/Mesh 文件夹中，右键单击 *SK_Mannequin* 并创建动画蓝图（Anim Blueprint）。
- 双击打开动画蓝图，并拖入 *ThirdPersonIdle* 动画序列，连接到插槽（Slot）节点，再连接到（Final Animation Pose） 节点。 
- 请注意，插槽（Slot）的默认名称是 *DefaultSlot*，这是在关卡序列中引用的名称。 
- 将（Anim Blueprint）拖到关卡，然后从主工具栏中，通过菜单添加关卡序列 Cinematics -> Add Level Sequence。
- 向序列添加动画蓝图，然后添加/循环 *ThirdPersonRun* 动画来填充序列。
- 展开动画轨道，然后设置权重值为 0.0 并向序列添加一个键，Animation -> Weight。 
- 通过将权重设置为 0.0，表示在增大权重值之前不使用该动画的任何部分。 
- 为权重属性添加一个键，值为 1.0，位于帧 75 处，再添加另一个键，值为 0.0，位于帧 150 处。
- 这将从 0.0 混合到 1.0（动画的完整效果），然后再回到 0.0。 
- 通过右键添加的三个键，ThirdPersonRun Track -> Properties 下面，注意 插槽名称（Slot Name） 和我们 键（Keys）。
- 插槽名称必须互相匹配，这样 Sequencer 才能知道你所指代的是哪个插槽，并传递权重值。 
- 设置关卡序列为无限循环播放，Details -> Auto Play -> Loop -> Loop Indefinitely。
- 在编辑器中运行测试，从主工具栏点击（Play in the Editor）。


在创建过场动画序列时，你可能希望将现有的游戏进程动画与包含在关卡序列中的动画混合在一起。例如，一个可操作的角色在游戏过程中走到一扇门前，你想要 Sequencer 显示该角色的动画并打开这扇门。或者玩家在第三人称射击游戏中控制他们的角色绕过一个死角，而你想要混入一个死亡的过场动画序列。通过使用 Sequencer、蓝图和动画蓝图的组合，你可以将你的角色所处的任何游戏姿势与 Sequencer 定义的 插槽（Slot）动画混合在一起。

首先，需要在关卡序列的动画轨迹（Animation Track），通过关键帧右键菜单将完成时（When Finished）属性更改为保持状态（Keep State）。这将使我们能够在关卡序列结束时保存动画状态。

另外，请注意下面突出显示的 插槽名称（Slot Name）属性。

当动画蓝图控制一个骨架网格体时，Sequencer 在该蓝图中的插槽上播放动画，并可通过插槽名称（Slot Name）属性进行控制。然后动画蓝图可以混合插槽动画和任何游戏逻辑驱动的动画（你的角色恰好在该动画中）。

后续设置动画蓝图和角色蓝图，以混合各个游戏动画。

在这一步中，我们将设置动画蓝图，以便能够获取我们的游戏进程姿势，并混合到我们的关卡序列所定义的某个插槽动画中。

- 在内容浏览器（Content Browser）找到并打开动画蓝图，打开（My Blueprint）窗口中的动画图表（AnimGraph）。
- 在现有 Locomotion 状态机的动画图表（AnimGraph）中，创建一个（New Save cached pose）并称其为 *lococache*。
- 使用 *lococache* 两次，并将其中一个连接到提供（Final Animation Pose） 的 Blend 节点的 A 引脚。
- 另一个 *lococache*，使用一个 Slot 节点并将其连接到该 Blend 节点的 B 引脚，然后右键单击 Alpha 和 提升到变量（Promote to Variable），并称其为 Blend Interp。
- 在内容浏览器中，打开 Ue4ASP_Character 蓝图并将 蹲伏（Crouching） 部分替换为以下图表。

上文中，我们将 InputAction Crouch 节点替换为 C 键盘事件和一个 Flip Flop 节点，以切换蹲伏状态。

该蓝图最初是为另一个项目创建的，其中包含蹲伏的输入绑定，而我们的模板项目不包含该输入绑定。通过将InputAction Crouch替换为标准的C键盘事件，我们将消除蓝图警告消息，并使我们能够按下C键以在蹲伏和非蹲伏状态之间切换。

创建一个名为 DefaultSlotInterp 的新 Float 变量，并将 可编辑实例（Instance Editable） 和 向过场动画公开（Expose to Cinematics） 设置为 True。

我们将在Sequencer中使用该变量进行混合，并将值传递给用于处理实际混合的动画蓝图变量 Blend Interp。

在 细节（Details） 面板中创建一个名为 SetDefaultSlotInterp 的新函数，并添加一个名为 Interp，类型为 浮点（Float） 的 输入（Input）。

通过创建一个名为 Set (Property Value Name) 的函数，我们创建了一个 Proxy 函数，当相关属性值发生更改时，Sequencer将调用该函数。该函数仅在属性值发生更改时才调用，并且比使用 时钟事件（Even Tick） 或某个 自定义事件（Custom Event） 和 时间轴（Timeline） 更能有效地反映 DefaultSlotInterp 属性值中的变化。

从 组件（Components） 窗口中，拖入 网格体（Mesh） 并使用 获取动画实例（Get Anim Instance） 和 转换为UE4ASP_HeroTPP_AnimBlueprint（Cast to UE4ASP_HeroTPP_AnimBlueprint）。

离开 As UE4ASP Hero TPP Anim Blueprint 节点，使用 Set Blend Interp 节点并将 Interp 值传递到 Blend Interp 输入。

当我们的 DefaultSlotInterp 值通过Sequencer进行更改时，将调用 SetDefaultSlotInterp 代理函数，并将浮点值传递给动画蓝图的 Blend Interp 值，该值将影响姿势的混合。

在下一步中，我们将添加 默认插槽插值（Default Slot Interp） 属性到我们的关卡序列中，以便我们能够控制动画蓝图中的 混合插值（Blend Interp）。我们还将在关卡中添加一个触发框，这样我们就可以激活关卡序列并在玩家进入触发框体积时播放它。




### ✒ Sequence 相关内容
- 模板序列 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/Overview/TemplateSequences/
- 混合Gameplay和Sequencer动画 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/HowTo/GameplayAnimBlending/
- Sequencer 混合动画蓝图 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/Sequencer/HowTo/BlendingAnimBPs/

在蓝图中使用 Sequence，可以在选中状态下，通过蓝图图表的右键菜单创建实例 Create Reference to SquenceXXX。

然后，从序列实例可以引出 Sequence Player 属性，通过它可以执行 `Play`、`PlayReverse`、`Stop` 等等动画播放相关动作，`StopAtCurrentTime` 会在本轮播放结尾时停止，另外，`PlayLooping` 可以设置循环播放，无限循环指定次数为 -1。如果希望指定序列位置进行播放，使用 Set Playback Position 节点，让序列从头开始播放，播放位置设为 0 或序列的开头。

创建游戏进程过场动画时，有时需要在 Sequencer 中对运行时动态生成的对象设置动画。 举例而言，用户可创建一个带动画的对象，使其在 Sequencer 中沿路径移动，而该对象可由玩家（玩家在游戏进程中生成）进行定义。 在蓝图可视化脚本的协助下，用户可使用 *Get Sequence Bindings* 节点从关卡序列公开绑定辨识符，并使用自有设置覆盖这些绑定。

序列绑定相关操作：

- *Add Binding* 添加绑定。
- *Remove Binding* 移除绑定，从指定的绑定移除指定的actor。
- *Reset Binding* 重设绑定，将指定的绑定重设回默认设置。
- *Reset Bindings* 重设多项绑定，将所有覆盖的绑定重设回默认设置。
- *Set Binding* 设置绑定，用指定的actor覆盖指定的绑定。

`Templates Sequence`模板序列可以将 Sequencer 中创建的动画数据复用于（相同或继承的）兼容类的 Actor。就像 Animation Sequence 动画序列可以在兼容骨骼网格体上播放那样，模板序列动画也可以在兼容 Actor 上播放。

你可以创建要重复使用的特定轨道或整个序列，并将其关联至特定对象绑定，类似于如何在任何兼容的骨架网格体上播放骨骼动画。此外，可以像任何其他序列一样控制和编辑模板序列。

在 UE4 版本上，创建模板序列时会先进行 Pick Root Object Binding Class，而在 UE5 版本上，在创建后再打开模板序列编辑界面，点击工具栏的锁链图标进行绑定设置。

模板序列常用于创建模板摄像机动画，Camera Animation Sequence 通常和 Templates Sequence 配合使用。


模板序列要求你将 Actor 绑定为 *Spawnables*，以便制作动画。可以从内容浏览器或 Place Actors 面板拖放 Actor，将其绑定或重新绑定到模板序列，并且可以看到有闪电图标。注意，你只能将单个 Actor 添加到一个模板序列，因为添加不同类型会更改当前绑定。

直接从 World Outline 拖放 Actor 到 Template Sequence 会显示红色状态，并且不可以设置为 Spawnables。

根据需要，设置关键帧的数据混合方式，通过关键帧右键菜单操作，设置混合类型（Blend Type）：

- 附加（Additive）将关键帧的数据变化叠加到场景中的对象属性值。
- 相对（Relative）将关键帧的数据变化相对于场景中的对象属性值进行变化。
- 绝对（Absolute）将关键巾的数据变化作为场景中的对象的属性绝对值。
- 从基础附加（Additive from Base）。

应用模板序列动画：

- 首先，Actor 的类必须匹配模板序列绑定到的类。
- 在关卡序列中，点击（+ Track）按钮，然后选择你的模板序列资产。
- 
模板序列轨道

你可以将模板序列动画应用于相同类的Actor。如果模板是附加的，动画将以附加方式应用于Actor的当前位置。

通过蓝图使用模板序列：Create Template Sequence Player 

- 在蓝图中，添加 Create Template Sequence Player 蓝图节点，在运行时将模板序列应用于 Actor。添加后，从节点上的下拉菜单选择你的模板序列资产。
- 从 Template Sequence Player 节点调用 Set Binding，将（Out Actor）连接到目标（Target）引脚。
- 将你要向其应用模板序列动画的 Actor 的引用连接到 Set Binding 节点的 Actor 引脚。
- 最后，添加 Play 节点并从 Create Template Sequence Player 节点的 返回值（Return Value）引脚连接。



动画蓝图 `Animation Blueprint` 可以和 Sequencer 进行动画混合，使用 Sequencer 中的动画轨道的插槽（Slot）节点和权重（Weight）属性来完成。 

动画混合可以将两个动作的融合，比如从动画蓝图获取闲散姿势，并将它混合到 Sequencer 中定义的奔跑动画中，可以使用 Third Person Shooter 蓝图模板提供的素材：

- 首先，为 Mannequin/Character/Mesh/SK_Mannequin 骨骼对象创建动画蓝图（Anim Blueprint）。
- 在动画蓝图（Anim Blueprint）中，拖入 ThirdPersonIdle，并连接到（Slot）节点，然后连接到（Final Animation Pose） 节点。 
- 请注意，插槽（Slot）的默认名称是 *DefaultSlot*，这是我们将在关卡序列中引用的名称。

将 动画蓝图（Anim Blueprint） 拖到关卡，然后从主工具栏中，选择 过场动画（Cinematics） 并选择 添加关卡序列（Add Level Sequence）。

给关卡序列指定任意名称和保存位置。 

向序列添加 动画蓝图（Anim Blueprint） 角色，然后添加/循环 ThirdPersonRun 动画来填充序列。 

展开动画轨道，然后将 权重（Weight） 值更改为 0.0 并向序列添加一个键。 

通过将权重设置为0.0，我们表示在增大权重值之前不使用该动画的任何部分。 

为 权重（Weight） 添加一个键，值为 1.0，位于帧 75 处，再添加另一个键，值为 0.0，位于帧 150 处。

这将从0.0混合到1.0（动画的完整效果），然后再回到0.0。 

右键单击 ThirdPersonRun 轨道，然后在 属性（Properties） 下面，注意 插槽名称（Slot Name） 和我们添加的三个 键（Keys）。

插槽名称是指代动画蓝图中添加的插槽节点的名称。这些名称必须相匹配，这样Sequencer才能知道你所指代的是哪个插槽，并传递权重值。 

选择关卡序列，然后在 细节（Details） 面板中，启用 自动播放（Auto Play） 并将 循环（Loop） 设置为 无限循环（Loop Indefinitely）。

从主工具栏，选择"在编辑器中运行"（Play in the Editor）。


虽然我们的示例使用闲散动画作为最终动画姿势，但使用这种方法可以生成整个状态机，以根据任意数量的系数在动画蓝图中产生最终动画姿势，然后混入关卡序列中定义动画。 

举例而言，NPC可以定义一些逻辑来控制它们所处的姿势，玩家可以接近该NPC，从而触发一个剧情画面，你可以用Sequencer中定义的动画来覆盖动画逻辑。


通常，如果你在创建包含了角色、动物、生物或沿着这些会动画化并移动之线条的任何东西的过场动画，则你将获得一个相关的骨架网格体，并需要将其添加到Sequencer。例如，我们有一个放在关卡（Level）中的熊的骨架网格体（Skeletal Mesh）（见下图）。选择这头熊后，我们可以单击Sequencer中的 轨迹（Track） 按钮，并选择 Actor至Sequencer（Actor To Sequencer），以便我们在Sequencer编辑器（Sequencer Editor）中添加并控制它。

一旦添加了骨架网格体（Skeletal Mesh），我们就可以添加 子轨迹（Sub-tracks） 以影响该骨架网格体（Skeletal Mesh）。


## ⚡ Skeletal Mesh Animation 基于骨骼的动画系统
- 骨架网格体动画系统 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/
- 动画系统概述 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Overview/
- 骨架资源 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Skeleton/
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/ControlRig/

虚幻引擎 4 动画系统由多个动画工具和编辑器构成，其将基于骨架的变形与基于变形的顶点变形相结合，从而构建出复杂的动画。 该系统可以用于播放和混合预先准备好的 `Animation Sequence` 动画序列让基本玩家运动显得更加真实，创建自定义特殊动作，如伸缩台阶 和墙壁（使用动画蒙太奇 `Animation Montage`），通过变形目标 应用伤害效果或面部表情，使用骨架控制 `Skeletal Controls` 直接控制骨骼变形，或创建基于逻辑的状态机 `State Machines` 来确定角色在指定情境下应该使用哪个动画。

基本概念了解：

基于骨骼动画系统中，最重要的基本概念就是`Skeleton`骨架，它是骨骼位置和旋转的层级结构，用于使*Skeleton Mesh*骨架网格体变形。在 UE4 中，骨架是从其自己资源中的骨架网格体分离出来的。这意味着，动画将应用于骨架，而不是骨架网格体。通过使用相同的骨架，多个骨架网格体可以共享动画。

`Animation Sequence`动画序列是可在骨架网格体上播放的单个动画资源。这些序列包含各个关键帧，而关键帧又规定了骨骼在特定时间点的位置、旋转和比例。依次回放这些关键帧（相互合成）可以顺利实现骨架网格体中的骨骼动画。

`Animation Notifications`动画通知为动画程序员提供了一种方式，以便设置事件在 动画序列 中的特定点上发生。通知常用于在行走或跑步动画中添加脚步声之类的效果，或在动画中生成粒子系统。它们用途广泛，系统可随自定义通知类型进行延展，以满足各种游戏的需求。

`Animation Blueprint`动画蓝图是专用蓝图，它控制骨架网格体的动画。 你可在动画蓝图编辑器中编辑动画蓝图图表，执行动画混合，直接控制骨架的骨骼，或设置最终将定义每一帧要使用的骨架网格体的最终动画姿势的逻辑。

`Blend Space`混合空间是可以在动画图（`AnimGraph`） 中采样的特殊资源， 允许根据两个输入的值混合动画。要根据一个输入在两个动画之间实现简单混合， 可以使用动画蓝图中提供的一个标准 混合节点。混合空间提供的方法是根据多个值（目前仅限于两个）在多个动画之间进行更复杂的混合。通过指定输入、动画以及如何使用输入来混合动画，几乎可以使用通用 混合空间执行任一类型的混合。

`Animation Montage`动画蒙太奇简称"蒙太奇"，支持主要与在蓝图可视化脚本中或通过代码公开动画控件相关的各种动画效果。它们也可用于创建各种动画效果，包括动画的智能循环，基于逻辑的动画切换，等等。

蒙太奇是电影行业术语，也是剪辑手法，就是将不同的画面，不同的声音组合在一起。不同的镜头组接在一起会让单个镜头产生新的含义，进而影响了观众的理解。

`Skeletal Controls`骨架控制可对骨架资源中的骨骼进行直接控制。它们可用于在动画蓝图中进行控制一个单独骨骼、创建 IK 链等操作。可对下方的骨架进行直接控制后，便能创建过程化、动态驱动的动画。一个骨骼的变形 Transform 可用于驱动另一根骨骼，或在播放行走动画时使角色的脚与地面贴合。 任意类型的修改均可用于调整、或完全覆盖动画序列所应用的骨骼变形。

`State Machines`状态机通过图形化方式将骨架网格体的动画拆分为一系列状态。然后按照转换规则管理这些状态，转换规则可控制从一个状态混合到另一个状态。状态机大大简化了骨架网格体动画的设计流程，可以创建一张控制图来轻松控制各个角色在各动画之间运动方式，无需创建复杂的蓝图网。

它们也简化了动画图的构想过程。在设计动画时，你可以先从构思所需要的状态及角色如何从一个状态变换到另一个状态开始。最简单的一种构思方法就是，把角色的所有动画分解为一个易读的流程图表。你可以在图中看到骨架网格体的状态在其中的移动走势。

比如，当一个角色不动时，它可能处于"空闲"状态。一旦角色的速度超过某个特定的值，角色就可以混合到另一个"移动"状态。还可以有很多种其他状态，比如下降、跳跃、蹲下、疾跑等。通过使用状态机，动画师和美术师可以快速地查看其动画网络的数据流动情况。

通过 动画混合模式，你可以控制网格在从 状态机器 中的一种状态过渡到另一种状态时混合不同姿势的方式。 在状态机器的 过渡规则（Transition Rule）的 混合设置（Blend Settings）中，你可以选择设置各种不同的混合模式。

可以选择许多不同的混合功能：线性、三次、三次厄尔密、正弦、二次、圆弧、指数和定制。 对于大多数类型，你还可以分别控制对曲线进行缓 入 还是缓 出 处理。


同步组 Sync Group 使相关的动画相互保持同步，即使它们长度不一也不例外。例如，可以制作要混合在一起的行走循环和跑步循环，使角色能够流畅地加速或减速。但是，同一个角色的行走循环通常会明显比跑步循环长。在这种情况下，直接将两者混合会产生不自然的结果，比如脚部动画切换时会有很难看的"节拍"动作。

同步组解决这个问题的办法是将一个主要动画节点指定为 领导者，并调整所有相关动画的长度，使其与领导者的长度匹配。通常领导者就是具有最大混合权重的节点。随着权重混合，跟随者的权重超过领导者的权重，跟随者就会成为领导者。通过这种方式，两种动画可以流畅地相互配合，提供从一种动作到另一种动作的无缝转换。

但是请注意，由于动画的时长改变，需要考虑某些动画方面的因素。以行走循环和跑步循环的混合为例，两种动画都应该在同一只脚上开始和结束。及早建立这些标准将有助于使所有动画的混合难度大大降低！


### ✒ Skeleton & Animation 骨架与动画
- 动画序列 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Sequences/
- 动画蓝图 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/AnimBlueprints/
- 动画操作指南 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/AnimHowTo
- 动画姿势资源 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/AnimPose
- 动画状态机 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/StateMachines/
- https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/FirstPersonShooter


在多数 3D 应用程序中，骨架通常是一个数字层级架构，用于定义角色中的骨骼或关节，并以诸多方式模仿真实的生物骨架。 在虚幻引擎4中，一个重要的区别是骨架资源将 关联动画数据，而并非只是骨架网格体中的骨骼层级。 在 UE4 中，骨架资源将把骨骼（关节）数据关联到动画轨迹，从而驱动动画。

骨架资源的另一个重要方面：如果骨架网格体共享同一个骨架资源（取决于满足的基本规则），则可共享动画数据，即使层级不完全匹配也能共享。能够在骨架网格体之间共享骨架资源后，即可在多个角色之间共享动画，甚至共享整个动画蓝图，定义角色的动画逻辑。

除驱动动画外，骨架资源还负责：

- 动画重定位，便于调整比例不同的角色的动画。
- 创建和保存插槽，以便将内容附加到角色。
- 保存动画通知，以便将效果（例如脚步声、粒子系统，甚至触发其他代码的自定义事件）添加到动画。
- 保存动画曲线（可用于驱动材质参数或变形目标）和槽命名（可用于播放角色的动画蒙太奇）。

在 UE4 中创建骨架资源的主要方式是导入骨架网格体，如将 FBX 导入选项窗口中的骨架（Skeleton） 域留空，则基于正在导入的骨架网格体自动创建一个骨架资源。可以使用 Blender 这样的免费工具制作模型以及骨骼的绑定和动画调整。动画状态的调整是细节的工具，动画调整不到位就看不到真实的动画效果。原始的动画是直接使用鼠标逐个关键帧来调整骨骼的位置、旋转，如果有资金投入，可以选择更先进的动作捕捉设备来做动画，这样制作出来的动画逼真流畅。

在骨架网格体的 FBX 导入进程中，可以使用 Skeleton 下拉菜单来选择一个骨架资源与正在导入的网格体进行关联。

导入引擎的每个骨架网格体或动画都需要一个关联的骨架资源。 在 FBX 导入时可以使用现有的骨架资源（具体取决于所满足的共享骨架资源），无需单独创建骨架。 骨架的初始比例由其所创建的原始骨架网格体而定义，重定向动画时务必考虑到这点。

创建骨架的另一种方法是通过右键快捷菜单从内部网格体创建骨架。此方法可以用引擎中现有的网格体来新建一个骨架。如果该网格体有关联的其他骨架，其只会重新关联到新骨架，然后所有动画都将关联到新骨架。

在虚幻商城中提供了一套女性角色动画 Military Style Mannequins，可供免费使用。

骨架资源的一个重要特性是单个的骨架资源可以由多个骨架网格体使用。 每个骨架中的骨骼层级无需完全一致。但其需要拥有相同的整体结构。 最重要的是一个骨架网格体到另一个的骨骼层级不能被改变。 这意味着骨骼命名和骨骼的排序必须一致。

举例而言，一个躯干拥有 3 根骨骼，命名及连接关系为 1 -> 2 -> 3。

如果有第二个需要使用相同骨架资源的骨架网格体，则需要保证这些骨骼的命名和排序相同。 然而可以添加层级外部的骨骼，不含这些额外骨骼的角色不会使用此数据。例如，新层级应可以为  1 -> 2 -> 3 -> 4。

但是，为两个骨架网格体使用相同的骨架资源，就不能对层级进行重新排序或重命名骨骼。举例而言，这并非有效 1 -> 3 -> 2。在此实例中，第二个骨架网格体使用了一个不同的骨骼层级，需要一个新的骨架资源。

因为添加层级外围的骨骼为有效操作，所以可以轻松在拥有额外部分的骨架网格体之间重复使用骨架资源。举例而言，需要在3个不同但相似的角色类型之间共享动画，这三者均拥有相同的骨骼结构（和相同的骨骼命名），但存在一些关键差异：

- 一个男性人类（举例而言，这就是您的基础角色）
- 一个女性人类，拥有马尾辫骨骼
- 一个拥有四肢的类人角色

可以将同一个骨架资源用于所有这些角色，结果是骨架资源将包含所有3种类型的关节层级信息。动画将使用骨架资源来确定应用到每根骨骼的旋转。因为骨架网格体为设计制作，因此其基础骨骼层级均相同，动画将在它们之间完美兼容。唯一的差异是可能需要一些特殊动画来驱动这些角色上多出的躯干或马尾辫。

未包含在骨架网格体中的骨骼接收到动画数据时（例如马尾辫动画被用于使用相同骨架资源的角色，但此角色不带马尾辫），该动画数据将被忽略。


按组织结构，`Skeleton` 组合 *Static Mesh* 得到 *Skeleton Mesh*，添加上动画数据后得到 *Animation Sequence*。骨架可以通过 *Skeleton Mesh* 创建，也可以映射到另一个骨架 Retarget to Another Skeleton，而骨架网格也可以重新分配一副骨架，通过内容浏览器右键菜单操作 Skeleton -> Assign Skeleton。

UE4 中的动画可以简单理解为 Animation Sequence 记录的动画关键帧数据，而动画蓝图就是将这些动画数据，以状态机的形式组织起来。通过动画蓝图进行状态机管理，将各种`Animation Sequence`动画序列按状态组织到一起，在什么状态就播放什么动画。

游戏角色 Character 对象的 Mesh 属性提供了设置，用来关联 *Skeletal Mesh*。角色蓝图中可以编写各种输入与行为，行为进一步触发动画播放。在蓝图中，网格对象可以直接调用 *PlayAnimation* 播放指定的动画资产。但是直接播放动画还需要考虑其它状态的动画如何流畅地混合在一起，而动画蓝图就是通过一个动画状态机来解决角色所有相关状态的动画如何在各种状态下的流畅切换。

在内容浏览器创建动画蓝图，Animation -> Animation Blueprint，选择 *AnimInstance* 作为父类，并选择一个目标骨架。

动画蓝图`Animation Blueprint`和其它类型的蓝图相似，也有 EventGraph 图表。但最大的一个差别就是动画蓝图的状态机，增加了 *Animation Graphs*，在 My Blueprint 面板双击打开 AnimGraph 就可以看到 *Output Pose* 节点，它表示动画蓝图的输入动作。而状态机就是在不同状态中切换输出的动作动画，对于新建的动画蓝图，可以创建一个 *State Machine* 并对其进行状态管理，并将状态机的 Animation Pose 输出连接到 Output Pose 节点。

新建的状态机内部只有一个 Entry 节点，它表示状态机的入口，状太机处理什么状态，就会输出对应状态节点的动作。在 My Blueprint -> Animation Graphs 面板中可以看到状态机的状态、状态转换规则，分别使用两个半圆、两个方向相反的箭头表示。

状态机的主要构成部分有二：各种状态的网络、以及定义状态转入转出的规则。每种状态和每条规则设置都是其自身浓缩的蓝图 网络。状态自身不带引脚，也没有输入的引脚，从其外部边界拖动引线即可连接状态或创建新状态。

状态的作用是产生最终动画或姿势，可以是单个动画序列、混合空间或任意类型的网络，只要产生的是最终动画或姿势即可。

每个状态内部基本都有一个 Output Animation Pose 节点，它输出当前状态的角色动画。所以，可以理解为每个状态就是在播放一个动画资产。直接从动画蓝图编辑器的 Asset Browser 将动画资产拖放到状态图表中，就会自动创建 Animation Play 或 Blendspace Player 节点，将其连接到 Output Animation Pose 即可。

定义状态后，需要控制骨架网格体如何从一个状态转换到另一个状态，这便是需要用到转换规则，转换规则沿连接状态的引线自动创建。转换规则可对变量值执行任意数量的检查和测试，目的是输出一个 True/False 值，以决定动画是否能通过转换。

在动画图表中，也就是状态机管理图表可以添加三种节点：

- Comment 注解节点；
- Conduits 导管是更高级的共享转换资源，和 1 对 1 关系的转换规则不同，导管可以是 1 对多、多对 1，或多对多关系；
- State 状态，表示状态机中的一个状态管理对象，双击打开一个状态图表，可以添加各种节点来判断是否可以进入此状态；

转换规则会沿着连接状态和导管的引线自动创建，从图形上看，转换规则显示为循环方向小图标。这意味着，在状态节点边框拖出引线到图表空位置来创建状态或导管时，将自动针对该引线创建转换规则。

双击转换规则线上的图标打开新图表，允许您定义转换的成功或失败条件。


状态机需要根据条件进行状态变化，常用的方法就是添加状态机过渡变量，操作步骤：

- 在（My Blueprint） 选项卡中，点击（Add New） 按钮，并选择 变量（Variable）。
- 将该变量设置为 布尔（Boolean），并将其命名为"IsRunning"。
- 重复前面的操作创建另一个变量，将该变量设置为 布尔型（Boolean），并将其命名为"IsFalling"。

现在添加了两个动画过渡变量，用于驱动动画的状态机。接下来就是获取角色状态，并设置动画蓝图的状态变量：

- 双击 My Blueprint -> EventGraph，打开事件图表。
- 通过图表右键上下文菜单添加 *Event Blueprint Update Animation* 动画更新事件，用来更新状态变量，与游戏状态同步。
- 再创建一个 *Try Get Pawn Owner* 节点，用来获取玩家角色，并创建 *Cast to Character* 进行类型转换。
- 将 Event Blueprint Update Animation 执行流串连起来。
- 从 *As Character* 输出引脚连出引线，并连接到 *Get Character Movement* 节点。
- 从 *Character Movement* 输出引脚连出引线，并选择 *Get Movement Mode* 以获取角色运动模式。

引擎提供的角色运动模式定义 EMovementMode：

```C++
// UE_5.0EA\Engine\Source\Runtime\Engine\Classes\Engine\EngineTypes.h
/** Movement modes for Characters. */
UENUM(BlueprintType)
enum EMovementMode
{
    /** None (movement is disabled). */
    MOVE_None       UMETA(DisplayName="None"),

    /** Walking on a surface. */
    MOVE_Walking    UMETA(DisplayName="Walking"),

    /** 
     * Simplified walking on navigation data (e.g. navmesh). 
     * If GetGenerateOverlapEvents() is true, then we will perform sweeps with each navmesh move.
     * If GetGenerateOverlapEvents() is false then movement is cheaper but characters can overlap other objects without some extra process to repel/resolve their collisions.
     */
    MOVE_NavWalking UMETA(DisplayName="Navmesh Walking"),

    /** Falling under the effects of gravity, such as after jumping or walking off the edge of a surface. */
    MOVE_Falling    UMETA(DisplayName="Falling"),

    /** Swimming through a fluid volume, under the effects of gravity and buoyancy. */
    MOVE_Swimming   UMETA(DisplayName="Swimming"),

    /** Flying, ignoring the effects of gravity. Affected by the current physics volume's fluid friction. */
    MOVE_Flying     UMETA(DisplayName="Flying"),

    /** User-defined custom movement mode, including many possible sub-modes. */
    MOVE_Custom     UMETA(DisplayName="Custom"),

    MOVE_MAX        UMETA(Hidden),
};
```

通过 Character 提供的 API 获取角色运动模式是管理动画蓝图状态非常基础的一个步骤，有了运动模式信息就可以根据这个模式来设置状态：

- 从 Movement Mode 输出引脚连出引线，连接 *Equal (Enum)*，并选择相应运动模式。
- 确定角色是否在下降状态，就选择 Equal (Enum) 节点的模式为（Falling）。
- 按住 Alt 键将 My Blueprint -> IsFalling 状态变量拖动到图表中，这样就可以创建一个 *Set Is Falling* 节点。
- 并将 Equal (Enum) 节点的输出布尔数据引脚连接到 Set Is Falling 节点的输入布尔数据引脚。

EMovementMode 并没有提供 Running 状态，要确定角色是否在奔跑状态，只需要判断角色的运动速度就可以实现。

如果角色不是站立不动，其速度向量的长度将大于零：

- 从 Cast To Character 节点的 As Character 引脚再次连出引线，连接 *Get Velocity* 节点。
- 因此，从 *Return Value* 向量输出引脚连出引线，并选择 *Vector Length* 以将该节点添加到图表。
- 从 Return Value 浮点输出引脚连出引线，并选择 *> (float)* 节点，进行浮点数值大小比较。
- 按住 Alt 键将 My Blueprint -> IsRunning 状态变量拖到图表中，创建一个 *Set Is Running* 节点。
- 将 *> (float)* 节点的输出布尔引脚连接到 Set Is Running 节点的输入布尔引脚。

注意执行流要串连起来，以保证各个节点被执行到。

参考 UE4 第三人称射击游戏模板中提供的 *ThirdPerson_AnimBP* 的事件执行流程：

    Event Blueprint Update Animation
        -> TryGet PawnOwner -> ?IsValid
            -> Get MovementComponent -> IsFalling -> Set IsInAir 
            -> Get Velocity -> VectorLength -> Set Speed

EventGraph 图表中就做了一件事：设置状态变量，包括 IsInAir 和 Speed 两个状态变量。

打开第三人称模板的 *ThirdPerson_AnimBP* 动画蓝图，这已经设置好空闲、走、跑、跳等动画的状态是如何过度的：

- 首先，状态机执行进入 Idle 或 Run 状态，

四个动作对应的动画文件如下，其中跳这个动作又划分为起跳、空中状态、结束跳跃三个状态的动画：

- ThirdPersonIdle
- ThirdPersonJump_End
- ThirdPersonJump_Loop
- ThirdPersonJump_Start
- ThirdPersonRun
- ThirdPersonWalk


在 UE4 提供的第三人称射击游戏模板中，*ThirdPersonCharacter* 角色蓝图中的动作输入以及触发事件包括：

- InputAxis Turn -> Pawn -> AddControllerYawInput 左右偏转动作；
- InputAxis LookUp -> Pawn -> AddControllerPitchInput 上下俯仰动作；
- InputAction Jump(Pressed) -> Pawn -> Jump 跳跃动作；
- InputAction Jump(Released) -> Pawn -> StopJumping 停止跳跃动作；
- InputAxis MoveForward -> Pawn -> AddMovementInput 前后移动；
- InputAxis MoveRight -> Pawn -> AddMovementInput 左右移动；

以上是鼠标键盘输入，另外还包含 Touch 和 Gamepad 输入的处理，摇杆输入的是一个模拟量，使用了 *BaseTurnRate* 和 *BaseLookUpRate* 来控制敏感度。与硬件的输入 AxisValue 和引擎的时间差 *GetWorldDeltaSeconds* 三个量相乘得到最终的输入值。

角色的前后移动和左右移动都执行 *AddMovementInput*，移动的方向输入的 *WorldDirction* 来控制。向量来源：GetControlRotation -> BreakRotator(Yaw) -> MakeRotator -> GetForwardVector/GetRightVector。



### ✒ Mixamo 工具与动画复用
- Nonlinear Animation using Mixamo (Blender) https://www.bilibili.com/video/BV1h5411J7UC?p=3
- Mixamo add-on for Blender Creating Control Rig https://substance3d.adobe.com/plugins/mixamo-in-blender/
- Mixamo add-on for Blender 部分模型动画文件 https://pan.baidu.com/s/1aoQLtHfQ6jAnP4Yl3atgRA#提取码:1234
- https://minapecheux.com/website/2021/09/26/renaming-mixamo-rigs-with-blenders-python-api/
- 动画重定位 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/AnimationRetargeting/
- 重定向管理器 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Persona/BasePoseManager/
- 使用重定位后的动画 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/AnimHowTo/Retargeting/

Adobe 开发了 Mixamo，它可以让角色动起来，用于游戏、电影等，同时比 Blender 自带的 Rigify 插件更自动化。

Mixamo 基于 Web 提供三个核心功能：

- 下载角色模型；
- 下载角色动画；
- 自动绑定骨骼；

网站提供上百个示范模型以及上千套动画示范，实在是学习动画姿态的好材料。也可以自行上传人物的静态模型（没绑定骨骼，也没动画），就能用到 Mixamo 强大的自动绑定功能。


导出下载 Mixamo 模型及动画时，一般只需要设置 Format，一般为 FBX Binary 即可。Pose 选项一般不用设置，除非你不想要模型蒙皮，只想要动画，可以选择里面的 Without Skin 或 No Character 都是一样的意思，即不含 Static Mesh。

在选择 Character 后，只要没有点击 Animations 列表中的动画，此时就可以下载角色的 T-Pose 姿态模型，有了这个模型后，再下载其它动画时，就不要带模型。

在 UE4 中导入没有蒙皮的动画时，会出错，提示 FBX 导出插件启用 Export Smoothing Group。并且，导入只含动画，不含蒙皮的 FBX 文件时，需要指定 Mesh -> Skeleton，这样动画数据才能有效地作用于骨架对象。导入动画模型时，清除掉 Mesh -> Skeleton，设置为 None，这样就会自动创建关连的骨架。

注意，骨架结构一致才会正确复用动画，xbot 和 ybot 使用的是相同的骨架结构，它们的动画是可以互用的。但是像 Mousey 这样的模型，骨架结构不同，所以不能混用动画。

在 Blender 上使用导出的动画模型，只需要设置 Parent 关系就可以将模型绑定到骨架上。操作方法：先选择模型，再选择骨架，按 Ctrl-P 弹出 Parent 设置菜单，选择 Armature Deform 其中一项即可。

需要注意的是，下载到的模式骨架使用了 90° X 轴的旋转，并且设置了 0.01 倍的绽放。如果，在对象模式下执行 Alt-P 直接将模型从骨架中分离出来，将会放大 100 倍。所以，要先对 Armature 对像应用缩放 Object -> Apply -> Scale，Ctrl-A，将缩放值归整为 1。如果出现对象原点有偏移，可以物体模式和编辑模式下通过菜单设置物体原点，Object ‣ Set Origin，通过 3D 游标移动对象原点。

用 Blender 打开 FBX 文件可以看到 X Bot 模型的骨架结构与 Rigify 的 Human (Meta-rig) 骨架不同。X Bot 和 Y Bot 一样，为了简化动画姿态调整，肢体各个部分是分离的，并且使用圆球型的关节隔离，在 Blender 中可以很方便地通过 Ctrl-L 选择同属一个肢体部分的连接顶点，结合 Select Sharp Edges 选择大于 36° 的锐度就可以筛选分离。

大概结构如下，骨骼名称前缀 mixamorig: 就省略不写了：

    +- Armature
       +- Animation 
       +- Pose 
       +- Armature 
       |  +- Hips
       |  |  +- Spine
       |  |  |  +- Spine1
       |  |  |     +- Spine2
       |  |  |        +- Neck
       |  |  |        |  +- Head
       |  |  |        |     +- LeftEye + RightEye
       |  |  |        +- LeftShoulder
       |  |  |        |  +- LeftArm 
       |  |  |        |     +- LeftForeArm 
       |  |  |        |        +- LeftHand 
       |  |  |        |           +- LeftHandThumb 1 ~ 3 
       |  |  |        |           +- LeftHandIndex 1 ~ 3 
       |  |  |        |           +- LeftHandMiddle 1 ~ 3 
       |  |  |        |           +- LeftHandRing 1 ~ 3 
       |  |  |        |           +- LeftHandPinky 1 ~ 3 
       |  |  |        +- RightShoulder
       |  |  |           +- RightArm 
       |  |  |              +- RightForeArm 
       |  |  |                 +- RightHand 
       |  |  |                    +- RightHandThumb 1 ~ 3 
       |  |  |                    +- RightHandIndex 1 ~ 3 
       |  |  |                    +- RightHandMiddle 1 ~ 3 
       |  |  |                    +- RightHandRing 1 ~ 3 
       |  |  |                    +- RightHandPinky 1 ~ 3 
       |  |  +- LeftUpLeg —> LeftLeg -> LeftFoot -> ToeBase
       |  |  +- RightUpLeg —> RightLeg -> RightFoot -> ToeBase
       +- Alpha_Joints 
       +- Alpha_Surface 

不同模型的网格体不同，X Bot 模型的网格体为 Beta_Joints 和 Beta_Surface，Y Bot 模型的网格体为 Alpha_Joints 和 Alpha_Surface。

如果再次导出 FBX，再导入 UE4，就会出现动画是躺在地上的，因为 Armature 按 X 轴旋转了 90°，需要执行 Ctrl-A 应用旋转，将数值归置为 0° 旋转再导出。或者在 UE4 导入时，设置 Transform -> Import Rotation 按 X 轴旋转 90°，但这样会使用骨架趴在地面上。另外，Blender 文件内可能保存有已经删除掉不再使用的动画，但未执行清理 File -> Clean Up -> Recursive Unused Data-Blocks，在导出时，就会出现多余的动画。

在 Blender 中使用 Nonlinear Animation 编辑器来串连多个动画：

- 导入下载好的 Mixamo 动画；
- 打开 Nonlinear Animation 编辑器；
- 选择动画文件对应的对象，并且在 NLA 编辑器中相应的轨道会高亮为白色；
- 点击轨道名称右侧的 Push Down Action 将关键帧动画转换为动画片段；
- 为了方便后续操作，可以先重命名轨道再转换；
- 选择要用来拼接动画对象的骨架，并在 NLA 编辑器中通过菜单添加已经转换好的动画片段，Add -> Add Action Strip；
- 适当调整动画片段的位置、时间绽放等等即可；

下载动画文件和 X Bot、Y Bot 模型的 T-Pose 姿态后，我试了 Blender 2.83 2.93 3.0 等版本的 Nonlinear Animation 非线动画编辑，试图将多个动画串连起来。但都不行，不能将多个动画在 X Bot 或 Y Bot 模型上播放，虽然可以将 Action Strip 放到轨道上，但没有动画，并且也没有提示类似以下的错误信息，说明骨骼和动画是匹配的，问题具体原因不清楚。

换种处理办法，就是将 T-Pose 模型中的网格体绑定到动画对应的骨架上，通过网格体对象属性面板操作设置：

- Object Properties -> Parent 设置为下载好并导入的动画模型文件对应的对象，Parent Type 保持设置 Object 即可；
- Modifier Properties -> Armature -> Object 同上，设置为下载好并导入的动画模型文件对应的对象，Bind To Vertex Groups；

> Action 'Cartwheel' does not specify what data-blocks it can be used on (try setting the 'ID Root Type' setting from the data-blocks editor for this action to avoid future problems)

以上信息意思是 Cartwheel 即打翻车这个动画片断未指定可以使用什么样的数据块，可以尝试通过 Data-blocks 编辑器设置这个动画片段的 ID Root Type。可能是骨架与动画不匹配，需要使用同一角色的动画。

另外，对于使用了 Root Motion 的动画，即因角色动作导致需要移到模型位置，如果要拼接就需要处理前后两个动画的模型位置。因为，现成的模型动画都是基于原点进行的，当一个使用 Root Motion 的动画播放到结束时，模型已经偏移原点。所以，当下一个动画跟着播放时，又瞬时回到了原点，这里就有一个位移差要处理好才能将两个动画无缝拼接起来。

一个方法是使用一个过度动画片断，并将位置偏移设置好，然后将这个偏移值增加到下一个动画。Nonlinear Animation 通过侧栏工具面板的 Strip -> Active Strip -> Action Blending 的混合模式为 Add 实现。因为要使用动作混合，所以过度用的动画需要放在上层轨道，而被混合的动画放在下面。


Mixamo Auto-Rigging 自动绑定功能只需给你上传的模式指定 Chin、Wrists、Elbows、Knees、Groin 等关键部位即可自动给模型绑定骨骼，并生成示范动画。尽管提供的骨架结构比较精简，但是绑定后提供的控制器很完善，提供四肢的 IK 反向解算约束，头部、颈部、胸部、腰部、躯干、腿部可灵活控制。

Mixamo 自动绑定系统仅适用于人形角色，并具有一些特定要求：

- 确保角色是类人形角色，头部、身体、手臂和腿部区域可明显区分，最好是 T-pose 且手指要叉开。如果角色形变过大，则自动绑定系统可能无法正常工作。
- 确保角色没有多余的附属物或道具。例如，其他肢体、翅膀、尾巴、大型头发和衣物等。
- 确保角色处于默认姿势或自然姿势。如果角色非常不对称或在绑定之前已摆好姿势，则自动绑定可能不起作用。
- 确保文件中没有其他内容。如其他辅助对象、相机或场景对象会导致自动绑定不起作用。
- 确保任何部件之间没有空隙。例如，自动绑定不适用于头部与身体分离的情况。
- 确保角色在场景中居中。将角色设置为世界的（0,0,0）时，自动绑定效果最佳。这样可以防止由于单位差异而发生动画偏移。
- 确保角色网格的质量（布线良好且无错误）。自动绑定在网格质量高的角色上执行更可靠，并提供更高质量的动画。

目前提供 Skeleton LOD 选项有四个，即骨架精细度：

- Standard Skeleton (65)
- 3 Chain Fingers (49)
- 2 Chain Fingers (41)
- No Fingers (25)

如果使用 Mixamo for Blender 插件进行骨架绑定，则需要注意，骨骼命名要使用 Blender 习惯。如果直接使用 Mixamo 上下载到的模型，其骨骼名称就需要修改一下，否则绑定时 add_leg("Left") 会出现错误。列如，骨骼命 *mixamorig:LeftArm* 就要改变为 *Arm.L* 这样的格式。因为 Blender 使用 `.L` 和 `.R` 这样的后缀。其实，只要将 Mixamo Rig 前缀部分删除即可，包括分号。

有效分隔符号包括：

- (nothing): handLeft –> handRight
- (underscore): hand_L –> hand_R
- (dot): hand.l –> hand.r
- (dash): hand-l –> hand-r
- (space): hand LEFT –> hand RIGHT

Blender 本身就可以批量重命名，如果重命名的规则不是特别复杂，完全无须使用上述插件。快捷键 Ctrl-F2 调出批量重命名面板 Edit -> Batch Rename... 并且支持正则表达式。注意，重命名时，要指定类型为 Bones，不是 Armatures 也不是 Objects。

使用正则表达式，可以很容易将所有骨骼名称批量改正，列如 `mixamorig:Right(.*)` 替换为 `\1_R`，就可以可以将右侧所有骨骼的名字改成 `_R` 后缀，并且删掉 Mixamo Rig 前缀。注意要将 Batch Rename 面板中的 Find 和 Replace 右侧的 * 点亮才是正则表达式模式，`\1` 表示将正则表达式中第一对圆括号匹配到的内容。比如，可以将 `(Right|Left)(.*)` 替换为 `\2_\1`，这样就直接将左右前缀改为后缀。

替换错了也没有关系，可以撤消，但是关联的顶点组命名也要确认一并处理到位，所以尽量不要出错。在骨架编辑模式下，选中所有骨骼再进行操作。

也可以使用 Mixamo Rig Renamer 插件，它会处理：

- 骨骼改名加后缀 .L/.R 等；
- 修改相应的动画曲线数据；
- 重新分配动画数据给相应的骨骼；

部分软件，如 Maya 使用 FBX 导出格式中，存在关节而不是骨骼。关节 Joints 等效一个坐标点，有位置、方向、大小，但没有长度。Blender 的骨骼自然有长度，因为它们实际上是两个相连的关节。实际上，创建变换矩阵并不需要骨骼的尖端，但这是一个特定于搅拌机的设计决策。
因此，导出时，未连接的骨骼将会增加一个后缀为 `_end` 的骨骼充当关节。

在 Blender 导入 FBX 文件时，有一个选项可以自动删除末端关节：Armature -> Ignore Leaf Bones，勾选后导入的骨架就不会包含骨骼链最后一个加`_end`后缀的骨骼。

安装好 Mixamo 插件后并启用，选择给模型设置的骨架对象，按 N 打开侧栏工具，找到插件面板，并执行 Mixamo Control Rig -> Create Control Rig 创建绑定控制器对象，使用 Zero Out Rig 归位骨架控制器，同时动画数据也清除。

- Apply Animation，申请动画示范绑定；
- IK Arms 绑定手部 IK 控制器；
- IK Legs 绑定腿部 IK 控制器；

解决骨骼命名问题后，Mixamo 插件绑定时，还是不正确，没有生成 IK Hand 或 IK Leg。但是使用 Mixamo 网站经过 Auto-Rigging 绑定的模型却可以在处理好骨骼名称后正常绑定控制器。估计是使用 Blender 导出的模型，给骨架添加了末端的 `_end` 骨骼，导致骨架结构有了变化。

出现约束器属性不存在，出错脚本片段如下，是前面因为什么原因没有给原始骨架设置约束器导致后续访问出错：

```py
# C:\Users\...\AppData\Roaming\Blender Foundation\Blender\2.93\scripts\addons\mixamo_rig\mixamo_rig.py
# Foot Ctrl IK
c_foot_ik_pb = get_pose_bone(c_foot_ik_name)

cns_name = "Child Of"
cns = c_foot_ik_pb.constraints.get(cns_name)
# in execute _make_rig(self) -> add_leg(left) -> here
# AttributeError:'NoneType' object has no attribute 'constraints'
if cns == None:
    cns = c_foot_ik_pb.constraints.new("CHILD_OF")
    cns.name = cns_name
cns.target = rig
cns.subtarget = "Ctrl_Master"
```

测试发现下载到的 X Bot 和 Y Bot 模型动画基本不能正常完成 Mixamo Rig 绑定，除非经过网站进行 Aoto-Rigging 后，但是官网上下载到的 Mousey 模型的动画却是可以正常完成绑定。而且大多数都是缺失腿部 IK 控制器，总之是有挑食现象。

正确绑定 Rig 控制器后会删除原来骨架中的末端骨骼，并给原骨架添加约束器，大概会添加以下内容：

- Animation
    - Drivers 曲线驱动动画
- Bone Groups 骨骼分组控制
    - master
    - root_master
    - body_mid
    - neck
    - head
    - body_left
    - body_right
- Armature 姿态控制骨架
    - Hips 原骨架根骨骼下添加 Copy Constraints；
    - Ctrl_Master 控制整体移动；
    - Ctrl_ArmPole_IK_Left 控制手肘 Elbows 径向扭转；
    - Ctrl_Hand_IK_Left 控制手掌部分的 IK；
    - Ctrl_ArmPole_IK_Right 控制手肘 Elbows 径向扭转；
    - Ctrl_Hand_IK_Right 控制手掌部分的 IK；
    - Ctrl_Foot_IK_Left 控制脚掌部分的 IK；
    - Ctrl_LegPole_IK_Left 控制膝关节 Knees 径向扭转；
    - Ctrl_Foot_IK_Right 控制脚掌部分的 IK；
    - Ctrl_LegPole_IK_Right 控制膝关节 Knees 径向扭转；

Mixamo 插件面板中的 Animation -> Source Skeleton 可以用来指定要导入到 Mixamo Control Rig 的动画来源的，可以从 Mixamo 网站上下载相同角色的 FBX 动画文件。复刻动画前，先执行执行 Zero Out Rig 将本身的关键帧动画状态归零。注意，不要在编辑其它骨架时执行，会误删其它骨骼动画。而且只能对 Timeline 的关键帧动画操作，对 NLA 中的动画片段无效。

另外，因为 Mixamo 提供的骨骼命名似含有冒号和前缀，需要先将导入的动画骨骼改名，并且要与 Mixamo Control Rig 绑定的骨骼命名一致，否则动画复制不一致。



对于制作好的动画，当然是希望尽量复用到更多的模型上，避免重复调整同样的动画带来的额外工作量。骨架可以通过 *Skeleton Mesh* 创建，也可以映射到另一个骨架 Retarget to Another Skeleton，而骨架网格也可以重新分配一副骨架，通过内容浏览器右键菜单操作 Skeleton -> Assign Skeleton。


动画重定位 *Retarget* 是一种允许在共用相同骨架资源但比例差异很大的角色之间复用动画的功能。动画重定位是对现有动画稍加修改后用于多个角色的过程，它使你无需创建全新的动画，因为你可以在多个角色间共享动画资源。比如，希望在基本角色、矮壮角色和高瘦角色之间共享动画。在应用重定位前，您就可以在任何共用相同骨架资源的骨骼网格之间使用动画。但是，如果角色身材比例如上图所示有差异，矮个角色会被拉长，高个角色又会被压短，这都是系统为了使其符合基本角色的骨骼比例而进行的更改。

通过重定位，可以防止生成动画的骨架在使用来自不同外形的角色的动画时丢失比例或产生不必要的变形。 通过动画重定位，还可以在使用 不同骨架 资源的角色之间共享动画，前提是他们使用相似的骨骼层级，并使用名为 绑定（Rig） 的共享资源在骨架之间传递动画数据。

存在两种形式的动画重定位，在第一种形式中，你要与之共享动画的角色的骨架使用了与最初为其创建动画的目标角色 相同的骨架。 在另一种形式的动画重定位中，需要使用称为 骨架绑定（Rig） 的中间对象，它使你能够对来自一个角色的骨架的动画进行重定位，然后将该骨架的骨骼信息传递给 另一个骨架（使用这两个骨架共享的骨架绑定）。

动画绑定到骨架资源。骨架资产其实就是一个骨骼名称和层次结构数据的列表，但它也存储了来自用于定义骨架资产的原始骨骼网格的初始比例。此数据是以骨骼平移数据的形式存储的。特别要注意的是，重定位系统只会重定位骨骼的平移分量。骨骼的旋转始终来自动画数据。

因为使用了原始骨骼网格定义骨架资产的比例，所以使用该骨架资产但有不同比例的其他任何骨骼网格（例如比原始网格短得多的网格）都需要经过重定位才能正确工作。如果不经过这一步，具有不同比例的骨骼网格会尝试使用原始网格的平移数据，导致我们在本文开头看到的各种错误。

骨架编辑器 中的骨架树提供了几个设置，用于更改处理骨骼之间平移重定位的方式。有 3 种不同设置可用于骨骼平移重定位：

- Animation —— 骨骼平移来自动画数据，不做改变。
- Skeleton —— 骨骼平移来自目标骨架的绑定姿势。
- AnimationScaled —— 骨骼平移来自动画数据，但按骨架的比例调整。这是目标骨架（播放动画的骨架）与源骨架（制作动画的骨架）的骨骼长度之比。

此外，对于动画重定位，使用重定位动画和非重定位动画没有显著的性能差异。使用动画重定位的好处是增加独特角色的数量，又不必创建全新的一套匹配动画，重新做动画可能会严重占用您的动画存储预算。

在为不共享相同骨架资源的角色处理动画重定位时，需要指定一个特殊的资源，名为绑定（Rig），它负责处理骨架之间传递的动画数据。与各个角色关联的骨架资源通过共享的绑定资源通信，以正确地将变换数据从一个源传递到其预定目标。

绑定（Rig）可以在骨架编辑器中的重定位管理器中指定，同一个绑定需要指定给两个骨架资源。

在动画重定位中使用的另一个工具是重定位管理器，它可以让您：

- Manage Retarget Source —— 如果每个骨架有不同比例的网格体，可以设置某个特定动画的网格体来源。
- Setup Rig —— 将动画重定位到使用相同绑定的不同骨架。
- Manage Retarget Base Pose —— 重定位资源到其他骨架时可以使用，允许更改目标的基本姿势，以使其与源基本姿势一致，并提供更准确的重定位动画。

添加重定向源操作步骤：

- 在内容浏览器双击骨架打开骨架编辑器，从工具栏中单击（Retarget Manager）按钮打开重定位管理器面板。
- 单击 Manage Retarget Source 部分的（Add New ）按钮添加新重定向源。
- 选择一个 Skeleton Mesh，这是为当前骨架创建了特殊动画的骨架网格体。
- 现在你可以看到该骨架网格体在重定向管理器（Retarget Manager）中列出。
- 打开针对以骨架网格体的动画序列。
- 设置 Asset Details -> Animation -> Retarget Source 属性，并从下拉菜单中选择你的特定骨架网格体。
- 通过选择此网格体，就指定了要使用该网格体的比例驱动此动画。

重定向管理器的 Setup Rig 部分允许你为骨架指定骨架绑定，可用它将动画数据传递给使用同一个骨架绑定的不同骨架。可以从选择骨架绑定（Select Rig）下拉选项中选择要使用的骨架绑定，其中包含人形（Humanoid）骨架类型选项，它适用于大多数角色。

指定好人形骨架绑定后，你将需要指定骨架中与骨架绑定上的节点对应的相同（或相似）位置的骨骼。你可以使用下拉菜单来选择节点并手动从骨架指定相应的骨骼，或者你可以使用位于菜单顶部的 自动映射（Auto Mapping） 功能。此功能将对骨架进行翻查并尝试为骨架绑定上的每个节点找到最匹配的骨骼。

重定管理器的最后一个功能是设置基本姿势，有时你可能希望将动画重定向到基本姿势与源骨架不太一致的骨架。比如，源骨架呈A字姿势，而目标骨架呈 T 字姿势。如果直接就这样重定向动画，可能会遇到问题。由于它们使用的基本姿势不同，比如手臂定位不正确。通过设置重定向基本姿势来解决这一问题，重定向管理器（Retarget Manager）使我们能够定义基本姿势使其重定向，并使用重定向后的基本姿势来进行动画重定向，而非使用角色正常的基本姿势。

我们可以选中角色的骨骼并旋转它们（在本示例中，旋转左肩和右肩），使角色呈 A 字姿势，然后单击修改姿势（Modify Pose）。在上下文菜单中，选择使用当前姿势（Use Current Pose，这样就可以把该姿势设置为在执行任何动画重定向时要使用的重定向后的基本姿势。

现在，通过内容浏览器再对动画执行重定时，Retarget Anim Assets -> Duplicate Anim Assets and Retarget，将会看到经过更新的重定向后的基本姿势。


    Old skeleton and new skeleton need to have Preview Mesh set up to convert animation


### ✒ Control Rig 动画工具
- Control Rig https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/ControlRig
- Control Rig mannequin sample https://www.unrealengine.com/marketplace/en-US/product/control-rig-mannequin

新的 Control Rig 插件是基于节点的操控系统，设计用于为操控者和动画师提供多种工具，通过对美术师友好的界面来创建灵活、动态和程序性的角色。与蓝图不同，Control Rig 使用称为 RigVM 的自有轻量级VM提供高效的姿势计算。用户可将称为 Rig Units 的节点与 Control Rig 图连接在一起，创造运行时动画。

导入骨骼网格体将生成 Rig Hierarchy 的骨骼，以及在 Control Rig 编辑器中创建的其他骨骼、空间和功能按钮，可以作为 Rig Units 的输入或输出，类似于姿势作为动画蓝图中的动画节点的输入或输出。Control Rig 不仅限于骨骼网格体。用户可从 Control Rig 组件中获取功能按钮数值，从而在蓝图 Actor 中创建 Control Rig 组件，把其他组件制作成动画，如静态网格体或光源。

你可以使用 Control Rig 系统在引擎内创作动画（Animate in Engine），即利用程序制作动画，或是创建自定义重定向或 FullBody IK解决方案。得益于完备的 Python 集成，你可以为任何产品实现复杂任务的自定义和自动化流程。

可以使用 Control Rig 修改现有的骨骼动画，Rig 反向计算（Rig inversion） 使用户能够将现有动画重新映射，以便用户使用 Sequencer 调整 Gameplay 或过场动画。Control Rig 中的 Backwards Event 节点将定义骨骼地图如何映射到控制点或其他控制逻辑。借助 Numerical Pre-Sequencer 功能，用户能够通过在 Sequencer 中为每帧动画运行反向解算事件来烘焙到 Control Rig。该解决方案允许编辑现有动画序列或编辑记录的运动捕获数据等工作流。

使用正向解算（Forward Solve），通过控制点或其他程序化逻辑（例如IK或正弦波）来操控骨骼。与 Forward Solve RigUnit 节点建立连接。

使用反向解算（Backwards Solve） 来处理所有需要应用到控制点的传入骨骼动画数据。可以与 Backwards Solve RigUnit 节点建立连接。

创建 Control Rig 序列的步骤：

- 首先确保启用 Control Rig 插件。
- 通过内容浏览器右键菜单新增关卡序列（Level Sequence） 并设置任意命名。
- 双击打开序列资产，在 Sequencer 编辑器界面中，增加轨道 Track -> Actor to Sequence，将你选择的骨架网格体添加到序列中。
- 点击 + 按钮，然后选择 FK Control Rig，添加一条 Control Rig 轨道或 Asset Based Control Rig，指定一个 Control Rig 蓝图资产。
- 序列将更新并添加 Control Rig 蓝图。模式（Modes）面板也将更新，显示可用和可设置关键帧的属性。

接下来为 Actor 添加动画，展开 Control Rig 轨道，所有可设置关键帧的属性将显示，点击需要设置关键帧的属性旁的 Add Key 图标即可添加关键帧。 

此操作将在 Control Rig序列的特定时间处添加一个属性的关键帧。可以将时间轴拖动到新时间处，然后使用视口中的"变换（Transform）"控件（或在Sequencer中手动输入一个值）来移动 Control Rig 的相关部分并对新值设置关键帧。

在上例中，我们正在移动与骨架网格体右臂相关联的末端执行器并对新值设置关键帧，使角色从初值内插到新的键值。



### ✒ Persona 动画编辑工具
- 动画编辑器 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Persona/
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Persona/MeshDetails
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Persona/Modes/Skeleton/
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Persona/SkeletonTree/
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Skeleton/

在虚幻引擎 4 中创建带动画角色需要使用几种不同的动画工具（或编辑器），每种工具针对动画的不同方面进行编辑：

- 骨架编辑器`Skeleton Editor`是所有操作的起点，其用于管理驱动骨架网格体`Skeletal Mesh`和动画的骨骼（或关节层级）。
- 骨架网格体编辑器`Skeletal Mesh Editor`用于修改链接到骨架的骨架网格体，是角色的外观。
- 动画编辑器`Animation Editor`可以创建并修改动画资源，可用于对动画进行微调/调整。
- 动画蓝图编辑器`Animation Blueprint Editor`可用于创建逻辑，驱动角色使用的动画、使用时机，以及动画混合的方式。
- 物理资源编辑器`Physics Asset Editor`可创建和编辑用于骨架网格体碰撞的物理形体。

虚幻引擎 4 中 Persona 动画工具的各个方面的操作步骤示例。 无论您是虚幻引擎 4 中的动画新手，还是要学习如何使用 Persona 的我各种使用方法。

Persona 是虚幻引擎中的一组动画编辑工具集。这是一个健壮的系统，可用来编辑骨架，骨架网格体，动画蓝图以及多种其它动画资源。在虚幻引擎中，大部分（即时不是全部）动画处理工作都在这个编辑器中进行。这是一款多功能的工具，包含了用于编辑骨架 插槽 、预览 动画序列 、设置动画 混合空间 以及 蒙太奇 、编辑 动画蓝图 等的面板。

在虚幻引擎 4.14 之前，合并的动画编辑器称为 Persona，后续版本中，该编辑器被拆解为四个独立的编辑器。虽然它们的功能基本相同，但部分界面发生了变化，现在，您可以同时打开不同状态的多个动画编辑器窗口。例如，您现在可以针对游戏中的每个 动画序列 打开一个选项卡，而不是只通过一个选项卡在它们之间进行切换（如果从 资源浏览器 中选择 动画序列，则仍保持这种行为）。

使用动画编辑器`Animation Editor`可轻松地访问可用于骨架网格体的各种以动画为中心的资源。 在动画编辑器中，你可以预览动画序列、混合空间、动画蒙太奇等动画资源的播放，编辑动画资源，为材质参数或变形目标添加和编辑曲线，以及定义动画通知（在动画中的特定点发生的事件）。

在动画编辑器中，骨骼操作模式（Bone Manipulation Mode） 允许技术人员在预览动画时临时平移或旋转骨骼，以查找骨架网格体中的皮肤问题。 骨骼操作模式的另一个有用的方面是，您可以平移或旋转骨骼（例如，将某个角色的头部向上或向下倾斜），然后根据改变的骨骼位置使用时间轴的记录选项，以创建一个新动画。

在内容浏览器中或从编辑器工具栏中打开一个骨架网格体（Skeletal Mesh）资源时，就会打开骨架网格体编辑器（*Skeletal Mesh Editor*），可以设置骨架网格体的材质（Materials），添加布料元素，设置 LOD 和测试任何应用到网格体的变换目标（Morph Target）来对多边形网格体进行更改。 此编辑器包括一些可在其他一些动画工具中找到的窗口，例如工具栏/视口（和其他一些默认隐藏的窗口），但您的大部分网格体工作都将在 资源详细信息（Asset Details） 和 变换目标预览（Morph Target Preview） 窗口中完成。

骨架网格体编辑器内的工具栏为您提供可将任何更改保存到您的动画或在内容浏览器中找到该更改的选项。 它允许您在预览的当前姿势中创建一个静态网格体（Static Mesh）。 工具栏最右侧是 编辑器工具栏（Editor Toolbar），允许您在虚幻引擎 4 中的不同动画工具中切换。


骨架编辑器（*Skeleton Editor*） 是一种用于处理虚幻引擎 4 中的骨架资源的工具，实现可视化控制与骨架网格体（Skeletal Mesh）关联的骨骼或关节层级。 在此编辑器中，可以创建骨架网格体插槽以将项目附加到骨架网格体，预览动画曲线并跟踪与骨架关联的相关动画通知，还可设置您的动画重定位选项并使用重定向管理器，管理您的重定向源。

工具栏最右侧是编辑器工具栏（Editor Toolbar），允许您在虚幻引擎4中的不同动画工具中切换。可以查看动画通知（Anim Notifies），打开重定向管理器（Retarget Manager），导入新的骨架网格体（Skeletal Mesh），以与骨架关联并用预览的当前姿势创建一个静态网格体（Static Mesh）。

骨架编辑器左侧是骨架树 *Skeleton Tree*，显示当前骨架资源的骨架层级，并可在其中创建和编辑插槽，预览资源和控制动画重定向选项。

骨架树面板可以执行以下操作：

- 选择并查看骨架层级中的特定骨骼。
- 创建并编辑插槽，插槽是用于连接道具和其他物品的骨骼偏移连接点。
- 创建暂时连接的预览资产，它们非常有用，例如，可以预览武器拿在角色手中的效果。
- 控制动画重定位设置（需要选中 Show Advanced Options）。


中间的视口窗口允许您预览您所做的更改，并调整插槽位置或预览任何动画曲线。 从视口（Viewport）中还可分配一个预览动画以供骨架网格体使用，更改照明模式，显示或隐藏骨架的骨骼，调整动画播放速度，甚至将骨架网格体（Skeletal Mesh）设置为在转盘上自动旋转，使您可以从任何角度查看它。

右侧的详细信息面板主要用于修改插槽（Socket）等新增元素的属性。 例如，当您将一个插槽添加到骨架（Skeleton）时，单击骨架树（Skeleton Tree）中的插槽将用与插槽使用方式相关的选项填充详细信息（Details）面板。

这一部分中还有一个用于预览设置的选项卡，能够定义视口设置，例如 动画模式（Animation Mode） 或 动画（Animation） 以用作预览，切换用于预览的 骨架网格体（Skeletal Meshes），以及应用的视口照明和后期处理（Post Process）设置，使您可以预览应用了各种照明的设置。

动画曲线查看器允许您在视口（Viewport）中查看当前网格体可用的任何动画曲线。 动画通知窗口允许您修改您自定义创建的与该骨架（Skeleton）资源关联的动画通知（Animation Notifies）。

在骨架编辑器中，您可以使用骨架树将 虚拟骨骼（Virtual Bones） 添加到网格体的现有骨架中。这样有助于缩短迭代时间，使您能够从编辑器内部更改用于瞄准或IK（逆向运动学）的目标关节层级。在此之前，您必须在该编辑器之外的3D建模软件中添加这些骨骼，然后重新导入所有动画，将新关节包含在内以修复动画数据。

虚拟骨骼本质上是不可以添加皮肤的，并且可以约束在骨架层级中的两个现有骨骼之间使用，它们会自动为各个动画生成数据。 例如，您可以添加一个关节作为手部的子资源，但它将受到手掌关节的限制。与骨臼不同的是，该关节可以在动画蓝图中用作目标，例如IK目标或"注视"目标。甚至可以在动画蓝图中修改虚拟骨骼以供将来使用。



### ✒ Root Motion 根运动
- Root Motion https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/RootMotion/
- Sync Groups https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/SyncGroups/
- 动画优化 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Optimization/

角色的运动时，对象在场景的位置也需要进行移动，一般有 2 种方法处理：

- 直接或间接修改角色坐标，然后计算上一帧和这一帧之间的距离差来算出速度，然后用速度来选择播放哪个动画，比如 0=idle，300=walk，600=run。
- 由动画 Root Motion 驱动。动画师做的动画中，角色骨骼的 Root 节点就自带位移，然后游戏引擎获取到这些位移，以此来改变角色在游戏中的位置。

直接控制优点是实现简单，可控性高，对联机的支持足够好。缺点就是简单，如果是步履蹒跚的走法，因为移动速度不恒定，会滑步（常见丧尸、老人之类的慢走）。

而 Root Motion 控制完全不会滑步，动画里怎么移动，游戏里就会怎么移动。缺点就是实现复杂，可控性差，对联机支持不够（无法预测下一帧时角色的位置），网络差的时候会很糟糕。

例如，如果胶囊体在向前移动，系统就会知道在角色上播放一个跑步或行走的动画，让角色看起来是在靠自己的力量移动。但这种类型的运动并不始终适用于所有情况。在某些情况下，让复杂的动画实际驱动碰撞胶囊体（而非相反）是有道理的。这正是 根运动（Root Motion） 处理对游戏而言至关重要的原因之所在。

例如，假设玩家发起一次特殊攻击，在这种攻击中，模型已预先设定好向前冲的动作。如果所有的角色动作都是基于玩家胶囊体的，这样的动画会导致角色迈出胶囊体，从而在事实上失去碰撞。一旦动画播放结束，玩家就会滑回其碰撞位置。这就会产生问题，因为胶囊体通常用作所有计算的中心。胶囊体外的角色将越过几何体，不会对其环境做出适当的反应。另外，在动画结束时滑回他们的胶囊体也并不现实。

对于那些刚刚接触这个概念的人来说，仅仅阅读说明未必能显然地明白合适根运动（Root Motion）的重要性。

简单地说，根运动（Root Motion）是基于骨架根骨骼动画的角色运动。游戏中的大多数动画都是通过循环处理的，角色的根在循环中保持固定。然而，实际情况却并非始终如此，正如我们在上例中看到的那样。为了处理这个问题，我们需要将根的运动从角色中抽离，并将其应用到角色的胶囊体中。这就是UE4中根运动（Root Motion）的本质。

动画的根运动（Root Motion）可以在播放过程中可视化。只需打开任何根骨骼移动的动画，在视口中选择 显示 > 骨骼（Show > Bones） 即可。如果尚未在动画属性中选择 启用根运动（Enable Root Motion），当角色的根移动时，你会看到一条红线。这说明了动画的根运动（Root Motion）。

启用根运动（Root Motion）后，这条红线将消失。而角色将移动到位。这是因为，角色的根将不再从原始位置移动。在这个图像中，我们在角色上启用了根运动（Root Motion）。请注意，我们与上面的图像处于同一帧，但是角色的位置没有改变。

你可以在 Animation Editor 中的 Asset Details -> Root Motion 面板中为你的动画序列启用根运动。


### ✒ Blend Spaces 混合空间
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Blendspaces/
- 混合空间总览 https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/Blendspaces/Overview/

混合空间（Blend Space） 是可以在 动画图（AnimGraph）中采样的特殊资源， 允许根据两个输入的值混合动画。要根据一个输入在两个动画之间实现简单混合， 可以使用动画蓝图中提供的一个标准 混合节点。混合空间提供的方法是根据多个值（目前仅限于两个） 在多个动画之间进行更复杂的混合。

混合空间的目的是避免创建单个硬编码节点 来根据特定属性或条件执行混合。通过允许动画师或程序员指定输入、动画 以及如何使用输入来混合动画，几乎可以使用通用 混合空间执行任一类型的混合。

混合空间 利用基于特定属性或条件进行混合的资源，降低创建单个硬编码节点进行混合动画的需求。它使动画师或程序员能够指定输入、动画，以及输入在动画之间进行混合的方式，实际上任何类型的混合都能通过混合空间泛型来执行。

这与动画树在虚幻引擎 3 中执行相同任务的原理完全相反。任何复杂混合都需要创建一个新节点来处理混合。而混合空间是完全的泛型，决定混合的因素在每个单独的混合空间上均有所不同。每个混合空间均有输入，可接收数值。这些数值可在 动画蓝图 的更新周期中进行计算（通过 EventGraph），由游戏性代码或其他方式驱动（如下表所示）。这些特性使得混合空间灵活性极强，可把主动权交到 AnimGraph 的创建者手中，以符合其需求的方式混合动画。

    +============+   +==============+  +=======+
    | EventGraph |   | Gameplay Code|  | Other |
    +============+   +==============+  +=======+
           |               |               |
           +---------------+------------+--+
           |                            |
    +======v=====+                +=====v======+
    | Variable 1 |                | Variable 2 |
    +============+                +============+
           |                            |
    +======v============================v======+
    |   Input 1                    Input 2     |
    |               Blendspace                 |
    |               OutputPose                 |
    +==========================================+
                        |
                +=======v======+
                |     Pose     |
                +==============+

事件图表、游戏性代码或驱动着每个变量。反之，这些变量决定混合空间中的哪个动作将用作最终动作。

混合空间可被视为一个 2D 图表，每个输入值均沿一根轴，动画则分布在图表上的各点处。混合动画由图表上动画之间的混合基于当前输入值所指定的位置进行计算。 举例而言，定向跑步动画和待机动画之间的混合就是基于角色移动的方向和速度。

创建 Blend Space 和 Blend Space 1D 资源并设置关联的骨架：

- 在内容浏览器新建 Animation -> Blend Space 或者 Blend Space 1D。
- 在选取骨架（Pick Skeleton）对话框中，选择应作为混合空间目标的骨架。
- 根据项目中的骨架资源数量，资源列表可能有所不同。
- 输入新的混合空间资源的名称。
- 如果动画蓝图与混合空间具有相同的目标骨架，则该混合空间也可以在该动画蓝图的 动画图（Anim Graph） 中使用。

创建混合空间后，双击打开编辑器，可以开始创建基于运动的混合或所需的混合效果。

需要定义 轴设置（Axis Settings）（驱动混合的属性）以及指定要用作 样本姿势（Sample Poses） 的动画。 定义这两个元素后，可以通过更改 混合空间资源"细节（Details）" 面板中的属性来进一步调整混合空间。

在网格上放置一些样本姿势后，按住 Shift 键并四处拖动绿色菱形以查看姿势之间的混合效果。

在动画蓝图的 动画图（AnimGraph）中放入节点，这些节点使用数值数据来推动动画混合并生成最终动画姿势。

混合空间节点提供对混合空间的样本参数数据和输出姿势的访问。

要使用拖放来放置混合空间节点：

- 在 动画蓝图 的AnimGraph中，在 资源浏览器（Asset Browser） 查找要采样的混合空间。
- 单击该资源，并拖动鼠标至 动画图（AnimGraph）。
- 松开 鼠标左键 以将该 混合空间 节点放入图中。

要使用上下文菜单放置混合空间节点：

- 在 动画图形（AnimGraph） 中单击右键并展开 混合空间（Blend Spaces），选择想要采样的 混合空间。
- 混合空间 节点已放入图中。

混合空间依赖要传递到样本参数的数据来执行动画混合。 每个混合空间节点都包含在编辑混合空间过程中创建的每个样本参数的输入数据。 来自其他节点的变量或输出可以连线到这些引脚，以将必要数据传递给混合空间并驱动样本姿势的混合。

传递给混合空间的值通常是在 事件图（EventGraph） 中的更新循环或通过游戏代码计算的变量。

在最简单的情况下，混合空间节点的 姿势（Pose） 输出引脚可以连线到 动画图（AnimGraph） 中 结果（Result） 节点的 姿势（Pose） 输入引脚。或者，如果需要更复杂的动画链，可以将它连线到以动画姿势作为输入的任意其他输入引脚。



### ✒ Physics Animation 基于物理的动画
- https://docs.unrealengine.com/4.27/zh-CN/AnimatingObjects/SkeletalMeshAnimation/PhysicallyDrivenAnimation/
- 物理内容示例 https://docs.unrealengine.com/4.27/zh-CN/Resources/ContentExamples/Physics

在骨架网格物体上以任何形式应用物理都需要那个网格物体设置 Physics Asset（物理资源），并应用该物理资源。

给角色应用物理有很多种方法，两个主要工具是 Set All Bodies Simulate Physics 和 Set All Bodies Below Physics Blend Weight 节点，一般将它们放置在你的角色动画蓝图图表中。

- *Set All Bodies Below Simulate Physics* 节点的作用是递归地激活骨架网格物体上的物理资源刚体，从给定骨骼开始模拟物理，并递归地沿着骨骼链向下移动。比如，如果你让左锁骨开始模拟，那么在骨架层次结构中位于其下面的所有骨骼也会开始模拟，最终产生一条柔软的或者是类似于布娃娃效果的手臂。简单地说，你可以把这个节点看成一个用于启动或暂停从特定节点开始模拟物理的开关。

- *Set All Bodies Below Physics Blend Weight*
该节点简单地控制物理资源对动画骨架网格物体影响的程度。权重值为 1.0，则使用物理驱动给定骨骼及该骨骼下的所有骨骼。权重值为 0.0，则骨架网格物体返回到其初始关键帧动画。通常，你要在每次更新时驱动该节点，以便你可以平滑地改变物理混合权重的值。

基于碰撞的物理反应是角色模拟的常用情形，比如，当角色被射弹击中时。从高的层次来讲，这要求你：

- 获得碰撞到的骨骼的名称。这可以通过速效武器的踪迹来完成，或者在射弹类的适当地方完成。
- 将那个骨骼名称传递到角色的动画蓝图中，以供事件图表使用, 一般通过 *Set All Bodies Below Simulate Physics* 节点完成。这激活了模拟系统。
- 通过 *Set All Below Physics Blend Weight* 节点控制物理混合权重属性。一般，你会想快速地使它增加到 1.0，然后在下降回到 0.0，以便物理反应混入然后再混出。这一般在动画蓝图的事件图表中完成。
- 一旦反应完成且物理混合权重返回为0，那么你应该再次使用 *Set All Bodies Below Simulate Physics* 节点来禁用该模拟。



# 🌟 Cartoon NPR 渲染
- Real-Time Hatching, Appears in SIGGRAPH 2001 https://gfx.cs.princeton.edu/proj/hatching/
- 关于非实感图形学或者风格化渲染有哪些好的书或者paper？ https://www.zhihu.com/question/32078473
- 非实感图形学 https://zhuanlan.zhihu.com/p/84075550
- Unity shader 后处理实现水墨风格渲染「Low 暴了」 https://zhuanlan.zhihu.com/p/34406208
- UE5制作卡通着色的方法！ https://www.bilibili.com/video/BV1vT4y1Z7RQ

图形学渲染风格主要分为真实感渲染 (Photorealistic Rendering)和非真实感渲染 (Non-photorealistic rendering，NPR)两大类。 真实感渲染目的在于渲染出相片级别的画面真实感，而非真实感渲染的目的更加的多样，主要在于模拟艺术化的绘制风格，呈现出手绘的效果。常见的非真实渲染技术包括卡通渲染、油画渲染、像素感渲染、铅笔画、素描画、蜡笔画和水墨画等类型。

素描(Hatching)是非常流行的非真实渲染风格。现在素描算法大多都基于 Praun 等人在 2001 年发表的 Real-Time Hatching 论文，文中描述了如何通过提前生成的素描纹理来实现实时的素描风格渲染，论文中将这组纹理成为色调艺术图(Tonal Art Map，TAM)。色调艺术图从左到右笔画逐渐增多，用来模拟物体漫反射的效果。同一列不同分辨率的纹理代表的是多级渐进纹理，用来更好的模拟远离摄像机的物体。TAM 图间的笔触是有一定讲究的，右边纹理图笔触必须包含左边的笔触，如果没有遵循这个规则的话，得到的素描效果会非常奇怪。论文给出了自动生成 TAM 的方法，除了使用六张纹理图之外，我们可以对纹理图进行 pack 得到两张 RGB 纹理图，RGB 三个通道分别对应前三张和后三张纹理图的纹理信息。

描边 Outline rendering 几乎是所有非真实感渲染都需要实现的效果，只不过不同的渲染风格有不同的描边细节。

Real-Time Rendering 一书中将描边技术分为了以下五大类：

- 基于法线和视角的描边( Shading Normal Contour Edges)
- 过程式的几何描边( Procedural Geometry Silhouetting)
- 基于图片处理的描边( Edge Detection by Image Processing)
- 基于轮廓线检测的描边( Geometric Contour Edge Detection)
- 混合以上几种描边方法(Hybrid Silhouetting)

其中，使用的最多的是基于法线和视角的描边、过程式几何描边和基于图片处理的描边三种方法。

卡通渲染的着色方式主要包括卡通着色(Cel Shading)和基于色调的着色(Tone Based Shading)两种。卡通渲染有一个很重要的特点就是色阶少，着色呈现块状感，这些效果都可以在着色方式中进行实现。这两种着色方式的主要区别在于色块的风格和色块的边界处理上，得到的效果会有较大的区别。

卡通着色一般会根据NdotL = dot(normal，lightDir)的结果指定不同的颜色值，来模拟卡通色块的着色效果；除了这种方法之外，更常见的处理方式是利用 NdotL 的结果从一维渐变纹理 RampTexture 中进行采样。


# 🌟 Building Virtual World
- 构建虚拟世界 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds


## ⚡ Lights 光照
- 光照与阴影 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LightingAndShadows/
- 全局光照 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/GlobalIllumination/
- 光源类型 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LightingAndShadows/LightTypes/

在虚幻引擎 4 中，有数个关键属性会对场景中的光照产生较大影响。

`Intensity`强度决定着光线输出到场景中的能量。对 Point Light 和 Spot Light 而言，这以流明为单位，1700流明则相当于一个100W的电灯泡。

`Light Color`光源颜色，编辑器中代表光源的sprite也将调整颜色进行匹配。

`Attenuation Radius` 光源的衰减半径决定光线可达的范围，定义光线影响的对象，并且计算光源衰减时将其用作外边界。光源衰减半径会对性能产生严重影响，所以要尽量少使用较大的半径值。

源半径（`Source Radius`）和源长度（`Source Length`）需要特别关注，因为它们将定义表面上反射高光的大小。

渲染光照贴图时它们还在 Lightmass 中存在影响。较大半径的光源将投射更柔和的阴影（例如多数主要3D制作包中的区域光源）。因其由 Lightmass 进行处理，所以只有 静态 光源将获得效果。

注意事项：

- 留意视口的 Scalability 设置，如果 Shadows 设置为 High 以下的级别，引擎将会过滤掉大量的阴影效果。
- 如果灯光设置为静态，并且没有构建那场景中的光照，则阴影有 Preview 预览字样，可以将灯光可移动属性从 Static 改为 Movable，或者构建项目的光照信息。
- 对于直射光，可以设置 Cascaded Shadow Maps -> Dynamic Shadow Distance Stationary/Dynamic Light。
- 光源设置 Light -> Cast Shadows 和 Affect World 激活时才会投身阴影，并且勾选 Cast Static/Dynamic Shadows 才会对静态/动态物体投影的阴影有响应。
- 使用距离场阴影需要在 Distance Field Shadows 属性面板，为光源启用距离场阴影。

虚幻引擎 4 中有四种光源类型：

- Directional Light 定向光源主要用作为基本的室外光源，或者用作接近于无限远处发出的光的任何光源； 
- Point Light 点光源像传统的"灯泡"一样的光源，从一个单独的点处向各个方向发光；
- Spot Light 聚光源也是从一个单独的点处向外发光，但是其光线会受到一组锥体的限制；
- Sky Light 天光则获取场景的背景并将它用于场景网格物体的光照效果。

在每个光源的 Transform 区块中，可以看到 Mobility 移动性，不同的设置在光照和阴影效果上有着显著的区别，以及性能上也各有差异。

- Static Light 静态光源，高效地提供高质量的光照，可预计算。但对于高质量的直接照明，光照贴图具有相关成本，并且运行时完全无法更改或移动。
- Stationary Light 固定光源，可以在运行时改变颜色和亮度，但是不能移动、旋转或修改影响范围。
- Movable Light 全动态能力，但耗能，并且不能预计算间接光线；

虚幻引擎 4 中具有的四种类型的阴影投射：

- 静态光源投射完全静态的阴影和光照。
- 定向固定光源是特殊的，它们支持联级阴影贴图（Cascaded Shadow Maps）的全景阴影，同时作为静态阴影。
- 动态物体（比如 StaticMeshComponent 或 SkeletalMeshComponent）必须要从距离场阴影贴图中集成环境世界的静态阴影。
- 可移动光源在任何物体上都投射完全动态的阴影(和光照)。

静态光源投射的阴影是完全静态的阴影和光照，这意味着它们对动态对象不会产生直接影响，静态光照由于烘焙到了间接光照缓存中，所以会有一些影响，但是不会对运行性能造成影响。

定向固定光源是特殊的，它们支持采用 联级阴影贴图（Cascaded Shadow Maps） 的全景阴影，同时作为静态阴影。这在具有很多带动画的植被的关卡是非常有用的；您想在 玩家周围产生可以动的阴影，但是不想付出以让很多阴影重叠来覆盖较大的 视图范围这样的代价。动态阴影会随着距离而渐变为静态阴影，但这种变换通常是 很难察觉到。要想设置这样的处理，仅需把 DirectionalLightStationary 的 Dynamic Shadow Distance StationaryLight 修改为您想让渐变发生的范围即可。

可移动光源在任何物体上都投射完全动态的阴影(和光照)。它的光照数据不会烘焙到光照贴图中，它可以自由地在任何物体上投射动态阴影。静态网格体、骨骼网格体、粒子特效等，都将会从可移动光源投射或接收阴影。通常来说，投射可移动动态阴影的光源是性能消耗最大的。

天空光照仅会某些情况下捕获场景：

- 对于静态天空光照（Static Sky Lights），构建光照时会自动进行更新。
- 除非启用实时捕获功能，否则对于 Stationary or Movable Sky Lights，在加载时更新一次，只有调用 Recapture 时才会进一步更新。

在某些情况下，太阳在天空中的位置不以审美为目的。相反，它是一个关键的设计因素。

太阳位置计算器（Sun Position Calculator） 插件在虚幻引擎中为您求解这些数学方程。您定义纬度、经度、基点、日期和时间。然后，太阳位置计算器与虚幻引擎中的默认天空球协同工作，将日轮放置在天空球中，并在关卡中确定主定向光源的方向。

地理位置准确的太阳定位通过默认的 *BP_SkySphere* 太阳定位器实现，在虚幻编辑器中创建的大多数新关卡中已经设置了它。

SunSky Actor 是此插件的一部分。它利用相同的数学方程控制太阳在天空中的位置，还包括定向光源、天空光照、SkyAtmosphere多个组件，用于产生逼真的渲染，呈现真实形态的阳光和阴影。

借助 SunSky Actor，无论怎样的审美选择，都可使用夏令时(DST)、日期、时间的设置简单快捷地设置场景。设计用于游戏和其他行业，例如建筑、工程和施工(AEC)或汽车、产品设计和制造。

SunSky Actor 包含定向光源、天空光照和 SkyAtmosphere 组件，作为蓝图的一部分。将其添加到场景时，最好删除任何已有的定向光源、天空光照和 SkyAtmosphere 组件。否则，若从头开始，最好从全新的空白关卡开始。

将SunSky Actor拖至关卡时，将显示为亮白色，可执行以下操作之一：

在项目自动曝光设置中延伸默认亮度范围，设置 Project Settings -> Rendering -> Default -> Extend default luminance range in Auto Exposure settings。或者，若不希望此项目设置影响项目外观，可选择 SunSky Actor 内部的 Directional Light 定向光源并使用较低光照强度。


阴影让您的世界产生对比，使得世界中的物体感觉更加真实，并营造一种氛围。静态阴影无论怎么渲染，实际上都几乎没有任何性能消耗，但是动态阴影是造成较大性能消耗的原因之一。

可使用 光照贴图分辨率（`Lightmap Resolution`） 来控制静态光源生成的烘焙光照的细节。

在静态网格体组件上，光照贴图分辨率在静态网格体资源上设置，或勾选（Override Lightmap Res）并设置值。值越大意味着分辨率越高，但也意味着构建时间更长、内存消耗更多。

在笔刷表面上，光照贴图分辨率通过"光照贴图分辨率"属性进行设置。这是真正在对密度进行设置，因此较低的值能形成更高的分辨率。

固定光源（`Stationary Lights`） 是保持固定位置不变的光源，但你可以改变光源的亮度和颜色等。这是与静态光源的主要不同之处，静态光源在gameplay期间不会改变。但是，如果在运行时更改亮度，请注意它仅影响直接光照。间接（反射）光照不会改变，因为它是在光照系统（Lightmass）中预先计算的。

在三种光源的可移动性中，固定光源一般拥有最好的品质、中等的变化程度，以及中等的性能开销。

所有间接光照和来自固定光源的阴影都存储在光照贴图中。直接阴影存储在阴影贴图中。这些光源使用距离场阴影（Distance Field Shadows），因此对于带有光照的对象来说，即使光照贴图分辨率相当低，它们的阴影也会保持清晰。

固定光源的*直接光照*使用延迟着色直接进行渲染。 这使得在运行时可以改变光源的亮度和颜色，同时提供了光源函数或IES概述文件。 该光源具有和可移动光源一样的高质量解析高光。 在游戏中，可以通过修改光源的 Visible 属性来显示或隐藏该光源。

光源的实时阴影具有较大的性能消耗。 渲染一个有阴影的完全动态的光源所带来的性能消耗，通常是渲染一个没有阴影的动态光源的性能消耗的 20 倍。 所以，固定光源可以在静态物体上投射静态阴影，但仍有一些限制。

Lightmass 在重新构建光照过程中为静态对象上的固定光源生成距离场阴影贴图。 距离场阴影贴图即时在分辨率非常低的情况下，也可以提供非常精确的阴影变换， 产生的运行时性能消耗非常小。和光照贴图类似， 距离场阴影贴图要求所有静态光照的 静态网格体 具有唯一的展开的 UV。

最多只能有 4 个重叠的固定光源具有*静态阴影*，因为这些光源必须被分配到阴影贴图的不同通道。 这是个图形色彩问题，由于这种拓扑结构，所以通常仅允许少于4个的光源重叠。 阴影不能影响这个重叠测试，所以 太阳光一般需要从它所在关卡获得一个通道， 即使地下区域也如此。一旦达到通道的极限，其他固定光源将会使用全景动态阴影， 这会带来很大的性能消耗。您可以使用 StationaryLightOverlap 视图模式来可视化地查看重叠效果， 它会随着您修改光源而动态地更新。 当某个光源无法分配到一个通道时，该光源的图标会变为红色的 X。

半透明表面也能够在开销较小的情况下接受固定光源的阴影投射，Lightmass 会根据场景静态物体预计算阴影深度贴图，这将在运行时被应用到半透明表面。这种形式的阴影是比较粗糙的，仅仅在米的度量单位上计算阴影。

动态物体必须要从距离场阴影贴图中集成环境世界的静态阴影。 这是通过使用 每个对象 的阴影完成的。 每个可移动的对象从固定光源创建两个动态阴影：一个用于处理静态环境世界投射到该对象上的阴影 ，一个处理该对象投射到环境世界中的阴影。 通过使用这种设置，固定光源唯一的阴影消耗就来源于它所影响的动态对象。 这意味着，根据所具有的动态对象的数量不同，该性能消耗可能很小，也可能很大。 如果足够多的动态对象，那么使用可移动光源会更加高效。

即便在定向光源上使用联级阴影贴图的时候，可移动组件仍然将会创建 PerObject 的阴影。这么做在较小的 Dynamic Shadow Distances 时比较有用，但如果设置较大的时候这么做就会产生不必要的性能开销。要禁用 PerObject 阴影来优化性能的话，可以在光源属性上禁用 Use Inset Shadows For Movable Objects。

和静态光源一样，固定光源把*间接光照*信息存储在光照贴图中。 在运行时，通过修改亮度和颜色来改变直接光照的做法并不适用于改变间接光照。 这意味着，即使当一个光源未选中 Visible 项时，在构建光照时，它的间接光照仍会存放到光照贴图中。 光源属性中的 `IndirectLightingIntensity` 可以用于控制或禁用该光源的间接光照强度，以便当在构建光照时减小甚至彻底关闭它的间接光照。

不过，还有一个后处理 `Volume`，叫做 `IndirectLightingIntensity`，它能够控制所有光源在光照贴图中的间接光照强度效果，这个 Volume 可以在运行时修改，并可以从蓝图控制。

在虚幻引擎的 4.9 版本及以后的版本中，固定的定向光源提供了一个新的阴影选项，在 Lightmass 区块内，叫固定光源使用区域阴影 Use Area Shadows for Stationary Lights。

如果想使用固定光源的区域阴影选项， 先选择场景中的 定向光源 并确认它的 Mobility 设置为 Stationary。 然后在该定向光源属性的 Lightmass 区域中，勾选 Use Area Shadows for Stationary Lights 选项。 当该选项被勾选时，该固定光源将会使用区域阴影来做与计算阴影贴图。 区域阴影能在光照投影较远处产生柔和的阴影边界。下图中可以看到是否使用区域阴影的差异。

*可移动光源*将投射完全动态的光照和阴影。可修改位置、旋转、颜色、亮度、衰减、半径等所有属性。其投射的光照不会烘焙到光照贴图中，在无全局光照方法时不支持间接光照。

可移动光源设为使用全场景动态阴影来投射阴影，此方式性能开销很高。性能开销主要取决于受该光源影响的网格体数量以及这些网格体的三角形数量。这意味着半径较大的可移动光源的阴影投射性能开销是半径较小的可移动光源的数倍之多。

点光源或聚光源未移动时，可存储该光源的*阴影贴图*并在下一帧重复使用。在环境通常不移动的游戏中，此功能可显著降低可移动点光源和聚光源的阴影投射开销。

阴影贴图缓存会对性能产生极大影响，使用 NVIDIA 970 GTX GPU 以 1920x1200 屏幕分辨率进行优化测试的结果。

- 在启用此功能之前，无缓存的 3 个阴影投射点光源花费了 14.89 毫秒完成阴影深度渲染。
- 启用缓存阴影贴图后，相同的 3 个阴影投射光源花费 0.9 毫秒便完成渲染，大约 快16倍！
- 可使用 r.Shadow.WholeSceneShadowCacheMb 控制阴影贴图缓存使用的最大内存量

虽然阴影贴图缓存可降低在项目中使用动态阴影的开销，但其仍存在部分限制，结合不支持的功能使用时可能引起渲染瑕疵。

默认仅在对象满足以下要求时才会进行缓存：

- 基元将其 移动性 设为 静态 或 静止。
- 关卡中使用的材质不使用 场景位置偏移。
- 光源必须是 点光源 或 聚光源，移动性 设为 可移动，并启用 阴影投射。
- 光源必须停留在一处。
- 使用动画 曲面细分 或 像素深度偏移 的材质可能会在缓存其阴影深度时产生瑕疵。

虚幻引擎 4（UE4）支持在关卡中使用不同的 预计算光照情景（Precomputed Lighting Scenarios）。这使得单个关卡可以保存并显示多种光照设置，使玩家既获得灵活的动态光照，又能以固定开销预计算光照。 对用高性能方式进行高精度渲染的虚拟现实（VR）或建筑可视化项目而言，在不同预计算光照情景之间切换更显重要。 通读此文后，你便能了解如何在 UE4 项目中使用预计算光照。


## ⚡ Landscape 地形
- Landscape https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/Landscape
- Water https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/Water
- Foliage https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Foliage/
- Fog Effects https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/FogEffects
- Lighting And Shadows https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LightingAndShadows
- Creating a Stylized Chaparral Environment in UE4 https://80.lv/articles/creating-a-stylized-chaparral-environment-in-ue4/
- Mastering Unreal Technology: Advanced Level Design Concepts with Unreal Engine 3 

Landscape Layer 是植被系统的核心。它确定植被的生长区域和 Landscape Material 层材质混合区域。Landscape Layer Info 是 Landscape Layer 的数据来源，每个 Landscape Layer 对应一个 Landscape Layer Info 储存信息。

Landscape 将读取指定给它的 Landscape Material，以确定其上使用的 Landscape Layer。目前有几种节点可以向 Landscape Material 中创建 Landscape Layer，它们是：

- Landscape Layer Blend
- Landscape Layer Sample
- Landscape Layer Switch
- Landscape Layer Weight

只要通过节点创建了 Landscape Layer，即使最终并不使用它们，Landscape 依旧会读取到该节点。

即使不使用创建的节点，在节点中创建的 Landscape Layer 依然会在 Landscape 中存在。

可以发现，Grass 必须依赖于 Landscape 同时使用。而 Foliage 可以独立于 Landscape，但无法再通过 Landscape Layer 控制生长范围。

景观系统（Landscape）在绘制 景观材质（Landscape Material）时，先将 景观层信息（ Landscape Layer Info）提交到景观材质，景观材质中的 景观层（Landscape Layer）再利用这些信息进行Grass和表面材质的范围计算。


## ⚡ Foliage 植被
- Foliage https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Foliage/
- 为 UE4 制作植被 —— Foliage for UE4 https://zhuanlan.zhihu.com/p/371496673
- Nanite 虚拟几何体 https://docs.unrealengine.com/5.0/zh-CN/RenderingFeatures/Nanite/

Nanite 是虚幻引擎 5 全新推出的虚拟几何体系统（Virtualized Geometry System）。它采用全新的内部网格体格式和渲染技术来渲染像素级别的细节以及海量的物体对象。它足够智能，可以仅处理能够观察到的细节。Nanite 采用高度压缩的数据格式，并且支持高细节流送和自动 LOD - Level of Detail。

Nanite 的优势：

- 几何体形状的复杂度提高了数个数量级；三角形和对象的实时渲染数量达到了前所未有的高度。
- 帧预算（Frame Budget）不再会因为多边形数量、绘制调用和内存使用情况而受限。
- 可以直接导入电影级品质的美术资源，例如ZBrush雕刻模型和摄影测量扫描数据
- 通过高模实现细节，而非通过烘培法线贴图来实现。
- 自动处理 LOD，不再需要手动设置。
- 品质损失极少或没有损失，特别是在 LOD 发生过渡时。

从渲染管线诞生起，渲染艺术家就一直在为现代渲染管线的实现流程支付着高昂的使用代价。比起艺术家，他们更像是精明的商人，从实时渲染管线的手中“争分夺秒”，花费大量时间和精力利用各种各样的技巧，寻找质量和性能之间的平衡点。

实时渲染对于参与渲染的资产总会有两项基本的要求：

- 精简的顶点数量。小体量的数据确保 CPU 和 GPU 之间传递效率，同时降低 GPU 对其进行深度测试、阴影计算等渲染工作的负担。
- 精简的材质数量。实时渲染管线常会按照逐对象-逐材质或逐材质-逐对象的逻辑顺序进行 Draw Call，调用次数与对象数量及材质数量都直接相关。因此我们常常会将多个模型合并为一个模型以减少对象数量、将多个同类型材质纹理合并为一个纹理以减少材质数量。

对于一些硬表面物体，例如石头、建筑表面等，它们的细节在空间中的变化并不十分剧烈，可以巧妙地利用法线贴图（Normal-map）、视差贴图（Parallax-map）等压缩纹理在二维表面上模拟它们的视觉变化，从而很好地减少它们的顶点数量。

但对于另一些表面，例如毛发、植被等，情况就不一样了。这些资产拥有的细节在空间中呈现出细碎且剧烈的变化，很难仅从二维平面上对其进行模拟。

早先对于实时渲染的主战场游戏领域而言，这并不是什么太大的问题，因为玩家很少会将精力放在这种与游戏目标无关的背景物上。但如果要将实时渲染引入其他的三维制作领域中，或进一步提升游戏的画面质量，问题就变得无法忽视了，不管采用多少讨巧的方法，高质量的画面总会无法回避高面数的需求。

虚幻 5 引擎的 Nanite 虚拟几何体通过将整个模型资产进行压缩（既然能够将模型表面的细节进行压缩，那么将整个模型压缩的思想也并不奇怪嘛），从而实现了将可实时渲染的几何体形状复杂度提高了数个数量级的壮举。

从结果上来说，Nanite 通过先虚拟化再采样，将屏幕中看见的几何体形状复杂度进行了重新分配，平均了所有能看见的 Nanite 几何体形状复杂度。


UE 4 有两套植被系统：Grass 和 Foliage。

Grass 依靠 LandscapeLayer 确定生成范围，Grass 的生成逻辑和 Landscape Layer 都在 Landscape Material 的内部。Grass 植被在指定了 Landscape Material 的 Landscape 上自动生成。Grass 一旦生成，无法通过修改 Landscape Layer Info 之外的手段将其移除。与 Foliage 相比，Grass 的生成性能和显示性能都更加优秀。

Foliage 可以自由绘制（Foliage Tool）和程序化生成（Procedural Foliage Spawner），同时也可以通过 Landscape Layer 配合控制生长范围，对于 Foliage 来说 Landscape Layer 是可选项。Foliage 在生成后也可以通过绘制工具手动修改和移除，Actor Foliage 甚至可以在游戏中进行实时销毁。

Speedtree 是一款优秀的三维植被建模软件，最厉害的地方在于它基于参数化建模的方式，意味着制作者只需要做好一棵树，就能够随机生成成千上万棵这棵树的变种版本。。它能够生成极为复杂的植物模型，知名电影《阿凡达》的御用植物模型生成工具。

Speedtree 有专门的 forUE4 版本，但资产并不稳定可用性不高（例如如果你为Speedtree资产指定自定义LOD，引擎就会崩溃）。建议的方式是使用能导出 .fbx 和 .obj 格式的 Indie 版本，这样我们可以随时导出 Speedtree 资产在其他三维软件里进行修饰，然后将其作为 Nanite 资产导入到引擎中。

Epic 拥有全世界最大的扫描资源库 Quixel Megascans，只需要注册一个 Epic 账号进行登录，就可以免费利用其中的资源创建自己的资产。最新的 Unreal Engine 5 体验版已经集成 Quixel Bridge 插件允许你访问 Megascans 素材库，从而将场景、材质和 MetaHuman 导入到虚幻引擎中。

在扫描库的 Atlas 分类下，可以下载到各种各样的植被图集用于 Speedtree 创建。


## ⚡ Water 水体
- https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/Water/

水体系统允许你基于样条线创建各种河流、湖泊、海洋，并陆地地形有机互动。它集成了着色和渲染管线，其水体表面支持 物理交互和动态流体模拟，比如脚本在水中的涟漪或船在水中移动时的尾迹。

水体系统是一个独立的插件，可以根据你的项目需求来启用/停用。该插件能为引擎增添水体渲染和网格划分系统，还提供了范例和默认内容供你使用。

如需启用水体系统，请点击 Edit -> Plugin -> Water 水体插件，勾选复选框从而启用它。请重启编辑器以便让插件生效。

水体插件还包含一些默认的材质和内容，可以在你自己的项目中使用，供你探索。你可以在内容浏览器的水体内容（Water Content）中找到这些内容，请勾选内容浏览器的设置 Settings -> Show Plugin Content。

在此目录中，我们提供了一些地图和内容示例供你探索，比如：

- 水波生成（Caustics generation）
- 流体模拟（Fluid simulation）
- 浮力模拟蓝图（ Physics simulation buoyancy Blueprints）

水系统由两个关键元素构成：

- 水网格体（*Water Mesh Actor*）可编辑的水面和水面材质。
- 水体（*Water Body Actors*）（江河、湖泊和海洋）。

这两个元素确定了项目中的水如何表现，以及与所接触对象互动。这可以是非常简单，比如水材质如何将光反射和折射到与水面接触的对象上。对于 Gameplay，这可以是角色在水中移动时如何让水面产生波浪，或者对象在水面上漂浮时的浮力有多大。

水系统有自己的基于样条线的网格体系统，可定义世界内应该包含水的区域。它使用水网格体，设置应用于关卡中放入的所有水体（江河、湖泊和海洋）的属性，水网格体主要定义了所渲染水面的质量和细节。

你必须将水网格体放入场景中，以生成关卡中水体（Water Body）类型的表面。水网格体本身并不会渲染表面。水体将使用样条线来定义关卡中表示江湖、湖泊和海洋的区域。这些样条线定义了水网格体在何处绘制并渲染水网格体图块。这样做更高效，因为它仅渲染当前摄像机视图中可见的表面网格体。

水网格体位于场景中时，将水体拖放到场景中可添加或移除表示水面的图块。由于所有水体使用相同的网格体来渲染水面，因此它们会无缝地混合在一起。这还意味着，你可以在不同类型的水面之间进行过渡，如从奔流的江河汇入平静的湖泊或汹涌的海洋。

使用控制台命令 r.Water.WaterMesh.ShowWireframe 1 启用水网格体线框视图，以查看不同水体之间的这些过渡如何相互作用，从而创建无缝的表面。


水系统会使用 GPU 驱动的波浪数据在水体上模拟波浪表面。水波资产（*Water Waves*）提供了由其模拟模型管控的各种波浪参数。

水体随附了波浪模拟模型，可以和水波资产（*Water Waves Asset*）指定插槽配合使用。默认情况下会提供一个，使用的是 TODOLINK（Gerstner Water Waves）盖斯特纳波模拟模型。

虽然不是每次使用水体时都需要创建新的水波资产，但有时你可能希望模拟模型有不同类型的波浪输入来产生不同的表现，或者你可能希望使用完全不同的波浪模拟模型。

创建水波资产，前往内容浏览器，点击（Add/Import）导入或使用右键点击上下文菜单，从而创建自己的水波资产。在菜单中，选择 Water -> Water Waves。

在选择的水体（*Water Body*）上，使用水波资产（Water Waves Asset）指定要应用此资产的插槽。

波浪来源（*Waves Source*） 会指定要用于在水体上生成波浪的波浪模拟模型。选择一个来源之后，该来源就会提供要通过所选波浪来源（Waves Source）文件公开的参数，以控制波浪模拟。例如，盖斯特纳波来源会在盖斯特纳波生成器（Gerstner Wave Generator）下提供参数。

凡是在关卡中分配了此水波资产的水体，你都可以通过配置这些参数来定义这些水体上波浪模拟的外观。


虚幻引擎为水系统提供了盖斯特纳波模拟模型。水系统具有可配置的参数的水波浪资产，所以支持更多的波浪模拟模型，你可以通过C++代码或蓝图来实现。

此部分中的信息使用了盖斯特纳波实施，用以举例说明如何创建你自己的波浪生成器后端，从而对水面波浪进行求值。

可以在 C++ 或在蓝图中，从 *UGerstnerWaterWaveGeneratorBase* 扩展推导出的新类型，C++ 中使用 `GenerateGerstnerWaves_Implementation(TArray<FGerstnerWave>&OutWaves) const`。


江河、湖泊和海洋的水体全都使用相同的材质（*Water_Material*）作为基底。它包含特定于每种水体类型的一组开关和参数，这样单个源材质可以用于驱动所用的所有类型的水。将为每种水体类型（江河、湖泊、海洋）创建一个材质实例，并且每个实例会启用一个开关，用于确定对应于该水体类型的可用参数。此工作流程在每种水体类型材质之间维持一致的外观和设计。

对于使用湖泊、海洋或江河材质的水体类型，大部分材质参数类似。但江河材质是一个例外。江河材质包含其他水体材质所不具备的特定参数，如速度、流量控制、密度等等。但是，江河水体没有波浪的参数，而海洋和湖泊却有此参数。

在内容浏览器中打开 Water Content/Materials/WaterSurface 文件夹，探索每种不同的水体类型材质实例。

江河水体材质的过渡，江河水体允许水沿着不同位置之间的样条线流动，并且可以源自湖泊、海洋、江河或其任意组合。与湖泊和海洋不同，江河有大致的水流方向。它可以从湖泊流入海洋或另一个湖泊，甚至可以沿途与另一条江河合流。

由于江河有不同于湖泊和海洋的一组属性（即，江河不会产生波浪），因此江河使用过渡性材质从 江河到湖泊 和 江河到海洋 过渡无缝混合。江河水体具有与湖泊和海洋水体相同的图块网格体，因此过渡性材质就能够很好地融合到所接触到的任何其他水体的表面。

过渡性材质是江河水体的默认材质实例。要让关卡中的水有一致的外观，唯一需要的设置是，手动将其颜色匹配到所使用的任何其他湖泊、海洋和江河水体材质。

在下面的简单场景示例中，使用了一个地块，在中心包含湖泊水体，围绕岛屿的是海洋水体，连接两者的是江河水体。过渡性材质处理了水开始从湖泊流入江河，再从江河过渡到海洋的过程。每种水体和过渡材质都匹配了颜色，以保证一致。


每个水体都指定了 水下后期处理材质（*Underwater Post Process Material*），以使用后期处理材质驱动穿过水面的过渡。摄像机位于给定水体边界之内，沉没到水面以下时，会自动进行水下后期处理。后期处理材质还会屏蔽掉场景中不在水下的部分来创建部分水下的视图，从而处理进入和离开水面的过渡。

每种水体的细节面板（Details）包含 Actor 的特定设置，并且可在其中访问后期处理设置（Post Processing Settings），进一步调整水下的外观，无需打开并手动配置材质属性。

出于优化目的，仅当摄像机在水面以下或略微露出水面之上时，才会进行水下后期处理。这是为了考虑湖泊和海洋的情况，其中波峰和波谷可能会导致摄像机完全或部分沉没水下。需要启用 生成碰撞（Generate Collision），才能进行此水下后期处理。

此外，水体图块网格体能够使用江河水体的过渡性材质无缝混合。但是，如果水下后期处理的外观在两种水体之间差异显著（例如，从清澈的江河流入浑浊的湖泊），那么随着摄像机在两种后期处理体积之间移动，会显示一种硬过渡。


单层水（*Single Layer Water*） 着色模型可用于所有默认水材质，因为它能使用单厚度层提供一种经济高效的半透明方法。这种基于物理原理的着色模型支持水面上恰当的光散射、吸收、反射和折射以及阴影投射。

你可以创建自己的水材质来配合水系统使用，因此你不必专门使用指定给每种水体的默认水材质。

设置自己的材质时，请记住以下几点：

- 水体支持使用任何类型的着色模型的水材质。
- 材质需要启用（Used with Water）的用法标记（Usage Flag）。每当将材质指定给不同类型的 Actor 时，此标记应该会自动启用，并且该材质将重新编译。如果不是这种情况，材质未正确渲染，请检查此标记是否已启用。
- SingleLayerWater 着色模型可提供半透明和照明结果，成本以比传统半透明材质更低。


## ⚡ Fog Effects 雾效
- 雾效 https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/FogEffects/

使用雾效来为场景添加、设置氛围，雾效是场景气氛不可缺少的元素。

虚幻引擎中的雾效：

- 指数高度雾`Exponential Height Fog`是基于高度的远处雾。
- 从虚幻引擎 4.16 版本开始支持体积雾，使用指数高度雾时可用体积雾（`Volumetric Fog`）功能。
- 大气雾（`Atmospheric Fog`） 提供一种透过行星大气的光散射的近似现象，这可以让室外关卡看起来更加逼真得多。
- 天空大气 `SkyAtmosphere` 组件是一种基于物理的天空和大气渲染技术。

使用指数高度雾：Place Actors -> Visual Effects -> *Exponential Height Fog*。

指数高度雾`Exponential Height Fog`是基于高度的远处雾，在地图上较低位置处密度较大，而在较高位置处密度较小。其过渡十分平滑，随着海拔升高，也不会出现明显切换。指数高度雾提供两个雾色，一个用于面朝主定向光源（如不存在，则为直上光源）的半球体，另一个用于相反方向的半球体。

指数高度雾的位置将决定雾的高度。使用雾高度衰减（Fog Height Falloff） 进一步调整高度。

指数高度雾的渲染开销与额外优化的两层固定密度高度雾相近。*开始距离*用于在查看器前方人为保留无雾的定义区域。用于 Z 缓冲会剔除像素，因此该距离有助于维持性能。根据场景内容以及和使用远雾开始距离 的时间，渲染开销可减少 50% 以上。渲染启用 Z 值和深度测试的全屏四边形即可实现此优化。

从虚幻引擎 4.16 版本开始支持体积雾，使用指数高度雾时可用体积雾功能。此方法在摄像机视锥的每个点上都计算参与媒介的密度和光照，以便 支持对雾产生影响的各种密度和任意数量的光源。

设置和调整体积雾时，你可以全局控制它，也可以在场景中局部控制它。全局控制功能使你能够使用指数高度雾（Exponential Height Fog）组件控制整个场景的雾。 局部控制功能使你能够通过在可以生成粒子的区域中使用粒子系统的方式控制雾。

要控制体积雾，你可以调整指数高度雾（Exponential Height Fog）中的属性和每个光源上的属性，以控制光源的贡献量。

指数高度雾的体积雾功能按钮位于组件的体积雾（Volumetric Fog）部分下。指数高度 Distribution 规定体积雾的全局密度。


虚幻引擎 4 天空大气 `SkyAtmosphere` 组件是一种基于物理的天空和大气渲染技术。它相当灵活，可以创造类似地球的大气层，同时提供包括日出和日落的一天时间，还可以创造奇特的外星大气层。它还提供空气透视，从中可利用相关行星曲率来模拟从地面到天空再到外太空的过渡。

天空大气提供一种光经过行星大气层中的参与介质发生的散射的近似散射，因而为户外关卡提供更逼真或更奇特的外观，包括以下内容：

- 可有两个大气定向光源接收日轮在大气中的表现，其中天空颜色取决于太阳光和大气属性。
- 天空颜色将随着太阳高度而变化，即随主要定向光源的矢量与地面平行程度而变化。
- 控制散射和模糊设置，从而完全控制大气密度。
- 从地面到天空再到太空过渡时，空气透视可模拟场景的曲率。

利用关卡编辑器中的模式（Modes）面板执行以下步骤以启用天空大气组件：

- 在场景中放置天空大气组件。
- 在场景中放置定向光源，然后从其面板启用大气/雾太阳光 Details -》 Atmosphere/Fog Sun Light。
- 若使用多个定向光源，则为每个定向光源设置（Atmosphere Sun Light Index），例如，0表示太阳，1代表月亮。
- 在场景中放置天空光照 `SkyLight` 以采集天空大气并让它为场景光照做贡献。

需要调整大气定向光源时，先要为定向光源上启用（*Atmosphere/Fog Sun Light*） 并为每个定向光源设置（*Atmosphere Sun Light Index*）。

可利用以下快捷方式快速调整每个定向光源的位置：

- 使用 Ctrl + L 并移动鼠标将调整已设为指数0的定向光源。它通常是太阳。
- 使用 Ctrl + L + Shift 并移动鼠标将调整已设为指数 1 的定向光源，它通常是月亮。


大气雾（`Atmospheric Fog`） 提供一种透过行星大气的光散射的近似现象。这可以让室外关卡看起来更加逼真得多。

整体效果包括以下方面：

- 关卡中的主定向光源将在天空中获得日轮效果。日轮将被放置在无限远的位置，方向与主定向光源方向相反。
- 天空颜色将随着太阳的高度而变化（换言之，即随着主定向光源的矢量与地面平行的程度而变化）
- 控制散射和衰减设置，从而能够完全控制大气密度。


# 🌟 GPU Rendering
- GPU 图形渲染编程 https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Rendering/
- 特效示例 https://docs.unrealengine.com/4.27/zh-CN/Resources/ContentExamples/EffectsGallery/

针对图形程序员的渲染系统使用和着色器编写信息。


# 🌟 Rendering & Graphics 设计视觉、渲染和图形效果
- https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics

## ⚡ Global Illumination 全局光照
- Global Illumination 全局光照 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/GlobalIllumination/
- 后期处理特效 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/PostProcessEffects/

全局光照（也称间接照明和间接光照）模拟与几何体和材质表面的照明交互，为场景和项目添加真实的照明效果。此模拟还考虑到与之相互作用的材质的光线吸收性和反射性。

有两种方法可以在 3D 世界中模拟光的活动：一是使用实时光照法，这种方法支持动态光源的光源移动和交互；二是使用预计算（或已烘焙）的光照信息，这类信息存储在几何体表面应用的纹理中。虚幻引擎提供这两种场景照明方法，它们彼此互不排斥，可以无缝地混合使用。

预计算或烘焙法用途和功能：

- 非常适合无需变更光照的场景。
- 性能成本与加载和存储光照贴图纹理所需的内存有关。
- 结果的质量和精确度是由被烘焙和应用到几何体的光照贴图纹理的纹理分辨率所决定的。
- 默认支持静态网格体和 BSP 几何体。
- 静态网格体需要设置光照贴图UV来存储光照数据。
- 可与动态光照结合使用。

实时光照法用途和功能：

- 非常适合需要变更光照的场景，如开灯或关灯，或昼夜变换系统。
- 大型的开放世界环境对烘焙光照提出了不切实际的要求（即使没有昼夜变换系统）。烘焙时间、内存使用率、纹理存储和播放都是使用动态 GI 时需要考量的重要因素。
- 实时计算的性能成本可能要昂贵得多，具体取决于所使用的方法。
- 经常需要在质量和精确度以及性能之间寻找平衡。一些动态GI方法受实时使用情况的限制。
- 默认支持所有几何体类型。
- 可与预计算的光照结合使用。

虚幻引擎中的动态光照方法提供了实时全局光照解决方案，可以用动态光源的反射光照为场景提供照明。你可以使用这些解决方案更改光照并自动更新到场景中的对象，使它能够模拟昼夜变换过渡或一些简单的事情，如在在室内开关灯。这些光照系统是实时计算的，因此几乎不需要设置便可工作。

虚幻引擎的光线追踪功能包括动态全局光照方法，利用微软的 DXR 框架和 NVIDIA 的光线追踪 GPU 来渲染非常准确的光照结果。

支持两种光线追踪全局光照(RTGI)方法：

- Brute Force 方法模拟路径追踪器的地面真实参考状况，并且在实时渲染时的执行过程中最相似。此方法最消耗帧性能，同时也提供最精确的动态全局光照方法。
- Final Gather 方法使用两次扫描算法，采用分布式着色点和每像素固定数量样本，用精确度换取性能。对于需要实时性能的项目，Brute Force 方法在精确度上的权衡意味着你的帧预算可以支持动态全局光照。

而虚幻引擎中的光照烘焙系统提供了两种方式使用 Lightmass 计算光照数据：

- 基于 CPU 的 Lightmass 系统
- 基于 GPU 的 Lightmass 系统

预计算的光照用于获得高质量结果，不受实时限制因素的影响。然而，由于光照是在几何体应用的纹理中生成和存储的，无法动态地改变。

基于 CPU 的 Lightmass 系统使用名为 Unreal Swarm 的独立进程来计算和生成光照数据，这是一种分布式系统。Unreal Swarm 也用于将光照分配到构建场，在构建场中可以将复杂的关卡分解以完成构建流程。由于这是在 CPU 上处理的，所以在生成最终的光照贴图结果时，构建可以分配到的可用线程或机器的数量变得极为重要。对于一台机器来说，复杂的场景可能需要大量的处理时间、功率和 RAM 来完成。

基于 GPU 的 Lightmass (GPULM)是一种光照烘焙解决方案，它可以预计算移动性设置为静止（Stationary）或静态（Static）的光源的复杂光线交互，并将这些数据保存在生成的光照贴图纹理中，这些纹理又转而应用到场景几何体。这个将光照烘焙到纹理中的系统类似于 CPU Lightmass 全局光照系统。然而，使用 GPU 来生成和构建光照数据意味着我们可以利用 DirectX 12 和微软 DXR 框架的最新光线追踪功能。

它使用单个编辑器内进程来完成光照构建，不支持使用 Unreal Swarm 的分布式构建，但它通过 SLI 支持多个 GPU。

GPULM 大大减少了计算、构建和生成复杂场景光照数据所需的时间，其速度可与基于 CPU Lightmass 使用 Swarm 进行分布式构建时的速度相媲美。此外，GPULM 提供具有交互性的新工作流，可以实时编辑场景、重新计算和重新构建光照。基于 CPU 的 Lightmass 系统无法使用此工作流。

工程设置：

- Rendering -> Global Illumination 设置全局照明方式
- Rendering -> Lumen -> Software Ray Tracing Mode 设置为 Global Tracing，这种方式比细节跟踪方式更快速，精确度较较低。

Lumen 光照一个小缺陷：当物体不入镜头时不进行计算以提高效率，不会对其它物体产生相应的影响，即使用原本应该影响到的近距离物体。


## ⚡ Lightmass Importance Volume
- Lightmass Importance Volume https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Lightmass/Basics/

要将一个全局光照重要体积添加到某个关卡中，将 Place Actors -> Volume -> Lightmass Importance Volume 对象拖动到关卡中，然后将其缩放到所需的大小。

还可以将选中的 Actor 进行转换，Details -> Convert Actor，将画笔转换为全局光照重要体积。

如果你放置多个全局光照重要体积，那么大多数照明工作将通过包含所有这些体积的边界框来完成。但是，体积照明样本仅放置在较小的体块中。

点击工具条上的 Build -> Build Lighting，然后等待渲染结果。

以下这些预置模式是时间花费和获得画质之间的平衡：

- 产品级 Production - 渲染较慢，效果看上去非常棒，并且可以校正各种光照渗透错误，需要花费一些时间
- 高级 High - 看上去很好，需要一些时间
- 中级 Medium - 看上去较好，需要稍微长一点的时间进行计算
- 预览级 Preview - 将会快速地进行渲染，并提供大部分直接光照烘培后的一般效果，只是可以接受，但渲染速度很快

这些仅是预置，还有很多设置可以调整，以便在您的游戏中获得满意的光照，请参照 Lightmass 文档获得关于如何调整 Lightmass 设置的更多信息。

## ⚡ Post Process Effects 后期处理
- 后期处理特效 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/PostProcessEffects/

虚幻引擎提供后期处理效果，允许美术师和设计师调整场景的整体外观和感觉。元素和效果的示例包括泛光（明亮对象上的HDR泛光效果）、环境遮挡和色调映射。

从虚幻引擎 4.15 版起，默认情况下启用电影色调映射器，与学院颜色编码系统 Academy Color Encoding System (ACES) 设置的标准相匹配。 这使得 UE4 中的色调映射器可以轻松地面向多种显示类型，包括高动态范围 HDR 显示。向 ACES 标准的转变确保了在多种格式和显示之间保持一致的颜色， 同时也作为一种方式来前瞻性地适应所使用的源，而无需针对其他介质对其进行调整。

- 电影色调映射器提供以下额外的好处：
- 对于电视和电影，符合ACES标准。
- 额外的颜色分级和白平衡控制。
- 现在，自发光颜色在物理上以一种更正确的方式泛光。

后期处理体积（Post Process Volume） 是可以添加到关卡的一种特殊类型的体积，由于虚幻引擎4不使用后期处理链，因此目前这些体积是操作后期处理参数的唯一方法。新系统还不完整，我们将公开一些可编程性，但是我们希望系统能够很好地处理常见的情况。这会使得美术师/设计师更容易使用该系统，程序员也更容易对它进行优化。

在虚幻引擎4中，每个后期处理体积本质上只是一种混合层类型。其他混合层可能来自游戏代码（例如碰撞效果）、UI代码（例如暂停菜单）、摄像机（例如晕映）或Matinee（老电影效果）。每一层可以有一个权重，所以它会很容易混合效果。

混合总是使用插值（线性插值）来完成，而且只有已启用的体积进行混合。除非选中了 解除绑定（Unbound） 属性，否则只有当摄像机在后期处理体积的边界内时才会应用该体积。

后期处理体积的属性：

- Settings 体积的后期处理设置。大多数属性前面的复选框定义体积中的行是否使用体积的 混合权重（Blend Weight） 进行混合。
- Priority 优先级定义多个体积混合在一起的顺序。具有最高优先级的体积优先于所有其他重叠体积。
- Blend Radius 混合半径，在体积周围与体积的设置发生混合处的距离，以虚幻单位计量。
- Blend Weight 混合权重，体积的属性具有的影响量。0 表示无效果；1 表示全效果。
- Enabled 已启用，体积是否影响后期处理。如果为 true，将使用体积的设置进行混合。
- Unbound 解除绑定，是否考虑体积的边界。如果为 true，体积将影响整个场景，而无论其边界如何。如果 false，体积将只影响其边界以内。

### ✒ Post Process Materials 后期处理材质
- Post Processing Content Examples https://docs.unrealengine.com/4.27/en-US/Resources/ContentExamples/PostProcessing/
- 后期处理材质示例(视频扫描线) https://docs.unrealengine.com/4.26/zh-CN/RenderingAndGraphics/PostProcessEffects/PostProcessMaterials/PostProcessDemoMaterialOverview/
- 剖析虚幻渲染体系（07）- 后处理 https://www.likecs.com/show-137340.html

使用以下控制台命令可以切换后期效果是否启用，以查看相应效果：

    ShowFlag.PostProcessing 0
    ShowFlag.PostProcessing 1

通过后期处理设置（通常用后期处理体积或摄像机设置定义），可以混合（所谓的）可混合资源。 目前，只有 材质（Materials） 和 材质实例（Material Instances） 是可混合资源。该引擎提供了一些后期处理材质，但有了这个特性， 您可以创建自己的 自定义后期处理，无需任何程序员的帮助。

只需将一个或多个后期处理材质分配到 可混合（Blendables） 部分的后期处理体积中。首先按 + 添加新槽， 在 内容浏览器（Content Browser） 中选择一个材质，然后按左箭头进行分配。这里的顺序并不重要，未使用的插槽将被忽略。

后期处理材质需要指定材质域为 Post Process，并且，后期处理材质只能使用自发光颜色（Emissive Color）输出新颜色。此外，可以定义在后期处理过程中应在何处应用此通道(Blendable Location)，如果有多个通道，则应按什么顺序处理（Blendable Priority）。

引擎已经具有基于后期处理节点图表的复杂后期处理功能。后期处理材质（Post Processing Materials） 可以额外插入到某些特定位置。有关 r.CompositionGraphDebug，请参阅常见问题部分，获取完整图表的转储。 这张图表实际上不仅在做后期处理，还在做部分照明事宜。

大多数时候，图表会自动创建中间渲染目标。这意味着，如果您想与前一种颜色混合，您需要在着色器中进行混合 （使用来自 *PostProcessInput0* 的输入）。

后期处理材质应该节约使用，仅在真正需要时使用。在可能的情况下，如颜色校正或调整、泛光、景深和各种其他效果，您应该使用后期处理体积中固有的设置，这些设置已经过优化，而且更有效。

后期处理材质可混合位置：

- 色调映射前（Before Tonemapping）*PostProcessInput0* 为 HDR 中的所有照明提供场景颜色。用它来修复时间抗锯齿和 GBuffer 查找的问题，如深度，法线。
- 色调映射后（After Tonemapping）首选性能位置，因为颜色是 LDR，因此需要的精度和带宽较少。这是在色调映射和颜色分级之后。
- 半透明前（Before Translucency）这在通道中甚至比半透明与场景颜色结合之前的"色调映射前"还要早。注意 SeparateTranslucency 的混合比法线透明度要晚。
- 替换色调映射器（Replacing the Tonemapper）*PostProcessInput0* 为 HDR 提供场景颜色，*PostProcessInput1* 具有 SeparateTranslucency（Alpha是遮罩），*PostProcessInput2* 具有低分辨率泛光输入。

典型的后期处理输入来自以前的通道。当使用 *PostProcessInput0* 时，可以通过 SceneTexture 材质表达式访问该颜色。使用 SceneColor 可能不会得到正确的结果。

默认的混合阶段是在色调映射之后（After Tonemapping），但是，我们可以改变混合位置来实现不同的效果。比如，我们的后处理效果需要用到色调映射之前的场景颜色，那么就需要将混合位置改成 Before Tonemapping；如果需要自定义色调映射算法，以代替 UE 的默认色调映射效果，那么可以改成 Replacing the Tonemapper；如果我们的后处理效果不希望影响透明物体，则可以改成Before Translucency；如果想实现自定义的 SSR 算法，则可以改成 SSR Input。

以下示范屏幕扫描线的后期效果，使用 UE 4.26。

- 在内容浏览器中的 Add New -> Material 创建新材质对象，并命名，如 M-PostProcess。
- 双击打开此材质编辑器，设置 Material -> Material Domain 属性设为后期处理（Post Process）。
- 并且，将着色模型（Shading Model）设为无光照（Unlit），因为不需要光源的影响。
- 设置 Post Process Material -> Blendable Location 属性设为色调映射前混合（Before Tonemapping）。这会对性能产生影响，但可防止视图运动时出现重影。

现在即可创建一些材质表现网络，定义后期处理的效果。

- 扰乱场景颜色（Scene Color）的 UV。
    - 首先，添加场景纹理（Scene Texture）表达式开始，Details 属性面板中，选择纹理为场景颜色（Scene Color），以通过后期处理对场景进行设置。
    - 使用简单的平移纹理 (ScanDistort.png) 扰乱场景颜色（Scene Color）的 UV。只需要将纹理 RGB 乘以 0.03。
    - 然后使用 Mask 提取 R 和 G 通道组合，并与 TextureCoordinate 纹理坐标相加，在屏幕上有效地滑动像素建出扭曲效果。
- 使用 4x4 像素扫描线纹理低频移动，两个方向需要分别设置不同的频率。
    - 第一个使用 4x4 像素扫描线纹理，设置在垂直方向大量平铺 (VTiling:128)，然后很慢地向下平移(Speed Y:-0.1)。
    - 第二个使用相同的扫描线纹理，平铺值设为 1.28，向上平移，速度稍快。并将其锁定在 0.1 到 0.5 之间。可在扫描线中形成一些变化。
- 创建一个时间驱动的正弦波，使扫描线出现闪烁。
    - 创建一个时间驱动的正弦波，在 0.6 到 1.0 之间以 10 Hz 的频率运行。节点表达式为 Sine(Time * 10) * 0.1 + 0.3。
- 现在创建线性插值节点来整合前面创建的部分功能网络：
    - 使用 Multiple 合并前面制作好的 4x4 像素扫描线纹理，并与 Scene Color 的 RGB 相乘。使用 ComponentMask 可以分离得到 RGB 通道。
    - 将 Mask(RGB) 和乘积输入 Lerp 的 A 和 B 进行插值，Alpha 接入正统波以控制插值的变化。
- 制作两个 Noise 纹理。
    - 取 Noise.PNG 纹理，也可以使用 Perlin 随机噪声纹理替代，以两种不同的量和速度执行平铺和平移，获得不同效果。
    - 取两个 noise 的平均值，然后与 ScanDistort 纹理相乘。将结果乘以 40，然后添加到结果中，创建白色静态画面。
    - 选取平移 ScanDistort 纹理，将其提升为 4 的幂次方（提升对比度），乘以 40 使其更明亮，然后从最后结果中将其减去，使其变为全黑色。可创建出复古 VCR 中常见的黑条效果。


现在需要将材质和后期处理体积关联起来，向场景添加 Post Process Volume，保持在世界大纲视图选中状态。

- 设置细节 Details -> Misc 类目下的 Blendables 属性，点击属性旁的 + 按钮添加一个新元素。(Render Features -> Post Process Materials)
- 在 Content Browser 中选择新材质，然后点击应用按钮将材质应用到元素。

现在，设置后期处理体积对象：

- Post Process Volume Settings -> Weight 设置一个小于 0.5 的值，太高会导致光强度累积过快导致全白画面。
- Film -> Saturation 设置值接近于 0，降低色彩饱和度。
- Film -> Tint 设置一个淡绿色，以在结果上投射出淡绿色。
- Film -> Contrast 对比度设为 0.65 左右。
- Film -> Crush Shadows 和 Crush Highlights 再调整以进一步增加对比度。
- Lens -> Image Effects -> Vignette Intensity 设为 0.9 左右，形成极强的晕映。
- Lens -> Bloom 辉光强度设为 3.0 左右。

UE5 后期处理材质 SceneTextureId 不能使用 SceneColor：

```C++
// UE_5.0EA\Engine\Source\Runtime\Engine\Private\Materials\HLSLMaterialTranslator.cpp
void FHLSLMaterialTranslator::UseSceneTextureId(ESceneTextureId SceneTextureId, bool bTextureLookup)
    ...
    if(SceneTextureId == PPI_SceneColor && Material->GetMaterialDomain() != MD_Surface)
    {
        if(Material->GetMaterialDomain() == MD_PostProcess)
        {
            Errorf(TEXT("SceneColor lookups are only available when MaterialDomain = Surface. PostProcessMaterials should use the SceneTexture PostProcessInput0."));
        }
        else
        {
            Errorf(TEXT("SceneColor lookups are only available when MaterialDomain = Surface."));
        }
    }
    ...
```

场景纹理应改为 PostProcessInput，而不是文档所指的 SceneColor。但是，在多数后处理通道中，PostProcessInput0 ~ PostProcessInput6 是空纹理。

新建 PostProcessVolume，而且指向它自身区域内才有效果，不需要勾选 Unbound，当且仅当玩家进入该区域时，才能看到 PostProcess 特效。

并且，PostProcessVolume 不再提供 Blendables 设置。通过 Render Features -> Post Process Materials 设置，只要将实现了 IBlendableInterface 接口的材质添加到这个数组即可。

新版本中，材质依然可以指定为 Blendable 材质，Post Process Material -> Is Blendable。

另外，官方文档的两个 Noise 输出连接有错，RGB 和 RGBA 不能连接到 Add 节点上，因为通道数量不同，应该统一使用 RGB。


## ⚡ RayTracing 实时光线追踪
- RayTracing 实时光线追踪 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/RayTracing/

电影、电视和可视化领域长期使用光线追踪技术渲染照片般逼真的影像，但这种技术需要功能强大的计算机，而且渲染每一帧图像都很花时间。

通过将虚幻引擎4（UE4）的技术与 实时光线追踪（RTRT）相结合，就可以创作出在细微光照效果上能够与许多脱机渲染器相媲美的交互式体验。实时光线追踪可以让影像看起来更自然，制作出面积光源下的柔和阴影、准确的环境光遮蔽、交互式的全局光照等效果。

UE4 中的光线追踪包含两种技术：

- 混合的 Ray Tracer，将光线追踪功能与我们现有的光栅效果相结合。
- Path Tracer，用于生成参考渲染器。

Ray Tracer 能够针对阴影、环境光遮蔽（AO）、反射、半透明和全局光照生成带有光线追踪的实时效果。它使用数量不多的采样配合降噪算法来实现这一点，可以得到在视觉上得到与 Path Tracer 极为近似的效果。通过设置后期处理体积、Actor、光源、材质的相关属性来影响光线追踪功能。

Path Tracer 是一款基于物理的无偏性路径追踪器，很适合渲染场景的参考图像。它与脱机渲染器类似，通过连续收集采样来工作，以它目前的状态更适合用于生成场景的真相渲染，而不是最终像素。

启用光线追踪支持，需要 GeForce RTX GPUs，虚幻引擎 4.22+ 版本。

为你的项目启用 DX12 和光线追踪：Edit -> Project Settings -> Platforms -> Windows -> Default RHI -> DX12，以及 Engine -> Rendering -> Ray Tracing。

要启用光线追踪，必须为项目启用支持计算皮肤缓存（Support Compute Skincache）。如果询问你是否要立即启用，请单击（Yes）。

使用路径追踪器：Viewport -> View Modes -> Path Tracing。设置 Post Process Volume 渲染功能 Rendering Features -> Path Tracing，可以设置光线应该行进的最大反射次数（Max Bounces） 和应该用于收敛的逐像素采样（Samples Per Pixel）。 

## ⚡ Visibility Culling 可视性和遮挡剔除
- 可视性和遮挡剔除 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/VisibilityCulling/VisibilityCullingReference/
- Precomputed Visibility Volume https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/VisibilityCulling/PrecomputedVisibilityVolume/
- Cull Distance Volume https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/VisibilityCulling/CullDistanceVolume

项目设置包含会影响项目整体的剔除设置，例如对硬件遮挡查询的支持、应剔除照明的屏幕尺寸等等。

可视性和遮挡剔除方式：

- Precomputed Visibility Volume 预计算可视性体积，通过离线剔除方法来动态剔除关卡中的对象。
- Cull Distance Volume 可根据对象距摄像机的距离及其尺寸，对对象进行剔除（即不绘制到屏幕上）。

打开项目设置 Project Settings -> Rendering -> Culling 部分来查看这些设置：

- Occlusion Culling 允许遮挡查询方法（如硬件、软件和循环遮挡查询）来剔除 Actor。该设置不禁用基于距离的剔除方法，如剔除距离或预计算可视性体积。禁用遮挡剔除可能会对项目和关卡产生明显的性能影响，具体取决于被渲染的 Actor 数量。
- Min Screen Radius for Lights 设置应从视图剔除照明的最小屏幕半径。值越大，越能更快速剔除照明来提高性能。但是，如果不渲染大型遮挡物，值过大可能会导致性能下降。
- Min Screen Radius for Early Z Pass 设置对象将被早期 Z 通道遮挡的最小屏幕半径。值越大，越能更快速剔除对象来提高性能。但是，如果不渲染大型遮挡物，值过大可能会导致性能下降。
- Min Screen Radius for Cascaded Shadow Maps 设置要针对级联阴影贴图深度通道遮挡对象的最小屏幕半径。较大的值可以改善性能。但是，它们可能会瑕疵，因为在靠近摄像机时对象会停止投射阴影。
- Warn about no precomputed visibility 当前摄像机位置没有可用的预计算可视性数据时启用警告。如果项目依赖于预计算可视性进行遮挡，这可能是十分有用的提醒。

关卡或蓝图中的所选 Actor 包含可通过其 Details 面板访问的距离设置。它们支持设置按实例距离，或者是否使用剔除距离体积来剔除 Actor。

在 World Settings -> Precomputed Visibility 访问用来更改预计算可视性生成方式的设置：

- Precomputed Visibility 是否在预计算可视性体积内以及沿着该关卡的摄像机轨道放置可视性单元格。预计算可视性能够缩短渲染线程时间，但代价是占用运行时内存和延长照明构建时间。
- Place Cells Only Along Camera Tracks 启用时，仅沿着摄像机轨道放置可视性单元格。
- Visibility Cells 用 x 和 y 表示的预计算可视性单元格的场景空间大小。大小越小，遮挡剔除效率越高，代价是运行时内存占用量和照明构建时间都会增加。
- Visibility Aggressiveness 设置可视性强度越大，剔除的对象越多，但也会导致更多的可视性错误，例如弹出。


预计算可视性覆盖体积 Precomputed Visibility Override Volumes 使你能够覆盖现有预计算可视性体积内的 Actor 和关卡的可视性控制。

- Override Visible Actors 从该体积内部查看时，预计算可视性始终视为可见的Actor数组。
- Override Invisible Actors 从该体积内部查看时，预计算可视性始终视为不可见的Actor数组。
- Override Invisible Levels 从该体积内部查看时，预计算可视性始终视为不可见的Actor所属的关卡名称数组。


像其他剔除方法一样，预计算可视性体积 用于实现中小型场景的性能优化，通常用于因为硬件问题而使动态遮挡剔除受到限制的移动平台。预计算可视性体积根据玩家或摄像机的位置，将 Actor 位置的可视性状态存储在场景中。因此，预计算可视性对于主要为静态点亮的环境的项目、玩家运动受限和某些2D游戏区域最有用。

在照明构建期间，会在阴影投射几何体上方生成可视性单元格。Actor 可视性从每个单元格位置存储。由于预计算可视性是在线下生成的，因此你省去的是通常用于硬件遮挡查询的渲染线程时间，但代价是会增加运行时内存和照明构建时间。基于这一点，建议仅在玩家或摄像机可访问区域放置体积来保持可视性剔除。 

预计算可视性具有以下限制：

- 不处理可移动Actor。
- 不处理透光材质，如半透明或遮罩材质。
- 单元格仅放置在表面上方。对启用飞行模式的项目益处不大。
- 不能有效处理流送关卡。所有数据存储在持久关卡。
- 只有静态阴影投射三角形会发生遮挡。

为关卡启用预计算可视性：World Settings -> Precomputed Visibility -> Precomputed Visibility 勾选旁边的复选框。

在预计算可视性发挥作用前，需要先构建照明，并在关卡视口启用预计算可视性单元格：Viewport -> Show -> Advanced -> Precomputed Visibility。

为关卡构建至少一次照明信息后，可以放置任意数量的预计算可视性体积，然后生成可视性单元格来填充任何静态阴影投射 Actor 的表面。如果你已经构建了照明，可以使用主工具栏中的 Build -> Precompute Static Visibility 来生成静态可视性单元格，而不必每次重新构建照明。

# 🌟 Materials
- 材质 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/
- 维度：数学漫步 Dimensions: a walk through mathematics https://www.bilibili.com/video/BV1zg41177Dk?p=5

材质 是可以应用到网格物体上的资源，用它可控制场景的可视外观。从较高的层面上来说，可能最简单的方法就是把材质视为应用到一个物体的"描画"。但这种说法也会产生一点点误导，因为材质实际上定义了组成该物体所用的表面类型。您可以定义它的颜色、它的光泽度及您是否能看穿该物体等等。

用更为专业的术语来说，当穿过场景的光照接触到表面后，材质被用来计算该光照如何与该表面进行互动。这些计算是通过对材质的输入数据来完成的，而这些输入数据来自于一系列图像（贴图）以及数学表达式，以及材质本身所继承的不同属性设置。

材质是让您的对象和关卡具有您想要的外观的关键因素之一。

关于材质，您需要知道的第一件也是最重要的事情就是，它们并非通过代码，而是通过材质编辑器中的可视化脚本节点（称为材质表达式）所组成的网络来构建。每一个节点都包含 HLSL 代码 片段，并用于执行特定的任务。这意味着当您构建材质时，您是在通过可视化脚本编程来创建 HLSL 代码。

关于材质，您需要知道的第一件也是最重要的事情就是，它们并非通过代码，而是通过材质编辑器中的可视化脚本节点（称为材质表达式）所组成的网络来构建。每一个节点都包含 HLSL 代码 片段，并用于执行特定的任务。这意味着当您构建材质时，您是在通过可视化脚本编程来创建 HLSL 代码。

材质使用 RGBA 浮点值来储存颜色信息，意味着每个通道的值范围都是 0.0 到 1.0，而不像是某些图像编辑应用程序那样使用 0 到 255。需要注意的是，您在任何时候都可以使用超过此范围的值，这在某些情况下会产生特殊的行为。例如，将颜色发送到材质的"自发光"（Emissive）输入时（这将使材质发光），大于 1.0 的值会增加发光强度。

执行单通道操作的节点一般需要具有相同通道数目的输入，否则会产生错误，并导致材质无法编译。例如，可以将一个 RGB 颜色与另一个 RGB 颜色相 加（Add）。此规则有一个例外情况，即，其中一个输入是单通道（标量）值。在这种情况下，该标量的值将直接应用于所有其他通道。比如，将 RGB (0.35, 0.28, 0.77) 与标量值 1.0 相加，得到 RGB (1.35, 1.28, 1.77)。

对于材质，纹理 `Texture` 只是用于提供某种基于像素的数据的图像。这些数据可能是对象的颜色、光泽度、透明度以及各种其他方面。有一种过时的想法，认为"添加纹理"是给游戏模型上色的过程。虽然创建纹理的过程仍然很关键，但我们应该将纹理看作材质的"元件"，而不是将它们本身视为最终成品，这一点很重要。

一个单一材质有可能用到几个不同的纹理贴图作为不同的目的效果。比如，一个简单的材质可能会有一个基础颜色`Base Color`的纹理贴图，一个高光`Specular`，一个法线贴图`Normal Map`。除此以外，还有可能有保存在透明通道中的自发光`Emisive Color`贴图以及粗造度贴图`Roughness`。

可以发现，虽然这些可能都同时存在于一个贴图的布局中，但纹理贴图中的不同的颜色被用于不同的目的。

纹理一旦创建并导入虚幻引擎，就会通过特殊的材质表达式节点引入到材质中，例如纹理取样（`Texture Sample`）节点。

对网格网格体（静态、动态或骨骼）应用材质有许多种不同方法。可以直接使用网格属性中的材质元素槽。在关卡中选中网格时，您可以在 细节（Details）面板中找到这些槽，也可以通过右键单击网格并从快捷菜单（Properties）找到这些槽。也可以在各种编辑器（例如静态网格编辑器或者人物骨骼网格编辑器）中找到这些槽。

将材质应用于 Brush 表面：

- 在内容浏览器中选中一个材质。
- 单击要将该材质指派到的 Brush 表面。
- 在 Details 面板中，单击向右箭头按钮就会将该材质应用于刷表面。

代码视图面板显示了由当前材质生成的高级着色器语言（High Level Shader Language） （HLSL）代码。注意这并非编辑器；使用者无法修改 HLSL 代码。这只是一个查看器，允许使用者显示由材质网络定义的代码。

代码视图面板默认不可见，通过 Window -> Shader Code -> HLSL Code 显示代码视图面板。

着色器代码菜单下，可以切换显示所选平台的材质 HLSL 代码：

- Desktop - 切换显示各种桌面渲染的 HLSL 代码。
    - DirectX SM5 - 切换显示 Windows SM5 的 HLSL 代码。
    - DirectX SM4 - 切换显示 Windows SM4 的 HLSL 代码。
    - Vulkan SM5 - 切换显示 Vulkan SM5 的 HLSL 代码。
    - Vulkan SM4 - 切换显示 Vulkan SM4 的 HLSL 代码。
    - OpenGL SM5 - 切换显示 OpenGL SM5 的 HLSL 代码。
    - OpenGL SM4 - 切换显示 OpenGL SM4 的 HLSL 代码。
- Android - 切换显示各种 Android 渲染的 HLSL 代码。
    - Android GLES 3.1 - 切换显示 Android GLES 3.1 的 HLSL 代码。
    - Android GLES 2.0 - 切换显示 Android GLES 2.0 的 HLSL 代码。
    - Android Vulkan - 切换显示 Android Vulkan 的 HLSL 代码。
- iOS - 切换显示各种 iOS 渲染的 HLSL 代码。
    - Metal SM5 - 切换显示 Metal SM5 的 HLSL 代码。


### ✒ Materials 材质基础
- UE4 材质入门 https://www.bilibili.com/video/BV1GJ411j7d4?p=10
- 材质输入 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/MaterialInputs/
- 材质混合模式 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/
- 着色模型 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/MaterialProperties/LightingModels/
- 材质表达式参考 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/ExpressionReference/
- 材质函数参考 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/Functions/
- Landscape Materials https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/Landscape/Materials/
- Mesh Paint & VertexColor https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LevelEditor/Modes/MeshPaintMode/VertexColor
- Render Targets https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/RenderTargets/BlueprintRenderTargets/
- 后期处理材质 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/PostProcessEffects/PostProcessMaterials/

以下是材质编辑器中主材质（Main Material）的输入端口，但并不是所有材质输入都对你创建的每种类型材质都有用：

- 底色（`Base Color`） 定义材质的整体颜色。它接收 Vector3 (RGB) 值，并且每个通道都自动限制在 0 与 1 之间。
- 金属色（`Metallic`）输入控制表面在多大程度上"像金属"。非金属的金属色（Metallic）值为 0， 金属的金属色（Metallic）值为 1。对于纯表面，例如纯金属、纯石头、 纯塑料等等，此值将是 0 或 1，而不是任何介于它们之间的值。创建受腐蚀、落满灰尘或生锈金属之类的混合表面时， 您可能会发现需要 介于 0 与 1 之间的值。
- 非金属表面材质使用`Specular`高光输入调整它反射光线的能力。 要更新材质的高光度，需输入介于 0（无反射）和 1（全反射）之间的标量数值，默认高光值为 0.5。
- 粗糙度（`Roughness`）输入控制材质表面的粗糙或平滑程度。与平滑的材质相比，粗糙的材质将向更多方向散射所反射的光线。 这决定了反射的模糊或清晰度（或者镜面反射高光的广度或密集度）。 粗糙度 0（平滑）是镜面反射，而粗糙度 1（粗糙）是漫射（或无光）表面。
- 可以利用 各向异性（`Anisotropy`） 和 切线（`Tangent`） 输入控制材质粗糙度的各向异性和光源方向性。如果材质要展现类似拉丝金属的各向异性效果，这两项输入至关重要。
- 由于材质在发光，所以自发光颜色（`Emissive Color`） 输入将控制材质的哪些部分会发光。理想情况下这将获得一个遮罩纹理（除了需要发光的区域之外，大部分呈黑色）。
- 使用半透明混合模式时，会用到不透明度（`Opacity`），通常适用于半透明（Translucent）、添加（Additive）和调制（Modulated）材质。可以输入 0 完全透明，与 1 完全不透明，或之间的值。
- 不透明遮罩（`Opacity Mask`） 类似于不透明度（Opacity），但仅在使用遮罩（Masked）混合模式时可用。与不透明度（Opacity）一样，它的值在0.0到1.0之间，但与不透明度（Opacity） 不同 的是，结果中看不到不同深浅的灰色。 在遮罩模式下时，材质要么完全可见，要么完全不可见。当你需要可以定义复杂实心表面（如铁丝网、链环围栏等等）的材质时，它将成为一种理想的解决方案。不透明部分仍将遵循光照。你可以使用基础材质节点上的 不透明度遮罩剪切值（`Opacity Mask Clip Value`） 属性来控制剪切发生点。
- 法线（`Normal`） 输入接收法线贴图，后者将打乱每个单独像素的法线或朝向方向，为表面提供重要的物理细节。法线是计算光线的重要参数，入射角与法线的角度等反射角，折射角则还与材料的折射率相关。
- 世界位置偏移（`World Position Offset`） 输入允许网格体的顶点在世界空间中由材质操纵。这有助于实现使对象移动、改变形状、旋转和各种其他效果。这适用于环境动画之类的内容。
- 世界位移（`World Displacement`） 的工作方式与世界位置偏移非常相似，但它使用曲面细分顶点，而非网格体的基础顶点。材质上的曲面细分（Tessellation）属性必须设为（None）以外的值。
- 曲面细分乘数（`Tessellation Multiplier`）控制沿表面的曲面细分量，能够在需要的地方添加更多细节。材质上的曲面细分（Tessellation）属性必须设为（None）以外的值。
- 次表面颜色（`Subsurface Color`）在（`Subsurface`）着色模型下启用。 输入一种颜色添来模拟光通过表面，在表层深入部位产生的折射效果，例如对着太阳看人类角色的皮肤产生的红色次表面颜色，来模拟其表面之下的血液。
- 折射（`Refraction`）输入接受一个纹理或数值，其模拟表面的折射率。它适用于玻璃和水这样的物质，因为光穿过这些物质时会发生折射。
- 环境光遮蔽（`Ambient Occlusion`） 输入用来帮助模拟在表面缝隙中发生的自阴影效果。环境光遮蔽纹理贴图通常在 Maya、3ds Max 或 ZBrush 等三维建模软件或 Photoshop 这类照片编辑软件中创建。
- 透明涂层（`Clear Coat`） 着色模型可以用来更好地模拟材质表面有一层半透明薄膜的多层材质。除此之外，透明涂层着色模型也可以用于金属或非金属表面。

眼睛着色模型（Eye Shading Model）在主材质节点上增加了两种额外输入：

- 虹膜遮罩（`Iris Mask`）：这有助于控制虹膜的折射率和深度。在数字人类范例项目的材质 M_EyeRefractive 中，查看。
- 虹膜距离（`Iris Distance`）：用于控制折射虹膜的凹度。

在数字人类范例项目的材质 M_EyeRefractive 中，可以查看 IOR 和深度范围（Depth Scale），虹膜凹度比例（Iris Concavity Scale）和虹膜凹度幂（Iris Concavity Power）等参数。


布料着色模型（Cloth Shading Model）在主材质节点上开辟了两种输入：

- 绒毛颜色（`Fuzz Color`）：你可以通过此输入将颜色添加到材质，以模拟光通过表面时颜色的变化。
- 布料（`Cloth`）：可以通过此输入控制 绒毛颜色 作为遮罩的强度。值为0表示绒毛颜色对底色没有影响，值为1则表示完全混合在底色上。


毛发着色模型（*Hair Shading Model*）在主材质节点上开辟了三种输入：

- 散射（`Scatter`）：此输入控制允许穿过毛发的光线散射量。
- 切线（`Tangent`）：此输入可代替 法线（Normal） 输入，用于控制沿U和V纹理坐标的法线方向。
- 背光（`Backlit`）：此输入控制影响毛发材质的背光量。


例如，在开发光照函数（Light Function）时，你只能在材质上使用自发光颜色（Emissive Color）输入，而不能使用其他任何输入，因为其他输入，如金属感（Metallic）或粗糙度（Roughness）不适用。正因为如此，为了避免你过度担心输入，了解正在创建的材质类型非常重要。

其中三个主要的控制属性是：

- Blend Mode —— 此属性将控制你的材质如何混入它后面的像素。
- Shading Model —— 此属性定义如何计算材质表面的光源。
- Material Domain —— 此属性控制材质的使用方式，例如它作为表面的一部分、光照函数，还是后期处理材质。

幸运的是，虚幻引擎 4 不需要你猜测各种材质应使用什么输入。在材质中更改这些设置时，你会注意到可用的输入将更新，而不需要的输入将被禁用。

通过材质编辑器中的 Details -> Material 面板，可以设置两个最重要的材质参数材质混合模型 `Blend Mode` 和着色模型 `Shading Model`。

着色模型`Shading Model`可以控制材质反射入射光线的方式。或换言之，着色模型能够控制构成材质的输入数据，打造出最终外观。

无光照（`Unlit`） 着色模型仅输出颜色自发光，非常适用于特殊效果，例如火焰或照明物。默认光照（`Default Lit`） 是默认着色模型，而且很可能是最常用的模型。 此着色模型使用直接和间接光照，以及反射高光。

次表面（`Subsurface`） 着色模型能够模拟次表面散射效果。这是一种真实世界中的现象，光线会穿透表面，然后在整个物体中弥散。这种现象在冰、蜡烛、皮肤等对象上最容易出现。 次表面模型依赖于（Subsurface Color）输入。可以将其视为物体表面下物质的颜色，光线在表面散射时，就会出现这种颜色。对人类皮肤而言，深红色效果通常不错。在下面的冰元素中，深蓝绿色（根据光照进行多种计算）旨在给表面营造一种半透明深度感。

预整合皮肤（`Pre-integrated Skin`） 着色模型的性质与次表面（Subsurface）模型非常相似，适用于人类角色的低性能开销皮肤渲染。尽管在物理效果上并不完美， 但此着色模型渲染开销低于次表面（Subsurface）法，而且通常能实现不错的角色效果。

透明涂层（`Clear Coat`） 着色模型可用来更好地模拟标准材质表面有一层半透明薄膜的多层材质。此外，此着色模型可用于金属或非金属表面。此模型经专门设计，用于将这第二类光滑彩色薄膜贴在无颜色的金属上。比如丙烯酸或喷漆透明涂层，以及苏打罐和汽车漆等金属表面的彩色薄膜。

次表面轮廓着色模型（`Subsurface Profile`）的性质与次表面和预整合皮肤着色模型非常相似，但该模型只适用于高端皮肤渲染。如果希望模拟皮肤，尤其是人类皮肤，该模型为着色模型最佳选择。

双法线透明涂层着色模型（`Clear Coat`）还可以为透明涂层下的表面添加第二法线贴图。这样材质能够更精确地为复杂材质建模，例如碳纤维和车漆，这些材质的几何或反射表面与透明涂层不同。

双面植被着色模型（`Two Sided Foliage`）允许光线穿透材质表面，形成自然、统一的外观效果，比如光线穿透树叶那种效果。次表面颜色用于定义光线穿透量，同时用于为叶片茎脉等部分创建遮罩。

双面植被着色模型还有助于消除次表面散射模型中存在的问题，该模型对皮肤或较厚的表面非常有效。使用其他着色模型还会导致错误的外观结果。例如，由于默认光照没有模拟任何形式的光透射，而透射光是形成逼真的植物效果的关键，因此使用默认光照会导致底侧表面看似几乎漆黑的结果。

毛发（`Hair`）着色模型创建效果自然的毛发，模拟多种高光：一种代表光线的颜色，另一种代表毛发和光线的混合色。

布料（`Cloth`）着色模型重新创建模仿布料效果最佳的材质。其中包括布料表面的"绒毛"薄层，模拟光线与这类材质的交互和匹配。

眼睛（`Eye`）着色模型用于模拟眼睛的表面，从而对眼睛的每个生物构成部分进行艺术效果控制。这是一种技术性很高的着色模型，在着色器代码、材质、几何形状及其 UV 布局之间存在非常强的依赖性。

单层水（`Single Layer Water`） 着色模型在使用不透明（Opaque）混合模式时实现透明水面的效果。这样可以降低需要使用透明（Transparent） 混合模式的材质的使用开销和复杂性。

薄半透明（`Thin Translucent`） 着色模型支持基于物理原理的半透明材质类型，可以通过该模型创建能准确处理高光度和背景对象的真实有色或彩色玻璃。

举例而言，创建有色玻璃材质时需要白色高光和着色背景。此着色模型使用基于物理原理的着色器在单通道中渲染，着色器会负责处理光线从空气反射到玻璃、以及从玻璃反射到空气中的情况。

From材质表达式（`From Material Expression`）或逐像素着色模型（`Per-Pixel`）是一种高级功能，用于通过材质图表中的逻辑将多个着色模型合并到单个材质（或材质实例）中。

当着材质的色模型（Shading Model）设置为 From Material Expression，着色模型输入将变为可用，可以使用材质图表（Material Graph）中的 阴影模型（Shading Model）节点进行设置。


材质混合模型有几下几种：

- `Opaque` 最终颜色 = 来源颜色。这意味着材质将绘制在背景前面。这种混合模式与照明兼容。
- `Masked` 如果不透明蒙版大于不透明蒙版剪辑值（OpacityMask > OpacityMaskClipValue），则最终颜色为来源颜色，否则废弃像素。这种混合模式与照明兼容。
- `Translucent` 最终颜色 = Source color * Opacity + Dest color * (1 - Opacity)。这种混合模式与动态照明不兼容。
- `Additive` 最终颜色 = 来源颜色 + 目标颜色。这种混合模式与动态照明 不 兼容。
- `Modulate` 最终颜色 = 来源颜色 x 目标颜色。除非是贴花材质，否则这种混合模式与动态照明或雾 不 兼容。

记住*透明*与*不渲染*之间的差别十分重要，虽然它们都可能产生透明效果。透明表面（例如玻璃）仍会以反射（镜面反射）形式与光线交互。以"遮罩"（Masked）模式剔除的像素无非是不绘制，在这些区域看不到任何反射。如果您想要保留反射或镜面反射外貌，那么最好使用"半透明"（`Translucent`）混合模式，或考虑建立分层材质。

使用遮罩（`Masked`）混合模式时，您需要特别注意不透明蒙版剪辑值（Opacity Mask Clip Value） 属性。此属性包含 0-1 标量值，用于控制将不透明蒙版纹理的哪个值用作分界点，这个分界点之上所有 较暗 的值都不会进行渲染。

叠加型混合模式（`Additive`）无非获取材质的像素，并将其与背景的像素相加。这与 Photoshop 中的*Linear Dodge (Add)*线性减淡添加混合模式非常相似。这表示不会进行暗化；因为所有像素值都叠加到一起，因此黑色将直接渲染为透明。这种混合方式适合于各种特殊效果，例如火焰、蒸汽或全息图。

与半透明（Translucent）混合方式相同，这种混合方式不支持镜面反射（即，反射）。这种混合的叠加型性质可能意味着您不会以任何方式使用这种混合，但您可以使用上文中"半透明"（Translucent）小节中所示的"立方体贴图"方法来模拟类似于反射的效果。

调制（`Modulate`）混合模式无非将材质的值与背景的像素相乘。这种行为与 Photoshop 中的*正片叠底模式*混合模式非常类似。


虚幻引擎中的材质系统是一套功能强大、灵活多变的解决方案，适合在项目中开发和构建材质。该系统允许你将不同纹理分层并混合在一起，为关卡中的对象创建独特的材质。材质图层`Material Layers`类似于材质函数的分层材质工作流，你可以在材质图表中使用材质图层资产类型来组合并混合纹理。此可选工作流利用材质实例化 来简化材质分层和混合过程。

使用材质图层的好处之一是能够创建非常复杂的材质，从未来可编辑的角度看也更易于管理。虽然可以使用分层材质工作流或在传统材质（无图层和材质函数）中创建相同类型的材质，但材质图层工作流能提供更好的掌控性和灵活性，还可以减少创建材质的复杂程度。

从虚幻引擎 4.26 开始，材质图层功能将默认启用。在老版本中启用材质图层，打开项目设置 Project Settings -> Rendering -> Materials 类目，并启用 Support Material Layers。


内容浏览器提供的 Materials & Textures 选项：

- 2D Array Render Target 二维数组渲染目标，将渲染输出到二维数组；
- Canvas Render Target 画布渲染目标，将渲染输出到二维画布；
- Cube render Target 立方体渲染目标；
- Material 材质；
- Material Function 材质函数，它用于组织需要重复使用的材质节点编排；
- Material Instance 材质实例，复制自其它材质。
- Material Layer 材质图层；
- Material Layer Blend 材质图层混合；
- Material Paramerter Collection 材质参数集体；
- Media Texture 多媒体材质；
- Render Target 渲染目标；
- Runtime Virtual Texture 运行时虚拟纹理；
- Subsurface Profile 次表面轮廓着色，以渲染真实的皮肤或蜡质表面。
- Texture 2D Array 二维纹理数组；
- Volume Render Target 体积渲染目标；
- Volume Texture 体积纹理；

渲染目标（Render Target）可广泛应用于虚幻引擎 4 中的不同任务，渲染目标可用于执行各种有趣而实用的效果，如保存延迟渲染器所需的诸多缓存、在玩家投掷物体到水塘中时形成各种复杂效果（如涟漪），雪地遗迹等等。配合后期材质，将 `SceneTexture` 材质表达式添加到材质中，并在表达式属性中选择要引用的纹理。

为虚幻引擎 4 项目创建纹理时，你通常需要外部 2D 绘图程序，如 Photoshop 或 GIMP。虽然以这种方式编写内容能获得出色的结果，但有些情况下，使用蓝图和渲染目标创建这类内容非常有用。

蓝图和渲染目标配合使用，可用于创建大量不同渲染效果：

- 创建高度图绘制器。
- 创建液体表面模拟。
- 创建运行时绘制程序。
- 特定物体通过时使表面变形。

使用蓝图和渲染目标时须注意其存在的限制和约束：

- 渲染目标正在被用户指定的材质作为纹理进行采样，则无法对其进行绘制。需要使用透明度混合在原处修改渲染目标；或在两个不同渲染目标之间来回切换。
- 绘制到渲染目标时，材质只有 Emissive Color 和 Opacity 输出为有效。
- 使用渲染目标和 World Position 之类的材质表达式节点时不支持灯光，可能返回非预想的结果。
- Emissive Color 默认锁定为正，但启用材质属性 AllowNegativeEmissiveColor 即可输出负值。

渲染目标蓝图节点：

- `BeginDrawCanvasToRenderTarget` 返回一个可用于绘制到特定渲染目标的画布对象。需要配合调用 End Draw 完成渲染！
- `EndDrawCanvasToRenderTarget` 必须和一个 BeginDrawCanvasToRenderTarget 组对调用，完成到渲染目标的渲染。
- `ClearRenderTarget2D` 用给定的 Clear Color 清除特定的渲染目标。
- `CreateRenderTarget2D` 新建一个渲染目标并将其初始化到特定的有效维度。
- `DrawMaterialToRenderTarget` 将材质渲染一个四边形，即使渲染目标已设置，此节点也会对其进行设置，这是一个开销大的运算。
- `ExportRenderTarget` 将渲染目标作为 HDR 图像导出到磁盘上。

利用 UPrimitiveComponent 提供的 `CreateDynamicMaterialInstance` 方法创建动态材质，再通过 `DrawMaterialToRenderTarget` 将其绘制到 RenderTarget。


材质函数`Material Function`是材质图的一些小片段，它们可以保存在包中，并在多个材质之间重复使用。它们的用途是使您能够即时访问常用的材质节点网络，从而简化创建材质的过程。

编辑材质函数时，预览窗口将显示正在预览的节点。您可以 右键单击 任何节点并选择 开始预览节点（Start Previewing Node），以预览截至该点为止的网络的结果。

创建材质函数完成后，应该将其发布到材质函数库，以方便创建材质期间进行访问。材质函数库是材质编辑器中的一个窗口，其中包含经过分类且可过滤的可用材质函数列表。这个列表包含所有已装入的函数，不过也包含所有虽然未装入但已通过内容浏览器所使用的 内容浏览器数据库 找到的函数。

纹理处理函数参考：

- `CylindricalUVs`（圆柱形 UV）
- `DetailTexturing`（细节纹理处理）
- `LocalAlignedTexture`（局部一致纹理）
- `ZWorldSpaceFlow`（Z 全局空间流动）
- `TextureCropping`（纹理裁切）
- `WorldAlignedNormal`（全局一致法线）
- `WorldAlignedTexture`（全局一致纹理）
- `3DSandMayaUVCoordinates`（3D 沙 Maya UV 坐标）
- `CustomRotator`（定制旋转）
- `HeightLerp`（高度插值）
- `CameraWorldBlend`（摄像机全局混合）
- `LocalSpaceSurfaceMirroring`（局部空间表面镜像）
- `SubUV_Function`（子 UV_函数）
- `TwoSidedTexturing`（双面纹理处理）
- `WorldCoordinate3Way`（全局坐标三向）

在虚幻引擎 4 中，`Material Instancing` 材质实例化用来更改材质的外观，而不会引起成本高昂的材质重新编译。鉴于典型的材质在进行编辑或更改后必须执行重新编译（在游戏前 必须 执行的操作），可以建立实例化材质来进行更改，而不必执行这样的重新编译。某些类型的实例化材质甚至可以在游戏期间更改，从而对游戏中的事件作出反应（例如，树木燃烧时其材质变暗并烧焦）。这样，美工元素就可实现极大的视觉灵活性。

材质可以设置各种参数节点，创建其材质实例后，再由材质实例传入，以实现带参数地调用父材质。

材质对象可以设置以下几种公开参数：

- S `ScalarParameter` 一维参数。
- V `VectorParameter` 四维参数。
- `TextureSampleParameter2D` 接受基本的 Texture2D。
- `TextureSampleParameterCube` 接受 TextureCube或立方体贴图。
- `TextureSampleParameterFlipbook` 接受 FlipbookTexture（图像序列视图纹理）。
- `TextureSampleParameterMeshSubUV` 接受 Texture2D，后者用于具有网格发射器的子 UV 效果 。
- `TextureSampleParameterMeshSubUV` 接受 Texture2D，后者用于具有网格发射器的子 UV 混合效果。
- `TextureSampleParameterMovie` 接受 MovieTexture（电影纹理）。
- `TextureSampleParameterNormal` 接受用作法线贴图的 Texture2D。
- `TextureSampleParameterSubUV` 接受 Texture2D，后者用于具有精灵发射器的子 UV 效果。

还有一些静态参数：

- `StaticBoolParameter`
- `StaticSwitchParameter`
- `StaticComponentMaskParameter` 分量遮罩。

开关参数表达式 SwitchParameter 接收两个输入，并且在参数值为 true 时输出第一个输入的值 (True 端口），否则输出第二个输入的值（False 端口）。

静态参数在编译时应用，因此它们会生成更加优化的代码，由静态参数屏蔽的整个材质分支在编译后将消除，而不会在运行时执行。由于它们是在编译时应用的，只能从材质实例编辑器中更改，而不能从脚本中更改。对于基本材质中每种由实例使用的静态参数组合，都将通过编译产生一个新材质！这可能会导致编译大量着色器。请尽量减少材质中的静态参数数目以及实际使用的静态参数排列数。

有两种专用于组织材质参数的材质表达式节点：

- `CollectionParameter`表达式用来引用"参数集合"资产。这些是可以由许多不同资产（例如材质和蓝图等等）轻松重复使用的参数组。
- `DynamicParameter`表达式为粒子发射器提供管道，以便将最多四个要以任意方式处理的值传递给材质。这些值是通过放置在发射器上的 ParameterDynamic 模块在 Cascade 中设置的。


在虚幻引擎 4 中，共有两类材质实例：

- Material Instance Constant 常量材质实例 - 仅在运行时之前计算。
- Material Instance Dynamic (MID) 动态材质实例 - 可以在运行时计算和编辑。

在 GPU 上，顶点着色器针对每个顶点运行，而像素着色器针对每个像素运行。在虚幻引擎 4 中，几乎所有材质节点都针对每个像素来运行。虽然 UV 坐标（UV Coordinate）节点可以是顶点或像素着色器的一部分，但是定制 UV 功能 *CustomizedUV* 仅在顶点着色器中运行，与在像素着色器中运行相同计算相比，这可以提高性能。这是一种提高速度的绝佳方法，即使是仅仅平铺纹理也是如此。虽然系统并未限制可以对 UV 运行的数学运算，但是结果将依赖于网格的铺嵌。


材质参数集合（`Material Parameter Collection`） 是一个用于存储任意 标量参数和矢量参数集合的资源。 这些参数可以在任意材质中引用。这是一个强大的工具，美术借助这个工具可以一次性 将全局数据导入到多个材质。它还有助于设置每个关卡的效果，如雪量、破坏程度、湿度等。 如果不使用此工具，这些按关卡效果需要对关卡中的许多不同材质实例设置单独的参数值。


虚幻引擎 4 已采用基于物理的新材质和明暗处理模型，Physically Based，基于物理的明暗处理意味着我们估算光线的实际情况，而不是估算我们 凭直觉认为它应该发生的情况。最终结果是，这样可产生更准确并且通常更加自然的外观。基于物理 的材质在所有照明环境中都可以同样完美地工作。另外，材质值可以 不那么复杂，相互依赖也可以少一些，从而产生更加直观的界面。这些益处甚至适用于非逼真渲染，您可在皮克斯和迪士尼的最新电影中找到证明。

在基于物理材质系统方面，只有 4 个材质参数需要熟悉，所有这些输入都设计成接收介于 0 与 1 之间的值：

- 底色（Base Color）
- 粗糙度（Roughness）
- 金属色（Metallic）
- 高光（Specular）

基于物理的底色值可以从现实材质中测得，那么这是使用偏振滤光器拍摄时获得的颜色（偏振在校准时会消除非金属材质的镜面反射）。

对于非金属材质测得的底色值（仅限强度）：

    |    材质    | 底色强度 |
    |------------|----------|
    | 木炭       |     0.02 |
    | 新鲜沥青   |     0.02 |
    | 老化沥青   |     0.08 |
    | 裸露土壤   |     0.13 |
    | 绿色草地   |     0.21 |
    | 沙漠沙子   |     0.36 |
    | 新鲜混凝土 |     0.51 |
    | 海冰       |     0.56 |
    | 新鲜雪     |     0.81 |

针对金属测得的底色：

    | 材质 |     底色 (R, G, B)    |
    |------|-----------------------|
    | 铁   | (0.560, 0.570, 0.580) |
    | 银   | (0.972, 0.960, 0.915) |
    | 铝   | (0.913, 0.921, 0.925) |
    | 金   | (1.000, 0.766, 0.336) |
    | 铜   | (0.955, 0.637, 0.538) |
    | 铬   | (0.550, 0.556, 0.554) |
    | 镍   | (0.660, 0.609, 0.526) |
    | 钛   | (0.542, 0.497, 0.449) |
    | 钴   | (0.662, 0.655, 0.634) |
    | 铂   | (0.672, 0.637, 0.585) |

金属色（`Metallic`）输入控制表面在多大程度上"像金属"。非金属的金属色值为 0， 金属的金属色值为 1。对于纯表面，例如纯金属、纯石头、 纯塑料等等，此值将是 0 或 1，而不是任何介于它们之间的值。创建受腐蚀、落满灰尘或生锈金属之类的混合表面时， 您可能会发现需要 介于 0 与 1 之间的值。

在编辑非金属表面材质时，您有时可能希望调整它反射光线的能力，尤其是它的 高光 属性。 要更新材质的高光度，需输入介于 0 无反射和 1 全反射之间的标量数值。注意，材质的默认高光值为 0.5。

对于漫射度非常大的材质，您可能倾向于将此值设置为零。请忍住，不要这样做！所有材质 都具有镜面反射。对于漫射度非常大的材质，您真正想做的是 使它们粗糙。

粗糙度（`Roughness`）输入控制材质表面的粗糙或平滑程度。与平滑的材质相比，粗糙的材质将向更多方向散射所反射的光线。 这决定了反射的模糊或清晰度（或者镜面反射高光的广度或密集度）。 粗糙度 0（平滑）是镜面反射，而粗糙度 1（粗糙）是漫射（或无光）表面。

一般而言，通过修改高光（`Specular`），可添加轻微的吸着现象或小比例的遮蔽，例如在法线贴图中表示的裂缝。有时，将这些现象称为腔洞。 比例较小的几何体，尤其是仅存在于高多边形中且并入法线贴图的细节，不会被渲染器的实时阴影拾取。为了捕获这种遮蔽，我们生成腔洞贴图， 这通常是追踪距离非常短的 AO 贴图。此贴图先乘以最终的底色，然后输出并乘以 0.5（镜面反射默认值）以作为镜面反射输出。 即，BaseColor = Cavity * OldBaseColor，Specular = Cavity * 0.5。

对于高级使用，这可用来控制折射率 (IOR)。我们发现对于 99% 的材质，这并非必要。以下是基于实测 IOR 的镜面反射值。

实测镜面反射值：

    | 材质 | 镜面反射 |
    |------|----------|
    | 玻璃 |      0.5 |
    | 塑料 |      0.5 |
    | 石英 |    0.570 |
    | 冰   |    0.224 |
    | 水   |    0.255 |
    | 牛奶 |    0.277 |
    | 皮肤 |     0.35 |

在虚幻引擎 4 的当前版本中，使用了折射的非物理模型像素法线偏移（`Pixel Normal Offset`）。 内嵌代码使用 `Index of Refraction` 的折射物理模型，以光线在媒介之间的折射方式为基础，可能导致大量穿帮（因为场景颜色在屏幕外读取）。 可用于玻璃罐之类的小型物体（效果不甚明显），但在平面上存在问题。

像素法线偏移可为水面之类的大型平面启用折射，此处常量偏移不会从远离屏幕之外之处进行读取。它以顶点法线作为参考，然后通过逐像素法线和顶点法线之间的差别计算折射偏移，使这些平面不会移位。

Index of Refraction 无需法线贴图插入材质即可使用；而 Pixel Normal Offset 没有法线贴图则无法获得折射。



### ✒ Material Editor
- https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/Editor/
- https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/HowTo/BumpOffset/
- GAMES101: 现代计算机图形学入门 https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html
- Grant Sanderson - 3blue1brown 线性代数的本质 https://www.bilibili.com/video/BV1ys411472E
- MIT 18.06 Linear Algebra https://mitmath.github.io/1806/
- 麻省理工 - 线性代数 全34讲 https://www.bilibili.com/video/BV1ix411f7Yp/
- https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/HowTo/BumpOffset/

材质编辑器（Material Editor） 是一个基于节点的图形界面，它允许你创建着色器，这些着色器可以应用到你的几何体，比如静态和骨架网格体，或者与其他系统一同使用（比如级联） 以创建有趣的材质。

可以通过双击任何材质资源，或通过内容浏览器中的右键上下文菜单打开材质编辑器。

每个材质节点包含一个描述（Desc）属性，用于描述某个特定节点的作用，该属性可通过其 Details 面板设置。当鼠标悬停在节点上，Desc 文本将显示在文本气泡中。

也可以创建注释框，当鼠标在材质图表上时，按 C 键盘快捷键。如果在图表中选择了任何节点，则注释框将缩放以包含所选节点。使用材质图表上下文菜单选择（New Comment）也可以加一个注释框。

可以调整注释框的颜色，使其更直观。设置 Details -> Comment Color 属性，使用色轮选择颜色或输入特定的 RGB 值。

在对网络进行更改时，实时从每次更改中获得即时反馈是很有用的。

实时预览（`Live Preview`）- 此选项允许任何更改在材质预览（Material Preview）窗口中自动实时更新，而无需使用 保存（Save） 或 应用（Apply） 按钮。

实时节点（`Live Node`）- 此选项允许节点所做的任何常量更改，例如用于平移器的材质表达式，以便它们在图表中实时回放。

实时更新（`Live Update`）- 此选项允许网络中的每个节点在进行更改时重新编译其着色器。这些更改包括新节点的创建、节点的删除、节点连接和断开以及属性的更改。这种重新编译是必要的，以便在该节点绘制的材质预览保持为最新。然而，重新编译这些中间着色器可能很耗时，尤其是当你的材质包含较大的网络时。如果每次更改之后都会经历长时间的等待，那么你可能需要停用实时更新（Live Update）选项。

当制作复杂的材质时，有时你的着色器网络会变得难以读取或理解，因为连接线会与你的材质网络的大部分重叠或交叉，以连接不同的输入。变更路线 节点使你能够轻松地组织和清理着色器网络，而不影响性能或添加到指令计数，因为这些都是纯可视化的。从右键上下文菜单中或实用工具 Utility -> Material Palette 中，你可以拖入添加变更路线节点（`Reroute Node`）。

可以使用热键来放置常用的材质表达式节点，按住以下热键并点击左键放置节点：

- B `BumpOffset` 凹凸偏移贴图，一种低成本的法线贴图替代方法，利用 UV 坐标来让纹理产生凹凸视感。
- C `Comment` 注解框。
- A `Add` 加法节点。
- D `Divide` 除法节点。
- E `Power` 乘方节点。
- M `Multiply` 乘法节点。
- F `MaterialFunctionCall` 材质函数调用节点，在内容浏览器菜单 Materials & Textures 创建材质函数，它用于组织需要重复使用的材质节点编排。
- I `If` 条件选择节点，比较 A 和 B 的值，再根据结构输出其它三个输入值。
- L `LinearInterpolate` 线性插值节点 Lerp。
- N `Normalize` 归一化向量，返回方向相同但长度为 1 的向量即单位向量。如果向量太小而不能被归一化，则返回一个零向量。
- O `OneMinus` 求补，用 1 减去 0 ~ 1 的值。
- P `Panner` 平移器节点，生成随时间平稳的坐标。
- R `ReflectionVector` 
- T `TextureSample` 纹理采样。
- U `TexCoord` 纹理坐标
- S `ScalarParameter` 一维参数，在材质中引入参数，可以由材质实例传入。
- V `VectorParameter` 四维参数，在材质中引入参数，可以由材质实例传入。
- 1 `Constant` 一维常量。
- 2 `Constant2Vector` 二维常量。
- 3 `Constant3Vector` 三维常量。
- 4 `Constant4Vector` 四维常量。
- Shift + C `ComponentMask` 分量遮罩。

其它常用节点：

- `CrossProduct` 叉积即矢量积，表达式计算两个三通道矢量值，并输出所产生的三通道矢量值。给定空间中的两个矢量，矢量积是与两个输入都垂直的矢量。
- `DotProduct` 向量点积表示标量积，即一个矢量投射到另一个矢量上的长度。许多技术使用此计算来计算衰减。点积要求两个矢量输入具有相同数目的通道。
- `Rotater` 平移器节点，生成随时间平稳的坐标。
- `Abs`（绝对值）
- `AppendVector`（追加矢量）
- `Clamp`（钳制，将输入值限制在两个值之间）
- `Cosine`（余弦）
- `Ceil`（向上取整，小数部分不为 0 则加一）
- `Floor`（向下取整，截掉小数部分）
- `FMod`（浮点余数，对两个输入执行除法运算并返回浮点余数。）
- `Frac`（小数）
- `Max`（最大值）
- `Min`（最小值）
- `Sine`（正弦）
- `SquareRoot`（平方根）
- `Subtract`（减）
- `Fresnel`（菲涅尔效应）

点乘（Dot Product）的结果是数量积或标量积（Scalar Product）。从几何角度看，点积是两个向量的长度与它们夹角余弦的积，即 *a﹡b* 表示 *b* 在 *a* 上的投影。

根据余弦定理，向量点积定义如下，注意两竖表示向量的模：

    a·b = |a|×|b|cosθ

判断这两个向量是否是同一方向，是否正交(也就是垂直)等方向关系，具体对应关系为：

- a·b > 0 夹角在 0° ~ 90° 之间；
- a·b = 0 正交，相互垂直；
- a·b < 0 方向基本相反，夹角在 90° ~ 180° 之间；

叉乘（Cross Product）又称向量积（Vector Product）。几何意义上，在空间中有两个向量叉积运算结果是一个向量，并且与这两个向量都垂直，是这两个向量所在平面的法线向量。使用右手定则确定其方向，食指为 *a* 指向正前方，中指为 *b* 指另一个角度，拇指为 *a×b* 并且与 a 和 *b* 的方向都垂直。计算机图形学中，叉积常用于判断一个物体是否在另外一个物体的左侧或右侧。

如果以向量 *a* 和 *b* 为边构成一个平行四边形，那么这两个向量外积的模长与这个平行四边形的面积相等。



### ✒ Materials 材质操作指南
- 材质操作指南 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/HowTo
- 材质表达式参考 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/ExpressionReference/
- 材质函数参考 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/Functions/
- UE4 积雪效果(VertexNormalWS) https://www.bilibili.com/read/cv14053897
- 互动雪地材质 https://www.bilibili.com/video/BV1wt411m7L7
- 深度表达式 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/ExpressionReference/Depth
- 地形表达式 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/ExpressionReference/Landscape/
- 材质图层 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Materials/MaterialLayers/

材质中可以使用的各种输入数据表达式参考：

各种深度表达式，处理所渲染像素的深度的表达式：

- `DepthFade`（深度消退）表达式用来隐藏半透明对象与不透明对象相交时出现的不美观接缝。
- `SceneDepth`（场景深度）表达式输出现有的场景深度。这类似于 PixelDepth，但是它只能在当前所绘制像素处进行深度取样，而场景深度可以在任何位置进行深度取样。
- `PixelDepth`（像素深度）表达式输出当前所渲染像素的深度，即该像素与摄像机之间的距离。

各种矢量表达式，输出位置、法线等矢量值的表达式：

- CameraVectorWS 表达式输出一个三信道矢量值，该值表示摄像机相对于表面的方向，即像素到摄像机的方向。通常通过 ComponentMask 使用 CameraVector 的 x 和 y 信道作为纹理坐标，来用于虚设环境贴图。
- Object Bounds 对象边界表达式输出对象在每个轴中的大小。
- Vector Noise Material 矢量噪点材质表达式添加了更多的三维或四维矢量噪点结果以在材质中使用。
- PixelNormalWS 表达式根据当前法线输出矢量数据，该数据表示像素所面对的方向。
- ReflectionVectorWS 表达式在本质上类似于 CameraVectorWS，但它输出一个三信道矢量值，该值表示通过表面法线反射的摄像机方向。ReflectionVector 通常用于环境贴图，其中反射矢量的 x/y 分量被用作 UV 输入立方体贴图纹理。
- VertexNormalWS 表达式输出世界场景空间顶点法线。

各种矢量坐标表达式：

- `ActorPositionWS` 输出矢量(RGB)数据，该数据表示对象在世界场景空间中的位置以及其上的材质。
- `CameraWorldPosition` 表达式输出三信道矢量值，该值表示摄像机在世界场景空间中的位置。
- `LightmapUVs`（光照贴图 UV）表达式以双通道矢量值形式输出光照贴图 UV 纹理坐标。如果无法获得光照贴图 UV，那么将输出双通道矢量值 (0,0)。
- `ObjectPositionWS` 表达式输出对象边界的世界场景空间中心位置。例如，这对于为植物创建球形照明很有用。
- `ObjectOrientation` 表达式输出对象的世界场景向上矢量。换言之，对象的局部正 z 轴正指向此方向。
- `ObjectRadius`（对象半径）输出给定对象以 Unreal 单位计的半径值。系统会对比例缩放加以考虑，并且对于每个对象，结果可能是唯一的。
- `ParticlePositionWS` 粒子位置表达式输出代表世界场景空间中每个单独粒子位置的 Vector3(RGB) 数据。
- `Panner`（平移）表达式输出可用于创建平移（或移动）纹理的 UV 纹理坐标。
- `Rotator`（旋转）表达式以双通道矢量值形式输出 UV 纹理坐标，该矢量值可用来创建旋转纹理。
- `SceneTexelSize`（场景纹素大小）表达式允许按纹素大小进行偏移，正如您使用 SceneColor（场景颜色）和 SceneDepth（场景深度）表达式时执行的偏移操作。
- `ScreenPosition`（屏幕位置）表达式输出当前所渲染像素的屏幕空间位置。
- `TextureCoordinate`（纹理坐标）表达式以双通道矢量值形式输出 UV 纹理坐标，从而允许材质使用不同的 UV 通道、指定平铺以及以其他方式对网格的 UV 执行操作。
- `ViewSize`（视图大小）表达式输出一个 2D 矢量，以给出当前视图的大小（以像素为单位）。这对于使材质根据当前屏幕分辨率产生各种变化来说非常有用。
- `WorldPosition`（全局位置）表达式输出当前像素在全局空间中的位置。要实现可视化，只需将输出连接到"自发光"（Emissive）：

各种矢量操作表达式：

- `AppendVector`（追加矢量）表达式允许您将通道组合在一起，以创建通道数比原始矢量更多的矢量。
- `ComponentMask`（分量蒙版）表达式允许从输入中选择通道（R、G、B 和/或 A）的特定子集以传递到输出。
- `CrossProduct` 表达式计算两个三通道矢量值输入的交叉乘积，并输出产生的三通道矢量值。
- `DeriveNormalZ`（派生法线 Z）表达式在给定 X 和 Y 分量的情况下派生切线空间法线的 Z 分量，并输出所产生的三通道切线空间法线。Z 计算方法为：Z = sqrt(1 - (x * x + y * y))；
- `DotProduct` 表达式计算点积，点积可以描述为一个矢量投影到另一个矢量上的长度，也可以描述为两个矢量之间的余弦乘以它们的幅值。许多技术使用这种算法来计算衰减。
- `Normalize` 表达式计算并输出其输入的归一化值。归一化矢量（也称"单位矢量"）的整体长度为1.0。这意味着输入的每个分量都除以矢量的总大小（长度）。
- `Transform`（转换）表达式将三通道矢量值从一种参考坐标系转换到另一种参考坐标系。
- `TransformPosition`（转换位置）表达式可将屏幕空间中的任何位置转换到表达式的 TransformType 变量所指定的目标空间。目前只支持转换到全局空间。此表达式可用来获取材质中的全局空间坐标。

字体纹理表达式：

- `FontSample`（字体取样）表达式允许您以常规 2D 纹理形式，从字体资源中取得纹理页面样本。字体的阿尔法通道将包含字体轮廓值。您只能指定有效的字体页面。
- `FontSampleParameter`（字体取样参数）表达式提供了一种在材质实例常量中公开基于字体的参数的方法，这使您可以在不同实例中轻松使用不同的字体。字体的阿尔法通道将包含字体轮廓值。您只能指定有效的字体页面。


尽管任意材质都可用于地形，但虚幻引擎 4 中的材质系统同时提供了一些特定的地形材质节点，可帮助优化地形纹理。地形使用权重混合，而非 Alpha 混合，因此所有层在任何位置的混合系数最多累积到 1.0。Alpha 混合与顺序无关，可随时绘制任意层，因此十分有用。此外，在使用 Alpha 混合时，Alpha 层的权重会增加，而其他现有层权重会减小。

但是，使用 Alpha 混合的一个弊端是层绘制达 100% 时，所有其他层的权重值将变为 0%。此情况在使用绘制工具移除已 100% 的层时十分明显。由于其他层为 0%，工具无法取代要移除的 100% 层，因此层好似并无变化。

在材质编辑器中，可发现六个可用于地形系统的特殊节点。可在地形分类下的控制板菜单中找到这些节点：

- 利用 `LandscapeLayerBlend` 节点可混合多个纹理或材质网络，以便将其用作地形层。LandscapeLayerBlend 使用阵列存储关于地形层的信息。使用 Alpha 混合或带有基于高度偏移的 Alpha 混合来混合多个层。利用基于高度的偏移，层可根据高度图输入与其他层混合。
- `LandscapeLayerCoords` 节点生成UV坐标，可用于将材质网络映射到地形地貌。
- 特定层未对地形区域贡献时，利用 `LandscapeLayerSwitch` 节点可排除部分材质运算。特定层权重为0时，利用此操作可通过移除不必要的计算优化材质。
- 利用 `LandscapeLayerWeight` 表达式可根据地形材质中获取的关联层权重混合所有材质网络。该层的权重用作混合两个输入网络的Alpha值。
- `LandscapeVisibilityMask` 节点移除地形的可见部分，以便在地形中创建洞进行如洞穴创建等操作。

使用层混合模式的特定组合时，地形上不同层交叉的位置将出现大量黑斑。将*LB_HeightBlend*模式用于多地形层时，此问题尤其常见。LB_HeightBlend 的工作原理是使用指定权重值调制层的混合系数或权重。如区域上绘制有多个层，且均被设为这种模式则可能特定区域中绘制的所有层将同时拥有0高度值，因此各层的理想混合系数将变为 0。

由于无隐式或显式排序，且无层对该区域有贡献，因此结果会产生黑斑。由于混合法线贴图会产生法线值(0,0,0)，且该值无效，会导致照明渲染问题，因此混合法线贴图时情况会更糟。针对此问题的解决方案是对其中一个层使用 *LB_AlphaBlend*。

所有层命名必须唯一，因此建议使用可表明层所含内容的描述性名称来命名层。此命名这可协助记忆层中的内容，以便更加快速地搜索层。

设置和使用 *LandscapeLayerWeight* 节点的过程：

- 在材质编辑器中，向材质图表添加 *LandscapeLayerWeight* 节点，在细节面板中，将参数命名改为层的描述性命名，如"Rock"。
- 添加额外 *LandscapeLayerWeight* 节点，直到所需材质中的所有层都拥有此类节点为止。
- 添加纹理取样或其他材质网络表达式，并将其与 LandscapeLayerWeight 节点连接。
- 并且将输出套接在另外的 *LandscapeLayerWeight* 节点的 Base 输入端，顶层的 Base 留空。
- 从最终层节点的输出引脚连出引线，连接到材质基本节点的底色输入。
- 添加 *LandscapeLayerCoords* 节点，任意设置其 UV 标题，然后将其与纹理取样节点连接。


`VertexColor`顶点颜色节点输出模型顶点颜色，此颜色通过 Mesh Paint 工具在 Color 模式下绘制得到，它不一定用来直接显示，还可以用来做其它效果的控制数据。除了顶点色，还可以进行权重绘制（Vertex Weight Painting）模式，在网格体顶上绘制顶点权重，提供 5 路数据 RGB、Alpha 以及色彩的各个分量。

使用 Mesh Paint 进行顶点权重绘制时，进入顶点权重绘制模式（Vertex Weight Painting），并且先根据需要的数据路数选择纹理权重类型（Texture Weight Type）。

- Alpha (Two Textures) 2 路数据；
- RGB (Three Textures) 3 路数据；
- ARGB (Four Textures) 4 路数据；
- ARGB - 1 (Five Textures) 5 路数据；

通过设置在与网格体相关材质中混合的纹理数量，来配置混合权重"策略"。更改理权重类型后，可用于绘制纹理（Paint Texture）和擦除纹理（Erase Texture）的选项将会更新。

设置 Color View Mode 为 RGB Channel 模式下查看该网格物体，会展示设置在顶点的 RGB 颜色，Alpha 通道绘制内容显示为黑色。注意，设置颜色查看模式为 Alpha Channel，则所有通道的绘画内容显示为黑色，无内容区为白色。无绘画内容的区域输出为 0 值，已绘画内容的区域，在对应的通道上输出为 1 值。

在 UE5 上，Weight Painting 面板似乎有 UI 逻辑 Bug。在 Paint Texture Weight Index 列表的应该是画笔纹理，以 ARGB - 1 (Five Textures) 绘制类型为例，对应的纹理作用：

- Texture One 清除 Alpha 通道，白色；
- Texture Two 绘制 R 通道，红色；
- Texture Three 绘制 G 通道，绿色；
- Texture Four 绘制 B 通道，蓝色；
- Texture Five 绘制 Alpha 通道，黑色。

注意，绘画前一定要先点画笔工具，需要绘制哪个通道，直接在 Paint Texture Weight Index 这里选择。而 Erase Texture Weight Index 中的选项完全不起作用的。

解析一下 5 路数据的来源，RGBA 四个分量即为 4 路，然后，用 1 - Alpha 计算得到另外一路。

各通道绘图后，如何需要还原为纯色，RGB 各通道可以通过 Mesh Paint 的清除或填充工具 Remove/Fill 来实现，但它们有时候不可点击状态，在模型上画几笔就正常了。


`WorldPosition`输出模型顶点在全局空间的坐标，Absolute World Position。

`VertexNormalWS`输出模型顶点在全局空间的法线向量，可以作为 World Position 中的位置偏移进行使用，也可以用于制作某些特殊贴图。

直接将 VertexNormalWS 输出到材质的 Base Color，可以看到一个立文体向 X/Y/Z 轴正方向的三个面分别显示为 Red/Yellow/Blue 三原色，对应各个面的法线向量 (1,0,0)/(0,1,0)/(0,0,1)，另外三个面处于各轴的负向，所以各分量都小于或等于 0，对于颜色输入都等价为 0。如果是 Sphere，那么三个正向面的颜色将会是三原色渐变的效果，根据其各像素在所位置的法线决定。

两个向量的点积是一个标量，几何含义就是一个向量在另一个向量上的投射长度，所以，XY 平面上的两个向量的点积就相当于一个仅表现 Z 轴方向上的高度蒙版。也就是说，假如山体模型的某个部分是平顶的，那么它的法线必定是指向 Z 轴正方向。那么，将顶点向量与向量(0,0,1）做 `DotProduct` 运算，当它们平行时，也就是山体模型平顶部分就会得到最大值 1。而斜面部分，根据坡度不同，输出的数字小于 0 ~ 1 之间。对于那些竖起的断崖部分，几乎与 Z 方向垂直，即 COSθ 输出为 0。明白该原理之后，便可以进行一些特殊效果的制作，例如积雪的材质，根据输出值的强度，再结合 LinearInterpolate 或 HeightLerp 做插值，实现雪花与岩石材质的覆盖。

法线贴图的混合叠加不能直接相乘 Multiply，而应该使用材质函数 *BlendAngleCorrectedNormals* 节点。

`VertexTangentWS`输出模型顶点在全局空间的切线向量，。

网格体绘制系统要求网格体材质包含一个顶点颜色节点 `Vertex Color`，因为这是从网格体将模型的顶点颜色数据传至材质的方式，数据流：Mesh -> Vertex Color -> Material。

Vertex Color 四个输出端点说明：

- RGB 风格体顶点的三通道色彩输出；
- R 风格体顶点的的 Red 分量输出；
- G 风格体顶点的的 Green 分量输出；
- B 风格体顶点的的 Blue 分量输出；
- A 风格体顶点的的 Alpha 分量输出；

高度插值`HeightLerp`是一个非常有用的纹理处理函数，它根据高度贴图和过渡阶段值，在 2 个纹理之间执行线性插值，允许沿着发生插值的高度贴图来调整值。和 Lerp 线性插值类似，再配合 `Vertex Color` 的 5 路输出数据可以实现最大 5 路纹理混合的材质。

例如，通过 HeightLerp 在模型上绘制砖墙与苔藓：

- A (Vector3) 输入用于插值计算的第一个纹理，比如砖墙纹理。
- B (Vector3) 用于插值计算的第二个纹理，比如苔藓纹理。
- Transition Phase (Scalar) 此值定义发生过渡的高度贴图范围。
- Height Texture (Scalar) 灰度图，用于插值操作的高度贴图。
- Contrast (Scalar)  使用 CheapContrast（低成本对比度）函数对高度贴图应用对比度提升。
- Results 输出结果，HeightLerp 函数根据输入条件混合 A B 后的结果。
- Alpha 在插值中使用的阿尔法值（已提升对比度）。
- Lerp Alpha No Contrast 在插值中使用的阿尔法值（未提升对比度）。

将*Transition Phase*设置为 0.5 表示执行标准插值，AB 两边都可以兼顾，而 0 或 1 表示没有过度范围，无论高度贴图输入什么值，插值结果只对应 A 或 B，没有二者的混合。

`HeightLerp` 和 `Lerp` 相比，多了一个高度贴图的输入，也就可以根据不同坐标点的高度来决定插值，绘制顶点颜色时，请确保模型有足够的顶点来保存相关数据。

纹理贴图的 UV 坐标调整使用`TextureCoordinate`表达式节点。


利用 World Position Offset 材质属性可以创建风吹草动的效果，UE4 内置有 *SimpleGrassWind* 材质函数可以直接使用。此函数对植物叶子应用基本的风运算，并允许您指定权重贴图和风力。这是无方向的风，它只是使植物叶子产生非常普通的移动效果。需要风向，应该使用最后一个 WPO 参数。

输入参数说明，给它们统一输入 0 ~ 10 的值就可以看到晃动效果：

- WindIntensity (Scalar) 控制风影响网格的程度。
- WindWeight (Scalar)   这是一个灰阶贴图，用于控制网格顶点对风产生反应的程度。
- WindSpeed (Scalar) 此值控制风速。
- AdditionalWPO (Vector3) 额外的世界位置偏移网络或函数，world position offset networks or functions。

除了模拟风吹草动效果，还可以制作互动草丛，玩家经过草丛时会有摆动，制作步骤要点：

- 首先，在关卡蓝图调用 *GetPlayerPawn* 和 *GetActorLocation* 来获取玩家的坐标；
- 然后调用 *SetVectorParameterValue* 将这个坐标通过材质参数集体传递给材质蓝图，材质参数集合后续创建；
- 创建一个 Material Parameter Collection，命名为 MPC_PlayerLocation，相应修改 VectorParameter 参数名字；
- 将材质参数集合 MPC_PlayerLocation 拖入材质蓝图，并设置 General -> Parameter Name 和上面的参数名字一致；
- 设置`WorldPosition`节点获取草丛模型顶点在全局空间的坐标。
- 使用`Utility Distance`节点计算与玩家坐标之间的距离，根据距离来决定是否要设置 *World Position Offset* 来产生移动效果。

注意，VectorParameterValue 是一个四维向量，可以使用 *ComponentMask* 转换为三维向量。另外，当然，还有设置标量参数的方法*SetScalarParameterValue*。


凹凸贴图偏移（BumpOffset） 是虚幻引擎 4 术语，就是通常所谓的"视差贴图"。BumpOffset 表达式可以使材质产生深度错觉，而不需要额外的几何体。BumpOffset 材质使用灰阶*高度贴图*来提供深度信息。高度贴图中的值越亮，材质的"凸出"效果越明显；当摄像机在表面上移动时，这些区域将产生视差（移位）。高度贴图中较暗的区域将显得"距离较远"，其移位程度最小。合适的 Height Ratio 设置在 0.05 ~ 0.1 区间。




水体材质使用有折射动态变化的特点，并且与物体交界处的折射会特别不同，使用`DistanceToNearestSurface` 或 `DistanceFieldGradient`可以对水流与物体接触边界进行特效处理。通过抖动 UV 可以模拟水体的波纹晃动，而用原本的 UV 减掉 DistanceFieldGradient 计算出来的向量，这样就可以做出沿着相交区域点法线方向向外推贴图的效果。

请务必注意，DistanceFieldGradient 首先进行规范化，然后输入到"蒙版通道"（Mask Channel）节点。 这样做的原因是，如果不首先进行规范化，将无法获得方向性数据。为了方便在材质实例中进行 RGB 通道切换，添加了"蒙版通道"（Mask Channel）参数。

这两个节点依赖距离场来计算，所以需要在项目中激活：Project Settings -> Rendering -> Generate Mesh Distance Fields。

DistanceToNearestSurface 材质表达式节点允许材质对"全局距离场"关卡中的任何点进行取样。 这个材质表达式将输出从距离场到场景中最近遮挡体的带符号距离（以全局空间单位计）。

UE4 自带的 Starter Content 就有 M_Water_Lake 水体材质示范。



## ⚡ Reactive Snow 互动雪地
- 可互动雪地材质 https://www.bilibili.com/video/BV1wt411m7L7
- Creating Snow Trails in UE 4 https://www.raywenderlich.com/5760-creating-snow-trails-in-unreal-engine-4
- Creating Interactive Grass in UE4 https://www.raywenderlich.com/6314-creating-interactive-grass-in-unreal-engine-4

主角在地面上留下脚印是一个常用的表现手法，使用 UE4，可以很方便实现这个效果，一般的思维过程是主角的脚步踩踏地面时，TRACE 地面得到坐标，然后上贴花。

实现雪地足迹的基本思路：

- 为足迹创建渲染目标，这是一个灰度遮罩，其中白色代表着足迹，黑色代表非足迹。
- 将渲染目标投影到地面，然后用它来混合纹理以及置换顶点，使得雪地有下陷效果。

但是，需要一种方法找到那些可影响雪的物体，可以先把对象渲染到自定义深度（CustomDepth）缓冲区，再使用一个带有后期处理材质的 SceneCapture 对所有渲染到自定义深度的对象进行遮罩，然后再把遮罩输出给渲染目标。

SceneCapture 的关键是它放置的位置。假如，是顶向下视角记录场景并输出给渲染目标，那么对于球体，它只是底部着地，但是顶视角会认为整个球体投身到地址的部分都是被遮罩的区域。

所以，SceneCaptue 摄像机应该从底部捕捉场景，也就是接触地面的角度拍摄。要判断物体是否接触地面，使用后期处理材质进行深度检测。这个检测会告诉我们物体是否高于地面深度且低于指定的偏移量。如果这两个条件均为 True，我们就可以为这一像素遮罩。

要进行深度检测，我们需要两个深度缓冲区。一个针对地面；另一个针对影响雪的物体。因为 SceneCapture 仅能看到地面，场景深度（SceneDepth）缓冲区 将会输出地面的深度。要获取物体的深度，我们只需要将它们渲染到 自定义深度（CustomDepth）缓冲区


示范项目基于 ThirdPerson Shooter 模板，互动雪地功能基本逻辑：

- 创建一个 Actor 蓝图，命名为 *RenderTarget_BP*，添加并使用 SceneCaptureComponent2D 组件来捕捉三维场景中的信息。
- 创建一个 Material Parameters Collection 命名为 *SnowMPC*，用于向雪地材质*Snow_Mat*传递玩家坐标，使用`SetVectorParameterValue`方法。
- 在 BeginPlay 事件中，通过 `SetScalarParameterValue` 将 SceneCaptureComponent2D 组件的 OrthoWidth 投影宽度写入 *SnowMPC*。
- 与玩家坐标绑定，在 Tick 事件中，使用 `GetPlayerCharacter` 和 `GetActorLocation` 获取玩家的坐标位置，并使用 `AddActorWorldOffset` 方法更新到 RenderTarget_BP 本身的坐标。
- 创建两个 RenderTarget 用来存储玩家的足迹，一个命名为 *RenderTarget*，另一个命名为 *RenderTargetPersistent*。
- 创建一个材质命名为 *DrawToPersistant* 用来装入 *RenderTarget* 材质采样。
- 再利用 UPrimitiveComponent 提供的 `CreateDynamicMaterialInstance` 方法创建动态材质，通过 `DrawMaterialToRenderTarget` 将其绘制到 *RenderTargetPersistent*。
- 创建一个 WidgetBlueprint 用来在屏幕上显示玩家足迹，只需要添加一个 Image 组件，设置 Brush -> Texture 为 *RenderTarget*。
- 雪地材质*Snow_Mat*只是简单地使用白色模拟雪地，使用深棕色模拟土地，它们通过 LinearInterpolate 进行线性插值，Alpha 输入的插值控制来自 *RenderTarget* 记录的足迹数据，并经过自定义材质函数*MaskUV*处理。
- 使用 WorldPosition 获取雪地中像素坐标，并与玩家当前的坐标进行差值处理。
- 在 ThirdPersonCharacter 角色的 BeginPlay 事件，使用 `Create Widget` 创建其实例，再 `AddToViewport` 添加到场景中。


工程中使用了三个材质，材质混合模式及着色模式如下：

- *Snow_Mat* 雪地材质，Surface 材质域，Opaque + Default Lit 模式，Two Sided；
- *DrawToPersistant* 绘图用的材质，Surface 材质域，Opaque + Default Lit 模式，用于绘制 RenderTarget 的材质；
- *Mat_Depth* Post Process 材质域，用来测量渲染深度；

后期处理材质需要指定材质域为 Post Process，并且，后期处理材质只能使用自发光颜色（Emissive Color）输出新颜色。此外，可以定义在后期处理过程中应在何处应用此通道(Blendable Location)，如果有多个通道，则应按什么顺序处理（Blendable Priority）。

*RenderTarget_BP* 内部的 *SceneCaptureComponent2D* 组件需要使用深度测试材质 *Mat_Depth*，其逻辑说明：

- 使用 *SceneTexture* 材质表达式的 CustomDepth 和 ScreenDepth 纹理的 R 分量，求其差值，并除以 25。
- 即如果某像素距地面 25 个单位以内，那么它将被遮罩。遮罩的强度（masking intensity）依赖于像素和地面的距离。
- 再通过 *Saturate* 节点范围到 0 ~ 1 的范围，并使用 *OneMinus* 求反值。
- 将上面的标题值和 RenderTargetPersistent 的 RGB 矢量相加，这一步混合了旧的足迹数据。
- 将结果输出到 Emissive Color，这作为后期处理材质的专用通道。

添加对象到场景时，默认不会开启 Rendering -> Render CustomDepth Pass，你需要开启这个功能以生成 SceneCapture 需要捕捉的深度数据。这个单独的特性通过将某些对象渲染到另一个深度缓冲区（CustomDepth）来屏蔽它们。 这增加了额外的绘制调用，但不使用更多材质。渲染相当便宜，因为我们只输出深度。而


材质参数集合 SnowMPC 传递了两个参数：

- SceneCaptureComponent2D 组件的 OrthoWidth 投影宽度，标量。
- RenderTarget_BP 对象的 Actor Location，四三维矢量。

设置 *RenderTarget_BP* 内部的 SceneCaptureComponent2D 组件：

- Projection 部分：
    - Projection Type -> Orthographic 正交投影
    - Ortho Width -> 2048 像素的矩形（大概覆盖20m平方范围）
- Scene Capture 部分：
    - Texture Target -> *RenderTarget*
    - Capture Source -> Final Color (LDR) in RGB
- Post Process Volume -> Rendering Features 部分：
    - Post Process Materials 的数组设置中，添加 *Mat_Depth*；

将 *RenderTarget_BP* 添加到场景内，并设置 Location 为 (0, 0, -2000)，目的是将 SceneCapture 摄像机放到地面以下，使用底视角来捕捉做深度测试的数据。这些数据为保存到 Scene Capture 设置的 Texture Target 对象上。

两个 RenderTarget 对象的数据流向如下，主要是通过 RenderTarget_BP 各个方法处理：

*RenderTarget* -> DrawToPersistant -> *RenderTargetPersistent* -> Mat_Depth -> RenderTarget_BP -> *RenderTarget*。

如果不通过 *RenderTargetPersistent* 使足迹持久化，那么每次心跳事件中，新的足迹都会覆盖掉 *RenderTarget* 原有的足迹。所以，需要一个渲染目标作为持久化缓存（persistent buffer），在足迹被覆盖之前把它存储到持久化缓存中。然后再通过 *Mat_Depth* 把持久化缓存返回给 SceneCapture，所以再次捕捉到的深度信息就会包含持久化的足迹。这样我们就得到了两个渲染目标互相写来写去的循环结构，它就是实现持久化的方法。


因为渲染目标也是消耗内存，分辨率要尽可能低，以充分利用内存空间。使用 *PixelWorldSize* 表示一个像素对应多大的实际面积。

对于雪地上的足迹，不需要那么多的细节，使用不需要 1:1 的比例。笔者建议使用更大的比例，这样就能把低分辨率的渲染目标用到更大的捕获区域上。注意，也不要用太大的比例，那样会损失细节。本例中，使用 8:1 的比例，即一个像素对应 8×8 的世界单位。注意，渲染目标默认的分辨率是256×256。通过 Scene Capture -> Ortho Width 指定捕获区域大小，在 Perspective 投影方式下无效。比如，想捕获 1024×1024 的区域，因为使用的比例是 8:1，所以将它设为 2048（256×8）。

地面使用的材质，即 *Snow_Mat* 也需要访问捕获区域的大小从而准确投影渲染目标。一种简单的方式是将捕获区域的大小存储在材质变量集（Material Parameter Collection），这是因为任何材质都可以访问变量集。

雪地材质细节面板中的设置说明：

启用 Two Sided 是因为 SceneCapture 是自底向上看地面，即需要看到它的背面。默认情况下，引擎并不渲染背面，这样也就无法把地面深度存储到深度缓冲区。因此我们要让引擎对地面进行双面渲染。

设置 Tessellation -> D3D11 Tessellation 为 Flat Tessellation（使用 PN Triangles 也可以）。 Tessellation 会把网格的三角面分解成更小的三角面。从而有效提高网格分辨率，是我们在顶点置换时获得更多的细节。否则，顶点密度过小很难生成生动的足迹。Tessellation 即内嵌，在三角面中分割嵌套小的三角面，提升模型细节。

开启 Tessellation 后，材质的 World Displacement 和 Tessellation Multiplier 通道也会被启用。后者控制内嵌三角面的数量，本例中不对该通道连接，这意味着使用其默认值 1。

World Displacement 通道获取输入的向量值，根据向量的方向和大小移动顶点。要计算这个引脚的值，我们先得把渲染目标投影到地面。

引擎升级到 UE5EA 引入 Nanite 虚拟微多边形几何体，可以处理上亿级别的多边形，可以使用 Photogrammetry 的扫描数据和 CAD 数据，并且无需制作 LOD 模型。原先的 Tessellation 已经被移除，可以使用 Virtual HeightField Mesh 这样的替代技术。使用 Modeling Tools Editor Mode 建模插件解决静态的置换问题，其工具面板 Deform -> Displace 提供了贴图置换功能。

- 启用 VirtualHeightfieldMesh 插件；
- 

*Snow_Mat* 材质中，使用 *WorldPosition* 获取雪地中像素坐标，并计算与玩家当前的坐标差值。因为 SceneCapture 组件放置在地下向上拍摄的视角，所以获取到的像素坐标需要进行反转以匹配 RenderTarget 的像素坐标。注意，摄像机的画面坐标是 X 竖直向上，Y 轴水平向左，朝向 Z 轴正方向，这各视图的坐标系统是一致的。但是玩家的角度是顶视图，所以顶底翻转方向后，X 轴翻转 180°。

翻转后的坐标下步处理就是将以世界中心坐标的 (0, 0) 像素坐标转换到 UV 坐标系，按渲染目标的尺寸居中，这就需要将坐标和 ShowMVC 接收到 Size 的一半相加。在使用 *MaskUV* 自定义材质函数过滤前，

这里面对齐 UV 坐标是比较麻烦的部分，因为 RenderTarget 尺寸有限，只能用来显示玩家当前的活动区域的足迹。当玩家活动范围超过其尺寸，就以最后可覆盖的区域为准，截断超出范围的部分。这样就需要对纹理的 UV 坐标进行动态更新，以和玩家的位置一致。工程中，还使用了自定义了材质函数*MaskUV*，用来，其内部使用了 *Custom* 编写自定义材质表达，使用 *FunctionInput* 接收一个向量输入：

```js
if (UV.x < 0 || UV.x > 1 || UV.y < 0 || UV.y > 1)
{
    return 0;
}

return 1;
```

在*RenderTarget_BP*同定义的 *MoveRT* 作用就是用来将玩家的足迹活动转换到 RenderTarget 尺寸范围。

其内部还定义了一个蓝图宏，*SnapPixelToGrid*，主要是使用数学表达式 Math Expression，将输入的玩家坐标 (PlayerX, PlayerY) 转换为规范值，以实现附着：

    ((vector((floor((PlayerX / PixelWorldSize))), (floor((PlayerY / PixelWorldSize))), 0)) + 0.500000) * PixelWorldSize

输入参数 PixelWorldSize 就是将 SceneCaptureComponent2D 组件的 OrthoWidth 投影宽度细分为 256 格子，坐标就附着在这些格子的中间，逐个格子移动纹理坐标。

处理后的坐标会传递到材质参数集体，以供*Snow_Mat*材质使用，并使用 `AddActorWorldOffset` 方法更新 RenderTarget_BP 本身的坐标。


## ⚡ Distance Field 距离场
- Mesh Distance Fields https://docs.unrealengine.com/4.27/zh-CN/BuildingWorlds/LightingAndShadows/MeshDistanceFields
- Distance Functions - Inigo Quilez https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm

虚幻引擎 4 使用距离场（Distance Fields）的强大功能来实现游戏中静态网格体 Actor 的动态环境光遮蔽和阴影。除此之外，Actor 的网格体距离场表达还可用于其他一些特性，例如 GPU 粒子碰撞，甚至还可以使用材质编辑器创建动态流动贴图等等。

此技术中使用的距离场是代表静态网格体表面的有向距离场（Signed Distance Field），SDF 有 2D 和 3D 的区别，它的定义非常简单：每个像素（体素）记录自己与距离自己最近物体之间的距离，如果在物体内，则距离为负，正好在物体边界上则为 0。有向距离场在每个点将距离最近表面的距离保存到体积纹理中。网格体外的每个点保存的距离为正值，网格体内的每个点保存的距离为负值。

SDF 首个实用属性的作用是，在追踪光线时安全地跳过空白空间，因为到最近表面的距离已经明确（有时称这种方法为球体追踪）。只需区区几步就可以判定出交叉点。对距离场进行光线追踪将生成可见性效果， 也就是说如果光线和网格体交叉，光线就会投射出阴影。

距离场第二个实用属性的作用是，在追踪光线时，通过追踪经过遮挡物的距离最近的光线就可以计算出近似的锥体交叉点，而不产生额外成本。这种近似法可以利用距离场来实现非常柔和的区域阴影和天空遮蔽。这个属性是距离场环境光遮蔽的关键，因为少量的锥体即可为接收器点的整个半球计算出柔和的可见性。

SDF 的其它应用：

1. 高清文字（TMP）
2. 形变动画
3. 序列帧动画柔和过度
4. 碰撞检测
5. 软阴影
6. 环境遮蔽（AO）

开发游戏时，您可能发现有时动态照明是用于关卡的最佳选择，例如，可视距离很大的关卡或者具有大型开放世界场景的关卡。在这类情况下，预计算照明可能效率很低或对于目标系统的资源要求过高。距离场阴影（Distance Field Shadows），与配合定向光源使用的传统级联阴影贴图（Cascaded Shadow Map）CSM 相比，它使您能够在更远的距离投射阴影。

要为项目启用网格体距离场，请使用文件菜单打开项目设置生成网格体距离场：Project Settings -> Engine -> Rendering -> Lighting -> Generate Mesh Distance Fields。

重新启动项目时，你将在下角处看到以下弹出窗口，表示正在生成网格体距离场。完成后，你可以在视口查看网格体距离场：Show -> Visualize -> Mesh DistanceFields。

在场景放置光源，定向（Directional）、聚（Spot）或 点（Point）光源，在任意光源组件上启用距离场阴影的操作相同：Details -> Mobility 设置为可移动（Movable）或固定（Stationary）。并且 Distance Field Shadow 设置为启用。

开发游戏时，你可能主要依赖屏幕空间方法来提供动态环境光遮蔽（AO）乃至预计算照明，以使世界场景中的对象看起来更加真实。这些方法虽然有用但却存在局限性。屏幕空间环境光遮蔽（Screen Space Ambient Occlusion）仅限于使用场景深度的情况而且仅在可见屏幕空间中有效。预计算方法仅对世界场景中的静态对象有效，这意味着它们无法实时更新。距离场环境光遮蔽（Distance Field Ambient Occlusion）是一种全动态AO方法，它将网格体距离场（Mesh Distance Field）用于可移动静态网格体。它不仅可在动态照明的世界场景中使用，也可用于预计算照明。


依赖场景深度时，在游戏中的粒子碰撞会受到限制，仅可以将摄像机视图中可用的粒子用于碰撞。对于寿命较长的粒子或在大面积区域中使用的粒子，在某些角度，场景深度不是特别精确。如果在项目中使用网格体距离场（Mesh Distance Field），粒子的 碰撞模式 就可以使用整个场景进行碰撞，而非场景深度。

距离场碰撞模式提供的碰撞相较于场景深度更加可靠。但是，由于全局距离场（Global Distance Field）用于表示整个场景的较低分辨率，您可能会发现使用距离场碰撞模式时粒子会穿过较薄的对象或者尖角会变圆。作为分辨率降低的回报，距离场碰撞可以高效运行。其性能成本与场景深度碰撞差不多，但是却不受摄像机视图限制。距离场碰撞模式是一个 Shader Model 5（SM5）功能。在不支持SM5的硬件上，粒子碰撞会自动退回到使用场景深度碰撞。

为粒子设置距离场：

- 在内容浏览器中，找到并打开任意粒子系统（Particle System），如果不存在立即可用的粒子系统则新建一个。
- 双击已选择的粒子系统以打开级联粒子编辑器（Cascade Particle Editor）。
- 在发射器面板空白的地方右键单击，创建 Type Data -> New GPU Sprites。
- 再次在空白的地方右键单击，然后从模块列表中选择 Collision -> Collision(Scene Depth)。
- 选择 Collision (Scene Depth) -> Details -> Collision Mode 旁边的下拉菜单，设置为 Distance Field。


如果游戏针对间接光照区域使用预计算照明，混合可移动对象可能会非常具有挑战性，因为它们不会拥有柔和区域阴影。有时需要模拟这种类型的效果，以使用复杂材质设置乃至贴花将动态对象与场景的其他部分混合起来。*距离场间接阴影*（Distance Field Indirect Shadows） DFIS 使你能够为用于间接光照区域中的区域阴影的单个静态网格体生成网格体距离场。在这些区域中，传统的阴影贴图方法表现不佳。

距离场间接阴影的工作原理与用于骨架网格体的胶囊体阴影的相似，都是使用在照明构建过程中生成的预计算照明样本。这些照明样本使用体积光照贴图来确定间接照明的方向性和强度。

在静态网格体编辑器（Static Mesh Editor）中设置距离场间接阴影；

- 双击任意静态网格体，打开网格编辑器，例如，可以使用来自太阳神庙 Sun Temple 项目的雕塑 *SM_Statue*。
- 启用 Details -> Static Mesh Settings -> Generate Mesh Distance Fields。
- 从内容浏览器选择 *SM_Statue* 网格体并将它拖动到关卡视口中，在其中，你会留意到该静态网格体没有阴影。
- 在关卡中选中该 Actor 之后，设置 Details -> Mobility 为 Movable。
- 并且启用 Lighting -> Distance Field Indirect Shadow。
- 如果场景尚未进行照明构建，使用主工具栏构建按钮来为场景构建照明。



# 🌟 Niagara VFX
- Niagara VFX 视觉效果系统 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Niagara/
- Niagara 快速入门 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/Niagara/QuickStart/

Cascade 和 Niagara 都可用于在虚幻引擎(UE4)内创建视觉效果(VFX)，但从创建和调整 VFX 的方式来看，它们有很大不同。

Niagara 是虚幻引擎的次世代 VFX 系统，技术美术师能够自行创建额外功能，而无需程序员的协助。系统设计得具有更高适应性和灵活性，同时使其易用、易理解。

Cascade 是虚幻引擎使用多年的 VFX 系统，优点如下：

- Cascade 可快速添加行为，模块层、堆栈和交互之间配合极佳。
- 非技术类的美术师也能灵活控制，并使用一套通用行为。
- 堆栈范式则提供了大量信息，且一目了然。

但 Cascade 也存在一些缺陷：

- Cascade 功能固定。只有程序员才能更改、添加或移除功能。
- 向系统添加内容会使粒子有效荷载飙升。
- 粒子系统和引擎其余部分之间几乎无法实现数据共享。
- 事件有限且较为繁琐。
- CPU模拟和GPU模拟差异很大。

新 VFX 系统的目标是：

- 美术师可全权掌控效果。
- 各轴均可编程、可自定义。
- 提供更好的调试、显示和性能工具。
- 支持来自虚幻引擎 4 其他部分或外部源的数据。
- 不妨碍用户操作。

Niagara VFX 系统共有四大核心组件：

- Systems 系统
- Emitters 发射器
- Modules 模块
- Parameters 参数

Niagara 系统包含多个发射器，结合后可产生一种效果。例如制作烟花效果，可能需要多次爆发。为此需创建多个发射器，并放置在名为 Firework 的 Niagara 系统中。 在 Niagara 系统编辑器中，可在系统中修改或覆盖发射器或模块内的任何内容。系统编辑器中的时间轴（Timeline）面板将显示系统包含的发射器，并可用于管理此类发射器。 发射器编辑器和系统编辑器大致相同。

Niagara 发射器包含模块。其用途单一，但可重复使用。Niagara 发射器的一大独特之处在于，可使用模块堆栈创建模拟，并在同一发射器中以多种方式进行渲染。继续以烟花效果为例，可创建一个发射器，其中包含用于火花的 sprite 渲染器，和用于火花之后流光效果的条带渲染器。 

Niagara 模块等同于 Cascade 的行为。模块将与一般数据通信、封装行为，与其他模块堆栈，并写入函数。 使用高级着色语言（HLSL）编译模块，但可用节点在图表中进行可视化编译。可创建函数，包括输入，或写入到值或参数图。甚至可使用图表中的 CustomHLSL 节点写入 HLSL 内联代码。

参数是 Niagara 模拟中的数据的抽象表现，共有四种参数：

- 图元（Primitive）：此类参数定义不同精度和通道宽度的数值数据。
- 枚举（Enum）：此类参数定义一组固定的指定值，并取其中一个指定值。
- 结构体（Struct）：此类参数定义一组图元和枚举类型的组合。
- 数据接口（Data Interfaces）：此类参数定义从外部数据源中提供数据的函数。此可为UE4其他部分中的数据，或外部应用程序中的数据。

Niagara 中的粒子模拟采用堆栈的形式运行。模拟从堆栈顶部流向底部，依次执行名为模块的可编程代码块。重要的是，每个模块都会被分配到一个分组中，该分组会描述该模块的执行时间。

例如，初始化粒子的模块或粒子生成时起作用的模块位于粒子生成组中。

每个组中都有多个阶段，会在一个系统的生命周期内的特定时间点上调用它们。 发射器、系统和粒子都默认具有生成和更新阶段。生成阶段会在组存在的第一帧内被触发。

例如，系统会在关卡内首次实例化并被激活时触发其生成阶段。粒子会在发射器发射粒子时触发其生成阶段，在每个新粒子被创建出来时将执行生成指令。更新阶段会在系统、发射器或粒子被激活的每一帧中触发。

此外还有其他高级阶段，如事件和模拟阶段。它们可以被添加到生成和更新流程中。每当粒子生成一个新事件，并设置一个发射器去处理该事件时，就会触发 事件。如果有可能，事件句柄阶段会发生在同一帧中，但位于发起事件之后。模拟阶段 是一个高级GPU功能。该功能可让一个序列中发生多个生成和更新阶段，对于构建流体模拟之类的复杂结构非常有用。

创建发射器时，你需要将模块放入堆栈，以便定义外观效果以及要采取的操作等。在 发射器生成（Emitter Spawn） 组中，放置的模块用于定义发射器首次生成时的效果。在 发射器更新（Emitter Update） 组中，放置的模块用于随时间持续影响发射器。在 粒子生成（Particle Spawn） 组中，放置的模块用于定义发射器中生成粒子时的效果。在 粒子更新（Particle Update） 组中，放置的模块用于随时间持续影响粒子。在 事件处理函数（Event Handlers） 组中，你可以在一个或多个用于定义特定数据的发射器中创建"生成"事件。然后你可以在其他发射器中创建监听事件，这些发射器会根据生成的事件触发特定行为。

你可以将各个单独的发射器组成一个系统，从而合力表现出你想要的整体视觉效果。有些模块是特定于系统的；当你编辑系统而非发射器时，编辑器的部分元素会展现出不同行为。在Niagara编辑器中编辑系统时，你可以更改或覆盖包含在系统中的发射器的模块。你还可利用Niagara编辑器的时间轴（Timeline）面板来管理系统中所包含的发射器的计时。

以玩家角色的脚部附近踩踏引起的粉尘效果为例，使用 Niagara 系统前，请在材质编辑器中完成以下设置：

- 选中主要材质节点后，设置 Details -> Material -> Blend Mode 为半透明（*Translucent*），并勾选双面（*Two Sided*）复选框，将其他设置保留为默认。
- 通过图表空白区右键菜单，添加粒子颜色 Particle -> Particle Color，并将节点的顶部输出插入到主材质节点上的底色（Base Color） 输入。
- 创建 Texture Sample 节点，设置纹理 Details  -> Material Expression Texture Base -> Texture，从下拉列表搜索噪点（Noise），选择 *T_Perlin_Noise_M* 纹理。
- 创建 Value Step 节点，连接 Texture Sample 节点的 R 输出到梯度（*Gradient*）输入。
- 创建 Dynamic Parameter 节点，设置参数数组 Details -> Material Expression Dynamic Parameter，指定数组 0 元素的名称为 *Erode*。
- 并动态参数节点的 *Erode* 连接到 Value Step 节点的遮罩偏移值（*Mask Offset Value*）输入。
- 将 Value Step 节点的结果（*Results*）连接到主材质节点的不透明度（*Opacity*）输入。
- 点击应用（Apply）和保存（Save），然后关闭材质编辑器（Material Editor）。

接下来将创建 Niagara 系统，与 Cascade 不同，Niagara 中的发射器和系统相互独立。目前推荐的工作流程是从现有发射器或发射器模板创建系统。

- 首先，在内容浏览器创建（Niagara System），选择 Show -> FX -> Niagara System 打开向导。
- 选择 New system from selected emitters。
- 在模板（Template）中，选择（Simple Sprite Burst）。点击加号图标（+），将发射器添加到要添加到系统的发射器列表中。
- 添加发射器并完成，将系统命名为 *FX_FootstepDustPoof*，双击打开 Niagara Editor。
- 将新系统中发射器实例的默认名 SimpleSpriteBurst 修改为 *FX_DustPoof*，在系统总览中点击发射器实例的名称，其将变为可编辑。
- 除非在渲染器中设置网格体和材质，否则在预览中看不到任何内容。
- 在 System Overview 图表中选择渲染器（Render），它会在（Selection）面板中打开。
- 点击垃圾桶图标，删除（*Sprite Renderer*），点击加号（+）图标添加网格体渲染器（*Mesh Renderer*）。
- 点击粒子网格体（*Particle Mesh*）旁边的下拉列表，然后选择一个用于粒子效果的网格体。
- 启用覆盖材质（Override Materials），点击加号（+）图标添加数组元素。点击（Explicit Material）旁边的下拉列表，然后选择在前面创建的材质。
- 设置（Facing Mode）为（*Velocity*）。
- 在内容浏览器中，将 Niagara 系统拖入关卡。将其放置在玩家角色的脚部附近，检查角色相关效果的大小和形状。

制作粒子效果时，最好将系统拖入关卡，这样你就能了解每项更改的效果并在情境中编辑。

完成以上操作，就拥有了 Niagara 系统和发射器实例，并且已将系统拖入关卡（Level），以便在玩家角色（Player Character）旁边预览。在下一部分中，你将在 Niagara 系统中编辑设置，创建尘云效果。



现在要将此效果添加到角色的奔跑动画中，也可以用这些步骤将 Niagara 效果添加到虚幻引擎中的任意角色身上。

- 在内容浏览器中，导航到人体模型 Mannequin -> Animations。双击 ThirdPersonRun 动画，将其在动画编辑器中打开。
- 在动画时间轴（Animation timeline）中点击 Pause 可暂停循环动画。使用滑动指针找到角色右脚接触地面的瞬间，你需要在该位置添加尘土效果。
- 找到通知（Notifies），借助通知，你可以在动画上的某个位置进行标记，以便播放粒子效果。会看到一条位于时间轴拖动条下方的直线。右键点击该直线，然后选择 Add Notify -> Play Niagara Particle Effect。这样就能在动画中的该点位置上放置一个标记，并且带有默认标签 PlayNiagaraEffect。
- 选中 PlayNiagaraEffect，设置 Details -> Anim Notify，在此处选择要添加到动画中的 Niagara 系统。
- 点击 Niagara System 旁边的下拉菜单，然后选择在 Niagara 中创建的 FX_FootstepDustPoof 系统。通知上的标签更改为 FX_FootstepDustPoof。
- 选择 FX_FootstepDustPoof 系统，对左脚重复上述步骤。




# 🌟 Particle Systems 级联粒子系统
- 级联粒子系统 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/ParticleSystems/
- 数据分布类型 https://docs.unrealengine.com/4.27/zh-CN/Basics/Distributions
- 粒子系统参考 https://docs.unrealengine.com/4.27/zh-CN/RenderingAndGraphics/ParticleSystems/Reference/

虚幻引擎内包含了一套极为强大并健壮的粒子系统，让美术人员能够创建令人瞠目结舌的视觉特效，从烟雾、火星、火焰，到极其复杂的幻想中才有的效果。

虚幻的粒子系统由 Cascade Editor 来编辑，这是一个完全整合并模块化的粒子特效编辑器。级联为编辑特效提供了实时的反馈，能够让即便是非常复杂的特效，制作过程也变得更为快捷容易。

粒子系统也和每个粒子上使用的各种材质以及贴图紧密相关。粒子系统自身主要的功能是要控制粒子的行为，然后整体的看粒子系统最终的展现效果则通常取决于材质的做法。

粒子系统和级联粒子系统编辑器都是灵活并强大的，级联的主要的概念就是对粒子系统进行模块化的设计。

在一些其他软件的特效功能中，比如 Maya，一个粒子效果要创建的话需要先定义大部分行为的属性，然后用户再对这些属性进行修改来获得希望中的效果。

在级联粒子系统中，则是另外一种做法，一个粒子系统创建后只有很少的最基础的属性，以及一些行为模块。

每个模块代表了粒子行为的一个特定方面，并只对行为的该方面提供属性参数，比如颜色、生成的位置、移动行为、缩放行为，及其他等。用户可以在需要的时候添加或者删除一个模块，来进一步定义粒子的整体行为。由于这里的结果中只有必要的模块才会被添加进来，因此并没有额外的计算，也没有不需要的属性变量的参与。

最棒的是，模块可以很容易的被添加、删除、拷贝，甚至在一个粒子系统中从其他发射器实例化过来，一旦用户熟悉了有哪些可用的模块和它们的功能后，制作一个复杂的粒子系统也会变得非常容易。

有些模块在粒子发射器默认存在，包括两个默认的模块 Required & Spawn。当一个粒子系统的关键组件 Sprite Emitter 被添加到粒子系统中，以下几个默认模块都会随之创建：

- `Required` - 这里包含了一些属性，都是对粒子系统绝对需要用到的属性，比如粒子使用的材质，发射器发射粒子的时间，以及其他。
- `Spawn` - 这个模块控制粒子从发射器生成的速度，它们是否以 Burst 生成，以及其他和粒子发生时机有关的属性。
- `Lifetime` - 这里定义了每个粒子在生成后存在的时间，如果没有这个模块，粒子则会一直持续下去。
- `Initial Size` - 这里对粒子生成时的缩放比例进行控制。
- `Initial Velocity` - 这里对粒子生成时的移动进行控制。
- `Color Over Life` - 这个模块用于控制每个粒子的颜色在过程中如何改变。

其它可用于发射器上的粒子模块分为以下几种类别：

- `Acceleration` 用于处理粒子加速行为的模块，比如通过定义阻力等。
- `Attraction` 通过不同位置放置引力点来控制粒子移动的模块。
- `Camera` 用于管理如何在摄像机空间来移动粒子的模块，能够处理粒子是靠近还是远离摄像机。
- `Collision` 用于管理粒子如何和其他几何体碰撞的模块。
- `Color` 该分类模块用于改变粒子的颜色。
- `Event` 该分类模块控制粒子的事件触发，这可以用来在游戏中做各种响应。
- `Kill` 该分类模块用于处理单个粒子的删除行为。
- `Lifetime` 该分类模块用于处理粒子存在的时间。
- `Light` 这些模块管理粒子的光照特性。
- `Location` 这些模块定义了相对于发射器位置的粒子生成位置的信息。
- `Material` 这些模块定义了粒子上应用的材质信息。
- `Orbit` 这些模块能够定义屏幕空间的行为轨迹，为效果添加额外的运动特性。
- `Orientation` - 这些模块能够锁定粒子的旋转轴。
- `Parameter` 这些模块能够被参数化，可以使用外部系统来对粒子进行控制，比如蓝图和 Matinee。
- `Rotation` 这些模块用于控制粒子的旋转。
- `RotationRate` - 这些模块管理旋转速度的变化。
- `Size` 这些模块控制粒子的缩放行为。
- `Spawn` 这些模块用来给粒子生成速率添加额外定义，比如根据距离的改变来调整粒子的生成。
- `SubUV` 这些模块能够让粒子使用序列帧动画贴图数据。
- `Velocity` 这些模块处理每个粒子的移动速度。

粒子光源模块（Particle Light Module） 以使用附加到各个粒子的光源来渲染 CPU Particle Emitters。这对火花或火焰等特效很有用，在这种情况下它可以发出足够的光，在周围环境中引人注目。

设置粒子光源时的一般策略是，设置极少的大粒子光源以及大量的小粒子光源。请务必使用 ProfileGPU 控制台命令进行微调和描画，因为粒子光源的成本很容易失控。

请记住：光源模块 Light 仅可用于 CPU 粒子上，因此任何 GPU 粒子都无法使用该模块。将模块添加到GPU发射器不会破坏系统，但是它不会执行任何操作，并且在列表中模块上方会显示一个巨大的红色 X。

在使用级联制作粒子效果的时候，需要始终记住每个对象之间的互相作用关系。总的来说，粒子系统的组件包括模块、发射器、粒子系统，以及发射器 Actor。可以用以下描述来记住这些概念之间的关系：

- `Modules`，模块定义粒子的行为，并且被放置在一个发射器中。
- `Emitters`，为展示效果发射特定行为的粒子，任意个发射器可以被同时放置在一个粒子系统内。
- `Particle System`，粒子系统作为内容浏览器中的一个资源，可以被一个发射器 Actor 来引用。
- `Emitter Actor`，是一个放置在关卡中的东西，用于定义粒子在场景中如何使用。

Particle System 是一个包含任何数量 Particle Emitters 的完整粒子特效。在一个系统中应用多个发射器后，设计师可以创建出精美细致的粒子特效，并存放于单个系统中。使用级联完成创建后，即可将 Particle System 置于关卡中或创建于脚本中。


在使用粒子模块工作的时候要对两个概念有所了解：

- `Initial` 初始状态的模块一般用于管理粒子被生成那一刻的各方面属性。
- `Over Life` or `Per Life`，生命周期或者每次生命的模块是为了对粒子的生命过程中对它们的属性进行修改的方面。

比如，初始颜色的模块能够为粒子生成那一刻指定颜色属性，而生命周期颜色 的属性则是用于在粒子生成后，直到被消亡前的这段过程中逐渐修改颜色的行为。

如果将一个属性设置为 distribution 的类型，那么它就会在时间过程上发生变化，有些模块使用相对时间，而有些模块使用绝对时间。

- 绝对时间基本上就是外部发射器的计时。如果发射器的设置是每个循环 2 秒，一个三次循环，那么在这个发射器内的模块的绝对时间将是从 0 到 2，会运行 3 遍。
- 相对时间在 0 到 1 之间，表示每个粒子在生命周期中的时间。


当使用粒子系统时，了解运算的次序也是很重要的。在级联编辑器中，列表区域的每列都代表了一个发射器，一列中的每个块代表一个模块。

运算时的次序如下：

- 发射器的运算是根据发射器的列表从左往右的。
- 模块的计算按照堆栈列表从上到下的。

所有发射器默认都是面片发射器 Sprite Emitters，添加不同的发射器类型数据模块，即可以改变发射器的类型：

- `Sprite Emitters` - 这是发射器的基本类型，也是用的最广泛的类型。使用始终朝向摄像机的多边形化的面片（2 个多变形组成）作为单个粒子发射。可以用来做烟雾、火焰特效，以及其他各种种类的效果。
- `AnimTrail Data` - 用于创建动画的拖尾效果。
- `Beam Data` - 用于创建光束效果，比如镭射光、闪电等类似的效果。
- `GPU Sprites` - 这是特殊类型的粒子，在运行时大量计算交给 GPU 执行。这将 CPU 的粒子特效计算从几千的数量级提高到 GPU 计算特效的几十万的数量级，取决于具体的目标系统上 GPU 的类型。
- `Mesh Data` - 不再发射一系列的面片，这个类型的发射器将会发射多边形模型。用于创建岩石块，废墟等类似的效果。
- `Ribbon Data` - 这个会产生一串粒子附属到一个点上，能在一个移动的发射器后形成一个色带。

Distribution 是一组数据类型，以特殊的方式处理数据，比如为一个数值应用一个范围，或者使用曲线来对数值做插值操作。如果粒子系统需要任何随机属性，或者粒子需要随着时间进行变化时，就需要使用一个 distribution 来控制属性。

在级联中的很多模块的属性中都可以看到使用了各种不同的 distribution。属性的实际数值就是通过 distribution 来设置的。

有 5 种主要的 distribution 类型：

- Constant - 这表示一个静态不变的常量。
- Uniform - 一个 Uniform Distribution 提供了一个最小值和一个最大值，输出这两个值之间（包含这两个值）的随机数值。
- Constant Curve - Constant Curve 提供了一个数值的简单曲线。在这个类型下，时间通常是指一个粒子从生成的消失的过程，或者说是粒子的起始时间和结束时间。
- Uniform Curve - Uniform Curve Distribution 提供了最小曲线和最大曲线，最终数值在这两个曲线中间来选取。
- Parameter - 这种类型的 Distribution 使得该属性参数化，以便于它能够被外部系统，诸如蓝图、Matinee 或者其他系统读取或改写。

细节级别 Level of Detail（LOD）是特效师的福音，利用它可以创建出根据玩家距离高效利用屏幕空间的粒子特效。

例如篝火粒子系统，可能包含以下几种发射器：

- 火焰内焰
- 火焰外焰
- 内焰辉光
- 火星和灰烬
- 一层或多层烟雾

近距离观察时，系统的所有元素都应该表现出特有的外观。而当玩家走远时，系统占用屏幕的空间变少，它可能就只能显示几个像素，而没有具体的细节。

在这种情况下，粒子系统的一些方面将会变得十分小（小于一个像素）而无需进行渲染，如灰烬。然而，这些粒子仍然被计算和处理。LOD 就可以大显身手了。它可使粒子系统基于距离进行简化，（在玩家距离过远而欣赏不到特效时）将系统中的发射器和模块将设置关闭，或完全关闭。

除效率之外，GPU 粒子最有趣的特性是向量场，向量场是一个由影响粒子运动的向量组成的统一网格。它们是动态的，可以在任何时候移动。当粒子进入向量场的边界时，粒子的运动将受到向量场的影响，当粒子离开边界时，向量场的影响将消失。

- 整体向量场（`Global Vector Fields`）放置在关卡中，可以影响任何带有整体向量场模块的粒子系统，但是需要配合向量场体积使用，并且需要将适当的向量场资源与之关联。
- 局部向量场（`Local Vector Fields`）完全存在于粒子系统中，这意味着，局部向量场只能影响它们被指定给的粒子发射器。
- 向量场体积（`Vector Field Volume`）不是传统意义上的体积，可以对场进行定位、旋转和缩放。

默认情况下，向量场会对其中的粒子施力。向量场还有一个"紧密度"参数。此参数控制粒子如何直接跟随场中的向量。当紧密度设置为1时，粒子直接从场中读取其速度，从而准确地跟随场。

静态向量场是向量网格永不改变的场。这些场可以从Maya导出并作为体积纹理导入。静态场资源占用低，可以用来向粒子添加有趣的运动，特别是通过对场本身的运动设置动画。

此外，还可以从二维图像重新构建向量场。在这种情况下，可以导入一个非常类似于法线贴图的图像，通过挤压它或将其围绕体积旋转来重新构建体积纹理。在此重新构建的基础上，可以添加一个静态向量场，引入一些噪点和随机性。此外，可以通过在图谱纹理中存储单独的帧来对2D图像设置动画。这样做让您可以离线执行流体模拟，并以极低的成本实时重新构建运动。
