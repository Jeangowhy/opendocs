
# =🚩 Contents

[TOC]

# =🚩 OpenGL Introduction
- [History of OpenGL](https://www.khronos.org/opengl/wiki/History_of_OpenGL)
- [OpenGL Getting Started](https://www.khronos.org/opengl/wiki/Getting_Started)
- [OpenGL Software Development Kit](https://www.opengl.org/sdk/)
- [SDL - Simple DirectMedia Layer](https://www.libsdl.org/)
- [What is OpenGL?](https://openglbook.com/chapter-0-preface-what-is-opengl.html)
- [GLFX - An OpenGL Effect Library](http://ogldev.atspace.co.uk/www/tutorial34/tutorial34.html)
- [GLFX OpenGL 效果库](https://wiki.jikexueyuan.com/project/modern-opengl-tutorial/tutorial34.html)
- [Mesa3D](https://docs.mesa3d.org/index.html)
- [Lazy Foo's SDL Tutorials](https://tjumyk.github.io/sdl-tutorial-cn/contents.html)
- [SFML - Simple and Fast Multimedia](https://github.com/SFML/sfml)
- [Tutorials for SFML 2.5](https://www.sfml-dev.org/tutorials/2.5/)
- [OpenGL ES 3.0 - Shaders and Programs](https://zhuanlan.zhihu.com/p/150741912)
- [OpenGL wiki Tutorials](https://www.khronos.org/opengl/wiki/Tutorials)
- [Learning Modern 3D Graphics Programming](https://bitbucket.org/alfonse/gltut/wiki/Home)
- [Allegro - A game programming library](https://liballeg.org/)
- [Lazy Foo' Productions](http://lazyfoo.net/SDL_tutorials/index.php)


书籍介绍：

- [计算机图形学基础 第三版](https://pan.baidu.com/s/1tSfEl3mByhZU7YaLxqnSLQ#6jam)
- [计算机图形学基础 第四版链接](https://pan.baidu.com/s/1X5dyK1U54MYsXguMdSxJig#76fb)
- [OpenGL Programming Guide: The Official Guide to Learning OpenGL, Version 1.1](http://www.glprogramming.com/red/index.html)
- [OpenGL SuperBible: Comprehensive Tutorial and Reference](http://www.openglsuperbible.com/)


OpenGL - Open Graphics Library 开放图形库是一套用于渲染 2D、3D 矢量图形的跨语言、跨平台的 API - Application Programming Interface 应用程序编程接口规范，即 API Specification，提供近 350 个 API 函数，用来绘制从简单的图形比特到复杂的三维景象。和 Microsoft Windows 专用的 Direct3D API 接口一样，它们都是用来简化组图设备的软件开发的，在没有 OpenGL 这类图形接口前，不同设备上的绘图软件需要进行各种硬件上的适配，有了统一的接口后就不存在这个问题了，绘图图件只需要按 OpenGL 提供的接口来，硬件供应方负责驱动层的开发，与应用软件分离。OpenGL 这套 API 常用于 CAD、VR 虚拟现实、科学可视化程序和电子游戏开发。

OpenGL 本身并不是一个 API，目前它仅仅是一个由 Khronos 组织制定并维护的规范 Specification。

OpenGL 开发涉及到多个模块或概念：

- `GL` - OpenGL 库是核心库，包含了最基本的 3D 函数。
- `GLES` - OpenGL for Embedded Systems 用于嵌入式系统的精简版 OpenGL ES。
- `GLU` - OpenGL Utility 实用库。
- `GLUT` - OpenGL Utility Toolkit 最初是为红宝书开发的一个 OpenGL 窗口管理工具库，已不再维护，最后一版是 3.7.6 (Nov 8, 2001)。
- `FreeGLUT` - 跨平台窗口和键盘、鼠标处理，API 是 GLUT API 的超集，同时也比 GLUT 更新、更稳定。
- `GLFW` - 这是比 GLUT 更先进的库，管理窗口，读取输入，处理事件等。FW 可以理解为 Framework。
- `GLEW` - Extension Wrangler 加载扩展是个体力活，交给这些库处理，GLAD 可以看作是升级版。
- `GLEE` - OpenGL Easy Extension 扩展封闭库，提供 OpenGL 3.0 近 400 个扩展的便利加载。
- `GL3W` - OpenGL 核心模式配置加载库，简化核心模式开发。
- `GLAD` - 是继 GL3W，GLEW 之后，当前最新的用来访问 OpenGL 规范接口的第三方库。
- `GLM` - OpenGL Mathematics 一个线性代数库，它经常和 OpenGL 一块使用。
- `GLFX` - OpenGL Effect 效果库，依赖 GLEW。

OpenGL 程序需要运行在各种平台上，其上下文 Context 的创建过程相当复杂，在不同的操作系统上也需要不同的做法。因此很多游戏开发和用户界面库都提供了自动创建 OpenGL 上下文的功能，其中包括 SDL、Allegro、SFML、FLTK、Qt 等。也有一些库专门用来创建 OpenGL 窗口，其中最早的便是 GLUT，后被 FreeGLUT 取代，比较新的也有 GLFW 可以使用。

支持创建 OpenGL 窗口的还有一些多媒体库，它们集成了 OpenGL API 同时支持输入、声音等游戏程序所需要的基本功能：

- Mesa3D - Brian Paul 开发的开源 OpenGL 规范实现，主要应用于 Linux。
- Allegro 5 跨平台多媒体库，提供针对游戏开发的 C API。
- SDL - Simple DirectMedia Layer 跨平台多媒体库，提供 C API，支持多种语言开发。
- SFML - Simple and Fast Multimedia 跨平台多媒体库，提供 C++ API，支持多语言开发。
- FLTK - 小型的跨平台 C++ 窗口组件库
- Qt - 跨平台 C++ 窗口组件库，提供了许多 OpenGL 辅助对象。
- wxWidgets - 跨平台 C++ 窗口组件库。

SDL 和 SFML 作为轻量级图形框架，常用用于 GUI 程序及游戏开发，就开发者活跃度来看，基于 C++ 的 SFML 占优势，像 Spine 动画制作软件都提供提供了运行时支持，大大方便了游戏制作流程。这些框架做了不同系统平台的图形接口的适配工作，使用者就不再需要基于操作系统底层 API 来开发图形应用程序，开发者就可以不深入 Windows 系统下的 DirectX，Linux 系统下的 X Window System，Mac OS 使用通用的 OpenGL 图形接口的细节。

GLX - OpenGL Extension to the X Window System 扩展，是 X 协议和 X server 的一部分，已经包含在 X server 的代码中了。 GLX 提供了 x window system 使用的 OpenGL 接口，允许通过x调用OpenGL库。OpenGL 在使用时，需要与一个实际的窗口系统关联起来，在不同平台上有不同的机制以关联窗口系统，在 Windows 上是 `WGL`，在 Linux 上是 `GLX`，在 Apple OS 上是 `AGL` 等。 在 OpenGL ES 嵌入式平台上 `EGL` 就是 WGL、GLX、AGL 的等价物。EGL 假设 OS 会提供窗口系统，但 EGL 与平台无关，并不局限于任何特定的窗口系统。


既然，OpenGL 又快又跨平台，为何没有不在 PC 游戏中占领主导市场?

首先 API 设计反人类，全局状态机不符合人类直觉容易出错，如果你还需要用上多线程那就更酸爽了。其实，不同厂家的 GPU 驱动对 GL 的支持也不尽相同，即便声称支持。举个例子，在一台机子上的 GL 程序可以运行好好的，但一换显卡换可能就 Shader 报错了。

OpenGL 在 PC 上毛病多，PSO 创建和切换慢，还会破坏 GPU 并行，资源状态管理一点都不现代等等，相比之下 DX 能无缝多线程提交，精确控制资源状态和渲染队列，Device 操作还没有明显卡顿。至于 OpenGL 跨平台更是个笑话，但凡做过游戏的就知道手游已经和端游引擎开发根本就是两个次元甚至两个行业，想靠 GFX 实现跨平台是不是有点贪心。

当然 OpenGL 这些缺点并不能阻碍大神们做出工业级的代码和 3A 游戏，当然，想要实现图形编程，掌握一些数学知识，`线性代数`、`几何`、`三角学`是必需的。


Khronos 手上除了 OpenGL 外，在 2015 年还发布了 Vulkan，次世代 OpenGL，next generation OpenGL initiative，在 Vulkan 的 API 设计上很明显有以下几个特点：

- 更依赖于程序自身的认知，让程序有更多的权限和责任自主的处理调度和优化，而不依赖于驱动尝试在后台的优化。程序开发者应该程序的最优化行为最为了解，传统图形 API 则靠驱动分析程序中调用 API 模式来揣测并且推断所有操作的优化方法。

- 多线程友好。让程序尽可能的利用所有 CPU 计算资源从而提高性能。Vulkan 中不再需要依赖于绑定在某个线程上的 Context，而是用全新的基于 Queue 的方式向GPU递交任务，并且提供多种 Synchronization 的组件让多线程编程更加亲民。

- 强调复用，从而减少开销。大多数 Vulkan API 的组件都可以高效的被复用。

Vulkan 才刚起步，其最大任务不是竞争 DirectX，而是取代 OpenGL。


最初的 GLUT - OpenGL Utility Toolkit library 是 Mark Kilgard 为 OpenGL RedBook 红宝书例程编写的一个工具模块，是一个与窗口系统无关的工具包。它为窗口的管理、事件处理、IO 控制和一些其他的设备管理提供了一个简单的 API。。然而，当时 GLUT 太好用了，大简化了 OpenGL 程序的开发，以至于成为了 OpenGL 标准模块一样，而 FreeGLUT 是其中一个较常用的版本，支持 MSVC 和 MinGW，现在开发中的版本是 FreeGLUT 3.0 可以直接下载编译好的文件。

GLUT 库包含以下功能：

- 多 OpenGL 窗口渲染。
- 回调驱动，事件处理。
- 一个 `idle` 空闲例程和定时器。
- 工具例程，产生实体或线框模型。
- 支持位图和笔触字体。
- 多功能窗口管理函数。

早期的 OpenGL 使用`立即渲染模式` Immediate mode，也就是固定渲染管线，这个模式下绘制图形很方便。OpenGL 的大多数功能都被库隐藏起来，开发者很少能控制 OpenGL 计算的方式，而开发者又迫切希望能有更多的灵活性。

随着时间推移，规范越来越灵活，开发者对绘图细节有了更多的掌控。立即渲染模式确实容易使用和理解，但是效率太低。因此从 OpenGL 3.2 开始，规范文档开始废弃立即渲染模式，并鼓励开发者在 OpenGL `核心模式` Core-profile 下进行开发，这个分支的规范完全移除了旧的特性。

当使用 OpenGL 的核心模式时，就禁止使用已废弃的函数，OpenGL 会为此抛出一个错误并终止绘图。现代函数的优势是更高的灵活性和效率，然而也更难于学习，要求使用者理解 OpenGL 图形编程，它有一些难度。但是，为了获取更多的灵活性，更高的效率，更重要的是可以更深入的理解图形编程，这是值得的。

现今，更高版本的 OpenGL 4.5，但是，核心编程模式还在发挥作用。

OpenGL 的一大特性是扩展 Extension，当一个显卡公司提出一个新特性或者渲染上的大优化，通常会以扩展的方式在驱动中实现。
如果一个程序在支持这个扩展的显卡上运行，开发者可以使用这个扩展提供的一些更先进更有效的图形功能。通过这种方式，开发者不必等待一个新的 OpenGL 规范面世，就可以使用这些新的渲染特性，只需要简单地检查一下显卡是否支持此扩展：

	if(GL_ARB_extension_name)
	{
		// new feature
	}
	else
	{
		// fallback
	}

OpenGL 自身是一个巨大的状态机 State Machine，由一系列的变量描述 OpenGL 此刻应当如何运行。OpenGL 的状态通常被称为 OpenGL 上下文 Context。更改 OpenGL 状态一般操作：设置选项，操作缓冲，最后，使用当前 OpenGL 上下文来渲染。

假设，告诉 OpenGL 画线段而不是三角形，我们通过改变一些上下文变量来改变 OpenGL 状态，从而告诉 OpenGL 如何去绘图。一旦我们改变了 OpenGL 的状态为绘制线段，下一个绘制命令就会画出线段而不是三角形。

OpenGL 库是用 C 语言写的，由于 C 语言一些结构不易被翻译到其它的高级语言，因此 OpenGL 开发的时候引入了一些抽象层，对象 `Object` 就是其中一个。

在 OpenGL 中一个对象是指一些选项的集合，它代表 OpenGL 状态的一个子集。比如，我们可以用一个对象来代表绘图窗口的设置，之后我们就可以设置它的大小、支持的颜色位数等等。可以把对象看做一个 C 风格的结构体 Struct。


## ==⚡ GLUT Hello
- [The OpenGL Utility Toolkit API Version 3](https://www.opengl.org/resources/libraries/glut/spec3/spec3.html)
- [GLUT 3 API specification - 2000/03/22](https://www.opengl.org/resources/libraries/glut/glut-3.spec.pdf)
- [OpenGL Utility Toolkit - github](https://github.com/markkilgard/glut)
- [freeglut 3.0.0 API Version 4.0](http://freeglut.sourceforge.net/docs/api.php)
- [GLUT Download](https://www.opengl.org/resources/libraries/glut/glut_downloads.php)
- [GLUT 3.7beta 下载](http://www.opengl.org/resources/libraries/glut/glutdlls37beta.zip)
- [GLUT 3.7.6 (Nov 8, 2001)](https://user.xmission.com/~nate/glut.html)
- [FreeGLUT - The OpenGL Utility Toolkit](http://freeglut.sourceforge.net/)
- [FreeGLUT 3.0 MSVC or MinGW](https://www.transmissionzero.co.uk/software/freeglut-devel/)
- [Using freeglut or GLUT with MinGW](https://www.transmissionzero.co.uk/computing/using-glut-with-mingw/)
- [Building Windows DLLs with MinGW](https://www.transmissionzero.co.uk/computing/building-dlls-with-mingw/)
- [OpenGL Redbook Samples](https://www.opengl.org/archives/resources/code/samples/redbook/)
- [GLUTによる「手抜き」OpenGL入門](https://tokoik.github.io/opengl/libglut.html)
- [NeHe Productions - Everything OpenGL](http://nehe.gamedev.net/)
- [Geometric Object Rendering](https://www.opengl.org/resources/libraries/glut/spec3/node80.html)
- [OpenGL Book - Getting Started](https://openglbook.com/chapter-1-getting-started.html)

首先，必需说明，使用 GLUT 方式编写传统 OpenGL 的方式已经是非常落后的技术，但是作为 OpenGL 的入门，又不得不了解它的来龙去脉，所以这里两三个小节的内容对 GLUT 的使用进行讲解。

与旧式面向 API 的编和方式相比，新式 OpenGL 编程面向渲染管线，使用着色为主要的编程手段，这是一种全新的图形编程体验，也需要更多的线性代数、几何学基础。

在 Windows 下以 GLUT 方式编写 OpenGL 程序，需要准备：

- GLUT 库，GLUT 3.7 或 FreeGLUT 3.2.1，推荐后者；
- MSVC、GCC 编译器，Windows 下可以使用 MinGW；
- Windows 系统提供的 OpenGL 基础库，可以通过 Visual Studio 社区版本安装；

GLUT 可以下载编译好的 GLUT 3.7beta，下载后解开压缩包，里面有五个文件

- glut.h
- glut.lib
- glut32.lib
- glut.dll
- glut32.dll

把动态链接库 `.dll` 放到环境变量 PATH 中的目录，编译程序运行时需要，可以放在系统盘下 \WINDOWS\system32。头文件可以放到 Visual Studio 的头文件目录中，也可以另外一目录存放，但需要在 C++ 工程中包含及引用。编译程序时，除了链接 glut32.lib 或 glut.lib 外，还需要 Windows 提供的 `opengl32.lib` 共享库，由它提供 OpenGL 的底层 API，一般由 Windows SDK 提供，一并还有 `glu32.lib`，在运行时，还需要 `opengl.dll`、`glut.dll`、`glu.dll` 这就是早期 OpenGL 程序基本的依赖。

	C:\Program Files (x86)\Windows Kits\10\Lib\10.0.18362.0\um\x86\OpenGL32.Lib

在源代码包中，附带了 RedBook 的示例代码。

GLUT 算是比较旧的库，如果要使用 MinGW 编译，最好使用 FreeGLUT 替代，甚至可以使用更新的 GLFW 3.3.2，也有编译好的版本，使用 MinGW 也可以编译。

使用 FreeGLUT 也比原始的 GLUT 省事，并不需要依赖 opengl.dll。可以下载稳定版 freeglut 3.2.1 源代码进行编译，支持 MSVC 和 MinGW。安装好 MinGW 和 CMake，在解压目录中建立 build 目录用于保存编译文件，在这个 build 目录下执行命令：

	CMake ..
	make

编译后，得到的生成文件中，有两个链接库文件，分另是静态库和动态库，在 bin 目录下有几个示例程序及动态链接库：

- lib\libfreeglut_static.a
- lib\libfreeglut.dll.a
- bin\libfreeglut.dll

编译命令参考，包括动态链接、静态链接：

	gcc -c -o hello.o hello.c -IC:\MinGW\freeglut\include
	gcc -o hello.exe hello.o -LC:\MinGW\freeglut\lib -lfreeglut -lopengl32 -Wl,--subsystem,windows

	gcc -c -o hello.o hello.c -D FREEGLUT_STATIC -IC:\MinGW\freeglut\include
	gcc -o hello.exe hello.o -LC:\MinGW\freeglut\lib -lfreeglut_static -lopengl32 -lwinmm -lgdi32 -Wl,--subsystem,windows

	gcc -c -o hello.o hello.c -IC:\MinGW\GLUT\include
	gcc -o hello.exe hello.o -LC:\MinGW\GLUT\lib -lglut32 -lopengl32 -Wl,--subsystem,windows

也可以在 Linux 系统上交叉编译，Cross-Compiling，如 Fedora 14 系统中：

	$ i686-pc-mingw32-gcc -c -o hello.o hello.c -I/usr/local/share/MinGW/freeglut/include/
	$ i686-pc-mingw32-gcc -o hello.exe hello.o -L/usr/local/share/MinGW/freeglut/lib/ \
	-lfreeglut -lopengl32 -Wl,--subsystem,windows

源代码中有一个 Lorenz attractor 示例，Lorenz attractor 又被称为蝴蝶效应。简单来说，是一个混沌的动力系统，系统对初始值非常敏感，即使初始值非常小的不同，随着时间演化，到最后能造成极大的差别。

这个动力系统首先由法国天气学家 Lorenz 发现，他在研究天气动力系统时，提出了一个非常简单的模型描述大气里温度梯度，各处压强，流速等信息，但对真实情况做了太多的假设和简化，在物理上并没有参考意义，是一个玩具模型。但在数学上，却带了了非常有意思的发现。

Lorenz 在一次计算时，在两组初始值相差非常小的情况下，他惊奇的发现随着时间演化，两组结果竟然产生了翻天覆地的变化，甚至截然不同。由相同方程支配的系统竟然在初始值差别非常小的情况下产生巨大的不同，这是反直觉的。

使用 GLUT 的 OpenGL 示例程序，代码只简单绘制了一个色块：

	#include <iostream>
	#include <GL/glut.h>

	void keyboard(unsigned char key, int x, int y);
	void display(void);

	int main(int argc, char** argv) {
		glutInit(&argc, argv);  
		glutCreateWindow("GLUT Test");
		glutKeyboardFunc(&keyboard);
		glutDisplayFunc(&display);
		glutMainLoop();
		return EXIT_SUCCESS;
	} 
	void keyboard(unsigned char key, int x, int y) { 
		std::cout << key << std::endl;
		switch (key) { 
		  case 'x': exit(EXIT_SUCCESS); break;
		}
	}
	void display() {
		glClear(GL_COLOR_BUFFER_BIT);
		glColor3f(1.0f, 0.0f, 0.0f);
		glBegin(GL_POLYGON);
		glVertex2f(-0.5f, -0.5f);
		glVertex2f(0.5f, -0.5f);
		glVertex2f(0.5f, 0.5f);
		glVertex2f(-0.5f, 0.5f);
		glEnd();
		glFlush();
	}

在入口函数中，调用 GLUT 工具函数初始化：

- `glutInit` 初始化 GLUT 库；
- `glutCreateWindow` 初始化窗体；
- `glutKeyboardFunc` 初始化键盘事件处理；
- `glutDisplayFunc` 初始化绘图显示事件处理；
- `glutMainLoop` 进入消息循环，直到程序结束；

这就是 GLUT 的一般使用方法，使用这些工具函数将不同平台下的窗体程序逻辑进行封装简化。

`glutReshapeFunc()` 和 `glutDisplayFunc()` 两个 API 注册的回调都和绘图有关，前者在是调整窗口大小后响应调用，可能绘图区大小比例有变化，而 glutDisplayFunc 在窗口从被遮挡中恢复时，或者窗体移动后调用，又或者主动激活重绘 `glutPostRedisplay()`。

如果，使用 Sublime 编辑器，可以将 GLUT 代码目录包含在工程内，这样执行菜单 Goto -> Goto Symbol in Project... 就可以看到还有其它前缀的 glutPost... 的函数：

	/* Display-related functions, see fg_display.c */
	FGAPI void    FGAPIENTRY glutPostWindowRedisplay( int window );
	FGAPI void    FGAPIENTRY glutPostRedisplay( void );

	/* Overlay stuff, see fg_overlay.c */
	FGAPI void    FGAPIENTRY glutPostOverlayRedisplay( void );
	FGAPI void    FGAPIENTRY glutPostWindowOverlayRedisplay( int window );


其中，`glBegin()` 和 `glEnd()` 之间是进行图元绘图，图元是最基本的 OpenGL 图形，`glVertef()` 定义构成图元的顶点坐标，在传统的 OpenGL 2.1 中可以绘制的图元有以下几种，但是在新式的 OpenGL 中这种绘图方法应用比较少，更多是使用着色器：

| 图元类型常量    | 说明    |
| :----------   | :----------   |
| GL_POINTS     | 点 |
| GL_LINES      | 线段    |
| GL_LINE_STRIP | 多段线   |
| GL_LINE_LOOP  | 线圈    |
| GL_TRIANGLES  | 三角形   |
| GL_TRIANGLE_STRIP | 三角形条带 |
| GL_TRIANGLE_FAN   | 三角形扇  |
| GL_QUADS      | 四边形   |
| GL_QUAD_STRIP | 四边形条带 |
| GL_POLYGON    | 多边形(凸)    |

GLU 实用库包含有 43 个函数，函数名的前缀为 glu，它减轻了繁重的 OpenGL 编程工作，封装了 OpenGL API 函数，Glu 函数通过调用核心库的函数，为开发者提供相对简单的用法，实现一些较为复杂的操作。

GLAUX 是 OpenGL 辅助库，包含有 31 个函数，函数名前缀为 aux，已经被新的工具库替代。这部分函数提供窗口管理、输入输出处理以及绘制一些简单三维物体。

GLUT 实用工具库，基本上是用于做窗口界面的，并且是跨平台，所以做简单的 demo 使用 GLUT 就可以了。

在绘图显示函数中，调用 OpenGL 核心函数进行绘图，示例只时简单画了一个色块，但是完整演示了 OpenGL 的绘图流程：

- `glClear` 清理画板；
- `glColor3f` 设置画笔色彩，用浮点表示 R/G/B 各个分量；
- `glBegin` 激活绘图模式；
- `glVertex2f` 绘制一个顶点，连续绘制的顶点封闭的图形可以填充色块；
- `glEnd` 结束绘图；
- `glFlush` 将绘制的画板推送到显示设备显示；


GLUT 界面交互 API：

-  鼠标事件

	glutMotionFunc 和 glutPassiveMotionFunc 是鼠标移动事件，后者叫作被动式，鼠标没有按住按键的移动事件。

	glutMouseFunc 回调函数的 button 和 state 参数关联按键及状态。

	glutEntryFunc 回调函数的 state 参数表示鼠标出入对象的状态，进入或离开。

		/* Mouse buttons. */
		#define GLUT_LEFT_BUTTON                0
		#define GLUT_MIDDLE_BUTTON              1
		#define GLUT_RIGHT_BUTTON               2

		/* Mouse button  state. */
		#define GLUT_DOWN                       0
		#define GLUT_UP                         1

		/* Entry/exit  state. */
		#define GLUT_LEFT                       0
		#define GLUT_ENTERED                    1

- 键盘事件

	glutKeyboardFunc 回调函数只接收键盘僌的字符，控制键的获取通过 `glutGetModifiers()` 函数获取，必要可以使用特殊键事件处理。

		// GLUT API macro definitions -- the glutGetModifiers parameters
		#define  GLUT_ACTIVE_SHIFT                  0x0001
		#define  GLUT_ACTIVE_CTRL                   0x0002
		#define  GLUT_ACTIVE_ALT                    0x0004

- 空闲事件 glutIdleFunc

	设置全局的空闲回调函数，当循环队列处于空闲时则触发该事件，当没有窗口事件到达时，GLUT 程序功能可以执行后台处理任务或连续动画。如果启用，不断调用空闲回调函数，直到有窗口事件发生。当前的窗口和菜单在执行回调之前不会改变，当程序依赖多窗口或菜单时最好不要依赖于当前设定。

- 定时器事件 glutTimerFunc

	在单位时间内触发，time 指定毫秒数，callback 为回调函数指针，value 额外参数值，可用来区分是哪个定时器。可以结合调用 glutPostRedisplay() 来重绘。定时器事件是单次调用的，所以如果要持续产生定时的话，就需要在回调函数内再递归。

关于输入输出的事件处理，参考 FreeGLUT 的 CallbackMaker 示例，它展示如何在多窗口中处理处理鼠标、键盘、游戏手柄事件，`glutGetWindow()` 获取当前窗体的号码牌。还展示了如何使用 `bitmapPrintf` 函数调用 `glutBitmapString` 在窗体上绘制文字，细节放在后面 Laid down 3D world 中再说明。

示例中，还展示了特殊键 Ctrl、Alt、Shift、方向键、F1-F12 功能键等事件处理，`glutSpecialFunc`、`glutSpecialUpFunc`，在特殊键回调函数中，可以接收方向键和 F1-F12 对应的数字编码，但是对于控制键等就要通过另外的 API 获取，`glutGetModifiers()` 返回值可以与相应的常量进行位运算，确定按下了哪些特殊键：

	/* GLUT API macro definitions -- the special key codes: */
	#define  GLUT_KEY_F1                        0x0001
	#define  GLUT_KEY_F2                        0x0002
	#define  GLUT_KEY_F3                        0x0003
	#define  GLUT_KEY_F4                        0x0004
	#define  GLUT_KEY_F5                        0x0005
	#define  GLUT_KEY_F6                        0x0006
	#define  GLUT_KEY_F7                        0x0007
	#define  GLUT_KEY_F8                        0x0008
	#define  GLUT_KEY_F9                        0x0009
	#define  GLUT_KEY_F10                       0x000A
	#define  GLUT_KEY_F11                       0x000B
	#define  GLUT_KEY_F12                       0x000C
	#define  GLUT_KEY_LEFT                      0x0064
	#define  GLUT_KEY_UP                        0x0065
	#define  GLUT_KEY_RIGHT                     0x0066
	#define  GLUT_KEY_DOWN                      0x0067
	#define  GLUT_KEY_PAGE_UP                   0x0068
	#define  GLUT_KEY_PAGE_DOWN                 0x0069
	#define  GLUT_KEY_HOME                      0x006A
	#define  GLUT_KEY_END                       0x006B
	#define  GLUT_KEY_INSERT                    0x006C

前面示例中，只展示了部分初始化函数，GLUT 还有其它多个用于初始化的设置的 API，如错误回调、窗口位置初始化、：

	/* Initialization functions, see fg_init.c */
	#include <stdarg.h>
	glutInitContextVersion( int majorVersion, int minorVersion );
	glutInitContextFlags( int flags );
	glutInitContextProfile( int profile );
	glutInitErrorFunc( void (* callback)( const char *fmt, va_list ap ) );
	glutInitWarningFunc( void (* callback)( const char *fmt, va_list ap ) );

	/* OpenGL >= 2.0 support */
	glutSetVertexAttribCoord3( GLint attrib );
	glutSetVertexAttribNormal( GLint attrib );
	glutSetVertexAttribTexCoord2( GLint attrib );

	/* Mobile platforms lifecycle */
	glutInitContextFunc( void (* callback)( void ) );
	glutAppStatusFunc( void (* callback)( int ) );

	/* Initialization functions, see fglut_init.c */
	glutInit( int* pargc, char** argv );
	glutInitWindowPosition( int x, int y );
	glutInitWindowSize( int width, int height );
	glutInitDisplayMode( unsigned int displayMode );
	glutInitDisplayString( const char* displayMode );

这些方法使用到的常量，其中 GLUT_DOUBLE 是设置`双缓冲模式` double-buffering，在旧式 OpenGL 程序中这是很常用的渲染模式，需要搭配 `glutSwapBuffers()` 函数使用：

	/* Flags for glutInitContextFlags, see fg_init.c */
	#define  GLUT_DEBUG                         0x0001
	#define  GLUT_FORWARD_COMPATIBLE            0x0002

	/* Flags for glutInitContextProfile, see fg_init.c */
	#define GLUT_CORE_PROFILE                   0x0001
	#define GLUT_COMPATIBILITY_PROFILE          0x0002

	/* Display mode bit masks. */
	#define GLUT_RGB                        0
	#define GLUT_RGBA                       GLUT_RGB
	#define GLUT_INDEX                      1
	#define GLUT_SINGLE                     0
	#define GLUT_DOUBLE                     2
	#define GLUT_ACCUM                      4
	#define GLUT_ALPHA                      8
	#define GLUT_DEPTH                      16
	#define GLUT_STENCIL                    32
	#if (GLUT_API_VERSION >= 2)
	#define GLUT_MULTISAMPLE                128
	#define GLUT_STEREO                     256
	#endif
	#if (GLUT_API_VERSION >= 3)
	#define GLUT_LUMINANCE                  512
	#endif


所有事件 API 都有相应的解除 API，名称只多了后缀 Ucall，比如扩展 API 用来解除鼠标滚轮事件，需要使用 `freeglut.h` 头文件，源代码中有 CallbackMaker.c 示例。

	glutMouseWheelFuncUcall( void (* callback)( int, int, int, int, void* ), void* user_data );
	glutMouseWheelFunc( void (* callback)(int wheel_number, int direction, int x, int y) )

这些 API 函数原型可以在 FreeGLUT 头文件中查到，它们基本是无返回参数的 API，翻源代码是个好习惯。

下面的 API 列表来自 GLUT，可以看到函数还带参数变量名字，而 FreeGLUT 中剔除了名字，比较不直观：

	/* GLUT menu sub-API. */
	glutDestroyMenu(int menu);
	int glutGetMenu(void);
	glutSetMenu(int menu);
	glutAddMenuEntry(const char *label, int value);
	glutAddSubMenu(const char *label, int submenu);
	glutChangeToMenuEntry(int item, const char *label, int value);
	glutChangeToSubMenu(int item, const char *label, int submenu);
	glutRemoveMenuItem(int item);
	glutAttachMenu(int button);
	glutDetachMenu(int button);

	/* GLUT window callback sub-API. */
	glutDisplayFunc(void (GLUTCALLBACK *func)(void));
	glutReshapeFunc(void (GLUTCALLBACK *func)(int width, int height));
	glutKeyboardFunc(void (GLUTCALLBACK *func)(unsigned char key, int x, int y));
	glutMouseFunc(void (GLUTCALLBACK *func)(int button, int state, int x, int y));
	glutMotionFunc(void (GLUTCALLBACK *func)(int x, int y));
	glutPassiveMotionFunc(void (GLUTCALLBACK *func)(int x, int y));
	glutEntryFunc(void (GLUTCALLBACK *func)(int state));
	glutVisibilityFunc(void (GLUTCALLBACK *func)(int state));
	glutIdleFunc(void (GLUTCALLBACK *func)(void));
	glutTimerFunc(unsigned int millis, void (GLUTCALLBACK *func)(int value), int value);
	glutMenuStateFunc(void (GLUTCALLBACK *func)(int state));

	glutSpecialFunc(void (GLUTCALLBACK *func)(int key, int x, int y));
	glutSpaceballMotionFunc(void (GLUTCALLBACK *func)(int x, int y, int z));
	glutSpaceballRotateFunc(void (GLUTCALLBACK *func)(int x, int y, int z));
	glutSpaceballButtonFunc(void (GLUTCALLBACK *func)(int button, int state));
	glutButtonBoxFunc(void (GLUTCALLBACK *func)(int button, int state));
	glutDialsFunc(void (GLUTCALLBACK *func)(int dial, int value));
	glutTabletMotionFunc(void (GLUTCALLBACK *func)(int x, int y));
	glutTabletButtonFunc(void (GLUTCALLBACK *func)(int button, int state, int x, int y));

	glutMenuStatusFunc(void (GLUTCALLBACK *func)(int status, int x, int y));
	glutOverlayDisplayFunc(void (GLUTCALLBACK *func)(void));

	glutWindowStatusFunc(void (GLUTCALLBACK *func)(int state));

	glutKeyboardUpFunc(void (GLUTCALLBACK *func)(unsigned char key, int x, int y));
	glutSpecialUpFunc(void (GLUTCALLBACK *func)(int key, int x, int y));
	glutJoystickFunc(void (GLUTCALLBACK *func)(unsigned int buttonMask, int x, int y, int z), int pollInterval);


GLFW 一个轻量级的，开源的，跨平台的 library。支持 OpenGL 及 OpenGL ES，用来管理窗口，读取输入，处理事件等。因为 OpenGL 没有窗口管理的功能，所以很多热心的人写了工具来支持这些功能，比如早期的 GLUT，现在的 FreeGLUT 等。那么 GLFW 的优势就是，提供了更新的 OpenGL API，而 GLUT 不再更新，太老了，最后一个版本将近 20 年了。

FreeGLUT 完全兼容 GLUT，算是代替品，功能齐全，但是 bug 太多，因此 GLFW 应运而生，其文件档也完善。

使用 GLUT 或 GLFW 只是满足了程序上下文基础的需求，只是，不同的显卡公司，也会发布一些只有自家显卡才支持的扩展函数，要想用这扩展 API 函数，不得不去寻找最新的 `glext.h`，而 GLEW 扩展加载库就是解决这些问题的，GLEW 能自动识别你的平台所支持的全部 OpenGL 高级扩展函数。也就是说，只要包含一个 glew.h 头文件，你就能使用 gl、glu、glext、wgl、glx 的全部函数。

现在使用最多的扩展加载库应该是 GLAD，因为功能上更全面，提供多语言支持，多 API 规范支持。



## ==⚡ Laid down 3D world
- [矩阵乘法运算的本质](https://www.zhihu.com/question/21351965)
- [图形学中的基本变换 Basic Transforms](https://zhuanlan.zhihu.com/p/96717729)
- [线性代数的本质](https://www.bilibili.com/video/av79299868)
- [线性代数的本质原声音配音](https://www.bilibili.com/video/BV1s4411S78P/)
- [Grant Sanderson 主页](http://www.3blue1brown.com/about/)
- [数学工作室](http://mathstud.io/)
- [Viewport transform](https://www.khronos.org/opengl/wiki/Vertex_Post-Processing#Viewport_transform)
- [OpenGL 进行曲线、曲面的绘制](https://www.cnblogs.com/OctoptusLian/p/7398041.html)
- [Transformations](https://learnopengl-cn.github.io/01%20Getting%20started/07%20Transformations/)
- [learnopengl.com code repository](https://github.com/JoeyDeVries/LearnOpenGL)
- [ OpenGL Programming Guide - 03 Viewing](http://www.glprogramming.com/red/chapter03.html)

总体来说，OpenGL 编程中，涉及三大部分的坐标关系处理，参考红宝书 OpenGL Programming Guide - 03 Viewing：

- 模型坐标 Model Coordinates 涉及 Model Matrix 变换；
- 世界坐标 World Coordinates 涉及 View Matrix 变换；
- 相机坐标 Camera Coordinates 涉及 Projection Matrix 变换；

在 OpenGL 中使用 `gluLookAt` 改变的是相机坐标，而设置投影方式的 API 改变的是世界坐标系，即视口的变换，至于模型的坐标，顶点通过变换矩阵的转换后就改变了。

正交投影在 OpenGL 中是比较基础的投影变换，软件在算法上使用的 3D 世界，在成像的过程中，需要将立体的世界投射为设备显示的 2D 画面，这就需要一个投射方法。

常见且较容易实现的有`透视法`和`正交投影` Perspective & Orthographic Projection。透视法是西方艺术中基本的构图法，有固定的`消逝点` Vanishing point or line，是一种模拟人类真视野中的观测物体，总结起来就是近大远小。明显的例子，就是平行铁轨，远处两条铁轨会相交于一点。而中国的山水法则不然，没有规则的消逝点或线，也不像正交投影，是一种在计算机上难以实现的构图方法。

`正交投影`通常用在工程制图中，需要比较精确的显示，而不是追求视觉的真实感。形象点说，一个物体特有点向投影平面作垂线，垂线与平面的交点的集合就是需要的投影。与透视法相比，正交投影法一般用于物体不会因为离屏幕的远近而产生大小的变换的情况。

这里的投影是向量的投影，几何的投影，算法实现上需要有一定的线性代数基础、几何学等。

OpenGL API 中的 `glOrtho()` 就是用来创建一个正交平行的视景体，它代表了一个变换矩阵，与 OpenGL 程序的当前矩阵相乘。而 `glFrustum()` 则对应一个透视投影的变换矩阵，`gluPerspective()` 函数封装了 `glFrustum()`。

glOrtho 函数参数表示视景体六面的坐标约束，依次是 left、right、bottom、top，zNear 和
zFar 分别代表 Z 轴上的前后两面约束位置。这个函数简单理解起来，就是创建一个盒子摆在那里。

其中近裁剪平面是一个矩形，靠前方的近端面，矩形左下角三维空间坐标点是 (left，bottom，-near)，
右上角坐标点是 (right，top，-near)；远裁剪平面也是一个矩形，左下角点空间坐标是 (left，bottom，-far)，右上角点是（right，top，-far)。

	void glOrtho (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void glFrustum (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void gluPerspective(GLdouble fovy,GLdouble aspect,GLdouble zNear, GLdouble zFar);

假设有一个半径为 1 的球体，圆心坐标在 (0, 0, 0)，那么，以下两个宽高都是 3 的正交投影盒子，分别会将球体：

	glOrtho(-1.5, 1.5, -1.5, 1.5, -1.5, 1.5);
	glOrtho( 0.0, 1.5, -1.5, 1.5, -1.5, 1.5);

当 left = right，或者 top = bottom，又或者 near = far，那么这个这个视景体至少有一个维度压缩为 0，这样无法显示任何图形。

针对不同的变换，OpenGL 系统中有多个变换矩阵对应，即`矩阵堆栈` Matrix Statck 保存的矩阵数据。所以，在执行矩阵变换前，需要通过 `glMatrixMode` 指定对什么矩阵进行操作：

- `GL_MODELVIEW` 开始对模型视图矩阵堆栈操作，进入此模式后可以输出自己的物体模型。
- `GL_PROJECTION` 开始对投影矩阵堆栈操作，进入此模式后可以为场景增加透视矩阵变换。
- `GL_TEXTURE` 开始对纹理矩阵堆栈操作，进入此模式后可以为模型增加纹理贴图。
- `GL_COLOR` 开始对色彩矩阵堆栈操作，可以变换色彩。

每个矩阵模式下都有一个矩阵堆栈，在 `GL_MODELVIEW` 模式中，堆栈深度至少为 32，在 `GL_PROJECTION` 和 `GL_TEXTURE` 模式中，堆栈深度至少为 2，无论在任何模式下，当前矩阵 Current Matrix 总是该模式下矩阵堆栈中的最顶层矩阵。

OpenGL 整个系统可以理解为一个有限状态机 State Machine，`glMatrixMode()` 所指定的模式就是在改变状态。一般而言，在需要绘制出对象或要对所绘制对象进行几何变换时，需要将变换矩阵设置成`模型视图模式`；而当需要对绘制的对象设置某种投影方式时，则需要将变换矩阵设置成`投影模式`；只有在进行纹理映射时，才需要将变换矩阵设置成`纹理模式`。

操作矩阵时，常常需要 `glLoadIdentity()` 重置当前矩阵为单位矩阵，4 * 4 的单位矩阵来替换当前矩阵。也就是说，无论以前进行了多少次矩阵变换，在该命令执行后，当前矩阵均恢复成一个单位矩阵，即相当于没有进行任何矩阵变换状态。之后对矩阵的变换都相当于是针对模型是位于世界坐标原点位置处进行的。


无论模型如果变换，最终还是要在设备上显示，`glViewport()` 设置视口，中心点坐标 (x, y)，宽度和高度 width、height，深度另外 API 设置。视口设置，即指定 OpenGL 3D 空间中，哪一部分输出到设备上显示出来。`默认视口` 在 Z 轴向其负轴方向看。对于`显示器坐标系统` Screen Coordinate 来说，左上角为原点，而且 Y 轴上下颠倒。那么，对于 OpenGL 空间位置坐标为 (-1, 1) 的一个物体，假定视口长宽为 2，它会显示在屏幕的左上角，也就显示器的 (0,0) 的坐标，但是在软件中编码，不去考虑屏幕的坐标，因为视口背后的逻辑已经进行了一个矩阵变换操作，将屏幕的坐标系统映射到了视口中。

	void glViewport(GLint x, GLint y, GLsizei width, GLsizei height);

	void glDepthRange(GLdouble nearVal, GLdouble farVal);
	void glDepthRangef(GLfloat nearVal, GLfloat farVal);

而通过 `glViewport` 指定的视口区域代表的是一个仿射变换，affine transformation，只是将设备的坐标映射到了软件中 3D 世界的一个剖面上，函数参数 (x, y) 就在指定平移变换，width、height 就是指定大小缩放变换。

OpenGL 中存在多个视口，保存在 Viewport 数组中，视口数量为 [0, GL_MAX_VIEWPORTS)，并且给特定图元使用的视口还可以通过 GS - Geometry Shader 指定。如果 GS 没有指定视口，那么数组中开头那个就是默认的。

其它和视口相关的 API 如下:

	void glViewportIndexedf(GLuint index, GLfloat x, GLfloat y, GLfloat w, GLfloat h)
	void glViewportIndexedfv(GLuint index, const GLfloat *v)
	void glDepthRangeIndexed(GLuint index, GLdouble nearVal, GLdouble farVal)

	void glViewportArrayv(GLuint first, GLsizei count, const GLfloat *v)
	void glDepthRangeArrayv(GLuint first, GLsizei count, const GLdouble *v)

在 FreeGLUT 的 CallbackMaker 示例中，展示了调用 `glutBitmapString` 在窗体上绘制文字，需要结合 API 指定光栅化位置：

	glRasterPos2i ( 10, glutGet ( GLUT_WINDOW_HEIGHT ) - 20 );  /* 10pt margin above 10pt letters */
	glutBitmapString(void *font, const unsigned char *string); 

光栅坐标设置 API 有 `2i`、`2f`、`2d`、`2dv` 等后缀形式，i - integer、f - float、d-double，带 v 的表示用一个值表示和个坐标分量，这是二维坐标，还有 3 维坐标，4 维坐标的对应 API。这些 API 设置的是 OpenGL 世界坐标，会受到投影变换和视景体裁剪的影响，也就是说，光栅位置设置的世界坐标，是在经过 ModelView，Projection，和 ViewPort 等变换的基础上设置的。如果坐标没有在视景体之内，你可以理解为 camera 看不见，那么这个坐标是无效的，底层的 glDrawPixel 也不会进行绘制。`glWindowPos()` 也可以指定光栅位置，它使用窗口坐标，不进行矩阵变换、裁剪、或纹理坐标生成。

你可以通过 `glGet` 来获取当前光栅坐标是否有效：

	glGetBooleanv(GL_CURRENT_RASTER_POSITION_VALID, &if_valid);

OpenGL 世界空间的图像投影到屏幕后，就有一个转换关系，可以利用这个关系来反向求解屏幕上的点对应的 3D 空间坐标，矩阵和模型视图矩阵变换非常复杂，可以利用以下 API：

- `glWindowPos` 函数允许你通过设置屏幕坐标来改变光栅坐标，但需 GLEW 库。
- `glUnProject` 计算出屏幕坐标对应的世界坐标。


在 OpenGL 对视图变换并不会改变模型坐标，而是移动或缩放摄像机的镜头，从不同的方位观察模型，常用`glLookAt` 函数设置观察者视角的变换矩阵。

	void gluLookAt( GLdouble eyeX,
					GLdouble eyeY,
					GLdouble eyeZ,
					GLdouble centerX,
					GLdouble centerY,
					GLdouble centerZ,
					GLdouble upX,
					GLdouble upY,
					GLdouble upZ);

glLookAt 会定义一个视图矩阵，成像点为 (eyeX, eyeY, eyeZ)，目标物体对应 center 坐标方向，镜像上位方向对应 up 坐标，这三点的坐标确定了的的摄像机的姿态。视图变换矩阵与当前矩阵相乘，获得视图矩阵，再该模型视图矩阵左乘模型，就会获得在观察位置上模型的状态，就是我们在屏幕上最终看到的模型的状态。

gluLookAt 用来定义观察者(相机)的状态，包括观察者在世界坐标系中所处的位置、看向世界坐标系中的方向，可以理解为眼睛所看向的方向、观察者头部的朝向（可以在一个平面上360°旋转）。

如果没有调用 glLookAt 设置视图矩阵，默认情况下，相机会被设置为位置在世界坐标系原点，指向 Z 轴负方向，朝上向量为（0，1，0）。


在 2D 和 3D 系统中，有三个基本坐标系统，2D 的笛卡尔坐标系就是一个十字坐标系，而 3D 空间中，任意给定 X 和 Y 轴，对于不同朝向的 Z 轴分为左手系 left-handed 和右手系 right-handed。

始终需要明确的一点是 OpenGL 世界坐标系是`右手坐标系` right-hand system ，在二维屏幕上，屏幕水平方向是 X 轴方向，向右为正，屏幕竖起方向是 Y 轴方向，向上为正，垂直于屏幕的方向是 Z 轴方向，从屏幕里往外为正。即右手中指向自己表示 Z 轴、食指竖起向上表示 Y 轴、母指向右表示 X 轴。即使手腕怎么转动，右手系统这种轴向关系是主要的参考。

- OpenGL 使用右手系，默认窗体中心为原点，左下角为负，右上角为正；
- 屏幕鼠标的 2D 坐标左上角为原点，右正角为正；

所以，在 OpenGL 空间的坐标处理第一个问题就是屏幕 2D 坐标到 OpenGL 的坐标变换，也就是 Window 到 ViewPort 的坐标统一。从上面的条件可知，屏幕的坐标其实就是视口坐标按 X 轴反转再平移到右上角。将窗口坐标还原操作就是，scale(1, -1, 1)，translate(-1, -1, 0)。

对于一个给定的点，可以通过一个矩阵变换将其旋转和平移。OpenGL 已经提供 API 做这些简单的变换，在 API 内部设置好基本的矩阵，只需要通过 API 输入主要参数即可以，例如，给 `glRotatef` 指定旋转角度和旋转轴，注意后缀 `f` 表示 float，当然还在 `d` 表示 double：

- `glRotatef` (GLfloat angle, GLfloat x, GLfloat y, GLfloat z);
- `glScalef` (GLfloat x, GLfloat y, GLfloat z);
- `glTranslatef` (GLfloat x, GLfloat y, GLfloat z);

旋转 API 中的 x, y, z 为对应轴的布尔值，表示按此轴旋转。想象一下，从坐标（0，0，0）即原点，引出一条线到（1,0,0），这条线就是旋转轴，用右手握住这条线，右手大拇指指向和旋转轴同方向，四个手指的弯曲指向即是物体旋转方向。

以 `glTranslatef(-1, -1, 0)` 为例，它表示 OpenGL 将坐标从原点，即窗口中心位置向左下移动 1 个单位。那么新的图形绘制就按新的坐标原点为参考进行绘图，即以左下角 1 个单位的位置为原点。但是，只要视口没有进行变换，那么程序在窗口渲染的图像还是按坐标变换前的位置显示。

OpenGL 渲染管线中涉及变换的对象有很多，模型变换 ModelView Transformation 和投影变换 Projection Transformation 是比较常用到的，前面已经讲到通过 `glMatrixMode` 可以切换变模式。而模型，即 `GL_MODELVIEW` 模式，就是默认的变换操作对象，后面还要进行 `GL_PROJECTION` 对视口进行变换。搭配使用的还有 `glPushMatrix()`，`glPopMatrix()` 这两个函数，前者将当前的矩阵压栈，相当做了一个备份，后者将备份的矩阵还原回来。注意了，无论是什么模式下的矩阵变换，当前矩阵总是当前模式的栈顶那一个矩阵。


三维坐标系两种习俗，左手坐标系和右手坐标系，它们的重点不是在于 z 轴标注的是哪根，而是三个方向的组合。

左手系统 left-hand system 中指向右表示 X 轴，食指向前表示 Z 轴，拇指竖起向上表示 Y 轴。同样，手腕的转动并不影响三轴的组合关系，和右手系统是两个不同的组合。因为，无论如何转动手腕，两系统的三轴方向不可能保持三轴一致，最多只能两轴一致，余下一轴相反方向。

右手系在`向量叉乘` Cross product 中还有个妙用，设拇指和食指是两个垂直的向量 `a`、`b`，那么 `a x b` 结果就在中指的方向上并且三指垂直。换句话说，将两向量起点放在一起，那么一向量和它左侧的向量做叉乘，结果就和两个向量构成的平面垂直且指向观察者。

`长度` Length 就是距离，对于一个空间点到原点的距离就是 sqrt( x² + y² + z² )。

`向量点积` Dot product 也叫内积 inner product，将 `b` 归一化为长度为 1 的单位向量，那么 `a · b` = length(A)cos(θ)，即 `a` 在 `b` 上的投影长度，计算时，通常是将各轴分开相乘再相加，A.xB.x +A.yB.y +A.zB.z。 当夹角为 90° 投影为 0，当夹角为 0° 即等于 `a` 的模。


点积还具有对称性 symmetry，在线性代数的本质 Essence of linear algebra 系列视频中，用动画很好地解析了这一点。

假设 `u · v`，对称性即无论是 `v` 在 `u` 上作投影再乘，还是 `u` 在 `v` 上作投影再乘，结果都是一样的。
这一点不太好理解，但又至关重要。

`向量相加` Addition `a + b` 几何意义就是沿着一个向量方向移动其长度，再继续沿着其它向量做相同的移动，最后，原点指向最终移动到的位置就是结果的向量。计算按各轴分别相加，`(sum(x),sum(y),sum(z))`。

`向量相减` Substraction `a - b` 的几何意义就是由 `b` 点指向 `a` 点的向量。换个说法，向量 `a` 减去在左侧的向量 `b`，结果就会出现在 `a` 的右侧，因为负号对于向量就是反转方向再相加。

向量加减问题和平行四边形关联的，两个向量作为平行四边形的边，加减的结果就是对角线，相加取原点出发的对角线。 

3D 中用 4x4 的矩阵表示一个变换，这个矩阵有能力表征所有需要的变化，这样为了向量乘矩阵在数学上的正确性，向量必须是 4 维向量。一个三维向量坐标 [x y z] 表示，而一个`齐次坐标` Homogeneous Coordinate 的 3D 向量用一个四维坐标 [x y z w]表示时，这就称为齐次坐标表示方法。在齐次坐标中，最后一维坐标 w 称为比例因子。

在 OpenGL 二维坐标点当作三维坐标点，所有点都用齐次坐标来描述，统一作为三维齐次点来处理。齐次点具有下列几个性质：

- w=0 是一个方向，齐次点 (x, y, z, 0) 表示此点位于某方向的无穷远处。
- w=1 是一个位置，三维空间点 (x, y, z) 和二维平面点 (x,y) 的齐次坐标分别为(x, y, z, 1)、(x, y, 0, 1)。
- 其它值，可能正确，最好知道是什么作用。齐次点坐标 (x, y, z, w) 即三维空间点坐标 (x/w, y/w, z/w)。


在线性几何中，连续相乘的变换矩阵可以理解为图形变换的叠加。假设当前矩阵为单位矩阵，然后先乘以一个表示旋转的矩阵 R，再乘以一个表示移动的矩阵 T，最后得到的矩阵再乘上每一个顶点的坐标矩阵 v。经过变换得到的顶点坐标就是 (RT)v。按矩阵乘法的结合率，(RT)v = R(Tv)，换句话说，实际上是先进行移动，然后进行旋转。即：实际变换的顺序与代码中写的顺序是相反的。由于先移动后旋转和先旋转后移动得到的结果很可能不同，初学的时候需要特别注意这一点。OpenGL 之所以这样设计，是为了得到更高的效率。


为了直观感受这些基础内容，需要祭出 OpenGL 中经典的茶壶神仙：

- glutSolidTeapot() 实体 3D 茶壶模型。
- glutWireTeapot() 线框 3D 茶壶模型。

GLUT API 中，提供演示用的模型除了茶壶，共有 9 种常见的几何体，如 Cube、Cone 等，它们在各种 3D 建模软件中都会出现。

- Cone 圆锥体
- Tetrahedron 四面体
- Cube 正方体
- Dodecahedron 正十二面体
- Icosahedron 正二十面体
- Octahedron 正八面体
- Sphere 球体
- Torus 圆环体
- Teapot 茶壶

代码修改自红宝书示例：

```cpp
// OpenGL Programming Guide Example 3-1 : Transformed Cube: cube.c

#include <iostream>
#include <cstdarg>
#include <freeglut.h>

using namespace std;

/*
 Key set
 1 - 9 models 
	 1 Cone
	 2 Cube
	 3 Dodecahedron
	 4 Icosahedron
	 5 Octahedron
	 6 Sphere
	 7 Teapot
	 8 Tetrahedron
	 9 Torus
 f/g solid/wired
 a - left
 s - down
 d - right
 w - up
 j - forward, mouse wheel
 k - backward, mouse wheel
 l - left view
 r - right view
 t - top view
 b - back view
*/

#define KEY_ESC             0x1b  // [ESC,27]

enum Surface {SurfaceSolid, SurfaceWired };

Surface WiredOrSolid = SurfaceWired;

float _distance = 5;
float _center_x = 0;
float _center_y = 0;
char _model = '1';

static void drawModel()
{
	float size = 1;
	float radius = 1;
	double base = 1;
	double height = 2;
	double width = 2;
	double innerRadius = 1;
	double outerRadius = 2;
	int slices = 85;
	int stacks = 86;
	int sides = 87;
	int rings = 88;

	switch (_model)
	{
		case '3':
		case '4':
		case '5':
		glColor3f (0.5, 0.8, 0.5); break;
		case '2':
		case '6':
		case '7':
		glColor3f (1.0, 0.3, 0.5); break;
	}

	if(WiredOrSolid==SurfaceWired)
	{
		 switch (_model)
		 {
			case '1': glutWireCone( base, height, slices, stacks ); break;
			case '2': glutWireCube( size ); break;
			case '3': glutWireDodecahedron( ); break;
			case '4': glutWireIcosahedron( ); break;
			case '5': glutWireOctahedron( ); break;
			case '6': glutWireSphere( radius, slices, stacks ); break;
			case '7': glutWireTeapot( size ); break;
			case '8': glutWireTetrahedron( ); break;
			case '9': glutWireTorus( innerRadius, outerRadius, sides, rings ); break;
		 }
		 return;
	}
	switch(_model)
	{
		 case '1': glutSolidCone( base, height, slices, stacks ); break;
		 case '2': glutSolidCube( size ); break;
		 case '3': glutSolidDodecahedron( ); break;
		 case '4': glutSolidIcosahedron( ); break;
		 case '5': glutSolidOctahedron( ); break;
		 case '6': glutSolidSphere( radius, slices, stacks ); break;
		 case '7': glutSolidTeapot( size ); break;
		 case '8': glutSolidTetrahedron( ); break;
		 case '9': glutSolidTorus( innerRadius, outerRadius, sides, rings ); break;
	}
}


static void initLights()
{
	glClearColor(0.0f, 0.0f, 0.7f, 1.0f);

	GLfloat ambientLight[]  = {0.2f,  0.2f,  0.2f,  1.0f};//环境光源
	GLfloat diffuseLight[]  = {0.9f,  0.9f,  0.9f,  1.0f};//漫反射光源
	GLfloat specularLight[] = {1.0f,  1.0f,  1.0f,  1.0f};//镜面光源
	GLfloat lightPos[]      = {50.0f, 80.0f, 60.0f, 1.0f};//光源位置
 
	glEnable(GL_LIGHTING);                                //启用光照
	glLightfv(GL_LIGHT0, GL_AMBIENT, ambientLight);       //设置环境光源
	glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuseLight);       //设置漫反射光源
	glLightfv(GL_LIGHT0, GL_SPECULAR, specularLight);     //设置镜面光源
	glLightfv(GL_LIGHT0, GL_POSITION, lightPos);          //设置灯光位置
	glEnable(GL_LIGHT0);                                  //打开第一个灯光
 
	glEnable(GL_COLOR_MATERIAL);                          //启用材质的颜色跟踪
	glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE);    //指定材料着色的面
	glMaterialfv(GL_FRONT, GL_SPECULAR, specularLight);   //指定材料对镜面光的反应
	glMateriali(GL_FRONT, GL_SHININESS, 100);             //指定反射系数
}


void init(void) 
{
	glClearColor (0.0, 0.0, 0.0, 0.0);
	glShadeModel (GL_FLAT);
	initLights();
}

static void bitmapPrintf (const char *fmt, ...)
{
	static char buf[256];
	va_list args;

	va_start(args, fmt);
#if defined(WIN32) && !defined(__CYGWIN__)
	(void) _vsnprintf (buf, sizeof(buf), fmt, args);
#else
	(void) vsnprintf (buf, sizeof(buf), fmt, args);
#endif
	va_end(args);
	glutBitmapString ( GLUT_BITMAP_TIMES_ROMAN_24, (unsigned char*)buf ) ;
}

void display(void)
{
	glClear (GL_COLOR_BUFFER_BIT);
	glColor3f (1.0, 1.0, 1.0);

	/* set raster position acording to viewport for bitmap string */
	// glWindowPos2f ( 0, 0 );
	glRasterPos2f ( -1, 1 );
	bitmapPrintf("center(%.2f,%.2f,%.2f) model[%c] surface[%c]\n", 
		_center_x, _center_y, _distance,
		_model, (WiredOrSolid == SurfaceWired? "W":"S"));

	/* clear the matrix */
	glLoadIdentity ();

	/* viewing transformation */
	gluLookAt (
		_center_x, _center_y, _distance, 
		0.0, 0.0, 0.0, 
		0.0, 1.0, 0.0);
	/* modeling transformation */ 
	glScalef (1.0, 1.0, 1.0);

	drawModel();
	glFlush ();
}

void reshape (int w, int h)
{
	glViewport (0, 0, (GLsizei) w, (GLsizei) h); 
	glMatrixMode (GL_PROJECTION);
	glLoadIdentity ();
	glFrustum (-1.0, 1.0, -1.0, 1.0, 1.5, 20.0);
	glMatrixMode (GL_MODELVIEW);
}

static void onMouseWheel ( int wheel_number, int direction, int x, int y )
{
	_distance += direction;
	glutPostRedisplay();
}

void onKey(unsigned char key, int x, int y) 
{
	switch(key)
	{
		case 'a': _center_x -= 1; break;
		case 's': _center_y -= 1; break;
		case 'd': _center_x += 1; break;
		case 'w': _center_y += 1; break;
		case 'j': _distance -= 1; break;
		case 'k': _distance += 1; break;
		case 't': _center_y = 5; _center_x = 0; _distance = 0; break;
		case 'r': _center_y = 0; _center_x = 5; _distance = 0; break;
		case 'l': _center_y = 0; _center_x = -5; _distance = 0; break;
		case 'b': _center_y = 0; _center_x = 0; _distance = -5; break;

		case '1': 
		case '2': 
		case '3': 
		case '4': 
		case '5': 
		case '6': 
		case '7': 
		case '8': 
		case '9': _model = key; break;
		case 'f': WiredOrSolid = SurfaceSolid; break;
		case 'g': WiredOrSolid = SurfaceWired; break;

		case KEY_ESC:
		case 'x': exit(EXIT_SUCCESS); break;
	}
	glutPostRedisplay();
}

int main(int argc, char** argv)
{
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGBA);
	glutInitWindowSize (500, 500); 
	glutInitWindowPosition (100, 100);
	glutCreateWindow (argv[0]);
	glutKeyboardFunc(onKey);
	glutMouseWheelFunc(onMouseWheel);
	init ();
	glutDisplayFunc(display); 
	glutReshapeFunc(reshape);
	glutMainLoop();
	return 0;
}
```




## ==⚡ OpenGL API
- [OpenGL 4.5 Reference](https://www.khronos.org/registry/OpenGL-Refpages/gl4/)
- [OpenGL 2.1 GLX & GLU Reference](https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/)
- [OpenGL API Wiki](https://www.khronos.org/opengl/wiki/GLAPI/glViewport)
- [Primitive 图元](https://www.khronos.org/opengl/wiki/Primitive)
- [Tessellation shader 细分着色器](https://www.khronos.org/opengl/wiki/Tessellation)
- [Vertex Specification 顶点规范](https://www.khronos.org/opengl/wiki/Vertex_Specification)
- [Primitive Assembly 图元组装](https://www.khronos.org/opengl/wiki/Primitive_Assembly)
- [GLAD Loader-Generator](https://github.com/Dav1dde/glad)
- [OpenGL Extensions Viewer](http://www.realtech-vr.com/glview/)
- [OpenGL Reference Card](https://www.opengl.org/sdk/docs/reference_card/opengl44-quick-reference-card.pdf)
- [OpenGL Reference Page](https://www.khronos.org/registry/OpenGL-Refpages/gl4/)
- [OpenGL Specification]()
- [OpenGL Registry 扩展的文档](https://www.khronos.org/registry/OpenGL/index_gl.php)
- [OpenGL 版本历史和发展](https://www.cnblogs.com/vertexshader/articles/2917540.html)
- [Nvidia OpenGL 扩展规范](https://developer.nvidia.com/nvidia-opengl-specs)
- [OpenGL Extension](https://www.khronos.org/opengl/wiki/OpenGL_Extension)
- [Load OpenGL Functions](https://www.khronos.org/opengl/wiki/Load_OpenGL_Functions)
- [Windows OpenGL API](https://docs.microsoft.com/en-us/windows/win32/api/_opengl/)
- [Rendering Pipeline Overview](https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview)

OpenGL API 中使用的后缀与数据类型关系：

| Suffix    | Data Type | C-Language Type   | OpenGL Type Definition |
| :-------- | :-------- | :-------- | :-------- |
| `b`   | 8-bit integer | signed char       | GLbyte |
| `s`   | 16-bit integer    | short         | GLshort |
| `i`   | 32-bit integer    | int or long   | GLint, GLsizei |
| `f`   | 32-bit floating-point | float     | GLfloat, GLclampf |
| `d`   | 64-bit floating-point | double    | GLdouble, GLclampd |
| `ub`  | 8-bit unsigned integer| unsigned char | GLubyte, GLboolean |
| `us`  | 16-bit unsigned integer| unsigned short   | GLushort |
| `ui`  | 32-bit unsigned integer| unsigned int or unsigned long | GLuint, GLenum, GLbitfield |

OpenGL 基本图元是构成几何体的基本要素，OpenGL 在版本发展过程中，支持的图元类型也有一些变化。

以下是各版本 OpenGL 支持的图元类型：

| GL2.1 | GL3.3 | GL4.5 | 基本图元类型    |
| :---- | :---- | :---- | :----------   |
| ✓     | ✓     | ✓     | GL_POINTS     | 点 |
| ✓     | ✓     | ✓     | GL_LINES      | 线段 |
| ✓     | ✓     | ✓     | GL_LINE_STRIP | 多段线 |
| ✓     | ✓     | ✓     | GL_LINE_LOOP  | 线圈 |
| ✓     | ✓     | ✓     | GL_TRIANGLES  | 三角形 |
| ✓     | ✓     | ✓     | GL_TRIANGLE_STRIP | 三角形条带 |
| ✓     | ✓     | ✓     | GL_TRIANGLE_FAN   | 三角形扇 |
| ✓     | ✄     | ✄     | GL_QUADS      | 四边形 |
| ✓     | ✄     | ✄     | GL_QUAD_STRIP | 四边形条带 |
| ✓     | ✄     | ✄     | GL_POLYGON    | 多边形(凸) |
| -     | ✓     | ✓     | GL_LINE_STRIP_ADJACENCY   |  |
| -     | ✓     | ✓     | GL_LINES_ADJACENCY    |  |
| -     | ✓     | ✓     | GL_TRIANGLE_STRIP_ADJACENCY   |  |
| -     | ✓     | ✓     | GL_TRIANGLES_ADJACENCY    |  |
| -     | -     | ✓     | GL_PATCHES    | |

OpenGL 2.1 是旧式立即模式中使用的类型，即通过 `glBegin()` 函数中指定的类型枚举值。

OpenGL 3.3 中使用的是 core profile 模式，对之前版本中可能引起效率低下的图元类型进行了精简，同时为了配合着色语言，添加了新的类型。相比之前的版本，删除了`四边形`和`多边形`，由于四边形和多边形不能保证所有组成它们的点一定共面，同时新增了一些应用在 Geomtry Shader 中的几何类型。

在最新版本的 OpenGL 4.5 支持的图元类型中，与 OpenGL 3.3 基本一致，添加了 `GL_PATCHES` 一项而已。

在模型算法的分析中，模型有时候会要求`图元的三角化`，需要设置 GL_TRIANGLES 类型，三角形类型相对简单直观，下面对于如何将基本几何类型转换为三角形做一些说明。

关于转换到三角形，在 OpenSceneGraph 中已经提供了一个类来处理，这个类是 osg::TriangleFunctor。

不能转换为三角类型的图元有以下类型，或者转换后没有意义：

- GL_POINTS
- GL_LINES
- GL_LINE_STRIP
- GL_LINE_LOOP

`三角形条带` GL_TRIANGLE_STRIP 的构成到最少 3 个点，正好 3 个点就是一个 GL_TRIANGLE，每增加 1 个点会和之前已有的两个点构成新的三角形，依次类推。也就是说当三角形条带 GL_TRIANGLE_STRIP 由 n 个点组成时，构成的三角形个数是 n -2 个，相同情况下 TRIANGLES 的三角形个数是 n / 3，可以看出当有大量点共用时，三角形条带相比三角形可以节省许多存储空间。

假设起始点的坐标序列号是 0，新增的点依次往后增加，那么`三角形条带`转换的算法如下：

- 当所有点数量小于或者等于 2 时，无法构成三角条带；
- 点号从 0 开始，点号n)是偶数时，构成的三角形是 [ n, n+1, n+2]
- 点号从 0 开始，点号n)是奇数时，构成的三角形是 [n, n+2, n+1]


| Primitive type              | GL_FIRST_VERTEX_CONVENTION | GL_LAST_VERTEX_CONVENTION           |
| :--------------             | :--------------            | :--------------                     |
| GL_POINTS                   | i                         | i                                  |
| GL_LINES                    | 2i - 1                    | 2i                                 |
| GL_LINE_LOOP                | i                         | i + 1 如果 i 小于顶点数，否则为 1 |
| GL_LINE_STRIP               | i                         | i + 1                              |
| GL_TRIANGLES                | 3i - 2                    | 3i                                 |
| GL_TRIANGLE_STRIP           | i                         | i + 2                              |
| GL_TRIANGLE_FAN             | i + 1                     | i + 2                              |
| GL_LINES_ADJACENCY          | 4i - 2                    | 4i - 1                             |
| GL_LINE_STRIP_ADJACENCY     | i + 1                     | i + 2                              |
| GL_TRIANGLES_ADJACENCY      | 6i - 5                    | 6i - 1                             |
| GL_TRIANGLE_STRIP_ADJACENCY | 2i - 1                    | 2i + 3                             |


`四边形` GL_QUADS 转换为三角形，每一个四边形转换为两个三角形：

	[n, n+1, n+2, n+3] = [n, n+1, n+2] + [n, n+2, n+3]

`四边形条带` GL_QUAD_STRIP 绘制规则如下：

- 第一段四边形的`起始边`由顶点数组中前两个点决定，边的矢量方向由这两点的延伸方向决定；
- 起始边的`对边`由顶点数组中其后的两个点决定，如果起始边和对边的矢量方向不同，那么四边形会扭曲，也就是说正确的四边形条带，两组顶点的方向应该平行。
- 其后的绘制起始边的方向由上一段决定。比如，第一条边两点 v0 -> v1 的向量为竖起向下，那么，接下来的 v2 -> v3 也应该竖直向下。

`四边形条带`转换到三角形的算法是，相邻三点组成三角图形，依次往后移动一个点位：

	[n, n+1, n+2]
	[n+1, n+3, n+2]
	[n+2, n+3, n+4]
	[n+3, n+5, n+4]
	...

`三角形扇` GL_TRIANGLE_FAN 和`多边形` GL_POLYGON 转换为三角形的方式是共用一个顶点，比如 5 个顶点构成的三角扇形，第一个顶点 v0 是共用的，于是转换的三角形如下：

	[v0, v1, v2, v3, v4] = [v0, v1, v2] + [v0,v2,v3] + [v0, v3, v4]

多边形在转换的过程中方式很多，三角形扇的这种转换方式也适用于多边形转换。


新式的 OpenGL 扩展 API 的注册信息由 ARB - Architectural Review Board 团队管理，扩展 API 的命名与关联主体参考：

| Extension Prefix  | Extension Vendor  |
| :-------- | :-------- |
| ARB   | OpenGL® ARB 核准扩展 |
| NV    | NVIDIA 公司 |
| NVX   | NVIDIA 公司 体验版扩展 |
| ATI   | ATI Technolgies Inc. |
| 3DLABS    | 3DLABS Inc. |
| SUN   | Sun Microsystems Inc. |
| SGI   | Silicon Graphics Inc. |
| SGIX  | Silicon Graphics Inc.体验版扩展 |
| SGIS  | Silicon Graphics Inc.体验版扩展 |
| INTEL | Intel 公司 |
| 3DFX  | 3dfx Interactive. |
| IBM   | International Business Machines 公司 |
| MESA  | Mesa3D 图形库扩展 |
| GREMEDY   | Graphic Remedy, Ltd. |
| OML   | Khronos Group Inc. API: OpenML® |
| OES   | Khronos Group Inc. API: OpenGL® ES |
| PGI   | Portland Group Inc. |
| I3D   | 3DLABS Inc. 旧称 Intense3D|
| INGR  | Intergraph 公司 |
| MTX   | Matrox Electronic Systems Ltd. |

与平台关联的 API 前缀：

| Extension Prefix  | Extension Platform |
| :-------- | :-------- |
| WGL_EXT, WGL_ARB, WGL_ATI, WGL_NV | Microsoft Corporation. WGL = Windows OpenGL |
| GLX_EXT, GLX_ARB, GLX_ATI, GLX_NV | X-Window-based platforms. |
| AGL       | Apple Inc. AGL = Apple OpenGL |


在 OpenGL 上下文创建后，执行扩展加载 Loading OpenGL Functions 是初始化 OpenGL 很重要的一个步骤。这个步骤通常使用加载库完成，在不平台下涉及到不同的系统底层 API。

- Windows `wglGetProcAddress`
- Linux `glXGetProcAddress` `glXGetProcAddressARB`
- Mac OSX `getProcAddress`

官方 OpenGL Registry 提供扩展注册信息可以查询到扩展函数的原型信息。扩展加载库通常需要使用 Windows 旧式 OpenGL 1.1 的 `gl.h`，OpenGL 1.2 之后的扩展头 `glext.h`，还有 GLX 和 WGL 的头文件 `glxext.h`、`wglext.h`。

OpenGL Loading Library，如 GL3W、GLEW 或 GLAD 等扩展加载库已经处理好这些细碎的工作，它们可以检測对应的扩展是否被支持，在运行时加载新式的 OpenGL API。

使用多语言支持的 GLAD 表示通过 GLAD 就可以使用 GL/GLES/EGL/GLX/WGL 等 API。如果对 OpenGL API 加载感兴趣，可以参数 David Herberth 开发的 GLAD 源代码。

或下载 OpenGL Extensions Viewer 直观的查看支持的 OpenGL 的特性和扩展，这个软件也有多个平台的版本号。

使用 GLEW 也可以提供 API 信息，编译 GLEW 源代码后，会有 glewinfo 和 visualinfo 两个程序，它们会输入 API 检测信息列表。

	---------------------------
		GLEW Extension Info
	---------------------------

	GLEW version 2.1.0
	Reporting capabilities of pixelformat 3
	Running on a Intel(R) UHD Graphics 620 from Intel
	OpenGL version 4.6.0 - Build 26.20.100.7639 is supported

	GL_VERSION_1_1:                                                OK 
	---------------

	GL_VERSION_1_2:                                                OK 
	---------------
	  glCopyTexSubImage3D:                                         OK
	  glDrawRangeElements:                                         OK
	  glTexImage3D:                                                OK
	  glTexSubImage3D:                                             OK
	...

OpenGL 官网文档：

- OpenGL Registry 有上百个 OpenGL 扩展的文档。
- OpenGL Reference Page 里面有各个函数的用法。
- OpenGL Reference Card 能帮助你宏观地了解 OpenGL 的全部主要函数。
- OpenGL Specification 事实上是扩展文档的集合，只是也是很的具体和实用。

在 Khronos Group 接手 OpenGL 之后，OpenGL 的 API 进化方向也渐渐地和 Direct3D 一致了，其深层次原因是因为硬件进化趋势的一致性，在 API 的使用上 OpenGL 也渐渐地和 Direct3D 更加的相似了，在 OpenGL 4.4 环境，基本可以还原出和 Direct3D 11 一样的接口，从 Direct3D 11 移植到 OpenGL 程序不再是一件难事。


## ==⚡ GLFW Hello
- [GLAD](http://glad.dav1d.de/)
- [GLAD Loader-Generator](https://github.com/Dav1dde/glad)
- [GLFW](https://www.glfw.org/download.html)
- [GLFW Quick Guide](https://www.glfw.org/docs/latest/quick_guide.html)
- [GLEW - OpenGL Extension Wrangler](http://glew.sourceforge.net/)
- [GL3W - Simple OpenGL core profile loading](https://github.com/skaslev/gl3w)
- [Vulkan](https://www.khronos.org/vulkan/)
- [Morden OpenGL Step by Step](http://ogldev.atspace.co.uk/)
- [learnopengl.com](https://learnopengl.com/)
- [learnopengl.com cn](https://learnopengl-cn.github.io/)
- [learnopengl.com code repository](https://github.com/JoeyDeVries/LearnOpenGL)
- [Vertex Rendering](https://www.khronos.org/opengl/wiki/Vertex_Rendering)
- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification)
- [General OpenGL](https://www.khronos.org/opengl/wiki/Category:General_OpenGL)
- [Modern OpenGL Series](https://www.tomdalling.com/blog/category/modern-opengl/)
- [Joe Groff - An intro to modern OpenGL](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html)
- [OpenGL Programming Guide - RedBook](http://www.glprogramming.com/red/)
- [OpenGL 4.6 Core Profile](https://www.khronos.org/registry/OpenGL/specs/gl/glspec46.core.pdf)
- [Process Explorer](https://download.cnet.com/Process-Explorer/3000-2094_4-10223605.html)
- [Process Explorer v16.32](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)

作为新一代的第三方库，GLFW 已经不再像 GLUT 那样打游击了。

与传统的 OpenGL API 绘图方式不同，新一代图形软件在更高的抽象层次上优化图形绘制逻辑，并且，从代码编写的角度看，需要使用更底层的数据逻辑实现图形的渲染。相比传统的 OpenGL 程序，需要更多了解计算机图形学的实现原理，需要更多的线性代数、几何学的知识。

所以进行 GLFW 编程后，就需要以全新的视角去编写 OpenGL 程序，GLUT 那个时代已经算是过去式了。

GLEW 支持目前流行的各种操作系统 Windows, Linux, Mac OS X, FreeBSD, Irix, Solaris 等等。

在现代 OpenGL 中，我们更偏向于使用着色器，因为 GPU 没有默认的顶点或片段着色器，程序中就必须定义至少一个顶点着色器和一个片段着色器。出于这个原因，刚开始学习现代 OpenGL 的时候可能会非常困难，因为在你能够渲染自己的第一个三角形之前就需要了解一大堆关于着色器的知识。


GLEW 是一个跨平台的 C++ 扩展库，基于 OpenGL 图形接口。使用 OpenGL 的朋友都知道，Window 目前只支持 OpenGL 1.1 的涵数，但 OpenGL 发展更新了好几个主版本号了，要使用这些 OpenGL 扩展 API 的高级特性，就必须下载最新的扩展。而 GLEW 和 GLAD 这些扩展加载库就是用来处理这些扩展 API 的加载的，GLAD 它相当 GLEW 的升级版。

另外，不同的显卡公司，也会发布一些只有自家显卡才支 持的扩展函数，你要想用这数涵数，不得不去寻找最新的 glext.h，有了 GLEW 扩展库，你就再也不用为找不到函数的接口而烦恼，因为 GLEW 能自动识 别你的平台所支持的全部 OpenGL 高级扩展涵数。也就是说，只要包含一个 glew.h 头文件，你就能使用 gl、glu、glext、wgl、glx 的全部函数，编译出来的程序只需要依赖 `glfw.dll` 动态链接库而不需要 `glut.dll` 或  `freeglut.dll`，而底层 API 还是需要 `opengl.dll` 或 `glu.dll`。

可以使用 `Process Explorer` 工具查看程序加载的 DLL。点击菜单 view -> Lower Pane View，其下有 DLLS 和 Handles，选中即可。同时，需要勾选 Show Lower Pane 才能显示出来。Ctrl-D，和 Ctrl-L 快捷键。

作为入门教程，我推荐阅读 GLFW 自带的示例，另外 opengl-tutorial.org 也是新式 OpenGL 程序非常好的入门系列教程，主要分成初级、中级两部分：

- Basic tutorials

	- Tutorial 1 : Opening a window
	- Tutorial 2 : The first triangle
	- Tutorial 3 : Matrices
	- Tutorial 4 : A Colored Cube
	- Tutorial 5 : A Textured Cube
	- Tutorial 6 : Keyboard and Mouse
	- Tutorial 7 : Model loading
	- Tutorial 8 : Basic shading

- Intermediate tutorials

	- Tutorial 9 : VBO Indexing
	- Tutorial 10 : Transparency
	- Tutorial 11 : 2D text
	- Tutorial 12 : OpenGL Extensions
	- Tutorial 13 : Normal Mapping
	- Tutorial 14 : Render To Texture
	- Tutorial 15 : Lightmaps
	- Tutorial 16 : Shadow mapping
	- Tutorial 17 : Rotations
	- Tutorial 18 : Billboards & Particles


GLFW 主要功能是负责窗口、输入输出等上下文的管理，需要使用 OpenGL 扩展 API 时就需要其它库来加载扩展，常常和 GLAD 搭配使用，它相当 GLEW 的升级版。使用扩展加载库是新式 OpenGL 开发与旧式的一个明显差别，某些平台，特别是 Windows 自持有 DirectX 就只提供旧版本 OpenGL 头文件，就怕 OpenGL 死断气。

因此，需要使用一个 Extension loader library，来加试扩展 OpenGL API，最新的最佳方案就是 GLAD，通过它可以很好地管理 OpenGL 和 OpenGL ES 的扩展。它可以使 OpenGL 基础渲染变得十分简单，只需要简单四个步骤就可以完成基础渲染：

- 初始化 GLAD 库，加载所有 OpenGL 函数指针。
- 创建着色器并附加到着色器程序。
- 构建缓冲对象并附加到顶点属性。
- 使用着色器程序，利用渲染接口将缓冲对象按照指定图元类型渲染出来。

首先，打开 GLAD 主页，这是一个挑选 OpenGL 扩展 API 的配置程序，提供以下配置选项：

- Language 提供 C/C++/D/Nim/Pacal 等多种语言支持
- Specification 可选 OpenGL/WGL/EGL/GLX 等 API 规范
- API Version 选择版本
- Profile 选择模式
- Extensions 选择要使用的扩展 API
- Options 其它选项
	- Generate a loader 勾选生成加载器，并在生成的 `gladLoadGL` 执行加载器函数 `gladLoadGLLoader`。 
	- Omit KHR 勾选忽略生成 khrplatform.h，这是 Khronos 平台规范类型定义文件。
	- Local Files 只生成本地，不生成目录结构。

生成的文件基本有四个，其中一个是所有文件的压缩包：

	glad.c  2020-07-03 14:06:43.814865  152.9 kB
	glad.h  2020-07-03 14:06:43.814865  283.9 kB
	glad.zip    2020-07-03 14:06:43.818865  447.4 kB
	khrplatform.h   2020-07-03 14:06:43.734868  10.3 kB

在文件的头部分注解部分，有此次配置信息，此次只选择了 `GL_ARB_cl_event` 这个扩展 OpenGL 4.6 API，使用兼容模式，不生成头文件目录结构：

	OpenGL loader generated by glad 0.1.33 on Fri Jul  3 14:06:43 2020.

	Language/Generator: C/C++
	Specification: gl
	APIs: gl=4.6
	Profile: compatibility
	Extensions:
		GL_ARB_cl_event
	Loader: True
	Local files: True
	Omit khrplatform: False
	Reproducible: False

	Commandline:
		--profile="compatibility" --api="gl=4.6" --generator="c" --spec="gl" --local-files --extensions="GL_ARB_cl_event"
	Online:
		https://glad.dav1d.de/#profile=compatibility&language=c&specification=gl&loader=on&api=gl%3D4.6&extensions=GL_ARB_cl_event


GLAD 生成的初始化接口如下，注意 `get_proc` 就是加载 API 的函数：

	int gladLoadGL(void) {
		int status = 0;

		if(open_gl()) {
			status = gladLoadGLLoader(&get_proc);
			close_gl();
		}

		return status;
	}
	
	static void* get_proc(const char *namez) {
		void* result = NULL;
		if(libGL == NULL) return NULL;

	#if !defined(__APPLE__) && !defined(__HAIKU__)
		if(gladGetProcAddressPtr != NULL) {
			result = gladGetProcAddressPtr(namez);
		}
	#endif
		if(result == NULL) {
	#if defined(_WIN32) || defined(__CYGWIN__)
			result = (void*)GetProcAddress((HMODULE) libGL, namez);
	#else
			result = dlsym(libGL, namez);
	#endif
		}
		return result;
	}

	int gladLoadGLLoader(GLADloadproc load) {
		GLVersion.major = 0; GLVersion.minor = 0;
		glGetString = (PFNGLGETSTRINGPROC)load("glGetString");
		if(glGetString == NULL) return 0;
		if(glGetString(GL_VERSION) == NULL) return 0;
		find_coreGL();
		load_GL_VERSION_1_0(load);
		load_GL_VERSION_1_1(load);
		...

		if (!find_extensionsGL()) return 0;
		load_GL_3DFX_tbuffer(load);
		load_GL_AMD_debug_output(load);
		load_GL_AMD_gpu_shader_int64(load);
		...
	}


这个加载函数通常由 OpenGL 程序的入口函数去调用，然后就是加载各种 API 函数：

	gladLoadGL(glfwGetProcAddress);

任何的 OpenGL 接口调用都必须在初始化 GLAD 库后才可以正常访问。

在新版本 OpenGL 中，有了强大的扩展 API 作支持，不再需要像以往一样绘图流程，现代的绘图方式已经进入到渲染管线的概念 Render Pipeline，即从代码发出的指令和数据一起通过计算机总线流向显示设备，并最终显示出期待的图形，这一路下来经过的电子信号流通路径。当这条管线越长，来回走动越频繁，携带的数据越多，那么图形处理软件的性能就越低下。在管线中，可以使用着色器来进行绘图，也就是给出绘图程序片断和数据就可以绘制相应的图形了。

所以，随着接口的升级，不断引入新的功能，尝试以更优化的方式去实现图形绘制。


## ==⚡ Shader Hello 着色器入门
- [Rendering Pipeline Overview](https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview)
- [OpenGL Shading Language](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [Shader 着色器](https://www.khronos.org/opengl/wiki/Shader)
- [Geometry Shader Examples](https://www.khronos.org/opengl/wiki/Geometry_Shader_Examples)
- [Fragment Shader](https://www.khronos.org/opengl/wiki/Fragment_Shader)
- [Hello Traiangle](https://learnopengl.com/Getting-started/Hello-Triangle)
- [Getting started Shader](https://learnopengl-cn.github.io/01%20Getting%20started/05%20Shaders/)
- [GLM - OpenGL Mathematics](https://github.com/g-truc/glm)
- [Shader Language 简介](https://zhuanlan.zhihu.com/p/85017873)
- [Shader 学习应该如何切入？](https://zhuanlan.zhihu.com/p/108752286)
- [Journey 沙丘渲染 shader 实现](https://zhuanlan.zhihu.com/p/33890890)
- [真实角色渲染 - 眼睛](https://zhuanlan.zhihu.com/p/73251979)
- [深入GPU硬件架构及运行机制](https://www.cnblogs.com/timlly/p/11471507.html)
- [GPU Programming Guide G80](https://developer.download.nvidia.cn/GPU_Programming_Guide/GPU_Programming_Guide_G80.pdf)

着色器就是高效绘图的代名词，通过可编程着色器语言 Shader Language 执行高效的图形渲染代码。现在，计算机图形学已经发展到实时渲染 Real-Time Rendering，还有基于物理原理渲染 PBR - Physically Based Rendering，在效果和性能上取得巨大的成功，其中，不得不提到开源的 Blender，它实现了一个实时渲染引擎 Eevee，让 3D 场景的制作过程像在玩 3D 游戏，并且获取了不错的光线模拟追踪 Ray Tracing 效果。

Shader 代码跟传统的 C++ 等语言类似，需要将面向人类的高级语言 GLSL、HLSL、CGSL 通过编译器转成面向机器的二进制指令，二进制指令可转译成汇编代码，以便技术人员查阅和调试。

由高级语言编译成汇编指令的过程通常是在离线阶段执行，以减轻运行时的消耗。

在执行阶段，CPU 端将 shader 二进制指令经由 PCI-e 推送到 GPU 端，GPU 在执行代码时，会用 Context 将指令分成若干 Channel 推送到各个 Core 的存储空间。

对现代 GPU 而言，可编程的阶段越来越多，包含但不限于：顶点着色器 Vertex Shader、曲面细分控制着色器 Tessellation Control Shader、几何着色器 Geometry Shader、像素/片元着色器 Fragment Shader、计算着色器 Compute Shader、...

三大主流的 Shader 语言是：

- HLSL - Direct3D High Level Shader Language 高级着色语言
- GLSL - OpenGL Shader Language 
- CGSL - Nvidia C for Graphic

OpenGL 着色器语言 GLSL 是一种 CLike 语言，与 C 语言非常类似。它包含一些针对向量和矩阵操作的有用特性。着色器的开头总是要声明版本，接着是声明输入、输出变量、uniform 和 main 函数。每个着色器的入口点都是 main 函数，在这个函数中我们处理所有的输入变量，并将结果输出到输出变量中。

`Uniform` 是从 CPU 向 GPU 中的着色器发送数据的一种方式，和顶点属性有些不同。首先，uniform 是全局的 Global，意味着 uniform 变量必须在每个着色器程序对象中都是独一无二的，而且它可以被着色器程序的任意着色器在任意阶段访问。第二，无论你把 uniform 值设置成什么，uniform 会一直保存它们的数据，直到它们被重置或更新。

用 `glGetUniformLocation` 查询 uniform 变量值，通过 `glUniform4f` 函数设置 uniform 值。注意，查询 uniform 不要求使用过着色器程序，但是更新一个 uniform 之前必须先使用程序，即调用 `glUseProgram`，因为，它是在当前激活的着色器程序中设置 uniform。

GLSL 中的向量是一个可以包含有 1、2、3 或者 4 个分量的容器，分量的类型可以是默认基础类型，也可以是下面的形式，n 代表分量的数量：

| 类型    | 含义    |
| :---- | :---- |
| vecn  | 包含 n 个 float 分量的默认向量 |
| bvecn | 包含 n 个 bool 分量的向量 |
| ivecn | 包含 n 个 int 分量的向量 |
| uvecn | 包含 n 个 unsigned int 分量的向量 |
| dvecn | 包含 n 个 double 分量的向量 |

大多数时候，我们使用 `vecn`，因为 `float` 足够满足大多数要求了。

使用 Shader 进行渲染时，需要创建两个基础对象 shader 对象和 program 对象，简要来说，主要包括以下六个步骤：

- 创建一个顶点 shader 对象和一个片段 shader 对象
- 将源码附加到每一个shader对象上
- 编译 shader 对象
- 创建一个 program 对象
- 将编译后的 shader 对象附加到这个 program 对象上
- 链接这个 program 对象，然后执行着色渲染

在 OpenGL ES 中，每个 program 对象需要一个顶点 shader 对象和一个片段 shader 对象，不能多也不能少，这点和桌面 OpenGL 不一样。program 对象被链接到一个最终的可执行程序中，然后就可以用来进行渲染了。

着色器是各自独立的小程序，每个着色器都有输入和输出，着色器之间可以上下串联，这也是渲染管道的一层含义。GLSL 定义了 `in` 和 `out` 关键字专门来实现输入和输出，只要一个输出变量与下一个着色器阶段的输入匹配，它就会传递下去，但在顶点和片段着色器中会有点不同。顶点着色器从顶点数据中直接接收输入，接收的是一种特殊形式的输入，否则就会效率低下。

OpenGL Shading Language 定义了以下几个着色器阶段，不同阶段使用的着色器功能也不同：

| 着色器阶段     | 对应宏定义     |
| :-----------  | :-----------  |
| Vertex Shaders    | GL_VERTEX_SHADER |
| Tessellation Control and Evaluation Shaders   | GL_TESS_CONTROL_SHADER, GL_TESS_EVALUATION_SHADER. (requires  GL 4.0 or ARB_tessellation_shader)|
| Geometry Shaders  | GL_GEOMETRY_SHADER |
| Fragment Shaders  | GL_FRAGMENT_SHADER |
| Compute Shaders   | GL_COMPUTE_SHADER. (requires GL 4.3 or ARB_compute_shader) |

顶点数据是图形的基础，而图形软件的最终目的是要通过大量的数据去绘制出期望的图形效果，现代图形软件中，渲染管线 Pipeline 是最基础的概念，图形软件优化就是管线各个细节的优化 Pipeline Optimization。

以下是一些基础的概念：

- `VBO` - Vertex Buffer object 在显卡存储空间中开辟出的一块内存缓存区用来储存顶点数据，增加顶点进入 GPU 效率的方法。它们是可以存储在显存中的缓冲区，以最快的 GPU 速度去访问数据。

- `VAO` - Vertex Arrary Object 顶点数组对象，定义了 VBO 顶点属性，和着色器变量起连接作用。

- `EBO` - Element Buffer Object 索引缓冲对象，或者称 `IBO` - Index Buffer Object，相当于 OpenGL 中的顶点数组的概念，解决顶点重用问题，可以减少内存空间浪费，提高执行效率。当需要使用重复的顶点时，通过顶点的位置索引来调用顶点，而不是对重复的顶点信息重复记录，重复调用。

在没有 VBO 的图形绘制，如 `glDrawArrays` 都是从本地内存推送顶点数据到给 OpenGL 核心，这样中间就会间隔着频繁的 CPU -> GPU 数据对拷操作，增大开销，从而降低效率。

使用 VBO 可以直接将顶点数据缓存到 GPU 开辟的一段内存中，直接从显存中获取而不必再走一遍主机内存，这样就能提升绘制的效率。

以下是常用的 OpenGL 图形概念：

- `render` 渲染
- `ray tracing` 光线跟踪
- `model` 模型
- `vertex` 顶点
- `shader` 着色器
- `shader stage` 着色阶段
- `vertex shader` 顶点着色器
- `texture mapping` 纹理映射，将 2D 图像纹理映射到 3D 模型上
- `pixel` 像素
- `framebuffer` 帧缓存
- `viewport` 视口
- `clipping` 剪切
- `transfromation matrix` 变换矩阵
- `depth test Or z-buffering` 深度测试
- `stencil test` 模版测试
- `tessellation shader` 细分着色器
- `discard` 片元的丢弃，我们觉得不应该继续绘制某个片元，在片元着色器中终止这个片元的处理。
- `blending` 融合


在新版的 OpenGL 4.3 的图形渲染管线工作流程如下：

- `Vertexs` 顶点数据是一些点的坐标集合，顶点一般是 2D 或 3D 的点坐标组成。
- `Primitives` 基本图元包括点，线段，三角形等，是构成实体模型的基本单位，需要在传入顶点数据的同时通知 OpenGL 这些顶点组成什么图形。
- `Vertex Shader` 顶点着色器程序包含对一些顶点属性或数据的基本处理。
- `Primitive Assembly` 基本图元装配，把所有输入的顶点数据作为输入，输出制定的基本图元。
- `Geometry Shader` 几何着色器，输入基本图元形式的顶点的集合，通过产生新顶点构造出新的基本图元来生成其他形状。
- `Tessellation Shaders` 细分着色器，基本图元细分为更多的基本图形，创建出更加平滑的视觉效果。
- `Rasterization` 光栅化即像素化，把细分着色器输出的基本图形映射为屏幕上网格的像素点，生成供片段着色器处理的片段 Fragment，光栅化包含一个剪裁操作，会舍弃超出定义的视窗之外的像素。
- `Fragment Shader` 片段着色器，的主要作用是计算出每一个像素点最终的颜色，通常片段着色器会包含 3D 场景的一些额外的数据，如光线，阴影等。在这个阶段里会使用深度测试，通常也称作 z-buffering，和模板测试 stencil test 来决定一个片元是否是可见的。如果一个片元成功地通过了所有激活的测试，那么它就可以被直接绘制到帧缓存中了，更新它对应的像素的颜色值，也可能包括深度值。如果开启了 blending 融合模式，那么片元的颜色会与该像素当前的颜色相叠加，形成一个新的颜色值并写入帧缓存中。

OpenGL 官方文档 OpenGL Rendering Pipeline 也基本是按流程组织的，如下：

- Vertex Specification
	- Vertex Rendering
	- Primitive
- Vertex Processing
	- Vertex Shader
	- Tessellation
	- Geometry Shader
- Vertex Post-Processing
	- Transform Feedback
	- Clipping
- Primitive Assembly
	- Face Culling
- Rasterization
- Fragment Shader
- Per-Sample Processing
	- Scissor Test
	- Stencil Test
	- Depth Test
	- Blending
	- Logical Operation
	- Write Mask

GLFW 官方源代码中的 simple.c 例程，按步骤演示了如何用 GLFW 编写程序，这个例程使用了顶点着色器绘制一个多彩三角型，程序大概流程：

- Including the GLFW header
- Initializing and terminating GLFW
- Setting an error callback
- Creating a window and context
- Making the OpenGL context current
- Checking the window close flag
- Receiving input events
- Rendering with OpenGL
- Reading the timer
- Swapping buffers
- Processing events

示例使用了 GLAD 生成的配置，需要将以下两个代码编译在一起：

	glfw-3.3.2/examples/simple.c
	glfw-3.3.2/deps/glad_gl.c

使用到的头文件主要是 GLFW 和 GLAD 的头文件，`glad_gl.c` 是 GLAD 扩展加载器的实现。

	glfw-3.3.2/deps/linmath.h
	glfw-3.3.2/deps/GLFW/glfw3.h
	glfw-3.3.2/deps/glad/...

其中 `linmath.h` 是部分着色器方法的实现，定义了基本的向量运算方法和变换矩阵，如 `vec2`、`vec3` 等，可以当作现成的线性代数库使用，而 GLM - OpenGL Mathematics 则是一个更全面的数学库。

而对于一个使用着色器的图形程序，其要点是：

- Vertex input 顶点数据的输入

		static const struct
		{
			float x, y;
			float r, g, b;
		} vertices[3] =
		{
			{ -0.6f, -0.4f, 1.f, 0.f, 0.f },
			{  0.6f, -0.4f, 0.f, 1.f, 0.f },
			{   0.f,  0.6f, 0.f, 0.f, 1.f }
		};

- attribute, varying 顶点属性设置

- Vertex/Fragment Shader 实现两个基本的着色器

	编写、编译、管理着色器是件麻烦事，像在示例中直接将着色器代码写在程序代码中只适合做演示。实践中，我们会写一个类或函数来加载着色器程序文件，从硬盘读取着色器，然后编译并链接它们，并对它们进行错误检测。

		static const char* vertex_shader_text =
		"#version 110\n"
		"uniform mat4 MVP;\n"
		"attribute vec3 vCol;\n"
		"attribute vec2 vPos;\n"
		"varying vec3 color;\n"
		"void main()\n"
		"{\n"
		"    gl_Position = MVP * vec4(vPos, 0.0, 1.0);\n"
		"    color = vCol;\n"
		"}\n";

		static const char* fragment_shader_text =
		"#version 110\n"
		"varying vec3 color;\n"
		"void main()\n"
		"{\n"
		"    gl_FragColor = vec4(color, 1.0);\n"
		"}\n";

	着色器这里用的是 attribute、varying 关键字，也可以使用 in、out 关键字。

	在顶点着色器中，`attribute` 定义的是变量用的输入数据。 `varying` 是输出给片元着色器用的，或是下一个阶段的着色器，

	在片元着色器中，不能使用 `attribute` 关键字定义变量，因为 attribute 只能在顶点着色器中使用。而 `varying` 是上个着色器阶段传入的片元，一般都会经过顶点之间的插值得到的。

- create shader & compile & link

	下一个步骤就是调用 `glCreateShader` 创建着色器对象，并使用 `glCompileShader` 编译着色器，再使用 `glAttachShader` 将着色器附加到程序对象上，最后链接着色器程序。

		vertex_shader = glCreateShader(GL_VERTEX_SHADER);
		glShaderSource(vertex_shader, 1, &vertex_shader_text, NULL);
		glCompileShader(vertex_shader);

		fragment_shader = glCreateShader(GL_FRAGMENT_SHADER);
		glShaderSource(fragment_shader, 1, &fragment_shader_text, NULL);
		glCompileShader(fragment_shader);

		program = glCreateProgram();
		(program, vertex_shader);
		glAttachShader(program, fragment_shader);
		glLinkProgram(program);




# =🚩 PBR - Physically Based Rendering 
- [Real-Time Rendering 4th Edition](http://www.realtimerendering.com/)
- [Real-Time Rendering 3rd 提炼总结](https://github.com/QianMo/Real-Time-Rendering-3rd-CN-Summary-Ebook)
- [Physically Based Rendering: From Theory to Implementation](http://www.pbr-book.org/3ed-2018/contents.html)
- [Physically Based Rendering: From Theory to Implementation](https://github.com/mmp/pbrt-v3)
- [PBR 白皮书 - 核心知识体系总结与概览](https://www.cnblogs.com/lancidie/p/13215371.html)
- [PBR 白皮书 - 核心理论与渲染光学原理总结](https://www.cnblogs.com/lancidie/p/13215337.html)
- [Milo Yip - JavaScript 玩转计算机图形学 光线追踪入门](https://www.cnblogs.com/miloyip/archive/2010/03/29/1698953.html)


在物理上，`光` light 可以视为电磁波 electromagnetic wave 或光子 photon。在计算机图形学的领域里，通常只会用到光的部份物理性质，例如，假设光是直线前进，不受因引力影响，忽略光的速度，通常不考虑衍射 diffraction、干涉 interference 等等。因为，计算机图形学不是物理学，目标是要渲染视觉上美的事物，只要模拟到某个合适层次的模型，有时候还为了美观而采用非物理非真实的方式。

`光源` light source 放射 emit 光，而非散射 scatter 或吸收 absorb 光。

最简单的光源模型，是方向光源 directional light，又称平行光源。这种光源假设光在无限远放射，在任何位置，放射方向都是一致的，可以模拟类似太阳的光线，虽然实际上太阳并非无限远。

方向光源的方向，通常用光向量 light vector 去表示。为方便计算，通常是单位向量，并且和光的放射方向相反。

方向光源的另一个属性，是指定其照明的量。量度光的科学叫`幅射度量学` radiometry，本文暂且略过其细节。这里只用到光的其中一个量度方式，就是每秒通过每单位面积平面的光子总能量，称为`幅照度` irradiance。

光的颜色，是由不同频率的光波及其频谱，在人类视觉上形成的。详细内容又涉及光度测定 photometry、比色法 colorimetry、视觉感知 visual perception、甚至哲学等。CG 中常见的光由红绿蓝三个颜色通道 color channel。光源的幅照度也可以用这三通道来描述，但注意，光的幅照度范围是零到无限大，并不是 [0,1] 或 [0,255]。

点光源 point light，又称全向光源/泛光源/泛光灯(omnidirectional light/omni light)，是指一个无限小的点，向所有光向平均地散射光。其光向量，就是表面位置往点光源位置的方向。

学习物理时，经常有这种往所有方向发射的情况，例如引力、声音等。类比可知，接收到的能量和距离的关系，是成平方反比定律的。

当 I 为幅射强度(intensity, radiant intensity)，当 r=1 时，幅射强度和幅照度相等。

1/r^2 通常称为衰减 attenuation 系数。有时候会为各种需求，写一些非物理正确的衰减系数。

现实中，并不存在理想的点光源，放射的光在不同方向是有差异的。聚光灯 spot light 是常用的一种模式，它在点光源的基础上，加入圆锥形的范围。聚光灯可以有不同的模型，如 Direct3D 固定功能管道 fixed-function pipeline 用的模型。

聚光灯有一个主要方向s，再设置两个圆锥范围，称为内圆锥和外圆锥，两圆锥之间的范围称为半影 penumbra。聚光灯可计算一个聚光灯系数，范围为 [0,1]，代表某方向的放射比率。内圆锥中系数为 1 (最亮)，内圆锥和外圆锥之间系数由 1 逐渐变成 0。另外，可用另一参数 p 代表衰减 falloff，决定内圆锥和外圆锥之间系数变化。



# =🚩 STB 资源管理库
- [Sean T. Barrett 资源管理库](https://github.com/nothings/stb)
- [SOIL - Simple OpenGL Image Library](http://www.lonesock.net/soil.html)

GitHub 开源的 stb 库，作者名字的缩写 Sean T. Barrett，此库仅包含头文件，除 stretchy_buffer.h 外，其它所有文件以前缀 stb 开头，每个头文件的作用及用法在每个头文件的开始部分都作了介绍。此开源库为 public domain 或 MIT 协议。

下面仅对与图像相关的头文件的作用及使用进行简单的说明，当仅需要将图像数据载入内存、或进行缩放操作、或保存图像时使用stb会非常方便，因为仅需要 include 一个或三个头文件即可，不需要额外图像处理库的依赖，如 libjpeg、libpng、opencv 等：

- `stb_image.h`：载入图像

	支持的图像文件格式包括 JPEG、PNG、TGA、BMP、PSD、GIF、HDR、PIC、PNM，使用到的函数主要为 `stbi_load`，参数依次为：
	
	- 图像文件名 filename
	- 获取图像宽 x
	- 获取图像高 x
	- 获取图像通道数 channels_in_file
	- 指定期望的通道数 desired_channels，若为 0 则不做颜色空间变换
	
	此函数正常返回图像数据指针，否则返回 NULL；

- `stb_image_resize.h`：图像缩放

	stbir_resize_uint8 函数参数依次为：

	- 输入图像数据指针 input_pixels
	- 输入图像宽 input_w
	- 输入图像高 input_h
	- 输入图像步长 input_stride_in_bytes，若为 0 则为宽 x 通道数
	- 输出图像数据指针 output_pixels
	- 输出图像宽 output_w
	- 输出图像高 output_h
	- 输出图像步长 output_stride_in_bytes，若为 0 则为宽 * 通道数
	- 图像通道数 num_channels，输入与输出一致 

	此函数正常返回 1，否则返回 0；

- `stb_image_write.h`：保存图像

	支持的图像文件格式包括 PNG、BMP、TGA、JPG、HDR，使用到的函数主要为 `stbi_write_png`，还有 bmp、tga、hdr、jpg 对应版本，参数依次为：

	- 保存图像名 filename
	- 图像宽 w
	- 图像高 h
	- 图像通道数 comp
	- 图像数据指针 data
	- 步长 stride_in_bytes，若为 0 则为宽 * 通道数，仅限 png
	- 图像质量 quality，取值范围 1 ~ 100，仅限 jpg
	
	此函数正常返回非 0 值，否则返回 0。

OpenGL 期待原点（0,0）位于左下角，而通常一张图片的原点位于左上角，stb 在加载图片之前调用：

	stbi_set_flip_vertically_on_load(true);


LNK2019 stbi_load() 和 stbi_image_free() 问题，在 stb_image.h 里面添加：

	#define STB_IMAGE_IMPLEMENTATION 1


读写示例：

	#include <stdio.h>

	#define STB_IMAGE_WRITE_IMPLEMENTATION
	#include "stb_image_write.h"

	#define STB_IMAGE_IMPLEMENTATION
	#include "stb_image.h"

	int main(int argc, char** argv)
	{
	    int w, h, n;

	    //rgba
	    //load image
	    unsigned char *data = stbi_load("rgba.png", &w, &h, &n, 0);

	    printf("%d, %d, %d\n", w, h, n);

	    //change pixel

	    //rgba,write 10 red pixel at line 11
	    for (int dx = 0; dx < 10; ++dx)
	    {
	        data[n * w * 10 + dx * n + 0] = 255;
	        data[n * w * 10 + dx * n + 1] = 0;
	        data[n * w * 10 + dx * n + 2] = 0;
	        data[n * w * 10 + dx * n + 3] = 255;
	    }


	    //write image
	    stbi_write_png("write.png", w, h, n, data, w * n);

	    stbi_image_free(data);


	    return 0;
	}

从内存读取：

	void load_mem()
	{
	    FILE* inFile = fopen("rgba.png", "rb");
	 
	    fseek(inFile, 0, SEEK_END);
	    unsigned int bufSize = ftell(inFile);
	    fseek(inFile, 0, SEEK_SET);
	 
	    unsigned char* buf = new unsigned char[bufSize];
	    fread(buf, bufSize, 1, inFile);
	 
	    fclose(inFile);
	 
	    int w = 128;
	    int h = 128;
	    int n = 4;
	     
	 
	    unsigned char *rgba = stbi_load_from_memory(buf, bufSize, &w, &h, &n, 0);
	 
	    stbi_write_png("test_from_memory.png", w, h, n, rgba, w * n);
	 
	    stbi_image_free(rgba);
	 
	    delete[] buf;
	}



以下为测试代码 test_stb.cpp：

	#include "funset.hpp"
	#include <iostream>
	#include <vector>
	#include <string>
	 
	#define STB_IMAGE_IMPLEMENTATION
	#include "stb_image.h"
	#define STB_IMAGE_RESIZE_IMPLEMENTATION
	#define STB_IMAGE_RESIZE_STATIC
	#include "stb_image_resize.h"
	#define STB_IMAGE_WRITE_IMPLEMENTATION
	#define STB_IMAGE_WRITE_STATIC
	#include "stb_image_write.h"
	 
	 
	int test_stb_image()
	{
	#ifdef _MSC_VER
		const std::string files_path {"E:/GitCode/OCR_Test/test_data/"};
	#else
		const std::string files_path {"test_data/"};
	#endif
	 
		const std::vector<std::string> images_name{"marge.jpg", "lena.png"};
	 
		for (auto name : images_name) {
			const std::string image = files_path + name;
	 
			// load image
			int x, y, channels_in_file, desired_channels = 3;
			unsigned char* data = stbi_load(image.c_str(), &x, &y, &channels_in_file, desired_channels);
			if (!data) {
				fprintf(stderr, "fail to read image: %s\n", image.c_str());
				return -1;
			}
			fprintf(stdout, "image: %s, x: %d, y: %d, channels_in_file: %d, desired_channels: %d\n", name.c_str(), x, y, channels_in_file, desired_channels);
	 
			// resize image
			int width_resize = x * 1.5, height_resize = y * 1.4;
			unsigned char* output_pixels = (unsigned char*)malloc(width_resize * height_resize * desired_channels);
			int ret = stbir_resize_uint8(data, x, y, 0, output_pixels, width_resize, height_resize, 0, desired_channels);
			if (ret == 0) {
				fprintf(stderr, "fail to resize image: %s\n", image.c_str());
				return -1;
			}
	 
			// write(save) image
			const std::string save_name_png = image + ".png";
			const std::string save_name_jpg = image + ".jpg";
	 
			ret = stbi_write_png(save_name_png.c_str(), width_resize, height_resize, desired_channels, output_pixels, 0);
			if (ret == 0) {
				fprintf(stderr, "fail to write image png: %s\n", image.c_str());
				return -1;
			}
	 
			ret = stbi_write_jpg(save_name_jpg.c_str(), width_resize, height_resize, desired_channels, output_pixels, 90);
			if (ret == 0) {
				fprintf(stderr, "fail to write image jpg: %s\n", image.c_str());
				return -1;
			}
	 
			free(data);
			free(output_pixels);
		}
	 
		return 0;
	}



# =🚩 Dear imgui
- [Gmm++ Library](http://getfem.org/gmm/)
- [Dear imgui](https://github.com/ocornut/imgui)
- [Dear ImGUI 在线演示](https://greggman.github.io/doodles/glfw-imgui/out/glfw-imgui.html)
- [ImGUI 能成为 GUI 的未来吗？](https://blog.csdn.net/csdnnews/article/details/90746003)
- [Could ImGUI be the future of GUIs?](https://games.greggman.com/game/imgui-future/)
- [GeeXLab Tutorials](https://www.geeks3d.com/geexlab/tutorials/)
- [Google Skia 2D graphic library](https://github.com/google/skia)
- [libigl - A simple C++ geometry processing librarys](https://libigl.github.io/)
- [Eigen Library for Matrix Algebra in C++](https://hackage.haskell.org/package/eigen)
- [DirectX Libraries for MinGW](https://sourceforge.net/projects/mingwdx/)


请按 [VCpkg 开源库管理工具](https://www.jianshu.com/p/0a7823beb1aa) 配置 VCpkg 模块管理工具，安装：

	vcpkg install opengl:x64-mingw
	vcpkg install glew:x64-mingw
	vcpkg install glfw3:x64-mingw
	vcpkg install imgui:x64-mingw
	vcpkg install eigen:x64-mingw
	vcpkg install libigl:x64-mingw

IMGUI - Immediate Mode Graphical User interface，简称 Dear imgui 是 github 上 star 最多的 GUI 框架，Blizzard, Google, Nvidia, Ubisoft 等赞助，易学，易用，好用，功能也不弱，能够胜任绝大部分的桌面应用程序开发，甚至商业程序。

对于游戏开发者来说，在开发过程中，加入 UI 的支持是不可或缺的一环，不过想要自己动手敲代码实现 UI 实属一件难事，后来 ImGUI 诞生为开发者们带来直接拿来用般的便利。

GeeXLab 是基于 imgui 开发的一款界面原型编辑器：

>GeeXLab is a cross-platform proto-engine. It can be used for 2D/3D programming, game development, creative coding or prototyping. GeeXLab is based on Lua, Python, OpenGL, Vulkan and Direct3D 12.

在 imgui.cpp 提供的文档中，提到此框架的目标：

	 MISSION STATEMENT
	 =================

	 - Easy to use to create code-driven and data-driven tools.
	 - Easy to use to create ad hoc short-lived tools and long-lived, more elaborate tools.
	 - Easy to hack and improve.
	 - Minimize screen real-estate usage.
	 - Minimize setup and maintenance.
	 - Minimize state storage on user side.
	 - Portable, minimize dependencies, run on target (consoles, phones, etc.).
	 - Efficient runtime and memory consumption (NB- we do allocate when "growing" content e.g. creating a window,.
	   opening a tree node for the first time, etc. but a typical frame should not allocate anything).

	 Designed for developers and content-creators, not the typical end-user! Some of the weaknesses includes:
	 - Doesn't look fancy, doesn't animate.
	 - Limited layout features, intricate layouts are typically crafted in code.


大多数使用ImGUI风格的程序员发现，使用 ImGUI 来创建用户界面比使用传统的保留模式图形用户界面（GUI）要容易得多。而且性能会得到显著地提高。

典型的面向对象的 GUI 框架是一个保留模式系统，在该系统中，你基本上创建了一个 GUI 框架控件(widget)的“场景图”（窗口、网格、滑块、按钮、复选框等等）。你将你的数据复制到这些控件中，等待事件(event)或回调（callback）在控件被编辑时接收到通知。然后查询控件的新值并将其复制回你的数据中。

这种模式几乎应用于所有的 GUI 系统中，Windows、WFP、HTML DOM、Apple UIKit、Qt，你能叫出名字的 99% 的 GUI 框架都属于保留模式的，面向对象的，“场景图”式的GUI。

这种模式的GUI存在的问题是：

- 必须编写大量代码来管理 GUI 对象的创建和销毁。

	设想你有一个滚动列表，你经常需要创建 100 多个或 1000 多个GUI控件（就像HTML，创建一个TR，然后是 TD，然后是每个 TD 的内容，等等）。如果数据真的很大，你最终不得不创建一些控件的虚拟窗口，要么在用户滚动时创建新的窗口并且删除旧窗口，要么将旧窗口从后面拉出来，然后将其添加到前面。其结果是：你需要写的代码太多了。

- 创建和销毁对象导致UI反应迟缓。

	由于GUI对象的创建和销毁速度很慢（通常它们是非常大的对象），因此通常需要编写大量的代码来帮助寻找和设计解决方案，以最小化需要创建和销毁的对象数量。

	想想 React 如何使用虚拟 DOM 来识别差异，然后将这些差异应用到实际的 GUI 控件和 DOM 树/场景图中。

- 你必须编制数据传入/传出控件。

	这就需要先将数据复制到控件中，然后对事件做出响应，并将控件中的新数据读回。需要编写更多的代码。

与此相反，ImGUI中没有对象，也几乎没有状态。大多数ImGUI的简单做法是像下面这样调用函数：

	if (ImGUI::Button("Click Me")) {
	  IWasClickedSoDoSomething();
	}
	// draw slider
	ImGUI::SliderFloat("Speed:" &someInstance.speed, 0.0f, 100.0f);

这里的 Button 和 Slider 做了两件事：

- 它们将绘制控件所需的位置和纹理坐标添加到一个向量（数组）中。如果控件被裁剪出屏幕或在当前窗口/裁剪矩形之外，则坐标不被添加。
- 它们检查鼠标指针的位置、键盘状态等，以操作该控件。如果数据发生变化，它们会立即返回。

所以，这样做有如下优点：

- 丝毫不需要分配内存，也即需要的内存为零！
- 速度很快。即使使用非常复杂的 UI 并且只有单线程的情况下，大多数（如果不是全部）ImGUI 在 60fps 的速度下运行没有任何问题。
- 不需要对必须管理的对象进行创建和销毁操作。
- 没有状态，因为没有对象来存储状态。
- 基本不需要编制数据。
- 没有需要注册或响应的事件或回调。

下面两点可能是这样做的缺点：

- 可能需要更多的 CPU。

	保留模式 GUI 设计的初衷是为了尽量减少工作量。假设你有一个类似微软 Excel 的用户界面。它有 75 个工具栏按钮和显示 300 个单元格的电子表格。输入光标位于单元格 E7 中，并且在闪烁。如果回到 Windows 3.0 及更早版本，CPU 将绘制像素，GPU 那时不存在。GUI 系统确定只需要重新绘制光标本身大小的一些小区域，并且只需要将这些像素直接重新绘制到屏幕内存中。同样，如果键入字母，系统只能确定单元格 E7 已被修改，只需重新绘制单元格 E7。

	在 1993-1994 年的计算机上，这点很重要。因为计算机无法以每秒 60 帧的速度绘制整个屏幕。

	因此，对于传统的基于“场景图”的面向对象的保留模式 GUI 来说，这是最好的做法。

	需要注意的是，系统仍然需要检查图形用户界面的大部分地方来计算最小的影响区域是什么。这可能不如重新绘制每个像素的工作量大，但需要的工作量也不少。

	ImGUI 则相反，任何时候你想更改任何内容，整个图形用户界面就要重新绘制。即使是光标。以我们进入 Excel 示例，所有 75 个工具栏控件和 300 个单元格都将因为一个闪烁的光标而重新绘制。

	这是 ImGUI 的最坏情况，大量的 CPU 被浪费了。

	再拿滚动电子表格作个对比。

	在基于场景图的保留模式的图形用户界面中，假设您按下 page down 键，很可能 300 个单元格控件会被删除，300 个新的单元格控件会被创建，每个单元格的数据将被复制到每个单元格控件中。从所有这些来看，GUI 系统将遍历所有 300 个单元并将它们绘制出来。

	相反，在 ImGUI 的情况下，不会删除任何旧控件，不会创建任何新控件，也不复制任何数据， 300个单元格要像先前一样绘制出来。在这种情况下，ImGUI 为更新整个显示页面所需要的 CPU 工作量仅仅是保留模式GUI系统工作量的十分之一至百分之一。

	哪种情况更常见呢？对于一个文本编辑器来说，通常只有很小的变化，所以场景图式的 GUI 会获胜。但是对于 Instagram 或 Facebook 应用程序，人们几乎经常滚动页面，在这种情况下，ImGUI 以压倒性优势获胜。

- 可访问性问题

	使用保留模式 GUI，所有控件的数据都已复制到 GUI 的场景图中。这意味着 GUI 系统本身可以查看这些数据并提供不同的接口（比如放大，说出它，变成盲文，等等）。

	而使用 ImGUI 的情况下，通常 GUI 不保留任何数据，所以它可能做不了保留模式 GUI 能够做的那些事情。

	这可能是一个值得研究的地方。可能存在一些方案可以使 ImGUI 能够比传统方法更好地处理可访问性问题。大多数 ImGUI 用于游戏开发，它针对的对象是同一团队中的游戏开发人员，而不是最终用户。也就是说，没有动力去推动对这些解决方案的探索。

- 样式

	对于 ImGUI 来说，样式是由你来设计的。添加更多的样式选项，甚至是几乎所有的 CSS 或者至少是好的那部分 CSS，可能是相对容易实现的，而且能保持好的性能。更好的地方在于：你可以很容易选择需要这些样式或者不需要这些样式。所以如果你的应用程序不需要这样的样式，为什么要浪费内存或CPU时间来处理它呢？为什么要像大多数保留模式GUI那样，不管你使用如否，都要将所有的样式数据嵌入到每个控件中呢？考虑一下 HTML，如果每个元素都有 100 个样式设置（毫不夸张确实有 100 个设置），那是一件多么可怕的事。

- 动画

	大多数 ImGUI 都是无状态的，所以所有的动画都取决于应用程序。虽然很容易想到使用存有少量动画状态数据的包装器 wrapper 可以很容易地将 UI 动画放回。但是事实上，包装器可以让你选择只在重要的地方支持动画，比如样式。大多数保留模式的GUI都保存有大量的数据、状态和每个控件的设置，无论你使用如否。



# =🚩 libigl
- [How to build CoMISo  on Windows ](http://www.graphics.rwth-aachen.de/media/resource_files/BUILD_WIN.txt)
- [CoMISo](http://www.openflipper.org/svnrepo/CoMISo/trunk/CoMISo)
- [Install GMM++](http://download.gna.org/getfem/stable/gmm-4.2.tar.gz)
- [Eigen3](http://bitbucket.org/eigen/eigen/get/3.1.3.zip)
- [OpenBLAS](http://github.com/xianyi/OpenBLAS/zipball/v0.2.6)
- [OpenBLAS gemm 从零入门](https://zhuanlan.zhihu.com/p/65436463)

libigl 是一个用于科研、几何原型处理库，依赖了 eigen，imgui 等。

BLAS - Basic Linear Algebra Subprograms/Subroutines 是德克萨斯高级计算中心 Texas Advanced Computing Center 以 BSD 开源发行的一个基础线性代数库。GotoBLAS, GotoBLAS2, OpenBLAS 则是 BLAS 的开源版本，经过机器处理器优化。OpenBLAS 是基于 GotoBLAS2 1.13 BSD 版本的优化库。

请按 [VCpkg 开源库管理工具](https://www.jianshu.com/p/0a7823beb1aa) 配置 VCpkg 模块管理工具，安装：

	vcpkg install opengl:x64-mingw
	vcpkg install glew:x64-mingw
	vcpkg install glfw3:x64-mingw
	vcpkg install eigen:x64-mingw
	vcpkg install imgui:x64-mingw
	vcpkg install libigl:x64-mingw

由于模块更新不同步，libigl 中的头文件会需要相应的修改，例如 imgui 中提示的符号更新：

 - 2017/08/11 (1.51) - renamed ImGuiSetCond_Always to ImGuiCond_Always, ImGuiSetCond_Once to ImGuiCond_Once, ImGuiSetCond_FirstUseEver to ImGuiCond_FirstUseEver, ImGuiSetCond_Appearing to ImGuiCond_Appearing. Kept redirection enums (will obsolete).

字体部分另行下载;
- https://github.com/libigl/libigl-imgui#imgui_fonts_droid_sans.h

另外，比较怪异的是 libigl 的示例也依赖了 imgui 中示例的文件，需要给编译器设置好，否则找不到 ImGui_ImplGlfw_InitForOpenGL。

imgui 为不同的框架 GLUT，OpenGL2/3，Vulkan，Win32，Metal framework，Allegro，DirectX 实现了基本的界面上下文管理：

- ../imgui/examples/imgui_impl_glfw.cpp
- ../imgui/examples/imgui_impl_opengl2.cpp
- ../imgui/examples/imgui_impl_opengl3.cpp

官方提供的示例，编译脚本写得过于复杂，编译前还要判断是否要下载模型文件，如果网络不好，很空间就失败了：

https://github.com/libigl/libigl-tutorial-data

libigl、eigen 这些库虽然可以直接使用头文件而不必事先编译，但是对于多例程的编译过程来说，使用预先编译好的静态库会大大提高编译效率。

	cmake ../ -DCMAKE_BUILD_TYPE=Release\
          -DLIBIGL_USE_STATIC_LIBRARY=ON\
          -DCMAKE_INSTALL_PREFIX=/path/to/custom/installation


# =🚩 Nuklear UI
- https://github.com/Immediate-Mode-UI/Nuklear
- https://cdn.statically.io/gh/vurtun/nuklear/master/doc/nuklear.html

Nuklear 是一个小型的 GUI 开发库，使用纯 C 语言开发，编译得到的所有代码都写在一个 `nuklear.h` 头文件里，没有依赖库，编译得到的源码除去注解约 2.5 万行。

它被设计成为简单可嵌入式用户应用界面，也没有任何的依赖关系，默认渲染后端或者操作系统窗口和输入处理，而是通过使用简单的输入状态去输入和绘制命令描述原始形状，提供一个非常模块化的库方法输出。所以不是尝试在多个平台上进行抽象并提供呈现的封层库，而是仅仅关注实际的 UI。

特点

- 即时模式的用户图形界面工具包
- 一个单独的头文件库
- 使用C89编写(ANSI C)
- 小代码库(~18kLOC)
- 专注于便携型，效率和简单性
- 没有依赖关系（如果不想的话，甚至不是标准库）
- 完全可换肤，可定制
- 占用内存小，可根据需要或期望来进行总的内存控制
- 支持UTF-8
- 没有全局或隐藏状态
- 可定制的库模块，你可以只编译和使用你需要的
- 可选的字体和顶点缓存输出

- Immediate mode graphical user interface toolkit
- Single header library
- Written in C89 (ANSI C)
- Small codebase (~18kLOC)
- Focus on portability, efficiency and simplicity
- No dependencies (not even the standard library if not wanted)
- Fully skinnable and customizable
- Low memory footprint with total memory control if needed or wanted
- UTF-8 support
- No global or hidden state
- Customizable library modules (you can compile and use only what you need)
- Optional font baker and vertex buffer output




该库只包含在一个头文件中，可以只在头模式或者实现模式下使用。默认情况下使用头模式

当包含或者允许包含其他头文件，不包含实际的实现。

实现模式需要在此文件之前，在一个 .c/.cpp 文件之前导入这个文件，而且定义一个预处理宏，例如：

	#define NK_IMPLEMENTATION
	#include "nuklear.h"

重要提示：你必须每次定义相同的可选标志，每次包含"nuklear.h".这非常重要不会导致编译错误或者堆栈损坏。

Example

	/* init gui state */
	struct nk_context ctx;
	nk_init_fixed(&ctx, calloc(1, MAX_MEMORY), MAX_MEMORY, &font);

	enum {EASY, HARD};
	static int op = EASY;
	static float value = 0.6f;
	static int i =  20;

	if (nk_begin(&ctx, "Show", nk_rect(50, 50, 220, 220),
		NK_WINDOW_BORDER|NK_WINDOW_MOVABLE|NK_WINDOW_CLOSABLE)) {
		/* fixed widget pixel width */
		nk_layout_row_static(&ctx, 30, 80, 1);
		if (nk_button_label(&ctx, "button")) {
			/* event handling */
		}

		/* fixed widget window ratio width */
		nk_layout_row_dynamic(&ctx, 30, 2);
		if (nk_option_label(&ctx, "easy", op == EASY)) op = EASY;
		if (nk_option_label(&ctx, "hard", op == HARD)) op = HARD;

		/* custom widget pixel width */
		nk_layout_row_begin(&ctx, NK_STATIC, 30, 2);
		{
			nk_layout_row_push(&ctx, 50);
			nk_label(&ctx, "Volume:", NK_TEXT_LEFT);
			nk_layout_row_push(&ctx, 110);
			nk_slider_float(&ctx, 0, &value, 1.0f, 0.1f);
		}
		nk_layout_row_end(&ctx);
	}
	nk_end(&ctx);


有一些其他语言的绑定。

- Java by Guillaume Legris https://github.com/glegris/nuklear4j
- Golang by golang-ui@github.com https://github.com/golang-ui/nuklear
- Rust by snuk182@github.com https://github.com/snuk182/nuklear-rust
- Nim by zacharycarter@github.com https://github.com/zacharycarter/nuklear-nim
- Chicken by wasamasa@github.com https://github.com/wasamasa/nuklear
- Lua LÖVE-Nuklear by Kevin Harrison https://github.com/keharriso/love-nuklear
- Lua MoonNuklear by Stefano Trettel https://github.com/stetre/moonnuklear
- pyNuklear by William Emerison Six (ctypes-based wrapper) https://github.com/billsix/pyNuklear
- pynk by nathanrw@github.com (cffi binding) https://github.com/nathanrw/nuklear-cffi
- CSharp/.NET by cartman300@github.com https://github.com/cartman300/NuklearDotNet


# =🚩 ASSIMP - Open Asset Import Library
- [Blender 开源建模工具](https://www.blender.org/)
- [Assimp 主页](http://assimp.sourceforge.net/index.html)
- [Assimp API](http://assimp.sourceforge.net/lib_html/annotated.html)
- [Assimp v4.1.0](https://github.com/assimp/assimp/releases/tag/v4.1.0)
- [DirectX SDK](http://www.microsoft.com/en-us/download/details.aspx?id=6812)
- [Assimp Build](https://github.com/assimp/assimp/blob/master/Build.md)
- [What is a mesh in OpenGL?](https://www.quora.com/What-is-a-mesh-in-OpenGL)
- [Tutorial 5 : A Textured Cube - OpenGL](https://www.opengl-tutorial.org/beginners-tutorials/tutorial-5-a-textured-cube)
- [Manage C and C++ libraries on Windows](https://github.com/Microsoft/vcpkg/)
- [C++ BOOST Library](https://www.boost.org/)

Assimp 是 OpenGL 中常使用的模型加载库，全称 Open Asset Import Library，可以处理丰富的 3D 文件格式：Collada, Blend, Obj, X, 3DS, LWO, MD5, MD2, MD3, MDL, MS3D 等。

使用 Visual Studio 可以直接下载

- [assimp-sdk-3.3.1-setup_vs2017.exe](https://github.com/assimp/assimp/releases/tag/v3.3.1)
- [assimp-sdk-4.1.0-setup.exe](http://github.com/assimp/assimp/releases/tag/v4.1.0)

编译打包提供了 assimp_viewer.exe 工具，可以用来查看模型，浏览模型内部信息。


编译 Assimp 前，可以安装 Vcpkg 来管理 Windows 平台下的库依赖文件。

- 安装 CMake 3.8.2；
- 安装 MinGW 编译工具；
- 下载安装 boost 库，但不需要编译 boost，只需要下载解压就可以了；
- 编译 assimp view 模型查看工具需要 Directx SDK。

安装 DSDK 时，目录尽量不要带空格、特别字符。

在配置 MinGW 编译过程出现错误：

	Could NOT find PkgConfig (missing: PKG_CONFIG_EXECUTABLE) 

这是 CMake 内部脚本提示的信息，正常来说，Windows 系统中是不会出现这样的 pkg-config Linux 命令要求的，assimp 的编译配置还有问题。



创建一个 build 目录用于保存编译文件，并在此目录下执行命令编译：

	CMake .. -G "MingW Makefiles"
	mingw32-make -j4

其中 -j 4 表示最多允许 4 个编译进行同时执行。

注意，CMake 配置文件，目录中 code 下面的代码才是核心功能。test 目录下的是测试代码，注意给它们引用正确的 assimp 库目录：

	ADD_SUBDIRECTORY( code/ )
	ADD_SUBDIRECTORY( test/ )


Assimp 支持多种格式的模型文件，如 obj、3ds、c4e 等，原代码中演示了多种模型格式的载入。模型一般通过 Blender、3DS Max 或者 Maya 工具制作，然后可以导出模型文件。我们在使用 Opengl 时，就需要将这些文件中的数据内容解析出来，内容主要有顶点数据、法线、纹理坐标等，还有材质、光照等信息，只有解析出这些数据之后我们才能做后续的渲染工作。

当导入一个模型文件时，Assimp加载所有模型和场景数据到一个Scene类型的对象中，同时为场景节点、模型节点生成具有对应关系的数据结构。

- 所有的模型、场景数据都包含在 `scene` 对象中，如 `Material` 和 `Mesh`。同样，场景的根节点引用也包含在这个 scene 对象中。

- 场景的根节点可能也会包含很多子节点和一个指向保存模型点云数据 `mMeshes[]`的索引集合。根节点上的 `mMeshes[]`里保存了实际了 `Mesh` 对象，而每个子节点上的 `mMesshes[]` 都只是指向根节点中的 `mMeshes[]` 的一个引用。

- 一个 `Mesh` 对象本身包含渲染所需的所有相关数据，比如顶点位置、法线向量、纹理坐标、面片及物体的材质。
- 一个 `Mesh` 会包含多个面。一个Face（面）表示渲染中的一个最基本的形状单位，即图元（基本图元有点、线、三角面片、矩形面片）。一个面片记录了一个图元的顶点索引，通过这个索引，可以在mMeshes[]中寻找到对应的顶点位置数据。
- 一个 `Mesh` 还会包含一个 `Material` 材质对象用于指定物体的一些材质属性。如颜色、纹理贴图（漫反射贴图、高光贴图等）。

很多模型格式是可以支持各种多边形类型的，而实际使用中，需要把它们转成三角形，这个过程称为三角化。assimp 自带了三角化的功能，只要把 `aiImportFile` 改成 `aiImportFileExWithProperties`，并带上 `aiProcess_Triangulate` 参数即可，常见的多边形，都能很好地用它转换成三角形。

由于模型创建工具往往是双面显示，所以艺术家在建模的时候并不是十分在乎正反面。而实时渲染里面，基本都会只渲染正面，这么一来，有的模型就会出现大量镂空，光照结果也不正确。Assimp 提供了另一个选项 `aiProcess_FixInfacingNormals`，它可以把错误朝向的三角形反过来。

大部分建模软件都是右手坐标系，如我喜欢的 Blender，而很多游戏引擎，如 KlayGE 用的左手坐标系。Assimp 的导入选项 `aiProcess_ConvertToLeftHanded` 可以把坐标系翻转、纹理坐标翻转、三角形顶点顺序翻转。






# =🚩 OpenGL SuperBible 蓝宝书教程讲解
- [OpenGL SuperBible](http://www.openglsuperbible.com/)
- [GLTools & OpenGL SuperBible 5th](https://github.com/kimziv/oglsuperbible5/tree/master/Src/GLTools)


示范，使用到了蓝皮书 OpenGL 编程宝典(第五版)部分代码，主要是 `<GLShaderManager.h>` 这个 GLtools 头文件，可以到 OpenGL SuperBible 官方站点下载：

	// #include <GL/glu.h>
	#include <GL/glut.h>
	#include <GLShaderManager.h>

	void Paint(){
		glClear(GL_COLOR_BUFFER_BIT); // 初始化颜色缓冲区
		glColor3f(1, 0, 0); // 设置颜色为红色 (R, G, B)

		// 矩形绘制，给定两点坐标
		glRectf(-0.8, -0.8, 0.8, 0.8);

		// 三角形绘制，给定三顶点坐标
		glBegin(GL_TRIANGLES);
		glVertex2d(-0.8, -0.8);
		glVertex2d(0.8, -0.8);
		glVertex2d(0, 0.8);
		glEnd();

		// 四边形,指定四顶点坐标
		glBegin(GL_QUADS);
		glVertex2d(-0.9, -0.4);
		glVertex2d(0.4, -0.4);
		glVertex2d(0.9, 0.4);
		glVertex2d(-0.4, 0.4);
		glEnd();

		glFlush(); // 推送显示
	}

	int main(int argc, char **argv){
		glutInit(&argc, argv);
		glutInitWindowSize(200, 200);
		glutCreateWindow("Draw");
		glutDisplayFunc(Paint);
		glutMainLoop();
	}

	// 使用顶点着色器
	void SetupRec(void){
		//1、 清空颜色
		glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
	 
		//2、 初始化着色器管理类
		shaderManager.InitializeStockShaders();
		GLfloat vVertex_1[4][3] = {
			{ -0.5f, -0.5f, 0.0f },
			{ -0.5f, 0.5f, 0.0f },
			{ 0.5f, 0.5f, 0.0f },
			{ 0.5f, -0.5f, 0.0f } };
		
		//3、 设置要渲染的点
		//GL_POINTS，点
		triangleBatch.Begin(GL_POINTS, 4);  //参数二：4个顶点
		triangleBatch.CopyVertexData3f(vVertex_1);
		triangleBatch.End();
		
	}

# =🚩 OpenGL Programming Guide 红宝书教程讲解
- [The OpenGL Programming Guide](http://www.opengl-redbook.com/)
- [The OpenGL Programming Guide 9th Edition](https://pan.baidu.com/s/1pNgJbOf#gy2l)
- [The OpenGL Programming Guide (Red Book), 9th Edition](https://github.com/openglredbook/examples)
- [The Official Guide to Learning OpenGL, Version 1.1](http://www.glprogramming.com/red/index.html)
- [OpenGL v1.1 Programming Guide (Redbook samples)](https://www.opengl.org/archives/resources/code/samples/redbook/)
- [深入游戏变速底层原理以及内核变速的实现](https://www.52pojie.cn/thread-951616-1-1.html)
- [oglpg-8th-edition.7z](https://pan.baidu.com/s/1kVpv1MR)


红宝书 8、9 版本代码心 MSVC 编译，如果使用 CMake + MinGW-x64 GCC 8.1.0 编译会有兼容性问题。


- ✗ 问题一

代码中使用了 `GetTickCount64`：

	#if (_WIN32_WINNT >= 0x0600) 
	//...
	WINBASEAPI ULONGLONG WINAPI GetTickCount64(void);

	#endif 

所以，遇到符号未定义请设置 CMake 编译器参数，`::GetTickCount64' has not been declared`。


- ✗ 问题二

代码 vdds.cpp 使用了 goto 导致 GCC 兼容性错误，`error: jump to label 'xxx' [-fpermissive]`：

	void vglLoadDDS(const char* filename, vglImageData* image)
	{
		...
		if (file_header.magic != DDS_MAGIC)
		{
			goto done_close_file;
		}
		size_t current_pos = ftell(f);
		...

	done_close_file:
		fclose(f);
	}

可以直接使用宽容模式 `-fpermissive` 编译选项忽略这些问题，又或者将 goto 后面的变量初始化移到 goto 前面。


- ✗ 问题三

在 12-particlesimulator.cpp 中使用了一个 `STRINGIZE` 宏来定义着色器程序代码，导致错误的语法 `#version 430`，。

	#define STRINGIZE(a) #a

此宏定义 `#a` 原意是给 a 加双引号变成字符串，解决办法是给着色器程序部分加双引号，并将换行符号转义：

	static const char compute_shader_source[] = STRINGIZE("\
		#version 430 core\n\
		\n\
		layout (std140, binding = 0) uniform attractor_block\n\
		..."
		);

- ✓ 解决办法

给 CMakeLists.txt 脚本设置编译器条件，同时示例依赖的 GLFW 也需要编译，生成的 `libglfw3.a`、`libvermilion.a` 根据 CMake 编译目录而定，一并设置到链接目录中：

	LINK_DIRECTORIES( ${CMAKE_SOURCE_DIR}/build/lib )

	message(STATUS "Platform is ----------------> ${CMAKE_SYSTEM_NAME}")
	IF (${CMAKE_SYSTEM_NAME} MATCHES "Windows")
	  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++0x -D_WIN32_WINNT=0x0600 -fpermissive")
	ENDIF (${CMAKE_SYSTEM_NAME} MATCHES "Windows")


## ==⚡ Example 01 Double Buffer 双缓冲绘图
- [OpenGL Programming Guide](http://www.glprogramming.com/red/index.html)

OpenGL Programming Guide 第一章有一个 double.c 示例，展示了 GLUT 的使用，画了一个旋转的方块，这里对其进行了一些修改，程序要点如下：

- 使用 `glutIdleFunc` 和 `glutTimerFunc` 两种方式来更新绘图，使用定时器事件能控制稳定的帧率，空闲回调却不容易。
- 使用了 `glutKeyboardFunc` 和 `glutMouseFunc` 两个基本的键盘、鼠标交互事件。
- 在 `glutInitDisplayMode` 绘图模式初始时，启用了`双缓冲` GLUT_DOUBLE 模式。
- 使用 `glutPostRedisplay` 激发重绘图形。
- 使用 `glOrtho` 和 `glViewport` 两个 API 实现正交投影。

初始化 OpenGL 过程中，注意，在上下文对对象初始化前，通常是 glutInitWindowSize 执行前初始化 OpenGL，并在之后执行其它的初始化功能：

	glutInit(&argc, argv);     // STEP 1
	glutCreateWindow(argv[0]); // STEP 2 and ...
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);

比如，将上面第三行前置执行，可能会得到一个错误:

	freeglut (07-list.cpp.exe): fgInitGL2: fghGenBuffers is NULL


双缓冲技术 `Double Buffer` 的使用能加速绘图效率，两个缓冲区分别用于显示和绘图，计算机动画是画一张显示一张，在复杂的组图过程中，显示设备可以需要等待程序画好下一张图，在这个等待过程中就会出现画面不流畅，画面残缺不完整的问题。双缓冲解决了这个问题，在对一个缓冲区绘图时，显示的画面在另一个缓冲区，当绘图完成后，再通过 `glutSwapBuffers()` 函数将画面映射到最新的绘图区上。

在一个复杂的绘图程序上，通常是以固定的帧率显示画面，而后台程序以最快速度完成下一帧画面的绘制。当出现速度有余量，那么程序可以选择更高的帧率运行，或者以更悠闲的状态运行，这时 `glutIdleFunc` 空闲回调就会得到更高频率的执行，相反它会断断续续地执行。

双缓冲技术使用的存储器有可能是显存，也有可能是主机内存中开辟两块区域，一块作为发送到显示器的数据，一块作为绘画的区域，在适当的时候交换它们。交换两块内存区域实际上只需要交换两个指针，这一方法效率非常高，所以，这是早期图形技术应用最广泛一种。




以下是修改的示例：

	// Example 1-3 : Double-Buffered Program: double.c
	// http://www.glprogramming.com/red/chapter01.html

	// #include <GL/gl.h>
	// #include <GL/glu.h>
	#include <GL/glut.h>
	#include <stdlib.h>
	#include <stdio.h>
	#include <stdbool.h>

	static GLfloat spin = 0.0;

	#define KEY_0               0x30  // [0,48]
	#define KEY_9               0x39  // [9,57]
	#define KEY_backtick        0x60  // [`,96]
	#define KEY_minu            0x2d  // [-,45]
	#define KEY_equal           0x3d  // [=,61]
	#define KEY_squareR         0x5b  // [[,91]
	#define KEY_squareL         0x5d  // [],93]
	#define KEY_comma           0x2c  // [,,44]
	#define KEY_period          0x2e  // [.,46]
	#define KEY_div             0x2f  // [/,47]
	#define KEY_slash           0x5c  // [\,92]
	#define KEY_ESC             0x1b  // [ESC,27]
	#define KEY_A               0x41  // [A,65]
	#define KEY_B               0x42  // [B,66]
	#define KEY_a               0x61  // [a,97]
	#define KEY_b               0x62  // [b,98]
	#define KEY_x               0x78  // [x,120]

	#define FrameTimer          1
	#define AnimationFrame      50

	bool requestAnimationFrame = false;

	void init(void) 
	{
	   glClearColor (0.0, 0.0, 0.0, 0.0);
	   glShadeModel (GL_FLAT);
	}

	void display(void)
	{
	   glClear(GL_COLOR_BUFFER_BIT);
	   glPushMatrix();
	   glRotatef(spin, 0.0, 0.0, 1.0);
	   glColor3f(1.0, 1.0, 1.0);
	   glRectf(-25.0, -25.0, 25.0, 25.0);
	   glPopMatrix();
	   glutSwapBuffers();
	}

	void spinDisplay(void)
	{
	   spin = spin + 2.0;
	   if (spin > 360.0)
		  spin = spin - 360.0;
	   glutPostRedisplay();
	}

	void reshape(int w, int h)
	{
	   glViewport (0, 0, (GLsizei) w, (GLsizei) h);
	   glMatrixMode(GL_PROJECTION);
	   glLoadIdentity();
	   glOrtho(-50.0, 50.0, -50.0, 50.0, -1.0, 1.0);
	   glMatrixMode(GL_MODELVIEW);
	   glLoadIdentity();
	}

	void onFrame(int timerValue)
	{
	   spinDisplay();
	   if(requestAnimationFrame)
	   {
		  glutTimerFunc(AnimationFrame, onFrame, FrameTimer);
	   }
	}

	void mouse(int button, int state, int x, int y) 
	{
	   if (state != GLUT_DOWN) return;
	   switch (button) {
		  case GLUT_LEFT_BUTTON:
			 glutIdleFunc(spinDisplay);
			 requestAnimationFrame = false;
			 break;
		  case GLUT_RIGHT_BUTTON:
			 glutIdleFunc(NULL);
			 requestAnimationFrame = true;
			 glutTimerFunc(AnimationFrame, onFrame, FrameTimer);
			 break;
		  default:
			 break;
	   }
	}

	void keyboard(unsigned char key, int x, int y) { 
		printf("#define KEY_%-16c0x%x  // [%c,%d]\n", key, key, key, key);
		switch (key) { 
		  case KEY_x:
		  case KEY_ESC:
			 exit(EXIT_SUCCESS); break;  
		}
	}

	/* i
	 *  Request double buffer display mode.
	 *  Register keyboard, mouse input callback functions
	 */
	int main(int argc, char** argv)
	{
	   glutInit(&argc, argv);
	   glutInitDisplayMode (GLUT_DOUBLE | GLUT_RGB);
	   glutInitWindowSize (250, 250); 
	   glutInitWindowPosition (100, 100);
	   glutCreateWindow (argv[0]);
	   init ();
	   glutDisplayFunc(&display); 
	   glutReshapeFunc(&reshape); 
	   glutKeyboardFunc(&keyboard);
	   glutMouseFunc(&mouse);
	   glutMainLoop();
	   return EXIT_SUCCESS;
	}

## ==⚡ Example 02 State Management
- http://www.glprogramming.com/red/chapter02.html

第二章讲的是 OpenGL 整个程序运行就是状态机的管理，初始化就是对状态机的初始化，执行绘图也就是设置状态机的绘图状态，还有清理画板，这是三个基本的状态：

Table 2-1 : Clearing Buffers

|        Buffer       |          Name         | Reference  |
|---------------------|-----------------------|------------|
| Color buffer        | GL_COLOR_BUFFER_BIT   | Chapter 4  |
| Depth buffer        | GL_DEPTH_BUFFER_BIT   | Chapter 10 |
| Accumulation buffer | GL_ACCUM_BUFFER_BIT   | Chapter 10 |
| Stencil buffer      | GL_STENCIL_BUFFER_BIT | Chapter 10 |

其中，`glBegin()` 和 `glEnd()` 之间是进行图元绘图，图元是最基本的 OpenGL 图形，`glVertef()` 定义构成图元的顶点坐标，在传统的 OpenGL 2.1 中可以绘制的图元有以下几种，但是在新式的 OpenGL 中这种绘图方法应用比较少，更多是使用着色器。

Table 2-2 : Geometric Primitive Names and Meanings

| 图元类型常量    | 说明    |
| :----------   | :----------   |
| GL_POINTS     | 点 |
| GL_LINES      | 线段    |
| GL_LINE_STRIP | 多段线   |
| GL_LINE_LOOP  | 线圈    |
| GL_TRIANGLES  | 三角形   |
| GL_TRIANGLE_STRIP | 三角形条带 |
| GL_TRIANGLE_FAN   | 三角形扇  |
| GL_QUADS      | 四边形   |
| GL_QUAD_STRIP | 四边形条带 |
| GL_POLYGON    | 多边形(凸)    |

Table 2-3 : Valid Commands between glBegin() and glEnd()

|              Command              |       命令功能       |    参考    |
|-----------------------------------|----------------------|------------|
| `glVertex*()`                     | 设置顶点坐标         | Chapter 2  |
| `glColor*()`                      | 设置当前颜色         | Chapter 4  |
| `glIndex*()`                      | 设置当前颜色索引号   | Chapter 4  |
| `glNormal*()`                     | 设置当前法线向量坐标 | Chapter 2  |
| `glTexCoord*()`                   | 设置纹理坐标         | Chapter 9  |
| `glEdgeFlag*()`                   | 控制连线的绘制       | Chapter 2  |
| `glMaterial*()`                   | 设备模型材质         | Chapter 5  |
| `glArrayElement()`                | 提取顶点数组数据     | Chapter 2  |
| `glEvalCoord*()` `glEvalPoint*()` | 生成坐标             | Chapter 12 |
| `glCallList()` `glCallLists()`    | 执行显示列表         | Chapter 7  |

在绘图过程中激活某些特性，例如 GL_BLEND、GL_FOG 是很常用到的：

	void glEnable(GLenum cap);
	void glDisable(GLenum cap);

常用特性：

|       特性      |                   功能                  |
|-----------------|-----------------------------------------|
| GL_BLEND        | RGBA 混合模式                           |
| GL_DEPTH_TEST   | 深度测试，根据尝试比较更新 depth buffer |
| GL_FOG          | 雾化模糊                                |
| GL_LINE_STIPPLE | 模板线条                                |
| GL_LIGHTING     | 光线                                    |

通过以下 API 获取状态机的信息：

	void glGetBooleanv(GLenum pname, GLboolean *params);
	void glGetIntegerv(GLenum pname, GLint *params);
	void glGetFloatv(GLenum pname, GLfloat *params);
	void glGetDoublev(GLenum pname, GLdouble *params);
	void glGetPointerv(GLenum pname, GLvoid **params);

Figure 2-7 : Geometric Primitive Types

| Primitive type              | GL_FIRST_VERTEX_CONVENTION | GL_LAST_VERTEX_CONVENTION           |
| :--------------             | :--------------            | :--------------                     |
| GL_POINTS                   | i                         | i                                  |
| GL_LINES                    | 2i - 1                    | 2i                                 |
| GL_LINE_LOOP                | i                         | i + 1 如果 i 小于顶点数，否则为 1 |
| GL_LINE_STRIP               | i                         | i + 1                              |
| GL_TRIANGLES                | 3i - 2                    | 3i                                 |
| GL_TRIANGLE_STRIP           | i                         | i + 2                              |
| GL_TRIANGLE_FAN             | i + 1                     | i + 2                              |
| GL_LINES_ADJACENCY          | 4i - 2                    | 4i - 1                             |
| GL_LINE_STRIP_ADJACENCY     | i + 1                     | i + 2                              |
| GL_TRIANGLES_ADJACENCY      | 6i - 5                    | 6i - 1                             |
| GL_TRIANGLE_STRIP_ADJACENCY | 2i - 1                    | 2i + 3                             |

不同的图元，按不同的方法使用顶点来构造图元。

`三角形条带` GL_TRIANGLE_STRIP 的构成到最少 3 个点，正好 3 个点就是一个 GL_TRIANGLE，每增加 1 个点会和之前已有的两个点构成新的三角形，依次类推。也就是说当三角形条带 GL_TRIANGLE_STRIP 由 n 个点组成时，构成的三角形个数是 n -2 个，相同情况下 TRIANGLES 的三角形个数是 n / 3，可以看出当有大量点共用时，三角形条带相比三角形可以节省许多存储空间。

假设起始点的坐标序列号是 0，新增的点依次往后增加，那么`三角形条带`转换的算法如下：

- 当所有点数量小于或者等于 2 时，无法构成三角条带；
- 点号从 0 开始，点号n)是偶数时，构成的三角形是 [ n, n+1, n+2]
- 点号从 0 开始，点号n)是奇数时，构成的三角形是 [n, n+2, n+1]

`四边形` GL_QUADS 转换为三角形，每一个四边形转换为两个三角形：

	[n, n+1, n+2, n+3] = [n, n+1, n+2] + [n, n+2, n+3]


例如，可以通过设置状态机中的顶点来绘制不同的形状，也可以直接使用 glRect 设置一个矩形绘图状态：

	void drawPoints(int type)
	{
	    glBegin(type);
	    glVertex2d(-0.8, -0.8);
	    glVertex2d(0.8, -0.8);
	    glVertex2d(-0.8, 0.8);
	    glVertex2d(0.8, 0.8);
	    glVertex2d(0.2, 0.0);
	    glVertex2d(0.8, -0.8);
	    glEnd();
	}

	void drawQuads()
	{
	    float r = colorQuads[0], g = colorQuads[1], b = colorQuads[2];
	    glColor3f(r, g, b);
	    glBegin(GL_QUADS);
	    glVertex2d(-0.9, -0.4);
	    glVertex2d(0.4, -0.4);
	    glVertex2d(0.9, 0.4);
	    glVertex2d(-0.4, 0.4);
	    glEnd();
	}

	void drawRectangle()
	{
	    int wi = glutGet(GLUT_WINDOW_WIDTH);
	    int he = glutGet(GLUT_WINDOW_HEIGHT);
	    float h = 0.4, w = 0.4;
	    float cx = 2*(float)_x/wi, cy = 2*(float)_y/he;

	    // OpenGL 使用右手系，默认窗体中心为原点，左下角为负，右上角为正
	    // 屏幕鼠标的 2D 坐标左上角为原点，右正角为正

	    glPushMatrix();
	    glScalef(1, -1, 1);
	    glTranslatef(-1, -1, 0);
	    glRectf(cx - w/2, cy - h/2, cx + w/2, cy + h/2);
	    glPopMatrix();
	}

图形绘制前，可以设置颜色、几何变换等等状态，包含顶点也是可以设置状态的。在设置顶点前，也可以给顶点设置一个关联的颜色，在 Example 04 可以看到 GL_SMOOTH 和 GL_FLAT 显示模式是如何应用顶点关联的颜色的。

当图元顶点数量多的时候，可以直接使用顶点数组，可以结合 VBO 进行绘图。

首先是激活 GL_VERTEX_ARRAY, GL_COLOR_ARRAY, GL_INDEX_ARRAY, GL_NORMAL_ARRAY, GL_TEXTURE_COORD_ARRAY, GL_EDGE_FLAG_ARRAY 等：

	glEnableClientState(GL_NORMAL_ARRAY);
	glEnableClientState(GL_VERTEX_ARRAY);

然后使用 API 指定顶点数据：

	void glColorPointer(GLint size, GLenum type, GLsizei stride, const GLvoid *pointer);
	void glIndexPointer(GLenum type, GLsizei stride, const GLvoid *pointer);
	void glNormalPointer(GLenum type, GLsizei stride, const GLvoid *pointer);
	void glTexCoordPointer(GLint size, GLenum type, GLsizei stride, const GLvoid *pointer);
	void glEdgeFlagPointer(GLsizei stride, const GLvoid *pointer);

- size 指定顶点坐标的维度，2、3、4 等。
- type 参数指定数据类型 GL_SHORT, GL_INT, GL_FLOAT, or GL_DOUBLE。
- pointer 是指向顶点数组的指针。
- stride 跨度指定连续顶点的数据偏移字节数，一般用 0 表示连续的数据，除非数组包含其它数据。

Table 2-4 : Vertex Array Sizes (Values per Vertex) and Data Types(continued)

|      Command      |   Sizes    |                 Values for type Argument                 |
|-------------------|------------|----------------------------------------------------------|
| glVertexPointer   | 2, 3, 4    | GL_SHORT, GL_INT, GL_FLOAT, GL_DOUBLE                    |
| glNormalPointer   | 3          | GL_BYTE, GL_SHORT, GL_INT, GL_FLOAT, GL_DOUBLE           |
| glColorPointer    | 3, 4       | 所有基本类型，额外支持 GL_UNSIGNED_SHORT GL_UNSIGNED_INT |
| glIndexPointer    | 1          | GL_UNSIGNED_BYTE, GL_SHORT, GL_INT, GL_FLOAT, GL_DOUBLE  |
| glTexCoordPointer | 1, 2, 3, 4 | GL_SHORT, GL_INT, GL_FLOAT, GL_DOUBLE                    |
| glEdgeFlagPointer | 1          | 无类型指定，只能使用 GLboolean                           |

OpenGL 9 种自带几何体也是这样由顶点定义的，至于像圆形、曲线这些则可以通过多条短线段连接起来模拟，当线段足够细，就能够模拟真实的曲线。

将属性压栈到属性堆栈保护起来：

	void glPushAttrib(GLbitfield mask);
	void glPopAttrib(void);

在 mask 属性指定 GL_ALL_ATTRIB_BITS 可以将所有属性数据压栈。

Table 2-6 : (continued) Attribute Groups

|        Mask Bit        | Attribute Group |
|------------------------|-----------------|
| GL_ACCUM_BUFFER_BIT    | accum-buffer    |
| GL_ALL_ATTRIB_BITS     | --              |
| GL_COLOR_BUFFER_BIT    | color-buffer    |
| GL_CURRENT_BIT         | current         |
| GL_DEPTH_BUFFER_BIT    | depth-buffer    |
| GL_ENABLE_BIT          | enable          |
| GL_EVAL_BIT            | eval            |
| GL_FOG_BIT             | fog             |
| GL_HINT_BIT            | hint            |
| GL_LIGHTING_BIT        | lighting        |
| GL_LINE_BIT            | line            |
| GL_LIST_BIT            | list            |
| GL_PIXEL_MODE_BIT      | pixel           |
| GL_POINT_BIT           | point           |
| GL_POLYGON_BIT         | polygon         |
| GL_POLYGON_STIPPLE_BIT | polygon-stipple |
| GL_SCISSOR_BIT         | scissor         |
| GL_STENCIL_BUFFER_BIT  | stencil-buffer  |
| GL_TEXTURE_BIT         | texture         |
| GL_TRANSFORM_BIT       | transform       |
| GL_VIEWPORT_BIT        | viewport        |


完整代码参考：

- Example 2-5 : Line Stipple Patterns: lines.c
- Example 2-6 : Polygon Stipple Patterns: polys.c
- Example 2-9 : Enabling and Loading Vertex Arrays: varray.c

其中 varray.c 例子演示了 VBO 顶点数组在绘图的使用，和 OpenGLTutorial.org 的 Tutorial 03 - First triangle 教程内容相同。



## ==⚡ Example 03 Viewport & Primitive

要点：

- 鼠标事件处理，滚轮、移动、浮动、点击等。
- 键盘事件处理，一般按键、特殊按键处理。
- 各种图元绘制。
- 通过鼠标滚轮事件进行视图缩放。
- 使用方向按键移到视口中心坐标。
- 使用 gltBitmapString 绘制字符串。
- drawRectangle 中对接收到的光标对应的屏幕坐标变换到 OpenGL 空间坐标。

总体来说，OpenGL 编程中，涉及三大部分的坐标关系处理，参考红宝书 OpenGL Programming Guide - 03 Viewing：

- 模型坐标 Model Coordinates 涉及 Model Matrix 变换；
- 世界坐标 World Coordinates 涉及 View Matrix 变换；
- 相机坐标 Camera Coordinates 涉及 Projection Matrix 变换；

在 OpenGL 中使用 `gluLookAt` 改变的是相机坐标，而设置投影方式的 API 改变的是世界坐标系，即视口的变换，至于模型的坐标，顶点通过变换矩阵的转换后就改变了。

在 OpenGL 对视图变换并不会改变模型坐标，而是移动或缩放摄像机的镜头，从不同的方位观察模型，常用`glLookAt` 函数设置观察者视角的变换矩阵。

	void gluLookAt( GLdouble eyeX,
					GLdouble eyeY,
					GLdouble eyeZ,
					GLdouble centerX,
					GLdouble centerY,
					GLdouble centerZ,
					GLdouble upX,
					GLdouble upY,
					GLdouble upZ);

glLookAt 会定义一个视图矩阵，成像点为 (eyeX, eyeY, eyeZ)，目标物体对应 center 坐标方向，镜像上位方向对应 up 坐标，这三点的坐标确定了的的摄像机的姿态。视图变换矩阵与当前矩阵相乘，获得视图矩阵，再该模型视图矩阵左乘模型，就会获得在观察位置上模型的状态，就是我们在屏幕上最终看到的模型的状态。

gluLookAt 用来定义观察者(相机)的状态，包括观察者在世界坐标系中所处的位置、看向世界坐标系中的方向，可以理解为眼睛所看向的方向、观察者头部的朝向（可以在一个平面上360°旋转）。

如果没有调用 glLookAt 设置视图矩阵，默认情况下，相机会被设置为位置在世界坐标系原点，指向 Z 轴负方向，朝上向量为（0，1，0）。

正交投影在 OpenGL 中是比较基础的投影变换，软件在算法上使用的 3D 世界，在成像的过程中，需要将立体的世界投射为设备显示的 2D 画面，这就需要一个投射方法。

常见且较容易实现的有`透视法`和`正交投影` Perspective & Orthographic Projection。透视法是西方艺术中基本的构图法，有固定的`消逝点` Vanishing point or line，是一种模拟人类真视野中的观测物体，总结起来就是近大远小。明显的例子，就是平行铁轨，远处两条铁轨会相交于一点。而中国的山水法则不然，没有规则的消逝点或线，也不像正交投影，是一种在计算机上难以实现的构图方法。

	void glOrtho (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void glFrustum (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void gluPerspective(GLdouble fovy,GLdouble aspect,GLdouble zNear, GLdouble zFar);

`正交投影`通常用在工程制图中，需要比较精确的显示，而不是追求视觉的真实感。形象点说，一个物体特有点向投影平面作垂线，垂线与平面的交点的集合就是需要的投影。与透视法相比，正交投影法一般用于物体不会因为离屏幕的远近而产生大小的变换的情况。

这里的投影是向量的投影，几何的投影，算法实现上需要有一定的线性代数基础、几何学等。

OpenGL API 中的 `glOrtho()` 就是用来创建一个正交平行的视景体，它代表了一个变换矩阵，与 OpenGL 程序的当前矩阵相乘。而 `glFrustum()` 则对应一个透视投影的变换矩阵，`gluPerspective()` 函数封装了 `glFrustum()`。

透视法中，FOV - Field of View 视场角度，[0.0, 180.0]，是一个特别重要的参数，镜头到物体保持同样距离的条件下，FOV 越大看到的东西越多，从另一面讲，看到的东西细节越少，相当于放大镜的倍数低了。截断面的宽高比 aspect 会影响输出到窗体的图形比例。near 和 far 是景深的近端和远端，都应该为正数，沿 X 轴负向为远端。

glOrtho 函数参数表示视景体六面的坐标约束，依次是 left、right、bottom、top，zNear 和
zFar 分别代表 Z 轴上的前后两面约束位置。这个函数简单理解起来，就是创建一个盒子摆在那里。

其中近裁剪平面是一个矩形，靠前方的近端面，矩形左下角三维空间坐标点是 (left，bottom，-near)，
右上角坐标点是 (right，top，-near)；远裁剪平面也是一个矩形，左下角点空间坐标是 (left，bottom，-far)，右上角点是（right，top，-far)。

假设有一个半径为 1 的球体，圆心坐标在 (0, 0, 0)，那么，以下两个宽高都是 3 的正交投影盒子，分别会将球体：

	glOrtho(-1.5, 1.5, -1.5, 1.5, -1.5, 1.5);
	glOrtho( 0.0, 1.5, -1.5, 1.5, -1.5, 1.5);

当 left = right，或者 top = bottom，又或者 near = far，那么这个这个视景体至少有一个维度压缩为 0，这样无法显示任何图形 参考 clip.c 示例。

针对不同的变换，OpenGL 系统中有多个变换矩阵对应，即`矩阵堆栈` Matrix Statck 保存的矩阵数据。所以，在执行矩阵变换前，需要通过 `glMatrixMode` 指定对什么矩阵进行操作：

- `GL_MODELVIEW` 开始对模型视图矩阵堆栈操作，进入此模式后可以输出自己的物体模型。
- `GL_PROJECTION` 开始对投影矩阵堆栈操作，进入此模式后可以为场景增加透视矩阵变换。
- `GL_TEXTURE` 开始对纹理矩阵堆栈操作，进入此模式后可以为模型增加纹理贴图。
- `GL_COLOR` 开始对色彩矩阵堆栈操作，可以变换色彩。

每个矩阵模式下都有一个矩阵堆栈，在 `GL_MODELVIEW` 模式中，堆栈深度至少为 32，在 `GL_PROJECTION` 和 `GL_TEXTURE` 模式中，堆栈深度至少为 2，无论在任何模式下，当前矩阵 Current Matrix 总是该模式下矩阵堆栈中的最顶层矩阵。


无论模型如果变换，最终还是要在设备上显示，`glViewport()` 设置视口，中心点坐标 (x, y)，宽度和高度 width、height，深度另外 API 设置。视口设置，即指定 OpenGL 3D 空间中，哪一部分输出到设备上显示出来。`默认视口` 在 Z 轴向其负轴方向看。对于`显示器坐标系统` Screen Coordinate 来说，左上角为原点，而且 Y 轴上下颠倒。那么，对于 OpenGL 空间位置坐标为 (-1, 1) 的一个物体，假定视口长宽为 2，它会显示在屏幕的左上角，也就显示器的 (0,0) 的坐标，但是在软件中编码，不去考虑屏幕的坐标，因为视口背后的逻辑已经进行了一个矩阵变换操作，将屏幕的坐标系统映射到了视口中。

	void glViewport(GLint x, GLint y, GLsizei width, GLsizei height);
	
而通过 `glViewport` 指定的视口区域代表的是一个仿射变换，affine transformation，只是将设备的坐标映射到了软件中 3D 世界的一个剖面上，函数参数 (x, y) 就在指定平移变换，width、height 就是指定大小缩放变换。

OpenGL 中存在多个视口，保存在 Viewport 数组中，视口数量为 [0, GL_MAX_VIEWPORTS)，并且给特定图元使用的视口还可以通过 GS - Geometry Shader 指定。如果 GS 没有指定视口，那么数组中开头那个就是默认的。

其它和视口相关的 API 如下:

	void glViewportIndexedf(GLuint index, GLfloat x, GLfloat y, GLfloat w, GLfloat h)
	void glViewportIndexedfv(GLuint index, const GLfloat *v)
	void glDepthRangeIndexed(GLuint index, GLdouble nearVal, GLdouble farVal)

	void glViewportArrayv(GLuint first, GLsizei count, const GLfloat *v)
	void glDepthRangeArrayv(GLuint first, GLsizei count, const GLdouble *v)


以下 API 会改变模型的变换矩阵：

	void glTranslate{fd}(TYPEx, TYPE y, TYPEz);
	void glRotate{fd}(TYPE angle, TYPE x, TYPE y, TYPE z);
	void glScale{fd}(TYPEx, TYPE y, TYPEz);

在以下方法可以将当前操作的矩阵堆栈保护起来、或恢复，更直接的办法是使用加载单位矩阵，它会还原之前所有的变换操作：

	glPushMatrix ();
	glPopMatrix ();
	glLoadIdentity ();

在变换过程中，会编码深度信息并保存在 depth buffer，通常，深度值范围是 [0.0, 1.0]，但可以通过以下 API 修改：

	void glDepthRange(GLdouble nearVal, GLdouble farVal);
	void glDepthRangef(GLfloat nearVal, GLfloat farVal);


一些函数功能说明：

`glEnable()`、`glDisable()` 配套使用，分别用于激活和关闭功能：

|        功能       |      说明      |
|-------------------|----------------|
| GL_CULL_FACE      | 背面剔除       |
| GL_BLEND          | 颜色混合       |
| GL_FOG            | 雾化效果       |
| GL_POLYGON_SMOOTH | 顶点图元的平滑 |
| GL_LINE_SMOOTH    | 顶点图元的平滑 |
| GL_POINT_SMOOTH   | 顶点图元的平滑 |


三维空间来看，一个多边形具有两个面。通过 API 设置不同的绘制方式：填充、绘制轮廓线、绘制顶点，其中填充是默认的方式：

	void glPolygonMode(GLenum face,GLenum mode);

face 参数控制多边形的正面和背面的绘图模式：

- `GL_FRONT`：表示显示模式将适用于物体的前向面（也就是物体能看到的面）
- `GL_BACK`：表示显示模式将适用于物体的后向面（也就是物体上不能看到的面）
- `GL_FRONT_AND_BACK`：表示显示模式将适用于物体的所有面

mode 参数指定图形显示模式：

- GL_POINT：表示只显示顶点，多边形用顶点显示
- GL_LINE：表示显示线段，多边形用轮廓显示
- GL_FILL：表示显示面，多边形采用填充形式

指定顶点或线条的大小：

	glPointSize(8);
	glLineWidth(5);

在 OpenGL 中图形锯齿现象的消除技术称为反走样，也叫做抗锯齿 Antialias，可通过函数 `glHint()`对图像质量和绘制速度之间的权衡作一些控制，其函数形式为：

	void glHint(GLenum target,GLenum hint);

	glHint(GL_POINT_SMOOTH_HINT, GL_NICEST); // Make round points, not square points  
	glHint(GL_LINE_SMOOTH_HINT, GL_NICEST);  // Antialias the lines  

target 参数指定需要抗锯齿的目标，参考以 `_HINT` 后缀的常量：

	GL_FOG_HINT
	GL_LINE_SMOOTH_HINT
	GL_POINT_SMOOTH_HINT
	GL_POLYGON_SMOOTH_HINT
	GL_FRAGMENT_SHADER_DERIVATIVE_HINT
	GL_GENERATE_MIPMAP_HINT
	GL_PERSPECTIVE_CORRECTION_HINT
	GL_TEXTURE_COMPRESSION_HINT

GL_FOG_HINT 指出雾是按像素进行（GL_NICEST）还是按顶点进行（GL_FASTEST）；

SMOOTH_HINT 后后缀常量分别指定点、线和多边形的采样质量；

hint 参数可以指定模式为速度优先 GL_FASTEST、质量优先 GL_NICEST、不关注 GL_DONT_CARE。

对图元进行反走样要先调用 `glEnable()` 激活图元平滑模式，如 GL_POLYGON_SMOOTH。如果是在 RGBA 模式下进行反走样，还必须与融合模式配合使用，通常分别使用 GL_SRC_ALPHA 和 GL_ONE_MINUS_SRC_ALPHA 作为源和目的因子。

	glEnable(GL_BLEND);  
	glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);  

对于空间上的物体，按其到镜头的距离，即通过深度 depth  可以很容易检测到有没有被遮挡，对于遮挡住的部分就不应该渲染，否则就破坏了图形的逻辑正确。

深度测试开启、深度图形清除：

	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);

	glEnable(GL_DEPTH_TEST);

	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);


代码参考：

- Example 3-1 : Transformed Cube: cube.c
- Example 3-2 : Using Modeling Transformations: model.c
- Example 3-5 : Wireframe Sphere with Two Clipping Planes: clip.c
- Example 3-6 : Planetary System: planet.c
- Example 3-7 : Robot Arm: robot.c






## ==⚡ Example 04 Color
- http://www.glprogramming.com/red/chapter04.html
- https://github.com/markkilgard/glut
- https://www.opengl.org/resources/libraries/glut/spec3/node65.html

Example 4-1 : Drawing a Smooth-Shaded Triangle: smooth.c

OpenGL 程序初始化时设置一个颜色模式和着色模式：

	glutInitDisplayMode (GLUT_SINGLE | GLUT_INDEX);

	glShadeModel (mode? GL_FLAT:GL_SMOOTH);

	#define  GLUT_RGB                           0x0000
	#define  GLUT_RGBA                          0x0000
	#define  GLUT_INDEX                         0x0001

彩色可以是 RGB 或 RGBA 模式，也可以是索引颜色。当图形中使用的颜色是有限的数量时，索引颜色能节省内存，原先需要 32bit 的 RBGA 可以用一个索引号码和一个色盘定义就可以替代。

在索引色模式下，OpenGL 使用 `glIndexi()` 这类方法进行色彩映射或称为 lookup table 来确定颜色，这非常像使用色盘。索引色的使用可以参考 GLUT 中提供的示例 olympic.c 奥林匹克五环，scube.c 旋转盒子。

根据不同数据类型，色彩指定 API 使用相应后缀：

	void glColor3{b s i f d ub us ui} (TYPEr, TYPEg, TYPEb);
	void glColor4{b s i f d ub us ui} (TYPEr, TYPEg, TYPEb, TYPEa);
	void glColor3{b s i f d ub us ui}v (const TYPE*v);
	void glColor4{b s i f d ub us ui}v (const TYPE*v);

	void glIndex{sifd ub}(TYPE c);
	void glIndex{sifd ub}v(const TYPE *c);

索引色管理 API，如下，获取索引色分量或设置索引色，以及获取当前系统索引色数量：

	GLfloat glutGetColor(int cell, int component);
	void glutSetColor(int cell, GLfloat red, GLfloat green, GLfloat blue);
	glutGet(GLUT_WINDOW_COLORMAP_SIZE);
	void glutCopyColormap(int win);

参数:

- `cell` 表示索引色单元位置，[0 - GLUT_WINDOW_COLORMAP_SIZE)。
- `component` 指定分量 GLUT_RED, GLUT_GREEN, or GLUT_BLUE。
- `win` 指定要从哪个窗体拷贝色彩映射 colormap。

如果获取索引色大小返回以下信息，表明 GLUT 的实现没有包含此功能，测试当前 Windows 10 运行的程序有 19 种索引色：

	glutGet(): missing enum handle 119

设置颜色后，可以通过 glGetIntegerv 获取和分量值 GL_RED_BITS, GL_GREEN_BITS, GL_BLUE_BITS, GL_ALPHA_BITS, GL_INDEX_BITS：

	glColor3f (1.0, 0.0, 0.0);  /* the current RGB color is red: */
								/* full red, no green, no blue. */
	glBegin (GL_POINTS);
		glVertex3fv (point_array);
	glEnd ();

	glGetIntegerv(GL_INDEX_BITS);

通过激活抖动，可以用黑色散点模拟灰度，黑点越密集，抖动形成的灰度色越深：

	glEnable(GL_DITHER);
	....
	glDisable(GL_DITHER);

Table 4.1 颜色值转换浮点表示的对应关系：

| Suffix |        Data Type        | Minimum Value  | Min Value Maps to | Maximum Value | Max Value Maps to |
|--------|-------------------------|----------------|-------------------|---------------|-------------------|
| b      | 1-byte integer          | -128           |              -1.0 | 127           |               1.0 |
| s      | 2-byte integer          | -32,768        |              -1.0 | 32,767        |               1.0 |
| i      | 4-byte integer          | -2,147,483,648 |              -1.0 | 2,147,483,647 |               1.0 |
| ub     | unsigned 1-byte integer | 0              |               0.0 | 255           |               1.0 |
| us     | unsigned 2-byte integer | 0              |               0.0 | 65,535        |               1.0 |
| ui     | unsigned 4-byte integer | 0              |               0.0 | 4,294,967,295 |               1.0 |

在 GL_SMOOTH 着色模式，每个顶点对应颜色会平滑地应用到片元上，在顶点构成的片元空间以渐变色填充；而使用 GL_FLAT 平铺模式，假设几何图形由 n 个三角形构成，则片元空间只会使用顶点颜色数组中最后一个颜色进行着色。

Table 4-2 在各种 Flat-Shaded 多边形中 OpenGL 选择颜色的方式：

|      多边形类型      | 用于选择颜色的顶点 |
|----------------------|--------------------|
| single polygon       | 1                  |
| triangle strip       | i+2                |
| triangle fan         | i+2                |
| independent triangle | 3i                 |
| quad strip           | 2i+2               |
| independent quad     | 4i                 |


## ==⚡ Example 05 Lighting
- http://www.glprogramming.com/red/chapter05.html
- https://www.khronos.org/registry/OpenGL-Refpages/es2.0/xhtml/glDepthFunc.xml
- https://www.khronos.org/registry/OpenGL-Refpages/es2.0/xhtml/glCullFace.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glMaterial.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glLightModel.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glLight.xml


本示例展示：

- OpenGL 如果模拟真实世界的光照。
- 定义光源，照亮模型。
- 定义材质属性以反映光照。
- 操纵矩阵堆栈控制光源。

前面讲解模型的彩色使用，但是眼睛看到的彩色并非在完全来自模型，而是光线与模型的材质相互作用下产生的视觉感官效应。光线在物理上可以看作电磁波，不同的波长具有不同的颜色效应，面物体的材质会影响电磁波的形成最终的视觉效果。比如，同样的绿色植物，在白天看起来是绿色的，晚上用其它彩色灯光照射，却会显示不同的颜色。而同样的绿色玻璃，在同样的光线条件下，也与绿色植物看起来不一样，这是材质决定的。

材质影响视觉效果的属性有很多，其中材质颜色属性 Material Colors 是基本的一个，材质的透射率、折射率都会影响视觉效果。透射 Transmission 相关属性对金属无效，对于不透明的材料 Transmission = 0，那么折射率 IOR - Index of Refraction 就是无效属性。物体的粗糙度对光反射有很大的影响，但是 Fresnel 效应一直存在，它会在即使是没有镜面反射的木球也会表现出周边更亮。

而光线与模型接触点是很关键的，按照光的直线传播原理，接触面的法线方向 Normal Vectors 决定的光的反射方向，折射率和入射角共同决定折射方向。

真实世界中，不存在唯一光源，白天除了太阳光，还大量的散射光，透射光。环境光 Ambient, 散射光 Diffuse, 反射光 Specular Light 是 OpenGL 三类主要的模拟光源属性，这决定了模型的材质是否产生效果。

可以参考 PBR - Physically Based Rendering 中对物理学上的光线处理模型。

在 OpenGL 中，基本每次重绘都需要清理画板中旧的图形，不可能看到无限远的物体，只能通过清除方法将这些物休的颜色信息清除：

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

OpenGL 抽象的相机在成像过程中，使用到 3D 空间模型的深度信息 Z，它是模型到镜头的距离，如果要理解为镜头坐标的 Z 轴也可以。在决定是否绘制一个物体的表面时，首先将表面对应像素的深度值与当前深度缓冲区中的值进行比较，如果大于等于深度缓冲区中值，则丢弃这部分。否则利用这个像素对应的深度值和颜色值，分别更新深度缓冲区和颜色缓冲区。这一过程称之为深度测试 Depth Testing。

尝试测试的方式可以通过以下 API 设置：

	void glDepthFunc(GLenum func);

	glEnable (GL_DEPTH_TEST);
	glDisable (GL_DEPTH_TEST);

指定 func 为以下测试比较方式：

| 测试比较方式 |                  说明                  |
|--------------|----------------------------------------|
| GL_NEVER     | 总是不通过，总是不绘制。               |
| GL_LESS      | 测试深度小于保存的深度值时通过。       |
| GL_EQUAL     | 测试深度等于保存的深度值时通过。       |
| GL_LEQUAL    | 测试深度小于或等于保存的深度值时通过。 |
| GL_GREATER   | 测试深度大于保存的深度值时通过。       |
| GL_NOTEQUAL  | 测试深度不等于保存的深度值时通过。     |
| GL_GEQUAL    | 测试深度大于或等于保存的深度值时通过。 |
| GL_ALWAYS    | 总是通过测试，问题绘制。               |

在绘制 3D 场景的模型还需要决定哪些部分是对观察者可见的，或者哪些部分是对观察者不可见的。对于不可见的部分，对于一个不透明的盒子，同时最多只能看到三个面，其它面被遮挡就不应该渲染，这种情况叫做隐藏面消除 Hidden surface elimination。

	glEnalbe(GL_CULL_FACE);
	glDisable(GL_CULL_FACE);

	void glCullFace(GLenum mode);
	void glFrontFace(int mode );

剔除模式 mode：

|      剔除方式     |        说明        |
|-------------------|--------------------|
| GL_BACK           | 只剔除背向面，默认 |
| GL_FRONT          | 只剔除正向面       |
| GL_FRONT_AND_BACK | 剔除正向面和背向面 |


除了需要剔除的面之外，glFrontFace 方法告诉 OpenGL 如何判断正向面：

| 判断模式 |             说明             |
|----------|------------------------------|
| GL_CCW   | 代表逆时针方向为正向面，默认 |
| GL_CW    | 代表顺时针方向为正向面       |

默认设置，假定一个三角形，握住右手四指逆时针方向放在三个顶点对应的绘画顺序上，那么拇指指向的面为正向面。


在 OpenGL 内部定义了 8 个光源属性组 `GL_LIGHT0`, `GL_LIGHT1` ... `GL_LIGHT7`：

	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT0);

创建光源时要在 `light` 参数指定光源属于那一组，还有灯光其它属性：

	void glLight{if}(GLenum light, GLenum pname, TYPEparam);
	void glLight{if}v(GLenum light, GLenum pname, TYPE *param);

Table 5-1 pname 参数指定的光源默认值

|      Parameter Name      |    Default Value     |             Meaning              |
|--------------------------|----------------------|----------------------------------|
| GL_AMBIENT               | (0.0, 0.0, 0.0, 1.0) | ambient RGBA intensity of light  |
| GL_DIFFUSE               | (1.0, 1.0, 1.0, 1.0) | diffuse RGBA intensity of light  |
| GL_SPECULAR              | (1.0, 1.0, 1.0, 1.0) | specular RGBA intensity of light |
| GL_POSITION              | (0.0, 0.0, 1.0, 0.0) | (x, y, z, w) position of light   |
| GL_SPOT_DIRECTION        | (0.0, 0.0, -1.0)     | (x, y, z) direction of spotlight |
| GL_SPOT_EXPONENT         | 0.0                  | spotlight exponent               |
| GL_SPOT_CUTOFF           | 180.0                | spotlight cutoff angle           |
| GL_CONSTANT_ATTENUATION  | 1.0                  | constant attenuation factor      |
| GL_LINEAR_ATTENUATION    | 0.0                  | linear attenuation factor        |
| GL_QUADRATIC_ATTENUATION | 0.0                  | quadratic attenuation factor     |

其中 GL_DIFFUSE、GL_SPECULAR 指定的默认值只应用于 GL_LIGHT0，其它光源属性 GL_DIFFUSE、GL_SPECULAR 默认值是 (0.0, 0.0, 0.0, 1.0)。

可以在初始化阶段指定光源，也可以在重绘事件中指定：

	static void initLights()
	{
		glClearColor(0.0f, 0.0f, 0.7f, 1.0f);

		GLfloat ambientLight[]  = {0.2f,  0.2f,  0.2f,  1.0f};//环境光源
		GLfloat diffuseLight[]  = {0.9f,  0.9f,  0.9f,  1.0f};//漫反射光源
		GLfloat specularLight[] = {1.0f,  1.0f,  1.0f,  1.0f};//镜面光源
		GLfloat lightPos[]      = {50.0f, 80.0f, 60.0f, 1.0f};//光源位置
	 
		glEnable(GL_LIGHTING);                                //启用光照
		glLightfv(GL_LIGHT0, GL_AMBIENT, ambientLight);       //设置环境光源
		glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuseLight);       //设置漫反射光源
		glLightfv(GL_LIGHT0, GL_SPECULAR, specularLight);     //设置镜面光源
		glLightfv(GL_LIGHT0, GL_POSITION, lightPos);          //设置灯光位置
		glEnable(GL_LIGHT0);                                  //打开第一个灯光
	 
		glEnable(GL_COLOR_MATERIAL);                          //启用材质的颜色跟踪
		glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE);    //指定材料着色的面
		glMaterialfv(GL_FRONT, GL_SPECULAR, specularLight);   //指定材料对镜面光的反应
		glMateriali(GL_FRONT, GL_SHININESS, 100);             //指定反射系数
	}

有了光源后，就可以为模型指定材质属性：

	void glMaterialf(   GLenum face, GLenum pname, GLfloat param);
	void glMateriali(   GLenum face, GLenum pname, GLint param);
	void glMaterialfv(  GLenum face, GLenum pname, const GLfloat * params);
	void glMaterialiv(  GLenum face, GLenum pname, const GLint * params);

face 可以设置 GL_FRONT, GL_BACK, GL_FRONT_AND_BACK。

pname 参数设置参考，整形或者浮点值都可以，整形会被映射到 [-1, 1]：

|        pname 值        |                        对应 params 值                        |
|------------------------|--------------------------------------------------------------|
| GL_AMBIENT             | 设置材质对环境光的作用，默认值 (0.2, 0.2, 0.2, 1.0)          |
| GL_DIFFUSE             | 材质对散射光的作用，默认值 (0.8, 0.8, 0.8, 1.0)              |
| GL_SPECULAR            | 设置一个高光值，默认值为 (0, 0, 0, 1)                        |
| GL_EMISSION            | 设置一个自发光值，默认初始值为 (0, 0, 0, 1)                  |
| GL_SHININESS           | 设置一个亮度，默认前后面的值为 0。                           |
| GL_AMBIENT_AND_DIFFUSE | 相当调用两次 API                                             |
| GL_COLOR_INDEXES       | 索引色默认值 (0,1,1)，对应 ambient, diffuse, specular 索引值 |

材质索引色示例：

	GLfloat mat_colormap[] = { 16.0, 47.0, 79.0 };
	glMaterialfv(GL_FRONT, GL_COLOR_INDEXES, mat_colormap);

还可以设置灯光模型：

	void glLightModelf( GLenum pname, GLfloat param);
	void glLightModeli( GLenum pname, GLint param);

	void glLightModelfv( GLenum pname, const GLfloat * params);
	void glLightModeliv( GLenum pname, const GLint * params);

pname 和 params 参数参考：

|            pname             |                  对应 params                  |
|------------------------------|-----------------------------------------------|
| GL_LIGHT_MODEL_AMBIENT       | 默认值 (0.2, 0.2, 0.2, 1.0)                   |
| GL_LIGHT_MODEL_COLOR_CONTROL | GL_SEPARATE_SPECULAR_COLOR 或 GL_SINGLE_COLOR |
| GL_LIGHT_MODEL_LOCAL_VIEWER  | 默认值 0 表示平行 X 轴的光                   |
| GL_LIGHT_MODEL_TWO_SIDE      | 默认值 0 表示前单独光照，否则双面光照         |

<script id="MathJax-script" async
	  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

索引色光照的数学 Color-Index Mode Lighting

As you might expect, since the allowable parameters are different for color-index mode than for RGBA mode, the calculations are different as well. Since there's no material emission and no ambient light, the only terms of interest from the RGBA equations are the diffuse and specular contributions from the light sources and the shininess. Even these need to be modified, however, as explained next.

Begin with the diffuse and specular terms from the RGBA equations. In the diffuse term, instead of diffuselight * diffusematerial, substitute dci as defined in the previous section for color-index mode. Similarly, in the specular term, instead of specularlight * specularmaterial, use sci as defined in the previous section. (Calculate the attenuation, spotlight effect, and all other components of these terms as before.) Call these modified diffuse and specular terms d and s, respectively. Now let \\(s' = min(s,1)\\), and then compute

$$c = am + d(1-s')(dm-am) + s'(sm-am)$$

where am, dm, and sm are the ambient, diffuse, and specular material indexes specified using GL_COLOR_INDEXES. The final color index is

$$c' = min { c, sm }$$

After lighting calculations are performed, the color-index values are converted to fixed-point (with an unspecified number of bits to the right of the binary point). Then the integer portion is masked (bitwise ANDed) with 2n-1, where n is the number of bits in a color in the color-index buffer.



## ==⚡ Chapter 6 Blending, Antialiasing, Fog, Polygon Offset
- http://www.glprogramming.com/red/chapter06.html

章节学习目标：

- 使用色彩混合 Blend 实现半透明效果；
- 使用抗锯齿平滑边线和多边形；
- 使用雾化实现大气模糊效果；
- 在指定深度绘制避免几何体交叠产生不真实感，unaesthetic artifacts；

混合涉及来源和目标两个数据，还有对应的系数，\\((S_r, S_g, S_b, S_a)\\) 和 \\((D_r, D_g, D_b, D_a)\\)，每个分量值范围 [0,1]，混合结果可以这样表示：

$$(R_s S_r+R_d D_r, G_s S_g+G_d D_g, B_s S_b+B_d D_b, A_s S_a+A_d D_a) $$

激活混合模式以及设置混合系数：

	glEnable(GL_BLEND); 
	glDisable(GL_BLEND);

	void glBlendFunc(GLenum sfactor, GLenum dfactor);

禁止混合和设置 `glBlendFunc(GL_ONE, GL_ZERO);` 是等效的，这也是默认的设置。

Table 6-1 Source & Destination 混合因数的计算，加减号表示对应分量相加减：

|        Constant        |    Relevant Factor    |     Computed Blend Factor     |
|------------------------|-----------------------|-------------------------------|
| GL_ZERO                | source or destination | (0, 0, 0, 0)                  |
| GL_ONE                 | source or destination | (1, 1, 1, 1)                  |
| GL_DST_COLOR           | source                | (Rd, Gd, Bd, Ad)              |
| GL_SRC_COLOR           | destination           | (Rs, Gs, Bs, As)              |
| GL_ONE_MINUS_DST_COLOR | source                | (1, 1, 1, 1)-(Rd, Gd, Bd, Ad) |
| GL_ONE_MINUS_SRC_COLOR | destination           | (1, 1, 1, 1)-(Rs, Gs, Bs, As) |
| GL_SRC_ALPHA           | source or destination | (As, As, As, As)              |
| GL_ONE_MINUS_SRC_ALPHA | source or destination | (1, 1, 1, 1)-(As, As, As, As) |
| GL_DST_ALPHA           | source or destination | (Ad, Ad, Ad, Ad)              |
| GL_ONE_MINUS_DST_ALPHA | source or destination | (1, 1, 1, 1)-(Ad, Ad, Ad, Ad) |
| GL_SRC_ALPHA_SATURATE  | source                | (f, f, f, 1); f=min(As, 1-Ad) |

举例说明：

	glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

源因子 GL_SRC_ALPHA 表示用来源数据的 Alpha 与来源像素相乘，目标因子 GL_ONE_MINUS_SRC_ALPHA 表示对来源 Alpha 取反再和目标像素相乘。结果就是，来源相素 Alpha 越高即透明度越低，混合后的两个图案中，来源图案更清晰。

另一个例子：

	glBlendFunc(GL_ONE, GL_ZERO);

这就使用使用来源的像素覆盖目标像素，因为来源因子全是 1 表示完全保留，目标因子全是 0 表示被覆盖。

Table 6-2 在 glHint(target, hint) 使用的常量

|           Parameter            |                       Meaning                       |
|--------------------------------|-----------------------------------------------------|
| GL_FOG_HINT                    | 指定雾体是按像素 GL_NICEST 还按顶点 GL_FASTEST 处理, |
| GL_LINE_SMOOTH_HINT            | 指定线条采样质量                                    |
| GL_PERSPECTIVE_CORRECTION_HINT | 指定颜色或纹理插值的质量                            |
| GL_POINT_SMOOTH_HINT           | 指定顶点采样质量                                    |
| GL_POLYGON_SMOOTH_HINT         | 指定多边形采样质量                                  |


示例：

- Example 6-1 : Blending Example: alpha.c 绘制两个三角形演示了混合因子对混合结果的影响。
- Example 6-2 : Three-Dimensional Blending: alpha3D.c 展示 3D 混合，其中使用了显示列表 Display List。
- Example 6-3 : Antialiased lines: aargb.c 展示了抗锯齿效果。
- Example 6-8 : Polygon Offset to Eliminate Visual Artifacts: polyoff.c 展示几何体边线

使用了显示列表，参考 Chapter 07。


## ==⚡ Chapter 07 Display Lists
- http://www.glprogramming.com/red/chapter07.html

学习目标：

- 理解显示列表如果在 OpenGL 立即模式下组织数据；
- 如何利用显示列表最优化性能；

显示列表可以用来保存一组 OpenGL 命令，在后续执行以提高性能。

基本使用流程，先在初始化过程定义显示列表，可以嵌套，然后在后续重绘渲染时执行：

	static void init(void)
	{
	   theTorus = glGenLists (1);
	   glNewList(theTorus, GL_COMPILE);
	   // glVertex3f ...
	   // glCallList(frame); call another
	   glEndList();

	   glShadeModel(GL_FLAT);
	   glClearColor(0.0, 0.0, 0.0, 0.0);
	}

	/* Clear window and draw torus */
	void display(void)
	{
	   glClear(GL_COLOR_BUFFER_BIT);
	   glColor3f (1.0, 1.0, 1.0);
	   glCallList(theTorus);
	   glFlush();
	}

经过显示列表的优化，比如原先需要执行三角函数和开平方根的旋转操作，优化后只需要存储最终的变换矩阵，可以像硬件一样快速执行 `glMultMatrix*()`。

并非所有 OpenGL 命令都支持显示列表，以下这部分是支持的：

	| glColorPointer()       | glGet*()              | glSelectBuffer()    |
	| glFlush()              | glReadPixels()        | glFeedbackBuffer()  |
	| glNormalPointer()      | glEdgeFlagPointer()   | glIsEnabled()       |
	| glDeleteLists()        | glIndexPointer()      | glTexCoordPointer() |
	| glGenLists()           | glRenderMode()        | glFinish()          |
	| glPixelStore()         | glEnableClientState() | glIsList()          |
	| glDisableClientState() | glInterleavedArrays() | glVertexPointer()   |

可以删除已经定义的显示列表：

	GLboolean glIsList(GLuint list);


示例：

- Example 7-1 : Creating a Display List: torus.c
- Example 7-2 : Using a Display List: list.c
- Example 7-5 : Multiple Display Lists to Define a Stroked Font: stroke.c

例 7-5 展示了 glCallLists 多次调用显示列表来打印字符，此示例没有使用字符，而是通过定点连线的方式显示字符，提供了一个文字显示方法的参考。通过预定义 6 x 11 点阵字符 A, E, P, R, S 数据，根据字符的复杂度定义不同的取样点，还定义了三个常量 PT、STROKE、END 表示字符中的采样点、断笔位置和符号结束点。

先是初始化显示列表，注意这里使用的偏移和字符关联起来了：

    GLuint base;

    glShadeModel (GL_FLAT);

    base = glGenLists (128);
    glListBase(base);
    glNewList(base+'A', GL_COMPILE); drawLetter(Adata); glEndList();
    glNewList(base+'E', GL_COMPILE); drawLetter(Edata); glEndList();
    glNewList(base+'P', GL_COMPILE); drawLetter(Pdata); glEndList();
    glNewList(base+'R', GL_COMPILE); drawLetter(Rdata); glEndList();
    glNewList(base+'S', GL_COMPILE); drawLetter(Sdata); glEndList();
    glNewList(base+' ', GL_COMPILE); glTranslatef(8.0, 0.0, 0.0); glEndList();

API 原型：

	void glListBase(GLuint base);
	void glCallLists(GLsizei n, GLenum type, const GLvoid *lists);

然后，再使用多次执行显示列表的方式将字符打印出来，调用显示列表时，将字符串传入，OpenGL 会逐一字节执行，而且，每个字节的值是作为显示列表的号码使用的，也即调用了前面用字符关联起来的显示列表：

	glCallLists(len, GL_BYTE, (GLbyte *)s);

注意 drawLetter 这个方法，它负责将预定义的字符数据按连线方式 GL_LINE_STRIP 绘图，glVertex2fv 接收坐标数据的指针：

	void drawLetter(CP *l)
	{
		glBegin(GL_LINE_STRIP);
		for (;;) {
		switch (l->type) {
			case PT:
			glVertex2fv(&l->x);
			break;
			case STROKE:
			glVertex2fv(&l->x);
			glEnd();
			glBegin(GL_LINE_STRIP);
			break;
			case END:
			glVertex2fv(&l->x);
			glEnd();
			glTranslatef(8.0, 0.0, 0.0);
			return;
		}
		l++;
		}
	}

例如，可以这样定义一个感叹号：

	CP EMdata[] = {
		{3, 10, PT}, {3, 3, STROKE}, {3, 1, PT}, {3, 0, END}
	};


## ==⚡ Font & FreeType
- [FreeType Glyph Conventions](https://freetype.org/freetype2/docs/glyphs/index.html)
- [Glyph Metrics](https://www.freetype.org/freetype2/docs/glyphs/glyphs-3.html)
- [FreeType库加载字体并在GL中绘制文字](https://www.cnblogs.com/crsky/p/7261090.html)
- [MakeOTF OpenType/CFF compiler - User Guide](http://adobe-type-tools.github.io/afdko/MakeOTFUserGuide.html)
- [HarfBuzz - Text shaping engine](https://harfbuzz.github.io/)
- [Text fancy](https://textfancy.com/ascii-art/)

现在，主流字体有：

- TrueType Font
- OpenType Font
- PostScript, Type 1

FreeType 是免费开源字体渲染库，支持 WOFF、TTF、OTF 等多种格式；

TrueType 是由美国苹果公司和微软公司共同开发的一种电脑轮廓字体类型标准，字体在实际显示输出时，根据大小生成相应的符号。这种类型字体文件的扩展名是.ttf，类型代码是 tfil。TrueType 轮廓由直线和二次贝塞尔曲线 bézier 片段构成。这些构建在数学上比平面设计界 PostScript 使用的三次贝塞尔曲线更容易处理。

早在 1980 年代末，苹果公司为了对抗 Adobe 公司的 Type 1 PostScript 字体，设计开发了 TrueType。微软加入后，Windows 系统的字体格式基本上都统一成 TrueType。TrueType 后来也被 Linux 等系统使用，成为标准字体。TrueType 的主要强项在于它能给开发者提供关于字体显示、不同字体大小的像素级显示等的高级控制。

微软还开发了一个叫“智能字体”的技术，在 1994 年称为 TrueType Open，然后在与 AdobeType 1 技术合并后改名为 OpenType。

从最初像素化的光栅字体，到现在的矢量字体，在缩放上有了极大的灵活性。矢量字体以贝塞尔曲线描述字符轮廓，而每个字符采用索引号与矢量数据关联。因而每种矢量字库都是由两部分组成，索引信息和字形轮廓 `Glyph Metrics` 数据。当显示文字时，根据索引号提取出字形轮廓，并通过贝塞尔曲线算法数据中的坐标点，填充封闭空间轮廓。

在矢量数据到显示文字这个过程，就是将矢量光栅化 `Rasterizer` 得到位图像素的过程，最后显示出来的还是光栅像素，本质上和原先的光栅字体并无差别。在高级的字符处理软件上，文字可以实现选择，复制等等功能，就从选择操作上来讲，选择前后状态的变化还是在渲染光栅，只是采用了不同颜色、背景进行渲染。

从印刷排版 Typography 层面上，font 或者 fontface 是指一个成套的字体，而 glyph 则是字体文字中字符 character 的一种视觉表现。

而 character 与 glyph 亦非一一对应的关系，一个 character 可能对应多个 glyph, 如希腊语的大、小写 sigma。 从字体设计角度看，某些字体亦提供一个字形的不同写法。

在字体技术实现上，字符需要一条基线 Baseline 来实现排版对齐，而每个字符需要 Glyph Metrics 存储以下基本的字符度量数据，对应 FT_Glyph_Metrics 结构体：

- origin 坐标参考原点
- width 字符宽度
- xMin、xMax 横轴起止坐标
- yMin、yMax 竖轴起止坐标
- height 字符高度
- bearingX 起始位
- advance 位于 face->glyph->advance，每个字形占据的间隔 Kerning 

| horizontal metrics | vertical metrics |
|--------------------|------------------|
| ![Glyph Metrics horizontal](https://www.freetype.org/freetype2/docs/glyphs/metrics.png) | ![Glyph Metrics vertical](https://www.freetype.org/freetype2/docs/glyphs/metrics2.png)

一般的字符串处理流程：

- 将字符串转换成 glyph 索引序列；
- 将绘制点对应到当前光标位置；
- 获取或加载 glyph 图像数据；
- 对 glyph 进行坐标变换以对应到光标位置；
- 渲染字符到目标设备上；
- 根据字符间距增量 glyph's advance width 移动光标位置；
- 重复开始另一个字符的渲染过程；


来看看 FreeType 的光栅化说明文档 raster.txt 对二次曲线的讲解：

                                        *            # on curve
                                                     * off curve
                                     __---__
        #-__                      _--       -_
            --__                _-            -
                --__           #               \
                    --__                        #
                        -#
                                 Two `on' points
         Two `on' points       and one `off' point
                                  between them

                      *
        #            __      Two `on' points with two `off'
         \          -  -     points between them. The point
          \        /    \    marked `0' is the middle of the
           -      0      \   `off' points, and is a `virtual
            -_  _-       #   on' point where the curve passes.
              --             It does not appear in the point
              *              list.

可以想象，两个 on 点间连直线，再通过 off 点对直线产生拉伸作用，最后根据拉伸强度产生一条曲线，当然二次曲线不仅可以描述曲线还可以描述直线。

在曲线的描述中，坐标使用的是与相像无关的参考系，FreeType 中使用 `26.6` 格式的浮点数表示，即在一个 32-bit 数值中，26-bit 表示整形，6-bit 表示浮点精度。

字形在生成过程中，还可以根据不同的字符前后连接关系产生连笔图形，这可以集成 HarfBuzz 文字整形引擎实现。

官方 FreeType Tutorial 非常详细地讲解了如何加载字形，和字形的管理。

FreeType 的一般使用流程参考官方的 FreeType Tutorial / III Example 示范：

1. Header Files

		#include <ft2build.h>
		#include FT_FREETYPE_H

2. Library Initialization

		FT_Library  library;
		...
		error = FT_Init_FreeType( &library );
		if ( error )
		{
		    ... an error occurred during library initialization ...
		}

3. Loading a Font Face

		FT_Library  library;   /* handle to library     */
		FT_Face     face;      /* handle to FT_FaceRec  */

		error = FT_Init_FreeType( &library );
		if ( error ) { ... }

	加载字体有两种基本方式，从字体文件载入：

		error = FT_New_Face( library,
		                    "/usr/share/fonts/truetype/arial.ttf",
		                    0,
		                    &face );
		if ( error == FT_Err_Unknown_File_Format )
		{
		    ... the font file could be opened and read, but it appears
		    ... that its font format is unsupported
		}
		else if ( error )
		{
		    ... another error code means that the font file could not
		    ... be opened or read, or that it is broken...
		}

	也可以选择从内存数据中载入，只需要将字体文件数据先行读取：

		error = FT_New_Memory_Face( library,
		                            buffer,    /* first byte in memory */
		                            size,      /* size in bytes        */
		                            0,         /* face_index           */
		                            &face );
		if ( error ) { ... }

4. Accessing the Face Data

	通过 FT_FaceRec 结构体获得字体信息，FT_FaceRec 结构描述包含了可用字段的完整列表，这里罗列部分：

	|      Field      |                                         说明                                         |
	|-----------------|--------------------------------------------------------------------------------------|
	| num_glyphs      | 字体可用的 glyphs 数量                                                               |
	| face_flags      | 32-bit 整数，用来描述 face 各种特性. 例如 FT_FACE_FLAG_SCALABLE 表示可伸缩性字形图像 |
	| units_per_EM    | 可伸缩性的格式有效，指示 EM 对应像素单位数量                                         |
	| num_fixed_sizes | 当前 face 嵌入位图的笔画 strikes 数量，                                                |
	| available_sizes | FT_Bitmap_Size 指针，指示了每个垂直、水平 strikes 字形像素大小                           |

	一个 strike 就是一系列字形 glyph 图像，例如，一个字体 face 可以包含象素尺寸为 10、12 和 14 的 strike，注意，可伸缩的字体格式也可以包含嵌入的位图！


5. Setting the Current Pixel Size

	设置字符 dpi 大小，dots-per-inch，或直接指定像素大小

		error = FT_Set_Char_Size(
		        face,    /* handle to face object           */
		        0,       /* char_width in 1/64th of points  */
		        16*64,   /* char_height in 1/64th of points */
		        300,     /* horizontal device resolution    */
		        300 );   /* vertical device resolution      */

		error = FT_Set_Pixel_Sizes(
		        face,   /* handle to face object */
		        0,      /* pixel_width           */
		        16 );   /* pixel_height          */

6. Loading a Glyph Image

	加载字形图像，首先要将字符代码转换成索引 Character Code --> Glyph Index，根据索引加载字形图像，再渲染字形得到位图数据。

		glyph_index = FT_Get_Char_Index( face, charcode );

		error = FT_Load_Glyph(
		        face,          /* handle to face object */
		        glyph_index,   /* glyph index           */
		        load_flags );  /* load flags, see below */

	加载标志默认 `FT_LOAD_DEFAULT`，当字形和对应像素大小的位图找到后就会加载到字形槽对象上 `FT_GlyphSlot`，嵌入式位图总是比原生图像格式更优先，因为假设它们是同一字形的更高质量版本，当然，可以设置加载标志 `FT_LOAD_NO_BITMAP` 来改变这个默认行为。

	|       标志位设置       |                             说明                             |
	|------------------------|--------------------------------------------------------------|
	| FT_LOAD_MONOCHROME     | 加载 1-bit Monochrome 位图，通常搭配 FT_LOAD_RENDER 渲染轮廓 |
	| FT_LOAD_FORCE_AUTOHINT | 打开抗锯齿，默认行为                                         |
	| FT_LOAD_NO_AUTOHINT    | 关闭抗锯齿                                                   |
	| FT_LOAD_RENDER         | 加载时就已经生成图像                                         |
	| FT_LOAD_NO_BITMAP      | 加载时不生成图像，注意，需要在加载后调用 FT_Render_Glyph     |

	如果加载到的是原生字形图像，它会缩放到当前的像素大小，并为相应格式，如 TrueType、Type 1 进行微调。`face−>glyph−>format` 描述了字形槽中保存的字形图像的格式信息，如果不是 FT_GLYPH_FORMAT_BITMAP 类型，那么可以调用 `FT_Render_Glyph` 函数即可转换为位图。

		error = FT_Render_Glyph( 
				face->glyph,   /* glyph slot  */
		        render_mode ); /* render mode */

	渲染模式可以选择灰度或单色，FT_RENDER_MODE_NORMAL、FT_RENDER_MODE_MONO，分别表示用 8-bit 或 1-bit 表示一个像素位。

	`FT_GlyphSlot` 字形槽的目的是提供一个地方装入字形映象，而不管它的格式（位图、向量轮廓或其他）。理想的，一旦一个字形槽创建了，任何字形映象可以装入，无需其他的内存分配。在实际中，只对于特定格式才如此，像 TrueType，它显式地提供数据来计算一个槽地最大尺寸。

	另一个字形槽地原因是他用来为指定字形保存特定格式的微调 hint，以及其他为正确装入字形的必要数据。`FT_GlyphSlotRec` 结构体只向客户程序展现了字形各种信息，包括 metics 和映象数据，在源代码中有详细的注解。

	每个字体对象都有一个字形槽对象，可以用 `face->glyph` 直接访问。


	通常，字符码是一个特定编码中代表该字符的数值，例如，字符码 64 代表了 ASCII 编码中的 A。

	一个 face 对象包含一个或多个字符表 charmap 用来转换字符码到字形索引。例如，很多 TrueType 字体包含两个字符表，一个用来转换 Unicode 字符码到字形索引，另一个用来转换 Apple Roman 编码到字形索引。这样的字体既可以用在 Windows 又可以在 Macintosh 使用。注意，一个特定的字符表可能没有覆盖完字体里面的全部字形。

	当新建一个 face 对象时，默认选择 Unicode 字符表。如果字体没包含 Unicode 字符表，FreeType 会尝试在字形名的基础上模拟一个。注意，如果字形名是不标准的那么模拟的字符表有可能遗漏某些字形。对于某些字体，如符号字体和旧的亚洲手写字体，Unicode 模拟是不可能的。

	在获取字符索引时，可以指定字符映射表，无论通过 FT_Select_CharMap、FT_Set_CharMap，都会在 FT_Get_Char_Index 调用使用。

		error = FT_Select_Charmap(
			    face,               /* target face object */
			    FT_ENCODING_BIG5 ); /* encoding           */

		FT_CharMap  found = 0;
		FT_CharMap  charmap;
		int         n;


		for ( n = 0; n < face->num_charmaps; n++ )
		{
		    charmap = face->charmaps[n];
		    if (charmap->platform_id == my_platform_id &&
		        charmap->encoding_id == my_encoding_id )
		    {
		        found = charmap;
		        break;
		    }
		}

		if ( !found ) { ... }

		/* now, select the charmap for the face object */
		error = FT_Set_Charmap( face, found );
		if ( error ) { ... }

	当字形图像被装载时，可以对该字形图像进行仿射变换，当然，这只适用于可伸缩（矢量）字体格式。FT_Set_Transform 对指定的字体进行仿射变换，传入一个 2 x 2 仿射矩阵 FT_Matrix 结构体指针。再传入一个用于平移变换的 FT_Vector 结构的指针，用来在 2x2 仿射变换后对字形图像平移。

		error = FT_Set_Transform(
		        face,       /* target face object    */
		        &matrix,    /* pointer to 2x2 matrix for affine transfomation*/
		        &delta );   /* pointer to 2d vector for translatation  */

接下来就是参考示范代码学习 FreeType 的使用:

- example1.c 

	例子程序渲染一个 8 位 Latin-1 文本字符串，并且假定 face 包含一个 Unicode 字符表。该程序的思想是建立一个循环，在该循环的每一次迭代中装载一个字形图像，把它转换为一个抗锯齿位图，把它绘制到目标表面 surface 上，然后增加当前笔的位置。

- example2.cpp

	Erik Möller 提供的示例，演示了内存加载字体的方式，通过读入字体文件数据，实现彩色文字的渲染并输出到 TGA 图片中。

- example3.cpp

	展示 FreeType B/W rasterizer，需要源代码包中的 ftraster.c，要求 FreeType 2.3.10 以上版本。

- example4.cpp

	Róbert Márki 提供的 Qt 示例，带 qmake 脚本，展示了缓冲区回调渲染，需要 FreeType 2.4.3 以上版本。

	根据 FreeType 安装位置修改一下 Qt 工程 INCLUDEPATH，再使用 qmake 编译生成 Makefile 脚本并进行生成编译:

		qmake example4.pro
		make release

- example5.cpp

	由 Static Jobs LLC 提供的 C++ 示例，展示 FT_Outline_Decompose 将字形转换为 SVG。


FreeType API 分成几个类别，具体参考官方提供的手册：

- Core API 

	- FreeType Version FT_Library_Version
	- Basic Data Types
	- Base Interface
	- Unicode Variation Sequences
	- Glyph Color Management
	- Glyph Layer Management
	- Glyph Management
	- Mac Specific Interface
	- Size Management
	- Header File Macros

- Format-Specific API 

	- Multiple Masters
	- TrueType Tables
	- Type 1 Tables
	- SFNT Names
	- BDF and PCF Files
	- CID Fonts
	- PFR Fonts
	- Window FNT Files
	- Font Formats
	- Gasp Table

- Controlling FreeType Modules 

	- The auto-hinter
	- The CFF driver
	- The Type 1 and CID drivers
	- The TrueType driver
	- The PCF driver
	- Driver properties
	- Parameter Tags
	- Subpixel Rendering

- Cache Sub-System 
- Support API 

	- Computations
	- List Processing
	- Outline Processing
	- Quick retrieval of advance values
	- Bitmap Handling
	- Scanline Converter
	- Glyph Stroker
	- System Interface
	- Module Management
	- GZIP Streams
	- LZW Streams
	- BZIP2 Streams

- Error Codes 

	- Error Enumerations
	- Error Code Values

- Miscellaneous 



FreeType 头文件包含的风格有点异类，它是先定义好头文件的宏，再包含：

	#define FT_ERROR_DEFINITIONS_H  <freetype/fterrdef.h>

	#include FT_ERROR_DEFINITIONS_H

错误枚举量也通过宏定义，嵌套了几层，代码倒是节省了不少字数。


## ==⚡  Wide char
- [编程与编码](http://blog.csdn.net/WinsenJiansbomber/article/details/50693186)
- [编程与编码 PDF 版](http://download.csdn.net/detail/winsenjiansbomber/9460359)
- [Unicode 6.3 码表查询](http://www.unicode.org/charts/)

基础 ASCII 编码方案中，只需要一个字节 8-bit 存储字符编码信息，而宽字符集，典型的是中日韩字符集，字符数量远远超过 256 个，用一个字节是存储不下的。

在字体实现的逻辑中，参考 FreeType 开源库，字符的编码其实就是一个数值，对应了字体中的一个字形索引 Glyph Index，通过字形索引取得字体中记录的字形图案。ASCII 是比较容易处理的一种字符编码方案，每个字符只需要处理一个字节。而宽字符会有不同的编码方案，如早期的简体中文 GB2312 就经历多次的修改，现在更多的是以 Unicode 方案为主。

在 Unicode 出现前，Windows 系统作为一个多语言的操作系统，它是通过一个特定字符集来实现多语言的。例如 Windows 95 的简体中文版和繁体中文版分别使用 GBK、Big5 字符集编码。引入 Unicode 后，Windows 将这些不同的字符集以代码页 Code Pages 的形式与 Unicode 字符相互转换，例如:

	cp932 - 日文
	cp936 - 简体中文 GBK
	cp949 - 韩文
	cp950 - 繁体中文 BIG5
	65000 — UTF-7 Unicode
	65001 — UTF-8 Unicode

即使是同样的单字节编码，比如说码点 0xA4 在 ISO-8859-1 和 ISO-8859-15 字符集中分别表示 ¤ 和 €。同样的码值 ，显示结果不同，是因为使用的字体不同，或者字体相同，但是映射的区域不同。现在的 Unicode 字体可以包含大量的字符定义，在打开文件时，软件需要知道用什么字符集去解释码值，这就是字符集 存在意义。

中文编码方案的发展路线是 GB2312 -> GBK -> GB18030，支持的字符数依次增加，GB2312 只包含常用的简体汉字，是早期标准，Windows 98 简体中文版使用的是 GBK 方案带繁体字，它们均为双字节编码方案，另外 BIG5 是繁体字编码方案。现在来看，UTF-8 是最佳选择，全球通用。

GB2312 原指国家 1980 年的一个标准《中华人民共和国国家标准 信息交换用汉字 编码字符集 基本集 GB 2312-80》。这个标准用两个数来编码汉字和中文符号，第一个数 称为“区”，第二个数称为“位”。所以也称为区位码。1-9 区是中文符号，16-55 区是一级汉字，56-87 区是二级汉字。

比如说同一个“汉”字，在 GB18030 的编码为 0xBABA，UTF-16 编码为 0x6C49，汉字作为一个大数量的字符集，在各种编码间的映射关系也是十分混乱的，转换工作基本上靠查表，字符编码值可以使用 Editplus、Hex Workshop 等软件来查看：

	BA BA		GB18030 
	E6 B1 89	UTF-8
	49 6C		UTF-16 little endian(FF FE) 
	6C 49		UTF-16 bit endian(FE FF)

以下为各汉字对应数值，如果在编辑器中，Intel CPU 平台下是小尾序的，通常看到的值是反序的：

| 汉字 | Unicode |   UTF8   |  GBK   | GB2312 |  BIG5  |
|------|---------|----------|--------|--------|--------|
| 汉   | 0x6C49  | 0xE6B189 | 0xBABA | 0xBABA | -      |
| 漢   | 0x6F22  | 0xE6B189 | 0x9D68 | -      | 0xBA7E |
| 中   | 0x4E2D  | 0xE4B8AD | 0xD6D0 | 0xD6D0 | 0xA4A4 |
| 华   | 0x534E  | 0xE58D8E | 0xBBAA | 0xBBAA | -      |
| 華   | 0x83EF  | 0xE88FAF | 0xC841 | -      | 0xB5D8 |

所谓代码页 code page 是 Windows 系统对一种语言文字的字符编码说法。 Windows 中有缺省代码页的概念，即缺省用什么编码来解释字符。在中文 Windows 98 的系统中目录，还提供了各种中文编码到 Unicode 转换的码表文件，

- CP949.txt 韩语 -> Unicode 码表
- CP932.txt 日语 -> Unicode 码表
- CP936.txt 简体中文 -> Unicode 码表
- CP950.txt 繁体中文 -> Unicode 码表

如 cp950.txt 记录的是 BIG5 到 Unicode 的转换码表。例如，中華两字在 BIG5 的码表中表示：

	0xA4A4	0x4E2D	#CJK UNIFIED IDEOGRAPH
	0xB5D8	0x83EF	#CJK UNIFIED IDEOGRAPH

内码是指 Windows 操作系统内部的字符编码。早期操作系统的内码是与语言相关的.现在的 Windows 在内部统一使用 Unicode，然后用代码页适应各种语言，内码的概念淡去了。微 软一般将缺省代码页指定的编码说成是内码，在特殊的场合也会说自己的内码是 Unicode，例如在 GB18030 问题的处理上。


在编码转换上有开源的 iconv 库，提供全面的编码转换支持。
 

历史上, 有两个组织创建了单一通用字符集，一是国际标准化组织(ISO) 的 ISO 10646 项目，于1993年发布，简称 UCS，全称 Universal Multiple-Octet Coded Character Set。 另一个是由美国的多语言软件制造商组成的协会组织的 Unicode 项目，后来二者合并了。

最开始使用的 UCS 方案使用 2 字节编码，如 U+0032 表示空格，U+0041 表示字母 A，U+0061 表示字母 a，这种 U+ 形式的值就是码值 USV - Unicode Scalar Values。

UCS-2 使用高 8 位作为行编码，低 8 位为列编码，形成一个 256 行 256 列的逻辑数据结构。这样 0 行中的 256 个列空间就用来存储标准的 ISO/IEC 8859-1 编码，即以两个字节存储 ANSII 字符，内存消耗原来的 2 倍。

完整的 4 字节的新标准 UCS-4，对于 UCS-4 方案：

- 第一字节指定最高位为 0，其余 7-bit 表示 2^7=128 分组；
- 第二个字节表示 2^8=256 平面。
- 余下两字节保持 UCS-2 相同的逻辑结构，因此可以兼容。

这样 0 组 0 平面上就存放有 UCS-2 的完整编码，它又称为基本多语言平面 BMP - Basic multilingual plane。收录有 21204 个在中、日、韩使用的象形字 ideographic characters，有 6656 个韩国象形象声字 morphograms and syllabograms，总字符 34203 个接近极限容量。第二个平面就称为增补平面 SMP Supplementary Planes，第三个平面就是象形字增补平面 SIP - Supplementary Ideographic Plane。

实际使用过程中，一般 Unicode 指双字节的 UCS-2，对应 UTF-16 编码方案被普遍使用，UTF - Unicode Transformation Format 在 Windows NT 系统广泛使用，这种固定 2 字节编码为 Windows NT 内核编码方案。固定字节数可以使用程序在实现上更简洁，也更加有效率，例如，统计字符数量时直接按字节数的一半计算即可，但是占用内存。

UTF-16 的编码空间安排如下：

	U+0000 to U+D7FF 有效
	U+D800 to U+DFFF 保留
	U+E000 to U+FFFF 有效

在存储时，不同的编码可以选地指定一个相应的文件头 BOM - Byte Order Mark：

	EF BB BF     UTF-8 BOM
	FE FF        UTF-16/UCS-2, big endian
	FF FE        UTF-16/UCS-2, little endian
	00 00 FE FF  UTF-32/UCS-4, big endian
	FF FE 00 00  UTF-32/UCS-4, little endian.

像 UTF-8 这种变长编码方案则在文件存储等应用场景中大量使用，基本是一个统一码的事实标准存储方案。要计算 UTF8 字符串长度不能直接计算字节数，它要检测首字节的标记位，以得知检测中的字符占多少字节，或者加载后转换成 Unicode 再使用。

在编写 C++ 源代码文件时，就要注意编码格式，如果使用了宽度字符它会按不同编码方案而以不同的值出现，使用 Sublime 编辑器可以使用 Hex Viewwer 查看编码值。

UTF-8 是 UNICODE 的一种变长度的编码表达方式，由于节省空间，在互联网上是应用最广泛的编码方案。它由Ken Thompson 于 1992 年创建，现在已经标准化为 RFC 3629。UTF-8 的编码规则很简单，只有二条：

- 对于单字节的符号，字节的第一位设为 0，后面 7-bit 为这个符号的 Unicode 码。因此，UTF-8 编码和 ASCII 码是相同的。
- 对于 n 字节的符号（n>1），第一个字节的前 n 位都设为 1，第 n+1 位设为 0，后面字节的前两位一律设为 10。剩下的没有提及的二进制位，依次填入 Unicode 编码。

下表 UCS-4 和 UTF-8 转换关系表总结了编码规则，字母 x 表示可用 UTF8 编码的位。

|        UCS-4编码        |                       UTF-8编码                       |
|-------------------------|-------------------------------------------------------|
| U+00000000 – U+0000007F | 0xxxxxxx                                              |
| U+00000080 – U+000007FF | 110xxxxx 10xxxxxx                                     |
| U+00000800 – U+0000FFFF | 1110xxxx 10xxxxxx 10xxxxxx                            |
| U+00010000 – U+001FFFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx                   |
| U+00200000 – U+03FFFFFF | 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx          |
| U+04000000 – U+7FFFFFFF | 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx |

学会看 Unicode 码表 Code chars 很重要，码表是字符集的组织结构，所有已经收录的字符集都可以在码表上查询得到它的具体信息，如字符外观，码值。码表以 8 例 16 行组织，每列头有一个数值，表示不含低 8 位的码值。低 8 位码值则显示在每一行的头部，两个值组合起来就是一个完整的 USV 码值。

例如 Latin Extended-A 字符集上的第一个字符 Ā 的码值就是 U+0100。紧接着码表，还有一个名字列表，描述了字符的在 Unicode 系统内的命名和相关字符信息。在 HTML 中可以直使用转义符来表达 Ā，其中 x 表示 16 进制，如果省去则表示使用 10 进制数值。官方提供的工具 UniBook™ 也可以做这样的查询而且还方便使用，这个工具基于 UCD - Unicode Character Database 开发的，UCD 是 Unicode 第一手最完整也最原始的资源，码表也是 UCD 资源的一部分，还 UCD 的 XML 格式的数据文件，这些资源构成了 Unicode 编码的完整描述。例如，要找一个汉字，你可以通过部首偏旁 Radicals 的索引来快速定位。


各家编译器对宽字符的处理是有些差别的，GCC 编译器默认按照 UTF-8 解析代码文件。如果存成 GBK，在编辑器中可能看到 Windows 1252 这样的编码，其实就是 GBK。而 GCC 当作 UTF-8 解析，编译的时候报错：

	error: converting to execution character set: Illegal byte sequence

编译器可以设置 `-finput-charset` 选项来指定源文件的编码方案例如，指定 -finput-charset=GBK。编译好的执行文件也可以指定编码方案，如果两者不一致就可能导致乱码。

中文版 Windows 控制台显示缺省使用的字符集是 GBk，但是默认情况下，GCC 编译之后的执行文件时编译成 UTF-8 编码，所以又出现了不统一，乱码由此而生。可以将控制台切换为 Unicode，或者指定可执行程序使用的编码方案 `-fexec-charset`：

	chcp 65001

MinGW GCC 中没有完成 Windows 平台下的 wchar_t 的移植，所以不能使用：

>don't wide characters work with libstdc++?
>The wide-character parts of the GCC Standard C++ Library (libstdc++) have not yet been fully ported to Windows, so you cannot use most of these features with MinGW. 

	std::wcout

	basic_string<wchar_t>


- wchar_t - Unicode 字符，虽然是保存的是整形数据，但是不能当作数值看待。如果系统支持 Unicode 就是一个 32 bits 字符。在 Windows 平台下 wchar_t 是 16 bits 字符保存 UTF-16 编码单元。

- char16_t - UTF-16 字符，占 16 bits，它的大小符号和 std::uint_least16_t 相同，但不能看作同一种类型。

- char32_t - UTF-32 字符，点 32 bits，它的大小符号和 std::uint_least32_t 相同，但不能看作同一种类型。 (since C++11) 




## ==⚡ Chapter 08 Drawing Pixels, Bitmaps, Fonts, and Images
- http://www.glprogramming.com/red/chapter08.html
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glReadPixels.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glDrawPixels.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glCopyPixels.xml
- [Window Bitmaps](https://docs.microsoft.com/en-us/windows/win32/gdi/bitmaps)
- [Bitmap File Format Summar](http://www.fileformat.info/format/bmp/egff.htm)

学习目标：

- 定位与绘制图像数据；
- 从 frame buffer 读取位图及图像到处理器，或从内存到 frame buffer；
- 在不同的 frame buffer 间拷贝像素色彩数据；
- 在写入 frame buffer 时缩放图像；
- 在 frame buffer 间处理图像时，控制像素格式以及进行其它变换；

绘制图像前通常需要指定光栅位置：

	void glRasterPos{234}{sifd}(TYPE x, TYPE y, TYPE z, TYPE w);
	void glRasterPos{234}{sifd}v(TYPE *coords);

	void glBitmap(	GLsizei width,
	 	GLsizei height,
	 	GLfloat xorig,
	 	GLfloat yorig,
	 	GLfloat xmove,
	 	GLfloat ymove,
	 	const GLubyte * bitmap);

图像绘制除了指定宽高像素外，还要指定：

- xorig, yorig 图像原点坐标，位图以左下角为 0 点坐标，右上角为正；
- xmove, ymove 在绘图完成后，对当前光栅位置的增量；
- bitmap 指定像素数据地址；

例如，以下表示绘制一个 10 x 12 像素的图像，然后将光栅位置右移 11.0：

	glBitmap (10, 12, 0.0, 0.0, 11.0, 0.0, rasters);

在光栅定位前，可以位图设置颜色，glRasterPos 之前设置的颜色在本次绘图生成，之后设置的颜色在下回绘图时才有效。

如果光栅位置超出显示区域，则不会渲染，并且光栅位置保持无效状态，通过以下 API 确认光栅位置有效性：

	glGetFloatv(GL_CURRENT_RASTER_POSITION, pointer_x_y_z_w);
	glGetBooleanv(GL_CURRENT_RASTER_POSITION_VALID);

glBitmap 这个方法绘制的像素只是一个 bit 位，以下光栅 bit 数据定义，可以通过相应的 bit 位看到，置位的部分对应了一个 倒 F 字符：

	GLubyte rasters[24] = {
	   0xc0, 0x00, 0xc0, 0x00, 0xc0, 0x00, 0xc0, 0x00, 0xc0, 0x00,
	   0xff, 0x00, 0xff, 0x00, 0xc0, 0x00, 0xc0, 0x00, 0xc0, 0x00,
	   0xff, 0x00, 0xff, 0x00};

	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 

	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 

	1111 1111 0000 0000 
	1111 1111 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 

	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 
	1100 0000 0000 0000 

	1111 1111 0000 0000 
	1111 1111 0000 0000 

虽然，数据中每一行有两个字节，但是给 glBitmap 指定的宽度是 10 像素宽度，只使用了其中的 10-bit，剩下的被丢弃了。

在 Chapter 07 中，通过 glCallLists() 巧妙实现了字符的打印，这就是 Raster Font 光栅字体的应用。对于西方文字通常在 256 个字符以内，这个方法很好使，参考 font.c 示例定义了 26 个字母的光栅字体，8 x 13 像素。

对于更长到 4 个字节的字符集，glCallLists() 也可以在参数中指定以下类型来实现，由于汉字的复杂度使用得光栅字体的像素也需要更多，：

| GL_BYTE    | GL_UNSIGNED_BYTE  |
| GL_SHORT   | GL_UNSIGNED_SHORT |
| GL_INT     | GL_UNSIGNED_INT   |
| GL_FLOAT   | GL_2_BYTES        |
| GL_3_BYTES | GL_4_BYTES        |

例如，第一个字母 A 和中国两字对应的光栅如下，同样的点阵，汉字明显不够用，想要好点的效果，12 bit 宽度是必需的：

	0000 0000  0001 1000 1111 1111
	1100 0011  0001 1000 1000 0001
	1100 0011  0001 1000 1111 1111
	1100 0011  0001 1000 1011 1001
	1100 0011  0001 1000 1101 1011
	1111 1111  1111 1111 1001 1001
	1100 0011  1001 1001 1001 1001
	1100 0011  1001 1001 1011 1101
	1100 0011  1001 1001 1001 1001
	1100 0011  1111 1111 1001 1001
	0110 0110  0001 1000 1011 1101
	0011 1100  0001 1000 1000 0001
	0001 1000  0001 1000 1111 1111



OpenGL 提供了 API 实现位图绘图、像素拷贝、缩放：

- glReadPixels() - 从 framebuffer 读取矩形区域并送到处理；
- glDrawPixels() - 将来自处理器的像素数据写入到 framebuffer 中的矩形区域；
- glCopyPixels() - 在 framebuffer 之间拷贝矩形区域，和 glDrawPixels() 组合 glReadPixels() 相似，但数据不会以写到处理器；
- glPixelZoom() - 缩放位图

这些函数原型如下，使用的数据格式参考后面表格：

	void glReadPixels( GLint x, GLint y,
	 	GLsizei width, GLsizei height,
	 	GLenum format, GLenum type, void * data);

	void glDrawPixels( GLsizei width, GLsizei height,
	 	GLenum format, GLenum type, const void * data);

	void glCopyPixels( GLint x, GLint y,
	 	GLsizei width, GLsizei height,
	 	GLenum type);


这里了解一下位图文件的结构，以下是位图文件的头信息结构体：

	#pragma pack(push,2)
	typedef struct BitmapHeader {   // BITMAPFILEHEADER
		unsigned short	bfType;     // 0x4d42; it occupy 4bytes if memory aligned
		unsigned int	bfSize;     // DWORD bitmap file size
		unsigned short	bfReserved1;
		unsigned short	bfReserved2;
		unsigned int	bfOffBits;  // offset to the bitmap bits data
	} BitmapHeader;
	#pragma pack(pop)
	
	typedef struct BitmapInfo{      // BITMAPINFOHEADER
		unsigned int	biSize;     // DWORD the size of this structure.
				long	biWidth;    // LONG the width of the bitmap, in pixels. 
				long	biHeight; 
		unsigned short	biPlanes;   // WORD always is 1!
		unsigned short	biBitCount; // the number of bits-per-pixel. 1 for monochrome bmiColors
		unsigned int    biCompression; // BI_RGB(uncompressed)，BI_RLE8，BI_RLE4 ...
		unsigned int    biSizeImage;   // the size, in bytes, of the image. may be zero for BI_RGB.
				long	biXPelsPerMeter; 
				long	biYPelsPerMeter; 
		unsigned int    biClrUsed; 
		unsigned int    biClrImportant; 
	} BitmapInfo, *PBitmapInfo; 

一般 Win32 平台的位图总是 0x42 0x4D 两个字节开头的，即 BM 两个字符，当然 bfType 有可能是以下的任意一种：

	BM – Windows 3.1x, 95, NT, ... etc.
	BA – OS/2 struct bitmap array
	CI – OS/2 struct color icon
	CP – OS/2 const color pointer
	IC – OS/2 struct icon
	PT – OS/2 pointer

BMP 文件大小就保存在 bfSize 中，不是像素大小，通过文件读取也可以得到 BMP 文件的大小。然后，bfOffBits 指出了 BMP 文件像素数据到文件开始字节的偏移量，结合 BMP 文件头和 DIB 信息头就可以计算到调色板的数据起止点。注意定义 BMP 文件头 BitmapHeader 时，因为它第一个成员是 2 个字节的，如果编译器有对齐，那么文件头结构体就会变成 16 个字节，这就不对了，因此需要设置编译器对齐属性。

biCompression 是压缩信息，一般情况用得最多的是无压缩格式 BI_RGB，可选值如下。但是只有自底向上 Bottom-up 的位图才可以压缩， Top-down DIB 不可压缩。那么 Top-Down vs. Bottom-Up DIBs，什么是自底向上呢？所谓自底向上是指图片的像素在内存存储的顺序是先保存图片的最底下一行，再上一行这样进行的。对 Bottom-up 的位图，内存的第一个字节是保存图片的左下角那个像素的。在GDI中所有的DIB都是 Bottom-up 方式处理的。

| BI_RGB       | 未压缩                                              |
| BI_RLE8      | RLE - run-length encoded 游程码格式 8 bpp           |
| BI_RLE4      | 两字节 RLE  格式 4 bpp                              |
| BI_BITFIELDS | 为  16/32-bpp 格式定义包含三个 DWORD 色彩遮罩的色表 |
| BI_JPEG      | Windows 98, Windows 2000 标记一个 JPEG              |
| BI_PNG       | Windows 98, Windows 2000 标记一个 PNG               |

一般 BMP 的头信息占 54 个字节，像素数据就在偏移 55 字节位置即 0x36 位置开始记录，对于索引色位图它的索引色也是这里开始。

根据以上信息，实现一个函数来读入 24-bit 的 BMP 格式文件，只需要确定大小和像素数据即可:

	#define FileError(msg) printf("FileError %s:%d -> %s\n", __FILE__, __LINE__, msg);

	int readBitmapPixel()
	{
	   streampos size;
	   char * memblock;

	   ifstream file("../asset/256.bmp", ios::in|ios::binary|ios::ate);
	   if (file.is_open())
	   {
	      size = file.tellg();
	      memblock = new char [size];
	      file.seekg(0, ios::beg);
	      file.read(memblock, size);
	      file.close();
	      int *bmpSize = (int *)(memblock + sizeof(short));
	      int *offset = (int *)(memblock + 3*sizeof(short) + sizeof(int));
	      long *bmpWidth = (long *)(memblock + 3*sizeof(short) + 3 * sizeof(int));
	      long *bmpHeight = (long *)(memblock + 3*sizeof(short) + 3 * sizeof(int) + sizeof(long));
	      // delete[] memblock;

	      printf("read bitmap file %d[%d] offset[%d] [%dx%d]\n", 
	         (int)size, *bmpSize - *offset, *offset, *bmpWidth, *bmpHeight);
	      for (int i = 0; i < 64; ++i)
	      {
	         if (i%16==0) printf("\n");
	         printf("%x ", (unsigned char)*(memblock+i));
	      }

	      checkImageWidth = *bmpWidth;
	      checkImageHeight = *bmpHeight;

	      checkImage = (unsigned char*)memblock + *offset;
	      return *bmpSize - *offset;
	   } else FileError("Unable to open ../asset/256.bmp");
	   return 0;
	}


示例：

- Example 8-1 : Drawing a Bitmapped Character: drawf.c
- Example 8-2 : Drawing a Complete Font: font.c
- Example 8-3 : Use of glDrawPixels(): image.c
- Example 8-4 : Drawing, Copying, and Zooming Pixel Data: image.c


Table 8-1 : Pixel Formats for glReadPixels() or glDrawPixels()

|  format Constant   |             Pixel Format            |
|--------------------|-------------------------------------|
| GL_COLOR_INDEX     | 色彩索引                            |
| GL_RGB             | RGB 彩色，各分量按 R、G、B 存放     |
| GL_RGBA            | RGBA 彩色，各分量按 R、G、B、A 存放 |
| GL_RED             | 红色分量                            |
| GL_GREEN           | 绿色分量                            |
| GL_BLUE            | 蓝色分量                            |
| GL_ALPHA           | Alpha 分量                          |
| GL_LUMINANCE       | 亮度分量                            |
| GL_LUMINANCE_ALPHA | 亮度和 Alpha 分量                   |
| GL_STENCIL_INDEX   | 图案索引                            |
| GL_DEPTH_COMPONENT | 深度分量                            |


Table 8-2 : Data Types for glReadPixels() or glDrawPixels()

|   type Constant   |            Data Type            |
|-------------------|---------------------------------|
| GL_UNSIGNED_BYTE  | unsigned 8-bit integer          |
| GL_BYTE           | signed 8-bit integer            |
| GL_BITMAP         | unsigned 8-bit integers         |
| GL_UNSIGNED_SHORT | unsigned 16-bit integer         |
| GL_SHORT          | signed 16-bit integer           |
| GL_UNSIGNED_INT   | unsigned 32-bit integer         |
| GL_INT            | signed 32-bit integer           |
| GL_FLOAT          | single-precision floating point |


Table 8-3 : glPixelStore() Parameters

|    Unpack Parameter   |    Pack Parameter   |    Type   | Initial Value |       Valid Range       |
|-----------------------|---------------------|-----------|---------------|-------------------------|
| GL_UNPACK_SWAP_BYTES  | GL_PACK_SWAP_BYTES  | GLboolean | FALSE         | TRUE/FALSE              |
| GL_UNPACK_LSB_FIRST   | GL_PACK_LSB_FIRST   | GLboolean | FALSE         | TRUE/FALSE              |
| GL_UNPACK_ROW_LENGTH  | GL_PACK_ROW_LENGTH  | GLint     | 0             | any nonnegative integer |
| GL_UNPACK_SKIP_ROWS   | GL_PACK_SKIP_ROWS   | GLint     | 0             | any nonnegative integer |
| GL_UNPACK_SKIP_PIXELS | GL_PACK_SKIP_PIXELS | GLint     | 0             | any nonnegative integer |
| GL_UNPACK_ALIGNMENT   | GL_PACK_ALIGNMENT   | GLint     | 4             | 1, 2, 4, 8              |


Table 8-4 `glPixelTransfer*()` Parameters (continued)

|  Parameter Name |    Type   | Initial Value | Valid Range |
|-----------------|-----------|---------------|-------------|
| GL_MAP_COLOR    | GLboolean | FALSE         | TRUE/FALSE  |
| GL_MAP_STENCIL  | GLboolean | FALSE         | TRUE/FALSE  |
| GL_INDEX_SHIFT  | Glint     | 0             | (-∞ , ∞ )  |
| GL_INDEX_OFFSET | Glint     | 0             | (-∞ , ∞ )  |
| GL_RED_SCALE    | Glfloat   | 1.0           | (-∞ , ∞ )  |
| GL_GREEN_SCALE  | Glfloat   | 1.0           | (-∞ , ∞ )  |
| GL_BLUE_SCALE   | Glfloat   | 1.0           | (-∞ , ∞ )  |
| GL_ALPHA_SCALE  | Glfloat   | 1.0           | (-∞ , ∞ )  |
| GL_DEPTH_SCALE  | Glfloat   | 1.0           | (-∞ , ∞ )  |
| GL_RED_BIAS     | Glfloat   | 0             | (-∞ , ∞ )  |
| GL_GREEN_BIAS   | Glfloat   | 0             | (-∞ , ∞ )  |
| GL_BLUE_BIAS    | Glfloat   | 0             | (-∞ , ∞ )  |
| GL_ALPHA_BIAS   | Glfloat   | 0             | (-∞ , ∞ )  |
| GL_DEPTH_BIAS   | Glfloat   | 0             | (-∞ , ∞ )  |


Table 8-5 `glPixelMap*()` Parameter Names and Values

|       Map Name      |    Address    |     Value     |
|---------------------|---------------|---------------|
| GL_PIXEL_MAP_I_TO_I | color index   | color index   |
| GL_PIXEL_MAP_S_TO_S | stencil index | stencil index |
| GL_PIXEL_MAP_I_TO_R | color index   | R             |
| GL_PIXEL_MAP_I_TO_G | color index   | G             |
| GL_PIXEL_MAP_I_TO_B | color index   | B             |
| GL_PIXEL_MAP_I_TO_A | color index   | A             |
| GL_PIXEL_MAP_R_TO_R | R             | R             |
| GL_PIXEL_MAP_G_TO_G | G             | G             |
| GL_PIXEL_MAP_B_TO_B | B             | B             |
| GL_PIXEL_MAP_A_TO_A | A             | A             |


## ==⚡ Chapter 09 Mipmaping
- https://github.com/markkilgard/glut
- https://blog.csdn.net/dcrmg/article/details/53385433
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/gluBuild2DMipmaps.xml
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glGenerateMipmap.xhtml
- [OpenGL学习脚印: 二维纹理映射](https://blog.csdn.net/wangdingqiaoit/article/details/51457675)
- [SOIL - Simple OpenGL Image Library](http://www.lonesock.net/soil.html)

Mipmapping 是一个功能强大的纹理技术，它可以提高渲染的性能以及提升场景的视觉质量。它可以用来解决使用一般的纹理贴图会出现的两个常见的，闪烁问题和性能问题。

加载了大量的纹理数据之后，还要对其进行过滤处理（缩小），在屏幕上显示的只是一小部分。纹理越大，所造成的性能影响就越大。

纹理被用于渲染一个面积比它本身小很多的对象时，会由于纹理图像的降采样率不足而导致混叠现象，主要的表现特征是纹理图像的闪烁，出现纹理躁动。特别是在场景远近移动变换时，这种闪烁情况更为明显，严重可能会影响到模型的视觉质量。

针对这种情况，可以采用 Mip 贴图模式。Mip 贴图的原理是，加载纹理图像在不同压缩尺度下的多幅纹理图像，从原始的纹理开始，依次降低纹理的宽高为上一个纹理的一半，直到最后纹理的面积为 1 为止。加载的一系列纹理图像类似于图像金字塔，在渲染上，OpenGL 自动根据对象模型的状态加载不同等级的纹理对象。

采用 gluBuidl2DMipMaps 来加载 Mip 纹理贴图。

红宝书中的 mipmap.c 示例使用的是色块来替代图片纹理，程序运行起来就是一个多色块三角形，看起来好像不知何谓，实现体现不出来 Mip 贴图的功能。但是，只有读了代码，才会理解，作者是在用最少的代码解析 Mipmaping 基本原理。

简单说，Mipmaping 就是纹理过筛 Texture Shifting，远处使用小而模糊的贴图，近处使用大而清晰的贴图。

程序要点：

- 读取文件，加载纹理图像数据；
- `glGenTextures(1, &texture_ID);` 分配纹理编号；
- `gluBuild2DMipmaps()` 加载绑定的数据生成纹理；
- `glBindTexture()` 在绘图前绑定指定编号的纹理；

期间，可以将原有的纹理编号保存起来，然后使用纹理绑定 API 恢复：

	glGetIntegerv(GL_TEXTURE_BINDING_2D, &lastTextureID);  


Mipmap 使用注意 使用使用 glGenerateMipmap(GL_TEXTURE_2D) 产生 Mipmap 的前提是你已经加载了原始的纹理对象。使用 MipMap 时设置 GL_TEXTURE_MIN_FILTER 选项才能起作用，设置GL_TEXTURE_MAG_FILTER的Mipmap选项将会导致无效操作，OpenGL错误码为GL_INVALID_ENUM。

设置 Mipmap 选项如下代码所示:

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);

从图片加载纹理这部分工作不是 OpenGL 函数完成的，可以通过外部库实现。可以使用 SOIL - Simple OpenGL Image Library 库完成，SOIL 基于 STB 库。


GLUT 的 mjksift.c 例子中需要对标记为 extern 的代码进行修改，要将实现 load_texture 读取纹理数据到 mjk_image[]:

	unsigned char mjk_image[24*256*256];
	int mjk_depth;
	int mjk_height;
	int mjk_width;

	void genTexture(int size)
	{
	  mjk_height = mjk_width = size;
	  mjk_depth = 24;
	  for (int i = 0; i < size; ++i)
	  {
		for (int j = 0; j < size; ++j)
		{
		  int row = (i*10/size)%2;
		  int col = (j*10/size)%2;
		  mjk_image[i*size*3+j*3] = row && col? 128:28;
		}
	  }
	}

可以读取未压缩的 `*.bmp` 转换成纹理贴图，如果使用 `*.jpg` 等压缩格式，就需要借助开源库实现。

OpenGL 的 `glTexImage2D()` 与 `gluBuild2DMipmaps()` 都可以生成纹理。

使用注意事项：

使用 `glTexImage2D()` 位图文件分辨率必须为 64×64、128×128、256×256 三种格式，其他大小则会出现绘制异常。`gluBuild2DMipmaps()` 支持任意分辨率位图文件。

	void glTexImage2D(GLenum target,    // GL_TEXTURE_2D 一个 2D 纹理
			　　GLint level,      // 代表图像的详细程度, 默认为0即可
			　　GLint internalFormat,// 色彩分量数 3 -> RGB，4 -> RGBA
			　　GLsizei width,    // 纹理的宽度
			　　GLsizei height,   // 纹理的高度
			　　GLint border,     // 边界的值
			　　GLenum format,    // GL_RGB 告诉 OpenGL 图像数据结构
			　　GLenum type,      // GL_UNSIGNED_BYTE 数据类型
			　　const GLvoid * data); // 纹理像素数据

	int gluBuild2DMipmaps (GLenum target,   // GL_TEXTURE_2D 一个 2D 纹理
				GLint components, // 色彩分量数 3 -> RGB，4 -> RGBA
				GLint width,      
				GLint height,     
				GLenum format,    
				GLenum type,      
				const void *data);

在设置模型顶点时，一并设置对应的纹理坐标：

	glTexCoord2f(0.0f, 0.0f); glVertex3f(-5.0f, -5.0f, 100.0f);

OpenGL 2D/3D 纹理坐标不用 XYZ 表示，而是 STRQ，范围为 [0, 1] 之间，使用纹理坐标获取纹理颜色叫做采样 Sampling。纹理坐标起始于左下角为原点 (0, 0)，也就是纹理图片的左下角，终止于 (1, 1)，即纹理图片的右上角。

默认设置下，超出纹理坐标部分按 GL_REPEAT 重复填充处理。


红宝书的 Mipmaping 示例中，并没有使用纹理 ID 生成和纹理绑定 API，而是使用默认的设置，也就是设置了当前的纹理对象，在创建模型时相当于绑定了当前的纹理。

而在使用多纹理的场合下，就需要使用纹理 ID 和纹理绑定 API，红宝书则是用 texbind.c 示例中演示：

	glGenTextures(1, &texName);
	glBindTexture(GL_TEXTURE_2D, texName);

	void glActiveTexture( GLenum texture);
	void glBindTexture(	GLenum target, GLuint texture);
 



## ==⚡ Chapter 09 Texture Mapping
- http://www.glprogramming.com/red/chapter09.html
- https://open.gl/textures
- https://learnopengl.com/Getting-started/Textures
- http://ogldev.atspace.co.uk/www/tutorial16/tutorial16.html
- http://www.opengl-tutorial.org/beginners-tutorials/tutorial-5-a-textured-cube/
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glPixelStore.xhtml
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glTexParameter.xhtml
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glTexImage2D.xhtml
- https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glCopyTexImage2D.xhtml
- https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/gluScaleImage.xml

学习目标：

- 明白什么纹理影射可以到场景；
- 给模型指定纹理图像；
- 控制纹理应用到片元时如何过滤；
- 创建和管理纹理对象，如果可以，控制以高性能工作；
- 控制纹理像素的颜色如何与片元合并；
- 提供纹理坐标，以合理的方式与模型对齐；
- 使用自动纹理坐标生成，生成类似轮廓贴图、环境贴图效果；

纹理大概使用流程：

- 生成纹理 ID glGenTextures
- 创建纹理对象 glBindTexture
- 指定纹理内容 glTexImage1D/2D/3D;
- 指定纹理属性 glTexParameter
- 激活纹理功能 glBindTexture
- 提供纹理坐标 glTexCoord

先来关注 2D 纹理，这是最常用的一种，通过 GL_TEXTURE_2D 常量关联，在设置纹理前，还需要准备好纹理来源，如贴图。 

- glTexImage1D
- glTexImage2D
- glTexImage3D

通常，演示项目中只使用了一种纹理，所以并不需要纹理 ID 生成和纹理绑定，指定纹理就是当前可用的状态。但是对于多纹理的项目中就需要先生成纹理 ID 和纹理绑定，这样后续的纹理指定、属性设置都会归属到这个 ID 关联的纹理上：

	glGenTextures(1, &texName);
	glBindTexture(GL_TEXTURE_2D, texName);

创建纹理前，需要先准备发数据，checker.c 示例中使用的是程序生成的棋盘格。

然后，通过 glPixelStore 设置像素存储或读取模式，定义像素数据在存储空间中的布局方式。例如，glPixelStorei(GL_UNPACK_ALIGNMENT, 1) 控制读取数据的对齐方式以 1 字节对齐。默认 4 字节对齐，即默认图像数据一行像素的字节数必须是 4 的整数倍，读取数据 3 个字节用来渲染一行，之后读取 4 字节数据用来渲染第二行。

参数参考 Table 8-3 : glPixelStore() Parameters


有了图像数据后，接着创建纹理：

	void glTexImage2D(GLenum target, GLint level, GLint internalFormat,
		GLsizei width, GLsizei height, GLint border,
		GLenum format, GLenum type,
		const GLvoid *pixels);

还可以使用 GLU API 对图像数据进行处理：

	int gluScaleImage(GLenum format, GLint widthin, GLint heightin,
		GLenum typein, const void *datain, GLint widthout,
		GLint heightout, GLenum typeout, void *dataout);

	void glCopyTexImage2D(GLenum target, GLint level,
		GLint internalFormat,
		GLint x, GLint y, GLsizei width, GLsizei height,
		GLint border);


目前，只需给 target 指定 GL_TEXTURE_2D 创建 2D 纹理。

glTexParameter 设置纹理属性，这是非常重要又有点复杂的 API：

	void glTexParameterf( GLenum target, GLenum pname, GLfloat param);

比如以下两个设置纹理的边缘重复填充，两个设置滤波：

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT); 
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);

不同版本 OpenGL 对纹理属性 API 支持度：

| Function / Feature Name | 2.0 | 2.1 | 3.0 | 3.1 | 3.2 | 3.3 | 4.0 | 4.1 | 4.2 | 4.3 | 4.4 | 4.5 |
|-------------------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| glTexParameterIiv       | -   | -   | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTexParameterIuiv      | -   | -   | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTexParameterf         | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTexParameterfv        | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTexParameteri         | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTexParameteriv        | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔ | ✔  | ✔  | ✔  |
| glTextureParameterIiv   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |
| glTextureParameterIuiv  | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |
| glTextureParameterf     | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |
| glTextureParameterfv    | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |
| glTextureParameteri     | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |
| glTextureParameteriv    | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   | ✔  |


OpenGL 2D/3D 纹理坐标不用 XYZ 表示，而是 STRQ，范围为 [0, 1] 之间，使用纹理坐标获取纹理颜色叫做采样 Sampling。纹理坐标起始于左下角为原点 (0, 0)，也就是纹理图片的左下角，终止于 (1, 1)，即纹理图片的右上角。

在 OpenGL 中，2D 纹理坐标使用 S/T 表示，来看看纹理折回 Texture Wrapping，通常纹理坐标取值范围为 [0, 1] 之间，模型比纹理要大，映射到纹理的坐标超出这个范围时，那么就要定义纹理折回来处理这些超出边界的部分：

- `GL_REPEAT`: 重复纹理，默认处理方式；
- `GL_MIRRORED_REPEAT`: 镜像重复；
- `GL_CLAMP_TO_EDGE`: 钳制边线，即用边线部分填充超出部分；
- `GL_CLAMP_TO_BORDER`: 钳制边界，即到边界为止，不对超出部分应用纹理；

这些折回方式和以下坐标常量配合使用：

- `GL_TEXTURE_WRAP_S` 设置纹理 S 坐标折回方式；
- `GL_TEXTURE_WRAP_T` 设置纹理 T 坐标折回方式； 

![https://learnopengl.com/Getting-started/Textures](https://learnopengl.com/img/getting-started/texture_wrapping.png)

纹理坐标采用了浮点数的形式，它和分辨率无关，或者说，纹理应用到模型上需要先经过采样这一步骤，那么`纹理滤波`设置就是应用纹理后效果的决定因素。OpenGL 需要非常精确的计算出纹理像素和纹理坐标之间的对应关系，当你有一张低分辨率的纹理图，但是需要用到大模型上，这种操作的重要性就更加明显了。

- `GL_TEXTURE_MAG_FILTER` 
- `GL_TEXTURE_MIN_FILTER` 

OpenGL 提供几种不同的滤波方案，目前只需要讨论最重要的两种：

- `GL_NEAREST` 最近点过滤，计算到纹理坐标最靠近哪个像素，就用哪个像素，这是默认的过滤方式，速度最快，但是效果最差。
- `GL_LINEAR` 线性过滤，纹理坐标位置附近的几个像素值进行线性插值计算之后的结果。这是应用最广泛的一种方式，效果一般，速度较快。

近点过滤的像素化痕迹非常明显，而线性过滤的方式感觉上有模糊效果。

对于 Mipmapping 还可以使用以下纹理过滤器，注意 Nearest 和 Linear 的前后关联：

- `GL_NEAREST_MIPMAP_NEAREST`: 纹理内部使用最近邻滤波，使用最接近像素大小的 Mipmap 。
- `GL_NEAREST_MIPMAP_LINEAR`: 纹理内部使用最近邻滤波，在两个最接近像素大小的 Mipmap 中做线性插值。
- `GL_LINEAR_MIPMAP_NEAREST`: 纹理内部使用线性滤波，使用最接近像素大小的 Mipmap。
- `GL_LINEAR_MIPMAP_LINEAR`: 纹理内部使用线性滤波，在两个最接近像素大小的 Mipmap 中做线性插值。

设置纹理后，再设置模型，设置顶点时，一并设置对应的纹理坐标：

	glTexCoord2f(0.0f, 0.0f); glVertex3f(-5.0f, -5.0f, 100.0f);

除了手动分配纹理坐标，还可以让 OpenGL 自动生成纹理坐标：

	void glTexGeni (GLenum coord, GLenum pname, GLint param);

	glTexGeni(GL_S, GL_TEXTURE_GEN_MODE, GL_OBJECT_LINEAR);
	glTexGeni(GL_T, GL_TEXTURE_GEN_MODE, GL_OBJECT_LINEAR);

	glEnable(GL_TEXTURE_GEN_S);
	glEnable(GL_TEXTURE_GEN_T);

参数设置：

| coord |        pname        |       param       |
|-------|---------------------|-------------------|
| GL_S  | GL_TEXTURE_GEN_MODE | GL_OBJECT_LINEAR  |
| GL_T  | GL_OBJECT_PLANE     | GL_EYE_LINEAR     |
| GL_R  | GL_EYE_PLANE        | GL_SPHERE_MAP     |
| GL_Q  |                     | GL_NORMAL_MAP     |
|       |                     | GL_REFLECTION_MAP |

- GL_OBJECT_LINEAR：物体模式，纹理跟随物体转动而转动；
- GL_EYE_LINEAR：视觉模式，纹理固定，不会跟随物体的转动而转动；
- GL_SPHERE_MAP：环境纹理（球体贴图）具有很好的反射效果；
- GL_REFLECTION_MAP:环境纹理（反射纹理）可替换 GL_SPHERE_MAP；
- GL_NORMAL_MAP：法线贴图，常用于立方体贴图，或者散射与反射的场景；

立方图纹理是一种比较特殊的纹理技术，用 6 幅二维图像构成一个以原点为中心的纹理立方体，对于每个片段，纹理坐标（S,T,R）被当做方向向量看待，每个纹理单元都表示从原点所看到的纹理立方体上的图像。

可以调用 glTexImage2D 函数，使给立方体的各个面（+X,-X,+Y,-Y,+Z,-Z）指定纹理：

	glTexParameteri(GL_TEXTURE_CUBE_MAP_EXT, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_X_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image1);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_NEGATIVE_X_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image4);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_Y_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image2);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_NEGATIVE_Y_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image5);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_Z_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image3);
	glTexImage2D(GL_TEXTURE_CUBE_MAP_NEGATIVE_Z_EXT, 0, GL_RGBA, imageSize, imageSize, 0, GL_RGBA, GL_UNSIGNED_BYTE, image6);
	glTexGeni(GL_S, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT);
	glTexGeni(GL_T, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT);
	glTexGeni(GL_R, GL_TEXTURE_GEN_MODE, GL_NORMAL_MAP_EXT);


示例：

- Example 9-1 : Texture-Mapped Checkerboard: checker.c
- Example 9-3 : Replacing a Texture Subimage: texsub.c
- Example 9-4 : Mipmap Textures: mipmap.c
- Example 9-5 : Binding Texture Objects: texbind.c
- Example 9-6 : Automatic Texture-Coordinate Generation: texgen.c

Table 9-1 : Filtering Methods for Magnification and Minification

|       Parameter       |                                     Values                                     |
|-----------------------|--------------------------------------------------------------------------------|
| GL_TEXTURE_MAG_FILTER | GL_NEAREST or GL_LINEAR                                                        |
|-----------------------|--------------------------------------------------------------------------------|
| GL_TEXTURE_MIN_FILTER | GL_NEAREST, GL_LINEAR, GL_NEAREST_MIPMAP_NEAREST,                              |
|                       | GL_NEAREST_MIPMAP_LINEAR, GL_LINEAR_MIPMAP_NEAREST, or GL_LINEAR_MIPMAP_LINEAR |
|-----------------------|--------------------------------------------------------------------------------|

Table 9-2 : Replace and Modulate Texture Function

| Base Internal Format | Replace Texture Function | Modulate Texture Function |
|----------------------|--------------------------|---------------------------|
| GL_ALPHA             | C = Cf, A = At           | C = Cf, A = AfAt          |
| GL_LUMINANCE         | C = Lt, A = Af           | C = CfLt, A = Af          |
| GL_LUMINANCE_ALPHA   | C = Lt, A = At           | C = CfLt, A = AfAt        |
| GL_INTENSITY         | C = It, A = It           | C = CfIt, A = AfIt        |
| GL_RGB               | C = Ct, A = Af           | C = CfCt, A = Af          |
| GL_RGBA              | C = Ct, A = At           | C = CfCt, A = AfAt        |

Table 9-3 : Decal and Blend Texture Function

| Base Internal Format |    Decal Texture Function   |           Blend Texture Function          |
|----------------------|-----------------------------|-------------------------------------------|
| GL_ALPHA             | undefined                   | C = Cf, A = AfAt                          |
| GL_LUMINANCE         | undefined                   | C = Cf(1-Lt) + CcLt, A = Af               |
| GL_LUMINANCE_ALPHA   | undefined                   | C = Cf(1-Lt) + CcLt, A = AfAt             |
| GL_INTENSITY         | undefined                   | C = Cf(1-It) + CcIt, A = Af(1-It) + AcIt, |
| GL_RGB               | C = Ct, A = Af              | C = Cf(1-Ct) + CcCt, A = Af               |
| GL_RGBA              | C = Cf(1-At) + CtAt, A = Af | C = Cf(1-Ct) + CcCt, A = AfAt             |


Table 9-4 : glTexParameter Parameters

|        Parameter        |                                    Values                                   |
|-------------------------|-----------------------------------------------------------------------------|
| GL_TEXTURE_WRAP_S       | GL_CLAMP, GL_REPEAT                                                         |
| GL_TEXTURE_WRAP_T       | GL_CLAMP, GL_REPEAT                                                         |
| GL_TEXTURE_MAG_FILTER   | GL_NEAREST, GL_LINEAR                                                       |
|-------------------------|-----------------------------------------------------------------------------|
| GL_TEXTURE_MIN_FILTER   | GL_NEAREST,GL_LINEAR, GL_NEAREST_MIPMAP_NEAREST,                            |
|                         | GL_NEAREST_MIPMAP_LINEAR, GL_LINEAR_MIPMAP_NEAREST, GL_LINEAR_MIPMAP_LINEAR |
|-------------------------|-----------------------------------------------------------------------------|
| GL_TEXTURE_BORDER_COLOR | any four values in [0.0, 1.0]                                               |
| GL_TEXTURE_PRIORITY     | [0.0, 1.0] for the current texture object                                   |




## ==⚡ Chapter 10

- [OpenGL学习脚印：模板测试(stencil testing)](https://blog.csdn.net/wangdingqiaoit/article/details/52143197)
- [OpenGL学习脚印配套代码](https://github.com/wangdingqiao/)

平衡环架（英语：Gimbal）为一具有枢纽的装置，使得一物体能以单一轴旋转。由彼此垂直的枢纽轴所组成的一组三只平衡环架，则可使架在最内的环架的物体维持旋转轴不变，而应用在船上的陀螺仪、罗盘、饮料杯架等用途上，而不受船体因波浪上下震动、船身转向的影响。

其实欧拉角的工作方式与万向节几乎一样。

Euler Angle Class：

- pitch 俯仰，对应 OpenGL 正常视角的 X 轴旋转；
- Yaw，偏航，对应 OpenGL 正常视角的 Y 轴旋转；
- Roll，桶滚，对应 OpenGL 正常视角的 Z 轴旋转；



## ==⚡ Appendix B State Variables

红宝书附录 B 内容：

- OpenGL 查询命令
- OpenGL 状态变量

The Query Commands

    void glGetClipPlane(GLenum plane, GLdouble *equation);
    GLenum glGetError(void);

    void glGetLight{if}v(GLenum light, GLenum pname, TYPE *params);

    void glGetMap{ifd}v(GLenum target, GLenum query, TYPE *v);

    void glGetMaterial{if}v(GLenum face, GLenum pname, TYPE *params);

    void glGetPixelMap{f ui us}v(GLenum map, TYPE *values);

    void glGetPolygonStipple(GLubyte *mask);

    const GLubyte * glGetString(GLenum name);

    void glGetTexEnv{if}v(GLenum target, GLenum pname, TYPE *params);

    void glGetTexGen{ifd}v(GLenum coord, GLenum pname, TYPE *params);

    void glGetTexImage(GLenum target, GLint level, GLenum format, GLenum type, GLvoid *pixels);

    void glGetTexLevelParameter{if}v(GLenum target, GLint level, GLenum pname, TYPE *params);

    void glGetTexParameter{if}v(GLenum target, GLenum pname, TYPE *params);

    void gluGetNurbsProperty(GLUnurbsObj *nobj, GLenum property, GLfloat *value);

    const GLubyte * gluGetString(GLenum name);

    void gluGetTessProperty(GLUtesselator *tess, GLenum which, GLdouble *data);


通过 glGetBooleanv(), glGetIntegerv(), glGetFloatv(), glGetDoublev(), glGetPointerv() 等 API 获取 OpenGL 状态机的当前信息。激活功能状态也可以通过 glIsEnabled() 获取。

如果属性列表指定了分组，那么属性就是按分组管理的，glPushAttrib(), glPushClientAttrib(), glPopAttrib(), glPopClientAttrib() 这些 API 可以用在分组的属性上。


## ==⚡ Table B-1 : State Variables for Current Values and Associated Data


|          State Variable          |       Description        | 属性分组 |   初始值   |            获取命令           |
|----------------------------------|--------------------------|----------|------------|-------------------------------|
| GL_CURRENT_COLOR                 | 当前颜色                 | current  | 1, 1, 1, 1 | glGetIntegerv() glGetFloatv() |
| GL_CURRENT_INDEX                 | 当前索引色               | current  | 1          | glGetIntegerv() glGetFloatv() |
| GL_CURRENT_TEXTURE_COORDS        | 当前纹理坐标             | current  | 0, 0, 0, 1 | glGetFloatv()                 |
| GL_CURRENT_NORMAL                | 当前法线                 | current  | 0, 0, 1    | glGetFloatv()                 |
| GL_CURRENT_RASTER_POSITION       | 当前光栅位置             | current  | 0, 0, 0, 1 | glGetFloatv()                 |
| GL_CURRENT_RASTER_DISTANCE       | 当前光栅距离             | current  | 0          | glGetFloatv()                 |
| GL_CURRENT_RASTER_COLOR          | 与光栅位置关联的颜色色   | current  | 1, 1, 1, 1 | glGetIntegerv() glGetFloatv() |
| GL_CURRENT_RASTER_INDEX          | 与光栅位置关联的索引色   | current  | 1          | glGetIntegerv() glGetFloatv() |
| GL_CURRENT_RASTER_TEXTURE_COORDS | 与光栅位置关联的纹理坐标 | current  | 0, 0, 0, 1 | glGetFloatv()                 |
| GL_CURRENT_RASTER_POSITION_VALID | 光栅位置有效 bit         | current  | GL_TRUE    | glGetBooleanv()               |
| GL_EDGE_FLAG                     | Edge flag                | current  | GL_TRUE    | glGetBooleanv()               |



## ==⚡ Table B-2 : (continued) Vertex Array State Variables

|         State Variable         |           Description           |   属性分组   |  初始值  |     获取命令    |
|--------------------------------|---------------------------------|--------------|----------|-----------------|
| GL_VERTEX_ARRAY                | Vertex array enable             | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_VERTEX_ARRAY_SIZE           | Coordinates per vertex          | vertex-array | 4        | glGetIntegerv() |
| GL_VERTEX_ARRAY_TYPE           | Type of vertex coordinates      | vertex-array | GL_FLOAT | glGetIntegerv() |
| GL_VERTEX_ARRAY_STRIDE         | Stride between vertices         | vertex-array | 0        | glGetIntegerv() |
| GL_VERTEX_ARRAY_POINTER        | Pointer to the vertex array     | vertex-array | NULL     | glGetPointerv() |
| GL_NORMAL_ARRAY                | Normal array enable             | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_NORMAL_ARRAY_TYPE           | Type of normal coordinates      | vertex-array | GL_FLOAT | glGetIntegerv() |
| GL_NORMAL_ARRAY_STRIDE         | Stride between normals          | vertex-array | 0        | glGetIntegerv() |
| GL_NORMAL_ARRAY_POINTER        | Pointer to the normal array     | vertex-array | NULL     | glGetPointerv() |
| GL_COLOR_ARRAY                 | RGBA color array enable         | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_COLOR_ARRAY_SIZE            | Colors per vertex               | vertex-array | 4        | glGetIntegerv() |
| GL_COLOR_ARRAY_TYPE            | Type of color components        | vertex-array | GL_FLOAT | glGetIntegerv() |
| GL_COLOR_ARRAY_STRIDE          | Stride between colors           | vertex-array | 0        | glGetIntegerv() |
| GL_COLOR_ARRAY_POINTER         | Pointer to the color array      | vertex-array | NULL     | glGetPointerv() |
| GL_INDEX_ARRAY                 | Color-index array enable        | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_INDEX_ARRAY_TYPE            | Type of color indices           | vertex-array | GL_FLOAT | glGetIntegerv() |
| GL_INDEX_ARRAY_STRIDE          | Stride between color indices    | vertex-array | 0        | glGetIntegerv() |
| GL_INDEX_ARRAY_POINTER         | Pointer to the index array      | vertex-array | NULL     | glGetPointerv() |
| GL_TEXTURE_COORD_ARRAY         | Texture coordinate array enable | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_TEXTURE_COORD_ARRAY_SIZE    | Texture coordinates per element | vertex-array | 4        | glGetIntegerv() |
| GL_TEXTURE_COORD_ARRAY_TYPE    | 纹理坐标数据类型                | vertex-array | GL_FLOAT | glGetIntegerv() |
| GL_TEXTURE_COORD_ARRAY_STRIDE  | 纹理坐标步进量                  | vertex-array | 0        | glGetIntegerv() |
| GL_TEXTURE_COORD_ARRAY_POINTER | 纹理坐标数组指针                | vertex-array | NULL     | glGetPointerv() |
| GL_EDGE_FLAG_ARRAY             | Edge flag array enable          | vertex-array | GL_FALSE | glIsEnabled()   |
| GL_EDGE_FLAG_ARRAY_STRIDE      | Stride between edge flags       | vertex-array | 0        | glGetIntegerv() |
| GL_EDGE_FLAG_ARRAY_POINTER     | Pointer to the edge flag array  | vertex-array | NULL     | glGetPointerv() |



## ==⚡ Table B-3 : Transformation State Variables

|       State Variable      |             Description             |      属性分组     |    初始值    |     获取命令     |
|---------------------------|-------------------------------------|-------------------|--------------|------------------|
| GL_MODELVIEW_MATRIX       | Modelview matrix stack              | -                 | Identity     | glGetFloatv()    |
| GL_PROJECTION_MATRIX      | Projection matrix stack             | -                 | Identity     | glGetFloatv()    |
| GL_TEXTURE_MATRIX         | Texture matrix stack                | -                 | Identity     | glGetFloatv()    |
| GL_VIEWPORT               | Viewport origin and extent          | viewport          | -            | glGetIntegerv()  |
| GL_DEPTH_RANGE            | Depth range near and far            | viewport          | 0, 1         | glGetFloatv()    |
| GL_MODELVIEW_STACK_DEPTH  | Modelview matrix stack pointer      | -                 | 1            | glGetIntegerv()  |
| GL_PROJECTION_STACK_DEPTH | Projection matrix stack pointer     | -                 | 1            | glGetIntegerv()  |
| GL_TEXTURE_STACK_DEPTH    | Texture matrix stack pointer        | -                 | 1            | glGetIntegerv()  |
| GL_MATRIX_MODE            | Current matrix mode                 | transform         | GL_MODELVIEW | glGetIntegerv()  |
| GL_NORMALIZE              | Current normal normalization on/off | transform/ enable | GL_FALSE     | glIsEnabled()    |
| GL_CLIP_PLANEi            | User clipping plane coefficients    | transform         | 0, 0, 0, 0   | glGetClipPlane() |
| GL_CLIP_PLANEi            | ith user clipping plane enabled     | transform/ enable | GL_FALSE     | glIsEnabled()    |



## ==⚡ Table B-4 : Coloring State Variables

| State Variable |       Description       |  属性分组  |   初始值   |     获取命令    |
|----------------|-------------------------|------------|------------|-----------------|
| GL_FOG_COLOR   | Fog color               | fog        | 0, 0, 0, 0 | glGetFloatv()   |
| GL_FOG_INDEX   | Fog index               | fog        | 0          | glGetFloatv()   |
| GL_FOG_DENSITY | Exponential fog density | fog        | 1.0        | glGetFloatv()   |
| GL_FOG_START   | Linear fog start        | fog        | 0.0        | glGetFloatv()   |
| GL_FOG_END     | Linear fog end          | fog        | 1.0        | glGetFloatv()   |
| GL_FOG_MODE    | Fog mode                | fog        | GL_EXP     | glGetIntegerv() |
| GL_FOG         | True if fog enabled     | fog/enable | GL_FALSE   | glIsEnabled()   |
| GL_SHADE_MODEL | glShadeModel() setting  | lighting   | GL_SMOOTH  | glGetIntegerv() |


Lighting

初始值参考 Table 5-1 & Table 5-3


## ==⚡ Table B-5 : (continued) Lighting State Variables

|        State Variable       |      Description      |     属性分组    |         初始值         |      获取命令     |
|-----------------------------|-----------------------|-----------------|------------------------|-------------------|
| GL_LIGHTING                 | True 如果已启用光照   | lighting/enable | GL_FALSE               | glIsEnabled()     |
| GL_COLOR_MATERIAL           | 是否已启用颜色追踪    | lighting        | GL_FALSE               | glIsEnabled()     |
| GL_COLOR_MATERIAL_PARAMETER | 材质属性追踪当前颜色  | lighting        | GL_AMBIENT_AND_DIFFUSE | glGetIntegerv()   |
| GL_COLOR_MATERIAL_FACE      | 颜色追踪影响的页数    | lighting        | GL_FRONT_AND_BACK      | glGetIntegerv()   |
| GL_AMBIENT                  | Ambient 材质颜色      | lighting        | (0.2, 0.2, 0.2, 1.0)   | glGetMaterialfv() |
| GL_DIFFUSE                  | Diffuse 材质颜色      | lighting        | (0.8, 0.8, 0.8, 1.0)   | glGetMaterialfv() |
| GL_SPECULAR                 | Specular 材质颜色     | lighting        | (0.0, 0.0, 0.0, 1.0)   | glGetMaterialfv() |
| GL_EMISSION                 | Emissive 材质颜色     | lighting        | (0.0, 0.0, 0.0, 1.0)   | glGetMaterialfv() |
| GL_SHININESS                | 材质反光的幂          | lighting        | 0.0                    | glGetMaterialfv() |
| GL_LIGHT_MODEL_AMBIENT      | Ambient scene color   | lighting        | (0.2, 0.2, 0.2, 1.0)   | glGetFloatv()     |
| GL_LIGHT_MODEL_LOCAL_VIEWER | Viewer is local       | lighting        | GL_FALSE               | glGetBooleanv()   |
| GL_LIGHT_MODEL_TWO_SIDE     | 使用双面光            | lighting        | GL_FALSE               | glGetBooleanv()   |
| GL_AMBIENT                  | 光源 i 的环境光强度   | lighting        | (0.0,0.0,0.0,1.0)      | glGetLightfv()    |
| GL_DIFFUSE                  | 光源 i 的散射强度     | lighting        | -                      | glGetLightfv()    |
| GL_SPECULAR                 | 光源 i 的反光强度     | lighting        | -                      | glGetLightfv()    |
| GL_POSITION                 | Position of light i   | lighting        | (0.0, 0.0, 1.0, 0.0)   | glGetLightfv()    |
| GL_CONSTANT_ATTENUATION     | Constant 衰减系数     | lighting        | 1.0                    | glGetLightfv()    |
| GL_LINEAR_ATTENUATION       | Linear 衰减系数       | lighting        | 0.0                    | glGetLightfv()    |
| GL_QUADRATIC_ATTENUATION    | Quadratic 衰减系数    | lighting        | 0.0                    | glGetLightfv()    |
| GL_SPOT_DIRECTION           | 光源 i 的聚光灯方向   | lighting        | (0.0, 0.0, -1.0)       | glGetLightfv()    |
| GL_SPOT_EXPONENT            | 光源 i 的聚光灯扩散度 | lighting        | 0.0                    | glGetLightfv()    |
| GL_SPOT_CUTOFF              | 光源 i 的聚光灯角度   | lighting        | 180.0                  | glGetLightfv()    |
| GL_LIGHTi                   | True 如果光源 i 启用  | lighting/enable | GL_FALSE               | glIsEnabled()     |
| GL_COLOR_INDEXES            | 索引色光照 ca, cd, cs | lighting/enable | 0, 1, 1                | glGetMaterialfv() |


## ==⚡ Table B-6 : (continued) Rasterization State Variables

|      State Variable      |       Description       |     属性分组    |  初始值  |        获取命令       |
|--------------------------|-------------------------|-----------------|----------|-----------------------|
| GL_POINT_SIZE            | Point size              | point           | 1.0      | glGetFloatv()         |
| GL_POINT_SMOOTH          | 激活多边形抗锯齿        | point/enable    | GL_FALSE | glIsEnabled()         |
| GL_LINE_WIDTH            | Line width              | line            | 1.0      | glGetFloatv()         |
| GL_LINE_SMOOTH           | 激活线条抗锯齿          | line/enable     | GL_FALSE | glIsEnabled()         |
| GL_LINE_STIPPLE_PATTERN  | Line stipple            | line            | 1's      | glGetIntegerv()       |
| GL_LINE_STIPPLE_REPEAT   | Line stipple repeat     | line            | 1        | glGetIntegerv()       |
| GL_LINE_STIPPLE          | Line stipple enable     | line/enable     | GL_FALSE | glIsEnabled()         |
| GL_CULL_FACE             | 激活多边形面剔除        | polygon/enable  | GL_FALSE | glIsEnabled()         |
| GL_CULL_FACE_MODE        | 多边形正反面剔除        | polygon         | GL_BACK  | glGetIntegerv()       |
| GL_FRONT_FACE            | 多边形正反面规则 CW/CCW | polygon         | GL_CCW   | glGetIntegerv()       |
| GL_POLYGON_SMOOTH        | 启用多边形抗锯齿        | polygon/enable  | GL_FALSE | glIsEnabled()         |
| GL_POLYGON_MODE          | 多边形光栅模式，正/反面 | polygon         | GL_FILL  | glGetIntegerv()       |
| GL_POLYGON_OFFSET_FACTOR | Polygon offset factor   | polygon         | 0        | glGetFloatv()         |
| GL_POLYGON_OFFSET_BIAS   | Polygon offset bias     | polygon         | 0        | glGetFloatv()         |
| GL_POLYGON_OFFSET_POINT  | 光栅模式启用偏移        | polygon/enable  | GL_FALSE | glIsEnabled()         |
| GL_POLYGON_OFFSET_LINE   | 光栅模式启用偏移        | polygon/enable  | GL_FALSE | glIsEnabled()         |
| GL_POLYGON_OFFSET_FILL   | 光栅模式启用偏移        | polygon/enable  | GL_FALSE | glIsEnabled()         |
| GL_POLYGON_STIPPLE       | Polygon stipple enable  | polygon/enable  | GL_FALSE | glIsEnabled()         |
| -                        | Polygon stipple pattern | polygon-stipple | 1's      | glGetPolygonStipple() |


Texturing

## ==⚡ Table B-7 : (continued) Texturing State Variables

|       State Variable       |             Description             |    属性分组    |          初始值          |           获取命令          |
|----------------------------|-------------------------------------|----------------|--------------------------|-----------------------------|
| GL_TEXTURE_x               | True 如果 1D 或 2D 已绑定纹理       | texture/enable | GL_FALSE                 | glIsEnabled()               |
| GL_TEXTURE_BINDING_x       | 绑定到 GL_TEXTURE_x 的纹理对象      | texture        | GL_FALSE                 | glGetIntegerv()             |
| GL_TEXTURE                 | x-D 纹理图片 i 细节                 | -              | -                        | glGetTexImage()             |
| GL_TEXTURE_WIDTH           | x-D 纹理图片 i 的宽度               | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_HEIGHT          | x-D 纹理图片 i 的高度               | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_BORDER          | x-D 纹理图片 i 的边框宽度           | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_INTERNAL_FORMAT | x-D 纹理图片 i 的内部格式           | -              | 1                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_RED_SIZE        | x-D 纹理图片 i 的分量解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_GREEN_SIZE      | x-D 纹理图片 i 的分量解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_BLUE_SIZE       | x-D 纹理图片 i 的分量解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_ALPHA_SIZE      | x-D 纹理图片 i 的分量解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_LUMINANCE_SIZE  | x-D 纹理图片 i 的亮度解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_INTENSITY_SIZE  | x-D 纹理图片 i 的强度解析度         | -              | 0                        | `glGetTexLevelParameter*()` |
| GL_TEXTURE_BORDER_COLOR    | Texture border color                | texture        | 0, 0, 0, 0               | `glGetTexParameter*()`      |
| GL_TEXTURE_MIN_FILTER      | Texture minification function       | texture        | GL_NEAREST_MIPMAP_LINEAR | `glGetTexParameter*()`      |
| GL_TEXTURE_MAG_FILTER      | Texture magnification function      | texture        | GL_LINEAR                | `glGetTexParameter*()`      |
| GL_TEXTURE_WRAP_x          | Texture wrap mode (x is S or T)     | texture        | GL_REPEAT                | `glGetTexParameter*()`      |
| GL_TEXTURE_PRIORITY        | Texture object priority             | texture        | 1                        | `glGetTexParameter*()`      |
| GL_TEXTURE_RESIDENCY       | Texture residency                   | texture        | GL_FALSE                 | glGetTexParameteriv()       |
| GL_TEXTURE_ENV_MODE        | Texture application function        | texture        | GL_MODULATE              | glGetTexEnviv()             |
| GL_TEXTURE_ENV_COLOR       | Texture environment color           | texture        | 0, 0, 0, 0               | glGetTexEnvfv()             |
| GL_TEXTURE_GEN_x           | Texgen enabled (x is S, T, R, or Q) | texture/enable | GL_FALSE                 | glIsEnabled()               |
| GL_EYE_PLANE               | Texgen plane equation coefficients  | texture        | -                        | glGetTexGenfv()             |
| GL_OBJECT_PLANE            | Texgen object linear coefficients   | texture        | -                        | glGetTexGenfv()             |
| GL_TEXTURE_GEN_MODE        | Function used for texgen            | texture        | GL_EYE_LINEAR            | glGetTexGeniv()             |


## ==⚡ Table B-8 : (continued) Pixel Operations

|       State Variable       |              Description              |        属性分组       |  初始值   |     获取命令    |
|----------------------------|---------------------------------------|-----------------------|-----------|-----------------|
| GL_SCISSOR_TEST            | Scissoring enabled                    | scissor/enable        | GL_FALSE  | glIsEnabled()   |
| GL_SCISSOR_BOX             | Scissor box                           | scissor               | -         | glGetIntegerv() |
| GL_ALPHA_TEST              | Alpha test enabled                    | color-buffer/enable   | GL_FALSE  | glIsEnabled()   |
| GL_ALPHA_TEST_FUNC         | Alpha test function                   | color-buffer          | GL_ALWAYS | glGetIntegerv() |
| GL_ALPHA_TEST_REF          | Alpha test reference value            | color-buffer          | 0         | glGetIntegerv() |
| GL_STENCIL_TEST            | Stenciling enabled                    | stencil-buffer/enable | GL_FALSE  | glIsEnabled()   |
| GL_STENCIL_FUNC            | Stencil function                      | stencil-buffer        | GL_ALWAYS | glGetIntegerv() |
| GL_STENCIL_VALUE_MASK      | Stencil mask                          | stencil-buffer        | 1's       | glGetIntegerv() |
| GL_STENCIL_REF             | Stencil reference value               | stencil-buffer        | 0         | glGetIntegerv() |
| GL_STENCIL_FAIL            | Stencil fail action                   | stencil-buffer        | GL_KEEP   | glGetIntegerv() |
| GL_STENCIL_PASS_DEPTH_FAIL | Stencil depth buffer fail action      | stencil-buffer        | GL_KEEP   | glGetIntegerv() |
| GL_STENCIL_PASS_DEPTH_PASS | Stencil depth buffer pass action      | stencil-buffer        | GL_KEEP   | glGetIntegerv() |
| GL_DEPTH_TEST              | Depth buffer enabled                  | depth-buffer/enable   | GL_FALSE  | glIsEnabled()   |
| GL_DEPTH_FUNC              | Depth buffer test function            | depth-buffer          | GL_LESS   | glGetIntegerv() |
| GL_BLEND                   | Blending enabled                      | color-buffer/enable   | GL_FALSE  | glIsEnabled()   |
| GL_BLEND_SRC               | Blending source function              | color-buffer          | GL_ONE    | glGetIntegerv() |
| GL_BLEND_DST               | Blending destination function         | color-buffer          | GL_ZERO   | glGetIntegerv() |
| GL_DITHER                  | Dithering enabled                     | color-buffer/enable   | GL_TRUE   | glIsEnabled()   |
| GL_INDEX_LOGIC_OP          | Color index logical operation enabled | color-buffer/enable   | GL_FALSE  | glIsEnabled()   |
| GL_COLOR_LOGIC_OP          | RGBA color logical operation enabled  | color-buffer/enable   | GL_FALSE  | glIsEnabled()   |
| GL_LOGIC_OP_MODE           | Logical operation function            | color-buffer          | GL_COPY   | glGetIntegerv() |


## ==⚡ Table B-9 : Framebuffer Control State Variables

|     State Variable     |                 Description                 |    属性分组    |   初始值   |     获取命令    |
|------------------------|---------------------------------------------|----------------|------------|-----------------|
| GL_DRAW_BUFFER         | Buffers selected for drawing                | color-buffer   | -          | glGetIntegerv() |
| GL_INDEX_WRITEMASK     | Color-index writemask                       | color-buffer   | 1's        | glGetIntegerv() |
| GL_COLOR_WRITEMASK     | Color write enables; R, G, B, or A          | color-buffer   | GL_TRUE    | glGetBooleanv() |
| GL_DEPTH_WRITEMASK     | Depth buffer enabled for writing            | depth-buffer   | GL_TRUE    | glGetBooleanv() |
| GL_STENCIL_WRITEMASK   | Stencil-buffer writemask                    | stencil-buffer | 1's        | glGetIntegerv() |
| GL_COLOR_CLEAR_VALUE   | Color-buffer clear value (RGBA mode)        | color-buffer   | 0, 0, 0, 0 | glGetFloatv()   |
| GL_INDEX_CLEAR_VALUE   | Color-buffer clear value (color-index mode) | color-buffer   | 0          | glGetFloatv()   |
| GL_DEPTH_CLEAR_VALUE   | Depth-buffer clear value                    | depth-buffer   | 1          | glGetIntegerv() |
| GL_STENCIL_CLEAR_VALUE | Stencil-buffer clear value                  | stencil-buffer | 0          | glGetIntegerv() |
| GL_ACCUM_CLEAR_VALUE   | Accumulation-buffer clear value             | accum-buffer   | 0          | glGetFloatv()   |


## ==⚡ Table B-10 : (continued) Pixel State Variables

|     State Variable    |                Description                |   属性分组  |  初始值  |     获取命令     |
|-----------------------|-------------------------------------------|-------------|----------|------------------|
| GL_UNPACK_SWAP_BYTES  | Value of GL_UNPACK_SWAP_BYTES             | pixel-store | GL_FALSE | glGetBooleanv()  |
| GL_UNPACK_LSB_FIRST   | Value of GL_UNPACK_LSB_FIRST              | pixel-store | GL_FALSE | glGetBooleanv()  |
| GL_UNPACK_ROW_LENGTH  | Value of GL_UNPACK_ROW_LENGTH             | pixel-store | 0        | glGetIntegerv()  |
| GL_UNPACK_SKIP_ROWS   | Value of GL_UNPACK_SKIP_ROWS              | pixel-store | 0        | glGetIntegerv()  |
| GL_UNPACK_SKIP_PIXELS | Value of GL_UNPACK_SKIP_PIXELS            | pixel-store | 0        | glGetIntegerv()  |
| GL_UNPACK_ALIGNMENT   | Value of GL_UNPACK_ALIGNMENT              | pixel-store | 4        | glGetIntegerv()  |
| GL_PACK_SWAP_BYTES    | Value of GL_PACK_SWAP_BYTES               | pixel-store | GL_FALSE | glGetBooleanv()  |
| GL_PACK_LSB_FIRST     | Value of GL_PACK_LSB_FIRST                | pixel-store | GL_FALSE | glGetBooleanv()  |
| GL_PACK_ROW_LENGTH    | Value of GL_PACK_ROW_LENGTH               | pixel-store | 0        | glGetIntegerv()  |
| GL_PACK_SKIP_ROWS     | Value of GL_PACK_SKIP_ROWS                | pixel-store | 0        | glGetIntegerv()  |
| GL_PACK_SKIP_PIXELS   | Value of GL_PACK_SKIP_PIXELS              | pixel-store | 0        | glGetIntegerv()  |
| GL_PACK_ALIGNMENT     | Value of GL_PACK_ALIGNMENT                | pixel-store | 4        | glGetIntegerv()  |
| GL_MAP_COLOR          | True if colors are mapped                 | pixel       | GL_FALSE | glGetBooleanv()  |
| GL_MAP_STENCIL        | True if stencil values are mapped         | pixel       | GL_FALSE | glGetBooleanv()  |
| GL_INDEX_SHIFT        | Value of GL_INDEX_SHIFT                   | pixel       | 0        | glGetIntegerv()  |
| GL_INDEX_OFFSET       | Value of GL_INDEX_OFFSET                  | pixel       | 0        | glGetIntegerv()  |
| GL_x_SCALE            | GL_RED GL_GREEN GL_BLUE GL_ALPHA GL_DEPTH | pixel       | 1        | glGetFloatv()    |
| GL_x_BIAS             | GL_RED GL_GREEN GL_BLUE GL_ALPHA GL_DEPTH | pixel       | 0        | glGetFloatv()    |
| GL_ZOOM_X             | x zoom factor                             | pixel       | 1.0      | glGetFloatv()    |
| GL_ZOOM_Y             | y zoom factor                             | pixel       | 1.0      | glGetFloatv()    |
| GL_x                  | glPixelMap() 转换表，x 参考 Table 8-1     | -           | 0's      | glGetPixelMap*() |
| GL_x_SIZE             | Size of table x                           | -           | 1        | glGetIntegerv()  |
| GL_READ_BUFFER        | Read source buffer                        | pixel       | -        | glGetIntegerv()  |


## ==⚡ Table B-11 : Evaluator State Variables

|     State Variable    |          Description          |   属性分组  |   初始值   |    获取命令   |
|-----------------------|-------------------------------|-------------|------------|---------------|
| GL_ORDER              | 1D map order                  | -           | 1          | glGetMapiv()  |
| GL_ORDER              | 2D map orders                 | -           | 1, 1       | glGetMapiv()  |
| GL_COEFF              | 1D control points             | -           | -          | glGetMapfv()  |
| GL_COEFF              | 2D control points             | -           | -          | glGetMapfv()  |
| GL_DOMAIN             | 1D domain endpoints           | -           | -          | glGetMapfv()  |
| GL_DOMAIN             | 2D domain endpoints           | -           | -          | glGetMapfv()  |
| GL_MAP1_x             | 1D map enables: x is map type | eval/enable | GL_FALSE   | glIsEnabled() |
| GL_MAP2_x             | 2D map enables: x is map type | eval/enable | GL_FALSE   | glIsEnabled() |
| GL_MAP1_GRID_DOMAIN   | 1D grid endpoints             | eval        | 0, 1       | glGetFloatv() |
| GL_MAP2_GRID_DOMAIN   | 2D grid endpoints             | eval        | 0, 1; 0, 1 | glGetFloatv() |
| GL_MAP1_GRID_SEGMENTS | 1D grid divisions             | eval        | 1          | glGetFloatv() |
| GL_MAP2_GRID_SEGMENTS | 2D grid divisions             | eval        | 1,1        | glGetFloatv() |
| GL_AUTO_NORMAL        | True 如果激活自动生成法线     | eval        | GL_FALSE   | glIsEnabled() |


## ==⚡ Table B-12 : Hint State Variables

|         State Variable         |         Description         | 属性分组 |    初始值    |     获取命令    |
|--------------------------------|-----------------------------|----------|--------------|-----------------|
| GL_PERSPECTIVE_CORRECTION_HINT | Perspective correction hint | hint     | GL_DONT_CARE | glGetIntegerv() |
| GL_POINT_SMOOTH_HINT           | Point smooth hint           | hint     | GL_DONT_CARE | glGetIntegerv() |
| GL_LINE_SMOOTH_HINT            | Line smooth hint            | hint     | GL_DONT_CARE | glGetIntegerv() |
| GL_POLYGON_SMOOTH_HINT         | Polygon smooth hint         | hint     | GL_DONT_CARE | glGetIntegerv() |
| GL_FOG_HINT                    | Fog hint                    | hint     | GL_DONT_CARE | glGetIntegerv() |



## ==⚡ Table B-13 : (continued) Implementation-Dependent State Variables

|          State Variable          |                   Description                    | Minimum Value |     获取命令    |
|----------------------------------|--------------------------------------------------|---------------|-----------------|
| GL_MAX_LIGHTS                    | Maximum number of lights                         | 8             | glGetIntegerv() |
| GL_MAX_CLIP_PLANES               | Maximum number of user clipping planes           | 6             | glGetIntegerv() |
| GL_MAX_MODELVIEW_STACK_DEPTH     | Maximum modelview-matrix stack depth             | 32            | glGetIntegerv() |
| GL_MAX_PROJECTION_STACK_DEPTH    | Maximum projection-matrix stack depth            | 2             | glGetIntegerv() |
| GL_MAX_TEXTURE_STACK_DEPTH       | Maximum depth of texture matrix stack            | 2             | glGetIntegerv() |
| GL_SUBPIXEL_BITS                 | Number of bits of subpixel precision in x and y  | 4             | glGetIntegerv() |
| GL_MAX_TEXTURE_SIZE              | See discussion in "Texture Proxy" in Chapter 9   | 64            | glGetIntegerv() |
| GL_MAX_PIXEL_MAP_TABLE           | Maximum size of a glPixelMap() translation table | 32            | glGetIntegerv() |
| GL_MAX_NAME_STACK_DEPTH          | Maximum selection-name stack depth               | 64            | glGetIntegerv() |
| GL_MAX_LIST_NESTING              | Maximum display-list call nesting                | 64            | glGetIntegerv() |
| GL_MAX_EVAL_ORDER                | Maximum evaluator polynomial order               | 8             | glGetIntegerv() |
| GL_MAX_VIEWPORT_DIMS             | Maximum viewport dimensions                      | -             | glGetIntegerv() |
| GL_MAX_ATTRIB_STACK_DEPTH        | Maximum depth of the attribute stack             | 16            | glGetIntegerv() |
| GL_MAX_CLIENT_ATTRIB_STACK_DEPTH | Maximum depth of the client attribute stack      | 16            | glGetIntegerv() |
| GL_AUX_BUFFERS                   | Number of auxiliary buffers                      | 0             | glGetBooleanv() |
| GL_RGBA_MODE                     | True if color buffers store RGBA                 | -             | glGetBooleanv() |
| GL_INDEX_MODE                    | True if color buffers store indices              | -             | glGetBooleanv() |
| GL_DOUBLEBUFFER                  | True if front and back buffers exist             | -             | glGetBooleanv() |
| GL_STEREO                        | True if left and right buffers exist             | -             | glGetBooleanv() |
| GL_POINT_SIZE_RANGE              | Range (low to high) of antialiased point sizes   | 1, 1          | glGetFloatv()   |
| GL_POINT_SIZE_GRANULARITY        | Antialiased point-size granularity               | -             | glGetFloatv()   |
| GL_LINE_WIDTH_RANGE              | Range (low to high) of antialiased line widths   | 1, 1          | glGetFloatv()   |
| GL_LINE_WIDTH_GRANULARITY        | Antialiased line-width granularity               | -             | glGetFloatv()   |



## ==⚡ Table B-14 : Implementation-Dependent Pixel-Depth State Variables (continued)

|    State Variable   |                          Description                          |     获取命令    |
|---------------------|---------------------------------------------------------------|-----------------|
| GL_RED_BITS         | Number of bits per red component in color buffers             | glGetIntegerv() |
| GL_GREEN_BITS       | Number of bits per green component in color buffers           | glGetIntegerv() |
| GL_BLUE_BITS        | Number of bits per blue component in color buffers            | glGetIntegerv() |
| GL_ALPHA_BITS       | Number of bits per alpha component in color buffers           | glGetIntegerv() |
| GL_INDEX_BITS       | Number of bits per index in color buffers                     | glGetIntegerv() |
| GL_DEPTH_BITS       | Number of depth-buffer bitplanes                              | glGetIntegerv() |
| GL_STENCIL_BITS     | Number of stencil bitplanes                                   | glGetIntegerv() |
| GL_ACCUM_RED_BITS   | Number of bits per red component in the accumulation buffer   | glGetIntegerv() |
| GL_ACCUM_GREEN_BITS | Number of bits per green component in the accumulation buffer | glGetIntegerv() |
| GL_ACCUM_BLUE_BITS  | Number of bits per blue component in the accumulation buffer  | glGetIntegerv() |
| GL_ACCUM_ALPHA_BITS | Number of bits per alpha component in the accumulation buffer | glGetIntegerv() |


## ==⚡ Table B-15 : Miscellaneous State Variables

| State Variable               | Description                                                | 属性分组 | 初始值    | 获取命令        |
| GL_LIST_BASE                 | Setting of glListBase()                                    | list     | 0         | glGetIntegerv() |
| GL_LIST_INDEX                | Number of display list under construction; 0 if none       | -        | 0         | glGetIntegerv() |
| GL_LIST_MODE                 | Mode of display list under construction; undefined if none | -        | 0         | glGetIntegerv() |
| GL_ATTRIB_STACK_DEPTH        | Attribute stack pointer                                    | -        | 0         | glGetIntegerv() |
| GL_CLIENT_ATTRIB_STACK_DEPTH | Client attribute stack pointer                             | -        | 0         | glGetIntegerv() |
| GL_NAME_STACK_DEPTH          | Name stack depth                                           | -        | 0         | glGetIntegerv() |
| GL_RENDER_MODE               | glRenderMode() setting                                     | -        | GL_RENDER | glGetIntegerv() |
| GL_SELECTION_BUFFER_POINTER  | Pointer to selection buffer                                | select   | 0         | glGetPointerv() |
| GL_SELECTION_BUFFER_SIZE     | Size of selection buffer                                   | select   | 0         | glGetIntegerv() |
| GL_FEEDBACK_BUFFER_POINTER   | Pointer to feedback buffer                                 | feedback | 0         | glGetPointerv() |
| GL_FEEDBACK_BUFFER_SIZE      | Size of feedback buffer                                    | feedback | 0         | glGetIntegerv() |
| GL_FEEDBACK_BUFFER_TYPE      | Type of feedback buffer                                    | feedback | GL_2D     | glGetIntegerv() |
| -                            | Current error code(s)                                      | -        | 0         | glGetError()    |



# =🚩 Morden OpenGL Tutorials ogldev 教程讲解
- http://ogldev.atspace.co.uk/index.html


# =🚩 Learn OpenGL .com 教程讲解
- [learnopengl.com](https://learnopengl.com/)
- [learnopengl.com cn](https://learnopengl-cn.github.io/)
- [learnopengl.com code repository](https://github.com/JoeyDeVries/LearnOpenGL)
- [Hello Traiangle](https://learnopengl.com/Getting-started/Hello-Triangle)
- [Getting started Shader](https://learnopengl-cn.github.io/01%20Getting%20started/05%20Shaders/)

learnopengl.com 提供的代码包中，依赖了 glfw3、assimp、freetype、irrKlang，在 lib 目录中已经有编译好的库文件，但是用 VC14 编译的，如果要使用 MinGW，则要考虑重新编译它些依赖模块。



# =🚩 OpenGL Tutorial .org 教程讲解
- [opengl-tutorial.org math cheatsheet](http://www.opengl-tutorial.org/miscellaneous/math-cheatsheet/)
- [opengl-tutorial.org download](http://www.opengl-tutorial.org/download/)
- [opengl-tutorial.org](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-2-the-first-triangle/)

Windows 开发环境配置要点：

- 安装 MinGW 编译套件。
- 安装 CMake 自动化构建工具。
- 安装 Sublime 开发工具。
- 安装 FreeGLUT 工具库。
- 安装 GLFW 工具库。
- 安装 GLEW 扩展加载库，加载 OpenGL 扩展 API 来进行核心模式开发。

目前，CMakeLists.txt 文件能够正常生成 Visual Studio 的工程文件和 make 文件，它能够在 Windows 和 Linux 上运行。根据各依赖库的目录路径，修改以下模板：

```sh
cmake_minimum_required(VERSION 2.8)
project( DisplayImage )

set(CMAKE_C_FLAGS "-std=c99")
set(CMAKE_C_STANDARD 99)
set(CMAKE_C_STANDARD_REQUIRED True)
set(CMAKE_CXX_STANDARD 11)

set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)

include_directories(
	"C:/download/OpenCV/freeglut-3.2.1/include/"
	"C:/download/OpenCV/freeglut-3.2.1/include/GL/"

	"C:/download/OpenCV/glfw-3.3.2/deps/"
	"C:/download/OpenCV/glfw-3.3.2/include/"
	"C:/download/OpenCV/glfw-3.3.2.bin.WIN64/include/"
	
	"C:/download/OpenCV/glew-2.1.0/include/"
	"C:/download/OpenCV/glew-2.1.0/include/GL/"
	${PROJECT_SOURCE_DIR}/Include/
	${PROJECT_SOURCE_DIR}/Include/ImageMagick-6/
)
link_directories(
	"C:/download/OpenCV/freeglut-3.2.1/build/lib/"

	"C:/download/OpenCV/glew-2.1.0/lib/Release/x64/"

	"C:/download/OpenCV/glfw-3.3.2.bin.WIN64/lib-mingw-w64/"
)

message(STATUS)
message("COMPILER LIST:")
message(STATUS)
execute_process(COMMAND where g++ )
execute_process(COMMAND where make )

set(OpenGL_LIBS 
	freeglut
	glu32
	opengl32
	glew32
	glfw3dll
	glfw3
)

macro(add_demo name)
	add_executable( ${name} ${ARGN} )
	target_link_libraries( ${name} ${OpenGL_LIBS} )
endmacro(add_demo)

macro(add_tutorial name item)
	message(STATUS ${name})
	FILE(GLOB src "${item}/*.cpp")
	add_demo(${name} ${src})
endmacro(add_tutorial)

message(STATUS)
message("DEMOS LIST:")
message(STATUS)
foreach(item ${tutorials})
	string(REGEX REPLACE ".*/\(.*\)" "\\1" name ${item})
	message(STATUS ${name})
	FILE(GLOB src "${item}/*.cpp")
	add_demo(${name} ${src})
endforeach(item)

add_tutorial( 01-window tutorial01 )
add_tutorial( 02-point tutorial02 )
add_tutorial( 03-trangle tutorial03 )
```


安装好工具后，给 Sublime 建立一个工程文件保存到下载到的教程目录下，并创建一个 build 子目录用于保存编译文件，Ctrl-Shift-B 选择编译命令，首先执行 Unix Makefiles 生成编译脚本，再执行 Make 编译：

```json
{
	"build_systems":
	[
		{
			"encoding": "utf8",
			"env":
			{
				"PATH": "c:/MinGW/bin/;%PATH%"
			},
			"file_regex": "^  (.+)\\((\\d+)\\)(): ((?:fatal )?(?:error|warning) \\w+\\d\\d\\d\\d: .*) \\[.*$",
			"name": "Demos (Windows)",
			"quiet": true,
			"shell_cmd": "cmake --build .",
			"variants":
			[
				{
					"name": "Unix Makefiles",
					"shell_cmd": "cmake .. -G \"Unix Makefiles\""
				},
				{
					"name": "Make Help",
					"shell_cmd": "make help"
				},
				{
					"name": "clean",
					"shell_cmd": "make clean"
				},
				{
					"name": "clear all",
					"shell_cmd": "del * /s /q"
				},
				{
					"name": "Make",
					"shell_cmd": "make -j 8"
				},
				{
					"name": "Clean & Make",
					"shell_cmd": "make clean && make"
				}
			],
			"working_dir": "${project_path}/build"
		}
	],
	"folders":
	[
		{
			"path": "."
		}
	],
	"settings":
	{
		"cmake":
		{
			"build_folder": "${project_path}/build"
		}
	}
}
```



## ==⚡ Tutorial 01 - Create a window

示例一、这个演示没有任何绘画动作，只是演示程序主窗体的完整创建流程。

要点：

- 初始化 `glutInit`(&argc, argv);
- 设置双缓冲、彩色显示模式 `GLUT_DOUBLE`|`GLUT_RGBA`;
- 初始化窗体大小 `glutInitWindowSize`；
- 初始化窗体位置 `glutInitWindowPosition`；
- 创建一个主窗体 `glutCreateWindow`，当然，可以多个窗体，也可以在窗体上创建子窗体 `glutCreateSubWindow`；
- 初始化重绘回调函数 `glutDisplayFunc`；
- 填充画板颜色为默认的黑色 `glClearColor(r, g, b, a)`，也可以直接调用 `glClear()`；
- 然后进入消息循环 `glutMainLoop()`，等待用户的动作；

在消息循环中，按窗体的重绘需要，比如窗体的遮挡移除后，窗体移动后，窗体切换大小后等都会进入重绘回调函数中。重绘函数主要任务就是将图形再次绘制到窗体上。

此例，完成两个重绘动作：

- `glClear()` 清除指定的缓冲区数据，要清除颜色缓冲以及深度缓冲，可以使用以下标志位，清除颜色后屏幕就会显示为黑色：

	- GL_COLOR_BUFFER_BIT 当前可写的颜色缓冲
	- GL_DEPTH_BUFFER_BIT 深度缓冲
	- GL_ACCUM_BUFFER_BIT 累积缓冲
	- GL_STENCIL_BUFFER_BIT 模板缓冲

- `glutSwapBuffers()` 切换双缓冲中的另一个缓冲区作为显示内容；


完整代码：

```cpp
#include <GL/freeglut.h>

static void RenderSceneCB()
{
	glClear(GL_COLOR_BUFFER_BIT);
	glutSwapBuffers();
}

static void InitializeGlutCallbacks()
{
	glutDisplayFunc(RenderSceneCB);
}

int main(int argc, char** argv)
{
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGBA);
	glutInitWindowSize(1024, 768);
	glutInitWindowPosition(100, 100);
	glutCreateWindow("Tutorial 01");

	InitializeGlutCallbacks();

	glClearColor(0.0f, 0.0f, 0.0f, 0.0f);

	glutMainLoop();
	
	return 0;
}
```


## ==⚡ Tutorial 03 - First triangle
- [Rendering Pipeline Overview](https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview)
- [OpenGL Shading Language](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [Shader 着色器](https://www.khronos.org/opengl/wiki/Shader)

示例三、和 Tutorial 02 - Hello dot! 都是展示使用 VBO 对象来绘制图形，分别是一点，和一个三角形。使用了 `ogldev_math_3d.h` 中定义的 3D 向量 `Vector3f`，此对象中定义了数学算法，但是作为绘画三角形，只是使用了结构体的数据结构，并没有涉及运算，因此可以简化为以下代码块：

	struct Vector3f
	{
		float x;
		float y;
		float z;

		Vector3f() {}

		Vector3f(float _x, float _y, float _z)
		{
			x = _x;
			y = _y;
			z = _z;
		}
		
		Vector3f(const float* pFloat)
		{
			x = pFloat[0];
			y = pFloat[0];
			z = pFloat[0];
		}
		
		Vector3f(float f)
		{
			x = y = z = f;
		}
	};

屏幕坐标 Screen Coordinates 确认，假设你是坐标原点，那么：

- X 轴向右；
- Y 轴向上；
- Z 轴向着后背；

OpenGL 用右手系 Right Hand Rule：

- X 轴是拇指 thumb；
- Y 轴是食指 index；
- Z 轴是中指 middle finger；

那么，将食指指向天空，此时中中指应该指向你，拇指指向右，这个状态就和 OpenGL 屏幕坐标是一致的。但是注意，设备坐标不同，鼠标产生的坐标心屏幕的左上角为原点，Y 轴上下反转。

VAO - Vertex Array Object 相关 API：

- GLuint VertexArrayID;
- glGenVertexArrays(1, &VertexArrayID);
- glBindVertexArray(VertexArrayID);

VBO 使用要点：

- 在程序初始化阶段，设置好 VBO 的顶点数据，使用 `glGenBuffers` 创建 VBO 对象，它返回的是一个号码，再通过 `glBindBuffer`
绑定到缓冲区，也就是产生缓冲对象，然后，`glBufferData` 将顶点数据刷到缓冲对象内存上。

		Vector3f Vertices[3];
		...
		glGenBuffers(1, &VBO);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glBufferData(GL_ARRAY_BUFFER, sizeof(Vertices), Vertices, GL_STATIC_DRAW);

- 然后，在重绘函数中并没有绘图 API，只是对 VBO 进行操作：

	- 首先，`glEnableVertexAttribArray(0);` 激活了第一组，即前面创建的，已经缓冲的顶点数据；
	- 然后，`glBindBuffer` 再绑定到到缓冲对象上；
	- 第三步比较重要，`glVertexAttribPointer` 设置顶点属性；
	- 最后，`glDrawArrays(GL_TRIANGLES, 0, 3);` 执行绘图，表示从 0 号顶点开始跟着三个顶点画一个三角形，GL_TRIANGLES 表示可以使用更多的点，画更多的三解形。这个 API 就有点像旧式的图元绘制了。
	- 收尾，执行 `glDisableVertexAttribArray(0);` 送样关闭打开的顶点数据，和 `glEnableVertexAttribArray(0);` 配合使用。

特别地，配置顶点属性是比较关键的部分:

	glVertexAttribPointer(
	   0,                  // attribute 0. No particular reason for 0, but must match the layout in the shader.
	   3,                  // size
	   GL_FLOAT,           // type
	   GL_FALSE,           // normalized?
	   0,                  // stride
	   (void*)0            // array buffer offset
	);

- `index` 参数指定从索引 0 开始取数据，与顶点着色器中 layout(location=0) 对应。
- `size` 参数指定顶点属性大小为 3 字节。
- `type` 参数指定数据类型。
- `normalized` 参数定义是否希望标准化数据，只表示方向不表示大小。
- `stride` 参数是步长，指定在连续的顶点属性之间的间隔。上面传 0 和传 3 效果相同，如果传 1 取值方式为 012、123、234……
- `offset` 参数表示顶点数据在缓冲区起始位置的偏移，是一个 GLvoid 指针。

完整代码：

	#include <stdio.h>
	#include <GL/glew.h>
	#include <GL/freeglut.h>
	#include "ogldev_math_3d.h"

	GLuint VBO;

	static void RenderSceneCB()
	{
		glClear(GL_COLOR_BUFFER_BIT);

		glEnableVertexAttribArray(0);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

		glDrawArrays(GL_TRIANGLES, 0, 3);

		glDisableVertexAttribArray(0);

		glutSwapBuffers();
	}


	static void InitializeGlutCallbacks()
	{
		glutDisplayFunc(RenderSceneCB);
	}

	static void CreateVertexBuffer()
	{
		Vector3f Vertices[3];
		Vertices[0] = Vector3f(-1.0f, -1.0f, 0.0f);
		Vertices[1] = Vector3f(1.0f, -1.0f, 0.0f);
		Vertices[2] = Vector3f(0.0f, 1.0f, 0.0f);

		glGenBuffers(1, &VBO);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glBufferData(GL_ARRAY_BUFFER, sizeof(Vertices), Vertices, GL_STATIC_DRAW);
	}


	int main(int argc, char** argv)
	{
		glutInit(&argc, argv);
		glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGBA);
		glutInitWindowSize(1024, 768);
		glutInitWindowPosition(100, 100);
		glutCreateWindow("Tutorial 03");

		InitializeGlutCallbacks();

		// Must be done after glut is initialized!
		GLenum res = glewInit();
		if (res != GLEW_OK) {
		  fprintf(stderr, "Error: '%s'\n", glewGetErrorString(res));
		  return 1;
		}

		glClearColor(0.0f, 0.0f, 0.0f, 0.0f);

		CreateVertexBuffer();

		glutMainLoop();

		return 0;
	}


## ==⚡ Tutorial 04 - shaders
- [Rendering Pipeline Overview](https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview)
- [OpenGL Shading Language](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [Shader 着色器](https://www.khronos.org/opengl/wiki/Shader)
- [Vertex Shader](https://www.khronos.org/opengl/wiki/Vertex_Shader)
- [Tessellation shader 细分着色器](https://www.khronos.org/opengl/wiki/Tessellation)
- [Geometry Shader Examples](https://www.khronos.org/opengl/wiki/Geometry_Shader_Examples)
- [Fragment Shader](https://www.khronos.org/opengl/wiki/Fragment_Shader)
- [Getting started Shader](https://learnopengl-cn.github.io/01%20Getting%20started/05%20Shaders/)
- [OpenGL 超级宝典笔记 GLSL 语言基础](https://my.oschina.net/sweetdark/blog/208024)
- [The OpenGL Shading Language](https://www.khronos.org/registry/OpenGL/specs/gl/GLSLangSpec.1.20.pdf)
- [Tutorial 2 : The first triangle](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-2-the-first-triangle/)

例四、展示着色器的使用，到 OpenGL4.6 为止，已经支持 5 种类型的着色器：

- VS - Vertex Shader

	输入：顶点坐标 Position，该坐标值是由 `glVertex*` 或者是 `glDraw*` API 传入的。
	输出：顶点坐标，这个是经过几何变换后的坐标。
	功能：简单的说就是把输入的顶点坐标乘以几何变换矩阵。每输入一个顶点，也就是 `glVertex*` API 每调用一次，Vertex shader 都会被调用一次。

	当然，VS 还可以接收颜色，纹理坐标，雾坐标等属性，并在内部对他们做一点点变化，然后再输出。

- TCS - Tessellation Control  Shader，D3D 11 对应 Hull shader；

	输入：Patch，它可以看成是多个顶点的集合。它包括每个顶点的属性，坐标，颜色，纹理坐标等等。用户可以指定一个 patch 里面要包含几个顶点。同时，一个 patch 还可以用自己的属性，该属性被它内部的所有顶点共有，即这些顶点只有一套 patch 属性，而不是每个顶点拥有一个自己的 patch 属性。

	输出：Patch，gl_TessLevelOuter，gl_TessLevelInner。

	功能：TCS 会根据需求把 Patch 的属性以及它内部的顶点属性做一些修改，然后输出。当然，它也可以不做任何修改，直接传给后面的 shader。Tessellation 的作用就是把一个图元分割成很多图元，比如把一个三角形分割成很多更小的三角形。因此，在分割的时候我们得要知道这个三角形的每个边要被分割成多少段，然后在三角形内部，我们还要怎么继续分割，这两个紫色的内容就是存储在 `gl_TessLevelOuter` 和 `gl_TessLevelInner`。

- TES - Tessellation Evaluation Shader，D3D 对应 Domain shader；

	输入：一系列顶点，是三角形被分割后产生的新顶点。下面是每个 TES 程序都必须有的一段代码： 

		layout( triangles, fractional_odd_spacing, ccw ) in;

	它表示 TES 的输入是三角形，当然你也可以写成其他类型的图元，至于 fractional_odd_spacing 和 ccw 参考规范文档。最后的那个 in 进一步说明了这是 TES 的输入。

	输出：也是一系列顶点。

	功能：其实在 TCS 与 TES 之间有个过程叫细分图元生成 TPG - Tessellation Primitive Generator，它首先会去查看 TES 的输入是什么，哦，它要三角形。那么，TGP 就会把 TCS 传入的 Patch 内部的顶点看成是若干个三角形，注意 Patch 内部的顶点不一定只有三个。然后，TGP 每次从当前 Patch 里面取出三个顶点做一个三角形的分割，直到 Patch 里面的顶点全部被取出。

- GS - Geometry Shader；

	输入：一个图元
	输出：一个或者多个图元
	功能：无论是否有 VS，TCS 或者 TES，在 GS 前面都会有一个图元装配的过程，也就是说，传给 GS 的是图元，而不是顶点。

- PS - Fragment Shader，D3D 对应 Pixel Shader；

Fragment Shader(像素着色器)

注意，示例引用了 ReadFile 这个 API 来读取着色器程序文件，原型在 `ogldev_util.h` 中定义，需要和 `ogldev_util.cpp` 一并编译。

	void OgldevFileError(const char* pFileName, uint line, const char* pFileError);

	#define OGLDEV_FILE_ERROR(FileError) OgldevFileError(__FILE__, __LINE__, FileError);

	void OgldevFileError(const char* pFileName, uint line, const char* pFileError)
	{
	#ifdef WIN32
		char msg[1000];
		_snprintf_s(msg, sizeof(msg), "%s:%d: unable to open file `%s`", pFileName, line, pFileError);
		MessageBoxA(NULL, msg, NULL, 0);
	#else
		fprintf(stderr, "%s:%d: unable to open file `%s`\n", pFileName, line, pFileError);
	#endif    
	}

	bool ReadFile(const char* pFileName, string& outFile)
	{
		ifstream f(pFileName);
		
		bool ret = false;
		
		if (f.is_open()) {
			string line;
			while (getline(f, line)) {
				outFile.append(line);
				outFile.append("\n");
			}
			
			f.close();
			
			ret = true;
		}
		else {
			OGLDEV_FILE_ERROR(pFileName);
		}
		
		return ret;
	}

请匆和 Windows ReadFile 这个 API (fileapi.h) 混淆。这的错误处理方法还不错，通过宏定义，借用了文件名和行号两个宏，定位了错误位置。

不工具中另外一个函数 `ReadBinaryFile` 出现了异常：

	char* ReadBinaryFile(const char* pFileName, int& size)
	{
		HANDLE f = CreateFileA(pFileName, GENERIC_READ, 0, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);

		if (f == INVALID_HANDLE_VALUE) {
			OGLDEV_FILE_ERROR(pFileName);
			return false;
		}

		size = GetFileSize(f, NULL);

		if (size == INVALID_FILE_SIZE) {
			OGLDEV_ERROR("Invalid file size %s\n", pFileName);
			return false;
		}

		// wip for tutorial51
		assert(0);

		return true;
	}

此方法在 `ogldev_vulkan.cpp` 使用时也是按返回字符串处理的，而函数体却返回布尔值，代码太糟糕了：

	int codeSize = 0;
	char* pShaderCode = ReadBinaryFile(pFileName, codeSize);
	assert(pShaderCode);
  
我的解决办法也粗暴：

	return false; -> return NULL;
	return true; -> return (char*)"true";

着色器示例程序要点分析，VBO 数据处理和 Tutorial 03 - First triangle 保持一致的处理，另外使用了 GLEW 扩展加载后，通过 `glGetString(GL_VERSION)` 可以获取 OpenGL API 版本号。

而此示例的重点在一起，着色器的使用过程，首先，编写好两个简单的着色器程序，扩展名随意，只需要内容符合 GLSL 语法要求：

- shader.fs 片段着色器 `GL_FRAGMENT_SHADER`，设置一个红色输出：

		#version 330

		out vec4 FragColor;

		void main()
		{
			FragColor = vec4(1.0, 0.0, 0.0, 1.0);
		}


- shader.vs 顶点着色器 `GL_VERTEX_SHADER`，只将输入的坐标 X、Y 部分缩小到一半：

		#version 330

		layout (location = 0) in vec3 Position;

		void main()
		{
			gl_Position = vec4(0.5 * Position.x, 0.5 * Position.y, Position.z, 1.0);
		}

着色器程序开头一行声明版本为 OpenGL 3x 的语法，然后声明输入数据，`in` 和 `out` 是两个方向。对于 VS 来说，输入是顶点，较特别，因为它是渲染管道的起始着色器。数据类型 `vec3` 类似于三维向量，但又有区别，可以看作小型的 `glm::vec3`。

`layout(location = 0)` 这里设置的位置起始值和 VBO 对象中，`glVertexAttribPointer` 设置的顶点属性 index 要保持一致，顶点数据会按顺序送入 vertexPosition_modelspace，即上面定义的 Position 变量指定的内存中。

像 C 程序一样，着色器程序也有 main 入口函数。


主程序中初始化执行的 `CompileShaders` 函数才是着色器的主体功能：

- 使用 `glCreateProgram()` 创建着色器程序对象，返回它的号码牌，后面需要通过 `glAttachShader` 绑定着色器代码；
- 使用 ReadFile 读入着色器代码文件；
- 使用 `glCreateShader` 创建着色器对象，返回它的号码牌，这里需要用到 `GL_VERTEX_SHADER`、`GL_FRAGMENT_SHADER` 两种；
- 使用 `glShaderSource` 装入着色器代码到着色器对象，然后调用 `glCompileShader` 编译代码，成功后绑定到着色器程序对象；
- 着色器程序对象绑定编译的代码后，就可以进入链接程序，`glLinkProgram` 链接成功与否可以通过 `glGetProgramiv` 检测，错误信息通过 `glGetProgramInfoLog` 获取。成功后就可以使用着色器了，执行 `glUseProgram` 完成着色器的设置。

接下来，可以通过修改着色器来改变程序的渲染图形，而不是修改程序代码流程，例如，将输出三角开变为白色，或者修改坐标位置间接改变图形大小：

	FragColor = vec4(1.0, 1.0, 1.0, 1.0);

	gl_Position = vec4(0.1 * Position.x, 0.1 * Position.y, Position.z, 1.0);

示例代码：

	#include <stdio.h>
	#include <string.h>
	#include <GL/glew.h>
	#include <GL/freeglut.h>

	#include "ogldev_util.h"
	#include "ogldev_math_3d.h"

	GLuint VBO;

	const char* pVSFileName = "shader.vs";
	const char* pFSFileName = "shader.fs";

	static void RenderSceneCB()
	{
		glClear(GL_COLOR_BUFFER_BIT);

		glEnableVertexAttribArray(0);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

		glDrawArrays(GL_TRIANGLES, 0, 3);

		glDisableVertexAttribArray(0);

		glutSwapBuffers();
	}


	static void InitializeGlutCallbacks()
	{
		glutDisplayFunc(RenderSceneCB);
	}

	static void CreateVertexBuffer()
	{
		Vector3f Vertices[3];
		Vertices[0] = Vector3f(-1.0f, -1.0f, 0.0f);
		Vertices[1] = Vector3f(1.0f, -1.0f, 0.0f);
		Vertices[2] = Vector3f(0.0f, 1.0f, 0.0f);

		glGenBuffers(1, &VBO);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glBufferData(GL_ARRAY_BUFFER, sizeof(Vertices), Vertices, GL_STATIC_DRAW);
	}

	static void AddShader(GLuint ShaderProgram, const char* pShaderText, GLenum ShaderType)
	{
		GLuint ShaderObj = glCreateShader(ShaderType);

		if (ShaderObj == 0) {
			fprintf(stderr, "Error creating shader type %d\n", ShaderType);
			exit(0);
		}

		const GLchar* p[1];
		p[0] = pShaderText;
		GLint Lengths[1];
		Lengths[0]= strlen(pShaderText);
		glShaderSource(ShaderObj, 1, p, Lengths);
		glCompileShader(ShaderObj);
		GLint success;
		glGetShaderiv(ShaderObj, GL_COMPILE_STATUS, &success);
		if (!success) {
			GLchar InfoLog[1024];
			glGetShaderInfoLog(ShaderObj, 1024, NULL, InfoLog);
			fprintf(stderr, "Error compiling shader type %d: '%s'\n", ShaderType, InfoLog);
			exit(1);
		}

		glAttachShader(ShaderProgram, ShaderObj);
	}

	static void CompileShaders()
	{
		GLuint ShaderProgram = glCreateProgram();

		if (ShaderProgram == 0) {
			fprintf(stderr, "Error creating shader program\n");
			exit(1);
		}
		
		string vs, fs;

		if (!ReadFile(pVSFileName, vs)) {
			exit(1);
		};

		if (!ReadFile(pFSFileName, fs)) {
			exit(1);
		};

		AddShader(ShaderProgram, vs.c_str(), GL_VERTEX_SHADER);
		AddShader(ShaderProgram, fs.c_str(), GL_FRAGMENT_SHADER);

		GLint Success = 0;
		GLchar ErrorLog[1024] = { 0 };

		glLinkProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_LINK_STATUS, &Success);
		if (Success == 0) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Error linking shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glValidateProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_VALIDATE_STATUS, &Success);
		if (!Success) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Invalid shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glUseProgram(ShaderProgram);
	}

	int main(int argc, char** argv)
	{
		glutInit(&argc, argv);
		glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB);
		glutInitWindowSize(1024, 768);
		glutInitWindowPosition(100, 100);
		glutCreateWindow("Tutorial 04");

		InitializeGlutCallbacks();

		// Must be done after glut is initialized!
		GLenum res = glewInit();
		if (res != GLEW_OK) {
		  fprintf(stderr, "Error: '%s'\n", glewGetErrorString(res));
		  return 1;
		}
		
		printf("GL version: %s\n", glGetString(GL_VERSION));

		glClearColor(0.0f, 0.0f, 0.0f, 0.0f);

		CreateVertexBuffer();

		CompileShaders();

		glutMainLoop();

		return 0;
	}


## ==⚡ Tutorial 05 - uniform variables

示例五，通过 GSLS 的 uniform 数据类型，演示了一个动态缩放的三角形，和示例 4 相比，变化在顶点着色器中多了一个 gScale 变量：

	#version 330

	layout (location = 0) in vec3 Position;

	uniform float gScale;

	void main()
	{
		gl_Position = vec4(gScale * Position.x, gScale * Position.y, Position.z, 1.0);
	}

`Uniform` 是从 CPU 向 GPU 中的着色器发送数据的一种方式，和顶点属性有些不同。首先，uniform 是全局的 Global，意味着 uniform 变量必须在每个着色器程序对象中都是独一无二的，而且它可以被着色器程序的任意着色器在任意阶段访问。第二，无论你把 uniform 值设置成什么，uniform 会一直保存它们的数据，直到它们被重置或更新。

用 `glGetUniformLocation` 查询 uniform 变量值，通过 `glUniform4f` 函数设置 uniform 值。注意，查询 uniform 不要求使用过着色器程序，但是更新一个 uniform 之前必须先使用程序，即调用 `glUseProgram`，因为，它是在当前激活的着色器程序中设置 uniform。

这个 gScale 不能在着色器代码中进行修改，需要在主程序的重绘事件 `RenderSceneCB` 中进行初始化赋值并设置到着色器上：

- 声明一个 GLuint gScaleLocation 变量，保存在初始化中得到的着色器 uniform 变量：

		glUseProgram(ShaderProgram);

		gScaleLocation = glGetUniformLocation(ShaderProgram, "gScale");
		assert(gScaleLocation != 0xFFFFFFFF);

- 在重绘事件中，通过 `glUniform1f(gScaleLocation, sinf(Scale));` 将缩放比例值 `Scale` 更新到着色器程序的内存中；

注意，获取颜色器程序的 uniform 变量前，一定要先使用过着色器程序 `glUseProgram`。

完整代码：

	#include <stdio.h>
	#include <string.h>

	#include <math.h>
	#include <GL/glew.h>
	#include <GL/freeglut.h>

	#include "ogldev_util.h"
	#include "ogldev_math_3d.h"

	GLuint VBO;
	GLuint gScaleLocation;

	const char* pVSFileName = "../tutorial05/shader.vs";
	const char* pFSFileName = "../tutorial05/shader.fs";

	static void RenderSceneCB()
	{
		glClear(GL_COLOR_BUFFER_BIT);

		static float Scale = 0.0f;

		Scale += 0.001f;

		glUniform1f(gScaleLocation, sinf(Scale));

		glEnableVertexAttribArray(0);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

		glDrawArrays(GL_TRIANGLES, 0, 3);

		glDisableVertexAttribArray(0);

		glutSwapBuffers();
	}


	static void InitializeGlutCallbacks()
	{
		glutDisplayFunc(RenderSceneCB);
		glutIdleFunc(RenderSceneCB);
	}

	static void CreateVertexBuffer()
	{
		Vector3f Vertices[3];
		Vertices[0] = Vector3f(-1.0f, -1.0f, 0.0f);
		Vertices[1] = Vector3f(1.0f, -1.0f, 0.0f);
		Vertices[2] = Vector3f(0.0f, 1.0f, 0.0f);

		glGenBuffers(1, &VBO);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glBufferData(GL_ARRAY_BUFFER, sizeof(Vertices), Vertices, GL_STATIC_DRAW);
	}

	static void AddShader(GLuint ShaderProgram, const char* pShaderText, GLenum ShaderType)
	{
		GLuint ShaderObj = glCreateShader(ShaderType);

		if (ShaderObj == 0) {
			fprintf(stderr, "Error creating shader type %d\n", ShaderType);
			exit(1);
		}

		const GLchar* p[1];
		p[0] = pShaderText;
		GLint Lengths[1];
		Lengths[0]= strlen(pShaderText);
		glShaderSource(ShaderObj, 1, p, Lengths);
		glCompileShader(ShaderObj);
		GLint success;
		glGetShaderiv(ShaderObj, GL_COMPILE_STATUS, &success);
		if (!success) {
			GLchar InfoLog[1024];
			glGetShaderInfoLog(ShaderObj, 1024, NULL, InfoLog);
			fprintf(stderr, "Error compiling shader type %d: '%s'\n", ShaderType, InfoLog);
			exit(1);
		}

		glAttachShader(ShaderProgram, ShaderObj);
	}

	static void CompileShaders()
	{
		GLuint ShaderProgram = glCreateProgram();

		if (ShaderProgram == 0) {
			fprintf(stderr, "Error creating shader program\n");
			exit(1);
		}
		
		string vs, fs;

		if (!ReadFile(pVSFileName, vs)) {
			exit(1);
		};

		if (!ReadFile(pFSFileName, fs)) {
			exit(1);
		};

		AddShader(ShaderProgram, vs.c_str(), GL_VERTEX_SHADER);
		AddShader(ShaderProgram, fs.c_str(), GL_FRAGMENT_SHADER);

		GLint Success = 0;
		GLchar ErrorLog[1024] = { 0 };

		glLinkProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_LINK_STATUS, &Success);
		if (Success == 0) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Error linking shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glValidateProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_VALIDATE_STATUS, &Success);
		if (!Success) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Invalid shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glUseProgram(ShaderProgram);

		gScaleLocation = glGetUniformLocation(ShaderProgram, "gScale");
		assert(gScaleLocation != 0xFFFFFFFF);
	}

	int main(int argc, char** argv)
	{
		glutInit(&argc, argv);
		glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGBA);
		glutInitWindowSize(1024, 768);
		glutInitWindowPosition(100, 100);
		glutCreateWindow("Tutorial 05");

		InitializeGlutCallbacks();

		// Must be done after glut is initialized!
		GLenum res = glewInit();
		if (res != GLEW_OK) {
		  fprintf(stderr, "Error: '%s'\n", glewGetErrorString(res));
		  return 1;
		}
		
		printf("GL version: %s\n", glGetString(GL_VERSION));

		glClearColor(0.0f, 0.0f, 0.0f, 0.0f);

		CreateVertexBuffer();

		CompileShaders();

		glutMainLoop();

		return 0;
	}



## ==⚡ Tutorial 06/07/08 - Translation/Rotation/Scaling transformation
- http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/
- https://learnopengl.com/Getting-started/Transformations

示例 6/7/8 分别展示了 Matrix4f 在矩阵变换上的应用，这是一个 4x4 矩阵类实现，通过这个矩阵实现平移、旋转、缩放等等仿射变换 affine transformation。

总体来说，OpenGL 编程中，涉及三大部分的坐标关系处理：

- 模型坐标 Model Coordinates 涉及 Model Matrix 变换；
- 世界坐标 World Coordinates 涉及 View Matrix 变换；
- 相机坐标 Camera Coordinates 涉及 Projection Matrix 变换；

在 OpenGL 中使用 `gluLookAt` 改变的是相机坐标，而设置透视的 API 改变的是世界坐标系，即视口的变换，至于模型的坐标，顶点通过变换矩阵的转换后就改变了：

	void glOrtho (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void glFrustum (GLdouble left, GLdouble right, GLdouble bottom, GLdouble top, GLdouble zNear, GLdouble zFar);

	void gluPerspective(GLdouble fovy,GLdouble aspect,GLdouble zNear, GLdouble zFar);


这些示例开始使用 Open Asset Import Library (assimp) 资源加载库的一些基础类，Matrix4f 的构造函数就可以借用 `aiMatrix4x4` 来构造实例，它是一个模板类实例，C++ 的模板概念是其它语言中的泛型概念的起源：

	template<typename TReal>
	class aiMatrix4x4t
	{
		...
	public:

		TReal a1, a2, a3, a4;
		TReal b1, b2, b3, b4;
		TReal c1, c2, c3, c4;
		TReal d1, d2, d3, d4;

	} PACK_STRUCT; 

	typedef aiMatrix4x4t<float> aiMatrix4x4;

`aiMatrix4x4t` 这个类实现了通用的矩阵变换运行，包括各轴的旋转 Rotation、RotationX、RotationY、RotationZ，还有 Translation、Scaling 方法，还有转置 Transpose 和反转
Inverse，实现代码在 `aiMatrix4x4t.inl` 文件。

程序结构处理 VBO 的部分和示例 3 一致，着色器部分和例 4 一致，着色器 uniform 变量的处理和示例 5 一致。

	GLuint gWorldLocation;
	...
	glUseProgram(ShaderProgram);
	...
	gWorldLocation = glGetUniformLocation(ShaderProgram, "gWorld");
	assert(gWorldLocation != 0xFFFFFFFF);

向 GPU 发送顶点数据的 API 有很多，根据数据类型不同，通过后缀可以和数据类型对应，以其中 double 基础类型为例，数字表示维数，d/f/i 分别表示双精度浮点、单精度浮点、整形，后面带个 `v` 表示各顶点数据的开始位置，也就是用一个指针快速传递数据。

	glUniform1d (GLint location, GLdouble x);
	glUniform2d (GLint location, GLdouble x, GLdouble y);
	glUniform3d (GLint location, GLdouble x, GLdouble y, GLdouble z);
	glUniform4d (GLint location, GLdouble x, GLdouble y, GLdouble z, GLdouble w);
	glUniform1dv (GLint location, GLsizei count, const GLdouble *value);
	glUniform2dv (GLint location, GLsizei count, const GLdouble *value);
	glUniform3dv (GLint location, GLsizei count, const GLdouble *value);
	glUniform4dv (GLint location, GLsizei count, const GLdouble *value);
	glUniformMatrix2dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix3dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix4dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix2x3dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix2x4dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix3x2dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix3x4dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix4x2dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);
	glUniformMatrix4x3dv (GLint location, GLsizei count, GLboolean transpose, const GLdouble *value);


示例的 shader.fs 片段着色器没有功能变动，保持输出蓝色，而 shader.vs 顶点着色器新增了 `mat4` 变量，输出变量还是 `gl_Position`：

	#version 330

	layout (location = 0) in vec3 Position;

	uniform mat4 gWorld;

	void main()
	{
		gl_Position = gWorld * vec4(Position, 1.0);
	}

在重绘事件中，使用 `glUniformMatrix4fv` 将矩阵发送到 GPU，矩阵的数据使用三角函数进行旋转处理：

	static float Scale = 0.0f;

	Scale += 0.001f;

	Matrix4f World;

	World.m[0][0] = cosf(Scale); World.m[0][1] = -sinf(Scale); World.m[0][2] = 0.0f; World.m[0][3] = 0.0f;
	World.m[1][0] = sinf(Scale); World.m[1][1] = cosf(Scale);  World.m[1][2] = 0.0f; World.m[1][3] = 0.0f;
	World.m[2][0] = 0.0f;        World.m[2][1] = 0.0f;         World.m[2][2] = 1.0f; World.m[2][3] = 0.0f;
	World.m[3][0] = 0.0f;        World.m[3][1] = 0.0f;         World.m[3][2] = 0.0f; World.m[3][3] = 1.0f;

	glUniformMatrix4fv(gWorldLocation, 1, GL_TRUE, &World.m[0][0]);

和示例 6/8 的平移、缩放变换对比：

	World.m[0][0] = 1.0f; World.m[0][1] = 0.0f; World.m[0][2] = 0.0f; World.m[0][3] = sinf(Scale);
	World.m[1][0] = 0.0f; World.m[1][1] = 1.0f; World.m[1][2] = 0.0f; World.m[1][3] = 0.0f;
	World.m[2][0] = 0.0f; World.m[2][1] = 0.0f; World.m[2][2] = 1.0f; World.m[2][3] = 0.0f;
	World.m[3][0] = 0.0f; World.m[3][1] = 0.0f; World.m[3][2] = 0.0f; World.m[3][3] = 1.0f;

	World.m[0][0] = sinf(Scale) ; World.m[0][1] = 0.0f       ; World.m[0][2] = 0.0f;        World.m[0][3] = 0.0f;
	World.m[1][0] = 0.0f        ; World.m[1][1] = sinf(Scale); World.m[1][2] = 0.0f;        World.m[1][3] = 0.0f;
	World.m[2][0] = 0.0f;       ; World.m[2][1] = 0.0f;      ; World.m[2][2] = sinf(Scale); World.m[2][3] = 0.0f;
	World.m[3][0] = 0.0f;       ; World.m[3][1] = 0.0f;      ; World.m[3][2] = 0.0f;        World.m[3][3] = 1.0f;

用于平移、旋转、绽放的矩阵数组表达和数学上的矩阵表达式是非常相似的：

	| 1.0f  0.0f  0.0f  sinf(Scale) |
	| 0.0f  1.0f  0.0f  0.0f        |
	| 0.0f  0.0f  1.0f  0.0f        |
	| 0.0f  0.0f  0.0f  1.0f        |

	| cosf(Scale)  -sinf(Scale)  0.0f   0.0f |
	| sinf(Scale)   cosf(Scale)  0.0f   0.0f |
	| 0.0f          0.0f         1.0f   0.0f |
	| 0.0f          0.0f         0.0f   1.0f |

	| sinf(Scale)  0.0f         0.0f         0.0f |
	| 0.0f         sinf(Scale)  0.0f         0.0f |
	| 0.0f         0.0f         sinf(Scale)  0.0f |
	| 0.0f         0.0f         0.0f         1.0f |

可以看到变换矩阵都可以通过修改以下所示的 Identity Matrix 单位矩阵得到，齐次坐标 (x, y, z, w) 的变换矩阵各个位置的功能标记如下，tx、ty 表示平移，S/R 分别表示绽放或旋转。这里可以看到 3D 坐标变换为何要使用齐次坐标，多出来的 w 就可以用来平衡变换上：

	| 1.0f  0.0f  0.0f  0.0f |
	| 0.0f  1.0f  0.0f  0.0f |
	| 0.0f  0.0f  1.0f  0.0f |
	| 0.0f  0.0f  0.0f  1.0f |

	|  S/R     R  0.0f    tx |
	|    R   S/R  0.0f    ty |
	| 0.0f  0.0f   S/R  0.0f |
	| 0.0f  0.0f  0.0f  1.0f |


示例代码：

	#include <stdio.h>
	#include <string.h>

	#include <math.h>
	#include <GL/glew.h>
	#include <GL/freeglut.h>

	#include "ogldev_util.h"
	#include "ogldev_math_3d.h"

	GLuint VBO;
	GLuint gWorldLocation;

	const char* pVSFileName = "shader.vs";
	const char* pFSFileName = "shader.fs";


	static void RenderSceneCB()
	{
		glClear(GL_COLOR_BUFFER_BIT);

		static float Scale = 0.0f;

		Scale += 0.001f;

		Matrix4f World;

		World.m[0][0] = cosf(Scale); World.m[0][1] = -sinf(Scale); World.m[0][2] = 0.0f; World.m[0][3] = 0.0f;
		World.m[1][0] = sinf(Scale); World.m[1][1] = cosf(Scale);  World.m[1][2] = 0.0f; World.m[1][3] = 0.0f;
		World.m[2][0] = 0.0f;        World.m[2][1] = 0.0f;         World.m[2][2] = 1.0f; World.m[2][3] = 0.0f;
		World.m[3][0] = 0.0f;        World.m[3][1] = 0.0f;         World.m[3][2] = 0.0f; World.m[3][3] = 1.0f;

		glUniformMatrix4fv(gWorldLocation, 1, GL_TRUE, &World.m[0][0]);

		glEnableVertexAttribArray(0);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, 0);

		glDrawArrays(GL_TRIANGLES, 0, 3);

		glDisableVertexAttribArray(0);

		glutSwapBuffers();
	}


	static void InitializeGlutCallbacks()
	{
		glutDisplayFunc(RenderSceneCB);
		glutIdleFunc(RenderSceneCB);
	}

	static void CreateVertexBuffer()
	{
		Vector3f Vertices[3];
		Vertices[0] = Vector3f(-1.0f, -1.0f, 0.0f);
		Vertices[1] = Vector3f(1.0f, -1.0f, 0.0f);
		Vertices[2] = Vector3f(0.0f, 1.0f, 0.0f);

		glGenBuffers(1, &VBO);
		glBindBuffer(GL_ARRAY_BUFFER, VBO);
		glBufferData(GL_ARRAY_BUFFER, sizeof(Vertices), Vertices, GL_STATIC_DRAW);
	}

	static void AddShader(GLuint ShaderProgram, const char* pShaderText, GLenum ShaderType)
	{
		GLuint ShaderObj = glCreateShader(ShaderType);

		if (ShaderObj == 0) {
			fprintf(stderr, "Error creating shader type %d\n", ShaderType);
			exit(1);
		}

		const GLchar* p[1];
		p[0] = pShaderText;
		GLint Lengths[1];
		Lengths[0]= strlen(pShaderText);
		glShaderSource(ShaderObj, 1, p, Lengths);
		glCompileShader(ShaderObj);
		GLint success;
		glGetShaderiv(ShaderObj, GL_COMPILE_STATUS, &success);
		if (!success) {
			GLchar InfoLog[1024];
			glGetShaderInfoLog(ShaderObj, 1024, NULL, InfoLog);
			fprintf(stderr, "Error compiling shader type %d: '%s'\n", ShaderType, InfoLog);
			exit(1);
		}

		glAttachShader(ShaderProgram, ShaderObj);
	}

	static void CompileShaders()
	{
		GLuint ShaderProgram = glCreateProgram();

		if (ShaderProgram == 0) {
			fprintf(stderr, "Error creating shader program\n");
			exit(1);
		}
		string vs, fs;

		if (!ReadFile(pVSFileName, vs)) {
			exit(1);
		};

		if (!ReadFile(pFSFileName, fs)) {
			exit(1);
		};

		AddShader(ShaderProgram, vs.c_str(), GL_VERTEX_SHADER);
		AddShader(ShaderProgram, fs.c_str(), GL_FRAGMENT_SHADER);

		GLint Success = 0;
		GLchar ErrorLog[1024] = { 0 };

		glLinkProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_LINK_STATUS, &Success);
		if (Success == 0) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Error linking shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glValidateProgram(ShaderProgram);
		glGetProgramiv(ShaderProgram, GL_VALIDATE_STATUS, &Success);
		if (!Success) {
			glGetProgramInfoLog(ShaderProgram, sizeof(ErrorLog), NULL, ErrorLog);
			fprintf(stderr, "Invalid shader program: '%s'\n", ErrorLog);
			exit(1);
		}

		glUseProgram(ShaderProgram);

		gWorldLocation = glGetUniformLocation(ShaderProgram, "gWorld");
		assert(gWorldLocation != 0xFFFFFFFF);
	}

	int main(int argc, char** argv)
	{
		glutInit(&argc, argv);
		glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGBA);
		glutInitWindowSize(1024, 768);
		glutInitWindowPosition(100, 100);
		glutCreateWindow("Tutorial 07");

		InitializeGlutCallbacks();

		// Must be done after glut is initialized!
		GLenum res = glewInit();
		if (res != GLEW_OK) {
		  fprintf(stderr, "Error: '%s'\n", glewGetErrorString(res));
		  return 1;
		}
		
		printf("GL version: %s\n", glGetString(GL_VERSION));

		glClearColor(0.0f, 0.0f, 0.0f, 0.0f);

		CreateVertexBuffer();

		CompileShaders();

		glutMainLoop();

		return 0;
	}


## ==⚡ Tutorial 09 - Interpolation


示例代码：



## ==⚡ Tutorial 10 - Indexed draws


示例代码：



## ==⚡ Tutorial 11 - Concatenating transformation2


示例代码：



## ==⚡ Tutorial 12 - Perspective Projection


示例代码：



## ==⚡ Tutorial 13 - Camera Space


示例代码：



## ==⚡ Tutorial 14 - Camera Control - Part 1


示例代码：



## ==⚡ Tutorial 15 - Camera Control - Part 2


示例代码：



## ==⚡ Tutorial 16 - Basic Texture Mapping

示例中使用了：

	nearbyint

References

	C11 standard (ISO/IEC 9899:2011):
		7.12.9.3 The nearbyint functions (p: 251-252)
		7.25 Type-generic math <tgmath.h> (p: 373-375)
		F.10.6.3 The nearbyint functions (p: 526)
	C99 standard (ISO/IEC 9899:1999):
		7.12.9.3 The nearbyint functions (p: 232)
		7.22 Type-generic math <tgmath.h> (p: 335-337)
		F.9.6.3 The nearbyint functions (p: 463)


示例代码：



## ==⚡ Tutorial 17 - Ambient Lighting


示例代码：



## ==⚡ Tutorial 18 - Diffuse Lighting


示例代码：



## ==⚡ Tutorial 19 - Specular Lighting


示例代码：



## ==⚡ Tutorial 20 - Point Light


示例代码：



## ==⚡ Tutorial 21 - Spot Light


示例代码：



## ==⚡ Tutorial 22 - Loading models using the Open Assert Import Library


示例代码：



## ==⚡ Tutorial 23 - Shadow Mapping - Part 1


示例代码：



## ==⚡ Tutorial 24 - Shadow Mapping - Part 2


示例代码：



## ==⚡ Tutorial 25 - SkyBox


示例代码：



## ==⚡ Tutorial 26 - Bump Mapping


示例代码：



## ==⚡ Tutorial 27 - Billboarding and the geometry shader


示例代码：



## ==⚡ Tutorial 28 - Particle System Using Transform Feedback


示例代码：



## ==⚡ Tutorial 29 - 3D Picking


示例代码：



## ==⚡ Tutorial 30 - Basic Tessellation


示例代码：



## ==⚡ Tutorial 31 - PN Triangles Tessellation


示例代码：



## ==⚡ Tutorial 32 - Vertex Array Objects


示例代码：



## ==⚡ Tutorial 33 - Instanced Rendering


示例代码：



## ==⚡ Tutorial 34 - OpenGL effect library


示例代码：



## ==⚡ Tutorial 35 - Deferred Shading - Part 1


示例代码：



## ==⚡ Tutorial 36 - Deferred Shading - Part 2


示例代码：



## ==⚡ Tutorial 37 - Deferred Shading - Part 3


示例代码：



## ==⚡ Tutorial 38 - Skinning


示例代码：



## ==⚡ Tutorial 39 - Silhouette Detection


示例代码：



## ==⚡ Tutorial 40 - Stencil Shadow Volume


示例代码：



## ==⚡ Tutorial 41 - Motion Blur


示例代码：



## ==⚡ Tutorial 42 - Percentage Closer Filtering


示例代码：



## ==⚡ Tutorial 43 - Shadow mapping with point lights


示例代码：



## ==⚡ Tutorial 44 - GLFW


示例代码：



## ==⚡ Tutorial 45 - Screen Space Ambient Occlusion


示例代码：



## ==⚡ Tutorial 46 - Screen Space Ambient Occlusion With Depth Reconstruction


示例代码：



## ==⚡ Tutorial 47 - Shadow Mapping With Directional Lights


示例代码：



## ==⚡ Tutorial 48 - User Interface with Ant Tweak Bar


示例代码：



## ==⚡ Tutorial 49 - Cascaded Shadow Maps


示例代码：



## ==⚡ Tutorial 50 - Vulkan


示例代码：



## ==⚡ Tutorial 51 - Vulkan Clear Window


示例代码：



## ==⚡ Tutorial 52 - Vulkan First Triangle


示例代码：



## ==⚡ Tutorial 53 - Semaphores and other fixes


示例代码：




















