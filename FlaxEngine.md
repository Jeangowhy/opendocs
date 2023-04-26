
# 🥚 Flax Engine
1. Flax Engine https://flaxengine.com
1. Flax Engine Docs https://github.com/FlaxEngine/FlaxDocs
2. Flax Engine – multi-platform 3D game engine https://github.com/FlaxEngine/FlaxEngine
3. Collection of examples for Flax Engine https://github.com/FlaxEngine/FlaxSamples
4. Flax Engine Manual https://docs.flaxengine.com/manual/index.html
5. Flax C++ API https://docs.flaxengine.com/api-cpp/index.html
6. Flax C# API https://docs.flaxengine.com/api/index.html
6. Flax 1.5 released https://flaxengine.com/blog/flax-1-5-released/
7. Git Large File Storage (LFS) https://git-lfs.com

Flax Engine is a high quality modern 3D game engine written in C++ and C#.
From stunning graphics to powerful scripts - Flax can give everything for games. 
Designed for fast workflow with many ready to use features waiting for you right now.

What makes Flax better?

01. Seamless C# and C++ scripting
02. Automatic draw calls batching and instancing
03. Every asset is using async content streaming by default
04. Cross-platform support (Windows, Linux, Android, macOS, PS4, PS5. Switch, Xbox One, Xbox Series X/S, UWP…)
05. Realtime Global Illumination (DDGI and reflections with custom software raytracing)
06. GPU Lightmaps Baking
07. Visual Scripting
08. VFX tools
09. Nested prefabs
10. Large Worlds (64-bit precision for worlds coordinates)
11. Localization tools
12. Online services (Steam, Xbox Live, PSN…)
13. Networking for multiplayer games
14. Animation tools and features
15. Open World Tools (terrain, foliage, fog, levels streaming)
16. Hot-reloading C#/C++ in Editor
17. Gameplay Globals for technical artists
18. Full source-code available
19. Direct communication and help from engine devs
20. Lightweight development (full repo clone + compilation in less than 3 min)

Windows 平台下从源代码编译和运行引擎：

1. 安装 Visual Studio 2015 或更高版本
2. 安装 Windows 8.1 SDK 或更高版本
3. 为桌面安装 Microsoft Visual C ++ 2015.3 v140 工具集（x86，x64）
4. 使用大文件扩展完整克隆仓库 git lfs clone https://gitlab.flaxengine.com/flax/flaxengine
5. 运行 GenerateProjectFiles.bat
6. 打开 Flax.sln，并将解决方案配置设置为 Editor.Development，Win64 平台
7. 编译（按F7键）Flax 项目
8. 运行（按F5键）Flax


## 🐥 Get started
01. 🍔 [Get started](https://docs.flaxengine.com/manual/get-started/index.html)
02. 🍔 [Samples and Tutorials](https://docs.flaxengine.com/manual/samples-tutorials/index.html)
03. 🍔 [Editor](https://docs.flaxengine.com/manual/editor/index.html)

The first steps

1. Install the Flax Launcher https://flaxengine.com/download/
2. Installing The Flax Engine & Editor
3. Create your very first Flax game project.
4. Explore to Samples and Tutorials

Learn the basics

1. **Editor** Learn how to work with Flax Editor.
2. **Scenes** Create levels for your game.
3. **Assets** Start creating content.
4. **Project structure** Learn about Flax projects structure.
5. **Prefabs** Learn how to create and use prefabs.
6. **Visual Studio extension** Install our plugin for Visual Studio for programmers.
7. **Glossary** See the most common terms used in Flax Engine.


Flax Engine Tools for Visual Studio
https://marketplace.visualstudio.com/items?itemName=Flax.FlaxVS
Flax Engine Tools for Visual Studio is an extension for Visual Studio that 
supports debugging Flax game code in Visual Studio IDE. You don't need to 
install the extension to use Flax, but we recommend it for programmers.

First steps in Flax Editor 
https://docs.flaxengine.com/manual/get-started/editor.html

Game and Engine Flow
https://docs.flaxengine.com/manual/editor/advanced/game-engine-flow.html

Assets https://docs.flaxengine.com/manual/get-started/assets/index.html
Prefabs https://docs.flaxengine.com/manual/get-started/prefabs/index.html
Tutorials https://docs.flaxengine.com/manual/samples-tutorials/tutorials/index.html

Game Cooker https://docs.flaxengine.com/manual/editor/game-cooker/index.html
Game Settings https://docs.flaxengine.com/manual/editor/game-settings/index.html
Flax.Build https://docs.flaxengine.com/manual/editor/flax-build/index.html

Flax projects structure
https://docs.flaxengine.com/manual/get-started/project-structure.html


Editor Interface
- - [Interface](https://docs.flaxengine.com/manual/editor/interface.html)

![Flax Editor Interface](https://docs.flaxengine.com/manual/get-started/media/flax-layout.png)

Flax Editor's interface is made of **dockable windows** which can be rearranged,
grouped, detached and docked.

You can drag and arrange a window by selecting and dragging the window header.
It can be very useful when adapting the workspace for your need. Flax Editor
saves the window's layout (per project) on closing and every few seconds 
to restore it on relaunch.

Useful shortcuts for faster navigation:

* **Ctrl + Tab** - next tab
* **Ctrl + Shift + Tab** - previous tab
* **Ctrl + W** - close tab
* **Ctrl + O** - finder tool to navigate to anything


The default main windows layout contains a set of the most important elements:

01. [Viewport](windows/viewport.md) shows the game view. Used to navigate and edit scenes.
02. [Content Window](windows/content-window.md) shows the project assets.
    Used to create and manage your assets.
03. [Scene Window](windows/scene-window.md) shows the scene actors hierarchy.
    Used to view and modify the scene structure.
04. [Properties Window](windows/properties-window.md) shows properties of 
    the selected objects. Used to view and edit the scene objects (scripts, actors).
05. [Toolbox](windows/toolbox.md) provides useful tools for editing scenes.
    Used to spawn objects, paint the models and create a terrain.
06. [Toolbar](windows/toolbar.md) gives access to the essential editor features.
    Used to quickly test your game or save the changes with a single click.

Default [Flax Editor Layout]

The default windows layout can always be restored by using main menu option 
**Window -> Restore default layout**.


Flax Glossary
- - [Glossary](https://docs.flaxengine.com/manual/get-started/glossary.html)

This page lists and describes the most common terms used in the Flax Engine.
For instance, if you find yourself asking questions like *"What is an Actor?"*
or *"What is a Visject?"*, this page will help you with an understanding of 
what each term means. Links are provided for more documentation and guidance
on working with them.

01. **Project** - A self-contained directory that holds all the game files 
    used during development. See [Flax projects structure](project-structure.md)
    page to learn more about it.
02. **Actor** - Actors are objects that can be placed in your level.
    Every [Actor] is linked to the parent actor (except the Scene root actors) 
    and can have child actors (tree hierarchy). Actors have their own 3D 
    transformation (translation, rotation and scale) and inherit the parent
    actor transformation. You can attach C# scripts to actors and spawn/destroy
    them at runtime. See [Actors](scenes/actors.md) page to learn more about it.
03. **C# Script** - A text document that contains the source code of the custom
    [Script] class implementation written in [C# language].
04. **Scene Objects** - This term refers to both **Actors** and **Scripts** as they
    can be instantiated in your game and appear in the scene. Every scene object
    can be created and destroyed at runtime and is identified by the [Object.ID].
05. **Visject** - A visual surface graph that contains nodes connected to a network.
    For instance, it is used by the [Materials Editor] to create material shaders.
    *Visject* was the name of the now deprecated visual scripting interface that was 
    featured in a previous version of the engine. It has been replaced by C# scripts.
06. **Visual Script** - A built-in binary asset that contains a graph with
    visual script nodes, properties and metadata. This graph is processed
    and executed at runtime by the engine. It is used for Visual Scripting,
    a non-code based method for programming game logic.
07. **Prefab** - An asset in json format that contains prefab data. It holds
    serialized data of the prefab objects collection. Prefabs can be 
    instantiated to reuse the objects within an archetype.
08. **Prefab Instance** - Spawned prefab objects can contain links to 
    prefab assets and prefab objects. They can be modified at runtime and 
    can contain more than one actor (whole actors tree, including nested prefabs).

- https://docs.flaxengine.com/api/FlaxEngine.Actor.html
- https://docs.flaxengine.com/api/FlaxEngine.Script.html
- https://docs.flaxengine.com/api/FlaxEngine.Object.html#FlaxEngine_Object_ID
- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/


Flax projects structure

All Flax projects have a unified structure. This strict organization helps 
with development and provides better standardization across all Flax games.

The Flax Editor can load projects located in any location on your drive. 
It's only required to place a valid **.flaxproj** file that describes the 
project (name, metadata). Flax Editor will generate all project folders 
if missing (Cache, Content, Logs and Source directories) as well as 
C# projects and solution file.

Example .flaxproj

```json
{
    "Name": "My Project",
    "Version": "1.0",
    "Company": "",
    "Copyright": "",
    "GameTarget": "MyProjectTarget",
    "EditorTarget": "MyProjectEditorTarget",
    "References": [
        {
            "Name": "$(EnginePath)/Flax.flaxproj"
        },
        {
            "Name": "$(ProjectPath)/Plugins/MyPlugin/MyPlugin.flaxproj"
        }
    ],
    "DefaultScene": "297f662e43c41143e406ae9ab85097f2"
}
```

To learn more about project file properties see the reference.
[reference](https://docs.flaxengine.com/api/FlaxEditor.ProjectInfo.html)


Folders structure

* **ROOT**
 * **Binaries** - compiled game scripts binaries
 * **Cache** - editor local cache folder, buid cache, used for game cooker cache.
 * **Content** - contains all the game assets (models, textures, settings, etc.)
   * **SceneData** - dedicated directory for the [private scene assets](scenes/scene-data.md)
   * **Shaders** - auto-improted shaders assets (from source)
   * **GameSettings.json** - fixed location for the game settings asset
 * **Logs** - contains editor log files (and crash dumps)
 * **Screenshots** - contains screenshot files (`.png` format) you took in editor (use `F12` key)
 * **Source** - contains all game script files (C++ and C# scripts) organized into modules
   * **Shaders** - shader source files
   * **GAMEMODULE** - subfolder with game module code
     * **GAMEMODULE.Build.cs** - game module build script
   * **GameTarget.Build.cs** - game target build configuration script
   * **GameEditorTarget.Build.cs** - editor target build configuration script
 * **PROJECT_NAME.sln** - project scripts solution file, open it with Visual Studio
 * **PROJECT_NAME.flaxproj** - project description and metadata file (used by editor and launcher)



## 🐥 Migrate to Flax
- [Get started](https://docs.flaxengine.com/manual/get-started/index.html)
- - [Editor](https://docs.flaxengine.com/manual/get-started/editor.html)

Already familiar with game development using Unity, Unreal, or Godot? 
See our tutorials dedicated to newcomers here.

01. Flax for UE4® developers
    https://docs.flaxengine.com/manual/get-started/flax-for-ue4-devs/index.html
02. Flax for Unity® developers
    https://docs.flaxengine.com/manual/get-started/flax-for-unity-devs/index.html
03. Flax for Godot developers
    https://docs.flaxengine.com/manual/get-started/flax-for-godot-devs/index.html


Terminology

This section contains the most common terms used in UE4/Unity/Godot and 
their Flax equivalents (or rough equivalent). Flax keywords link directly 
to more in-depth information inside the documentation.

| Unreal | Flax |
|--------|--------|
| **Actor**     | [Actor](scenes/actors.md) |
| **Blueprint** | [Prefab](prefabs/index.md) + [Visual Script](scripting/visual/index.md) |
| **C++**       | [C++ and C#](scripting/index.md) |
| **World Outliner** | [Scene Window](editor/windows/scene-window.md) |
| **Details Panel** | [Properties Window](editor/windows/properties-window.md) |
| **Content Browser** | [Content Window](editor/windows/content-window.md) |


| Unity | Flax |
|--------|--------|
| **GameObject** | [Actor](scenes/actors.md) |
| **MonoBehaviour** | [Script](scripting/index.md) |
| **Shader**     | [Material](graphics/materials/index.md) |
| **Material**   | [Material Instance](graphics/materials/instanced-materials/index.md) |
| **Hierarchy Panel** | [Scene Window](editor/windows/scene-window.md) |
| **Inspector**  | [Properties Window](editor/windows/properties-window.md) |
| **Project Browser** | [Content Window](editor/windows/content-window.md) |
| **Scene View** | [Viewport](editor/windows/viewport.md) |


| Godot | Flax |
|--------|--------|
| **Node**       | [Actor](../scenes/actors.md) |
| **Script**     | [Script](../../scripting/index.md) |
| **Scene**      | [Scene Window](../../editor/windows/scene-window.md) |
| **Inspector**  | [Properties Window](../../editor/windows/properties-window.md) |
| **FileSystem** | [Content Window](../../editor/windows/content-window.md) |

* Unreal

```cpp
#pragma once
#include "GameFramework/Actor.h"
#include "MyScript.generated.h"

UCLASS()
class AMyScript : public AActor
{
    GENERATED_BODY()
    int Count;

    AMyScript()
    {
        // Allows Tick() to be called
        PrimaryActorTick.bCanEverTick = true;
    }

    void BeginPlay()
    {
        // Called when the game starts or when spawned
        Super::BeginPlay();
        Count = 0;
    }

    void Tick(float DeltaSeconds)
    {
        // Called every frame
        Super::Tick(DeltaSeconds);
        GLog->Log(FString::FromInt(Count++));
    }
};
```

* Unity

```cs
public class MyScript : MonoBehaviour
{
    void Start()
    {
        Debug.Log("It is Unity!");
    }
}
```

* Godot
https://docs.godotengine.org/en/stable/tutorials/scripting/idle_and_physics_processing.html

```cs
public class MyScript : Node
{
    public override void _Ready()
    {
        GD.print("It is Godot!");
    }

    public override void _Process(double delta) {
        // ...
    }
}
```

* Flax

```cs
using FlaxEngine;

public class MyScript : Script
{
    int Count;

    public override void OnStart()
    {
        // Use this for initialization
        Count = 0;
    }

    public override void OnUpdate()
    {
        // Update is called once per frame
        Debug.Log(Count++);
    }
}
```


## 🐥 Scripting Games
05. 🍔 [Scripting](https://docs.flaxengine.com/manual/scripting/index.html)

The most important part of every game are **Scripts**. Creating chunks of code
that handle game events, respond to user input, and control objects is an 
essential ingredient in all games. In short, scripts make games interactive
by adding gameplay. It applies to both small and huge production.

Flax supports **C#**, **C++** and **Visual** scripting. The mix of those
three languages is highly integrated into the engine as it's written in
those languages (engine is C++, editor is C#).

Code Modules

Important concepts related to programming in Flax are **binary modules**.
Binary modules are compiled source code libraries that can reference other
modules (eg. Editor, Graphics, or plugins).

In most cases, the main game code is in the module named `<project_name>` or
named `Game` located in `Source` folder (eg. `Source/Game`). That's the place
where you can add new scripts so build tool will compile them.

For more, advanced uses game can contain multiple modules and have code split
for better organization as for example engine does. It's made of multiple
modules working together. For instance, you can create an editor-only module
and use its code only in the Editor.

To learn more about build tools and infrastructure
see [Flax.Build](../editor/flax-build/index.md) utility documentation.



## 🐥 Physics Simulation
13. 🍔 [Physics](https://docs.flaxengine.com/manual/physics/index.html)

Flax Engine provides **real-time physics simulation** including collisions, 
gravity and other forces.

Using built-in physics engine helps with creating realistic behaviour for 
game objects. This section explains how physics actors work, how to add them
to your game, and how to use them with C#, C++ and Visual scripts.

**Flax uses PhysX 4.1** physics engine to drive its physical simulation
calculations and perform all collision calculations. PhysX provides the
ability to perform accurate collision detection as well as simulate physical
interactions between objects within the world.


## 🐥  Particles
14. 🍔 [Particles](https://docs.flaxengine.com/manual/particles/index.html)

Flax supports large-scale particles simulation and performant rendering of sprite,
mesh and ribbon particles. Advanced toolset in Editor helps to create complex 
visual effects. Particle system allows to easily extend it and produce desire 
particle effects. Use this documentation section to learn how to create your 
particles effects to create a great visual experience.

Flax supports both **CPU and GPU particles simulation**. Particle Emitter Graph
can be executed directly on the CPU to simulate particles or used to generate
compute shader source for the large-scale GPU particles simulation.

For better understanding please read the following comparison:

|              CPU Simulation              |               GPU Simulation               |
|------------------------------------------|--------------------------------------------|
| Low-latency                              | High-throughput                            |
| Up to 200k particles                     | Up to 5,000k particles                     |
| Optimized for small systems              | Optimized for huge simulations             |
| Draw call every frame (send data to GPU) | All simulation data stored on GPU          |
| Cannot sample scene textures             | Can sample scene textures                  |
| No requirements                          | Compute Shaders and Draw Indirect requried |

In addition, GPU particles are not supported if emitter uses ribbons or lights.
However, GPU particles can sample textures efficiently and perform depth-buffer
collisions for a large number of particles.

>[!Note]
>Always try to assign the particle emitter capacity to the actual required 
>value to improve simulation performance and reduce memory usage.


## 🐥 Supported platforms

Flax is a **cross-platform game engine**. It means you can create your game
once and deploy to many platforms at once. The engine itself takes care of
platform differences, graphics backends, and scripting environment. This helps 
with games development and it one of the essential parts of the game engines.
- [Platforms](https://docs.flaxengine.com/manual/platforms/index.html)

This section covers the specific information for different aspects of each platform.

* [Windows Desktop 7, 8, 10](windows.md)
* [Universal Windows (UWP)](uwp.md)
* [Xbox One](xbox-one.md)
* [Xbox Scarlett](xbox-scarlett.md)
* [PlayStation 4](ps4.md)
* [PlayStation 5](ps5.md)
* [Linux](linux.md)
* [Android](android.md)
* [Switch](switch.md)
* [macOS](mac.md)

> [!TIP]
> To check on which platform game is running use [Platform.Platform]. 
> You can also use [preprocessor variables](../scripting/preprocessor.md) in your code.
> (https://docs.flaxengine.com/api/FlaxEngine.Platform.html#FlaxEngine_Application_Platform)


## 🐥 Supported graphics backends

* DirectX 11 (with DirectX 10/10.1 fallback)
* DirectX 12
* Vulkan
* Null
* Platform native (eg. on PS4)

> [!TIP]
> To check on which rendering backend game is running use [GPUDevice.Instance.RendererType].
> You can also use [GPUDevice.Instance.ShaderProfile] to check the shaders format 
> that is being used by the rendering backend.
> (https://docs.flaxengine.com/api/FlaxEngine.GPUDevice.html#FlaxEngine_GPUDevice_ShaderProfile)
> (https://docs.flaxengine.com/api/FlaxEngine.GPUDevice.html#FlaxEngine_GPUDevice_RendererType)


Flax contains three layers of networking, from Low-Level to High-Level:
- [Networking](https://docs.flaxengine.com/manual/networking/index.html)

01. [Sockets](network-api.md) with raw Berkeley sockets (cross-platform) for UDP/TCP connections.
02. [Low-level](low-level.md) with `NetworkPeer`, `INetworkDriver` and `NetworkMessage`
    API which supports low-level networking packets via messages networking.
03. [High-level](high-level.md) with `NetworkManager`, `NetworkClient` and `NetworkStream`
    API which suppors high-level objects replications, spawning, RPCs invoking, 
    object authority and object ownership.

The high-level wraps over low-level and provides more features for multiplayer 
games which is favored in most cases. Follow documentation to learn more.


## 🐥 Flax Docs Contents
1. Flax Engine Docs https://github.com/FlaxEngine/FlaxDocs

Outline

01. 🍔 [Get started](https://docs.flaxengine.com/manual/get-started/index.html)
02. 🍔 [Samples and Tutorials](https://docs.flaxengine.com/manual/samples-tutorials/index.html)
03. 🍔 [Editor](https://docs.flaxengine.com/manual/editor/index.html)
04. 🍔 [Graphics](https://docs.flaxengine.com/manual/graphics/index.html)
05. 🍔 [Scripting](https://docs.flaxengine.com/manual/scripting/index.html)
06. 🍔 [Animation](https://docs.flaxengine.com/manual/animation/index.html)
07. 🍔 [Audio](https://docs.flaxengine.com/manual/audio/index.html)
08. 🍔 [Navigation](https://docs.flaxengine.com/manual/navigation/index.html)
09. 🍔 [UI](https://docs.flaxengine.com/manual/ui/index.html)
10. 🍔 [Input](https://docs.flaxengine.com/manual/input/index.html)
11. 🍔 [Terrain](https://docs.flaxengine.com/manual/terrain/index.html)
12. 🍔 [Foliage](https://docs.flaxengine.com/manual/foliage/index.html)
13. 🍔 [Physics](https://docs.flaxengine.com/manual/physics/index.html)
14. 🍔 [Particles](https://docs.flaxengine.com/manual/particles/index.html)
15. 🍔 [Networking](https://docs.flaxengine.com/manual/networking/index.html)
16. 🍔 [Platforms](https://docs.flaxengine.com/manual/platforms/index.html)
17. 🍔 [Contributing](https://docs.flaxengine.com/manual/contributing/index.html)
18. 🍔 [Release Notes](https://docs.flaxengine.com/manual/release-notes/index.html)


Details Contents

### 🍔 FlaxDocs: Get started
- [Get started](https://docs.flaxengine.com/manual/get-started/index.html)
- - [Get Flax](https://docs.flaxengine.com/manual/get-started/get-flax.html)
- - - [Requirements](https://docs.flaxengine.com/manual/get-started/requirements.html)
- - - [Editor on Linux](https://docs.flaxengine.com/manual/get-started/linux.html)
- - - [Editor on Mac](https://docs.flaxengine.com/manual/get-started/mac.html)
- - [Visual Studio extension](https://docs.flaxengine.com/manual/get-started/vs-extension.html)
- - [Create a project](https://docs.flaxengine.com/manual/get-started/create-a-project.html)
- - [Editor](https://docs.flaxengine.com/manual/get-started/editor.html)
- - - [Flax for UE4® developers](https://docs.flaxengine.com/manual/get-started/flax-for-ue4-devs/index.html)
- - - [Flax for Unity® developers](https://docs.flaxengine.com/manual/get-started/flax-for-unity-devs/index.html)
- - - [Flax for Godot developers](https://docs.flaxengine.com/manual/get-started/flax-for-godot-devs/index.html)
- - [Glossary](https://docs.flaxengine.com/manual/get-started/glossary.html)
- - [Scenes](https://docs.flaxengine.com/manual/get-started/scenes/index.html)
- - - [Actors](https://docs.flaxengine.com/manual/get-started/scenes/actors.html)
- - - - [Placing Actors](https://docs.flaxengine.com/manual/get-started/scenes/placing-actors.html)
- - - - [Selecting Actors](https://docs.flaxengine.com/manual/get-started/scenes/selecting-actors.html)
- - - - [Transforming Actors](https://docs.flaxengine.com/manual/get-started/scenes/transforming-actors.html)
- - - [World Units](https://docs.flaxengine.com/manual/get-started/scenes/world-units.html)
- - - [Scene Data](https://docs.flaxengine.com/manual/get-started/scenes/scene-data.html)
- - [Assets](https://docs.flaxengine.com/manual/get-started/assets/index.html)
- - - [Creating Assets](https://docs.flaxengine.com/manual/get-started/assets/creating-assets.html)
- - - [Using Assets](https://docs.flaxengine.com/manual/get-started/assets/using-assets.html)
- - - [Searching Assets](https://docs.flaxengine.com/manual/get-started/assets/searching-assets.html)
- - [Prefabs](https://docs.flaxengine.com/manual/get-started/prefabs/index.html)
- - - [Prefab Editor](https://docs.flaxengine.com/manual/get-started/prefabs/prefab-editor.html)
- - - [How to create a prefab](https://docs.flaxengine.com/manual/get-started/prefabs/creating-prefabs.html)
- - - [How to spawn a prefab](https://docs.flaxengine.com/manual/get-started/prefabs/spawning-prefabs.html)
- - [Project structure](https://docs.flaxengine.com/manual/get-started/project-structure.html)
- - - [Version control](https://docs.flaxengine.com/manual/get-started/version-control.html)
- - - [Distribute a game](https://docs.flaxengine.com/manual/get-started/distribute-a-game.html)

### 🍔 FlaxDocs: Samples and Tutorials
- [Samples and Tutorials](https://docs.flaxengine.com/manual/samples-tutorials/index.html)
- - [Samples](https://docs.flaxengine.com/manual/samples-tutorials/samples/index.html)
- - [Arizona Framework Sample](https://docs.flaxengine.com/manual/samples-tutorials/samples/arizona.html)
- - [Tutorials](https://docs.flaxengine.com/manual/samples-tutorials/tutorials/index.html)

### 🍔 FlaxDocs: Editor
- [Editor](https://docs.flaxengine.com/manual/editor/index.html)
- - [Interface](https://docs.flaxengine.com/manual/editor/interface.html)
- - [Play in-editor](https://docs.flaxengine.com/manual/editor/play-in-editor.html)
- - [Windows](https://docs.flaxengine.com/manual/editor/windows/index.html)
- - - [Viewport](https://docs.flaxengine.com/manual/editor/windows/viewport.html)
- - - [Content Window](https://docs.flaxengine.com/manual/editor/windows/content-window.html)
- - - [Properties Window](https://docs.flaxengine.com/manual/editor/windows/properties-window.html)
- - - [Scene Window](https://docs.flaxengine.com/manual/editor/windows/scene-window.html)
- - - [Toolbar](https://docs.flaxengine.com/manual/editor/windows/toolbar.html)
- - - [Toolbox](https://docs.flaxengine.com/manual/editor/windows/toolbox.html)
- - - [Output Log](https://docs.flaxengine.com/manual/editor/windows/output-log.html)
- - - [Debug Log](https://docs.flaxengine.com/manual/editor/windows/debug-log.html)
- - - [Content Search](https://docs.flaxengine.com/manual/editor/windows/content-search.html)
- - [Game Settings](https://docs.flaxengine.com/manual/editor/game-settings/index.html)
- - - [Time Settings](https://docs.flaxengine.com/manual/editor/game-settings/time-settings.html)
- - - [Layers And Tags Settings](https://docs.flaxengine.com/manual/editor/game-settings/layers-and-tags-settings.html)
- - - [Graphics Settings](https://docs.flaxengine.com/manual/editor/game-settings/graphics-settings.html)
- - - [Build Settings](https://docs.flaxengine.com/manual/editor/game-settings/build-settings.html)
- - - [Streaming Settings](https://docs.flaxengine.com/manual/editor/game-settings/streaming-settings.html)
- - - [Custom Settings](https://docs.flaxengine.com/manual/editor/game-settings/custom-settings.html)
- - [Game Cooker](https://docs.flaxengine.com/manual/editor/game-cooker/index.html)
- - - [Game Data Security](https://docs.flaxengine.com/manual/editor/game-cooker/security.html)
- - [Flax. Build](https://docs.flaxengine.com/manual/editor/flax-build/index.html)
- - - [API Tags](https://docs.flaxengine.com/manual/editor/flax-build/api-tags.html)
- - - [Plugins](https://docs.flaxengine.com/manual/editor/flax-build/plugins.html)
- - [Editor Options](https://docs.flaxengine.com/manual/editor/options/index.html)
- - [Profiling](https://docs.flaxengine.com/manual/editor/profiling/index.html)
- - - [Profiler](https://docs.flaxengine.com/manual/editor/profiling/profiler.html)
- - - [Tracy](https://docs.flaxengine.com/manual/editor/profiling/tracy.html)
- - - [dot Trace](https://docs.flaxengine.com/manual/editor/profiling/dot-trace.html)
- - [Localization](https://docs.flaxengine.com/manual/editor/localization/index.html)
- - [Advanced](https://docs.flaxengine.com/manual/editor/advanced/index.html)
- - - [Extending Flax Editor](https://docs.flaxengine.com/manual/editor/advanced/extending-editor.html)
- - - [Command Line Access](https://docs.flaxengine.com/manual/editor/advanced/command-line-access.html)
- - - [Custom Visject Surfaces](https://docs.flaxengine.com/manual/editor/advanced/custom-visject-surface.html)
- - - [Editor Style](https://docs.flaxengine.com/manual/editor/advanced/style.html)
- - - [Custom Engine Build](https://docs.flaxengine.com/manual/editor/advanced/custom-engine.html)
- - - [Game and Engine Flow](https://docs.flaxengine.com/manual/editor/advanced/game-engine-flow.html)
- - - [Asset References](https://docs.flaxengine.com/manual/editor/advanced/asset-references.html)
- - [Large Worlds](https://docs.flaxengine.com/manual/editor/large-worlds/index.html)

### 🍔 FlaxDocs: Graphics
- [Graphics](https://docs.flaxengine.com/manual/graphics/index.html)
- - [Rendering overview](https://docs.flaxengine.com/manual/graphics/overview/index.html)
- - [Cameras](https://docs.flaxengine.com/manual/graphics/cameras/index.html)
- - - [How to render a camera to a texture](https://docs.flaxengine.com/manual/graphics/cameras/render-camera-to-texture.html)
- - [Materials](https://docs.flaxengine.com/manual/graphics/materials/index.html)
- - - [Materials Basics](https://docs.flaxengine.com/manual/graphics/materials/basics/index.html)
- - - [Materials Editor](https://docs.flaxengine.com/manual/graphics/materials/material-editor/index.html)
- - - [Material Properties](https://docs.flaxengine.com/manual/graphics/materials/material-properties/index.html)
- - - [Material Inputs](https://docs.flaxengine.com/manual/graphics/materials/material-inputs.html)
- - - [Blend Modes](https://docs.flaxengine.com/manual/graphics/materials/blend-modes/index.html)
- - - [Shading Models](https://docs.flaxengine.com/manual/graphics/materials/shading-models/index.html)
- - - [Layered Materials](https://docs.flaxengine.com/manual/graphics/materials/layered-materials/index.html)
- - - [Instanced Materials](https://docs.flaxengine.com/manual/graphics/materials/instanced-materials/index.html)
- - - [Material Functions](https://docs.flaxengine.com/manual/graphics/materials/material-functions.html)
- - [Decals](https://docs.flaxengine.com/manual/graphics/decals/index.html)
- - - [Decal Actor](https://docs.flaxengine.com/manual/graphics/decals/decal.html)
- - - [How to create a decal](https://docs.flaxengine.com/manual/graphics/decals/create-decal.html)
- - [Splines](https://docs.flaxengine.com/manual/graphics/splines/index.html)
- - - [How to animate object over spline](https://docs.flaxengine.com/manual/graphics/splines/animate-object.html)
- - - [How to create road from spline](https://docs.flaxengine.com/manual/graphics/splines/create-road.html)
- - - [How to create dynamic chain from spline](https://docs.flaxengine.com/manual/graphics/splines/create-chain.html)
- - [Sprites](https://docs.flaxengine.com/manual/graphics/sprites/index.html)
- - - [Importing Sprites](https://docs.flaxengine.com/manual/graphics/sprites/importing-sprites.html)
- - - [Modifying Sprite Atlas](https://docs.flaxengine.com/manual/graphics/sprites/modifying-sprite-atlas.html)
- - [Textures](https://docs.flaxengine.com/manual/graphics/textures/index.html)
- - - [Texture Window](https://docs.flaxengine.com/manual/graphics/textures/texture-window.html)
- - - [Texture Import Settings](https://docs.flaxengine.com/manual/graphics/textures/import-settings.html)
- - - [How to generate procedural texture](https://docs.flaxengine.com/manual/graphics/textures/generate-texture.html)
- - - [Cube Textures](https://docs.flaxengine.com/manual/graphics/textures/cube-textures.html)
- - - [Texture Groups](https://docs.flaxengine.com/manual/graphics/textures/texture-groups.html)
- - [Models](https://docs.flaxengine.com/manual/graphics/models/index.html)
- - - [Importing Models](https://docs.flaxengine.com/manual/graphics/models/import.html)
- - - [Static Model](https://docs.flaxengine.com/manual/graphics/models/static-model.html)
- - - [Model Window](https://docs.flaxengine.com/manual/graphics/models/model-window.html)
- - - [Vertex Painting](https://docs.flaxengine.com/manual/graphics/models/vertex-painting.html)
- - - [Signed Distance Fields](https://docs.flaxengine.com/manual/graphics/models/sdf.html)
- - - [How to generate procedural model](https://docs.flaxengine.com/manual/graphics/models/generate-model.html)
- - [Lighting](https://docs.flaxengine.com/manual/graphics/lighting/index.html)
- - - [Light Types](https://docs.flaxengine.com/manual/graphics/lighting/light-types/index.html)
- - - - [Directional Light](https://docs.flaxengine.com/manual/graphics/lighting/light-types/directional-light.html)
- - - - [Point Light](https://docs.flaxengine.com/manual/graphics/lighting/light-types/point-light.html)
- - - - [Spot Light](https://docs.flaxengine.com/manual/graphics/lighting/light-types/spot-light.html)
- - - - [Sky Light](https://docs.flaxengine.com/manual/graphics/lighting/light-types/sky-light.html)
- - - [Shadows](https://docs.flaxengine.com/manual/graphics/lighting/shadows.html)
- - - [IES Light Profiles](https://docs.flaxengine.com/manual/graphics/lighting/ies-profiles.html)
- - - [Sky and Skybox](https://docs.flaxengine.com/manual/graphics/lighting/sky-skybox/index.html)
- - - - [Sky](https://docs.flaxengine.com/manual/graphics/lighting/sky-skybox/sky.html)
- - - - [Skybox](https://docs.flaxengine.com/manual/graphics/lighting/sky-skybox/skybox.html)
- - - [Reflections](https://docs.flaxengine.com/manual/graphics/lighting/reflections/index.html)
- - - - [Environment Probe](https://docs.flaxengine.com/manual/graphics/lighting/reflections/env-probe.html)
- - - [Global Illumination](https://docs.flaxengine.com/manual/graphics/lighting/gi/index.html)
- - - - [Realtime Global Illumination](https://docs.flaxengine.com/manual/graphics/lighting/gi/realtime.html)
- - - - [How to setup Realtime Global Illumination](https://docs.flaxengine.com/manual/graphics/lighting/gi/how-to-setup-gi.html)
- - - - [Lightmap UVs](https://docs.flaxengine.com/manual/graphics/lighting/gi/lightmap-uvs.html)
- - - - [Lightmapping](https://docs.flaxengine.com/manual/graphics/lighting/gi/lightmapping.html)
- - - - [Lightmap Settings](https://docs.flaxengine.com/manual/graphics/lighting/gi/settings.html)
- - [Fog effects](https://docs.flaxengine.com/manual/graphics/fog-effects/index.html)
- - - [Exponential Height Fog](https://docs.flaxengine.com/manual/graphics/fog-effects/exponential-height-fog.html)
- - - [Volumetric Fog](https://docs.flaxengine.com/manual/graphics/fog-effects/volumetric-fog.html)
- - [Post effects](https://docs.flaxengine.com/manual/graphics/post-effects/index.html)
- - - [Ambient Occlusion](https://docs.flaxengine.com/manual/graphics/post-effects/ambient-occlusion.html)
- - - [Anti-Aliasing](https://docs.flaxengine.com/manual/graphics/post-effects/anti-aliasing.html)
- - - [Bloom](https://docs.flaxengine.com/manual/graphics/post-effects/bloom.html)
- - - [Camera Artifacts](https://docs.flaxengine.com/manual/graphics/post-effects/camera-artifacts.html)
- - - [Color Grading](https://docs.flaxengine.com/manual/graphics/post-effects/color-grading.html)
- - - [Depth of Field](https://docs.flaxengine.com/manual/graphics/post-effects/depth-of-field.html)
- - - [Motion Blur](https://docs.flaxengine.com/manual/graphics/post-effects/motion-blur.html)
- - - [Eye Adaptation](https://docs.flaxengine.com/manual/graphics/post-effects/eye-adaptation.html)
- - - [Lens Flares](https://docs.flaxengine.com/manual/graphics/post-effects/lens-flares.html)
- - - [Screen Space Reflections](https://docs.flaxengine.com/manual/graphics/post-effects/screen-space-reflections.html)
- - - [Tone Mapping](https://docs.flaxengine.com/manual/graphics/post-effects/tone-mapping.html)
- - - [Post Fx Volumes](https://docs.flaxengine.com/manual/graphics/post-effects/post-fx-volumes.html)
- - - [Post Process Materials](https://docs.flaxengine.com/manual/graphics/post-effects/post-fx-materials.html)
- - [Shaders](https://docs.flaxengine.com/manual/graphics/shaders/index.html)
- - - [Custom Fullscreen Shader](https://docs.flaxengine.com/manual/graphics/shaders/custom-fullscreen-shader.html)
- - - [Custom Geometry Drawing](https://docs.flaxengine.com/manual/graphics/shaders/custom-geometry-drawing.html)
- - - [Custom Compute Shader](https://docs.flaxengine.com/manual/graphics/shaders/custom-compute-shader.html)
- - - [Graphics API](https://docs.flaxengine.com/manual/graphics/shaders/graphics-api.html)
- - [Debugging tools](https://docs.flaxengine.com/manual/graphics/debugging-tools/index.html)
- - - [Debug View](https://docs.flaxengine.com/manual/graphics/debugging-tools/debug-view.html)
- - - [View Flags](https://docs.flaxengine.com/manual/graphics/debugging-tools/view-flags.html)
- - [Tutorials](https://docs.flaxengine.com/manual/graphics/tutorials/index.html)
- - - [How to render object outline](https://docs.flaxengine.com/manual/graphics/tutorials/render-object-outline.html)
- - - [How to render FPS weapon](https://docs.flaxengine.com/manual/graphics/tutorials/render-fps-weapon.html)
- - - [How to use anisotropic texture sampler](https://docs.flaxengine.com/manual/graphics/tutorials/anisotropic-texture-sampler.html)
- - - [How to use dynamic texture](https://docs.flaxengine.com/manual/graphics/tutorials/use-dynamic-texture.html)
- - - [How to setup time of the day simulation](https://docs.flaxengine.com/manual/graphics/tutorials/time-of-the-day.html)

### 🍔 FlaxDocs: Scripting
- [Scripting](https://docs.flaxengine.com/manual/scripting/index.html)
- - [Create and use a script](https://docs.flaxengine.com/manual/scripting/new-script.html)
- - [Script properties and fields](https://docs.flaxengine.com/manual/scripting/properties.html)
- - [Script events](https://docs.flaxengine.com/manual/scripting/events.html)
- - [Accessing scene objects](https://docs.flaxengine.com/manual/scripting/scene-objects.html)
- - [Creating and destroying objects](https://docs.flaxengine.com/manual/scripting/objects-lifetime.html)
- - [Attributes](https://docs.flaxengine.com/manual/scripting/attributes.html)
- - [Scripts debugging](https://docs.flaxengine.com/manual/scripting/debugging/index.html)
- - - [Visual Studio](https://docs.flaxengine.com/manual/scripting/debugging/visual-studio.html)
- - - [Visual Studio Code](https://docs.flaxengine.com/manual/scripting/debugging/visual-studio-code.html)
- - - [Rider](https://docs.flaxengine.com/manual/scripting/debugging/rider.html)
- - [Scripts serialization](https://docs.flaxengine.com/manual/scripting/serialization/index.html)
- - [Empty Actor](https://docs.flaxengine.com/manual/scripting/empty-actor.html)
- - [Engine API](https://docs.flaxengine.com/manual/scripting/engine-api.html)
- - [Custom Editors](https://docs.flaxengine.com/manual/scripting/custom-editors/index.html)
- - - [Custom script editor](https://docs.flaxengine.com/manual/scripting/tutorials/custom-editor.html)
- - - [Attributes](https://docs.flaxengine.com/manual/scripting/custom-editors/attributes.html)
- - [Preprocessor variables](https://docs.flaxengine.com/manual/scripting/preprocessor.html)
- - [Scripting restrictions](https://docs.flaxengine.com/manual/scripting/restrictions.html)
- - [C++ Scripting](https://docs.flaxengine.com/manual/scripting/cpp/index.html)
- - - [Common Types](https://docs.flaxengine.com/manual/scripting/cpp/common-types.html)
- - - [Collections](https://docs.flaxengine.com/manual/scripting/cpp/collections.html)
- - - [String Formatting](https://docs.flaxengine.com/manual/scripting/cpp/string-formatting.html)
- - - [Logging and Assertions](https://docs.flaxengine.com/manual/scripting/cpp/logging-assertions.html)
- - - [Object References](https://docs.flaxengine.com/manual/scripting/cpp/object-references.html)
- - - [Serialization](https://docs.flaxengine.com/manual/scripting/cpp/serialization.html)
- - - [Interfaces](https://docs.flaxengine.com/manual/scripting/cpp/interfaces.html)
- - - [Tips &amp; Tricks](https://docs.flaxengine.com/manual/scripting/cpp/tips-tricks.html)
- - [Visual Scripting](https://docs.flaxengine.com/manual/scripting/visual/index.html)
- - - [Events](https://docs.flaxengine.com/manual/scripting/visual/events.html)
- - - [Arrays](https://docs.flaxengine.com/manual/scripting/visual/arrays.html)
- - - [Dictionaries](https://docs.flaxengine.com/manual/scripting/visual/dictionaries.html)
- - [Plugins](https://docs.flaxengine.com/manual/scripting/plugins/index.html)
- - - [Plugins Window](https://docs.flaxengine.com/manual/scripting/plugins/plugins-window.html)
- - - [Plugin Project](https://docs.flaxengine.com/manual/scripting/plugins/plugin-project.html)
- - [Advanced](https://docs.flaxengine.com/manual/scripting/advanced/index.html)
- - - [Raw Data Asset](https://docs.flaxengine.com/manual/scripting/advanced/raw-data-asset.html)
- - - [Custom Editor Options](https://docs.flaxengine.com/manual/scripting/advanced/custom-editor-options.html)
- - - [Curve](https://docs.flaxengine.com/manual/scripting/advanced/curve.html)
- - - [Access Game Window](https://docs.flaxengine.com/manual/scripting/advanced/access-game-window.html)
- - - [Multithreading](https://docs.flaxengine.com/manual/scripting/advanced/multithreading.html)
- - - [Screenshots](https://docs.flaxengine.com/manual/scripting/advanced/screenshots.html)
- - - [Gameplay Globals](https://docs.flaxengine.com/manual/scripting/advanced/gameplay-globals.html)
- - - [Refactoring and Renaming](https://docs.flaxengine.com/manual/scripting/advanced/refactoring-renaming.html)
- - - [Cert Store](https://docs.flaxengine.com/manual/scripting/advanced/cert-store.html)
- - - [Noise](https://docs.flaxengine.com/manual/scripting/advanced/noise.html)
- - - [Tags](https://docs.flaxengine.com/manual/scripting/advanced/tags.html)
- - - [Run code on module load](https://docs.flaxengine.com/manual/scripting/advanced/code-on-load.html)
- - - [File Reference](https://docs.flaxengine.com/manual/scripting/advanced/file-reference.html)
- - [Tutorials](https://docs.flaxengine.com/manual/scripting/tutorials/index.html)
- - - [How to create a custom editor](https://docs.flaxengine.com/manual/scripting/tutorials/custom-editor.html)
- - - [How to create a custom editor window](https://docs.flaxengine.com/manual/scripting/tutorials/custom-window.html)
- - - [How to create a custom editor plugin](https://docs.flaxengine.com/manual/scripting/tutorials/custom-plugin.html)
- - - [How to create a custom asset type](https://docs.flaxengine.com/manual/scripting/tutorials/custom-asset.html)
- - - [How to create a custom actor](https://docs.flaxengine.com/manual/scripting/tutorials/custom-actor.html)
- - - [How to use custom settings](https://docs.flaxengine.com/manual/scripting/tutorials/custom-settings.html)
- - - [How to import asset from code](https://docs.flaxengine.com/manual/scripting/tutorials/import-asset-from-code.html)
- - - [How to spawn decal on mouse click](https://docs.flaxengine.com/manual/scripting/tutorials/decal-on-mouse-click.html)
- - - [How to control Post Fx from code](https://docs.flaxengine.com/manual/scripting/tutorials/control-postfx-from-code.html)
- - - [How to use third-party library](https://docs.flaxengine.com/manual/scripting/tutorials/use-third-party-library.html)
- - - [How to add scripts module](https://docs.flaxengine.com/manual/scripting/tutorials/add-scripts-module.html)
- - - [How to create loading screen](https://docs.flaxengine.com/manual/scripting/tutorials/loading-screen.html)
- - - [How to change scene from script](https://docs.flaxengine.com/manual/scripting/tutorials/change-scene.html)

### 🍔 FlaxDocs: Animation
- [Animation](https://docs.flaxengine.com/manual/animation/index.html)
- - [Skinned Model](https://docs.flaxengine.com/manual/animation/skinned-model/index.html)
- - - [Editor Interface](https://docs.flaxengine.com/manual/animation/skinned-model/interface.html)
- - [Animation](https://docs.flaxengine.com/manual/animation/animation/index.html)
- - - [Animation Events](https://docs.flaxengine.com/manual/animation/animation/anim-events.html)
- - [Anim Graph](https://docs.flaxengine.com/manual/animation/anim-graph/index.html)
- - - [Editor Interface](https://docs.flaxengine.com/manual/animation/anim-graph/interface.html)
- - - [Graph Parameters](https://docs.flaxengine.com/manual/animation/anim-graph/parameters.html)
- - - [State Machines](https://docs.flaxengine.com/manual/animation/anim-graph/state-machine.html)
- - - [Inverse Kinematics](https://docs.flaxengine.com/manual/animation/anim-graph/inverse-kinematics.html)
- - - [Functions](https://docs.flaxengine.com/manual/animation/anim-graph/functions.html)
- - - [Animation Slots](https://docs.flaxengine.com/manual/animation/anim-graph/animation-slots.html)
- - - [Custom Nodes](https://docs.flaxengine.com/manual/animation/anim-graph/custom-nodes.html)
- - [Animated Model](https://docs.flaxengine.com/manual/animation/animated-model.html)
- - [Skeleton Mask](https://docs.flaxengine.com/manual/animation/skeleton-mask.html)
- - [Bone Socket](https://docs.flaxengine.com/manual/animation/bone-socket.html)
- - [Scene Animations](https://docs.flaxengine.com/manual/animation/scene-animations/index.html)
- - - [Scene Animation](https://docs.flaxengine.com/manual/animation/scene-animations/scene-animation.html)
- - - [Scene Animation Player](https://docs.flaxengine.com/manual/animation/scene-animations/scene-animation-player.html)
- - - [Tutorials](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/index.html)
- - - - [How to animate actor](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/animate-actor.html)
- - - - [How to make a cut-scene](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/cut-scene.html)
- - - - [How to animate UI](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/animate-ui.html)
- - - - [How to use event track](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/event-track.html)
- - - - [How to create scene animation from code](https://docs.flaxengine.com/manual/animation/scene-animations/tutorials/scene-anim-from-code.html)
- - [Advanced](https://docs.flaxengine.com/manual/animation/advanced/index.html)
- - - [Root motion](https://docs.flaxengine.com/manual/animation/advanced/root-motion.html)
- - - [Bones debugging](https://docs.flaxengine.com/manual/animation/advanced/bones-debugging.html)
- - [Tutorials](https://docs.flaxengine.com/manual/animation/tutorials/index.html)
- - - [How to setup animated model](https://docs.flaxengine.com/manual/animation/tutorials/setup-animated-model.html)
- - - [How to create Anim Graph](https://docs.flaxengine.com/manual/animation/tutorials/create-anim-graph.html)
- - - [How to use Anim Graph](https://docs.flaxengine.com/manual/animation/tutorials/use-anim-graph.html)
- - - [How to change Anim Graph parameter from code](https://docs.flaxengine.com/manual/animation/tutorials/change-anim-graph-param.html)
- - - [How to blend two animations](https://docs.flaxengine.com/manual/animation/tutorials/blend-anims.html)
- - - [How to use Skeleton Mask](https://docs.flaxengine.com/manual/animation/tutorials/use-skeleton-mask.html)
- - - [How to setup State Machine](https://docs.flaxengine.com/manual/animation/tutorials/setup-state-machine.html)
- - - [How to play animation from code](https://docs.flaxengine.com/manual/animation/tutorials/play-animation-from-code.html)

### 🍔 FlaxDocs: Audio
- [Audio](https://docs.flaxengine.com/manual/audio/index.html)
- - [Importing audio](https://docs.flaxengine.com/manual/audio/importing.html)
- - [Using audio](https://docs.flaxengine.com/manual/audio/using.html)
- - [Audio Clip](https://docs.flaxengine.com/manual/audio/audio-clip.html)
- - [Audio Source](https://docs.flaxengine.com/manual/audio/audio-source.html)
- - [Audio Listener](https://docs.flaxengine.com/manual/audio/audio-listener.html)
- - [Audio Settings](https://docs.flaxengine.com/manual/audio/audio-settings.html)

### 🍔 FlaxDocs: Navigation
- [Navigation](https://docs.flaxengine.com/manual/navigation/index.html)
- - [Nav Mesh Bounds Volume](https://docs.flaxengine.com/manual/navigation/nav-mesh-bounds-volume.html)
- - [Nav Link](https://docs.flaxengine.com/manual/navigation/nav-link.html)
- - [Nav Crowd](https://docs.flaxengine.com/manual/navigation/nav-crowd.html)
- - [Nav Modifier Volume](https://docs.flaxengine.com/manual/navigation/nav-modifier-volume.html)
- - [Navigation Settings](https://docs.flaxengine.com/manual/navigation/navigation-settings.html)
- - [Tutorials](https://docs.flaxengine.com/manual/navigation/tutorials/index.html)
- - - [How to create navmesh](https://docs.flaxengine.com/manual/navigation/tutorials/create-navmesh.html)
- - - [How to create path following agent](https://docs.flaxengine.com/manual/navigation/tutorials/path-following.html)

### 🍔 FlaxDocs: UI
- [UI](https://docs.flaxengine.com/manual/ui/index.html)
- - [UI Canvas](https://docs.flaxengine.com/manual/ui/canvas/index.html)
- - [UI Control](https://docs.flaxengine.com/manual/ui/control/index.html)
- - - [Transform](https://docs.flaxengine.com/manual/ui/control/transform.html)
- - [Brushes](https://docs.flaxengine.com/manual/ui/brushes/index.html)
- - [Controls](https://docs.flaxengine.com/manual/ui/controls/index.html)
- - - [Button](https://docs.flaxengine.com/manual/ui/controls/button.html)
- - - [Check Box](https://docs.flaxengine.com/manual/ui/controls/checkbox.html)
- - - [Image](https://docs.flaxengine.com/manual/ui/controls/image.html)
- - - [Label](https://docs.flaxengine.com/manual/ui/controls/label.html)
- - - [Dropdown](https://docs.flaxengine.com/manual/ui/controls/dropdown.html)
- - - [Text Box](https://docs.flaxengine.com/manual/ui/controls/textbox.html)
- - - [Rich Text Box](https://docs.flaxengine.com/manual/ui/controls/rich-text-box.html)
- - - [Border](https://docs.flaxengine.com/manual/ui/controls/border.html)
- - - [Panel](https://docs.flaxengine.com/manual/ui/controls/panel.html)
- - - [Alpha Panel](https://docs.flaxengine.com/manual/ui/controls/alpha-panel.html)
- - - [Drop Panel](https://docs.flaxengine.com/manual/ui/controls/drop-panel.html)
- - - [Blur Panel](https://docs.flaxengine.com/manual/ui/controls/blur-panel.html)
- - - [Progress Bar](https://docs.flaxengine.com/manual/ui/controls/progress-bar.html)
- - - [Spacer](https://docs.flaxengine.com/manual/ui/controls/spacer.html)
- - - [Grid Panel](https://docs.flaxengine.com/manual/ui/controls/grid-panel.html)
- - - [Uniform Grid Panel](https://docs.flaxengine.com/manual/ui/controls/uniform-grid-panel.html)
- - - [Horizontal Panel](https://docs.flaxengine.com/manual/ui/controls/horizontal-panel.html)
- - - [Vertical Panel](https://docs.flaxengine.com/manual/ui/controls/vertical-panel.html)
- - - [Tiles Panel](https://docs.flaxengine.com/manual/ui/controls/tiles-panel.html)
- - - [Render To Texture Control](https://docs.flaxengine.com/manual/ui/controls/render-to-texture-control.html)
- - - [Canvas Scaler](https://docs.flaxengine.com/manual/ui/controls/canvas-scaler.html)
- - [Fonts](https://docs.flaxengine.com/manual/ui/fonts/index.html)
- - [Text Render](https://docs.flaxengine.com/manual/ui/text-render/index.html)
- - [Sprite Render](https://docs.flaxengine.com/manual/ui/sprite-render/index.html)
- - [High DPI](https://docs.flaxengine.com/manual/ui/high-dpi/index.html)
- - [UI Navigation](https://docs.flaxengine.com/manual/ui/ui-navigation.html)
- - [Tutorials](https://docs.flaxengine.com/manual/ui/tutorials/index.html)
- - - [How to create UI](https://docs.flaxengine.com/manual/ui/tutorials/create-ui.html)
- - - [How to create UI from code](https://docs.flaxengine.com/manual/ui/tutorials/create-ui-from-code.html)
- - - [How to create a custom font material](https://docs.flaxengine.com/manual/ui/tutorials/create-font-material.html)
- - - [How to create a custom GUI material](https://docs.flaxengine.com/manual/ui/tutorials/create-gui-material.html)
- - - [How to blur UI panel background](https://docs.flaxengine.com/manual/ui/tutorials/blur-background.html)
- - - [How to create a Main Menu](https://docs.flaxengine.com/manual/ui/tutorials/create-main-menu.html)
- - - [How to create a custom control](https://docs.flaxengine.com/manual/ui/tutorials/create-custom-control.html)
- - - [How to create UI animation in prefab](https://docs.flaxengine.com/manual/ui/tutorials/ui-prefab-animation.html)

### 🍔 FlaxDocs: Input
- [Input](https://docs.flaxengine.com/manual/input/index.html)
- - [Virtual Input](https://docs.flaxengine.com/manual/input/virtual-input.html)
- - [Input Settings](https://docs.flaxengine.com/manual/input/input-settings.html)
- - [Mouse](https://docs.flaxengine.com/manual/input/mouse.html)
- - [Keyboard](https://docs.flaxengine.com/manual/input/keyboard.html)
- - [Gamepads](https://docs.flaxengine.com/manual/input/gamepads.html)

### 🍔 FlaxDocs: Terrain
- [Terrain](https://docs.flaxengine.com/manual/terrain/index.html)
- - [Terrain Materials](https://docs.flaxengine.com/manual/terrain/materials.html)
- - [Terrain Editing](https://docs.flaxengine.com/manual/terrain/editing.html)
- - [Terrain Painting](https://docs.flaxengine.com/manual/terrain/painting.html)
- - [Terrain Brushes](https://docs.flaxengine.com/manual/terrain/brushes.html)
- - [Terrain Collision](https://docs.flaxengine.com/manual/terrain/collision.html)
- - [Importing Terrain](https://docs.flaxengine.com/manual/terrain/importing.html)
- - [Terrain Holes](https://docs.flaxengine.com/manual/terrain/holes.html)
- - [Tutorials](https://docs.flaxengine.com/manual/terrain/tutorials/index.html)
- - - [How to create terrain](https://docs.flaxengine.com/manual/terrain/tutorials/create-terrain.html)
- - - [How to import terrain](https://docs.flaxengine.com/manual/terrain/tutorials/import-terrain.html)
- - - [How to create terrain material](https://docs.flaxengine.com/manual/terrain/tutorials/terrain-material.html)
- - - [How to create terrain from code](https://docs.flaxengine.com/manual/terrain/tutorials/terrain-from-code.html)
- - - [How to create holes in terrain](https://docs.flaxengine.com/manual/terrain/tutorials/terrain-holes.html)
- - - [How to add tessallation to terrain](https://docs.flaxengine.com/manual/terrain/tutorials/tessellation-and-terrain.html)

### 🍔 FlaxDocs: Foliage
- [Foliage](https://docs.flaxengine.com/manual/foliage/index.html)
- - [Foliage Types](https://docs.flaxengine.com/manual/foliage/types.html)
- - [Foliage Editing](https://docs.flaxengine.com/manual/foliage/editing.html)
- - [Foliage Density Scaling](https://docs.flaxengine.com/manual/foliage/density-scaling.html)
- - [Tutorials](https://docs.flaxengine.com/manual/foliage/tutorials/index.html)
- - - [How to create foliage](https://docs.flaxengine.com/manual/foliage/tutorials/create-foliage.html)
- - - [How to create foliage from code](https://docs.flaxengine.com/manual/foliage/tutorials/foliage-from-code.html)

### 🍔 FlaxDocs: Physics
- [Physics](https://docs.flaxengine.com/manual/physics/index.html)
- - [Colliders](https://docs.flaxengine.com/manual/physics/colliders/index.html)
- - - [Box Collider](https://docs.flaxengine.com/manual/physics/colliders/box-collider.html)
- - - [Sphere Collider](https://docs.flaxengine.com/manual/physics/colliders/sphere-collider.html)
- - - [Capsule Collider](https://docs.flaxengine.com/manual/physics/colliders/capsule-collider.html)
- - - [Mesh Collider](https://docs.flaxengine.com/manual/physics/colliders/mesh-collider.html)
- - - - [Collision Data](https://docs.flaxengine.com/manual/physics/colliders/collision-data.html)
- - [Rigid Bodies](https://docs.flaxengine.com/manual/physics/rigid-bodies.html)
- - [Character Controller](https://docs.flaxengine.com/manual/physics/character-controller.html)
- - [Triggers](https://docs.flaxengine.com/manual/physics/triggers.html)
- - [Joints](https://docs.flaxengine.com/manual/physics/joints/index.html)
- - - [Fixed Joint](https://docs.flaxengine.com/manual/physics/joints/fixed-joint.html)
- - - [Distance Joint](https://docs.flaxengine.com/manual/physics/joints/distance-joint.html)
- - - [Hinge Joint](https://docs.flaxengine.com/manual/physics/joints/hinge-joint.html)
- - - [Slider Joint](https://docs.flaxengine.com/manual/physics/joints/slider-joint.html)
- - - [Spherical Joint](https://docs.flaxengine.com/manual/physics/joints/spherical-joint.html)
- - - [D6 Joint](https://docs.flaxengine.com/manual/physics/joints/d6-joint.html)
- - [Raycasting](https://docs.flaxengine.com/manual/physics/raycasting.html)
- - [Collisions](https://docs.flaxengine.com/manual/physics/collisions.html)
- - [Physical Material](https://docs.flaxengine.com/manual/physics/physical-material.html)
- - [Physics Settings](https://docs.flaxengine.com/manual/physics/physics-settings.html)
- - [Vehicles](https://docs.flaxengine.com/manual/physics/vehicles.html)
- - [Ragdolls](https://docs.flaxengine.com/manual/physics/ragdolls.html)
- - [Tutorials](https://docs.flaxengine.com/manual/physics/tutorials/index.html)
- - - [How to create a bouncing ball](https://docs.flaxengine.com/manual/physics/tutorials/bouncing-ball.html)
- - - [How to use a trigger](https://docs.flaxengine.com/manual/physics/tutorials/use-trigger.html)

### 🍔 FlaxDocs: Particles
- [Particles](https://docs.flaxengine.com/manual/particles/index.html)
- - [Particle Emitter](https://docs.flaxengine.com/manual/particles/particle-emitter.html)
- - [Particle System](https://docs.flaxengine.com/manual/particles/particle-system.html)
- - [Particle Effect](https://docs.flaxengine.com/manual/particles/particle-effect.html)
- - [Particle Parameters](https://docs.flaxengine.com/manual/particles/particle-parameters.html)
- - [Particle Materials](https://docs.flaxengine.com/manual/particles/particle-materials.html)
- - [Particle Functions](https://docs.flaxengine.com/manual/particles/particle-functions.html)
- - [Particle Optimization](https://docs.flaxengine.com/manual/particles/particle-optimization.html)
- - [Tutorials](https://docs.flaxengine.com/manual/particles/tutorials/index.html)
- - - [How to fade particles near camera](https://docs.flaxengine.com/manual/particles/tutorials/fade-near-camera.html)
- - - [How to make soft particles](https://docs.flaxengine.com/manual/particles/tutorials/soft-particles.html)

### 🍔 FlaxDocs: Networking
- [Networking](https://docs.flaxengine.com/manual/networking/index.html)
- - [Network API](https://docs.flaxengine.com/manual/networking/network-api.html)
- - [Network Sample](https://docs.flaxengine.com/manual/networking/network-sample.html)
- - [Low-Level Networking](https://docs.flaxengine.com/manual/networking/low-level.html)
- - [High-Level Networking](https://docs.flaxengine.com/manual/networking/high-level.html)
- - [Online](https://docs.flaxengine.com/manual/networking/online/index.html)
- - [Tutorials](https://docs.flaxengine.com/manual/networking/tutorials/index.html)
- - - [How to create TCP client-server](https://docs.flaxengine.com/manual/networking/tutorials/create-tcp-client-server.html)
- - - [How to create networking server and client](https://docs.flaxengine.com/manual/networking/tutorials/network-client-server.html)

### 🍔 FlaxDocs: Platforms
- [Platforms](https://docs.flaxengine.com/manual/platforms/index.html)
- - [Windows](https://docs.flaxengine.com/manual/platforms/windows.html)
- - [UWP](https://docs.flaxengine.com/manual/platforms/uwp.html)
- - [Xbox One](https://docs.flaxengine.com/manual/platforms/xbox-one.html)
- - [Xbox Scarlett](https://docs.flaxengine.com/manual/platforms/xbox-scarlett.html)
- - [Play Station 4](https://docs.flaxengine.com/manual/platforms/ps4.html)
- - [Play Station 5](https://docs.flaxengine.com/manual/platforms/ps5.html)
- - [Linux](https://docs.flaxengine.com/manual/platforms/linux.html)
- - [Android](https://docs.flaxengine.com/manual/platforms/android.html)
- - [Switch](https://docs.flaxengine.com/manual/platforms/switch.html)
- - [macOS](https://docs.flaxengine.com/manual/platforms/mac.html)

### 🍔 FlaxDocs: Contributing
- [Contributing](https://docs.flaxengine.com/manual/contributing/index.html)
- - [Feature Requests](https://docs.flaxengine.com/manual/contributing/feature-requests.html)
- - [Report a bug](https://docs.flaxengine.com/manual/contributing/report-a-bug.html)
- - [Release Policy](https://docs.flaxengine.com/manual/contributing/release-policy.html)
- - [Public Projects](https://docs.flaxengine.com/manual/contributing/public-projects.html)

### 🍔 FlaxDocs: Release Notes
- [Release Notes](https://docs.flaxengine.com/manual/release-notes/index.html)
- - [1. 5 release notes](https://docs.flaxengine.com/manual/release-notes/1_5/index.html)
- - [1. 4 release notes](https://docs.flaxengine.com/manual/release-notes/1_4/index.html)
- - [1. 3 release notes](https://docs.flaxengine.com/manual/release-notes/1_3/index.html)
- - [1. 2 release notes](https://docs.flaxengine.com/manual/release-notes/1_2/index.html)
- - [1. 1 release notes](https://docs.flaxengine.com/manual/release-notes/1_1/index.html)
- - [1. 0 release notes](https://docs.flaxengine.com/manual/release-notes/1_0/index.html)
- - [Beta](https://docs.flaxengine.com/manual/release-notes/index.html#beta)
- - - [0. 7 release notes](https://docs.flaxengine.com/manual/release-notes/0_7/index.html)
- - - [0. 6 release notes](https://docs.flaxengine.com/manual/release-notes/0_6/index.html)
- - [Alpha](https://docs.flaxengine.com/manual/release-notes/index.html#alpha)
- - - [0. 5 release notes](https://docs.flaxengine.com/manual/release-notes/0_5/index.html)
- - - [0. 4 release notes](https://docs.flaxengine.com/manual/release-notes/0_4/index.html)
- - - [0. 3 release notes](https://docs.flaxengine.com/manual/release-notes/0_3/index.html)
- - - [0. 2 release notes](https://docs.flaxengine.com/manual/release-notes/0_2/index.html)
- - - [0. 1 release notes](https://docs.flaxengine.com/manual/release-notes/0_1/index.html)