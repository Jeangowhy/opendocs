
# 🚩 OpenCV 图像处理
- https://docs.opencv.org/master/df/d65/tutorial_table_of_content_introduction.html
- [Computer Vision: Algorithms and Applications](http://szeliski.org/Book/1stEdition.htm)
- [Computer Vision:  Models, Learning, and Inference](http://www.computervisionmodels.com/)
- [Annotated Computer Vision Bibliography: Table of Contents](http://www.visionbib.com/bibliography/contents.html)
- [GPU Gems 1/2/3](https://developer.nvidia.com/gpugems/gpugems)
- [Learning OpenCV 3 examples](https://github.com/oreillymedia/Learning-OpenCV-3_examples)
- [Introduction to OpenCV 3 Programming Source Code](https://github.com/QianMo/OpenCV3-Intro-Book-Src)
- [Multibyte MFC Library for Visual Studio 2013](https://www.microsoft.com/zh-cn/download/details.aspx?id=40770)
- [MFC Desktop Applications](https://docs.microsoft.com/en-us/cpp/mfc/mfc-desktop-applications)
- [MFC Tutorial](https://www.tutorialspoint.com/mfc/index.htm)

图像处理 Image Processing 是用计算机对图像进行分析，以达到所需结果的技术。图像处理技术一般包括图像压缩，增强和复原，匹配、描述和识别。数字图像处理 Digital Image Processing 是通过计算机对图像进行去除噪声、增强、复原、分割、提取特征等处理的方法和技术。

计算机视觉 Computer Vision 是指用摄像机和电脑代替人眼对目标进行识别、跟踪和测量等机器视觉，并进一步做图形处理，使之成为更适合人眼观察或仪器检测图像的一门学科。

开源计算机视觉图形库 OpenCV - Open Source Computer Vision Library 是 Gary Bradski 在 1999 开发的，BSD 3-Clause License 商用免费。经过多年的发展，现在已经到更新到 4.x 版本，全面支持 C++, Python 和 Java，跨平台支持 Linux, MacOS, Windows, iOS, 和 Android。广泛应用于 GUI、图像处理、图像分析、AI - 、视频分析等领域。

OpenCV 以模块化组织：

- Core functionality (core) 紧凑的核心函数定义基本数据结构，包括多维数组矩阵；
- Image Processing (imgproc) 图像处理模块包括线性与非纯属滤镜，几何变换，仿射变换，色彩空间变换等；
- Video Analysis (video) 视频分析模块提供运动评估、背景过滤、物体追踪等；
- Camera Calibration and 3D Reconstruction (calib3d) 相机校正及 3D 识别模块提供多视图几何算法、单或立体镜头校正、姿态判断、立体匹配算法等；
- 2D Features Framework (features2d) 2D 模块特征检测、描述、匹配算法模块，显著特征检测算法、描述算子和算子匹配算法；
- Object Detection (objdetect) 目标检测模块，包括实物检测和一些预定义的物体的检测如人脸、眼睛、杯子、行人、汽车等；
- High-level GUI (highgui) UI 接口模块，为视频捕捉、图像和视频编码等功能提供界面；
- 其它有用的模块，如 FLANN、 Python 绑定模块等等；

OpenVINO is a toolkit consists of multiple libraries:

- *DLDT* (deep learning deployment toolkit) - Model Optimizer and Inference Engine to effectively run deep learning networks among Intel hardware
- *Open Model Zoo* - big repository with ready to use and free public deep learning networks and trained by Intel teams.
- *Training extensions* TensorFlow and PyTorch based frameworks which can help you to train Intel's models on your own data.
- *OpenCV* - computer vision library with traditional algorithms, machine learning and deep learning functionality.
- *GStreamer extensions* - to use DLDT pipelines as GStreamer plugin. Helps to optimize data flow.


OpenCV 2.4 版本开始，提供 JAVA wrpaaer，使用 JAVA 或是 Clojure 可以开发 OpenCV 应用，但并不及 Python 或 C++ 方便。


OpenCV 新版本开始全面使用 C++ API，C 风格的 API 很快将会消失。

API说明

　　命名空间：cv，所有的OpenCV的方法和函数都需要使用这个命名空间。使用 cv:: 符号或者 using namespace cv 。如：

	#include "opencv2/core/core.hpp"
	...
	cv::Mat H = cv::findHomography(points1, points2, CV_RANSAC, 5);
	...

或者这样也行：

	#include "opencv2/core/core.hpp"
	using namespace cv;
	...
	Mat H = findHomography(points1, points2, CV_RANSAC, 5 );
	...

因同名而冲突这种情况下，需要显示地写出命名空间 cv:: 如下：

	Mat a(100, 100, CV_32F);
	randu(a, Scalar::all(1), Scalar::all(std::rand()));
	cv::log(a, a);
	a /= std::log(2.)


使用 MinGW 编译 OpenCV 程序时，可以使用 -I 指定包含头文件的目录，或者将 OpenCV 的头文件目录拷贝到 MinGW Include 目录下：

	-I C:/opencv/build/include

	C:\MinGW\lib\gcc\x86_64-w64-mingw32\8.1.0\include

在 OpenCV 2.3 之前，渲染部分都是由 CPU 来实现的，不论是画线还是把图片显示到屏幕上。引入 OpenGL 是为了借助显卡的力量，显卡比 CPU 更擅长渲染三维物体，同时显卡和 CPU 可以同时干活。比方说，CPU 在获取摄像头画面然后检测人脸时，显卡在渲染三维的人脸网格模型和高精度抗锯齿的二维界面。

另外，随着民用深度传感器的普及，cv::VideoCapture 第一时间增加了对 Kinect、华硕 Xtion、Intel Perceptual Computing SDK 等的支持。传统的视觉计算中，深度图只能当做单通道的灰度图进行处理。想实现隔空的多点触摸是绰绰有余，但是如果想实现三维重建，比如 Kinect Fushion，那么我们必须将算法升级到三维空间。相应的，三维空间的算法也需要三维的 API 进行渲染，也就是 OpenGL。

想开启该功能，需要在配置 CMake 时选上 WITH_OPENGL=ON，然后重新编译完整的 OpenCV 库。我简要介绍下几个组件：

ogl::Buffer 是 OpenGL 中的缓存区，可以用于保存多边形的顶点和颜色等。
ogl::Texture2D 是保存在显卡中的二维贴图，可以认为是得到 GPU 加速的 cv::Mat。
前面这两个类都只是保存数据，要把数据画出来，还要用到 ogl::render 函数。

	void ogl::render(const Texture2D& tex, Rect_<double> wndRect=Rect_<double>(0.0, 0.0, 1.0, 1.0), Rect_<double> texRect=Rect_<double>(0.0, 0.0, 1.0, 1.0))

GPU - Graphics Processing Unit 又称显示核心、视觉处理器、显示芯片，是一种专门在个人电脑、工作站、游戏机和一些移动设备如平板电脑、智能手机上图像运算工作的微处理器。

CPU - Central Processing Unit 中央处理器是一块超大规模的集成电路，是一台计算机的运算核心和控制核心。它的功能主要是解释计算机指令以及处理计算机软件中的数据。

GPGPU - General Purpose GPU 通用计算图形处理器。人们一直在寻找各种加速图像处理的方法，然而受到 CPU 本身在浮点计算能力上的限制，对于那些需要高密度计算的图像处理操作，过去传统的在 CPU 上实现的方法，并没有在处理性能与效率上有很大进步。随着可编程 GPU 在性能上的飞速发展，利用 GPU 加速图像处理的技术逐渐成为研究热点。GPGPU 只是个概念，按照目前的产品功能来说，全部的 AMD 独立显卡和 APU 系列集成显卡都可以算作 GPGPU，它并不限定形式。

比如你说一张显卡+一个 CPU 组合成电脑，它就有可能是用 GPU 同时来充当 GPGPU 的角色，比如最近非常流行的挖矿神器其挖矿原理就是 GPGPU 加速运算完成 CPU 无法完成的分支预期性探测运算。而一张显卡 + 一块专用运算器 GPGPU + 一个 CPU 就更典型了，比如 nvidia 的 tesla 就是这样专用的 GPGPU 产品，但从本质而言他们是没有区别的。


## ⚡ OpenCV Documentation
- [OpenCV Docs](https://docs.opencv.org/master/index.html)
- [OpenCV 2.4 Docs](https://docs.opencv.org/2.4/index.html)
- [GPU Module Introduction](https://docs.opencv.org/2.4/modules/gpu/doc/introduction.html)
- [Books](https://github.com/china-testing/python-api-tesing/blob/master/books.md)

OpenCV 4.3 官方文档目前主要提供 C++、Java、Python 三种语言的文档，OpenCV.js 有些，而且只有 Java 版文档独立，其它两种是混合的，组织结构对新手来有点不够友好，定位资料有一定难度，有必要先介绍一下：

- Main Page 按模块罗列介绍 OpenCV modules，也包含有一些 tutorials 教程，如果要快速定位特定关键字就使用搜索功能；

- Related Pages 这里像是百科参考，里面有各种和图像处理技术相关的资料，如面部识别 Face Detection using Haar Cascades，也有一些 Tutorials 可以参考；

- Modules 所有模块列表，适合深入某模块时使用；

- Namespace 和 Classes 所有命名空间、对象列表，适合已知类名需要查询细节信息时使用；

- Files 相询头文件提供什么类型、函数、枚举等等；

- Examples 提供源代码包里包含的示例，不如直接看源代码包；

- Java documentation 按 Java 命名空间组织罗列，索引是个备用方案，但离线搜索功能并不能总是有效，因为在 search.js 脚本 getURLPrefix 方法中没有进行空值判断，打个补丁就可以；

		function getURLPrefix(ui) {
			...
					$.each(packageSearchIndex, function(index, item) {
						if (ui.item.p == item.l && item.m) {
							urlPrefix = item.m + slash;
						}
					});
					return urlPrefix;
			...
			return urlPrefix;
		}

使用 opencv_python 和面向对象的 C++ 或 Java 方式差别较大，对于同一个 cv2.COLOR_BGR2GRAY 常量，在 Python wrapper for OpenCV 中和其它语言中组织方式完全不同。

```sh
#[opencv-python](https://pypi.org/project/opencv-python)
pip install opencv-python
```

对应 C++ 的枚举量：

	enum ColorConversionCodes {
		COLOR_BGR2BGRA     = 0, //!< add alpha channel to RGB or BGR image
		COLOR_RGB2RGBA     = COLOR_BGR2BGRA,

		COLOR_BGRA2BGR     = 1, //!< remove alpha channel from RGB or BGR image
		COLOR_RGBA2RGB     = COLOR_BGRA2BGR,
		...
		COLOR_BGR2GRAY     = 6, //!< convert between RGB/BGR and grayscale
		COLOR_RGB2GRAY     = 7,
		COLOR_GRAY2BGR     = 8,
		COLOR_GRAY2RGB     = COLOR_GRAY2BGR,
		COLOR_GRAY2BGRA    = 9,
		COLOR_GRAY2RGBA    = COLOR_GRAY2BGRA,
		COLOR_BGRA2GRAY    = 10,
		COLOR_RGBA2GRAY    = 11,

对应 Java 的枚举量：

	public class Imgproc{

		static int  COLOR_BGR2GRAY
		static int  COLOR_BGRA2GRAY  
		static int  COLOR_RGBA2GRAY 
		...

利用 help 函数生成 cv2 的文档，不过并无大作用，仅供参考：

	import os
	import sys
	import cv2
	 
	out = sys.stdout
	sys.stdout = open("help_cv2.md", "w")
	 
	help(cv2)
	 
	sys.stdout.close()
	sys.stdout = out

以图像变换处理的 threshold 方法为例，C++ 和 Python 的使用差异：

	double  cv::threshold (srcArray, dstArray, double thresh, double maxval, int type)

	retval, dst =   cv.threshold(   src, thresh, maxval, type[, dst]    )

又如 C++ 中的 Mat.convertTo 方法，在 Python 并找不相应的实现，只能找到一个 cuda_GpuMat.convertTo 还没有文档，只能在 help() 函数生成的接口参考中找到方法原型：

	class cuda_GpuMat(builtins.object)
	 |  convertTo(...)
	 |      convertTo(rtype[, dst]) -> dst
	 |      convertTo(rtype, stream[, dst]) -> dst
	 |      convertTo(rtype, alpha[, dst[, beta]]) -> dst
	 |      convertTo(rtype, alpha, stream[, dst]) -> dst
	 |      convertTo(rtype, alpha, beta, stream[, dst]) -> dst

从名字还可以看到和 Cuda GPU 相关，它对应的是 C++ 的 cv::cuda::GpuMat 该类型是 GPU 内存容器，Python 接口并没有相应的 cv::Mat 类型。要在 Python 使用 cuda_GpuMat 还需要模块开启 CUDA 编译支持：

	(-216:No CUDA support) The library is compiled without CUDA support


TIPs: Windows 10 支持剪贴板命令方式直接复制 cmd /c "echo off | clip"，使用 Win+V 快捷键可以查看剪贴板。


## ⚡ Hello OpenCV
- https://docs.opencv.org/3.4/db/deb/tutorial_display_image.html

安装 cv2 和 matplotlib 绘图模块：

	pip install opencv_python matplotlib

注意，如果 import cv2 出现 DLL 加载错误就是表明安装的 opencv_python 与运行的 Python 版本不一致。

	ImportError: DLL load failed: 找不到指定的模块。

卸载重新安装正确版本：

	pip uninstall opencv_python

OpenCV 源代码中包含示范数据文件，通过 [cv.samples](modules\core\src\utils\samples.cpp) 命名空间管理：

默认将当前目录、data、samples\data 添加到搜索列表，将脚本放到 sources 或 samples 目录下执行可以通过 *findFile()* 方法定位到资源文件：

```py
import cv2 as cv
import sys

img = cv.imread(cv.samples.findFile("starry_night.jpg"))
if img is None:
    sys.exit("Could not read the image.")
cv.imshow("Display window", img)
k = cv.waitKey(0)
if k == ord("s"):
    cv.imwrite("starry_night.png", img)
```

读取到的图像数据会保存在二维数组（矩阵）中，[cv::Mat](include\opencv2\core\mat.hpp)。

OpenCV + PyPlot 演示简单的灰度化、二值化、高斯模糊、色彩分理处理：

```py
import cv2
import matplotlib.pyplot as plt

lena_BGR = cv2.imread("C:/pictures/x5.jpg")
lena_RGB = cv2.cvtColor(lena_BGR, cv2.COLOR_BGR2RGB)

if img is None:
    sys.exit("Could not read the image.")

# display BGR lena
plt.subplot(131)
plt.imshow(lena_BGR)
plt.axis('off')
plt.title('img_BGR')

# display RGB lena
plt.subplot(132)
plt.imshow(lena_RGB)
plt.axis('off')
plt.title('img_RGB')

# 灰度化 + 高斯模糊
gray = cv2.cvtColor(lena_RGB, cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray, (5,5), 0)

# 亮度 128 阈值处理，返回 tuple(128, img)
temp = cv2.threshold(blurred, 128, 255, cv2.THRESH_BINARY)
lena_thresh = temp[1]


# display lena_thresh image
plt.subplot(133)
plt.imshow(lena_thresh, cmap='gray')
plt.axis('off')
plt.title('img_thresh')

plt.show()
```


OpenCV 示例，恐怖蓝，当包含人像的图片将肤色处理为蓝色后，结果将会呈现恐怖的蓝色场景，以下代码通过 *COLOR_BGR2RGB* 将 R B 分量互换以达到肤色的红变为蓝色：

```py
import cv2
import numpy as np

imageMat = cv2.imread("li.jpg")
lena_RGB = cv2.cvtColor(imageMat, cv2.COLOR_BGR2RGB)

cv2.imshow('Source imread[BGR]', imageMat)
cv2.imshow('Source converto[RGB]', lena_RGB)

b,g,r = cv2.split(imageMat)
imageMat = cv2.merge([r,g,b])

imageMat = np.asarray(imageMat).astype(float)
cv2.imwrite('x5.png',imageMat)
cv2.waitKey(0)
```


cv2.imshow 函数必须有两个形参，第一个显示窗口名称。

一般需要在后面添加一个 cv2.waitKey(0) 等待一个按键事件才进入下一步操作，否则会出现显示图像一闪而过的情况，或是出现图像无响应的情况。

特别需要注意的是，对于不同数据格式的图像，imshow 函数会自动进行不同的归一化操作，自动将每个像素值乘以 255 再进行显示，即将原图像素值的范围由 [0,1] 映射到 [0,255]。

因而注意，神经网络输出图像灰度值是 32 位浮点数，imshow 可以直接显示，而不必多此一举归一化到 [0,255] 再显示。

用 cv2.imread() 读取 RGB 图像，再用其他库方法显示，就很有可能出现显示的图像和原本的图像颜色完全不一致！这是因为 cv2.imread() 函数读取 RGB 图像时，返回的图像格式的通道并不是按 R、G、B 排列的，而是按 B、G、R 顺序排列的！其示例可以参考 matplotlib & visdom 的图片显示问题中给出的例图，这里通过 *split* 和 *merge* 方法将 B、G、R 顺序转换为 R、G、B 顺序。

cv2.imwrite() 函数中的第一个参数是存储图像文件名，后缀格式可以是 .jpg 或者是 .png 等，第二个参数 img 代表待存储的图像数据，可以是 Mat 类型或者 Numpy 的 Ndarray 多维数组，在示例代码中就将其转变成了 Numpy 类型，这是因为方便转换成张量从而在深度学习框架加以运用。

cv2.imwrite() 函数保存图像需要图像的像素灰度值动态范围是 [0,255]，对于神经网络的输出图像，比如说 GAN 的生成图像其灰度值动态范围通常是 [-1,1]，其数据格式为 32 位，对于 cv2.imshow() 函数而言，需要将其动态范围通过 cv2.normalize() 函数转变到 [0,1] 才能正确显示，而 cv2.imshow() 函数会自动处理。对于 cv2.imwrite() 函数而言，则需要把它的动态范围转变到 [0,255] 才能正确保存。

总而言之，对于深度学习的网络生成图像而言，如果想通过 OpenCV 进行图像显示，需要将灰度值动态范围调整到 [0,1]，如果想通过 OpenCV 进行图像保存，则需要将灰度值动态范围调整到 [0,255]。


## ⚡ Trackbar 控件

	#include "core/core.hpp"
	#include "highgui/highgui.hpp"
	#include "imgproc/imgproc.hpp"
	#include <iostream>

	using namespace cv;

	Mat image, image1, image2;

	// warning: ISO C++ forbids converting a string constant to 'char*' [-Wwrite-strings]
	// char* windowName = "string";
	char* mainWindow   = (char*)"Image Fusion";
	char* panelWindow  = (char*)"Controllers";
	char* trackBarName = (char*)"α- Alpha";

	int alpha = 0;
	int gamma = 0;
	int alphaMax = 50;

	void TrackBarFunc(int ,void(*));

	int main(int argc,char *argv[])
	{
	    image1=imread("c:/pictures/x5.jpg");
	    image2=imread("c:/pictures/0025.jpg");

	    if(!image1.data | !image2.data)  
	    {  
	        std::cout<<"打开图片失败，请检查路径！"<<std::endl;
	        return 0;
	    }  
	    // resize(src, dst, Size(), 0.5, 0.5, interpolation);
	    resize(image2, image2, Size(image1.cols,image1.rows));
	    namedWindow(mainWindow, 0);
	    namedWindow(panelWindow,0);
	 
	    // int cv::createTrackbar(const String& trackbarName, const String& winName,
	    //                int* value, int count, TrackbarCallback callback,
	    //                void* userdata)
	    createTrackbar(trackBarName, panelWindow, &alpha, alphaMax, TrackBarFunc);
	    createTrackbar("γ - Gamma", panelWindow, &gamma, 255, TrackBarFunc);
	    TrackBarFunc(0,0); 
	    waitKey();
	    imwrite("c:/download/water.jpg",image);
	    return 0;
	}

	void TrackBarFunc(int ,void(*))  
	{  
	    float rate = (float)alpha/alphaMax;
	    // 融合函数，要求输入的两个图形尺寸相同 
	    // dst =   cv.addWeighted( src1, alpha, src2, beta, gamma[, dst[, dtype]]  )
	    addWeighted(image1, rate, image2, 1-rate, gamma, image);
	    imshow(mainWindow,image);
	}  


# 🚩 OpenCV 人脸识别简介
https://cloud.tencent.com/developer/article/1516262

OpenCV 有三种人脸识别的算法：

- Eigenfaces 是通过 PCA(主成分分析）实现的，它识别人脸数据集的主成分，并计算出待识别图像区域相对于数据集的发散程度(0 ~ 20k)，该值越小，表示差别越小，0值表示完全匹配。低于4k~5k都是相当可靠的识别。
- FisherFaces 是从 PCA发展而来，采用更复杂的计算，容易得到更准确的结果。低于4k~5k都是相当可靠的识别。
- LBPH 将人脸分成小单元，并将其与模型中的对应单元进行比较，对每个区域的匹配值产生一个直方图。它允许待检测人脸区域可以和数据集中图像的形状、大小不同，更方便灵活。参考值低于50则算是好的识别，高于80则认为比较差。

当然，除了这三种预定义的算法外，我们可以自己写深度学习算法或者其他机器学习的分类算法来进行人脸识别，这里不再详述。

不管使用哪种算法都需要有训练集。从视频或者动图创建训练集的效率比较高。我从网上下载了一些明星的动图，然后分解，检测人脸区域，全部存为200X200的灰度图，存入对应的文件夹中，创建训练集。

	from PIL import Image
	import os
	import cv2
	def gifSplit2Array(gif_path):
	    import numpy as np
	    img = Image.open(gif_path)
	    for i in range(img.n_frames):
	        img.seek(i)
	        new = Image.new("RGBA", img.size)              
	        new.paste(img)
	        arr = np.array(new).astype(np.uint8)  # image: img (PIL Image):
	        yield arr[:,:,2::-1] # 逆序（RGB 转BGR), 舍弃alpha通道, 输出数组供openCV使用
	     
	def face_generate(img):
	   
	    gray =cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
	   
	    front_face_cascade = cv2.CascadeClassifier(r'E:\Python36\MyPythonFiles\my OpenCV\face_detection\cascades/haarcascade_frontalface_default.xml')#检测正脸
	    faces0 = front_face_cascade.detectMultiScale(gray, 1.02, 5)
	   
	    #eye_cascade = cv2.CascadeClassifier('./cascades/haarcascade_eye.xml')#检测眼睛
	    eye_cascade = cv2.CascadeClassifier(r'E:\Python36\MyPythonFiles\my OpenCV\face_detection\cascades/haarcascade_eye_tree_eyeglasses.xml')#检测眼睛
	    for (x, y, w, h) in faces0:
	        face_area = gray[y: y+h, x: x+w] # （疑似）人脸区域
	        quasi_eyes = eye_cascade.detectMultiScale(face_area, 1.03, 5, 0)#在人脸区域检测眼睛
	        if len(quasi_eyes) ==0: continue
	        quasi_eyes = tuple(filter(lambda x : x[2]/w>0.18 and x[1]<0.5*h, quasi_eyes)) # ex,ey,ew,eh; ew/w>0.18 #尺寸过滤 ，且眼睛在脸的上半部
	        if len(quasi_eyes) <1 : continue
	        yield cv2.resize(face_area, (200,200))
	i = 0
	for gif_path in ("Yangme5.gif","Yangme6.gif","Shishi.gif","Shishi2.gif","Shishi3.gif","Shishi3.gif" ,"Yangzi.gif","Yangzi2.gif","Yangzi3.gif","Zhenshuang.gif","ZDY.gif", "ZDY2.gif"):
	    print(gif_path)
	    for img in gifSplit2Array(gif_path):
	        for face in face_generate(img):
	            cv2.imwrite("./dataset/%s.pgm" % (i), face)
	            print(i)
	            i += 1

	我们可以剔除掉其中一些效果不好的图片。

	接着我们加载数据集，训练模型：

	def load_dataset(datasetPath):
	    names = []
	    X = []
	    y = []
	    ID = 0
	    for name in os.listdir(datasetPath):
	        subpath = os.path.join(datasetPath, name)
	        if os.path.isdir(subpath):
	            names.append(name)
	            for file in os.listdir(subpath):
	                im = cv2.imread(os.path.join(subpath,file), cv2.IMREAD_GRAYSCALE)
	                X.append(np.asarray(im, dtype = np.uint8))
	                y.append(ID)
	            ID += 1
	    X = np.asarray(X)
	    y = np.asarray(y, dtype = np.int32)
	    return X, y, names
	 
	 datasetPath =".\dataset"    
	X, y , names = load_dataset(datasetPath)
	#报错找不到face模块是因为只安装了主模块
	#pip uninstall opencv-python,   pip install opencv0-contrib-python
	#创建人脸识别模型(三种识别模式）
	#model = cv2.face.EigenFaceRecognizer_create() #createEigenFaceRecognizer()函数已被舍弃
	#model = cv2.face.FisherFaceRecognizer_create()
	model = cv2.face.LBPHFaceRecognizer_create() #
	model.train(X, y)
	最后我们将待预测的图像中的人脸区域与训练集中的图像进行比对预测：

	def recognize(img):
	    global model, names
	    gray =cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
	    front_face_cascade = cv2.CascadeClassifier(r'E:\Python36\MyPythonFiles\my OpenCV\face_detection\cascades/haarcascade_frontalface_default.xml')#检测正脸
	    faces0 = front_face_cascade.detectMultiScale(gray, 1.025, 5)
	    eye_cascade = cv2.CascadeClassifier(r'E:\Python36\MyPythonFiles\my OpenCV\face_detection\cascades/haarcascade_eye_tree_eyeglasses.xml')#检测眼睛
	    for (x, y, w, h) in faces0:
	        #print(x,y,w,h)
	        face_area = gray[y: y+h, x: x+w] #疑似人脸区域
	        quasi_eyes = eye_cascade.detectMultiScale(face_area, 1.03, 5, 0)#在人脸区域检测眼睛
	        if len(quasi_eyes) ==0: continue
	        quasi_eyes = tuple(filter(lambda x : x[2]/w>0.15, quasi_eyes)) # ex,ey,ew,eh; ew/w>0.18 #尺寸过滤
	        #print(quasi_eyes)
	        if len(quasi_eyes) <1 : continue#if len(quasi_eyes) <2 : continue
	        cv2.rectangle(img, (x,y), (x+w,y+h), (0,0,255), 2) #画红色矩形框标记正脸
	        roi = cv2.resize(face_area, (200,200), interpolation = cv2.INTER_LINEAR) #尺寸缩放到与训练集中图片的尺寸一致
	        cv2.imwrite("e.pgm", roi) #若识别错误,可以添加到正确的数据集,提高后续的识别率
	        ID_predict, confidence = model.predict(roi)#预测！！！
	        name = names[ID_predict]
	        print("name:%s, confidence:%.2f"%(name, confidence))
	        text = name if confidence <70 else "unknow" #10000 for EigenFaces #70 for LBPH
	        cv2.putText(img, text , (x, y-20), cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),2)#绘制绿色文字
	    return img
	    
	imgPath = "AA.jpg"
	img = cv2.imread(imgPath)
	cv2.imshow(imgPath, recognize(img))
	cv2.waitKey()
	cv2.destroyAllWindows()
	下面是一些预测结果的展示：

	单人照：





	伪双人照：


	三人照（杀马特的诗诗......):


	胡歌不在数据集中，所以肯定会识别错误，我们需舍弃置信度过差的结果：


	当然，真实的识别效果没这么理想，识别的准确度主要取决于我们的数据集的优劣。



# 🚩 Facial Recognition 人脸识别
MTCNN算法demo: https://download.csdn.net/download/weixin_42713739/11081627
PFLD人脸算法demo: https://download.csdn.net/download/weixin_42713739/11106807
虹软算法demo：https://download.csdn.net/download/weixin_42713739/11087890
ArcSoftFaceDemo-master https://ai.arcsoft.com.cn/bbs/forum.php?mod=viewthread&tid=1503&extra=page=1
https://ai.arcsoft.com.cn/bbs/forum.php?mod=viewthread&tid=1504&extra=page%3D1

在业务中用到了人脸识别用于会员的管理，经过一系列的尝试选择，最终使用如下方案：
1、ArcSoft识别 （用户本地离线人脸的第一级别刷选）
2、百度ai人脸识别（用于在线识别，由于没有离线包所以与ArcSoft配合使用）
3、客户端使用QT作为开发框架（ArcSoft只有mfc例子，sdk提供的c++库）

在QT中调用ArcSoft过程中发现的问题及注意点：
1、ASVLOFFSCREEN u32PixelArrayFormat只能选择ASVL_PAF_RGB24_B8G8R8，选择其他的不能成功，只能图像数据按这种格式进行组合
2、注意图像格式行4字节对其问题
3、库在调用前需要先初始化

## ⚡ ArcFace 2.0 Demo [Android]

环境要求
    1、运行环境 armeabi-v7a
    2、系统要求 Android 5.0 (API Level 21)及以上
    3、开发环境 Android Studio

下载地址：https://github.com/ArcsoftEscErd/ArcfaceDemo_Android

快速上手

    1、在 src->main 目录下新建文件夹jniLibs->armeabi-v7a，将libarcsoft_face.so和libarcsoft_face_engine.so添加到src->main->jniLibs->armeabi-v7a路径下
    2、在app目录下新建文件夹libs，将 arcsoft_face.jar 放入 app->libs 路径下，并依赖进工程
    3、将官网申请sdk获取到的APP_ID和SDK_KEY填入Common->Constants.java
    4、运行app

问题指南
    1、详细接入指南可见官网：http://ai.arcsoft.com.cn/manual/arcface_android_guideV2.html
    2、常见问题可见SDK中的doc文档ARCSOFT_ARC_FACE_DEVELOPER'S_GUIDE.pdf，或官网帮助与支持


## ⚡ ArcFace 2.0 Demo [C++]

环境配置：
开发环境：Win10 + VS 2013
SDK版本：ArcFace v2.0
OpenCV版本：2.4.9
平台配置: x64、x86下Release、Debug

SDK 下载地址：http://www.arcsoft.com.cn/ai/arcface.html
Demo 下载地址：https://github.com/ArcsoftEscErd/ArcfaceDemo_CPP

配置过程：
1. 安装VS2013环境安装包(vcredist_x86_vs2013.exe)
2. 从官网(http://www.arcsoft.com.cn/ai/arcface.html)申请sdk，下载对应的sdk版本(x86或x64)并解压
3. 下载SDK以及ArcFace C++Demo
4. 头文件配置：inc文件夹内文件放入\ArcFaceDemo\include\inc文件夹内

5. SDK库配置：
      x64版本：
           将libarcsoft_face_engine.lib放至\ArcFaceDemo\lib64\FreeSdk文件夹下，如果没有对应的文件夹，请先创建
      x86版本：
           将libarcsoft_face_engine.lib放至\ArcFaceDemo\lib32\FreeSdk文件夹下，如果没有对应的文件夹，请先创建
6. 在运行代码的时候将对应版本SDK和OpenCV的dll库放至项目根目录下，以免运行时找不到对应的dll库，OpenCV运行库在\ArcFaceDemo\lib32(lib64)\opencv\bin下


7. 将官网申请的APPID及SDKKEY填写至ArcFaceEngine.cpp文件中，注意平台和版本对应

8. 在Debug或者Release中选择配置管理器，选择对应的平台,确定Demo已配置好

9.      Demo使用多字节字符集，如果报MSB8031错误，请下载安装vc_mbcsmfc.exe(https://www.microsoft.com/en-us/download/details.aspx?id=40770)

常见问题：
1. 编译出现下列问题，是因为32位、64位静态库配置出错，请按上述步骤重新配置。

2. 编译通过，运行出现下列问题，是因为放在项目根目录下的32位、64位dll库与项目配置的位数不匹配，请按上述步骤重新配置。




## ⚡ DFT 傅里叶变换
- [离散傅里叶变换 DFT](https://www.jianshu.com/p/1c9ddc9a7b38)

官方示例：discrete_fourier_transform.cpp

DFT - Discrete Fourier Transform 离散傅里叶变换，是傅里叶变换在时域和频域上都呈离散的形式。数学上，DFT 是可以将任意函数分解为任意个正弦函数表达，这些正弦函数有频率上和幅度上高低的差异。DFT 能将信号的时域采样变换为频域采样，可以理解为时域采样的一个剖面。

对图片进行傅里叶变换，其核心函数是 dft()，OpenCV 这个技术手段是将 2D 空间域映射到频率域中去，在图像处理有着举足轻重的地位。

核心： 就是将时域内的信号转移到频域里面，这样时域里的卷积能够转换为频域内的乘积！

在分析图像信号的频率特性时，对于一幅图像，直流分量表示预想的平均灰度。低频分量代表了大面积背景区域和缓慢变化部分，高频部分代表了它的边缘，细节，跳跃部分以及颗粒噪声。

因此，我们能够做对应的锐化和模糊的处理：提出当中的高频分量做傅里叶逆变换得到的就是锐化的结果。提出当中的低频分量做傅里叶逆变换得到的就是模糊的结果。

- dft()
- normalize()

- int `getOptimalDFTSize`(int vecsize)

	该函数是为了获得进行DFT计算的最佳尺寸。因为在进行DFT时，如果需要被计算的数字序列长度vecsize为2的n次幂的话，那么其运行速度是非常快的。如果不是2的n次幂，但能够分解成2,3,5的乘积，则运算速度也非常快。这里的getOptimalDFTSize()函数就是为了获得满足分解成2,3,5的最小整数尺寸。很显然，如果是多维矩阵需要进行DFT，则每一维单独用这个函数获得最佳DFT尺寸。

- void `copyMakeBorder`(InuptArray src, OutputArray dst, int top , int bottom, int left, int right, int borderType, const Scalar& value=Scalar())

	该函数是用来扩展一个图像的边界的，第3～6个参数分别为原始图像的上下左右各扩展的像素点的个数，第7个参数表示边界的类型，如果其为BORDER_CONSTANT，则扩充的边界像素值则用第8个参数来初始化。将src图像扩充边界后的结果保存在dst图像中。

- `merge`() 函数是把多个但通道数组连接成1个多通道数组，而 plit() 函数则相反，把 1 个多通道函数分解成多个但通道函数。

- Void `magnitude`(InputArray x, InputArray y, OutPutArray magnitude)

	该函数是计算输入矩阵x和y对应该的每个像素平方求和后开根号保存在输出矩阵magnitude中。

- `log`(InputArray src, OutputArray dst)是对输入矩阵src中每个像素点求log，保存在输出矩阵dst的相对应的位置上。



## ⚡ Wiener deconvolution

OpenCV 逆卷积示例 deconvolution.py 展示了如何用 DFT 从用户定义的点扩散函数 `PSF` - point spread function 模糊图像中还原信息。示例展示的是从模糊汽车后部影像还原车牌信息。

点扩散函数 PSF 描述了一个成像系统对一个点光源或物体的响应。大多情况下，PSF 可以认为像是一个能够表现未解析物体的图像中的一个扩展区块。函数上讲，PSF是成像系统传递函数的空间域表达。

PSF 是一个重要的概念，傅里叶光学、天文成像、医学影像、电子显微学和其他成像技术比如三维显微成像和荧光显微成像都有其身影。一个点状物体扩散或模糊度 degree 是一个成像系统质量的度量。在非相关成像系统中，如荧光显微、望远镜、显微镜等，成像过程是在能量上是线性的，可以通过线性系统理论来表达。这里指的是，A 和 B 两个物体同时成像的时候，成像结果等同于 A、B 两物体独立成像的结果之和。或者说，A 物体的成像不会受 B 物体成像的影响，反之亦然。这是由`光子的非相交互性` non-interacting property of photons 决定的。

更为复杂物体的图像可以看做是真实物体和 PSF 的卷积。然而，当检测到的光线是相干的 coherent，图像成形在复数域内是线性的。记录一个强度图像可能会产生消除或者非线性效果。

根据光学系统的成像特性，即：

	Image(Object1 + Object2) = Image(Object1) + Image(Object2)

可以通过将物平面场表示为 2D 脉冲函数的加权和，然后将像平面场表示为这些脉冲函数像上的加权和来计算显微镜或望远镜中的对象的图像，这是作用于线性系统的叠加原理。各个物平面脉冲函数的像称为点扩散函数，反映了物平面中的数学光点被展开以在像平面中形成有限区域的情况，在数学和物理学的某些分支中，这些可能被称为格林函数或脉冲响应函数。

要点：

- 使用 getopt 模块读取命令行参数：

		import sys, getopt
		opts, args = getopt.getopt(sys.argv[1:], '', ['circle', 'angle=', 'd=', 'snr='])
		opts = dict(opts)
		try:
			fn = args[0]
		except:
			fn = 'licenseplate_motion.jpg'

- 使用 `print(__doc__)` 打印文件开头的注解文档 `''' DOC ... '''`

- 使用循环、命名窗口运行带滑动条的 GUI 软件界面：

		def main():
			...
			win = 'deconvolution'
			...
			def update(_):
				ang = np.deg2rad( cv.getTrackbarPos('angle', win) )
				d = cv.getTrackbarPos('d', win)
				noise = 10**(-0.1*cv.getTrackbarPos('SNR (db)', win))
				...
				cv.imshow('psf', psf)
				...
				cv.imshow(win, res)

			cv.namedWindow(win)
			cv.namedWindow('psf', 0)
			cv.createTrackbar('angle', win, int(opts.get('--angle', 135)), 180, update)
			cv.createTrackbar('d', win, int(opts.get('--d', 22)), 50, update)
			cv.createTrackbar('SNR (db)', win, int(opts.get('--snr', 25)), 50, update)
			update(None)

			while True:
				ch = cv.waitKey()
				if ch == 27: // ESC
					break
				if ch == ord(' '):
					defocus = not defocus
					update(None)

			print('Done')

		if __name__ == '__main__':
			print(__doc__)
			main()
			cv.destroyAllWindows()

- 定义了三个核心函数

	blur_edge 函数只运行一次将输入图像进行 cv.dft 操作备用，另外两个是 PSF 函数，motion_kernel、defocus_kernel 分别对应径向、圆形轨迹的模糊。

		def blur_edge(img, d=31):
			h, w  = img.shape[:2]
			img_pad = cv.copyMakeBorder(img, d, d, d, d, cv.BORDER_WRAP)
			img_blur = cv.GaussianBlur(img_pad, (2*d+1, 2*d+1), -1)[d:-d,d:-d]
			y, x = np.indices((h, w))
			dist = np.dstack([x, w-x-1, y, h-y-1]).min(-1)
			w = np.minimum(np.float32(dist)/d, 1.0)
			return img*w + img_blur*(1-w)

		def motion_kernel(angle, d, sz=65):
			kern = np.ones((1, d), np.float32)
			c, s = np.cos(angle), np.sin(angle)
			A = np.float32([[c, -s, 0], [s, c, 0]])
			sz2 = sz // 2
			A[:,2] = (sz2, sz2) - np.dot(A[:,:2], ((d-1)*0.5, 0))
			kern = cv.warpAffine(kern, A, (sz, sz), flags=cv.INTER_CUBIC)
			return kern

		def defocus_kernel(d, sz=65):
			kern = np.zeros((sz, sz), np.uint8)
			cv.circle(kern, (sz, sz), d, 255, -1, cv.LINE_AA, shift=1)
			kern = np.float32(kern) / 255.0
			return kern



# 🚩 OpenCV 4.3 编译
- [CMake 构建静态库与动态库](https://www.cnblogs.com/52php/p/5681755.html)
- [Using OpenCV with gcc and CMake](https://docs.opencv.org/2.4/doc/tutorials/introduction/linux_gcc_cmake/linux_gcc_cmake.html)
- [OpenCV MinGW 编译好的库](https://github.com/huihut/OpenCV-MinGW-Build)
- [MinGW-W64 GCC-8.1.0](https://sourceforge.net/projects/mingw-w64/files/mingw-w64/)
- [OpenCV Contrib Modules](https://github.com/opencv/opencv_contrib/releases)
- [OpenCV Contrib 百度云盘下载](https://pan.baidu.com/s/1oksO9ItfKZZlvbT-dxs5Kw#me7e)
- [OpenCV 3rdparty](https://github.com/opencv/opencv_3rdparty/branches/all)
- [OpenCV 3rdparty - Gitee](https://gitee.com/nathanli97/opencv_3rdparty/branches)
- [NVIDIA CUDA Toolkit 11.0 RC](https://developer.nvidia.com/cuda-download)
- [NVIDIA cuDNN](https://developer.nvidia.com/rdp/cudnn-archive)
- [MinGW-64-bit Wiki](https://wiki.qt.io/MinGW-64-bit)
- [Qt for Beginners - Qt Wiki](https://wiki.qt.io/Qt_for_Beginners)

编译 OpenCV 可以选择 MinGW GCC 或 Visual Studio 2019 社区版，除了编译器外还需要下载以下内容：

- CMake 编译工具；
- OpenCV 源代码；
- OpenCV Contrib 模块，如果要使用非核心模块则需要下载；
- OpenCv 3rdparty 第三方模块；

安装使用 Visual Studio 2019 社区版编译 OpenCV，在 CMake GUI 中取消勾选 BUILD_SHARED_LIBS 即可以编译静态库。其它不需要的功能，如 BUILD_JAVA 用不到 Java 可以不选，还有 BUILD_EXAMPLES，BUILD_TESTS，BUILD_PERF_TESTS 等。

	-DBUILD_SHARED_LIBS=NO

如果只是动静态库选项 就很简单加上 动静态库选项就可以了：

	--enable-shared=no --enable-static=yes （静态）
	--enable-shared=yes --enable-static=no （动态）

新版的 OpenCV 将稳定的模块收编，将不不稳定的模块统一放到 opencv_contrib 中，需要这些模块的功能就需要下载它和 OpenCV 一起编译。

解压 opencv_contrib 后，使用 CMake GUI 配置，OPENCV_EXTRA_MODULES_PATH 设置指向解压的 modules 模块目录，它相当于命令行指定：

	cmake -D OPENCV_EXTRA_MODULES_PATH=C:/download/OpenCV/opencv_contrib-4.2.0/modules -D BUILD_opencv_world=OFF C:/OpenCV/build

注意，OpenCV 默认的 CMakeLists.txt 配置是不能直接在 OpenCV 源代码目录编译的，需要设置一个空目录以创建一个编译副本，避免污染源代码文件，在 CMake GUI 相应设置：

- Where is the source code 指定 OpenCV 源代码目录，如 c:/opencv/sources；
- Where to build the binaries 指定一个新目录保存编译副本，如 C:/OpenCV/build；

单击 Configure 按钮生成编译配置，根据当前系统安装好的编译器选择，比如 Visutal Studio 2019 社区版，还有 CodeBlocks 配置好的 MinGW-W64 GCC 编译器，等待初始配置生成。然后根据需要配置模块选项，比如 WITH_CUDA、WITH_OPENGL，在 GUI 中勾选相应的配置项，它们等效 CMake 命令：

	cmake -D WITH_CUDA=ON -D WIDTH_OPENGL=ON C:/OpenCV/build

使用到的第三方依赖模块下载解压到 3rdparty 目录下，文件可能 CMake 在国内下载不了，可以使用 Gitee 替换下载。

配置好模块后，点击 Generate 就可以将待编译的源文件制作一个副本保存到新目录中。然后执行编译，如果配置为 MinGW 可以执行以下命令，开启 8 进程并行编译；

	mingw32-make -j 8
	mingw32-make install

MinGW-w64 版本选择方法：

- 32-bit 系统选择 i686
- 64-bit 系统选择 x86_64
- 线程模型选择 win32 没有 C ++ 11 多线程特性，无法使用 std::mutex 等
- 线程模型选择 posix 支持 C ++ 11 多线程特性，OpenCV 需要使用此线程模式
- 异常处理模型 32-bit 系统推荐 DWARF，即 DW2, dwarf-2，64-bit 系统推荐 SEH 更有效率。SJLJ - SetJump LongJump，前者设还原点，后者跳到还原点，这是一种古老的技术，稳定但性能不佳。SEH - zero overhead exception 是 Borland 公司的专利，微软买了其专利使用权，它利用了 FS 段寄存器，将还原点压入，收到异常时弹出。


选择错误的 MinGW 版本编译 OpenCV 就会触发异常 error: 'mutex' in namespace 'std' does not name a type

在编译过程中出现找不到 vs_version.rc.obj 资源目标文件错误，手动编译再重新执行编译：

	windres.exe modules\core\vs_version.rc -O coff modules/core/CMakeFiles/opencv_core.dir/vs_version.rc.obj


在众多模块中，CUDA 模块应该是应用比较多的，但是官方默认并没有开户此模块。

CUDA - Compute Unified Device Architecture 是显卡厂商 NVIDIA 推出的运算平台，是一种通用并行计算架构，该架构使 GPU 能够解决复杂的计算问题。

NVIDIA 还推出了 cuDNN 用于深度神经网络的 GPU 加速库，它强调性能、易用性和低内存开销。cuDNN 可以集成到更高级别的机器学习框架中，如谷歌的 Tensorflow、还有流行的 caffe。简单的插入式设计可以让开发人员专注于设计和实现神经网络模型，而不是简单调整性能，同时还可以在 GPU 上实现高性能现代并行计算。

CUDA 与 CUDNN 的关系， CUDA 看作是一个工作台，上面配有很多工具，如锤子、螺丝刀等。cuDNN 是基于 CUDA 的深度学习 GPU 加速库，有了它才能在 GPU 上完成深度学习的计算。它就相当于工作的工具，比如它就是个扳手。但是 CUDA 这个工作台买来的时候，并没有送扳手。想要在 CUDA 上运行深度神经网络，就要安装 cuDNN，就像你想要拧个螺帽就要把扳手买回来。这样才能使 GPU 进行深度神经网络的工作，工作速度相较 CPU 快很多。

OpenCV 的 GPU 模块是一组利用 GPU 计算功能的类和函数。 它使用 NVIDIA 公司的 CUDA API 实现，仅支持 NVIDIA GPU。 OpenCV GPU 模块包括工具函数，和高级算法。工具函数函数和低级视觉函数为开发利用 GPU 的快速视觉算法提供了强大的基础，而高级算法包括一些最先进的算法，人脸和人体检测器等。

OpenCV GPU 模块易于使用，不需要任何 CUDA 知识，但是 CUDA 知识对于处理不是一般的算法或实现最高性能算法肯定是有用的。GPU 模块是快速实现 GPU 加速计算机视觉算法的有效工具。但是，如果你的算法涉及许多简单的操作，那么为了获得最佳性能，可能仍需要编写自己的 CUDA 内核以避免对中间结果进行额外的写入和读取操作。

要启用 CUDA 支持，在使用 cmake 编译 OpenCV 时，应加上这个选项：

	WITH_CUDA = ON

如果不启用 CUDA 模块，GPU 模块仍然构建，但在运行时，模块中的所有函数都抛出异常，并带有 CV_GpuNotSupported 错误代码，但 `gpu::getCudaEnabledDeviceCount()` 除外。因此，使用此函数返回支持 CUDA 的 GPU 数量，你可以根据上述函数的返回值选择使用主机端的函数还是 GPU 模块的函数，使用 CPU 完成计算还是使用 GPU 完成计算。

可以根据参数生成指定 GPU 架构的二进制代码 cubin 和 fatbin，和向后兼容的中间代码 PTX。 二进制代码通常意味着为特定的 GPU 架构和生成，因此无法保证与其他GPU架构的兼容性。 PTX 是中间层代码，GPU 载入 PTX 文件之后，再编译成自己的架构编译成相对应的二进制文件。 新架构的 GPU 支持低版本的 PTX 代码，但是一些新的特性不被支持。

在第一次调用 GPU 模块的函数时，将初始化 CUDA 环境，并使用 JIT 编译器将 PTX 代码编译为特定 GPU 的二进制代码。 当目标 GPU 的计算能力 CC - Compute Capability 低于 PTX 代码时，编译会失败。

编译 OpenCV时，可通过指定 CUDA_ARCH_BIN 和 CUDA_ARCH_PTX 两个参数来控制二进制代码的版本和 PTX 代码版本，以下就是启用了 CC 为 2.0、3.0、5.0、5.2 的架构支持： 

	-D CUDA_ARCH_BIN="2.0 3.0 5.0 5.2"
	-D CUDA_ARCH_PTX="2.0 3.0 5.0 5.2"

cmake 编译命令参考，在 Windows 下使用 `^` 替代 `\` 作为换行符号：

	cmake -D CMAKE_BUILD_TYPE=RELEASE \
		-D CMAKE_INSTALL_PREFIX=/usr/local/opencv343-cuda90 \
		-D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib-3.4.3/modules \
		-D WITH_LIBV4L=ON \
		-D WITH_CUDA=ON \
		-D ENABLE_FAST_MATH=ON \
		-D CUDA_FAST_MATH=ON \
		-D WITH_CUBLAS=ON \
		-D WITH_NVCUVID=ON \
		-D CUDA_GENERATION=Auto \
		-D WITH_TBB=ON \
		-D WITH_OPENMP=ON \
		-D WITH_OPENGL=ON \
		-D ENABLE_CXX11=ON \
		-D OPENCV_ENABLE_NONFREE=ON \
		-D ENABLE_PRECOMPILED_HEADERS=OFF

可以在运行时确定 OpenCV GPU 构建的二进制文件或 PTX 代码是否与你的GPU兼容。函数 gpu::DeviceInfo::isCompatible() 返回兼容性。

在当前版本中，每个 OpenCV GPU算法只能使用一个 GPU。因此，要使用多个GPU，必须手动切换 GPU，使用 gpu::setDevice() 函数完成。在为多个 GPU 开发算法时，请注意数据传递开销。对于基础函数和小图像，它可能很重要，这可能消除了具有多个 GPU 的所有优点。但对于高级算法，请考虑使用多 GPU 加速。


# 🚩 Kinect Fusion 3D 重建算法
- [Kinect Fusion 算法浅析：精巧中带坑](https://zhuanlan.zhihu.com/p/24873528)
- [KinectFusion 论文阅读](https://zhuanlan.zhihu.com/p/35894630)
- [KinectFusion 论文精析](https://www.jianshu.com/p/7a447c633ae9)
- [KinectFusion 算法解析](https://www.cnblogs.com/zonghaochen/p/8325905.html)
- [Real-Time Dense 3D Reconstruction from RGBD](http://graphics.cs.cmu.edu/courses/15769/fall2016/lecture/realtime3d)
- [projective/flipped/TSDF 三种 TSDF 函数比较](https://blog.csdn.net/TracelessLe/article/details/59693743)
- [Truncated Signed Distance Function: Experiments on Voxel Size](https://blog.csdn.net/qq_32146369/article/details/106245476)
- [计算机图形学：SSAA/MSAA抗锯齿算法和遮挡剔除Z-Buffer算法](https://zhuanlan.zhihu.com/p/144331249)

KinectFusion: Real-time 3D Reconstruction and Interaction Using a Moving Depth Camera 算法发布于 2011 年，Izadi 团队研发，是一个基于 RGBD 相机适用于任何环境光照的 3D Reconstruction 实时重建追踪算法。

三维重建是指获取真实物体的三维外观形貌，并建立可复用模型的一种技术。是计算机视觉的一个研究点，主要有三方面的用途：

- 相比于二维图像，可以获取更全面的几何信息；
- 在 VR/AR 中，建立真实和虚拟之间的纽带；
- 辅助机器人更好的感知世界。

传统的三维重建方法主要是 SFM - Structure from Motion，通过一系列不同位置采集的图像，离线计算出三维模型。帝国理工和微软研究院在 2011 年提出的 KinectFusion 开启了用 RGBD 相机实时三维重建的序幕。

2010 年美国 E3 游戏展发布 Kinect 时，请来太阳马戏团，打造出了一场极其奢华的新品发布会，微软还为其拿出高达 5 亿美元的市场营销预算，同时邀请了美国脱口秀女王奥普拉-温弗瑞来造势。扔掉手柄通过体感来控制游戏的新鲜玩法加之不计成本的营销之后，Kinect 迎来了属于它的高光时刻：60 天 800 万套销量、销售速度最快消费者设备吉尼斯世界纪录。

异常火爆的市场反馈，也让 Kinect 像一座金矿吸引着来自世界各地的游戏开发者针来为其打造对应的游戏作品，当年我在广州工作的一家某节奏广告公司就大力推行体感试衣项目。Kinect 的大热也让大家似乎已经忘记了任天堂更早之前 2005 年秋季经发布的 Wii Remote。作为一款微软对新技术探索的产品，这样的市场表现已经完成并且超越了微软早先的预期。所以，Kinect 的前半生足够成功。

一款产品走向没落，市场通常占据主导地位，但操盘者也同样是不可忽略的一项关键因素。人机交互的核心是提升效率，从纸带打卡、到键盘、鼠标、触摸屏、语音输入，都符合提升效率，降低人类能耗这个规律。体感交互多数时候与其相违背，往往只能应用于部分运动、娱乐类游戏，其它场景很难提升人机交互效率或者游戏体验,比如需要瞄准的射击类游戏，还是得手柄来完成。

大概也正如此，虽然针对 Kinect 所推出的游戏并不少，但很难跳脱「家庭娱乐」的范畴。而让开发者投入大量资源放弃手柄控制类游戏，转而去做类型受限的体感游戏，显然也并不现实。因此在新鲜感过后，无法带来全新游戏类型的 Kinect，开始被吐槽鸡肋，也逐渐失去了吸引力。糟糕的是，越没有吸引力，就越难吸引开发者在 Kinect 上投入精力，开始陷入恶循环。另外有一点不得不提的是，体感交互意味着你需要设定足够的体验空间，来作为支持。所以如果你没有足够大的客厅，只能重新去规划家具摆放。

从游戏界的角度来看，Kinect 已死，但是其基本原理，利用 Infrared Sensor 红外摄像头来接收景深距离信息，在其它领域继续发光。

KinectFusion 算法主要分为四个模块：

- 深度测量 surface measurement：

	这是一个预处理的过程，根据原始深度数据计算出稠密的顶点图 vertex map 和法向图 normal map 金字塔。

- 更新重建 surface reconstruction update：

	主要是 fuse 当前的传入帧的深度到全局 TSDF volume 中。全局场景融合过程，根据由跟踪 tracking 得到的相机位姿 pose，新测量的 surface measurement 被融合到由 TSDF 表示的全局场景模型中。

- 表面预测 surface prediction：

	利用光线投影 raycasting 将模型投影到估计的 frame 获得预测的 surface。对 TSDF 进行采样，计算出 surface 和 normal。

- 姿势预测 sensor pose estimation：

	通过借助前一帧的表面信息 `{v, n}` 与当前帧的顶点和法线来进行 alignment 的计算，主要是通过使用 point to plane ICP。多尺度的 ICP 算法匹配 measured surface 和 predicted surface。

Kinect 相机的输入是带有噪声和空洞的离散数据，经过更新重建和表面预测处理得到带有法线的表面，最后构造出 3D 模型。

相机的位置姿态是用 ICP - Iterative Closest Point 求解的。ICP 是处理点云的常规手段，通过最小化两块点云的差别，迭代求解出拍摄两块点云的相机之间的相对位置。有不同的方式来描述点云的差别，最常用的是 point-to-point 和 point-to-plane 两种。KinectFusion 选择的是 point-to-plane 的方式，要把点到点的距离向法向量投影。2001 年的一篇论文 Efficient variants of the ICP algorithm 3D Digital Imaging and Modeling 详细比较了 point-to-point 和 point-to-plane 的效果，结论是后者收敛速度快很多，而且更鲁棒。

SDF - Signed Distance Function 函数描述的是点到面的距离，在面上为 0，在面的一边为正，另一边为负。TSDF - Truncated SDF 是只考虑面的邻域内的 SDF 值，邻域的最大值是 max truncation 的话，则实际距离会除以 max truncation 这个值，达到归一化的目的，所以 TSDF 的值在 (-1, +1) 之间。

TSDF 的具体算法利用 GPU 并行处理各个 voxel。首先把每个 voxel 根据计算出的相机位置姿态投影到相机上，如果在相机的视椎内，则会有一个像素点和它对应，Di(p)是这个像素点距离表面的实际测量值，ti−vg 则是 voxel 到相机的距离，两者的差就是 SDF 值。然后用 max truncation 归一化得到当前 TSDF 值。接着，用加权平均的方式更新 TSDF 值。voxel 越正对着相机，越靠近相机，权重越大，用公式表示就是：`W(p)∝cos(θ)/Rk(u)`，u 是 p 的像。

更新完 TSDF 值之后，就可以用 TSDF 来估计 voxel/normal map，这样比直接用 RGBD 相机得到的深度图有更少的噪音，更少的孔洞，RGBD 相机会有一些无效的数据，点云上表现出来的就是黑色的孔洞。估计出的 voxel/normal map 与新一帧的测量值一起可以估算相机的位置姿态。具体的表面估计方法叫 Raycasting。这种方法模拟观测位置有一个相机，从每个像素按内参 K 投射出一条射线，射线穿过一个个 voxel，在射线击中表面时，必然穿过 TSDF 值为一正一负的两个紧邻的 voxel，因为射线和表面的交点的 TSDF 值为 0，表面就夹在这两个 voxel 里面。然后可以利用线性插值，根据两个 voxel 的位置和 TSDF 值求出精确的交点位置。这些交点的集合就呈现出三维模型的表面。



# 🚩 OpenCV TensorFlow 图形识别
[人脸识别](https://blog.csdn.net/qq_36387683/article/details/80511800)
[数字识别树莓派3+python3.5+opencv3.3+tensorflow1.7+keras](https://blog.csdn.net/weixin_40707450/article/details/80290705)
[tensorflow、opencv实现人脸识别](https://blog.csdn.net/qq_42633819/article/details/81191308)
[TensorFlow Windows Wheel](https://github.com/fo40225/tensorflow-windows-wheel/tree/c44a045d57341222e428a57f349a34e3b6716aea)
[TensorFlow PyPl](https://pypi.org/project/tensorflow/#files)
[TensorFlow深度学习框架 - 学习笔记](https://www.cnblogs.com/wj-1314/p/11225768.html)
[Deeplearning](https://www.deeplearning.ai/)
[NVidia GPU](https://developer.nvidia.com/cuda-downloads)
[CPU和GPU的区别、工作原理、及如何tensorflow-GPU安装等操作](http://www.uml.org.cn/embeded/201809034.asp)

要使用 GPU 开发，参考 [TensorFlow Windows Wheel] 中选择正确的版本搭配。查看显卡支持哪个版本的CUDA，控制面板 ->所有控制面板项 ->双击NVIDIA控制面板项。在NVIDIA面板控制里面选择通过预览调整图像设置，选择系统信息的组件里面查看显卡适配的CUDA版本。

CUDA(Compute Unified Device Architecture)，是显卡厂商NVIDIA推出的运算平台。 CUDA是一种由NVIDIA推出的通用并行计算架构，该架构使GPU能够解决复杂的计算问题。

NVIDIA cuDNN是用于深度神经网络的GPU加速库。它强调性能、易用性和低内存开销。NVIDIA cuDNN可以集成到更高级别的机器学习框架中，如谷歌的Tensorflow、加州大学伯克利分校的流行caffe软件。简单的插入式设计可以让开发人员专注于设计和实现神经网络模型，而不是简单调整性能，同时还可以在GPU上实现高性能现代并行计算。下载到压缩文件，解压到CUDA的安装目录中即可。

CUDA看作是一个工作台，上面配有很多工具，如锤子、螺丝刀等。cuDNN是基于CUDA的深度学习GPU加速库，有了它才能在GPU上完成深度学习的计算。它就相当于工作的工具，比如它就是个扳手。但是CUDA这个工作台买来的时候，并没有送扳手。想要在CUDA上运行深度神经网络，就要安装cuDNN，就像你想要拧个螺帽就要把扳手买回来。这样才能使GPU进行深度神经网络的工作，工作速度相较CPU快很多。

- GTX 1050 搭配：
- Python：这里使用的 Python3.6 Anaconda3 5.1 WIN10 X64
- CUDA： cuda_9.0.176_win10 
- CuDNN：cudnn-9.0-windows10-x64-v7.3.1.20 
- VS2015：安装2015版本的更新和C++组件就行。

https://developer.nvidia.com/cuda-90-download-archive
https://developer.nvidia.com/cuda-10.0-download-archive
https://developer.nvidia.com/rdp/cudnn-archive

以下代码可以查询到当前系统使用的是否 GPU 版本：

	from tensorflow.python.client import device_lib
	print(device_lib.list_local_devices())

运行程序时也会提示 GUP 信息，NVidia 声明 GTX 1050 算力为 6.1：

	GeForce GTX 1050 major: 6 minor: 1 memoryClockRate(GHz): 1.493

在Python3.7下安装tensorflow

	pip install opencv_python
	pip install tensorflow-gpu==1.14.0 # 配合 Python 3.7 + CUDA 10.0
	pip install tensorflow-gpu==1.10.0 # 配合 Python 3.6 + CUDA 9.1

	pip install https://download.tensorflow.google.cn/mac/cpu/tensorflow-1.10.0-py3-none-any.whl --upgrade
	pip install https://storage.googleapis.com/tensorflow/windows/cpu/tensorflow-1.12.0-cp36-cp36m-win_amd64.whl --upgrade
	pip install https://mirrors.tuna.tsinghua.edu.cn/tensorflow/windows/gpu/tensorflow_gpu-1.3.0rc0-cp35-cp35m-win_amd64.whl --upgrade
	pip install https://mirrors.tuna.tsinghua.edu.cn/tensorflow/windows/gpu/tensorflow_gpu-1.2.1-cp36-cp36m-win_amd64.whl --upgrade
	pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/gpu/tensorflow_gpu-1.3.0-cp35-cp35m-win_amd64.whl
	pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/gpu/tensorflow_gpu-1.12.0-cp36-cp36m-win_amd64.whl

	https://pypi.tuna.tsinghua.edu.cn/packages/81/d1/9222b9aac2fa27dccaef38917cde84c24888f3cd0dd139c7e12be9f49a7a/tensorflow_gpu-1.14.0-cp37-cp37m-win_amd64.whl

tensorflow-1.10.0 不不能搭配 Python 3.7 使用，会出现 TFE_ContextOptionsSetAsync(arg1, async) 中的 async 变量命和 Python 关键字冲突问题。 官方网站已经有 Python 3.7 版适用的 tensorflow-1.14.0-cp37-cp37m-win_amd64.whl，清华镜像网速度更快。

安装遇到提示 Cannot uninstall 'wrapt'，可以使用命令先行卸载 wrapt：

	> pip install -U --ignore-installed wrapt

遇到 numpy 版本兼容问题会导致导入出现错误，可以安装合适的版本：

	pip install numpy==1.16
	pip install --user --upgrade numpy   # 将numpy更新到最新版本
	pip install -U numpy==1.12.0，       # upgreade 可以降低numpy的版本
	pip install --upgrade --force-reinstall numpy==1.14.5
	pip show numpy # 查看numpy版本


图片文件读取，获取图片的原始数据，再进行解码，主要用到的函数就是 tf.gfile.FastGFile，tf.image.decode_jpeg

	import tensorflow as tf;  
		 
	image_raw_data = tf.io.gfile.GFile('../python/captcha/0022.jpg').read()
	image = tf.image.decode_jpeg(image_raw_data) #图片解码

	print(image.eval(session=tf.Session()))

第二种方式就是把图片看看成一个文件，用队列的方式读取

	import tensorflow as tf;  
	 
	path = '../python/captcha/0022.jpg'
	file_queue = tf.train.string_input_producer([path]) #创建输入队列
	image_reader = tf.WholeFileReader()
	_, image = image_reader.read(file_queue)
	image = tf.image.decode_jpeg(image)
	 
	with tf.Session() as sess:
		coord = tf.train.Coordinator() #协同启动的线程
		threads = tf.train.start_queue_runners(sess=sess, coord=coord) #启动线程运行队列
		print sess.run(image)
		coord.request_stop() #停止所有的线程
		coord.join(threads)



## ⚡ Why TensorFlow?

　　自从12年AlexNet获得ImageNet大赛的冠军后，深度学习开始流行起来，也因为硬件的快速发展GPU并行计算配合易用的API，让深度学习以及神经网络大方光彩。

　　深度学习的框架其实有很多，目前来说最火的还要数PyTorch，TensorFlow以及Keras。其中Pytorch比较适合学术研究，自己搞着玩，如果工业实践就不太适合了。TensorFlow由于时间比较久，学起来比较困难，不过有完整的开发，部署方案，还有大量的GitHub项目可供参考。Keras则是TensorFlow的一个高级API，同类的还有TensorFlow的TFLearn等等。

　　总结来说，如果是学生的话，只是为了论文或者学习，那么推荐Pytorch；如果是公司的开发者，想要在业务员中使用深度学习，推荐直接使用TensorFlow，如果使用最新的1.14，那么官网的示例里面就已经是Keras了；如果是从GitHub上面下载了源码想要学习，那就得去学习对应版本的TensorFlow API了。

　　在总结一下TensorFlow的优点：

易用性：有对应Python的API
可移植性：一套代码就可以适应单个或者多个CPU、GPU、移动设备等
灵活性：可以部署在树莓派、安卓、windows、ios、linux等上
可视化：有tensorboard提供开发的可视化界面，方便跟踪调参
检查点：可以通过检查点记录保存实验数据
自动微积分：自动求解梯度
庞大的社区：一年内拥有10000+的开发者，3000+的项目
大量公司基于TensorFlow开发的项目，包括：Google ，OpenAI，DeepMind，SnapChat，Airbus，eBay等。

　　下面就来学习下TensorFlow的基础知识，TensorFlow不仅提供了基础的语法，还提供了一些简化的API：

TF Learn，tf.contrib.learn，基于scikit-learn风格的API
TF Slim，tf.contrib.slim，轻量级的tf构建API，可以自动配置默认值，简化使用
Keras，更高级更抽象的API，使用Keras之后，就像叠积木一样创建模型，不过对于背后的原理隐藏的太深太深

　　TensorFlow的名字中已经说明了它最重要的两个概念——Tensor和Flow。Tensor就是张量，张量这个概念在数学或者物理学中可以有不同的解释，但是这里我们不强调它本身的含义。在TensorFlow中，张量可以被简单地理解为多维数组，Flow翻译成中文就是“流”，它直观的表述计算的编程系统。TensorFlow中的每一个计算都是计算图上的一个节点，而节点之间的边描述了计算之间的依赖关系。

## ⚡ TensorFlow 计算图的概念

　　计算图是TensorFlow中最基本的一个概念，TensorFlow中所有计算都会被转化为计算图上的一个节点。

　　在TensorFlow程序中，所有的数据都通过张量的形式来表示。从功能的角度上看，张量可以被简单理解为多为数组。其中零阶张量表示标量（scalar），也即是一个数（张量的类型也可以是字符串）。第一阶张量为向量（vector），也就是一个一维数组；第 n 阶张量可以理解为一个 n 维数组。但是张量在TensorFlow中的实现并不是直接采用数组的形式，它只是对TensorFlow中运算结果的引用。在张量中并没有真正保存数字，它保存的是如何得到这些数字的计算过程。以向量加法为例，当运行如下代码的时候，得到的不是加法的结果，而是对结果的一个引用。

	#_*_coding:utf-8_*_
	import tensorflow as tf
	 
	# tf.constant 是一个计算，这个计算的结果为一个张量，保存在变量a中
	a = tf.constant([1.0, 2.0], name='a')
	b = tf.constant([2.0, 3.0], name='b')
	 
	result = a + b
	# print(result)   # Tensor("add:0", shape=(2,), dtype=float32)

　　从上面的结果来看，TensorFlow的张量和Numpy的数组不同，他计算的结果不是一个具体的数字，而是一个张量的结构。从上面结果来看，一个张量主要保存了三个属性，名字（name），维度（shape）和类型（type）。

　　张量的第一个属性名字不仅是一个张量的唯一标识符，它同样也给出了这个张量是如何计算的，TensorFlow的计算都可以通过计算图的模型来建立，而计算图上的每一个节点代表一个计算，计算的结果就保存在张量之中。所以张量和计算图上节点所代表的计算结果是对应的。所以张量的命名就可以通过“node : src_output”的形式来给出。其中node为节点的名称，src_output 表示当前张量来自节点的第几个输出。比如上面的“add:0” 就说明了result这个张量是计算节点“add” 输出的第一个结果（编号从0 开始）。

　　张量的第二个属性是张量的维度。这个属性描述了一个张量的维度信息，比如上面样例中 shape = (2, ) 说明了张量 result 是一个一维数组，这个数组的长度为2。维度是张量一个很重要的属性，围绕张量的维度TensorFlow也给出了很多有用的运算。

　　张量的第三个属性就是类型（type），每一个张量会有一个唯一的类型。TensorFlow 会对参与运算的所有张量进行类型的检查，当发现类型不匹配的时候会报错，比如下面的代码就会得到类型不匹配的错误：

	#_*_coding:utf-8_*_
	import tensorflow as tf
	 
	# tf.constant 是一个计算，这个计算的结果为一个张量，保存在变量a中
	a = tf.constant([1, 2], name='a')
	b = tf.constant([2.0, 3.0], name='b')
	 
	result = a + b

　　这段代码和上面例子基本一模一样，唯一不同就是把其中一个加数的小数点去掉了。这会使得加数 a 的类型为整数而加数 b 的类型为实数，这样程序就会报类型不匹配的错误：

	ValueError: Tensor conversion requested dtype int32 for Tensor with
	dtype float32: 'Tensor("b:0", shape=(2,), dtype=float32)'

　　如果将第一个加数指定成实数类型 ，如下：

	a = tf.constant([1, 2], name='a', dtype=tf.float32)

　　那么两个加数的类型相同，就不会报错了。如果不指定类型，则会默认为 int32，而带小数的则会默认为float32.所以一般建议通过指定dtype来明确指出变量或者常量的类型。

## ⚡ Tensor 张量的使用

　　和TensorFlow的计算模型相比，TensorFlow的数据模型相比较简单。张量使用主要可以总结为两大类。

　　第一类用途是对中间计算结果的引用。当一个计算包含很多中间结果时，使用张量可以大大提高代码的可读性。比如上面的例子。

　　第二类是当计算图构造完成之后，张量可以用来获得计算结果，也就是得到真实的数字，虽然张量本身没有存储具体的数字，但是通过下面的Session就可以得到具体的数字。


## ⚡ TensorFlow Session

　　下面学习如何使用会话（session）来执行定义好的运算，会话拥有并管理TensorFlow程序运行时的所有资源。当所有计算完成之后需要关闭会话来帮助系统回收资源，否则就可能出现资源泄露的问题。TensorFlow中使用会话的模式一般有两种，第一种模式需要明确调用会话生成函数和关闭会话函数，这么模式如下：

	# 创建一个会话
	sess  =  tf.Session()
	# 使用这个创建好的会话来得到关心的运算结果
	# 比如可以调用 sess.run(result) 来得到张量计算的结果
	sess.run(...)
	# 关闭会话使得本次运算中使用到的资源可以被释放
	sess.close()

　　使用这种模式的时候，在所有计算完成之后，需要明确调用Session.close 函数来关闭会话并释放资源。然而，当程序因为异常而退出时，关闭会话的函数可能就不会被执行而导致资源泄露。为了解决异常退出时资源释放的问题，TensorFlow可以通过Python的上下文管理器来使用会话，也就是可以利用 with 代码块生成Session，限制作用域，代码如下：

	# 创建一个会话，并通过python中的上下文管理器来管理这个会话
	with  tf.Session()  as sess:
		# 使用这创建好的会话来计算关心的结果
	　　sess.run(...)
	# 不需要再调用“Session.close()” 函数来关闭会话
	# 当上下文退出时会话关闭和资源释放也自动完成了。

　　通过Python上下文管理器的机制，只要将所有的计算放在'with' 的内部就可以。当上下文管理器退出时候会自动释放所有资源。这样即解决了因为异常退出时资源释放的问题，同时也解决了忘记调用Session.close 函数而产生的资源泄露问题。

　　Session 函数中没有传入参数，表明该代码将会依附于（如果还没有创建会话，则会创建新的会话）默认的本地会话。生成会话之后，所有的 tf.Variable 实例都会通过调用各自初始化操作的 sess.run() 函数进行初始化。

	init = tf.initialize_all_variables()
	sess.run(init)

　　在通过initializer给变量赋值固然可行，但是当变量的数据增多后，或者变量之间存在依赖关系时，单个调用的方案就比较麻烦了。所以使用上述代码更加便捷。

　　sess.run() 方法将会运行图表中与作为参数传入的操作相对应的完整子集。在初始调用时， init操作只包含了变量初始化程序 tf.group。图标的其他部分不会再这里，而是在下面的训练训练运行。

　　在交互式环境中（比如Python脚本或者Jupyter的编译器下），通过设置默认会话的方式来获得张量的取值更加方便。所有TensorFlow提供了一种在交互式环境下直接构建默认会话的函数，这和函数就是tf.InteractiveSession.使用这个函数会自动将生成的会话注册为默认会话。下面代码展示了tf.InteractiveSession 函数的用法：

	sess = tf.InteractiveSession()
	print(result.eval())
	# 其实 sess.run(result) 和 result.eval(session=sess)) 功能相同
	sess.close()

　　通过tf.InteractiveSession 函数可以省去将产生的会话注册为默认会话的过程。

　　变量在被使用前，需要通过会话（session）运行其初始化方法完成初始化赋值。

	sess.run(tf.global_variables_initializer)

　　注意：在新版本的tensorflow中，使用下面代码替换上面代码，不然会报 Warning。

	sess.run(tf.global_variables_initializer)
