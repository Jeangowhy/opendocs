# DICOM Introduction
- [DICOM 3.0 网络通信协议](https://blog.csdn.net/zssureqh/article/details/44278693)
- [NEMA's Official DICOM Web Page](https://www.dicomstandard.org/)
- [DICOM网络协议 - 概述](https://www.jianshu.com/p/8a0f0fe6a739)
- []()
- [PyDicom 图像解析库](https://www.cnblogs.com/XDU-Lakers/p/9863114.html)
- [DICOM - 数字成像与通讯](https://blog.csdn.net/zssureqh/article/details/77131233)
- [医疗业务学习笔记 - DICOM 协议基础](https://zhuanlan.zhihu.com/p/74966427)
- [Introduction to Linear Algebra, 5th Edition](http://math.mit.edu/~gs/linearalgebra/)
- [PACS、HIS、RIS、DICOM](https://www.adsc.com/blog/what-are-the-differences-between-pacs-ris-cis-and-dicom)
- [DICOM Part 07: Message Exchange](http://dicom.nema.org/medical/dicom/current/output/html/part07.html#sect_7.1)
- [DICOM Part 08: Network Communication Support for Message Exchange](http://dicom.nema.org/medical/dicom/current/output/html/part08.html#chapter_7)

DICOM - Digital Imaging and Communications in Medicine 医学数字成像和通信标准，这词汇表明此协议应该分成图像处理和网路通信两大部分，这是放射学 Radiology 的一大基础。

> DICOM® (Digital Imaging and Communications in Medicine) is the international standard to transmit, store, retrieve, print, process, and display medical imaging information.
>
> DICOM®:
> 
> - makes medical imaging information interoperable
> - integrates image-acquisition devices, PACS, workstations, VNAs and printers from different manufacturers
> - is actively developed and maintained to meet the evolving technologies and needs of medical imaging
> - is free to download and use

主流医学图像处理开源库有 DCMTK、mDCM、fo-dicom、dcm4che、dcm4chee、pydicom 等，以及 PACS、HIS、RIS、DICOM-RT 等系统：

- fo-dicom 采用 C#，将主要的逻辑放到了 DicomService 类中，其 DicomAssociation 仅仅起到了记录数据结构的作用。将各种 ASCE 对应的状态，以及 DICOM 的 Command 对应的具体指令的操作分别以接口的形式进行了归类，诸如 IDicomServiceProvider、IDicomServiceUser，然后在 DicomService 中通过异步 I/O 方式解析 DICOM 消息中的指令，调用相应的接口实现；

- dcm4che 采用 Java，将所有上述对应的操作统一放到了 Association 类中，在每个操作中实际上就是直接调用 Association 类的 FSM 状态机对应当前状态的相应操作，对于客户端和服务端、各种不同指令的不同操作是通过基于 enum 实现的 FSM 有限状态机来完成的。


- PACS - Picture Archive and Communication System 图片归档与通信系统存储标准 2D/3D 图片；
- RIS - Radiology Information System 放射信息系统，是医学领域的软件解决方案；
- CIS - Clinical Information System 医疗信息系统，包括 RIS、EMR、EHR 等子系统；
- EMR - Electronic Medical Record 电子医学记录应用；
- EHR - Electronic Health Record 电子健康记录应用；
- CAT - Computer Aided Translation 计算机辅助；


医学常用的四种图像诊断技术 Veterinary Diagnostic Imaging：

- Cat X-ray 射线成像是使用时间最长的医疗成像技术

	- 将 cat 放到 X-ray 案台；
	- 技术条件限制，X-ray 只对感兴趣部位成像；
	- 现代 X-ray 设备放射剂量更少，极少使用它是安全的；
	- X-rays 采集静态图片，时间比 MRI 更快；

- Cat Ultrasound 超声波成像

	- 将探头轻轻按压到肌体；
	- 超声波通过探头发射到探测位置；
	- 通过超声波在不同组织的密度下传播速度差产生回响；
	- 超声波设备将回响转换成电信号脉冲，再转换成代表组织的图像；
	- 与 X 射线成像不同，超声波图像可以实时查看；

- MRI - Nuclear Magnetic Resonance Imaging 核磁共振成像，设备又贵又大

	- 在处理过程保持安静；
	- 将 cat 放到电磁管 tubular electromagnetic chamber；
	- 设备可以探测到脉冲在猫体组织不同的流体状态产生电磁辐射，大量重复这一过程以产生足够的数字反馈；
	- 将反馈信号转换成图像，以显示或作其它用途；

	你可以简单想象成为人体每个组织细胞都是一个小磁针，把人体放到一个巨大的磁场中，小磁针就会被磁化然后改变方向而一致排列，此刻通过技术手段让某一平面的小磁针统一改变一下方向并记录这些改变方向的每个小磁针的位置就可以简单的成像了。

- CT scan 电脑断层扫描 Computerized Tomography 是计算机增强 X-ray 成像技术

	- 在处理过程保持安静；
	- 将猫固定在机动 CT 扫描设备床上，CT 设备在不同角度扫描；
	- 向前移动床位，再次扫描；
	- 计算机将这些扫描转换成交叠截面图像 cross-sectional images；
	- 可以将 X-ray 图像注入以提高识别度；
	- 重复这个扫描过程，可以重建器官结构的三维图像，能敏锐观察到邻近组织的变化；


 常见的简称及其全称如下：

- `ACSE`：Association Control Service Element
- `AE`：Application Entity
- `CMIS`：Common Management Information Service
- `CMISE`：Common Management Information Serivce Element
- `DICOM`：Digital Imaging and Communications in Medicine
- `DIMSE`：DICOM Messsage Service Element
- `DIMSE-C`：DICOM Message Service Element-Composite
- `DIMSE-N`：DICOM Message Service Element-Normalized
- `HL7`：Health Level 7
- `OSI`：Open Systems Interconnection
- `PDU`：Protocol Data Unit
- `PDV`：Protocol Data Value
- `SOP`：Service Object Pair
- `TCP/IP`：Transmission Control Protocol/Internet Protocol
- `DUL`：Dicom Upper Layers

DICOM 是基于 TCP/IP 的网络协议，通过 DICOM 将影像设备和存储管理设备连接起来，协议关系如下：

- DICOM 3.0 通讯标准网络模型

	涵盖了会话层 Session、表示层 Presentation 和应用层 Application。会话层主要负责为通讯双方制定通信方式，并创建、注销会话。该部分对应的是 DICOM 3.0 标准中的第 8 部分，即 ACSE；表示层 Presentation 能为不同的客户端提供数据和信息的语法转换内码，使系统能解读成正确的数据。同时，也能提供压缩解压、加密解密。与之相对应的是 DIMSE 服务，即 DICOM 3.0 标准的第 7 部分众多服务 C-STORE、C-FIND、C-GET、C-MOVE、C-ECHO 的编码格式。

- DICOM Upper Layer Protocol 负责与 TCP 相对接

- TCP/IP 基础协议


重要概念：

- `AE` - Application Entity 代表 DICOM 通信中的一个终端，可以代表一个系统或者一个程序。每个系统中的 AE 拥有一个唯一的 `AET` - Application Entity Title 。AET 的要求不能超过 16 个字节，一个设备上面可以有很多个 AE。

- 在 DICOM 应用进行通信时，需要给应用命名也叫作 `AE` 以便其他应用识别，客户端在 DICOM 语境称为 `SCU` - Service Class User，服务端称为 `SCP` - Service Class Provider。

- `Association` 是 DICOM 中定义的通信管道，连接两端的 SCU 和 SCP。这和 HTTP 中的 server 和 client 异曲同工。两个 AE 如果想要通信，必须由一方发起一个 Association，这个就是 SCU，并且询问另一方 SCP 是否支持具体的功能。

- `SOP` - Service Object Pair 是 Abstract Syntax 的一种，一般来说两者概念可以互通。表示 AE 提供的针对不同对象的相应能力，比如存储 CT 影像等。SCU 可以申请具体的功能，而 SCP 在提供服务时也会申明自己能够提供的功能。

- `Transfer Syntax` 是一个或者多个 Abstract Syntax 的集合，同时额外定义了传输的 DICOM 文件的编码规则。

- `Modality` 是医疗影像的内容特征，例如超声影像，CT 等，对此 DICOM 协议使用一个字段进行标识，这个就是 Modality，可以根据这个 Tag 来进行区分影像的类别。

- `Attribute` 是 DICOM 文件存储的重要内容，它包含了 DICOM 文件的所有信息，比如 Study，Series，Patient，Instance 等等的信息，每一个 Attribute 最重要的是 `Tag`, `VR` - Value Representation 和 `Value`。其中 Tag 是 Attribute 的唯一标识，不同的 Attribute 的 Tag 都不一样。VR 表示 Attribute 的值类型，Value 是 Attribute 具体的值。

- `Patient`，`Study`，`Series`，`Instance` 在 DICOM 中，一定要知道这几个定义的含义，Study 表示针对病人进行的一次检查。病人可以有多次检查，Study 可以包含一个或多个 Series，Series 一般用来表示病人进行的某一部位的检查，一次完整的检查可能包含多个部位。Series 包含一个或多个 Instance, 一个 Instance 就是一个 DICOM 文件，指的是一次完整的扫描，可以是简单的扫描，便是单帧照片。也可以是长扫描，便是多帧照片。

DICOM 网络模型：

- DICOM Upper Layer Protocol

	就是 DICOM 底层 TCP 协议的上层接口，是通过 TCP 进行数据传输；

- DICOM Upper Layer Service

	这一层是控制连接处于不同的状态，创建、断开、释放以及数据传输，这一层协议包叫 `PDU` - Protocol Data Unit，发送不同 PDU 可以触发连接不同状态，可以使用状态机表达。

- DICOM Application Message Exhange

	数据交换层，如果把 DICOM Upper Layer 两层比做 TCP 的话，这层就有点类似 HTTP 协议了。HTTP 会有 GET、PUT、POST、DELETE 给客户端操作数据，DICOM 也提供了 `C-FIND`、`C-MOVE`、`C-STORE` 提供客户端查询，下载，上传数据的操作。和 PDU 类似这一层也有协议包叫 `DIMSE` - DICOM Message Service Element，在这一层连接的两端叫 DIMSE Service User，`SCP` 和 `SCU` 这两个概念是属于应用层面的高于这一层。


# 图像
- [DICOM 入门 - 语法](https://www.jianshu.com/p/5db8933a25a4)
- [DICOM 入门 - 图像](https://www.jianshu.com/p/628ed11081a1)
- [DICOM 入门 - 解析 DCM 文件](https://www.jianshu.com/p/446bd4c9f2fc)
- [DICOM in Python](https://pyscience.wordpress.com/2014/09/08/dicom-in-python-importing-medical-image-data-into-numpy-with-pydicom-and-vtk/)

一个 DICOM 文件类似一个类，会有很多属性，属性可能是一个字段，数组或者包含了另外一个类。编程语言会定义基础数据类型，类似的 DICOM 定义很多基础类型叫做 VR - Value Representations 值表现。

DCM 文件中具体数据的处理，说图像可能有些狭隘，广义上还包括波形，如心电图、超声成像的视频等等。

图像重建技术，平面、曲面、表面、三维，已经成为时下放射领域最热门的词。它们也是数字成像对比从前的硬拷贝胶片最独特的优势之一，旧时你根本没法后处理。如果 DICOM 数据对象中没有收集各种信息，那么重建后处理是根本不可能实现的。

考虑到一个简单的数字成像，比如 CT 扫描。除它的像素属性之外，DICOM 会记录所有 有关的长度、三维坐标和方向。

利用 pydicom 库解析 DICOM 文件，自带 dcm 测试文件，各文件信息参考 README 文件。

安装 pydicom 和 numpy 库：

	pip install pydicom numpy

单 dcm 文件读取：

	import pydicom
	import pylab

	dcm = 'C:\\Anaconda3\\Lib\\site-packages\\pydicom\\data\\test_files\\US1_UNCI.dcm'
	ds = pydicom.read_file(dcm)
	print(ds.dir()) 
	print(ds.dir('pat')) 
	print(ds.PatientName, ds.PatientSex, ds.StudyDate, ds.PatientBirthDate)

	print(ds.data_element('PatientID'))
	print(ds.data_element('PatientID').VR, ds.data_element('PatientID').value)

	pixel_bytes = ds.PixelData 
	pix = ds.pixel_array       
	print(pix.shape) 
	pylab.imshow(pix, cmap=pylab.cm.bone)
	pylab.show()

系列 dicom 文件处理：

	import os
	import pydicom
	import numpy
	from matplotlib import pyplot

	dcm = 'C:/Anaconda3/Lib/site-packages/pydicom/data/test_files/'
	DCMs = []

	# 将所有dicom文件读入
	for diName, subdirList, fileList in os.walk(dcm):
	    for filename in fileList:
	        if ".dcm" in filename.lower():
	            path = os.path.join(diName, filename)
	            size = os.path.getsize(path)
	            print(filename,size)
	            if size<1024*512:
	                continue
	            DCMs.append(path)

	# 将第一张图片作为参考图
	RefDs = pydicom.read_file(DCMs[1])
	# print(RefDs)
	print(RefDs.pixel_array)
	print(RefDs.PatientPosition)
	pyplot.imshow(RefDs.pixel_array, cmap=pyplot.cm.bone)
	pyplot.show()

	# 建立三维数组，长、宽、层数
	ConstPixelDims = (int(RefDs.Rows), int(RefDs.Columns), len(DCMs))
	print(ConstPixelDims)

	# 得到 spacing 值 mm 单位
	# PixelSpacing - 每个像素点实际的长度与宽度,单位(mm)
	# SliceThickness - 每层切片的厚度,单位(mm)
	PixelSpacing = (float(RefDs.PixelSpacing[0]), float(RefDs.PixelSpacing[1]), float(RefDs.SliceThickness))

	# 三维数据
	# 0 到（第一个维数加一*像素间的间隔），步长为 PixelSpacing
	x = numpy.arange(0.0, (ConstPixelDims[0] + 1) * PixelSpacing[0], PixelSpacing[0])
	y = numpy.arange(0.0, (ConstPixelDims[1] + 1) * PixelSpacing[1], PixelSpacing[1])
	z = numpy.arange(0.0, (ConstPixelDims[2] + 1) * PixelSpacing[2], PixelSpacing[2])

	ArrayDicom = numpy.zeros(ConstPixelDims, dtype=RefDs.pixel_array.dtype)

	# 遍历所有的 dicom 文件，读取图像数据，存放在 numpy 数组中
	for filenameDCM in DCMs:
	    ds = pydicom.read_file(filenameDCM)
	    ArrayDicom[:, :, DCMs.index(filenameDCM)] = ds.pixel_array


	# 轴状面显示
	# 每英寸的像素数 dpi - dot per inch 越大图片越清晰。
	pyplot.figure(dpi=1000)
	# 将坐标轴都变为同等长度
	# pyplot.axes().set_aspect('equal', 'datalim')
	pyplot.axes().set_aspect('equal')
	pyplot.set_cmap(pyplot.gray()) # 灰度化图片

	# 第三个维度表示现在展示的是第几层 
	pyplot.imshow(ArrayDicom[:, :, 360])
	pyplot.show()

	# 冠状面显示
	pyplot.figure(dpi=100)
	pyplot.axes().set_aspect('equal', 'datalim')
	pyplot.set_cmap(pyplot.gray())
	pyplot.imshow(ArrayDicom[:, 90, :])
	pyplot.show()

Pixel Spacing 像素间距属性 Dp 保存在 DICOM(0028,0030)。它定义了图像像素的物理大小并且保证了实际距离测量的准确性。比如，如果你知道 x 和 y 轴的像素间距为 0.4mm，那么在图像中的一条 10 像素的线就会有 4mm 的长度。同 样，由于你知道图像像素中的宽和高，比如对于普通 CT 来说是 512×512，你就能够找到图像的实际尺寸了:512 × 0.4 mm = 204.8 mm。

Image Position 图像位置 DICOM(0020,0032) 属性，Ip 。这表示图像最左上角第一个像素的 x、y、z 坐标， 单位为毫米。这可以让我们了解在三维空间内图像开始的位置。

图像方向 DICOM(0020,0037) 属性。它存储了图像行和列向量 vr 和 vc 在三维方向上的余弦。 这两个向量，源自属性图像位置点 Ip。其在三维空间完整地定义了整 个图像平面。现在，如果我们有一个图像像素 P 在第 r 行、第 c 列，那么我们就能找到它 的三维坐标了，方法如下:

	P3D = Ip + r×vr + c×vc

在 x、y、z 三个坐标上分别计算。

层间距 DICOM(0018,0088) 属性，Ds，记录了连续各层图像之间的距离，单位为毫米。它提供了和像素间距 Pixel Spacing (0028,0030) 相同的作用，但是只在 z 方向上。比如， 如果你考虑在第一和第二个 CT 层面上那个相同的像素 (r,c) 位置，那么两层面之间的距离 将等于层间距 (0018,0088) 属性的值。


Tag(7FE0,0010) 即表示 Pixel Data tag 这个元素存储了图像数据

图像相关标记 tag

	(0028,0002) Samples per Pixel 像素的取样数，一般 CT，MR，DR 等灰度图像都是 1，而彩超等彩图像都是 3，分别表示R, G, B三个颜色通道。

	(0028,0004) Photometric Interpretation：
	     Monochrome2 一般的灰度图像都采用这种，Pixel值越大，图像就越白。
	     Monochrome1 只有部分CR, DR图像使用，Pixel值越大，图像就越黑。
	     Palette Colour 一般用于彩超图像，每个像素占用8位或者16位

	(0028,0006) Planar configuration 定义了各个彩色通道值在 Pixel Data 中排列的排列方式。

	值为 0 排列为 RGBRGB...。 值为 1 的排列 RRRRR…GGGGG…BBBBB。 
	对于多帧图像，它是这样排列的：第一帧 RRR…GGG…BBB…，第二帧 RRR…GGG…BBB…

	(0028,0008) Number of Frames 获取帧数，然后，逐帧读取 Pixel Data。 

	(0028,0010) Rows 图像的高度
	(0028,0011) Columns 图像的宽度

	(0028,0030) Pixel Spacing  图像像素间距，主要用于长度测量。
	(0028,0100) Bits Allocated 一个像素取样点存储时分配到的 bit 位数。

	(0028,0101) Bits Stored 一个像素取样点存储时使用到的 bit 位数。
	(0028,0102) High Bit 最高位序号。
	(0028,0103) Pixel Representation 值为 0 这表明是无符号类型，1 表明为有符号类型。
	(0028,1050) Window Center 窗位
	(0028,1051) Window Width 窗宽

	(0028,1052) Rescale Intercept 和 
	(0028,1053) Rescale Slope 用于根据像素值计算原始值，如 CT 可以用于计算 HU 值。

		HU = Rescale Slope * X + Rescale Intercept.

	调色板保存在
	(0028,1201) RedPaletteColorLookupTableData, 
	(0028,1202) GreenPaletteColorLookupTableData, 
	(0028,1203) BluePaletteColorLookupTableData

	(0028,2110) Lossy Image Compression 值为 1 表明该图像曾经经过有损压缩处理。
	(0028,2112) Lossy Image Compression Ratio 有损压缩压缩率。


色彩模型：

- `RGB` 这是最常用的彩色图像格式。

- `YBR_FULL` 另外一种彩色图像格式，存储格式为 Y(Luminance 亮度) B(Blueness 蓝色)， R（Redness, 红色）

- `YBR_FULL_422` 一般用于 JPG 有损压缩格式的彩色图像，每两个像素共同使用32位，每一个像素都有自己的亮度 Y Luminance，但是共享相同的蓝色 B Blueness，红色 R Redness 两个分量。所以，它的像素值存储方式是：YYBR,YYBT,YYBR

- `YBR_RCT` 用于JPEG 2000无损压缩彩色图像，Reversible Color Transformation, 可逆色彩变换。

		Y = (R+2G+B)/4，
		CB = B-G ，
		CR = R - G
		G = Y - (CR+CB)/4 ,
		R = CR + G, B = CB + G

- `YBR_ICT` 用于 JPEG 2000有损压缩彩色图像 Irreversible Color Transformation, 不可逆色彩变换。

		Y = + .29900R + .58700G + .11400B
		CB = - .16875R - .33126G + .50000B
		CR = + .50000R - .41869G - .08131B

影像的 Transfer Syntax UID (0002,0010) 決定了影像的存储方式。 Pixel data 的存储方式，包括：

- 未压缩：

	- Implicit VR Little Endian:
	- Default Transfer Syntax for DICOM 1.2.840.10008.1.2
	- Explicit VR Little Endian 1.2.840.10008.1.2.1
	- Explicit VR Big Endian 1.2.840.10008.1.2.2

- 无损压缩：

	- JPEG Lossless :
	- Default Transfer Syntax for Lossless JPEG
	- ImageCompression 1.2.840.10008.1.2.4.70
	- JPEG 2000 Image Compression
	- (Lossless Only) 1.2.840.10008.1.2.4.90
	- RLE Lossless 1.2.840.10008.1.2.5

- 有损压缩：

	- Default Transfer Syntax for Lossy
	- JPEG 12 Bit Image Compression


结合开源项目 IMBRA 讲解如何解析一个 DCM 文件。

文件开头会有 128 字节的导言，这部分数据没有内容。接着是 4 字节 DICOM 文件标识，存储这 DICM。然后紧接着就是 dicom 数据数据元素。

旧版本的DCM文件会在开头 8 个字节验证签名，在读完 128 字节后，读取 4 个字节验证 DICOM 标识。

接下来两个字节的 tagId，并且验证大小端。

dicom 数据元素的 tagId 是从大到小的读取的，而最小的 tagId 就是从 0x0002，当 tagId 不是 0x0002 说明已经读取完所以关于 0x0002 的 tagId。从中找出 (0002,0010) 的 tag，这个 tag 设置当前数据是否大端格式，显示 VR 编码还是隐式 VR 编码。 "1.2.840.10008.1.2.2" 表示大端格式，1.2.840.10008.1.2 表示隐式编码。


# DICOM DPU
- [DICOM 网络协议 - DPU](https://www.jianshu.com/p/5b4594421274)

`PDU` - Protocol Data Unit  用于 DICOM 网络协议底层信息交换格式。PDU 由协议控制信息和用户数据组成。PDU 采用大端编码。

DICOM UL 协议由七个协议数据单元组成：

| 协议		| 作用		|
| :-------	| :-------	|
| A-ASSOCIATE-RQ PDU	| 用于发起链接时，并带有协商信息	|
| A-ASSOCIATE-AC PDU	| 接受协商信息，DUL建立成功	|
| A-ASSOCIATE-RJ PDU	| 拒绝协商信息,DUL建立失败	|
| P-DATA-TF PDU		| 携带数据，主要服务于上层DIMSE	|
| A-RELEASE-RQ PDU	| 释放请求	|
| A-RELEASE-RP PDU	| 释放确认	|
| A-ABORT PDU		| 中断操作，发生于异常和错误情况	|

所有类型 PDU 都有相同的协议头

| PDU 字节	| 字段名称	| 描述	|
| :-------	| :-------	| :-------	|
| 1			| PDU类型	| 不同PDU 该值也不同	|
| 2			| 保留字段	|     	|
| 3-6		| 长度		| 后续字段的第一个字节到最后一个字节的字节数	|

A-ASSOCIATE-RQ PDU 发起
pdu 结构

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1			| PDU类型	| 固定值 01H	|
| 2			| 保留字段	| 	|
| 3-6		| 长度		| 后续字段的第一个字节到最后一个字节的字节数	|
| 7-8		| 协议版本	| 固定值1	|
| 9-10		| 保留字段	| 	|
| 11-26		| 接受者AE名称	| 16个字符	|
| 27-42		| 发起者AE名称	| 16个字符	|
| 43-74		| 保留字段	| 	|
| 75-XXX	| 可变长字段	| 包含三个项应用上下文 Application Context、表示上下文 Presentation Context 列表和用户选项 User Information	|

Application Context 结构

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1			| 子项类型	| 固定值10H |
| 2			| 保留		|  |
| 3-4		| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-XX		| 名称		| Application-context-name该名称由ACR-NEMA负责需要，当然也可以注册私有 |

Presentation Context 结构

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| 子项类型	| 固定值 20H 	|
| 2		| 保留	|  	|
| 3-4	| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 	|
| 5		| Presentation-context-ID	| 1到255之间的奇数 	|
| 6		| 保留字段	|  	|
| 7		| 保留字段	|  	|
| 8		| 保留字段	|  	|
| 9-XXX	| Abstract/Transfer Syntax Sub-Items	| 抽象语法和传输语法列表 	|

Abstract Syntax

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1			| 子项类型	| 固定值30H |
| 2			| 保留	|  |
| 3-4		| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-XX		| Abstract-syntax-name	| SCU 可能传输的图像类型 ，CT MR 之类会有不同的 ID 也就是 Abstract-syntax-name |

Transfer Syntax

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1			| 子项类型	| 固定值40H |
| 2			| 保留	|  |
| 3-4		| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-XX		| Abstract-syntax-name	| DICOM存储格式 是隐氏小端，还是显示大端 |

User Information Item

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| 子项类型	| 固定值50H |
| 2		| 保留		|  |
| 3-4	| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-XX	| 数据	| 包含若干子项Maximum Length Sub-Item 、 Extended User Information Negotiation |

Maximum Length Sub-Item Fields

协商双方最大接收字节数

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| 子项类型	| 固定值40H |
| 2		| 保留	|  |
| 3-4	| 后续长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-8	| 最大接收长度	| 之后发送的P-DATA-TF PDU长度不能超过该值 |

A-ASSOCIATE-AC PDU 接受

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7-8	| 保留字段	|  |
| 9-10	| 保留字段	|  |
| 11-26	| 保留字段	|  |
| 27-42	| 保留字段	|  |
| 43-74	| 保留字段	|  |
| 75-XXX	| 可变长字段	| 包含三个项应用上下文 Application Context、表示上下文 Presentation Context 列表和用户选项 User Information |

Application Context Item

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-4	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 5-xxx	| 名称	|  |

Presentation Context Item

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1			| PDU类型	| 固定值01H |
| 2			| 保留字段	|  |
| 5			| Presentation-context-ID	| 1到255之间的奇数 |
| 6			| 保留	|  |
| 7			| 保留	|  |
| 8			| 保留	|  |
| 9-xxx		| Abstract/Transfer Syntax	| 拒绝或者接受的抽象和传输语法 |

A-ASSOCIATE-RJ PDU 拒绝

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7		| 保留	|  |
| 8		| 结果	| 1永久拒绝 2暂时拒绝 |
| 9		| 来源	| 1DICOM UL service-user 2 DICOM UL service-provider |
| 10	| 原因	|  |

P-DATA-TF PDU

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7-xxx	| 	| DIMSE上层数据 |

A-RELEASE-RQ PDU 发起断开

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7		| 保留	|  |

A-RELEASE-RQ PDU 确认断开

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7		| 保留	|  |

A-ABORT PDU 中断

| PDU 字节	| 字段名称	| 描述		|
| :-------	| :-------	| :-------	|
| 1		| PDU类型	| 固定值01H |
| 2		| 保留字段	|  |
| 3-6	| 长度	| 后续字段的第一个字节到最后一个字节的字节数 |
| 7		| 保留	|  |
| 8		| 保留	|  |
| 9		| 来源	| 1DICOM UL service-user 2 DICOM UL service-provider |
| 10	| 原因	| 0未知原因 1未知类型PDU 1接收PDU出差 3保留 4未知PDU参数 5未预料PDU参数 6PDU参数出错 |


# OpenCV
- Homepage: https://opencv.org
- Q&A forum: https://answers.opencv.org
- Documentation: https://docs.opencv.org
- Source code: https://github.com/opencv
- Please pay special attention to our tutorials! https://docs.opencv.org/master
- Books about the OpenCV are described here: https://opencv.org/books.html



Visual Studio 2013 + OpenCV 3.0.0 安装&环境，OpenCV 3.2 官方编译库只支持 Visual Studio (vc14)，会存在很多差库的问题。

从 OpenCV 官网下载 Windows OpenCV 3.0.0 版本，支持 vc11 vc12 x86 和 x64，并包含静态编译库，再往后的 3.10 3.20 3.30 不包含静态库和对 vc11 vc12 或者 x86 的支持。

	#include<iostream>
	#include<opencv2\opencv.hpp>

	using namespace std;

	int main()
	{
		cv::Mat img = cv::imread("source_1.jpg");
		cv::namedWindow("jpg");
		cv::imshow("jpg", img);
		cv::waitKey(0);
		cout << CV_MAJOR_VERSION << endl;
		return 0;
	}

# RawCap sniffer & DICOM 3.0 Protocol
- [RawCap free sniffer for Windows](https://www.netresec.com/?page=RawCap)
- [DICOM 3.0 标准中的通讯服务模块分析](https://blog.csdn.net/zssureqh/article/details/39098621)
- [DCMTK 工具包学习和分析 worklist](https://blog.csdn.net/zssureqh/article/details/39098621)
- [DCMTK - DICOM Toolkit 3.6.5](https://dcmtk.org/dcmtk.php.en)
- [NEMA's Official DICOM Web Page](https://www.dicomstandard.org/)

worklist 查询服务的通讯过程分析

- 启动本地回路抓包工具

		RawCap.exe 5 dumpfile.pcap

- 启动 worklist 服务端程序，利用 shell 重定向将调试信息保存到 worklist-server.txt 中

		wlmscpfs.exe –d 104 –dfp wlistdb >worklist-server.txt

- 启动 workist 查询客户端程序

	findscu.exe –d 127.0.0.1 104 testqry.wl –aec OFFIS >worklist-client.txt

testqry.wl 文件是上一篇博文 http://blog.csdn.net/zssureqh/article/details/38775315 中测试使用的，其中设定了 PatientID=123456）

然后等待整个通讯过程截止，RawCap.exe 会得到一个名为 dumpfile.pcap 的数据包文件，另外也会得到服务端和客户端的两个调试信息文本文件，分别是 worklist-server.txt 和 worklist-client.txt。


Quick RawCap facts:

- Can sniff any interface that has got an IPv4 address, including 127.0.0.1 (localhost/loopback)
- RawCap.exe is just 48 kB
- No external libraries or DLL's needed other than .NET Framework
- No installation required, just download RawCap.exe and sniff
- Can sniff most interface types, including WiFi, WWAN (Mobile Broadband) and PPP interfaces

Simple to use

	>RawCap.exe --help
	NETRESEC RawCap version 0.2.0.0

	Usage: RawCap.exe [OPTIONS] <interface> <pcap_target>
	 <interface> can be an interface number or IP address
	 <pcap_target> can be filename, stdout (-) or named pipe (starting with \\.\pipe\)

	OPTIONS:
	 -f          Flush data to file after each packet (no buffer)
	 -c <count>  Stop sniffing after receiving <count> packets
	 -s <sec>    Stop sniffing after <sec> seconds
	 -m          Disable automatic creation of RawCap firewall entry
	 -q          Quiet, don't print packet count to standard out

	INTERFACES:
	 0.     IP        : 169.254.63.243
			NIC Name  : Local Area Connection
			NIC Type  : Ethernet

	 1.     IP        : 192.168.1.129
			NIC Name  : WiFi
			NIC Type  : Wireless80211

	 2.     IP        : 127.0.0.1
			NIC Name  : Loopback Pseudo-Interface 1
			NIC Type  : Loopback

	 3.     IP        : 10.165.240.132
			NIC Name  : Mobile 12
			NIC Type  : Wwanpp

	Example 1: RawCap.exe 0 dumpfile.pcap
	Example 2: RawCap.exe -s 60 127.0.0.1 localhost.pcap
	Example 3: RawCap.exe 127.0.0.1 \\.\pipe\RawCap
	Example 4: RawCap.exe -q 127.0.0.1 - | Wireshark.exe -i - -k

An alternative to supplying the interface number is to supply the IP address of the preferred interface instead, i.e. like this:

	RawCap.exe 127.0.0.1 localhost_capture.pcap


Streaming PCAP to Wireshark

	RawCap.exe -q 127.0.0.1 - | Wireshark.exe -i - -k

Another alternative is to write the PCAP data to a named pipe, and then let Wireshark "sniff" packets from that named pipe.

- Start RawCap and let it write PCAP data to a named pipe called "RawCap".
- RawCap.exe 127.0.0.1 \\.\pipe\RawCap
- Start Wireshark (version 2.3.0 or later)
- Press: Capture > Options
- Click "Manage Interfaces..."
- Select the "Pipes" tab
- Press the "+" button to add a named pipe
- Name the pipe "\\.\pipe\RawCap" and press ENTER to save it
- RawCap named pipe interface added in Wireshark
- Press "OK" in the Manage Interface window
- Wireshark with a PacketCache pipe interface
- Press "Start" to see the packets sniffed by RawCap in real-time
















































