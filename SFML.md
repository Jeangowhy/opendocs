
# =🚩 SFML CMake 项目配置入门
- [SDL - Simple DirectMedia Layer](https://www.libsdl.org/)
- [Lazy Foo's SDL Tutorials](https://tjumyk.github.io/sdl-tutorial-cn/contents.html)
- [SFML - Simple and Fast Multimedia](https://github.com/SFML/sfml)
- [Tutorials for SFML 2.5](https://www.sfml-dev.org/tutorials/2.5/)
- Spine Examples https://github.com/EsotericSoftware/spine-runtimes/tree/4.0/examples
- Spine User Guide http://esotericsoftware.com/spine-user-guide
- Rhubarb Lip Sync for Spine https://github.com/DanielSWolf/rhubarb-lip-sync
- Box2D  2.4.1 A 2D physics engine for games https://box2d.org/documentation/
- NVIDIA SDK 9.52 Code Samples https://developer.download.nvidia.cn/SDK/9.5/Samples/samples.html
- NVIDIA OpenGL Driver Support https://developer.nvidia.com/opengl-driver
- Google Angle - OpenGL ES implementation https://github.com/google/angle

SDL 和 SFML 作为轻量级图形框架，常用用于 GUI 程序及游戏开发，就开发者活跃度来看，基于 C++ 的 SFML 占优势，像 Spine 动画制作软件都提供提供了运行时支持，大大方便了游戏制作流程。这些框架做了不同系统平台的图形接口的适配工作，使用者就不再需要基于操作系统底层 API 来开发图形应用程序，开发者就可以不深入 Windows 系统下的 DirectX，Linux 系统下的 X Window System，Mac OS 使用通用的 OpenGL 图形接口的细节。

Spine 运行时提供了示范 Spine-SFML 示范工程，可以克隆下载：

>git clone git@github.com:EsotericSoftware/spine-runtimes
>git clone -b 4.0 --single-branch git@github.com:EsotericSoftware/spine-runtimes

SFML 官方提供预编译文件下载，其中就包含 SFML-2.4.1\cmake\Modules\FindSFML.cmake，可以使用 CMake 脚本加载它来使用 SFML 框架。

SFML 作为跨平台的图形框架，可以在不同的平台工具中开发，根据需要下载预编译文件或源文件：

- SFML and Visual Studio
- SFML and Code::Blocks (MinGW)
- SFML and Linux
- SFML and Xcode (macOS)
- Compiling SFML with CMake

对于 Windows 平台，官方网站提供了 MSVC、GCC TDM、GCC MinGW 三套编译器的 32-bit 和 64-bit 预编译文件，根据自身使用的编译版本需要下载对应的预编译文件，下载页面也非常贴心地提供了相应 GCC TDM/MinGW 编译器的下载地址：

    Visual C++ 11 (2012) - 32-bit    Visual C++ 11 (2012) - 64-bit
    Visual C++ 12 (2013) - 32-bit    Visual C++ 12 (2013) - 64-bit
    Visual C++ 14 (2015) - 32-bit    Visual C++ 14 (2015) - 64-bit
    GCC 4.9.2 TDM (SJLJ) - 32-bit    GCC 4.9.2 TDM (SJLJ) - 64-bit
    GCC 6.1.0 MinGW (DW2) - 32-bit   GCC 6.1.0 MinGW (SEH) - 64-bit

要求编译版本 100% 一致，否则会出现找不到符号定义错误，自行编译源代码生成 SFML 库是一个方法。

而 CMake 作为一个强大的自动化工程编译脚本工具，是值得推荐使用的，有了 CMake 就可以替代各种 make 工具的脚本编写。

推荐的工具配置列表，它们可以完美配合，经量高效：

- Sublime Text 编码编写工具；
- CMake 自动化编译脚本生成工具；
- Ninja 自动化编译工具；
- Vcpkg C++ 依赖管理工具；

## ==⚡ CMakeLists.txt Demo

为依赖 SFML 的客户工程编写编译脚本 CMakeLists.txt，根据安装位置在脚本中设置 FindSFML.cmake 查找脚本的位置，因为是非标准安装路径所以使用了 SFML_ROOT 变量：

```sh
# CMakeLists.txt example:
cmake_minimum_required(VERSION 3.0.0 FATAL_ERROR)

option(UseMSVC "Using MSVC Compiler" ON)
if(UseMSVC)
    set(CMAKE_C_COMPILER cl.exe)
    set(CMAKE_CXX_COMPILER cl.exe)
    set(CMAKE_RC_COMPILER rc.exe)
    set(SFML_VER "SFML-2.4.1-vc14-64-bit")
endif()

project(SFML_Win32)

option(MINGW "Using MinGW Library file name rule" OFF)
IF(MINGW)
    SET(CMAKE_FIND_LIBRARY_PREFIXES "lib" "")
    SET(CMAKE_FIND_LIBRARY_SUFFIXES ".dll" ".dll.a" ".a" ".lib")
    add_definitions(-D_WIN32)
    set(SFML_VER "SFML-2.4.1-mingw-gcc6.1-32-bit")
ENDIF(MINGW)

find_path(SFML_FRAMEWORK "${SFML_VER}" "../../dependencies/")
if(SFML_FRAMEWORK)
    set(SFML_ROOT "${SFML_FRAMEWORK}/${SFML_VER}")
    message("SFML Framework Found: " ${SFML_ROOT})
else()
    message("SFML Framework Not found: " ${SFML_VER})    
endif()

# set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${SFML_ROOT}/cmake/Modules/")
list(APPEND CMAKE_MODULE_PATH "${SFML_ROOT}/cmake/Modules/")
list(APPEND CMAKE_PREFIX_PATH "${SFML_ROOT}/cmake/Modules/")

set(SFML_STATIC_LIBRARIES TRUE)
find_package(SFML COMPONENTS system window graphics audio network)
include_directories(${SFML_INCLUDE_DIR})

macro(add_sfml_executable NAME)
    message("NAME:" ${NAME} ${ARGN})
    add_executable(${NAME} ${ARGN})
    target_link_libraries(${NAME} ${SFML_LIBRARIES} opengl32 winmm )
    target_link_libraries(${NAME} ${SFML_DEPENDENCIES} )
endmacro()

add_sfml_executable(sfml_threads examples/threads.cpp)
add_sfml_executable(sfml_window examples/window.cpp)
add_sfml_executable(sfml_sprite examples/sprite.cpp)

foreach(item ${SFML_LIBRARIES})
    message("SFML_LIBRARIES:" ${item})
endforeach()
foreach(item ${SFML_DEPENDENCIES})
    message("SFML_DEPENDENCIES:" ${item})
endforeach()
```

编写好 CMake 脚本后，就可以测试编译脚本的生成，以及执行编译工作：

    cmake -H. -B_builds -DCMAKE_VERBOSE_MAKEFILE=ON
    cmake --build _builds

根据客户程序使用的功能，比如，SFML 提供的示例使用了 OpenGL，就需要添加 OpenGL 库文件。如果使用静态链接，比如在 Windows 则还可能会需要 DirectX SDK。如果使用了摇杆设备 API 如 joyGetDevCapsW，可以添加 winmm.lib 依赖库，否则会有 LNK2019: 无法解析的外部符号错误。

使用 Graphics 模块时，静态编译还会需要 jpeg.lib 这些 SFML 依赖库，可以将 SFML_DEPENDENCIES 中的依赖库也链接到客户程序上。

除了使用 CMake 生成工程的编译脚本，还有 Ninja 也是值得推荐使用的构建系统。它的编译效率更高，还会自动在 CMakeLists.txt 文件更新后自动重新生成编译脚本，可以用来替代其它 make 工具。它只有一个可执行文件，和 CMake 搭配使用，真正小巧可爱。

```sh
$ start https://github.com/microsoft/vcpkg/releases
$ start https://github.com/ninja-build/ninja/releases
$ git clone git://github.com/ninja-build/ninja.git && cd ninja
$ git checkout release
$ cat README.md
```

以下使用生成器为 Ninja 生成编译脚本，CMake 会为 Ninja 脚本默认设置 GCC 编译器。可以在 CMake 脚本中指定要使用的编译器，可以看到以下检测结果中显示指定了 MSVC C++ 编译器。如果测试出现的错误，需要根据信息来解决问题。如果是找不到符号或库文件，通常有可能是库文件目录配置引起。

CMake 会通过编译一段测试程序对编译器进行 ABI 信息测试，期间可能会收到以下错误信息。所谓 ABI，是指应用程序二进制接口（Application Binary Interface, ABI）。

```sh
>cmake -H. -S. -Bbuild -DCMAKE_VERBOSE_MAKEFILE=ON -G "Sublime Text 2 - Ninja"
-- The C compiler identification is GNU 10.2.0
-- The CXX compiler identification is MSVC 19.26.28806.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/mingw/bin/cc.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - failed
-- Check for working CXX compiler: C:/MSVC2019/Community/VC/Tools/MSVC/14.26.28801/bin/Hostx64/x64/cl.exe
-- Check for working CXX compiler: C:/MSVC2019/Community/VC/Tools/MSVC/14.26.28801/bin/Hostx64/x64/cl.exe - broken
CMake Error at C:/CMake/share/cmake-3.18/Modules/CMakeTestCXXCompiler.cmake:59 (message):
  The C++ compiler

    "C:/MSVC2019/Community/VC/Tools/MSVC/14.26.28801/bin/Hostx64/x64/cl.exe"

  is not able to compile a simple test program.

  It fails with the following output:
  ...
    LINK : fatal error LNK1104: 无法打开文件“kernel32.lib”
```

执行脚本前，先执行 MSVC 环境配置批处理脚本，根据需要设置平台类型，如 x86 或 x64，然后再执行 CMake -G 生成构建脚本：

```sh
> "C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat" x86
> cmake .. -G "Sublime Text 2 - Ninja"
```

虽然可以在 CMake 脚本中调用批处理文件，但是环境变量设置并不能返回供 CMake 后续使用：

    execute_process(COMMAND "vcvars64.bat" "x64")

这个问题可以在 Sublime 中解决，在执行编译工具前调用 MSVC 的环境配置脚本。

另外，Vcpkg 也是不错的一个依赖管理工具，开发 C/C++ 程序，少不了编译开源的第三方库。比如用于网络连接的高性能库 libcurl、用于压缩解压的 zlib 等等。使用这些库开发极大的方便了程序员，使得我们不必重复造轮子。由于这些开源库绝大部分都来源于 Linux 系统，其工程文件、编译系统都使用 gnu 系列工具，使得将其移植到 Windows 的 VC 开发环境下一直是难点。

还需要考虑预先编译出哪种类型的开源库程序，比如：Debug 还是 Release、动态库还是静态库、MD 还是 MT、32 位还是 64 位。光是这三种组合就有 16 种可能性。如果像 libcurl 这种还要考虑是否引用其他开源库的功能，那么编译类型的组合会更多。

VCpkg 就是解决这个问题的：

- 自动调用 git 等工具下载开源库源代码；
- 源码包的缓存管理和版本管理，可以升级版本；
- 紧密结合 CMake 轻松编译；
- 依赖关系检查，比如编译 libcurl，会自动下载 zlib、openssl 进行编译；
- 无缝集成 Visual Studio，不需要设置库文件、头文件的所在目录，自动集成。
- Visual Studio 全平台支持，支持 Debug/Release、x86/x64 编译，还支持 UWP、ARM 平台的编译。

下载 Vcpkg 源代码后，使用 PowerShell 执行 Vcpkg 工程目录下的 bootstrap-vcpkg.bat 就会对 toolsrc 目录中保存的 Vcpkg C++ 源代码和组件代码进行编译，并在同级目录下生成 vcpkg.exe 文件。

Using vcpkg with CMake：

```sh
cmake -B [build directory] -S . -DCMAKE_TOOLCHAIN_FILE=[path to vcpkg]/scripts/buildsystems/vcpkg.cmake
cmake --build [build directory]
```


## ==⚡ Sublime Project

CMake 可以和 Sublime 配合工作，执行以下命令就会为工程生成 .sublime-project 项目文件，还有搭配使用的 Ninja 编译脚本：

    cmake -H./src -B./build -G \"Sublime Text 2 - Ninja\"

实际使用时不会直接使用生成的 Sublime 项目文件，而是直接配置自己的项目文件：

为了方便执行命令，在工程配置文件中指定了命令行工作目录设置 `working_dir`，执行 CMake 生成脚本时，就会在此目录下保存。注意，如何不存在此目录，命令不会被执行，可以直接设置为工程目录 *${project_path}*。

使用 ``file_regex``获取错误输出，用 Perl 的正则表达式来捕获构建系统的错误输出，主要包括四部分内容，分别是：

- file name
- line number
- column number
- error message

Sublime Text 在匹配模式中使用分组的方式捕获信息。 file name 和 line number 域是必须的。

当错误信息被捕获时，你可以使用 F4 和 Shift+F4 在你的项目文件中跳转。被捕获的 错误信息 会显示在状态栏。

Sublime 的 Build Systems 是很强大很灵活的，将命令配置保存在 `.build-system` 文件中即可以调用，F7 或 Ctrl-B 执行上一次编译命令，或 Ctrl-Shift-B 调用。

sublime 工程文件配置参考 spine-sfml.sublime-project 如下：

```json
{
    "build_systems":
    [
        {
            "name": "🤍CMake Generate -> MinGW Makefiles",
            "working_dir": "${project_path}/build",
            "encoding": "gbk",
            "quiet": true,
            "shell_cmd": "cmake -H. -S../dependencies/SFML-2.4.1-vc14-64-bit/../../ -G \"MinGW Makefiles\"",
            "env":
            {
                "PATH": "c:/MinGW/bin/;%PATH%"
            },
            "file_regex": "^(.+)\\((\\d+)\\)(): ((?:fatal )?(?:error|warning|note) \\w+\\d\\d\\d\\d): (.*)$",
            "variants":
            [
                {
                    "shell_cmd": "make --version && g++ --version && make help",
                    "name": "Make help"
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
                    "shell_cmd": "make -j 10 all"
                },
                {
                    "name": "Make install",
                    "shell_cmd": "make install"
                },
                {
                    "name": "Make test",
                    "shell_cmd": "make -j 10 && make test"
                }
            ]
        },
        {
            "name": "❤GCC Compiler",
            "working_dir": "${project_path}/build",
            "encoding": "gbk",
            "quiet": true,
            "cmd": ["echo", "shell_cmd cause this command disabled!"],
            "shell_cmd": "where gcc && gcc --version",
            "env":
            {
                "PATH": "c:/MinGW/bin/;%PATH%",
            },
            // for GCC Compiler message process
            "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (?:error|fatal):(.*)$",
            "variants":
            [
                {
                    "name": "Memory Layout of Class (GCC)",
                    "shell_cmd": "gcc --version && gcc --std=c++11 -fdump-class-hierarchy ${file} -lstdc++ && echo Done with ${file_base_name}.class!"
                },
                {
                    "name": "Compile & Run (GCC Debug)",
                    "shell_cmd": "gcc --version && where gcc && gcc --std=c++11 ${file} -lstdc++ -Og -g -o ${file_base_name} && ${file_base_name}"
                },
                {
                    "name": "Compile & Run (GCC Release)",
                    "shell_cmd": "gcc --version && where gcc && gcc --std=c++11 ${file} -lstdc++ -Os -s -o ${file_base_name} && ${file_base_name}"
                },
            ]
        },
        {
            "name": "🌷MSVC Compiler",
            "working_dir": "${project_path}/build",
            "encoding": "gbk",
            "quiet": true,
            "cmd": ["echo", "shell_cmd cause this command disabled!"],
            "shell_cmd": "%VCVARS64% x64 && where cl.exe",
            "env":
            {
                "PATH": "%PATH%",
                "VCVARS64": "\"C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat\"",
            },
            // for MSVC Compiler message process
            "file_regex": "^(.+)\\((\\d+)\\): ((?:fatal )?(?:error|fatal) \\w+): (.*)$",
            "variants":
            [
                {
                    "name": "Memory Layout of Class (MSVC)",
                    "shell_cmd": "%VCVARS64% x64 && cl.exe ${file} /d1reportSingleClassLayout${file_base_name} && ${file_base_name}"
                },
                {
                    "name": "Compile & Run (MSVC)",
                    "shell_cmd": "%VCVARS64% x64 && cl.exe ${file} && ${file_base_name}"
                },
            ]
        },
        {
            "name": "💛CMake Generate -> Ninja (Windows)",
            "working_dir": "${project_path}/build",
            "encoding": "gbk",
            "quiet": true,
            "cmd": ["echo", "shell_cmd cause this command disabled!"],
            "shell_cmd": "%VCVARS64% x64 && cmake -H. -S../dependencies/SFML-2.4.1-vc14-64-bit/../../ -DCMAKE_VERBOSE_MAKEFILE=ON -G \"Sublime Text 2 - Ninja\"",
            "env":
            {
                "PATH": "c:/MinGW/bin/;%PATH%",
                "VCVARS64": "\"C:/Program Files (x86)/Microsoft Visual Studio/2019/Community/VC/Auxiliary/Build/vcvars64.bat\"",
            },
            // for MSVC Compiler message process
            "file_regex": "^(.+)\\((\\d+)\\): ((?:fatal )?(?:error|fatal) \\w+): (.*)$",
            // for GCC Compiler message process
            // "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
            "variants":
            [
                {
                    "name": "Ninja - all",
                    "shell_cmd": "%VCVARS64% x64 && ninja.exe -f build.ninja all && echo Done!"
                },
                {
                    "name": "CMake install",
                    "shell_cmd": "cmake --install . --prefix distributed"
                },
                {
                    "name": "Ninja - clean",
                    "shell_cmd": "ninja.exe -f build.ninja clean"
                },
                {
                    "name": "Ninja - rebuild_cache",
                    "shell_cmd": "ninja.exe -f build.ninja rebuild_cache"
                },
                {
                    "name": "Ninja - test",
                    "shell_cmd": "ninja.exe -f build.ninja test"
                },
                {
                    "name": "Ninja - edit_cache",
                    "shell_cmd": "ninja.exe -f build.ninja edit_cache"
                },
            ]
        },
    ],
    "folders":
    [
        {
            "binary_file_patterns": [ "*.nothing" ],
            "name": "☾ SFML Demo Project",
            "path": "."
        }
    ]
}
```


# =🚩 SFML Framework 入门教程

Windows 系统安装 SFML 可以直接下载预编译文件，也可以下载源代码编译生成。

Linux 系统安装 SFML 有多种方法，最好的方法是使用分发包仓库安装：

    sudo apt-get install libsfml-dev

其次是编译源代码再安装，或者下载预编译文件再手动解压拷贝到 /home/me/sfml 或 /usr/local 这些标准目录下，官方网站提供 GCC - 64-bit 预编译文件下载。

如果安装在非标准目录，可以将路径导出：

    export LD_LIBRARY_PATH=<sfml-install-path>/lib && ./sfml-app

使用命令编译、链接程序，非标准安装目录需要手动指定 SFML 安装路径：

```sh
g++ -c main.cpp
g++ main.o -o sfml-app -lsfml-graphics -lsfml-window -lsfml-system

g++ -c main.cpp -I<sfml-install-path>/include
g++ main.o -o sfml-app -L<sfml-install-path>/lib -lsfml-graphics -lsfml-window -lsfml-system
```

如果要编译源代码，SFML 已经在源代码压缩包中为 Windows & macOS 系统提供了依赖的头文件和链接库，不需要额外下载。

但在 Linux 系统上，需要为了编译 SFML 源代码安装所有依赖库：

- freetype
- x11
- xrandr
- udev
- opengl
- flac
- ogg
- vorbis
- vorbisenc
- vorbisfile
- openal
- pthread


macOS 系统下安装 SFML 系统要求：

- A 64-bit Intel Mac with Lion or later (10.7+)
- Xcode (versions 4 or above of the IDE, which is available on the App Store, are supported).
- Clang and libc++ (which are shipped by default with Xcode).

SFML 在 macOS 系统上有两种二进制格式，dylib vs framework，推荐使用后者。Dylib 就是动态链接库，和 Linux 的 .so 库文件类似。Frameworks 格式也类似 dylibs，除了可以封装外部资源。需要注意的细微区别是，如果您自己构建 SFML，那么可以在发布和调试配置中获得动态库。但是，Frameworks 仅在发行版本配置中可用。在任何一种情况下，这都不应该成为问题，因为在发布应用程序时都应该使用 SFML 的发布版本。这就是为什么官方网站下载页面上提供的 OS X 二进制文件只在发行配置中有效。

下载 SFML SDK 后，Clang - 64-bit (OS X 10.7+, compatible with C++11 and libc++) ，处理以下三部分内容：

- Header files and libraries
    - 拷贝 Frameworks 文件到 /Library/Frameworks。
    - 拷贝 lib 内的动态库到 /usr/local/lib，以及 include 内的头文件到 /usr/local/include。
- SFML 在 macOS 系统的依赖库，拷贝 extlibs 到 /Library/Frameworks。
- Xcode 工程模板，推荐安装这部分可选内容，拷贝模板中的 SFML 目录到 ~/Library/Developer/Xcode/Templates。


## ==⚡ Module Dependencies

SFML 是模块化的框架：

- System 系统底层的处理模块，如时间、线程、用户数据流，包括手柄 API 的适配，工具类的实现；
- Graphics 模块基于 OpenGL 提供图形处理能力，还有如字体图形处理使用了 freetype；
- Window 操作系统图形窗口适配，主要是用户界面的交互；
- Audio 音频流处理模块，支持多种格式的音频，录音，空间化 spatialization；
- Network 网络通信模块，如联机游戏支持，HTTP、FTP 等应用等；

SFML 本身是基于 OpenGL 接口规范构建的，但其本身只是做了与操作的适配工作，以实现框架的跨平台的适用性。OpenGL 接口规范定义的 API 在 SFML 的源代码中 \SFML\Graphics\GLLoader.hpp，这相当一个 GLUT 或者 GLFW 这样的 API 导入工具。头文件定义了 OpenGL 的常量、标准 API 和扩展 API。

SFML 完成编译后不会再使用这个头文件，所以在预计编译的下载包中并没有包含这个 OpenGL API 加载器。

各个模块在不同的系统下有不同的依赖关系。

Windows 平台下的依赖关系，文件名中的 -s 后缀表示静态链接库，-d 表示带调试符号，不带这些后缀的用于动态链接库：

- System (sfml-system-s.lib `#include <SFML/System.hpp>`)
    - winmm.lib
- Graphics (sfml-graphics-s.lib `#include <SFML/Graphics.hpp>`)
    - sfml-window-s.lib
    - sfml-system-s.lib
    - opengl32.lib
    - freetype.lib
- Window (sfml-window-s.lib `#include <SFML/Window.hpp>`)
    - sfml-system-s.lib
    - opengl32.lib
    - winmm.lib
    - gdi32.lib
- Audio (sfml-audio-s.lib `#include <SFML/Audio.hpp>`)
    - sfml-system-s.lib
    - openal32.lib
    - flac.lib
    - vorbisenc.lib
    - vorbisfile.lib
    - vorbis.lib
    - ogg.lib
- Network (sfml-network-s.lib `#include <SFML/Network.hpp>`)
    - sfml-system-s.lib
    - ws2_32.lib

官方文档提供了一个简短的例子来帮助大概了解 SFML 框架：

```cpp
#include <SFML/Audio.hpp>
#include <SFML/Graphics.hpp>

int main(){
    // Create the main window
    sf::RenderWindow window(sf::VideoMode(800, 600), "SFML window");
    
    // Load a sprite to display
    sf::Texture texture;
    if (!texture.loadFromFile("cute_image.jpg"))return EXIT_FAILURE;
    sf::Sprite sprite(texture);

    // Create a graphical text to displaysf::Font font;
    if (!font.loadFromFile("arial.ttf"))
        return EXIT_FAILURE;
    sf::Text text("Hello SFML", font, 50);

    // Load a music to playsf::Music music;
    if (!music.openFromFile("nice_music.ogg")) 
        return EXIT_FAILURE;

    // Play the music
    music.play();

    // Start the game loop
    while (window.isOpen()){
        // Process events
        sf::Event event;
        while (window.pollEvent(event)){
            // Close window: exit
            if (event.type == sf::Event::Closed) window.close();
        }
        // Clear screen
        window.clear();

        // Draw the sprite
        window.draw(sprite);

        // Draw the string
        window.draw(text);

        // Update the window
        window.display();
    }
    return EXIT_SUCCESS;
}
```

注意，在 Windows 系统创建项目时，程序的入口可能被设置为专用的 WinMain，而不是标准的 C/C++ 主函数 main，这样就不能在 Linux 或 macOS 中使用。SFML 提供了一个 main 模块来做入口适配工作，这大概是最简单的一个模块了，文档上也没过多说明。使用它，只需要引用 sfml-main-d.lib 或 sfml-main.lib，分别对应 Debug 和 Release 两种配置。

使用 Code::Blocks (MinGW) 做开发时，文档建议不要使用其内置的 SFML 工程模板，因为更新不及时，可能不兼容最新的 SFML。

因为链接方式使用了 */SUBSYSTEM:CONSOLE*，很多程序运行时会自带一个控制台，即使是有图形界面。因为 Windows 控制台程序和图形界面不冲突，可以在同一个程序同时使用。

而完全使用图形界面，隐藏控制台，即不使用控制台子系统，就意味着程序需要提供 *WinMain* 作为入口。并且失去 C/C++ 程序通过标准输入输出功能，无法使用控制台打印消息，也无法获取控制台输入。但是，程序为了保证兼容，还是会保留 *main*，并且通过 *WinMain* 来调用标准的 C/C++ 程序入口。

```cpp
int WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, INT)
{
    return main(__argc, __argv);
}
```

在 CMake 中可以通过以下方式设置链接选项来确定子系统：

```sh
set(CMAKE_EXE_LINKER_FLAGS "/subsystem:windows")
add_link_options("/subsystem:windows")
target_link_options(some_exe PUBLIC "/subsystem:windows")
```

这三种方式的差别在于：

- 通过 *set* 命令设置的链接标志可能会被其它命令设置的标记覆盖；
- 通过 *add_link_option* 命令设置的链接参数会被所有目标使用；
- 通过 *target_link_options* 设置的链接参数只对指定的目标有效。


## ==⚡ System Module

### ===🗝 Time & Clock

和大多数库使用 uint32 来表达 milliseconds 或 flaot 来表达秒时间不同，SFML 使用弹性的类作为时间单位 *sf::Time*，它代表一个时间周期，即两个事件的之间的时间间隔。

sf::Time 不是 Datetime 不用来表达 year/month/day/hour/minute/second 这样的时间戳。它只是一个表示一定时间的值，如何解释它取决于使用它的上下文。

sf::Time 和秒、毫秒、微秒可以互相转化：

```cpp
sf::Time t1 = sf::microseconds(10000);
sf::Time t2 = sf::milliseconds(10);
sf::Time t3 = sf::seconds(0.01f);

sf::Time time = ...;

sf::Int64 usec = time.asMicroseconds();
sf::Int32 msec = time.asMilliseconds();
float     sec  = time.asSeconds();
```

sf::Time 可以进行算术运算：

```cpp
sf::Time t1 = ...;
sf::Time t2 = t1 * 2;
sf::Time t3 = t1 + t2;
sf::Time t4 = -t3;

bool b1 = (t1 == t2);
bool b2 = (t3 > t4);
```

SFML 提供 *sf::Clock* 实现所有程序基本都需要的时间计量功能，它只有两个函数：

- Time *getElapsedTime()* 返回计时器启动后的时间；
- Time *restart()* 重启计时器；

请注意，restart 会返回最后经过的时间，可以用它来替代 getElapsedTime 返回的旧值以避免出现微小的间隔。

```cpp
sf::Clock clock; // starts the clock
// ...
sf::Time elapsed1 = clock.getElapsedTime();
std::cout << elapsed1.asSeconds() << std::endl;
clock.restart();
// ...
sf::Time elapsed2 = clock.getElapsedTime();
std::cout << elapsed2.asSeconds() << std::endl;
```

在游戏循环逻辑中使用时间流逝值：

```cpp
sf::Clock clock;
while (window.isOpen())
{
    sf::Time elapsed = clock.restart();
    updateGame(elapsed);
    ...
}
```

### ===🗝 Threads 线程
- classes for threading  http://en.cppreference.com/w/cpp/thread

线程就是 CPU 执行代码工作的一条流水线，通常每个程序至少有一个主线程来执行 main() 函数，主线程中可以再创建多个子线程。多线程的程序就可以同时利用 CPU 执行多个工作，可以理解为多车道的高速路，可以同时多车通过。

操作系统有线程的调度机制，会给不同的线程安排一个运行时间，所以多线程要处理同一数据时需要考虑线程同步问题，否则就不是线程安全的程序 NTS - not thread-safe。

SFML threads or std::thread?

新的 C++ 2011 规范中，引入了 std::thread 线程库，在此之前 SFML 已经实现了自己的线程库，到 SFML 2.0 发行的时候也没有多少编译器支持这个新标准。

现在新的编译器基本都支持 C++11，如果编译支持，那么就直接使用标准线程库，而不是 SFML 的私有版本。

说够了，来看看 SFML 多线程的代码示范，只创建一个额外线程：

```cpp
#include <SFML/System.hpp>
#include <iostream>

void func()
{
    // this function is started when thread.launch() is called

    for (int i = 0; i < 10; ++i)
        std::cout << "I'm thread number one" << std::endl;
}

int main()
{
    // create a thread with func() as entry point
    sf::Thread thread(&func);

    // run it
    thread.launch();

    // the main thread continues to run...

    for (int i = 0; i < 10; ++i)
        std::cout << "I'm the main thread" << std::endl;

    return 0;
}
```

主线程会因为子线程的调度延时而先执行信息打印，但那个线程先执行完 for 循环就不确定了。

如果 func 是类实例成员方法，那么线程就需要通过实例来调用：

```cpp
MyClass object;
sf::Thread thread(&MyClass::func, &object);
```

SFML 线程包装有三种方式，但是只有一种可以给待执行的函数传入一个泛型参数：

```cpp
template<typename F >  
  Thread (F function)  
  
template<typename F , typename A >  
  Thread (F function, A argument)  
  
template<typename C >  
  Thread (void(C::*function)(), C *object)  
  
  ~Thread () 

void  launch () 
void  wait () 
void  terminate ()  
```

调用 launch() 使用线程执行后，可以使用 terminate() 来强制终结。主线程调用 wait() 可以让主线程进入阻塞状态，等待子线程执行完成再返回。子线程可以使用 sf::sleep() 暂停执行，将 CPU 时间让出来。

一个容易被忽视的问题是线程实例的有效执行，以下代码中 startThread 函数退出后，局部变量 thread 保存的线程实例也被清理了，所以不会执行：

```cpp
void startThread()
{
    sf::Thread thread(&funcToRunInThread);
    thread.launch();
}

int main()
{
    startThread();
    // ...
    return 0;
}
```

### ===🗝 Threads Safe

多线程中处理共享数据总是最棘手的，进程中所有线程都共享同一个内存空间，可以相互访问大量的共享数据。not thread-safe 程序对共享数据的处理可能出现的后果是不确定的。

有几种编程工具可以帮助您保护共享数据实现线程安全，这些工具称为同步原语 synchronization primitives，常见的是：

- 互斥锁 mutexes；
- 信号量 semaphores；
- 条件变量 condition variables；
- 自旋锁 spin locks；

它们都是同一概念的变体，即本质是通过只允许某些线程访问代码并阻止其他线程来保护代码安全也执行。

SFML 提供 Mutex 和 Lock 实现线程安全。

最基本（也最常用）的原语是互斥，大多数场合下都适用。Mutex 表示 MUTual EXclusion，它确保只有一个线程能够运行它所保护的代码。


让我们看看他们如何为上述示例带来一些秩序：

```cpp
#include <SFML/System.hpp>
#include <iostream>

sf::Mutex mutex;

void func()
{
    mutex.lock();

    for (int i = 0; i < 10; ++i)
        std::cout << "I'm thread number one" << std::endl;

    mutex.unlock();
}

int main()
{
    sf::Thread thread(&func);
    thread.launch();

    mutex.lock();

    for (int i = 0; i < 10; ++i)
        std::cout << "I'm the main thread" << std::endl;

    mutex.unlock();

    return 0;
}
```

以上代码中 mutex.lock() 到 unlock() 之间的执行是连续的，因为有 Mutex 的作用不会被其它线程打断，从而保证了代码片断可以安全直读写共享的数据。这里的共享数据是指 std::cout 中用到的内存空间，如果没有线程安全，这里的内存就可以同时被不同的线程读写。

互斥体是线程安全的，但是它们在异常中不安全 not exception-safe！

如果在锁定互斥锁时引发异常，会发生什么情况？它从来没有机会被解锁，并且永远被锁定。所有试图在将来锁定它的线程都将永远阻塞，在某些情况下，整个应用程序可能会冻结，结果很糟糕。

为了确保在可以抛出异常的环境中始终解锁互斥锁，SFML 提供了一个 RAII 类来包装它们，sf::Lock 在构造函数中锁定互斥体，在析构函数中解锁互斥体，简单高效。

```cpp
sf::Mutex mutex;

void func()
{
    sf::Lock lock(mutex); // mutex.lock()

    functionThatMightThrowAnException(); // mutex.unlock() if this function throws

} // mutex.unlock()
```

RAII（Resource Acquisition Is Initialization）是由 c++ 之父 Bjarne Stroustrup 提出的，资源获取即初始化，他说：使用局部对象来管理资源的技术称为资源获取即初始化；这里的资源主要是指操作系统中有限的东西如内存、网络套接字等等，局部对象是指存储在栈的对象，它的生命周期是由操作系统来管理的，无需人工介入；


### ===🗝 User data streams

SFML 中使用的各种资源类，如 images, fonts, sounds 等，在多数程序中是使用 *loadFromFile* 这样的函数从文件读入，有些则会直接将资源打包到程序文件或一个大的资源文件内，然后使用 *loadFromMemory* 这样的函数从内存读入资源。

资源可以从文件读取，也可以能是从网络上读取，SFML 则提供了流式读取 *loadFromStream*，这个函数使用抽象接口 sf::InputStream，用户根据实际情况自由实现接口定义的 4 个主要方法。

```cpp
virtual ~InputStream() {}
virtual Int64 read(void* data, Int64 size) = 0;
virtual Int64 seek(Int64 position) = 0;
virtual Int64 tell() = 0;
virtual Int64 getSize() = 0;
```

和 C++ 标准数据流 std::istream 相比，SFML 提供了简化流接口，够用也够简单。实事上，std::istream 只是前端部分，标准库还有为自定义数据流提供抽象接口 std::streambuf。

可惜，标准流要实现非琐碎的东西会变得相当复杂，对用户不是很友好。Boost.Iostreams 库试图为标准流提供一个更简单的接口，但 Boost 是一个大块头的依赖项，SFML 不能依赖它。


从 SFML 2.3 开始，引入了两个输入流作为音频管理：

- sf::FileInputStream 提供文件数据流读取；
- sf::MemoryInputStream 提供内存数据流读取；

它们派生自 sf::InputStream 接口，因此可以用于多态。

使用输入流，可以直接传递给资源对象的 *loadFromStream* 或 *openFromStream* 方法：

```cpp
sf::FileInputStream stream;
stream.open("image.png");

sf::Texture texture;
texture.loadFromStream(stream);
```

有些资源类并不是一执行 loadFromStream 就会装入所有数据，而是根据数据用量来加载。最明显的例子就是 sf::Music 音频数据流，它会在播放声音时连续地提供声音采样数据。还有 sf::Font 字体数据流，它提供的字符数据会在文本显示时加载。

所以，要保证数据流实例与数据源同时有效，如果数据源被提前释放，数据流操作就会出错，结果不确定，可能是程序卡死或数据出错。

另一个容易出错的问题是直接返回内部函数的返回值，但有时它与SFML所期望的内容不匹配。例如，在 sf::FileInputStream 可能会尝试按如下方式编写 seek 函数：

```cpp
sf::Int64 FileInputStream::seek(sf::Int64 position)
{
    return std::fseek(m_file, position, SEEK_SET);
}
```

代码片断是错误示范，因为 std::fseek 返回 zero 表示成功，而 SFML 期待返回一个位置。


## ==⚡ Window Module

以下什么也不做，但又有点东西的 SFML 窗口程序：

```cpp
#include <SFML/Window.hpp>

int main()
{
    sf::Window window(sf::VideoMode(800, 600), "My window");

    // run the program as long as the window is open
    while (window.isOpen())
    {
        // check all the window's events that were triggered since the last iteration of the loop
        sf::Event event;
        while (window.pollEvent(event))
        {
            // "close requested" event: we close the window
            if (event.type == sf::Event::Closed)
                window.close();
        }
    }

    return 0;
}
```

主要是窗口与用户的交互机制，在 while 循环中，只要用户没有关闭窗口，就需要处理窗口的消息，以响应各种窗口事件。

Graphics 模块提供了一个 RenderWindow 窗口类，主要功能是用于图形的绘制。

窗口创建后，可以通过 API 设置参数，或者使用 create 方法重新创建：

```cpp
void create(VideoMode mode, const String& title, Uint32 style = Style::Default, const ContextSettings& settings = ContextSettings());
void create(WindowHandle handle, const ContextSettings& settings = ContextSettings());

// change the position of the window (relatively to the desktop)
window.setPosition(sf::Vector2i(10, 50));

// change the size of the window
window.setSize(sf::Vector2u(640, 480));

// change the title of the window
window.setTitle("SFML window");

// get the size of the window
sf::Vector2u size = window.getSize();
unsigned int width = size.x;
unsigned int height = size.y;

// check whether the window has the focus
bool focus = window.hasFocus();
```

窗口句柄 sf::WindowHandle 是操作系统用来标识窗口的资源，在不同的平台下类型不一样，使用 getSystemHandle () 方法获取当前窗口句柄，它可以用来调用系统相关的功能：

    |    Platform    |                       Type                      |
    |----------------|-------------------------------------------------|
    | Windows        | HWND                                            |
    | Linux /FreeBSD | Window                                          |
    | Mac OS X       | either NSWindow* or NSView*, disguised as void* |
    | iOS            | UIWindow*                                       |
    | Android        | ANativeWindow*                                  |


VideoMode 类提供窗口的尺寸和像素色彩深度等基本属性，第三个参数指定色彩深度，默认为 modeBitsPerPixel=32。

```cpp
sf::Window window;
// window.create(sf::VideoMode(800, 600), "My window");

// Display the list of all the video modes available for fullscreen
std::vector<sf::VideoMode> modes = sf::VideoMode::getFullscreenModes();
for (std::size_t i = 0; i < modes.size(); ++i){
    sf::VideoMode mode = modes[i];
    std::cout << "Mode #" << i << ": "<< mode.width << "x" << mode.height << " - "<< mode.bitsPerPixel << " bpp" << std::endl;
}
// Create a window with the same pixel depth as the desktop
sf::VideoMode desktop = sf::VideoMode::getDesktopMode();
window.create(sf::VideoMode(desktop.width, desktop.height, desktop.bitsPerPixel),
    "SFML Fullscreen", sf::Style::Fullscreen);
```

Window 构造函数的第二个参数设置标题。

第三个参数设置窗口的风格：

- *sf::Style::None* 无装饰的窗口，常用于 splash screens，不能与其它风格组合；
- *sf::Style::Titlebar* The window has a titlebar
- *sf::Style::Resize*   The window can be resized and has a maximize button
- *sf::Style::Close*    The window has a close button
- *sf::Style::Fullscreen*   全屏模式，需要有效的 VideoMode，不能与其它风格组合；
- *sf::Style::Default*  默认风格，即 Titlebar | Resize | Close

第四个参考是 OpenGL 相关选项。


有时，当应用程序运行得很快时，您可能会注意到诸如撕裂之类的视觉瑕疵。原因是应用程序的刷新率与监视器的垂直频率不同步，因此，上一帧的底部与下一帧的顶部混合。

此问题的解决方案是激活垂直同步，它由图形卡自动处理，并可通过 setVerticalSyncEnabled 函数轻松打开和关闭，请确保显卡驱动没有关闭 vertical synchronization：

```cpp
window.setVerticalSyncEnabled(true); // call it once, after creating the window
window.setFramerateLimit(60); // call it once, after creating the window
```

另外，SFML 本身提供了帧率调整函数 setFramerateLimit，和 setVerticalSyncEnabled 不同，帧率调整是基于 sf::Clock 和 sf::sleep 实现的。分辨率取决于底层操作系统和硬件，可能高达 10 或 15 毫秒，但不要依赖此功能来实现精确计时。

窗口相关的信息：

- SFML 可以创建多窗口，但是对于多显示器还不支持。
- Events 必需在窗口线程中轮询处理事件，pollEvent or waitEvent 需要在创建窗口的线程中调用，这点很重要！
- macOS 系统中，窗口事件必需在主线程中处理，也不允许在主线程外创建窗口。
- Windows 系统中窗口尺寸大过桌面尺寸不能正确响应，这包括使用 VideoMode::getDesktopMode() 创建的窗口：添加窗口装饰（边框和标题栏）后，最终会得到一个略大于桌面的窗口。


### ===🗝 Events & Windows

在学习 Events 对象之前，我尝试了以下这样一段代码，注意键盘事件的处理：

```cpp
while (window.isOpen())
{
    sf::Event event;
    while (window.pollEvent(event))
    {
        // "close requested" event: we close the window
        if (event.type == sf::Event::Closed)
            window.close();
        if (event.type == sf::Event::KeyPressed)
        {
            KeyEvent ke = (KeyEvent) event;
            if (ke.code == sf::Keyboard::Escape || ke.code == sf::Keyboard::X)
                window.create(sf::VideoMode(1024, 640, desktop.bitsPerPixel), "SFML Window");
        }
    }
}
```

我设想，Event 类对象不仅提供了事件类型，并且键盘事件也是事件类的子类，所以在后面使用 KeyEvent 将其转型。

事实上，这个逻辑猜想是错的，SFML 的事件类层次设计并不是我想的那样，通过查看 Event 类的代码设计就清楚。

SFML 事件的设计逻辑是通过 union 数据结构集中保存所有事件产生的数据，并通过其 EventType 枚举成员指示当前是使用事件类型。

而我猜想的逻辑是，Event 是事件层次的顶级类，不同事件需要扩展这个基类。这种设计的好处就是，结构扩展灵活。

在 UnrealEngine 中，事件模型的设计是高度抽象化的并且灵活的，通过游戏控制器对象来接管一切的事件输入，并通过映射的方式去触发一个抽象事件。

列如，为角色设计一个 Attack 事件，只需要给事件设计好事件的功能逻辑，比如攻击敌人产生伤害，不需要确定它由什么触发，可以是键盘、鼠标、甚至是按某种逻辑触发。而具体要怎么处理，完全取决于开发者。


事件有很多不同的类型，但可以根据来源将它们分为两种：

- 抽象的虚拟事件：在计算软件内部产生的事件，如点击窗口关闭按钮；
- 真实的物理事件：通过硬件直接产生的事件，如按键盘、点击鼠标，甚至是 CPU 底层产生的中断事件。

这些事件通常不是独立存在，而联系紧密难以区分。比如，通过鼠标点击一个按钮，这是一个物理事件。但这个按钮是关闭窗口的按钮，所以在程序中就收到了 Event::Closed 这种事件。

而不同的事件可能携带了不同的数据，而且很多情况下，事件的数据是必要的。如鼠标移动事件必然要提供坐标或移动偏移值，键盘事件必需提供按键和组合键状态信息。而游戏手柄也类似，在标准的 XBox 360 兼容手柄上，有左右两个十字轴，分别提供了 8 个按键，另外它还有连续的模拟量输出的摇杆，包括左、右耳朵，根据按压力的大小产生的模拟量的值就有不同大小。


很多事件都是成对出现的，比如：

- 按钮事件都有 Pressed、Released 两种；
- 手柄的联接事件有 Connected、Disconnected 两种；
- 触摸事件有三种 TouchBegan, TouchMoved, TouchEnded。

在处理事件时，有必要了解所有可能的事件，以及需要处理的事件。

首先，响应窗口状态事件是必需的，特别是 Closed 事件，如果没有响应关闭事件，那么程序就会在失去 GUI 时还在运行，但又接收不到用户的输入。

窗口大小调整 Resized 事件，和窗口当前是否是激活状态，即焦点事件 LostFocus、GainedFocus，这事件需要根据程序需要来进行响应。比如，想要保持窗口的内容布局不变，就需要响应 Resiszed 事件。否则，窗口大小改变，窗口内容不变就适应不了新的窗口尺寸。游戏一般会在全屏下运行，不需要响应这个事件，除非提供了窗口运行模式。

```cpp
// "close requested" event: we close the window
if (event.type == sf::Event::Closed)
    window.close();

if (event.type == sf::Event::Resized)
{
    std::cout << "new width: " << event.size.width << std::endl;
    std::cout << "new height: " << event.size.height << std::endl;
}

if (event.type == sf::Event::LostFocus)
    myGame.pause();

if (event.type == sf::Event::GainedFocus)
    myGame.resume();
```

SFML 内部使用了 sf::priv 命名空间，在它内部实现各种操作系统适配，需要使用不同的系统 API 来实现硬件状态的轮询。

在 Windows 系统下，会直接调用 GetAsyncKeyState(vkey) 查询按键状态。

在 Unix 类系统中麻烦点，使用 xlib 图形库，需要先通过 OpenDisplay() 连接 X server，再进行一列后继的操作，如 XKeysymToKeycode(display, keysym) 完成 KeyCode 到 keySyms 符号转换操作。

在 iOS 系统上，InputImpl::isKeyPressed 直接返回 false，而且注明 Not applicable。倒是 Mac OS X 系统上的支持实现 HIDInputManager。

在苹果的操作系统中，标准的开发语言是 Objective-C，一般使用 .m 或 .mm 代码文件。前者包含 Objective-C 和 C 代码。后者还可以包含 C++ 代码，在 Objective-C 代码需要使用 C++ 类或者其它特性的时候使用。

现代的 C++ 程序中，还不再像以往那样坚持 .h 只放声明，.cpp 只放实现代码的约定。新的风格是 .hpp 即将 .cpp 的实现代码与 .h 头文件内容混合保存的方式，很多开源库都以这种方式提供。使用者只需要引入 .hpp 文件即可，无需再引入 .cpp 到工程中进行编译。而实现代码将直接编译到调用者的 obj 文件中，不再生成单独的 obj。将大幅度减少 .cpp 文件数与编译次数，也不用再发布烦人的 lib 与 DLL，因此非常适合用来编写公用的开源库。

在内联函数较多的情况下，为了避免头文件过长、版面混乱，可以将所有的内联函数定义移到一个单独的文件中统一管理，这样的文件称为一个内联函数定义文件 .inl。在 Google C++ Style Guide 编程规范中说到了 inl 文件。

在 SFML/Windows/InputImpl.hpp 头文件中处理了多平台的代码导入：

```cpp
#include <SFML/Config.hpp>

#if defined(SFML_SYSTEM_WINDOWS)
    #include <SFML/Window/Win32/InputImpl.hpp>
#elif defined(SFML_SYSTEM_LINUX) || defined(SFML_SYSTEM_FREEBSD)
    #include <SFML/Window/Unix/InputImpl.hpp>
#elif defined(SFML_SYSTEM_MACOS)
    #include <SFML/Window/OSX/InputImpl.hpp>
#elif defined(SFML_SYSTEM_IOS)
    #include <SFML/Window/iOS/InputImpl.hpp>
#elif defined(SFML_SYSTEM_ANDROID)
    #include <SFML/Window/Android/InputImpl.hpp>
#endif
```

在 CMake 编译脚本中 SFML\Window\CMakeLists.txt 会根据当前编译系统平台来引入相关实现代码。


Event 事件类中联合体使用的事件对象，以及 EventType 枚举定义的事件类型关系如下表所示，其中 MouseWheelMoved 已经标记为弃用状态，SFML 2.3 开始改用后缀 Scrolled 更清晰：

    | Event Source |       Event Type       |                  Event Union                  |
    |--------------|------------------------|-----------------------------------------------|
    | Window       | Resized                | SizeEvent             size;                   |
    |              |------------------------|-----------------------------------------------|
    |              | Closed                 |                                               |
    |              | LostFocus              |                                               |
    |              | GainedFocus            |                                               |
    |--------------|------------------------|-----------------------------------------------|
    |              | KeyPressed             | KeyEvent              key;                    |
    | Keyboard     | KeyReleased            |                                               |
    |              |------------------------|-----------------------------------------------|
    |              | TextEntered            | TextEvent             text;                   |
    |--------------|------------------------|-----------------------------------------------|
    |              | MouseMoved             | MouseMoveEvent        mouseMove;              |
    |              |------------------------|-----------------------------------------------|
    |              | MouseButtonPressed     | MouseButtonEvent      mouseButton;            |
    | Mouse        | MouseButtonReleased    |                                               |
    |              |------------------------|-----------------------------------------------|
    |              | MouseWheelMoved        | MouseWheelEvent       mouseWheel;             |
    |              |------------------------|-----------------------------------------------|
    |              | MouseWheelScrolled     | MouseWheelScrollEvent mouseWheelScroll;       |
    |              |------------------------|-----------------------------------------------|
    |              | MouseEntered           |                                               |
    |              | MouseLeft              |                                               |
    |--------------|------------------------|-----------------------------------------------|
    |              | JoystickMoved          | JoystickMoveEvent     joystickMove;           |
    |              |------------------------|-----------------------------------------------|
    |              | JoystickButtonPressed  | JoystickButtonEvent   joystickButton;         |
    | Joystick     | JoystickButtonReleased |                                               |
    |              |------------------------|-----------------------------------------------|
    |              | JoystickConnected      | JoystickConnectEvent  joystickConnect;        |
    |              | JoystickDisconnected   |                                               |
    |--------------|------------------------|-----------------------------------------------|
    |              | TouchBegan             | TouchEvent            touch;                  |
    | Touch        | TouchMoved             |                                               |
    |              | TouchEnded             |                                               |
    |--------------|------------------------|-----------------------------------------------|
    | Sensor       | SensorChanged          | SensorEvent           sensor;                 |

此外，以下 5 种事件没有携带数据：

- *Closed* 关闭窗口；
- *LostFocus* 获得窗口焦点；
- *GainedFocus* 失去窗口焦点；
- *MouseEntered* 鼠标进入窗口区域；
- *MouseLeft* 鼠标离开窗口区域；

另外 SFML 提供 SensorChanged 事件，事件用的是什么传感器通过 Sensor::Type 枚举类型指定，在 SensorEvent 中提供了类型和一个三维坐标 (x, y, z)。

```cpp
class SFML_WINDOW_API Sensor
{
    ...
    enum Type
    {
        Accelerometer,    ///< Measures the raw acceleration (m/s^2)
        Gyroscope,        ///< Measures the raw rotation rates (degrees/s)
        Magnetometer,     ///< Measures the ambient magnetic field (micro-teslas)
        Gravity,          ///< Measures the direction and intensity of gravity, independent of device acceleration (m/s^2)
        UserAcceleration, ///< Measures the direction and intensity of device acceleration, independent of the gravity (m/s^2)
        Orientation,      ///< Measures the absolute 3D orientation (degrees)
        ...
    };
}

class Event
{
public:

    struct SizeEvent
    {
        unsigned int width;  ///< New width, in pixels
        unsigned int height; ///< New height, in pixels
    };

    struct KeyEvent
    {
        Keyboard::Key code;    ///< Code of the key that has been pressed
        bool          alt;     ///< Is the Alt key pressed?
        bool          control; ///< Is the Control key pressed?
        bool          shift;   ///< Is the Shift key pressed?
        bool          system;  ///< Is the System key pressed?
    };

    struct TextEvent
    {
        Uint32 unicode; ///< UTF-32 Unicode value of the character
    };

    struct MouseMoveEvent
    {
        int x; ///< X position relative to the left of the owner window
        int y; ///< Y position relative to the top of the owner window
    };

    struct MouseButtonEvent
    {
        Mouse::Button button; ///< Code of the button that has been pressed
        int           x;      ///< X position relative to the left of the owner window
        int           y;      ///< Y position relative to the top of the owner window
    };

    // struct MouseWheelEvent is deprecated
    struct MouseWheelScrollEvent
    {
        Mouse::Wheel wheel; ///< Which wheel (for mice with multiple ones)
        float        delta; ///< Wheel offset (positive is up/left, negative is down/right)
        int          x;     ///< X position relative to the left of the owner window
        int          y;     ///< Y position relative to the top of the owner window
    };

    struct JoystickConnectEvent
    {
        unsigned int joystickId; ///< Index of the joystick (in range [0 .. Joystick::Count - 1])
    };

    struct JoystickMoveEvent
    {
        unsigned int   joystickId; ///< Index of the joystick (in range [0 .. Joystick::Count - 1])
        Joystick::Axis axis;       ///< Axis on which the joystick moved
        float          position;   ///< New position on the axis (in range [-100 .. 100])
    };

    struct JoystickButtonEvent
    {
        unsigned int joystickId; ///< Index of the joystick (in range [0 .. Joystick::Count - 1])
        unsigned int button;     ///< Index of the button that has been pressed (in range [0 .. Joystick::ButtonCount - 1])
    };

    struct TouchEvent
    {
        unsigned int finger; ///< Index of the finger in case of multi-touch events
        int x;               ///< X position of the touch, relative to the left of the owner window
        int y;               ///< Y position of the touch, relative to the top of the owner window
    };

    struct SensorEvent
    {
        Sensor::Type type; ///< Type of the sensor
        float x;           ///< Current value of the sensor on X axis
        float y;           ///< Current value of the sensor on Y axis
        float z;           ///< Current value of the sensor on Z axis
    };

    enum EventType { /*...*/ }

    EventType type; ///< Type of the event

    union
    {
        SizeEvent             size;
        KeyEvent              key;
        TextEvent             text;
        MouseMoveEvent        mouseMove;
        MouseButtonEvent      mouseButton;
        MouseWheelEvent       mouseWheel;
        MouseWheelScrollEvent mouseWheelScroll;
        JoystickMoveEvent     joystickMove;
        JoystickButtonEvent   joystickButton;
        JoystickConnectEvent  joystickConnect;
        TouchEvent            touch;
        SensorEvent           sensor;
    };
};
```

### ===🗝 Events: Joysticks Mouse Keyboard


键盘事件，按下、松开两种，和字符输入事件是两个密切联系的事件，不要尝试通过键盘事件来处理文字的输入，而应该将文字输入交给操作系统处理，因为程序不能确定是什么地区的用户在输入什么样的文字。比如，按下键盘的 e，一个物理事件产生，操作系统还会接着根据用户区域设置和使用的文字编码方案来生成相应的字符，是两个联系在一起的事件。在标准的英语地区，相应的字符就是 e，而如果是法语地区，按下 '^' 再按 'e'，在法语键盘设置下就会产生一个 'ê' 字符。

```cpp
if (event.type == sf::Event::TextEntered)
{
    if (event.text.unicode < 128)
        std::cout << "ASCII character typed: " << static_cast<char>(event.text.unicode) << std::endl;
}

if (event.type == sf::Event::KeyPressed)
{
    if (event.key.code == sf::Keyboard::Escape)
    {
        std::cout << "the escape key was pressed" << std::endl;
        std::cout << "control:" << event.key.control << std::endl;
        std::cout << "alt:" << event.key.alt << std::endl;
        std::cout << "shift:" << event.key.shift << std::endl;
        std::cout << "system:" << event.key.system << std::endl;
    }
}
```

默认键盘会按时间间隔产生不断重复的输入，可以禁用重复功能：

```cpp
window.setKeyRepeatEnabled(false)
```

另外，键盘事件还有不同的用法，在 UnrealEngine 中，有 Action Event 和 Axis Event，它们分别对应单次动作事件，和连续动作事件。按一按键就产生一个事件，这种就是 Action Event。

在游戏控制中，通常希望通过键盘来持续控制玩家角色，比如 WASD 等按键用来控制角色的移动，如果是 Action Event 那么就需要不停地按键盘，并且动作还断断续续。

为了实现 Axis 输入流畅的控制，简单的方法是在 Pressed 事件中设置一个布尔值标记，直到 Released 事件触发才清除这个标记值，用来模拟连续触发效果。

另一个方法是使用轮询 Polling 来查询硬件状态，实现键盘、鼠标等连续输入，例如：

```cpp
if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left))
{
    // left key is pressed: move our character
    character.move(1.f, 0.f);
}

if (sf::Mouse::isButtonPressed(sf::Mouse::Left))
{
    // left mouse button is pressed: shoot
    gun.fire();
}
```

SFML 支持 5 键鼠标，定义在 Mouse::Button 枚举类型中，并像手柄按键一样提供 ButtonCount 作为按键数量：

```cpp
if (event.type == sf::Event::MouseButtonPressed)
{
    if (event.mouseButton.button == sf::Mouse::Right)
    {
        std::cout << "the right button was pressed" << std::endl;
        std::cout << "mouse x: " << event.mouseButton.x << std::endl;
        std::cout << "mouse y: " << event.mouseButton.y << std::endl;
    }
}

class SFML_WINDOW_API Mouse
{
    ...
    enum Button
    {
        Left,       ///< The left mouse button
        Right,      ///< The right mouse button
        Middle,     ///< The middle (wheel) mouse button
        XButton1,   ///< The first extra mouse button
        XButton2,   ///< The second extra mouse button
    };
}
```

MouseMoved 事件在鼠标移动触发，只要是在窗口除标题外的区域，不管窗口是否处于焦点状态：

```cpp
if (event.type == sf::Event::MouseMoved)
{
    std::cout << "new mouse x: " << event.mouseMove.x << std::endl;
    std::cout << "new mouse y: " << event.mouseMove.y << std::endl;
}
```

MouseEntered 和 MouseLeft 两种事件在鼠标进入、离开窗口区域时触发，除了标题栏外，也没有数据携带：

```cpp
if (event.type == sf::Event::MouseEntered)
    std::cout << "the mouse cursor has entered the window" << std::endl;

if (event.type == sf::Event::MouseLeft)
    std::cout << "the mouse cursor has left the window" << std::endl;
```

SFML 2.3 开始，MouseWheelMoved 已经标记为弃用状态，改用后缀 Scrolled 更清晰，支持水平、竖起滚动：

```cpp
if (event.type == sf::Event::MouseWheelScrolled)
{
    if (event.mouseWheelScroll.wheel == sf::Mouse::VerticalWheel)
        std::cout << "wheel type: vertical" << std::endl;
    else if (event.mouseWheelScroll.wheel == sf::Mouse::HorizontalWheel)
        std::cout << "wheel type: horizontal" << std::endl;
    else
        std::cout << "wheel type: unknown" << std::endl;
    std::cout << "wheel movement: " << event.mouseWheelScroll.delta << std::endl;
    std::cout << "mouse x: " << event.mouseWheelScroll.x << std::endl;
    std::cout << "mouse y: " << event.mouseWheelScroll.y << std::endl;
}
```


获取鼠标当前的坐标点位置：

```cpp
// get the global mouse position (relative to the desktop)
sf::Vector2i globalPosition = sf::Mouse::getPosition();
// get the local mouse position (relative to a window)
sf::Vector2i localPosition = sf::Mouse::getPosition(window); // window is a sf::Window

// set the mouse position globally (relative to the desktop)
sf::Mouse::setPosition(sf::Vector2i(10, 50));
// set the mouse position locally (relative to a window)
sf::Mouse::setPosition(sf::Vector2i(10, 50), window); // window is a sf::Window
```

SFML 对手柄的支持：

- 8 最大手柄连接数 (sf::Joystick::Count)
- 32 按钮/手柄 (sf::Joystick::ButtonCount)
- 8 轴/手柄 (sf::Joystick::AxisCount)

SFML 最多支持 8 个游戏手柄连接，sf::Joystick 中的函数第一个参数就是手柄的序号 ID，需要通过来确定是不处于连接状态：

```cpp
if (event.type == sf::Event::JoystickConnected)
    std::cout << "joystick connected: " << event.joystickConnect.joystickId << std::endl;

if (event.type == sf::Event::JoystickDisconnected)
    std::cout << "joystick disconnected: " << event.joystickConnect.joystickId << std::endl;

if (sf::Joystick::isConnected(0))
{
    // joystick number 0 is connected
}

// is button 1 of joystick number 0 pressed?
if (sf::Joystick::isButtonPressed(0, 1))
{
    // yes: shoot!
    gun.fire();
}

// check how many buttons joystick number 0 has
unsigned int buttonCount = sf::Joystick::getButtonCount(0);
// check if joystick number 0 has a Z axis
bool hasZ = sf::Joystick::hasAxis(0, sf::Joystick::Z);

// what's the current position of the X and Y axes of joystick number 0?
float x = sf::Joystick::getAxisPosition(0, sf::Joystick::X);
float y = sf::Joystick::getAxisPosition(0, sf::Joystick::Y);
character.move(x, y);
```

在检查事件或查询手柄状态时，如检查哪个手柄在连接中，手柄的状态会自动在内部通过 *sf::Joystick::update()* 方法更新。

如果程序没有窗口，或者窗口不可见，那么就需要手动调用来更新手柄状态。

例如，在使用 USB 无线接收器的手柄关电后，就可能不会收到断开连接的消息，除非是拨掉接收器，这就需要进行连接状态检查。在 Windows 测试中，还发现在插拔接收器时程序崩溃的现象，未细究原因。


和键盘事件一样，手柄的按钮也有 Pressed 和 Released 两种，但需要对 joystickId 进行判断，不同的手柄输入不能搞混：

```cpp

if (event.type == sf::Event::JoystickButtonPressed)
{
    std::cout << "joystick button pressed!" << std::endl;
    std::cout << "joystick id: " << event.joystickButton.joystickId << std::endl;
    std::cout << "button: " << event.joystickButton.button << std::endl;
}
```

手柄最多有 8 轴输入，在 XBox 兼容手柄上，左侧十字轴提供 XY 轴输入，右侧十字轴提供 RU 轴输入，还有一个小十字键提供 PovX 和 PovY 两个轴输入控制视图。另外，左、右耳朵对应 Z 轴的正负值控制，也是模拟量输入，范围在 [-100, 100] 之间。

```cpp
enum Axis
{
    X,    ///< The X axis
    Y,    ///< The Y axis
    Z,    ///< The Z axis
    R,    ///< The R axis
    U,    ///< The U axis
    V,    ///< The V axis
    PovX, ///< The X axis of the point-of-view hat
    PovY  ///< The Y axis of the point-of-view hat
};
```

而游戏手柄也类似，在标准的 XBox 360 兼容手柄上，有左右两个十字轴，右侧还分别提供了 A、B、X、Y 按键。各个轴使用的是连续模拟量输出的摇杆，包括左、右耳朵，根据按压力的大小产生的模拟量的值就有不同大小。

         LB (Z-Axis+)                          RB (Z-Axis-)
         LT (Button 4)                         RT (Button 5)
                         (Button 6) (Button 7)
            Up (X-Axis+)                        Y (Button 3)
    
      Left   8   Right (Y-Axis+)            X   9   B (Button 1)
    
           Down (X-Axis-)                       A (Button 0)

手柄上的 D-Pad 十字按键，上、右、下、左对应 Button 11 到 14，在 SFML 中映射到 PovX、PovY 的正负 100 输入量。Z 轴因为由两个键控制，可以同时输入正、负两个值。

按键有各种名称，如 A、B、X、Y 又对应交叉、圆圈、方块、三角按键。D-Pad 即 Directional Pad 用于模拟数字定向控制器，又叫 Hat buttons。

SFML 没有给手柄按键定义相应的符号，只是给各个轴设定了 Axis 枚举类型，可以参考 GLFW 中的按键符号定义：

```cpp
#define     GLFW_GAMEPAD_BUTTON_A   0
#define     GLFW_GAMEPAD_BUTTON_B   1
#define     GLFW_GAMEPAD_BUTTON_X   2
#define     GLFW_GAMEPAD_BUTTON_Y   3
#define     GLFW_GAMEPAD_BUTTON_LEFT_BUMPER   4
#define     GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER   5
#define     GLFW_GAMEPAD_BUTTON_BACK   6
#define     GLFW_GAMEPAD_BUTTON_START   7
#define     GLFW_GAMEPAD_BUTTON_GUIDE   8
#define     GLFW_GAMEPAD_BUTTON_LEFT_THUMB   9
#define     GLFW_GAMEPAD_BUTTON_RIGHT_THUMB   10
#define     GLFW_GAMEPAD_BUTTON_DPAD_UP   11
#define     GLFW_GAMEPAD_BUTTON_DPAD_RIGHT   12
#define     GLFW_GAMEPAD_BUTTON_DPAD_DOWN   13
#define     GLFW_GAMEPAD_BUTTON_DPAD_LEFT   14
#define     GLFW_GAMEPAD_BUTTON_LAST   GLFW_GAMEPAD_BUTTON_DPAD_LEFT
#define     GLFW_GAMEPAD_BUTTON_CROSS   GLFW_GAMEPAD_BUTTON_A
#define     GLFW_GAMEPAD_BUTTON_CIRCLE   GLFW_GAMEPAD_BUTTON_B
#define     GLFW_GAMEPAD_BUTTON_SQUARE   GLFW_GAMEPAD_BUTTON_X
#define     GLFW_GAMEPAD_BUTTON_TRIANGLE   GLFW_GAMEPAD_BUTTON_Y
```

JoystickMoved 事件处理轴输入，使用 event.joystickMove 获取输入的模拟量，注意拼写，JoystickMoved 事件和 joystickMove 数据类型只有一个字母之差。

因为轴输入的数据非常敏感，SFML 为了避免处理大量的数据，当然这里的大量只是对于人机 I/O 来说，使用阈值来控制数据量。

在内部会通过 WindowImpl::processJoystickEvents() 方法进行数据流量调整，原理是通过移动偏移量来控制，这个阈值就是距离偏差。根据硬件精密度不同，表现也会不同。

一般设置在 [0, 10] 之间，负值会导致数据无限的轮询之中。数值在 5 时就明显有间隔感，也就上 100ms 的间隔水平了；数值在 2 时间隔大概为 10ms 水平。太靠近 0 值也不好，在低精度硬件上可能会有不良表现，根据需要进行调整：

```cpp
// Window::setJoystickThreshold(float threshold);
if (event.type == sf::Event::JoystickMoved)
{
    if (event.joystickMove.axis == sf::Joystick::X)
    {
        std::cout << "X axis moved!" << std::endl;
        std::cout << "joystick id: " << event.joystickMove.joystickId << std::endl;
        std::cout << "new position: " << event.joystickMove.position << std::endl;
    }
}
```


### ===🗝 Using OpenGL in a SFML window
- Computer Graphics: Principles and Practice 3rd Edition 2014
- Fundamentals of Computer Graphics 4/5th Edition
- OpenGL SuperBible: comprehensive tutorial and reference OpenGL 4.3 6th Edition
- OpenGL SuperBible: comprehensive tutorial and reference OpenGL 4.5 7th Edition
- OpenGL Programming Guide: The Official Guide to Learning OpenGL 4.3 8th Edition
- OpenGL Programming Guide: The Official Guide to Learning OpenGL 4.5 with SPIR-V 9th Edition
- https://www.sfml-dev.org/tutorials/2.5/window-opengl.php

这部分不讲 OpenGL，而是讲怎么在 SFML 这个环境下使用 OpenGL。

注意，SFML 对最新的 OpenGL Core Profile 支持不完善。

OpenGL 是重要的一个特点就是可移植性，所有平台都有 OpenGL，但仅仅使用 OpenGL 就很难开发好程序，需要搭配窗口图形界面、渲染上下文、用户输入等等。

如果完全自己开发所有的子模块，本身就是一件重复造轮子的事。就像学会了 C 语言，并且要用它去开发那些已经在 C++ 上实现好的功能或模块一样。如果能自信地站在前人的肩膀上，未偿不是一件好事，当然前提是你有足够的能力去把控这件事。

所以，SFML 中只提供了一个 OpenGL 头文件，帮助在不同平台引入 OpenGL 的函数头文件，但不会提供函数库文件。需要根据所使用系统，去引入库文件，Windows 系统中引入 opengl32，Linux 系统引用 GL，Mac OS X 系统引用 AGL 等等。

创建窗口时，可以传入一个 *sf::ContextSettings* 结构体对 OpenGL 上下文进行配置：

- *depthBits* 深度缓冲的像素 bits 位数，0 表示禁用。
- *stencilBits* 镂空缓冲的像素 bits 位数，0 表示禁用。
- *antialiasingLevel* 抗锯齿级别，也就是 multisampling level。
- *majorVersion* and *minorVersion* 指定 OpenGL 版本。

在某些配置不可用的情况下，SFML 会尝试使用最匹配的配置，比如 4x Anti-aliasing 配置太高，就可能降级为 2x 甚至是不使用抗锯齿效果，可以通过 Window 实例获取并查看当前使用的配置。

SFML 支持 OpenGL 3.0+，只要显卡驱动支持。SFML 2.3 添加了 OpenGL 3.2+ 上下文工作模式配置的选择，以及上下文调试标志的支持，但是不支持 Forward compatibility 模式。

SFML 默认会使用 Compatibility Profile 创建 OpenGL 3.2+ 上下文，这样可以使用所有旧式功能，这也表示无法使用最新的 Core Profile 工作模式。SFML 只在 OS X 系统上支持 OpenGL 3.2 Core Profile，并且要使用传统上下文模式，只能使用 OpenGL 2.1 版本。

```C++
sf::ContextSettings settings;
settings.depthBits = 24;
settings.stencilBits = 8;
settings.antialiasingLevel = 4;
settings.majorVersion = 3;
settings.minorVersion = 0;

sf::Window window(sf::VideoMode(800, 600), "OpenGL", sf::Style::Default, settings);

sf::ContextSettings settings = window.getSettings();

std::cout << "depth bits:" << settings.depthBits << std::endl;
std::cout << "stencil bits:" << settings.stencilBits << std::endl;
std::cout << "antialiasing level:" << settings.antialiasingLevel << std::endl;
std::cout << "version:" << settings.majorVersion << "." << settings.minorVersion << std::endl;
```

以下是一个 OpenGL 混合 SFML 的程序基本结构：

```cpp
#include <SFML/Window.hpp>
#include <SFML/OpenGL.hpp>

int main()
{
    // create the window
    sf::Window window(sf::VideoMode(800, 600), "OpenGL", sf::Style::Default, sf::ContextSettings(32));
    window.setVerticalSyncEnabled(true);

    // activate the window
    window.setActive(true);

    // load resources, initialize the OpenGL states, ...

    // run the main loop
    bool running = true;
    while (running)
    {
        // handle events
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
            {
                // end the program
                running = false;
            }
            else if (event.type == sf::Event::Resized)
            {
                // adjust the viewport when the window is resized
                glViewport(0, 0, event.size.width, event.size.height);
            }
        }

        // clear the buffers
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        // draw...

        // deactivate the window's context
        window.setActive(false);

        // end the current frame (internally swaps the front and back buffers)
        window.display();
    }

    // release resources...

    return 0;
}
```

这里没有使用 *window.isOpen()* 作为主循环的条件，因为需要直到程序结束，在窗口关闭前的最后一轮循环中，需要一个有效的 OpenGL 上下文，并执行清理代码。

如果使用 *window.isOpen()*，那么最后一次循环体就不会被执行，所以这里使用了一个 running 布尔值标记。

SFML 在创建每个窗口时，会自动创建 OpenGL 上下文，调用 OpenGL 函数时就会自动操作当前的上下文。如果，一个上下文对象不是处于激活状态，那么 OpenGL 函数执行结果会导致异常，得到非期望效果，因为没有相应的上下文状态。

使用 *window.setActive()* 方法来激活、取消激活当前窗口的 OpenGL 上下文，只需要传入一个 bool 值。激活一个窗口的 OpenGL 上下文同时，也隐含表示将前一个激活的上下文取消激活，相当于它执行了 *window.setActive(false)*。但和主动执行取消激活还是有差别的，毕竟它的取消激活这个动作发生在其它窗口激活时，所以效率上可能并不是最佳的，所以推荐在完成操作后主动执行取消激活当前的 OpenGL 上下文。

一个 RAII helper 类可以按以下结构实现：

```C++
// activate the window's context
window.setActive(true);

// set up OpenGL states
// clear framebuffers
// draw to the window

// deactivate the window's context
window.setActive(false);
```

在 SFML 调试 OpenGL 的第一步总是确认调用 OpenGL 命令的上下文是否处于激活状态，不要假设 SFML 会自动激活它。唯一确定的是当前线程激活的上下文，在 *window.setActive(true)* ~ *window.setActive(false)* 之间是不会改变的，因为蹭没有其它命令调用来改变这种状态。此外，其它情况都可以假定上下文的激活状态受到影响，还需要确认调用 OpenGL 命令的是正确的那个上下文对象处于激活状态。

活动上下文不仅为 OpenGL 操作提供执行环境，还指定任何绘图命令的目标帧缓冲区。在没有可见帧缓冲区的上下文处于活动状态时，调用 OpenGL Draw 命令无法生成任何可见图像输出。在多个上下文中拆分 OpenGL 操作，也会导致状态更改在多个上下文中传播。如果任何后续的绘制操作假定设置了某些状态，则在这种情况下将不会产生正确的结果。

推荐使用 OpenGL 错误处理机制来调试，使用 *glGetError()* 函数或错误回调通知机制，每个 OpenGL 命令是否执行成功都可以清楚地掌握，也更有效率地、准确地定位问题的关键位置。

根据 OpenGL 版本及上下文的功能兼容性不同，执行错误的命令会导致 *GL_INVALID_OPERATION* or *GL_INVALID_ENUM* 错误。

实际使用的功能可能和创建窗口时传入的配置有出入，推荐使用 *window.getSettings()* or *context.getSettings()* 检测是否按要求提供了相应的 OpenGL 功能。

管理多个窗口的 OpenGL 上下文并不会比单个更复杂，由于 OpenGL 单线种工作机制，每个线程中只能激活一个上下文。并且，同一 SFML 程序中，所有上下文都共享相同的资源，因此创建新窗口也并不需要重新加载资源。

要在不同的窗口执行操作，就需要切换 OpenGL 上下文的激活状态：

```C++
// activate the first window
window1.setActive(true);

// draw to the first window...

// activate the second window
window2.setActive(true);

// draw to the second window...
```

有时需要执行 OpenGL 命令而不需要窗口，例如在创建窗口之前，用一个线程预先加载纹理资源，SFML 提供 *sf::Context* 类实现：

```C++
int main()
{
    sf::Context context;

    // load OpenGL resources...

    sf::Window window(sf::VideoMode(800, 600), "OpenGL");

    ...

    return 0;
}
```

在一个典型的多线程配置中，会在主线程中处理窗口的事件，在另一个线程中进行渲染操作。这种配置下，必需牢记：如果在子线程中激活一个上下文，就不能在主线程中激活。就是说，在加载子线程前，需要先取消窗口的激活状态。

```C++
void renderingThread(sf::Window* window)
{
    // activate the window's context
    window->setActive(true);

    // the rendering loop
    while (window->isOpen())
    {
        // draw...

        // end the current frame -- this is a rendering function (it requires the context to be active)
        window->display();
    }
}

int main()
{
    // create the window (remember: it's safer to create it in the main thread due to OS limitations)
    sf::Window window(sf::VideoMode(800, 600), "OpenGL");

    // deactivate its OpenGL context
    window.setActive(false);

    // launch the rendering thread
    sf::Thread thread(&renderingThread, &window);
    thread.launch();

    // the event/logic/whatever loop
    while (window.isOpen())
    {
        ...
    }

    return 0;
}
```

SFML 的 Graphics 模式和 OpenGL 可以一起工作，因为它们都使用上下文，因此需要避免两者的混淆。使用图形模块的 *sf::RenderWindow* 类替换窗口模块的 *sf::Window*，图形模块的渲染窗口提供了状态保存、恢复方法。只需要在执行图形渲染时将 OpenGL 的上下文保存起来，并操作完成后恢复 OpenGL 上下文：

```C++
glDraw...

window.pushGLStates();

window.draw(...);

window.popGLStates();

glDraw...
```

但是这种切换方式需要大量时间，只适合小形应用，对性能要求不高的场景中使用。

另一种方式是自己管理上下文，使用 OpenGL 提供的 glPushAttrib/glPopAttrib, glPushMatrix/glPopMatrix 等命令。这种情况下，就需要使用  *resetGLStates()* 来恢复 SFML 自己的上下文状态：

```C++
glDraw...

glPush...
window.resetGLStates();

window.draw(...);

glPop...

glDraw...
```



## ==⚡ Graphics Module
- Lingqi Yan (闫令琪) Assistant Professor https://sites.cs.ucsb.edu/~lingqi/
- GAMES101: 现代计算机图形学入门 https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html
- CS180 / CS280: Introduction to Computer Graphics Winter 2021 https://sites.cs.ucsb.edu/~lingqi/teaching/cs180.html
- GAMES101-现代计算机图形学入门-闫令琪 https://www.bilibili.com/video/av90798049
- GAMES101 课程录像 https://www.bilibili.com/video/av90798049

Graphics 模块提供了一个 RenderWindow 窗口类，主要功能是用于简化图形的绘制流程。

前面基于 Window 对象的窗口程序只是基本图形界面程序流程，也可以混合 OpenGL 进行图形功能的开发，但这很复杂。

SFML 从 sf::Window 派生出 sf::RenderWindow 类就是专用于二维图形绘制的。

类似的还有 sf::RenderTexture 提供离屏绘画 Off-screen drawing，和 RenderWindow 一样是 sf::RenderTarget 子类。

这一类对象有个特点，就是不能复制，是系统模块的 *NonCopyable* 接口的子类，类似 *GlResource*。不可复制，意味着不能调用它的默认构造函数，默认拷贝构造函数，也不能使用赋值运算符。

```cpp
class SFML_SYSTEM_API NonCopyable
{
protected:
    NonCopyable() {}

private:
    NonCopyable(const NonCopyable&);
    NonCopyable& operator =(const NonCopyable&);
};
```

有两个重要的接口 sf::Drawable 和 sf::Transformable，基于这两个接口，SFML 图形模块中提供各种可以绘制、可以进行变换的图形对象。

学习现代的图形编程的目的就是学习 GPU 渲染管线的编程。

Mastering SFML game development by Pupius, Raimondas 书中提供了一张 Programmable pipeline 示意图，很简明地表达了渲染管线各个工序的作用：

![Programmable pipeline - Mastering SFML game development by Pupius, Raimondas](https://github.com/jimboyeah/spine-sfml-demo/blob/master/images/Programmable%20pipeline%20-%20Mastering%20SFML%20game%20development%20by%20Pupius,%20Raimondas.jpg)

OpenGL 官方文档 OpenGL Rendering Pipeline 也基本是按 GPU 渲染流程组织的，如下：

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

这些基本概念的解析：

- `Vertexs` 顶点数据是一些点的 2D 或 3D 坐标集合，此外，每个顶点还包括颜色和纹理坐标属性。
- `Primitives` 基本图元包括点，线段，三角形等，是构成实体模型的基本单位，需要在传入顶点数据的同时通知 OpenGL 这些顶点组成什么图形。
- `Vertex Shader` 顶点着色器程序包含对一些顶点属性或数据的基本处理。
- `Tessellation Shaders` 细分着色器，基本图元细分为更多的基本图形，创建出更加平滑的视觉效果。
- `Geometry Shader` 几何着色器，输入基本图元形式的顶点的集合，通过产生新顶点构造出新的基本图元来生成其他形状。
- `Primitive Assembly` 基本图元装配，把所有输入的顶点数据作为输入，输出制定的基本图元。
- `Rasterization` 光栅化即像素化，把细分着色器输出的基本图形映射为屏幕上网格的像素点，生成供片段着色器处理的片段 Fragment，光栅化包含一个剪裁操作，会舍弃超出定义的视窗之外的像素。
- `Fragment Shader` 片段着色器，的主要作用是计算出每一个像素点最终的颜色，通常片段着色器会包含 3D 场景的一些额外的数据，如光线，阴影等。在这个阶段里会使用深度测试，通常也称作 z-buffering，和模板测试 stencil test 来决定一个片元是否是可见的。如果一个片元成功地通过了所有激活的测试，那么它就可以被直接绘制到帧缓存中了，更新它对应的像素的颜色值，也可能包括深度值。如果开启了 blending 融合模式，那么片元的颜色会与该像素当前的颜色相叠加，形成一个新的颜色值并写入帧缓存中。

顶点数据是一系列属性的数据集合，一个顶点包含以下属性 Vertex Attributes：

```cpp
class SFML_GRAPHICS_API Vertex
{
    Vector2f  position;  ///< 2D position of the vertex
    Color     color;     ///< Color of the vertex
    Vector2f  texCoords; ///< Coordinates of the texture's pixel to map to the vertex
};
```

顶点数据是图形的基础，而图形软件的最终目的是要通过大量的数据去绘制出期望的图形效果，图元 Primitives 就是告诉 GUP 要怎么将顶点处理成基本图形。现代图形软件中，渲染管线 Pipeline 是最基础的概念，图形软件优化就是管线各个细节的优化 Pipeline Optimization。

以下是一些 GPU 图形编程的基础概念：

- `VBO` - Vertex Buffer object 在显卡存储空间中开辟出的一块内存缓存区用来储存顶点数据，增加顶点进入 GPU 效率的方法。它们是可以存储在显存中的缓冲区，以最快的 GPU 速度去访问数据。

- `VAO` - Vertex Array Object 顶点数组对象，定义了批量的顶点，和着色器变量起连接作用。VBO 保存了一个模型的顶点属性信息，每次绘制模型之前需要绑定顶点的所有信息，当数据量很大时，重复这样的动作变得非常麻烦。VAO 可以把这些所有的配置都存储在一个对象中，每次绘制模型时，只需要绑定这个 VAO 对象就可以了。 

- `EBO` - Element Buffer Object 索引缓冲对象，或者称 `IBO` - Index Buffer Object，相当于 OpenGL 中的顶点数组的概念，解决顶点重用问题，可以减少内存空间浪费，提高执行效率。当需要使用重复的顶点时，通过顶点的位置索引来调用顶点，而不是对重复的顶点信息重复记录，重复调用。

在没有 VBO 的图形绘制，如 `glDrawArrays` 都是从本地内存推送顶点数据到给 OpenGL 核心，这样中间就会间隔着频繁的 CPU -> GPU 数据对拷操作，增大开销，从而降低效率。

使用 VBO 可以直接将顶点数据缓存到 GPU 开辟的一段内存中，直接从显存中获取而不必再走一遍主机内存，这样就能提升绘制的效率。VAO 就是组织批量的 VBO 数据，则 EBO 就是通过索引来使用顶点数据提高数据复用效率。


### ===🗝 Drawing 2D stuff

简单的 SFML 图形窗口程序，只画了一个圆圈：

```cpp
#include <SFML/Graphics.hpp>

int main()
{
    sf::RenderWindow window(sf::VideoMode(200, 200), "SFML works!");
    sf::CircleShape shape(100.f);
    shape.setFillColor(sf::Color::Green);

    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        // clear the window with black color
        window.clear(sf::Color::Black);
        // window.clear();

        // draw everything here...
        window.draw(shape);

        // end the current frame
        window.display();
    }

    return 0;
}
```

绘画前调用 clear() 清理画布是必需的，除非刻意不清理，但对性能没有多大影响。绘画后调用 display() 也是必需的，它将自上次调用以来绘制的内容显示在窗口上。事实上，事物不是直接绘制到窗口，而是绘制到一个隐藏的缓冲区。当您调用 display() 时，这个缓冲区会被复制到显存的窗口中，这称为双缓冲 Double Buffer。

这种清晰/绘制/显示循环是绘制事物的唯一好方法。不要尝试其他策略，例如保持前一帧的像素，“擦除”像素，或绘制一次并多次调用display。由于双重缓冲，您将得到奇怪的结果。

现代图形硬件和 API 实际上是为重复执行清除/绘制/显示这个循环而设计的，在主循环的每次迭代中，所有内容都会完全刷新。不要害怕每秒绘制 1000 个精灵 60 次，这远远低于计算机所能处理的数百万个三角形。

如果学习了 OpenGL 底层图形接口的使用，会理解到程序绘画过程中数据是如何与显卡交互的。

SFML 还通过 sf::RenderTexture 提供离屏绘画 Off-screen drawing，而不像 sf::RenderWindow 直接绘画到屏幕的窗口上。

它们都是 sf::RenderTarget 的子类。只不过 RenderTexture 没有继承 sf::Window，而是通过 sf::Texture 开辟了一块用于绘画的内存空间。

```cpp
// create a 500x500 render-texture
sf::RenderTexture renderTexture;
if (!renderTexture.create(500, 500))
{
    // error...
}

// drawing uses the same functions
renderTexture.clear();
renderTexture.draw(sprite); // or any other drawable
renderTexture.display();

// get the target texture (where the stuff has been drawn)
const sf::Texture& texture = renderTexture.getTexture();

// draw it to the window
sf::Sprite sprite(texture);
window.draw(sprite);
```

从 getTexture() 函数返回的是只读纹理数据，如果要修改内容，就需要复制到另一个 sf::Texture 实例再操作。

sf::RenderTexture 也和 sf::RenderWindow 一样为视图控制和 OpenGL 提供相同的功能，如果使用 OpenGL 绘制渲染纹理，则可以使用 create 函数的第三个可选参数请求创建深度缓冲区。

```cpp
renderTexture.create(500, 500, true); // enable depth buffer
```

SFML 支持多线程绘画，只需要在其它线程接手绘画前通过 setActive(false) 取消激活状态，因为窗口不可以在多个线程中激活，更准确地讲是 OpenGL 上下文同时只能由一个线程激活使用。

```cpp
void renderingThread(sf::RenderWindow* window)
{
    // activate the window's context
    window->setActive(true);

    // the rendering loop
    while (window->isOpen())
    {
        // draw...

        // end the current frame
        window->display();
    }
}

int main()
{
    // create the window (remember: it's safer to create it in the main thread due to OS limitations)
    sf::RenderWindow window(sf::VideoMode(800, 600), "OpenGL");

    // deactivate its OpenGL context
    window.setActive(false);

    // launch the rendering thread
    sf::Thread thread(&renderingThread, &window);
    thread.launch();

    // the event/logic/whatever loop
    while (window.isOpen())
    {
        ...
    }

    return 0;
}
```



### ===🗝 Sprites and textures

精灵和纹理 Sprites & textures 是两个常用的名词，纹理就是图像，只不过它需要附着在 2D 对象表面，所以叫做纹理，精灵也不过是贴了纹理的矩形。

纹理是资源类，继承自 GlResource，而精灵实现了两个重要的图形接口 sf::Drawable 和 sf::Transformable，基于这两个接口，是可以绘制、可以进行变换的图形对象。

在创建精灵前，先要获取有效的纹理对象，sf::Texture 的功能几乎就是用来加载图像和更新图像，多数情况都会使用 loadFromFile 函数来加载文件：

```cpp
sf::Texture texture;
if (!texture.loadFromFile("image.png"))
{
    // error...
}

// load a 32x32 rectangle that starts at (10, 10)
if (!texture.loadFromFile("image.png", sf::IntRect(10, 10, 32, 32)))
{
    // error...
}
```

支持常用的图像格式，bmp, png, tga, jpg, gif, psd, hdr 和 pic，但有些格式的选项不支持，如 progressive jpeg。

loadFromFile 函数有时会在没有明显原因的情况下失败。检查控制台中 SFML 打印到标准输出的错误消，如果消息是 unable to open file，请确保工作目录是正确的。当您从桌面环境运行应用程序时，工作目录是可执行文件夹。但是，当您从 IDE 启动程序时，如 VisualStudio，Code::Blocks 等等，工作目录有时可能被设置为项目目录，这通常可以在项目设置中很容易地更改。

loadFromMemory 函数可以从内存中加载资源，或者使用 loadFromStream 函数加载自定义的数据流。

纹理可以使用 loadFromImage 可以从 sf::Image 位图类内存中现有的图像加载，直接使用内存中的图像速度更快。位图类可以用来处理数据，改变像素、创建透明通道等等。位图类 sf::Image 数据保存在系统内存中，读写都快。但是和显存中的纹理图像比较，获取或更新较慢，但它绘画速度相当快。

可以直接在内存空间中创建纹理，并使用数组数据来填充：

```cpp
// create an empty 200x200 texture
if (!texture.create(200, 200))
{
    // error...
}

// update a texture from an array of pixels
sf::Uint8* pixels = new sf::Uint8[width * height * 4]; // * 4 because pixels have 4 components (RGBA)
...
texture.update(pixels);

// update a texture from a sf::Image
sf::Image image;
...
texture.update(image);

// update the texture from the current contents of the window
sf::RenderWindow window;
...
texture.update(window);
```

纹理类有两个方法影响渲染效果，启用平滑和重复填充，平滑是通过降低边界像素的可见度实现的：

```cpp
texture.setSmooth(true);
texture.setRepeated(true);
```

有了纹理了，以下就示范创建精灵对象，并对其进行变换操作：

```cpp
sf::Sprite sprite;
sprite.setTexture(texture);
sprite.setTextureRect(sf::IntRect(10, 10, 32, 32));
sprite.setColor(sf::Color(0, 255, 0)); // green
sprite.setColor(sf::Color(255, 255, 255, 128)); // half transparent

// position
sprite.setPosition(sf::Vector2f(10.f, 50.f)); // absolute position
sprite.move(sf::Vector2f(5.f, 10.f)); // offset relative to the current position

// rotation
sprite.setRotation(90.f); // absolute angle
sprite.rotate(15.f); // offset relative to the current angle

// scale
sprite.setScale(sf::Vector2f(0.5f, 2.f)); // absolute scale factor
sprite.scale(sf::Vector2f(1.5f, 3.f)); // factor relative to the current scale

sprite.setOrigin(sf::Vector2f(25.f, 25.f));

// inside the main loop, between window.clear() and window.display()
window.draw(sprite);
```

注意 Sprite setTexture 传入纹理引用，而 Shape 纹理是传入指针，这些不统一的编码规则好怪。

设置精灵的颜色，会和纹理颜色进行正片叠底混合 (multiplied)，也可以改变精灵的全局透明度 (alpha)。

默认状态下，变换操作的原点是图形左上角，也就是会将图形的左上角对应屏幕的左上角显示。设置图形的原点坐标后，图片中新的原点位置就会对应显示到屏幕左上角。上面代码 setOrigin 使用图形向左上角移到了 (25,25) 像素，但双通过 setPosition 向右下角移动了 (10, 50) 像素。总体表现为移动了 (-15, 25) 像素，即向左下角移动了。

原点移动后，旋转、绽放变换的参考点就会在图形的 (25,25) 坐标，如果这与图形在屏幕上的位置无关。

绘画中可能出现白色块问题，即使成功加载纹理，正确构造了精灵，还是出现了白色块！这是因为给精灵设置的纹理实例，在内部是通过指针引用，如果纹理实例超出作用域被清除后，指针失效变野，就导致精灵无法有效读取纹理图像，所以出现白色块。

以下这样的代码就会有这种问题，loadSprite 函数返回，texture 就被清理，传入内部的指针就失效：

```cpp
sf::Sprite loadSprite(std::string filename)
{
    sf::Texture texture;
    texture.loadFromFile(filename);

    return sf::Sprite(texture);
} // error: the texture is destroyed here
```

尽可能少用纹理是一个好主意，理由是修改纹理对显卡来说是复杂的工作，有大量数据在系统内存和显存之间流动。但是，同一个精灵绘制多次效率依然很高，因为纹理数据都是在显存中现成的。

此外，使用单个纹理可以将静态几何体分组到单个实体中（每次绘制调用只使用一个纹理），这将比一组多个实体的绘制速度快得多。批处理静态几何体涉及顶点数组的使用，参见顶点阵列教程。

在 OpenGL API 中使用 sf::Texture，开发者不可能只使用 SFML，混合 OpenGL 是经常的事。仍然可以使用 sf::Texture 来包装 OpenGL 的纹理对象，调用 bind() 静态函数绑定纹理，就像在使用 glBindTexture。

```cpp
sf::Texture texture;
...

// bind the texture
sf::Texture::bind(&texture);

// draw your textured OpenGL entity here...

// bind no texture
sf::Texture::bind(NULL);
```


### ===🗝 Text and fonts
- Fonts and Measuring Text https://www.graphicsmill.com/docs/gm/fonts-and-measuring-text.htm
- FreeType Glyph Conventions / III https://freetype.org/freetype2/docs/glyphs/glyphs-3.html

文本与字体是基本的图形界面元素，在绘制任何字符之前，需要相应的字体文件。

字体使用 sf::Font 类包装，底层基于 freetype 库的支持，基本功能是加载字符文件，获取字形 glyphs 即单个字符的图像，并读取其属性。

字体 Font 是一个相当常用的术语，隐含了许多细节，一个字体文件其实就是包含多个字形，每个字形可以作为一个图像保存，并用一个号码映射。使用字体时，字符的值就相当映射号码，通过这个号码获取字形图形。而这个映射就是各种字符集编码方案，如 ASCII, Unicode, Big5, ShiftJIS。

每个字符都有一系列的度量 Glyph Metrics，描述了渲染字符时如何放置它并管理。

SFML 字体类最常见的用法是执行 loadFromFile 函数从磁盘中加载字体文件。

SFML 不会自动加载系统中存在的字体，比如 font.loadFromFile("Courier New") 可不会加载到字符文件，因为 SFML 需要一个字体文件名，而不是字体名。

SFML 基于 freetype 字体库支持常用的字体文件格式，API 文档显示支持 TrueType, Type 1, CFF, OpenType, SFNT, X11 PCF, Windows FNT, BDF, PFR and Type 42。

就这些，一旦加载字体文件后，就可以用来将 sf::Text 类中的文本绘制到图形上：

```cpp
sf::Font font;
if (!font.loadFromFile("arial.ttf"))
{
    // error...
}

sf::Text text;

// select the font
text.setFont(font); // font is a sf::Font

// set the string to display
text.setString("Hello world");

// set the character size
text.setCharacterSize(24); // in pixels, not points!

// set the color
text.setFillColor(sf::Color::Red);

// set the text style
text.setStyle(sf::Text::Bold | sf::Text::Underlined);

...

// inside the main loop, between window.clear() and window.display()
window.draw(text);
```

文本对象和 sf::Sprite 一样，都是 Drawable 和
Transformable 接口子类，是可以绘制的对象，也一样可以进行变换操作，位移、旋转、缩放。


对于 non-ASCII 字符，比如 Arabic, 汉字，需要知道不同的编码方案的差别，简单起见，使用宽字符是最容易的方法：

    text.setString(L"יטאח");

通过在字符串前缀 "L" 告诉编译器，这些字符会被转换为宽字符保存在程序中，宽字符串在 C++ 中是一个奇怪的野兽：标准没有说明它们的大小（16-bit 或是 32-bit），也不知道他们使用的编码（UTF-16 或 UTF-32）。然而，在大多数平台上，它们将生成 Unicode 字符串，而 SFML 知道如何正确处理它们。

C++11 标准支持新的字符编码类型和前缀来构建 UTF-8, UTF-16 和 UTF-32 字符串，但 SFML 还不支持。

这看起来很明显，必须确保使用的字体包含要绘制的字符定义。事实上，字体并不包含所有可能字符的字形。要知道 Unicode 标准中有 100000 多个字符！例如，阿拉伯语字体将无法显示日语文本，一个中文字体可能有几万个字符，体积已经是按 MB 计量。

由于 sf::Text 功能有限，比如想要用预渲染的 glyphs 来做些事就不支持，但是 sf::Font 可以按需要定制功能。

可以从字体中获取纹理，是指定字符大小的预渲染 glyphs：

```cpp
const sf::Texture& texture = font.getTexture(characterSize);
```

注意一点，字形 glyphs 会在使用纹理时从字体中读取，因为大的字体文件可能有 10 万字符，一次读取是相当低能的做法。因此，在需要时通过调用 getGlyph 函数读取。

To do something meaningful with the font texture, you must get the texture coordinates of glyphs that are contained in it:

```cpp
sf::Glyph glyph = font.getGlyph(character, characterSize, bold);
```

参数 character 是想要获取字符的 UTF-32 编码值，另外还必需指定字符的大小，和字形的粗细。

sf::Glyph 结构体包含：

- float     *textureRect* 包含字形在纹理上的坐标。
- FloatRect *bounds* 字形的边界矩形，帮助定位字符相对 baseline 的距离。
- IntRect   *advance* 下一个字形位置的水平偏移量。

还可以获得字体的一些其他度量指标，例如两个字符之间的字距或行距（始终针对特定字符大小）：

```cpp
int lineSpacing = font.getLineSpacing(characterSize);

int kerning = font.getKerning(character1, character2, characterSize);
```


### ===🗝 Shapes

SFML 提供了一组基本形状实现，它们基于 sf::Shape 派生，有基本共享的行为模式，是 *Drawable* 和 *Transformable* 子类。可以进行基本的仿射变换 Transformation (position, rotation, scale)。

参考其私有成员就可以了解基本特性：

```cpp
const Texture* m_texture;          ///< Texture of the shape
IntRect        m_textureRect;      ///< Rectangle defining the area of the source texture to display
Color          m_fillColor;        ///< Fill color
Color          m_outlineColor;     ///< Outline color
float          m_outlineThickness; ///< Thickness of the shape's outline
VertexArray    m_vertices;         ///< Vertex array containing the fill geometry
VertexArray    m_outlineVertices;  ///< Vertex array containing the outline geometry
FloatRect      m_insideBounds;     ///< Bounding rectangle of the inside (fill)
FloatRect      m_bounds;           ///< Bounding rectangle of the whole shape (outline + fill)
```

有 *Color* 可以设置填充色和轮廓线，有 *Texture* 可以设置填充纹理图案，有 *IntRect* 支持简单的 Bunding Box 碰撞检测，等等。

默认情况下，轮廓从形状向外拉伸（例如，如果有半径为 10 且轮廓厚度为 5 的圆，则圆的总半径将为 15）。通过设置轮廓为负厚度，可以使其向形状中心拉伸。

隐藏轮廓线可以设置厚度为 0，如果只是需要轮廓不可见，可以设置颜色为 sf::Color::Transparent 让其透明。

和其它 SFML 实体一样，可以直接将形状对象传入 draw 函数进行绘画。

```cpp
sf::CircleShape shape(50.f);

// set the shape color to green
shape.setFillColor(sf::Color(100, 250, 50));
sf::CircleShape shape(50.f);
shape.setFillColor(sf::Color(150, 50, 250));

// set a 10-pixel wide orange outline
shape.setOutlineThickness(10.f);
shape.setOutlineColor(sf::Color(250, 150, 100));

// map a 100x100 textured rectangle to the shape
shape.setTexture(&texture); // texture is a sf::Texture
shape.setTextureRect(sf::IntRect(10, 10, 100, 100));
shape.setTexture(NULL); // clear texture

window.draw(shape);
```

内建的形状类如下：

- sf::RectangleShape 矩形，有 size 一个属性；
- sf::CircleShape 圆形，有半径和边数两个属性，通过规则多边形模拟，如果指定 3 个顶点就是一个三角形；
- sf::ConvexShape 凸面形状是最终的形状类，它允许定义任何凸面形状，定义点的顺序很重要，必需统一顺时和逆时针。

凸包(Convex Hull)是一个计算几何（图形学）中的概念，它的严格的数学定义为：在一个向量空间 V 中，对于给定集合 X，所有包含 X 的凸集的交集 S 被称为 X 的凸包。

简单说，凸面的特点就是画任意一条线经过一个图形，如果与连线只有两次相交，即一进一出，那么这个图形就是凸面。五角星图形就是 Non-Convex，因为其图形上任意两点连线不能满足在这图形内部，还有手掌等。

边线相交的次数和图形的颜色填充有关系，边线不同走向决定图形的最终外观。图形学上，绘制一个带填充色的图案，就需要确定画线前进方向的左还是右为图形内部，只有内部才需要填充颜色。

在 OpenCV 中，通过函数 convexHull 能很容易从图形中的得到一系列点，即由这此点组成的轮廓完全包裹非凸面，这个轮廓图形就叫 Convex Hull 凸壳或凸包。通过寻找图像的凸包，能够让我们做一些有意思的事情，比如手势识别等。

         /\
        /  \            /\  /\
       /    \          /  \/  \
       \    /          \      /
        \  /            \    / 
         \/              \--/  

       Convex         Non-Convex

尽管 sf::ConvexShape 的名称意味着它应该只用于表示凸面形状，但它的要求稍微宽松一些。事实上，您的形状必须满足的唯一要求是，如果您继续绘制从重心到所有点的线，这些线必须以相同的顺序绘制。你不允许“跳到前一行后面”。在内部，凸面形状是使用三角形扇形自动构造的，因此，如果形状可由三角形扇形表示，则可以使用 sf::ConvexShape。使用这个宽松的定义，您可以使用 sf::ConvexShape 绘制星星，尽管它不是凸面。

```cpp
// define a 120x50 rectangle
sf::RectangleShape rectangle(sf::Vector2f(120.f, 50.f));
// change the size to 100x100
rectangle.setSize(sf::Vector2f(100.f, 100.f));

// define a circle with radius = 200, radius to 40, 100 sides (points)
sf::CircleShape circle(200.f);
circle.setRadius(40.f);
circle.setPointCount(100);

// define a triangle
sf::CircleShape triangle(80.f, 3);

// define a square
sf::CircleShape square(80.f, 4);

// define an octagon
sf::CircleShape octagon(80.f, 8);

// create an empty shape
sf::ConvexShape convex;

// resize it to 5 points
convex.setPointCount(5);

// define the points
convex.setPoint(0, sf::Vector2f(0.f, 0.f));
convex.setPoint(1, sf::Vector2f(150.f, 10.f));
convex.setPoint(2, sf::Vector2f(120.f, 90.f));
convex.setPoint(3, sf::Vector2f(30.f, 100.f));
convex.setPoint(4, sf::Vector2f(0.f, 50.f));
```

线条是最简单的图形了，SFML 没有定义相关的类，可以使用不同的方法实现：

```cpp
// A line shape drawn as a rectangle
sf::RectangleShape line(sf::Vector2f(150.f, 5.f));
line.rotate(45.f);

// Line without thickness:
sf::Vertex line[] =
{
    sf::Vertex(sf::Vector2f(10.f, 10.f)),
    sf::Vertex(sf::Vector2f(150.f, 150.f))
};

window.draw(line, 2, sf::Lines);
```

自定义形状只需要实现 sf::Shape 接口的两个方法：

- *getPointCount*: return the number of points in the shape
- *getPoint*: return a point of the shape

另外，还需要在顶点改变后执行 update() 保护成员以更新图形，以让基类知道如何更内部新几何体。

示范实现 EllipseShape 形状类：

```cpp
class EllipseShape : public sf::Shape
{
public :

    explicit EllipseShape(const sf::Vector2f& radius = sf::Vector2f(0.f, 0.f)) :
    m_radius(radius)
    {
        update();
    }

    void setRadius(const sf::Vector2f& radius)
    {
        m_radius = radius;
        update();
    }

    const sf::Vector2f& getRadius() const
    {
        return m_radius;
    }

    virtual std::size_t getPointCount() const
    {
        return 30; // fixed, but could be an attribute of the class if needed
    }

    virtual sf::Vector2f getPoint(std::size_t index) const
    {
        static const float pi = 3.141592654f;

        float angle = index * 2 * pi / getPointCount() - pi / 2;
        float x = std::cos(angle) * m_radius.x;
        float y = std::sin(angle) * m_radius.y;

        return sf::Vector2f(m_radius.x + x, m_radius.y + y);
    }

private :

    sf::Vector2f m_radius;
};
```

图形抗锯齿 AA - anti-aliased，需要通过设置全局的 sf::ContextSettings 结构体来启用抗锯齿功能以获得平滑的图形，需要显卡支持：

```cpp
sf::ContextSettings settings;
settings.antialiasingLevel = 8;

sf::RenderWindow window(sf::VideoMode(800, 600), "SFML shapes", sf::Style::Default, settings);
```


### ===🗝 Vertex arrays
- OpenGL Programming Guide 8th Edition

绘制 Sprite 并不是最有效的做法，事实上，每个调用都涉及设置一组 OpenGL 状态、重置矩阵、更改纹理等操作。即使只是绘制两个三角形构成的精灵，也需要所有这些。这远远不是图形卡的最佳选择：现代 GPU 设计用于处理大批量的三角形，通常是数千到数百万个。

在开始深入 OpenGL 编程以及 Shader 着色器程序编写之前，先从 SFML 包装的一种较低级别的绘制机制开始：Vertex Array 顶点数组。事实上，所有其他 SFML类都在内部使用顶点数组。它们允许更灵活地定义二维实体，包含所需数量的三角形，甚至允许绘制点或线。

顶点数组是你可以操控的最小图形元素，就是图形的点，包含 2D 坐标，还有颜色，和纹理坐标。

顶点集本身做不了什么，它们始终按基元分组，图元 Primitive types 就是最简单的图形，如：点（1个顶点）、线（2个顶点）、三角形（3个顶点）或四边形（4个顶点）。然后，可以将多个基本体组合在一起，以创建实体的最终几何体。

```cpp
enum PrimitiveType
{
    Points,        ///< List of individual points
    Lines,         ///< List of individual lines
    LineStrip,     ///< List of connected lines, a point uses the previous point to form a line
    Triangles,     ///< List of individual triangles
    TriangleStrip, ///< List of connected triangles, a point uses the two previous points to form a triangle
    TriangleFan,   ///< List of connected triangles, a point uses the common center and the previous point to form a triangle
    Quads,         ///< List of individual quads (deprecated, don't work with OpenGL ES)

    // Deprecated names
    LinesStrip     = LineStrip,     ///< \deprecated Use LineStrip instead
    TrianglesStrip = TriangleStrip, ///< \deprecated Use TriangleStrip instead
    TrianglesFan   = TriangleFan    ///< \deprecated Use TriangleFan instead
};
```

现在您了解了为什么我们总是谈论顶点数组，而不仅仅是顶点。

注意，LineStrip，TriangleStrip 这些带后缀的图元会使用前后交叠的顶点数据。而 sf::TriangleFan 将顶点数组中的第一个顶点作为中心绘制多连形，如果第二个点和最后一个点没有重叠，就会产生扇形图形。

一个简单的顶点数组由 sf:：Vertex 顶点类组成，它只是一个容器，包含三个公共成员，除了构造函数之外没有函数。这些构造函数允许从属性集构造顶点，不必总是为实体着色或设置纹理。

```cpp
// create a new vertex
sf::Vertex vertex;

// set its color, position, and texture coordinates
vertex.color = sf::Color::Red;
vertex.position = sf::Vector2f(10.f, 50.f);
vertex.texCoords = sf::Vector2f(100.f, 100.f);

// ... or, using the correct constructor:
sf::Vertex vertex(sf::Vector2f(10.f, 50.f), sf::Color::Red, sf::Vector2f(100.f, 100.f));
```

SFML 提供 sf::VertexArray 来包装这些具有多个属性的顶点，它提数组语义，还存储其顶点定义的基元类型。当然不一定非要使用顶点数组类，也可以使用 `std::vector<sf::Vertex>`，目的一样，就是用数组来组织顶点包含的属性数据。

```cpp
// create an array of 3 vertices that define a triangle primitive
sf::VertexArray triangle(sf::Triangles, 3);

// define the position of the triangle's points
triangle[0].position = sf::Vector2f(10.f, 10.f);
triangle[1].position = sf::Vector2f(100.f, 10.f);
triangle[2].position = sf::Vector2f(100.f, 100.f);

// define the color of the triangle's points
triangle[0].color = sf::Color::Red;
triangle[1].color = sf::Color::Blue;
triangle[2].color = sf::Color::Green;

// no texture coordinates here, we'll see that later

// draw primitive
window.draw(triangle);
```

有了基元图形，就可以执行绘制，SFML 会像 OpenGL 中一样批量处理其中包含的顶点数据，GPU 会处理顶点颜色属性，使用两个顶点图形产生颜色渐变，这是高效的 GUP 绘图方法。

以下示范使用 std::vector 替代 sf::VertexArray，指定 sf::PrimitiveType 类型同样是三角形。如果需要更大灵活性的或静态数组，可以使用自己的存储方式。然后必须重载 draw 函数进行处理，该函数使用指向顶点的指针、顶点计数和图元类型：

```cpp
std::vector<sf::Vertex> vertices;
vertices.push_back(sf::Vertex(...));
...

window.draw(&vertices[0], vertices.size(), sf::Triangles);

sf::Vertex vertices[2] =
{
    sf::Vertex(...),
    sf::Vertex(...)
};

window.draw(vertices, 2, sf::Lines);
```

在 GPU 渲染管线上，顶点是可以使用纹理的，这里纹理坐标属性就开始作用了，它指导 GPU 如何将纹理图形在顶点之间铺设。如果没有纹理，那么退出一步，只使用顶点颜色。

纹理保存着可以被绘制的像素数据，纹理保存在图形卡内存中，因此，在纹理与渲染目标之间的数据传递非常快速（图形卡可以直接访问这者的数据）。

但存储在显存中也有一些缺点，纹理不能像 sf::Image 那样在系统内存中自由操作，需要先准备像素数据，然后在单次操作中将其上载到纹理，参考 Texture::update 函数。

由于它们位于图形卡内存中，因此如果不先进行慢速的复制过程，就无法访问纹理的像素。而且它们不能单独访问，因此，如果需要读取纹理的像素（如像素完美碰撞），建议单独存储碰撞信息，例如在布尔数组中。

纹理坐标使用像素为单位，不像 OpenGL 那样会规范到 [0, 1] 限值范围。规范的纹理坐标其实就是 UV 坐标，将其映射到纹理图像上，将图像是的长宽定义为 1 个单位，而不是以像素计量。

```cpp
enum CoordinateType
{
    Normalized, ///< Texture coordinates in range [0 .. 1]
    Pixels      ///< Texture coordinates in range [0 .. size]
};
```

顶点要绑定纹理图像后，纹理坐标才起作用，简化操作中，使用 draw 函数绘制顶点数组和纹理（传入指针），而使用 sf::RenderStates 则可以控制与背景的混合模式、实现仿射变换、执行着色器程序：

```cpp
// create a quad
sf::VertexArray quad(sf::Quads, 4);

// define it as a rectangle, located at (10, 10) and with size 100x100
quad[0].position = sf::Vector2f(10.f, 10.f);
quad[1].position = sf::Vector2f(110.f, 10.f);
quad[2].position = sf::Vector2f(110.f, 110.f);
quad[3].position = sf::Vector2f(10.f, 110.f);

// define its texture area to be a 25x50 rectangle starting at (0, 0)
quad[0].texCoords = sf::Vector2f(0.f, 0.f);
quad[1].texCoords = sf::Vector2f(25.f, 0.f);
quad[2].texCoords = sf::Vector2f(25.f, 50.f);
quad[3].texCoords = sf::Vector2f(0.f, 50.f);

sf::VertexArray vertices;
sf::Transform transform;
sf::Texture texture;
sf::Shader shader;
...

// A: siimplify with Texture/Transform/BlenMode
window.draw(vertices, transform);
window.draw(vertices, &texture);
window.draw(whatever, &shader);

// B: with RenderStates
sf::RenderStates states;
states.shader = &shader;
states.texture = &texture;
states.transform *= transform;
window.draw(vertices, states);
```

RenderWindow 父类 RenderTarget 提供了以下 draw 函数重载形式，除了可以绘制基本的 Drawable 接口类，还有顶点数组和顶点缓冲对象：

```cpp
// from SFML 2.4.1
void draw(const Drawable& drawable, const RenderStates& states = RenderStates::Default);
void draw(const Vertex* vertices, std::size_t vertexCount,
          PrimitiveType type, const RenderStates& states = RenderStates::Default);

// from SFML 2.5.1
void draw(const VertexBuffer& vertexBuffer, const RenderStates& states = RenderStates::Default);
void draw(const VertexBuffer& vertexBuffer, std::size_t firstVertex, std::size_t vertexCount, const RenderStates& states = RenderStates::Default);
```

这里有个疑点，为何 draw 可以在第二个参数中接收纹理指针呢？如果按第二个重载方式，它应该是 vertexCount，而不是纹理指针。

通过调试代码发现，其实是调用的第一种重载方式。那么，Texture 指针跟 RenderStates 引用什么关联呢？

难道是调用了其构造函数？

    RenderStates(const Texture* theTexture);

确实是这样，隐式转型是非常易容让人困惑的特性，编译器知道 draw 函数需要一个 RenderStates 对象，并且可以通过 Texture 指针构造一个，所以编译器选择自动调用构造函数来构造出 draw() 函数需要的参数类型。

转换构造函数(conversion constructor function) 的作用是将一个其他类型的数据转换成一个类的对象｡当一个构造函数只有一个参数，而且该参数又不是本类的 const 引用时，这种构造函数称为转换构造函数。

sf::RenderStates 管理着四种和绘制有关的全局状态对象，分别控制如何混合图形像素与背景、如何变换图形、如果映射纹理、如何使用着色器程序：

```cpp
BlendMode      blendMode; ///< Blending mode
Transform      transform; ///< Transform
const Texture* texture;   ///< Texture
const Shader*  shader;    ///< Shader
```

其中变换操作比较特殊，它不是全局状态，会和 Sprite, Text, Shape 对象中的变换叠加。注意，变换的叠加操作使用的是 * 操作符号。

```cpp
sf::RenderStates states;
states.transform.translate(250/2, 210/2);

sf::Transform transform;
transform.rotate(0.05f, 250/2, 210/2);

states.transform *= transform;
```

精灵或文本这些高级对象在绘制时会强制某些状态，例如，精灵将根据自己的纹理绘图。

其中着色器 Shader 就是真正对 GPU 进行编程，使用 GLSL 着色器程序代码来控制 GPU。

为 SFML 创建绘图实体，其实纹理、颜色、变换等基础能力，就可以开始定制自己的对象，并交给 SFML 进行绘制。只需要实现 sf::Drawable 和 sf::Transformable 两个基础接口即可，就像 sf::Sprite, sf::Text 和 sf::Shape 那样。

sf::Drawable 接口只要求实现 draw 方法，以供 RenderTarge 执行渲染时调用。

sf::Transformable 接口没有虚函数，已经实现了一套基本的仿射变换方法，支持移位、缩放、旋转，设置原点等操作。

继承 sf::Drawable 接口并不是必需的，但是这样做的好处是可以使用 window.draw(object)，而不是 object.draw(window)。

将这些功能整合起来，就可以像 SFML 一样定制自己的实体类：

```cpp
class MyEntity : public sf::Drawable, public sf::Transformable
{
public:

    // add functions to play with the entity's geometry / colors / texturing...

private:

    virtual void draw(sf::RenderTarget& target, sf::RenderStates states) const
    {
        // apply the entity's transform -- combine it with the one that was passed by the caller
        states.transform *= getTransform(); // getTransform() is defined by sf::Transformable

        // apply the texture
        states.texture = &m_texture;

        // you may also override states.shader or states.blendMode if you want

        // draw the vertex array
        target.draw(m_vertices, states);
    }

    sf::VertexArray m_vertices;
    sf::Texture m_texture;
};
```


### ===🗝 Example: tile map
- https://www.sfml-dev.org/tutorials/2.5/graphics-vertex-array.php#example-tile-map

官方文档提供了一个 Tile map 瓦片地图示范，它将整个地图将包含在一个顶点数组中，可以一次性将顶点传递到 GPU 内存中，因此绘制速度将非常快。请注意，只有当整个地图只使用单个纹理时，我们才能应用此策略。否则，每个纹理必须至少使用一个顶点数组。

纹理图片即 Tileset 中定义了四种地图元素，草地、水面、树木、岩石，也叫瓦片 Tile，尺寸为 32x32 像素，对应一个四边形 sf::Quads。通过 TileMap 的 load() 函数装入纹理，并设置好顶点数组及纹理坐标，width 和 height 表示地图容纳的瓦片数量。

瓦片地图根据载入的地图数据标记来决定对应的位置要绘制什么地图元素，代码中用 level 二维数组表示游戏关卡对应的地图，每个关卡对应一张地图，即一个一维数组。

```cpp
class TileMap : public sf::Drawable, public sf::Transformable
{
public:

    bool load(const std::string& tileset, sf::Vector2u tileSize, const int* tiles, unsigned int width, unsigned int height)
    {
        // load the tileset texture
        if (!m_tileset.loadFromFile(tileset))
            return false;

        // resize the vertex array to fit the level size
        m_vertices.setPrimitiveType(sf::Quads);
        m_vertices.resize(width * height * 4);

        // populate the vertex array, with one quad per tile
        for (unsigned int i = 0; i < width; ++i)
            for (unsigned int j = 0; j < height; ++j)
            {
                // get the current tile number
                int tileNumber = tiles[i + j * width];

                // find its position in the tileset texture
                int tu = tileNumber % (m_tileset.getSize().x / tileSize.x);
                int tv = tileNumber / (m_tileset.getSize().x / tileSize.x);

                // get a pointer to the current tile's quad
                sf::Vertex* quad = &m_vertices[(i + j * width) * 4];

                // define its 4 corners
                quad[0].position = sf::Vector2f(i * tileSize.x, j * tileSize.y);
                quad[1].position = sf::Vector2f((i + 1) * tileSize.x, j * tileSize.y);
                quad[2].position = sf::Vector2f((i + 1) * tileSize.x, (j + 1) * tileSize.y);
                quad[3].position = sf::Vector2f(i * tileSize.x, (j + 1) * tileSize.y);

                // define its 4 texture coordinates
                quad[0].texCoords = sf::Vector2f(tu * tileSize.x, tv * tileSize.y);
                quad[1].texCoords = sf::Vector2f((tu + 1) * tileSize.x, tv * tileSize.y);
                quad[2].texCoords = sf::Vector2f((tu + 1) * tileSize.x, (tv + 1) * tileSize.y);
                quad[3].texCoords = sf::Vector2f(tu * tileSize.x, (tv + 1) * tileSize.y);
            }

        return true;
    }

private:

    virtual void draw(sf::RenderTarget& target, sf::RenderStates states) const
    {
        // apply the transform
        states.transform *= getTransform();

        // apply the tileset texture
        states.texture = &m_tileset;

        // draw the vertex array
        target.draw(m_vertices, states);
    }

    sf::VertexArray m_vertices;
    sf::Texture m_tileset;
};
```

使用 Tilemap 绘制地图：

```cpp
int main()
{
    // create the window
    sf::RenderWindow window(sf::VideoMode(512, 256), "Tilemap");

    // define the level with an array of tile indices
    const int level[] =
    {
        0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,
        0, 1, 0, 0, 2, 0, 3, 3, 3, 0, 1, 1, 1, 0, 0, 0,
        0, 1, 1, 0, 3, 3, 3, 0, 0, 0, 1, 1, 1, 2, 0, 0,
        0, 0, 1, 0, 3, 0, 2, 2, 0, 0, 1, 1, 1, 1, 2, 0,
        2, 0, 1, 0, 3, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 1, 0, 3, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1,
    };

    // create the tilemap from the level definition
    TileMap map;
    if (!map.load("tileset.png", sf::Vector2u(32, 32), level, 16, 8))
        return -1;

    // run the main loop
    while (window.isOpen())
    {
        // handle events
        sf::Event event;
        while (window.pollEvent(event))
        {
            if(event.type == sf::Event::Closed)
                window.close();
        }

        // draw the map
        window.clear();
        window.draw(map);
        window.display();
    }

    return 0;
}
```

### ===🗝 Example: particle system
- https://www.sfml-dev.org/tutorials/2.5/graphics-vertex-array.php#example-particle-system

SFML 文档提供的第二个例子是实现简单的粒子系统，没有使用纹理，并且只有最少量的属性，目的是演示动态顶点数组及 sf::Points 图元的使用。

发射器 Emitter 简化为一个坐标，只管从这个坐标发射粒子。粒子简化到只有速度 velocity 和生命周期 lifetime，这两个属性决定生成的粒子往什么方向移动，以及会生存多长时间。

粒子系统类的主要方法就是以下三个：

- update 根据 sf::Clock 时间消逝更新粒子状态，比如修改生存时间和位置，重置消逝的粒子；
- draw 绘制粒子图像；
- resetParticle 重置粒子；

根据 C++ 访问控制与友元规则，粒子系统类将接口方法 draw 重新定义为私有成员防止被外部代码访问，但是因为基类 Drawable 声明了 RenderTarget 为码元类，可以私有成员可以被它访问。

主程序中，使用了鼠标设备，并将鼠标坐标转换到窗口的像素位置：

    sf::Vector2i mouse = sf::Mouse::getPosition(window);
    particles.setEmitter(window.mapPixelToCoords(mouse));


```cpp
class ParticleSystem : public sf::Drawable, public sf::Transformable
{
public:

    ParticleSystem(unsigned int count) :
    m_particles(count),
    m_vertices(sf::Points, count),
    m_lifetime(sf::seconds(3.f)),
    m_emitter(0.f, 0.f)
    {
    }

    void setEmitter(sf::Vector2f position)
    {
        m_emitter = position;
    }

    void update(sf::Time elapsed)
    {
        for (std::size_t i = 0; i < m_particles.size(); ++i)
        {
            // update the particle lifetime
            Particle& p = m_particles[i];
            p.lifetime -= elapsed;

            // if the particle is dead, respawn it
            if (p.lifetime <= sf::Time::Zero)
                resetParticle(i);

            // update the position of the corresponding vertex
            m_vertices[i].position += p.velocity * elapsed.asSeconds();

            // update the alpha (transparency) of the particle according to its lifetime
            float ratio = p.lifetime.asSeconds() / m_lifetime.asSeconds();
            m_vertices[i].color.a = static_cast<sf::Uint8>(ratio * 255);
        }
    }

private:

    virtual void draw(sf::RenderTarget& target, sf::RenderStates states) const
    {
        // apply the transform
        states.transform *= getTransform();

        // our particles don't use a texture
        states.texture = NULL;

        // draw the vertex array
        target.draw(m_vertices, states);
    }

private:

    struct Particle
    {
        sf::Vector2f velocity;
        sf::Time lifetime;
    };

    void resetParticle(std::size_t index)
    {
        // give a random velocity and lifetime to the particle
        float angle = (std::rand() % 360) * 3.14f / 180.f;
        float speed = (std::rand() % 50) + 50.f;
        m_particles[index].velocity = sf::Vector2f(std::cos(angle) * speed, std::sin(angle) * speed);
        m_particles[index].lifetime = sf::milliseconds((std::rand() % 2000) + 1000);

        // reset the position of the corresponding vertex
        m_vertices[index].position = m_emitter;
    }

    std::vector<Particle> m_particles;
    sf::VertexArray m_vertices;
    sf::Time m_lifetime;
    sf::Vector2f m_emitter;
};
```

使用粒子：

```cpp
int main()
{
    // create the window
    sf::RenderWindow window(sf::VideoMode(512, 256), "Particles");

    // create the particle system
    ParticleSystem particles(1000);

    // create a clock to track the elapsed time
    sf::Clock clock;

    // run the main loop
    while (window.isOpen())
    {
        // handle events
        sf::Event event;
        while (window.pollEvent(event))
        {
            if(event.type == sf::Event::Closed)
                window.close();
        }

        // make the particle system emitter follow the mouse
        sf::Vector2i mouse = sf::Mouse::getPosition(window);
        particles.setEmitter(window.mapPixelToCoords(mouse));

        // update it
        sf::Time elapsed = clock.restart();
        particles.update(elapsed);

        // draw it
        window.clear();
        window.draw(particles);
        window.display();
    }

    return 0;
}
```


### ===🗝 Position, rotation, scale: transforming entities

所有 SFML 图形类 (sprites, text, shapes) 都可以进行变换，因为都实现了 sf::Transformable 接口。接口提供 move, rotate 和 scale 等简单方法，它们可以解决大量功能需要，更复杂的变换就需要使用 3D 透视变换。

sf::Transformable 子类都有 position, rotation, scale 和 origin 属性，通过相应的 getters & setters 进行访问。设置这些属性会标记变换已经改变 NeedUpdate，等待渲染时通过 getTransform() 函数来处理并返回最终的矩阵变换对象：

```cpp
const Transform& Transformable::getTransform() const
{
    // Recompute the combined transform if needed
    if (m_transformNeedUpdate)
    {
        float angle  = -m_rotation * 3.141592654f / 180.f;
        float cosine = static_cast<float>(std::cos(angle));
        float sine   = static_cast<float>(std::sin(angle));
        float sxc    = m_scale.x * cosine;
        float syc    = m_scale.y * cosine;
        float sxs    = m_scale.x * sine;
        float sys    = m_scale.y * sine;
        float tx     = -m_origin.x * sxc - m_origin.y * sys + m_position.x;
        float ty     =  m_origin.x * sxs - m_origin.y * syc + m_position.y;

        m_transform = Transform( sxc, sys, tx,
                                -sxs, syc, ty,
                                 0.f, 0.f, 1.f);
        m_transformNeedUpdate = false;
    }

    return m_transform;
}
```

在 RenderTarget 的 draw() 执行时，就会调用实体的 draw 方法来根据更新绘图。实体会获取自身的变换并应用到传入的 RenderStates 对象上，这个对象本身提供的是 0 变换矩阵，即单位矩阵，不会产生变换效果：

```cpp
void Sprite::draw(RenderTarget& target, RenderStates states) const
{
    if (m_texture)
    {
        states.transform *= getTransform();
        states.texture = m_texture;
        target.draw(m_vertices, 4, TriangleStrip, states);
    }
}
```

Position 是 2D 世界的坐标位置，默认相对于左上角，右下角为正向，可以使用 origin 修改：

```cpp
// 'entity' can be a sf::Sprite, a sf::Text, a sf::Shape or any other transformable class

// set the absolute position of the entity
entity.setPosition(10.f, 50.f);

// move the entity relatively to its current position
entity.move(5.f, 5.f);

// retrieve the absolute position of the entity
sf::Vector2f position = entity.getPosition(); // = (15, 55)
```

Rotation 是 2D 世界中的朝向，使用度数为单位，顺时针为正向，因为 SFML 定义 Y 轴向下，X 轴向右。

```cpp
// 'entity' can be a sf::Sprite, a sf::Text, a sf::Shape or any other transformable class

// set the absolute rotation of the entity
entity.setRotation(45.f);

// rotate the entity relatively to its current orientation
entity.rotate(10.f);

// retrieve the absolute rotation of the entity
float rotation = entity.getRotation(); // = 55
```

返回角度值范围在 [0, 360)，与位置一样，默认情况下围绕左上角执行旋转，也可以通过设置原点进行更改。

Scale 缩放系数用来调整大小，默认值为 1，允许负值产生镜像效果。

```cpp
// 'entity' can be a sf::Sprite, a sf::Text, a sf::Shape or any other transformable class

// set the absolute scale of the entity
entity.setScale(4.f, 1.6f);

// scale the entity relatively to its current scale
entity.scale(0.5f, 0.5f);

// retrieve the absolute scale of the entity
sf::Vector2f scale = entity.getScale(); // = (2, 0.8)
```

图形绘制过程中涉及坐标系统变换问题，首先图像文件中本身就存在一个相当抽象坐标，即像素数据的保存和读取顺序。在内存中的图像其实和文件中的图像类似，要将图像绘制到屏幕上，就需要一个对应的转换关系。想象一下，一张图片，假定左上角为原点，右下角为正方向。将其绘制到坐标方向相同的屏幕上，就会从屏幕的左上角往右下角铺像素，直到图像数据完全处理完。

原点 Origin 是移动、旋转、缩放等变换操作的参考点，默认是将图像原点 Point(0, 0) 绘制到屏幕的左上角。

为了简化，三种变换操作都使用同一个原点，修改原点会影响对象绘制的位置。

修改原点后，比如以下代码片段，setOrigin(10.f, 20.f) 执行后，图像坐标系统中 Point(10, 20) 的内容会被绘制到屏幕左上角，也就是平称变换。

但是这个平移和执行 setPosition 的平称是有区别的，那就是改变了参考点。原本旋转和缩放的参考点是 Point(0, 0)，现在变成按图像的 Point(10, 20) 进行变换操作。在屏幕上看起来就是，由原先的位置向左上角移动了 Vector(-10, -20) 这么多位移。假如图像大小是 20 x 40 像素，那么参考占刚好就是图像的中心位置，按对称中心进行旋转或缩放。

对于旋转或缩放，在未设置原点即原点为 Point(0,0)，移动对象后按新的旋转或缩放中心就是 Position 的偏移量，如果 Origin 设置了值就相加得到新的旋转中心。

```cpp
// 'entity' can be a sf::Sprite, a sf::Text, a sf::Shape or any other transformable class

// set the origin of the entity
entity.setOrigin(10.f, 20.f);
entity.setOrigin(sf::Vector2f(10, 20));

// retrieve the origin of the entity
sf::Vector2f origin = entity.getOrigin(); // = (10, 20)
```

可以自定义继承 sf::Transformable 接口的子类：

```cpp
class MyGraphicalEntity : public sf::Transformable
{
    // ...
};

MyGraphicalEntity entity;
entity.setPosition(10.f, 30.f);
entity.setRotation(110.f);
entity.setScale(0.5f, 0.2f);
```

调用 getTransform() 函数返回一个仿射变换矩阵对象 sf:：Transform，最终变换就是根据它来操作，这需要一点线性代数知识，或者计算机图形学基础。

sf::Transformable 它不是抽象的，因此可以实例化它，或将其用作基类。如果您不需要/不想要此接口提供的完整功能集，请毫不犹豫地将其作为成员使用，并基于它提供您自己的功能。

sf::Transformable 接口类容易使用，但功能也有限，各个变换属性是独立互不影响的。

如果需要更有弹性的变换，比如需要将最终转换指定为单个转换的自定义组合。可以使用较低级别的类 sf::Transform，它只不过是一个 3x3 矩阵，所以它可以表示 2D 空间中的任何变换。

有多种方式构造 sf::Transform：

- 通过预定义的变换函数 (translation, rotation, scale)；
- 将多个 Transform 运算结合在一起；
- 直接指定矩阵的 9 元素；

示范：

```cpp
// the identity transform (does nothing)
sf::Transform t1 = sf::Transform::Identity;

// a rotation transform
sf::Transform t2;
t2.rotate(45.f);

// a custom matrix
sf::Transform t3(2.f, 0.f, 20.f,
                 0.f, 1.f, 50.f,
                 0.f, 0.f, 1.f);

// a combined transform
sf::Transform t4 = t1 * t2 * t3;
```

也可以对现一个变换矩阵应用多个变换操作，按顺序逆向操作又可以还原：

```cpp
sf::Transform t;
t.translate(10.f, 100.f);
t.rotate(90.f);
t.translate(-10.f, 50.f);
t.scale(0.5f, 0.75f);
```

回到前面的问题，要将自定义的变换矩阵应用图形的绘画，只需要将其传递给 draw 方法：

```cpp
window.draw(entity, transform);
// ... which is in fact a short-cut for:
// sf::RenderStates states;
// states.transform = transform;
// window.draw(entity, states);
```

对于 sf::Transformable (sprite, text, shape)，本身包含了变换矩阵，会和传入的变换矩阵组合。

除了变换，下一个功能需求可能是碰撞检测，SFML 只提供最简单的 Bounding Box。sf::Rect 类提供了最简单的矩阵区域的检测，有 *IntRect* 和 *FloatRect* 两个子类，只有 left/top/width/height 四个属性，和以下四个检测方法：

```cpp
bool contains(T x, T y) const;
bool contains(const Vector2<T>& point) const;
bool intersects(const Rect<T>& rectangle) const;
bool intersects(const Rect<T>& rectangle, Rect<T>& intersection) const;
```

使用示范：

```cpp
// get the bounding box of the entity
sf::FloatRect boundingBox = entity.getGlobalBounds();

// check collision with a point
sf::Vector2f point = ...;
if (boundingBox.contains(point))
{
    // collision!
}

// check collision with another box (like the bounding box of another entity)
sf::FloatRect otherBox = ...;
if (boundingBox.intersects(otherBox))
{
    // collision!
}
```

注意 *getGlobalBounds* 方法，这是因为使用全局坐标系统，在对象应用变换(position, rotation, scale)后产生的全局坐标。使用 *getLocalBounds* 方法可以获取对象应用变换前的 Bounding Box，可以用来获取对象原始大小。

基于前面的变换，可以很容易地实现对象的层次结构，Object hierarchies (scene graph)。其中子对象相对于其父对象进行变换，所要做的就是在绘制它们时将组合变换从父对象传递到子对象，一直传递到最终的可绘制实体（精灵、文本、形状、顶点数组或您自己的可绘制对象）。

```cpp
// the abstract base class
class Node
{
public:

    // ... functions to transform the node

    // ... functions to manage the node's children

    void draw(sf::RenderTarget& target, const sf::Transform& parentTransform) const
    {
        // combine the parent transform with the node's one
        sf::Transform combinedTransform = parentTransform * m_transform;

        // let the node draw itself
        onDraw(target, combinedTransform);

        // draw its children
        for (std::size_t i = 0; i < m_children.size(); ++i)
            m_children[i]->draw(target, combinedTransform);
    }

private:

    virtual void onDraw(sf::RenderTarget& target, const sf::Transform& transform) const = 0;

    sf::Transform m_transform;
    std::vector<Node*> m_children;
};

// a simple derived class: a node that draws a sprite
class SpriteNode : public Node
{
public:

    // .. functions to define the sprite

private:

    virtual void onDraw(sf::RenderTarget& target, const sf::Transform& transform) const
    {
        target.draw(m_sprite, transform);
    }

    sf::Sprite m_sprite;
};
```



### ===🗝 Shaders 着色器与特效
- Adding special effects with shaders https://www.sfml-dev.org/tutorials/2.5/graphics-shader.php
- GLSL - Shaders Language https://github.com/jimboyeah/spine-sfml-demo/blob/master/SFML-tuorials-glsl.md

本节将只关注 SFML 特定部分：加载和应用着色器，而不是编写它们。

您还必须学习如何编写 GLSL 程序，并找到好的教程和示例来开始。要了解着色器的功能以及如何有效地使用它们，了解渲染管道的基础知识非常重要。可以查看 SFML SDK 附带的“着色器”示例，这个示例提供了效果实现，波浪、像素化、边缘后期处理、几何着色器等效果：

```cpp
// Create the effects
std::vector<Effect*> effects;
effects.push_back(new Pixelate);
effects.push_back(new WaveBlur);
effects.push_back(new StormBlink);
effects.push_back(new Edge);
effects.push_back(new Geometry);
```

效果器对象是一个 Drawable 和 Transformable 接口的实现，

根据着色器程序的作用范围不同，分成各种类型，SFML 2.5.1 提供了以下三种着色器类型，Shader 类的各种加载方法都提供了重载方式来加载各种着色器：

```cpp
enum Type
{
    Vertex,   ///< %Vertex shader
    Geometry, ///< Geometry shader
    Fragment  ///< Fragment (pixel) shader
};
```

在调用 window.draw() 函数后，就会执行绘图命令，数据进入渲染管线，并先执行顶点着色器。

顶点着色器 Vertex shaders 会为每个顶点运行，而片断着色器 fragment shaders 会为每个片断运行，片断由像素构成。根据需要使用，可以单独，也可以同时使用这些着色器。

以 *loadFromMemory()* 原型为参考，*loadFromFile()*, *loadFromStream()* 类似，只是着色器程序代码来源不同，可以是在内存中的字符保存着色器代码，也可以保存在 .vert, .frag, .gert 等文件中，当然扩展名不是必需的：

```cpp
bool loadFromMemory(const std::string& shader, Type type);
bool loadFromMemory(const std::string& vertexShader, const std::string& fragmentShader);
bool loadFromMemory(const std::string& vertexShader, const std::string& geometryShader, const std::string& fragmentShader);

if (!sf::Shader::isAvailable())
{
    // shaders are not available...
}

// load only the vertex shader
if (!shader.loadFromMemory(vertexShader, sf::Shader::Vertex))
{
    // error...
}

// load only the fragment shader
if (!shader.loadFromMemory(fragmentShader, sf::Shader::Fragment))
{
    // error...
}

// load both shaders
if (!shader.loadFromMemory(vertexShader, fragmentShader))
{
    // error...
}
```

本教程将只关注 SFML 特定部分：加载和应用着色器，而不是编写着色器程序。

可以将以下提供的着色器程序保存到相应的文件并通过 Shader 的 *loadFromFile()* 函数加载，也可以直接在 C/C++ 代码中使用字符串保存，然后通过 *loadFromMemory()* 加载。

SFML sf::Shader 提供 *setUniform()*，*setUniformArray()* 等方法来给着色器程序设置各种变量。

```cpp
/// uniform sampler2D the_texture; // this is the variable in the shader
shader.setUniform("the_texture", texture);
```

注意： setParameter 已标记为过时方法，使用 *setUniform()* 替代。

注意：GLSL 编译器会优化那些没有使用的变量，即没有参与最终顶点或像素计算的变量会被移除，调用 *setUniform()* 就可能出现变量找不到的错误。

SFML 使用 sf::Vertex 类结构表达渲染管道中的顶点数据：

```cpp
class SFML_GRAPHICS_API Vertex
{
public:
    Vector2f  position;  ///< 2D position of the vertex
    Color     color;     ///< Color of the vertex
    Vector2f  texCoords; ///< Coordinates of the texture's pixel to map to the vertex
};
```

包括 2D 坐标、颜色、2D 纹理坐标，对应顶点颜色器中的内置变量：

|   Type   |   Member  |      Built-in     |
|----------|-----------|-------------------|
| Vector2f | position  | gl_Vertex         |
| Color    | color     | gl_Color          |
| Vector2f | texCoords | gl_MultiTexCoord0 |

着色器内置变量不用定义，可以直接在颜色器程序中使用。

以下提供两个最基本的顶点着色器和片段着色器作为参考：

```c glsl
// Vertex shader
void main()                                                    
{                                                              
    // transform the vertex position                           
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;    
                                                               
    // transform the texture coordinates                       
    gl_TexCoord[0] = gl_TextureMatrix[0] * gl_MultiTexCoord0;  
                                                               
    // forward the vertex color                                
    gl_FrontColor = gl_Color;                                  
}                                                              

// Fragment shader
uniform sampler2D uTexture;                                    
                                                               
void main()                                                    
{                                                              
    // lookup the pixel in the texture                         
    vec4 pixel = texture2D(uTexture, gl_TexCoord[0].xy);       
                                                               
    // multiply it by the color                                
    gl_FragColor = gl_Color * pixel;                           
}                                                              
```

顶点位置通常需要通过模型的视图及投影矩阵变换，ModelViewProjectionMatrix 意思就是将三个变换效果叠加起来  Model * View * Projection，使它根据观察者视角来投影到在屏幕对应的 2D 空间上。同样纹理坐标也需要经过纹理矩阵的变换，SFML 根据线性代数原理实现了这些变换。而颜色，通常不需要怎么处理，直接发送到一下渲染工序。

所有这些变量都将通过图形卡在图元上进行插值，再传递给片段着色器。所谓插值，就是在现有关键数据上，补充中间缺失部分。比如，两点间的颜色插值是最常见的。因为两个顶点只能指定两个颜色，但是两点之间可能涉及很多像素，它们是什么颜色就需要根据两点的颜色来渐变，也就是颜色插值。

上面的片段着色器功能也是简单地接收纹理坐标和前面渲染流程输出片段的颜色，这里没有顶点的坐标要处理了，显卡已经处理好顶点坐标与光栅像素的位置关系。但是，如果处理纹理实体，还需要使用当前纹理。

前面介绍顶点数组的时候，已经展示过 *draw()* 方法可以接收多种参数。

RenderWindow 父类 RenderTarget 提供了以下 draw 函数重载形式，除了可以绘制基本的 Drawable 接口类，还有顶点数组和顶点缓冲对象：

```cpp
// from SFML 2.4.1
void draw(const Drawable& drawable, const RenderStates& states = RenderStates::Default);
void draw(const Vertex* vertices, std::size_t vertexCount,
          PrimitiveType type, const RenderStates& states = RenderStates::Default);

// from SFML 2.5.1
void draw(const VertexBuffer& vertexBuffer, const RenderStates& states = RenderStates::Default);
void draw(const VertexBuffer& vertexBuffer, std::size_t firstVertex, std::size_t vertexCount, const RenderStates& states = RenderStates::Default);
```

但是在调用它的时候注意，其第二参数基本是一个 RenderState 对象，根据 C++ 的转换构造函数(conversion constructor function) 的作用，可以往 *draw()* 方法第二个参数传递任何可以调用 RenderState 构造函数的参数类型，编译器会自动构造一个 RednerState 对象。

当一个构造函数只有一个参数，而且该参数又不是本类的 const 引用时，这种构造函数称为转换构造函数。

隐式转型是非常易容让人困惑的特性，编译器知道函数参数需要一个什么对象，并且可以通过现有的数据构造一个，所以编译器选择自动调用构造函数来构造出 *draw()* 函数需要的参数类型。

```cpp
RenderStates(const BlendMode& theBlendMode);
RenderStates(const Transform& theTransform);
RenderStates(const Texture* theTexture);
RenderStates(const Shader* theShader);
```

或者主动实例化并设置相关的变换混合模式、矩阵、纹理、着色器：

```cpp
sf::RenderStates states;
states.shader = &shader;
states.texture = &texture;
states.transform *= transform;
window.draw(vertices, states);
```

这里有个问题，既然纹理对象通过 Shader 输入，那么通过以下方式设置纹理对象还有什么意义？

```cpp
shader.setUniform("uTexture", texture);
```

当前的纹理不是自动更新的，但每个实体可以有自己的纹理，更坏的是可能没有途径给着色器传递指定纹理。SFML 提供了一个特殊的 *setUniform* 重载方法来解决这个问题：

```cpp
shader.setUniform("uTexture", sf::Shader::CurrentTexture)
```

这个特殊的参数，*CurrentTexture* 告诉 SFML 将当前绘制的实例的纹理设置到着色器程序对应的变量上。每当绘制新实体时，SFML 会自动更新着色器对应的纹理变量。

在 OpenGL 中纹理绘制是很繁琐的操作，大概使用流程：

- 生成纹理 ID glGenTextures
- 创建纹理对象 glBindTexture
- 指定纹理内容 glTexImage1D/2D/3D;
- 指定纹理属性 glTexParameter
- 激活纹理功能 glBindTexture
- 提供纹理坐标 glTexCoord

可以将 sf::Shader 作为 OpenGL 中的着色器程序对象的包装器，使用 bind() 绑定着色器程序到 OpenGL 上下文，并在 OpenGL 命令中使用它来绘制图形实体，等效使用 *glUseProgram()* 命令：

```cpp
sf::Shader shader;
...
// bind the shader
sf::Shader::bind(&shader);

// draw your OpenGL entity here...

// bind no shader
sf::Shader::bind(NULL);
```

### ===🗝 AssetManager
- SFML Essentials: A fast-paced, practical guide to building functionally enriched 2D games using the core concepts of SFML

RenderTarget 和着色器这一类对象有个特点，就是不能复制，是系统模块的 *NonCopyable* 接口的子类。类似的还有 *GlResource*，Texture 是其子类。不可复制，意味着不能调用它的默认构造函数，默认拷贝构造函数，也不能使用赋值运算符。

在实现资源管理器的时候，就会使用指针来管理着色器，而不能使用引用。因为，使用引用的方式，在获取着色器时，管理器就要让出所有权，否则就会出现调用已删除的复制构造器等错误：

```sh
error C2280: “sf::Shader::Shader(const sf::Shader &)”: 尝试引用已删除的函数
note: “sf::Shader::Shader(const sf::Shader &)”: 由于基类调用已删除或不可访问的函数“sf::NonCopyable::NonCopyable(const sf::NonCopyable &)”，因此已隐式删除函数
```



### ===🗝 Controlling the 2D camera with views
- Controlling the 2D camera with views https://www.sfml-dev.org/tutorials/2.5/graphics-view.php

通常，一个游戏的关卡只是 2D 世界的一个局部，关卡比游戏抽象世界还大的情况少见，特别是角色扮演游戏 RPG。

窗口可以看作一个视图，它显示的只是 2D 世界的一个局部，通过改变视图就可以窗口显示的内容，但 2D 世界并没有改变。

SFML 提供 *sf::View* 类作为视图的封装：

```C++
// create a view with the rectangular area of the 2D world to show
sf::View view1(sf::FloatRect(200.f, 200.f, 300.f, 200.f));

// create a view with its center and size
sf::View view2(sf::Vector2f(350.f, 300.f), sf::Vector2f(300.f, 200.f));

sf::View view1;
view1.reset(sf::FloatRect(200.f, 200.f, 300.f, 200.f));

sf::View view2;
view2.setCenter(sf::Vector2f(350.f, 300.f));
view2.setSize(sf::Vector2f(200.f, 200.f));
```

定义一个视图的几种方式：

- 使用 FloatRect 为构造器指定一个矩形；
- 使用两个向量为构造器指定一个矩形；
- 先定义一个视图实例，在后续执行 reset()、setCenter()、setSize() 等方法定义视图区域；

定义好视图，就可以对视图进行 translated/rotated/scaled 等仿射变换，改变 2D 世界在窗口界面显示的外观。

和精灵、形状使用左上角作为位置的定义参考不同，移动、旋转、缩放视图始终使用中心点作参考：

```C++
// move the view at point (200, 200)
view.setCenter(200.f, 200.f);
// move the view by an offset of (100, 100) (so its final position is (300, 300))
view.move(100.f, 100.f);

// rotate the view at 20 degrees
view.setRotation(20.f);
// rotate the view by 5 degrees relatively to its current orientation (so its final orientation is 25 degrees)
view.rotate(5.f);

// resize the view to show a 1200x800 area (we see a bigger area, so this is a zoom out)
view.setSize(1200.f, 800.f);
// zoom the view relatively to its current size (apply a factor 0.5, so its final size is 600x400)
view.zoom(0.5f);
```

这些方法操作的只是变换矩阵中相应的数据，通过 *getTransform()* 执行、获取最终变换矩阵。

在单机多人游戏中，还可能需要对窗口进行多视口分割，或者需要一个小地图功能 mini-map，就需要使用 *setViewport()* 方法。

```C++
// define a centered viewport, with half the size of the window
view.setViewport(sf::FloatRect(0.25f, 0.25, 0.5f, 0.5f));

// player 1 (left side of the screen)
// player 2 (right side of the screen)
player1View.setViewport(sf::FloatRect(0.f, 0.f, 0.5f, 1.f));
player2View.setViewport(sf::FloatRect(0.5f, 0.f, 0.5f, 1.f));

// the game view (full window)
// mini-map (upper-right corner)
gameView.setViewport(sf::FloatRect(0.f, 0.f, 1.f, 1.f));
miniView.setViewport(sf::FloatRect(0.75f, 0.f, 0.25f, 0.25f));
```

窗口中容纳视图的区域就称为视口，Viewport，注意，它使用窗口尺寸的比例而不是像素作单位。

默认情况下，SFML RenderTarget 会按窗口大小 1:1 显示内容，如果窗口大小可以调整，那么所有内容都会按比例缩放，squeezed/stretched，以铺满窗口。

如果要基于默认视图创建新视图，可以使用 *getDefaultView()* 获取它。

```C++
// create a view half the size of the default view
sf::View view = window.getDefaultView();
view.zoom(0.5f);
// let's define a view
// sf::View view(sf::FloatRect(0.f, 0.f, 1000.f, 600.f));
window.setView(view);

// restore the default view
window.setView(window.getDefaultView());

// draw something to that view
window.draw(some_sprite);

// want to do visibility checks? retrieve the view
sf::View currentView = window.getView();
```

通过 sf::RenderWindow or sf::RenderTexture 提供的 *setView()* 方法指定渲染目标要使用的视图，并且在后续步骤进行绘制操作。设置视图后，它一直有效，直到重新设置另外的视图。因为视图对象本身就是一些浮点值，RenderTarget 对象内部会对其进行拷贝，这并不消耗什么时间。所以，要改变视图就需要重要调用设置方法，而不能直接通过视图实例进行操作。

如果要根据窗口大小变化来显示更多或更少的内容，就需要在窗口的 Resized 事件中更新视图设置：

```C++
// the event loop
sf::Event event;
while (window.pollEvent(event))
{
    // catch the resize events
    if (event.type == sf::Event::Resized)
    {
        // update the view to the new size of the window
        sf::FloatRect visibleArea(0.f, 0.f, event.size.width, event.size.height);
        window.setView(sf::View(visibleArea));
    }
}
```

在窗口中的操作是基于像素的，而游戏中的抽象世界使用的是坐标系统，比如点击窗口像素 (10, 50) 可能对应的是抽象世界的 point (26.5, -84)。

这两者的关系转换需要使用 RenderTarget 提供的以下方法：

```C++
// Prototypes
Vector2f mapPixelToCoords(const Vector2i& point) const;
Vector2f mapPixelToCoords(const Vector2i& point, const View& view) const;
Vector2i mapCoordsToPixel(const Vector2f& point) const;
Vector2i mapCoordsToPixel(const Vector2f& point, const View& view) const;

// get the current mouse position in the window
sf::Vector2i pixelPos = sf::Mouse::getPosition(window);

// convert it to world coordinates
sf::Vector2f worldPos = window.mapPixelToCoords(pixelPos);
```

如果，不是按当前设置的视图进行坐标转换，可以在第二个参数中指定一个视图。


## ==⚡ Audio Module
- Fourier Transform: maps image into spatial frequency domain https://homepages.inf.ed.ac.uk/rbf/HIPR2/fourier.htm
- Fourier transforms of images by Rachel Thomas https://plus.maths.org/content/fourier-transforms-images
- Essential MATLAB for Engineers and Scientists by Brian D. Hahn Daniel T Valentine
- Signal Processing Algorithms in MATLAB by Samuel D. Stearns, Ruth A. David
- Signals and Systems Using MATLAB by Luis F. Chaparro, Aydin Akan
- Signals & Systems by Alan V. Oppenheim, Alan S. Willsky, S. Hamid Nawab
- Digital Signal Processing A Practical Guide for Engineers and Scientists by Steven Smith
- Digital Signal Processing, Fourth Edition by John G. Proakis, Dimitris K. Manolakis
- Understanding Digital Signal Processing by Richard G. Lyons
- Discrete-time signal processing by Buck, John R.Oppenheim, Alan V.Schafer, Ronald W
- A Student’s Guide to Fourier Transforms with Applications in Physics and Engineering

这里补充一点数字信号处理方面的知识，关于信号处理方面的专业书籍 CT IEEE Signal Processing Society 上有一个书单。并且在线提供了 Matlab、Mathematica 两个专业软件的手册：

- MATLAB Manual: Getting started with MATLAB.
- Mathematica Manual: Getting started with Mathematica.

在信号处理领域，*时域* Time Domain 和*频域* Frequency Domain 是两个非常基础的概念，它们也是两种观察信息的角度。

图像或音频处理 Audio Process 等数字信号处理中，Fourier Analysis 是一种常用方法，这套分析方法来自 18 世界的法国数学家 Joseph Fourier。使用傅里叶变换，可以用时域、频域的观点去观察一个声音。

对于一个信号来说，它有很多方面的特性。如信号强度随时间的变化规律（时域特性），信号是由哪些单一频率的信号合成的（频域特性）

音频信号和图像信号没有本质区别，像素的颜色值和音频采样值都是数值信息，只不过前者是一维信号，而图像是二维信号。它们都可以使用多个三角函数分量表达，这很具有神秘感，但对于数学家来说，这是非常明显的事。

Fourier transforms of images by Rachel Thomas 是很棒的傅里叶变换图像处理入门教程，使用了 Matlab 作为分析工具。也可以借助 Python 的 matplotlib 图形库，查看傅里叶变换图像处理效果。还有 Robert Bob Fisher 教授的  HIPR2: Hypertext Image Processing Reference 也是不错的在线图像处理方面的参考教材。


### ===🗝 Playing sounds and music
- Playing sounds and music https://www.sfml-dev.org/tutorials/2.5/audio-sounds.php
- https://indiegamedev.net/2020/02/15/the-complete-guide-to-openal-with-c-part-1-playing-a-sound/
- OpenAL Programmers Guide https://www.openal.org/documentation/OpenAL_Programmers_Guide.pdf
- OpenAL 1.1 Specification and Reference https://openal.org/documentation/openal-1.1-specification.pdf

游戏中有声音、音乐两个概念，它们都可以上喇叭响应起来，但还有些区别，SFML 提供相应的类型：

*sf::Sound* 是指枪声、谈话、脚本声等等，属于经量型、立即呈现的声音，加载声音数据到 *sf::SoundBuffer* 并进行播放。
*sf::Music* 是指音乐，通常按需要加载并进行播放，不会一次性完全加载到内存中，常用于播放长时间的 BGM。

Audio samples 声音的采样数据是 16-bit 带符号整数数组，保存在 SoundBuffer 对象的内存中。一个采样就是是声音信号在给定时间点的振幅，因此样本数组代表完整的声音。声音的通过扬声器表现，这真的非常奇妙，但却又简单，因为声音就是振动，包含不同频率的振动就具有不同的音色。

而基于采样的声音实质就是通过 ADC/DAC 转换器，在模拟量与数字量之间进行转换，模拟量是声音自然的呈现，数字量是声音的数字化存储手段。每个采样值只包含当下的声音震幅，但是所有采样播放出来时就还原了包含各种频率的复杂声音。

人类可以听到的声音频率在 20Hz  ~ 20,000 Hz，但是对 1KHz ~ 4KHz 最敏感。采样频率就是单位时间采样次数，1 秒钟采几个数据，采样要保持听觉范围的声音不失真，就需要大得多的频率进行采样。SFML 使用 16-bit 采样深度，一些高要求的还会使用 24 bits 采样深度，甚至是 32 bits 深度。

根据采样使用比率深度和采样频率，可以还原的水平也不一样，目前大多数系统都支持 16-bit 或 24-bit 采样深度，参考如下：

- 8-bit 红白机，视频游戏使用的音质；
- 16 bit 8,000 Hz - 基本电话人声音音质；
- 16 bit 11,025 Hz - AM 调幅广播所用采样率；
- 16 bit 22,050 Hz - 24,000 Hz - FM 调频广播所用采样率；
- 16 bit 32,000 Hz - miniDV 数码视频 camcorder、DAT (LP mode)所用采样率；
- 16 bit 44,100 Hz - CD 音质；
- 16 bit 47,250 Hz - 商用 PCM 录音机所用采样率；
- 16 bit 48,000 Hz - Dvd 音质；
- 16-bit 50,000 Hz - 商用数字录音机所用采样率；
- 16 bit 96,000 Hz - Studio 音质；
- 16 bit 192,000 Hz - 同上；
- 1 bit 2.8224 MHz - Direct Stream Digital (DSD) 1-bit delta-sigma analog-to-digital (A/D) converter

DSD（Direct Stream Digital）『直接比特流数字』 是 Sony 与 Philips 在 1996 年宣布共同发展的高解析数字音响规格，与 DVD 音响技术竞争，用 1 bit 取样，采样频率为 2.8224 MHz，相当于 64 倍 CD 44.1 kHz 取样频率，直接把模拟波形以脉冲方式转变为数字讯号，以将近四倍于 CD 的空间储存音乐。提供更为优秀的声音效果，由于取样频率高，所以波形很圆顺，比较接近原来的模拟波形。

采样使用的比特位越多，可还原的振幅就越细腻，使用的采样频率超高，可以还原的声音细节就越精细，同时声音存储的文件就越大。声道数据也会影响文件大小，常见的有单声道（Mono）和双声道（Stereo），高级系统中还有多声道系统。当然，文件的大小主要和存储格式有关，像 Wav 是无压缩的格式，占最大的存储空间。而 FLAC (Free Lossless Audio Coded) 免费无损压缩音频编解码器，最高可以将原始源文件压缩到 60% 水平，而不会丢失任何声音细节数据。作为开源且免版税的音频文件格式，大多数主要程序和设备都支持 FLAC，并且是 MP3 音乐的主要替代品。像 MP3 和 ogg 格式属于有损压缩，会丢失细节，后者完全免费、开放和没有专利限制，但普及性较差。

常见的声道配置：

- Mono 单声道；
- Stereo 双声道，最常见的类型，包含左声道、右声道；
- 2.1 声道，在双声道基础上加入一个低音声道；
- 5.1 声道，包含一个正面声道、左前方声道、右前方声道、左环绕声道、右环绕声道、一个低音声道，最早应用于早期的电影院；
- 7.1 声道，在 5.1 声道的基础上，把左右的环绕声道拆分为左右环绕声道以及左右后置声道，主要应用于 BD 以及现代的电影院；


SFML 声音模块中的 sf::Sound/sf::SoundBuffer 的组合，和图形模块中的 sf::Sprite/sf::Texture 组合，它们的一起工作的方式非常类似。

SFML 使用 OpenAL 接口规范与硬件进行交互，只支持基于采样的声音格式，目前支持 WAV, OGG/Vorbis 和 FLAC 等格式，因为许可证问题，不支持 MP3 格式。

```C++
#include <SFML/Audio.hpp>

int main()
{
    sf::SoundBuffer buffer;
    if (!buffer.loadFromFile("sound.wav"))
        return -1;

    ...

    return 0;
}
```

加载声音数据的方式除了 loadFromFile、loadFromMemory、loadFromStream，还多了一个采样加载方式，可以从 Int16 数组中获取声音采样数据，并且可以指定通道数和采样频率：

```C++
sf::SoundBuffer buffer;

// load something into the sound buffer...
bool loadFromSamples(const Int16* samples, Uint64 sampleCount, unsigned int channelCount, unsigned int sampleRate);

sf::Sound sound;
sound.setBuffer(buffer);
sound.play();
```

给 Sound 对象设置好声音数据后，就可以进行播放，并且可以将同一组数据设备到多个声音实例并进行播放。

Sounds 或 Music 播放是分开线程进行的，也就是说执行 *play()* 方法可以做其它的操作，除非主动执行 *stop()* 停止播放，或销毁声音数据。 


和 sf::Sound 不同，播放 sf::Music 时数据并不是预先加载的，而是随用随加载，所以音乐的加载方法使用的是 openFromFile、openFromMemory、openFromStream。

播放声音、音乐时，可以对其进行控制：

- *play()* 开始或恢复播放音乐；
- *pause()* 暂停播放；
- *stop()* 停止播放并倒带；
- *setPlayingOffset()* 改变播放位置；

```C++
sf::Music music;
if (!music.openFromFile("music.ogg"))
    return -1; // error
music.play();

// start playback
music.play();

// advance to 2 seconds
music.setPlayingOffset(sf::seconds(2.f));

// pause playback
music.pause();

// resume playback
music.play();

// stop playback and rewind
music.stop();

music.setPitch(1.2f);
music.setVolume(50.f);
music.setLoop(true);
```

使用 *getStatus()* 方法可以获取声音、音乐的播放状态，Stopped, Playing 或 Paused。

设置音调时，使用的参数是一个系数，大于 1 表示高于原调，小于 1 表示低于原调，1 则不改变。因为 SFML 是通过改变采样速率来改变音调的，会有副作用。如果使用傅里叶变换来提升音调则不会有这样的问题，参考 Pitch Shifting Using The Fourier Transform。

设置音量时，使用音量范围值在 0 (mute) ~ 100 (default)，所以默认播放时就是最响的状态。

设置循环 *setLoop(true)* 可以让声音、音乐一直循环播放下去。

还有更多属性可用于声音、音乐的空间化效果，并在后缀教程中解释。


📌 Common mistakes

大多数失误是提前销毁了 SoundBuffer 数据，包括超出变量作用域导致的情况，但此时播放器仍在使用数据。

```C++
sf::Sound loadSound(std::string filename)
{
    sf::SoundBuffer buffer; // this buffer is local to the function, it will be destroyed...
    buffer.loadFromFile(filename);
    return sf::Sound(buffer);
} // ... here

sf::Sound sound = loadSound("s.wav");
sound.play(); // ERROR: the sound's buffer no longer exists, the behavior is undefined
```

Sound 只会通过指针引用 SoundBuffer，并不会对其进行拷贝，代码需要正确处理数据的生命周期，保持到播放结束。

另一个问题是超量的播放，SFML 内部限制了最大播放数量，根据系统有所差别，但不能超过 256 个同时进行的 *sf::Sound* 和 *sf::Music* 播放操作。

一个好的操作建议是循环使用，将一些不需要的资源进行清理，避免资源超出限制。

特别要注意，音乐播放会随时读取数据源，提前销毁数据会导致错误。并且，通过流对象、内存使用数据的方式也并不比使用磁盘文件简单，甚至更麻烦：

```C++
// we start with a music file in memory (imagine that we extracted it from a zip archive)
std::vector<char> fileData = ...;

// we play it
sf::Music music;
music.openFromMemory(&fileData[0], fileData.size());
music.play();

// "ok, it seems that we don't need the source file any longer"
fileData.clear();

// ERROR: the music was still streaming the contents of fileData! The behavior is now undefined
```

虽然 sf::Sound 和 sf::Music 的顶级父类都是 *SoundSource*、*AlResource*，但是 Music 的直接父类 *SoundStream* 没有提供拷贝构造函数，所以它不能进行拷贝。

```C++
sf::Music music;
sf::Music anotherMusic = music; // ERROR

void doSomething(sf::Music music)
{
    ...
}
sf::Music music;
doSomething(music); // ERROR (the function should take its argument by reference, not by value)
```


### ===🗝 Recording audio
- Recording audio https://www.sfml-dev.org/tutorials/2.5/audio-recording.php

SFML 源代码中提供的录音程序的示范，请在录音前设置正确的输入设备，如果安装了 VoiceMeeter 这类虚拟声卡，就有可能选择错误的输入设备导致录音无声。

使用 sf::SoundBufferRecorder 就可以捕捉声音输入设备中的采样数据，并保存在 *SoundBuffer* 对象中。

录音前，需要通过 *isAvailable()* 方法检查系统是否支持录音，录音操作是在独立线程中进行的，所以开始录音后就可以进行其它操作：

```C++
// first check if an input audio device is available on the system
if (!sf::SoundBufferRecorder::isAvailable())
{
    // error: audio capture is not available on this system
    ...
}

// create the recorder
sf::SoundBufferRecorder recorder;

// start the capture
recorder.start();

// wait...

// stop the capture
recorder.stop();

// retrieve the buffer that contains the captured audio data
const sf::SoundBuffer& buffer = recorder.getBuffer();
```

等待录音完成的过程，可以使用控制台输入操作，等待用户输入确认后即停止采样，并获得现有的采样数据。在销毁 Recoreder 或重新录音前，如果需要后续使用采样数据，请先拷贝缓冲区的数据，否则数据会被覆盖。

采样数据可以保存到文件，也可以直接播放，或者进行其它处理：

```C++
// Save it to a file
buffer.saveToFile("my_record.ogg");

// Play it directly
sf::Sound sound(buffer);
sound.play();

// Access the raw audio data and analyze it, transform it, etc.
const sf::Int16* samples = buffer.getSamples();
std::size_t count = buffer.getSampleCount();
doSomething(samples, count);
```

如果系统存在多个输入设备，如 microphone、 webcam microphone，或者外部声卡，就需要指定一个输入设备，通过 *setDevice()* 方法指定一个设备名，当前使用的设备通过 *getDevice()* 查询。使用 *SoundBufferRecorder::getAvailableDevices()* 静态方法获取当前系统有效的输入设备，可以将设备列表保存在 `std::vector<std::string>` 向量容器中，根据需要使用。

不指定设备时，就使用系统默认的输入设备，它可以通过 *SoundBufferRecorder::getDefaultDevice()* 方法查询。

```C++
// get the available sound input device names
std::vector<std::string> availableDevices = sf::SoundRecorder::getAvailableDevices();

// choose a device
std::string inputDevice = availableDevices[0];

// create the recorder
sf::SoundBufferRecorder recorder;

// set the device
if (!recorder.setDevice(inputDevice))
{
    // error: device selection failed
    ...
}

// use recorder as usual
```

通过扩展 *sf::SoundRecorder* 抽象类，可以实现如网络录音机、实时采样分析这样的功能，而不仅仅是用缓冲区保存声音数据。

*sf::SoundBufferRecorder* 也相当于一个示范，它只扩展了以下这些虚拟方法：

- *onProcessSamples()* 每隔 100 ms 对采样到的数据块进行处理，间隔时间可以通过 *setProcessingInterval()* 指定；
- *onStart()* 和 *onStop()* 会在开始采样、停止采样时执行，可以用来执行初始化及清理操作；

以下是一个自定义录音机的基本结构：

```C++
class MyRecorder : public sf::SoundRecorder
{
    virtual bool onStart() // optional
    {
        // initialize whatever has to be done before the capture starts
        ...

        // return true to start the capture, or false to cancel it
        return true;
    }

    virtual bool onProcessSamples(const sf::Int16* samples, std::size_t sampleCount)
    {
        // do something useful with the new chunk of samples
        ...

        // return true to continue the capture, or false to stop it
        return true;
    }

    virtual void onStop() // optional
    {
        // clean up whatever has to be done after the capture is finished
        ...
    }
}
```

sf::SoundRecorder 定义了 isAvailable/start/stop 等方法，继承后就可以像 *sf::SoundBufferRecorder* 一样直接使用。


📌 Threading issues

由于录制使用独立的线程，需要清楚线程的行为与操作。

执行 *start()* 方法时，它会直接在同一个线程中调用 *onStart()*，但是，*onProcessSample()* 和 *onStop()* 会在内部的子线程中调用。

如果，需要同时在主线程中使用数据，那么就需要考虑如何做好线程间的数据安全保护，比如使用 mutex 机制，否则可能会导致数据出错，甚至程序异常终止。


以下示范参考 SoundCapture.cpp 实现：

```C++
#include <SFML/Audio.hpp>
#include <iostream>
#include <string>

using namespace std;

int main() try
{
    vector<string> devices = sf::SoundBufferRecorder::getAvailableDevices();
    string defaultDevice = sf::SoundBufferRecorder::getDefaultDevice();

    cout << "Default Device: \n\t" << defaultDevice << endl;
    cout << "Available Devices: \n";

    int i = 1, def = 1;
    for (auto device : devices)
    {
        if(device == defaultDevice) def = i;
        cout << "\t" << i++ << ": " << device << endl;
    }

    cout << "Select Device #: ";
    int id = 1;
    cin >> id;
    if (id>devices.size()) id = def;
    id --;
    cout << "Set device: " << devices[id] << endl;

    cout << "Set Sample Rate (4000 ~ 192000, 44100 is CD quality): ";
    int rate = 44100;
    cin >> rate;
    if (rate<4000) rate = 4000;
    cout << "Set sample rate: " << rate << endl;

    // Ready to start recording
    std::cout << "Press enter to start recording audio ..." << endl;
    cin.ignore(10000, '\n');

    sf::SoundBufferRecorder recorder;
    recorder.setDevice(devices[id]);

    recorder.start(rate);
    cout << "Recording... \n" << "Press Enter to Stop" << endl;
    cin.ignore(10000, '\n');
    recorder.stop();

    sf::SoundBuffer buffer = recorder.getBuffer();

    cout << "Sound Infomation:" << endl
         << "\t" << buffer.getDuration().asSeconds() << " seconds" << endl
         << "\t" << buffer.getSampleRate() << " samples/seconds" << endl
         << "\t" << buffer.getChannelCount() << " channels" << endl
         ;

    // Save sound buffer to a file
    string file = "record.flac";
    cout << "Choose the file name to create, " << file << " eg." << endl;
    cout << "The supported audio formats are: WAV, OGG/Vorbis, FLAC." << endl;
    std::getline(cin, file);
    buffer.saveToFile(file);

    // Create a sound instance and play it
    sf::Sound sound(buffer);
    sound.play();

    // Wait until play finished
    while (sound.getStatus() == sf::Sound::Playing)
    {
        float pos = sound.getPlayingOffset().asSeconds();
        cout << "\rPlaying ... " << pos << " sec." << endl << std::flush;

        // Leave some CPU time for other threads
        sf::sleep(sf::milliseconds(100));
    }
}
catch (const char * er)
{
    cout << "Error: " << er << endl;
}
```


### ===🗝 Custom audio streams
- Custom audio streams https://www.sfml-dev.org/tutorials/2.5/audio-streams.php

音频流 *sf::SoundStream* 类似其子类 sf::music，它们的功能和行为几乎相同。唯一的区别是音频流不播放音频文件，而是播放您直接提供的自定义音频源。换句话说，定义自己的音频流可以播放任意的数据，而不仅仅是一个文件，比如，通过网络传输的声音、程序生成的音乐、SFML 不支持的音频格式等等。

实际上，*sf::Music* 类只是一个细化的音频流，它从文件中获取音频采样数据，并进行播放。

前面讨论音频流媒体，为了有效利用内存，不能完全加载音频流的音频数据到内存中，而是在播放时以小块的形式加载。如果你的声音可以完全加载，并且可以存储在内存中，那么音频流就没什么用途，只需将音频数据加载到 *sf::SoundBuffer* 并使用 *sf::Sound* 来播放它。

创建自己的音频流对象，只需要覆盖两个虚拟方法：

- *onGetData()* 执行时提供采样数据供播放器使用，一切正常就返回 *true*，否则返回 *false* 表示要停止播放，SFML 内部会复制返回的数据；
- *onSeek()* 会在 *setPlayingOffset()* 方法中执行，需要将数据定位到指定的时间偏移对应的位置；

对于不支持 seeking 的情况，可以不管，只提供一个空函数，或者告知用户不支持这种操作：

```C++
class MyAudioStream : public sf::SoundStream
{
    virtual bool onGetData(Chunk& data);

    virtual void onSeek(sf::Time timeOffset);
};

bool MyAudioStream::onGetData(Chunk& data)
{
    data.samples = /* put the pointer to the new audio samples */;
    data.sampleCount = /* put the number of audio samples available in the new chunk */;
    return true;
}

void MyAudioStream::onSeek(Time timeOffset)
{
    // where this is done totally depends on how your stream class is designed
    unsigned int channelCount = ...;
    unsigned int sampleRate = ...;
    initialize(channelCount, sampleRate);
}
```

sf::Music 的寻轨操作是通过 *InputSoundFile* 实现的，它会在内部将时间，按数据采样率、及声道数转换为相应的字节位置，并控制 *SoundFileReader* 读取数据的位置，这个文件读取类通过 *SoundFileFactory* 静态方法实例化得到。

SFML 文档提供了一个示范，演示数据是如何流送的，暂不考虑数据来源：

```C++
#include <SFML/Audio.hpp>
#include <vector>

// custom audio stream that plays a loaded buffer
class MyStream : public sf::SoundStream
{
public:

    void load(const sf::SoundBuffer& buffer)
    {
        // extract the audio samples from the sound buffer to our own container
        m_samples.assign(buffer.getSamples(), buffer.getSamples() + buffer.getSampleCount());

        // reset the current playing position 
        m_currentSample = 0;

        // initialize the base class
        initialize(buffer.getChannelCount(), buffer.getSampleRate());
    }

private:

    virtual bool onGetData(Chunk& data)
    {
        // number of samples to stream every time the function is called;
        // in a more robust implementation, it should be a fixed
        // amount of time rather than an arbitrary number of samples
        const int samplesToStream = 50000;

        // set the pointer to the next audio samples to be played
        data.samples = &m_samples[m_currentSample];

        // have we reached the end of the sound?
        if (m_currentSample + samplesToStream <= m_samples.size())
        {
            // end not reached: stream the samples and continue
            data.sampleCount = samplesToStream;
            m_currentSample += samplesToStream;
            return true;
        }
        else
        {
            // end of stream reached: stream the remaining samples and stop playback
            data.sampleCount = m_samples.size() - m_currentSample;
            m_currentSample = m_samples.size();
            return false;
        }
    }

    virtual void onSeek(sf::Time timeOffset)
    {
        // compute the corresponding sample index according to the sample rate and channel count
        m_currentSample = static_cast<std::size_t>(timeOffset.asSeconds() * getSampleRate() * getChannelCount());
    }

    std::vector<sf::Int16> m_samples;
    std::size_t m_currentSample;
};

int main()
{
    // load an audio buffer from a sound file
    sf::SoundBuffer buffer;
    buffer.loadFromFile("sound.wav");

    // initialize and play our custom stream
    MyStream stream;
    stream.load(buffer);
    stream.play();

    // let it play until it is finished
    while (stream.getStatus() == MyStream::Playing)
        sf::sleep(sf::seconds(0.1f));

    return 0;
}
```



### ===🗝 Spatialization: Sounds in 3D
- Spatialization: Sounds in 3D https://www.sfml-dev.org/tutorials/2.5/audio-spatialization.php

默认状态下，声音、音乐都是按最大音量播放的。但是在 3D 游戏环境中，玩家听到的声音应该是立体的，根据玩家所处的位置及方向，和声音所在的位置，最终会呈现不同的音响效果。

所以音响空间化 Spatialization，就是要在 3D 环境中正确地呈献音响效果，也称为声像 Panning。比如音源在用户的左侧，那么此时左声道就应该是最响亮的，右声道较弱。又比如，在不同的环境下，回声深度也不一样，空旷的地方基本没有回响，而密闭空间反射声波会使用回响增大，除非四周有吸音材料。

通常立体声就可以模拟出相当不错的 3D 声像，如果使用 Dolby 5.1 多声道系统，可以非常真实地模拟各种声音效果。

音源需要使用单声道，这样就可以按需要配置各个声道的音量，多声道的音源已经根据各声道分配好，不能用于音响空间化。

声像最终是在收听者身上呈现的，SFML 使用 *sf::Listener* 表示，因为假设当前环境只有一个收听者，所以它不可实例化，只含有静态方法。

使用 *sf::Listener*，首先是设置一个位置坐标，以及朝向：

```C++
sf::Listener::setPosition(10.f, 0.f, 5.f);
sf::Listener::setDirection(1.f, 0.f, 0.f);
sf::Listener::setUpVector(1.f, 1.f, 0.f);
sf::Listener::setGlobalVolume(50.f);
```

在 2D 世界中，只需要使用 X 坐标来控制位置，Y 坐标使用默认值 0 就可以，也基本不需要使用朝向。

以上代码片段设置收听者朝向 +X 轴向，这意味着，假如一个声音从 (15, 0, 5) 坐标发出，那么就会从右侧喇叭听到。

收听者的 "up" 方向默认设置为 (0, 1, 0) 向量，即收听者的头部方向指向 +Y，可以修改它，但是基本不需要这样做。上面代码片段相当于听者把头向右（+X）倾斜。

最后，可以通过 *setGlobalVolume()* 控制收听到的音量，取值范围 [0 .. 100]，50 表示原始响度的一半。

设置收听者的状态后，还需要设置音源状态，两者互相作用，最后才呈现出音响的空间化效果。


所有 SFML 提供的 Sounds, Music, SoundStreams 对象都定义了同一套用于音响空间化的属性。

主要的属性是位置，默认是绝对位置，可以设置为相对于收听者的位置，在播放玩家自身发出的音响效果时非常有用，如玩家的脚步声：

```C++
sound.setPosition(2.f, 0.f, -5.f);
sound.setRelativeToListener(true);
sound.setMinDistance(5.f);
sound.setAttenuation(10.f);
```

注意，位置设置为 (0, 0, 0) 表示不使用空间化效果，因为许多情况下有用，如 GUI 界面音效、点击音效、环境音效等等。

MinDistance 距离是在最大音量下听到声音的距离。例如，爆炸等较大声音的最小距离应该更大，以确保从远处听到。请注意，最小距离为 0 表示声音在听者头部内！这将导致不正确的空间化，并导致声音不进行衰减。所以 0 是无效值，请不要使用它。

可以设置一个衰减系数，根据到收听者的距离进行音响衰减。衰减值是一个乘法因子，值越大，声音离开听者时听到的声音就越小。要获得非衰减声音，可以使用 0。另一方面，使用像 100 这样的值会使声音高度衰减，这意味着只有在非常靠近听者的情况下才能听到声音。

以下是衰减公式：

    Volume factor = MinDistance / (MinDistance + Attenuation * (max(Distance, MinDistance) - MinDistance))

- *MinDistance*   is the sound's minimum distance, set with *setMinDistance()*
- *Attenuation*   is the sound's attenuation, set with *setAttenuation()*
- *Distance*      is the distance between the sound and the listener
- *Volume factor* is the calculated factor, in range [0 .. 1], that will be applied to the sound's volume




## ==⚡ Network Module

### ===🗝 Communication using sockets
- [The WebSocket Protocol](https://tools.ietf.org/html/rfc6455)
- [RFC 791 - IP(Internet Protocol)](https://www.rfc-editor.org/info/rfc791)
- [RFC 793 - TCP(Transmission Control Protocol)](https://www.rfc-editor.org/info/rfc793)
- [RFC 2616 HTTP 1.1 规范文档](https://tools.ietf.org/html/rfc2616)
- [TCP 图解千百问](https://mp.weixin.qq.com/s/tH8RFmjrveOmgLvk9hmrkw)
- TCP/IP Illustrated Vol. 3: TCP for Transactions, HTTP, NNTP, and the Unix Domain Protocols - Addison-Wesley
- TCP/IP Illustrated vol. 2: The Implementation Gary R. Wright, W. Richard Stevens
- TCP/IP Illustrated Vol. 1: The Protocols Kevin R. Fall, W. Richard Stevens
- UNIX Network Programming, Volume 1: Networking APIs: Sockets and XTI, 2nd https://book4you.org/book/455701/98d00b
- UNIX Network Programming, Volume 1: The Sockets Networking API, 3rd https://book4you.org/book/5337014/e847e9
- UNIX Network Programming, Volume 2: Interprocess Communications https://book4you.org/book/656980/d47b46
- Illustrated TCPIP: A Graphic Guide to the Protocol Suite by Matthew Naugle
- Communication using sockets https://www.sfml-dev.org/tutorials/2.5/network-socket.php
- sf::SocketSelector https://www.sfml-dev.org/documentation/2.5.1/classsf_1_1SocketSelector.php
- Go My WebSocket https://github.com/jimboyeah/demo/blob/go-my-websocket/go-my-websocket.md

这部分内容涉及网络编程，主要是一些通信协议方面的知识，掌握 TCP/IP 协议基础的情况下，这部分内容是非常简单的。

套接字 Sockets，先不要管为何叫这个名字，它在 Unix 系统中被创建出来时就是这个叫法。总的来说，就是一套可以进行网络编程的 API 接口。

通过 Sockets 的网络编程，就可以将应用程序与外部世界的其它主机联网。通过套接字接口向外部主机发送数据，或者接收外部主机发出的数据。 

TCP/IP 作为应用最广泛的基础底层协议，开发者实际应用的协议如 HTTP、Websocket、FTP 等常见的应用层协议都是构建于 TCP/IP 协议之上的。为了简化理解互联网的协议森林，可以分成三个简单模块来理解：

- 📌 物理链路：网络硬件为各种协议提供物理链路支持，数据可以在网络间传输，这里主要关注网卡的物理地址 MAC - Media Access Control Address；
- 📌 数据传输：底层 TCP/IP 协议为基础的网络通讯提供支持，经由网卡向网络发送的数据可以理解为一个数据包，里面记录了 IP 地址和端口号；
- 📌 数据应用：上层应用协议利用底层协议为程序的网络数据交互需求提供支持；

来看看 RFC791/793 文档的一份图表：

                                       +-------------+
                                       | app header  |          +-------------+
                                       | & user data |          | application |
                                       +-------------+ <======= +-------------+
                                       |             |                   |
                                       V             V                   |
                           +-----------+-------------+                   V
                           |    TCP    | application |               +--------+
                           |   Header  |     data    |               |  TCP   |
                           +-----------+-------------+ <============ +--------+
                           |<----- TCP Segment ----->|                   |
                           V                         V                   |
               +-----------+-----------+-------------+                   V
               |     IP    |    TCP    | application |               +--------+
               |   Header  |   Header  |     data    |               |   IP   |
               +-----------+-----------+-------------+ <============ +--------+
               |<----------- IP Datagram ----------->|                   |
               V                                     V                   V
    +----------+-----------+-----------+-------------+----------+    +--------+
    | Ethernet |     IP    |    TCP    | application | Ethernet |    |Ethernet|
    |  Header  |   Header  |   Header  |     data    | Trailer  |    | Driver |
    +----------+-----------+-----------+-------------+----------+ <= +--------+
    | 14 bytes    20 bytes    20 bytes     N bytes     4 bytes  |
    |<-------------- Ethernet Frame (46-1500 bytes) ----------->|

    Figure 1.7. Encapsulation of data as it goes down the protocol stack.

这份图表解析了，底层协议如何为上层协议提供数据包装。应用程序发送数据时，会经过每一个协议层打包封装，添加上相应的协议头信息，再通过网络链路传输。TCP - Transmission Control Protocol 即控制传输的协议，它提供了端口号机制供各种应用层协议使用，比如 HTTP 默认使用 80 端口，FTP 协议默认使用 21 端口等等。再底层一点的 IP - Internet Protocol 即网际协议提供 IP 地址机制，各种应用就建立于基础的 IP 地址加端口的网络传输机制之上。再底层的就涉及网络硬件设计了，以太网链路层为网卡设计了 MAC 物理地址，数据包在网络上传递就依据 MAC 来送达和接收。

一句话概括 TCP 的建立和结束连接就是，三次握手 3-Way Handshake，四次挥手 4-Way Wavehand。TCP 协议头中提供了 6-bit 控制位，可以用来指定六种不同用途的 TCP 数据包：

- ACK - Acknowledgment field significant 应答确认；
- FIN - No more data from sender 用在结束连接；
- PSH - Push Function 推送标志，用于推送数据而不是使用数据队列处理，表示数据包要尽快交给应用层处理；
- RST - Reset the connection 连接重置；
- SYN - Synchronize sequence numbers 同步序列，用在建立连接，每个 SYN segment 消耗一个序列号，即使后续序列号加一；
- URG - Urgent Pointer field significant 紧急标志，用于需要应用层紧急处理的数据包；

但不是每一个开发者都需要对这些底层的功能进行开发，而 Sockets 接口就是一套现成的解决方案，已经将这一切封装好，拿来即用。当然，在不同的操作系统下，具体实现是有差异的。

SFML 提供了最常用的 TCP sockets 和 UDP sockets，它们有着非常大的区别：

*TCP* - Transmission Control Protocol

- 基于连接的协议，每一个客户端都需要和服务端建立连接后才可以收发数据；
- 基于流式的协议，比如分两步发送 "Hello" 和 "SFML"，接收端可能收到 "HelloSFML" 或者分别接收到 "Hel" + "loSFML" 这样的内容。
- 速度不及 UDP 快速，因为要建立连接，三次握手四次挥手是不可忽略的时间消耗。
- 因为基于连接，所以数据传输是可靠的，但不保证收发顺序。

*UDP* - User Datagram Protocol

- 不基于连接的协议，客户端可以随时连接服务器，并从连接时即时开始接收数据报，数据按序列收发。
- 基于数据报的协议，也就是说数据报不会混合发送的内容，发送的是什么数据，就会接收到相同的数据。
- 因为不基于连接，数据传输不可能，不保证对方正确接收数据。
- 因为不基于连接，具有更轻量化的底层，UDP 数据传输速度更快速。
- 最后，因为 UDP 不要预先建立连接，所以它经常用来向整个网络广播消息。而 TCP 需要每个客户端操持连接，不能进行 broadcasting。

使用 *TcpSocket* 作为客户端连接服务端是最简单的一种 TCP 连接：

```C++
#include <SFML/Network.hpp>

sf::TcpSocket socket;
sf::Socket::Status status = socket.connect("192.168.0.5", 53000);

if (status != sf::Socket::Done)
{
    // error...
}
```

如果作为 TCP 服务端，需要使用 *TcpListener* 对可能出现的客户端连接请求进行接收确定，以建立连接：

```C++
sf::TcpListener listener;

// bind the listener to a port
if (listener.listen(53000) != sf::Socket::Done)
{
    // error...
}

// accept a new connection
sf::TcpSocket client;
if (listener.accept(client) != sf::Socket::Done)
{
    // error...
}

// use "client" to communicate with the connected client,
// and continue to accept new connections with the listener
```

使用连接方法，并传入一个 *IpAddress* 和一个端口号即可，0 表示使用任意可用端口。建立连接后，就可以通过 *getRemoteAddress()* 和 *getRemotePort()* 获取服务器的地址和连接端口。

服务端调用 *accept()* 方法后，就会进入阻塞，并等待客户端的连接请求，除非设备为 non-blocking 方式。和客户端建立连接返回后，它初始化给定的套接字并返回，然后套接字可以继续用来与新客户机通信，侦听器可以返回并等待另一个客户端的连接尝试。

在成功执行客户端的 *connect()* 和服务端的 *accept()* 方法后，双方就正确建立连接，可以进行数据传输操作。

Sockets 方法都会根据连接过程所在的阶段返回几种对应的状态：

```C++
class SFML_NETWORK_API Socket : NonCopyable
{
public:

    enum Status
    {
        Done,         ///< The socket has sent / received the data
        NotReady,     ///< The socket is not ready to send / receive data yet
        Partial,      ///< The socket sent a part of the data
        Disconnected, ///< The TCP socket has been disconnected
        Error         ///< An unexpected error happened
    };

    // Prototypes
    Status connect(const IpAddress& remoteAddress, unsigned short remotePort, Time timeout = Time::Zero);
    void setBlocking(bool blocking);
}
```

默认设置，所有 Sockets 方法都是阻塞的，也就是说，执行后会一直等到对方响应后才返回，可以通过 *setBlocking()* 方法设置为 non-blocking 方式。

```C++
sf::TcpSocket tcpSocket;
tcpSocket.setBlocking(false);

sf::TcpListener listenerSocket;
listenerSocket.setBlocking(false);

sf::UdpSocket udpSocket;
udpSocket.setBlocking(false);
```

非阻塞方式下，socket 方法会立即返回，比如执行 *receive()* 会立即返回 sf::Socket::NotReady 状态，因为当前不会有接收到的数据。又如，如果当前没有挂起的连接请求，*accept()* 方法也会立即返回同样的状态码。

在程序的主循环上，非阻塞方式也是很容易处理的，可以按固定速率处理网络的数据收发。可以在每次循环中检查网络数据，看是否要进行相应的处理，而不需要阻塞程序。

注意：非阻塞模式下，*sf::TcpSocket* 不能保证数据会在 *send()* 执行后立即发送，无论是 *sf::Packet* 数据或是二进制数据。

从 SFML 2.3 开始，使用 sf::TcpSocket 以非阻塞方式发送二进制数据会返回一个值指示发送的数据大小：

    Status send(const void* data, std::size_t size, std::size_t& sent);

无论发送 *sf::Packets* 或二进制数据，在非阻塞方式下，函数立即返回时，只是发送了部分数据，所以状态码为 *sf::Socket::Partial*。需要对未发送的数据进行相应的处理，可以从 *sent* 返回的偏移位置继续发送。如果使用 *sf::Packets*，偏移位置保存在数据包对象实例的 m_sendPos 私有成员中，会自动处理，直到返回的状态码不为 Partial。重新构造一个 sf::Packet 并填充同样的数据，这种方式不能正确处理数据，需要使用原来的数据包对象。


UDP 在发送数据前并不需要 TCP 这些额外的连接操作，接收数据也只需要绑定一个端口即可，使用 *sf::Socket::AnyPort* 可以从任意可用的端口中接收数据，通过 *socket.getLocalPort()* 可以获取当前使用的端口：

```C++
sf::UdpSocket socket;

// bind the socket to a port
if (socket.bind(54000) != sf::Socket::Done)
{
    // error...
}
```

TCP 和 UDP 的数据发送操作基本一致，主要的差别是 UDP 的数据收发方法多了地址和端口参数：

```C++
char data[100] = ...;

// TCP socket:
if (socket.send(data, 100) != sf::Socket::Done)
{
    // error...
}

// UDP socket:
sf::IpAddress recipient = "192.168.0.5";
unsigned short port = 54000;
if (socket.send(data, 100, recipient, port) != sf::Socket::Done)
{
    // error...
}
```

数据收发有两套方法：

- 使用 raw array 数据的方法，收发固定长度的二进制数据；
- 使用 sf::Packet 扩展数据包的方法，更灵活更稳定；

原始数组数据适合收发固定尺寸的二进制数据，但像 int 或 long 这些在不同平台中具有不同大小的的数据类型就不适合，这个问题需要使用 Packet 进行处理。另外 UDP 的数据报有大小限制，*sf::UdpSocket::MaxDatagramSize* 常量指定，这个值指定小于 2^16 (65536) 字节。

```C++
// TCP socket:
Status send(const void* data, std::size_t size);
Status send(const void* data, std::size_t size, std::size_t& sent);
Status receive(void* data, std::size_t size, std::size_t& received);

Status send(Packet& packet);
Status receive(Packet& packet);

// UDP socket:
Status send(const void* data, std::size_t size, const IpAddress& remoteAddress, unsigned short remotePort);
Status receive(void* data, std::size_t size, std::size_t& received, IpAddress& remoteAddress, unsigned short& remotePort);

Status send(Packet& packet, const IpAddress& remoteAddress, unsigned short remotePort);
Status receive(Packet& packet, IpAddress& remoteAddress, unsigned short& remotePort);
```

接收数据，需要指定缓冲区用于存放要接收的数据，并且要指定要从网络接收缓冲区拷贝的最大字节数，注意在默认的阻塞模式下接收到数据后才返回，第三个参数返回真正接收到的数据大小：

```C++
char data[100];
std::size_t received;

// TCP socket:
if (socket.receive(data, 100, received) != sf::Socket::Done)
{
    // error...
}
std::cout << "Received " << received << " bytes" << std::endl;

// UDP socket:
sf::IpAddress sender;
unsigned short port;
if (socket.receive(data, 100, received, sender, port) != sf::Socket::Done)
{
    // error...
}
std::cout << "Received " << received << " bytes from " << sender << " on port " << port << std::endl;
```

对于 UDP sockets，最后两个参数是对方的地址和端口，可以在后续需要进行答复时用来发送数据。


通常程序建立的连接不只一个，在阻塞模式下，SFML 提供了一个工具，*sf::SocketSelector* 可以监视一系列的 Sockets，让它们同时进入阻塞状态，并且等待其中某个返回数据时，就进行处理。

*sf::SocketSelector* 是 I/O Multiplexing 手段，可以监视以下 Socket 对象：

- sf::TcpListener
- sf::TcpSocket
- sf::UdpSocket

选择器本身并不保存 Sockets 对象，它们也不可拷贝，只是在执行 *add()* 方法时使用指针引用它们。所以不能用来当前 Sockets 的容易，可以使用 C++ 标准库中的 *std::vector* 或 *std::list* 作为容器，将 Sockets 实例保存起来，并在整个通信中操持有效状态。


使用 SocketSelector 只需要三个步骤：

- 使用 *add()* 方法添加需要监视的 Sockets；
- 使用 *wait()* 方法等待其中一个接收到数据，或者触发了错误，可以指定等待时间；
- 对各个 Sockets 进行测试，找到已经接收到数据的那个。

执行等待时，有数据到达，或者 *sf::TcpListener* 接收到客户端连接请求，随即返回 true，就需要根据具体情况进行处理，使用 *isReady()* 判断是那个实例处于可用状态。

```C++
sf::TcpSocket socket;

sf::SocketSelector selector;
selector.add(socket);

if (selector.wait(sf::seconds(10.f)))
{
    // for each socket... <-- pseudo-code because I don't know how you store your sockets :)
    {
        if (selector.isReady(socket))
        {
            // this socket is ready, you can receive (or accept if it's a listener)
            socket.receive(...);
        }
    }
}
else
{
    // timeout reached, nothing was received...
}
```

通过 Selector::wait 方法，可以很容易实现超时接收数据的逻辑：

```C++
sf::Socket::Status receiveWithTimeout(sf::TcpSocket& socket, sf::Packet& packet, sf::Time timeout)
{
    sf::SocketSelector selector;
    selector.add(socket);
    if (selector.wait(timeout))
        return socket.receive(packet);
    else
        return sf::Socket::NotReady;
}
```

以下是 sf::SocketSelector Class Reference 文档中给出的示范：

```C++
// Create a socket to listen to new connections
sf::TcpListener listener;
listener.listen(55001);
// Create a list to store the future clients
std::list<sf::TcpSocket*> clients;
// Create a selector
sf::SocketSelector selector;
// Add the listener to the selector
selector.add(listener);
// Endless loop that waits for new connections
while (running)
{
    // Make the selector wait for data on any socket
    if (selector.wait())
    {
        // Test the listener
        if (selector.isReady(listener))
        {
            // The listener is ready: there is a pending connection
            sf::TcpSocket* client = new sf::TcpSocket;
            if (listener.accept(*client) == sf::Socket::Done)
            {
                // Add the new client to the clients list
                clients.push_back(client);
                // Add the new client to the selector so that we will
                // be notified when he sends something
                selector.add(*client);
            }
            else
            {
                // Error, we won't get a new connection, delete the socket
                delete client;
            }
        }
        else
        {
            // The listener socket is not ready, test all other sockets (the clients)
            for (std::list<sf::TcpSocket*>::iterator it = clients.begin(); it != clients.end(); ++it)
            {
                sf::TcpSocket& client = **it;
                if (selector.isReady(client))
                {
                    // The client has sent some data, we can receive it
                    sf::Packet packet;
                    if (client.receive(packet) == sf::Socket::Done)
                    {
                        ...
                    }
                }
            }
        }
    }
}
```


### ===🗝 Using and extending packets
- Using and extending packets https://www.sfml-dev.org/tutorials/2.5/network-packet.php
- user-defined conversion function https://en.cppreference.com/w/cpp/language/cast_operator

通过网络进行数据传输隐藏着一些不容易发现的问题，因为网络上的主机构架类型各异，数据结构有所差别。

首先，是字节顺序问题，Endianness。在处理多字节的数据时，不同的 CPU 构架使用不同的方式：

- Big endian 方式，也就是 Most Significant Byte First，x86 CPU 构架使用。
- Little endian 方式，也就是 Least Significant Byte First，苹果系统使用。

Big endian 也称为 network byte order，高位字节先行。只有发送和读取时，使用一致的字节序，才正确传递数据。比如，16-bit integer "42"，使用 big endian 记作 00000000 00101010。如果将它发送到 little endian 的机器上就会得到 10752 这个值，使用用 Big endian 记作 00101010 00000000。

还有其他更奇特的字节顺序，但你可能永远都不需要处理它们。

另一个问题是原始类型大小不同问题，C++ 规范并没固定原始类型的大小，虽然在当前主流的 32-bit/64-bit x86 构架主机上，char, short, int, long, float, double 都有相应的大小。但是，在不同的 CPU 构架上，大小是不一至的，比较 long int 可能是 32-bit 大小，但在另一种构架上可能是 64-bit 大小。

第三个问题是 TCP 协议工作方式，因为它是流式协议，没有数据边界，如何切割来组合数据影响到数据收发是否一致。又比如，读取未完全传输的变量，或者忽略了有用的字节，这都会导致数据错误解析。

还可能有其它一些风格问题，这是基于网络应用程序必需要解决的底层问题，SFML 提供的 sf::Packet 就是解决这些问题引入的。

在 Config.hpp 文件中，还定义一系列固定大小的整数类型：

```C++
////////////////////////////////////////////////////////////
// Define portable fixed-size types
////////////////////////////////////////////////////////////
namespace sf
{
    // All "common" platforms use the same size for char, short and int
    // (basically there are 3 types for 3 sizes, so no other match is possible),
    // we can use them without doing any kind of check

    // 8 bits integer types
    typedef signed   char Int8;
    typedef unsigned char Uint8;

    // 16 bits integer types
    typedef signed   short Int16;
    typedef unsigned short Uint16;

    // 32 bits integer types
    typedef signed   int Int32;
    typedef unsigned int Uint32;

    // 64 bits integer types
    #if defined(_MSC_VER)
        typedef signed   __int64 Int64;
        typedef unsigned __int64 Uint64;
    #else
        typedef signed   long long Int64;
        typedef unsigned long long Uint64;
    #endif

} // namespace sf
```

对于浮点类型，实践中使用的是固定大小的表达，通常 float 和 double 类型对应的大小为 32 bits 和 64 bits。

使用 Packet 和固定大小的整形数值解决字节序问题：

```C++
// on sending side
sf::Uint16 x = 10;
std::string s = "hello";
double d = 0.6;

sf::Packet packet;
packet << x << s << d;

// on receiving side
sf::Uint16 x;
std::string s;
double d;

packet >> x >> s >> d;
```

读取数据和写入不同，读取数据超出 Packet 包含的数据长度时，会触发错误。Packet 重载了 user-defined conversion，可以直接当作布尔值一样判断：

```C++
// A bool-like type that cannot be converted to integer or pointer types
// typedef bool (Test::*BoolType)(std::size_t);
// operator BoolType() const;

if (packet >> x)
{
    // ok
}
else
{
    // error, failed to read 'x' from the packet
}
```


使用配套方法收发 Packet 数据：

```C++
// with a TCP socket
tcpSocket.send(packet);
tcpSocket.receive(packet);

// with a UDP socket
udpSocket.send(packet, recipientAddress, recipientPort);
udpSocket.receive(packet, senderAddress, senderPort);
```

数据包解决了消息边界问题，这意味着在 TCP 套接字上发送一个数据包时，在另一端接收到完全相同的数据包，不会包含更少的字节，也不会包含其它数据包的字节。

然而，它有一个小小的缺点：为了保留消息边界，*sf::Packet* 必须随数据一起发送一些额外的字节，接收方也需要使用 sf::Packet 进行解码。请注意，这仅适用于 TCP，UDP 协议本身保留消息边界。

Packet 类重载基本类型的序列化，对于用户自定义的类型，则可以通过提供 *operator >>* 和 *operator <<* 重载操作符实现兼容：

```C++
/**
 * Usage:
 * Character bob;
 * packet << bob;
 * packet >> bob;
 */
struct Character
{
    sf::Uint8 age;
    std::string name;
    float weight;
};

sf::Packet& operator <<(sf::Packet& packet, const Character& character)
{
    return packet << character.age << character.name << character.weight;
}

sf::Packet& operator >>(sf::Packet& packet, Character& character)
{
    return packet >> character.age >> character.name >> character.weight;
}

```

另外，通过承继 Packet，并覆盖收发方法，它们是虚函数，可以访问到原始数据，这样就可以定制自己的数据逻辑，比如添加 Zip 压缩功能:

- *onSend()* 在 socket 发送数据前调用；
- *onReceive()* 在 socket 接收到数据时调用；

这里是一个实现自动压缩、解压缩的示范：

```C++
/**
 * @Usage:
 * ZipPacket packet;
 * packet << x << bob;
 * socket.send(packet);
 */
class ZipPacket : public sf::Packet
{
    virtual const void* onSend(std::size_t& size)
    {
        const void* srcData = getData();
        std::size_t srcSize = getDataSize();
        return compressTheData(srcData, srcSize, &size); // this is a fake function, of course :)
    }
    virtual void onReceive(const void* data, std::size_t size)
    {
        std::size_t dstSize;
        const void* dstData = uncompressTheData(data, size, &dstSize); // this is a fake function, of course :)
        append(dstData, dstSize);
    }
};
```



### ===🗝 Web requests with HTTP
- [RFC 2616 HTTP 1.1 规范文档](https://tools.ietf.org/html/rfc2616)
- Web requests with HTTP https://www.sfml-dev.org/tutorials/2.5/network-http.php
- HTTP/3 Support in .Net 6 https://devblogs.microsoft.com/dotnet/http-3-support-in-dotnet-6/
- The C++ Network Library Project https://cpp-netlib.org/
- libcurl - the multiprotocol file transfer library https://curl.se/libcurl/
- https://cheapsslsecurity.com/p/http2-vs-http1/
- https://ably.com/topic/http-2-vs-http-3
- https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference

HTTP 协议作为最流行的应用层协议之一，协议使用字符串明文，可以使用文本查看数据包内容。SFML 只提供了简单的 HTTP 客户端实现，简单意味只实现了部分 HTTP 1.1 功能，可以使用 POST、GET、HEAD 等请服务器的资源，访问 HTTP 头部，读写页面内容。

如果需要 HTTPS 这些完整功能的支持，可以考虑使用 libcurl 或 cpp-netlib 这些开源库。

```C++
#include <SFML/Network.hpp>

sf::Http http;
http.setHost("http://www.some-server.org/");

// or
sf::Http http("http://www.some-server.org/");

sf::Http::Request request;
// fill the request...
sf::Http::Response response = http.sendRequest(request);
```

创建 HTTP 实例时，并不会产生连接动作，只有执行 *sendRequest()* 方法时才执行连接请求，每个 Request 都有一个临时的连接。

一个 HTTP 请求对象 sf::Http::Request 包含以下信息：

- The method: POST (send content), GET (retrieve a resource), HEAD (retrieve a resource header, without its body)
- The URI: the address of the resource (page, image, ...) to get/post, relative to the root directory
- The HTTP version (it is 1.0 by default but you can choose a different version if you use specific features)
- The header: a set of fields with key and value
- The body of the page (used only with the POST method)

SFML 会自动填充 "Host", "Content-Length" 等默认需要的请求头，不用手动设置。

```C++
sf::Http::Request request;
request.setMethod(sf::Http::Request::Post);
request.setUri("/page.html");
request.setHttpVersion(1, 1); // HTTP 1.1
request.setField("From", "me");
request.setField("Content-Type", "application/x-www-form-urlencoded");
request.setBody("para1=value1&param2=value2");

sf::Http::Response response = http.sendRequest(request);
```

每个请求的结果就是一个来自 Web 服务器的响应 sf::Http::Response，它包含以下内容：

- A status code which precisely indicates how the server processed the request (OK, redirected, not found, etc.)
- The HTTP version of the server
- The header: a set of fields with key and value
- The body of the response

```C++
sf::Http::Response response = http.sendRequest(request);
std::cout << "status: " << response.getStatus() << std::endl;
std::cout << "HTTP version: " << response.getMajorHttpVersion() << "." << response.getMinorHttpVersion() << std::endl;
std::cout << "Content-Type header:" << response.getField("Content-Type") << std::endl;
std::cout << "body: " << response.getBody() << std::endl;
```

标准的 HTTP 状态码是一个 3 位的数字，2xx 表示请求成功，3xx 表示服务器对资源进行了重定义，4xx 表示客户端错误，5xx 表示服务器端错误。最后，SFML 使用 10xx 表示内部错误，并不是标准的 HTTP 状态码。

以下是不个游戏成绩上报示范，当然，真实的游戏服务并不会允许这样随意的分数上报逻辑：

```C++
#include <SFML/Network.hpp>
#include <sstream>

void sendScore(int score, const std::string& name)
{
    // prepare the request
    sf::Http::Request request("/send-score.php", sf::Http::Request::Post);

    // encode the parameters in the request body
    std::ostringstream stream;
    stream << "name=" << name << "&score=" << score;
    request.setBody(stream.str());

    // send the request
    sf::Http http("http://www.myserver.com/");
    sf::Http::Response response = http.sendRequest(request);

    // check the status
    if (response.getStatus() == sf::Http::Response::Ok)
    {
        // check the contents of the response
        std::cout << response.getBody() << std::endl;
    }
    else
    {
        std::cout << "request failed" << std::endl;
    }
}
```

相应的服务端 send-score.php 脚本，可以使用 PHP 内置的 Built-in Web Server 执行它，*php -S localhost:80 send-score.php*：

```sh
<?php
$name = $_POST['name'];
$score = $_POST['score'];

if (write_to_database($name, $score)) // this is not a PHP tutorial :)
{
    echo "name and score added!";
}
else
{
    echo "failed to write name and score to database...";
}
```


### ===🗝 File transfers with FTP
- File transfers with FTP https://www.sfml-dev.org/tutorials/2.5/network-ftp.php
- [RFC 959 - FTP(File Transfer Protocol)](https://www.rfc-editor.org/info/rfc959)
- [RFC 4217 - Securing FTP with TLS](https://www.rfc-editor.org/rfc/rfc4217.html)
- [RFC 4253 - The Secure Shell (SSH) Transport Layer Protocol](https://www.rfc-editor.org/info/rfc4253)
- [RFC 6101 - The Secure Sockets Layer (SSL) Protocol V3.0](https://www.rfc-editor.org/rfc/rfc6101.html)
- [OpenSSH](http://www.openssh.com)
- [OpenSSH Win32](https://github.com/PowerShell/Win32-OpenSSH/releases)

文件传输协议，如其名称，FTP (File Transfer Protocol) 这个协议就是专门用来传输文件用的，当然，使用 HTTP 也可以传输文件。

类似地，FTP 协议也有服务端和客户端，也和 HTTP 一样使用明文，如 "create directory", "delete file", "download file" 等命令，很明显地了解这些命令的功能。

使用免费的 FileZilla 或 OpenSSH 工具就可以组建 FTP 或 SFTP 服务器。

文件传输协议是因特网中使用最广泛的文件传输协议，有基于 TCP 的 FTP 和基于 UDP 的简单文件传输协议 TFTP - Trivial File Transfer Protocol，还有基于 SSH 安全协议的 SFTP - SSH File Transfer Protocol，如果采用 SSL 加密则是 FTPS，即 FTP over SSL。FTP 采用经典的客户机/服务器（Client/Server ）架构，服务器端提供 FTP 服务，用户使用各种不同的 FTP 客户端程序来连接 FTP 服务器，以上传或者下载文件。

连接过程

1.控制连接
a.服务器在熟知端口 21 发出被动打开命令，等待客户。
b.客户使用临时端口发出主动打开命令。

2.数据连接
a.客户使用一个临时端口发出被动打开。
b.客户使用 PORT 命令把这个端口号发送给服务器。
c.服务器收到这个端口号，并使用熟知端口 20 和临时端口号发出主动打开。


                                              +-------------+
                                              | +---------+ |
                                              | |   User  | |    +------+
                                              | |Interface| <--->| User |
                                              | +----^----+ |    +------+
                  +----------+                |      |      |
                  | +------+ |  FTP Commands  | +----V----+ |
                  | |Server| <----------------> |   User  | |
                  | |  PI  | |   FTP Replies  | |    PI   | |
                  | +--^---+ |                | +----^----+ |
                  |    |     |                |      |      |
      +------+    | +--V---+ |      Data      | +----V----+ |    +------+
      | File |<---> |Server| <----------------> |  User   | <--->| File |
      |System|    | | DTP  | |   Connection   | |   DTP   | |    |System|
      +------+    | +------+ |                | +---------+ |    +------+
                  +----------+                +-------------+

                  Server-FTP                   USER-FTP


FTP 两个通讯端口

- TCP 21 端口作为控制链路用途，所有你发往 FTP 服务器的命令和服务器反馈的指令都是通过服务器上的 21 端口传送的。
- TCP 20 端口作为数据链路用途，数据链路主要是用来传送数据的，比如客户端上传、下载内容，以及列目录显示的内容等。

FTP 控制链路在整个会话期间都保持打开，只用来发送连接/传送指令。当客户进程向服务器发送连接请求时，寻找连接服务器进程的熟知端口21，同时还要告诉服务器进程自己的另一个端口号码，用于建立数据传送连接。接着，服务器进程用自己传送数据的熟知端口20与客户进程所提供的端口号码建立数据传送连接。

两套端口对应两个处理进程，负责命令交互的是 PI - Protocol Interpreter，负责文件数据处理的是 DTP - data transfer process。


FTP 协议规定了控制协议传送与存储的多种选择：

- 文件类型：ASCII (默认的文本类型)、图像文件类型(二进制类型)、本地文件类型(用于在具有不同字节大小主机间传送二进制数据)
- 格式控制：该选项针对 ASCII 类型文件适用，非打印(默认选择，文件中不包含垂直格式信息)/ 远程登录格式控制
- 结构：文件结构(默认选择，文件被认为是一个连续的字节流，不存在内部的文件结构)/ 记录结构(用于文本文件)
- 传输方式：流方式(模式选择，文件以字节流方式传输，对于文件结构，发方在文件尾提示关闭数据连接，对于记录结构，有专用的两字节序列码记录结束和文件结束)/ 块方式(文件以一系列块来传送，每块前面有一个或多个首部字节)/ 压缩方式


FTP Server 为了适应不同的网络环境，支持两种连接模式来建立数据链路：*主动模式*（Port）和*被动模式*（Pasv)。其实这两种连接模式主要是针对数据链路进行的，和控制链路无关。

主动模式下，客户端 PI 进程先以一个高位端口连接到服务器 PI 进程侦听的 21 端口建立控制链路，一般大于1024的端口都就叫高位端口，所有的控制命令比如 Is 或 get 都是通过控制链路传送。当客户端需要服务器端给它传送数据时，客户端会发消息给服务器端，告诉自己的位置和打开的高位端口，等候服务器的 DTP 进程通过 TCP 20 端口和客户端打开的数据链路端口进行连接，从而进行数据的传输。当服务器端收到信息后，就会和客户端打开的端口连接，这样数据链路就建立起来了。
 
采用主动模式连接的客户端，当它位于NAT或者防火墙的保护时会碰到连接失败的问题。因为防火墙接到服务器发送过来的信息的时候，并不知道应该发送给内部网络中的哪一台客户端造成的。

被动模式下，客户端发送数据请求后，服务器也会发信息给客户端，告诉客户端：服务器在本地打开了一个高位端口P，你现在来连接我吧。当客户端收到该信息时，就会去连接服务器端的端口P，连接成功后，数据链路就建立了。
 
从上面的解释中我们可以看到，两种模式主要的不同是数据连接建立的不同。对于 Port 模式，是客户端在本地打开一个端口等服务器去连接建立数据连接，而 Pasv 模式就是服务器打开一个端口等待客户端去建立一个数据连接。


SFML 提供的 sf::Ftp 就是一个客户端，可以用它来连接 FTP 服务器。所有 FTP 命令都包装成一个个函数，连接成功后直接调用即可以向服务器发送命令。

每个命令执行后，也会从服务器中获得一个响应 sf::Ftp::Response，也包含了状态码，通过它可以确实操作是否成功，操作处于什么状态：

- 1xx: the requested action is being initiated, expect another reply before proceeding with a new command
- 2xx: the requested action has been successfully completed
- 3xx: the command has been accepted, but the requested action
- 4xx: the command was not accepted and the requested action did not take place,
- 5xx: the command was not accepted and
- 10xx: SFML custom codes

所有小于 400 的状态码都表示成功，其它表示发生错误，使用响应对象的 *isOk()* 可以直接判断成功或失败。


```C++
#include <SFML/Network.hpp>

sf::Ftp ftp;
...
sf::Ftp::Response response = ftp.login(); // just an example, could be any function

std::cout << "Response status: " << response.getStatus() << std::endl;
std::cout << "Response message: " << response.getMessage() << std::endl;

if (response.isOk())
{
    // success!
}
else
{
    // error...
}
```

注意，所有命令返回的都是 Response 对象，也就是说可以进行链式表达。

连接到 FTP 服务器有几个步骤：

- 首先是执行 *connect()* 建立网络连接，使用连接到指定的 sf::IpAddress，可以是一个 URL 主机地址，IP 地址或网络名。
- 建立网络连接后，下一步就是进行登录，如果允许，可以使用匿名登录。
- 最后，在不需要执行命令时断开连接。

如果不使用默认的 21 端口，也可以在连接时指定一个有效端口号，连接方法的第三个参数是超时值，在指定的时间还连接不成功就会返回。

```C++
sf::Ftp ftp;
ftp.connect("ftp.myserver.org");
ftp.connect("ftp.myserver.org", 45000);
ftp.connect("ftp.myserver.org", 21, sf::seconds(5));

// authenticate with name and password
ftp.login("username", "password");

// or login anonymously, if the server allows it
ftp.login();

...

ftp.disconnect();
```

基本 FTP 命令使用参考：

```C++
sf::Ftp::DirectoryResponse response = ftp.getWorkingDirectory();
if (response.isOk())
    std::cout << "Current directory: " << response.getDirectory() << std::endl;

sf::Ftp::ListingResponse response = ftp.getDirectoryListing();
if (response.isOk())
{
    const std::vector<std::string>& listing = response.getListing();
    for (std::vector<std::string>::const_iterator it = listing.begin(); it != listing.end(); ++it)
        std::cout << "- " << *it << std::endl;
}

// you can also get the listing of a sub-directory of the current directory:
response = ftp.getDirectoryListing("subfolder");

// Changing the current directory:
ftp.changeDirectory("path/to/new_directory"); // the given path is relative to the current directory

// Going to the parent directory of the current one:
ftp.parentDirectory();

// Creating a new directory (as a child of the current one):
ftp.createDirectory("name_of_new_directory");

// Deleting an existing directory:
ftp.deleteDirectory("name_of_directory_to_delete");

// Renaming an existing file:
ftp.renameFile("old_name.txt", "new_name.txt");

// Deleting an existing file:
ftp.deleteFile("file_name.txt");

// Downloading (receiving from the server) a file:
ftp.download("remote_file_name.txt", "local/destination/path", sf::Ftp::Ascii);

// Uploading (sending to the server) a file:
ftp.upload("local_file_name.pdf", "remote/destination/path", sf::Ftp::Binary);
```

上传和下载命令的第三个参数指定传输模式，SFML 提供 Ascii、EBCDIC 两种文本类型，和 Binary 按字节传输的二进制文件类型。

FTP 服务器通常会在不活动时关闭连接，客户端可以定期通过 *keepAlive()* 函数发送 *NOOP* 命令保护活跃连接。

