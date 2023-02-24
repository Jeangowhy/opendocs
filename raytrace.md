

# 🚩 计算机图形学入门
- Lingqi Yan (闫令琪) Assistant Professor https://sites.cs.ucsb.edu/~lingqi/
- GAMES101: 现代计算机图形学入门 https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html
- CS180 / CS280: Introduction to Computer Graphics Winter 2021 https://sites.cs.ucsb.edu/~lingqi/teaching/cs180.html
- GAMES101-现代计算机图形学入门-闫令琪 https://www.bilibili.com/video/av90798049
- GAMES101 课程录像 https://www.bilibili.com/video/av90798049
- Grant Sanderson - 3blue1brown 线性代数的本质 https://www.bilibili.com/video/BV1ys411472E
- 【华中科技大学】计算机图形学 #万琳教授 https://www.bilibili.com/video/av85005453/
- Real-Time Rendering Fourth Edition https://pan.baidu.com/s/13OWXszPrjG0KxhIqR1srOQ#a1p7
- 计算机视觉最适合入门的8本教程 https://www.sohu.com/a/343250828_693397
- JavaScript 玩转计算机图形学 https://www.cnblogs.com/miloyip/archive/2010/03/29/1698953.html
- Gilbert Strang's, Introduction to Linear Algebra, 5th edition https://book4you.org/book/5241646/46a113
- MIT 18.06 Linear Algebra https://mitmath.github.io/1806/
- 麻省理工 - 线性代数 全34讲 https://www.bilibili.com/video/BV1ix411f7Yp/

Syllabus：

    日期    主题
    Feb 11  计算机图形学概述
    Feb 14  向量与线性代数 CH2（Miscellaneous Math）；CH5（Linear Algebra）
    Feb 18  变换（二维与三维） CH6（Transformation Matrices）
    Feb 21  变换（模型、视图、投影） CH6（Transformation Matrices）；CH7（Viewing）
    Feb 25  光栅化（三角形的离散化） CH3（Raster Images）
    Feb 28  光栅化（深度测试与抗锯齿） CH8（The Graphics Pipeline）；CH9（Signal Processing）
    Mar 3   着色（光照与基本着色模型） CH10（Surface Shading）
    Mar 7   着色（着色频率、图形管线、纹理映射） CH10（Surface Shading）；CH17（Using Graphics Hardware）
    Mar 10  着色（插值、高级纹理映射） CH11（Texture Mapping）
    Mar 13  几何（基本表示方法） CH12（Data Structures for Graphics）；CH22（Implicit Modeling）
    Mar 17  几何（曲线与曲面） CH15（Curves）
    Mar 20  几何（网格处理）、阴影图
    Mar 24  光线追踪（基本原理） CH4（Ray Tracing）
    Mar 27  光线追踪（加速结构） CH12（Data Structures for Graphics）
    Mar 31  光线追踪（辐射度量学、渲染方程与全局光照） CH18（Light）
    Apr 5   光线追踪（蒙特卡洛积分与路径追踪）
    Apr 7   材质与外观 CH24（Reflection）
    Apr 10  高级光线传播与复杂外观建模
    Apr 14  相机与透镜
    Apr 17  光场、颜色与感知 CH19（Color）
    Apr 21  动画与模拟（基本概念、质点弹簧系统、运动学） CH16（Computer Animation）
    Apr 24  动画与模拟（求解常微分方程，刚体与流体）

Pre-requisites for the course:

- 编程基础 C++ Programming, Algorithm, Data Structure
- 数学基础 Basic mathematics，Linear algebra, calculus, statistics
- 物理基础 Basic physics，Optics, Mechanics
- 其它 Misc，Numerical analysis, signal processing
- 一点美术 And a bit of aesthetics

• More dependent on Linear Algebra
- Vectors (dot products, cross products, …)
- Matrices (matrix-matrix, matrix-vector mult., …)
• For example,
- A point is a vector (?)
- An operation like translating or rotating objects can be matrix-vector multiplication

## ⚡ Vectors 向量概念

- • Usually written with an arrow over it or in bold V
- • Or using start and end points AB with arrow over it AB = B - A
- • Direction and length
- • No absolute starting position

Vector Normalization

• Magnitude (length) of a vector written as `|A|`
• Unit vector
- A vector with magnitude 1
- Finding the unit vector of a vector (normalization): `A/|A|`
- Used to represent directions

单位向量用 ^ 盖帽表示，比如 a 单位向量读作 A hat。向量和矩阵都可以转秩 Transpose，将行列互换，进行转换，然后用一个 T 上标表示。

Vector Addition

• Geometrically: Parallelogram law & Triangle law
• Algebraically: Simply add coordinates

Cartesian Coordinates

• X and Y can be any (usually orthogonal unit) vectors

## ⚡ Vector Multiplication 向量运算

• Dot product(scalar)
• Cross product
• Orthonormal bases and coordinate frames

根据余弦定理，向量点积定义：

    a·b = |b|·|a|cosθ

等式右边可以看到，是 3 个标量相乘，结果即为标量。向量点乘还有以下结合性质，k 为标量：

    a·b = b·a
    a·(b +c) = a·b + a·c
    (ka)·b = a·(k b) = k(a·b)

点乘的用途要点：

• Find angle between two vectors (e.g. cosine of angle between light source and surface)
• Finding projection of one vector on another
• Measure how close two directions are
• Decompose a vector 
• Determine forward / backward

图形学中，一般关心向量的方向信息，而不管其长度。

求投影向量，过另 b 向量向 a 向量作垂直线，原点到交点这就是投影向量。求投影向量操作可以将一个向量分解为两个向量，一个垂直、一个平衡于 a 向量。对于平衡于 a 的向量，用倒 T 下标表示，读作 perpendicular，k 为单位向量 a 的数量。

    K = |b⊥| = |b|cosθ

通过向量点乘运算，可以方便地得到两向量的夹角，或者判断同向、反向的方向关系。向量点乘结果为 0 就是垂直，小于 0 表示相反，大于 0 表示同向，这就是向量运算的一个应用。

对于单位向量的点乘，结果为 1 表示完全重叠，-1 表示反向，而其它值可以表示两向量的贴近度。比如，计算金属高光的时候，通过比较观察点是否在镜面反射角度即可确定光线的反射状态。

向量点乘用来 2D 或 3D 系统中，点坐标约定俗成用列式表达，各行相乘，即各轴坐标相乘再相加。

          | x1 |   | x2 |
    a·b = |    | · |    | = x1*x2 + y1*y2
          | y1 |   | y2 |

          | x1 |   | x1 |
    a·b = | y1 | · | y1 | = x1*x2 + y1*y2 + z1*z2
          | z1 |   | z1 |

向量叉乘：

      a × b  = -b × a
     |a × b| = |a| |b| sinθ

• Cross product is orthogonal to two initial vectors
• Direction determined by right-hand rule
• Useful in constructing coordinate systems (later)

向量叉成得到的结果是正交向量，即与原向量都垂直。

可以使用右手定则，xy 平台上两向量相乘，按 a 方向伸直手掌，然后手指向 b 向量弯曲，那么拇指垂直手指时所指方向即为 z 方向。教学上，通常使用右手定则作为参考，而 OpegGL 中使用的是左手定则。

Cross product: Properties

     x × y = + z
     y × x = - z
     y × z = + x
     z × y = - x
     z × x = + y
     x × z = - y
     a × b = - b × a
     a × a = 0 (zero vector)
     a × (b + c) =  a × b + a × c
     a × (k  b) = k( a × b)

Cross Product: Cartesian Formula，坐标交叉相乘再相减

          | Xa |   | Xb |   | Ya*Zb - Yb*Za |
    a·b = | Ya | × | Yb | = | Za*Xb - Xa*Zb |
          | Za |   | Zb |   | Xa*Yb - Ya*Xb |

平衡向量叉乘，因为夹角为 0，sinθ = 0，结果是零向量，方向依然是正交的。

向量叉乘用途特别要，除了用于构建坐标系外，这里举两点说明：

• Determine left / right
• Determine inside / outside

假设平面中一个三角形，判断某一点是否在区域内。只需要用这个三角形的三条边分别与 P 点与各边起点连线向量进行计算，保持三个结果同为大小 0 或小于零，就可以确定这个点在面内还是面外，和三角形的边是顺时针还是逆时针的关系不大。

这一个用途在图形光栅化时非常有用，`Rasterization` 光栅化即像素化，将内存中的数学抽象图形输出为对应的像素，基本图形映射为屏幕上网格的像素点。


正交坐标系统中，定义单位向量 u v w 对应 x y z 轴。

    |u| = |v| = |w| = 1
    u·v = v·w = w·u = 0
    w = u·v
    
    p = (p·u)u + (p·v)v + (p·w)w


## ⚡ Matrices Basic

矩阵或线性代数可以参考 Grant Sanderson 制作的 3blue1brown 线性代数的本质系列视频，很直观系统地解析了线代的重点。

• Magical 2D arrays that haunt in every CS course
• In Graphics, pervasively used to represent transformations
- Translation, rotation, shear, scale (more details in the next lecture)

矩阵，直观理解就是行列结构的数据，基本运算规则相乘，相加减。

• Array of numbers (m × n = m rows, n columns)
• Addition and multiplication by a scalar are trivial: element by element

矩阵 A B 相乘，必需要求前者列数 columns 和后者行数 row 一致，结果矩阵中的 (i, j) 元素为 A 的 i 行和 B 的 j 列的点积，即前行后列元素对应相乘再相加。

    (M x N) (N x P) = (M x P)

• # (number of) columns in A must = # rows in B 
• Element (i, j) in the product is the dot product of row i from A and column j from B

运算性质 Properties

- Non-commutative (AB and BA are different in general)
- Associative and distributive
- (AB)C = A(BC)
- A(B+C) = AB + AC
- (A+B)C = AC + BC

交换律不成立，AB 相乘与 BA 相乘结果不一样，假设 A 是平移，那么将 A 移到后面就意味着没有对 B 进行移位了。特殊情况除外，比如单位矩阵。

结合律成立，可以先乘 AB 也可以先乘 BC。

向量和矩阵都可以转秩 Transpose，将行列互换，进行转换，然后用一个 T 上标表示。

    (AB)^T = B^T A^T

单位矩阵 `Identity`，即斜对角线上的元素全为 1 其余全为 0 的矩阵，先乘后乘都不变，即相当不操作。但是单位矩阵有个作用，如果两个矩阵相乘，结果是单位矩阵，那么就称这两个矩阵互逆，也称为逆矩阵 `Inverses`。换一种说法，对一个矩阵进行变 A 变换，再用 A 的逆矩阵变换，就等于什么也没做，复原了。

        | 1 0 0 |
    I = | 0 1 0 |
        | 0 0 1 |

     AA^-1 = A^-1 A = I
    (AB)^-1 = B^-1 A^-1

向量的点积和叉乘都可以写成矩阵形式，但叉乘会复杂点。如 a × b 通常使用叫做 Dual matrix 的矩阵 `A*` 去乘。

    a × b = A*b

         |  0 -Za  Ya |
    A* = |  Za  0 -Xa |
         | -Ya Xa   0 |


## ⚡ Matrices Transformation
- Rotation and Scaling (2D) https://www.cs.usfca.edu/~galles/visualization/RotateScale2D.html
- Rotation and Translation (2D) https://www.cs.usfca.edu/~galles/visualization/RotateTranslate2D.html
- Rotation and Scaling (3D) https://www.cs.usfca.edu/~galles/visualization/RotateScale3D.html

前面介绍了矩阵，它是作为一个简化计算的工具引入的，并且矩阵广泛用于数学模型的变换。

• Transformation!
- Why study transformation
- 2D transformations: rotation, scale, shear
- Homogeneous coordinates 齐次坐标
- Composing transforms
- 3D transformations

从三维的数学模型世界，到二维的图像世界，就经历了投射变换 Projectionn。

又如，二维平面上的点进行仿射变换 Affine Transform，只需要一个 2 x 2 矩阵，如下式子，左乘两个矩阵具有连续几何变换作用，这里是 Shear 和 90 度 Rotation 两种几何变换：

    | 1 1 |      | 0 -1 |      | x |     | 1 -1 |   | x |
    | 0 1 |      | 1  0 |      | y |  =  | 1  0 |   | y |
    Shear x+=y   Rotation 90°            Composition

前面讲了，矩阵通常不能进行交换相乘，先乘 Sheer 矩阵后乘结果是不一样的，后乘相当没有对旋转的状态进行切变。

代数化表达的各种线性变换矩阵：

    | s 0 |   | 1 a |   | cosθ -sinθ |
    | 0 s |   | a 1 |   | sinθ  cosθ |
     Scale     Shear      Rotation

表达式根据图形变换前后的一一对应关系来得到，以旋转矩阵为例，假设以下这个矩阵是旋转矩阵：

    | x' |   | A B | | x |
    | y' | = | C D | | y |

最简单的是在图形上取右下角、左上角两个特殊参考点，再根据三角函数就可以推断出 A B C D 的取值：

    x' = Ax + By 
    y' = Cx + Dy

旋转 θ 角和反向旋转是互逆的，相应的矩阵也就是逆矩阵，通过代入 -θ 或者直接转置可以发现它们是等价的。

引入齐次坐标 `Homogeneous coordinates` 是因为在平移变换时需要加减运算，不能用前面这样的一个矩阵的相乘来表示，需要另外加一个平移的矩阵，为此要统一用一个矩阵来表达这些线性变换就是引入齐次坐标的原因。

在向量系统中，基底 Basis 是特别重要的单位，二维空间中的任何向量都是可以通过缩放 i、j 这两个向量基底再将它们相加的值表示出来。譬如向量 (3, 2) 就是沿着 i 的方向拉伸 3 倍, 再沿着 j 方向拉伸 2 倍的向量。

例如，二维空间中，当两个向量相加，几何图形上就是按基底前的系数进行比例缩放，和轴线方向缩放值再相加。

线性变换是一种保留向量加法和标量乘法的运算，向量中的数值系数称为标量 Scalars，在向量的运算过程中也只是放大缩小的作用，所以可以等价 Scale，旋转变换是另一种线性变换。缩放变换和旋转变换，事实上所有的对于 3D 向量的线性变换，都可以表示成一个 [3 x 3] 的矩阵。

在计算机图形学中，我们时常想要把各种变换结合起来，如先把一个物体缩小一半，再绕某个轴旋转 90 度，再平移到某个位置。但这种结合无法只用一个简单的 3D 矩阵实现。

为了结合线性变换和平移变换可以使用仿射变换 Affine Transform，通常存储在一个 [3 x 3] 或 [4 x 4] 的矩阵中，分别作为 2D 和 3D 的变换矩阵，新增的列作为相加运算使用。仿射变换是一种复合变换，即先完成线性变换，然后再完成平移变换。

        | 1 0 tx|
    A = | 0 1 ty|
        | 0 0 1 |

对于运算的坐标和向量就需要额外添加一个值以达成矩阵相乘运算的条件，例如二维坐标就需要变成 3 个数表达，Add a third coordinate (w-coordinate) 增加 w 的值取决用途意义。

• 2D point = (x, y, 1)^T
• 2D vector = (x, y, 0)^T
• 3D point = (x, y, z, 1)^T
• 3D vector = (x, y, z, 0)^T

Valid operation if w-coordinate of result is 1 or 0

• vector + vector = vector 向量相加还是向量
• point – point = vector 产生一个向量
• point + vector = point 移动一个点
• point + point = ?? 两点的中点 (x, y, w) --> (x/w, y/w, 1)，两点相加后，额外的数值变成 2，要变回 1 就需要除以 2

仿射变换包含 Geometric contraction、expansion、dilation、reflection、rotation、shear、similarity transformations、spiral similarities 和 translation 等类别及它们的组合，通常来讲，可以简单地认为仿射变换由 Rotations、Translations、Dilations 和 Shears 四类组合而成。

在三维变换中，可以将二维变换推广使用，在 [4 x 4] 的仿射矩阵中，可以使用左上角的 3 x 3 作为缩放、切变、旋转变换使用，多维度变换再组合到一块就是 3D 变换。

    | x 0 0 0 |    | 1 0 0 x |    | 1     0     0 0 |    | cosα  0 sinα 0 |    | cosα -sinα 0 0 |
    | 0 y 0 0 |    | 0 1 0 y |    | 0  cosα -sinα 0 |    | 0     1    0 0 |    | sinα  cosα 0 0 |
    | 0 0 z 0 |    | 0 0 1 z |    | 0  sinα  cosα 0 |    |-sinα  0 cosα 0 |    | 0     0    1 0 |
    | 0 0 0 1 |    | 0 0 0 1 |    | 0     0     0 1 |    | 0     0    0 1 |    | 0     0    0 1 |
     S(x,y,z)       T(x,y,z)        Rx(α)                 Ry(α)                 Rz(α)           

注意，旋转变换中的三角函数位置，对什么轴进行旋转操作，对应轴上的坐标就保留单位矩阵的取值。


## ⚡ View & Projection Transformation
- WebGL 可视化相机 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-visualizing-the-camera.html
- WebGL 重置画布尺寸 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-resizing-the-canvas.html
- WebGL 三维透视投影 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-3d-perspective.html
- WebGL 三维正射投影 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-3d-orthographic.html

我们花一点点时间来解释一下这里发生了什么。我们现在建立了场景、相机和渲染器。

three.js里有几种不同的相机，在这里，我们使用的是PerspectiveCamera（透视摄像机）。

第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。

第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。

接下来的两个参数是近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

假设你将要画一个圆或者画一条线，而不是一个线框模型，或者说不是一个Mesh（网格）。 第一步我们要做的，是设置好renderer（渲染器）、scene（场景）和camera（相机）-（如果对这里所提到的东西，还不了解，请阅读本手册第一章“创建一个场景 - Creating a scene”）。

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();
```


## ⚡ Rasterization & Anti-Alias 光栅化与平滑
- 从零开始学图形学：画两个三角形——光栅化，Z-buffer与抗锯齿 https://zhuanlan.zhihu.com/p/344018798
- 华中科技大学 计算机图形学 直线生成算法 #万琳教授 https://www.bilibili.com/video/BV1V7411k74z?p=18


# 🚩 Game Engine
- GAMES201：高级物理引擎实战指南2020 https://www.bilibili.com/video/BV1ZK411H7Hc
- Hazel - Rendering engine for Windows https://github.com/TheCherno/Hazel https://www.bilibili.com/video/BV1ZK411H7Hc
- GAMES102:几何建模与处理 https://www.bilibili.com/video/BV1NA411E7Yr
- GAMES201：高级物理引擎实战指南2020 https://www.bilibili.com/video/BV1ZK411H7Hc
- Game Engine Architecture Jason Gregory https://book4you.org/book/3705455/ed6c93
- 游戏引擎架构 Game Engine Architecture Jason Gregory https://book4you.org/book/7229270/8f515e
- KiwiStory - Construct 3 https://editor.construct.net

既然已经有开源的游戏引擎，为什么还要自研引擎呢？

商业引擎已经很好了，真的吗？这是一个很经典的外行人的假设，游戏行业存在一条铁律那就是没有任何引擎是好用的，不管是商业引擎还是自研引擎。来自同行朋友对 UE4 和 Unity 等商业引擎的吐槽，商业引擎看起来功能很齐全，但是实际使用起来你就知道有多少坑。


# 🚩 Ray Trace 光线追踪
- [Peter Shirley, "Ray Tracing in One Weekend -- The Book Series"](https://raytracing.github.io/)
- Steve Marschner and Peter Shirley, "Fundamentals of Computer Graphics", 3rd or later edition https://blog.csdn.net/bioinformatique/article/details/106160473
- Tomas Akenine-Möller et al., "Real-Time Rendering", 3rd or later edition http://www.realtimerendering.com/raytracinggems/
- OpenGL Programming Guide: The Official Guide to Learning OpenGL 4th
- [Physically Based Rendering: From Theory to Implementation", 3rd](http://www.pbr-book.org/3ed-2018/contents.html)
- [TypeScript 游乐园 - 光线追踪示例](https://typescript-play.js.org/#example/building-a-raytracer)
- [Learn Computer Graphics From Scratch!](https://www.scratchapixel.com/index.php)
- [CS190I: Introduction to Offline Rendering Fall 2020](https://sites.cs.ucsb.edu/~lingqi/teaching/cs190I.html)
- [CS291A: Real-Time High Quality Rendering Spring 2020](https://sites.cs.ucsb.edu/~lingqi/teaching/cs291a.html)
- [Eigen - C++ template library for linear algebra](https://eigen.tuxfamily.org/index.php)
- [从零开始学图形学：Blinn-Phong反射模型与纹理映射](https://zhuanlan.zhihu.com/p/344527012)
- [从零开始学图形学：光线追踪渲染器——渲染方程与BxDF](https://zhuanlan.zhihu.com/p/350381772)
- [基于物理的渲染白皮书开篇：PBR 核心知识体系总结与概览](https://zhuanlan.zhihu.com/p/53086060)
- [华中科技大学 计算机图形学 阴影渲染 #万琳教授](https://www.bilibili.com/video/BV1V7411k74z?p=72)
- [Phong reflection model](https://infogalactic.com/info/Phong_reflection_model)
- [Blinn-Phong 光照模型](https://zhuanlan.zhihu.com/p/265598866)
- [Blinn-Phong 光照模型比较](https://gameinstitute.qq.com/community/detail/119861)
- [Learn OpenGL - Basic Lighting](https://learnopengl.com/Lighting/Basic-Lighting)
- [OpenGL 学习脚印: 光照基础](https://blog.csdn.net/wangdingqiaoit/article/details/51638260)

从高考状元到计算机科学「学神」，闫令琪博士的学术成就与贡献还不止于此。英伟达的 RTX 系列显卡使用的「光线追踪技术」就是源自于闫令琪等人的研究，将 GeForce 显卡即 Geometry Force 升级到了 Ray Trace X。

闫令琪发表过 7 篇有关图形学的 SIGGRAPH 和 ACM Transactions 一作论文，这是前所未有的。论文为三大领域提供了突破性贡献：镜面微观结构或者微光（glints）建模、皮毛反射（fur reflectance）和快速蒙特卡洛渲染。闫令琪开发了一个动物皮毛模型，并用测量与模拟方法进行了测试（简化、泛化了该模型），作者也展示了如何用它完成全局光照计算。该技术被 Weta Digital 用于电影「猩球崛起 3：终极之战」。这些思想如今已经被用于商业化，例如 AutoDesk Fusion360 和 Rise of the Tomb Raider 2016。


课程介绍 CS291A: Real-Time High Quality Rendering Spring 2020

Prerequisite: CS180: Introduction to Computer Graphics, or equivalent (e.g. CS280), or more advanced alternative (e.g. CS285). (Note, this course can be arbitrarily difficult if you haven't taken a Computer Graphics course previously. Courses in Computer Vision and Human-Computer Interaction will not help!)

Course Syllabus and Schedule

Here's a tentative schedule. This schedule is relatively fluid and may change as the quarter progresses.
Slides in PDF format will be released after each lecture.

    W   Date    Topics
    1   Oct 1   Overview of Offline Rendering
    2   Oct 6   Review: Calculus and Probability Theory
        Oct 8   Sampling Theory and Practice 1
    3   Oct 13  Sampling Theory and Practice 2
        Oct 15  Monte Carlo Integration
    4   Oct 20  Review of Ray Tracing
        Oct 22  Radiometry and The Rendering Equation
    5   Oct 27  Path Tracing 1 (Basic Approach)
        Oct 29  Path Tracing 2 (Multiple Importance Sampling, etc.)
    6   Nov 3   High Dynamic Range Imaging and Tone Mapping
        Nov 5   No Class (Midterm Canceled)
    7   Nov 10  Physically-Based Materials 1 (Microfacet Models, Rendering Materials)
        Nov 12  Physically-Based Materials 2 (Disney "Principled" BRDF, Marschner Hair, etc.)
    8   Nov 17  Participating Media 1
        Nov 19  Participating Media 2
    9   Nov 24  Camera Models and Distribution Effects (depth of field, motion blur)
        Nov 26  No Class (Thanksgiving)
    10  Dec 1   Offline Denoising Techniques
        Dec 3   Photon Mapping
    11  Dec 8   Advanced Light Transport and Other Variance Reduction Techniques
        Dec 10  No Class


👉 PBR 基于物理渲染

基于物理的渲染 PBR - Physically Based Rendering 技术，自迪士尼在 SIGGRAPH 2012 上提出了著名的迪士尼原则的 BRDF（Disney Principled BRDF）之后，由于其高度的易用性以及方便的工作流，已经被电影和游戏业界广泛使用。

PBR 核心是 BRDF - Bidirectional reflection distribution function 双向反射分布函数，它真实地模拟了光线入射到物体后产生的各个方向的光线分布。

常见的 PBR 模型如下：

- Lambertian 漫反射模型
- Phong 反射光照模型
- Blinn-Phong 模型
- Fast-Phong 模型
- Phong Reflection model 或叫冯氏光照模型 Phong illumination or Phong lighting

除了前面基于 BRDF 的经验模型，还有以下两个基于物理的 BRDF 模型：

- Cook-Torrance BRDF 模型
- Ward BRDF 模型

基于物理的模型中，有三个重要的理论基础：

- Fresnel 菲涅尔效应，如看湖面的远处的反光比看近处更清晰；
- SubSurface Scattering 次表面散射，皮肤、果皮等表层将折射光反射出来，形成半透光现象；
- Macrofacets 微表面理论是主要的原理，通常用 NDF - Normal Distribution Function 法线分布函数一描述，制造表面凹凸效果。

现实环境中存在复杂的全局光照，例如：

- 半透明表面 Semi-transparent surfaces 光线可以穿过表面进行复杂的交互，如玻璃棱镜，可以改变光的波长；
- 次表面散射 Sub-Surface Scattering 光线可以穿过子表面，在同一表面的不同方向反射，如皮肤；
- 表面渗色 Surface bleeding 光线穿过表面，在介质中改变颜色到目标表面。

要模拟现实的光照是困难的，实际光照中，一束光可以经过场景中若干物体反射后，照射到目标物体上，也可以是直接照射到目标物体上。其中经过其他物体反射后再次照射到目标物体上，这是一个复杂的递归过程。

参考 Real Time Rendering 4th Edition - Chapter 9 Physically Based Shading


👉 Lambertian 模型

最简单的光照模型，描述了光在物体表面的漫反射。这个模型是 18 世纪朗伯基于观察得出的结论。他发现，物体表面光照的亮度与物体表面的受光角度有关：对单一光源，当光线与物体表面的法线方向一致时，物体表面最亮；光线与法线的锐角夹角越大，物体表面越暗。


👉 Phong 反射光照模型

Phong Reflection Model 是经典的光照模型，等效为 Lambertian + Specular 模型，漫射部分和标准的高光，所以它计算的光照包括三个部分：

- 环境光 Ambient Lighting
- 漫反射光 Diffuse Lighting
- 镜面光 Specular Lighting

环境光是场景中光源给定或者全局给定的一个光照常量，它一般很小，主要是为了模拟即使场景中没有光照时，也不是全部黑屏的效果。场景中总有一点环境光，不至于使场景全部黑暗，例如远处的月亮，远处的光源。

根据光的反射定律：入射光线与反射光线成相同角度。漫反射光也基本符合这一规律，围绕在反射光线 r 附近，反射辐射度应随观察角度 ωo 与反射光 r 之间的夹角 α 的增加而减少。

镜面光部分模拟物体表面光滑时反射的高亮光，通常反映的是光源的颜色，而不是物体的颜色。计算镜面光成分时，要考虑光源和顶点位置之间向量 L、法向量 N、反射方向 R、观察者和顶点位置之间的向量 V 之间的关系。通常，反射光应该聚拢在一个小区域内，表面越粗糙度，这个区域越大，像平滑的玻璃高光几乎就是一个亮点。


👉 Blinn-Phong 反射光照模型

Blinn-Phong 光照模型，又称为 Blinn–Phong reflection model 或者 phong 修正模型 modified Phong reflection model，是由 Jim Blinn 于 1977 年在文章 Models of light reflection for computer synthesized pictures 中对传统 phong 光照模型基础上进行修改提出的。

和传统 Phong 光照模型相比，Blinn-phong 光照模型混合了 Lambert 的漫射部分和标准的高光，渲染效果有时比 Phong 高光更柔和、更平滑，此外它在速度上相当快，因此成为许多 CG 软件中的默认光照渲染方法。此外它也集成在了大多数图形芯片中，用以产生实时快速的渲染。在 OpenGL 和 Direct3D 渲染管线中，Blinn-Phong 就是默认的渲染模型。

相比 Lambertian 模型，物体表面没有任何高光，表面亮度只与受光角度有关，而与观察者视点位置无关，这并不能完整描述物体表面在光下的行为。实际上，由于镜面反射的存在，不同位置的观察者看到的物体表面的亮度有所不同，所以在漫反射的基础上增加了镜面反射。不同表面的光滑程度不同，为此，引入 Phong 指数，其值越大，说明表面越光滑，光斑也就越小。

每个位置的颜色如何得到？这是一个重要的着色 Shading 问题，Blinn-Phong 反射模型便是一种光栅化模型的着色方法。




# 🚩 WebGL vs WebGPU
- WebGL 基础 https://webglfundamentals.org/webgl/lessons/zh_cn/
- WebGL2 基础 https://webgl2fundamentals.org/
- WebGL 运行状态图 https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html
- WebGL how it works https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-how-it-works.html
- WebGL 页面小技巧 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-tips.html#tabindex
- ShaderX/GPU Pro/GPU Zen Books https://www.realtimerendering.com/resources/shaderx/
- WebGPU 规范 https://doc.babylonjs.com/advanced_topics/webGPU
- WebGPU Editor’s Draft, 9 February 2021 https://gpuweb.github.io/gpuweb/
- WebGPU Samples http://austin-eng.com/webgpu-samples/
- https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext

WebGPU 是未来用于加速图形和计算的 Web 标准和 JavaScript API，旨在提供现代 3D 图形和计算能力。它是由 W3C GPU 和来自苹果、Mozilla、微软、谷歌和其他公司的工程师开发的。

与 WebGL 不同，WebGPU 基于 Vulkan、Metal 和 Direct3D 12 实现，旨在为这些跨移动和桌面平台的现代图形 API 提供高性能，并不兼容 OpenGL ES。

WebGPU 是标准，各大浏览器都会支持。不像 WebGL2，苹果直接不支持。目前 WebGPU 虽然还未正式发布，但已经比较成熟了，也有相关的 Demo 可供学习。

在 Chrome 浏览器上启用 WebGL 扩展功能，使用 Chrome Canary 金丝雀版本可以激活 WebGPU：

    chrome://flags/#enable-unsafe-webgpu
    chrome://flags/#enable-webgl-draft-extensions

WebGL - Web Graphics Library 是一种 3D 绘图协议，将 JavaScript 和 OpenGL ES 2.0 结合在一起，WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染。这样 Web 开发可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型，还能创建复杂的导航和数据视觉化。显然，WebGL 技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂 3D 结构的网站页面，甚至可以用来设计 3D 网页游戏等等。最新的 WebGL 2.0 基于 OpenGL ES 3.0，确保了提供许多选择性的 WebGL 1.0 扩展，并引入新的API。

WebGL 和 OpenGL 根本上就是一套管理着一个有限状态机的 API，这一点上两者完全一样。尽管 API 相似，但 OpenGL 和 WebGL 的差别还是有的，除了 OpenGL 是基于 C 语言的库，OpenGL 比 WebGL 有更多的特性，着色器语言也有区别。

相比于 WebGL，重点也不是需要更多的代码行数，是需要大量的知识，就像面对一个没有乘法的计算器，需要你知道 2×3 必需通过 2+2+2 来实现。 在 Three.js 这些三维库中它们只关心三维，你给它们相机位置和视场角，一对光源，和一个立方体， 它们就会帮你完成其他的部分，换句话说：它们是三维库。一个三维库关键就是内置这些知识，你不要自己去理解，你只需要依靠库帮你处理， OpenGL 就是这样的。

但对于 OpenGL ES 2.0+ 或 WebGL 就不是这样的，WebGL 就需要矩阵运算，单位化坐标，视锥，叉乘，点乘，可变量插值， 高光计算和其他需要几个月甚至几年去完全理解的东西。

WebGL 经常被当成 3D API，并被寄望于实现一些神奇的东西或做出炫酷的 3D 作品来。事实上 WebGL 仅仅是一个光栅化引擎，它可以根据你的代码绘制出点，线和三角形。 想要利用 WebGL 完成更复杂任务，取决于你能否提供合适的代码，组合使用点，线和三角形代替实现。

总结起来，学习 WebGL 除了需要非常熟练的图形学相关的数学知识外，还要求掌握 JavaScript 和着色器语言，此外，HTML 和 CSS 也最好有点基础。

WebGL State Diagram 运行状态图工具非常好地演示 WebGL 程序的运行过程，和各个 API 的使用示范。

部分作品参考：

- WebGL 水波及焦散（刻蚀）的渲染总结 https://note.youdao.com/ynoteshare1/index.html?id=9c49c743f0eb357f2298a9f70216cc3f&type=note
- Dreams of Black - WebGL 示例 http://www.ro.me/film
- Aquarium - WebGL 示例 http://webglsamples.org/aquarium/aquarium.html
- WebGL Earth http://www.webglearth.com/
- WebGL Rubik's Cube http://www.randelshofer.ch/webgl/rubikscube/
- WebGL Filter http://evanw.github.io/webgl-filter/
- Fluid Simulation https://paveldogreat.github.io/WebGL-Fluid-Simulation/
- WebGL Samples https://webglsamples.org/
- AlteredQualia https://alteredqualia.com/
- 纯算法无数据特效 https://www.vertexshaderart.com/
- Hash without Sine by Dave_Hoskins https://www.shadertoy.com/view/4djSRW
- WebGL 实现雨打屏幕 SardineFish https://zhuanlan.zhihu.com/p/353616639

WebGL 在电脑的 GPU 中运行，需要使用能够在 GPU 上运行的代码，也就是说 GPU 就像 CPU 类似可以执行代码，只不过 GPU 执行的图形处理的专用代码。

现代的图形处理程序使用 GPU 运行特定的代码的能力来实现高速性能，在 WebGL 中这样的代码需要提供成对的方法，一个叫`顶点着色器` Vertex Shader，另一个叫`片断着色器` Fragment Shader，并且使用一种和 C/C++ 类似的强类型的`着色语言` GLSL - Graphics Libraray Shader Language。 每一对组合起来称作一个`着色程序` Shader Programs，所有着色程序都有一个 `main()` 方法。

从着色这个词来看着色器，确实会迷惑人，因为它会让人误认为顶点着色器也会给图形中的点设置颜色，事实上，它就是这样一个翻译称谓，确实，它决定了什么颜色应该显示在什么位置。

顶点着色器的作用是计算顶点的位置，根据计算出的一系列顶点位置，WebGL 可以对点，线和三角形在内的一些图元进行`光栅化处理`，这时就要使用片断着色器方法进行染色，即片断着色器的作用是计算出当前绘制图元中每个像素的颜色值，`gl_FragColor` 是一个片断着色器主要设置的变量。。

几乎整个 WebGL API 都是关于如何设置这些成对方法的状态值以及运行它们。

对于想要绘制的每一个对象，都需要先设置一系列状态值，然后通过调用 `gl.drawArrays()` 或 `gl.drawElements()` 运行一个着色方法对，使得你的着色器对能够在 GPU 上运行。

其中 `gl.drawElements()` 是为了复用顶点数据引入的绘制函数，和 `gl.drawArrays()` 方法一样都是使 WebGL 处理顶点绘制渲染出像素并显示在 Canvas 画布上。区别是一个直接调用顶点数组数据，一个通过一个索引数组复用顶点数组数据。

这些方法对所需的任何数据都需要发送到 GPU，这里有着色器获取数据的 4 种方法。

- 👉 Attributes `属性`指明怎么从缓冲中获取所需数据并将它提供给顶点着色器。例如从哪个缓冲中获取数据，获取什么类型的数据，起始偏移值是多少，到下一个位置的字节数是多少。
- 👉 Uniforms `全局变量`在着色程序运行前赋值，在运行过程中全局有效。
- 👉 Buffer `缓冲`是发送到 GPU 的一些二进制数据序列，通常情况下缓冲数据包括位置，法向量，纹理坐标，顶点颜色值等。
- 👉 Textures `纹理`是一个数据序列，可以在着色程序运行中随意读取其中的数据。大多数情况存放的是图像数据，也可以是颜色数据以外的其它数据，纹理仅仅是数据序列。
- 👉 Varyings `可变量`是顶点着色器给片断着色器传值的一种方式，依照渲染的图元类型不同，如点、线、三角形，可变量会在片断着色器运行中获取不同的`插值` interpolated，产生渐变效果。

缓冲不是随意读取的，事实上顶点着色器运行的次数是一个指定的确切数字，每一次运行属性会从指定的缓冲中按照指定规则依次获取下一个值。

来自 WebGL Fundamentals 精简示范，程序会在显示区中央绘制一个色块：

```js
'use strict';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

const vsGLSL = `
attribute vec4 position;
void main() {
    gl_Position = position;
}
`;

const fsGLSL = `
precision highp float;

void main() {
    gl_FragColor = vec4(0, 1, 0.5, 1);
}
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vsGLSL);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(vertexShader))
};

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fsGLSL);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(fragmentShader))
};

const prg = gl.createProgram();
gl.attachShader(prg, vertexShader);
gl.attachShader(prg, fragmentShader);
gl.linkProgram(prg);
if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(prg))
};

gl.detachShader(prg, fragmentShader);
gl.deleteShader(fragmentShader);

const positionLoc = gl.getAttribLocation(prg, 'position');

// in clip space
const vertexPositions = new Float32Array([
    0,   0.7,
  0.5,  -0.7,
 -0.5,  -0.7,
]);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexPositions, gl.STATIC_DRAW);

gl.enableVertexAttribArray(positionLoc);
gl.vertexAttribPointer(
    positionLoc,  
    2,            // 2 values per vertex shader iteration
    gl.FLOAT,     // data is 32bit floats
    false,        // don't normalize
    0,            // stride (0 = auto)
    0,            // offset into buffer
);

gl.useProgram(prg);

// compute 3 vertices for 1 triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

WebGL 只关心两件事，裁剪空间中的坐标值和颜色值，使用 WebGL 只需要给它提供这两个东西：

- 👉 提供两个着色器来做这两件事，一个顶点着色器提供裁剪空间坐标值，一个片断着色器提供颜色值。
- 👉 无论你的画布有多大，裁剪空间的坐标范围永远是 -1 到 1。

WebGL 的顶点数据 `gl_Position` 通过着色器程序定义的 position 属性提供，颜色 `gl_FragColor` 直接在着色器程序中指定为 `vec4(0, 1, 0.5, 1)` 青色，即全绿色分量混合一半的蓝色分量。

裁剪空间的 xy 坐标范围都是 -1 到 +1，这就意味着 0 在中间并且正值在它右边。裁剪空间左下角坐标是 (-1, -1)，右上角坐标是 (1, 1)。所以在原点绘图，例如三角形，会出现在中间开始然后朝向右上方的位置，即使用的是`右手坐标系`，z 轴从屏幕朝向你，观察者往 z 轴负向看。

顶点着色器如果只是简单的传递了位置信息，由于位置数据坐标就是裁剪空间中的坐标，所以顶点着色器没有做什么特别的事。如果你想做三维渲染，你需要提供合适的着色器将三维坐标转换到裁剪空间坐标，因为 WebGL 只是一个光栅化 API。


这里需要探讨一下 WebGL 在 GPU 上究竟做了什么。 

WebGL 在 GPU 上的工作基本上分为两部分，第一部分是将顶点（或数据流）转换到裁剪空间坐标， 第二部分是基于第一部分的结果绘制像素点。

这里假定绘制三角形，要处理 9 个顶点：

```js
var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 9;
gl.drawArrays(primitiveType, offset, count);
```

顶点着色器（Vertex Shader）是写进 GLSL 中的一个方法，每个顶点调用一次，在这个方法中做一些数学运算后设置了一个特殊的 `gl_Position` 变量， 这个变量就是该顶点转换到裁剪空间中的坐标值，GPU 接收该值并将其保存起来。

这个流程就是：

- 顶点坐标数据流入着色器定义的变量，即 `a_Position`；
- 着色器程序运行，并读入数据到 `gl_Position` 作为裁剪空间的顶点坐标； 

因为正在画三角形 `gl.TRIANGLES`，顶点着色器每完成三次顶点处理，WebGL 就会用这三个顶点画一个三角形。

它计算出这三个顶点对应的像素后，就会光栅化这个三角形，“光栅化”其实就是“用像素画出来” 的花哨叫法。对于每一个像素，它会调用你的片断着色器询问你使用什么颜色。 你通过给片断着色器的一个特殊变量 `gl_FragColor` 设置一个颜色值，实现自定义像素颜色。

目前为止的例子中，处理每个像素时片断着色器可用信息很少，幸运的是我们可以定义`可变量` varyings 给它传递更多信息。

先在顶点着色器中定义一个 varying 可变量 `v_color` 用来给片断着色器传值。

```js
varying vec4 v_color;
...
void main() {
    // 将位置和矩阵相乘
    gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);

    // 从裁减空间转换到颜色空间
    // 裁减空间范围 -1.0 到 +1.0
    // 颜色空间范围 0.0 到 1.0
    v_color = gl_Position * 0.5 + 0.5;
}
```

在片断着色器中定义同名 `v_color` 可变量。

```js
precision mediump float;

varying vec4 v_color;

void main() {
gl_FragColor = v_color;
}
```

WebGL 会将同名的可变量从顶点着色器输入到片断着色器中，因为将位置信息作为颜色使用，所以在移动位置时三形的颜色也会变化，这也就是可变量的作用。


WebGL 编程指南随书附带代码中的 lib 提供以下功能：

 - cuon-matrix.js 线性代数运算支持，提供矩阵的变换运算，主要是 4×4 仿射变换矩阵 Matrix4 对象。

    - Vector3 主要是实现规范化函数 normalize，它可以保持原有向量的方向，但将长度规范为单位长度；
    - Vector4 只作为数据矩阵使用；
    - Matrix4.setIdentity() 设置为单位矩阵；
    - Matrix4.set(src) 拷贝一个矩阵
    - Matrix4.concat(other) 右联接一个矩阵，即 multiply 乘上一个矩阵变换；
    - Matrix4.multiply(other) 同上；
    - Matrix4.multiplyVector3(pos) 乘一个 3 维向量，即对向量进行变换；
    - Matrix4.multiplyVector4(pos) 乘一个 4 维向量，即对向量进行变换；
    - Matrix4.transpose() 矩阵转秩
    - Matrix4.setInverseOf(other) 设置为指定矩阵的逆矩阵；
    - Matrix4.invert() 设置并取逆矩阵；
    - Matrix4.setOrtho(left, right, bottom, top, near, far) 正交投影矩阵 orthographic projection matrix；
    - Matrix4.ortho(left, right, bottom, top, near, far) 右乘正交投影矩阵；
    - Matrix4.setFrustum(left, right, bottom, top, near, far) 设置透视投影的裁剪变换矩阵；
    - Matrix4.frustum(left, right, bottom, top, near, far) 右乘一个透视投影矩阵；
    - Matrix4.setPerspective(fovy, aspect, near, far) 通过视角 fovy 和 aspect 设置透视投影矩阵；
    - Matrix4.perspective(fovy, aspect, near, far) 右乘一个透视投影矩阵；
    - Matrix4.setScale(x, y, z) 设置缩放变换矩阵；
    - Matrix4.scale(x, y, z) 右乘缩放变换矩阵；
    - Matrix4.setTranslate(x, y, z) 平衡矩阵；
    - Matrix4.translate(x, y, z) 右乘平衡矩阵；
    - Matrix4.setRotate(angle, x, y, z) 旋转矩阵；
    - Matrix4.rotate(angle, x, y, z) 右乘旋转矩阵；
    - Matrix4.setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) 设置观察点矩阵变换；
    - Matrix4.lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) 右乘观察点矩阵变换；
    - Matrix4.dropShadow(plane, light) 右乘顶点投影到平面的变换矩阵；
    - Matrix4.dropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) 同上，平衡光投影；

- cuon-utils.js 提供 WebGL 的对象管理函数的简单包装。

    - `gl.createProgram()` 创建着色器程序对象；
    - `gl.useProgram(program)` 使用已创建着色器程序对象；
    - `gl.attachShader(program, shader)` 将着色器附加到程序对象上；
    - `gl.linkProgram(program)` 链接着色器程序；
    - `gl.getProgramInfoLog(program)` 获取着色器程序日志；
    - `gl.getProgramParameter(program, gl.LINK_STATUS)` 获取程序状态属性；
    - `gl.deleteProgram(program, gl.LINK_STATUS)` 删除着色器程序对象；

    - `gl.createShader(type)` 创建着色器对象；
    - `gl.shaderSource(shader, source)` 附加着色器代码；
    - `gl.compileShader(shader)` 编译着色器；
    - `gl.getShaderParameter(shader, gl.COMPILE_STATUS)` 获取着色器参数；
    - `gl.getShaderInfoLog(shader)` 获取着色器日志；
    - `gl.deleteShader(shader)` 删除着色器；

- webgl-utils.js 提供 WebGLUtils 的两个方法 `setupWebGL()` 和 `create3DContext()`，通过 `canvas.getContext()` 方法获取上下文对象，还有 requestAnimationFrame 等动画函数的兼容设置。


## 👉 跨平台相关问题
- WebGL 跨平台相关问题 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-cross-platform-issues.html
- Built-in Variable https://www.khronos.org/opengl/wiki/Built-in_Variable_(GLSL)

对于不是所有 WebGL 程序都能跑在所有设备或者浏览器上，WebGL2 支持度更少，至少 2020 年在 Safari 上并不是完全支持。

GLSL ES 1.0 规范对应 WebGL 1.0 标准，GLSL ES 3.20 对应 WebGL 2.0 标准，WebGL 2.0 支持度并不像 1.0 那么高。

允许的最大纹理尺寸目前范围在 2048 或者 4096 看起来很合理，至少在 2020 年 99% 的设备支持 4096 但只有 50% 的设备支持 > 4096。

注意：最大纹理尺寸是 GPU 能处理的最大维度。 它并不意味着 GPU 有足够的内存给该维度的正方形或立方体纹理。


最大全局向量数量，在顶点着色器和片段着色器有着不同的数量约束。

注意：变量和属性不能被封装，全局变量可以被封装起来。约束指明的数字是指能使用的 vec4 的数量，理论上你可以使用 4 倍数量的 float 类型的全局变量。

这里有个算法用来填充它们，你可以想象一个有 4 个列的数组，一行就占最大全局向量数的其中一个。

    +-+-+-+-+
    | | | | |   <- 一个 vec4
    | | | | |   |
    | | | | |   |
    | | | | |   V
    | | | | |   最大全局向量行数
    | | | | |
    | | | | |
    | | | | |
    ...

一个 mat4 就是 4 个 vec4。然后 vec3 会填充接下来的空间，然后是 vec2，后面跟着 float。想象一下我们有 1 个 mat4，2 个 vec3，2 个 vec2 和 3 个 float：

  +-+-+-+-+
  |m|m|m|m|   <- mat4 占 4 行
  |m|m|m|m|
  |m|m|m|m|
  |m|m|m|m|
  |3|3|3| |   <- 2 个 vec3 占 2 行
  |3|3|3| |
  |2|2|2|2|   <- 2 个 vec2 合并成 1 行
  |f|f|f| |   <- 3 个 float 占一行
  ...

进一步，全局变量数组都是竖着的，所以举个例子，如果允许的最大全局向量数是 16， 那你就不能有长度为 17、类型为 float 的数组。 事实上，如果你有单个 vec4，它会占用整行，这样就只剩 15 行。 这意味着你可有创建的最大数组只能包含 15 个元素。

|               限制               |    GTX 1050    |  WebGL  |  WebGL2 |              说明              |
|----------------------------------|----------------|---------|---------|--------------------------------|
| MAX_VERTEX_ATTRIBS               | 16             | 8 min   | 16 min  | 可以使用属性数量               |
| MAX_VARYING_VECTORS              | 30             | 8 min   | 16 min  | 可以使用变量数量               |
| MAX_VERTEX_UNIFORM_VECTORS       | 4096           | 128 min | 256 min | 顶点着色器可以使用 vec4 数量   |
| MAX_FRAGMENT_UNIFORM_VECTORS     | 1024           | 16 min  | 224 min | 片段着色器可以使用 vec4 数量   |
| MAX_TEXTURE_SIZE                 | 16384          | 64 min  |         | 最大纹理尺寸                   |
| MAX_COMBINED_TEXTURE_IMAGE_UNITS | 32             |         |         | 存在的纹理单元数量             |
| MAX_VERTEX_TEXTURE_IMAGE_UNITS   | 16             | 0 min   | 16 min  | 顶点着色器可以引用纹理单元数量 |
| MAX_TEXTURE_IMAGE_UNITS          | 16             | 8 min   | 32 min  | 片段着色器可以引用纹理单元数量 |
| MAX_CUBE_MAP_TEXTURE_SIZE        | 16384          |         |         | 立方体贴图最大尺寸             |
| MAX_RENDERBUFFER_SIZE            | 16384          |         |         | renderbuffer 最大尺寸          |
| MAX_VIEWPORT_DIMS                | [32767, 32767] |         |         | viewport 最大尺寸              |


这不是完整的列表，例如，没有最大点数量，线最大宽度， 但你应该假设最大线宽为 1.0，点只在简单的 demo 中有用，不需要关心，而应该关于裁剪的问题。

还有一些其它限制，参考文档，调用 gl.getParameter 进行查找。

WebGL2 添加了一些比较常用的限制值：

- **MAX_3D_TEXTURE_SIZE** 3D 纹理最大尺寸
- **MAX_DRAW_BUFFERS**    可使用的颜色附件数量
- **MAX_ARRAY_TEXTURE_LAYERS**    2D 纹理数组中最大层数
- **MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS** 使用转换反馈时可输出至单独缓存的变量数量
- **MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS**   一次性输出至单个缓冲的变量数量
- **MAX_COMBINED_UNIFORM_BLOCKS** 全部可使用全局变量块数量
- **MAX_VERTEX_UNIFORM_BLOCKS**   顶点着色器可使用全局变量块数量
- **MAX_FRAGMENT_UNIFORM_BLOCKS** 片段着色器可使用全局变量块数量


## 👉 Points/Lines/Trangles 基本图元
- WebGL 点、线和三角 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-points-lines-triangles.html
- Drawing Lines is Hard https://mattdesl.svbtle.com/drawing-lines-is-hard
- 5.14.11 Writing to the drawing buffer https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14.11
- WebGL绘制详解之五：Stencil Buffer http://www.jiazhengblog.com/blog/2016/04/05/2941/
- WebGL 绘制技巧之：如何绘制有洞的多边形 http://www.jiazhengblog.com/blog/2018/10/31/3342/
- 索引优化绘图方法 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-indexed-vertices.html
- 华中科技大学 计算机图形学 #万琳教授 https://www.bilibili.com/video/BV1V7411k74z?p=75

绘图时，涉及了以下几个 API，参考 WebGL 规范 5.14.11 Writing to the drawing buffer：

- void `clear`(GLbitfield mask)
- void `drawArrays`(GLenum mode, GLint first, GLsizei count)
- void `drawElements`(GLenum mode, GLsizei count, GLenum type, GLintptr offset)
- void `finish`()
- void `flush`()

一般在绘图前需要对画布 Framebuffer 进行清理，有三类缓存内容可以进行清理，参考 OpenGL ES 规范 Whole Framebuffer Operations：

- COLOR_BUFFER_BIT 清理画布颜色缓存；
- DEPTH_BUFFER_BIT 清理空间模型中的深度信息，深度就是空间对象到摄像机的距离比例值；
- STENCIL_BUFFER_BIT 清理模板缓冲区；

深度缓冲有时也叫 Z-Buffer，是一个存储像素深度的矩形，一个深度像素对应一个着色像素，在绘制图像时组合使用。 当 WebGL 绘制每个着色像素时也会写入深度像素，它的值基于顶点着色器返回的 Z 值，就像我们将 X 和 Y 转换到裁剪空间一样，Z 也在裁剪空间或者在 (-1, +1)，这个值会被转换到深度空间 ( 0, +1)。

WebGL 绘制一个着色像素之前会检查对应的深度像素，如果对应的深度像素中的深度值小于当前像素的深度值，WebGL 就不会绘制新的颜色。反之它会绘制片断着色器提供的新颜色并更新深度像素中的深度值，这也意味着在后面的其他像素像素不会被绘制。

简单地说，深度缓存就是用来比较当前模型渲染片元的与最近模型的深度值进行对比，如果当前的模型片元深度值更大，表示在其它模型后面，这样就不需要渲染。而对于像玻璃这样透明的模型，就需要进行混合算法处理 Blend。

开启、关闭深度特性：

    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.DEPTH_TEST);

Stencil 含义是镂空的模板，模板缓冲区可以为屏幕上的每个像素点保存一个无符号整数值，这个值的具体意义视程序的具体应用而定。在渲染的过程中，可以用这个值与一个预先设定的参考值相比较，根据比较的结果来决定是否更新相应的像素点的颜色值，这个比较的过程被称为`模板测试`。模板测试发生在透明度测试 Alpha Test 之后，深度测试 Depth Test 之前。如果模板测试通过，则相应的像素点更新，否则不更新。就像使用纸板和喷漆一样精确的混图一样，当启动 模板测试时，通过模板测试的片段像素点会被替换到颜色缓冲区中，从而显示出来，未通过的则不会保存到颜色缓冲区中，从而达到了过滤的功能。

传统的前端绘制技术如 SVG、Canvas 2D，可以通过设置填充方式（fill-rule）来方便的实现镂空效果，这种填充方式称作“evenodd”，翻译过来叫做“奇偶填充”。

WebGL 中的三角形有正反面的概念，正面三角形的顶点顺序是逆时针方向，反面三角形是顺时针方向。

开启、关闭反面三角形剔除：

    gl.enable(gl.CULL_FACE);
    gl.disable(gl.CULL_FACE);

开启这个特性后 WebGL 默认剔除背面三角形，剔除就是不用绘制的花哨叫法。

Stencil 镂空的模板示范代码如下：

```js
// 模板绘制
gl.stencilFunc(gl.ALWAYS, 0, 0xff);
// 取反操作
gl.stencilFunc(gl.INVERT, gl.INVERT, gl.INVERT);
gl.stencilMask(0xff);
gl.colorMask(false, false, false, false);
drawAreas();
// 绘制真正的面
// 0 取反一次是 0xff，那么只有等于 0xff 的情况才通过测试
gl.stencilFunc(gl.EQUAL, 0xff, 0xff);
gl.stencilMask(0);
gl.colorMask(true, true, true, true);
```

在 OpenGL 中还可以对累积缓冲区进行清理 GL_ACCUM_BUFFER_BIT，累积缓冲区允许你把渲染到颜色缓冲区的值，拷贝到累积缓冲区。在多次拷贝操作到累积缓冲区时，可以用不同方式的把颜色缓冲区内容和当前累积缓冲区的内容进行重复混合。

除了 `clear()` 方法，还可以使用以下方法，以填充数据的方式来清理：

- void `clearColor`( float red, float green, float blue, float alpha)
- void `clearDepth`( float depth) depth: Clamped to the range 0 to 1.
- void `clearStencil`(int s)

后面两个 `finish()` 和 `flush()` 方法表示已经执行完，可以将程序指令提交给 GPU 处理。通常情况下，OpenGL 指令不是立即执行的，而是先送到指令缓冲区，然后才被送到硬件执行。glFinish 执行时会阻塞，直到 GL 完成操作，然后 flush 会清空缓冲区。

如果使用了双缓冲 DoubleBuffer，那么可能这两个函数都不需要用到，缓冲区交换操作会隐式将命令送去执行。


前面解析了绘图时使用的顶点数据是通过 Vertex Shader 属性传递的，如果画点，自然传递一个坐标数据就可以画出一个点，如果画多个点就传递多个坐标数据过去。

使用相应的的带 v 后缀的方法就表示传递的是一组矢量数据，或者使用 Buffer 将数据绑定到属性：

- void `uniform[1234][fi]`(uint location, ...)
- void `uniform[1234][fi]v`(uint location, Array value)
- void `uniformMatrix[234]fv`(uint location, bool transpose, Array)
- void `vertexAttrib[1234]f`(uint index, ...)
- void `vertexAttrib[1234]fv`(uint index, Array value)
- void `vertexAttribPointer`(uint index, int size, enum type, bool normalized, long stride, long offset)

等价表达，如果使用 1fv 或者 2fv 后缀方法传递数据，那么只会用到数据中的 x 坐标，或者 xy 坐标：

```js
gl.vertexAttrib3f(aPosition, 1.0, 1.0, 0.0);
gl.vertexAttrib3fv(aPosition, [1.0, 1.0, 0.0]);

var p = new Float32Array([1.0, 1.0, 1.0]);
gl.vertexAttrib3fv(aPosition, p);
gl.drawArrays(gl.POINTS, 0, 1);
```

注意，`vertexAttrib` 方法只能为着色器提供单个坐标数据，多个坐标数据需要通过缓存来绑定：

```js
const vertexPositions = new Float32Array([
    0,   0.7,
   0.5,  -0.7,
  -0.5,  -0.7,
]);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexPositions, gl.STATIC_DRAW);

gl.enableVertexAttribArray(a_Position);
gl.vertexAttribPointer(
  a_Position,  
  2,            // 2 values per vertex shader iteration
  gl.FLOAT,     // data is 32bit floats
  false,        // don't normalize
  0,            // stride (0 = auto)
  0,            // offset into buffer
);
gl.drawArrays(gl.LINES, 0, 3);
```

除了基本的绘图方法 `drawArrays()`，还可以使用优化的索引绘图方法 `drawElements()`，它们都需要指定一个有效模式，否则触发 `INVALID_VALUE`，同时只能在绑定着色器程序时才能执行，如果 `CURRENT_PROGRAM` 为空指针，会触发 `INVALID_OPERATION`。

所谓索引绘图 `gl.drawElements()` 是为了复用顶点数据引入的绘制函数，和 `gl.drawArrays()` 方法一样都是使 WebGL 处理顶点绘制渲染出像素并显示在 Canvas 画布上。区别是一个直接调用`顶点数组`数据，一个通过一个`索引数组`复用顶点数组数据。

所以，使用 `drawElements()` 绘图，需要先绑定坐标数据到缓存，再绑定坐标数据的索引数组到 `ELEMENT_ARRAY_BUFFER` 绑定点，然后再调用它绘图：

- offset 数据开始的字节偏移数，并且需要是给定类型的整数倍，否则触发 `INVALID_OPERATION`；
- type 指定单个数值的类型，支持 UNSIGNED_BYTE UNSIGNED_SHORT 两种索引数据；
- count 指定总顶点数量，即 IBO 数组的大小；

指定 count 大于 0，即要示将缓存对象 `WebGLBuffer` 绑定到 `ELEMENT_ARRAY_BUFFER` 绑定点，即调用绑定 API 进行操作，还则触发 `INVALID_OPERATION`。

通过这种索引缓冲区对象 IBO - Index Buffer Object，以索引的方式访问已经绑定的缓存数据，可以达到去除冗余顶点数据的目的。

在 IBO 数组中，每一个值都是一个坐标的索引号，这样就可以使一个 `UNSIGNED_BYTE` 或者 `UNSIGNED_SHORT` 整形去替代一个 3D 坐标，在有大量重复坐标的模型中，可以节省高达 75% 的数据量。

```js
// Indices of 4 vertices
var indices = new Uint8Array([0,1,2,3]);

// Create a buffer object
var indexBuffer = gl.createBuffer();
if (!indexBuffer) return -1;

// Bind IBO to ELEMENT_ARRAY_BUFFER
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

// Draw
gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0);
gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_BYTE, 0);
```

提供数据给顶点着色器，它输出裁剪空间座标，根据绘图 API 的第一个参数，WebGL 知道绘制点、线或三角：

    const GLenum POINTS                         = 0x0000;
    const GLenum LINES                          = 0x0001;
    const GLenum LINE_LOOP                      = 0x0002;
    const GLenum LINE_STRIP                     = 0x0003;
    const GLenum TRIANGLES                      = 0x0004;
    const GLenum TRIANGLE_STRIP                 = 0x0005;
    const GLenum TRIANGLE_FAN                   = 0x0006;

`POINTS` 单点模式，对于顶点着色器输出裁剪空间的每 1 个顶点，绘制以该顶点为中心的正方形。 正方形的大小，由设置在顶点着色器中的特殊变量 `gl_PointSize` 决定，它是预期的像素值。注意，着色器并没有提供一个类似 `gl_LineSize` 的内置输入变量来控制线条的粗细，需要变通的方法，比如用三角形模拟线条。

注意：正方形的最大（最小）值取决于 WebGL 的实现，可以通过下面代码查询：

    const [minSize, maxSize] = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);

`LINES` 两点成线模式，对于顶点着色器输出裁剪空间的每 2 个顶点，绘制连接两个点的线。 如果我们有点 A、B、C、D、E、F，我们就得到了三条线。

规范指出，我们可以通过调用 gl.lineWidth 并指定像素宽度来设置线的粗细。 尽管宽度的最大值取决于 WebGL 的实现，但通常大多数情况下最大宽度值为 1。

    const [minSize, maxSize] = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);

`LINE_STRIP` 逐个成线模式，对于顶点着色器输出裁剪空间的每 1 个顶点，绘制连接到顶点着色器输出的前一个点的线。所以，如果输出的裁剪空间顶点是 A、B、C、D、E、F，你会得到 5 条线。

`LINE_LOOP` 自动闭环模式，这和 LINE_STRIP 一样，但是多了从最后一个点到第一个点的线。

`TRIANGLES` 三点成面模式，对于每三个顶点着色器输出的裁剪空间顶点，绘制以这三个点为顶点的三角形。 这是最常使用的模式。

`TRIANGLES_STRIP` 逐个成面模式，对于每个顶点着色器输出的裁剪空间顶点，绘制以最后三个点为顶点的三角形。 也就是说，如果输出了 6 个点 A、B、C、D、E、F，从第三个点开始每一个点都会与前面两个点构成一个三角形，这样就会绘制 4 个三角形： A,B,C 和 B,C,D 和 C,D,E 和 D,E,F。

`TRIANGLES_FAN` 扇叶模式，对于每个顶点着色器输出的裁剪空间顶点，绘制以第一个点和最后两个点为顶点的三角形。 也就是说，如果输出了 6 个顶点 A、B、C、D、E、F，就会绘制 4 个三角形： A,B,C 和 A,C,D 和 A,D,E 和 A,E,F。

但根据经验，TRIANGLE_FAN 和 TRIANGLE_STRIP 最好避免使用。 它们只适用一些特殊情况，而且需要额外的代码来处理，这并不值得。 尤其你可能使用工具来构建法线、生成纹理坐标或对顶点数据做其它处理。只要一开始添加 TRIANGLE_FAN 和 TRIANGLE_STRIP， 你就会需要更多的函数来处理更多的情况。

除了三角形模式，其它几种都不常用，只使用三角就可以绘制绝大多数内容，可以说 99% 的 WebGL 都在干这事儿。

如果你使用 LINE_STRIP，每绘制一条线，就会调用 4 次 `gl.drawArrays()` 和更多次的调用来设置属性。 而如果使用 LINES，你可以插入绘制 4 条线所需要的所有点，只调用一次 `gl.drawArrays()`。 那会快非常多。

进一步来说，LINES 对于调试或简单的效果非常好用，不过多数平台给予它 1 像素的最大宽度，这不是个好方案。 如果想要为图形绘制网格，或者在 3D 模型程序中绘制多边形的轮廓，使用 LINES 是不错的选择。


前面已经解析了如何利用可变量来传递颜色信息到片段着色器中。

```ts
const vsGLSL = `
attribute vec4 position;
attribute vec4 color;

varying vec4 v_color;

void main() {
    gl_Position = position;
    v_color = color;
}
`;

const fsGLSL = `
precision highp float;

varying vec4 v_color;

void main() {
    gl_FragColor = v_color;
}
`
```


## 👉 Instanced Arrays 实例复制
- WebGL2系列之实例数组(Instanced Arrays) https://segmentfault.com/a/1190000017048578
- 使用 ANGLE_instanced_arrays 扩展 http://www.jiazhengblog.com/blog/2017/03/20/3104/
- 使用顶点数组对象 Vertex Array Object http://www.jiazhengblog.com/blog/2017/04/17/3127/
- https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-instanced-drawing.html

前面提供的属性操作方法都是在修改操作着色器中的属性对象，着色器中通过 `attribute` 定义的属性对象具有 8 个属性值，它们基本都是通过 `vertexAttribPointer()` 方法设置的：

- `enable` 通过 `enableVertexAttribArray()` 和 `disableVertexAttribArray()` 设置的激活状态；
- `type` 指定绑定的数据类型；
- `size` 每个坐标点占据 type 指定类型的数据数量；
- `normalize` 是否标准化到区间 [-1, 1]
- `stride` 步进滚动，0 = auto move forward `size * sizeof(type)` each iteration to get the next position
- `offset` 通过 API 设置的缓存数据起始偏移；
- `buffer` 通过 API 绑定的缓存数据；
- `divisor` 默认值 0，多实例特性，通过 `glVertexAttribDivisor()` 等 API 设置；


当调用 gl.linkProgram(someProgram) 将顶点着色器和片段着色器链接在一起，WebGL 在 GPU 执行的代码，期间决定每个属性在 GPU 内部的索引/存储单元。要对这些属性进行管理，就必须先通过调用 `gl.getAttribLocation()` 等方法查询到顶点位置、纹理座标和法线对应的属性分配的地址索引。

默认状态下，`divisor` 值为 0 表示该顶点着色器属性的多实例特性将被禁用，设置非 0 值后启用多实例的顶点属性，在一次绘制执行多个模型实例渲染中非常有用。比如 divisor=1，表示每一组值用于一个对象；如果 divisor=2，表示每一组值用于两个对象。

在 OpenGL 规范中使用以下方法：

- void `VertexBindingDivisor`( uint bindingindex, uint divisor );
- void `VertexArrayBindingDivisor`( uint vaobj, uint bindingindex, uint divisor );

以下两组方法等价：

```js
void VertexAttribDivisor( uint index, uint divisor );

void VertexAttribBinding(index, index);
void VertexBindingDivisor(index, divisor);
```

然后，通过调用如下方法进行绘制：

```js
void gl.drawArraysInstanced(mode, first, count, instanceCount);
void gl.drawElementsInstanced(mode, count, type, offset, instanceCount);
```

在 WebGL 1.0 这是扩展功能，需要获取 `ANGLE_instanced_arrays` 扩展再调用：

```js
var ext = gl.getExtension('ANGLE_instanced_arrays');
ext.vertexAttribDivisorANGLE(index, divisor);
ext.drawArraysInstancedANGLE(mode, first, count, instanceCount);
ext.drawElementsInstancedANGLE(mode, count, type, offset, instanceCount);
```

在 `count` 参数指定坐标点数量，在参数 `instanceCount` 指定绘制多少个副本实例，通过这个方法，便能实现一次调用绘制多个对象的目标。

为了绘制多实例，就有必要提供一个偏移数据，绘制时，根据 stride 和 divisor 设置，滚动应用到各个模型实例中，这个顶点偏移数据可以在顶点着色器中按以下方式叠加：

    gl_Position = a_Position + a_Offset;

注意：通常一个偏移坐标是针对一组图形坐标使用的，比如绘制三角形实例，每个三形有 3 个顶点，而这三个顶点要同时应用一个偏移坐标，那么 `divisor` 就应该设置为 1，绘制图形时，每处理 3 个顶点的数据就会调配 1 个偏移坐标数据。

主要功能代码参考：

```js
  var colors = new Float32Array([
    1.0, 0.0, 0.0, .8,
    0.0, 1.0, 0.0, .8,
    0.0, 0.0, 1.0, .8,
    1.0, 1.0, 1.0, .8,
  ]);
  var colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
  gl.vertexAttribPointer( a_Color,  
    4,            // RGBA, 4 values per vertex shader iteration
    gl.FLOAT,     // data is 32bit floats
    false,        // don't normalize
    0,            // stride (0 = auto)
    0,            // offset into buffer
  );
  gl.enableVertexAttribArray(a_Color);

  let count = 5;
  var positions = new Float32Array([
    -1/count, +1/count, 0.0,
    -1/count, -1/count, 0.0,
    +1/count, +1/count, 0.0,
    +1/count, -1/count, 0.0,
  ]);
  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  gl.vertexAttribPointer(
    a_Position,  
    3,            // 3 values per vertex shader iteration
    gl.FLOAT,     // data is 32bit floats
    false,        // don't normalize
    0,            // stride (0 = auto)
    0,            // offset into buffer
  );
  gl.enableVertexAttribArray(a_Position);

  var offsetArray = [];
  for(var ir = 0; ir < count; ir++){
    for(var ic = 0; ic < count; ic++){
      var x = (ir+0.5-count/2)/count*4;
      var y = (ic+0.5-count/2)/count*4;
      var z = 0;
      offsetArray.push(x,y,z);
    }
  }

  var offsetBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(offsetArray), gl.STATIC_DRAW);
  gl.vertexAttribPointer( a_Offset,
    3,            // 3 values per vertex shader iteration
    gl.FLOAT,     // data is 32bit floats
    false,        // don't normalize
    0,            // stride (0 = auto)
    0,            // offset into buffer
  );
  gl.enableVertexAttribArray(a_Offset);

  var indices = new Uint8Array([
    0, 1, 2,
    2, 1, 3
  ]);

  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW); //给缓冲区填充数据

  // use extension for WebGL 1.0
  // gl.vertexAttribDivisor(a_Offset, 6);
  var ext = gl.getExtension('ANGLE_instanced_arrays')!;
  ext.vertexAttribDivisorANGLE(a_Offset, 1);

  // draw the 1st one as a markup
  gl.drawElements(gl.LINE_STRIP, indices.length, gl.UNSIGNED_BYTE, 0);
  gl.drawElements(gl.POINTS, indices.length, gl.UNSIGNED_BYTE, 0);
  
  // gl.drawArrays(gl.LINE_STRIP, 0, positions.length/3);
  // gl.drawArrays(gl.POINTS, 0, positions.length/3);

  // draw elements data from ELEMENT_ARRAY_BUFFER
  ext.drawElementsInstancedANGLE(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0, count**2)
```

## 👉 Interleaved Array 交替数据组织
- 交替组织数据 Interleaved Array http://www.jiazhengblog.com/blog/2017/03/03/3116/

前面已经解析了顶点着色器中的属性对象的设置，再复习其中的：

- `type` 指定绑定的数据类型；
- `size` 每个单元占据 type 指定类型的数据数量；
- `stride` 步进滚动指示了数据存储的单元间隔长度，单位是字节，0 表示一个属性的数据是连续存放的，非 0 则表示同一个属性在数据中的间隔大小，也就是一个顶点的数据占用了多少字节。
- `offset` 属性在缓冲区的偏移值，单位是字节。0 表示从头开始读取。

stride 一词有步幅的含义，你可以形象的理解成从一个顶点迈向下一个顶点需要跨过多少字节。

在 WebGL 有一种交织数据组织方式，Interleaved Array。所谓交织，交替，就是指 buffer 中的数据不仅可以包含顶点坐标，还可以包含其它多个不同的属性，不同属性交替在 buffer 中放置。

在实际开发中，基本上都需要把一个顶点的所有属性合并在一个 buffer 中，比如位置、颜色、法向量、纹理坐标等，这样可以做到仅使用一个 buffer 就可以完成多个属性的赋值，性能上得到提升。

由于 buffer 中数据组织方式发生了变化，就需要告知 shader 如何使用数据，参考 `vertexAttribPointer()` 方法的原型：

    void vertexAttribPointer(GLuint index, GLint size, GLenum type,
                             GLboolean normalized, GLsizei stride, GLintptr offset);

通过交织数据组织，只需要执行一次数据绑定，就可以多次分配使用，只需要配置适当的 `stride` 和 `offset` 就可以进行绘图操作。

例如将坐标和颜色值 RGBA 合并，如果都使用 Float 类型，那么就需要 28 字节，每个坐标轴分量或颜色分量都需要 4 字节共 7 个分量。当然，颜色可以使用 Byte 更节省，这样至少可以用 4 个字节表示 RGBA。所以颜色与坐标交织的数据中，一个顶点单元只需要 16 字节表示。

但是，注意着色器中使用的颜色是基于 [0, 1] 区间的浮点数值，使用 Byte 传递数据时需要进行数值转换：

    v_FragColor = vec4(a_Color.r / 255.0, a_Color.g / 255.0, a_Color.b / 255.0, a_Color.a / 255.0);


那么问题来了：怎么在一个 Buffer 中定义不同大小的数据呢？利用 ArrayBuffer 对象：

```js
var vertex = [
    -.5, -.2,  0,
     .5, -.2,  0,
      0,  .6,  0,
];
var color = [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255
];

var arrayBuffer = new ArrayBuffer(vertex);
var float32View = new Float32Array(arrayBuffer);
var uint8View = new Uint8Array(arrayBuffer);

var float32Offset = 0;
for (var i = 0; i < vertex.length; i += 3) {
    float32View[float32Offset] = vertex[i];
    float32View[float32Offset + 1] = vertex[i + 1];
    float32View[float32Offset + 2] = vertex[i + 2];
    float32Offset += 4;
}
var uint8Offset = 12;
for (i = 0; i < color.length; i += 4) {
    uint8View[uint8Offset] = color[i];
    uint8View[uint8Offset + 1] = color[i + 1];
    uint8View[uint8Offset + 2] = color[i + 2];
    uint8View[uint8Offset + 3] = color[i + 3];
    uint8Offset += 16;
}
var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, arrayBuffer, gl.STATIC_DRAW);
```

由于属性数据结构类型发生变化，调用 vertexAttribPointer 参数需要适配：

```js
gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 16, 0);
gl.vertexAttribPointer(aColorPosition, 4, gl.UNSIGNED_BYTE, false, 16, 12);
```

数据绑定需要指定 stride 为 16 字节，对于坐标 `aVertexPosition` 偏移值还是 0，每个数据单元开头就是坐标数据，对于颜色属性的类型需要改为 gl.UNSIGNED_BYTE，并且偏移值为 12 字节跳过前面三个坐标分量。



## 👉 Canvas Size
- WebGL 重置画布尺寸 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-resizing-the-canvas.html
- https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-anti-patterns.html#drawingbuffer

每个画布都有两个尺寸，一个是 `drawingbuffer` 的尺寸表示画布中有多少个像素。另一是画布显示的尺寸， CSS 决定画布显示的尺寸。如果你没有使用 CSS 影响到画布的显示尺寸，画布的显示尺寸则和 `drawingbuffer` 尺寸相同。 

你可以通过两种方式设置画布的 drawingbuffer 尺寸。一种是使用HTML

    <canvas id="canvas" width="400" height="300"></canvas>

另一种是使用 JavaScript

```js
var canvas = document.querySelector("#canvas");
canvas.width = 400;
canvas.height = 300;
```

在下方的例子中画布的显示尺寸是 400x300，但 drawingbuffer 是 10x15

    <canvas id="c" width="10" height="15" style="width: 400px; height: 300px;"></canvas>

假设我们想让画布填充满窗口该怎么做？首先使用 CSS 让浏览器将画布铺满窗口，例如：

    <html>
      <head>
        <style>
          body { border: 0; background-color: white; }
          canvas { width: 100vw; height: 100vh; display: block; }
        <style>
      </head>
      <body>
        <canvas id="c"></canvas>
      </body>
    </html>

现在只需要将 `drawingbuffer` 的尺寸设置为样式表定义的显示尺寸，通过 `clientWidth` 和 `clientHeight` 属性，这是所有 HTML 元素都有的属性， 可以让 JavaScript 获取元素显示的尺寸。

```js
  var canvas = document.querySelector("#c");

  var displayWidth  = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;
 
  // 检尺寸是否相同
  if (canvas.width  != displayWidth ||
      canvas.height != displayHeight) {
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
```

大多数 WebGL 应用是变化的，所以我们需要在绘制之前调整画布为期望的大小。

对于 Retina 视网膜或 HD-DPI 该怎么办？

在 Surface Book 2 主机上，在尝试以上的方法设置 Canvas 的 drawingbuffer 尺寸：

    <canvas id="cc" touch-action="none" tabIndex={1} 
        width="800" height="800"
        style="width: 100vw; height: 100vh;"
    ></canvas>

正常情况下，不设置 drawingbuffer 尺寸，则原点就是在画布中心位置，裁剪空间是在 -1 到 1 的区间，和画布显示尺寸保持一致，即会进行不等比例的缩放。

通过以上方法设置 drawingbuffer 尺寸为显示尺寸后，就会使用图形保持原有比例。当画布显示的比例不是 1:1 绽放时，原来的裁剪空间就会漂移到左下角。画布空间足够就可以显示全部图形，空间不够，就会显示左正角部分，其余裁掉。这时，初始设置 drawingbuffer 尺寸即 800x800 将作为一个基准，与样式表设置的尺寸保持一个相对的比例，即原始值越大，在画布显示也越大。

要知道 cavnas 是基于状态的绘图组件，其中缩放比例值也在状态管理之中。当重置 canvas 的尺寸，不仅会清空画布内容，同时还会把绘图状态重置到最原始的状态，缩放比例也重置为 1，因而导致绘制效果错乱。通过鼠标获取四角的坐标就不是正常的值，需要进行适当转换。

当你使用 CSS 像素值声明画布的尺寸时，这个叫做 CSS 像素值，可能不是真实像素值。 大多数现代智能手机有叫做高清显示 HD-DPI 或者苹果叫它 Retina Display 的特性。 对于文字和大多数 CSS 样式浏览器会自动绘制 HD-DPI 图形，但是对于 WebGL，由你来控制绘制图形，所以取决于你想绘制一般分辨率还是 HD-DPI 品质。

设备独立像素又称`设备无关像素` DIP - Device Independent Pixels，密度独立性 Density Independent 或设备独立像素，简称 DP，是一种物理测量单位，基于计算机控制的坐标系统和抽象像素，由底层系统的程序使用，转换为物理像素的应用。

保持密度独立性很重要，因为如果没有此功能，对相同像素尺寸的 UI 元素例如按钮，在低密度屏幕上看起来较大，在高密度屏幕上看起来较小。

因为同样的物理尺寸显示区域，高像素密度的视网膜屏幕拥有更多的像素量，即 DPI - Dots per Iinch 像素密度值更大，这些 密度相关的大小变化可能给应用布局和易用性带来问题。如果使用设备无关的像素 DIP 来设计 UI 元素，那么相同 DIP 尺寸的元素在所有屏幕上显示出来的大小应该是具有一致的物理大小。

当页面设置了：

    <meta name="viewport" content="width=device-width">

在大部分浏览器下通过 document.documentElement.clientWidth 得到的是布局视区的物理宽度，包含的是 DIP 像素量，乘以 devicePixelRatio 得到的物理像素值。

为了实现高清屏的绘图效果，需要获得 window.devicePixelRatio 的值，这个值告诉我们 1 个 CSS 像素对应多少个实际像素。 我们可以修改 resize 方法处理这种情况。

```js
  var realToCSSPixels = window.devicePixelRatio;

  var displayWidth  = Math.floor(gl.canvas.clientWidth  * realToCSSPixels);
  var displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);

  // 检查画布尺寸是否相同
  if (gl.canvas.width  !== displayWidth ||
      gl.canvas.height !== displayHeight) {

    gl.canvas.width  = displayWidth;
    gl.canvas.height = displayHeight;
  }
```

如果你有一个 HD-DPI 显示器，例如在智能手机上浏览这个网页的话， 你就会发现下面的线要比之前的线，也就是没有对 HD-DPI 做调整的线要细一些。

是否需要根据 HD-DPI 做调整取决于设备要求，在 iPhone4 或 iPhone5 上 window.devicePixelRatio 的值是 2, 意味着你要绘制 4 倍的像素个数。我确定在 iPhone6Plus 上那个值是 3， 意味着 9 倍的像素个数。这样就会拖慢你的应用，实际上在游戏中常用的优化是绘制比显示数量要小的像素个数， 让 GPU 缩放它们。这其实取决于你的目的，如果你想绘制用于打印的图形， 你可能希望支持 HD-DPI，如果你想做一个游戏想给用户多种选择， 让他们根据自己的机器调整配置，控制显示分辨率。


WebGL 处理响应上下文丢失，在某些特殊情况下，入另一个程序接管了图形硬件，或者操作系统进入休眠，浏览器就会失去使用这些资源的权利，并导致存储在硬件中的数据丢失。在这种情况下，WebGL绘图上下文就会丢失。

比如，如果你正在一台笔记本电脑或智能手机上运行WebGL程序，然后使其进入休眠状态，通常此时浏览器的控制台会显示一条错误新消息。当你将电脑或手机重新唤醒后，操作系统确实回到了休眠前的状态，但是浏览器中运行的 WebGL 程序却不见了，网页上面将显示一片空白。

WebGL 提供了两个事件来表示这种情况：

```js
//添加事件监听
canvas.addEventListener("webglcontextlost", contextLost);
canvas.addEventListener("webglcontextrestored", function () {
    start(canvas);
});
```

在 `webglcontextlost` 事件中处理丢失上下文时的响应动作，如终止动画执行程序，然后在 `webglcontextrestored` 事件中恢复运行。



## 👉 isWebGLAvailable isWebGL2Available
- https://github.com/mrdoob/three.js/blob/master/examples/js/WebGL.js
- Can I use WebGL https://caniuse.com/#feat=webgl

在所有现代浏览器中，Three.js 可以使用 WebGL 来渲染场景。对于较旧的浏览器，特别是 Internet Explorer 10 或者更低版本浏览器，需要降级到其它渲染技术 CSS2DRenderer、CSS3DRenderer、SVGRenderer。此外，你或许不得不包含一些额外的 polyfill，至少需要 Typed Arrays 或 Blob 来解决兼容性问题，特别是当你使用 /examples 目录中的文件时。

建议的 polyfill：

- core-js
- typedarray.js
- ES6-Promise
- Blob.js
- fetch

不推荐使用非 WebGL 渲染器来进行渲染，因为与 WebGLRenderer 相比，其它渲染器渲染较慢，并且不支持 WebGL 的诸多特性。

支持 WebGL 的浏览器：

- Google Chrome 9+
- Firefox 4+
- Opera 15+
- Safari 5.1+
- Internet Explorer 11 和 Microsoft Edge

WebGL 兼容性检查，虽然这个问题现在已经变得越来不明显，但不可否定的是，某些设备以及浏览器直到现在仍然不支持 WebGL。

以下的方法可以帮助你检测当前用户所使用的环境是否支持 WebGL，如果不支持。

```js
// THREE.WEBGL = {
isWebGLAvailable: () 
=> {
    try {
        var canvas = document.createElement( 'canvas' );
        return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
    } catch ( e ) {
        return false;
    }
},

isWebGL2Available: () 
=> {
    try {
        var canvas = document.createElement( 'canvas' );
        return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );
    } catch ( e ) {
        return false;
    }
},
```


## 👉 WebGL State Diagram 有限状态机
- https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html

WebGL State Diagram 示范程序主要演示了 WebGL 各个 API 的使用，和 WebGL 有限状态机的关联状态。

```js
'use strict';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// make a canvas with text in the center
const makeTextCanvas = (text, width, height, color) 
=> {
  const ctx = document.createElement('canvas').getContext('2d')
  ctx.canvas.width = width
  ctx.canvas.height = height
  ctx.font = `bold ${height * 5 / 6 | 0}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, width / 2, height / 2)
  return ctx.canvas
};

const vsGLSL = `
attribute vec4 position;
attribute vec3 normal;
attribute vec2 texcoord;

uniform mat4 projection;
uniform mat4 modelView;

varying vec3 v_normal;
varying vec2 v_texcoord;

void main() {
    gl_Position = projection * modelView * position;
    v_normal = mat3(modelView) * normal;
    v_texcoord = texcoord;
}
`;

const fsGLSL = `
precision highp float;

varying vec3 v_normal;
varying vec2 v_texcoord;

uniform sampler2D diffuse;
uniform sampler2D decal;
uniform vec4 diffuseMult;
uniform vec3 lightDir;

void main() {
    vec3 normal = normalize(v_normal);
    float light = dot(normal, lightDir) * 0.5 + 0.5;
    vec4 color = texture2D(diffuse, v_texcoord) * diffuseMult;
    vec4 decalColor = texture2D(decal, v_texcoord);
    decalColor.rgb *= decalColor.a;
    color = color * (1.0 - decalColor.a) + decalColor; 
    gl_FragColor = vec4(color.rgb * light, color.a);
}
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vsGLSL);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(vertexShader))
};

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fsGLSL);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog(fragmentShader))
};

const prg = gl.createProgram();
gl.attachShader(prg, vertexShader);
gl.attachShader(prg, fragmentShader);
gl.linkProgram(prg);
if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(prg))
};

// NOTE! These are only here to unclutter the diagram.
// It is safe to detach and delete shaders once
// a program is linked though it is arguably not common.
// and I usually don't do it.
gl.detachShader(prg, vertexShader);
gl.deleteShader(vertexShader);
gl.detachShader(prg, fragmentShader);
gl.deleteShader(fragmentShader);

const positionLoc = gl.getAttribLocation(prg, 'position');
const normalLoc = gl.getAttribLocation(prg, 'normal');
const texcoordLoc = gl.getAttribLocation(prg, 'texcoord');

const projectionLoc = gl.getUniformLocation(prg, 'projection');
const modelViewLoc = gl.getUniformLocation(prg, 'modelView');
const diffuseLoc = gl.getUniformLocation(prg, 'diffuse');
const decalLoc = gl.getUniformLocation(prg, 'decal');
const diffuseMultLoc = gl.getUniformLocation(prg, 'diffuseMult');
const lightDirLoc = gl.getUniformLocation(prg, 'lightDir');

// vertex positions for a cube
const cubeVertexPositions = new Float32Array([
    1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1,
]);
// vertex normals for a cube
const cubeVertexNormals = new Float32Array([
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
]);
// vertex texture coordinates for a cube
const cubeVertexTexcoords = new Float32Array([
    1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1,
]);
// vertex indices for the triangles of a cube
// the data above defines 24 vertices. We need to draw 12
// triangles, 2 for each size, each triangle needs
// 3 vertices so 12 * 3 = 36
const cubeVertexIndices = new Uint16Array([
    0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
],);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, cubeVertexPositions, gl.STATIC_DRAW);

const normalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
gl.bufferData(gl.ARRAY_BUFFER, cubeVertexNormals, gl.STATIC_DRAW);

const texcoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, cubeVertexTexcoords, gl.STATIC_DRAW);

const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndices, gl.STATIC_DRAW);

const checkerTexture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, checkerTexture);
gl.texImage2D(
    gl.TEXTURE_2D,
    0,                // mip level
    gl.LUMINANCE,     // internal format
    4,                // width
    4,                // height
    0,                // border
    gl.LUMINANCE,     // format
    gl.UNSIGNED_BYTE, // type
    new Uint8Array([  // data
      192, 128, 192, 128,
      128, 192, 128, 192,
      192, 128, 192, 128,
      128, 192, 128, 192,
    ]));
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const decalTexture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, decalTexture);
gl.texImage2D(
    gl.TEXTURE_2D,
    0,                // mip level
    gl.RGBA,          // internal format
    gl.RGBA,          // format
    gl.UNSIGNED_BYTE, // type
    makeTextCanvas('F', 32, 32, 'red'));
gl.generateMipmap(gl.TEXTURE_2D);

// above this line is initialization code
// --------------------------------------
// below is rendering code.

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

gl.clearColor(0.5, 0.7, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

gl.enable(gl.DEPTH_TEST);
gl.enable(gl.CULL_FACE);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.enableVertexAttribArray(positionLoc);
gl.vertexAttribPointer(
    positionLoc,  // location
    3,            // size (components per iteration)
    gl.FLOAT,     // type of to get from buffer
    false,        // normalize
    0,            // stride (bytes to advance each iteration)
    0,            // offset (bytes from start of buffer)
);

gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
gl.enableVertexAttribArray(normalLoc);
gl.vertexAttribPointer(
    normalLoc,  // location
    3,          // size (components per iteration)
    gl.FLOAT,   // type of to get from buffer
    false,      // normalize
    0,          // stride (bytes to advance each iteration)
    0,          // offset (bytes from start of buffer)
);

gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
gl.enableVertexAttribArray(texcoordLoc);
gl.vertexAttribPointer(
    texcoordLoc,  // location
    2,            // size (components per iteration)
    gl.FLOAT,     // type of to get from buffer
    false,        // normalize
    0,            // stride (bytes to advance each iteration)
    0,            // offset (bytes from start of buffer)
);

// gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

gl.useProgram(prg);

// Picking unit 6 just to be different. The default of 0
// would render but would show less state changing.
let texUnit = 6;
gl.activeTexture(gl.TEXTURE0 + texUnit);
gl.bindTexture(gl.TEXTURE_2D, checkerTexture);
gl.uniform1i(diffuseLoc, texUnit);

texUnit = 3;
gl.activeTexture(gl.TEXTURE0 + texUnit);
gl.bindTexture(gl.TEXTURE_2D, decalTexture);
gl.uniform1i(decalLoc, texUnit);

gl.uniform3fv(lightDirLoc, m4.normalize([1, 5, 8]));

const projection = m4.perspective(
  60 * Math.PI / 180,  // fov
  gl.canvas.clientWidth / gl.canvas.clientHeight,  // aspect
  0.1,  // near
  10,   // far
);
gl.uniformMatrix4fv(projectionLoc, false, projection);

// draw center cube

let modelView = m4.identity();
modelView = m4.translate(modelView, 0, 0, -4);
modelView = m4.xRotate(modelView, 0.5);
modelView = m4.yRotate(modelView, 0.5);

gl.uniformMatrix4fv(modelViewLoc, false, modelView);

gl.uniform4fv(diffuseMultLoc, [0.7, 1, 0.7, 1]);

gl.drawElements(
    gl.TRIANGLES,
    36,                // num vertices to process
    gl.UNSIGNED_SHORT, // type of indices
    0,                 // offset on bytes to indices
);

// draw left cube

modelView = m4.identity();
modelView = m4.translate(modelView, -3, 0, -4);
modelView = m4.xRotate(modelView, 0.5);
modelView = m4.yRotate(modelView, 0.8);

gl.uniformMatrix4fv(modelViewLoc, false, modelView);

gl.uniform4fv(diffuseMultLoc, [1, 0.7, 0.7, 1]);

gl.drawElements(
    gl.TRIANGLES,
    36,                // num vertices to process
    gl.UNSIGNED_SHORT, // type of indices
    0,                 // offset on bytes to indices
);

// draw right cube

modelView = m4.identity();
modelView = m4.translate(modelView, 3, 0, -4);
modelView = m4.xRotate(modelView, 0.6);
modelView = m4.yRotate(modelView, -0.6);

gl.uniformMatrix4fv(modelViewLoc, false, modelView);

gl.uniform4fv(diffuseMultLoc, [0.7, 0.7, 1, 1]);

gl.drawElements(
    gl.TRIANGLES,
    36,                // num vertices to process
    gl.UNSIGNED_SHORT, // type of indices
    0,                 // offset on bytes to indices
);
```


# 🚩 Shader 着色器入门
- API 参考卡 https://www.khronos.org/developers/reference-cards
- WebGL 1.0 specification https://www.khronos.org/registry/webgl/specs/latest/1.0/
- 3D Game Shaders For Beginners https://lettier.github.io/3d-game-shaders-for-beginners/
- OpenGL Mathematics (GLM) https://www.opengl.org/sdk/libs/GLM/
- [ShaderX 1-7 系列] Direct3D ShaderX Vertex and Pixel Shader Tips and Tricks - by Wolfgang F. Engel
- OpenGL 4.0 Shading Language Cookbook 3rd edition http://github.com/daw42/glslcookbook
- WebGL 编程指南 Kouichi Matsuda(松田浩一) - 第六章 OpenGL ES 着色器语言
- OpenGL 编程指南(第8版) - 第2章 着色器基础 第9章 细分着色器 第10章 几何着色器 第10章 计算着色器(OpenGL4.3新特性)
- OpenGL 超级宝典 第5版 - 第11章 高级着色器应用
- WebGL 样板 https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-boilerplate.html
- [深入GPU硬件架构及运行机制](https://www.cnblogs.com/timlly/p/11471507.html)
- [GPU Programming Guide G80](https://developer.download.nvidia.cn/GPU_Programming_Guide/GPU_Programming_Guide_G80.pdf)
- OpenGL Shading Language https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language
- The Book of Shaders by Patricio Gonzalez Vivo and Jen Lowe https://thebookofshaders.com/
- Protean clouds by nimitz https://webglfundamentals.org/webgl/lessons/webgl-shadertoy.html


着色器就是 GPU 中运行的代码，对现代 GPU 而言，可编程的阶段越来越多，包含但不限于：顶点着色器 Vertex Shader、曲面细分控制着色器 Tessellation Control Shader、几何着色器 Geometry Shader、像素/片元着色器 Fragment Shader、计算着色器 Compute Shader、...

现代的 GPU 之所以称为 GPU 就是因为它不再是旧式低能的图形显示输出设备，而是具有强大的可编程能力的图形运算处理单元，正如它的名字 Graphics Proces Unit。现代的 GPU 引入管线概念 `Pipeline`，图形处理代码以并行高速方式运行，着色器程序的应用是实现高质量图形应用实时渲染的关键。

三大主流的 Shader 语言是：

- HLSL - Direct3D High Level Shader Language 高级着色语言
- GLSL - OpenGL Shader Language 
- CGSL - Nvidia C for Graphic

在 WebGL 中有`顶点着色器` Vertex Shader 和`片断着色器` Fragment Shader 两种，并且使用一种和 C/C++ 类似的强类型的`着色语言` GLSL - Graphics Libraray Shader Language。 

每一对组合起来称作一个`着色程序` Shader Programs，所有着色程序都有一个 `main()` 方法，和 C 语言程序相似，也有类似的变量类型，结构体和数组，条件判断、循环控制、函数，预处理程序等。

着色器程序代码编写好之后，需要通过 WebGL 或 OpenGL 相应的 API 来执行绑定、编译、链接，加载运行：

```js
var shader = gl.createShader(gl.VERTEX_SHADER | gl.FRAGMENT_SHADER);
gl.shaderSource(shader, "shader source...");
gl.compileShader(shader);
var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log('Failed to compile shader: ' + error);
    gl.deleteShader(shader);
}

var program = gl.createProgram();
gl.attachShader(program, shader);
gl.attachShader(program, more_shader);
gl.linkProgram(program);
var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log('Failed to link program: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
}
gl.useProgram(program);
```

具体参考 OpenGL ES Shading Language 规范手册，使用中更多是算法上的实现，和属性、可变量、全局变量等应用。

光栅化 Rasterization 即将数学模型描述的各种图形转化为像素显示的过程，发生在片断着色器执行之前。`顶点着色器`处理的是数学模型的顶点坐标信息、`片断着色器`处理的是像素色值数据，那么光栅化的作用的就是将顶点信息转换为像素，就像绘图软件将矢量图形转换为位图。在转换过程中，每一个像素的颜色将会通过插值计算的方式计算的得出，这就是为什么我们会在三角形填充区域看到的那些渐变颜色。

每个顶点调用一次顶点着色器，每次调用都需要设置一个特殊的全局变量 `gl_Position`，该变量的值就是给顶点设置的裁减空间坐标值。

顶点着色器需要的数据，可以通过以下三种方式获得：

- `Attributes` 属性，从缓冲中获取的数据；
- `Uniforms` 全局变量，在一次绘制中对所有顶点保持一致值；
- `Textures` 纹理，从像素或纹理元素中获取的数据；


一个片断着色器的工作是为当前光栅化的像素提供颜色值，通常是以下的形式：

```ts
precision mediump float;
 
void main() {
   gl_FragColor = doMathToMakeAColor;
}
```

每个像素都将调用一次片断着色器，每次调用需要从特殊内置全局变量 `gl_FragColor` 中获取颜色信息。

片断着色器所需的数据，可以通过以下三种方式获取：

- `Uniforms` 全局变量 (values that stay the same for every pixel of a single draw call)
- `Textures` 纹理 (data from pixels/texels)
- `Varyings` 可变量 (data passed from the vertex shader and interpolated)


顶点数据是图形的基础，而图形软件的最终目的是要通过大量的数据去绘制出期望的图形效果，现代图形软件中，渲染管线 Pipeline 是最基础的概念，图形软件优化就是管线各个细节的优化 Pipeline Optimization。

这里说到的 `Attributes` `Uniforms` `Textures` 等等，都着色器程序中的数据存储方式限定符号 Storage Qualifiers，具体参考 OpenGL ES 手册。

着色器的内置变量有多个，根据其在渲染管线中的功能分成不同的类型：

基点着色器内建变量 Vertex Shader Special Variables [7.1]

Outputs:

    | 变量                        | 说明                 | 坐标系或单位     |
    | highp vec4 gl_Position;     | 变换顶点坐标使用     | clip coordinates |
    | mediump float gl_PointSize; | gl.POINTS 光栅化时变换顶点大小 | pixels           |

片断着色器内建变量 Fragment Shader Special Variables [7.2]

Inputs:

    | 变量                        | 说明                                         | 坐标系或单位                  |
    | mediump vec4 gl_FragCoord;  | fragment position within frame buffer        | window coordinates            |
    | bool gl_FrontFacing;        | fragment belongs to a front-facing primitive | Boolean                       |
    | mediump vec2 gl_PointCoord; | fragment position within a point             | 0.0 to 1.0 for each component |

Outputs:

    | 变量                        | 说明                                  | 坐标系或单位 |
    | mediump vec4 gl_FragColor;  | fragment color                        | RGBA color   |
    | mediump vec4 gl_FragData[n] | fragment color for color attachment n | RGBA color   |

内建常量 Built-In Constants With Minimum Values [7.4]

    | Built-in Constant                                 | Minimum value |
    | const mediump int gl_MaxVertexAttribs             | 8             |
    | const mediump int gl_MaxVertexUniformVectors      | 128           |
    | const mediump int gl_MaxVaryingVectors            | 8             |
    | const mediump int gl_MaxVertexTextureImageUnits   | 0             |
    | const mediump int gl_MaxCombinedTextureImageUnits | 8             |
    | const mediump int gl_MaxTextureImageUnits         | 8             |
    | const mediump int gl_MaxFragmentUniformVectors    | 16            |
    | const mediump int gl_MaxDrawBuffers               | 1             |

内建全局量 Built-In Uniform State [7.5]

    struct gl_DepthRangeParameters {
        highp float near; // n
        highp float far; // f
        highp float diff; // f - n
    };
    uniform gl_DepthRangeParameters gl_DepthRange;

参考快速参考卡 Built-In Inputs, Outputs, and Constants。

除了 `gl_Position` `gl_FragColor` 两个最常用的内建变量，和它们相关的是 `gl_PointCoord` `gl_FragCoord`。

在 gl.POINTS 渲染模式下的顶点渲染为方形区域，可以通过内置变量 gl_PointSize 设置顶点渲染的方向区域像素大小。通过 `gl_PointCoord` 可以控制顶点的那些部分需要渲染。每个方形区域以左上角建立一个直角坐标系，每个方形区域几何中心坐标是(0.5,0.5)，右下角坐标是(1.0,1.0)。

内置变量 `gl_FragCoord` 表示 WebGL 在 Canvas 画布上渲染的原始坐标，坐标原点是 Canvas 画布的左上角，x 轴水平向右，y 竖直向下，坐标的单位是像素，此向量的 x、y 分量值对应 `drawingbuffer` 的尺寸。

例如，计算方形区域每个片元距离方形几何中心的距离，只绘指定圆形区域为红色：

```GLSL
  precision lowp float;
  void main() {
    float r = distance(gl_PointCoord, vec2(0.5, 0.5));
    if(r < 0.5){
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }else {
      discard;
      // gl_FragColor = vec4(gl_FragCoord.x/800.0*1.0,1.0,0.0,1.0);
    }
  }
```

关键字 `discard` 在片元着色器中的作用就像 for 语句中的 continue break 关键字一样，专门用于着色器片元处理，告诉 GPU 在片元着色器逐个片元的处理过程中，把不符合程序条件的代码舍弃掉。


## 👉 GPU Pipeline 可编程渲染管线
- 华中科技大学 计算机图形学 延时渲染 #万琳教授 https://www.bilibili.com/video/BV1V7411k74z?p=83
- Deferred Shading 延迟渲染  https://gameinstitute.qq.com/community/detail/121651
- Real Time Rendering 4th Edition - Chapter 2 The Graphics Rendering Pipeline
- GPU Gems 1st edition https://developer.nvidia.com/gpugems/gpugems
- GPU Gems 2nd edition https://developer.nvidia.com/gpugems/gpugems2
- GPU Gems 3rd edition https://developer.nvidia.com/gpugems/gpugems3

简单来说，GPU 渲染管线完成一次原始顶点数据到渲染结果的工作称为一个 Rendering Pass，就是走完图形渲染一个渲染流程，从而得到一帧数据的过程，Multi-pass 就是多需要多个渲染流程才能完成一帧结果。

而每个渲染流程要做什么工作，这也就是一个 Rendering Path 的概念。现代的 GPU 架构基本稳定，涉及的渲染工序也比较清晰，而且有大量可以编程的阶段。

主要有几何处理和光栅化处理过程，在 Real Time Rendering 中分成以下四个基本阶段组织：

- Application 用户应用程序控制阶段，如顶点着色器的编程部分；
- Geometry Processing 
- Rasterization
- Pixel Processing

通常有以下这些渲染阶段和对应的着色器：

- Geometry Data 原始几何数据；
- Vertex Shader 顶点着色器，原始数据传入；
- Tessellation Shader 曲面细分着色器，对几何细节进行调整；
- Geometry Shader 几何着色器，可选的阶段，可以在 GPU 上增删几何信息；
- Culling & Clipping 裁剪和背面剔除相关的优化，以减少进入光栅化的图元的数量，加速渲染过程；
- Screen Mapping 进行透视除法和视口变换；
- Primitive Setup & Traversal 图元组装与遍历，将输入的顶点组装成指定的图元；
- Rasterization 光栅化，即将数学模型结构转印为图像；
- Fragment Shader 片断着色器，进行像素级别的处理；
- 合成生成 Render Target；
- 最后传给 FrameBuffer 帧缓存，并显示到屏幕上。

Nvidia 官方免费电子书 GPU Gems 配套 FX Composer 工具，可以用来测试着色器程序，最后一版本是 FX Composer 2.5，现已经停止开发更新，以后使用  NVIDIA Nsight Visual Studio Edition。

使用 Blender 也可以支持为 cycles 渲染引擎编写着色器，不过使用的是 Open Shading Language。在着色器编辑器中添加一个 Script 节点，另外使用 TextEditor 创建一个着色器代码文本文件，或者引用外部脚本即可。OSL 不同于 RSL 或 GLSL，它没有光回路。场景中没有入射光源，而且必须由在渲染引擎本身的闭包中构建。

例如，以下着色器设置了两个输入端口，和一个 BSDF 输出端口：

```OSL
shader simple_material(
    color Diffuse_Color = color(0.6, 0.8, 0.6),
    float Noise_Factor = 0.5,
    output closure color BSDF = diffuse(N))
{
    color material_color = Diffuse_Color * mix(1.0, noise(P * 10.0), Noise_Factor);
    BSDF = material_color * diffuse(N);
}
```

渲染可以按用途分为两种工作方式，实时渲染 Real-time Rendering vs 离线渲染 Offline Rendering。前者因为需要保证速度而不得不在画质上做出妥协，多用于游戏。后者则可以为了追求真实感而不计成本，多用于动画电影。两种方案为了各自的目标而不得不在速度上、画质上做出妥协 Trade-off。

针对不同的需求，还有特定场景专用的渲染技术。

`延迟渲染` Deferred Shading 解决了大量光照的渲染消耗。假设一个场景设置了 100 盏灯和 10000 Mesh 需要渲染，传统的`前向渲染` Forward Shading 是怎么做的呢？它渲染 Mesh 时同时执行光照渲染，空间的点进行各种剪裁后，进行处理，所处理量远远大于我们最终看到的。这就是 100 * 10000 次的计算消耗，如果再增加一盏灯，计算量再增加 10000 次的计算消耗。而使用延时渲染只需要先渲染模型，将摄像机空间的点先光栅化，转化成屏幕坐标后再进行处理，然后再渲染光线，这样大量计算就直接省下了。

总结一下：如果你的场景只有一个平行光，那么使用延迟渲染优化将毫无意义！图形学的很多优化算法，都是针对特定的场景，而不是一个算法吃遍天，这不现实。例如 GIS 的渲染跟游戏的渲染，游戏无限地形渲染跟小地图渲染，诸如此类，往往优化方式都是不同的。

延迟渲染有什么不足？教材的标准答案有两个，不能用硬件 AA（抗锯齿），并且只能用同一套 lighting pass，不能进行透明材质的渲染。

除了这两个不足，还有其他的吗？教科书是没有给答案的。事实上，延时渲染会占用了大量的显存带宽的，读写 G-buffer 的内存带宽用量是性能瓶颈。

这是因为从 GPU 渲染管道 Render Pipe 从 VS 到 GS 处理过程中，会将所有的 Geometry 从渲染管道输出到 Geometry Buffer，即 G-Buffer，然后通过应用着色 Applying Shading 得到最后的图像。

延迟着色的基本原理是，通过 MRT - Multiple Render Targets 将几何体渲染到屏幕空间，渲染过程并不包括光照着色。深度缓冲，法向量缓冲以及颜色缓冲作为不同的缓冲区被写入，这些缓冲区能够提供足够的信息使 Fragment Shader 每一个光源针对每一个像素完成光照计算。MRT 在老式的显卡上是不被支持的，所以在使用这项技术的时候，应该要明确显卡是否支持 MRT，同时老式的显卡或许并不具备大带宽的传输能力。
 
知道每一个像素的距离，和它对应的法向量，就可以得到光源照射在该像素上的最终渲染效果。

有一些引擎采用一些取巧方式减少 Fragment Shader 计算量，比如，将极远处的光源直接剔除，合并光源，或者使用流行的光照贴图。

对于半透明物体遵循画家算法 Painter Algorithm 由远及近进行绘制，因为半透明的混合跟物体的顺序有严格的对应关系。但需要按照距离远近对场景中的物体进行严格排序，然而这是一个非常棘手的问题。所以当进行半透明物体渲染时，一般会使用顺序无关的半透明渲染技术 OIT - Order-independent transparency。



## 👉 GLSL Data Type 基本数据类型
- WebGL 参考卡 https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf
- The OpenGL® ES Shading Language https://www.khronos.org/files/opengles_shading_language.pdf
- Type Qualifier (GLSL) https://www.khronos.org/opengl/wiki/Type_Qualifier_(GLSL)

着色器语言有一些不同于 JavaScript 的特性，主要目的是为栅格化图形提供常用的计算功能。 所以它内建的数据类型例如 vec2, vec3 和 vec4 分别代表两个值，三个值和四个值， 类似的还有 mat2, mat3 和 mat4 分别代表 2x2, 3x3 和 4x4 矩阵，可以做一些运算，例如常量和矢量的乘法。

- v.x 和 v.s 以及 v.r 和 v[0] 表达的是同一个分量。
- v.y 和 v.t 以及 v.g 和 v[1] 表达的是同一个分量。
- v.z 和 v.p 以及 v.b 和 v[2] 表达的是同一个分量。
- v.w 和 v.q 以及 v.a 和 v[3] 表达的是同一个分量。

支持索引混合 Swizzling Vector，或者叫做和矢量重排，以下表达式等价：

    v.yyyy // Swizzling Vector4
    vec4(v.y, v.y, v.y, v.y)
例如

    vec4(v.rgb, 1)
    vec4(v.r, v.g, v.b, 1)

    vec4(1)
    vec4(1, 1, 1, 1)

GLSL是一个强类型的语言。

    float f = 1;  // 错误，不能将 int 型赋值给 float

正确的方式是

    float f = 1.0;      // 使用float
    float f = float(1)  // 转换integer为float

上例中 vec4(v.rgb, 1) 不会因为 1 报错，因为 vec4 内部进行了类似 `float(1)` 转换。

以 4x4 矩阵为例，以下是一个用于平移的齐次坐标变换矩阵，向 xyz 各轴正向平移 0.5 个单位：

```js
mat4 scale = mat4(
  vec4(1.0, 0.0, 0.0, 0.5),
  vec4(0.0, 1.0, 0.0, 0.5),
  vec4(0.0, 0.0, 1.0, 0.5),
  vec4(0.0, 0.0, 0.0, 1.0)
);
scale[0] = vec4(1.0, 0.0, 0.0, 0.5);
scale[1] = vec4(0.0, 1.0, 0.0, 0.5);
scale[2] = vec4(0.0, 0.0, 1.0, 0.5);
scale[3] = vec4(0.0, 0.0, 0.0, 1.0);
```

列如，定义一个 vec4 类型的属性，它的默认值就是 `vec4(0, 0, 0, 1)`，如果将这个 3D 齐次坐标 `Homogeneous coordinates` 与内置位置属性相加，结果就是缩小为 1/2。

```GLSL
attribute vec4 a_Offset;

void main() {
    gl_Position = a_Position + a_Offset;
    gl_Position = a_Position + (length(a_Offset)!=1.0? a_Offset:vec4(0, 0, 0, 0));
}
```

齐次坐标中 (x, y, w) 规范化表示为 (x/w, y/w, 1)。

如果，和 `vec4(0, 0, 0, 2)` 相加，则缩小为 1/3，这是因为两点坐标叠加，两点相加后，w 分量数值变成 3，要变回 1 就需要除以 3，参考计算机图形学的矩阵变换部分。

以颜色属性为例，使用 `vec4(0, 0, 1, 1)` RGBA 与通过 `varying` 从顶点着色器属性传递到片段着色器的色彩数据相乘，结果就是只保留了 Blue 和 Alpha 分量：

```GLSL
attribute vec4 a_Color;
varying vec4 v_FragColor;
void main() {
    v_FragColor = a_Color;
}`;

varying vec4 v_FragColor;
void main() {
    gl_FragColor = vec4(0, 0, 1, 1) * v_FragColor;
}`;
```

“齐次坐标表示是计算机图形学的重要手段之一，它既能够用来明确区分向量和点，同时也更易用于进行仿射（线性）几何变换。”—— F.S. Hill, JR。

其实，齐次坐标翻译 Homogeneous Coordinates 这个名词是不太恰当的，因为齐次这个字眼，很空易让数学基础不那么好的人联想到乘方这种毫不相关的事情上来。事实上，Homogeneous 的本意是一致化、同形式化，即将不同形式的坐标用相同形式表达。最好的举例就是在平移遇到其它线性变换的情况中，平移不能直接用一个维度相同的矩阵乘法来表达，这才想到要给坐标添加多一个维度来表示这个额外的平移变换。

在三维系统中，常见的缩放、旋转、切变矩阵如下，平移量使用的是最右则的位置：

```js
uniform vec3 u_Angle;
....

mat4 scale = mat4(
  vec4(u_Scale, 0.0, 0.0, 0.0),
  vec4(0.0, u_Scale, 0.0, 0.0),
  vec4(0.0, 0.0, u_Scale, 0.0),
  vec4(0.0, 0.0, 0.0, 1.0)
);
float PI = 3.1415926;
float x = u_Angle.x;
float y = u_Angle.y;
float z = u_Angle.z;
mat4 shearX = mat4(
  vec4(1.0, z,   0.0, 0.0),
  vec4(0.0, 1.0, 0.0, 0.0),
  vec4(0.0, 0.0, 1.0, 0.0),
  vec4(0.0, 0.0, 0.0, 1.0)
);
mat4 rotateX = mat4(
  vec4(1.0,    0.0,     0.0, 0.0),
  vec4(0.0, cos(x), -sin(x), 0.0),
  vec4(0.0, sin(x),  cos(x), 0.0),
  vec4(0.0,    0.0,     0.0, 1.0)
);
mat4 rotateY = mat4(
  vec4( cos(y), 0.0, sin(y), 0.0),
  vec4(    0.0, 1.0,    0.0, 0.0),
  vec4(-sin(y), 0.0, cos(y), 0.0),
  vec4(    0.0, 0.0,    0.0, 1.0)
);
mat4 rotateZ = mat4(
  vec4( cos(z), -sin(z), 0.0, 0.0),
  vec4( sin(z),  cos(z), 0.0, 0.0),
  vec4(    0.0,     0.0, 1.0, 0.0),
  vec4(    0.0,     0.0, 0.0, 1.0)
);

gl_Position = a_Position * scale * rotateX * rotateY * rotateZ;
```


GLSL有一系列内置方法，其中大多数运算支持多种数据类型，并且一次可以运算多个分量，例如：

    T sin(T angle)

    vec4 s = sin(v);
    vec4 s = vec4(sin(v.x), sin(v.y), sin(v.z), sin(v.w));

T 可以是 float, vec2, vec3 或 vec4，返回和输入类型相同，返回结果对应每个分量的正弦值。


有时一个参数是浮点型而剩下的都是 T ，意思是那个浮点数据会作为所有其他参数的一个新分量。 例如以下等价表达：

    vec4 m = mix(v1, v2, f);

    vec4 m = vec4(
      mix(v1.x, v2.x, f),
      mix(v1.y, v2.y, f),
      mix(v1.z, v2.z, f),
      mix(v1.w, v2.w, f));

在需要指定数据类型的 API 中，WebGL 有对应的常量对应基本的数据类型：

    /* DataType */
    const GLenum BYTE                           = 0x1400;
    const GLenum UNSIGNED_BYTE                  = 0x1401;
    const GLenum SHORT                          = 0x1402;
    const GLenum UNSIGNED_SHORT                 = 0x1403;
    const GLenum INT                            = 0x1404;
    const GLenum UNSIGNED_INT                   = 0x1405;
    const GLenum FLOAT                          = 0x1406;


## 👉 Buffer & Attributes
- https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-attributes.html
- WebGL 2.0 Specification https://www.khronos.org/registry/webgl/specs/latest/2.0/
- The OpenGL 4.6 (Core Profile) API Specification https://www.khronos.org/registry/OpenGL/index_gl.php
- Built-in Variable https://www.khronos.org/opengl/wiki/Built-in_Variable_(GLSL)

最常用的方法是顶点数组缓冲对象 VAO 和属性，`Buffer` & `Attributes`，数据要获取缓冲区的数据就需要先创建缓冲对象，并将缓冲对象绑定到属性。


通过给着色器属性绑定缓存数据，可以给顶点着色器的多个属性供应大量不同的数据，这一点在使用 Textures `纹理`数据时也相似。GPU 可以通过通过绑定点操控全局范围内的顶点和其他数据，可以把绑定点想象成一个 WebGL 内部的全局变量，或者通过教材主页提供的 WebGL State Diagram 有限状态机模拟程序观察。

以下是几个关于数据组织和传递方式概念：

- `VBO` - Vertex Buffer object 在显卡存储空间中开辟出的一块内存缓存区用来储存顶点数据，增加顶点进入 GPU 效率的方法。它们是可以存储在显存中的缓冲区，以最快的 GPU 速度去访问数据。
- `VAO` - Vertex Arrary Object 顶点数组对象，定义了 VBO 顶点属性，和着色器变量起连接作用。
- `EBO` - Element Buffer Object 索引缓冲对象，或者称 `IBO` - Index Buffer Object，相当于 OpenGL 中的顶点数组的概念，解决顶点重用问题，可以减少内存空间浪费，提高执行效率。当需要使用重复的顶点时，通过顶点的位置索引来调用顶点，而不是对重复的顶点信息重复记录，重复调用。

直接从本地内存推送顶点数据到给 OpenGL 核心，这样中间就会间隔着频繁的 CPU -> GPU 数据对拷操作，增大开销，从而降低效率。

使用 VBO 可以直接将顶点数据缓存到 GPU 开辟的一段内存中，直接从显存中获取而不必再走一遍主机内存，这样就能提升绘制的效率。而 VAO 和 EBO 的使用，则是在 VBO 的基础上，以更有效率的方式进行绘图。


首先，需要创建一个缓冲区，然后绑定到一个着色器属性，这个绑定关系会记录到绑定点，然后 GPU 就可以引用绑定点指向该数据，如下：

```js
// Create a buffer for the colors.
var colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array(
    [ Math.random(), Math.random(), Math.random(), 1,
      Math.random(), Math.random(), Math.random(), 1,
      Math.random(), Math.random(), Math.random(), 1,
      Math.random(), Math.random(), Math.random(), 1,
      Math.random(), Math.random(), Math.random(), 1,
      Math.random(), Math.random(), Math.random(), 1]),
  gl.STATIC_DRAW);
```

最后一个参数 `gl.STATIC_DRAW` 是提示 WebGL 这些数据不会经常改变，WebGL 会根据提示做出一些优化。

然后调用以下方法开启从缓冲中获取数据：

```js
// 开启从缓冲中获取数据
gl.enableVertexAttribArray(positionLoc);

var size = 3;  // (x, y, z)
var type = gl.FLOAT;    // 32 位浮点数据
var normalize = false;  // 不标准化
var offset = 0;         // 从缓冲起始位置开始获取
var stride = 0;         // 到下一个数据跳多少位内存
                    // 0 = 使用当前的单位个数和单位长度 （ 3 * Float32Array.BYTES_PER_ELEMENT ）
gl.vertexAttribPointer(positionLoc, size, type, normalize, stride, offset);
```

`vertexAttribPointer()` 告诉 WebGL 从当前 ARRAY_BUFFER 绑定点的缓冲获取数据。即相当将 gl.ARRY_BUFFER 绑定的缓冲区数据分配给着色器属性，size 指定缓冲区中每个顶点的分量个数，stride 指定相邻的两个顶点间隔字节数，默认为 0。

注意 `createBuffer()` 和 `bindBuffer()` 可以运行多次，最后绑定的就需要当前的绑定缓冲区。

需要使用着色器中定义的属性 `attribute` 或者全局变量 `Uniforms` 等等时，可以使用专用 API 寻找属性和全局属性地址：

- `GLint getAttribLocation(WebGLProgram program, DOMString name)` 
- `WebGLUniformLocation getUniformLocation(WebGLProgram program, DOMString name)` 
- `any getUniform(WebGLProgram program, WebGLUniformLocation location);`
- `any getVertexAttrib(GLuint index, GLenum pname);`

例如获取着色器属性 a_Position 的地址索引 `gl.getAttribLocation(gl.program, 'a_Position')`。

可以直接指定一个索引值而不是通过 API 来获取，但通常不建议直接指定索引数值的方式。

以下展示单个坐标数据设置的顶点着色器属性 API：

    void vertexAttrib1f(GLuint index, GLfloat x);
    void vertexAttrib2f(GLuint index, GLfloat x, GLfloat y);
    void vertexAttrib3f(GLuint index, GLfloat x, GLfloat y, GLfloat z);
    void vertexAttrib4f(GLuint index, GLfloat x, GLfloat y, GLfloat z, GLfloat w);

    void vertexAttrib1fv(GLuint index, Float32List values);
    void vertexAttrib2fv(GLuint index, Float32List values);
    void vertexAttrib3fv(GLuint index, Float32List values);
    void vertexAttrib4fv(GLuint index, Float32List values);

这些代码应该是在初始化过程执行的，在页面加载时只需要运行一次。

使用 VAO 传递数据：

```js
ext = gl.getExtension("OES_vertex_array_object");
var vertex = [
    -50, -30,  0,
    -5,  -30,  0,
    -5,   30,  0,
    -50,  30,  0
];
vertexBuffer1 = gl.createBuffer();
vao1 = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao1);
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer1);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);

var index = [
    0, 1, 2,
    0, 2, 3
];
indexBuffer1 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer1);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(index), gl.STATIC_DRAW);

aVertexPosition = gl.getAttribLocation(glProgram, 'aPos');

gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(aVertexPosition);

ext.bindVertexArrayOES(null);
```


## 👉 Uniform 全局变量
- https://www.khronos.org/opengl/wiki/Uniform_(GLSL)

Uniform 全局变量也可以看作是 VAO 数据绑定的一种方式，只是它与 `attribute` 属性不同的是没有激活状态这样的操作，因为它在整个着色器程序有效。

全局变量在一次绘制过程中传递给着色器的值都一样，在下面的一个简单的例子中， 用全局变量给顶点着色器添加了一个偏移量：

```GLSL
attribute vec4 a_position;
uniform vec4 u_offset;
 
void main() {
   gl_Position = a_position + u_offset;
}
```

现在可以把所有顶点偏移一个固定值，首先在初始化时找到全局变量的地址，然后在绘制前设置全局变量：

```js
var offsetLoc = gl.getUniformLocation(someProgram, "u_offset");
gl.uniform4fv(offsetLoc, [1, 0, 0, 0]);  // 向右偏移一半屏幕宽度
```

尽管 Uniform 叫做全局变量，但它只属于单个着色程序对象，调用 API 只是设置了当前程序的全局变量，即最后一次执行 `gl.useProgram()` 传入的程序对象。

全局变量有很多类型，对应的类型有对应的设置方法。

```js
gl.uniform1f (floatUniformLoc, v);                 // float
gl.uniform1fv(floatUniformLoc, [v]);               // float 或 float array
gl.uniform2f (vec2UniformLoc,  v0, v1);            // vec2
gl.uniform2fv(vec2UniformLoc,  [v0, v1]);          // vec2 或 vec2 array
gl.uniform3f (vec3UniformLoc,  v0, v1, v2);        // vec3
gl.uniform3fv(vec3UniformLoc,  [v0, v1, v2]);      // vec3 或 vec3 array
gl.uniform4f (vec4UniformLoc,  v0, v1, v2, v4);    // vec4
gl.uniform4fv(vec4UniformLoc,  [v0, v1, v2, v4]);  // vec4 或 vec4 array
 
gl.uniformMatrix2fv(mat2UniformLoc, false, [  4x element array ])  // mat2 或 mat2 array
gl.uniformMatrix3fv(mat3UniformLoc, false, [  9x element array ])  // mat3 或 mat3 array
gl.uniformMatrix4fv(mat4UniformLoc, false, [ 16x element array ])  // mat4 或 mat4 array
 
gl.uniform1i (intUniformLoc,   v);                 // int
gl.uniform1iv(intUniformLoc, [v]);                 // int 或 int array
gl.uniform2i (ivec2UniformLoc, v0, v1);            // ivec2
gl.uniform2iv(ivec2UniformLoc, [v0, v1]);          // ivec2 或 ivec2 array
gl.uniform3i (ivec3UniformLoc, v0, v1, v2);        // ivec3
gl.uniform3iv(ivec3UniformLoc, [v0, v1, v2]);      // ivec3 or ivec3 array
gl.uniform4i (ivec4UniformLoc, v0, v1, v2, v4);    // ivec4
gl.uniform4iv(ivec4UniformLoc, [v0, v1, v2, v4]);  // ivec4 或 ivec4 array
 
gl.uniform1i (sampler2DUniformLoc,   v);           // sampler2D (textures)
gl.uniform1iv(sampler2DUniformLoc, [v]);           // sampler2D 或 sampler2D array
 
gl.uniform1i (samplerCubeUniformLoc,   v);         // samplerCube (textures)
gl.uniform1iv(samplerCubeUniformLoc, [v]);         // samplerCube 或 samplerCube array
```

还有一些类型 bool, bvec2, bvec3, and bvec4 有相应的方法 gl.uniform?f? 或 gl.uniform?i?。

全局变量数组可以一次设置所有的值，例如：

```js
// shader
uniform vec2 u_someVec2[3];

// JavaScript 初始化时
var someVec2Loc = gl.getUniformLocation(someProgram, "u_someVec2");

// 渲染的时候
gl.uniform2fv(someVec2Loc, [1, 2, 3, 4, 5, 6]);  // 设置数组 u_someVec2
```

如果你想单独设置数组中的某个值，就要单独找到该值的地址。

```js
var someVec2Element0Loc = gl.getUniformLocation(someProgram, "u_someVec2[0]");
var someVec2Element1Loc = gl.getUniformLocation(someProgram, "u_someVec2[1]");
var someVec2Element2Loc = gl.getUniformLocation(someProgram, "u_someVec2[2]");

gl.uniform2fv(someVec2Element1Loc, [3, 4]);  // set element 1
gl.uniform2fv(someVec2Element2Loc, [5, 6]);  // set element 2
```

同样的，如果你创建了一个结构体，就需要找到每个元素的地址：

```js
struct SomeStruct {
  bool active;
  vec2 someVec2;
};
uniform SomeStruct u_someThing;

var someThingActiveLoc = gl.getUniformLocation(someProgram, "u_someThing.active");
var someThingSomeVec2Loc = gl.getUniformLocation(someProgram, "u_someThing.someVec2");
```

注意：如果定义全局量未曾使用，赋值给其它变量，则获取其地址是会失败，因为会被优化掉。


## 👉 Varyings 可变量

以下示范使用 Varyings `可变量`给片段着色器提供颜色数据，可变量需要再通过顶点着色器的属性赋值：

```js
const vsGLSL = `
attribute vec4 position;
attribute vec4 color;

varying vec4 v_color;

void main() {
    gl_Position = position;
    v_color = color;
}
`;

const fsGLSL = `
precision highp float;

varying vec4 v_color;

void main() {
    gl_FragColor = v_color;
}
`;
```

可变量是一种顶点着色器给片断着色器传值的方式，依照渲染的图元是点，线还是三角形，顶点着色器中设置的可变量会在片断着色器运行中获取不同的`插值` interpolated。

之所以叫做可变量是因为它的值有很多个，WebGL 会用顶点着色器中值的进行插值，然后传给对应像素执行的片断着色器。

为了使用可变量，要在两个着色器中定义同名的可变量。 


## 👉 Textures Sample 纹理采样
- https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-image-processing.html
- https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-image-processing-continued.html
- https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html
- https://webglfundamentals.org/webgl/lessons/webgl-pulling-vertices.html
- WebGL纹理详解之一：纹理的基本使用 http://www.jiazhengblog.com/blog/2015/12/10/2772/
- WebGL纹理详解之二：不同纹理源的使用 http://www.jiazhengblog.com/blog/2015/12/17/2856/
- Typed Arrays: Binary Data in the Browser http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
- 计算机图形学七：纹理映射(Texture Mapping)及Mipmap技术 https://zhuanlan.zhihu.com/p/144332091
- 华中科技大学 计算机图形学 万琳教授 https://www.bilibili.com/video/BV1V7411k74z?p=70

在 WebGL 中绘制图片需要使用纹理，和 WebGL 渲染时需要裁剪空间坐标相似， 渲染纹理时需要纹理坐标，而不是像素坐标。无论纹理是什么尺寸，纹理坐标范围始终是 0.0 到 1.0，通过贴图映射的方式将其适配到模型表面上。列如画一个矩形，其实是两个三角形，所以需要告诉 WebGL 矩形中每个顶点对应的纹理坐标。

需要注意的是，图像文件坐标原点在左下角，设置顶点或纹理坐标时注意匹配，或者使用 API 反转图像的 y 轴。

```js
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) // Flip y axis
```

每一个着色器程序对象可用的纹理数量都是有限制的，当前系统中 `MAX_TEXTURE_IMAGE_UNITS` 指明 16 个纹理单元，如果场景纹理超过这个数量，那就需要使用多个着色程序处理了。 

纹理是一种很好平衡硬件运算能力和渲染质量的技术，通常想要模拟真实的环境就需要对光线进行追踪，模拟真实世界的物质物理性质，表面的粗糙，反光或折射光线的现象，这里涉及大量的运算，需要高级的硬件支持。而纹理贴图很好地用成的纹理图像，或者其它方式生成的纹理帖合到模型表面上，直接展示出相当质量的效果，从而避免了大量的计算过程节省了硬件资源。

但是想要模拟高质量的效果，低分辨率的纹理肯定是不能满足的，所以通常需要一张高动态 HDR 的纹理文件，这意味着要处理大量的数据。而 Mip-mapping 映射方式，可以解决一个性能问题，其核心特征是根据物体的景深方向位置变化应用不同大小的材质贴图，这样不仅可以产生更好的视觉效果，同时也节约了系统资源。

MIP 实际上是三个拉丁词的首字母 multum in parvo，翻译成英文就是 much in little，其意思也就是说可以在一个纹理对象中生成很多不同尺寸的纹理。

还有 Tiling 格子纹理运用方式了是常见的技术，其核心思想是，对于一块较大的纹理，事先切分成若干较小的纹理，每小块称为一个格子 tile，每个纹理格子独立加载和使用。这样的好处是每个纹理可以单独请求和使用，不必等待一张大纹理加载完成才能展现。

还可以判断物体的某个部分是否可见，不可见的部分所对应的纹理就没有必要加载。传统的 Web 地图就是基于 Tiling 思想实现的，程序根据窗口内视野所在的范围，加载对应的地图图块，视野外的部分则不需要加载。

以上是纹理贴图的基本使用方式，实际中，纹理贴图的方式还可以用在影响光线的模型表面处理上，例如`凹凸贴图` Bump Mapping 和`转换贴图` Displacement Mapping，还有直接影响光线传播的`法线贴图` Normal Mapping 等等。

法线贴图是很有趣的技术，渲染的时候根据每个像素的法线确定他们的阴暗程度，那么模型的一个面就可以拥有大量的光影细节，同时又不必增加模型的面数降低了模型的复杂度。实现同样的光影效果的前提下，使用法线贴图比增加模型面数更有效地利用 CPU 的计算能力，法线贴图的做法就是利用存储硬件的单位价格优势来替代 CPU 算力。因为计算光线的公式保持一致，面数有不需要增加，只是需要读取存储在法线贴图像素的矢量值。

在三维控间的法线是矢量，而法线贴图中的像素的 RGB 三个分量可以当成一个 XYZ 向量储存，RGB 分量的范围 0 - 255 对应法向量分量 -1 - 1。在 3D 世界空间 World Space，每个面的朝向不同，法线指向也不同，一个可行方案是为每个表面制作一个单独的法线贴图，那么一个立方体就需要 6 个法线贴图。但是如果模型上有无数的朝向不同方向的表面，同时模型对象只有位置变换，那么各个面的法向就会改变，原来的法线贴图就不能用了，这个方法显然不行，贴图的数量会把磁盘空间吃掉。

实际上对于复杂模型可以把朝向各个方向的法线储存在同一张贴图上，你可能看到过不只是蓝色的法线贴图，不过用那样的法线贴图有个问题是你必须记住模型的起始朝向，如果模型运动了还要记录模型的变换，这是非常不方便的；

另一个解决方案是使用切线空间 Tangent Space，这个坐标空间里，法线贴图中保存的向量总是指向 +Z 方向，所有的法线向量都相对与这个 +Z 方向进行变换，这样我们就能始终使用同样的法线贴图，不管朝向问题。

这种法线贴图产生的色调是偏蓝色的，因为所有法线的指向都偏向 Z 轴（0, 0, 1），也就是 RGB 像素的蓝色分量为主色调。法线向量从 Z 轴向其他方向轻微偏移，就控制模型表面法线的偏移。算法上使用一个特定的矩阵就能将切线空间中的法线向量转成世界或视图坐标，使它们转向到最终的贴图表面的方向。

切线空间的一大好处是我们可以为任何类型的表面计算出一个这样的矩阵，由此我们可以把切线空间的 z 方向和表面的法线方向对齐。这种矩阵叫做 TBN 矩阵，代表 Tangent 切线、 Bitangent 副切线和法向量 Normal，这是建构这个矩阵所需的向量。


通常，加载文件需要外部的图像文件，在运行时需要配置 Web 服务器运行，或者设置浏览器的本地安全策略：

    chrome.exe --args --disable-web-security  --user-data-dir

如果安装了 Node.js，可以直接安装使用 live-server 作为 Web 服务器运行：

    npm install -g live-server
    live-server
    live-server /root/dir


片断着色器中的纹理类型 2D 和 3D 两种类，可以在着色器中使用 `sampler2D` 和 `samplerCube` 进行定义，参考全局变量的获取设置。

```js
gl.uniform1i (sampler2DUniformLoc,   v);           // sampler2D (textures)
gl.uniform1iv(sampler2DUniformLoc, [v]);           // sampler2D 或 sampler2D array
 
gl.uniform1i (samplerCubeUniformLoc,   v);         // samplerCube (textures)
gl.uniform1iv(samplerCubeUniformLoc, [v]);         // samplerCube 或 samplerCube array
```

在片断着色器中获取纹理信息，可以先创建一个 `sampler2D` 类型全局变量，然后用 GLSL 方法 `texture2D()` 从纹理中提取信息。

```GLSL
precision mediump float;
 
uniform sampler2D u_texture;
 
void main() {
   vec2 texcoord = vec2(0.5, 0.5)  // 获取纹理中心的值
   gl_FragColor = texture2D(u_texture, texcoord);
}
```

同样，纹理数据也可以通过 `varying` 的方式由顶点着色器传递数据到片段着色器。它叫做可变量是因为它的值有很多个，WebGL 会用顶点着色器中值的进行插值，然后传给对应像素执行的片断着色器。

从纹理中获取的数据取决于很多设置，至少要申请创建纹理、并给纹理填充数据，例如：

```js
const checkerTexture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, checkerTexture);
gl.texImage2D(
    gl.TEXTURE_2D,
    0,                // mip level
    gl.LUMINANCE,     // internal format
    4,                // width
    4,                // height
    0,                // border
    gl.LUMINANCE,     // format
    gl.UNSIGNED_BYTE, // type
    new Uint8Array([  // data
      192, 128, 192, 128,
      128, 192, 128, 192,
      192, 128, 192, 128,
      128, 192, 128, 192,
    ]));
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

执行 `createTexture()` 申请创建一个纹理，对应的是 OpenGL ES `glGenTextures()` 函数。使用这个函数时需要小心，这个函数只能放在循环外面使用，循环中重复申请纹理将会耗光资源。并且，在不需要时执行 `deleteTexture(Object texture)` 删除纹理对象。

当纹理坐标设置超过 1.0 时，纹理就不能完整填满模型表面，模型还有多余空间。那么可以设置纹理的填充方式来决定纹理连接边界的处理，`TEXTURE_WRAP_S` 水平填充方式和 `TEXTURE_WRAP_T` 垂直填充方式选项设置，选项如下：

- `gl.REPEAT` 默认值，纹理重复填充。
- `gl.CLAMP_TO_EDGE` 纹理边缘像素填充。
- `gl.MIRRORED_REPEAT` 纹理镜像重复填充。

上面的示范中，直接使用 Uint8Array 来填充棋盘纹理，从规范上看，`texSubImage` 方法允许以下几种纹理源：

- HTMLImageElement
- HTMLVideoElement
- HTMLCanvasElement
- ImageData

列如使用图像文件加载纹理：

```js
var image = new Image();
image.src = url;

// Upload the image into the texture.
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

在初始化时找到全局变量的地址，并在将纹理必须绑定到一个纹理单元上，WebGL 要求渲染时绑定单元：

```js
var someSamplerLoc = gl.getUniformLocation(someProgram, "u_texture");
var unit = 5;  // 挑选一个纹理单元
gl.activeTexture(gl.TEXTURE0 + unit);
gl.bindTexture(gl.TEXTURE_2D, checkerTexture);
gl.uniform1i(someSamplerLoc, unit);
```

然后告诉着色器你要使用的纹理在那个纹理单元，内置的纹理单元编号预定义了 32 个，从 TEXTURE0 到 TEXTURE31。全局变量默认为 0 所以 u_image 默认使用纹理单元 0 。 纹理单元 0 默认为当前活跃纹理，所以调用 bindTexture 会将纹理绑定到单元 0 。

纹理核心方法 `texImage2D()` 是重载函数，简单的原型如下：

    void texImage2D(GLenum target, GLint level, GLenum internalformat,
                    GLenum format, GLenum type, TexImageSource? source);

- `target` 参数与 bindTexture 一样用来指定目标纹理，gl.TEXTURE_2D 表示一个二维纹理。
- `level` 参数指定 mipmap 等级，值越大越模糊，需要 WebGL 2/OpenGL ES 3 支持。
- `internalformat` `format` 描述纹理格式和纹理所用原始像素的格式，这两个值必须相等，gl.RGBA 表示纹理中有红、绿、蓝和透明度四个通道的信息。
- `type` 纹理数据的类型，gl.UNSIGNED_BYTE 表示对于 RGBA 来说，每个通道都用 8bit 来表示，即 32bit 描述一个像素。

WebGL 支持如下纹理格式：

- `gl.ALPHA` 只读取 Alpha 通道。
- `gl.RGB` 读取 RGB 三个通道
- `gl.RGBA` 读取 RGBA 四个通道。
- `gl.LUMINANCE` 把每个通道视为亮度，alpha 取 1.0。
- `gl.LUMINANCE_ALPHA` 每个通道视为 luminance/alpha。

WebGL 支持如下类型：

- `gl.UNSIGNED_BYTE` 每个通道使用 8 比特。
- `gl.UNSIGNED_SHORT_5_6_5` RGBA 每个通道对应 5-6-5 比特。
- `gl.UNSIGNED_SHORT_4_4_4_4` RGBA 每个通道使用 4 比特。
- `gl.UNSIGNED_SHORT_5_5_5_1` RGBA 每个通道对应 5-5-5-1 比特。

Mip-mapping 会自动生成若干小尺寸的纹理，根据当前三维物体在屏幕上的大小来自动选择最合适的尺寸，求纹理的长度和宽度必须是 2 的整数次幂。比如，纹理尺寸为 64x64，自动生成的 Mip 纹理尺寸为 32x32、16x16、8x8、4x4、2x2、1x1。

前面说到的 `level` 参数用来指定 mipmap 的等级，0 表示原始级别，1 表示缩小一半的级别、2 表示再缩小一半的级别。

如果没有使用 mipmap 技术，只有第 0 层的纹理会被加载。在默认情况下，使用 mipmap 所有层级都会被加载。通过纹理参数可以控制要加载的层级范围。

例如要加载 0 到 4 层级的纹理：

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_BASE_LEVEL, 0);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAX_LEVEL, 4);

除此之外，我们还可通过 GL_TEXTURE_MIN_LOD 和 GL_TEXTURE_MAX_LOD 来限制纹理的使用范围，最底层和最高层。

代码调用方式为：

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
gl.generateMipmap(gl.TEXTURE_2D);
```
事实上，所有纹理都需要按这种尺寸要求制作，否则 WebGL 并不能处理不规则的纹理，如果你发现程序不能正确渲染纹理，那就要检查一下图片来源。

通过 `gl.MAX_TEXTURE_SIZE` 常量可以拿到当前浏览器支持的最大纹理尺寸，比如 16384，即 2^14 次方 16K 分辨率。但是，并不代表你可以直接使用 16K 这么大的纹理，WebGL 文档里并没有明确说明这个值的含义，OpenGL 相关文档，只说这个值至少为 64。


使用纹理还有一些重要的参数，例如纹理滤镜 Texture Filter，这个参数用来处理当对象出现缩放时，纹理如何处理中间点或被压缩的点。

一个经典问题是抗锯齿走样，滤波器就是用来实现纹理反走样的技术。

如果需要使用 MipMap 那么指定纹理放大、缩小时需要采取的采样方式也为 mip-mapping，比如：

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST_MIPMAP_LINEAR);

上面两个纹理参数表示纹理与模型大小不一致时进行的操作，MAG 表示纹理需要放大处理，MIN 表示需要缩小处理，与 mipmapping 相关的参数有四个，分别是：

- `NEAREST_MIPMAP_NEAREST` NEAREST + NEAREST 采样算法。
- `LINEAR_MIPMAP_NEAREST` LINEAR + NEAREST 采样算法。
- `NEAREST_MIPMAP_LINEAR` NEAREST + LINEAR 采样算法。
- `LINEAR_MIPMAP_LINEAR` LINEAR + LINEAR 采样算法，这种模式也被称为三线性过滤 Trilinear Filtering，运算量大效果也最好。

使用 `NEAREST` 算法只会从纹理中采样一个最近点，而 `LINEAR` 也只是从纹理中取了周边最近的四个点计算了一下而已。

在 XXX_MIPMAP_XXX 的格式中包含两个采样方式，前一个 XXX 表示在单个 MIPMAP 采样算法，与单独的 LINEAR 或 NEAREST 类似。而后一个 XXX 表示，随着采样密度连续变化，通常是因为缩放因子连续变化时，是否在多层 MIPMAP 之间内插。使用 MIPMAP 时，后一个 LINEAR 比较重要，只要后者是 LINEAR，前者的意义其实并不特别大，所以默认选项 NEAREST_MIPMAP_LINEAR 也是最常用的。

所谓 3 线性插值，以 D 代表当前适配的层级，就是在向下 D level 上进行一次双线性插值，再在 D+1 level 之上进行一次双线性插值，再根据二者数据实际的连续 D 值在向下和向上取整的两个不同 level 之间的比例，再来一次线性插值，而这整体就是一个三线性插值了。

另外，使用 Mip-mapping 会导致驱动程序在绘图之前需要确定纹理，必须检查每一个 mip 贴图级别或者子图像的格式是否相符、每一个级别的大小是否正确以及是否有足够的内存。

因检查而导致的性能开销可能代价很高，而使用不可变纹理可以避免这种情形。不可变纹理指的是纹理的一种分配方式，而不是值纹理的内容。

不可变纹理的思路是：在加载纹理数据之前，先指定纹理的格式和大小，显卡驱动程序可以提前进行一致性、内存的检查，一旦指定了纹理的格式和大小之后，纹理的格式和尺寸就不能更改。通过 `gl.texSubImage2D()` 或 3D 方法来加载纹理的数据。

创建不可变纹理，首先通过 `gl.bindTexture()` 方法绑定纹理对象，然后再创建不可变的存储空间：

```GLSL
// -- Allocate storage for the texture
gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGB8, 512, 512);
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGB, gl.UNSIGNED_BYTE, image);
gl.generateMipmap(gl.TEXTURE_2D);
```

参考 OpenGL 手册中的 Textures and Samplers 内容。

有些设备可能无法用 `generateMipmap()` 生成 mipmap。

FireFox WebGL1/2 和 Chrome WebGL2 两种环境的警告信息

    WebGL warning: generateMipmap: Texture at base level is not unsized internal format or is not color-renderable or texture-filterable.

    GL_INVALID_OPERATION: Texture format does not support mipmap generation.

Chrome WebGL1 下使用对应 Extension 则没这个问题。


## 👉 FrameBuffer 帧缓冲与延迟渲染
- https://www.khronos.org/opengles/sdk/docs/man/xhtml/glFramebufferTexture2D.xml
- Polyer FrameBuffer 图片多级处理 https://www.cnblogs.com/zhiyishou/p/4602787.html?utm_source=tuicool

FBO - Frame Buffer Object `缓冲帧对象`是推荐用于渲染数据到纹理对象的扩展，FrameBuffer 应该当作是一个 WebGL 画布容器一样，平时我们使用 gl.drawArrays 或者 gl.drawElements 都是将对象绘制在了默认的画布窗口中，当指定一个 FrameBuffer 为当前窗口时，则用这两个方法去绘制，则会将对象绘制于指定的 FrameBuffer 中。

调用 `gl.bindFramebuffer(null)` 设置是告诉 WebGL 你想在画布上绘制，而不是在帧缓冲上。

帧缓冲区对象保存的是渲染的中间结果，因此分别存在三个关联对象：

- 颜色关联对象（color attachment）
- 深度关联对象（depth attachment）
- 模板关联对象（stencil attachment）

关联对象分为两种：纹理对象和渲染缓冲区对象 renderbuffer object。

一般来说，可以定义一个纹理对象作为缓冲帧的颜色关联对象，定义一个渲染缓冲区对象作为缓冲帧的深度关联对象，来实现离屏绘制。



## 👉 Layout Qualifier 布局限定
- Layout Qualifier (GLSL) https://www.khronos.org/opengl/wiki/Layout_Qualifier_(GLSL)

着色器变量定义可以使用 layout 进行限定，它可以声明变量从何处来，和其它一些用户需要的属性。

语法格式：

    layout(qualifier1​, qualifier2​ = value, ...) variable definition

其中 qualifier​ 是一些有特定含义的标识符号，不论顺序除非有特别说明，有些标识符号可以赋值，如 binding 标识表示绑定的序号。

例如，在顶点着色器中，指定属性的内存地址索引号：

    layout(location = attribute index) in vec3 position;

这种方法可以替代 `glBindAttribLocation()` 方法，并且，在同时使用时，layout 指定值有效。

例如，以下指定一个属性数组的索引为 ：

    layout(location = 2) in vec3 values[4];

四个 vec3 属性的索引号依次为 2, 3, 4, 5。



## 👉 着色器代码处理

编写着色器程序时，可以直接将着色器代码以 JavaScript 的字符串保存：

```js
// Vertex shader program
var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'void main() {\n' +
  '  gl_Position = a_Position;\n' +
  '  gl_PointSize = 10.0;\n' +
  '}\n';

// Fragment shader program
var FSHADER_SOURCE =
  'precision mediump float;\n' +
  'uniform vec4 u_FragColor;\n' +
  'void main() {\n' +
  '  gl_FragColor = u_FragColor;\n' +
  '}\n';
```

新式的 JavaScript 还可以使用反引号的字符串模板：

```js
// Vertex shader program
var VSHADER_SOURCE =`
  attribute vec4 a_Position;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
  }`;

// Fragment shader program
var FSHADER_SOURCE =`
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }`;
```

当然更好的方法是使用专属着色器代码文件 .verx 或者 .frag。

也可以使用独立的脚本块编写，只需将标签设置为非 JavaScript 脚本类型，如 type="shader"，或者像 WebGL 理论基础中的示范一样使用 notjs 也一样：

    <script  id="fragment-shader-2d" type="notjs">
    GLSL...
    </script>

然后通过脚本获取着色器代码：

```js
// Get the strings for our GLSL shaders
var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
```



# 🚩 Babylon.js 3D 脚本库
- Babylon.js https://github.com/BabylonJS/Babylon.js 
- Getting Started https://doc.babylonjs.com/start/chap1/first_scene

Three.js 在使用 JavaScript 语言实现之前，最初是用 ActionScript。相比 Babylon.js 它来得更晚，出生在 2013 年的夏天，由微软心中发布的 Babylon.js 和首次正式支持 WebGL API 的 Internet Explorer 11 同时出现。

Three.js 试图给 WebGL 带来许多的动画方式，而 Babylon.js 采用更有针对性的方法。最初设计作为一个 Silverlight 游戏引擎 Babylon.js 的维护倾向于基于 Web 的游戏开发与碰撞检测和抗锯齿等特性。

Babylon.js 4.0 标志着世界领先的基于 WebGL 的图形引擎之一向前迈出了一大步，从强大的新 Inspector 工具，一流的基于物理的渲染等，Babylon.js 4.0 为网络上的每个人带来强大，美观，简单和开放的 3D。功能较为全面,功能比较丰富、灵活、模型显示不失真。有微软背景，有不少的 demo，有较详细的 API 文档，有供测试的平台，有提供 3dsmax 转换模型的插件，比 three.js 成熟。

当然，随之而来的是巨大的脚本打包，3MB+，未压缩文件 11MB，HTTP 传输使用 ZIP 可以压缩到 700KB。


# 🚩 Three.js 3D 脚本库
- https://threejs.org/docs/index.html#manual/zh/introduction/Installation
- https://github.com/josdirksen/learning-threejs
- https://github.com/mrdoob/three.js
- https://threejsfundamentals.org/

Three.js 是一个轻量 3D 脚本库，默认使用 `WebGL` 渲染，也提供了 `Canvas 2D`, `SVG`, `CSS3D` 渲染示范。

对于有 C++ 和 OpenGL API 开发基础的桌面应用工程师来说，学习 WebGL 只是迁移一个生态系统，切换到了互联网生态圈，图形学本质的东西没有变，WebGL 就是对 OpenGL 的包装。

可以使用 npm 以及现代构建工具来安装 three.js 或者是 CDN 引入来快速上手。对于大多数用户来说，从 npm 安装是最佳选择。

无论你选择哪种方式，请始终保持一致，并注意从相同版本的库中导入所有文件。混合不同来源的文件可能会导致包含重复代码，甚至会以意料之外的方式破坏应用程序，

所有安装 three.js 的方式都依赖于 ES modules，这样能够在最终项目中包含所需库的一小部分。

要安装 three 的 npm 模块，请在你的项目文件夹里打开终端窗口，并运行：

    npm install --save three

包将会被下载并安装。然后你就可以将它导入你的代码了：

```js
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';
const scene = new THREE.Scene();

// 方式 2: 仅导入你所需要的部分
import { Scene } from 'three';
const scene = new Scene();
```

从 CDN 或静态主机安装 three.js 便可以不借助任何构建系统。由于 three.js 依赖于ES module，因此任何引用它的标签必须使用 script type="module"。

<script type="module">
  // 通过访问 https://unpkg.com/three 来查找最新版本。
  // 该URL将会重定向到最新的稳定版本。
  import * as THREE from 'https://unpkg.com/three/build/three.module.js';
  const scene = new THREE.Scene();
</script>

并非所有功能都可以通过 build/three.module.js 模块来直接访问。three.js 中其它较为流行的部分 —— 如控制器（control）、加载器（loader）以及后期处理效果（post-processing effect） —— 必须从 examples/jsm 子目录下导入。


three.js 是一个基于 JavaScript 的库，但是可以在 TypeScript 项目中使用它，该库公开了声明文件 Declaration Files（d.ts 文件）。

TypeScript 编译器需要最少的配置即可发现 three.js 类型。

你将需要设置 moduleResolution （模块解析）为 node 和 target （目标） 为 es6 或更高版本。

```json
// tsconfig.json文件最少配置例子
{
    "compilerOptions": {
        "target": "es6",
        "moduleResolution": "node",
    },
    "include": [ "./src/**/*.ts" ],
}
```

注意：到目前为止，如果不使用这两个选项，则无法使用three.js类型。

注意：某些声明可能不正确或缺失。为声明文件做贡献对社区真的很有帮助，使 Three.js 开发会更好更准确。



# 🚩 WebGL 1.0 API Quick Reference Card 
- WebGL 参考卡 https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf
- The OpenGL® ES Shading Language https://www.khronos.org/files/opengles_shading_language.pdf

WebGL® is a software interface for accessing graphics hardware from within a web browser. Based on OpenGL ES 2.0, WebGL allows a programmer to specify the objects and operations involved in producing high-quality graphical images, specifically color images of 3D objects.

• [n.n.n] refers to sections in the WebGL 1.0 specification, available at www.khronos.org/webgl
• Content marked in purple does not have a corresponding function in OpenGL ES. The OpenGL ES 2.0 specification is available at www.khronos.org/registry/gles

WebGL function calls behave identically to their OpenGL ES counterparts unless otherwise noted.


### 👉 The WebGL Context and getContext() [2.5]

This object manages OpenGL state and renders to a drawing buffer, which must is also be created at the same time of as the context creation.

Create the WebGLRenderingContext object and drawing buffer by calling the `getContext` method of a given HTMLCanvasElement object with the exact string ‘webgl’. The drawing buffer is also created by `getContext`.

For example:

    <!DOCTYPE html>
    <html><body>
    <canvas id=”c”></canvas>
    <script type=”text/javascript”>
        var canvas = document.getElementById(“c”);
        var gl = canvas.getContext(“webgl”);
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    </script>
    </body></html>

### 👉 Interfaces

Interfaces are optional requests and may be ignored by an implementation. See getContextAttributes for actual values.


`WebGLContextAttributes` [5.2]

This interface contains requested drawing surface attributes and is passed as the second parameter to getContext.

Attributes:
- `alpha` Default: true, If true, requests a drawing buffer with an alpha channel for the purposes of performing OpenGL destination alpha operations and compositing with the page.
- `depth` Default: true, If true, requests drawing buffer with a depth buffer of at least 16 bits.
- `stencil` Default: false, If true, requests a stencil buffer of at least 8 bits.
- `antialias` Default: true, If true, requests drawing buffer with antialiasing using its choice of technique (multisample/supersample) and quality.
- `premultipliedAlpha` Default: true, If true, requests drawing buffer which contains colors with premultiplied alpha. (Ignored if Alpha is false.)
- `preserveDrawingBuffer` Default: false, If true, requests that contents of the drawing buffer remain in between frames, at potential performance cost.


`WebGLObject` [5.3]

This is the parent interface for all WebGL resource objects.

Resource interface objects:

- `WebGLBuffer` [5.4] OpenGL Buffer Object.
- `WebGLProgram` [5.6] OpenGL Program Object.
- `WebGLRenderbuffer` [5.7] OpenGL Renderbuffer Object.
- `WebGLShader` [5.8] OpenGL Shader Object.
- `WebGLTexture` [5.9] OpenGL Texture Object.
- `WebGLUniformLocation` [5.10] Location of a uniform variable in a shader program.
- `WebGLActiveInfo` [5.11] Information returned from calls to getActiveAttrib and getActiveUniform. Has the following read-only properties: name, size, type.


`WebGLRenderingContext` [5.13]

This is the prinicpal interface in WebGL. The functions listed on this reference card are available within this interface.

Attributes:
- `canvas` Type: HTMLCanvasElement A reference to the canvas element which created this context.
- `drawingBufferWidth` Type: GLsizei The actual width of the drawing buffer, which may differ from the width attribute of the HTMLCanvasElement if the implementation is unable to satisfy the requested width or height.
- `drawingBufferHeight` Type: GLsizei The actual height of the drawing buffer, which may differ from the height attribute of the HTMLCanvasElement if the implementation is unable to satisfy the requested width or height

### 👉 Per-Fragment Operations [5.13.3]

- void `blendColor`(float red, float green, float blue, float alpha)
- void `blendEquation`(enum mode)
    mode: See modeRGB for blendEquationSeparate
- void `blendEquationSeparate`(enum modeRGB, enum modeAlpha)
    modeRGB, and modeAlpha : FUNC_ADD, FUNC_SUBTRACT, FUNC_REVERSE_SUBTRACT
- void `blendFunc`(enum sfactor, enum dfactor)
    sfactor: Same as for dfactor, plus SRC_ALPHA_SATURATE
    dfactor: ZERO, ONE, [ONE_MINUS_]SRC_COLOR,
    [ONE_MINUS_]DST_COLOR, [ONE_MINUS_]SRC_ALPHA,
    [ONE_MINUS_]DST_ALPHA, [ONE_MINUS_]CONSTANT_COLOR,
    [ONE_MINUS_]CONSTANT_ALPHA
    Note: Src and dst factors may not both reference constant color
- void `blendFuncSeparate`(enum srcRGB, enum dstRGB, enum srcAlpha, enum dstAlpha)
    srcRGB, srcAlpha : See sfactor for blendFunc
    dstRGB, dstAlpha : See dfactor for blendFunc
    Note: Src and dst factors may not both reference constant color
- void `depthFunc`(enum func)
    func: NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, NOTEQUAL
- void `sampleCoverage`(float value, bool invert)
- void `stencilFunc`(enum func, int ref, uint mask)
    func: NEVER, ALWAYS, LESS, LEQUAL, [NOT]EQUAL, GREATER, GEQUAL
- void `stencilFuncSeparate`(enum face, enum func, int ref, uint mask)
    face: FRONT, BACK, FRONT_AND_BACK
    func: NEVER, ALWAYS, LESS, LEQUAL, [NOT]EQUAL, GREATER, GEQUAL
- void `stencilOp`(enum fail, enum zfail, enum zpass)
    fail, zfail, and zpass: KEEP, ZERO, REPLACE, INCR, DECR, INVERT, INCR_WRAP, DECR_WRAP
- void `stencilOpSeparate`(enum face, enum fail, enum zfail, enum zpass)
    face: FRONT, BACK, FRONT_AND_BACK
    fail, zfail, and zpass: See fail, zfail, and zpass for stencilOp

### 👉 Detect and Enable Extensions [5.13.14]

- string[ ] `getSupportedExtensions`()
- object `getExtension`(string name)

### 👉 ArrayBuffer and Typed Arrays [5.12]

Data is transferred to WebGL using ArrayBuffer and views. Buffers represent unstructured binary data, which can be modified using one or more typed array views.

Buffers

- `ArrayBuffer`(ulong byteLength)

    ulong byteLength: read-only , length of view in bytes. Creates a new buffer. To modify the data, create one or more views referencing it.

Views

In the following, ViewType may be Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Float32Array.

- `ViewType`(ulong length)
    Creates a view and a new underlying buffer.
    ulong length: Read-only, number of elements in this view.

- `ViewType`(ViewType other)
    Creates new underlying buffer and copies ‘other’ array.

- `ViewType`(type[] other)
    Creates new underlying buffer and copies ‘other’ array.

- `ViewType`(ArrayBuffer buffer, [optional] ulong byteOffset, [optional] ulong length)
    Create a new view of given buffer, starting at optional byte offset, extending for optional length elements.
    ArrayBuffer buffer: Read-only, buffer backing this view
    ulong byteOffset: Read-only, byte offset of view start in buffer
    ulong length: Read-only, number of elements in this view

Other Properties

- ulong byteLength: Read-only, length of view in bytes.
- const ulong BYTES_PER_ELEMENT: element size in bytes.

Methods

view[i] = get/set element i

- `set`(ViewType other, [optional] ulong offset)
- `set`(type[] other, [optional] ulong offset)
    Replace elements in this view with those from other, starting at optional offset.

- ViewType `subset`(long begin, [optional] long end)
    Return a subset of this view, referencing the same underlying buffer.

### 👉 Whole Framebuffer Operations [5.13.3]

- void `clear`(ulong mask) [5.13.11]
    mask: Bitwise OR of {COLOR, DEPTH, STENCIL}_BUFFER_BIT
- void `clearColor`( float red, float green, float blue, float alpha)
- void `clearDepth`( float depth)
    depth: Clamped to the range 0 to 1.
- void `clearStencil`(int s)
- void `colorMask`(bool red, bool green, bool blue, bool alpha)
- void `depthMask`(bool flag)
- void `stencilMask`(uint mask)
- void `stencilMaskSeparate`(enum face, uint mask)
    face: FRONT, BACK, FRONT_AND_BACK

### 👉 Buffer Objects [5.13.5]

Once bound, buffers may not be rebound with a different Target.

- void `bindBuffer`(enum target, Object buffer)
    target: ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
- void `bufferData`(enum target, long size, enum usage)
    target: ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
    usage: STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW
- void `bufferData`(enum target, Object data, enum usage)
    target and usage: Same as for bufferData above
- void `bufferSubData`(enum target, long offset, Object data)
    target: ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER
    Object createBuffer()
    Note: Corresponding OpenGL ES function is GenBuffers
- void `deleteBuffer`(Object buffer)
    any getBufferParameter(enum target, enum pname)
    target: ARRAY_BUFFER, ELEMENT_ ARRAY_BUFFER
    pname: BUFFER_SIZE, BUFFER_USAGE
    bool isBuffer(Object buffer)

### 👉 View and Clip [5.13.3 - 5.13.4]

The viewport specifies the affine transformation of x and y from normalized device coordinates to window coordinates. Drawing buffer size is determined by the HTMLCanvasElement.

- void `depthRange`(float zNear, float zFar)
    zNear: Clamped to the range 0 to 1 Must be <= zFar
    zFar: Clamped to the range 0 to 1.
- void `scissor`(int x, int y, long width, long height)
- void `viewport`(int x, int y, long width, long height)

### 👉 Rasterization [5.13.3]

- void `cullFace`(enum mode)
    mode: BACK, FRONT_AND_BACK, FRONT
- void `frontFace`(enum mode)
    mode: CCW, CW
- void `lineWidth`(float width)
- void `polygonOffset`(float factor, float units)

### 👉 Detect context lost events [5.13.13]

- bool `isContextLost`()

### 👉 Programs and Shaders [5.13.9]

Rendering with OpenGL ES 2.0 requires the use of shaders. 

Shaders must be loaded with a source string (`shaderSource`), compiled (`compileShader`), and attached to a program (`attachShader`) which must be linked (`linkProgram`) and then used (`useProgram`).

- void `attachShader`(Object program, Object shader)
- void `bindAttribLocation`(Object program, uint index, string name)
- void `compileShader`(Object shader)
- Object `createProgram`()
- Object `createShader`(enum type)
    type: VERTEX_SHADER, FRAGMENT_SHADER
- void `deleteProgram`(Object program)
- void `deleteShader`(Object shader)
- void `detachShader`(Object program, Object shader)
- Object[ ] `getAttachedShaders`(Object program)
- any `getProgramParameter`(Object program, enum pname)
    Note: Corresponding OpenGL ES function is GetProgramiv
    pname: DELETE_STATUS, LINK_STATUS, VALIDATE_STATUS,
    ATTACHED_SHADERS, ACTIVE_{ATTRIBUTES, UNIFORMS}
- string `getProgramInfoLog`(Object program)
- any `getShaderParameter`(Object shader, enum pname)
    Note: Corresponding OpenGL ES function is GetShaderiv
    pname: SHADER_TYPE, DELETE_STATUS, COMPILE_STATUS
- string `getShaderInfoLog`(Object shader)
- string `getShaderSource`(Object shader)
- bool `isProgram`(Object program)
- bool `isShader`(Object shader)
- void `linkProgram`(Object program)
- void `shaderSource`(Object shader, string source)
- void `useProgram`(Object program)
- void `validateProgram`(Object program)

### 👉 Uniforms and Attributes [5.13.10]

Values used by the shaders are passed in as uniform of vertex attributes.

- void `disableVertexAttribArray`(uint index)
    index: [0, MAX_VERTEX_ATTRIBS - 1]
- void `enableVertexAttribArray`(uint index)
    index: [0, MAX_VERTEX_ATTRIBS - 1]
- Object `getActiveAttrib`(Object program, uint index)
- Object `getActiveUniform`(Object program, uint index)
- ulong `getAttribLocation`(Object program, string name)
- any `getUniform`(Object program, uint location)
- uint `getUniformLocation`(Object program, string name)
- any `getVertexAttrib`(uint index, enum pname)
    pname: CURRENT_VERTEX_ATTRIB , VERTEX_ATTRIB_ARRAY_ {BUFFER_BINDING, ENABLED, SIZE, STRIDE, TYPE, NORMALIZED}
- long `getVertexAttribOffset`(uint index, enum pname)
    Note: Corres. OpenGL ES function is GetVertexAttribPointerv
    pname: VERTEX_ATTRIB_ARRAY_POINTER
- void `uniform[1234][fi]`(uint location, ...)
- void `uniform[1234][fi]v`(uint location, Array value)
- void `uniformMatrix[234]fv`(uint location, bool transpose, Array)
    transpose: FALSE
- void `vertexAttrib[1234]f`(uint index, ...)
- void `vertexAttrib[1234]fv`(uint index, Array value)
- void `vertexAttribPointer`(uint index, int size, enum type, bool normalized, long stride, long offset)
    type: BYTE, SHORT, UNSIGNED_{BYTE, SHORT}, FIXED, FLOAT
    index: [0, MAX_VERTEX_ATTRIBS - 1]
    stride: [0, 255]
    offset, stride: must be a multiple of the type size in WebGL

### 👉 Texture Objects [5.13.8]

Texture objects provide storage and state for texturing operations. WebGL adds an error for operations relating to the currently bound texture if no texture is bound.

- void `activeTexture`(enum texture) [5.13.3]
    texture: [TEXTURE0..TEXTUREi] where i = MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1
- void `bindTexture`(enum target, Object texture)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP
- void `copyTexImage2D`(enum target, int level, enum internalformat, int x, int y, long width, long height, int border)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE_{X,Y,Z} TEXTURE_CUBE_MAP_NEGATIVE_{X,Y,Z}
    internalformat: ALPHA, LUMINANCE, LUMINANCE_ALPHA, RGB[A]
- void `copyTexSubImage2D`(enum target, int level, int xoffset, int yoffset, int x, int y, long width, long height)
    target: See target for copyTexImage2D
- Object `createTexture`()
    Note: Corresponding OpenGL ES function is GenTextures
- void `deleteTexture`(Object texture)
- void `generateMipmap`(enum target)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP
- any `getTexParameter`(enum target, enum pname)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP
    pname: TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
- bool `isTexture`(Object texture)
- void `texImage2D`(enum target, int level, enum internalformat, long width, long height, int border, enum format, enum type, Object pixels)
- void `texImage2D`(enum target, int level, enum internalformat, enum format, enum type, Object object)
    Note: The following values apply to all variations of texImage2D.
    target: See target for copyTexImage2D
    internalformat: See internalformat for copyTexImage2D
    format: ALPHA, RGB, RGBA, LUMINANCE, LUMINANCE_ALPHA
    type: UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1
    object: pixels of type ImageData, image of type HTMLImageElement, canvas of type HTMLCanvasElement, video of type HTMLVideoElement
- void `texParameterf`(enum target, enum pname, float param)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP
    pname: TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
- void `texParameteri`(enum target, enum pname, int param)
    target: TEXTURE_2D, TEXTURE_CUBE_MAP
    pname: TEXTURE_WRAP_{S, T}, TEXTURE_{MIN, MAG}_FILTER
- void `texSubImage2D`(enum target, int level, int xoffset, int yoffset, long width, long height, enum format, enum type, Object pixels)
- void `texSubImage2D`(enum target, int level, int xoffset, int yoffset, enum format, enum type, Object object)

Note: Following values apply to all variations of texSubImage2D.

    target: TEXTURE_CUBE_MAP_POSITIVE_{X, Y, Z}, TEXTURE_CUBE_MAP_NEGATIVE_{X, Y, Z}
    format and type: See format and type for texImage2D
    object: Same as for texImage2D

### 👉 Special Functions [5.13.3]

- contextStruct `getContextAttributes`() [5.13.2]
- void `disable`(enum cap)
    cap: BLEND, CULL_FACE, DEPTH_TEST, DITHER,
    POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE,
    SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST
- void `enable`(enum cap)
    cap: See cap for disable
- void `finish`() [5.13.11]
- void `flush`() [5.13.11]
- enum `getError`()
    Returns: OUT_OF_MEMORY, INVALID_{ENUM, OPERATION,
    FRAMEBUFFER_OPERATION, VALUE}, NO_ERROR,
    CONTEXT_LOST_WEBGL
- any `getParameter`(enum pname)
    pname: {ALPHA, RED, GREEN, BLUE, SUBPIXEL}_BITS,
    ACTIVE_TEXTURE, ALIASED_{LINE_WIDTH, POINT_SIZE}_RANGE,
    ARRAY_BUFFER_BINDING, BLEND_DST_{ALPHA, RGB},
    BLEND_EQUATION_{ALPHA, RGB}, BLEND_SRC_{ALPHA, RGB},
    BLEND[_COLOR], COLOR_{CLEAR_VALUE, WRITEMASK},
    [NUM_]COMPRESSED_TEXTURE_FORMATS, CULL_FACE[_MODE],
    CURRENT_PROGRAM, DEPTH_{BITS, CLEAR_VALUE, FUNC,
    RANGE, TEST,WRITEMASK}, ELEMENT_ARRAY_BUFFER_BINDING,
    DITHER, FRAMEBUFFER_BINDING, FRONT_FACE,
    GENERATE_MIPMAP_HINT, LINE_WIDTH,
    MAX_[COMBINED_]TEXTURE_IMAGE_UNITS,
    MAX_{CUBE_MAP_TEXTURE, RENDERBUFFER, TEXTURE}_SIZE,
    MAX_VARYING_VECTORS, MAX_VERTEX_{ATTRIBS,
    TEXTURE_IMAGE_UNITS, UNIFORM_VECTORS},
    MAX_VIEWPORT_DIMS, PACK_ALIGNMENT,
    POLYGON_OFFSET_{FACTOR, FILL, UNITS},
    RENDERBUFFER_BINDING, RENDERER, SAMPLE_BUFFERS,
    SAMPLE_COVERAGE_{INVERT, VALUE}, SAMPLES,
    SCISSOR_{BOX, TEST}, SHADING_LANGUAGE_VERSION,
    STENCIL_{BITS, CLEAR_VALUE, TEST}, STENCIL_[BACK_]{FAIL,
    FUNC, REF,VALUE_MASK, WRITEMASK},
    STENCIL_[BACK_]PASS_DEPTH_{FAIL, PASS},
    TEXTURE_BINDING_{2D, CUBE_MAP}, UNPACK_ALIGNMENT,
    UNPACK_{COLORSPACE_CONVERSION_WEBGL, FLIP_Y_WEBGL,
    PREMULTIPLY_ALPHA_WEBGL} , VENDOR, VERSION, VIEWPORT
- void `hint`(enum target, enum mode)
    target: GENERATE_MIPMAP_HINT
    hint: FASTEST, NICEST, DONT_CARE
- bool `isEnabled`(enum cap)
    cap: cap: See cap for disable
- void `pixelStorei`(enum pname, int param)
    pname: UNPACK_ALIGNMENT, PACK_ALIGNMENT, UNPACK_{FLIP_Y_WEBGL, PREMULTIPLY_ALPHA_WEBGL}, UNPACK_COLORSPACE_CONVERSION_WEBGL

### 👉 Framebuffer Objects [5.13.6]

Framebuffer objects provide an alternative rendering target to the drawing buffer.

- void `bindFramebuffer`(enum target, Object framebuffer)
    target: FRAMEBUFFER
- enum `checkFramebufferStatus`( enum target)
    target: FRAMEBUFFER
    Returns: FRAMEBUFFER_{COMPLETE, UNSUPPORTED}, FRAMEBUFFER_INCOMPLETE_{ATTACHMENT, DIMENSIONS, MISSING_ATTACHMENT}
- Object `createFramebuffer`()
    Note: Corresponding OpenGL ES function is GenFramebuffers
- void `deleteFramebuffer`( Object buffer)
- void `framebufferRenderbuffer`( enum target, enum attachment,
    enum renderbuffertarget, Object renderbuffer)
    target: FRAMEBUFFER
    attachment: COLOR_ATTACHMENT0, {DEPTH, STENCIL}_ATTACHMENT
    renderbuffertarget: RENDERBUFFER
- bool `isFramebuffer`(Object framebuffer)
- void `framebufferTexture2D`( enum target, enum attachment,
    enum textarget, Object texture, int level)
    target and attachment: Same as for framebufferRenderbuffer
    textarget: TEXTURE_2D, TEXTURE_CUBE_MAP_POSITIVE{X, Y, Z}, TEXTURE_CUBE_MAP_NEGATIVE{X, Y, Z},
- any `getFramebufferAttachmentParameter`( enum target,
    enum attachment, enum pname)
    target and attachment: Same as for framebufferRenderbuffer
    pname: FRAMEBUFFER_ATTACHMENT_OBJECT_{TYPE, NAME}, FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL, FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE

### 👉 Writing to the Draw Buffer [5.13.11]

When rendering is directed to drawing buffer, OpenGL ES 2.0 rendering calls cause the drawing buffer to be presented to the HTML page compositor at start of next compositing operation.

- void `drawArrays`(enum mode, int first, long count)
    mode: POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, TRIANGLES
    first: May not be a negative value.
- void `drawElements`(enum mode, long count, enum type, long offset)
    mode: POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, TRIANGLES
    type: UNSIGNED_BYTE, UNSIGNED_SHORT

### 👉 Renderbuffer Objects [5.13.7]

Renderbuffer objects are used to provide storage for the individual buffers used in a framebuffer object.

- void `bindRenderbuffer`(enum target, Object renderbuffer)
    target: RENDERBUFFER
- Object `createRenderbuffer`()
    Note: Corresponding OpenGL ES function is GenRenderbuffers
- void `deleteRenderbuffer`( Object renderbuffer)
- any `getRenderbufferParameter`(enum target, enum pname)
    target: RENDERBUFFER
    pname: RENDERBUFFER_{WIDTH,HEIGHT,INTERNAL_FORMAT},
    RENDEDRBUFFER_{RED,GREEN,BLUE,ALPHA,DEPTH,STENCIL}_SIZE
- bool `isRenderbuffer`( Object renderbuffer)
- void `renderbufferStorage`(enum target, enum internalformat, long width, long height)
    target: RENDERBUFFER
    internalformat: DEPTH_COMPONENT16, RGBA4, RGB5_A1,
    RGB565, STENCIL_INDEX8

### 👉 Read Back Pixels [5.13.12]

Pixels in the current framebuffer can be read back into an ArrayBufferView object.

- void `readPixels`(int x, int y, long width, long height,
    enum format, enum type, Object pixels)
    format: RGBA
    type: UNSIGNED_BYTE


### 👉 OpenGL ES Shading Language

The OpenGL ® ES Shading Language is two closely-related languages which are used to create shaders for the vertex and fragment processors contained in the OpenGL ES processing pipeline.

[n.n.n] refers to sections in the OpenGL ES Shading Language 1.0 specification at www.khronos.org/registry/gles


### 👉 Types [4.1]

A shader can aggregate these using arrays and structures to build more complex types. There are no pointer types.

Basic Types

- `void` no function return value or empty parameter list
- `bool` Boolean
- `int` signed integer
- `float` floating scalar
- `vec2`, `vec3`, `vec4` n-component floating point vector
- `bvec2`, `bvec3`, `bvec4` Boolean vector
- `ivec2`, `ivec3`, `ivec4` signed integer vector
- `mat2`, `mat3`, `mat4` 2x2, 3x3, 4x4 float matrix
- `sampler2D` access a 2D texture
- `samplerCube` access cube mapped texture

Structures and Arrays [4.1.8, 4.1.9]

Structures 

    struct type-name {
        members
    } struct-name[]; // optional variable declaration,
                     // optionally an array

Arrays 

    float foo[3];

* structures and blocks can be arrays
* only 1-dimensional arrays supported
* structure members can be arrays


### 👉 Preprocessor [3.4]

Preprocessor Directives
The number sign (#) can be immediately preceded or followed in its line by spaces or horizontal tabs.

    #       #defines    #undef #if      #ifdef      #ifndef     #else
    #elif   #endif      #error #pragma  #extension  #version    #line

Examples of Preprocessor Directives

• `#version 100` in a shader program specifies that the program is written in GLSL ES version 1.00. It is optional. If used, it must occur before anything else in the program other than whitespace or comments.
• `#extension extension_name: behavior`, where behavior can be `require`, `enable`, `warn`, or `disable`; and where `extension_name` is the extension supported by the compiler.

Predefined Macros

- `__LINE__` Decimal integer constant that is one more than the number of preceding new-lines in the current source string
- `__VERSION__` Decimal integer, e.g.: 100
- `GL_ES` Defined and set to integer 1 if running on an OpenGL-ES Shading Language.
- `GL_FRAGMENT_PRECISION_HIGH` 1 if highp is supported in the fragment language, else undefined [4.5.4]


### 👉 Qualifiers

Storage Qualifiers [4.3]

Variable declarations may be preceded by one storage qualifier.

- `none` (Default) local read/write memory, or input parameter.
- `const` Compile-time constant, or read-only function parameter.
- `attribute` Linkage between a vertex shader and OpenGL ES for per-vertex data.
- `uniform` Value does not change across the primitive being processed, uniforms form the linkage between a shader, OpenGL ES, and the application.
- `varying` Linkage between a vertex shader and fragment shader for interpolated data.


Uniform [4.3.4]

Use to declare global variables whose values are the same across the entire primitive being processed. All uniform variables are read-only. Use uniform qualifiers with any basic data types, to declare a variable whose type is a structure, or an array of any of these. For example:

    uniform vec4 lightPosition;

Varying [4.3.5]

The varying qualifier can be used only with the data types float, vec2, vec3, vec4, mat2, mat3, mat4, or arrays of these.

Structures cannot be varying. Varying variables are required to have global scope. Declaration is as follows:

    varying vec3 normal;

Parameter Qualifiers [4.4]

Input values are copied in at function call time, output values are copied out at function return time.

- `none` (Default) same as `in`.
- `in` For function parameters passed into a function.
- `out` For function parameters passed back out of a function, but not initialized for use when passed in.
- `inout` For function parameters passed both into and out of a function.

Precision and Precision Qualifiers [4.5]

Any floating point, integer, or sampler declaration can have the type preceded by one of these precision qualifiers: 

- `highp` Satisfies minimum requirements for the vertex language. Optional in the fragment language.
- `mediump` Satisfies minimum requirements for the fragment language. Its range and precision is between that provided by lowp and highp.
- `lowp` Range and precision can be less than mediump, but still represents all color values for any color channel.

For example:

    lowp float color;
    varying mediump vec2 Coord;
    lowp ivec2 foo(lowp mat3);
    highp mat4 m;

Ranges & precisions for precision qualifiers (FP=floating point):

    | FP Range | FP Magnitude Range |   FP Precision  | Integer Range |                       |
    |----------|--------------------|-----------------|---------------|-----------------------|
    | highp    | (−2^62 , 2^62^)    | (2^–62^, 2^62^) | Relative 2^   | –16 (−2^16 , 2^16 )   |
    | mediump  | (−2^14 , 2^14 )    | (2^–14 , 2^14 ) | Relative      | 2^–10 (−2^10 , 2^10 ) |
    | lowp     | (−2, 2)            | (2^–8 , 2)      | Absolute      | 2^–8 (−2^8 , 2^8 )    |

A precision statement establishes a default precision qualifier for subsequent int, float, and sampler declarations, e.g.:

    precision highp int;

Invariant Qualifiers Examples [4.6]

- `#pragma STDGL invariant(all)` Force all output variables to be invariant
- `invariant gl_Position;` Qualify a previously declared variable
- `invariant varying mediump vec3 Color;` Qualify as part of a variable declaration

Order of Qualification [4.7]

When multiple qualifications are present, they must follow a strict order. This order is as follows.

    invariant, storage, precision
    storage, parameter, precision


### 👉 Aggregate Operations and Constructors

Matrix Constructor Examples [5.4]

    mat2(float) // init diagonal
    mat2(vec2, vec2); // column-major order
    mat2(float, float, float, float); // column-major order

Structure Constructor Example [5.4.3]

    struct light {float intensity; vec3 pos; };
    light lightVar = light (3.0, vec3(1.0, 2.0, 3.0));

Matrix Components [5.6]

Access components of a matrix with array subscripting syntax.

For example:

    mat4 m; // m represents a matrix
    m[1] = vec4(2.0); // sets second column to all 2.0
    m[0][0] = 1.0; // sets upper left element to 1.0
    m[2][3] = 2.0; // sets 4th element of 3rd column to 2.0

Examples of operations on matrices and vectors:

    m = f * m; // scalar * matrix component-wise
    v = f * v; // scalar * vector component-wise
    v = v * v; // vector * vector component-wise
    m = m +/- m; // matrix component-wise addition/subtraction
    m = m * m; // linear algebraic multiply
    m = v * m; // row vector * matrix linear algebraic multiply
    m = m * v; // matrix * column vector linear algebraic multiply
    f = dot(v, v); // vector dot product
    v = cross(v, v); // vector cross product
    m = matrixCompMult(m, m); // component-wise multiply

Structure Operations [5.7]

Select structure fields using the period (.) operator. Other operators include:

- `.` field selector
- `==` `!=` equality
- `=` assignment

Array Operations [4.1.9]

Array elements are accessed using the array subscript operator “[ ]”. For example:

    diffuseColor += lightIntensity[3] * NdotL;



### 👉 Built-In Inputs, Outputs, and Constants [7]

Shader programs use Special Variables to communicate with fixed-function parts of the pipeline. Output Special Variables may be read back after writing. Input Special Variables are read-only. All Special Variables have global scope.

Vertex Shader Special Variables [7.1]

Outputs:

    | Variable                    | Description                                       | Units or coordinate system |
    | highp vec4 gl_Position;     | transformed vertex position                       | clip coordinates           |
    | mediump float gl_PointSize; | transformed point size (point rasterization only) | pixels                     |

Fragment Shader Special Variables [7.2]

Fragment shaders may write to `gl_FragColor` or to one or more elements of `gl_FragData[]`, but not both.

The size of the `gl_FragData` array is given by the built-in constant `gl_MaxDrawBuffers`.

Inputs:

    | Variable                    | Description                                                 | Units or coordinate system    |
    | mediump vec4 gl_FragCoord;  | fragment position within frame buffer                       | window coordinates            |
    | bool gl_FrontFacing;        | fragment belongs to a front-facing primitive                | Boolean                       |
    | mediump vec2 gl_PointCoord; | fragment position within a point (point rasterization only) | 0.0 to 1.0 for each component |

Outputs:

    | Variable                    | Description                           | Units or coordinate system |
    | mediump vec4 gl_FragColor;  | fragment color                        | RGBA color                 |
    | mediump vec4 gl_FragData[n] | fragment color for color attachment n | RGBA color                 |

Built-In Constants With Minimum Values [7.4]

    | Built-in Constant                                 | Minimum value |
    | const mediump int gl_MaxVertexAttribs             | 8             |
    | const mediump int gl_MaxVertexUniformVectors      | 128           |
    | const mediump int gl_MaxVaryingVectors            | 8             |
    | const mediump int gl_MaxVertexTextureImageUnits   | 0             |
    | const mediump int gl_MaxCombinedTextureImageUnits | 8             |
    | const mediump int gl_MaxTextureImageUnits         | 8             |
    | const mediump int gl_MaxFragmentUniformVectors    | 16            |
    | const mediump int gl_MaxDrawBuffers               | 1             |

Built-In Uniform State [7.5]

Specifies depth range in window coordinates. If an implementation does not support `highp` precision in the fragment language, and state is listed as `highp`, then that state will only be available as `mediump` in the fragment language.

    struct gl_DepthRangeParameters {
        highp float near; // n
        highp float far; // f
        highp float diff; // f - n
    };
    uniform gl_DepthRangeParameters gl_DepthRange;


### 👉 Built-In Functions

Angle & Trigonometry Functions [8.1]
Component-wise operation. Parameters specified as angle are assumed to be in units of radians. T is float, vec2, vec3, vec4.

    | T radians(T degrees) | degrees to radians |
    | T degrees(T radians) | radians to degrees |
    | T sin(T angle)       | sine               |
    | T cos(T angle)       | cosine             |
    | T tan(T angle)       | tangent            |
    | T asin(T x)          | arc sine           |
    | T acos(T x)          | arc cosine         |
    | T atan(T y, T x)     |                    |
    | T atan(T y_over_x)   | arc tangent        |

Exponential Functions [8.2]
Component-wise operation. T is float, vec2, vec3, vec4.

    | T pow(T x, T y)    | x y                 |
    | T exp(T x)         | e x                 |
    | T log(T x)         | ln                  |
    | T exp2(T x)        | 2 x                 |
    | T log2(T x)        | log 2               |
    | T sqrt(T x)        | square root         |
    | T inversesqrt(T x) | inverse square root |

Common Functions [8.3]
Component-wise operation. T is float, vec2, vec3, vec4.

    | T abs(T x)   | absolute value               |
    | T sign(T x)  | returns -1.0, 0.0, or 1.0    |
    | T floor(T x) | nearest integer <= x         |
    | T ceil(T x)  | nearest integer >= x         |
    | T fract(T x) | fractional part x - floor(x) |

    | T mod(T x, T y)     |                           |
    | T mod(T x, float y) | modulus                   |
    | T min(T x, T y)     |                           |
    | T min(T x, float y) | minimum value             |
    | T max(T x, T y)     |                           |
    | T max(T x, float y) | maximum value             |

    | T clamp(T x, T minVal, T maxVal)            |                             |
    | T clamp(T x, float minVal, float maxVal)    | min(max(x, minVal), maxVal) |
    | T mix(T x, T y, T a)                        |                             |
    | T mix(T x, T y, float a)                    | linear blend of x and y     |
    | T step(T edge, T x)                         |                             |
    | T step(float edge, T x)                     | 0.0 if x < edge, else 1.0   |
    | T smoothstep(T edge0, T edge1, T x)         |                             |
    | T smoothstep(float edge0, float edge1, T x) | clip and smooth             |

Geometric Functions [8.4]
These functions operate on vectors as vectors, not component-wise. T is float, vec2, vec3, vec4.

    | float length(T x)               | length of vector                          |
    | float distance(T p0, T p1)      | distance between points                   |
    | float dot(T x, T y)             | dot product                               |
    | vec3 cross(vec3 x, vec3 y)      | cross product                             |
    | T normalize(T x)                | normalize vector to length 1              |
    | T faceforward(T N, T I, T Nref) | returns N if dot(Nref, I) < 0, else -N    |
    | T reflect(T I, T N)             | reflection direction I - 2 * dot(N,I) * N |
    | T refract(T I, T N, float eta)  | refraction vector                         |


Matrix Functions [8.5]
Type mat is any matrix type.

- mat `matrixCompMult`(mat x, mat y) multiply x by y component-wise

Vector Relational Functions [8.6]
Compare x and y component-wise. Sizes of input and return vectors for a particular call must match. Type `bvec` is bvecn; `vec` is vecn; `ivec` is ivecn (where n is 2, 3, or 4). T is the union of `vec` and `ivec`.

- bvec `lessThan`(T x, T y)      x < y
- bvec `lessThanEqual`(T x, T y) x <= y
- bvec `greaterThan`(T x, T y)   x > y
- bvec `greaterThanEqual`(T x, T y) x >= y
- bvec `equal`(T x, T y)        
- bvec `equal`(bvec x, bvec y)      x == y
- bvec `notEqual`(T x, T y)     
- bvec `notEqual`(bvec x, bvec y)   x!= y
- bool `any`(bvec x)         true if any component of x is true
- bool `all`(bvec x)         true if all components of x are true
- bvec `not`(bvec x)         logical complement of x

Texture Lookup Functions [8.7]

Available only in vertex shaders.
- vec4 `texture2DLod`(sampler2D sampler, vec2 coord, float lod)
- vec4 `texture2DProjLod`(sampler2D sampler, vec3 coord, float lod)
- vec4 `texture2DProjLod`(sampler2D sampler, vec4 coord, float lod)
- vec4 `textureCubeLod`(samplerCube sampler, vec3 coord, float lod)

Available only in fragment shaders.
- vec4 `texture2D`(sampler2D sampler, vec2 coord, float bias)
- vec4 `texture2DProj`(sampler2D sampler, vec3 coord, float bias)
- vec4 `texture2DProj`(sampler2D sampler, vec4 coord, float bias)
- vec4 `textureCube`(samplerCube sampler, vec3 coord, float bias)

Available in vertex and fragment shaders.
- vec4 `texture2D`(sampler2D sampler, vec2 coord)
- vec4 `texture2DProj`(sampler2D sampler, vec3 coord)
- vec4 `texture2DProj`(sampler2D sampler, vec4 coord)
- vec4 `textureCube`(samplerCube sampler, vec3 coord)


### 👉 Statements and Structure

Iteration and Jumps [6]

- Function Call
    call by value-return
- Iteration 
    for (;;) { break, continue }
    while ( ) { break, continue }
    do { break, continue } while ( );
- Selection 
    if ( ) { }
    if ( ) { } else { }
- Jump 
    break, continue, return
    discard // Fragment shader only
- Entry 
    void main()


### 👉 Sample Program

A shader pair that applies diffuse and ambient lighting to a textured object.

Vertex Shader

    uniform mat4 mvp_matrix; // model-view-projection matrix
    uniform mat3 normal_matrix; // normal matrix
    uniform vec3 ec_light_dir; // light direction in eye coords
    attribute vec4 a_vertex; // vertex position
    attribute vec3 a_normal; // vertex normal
    attribute vec2 a_texcoord; // texture coordinates
    varying float v_diffuse;
    varying vec2 v_texcoord;

    void main(void)
    {
        // put vertex normal into eye coords
        vec3 ec_normal = normalize(normal_matrix * a_normal);
        // emit diffuse scale factor, texcoord, and position
        v_diffuse = max(dot(ec_light_dir, ec_normal), 0.0);
        v_texcoord = a_texcoord;
        gl_Position = mvp_matrix * a_vertex;
    }

Fragment Shader

    precision mediump float;
    uniform sampler2D t_reflectance;
    uniform vec4 i_ambient;
    varying float v_diffuse;
    varying vec2 v_texcoord;

    void main (void)
    {
        vec4 color = texture2D(t_reflectance, v_texcoord);
        gl_FragColor = color * (vec4(v_diffuse) + i_ambient);
    }
