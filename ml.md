
# Python & 机器学习
- https://tensorflow.juejin.im/get_started/
- [TensorFlow.js](https://js.tensorflow.org/)
- [PyTorch](https://pytorch.org/)
- [深度学习框架 PyTorch 入门与实践](https://github.com/chenyuntc/pytorch-book)
- [机器学习速成教程](https://blog.csdn.net/heyc861221/article/details/80127805)
- [PyTorch还是TensorFlow？](https://zhuanlan.zhihu.com/p/28636490)
- [令人困惑的 TensorFlow](http://baijiahao.baidu.com/s?id=1604877144040331406)
- [谷歌大神带你十分钟看懂 TensorFlow](http://baijiahao.baidu.com/s?id=1587378061168798378&wfr=spider&for=pc)
- [Christopher Olah' Blog](http://colah.github.io/)
- [入门级攻略：机器学习 VS. 深度学习](https://www.jianshu.com/p/5771b6d37c00)
- [Tensorflow Cookbook](https://github.com/nfmcclure/tensorflow_cookbook)
- [Learning Path : Your mentor to become a machine learning expert](https://www.analyticsvidhya.com/learning-path-learn-machine-learning/)
- [Machine learning course from Andrew Ng](https://www.coursera.org/learn/machine-learning)
- [Caltech Professor Yaser Abu-Mostafa - introductory Machine Learning online course](https://work.caltech.edu/telecourse.html)
- [Coursera 机器学习 Andrew Ng](https://www.bilibili.com/video/av9559261/)
- [吴恩达机器学习](https://study.163.com/note/noteIndex.htm?id=1004570029&type=0)
- [斯坦福吴恩达教授机器学习公开课的知识笔记](https://yoyoyohamapi.gitbooks.io/mit-ml/content/)
- [PyTorch中文文档](https://pytorch-cn.readthedocs.io/zh/latest/)
- [CNN笔记：通俗理解卷积神经网络](https://blog.csdn.net/v_july_v/article/details/51812459)
- [《编程之法：面试和算法心得》](https://github.com/julycoding/The-Art-Of-Programming-By-July)
- [百度架构师手把手教深度学习教程](https://www.paddlepaddle.org.cn/tutorials/projectdetail/590324)

Tom Mitchell 关于机器学习的定义被广泛引用：

对于某类任务 T 和执行任务的性能度量 P，如果一个计算机程序在任务 T 上以 P 衡量的性能随着经验 E 而不断自我完善，那么我们称这个计算机程序在学习 E 经验。

A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P eif its performance at tasks in T, as measured by P, improves with experience E.

深度学习 Deep learning 概念和机器学习基本一致。

深度学习是一种特殊的机器学习，它将现实世界表示为嵌套的层次概念体系，由较简单概念间的联系定义复杂概念，从一般抽象概括到高级抽象表示，从而获得强大的性能与灵活性。

Deep learning is a particular kind of machine learning that achieves great power and flexibility by learning to represent the world as nested hierarchy of concepts, with each concept defined in relation to simpler concepts, and more abstract representations computed in terms of less abstract ones.

【例1 图形检测】

假设我们要将矩形和其他图形区别开。人眼首先是检测这个图形是否有4条边（简单概念）。如果有 4 条边，在检测它们是否相连，闭合且垂直，以及是否相等（嵌套层次概念）。事实上，我们将一个复杂的任务（矩形识别）分解成一些简单低抽象层次的任务。深度学习本质上是在更大的范围内做这件事。

【例2 猫还是狗】

如果使用机器学习识别图片中动物是猫或者狗，首先要定义一些特征，比如该动物是否有胡须、耳朵；如果有耳朵，那么耳朵是否是尖的。简单地说，我们要定义面部特征，然后让系统识别出在动物分类中哪些是重要特征。而深度学习会一次性完成这些任务，深度学习会自动找到对分类任务重要的特征，而机器学习不得不人工指定。

深入学习工作流程如下：

1. 首先在图片中找到和猫或者狗最相关的边界；
2. 然后找到形状和边界的组合，如是否能找到胡须和耳朵；
3. 在复杂概念的连续分层识别后，就能够确定哪些特征对识别猫狗起重要作用。

**深度学习**和传统**机器学习**最重要的区别是它的性能随着数据量的增加而增强。如果数据很少，深度学习算法性能并不好，这是因为深度学习算法需要大量数据才能很好理解其中蕴含的模式。这种情况下，使用人工指定规则的传统机器学习占据上风。

深度学习算法严重依赖于高端机，而传统机器学习在低端机上就可以运行。因为深度学习需要进行大量矩阵乘法操作，而 GPU 可以有效优化这些操作，所以 GPU 成为其中必不可少的一部分。

**特征工程**将领域知识输入特征提取器，降低数据复杂度，使数据中的模式对学习算法更加明显，得到更优秀的结果。从时间和专业性方面讲，这个过程开销很高。机器学习中，大部分使用的特征都是由专家指定或根据先验知识确定每个数据域和数据类型。比如，特征可以是像素值，形状，纹理，位置，方向。大多数机器学习方法的性能依赖于识别和抽取这些特征的准确度。

![深度学习算法](https://upload-images.jianshu.io/upload_images/2509688-63cf858f1ad9e067.png?imageMogr2/auto-orient/strip|imageView2/2/w/951/format/webp)

深度学习算法试图从数据中学习高层特征，这是深度学习与众不同的一部分，同时也是超越传统机器学习的重要一步。深度学习将每个问题归结为开发新特征提取器，如卷积神经网络在底层学习如边和直线种种低层特征，然后是面部部分特征，最后是人脸的高层特征。

深度学习框架：

- TensorFlow 是谷歌的开发者创造的一款开源的深度学习框架，于 2015 年发布。官方研究发布于论文《TensorFlow：异构分布式系统上的大规模机器学习》。现在 TensorFlow 无缝集成 Keras 框架，可以直接将 TensorFlow 代码放到 Keras 模型中。
- Facebook 的 PyTorch 是最新的深度学习框架之一，于 2017 年在 GitHub 上开源。PyTorch 很简洁、易于使用、支持动态计算图而且内存使用很高效，因此越来越受欢迎。


**神经网络** Neural Network 起初是被用于解决手写数字识别或用相机识别汽车注册车牌等简单的分类问题。但随着近来框架的发展以及英伟达高计算性能图形处理单元 GPU 的进步，我们可以在 TB 级的数据上训练神经网络并求解远远更加复杂的问题。一个值得提及的成就是在 TensorFlow 和 PyTorch 中实现的卷积神经网络在 ImageNet 上都达到了当前最佳的表现。训练后的模型可以用在不同的应用中，比如目标检测、图像语义分割等等。

谷歌的 Tensorflow 与 Facebook 的 PyTorch 一直是颇受社区欢迎的两种深度学习框架。PyTorch 和 TensorFlow 的关键差异是它们执行代码的方式。这两个框架都基于基础数据类型张量 tensor 而工作。你可以将张量看作是下图所示的多维数组。

机器学习并不是一个深奥的概念。实际上，大部分机器学习的算法都仅仅在做一项任务：划线。换句话说，机器学习的本质就是画一条线来区分样本数据。分类假设我们有一堆苹果和橘子的图片。我们可以从图片中获取水果的颜色和大小信息，我们想根据这些信息将图片分为苹果和橘子两类。大多数机器学习算法的第一步是获取标记过的训练数据。

在这个例子中，我们需要先收集大量已经被标记过的图片，每张图片属于苹果或者橘子。然后，从这些图片中抽取出颜色和尺寸信息，寻找它们与苹果或者橘子的联系。这些信息在二维平面上的表示如图所示：

    ^ size
    |               o      o
    | x  x     x     o   o
    |  x    x       o o    o
    |           x       o
    |    x             o    o
    |   x    x    o    o   o
    |    x      x  o  o
    |  x  x
    +---------------------->color

红色的X表示苹果，橙色的X表示橘子。或许你已经从数据中发现了某些模式。表示苹果的X多位于坐标轴的左侧方向，因为大多数的苹果是红色，而表示橘子的X多位于坐标轴的右侧方向，因为大多数的橘子是橙色。因此，希望我们的算法也能学到这种模式。针对上述问题，我们的目标是让算法在两组X点数据之间画一条线，称为决策边界。下图所示即为一条决策边界线：

    ^ size
    |              /o      o
    | x  x     x  /  o   o
    |  x    x    /  o o    o
    |           x|      o
    |    x       |     o    o
    |   x    x   |o    o   o
    |    x     x | o  o
    |  x  x      |
    +---------------------->color

就是这么简单的一条直线。然而，更复杂的算法最终可能得到一条更复杂的边界线。

我们假设按照已标记的训练数据画出的分界线也能区分其它图片中的水果的种类。换句话说，若我们让算法从样本数据中学会了区分苹果和橘子，那么此经验就能得到泛化，可以区分从未出现过的图片中的水果是苹果还是橘子。这就是机器学习算法的威力。首先获取一批训练数据，然后跑一个机器学习算法生成决策边界，然后根据学到的模式来预测新的数据。当然，区分苹果和橘子实在是太容易了。我们可以把这种策略套用在更复杂的问题上，比如预测肿瘤是良性还是恶性，判断邮件是否属于垃圾邮件，或者说分析安全系统的指纹。以上问题都属于机器学习问题的一个子领域，归为分类问题，都是用线条来区分数据。机器学习还有一类子问题称作回归问题，它是画若干线条来描述数据。

学习机器学习的路线参考 Learning Path : Your mentor to become a machine learning expert。

一个好的学习资源就是斯坦福大学教授吴恩达 Andrew Ng 的 26 篇基础教程 Machine learning course from Andrew Ng，Andrew Ng 教授写的教程，深入浅出，要言不烦，不卖关子，不摆噱头，这是真心想让读者看得懂的做法。另一个是 Caltech Professor Yaser Abu-Mostafa - introductory Machine Learning online course。


GPU 版本的 tensorflow 1.13.0 及以上版本需要 CUDA Toolkit 10.0 以上，如果使用 anaconda 尽量用 conda 命令安装。最新版本 tensorflow 2.0，在 win10 下要求 Cuda Toolkit 10.1。

    pip install tensorflow-gpu==1.14.0
    pip install tensorflow-gpu=1.13.1 -i http://mirrors.aliyun.com/pypi/simple/
    pip install tensorflow-gpu==2.1.0-rc2

    conda install pytorch torchvision cudatoolkit=10.1 -c pytorch
    pip3 install torch torchvision -i https://pypi.mirrors.ustc.edu.cn/simple/ 

解决慢到无法装的问题最有效方法是添加镜像源，常见的清华或中科大：

    conda config --show
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/menpo/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
    conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/

执行上面命令，因为命令最后是 -c pytorch，所以默认还是从 conda 源下载，新安装的清华等源没有用上。

正确命令去掉 -c pytorch：

    conda install pytorch torchvision cudatoolkit=10.1

python 安装包的时候报错，如下：

    RemoveError: 'setuptools' is a dependency of conda and cannot be removed from
    conda's operating environment.

原因：安装setuptools 的时候不是采用 conda 安装的，而是采用 pip install 的方式安装的，而要安装的包依赖于 conda。

解决办法是先卸载已经安装的 setuptools 再更新 conda：

    pip uninstall setuptools
    conda update --force conda


# 鸢尾花数据集
- [鸢尾花数据集](http://archive.ics.uci.edu/ml/datasets/Iris)

鸢【音：yuān】尾花（Iris）是单子叶百合目花卉，是一种比较常见的花，可能不经意间你就能在某个公园里碰见它，而且鸢尾花的品种较多。如果逛公园的时，想在女神面前一展才华，不妨了解下关于鸢尾花种类识别的数据集：)

鸢尾花数据集可能是模式识别、机器学习等领域里被使用最多的一个数据集了，很多教材用这份数据来做案例，很多工具，包括R、scikit-learn，都会自带这些数据集，而且说学术界很多论文也应用这份数据做实验，可见这份数据的重要意义。

鸢尾花数据集最初由 Edgar Anderson 测量得到，而后在著名的统计学家和生物学家 R.A Fisher 于 1936 年发表的文章 「The use of multiple measurements in taxonomic problems」 中被使用，用其作为线性判别分析（Linear Discriminant Analysis）的一个例子，证明分类的统计方法，从此而被众人所知，尤其是在机器学习这个领域。

数据中的两类鸢尾花记录结果是在加拿大加斯帕半岛上，于同一天的同一个时间段，使用相同的测量仪器，在相同的牧场上由同一个人测量出来的。这是一份有着70年历史的数据，虽然老，但是却很经典，详细数据集可以在UCI数据库中找到。

鸢尾花数据集共收集了三类鸢尾花，即 Setosa 鸢尾花、Versicolour 鸢尾花和 Virginica 鸢尾花，每一类鸢尾花收集了 50 条样本记录，共计 150 条。

数据集包括 4 个属性，分别为花萼的长、花萼的宽、花瓣的长和花瓣的宽。对花瓣我们可能比较熟悉，花萼是什么呢？花萼是花冠外面的绿色被叶，在花尚未开放时，保护着花蕾。四个属性的单位都是cm，属于数值变量，四个属性均不存在缺失值的情况，以下是各属性的一些统计值如下：

| 属性 | 最大值 | 最小值 | 均值 | 方差 |
|------|--------|--------|------|------|
| 萼长 |    7.9 |    4.3 | 5.84 | 0.83 |
| 萼宽 |    4.4 |    2.0 | 3.05 | 0.43 |
| 瓣长 |    6.9 |    1.0 | 3.76 | 1.76 |
| 瓣宽 |    2.5 |    0.1 | 1.20 | 0.76 |

在做任何机器学习的任务之前，需要对数据集进行探索，对其要有基本的认识，包括数据背后的业务背景、数据的量级、是否有缺失值、数据属性的数据类型，还有各个属性的极值、均值、分布等汇总统计指标。

常用的指标包括：

- 频率和众数，针对无序分类数据集，其中众数是具有最高频率的值。
- 百分位数，主要针对有序数据集，比如我们可计算鸢尾花数据集中的四个属性的 10、25、50、75、90 等百分位数。
- 位置度量，包括均值和中位数。
- 散布度量，主要用极差和方差两个指标，跟均值和中位数一样，多用于描述连续数据属性。因为极差和方差均对离群值敏感，所以还可以采用绝对平均偏差、中位数绝对偏差和四分位数极差等指标来度量。
- 在多元属性的数据集中，每个属性的散布度量可独立其他属性，使用 4 中的指标来计算，但对于连续变量的数据，散布度量会更多采用协方差来表示。

数据探索不仅需要汇总统计，有时适当的可视化可以带来更直观的效果。对数据的可视化，可以让我们更快速更有效的了解数据的信息。Python 中有强大的工具可让我们做这些数据探索，属性的汇总统计指标使用 numpy 中的统计函数计算，而 matplotlib 用来做数据的可视化也是非常方便。

常见的可视化技术，比如针对少量属性的可视化，多采用直方图、盒装图、饼图、散布图、百分位数图等。以萼长、萼宽属性为例，可得到三类鸢尾花在萼长和萼宽上的散布图，如下：

![萼长和萼宽属性的散布图](https://upload-images.jianshu.io/upload_images/1192487-c80d8b7e03d247c8.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)


给出绘制该散步图的代码：

    from matplotlib import pyplot
    from sklearn.datasets import load_iris

    iris = load_iris()
    setosa_sepal_len = iris.data[:50, 0]
    setosa_sepal_width = iris.data[:50, 1]

    versi_sepal_len = iris.data[50:100, 0]
    versi_sepal_width = iris.data[50:100, 1]

    vergi_sepal_len = iris.data[100:, 0]
    vergi_sepal_width = iris.data[100:, 1]

    pyplot.scatter(setosa_sepal_len, setosa_sepal_width, marker = 'o', c = 'b',  s = 30, label = 'Setosa')
    pyplot.scatter(versi_sepal_len, versi_sepal_width, marker = 'o', c = 'r',  s = 50, label = 'Versicolour')
    pyplot.scatter(vergi_sepal_len, vergi_sepal_width, marker = 'o', c = 'y',  s = 35, label = 'Virginica')
    pyplot.xlabel("sepal length")
    pyplot.ylabel("sepal width")
    pyplot.title("sepal length and width scatter")
    pyplot.legend(loc = "upper right")
    pyplot.show()



# MNIST 手写数字识别
- [the MNIST Database of handwritten digits](http://yann.lecun.com/exdb/mnist/)
- [MNIST 手写数字识别](http://tensornews.cn/mnist_intro/)
- [MNIST 手写数字识别](https://geektutu.com/post/tensorflow-mnist-simplest.html)
- [Mnist 手写数字识别 Tensorflow](https://www.cnblogs.com/lyhLive/p/13345158.html)
- [基于MNIST数据集实现手写数字识别](https://www.jianshu.com/p/54574d647072)
- [CUDA Toolkit 9.0](https://developer.nvidia.com/cuda-90-download-archive)
- [CUDA Toolkit 10.0](https://developer.nvidia.com/cuda-10.0-download-archive)

就像我们在学习一门编程语言时总喜欢把 Hello World！作为入门的示例代码一样，MNIST 手写数字识别问题就像是深度学习的 Hello World！。

MNIST 是一个入门级的计算机视觉数据集，它包含各种手写数字图片。官网 THE MNIST DATABASE of handwritten digits 上可以下载数据文件。

MNIST 数据集来自美国国家标准与技术研究所 NIST - National Institute of Standards and Technology，训练集 (training set) 由来自 250 个不同人手写的数字构成，其中 50% 是高中学生，50% 来自人口普查局 (the Census Bureau) 的工作人员。测试集(test set) 也是同样比例的手写数字数据。

MNIST 数据集包含训练集和测试集的图片和标签四个打包文件，训练集总共有 60000 张图，测试集总共有 10000 张图：

- train-images-idx3-ubyte.gz:  training set images (9912422 bytes)
- train-labels-idx1-ubyte.gz:  training set labels (28881 bytes)
- t10k-images-idx3-ubyte.gz:   test set images (1648877 bytes)
- t10k-labels-idx1-ubyte.gz:   test set labels (4542 bytes)

TensorFlow 的示例代码中已经对 MNIST 数据集的处理进行了封装，但是作为第一个程序，我们希望读者明白开始的数据处理在整个机器学习项目中是很关键的一个环节。

下载解包得到的图像文件包，train-images.idx3-ubyte 其内容结构如下：

| offset |  type |   bytes   | value |     describe    |
|--------|-------|-----------|-------|-----------------|
| 0x00   | int32 | 0000 0803 | 2051  | Magic Number    |
| 0x04   | int32 | 0000 2710 | 10000 | Number of Image |
| 0x08   | int32 | 0000 001c | 28    | Width           |
| 0x0C   | int32 | 0000 001c | 28    | Height          |
| 0x10   | byte  | ?         | ?     | Pixel data      |
| ...    | ...   | ...       | ...   | Pixel data      |

标签打包文件 train-labels.idx1-ubyte 格式如下：

| [offset] | [type] |  [bytes]  | [value] |      [description]       |
|----------|--------|-----------|---------|--------------------------|
| 0000     | int32  | 0000 0801 |    2049 | magic number (MSB first) |
| 0004     | int31  | 0000 2710 |   10000 | number of items          |
| 0008     | byte   | 09        |       9 | label 9                  |
| 0009     | byte   | 07        |       7 | label 7                  |
| xxxx     | byte   | ??        |         | label ？                 |
| ...      | ...    | ...       |         | ...                      |


MNIST 数据集里的每张图片大小为 28x28 像素，可以用数组来表示一张图片。

标签用大小为 10 的数组来表示，这种编码我们称之为 One hot 独热编码。独热编码使用 N 位代表 N 种状态，任意时候只有其中一位有效。

采用独热编码的例子

- 性别: [0, 1] 代表女，[1, 0] 代表男。
- 数字 0-9: [0,0,0,0,0,0,0,0,0,1] 代表 9，[0,1,0,0,0,0,0,0,0,0] 代表 1。

独热编码的优点：

- 能够处理非连续型数值特征
- 在一定程度上也扩充了特征。比如性别本身是一个特征，经过编码以后，就变成了男或女两个特征。

在神经网络中，独热编码其实具有很强的容错性，比如神经网络的输出结果是 [0,0.1,0.2,0.7,0,0,0,0,0,0] 转成独热编码后，表示数字 3。即值最大的地方变为 1，其余均为 0。 [0,0.1,0.4,0.5,0,0,0,0,0,0] 也能表示数字 3。

numpy 中有一个函数，numpy.argmax() 可以取得最大值的下标。


神经网络的重要概念：

- 输入（x）输出（y）、标签（label）

    - 输入是指传入给网络处理的向量，相当于数学函数中的变量。
    - 输出是指网络处理后返回的结果，相当于数据函数中的函数值。
    - 标签是指我们期望网络返回的结果。

    对于识别 MNIST 图片而言，输入是大小为 784（28x28）像素值的向量，输出是大小为 10 的概率向量，概率最大的位置，即预测的数字。

- 损失函数 loss function

    损失函数评估网络模型的好坏，值越大，表示模型越差，值越小，表示模型越好。因为传入大量的训练集训练的目标，就是将损失函数的值降到最小。

    常见的损失函数定义：

    差的平方和 sum((y - label)^2)

        [0, 0, 1] 与 [0.1, 0.3, 0.6] 差的平方和为 0.01 + 0.09 + 0.16 = 0.26
        [0, 0, 1] 与 [0.2, 0.2, 0.6] 差的平方和为 0.04 + 0.04 + 0.16 = 0.24
        [0, 0, 1] 与 [0.1, 0.0, 0.9] 差的平方和为 0.01 + 0.01 = 0.02

    交叉熵 -sum(label * log(y))

        [0, 0, 1] 与 [0.1, 0.3, 0.6] 的交叉熵为 -log(0.6) = 0.51
        [0, 0, 1] 与 [0.2, 0.2, 0.6] 的交叉熵为 -log(0.6) = 0.51
        [0, 0, 1] 与 [0.1, 0.0, 0.9] 的交叉熵为 -log(0.9) = 0.10

    当 label 为 0 时，交叉熵为 0，label 为 1 时，交叉熵为 -log(y)，交叉熵只关注独热编码中有效位的损失。这样屏蔽了无效位值的变化，无效位的值的变化并不会影响最终结果，并且通过取对数放大了有效位的损失。当有效位的值趋近于 0 时，交叉熵趋近于正无穷大。

- 回归模型

    我们可以将网络理解为一个函数，回归模型，其实是希望对这个函数进行拟合。 比如定义模型为 Y = X * w + b，对应的损失即：

        loss = (Y - labal)^2 = -(X * w - b - label)^2

    这里损失函数用方差计算，这个函数是关于 w 和 b 的二次函数，所以神经网络训练的目的是找到 w 和 b，使得 loss 最小。

    可以通过不断地传入 X 和 label 的值，来修正 w 和 b，使得最终得到的 Y 与 label 的 loss 最小。这个训练的过程，可以采用梯度下降的方法。通过梯度下降，找到最快的方向，调整 w 和 b 值，使得 w * X + b 的值越来越接近 label。

- 学习速率

    简单说，梯度即一个函数的斜率，找到函数的斜率，其实就知道了w和b的值往哪个方向调整，能够让函数值（loss）降低得最快。那么方向知道了，往这个方向调整多少呢？这个数，神经网络中称之为学习速率。学习速率调得太低，训练速度会很慢，学习速率调得过高，每次迭代波动会很大。

- softmax 激活函数

    事实上，计算交叉熵前的 Y 值是经过 softmax 后的，并不影响 Y 向量的每个位置的值之间的大小关系。大致有 2 个作用，一是放大效果，二是梯度下降时需要一个可导的函数。

        def softmax(x):
            import numpy as np
            return np.exp(x) / np.sum(np.exp(x), axis=0)

        softmax([4, 5, 10])
        # [ 0.002,  0.007,  0.991]

Tensorflow 识别手写数字的程序流程：

- 导入 MNIST 数据集；
- 卷积神经网络处理；
- 训练和评估模型；
- 导出模型；

得到训练好的模型后，开始验证模型的性能。可以给模型输入自己的手写数字图片，得到预测结果。



# Captcha 验证码识别
[ImageCaptcha](https://blog.csdn.net/mcyJacky/article/details/88614820)
[Captcha](https://pypi.org/project/captcha/0.1.1/)
[TF- 验证码生成与识别](https://www.jianshu.com/p/01e9826669fa)

captcha不是一个单词而是一串单词的缩写 Completely Automated Public Turing Test to Tell Computers and Humans Apart(全自动区分计算机与人类的图灵测试)。我们都知道图灵测试是什么，captcha的核心思想就是设计出人类能够轻易通过但是计算机无法完成的任务，通过任务的测试结果，来确定进行操作的到底是人类还是计算机。

使用语音验证 AudioCaptcha 需要提供 8-bit 的语言字符声波文件:

    {{language}}-{{character}}-{{username}}.wav
    # exmaple: zh-1-lepture.wav

可以使用百度 Text2Audio 生成 mp3，文件再使用 ffmpeg 转换成标准 wav 格式：

    http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&aue=6&text=abc
    https://cloud.baidu.com/doc/SPEECH/TTS-API/12.5C.E8.BF.94.E5.9B.9E.html

    ffmpeg.exe -i ren voices\raw\0.mp3 -acodec pcm_u8 -ar 8000 voices/0/0.wav
    ffmpeg.exe -i ren voices\raw\1.mp3 -acodec pcm_u8 -ar 8000 voices/1/1.wav
    ffmpeg.exe -i ren voices\raw\2.mp3 -acodec pcm_u8 -ar 8000 voices/2/2.wav
    ffmpeg.exe -i ren voices\raw\3.mp3 -acodec pcm_u8 -ar 8000 voices/3/3.wav
    ffmpeg.exe -i ren voices\raw\4.mp3 -acodec pcm_u8 -ar 8000 voices/4/4.wav
    ffmpeg.exe -i ren voices\raw\5.mp3 -acodec pcm_u8 -ar 8000 voices/5/5.wav
    ffmpeg.exe -i ren voices\raw\6.mp3 -acodec pcm_u8 -ar 8000 voices/6/6.wav
    ffmpeg.exe -i ren voices\raw\7.mp3 -acodec pcm_u8 -ar 8000 voices/7/7.wav
    ffmpeg.exe -i ren voices\raw\8.mp3 -acodec pcm_u8 -ar 8000 voices/8/8.wav
    ffmpeg.exe -i ren voices\raw\9.mp3 -acodec pcm_u8 -ar 8000 voices/9/9.wav

aue =3 ，返回为二进制mp3文件，具体header信息 Content-Type: audio/mp3；
aue =4 ，返回为二进制pcm文件，具体header信息 Content-Type:audio/basic;codec=pcm;rate=16000;channel=1
aue =5 ，返回为二进制pcm文件，具体header信息 Content-Type:audio/basic;codec=pcm;rate=8000;channel=1
aue =6 ，返回为二进制wav文件，具体header信息 Content-Type: audio/wav；

注意aue=4或者6是语音识别要求的格式，但是音频内容不是语音识别要求的自然人发音，所以识别效果会受影响。

    # pip install captcha
    from io import BytesIO
    from captcha.audio import AudioCaptcha
    from captcha.image import ImageCaptcha

    audio = AudioCaptcha(voicedir='/path/to/voices')
    image = ImageCaptcha(fonts=['c:/windows/fonts/BlackoakStd.otf', 'c:/windows/fonts/simhei.ttf'])

    data = audio.generate('234')
    assert isinstance(data, bytearray)
    audio.write('4322344', 'out.wav')

    data = image.generate('1234')
    assert isinstance(data, BytesIO)
    image.write('1234', 'out.png')

验证码生成程序，在路径 `./captcha/` 路径下生成验证码图片，每张验证码图片的内容是从0-9之间的取4位数字，图片的命名为数字的名称，也是训练的标签。

    # pip install captcha
    from captcha.image import ImageCaptcha  
    import numpy as np
    from PIL import Image
    import random
    import sys

    number = ['0','1','2','3','4','5','6','7','8','9']

    def random_captcha_text(char_set=number, captcha_size=5):
        # 验证码列表
        captcha_text = []
        for i in range(captcha_size):
            # 随机选择
            c = random.choice(char_set)
            # 加入验证码列表
            captcha_text.append(c)
        return captcha_text

    # 生成字符对应的验证码
    def gen_captcha_text_and_image():
        # image = ImageCaptcha()
        image = ImageCaptcha(fonts=['c:/windows/fonts/BlackoakStd.otf', 'c:/windows/fonts/simhei.ttf'])
        # 获得随机生成的验证码
        captcha_text = random_captcha_text()
        # 把验证码列表转为字符串
        captcha_text = ''.join(captcha_text)
        # 生成验证码
        captcha = image.generate(captcha_text)
        image.write(captcha_text, './captcha/%s.jpg' % captcha_text)  # 写到文件

    if __name__ == '__main__':
        num = int(sys.argv[1]) if len(sys.argv)>1 and int(sys.argv[1])>0 else 50
        for i in range(num):
            gen_captcha_text_and_image()
            sys.stdout.write('\r>> Creating image %d/%d' % (i+1, num))
            sys.stdout.flush()
        sys.stdout.write('\n')
        sys.stdout.flush()
        print("生成完毕")

传统的机器学习方法，对于多位字符验证码都是采用的 化整为零 的方法：先分割成最小单位，再分别识别，然后再统一。

卷积神经网络方法，直接采用 端到端不分割 的方法：输入整张图片，输出整个图片的标记结果，具有更强的通用性。端到端 的识别方法显然更具备优势，因为目前的字符型验证码为了防止被识别，多位字符已经完全融合粘贴在一起了，利用传统的技术基本很难实现分割了。

把标签转为向量，向量长度为40，训练方法跟0-9手写数字识别类似。比如有一个验证码为0782，它的标签可以转为长度为40-bit的向量：1000000000 0000000100 0000000010 0010000000

二是使用多任务学习的方式，将验证码拆分为4个标签，那就是由四个标签组合而成(one-hot独热编码)，比如有一个验证码为0782

Label0：1000000000
Label1：0000000100
Label2：0000000010
Label3：0010000000

多任务学习一般有两种方式：
1 .Multi-task Learning - 交替训练
2 .Multi-task Learning – 联合训练

    import os
    import tensorflow as tf 
    import numpy as np
    import tensorflow.contrib.slim as slim

    # 数据集路径
    dataset_dir = "../python/captcha/"
    # 测试集占比
    num_test = 0.2
    # 批次大小
    batch_size = 32
    # 周期大小
    epochs = 100
    # 分类数(4个任务，每个任务是10种)
    num_classes = 10
    # 学习率
    lr = tf.Variable(0.001, dtype=tf.float32)
    # 是否是训练状态
    is_training = tf.placeholder(tf.bool)

    # 获取所有验证码图片路径和标签
    def get_filenames_and_classes(dataset_dir):
        photo_filenames = []
        labels = []
        for filename in os.listdir(dataset_dir):
            # 获取文件路径
            path = os.path.join(dataset_dir, filename)
            photo_filenames.append(path)
            label = filename[0:4]
            num_labels = []
            for i in range(4):
                num_labels.append(int(label[i]))
            labels.append(num_labels)
        return photo_filenames, labels

    # 获取图片路径和标签
    photo_filenames,labels = get_filenames_and_classes(dataset_dir)
    photo_filenames = np.array(photo_filenames)
    labels = np.array(labels)

    # 打乱数据
    np.random.seed(10)
    shuffle_indices = np.random.permutation(np.arange(len(photo_filenames)))
    photo_filenames_shuffled = photo_filenames[shuffle_indices]
    labels_shuffled = labels[shuffle_indices]


    # 切分训练集和测试集
    test_sample_index = -1 * int(num_test * float(len(photo_filenames)))
    x_train, x_test = photo_filenames_shuffled[:test_sample_index], photo_filenames_shuffled[test_sample_index:]
    y_train, y_test = labels_shuffled[:test_sample_index], labels_shuffled[test_sample_index:]

    # 图像处理函数
    def parse_function(filenames, labels=None):
        image = tf.read_file(filenames)
        # 将图像解码
        image = tf.image.decode_jpeg(image, channels=3)   
        # resize图片大小
        image = tf.image.resize_images(image, [224, 224])
        # 图片预处理[-1.1]
        image = tf.cast(image, tf.float32) / 255.0
        image = tf.subtract(image, 0.5)
        image = tf.multiply(image, 2.0)
        return image, labels

    # 进行模型训练
    # 定义两个placeholder
    features_placeholder = tf.placeholder(photo_filenames_shuffled.dtype, [None])
    labels_placeholder = tf.placeholder(labels_shuffled.dtype, [None, 4])

    # 创建dataset对象
    dataset = tf.data.Dataset.from_tensor_slices((features_placeholder, labels_placeholder))
    # 处理图片，用函数parse_function 处理数据
    dataset = dataset.map(parse_function)
    # 训练周期
    dataset = dataset.repeat(1)
    # 批次大小
    dataset = dataset.batch(batch_size)

    # 初始化迭代器
    iterator = dataset.make_initializable_iterator()
    # 获得一个批次数据和标签
    data_batch, label_batch = iterator.get_next()

    # 定义alexNet模型
    def alexnet(inputs, is_training=True):
        with slim.arg_scope([slim.conv2d, slim.fully_connected],
                             activation_fn=tf.nn.relu,
                             weights_initializer=tf.glorot_unif orm _initializer(),
                             biases_initializer=tf.constant_initializer(0)):
            
            net = slim.conv2d(inputs, 64, [11, 11], 4)
            net = slim.max_pool2d(net, [3, 3])
            net = slim.conv2d(net, 192, [5, 5])
            net = slim.max_pool2d(net, [3, 3])
            net = slim.conv2d(net, 384, [3, 3])
            net = slim.conv2d(net, 384, [3, 3])
            net = slim.conv2d(net, 256, [3, 3])
            net = slim.max_pool2d(net, [3, 3])
            
            # 数据扁平化
            net = slim.flatten(net)
            net = slim.fully_connected(net, 1024)
            net = slim.dropout(net, is_training=is_training)
            
            net0 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net1 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net2 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net3 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)

        return net0,net1,net2,net3

    # 定义会话
    with tf.Session() as sess:
        # 传入数据得到结果
        logits0,logits1,logits2,logits3 = alexnet(data_batch, is_training)
        # 定义loss
        # sparse_softmax_cross_entropy：标签为整数
        # softmax_cross_entropy：标签为one-hot独热编码
        loss0 = tf.losses.sparse_softmax_cross_entropy(label_batch[:,0], logits0)
        loss1 = tf.losses.sparse_softmax_cross_entropy(label_batch[:,1], logits1)
        loss2 = tf.losses.sparse_softmax_cross_entropy(label_batch[:,2], logits2)
        loss3 = tf.losses.sparse_softmax_cross_entropy(label_batch[:,3], logits3)
        # 计算总的loss
        total_loss = (loss0+loss1+loss2+loss3)/4.0
        # 优化total_loss
        optimizer = tf.train.AdamOptimizer(learning_rate=lr).minimize(total_loss) 
        
        # 计算准确率
        correct0 = tf.nn.in_top_k(logits0, label_batch[:,0], 1) 
        accuracy0 = tf.reduce_mean(tf.cast(correct0, tf.float32))
        correct1 = tf.nn.in_top_k(logits1, label_batch[:,1], 1) 
        accuracy1 = tf.reduce_mean(tf.cast(correct1, tf.float32))
        correct2 = tf.nn.in_top_k(logits2, label_batch[:,2], 1) 
        accuracy2 = tf.reduce_mean(tf.cast(correct2, tf.float32))
        correct3 = tf.nn.in_top_k(logits3, label_batch[:,3], 1) 
        accuracy3 = tf.reduce_mean(tf.cast(correct3, tf.float32))
        # 总的准确率
        total_correct = tf.cast(correct0, tf.float32)*tf.cast(correct1, tf.float32)*tf.cast(correct2, tf.float32)*tf.cast(correct3, tf.float32)
        total_accuracy = tf.reduce_mean(tf.cast(total_correct, tf.float32))
      
        # 所有变量初始化  
        sess.run(tf.global_variables_initializer()) 
        # 定义saver保存模型
        saver = tf.train.Saver()
        
        # 训练epochs个周期
        for i in range(epochs):
            if i%30 == 0:
                # 学习率的调整
                sess.run(tf.assign(lr, lr/3))
            # 训练集传入迭代器中
            sess.run(iterator.initializer, feed_dict={features_placeholder: x_train,
                                                      labels_placeholder: y_train})
            # 训练模型
            while True:
                try:
                    sess.run(optimizer,feed_dict={is_training:True})
                except tf.errors.OutOfRangeError:
                    # 所有数据训练完毕后跳出循环
                    break
            
            # 测试集放入迭代器中
            sess.run(iterator.initializer, feed_dict={features_placeholder: x_test,
                                                      labels_placeholder: y_test})
            # 测试结果
            while True:
                try:
                    # 获得准确率和loss值
                    acc0,acc1,acc2,acc3,total_acc,l = \
                        sess.run([accuracy0,accuracy1,accuracy2,accuracy3,total_accuracy,total_loss],feed_dict={is_training:False})
                    # loss值统计
                    tf.add_to_collection('sum_losses', l)
                    # 准确率统计
                    tf.add_to_collection('accuracy0', acc0)
                    tf.add_to_collection('accuracy1', acc1)
                    tf.add_to_collection('accuracy2', acc2)
                    tf.add_to_collection('accuracy3', acc3)
                    tf.add_to_collection('total_acc', total_acc)
                except tf.errors.OutOfRangeError:
                    # loss值求平均
                    avg_loss = sess.run(tf.reduce_mean(tf.get_collection('sum_losses')))
                    # 准确率求平均
                    avg_acc0 = sess.run(tf.reduce_mean(tf.get_collection('accuracy0')))
                    avg_acc1 = sess.run(tf.reduce_mean(tf.get_collection('accuracy1')))
                    avg_acc2 = sess.run(tf.reduce_mean(tf.get_collection('accuracy2')))
                    avg_acc3 = sess.run(tf.reduce_mean(tf.get_collection('accuracy3')))
                    avg_total_acc = sess.run(tf.reduce_mean(tf.get_collection('total_acc')))
                    print('%d:loss=%.3f acc0=%.3f acc1=%.3f acc2=%.3f acc3=%.3f total_acc=%.3f' % 
                          (i,avg_loss,avg_acc0,avg_acc1,avg_acc2,avg_acc3,avg_total_acc))
                    # 清空loss统计
                    temp = tf.get_collection_ref('sum_losses')
                    del temp[:]
                    # 清空准确率统计
                    temp = tf.get_collection_ref('accuracy0')
                    del temp[:]
                    # 清空准确率统计
                    temp = tf.get_collection_ref('accuracy1')
                    del temp[:]
                    # 清空准确率统计
                    temp = tf.get_collection_ref('accuracy2')
                    del temp[:]
                    # 清空准确率统计
                    temp = tf.get_collection_ref('accuracy3')
                    del temp[:]
                    # 清空准确率统计
                    temp = tf.get_collection_ref('total_acc')
                    del temp[:]
                    # 所有数据测试完毕后跳出循环
                    break
            
        # 保存模型
        saver.save(sess, '../python/models/model.ckpt', global_step = epochs)

    # 部分输出结果:
    # 0:loss=2.303 acc0=0.104 acc1=0.101 acc2=0.094 acc3=0.112 total_acc=0.001
    # 1:loss=2.303 acc0=0.111 acc1=0.101 acc2=0.099 acc3=0.102 total_acc=0.001
    # 2:loss=2.241 acc0=0.224 acc1=0.179 acc2=0.187 acc3=0.230 total_acc=0.001
    # 3:loss=2.181 acc0=0.317 acc1=0.226 acc2=0.245 acc3=0.306 total_acc=0.005
    # 4:loss=2.127 acc0=0.400 acc1=0.283 acc2=0.256 acc3=0.366 total_acc=0.014
    # ...
    # 93:loss=1.509 acc0=0.975 acc1=0.948 acc2=0.922 acc3=0.965 total_acc=0.842
    # 94:loss=1.510 acc0=0.976 acc1=0.948 acc2=0.919 acc3=0.966 total_acc=0.838
    # 95:loss=1.509 acc0=0.976 acc1=0.948 acc2=0.919 acc3=0.965 total_acc=0.836
    # 96:loss=1.509 acc0=0.976 acc1=0.947 acc2=0.922 acc3=0.963 total_acc=0.839
    # 97:loss=1.509 acc0=0.976 acc1=0.948 acc2=0.918 acc3=0.965 total_acc=0.840
    # 98:loss=1.509 acc0=0.977 acc1=0.948 acc2=0.921 acc3=0.964 total_acc=0.843
    # 99:loss=1.508 acc0=0.978 acc1=0.949 acc2=0.923 acc3=0.965 total_acc=0.842

对验证码识别模型进行测试，通过对checkpoint文件进行恢复，并对验证码图片进行测试：

    import os
    import tensorflow as tf 
    import numpy as np
    import tensorflow.contrib.slim as slim
    import matplotlib.pyplot as plt
    from random import choice
    from PIL import Image

    # 数据集路径
    dataset_dir = "./captcha/images/"
    # 数据输入
    inputs = tf.placeholder(tf.float32,[1,224,224,3])
    # 分类数
    num_classes = 10

    # 获取所有验证码图片路径
    def get_filenames(dataset_dir):
        photo_filenames = []
        for filename in os.listdir(dataset_dir):
            # 获取文件路径
            path = os.path.join(dataset_dir, filename)
            photo_filenames.append(path)
        return photo_filenames

    # 获取图片路径
    photo_filenames = get_filenames(dataset_dir)

    # 定义alexnet网络
    def alexnet(inputs, is_training=True):
        with slim.arg_scope([slim.conv2d, slim.fully_connected],
                             activation_fn=tf.nn.relu,
                             weights_initializer=tf.glorot_unif orm _initializer(),
                             biases_initializer=tf.constant_initializer(0)):
            
            net = slim.conv2d(inputs, 64, [11, 11], 4)
            net = slim.max_pool2d(net, [3, 3])
            net = slim.conv2d(net, 192, [5, 5])
            net = slim.max_pool2d(net, [3, 3])
            net = slim.conv2d(net, 384, [3, 3])
            net = slim.conv2d(net, 384, [3, 3])
            net = slim.conv2d(net, 256, [3, 3])
            net = slim.max_pool2d(net, [3, 3])
            
            # 数据扁平化
            net = slim.flatten(net)
            net = slim.fully_connected(net, 1024)
            net = slim.dropout(net, is_training=is_training)
            
            net0 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net1 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net2 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)
            net3 = slim.fully_connected(net, num_classes, activation_fn=tf.nn.softmax)

        return net0,net1,net2,net3

    # 定义会话
    with tf.Session() as sess:

        # 传入数据得到结果
        logits0,logits1,logits2,logits3 = alexnet(inputs, False)
        
        # 预测值 
        predict0 = tf.argmax(logits0, 1)    
        predict1 = tf.argmax(logits1, 1)  
        predict2 = tf.argmax(logits2, 1)  
        predict3 = tf.argmax(logits3, 1)  
      
        # 所有变量初始化  
        sess.run(tf.global_variables_initializer()) 
        # 定义saver载入模型
        saver = tf.train.Saver()
        saver.restore(sess,'models/model.ckpt-100')
        
        for i in range(10):
            filename = choice(photo_filenames)
            # 读取图片
            image = Image.open(filename)  
            # 根据模型的结构resize
            image = image.resize((224, 224))
            image = np.array(image)
            # 图片预处理
            image_data = image/255.0
            image_data = image_data-0.5
            image_data = image_data*2
            # 变成4维数据
            image_data = image_data.reshape((1,224,224,3))
            # 获得预测结果
            pre0,pre1,pre2,pre3 = sess.run([predict0,predict1,predict2,predict3], feed_dict={inputs:image_data})
            # 数据标签
            label = filename.split('/')[-1][0:4]
            plt.imshow(image)
            plt.axis('off')
            plt.title('predict:'+ str(pre0[0])+str(pre1[0])+str(pre2[0])+str(pre3[0]) + '\n' + 'label:' + label)
            plt.show()

