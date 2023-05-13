
# 🥚 UPBGE - Blender 游戏引擎继承者
Armory3D 🆚 UPBGE https://github.com/rpaladin/armory3d-vs-upbge/
UPBGE Current Manual https://upbge.org/#/documentation/docs/latest/manual/index.html
Developer & User Docs https://github.com/UPBGE/upbge/wiki
UPBGE 0.30 on Blender 3.0 https://github.com/UPBGE/upbge/releases
UPBGE 0.3+ + Blender 3.6 Python API https://upbge.org/#/documentation/docs/latest/api/index.html

UPBGE 作为 Bledner BGE 引擎的继承者，直接基于 Blender 源代码开发，集成度更高。

Armory3D 开发团队自从 ArmoryPaint 工具获 EPIC Games 大奖后，重心似乎也偏向它了：

```sh
    git clone --recurse-submodules git@github.com:armory3d/armortools.git

    # Updating cloned repository
    git pull origin main
    git submodule update --init --recursive
    # Delete `armorpaint/build` directory if present
```

简而言之：

1. Armory3D 基于 Haxe 语言和 Kha 底层 HAL 硬件抽象层实现跨平台！
2. UPBGE 与 Blender 一体，Python 加逻辑节点编程，所见即所得，Grease Pencil，支持的！

Armory3D 使用 Armory2D + Zui 制作用户界面。UPBGE 有 Game GUI (bgui) 模块，需要另行安装。
UPBGE + Blender 完全融合根本不需要这样的工具，直接使用场景建模、蜡笔绘画都是可以直接使用的工具，
再有 UPBGE 提供的逻辑节点编程工具。或者直接使用 Python 组件扩展，甚至是 C/C++ 开发扩展库。

UPBGE 开发中有些不太便利的功能，就是看一个脚本组件却无法直接了解到它会被挂载到哪个对象上。
通过 Game object 属性面板中查看脚本组件时，只能看到组件名称，如果组件命名不规范，那么也
可能找不到相应的脚本，因为不能直接修改或编辑。所以，脚本起名就是个考验，不要让自己在场景中迷失。
如果脚本有更新，那么还需要在已经挂载的对象上刷新脚本内容，否则依然使用旧的代码实现的功能，
即使重新打开工程也一样不会自动更新。

下载安装 UPBGE 并运行，``Edit -> Preferences -> Add-ons`` 启用以下以下插件：

#. Game Engine: `Logic Nodes` 逻辑节点编辑器。
#. Game Engine: `Easy Online` 多人连网游戏插件。
#. Improt-Export: `Save As Game Engine Runtime` 游戏项目导出。

The *Logic Nodes* add-on cames pre-installed in UPBGE 0.3+.

导出独立程序：File --> Export --> Save As Game Engine Runtime

`Easy Online` 会向脚本编辑器复制两个脚本 serevr.py 和 client.py，以及一个说明文档。

    > tree.exe -f addons\bge_easyonline
    |-- addons\bge_easyonline\__init__.py
    |-- addons\bge_easyonline\Readme.md
    |-- addons\bge_easyonline\client.py
    `-- addons\bge_easyonline\server.py

注意：在 UPBGE 程序崩溃后，插件可能被自动禁用，这会导致逻辑节点出现 Undefined 的节点和插槽。


UPBGE 有三大编程工具，选择 Blender 场景中的对象就可以添加这些设置：

1. Logic Bricks 逻辑砖，如其名，提供了一套现成的逻辑供调用，逻辑砖有三类，依次连接起来使用：
    1. **传感器** 用来接收硬件输入、或抽象信号产生游戏控制流。 sensors/index.rst
    2. **控制器** 用来做逻辑判定，满足逻辑条件就调用执行器节点。 controllers/index.rst
    3. **执行器** 通过控制器触发执行特定的操作，比如移动几何体。 actuators/index.rst
2. Logic Nodes 逻辑节点编程工具。
3. Python Components 编写脚本组件扩展游戏引擎中的逻辑，**args** 参数列表添加面板选项。

这三块内容可以互相转换，或者相互调用，除了 Logic Bricks 本身完全是导出 C++ 的接口内容，
Logic Nodes 是完全 Python 脚本实现的功能，而脚本组件则是基于 Blender Python API 环境
下的脚本开发，当然它们使用的类型基本上都是导出到脚本环境的由 UPBGE 源代码定义的类型。

除了这三块内容，还状态数据和游戏属性数据，Game Properites 是保存全局数据的一种方式，
可以在以下位置添加：

1. `Logic Bricks - Sibar - Properties -> Game Properites`
2. `Logic Nodes - Sibar - Dashboard -> Game Properites`
3. `Game Object Properties -> Game Properites`

游戏对象，Game objects，或者是 C/C++ 定义的 `KX_GameObject` 类型是整个游戏引擎的核心，
UPBGE 游戏编程构架将围绕**游戏对象**开展，场景中的几何体在脚本中就是 `KX_GameObject` 类型，
相机就是它的派生类型 `KX_GameObject` 类型等等，在开始深入引擎内部之间，非常有必要对引擎的
类型系统的设计有一个大概的印象。场景对象使用 objects 属性引用场景中所有的游戏对象，游戏对象
作为一个核心类型，它提供了大量 API 用于操作对象，如几何体变换、移动、旋转等，物理引擎方法等等。
游戏对象一个主要功能是作为数据结构类型，记录游戏中的各种物体的状态属性，这一功能将始终与以上
三大编程工具相结合。

UPBGE 编程环境中常用对象类型层次结构示意图，后续内容中再深入：

    |   .-----------------.
    +-->| KX_PythonProxy  |
    |   '-----------------'
    |     |   .-------------.
    |     +-->| SCA_IObject |
    |     |   '-------------'
    |     |     |   .---------------.
    |     |     `-->| KX_GameObject |---------.
    |     |         '---------------'         |   .-------------------.
    |     |   .--------------------.          +-->| BL_ArmatureObject |
    |     +-->| KX_PythonComponent |          |   '-------------------'
    |     |   '--------------------'          +-->| KX_Camera         |
    |     |   .-------------.                 |   '-------------------'
    |     `-->| KX_Scene    | (SCA_IScene)    +-->| KX_EmptyObject    |
    |         '-------------'                 |   '-------------------'
    |                                         +-->| KX_FontObject     |
    |   .-----------------.                   |   '-------------------'
    ·-->| SCA_ILogicBrick | (SG_QList)        +-->| KX_LightObject    |
        '-----------------'                   |   '-------------------'
                                              `-->| KX_NavMeshObject  |
                                                  '-------------------'

Logic Nodes 编辑器中侧栏面板 Globals 中可以添加全局数据字典，`Add Global Category` 即是
添加一个字典用于存储数据，配合 `Value -> Globals` 节点使用，`Python -> Dictonary` 字典
节点可以设置数据值，使用 `Init Empty` 还直接在节点中创建字典对象。

配合渲染器属性面板激活 `Game Debug -> Debug Properties` 可以在游戏窗口左上角显示属性数据。

游戏属性数据使用 5 类数据：

1. `Timer` 计时器对象存在时长，模拟时间（或帧时间），不是实际时间，帧率相同时两个时间才是相等。
2. `Float` 浮点数据，范围在 -10000.000 到 10000.000。
3. `Integer` 保存整数，范围在 -10000 到 10000，用于计算弹药等不需要小数的物品。
4. `String` 保存 128 个字符。
5. `Boolean` 保存``TRUE`` 和 ``FALSE`` 两个值。

有以下两种基本使用方式，通过 `GameObject["propname"]` 字典对象获取数据：

1. the `Property Sensor` (/manual/logic/sensors/types/property)
2. the `Property Actuator` (/manual/logic/actuators/types/property>

游戏中可以存在多个 `GameObject` 数据对象，在对应对象属性面板中设置。
`Game Object Properties -> Game Properites`

游戏中的每个 `GameObject` 可以存储控逻辑组件的集合（Logic Bricks），可以组合逻辑块来执行
用户定义的动作，这些动作决定游戏模拟的进度。


逻辑节点 `Logic Nodes` 是 Blender 内建的一套可以视化节点编排系统，Armory3D 和 UPBGE 都
基于这套系统开发了逻辑节点编程工具，UnrealEngine 蓝图 Blueprints 是同类可视化编程工具。
逻辑节点树设计好后，必需挂载到场景中的对象上运行，Logic Nodes 编辑器侧栏面板也可以进行设置：
`Administration -> Apply to Selected`，`Apply As` 指定挂载方式，点它击切换方式，
Logic Bricks 或 Python Component。

这两种方式都基于脚本，Logic Bricks 方式通过 Python 控制器加载生成的逻辑树脚本模块，脚本文件
位于 bgelogic 目录下，逻辑块会调用其中的 `pulse_network(controller)` 方法。

逻辑节点编程的基本思想是：控制流（事件）串连数据流节点，事件节点提供程序运行逻辑关系的组织信息，
数据节点提供了相关环节的数据读写功能。编译时，会在工程 `bgelogic` 目录下生成 Python 实现脚本。

事件流或控制流决定了节点在什么条件下可以被执行，所有节点的 `Condition` 条件输入端口都可以接收
控制流或事件流，也可以勾选激活端口，条件就设置为 True。

按以下几个个节点说明逻辑节点的基本使用流程：

1. On Init `GE_OnInit` 游戏运行初始化时，无条件地执行此事件。
2. On Update `ConditionOnUpdate` 持续触发执行。
3. On Next Tick `OnNextFrame` 将输入的触发条件延后一帧再触发。
4. Once `ConditionOnce` 单次触发，启用 `Repeat` 并达到延时复位时间即可以继承输入条件。
5. Print `ActionPrint` 打印信息到控制台，可以不连接控制流，勾选激活 `Condition` 端口即可。

UPBGE 和 Armory3D 的逻辑节点编程是两种不同的实现思维，后者有通过节点完成控制流连接关系的调用，
前者则是集中在节点树上执行求值方法来实现整个逻辑的执行，即是 LogicNetwork 的 `evaluate()`。
也是因为这样，逻辑树类形的求值方法变显得更复杂，远不及 Armory3D 逻辑节点树简洁明了。

求值函数需要对评估整个逻辑树挂载的节点，即各种 Cell 类型，其执行条件是否满足，是否要执行它，
调用它的求值方法以准备好状态数据，可潜在的下游节点使用。也因为这种实现思路，`ActionPrint`
这样的逻辑节点就不需要连接控制流，直接激活 `condition` 端口就表示其满足执行条件。

如果有需要，可以直接向 UPGBGE 脚本源代码中添加调试代码以了解背后到底发生了什么。比如，在某个
节点的配置方法中添加调试代码，查看一样当前逻辑树的类型以及所有者（GameObject）的类型信息：

```py,ignore
    # UPBGE-0.30-windows-x86_64\3.0\scripts\addons\bge_netlogic\uplogic\nodes.py
    class ParamOwnerObject(ParameterCell):
        # ...
        def setup(self, network):
            print('===setup===', network, type(network.get_owner()))
```

逻辑节点编辑器中编辑的就是逻辑树 Logic Tree，逻辑节点的连接关系构建整棵逻辑树。树的结构可以
嵌套执行，`Logic - Trees - Execute Logic Tree` 添加节点，并指定要执行的逻辑树。逻辑树
也是节点组，它们没有本质区别，可以在侧栏面板中将当前选中的节点打包为新的节点树：
`Sidebar -> Dashboard -> Tree Prefabs and Substress -> Pack Into New Tree`

面板中提供了一个 WASD 4 键运行的节点预置，Tree Prefabs，点击 `4 Key Movement` 即可以
自动按预置的节点连接添加到编辑器中。在其预置文件中可以查看所用节点信息，这些预置节点就是写好
固定的功能，例如 WASD 四个节点是 `NLKeyPressedCondition`，按什么键盘都写好了，不能修改，
除非是添加新的 `Key Down` 节点替换它们：

    > tree.exe -f upbge\3.0\scripts\addons\bge_netlogic
    |-- bge_netlogic\basicnodes
    |   |-- bge_netlogic\basicnodes\__init__.py
    |-- bge_netlogic\templates
    |   |-- bge_netlogic\templates\my_custom_cells.txt
    |   |-- bge_netlogic\templates\my_custom_nodes.txt
    |   `-- bge_netlogic\templates\prefabs
    |       `-- bge_netlogic\templates\prefabs\4keymovement.json


Blender 提供的节点编辑器最基础的两个组件就是：

1. `bpy.types.NodeSocket` 节点插槽基类；
2. `bpy.types.Node` 节点基类；

UPBGE 逻辑节点实现插件，bge_netlogic 插件代码主要分成四块：

- **uplogic** 逻辑节点运行时的实现。
- **basicnodes** 逻辑节点编辑器中节点 UI 的实现，最终子类属于 bpy.types.Node 或 NodeSocket。
- **nodeutils** 节点编辑器中的节点分类目录，使用了 `nodeitems_utils` 插件模块。
- **ops** 包括代码生成器，操作组件，bpy.types.Operator，对应逻辑节点编辑器中的按钮等 UI。

UI 实现与运行时实现，有此基本类型的对应关系：

1. ParameterCell -> NLConditionNode -> 参数化节点；
2. ActionCell    -> NLActionNode    -> 动作节点；
3. ConditionCell -> NLParameterNode -> 条件节点；

除了按在 3D View 按下快捷键 `P` 运行游戏，还可以在渲染器属性面板运行，并自动生成逻辑节点代码：
`Render -> Game Resolution -> Embedded Game` or `Standalone Game`

Logic Nodes 编辑器侧栏面板也可以操作逻辑节点代码生成：`Administration -> Compile All`，
或者点击 `Apply to Selected` 将逻辑节点树挂载到当前选中对象上，`Apply As` 指定挂载方式，
可以是 Logic Bricks 或 Python Component，点击切换方式。如果是挂载为脚本组件，就生成相应
脚本模块，模块名称使用节点树名称并且前缀 `LN_` 以表示逻辑节点树生成的脚本组件，Blender 脚本
编辑器的列表中可以查看。每个逻辑节点树挂载为脚本组件，对应创建一个和节点树同名的类型定义，比如
`NodeTree`，并且继承自 `bge.types.KX_PythonComponent`。

这两种方式都基于脚本，Logic Bricks 方式通过 Python 控制器加载生成的逻辑树脚本模块，脚本文件
位于 bgelogic 目录下，逻辑块会调用其中的 `pulse_network(controller)` 方法，与脚本组件
不同，不需要继承脚本组件基类。

两种挂载方式设置方式不一样，脚本组件方式挂载的逻辑树，脚本组件面板提供 `Only Run At Startup`
选项，要勾选它才表示在游戏开始时执行逻辑树。或者使用 `Execution Condition`，指定一个逻辑条件，
它就是一个字符串，相当于是逻辑树的 condition 条件输入端口。但是它需要经过一次映射转换，即读取
self.objcet 对应字段的值使用执行条件，参考 bgelogic 目录下的生成代码：

    def update(self):
        if self.consumed:
            return
        owner = self.object
        if self.condition:
            cond = owner[self.condition]
            if not cond: return

注意，因为作为脚本组件挂载，所以 self 指的就是 `KX_PythonComponent` 实例，object 即是
脚本组件的所有者，也就是组件所挂载的那个游戏对象，也就是场景中的对象。

注意，在 Apply As Logic Bricks 模式下编译才会生成外部脚本模块，如果是 Component 模式则
会内嵌在 Blender 文件，使用自带的脚本编辑器查看。

工程 `bgelogic` 目录下生成代码中的逻辑节点树并不是一个具体的类型，它只是一个 Python 脚本文件，
也是 Python 的脚本模块，这个模块中定义了：

1. 一个 `_initialize(owner)` 初始化函数；
2. 一个 `pulse_network(controller)` 控制器触发函数；


Logic Bricks 操作上和 Logic Nodes 基本没多大差别，都是节点之间的连接。

比如，`Keyboard` 和 `Always` 两个传感器连接到一个 `And` 控制器，用来触发一个 `Motion`
执行器，以实现对象的移动、旋转等等。尽管 `Always` 是执行活动中，但是因为 `And` 逻辑需要两个
传感器都活动时才会执行，所以只有在按下键盘动作配合才能执行后续逻辑块，换成 `Or` 则不需要键盘。

`Always` 作为一种持续激活状态的传感器，它没其它额外的选项，只继承了 `SCA_ISensor` 类型中
定义的最基本的传感器设置，如下：
https://upbge.org/docs/latest/manual/_images/logic-sensors-common-options.png
UPBGE-Docs\source\manual\logic\introduction.rst
UPBGE-Docs\source\manual\logic\properties.rst
UPBGE-Docs\source\manual\logic\states.rst
UPBGE-Docs\source\manual\logic\sensors\introduction.rst

1. **Pulse True Level** 正值脉冲模式，激活时输出的 `True` 状态才会发送给控制器；
2. **Pulse False Level** 负值脉冲模式，激活时输出的 `False` 状态才会发送给控制器；
3. **Skipped Ticks** 指定跳过多少个脉冲周期，0 表示不跳过任何脉冲，有信号就传递给控制器；
4. **Level** 触发模式：逻辑块内置状态机的状态改变时触发连接的控制器；
5. **Tap** 触发模式：在一帧后将传感器的状态更改为 negative 状态，即使传感器求值为 positive。
6. **Invert** 反转输出的状，`True` 和 `False` 反转为 `False` 和 `True` 输出；

传感器默认是 True 脉冲，比如，`Always` 激活 **Pulse True Level** 模式时就可以驱动控制器，
如果激活 **Invert** 反转输出，那么就需要激活 **Pulse False Level** 才能驱动控制器。

其中的 **Level** 和 **Tap** 是两种互斥的模式或者都不激活，是不同的控制器触发逻辑。Level，
也是状态数据的一种，当状态改变另一种状态，negative 与 positive，对应两种相反的状态，就如
True 与 False 对应。而 Tap 可以理解为滴水龙头，水滴未滴落的状态就是 positive，水滴掉落对应
negative，所以 Tap 模式下，状态总是在一帧后变为 negative。

Logic Ticks 和游戏运行的帧率等同，每帧就是一个逻辑时间周期，Skipped 多少逻辑周期，逻辑块就
跳过相应的触发机会。

以一个 `Keyboard` 传感器为例，在以上功能都不激活的情况下，按下按键、和释放按键，对应的是两个
触发控制器的机会，也就是控制器相应功能被执行，这种状态和激活了 Level 模式相同，因为键盘状态
改变就触发连接的控制器。Tap 模式激活后，那么键盘的释放动作就被忽略，释放对应 negative 状态。

如果只激活 **Pulse False Level** 负值脉冲模式，那么键盘没有按键时就会触发控制器执行，并且
会持续触发，因为此时键盘一直牌 negative 状态，控下按钮反而会停止触发。如果配合 Tap 模式，
那么就只会在按下按钮时触发。

如果只激活 **Pulse True Level** 正值脉冲模式，那么键盘按下时就会一直触发控制器执行，直到
释放按键。如果配合 Tap 模式，那么触发会更快速，因为 Tap 增加了触发脉冲。Pulse False Level
配合 Tap 模式的表现就完全不同。


Logic Bricks 编辑器界面分为三列，分别是：Sensors，Controllers、Actuators。
每一列默认都有现行，首行设置 Logic Bricks 显示过滤条件，第二行设置逻辑砖的显示状态：

- **Sel** 显示选中对象的上设置的 Logic Bricks；
- **Act** 显示选中对象的上设置的 Logic Bricks；
- **Link** 显示左右两侧有连接线的 Logic Bricks；
- **State** 显示连着处于活动状态的 Logic Bricks；

第一行弹出菜单相等点击逻辑砖左侧的箭头图标，用于展开、收起面板：

1. Show Objects 显示当前栏的 Logic Bricks 对象；
2. Hide Objects 隐藏当前栏的 Logic Bricks 对象，只显示场景对象对应的一个基本状态位设置；
3. Show Sensors/Controllers/Actuators 显示当前栏的 Logic Bricks 对象上的具体设置；
4. Hide Sensors/Controllers/Actuators 隐藏当前栏的 Logic Bricks 对象上的具体设置；

游戏中所有对象都有状态信息，比如走动、站立、攻击等等，控制器逻辑砖面板中最基本的也是控制器的
两种基本状态的数据面板 State Panel，可见性控制那个通道的控制器可见、有效：

- **Visible States** 提供 30 个状态位，设置 Controller 可见或不可见，游戏中是否生效；
- **Initial States** 提供 30 个状态位设置，激活其中的状态作为游戏开始的状态；

亮灰色方块表示不在活动状态，亮蓝色表示活动状态，Active，点击 `All` 按钮激活所有 30 个状态位。
按住 `Shift` 拖动可以快速切换相应位置的状态。方块内有圆点，表示此状态数据挂载了 Logic Bricks，
激活这个状态位就可以显示这些控制器。通过 **Controller visible at** 列表修改控制器所在通道。
控制器作为 `EXP_Value` 的子类型，当然也继承它的 name 属性，控制器类型列表左侧的文本框设置。

激活 i 信息图标，并且打开调试属性选项就可以在游戏运行时，在左上角显示状态信息。
`Render properties --> Game Debug panel --> Debug Properties checkbox`

要在相应栏添加 Logic Bricks，点击相应的 Add Sensors、Add Controller 或 Add Actuator。
鼠标在两个逻辑砖的插槽 Link socket 之间拖动完成两个 Logic Bricks 的连接。要切开连接：
按 `CTRL-RMB` 在连线上划过，切断连线。要删除逻辑砖，点击其右上角的 X 图标。也可以临时切换
启用状态（Active），或者执行优先级（Priority），还可以在多个逻辑砖之间调整先后执行顺序。

侧栏属性面板 *Add Game Property*  可以向游戏引擎添加属性定义保存相关数据。
`Properties` (manual/logic/properties).

侧栏面板 *Python Components* 区域用来添加脚本扩展组件，`Register Component` 或者
`Create Component`，这是 UPBGE 主要的编程手段。这是与逻辑节点、逻辑砖相互独立的模块，
可以将脚本模块挂载到模型对象上。
see `Python Components` (manual/python_components/introduction).

打开 Blender 脚本编辑器，可以从 `Templates - Python Component templates` 菜单找到
脚本组件模板，以供学习。


逻辑控制器除了常用的逻辑运算外，还可以使用两个特别的控制器，表达式和脚本模块：

1. **And**  逻辑与运算，输入条件同时为 `True` 时才执行 **Actuator**。
2. **Or**   逻辑或运算，输入条件只要有一个为 `True` 就运行 **Actuator**。
3. **Nand** 与非逻辑运算，Not And，输入条件只要有一个不为 `True` 就执行 **Actuator**。
4. **Nor**  或非逻辑运算，Not Or，输入条件全部为 `True` 才执行 **Actuator**。
5. **Xor**  异或逻辑运算⊕，eXclusive Or，当输入两条件相反时就执行 **Actuator**。
6. **Xnor** 同或逻辑运算，eXclusive Not Or，当输入两条件相同时就执行 **Actuator**。
7. **Expression** 只有在表达式求值结果为 `True` 时才执行 **Actuator**。
8. **Python** 脚本执行控制器，可以替代或与 **Actuator** 交互。

upbge-0.30\source\gameengine\GameLogic\SCA_PythonController.h
upbge-0.30\doc\python_api\rst\bge_types\bge.types.SCA_PythonController.rst
UPBGE-Docs\source\manual\logic\controllers\types\python.rst
UPBGE-Docs\source\manual\logic\controllers\types\expression.rst
https://www.howtogeek.com/wp-content/uploads/csit/2021/05/22e2d43d.png
How Logic Gates Work: OR, AND, XOR, NOR, NAND, XNOR, and NOT

XNOR Controller `SCA_XNORController`

    This controller gives a positive (``TRUE``) output when:

    - One (and only one) of its inputs is ``FALSE``, and
    - The object is in the designated State.

NAND Controller `SCA_NANDController`

    This controller *activates* all connected actuators if:

    - The game object is in the designated state.
    - At least one connected sensor triggers the controller.
    - At least one connected sensor evaluated False.

    This controller *deactivates* all connected actuators if:

    - The game object is in the designated state.
    - At least one connected sensor triggers the controller.
    - *All* connected sensor evaluated True.


求值表达式中可以使用变量、常量以及各种运算符号，还可以使用 sensors 名称和 Game Properties
设置的属性数据。比如 `3 > 2` (True) 或者 `1 AND 0` (False)。假设设置 Game Properties
`coins` 属性数据为数值 30。同时又有一个传感器名称为 `Key_Inserted`，其值为 `True`，那么
可以使用以下这样的表达式：

```py
    Key_Inserted And coins > 20
    if (Key_Inserted AND coins, False, True)
    if ((Key_Inserted AND coins) OR (coins > 20), True, False)
```

使用 **Python** 控制器就可以加载脚本模块，Python 脚本就是一个模块，它可以和 .blend 保存在
同级目录中，或者子目录中，也可以使用 Blender 内嵌的脚本。比如同级目录有 scripts/myscript.py
脚本定义了以下这样一个函数，那么就可以使用脚本控制器加载：`scripts.myscript.reload_me`，
这个点路径中，目录可以称之为包 package，脚本文件称为模块 module，函数或类型称为导入的符号。
控制器中导入的脚本，调用其函数时，会将当前的控制器作为参数传入。

``D`` (Use Debug) 选项可以激活持续加载脚本文件，使用最新修改的内容生效。

使用脚本控制器本身就可以实现任意执行器的功能，当然，也可以使用 `activate()` 和 `deactivate()`
等方法来调用执行器。所有与控制相连的传感器、执行器分别保存在相应的 sensors、actuators 集合中。
使用 Module 脚本模块方式，可以直接在模块方法参数接收到当前的控制器引用，如果是 Script 模式，
则需要使用 bge.logic.getCurrentController() 全局函数来获取当前控制器。

```py,ignore
from bge.types import *

def textRotation(controller: SCA_PythonController):
    if len(controller.actuators) > 0:
        actuator = controller.actuators[0]
        controller.activate(actuator)
```

导入外部脚本时，可以使用多级目录，但是在 Game Components 面板中创建脚本组件时就只能使用模块名
加符号名的组合形式。即使指定多级点路径，UPBGE 也只会按前面两部分创建相应的模块和脚本组件类型。
UPBGE-Docs\source\blends\Python_Scripting\001_reloadme\reload.py

```py,ignore
from bge import logic

""" this script will be re-load every frame.
Remember to save the file after you change-it. """
def reload_me(controller):
#    controller = logic.getCurrentController()
    own = controller.owner

    # edit the speed value and you will see the rotation changing
    # (try with values from 0.01 to 0.05)
    speed = 0.1
    print('steed', speed)
    # now try to comment and uncomment the following lines
    # adding or removing # from the begin of the line)
    own.applyRotation([0,0,speed],0)
```

如果使用 Script 模式，将使用 Blender 内嵌脚本，这时，整个脚本用作控制器来执行，而不是其中的函数。
这种执行方式下，需要借助 bge 模块出的各种功能与场景中的各种对象交互。使用全局函数 `globals()`
可以获取当前模块的全局符号表，通过返回的字典数据来观察属性是否存在。也可以使用内置函数 `dir()`
来打印对象的成员信息字典，使用 `type()` 获取类型信息。UPBGE 引擎的类型信息都在 `bge.types`
命名空间下，为了直接使用这些类型避免输入点路径，可以导入它们。

以下代码，假设逻辑块中已经给控制器连接了 Random 传感器和 Mouse 执行器等等，那么就可以使用脚本
控制器来获取这些相连接的逻辑块对象。未连接到控制器的逻辑块对象不会记录在 sensors 或 actuators
集合中。注意，使用下标访问 `sens['Random']` 在对象不存在时引发异常，而使用 `hasattr()`
方法不能判断集合中的元素，只能用于判断属性，应该使用 `get()` 查询集合：

```py,ignore
import bge
from bge.types import *

if not hasattr(bge, '__component__'):
    cont: SCA_PythonController = bge.logic.getCurrentController()
    sens: EXP_ListWrapper = cont.sensors
    actr: EXP_ListWrapper = cont.actuators
    print(cont, sens, actr)
    if sens.get('Random'): # hasattr(sens, 'Random') always return None
        random: SCA_RandomSensor = sens['Random']
        print(random.seed, random.lastDraw, type(random))
        #print(type(cont), type(cont.owner), type(sens), type(actr))
        #print(type(sens['Random']), type(actr['Mouse']))
    local: bool = False
    speedz: float = 0.2
    cont.owner.applyRotation([0,0,speedz], local)
```


## 🎨 UPBGE Python Scripting
- [Index All](file:///C:/HaxeToolkit/UPBGE-0.30-windows-x86_64/upbge-api-reference/genindex-all.html)
- [Module Index](file:///C:/HaxeToolkit/UPBGE-0.30-windows-x86_64/upbge-api-reference/py-modindex.html)

首先，UPBGE 编程环境就是一个 Blender Python API 环境，通过嵌入 Python 脚本引擎以及导出内部
类型接口到脚本环境，就可以通过 .py 脚本来调用 UPBGE 游戏引擎中的各种模块、类型对象。同时这又是
一个完整的 Python 解释器提供的运行环境，可以像在 Blender Python Console 那样执行脚本代码，
注意，Blender Python Console 中没有 bge 模块，这个模块是游戏运行时 C++ 代码导出的，只能在
游戏加载的脚本中使用。但是，可以通过设置 sys.path 中的目录列表，以加载其它模块：

```py
    import bpy # the module to interact with the Blender.
    import bge # the module to interact with the Blender Game Engine.

    >>> import sys
    >>> sys.version
    '3.9.7 (default, Oct 11 2021, 19:31:28) [MSC v.1916 64 bit (AMD64)]'
    >>> print("\n".join(sys.path))
```

    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\startup
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\modules
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\python39.zip
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\python\DLLs
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\python\lib
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\python\bin
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\python
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\python\lib\site-packages
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\freestyle\modules
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\addons\modules
    C:\Users\OCEAN\AppData\Roaming\UPBGE\Blender\3.0\scripts\addons\modules
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\addons
    C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\addons_contrib

C:\HaxeToolkit\UPBGE-0.30-windows-x86_64\3.0\scripts\addons\bge_netlogic\basicnodes\__init__.py
Python 3.5 引入了新的 @ 运算符，它与 numpy.dot() 等价，是矩阵乘法，向量点积。

了解 UPBGE 脚本编程环境，最基本的要求是熟练使用 Python 脚本编程，最好可以使用 C/C++ 开发
扩展模块。如果要开发联网对战游戏，则还需要熟悉 TCP/IP/UPD 等协议栈，或者是基于现有的 RPC
框架开发游戏客户端之间的远程调用功能。

其次，从制作的角度来看，如果不需要处理上游的工序，包括游戏概念设计、艺术设计、故事剧本、地形、
场景搭建、角色动画等等，单从功能出发，可能涉及到游戏的经济系统、数值系统、玩法系统的开发，这些都
需要对 UPBGE Python API 导出的模块功能非常熟悉，才可能根据需要开发出相应功能的最佳实现。

在编写脚本代码过程中，会经常用到一个混入编程模式，Mixins And Traits，所谓混入即：不通过
类继承这种约束关系实现调用其它类型功能代码，是一种代码复用编程方法，Mixins 或者 Traits
就是这样的一种类型实现。UPBGE 官方文档 Python Scripting 部分提供了一系列基础教程。
https://upbge.org/#/documentation/docs/latest/manual/manual/python/index.html

    According to a relevant Wikipedia article, a mixin is “a class that
    contains methods for use by other classes without having to be the
    parent class of those other classes”.

    Such a class is sometimes called a trait and often named as an
    adjective like Damageable or Openable to describe a specific aspect
    or characteristic of the target object.

Application Modules

- *bpy.context* [Context Access]
- *bpy.data* [Data Access]
- *bpy.msgbus* [Message Bus]
- *bpy.ops* [Operators]
- *bpy.types* [Types]
- *bpy.utils* [Utilities]
- *bpy.path* [Path Utilities]
- *bpy.app* [Application Data]
- *bpy.props* [Property Definitions]

Game Engine Modules

- *bge.types* [Game Types]
- *bge.logic* [Game Logic]
- *bge.render* [Rasterizer]
- *bge.texture* [Video Texture]
    - [FFmpeg Video and Image Status]
    - [Image Blending Modes]
- *bge.events* [Game Keys]
- *bge.constraints* [Physics Constraints]
- *bge.app* [Application Data]
- *bgui* [Game GUI]

Standalone Modules

- *bgl* [OpenGL Wrapper]
- *bl_math* [Additional Math Functions]
- *blf* [Font Drawing]
- *bmesh* [BMesh Module]
- *bpy_extras* [Extra Utilities]
- *freestyle* [Freestyle Module]
- *gpu* [GPU Module]
- *gpu_extras* [GPU Utilities]
- *idprop.types* [ID Property Access]
- *imbuf* [Image Buffer]
- *mathutils* [Math Types & Utilities]

导入模块时出错，并且可能导致挂载组件时失败也不给出提示信息，原因是 bgui 模块未提供默认安装，
可以在 Blender Python Console 中执行 pip 命令安装模块，以下命令会将控制台内容输出到日志，
并使用系统默认编辑器打开 log.md 文件：

```py
    # ModuleNotFoundError: No module named 'bgui'
    # Moguri/bgui: Python GUI library for the Blender Game …
    # https://github.com/Moguri/bgui
    >>> import os
    >>> os.system("pip install bui > log.md && start .\\log.md")
 ```

Python 模块手动安装，只需要将模块代码目录复制到 lib 目录下，模块初始化脚本位置应该如下所示：

    UPBGE-0.30-windows-x86_64\3.0\python\lib\bgui\__init__.py



UPBGE 通过 `Game Object Properties` 向场景所有对象提供三种脚本属性设置，以及逻辑节点编辑器
侧栏面板，也提供了一种全局数据存储功能：

1. `Game Objects` 继承自 `bge.types.KX_GameObject`，每对象挂载一个实例。
2. `Game Components` 继承自 `bge.types.KX_PythonComponent`，每对象挂载任意实例。
3. `Game Properties` 属性数据服务，来自 Blender 基础功能，每对象单独存储属性数据。
4. `GlobalDB` 逻辑节点树全局字典数据对象，在逻辑编辑器侧栏 Global 面板中添加的字典对象及数据。

游戏中的每个 `GameObject` 可以存储控逻辑组件的集合（Logic Bricks），可以组合逻辑块来执行
用户定义的动作，这些动作决定游戏模拟的进度。

可以像脚本组件一样在 Python 脚本文件（模块）中定义多个 `GameObject`，并且挂载到场景中不同的
对象上使用。但是每个对象只能挂载一个 `GameObject`，而不像脚本组件那样任意挂载多个组件。不同的
游戏对象应该派生具体的类型，例如挂载到 Camera 对象上的 GameObject，就应该继承 `KX_Camera`。

UPBGE 整个编程环境中，逻辑块和脚本组件，以及游戏对象的类型层次结构之间的关系摘要如下，另外，
逻辑节点编程模块基于 Python 脚本实现，另行分析：

    |   .-----------------.
    +-->| KX_PythonProxy  |
    |   '-----------------'
    |     |   .-------------.
    |     +-->| SCA_IObject |
    |     |   '-------------'
    |     |     |   .---------------.
    |     |     `-->| KX_GameObject |---------.
    |     |         '---------------'         |   .-------------------.
    |     |   .--------------------.          +-->| BL_ArmatureObject |
    |     +-->| KX_PythonComponent |          |   '-------------------'
    |     |   '--------------------'          +-->| KX_Camera         |
    |     |   .-------------.                 |   '-------------------'
    |     `-->| KX_Scene    | (SCA_IScene)    +-->| KX_EmptyObject    |
    |         '-------------'                 |   '-------------------'
    |                                         +-->| KX_FontObject     |
    |   .-----------------.                   |   '-------------------'
    ·-->| SCA_ILogicBrick | (SG_QList)        +-->| KX_LightObject    |
        '-----------------'                   |   '-------------------'
          |   .-----------------.             `-->| KX_NavMeshObject  |
          +-->| SCA_IActuator   |                 '-------------------'
          |   '-----------------'
          |     |   .---------------------.
          |     +-->| BL_ArmatureActuator |
          |     |   '---------------------'
          |     +-->| SCA_ActionActuator  |
          |     |   '---------------------'
          |     `-->| SCA_TrackToActuator |
          |         '---------------------'
          |   .-----------------.
          +-->| SCA_IController |
          |   '-----------------'
          |     |   .----------------------.
          |     `-->| SCA_PythonController |
          |         '----------------------'
          |   .-------------.
          `-->| SCA_ISensor |
              '-------------'

1. `SCA_IObject` 是场景中的对象类型的接口；
2. `KX_GameObject` 游戏对象，也就是场景中的对象，是场景中的对象类型的基类；
3. `KX_Scene` 代表整个游戏场景，objects 集合引用所有游戏对象，`EXP_ListValue<KX_GameObject>`；
4. `KX_PythonComponent` 脚本组件类型是游戏对象上挂载的脚本的类定义，通过 object 属性引用其所有者；
5. `SCA_ILogicBrick` 是逻辑块的基类接口，它继承了**重双向循环链接**数据结构用于处理节点连接关系；

之所以称为为 python component，是因为脚本中的功能会以 Blender UI 的方式显现在 Game Object
属性面板下的组件栏目中，所有 `args` 有序字典中保存的入口参数都会有相应的 UI 设置界面。

Properties 数据服务器 Blender 提供的一种基础服务，在各种面板上，可以使用右键复制、粘贴属性数据。
3D 视图对象模式可以通过 `Object -> Game` 菜单管理属性数据，`VIEW3D_MT_object_game(Menu)`。

    upbge-0.30\source\blender\blenkernel\BKE_property.h
    upbge-0.30\source\blender\editors\object\object_ops.c
    upbge-0.30\source\blender\editors\object\object_intern.h
    upbge-0.30\release\scripts\startup\bl_ui\space_view3d.py

    bpy.ops.object.game_property_clear()
    Remove all game properties from all selected objects

    bpy.ops.object.select_grouped(extend=False, type='CHILDREN_RECURSIVE')
    Select all visible objects grouped by various properties

可以对数据进行清理，一次操作删除对象上设置的 Game Properties 数据，`game_property_clear`
操作可以在多个源代码中，或者 bpy.ops.object API 文档找到相关的信息。


逻辑节点编辑器侧栏面板 Globals 可以添加全局字典对象，以存储数据供所有节点树使用。相关的设计时
节点实现有 5 个类型，其中两个为插槽实现类型，剩下 3 个是节点，归类在 `Value -> Global`。
所谓 Category 即一个全局的存储数据的 Dictionary 对象，这个字典对象存储在 `GlobalDB`。

使用 List Global Category 节点，可以读取 `GlobalDB` 对象上存储的数据。
使用 Get Property 节点，就可以指定要读取场景中那个对象上挂载的 Game Properties 数据。

除了使用脚本中的 `GlobalDB` 对象，还可以使用导出的 Python API 存储字典数据到文件：

```py
   bge.logic.globalDict["password"] = "kidding, kids never save your passwords in files!"
   bge.logic.saveGlobalDict() # save globalDict externally
   bge.logic.loadGlobalDict() # replace the current globalDict with the saved one
```

`Objects -> Properties` 分类下和属性数据相关的 9 逻辑节点类型，其中一个为插槽。

    0. NLGlobalCatSocket             (bpy.types.NodeSocket, NetLogicSocketType)
    0. NLGlobalPropSocket            (bpy.types.NodeSocket, NetLogicSocketType)
    1. NLActionListGlobalValues            (List Global Category, NLActionNode)
    2. NLActionSetGlobalValue                  (Set Global Value, NLActionNode)
    3. NLParameterGetGlobalValue            (Get Global Value, NLParameterNode)

    0. NLGamePropertySocket          (bpy.types.NodeSocket, NetLogicSocketType)
    1. NLAddToGameObjectGamePropertyActionNode  (Modify Property, NLActionNode)
    2. NLClampedModifyProperty          (Clamped Modify Property, NLActionNode)
    3. NLCopyPropertyFromObject                (Copy From Object, NLActionNode)
    4. NLGameObjectHasPropertyParameterNode     (Has Property, NLParameterNode)
    5. NLGameObjectPropertyParameterNode        (Get Property, NLParameterNode)
    6. NLObjectPropertyOperator            (Evaluate Property, NLConditionNode)
    7. NLSetGameObjectGamePropertyActionNode       (Set Property, NLActionNode)
    8. NLToggleGameObjectGamePropertyActionNode (Toggle Property, NLActionNode)


```py,ignore
    # upbge-0.30\release\scripts\templates_custom_objects\custom_object.py
    import bge
    from collections import OrderedDict

    class %Name%(bge.types.KX_GameObject):
        # Put your arguments here of the format ("key", default_value).
        # These values are exposed to the UI.
        args = OrderedDict([
        ])

        def start(self, args):
            # Put your initialization code here, args stores the values from the UI.
            # self.components refers to the list of Python components attached to this object.
            pass

        def update(self):
            # Put your code executed every logic step here.
            # self.components refers to the list of Python components attached to this object.
            pass


    # upbge-0.30\scripts\templates_py_components\python_component.py
    import bge
    from collections import OrderedDict

    class %Name%(bge.types.KX_PythonComponent):
        # Put your arguments here of the format ("key", default_value).
        # These values are exposed to the UI.
        args = OrderedDict([
        ])

        def start(self, args):
            # Put your initialization code here, args stores the values from the UI.
            # self.object is the owner object of this component.
            # self.object.scene is the main scene.
            pass

        def update(self):
            # Put your code executed every logic step here.
            # self.object is the owner object of this component.
            # self.object.scene is the main scene.
            pass
```

在使用上，`KX_GameObject` 和 `KX_PythonComponent` 对象导出的脚本接口是很类似的，同样的
参数结构，和执行方法。但是内部实现上，前者比后者复杂得多。脚本组件对象导出了一个 `object` 属性，
它引用当前脚本组件所挂载的对象，如场景中的 Cube。

控制器对象从个父类 `SCA_ILogicBrick` 继承了一个 `owner` 属性，引用一个当前调用这个控制器的
游戏对象 GameObject。因为一个控制器可以挂载到多个对象上，不同的控制器挂载到不同对像，所挂载的
游戏对象也不相同。

在脚本中导入模块、符号时，应避免 * 通配式加载所有子模块、符号，可能导致的命名空间污染问题。

组件保存所在的脚本中，还可以编写由 Logic Bricks - bge.types.SCA_IController 运行的代码，
这是两种不同的脚本运行方式。脚本组件由 Game Components 机制加载，可调用脚本内所有继承了
`KX_PythonComponent` 基类的类型对象。而通过逻辑块 Python 控制器运行，**Script** 模式下
则是直接运行整个脚本，或者 **Module** 模式下运行外部脚本文件中的控制器方法，其函数参数接收
一个控制器对象，即是当前调用控制器方法的 `SCA_IController`。

组件首次加载是在 bge 模块之前完成，此时bge 是一个伪模块，因为它只包 `KX_PythonComponent`
这个组件基类类型，也就是说，此时只导出了这个组件类型定义到 Python 脚本空间，以以避免 import
语句导入所有 bge 模块，此时只是加载过程中的一个阶段状态。源代码代码片段如下，`load_class()`
方法中只是导出了 `bge` 和 `bge.types` 模块符号，并没有实质性内容。此时设置了一个布尔值标识
`__component__`，可用于检测的 bge 的加载状态。但当用户想要使用 bge 模块中的其它函数或属性时，
检测此标记值，避免直接调用未加载的库函数产生一些问题。

另外，在脚本组件中，有些方法不能直接调用，比如只有在 Logic Bricks 下有效的当前控制器获取方法
就不能在脚本组件中直接调用，除非是在 python controllers namespace：

    SystemError: bge.logic.getCurrentController(), this function is being run
    outside the python controllers context, or blenders internal state is corrupt.

Blender 定义了一套 Python Proxy 函数，用来向脚本环境导入模块定义：

upbge-0.30\doc\python_api\rst\bge.logic.rst
upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_PythonComponent.rst
upbge-0.30\source\blender\blenkernel\intern\python_proxy.c

```cpp,ignore
  // Setup BGE fake module and submodule.
  sys_modules = PyImport_GetModuleDict();
  bgemod = PyModule_Create(&bge_module_def);
  bgesubmod = PyModule_Create(&bge_types_module_def);

#  define FT_DEF(Type) \
    PyType_Ready(&FT_##Type); \
    PyModule_AddObject(bgesubmod, STRINGIFY(Type), (PyObject *)&FT_##Type);

  FAKE_TYPES
#  undef FT_DEF

  PyDict_SetItemString(sys_modules, "bge", bgemod);
  PyDict_SetItemString(sys_modules, "bge.types", bgesubmod);
  PyDict_SetItemString(PyModule_GetDict(bgemod), "__component__", Py_True);
```

```py
# upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_PythonComponent.rst
# upbge-0.30\release\scripts\templates_py_components\utils_video.py
if not hasattr(bge, "__component__"):
    # Put shared definitions here executed only in game engine.
    # e.g:
    global scene
    scene = bge.logic.getCurrentScene()
    pass
```

打开 Blender 脚本编辑器，可以从 `Templates - Python Component templates` 菜单找到
脚本组件模板，以供学习。这些模板脚本涉及场景对象列表、音频播放、鼠标键盘输入、玩家控制器实现、
相机镜头控制、时间轴动画、Minimap 纹理、渲染器调用、物理载具、AI 跟踪等等，源代码文件列表如下：

    > tree.exe UPBGE-0.30-windows-x86_64\3.0\scripts\templates_py_components
    |-- scripts\templates_py_components\artificial_intelligence_object_chaser.py
    |-- scripts\templates_py_components\bpytypes.py
    |-- scripts\templates_py_components\character_controller_basic.py
    |-- scripts\templates_py_components\character_controller_complex.py
    |-- scripts\templates_py_components\character_controller_first_person_camera.py
    |-- scripts\templates_py_components\character_controller_simple_animator.py
    |-- scripts\templates_py_components\character_controller_third_person_camera.py
    |-- scripts\templates_py_components\python_component.py
    |-- scripts\templates_py_components\top_down_mouse_camera_drag.py
    |-- scripts\templates_py_components\top_down_mouse_point_and_click.py
    |-- scripts\templates_py_components\utils_minimap.py
    |-- scripts\templates_py_components\utils_sound_speaker.py
    |-- scripts\templates_py_components\utils_video.py
    |-- scripts\templates_py_components\vehicle_spaceship.py
    `-- scripts\templates_py_components\vehicle_wheeled.py

    0 directories, 15 files

其中 **Python Component** 模板就是一个脚本组件的最基本结构。**Bpytypes** 演示了 bpy 模块
所有的可用类型。

```py,ignore
    import bge, bpy
    from collections import OrderedDict

    class Bootstrap(bge.types.KX_PythonComponent):
        args = OrderedDict((
            ("myAction", bpy.types.Action),
            ("myArmature", bpy.types.Armature),
            ("myCamera", bpy.types.Camera),
            ("myCollection", bpy.types.Collection),
            ("myCurve", bpy.types.Curve),
            ("myImage", bpy.types.Image),
            ("myKey", bpy.types.Key),
            ("myLibrary", bpy.types.Library),
            ("myLight", bpy.types.Light),
            ("myMaterial", bpy.types.Material),
            ("myMesh", bpy.types.Mesh),
            ("myMovieClip", bpy.types.MovieClip),
            ("myNodeTree", bpy.types.NodeTree),
            ("myObject", bpy.types.Object),
            ("myParticle", bpy.types.ParticleSettings),
            ("mySound", bpy.types.Sound),
            ("mySpeaker", bpy.types.Speaker),
            ("myText", bpy.types.Text),
            ("myTexture", bpy.types.Texture),
            ("myVectorFont", bpy.types.VectorFont),
            ("myVolume", bpy.types.Volume),
            ("myWorld", bpy.types.World),
        ))

        def start(self, args: dict):
            self.myObject = None
            if "myObject" in args:
                print("myObject = ", args["myObject"])
                self.myObject = args["myObject"]
            else:
                print("myObject not found!")


        def update(self) -> None:

            if self.myObject:
                print(self.myObject.name)
```

Python 脚本组件就是代码复用的一种概念，也是定义 UPBGE 引擎中可能的一种类型定义，规则要求：

1. 需要继承自 `KX_PythonComponent` 类型定义；
2. 包含一个 Python 有序字典对象作为组件要传入的参数名称、类型等属性说明 **args**；
3. 两个基本方法：**start()** 和 **update()**；
4. 另外，还有一个可选方法，**dispose()** 用于移除组件回收内存时执行清理工作；

脚本组件按 Python 模块化组织，基本的命名规则是 `module.Component`，自行指定模块名和类名。
点击创建，Blender 脚本编辑器中有会出现相应的 `module.py` 模块脚本，可以保存为外部脚本文件。
UPBGE 提供了一个属性面板用来添加脚本组件：`Game Object Properties -> Game Component`
提供了两个方法创建脚本组件：**Add** 和 **Create**，对应两个按钮。

设置好参数列表后并挂载脚本组件后，`Game Components` 面板就会添加对应参数列表的面板设置选项。
在游戏运行时，`start()` 方法接收到的字典对象将包含这些来自属性面板配置过的参数值。

有序字典 OrderedDict 构造函数接收一个数组，元素类型是 Tuple，可以指定参数名称、默认值，
或者指针类型，像指定 `str` 这种字节串类型将触发异常：**Unsupported pointer type**。
Python-3.10.2\Doc\library\collections.rst

```python,ignore
   from bge import *
   from mathutils import *
   from collections import OrderedDict

   class Component(types.KX_PythonComponent):
   args = OrderedDict([
         ("Float", 58.6),
         ("Integer", 150),
         ("Boolean", True),
         ("String", "Cube"),
         ("Enum", {"Enum 1", "Enum 2", "Enum 3"}),
         ("Vector 2D", Vector((0.8, 0.7))),
         ("Vector 3D", Vector((0.4, 0.3, 0.1))),
         ("Vector 4D", Vector((0.5, 0.2, 0.9, 0.6)))
   ])

   def start(self, args):
      print(args)

   def update(self):
      pass
```


Blender 中编写的 Python 脚本模块有两种基本存储方式：

1. 默认方式为 .blend 文件内嵌： `Text Editor -> File -> Make Internal`
2. 外部脚本文件： `Text Editor -> File -> Save As...`

模块是 Python 脚本的基本组织方式，它可以保存在独立的文件中，也可以保存在某种数据库中。而脚本
模块只是 Python 众多支持模块中的一种，它还支持 C/C++ 编写的扩展模块等等。

比如，将 `module.py` 模块保存到 .blend 同级的 `scripts/module.py`，那么导入脚本模块
就应该使用 `script.module.Component` 这样的点路径。

使用外部脚本的一个好处是可以利用外部编程工具，如 VS Code/Sublime Text 等等，还可以使用
语言服务器 LSP 提供语法提示等辅助功能。

脚本组件命名使用大小写结合的驼峰拼写法（CamelCase），比如 `MypyComponent` 就会在面板中
显示为 `Mypy Componnet`，可以使用全小写，但是最好大写开头表示一个类型定义，而不是变量。

注意：有几个小问题，如果已经创建了脚本模块文件，不能通过点击 **Create** 往现有模块添加新组件，
会提示脚本模块已经存在。另外，不要使用二级占路径，UPBGE 不支持。模块名也不要与存在的目录同名，
否则创建模块后，提示模块没有相应的组件属性，但脚本模块依然会创建，只是不能正确使用：

    module 'xxx' has no attribute 'Component'

对于已经保存到外部文件的脚本，还可以使用 Blender 脚本编辑器重新找打开，但此时注意，外部脚本
模块文件和 Blender 内部脚本模块名称可以不一致，因为它们此时是两个不同的脚本模块。但是在执行
`Make Internal` 将脚本模块明确为内嵌模块之前，保存脚本内容还是保存会保存到外部脚本文件内。
挂载时组件时，依然可以使用文件目录路径作为 Python 模块的点路径，同时又可以挂载内嵌模块。

如果脚本文件有语法错误，则加载时会提示，应该打开 Window -> Console 查看控制台输出信息：

    No mudules named "script.module" or script error at loading.

`Game Object Properties -> Game Object` 面板可以创建游戏数据对象，可以和脚本组件保存在
相同脚本模块文件中。但是加载时，不能在 Game Object 面板中添加组件，也不能在 Game Component
面板中添加 Game Object。

组件脚本文件可以和 .blend 文件同级目录存放，刷新已加载组件点击下拉菜单 `Relaod Component`。
首次添加脚本组件就会执行 `start()` 初始化方法，刷新时不再执行，但是模块级代码会被执行。同一个
脚本组件可以多次添加使用，也可以给场景中选中的多个对象添加。但是要移除已挂载的脚本组件，就需要
单独对每个对象进行移除操作。


## 🎨 Logic Nodes 使用教程

`LogicNetwork` 作为逻辑树的实现，是逻辑节点编程的核心节点，也是逻辑节点的管理器。它继承了
以上的状态之外，还要实现其它节点的功能，比如给 Ray Casts 节点提供 `rayCast()` 投射方法，
所以逻辑树在实现上也是一个 Caster，这么多功能使用得它本身的结构有点大。射线投射方法还会在
逻辑树上设置私有属性，`_NL_ray_cast_data` 用于缓存数据。

UPBGE 屏幕空间大小标准化为 Vec(1,1)，要获取窗口原像素单位大小，可以使用渲染器属性。相机对象
`KX_Camera` 提供了 API 用于获取场景中的 3D Vector 坐标，或者获取与指定视线方向相交的对象。
又或者反过来，将指定对象的原点坐标转换为相应的屏幕坐标。这里涉及的变换矩阵可以通过相机 API 获取。

upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_GameObject.rst
upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_Camera.rst

```py
    width = bge.render.getWindowWidth()
    height = bge.render.getWindowHeight()

    # Gets the vector of the camera front direction:
    m_vect = camera.getScreenVect(0.5, 0.5)
    # Gets an object with a property "wall" in front of the camera within a distance of 100:
    target = camera.getScreenRay(0.5, 0.5, 100, "wall")
    # For an object in the middle of the screen, coord = [0.5, 0.5]
    coord = camera.getScreenPosition(object)
```

相机对象的父类，`KX_GameObject` 提供两个更基础的方法，其中 `rayCast()` 在逻辑树中调用：
从一个坐标点或物体观察另一个点或物体，在限定 **dist** 距离内找到具有 **prop** 属性匹配的，
射线碰撞到的第一个物体。

1. **objto** 参数接收一个目标坐标或对象，逻辑树中使用 ray_target 变量。
2. **face** 参数用于确定返回法线的朝向，0 表示总是朝向射线原点，1 表示碰撞点的曲面法线。
3. **xray** 是否使用 X 光穿透，配合 **prop** 属性，默认 0 表示不穿透，有效目标被遮挡就不能拾取。
4. **poly** 根据不同的值 0/1/2 值返回 3 ~ 5 个数据，(KX_GameObject, hitpoint, hitnormal, KX_PolyProxy, hituv)。
5. **mask** 使用 16-bit 数据用于碰撞层的对象过滤，`collisionGroup & mask`，同层才进行检测。

```cpp,ignore
    rayCastTo(other, dist=0, prop="")
    // :arg other: [x, y, z] or object towards which the ray is casted
    // :type other: :class:`~bge.types.KX_GameObject` or 3-tuple
    rayCast(objto, objfrom=None, dist=0, prop="", face=False, xray=False, poly=0, mask=0xFFFF)
```

用户在游戏世界中需要使用鼠标、屏幕等基础设备进行交互，即就是输入、输出的数据处理，当用于在屏幕上
一点进行操作，而这个点输入时对应的时屏幕空间的二维坐标，根据引擎中的相机成像过程，进行逆运算
才能得到相应的三维空间的坐标，`getScreenVect()`。反过来，3D 场景中的对象坐标要通过成像过程
的数学运算，才得到相应的坐标，`getScreenPosition()`。

软件中的相机只是抽象的概念，本质上是数学关系，光线传播或者是光学成像原理。那么，求解 3D 空间坐标
参照的相机位置就是一个关键信息，不同相机成像不同，也就是对应不同空间坐标中的物体、表面的信息。相当
在屏幕各个像素发射一条射线，沿着相机的正前方传播，光线与物体碰撞时的坐标位置就是要求解的屏幕坐标
对应的 3D Vector。

以下射线工具需要使用 `KX_Camera` 对象的 API，因此相机属性只能选择相机，不能使用其它对象替代。
并且，射线可以设置一个有效距离，超过距离就不再进行碰撞检测。另外，待检测的物体可以设置特定的属性，
**Game Properties** 面板中设置一个数据属性，然后射线节点 Property 属性中填写相同的名称，
那些没有设置相应属性的对象就不会参与射线的碰撞检测。

参考 `ActionMousePick` 节点调用逻辑树定义的光线投射方法获取数据，**ray_origin** 就是
光线传播的起点，留空表示默认使用相机成像平面发射光线，光线从起点向 **ray_target** 坐标传递，
两个坐标向量相减得到的向量就表示光线传播方向。

    raw_target = camera.worldPosition - camera.getScreenVect(x, y)

```py,ignore
class ActionMousePick(ActionCell):
    # ...
    mpos = bge.logic.mouse.position
    vec = 10 * camera.getScreenVect(*mpos)
    ray_target = camera.worldPosition - vec
    target, point, normal = self.network.ray_cast(
        camera,          # caster_object,
        None,            # ray_origin,
        ray_target,      # ray_destination,
        property_name,   # property,
        xray,            # xray,
        distance         # distance
    )
```

射线投射逻辑节点功能 Ray Casts：

1. **Mouse Ray** 按照指定相机视角，从光标位置发出射线，并获取射线首次碰撞到对象信息。
2. **Camera Ray** 按照指定相机视角，在相机坐标空间原点向 Aim 坐标投射射线，默认拾取屏幕中心目标对象。
3. **Ray** 直接指定射线起点 Origin 和目标点 Aim，拾取两点之间首个碰撞目标，Visualize 可查看射线。
4. **Projectile Ray** 按抛物线投射光线，Power 能量越大线条越直，可以激活 Visualize 查看效果。

射线投射逻辑节点设计时、运行时类型对照：

| Input -> Mouse | Design-Times Classes |    Run-Time Classes    |
|----------------|----------------------|------------------------|
| Camera Ray     | ActionCameraPick     | NLActionCameraPickNode |
| Mouse Ray      | ActionMousePick      | NLActionMousePickNode  |
| Projectile Ray | ProjectileRayCast    | NLProjectileRayCast    |
| Ray            | ActionRayPick        | NLActionRayCastNode    |

UPBGE-Docs\source\manual\logic\sensors\types\ray.rst


射线投身节点通用属性说明：

Distance 指定射线有效距离，在此距离内的物理对象才可能被拾取。
Property 指定一个名称，只有设置了相应 Game Properties 的对象才可能被拾取。
启用 X-Ray 可以拾取被遮挡的有效目标，即设置了 Property 中指定的属性的游戏对象。

**Camera Ray** 节点中的 Aim 坐标是以相机坐标空间计算的，也就是笛卡尔坐标系统，以屏幕中心
为原点 (0,0)。这个原点与鼠标默认的坐标原点（屏幕左上角）不重叠，并且相机空间与模型使用相同的
长度单位，而鼠标使用的是规范值，[1,1]，所以鼠标的坐标数据需要根据窗口大小进行转换：

    mouse_position - 0.5 * window_size

注意，Aim 输入可以是 Vec2 也可以是 Vec3，前者会触发屏幕空间转换，而 **Status** 节点获取的
坐标数据已经将二维转换为三维向量，所以不会触发这个过程。同样 **Vectory XY** 也是输出 3 维。
所以要么直接设置 Aim = [0,0] 拾取屏幕中心目标对象，要么自行处理目标坐标数据：

```py
    if isinstance(aim, Vector) and len(aim) == 2:
        vec = 10 * camera.getScreenVect(aim[0], aim[1])
        print("camera",aim[0], aim[1], camera.getScreenVect(aim[0], aim[1]), vec,)
        ray_target = camera.worldPosition - vec
        aim = ray_target
```

使用 **Get Resolution** 节点可以获取全屏幕的像素大小，但是不能直接用来将鼠标坐标转换成
相机画面中的世界尺寸。画面的大小与相机 lens 和 fov 等参数密切相关。代码中乘 10 是一个放大系数。

在处理数据过程中，Math 运算节点可以对向量进行数值的运算，而 Vector Math 节点则进行向量运算，
例如点积，叉积等等。其中 Vector XY，虽然只有两个分量，但其实它是三维的输出。

还有 RunPythonCode，虽然它可以运行脚本，但也只是调用函数，并且参数只能有一个，当然，可以通过
字典对象传递多个值。

另外，Object -> Data -> Get Position 等节点可以获取游戏对象的空间坐标等信息，和专用的
Get Property 节点不同，它专用于 Game Properties 属性数据的获取，等价于游戏对象的 `get()`。

相比 **Mouse Ray** 以屏幕中心为 (0.5,0.5)，这和鼠标输入的坐标系统原点重叠在左上角，
**Status** 节点获取到的光标坐标数据可以使用直接。


鼠标逻辑节点功能 Input -> Mouse：

01. **Look** 指定的 Main 对象视角跟随鼠标移动面转动，建议指定“头部”对象。
02. **Set Position** 设置光标位置，左上角到右下角 (0, 0) ~ （1,1)，屏幕中心为 (0.5,0.5)。
03. **Cursor Visibility**  设置光标是否显示。
04. **Status** 获取光标的屏幕坐标、移动、滚轮数据。
05. **Button** 鼠标点击时触发，可以指定 L/M/R 按钮，以及是否每帧都触发。
06. **Moved** 鼠标移动时触发。
07. **Button Up** 鼠标按钮释放时触发，可以指定 L/M/R 按钮，以及是否每帧都触发。
08. **Button Over**  鼠标在物理体上悬停时并点击时触发，可以指定 L/M/R 按钮，非物理体没有效果。
09. **Wheel** 滚轮事件触发，Scroll Up/Down 或者 Up and Down 三种条件。
10. **Over** 鼠标与物体体产生的 Enter/Over/Exit 事件输出，还有相应的碰撞点以及法线。

注意，**Status** 获取的 Movement 是实时的鼠标移动距离数据，不移动就为 0 值，而且数值是标准化
的大小 [1,1]，表示整个屏幕空间，移动的像素距离换算成比例值。

**Look** 节点是使对象跟随鼠标移动的快速方法，可以指定“躯干”和“头部”对象，当鼠标偏移屏幕中心时，
就根据屏幕空间的 X/Y 偏移量分别调整 Main Object 和 Head 的旋转角度，如果没有指定 Head 对象，
则将两轴偏移量都应用到主体的旋转。勾选 Smooth 可以使用旋转动作的起止运动更平缓。可以指定敏感度
Sensitivity，这是一个乘数，设置为 0 则不会产生旋转量。

旋转角度可以控制在一个范围，使用 Vec2 表示：

1. Cap Left/Right 约束 local Z 旋转轴的角度范围，对应主体对象的偏转角，注意要求：x > y；
2. Cap Up/Down 约束 local X/Y axis 旋转轴的角度范围，对应头对象的俯仰角；

当前 UPBGE 0.3 版本源代码应该有逻辑错误，出现 use_cap_z 属性的重复，另一个应该是 use_cap_y。

鼠标逻辑节点设计时、运行时类型对照：

|   Input -> Mouse  |      Design-Times Classes      |         Run-Time Classes         |
|-------------------|--------------------------------|----------------------------------|
| Button            | ConditionMousePressed          | NLMousePressedCondition          |
| Button Over       | ConditionMousePressedOn        | NLConditionMousePressedOn        |
| Button Up         | ConditionMouseReleased         | NLMouseReleasedCondition         |
| Cursor Visibility | ActionSetMouseCursorVisibility | NLActionSetMouseCursorVisibility |
| Look              | ActionMouseLook                | NLActionMouseLookNode            |
| Moved             | ConditionMouseMoved            | NLMouseMovedCondition            |
| Over              | ConditionMouseTargeting        | NLConditionMouseTargetingNode    |
| Set Position      | ActionSetMousePosition         | NLActionSetMousePosition         |
| Status            | ParameterMouseData             | NLMouseDataParameter             |
| Wheel             | ConditionMouseScrolled         | NLConditionMouseWheelMoved       |


变换节点功能 Objects -> Transformation，Apply 类型施加物理参数，配合 Game Physics 物理
系统属性使用，Bullet 物理引擎。节点激活 Local (蓝色) 和 Global 分别表示相对局部、全局坐标系统：

01. **Align Axis to Vector** 将物体指定的 Axis 轴向与指定的向量方向对齐。
02. **Apply Force** 向物理刚体施加力的作用，输入一个向量指定力度和方向。
03. **Apply Impulse** 施加冲量作用，两个向量输入分别是冲击点、冲量向量。
04. **Apply Movement** 施加移动量，输入向量指定偏移量。
05. **Apply Rotation** 施加旋转量，输入向量指定偏移量，使用角度为单位。
06. **Apply Torque** 施加扭矩，向量指定旋转轴及力度，比如 [0,0,1] 以 Z 轴为旋转中心，力度 1。
07. **Follow Path** 沿曲线路径移动对象。
08. **Move To** 向量 Target 目标点坐标匀速移动，受重力影响，无法向 Z 轴上方移动。
09. **Move To with Navmesh** 在指定导航网格上导航到指定目标点。
10. **Rotate To** 以 Rot Axis 为旋转轴，Front Axis 为正面旋转到目标角度。
11. **Translate** 以指定速度向目标位置平移，

**Rotate To** 仅在世界空间的单个轴和固定角度上应用旋转，可以瞬时或指定 Speed。如果旋转轴与
正面同轴，则无法旋转（轴向锁定）。

冲量模拟的受力分析复杂，很容易出现旋转效果，特别是在冲击点不在物体的中心轴，越容易使用物体产生旋转。
冲击点与冲量方向搭配不正确也影响模拟结果，比如物体已经在地面，使用 [0,0,-1] 这个冲量就可能不
产生效果，因为冲击方向指向地面。冲击点可以超出物体几何空间，这相当旋转扭矩旋转 Torque。

冲量解算方法定义在 Bullet 引擎的移植代码中：`CcdPhysicsController::ApplyImpulse()`
upbge-0.30\source\gameengine\Physics\Bullet\CcdPhysicsController.cpp
https://upbge.org/docs/latest/manual/manual/logic_nodes/scene/objects/transformation/index.html

**Follow Path** 是复杂的变换逻辑节点，某些情况下似乎无法完全运行，可以用来模拟四处走动的 NPC。
路径曲线使用 Nurbs Curve，在其中的点之间移动对象。仅与获取曲线点配合使用，Get Curve Points。

**Move To with Navmesh** 比较好用一点，只是使用起来需要构建 Navigation Mesh，好在 UPBGE
在场景属性面板提供了导航网格构建工具，只需要依据 Mesh 对象构建出 Navigation Mesh。前期工作就是
创建网格空间结构。使用 Blender 的各种建模工具也很方便，以下提供一个参考思路：

1. 创建一个 `Curve -> Nurbs Path` 对象，按 Tab 进行编辑模式，按路径走向需要调整控制点；
2. 切换回对象模式，找到 Path 对象数据属性面板 `Geometry -> Bevel`；
3. 就使用 Round 倒角方式，将路径倒角出一个管道形状，Depth 指定深度，相当于控制管道半径；
4. 在对象模式下，找到菜单 `Object -> Convert -> Mesh` 将路径对象转换为网格体；
5. 切换到编辑模式，选择所有顶点，依次按 s z 0 将顶点沿 Z 轴缩放到 0 值，即压平网格体；
6. 选保持选中所有顶点，`Mesh -> Merge -> By Distance` 将顶点按就近距离合并以简化；
7. 找到场景属性面板 `Navigation Mesh -> Build Navigation Mesh` 按网格体生成导航路径；

导航网格只在寻路算法中表示 AI 角色可以触达的区域，像陡坡或直立物体所覆盖的区域都不算是游戏角色
可触达的区域，可以根据导航网格面板中指定的参数设置，使用方法参考 Bullet 引擎的文档。当前算法
可能会在转角位置产生卡住的不动的问题，可以适当调整一个稍大的 Cell Size，避免与障碍物接触。

生成导航网格后，直接在**Move To with Navmesh**中的 Navmesh Object 属性列表中选择指定，
然后 Destination 指定导航目标位置，勾选 Visualize 可以运行时看到一条红线指示导航路径。

变换逻辑节点设计时、运行时类型对照：

| Objects -> Transformation |     Run-Times Classes     |    Design-Time Classes    |
|---------------------------|---------------------------|---------------------------|
| Align Axis to Vector      | ActionAlignAxisToVector   | NLActionAlignAxisToVector |
| Apply Force               | ActionApplyForce          | NLActionApplyForce        |
| Apply Impulse             | ActionApplyImpulse        | NLActionApplyImpulse      |
| Apply Movement            | ActionApplyLocation       | NLActionApplyLocation     |
| Apply Rotation            | ActionApplyRotation       | NLActionApplyRotation     |
| Apply Torque              | ActionApplyTorque         | NLActionApplyTorque       |
| Follow Path               | ActionFollowPath          | NLActionFollowPath        |
| Move To                   | ActionMoveTo              | NLActionMoveTo            |
| Move To with Navmesh      | ActionNavigateWithNavmesh | NLActionNavigate          |
| Rotate To                 | ActionRotateTo            | NLActionRotateTo          |
| Translate                 | ActionTranslate           | NLActionTranslate         |


Animation 动画节点设计时、运行时类型对照：

| Objects -> Transformation |      Run-Times Classes       |     Design-Time Classes      |
|---------------------------|------------------------------|------------------------------|
| Animation Status          | ParameterActionStatus        | NLParameterActionStatus      |
| Play Animation            | ActionPlayAction             | NLActionPlayActionNode       |
| Set Animation Frame       | ActionSetAnimationFrame      | NLActionSetAnimationFrame    |
| Stop Animation            | ActionStopAnimation          | NLActionStopAnimation        |
| Bone Status               | ParameterBoneStatus          | NLParameterBoneStatus        |
| Edit Bone                 | ActionEditBone               | NLActionEditBoneNode         |
| Set Bone Position         | ActionSetBonePos             | NLActionSetBonePos           |
| Set Attribute             | GESetBoneConstraintAttribute | NLSetBoneConstraintAttribute |
| Set Influence             | GESetBoneConstraintInfluence | NLSetBoneConstraintInfluence |
| Set Target                | GESetBoneConstraintTarget    | NLSetBoneConstraintTarget    |

骨骼动画涉及的内容比较多，以后再深入探讨，大概操作流程是：

1. 创建与模型相适应的骨骼系统，按关节位置连接骨骼；
2. 将模型与骨骼绑定：通过顶点组管理模型中的顶点与对应骨骼的权重值，以确定每块骨骼对指定顶点的影响程度；
3. 然后调整骨骼状态以改变模型的形态，因为有上一步的绑定操作，模型网格会按权重分配给对应的骷髅进行变形；
4. 蒙皮，将材质赋予模型，使用模型在姿态控制下呈现特定的动画效果；


Animation 动画节点分为三类，Timeline、Armature、Constraints，功能参考：

1. **Animation Status** 获取指定对象上的动画播放状态，输出两个控制流和 Action Name/Frame 等。
2. **Play Animation** 在指定对象上播放指定时间轴动画数据，可以指定帧区间 Start/End，速度等等。
3. **Set Animation Frame** 将指定对象的动画播放状态移动到指定 Frame/Layer。
4. **Stop Animation** 停止在指定对象、以及指定动画层上播放动画。

**Set Animation Frame** 使用 Freeze 模式，要在停止状态下才有效，会将动画“冰冻”在指定帧
位置，此时执行播放命令无效，需要先停止动画，解除冰冻状态才可以继续播放。

时间轴动画，就是记录在以帧为单位的属性数据的重放到指定对象上。例如，最简单的位移动画，数据记录的
是 Position 属性在不同关键帧的数值。关键帧之间应该取什么什值，取决于插值算法生成的中间值。

Blender 编程模型中，基本单位是数据块，Datablocks。所有对象都具有数据，这些数据块包括
meshes, objects, materials, textures, node trees, scenes, texts, brushes ...
所有数据块都可以通过 Outliner -> blend-files 列表查看，删除，管理。
Datablocks https://docs.blender.org/manual/en/latest/files/data_blocks.html

而时间轴动画记录下来的数据就是 `Action` 数据块，打开 Timeline 编辑器，可以通过 Keying
（关键设置工具）或直接按快捷键 I 来添加关键帧，将当前的状态数据记录下来。不同的属性在时间轴上
显示为不同 Channels，选择需要记录的属性，就会产生相应的轨道记录。

关键键有不同的类型：

1. **Keyframe**  (白/黄色菱形) 常规关键帧，如果之间有灰色块连接表示记录的状态数据相等，没变化。
2. **Breakdown** (青色小菱形) 间断状态，如用于不同关键姿态间的过渡。
3. **Move Hold** (深灰色/橙色菱形) 惯性延续，一个可以在一个保持姿势附近添加少量动作的关键帧。
    在动画摄影表中，它还会在它们之间显示一个条块。
4. **Extreme** (红色大菱形) 极端状态，或者其他需要的用途。
5. **Jitter** (绿色小菱形) 抖动，填充或烘焙关键帧，用于在其他帧上插帧，或用于其他所需目的。

`Keying -> Active Keying Set` 列表中可以选择当前活动的通道，然后点击带 + 号的钥匙图标
就可以在相应的属性通道添加一个关键帧，不需要的关键帧也可以随时删除，可以直接在时间轴框选关键帧，
移动它们到指定帧位置，或者直接删除它们。每个时间轴动画对应的数据块都有一个名字，比如 CubeAction
就表明这是 Cube 对象上的一个动画数据块。**Dope Sheet** 编辑器还可以切换为**Action Editor**
以编辑时间轴动画数据，包括当前帧的插值，通过修改左侧显示在绿色背景中的插值数据，就只可以自动创建
新的关键帧。

还可以使用 **Graph Editor** 曲线动画工具改变插值规律，通过给属性通道添加 F-Curves 函数曲线、
修改器，用于设置关键帧间的插值函数。选择好关键帧，通过以下菜单操作就可以改变插值方式：

- 菜单 Key -> Interpolation Mode 选择插值函数类型；
- 侧栏面板 F-Curve - Active Keyframe - Interpolation 设置插值类型和缓动类型 Easing Type。
- 侧栏面板 Modifiers - Add Modifier 添加动画曲线修改器。


将动画数据重现（播放）到指定对象的属性，就可以还原关键帧记录下的状态，并且 animation layering
动画分层概念可以将多个动画在同一个对象上播放，结合 Blend 选项在不同动画层之间按权重计算重叠属性
的数据，最终得到一个混合好的动画效果。



## 🎨 Logic Nodes (源代码分析)

与逻辑块、脚本组件不同，UPBGE Logic Nodes 以插件的形式集成在 UPBGE 开发环境，完全以
Python 脚本实现。逻辑块和脚本组件则基于导出到脚本环境中的 C++ API 开发。

源代码位置对应如下，Logic Nodes 是一个独立插件项目，可以在 Github 上下载：

1. **Logic Nodes**       scripts\addons\bge_netlogic\basicnodes\__init__.py
2. **Logic Bricks**      upbge-0.30\source\gameengine\GameLogic
3. **Python Components** upbge-0.30\source\gameengine\Ketsji\KX_PythonComponent.h

Uchronian Logic: UPBGE Logic Nodes https://github.com/UPBGE/UPBGE-logicnodes

Controllers 是脚本编程中的桥梁一样的对象，它上连传感器 Sensors，下连执行器 Actuators。
在源代码中，控制器的实现代码很少量，因为它本身的逻辑不复杂。他的父类 `SCA_ILogicBrick`,
涉及整个 BGE 逻辑块的实现，逻辑复杂，代码也相对多。

注意，在脚本组件中，有些方法不能直接调用，比如只有在 Logic Bricks 下有效的当前控制器获取方法
就不能在脚本组件中直接调用，除非是在 python controllers namespace：

    SystemError: bge.logic.getCurrentController(), this function is being run
    outside the python controllers context, or blenders internal state is corrupt.

你应该知道脚本会用什么方式调用，至少有以下四种不同的运行方式：

1. Logic Bricks - Python Controller
2. Logic Nodes - Python - Run Python Code
3. Game Object Properties - Python Component
4. Game Object Properties - Game Object

    upbge-0.30\doc\python_api\rst\bge.types.rst
    upbge-0.30\doc\python_api\rst\bge.logic.rst

```py
    # To get a sensor or actuator linked to this controller.
    # "sensorname" is the name of the sensor as defined in the Blender interface.
    # "actuatorname" is the name of the actuator as defined in the Blender interface.
    # +---------------------+  +--------+  +-------------------------+
    # | Sensor "sensorname" +--+ Python +--+ Actuator "actuatorname" |
    # +---------------------+  +--------+  +-------------------------+

    # To get the controller thats running this python script:
    cont = bge.logic.getCurrentController() # bge.logic is automatically imported
    sensors = cont.sensors
    sensor = cont.sensors["sensorname"]
    actuator = co.actuators["actuatorname"]

    # Activate an actuator
    controller.activate(actuator)

    # To get the game object this controller is on:
    obj = cont.owner

    # get the list of objects
    s = bge.logic.getCurrentScene().objects

    # Set a connected keyboard sensor to accept F1
    import bge

    co = bge.logic.getCurrentController()
    # 'Keyboard' is a keyboard sensor
    sensor = co.sensors["Keyboard"]
    sensor.key = bge.events.F1KEY
```

Logic Nodes 编辑器侧栏面板也可以操作逻辑节点代码生成：`Administration -> Compile All`，
注意使用 `Apply As Bricks` 方式，如果使用 `Apply As Component` 方式下编译，生成代码则
会内嵌在 Blender 文件，可使用自带的脚本编辑器查看。

工程 `bgelogic` 目录下生成代码中的逻辑节点树并不是一个具体的类型，它只是一个 Python 脚本文件，
也是 Python 的脚本模块，这个模块中定义了：

1. 一个 `_initialize(owner)` 初始化函数；
2. 一个 `pulse_network(controller)` 控制器触发函数；

控制器对象 `owner` 属性引用一个当前调用这个控制器的游戏对象 GameObject。因为一个控制器可以
挂载到多个对象上，不同的控制器挂载到不同对像，使用所用的游戏对象也不同。逻辑节点上也有相同的
属性引用，通常一个逻辑节点中 Object 选项有一个 **Use Owner** 图标，激活此选项就表示使用
逻辑树当前挂载的游戏对象。

每个逻辑节点都包含设计时和运行时两部分代码，前者实现在 Blender UI 界面，提供节点的图形显示、
插槽、连接线、参数调用面板等等功能。运行时是游戏运行中重现逻辑节点的代码实现，在逻辑节点编辑器
侧栏面板 Custome Node -> Custom Node Template 创建自定义节点，包含设计时、运行时：

    class CustomParameterNode(bpy.types.Node, NLParameterNode):
    class CustomParameterCell(ParameterCell):

代码默认内嵌在 .blend 文件，可以使用脚本编辑器看查看。当前自定义节点不会记录在 Add 菜单列表，
即使设置了 nl_category 属性也不可以，UPBGE 并没有设计相应的程序功能。但可以搜索找到自定义节点，
名称由 bl_label 属性指定。设计时类型实现需要注册 `bge_netlogic.register_nodes()`。运行时
类型实现由 `get_netlogic_class_name()` 方法返回，在生成逻辑树类型代码时需要使用它。如果更新
了节点的实现代码，就需要在脚本编辑器中执行脚本，使用相同的注册名称更新注册。

    3.0\scripts\templates_py\custom_nodes.py
    3.0\scripts\addons\bge_netlogic\templates\my_custom_cells.txt
    upbge-0.30\release\scripts\templates_py\custom_nodes.py


一个名为 **NewTree.001** 的逻辑节点树，用 `On Init` -> `Once` -> `Print` 去执行
打印 `Get Property` 获取的属性数据。由代码生成工具 tree_code_generator.py 生成的逻辑
节点树代码如下：

```py,ignore
    # MACHINE GENERATED
    import bge, bpy, sys, importlib
    import mathutils
    from uplogic import nodes
    import math

    def _initialize(owner):
        network = nodes.LogicNetwork()
        PAR0000 = nodes.ParameterObjectProperty()
        ACT0001 = nodes.ActionPrint()
        CON0002 = nodes.GE_OnInit()
        PAR0000.game_object = None
        PAR0000.property_name = "myTimer"
        ACT0001.condition = CON0002
        ACT0001.value = PAR0000
        network.add_cell(PAR0000)
        network.add_cell(CON0002)
        network.add_cell(ACT0001)
        owner["IGNLTree_NewTree.001"] = network
        network._owner = owner
        network.setup()
        network.stopped = not owner.get('NL__NewTree.001')
        return network

    def pulse_network(controller):
        owner = controller.owner
        network = owner.get("IGNLTree_NewTree.001")
        if network is None:
            network = _initialize(owner)
        if network.stopped: return
        shutdown = network.evaluate()
        if shutdown is True:
            controller.sensors[0].repeat = False
```

代码中会导入 uplogic\nodes.py 模块，创建 `LogicNetwork` 实例，它代表了逻辑节点树，节点
类型定义为称为 Cell。变量命名按 CON - Condition Nodes, ACT - Action Nodes 这样的规则。
网络执行时，`pulse_network()` 被调用，传入控制器所携带的 owner 游戏对象给初始化方法，
初始化好连接关系，再通过 `setup()` 方法配置所有连接的节点。

`StatefulValueProducer` 定义一个有状态节点，两个接口函数 `get_value()` `has_status()`。
`LogicNetworkCell` 定义一个有运行控制方法的节点（Cell），定义多个接口函数，还有多个属性：

1. **_uid** 私有属性，节点标识；
2. **_status** 私有属性，存储节点状态；
3. **_value** 私有属性，存储节点值；
4. **_children** 私有属性，子节点集合；
5. **network** 所属节点网络；
6. **is_waiting** 是否处于等待状态；

接口方法包括了 `setup()` `stop()` `reset()` 以及 `evaluate()` `deactivate()` 等等。
`LogicNetwork` 作为节点树的实现，它实现 `setup()` 方法设置树内连接的所有节点的 network
属性，以及调用其 `setup()` 方法完成配置，如果节点有配置需要。

LogicNetworkCell 接口定义了三个逻辑状态，初始状态就是 WAITING：

    STATUS_WAITING = _Status("WAITING")
    STATUS_READY = _Status("READY")
    NO_VALUE = _Status("NO_VALUE")

节点求值完成后，调用 `_set_ready()` 切换到 READY 状态，或者 `_set_status()` 直接设置状态。

                          .--------------.
                          |  __init__()  |
                          '--------------'
                                 |
           .---------.     .-----v-----.
           | reset() |-->  |  WAITING  |  <--|
           '---------'     '-----------'     |
      .--------------.     .-----------.     .---------------.
      | _set_ready() |-->  |   READY   |  <--| _set_status() |
      '--------------'     '-----------'     '---------------'
                           .-----------.     |
                           |  NO_VALUE |  <--|
                           '-----------'

NO_VALUE 在 On Value Changed To `ConditionValueTrigger` 这些需要通过求值结果来决定
是否输出触发条件的节点上使用。求值方法通过判断最后一次更新的值来决定如何调用 `_set_value()`，
初始状态下的 last_value 初始值就是 NO_VALUE。


逻辑节点的连接关系固定在由生成器输出的逻辑树配置代码中，保存在项目的 bgelogic 目录下，运行游戏时
或主动通过逻辑编辑侧栏面板 `Administration -> Compile All` 生成代码。比如，上面代码中的
`ACT001.condition = CON0000` 就是将一个条件节点连接到一个动作节点的 condition 端口上。

注意，在 Apply As Logic Bricks 模式下编译才会生成外部脚本模块，如果是 Component 模式则
会内嵌在 Blender 文件，使用自带的脚本编辑器查看。

Blender 提供的节点编辑器最基础的两个组件就是：

1. `bpy.types.NodeSocket` 节点插槽基类，所有节点的输入、输出端口都是插槽类型的实例；
2. `bpy.types.Node` 节点基类，逻辑树中定义的节点之间，通过关联插槽类型到输入、输出端口连接；

UPBGE 逻辑节点实现插件，bge_netlogic 插件代码主要分成四块：

- **uplogic** 逻辑节点运行时的实现，由逻辑节点生成器根据逻辑节点树的节点连接信息生成的代码调用。
- **basicnodes** 逻辑节点编辑器中节点 UI 的实现，最终子类属于 bpy.types.Node 或 NodeSocket。
- **nodeutils** 节点编辑器中的节点分类目录，使用了 `nodeitems_utils` 插件模块。
- **ops** 包括代码生成器，操作组件，bpy.types.Operator，对应逻辑节点编辑器中的按钮等 UI。

每个节点每个端口的设计时代码，basicnodes 目录下定义，主要是提供绘制出相应的图形界面的逻辑。
并且向生成的运行时节点类型实现提供连接关系信息数据。

而运行时的实现代码，uplogic 目录下定义的各种 Cell 类型对应逻辑节点，SubCell 对应插槽功能：

1. `ActionCell` 行为节点，执行各种动作，比如 `ActionApplyRotation` 旋转指定的游戏对象；
2. `ConditionCell` 条件节点根据求值函数输出逻辑条件，供行为节点的条件使用；
3. `ParameterCell` 参数节点主要是向其它节点提供数据；
4. `LogicNetworkSubCell` 插槽类型，也是唯一的运行时插槽类型实现；

`LogicNetworkSubCell` 插槽类型记录了上游节点（owner）和其数据读取 API，`get_value()`
方法一般由父类 `get_socket_value()` 方法间接调用。Get Owner 这样的节点用来获取游戏对象，
它的运行时实现 `ParamOwnerObject` 通过 `get_owner()` 获取逻辑树上的游戏对象输出给下游。

下游节点连接到一个输出端口，就可以根据端口 owner 属性获取引用上游节点，注意这个 owner 表示
Socket 对象归属的节点，并不是游戏对象。通常一个逻辑节点中 Object 选项有一个 **Use Owner**
图标，激活此选项就表示使用逻辑树当前挂载的游戏对象。

Get Property 这样的节点，运行时实现为 `ParameterObjectProperty`，它的输入端口可以指定
场景中的对象，也就是 GameObject，根据不同设置，在生成逻辑树的代码有不同的属性值配置：

1. Object 属性留空，生成代码：`game_object = None`
2. Object 指定列表中的对象，比如场景中的 Plane 对象：`game_object = "NLO:Plane"`
3. Object 从其它节点输入，比如 Get Owner：`game_object = nodes.ParamOwnerObject()`

如果是第二种，可以直接在属性列表中看到这个指定对象的 Game Properties 数据属性列表。但是节点
需要激活 **Free Edit** 模式才能自由指定需要访问的属性数据。而在生成代码中，Object 属性值中
前缀 `NLO:` 表示它真正需要获取的是一个游戏对象。`get_socket_value()` 方法包含前缀值的处理，
会将参数值截掉 'NLO:' 的部分作为对象名称匹配场景中的对象，Scene.objects 保存所有对象的引用。
`get_value()` 则没有这个前缀的处理。

还有一种情况，属性值设置为 'NLO:U_O' 则返回 `LogicNetwork` 私有成员 `_owner` 引用的
游戏对象，它在生成的逻辑树代码定义在初始化方法中，和传入节点的控制器引用相同的游戏对象。

在逻辑节点执行求值时，还会调用 `is_invalid()` 方法验证属性的名称的有效性，以及判断节点是否还
处于等待状态，或者游戏对象本身已经定义了 invalid 属性并且值不为 False，这都是处于无效状态，
会导致节点路过求值操作，或者说求值未完成：

```py,ignore
    # scripts\addons\bge_netlogic\uplogic\nodes.py
    def get_game_object(self, param, scene):
        if str(param) == 'NLO:U_O':
            return self.network._owner
        else:
            return check_game_object(param.split(':')[-1], scene)


    def get_socket_value(self, param, scene=None):
        if str(param).startswith('NLO:'):
            return self.get_game_object(param, scene)
        if isinstance(param, StatefulValueProducer):
            if param.has_status(LogicNetworkCell.STATUS_READY):
                return param.get_value()
            else:
                return LogicNetworkCell.STATUS_WAITING
        else:
            return param


    def check_game_object(query, scene=None):
        if not scene:
            scene = logic.getCurrentScene()
        else:
            scene = scene
        if (query is None) or (query == ""):
            return
        if not is_invalid(scene):
            # find from scene
            return _name_query(scene.objects, query)


    def is_invalid(*a):
        for ref in a:
            if ref is None or ref is LogicNetworkCell.STATUS_WAITING or ref == '' :
                return True
            if not hasattr(ref, "invalid"):
                continue
            elif ref.invalid:
                return True
        return False


    class ParameterObjectProperty(ParameterCell):
        # ...
        def evaluate(self):
            game_object = self.get_socket_value(self.game_object)
            property_name = self.get_socket_value(self.property_name)
            if is_invalid(game_object, property_name):
                return
            self._set_ready()
            if property_name not in game_object:
                game_object[property_name] = None
            else:
                self._set_value(game_object[property_name])
```

编写 GameObject 对象时注意 `property_name not in game_object` 这个属性存在性判断条件。
而这个 in 运算符的使用，就涉及多个魔术方法的定义与使用，才能决定一个属性数据是否存在。即就是说，
即使用 GmaeObject `getPropertyNames()` 方法可以看到属性的定义，但是通过 not-in 运算符
返回的值可能又是表明属性不存在。

Python 脚本中，`obj.attr` 和 `obj['attr']` 两种访问方法涉及了不同执行逻辑，它们大多数
情况下都不是指向相同的数据。同时，UPBGE 引擎内还会整合 Game Properties 数据，以及逻辑节点树
生成代码中设置 GameObject 属性数据，比如一个名为 **ArchitectureBasic** 的逻辑树就会
在生成代码中包含以下游戏对象属性设置：

    owner["IGNLTree_ArchitectureBasic"] = network

这些在不同执行阶段混入的数据，如果不清楚什么数据在什么时间可用，无疑会让程序逻辑变得非常复杂，
并且可能导致一些怪异的现象。比如，在逻辑节点求值方法中，无法通过 `get()` 方法获取游戏对象属性
以外的属性值，即那些属性 Python 原生导出的符号。

```py,ignore
    def evaluate(self):
        print("Properties", game_object.getPropertyNames())
        for it in dir(game_object):
            print("===", it, game_object.get(it))

    def start(self, args):
        scene = bge.logic.getCurrentScene()
        for it in dir(scene.active_camera):
            try:
                print("===", it, eval("scene.active_camera.%s" % it))
            except Exception as ex:
                print(" ===>", ex)
```

```cpp
    // upbge-0.30\source\gameengine\Ketsji\KX_GameObject.cpp
    // dict style access for props
    {"get", (PyCFunction)KX_GameObject::sPyget, METH_VARARGS},

    // upbge-0.30\source\gameengine\Ketsji\KX_GameObject.h
    /* Dict access */
    EXP_PYMETHOD_VARARGS(KX_GameObject, get);

    // .. method:: get(key[, default])
```

`getPropertyNames()` 函数导出自 C++ 方法 `PyGetPropertyNames()`，它只是从导出符号中
获取列表，列表中存在的属性，在脚本中可能访问不到真实的值。也就是说，`KX_GameObject::sPyget()`
源代码中导出的这个方法是 Game Properties 属性数据获取的专用方法。根据其导出符号用途的宏定义
规则，可以知道，这是一个由 `EXP_PYMETHOD_VARARGS` 宏函数生成的方法，头文件中可找到相应定义。


Python 2.x 升级到 Python 3.x，所有类型的底层类型系统完全重新设计，旧版本的类型称为旧式类型，
新版本的类型，只要是继承自 `object` 或者其子类型，那么就是新式类型，默认都是新式类。旧式类和
新式类的区别，old-style vs. new-style，主要体现在多重继承、属性访问以及特殊方法等方面。
在新式类中，一个类可以直接继承自内置类型（比如 list、dict 等），同时也支持使用 super() 函数
调用指定父类方法，例如 `super(A, obj).m` 或者 `super().__init__()`。还能够使用 slots
插槽属性限制实例属性的数量，以及使用 `getattribute()` 方法控制属性访问等高级特性。还涉及
类型成员解释顺序算法 Method Resolution Order (MRO) 等等。
Python-3.10.2\Doc\library\functions.rst


获取属性数据时，不能在没有实现下标操作方法使用 `obj['attr']` 这样的索引法取值，可以实现
`__getitem__` 魔术方法，或者使用 `getattr()` 内置函数。for-in 循环会优先使用 `__iter__`
魔术方法枚举数据，如果没有定义，才使用 `__getitem__`。

数据枚举完成，就应该发出停止检举信息，`StopIteration` 或者 `IndexError` 异常都可以停止循环。
如果没有终止信息发出，这就是一个死循环。

另外，if-in 或 not-in 这种带 in 运算符的搭配会触发 `__getitem__` 枚举行为，但是 in 运算符
优先使用 `__contains__` 方法，一个布尔值就能解决所查询的数据是否存在的问题。但是 `__getitem__`
方法则需要返回一个值，供 in 运算符进行比较，getitem 不能返回 True 或 False 决定数据是否存在。

Python 作为动态类型语言，它的类型标注只是给人看的，不对于编译器的编译处理，所以以下代码展示了
一个代码一致性的反面示范，因为 `__getitem__` 会被多个方法调用，id 不一定是数值。
和 `__getitem__` 方法配对的还有 `__setitem__`，用于下标索引方式的赋值操作。

```py,ignore
    # Python-3.10.2\Doc\library\stdtypes.rst
    def varargs(*args):
        for it in args:
            print("arg = %s " % (it) )

    class Subs(object):

        gorun = "Runing"
        def __init__(self):
            self['gorun'] = "init"
            self.gorun = "INIT"

        #def __contains__(self, key):
        #    return key == "gorun"

        # troubleshot for subs['xxx'] = value: object does not support item assignment
        def __setitem__(self, id:str, value: int):
            print("setter: %s = %s" % (id, value))
            setattr(self, id, value)

        # troubleshot for subs['xxx']: object is not subscriptable
        def __getitem__(self, id: int):
            if type(id) is str:
                return self.gorun
            if id > 0:
                raise StopIteration
            return self.gorun

    subs = Subs()
    print(type(subs))      # <class '__main__.Subs'>
    print(subs["gorun"])   # INIT
    print(subs.gorun)      # INIT
    print(getattr(subs, "gorun")) # INIT
    varargs(subs, "gorun")
    if "init" in subs:
        print("TRUE")
```

所有设计时实现实现，名称上基本都使用 LN 前缀，而运行时实现则没有这样的前缀，这是代码约定，这是
非常好的编码习惯，一方面逻辑更清晰，另外更方便定位。

    # addons\bge_netlogic\uplogic\nodes.py

    .--------.                                               .---------.
    | object |                                               | Invalid |
    '--------'                                               '---------'
      +--------------------------------.
      |   .-----------.                |   .--------------.
      +-->| GlobalDB  |                +-->| AudioSystem  |
          '-----------'                |   '--------------'
            | (GlobalDB.Serializer)    |   .------------------------.
            |   .-------------------.  `-->| StatefulValueProducer  |
            |-->| StringSerializer  |      '------------------------'
            |   '-------------------'        |   .---------------------.
            |   .-------------------.        +-->| LogicNetworkSubCell |
            |-->| FloatSerializer   |        |   '---------------------'
            |   '-------------------'        `-->| LogicNetworkCell    |
            |   .-------------------.            '---------------------'
            |-->| IntegerSerializer |              |   .------------------.
            |   '-------------------'              +-->| LogicNetwork     |
            |   .-------------------.              |   '------------------'
            |-->| ListSerializer    |              +-->| ParameterCell    | ...
            |   '-------------------'              |   '------------------'
            |   .-------------------.              +-->| ActionCell       | ...
            `-->| VectorSerializer  |              |   '------------------'
                '-------------------'              `-->| ConditionCell    | ...
                                                       '------------------'
    # addons\bge_netlogic\basicnodes\__init__.py

    .--------------------.   .----------------.
    | NetLogicSocketType |-->| NL...Socket... | (bpy.types.NodeSocket)
    '--------------------'   '----------------'
     |   .--------------.  .----------------------------.  .----------------.
     +-->| NetLogicType |->| NetLogicStatementGenerator |->| NLAbstractNode |
         '--------------'  '----------------------------'  '----------------'
         .-----------------.                                       |
         | NLConditionNode |<---------------------+----------------·
         '-----------------'                      |
           |                                      |   .-----------------.
           | (bpy.types.Node)                     +-->| NLActionNode    | ...
           |    .----------------.                |   '-----------------'
           +--> | NLCondition... |                |   .-----------------.
           |    '----------------'                +-->| NLParameterNode | ...
           |    .----------------------------.        '-----------------'
           +--> | NLGamepadActive            |
           |    '----------------------------'
           +--> | NLGamepadButtonUpCondition |
           |    '----------------------------'
           +--> | NLGamepadButtonsCondition  |
           |    '----------------------------'
           +--> | NLKeyPressedCondition      |
           |    '----------------------------'
           +--> | NLKeyReleasedCondition     |
           |    '----------------------------'
           +--> | NLKeyboardActive           |
           |    '----------------------------'
           +--> | NLMouseMovedCondition      |
           |    '----------------------------'
           +--> | NLMousePressedCondition    |
           |    '----------------------------'
           +--> | NLMouseReleasedCondition   |
           |    '----------------------------'
           +--> | NLObjectPropertyOperator   |
           |    '----------------------------'
           +--> | NLOnInitConditionNode      |
           |    '----------------------------'
           `--> | NLOnUpdateConditionNode    |
                '----------------------------'

    # addons\bge_netlogic\nodeutils\__init__.py

    *------------------------*
    | import nodeitems_utils |
    *------------------------*
          |    .----------------.   .----------------.
          |--> | NodeCategory   |-->| NodeCategory   |
          |    '----------------'   '----------------'
          |    .----------------.   .----------------.
          |--> | NodeItem       |-->| NodeItem       |
          |    '----------------'   '----------------'
          |    .----------------.   .----------------.
          `--> | NodeItemCustom |-->| NodeItemCustom |
               '----------------'   '----------------'

    # addons\bge_netlogic\ops\__init__.py
    # addons\bge_netlogic\ops\tree_code_generator.py

`Python -> Dictionary -> Init Empty` 节点为例，它创建一个空字典以保存数据。在逻辑节点
编辑器中添加此节点，就会执行 `init()` 初始化，添加输入、输出端口，以及相关的端口类型。同时，
节点实现类型中还定义了三个方法，分别返回输入、输出端口对应的字段或变量名称，以及实现运行时的
类型 `InitEmptyDict(ActionCell)`，所有节点运行时实现都是 `LogicNetworkCell` 子类。

节点树进行运行时，节点得到控件流执行，就会调用求值方法 `evaluate()`，并将数据暂存起来，
等待相应的输出端口连接的下游节点调用已经为各个端口注册好的 API 获取暂存数据。这里就是指注册
在输出端口 **Dictionary** 的接口函数，此端口对应的变量名是 `DICT`，此值对应节点类型的
一个同名成员，也就是在 self.DICT 这个成员上注册的 API `get_dict()`，下游节点需要获取
数据时就会根据以上信息调用 `get_dict()`。

Init Empty 与 Init From Item 节点的主要差别在于 `InitEmptyDict` 和 `InitNewDict`
两个实现类型的功能差别。不同节点的这个求值方法有所不同，前者直接创建空字典，`dict = {}`，后者
则是根据输入的键值对数据来初始化一个字典,`dict = {str(key): value}`。求值完成后，父类定义
的内部函数 `set_ready()` 被执行，告知节点树当前节点已经完成求值。


```py,ignore
    class NLInitEmptyDict(bpy.types.Node, NLActionNode):
        bl_idname = "NLInitEmptyDict"
        bl_label = "Init Empty"
        nl_category = "Python"
        nl_subcat = 'Dictionary'

        def init(self, context):
            NLActionNode.init(self, context)
            self.inputs.new(NLPseudoConditionSocket.bl_idname, 'Condition')
            self.outputs.new(NLConditionSocket.bl_idname, 'Done')
            self.outputs.new(NLDictSocket.bl_idname, 'Dictionary')

        def get_output_socket_varnames(self):
            return ["OUT", 'DICT']

        def get_netlogic_class_name(self):
            return "nodes.InitEmptyDict"

        def get_input_sockets_field_names(self):
            return ["condition"]


class InitEmptyDict(ActionCell):
    def __init__(self):
        ActionCell.__init__(self)
        self.condition = None
        self.dict = None
        self.done = None
        self.OUT = LogicNetworkSubCell(self, self.get_done)
        self.DICT = LogicNetworkSubCell(self, self.get_dict)

    def get_done(self):
        return self.done

    def get_dict(self):
        return self.dict

    def evaluate(self):
        self.done = False
        condition = self.get_socket_value(self.condition)
        if not_met(condition):
            return
        self._set_ready()
        self.dict = {}
        self.done = True
```

由于 UPBGE 逻辑节点编程设计思路与 Armory3D 完全不一样，在使用节点时的思维也几乎完全不一样。
定时器 Time - Timer `ConditionTimeElapsed` 就是这样一个典型：When Elapsed 持续输出
触发信号，当输入 Set Timer 条件时，定时器开始计时，停止输出触发信号。计时到达后，恢复信号。
可以使用 `ConditionNot` 返回这个逻辑，即没有输入 Set Timer 时也不输出触发，有信号输入时
就在计时这段时间持续输出触发信号。


## 🎨 Script Lifecycle (源代码分析)

很有必要对 `KX_GameObject(SCA_IObject)` 的生命周期深入研究，必需要有一个明确的
Script lifecycle 概念。但是这么重要的基础概念内容，官方文档却不重视，即使是 `update()`
方法的说明也少得可怜，What Is A Python Component? 有提及。这些方法都涉及了 C++ 源代码，
大概是开发团队真的是没太多人力可用。

游戏运行环境由 `LA_Launcher` 类型配置，包括 Python 环境的初始化和游戏循环结构。这个
入口类型定义的 `InitEngine()` 方法执行以初始 UPBGE 游戏引擎，初始化引擎环境，包括场景
实例 `KX_Scene` 的设置，然后进入 `EngineMainLoop()`，直到程序运行结束。

Python-3.10.2\Python\pythonrun.c
upbge-0.30\source\blender\editors\space_view3d\view3d_view.c
upbge-0.30\source\gameengine\GamePlayer\GPG_ghost.cpp
upbge-0.30\source\gameengine\BlenderRoutines\BL_KetsjiEmbedStart.cpp
upbge-0.30\source\gameengine\Launcher\LA_Launcher.cpp
upbge-0.30\source\gameengine\Ketsji\KX_KetsjiEngine.h

    .--------------------.   .-------------------------.
    |   UPBG Gameplayer  |   |      UPBG Blender       |
    |   GPG_ghost.cpp    |   | BL_KetsjiEmbedStart.cpp |
    '--------------------'   '-------------------------'
    .--------------------.   .-------------------------.
    | LA_PlayerLauncher  |   | LA_BlenderLauncher      |
    '--------------------'   '-------------------------'
                |                      |
                '----------+-----------'
                           |
           .---------------v----------------.
           | LA_Launcher::InitEngine()      |
           | ------------------------------ |
           | KX_KetsjiEngine::StartEngine() |
           '--------------------------------'
                           | CM_Message(std::endl << "Blender Game Engine Started");
           .---------------v----------------.
           | LA_Launcher::EngineMainLoop()  |
           | ------------------------------ |
           |     ::RunPythonMainLoop()      |--> PyRun_SimpleString() ...
           '--------------------------------'
                           |
           .---------------v----------------.
           | LA_Launcher::EngineNextFrame() |
           | ------------------------------ |
           | KX_KetsjiEngine::NextFrame()   |--> Scene Frames...
           '--------------------------------'
                           |
           .---------------v----------------.
           | LA_Launcher::RenderEngine()    |
           | ------------------------------ |
           | KX_KetsjiEngine::Render()      |
           '--------------------------------'
                           | CM_Message("Blender Game Engine Finished");
           .---------------v----------------.
           | LA_Launcher::ExitEngine()      |
           | ------------------------------ |
           | KX_KetsjiEngine::StopEngine()  |
           '--------------------------------'


`KX_Scene` 是游戏场景对象，是游戏对象生成环境，逻辑上也是游戏对象的容器。
`KX_PythonProxyManager` 是游戏对象的注册中心，负责调用所有游戏对象的 `Update()` 方法。
`SCA_LogicManager` 是逻辑块注册中心，负责调用所有 Logic Bricks 对象的管理，每个逻辑处理
周期对应一次 `UpdateFrame()` 调用。

以下是 UPBGE 引擎工作流程概要：

    .-----------------------------------.
    | void KX_KetsjiEngine::NextFrame() |
    '-----------------------------------'
      |--> void KX_Scene::LogicBeginFrame(double curtime, double framestep)
      |--> void KX_Scene::LogicUpdateFrame(double curtime)
      |      |   .--------------------------------------.
      |      `-->| void KX_PythonProxyManager::Update() |
      |          '--------------------------------------'
      |             |--> KX_GameObject::Update()
      |             |      |   .------------------------------.
      |             |      |-->| KX_PythonComponent::Update() |
      |             |      |   '------------------------------'
      |             |      |   .--------------------------.
      |             |      `-->| KX_PythonProxy::Update() |
      |             |          '--------------------------'
      |             |             `--> KX_PythonProxy::Start()
      |             |                    |   .-------------------------------.
      |             |                    |-->| EXP_PyObjectPlus::GetProxy()
      |             |                    |-->| EXP_PyObjectPlus::GetProxyPlus_Ext()
      |             |                    |-->| PyObject::start()
      |             |                    |-->| PyObject::update()
      |             |                    |-->| PyObject::dispose()
      |             |                    `-->| KX_PythonProxy::Dispose()
      |             |                        '-------------------------------'
      |             `--> SCA_LogicManager::UpdateFrame(curtime)
      `--> void KX_Scene::LogicEndFrame()


    bool ImageRender::Render()
        void UpdateAnimations(KX_Scene *scene);
            void KX_Scene::UpdateAnimations(double curtime)
                void KX_GameObject::UpdateActionManager(curtime, true)


确实，KX_PythonProxy 的 `Update()` 方法优先于 `Start()` 执行，后者只在初始化执行一次，
后续就不再执行。

顶级父类型 `EXP_PyObjectPlus` 提供的 `GetProxy()` 是 `Py_Header` 宏函数生成的方法，
返回一个 `PyObject` 对象，也就是脚本中的对象调用接口。

upbge-0.30\source\gameengine\Ketsji\KX_KetsjiEngine.cpp
upbge-0.30\source\gameengine\Ketsji\KX_PythonProxyManager.cpp:
upbge-0.30\source\gameengine\Expressions\EXP_PyObjectPlus.h
upbge-0.30\source\gameengine\Expressions\intern\PyObjectPlus.cpp
upbge-0.30\source\gameengine\Ketsji\KX_GameObject.cpp

脚本涉及的生命周期事件可以表示如下流程，Python 对象的初始化魔术方法会先于引擎运行：

    .------------.    .-------------------.    .--------------.
    | __init__() |--->| start(self, args) |--->| update(self) |
    '------------'    '-------------------'    '--------------'

综合以上，一个 `Get Property` 节点可以读取 Game Properties 数据，也可以读取 Python
初始化方法设置的属性数据，而且需要使用 `self['prop'] = value` 这样的方式设置的数据，才能
被逻辑节点的 `evaluate(self)` 函数检测到。因为，逻辑节点的检测代码先于 GameObject 对象的
`start()` 方法执行，所以在 Game Object 面板中配置的属性数据不能在逻辑节点读取。

为了调试逻辑节点，可以生成脚本组件代码，然后再手动将组件挂载到游戏对象的 Game Components。
在逻辑节点编辑器的侧栏面板，选择 `Apply as Component`，再点击 `Apply To Selected` 将
逻辑统战挂载到选中的对象上，并在 Game Components 列表中生成相应的组件。

脚本组件方式挂载的逻辑树，脚本组件面板提供 `Only Run At Startup` 选项，勾选它才表示在游戏
开始时执行逻辑树。或者使用 `Execution Condition`，指定一个逻辑条件，它就是一个字符串，相当
于是逻辑树的 condition 条件输入端口。但是它需要经过一次映射转换，即读取 self.objcet 对应
字段的值使用执行条件。

参考 bgelogic 目录下的生成代码，以下代码对应一个名称为 **ArchitectureBasic** 的逻辑树，
`On Update` 节点驱动 `Print` 节点打印 `Get Property` 获取到的 GameObject 属性数据：

```py,ignore
    import bge, bpy, sys
    import mathutils
    import math
    from collections import OrderedDict

    class ArchitectureBasic(bge.types.KX_PythonComponent):

        consumed = False
        condition = ""
        args = OrderedDict([
            ("Only Run At Startup", False),
            ("Execution Condition", "")
        ])

        def start(self, args):
            from uplogic import nodes
            self.condition = args['Execution Condition']
            owner = self.object
            network = nodes.LogicNetwork()
            CON0000 = nodes.ConditionOnUpdate()
            PAR0001 = nodes.ParameterObjectProperty()
            ACT0002 = nodes.ActionPrint()
            PAR0001.game_object = "NLO:Plane"
            PAR0001.property_name = "gorun"
            ACT0002.condition = CON0000
            ACT0002.value = PAR0001
            network.add_cell(CON0000)
            network.add_cell(PAR0001)
            network.add_cell(ACT0002)
            owner["IGNLTree_ArchitectureBasic"] = network
            network._owner = owner
            network.setup()
            network.stopped = not owner.get('NL__ArchitectureBasic')
            if args['Only Run At Startup']:
                self.consumed = True
                network.evaluate()
            return network

        def update(self):
            if self.consumed:
                return
            owner = self.object
            if self.condition:
                cond = owner[self.condition]
                if not cond: return
            network = owner.get("IGNLTree_ArchitectureBasic")
            if network.stopped: return
            shutdown = network.evaluate()
            if shutdown is True:
                self.consumed = True
```

假设逻辑树生成的脚本组件，挂载到游戏对象上，并且没有勾选脚本组件 `Only Run At Startup` 选项，
表示在游戏开始时不执行逻辑树。那么，使用 `Execution Condition` 指定一个逻辑条件，它是字符串值。
设置了个执行条件后，代码逻辑就会对 `owner[self.condition]` 进行检测，如果游戏对象上相应的
属性数据逻辑值为 `True` 才继承执行。

注意，默认的 network.stopped 配置值为 False，因为 `NL__ArchitectureBasic` 这个属性
默认是没有定义的。另外，默认的 consumed 状态值 False 表示此逻辑树还没有被执行过（消费掉）。
**Stopped** 是逻辑树的一种运行状态，但是对于一个未曾运行过的逻辑树，如果不勾选起始运行选项，
到这一步就无法再继续运行求值流程，即使指定的**执行条件**已经满足，也不会执行求值，这多少有点
逻辑设计上的缺陷。解决方法如下：

1. 直接在手动挂载的逻辑节点树生成的组件代码上修改 `network.stopped = False`
2. 游戏对象的初始化方法中增设置属性值 `self['NL__ArchitectureBasic'] = True`
3. 像逻辑节点编辑器中 Apply To Selected 一样，自动添加一个 Game Properties 布尔值。

但是，这样做的结果就是：不激活 `Only Run At Startup` 或者指定 `Execution Condition`
也会执行逻辑树。使用 Game Properties 布尔值属性数据，则可以更方便停用或启用。逻辑编辑器这种
隐藏添加游戏属性数据的方式非常迷惑人，如果不是事先了解，就不容易处理误删数据而引起的问题。
逻辑编辑器侧栏面板 Game Properties 显示变量的方式有 4 个选项：

1. **Fileter** 属性数据过滤器，只显示指定类型的属性；
2. **Show Hidden** 显示私有数据，即以下划线开关的属性；
3. **Show Trees** 显示逻辑树关联属性，即以下 `NL__` 前缀名称的属性；
4. **Collapse Tree** 折叠起逻辑树关联属性名称，避免误改；

另外，要删除已挂载的逻辑树也应该使用逻辑编辑器 `Dashboard -> Object Trees` 面板进行操作，
否则会有数据残留。

第一种方式涉及脚本文件的处理，在逻辑树生成组件代码时，默认是内嵌在 Blender 文件内部的，可以
使用文件菜单将脚本保存为外部脚本文件，下次再生成代码时，还是先相覆盖掉内嵌的代码，但不会自动
覆盖外部文件，除非手动保存，或者在关闭 Blender 时确认保存脚本文件。

```py,ignore
class MyGameObject(bge.types.KX_GameObject):
    # Put your arguments here of the format ("key", default_value).
    # These values are exposed to the UI.
    args = OrderedDict([
        ("Game Name", "Your game"),
        ("Mode", "Your mode"),
        ("Go Run", True)
    ])
    gorun = "This one invalid property for UPBGE"

    def __init__(self, *args):
        self['gorun'] = True
        self['NL__ArchitectureBasic'] = True
        print("===init", args, self.getPropertyNames())


    def start(self, args):
        pass
        print("===start", args, self)
        self['gorun'] = args["Go Run"]
        print("getPropertyNames  ===>", self.getPropertyNames() )

    def update(self):
        pass
```

逻辑树的求值方法返回布尔值，指示节点树的消费状态，消费过就不过再被执行，避免“双花”问题[Doge]。



## 🎨 UPBGE Standalone Player 导出游戏

UPBGE 目前只支持桌面平台的游戏开发，安装目录下的 Blender Player 就是游戏运行时。可以在
命令行中执行它加载 .blend 文件，并开始运行游戏，此时可以查看控制台信息。

当前的打包插件 Save As Game Engine Runtime 可以将 .blend 文件以及运行参数一并绑定到
Blender Player 程序内，数据直接以二进制方式写在 Blender Player 末端。

```py
    # Create a new file for the bundled runtime
    output = open(output_path, 'wb')

    # Write the player and blend data to the new runtime
    print("Writing runtime...", end=" ")
    output.write(player_d)
    output.write(blend_d)

    # Store the offset (an int is 4 bytes, so we split it up into 4 bytes and save it)
    output.write(struct.pack('B', (offset>>24)&0xFF))
    output.write(struct.pack('B', (offset>>16)&0xFF))
    output.write(struct.pack('B', (offset>>8)&0xFF))
    output.write(struct.pack('B', (offset>>0)&0xFF))

    # Stuff for the runtime
    output.write(b'BRUNTIME')
    output.close()
```

游戏要正常运行，除了系统 DLLs，还有 Python 程序库，还需要 Blender 工程中引用了的资源文件，
以下 UPBGE 环境下编写的各种脚本。如果其中某些文件缺件，或者没有复制成功，就可能导致游戏不能运行
或者功能缺失。比如，自定的脚本模块目录，可能需要手动拷贝。Player 也和 Bledner 主程序一样依赖
同一套源代码，只不过 Player 主要的功能是运行脚本逻辑，而不是编辑器逻辑。程序运行时以 .blend
文件所在目录为工作目录，`//` 路径格表示相对于 .blend 所在目录。

另外，还有大量没有使用的文件也会一并拷贝，没有经过优化，所以打包结果就是文件超多 500MB+。

执行 `WriteRuntime()` 时有较大的出错机率，没有处理好文件的复制问题。


3.0\scripts\addons\game_engine_save_as_runtime_eevee.py

1. **Player Path** The path to the player to use
2. **Copy Python** Copy bundle Python with the runtime
3. **Overwrite 'lib' folder** Overwrites the lib folder (if one exists) with the bundled Python lib folder
4. **Copy Scripts folder** Copy bundle Scripts folder with the runtime
5. **Copy Datafiles folder** Copy bundle datafiles folder with the runtime
6. **Copy Script>Modules folder** Copy bundle modules folder with the runtime
7. **Copy Logic Nodes game folder** Copy Logic Nodes game with the runtime
8. **Copy DLLs** Copy all needed DLLs with the runtime
9. **New Icon Path** The path to the new icon for player to use

期间会用到 rcedit 工具修改 Windows 平台下的程序图标。



usage:   blenderplayer.exe [--options] filename.blend

Available options are: [-w [w h l t]] [-f [fw fh fb ff]] [-c] [-g gamengineoptions] [-s stereomode] [-m aasamples]
Optional parameters must be passed in order.
Default values are set in the blend file.

  -h: Prints this command summary

  -w: display in a window
       --Optional parameters--
       w = window width
       h = window height
       l = window left coordinate
       t = window top coordinate
       Note: To define 'w' or 'h', both must be used.Also, to define 'l' or 't', all four parameters must be used.
       Example: -w   or  -w 500 300  or  -w 500 300 0 0

  -f: start game in fullscreen mode
       --Optional parameters--
       fw = fullscreen mode pixel width    (use 0 to detect automatically)
       fh = fullscreen mode pixel height   (use 0 to detect automatically)
       fb = fullscreen mode bits per pixel (default unless set in the blend file: 32)
       ff = fullscreen mode frequency      (default unless set in the blend file: 60)
       Note: To define 'fw'' or 'fh'', both must be used.
       Example: -f  or  -f 1024 768  or  -f 0 0 16  or  -f 1024 728 16 30

  -s: start player in stereoscopy mode (requires 3D capable hardware)
       stereomode: nostereo         (default unless stereo is set in the blend file)
                   anaglyph         (Red-Blue glasses)
                   sidebyside       (Left Right)
                   syncdoubling     (Above Below)
                   3dtvtopbottom    (Squashed Top-Bottom for passive glasses)
                   interlace        (Interlace horizontally)
                   vinterlace       (Vertical interlace for autostereo display)
                   hwpageflip       (Quad buffered shutter glasses)
       Example: -s sidebyside  or  -s vinterlace

  -m: maximum anti-aliasing (eg. 2,4,8,16)

  -n: maximum anisotropic filtering (eg. 2,4,8,16)

  -i: parent window's ID

  -c: keep console window open

  -d: debugging options:
       memory        Debug memory leaks
       gpu           Debug gpu error and warnings

  -g: game engine options:

       Name                       Default      Description
       ------------------------------------------------------------------------
       fixedtime                      0         "Enable all frames"
       wireframe                      0         Wireframe render
       show_framerate                 0         Show the frame rate
       show_properties                0         Show debug properties
       show_profile                   0         Show profiling information
       show_bounding_box              0         Show debug bounding box volume
       show_armatures                 0         Show debug armatures
       show_camera_frustum            0         Show debug camera frustum volume
       show_shadow_frustum            0         Show debug light shadow frustum volume
       ignore_deprecation_warnings    1         Ignore deprecation warnings

  -p: override python main loop script


  - : all arguments after this are ignored, allowing python to access them from sys.argv


example: blenderplayer.exe -w 320 200 10 10 -g noaudio c:\filename.blend
example: blenderplayer.exe -g show_framerate = 0 c:\filename.blend
example: blenderplayer.exe -i 232421 -m 16 c:\filename.blend


## 🎨 Scripts Class Relations


    .-----------.   | getSceneList()    |   .----------.
    | bge.logic |-->| getCurrentScene() |-->| KX_Scene |-->objects
    '-----------'   |                   |   '----------'      |
                                                              |
    .-----------------.           .---------------.           |
    | SCA_ILogicBrick |-->owner-->| KX_GameObject |<----------'
    '-----------------'           '---------------'
    .--------------------.              |
    | KX_PythonComponent |-->object-----'
    '--------------------'           
                                                | events: dict
    .-----------------.   .-----------------.   | position: Vec2
    | bge.logic.mouse |-->| SCA_PythonMouse |-->| visible: bool
    '-----------------'   '-----------------'   | inputs: dict
                                                | active_events
                                                | activeInputs
    .---------------------.   .--------------------.
    | bge.logic.joysticks |-->| SCA_PythonJoystick |
    '---------------------'   '--------------------'
                                                      | events: dict
    .--------------------.   .--------------------.   | text:   unicode text
    | bge.logic.keyboard |-->| SCA_PythonKeyboard |-->| getClipboard()
    '--------------------'   '--------------------'   | setClipboard(text)
                                                      .--------------.
                                                      | inputs       |
            .--------------------------------------<--| activeInputs |
            |                                         '--------------'
            |
    .----------------.   | status: KX_INPUT_NONE KX_INPUT_ACTIVE
    | SCA_InputEvent |-->| queue
    '----------------'   | values
                         | inactive
                         | active
                         | activated
                         | released
                         | type

    .------------------.
    |    bge.render    |
    '------------------'
        |                 Functions                  |          Constants           |
        |--------------------------------------------|------------------------------|
        |--> getWindowWidth()                        | KX_TEXFACE_MATERIAL          |
        |--> getWindowHeight()                       | KX_BLENDER_MULTITEX_MATERIAL |
        |--> setWindowSize(width, height)            | KX_BLENDER_GLSL_MATERIAL     |
        |--> setFullScreen(enable)                   | VSYNC_OFF                    |
        |--> getFullScreen()                         | VSYNC_ON                     |
        |--> getDisplayDimensions()                  | VSYNC_ADAPTIVE               |
        |--> makeScreenshot(filename)                | LEFT_EYE                     |
        |--> enableVisibility(visible)               | RIGHT_EYE                    |
        |--> showMouse(visible)                      | RAS_MIPMAP_NONE              |
        |--> setMousePosition(x, y)                  | RAS_MIPMAP_NEAREST           |
        |--> setBackgroundColor(rgba)                | RAS_MIPMAP_LINEAR            |
        |--> setEyeSeparation(eyesep)                |                              |
        |--> getEyeSeparation()                      |                              |
        |--> setFocalLength(focallength)             |                              |
        |--> getFocalLength()                        |                              |
        |--> getStereoEye()                          |                              |
        |--> setMaterialMode(mode)                   |                              |
        |--> getMaterialMode(mode)                   |                              |
        |--> setGLSLMaterialSetting(setting, enable) |                              |
        |--> getGLSLMaterialSetting(setting)         |                              |
        |--> setAnisotropicFiltering(level)          |                              |
        |--> getAnisotropicFiltering()               |                              |
        |--> setMipmapping(value)                    |                              |
        |--> getMipmapping()                         |                              |
        |--> drawLine(fromVec,toVec,color)           |                              |
        |--> enableMotionBlur(factor)                |                              |
        |--> disableMotionBlur()                     |                              |
        |--> showFramerate(enable)                   |                              |
        |--> showProfile(enable)                     |                              |
        |--> showProperties(enable)                  |                              |
        |--> autoDebugList(enable)                   |                              |
        |--> clearDebugList()                        |                              |
        |--> setVsync(value)                         |                              |
        |--> getVsync()                              |                              |

    *------------------*
    | EXP_PyObjectPlus |
    *------------------*
      |   .-------------------------.
      +-->| EXP_Value               |-----.
      |   '-------------------------'     |
      |     |   .----------------------.  |
      |     +-->| KX_BlenderMaterial   |  |   .-----------------.
      |     |   '----------------------'  +-->| KX_PythonProxy  |
      |     |   .----------------------.  |   '-----------------'
      |     +-->| KX_CharacterWrapper  |  |     |   .-------------.
      |     |   '----------------------'  |     +-->| SCA_IObject |
      |     |   .----------------------.  |     |   '-------------'
      |     +-->| KX_ConstraintWrapper |  |     |     |   .---------------.
      |     |   '----------------------'  |     |     `-->| KX_GameObject |
      |     |   .----------------------.  |     |         '---------------'
      |     +-->| KX_LodManager        |  |     |   .--------------------.
      |     |   '----------------------'  |     +-->| KX_PythonComponent |
      |     |   .----------------------.  |     |   '--------------------'
      |     +-->| KX_VehicleWrapper    |  |     |   .-------------.
      |     |   '----------------------'  |     `-->| KX_Scene    | (SCA_IScene)
      |     |   .----------------------.  |         '-------------'
      |     +-->| SCA_InputEvent       |  |
      |     |   '----------------------'  |   .-----------------.
      |     |   .----------------------.  ·-->| SCA_ILogicBrick | (SG_QList)
      |     `-->| SCA_PythonJoystick   |      '-----------------'
      |         '----------------------'        |   .-----------------.
      |   .-------------------------.           +-->| SCA_IActuator   |
      +-->| KX_2DFilterManager      |           |   '-----------------'
      |   '-------------------------'           |     |   .---------------------.
      |   .-------------------------.           |     +-->| BL_ArmatureActuator |
      +-->| KX_LibLoadStatus        |           |     |   '---------------------'
      |   '-------------------------'           |     +-->| SCA_ActionActuator  |
      |   .-------------------------.           |     |   '---------------------'
      +-->| KX_LodLevel             |           |     `-->| SCA_TrackToActuator |
      |   '-------------------------'           |         '---------------------'
      |   .-------------------------.           |   .-----------------.
      +-->| SCA_PythonKeyboard      |           +-->| SCA_IController |
      |   '-------------------------'           |   '-----------------'
      |   +-------------------------+           |     |   .----------------------.
      `-->| SCA_PythonMouse         |           |     `-->| SCA_PythonController |
          +-------------------------+           |         '----------------------'
                                                |   .-------------.
                                                `-->| SCA_ISensor |
                                                    '-------------'
    .-------------------.
    | KX_GameObject     |
    '-------------------'
      |   .-------------------.
      +-->| BL_ArmatureObject |
      |   '-------------------'
      +-->| KX_Camera         |
      |   '-------------------'
      +-->| KX_EmptyObject    |
      |   '-------------------'
      +-->| KX_FontObject     |
      |   '-------------------'
      +-->| KX_LightObject    |
      |   '-------------------'
      `-->| KX_NavMeshObject  |
          '-------------------'


## 🎨 UPBGE Message Bus 消息机制

UPBGE-Docs\source\manual\logic_nodes\basic\events\custom\catch.rst
UPBGE-Docs\source\manual\logic_nodes\basic\events\custom\throw.rst

UPBGE-Docs\source\manual\logic\sensors\types\message.rst
UPBGE-Docs\source\manual\logic\actuators\types\message.rst
https://upbge.org/docs/latest/manual/manual/logic/sensors/types/message.html
https://upbge.org/docs/latest/manual/manual/logic/actuators/types/message.html
https://upbge.org/docs/latest/manual/manual/logic_nodes/scene/objects/send_message.html

首先，用一句话总结一下 UPBGE 的消息系统：不完整、不完善，勉强能用的简易接口。

Blender 本身有 Message Bus (bpy.msgbus)，这套消息系统基于 Blender DNA 系统，用于
Blender datablocks 数据被修改时获取通知，有以下使用限制条件：

1. ✔ Changes via the Python API, for example some_object.location.x += 3.
2. ✔ Changes via the sliders, fields, and buttons in the user interface.
3. ❌ Moving objects in the 3D Viewport.
4. ❌ Changes performed by the animation system.

    https://upbge.org/docs/latest/api/bpy.msgbus.html
    upbge-0.30\doc\python_api\examples\bpy.msgbus.1.py
    upbge-0.30\doc\python_api\examples\bpy.msgbus.2.py
    upbge-0.30\doc\python_api\examples\bpy.msgbus.3.py

bpy.msgbus 公开三个方法，订阅 RNA 需要接收一个 key 关键身份本标识，也就是数据块路径：

```py,ignore
    # bpy.msgbus.publish_rna(key)
    # bpy.msgbus.clear_by_owner(owner)
    # bpy.msgbus.subscribe_rna(key, owner, args, notify, options=set())

    import bpy

    # Any Python object can act as the subscription's owner.
    owner = object()

    subscribe_to = bpy.context.object.location


    def msgbus_callback(*args):
        # This will print:
        # Something changed! (1, 2, 3)
        print("Something changed!", args)


    bpy.msgbus.subscribe_rna(
        key=subscribe_to,
        owner=owner,
        args=(1, 2, 3),
        notify=msgbus_callback,
    )
```


UPBGE 消息系统会用在 Logic Bricks/Logic Nodes/Python Components 三大基本编程工具中。

    .--------------------------.  | |    .--------------------------.
    | KX_NetworkMessageManager |  | | <--|    NLActionSendMessage   |
    '--------------------------'  | |    '--------------------------'
    .--------------------------.  | |    .--------------------------.
    |  KX_NetworkMessageScene  |  | | <--| SCA_NetworkMessageSensor |
    '--------------------------'  | |    '--------------------------'
    .--------------------------.  | |    .----------------------------.
    |        KX_Scene          |  | | <--| SCA_NetworkMessageActuator |
    '--------------------------'  | |    '----------------------------'
                                  | |    .---------------.   .-------------------.
                                  | | <--| KX_GameObject |<--| ActionSendMessage |
                                  | |    '---------------'   '-------------------'
    ------------------------------|-|------------------------------
             Message API          | |     Message Cusomers


消息相关逻辑节点设计时、运行时类型对照：

|              Nodes               | Design-Times Classes |      Run-Time Classes     |
|----------------------------------|----------------------|---------------------------|
| Objects -> Send Message          | ActionSendMessage    | NLActionSendMessage       |
| Events -> Custom -> Catch        | ReceiveMessage       | NLParameterReceiveMessage |
| Events -> Custom -> Throw        | CreateMessage        | NLActionCreateMessage     |

注意，Send Message 和其它几何事件消息节点使用的不是同一套消息 API，前者是 C++ API，后者
基于逻辑节点全局字典数据对象，逻辑树会创建名为 NL_MessageService 的字典保存在 `_messages`。
事件消息节点就借这个字典对象传递消息。看代码结构，可能是由于两边的开发者没有勾通交流，毕竟逻辑节点
只是一个插件。

```py,ignore
class GlobalDB(object):

    shared_dbs = {}

    @classmethod
    def retrieve(cls, fname):
        db = cls.shared_dbs.get(fname)
        if db is None:
            db = GlobalDB(fname)
            cls.shared_dbs[fname] = db
        return db


class LogicNetwork(LogicNetworkCell):
    def __init__(self):

        self._messages = GlobalDB.retrieve('NL_MessageService')
```

`KX_NetworkMessageManager` Message 定义的一个消息结构包含四个要素，本身作为消息管理中心，
只提供消息入列、获取消息、清理消息 3 个 API。使用了两个消息队列，`m_messages`，一个用于当前帧
消息发送，另一个用于上一帧的消息。一个消息可以没有发送方和主题，但一定有接收方和内容：

1. `std::string to` Receiver object(s) name.
2. `SCA_IObject *from` Sender game object.
3. `std::string subject` Message subject, used as filter.
4. `std::string body` Message body.

两个消息队列在 `ClearMessages()` 方法中切换，清理掉一个作为下一帧的消息队列，当前正在使用的
在下一帧就成为 last frame messages。清理方法会在引擎的 `KX_KetsjiEngine::NextFrame()`
方法中执行。

    upbge-0.30\source\gameengine\Ketsji\KX_KetsjiEngine.cpp:549

    upbge-0.30\doc\python_api\rst\bge.logic.rst
    upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_GameObject.rst
    upbge-0.30\doc\python_api\rst\bge_types\bge.types.SCA_GameActuator.rst
    upbge-0.30\doc\python_api\rst\bge_types\bge.types.SCA_NetworkMessageActuator.rst
    upbge-0.30\doc\python_api\rst\bge_types\bge.types.SCA_NetworkMessageSensor.rst

    upbge-0.30\source\gameengine\Ketsji\KXNetwork\KX_NetworkMessageManager.h
    upbge-0.30\source\gameengine\Ketsji\KXNetwork\KX_NetworkMessageScene.h
    upbge-0.30\source\gameengine\Ketsji\KX_Scene.h
    upbge-0.30\source\gameengine\Ketsji\KX_GameObject.h

    upbge-0.30\source\gameengine\GameLogic\SCA_NetworkMessageSensor.h
    upbge-0.30\source\gameengine\GameLogic\SCA_NetworkMessageActuator.h
    upbge-0.30\source\gameengine\GameLogic\SCA_GameActuator.cpp


虽然，KX_GameObject 定义了一个消息发送方法，但是没有相应的接收方法，KX_Scene 等类型也没有导出
相应的方法，这导致逻辑节点中无法查询消息。因为逻辑块本身是 C++ 实现，也没有暴露相应 API，脚本中
无法实例化逻辑块对象。

KX_GameObject(SCA_IObject)

   .. method:: sendMessage(subject, body="", to="")
      Sends a message.

      :arg  subject: The subject of the message
      :type subject: string
      :arg     body: The body of the message (optional)
      :type    body: string
      :arg       to: The name of the object to send the message to (optional)
      :type      to: string


消息系统没有广播机制，目前在用的就是逻辑块中的收发：

    SCA_NetworkMessageActuator ===> SCA_NetworkMessageSensor


逻辑块消息传感器的求值阶段需要主动向消息中心查询，并导出消息到脚本环境，就目前而言只有逻辑块在
消费消息，逻辑块消息执行器负责发送消息，消息传感器负责查询接收。：

    bool SCA_NetworkMessageSensor::Evaluate(){
      const std::vector<KX_NetworkMessageManager::Message>
        messages = m_NetworkScene->FindMessages(toname, subject);
    }

    SCA_NetworkMessageSensor(SCA_ISensor)

    - subject
    - frameMessageCount
    - subjects
    - bodies

    SCA_NetworkMessageActuator(SCA_IActuator)

    - propName
    - subject
    - body
    - usePropBody

    upbge-0.30\source\gameengine\Ketsji\KX_Globals.h
    upbge-0.30\source\gameengine\Ketsji\KX_KetsjiEngine.h
    upbge-0.30\source\gameengine\Rasterizer\RAS_ICanvas.h
    upbge-0.30\source\gameengine\GamePlayer\GPG_Canvas.cpp

    upbge-0.30\source\gameengine\Ketsji\KX_Scene.cpp:972
    upbge-0.30\source\gameengine\Converter\BL_BlenderDataConversion.h:1660
    upbge-0.30\source\gameengine\Converter\BL_ConvertSensors.cpp:168
    upbge-0.30\source\gameengine\Converter\BL_ConvertActuators.cpp:737

使用 `SCA_GameActuator` 执行器定义了多种调用 `KX_KetsjiEngine` 的游戏相关功能，
SCA_GameActuatorMode 枚举值指示的模式如下：

1. **KX_GAME_LOAD** 加载并运行另一个 .blend 游戏文件，RequestExit -> SetNameNextGame；
2. **KX_GAME_START** 功能同上，在实例化时会自动将当前的游戏场景文件传入构造函数；
3. **KX_GAME_RESTART** 重开游戏 `RequestExit(KX_ExitRequest::RESTART_GAME)`
4. **KX_GAME_QUIT** 结束游戏，`RequestExit(KX_ExitRequest::QUIT_GAME)`
5. **KX_GAME_SAVECFG**  ``
6. **KX_GAME_LOADCFG**  ``
7. **KX_GAME_SCREENSHOT** 抓取屏幕截图 `GetCanvas()->MakeScreenShot()`

SCA_GameActuator 实例化有两个位置：

1. `BL_ConvertActuators()` 此方法相当逻辑块执行器的解析器，负责转换设计时功为相应的代码。
2. `SCA_GameActuator::GetReplica()`


引擎全局空间下定义的 APIs：

```cpp,ignore
    void KX_SetActiveEngine(KX_KetsjiEngine *engine);
    void KX_SetActiveScene(KX_Scene *scene);
    void KX_SetMainPath(const std::string &path);
    void KX_SetOrigPath(const std::string &path);

    KX_KetsjiEngine *KX_GetActiveEngine();
    KX_Scene *KX_GetActiveScene();
    const std::string &KX_GetMainPath();
    const std::string &KX_GetOrigPath();
```


```cpp,ignore
    class KX_NetworkMessageManager {

      /** Add a message in the next message list.
       * \param message The given message to add.
       */
      void AddMessage(Message message);
      /** Get all messages for a given receiver object name and message subject.
       * \param to The object(s) name.
       * \param subject The message subject/filter.
       */
      const std::vector<Message> GetMessages(std::string to, std::string subject);

      /// Clear all messages
      void ClearMessages();
    }

    class KX_NetworkMessageScene {

      /** Send A message to an object(s) name.
       * \param to      The object(s) name, in case of duplicated object all objects
       *                with the same name will receive the message.
       * \param from    The sender game object.
       * \param subject The message subject, used as filter for receiver object(s).
       * \param message The body of the message.
       */
      void SendMessage(std::string to, SCA_IObject *from, std::string subject, std::string body);

      /** Get all messages for a given receiver object name and message subject.
       * \param to      The object(s) name.
       * \param subject The message subject/filter.
       */
      const std::vector<KX_NetworkMessageManager::Message> FindMessages(std::string to,
                                                                        std::string subject);
    };

    class KX_Scene : public KX_PythonProxy, public SCA_IScene {
      /**
       * \section Accessors to different scenes of this scene
       */
      void SetNetworkMessageScene(KX_NetworkMessageScene *newScene);
      KX_NetworkMessageScene *GetNetworkMessageScene();
    }
```


## 🎨 Blender Data-Blocks API

https://upbge.org/#/documentation/docs/latest/api/bpy.data.html
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/index.html

RNA DATA API https://wiki.blender.org/wiki/Source/Architecture/RNA
Math Types & Utilities https://upbge.org/docs/latest/api/mathutils.html
DNA是一个生物学名词，DNA是所有生物的遗传物质基础。生物体亲子之间的相似性和继承性即所谓遗传信息，都贮存在DNA分子中。

Blender 把所有需要序列化的（保存到 .blend 文件的结构数据）核心数据结构称之为 DNA，这些自定义
的数据结构包括 Object、ID、bScreen、Materials、Textures、Geometry、Mesh、Curve...。
Blender 各个版本中这些结构可能有些改进，但每个版本都保存一份自己特有的 DNA，每个 .blend
文件中也保存有一份自身的 DNA 数据。

DNA 和 RNA 是 Blender 开发人员和社区使用的术语，用来指代他们序列化 Blender 状态数据的系统，
这个系统和 Blender 本身一样古老。每个 .blend 文件都包含一个 DNA 结构，其中详细描述了几乎所有
关于 .blend 的细节，以及最后所使用 Blender 的版本和精确副本。这使得 Blender 文件高度向后兼容，
因为它们允许任何未来版本的 Blender 以旧版本处理旧文件的相同方式来配置自己，并以一种非常规范化的
方式消化文件，可以在不更改文件结构的情况下进行版本到版本的扩展。

DNA 底层的数据结构是 `Object`，数据块就是 `void *data` 指针所指向的数据，指针就是 ID。
RNA 可以把它看作是 DTO (Data Transfer Object)，它允许 DNA 片段和子树在 Blender 内部
以及在 Blender 和它的插件之间传递，主要语言是 Python。


KX_GameObject 可以说是游戏引擎与 Blender 数据对象的桥梁，它包装了 Blender `Object` 数据
结构，并提供 API 访问，获取数据对象，就可以修改数据块内容，改变它们：

    upbge-0.30\doc\python_api\rst\bge_types\bge.types.KX_FontObject.rst

    upbge-0.30\source\blender\makesdna\DNA_constraint_types.h:257
    upbge-0.30\source\blender\makesdna\DNA_object_types.h:49
    upbge-0.30\source\blender\makesrna\intern\rna_object.c
    upbge-0.30\source\gameengine\Ketsji\KX_GameObject.h:121
    upbge-0.30\source\gameengine\Converter\BL_ConvertProperties.cpp:161

```cpp,ignore
    struct Object *GetBlenderObject()

    struct Object *GetBlenderGroupObject()

    void SetBlenderGroupObject(struct Object *obj)
```


Blender 对象数据块的修改：

场景中添加一个 Text 对象用于显示文字，Blender 没有使用中文字体，默认不能显示中文，也不支持
输入直接输入中文。解决方法：在属性 Text 对象面板 Font 中设置字体，Regular、Bold、Italic
分别用于显示正体、粗体、斜体的文字。从系统字体文件中选择，simsun.ttc 是宋体，或下载自定义字体。
然后进行 Text 对象的编辑模式，使用粘贴功能，将汉字粘贴进来。

选择 Text 对象，在逻辑块编辑器中给它添加一个 `Keyboard` 传感器，激活 All Keys 以使用所有按键。
命名为 **my_sensor**。然后添加一个 `Python` 控制器，并使用 Module 模式，指定以下脚本代码。
或者使用 Script 模式，将以下代码粘贴到 Blender 相应的脚本编辑器中。再添加一个 `Motion` 执行器，
命名为 **my_actuator**，设置 Rot 旋转等属性。

UPBGE-Docs\source\blends\Python_Scripting\003_template\abracadabra.py

```py,ignore
    import bge
    from bge import logic

    # Use bge module to get/set game property + transform
    cont = logic.getCurrentController()
    owner = cont.owner
    scene = logic.getCurrentScene()
    objects = scene.objects
    font_object = objects["Text"]

    # Use bpy.types.TextCurve attributes to set other text settings (size, body, etc)
    font_object_data = font_object.blenderObject.data

    sens = cont.sensors['my_sensor']
    act = cont.actuators['my_actuator']

    if sens.positive:
       cont.activate(act)
       font_object_data.body = "Apple"
       font_object_data.size = 2
       font_object_data.resolution_u = 1
    else:
       cont.deactivate(act)
       font_object_data.body = "Elppa"
       font_object_data.size = 3
       font_object_data.resolution_u = 4
```

upbge-0.30\doc\python_api\examples\bpy.data.py

```py,ignore
    import bpy


    # print all objects
    for obj in bpy.data.objects:
        print(obj.name)


    # print all scene names in a list
    print(bpy.data.scenes.keys())


    # remove mesh Cube
    if "Cube" in bpy.data.meshes:
        mesh = bpy.data.meshes["Cube"]
        print("removing mesh", mesh)
        bpy.data.meshes.remove(mesh)


    # write images into a file next to the blend
    import os
    with open(os.path.splitext(bpy.data.filepath)[0] + ".txt", 'w') as fs:
        for image in bpy.data.images:
            fs.write("%s %d x %d\n" % (image.filepath, image.size[0], image.size[1]))
```



## 🎨 UPBGE Actuators 执行器教程

Logic Bricks 是一个分层设计思想实现的可视化编程工具，它与逻辑节点有些类似的特点，比如都有块
结构的基本概念，块与块之间都通过连接产生调用关系。但是逻辑砖设计是 3 分层结构，传感器层作为输入，
控制器层作为逻辑运算、判断，最后才是做具体工作的执行器。控制器层提供了一个 Python 控制器，通过
它就可以将执行器的功能合并到控制器中完成。

    upbge-0.30\source\gameengine\GameLogic\SCA_SoundActuator.h
    upbge-0.30\doc\python_api\rst\bge_types\bge.types.SCA_SoundActuator.rst

`SCA_SoundActuator` 音频播放

Blender 音频播放使用 Audaspace 框架

    API reference for C++, C and python https://audaspace.github.io.
    Audaspace https://github.com/audaspace/audaspace

KX_SOUNDACT_TYPE 枚举定义播放模式决定了单次触发与持续触发的播放方式：

1. **Stop** 表示没有触发信号就会停止播放；
2. **End** 表示只要触发就播放到音频结束；
3. **Loop** 表示在持续触发信号下，播放到结束后再循环播放。
4. **Bidirectional** 方式会调用 `AUD_Sound_pingpong(sound)` 产生倒播镜像声音。

|                Mode                |    Single Pulse   |    Continouse Pulse   |
|------------------------------------|-------------------|-----------------------|
| KX_SOUNDACT_PLAYSTO                | Play some samples | Play to end           |
| KX_SOUNDACT_PLAYEND                | Play to end       | Play to end           |
| KX_SOUNDACT_LOOPSTO                | Play some samples | Play to end then loop |
| KX_SOUNDACT_LOOPEND                | Play to end       | Play to end then loop |
| KX_SOUNDACT_LOOPBIDIRECTIONAL      | Play to end       | Play to end then loop                      |
| KX_SOUNDACT_LOOPBIDIRECTIONAL_STOP | Play some samples | Play to end then loop                      |

激活 3D Sound 效果就可以使用空间声像，声音在不同的对象上播放，收听者与声音来源对象的方位关系
将影响立体声音的左右声道音量。可以将音源相像成一个锥角状喇叭，喇叭口面向 Z 轴负向，前面的区域可以
听到声音，背对喇叭口的区域听不到。设想一个声像模型，开始是圆柱体，两侧面 inner -> outer 对应
Z+ -> Z- 指向，当 Outer Angle > Inner Angle 这个声像模型变成 inner 侧尖头，表示这边方位
上的声音传播受限，听不到声音。当两个角度值越接近，那么声音的分界越明显，即从听得到声音到完全听不到
声音的区域越来越明显的分界。Inner Angle > Outout Angle 时，就变成 outer 侧尖头，听不到声音。
比如，inner angle = 210，outer angle = 200，那么声音分界就对应有 10 度的范围，并且在声源
的 Z+ 方向有声音。以上在增益 outer gain = 0 的条件下设置。

8 个声像参数如下：

1. **volume_maximum** 在 3D 空间上最小音量，不管收听者多远，音量不会小于此值；
2. **volume_minimum** 在 3D 空间上最在音量，不管收听者多近，音量不会大于此值；
3. **distance_reference** 声音增益 1.0db 所对应的距离；
4. **distance_maximum** 可以听到声音的最距离，超出此距离就不播放声音；
5. **attenuation** 衰减系数，越大就越快趋向最小音量；
6. **cone_angle_inner** 喇叭口内锥角度。
7. **cone_angle_outer** 喇叭口外锥角度。
8. **cone_volume_outer** 锥体外部的增益（外锥体中的增益将在该值和内锥体中的法线增益之间插值）。
    The gain outside the outer cone
    (the gain in the outer cone will be interpolated between this value and
    the normal gain in the inner cone).

其它导出属性参考文档 bge.types.SCA_SoundActuator.rst

此外，声音执行器还提供了三个不需要传感器信号触发的 API：

1. `startSound()` Starts the sound.
2. `pauseSound()` Pauses the sound.
3. `stopSound()` Stops the sound.

cone_angle_inner 和 cone_angle_outer 角度控制声像模型

```cpp,ignore
    /**
     * Sets the cone angle inner of a handle.
     * param handle The handle to set the cone angle inner from.
     * param value The new cone angle inner to set.
     */
    extern AUD_API int AUD_Handle_setConeAngleInner(AUD_Handle* handle, float value);

    /**
     * Sets the cone angle outer of a handle.
     * param handle The handle to set the cone angle outer from.
     * param value The new cone angle outer to set.
     */
    extern AUD_API int AUD_Handle_setConeAngleOuter(AUD_Handle* handle, float value);

    /**
     * Sets the cone volume outer of a handle.
     * param handle The handle to set the cone volume outer from.
     * param value The new cone volume outer to set.
     */
    extern AUD_API int AUD_Handle_setConeVolumeOuter(AUD_Handle* handle, float value);
```



## 🎨 UPBGE Python OOP + SCA_MouseSensor

"Game Development with Blender" by Dalai Felinto and Mike Pan
Published by "CENGAGE Learning" in 2013

此示范演示的 OOP 编程的基本要念：创建自己的类型定义，即代码中的 `Group` 类型定义，它实现
了一个用于保存所有分组对象的列表。即通过创建 OOP 类定义，实现了具有分组功能的类对象。

这里需要使用 `SCA_MouseSensor`，给一个对象添加 Mouse 传感器，设置相应 Mouse Event，
对应的常量定义和功能如下，参考源代码 SCA_MouseSensor::Evaluate()：

    upbge-0.30\source\gameengine\GameLogic\SCA_MouseSensor.cpp
  * KX_MOUSESENSORMODE_LEFTBUTTON(1)    左键点击时触发
  * KX_MOUSESENSORMODE_MIDDLEBUTTON(2)  中键点击时触发
  * KX_MOUSESENSORMODE_RIGHTBUTTON(3)   右键点击时触发
  * KX_MOUSESENSORMODE_BUTTON4(4)       其它功能键点击时触发
  * KX_MOUSESENSORMODE_BUTTON5(5)       其它功能键点击时触发
  * KX_MOUSESENSORMODE_BUTTON6(6)       其它功能键点击时触发
  * KX_MOUSESENSORMODE_BUTTON7(7)       其它功能键点击时触发
  * KX_MOUSESENSORMODE_WHEELUP(8)       滚轮向上时触发
  * KX_MOUSESENSORMODE_WHEELDOWN(9)     滚轮向下时触发
  * KX_MOUSESENSORMODE_MOVEMENT(10)     鼠标移动时触发

    upbge-0.30\source\gameengine\Converter\BL_ConvertSensors.cpp
  * BL_SENS_MOUSE_MOUSEOVER             在绑定当前传感器的对象上悬停时触发
  * BL_SENS_MOUSE_MOUSEOVER_ANY         在任何对象上悬停时触发

后面两种事件由前面的基本鼠标事件转换而是为，使用 `BL_ConvertSensors()` 方法，此方法不仅
用于鼠标事件的转化，还有键盘、消息机制等等。鼠标事件增加了 `SCA_MouseFocusSensor` 类型处理。

场景中添加一个 Cube 和一个 Sphere 用于操作，切换其它分组的游戏对象的显示状态，并添加
**游戏属性**数据设置：

1. **on_off** = True 保存显示状态当前的切换值；
2. **click** = "cube" 或 "sphere" 分别表示要切换显示的目标对象分组；

**visibility_check.py** 脚本用于处理分组的显示状态，通过设置对象的 `visible` 属性完成。
为了鼠标正确点击相应的几何休触发控制器切换 `on_off` 状，需要给以上两个对象设置以下逻辑块：

1. 添加一个 `Mouse` 传感器，设置为 Mouse Over 事件；
2. 添加另一个 `Mouse` 传感器，设置为 Left Button 事件；
3. 将以上两个传感器连接到一个 `And` 控制器，表示只有在当前对象上点击时才触发执行器；
4. 添加一个 `Property` 执行器，Toggle 模式用于切换布尔值的两种状态，属性名称填入**on_off**；

以上逻辑块设置，在几何体上点击时就会改变其 **on_off** 属性值，而这个值将被以下脚本实时读取，
因为通过 `Python` 控制器执行的脚本在每一帧都在执行脚本中的代码，Script 模式执行整个脚本代码，
Module 模式执行指定脚本模块中的控制器函数。以下脚本都使用 Script 模式加载。为了便于管理，将
脚本挂载到 Camera 对象上，添加两个 `Always` 传感器连接各自的 `Python` 控制器以加载脚本。
另外，给执行 **init_world.py** 脚本的控制器设置高优先级，因为它需要先处理状态数据。


场景中再添加任意的几何体，并且设置一个 Game Properties 数据用于分组，创建一个布尔值即可，
命名为 cube 或者 sphere 这样的分组名称即可，后续将通过访问此游戏对象属性数据以确定其组别。
**init_world.py** 脚本中，使用 for in 循环枚举场景中的所有游戏对象，并使用 if in 语句
判断游戏对象是属性 cube 小组，还是 sphere 小组，并相应附加到，`Group` 类型中的列表中。
这个对象就是此示范中演示的 OOP 编程方法，其初始化方法接收一个参数，就是分组名称。

**click**属性用于记录当前分组的点击状态（对应显示状态）。for 循环中处理点击状态数据这部分
有点绕，首先是判断当前对象是否有 click 游戏属性，也就是判断是否是用于操作的两个游戏对象。
然后取出游戏对象的 **click** 属性存储的数据，也就是要控制的目标分组，这个数据就保存到相应的
Group 实例的 click 成员中，cube_group 或 sphere_group 分组。这个过程也就是相当于将
几何体上设置的 Game Properties 数据转存到了 Group.click 属性中保存，注意是引用几何体。

Python 内置函数 `exec(expression)` 用于在当前模块作用域，或者指定作用空间下执行脚本。
Python-3.10.2\Doc\library\functions.rst

    exec(object[, globals[, locals]])

最后，最在 bge.logic 空间设置引用两个分组实例，以便在另一个脚本中共享访问。因为 Python 是动态
脚本语言，类型可以是动态的，随时可以添加属性，而不用另外创建新类型定义。

游戏运行时默认不显示光标，可以设置显示光标： `bge.render.showMouse(True)`

UPBGE-Docs\source\blends\Python_Scripting\002_oop\init_world.py

```py,ignore
    import bge
    from bge import logic as G
    from bge import render as R

    # showing the mouse cursor
    R.showMouse(True)

    # storing the current scene in a variable
    scene = G.getCurrentScene()

    # define a class to store all group elements and the click object
    class Group():
        def __init__(self, name):
            self.name = name
            self.click = None
            self.objects = []

    # create new element groups
    cube_group   = Group("cubes")
    sphere_group = Group("sphere")

    # add all objects with an "ui" property to the created element
    for obj in scene.objects:
        if "cube" in obj:
            cube_group.objects.append(obj)
        elif "sphere" in obj:
            sphere_group.objects.append(obj)
        elif "click" in obj:
            exec("%s_group.click = obj" % (obj["click"]))
            # note exec here is replacing:
            # if obj["click"] == "cube":
            #     cube_group.click = obj
            # elif obj["click"] == "sphere":
            #     sphere_group.click = obj

    G.groups = {"cube":cube_group, "sphere":sphere_group}
```


UPBGE-Docs\source\blends\Python_Scripting\002_oop\visibility_check.py

```py,ignore
    import bge
    from bge import logic as G

    # defines a function to hide/turn visible all the objects passed as argument
    def change_visibility(objects, on_off):
        for obj in objects:
            obj.visible = on_off

    # retrieve the stored groups to local variables
    cube_group   = G.groups["cube"]
    sphere_group = G.groups["sphere"]

    # read the current value of the "on_off" property in the cube/sphere
    cube_visible   = cube_group.click["on_off"]
    sphere_visible = sphere_group.click["on_off"]

    # calls the function into the group object with the visibility flag
    change_visibility(cube_group.objects, cube_visible)
    change_visibility(sphere_group.objects, sphere_visible)
```

## 🎨 UPBGE Python API (源代码分析)

内部模块导致的对象相关接口可以从 UPBGE API 文档查询，另一个短信呼途径则是直接参考源代码：

1. https://github.com/UPBGE/UPBGE-API
2. https://github.com/UPBGE/upbge/releases
* Blender for Developers
  * Bledner Code Layout https://www.blender.org/bf/codelayout.jpg
  * Bledner Code Layout of modules https://download.blender.org/ftp/ideasman42/pics/code_layout.webp

API 文档本身是通过 doxygen 工具从源代码中内容生成的摘要信息，所以阅读源代码有不一样的效果，
关键是找对阅读方法（心态）和代码阅读工具，高效定位文件、符号的工具即为好。阅读代码至少有两点
实用主义的好处：一是学习引擎更底层的工作原理，二是为今后可能的深入开发打下一个基础。
源代码阅读工具配置参考：https://github.com/Jeangowhy/opendocs
Code Map and Live Dependency Validation on Visual Studio
https://learn.microsoft.com/en-us/visualstudio/modeling/map-dependencies-across-your-solutions

当然，除了生成的摘要信息外，官方还在文档中添加额外的资源，比如示范程序：

    upbge-0.30\doc\python_api\examples\aud
    upbge-0.30\doc\python_api\examples\bpy
    upbge-0.30\doc\python_api\examples\gpu
    upbge-0.30\doc\python_api\examples\matah

另外，还可以使用 Python 内置的对象信息查询方法，如 `help('tuple')` 或者 `dir('tuple')`。

根据 Bledner Code Layout 文档显示，Blender 源代码主要分布在以下几个目录：

    🟡 Modules only call lower level code

    <---------------- Editor definitions, drawing, interaction ---------------->
    <---------------------------- Editor utilities ---------------------------->
    <---------------------------------- Tools --------------------------------->
    blender/source/blender/editors/                                          🟡

    <-------------------------- Game & Render engine -------------------------->
    blender/source/                    blender/source/blender                🔵

    <-------------------------- General Blender APIs -------------------------->
    blender/source/blender/                                                  🟡

    <----------------- Utility Libraries (in own development) ----------------->
    blender/intern/                                                          🔵

    <-------------- Utility Libraries (from external development) ------------->
    blender/extern/                                                          🔵

对于 UPBGE 游戏引擎部分则集中在 gameengine 20 个子目录下的将近 500 个文件。就当下而言，
将可以阅读重点聚焦到包含 `KX_GameObject` 和 `KX_PythonComponent` 两个类型的 Ketsji
这个子目录下：

    > tree.exe -f UPBGE-0.30-windows-x86_64\upbge-0.30\source\gameengine
    |-- gameengine\Ketsji
    |   |-- gameengine\Expressions\EXP_Python.h
    |   |-- gameengine\Expressions\EXP_PyObjectPlus.h
    |   |-- gameengine\Ketsji\KX_BlenderCanvas.cpp
    |   |-- gameengine\Ketsji\KX_BlenderCanvas.h
    |   |-- gameengine\Ketsji\KX_BlenderMaterial.cpp
    |   |-- gameengine\Ketsji\KX_BlenderMaterial.h
    |   |-- gameengine\Ketsji\KX_Camera.cpp
    |   |-- gameengine\Ketsji\KX_Camera.h
    |   |-- gameengine\Ketsji\KX_EmptyObject.cpp
    |   |-- gameengine\Ketsji\KX_EmptyObject.h
    |   |-- gameengine\Ketsji\KX_FontObject.cpp
    |   |-- gameengine\Ketsji\KX_FontObject.h
    |   |-- gameengine\Ketsji\KX_GameObject.cpp
    |   |-- gameengine\Ketsji\KX_GameObject.h
    |   |-- gameengine\Ketsji\KX_Globals.cpp
    |   |-- gameengine\Ketsji\KX_Globals.h
    |   |-- gameengine\Ketsji\KX_KetsjiEngine.cpp
    |   |-- gameengine\Ketsji\KX_KetsjiEngine.h
    |   |-- gameengine\Ketsji\KX_PythonInit.cpp
    |   |-- gameengine\Ketsji\KX_PythonInit.h
    |   |-- gameengine\Ketsji\KX_PythonInitTypes.cpp
    |   |-- gameengine\Ketsji\KX_PythonInitTypes.h
    |   |-- gameengine\Ketsji\KX_PythonMain.cpp
    |   |-- gameengine\Ketsji\KX_PythonMain.h
    |   |-- gameengine\Ketsji\KX_PythonProxy.cpp
    |   |-- gameengine\Ketsji\KX_PythonProxy.h
    |   |-- gameengine\Ketsji\KX_PythonProxyManager.cpp
    |   |-- gameengine\Ketsji\KX_PythonProxyManager.h
    |   |-- gameengine\Ketsji\KX_PythonComponent.cpp
    |   |-- gameengine\Ketsji\KX_PythonComponent.h
    |   |-- gameengine\Ketsji\KX_Scene.cpp
    |   |-- gameengine\Ketsji\KX_Scene.h

Python 模块开发接口中定义了一套接口类型，如 `PyObject`、`PyCFunction`、`PyMethodDef`
等等用于向脚本环境导出类型定义、函数符号、成员方法定义。Ketsji Engine 基于这些接口类型定义了
一系列宏函数用来向 Python 模块导出各种符号定义。`EXP_PyObjectPlus` 这个抽象类代表了一个
导出出 Python 脚本环境中的类型，它定义了一套通用方法，支撑起 UPBGE 脚本环境下的基类结构。

另一方面，Python 接口规则使用 `PyTypeObject` 来定义一个导出到脚本环境的类型定义结构，这个
接口导出的类型，在脚本看来才是“真正”的类型定义。相对于 `EXP_PyObjectPlus`，它是 C++ 类型。

源代码条件编译使用 `WITH_PYTHON`，以上这些符号都可以用来搜索那些导出到脚本环境的 API，
名称中带有 DOC 表示这是一个导出 API 帮助文档信息的宏定义：

```cpp
// These macros are helpful when embedding Python routines
    EXP_PYMETHOD(class_name, method_name)
    EXP_PYMETHOD_VARARGS(class_name, method_name)
    EXP_PYMETHOD_NOARGS(class_name, method_name)
    EXP_PYMETHOD_O(class_name, method_name)
/// Method table macro (with doc).
    EXP_PYMETHOD_DOC(class_name, method_name)
    EXP_PYMETHOD_DOC_VARARGS(class_name, method_name)
    EXP_PYMETHOD_DOC_O(class_name, method_name)
    EXP_PYMETHOD_DOC_NOARGS(class_name, method_name)
/// Method table macro (with doc).
    EXP_PYMETHODTABLE(class_name, method_name)
    EXP_PYMETHODTABLE_O(class_name, method_name)
    EXP_PYMETHODTABLE_NOARGS(class_name, method_name)
    EXP_PYMETHODTABLE_KEYWORDS(class_name, method_name)
/// Function implementation macro.
    EXP_PYMETHODDEF_DOC(class_name, method_name, doc_string)
    EXP_PYMETHODDEF_DOC_VARARGS(class_name, method_name, doc_string)
    EXP_PYMETHODDEF_DOC_O(class_name, method_name, doc_string)
    EXP_PYMETHODDEF_DOC_NOARGS(class_name, method_name, doc_string)
```

引擎中定义了两个链表数据结构，它们都是双向循环链表，和双向链表 (Doubly Linked List) 不同，
增加首尾衔接功能，`SG_DList` 搜索动作不会以有到尾端的情况出现。重双向循环链表 `SG_QList`，
同时存储了两条 `SG_DList` 双向循环链表。链表是一种插入算法时间为常数的数据结构，因为链表中的
节点使用指针记录前后节点的位置，所以只需要断开原链接，将新的数据链接前后节点即完成数据插入。
但是数据搜索速度随着节点数量增加而下降，因为要逐节点线性查找。

以下两个类型定义本身作为链表中的节点使用，不同的是 QList 存储双链，DList 存储单链，每条循环链
使用 m_current 指针记录当前位置：

1. `SG_DList` Double circular linked list
2. `SG_QList` Double-Double circular linked list. For storing an object is two lists simultaneously


链表的一种改进算法是跳表，以下用一个 [1,9] 的区间数据来解析 SkipList 结构，因为数据量少，
只需要 2 级索引即可以实现二分法查找的效率：

    Level 2 -> 🔴1 ------------------------> 🔴5
                |                             |
    Level 1 -> 🔴1 --------> 🔴3 ---------> 🔴5 --------> 🔴7
                |              |              |              |
               🔴1 -> 🔴2 -> 🔴3 -> 🔴4 -> 🔴5 -> 🔴6 -> 🔴7 -> 🔴8 -> 🔴9


`SCA_ILogicBrick` 是逻辑块的基类，传感器、控制器、执行器等等都派生自此，它些类因为节点连接
关系的处理，就需要使用链表这样的数据结构。

`SCA_IObject` 是游戏对象的父类，SCA 前缀表明这是一个场景相关类型，这个类形提供一些常用方法。

`KX_Scene` 场景对象可以访问到场景内的所有对象，它不仅继承了 Python Proxy，还从第二父类
`SCA_IScene` 继承一系统调试方法，C++/Python 支持多继承，但这一特性带来的复杂度多于便利。

多承继引入的一个问题就是同名方法查找问题：如果继承多个父类中，都定了相同的函数，那么选用哪一个？
这就是 Python MRO - Method Resolution Order 机制中 C3 算法要做的事，C3 即三个约束条件。

C3 算法保证了三件事情：

1. 单调性：任意两个类的相对顺序和自己所有父类的 MRO 顺序一致，即父集与子集关系。
2. 一致性：任意两个类的顺序和继承图里所有直接继承自这两个类的声明顺序一致。
3. 有序性：如果两个类不具有直接的继承关系，那么找到两个类的最小公共子类，其多继承顺序靠前的分支上的类具有高优先级。

基本的树状数据结构搜索方法有两种：

- 【经典类】 Depth-First Search (DFS) 深度优先搜索算法；
- 【新式类】 Breadth First Search (BFS) 广度优先搜索算法；

Python 旧式类的算法使用从左往右（继承顺序），采用深度优先搜索（DFS）的算法，称为旧式类的 MRO。
单纯使用这两种方法都不是最佳选择，Python 最后选择了 C3 算法。多继承必然会遇到棱形法则关系处理
Multiple Inheritance: The Diamond Rule，以下示意图摘自 Python 创始人的论文：
PEP 253 -- Subtyping Built-in Types by Guido van Rossum

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

C3 算法又称为超类线性化 (superclass linearization)。Python 会计算出每一个类的 MRO 列表。
一个类的 MRO 列表是一个包含了其继承链上所有基类的线性顺序列，并且继承列表中的每一项均保持唯一。
当需要在继承链中寻找某个属性时，Python 会在 MRO 列表中从左到右开始查找各个基类，直到找到
第一个匹配这个属性的类为止。

我们不必深究这个算法的数学原理，它实际上就是合并所有父类的 MRO 列表并遵循如下三条准则：

- 先子类、后父类的顺序进行符号匹配检查；
- 根据父类在列表中的从左到右顺序进行检查；
- 如果对下一个类存在两个合法的选择，选择第一个父类；

其实我们只需要知道 MRO 列表中类的顺序代表着类层次结构间的关系即可。
使用类型的 `__mro__` 或者 `mro()` 可以获取其 MRO 解析结果数据。

```py,ignore
    class A:
        def save(self): print("A::save()")

    class B(A):
        def save(self): print("B::save()")

    class C(A):
        def save(self): print("C::save()")

    class BS(B, C): pass
    class CS(C, B): pass

    BS().save() # B::save()
    CS().save() # C::save()
    print(BS.mro()) # (<'BS'>, <'B'>, <'C'>, <'A'>, <'object'>)
```


`KX_PythonProxyManager` 是游戏对象的注册中心，负责调用所有游戏对象的 `Update()` 方法。

    +==========================================+
    | KX_PythonProxyManager                    |
    +==========================================+
    |  std::vector<KX_GameObject *> m_objects  |
    |  bool m_objects_changed = false          |
    |  void Register(KX_GameObject *gameobj)   |
    |  void Unregister(KX_GameObject *gameobj) |
    |  void Update()                           |
    +==========================================+


upbge-0.30\source\gameengine\GameLogic\SCA_LogicManager.h
upbge-0.30\source\gameengine\GameLogic\SCA_LogicManager.cpp

    +==========================================+
    | SCA_LogicManager                         |
    +==========================================+
    void RegisterEventManager (SCA_EventManager *eventmgr);
    void RegisterToSensor     (SCA_IController *controller, class SCA_ISensor *sensor);
    void RegisterToActuator   (SCA_IController *controller, class SCA_IActuator *actuator);
    void BeginFrame   (double curtime, double fixedtime);
    void UpdateFrame  (double curtime);
    void EndFrame();
    void AddActiveActuator    (SCA_IActuator *actua, bool event)


upbge-0.30\source\gameengine\GameLogic\SCA_ISensor.h
upbge-0.30\source\gameengine\GameLogic\SCA_ISensor.cpp

    +==================================================================+
    | SCA_ISensor  (SCA_IObject *gameobj, SCA_EventManager *eventmgr)  |
    +==================================================================+
    virtual void ReParent (SCA_IObject *parent);
            void Activate (SCA_LogicManager *logicmgr);
    virtual bool Evaluate () = 0;
    virtual bool IsPositiveTrigger ();
    virtual void Init ();
            void SetPulseMode (bool posmode, bool negmode, int skippedticks);
            void SetInvert (bool inv);
            void SetLevel (bool lvl);
            void SetTap (bool tap);
    virtual void RegisterToManager ();
    virtual void UnregisterToManager ();
            void Replace_EventManager (SCA_LogicManager *logicmgr);
            void LinkToController (SCA_IController *controller);
            void UnlinkController (SCA_IController *controller);
            void UnlinkAllControllers ();
            void ActivateControllers (SCA_LogicManager *logicmgr);
    virtual void ProcessReplica ();
    virtual double GetNumber ();
    virtual sensortype GetSensorType ();
            void Suspend ();
            bool IsSuspended ();
            bool GetState ();
            bool GetPrevState ();
             int GetPosTicks ();
             int GetNegTicks ();
            void Resume ();
            void ClrLink ();
            void IncLink ();
            void DecLink ();
            bool IsNoLink () const;



以下是 KetsjiEngine 一些主要类型关系示意图：

    *------------------*
    | EXP_PyObjectPlus |
    *------------------*
      |   .-------------------------.
      +-->| EXP_Value               |-----.
      |   '-------------------------'     |
      |     |   .----------------------.  |
      |     +-->| KX_BlenderMaterial   |  |   .-----------------.
      |     |   '----------------------'  +-->| KX_PythonProxy  |
      |     |   .----------------------.  |   '-----------------'
      |     +-->| KX_CharacterWrapper  |  |     |   .-------------.
      |     |   '----------------------'  |     +-->| SCA_IObject |
      |     |   .----------------------.  |     |   '-------------'
      |     +-->| KX_ConstraintWrapper |  |     |     |   .---------------.
      |     |   '----------------------'  |     |     `-->| KX_GameObject |
      |     |   .----------------------.  |     |         '---------------'
      |     +-->| KX_LodManager        |  |     |   .--------------------.
      |     |   '----------------------'  |     +-->| KX_PythonComponent |
      |     |   .----------------------.  |     |   '--------------------'
      |     +-->| KX_VehicleWrapper    |  |     |   .-------------.
      |     |   '----------------------'  |     `-->| KX_Scene    | (SCA_IScene)
      |     |   .----------------------.  |         '-------------'
      |     +-->| SCA_InputEvent       |  |
      |     |   '----------------------'  |   .-----------------.
      |     |   .----------------------.  ·-->| SCA_ILogicBrick | (SG_QList)
      |     `-->| SCA_PythonJoystick   |      '-----------------'
      |         '----------------------'        |   .-----------------.
      |   .-------------------------.           +-->| SCA_IActuator   |
      +-->| KX_2DFilterManager      |           |   '-----------------'
      |   '-------------------------'           |     |   .---------------------.
      |   .-------------------------.           |     +-->| BL_ArmatureActuator |
      +-->| KX_LibLoadStatus        |           |     |   '---------------------'
      |   '-------------------------'           |     +-->| SCA_ActionActuator  |
      |   .-------------------------.           |     |   '---------------------'
      +-->| KX_LodLevel             |           |     `-->| SCA_TrackToActuator |
      |   '-------------------------'           |         '---------------------'
      |   .-------------------------.           |   .-----------------.
      +-->| SCA_PythonKeyboard      |           +-->| SCA_IController |
      |   '-------------------------'           |   '-----------------'
      |   +-------------------------+           |     |   .----------------------.
      `-->| SCA_PythonMouse         |           |     `-->| SCA_PythonController |
          +-------------------------+           |         '----------------------'
                                                |   .-------------.
                                                `-->| SCA_ISensor |
                                                    '-------------'
    .-------------------.
    | KX_GameObject     |
    '-------------------'
      |   .-------------------.
      +-->| BL_ArmatureObject |
      |   '-------------------'
      +-->| KX_Camera         |
      |   '-------------------'
      +-->| KX_EmptyObject    |
      |   '-------------------'
      +-->| KX_FontObject     |
      |   '-------------------'
      +-->| KX_LightObject    |
      |   '-------------------'
      `-->| KX_NavMeshObject  |
          '-------------------'

      *------------------------------------------------------*
      | SCA_ILogicBrick : public EXP_Value, public SG_QList  |
      *------------------------------------------------------*
        |   .-----------------.            |   .-----------------.
        +-->| SCA_ISensor     |            +-->| SCA_IActuator   |
        |   '-----------------'                '-----------------'
        |     |--> SCA_ActuatorSensor            |--> BL_ArmatureActuator
        |     |--> SCA_AlwaysSensor              |--> SCA_2DFilterActuator
        |     |--> SCA_ArmatureSensor            |--> SCA_ActionActuator
        |     |--> SCA_CollisionSensor           |--> SCA_AddObjectActuator
        |     |--> SCA_DelaySensor               |--> SCA_CameraActuator
        |     |--> SCA_JoystickSensor            |--> SCA_CollectionActuator
        |     |--> SCA_KeyboardSensor            |--> SCA_ConstraintActuator
        |     |--> SCA_MouseSensor               |--> SCA_DynamicActuator
        |     |--> SCA_MovementSensor            |--> SCA_EndObjectActuator
        |     |--> SCA_NetworkMessageSensor      |--> SCA_GameActuator
        |     |--> SCA_PropertySensor            |--> SCA_MouseActuator
        |     |--> SCA_RandomSensor              |--> SCA_NetworkMessageActuator
        |     `--> SCA_RaySensor                 |--> SCA_ObjectActuator
        |   .-----------------.                  |--> SCA_ParentActuator
        `-->| SCA_IController |                  |--> SCA_PropertyActuator
            '-----------------'                  |--> SCA_RandomActuator
              |--> SCA_ANDController             |--> SCA_ReplaceMeshActuator
              |--> SCA_ExpressionController      |--> SCA_SceneActuator
              |--> SCA_IController               |--> SCA_SoundActuator
              |--> SCA_NANDController            |--> SCA_StateActuator
              |--> SCA_NORController             |--> SCA_SteeringActuator
              |--> SCA_ORController              |--> SCA_TrackToActuator
              |--> SCA_PythonController          |--> SCA_VibrationActuator
              |--> SCA_XNORController            `--> SCA_VisibilityActuator
              `--> SCA_XORController

    EXP_PyObjectPlus
      |-->  BL_ArmatureBone             : public EXP_PyObjectPlus
    KX_2DFilterManager              : public RAS_2DFilterManager, public EXP_PyObjectPlus
    EXP_Expression                  : public CM_RefCount<EXP_Expression>
      |-->  EXP_ConstExpr               : public EXP_Expression
      |-->  EXP_IdentifierExpr          : public EXP_Expression
      |-->  EXP_Operator2Expr           : public EXP_Expression
    EXP_Value : public EXP_PyObjectPlus, public CM_RefCount<EXP_Value>
      |-->  BL_ArmatureChannel          : public EXP_Value
      |-->  BL_ArmatureConstraint       : public EXP_Value
      |-->  BL_Shader                   : public EXP_Value, public virtual RAS_Shader
      |-->  BL_Texture                  : public EXP_Value, public RAS_Texture
      |-->  EXP_ListWrapper             : public EXP_Value
      |-->  EXP_PropValue               : public EXP_Value
      |-->      EXP_BaseListValue       : public EXP_PropValue
      |-->      EXP_EmptyValue          : public EXP_PropValue
      |-->      EXP_ErrorValue          : public EXP_PropValue
      |-->      EXP_FloatValue          : public EXP_PropValue
      |-->      EXP_StringValue         : public EXP_PropValue
      |-->  KX_2DFilterFrameBuffer      : public EXP_Value, public RAS_2DFilterFrameBuffer
      |-->  KX_BlenderMaterial          : public EXP_Value, public RAS_IPolyMaterial
      |-->  KX_CharacterWrapper         : public EXP_Value
      |-->  KX_CollisionContactPoint    : public EXP_Value
      |-->  KX_ConstraintWrapper        : public EXP_Value
      |-->  KX_LodManager               : public EXP_Value
      |-->  KX_MeshProxy                : public EXP_Value
      |-->  KX_PolyProxy                : public EXP_Value
      |-->  KX_PythonProxy              : public EXP_Value
      |-->  KX_VehicleWrapper           : public EXP_Value
      |-->  KX_VertexProxy              : public EXP_Value
      |-->  SCA_InputEvent              : public EXP_Value
      |-->  SCA_PythonJoystick          : public EXP_Value
      |-->  Texture                     : public EXP_Value
    RAS_2DFilter                    : public virtual RAS_Shader
    SCA_TimeEventManager            : public SCA_EventManager



## 🎨 UPBGE Python API Export

KX_PythonInit.cpp 代码有一系列核心模块的导出，`initBGE()` 方法初始化的模块包括：

1. Application Data (bge.app)
2. Game Types (bge.types)
3. Physics Constraints (bge.constraints)
4. 游戏逻辑模块的方法导出 Game Logic (bge.logic)
5. 光栅化模块的方法导出 Rasterizer (bge.render)
6. Game Keys (bge.events)
7. Video Texture (bge.texture)

```cpp
    PyMODINIT_FUNC initBGE()
    {
      PyObject *modules = PyImport_GetModuleDict();
      PyObject *mod = PyModule_Create(&BGE_module_def);

      addSubModule(modules, mod, initApplicationPythonBinding(), "bge.app");
      addSubModule(modules, mod, initConstraintPythonBinding(), "bge.constraints");
      addSubModule(modules, mod, initGameKeysPythonBinding(), "bge.events");
      addSubModule(modules, mod, initGameLogicPythonBinding(), "bge.logic");
      addSubModule(modules, mod, initRasterizerPythonBinding(), "bge.render");
      addSubModule(modules, mod, initGameTypesPythonBinding(), "bge.types");
      addSubModule(modules, mod, initVideoTexturePythonBinding(), "bge.texture");

      return mod;
    }
```

EXP_Value::Attributes
upbge-0.30\source\gameengine\Expressions\intern\Value.cpp

    EXP_PYATTRIBUTE_RO_FUNCTION("name", EXP_Value, pyattr_get_name),


SCA_ILogicBrick::Attributes
upbge-0.30\source\gameengine\GameLogic\SCA_ILogicBrick.cpp

    EXP_PYATTRIBUTE_RO_FUNCTION("owner", pyattr_get_owner),
    EXP_PYATTRIBUTE_INT_RW     ("executePriority", 0, 100000, false, m_Execute_Priority),

SCA_ISensor::Methods
upbge-0.30\source\gameengine\GameLogic\SCA_ISensor.h

    EXP_PYMETHODTABLE_NOARGS(SCA_ISensor, reset)


SCA_ISensor::Attributes

    EXP_PYATTRIBUTE_BOOL_RW      ("usePosPulseMode", m_pos_pulsemode),
    EXP_PYATTRIBUTE_BOOL_RW      ("useNegPulseMode", m_neg_pulsemode),
    EXP_PYATTRIBUTE_INT_RW       ("skippedTicks", 0, 100000, true, m_skipped_ticks),
    EXP_PYATTRIBUTE_BOOL_RW      ("invert",          m_invert),
    EXP_PYATTRIBUTE_BOOL_RW_CHECK("level",           m_level, pyattr_check_level),
    EXP_PYATTRIBUTE_BOOL_RW_CHECK("tap",             m_tap, pyattr_check_tap),
    EXP_PYATTRIBUTE_RO_FUNCTION  ("triggered",       pyattr_get_triggered),
    EXP_PYATTRIBUTE_RO_FUNCTION  ("positive",        pyattr_get_positive),
    EXP_PYATTRIBUTE_RO_FUNCTION  ("status",          pyattr_get_status),
    EXP_PYATTRIBUTE_RO_FUNCTION  ("pos_ticks",       pyattr_get_posTicks),
    EXP_PYATTRIBUTE_RO_FUNCTION  ("neg_ticks",       pyattr_get_negTicks),
    EXP_PYATTRIBUTE_RW_FUNCTION  ("frequency",       pyattr_get_frequency, pyattr_set_frequency),


`SCA_IScene` API 导出。

    +==========================================================================+
    | SCA_IScene                                                               |
    +==========================================================================+
    | const std::vector<SCA_DebugProp> &GetDebugProperties () const            |
    | bool PropertyInDebugList (SCA_IObject *gameobj, const std::string &name) |
    | bool ObjectInDebugList (SCA_IObject *gameobj)                            |
    | void RemoveAllDebugProperties ()                                         |
    | void AddDebugProperty (SCA_IObject *gameobj, const std::string &name)    |
    | void RemoveDebugProperty (SCA_IObject *gameobj, const std::string &name) |
    | void RemoveObjectDebugProperties (SCA_IObject *gameobj)                  |
    +==========================================================================+

    +=======================================================================+
    | SCA_IObject                                                           |
    +=======================================================================+
    | SCA_ControllerList &GetControllers()                                  |
    |     SCA_SensorList &GetSensors()                                      |
    |   SCA_ActuatorList &GetActuators()                                    |
    |           SG_QList &GetActiveActuators()                              |
    |           SG_QList &GetActiveControllers()                            |
    |    static SG_QList &GetActiveBookmarkedControllers()                  |
    |               void  AddSensor(SCA_ISensor *act)                       |
    |               void  ReserveSensor(int num)                            |
    |               void  AddController(SCA_IController *act)               |
    |               void  ReserveController(int num)                        |
    |               void  AddActuator(SCA_IActuator *act)                   |
    |               void  ReserveActuator(int num)                          |
    |               void  RegisterActuator(SCA_IActuator *act)              |
    |               void  UnregisterActuator(SCA_IActuator *act)            |
    |               void  RegisterObject(SCA_IObject *objs)                 |
    |               void  UnregisterObject(SCA_IObject *objs)               |
    |       virtual bool  UnlinkObject(SCA_IObject *clientobj)              |
    |        SCA_ISensor *FindSensor(const std::string &sensorname)         |
    |      SCA_IActuator *FindActuator(const std::string &actuatorname)     |
    |    SCA_IController *FindController(const std::string &controllername) |
    |               void  SuspendLogic(void)                                |
    |               void  ResumeLogic(void)                                 |
    |               void  SetInitState(unsigned int initState)              |
    |               void  ResetState()                                      |
    |               void  SetState(unsigned int state)                      |
    |       unsigned int  GetState()                                        |
    |          SG_QList **GetFirstState()                                   |
    |               void  SetFirstState(SG_QList *firstState)               |
    |        virtual int  GetGameObjectType() const                         |
    +=======================================================================+

Game Logic (bge.logic) API 导出列表，定位到这些导出函数，代码中包含了文档信息，文档内容
使用 `PyDoc_STRVAR` 宏函数定义：

|          APIs         |       PyCFunction        |  Arguments   |
|-----------------------|--------------------------|--------------|
| expandPath            | gPyExpandPath            | METH_VARARGS |
| startGame             | gPyStartGame             | METH_VARARGS |
| endGame               | gPyEndGame               | METH_NOARGS  |
| restartGame           | gPyRestartGame           | METH_NOARGS  |
| saveGlobalDict        | gPySaveGlobalDict        | METH_NOARGS  |
| loadGlobalDict        | gPyLoadGlobalDict        | METH_NOARGS  |
| sendMessage           | gPySendMessage           | METH_VARARGS |
| getCurrentScene       | gPyGetCurrentScene       | METH_NOARGS  |
| getCurrentController  | SCA_PythonController::sPyGetCurrentController| METH_NOARGS|
| getInactiveSceneNames | gPyGetInactiveSceneNames | METH_NOARGS  |
| getSceneList          | gPyGetSceneList          | METH_NOARGS  |
| getRandomFloat        | gPyGetRandomFloat        | METH_NOARGS  |
| setGravity            | gPySetGravity            | METH_O       |
| getSpectrum           | gPyGetSpectrum           | METH_NOARGS  |
| getMaxLogicFrame      | gPyGetMaxLogicFrame      | METH_NOARGS  |
| setMaxLogicFrame      | gPySetMaxLogicFrame      | METH_VARARGS |
| getMaxPhysicsFrame    | gPyGetMaxPhysicsFrame    | METH_NOARGS  |
| setMaxPhysicsFrame    | gPySetMaxPhysicsFrame    | METH_VARARGS |
| getLogicTicRate       | gPyGetLogicTicRate       | METH_NOARGS  |
| setLogicTicRate       | gPySetLogicTicRate       | METH_VARARGS |
| getPhysicsTicRate     | gPyGetPhysicsTicRate     | METH_NOARGS  |
| setPhysicsTicRate     | gPySetPhysicsTicRate     | METH_VARARGS |
| getExitKey            | gPyGetExitKey            | METH_NOARGS  |
| setExitKey            | gPySetExitKey            | METH_VARARGS |
| setRender             | gPySetRender             | METH_VARARGS |
| getRender             | gPyGetRender             | METH_NOARGS  |
| getUseExternalClock   | gPyGetUseExternalClock   | METH_NOARGS  |
| setUseExternalClock   | gPySetUseExternalClock   | METH_VARARGS |
| getClockTime          | gPyGetClockTime          | METH_NOARGS  |
| setClockTime          | gPySetClockTime          | METH_VARARGS |
| getFrameTime          | gPyGetFrameTime          | METH_NOARGS  |
| getRealTime           | gPyGetRealTime           | METH_NOARGS  |
| getAverageFrameRate   | gPyGetAverageFrameRate   | METH_NOARGS  |
| getTimeScale          | gPyGetTimeScale          | METH_NOARGS  |
| setTimeScale          | gPySetTimeScale          | METH_VARARGS |
| getBlendFileList      | gPyGetBlendFileList      | METH_VARARGS |
| PrintGLInfo           | pyPrintExt               | METH_NOARGS  |
| getGraphicsCardVendor | gPyGetGraphicsCardVendor | METH_NOARGS  |
| PrintMemInfo          | pyPrintStats             | METH_NOARGS  |
| NextFrame             | gPyNextFrame             | METH_NOARGS  |
| getProfileInfo        | gPyGetProfileInfo        | METH_NOARGS  |
| LibLoad               | gLibLoad                 | METH_VARARGS |
| LibNew                | gLibNew                  | METH_VARARGS |
| LibFree               | gLibFree                 | METH_VARARGS |
| LibList               | gLibList                 | METH_VARARGS |

KX_GameObject.cpp 导出 KX_GameObject(SCA_IObject) 相关 API。

```cpp
    /* experimental, don't rely on these yet */
    EXP_PYATTRIBUTE_RO_FUNCTION("sensors", KX_GameObject, pyattr_get_sensors),
    EXP_PYATTRIBUTE_RO_FUNCTION("controllers", KX_GameObject, pyattr_get_controllers),
    EXP_PYATTRIBUTE_RO_FUNCTION("actuators", KX_GameObject, pyattr_get_actuators),
    EXP_PYATTRIBUTE_RO_FUNCTION("components", KX_GameObject, pyattr_get_components),
```

|       Python APIs       |    KX_GameObject Methods     |   Arugments    |
|-------------------------|------------------------------|----------------|
| applyForce              | ::sPyApplyForce              | METH_VARARGS   |
| applyTorque             | ::sPyApplyTorque             | METH_VARARGS   |
| applyRotation           | ::sPyApplyRotation           | METH_VARARGS   |
| applyMovement           | ::sPyApplyMovement           | METH_VARARGS   |
| getLinearVelocity       | ::sPyGetLinearVelocity       | METH_VARARGS   |
| setLinearVelocity       | ::sPySetLinearVelocity       | METH_VARARGS   |
| getAngularVelocity      | ::sPyGetAngularVelocity      | METH_VARARGS   |
| setAngularVelocity      | ::sPySetAngularVelocity      | METH_VARARGS   |
| getVelocity             | ::sPyGetVelocity             | METH_VARARGS   |
| setDamping              | ::sPySetDamping              | METH_VARARGS   |
| getReactionForce        | ::sPyGetReactionForce        | METH_NOARGS    |
| alignAxisToVect         | ::sPyAlignAxisToVect         | METH_VARARGS & METH_KEYWORDS |
| getAxisVect             | ::sPyGetAxisVect             | METH_O         |
| suspendPhysics          | ::sPySuspendPhysics          | METH_VARARGS   |
| restorePhysics          | ::sPyRestorePhysics          | METH_NOARGS    |
| suspendDynamics         | ::sPySuspendDynamics         | METH_VARARGS   |
| restoreDynamics         | ::sPyRestoreDynamics         | METH_NOARGS    |
| enableRigidBody         | ::sPyEnableRigidBody         | METH_NOARGS    |
| disableRigidBody        | ::sPyDisableRigidBody        | METH_NOARGS    |
| applyImpulse            | ::sPyApplyImpulse            | METH_VARARGS   |
| setCollisionMargin      | ::sPySetCollisionMargin      | METH_O         |
| setParent               | ::sPySetParent               | METH_VARARGS & METH_KEYWORDS |
| setVisible              | ::sPySetVisible              | METH_VARARGS   |
| setOcclusion            | ::sPySetOcclusion            | METH_VARARGS   |
| removeParent            | ::sPyRemoveParent            | METH_NOARGS    |
| getPhysicsId            | ::sPyGetPhysicsId            | METH_NOARGS    |
| getPropertyNames        | ::sPyGetPropertyNames        | METH_NOARGS    |
| replaceMesh             | ::sPyReplaceMesh             | METH_VARARGS & METH_KEYWORDS |
| endObject               | ::sPyEndObject               | METH_NOARGS    |
| reinstancePhysicsMesh   | ::sPyReinstancePhysicsMesh   | METH_VARARGS & METH_KEYWORDS |
| replacePhysicsShape     | ::sPyReplacePhysicsShape     | METH_O         |
| setCcdMotionThreshold   | ::sPySetCcdMotionThreshold   | METH_VARARGS   |
| setCcdSweptSphereRadius | ::sPySetCcdSweptSphereRadius | METH_VARARGS   |
| get                     | ::sPyget                     | METH_VARARGS   |

KX_GameObject 部分宏函数生成方法以及属性定义，宏名中 RW 和 RO 分别表示具有读写和只读功能，
FUCNTION 表示属性使用读写控制器函数。以 EXP_PYMETHODTABLE_KEYWORDS 宏函数为例，它会将
rayCastTo 方法导出参数拼接成以下的样式：

    { "rayCastTo", (PyCFunction)KX_GameObject::sPyrayCastTo,
        METH_VARARGS | METH_KEYWORDS, (const char *)KX_GameObject::sPyrayCastTo_doc }

    #define EXP_PYMETHODTABLE_KEYWORDS(class_name, method_name) \
        { \
          #method_name, (PyCFunction)class_name::sPy##method_name, METH_VARARGS | METH_KEYWORDS, \
              (const char *)class_name::method_name##_doc \
        }

```cpp

    EXP_PYMETHODTABLE_KEYWORDS(KX_GameObject, rayCastTo),
    EXP_PYMETHODTABLE_KEYWORDS(KX_GameObject, rayCast),
    EXP_PYMETHODTABLE_O       (KX_GameObject, getDistanceTo),
    EXP_PYMETHODTABLE_O       (KX_GameObject, getVectTo),
    EXP_PYMETHODTABLE_KEYWORDS(KX_GameObject, sendMessage),
    EXP_PYMETHODTABLE         (KX_GameObject, addDebugProperty),

    EXP_PYMETHODTABLE_KEYWORDS(KX_GameObject, playAction),
    EXP_PYMETHODTABLE         (KX_GameObject, stopAction),
    EXP_PYMETHODTABLE         (KX_GameObject, getActionFrame),
    EXP_PYMETHODTABLE         (KX_GameObject, getActionName),
    EXP_PYMETHODTABLE         (KX_GameObject, setActionFrame),
    EXP_PYMETHODTABLE         (KX_GameObject, isPlayingAction),

    EXP_PYATTRIBUTE_SHORT_RO   ("currentLodLevel",      m_currentLodLevel),
    EXP_PYATTRIBUTE_RW_FUNCTION("lodManager",           pyattr_get_lodManager, pyattr_set_lodManager),
    EXP_PYATTRIBUTE_RW_FUNCTION("name",                 pyattr_get_name, pyattr_set_name),
    EXP_PYATTRIBUTE_RO_FUNCTION("parent",               pyattr_get_parent),
    EXP_PYATTRIBUTE_RO_FUNCTION("groupMembers",         pyattr_get_group_members),
    EXP_PYATTRIBUTE_RO_FUNCTION("groupObject",          pyattr_get_group_object),
    EXP_PYATTRIBUTE_RO_FUNCTION("scene",                pyattr_get_scene),
    EXP_PYATTRIBUTE_RO_FUNCTION("life",                 pyattr_get_life),
    EXP_PYATTRIBUTE_RW_FUNCTION("mass",                 pyattr_get_mass, pyattr_set_mass),
    EXP_PYATTRIBUTE_RW_FUNCTION("friction",             pyattr_get_friction, pyattr_set_friction),
    EXP_PYATTRIBUTE_RO_FUNCTION("isSuspendDynamics",    pyattr_get_is_suspend_dynamics),
    EXP_PYATTRIBUTE_RW_FUNCTION("linVelocityMin",       pyattr_get_lin_vel_min, pyattr_set_lin_vel_min),
    EXP_PYATTRIBUTE_RW_FUNCTION("linVelocityMax",       pyattr_get_lin_vel_max, pyattr_set_lin_vel_max),
    EXP_PYATTRIBUTE_RW_FUNCTION("angularVelocityMin",   pyattr_get_ang_vel_min, pyattr_set_ang_vel_min),
    EXP_PYATTRIBUTE_RW_FUNCTION("angularVelocityMax",   pyattr_get_ang_vel_max, pyattr_set_ang_vel_max),
    EXP_PYATTRIBUTE_RW_FUNCTION("layer",                pyattr_get_layer, pyattr_set_layer),
    EXP_PYATTRIBUTE_RW_FUNCTION("visible",              pyattr_get_visible, pyattr_set_visible),
    EXP_PYATTRIBUTE_BOOL_RW    ("occlusion",            m_bOccluder),
    EXP_PYATTRIBUTE_RW_FUNCTION("physicsCullingRadius", pyattr_get_physicsCullingRadius, pyattr_set_physicsCullingRadius),
    EXP_PYATTRIBUTE_RW_FUNCTION("logicCullingRadius",   pyattr_get_logicCullingRadius, pyattr_set_logicCullingRadius),
    EXP_PYATTRIBUTE_RW_FUNCTION("physicsCulling",       pyattr_get_physicsCulling, pyattr_set_physicsCulling),
    EXP_PYATTRIBUTE_RW_FUNCTION("logicCulling",         pyattr_get_logicCulling, pyattr_set_logicCulling),
    EXP_PYATTRIBUTE_RW_FUNCTION("position",             pyattr_get_worldPosition, pyattr_set_localPosition),
    EXP_PYATTRIBUTE_RO_FUNCTION("localInertia",         pyattr_get_localInertia),
    EXP_PYATTRIBUTE_RW_FUNCTION("orientation",          pyattr_get_worldOrientation, pyattr_set_localOrientation),
    EXP_PYATTRIBUTE_RW_FUNCTION("scaling",              pyattr_get_worldScaling, pyattr_set_localScaling),
    EXP_PYATTRIBUTE_RW_FUNCTION("timeOffset",           pyattr_get_timeOffset, pyattr_set_timeOffset),
    EXP_PYATTRIBUTE_RW_FUNCTION("collisionCallbacks",   pyattr_get_collisionCallbacks, pyattr_set_collisionCallbacks),
    EXP_PYATTRIBUTE_RW_FUNCTION("onRemove",             pyattr_get_remove_callback, pyattr_set_remove_callback),
    EXP_PYATTRIBUTE_RW_FUNCTION("collisionGroup",       pyattr_get_collisionGroup, pyattr_set_collisionGroup),
    EXP_PYATTRIBUTE_RW_FUNCTION("collisionMask",        pyattr_get_collisionMask, pyattr_set_collisionMask),
    EXP_PYATTRIBUTE_RW_FUNCTION("state",                pyattr_get_state, pyattr_set_state),
    EXP_PYATTRIBUTE_RO_FUNCTION("meshes",               pyattr_get_meshes),
    EXP_PYATTRIBUTE_RW_FUNCTION("localOrientation",     pyattr_get_localOrientation, pyattr_set_localOrientation),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldOrientation",     pyattr_get_worldOrientation, pyattr_set_worldOrientation),
    EXP_PYATTRIBUTE_RW_FUNCTION("localPosition",        pyattr_get_localPosition, pyattr_set_localPosition),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldPosition",        pyattr_get_worldPosition, pyattr_set_worldPosition),
    EXP_PYATTRIBUTE_RW_FUNCTION("localScale",           pyattr_get_localScaling, pyattr_set_localScaling),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldScale",           pyattr_get_worldScaling, pyattr_set_worldScaling),
    EXP_PYATTRIBUTE_RW_FUNCTION("localTransform",       pyattr_get_localTransform, pyattr_set_localTransform),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldTransform",       pyattr_get_worldTransform, pyattr_set_worldTransform),
    EXP_PYATTRIBUTE_RW_FUNCTION("linearVelocity",       pyattr_get_localLinearVelocity, pyattr_set_worldLinearVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("localLinearVelocity",  pyattr_get_localLinearVelocity, pyattr_set_localLinearVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldLinearVelocity",  pyattr_get_worldLinearVelocity, pyattr_set_worldLinearVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("angularVelocity",      pyattr_get_localAngularVelocity, pyattr_set_worldAngularVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("localAngularVelocity", pyattr_get_localAngularVelocity, pyattr_set_localAngularVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("worldAngularVelocity", pyattr_get_worldAngularVelocity, pyattr_set_worldAngularVelocity),
    EXP_PYATTRIBUTE_RW_FUNCTION("linearDamping",        pyattr_get_linearDamping, pyattr_set_linearDamping),
    EXP_PYATTRIBUTE_RW_FUNCTION("angularDamping",       pyattr_get_angularDamping, pyattr_set_angularDamping),
    EXP_PYATTRIBUTE_RO_FUNCTION("children",             pyattr_get_children),
    EXP_PYATTRIBUTE_RO_FUNCTION("childrenRecursive",    pyattr_get_children_recursive),
    EXP_PYATTRIBUTE_RO_FUNCTION("attrDict",             pyattr_get_attrDict),
    EXP_PYATTRIBUTE_RW_FUNCTION("color",                pyattr_get_obcolor, pyattr_set_obcolor),
    EXP_PYATTRIBUTE_RW_FUNCTION("debug",                pyattr_get_debug, pyattr_set_debug),
    EXP_PYATTRIBUTE_RW_FUNCTION("debugRecursive",       pyattr_get_debugRecursive, pyattr_set_debugRecursive),
    EXP_PYATTRIBUTE_RW_FUNCTION("gravity",              pyattr_get_gravity, pyattr_set_gravity),
    EXP_PYATTRIBUTE_RO_FUNCTION("blenderObject",        pyattr_get_blender_object),
    EXP_PYATTRIBUTE_RO_FUNCTION("sensors",              pyattr_get_sensors),
    EXP_PYATTRIBUTE_RO_FUNCTION("controllers",          pyattr_get_controllers),
    EXP_PYATTRIBUTE_RO_FUNCTION("actuators",            pyattr_get_actuators),
    EXP_PYATTRIBUTE_RO_FUNCTION("components",           pyattr_get_components),
    EXP_PYATTRIBUTE_RO_FUNCTION("logger",               KX_PythonProxy::pyattr_get_logger),
    EXP_PYATTRIBUTE_RO_FUNCTION("loggerName",           KX_PythonProxy::pyattr_get_logger_name),
```



## 🎨 UPBGE Features

The Uchronia Project Blender Game Engine (UPBGE) is a Blender’s builtin tool
derived from Blender Foundation’s Blender Game Engine for real-time projects,
from architectural visualizations and simulations to games.

Integrated Design in Blender

    UPBGE is a game engine built over the famous Blender 3D tool. It is internally
    integrated in such a way that what you see in the Blender viewport (EEVEE)
    is what you will see in-game.


Thanks to this integration we have:

  . No need for an import-export pipeline. Since Blender supports 3D modelling,
    sculpting and UV mapping, everything made in the UPBGE can be used "as is".
  . Rapid iteration. Simply pressing the "P" key will start your game in the
    active viewport, allowing you to get instant feedback both visually and in
    terms of gameplay and logic.
  . Implicit updates. All the new features for Blender are automatically included
    in each UPBGE release.
  . A unified workflow. The game engine specific workspaces, editors, panels
    and nodes follow the same conventions and standards as Blender itself.

Graphics

    The UPBGE graphics renderer is the Blender's realtime viewport renderer,
    called Eevee. Eevee is a new physically based real-time renderer that uses
    a node base system.

It has advanced features such as:

  1. Physically-based rendering with TAA and SMAA.
  2. Principled BSDF.
  3. Environment lighting and HDRIs.
  4. Screen-space reflections and refractions.
  5. Indirect light through light probes.
  6. Hard, soft and contact shadows.
  7. Subsurface scattering and volume rendering.
  8. Bloom, Volumetrics and Depth of field.
  9. Great color management, including HDR, tone mapping, exposure and color
     transformations such as Filmic.

Scripting & Logic Support

    The UPBGE scripting language is Python. UPBGE has a very complete Python API
    that can be used in the embedded editor as well as in-game. This scripting
    language is the most grounded way to develop game logic, although there are
    3 additional and complete methods that the game developer can use:


  . **The Logic Bricks System**
    This system is a well tested system (around 20 years) and its main advantages
    are its speed and ease of use. No programming knowledge is required to use them.
  . **The Logic Nodes System**
    This system is a Visual Scripting system developed atop the UPBGE node
    interface to create gameplay elements inside UPBGE editor. Its main advantages
    are its versatility and ease of use.
    No programming knowledge is required to use them.
  . **The Python Components System**
    Basically the Python Components are modules that can be attached to game objects.
    Each one serves a specific purpose. No programming knowledge is required
    to use them, although such knowledge is necessary for the development of
    new or custom components.

Animation System

    The UPBGE animation system is the same as the Blender one. Due to this,
    UPBGE has one of the most powerful animation systems out there.

    Almost all properties of UPBGE can be animated. From basic motion/rotation
    animations through sprite animation all the way to different node properties
    of both materials and geometry node trees. Even grease pencil objects can
    be animated.

To make animations, the developer can use any of the following systems supported
by the game engine:

  1. Keyframes.
  2. Armatures.
  3. Shape keys.
  4. Drivers.
  5. Actions.
  6. Geometry nodes.

Physics

    UPBGE includes advanced physics simulation as it incorperates the
    Bullet Physics Engine (Bullet Physics). Most of your work will come down
    to setting the right properties on the objects in your scene before you can
    sit back and let the engine take over. The physics simulation can be used
    for games as well as animations.


    UPBGE physics system supports Rigid, Dynamic and Soft bodies, static objects
    and a kinematic character controller.

OpenXR

    The VR Scene Inspection add-on exposes and extends the native virtual reality
    features of UPBGE. The feature set is limited to scene inspection use cases at
    this moment. More advanced use cases may be enabled through further development.


    VR support in UPBGE is based on the OpenXR specification and requires some
    set up steps.

Multiplatform Editor

    The UPBGE editor works in 64-bit on Windows (7, 8, 10, & 11), Linux (x64 & arm),
    and macOS (x64 & arm) and it has a small size (around 170MB).

    It is easy to compile on any platform (all dependencies can be downloaded
    through an easy to use script).

Navigation System

    UPBGE includes a state of the art navigation system based on the Recast &
    Detour libraries.

    It offers simple static navigation mesh support suitable for many cases
    and comes with a navmesh generation toolset.

Audio System

    UPBGE uses the Audaspace library for its audio system. It is a high level
    audio library written in C++ with language bindings for Python.

    Audaspace has 3D audio support, filters like low/highpass and effects
    like delay, reverse or fading.

Multiplatform Deployment

    UPBGE exports to the main desktop platforms: Windows, Linux and macOS.


# 🥚 UPBGE + Blender Python API
https://upbge.org/#/documentation/docs/latest/api/index.html
https://github.com/UPBGE/UPBGE-Docs
https://github.com/UPBGE/UPBGE-Docs-build
https://github.com/UPBGE/UPBGE-API
https://github.com/UPBGE/upbge.github.io
https://github.com/UPBGE/upbge/releases
https://github.com/UPBGE/blender-addons
Moguri/bgui: Python GUI library for the Blender Game
https://github.com/Moguri/bgui

UPBGE 0.3+ + Blender 3.6 Python API Documentation

Welcome to the Python API documentation for [UPBGE](https://upbge.org)
and [Blender](https://www.blender.org), the free and open source 3D creation
suite + integrated game engine.

This site can be used offline:
Download the full documentation (zipped HTML files)
https://upbge.org/docs/latest/api/upbge-api-reference.zip

Documentation

01. uickstart: New to Blender or scripting and want to get your feet wet?
    upbge-0.30\doc\python_api\rst\info_quickstart.rst
    https://upbge.org/#/documentation/docs/latest/api/info_quickstart.html
02. API Overview: A more complete explanation of Python integration.
    upbge-0.30\doc\python_api\rst\info_overview.rst
    https://upbge.org/#/documentation/docs/latest/api/info_overview.html
03. API Reference Usage: Examples of how to use the API reference docs.
    upbge-0.30\doc\python_api\rst\info_api_reference.rst
    https://upbge.org/#/documentation/docs/latest/api/info_api_reference.html
04. Best Practice: Conventions to follow for writing good scripts.
    upbge-0.30\doc\python_api\rst\info_best_practice.rst
    https://upbge.org/#/documentation/docs/latest/api/info_best_practice.html
05. Tips and Tricks: Hints to help you while writing scripts for Blender.
    upbge-0.30\doc\python_api\rst\info_tips_and_tricks.rst
    https://upbge.org/#/documentation/docs/latest/api/info_tips_and_tricks.html
06. Gotchas: Some of the problems you may encounter when writing scripts.
    upbge-0.30\doc\python_api\rst\info_gotcha.rst
    https://upbge.org/#/documentation/docs/latest/api/info_gotcha.html
07. Advanced: Topics which may not be required for typical usage.
    upbge-0.30\doc\python_api\rst\info_advanced.rst
    https://upbge.org/#/documentation/docs/latest/api/info_advanced.html
08. Change Log: List of changes since last Blender release
    upbge-0.30\doc\python_api\rst\change_log.rst
    https://upbge.org/#/documentation/docs/latest/api/change_log.html

Indices

- [Index](https://upbge.org/#/documentation/docs/latest/api/genindex.html)
- [Module Index](https://upbge.org/#/documentation/docs/latest/api/py-modindex.html)


Application Modules

- *bpy.context* [Context Access](https://upbge.org/#/documentation/docs/latest/api/bpy.context.html)
- *bpy.data* [Data Access](https://upbge.org/#/documentation/docs/latest/api/bpy.data.html)
- *bpy.msgbus* [Message Bus](https://upbge.org/#/documentation/docs/latest/api/bpy.msgbus.html)
- *bpy.ops* [Operators](https://upbge.org/#/documentation/docs/latest/api/bpy.ops.html)
- *bpy.types* [Types](https://upbge.org/#/documentation/docs/latest/api/bpy.types.html)
- *bpy.utils* [Utilities](https://upbge.org/#/documentation/docs/latest/api/bpy.utils.html)
- *bpy.path* [Path Utilities](https://upbge.org/#/documentation/docs/latest/api/bpy.path.html)
- *bpy.app* [Application Data](https://upbge.org/#/documentation/docs/latest/api/bpy.app.html)
- *bpy.props* [Property Definitions](https://upbge.org/#/documentation/docs/latest/api/bpy.props.html)

Game Engine Modules

- *bge.types* [Game Types](https://upbge.org/#/documentation/docs/latest/api/bge.types.html)
- *bge.logic* [Game Logic](https://upbge.org/#/documentation/docs/latest/api/bge.logic.html)
- *bge.render* [Rasterizer](https://upbge.org/#/documentation/docs/latest/api/bge.render.html)
- *bge.texture* [Video Texture](https://upbge.org/#/documentation/docs/latest/api/bge.texture.html)
    - [FFmpeg Video and Image Status](https://upbge.org/#/documentation/docs/latest/api/bge.texture.html#ffmpeg-video-and-image-status)
    - [Image Blending Modes](https://upbge.org/#/documentation/docs/latest/api/bge.texture.html#image-blending-modes)
- *bge.events* [Game Keys](https://upbge.org/#/documentation/docs/latest/api/bge.events.html)
- *bge.constraints* [Physics Constraints](https://upbge.org/#/documentation/docs/latest/api/bge.constraints.html)
- *bge.app* [Application Data](https://upbge.org/#/documentation/docs/latest/api/bge.app.html)
- *bgui* [Game GUI](https://upbge.org/#/documentation/docs/latest/api/bgui.html)

Standalone Modules

- *bgl* [OpenGL Wrapper](https://upbge.org/#/documentation/docs/latest/api/bgl.html)
- *bl_math* [Additional Math Functions](https://upbge.org/#/documentation/docs/latest/api/bl_math.html)
- *blf* [Font Drawing](https://upbge.org/#/documentation/docs/latest/api/blf.html)
- *bmesh* [BMesh Module](https://upbge.org/#/documentation/docs/latest/api/bmesh.html)
- *bpy_extras* [Extra Utilities](https://upbge.org/#/documentation/docs/latest/api/bpy_extras.html)
- *freestyle* [Freestyle Module](https://upbge.org/#/documentation/docs/latest/api/freestyle.html)
- *gpu* [GPU Module](https://upbge.org/#/documentation/docs/latest/api/gpu.html)
- *gpu_extras* [GPU Utilities](https://upbge.org/#/documentation/docs/latest/api/gpu_extras.html)
- *idprop.types* [ID Property Access](https://upbge.org/#/documentation/docs/latest/api/idprop.types.html)
- *imbuf* [Image Buffer](https://upbge.org/#/documentation/docs/latest/api/imbuf.html)
- *mathutils* [Math Types & Utilities](https://upbge.org/#/documentation/docs/latest/api/mathutils.html)


## 🐥 Sources List - bgui
https://github.com/Moguri/bgui

bgui is a Python library to handle GUIs in the Blender Game Engine.

Author: Mitchell Stokes (Moguri); Email: mogurijin@gmail.com

    |-- bgui\CHANGELOG.txt
    |-- bgui\LICENSE.md
    |-- bgui\README.md
    |-- bgui\bgui
    |   |-- bgui\bgui\__init__.py
    |   |-- bgui\bgui\bge_utils.py
    |   |-- bgui\bgui\frame.py
    |   |-- bgui\bgui\frame_button.py
    |   |-- bgui\bgui\gl_utils.py
    |   |-- bgui\bgui\image.py
    |   |-- bgui\bgui\image_button.py
    |   |-- bgui\bgui\key_defs.py
    |   |-- bgui\bgui\label.py
    |   |-- bgui\bgui\list_box.py
    |   |-- bgui\bgui\progress_bar.py
    |   |-- bgui\bgui\system.py
    |   |-- bgui\bgui\text
    |   |   |-- bgui\bgui\text\__init__.py
    |   |   |-- bgui\bgui\text\blf.py
    |   |   `-- bgui\bgui\text\qt.py
    |   |-- bgui\bgui\text_block.py
    |   |-- bgui\bgui\text_input.py
    |   |-- bgui\bgui\texture.py
    |   |-- bgui\bgui\theme.py
    |   |-- bgui\bgui\video.py
    |   `-- bgui\bgui\widget.py
    |-- bgui\docs
    |   |-- bgui\docs\Makefile
    |   |-- bgui\docs\make.bat
    |   `-- bgui\docs\source
    |       |-- bgui\docs\source\conf.py
    |       |-- bgui\docs\source\doc_parser.py
    |       |-- bgui\docs\source\index.rst
    |       |-- bgui\docs\source\tutorials
    |       |   `-- bgui\docs\source\tutorials\getting_started.rst
    |       `-- bgui\docs\source\tutorials.rst
    |-- bgui\examples
    |   |-- bgui\examples\notification
    |   |   |-- bgui\examples\notification\blender_test.blend
    |   |   `-- bgui\examples\notification\blender_test.py
    |   |-- bgui\examples\simple
    |   |   |-- bgui\examples\simple\blender_test.blend
    |   |   |-- bgui\examples\simple\blender_test.py
    |   |   |-- bgui\examples\simple\img.jpg
    |   |   |-- bgui\examples\simple\img_flipped.jpg
    |   |   `-- bgui\examples\simple\myfont.otf
    |   `-- bgui\examples\viewports
    |       |-- bgui\examples\viewports\blender_test.blend
    |       |-- bgui\examples\viewports\blender_test.py
    |       |-- bgui\examples\viewports\img.jpg
    |       `-- bgui\examples\viewports\myfont.otf
    |-- bgui\test_bgui.py
    `-- bgui\themes
        `-- bgui\themes\default
            |-- bgui\themes\default\audio.png
            |-- bgui\themes\default\audio.png_credit.txt
            `-- bgui\themes\default\theme.cfg

    11 directories, 46 files


## 🐥 Sources List - rst docs

    > tree.exe UPBGE-0.30-windows-x86_64\upbge-0.30\doc\python_api
    |-- doc\python_api\requirements.txt
    |-- doc\python_api\rst_from_bmesh_opdefines.py
    |-- doc\python_api\sphinx_changelog_gen.py
    |-- doc\python_api\sphinx_doc_gen.py
    |-- doc\python_api\sphinx_doc_gen.sh
    |-- doc\python_api\sphinx_doc_gen_monkeypatch.py
    |-- doc\python_api\sphinx_doc_update.py
    |-- doc\python_api\examples
    |   |-- doc\python_api\examples\aud.py
    |   |-- doc\python_api\examples\bge.constraints.py
    |   |-- doc\python_api\examples\bge.texture.1.py
    |   |-- doc\python_api\examples\bge.texture.2.py
    |   |-- doc\python_api\examples\bge.texture.py
    |   |-- doc\python_api\examples\blf.py
    |   |-- doc\python_api\examples\bmesh.ops.1.py
    |   |-- doc\python_api\examples\bpy.app.handlers.1.py
    |   |-- doc\python_api\examples\bpy.app.handlers.2.py
    |   |-- doc\python_api\examples\bpy.app.handlers.py
    |   |-- doc\python_api\examples\bpy.app.timers.1.py
    |   |-- doc\python_api\examples\bpy.app.timers.2.py
    |   |-- doc\python_api\examples\bpy.app.timers.3.py
    |   |-- doc\python_api\examples\bpy.app.timers.4.py
    |   |-- doc\python_api\examples\bpy.app.timers.5.py
    |   |-- doc\python_api\examples\bpy.app.translations.py
    |   |-- doc\python_api\examples\bpy.data.py
    |   |-- doc\python_api\examples\bpy.msgbus.1.py
    |   |-- doc\python_api\examples\bpy.msgbus.2.py
    |   |-- doc\python_api\examples\bpy.msgbus.3.py
    |   |-- doc\python_api\examples\bpy.ops.1.py
    |   |-- doc\python_api\examples\bpy.ops.2.py
    |   |-- doc\python_api\examples\bpy.ops.3.py
    |   |-- doc\python_api\examples\bpy.ops.py
    |   |-- doc\python_api\examples\bpy.props.1.py
    |   |-- doc\python_api\examples\bpy.props.2.py
    |   |-- doc\python_api\examples\bpy.props.3.py
    |   |-- doc\python_api\examples\bpy.props.4.py
    |   |-- doc\python_api\examples\bpy.props.5.py
    |   |-- doc\python_api\examples\bpy.props.py
    |   |-- doc\python_api\examples\bpy.types.AddonPreferences.1.py
    |   |-- doc\python_api\examples\bpy.types.BlendDataLibraries.load.py
    |   |-- doc\python_api\examples\bpy.types.BlendDataLibraries.write.py
    |   |-- doc\python_api\examples\bpy.types.Bone.convert_local_to_pose.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.1.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.2.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.3.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.4.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.5.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.6.py
    |   |-- doc\python_api\examples\bpy.types.Depsgraph.7.py
    |   |-- doc\python_api\examples\bpy.types.ID.user_clear.1.py
    |   |-- doc\python_api\examples\bpy.types.Menu.1.py
    |   |-- doc\python_api\examples\bpy.types.Menu.2.py
    |   |-- doc\python_api\examples\bpy.types.Menu.3.py
    |   |-- doc\python_api\examples\bpy.types.Menu.4.py
    |   |-- doc\python_api\examples\bpy.types.Menu.py
    |   |-- doc\python_api\examples\bpy.types.Mesh.py
    |   |-- doc\python_api\examples\bpy.types.NodeTree.py
    |   |-- doc\python_api\examples\bpy.types.Object.py
    |   |-- doc\python_api\examples\bpy.types.Operator.1.py
    |   |-- doc\python_api\examples\bpy.types.Operator.2.py
    |   |-- doc\python_api\examples\bpy.types.Operator.3.py
    |   |-- doc\python_api\examples\bpy.types.Operator.4.py
    |   |-- doc\python_api\examples\bpy.types.Operator.5.py
    |   |-- doc\python_api\examples\bpy.types.Operator.6.py
    |   |-- doc\python_api\examples\bpy.types.Operator.py
    |   |-- doc\python_api\examples\bpy.types.Panel.1.py
    |   |-- doc\python_api\examples\bpy.types.Panel.2.py
    |   |-- doc\python_api\examples\bpy.types.Panel.py
    |   |-- doc\python_api\examples\bpy.types.PropertyGroup.py
    |   |-- doc\python_api\examples\bpy.types.RenderEngine.py
    |   |-- doc\python_api\examples\bpy.types.UIList.1.py
    |   |-- doc\python_api\examples\bpy.types.UIList.2.py
    |   |-- doc\python_api\examples\bpy.types.WindowManager.popup_menu.py
    |   |-- doc\python_api\examples\bpy.types.bpy_prop_collection.foreach_get.py
    |   |-- doc\python_api\examples\bpy.types.bpy_prop_collection.foreach_set.py
    |   |-- doc\python_api\examples\bpy.types.bpy_struct.is_property_set.py
    |   |-- doc\python_api\examples\bpy.types.bpy_struct.keyframe_insert.1.py
    |   |-- doc\python_api\examples\bpy.types.bpy_struct.keyframe_insert.py
    |   |-- doc\python_api\examples\gpu.1.py
    |   |-- doc\python_api\examples\gpu.10.py
    |   |-- doc\python_api\examples\gpu.2.py
    |   |-- doc\python_api\examples\gpu.3.py
    |   |-- doc\python_api\examples\gpu.4.py
    |   |-- doc\python_api\examples\gpu.5.py
    |   |-- doc\python_api\examples\gpu.6.py
    |   |-- doc\python_api\examples\gpu.7.py
    |   |-- doc\python_api\examples\gpu.8.py
    |   |-- doc\python_api\examples\gpu.9.py
    |   |-- doc\python_api\examples\mathutils.Color.py
    |   |-- doc\python_api\examples\mathutils.Euler.py
    |   |-- doc\python_api\examples\mathutils.Matrix.LocRotScale.py
    |   |-- doc\python_api\examples\mathutils.Matrix.py
    |   |-- doc\python_api\examples\mathutils.Quaternion.py
    |   |-- doc\python_api\examples\mathutils.Vector.py
    |   |-- doc\python_api\examples\mathutils.kdtree.py
    |   `-- doc\python_api\examples\mathutils.py
    |-- doc\python_api\rst
    |   |-- doc\python_api\rst\bge.app.rst
    |   |-- doc\python_api\rst\bge.constraints.rst
    |   |-- doc\python_api\rst\bge.events.rst
    |   |-- doc\python_api\rst\bge.logic.rst
    |   |-- doc\python_api\rst\bge.render.rst
    |   |-- doc\python_api\rst\bge.texture.rst
    |   |-- doc\python_api\rst\bge.types.rst
    |   |-- doc\python_api\rst\bge_types
    |   |   |-- bge.types.BL_ArmatureBone.rst
    |   |   |-- bge.types.BL_ArmatureChannel.rst
    |   |   |-- bge.types.BL_ArmatureConstraint.rst
    |   |   |-- bge.types.BL_ArmatureObject.rst
    |   |   |-- bge.types.BL_Shader.rst
    |   |   |-- bge.types.BL_Texture.rst
    |   |   |-- bge.types.EXP_ListValue.rst
    |   |   |-- bge.types.EXP_PropValue.rst
    |   |   |-- bge.types.EXP_PyObjectPlus.rst
    |   |   |-- bge.types.EXP_Value.rst
    |   |   |-- bge.types.KX_2DFilter.rst
    |   |   |-- bge.types.KX_2DFilterFrameBuffer.rst
    |   |   |-- bge.types.KX_2DFilterManager.rst
    |   |   |-- bge.types.KX_BlenderMaterial.rst
    |   |   |-- bge.types.KX_Camera.rst
    |   |   |-- bge.types.KX_CharacterWrapper.rst
    |   |   |-- bge.types.KX_CollisionContactPoint.rst
    |   |   |-- bge.types.KX_ConstraintWrapper.rst
    |   |   |-- bge.types.KX_FontObject.rst
    |   |   |-- bge.types.KX_GameObject.rst
    |   |   |-- bge.types.KX_LibLoadStatus.rst
    |   |   |-- bge.types.KX_LightObject.rst
    |   |   |-- bge.types.KX_LodLevel.rst
    |   |   |-- bge.types.KX_LodManager.rst
    |   |   |-- bge.types.KX_MeshProxy.rst
    |   |   |-- bge.types.KX_NavMeshObject.rst
    |   |   |-- bge.types.KX_PolyProxy.rst
    |   |   |-- bge.types.KX_PythonComponent.rst
    |   |   |-- bge.types.KX_Scene.rst
    |   |   |-- bge.types.KX_VehicleWrapper.rst
    |   |   |-- bge.types.KX_VertexProxy.rst
    |   |   |-- bge.types.SCA_2DFilterActuator.rst
    |   |   |-- bge.types.SCA_ANDController.rst
    |   |   |-- bge.types.SCA_ActionActuator.rst
    |   |   |-- bge.types.SCA_ActuatorSensor.rst
    |   |   |-- bge.types.SCA_AddObjectActuator.rst
    |   |   |-- bge.types.SCA_AlwaysSensor.rst
    |   |   |-- bge.types.SCA_ArmatureActuator.rst
    |   |   |-- bge.types.SCA_ArmatureSensor.rst
    |   |   |-- bge.types.SCA_CameraActuator.rst
    |   |   |-- bge.types.SCA_CollisionSensor.rst
    |   |   |-- bge.types.SCA_ConstraintActuator.rst
    |   |   |-- bge.types.SCA_DelaySensor.rst
    |   |   |-- bge.types.SCA_DynamicActuator.rst
    |   |   |-- bge.types.SCA_EndObjectActuator.rst
    |   |   |-- bge.types.SCA_GameActuator.rst
    |   |   |-- bge.types.SCA_IActuator.rst
    |   |   |-- bge.types.SCA_IController.rst
    |   |   |-- bge.types.SCA_ILogicBrick.rst
    |   |   |-- bge.types.SCA_IObject.rst
    |   |   |-- bge.types.SCA_ISensor.rst
    |   |   |-- bge.types.SCA_InputEvent.rst
    |   |   |-- bge.types.SCA_JoystickSensor.rst
    |   |   |-- bge.types.SCA_KeyboardSensor.rst
    |   |   |-- bge.types.SCA_MouseActuator.rst
    |   |   |-- bge.types.SCA_MouseFocusSensor.rst
    |   |   |-- bge.types.SCA_MouseSensor.rst
    |   |   |-- bge.types.SCA_NANDController.rst
    |   |   |-- bge.types.SCA_NORController.rst
    |   |   |-- bge.types.SCA_NearSensor.rst
    |   |   |-- bge.types.SCA_NetworkMessageActuator.rst
    |   |   |-- bge.types.SCA_NetworkMessageSensor.rst
    |   |   |-- bge.types.SCA_ORController.rst
    |   |   |-- bge.types.SCA_ObjectActuator.rst
    |   |   |-- bge.types.SCA_ParentActuator.rst
    |   |   |-- bge.types.SCA_PropertyActuator.rst
    |   |   |-- bge.types.SCA_PropertySensor.rst
    |   |   |-- bge.types.SCA_PythonController.rst
    |   |   |-- bge.types.SCA_PythonJoystick.rst
    |   |   |-- bge.types.SCA_PythonKeyboard.rst
    |   |   |-- bge.types.SCA_PythonMouse.rst
    |   |   |-- bge.types.SCA_RadarSensor.rst
    |   |   |-- bge.types.SCA_RandomActuator.rst
    |   |   |-- bge.types.SCA_RandomSensor.rst
    |   |   |-- bge.types.SCA_RaySensor.rst
    |   |   |-- bge.types.SCA_ReplaceMeshActuator.rst
    |   |   |-- bge.types.SCA_SceneActuator.rst
    |   |   |-- bge.types.SCA_SoundActuator.rst
    |   |   |-- bge.types.SCA_StateActuator.rst
    |   |   |-- bge.types.SCA_SteeringActuator.rst
    |   |   |-- bge.types.SCA_TrackToActuator.rst
    |   |   |-- bge.types.SCA_VibrationActuator.rst
    |   |   |-- bge.types.SCA_VisibilityActuator.rst
    |   |   |-- bge.types.SCA_XNORController.rst
    |   |   `-- bge.types.SCA_XORController.rst
    |   |-- doc\python_api\rst\bgl.rst
    |   |-- doc\python_api\rst\change_log.rst
    |   |-- doc\python_api\rst\include__bmesh.rst
    |   |-- doc\python_api\rst\info_api_reference.rst
    |   |-- doc\python_api\rst\info_best_practice.rst
    |   |-- doc\python_api\rst\info_gotcha.rst
    |   |-- doc\python_api\rst\info_overview.rst
    |   |-- doc\python_api\rst\info_quickstart.rst
    |   `-- doc\python_api\rst\info_tips_and_tricks.rst
    `-- doc\python_api\static
        |-- doc\python_api\static\css
        |   `-- doc\python_api\static\css\theme_overrides.css
        |-- doc\python_api\static\favicon.ico
        `-- doc\python_api\static\upbge_logo.png

    5 directories, 199 files


## 🐥 Sources List - logicnodes

    > tree.exe -f upbge\3.0\scripts\addons\bge_netlogic
    bge_netlogic
    |-- bge_netlogic\README.md
    |-- bge_netlogic\__init__.py
    |-- bge_netlogic\basicnodes
    |   |-- bge_netlogic\basicnodes\__init__.py
    |-- bge_netlogic\header.png
    |-- bge_netlogic\nodeutils
    |   |-- bge_netlogic\nodeutils\__init__.py
    |-- bge_netlogic\ops
    |   |-- bge_netlogic\ops\__init__.py
    |   |-- bge_netlogic\ops\abstract_text_buffer.py
    |   |-- bge_netlogic\ops\bl_text_buffer.py
    |   |-- bge_netlogic\ops\file_text_buffer.py
    |   |-- bge_netlogic\ops\tree_code_generator.py
    |   `-- bge_netlogic\ops\uid_map.py
    |-- bge_netlogic\templates
    |   |-- bge_netlogic\templates\my_custom_cells.txt
    |   |-- bge_netlogic\templates\my_custom_nodes.txt
    |   `-- bge_netlogic\templates\prefabs
    |       `-- bge_netlogic\templates\prefabs\4keymovement.json
    |-- bge_netlogic\todo.txt
    |-- bge_netlogic\ui
    |   |-- bge_netlogic\ui\__init__.py
    |-- bge_netlogic\uplogic
    |   |-- bge_netlogic\uplogic\__init__.py
    |   `-- bge_netlogic\uplogic\nodes.py
    `-- bge_netlogic\utilities
        |-- bge_netlogic\utilities\__init__.py

    > tree.exe -f upbge\3.0\python\lib\site-packages\uplogic
    uplogic
    |-- uplogic\__init__.py
    `-- uplogic\nodes.py

Blender Python Console 执行以下脚本可以获取逻辑节点分类与运行时类型对照表，Blender 环境
不支持 stdout 重定义，只好将输出文件 nodes.md 设置到打印函数参数中：

```py
    import sys
    import subprocess
    import bge_netlogic
    # original = sys.stdout
    # sys.stdout = open('/path/to/redirect.txt', 'w')
    # sys.stdout = open('nodes.md', 'w')
    # sys.stdout = original
    for ln in bge_netlogic.basicnodes._nodes:
        if hasattr(ln, 'nl_subcat'):
            cat = "%s -> %s -> %s" % (ln.nl_category, ln.nl_subcat, ln.bl_label)
        else:
            cat = "%s -> %s" % (ln.nl_category, ln.bl_label)
        line = "| %s | %s | %s " % (cat, ln.get_netlogic_class_name({}), ln.__name__)
        print( line, file=open("nodes.md", "a"))
    subprocess.check_output("cmd /c start .")
```

|                     Nodes Categories                    |         Run-Time Implementations         |       Design-Time Implementations        |
|---------------------------------------------------------|------------------------------------------|------------------------------------------|
| Animation -> Animation Status                           | nodes.ParameterActionStatus                    | NLParameterActionStatus                  |
| Animation -> Armature / Rig -> Bone Status              | nodes.ParameterBoneStatus                      | NLParameterBoneStatus                    |
| Animation -> Armature / Rig -> Edit Bone                | nodes.ActionEditBone                           | NLActionEditBoneNode                     |
| Animation -> Armature / Rig -> Set Bone Position        | nodes.ActionSetBonePos                         | NLActionSetBonePos                       |
| Animation -> Bone Constraints -> Set Attribute          | nodes.GESetBoneConstraintAttribute             | NLSetBoneConstraintAttribute             |
| Animation -> Bone Constraints -> Set Influence          | nodes.GESetBoneConstraintInfluence             | NLSetBoneConstraintInfluence             |
| Animation -> Bone Constraints -> Set Target             | nodes.GESetBoneConstraintTarget                | NLSetBoneConstraintTarget                |
| Animation -> Play Animation                             | nodes.ActionPlayAction                         | NLActionPlayActionNode                   |
| Animation -> Set Animation Frame                        | nodes.ActionSetAnimationFrame                  | NLActionSetAnimationFrame                |
| Animation -> Stop Animation                             | nodes.ActionStopAnimation                      | NLActionStopAnimation                    |
| Events -> Custom -> Catch                               | nodes.ReceiveMessage                           | NLParameterReceiveMessage                |
| Events -> Custom -> Print Events                        | nodes.PrintCustomEvents                        | NLPrintCustomEvents                      |
| Events -> Custom -> Throw                               | nodes.CreateMessage                            | NLActionCreateMessage                    |
| Events -> On Init                                       | nodes.GE_OnInit                                | NLOnInitConditionNode                    |
| Events -> On Next Tick                                  | nodes.OnNextFrame                              | NLConditionNextFrameNode                 |
| Events -> On Update                                     | nodes.ConditionOnUpdate                        | NLOnUpdateConditionNode                  |
| Events -> On Value Changed                              | nodes.ConditionValueChanged                    | NLConditionValueChanged                  |
| Events -> On Value Changed To                           | nodes.ConditionValueTrigger                    | NLConditionValueTriggerNode              |
| Events -> Once                                          | nodes.ConditionOnce                            | NLConditionOnceNode                      |
| File -> Get Image                                       | nodes.GetImage                                 | NLGetImage                               |
| File -> Get Sound                                       | nodes.GetSound                                 | NLGetSound                               |
| Game -> Load Game                                       | nodes.ActionLoadGame                           | NLActionLoadGame                         |
| Game -> Quit Game                                       | nodes.ActionEndGame                            | NLActionEndGame                          |
| Game -> Restart Game                                    | nodes.ActionRestartGame                        | NLActionRestartGame                      |
| Game -> Save Game                                       | nodes.ActionSaveGame                           | NLActionSaveGame                         |
| Game -> Start Game                                      | nodes.ActionStartGame                          | NLActionStartGame                        |
| Input -> Gamepad -> Active                              | nodes.GEGamepadActive                          | NLGamepadActive                          |
| Input -> Gamepad -> Button Down                         | nodes.ConditionGamepadButtons                  | NLGamepadButtonsCondition                |
| Input -> Gamepad -> Button Up                           | nodes.ConditionGamepadButtonUp                 | NLGamepadButtonUpCondition               |
| Input -> Gamepad -> Look                                | nodes.GamepadLook                              | NLGamepadLook                            |
| Input -> Gamepad -> Sticks                              | nodes.ConditionGamepadSticks                   | NLGamepadSticksCondition                 |
| Input -> Gamepad -> Trigger                             | nodes.ConditionGamepadTrigger                  | NLGamepadTriggerCondition                |
| Input -> Gamepad -> Vibration                           | nodes.GEGamepadVibration                       | NLGamepadVibration                       |
| Input -> Keyboard -> Active                             | nodes.GEKeyboardActive                         | NLKeyboardActive                         |
| Input -> Keyboard -> Key Code                           | nodes.ParameterKeyboardKeyCode                 | NLParameterKeyboardKeyCode               |
| Input -> Keyboard -> Key Down                           | nodes.ConditionKeyPressed                      | NLKeyPressedCondition                    |
| Input -> Keyboard -> Key Up                             | nodes.ConditionKeyReleased                     | NLKeyReleasedCondition                   |
| Input -> Keyboard -> Logger                             | nodes.ActionKeyLogger                          | NLKeyLoggerAction                        |
| Input -> Mouse -> Button                                | nodes.ConditionMousePressed                    | NLMousePressedCondition                  |
| Input -> Mouse -> Button Over                           | nodes.ConditionMousePressedOn                  | NLConditionMousePressedOn                |
| Input -> Mouse -> Button Up                             | nodes.ConditionMouseReleased                   | NLMouseReleasedCondition                 |
| Input -> Mouse -> Cursor Visibility                     | nodes.ActionSetMouseCursorVisibility           | NLActionSetMouseCursorVisibility         |
| Input -> Mouse -> Look                                  | nodes.ActionMouseLook                          | NLActionMouseLookNode                    |
| Input -> Mouse -> Moved                                 | nodes.ConditionMouseMoved                      | NLMouseMovedCondition                    |
| Input -> Mouse -> Over                                  | nodes.ConditionMouseTargeting                  | NLConditionMouseTargetingNode            |
| Input -> Mouse -> Set Position                          | nodes.ActionSetMousePosition                   | NLActionSetMousePosition                 |
| Input -> Mouse -> Status                                | nodes.ParameterMouseData                       | NLMouseDataParameter                     |
| Input -> Mouse -> Wheel                                 | nodes.ConditionMouseScrolled                   | NLConditionMouseWheelMoved               |
| Lights -> Get Light Color                               | nodes.GetLightColor                            | NLGetLightColorAction                    |
| Lights -> Get Light Energy                              | nodes.GetLightEnergy                           | NLGetLightEnergy                         |
| Lights -> Make Unique                                   | nodes.GEMakeUniqueLight                        | NLMakeUniqueLight                        |
| Lights -> Set Light Color                               | nodes.SetLightColor                            | NLSetLightColorAction                    |
| Lights -> Set Light Energy                              | nodes.SetLightEnergy                           | NLSetLightEnergyAction                   |
| Lights -> Set Light Shadow                              | nodes.SetLightShadow                           | NLSetLightShadowAction                   |
| Logic -> And                                            | nodes.ConditionAnd                             | NLConditionAndNode                       |
| Logic -> And List                                       | nodes.ConditionAndList                         | NLConditionAndList                       |
| Logic -> And Not                                        | nodes.ConditionAndNot                          | NLConditionAndNotNode                    |
| Logic -> Bricks -> Execute Actuator                     | nodes.ActivateActuator                         | NLRunActuatorNode                        |
| Logic -> Bricks -> Execute Actuator By Name             | nodes.ActivateActuatorByName                   | NLRunActuatorByNameNode                  |
| Logic -> Bricks -> Get Actuator                         | nodes.GetActuator                              | NLGetActuatorNode                        |
| Logic -> Bricks -> Get Actuator By Name                 | nodes.GetActuatorByName                        | NLGetActuatorNameNode                    |
| Logic -> Bricks -> Get Actuator Value                   | nodes.GetActuatorValue                         | NLGetActuatorValue                       |
| Logic -> Bricks -> Get Sensor Value                     | nodes.SensorValue                              | NLSensorValueNode                        |
| Logic -> Bricks -> Get Sensor Value by Name             | nodes.GetSensorValueByName                     | NLGetSensorValueNameNode                 |
| Logic -> Bricks -> Sensor Positive                      | nodes.GetSensor                                | NLGetSensorNode                          |
| Logic -> Bricks -> Sensor Positive by Name              | nodes.GetSensorByName                          | NLGetSensorNameNode                      |
| Logic -> Bricks -> Set Actuator Value                   | nodes.SetActuatorValue                         | NLSetActuatorValueNode                   |
| Logic -> Bricks -> Stop Actuator                        | nodes.DeactivateActuator                       | NLDisableActuatorNode                    |
| Logic -> Bricks -> Stop Actuator By Name                | nodes.DeactivateActuatorByName                 | NLDisableActuatorByNameNode              |
| Logic -> None                                           | nodes.ConditionNone                            | NLConditionNoneNode                      |
| Logic -> Not                                            | nodes.ConditionNot                             | NLConditionNotNode                       |
| Logic -> Not None                                       | nodes.ConditionNotNone                         | NLConditionNotNoneNode                   |
| Logic -> Or                                             | nodes.ConditionOr                              | NLConditionOrNode                        |
| Logic -> Or List                                        | nodes.ConditionOrList                          | NLConditionOrList                        |
| Logic -> Trees -> Add Logic Tree to Object              | nodes.ActionInstalSubNetwork                   | NLActionInstallSubNetwork                |
| Logic -> Trees -> Execute Logic Tree                    | nodes.ActionExecuteNetwork                     | NLActionExecuteNetwork                   |
| Logic -> Trees -> Logic Network Status                  | nodes.ConditionLNStatus                        | NLConditionLogicNetworkStatusNode        |
| Logic -> Trees -> Start Logic Tree                      | nodes.ActionStartLogicNetwork                  | NLStartLogicNetworkActionNode            |
| Logic -> Trees -> Stop Logic Tree                       | nodes.ActionStopLogicNetwork                   | NLStopLogicNetworkActionNode             |
| Logic -> True / False                                   | nodes.ParameterSwitchValue                     | NLParameterSwitchValue                   |
| Math -> Absolute                                        | nodes.AbsoluteValue                            | NLAbsoluteValue                          |
| Math -> Check Distance                                  | nodes.ConditionDistanceCheck                   | NLConditionDistanceCheck                 |
| Math -> Clamp                                           | nodes.ClampValue                               | NLClampValueNode                         |
| Math -> Compare                                         | nodes.ConditionLogicOp                         | NLConditionLogicOperation                |
| Math -> Distance                                        | nodes.ParameterDistance                        | NLParameterDistance                      |
| Math -> Formula                                         | nodes.ParameterMathFun                         | NLParameterMathFun                       |
| Math -> Interpolate                                     | nodes.InterpolateValue                         | NLInterpolateValueNode                   |
| Math -> Limit Range                                     | nodes.GELimitRange                             | NLLimitRange                             |
| Math -> Math                                            | nodes.ParameterArithmeticOp                    | NLArithmeticOpParameterNode              |
| Math -> Ranged Threshold                                | nodes.RangedThreshold                          | NLRangedThresholdNode                    |
| Math -> Threshold                                       | nodes.Threshold                                | NLThresholdNode                          |
| Math -> Vector Math -> Absolute Vector                  | nodes.ParameterAbsVector3                      | NLParameterAbsVector3Node                |
| Math -> Vector Math -> Angle                            | nodes.VectorAngle                              | NLVectorAngle                            |
| Math -> Vector Math -> Check Angle                      | nodes.VectorAngleCheck                         | NLVectorAngleCheck                       |
| Math -> Vector Math -> Compare Vectors                  | nodes.ConditionCompareVecs                     | NLConditionCompareVecs                   |
| Math -> Vector Math -> Euler/Vector To Matrix           | nodes.ParameterEulerToMatrix                   | NLParameterEulerToMatrixNode             |
| Math -> Vector Math -> Matrix To Euler                  | nodes.ParameterMatrixToEuler                   | NLParameterMatrixToEulerNode             |
| Math -> Vector Math -> Matrix To Vector                 | nodes.ParameterMatrixToVector                  | NLParameterMatrixToVectorNode            |
| Math -> Vector Math -> Vector Math                      | nodes.ParameterVectorMath                      | NLVectorMath                             |
| Math -> Within Range                                    | nodes.WithinRange                              | NLWithinRangeNode                        |
| Nodes -> Geometry -> Get Node Input Value               | nodes.ParameterGetNodeTreeNodeValue            | NLGetGeometryNodeValue                   |
| Nodes -> Geometry -> Get Node Value                     | nodes.ParameterGetNodeTreeNodeAttribute        | NLGetGeometryNodeAttribute               |
| Nodes -> Geometry -> Set Node Input Value               | nodes.ActionSetNodeTreeNodeValue               | NLSetGeometryNodeValue                   |
| Nodes -> Geometry -> Set Node Value                     | nodes.ActionSetNodeTreeNodeAttribute           | NLSetGeometryNodeAttribute               |
| Nodes -> Groups -> Get Node Input Value                 | nodes.ParameterGetNodeTreeNodeValue            | NLGetNodeGroupNodeValue                  |
| Nodes -> Groups -> Get Node Value                       | nodes.ParameterGetNodeTreeNodeAttribute        | NLGetNodeTreeNodeAttribute               |
| Nodes -> Groups -> Set Node Input Value                 | nodes.ActionSetNodeTreeNodeValue               | NLSetNodeTreeNodeValue                   |
| Nodes -> Groups -> Set Node Value                       | nodes.ActionSetNodeTreeNodeAttribute           | NLSetNodeTreeNodeAttribute               |
| Nodes -> Materials -> Get Node                          | nodes.ParameterGetMaterialNode                 | NLGetMaterialNode                        |
| Nodes -> Materials -> Get Node Input Value              | nodes.ParameterGetMaterialNodeValue            | NLGetMaterialNodeValue                   |
| Nodes -> Materials -> Get Node Value                    | nodes.ParameterGetMaterialNodeAttribute        | NLGetMaterialNodeAttribute               |
| Nodes -> Materials -> Play Sequence                     | nodes.ActionPlayMaterialSequence               | NLPlayMaterialSequence                   |
| Nodes -> Materials -> Set Material                      | nodes.SetMaterial                              | NLSetMaterial                            |
| Nodes -> Materials -> Set Node Input Value              | nodes.ActionSetMaterialNodeValue               | NLSetMaterialNodeValue                   |
| Nodes -> Materials -> Set Node Value                    | nodes.ActionSetMaterialNodeAttribute           | NLSetMaterialNodeAttribute               |
| Objects -> Add Object                                   | nodes.ActionAddObject                          | NLAddObjectActionNode                    |
| Objects -> Data -> Get Axis Vector                      | nodes.ParameterAxisVector                      | NLParameterAxisVector                    |
| Objects -> Data -> Get Object Vertices                  | nodes.GetObjectVertices                        | NLGetObjectVertices                      |
| Objects -> Data -> Get Position / Rotation / Scale etc. | nodes.ParameterObjectAttribute                 | NLObjectAttributeParameterNode           |
| Objects -> Data -> Get Unique Name                      | nodes.GetObjectDataName                        | NLGetObjectDataName                      |
| Objects -> Data -> Replace Mesh                         | nodes.ActionReplaceMesh                        | NLActionReplaceMesh                      |
| Objects -> Data -> Set Position / Rotation / Scale etc. | nodes.ActionSetObjectAttribute                 | NLSetObjectAttributeActionNode           |
| Objects -> Get Child By Index                           | nodes.FindChildByIndex                         | NLParameterFindChildByIndexNode          |
| Objects -> Get Child By Name                            | nodes.ParameterFindChildByName                 | NLParameterFindChildByNameNode           |
| Objects -> Get Curve Points                             | nodes.GetCurvePoints                           | NLGetCurvePoints                         |
| Objects -> Get Object                                   | nodes.ActionFindObject                         | NLActionFindObjectNode                   |
| Objects -> Get Owner                                    | nodes.ParamOwnerObject                         | NLOwnerGameObjectParameterNode           |
| Objects -> Get Parent                                   | nodes.ParameterParentGameObject                | NLParameterGameObjectParent              |
| Objects -> Properties -> Clamped Modify Property        | nodes.ActionClampedAddToGameObjectGameProperty | NLClampedModifyProperty                  |
| Objects -> Properties -> Copy From Object               | nodes.CopyPropertyFromObject                   | NLCopyPropertyFromObject                 |
| Objects -> Properties -> Evaluate Property              | nodes.ObjectPropertyOperator                   | NLObjectPropertyOperator                 |
| Objects -> Properties -> Get Property                   | nodes.ParameterObjectProperty                  | NLGameObjectPropertyParameterNode        |
| Objects -> Properties -> Has Property                   | nodes.ParameterObjectHasProperty               | NLGameObjectHasPropertyParameterNode     |
| Objects -> Properties -> Modify Property                | nodes.ActionAddToGameObjectGameProperty        | NLAddToGameObjectGamePropertyActionNode  |
| Objects -> Properties -> Set Property                   | nodes.ActionSetGameObjectGameProperty          | NLSetGameObjectGamePropertyActionNode    |
| Objects -> Properties -> Toggle Property                | nodes.ActionToggleGameObjectGameProperty       | NLToggleGameObjectGamePropertyActionNode |
| Objects -> Remove Object                                | nodes.ActionEndObject                          | NLActionEndObjectNode                    |
| Objects -> Remove Parent                                | nodes.ActionRemoveParent                       | NLActionRemoveParentNode                 |
| Objects -> Send Message                                 | nodes.ActionSendMessage                        | NLActionSendMessage                      |
| Objects -> Set Curve Points                             | nodes.SetCurvePoints                           | NLSetCurvePoints                         |
| Objects -> Set Parent                                   | nodes.ActionSetParent                          | NLActionSetParentNode                    |
| Objects -> Set Visibility                               | nodes.ActionSetGameObjectVisibility            | NLActionSetGameObjectVisibility          |
| Objects -> Transformation -> Align Axis to Vector       | nodes.ActionAlignAxisToVector                  | NLActionAlignAxisToVector                |
| Objects -> Transformation -> Apply Force                | nodes.ActionApplyForce                         | NLActionApplyForce                       |
| Objects -> Transformation -> Apply Impulse              | nodes.ActionApplyImpulse                       | NLActionApplyImpulse                     |
| Objects -> Transformation -> Apply Movement             | nodes.ActionApplyLocation                      | NLActionApplyLocation                    |
| Objects -> Transformation -> Apply Rotation             | nodes.ActionApplyRotation                      | NLActionApplyRotation                    |
| Objects -> Transformation -> Apply Torque               | nodes.ActionApplyTorque                        | NLActionApplyTorque                      |
| Objects -> Transformation -> Follow Path                | nodes.ActionFollowPath                         | NLActionFollowPath                       |
| Objects -> Transformation -> Move To                    | nodes.ActionMoveTo                             | NLActionMoveTo                           |
| Objects -> Transformation -> Move To with Navmesh       | nodes.ActionNavigateWithNavmesh                | NLActionNavigate                         |
| Objects -> Transformation -> Rotate To                  | nodes.ActionRotateTo                           | NLActionRotateTo                         |
| Objects -> Transformation -> Translate                  | nodes.ActionTranslate                          | NLActionTranslate                        |
| Physics -> Add Constraint                               | nodes.AddPhysicsConstraint                     | NLActionAddPhysicsConstraint             |
| Physics -> Character -> Get Physics Info                | nodes.ParameterGetCharacterInfo                | NLActionGetCharacterInfo                 |
| Physics -> Character -> Jump                            | nodes.ActionCharacterJump                      | NLActionCharacterJump                    |
| Physics -> Character -> Set Jump Force                  | nodes.SetCharacterJumpSpeed                    | NLSetCharacterJumpSpeed                  |
| Physics -> Character -> Set Max Jumps                   | nodes.ActionSetCharacterJump                   | NLActionSetCharacterJump                 |
| Physics -> Character -> Set Velocity                    | nodes.ActionSetCharacterVelocity               | NLActionSetCharacterVelocity             |
| Physics -> Character -> Walk                            | nodes.ActionSetCharacterWalkDir                | NLActionSetCharacterWalkDir              |
| Physics -> Collision                                    | nodes.ConditionCollision                       | NLConditionCollisionNode                 |
| Physics -> Remove Constraint                            | nodes.RemovePhysicsConstraint                  | NLActionRemovePhysicsConstraint          |
| Physics -> Set Collision Group                          | nodes.SetCollisionGroup                        | NLSetCollisionGroup                      |
| Physics -> Set Collision Mask                           | nodes.SetCollisionMask                         | NLSetCollisionMask                       |
| Physics -> Set Dynamics                                 | nodes.ActionSetDynamics                        | NLActionSetDynamicsNode                  |
| Physics -> Set Gravity                                  | nodes.ActionSetCharacterGravity                | NLActionSetCharacterGravity              |
| Physics -> Set Physics                                  | nodes.ActionSetPhysics                         | NLActionSetPhysicsNode                   |
| Physics -> Set Rigid Body                               | nodes.ActionSetRigidBody                       | NLSetRigidBody                           |
| Physics -> Vehicle -> Accelerate                        | nodes.VehicleApplyForce                        | NLVehicleApplyEngineForce                |
| Physics -> Vehicle -> Brake                             | nodes.VehicleApplyBraking                      | NLVehicleApplyBraking                    |
| Physics -> Vehicle -> Create New Vehicle                | nodes.ActionCreateVehicleFromParent            | NLCreateVehicleFromParent                |
| Physics -> Vehicle -> Set Attributes                    | nodes.VehicleSetAttributes                     | NLVehicleSetAttributes                   |
| Physics -> Vehicle -> Steer                             | nodes.VehicleApplySteering                     | NLVehicleApplySteering                   |
| Python -> Dictionary -> Get Key                         | nodes.ParameterDictionaryValue                 | NLGetDictKeyNode                         |
| Python -> Dictionary -> Init Empty                      | nodes.InitEmptyDict                            | NLInitEmptyDict                          |
| Python -> Dictionary -> Init From Item                  | nodes.InitNewDict                              | NLInitNewDict                            |
| Python -> Dictionary -> Remove Key                      | nodes.SetDictDelKey                            | NLSetDictDelKey                          |
| Python -> Dictionary -> Set Key                         | nodes.SetDictKeyValue                          | NLSetDictKeyValue                        |
| Python -> Get Object Attribute                          | nodes.GetObInstanceAttr                        | NLParameterGetAttribute                  |
| Python -> List -> Append                                | nodes.AppendListItem                           | NLAppendListItem                         |
| Python -> List -> Duplicate                             | nodes.DuplicateList                            | NLDuplicateList                          |
| Python -> List -> From Items                            | nodes.InitNewList                              | NLInitNewList                            |
| Python -> List -> Get Index                             | nodes.ParameterListIndex                       | NLGetListIndexNode                       |
| Python -> List -> Get Random Item                       | nodes.ParameterRandomListIndex                 | NLGetRandomListIndex                     |
| Python -> List -> Init Empty                            | nodes.InitEmptyList                            | NLInitEmptyList                          |
| Python -> List -> Remove Index                          | nodes.RemoveListIndex                          | NLRemoveListIndex                        |
| Python -> List -> Remove Value                          | nodes.RemoveListValue                          | NLRemoveListValue                        |
| Python -> List -> Set Index                             | nodes.SetListIndex                             | NLSetListIndex                           |
| Python -> Run Python Code                               | nodes.ParameterPythonModuleFunction            | NLParameterPythonModuleFunction          |
| Python -> Set Object Attribute                          | nodes.SetObInstanceAttr                        | NLParameterSetAttribute                  |
| Python -> Typecast Value                                | nodes.ParameterTypeCast                        | NLParameterTypeCast                      |
| Ray Casts -> Camera Ray                                 | nodes.ActionCameraPick                         | NLActionCameraPickNode                   |
| Ray Casts -> Mouse Ray                                  | nodes.ActionMousePick                          | NLActionMousePickNode                    |
| Ray Casts -> Projectile Ray                             | nodes.ProjectileRayCast                        | NLProjectileRayCast                      |
| Ray Casts -> Ray                                        | nodes.ActionRayPick                            | NLActionRayCastNode                      |
| Render -> Draw Line                                     | nodes.GEDrawLine                               | NLDrawLine                               |
| Render -> Get Fullscreen                                | nodes.GetFullscreen                            | NLGetFullscreen                          |
| Render -> Get Resolution                                | nodes.GetResolution                            | NLGetResolution                          |
| Render -> Get VSync                                     | nodes.GetVSync                                 | NLGetVsyncNode                           |
| Render -> Set Fullscreen                                | nodes.ActionSetFullscreen                      | NLActionSetFullscreen                    |
| Render -> Set Resolution                                | nodes.ActionSetResolution                      | NLActionSetResolution                    |
| Render -> Set VSync                                     | nodes.ActionSetVSync                           | NLActionSetVSync                         |
| Render -> Show Framerate                                | nodes.GEShowFramerate                          | NLShowFramerate                          |
| Render -> Show Profile                                  | nodes.GESetProfile                             | NLSetProfile                             |
| Render -> Visuals -> Set Ambient Occlusion              | nodes.SetEeveeAO                               | NLSetEeveeAO                             |
| Render -> Visuals -> Set Bloom                          | nodes.SetEeveeBloom                            | NLSetEeveeBloom                          |
| Render -> Visuals -> Set Exposure                       | nodes.SetExposure                              | NLSetExposureAction                      |
| Render -> Visuals -> Set Gamma                          | nodes.SetGamma                                 | NLSetGammaAction                         |
| Render -> Visuals -> Set SMAA                           | nodes.SetEeveeSMAA                             | NLSetEeveeSMAA                           |
| Render -> Visuals -> Set SMAA Quality                   | nodes.SetEeveeSMAAQuality                      | NLSetEeveeSMAAQuality                    |
| Render -> Visuals -> Set SSR                            | nodes.SetEeveeSSR                              | NLSetEeveeSSR                            |
| Render -> Visuals -> Set Volumetric Light               | nodes.SetEeveeVolumetrics                      | NLSetEeveeVolumetrics                    |
| Scene -> Camera -> Active Camera                        | nodes.ParameterActiveCamera                    | NLActiveCameraParameterNode              |
| Scene -> Camera -> Screen Position                      | nodes.ParameterScreenPosition                  | NLParameterScreenPosition                |
| Scene -> Camera -> Set Camera                           | nodes.ActionSetActiveCamera                    | NLActionSetActiveCamera                  |
| Scene -> Camera -> Set FOV                              | nodes.ActionSetCameraFov                       | NLActionSetCameraFov                     |
| Scene -> Camera -> Set Orthographic Scale               | nodes.ActionSetCameraOrthoScale                | NLActionSetCameraOrthoScale              |
| Scene -> Camera -> World Position                       | nodes.ParameterWorldPosition                   | NLParameterWorldPosition                 |
| Scene -> Collections -> Get Collection                  | nodes.GetCollection                            | NLGetCollectionNode                      |
| Scene -> Collections -> Get Object Names                | nodes.GetCollectionObjectNames                 | NLGetCollectionObjectNamesNode           |
| Scene -> Collections -> Get Objects                     | nodes.GetCollectionObjects                     | NLGetCollectionObjectsNode               |
| Scene -> Collections -> Remove Overlay Collection       | nodes.GERemoveOverlayCollection                | NLRemoveOverlayCollection                |
| Scene -> Collections -> Set Overlay Collection          | nodes.GESetOverlayCollection                   | NLSetOverlayCollection                   |
| Scene -> Custom Cursor                                  | nodes.GECursorBehavior                         | NLCursorBehavior                         |
| Scene -> Get Gravity                                    | nodes.GetGravity                               | NLGetGravityNode                         |
| Scene -> Get Scene                                      | nodes.GetScene                                 | NLGetScene                               |
| Scene -> Get Timescale                                  | nodes.GetTimeScale                             | NLParameterGetTimeScale                  |
| Scene -> Set Gravity                                    | nodes.ActionSetGravity                         | NLActionSetGravity                       |
| Scene -> Set Timescale                                  | nodes.ActionSetTimeScale                       | NLActionSetTimeScale                     |
| Sound -> 2D Sound                                       | nodes.ActionStartSound                         | NLActionStartSound                       |
| Sound -> 3D Sound                                       | nodes.ActionStart3DSoundAdv                    | NLActionStart3DSoundAdv                  |
| Sound -> Pause Sound                                    | nodes.ActionPauseSound                         | NLActionPauseSound                       |
| Sound -> Resume Sound                                   | nodes.ActionResumeSound                        | NLActionResumeSound                      |
| Sound -> Stop All Sounds                                | nodes.ActionStopAllSounds                      | NLActionStopAllSounds                    |
| Sound -> Stop Sound                                     | nodes.ActionStopSound                          | NLActionStopSound                        |
| Time -> Barrier                                         | nodes.GEBarrier                                | NLActionTimeBarrier                      |
| Time -> Delay                                           | nodes.ActionTimeDelay                          | NLActionTimeDelay                        |
| Time -> Pulsify                                         | nodes.ActionTimeFilter                         | NLActionTimeFilter                       |
| Time -> Time Data                                       | nodes.ParameterTime                            | NLParameterTimeNode                      |
| Time -> Timer                                           | nodes.ConditionTimeElapsed                     | NLConditionTimeElapsed                   |
| Utilities -> Get Profile                                | nodes.ActionPerformanceProfile                 | NLActionGetPerformanceProfileNode        |
| Utilities -> Print                                      | nodes.ActionPrint                              | NLActionPrint                            |
| Values -> File Path                                     | nodes.ParameterSimpleValue                     | NLParameterFileValue                     |
| Values -> Formatted String                              | nodes.ParameterFormattedString                 | NLParameterFormattedString               |
| Values -> Global -> Get Global Value                    | nodes.ParameterGetGlobalValue                  | NLParameterGetGlobalValue                |
| Values -> Global -> List Global Category                | nodes.ActionListGlobalValues                   | NLActionListGlobalValues                 |
| Values -> Global -> Set Global Value                    | nodes.ActionSetGlobalValue                     | NLActionSetGlobalValue                   |
| Values -> Invert                                        | nodes.InvertValue                              | NLInvertValueNode                        |
| Values -> Invert Boolean                                | nodes.InvertBool                               | NLInvertBoolNode                         |
| Values -> Random -> Random Float                        | nodes.ActionRandomFloat                        | NLActionRandomFloat                      |
| Values -> Random -> Random Integer                      | nodes.ActionRandomInt                          | NLActionRandomInteger                    |
| Values -> Random -> Random Vector                       | nodes.GERandomVect                             | NLRandomVect                             |
| Values -> Simple -> Boolean                             | nodes.ParameterSimpleValue                     | NLParameterBooleanValue                  |
| Values -> Simple -> Float                               | nodes.ParameterSimpleValue                     | NLParameterFloatValue                    |
| Values -> Simple -> Integer                             | nodes.ParameterSimpleValue                     | NLParameterIntValue                      |
| Values -> Simple -> String                              | nodes.ParameterSimpleValue                     | NLParameterStringValue                   |
| Values -> Value Switch                                  | nodes.ValueSwitch                              | NLValueSwitch                            |
| Values -> Value Valid                                   | nodes.ConditionValueValid                      | NLConditionValueValidNode                |
| Values -> Vectors -> Color RGB                          | nodes.ParameterColor                           | NLParameterRGBNode                       |
| Values -> Vectors -> Color RGBA                         | nodes.ParameterColorAlpha                      | NLParameterRGBANode                      |
| Values -> Vectors -> Euler                              | nodes.ParameterEulerSimple                     | NLParameterEulerSimpleNode               |
| Values -> Vectors -> Separate XY                        | nodes.ParameterVector2Split                    | NLParameterVector2SplitNode              |
| Values -> Vectors -> Separate XYZ                       | nodes.ParameterVector3Split                    | NLParameterVector3SplitNode              |
| Values -> Vectors -> Vector XY                          | nodes.ParameterVector2Simple                   | NLParameterVector2SimpleNode             |
| Values -> Vectors -> Vector XYZ                         | nodes.ParameterVector3Simple                   | NLParameterVector3SimpleNode             |
| Values -> Vectors -> Vector XYZW                        | nodes.ParameterVector4Simple                   | NLParameterVector4SimpleNode             |
| Variables -> Clear Variables                            | nodes.ActionClearVariables                     | NLActionClearVariables                   |
| Variables -> List Saved Variables                       | nodes.ActionListVariables                      | NLActionListVariables                    |
| Variables -> Load Variable                              | nodes.ActionLoadVariable                       | NLActionLoadVariable                     |
| Variables -> Load Variable Dict                         | nodes.ActionLoadVariables                      | NLActionLoadVariables                    |
| Variables -> Remove Variable                            | nodes.ActionRemoveVariable                     | NLActionRemoveVariable                   |
| Variables -> Save Variable                              | nodes.ActionSaveVariable                       | NLActionSaveVariable                     |
| Variables -> Save Variable Dict                         | nodes.ActionSaveVariables                      | NLActionSaveVariables                    |

部分未添加到列表的逻辑节点：

    ActionApplyGameObjectValue (ActionCell)
    ActionCreateVehicle (ActionCell)
    ActionFindObject (ParameterCell)
    ActionRepeater (ActionCell)
    ActionSetCurrentScene (ActionCell)
    ActionStringOp (ActionCell)
    ActionTrackTo (ActionCell)
    ActionUpdateBitmapFontQuads (ActionCell)
    ConditionAlways (ConditionCell)
    ConditionMouseLeft (ConditionCell)
    GetController (ParameterCell)
    GetCurrentControllerLB (ParameterCell)
    NormalizeVector (ParameterCell)
    ParameterCurrentScene (ParameterCell)
    ParameterVector4 (ParameterCell)
    ParameterVector (ParameterCell)
    SensorPositive (ParameterCell)


## 🐥 Sources List - gameengine

    > tree.exe -f UPBGE-0.30-windows-x86_64\upbge-0.30\source\gameengine
    |-- gameengine\BlenderRoutines
    |   |-- gameengine\BlenderRoutines\BL_KetsjiEmbedStart.cpp
    |   `-- gameengine\BlenderRoutines\CMakeLists.txt
    |-- gameengine\CMakeLists.txt
    |-- gameengine\Common
    |   |-- gameengine\Common\CM_Clock.cpp
    |   |-- gameengine\Common\CM_Clock.h
    |   |-- gameengine\Common\CM_Format.h
    |   |-- gameengine\Common\CM_List.h
    |   |-- gameengine\Common\CM_Message.cpp
    |   |-- gameengine\Common\CM_Message.h
    |   |-- gameengine\Common\CM_RefCount.h
    |   |-- gameengine\Common\CM_Thread.cpp
    |   |-- gameengine\Common\CM_Thread.h
    |   |-- gameengine\Common\CM_Utils.cpp
    |   |-- gameengine\Common\CM_Utils.h
    |   `-- gameengine\Common\CMakeLists.txt
    |-- gameengine\Converter
    |   |-- gameengine\Converter\BL_ArmatureActuator.cpp
    |   |-- gameengine\Converter\BL_ArmatureActuator.h
    |   |-- gameengine\Converter\BL_ArmatureChannel.cpp
    |   |-- gameengine\Converter\BL_ArmatureChannel.h
    |   |-- gameengine\Converter\BL_ArmatureConstraint.cpp
    |   |-- gameengine\Converter\BL_ArmatureConstraint.h
    |   |-- gameengine\Converter\BL_ArmatureObject.cpp
    |   |-- gameengine\Converter\BL_ArmatureObject.h
    |   |-- gameengine\Converter\BL_BlenderConverter.cpp
    |   |-- gameengine\Converter\BL_BlenderConverter.h
    |   |-- gameengine\Converter\BL_BlenderDataConversion.cpp
    |   |-- gameengine\Converter\BL_BlenderDataConversion.h
    |   |-- gameengine\Converter\BL_BlenderScalarInterpolator.cpp
    |   |-- gameengine\Converter\BL_BlenderScalarInterpolator.h
    |   |-- gameengine\Converter\BL_BlenderSceneConverter.cpp
    |   |-- gameengine\Converter\BL_BlenderSceneConverter.h
    |   |-- gameengine\Converter\BL_ConvertActuators.cpp
    |   |-- gameengine\Converter\BL_ConvertActuators.h
    |   |-- gameengine\Converter\BL_ConvertControllers.cpp
    |   |-- gameengine\Converter\BL_ConvertControllers.h
    |   |-- gameengine\Converter\BL_ConvertProperties.cpp
    |   |-- gameengine\Converter\BL_ConvertProperties.h
    |   |-- gameengine\Converter\BL_ConvertSensors.cpp
    |   |-- gameengine\Converter\BL_ConvertSensors.h
    |   |-- gameengine\Converter\BL_IpoConvert.h
    |   `-- gameengine\Converter\CMakeLists.txt
    |-- gameengine\Device
    |   |-- gameengine\Device\CMakeLists.txt
    |   |-- gameengine\Device\DEV_EventConsumer.cpp
    |   |-- gameengine\Device\DEV_EventConsumer.h
    |   |-- gameengine\Device\DEV_InputDevice.cpp
    |   |-- gameengine\Device\DEV_InputDevice.h
    |   |-- gameengine\Device\DEV_Joystick.cpp
    |   |-- gameengine\Device\DEV_Joystick.h
    |   |-- gameengine\Device\DEV_JoystickDefines.h
    |   |-- gameengine\Device\DEV_JoystickEvents.cpp
    |   |-- gameengine\Device\DEV_JoystickPrivate.h
    |   `-- gameengine\Device\DEV_JoystickVibration.cpp
    |-- gameengine\Expressions
    |   |-- gameengine\Expressions\CMakeLists.txt
    |   |-- gameengine\Expressions\EXP_BaseListValue.h
    |   |-- gameengine\Expressions\EXP_BoolValue.h
    |   |-- gameengine\Expressions\EXP_ConstExpr.h
    |   |-- gameengine\Expressions\EXP_EmptyValue.h
    |   |-- gameengine\Expressions\EXP_ErrorValue.h
    |   |-- gameengine\Expressions\EXP_Expression.h
    |   |-- gameengine\Expressions\EXP_FloatValue.h
    |   |-- gameengine\Expressions\EXP_IdentifierExpr.h
    |   |-- gameengine\Expressions\EXP_IfExpr.h
    |   |-- gameengine\Expressions\EXP_InputParser.h
    |   |-- gameengine\Expressions\EXP_IntValue.h
    |   |-- gameengine\Expressions\EXP_ListValue.h
    |   |-- gameengine\Expressions\EXP_ListWrapper.h
    |   |-- gameengine\Expressions\EXP_Operator1Expr.h
    |   |-- gameengine\Expressions\EXP_Operator2Expr.h
    |   |-- gameengine\Expressions\EXP_PyObjectPlus.h
    |   |-- gameengine\Expressions\EXP_Python.h
    |   |-- gameengine\Expressions\EXP_PythonCallBack.h
    |   |-- gameengine\Expressions\EXP_StringValue.h
    |   |-- gameengine\Expressions\EXP_Value.h
    |   `-- gameengine\Expressions\intern
    |       |-- gameengine\Expressions\intern\BaseListValue.cpp
    |       |-- gameengine\Expressions\intern\BoolValue.cpp
    |       |-- gameengine\Expressions\intern\ConstExpr.cpp
    |       |-- gameengine\Expressions\intern\EmptyValue.cpp
    |       |-- gameengine\Expressions\intern\ErrorValue.cpp
    |       |-- gameengine\Expressions\intern\Expression.cpp
    |       |-- gameengine\Expressions\intern\FloatValue.cpp
    |       |-- gameengine\Expressions\intern\IdentifierExpr.cpp
    |       |-- gameengine\Expressions\intern\IfExpr.cpp
    |       |-- gameengine\Expressions\intern\InputParser.cpp
    |       |-- gameengine\Expressions\intern\IntValue.cpp
    |       |-- gameengine\Expressions\intern\ListWrapper.cpp
    |       |-- gameengine\Expressions\intern\Operator1Expr.cpp
    |       |-- gameengine\Expressions\intern\Operator2Expr.cpp
    |       |-- gameengine\Expressions\intern\PyObjectPlus.cpp
    |       |-- gameengine\Expressions\intern\PythonCallBack.cpp
    |       |-- gameengine\Expressions\intern\StringValue.cpp
    |       `-- gameengine\Expressions\intern\Value.cpp
    |-- gameengine\GameLogic
    |   |-- gameengine\GameLogic\CMakeLists.txt
    |   |-- gameengine\GameLogic\SCA_2DFilterActuator.cpp
    |   |-- gameengine\GameLogic\SCA_2DFilterActuator.h
    |   |-- gameengine\GameLogic\SCA_ANDController.cpp
    |   |-- gameengine\GameLogic\SCA_ANDController.h
    |   |-- gameengine\GameLogic\SCA_ActionActuator.cpp
    |   |-- gameengine\GameLogic\SCA_ActionActuator.h
    |   |-- gameengine\GameLogic\SCA_ActuatorEventManager.cpp
    |   |-- gameengine\GameLogic\SCA_ActuatorEventManager.h
    |   |-- gameengine\GameLogic\SCA_ActuatorSensor.cpp
    |   |-- gameengine\GameLogic\SCA_ActuatorSensor.h
    |   |-- gameengine\GameLogic\SCA_AddObjectActuator.cpp
    |   |-- gameengine\GameLogic\SCA_AddObjectActuator.h
    |   |-- gameengine\GameLogic\SCA_AlwaysSensor.cpp
    |   |-- gameengine\GameLogic\SCA_AlwaysSensor.h
    |   |-- gameengine\GameLogic\SCA_ArmatureSensor.cpp
    |   |-- gameengine\GameLogic\SCA_ArmatureSensor.h
    |   |-- gameengine\GameLogic\SCA_BasicEventManager.cpp
    |   |-- gameengine\GameLogic\SCA_BasicEventManager.h
    |   |-- gameengine\GameLogic\SCA_CameraActuator.cpp
    |   |-- gameengine\GameLogic\SCA_CameraActuator.h
    |   |-- gameengine\GameLogic\SCA_CollectionActuator.cpp
    |   |-- gameengine\GameLogic\SCA_CollectionActuator.h
    |   |-- gameengine\GameLogic\SCA_CollisionSensor.cpp
    |   |-- gameengine\GameLogic\SCA_CollisionSensor.h
    |   |-- gameengine\GameLogic\SCA_ConstraintActuator.cpp
    |   |-- gameengine\GameLogic\SCA_ConstraintActuator.h
    |   |-- gameengine\GameLogic\SCA_DelaySensor.cpp
    |   |-- gameengine\GameLogic\SCA_DelaySensor.h
    |   |-- gameengine\GameLogic\SCA_DynamicActuator.cpp
    |   |-- gameengine\GameLogic\SCA_DynamicActuator.h
    |   |-- gameengine\GameLogic\SCA_EndObjectActuator.cpp
    |   |-- gameengine\GameLogic\SCA_EndObjectActuator.h
    |   |-- gameengine\GameLogic\SCA_EventManager.cpp
    |   |-- gameengine\GameLogic\SCA_EventManager.h
    |   |-- gameengine\GameLogic\SCA_ExpressionController.cpp
    |   |-- gameengine\GameLogic\SCA_ExpressionController.h
    |   |-- gameengine\GameLogic\SCA_GameActuator.cpp
    |   |-- gameengine\GameLogic\SCA_GameActuator.h
    |   |-- gameengine\GameLogic\SCA_IActuator.cpp
    |   |-- gameengine\GameLogic\SCA_IActuator.h
    |   |-- gameengine\GameLogic\SCA_IController.cpp
    |   |-- gameengine\GameLogic\SCA_IController.h
    |   |-- gameengine\GameLogic\SCA_IInputDevice.cpp
    |   |-- gameengine\GameLogic\SCA_IInputDevice.h
    |   |-- gameengine\GameLogic\SCA_ILogicBrick.cpp
    |   |-- gameengine\GameLogic\SCA_ILogicBrick.h
    |   |-- gameengine\GameLogic\SCA_IObject.cpp
    |   |-- gameengine\GameLogic\SCA_IObject.h
    |   |-- gameengine\GameLogic\SCA_IScene.cpp
    |   |-- gameengine\GameLogic\SCA_IScene.h
    |   |-- gameengine\GameLogic\SCA_ISensor.cpp
    |   |-- gameengine\GameLogic\SCA_ISensor.h
    |   |-- gameengine\GameLogic\SCA_InputEvent.cpp
    |   |-- gameengine\GameLogic\SCA_InputEvent.h
    |   |-- gameengine\GameLogic\SCA_JoystickManager.cpp
    |   |-- gameengine\GameLogic\SCA_JoystickManager.h
    |   |-- gameengine\GameLogic\SCA_JoystickSensor.cpp
    |   |-- gameengine\GameLogic\SCA_JoystickSensor.h
    |   |-- gameengine\GameLogic\SCA_KeyboardManager.cpp
    |   |-- gameengine\GameLogic\SCA_KeyboardManager.h
    |   |-- gameengine\GameLogic\SCA_KeyboardSensor.cpp
    |   |-- gameengine\GameLogic\SCA_KeyboardSensor.h
    |   |-- gameengine\GameLogic\SCA_LogicManager.cpp
    |   |-- gameengine\GameLogic\SCA_LogicManager.h
    |   |-- gameengine\GameLogic\SCA_MouseActuator.cpp
    |   |-- gameengine\GameLogic\SCA_MouseActuator.h
    |   |-- gameengine\GameLogic\SCA_MouseFocusSensor.cpp
    |   |-- gameengine\GameLogic\SCA_MouseFocusSensor.h
    |   |-- gameengine\GameLogic\SCA_MouseManager.cpp
    |   |-- gameengine\GameLogic\SCA_MouseManager.h
    |   |-- gameengine\GameLogic\SCA_MouseSensor.cpp
    |   |-- gameengine\GameLogic\SCA_MouseSensor.h
    |   |-- gameengine\GameLogic\SCA_MovementSensor.cpp
    |   |-- gameengine\GameLogic\SCA_MovementSensor.h
    |   |-- gameengine\GameLogic\SCA_NANDController.cpp
    |   |-- gameengine\GameLogic\SCA_NANDController.h
    |   |-- gameengine\GameLogic\SCA_NORController.cpp
    |   |-- gameengine\GameLogic\SCA_NORController.h
    |   |-- gameengine\GameLogic\SCA_NearSensor.cpp
    |   |-- gameengine\GameLogic\SCA_NearSensor.h
    |   |-- gameengine\GameLogic\SCA_NetworkMessageActuator.cpp
    |   |-- gameengine\GameLogic\SCA_NetworkMessageActuator.h
    |   |-- gameengine\GameLogic\SCA_NetworkMessageSensor.cpp
    |   |-- gameengine\GameLogic\SCA_NetworkMessageSensor.h
    |   |-- gameengine\GameLogic\SCA_ORController.cpp
    |   |-- gameengine\GameLogic\SCA_ORController.h
    |   |-- gameengine\GameLogic\SCA_ObjectActuator.cpp
    |   |-- gameengine\GameLogic\SCA_ObjectActuator.h
    |   |-- gameengine\GameLogic\SCA_ParentActuator.cpp
    |   |-- gameengine\GameLogic\SCA_ParentActuator.h
    |   |-- gameengine\GameLogic\SCA_PropertyActuator.cpp
    |   |-- gameengine\GameLogic\SCA_PropertyActuator.h
    |   |-- gameengine\GameLogic\SCA_PropertySensor.cpp
    |   |-- gameengine\GameLogic\SCA_PropertySensor.h
    |   |-- gameengine\GameLogic\SCA_PythonController.cpp
    |   |-- gameengine\GameLogic\SCA_PythonController.h
    |   |-- gameengine\GameLogic\SCA_PythonJoystick.cpp
    |   |-- gameengine\GameLogic\SCA_PythonJoystick.h
    |   |-- gameengine\GameLogic\SCA_PythonKeyboard.cpp
    |   |-- gameengine\GameLogic\SCA_PythonKeyboard.h
    |   |-- gameengine\GameLogic\SCA_PythonMouse.cpp
    |   |-- gameengine\GameLogic\SCA_PythonMouse.h
    |   |-- gameengine\GameLogic\SCA_RadarSensor.cpp
    |   |-- gameengine\GameLogic\SCA_RadarSensor.h
    |   |-- gameengine\GameLogic\SCA_RandomActuator.cpp
    |   |-- gameengine\GameLogic\SCA_RandomActuator.h
    |   |-- gameengine\GameLogic\SCA_RandomNumberGenerator.cpp
    |   |-- gameengine\GameLogic\SCA_RandomNumberGenerator.h
    |   |-- gameengine\GameLogic\SCA_RandomSensor.cpp
    |   |-- gameengine\GameLogic\SCA_RandomSensor.h
    |   |-- gameengine\GameLogic\SCA_RaySensor.cpp
    |   |-- gameengine\GameLogic\SCA_RaySensor.h
    |   |-- gameengine\GameLogic\SCA_ReplaceMeshActuator.cpp
    |   |-- gameengine\GameLogic\SCA_ReplaceMeshActuator.h
    |   |-- gameengine\GameLogic\SCA_SceneActuator.cpp
    |   |-- gameengine\GameLogic\SCA_SceneActuator.h
    |   |-- gameengine\GameLogic\SCA_SoundActuator.cpp
    |   |-- gameengine\GameLogic\SCA_SoundActuator.h
    |   |-- gameengine\GameLogic\SCA_StateActuator.cpp
    |   |-- gameengine\GameLogic\SCA_StateActuator.h
    |   |-- gameengine\GameLogic\SCA_SteeringActuator.cpp
    |   |-- gameengine\GameLogic\SCA_SteeringActuator.h
    |   |-- gameengine\GameLogic\SCA_TimeEventManager.cpp
    |   |-- gameengine\GameLogic\SCA_TimeEventManager.h
    |   |-- gameengine\GameLogic\SCA_TrackToActuator.cpp
    |   |-- gameengine\GameLogic\SCA_TrackToActuator.h
    |   |-- gameengine\GameLogic\SCA_VibrationActuator.cpp
    |   |-- gameengine\GameLogic\SCA_VibrationActuator.h
    |   |-- gameengine\GameLogic\SCA_VisibilityActuator.cpp
    |   |-- gameengine\GameLogic\SCA_VisibilityActuator.h
    |   |-- gameengine\GameLogic\SCA_XNORController.cpp
    |   |-- gameengine\GameLogic\SCA_XNORController.h
    |   |-- gameengine\GameLogic\SCA_XORController.cpp
    |   `-- gameengine\GameLogic\SCA_XORController.h
    |-- gameengine\GamePlayer
    |   |-- gameengine\GamePlayer\CMakeLists.txt
    |   |-- gameengine\GamePlayer\GPG_Canvas.cpp
    |   |-- gameengine\GamePlayer\GPG_Canvas.h
    |   `-- gameengine\GamePlayer\GPG_ghost.cpp
    |-- gameengine\Ketsji
    |   |-- gameengine\Ketsji\BL_Action.cpp
    |   |-- gameengine\Ketsji\BL_Action.h
    |   |-- gameengine\Ketsji\BL_ActionManager.cpp
    |   |-- gameengine\Ketsji\BL_ActionManager.h
    |   |-- gameengine\Ketsji\BL_Shader.cpp
    |   |-- gameengine\Ketsji\BL_Shader.h
    |   |-- gameengine\Ketsji\BL_Texture.cpp
    |   |-- gameengine\Ketsji\BL_Texture.h
    |   |-- gameengine\Ketsji\CMakeLists.txt
    |   |-- gameengine\Ketsji\KXNetwork
    |   |   |-- gameengine\Ketsji\KXNetwork\CMakeLists.txt
    |   |   |-- gameengine\Ketsji\KXNetwork\KX_NetworkMessageManager.cpp
    |   |   |-- gameengine\Ketsji\KXNetwork\KX_NetworkMessageManager.h
    |   |   |-- gameengine\Ketsji\KXNetwork\KX_NetworkMessageScene.cpp
    |   |   `-- gameengine\Ketsji\KXNetwork\KX_NetworkMessageScene.h
    |   |-- gameengine\Ketsji\KX_2DFilter.cpp
    |   |-- gameengine\Ketsji\KX_2DFilter.h
    |   |-- gameengine\Ketsji\KX_2DFilterFrameBuffer.cpp
    |   |-- gameengine\Ketsji\KX_2DFilterFrameBuffer.h
    |   |-- gameengine\Ketsji\KX_2DFilterManager.cpp
    |   |-- gameengine\Ketsji\KX_2DFilterManager.h
    |   |-- gameengine\Ketsji\KX_BlenderCanvas.cpp
    |   |-- gameengine\Ketsji\KX_BlenderCanvas.h
    |   |-- gameengine\Ketsji\KX_BlenderMaterial.cpp
    |   |-- gameengine\Ketsji\KX_BlenderMaterial.h
    |   |-- gameengine\Ketsji\KX_BoneParentNodeRelationship.cpp
    |   |-- gameengine\Ketsji\KX_BoneParentNodeRelationship.h
    |   |-- gameengine\Ketsji\KX_Camera.cpp
    |   |-- gameengine\Ketsji\KX_Camera.h
    |   |-- gameengine\Ketsji\KX_CameraIpoSGController.cpp
    |   |-- gameengine\Ketsji\KX_CameraIpoSGController.h
    |   |-- gameengine\Ketsji\KX_CharacterWrapper.cpp
    |   |-- gameengine\Ketsji\KX_CharacterWrapper.h
    |   |-- gameengine\Ketsji\KX_ClientObjectInfo.h
    |   |-- gameengine\Ketsji\KX_CollisionContactPoints.cpp
    |   |-- gameengine\Ketsji\KX_CollisionContactPoints.h
    |   |-- gameengine\Ketsji\KX_CollisionEventManager.cpp
    |   |-- gameengine\Ketsji\KX_CollisionEventManager.h
    |   |-- gameengine\Ketsji\KX_ConstraintWrapper.cpp
    |   |-- gameengine\Ketsji\KX_ConstraintWrapper.h
    |   |-- gameengine\Ketsji\KX_EmptyObject.cpp
    |   |-- gameengine\Ketsji\KX_EmptyObject.h
    |   |-- gameengine\Ketsji\KX_FontObject.cpp
    |   |-- gameengine\Ketsji\KX_FontObject.h
    |   |-- gameengine\Ketsji\KX_GameObject.cpp
    |   |-- gameengine\Ketsji\KX_GameObject.h
    |   |-- gameengine\Ketsji\KX_Globals.cpp
    |   |-- gameengine\Ketsji\KX_Globals.h
    |   |-- gameengine\Ketsji\KX_IInterpolator.h
    |   |-- gameengine\Ketsji\KX_IPOTransform.h
    |   |-- gameengine\Ketsji\KX_IPO_SGController.cpp
    |   |-- gameengine\Ketsji\KX_IPO_SGController.h
    |   |-- gameengine\Ketsji\KX_IScalarInterpolator.h
    |   |-- gameengine\Ketsji\KX_ISystem.h
    |   |-- gameengine\Ketsji\KX_KetsjiEngine.cpp
    |   |-- gameengine\Ketsji\KX_KetsjiEngine.h
    |   |-- gameengine\Ketsji\KX_LibLoadStatus.cpp
    |   |-- gameengine\Ketsji\KX_LibLoadStatus.h
    |   |-- gameengine\Ketsji\KX_Light.cpp
    |   |-- gameengine\Ketsji\KX_Light.h
    |   |-- gameengine\Ketsji\KX_LightIpoSGController.cpp
    |   |-- gameengine\Ketsji\KX_LightIpoSGController.h
    |   |-- gameengine\Ketsji\KX_LodLevel.cpp
    |   |-- gameengine\Ketsji\KX_LodLevel.h
    |   |-- gameengine\Ketsji\KX_LodManager.cpp
    |   |-- gameengine\Ketsji\KX_LodManager.h
    |   |-- gameengine\Ketsji\KX_MaterialShader.cpp
    |   |-- gameengine\Ketsji\KX_MaterialShader.h
    |   |-- gameengine\Ketsji\KX_MeshProxy.cpp
    |   |-- gameengine\Ketsji\KX_MeshProxy.h
    |   |-- gameengine\Ketsji\KX_MotionState.cpp
    |   |-- gameengine\Ketsji\KX_MotionState.h
    |   |-- gameengine\Ketsji\KX_NavMeshObject.cpp
    |   |-- gameengine\Ketsji\KX_NavMeshObject.h
    |   |-- gameengine\Ketsji\KX_NodeRelationships.cpp
    |   |-- gameengine\Ketsji\KX_NodeRelationships.h
    |   |-- gameengine\Ketsji\KX_ObColorIpoSGController.cpp
    |   |-- gameengine\Ketsji\KX_ObColorIpoSGController.h
    |   |-- gameengine\Ketsji\KX_ObstacleSimulation.cpp
    |   |-- gameengine\Ketsji\KX_ObstacleSimulation.h
    |   |-- gameengine\Ketsji\KX_OrientationInterpolator.cpp
    |   |-- gameengine\Ketsji\KX_OrientationInterpolator.h
    |   |-- gameengine\Ketsji\KX_PhysicsEngineEnums.h
    |   |-- gameengine\Ketsji\KX_PolyProxy.cpp
    |   |-- gameengine\Ketsji\KX_PolyProxy.h
    |   |-- gameengine\Ketsji\KX_PositionInterpolator.cpp
    |   |-- gameengine\Ketsji\KX_PositionInterpolator.h
    |   |-- gameengine\Ketsji\KX_PyConstraintBinding.cpp
    |   |-- gameengine\Ketsji\KX_PyConstraintBinding.h
    |   |-- gameengine\Ketsji\KX_PyMath.cpp
    |   |-- gameengine\Ketsji\KX_PyMath.h
    |   |-- gameengine\Ketsji\KX_PythonComponent.cpp
    |   |-- gameengine\Ketsji\KX_PythonComponent.h
    |   |-- gameengine\Ketsji\KX_PythonInit.cpp
    |   |-- gameengine\Ketsji\KX_PythonInit.h
    |   |-- gameengine\Ketsji\KX_PythonInitTypes.cpp
    |   |-- gameengine\Ketsji\KX_PythonInitTypes.h
    |   |-- gameengine\Ketsji\KX_PythonMain.cpp
    |   |-- gameengine\Ketsji\KX_PythonMain.h
    |   |-- gameengine\Ketsji\KX_PythonProxy.cpp
    |   |-- gameengine\Ketsji\KX_PythonProxy.h
    |   |-- gameengine\Ketsji\KX_PythonProxyManager.cpp
    |   |-- gameengine\Ketsji\KX_PythonProxyManager.h
    |   |-- gameengine\Ketsji\KX_RayCast.cpp
    |   |-- gameengine\Ketsji\KX_RayCast.h
    |   |-- gameengine\Ketsji\KX_ScalarInterpolator.cpp
    |   |-- gameengine\Ketsji\KX_ScalarInterpolator.h
    |   |-- gameengine\Ketsji\KX_ScalingInterpolator.cpp
    |   |-- gameengine\Ketsji\KX_ScalingInterpolator.h
    |   |-- gameengine\Ketsji\KX_Scene.cpp
    |   |-- gameengine\Ketsji\KX_Scene.h
    |   |-- gameengine\Ketsji\KX_TimeCategoryLogger.cpp
    |   |-- gameengine\Ketsji\KX_TimeCategoryLogger.h
    |   |-- gameengine\Ketsji\KX_TimeLogger.cpp
    |   |-- gameengine\Ketsji\KX_TimeLogger.h
    |   |-- gameengine\Ketsji\KX_VehicleWrapper.cpp
    |   |-- gameengine\Ketsji\KX_VehicleWrapper.h
    |   |-- gameengine\Ketsji\KX_VertexProxy.cpp
    |   `-- gameengine\Ketsji\KX_VertexProxy.h
    |-- gameengine\Launcher
    |   |-- gameengine\Launcher\CMakeLists.txt
    |   |-- gameengine\Launcher\LA_BlenderLauncher.cpp
    |   |-- gameengine\Launcher\LA_BlenderLauncher.h
    |   |-- gameengine\Launcher\LA_Launcher.cpp
    |   |-- gameengine\Launcher\LA_Launcher.h
    |   |-- gameengine\Launcher\LA_PlayerLauncher.cpp
    |   |-- gameengine\Launcher\LA_PlayerLauncher.h
    |   |-- gameengine\Launcher\LA_System.cpp
    |   |-- gameengine\Launcher\LA_System.h
    |   |-- gameengine\Launcher\LA_SystemCommandLine.cpp
    |   `-- gameengine\Launcher\LA_SystemCommandLine.h
    |-- gameengine\Physics
    |   |-- gameengine\Physics\Bullet
    |   |   |-- gameengine\Physics\Bullet\CMakeLists.txt
    |   |   |-- gameengine\Physics\Bullet\CcdConstraint.cpp
    |   |   |-- gameengine\Physics\Bullet\CcdConstraint.h
    |   |   |-- gameengine\Physics\Bullet\CcdGraphicController.cpp
    |   |   |-- gameengine\Physics\Bullet\CcdGraphicController.h
    |   |   |-- gameengine\Physics\Bullet\CcdMathUtils.h
    |   |   |-- gameengine\Physics\Bullet\CcdPhysicsController.cpp
    |   |   |-- gameengine\Physics\Bullet\CcdPhysicsController.h
    |   |   |-- gameengine\Physics\Bullet\CcdPhysicsEnvironment.cpp
    |   |   `-- gameengine\Physics\Bullet\CcdPhysicsEnvironment.h
    |   |-- gameengine\Physics\Common
    |   |   |-- gameengine\Physics\Common\CMakeLists.txt
    |   |   |-- gameengine\Physics\Common\PHY_DynamicTypes.h
    |   |   |-- gameengine\Physics\Common\PHY_ICharacter.h
    |   |   |-- gameengine\Physics\Common\PHY_IConstraint.h
    |   |   |-- gameengine\Physics\Common\PHY_IController.h
    |   |   |-- gameengine\Physics\Common\PHY_IGraphicController.h
    |   |   |-- gameengine\Physics\Common\PHY_IMotionState.h
    |   |   |-- gameengine\Physics\Common\PHY_IPhysicsController.h
    |   |   |-- gameengine\Physics\Common\PHY_IPhysicsEnvironment.h
    |   |   `-- gameengine\Physics\Common\PHY_IVehicle.h
    |   `-- gameengine\Physics\Dummy
    |       |-- gameengine\Physics\Dummy\CMakeLists.txt
    |       |-- gameengine\Physics\Dummy\DummyPhysicsEnvironment.cpp
    |       `-- gameengine\Physics\Dummy\DummyPhysicsEnvironment.h
    |-- gameengine\Rasterizer
    |   |-- gameengine\Rasterizer\CMakeLists.txt
    |   |-- gameengine\Rasterizer\RAS_2DFilter.cpp
    |   |-- gameengine\Rasterizer\RAS_2DFilter.h
    |   |-- gameengine\Rasterizer\RAS_2DFilterData.cpp
    |   |-- gameengine\Rasterizer\RAS_2DFilterData.h
    |   |-- gameengine\Rasterizer\RAS_2DFilterFrameBuffer.cpp
    |   |-- gameengine\Rasterizer\RAS_2DFilterFrameBuffer.h
    |   |-- gameengine\Rasterizer\RAS_2DFilterManager.cpp
    |   |-- gameengine\Rasterizer\RAS_2DFilterManager.h
    |   |-- gameengine\Rasterizer\RAS_BucketManager.cpp
    |   |-- gameengine\Rasterizer\RAS_BucketManager.h
    |   |-- gameengine\Rasterizer\RAS_CameraData.h
    |   |-- gameengine\Rasterizer\RAS_DebugDraw.cpp
    |   |-- gameengine\Rasterizer\RAS_DebugDraw.h
    |   |-- gameengine\Rasterizer\RAS_DisplayArray.h
    |   |-- gameengine\Rasterizer\RAS_DisplayArrayBucket.cpp
    |   |-- gameengine\Rasterizer\RAS_DisplayArrayBucket.h
    |   |-- gameengine\Rasterizer\RAS_FrameBuffer.cpp
    |   |-- gameengine\Rasterizer\RAS_FrameBuffer.h
    |   |-- gameengine\Rasterizer\RAS_FramingManager.cpp
    |   |-- gameengine\Rasterizer\RAS_FramingManager.h
    |   |-- gameengine\Rasterizer\RAS_ICanvas.cpp
    |   |-- gameengine\Rasterizer\RAS_ICanvas.h
    |   |-- gameengine\Rasterizer\RAS_IDisplayArray.cpp
    |   |-- gameengine\Rasterizer\RAS_IDisplayArray.h
    |   |-- gameengine\Rasterizer\RAS_IPolygonMaterial.cpp
    |   |-- gameengine\Rasterizer\RAS_IPolygonMaterial.h
    |   |-- gameengine\Rasterizer\RAS_IVertex.cpp
    |   |-- gameengine\Rasterizer\RAS_IVertex.h
    |   |-- gameengine\Rasterizer\RAS_MaterialBucket.cpp
    |   |-- gameengine\Rasterizer\RAS_MaterialBucket.h
    |   |-- gameengine\Rasterizer\RAS_MaterialShader.cpp
    |   |-- gameengine\Rasterizer\RAS_MaterialShader.h
    |   |-- gameengine\Rasterizer\RAS_MeshMaterial.cpp
    |   |-- gameengine\Rasterizer\RAS_MeshMaterial.h
    |   |-- gameengine\Rasterizer\RAS_MeshObject.cpp
    |   |-- gameengine\Rasterizer\RAS_MeshObject.h
    |   |-- gameengine\Rasterizer\RAS_OpenGLFilters
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Blur2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Dilation2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Erosion2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_GrayScale2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Invert2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Laplacian2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Prewitt2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Sepia2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Sharpen2DFilter.glsl
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_Sobel2DFilter.glsl
    |   |   `-- gameengine\Rasterizer\RAS_OpenGLFilters\RAS_VertexShader2DFilter.glsl
    |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer\CMakeLists.txt
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer\RAS_GLExtensionManager.h
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer\RAS_OpenGLDebugDraw.cpp
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer\RAS_OpenGLDebugDraw.h
    |   |   |-- gameengine\Rasterizer\RAS_OpenGLRasterizer\RAS_OpenGLRasterizer.cpp
    |   |   `-- gameengine\Rasterizer\RAS_OpenGLRasterizer\RAS_OpenGLRasterizer.h
    |   |-- gameengine\Rasterizer\RAS_Polygon.cpp
    |   |-- gameengine\Rasterizer\RAS_Polygon.h
    |   |-- gameengine\Rasterizer\RAS_Rasterizer.cpp
    |   |-- gameengine\Rasterizer\RAS_Rasterizer.h
    |   |-- gameengine\Rasterizer\RAS_Rect.h
    |   |-- gameengine\Rasterizer\RAS_Shader.cpp
    |   |-- gameengine\Rasterizer\RAS_Shader.h
    |   |-- gameengine\Rasterizer\RAS_Texture.cpp
    |   |-- gameengine\Rasterizer\RAS_Texture.h
    |   `-- gameengine\Rasterizer\RAS_Vertex.h
    |-- gameengine\SceneGraph
    |   |-- gameengine\SceneGraph\CMakeLists.txt
    |   |-- gameengine\SceneGraph\SG_BBox.cpp
    |   |-- gameengine\SceneGraph\SG_BBox.h
    |   |-- gameengine\SceneGraph\SG_Controller.cpp
    |   |-- gameengine\SceneGraph\SG_Controller.h
    |   |-- gameengine\SceneGraph\SG_CullingNode.cpp
    |   |-- gameengine\SceneGraph\SG_CullingNode.h
    |   |-- gameengine\SceneGraph\SG_DList.h
    |   |-- gameengine\SceneGraph\SG_Familly.cpp
    |   |-- gameengine\SceneGraph\SG_Familly.h
    |   |-- gameengine\SceneGraph\SG_Frustum.cpp
    |   |-- gameengine\SceneGraph\SG_Frustum.h
    |   |-- gameengine\SceneGraph\SG_Node.cpp
    |   |-- gameengine\SceneGraph\SG_Node.h
    |   |-- gameengine\SceneGraph\SG_ParentRelation.h
    |   `-- gameengine\SceneGraph\SG_QList.h
    `-- gameengine\VideoTexture
        |-- gameengine\VideoTexture\CMakeLists.txt
        |-- gameengine\VideoTexture\Common.h
        |-- gameengine\VideoTexture\DeckLink.cpp
        |-- gameengine\VideoTexture\DeckLink.h
        |-- gameengine\VideoTexture\Exception.cpp
        |-- gameengine\VideoTexture\Exception.h
        |-- gameengine\VideoTexture\FilterBase.cpp
        |-- gameengine\VideoTexture\FilterBase.h
        |-- gameengine\VideoTexture\FilterBlueScreen.cpp
        |-- gameengine\VideoTexture\FilterBlueScreen.h
        |-- gameengine\VideoTexture\FilterColor.cpp
        |-- gameengine\VideoTexture\FilterColor.h
        |-- gameengine\VideoTexture\FilterNormal.cpp
        |-- gameengine\VideoTexture\FilterNormal.h
        |-- gameengine\VideoTexture\FilterSource.cpp
        |-- gameengine\VideoTexture\FilterSource.h
        |-- gameengine\VideoTexture\ImageBase.cpp
        |-- gameengine\VideoTexture\ImageBase.h
        |-- gameengine\VideoTexture\ImageBuff.cpp
        |-- gameengine\VideoTexture\ImageBuff.h
        |-- gameengine\VideoTexture\ImageMix.cpp
        |-- gameengine\VideoTexture\ImageMix.h
        |-- gameengine\VideoTexture\ImageRender.cpp
        |-- gameengine\VideoTexture\ImageRender.h
        |-- gameengine\VideoTexture\ImageViewport.cpp
        |-- gameengine\VideoTexture\ImageViewport.h
        |-- gameengine\VideoTexture\PyTypeList.cpp
        |-- gameengine\VideoTexture\PyTypeList.h
        |-- gameengine\VideoTexture\Texture.cpp
        |-- gameengine\VideoTexture\Texture.h
        |-- gameengine\VideoTexture\VideoBase.cpp
        |-- gameengine\VideoTexture\VideoBase.h
        |-- gameengine\VideoTexture\VideoDeckLink.cpp
        |-- gameengine\VideoTexture\VideoDeckLink.h
        |-- gameengine\VideoTexture\VideoFFmpeg.cpp
        |-- gameengine\VideoTexture\VideoFFmpeg.h
        `-- gameengine\VideoTexture\blendVideoTex.cpp

## 🐥 Blender Code Layout

* Blender for Developers
  * Bledner Code Layout https://www.blender.org/bf/codelayout.jpg
  * Bledner Code Layout of modules https://download.blender.org/ftp/ideasman42/pics/code_layout.webp
  * EEVEE Render Passes https://wiki.blender.org/wiki/Source/EEVEE_%26_Viewport/Draw_Engines/EEVEE/Render_passes
  * Blender source code directories https://wiki.blender.org/wiki/Source/File_Structure
  * Node(bpy_struct) — Blender Python API https://docs.blender.org/api/current/bpy.types.Node.html

Blender Code Layout 2.83 version

    🟡 Modules only call lower level code
    🔵 Modules call each other, and lower level code

    <-------------------------- Application startup --------------------------->
    blender/source/                                                          🔵

                +===================+             +================+
                | creator           |             | blenderplayer  |
                | Blender's main()  |             | player main()  |
                +===================+             +================+

    <---------------- Editor definitions, drawing, interaction ---------------->
    blender/source/blender/editors/                                          🔵

    +===============+  +==============+  +=================+  +================+
    | space_action  |  | space_view3d |  | space_buttons   |  | space_console  |
    | action editor |  | 3d vieweport |  | property editor |  | python console |
    +===============+  +==============+  +=================+  +================+

    +==============+  +==============+  +=================+  +==================+
    | space_image  |  | space_info   |  | space_logic     |  | space_nla        |
    | image editor |  | top menu bar |  | game logic edit |  | non-linear anim. |
    +==============+  +==============+  +=================+  +==================+

    +==============+  +=============+  +==============+  +=================+
    | space_script |  | space_sound |  | space_text   |  | space_sequencer |
    | deprecated?  |  | depricated? |  | text editor  |  | video editor    |
    +==============+  +=============+  +==============+  +=================+

    +==============+  +=============+  +=====================+  +================+
    | space_file   |  | space_node  |  | space_graph         |  | space_outliner |
    | file browser |  | node editor |  | function curve edit |  | outliner       |
    +==============+  +=============+  +=====================+  +================+

    +==============+  +==================+
    | space_timer  |  | space_userpref   |
    | time line    |  | user preferences |
    +==============+  +==================+

    <---------------------------- Editor utilities ---------------------------->
    blender/source/blender/editors/                                          🟡

    +==================+  +=====================+  +===============+
    | util             |  | screen              |  | interface     |
    | undo system      |  | generall screen api |  | buttons/menus |
    +==================+  +=====================+  +===============+

    +==================+  +=====================+
    | datafiles        |  | space_api           |
    | icons, splash,.. |  | generic editor api  |
    +==================+  +=====================+

    <---------------------------------- Tools --------------------------------->
    blender/source/blender/editors/                                          🟡

    +============+  +===============+  +===========+  +===================+
    | animation  |  | armature      |  | curve     |  | gpencil           |
    | fcurve ops |  | armature/pose |  | curve ops |  | grease pencil ops |
    +============+  +===============+  +===========+  +===================+

    +==========+  +===============+  +==================+  +==================+
    | mesh     |  | metaball      |  | object           |  | physics          |
    | mesh ops |  | meta ball ops |  | object operators |  | particles, fluid |
    +==========+  +===============+  +==================+  +==================+

    +==============+  +=================+  +===============+
    | sculpt_paint |  | sound           |  | transform     |
    | painting ops |  | sound operators |  | transform ops |
    +==============+  +=================+  +===============+

    +===================+  +===================+       +=====================+
    | uvedit            |  | render            |       | include             |
    | uv edit operators |  | editor render api |       | all editor includes |
    +===================+  +===================+       +=====================+

    <-------------- Windows, events, operators, core interaction -------------->
    blender/source/blender/                                                  🔵

                        +===============================+
                        | windowsmanager                |
                        | general window/event handling |
                        +===============================+

    <-------------------------- Game & Render engine -------------------------->
    blender/source/                    blender/source/blender                🔵

                +==============+               +=================+
                | gameengine   |               | render          |
                | game engine  |               | render pipeline |
                +==============+               +=================+

    <-------------------------- General Blender APIs -------------------------->
    blender/source/blender/                                                  🟡

    +==================+      +==================+     +=======================+
    | makesdna         |      | makesrna         |     | blenkernel            |
    | Blender data def |      | Blender data API |     | generic data funcions |
    +==================+      +==================+     +=======================+

    +===================+     +==================+     +===================+
    | avi               |     | blenfont         |     | gpu               |
    | movie file in/out |     | interface fonts  |     | opengl functions  |
    +===================+     +==================+     +===================+

    +===================+     +==================+     +===================+
    | imbuf             |     | python           |     | collada           |
    | blender image lib |     | Blender py API   |     | blender api level |
    +===================+     +==================+     +===================+

    +===================+     +==================+     +===================+
    | blenloader        |     | gpu              |     | modifiers         |
    | .blend files      |     | opengl functions |     | for mesh/curve    |
    +===================+     +==================+     +===================+

    +================+
    | nodes          |
    | compo/mat/tex  |
    +================+


    <----------------- Utility Libraries (in own development) ----------------->
    blender/intern/                                                          🔵

    +===============+      +===============+       +===================+
    | audaspace     |      | boolop        |       | bsp               |
    | sound library |      | mesh booleans |       | spatial partition |
    +===============+      +===============+       +===================+

        +==================+     +==================+    +===================+
        | container        |     | decimation       |    | elbeem            |
        | cpp hash support |     | mesh reduction   |    | fluid simulation  |
        +==================+     +==================+    +===================+

    +================+     +==================+    +===================+
    | ghost          |     | guardedalloc     |    | iksolver          |
    | windows/events |     | secure mem alloc |    | inverse kinemat.  |
    +================+     +==================+    +===================+

        +==================+     +==================+    +===================+
        | itasc            |     | memtuil          |    | mikktspace        |
        | IK controllers   |     | memory cache     |    | nomals & tangents |
        +==================+     +==================+    +===================+

    +================+     +==================+    +===================+
    | moto           |     | opennl           |    | smoke             |
    | motion for GE  |     | numerical lib    |    | smoke simulation  |
    +================+     +==================+    +===================+

        +==================+
        | string           |
        | string utils     |
        +==================+

    <-------------- Utility Libraries (from external development) ------------->
    blender/extern/                                                          🔵

    +================+         +===================+    +==================+
    | eigen2         |         | glew              |    | eltopo           |
    | Math functions |         | OpenGL versioning |    | surface tracking |
    +================+         +===================+    +==================+

    +==================+       +==================+     +==================+
    | binreloc         |       | libredcode       |     | lzma             |
    | executable paths |       | Red image format |     | data compression |
    +==================+       +==================+     +==================+

    +======================+    +===============+       +==================+
    | bullet2              |    | libopenjpg    |       | lzo              |
    | Physics & collisions |    | jpeg 2000 lib |       | data compression |
    +======================+    +===============+       +==================+

    <----------- Pre-compiled Libraries (in svn, or require install) ---------->
    lib/                                                                     🔵

    +===============+ +===================+ +==============+ +=================+
    | ffmpeg        | | fftw3             | | freetype     | | gettext         |
    | movie library | | fast fourrier lib | | font library | | translation lib |
    +===============+ +===================+ +==============+ +=================+

    +===============+ +=================+   +===============+ +================+
    | openal        | |  opencollada    |   | openexr       | | png            |
    | audio library | |  3d file format |   | ILM image lib | | image lib      |
    +===============+ +=================+   +===============+ +================+

    +===============+ +=================+   +===============+ +================+
    | sdl           | |  sndfile        |   | tiff          | | jpeg           |
    | used for audio| |  audio file lib |   | image library | | jpeg image lib |
    +===============+ +=================+   +===============+ +================+

    +===================+                   +================+
    | python            |                   | samplerate     |
    | scripting library |                   | audio lib      |
    +===================+                   +================+

    <---------------------------- Operating System ---------------------------->

       +==================+  +============+  +=============+  +==========+
       | openGL           |  | Standard C |  | C++ and STL |  | Win/X11/ |
       | graphics library |  |            |  |             |  | Concoa   |
       +==================+  +============+  +=============+  +==========+



# 🥚 UPBGE Manual Toc

UPBGE Current Manual https://upbge.org/#/documentation/docs/latest/manual/index.html


Welcome to UPBGE's Documentation! Here you will find definitions of the
available tools and features in UPBGE, step-by-step tutorials to certain
tasks and a lot examples for game logic programming with detailed information.

Visit the [UPBGE's website](https://upbge.org/) or
[contribute to this manual](https://github.com/UPBGE/UPBGE-Docs).

Also, if you want to read the whole manual offline you can
[download from this link](https://upbge.org/docs/latest/manual/UPBGE_Manual.zip).


- Introduction
  manual/introduction/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/index.html
  - Briefing
    manual/introduction/briefing.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/briefing.html
  - A Deeper Look
    manual/introduction/deeper_look.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/deeper_look.html
  - Compatibility Notes
    manual/introduction/compatibility_notes.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/compatibility_notes.html

- Tutorials
  manual/tutorials/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/index.html
  - Getting Started
    manual/tutorials/getting_started/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/getting_started/index.html
  - Introducing Logic Bricks
    manual/tutorials/introducing_logic_bricks/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_logic_bricks/index.html
  - Introducing Logic Nodes
    manual/tutorials/introducing_logic_nodes/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_logic_nodes/index.html
  - Introducing Python
    manual/tutorials/introducing_python/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_python/index.html
  - Introducing Python Components
    manual/tutorials/introducing_python_components/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_python_components/index.html

- Editors
  manual/editors/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/editors/index.html
  - Properties Editor
    manual/editors/properties/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/editors/properties/index.html
  - Logic Bricks Editor
    manual/editors/logic/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/editors/logic/index.html
  - Text Editor
    manual/editors/text/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/editors/text/index.html

- Logic Bricks
  manual/logic/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/logic/index.html
  - Introduction
    manual/logic/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/introduction.html
  - Sensors
    manual/logic/sensors/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/sensors/index.html
  - Controllers
    manual/logic/controllers/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/controllers/index.html
  - Actuators
    manual/logic/actuators/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/actuators/index.html
  - Properties
    manual/logic/properties.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/properties.html
  - States
    manual/logic/states.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic/states.html

- Logic Nodes
  manual/logic_nodes/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/index.html
  - Introduction
    manual/logic_nodes/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/introduction.html
  - General Nodes
    manual/logic_nodes/basic/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/basic/index.html
  - Scene Manipulation Nodes
    manual/logic_nodes/scene/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/scene/index.html
  - Logic & Math Nodes
    manual/logic_nodes/logic_math/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/logic_math/index.html
  - Data Nodes
    manual/logic_nodes/data/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/data/index.html

- Python Scripting
  manual/python/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/python/index.html
  - Introduction to Scripting
    manual/python/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/python/introduction.html
  - Python and the Game Engine
    manual/python/python_game_engine.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/python/python_game_engine.html
  - Understanding Inheritance And Composition In Game Scripting
    understanding_inheritance_and_composition_in_game_scripting.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/python/understanding_inheritance_and_composition_in_game_scripting.html

- Python Components
  manual/python_components/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/index.html
  - Introduction
    manual/python_components/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/introduction.html
  - Getting Started
    manual/python_components/getting_started/index.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/getting_started/index.html

- Physics
  manual/physics/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/physics/index.html
  - Introduction
    manual/physics/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/physics/introduction.html

- Datablocks
  manual/datablocks/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/index.html
  - Armature
    manual/datablocks/armature.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/armature.html
  - Camera
    manual/datablocks/camera.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/camera.html
  - Collection
    manual/datablocks/collection.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/collection.html
  - Empty
    manual/datablocks/empty.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/empty.html
  - Light
    manual/datablocks/light.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/light.html
  - Mesh
    manual/datablocks/mesh.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/mesh.html
  - Object
    manual/datablocks/object.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/object.html
  - Text
    manual/datablocks/text.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/text.html
  - Image
    manual/datablocks/image.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/image.html
  - Library
    manual/datablocks/library.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/library.html
  - Sound
    manual/datablocks/sound.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/sound.html
  - Action
    manual/datablocks/action.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/action.html
  - Material
    manual/datablocks/material.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/material.html
  - Scene
    manual/datablocks/scene.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/scene.html
  - Texture
    manual/datablocks/texture.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/texture.html
  - World
    manual/datablocks/world.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/world.html

- Deployment
  manual/release/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/release/index.html
  - Licensing of Games
    manual/release/licensing.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/release/licensing.html
  - Performance Considerations
    manual/release/performance.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/release/performance.html
  - Standalone Player
    manual/release/blender_player.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/release/blender_player.html
  - Release Procedure
    manual/release/release_procedure.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/release/release_procedure.html

- Tools
  manual/tools/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/tools/index.html
  - API Stubs
    manual/tools/api_stubs.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/tools/api_stubs.html

- About
  manual/about/index.rst
  https://upbge.org/#/documentation/docs/latest/manual/manual/about/index.html
  - Introduction to the UPBGE Manual
    manual/about/introduction.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/about/introduction.html
  - License
    manual/about/license.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/about/license.html
  - What’s New
    manual/about/whats_new.rst
    https://upbge.org/#/documentation/docs/latest/manual/manual/about/whats_new.html



## 🎨 Introduction
                                                                **Introduction**
manual/introduction/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/index.html

This section gives an overview of UPBGE's capabilities, features, history and
some differences between it and BGE, but not directly comparing UPBGE to BGE.

   briefing
   deeper_look
   compatibility_notes

### ✨ Briefing
                                                                    **Briefing**
manual/introduction/briefing.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/briefing.html


An Origin Story


It was the mid-1990s, and the personal computer was taking off faster than
anyone had anticipated. With it, there arose the advent of animated graphics
and 3D games.


Blender Begins

It was at this ripe time that Blender came into being. Blender started off as
an in-house 3D animation software created by a small Dutch animation studio
called NeoGeo. Perhaps it was because of the lack of a cheap and capable substitute;
perhaps it was due to sheer ambition, NeoGeo decided to create its own animation
software from scratch rather than using what was available. The chief programmer
of Blender was *Ton Roosendaal*, who was responsible for writing a large part of
the core Blender functionalities.

For the next few years, Blender remained the internal tool of a very successful
animation studio. The software became so good that in 1998, Blender was made
available to the public. A new company, Not a Number (NaN), was formed to oversee
the development and distribution of Blender. Largely via the Internet, Blender
was distributed as two separate versions: a free version with limited functionality
and a version that was not free (called Blender Publisher) that had a few
additional features. Being the only complete 3D animation and game creation
package available for free at a time when computer graphics was still in its
infancy, Blender started gaining popularity, and many online communities
developed that allowed artists to share knowledge and their work.

   https://upbge.org/docs/latest/manual/_images/Fig01-01.jpg


The Dark Nights

Alas, with the collapse of the Internet bubble and some other unfortunate
circumstances, Not a Number (NaN) filed for bankruptcy in 2002. Since Blender
was the intellectual property of the company at the time, dissolving the company
meant an uncertain future for Blender. The Blender community did not want to see
their favorite software go down with NaN. So a deal was struck in which NaN would
release the source code of Blender to the public for a payment of €100,000.
A "Free the Blender" fundraising campaign was started. The online community
responded very generously. A few months later, enough money was collected to
convince NaN to re-release Blender as an open source software to the newly
established Blender Foundation. The foundation was created specifically to manage
the now open source Blender. Ton Roosendaal, the original creator of Blender,
heads the foundation.


Blender Rises

Located in beautiful Amsterdam, the Blender Foundation now oversees the
development, distribution, and marketing of Blender. But because of the
open source nature of the software, its development has been driven largely
by volunteer contributors from across the world.

The Blender Foundation also created the Blender Institute, an animation and
game studio that focuses on movie and game development using Blender.
The Institute produced the movies **Elephants Dream**, **Big Buck Bunny**,
**Sintel**, **Tears of Steel**, **Cosmos Laundromat** and the game **Yo, Frankie!**.
These projects serve two main goals: The production process is an opportunity
to improve Blender in a real studio environment, and the end result also serves
as an advertisement for the software itself.

   https://upbge.org/docs/latest/manual/_images/Fig01-02.jpg

Then came Blender 2.5, which changed much of how Blender looked and behaved.
This refactoring, as it was called, took years of planning and coding.
Blender 2.5 marks a significant milestone in the history of Blender.
For users coming from the Blender 2.4x series, the entire interface looks
radically different: menus items are rearranged, keyboard shortcuts are altered,
even the default color scheme has changed from a boring gray to a
slightly less boring shade of gray.  Blender 2.5 is designed to be more intuitive,
faster to use, and easier to learn than its predecessor.

Blender uses the Python programming language for scripting. With Python,
you can customize the behavior of Blender, extend its functionality, and,
more importantly, control the game engine. Knowing how to program is not
a requirement for using Blender, but knowing Python will make you a far more
capable game-maker.

https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-03.png
Blender Monthly SVN Commits

The year 2012 marked the tenth anniversary of Blender going open source.
During these 10 years of open source development, more than 150 people
have contributed something to the source code, totaling 50,000 contributions
("commits," in GIT techno-jargon), averaging nearly 30 commits every day over
the past year. Needless to say, the program has improved much over the years,
and it shows no sign of slowing down when it reaches almost to the twentyth
anniversary. The image below shows the Blender development statistics gathered
from the official GIT repository including Blender trunk all its branches.


Blender vs UPBGE

You already know that Blender is an open source 3D software that is capable of
modeling, animation, rendering, compositing, and producing a game all in
one package. Let's analyze the term "open source 3D software": "Open source 3D
software" means that Blender's source code is available for anyone to access
and modify. The most obvious advantage to open source software is that as
an artist, you can use Blender for free, for non-commercial as well as
commercial work. As a developer, you are allowed to modify Blender in any way
you want to suit your specific needs. But open source does not mean that anyone
can make changes to the Blender code without approval. Blender is licensed under
the GNU Public License v2 (GPL2). In a nutshell, it means that Blender can be
copied, modified, and if re-shared, the changes in the source code have to be
available and licensed in an equivalent license.

The **Uchronia Project Blender Game Engine** (UPBGE) is a
[Blender's](https://www.blender.org/) builtin tool derived from Blender
Foundation's [Blender Game Engine](https://en.wikipedia.org/wiki/Blender_Game_Engine/)
for real-time projects, from architectural visualizations and simulations to games.

Originally created by Tristan Porteries as a fork from the Blender Game Engine
with the purpose to develop the Blender Game Engine in a faster way,
became indepent with the Blender Foundation's announcement of BGE's removal
when it reached to Blender 2.80. With this independency,
the UPBGE's developers (former BGE developers) have freedom to change and
add features that could not be changed before (because the possibility of
an official Blender merge, now discarded).

Basically, due to its periodic synchronization with Blender source code
(almost daily), UPBGE, as its acronym suggests, has become a Blender from
a parallel universe in which the game engine was never removed.

In any case, UPBGE is kriptonian for "hope". Who knows if in the future that
parallel universe merges with our universe and we may add another line entitled
"Justice League" to this beautiful story :-).

Until that time comes, UPBGE has adopted the new physically based and
state-of-the-art real-time render engine, Eevee. This way all you can do in
Blender/UPBGE editor you can translate it to the Game Engine. A truly WYSIWYG
(What You See Is What You Get) Game Engine, the strongest UPBGE feature.

Of course, software exists to serve the users - that's you. Every time a
Blender and/or UPBGE user creates a piece of artwork, it justifies, even if
just a little, the enormous amount of time that went into creating the software.
We hope that by picking up this manual, you are on your way to creating something
amazing to share with the world.


Features


Compared to some of the commercial game engines available today, the Uchronia
Project Blender Game Engine (UPBGE or BGE or GE for short) is relatively simple.
Is that a bad thing? Not necessarily. A simple platform like UPBGE is very easy
to learn, and yet it's flexible enough to do a lot.

UPBGE have lots of [new features](https://github.com/UPBGE/upbge/wiki/Release-notes),
improvements and bugs fixed. Some features that UPBGE supports are:

- Realtime advanced physics powered by
   `Bullet <https://github.com/bulletphysics/bullet3>`__,
   including rigid bodies, obstacle simulation and path finding.
- Fully integrated audio engine powered by
   `OpenAL <https://www.openal.org/>`__ and
   `Audaspace <https://github.com/neXyon/audaspace/>`__,
   supporting 3D sound and sound effects.
- Two easy and straightforward visual logic systems, Logic Bricks and Logic Nodes.
- Powerful `Python <https://www.python.org/>`__ language bindings,
   allowing support to even more libraries through the use of
   `PyPI <https://pypi.org/>`__.
- Development process entirely inside Blender, without needing to import/export
   assets, although most used formats are supported through import/export addons
   (FBX, Collada, glTF, obj, stl, etc).
- Execution of game in Blender's viewport (for fast previewing) or on an
   standalone executable.
- Rendering powered by state of art Blender's EEVEE engine including PBR shading,
   SSR reflections, GTAO ambient occlusion, Bloom, Soft and contact shadows,
   Light probes for global ilumination, Volumetrics, etc.
- Blender's [Linked Libraries](https://docs.blender.org/manual/en/dev/data_system/linked_libraries.html)
   feature, allowing to organize projects in multiple blend files.
- GLSL custom shaders for visual effects and post processing.


Development


UPBGE is maintained by a group of developers in their spare time and its
community. You can contribute to UPBGE if you code in C++ or Python:
just [open a pull request](https://github.com/UPBGE/upbge/pulls),
submit your changes and wait for the reviewers. Also, even if you don't code,
you can contribute by submiting bug reports, feature requests and participating
discussions [on issues](https://github.com/UPBGE/upbge/issues).

### ✨ A Deeper Look
                                                               **A Deeper Look**
manual/introduction/deeper_look.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/deeper_look.html


Use Cases

UPBGE allows you to create real-time interactive 3D applications or simulations.
This allows you to create almost any type of interactive project, like architectural
presentations, virtual prototypes for robotic projects, physics simulation projects,
simple and complex games, and much more.

Much can be achieved through UPBGE by default, as it provides a blank canvas
full of features to be used, and even more can be acomplished by extending
these features according to your needs.

For example, if you're working with robotics and needs to send or receive commands
through a USB port, you can install the [PySerial](https://pypi.org/project/pyserial/)
Python module for use with UPBGE. Or if you need a graphical feature that can't be
acomplished through the default UPBGE's capabilities, you can write your own OpenGL
shaders. The list goes on, and there's a big chance that the project you aim to
can be brought to life with UPBGE, using its features and abilities to be extended.


Sample Games

Here are some examples of games made with BGE/UPBGE:

.. youtube:: yRBDkQbGpdg

``Game Name / Creator Name:`` Krum - Battle Arena by Haidme produced with BGE/UPBGE.

.. youtube:: ujLuhiCcwA8

``Game Name / Creator Name:`` Tomato Jones 2 by Haidme produced with BGE/UPBGE.

.. youtube:: SQz3O8VFdOo

``Game Name / Creator Name:`` Highlands Test by Atomic Skill produced with UPBGE 0.2.5.

.. youtube:: FJfmLktYi7o

``Game Name / Creator Name:`` The Future's End by Mark Telles produced with UPBGE 0.2.5.

.. youtube:: 3krdf9xRgw4

``Game Name / Creator Name:`` Spaceship Test by Atomic Skill produced with UPBGE 0.3.

.. youtube:: Ji9NO_gtvQU

``Game Name / Creator Name:`` GTA-like prototype by ThePajlok Studios produced with UPBGE 0.3.


Under The Hood

UPBGE oversees a game loop, which processes logic, sound, physics and rendering
simulations in sequential order. The engine is written in C++.

By default, the user has access to a powerful and high-level visual logic
programming interface. The visual programming in UPBGE provides deep interaction
with the simulation, and its functionality can be extended through Python scripting.
It is designed to abstract the complex engine features into a simple user interface,
which does not require experience with Programming.

UPBGE is closely integrated with the existing code base of Blender, which permits
quick transitions between the traditional modeling feature set and game-specific
functionality provided by the program. In this sense, the UPBGE can be efficiently
used in all areas of game design, from prototyping to final release.

UPBGE can simulate content within Blender, however it also includes the ability
to export a binary run-time to Linux, MacOS, and MS-Windows.

There are a number of powerful libraries the UPBGE takes advantage of:

- [`Audaspace`](https://audaspace.github.io/)
   A sound library for control of audio. Uses OpenAL or SDL.
- [`Bullet`](http://bulletphysics.org)
   A physics engine featuring 3D collision detection, soft body dynamics and rigid body dynamics.
- [`Detour`](https://github.com/recastnavigation/recastnavigation)
   A pathfinding and spatial reasoning toolkit.
- [`Recast`](https://github.com/recastnavigation/recastnavigation)
   A state of the art navigation mesh construction tool set for games.


Project Development Process

When creating a game or simulation in UPBGE, there are four essential steps:

#. Create visual elements that can be rendered. Usually, 3D models.
#. Enable interaction within the scene using logic to enable custom behavior
   and determine how it is invoked.
#. Create one (or more) camera to give a frustum from which to render the scene,
   and modify the parameters to support the environment in which the game will be
   displayed, such as VR rendering.
#. Launch the game, using the internal player or exporting a runtime to the
   appropriate platform.


### ✨ Compatibility Notes
                                                         **Compatibility Notes**
manual/introduction/compatibility_notes.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/introduction/compatibility_notes.html


UPBGE VS Blender

UPBGE is fully integrated into Blender environment, but it doesn't mean it
supports all the features that Blender provides. Here's some compatibility info
about various features present in Blender relative to UPBGE.


Object types supported

- `datablock-armature`
- `datablock-camera`
- `datablock-collection`
- `datablock-empty`
- `datablock-light`
- `datablock-mesh`
- `datablock-object`
- `datablock-text`

.. note::
    Any other object type (like Curve, Speaker, Force Field, etc) will not be
    rendered into game. A Curve Object can be converted to `datablock-mesh` though.

Data-blocks supported

- `datablock-action`
- `datablock-armature`
- `datablock-camera`
- `datablock-collection`
- `datablock-image`
- `datablock-light`
- `datablock-library`
- `datablock-material`
- `datablock-mesh`
- `datablock-object`
- `datablock-scene`
- Shapekey (along with `datablock-action`, otherwise unused)
- `datablock-sound`
- `datablock-text`
- `datablock-texture`
- `datablock-world`
- Particle (partially supported)

.. note::
    Any other data-block type (like Line Styles, Brushes, etc) have no use or
    will not be rendered into game.


UPBGE VS BGE

BGE also have some incompatibilities with UPBGE. UPBGE can partially load and
execute games made in BGE, but a game made in UPBGE can't be executed in BGE,
resulting in several issues like:

- Logic can't run most of the times.
- Materials get messed up.
- UPBGE do not support Multitexture material mode anymore. Set to GLSL when
  in vanilla BGE.
- Sometimes physics simulation get messed up.

Along with this compatibility with BGE, UPBGE comes with features not supported
by BGE, like Modifiers applied automatically at game start (instead of discarded,
as in BGE).


## 🎨 Tutorials
                                                                   **Tutorials**
manual/tutorials/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/index.html

### ✨ Getting Started
                                                             **Getting Started**
manual/tutorials/getting_started/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/getting_started/index.html

This tutorial aims to show the basic concepts of UPBGE, from the game loop
behavior to the most common operations used in game development. This will
give you important notions on how UPBGE works and how are its procedures.

Keep in mind that the focus of this tutorial are UPBGE and its game engine
behavior, although basic Blender navigation (like selection, shortcuts, etc)
and panels will be explained.

   3D_basic_concepts
   game_basic_concepts
   blender_basic

=================
3D Basic Concepts
=================


3D Basics


If you haven't used any 3D application before, the terms modeling, animation,
and rendering might be foreign to you. So before you go off to create
the spectacular game that you always wanted to make, let's have a quick refresher
on the basics of computer graphics. You don't have to endure the boring section
below if you are already know what RGB stands for and the difference between
Cartesian and Gaussian.

The knowledge in this section is universal and applies to all other 3D
applications. So even if you are coming from a different application,
the same concepts drive all of them.


Coordinate System

   https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-05.png


We live in a three-dimensional world that has width, height, and depth.
So to represent anything that resembles real life as a virtual world inside a
computer, we need to think and work in three dimensions. The most common system
used is called the Cartesian coordinate system, where the three dimensions
are represented by X, Y, and Z, laid out as intersecting planes. Where the
three axes meet is called the _origin_. You can think of the origin as
the center of your digital universe. A single position in space is represented
by a set of numbers that corresponds to its position from the origin:
thus (2, -4, 8) is a point in space that is 2 units from the origin along the X axis, 4 units from the origin along the -Y axis, and 8 units up in the Z direction.


Points, Edges, Triangles, and Meshes


Although we can define a position in space using the XYZ coordinates, a single
point (or a "vertex," as it's more commonly known in computer graphics) is not
terribly useful; after all, you can't see a dot that is infinitesimally small.
But you can join this vertex with another vertex to form a line
(also known as an "edge"). An edge by itself still wouldn't be very visible,
so you create another vertex and join all three vertices together with lines
and fill in the middle. Suddenly, something far more interesting is created
a triangle (also known as a "face")! By linking multiple faces together,
you can create any shape, the result of which is called a "mesh" or "model."
Figure below shows how a mesh can be broken down into faces, then edges,
and ultimately, as vertices.


   https://upbge.org/docs/latest/manual/_images/Fig01-06.jpg
   Teapot, cube, face, edge and vertex.

Why is the triangle so important? Turns out, modern computer graphics use the
triangle as the basic building block for almost any shape. A rectangular plane
(also known as a _quadrangle_, or more commonly a _quad_) is simply two triangles
arranged side by side. A cube is simply six squares put together.
Even a sphere is just made of tiny facelets arranged into a ball shape.

   https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-07.jpg
   :alt: The same cylinder cap can be made up of triangles, quads, or an n-gon.

In Blender, a mesh can be made from a combination of triangles, quads, or n-gons.
The benefit of n-gons is their ability to retain a clean topology while modeling.
Without n-gons, certain areas of a model (such as a window on a wall) would require
a higher number of triangles or quads to approximate, as shown below.
While n-gons make modeling easier in some cases, Blender still converts them
to triangles when you start the game.

The process of creating a mesh by rearranging vertices, edges, and faces
is called **modeling**. Blender has many tools that help artists define the
geometry they want.

It is worth noting that unlike the real world, polygonal models do not have
volumes. They are just a shell made of interconnected faces that take
the shape of the object, but the inside of the object is always "hollow."

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-08.jpg
   :width: 50 %
   :alt: Surface normals are displayed as cyan lines protruding from the faces.
   :align: right

Another concept that a modeler will likely encounter is surface normals,
or "normals" for short. Normal is a property of each face that indicates
the direction a polygon is facing. Because normals are used for shading
computation of the surface, ideally all the normals for a mesh should be
pointed "outward". Wrongly oriented normals can cause the mesh to show up
as black or invisible. Fortunately, there is a Make Normals Consistent function
in Blender that can usually resolve the issue. Figure 1.8 shows how normals are
presented in Blender.

.. topic:: **Beyond Polygons**

   Technically, there are other approaches to computer graphics that do not
   rely on triangles or polygons, such as NURBS (Non-uniform rational B-spline)
   and voxel (short for VOlumetric piXEL). But polygon modeling and rendering is
   by far the most common, and it is the only supported method in the game engine.


Basic Transforms


The three basic transforms that you should be familiar with are:

* **Translation:** The moving of an object in any direction, without rotating it.
* **Scaling:** The resizing of an object around a point.
* **Rotation:** The rotating of an object around a point.

These three are the most common manipulations you will encounter. They are
illustrated below.

.. figure::  https://upbge.org/docs/latest/manual/_images/Fig01-09.jpg

   Translation, scaling, and rotation.


Materials and Textures


Using polygons, you can define the shape of a mesh. To alter the color and
appearance of it, you need to apply materials to the object. Material controls
the color, shininess, bumpiness, and even transparency of the object.
These variables ultimately all serve to add details to the object.

Often, changing the color is not enough to make a surface look realistic.
This is where textures come in. Texturing is a common technique used to add color
and detail to a mesh by wrapping the mesh with an image, like a decal.
Imagine a toy globe: if you carefully peel off the paper map that is glued onto
the plastic ball and lay it out flat on the table, that map would be the texture,
and the plastic ball would be the mesh. The projection of the 2D image onto a
3D mesh is called **texture mapping**. Texture mapping can be an automatic process,
using one of the predefined projections, or a manual process, which uses a UV
layout to map the 2D image onto the 3D mesh. Figure 1.10 illustrates how an image
is mapped onto a model.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-10.jpg

   Meshes with texture applied.

Traditionally, a texture changes the color of a surface. But that's not all
it can do: textures can also be used to alter other properties of the
surface such as its transparency, reflectivity, and even bumpiness to create
the illusion of a much more detailed surface.

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-11.jpg
   :width: 50 %
   :alt: From left to right: diffuse map, normal map, and specular map.
   :align: right

A diffuse map controls the base color of the surface. A normal map controls the
surface normal of an object, creating a bumpy effect by changing the way the
light is reflected off the object. A specular map controls the specular reflection
of an object, making it look shiny in certain places and dull in others. A texture
map can also have transparent pixels, rendering part of the object transparent.

Generally, textures are image files. But there are also other ways to texture
a surface, such as using a procedural texture. Procedural texture
differs from an image in that it's generated by an algorithm in real time,
rather than from a pre-made image file.


Lights


Everything you see is the result of light hitting your eyes-without lights,
the world would be pitch black. Likewise, light is just as important in a
virtual world. With light comes shadow as well. Shadow might not be something
that you think about every day, but the interplay of shadow and light makes
a huge difference in how the scene is presented.

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-12.png
   :width: 50 %
   :alt: From left: Lamp, Sun, Spot lamp, Hemi lamp, and Area lamp.
   :align: right

In most 3D applications, there are several different types of light available
to the artist; each type has its advantages and disadvantages.
For example, a Spot lamp approximates a lamp with a conical influence; a sun lamp
approximates a light source from infinitely far away. Lamps in Blender are
treated like regular objects: they can be positioned and rotated just like any
other object. Figure 1.12 shows how different lamps look in Blender.

Think of lighting as more than something that makes your scene visible.
Good lighting can enhance the purpose of the scene by highlighting
details while hiding irrelevant areas in shadow. Skillful placement of
lighting also adds drama and realism to the scene, making an otherwise
boring scene look visually exciting.


Camera


.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-13.png
   :width: 50 %
   :alt: Camera objects
   :align: right

When you are creating a 3D scene, you are looking at the virtual world from
an omniscient view. In this mode, you can view and edit the world
from any angle just like a movie director walking around a set in order
to adjust things. Once the game starts, the player must view the game
through a predetermined camera. Note that a predetermined camera does not mean
the camera is fixed; almost all games have a camera that reacts to a player's input.
In an action game, the camera tends to follow the character from behind;
in a strategy game, the camera might be hovering high above, looking down;
in a platformer, the camera is usually looking at the scene from the side.

A camera is also treated as a regular object in Blender, so you can manipulate
its location and orientation just as you can with any other object.


.. topic:: **Drawing and Composition for Visual Storytellers**

   Speaking of lights and cameras, this is the part where we point out the
   wonderful book by Marcos Mateu-Mestre called Framed Ink. The book uses tons of
   beautiful drawings to illustrate the many key principles in visual storytelling.


Animation


In this context, _animation_ refers to the technique of making things change
over time. For example, animation can involve moving an object, deforming it,
or changing its color. To set up an animation, you create "keyframes," which are
snapshots in time that store specific values pertaining to the animation.
The software can then automatically interpolate in between those values to
create a smooth transition. The image below shows Blender's Dopesheet Editor.
The Dopesheet allows you to see the various properties that change during
an animation: the horizontal axis represents time; the vertical axis shows the
various properties, such as location or rotation that are keyframed.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-14.png

   Dopesheet Editor: each diamond shape is a keyframe.

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-15.png
   :width: 50 %
   :alt: LocRotScale animation
   :align: right

The easiest way to animate is to alter the location, rotation, and scaling of
an object over time. For example, by altering these variables, you can
realistically animate the movement of a bouncing ball. Keep in mind that
the curves represent the value of the channels (in this case xyz location)
of the ball, not the actual motion path of the ball itself.

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-16.png
   :width: 33 %
   :alt: Armature animation
   :align: left

To animate something more complicated, such as a human, it's not enough to
just move, rotate, and scale the object as a whole.
This is where armatures come in. Armatures are skeletons that can be "inserted"
into a model to control the model's deformation. Using this system,
you can create complex yet organic-looking animations.

.. image:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-17.jpg
   :width: 50 %
   :alt: Shape keys animation.
   :align: right

A third way to animate is using shape keys. Shape keys are snapshots of
the mesh in different shapes. They are often used to animate nuanced changes
that cannot be otherwise easily animated with armatures.

.. figure:: https://upbge.org/#/documentation/docs/latest/manual/_images/Fig01-18.jpg
   :width: 33 %
   :alt: Procedural physics-based motion.
   :align: left

Finally, keep in mind that making objects move doesn't always have to be
a manual process. You can also make objects move by using the physics engine.


===================
Game Basic Concepts
===================


Game


So far, we have talked about 3D at length. But how does the game engine fit into?
Well, a game engine simply takes the existing 3D assets and attaches a "brain"
to them so the objects know how to respond to events. The "brain" can be in
the form of logic bricks (which can perform different actions depending on the
user input), scripts (which can extend the functionality of logic bricks),
or other physical properties of an object (such as rigid body settings to make
an object tumble and fall realistically).

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-19.jpg

   Game = Object + Logic.

A game engine is made up of many distinct components:

* **Rendering Engine** : Turns the 3D scene you've built into an image to be
   displayed onscreen. (including models, lights, and camera)
* **Physics** : Handles collisions and physical simulations of objects.
* **Logic/Scripting** : The brain behind a game, it reacts to the user input,
   makes decisions, and keeps track of what's going on in the game.
* **Sound** : Produces the audio events.

The above list is not meant to be exhaustive, but it should give you an idea
of what a game engine does. The Blender game engine gives you a lot of control
over each of these components, which you will learn one by one in later chapters.

.. topic:: **Quality vs. Performance**

   Making a video game is a constant balancing act between quality and performance.
   As artists, you want to make the virtual world as rich and detailed as possible;
   on the other hand, you need to make sure the game can run smoothly for people
   who might not have top-of-the-line computers. Throughout the process of
   game-making, you will run into cases where you have to make a decision whether
   to prioritize the visual quality or the performance of the game.
   You will also learn tricks to achieve high-quality visual without compromising
   the performance, as well as how to optimize the game by identifying what
   is slowing it down.


Game Loop


The game loop is something that every game or general software has:
it consists of several processing steps and then, repeating it.
To make it clear, think of a video player processing steps:

- It reads a portion of the video file from disk.
- It decodes the read file portion into a image.
- It shows the decoded image in the screen as a single frame.
- It repeats everything from the start.

Nevertheless, this article will present you how the game loop is built in UPBGE.
It is essential to know how it works: if you keep that in mind, it will explain
a lot of mysterious behavior that you might discover.

.. figure:: https://upbge.org/docs/latest/manual/_images/tutorials-getting_started-game_loop.png

   Game loop diagram.

Each cycle in the game loop represents a logical frame, also known as logic tick.
It is the smallest time unit within your game. In each loop:

- The scenes are processed.
- The devices are checked for input.
- The final image is rendered.

It is important to know that the render part might be skipped if the last frame
was spending too much processing time , resulting in lag. There is a limit on
how much renders can be skipped (default = 5). If this limit exceeds, a render
will take place regardless how long it takes. Such 'render' lags will result
in 'logic' lags, making the game run slower than expected.


Scene Loop


.. figure:: https://upbge.org/docs/latest/manual/_images/tutorials-getting_started-scene_loop.png

   Scene loop diagram.

This loop is a bit more complex. The scenes loop cycles through all active scenes
performing the following steps for each scene:

- Logic processing
   This first step processes the logic of the game, be it visual or Python.
- Physics update
   The physics update will be done after the logic runs, but before the render is drawn.
- Sound playing
   The sound playing is put in the last step of the scene loop.

Once all these steps are taken for all active scenes, the main loop continues.


Logic Ticks


The logic processing works through frames called *logic ticks*. By default,
a game running at 60 frames per second also can run 60 logic ticks per second.
In practical examples:

- If I have a number 0 and increase it by 1 each frame, after 1 second
   its value will be 60.

- If I have an object and move it 0.1 meters each frame, after 1 second it
  should have been moved 6 meters.

In UPBGE you can control the logic tick intervals for each object by skipping
a given ammount of ticks, allowing you to run logic at exact custom time
intervals or optimize logic which doesn't need to run each frame.
The following diagram shows how logic tick skipping work.

.. figure:: https://upbge.org/docs/latest/manual/_images/tutorials-getting_started-logic_ticks_diagram.png

   Logic tick skipping diagram.

In the given diagram, where dark red is logic execution and grey is a interval:

1. No ticks skipped between logic ticks, the logic runs each game frame.
2. Skipping of 2 ticks between each logic execution.
3. Skipping of 6 ticks between each logic execution.

To understand how the game loop and logic triggering works is important for
you to shape the way your logic will be made and understand internal behaviors
that UPBGE may show.


=============
Blender/UPBGE Basics
=============


Blender/UPBGE


When you start Blender/UPBGE, you will be greeted with the splash screen.
Although you can customize all aspect of Blender/UPBGE, in this manual,
we will assume you are using the default Blender/UPBGE settings and shortcuts.

Clicking anywhere else to dismiss the splash screen, you are presented with
an empty workspace like this:

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-20.jpg

   Blender/UPBGE default workspace.

The Blender/UPBGE window is divided into Editors. Each Editor region can be resized,
moved, and changed to display a specific set of content. For now, let's focus
on the default setup.


Main Menu


At the top of the screen is the main menu, which offers basic functionalities
such as Open, Save, and Help. Furthermore, the main menu controls the view for
the rest of the Blender/UPBGE window. The Render Engine option in the middle of
the menu controls how the interface is configured.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-21.png
   :figwidth: 40%
   :align: left

   Selecting the Game Engine

By default, Cycles Render is selected. In this mode, the interface is configured for
doing 3D modeling, animation, and rendering with Cycles. But let's switch it to the
Blender Game mode. Click the drop-down menu and select Blender Game from the list.
This setting will unlock certain features that are not visible normally, and it also
hides features that are not available in the Blender game engine.


3D Viewport


Occupying the majority of the screen is a 3D Viewport. Here you can see the
3D world you created and test the game. For now, feel free to explore the
3D Viewport by holding down your middle mouse button over the 3D Viewport and
dragging the mouse; the view should rotate with the mouse movement.
(Mac users can use the two-finger rotate gesture on the trackpad)
The default scene contains three objects: a cube, a camera, and a light.
To select one of the objects, right-click on it. The selected object is
highlighted in yellow.

.. note:: **Basic Navigation Controls**

   Press and hold the middle mouse button to rotate the 3D view. Scroll the mouse
   wheel to zoom in the 3D view. Right-click to select a 3D object.
   Selected objects are highlighted in yellow.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-23.png
   :figwidth: 25%
   :align: left

   Number pad keyboard layout.


Another common setup for the 3D Viewport is to split the view into four quadrants:
top view, side view, front view, and a perspective view. You can turn on Quad
view by pressing Ctrl+Alt+Q with the mouse over the 3D Viewport (see Figure 1.22).
Press the same key combination to go back to the single view.

To quickly snap to one of the predetermined views (side, top, front, and so on),
the number pad is the way to go.


Outliner


.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-20b.png
   :figwidth: 33%
   :align: right

   Outliner

To the right of the screen are two editors. The top portion is the Outliner, which
contains a listing of all the data in the current Blender file. For a large project,
the Outliner is an indispensable tool for organizing your scene. For now, you can
safely ignore it.


Properties Editor


.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-24.png
   :figwidth: 33%
   :align: right

   Properties Editor icons.

Under the Outliner on the right, you have the Properties Editor. Here you can
access global settings for the file, as well as settings for individual objects.
This is one of the most frequently used panels in Blender, after the 3D view perhaps.
The *Properties Editor* is context sensitive, which means it will automatically
display different content, depending on the object that is active. Take a closer
look at the row of icons at the top of the *Properties Editor*, as shown in
Figure 1.24. These tabs organize the properties into groups, with the more
general settings on the left-most tab, and the more specific settings on the right.


Timeline


At the very bottom of the screen is a timeline window, which will be useful when
you start making animations.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-20c.png

   Timeline


Workspace Customization


The default screen, as described previously, is set up for general use.
At some point, it becomes necessary to change the screen layout to accomplish
other tasks. To select a different layout, use the Screens layout drop-down menu
from the main menu.

Apart from the predefined screen layouts, you can customize the screen layout
however you like. You can either split an existing editor into two or merge two
adjacent editors together.

.. note:: **Editor, Region, and Area**

   A region within the Blender/UPBGE windows is called an *editor*.
   An editor displays a specific set of content and tools. Common areas include:
   *3D View*, *Properties Editor*, *UV/Image Editor*, and *Logic Brick Editor*.


Figure 1.25 shows one area split into two. You can do it by dragging the
top corner of the area to the right or bottom

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-25.png

   Area Splitting

To merge two adjacent areas into one is exactly the same as shown in Figure 1.25,
but it is done in reverse order. Optionally, you can click with the right mouse
button in the edge of the area you want to split or join, and select the option
in the Area Options pop-up menu.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-27.png
   :figwidth: 25%
   :align: left

   Editor selection.

Not only can you change the size and layout of the editor,
but the type of editor can also be changed. As you can see in Figure 1.27,
the left-most icon in the header can be used to change the editor type.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-28.png
   :figwidth: 45%
   :align: right

   Dopesheet, Image Editor, and Logic Brick Editor.

Almost everything a studio needs to create the game is integrated into a single
interface: you can create the game, test the game, and play the game all from
the same program. This means that, as an artist, you can create a game in t
he shortest time possible, without having to worry about importing and exporting
files between different applications. As a programmer, you won't have to
switch back and forth between different software just to test your code.
Figure 1.28 shows some screenshots of different editors that you will
be using throughout the manual.


More on the 3D View


The 3D view is where you will spend most of your time, so let's take a look at
it in a bit more detail. You've already learned a few ways to navigate around
the scene earlier in this chapter, using both the mouse and the keyboard.


Viewport Shading Modes


.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-29.png
   :figwidth: 25%
   :align: right

   Drawing Modes

Let's look at the four different Viewport Shading modes available in the 3D view.
They are used to change the way the scene is displayed onscreen. The four modes are:

- **Bounding Box** : Represents all objects as a wireframe boundary.
   Useful for when the scene gets really complex.
- **Wireframe** : Draws all objects as wireframe, which allows you to see through objects.
- **Solid** : Draws all objects as solid faces, which is commonly used when modeling.
- **Textured** : Draws all objects as solid faces, also with texture and accurate
   lighting. This is useful for previewing the scene.

The two most commonly used Shading modes are Wireframe and Solid. Therefore,
they are assigned to a keyboard toggle for easy access. Press the ``Z`` key to
toggle between Wireframe and Solid View modes. Additionally, you can Press ``Alt+Z``
to toggle between Solid and Textured view modes.

.. note:: **Standing Out**

   Individual objects can also override the Viewport Shading mode
   via a setting under the Properties Editor > Object > Display > Type.



Editing Modes


To the left of the Shading mode selector is the Editing Mode selector.

- **Object Mode** : The default mode, which allows the manipulation of objects
   in the scene as a whole. From this mode, you can select any of the objects
   in the scene, and move, rotate, and scale them. In fact, almost everything
   apart from modeling can be done from Object mode.
- **Edit Mode**: This mode can be seen as the counterpart to Object mode.
   It allows you to edit the underlying geometry of the object. If you are modeling,
   you'll probably want to be in Edit mode. For this reason, Edit mode is not
   available when a non-editable object is selected (for example, a camera or light).

To switch between Object mode and Edit mode, press the tab key.

In addition to the two editing modes we just discussed, there are a few other
modes that are less commonly used.

- **Sculpt Mode** : Only available for Mesh objects. Allows modifications to
   the mesh as if it were clay.
- **Vertex** , **Weight,** and **Texture Paint Mode** : Only available for
   Mesh objects. These modes allow the assignment of color or weight to the mesh.
- **Pose Mode** : Is used to animate bones in an armature.

Edit mode and Object mode are by far the most commonly used editing modes,
so we will refrain from diving too deeply into the other modes for now.


Keyboard and Mouse


The joke is that to move an object in Blender, you have to press the ``G`` key,
which stands for "movinG." This gag stems from the fact that to a beginner,
many of the shortcuts in Blender/UPBGE seem counterintuitive. However, there
is a very good reason why "G" is preferred over "M." In this case, the ``G`` key
can be easily accessed on the keyboard by the left hand while the right hand is
on the mouse. Also, officially, G stands for Grab.

.. note:: **Think Different**

   By default, the Mac keyboard uses Command instead of Control as the default
   modifier key. So whenever you see ``Ctrl+Something`` in this book, mentally
   map it to Cmd if you are using a Jobsian product.

   Additionally, Blender/UPBGE has good support for multi-touch gestures on OS X.
   You can pinch to zoom, rotate to orbit around, and pan around.

Let's start with some shortcuts that work the way you would expect:

* **Ctrl + S:** Save File
* **Ctrl + O:** Open File
* **Ctrl + N:** New File
* **Ctrl + Z:** Undo
* **Ctrl + Shift + Z:** Redo
* **Ctrl + Q:** Close(Quit) Application

The above shortcuts work anywhere within Blender: they are effectively global.
Unfortunately, the familiarity ends here.

To manipulate an object in the 3D view, generally you have to select it at first:

- **Right-click:** Select object
- **Shift + Right-click:** Extend selection to multiple objects
- **A:** Select all

All of the actions above are "reversible." If something is already selected,
right-clicking on it will deselect it. If all the objects are already selected,
pressing ``A`` will deselect all.

Once an object is selected, you can start manipulating it. The keyboard shortcuts
below correspond to the three most basic transforms:

- **G:** Start Grabbing
- **S:** Start Scaling
- **R:** Start Rotating
- **Move mouse:** Carry out transform action
- **Left-click:** Confirm transformation
- **Enter:** Confirm transformation

Pressing one of the keys will start the transformation, and then you can move
your mouse to control the degree of the effect. To finalize the transformation,
left-click the mouse or press Enter.


Search


.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-30.png
   :figwidth: 30%
   :align: right

   The Search Box

The final tip that you will learn is the search functionality in Blender.
If you are unable to recall how to invoke a certain operation, whether through
a button or a keyboard shortcut, a quick way to find it is by using the search
functionality. Key in a few letters of what you are looking for, and the result
should appear as shown in Figure 1.30.

Tapping on the spacebar from anywhere will bring out a search box that contains
a list of actions.

A word of caution, though: the current implementation of the search is not very
context-aware, so sometimes operations that are not permitted in the active
context might show up.


Blender/UPBGE Philosophy


Blender/UPBGE is designed with certain philosophies in mind. Understanding these
will allow you to use Blender the way it is intended, which allows you to navigate
around Blender faster and work more efficiently.

Let the brainwashing begin!


Interface


Because Blender was originally created as an in-house software, its interface is
designed to maximize speed and efficiency for users who have mastered it.
Since Blender 2.5, a lot of work has been done to make the interface more
user-friendly. That said, Blender is probably unlike any other program you've
used before, including other kinds of 3D software.
Luckily, the Blender interface is very consistent within the application.
This means that once you learn to do something, you'll be able to use it in
another part of the program.


Keyboard


Because of the large number of commands Blender is capable of performing, invoking a
function through a quick tap on the keyboard is generally faster than using the mouse
to find the menu entry. As you follow through the rest of this section, pay special
attention to the shortcut keys that are used, because Blender is designed to let you
work fast once you learn the shortcuts.


Blender's keyboard shortcuts are optimized for a full-sized English QWERTY keyboard.
The number pad (which, unfortunately, is not present on many laptops) is used to
quickly navigate around the 3D scene. Laptop users usually have to press extra keys
on their keyboard (such as the Fn key or a toggle) in order to simulate
a number pad key. As a solution, go to File > User Preferences (Ctrl + Alt + U),
then switch to Input tab and enable "Emulate Numpad" option to use main 1 to 0 keys
instead of Numpad keys. If you want this setting remain permanently, click on the
"Save User Settings" button.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-30.png

   Emulate Numpad

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-31.png
   :figwidth: 20%
   :align: right

   3D Navigator.

Alternatively, Blender also has an add-on called "3D Navigation" that provides an
easier way to navigate around the world for people without a number pad. To enable
the 3D navigation plug-in to help you navigate around the 3D Viewport quickly,
go to File > User Preferences > Add-Ons, and turn on 3D Views: 3D Navigation. Then
you can switch views quickly from the 3D view's Toolshelf.


Mouse


Blender is designed for a three-button mouse: a mouse with two buttons and a
scroll wheel. Although there is an option to emulate the middle-mouse button
(when you click on the scroll wheel), this book will assume that you are working
with a three-button mouse for convenience.

.. note:: **How to Emulate a Three-Button Mouse**

   If you don't have a three-button mouse, you can use the Alt+Left mouse button
   combination to emulate the middle mouse button. To enable this feature,
   go to File > User Preferences > Input and turn on Emulate 3 Button Mouse.


Context


In Blender, the actions you can perform at any given time are limited to the
current state of Blender, also known collectively as the " context." For example,
certain operations can only be invoked when you have an object selected;
the Property Editors change, depending on which object is selected; the effect
of the keyboard shortcuts even changes, depending on where your mouse is positioned.
This context-sensitive nature lets you focus on the task at hand by only providing
you with options that makes sense at the time. This is Blender's way of preventing
the interface from getting too cluttered.

The "context" usually refers to one or a combination of the following:

- **Active rendering engine:** Blender Render, Blender Games, and
   Cycles Render are the default three.
- **Active editor:** The active editor is defined as the window subdivision
   that the mouse cursor is hovering over. Shortcut keys often have different
   effects, depending on which editor the mouse is over.
- **Active object:** The active object is defined as the object that is most
   recently selected.
- **Selected object:** All the objects that have been selected (highlighted).
   Keep in mind that there can be more than one selected object,
   but only one active object.
- **Editing mode:** Blender has six different modes of editing. Two of the most
   commonly used are the Edit mode and the Object mode. In Object mode, you can
   manipulate objects as a whole. In Edit mode, you can change the shape of a mesh.
   In each mode, there is a unique set of tools and options at your disposal.
   You will learn about the other four modes
   (Sculpt, Vertex Paint, Texture Paint, Weight Paint) in later chapters.


Datablocks


Often, a single Blender file contains hundreds of objects, each with different
colors, textures, and animations. How is all this organized?

Blender uses "data blocks" to represent content stored within a Blender file.
Each data block represents a collection of data or settings. Some common
datablock types you will encounter are Object datablock, Mesh datablock,
Material datablock, Texture datablock, and Image datablock.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-32.png
   :figwidth: 30%
   :align: right

   Datablock hierarchy.

In order to reduce the apparent complexity of the program,
Blender further organizes data blocks into hierarchies. At the top level are scenes,
which can have a number of worlds, each of which can have any number of objects
(objects can be a mesh, a light, a camera, and so on).
If the object is a mesh, then a Mesh datablock is attached to it.
If the object is a light, then a Light datablock is attached to the object.

An example of a datablock hierarchy chain is shown in Figure 1.32:
Scene > Object > Mesh > Material > Texture > Image


Throughout the Blender interface, you will run into many datablock managers.
They all look like Figure 1.33.

.. figure:: https://upbge.org/docs/latest/manual/_images/Fig01-33.png
   :figwidth: 30%
   :align: left

   Datablock Sharing

Because datablocks can be shared, copied, and reused, large scenes can be managed
efficiently through the use of shared datablocks. Figure 1.33 shows a datablock
that has been shared by three "users," as denoted by the number next to its name.


Parenting and Grouping


Grouping and parenting both allow you to introduce some form of order to the scene
by setting up arbitrary relationships between different objects. But grouping and
parenting work in different ways.

Parenting is used to establish links between multiple objects so that basic
transformations like location, rotation, and scaling are propagated from the
parent to its children. This way, any transformation applied to the parent is
automatically applied to all the children. Parenting is a useful way to "glue"
different objects together so they behave as one.

To parent one object to another, simply select the object you want to be
the child first. If more than one object is to be a child, select all of them now.
Lastly, select the object that you want to be the parent.
Then press `Ctrl+P` to set parent.

An object can only have one parent object, but a parent object can have many children.

Grouping can also be used to logically link objects in the scene together without
any transformation constraints to the objects. Unlike parenting, grouping does not
have a parent-child relationship; objects are simply members of a group.

Select all the objects you want to group. Then press Ctrl+G to add them to a new
group. You can also manage group membership from the Object Properties Editor.

Grouping, by itself, it not very useful. But groups can be quickly "instanced" as
group instances. Group Instance is a very useful way to create multiple copies of
objects without making actual copies of the objects. Grouping will also come in handy
for asset management, which will be discussed in the next chapter.

A single object can be in multiple groups. A group can have multiple objects.


Backward Compatibility


Blender is designed so that older files can be opened with newer versions of Blender.
But due to the rate that Blender matures, some unexpected behaviors are to be expected
when you least expect them.

Due to the Blender Python API change in Blender 2.5, old scripts written for 2.4x will
be broken in later versions of Blender. But by the time you are reading this, there
should be enough new content available for you to find.


Onward


This concludes the crash course on Blender and the game engine. By now,
you should have a cursory understanding of the function of a game engine and be
familiar with the Blender interface. In the next chapter, you will get your hands
dirty and build a simple game by following the step-by-step tutorial.


### ✨ Introducing Logic Bricks
                                                    **Introducing Logic Bricks**
manual/tutorials/introducing_logic_bricks/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_logic_bricks/index.html

   move_object
   first_person_camera
   play_animation
   linked_libraries

===============
Moving A Cube
===============

In this short tutorial we will introduce two essential elements for logic
in UPBGE: logic triggering and game properties. These elements allows the
interactivity with the set up objects.

A **game property** (also known as variable) is a value that is kept inside
a object, allowing multiple uses. A common use of game properties is the
ammount life of the player, the current song playing, or anything else that
can be useful to track for later use.

The **logic triggering** is the act of triggering some kind of event in the
game. There's lots of ways to trigger events in UPBGE, from detecting if a key
is pressed to detecting an object colliding with another, or even triggering
events continuously without detecting anything. After the detection of an
trigger, an event can be happen, like a object to move, a property be changed, etc.


Setup Scene


First, we must add objects to compose our scene. We need three basic objects:

Camera
   A camera will allow us to see our scene from a point of view.

Light
   A light will illuminate the scene objects, allowing us to see them. In this
   example we'll use a Sun light, which will illuminate all objects in the scene.

Cube
   A Cube object will be our visual feedback of our logic. As we can't see
   a camera or light, we'll move the Cube.

Once all objects were added, place them somewhat like the picture below:

   The Camera is showing the Cube, the Cube is at the center of the scene
   and the Hemi lamp can be anywhere.

Our Cube is not centered in the screen on purpose: we'll move it in the front
direction (``-Y``), so it's good to see it moving after certain point.


Adding Logic


After the scene is set up, follow these steps:

- Go to the `bpy.types.SpaceLogicEditor`.
- Add a `sensor-keyboard` through the dropdown menu named **Add Sensor**.
- Add a `controller-and` through the dropdown menu named **Add Controller**.
- Add a `actuator-motion` through the dropdown menu named **Add Actuator**.
- Connect each brick by dragging and dropping one insert into another.

Now we must fill some information on the bricks:

-  On the `sensor-keyboard`, click on the *Key* field and press a key
   to assign a key to it.
-  On the `actuator-motion`, insert the value ``-0.05`` in the field *Y* of *Loc*.

The `bpy.types.SpaceLogicEditor` should look like this:

   `sensor-keyboard` > `controller-and` > `actuator-motion`

Now, start the game engine (by default, pressing :kbd:`P` while focusing the
3D Viewport). If you press the key you assigned to the `sensor-keyboard`,
the Cube will move in the ``-Y`` direction, and if you release the key,
the Cube will stop.

This behavior happens for several reasons:

- The `sensor-keyboard` emits a positive signal when the selected key is pressed,
  and emits a negative signal when the key is released.
- The `controller-and` receives the signals from all connected sensors, and if
  all signals are positive, the controller emits an activation signal to all
  connected actuators, or an deactivation signal if one or more incoming signals
  are negative.
- The `actuator-motion` receives the activation signal from the controller and
  perform the motion. When it receives a deactivation signal, it stops performing
  the motion.

This is the basic of visual logic when using UPBGE, pretty straightforward. However,
according to what you want to achieve, it can get a lot more complex.


Logic Depending On Properties


In games, the logic depends on statuses most of the time. An enemy dies when
its life reaches ``0``, the player can shoot while its ammo is greater than ``0``,
and so on. In UPBGE, you can do these conditions through the use of properties.

To continue, perform the following steps:

- In `editor-logic-properties`, add a property through **Add Game Property**,
  set its name to *fuel*, its type to *Integer* and its value to ``200``.
- In `bpy.types.SpaceLogicEditor`, add a `sensor-property`, set its evaluation
  type to **Greater Than**, the property to *fuel* and the value to ``0``.
- Connect the `sensor-property` to the `controller-and`, along with the
  `sensor-keyboard`.

   The property *fuel* added and the `sensor-property` properly filled.

This makes our Cube move only if the value of *fuel* is greater than ``0``.
You can set the property *fuel* to ``0`` and play the game, and you will see
that the Cube will not move. However, it would be good if we decrease the value
of *fuel* as our Cube moves, until it reaches ``0``. To do that, do the
following steps:

- Add a `actuator-property` and connect it to the `controller-and`.
- Set the mode of `actuator-property` to **Add**, its property to *fuel* and
  its value to ``-1``.
- Enable the pulse mode on `sensor-keyboard`.


   The sensors connected to `controller-and` and the new `actuator-property`
   properly filled.

There's a new factor involved here: the pulse mode on `sensor-keyboard`.
By default, a sensor sends a single positive signal to the controller when
active, and a single negative signal when inactive. The pulse mode makes the
signal be sent each logical frame (default is 60 frames per second). This is
useful for us now, because we need our *fuel* to be decreased while we press
the key without the need of releasing and pressing it again.

Go ahead em play the game. The Cube will move and, after some time, it stops.
It happens because the `actuator-property` has decreased ``1`` unit of *fuel*
each frame, according to the `sensor-keyboard` pulse mode, and when *fuel*
reaches ``0``, the logic of the `actuator-motion` doesn't respond anymore.
It would be good, however, to see the value of *fuel* be decreased over time.
You can do this by enabling the debug flag on the *fuel* property and the
menu on *Game > Show Debug > Show Debug Properties*, or on the **Render**
editor.


Conclusion


The goal of this basic tutorial is to show how to work with the visual logic
and properties on UPBGE. There's more to be discovered about visual logic
and properties, like other `logic-properties-types`, the use of `logic-states`
with logic bricks, etc, and those subjects can be better understood on their
own pages.



### ✨ Introducing Logic Nodes
                                                     **Introducing Logic Nodes**
manual/tutorials/introducing_logic_nodes/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_logic_nodes/index.html

   a_first_example

===============
A First Example
===============

Here we will try print some text to the console when a key is pressed. This could
probably be called the "Hello World" example for the Logic Nodes.


Activating the Logic Nodes Add-on

The *Logic Nodes* add-on cames pre-installed in UPBGE 0.3+. To activate it
you haveto go to ``Edit -> Preferences -> Add-ons`` and filter for Game Engine.
There, check the box for the `Logic Nodes` and you're good to go.


Creating A New Logic Tree

Now, let's get started. First we will need to create a logic tree. For this, check
the view menu for a new editor called Logic Tree Editor (Should be under "General").

This editor is similar to the Shader Editor, so creating a new logic tree is
the same as creating a new Material. Just click on New and a new tree
(named NodeTree by default) should appear.


Adding Nodes

Let's make something happen here. When you press :kbd:`Shift-A`, you'll notice
that you can add new nodes now. Go ahead, take a look at what's at your disposal.

For this example, we're looking for two nodes: the ``Key Down`` node and the
``Print`` node. If you can't find them, you can also search for those words.

The ``Key Down`` node is a node of the condition type. These nodes do not
actually do anything in-game, but they either provide a condition or can be
used to check for a more complex set of conditions.

The ``Print`` node is an action type node. These nodes actually do something.
They move objects, change properties, add constraints, you name it.

Now we need to link the two together. The ``Key Down`` node has a Condition Socket,
they are colored red. Connect that to the condition socket of the ``Print`` node
and enter "Hello World" in the text box. Also, if you didn't already, look at
the ``Key Down`` node and you'll see that it asks you to choose a key.


Applying Logic Trees

Once you've done that, all that's left is to apply the tree to an object.
Logic trees work the following way: each tree can be applied to as many
objects as you want, meaning it is executed by each object it is applied
to separately.

Example: If you attached this tree to 4 objects and pressed the key ONCE,
the message would be printed 4 times, once for each object.

To apply a tree to a cube, first add a cube, select it and press
``Apply to selected`` in the logic tree editor under the ``Item`` tab.


System Console

Now, Last step! Hit Window -> Toggle System Console (for Linux and Mac users:
save the file and start blender via console again), start your game and hit
that key you entered before.

Quit the game, check the system console and there should be your message,
printed as many times as you hit the key.

   Console Output:
   Hello World

This console is also the place where your errors will be printed if you are
working in Debug Mode.

.. note::

   The ``Print`` node prints to the system console only, not to the python
   interactive console. Sadly this is not changable.



### ✨ Introducing Python
                                                          **Introducing Python**
manual/tutorials/introducing_python/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_python/index.html

   basic_concepts.rst
   move_object.rst
   play_animation.rst
   group_instances.rst
   python_component.rst

### ✨ Introducing Python Components
                                               **Introducing Python Components**
manual/tutorials/introducing_python_components/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tutorials/introducing_python_components/index.html

   python_component.rst



## 🎨 Editors
                                                                     **Editors**
manual/editors/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/editors/index.html

   properties/index.rst
       render.rst
       scene.rst
       world.rst
       object.rst
       constraints.rst
       texture.rst
       physics.rst
       materials.rst
       data.rst
   logic/index.rst
       logic/introduction.rst
       sensors/index.rst
       controllers/index.rst
       actuators/index.rst
       properties.rst
       states.rst
   text/index.rst


### ✨ Properties Editor
                                                           **Properties Editor**
manual/editors/properties/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/editors/properties/index.html

The properties editor is an essential part of the development process. There,
you can change almost all properties of the selected object, scene, camera,
etc, like:

- The screen resolution;
- Frames per second;
- Background color;
- Name and position of selected object;
- Constraints and modifiers;
- Materials and textures properties;
- Physics properties of selected object;
- Much more.

In this section you have a detailed description about each tab of the
Properties editor.

.. note::

   The **Render layers** and **Particles** tabs don't apply to UPBGE, so they
   won't be explained here.

.. note::

   This section will explain properties belonging to UPBGE only
   (Blender Game renderer) or, at most, relevant properties for game development.
   For other Blender properties, see the official Blender manual.
   https://docs.blender.org/manual/en/dev/editors/properties_editor.html


### ✨ Logic Bricks Editor
                                                         **Logic Bricks Editor**
manual/editors/logic/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/editors/logic/index.html

The Logic Bricks Editor provides the main method of setting up and editing the
game logic for the various actors (i.e. objects) that make up the game. The
logic for the objects which are currently selected in the associated 3D View
are displayed as logic bricks, which are shown as a table with three columns,
showing sensors, controllers, and actuators, respectively. The links joining
the logic bricks conduct the pulses between sensor-controller and
controller-actuator.

To give you a better understanding of the Logic Bricks Editor, the image below
shows a typical editor content in which the major components have been labeled.
We will look at each one individually.


The different parts of the Logic Editor.
https://upbge.org/docs/latest/manual/_images/editors-logic_editor-logic_editor.png

1) Property Region,
2) Object Name,
3a) Links,
3b) Link socket,
4) Sensor column,
5) Controller Column,
6) Actuator Column,
7) Python Components Region.


Main View


Object Name
   This toggle shows the name of the object which owns the logic bricks below.
Links
   Links (3A) indicate the direction of logical flow between objects.
   Link lines are drawn by :kbd:`LMB` dragging from one Link socket (3B) to another.
   Links can be drawn from Sensors to Controllers, or from Controllers to Actuators.
   If you try to link directly a Sensor with an Actuator a new Controller will appear
   between both. Actuators cannot be linked back to Sensors (however, special
   actuator and sensor types are available to provide these connections).

   Sending nodes (the chain link found on the right-hand side of Sensors and
   Controllers) can send to multiple Reception nodes
   (the chain link found on the left-hand side of Controllers and Actuators).
   Reception nodes can likewise receive multiple links.

   Links can be created between logic bricks belonging to different objects.
   To delete a link between two nodes, :kbd:`CTRL-RMB` drag between the two nodes.


Sensor Column


This column contains a list of all sensors owned by the active object
(and any other selected objects).
New sensors for the active object are created using the "Add Sensor" button.
For a more in-depth look at the content, layout and available operations in
this area, see `Sensors` (manual/logic/sensors/introduction).


Controller Column


This column contains a list of all controllers owned by the active object
(and any other selected objects).
New controllers for the active object are created using the "Add Controller"
button, together with the creation of states for the active object.
For a more in-depth look at the content, layout, and available operations in
this area, see `Controllers`. (manual/logic/controllers/introduction)


Actuator Column


This column contains a list of all actuators owned by the active object
(and any other selected objects).
New actuators for the active object are created using the "Add Actuator" button.
For a more in-depth look at the content, layout, and available operations
in this area, see `Actuators` (manual/logic/actuators/introduction).


Property Region


Game properties are like variables in other programming languages.
They are used to save and access data associated with an object.
Several types of properties are available.
Properties are declared by clicking the *Add Game Property* button in this region.
For a more in-depth look at the content, layout and available operations in
this region, see `Properties` (manual/logic/properties).



Python Components Region


This region is where the *Python Components* are placed.
*Python Components* are an independently logic system from Logic Bricks system.
They are modules that can be attached to game objects.
For a more in-depth look at the content, layout and available operations in
this region, see `Python Components` (manual/python_components/introduction).


### ✨ Text Editor
                                                                 **Text Editor**
manual/editors/text/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/editors/text/index.html


## 🎨 Logic Bricks
                                                                **Logic Bricks**
manual/logic/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/index.html

   logic/introduction.rst
   sensors/index.rst
       types/actuator.rst
       types/always.rst
       types/armature.rst
       types/collision.rst
       types/delay.rst
       types/joystick.rst
       types/keyboard.rst
       types/message.rst
       types/mouse.rst
       types/movement.rst
       types/near.rst
       types/property.rst
       types/radar.rst
       types/random.rst
       types/ray.rst
   controllers/index.rst
       types/and.rst
       types/or.rst
       types/nand.rst
       types/nor.rst
       types/xor.rst
       types/xnor.rst
       types/expression.rst
       types/python.rst
   actuators/index.rst
       types/action.rst
       types/armature.rst
       types/camera.rst
       types/collection.rst
       types/constraint.rst
       types/edit_object.rst
       types/filter_2d.rst
       types/game.rst
       types/message.rst
       types/motion.rst
       types/mouse.rst
       types/parent.rst
       types/property.rst
       types/random.rst
       types/scene.rst
       types/sound.rst
       types/state.rst
       types/steering.rst
       types/vibration.rst
       types/visibility.rst
   properties.rst
   states.rst

### ✨ Logic Bricks Introduction
                                                                **Introduction**
manual/logic/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/introduction.html

What makes a game different than a movie? Let's see. In both you can find
yourself buried in a comfortable seat eating junk food and alienated from the
world. And funny 3D goggles are not exclusive to either. But what about
interactivity? In a game you can control a player and interact with the virtual
(or real!) world and the game elements. The story can be dynamically created
in front of your eyes.

Therefore, as a director and content creator you will play different roles
in a movie or a game. In a movie, for example, you have to direct the flow
of the story, but for a game, you have to direct how the player controls and
experiences this flow. More than ever, it's time to narrow the gap between
what technology can deliver and what the public can experiment with and
assimilate as part of their own nature.

It is necessary to give *all the power to the user*.

Traditionally, to design your game interaction in the past, you would have
needed coding expertise and a highly technical background. If, as a creative
artist, any words such as technical, code, or programming scare you,
Have confidence! "Pure artists" are still scared with code. The idea here is
not that they will no longer be afraid of it. Instead, with the UPBGE they
will not have to face their fears. *Logic Bricks* are an alternative to hardcore
coding, known to be "artists friendly" more. *Logic Bricks* is here to rescue you.
*Logic Bricks* is a visual set of tools responsible for integrating the game
components together. By using *Logic Bricks*, you can determine what to do after
a mouse click, when to play an animation, how to move your character, and so on.

https://upbge.org/docs/latest/manual/_images/logic-logic-bricks-editor.png
Logic Bricks Editor

.. note::

   Logic Bricks is high level visual programming.

*Logic Bricks* system is the default "scripting" layer in the Game Engine.
Each *Game Object* in the game may store a collection of logical components
(Logic Bricks) which control its behavior within the scene. *Logic bricks*
can be combined to perform user-defined actions that determine the progression
of the simulation.


Logic Bricks


The main part of *Logic Bricks* system can be set up through a graphical interface,
the Logic Bricks Editor, and therefore does not require detailed programming knowledge.
Logic is set up as blocks (or "bricks") which represent preprogrammed functions;
these can be tweaked and combined to create the game/application.

The *Logic Brick* system is composed of three main elements:
- `Sensors` (manual/logic/sensors/introduction),
- `Controllers` (manual/logic/controllers/introduction) and
- `Actuators` (manual/logic/actuators/introduction).

Sensors are an event system used to trigger an action upon a specific event
(for example, an object collides with another object or the joystick is used).
Once one or more sensors is triggered, you can use a controller to control
whether or not this set of events will produce an event in the game (and which
effect). Controllers work as logic pipes, evaluating sensors through simple
logic conditions, such as And, Or, and Not. Finally, when a controller validates
a set of sensors, it will activate an actuator. An actuator is responsible for
a specific action of the game (such as ending the game, moving an object, and so on).

In this chapter, we'll cover sensors, controllers, and actuators in detail
specifically, how and when to use them. Additionally, you will learn about
object game properties, the State Machine system, how the interface works,
and the architecture of the system as a whole. As a system used to build new
worlds, this is no place for do's and don'ts. It will be up to you to find
the best set of features that fits your project and creativity. Nevertheless,
when possible, we'll present suggestions of when and how people have used the
tools in the past, but you don't have to feel constrained by that.
Treat Logic Bricks as small Lego pieces and surprise us and yourself.

.. note::

   Logic Bricks are really easy and quick to use. You can make entire games
   with them with absolutely no need for coding.


Properties


`Properties` (/manual/logic/properties) are like variables in other
programming languages. They are used to save and access data values either for
the whole game (e.g. scores), or for particular objects/players (e.g. names).
However, in the UPBGE, a property is associated with an object. Properties can
be of different types, and are set up in a special area of the Logic Editor.


States


Another useful feature is object`States` (/manual/logic/states).
At any time while the simulation is running, the object will process any
logic which belongs to the current state of the object. States can be used
to define groups of behavior -- e.g. an actor object may be "sleeping",
"awake" or "dead", and its logic behavior may be different in each of these
three states. The states of an object are set up, displayed and edited in the
Controller logic bricks for the object.


Architecture


The game engine was designed to revolve around game objects. Twenty years ago,
when it was first developed, this was a breakthrough design. The idea of having
events controlled per object, as opposed to a central controller, worked well
for the early days of 3D engines. Nowadays, some people may advocate that
controlling elements per object is less scalable and more difficult to manage.
That will be up to you to decide. Regardless of your thoughts on that subject,
the game engine still allows you to emulate a centralized controlling system,
while giving autonomy to each object to deal with its own business. Part of this
flexibility is due to the hooked-up Python layer and the Logic Brick system.

Through the Python interface, you can replace or at least control most of the
effects and logic setups you create with Logic Bricks. With Logic Bricks,
you can quickly set up a system that is easy to visualize, implement, and test.
The strength of the game engine comes from the trade-off between the two sibling
systems. A flexible design may lack features and performance compared to specific
engines. Nevertheless, the different kinds of applications you can prototype and
develop quickly with the game engine make up for the compromise.

If you look at a level deep into the object structure, you will find that the
architecture of the Logic Bricks system is "controller-centric." It revolves
around the controllers of the game because they are the ones to determine what
do to with the sensors and what actuators to activate. This doesn't have to be
followed strictly, but based on this design, you will want to keep your sensors
and actuators to a minimum and optimize their usage with the controllers. Actually,
in order to optimize the performance, the game engine disables any sensor and
actuator that is unlinked to a controller or linked to a controller in a
non-active state. This is one of the (many) reasons why Python controllers are
so popular. They allow you to replace the use of multiple sensors and actuators
by direct calls to their equivalents in the source code.

The chapter `Python Scripting` (/manual/python/index) is entirely dedicated to
that aspect of the game engine, and will complement the applications of
Logic Bricks discussed in this chapter.


### ✨ Sensors
                                                                     **Sensors**
manual/logic/sensors/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/sensors/index.html

   sensors/index.rst
       types/actuator.rst
       types/always.rst
       types/armature.rst
       types/collision.rst
       types/delay.rst
       types/joystick.rst
       types/keyboard.rst
       types/message.rst
       types/mouse.rst
       types/movement.rst
       types/near.rst
       types/property.rst
       types/radar.rst
       types/random.rst
       types/ray.rst

### ✨ Controllers
                                                                 **Controllers**
manual/logic/controllers/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/controllers/index.html

   controllers/index.rst
       types/and.rst
       types/or.rst
       types/nand.rst
       types/nor.rst
       types/xor.rst
       types/xnor.rst
       types/expression.rst
       types/python.rst

### ✨ Actuators
                                                                   **Actuators**
manual/logic/actuators/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/actuators/index.html

   actuators/index.rst
       types/action.rst
       types/armature.rst
       types/camera.rst
       types/collection.rst
       types/constraint.rst
       types/edit_object.rst
       types/filter_2d.rst
       types/game.rst
       types/message.rst
       types/motion.rst
       types/mouse.rst
       types/parent.rst
       types/property.rst
       types/random.rst
       types/scene.rst
       types/sound.rst
       types/state.rst
       types/steering.rst
       types/vibration.rst
       types/visibility.rst

### ✨ Properties
                                                                  **Properties**
manual/logic/properties.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/properties.html


Properties are the game logic equivalent to variables. They are stored with the
object, and can be used to represent things about them such as ammo, health,
name, and so on.


Property Types


There are five types of properties:

Timer
   Starts at the property value and counts upwards as long as the object exists.
   It can for example be used if you want to know how long time it takes the
   player to complete a level.

   .. note::

      This timer uses the simulation time (or frame time) not the real time.
      When we have 60 fps both times are equal but in other circunstances not.
Float
   Uses decimal numbers as values, can range from -10000.000 to 10000.000.
   It is useful for precision values.
Integer
   Uses integers (whole numbers) as values, between -10000 and 10000.
   Useful for counting things such as ammunition, where decimals are unnecessary.
String
   Takes text as value. Can store 128 characters.
Boolean
   Boolean variable, has two values: ``TRUE`` or ``FALSE``.
   This is useful for things that have only two modes, like a light switch.


Using Properties


When a game is running, values of properties are set, manipulated, and
evaluated using
the `Property Sensor` (/manual/logic/sensors/types/property) and
the `Property Actuator` (/manual/logic/actuators/types/property>.

Logic Properties are created and edited using the panel on the right
(although it can be moved to the left with F5) of the Logic Bricks Editor panel.
The top menu provides a list of the available property types.


Add Game Property button
   This button adds a new property to the list, default is a *Float* property
   named ``prop``, followed by a number if there already is one with this name.

Name field
   Where you give your property its name, this is how you are going to access
   it through Python or expressions. The way to do so in Python is by dictionary
   style look-up (``GameObject["propname"]``). The name is case sensitive.

Type menu
   This menu determines which type of property it is. The available options
   are in `Property Types`.

Value field
   Sets the initial value of the property.

Information
   Display property value in debug information. If debugging is turned on,
   the value of the property is given in the top left-hand corner of the screen
   while the game is running. To turn debugging on, tick the *Debug Properties*
   checkbox in the Game Debug panel of the Render Properties. All properties with
   debugging activated will then be presented with their object name, property
   name and value during gameplay. This is useful if you suspect something with
   your properties is causing problems.

Movement buttons
   Move the property up or down over other properties within the column.

``X`` button
   Deletes the property.


### ✨ States
                                                                      **States**
manual/logic/states.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic/states.html


In the BGE, an object can have different "states". At any time while the game
is playing, the current state of the object defines its behavior. For instance,
a character in your game may have states representing awake, sleeping or dead.
At any moment their behavior in response to a loud bang will be dependent on
their current state;
they may crouch down (awake); wake up (asleep) or do nothing (dead).


How States Operate


States are set up and used through controllers: note that only controllers,
not actuators and sensors, are directly controlled by the state system.
Each object has a number of states (up to 30; default = 1), and can only be
in one state at any particular time.A controller must always specify the state
for which it will operate -- it will only give an output pulse if a) its logic
conditions are met, and b) the object is currently in the specified State.
States are set up and edited in the object's Controller settings.

.. tip::

   State settings are automatic in simple games. By default, the number of
   states for each object is 1, and all controllers are set to use State 1. So,
   if a game does not need multiple states, everything will work without
   explicitly setting states -- you do not need to bother about states at all.

One of the actuators, the State actuator, can set or unset the object's State bits,
and so allow the object's reaction to a sensor signal to depend on its current state.
So, in the above example, the actor will have a number of controllers connected
to the "loud bang" sensor, for each of the "awake", "asleep" or "dead" states.
These will operate different actuators depending on the current state of the actor,
and some of these actuators may switch the actor's state under appropriate conditions.

   https://upbge.org/docs/latest/manual/_images/logic-states-panel.png

   State Panel button.


Editing States

States are set up and edited using the Controller (center) column of the
Game Logic Panel. To see the State panel, click on the State Panel Button shown.
The panel shows two areas for each of the 30 available states; these show
Visible states, and Initial states (see below). Setting up the State system
for a game is performed by choosing the appropriate state for each controller
in the object's logic.

The display of an object's state logic, and other housekeeping, is carried out
using the State Panel for the object, which is switched on and off using the
button shown. The panel is divided into two halves, Visible and Initial.


Visible States


   https://upbge.org/docs/latest/manual/_images/logic-states-panel1.png

   State Panel visible.

In the Visible area, each of the 30 available states is represented by a
light-gray square. This panel shows what logic is visible for the logic brick
displayed for the object. At the right is the `All` button; if clicked, then
all the object's logic bricks are displayed (this is a toggle), and all
State Panel squares are light gray. Otherwise, individual states can be clicked
to make their logic visible. (Note that you can click more than one square).
Clicking the square again deselects the state.

States for the object that are in use (i.e. the object has controllers which
operate in that state) have dots in them, and squares are dark gray if these
controllers are shown in the Game Logic display. The display of their connected
sensors and actuators can also be controlled if the State buttons at the head
of their columns are ticked.


Initial State

   https://upbge.org/docs/latest/manual/_images/logic-states-panel2.png

   State Panel initial.

In the Initial area, each of the 30 available states is again represented by a
light-gray square. One of these states may be clicked as the state in which the
object starts when the game is run.

At the right is the **info-button** button; if clicked, and the
`Render properties --> Game Debug panel --> Debug Properties checkbox` is clicked,
the current state of the object is shown in the top left-hand corner of the display
while the game is running.


## 🎨 Logic Nodes
                                                                 **Logic Nodes**
manual/logic_nodes/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/index.html

   logic_nodes/introduction.rst
   basic/index.rst
   scene/index.rst
   logic_math/index.rst
   data/index.rst
   utilities/index.rst


### ✨ Logic Nodes Introduction
                                                                **Introduction**
manual/logic_nodes/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/introduction.html

Logic Nodes is an `Add-on` present in the **UPBGE** base files
https://docs.blender.org/manual/en/latest/advanced/scripting/addon_tutorial.html

Its functionality is the application of logic programming through pluggable blocks.

This manual *(under development)* explains the functionality of all available nodes.

It is also possible to download it via the link: `Logic Nodes`
https://github.com/IzaZed/Uchronian-Logic-UPBGE-Logic-Nodes


### ✨ General Nodes
                                                               **General Nodes**
manual/logic_nodes/basic/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/basic/index.html

  events/index.rst
      events/on_init.rst
      events/on_next_tick.rst
      events/on_update.rst
      events/on_value_changed.rst
      events/on_value_changed_to.rst
      events/once.rst
  game/index.rst
      game/load_game.rst
      game/quit_game.rst
      game/restart_game.rst
      game/save_game.rst
      game/start_game.rst
  input/index.rst
      mouse/index.rst
          mouse/button.rst
          mouse/button_over.rst
          mouse/button_up.rst
          mouse/cursor_visibility.rst
          mouse/look.rst
          mouse/moved.rst
          mouse/over.rst
          mouse/set_position.rst
          mouse/status.rst
          mouse/wheel.rst
      gamepad/index.rst
      keyboard/index.rst
          keyboard/key_code.rst
          keyboard/key_down.rst
          keyboard/key_up.rst
          keyboard/keyboard_active.rst
          keyboard/logger.rst


### ✨ Scene Manipulation Nodes
                                                    **Scene Manipulation Nodes**
manual/logic_nodes/scene/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/scene/index.html

   animation/index.rst
        animation/introduction
        cutout_animation
        2d_skeletons
        animation_tree
        playing_videos
   lights/index.rst
        get_light_color.rst
        get_light_energy.rst
        set_light_color.rst
        set_light_energy.rst
        set_light_shadow.rst
   nodes/index.rst
         introduction.rst
        basic/index.rst
        scene/index.rst
        logic_math/index.rst
        data/index.rst
        utilities/index.rst
   objects/index.rst
        add_object.rst
        get_child_by_index.rst
        get_child_by_name.rst
        get_object.rst
        get_owner.rst
        get_parent.rst
        remove_object.rst
        remove_parent.rst
        send_message.rst
        set_curve_points.rst
        set_parent.rst
        set_visibility.rst
   sound/index.rst
        2d_sound.rst
        3d_sound.rst
        pause_sound.rst
        resume_sound.rst
        stop_all_sounds.rst
        stop_sound.rst



### ✨ Logic & Math Nodes
                                                          **Logic & Math Nodes**
manual/logic_nodes/logic_math/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/logic_math/index.html

### ✨ Data Nodes
                                                                  **Data Nodes**
manual/logic_nodes/data/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/logic_nodes/data/index.html


## 🎨 Python Scripting
                                                            **Python Scripting**
manual/python/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python/index.html

   python/introduction.rst
   python_game_engine.rst
   understanding_inheritance_and_composition_in_game_scripting.rst

### ✨ Introduction to Scripting
                                                   **Introduction to Scripting**
manual/python/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python/introduction.html

### ✨ Python and the Game Engine
                                                  **Python and the Game Engine**
manual/python/python_game_engine.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python/python_game_engine.html

### ✨ Understanding Inheritance And Composition In Game Scripting
                 **Understanding Inheritance And Composition In Game Scripting**
understanding_inheritance_and_composition_in_game_scripting.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python/understanding_inheritance_and_composition_in_game_scripting.html


## 🎨 Python Components
                                                           **Python Components**
manual/python_components/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/index.html

   python_components/introduction.rst
   getting_started/index.rst

### ✨ Introduction
                                                                **Introduction**
manual/python_components/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/introduction.html

What Is A Python Component?


The idea of a component is a simple one. They are modules that can be attached
to game objects. You can attach as many as you want, and each one serves a
specific purpose such as third person character movement with `WASD` keys.
After a component has been attached to an object, it can have various exposed
settings that you can edit. In the case of a third person movement component,
this could be things such as movement speed and turn speed.


Python component can be compared to python logic bricks with parameters.
The python component is a script loaded in the UI, this script defined
a component class by inheriting from KX_PythonComponent. This class must
contain a dictionary of properties: **args** and two default functions:
**start()** and **update()**.

Additionally, the component can include an optional function: **dispose()**

The script used to create the component must have .py extension. The component
properties are loaded from the args attribute from the UI at loading time.
When the game start the function `start()` is called with as arguments a dictionary
of the properties’ name and value. The `update()` function is called each frame
during the logic stage before running logics bricks. The goal of this function
is to handle and process everything.

The following component example moves and rotates the object when pressing
the keys `W`, `A`, `S` and `D`.


```python,ignore
   import bge
   from collections import OrderedDict

   class ThirdPerson(bge.types.KX_PythonComponent):
      """Basic third person controls

      W: move forward
      A: turn left
      S: move backward
      D: turn right

      """

      args = OrderedDict([
            ("Move Speed", 0.1),
            ("Turn Speed", 0.04)
      ])

      def start(self, args):
         self.move_speed = args['Move Speed']
         self.turn_speed = args['Turn Speed']

      def update(self):
         keyboard = bge.logic.keyboard.events

         move = 0
         rotate = 0

         if keyboard[bge.events.WKEY]:
            move += self.move_speed
         if keyboard[bge.events.SKEY]:
            move -= self.move_speed

         if keyboard[bge.events.AKEY]:
            rotate += self.turn_speed
         if keyboard[bge.events.DKEY]:
            rotate -= self.turn_speed

         self.object.applyMovement((0, move, 0), True)
         self.object.applyRotation((0, 0, rotate), True)
```

The standard property types supported are float, integer, boolean, string,
set (for enumeration) and Vector 2D, 3D and 4D.
The following example show all of these property types:


```python,ignore
   from bge import *
   from mathutils import *
   from collections import OrderedDict

   class Component(types.KX_PythonComponent):
   args = OrderedDict([
         ("Float", 58.6),
         ("Integer", 150),
         ("Boolean", True),
         ("String", "Cube"),
         ("Enum", {"Enum 1", "Enum 2", "Enum 3"}),
         ("Vector 2D", Vector((0.8, 0.7))),
         ("Vector 3D", Vector((0.4, 0.3, 0.1))),
         ("Vector 4D", Vector((0.5, 0.2, 0.9, 0.6)))
   ])

   def start(self, args):
      print(args)

   def update(self):
      pass
```

Additionally, the following data (ID) property types are supported too:


```python,ignore
   import bge, bpy
   from collections import OrderedDict

   class Bootstrap(bge.types.KX_PythonComponent):
      args = OrderedDict((
         ("myAction", bpy.types.Action),
         ("myArmature", bpy.types.Armature),
         ("myCamera", bpy.types.Camera),
         ("myCollection", bpy.types.Collection),
         ("myCurve", bpy.types.Curve),
         ("myImage", bpy.types.Image),
         ("myKey", bpy.types.Key),
         ("myLibrary", bpy.types.Library),
         ("myLight", bpy.types.Light),
         ("myMaterial", bpy.types.Material),
         ("myMesh", bpy.types.Mesh),
         ("myMovieClip", bpy.types.MovieClip),
         ("myNodeTree", bpy.types.NodeTree),
         ("myObject", bpy.types.Object),
         ("myParticle", bpy.types.ParticleSettings),
         ("mySound", bpy.types.Sound),
         ("mySpeaker", bpy.types.Speaker),
         ("myText", bpy.types.Text),
         ("myTexture", bpy.types.Texture),
         ("myVectorFont", bpy.types.VectorFont),
         ("myVolume", bpy.types.Volume),
         ("myWorld", bpy.types.World),
      ))

      def start(self, args: dict):
         self.myObject = None
         if "myObject" in args:
            print("myObject = ", args["myObject"])
            self.myObject = args["myObject"]
         else:
            print("myObject not found!")

      def update(self) -> None:
         if self.myObject:
            print(self.myObject.name)
```

The optional **dispose()** function is called when the component is destroyed.
It is only necessary in very specific cases.

Inside of UPBGE there are several python component templates that can help us
with common tasks. We will analyze them in the next subchapters.


Python Component Creation

The Python Component panel, or also called `Game Component` panel, is placed in
the Properties editor under the `Game Object Properties` tab.


You will find there the 2 ways to make a Python Component in UPBGE,
**Add** and **Create**.


Create Component

When you push over the **Create** button a detachable panel will appear.
In that panel you can introduce the component module name and the class name,
both separate by a dot.

After entering the name and clicking on the **Create** button, a new
python script with the name of the component's module will be created in
the script editor.That python script will contain an empty class which name
will be the one entered previously.

As the component script is developed you can click on the component reload
option from drop-down menu to see the updated component.


Add Component

This process is the opposite of the previous one. First of all, we already
have a python script previously formatted as a component that can be placed
either in the script editor or at the same level as the .blend file.

When we click on the **Add** button we will have to enter the name of the
python script (without the .py) followed by a dot and the class name.
After accept the Python Component will be created.


### ✨ Getting Started
                                                             **Getting Started**
manual/python_components/getting_started/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/python_components/getting_started/index.html

This subchapter aims to show the basic Python Component templates included
in UPBGE, from the character controller movements to the most common operations
used in game development. This will give you important information on how to
use the reusable components, included in the UPBGE, in all your games.

The Python Component templates are included under the template option in the
script editor.


   character_controller_templates.rst
   top_down_templates.rst
   util_templates.rst
   vehicle_templates.rst

===============
Character Controller Templates
===============

These templates were created to help UPBGE users to create games or any kind
of interactive things that requests a Character Controller. Easy to use, easy
to attach to your project.

To use, just select it from template label at script editor and you're done!
You can use this template in your projects, even for commercial projects.
You only need to give credits to Guilherme Teres Nunes (UnidayStudio) for this.
It's very easy to use: Just load this script into your .blend file through
template label (or paste it in the same folder that your .blend is), select
the object that you want, and attach the script into the object's components
using **Register Component** button.


Character Controller Component

This component will serve as a **Character Controller** for your game. With
this, you can easly made an object move using `W`, `A`, `S`, `D`, run with
`LSHIFT` and Jump with `SPACE`.

You simply have to create a capsule for your character, set the physics type
to "Character" and attach this Component to them.

* **Activate**: If you want this component running.
* **Walk Speed**: The character's walk speed.
* **Run Speed**: The character's run speed.
* **Max Jumps**: The character's max jumps. Set to `0` if you don't want
   the character to jump.
* **Static Jump Direction**: If you want to make your character jump in a static
   direction, activate "Static Jump Direction". It means that, if the player
   wasn't moving when he pressed Space, the character will jump up and the player
   will not be able to change this during the jump. The same for when he was moving
   when pressed Space. The jump direction will be the character direction when the
   player press space.
* **Static Jump Rotation**: Exactly like the Jump Direction, but for the
   character rotation.
* **Avoid Sliding**: If your character object have Collision Bounds activated,
   I'd recommend to enable the "Avoid Sliding" option. If so, the component will
   avoid the character from sliding on ramps.
* **Smooth Character Movement**: You can make the movement gets more smooth
   by increasing this value (`0.0` to `1.0`).
* **Make Object Invisible**: Makes the object invisible ingame (useful if you
   attach this component to a capsule object that have a armature inside).


First Person Camera Component

This component was created to be attached to your camera and to give you a
great mouselook control. Very useful for First Person games.

To use, add a camera in your scene, parent it into your character capsule
(you can use the Character controller Component on it), and attach this
Component to the camera. Don't forgot to position the camera in a place near
the "head" of your character.

You can configure the mouse sensibility, invert `X` or `Y` axis and
enable/disable the camera rotation limit. It's very simple to configure:

* **Activate**: If you want this component running.
* **Mouse Sensibility**: The mouse sensibility.
* **Invert Mouse X Axis**: To invert the mouselook on the `X` axis.
* **Invert Mouse Y Axis**: To invert the mouselook on the `Y` axis.
* **Limit Camera Rotation**: Limits the camera rotation on the `X` local axis.
   Very useful for First Person games to avoid the camera from flip upside down.


Third Person Camera Component

This component was created to be attached to your camera to give you a great
third person mouselook control. Very useful for Adventure games, RPGs,
Open Worlds, or any kind of games that may require a third person camera.

To use, add a camera in your scene, parent it into your character capsule
(you can use the Character controller Component on it), and attach this Component
to the camera. And you're done! The component will do the rest for you. :)

You can configure the mouse sensibility, invert `X` or `Y` axis and
enable/disable the camera rotation limit. It's very simple to configure:


* **Activate**: If you want this component running.
* **Mouse Sensibility**: The mouse sensibility.
* **Invert Mouse X Axis**: To invert the mouselook on the `X` axis.
* **Invert Mouse Y Axis**: To invert the mouselook on the `Y` axis.
* **Camera Height**: The height that you want your camera to be
   (consider height zero = the center of your character).
* **Camera Distance**: How far from the character that you want your camera to be.
* **Camera Crab (Side)**: You can make the camera stay on the side of your
   character, if you want. Just adjust this variable.
* **Camera Collision**: If you want your camera to have collision
   (to prevent the camera from traversing walls).
* **Camera Collision Property**: The property that you want your camera to avoid
   (if you want the camera to avoid all the objects, leave this blank).
* **Align Player to View**: You can define when you want the player (character)
   to look at the camera view direction: Never, just when the player moves or always.
* **Align Player Smooth**: How smooth you want the player to look at the camera
   direction. `0` means no smooth and `1` means maximum smooth possible.

By using this Component, you can also call some functions using python
(from other components) to help you: setCameraAlign(type), setCameraPos(x,y,z),
alignPlayerToView(), getCameraView(). Take a look at the implementation to
see how these functions works.


Simple Animator Component

This component will automatically align the armature to the move direction
of your character, runs the right animations accordding to the speed and
if the character is on air or not.

To use, attach this component to the armature of your character. It's important
that the armature is parented with an capsule object with physics type equals
to Character. It's very simple to configure:


* **Activate**: If you want this component running.
* **Max Walk Speed**: Define the max speed that you want while executing the
   walk animation. After this speed, the character will start interpolating
   the run animation. (Read the notes at the end).
* **Max Run Speed**: Define the max speed that you want while executing the
   run animation. After this speed, the animation will not change.
* **Suspend Children's Physics**: Enable this if you want to remove all the
   physics from the armature's childrens (recursive). Useful to avoid these
   childrens to collide with the player capsule, causing a physics bug.
* **Align To Move Direction**: Enable this if you want to make you character
   faces the direction that the player is going.
* **Align Smooth**: How smooth you want to align the character with the direction.
   0 Means no smooth and 1 means max smooth.
* **Idle Animation**: Define the name of the Idle (stopped) animation,
   the frame start and frame end.
* **Walk Animation**: Define the name of the Walk animation, the frame start
   and frame end.
* **Run Animation**: Define the name of the Run animation, the frame start
   and frame end.
* **Jump Up Animation**: Define the name of the Jump Up animation, the frame
   start and frame end.
* **Jump Down Animation**: Define the name of the Jump Down animation, the
   frame start and frame end. The Jump animations should be divided in two:
   Jump Up and Jump Down. The first one will be executed when the character
   is going up. The second, whe the character is falling. Both should be
   loop animations.

.. note::
   The anim interpolation/transition between idle-walk and walk-run according
   to the speed is not implemented yet.


==================
Top Down Templates
==================

This template was created to help UPBGE users to create games or any kind of
interactive thing that request a Top Down Controller. Easy to use, easy to
attach to your project.


To use, just select it from template label at script editor and you're done!
You can use this template in your projects, even for commercial projects.
You only need to give credits to Guilherme Teres Nunes (UnidayStudio) for this.
It's very easy to use: Just load this script into your .blend file through
template label (or paste it in the same folder that your .blend is), select
the object that you want, and attach the script into the object's components
using **Register Component** button.


Mouse Camera Drag Component

This component will allow the player to move the camera (or other objects)
by simple holding a mouse button (you decide what button) and dragging the
mouse around. Very useful for top down games. It will also allow the player
to move the camera (or other objects) by pressing `W`, `A`, `S`, `D` keys.
There is some configuration to help you adapting this logic to better fit
in your project. If you want to drag the camera in a vertial way, to create a
side scroller game, for example, you can easly change the "Up Axis" to allow this.
You can attach this component into your camera or into other objects.

It's very simple to configure:

* **Show Mouse**: Enable if you want to show the mouse
* **Mouse Movement**: Enable if you want to activate the mouse drag logic
* **Mouse Button**: Which mouse button you want to use
* **Keyboard Movement**: Enable if you want to move the object using `W`, `A`, `S`, `D`
* **Up Axis**: Select the `UP` axis.
* **Local Movement**: Local or Global movement? You decide!
* **Mouse Sensibility**: The mouse sensibility!
* **Keyboard Speed**: If you enabled the Keyboard Movement, control the speed here!
* **Limit Area**: You can limit the area that the object can stay by playing
   around with this values. If you don't want, just set to `0`.



Mouse Point And Click Component

This component will allow you to teleport an object right into the point that
the player clicks. You can limit the scope of the clicks by adding a property.
This feature is very useful for top down/point and click games, because you
need a pivot to point where the player wants the character to go.

It's very simple to configure:

* **Activate**: Activate or deactivate the logic
* **Mouse Button**: Which mouse button you want to use
* **Align To Normal**: Enable if you want to align the object to the mouse over normal.
* **Property**: The property that you want to interact with
   (leave this blank if you want to interact with everything).


Object Chaser Component

This component will make the object chase a target (another object) when they
have certain distance. Note that is necessary to have a navmesh in your scene.
You can also change the Target object in realtime by calling the function
`setTarget()`.

It's very simple to configure:

* **Activate**: Activate or deactivate the logic.
* **Navmesh Name**: The name of your navmesh.
* **Target Object**: The name of your target.
* **Min Distance**: The minimum distance that you want the object from the target.
* **Tolerance Distance**: Once the object is already near the target,
   the extra tolerance distance that they can have before it starts chasing again.
* **Speed**: The speed of the object while chasing the target.
* **Front Axis**: The front Axis (put `Y` axis if you don't know).
* **Up Axis**: The `UP` Axis (put `Z` if you don't know).
* **Smooth Turn**: To smooth the path following turns.


===============
Utils Templates
===============

These templates were created to help UPBGE users to create games or any
kind of interactive things. Easy to use, easy to attach to your project.


To use, just select it from template label at script editor and you're done!
You can use this template in your projects, even for commercial projects.
You only need to give credits to Guilherme Teres Nunes (UnidayStudio) for this.
It's very easy to use: Just load this script into your .blend file through
template label (or paste it in the same folder that your .blend is), select
the object that you want, and attach the script into the object's components
using **Register Component** button.


Sound Speaker Component

This component will serve as an sound Speaker for your game. With this, you can
easly control 3D sound, volume. Unfortunatelly, the sounds needs to be mono to
make the 3D sound works. You can convert your sound to mono using windows CMD
like this: '> ffmpeg -i Sound.wav -ac 1 SoundMono.wav'

It's very simple to configure:

* **Sound File**: The file name, example: "Assets/DoorMono.wav".
* **Loop Sound**: If you want the sound to loop or just play once.
* **Volume**: The Volume.
* **Pitch**: The Pitch.
* **3D Sound**: If you want the sound to be 3D.
* **Min Distance**: If 3D Sound is enabled, the sound will have the max volume
   if the listener is at this distance or minor.
* **Max Distance**: If 3D Sound is enabled, the sound will volume down until
   zero when the listener reach this distance.
* **Delete Object After End**: If enabled, the object will be deleted at
   the end of the sound (if Loop Sound equals to false).


Minimap Component

This component will spawn a minimap based on the camera (which owns the component)
view. Add this component to a camera and position it on top of your character.
To configure, take a look at the values:

* **Camera Type**: You can choose between Perspertive or Ortographic camera.
* **Camera Height**: Define the height that you want your minimap camera to be.
   If you don't want the component to modify this, just set to `0`.
* **Minimap Position**: The position of the center of the minimap on the screen
   (values goes from `0` to `1`).
* **Minimap Size**: The size of the minimap (values goes from `0` to `1`).
* **Follow Object**: You can define an object for the minimap to follow
   (like the player). Leave it empty if you don't want.
* **Rotate on Z axis**: If you defined a Follow Object, you can also makes
   the minimap rotates on the `Z` axis according to the follow object's rotation.


## 🎨 Physics
                                                                     **Physics**
manual/physics/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/physics/index.html

### ✨ Introduction
                                                                **Introduction**
manual/physics/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/physics/introduction.html


## 🎨 Datablocks
                                                                  **Datablocks**
manual/datablocks/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/index.html

### ✨ Armature
                                                                    **Armature**
manual/datablocks/armature.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/armature.html

### ✨ Camera
                                                                      **Camera**
manual/datablocks/camera.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/camera.html

### ✨ Collection
                                                                  **Collection**
manual/datablocks/collection.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/collection.html

### ✨ Empty
                                                                       **Empty**
manual/datablocks/empty.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/empty.html

### ✨ Light
                                                                       **Light**
manual/datablocks/light.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/light.html

### ✨ Mesh
                                                                        **Mesh**
manual/datablocks/mesh.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/mesh.html

### ✨ Object
                                                                      **Object**
manual/datablocks/object.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/object.html

### ✨ Text
                                                                        **Text**
manual/datablocks/text.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/text.html

### ✨ Image
                                                                       **Image**
manual/datablocks/image.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/image.html

### ✨ Library
                                                                     **Library**
manual/datablocks/library.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/library.html

### ✨ Sound
                                                                       **Sound**
manual/datablocks/sound.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/sound.html

### ✨ Action
                                                                      **Action**
manual/datablocks/action.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/action.html

### ✨ Material
                                                                    **Material**
manual/datablocks/material.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/material.html

### ✨ Scene
                                                                       **Scene**
manual/datablocks/scene.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/scene.html

### ✨ Texture
                                                                     **Texture**
manual/datablocks/texture.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/texture.html

### ✨ World
                                                                       **World**
manual/datablocks/world.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/datablocks/world.html


## 🎨 Deployment
                                                                  **Deployment**
manual/release/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/release/index.html

   licensing
   performance
   blender_player
   release_procedure

### ✨ Licensing of Games
                                                          **Licensing of Games**
manual/release/licensing.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/release/licensing.html

Blender and the UPBGE/BGE are licensed as GNU GPL, which means that your games
(if they include Blender software) have to comply with that license as well.
This only applies to the software, or the bundle if it has software in it, not
to the artwork you make with Blender. All your Blender creations are your sole property.

GNU GPL -- also called "Free Software" -- is a license that aims at keeping the
licensed software free, forever. GNU GPL does not allow you to add new restrictions
or limitations on the software you received under that license. That works fine
if you want your clients or your audience to have the same rights as you have
(with Blender).

In summary, the software and source code are bound to the GNU GPL, but the
blend-files (models, textures, sounds) are not.


Standalone Games

In case you save out your game as a single standalone (using addons for this
purpose, for example), the blend-file gets included in the binary
(the Blender Player). That requires the blend-file to be compatible with the
GNU GPL license.

In this case, you could decide to load and run another blend-file game
(using the Game Actuator logic brick). That file then is not part of the
binary, so you can apply any license you wish on it.


More Information

More information you can find in the blender.org FAQ
https://www.blender.org/support/faq/

### ✨ Performance Considerations
                                                  **Performance Considerations**
manual/release/performance.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/release/performance.html

When developing games, game engineers, software and hardware developers uses
some tools to fine-tune their games to specific platforms and operating systems,
defining a basic usage scenario whereas the users would have the best possible
experience with the game.

Most of these tools, are software tools available for the specific Game Engines
whereas the games were being developed and will run.

Blender Game Engine also comes with some visual tools to fine-tune the games
being developed, so the game developers could test the best usage scenario and
minimum software and hardware requirements to run the game.

In Blender, those tools are available at the *System* and *Display* panel of
*Render* tab in the *Properties editor*.

There are options for specific performance adjusts and measurements, ways to
control the frame rate or the way the contents are rendered in Blender window
(game viewport) while the game runs, as well as controls for maintaining geometry
allocated in graphic cards memory.

Blender Game Engine rendering system controls:
   :ref:`System <editors-properties-render-system>` --
   Controls for Scene rendering while the game is running.
Blender Game Engine Performance measurements:
   :ref:`Display <editors-properties-render-display>` --
   Controls for showing specific data about performance while the game is running.

### ✨ Standalone Player
                                                           **Standalone Player**
manual/release/blender_player.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/release/blender_player.html

The standalone player allows a Blender game to be run without having to load
the Blender system. This allows games to be distributed to other users, without
requiring them a detailed knowledge of Blender (and also without the possibility
of unauthorized modification). Note that the Game Engine *Save as Runtime* is an
add-on facility which must be pre-loaded before use.

The following procedure will give a standalone version of a working game.

#. `File --> User Preferences --> Add-ons --> Game Engine --> Save As Game Engine Runtime`
   enable the checkbox. (You can also *Save User Settings*,
   in which case the add-on will always be present whenever Blender is re-loaded).
#. `File --> Export --> Save As Game Engine Runtime`
#. `File --> Export --> Save As Game Engine Runtime`
   (give appropriate directory/filename) confirm with *Save as Game Engine Runtime*.

   (give appropriate directory/filename) confirm with *Save as Game Engine Runtime*.

The game can then be executed by running the appropriate ``.exe`` file.
Note that all appropriate libraries are automatically loaded by the add-on.

If you are interested in licensing your game,
read `Licensing <https://www.blender.org/about/license/>`__
for a discussion of the issues involved.

.. tip:: Exporting...

   If the game is to be exported to other computers, make a new empty directory
   for the game runtime and all its ancillary libraries, etc.
   Then make sure the **whole** directory is transferred to the target computer.


Personalize The Game Icon

This is option is available for Windows only. You can personalize the icon using
the option `New Icon Path` when exporting standaloe player.


### ✨ Release Procedure
                                                           **Release Procedure**
manual/release/release_procedure.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/release/release_procedure.html


## 🎨 Tools
                                                                       **Tools**
manual/tools/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tools/index.html

For a small project, editing Python scripts using Blender's source editor could
be the most straightforward option to develop a UPBGE game. However, you may
find an external, more dedicated development setup to be more desirable as your
project grows in size and complexity.

This section introduces several Python-related tools you can use in conjunction
with your project and explains how to prepare them for UPBGE development.

   api_stubs


### ✨ API Stubs
                                                                   **API Stubs**
manual/tools/api_stubs.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/tools/api_stubs.html


## 🎨 About
                                                                       **About**
manual/about/index.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/about/index.html

### ✨ Introduction to the UPBGE Manual
                                            **Introduction to the UPBGE Manual**
manual/about/introduction.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/about/introduction.html

### ✨ License
                                                                     **License**
manual/about/license.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/about/license.html

### ✨ What’s New
                                                                  **What’s New**
manual/about/whats_new.rst
https://upbge.org/#/documentation/docs/latest/manual/manual/about/whats_new.html



