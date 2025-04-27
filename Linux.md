

# 🚩 Linux 族谱

*   [Linux 族谱](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
*   [鸿蒙微内核性能与兼容性实现](https://www.usenix.org/system/files/osdi24-chen-haibo.pdf)


什么是Linux？

Linux 不是一个操作系统，严格来讲，Linux 只是一个操作系统中的内核。内核是什么？内核建立了计算机软件与硬件之间通讯的平台，内核提供系统服务，比如文件管理、虚拟内存、设备I/O等。

通常所说的 Linux 操作系统指 GNU/Linux，即采用 Linux 内核的 GNU 操作系统。是的，操作系统的实际名称是 GNU - GNU’s Not Unix，可以说是一个操作系统又可以说是一种规范。比如，众所周知的 PHP，原名为 Personal HomePage，根据 GNU 的软件命名规则，PHP 现已更名为 PHP: Hypertext Preprocessor 超文本预处理程序。

现在移动设备上大量使用的 Android 操作系统也是基于 Linux 内核开发的。


谁创造了Linux？

Linux 最早由 Linus Torvalds 在1991年开始编写。在这期间，Richard Stallman 创建了 GNU 组织，并不断的编写创建 GNU 程序，程序的许可方式均为 GPL - General Public License。在不断的有程序员和开发者加入到 GNU 组织中后，变造就了今天我们所看到的 Linux，或称 GNU/Linux。


什么是Linux发行版？

正如之前所说的，Linux 只是一个内核。然而，一个完整的操作系统不仅仅是内核而已。所以，许多个人、组织和企业，开发了基于 GNU/Linux 的 Linux 发行版。这其中最著名的便是 Red Hat 公司的 Red Hat 系列以及社区 community 组织的 Debian 系列。

简单的说，在桌面系统上，可分为 Debian 和 RedHat 两大分支，然后 Debian 这一分支到现在比较火的是 Ubuntu 提供了更友好的桌面环境。, RedHat 分支比较火的是 Fedora。最早 Fedora Linux 社区的目标是为 Red Hat Linux 制作并发布第三方的软件包，然而当 Red Hat Linux 免费版停止发布后，Fedora 社区便集成到 Red Hat 赞助的 Fedora 项目，目标是开发出由社区支持的操作系统，事实上，Fedora Project 除了由志愿者组织外，也有许多 Red Hat 的员工参与开发。Red Hat Enterprise Linux 则取代原来的 Red Hat Linux 成为官方收费支持的系统版本。

下面我就简单得介绍一下目前比较著名、流行的 Linux 发行版本。部分资料来源 DistroWatch.com：

Mandriva

Mandriva 原名 Mandrake，最早由Ga&euml;l Duval创建并在1998年7月发布。记得前两年国内刚开始普及Linux时，Mandrake非常流行。说起Mandrake的历史，其实最早Mandrake的开发者是基于Redhat进行开发的。Redhat默认采用GNOME桌面系统，而Mandrake将之改为KDE。而由于当时的Linux普遍比较难安装，不适合第一次接触Linux的新手，所以Mandrake还简化了安装系统。我想这也是当时Mandrake在国内如此红火的原因之一。Mandrake在易用性方面的确是下了不少功夫，包括默认情况下的硬件检测等。

Mandrake的开发完全透明化，包括“cooker”。当系统有了新的测试版本后，便可以在cooker上找到。之前Mandrake的新版本的发布速度很快，但从9.0之后便开始减缓。估计是希望能够延长版本的生命力以确保稳定和安全性。

优点：友好的操作界面，图形配置工具，庞大的社区技术支持，NTFS分区大小变更
缺点：部分版本bug较多，最新版本只先发布给Mandrake俱乐部的成员
软件包管理系统：urpmi (RPM)
免费下载：FTP即时发布下载，ISO在版本发布后数星期内提供
官方主页：http://www.mandrivalinux.com/


Red Hat

国内，乃至是全世界的Linux用户所最熟悉、最耳闻能详的发行版想必就是Red Hat了。Red Hat最早由Bob Young和Marc Ewing在1995年创建。而公司在最近才开始真正步入盈利时代，归功于收费的Red Hat Enterprise Linux（RHEL，Red Hat的企业版）。而正统的Red Hat版本早已停止技术支持，最后一版是Red Hat 9.0。于是，目前Red Hat分为两个系列：由Red Hat公司提供收费技术支持和更新的Red Hat Enterprise Linux，以及由社区开发的免费的Fedora Core。Fedora Core 1发布于2003年年末，而FC的定位便是桌面用户。FC提供了最新的软件包，同时，它的版本更新周期也非常短，仅六个月。目前最新版本为FC 3，而FC4也预定将于今年6月发布。这也是为什么服务器上一般不推荐采用Fedora Core。

适用于服务器的版本是Red Hat Enterprise Linux，而由于这是个收费的操作系统。于是，国内外许多企业或空间商选择CentOS。CentOS可以算是RHEL的克隆版，但它最大的好处是免费！菜鸟油目前的服务器便采用的CentOS 3.4。

优点：拥有数量庞大的用户，优秀的社区技术支持，许多创新
缺点：免费版（Fedora Core）版本生命周期太短，多媒体支持不佳
软件包管理系统：up2date (RPM), YUM (RPM)
免费下载：是
官方主页：http://www.redhat.com/


SUSE

SUSE是德国最著名的Linux发行版，在全世界范围中也享有较高的声誉。SUSE自主开发的软件包管理系统YaST也大受好评。SUSE于2003年年末被Novell收购。

SUSE之后的发布显得比较混乱，比如9.0版本是收费的，而10.0版本（也许由于各种压力）又免费发布。这使得一部分用户感到困惑，也转而使用其它发行版本。但是，瑕不掩瑜，SUSE仍然是一个非常专业、优秀的发行版。

优点：专业，易用的YaST软件包管理系统
缺点：FTP发布通常要比零售版晚1~3个月
软件包管理系统：YaST (RPM), 第三方APT (RPM) 软件库（repository）
免费下载：取决于版本
官方主页：http://www.suse.com/


Debian GNU/Linux

Debian是菜鸟油服务器之前所采用的操作系统。Debian最早由Ian Murdock于1993年创建。可以算是迄今为止，最遵循GNU规范的Linux系统。Debian系统分为三个版本分支（branch）：stable, testing 和 unstable。截至2005年5月，这三个版本分支分别对应的具体版本为：Woody, Sarge 和 Sid。其中，unstable为最新的测试版本，其中包括最新的软件包，但是也有相对较多的bug，适合桌面用户。testing的版本都经过unstable中的测试，相对较为稳定，也支持了不少新技术（比如SMP等）。而Woody一般只用于服务器，上面的软件包大部分都比较过时，但是稳定和安全性都非常的高。菜鸟油之前所采用的是Debian Sarge。

为何有如此多的用户痴迷于Debian呢（包括笔者在内）？apt-get / dpkg是原因之一。dpkg是Debian系列特有的软件包管理工具，它被誉为所有Linux软件包管理工具（比如RPM）最强大的！配合apt-get，在Debian上安装、升级、删除和管理软件变得异常容易。许多Debian的用户都开玩笑的说，Debian将他们养懒了，因为只要简单得敲一下”apt-get upgrade && apt-get update”，机器上所有的软件就会自动更新了……

优点：遵循GNU规范，100%免费，优秀的网络和社区资源，强大的apt-get
缺点：安装相对不易，stable分支的软件极度过时
软件包管理系统：APT (DEB)
免费下载：是
官方主页：http://www.debian.org/


Ubuntu

笔者的桌面电脑便使用的Ubuntu。依照笔者的理解，简单而言，Ubuntu就是一个拥有Debian所有的优点，以及自己所加强的优点的近乎完美的Linux操作系统。Smile Ubuntu是一个相对较新的发行版，但是，它的出现可能改变了许多潜在用户对Linux的看法。也许，从前人们会认为Linux难以安装、难以使用，但是，Ubuntu出现后，这些都成为了历史。Ubuntu基于Debian Sid，所以这也就是笔者所说的，Ubuntu拥有Debian的所有优点，包括apt-get。然而，不仅如此而已，Ubuntu默认采用的GNOME桌面系统也将Ubuntu的界面装饰的简易而不失华丽。当然，如果你是一个KDE的拥护者的话，Kubuntu同样适合你！

Ubuntu的安装非常的人性化，只要按照提示一步一步进行，安装和Windows同样简便！并且，Ubuntu被誉为对硬件支持最好最全面的Linux发行版之一，许多在其他发行版上无法使用，或者默认配置时无法使用的硬件，在Ubuntu上轻松搞定。并且，Ubuntu采用自行加强的内核（kernel），安全性方面更上一层楼。并且，Ubuntu默认不能直接root登陆，必须从第一个创建的用户通过su或sudo来获取root权限（这也许不太方便，但无疑增加了安全性，避免用户由于粗心而损坏系统）。Ubuntu的版本周期为六个月，弥补了Debian更新缓慢的不足。

优点：人气颇高的论坛提供优秀的资源和技术支持，固定的版本更新周期和技术支持，可从Debian Woody直接升级
缺点：还未建立成熟的商业模式
软件包管理系统：APT (DEB)
免费下载：是
官方主页：http://www.ubuntulinux.org/


Gentoo

Gentoo最初由Daniel Robbins（前Stampede Linux和FreeBSD的开发者之一）创建。由于开发者对FreeBSD的熟识，所以Gentoo拥有媲美FreeBSD的广受美誉的ports系统——portage。（Ports和Portage都是用于在线更新软件的系统，类似apt-get，但还是有很大不同）Gentoo的首个稳定版本发布于2002年。

Gentoo的出名是因为其高度的自定制性：因为它是一个基于源代码的（source-based）发行版。尽管安装时可以选择预先编译好的软件包，但是大部分使用Gentoo的用户都选择自己手动编译。这也是为什么Gentoo适合比较有Linux使用经验的老手使用的原因。但是要注意的是，由于编译软件需要消耗大量的时间，所以如果你所有的软件都自己编译，并安装KDE桌面系统等比较大的软件包，可能需要几天时间才能编译完……

优点：高度的可定制性，完整的使用手册，媲美Ports的Portage系统，适合“臭美”的高手使用^^
缺点：编译耗时多，安装缓慢
软件包管理系统：Portage (SRC)
免费下载：是
官方主页：http://www.gentoo.org/


Slackware

Slackware由Patrick Volkerding创建于1992年。算起来应当是历史最悠久的Linux发行版。曾经Slackware非常的流行，但是当Linux越来越普及，用户的技术层面越来越广（更多的新手）后，Slackware渐渐的被新来的人们所遗忘。在其他主流发行版强调易用性的时候，Slackware依然固执的追求最原始的效率——所有的配置均还是要通过配置文件来进行。

尽管如此，Slackware仍然深入人心（大部分都是比较有经验的Linux老手）。Slackware稳定、安全，所以仍然有大批的忠实用户。由于Slackware尽量采用原版的软件包而不进行任何修改，所以制造新bug的几率便低了很多。Slackware的版本更新周期较长（大约1年），但是新版本的软件仍然不间断的提供给用户下载。

优点：非常稳定、安全，高度坚持UNIX的规范
缺点：所有的配置均通过编辑文件来进行，自动硬件检测能力较差
软件包管理系统：Slackware Package Management (TGZ)
免费下载：是
官方主页：http://www.slackware.com/


Knoppix

由德国的Klaus Knopper开发的Knoppix，是一个基于Debian的发行版。Knoppix严格算起来是一款LiveCD Linux，所谓的LiveCD就是整个操作系统都在一张光盘上，只要开机从光盘启动，就能拥有一个完整的Linux系统！无需安装！当然，Knoppix也能够非常轻松的安装到硬盘上。其强大的硬件检测能力、系统修复能力、即时压缩传输技术，都令人大加称赞。可以说，在LiveCD界，Knoppix是无人能及的！

优点：无需安装可直接运行于CD上，优秀的硬件检测能力，可作为系统急救盘使用
缺点：LiveCD由于光盘的数据读取速度限制导致性能大幅下降
软件包管理系统：APT (DEB)
免费下载：是
官方主页：http://www.knoppix.com/


MEPIS

MEPIS由Warren Woodford在2003年建立。MEPIS虽然刚建立不久，但是迅速的传播在Linux用户间。简单来说，MEPIS是一个集合了Debian Sid和Knoppix的产物。用户即能将之当作LiveCD使用，也能使用常规的图形界面进行安装。

MEPIS默认集成安装了Java Runtime Environment、Flash插件、nVidia加速驱动等许多常用的程序。用户可以非常轻松的安装完系统后就直接开始使用，而不用到处寻找资料如何下载、如何安装、如何配置这些软件。这不仅给Linux新手带来了便捷，也给老手们节约了相当多的时间。

优点：LiveCD与常规安装两用，优秀的硬件检测能力，预装了许多实用的软件
缺点：建立时间不长，默认的界面有些寒酸
软件包管理系统：APT (DEB)
免费下载：是
官方主页：http://www.mepis.org/


Xandros

Xandros建立在已经成为历史的Corel Linux之上。当初Corel Linux的公司由于财政上的困难，被迫终止了Corel Linux的开发，而Xandros适时的将Corel Linux部门买下，于2002年10月推出全新的Xandros Desktop。

Xandros的卖点在于极其简单的安装和使用，所以它的市场定位是那些没有任何Linux使用经验的新手，或是习惯使用Windows的用户。Xandros的标准版和增强版都是商业软件，分别售价$40和$99美元。不过你仍然可以在这里下载到免费的公开发行版。

优点：适合完全没有经验的新手，安装完以后就能立即投入使用，自带非常不错的工具
缺点：商业软件
软件包管理系统：Xandros Networks (DEB) 或 APT (DEB) （可选，但不提供技术支持）
免费下载：公开发行版
官方主页：http://www.xandros.com/


FreeBSD

首先要强调的是：FreeBSD不是一个Linux系统！ 可是，为什么笔者要介绍FreeBSD呢？因为FreeBSD的用户也相当多，其许多特性都与Linux相类似。事实上，Linux和BSD（Berkeley Software Distribution）均是UNIX的演化分支。并且，Linux中相当多的特性和功能（比如用于配置DNS的Bind软件）都是取自于BSD的。而FreeBSD便是BSD家族中最出名，用户数量最多的一个发行版。MEZOC之前所采用的便是FreeBSD系统。

FreeBSD建立于1993年，拥有相当长的历史。FreeBSD拥有两个分支：stable和current。顾名思义，stable是稳定版，而current则是添加了新技术的测试版。另外，FreeBSD会不定期的发布新的版本，称为RELEASE，stable和current均有自己的RELEASE版本。比如4.11-RELEASE和5.3-RELEASE，请注意，这并不代表后者比前者的版本新。这仅仅代表前者（数字小的版本）是stable版本，后者（数字大的版本）是current版本。

FreeBSD除了作为服务器系统外，也适合桌面用户。不过，考虑到软件方面的兼容性，一般用户选择FreeBSD作为桌面系统不是很明智。作为服务器而言，FreeBSD是相当优秀的。曾经有人说过，同样的服务器硬件配置，运行同样的一个vBulletin论坛，FreeBSD所用的资源要比Linux少。这也是为什么许多空间商极力推崇FreeBSD的原因。Smile

优点：速度快，非常稳定，优秀的使用手册，Ports系统
缺点：比起Linux而言对硬件的支持较差，对于桌面系统而言软件的兼容性是个问题
软件包管理系统：Ports (TBZ)
免费下载：是
官方主页：http://www.freebsd.org/



# 🚩 GUI 图形界面架构

*   https://www.x.org/wiki/
    The X.Org project provides an open source implementation of the X Window System. 

*   [Xorg Sources Download](https://www.x.org/wiki/Releases/Download/)
*   [The (Re)Architecture of the X Window System](https://www.kernel.org/doc/ols/2004/ols2004v1-pages-227-238.pdf)
*   [X.Org Development](https://www.x.org/wiki/Development/)
*   [The X New Developer’s Guide](https://www.x.org/wiki/guide/)
*   [The X New Developer’s Guide: X Window System Concepts](https://www.x.org/wiki/guide/concepts/)
*   [X Window System Version 11 Release 7.7](https://www.x.org/releases/X11R7.7/)
*   [X Window System Protocol](https://www.x.org/releases/X11R7.7/doc/xproto/x11protocol.html)
*   [Wayland](https://wayland.freedesktop.org/)
*   [Open Source Desktop Technology Road Map](https://wiki.freedesktop.org/xorg/Development/Documentation/Obsolescence/roadmap-2-clean.pdf)
*   [FreeBSD Handbook - Chapter 5. The X Window System](https://docs.freebsd.org/en/books/handbook/book/#x11)
*   [The Wayland Protocol](https://wayland-book.com)

X Window Server 图形系统起源于 1984 年，是 UNIX 操作系统上基于位图显示的图形用户界面系统。
它定义了一种客户端/服务器架构，运行在本地、远程主机上的的应用程序的 GUI 数据发送到服务器，图形
服务器负责向硬件绘制图形界面。当前最新版本为 11，因此双简称为 X、X11 或者 X Window 窗口系统。
其核心是服务器端口（X Server），负责与计算机的显示硬件通信，并管理输入设备的事件。它的所有绘图
行为都是根据 X Protocol 文档所述的请求（Requests）规范进行，也就是客户端请服务器进行绘图。
文档还定义了数十种服务器与客户端之间的事件。

    Definitive Guides to the X Window System:
        Volume 0:X Protocol Reference Manual
        Volume 1:Xlib Programming Manual
        Volume 2:Xlib Reference Manual
        Volume 3M:X Window System User's Guide
        Volume 4M:X Toolkit Intrinsics Programming Manual
        Volume 5:X Toolkit Intrinsics Reference Manual
        Volume 6A:Motif Programming Manual
        Volume 7A:XView Programming Manual
        Volume 8:X Window System Administrator's Guide

X Window 图形程序基本运行过程：

- 用户通过鼠标键盘对 X server 下达操作命令 
- X server 利用 Event 传递用户操作信息给 X client 
- X client 运算相应的程序运算 
- X client 利用 Request 传回所要显示的结果 
- X server 将结果显示在屏幕上

X Window System 使用 C/S 结构设计的好处：

- 采用 C/S 架构可以解耦，client 可以采用任意语言开发，只要符合 X11 Protocol 要求。
- 资源统一管理，方便共享。X server 接管硬件及输入事件，clinet 可以方便共享使用，也可主动给各个 clients 发消息。
- 远程显示支持，一般来说 server 和 client 是在同一台电脑上，在不同网络的电脑上运行就是远程登录。

客户端（X client）通常是各类 GUI 应用，例如 Firefox 浏览器、xterm、xclock 等等。屏幕（screen）
是逻辑概念上的屏幕，可以是一台物理显示器、多台物理显示器或者是 VNC 虚拟显示器。客户端与服务端的通信
方式有三种：TCP，unix socket 和共享内存通信。后两种方式仅限于 X client 与 X server 位于同一
主机内运行的情况，无需网络链路径，通信效率更高。这种远程渲染的图形系统也称为远程桌面（Remote Desktop），
但是，远程桌面通常是以位图形式交客户端桌面图像。而更有效率的方案是在服务器端实现绘图逻辑，客户端只
需要很小的网络带宽来传递绘图行为、图形交互事件。

一台电脑上可以运行多个 X server，一个 X server 可以管理多个 screen，一个 screen 又可以对应
单个或多个物理显示器，多个显示器合成一个逻辑 screen。在配置环境变量 DISPLAY 的参数值包含此信息，
其格式为 hostname:display.screen，可以使用 IP 地址表示主机名，本地连接通常省略。加冒号后接
display:screen。例如，localhost:10.0，表示通过 TCP 协议向远程机器自身的第 10 号 X server
显示器发送绘图请求，并将图形绘制到 0 号屏幕上。最简化的配置省略主机和 display，只设置 screen
编号，比如 ":0"，表示连接到本地默认的 X Server。

* https://goteleport.com/blog/x11-forwarding/
* https://unix.stackexchange.com/questions/503806/what-are-x-server-display-and-screen
* https://github.com/Xpra-org/xpra
* https://wiki.x2go.org/doku.php

The XFree86 Project, Inc is a global volunteer organization which produces 
XFree86®, the freely redistributable open-source implementation of the X Window 
System continuously since 1992.

XFree86 runs primarily on UNIX® and UNIX-like operating systems like Linux, 
all of the BSD variants, Sun Solaris both native 32 and 64 bit support, Solaris 
x86, Mac OS X (via Darwin) as well as other platforms like OS/2 and Cygwin.

What XFree86 does, is provide a client/server interface between the display 
hardware (those physical things like the mouse, keyboard, and video displays) 
and the desktop environment, (this is typically called a window manager as it 
deals with how X is displayed i.e. the overall appearance). Yet X it goes 
beyond that and also gives the infrastructure and a standardized application 
interface (API).

All of this which makes XFree86 platform-independent, network-transparent 
and fully extensible. In short, XFree86 is the premier open source X11-based 
desktop infrastructure. Our group's goals and overall purpose are Detailed 
in goals and purpose detailed in our Mission Statement.

*   [XFree86](https://www.xfree86.org/)

Xorg 是 X Window 系统的一个开源实现版本，并已成为大多数 Linux 发行版默认的 X Window 系统实现。
它包含了 X Server、X Client 客户端应用程序以及一系列字体。Xorg 的发展充分利用了现代硬件的发展，
支持 3D 图形加速、高分辨率显示和先进的输入设备处理等功能。现在已经成为 XFree86 的替代产品。Xorg
基金会本身也是从 XFree86 项目组分拆出来的成立的组织，2004 成立以来带领 Xorg 实现快速取得市场认可。

In a period between close to the end of 2003 and beginning of 2004, there were 
attempts from leading XFree86.org project members to apply a few restrictions 
on the existing 1.0 license of the upcoming XFree86 X4.4.0 release. Since not 
all (developers, distributors, hardware vendors) were able or willing to agree 
with and implement that new licensing policy in their code, their development 
process and their products, they consequently split up and rejoined in the form 
of the X.Org Foundation.


Wayland 是一个相对较新的显示服务器协议，旨在提供比传统 X Window 系统更简单、更高效的方法来管理
窗口和处理输入设备。Wayland 不采用与 X Window 系统的客户端/服务器模型，而是直接在服务器中实现
大部分功能，这意味着更少的延迟和更高的性能。Wayland 设计目标是简化架构，提高图形渲染的效率和安全性。
它通过避免不必要的中间处理和减少上下文切换，实现无缝和流畅的图形体验。Wayland 在安全性方面提出改进，
比如通过严格控制应用程序对屏幕内容的访问，以防止信息泄露。

Wayland 和 Xorg 都是用于图形显示的协议和服务器软件，但它们有一些重要的区别。Wayland 更加简洁
和现代化，它设计用于提供更好的性能和更低的延迟。而 Xorg 相对比较复杂，但也更加成熟和稳定。Wayland
在某些方面可能比 Xorg 更加适合于一些特定的应用场景，而对于其他一些特定需求，Xorg 可能仍然是更好的
选择。两者都在不断发展，以满足用户对图形显示的不同需求。

X Window Architecture vs. Wayland Architecture

![X Window Architecture](https://wayland.freedesktop.org/x-architecture.png)
![Wayland Architecture](https://wayland.freedesktop.org/wayland-architecture.png)

X Window 在推出之后快速演化，1987 年其核心协议就已经是第 11 版本，此构架将"提供机制，而非策略"
这个哲学贯彻地非常彻底，以致于核心协议基本稳定，不需要特别大的改动。于是乎，几十年后，到现在，X Window
依然是 X11 R7.7。X Window 核心层之外提供一个扩展层，开发者可以开发相应扩展，来实现自己的扩展协议，
这使得 X11 具有非常良好的可扩展性。核心扩展如下，Modern Extensions To X：

*   XKB - X Keyboard Extension 
*   Xinput 2 - 多点触摸输入支持，MultiPointer X (MPX)
*   Composite - 混成器扩展，用于离屏重绘。
*   RandR and Xinerama - 屏幕缩放、旋转，多屏处理扩展。
*   SYNC - X Synchronization Extension，用于消息同步的扩展。

X Window 系统最初是为哪些只有几 MB 内存的机器设计的，Composite 扩展用于在离屏缓冲内存（off-screen）
中绘图，以避免早期机器因为性能导致的画面频闪等不稳定问题。但是，随着硬件和 Linux 系统的发展，这个
扩展显得累赘了，并且现代机器的显示刷新频率早已经不是几十年前的水平。因此，最新的 Wayland 在架构设计
上将 Compositor 的功能角色整合到了服务端，它就像是 X Server ＋ Window Manager，重新设计的构架
更简单而且高效，它一举解决了 X Window 发展这么多年来积累的、通过"扩展"去解决的那些问题。

RandR 表示 The X Resize, Rotate and Reflect Extension，如其全称所示，是一个用于处理图形
旋转与缩放的扩展。最初 X Window 设计是一个 screen 对应一个用户显示器，为了解决现代多显示配置需要，
引入了 Xinerama 扩展，它可以将多个输出设备对象集合到一个逻辑屏幕，实现界面跨屏伸缩。

Xinerama 实际上在一个扩展中提供了两个密切相关的功能：在 X Server 中的设备之间进行多路复用，以及
允许客户端查询 X Server 以发现每个逻辑屏幕下的设备边界的协议。后来，硬件发展到一个图形适配器驱动
多个输出设备，一显卡配置多个显示接口，也是常见的。Xinerama 协议被重新用于这些设备：这使得能够从
多头卡中检索监视器信息，即使此用例不再需要多路复用功能。

Waylang is  a protocol between a compositor and its clients, not an X server 
and not a fork. The compositor sends input events to the clients. The clients 
render locally and then communicate video memory buffers and information 
about updates to those buffers back to the compositor.

Wayland is a replacement for the X11 window system protocol and architecture 
with the aim to be easier to develop, extend, and maintain.

Wayland is the language (protocol) that applications can use to talk to a 
display server in order to make themselves visible and get input from the 
user (a person). A Wayland server is called a "compositor". Applications 
are Wayland clients.

Wayland also refers to a system architecture. It is not just a server-client 
relationship between a compositor and applications. There is no single common 
Wayland server like Xorg is for X11, but every graphical environment brings 
with it one of many compositor implementations. Window management and the end 
user experience are often tied to the compositor rather than swappable components.

A core part of Wayland architecture is libwayland: an inter-process communication 
library that translates a protocol definition in XML to a C language API. 
This library does not implement Wayland, it merely encodes and decodes 
Wayland messages. The actual implementations are in the various compositor 
and application toolkit projects.

Wayland does not restrict where and how it is used. A Wayland compositor 
could be a standalone display server running on Linux kernel modesetting 
and evdev input devices or on many other operating systems, or a nested 
compositor that itself is an X11 or Wayland application (client). Wayland 
can even be used in application-internal communication as is done in some 
web browsers.

桌面环境（Desktop Environment）是指操作系统上的一种图形化操作环境，在商业服务器上通常不需要这样
的图形界面，服务器的运维活动一般都通过软件终端（Terminal）运行命令的方式进行维护。而个人用户，家庭
或者办公用户则是桌面环境的主要用户。Windows 是微软开发封闭源代码的自带桌面环境的操作系统，相比
Linux 这样的开源操作系统，它的开发建设是通过网络上的众多开发者（估计几百万），集众人之力完成的一个
强大的操作系统，它的诞生源自 Linus 个人的在大学时期的一个小作品，慢慢成长为当前最流行最稳定可靠的
开源操作系统。Linux 本身不含图形界面，因此需要通过社区力量实现桌面环境，这也就是为何 Linux 系统
上的桌面环境繁花入眼，也堪称百花齐放了。

Linux 环境上的图形界面实现丰富多样，从协议、构架层面上的设计到各种不同的具体实现，它们之间不一定
在上层设计与具体实现的分离，也存在构架与实现统一的情况，例如 Wayland，或者 Xfce 轻量级桌面环境。
毫无疑问，GNU/Linux 发行版的桌面环境和窗口管理器正在走向：Wayland 图形服务器替代 X11 (Xorg)。

有了视窗图形系统，还需要有绘制图形界面的构架，例如 Qt 或者 GTK 这些图形框架。通过图形框架，应用
开发人员就可以更快速地制作应用程序，这个过程类似一个组件组装、搭积木的过程。

[GTK](https://docs.gtk.org/gtk4/getting_started.html) 

A feature-rich development tool

GTK has all the features that a widget toolkit needs to have. These features 
make it the most trusted toolkit for developing Linux applications.

Create apps that users just love

Offering a complete set of UI elements, GTK is suitable for projects ranging 
from small one-off tools to complete application suites.

基于 X Window 等图形系统框架之上，Linxu 用户可以有多种桌面环境选择，以用户为中心的桌面环境包括：

*   [GNOME](https://www.gnome.org/)
    GNOME (/ɡnoʊm/) is a desktop environment that aims to be simple and easy 
    to use. It is designed by The GNOME Project and is composed entirely of 
    free and open-source software. The default display is Wayland instead of Xorg.

*   [KDE](https://develop.kde.org/products/frameworks/)

    The KDE Frameworks are add-on libraries for coding applications with Qt.

    The individual Frameworks are well documented, tested and their API style 
    will be familiar to Qt developers.

    Frameworks are developed under the proven KDE governance model with a 
    predictable release schedule, a clear and vendor neutral contributor 
    process, open governance and flexible LGPL or MIT licensing.

    The frameworks are cross-platform and function on Windows, Mac, Android and Linux.

*   [Xfce Desktop Environment](https://xfce.org/?lang=en)

    Xfce is a lightweight desktop environment for UNIX-like operating systems. 
    It aims to be fast and low on system resources, while still being visually 
    appealing and user friendly.

    Xfce embodies the traditional UNIX philosophy of modularity and re-usability. 
    It consists of a number of components that provide the full functionality 
    one can expect of a modern desktop environment. They are packaged separately 
    and you can pick among the available packages to create the optimal personal 
    working environment.

    Another priority of Xfce is an adherence to standards, specifically those 
    defined at freedesktop.org.

Windows 操作系统上也可以使用 WSL 环境使用这些图形界面，可以使用开源的 VcXsrv、Xming，或者收费
软件 MobaXterm（个人版本免费）、Xmanager。


## Xorg Sources [rsync]

Xorg 源代码可以通过 HTTP/FTP 以及 gitlab 或者 rsync 同步工具获取，

*   https://www.x.org/releases/individual/
*   https://ftp.kaist.ac.kr/x.org/X11R7.7/
*   https://gitlab.freedesktop.org/xorg

*   https://dbus.freedesktop.org/doc/dbus-specification.html
*   https://dbus.freedesktop.org/doc/dbus-daemon.1.html
*   [D-Bus Tutorial by Karunesh Johri](https://www.softprayog.in/programming/d-bus-tutorial)

Remote synchronization (rsync) 是一个常用的 Linux 文件同步应用程序，它不仅可以在本地计算机
同步文件，还可以与远程计算机同步文件。它也可以当作文件复制工具，替代 cp 和 mv 命令。与其他文件传输
工具不同（FTP 或 scp），rsync 的最大特点是会检查发送方和接收方已有的文件，仅传输有变动的部分，
默认规则是根据文件大小或修改时间变动。rsync 支持特性：

*   可以镜像保存整个目录树和文件系统文件系统。
*   可以很容易做到保持原来文件的权限、时间、软硬链接等等。
*   无须特殊权限即可安装。
*   快速：首次同步会复制全部内容，后续同步只传输改动文件。使用数据压缩传输，节省带宽。
*   安全：可以使用 scp、ssh 等方式来传输文件，当然也可以通过直接的socket连接。
*   支持匿名传输，以方便进行网站镜像。

总结：一个 rsync 命令相当于 scp、cp、rm 命令，但是比它们命令更胜一筹。

rsync使用方式有三种：

*   Local 本地模式，主机本地之间的数据传输（此时类似于 cp 命令的功能）。
*   Access via remote shell，借助 rcp 或 ssh 等通道来进行远程数据传输（此时类似于 scp 命令的功能）。
*   daemon 守护进程模式，本地主机连接网络远程主机上的 rsync daemon 守护进程进行远程文件传输。

远程同步文件登录 remote 主机要先认证，认证过程中用到的协议有 2 种：ssh 和 rsync 协议。
rsync daemon 默认监听 TCP 873 端口。自带的 rsync:// 协议认证是默认方式，也是常用方式。

注意：rsync-daemon 认证方式，需要服务器和客户端都安装 rsync，但是只需要服务器端启动 rsync 守护
进程服务，同时设置 /etc/rsyncd.conf 配置文件。客户端启动不启动 rsync 服务。

SSH 认证方式下，可通过系统用户进行认证，rsync 通过 ssh 隧道进行传输，类似于 scp 工具。同步操作
不局限于 rsync 中定义的同步文件夹，也不需要用 873 端口进行传输，而使用 SSH 端口传输数据。也不需
要 rsync 服务和配置文件。例如，以下命令启用 SSH 通道同步文件，使用压缩数据传输（-z）和保持文件
归档属性（-a）：

    rsync -avz /SRC -e ssh root@192.168.100.10:/DEST 

    rsync -avz /SRC -e "ssh -p22" root@192.168.100.10:/DEST  

    rsync -avz --delete --exclude=**/stats --exclude=**/error -e "ssh -i /root/rsync/mirror-rsync-key" someuser@example.com:/var/www/

命令基本用法：

    Local:
        rsync [OPTION...] SRC... [DEST]

    Access via remote shell:
        Pull:
            rsync [OPTION...] [USER@]HOST:SRC... [DEST]
        Push:
            rsync [OPTION...] SRC... [USER@]HOST:DEST

    Access via rsync daemon:
        Pull:
            rsync [OPTION...] [USER@]HOST::SRC... [DEST]
            rsync [OPTION...] rsync://[USER@]HOST[:PORT]/SRC... [DEST]
        Push:
            rsync [OPTION...] SRC... [USER@]HOST::DEST
            rsync [OPTION...] SRC... rsync://[USER@]HOST[:PORT]/DEST)

The ':' usages connect via remote shell, while '::' & 'rsync://' usages connect
to an rsync daemon, and require SRC or DEST to start with a module name.

同时包含服务端，因此可以支持 rsync:// 协议进行文件传输。访问的资源使用 module name 指定，
在执行命令时省略 module name 可以获取 rsync 守护程序分配的所有 module 名称列表，就像
ls 命令列表根目录一样：

    rsync rsync://ftp.kaist.ac.kr/
    rsync rsync://ftp.kaist.ac.kr/x.org
    rsync -r -a rsync://ftp.kaist.ac.kr/x.org/X11R7.7/ x.org_X11R7.7

使用 rsync --daemon --help 查看服务端启动命令使用方式。

rsync 支持增量备份，也就是默认只复制有变动的文件。--link-dest 参数用来指定同步时的基准目录，
SRC 目录的文件与基准文件比较，找出变动的部分复制到 DEST 目录。DEST 目录中包含所有文件，实际上，
只有那些变动过的文件是复制的副本，其他没有变动的文件都是指向基准目录文件的硬链接。

注意：x.org 代码文件中使用了符号链接，并且超出了目录层级，所以 rsync 服务器只提供了文档文件。
最新版本 X11R7.7 代码文件链接到了 individual 目录。

1. 如果 SRC 存在链接文件并且没有使用 -a 归档模式或使用 --links，则会提示 skipping non-regular file
2. 如果 SRC 存在子目录并且没有使用 -r 目录递归模式，则会提示 skipping directory

/etc/rsyncd.conf 配置文件参考，注意，只有行首以 # 开始才被认为是注释。后面出现的 # 并不表示
配置文件中的注解，需要在配置文件中删除：

    # GLOBAL PARAMETERS
    log file = /var/log/rsyncd.log      # 日志文件位置，启动 rsync 后自动产生这个文件，无需提前创建
    pidfile = /var/run/rsyncd.pid       # 进程标志文件 pid 的存放位置
    lock file = /var/run/rsyncd.lock    # 支持 max connections 参数的锁文件

    # MODULE PARAMETERS
    [module_test]                       # 自定义同步模块名称 module name 
    path = /tmp/                        # rsync 目标主机数据存放路径，源主机的数据将同步至此目录
    comment = sync etc from client
    dont compress = *.gz *.bz2 *.zip
    uid = root                          # 设置 daemon 作为 root 运行时的文件传输替代账户
    gid = root                          # 设置 daemon 作为 root 运行时的文件传输替代账户组
    port = 873                          # 默认端口
    ignore errors                       # 表示出现错误忽略错误
    use chroot = no                     # 默认为 true，修改为 no，增加对目录文件软连接的备份
    read only = no                      # 设置 rsync 源主机为读写权限
    list = no                           # 不显示 rsync 源主机资源列表
    max connections = 200               # 最大连接数
    timeout = 600                       # 设置超时时间
    auth users = admin                  # 执行数据同步的用户名，多个用户名使用逗号分隔。
    secrets file = /etc/rsyncd.secrets  # 用户认证配置文件，里面保存用户名称和密码，必须手动创建这个文件
    hosts allow = 192.168.0.104         # 允许进行数据同步的源主机 IP 地址，多个地址使用逗号分隔。
    hosts deny = 192.168.110.10         # 禁止数据同步的源主机 IP 地址，多个地址使用逗号分隔。

以上配置文件定义了一个可同步的模块 module_test，使用以下命令就可以和服务器通进行文件同步：

    rsync rsync://localhost/module_test
    rsync rsync://Jeango@localhost/module_test

认证配置包含 auth users 中指定的用户列表，格式为 username:option，如果用户名含空格，那么可以
使用逗号开头表示此配置项只能逗号为分隔符号。默认允许无密码的匿名方式访问，"anonymous rsync"。

    auth users = joe:deny @guest:deny admin:rw @rsync:ro susan joe sam
    auth users = , joe:deny, @Some Group:deny, admin:rw, @RO Group:ro

选项包括：拒绝用户（组）连接 deny，只读访问 ro (read-only) 或者可读写访问 rw (read/write)。

用户账户对应的密码保存在 secrets file 指定的密码本文件中，比如 /etc/rsyncd.secrets，内容格式
为 username:password 或者 @groupname:password，每个账户配置占据一行。密码本在每次验证时会
重新读取，因此更新密码不需要重启服务进程。

注意，必须保证 secrets file 文件拥有者必须和运行 deamon 进程的是同一个账户。假设 root 账户运行
rsync --daemon，则 secrets file 的 owner 也必须是 root，并且必须为读写权限 600。可以设置
strict modes = false 来禁用密码本文件的所有者检查，此功能适用于 Windows 操作系统上运行 rsync。
执行客户端命令连接时，可以通过 --password-file=FILE 指定密码文件，避免手动输入密码。客户端使用
的密码文件不用带用户名，只需要密码。

    chmod 600 /etc/rsyncd.secrets
    chown  admin:Administrators /etc/rsyncd.secrets

可以使用环境变量来设置客户端登录密码，避免手动软件：

    export RSYNC_PASSWORD=your-password

rsync 常见错误：

*   @ERROR: invalid uid  配置不存在的用户名，未配置认证（密码本和认证用户名）情况下设置 uid。
*   @ERROR: invalid gid  不存在相应的用户组。
*   @ERROR: setuid failed 守护进程的账号无权修改 setuid，Operation not permitted。
*   @ERROR: auth failed on module 配置文件没有配置相应的模块。
*   @ERROR: chroot failed   服务器端的目录不存在或无权限，创建目录并修正权限可解决问题。
*   @ERROR: Unknown module  模块名错误，请求的模块与配置文件中定义的模块名不一致。
*   ERROR: password file must not be other-accessible 客户端指定的密码文件可被其它用户访问。

通过 log file 指定的日志文件内容查错，以下是客户端两个命令对应的服务端响应日志记录：

    ==> rsync rsync://localhost/module_test
    2024/10/20 00:08:25 [1864] Global parameter port found in module section!
    2024/10/20 00:08:25 [1864] params.c:Parameter() - Ignoring badly formed line in config file: ignore errors
    2024/10/20 00:08:25 [1864] ::1 is not a known address for "DESKTOP-CBSK60R": spoofed address?
    2024/10/20 00:08:25 [1864] connect from UNKNOWN (::1)
    2024/10/20 00:08:25 [1864] rsync allowed access on module module_test from UNKNOWN (::1)
    2024/10/20 00:08:29 [1864] auth failed on module module_test from UNKNOWN (::1) for OCEAN: password mismatch

    ==> rsync rsync://Jeango@localhost/module_test
    2024/10/20 00:28:26 [1903] Global parameter port found in module section!
    2024/10/20 00:28:26 [1903] params.c:Parameter() - Ignoring badly formed line in config file: ignore errors
    2024/10/20 00:28:26 [1903] ::1 is not a known address for "DESKTOP-CBSK60R": spoofed address?
    2024/10/20 00:28:26 [1903] connect from UNKNOWN (::1)
    2024/10/20 00:28:26 [1903] rsync allowed access on module module_test from UNKNOWN (::1)
    2024/10/20 00:28:28 [1903] rsync on module_test/ from Jeango@UNKNOWN (::1)
    2024/10/20 00:28:28 [1903] building file list
    2024/10/20 00:28:28 [1903] sent 370 bytes  received 29 bytes  total size 441973

可以看到，客户端没有指定用户名时，会自动使用一个账户进行登录，这个账户可能与运行服务端时使用的账户有关，
也可以与客户端当前账户有关，但是有可能会出现 nobody 用户名的情况，原因未明。总结一下，验证失败的原因
大概有以下几种:

*   配置文件中没设置当前登录用户，no matching rule；
*   配置文件中密码本文件名配置错误，no secrets file；
*   用户名正确但使用了错误的密码，password mismatch；
*   设置了用户名，但密码本中没有相应密码，secret not found；

请求服务器资源时，如果没有指定模块名称，那么就是在执行列表请求（module-list）。默认的模块配置
为可列表状态，list = yes。如果设置为 false，并且客户端被 hosts allow" 和 "hosts deny"
配置拒绝时，守护进程会假装模块不存在。如果 reverse lookup 配置为全局禁用、模块中启用时，潜在
的客户端控制 DNS 服务器反向解释依然可以揭示当前连接到相应模块的客户端。

Realize that if "reverse lookup" is disabled globally but enabled for the module, 
the resulting reverse lookup to a potentially client-controlled DNS server may 
still reveal to the client that it hit an existing module. The default is for 
modules to be listable.

配置项 reverse lookup 用于反向域名解析（根据 IP 查询其域名），如不需要记录客户端 IP 地址，可以
禁用它来节省时间，服务端会使用 UNDETERMINED 替代。此功能与 hosts allow 和 hosts deny，以及
日志中的 %h 点位符号有关。此功能（全局配置项）默认启用，可以进行模块级配置，守护进程会在客户端连接
时立即将主机域名反向解释得到其 IP 地址。

配置项 forward lookup 用于正向域名解析（根据域名查询 IP），与 hosts allow/deny 设置的域名相关。

配置文件的配置值设置乎有点混乱，此选项有三套选项值：yes/no, 0/1 or true/false 都是可能的值。
配置文件以行为单位，配置要换行可以使用 \ 结尾对换行符号进行转义。每个配置项使用 = 分隔配置项名称
与配置值。注意，只有首个 = 符号才是配置项分隔符号。

使用 use chroot 配置项将守护进程限制在某个目录内以提高安全性，默认值是 true。缺点是需要 root 权限，
并且不能备份指向 path 外部的符号连接所指向的目录文件。

*   use chroot 选项未设置（unset），默认情况下会尝试启用 chroot，失败时允许守护进程继续（记录警告）。
    一个例外是，当模块的路径中有一个 dot-dir “/./” 分隔符时，这会导致该模块的 unset 被视为 true。
    在 rsync 3.2.7 之前，默认值为 true。新的 unset 默认值使以非 root 用户身份设置 rsync 守护进程
    或在 chroot 失败的系统上运行守护进程变得更加容易。在 rsyncd.conf 中将值显式设置为 true 总是需要 chroot 成功。
*   use chroot = true 表示在传输文件之间将切换到 path 指定的根目录。
*   use chroot = false 表示将 path 路径中的 dot-dir /./ 替代为 /。

    path = /var/rsync/./module1


[X server source layout](https://www.x.org/wiki/Development/)

    Xserver Directory Layout
    XXX: Add more directories, such as miext/ and the hw/kdrive/ subdirectories.

    =========== ================================================================
    Name        Explanation
    dix/        The device independent parts of X, for example the code used for 
                dispatching requests (see Dispatch() in dix/dispatch.c) and handling  
                resources. main() is located in this directory in main.c.
    doc/        Less documentation than would be expected - contains the X server  
                man page and an explanation of the scheduler.
    fb/         Code for doing graphical operations on framebuffer surfaces,  
                for example blitting and compositing images.
    hw/         Hardware dependent code, driver APIs and configuration file operations.
    hw/dmx/     Distributed Multi-Head X code - well documented in hw/dmx/doc/html/index.html.
    hw/kdrive/  The kdrive server and associated code.
    hw/xfree86/ Code associated with unix-like OSes, such as Linux or BSD.
    hw/xquartz/ Mac OS X specific code.
    hw/xwin/    Cygwin/X code, for running on Windows machines.
    include/    Xserver include files lie here.
    mi/         Machine independent code, used for things like high-level graphical  
                operations. Makes calls down to the fb/ code through function pointers  
                in screens, windows or gcs.
    os/         Operating system dependent code that does not control hardware,  
                things like authentication, or processing arguments passed to the  
                server (see ProcessCommandLine() in util.c for example).
    randr/      Code for the RandR extension.
    render/     Code for the Render extension.
    Xext/       Code for various extensions, for example Xinerama and Xv.
    xtrans/     Code for handling network connections.
    =========== ================================================================


# 🐣 WSL - Windows Subsystem for Linux
- [WSL Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [WSL VSCode](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)
- [VSCode Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
- [VSCode Remote Development](https://code.visualstudio.com/docs/remote/wsl)
- [Using C++ and WSL in VS Code](https://code.visualstudio.com/docs/cpp/config-wsl)
- [chmod chown wsl improvements](https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/)
- [linux GTK、KDE、Gnome、XWindows 图形界面](https://www.jb51.net/LINUXjishu/512251.html)
- WSL - Windows Subsystem for Linux & Xfce Desktop https://www.jianshu.com/p/2dd28c78355a

Windows 1607 x64 位版本后提供了 WSL - Windows Subsystem for Linux 功能，即在 Windows
运行的 Linux 开发环境，能原生运行 Linux ELF 格式可执行文件。

WSL 目的是运行 Bash 和 Linux 核心命令行工具，并不包含 GUI 组件，所以 Gnome, KDE 等子系统
不能使用。对于不需要图形的开发，WSL 体验甚至超过了在纯 Linux 下开发，因为节省了 GUI 的消耗，
使得系统意想不到的稳定。而且没有虚拟机那恶心的地址桥接、转换，Windows 的网络通信地址和端口直接
可以在 WSL 上使用。

因为 WSL 是基于代码转译原理实现的 Linux 应用运行，因此 WSL 不支持完整的 GUI 桌面环境，但是，
它至少可以为大部分 Linux 工具提供一个正常 Windows 工作环境。WSL 2 升级后，已经可以实现 X Server
图形界面的支持，号称 WSLg。

Visual Studio Code 开发非常方便，只需要在主机上安装 VSCode 插件包，含有 Remote - WSL 插件，
它可以处理映射到 Linux 系统的 `/mnt/c` 目录，使用 remote-wsl 菜单命令，或打开终端输入 wsl 
即可以进行远程开发。

Remote Development extension pack 插件包：

- Remote - SSH 安全 Shell 可以打开远程系统的文件，包括虚拟机。
- Remote - Containers 提供 sandboxed 工具链和基于窗口的应用。
- Remote - WSL 使用集成于 Windows 的 Linux 子系统功能。 

使用 Sublime Text 也可以结合 wsl 命令使用。

首先，打开 更新和安全 -> 针对开发人员 -> 开发人员模式，然后在 PowerShell 执行命令安装 WSL：

    dism /online /enable-feature /featurename:microsoft-windows-subsystem-linux

打开 Microsoft store 选择 Linxu 系统进行安装。

    wsl -l -v
    wsl --list --verbose
    wsl -l --all

WSL 系统安装目标位置和安装包位置，以 Ubuntuon 系统为例，但是尽量不要直接在 Windows 系统修改
这里的文件，因为它们是按 Linux 系统组织的：

    C:\Users\xxx\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_xxx\LocalState\rootfs
    C:\Program Files\WindowsApps\CanonicalGroupLimited.UbuntuonWindows_xxx

可以通过网络访问 WSL 子系统文件系统，直接在文件资源管理器输入 `\\wsl$` 就可以。

Linux 子系统访问 Windows 寄主系统的文件，只需要到 `/mnt` 挂载点就可以看到 c 盘的文件。

安装 GCC 开发工具：

    wsl
    sudo apt install gcc
    sudo apt install g++

    sudo apt-get install libpng-dev
    sudo apt-get install zlib1g-dev

    sudo apt-get install zlib1g
    sudo apt-get install --reinstall zlibc zlib1g zlib1g-dev

使用 cat 命令生成代码，再编译并运行示例程序：

    cat > demo.c << END
    #include <stdio.h>
    int main()
    {
        printf("\033[5;46;37m%s\033[0m\n", "hello");
    }
    END

    gcc demo.c -o demo && ./demo

`cat >>` 表示附加内容到文件，`cat >` 表示覆盖文件内容，`cat file` 表示打印文件内容。`<< END` 
表示设置一个结束标记，再次输入 END 就会停止 cat 命令。

使用 Sublime 时就要配置以下命令：

    wsl gcc ../src/demo.c -o pr && wsl ./pr

升级到 WSL 2:

    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    wsl --set-default-version 2
    wsl --set-version <distribution name> <versionNumber>

下载文件较大，需要网络快速。安装成功后，打开 PowerShell，键入 bash 并回车，即可进入 Linux 子系统。
使用 lsb_release -a 命令查看 Linux 子系统版本，目前已经支持的子系统如下：

- Ubuntu 16.04 LTS
- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS
- openSUSE Leap 15.1
- SUSE Linux Enterprise Server 12 SP5
- SUSE Linux Enterprise Server 15 SP1
- Kali Linux
- Debian GNU/Linux
- Fedora Remix for WSL
- Pengwin
- Pengwin Enterprise
- Alpine WSL

在 Windows 10 Build 19041，版本号 2004 或更高系统中，可以使用 WSL 2，可以通过 winver 命令查看当前系统版本。

WSL 版本功能对比：

|              Feature               |   WSL 1   |   WSL 2   |
|------------------------------------|-----------|-----------|
| 集成 Windows & Linux               | ✅         | ✅         |
| Fast boot times                    | ✅         | ✅         |
| Small resource foot print          | ✅         | ✅         |
| Managed VM                         | ❌         | ✅         |
| Full Linux Kernel                  | ❌         | ✅         |
| Full system call compatibility     | ❌         | ✅         |
| 运行当前版本 VMWare and VirtualBox  | ✅         | ❌         |
| Performance across OS file systems | ✅         | ❌         |


Linux 子系统的管理：

    wsl -l --all
    wsl --list --running
    wsl --terminate Ubuntu

    wsl --export <Linux_distrib> <export_file>
    wsl --export Ubuntu C:\WSL\Ubuntu.tar

    wsl --import <system_name> <save_path> <import_path>
    wsl --import MyUbuntu C:\WSL\Ubuntu C:\WSL\Ubuntu.tar

    wsl --distribution MyUbuntu
    wsl --unregister MyUbuntu


DrvFs 是 WSL 提供的文件驱动器映射系统，通过它可以装饰各个磁盘分区映射到 `/mnt/c`, `/mnt/d` 等目录上。

    mount -l
    sudo umount /mnt/c
    sudo mount -t drvfs C: /mnt/c -o metadata

启动 WSL，Windows 的硬盘会自动 mount 到 Linux 系统下，但是早期版本所有 Windows 文件的 owner
和 group 都会设置为 root，读写权限则是从 Windows 系统下继承过来。经常可以看到一片绿油油的 777
权限的文件和文件夹列表，这显然和 Linux 系统中的最佳实践不符的，而且对这些文件使用 chmod 或者 chown
是不起作用的，简直没法忍。

或者使用添加 umask 和 fmask 等参数装载：

    sudo mount -t drvfs C: /mnt/c -o metadata,uid=1000,gid=1000,umask=22,fmask=111

这些标记说明，umask=22 和 fmask=111 表示文件和目录有相应的 read/write/execute 权限：

- uid: the user ID used for the owner of all files
- gid: the group ID used for the owner of all files
- umask: an octal mask of permissions to exclude for all files and directories.
- fmask: an octal mask of permissions to exclude for all regular files.
- dmask: an octal mask of permissions to exclude for all directories.


但是每次使用时手动 mount 也太麻烦了，这时正好用上另一个新特性 Automatically Configuring WSL。
把下面 automount 的选项添加到 wsl 配置文件中就可以了。

    sudo cat > /etc/wsl.conf << END
    [automount] 
    enabled = true 
    root = /mnt/ 
    options = "metadata,umask=22,fmask=11" 
    mountFsTab = false 
    END

如果 sudo cat 执行不了，可以使用 sudo vim 进行编辑。

现在重启 WSL 的 console, Windows 硬盘上的文件和文件夹都拥有正常权限了。但是，用 mkdir 命令
创建一个空文件夹，就会发现新的文件夹还是 777 权限。这可能是 wsl 的一个bug (Issue 1801, Issue 352)，
console 默认的 umask 值仍然是 0000。work-around 的方法是在 .profile、.bashrc、.zshrc 
或者其他 shell 配置文件中重新设置一下 umask。

    #Fix mkdir command has wrong permissions
    if grep -q Microsoft /proc/version; then
        if [ "$(umask)" == '0000' ]; then
            umask 0022
        fi
    fi

[WSL 磁盘空间管理](https://learn.microsoft.com/zh-cn/windows/wsl/disk-space)：

    # wsl.exe --system -d <distribution-name> df -h /mnt/wslg/distro

    $ df -h /
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/sdb        251G   23G  217G  10% /

    du -h ~/.local | sort -h
    du -h /var/cache | sort -h

根据查询到的空间占用大头，选择清理相应的安装包缓存空间或垃圾文件，或清理未使用的 Docker 镜像：

    sudo apt-get clean
    sudo apt-get autoclean
    sudo apt-get autoremove

    docker system prune
    docker volume prune
    docker network prune
    docker container prune
    docker image prune -a // -a would clean image without linking a container

查找 Linux 发行版的 .vhdx 文件和磁盘路径

    $path="HKCU:\Software\Microsoft\Windows\CurrentVersion\Lxss"
    (Get-ChildItem -Path $path)[0].GetValue("BasePath") + "\ext4.vhdx"


压缩未曾使用的空间，压缩后大小应该和 df 命令查询到的 Used 所示大小一致：

    > wsl.exe --shutdown
    > diskpart
    DISKPART> select vdisk file="C:\Users\OCEAN\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04LTS_79rhkp1fndgsc\LocalState\ext4.vhdx"

    DiskPart 已成功选择虚拟磁盘文件。

    DISKPART> detail vdisk

        设备类型 ID: 0 (未知)
        供应商 ID: {00000000-0000-0000-0000-000000000000} (未知)
        状态: 已添加
        虚拟大小:  256 GB
        物理大小:   25 GB
        文件名: C:\Users\OCEAN\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04LTS_79rhkp1fndgsc\LocalState\ext4.vhdx
        为子级: 否
        父文件名:
        找不到关联的磁盘号。

    DISKPART> compact vdisk

        100 百分比已完成

        DiskPart 已成功压缩虚拟磁盘文件。

    DISKPART> detach vdisk

        虚拟磁盘服务错误:
        虚拟磁盘已经分离。


## 🐤🐥 GUI - X Window 图形协议
- [The Xlib Manual](https://tronche.com/gui/x/xlib/)
- [Dear imgui](https://github.com/ocornut/imgui)
- [Dear ImGUI 在线演示](https://greggman.github.io/doodles/glfw-imgui/out/glfw-imgui.html)
- [Nuklear UI](https://github.com/Immediate-Mode-UI/Nuklear)
- [Nuklear UI Doc](https://cdn.statically.io/gh/vurtun/nuklear/master/doc/nuklear.html)
- [VcXsrv Windows X Server](https://sourceforge.net/projects/vcxsrv/)
- [WSL Terminal](https://github.com/mskyaxl/wsl-terminal)
- [FVWM - F? Virtual Window Manager](https://www.fvwm.org/)
- [FVWM - Beginners Guide by Jaimos F Skriletz](http://zensites.net/fvwm/guide/)
- [FVWM 简明使用指南](https://docs.huihoo.com/homepage/shredderyin/fvwm_frame.html)
- [Windows Subsystem for Linux GUI](https://github.com/microsoft/wslg?tab=readme-ov-file)

GUI 程序是指某一类带有图形界面的程序，和控制台程序的区别就是图形处理的差别。在传统 DOS 系统中，
可以通过硬件中断的方式设置显卡工作在图形模式下，程序通过写显卡内存数据实现图形显示。

而在现代的操作系统中，通过新的 API 实现，或者通过现成的图形库实现 GUI 程序。如果是 Windows 系统，
可以选择 MFC 或 ALT，或更新的 .Net 框架。

在 Linux 下选择也很多，但 X Window 是通用性最好的一下图形界面协议。

此外，还有大量可跨平台的 GUI 图形库，如基于 OpenGL 的 IMGUI、Nuklear UI 等，还有 Qt、wxWidgets 等。

用 C++ 从零编写 GUI 这种想法是每个好奇者都会有的想法，但是要从头实现一款自己的界面库，你需要了解
界面库是如何运作的，消息机制、绘图机制，字体处理，甚至多语言处理。另外一个层面上讲，程序终归是要依赖
系统运行，底层部分肯定是要基于系统 API 之上。

即使作一层抽象，像 IMGUI 这类直白图形库，也是需要处理与系统的关系的。Immediate Mode GUI 是一种
简化的图形架构，这种类型的更多的适用于显示区域实时刷新的程序里面，应用于游戏界面的实现上，如著名的
游戏引擎 Unity 就是用 IMGUI 模式写的 GUI。

IMGUI 这种实现模式的优势在于他在实现和实用上都会比传统的 Retained Mode GUI，例如 Qt、 MFC 等，
要简单不少，不用去管理图形组件的生存周期。IMGUI 模式没有图形控件对象，不保存任何状态，不用单独的去
实现 UI 和程序间数据的交换，甚至都不需要单独为事件写回调函数。每个控件都通过绘图函数实现，直接在
程序的 Draw() 函数里要哪个控件就调用哪个函数绘图。也因此，在 IMGUI 中实现带状态的图形会显得麻烦，
比如动画控件。

基于系统 API 调用实现 GUI 图形界面，在 Windows 系统中 GUI 编程采用的是消息循环机制，通过 API 
向系统注册窗口类，并设置好消息处理的回调函数，处理好用户与系统 GUI 交互过程中产生的事件，这就是一个
基本程序流程。而 MFC 则是使用各种类帮你组织好了系统 API，这样开始 GUI 程序就会比直接使用 API 
更方便。MFC 作为最经典的 Windows GUI 框架，现在已经不更新了，但是其中的框架思想是值得学习的，
台湾的侯捷老师编写了一本《深入浅出 MFC》可以参考，此书是讲原理更关心 MFC 的框架设计。如果要快速上
手则合适参考李久进的《MFC 深入浅出》 或《Windows 程序设计》。


而 X Window 系统是一个基于网络的图形界面系统，说它是图形协议自然是因为它的架构特别。它于 1984 
年在麻省理工学院开发，有将近 20 年的应用历史，X Window 系统广泛的应用于桌面 Linux（如 Fedora、
Debian、Ubuntu 等），嵌入式 Linux（如 Nokia 的 Maemo、Intel 的 Moblin 等）。随着 Nokia 
和 Intel 高调的将 Maemo 和 Moblin 合并为 Meego，X Window 系统的应用将被推向一个新的高潮。

X Window 是 C/S 架构，涵盖 X Server、X 协议、X Client 三部分内容。X Client 有三种开发模式：
基于 XLib、基于 GTK、基于 Qt。


X Window 图形程序基本运行过程：

- 用户通过鼠标键盘对 X server 下达操作命令 
- X server 利用 Event 传递用户操作信息给 X client 
- X client 运算相应的程序运算 
- X client 利用 Request 传回所要显示的结果 
- X server 将结果显示在屏幕上

X Client 客户端提供界面实现，执行各种 X 程序，创建一些图形相关资源如 XImage；

常见的情况是 X server 与 X client 都在同一台电脑上运行，分别运行于网络上不同的电脑上即远程桌面。
X client 是与硬件无关的，它并不关心你使用的是什么显卡什么显示器什么键盘鼠标，这些只与 X server 
相关。服务器端运行在有显示设备的主机上，控制输入输出，维护字体，颜色等相关资源，为客户端提供 GC、
Pixmap、Window 等资源。例如，使用 XFree86 桌面环境，运行 xf86config 或 xf86cfg 进行的配置
实际上只是与 X server 有关。X protocol 就是 X server 和 X client 之间通信的协议，支持现在
常用的网络通信协议，如 TCP/IP，默认 X server 侦听 tcp 6000 端口。

从控制台进入 X 图形环境一般是用 startx 命令：

    startx [[client] options .....] [-- [server] options ....] 
    xinit [[client] options ] [-- [server] [display] options] 

把上面 [client] 和 [server] 分别称为 client 程序和 server 程序。

X window system 使用 C/S 结构设计的好处：

- 采用 C/S 架构可以解耦，client 可以采用任意语言开发，只要符合 X protocol 要求。
- 资源统一管理，方便共享。X server 接管硬件及输入事件，clinet 可以方便共享使用，也可主动给各个 clients 发消息。
- 远程显示支持，一般来说 server 和 client 是在同一台电脑上，在不同网络的电脑上运行就是远程登录。

常用的 GTK+，Qt 就是很流行的 x toolkit，实现了常用的组件，而 xlib 封装 X 协议中的打包、解包等操作。
所以平时基于 Qt 等框架开发应用的时候，无需理会 X server 的存在。

XLib 就是 C Language X Interface 客户端的 C 语言接口库，它封装了 X 协议，并对应用程序提供方便
使用的 API。使用 X-Lib，应用程序不用直接向服务器发送请求与处理回复。

Windows 10 可以通过 WSL 提供的运行环境安装和运行 X Window 图形系统，常用的 X Server 实现有
Xmanager, Xming, VcXsrv 等：

- Xmanager 是商业软件，需要付费。
- Xming 是开源软件，从 2007 年最后一个免费版本 (6.9.0.31) 之后，就需要捐助才能下载。
- VcXsrv 为开源免费软件，使用方式及界面与 Xming 极为相近。
  https://github.com/marchaesen/vcxsrv

WSL 安装 xfce desktop 软件在后台运行就可以提供 Linux 的图形界面，它的优点是轻量、占用系统资源少：

    sudo apt-get install xfce4-terminal
    sudo apt-get install xfce4

Windows 系统安装 VcXsrv 后，开始菜单里现在出现了一个文件夹 VcXsrv，选择里面的 **XLaunch**，
一路选择下一步，使用 Start no Client 启动服务端。另外，由于软件升级变动，使用 VM 模式，因此，
启动服务端时，勾选上 Disable access control 选项以及输入 -ac 额外参数即可。否则 Broadway
类型显示器就不能成功连接，导致图形服务初始化失败。

数据内容丢失。虽然 Multiple Windows 这种多窗口模式与 Windows 界面集成最好，但是也可以选择
带有标题栏的 One large window 模式，带有标题栏或者不带标题，也可以选择使用全屏模式。Windows
系统的多桌面功能配合使用更佳，通过触摸板的手势可以快速切换 Windows 与 X-Server 界面。可以尝试
Xming，它比 VcXsrc 好在 Multiple 模式下，默认的任务面板不会出现在所有 Windows 桌面上，只在
当前运行的 Xming 的桌面上才会显示。另一个选择是使用 MobaXterm，这是一个多面手，包含 SSH client
和 X server 功能，还有一些附加的网络工具。

安装 xfce 后，使用 `wsl --shutdown` 命令退出 WSL 系统，再重新进入执行 xfce4-session 或者 
startxfce4，**XLaunch** 服务端窗口就会有图形界面。

    $ startx
    xauth:  file /home/jeango/.Xauthority does not exist

    /usr/lib/xorg/Xorg.wrap: Only console users are allowed to run the X server
    
    xinit: giving up
    xinit: unable to connect to X server: Connection refused
    xinit: server error
    Couldn't get a file descriptor referring to the console

    $ xfce4-session --display=192.168.0.104:0
    Authorization required, but no authorization protocol specified
    Unable to init server: Broadway display type not supported: 192.168.0.104:0
    xfce4-session: Cannot open display: 192.168.0.104:0.
    Type 'xfce4-session --help' for usage.

可以将默认显示器配置写入配置文件，IP 地址自行替换为正确值：

    # WSL 1
    echo "export DISPLAY=:0.0" >> ~/.bashrc
    # WSL 2
    echo "export DISPLAY=192.168.0.104:0" >> ~/.bashrc

    export DISPLAY="$(grep nameserver /etc/resolv.conf | sed 's/nameserver //'):0"

成功启动图形界面后，会在 Windows 系统桌面中创建 xfce4-panel 面板，一个默认固定在顶部，另一个
像任务栏一样固定在底部中间位置，可以参考文档对其进行配置。
https://docs.xfce.org/xfce/xfce4-panel/4.14/preferences

声音支持还未实现直接声卡播放，目前只能通过软件将声音数据发送到宿主（Windows）上播放，默认使用的是
PulseAudio，这是用于 Linux，POSIX 和 Windows 系统的网络低延迟声音服务器。配置参考 WSL 社区文档：

*   https://github.com/microsoft/WSL/issues/5816
*   https://www.linuxuprising.com/2021/03/how-to-get-sound-pulseaudio-to-work-on.html

主要是在 WSL 环境配置 PulseAudio 要联接的服务器（Windows），以及服务器端启用 TCP 连接功能：

    # on WSL (Linux)
    # echo 'export PULSE_SERVER=tcp:127.0.0.1' >> ~/.profile
    export WSL2IP=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}')
    export DISPLAY="$WSL2IP":0.0
    export PULSE_SERVER=tcp:"$WSL2IP"

    # on Host (Windows)
    # Download https://pgaskin.net/pulseaudio-win32/
    # Modify config.pa file, add the following configurations:
    # Here, we allow connections from 127.0.0.1 which is the local IP address, 
    # and WSL use the default space (172.16.0.0 - 172.31.255.255) for WSL2.
    load-module module-native-protocol-tcp auth-ip-acl=127.0.0.1;172.16.0.0/12
    load-module module-esound-protocol-tcp auth-ip-acl=127.0.0.1;172.16.0.0/12
    load-module module-waveout sink_name=output source_name=input record=0

请注意，出于安全和隐私考虑，Windows 10（2018年4月更新）似乎限制了对录音设备的访问。也许需要通过
添加 record = 0 来避免 PulseAudio 服务器使用它。则当最后一个客户端断开连接并超时后，服务器将
自动终止自身。也可以设置 exit-idle-time = -1 来避免服务器自动关闭，此选项以秒为单位。

执行 `pulseaudio --start` 检查服务端是否在侦听默认 TCP 端口：

    netstat -ano | grep 4713
    TCP    0.0.0.0:4713           0.0.0.0:0              LISTENING       12012
    TCP    [::]:4713              [::]:0                 LISTENING       12012

使用 PulseAudio 自带的命令播放测试音乐：

    paplay /mnt/c/Music/16.凡人歌.ogg
    paplay -p --server=tcp:localhost /mnt/c/Music/16.凡人歌.ogg
    paplay -p --server=tcp:172.17.54.177 /c/Music/16.凡人歌.ogg

WSL 中执行 `pavucontrol` 命令，如果 PulseAudio 服务器连接不上，就会一直显示：

    Establishing connection to PulseAudio. Please wait...


另外，注意不要在鼠标与触摸板配置中禁用，Setting -> Mouse and Touchpad，在设备列表中有一个
Windows pointer 设备，如果禁用了它就会导致 X-Server 图形界面自动关闭。再次启动前需要修改配置
文件，否则 VcXsrv 服务端会启动后立即闪退。通过 xinput 命令可以查询、配置输入设备。

    $ xinput
    ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ Windows pointer                           id=6    [slave  pointer  (2)]
    ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Windows keyboard                          id=7    [slave  keyboard (3)]

    $ xinput enable 6

此配置为临时性设置，应该将配置写入 /etc/X11/Xsession.d 目录下的配置文件中。也可以尝试在 GUI
界面中双击触发配置写入磁盘文件。 
https://manpages.ubuntu.com/manpages/oracular/en/man5/Xsession.5.html

X11 默认输入配置文件，以及配置文档查询命令如下：

    cat /usr/share/X11/xorg.conf.d/40-libinput.conf

    man xorg.conf

    https://wiki.ubuntu.com/X/Config/Input

Xfce 默认配置只允许 console 用户启动 X-Server。如果您确定无安全隐患并且只关心功能，而不是关心
安全，可以设置为任何人（anybody）都可以使用 root 权限启动 X-Server，因为它具有特权硬件访问权限
并访问大量文件可能会打开一个很大的安全漏洞。文档参考 man Xorg.wrap：

    CONFIG FILE
       Xorg.wrap's  default  behavior  can  be  overridden from the /etc/X11/Xwrapper.config config file. Lines starting with a # in
       Xwrapper.config are considered comments and will be ignored. Any other non empty lines must take the form of key = value.        

       allowed_users = rootonly|console|anybody
               Specify which users may start the X server through the wrapper. Use rootonly to only allow root, use console to  only    
               allow users logged into a physical console, and use anybody to allow anybody.  The default is console.

       needs_root_rights = yes|no|auto
               Configure if the wrapper should drop its elevated (root) rights before starting the X server. Use yes to force execu‐    
               tion as root, no to force execution with all suid rights dropped, and auto to let the wrapper  auto-detect.  The  de‐    
               fault is auto.

       When  auto-detecting  the wrapper will drop rights if kms graphics are available and not drop them if no kms graphics are de‐    
       tected. If a system has multiple graphics cards and some are not kms capable auto-detection may fail,  in  this  case  manual    
       configuration should be used.

配置好 Linux 图形界面后就只可以安装使用 Inkscape 这些工具软件，这款软件在 Windows 环境下真的
卡到没办法使用。官方已经升级到 1.5 版本，但是 Ubuntu 还只提供 0.92 安装包。只能以个人软件包存档
（Personal Package Archive）方式安装。PPA 允许 Linux 用户、应用程序开发人员创建自己的软件
仓库来分发软件。通过 PPA，可以轻松地获得更加新的软件版本或获得官方 Ubuntu 仓库以外的软件。可惜，
WSL 环境下，这些软件并不能使用绘板的压感信号。

    $ sudo apt install inkscape
    Reading package lists... Done
    Building dependency tree       
    Reading state information... Done
    inkscape is already the newest version (0.92.5-1ubuntu1.1).

    # https://inkscape.org/release/inkscape-1.4/gnulinux/ubuntu/ppa/dl/
    sudo add-apt-repository ppa:inkscape.dev/stable
    sudo apt update
    sudo apt install inkscape

可以将 VcXsrv 配置保存到文件，并通过命令行加载：

    if [[ -z "$(tasklist | grep vcxsrv | grep Console)" ]]; then
        "C:\Program Files (x86)\VcXsrv\xlaunch.exe" -run "C:\Users\OCEAN\config.xlaunch" > /c/tmp/xsrv.log 2>&1
    fi

    # "C:\Program Files (x86)\VcXsrv\vcxsrv.exe" :0 -clipboard -multiwindow -ac
    # "C:\Program Files (x86)\Xming\Xming.exe" :0 -clipboard -multiwindow -ac
    # wsl --exec xfce4-session --display=192.168.0.104:0 > /c/tmp/xfce.log 2>&1
    wsl -- xfce4-session --display=192.168.0.104:0 > /c/tmp/xfce.log 2>&1

    srv=$(tasklist | grep Services | grep vcxsrv | awk "{print \$2}")

    if ! [[ -z "$srv" ]]; then
        # taskkill -f -im vcxsrv.exe
        for it in $srv; do taskkill -f -pid $it; done
    fi

不同方式启动 Xfce 会话，消耗的时间会不一样，后台任务执行会等待几分钟的时间才能连接上 X 服务程序：

    wsl xfce4-session --display=192.168.0.104:0
    xfce4-session --display=192.168.0.104:0 &

使用过程中发现，静置 10 分钟左右会出现 Linux 图形应用程序失去事件响应、黑屏，似乎又不是是待机引起
的问题。`Ubuntu Desktop Guide <https://help.ubuntu.com/stable/ubuntu-help/power.html>`__

导致 Xfce 桌面卡死问题可能是屏幕保护程序机制，或者屏幕亮度锁定，因为锁定后无法接收解锁信号，导致
桌面失去响应。可以卸载屏保程序或者调整设置：

    Applications -> Settings -> Light Locker Settings ->
    Automatically lock the session -> Never

    sudo apt purge xfce4-screensaver
    sudo apt autoremove

另外，桌面管理器、面板（panel）也有相应命令来重置：

    // Window Manager (xfwm4) https://docs.xfce.org/xfce/xfwm4/start
    // Panel (xfce4-panel) https://docs.xfce.org/xfce/xfce4-panel/start

    xfwm4 --replace &
    xfce4-panel -r &

The Xfce 4 Window Manager is part of the Xfce Desktop Environment. The command to 
run it in the foreground is xfwm4; to run it in the background use xfwm4 –daemon. 
The window manager is responsible for the placement of windows on the screen, 
provides the window decorations and allows them to be moved, resized or closed.

可以创建 .desktop 桌面的快捷方式用于执行重置：

    [Desktop Entry]
    Version=1.0
    Type=Application
    Name=Repanel
    Comment=Replace panel
    Exec=xfce4-panel -r
    Icon=xfce4-panel
    Path=/
    Terminal=false
    StartupNotify=false

    [Desktop Entry]
    Version=1.0
    Type=Application
    Name=Replace
    Comment=Replace Desktop 
    Exec=xfwm4 --replace &
    Icon=system-reboot
    Path=/
    Terminal=false
    StartupNotify=false

可以将脚本当作 Windows 服务运行，但是脚本不能直接使用 sc 注册为服务，它注册 exe 程序，因此
需要通过脚本解释器来执行脚本。还可以使用“启动”或者 Task Scheduler 功能，或者利用现有的工具
（避免自己实现服务程序）。Microsoft Windows Resource Kits 工具集提供的 instsrv.exe
和 srvany.exe 两个实用工具，或者 Python 中的 pywin32 模块也提供了服务注册功能。PowerShell
可以使用 New-Service 将一个 .ps1 脚本文件注册为服务。`NSSM <https://nssm.cc/download>`__
是一个开源服务程序管理工具实现。使用 Go 语言提供的服务程序模块，可以非常方便地实现自己的服务。

    sc create xlaunch binPath="C:\msys64\usr\bin\mintty.exe C:\vcpkg\xsrv.sh"
    sc create xlaunch binPath="C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File C:\vcpkg\xsrv.ps1" -Description "XLaunch"

    nssm install xsrv "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" "C:\vcpkg\xsrv.ps1"
    nssm edit xsrv
    nssm start xsrv

    New-Service -Name "XLaunch" -BinaryPathName "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File C:\vcpkg\xsrv.ps1"

使用 NSSM 设置 vcxsrv.exe 为服务，如果启动失败，并且服务设置为自动运行，这会导致随着
时间增加，vcxsrv.exe 服务进程也会不断增加，可能是因为尝试重启导致的。

PowerShell 作为一个最新的脚本解释器，它还可以编译和链接的完整 C# 应用到新的可执行文件。例如，
以下此脚本通过内嵌 C# 代码，编译得到一个 hello.exe 可执行程序︰

    $source = @"
    using System;
    class Hello {
        static void Main() {
        while
        Console.WriteLine("Hello World!");
        }
    }
    "@
    Add-Type -TypeDefinition $source -Language CSharp -OutputAssembly "hello.exe" -OutputType ConsoleApplication

    # https://learn.microsoft.com/zh-cn/archive/msdn-magazine/2016/may/windows-powershell-writing-windows-services-in-powershell

Ubuntu 默认源速度如果缓慢，可以切换到阿里源，使用 vim 编辑源配置：

    sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
    sudo vim /etc/apt/sources.list

先备分配置文件，再将配置文件中的内容替换：

- cn.archive.ubuntu.com ---> mirrors.aliyun.com
- security.ubuntu.com ---> mirrors.aliyun.com

vim 的替换 substitute 命令 `:s` 用来查找和替换字符串，语法如下：

    :{作用范围}s/{目标}/{替换}/{替换标志}
    
    :%s/cn.archive.ubuntu.com/mirrors.aliyun.com
    :%s/security.ubuntu.com/mirrors.aliyun.com

保存并退出，执行一下以下代码更新软件包到最新状态。

    sudo apt update
    sudo apt upgrade

安装中文语言包

    sudo apt install language-pack-zh-hans language-pack-zh-hans-base

设置本地化环境变量

    echo "LANG=zh_CN.UTF-8" >> ~/.profile

中文输入法

    sudo apt install fcitx fcitx-pinyin
    echo -e "export XMODIFIERS=@im=fcitx\nexport GTK_IM_MODULE=fcitx\nexport QT_IM_MODULE=fcitx\n" >> .profile


## 🐤🐥 SSH 登录设置

在 Windows WSL 系统上启用 SSH 服务，先适当修改配置文件，更改端口 Port 22 改成 Port，或启用
密码验证 PasswordAuthentication，并创建密钥对：

```sh
$ sudo vi /etc/ssh/sshd_config
$ cd /etc/ssh              
$ sudo ssh-keygen -A
 ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519   
$ sudo /etc/init.d/ssh start
  * Starting OpenBSD Secure Shell server sshd          [ OK ]
$ sudo service ssh restart

# 开机自启设置
# vi /etc/rc.local
# service sshd start
```

启用密码验证就可以使用用户账户登录：

    ssh root@localhost -p 22

未启用密码登录，且未正确配置登录密钥，就可能出现公钥权限问题 Permission denied (publickey).

使用公钥登录需要在服务器中记录受认可的公钥，以下情况都会导致公钥访问权限被拒绝：

- 本地访问远程主机的公钥没有添加或者被取消（无法认证）
- 远程服务器公钥文件夹权限错误，.ssh 和 .ssh/authorized_keys，需要保证只有用户自己有权限，否则验证无效。

使用 ssh-keygen 为本地机器生成的一对秘钥，公钥文件的内容，C:\Users\XXX\.ssh\id_rsa.pub，
应该保存在远程服务器端已认证秘钥文件内 `~/.ssh/authorized_keys`。登录时，注意要指定相应的用户账户。

使用 SSH 客户端登录时，如果需要运行 GUI，那么就需要转发 X Client 和 X Server 之间的数据，X11
协议的所有数据包通过 SSH 加密通道安全转发（X11 Forwarding）。


# 🚩 Debian 编译内核教程
[Debian 参考手册 - 编译内核源代码：Debian 内核团队推荐](https://www.debian.org/doc/manuals/debian-reference/ch09.zh-cn.html#_the_kernel)

    个人拼凑

    基本方法
    先是获取内核源码
    方法1、内核官网下载内核
    官网： 在 kernel 的官网上有三种版本,mainline,stable,longterm
    mainline 是主线版本,最新的,像 linux-3.7 或是 3.8-rc1 stable 是稳定版,像 linux-3.7.1
    longterm 是长期支持版,目前官网上是 2 个,3.0,3.4,再加一个后娘养的 3.2
    还有一个是 eol,当然就是不再支持了,3.5.3.6 就是 eol 了 选那个随便 建议稳定版
    方法2、是用git ,git 的优点是取出很快,不用打补丁,缺点是第一次比较慢
    稳定版 git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git
    老大版 git clone git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
    先装上 git-core 这个软件包 一般默认是 master 这个分支,当然大家可以查看远程分支
    git branch -r 取出的话,可以看根据上面的版本 然后 git checkout 你要的版本
    下次更新 直接 git pull,包下载,包整合,如果是整合失败再手工整合,几率比较小

    首先获取一下root权限

    sudo -s -H
    安装必要的工具

    make gcc gdb bison m4 autoconf automake libtool dpkg-dev libncurses5-dev build-essential kernel-package fakeroot
    可选安装：

    sudo aptitude install libqt3-headers libqt3-mt-dev libqt3-compat-headers libqt3-mt
    这一步安装qt库 实现图型配置 不是必须个人没使用
    找到你内核下载的目录 把源码复制到any directory you like然后tar -jxvf +内核文件名
    然后进到解压目录 ls一下看下几个目录找到跟你下载的内核文件名一样的文件夹
    进到目录 然后配置内核参数

    cp /boot/config-`uname -r` ./.config
    这是用现在的内核配置新内核
    内核配置 make nconfig 自定义配置 nconfig 是在 2.6.35 之后推荐用的,也建议不要再用回以前的menuconfig
    恩 内核编译重要的就是内核配置 这块需要单独拿出来讲 先放一边 如果嫌这样配置麻烦的话可以从最小化配置，make defconfig，再make nconfig或者用make localmodconfig自动精简内核
    接下来就是编译了

    make-kpkg clean
    (sudo)fakeroot make-kpkg --initrd --append-to-version= -内核名字 kernel_image kernel-headers -jn
    n根据gentoo的手册上推荐是线程数+1 这个可以自己根据情况来
    然后等一会就可以了 编译好的内核在上一层目录。包括linux-headers-...-_i386.deb和linux-image-...-i386.deb两个文件，image那个是内核
    切换到上一层目录然后

    (sudo)dpkg -i + 新内核
    ps：打补丁
    我们打补丁一般的目的是为了稳定或者加一些其他功能,比如打上 3.7.1 的补丁 或者加入 realtime 的补丁,打补丁是在主线版本之上的,像 3.7.1 是在 3.7 上面 patch
    可能过几天又出来 3.7.2,也是在 3.7 上的,这时你如果是 3.7.1,要先删除掉 3.7.1 如果是 3.8-rc1,也是在 3.7.0 上面打的,而不是 3.7.1
    打补丁实例,假设以我们下载的是 patch-3.7.1.xz,
    先切换到你的源码目录,接着 xzcat 补丁包的位置/patch-3.7.1.xz | patch -p1
    删除:xzcat 补丁包的位置/patch-3.7.1.xz | patch -p1 -R
    建议下载一个相近的主线版本,然后用补丁包构造出你想要的版本,这样不用一直下载 整包,建议大家用 xz 的压缩包 打补丁这项工作一般是下载完源码后就要做的

    编译方法
    kernel官方的方法，deb-pkg，这个是在上层目录中生成image,header,libc-dev或者也包括 firmware，这个也是生成deb包的，安装就是dpkg -i xx，推荐用这种方法

    命令:make deb-pkg
    现在cpu都是多核的，要快点是这样

    make -j2 deb-ppkg
    j2就很快了，4核的话也可以j4
    如果想知道用多少时间，是这样

    time make -j2 deb-pkg
    通用编译方法
    所谓通用，就是你编好后，也可以放在其他系统，比如gentoo

    make 然后 make modules_install && make install
    但这是以前的方法，现在就算要这样，上面的方法显得太暴力了，现在推荐的是这样：
    make -j2 tar-pkg/make -j2 targz-pkg/make -j2 tarbz2-pkg/make -j2 tarxz-pkg
    这样编译出来是一个tar包/tar再压缩的包，
    安装的时候只要这样 切换到root，然后
    tar xvf 你的包名 -C /
    意思就是把你的包解压到/根目录，这样在/boot下就是你装的文件，还有/lib/modules/下
    最后你要做的是更新下grub，debian更是简单，update-grub
    如果要删除，也很简单

    rm /boot/下面的systemxx vmlinzxx configxx
    还有与之相对应的一些模块

    rm /lib/modules/你要删除版本的文件夹
    然后update-grub
    前提，如果你只是这样编译出来，只有vmlinuz,如果有需要initramfs，还要手动构建initramfs
    如果用deb-pkg包安装，这个是自动构建的 如果你不想要initramfs，看下面
    initramfs
    debian虽然名叫initrd，但是用的是initramfs
    简单一点，就是启动时先构建一个小环境，然后再挂载/这个文件系统
    但是这样一来启动时间会慢些，因为要等～～～比如ext4，ahci编译成模块的时候

    如果不要这样，我们直接从内核启动，那首要条件是下列的一定要编译到内核里
    而不是做为模块，不然内核会恐慌~~~
    Serial ATA and Parallel ATA drivers一定要为内核，在子菜单里你的磁盘控制器驱动也要Y
    SCSI device support里的SCSI device support&&SCSI disk support
    Generic Driver Options->
    Maintain a devtmpfs filesystem to mount at /dev
    Automount devtmpfs at /dev, after the kernel mounted the rootfs
    还有文件系统比如ext4，一定要到内核

    总结
    make deb-pkg和make tar-pkg的优缺点
    deb-pkg的优点：
    安装完后可以用apt来删除，更和谐
    deb-pkg的缺点：
    只能在debian用，而且你安装时自动构建initramfs
    make tar-pkg优点：
    通用，你可以应用在其他的系统，比如arch/gentoo
    不会自动创建initramfs(这个算优点吧，因为没强加给你)
    缺点：
    得手工删除，但其实也不算缺点，就是有点不和谐
    其实就是删除一个文件夹和几个文件

    其他
    内核相关文件只在三个地方
    /boot下面是内核的本体，二进制文件，一般都会自带版本号
    /usr/src下面是内核的源代码文件，不是跟驱动有关的模块等都是根据/usr/src/linux/的软链接来·判断内核的版本的，同时除了linux文件夹外，其他的源代码文件夹一样带版本号
    /lib/modules 内核模块，也是编译好的，也带了版本号。其余的基本就没了
    不工作的内核除了占空间没什么用途，有一个可启动的内核就行了 把没用的删了更新一下grub.cfg就行

# 🚩 编译linux2.6.24

真是每个linux的小版本编译的时候都有不同的问题啊，
最近在看《独辟蹊径品内核》《linux2.6内核标准教程》
用到linux2.6.24.编译的问题汇总到这里

环境

    [root@centos140_11 boot]# gcc --version  
    gcc (GCC) 4.8.3 20140911 (Red Hat 4.8.3-9)  
    Copyright (C) 2013 Free Software Foundation, Inc.  
    This is free software; see the source for copying conditions.  There is NO  
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
      
    [root@centos140_11 boot]# cat /etc/redhat-release   
    CentOS Linux release 7.1.1503 (Core)   
    [root@centos140_11 boot]#   

下载 Linux 2.6.24 原代码
https://www.kernel.org/pub/linux/kernel/v2.6/

解压后
设置menuconfig 选debug

    make O=/home/haoning/rtclinux/websocket/web/jslinux/tmp/linux2.6.24.build/kernel/ menuconfig  


开始编译：

    time make O=/home/haoning/rtclinux/websocket/web/jslinux/tmp/linux2.6.24.build/kernel/ -j10  

遇到问题：

错误1
参考
http://blog.sina.com.cn/s/blog_8f9cdbbd01014lxj.html

    arch/x86/vdso/Makefile  
     19 quiet_cmd_syscall = SYSCALL $@  
     20       cmd_syscall = $(CC) -m elf_x86_64 -nostdlib $(SYSCFLAGS_$(@F)) \  
     21                   -Wl,-T,$(filter-out FORCE,$^) -o $@  


    -m elf_x86_64 换成 -m64

错误2：

    /tmp/cct0Bawg.s: Assembler messages:  
    /tmp/cct0Bawg.s: Error: .size expression for copy_user_generic_c does not evaluate to a constant  
    make[2]: *** [arch/x86/lib/copy_user_64.o] Error 1  
    make[1]: *** [arch/x86/lib] Error 2  
    make: *** [sub-make] Error 2  


参考
http://stackoverflow.com/questions/23194840/linux-2-6-24-kernel-compilation-error-size-expression-for-copy-user-generic-c-d

    arch/x86/lib/copy_user_64.S  
    347 END(copy_user_generic_c)  
    348   
    349     .section __ex_table,"a"  
    350     .quad 1b,3b  
    351     .quad 2b,5b  

换成  

    347 END(copy_user_generic_c)  
    348   
    349     .section __ex_table,"a"  
    350     .quad 1b,3b  
    351     .quad 2b,5b  


错误3：

    kernel/built-in.o: In function `mutex_lock':  
    /home/haoning/rtclinux/websocket/web/jslinux/tmp/linux-2.6.24/kernel/mutex.c:92: undefined reference to `__mutex_lock_slowpath'  
    kernel/built-in.o: In function `mutex_unlock':  
    /home/haoning/rtclinux/websocket/web/jslinux/tmp/linux-2.6.24/kernel/mutex.c:118: undefined reference to `__mutex_unlock_slowpath'  
    make[1]: *** [.tmp_vmlinux1] Error 1  
    make: *** [sub-make] Error 2  


kernel/mutex.c
这个好使，其他的都是扯淡，什么该config参数，什么加__used都不行，需要把static去掉，加锁和解锁的
https://github.com/socketpair/jslinux_reversed/blob/master/contrib/patches/2.6.20_common_fixes.patch

    __mutex_lock_slowpath的两个方法的static去掉
    __mutex_unlock_slowpath的两个方法的static去掉

错误4：

    /scripts/unifdef.c:70:0:  
    /usr/include/stdio.h:678:20: note: previous declaration of ‘getline’ was here  


解决：

    scripts/unifdef.c  
    207 static int              findsym(const char *);  
    208 static void             flushline(bool);  
    209 //static Linetype         getline(void);  
    210 static Linetype         mygetline(void);  
    211 static Linetype         ifeval(const char **);  
    212 static void             ignoreoff(void);  
      
    511     Linetype lineval;  
    512   
    513     for (;;) {  
    514         linenum++;  
    515         //lineval = getline();  
    516         lineval = mygetline();  
    517         trans_table[ifstate[depth]][lineval]();  
    518         debug("process %s -> %s depth %d",  
    519             linetype_name[lineval],  
    520             ifstate_name[ifstate[depth]], depth);  
    521     }  
    522 }  
    523   
    524 /* 
    525  * Parse a line and determine its type. We keep the preprocessor line 
    526  * parser state between calls in the global variable linestate, with 
    527  * help from skipcomment(). 
    528  */  
    529 static Linetype  
    530 //getline(void)  
    531 mygetline(void)  
    532 {     
    533     const char *cp;  
    534     int cursym;  
    535     int kwlen;  


# 🚩 如何编译 Linux 内核
[如何编译 Linux 内核](https://linux.cn/article-9665-1.html?pr)

译自：https://www.linux.com/learn/intro-to-linux/2018/4/how-compile-linux-kernel-0作者： Jack Wallen
原创：LCTT https://linux.cn/article-9665-1.html 译者： Luke

Jack 将带你在 Ubuntu 16.04 服务器上走过内核编译之旅。



曾经有一段时间，升级 Linux 内核让很多用户打心里有所畏惧。在那个时候，升级内核包含了很多步骤，也需要很多时间。现在，内核的安装可以轻易地通过像 apt 这样的包管理器来处理。通过添加特定的仓库，你能很轻易地安装实验版本的或者指定版本的内核（比如针对音频产品的实时内核）。

考虑一下，既然升级内核如此容易，为什么你不愿意自行编译一个呢？这里列举一些可能的原因：

你想要简单了解编译内核的过程
你需要启用或者禁用内核中特定的选项，因为它们没有出现在标准选项里
你想要启用标准内核中可能没有添加的硬件支持
你使用的发行版需要你编译内核
你是一个学生，而编译内核是你的任务
不管出于什么原因，懂得如何编译内核是非常有用的，而且可以被视作一个通行权。当我第一次编译一个新的 Linux 内核（那是很久以前了），然后尝试从它启动，我从中（系统马上就崩溃了，然后不断地尝试和失败）感受到一种特定的兴奋。

既然这样，让我们来实验一下编译内核的过程。我将使用 Ubuntu 16.04 Server 来进行演示。在运行了一次常规的 sudo apt upgrade 之后，当前安装的内核版本是 4.4.0-121。我想要升级内核版本到 4.17， 让我们小心地开始吧。

有一个警告：强烈建议你在虚拟机里实验这个过程。基于虚拟机，你总能创建一个快照，然后轻松地从任何问题中回退出来。不要在产品机器上使用这种方式升级内核，除非你知道你在做什么。

下载内核
我们要做的第一件事是下载内核源码。在 Kernel.org[1] 找到你要下载的所需内核的 URL。找到 URL 之后，使用如下命令（我以 4.17 RC2 内核为例） 来下载源码文件:

wget https://git.kernel.org/torvalds/t/linux-4.17-rc2.tar.gz

在下载期间，有一些事需要去考虑。

安装需要的环境
为了编译内核，我们首先得安装一些需要的环境。这可以通过一个命令来完成：

sudo apt-get install git fakeroot build-essential ncurses-dev xz-utils libssl-dev bc flex libelf-dev bison
务必注意：你将需要至少 12 GB 的本地可用磁盘空间来完成内核的编译过程。因此你必须确保有足够的空间。

解压源码
在新下载的内核所在的文件夹下，使用该命令来解压内核：

tar xvzf linux-4.17-rc2.tar.gz
使用命令 cd linux-4.17-rc2 进入新生成的文件夹。

配置内核
在正式编译内核之前，我们首先必须配置需要包含哪些模块。实际上，有一些非常简单的方式来配置。使用一个命令，你能拷贝当前内核的配置文件，然后使用可靠的 menuconfig 命令来做任何必要的更改。使用如下命令来完成：

cp /boot/config-$(uname -r) .config
现在你有一个配置文件了，输入命令 make menuconfig。该命令将打开一个配置工具（图 1），它可以让你遍历每个可用模块，然后启用或者禁用你需要或者不需要的模块。

图 1: 运行中的 make menuconfig

图 1: 运行中的 make menuconfig

很有可能你会禁用掉内核中的一个重要部分，所以在 menuconfig 期间小心地一步步进行。如果你对某个选项不确定，不要去管它。或者更好的方法是使用我们拷贝的当前运行的内核的配置文件（因为我们知道它可以工作）。一旦你已经遍历了整个配置列表（它非常长），你就准备好开始编译了。

编译和安装
现在是时候去实际地编译内核了。第一步是使用 make 命令去编译。调用 make 命令然后回答必要的问题（图 2）。这些问题取决于你将升级的现有内核以及升级后的内核。相信我，将会有非常多的问题要回答，因此你得预留大量的时间。

图 2: 回答 make 命令的问题

图 2: 回答 make 命令的问题

回答了长篇累牍的问题之后，你就可以用如下的命令安装那些之前启用的模块：

make modules_install
又来了，这个命令将耗费一些时间，所以要么坐下来看着编译输出，或者去做些其他事（因为编译期间不需要你的输入）。可能的情况是，你想要去进行别的任务（除非你真的喜欢看着终端界面上飞舞而过的输出）。

现在我们使用这个命令来安装内核：

sudo make install
又一次，另一个将要耗费大量可观时间的命令。事实上，make install 命令将比 make modules_install 命令花费更多的时间。去享用午餐，配置一个路由器，将 Linux 安装在一些服务器上，或者小睡一会吧。

启用内核作为引导
一旦 make install 命令完成了，就是时候将内核启用来作为引导。使用这个命令来实现：

sudo update-initramfs -c -k 4.17-rc2
当然，你需要将上述内核版本号替换成你编译完的。当命令执行完毕后，使用如下命令来更新 grub：

sudo update-grub
现在你可以重启系统并且选择新安装的内核了。

恭喜!
你已经编译了一个 Linux 内核！它是一项耗费时间的活动；但是，最终你的 Linux 发行版将拥有一个定制的内核，同时你也将拥有一项被许多 Linux 管理员所倾向忽视的重要技能。

从 Linux 基金会和 edX 提供的免费 “Introduction to Linux”[2] 课程来学习更多的 Linux 知识。

via: https://www.linux.com/learn/intro-to-linux/2018/4/how-compile-linux-kernel-0

作者：Jack Wallen[3] 选题：lujun9972[4] 译者：icecoobe[5] 校对：wxy[6]

本文由 LCTT[7] 原创编译，Linux中国[8] 荣誉推出

- [1]: https://www.kernel.org/
- [2]: https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux
- [3]: https://www.linux.com/users/jlwallen
- [4]: https://github.com/lujun9972
- [5]: https://github.com/icecoobe
- [6]: https://github.com/wxy
- [7]: https://github.com/LCTT/TranslateProject
- [8]: https://linux.cn/article-9665-1.html?pr



# 🚩 APT & apt-get
[Debian 参考手册 - 软件包管理](https://www.debian.org/doc/manuals/debian-reference/ch02.zh-cn.html)

一般来说著名的linux系统基本上分两大类：

- RedHat 系列：Redhat、Centos、Fedora 等
- Debian 系列：Debian、Ubuntu 等

RedHat 系列使用包管理工具 yum，常见的安装包格式 rpm，安装命令是 rpm，支持 tar 包。

Debian 系列常见的安装包格式 deb 包，安装命令是 dpkg， 包管理工具是 apt-get，支持 tar 包。

    wget http://mirrors.163.com/debian/pool/main/a/apt/apt_1.9.4_arm64.deb
    wget http://mirrors.kernel.org/ubuntu/pool/main/d/dpkg/dpkg_1.18.4ubuntu1_amd64.deb

rpm 相当于 Windows 中的安装文件，它会自动处理软件包之间的依赖关系。 直接通过rpm命令进行安装删除等操作，最大的优点是自己内部自动处理了各种软件包可能的依赖关系。rpm 一般都是预先编译好的文件，它可能已经绑定到某种 CPU 或者发行版上面了。

tar 只是一种压缩文件格式，所以，它只是把文件压缩打包而已。tar一般包括编译脚本，可以在当前环境下编译，所以具有通用性。 如果你的包不想开放源代码，你可以制作成 rpm，如果开源，用 tar 更方便了。 tar 一般都是源码打包的软件，需要自己解包，然后进行安装三部曲，./configure, make, make install. 来安装软件。

Advanced Package Tool 即 apt-get，是系统的应用程序管理器，最初于 1998 年发布，用于检索应用程序并将其加载到 Debian Linux 系统，当前的稳定版本是 2014 年 10 月发布的 1.0.9.2。Apt-get 流行的原因之一在于其出色的解决软件依赖关系的能力。其通常使用 .deb 格式文件，但经过修改后可以使用 apt-rpm 处理红帽的 RPM - Redhat Package Manager 文件。如果你想要加载的应用需要程序库或另一个应用程序才能正常工作，apt-get 会帮你找到并加载所需的程序库或应用代码。apt-get

Ubuntu 16.04 发布时，一个引人注目的新特性便是 apt 命令的引入。其实早在 2014 年，apt 命令就已经发布了第一个稳定版，只是直到 2016 年的 Ubuntu 16.04 系统发布时才开始引人关注。

随着 apt install package 命令的使用频率和普遍性逐步超过 apt-get install package，越来越多的其它 Linux 发行版也开始遵循 Ubuntu 的脚步，开始鼓励用户使用 apt 而不是 apt-get。

Debian 作为 Ubuntu、Linux Mint 和 elementary OS 等 Linux 操作系统的母板，其具有强健的「包管理」系统，它的每个组件和应用程序都内置在系统中安装的软件包中。Debian 使用一套名为 APT - Advanced Packaging Tool 的工具来管理这种包系统，不过请不要把它与 apt 命令混淆，它们之间是其实不是同一个东西。

在基于 Debian 的 Linux 发行版中，有各种工具可以与 APT 进行交互，以方便用户安装、删除和管理的软件包。apt-get 便是其中一款广受欢迎的命令行工具，另外一款较为流行的是 Aptitude 即这一命令行与 GUI 兼顾的小工具。

常用的 Linux 包管理命令都被分散在了 apt-get、apt-cache 和 apt-config 这三条命令当中。apt 命令的引入就是为了解决命令过于分散的问题，它包括了 apt-get 命令出现以来使用最广泛的功能选项，以及 apt-cache 和 apt-config 命令中很少用到的功能。

简单来说就是：apt = apt-get、apt-cache 和 apt-config 中最常用命令选项的集合。

虽然 apt 与 apt-get 有一些类似的命令选项，但它并不能完全向下兼容 apt-get 命令。也就是说，可以用 apt 替换部分 apt-get 系列命令，但不是全部。

    apt 命令              取代的命令               命令的功能
    apt install         apt-get install         安装软件包
    apt remove          apt-get remove          移除软件包
    apt purge           apt-get purge           移除软件包及配置文件
    apt update          apt-get update          刷新存储库索引
    apt upgrade         apt-get upgrade         升级所有可升级的软件包
    apt autoremove      apt-get autoremove      自动删除不需要的包
    apt full-upgrade    apt-get dist-upgrade    在升级软件包时自动处理依赖关系
    apt search          apt-cache search        搜索应用程序
    apt show            apt-cache show          显示安装细节

当然，apt 还有一些自己的命令：

    apt list            列出包含条件的包（已安装，可升级等）
    apt edit-sources    编辑源列表


apt-get 安装目录和安装路径：

    /var/cache/apt/archives 下载软件保存路径
    /usr/share              系统安装软件一般在
    /usr/bin                可执行的文件在
    /etc                    配置文件在
    /usr/share              文档一般在
    /usr/bin                可执行文件
    /etc                    配置文件
    /usr/lib                lib文件

常用的命令：

    apt-cache search packagename   # 搜索包
    apt-cache show packagename     # 获取包的相关信息，如说明、大小、版本等
    apt-get install packagename    # 安装包
    apt-get -f install             # 修复安装 -f = –fix-missing
    apt-get remove packagename     # 删除包
    apt-get remove packagename --purge      # 删除包，包括删除配置文件等
    apt-get install packagename --reinstall # 重新安装包
    apt-get update                 # 更新源
    apt-get upgrade                # 更新已安装的包
    apt-get dist-upgrade           # 升级系统
    apt-get dselect-upgrade        # 使用 dselect 升级
    apt-cache depends packagename  # 了解使用依赖
    apt-cache rdepends packagename # 是查看该包被哪些包依赖
    apt-get build-dep packagename  # 安装相关的编译环境
    apt-get source packagename     # 下载该包的源代码
    apt-get clean                  # 清理无用的包
    apt-get autoclean              # 清理无用的包
    apt-get check                  # 检查是否有损坏的依赖


ubuntu 默认的PATH为

    PATH=/home/brightman/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games

apt-get install 安装目录是包的维护者确定的，不是用户，dpkg -L +软件包的名字，可以查询这个软件包包含了哪些文件

    $ dpkg -L packagename


在 Debian/Ubuntu 进行 apt-get install 安装软件时，有时候会出现文件锁定问题：

    E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
    E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?

主要是因为 apt 还在运行，还有就是可能 apt 进程被强杀未能删除文件锁，此时的解决方案是找到并且杀掉所有的 apt-get 和 apt 进程，或者手动删除文件锁

    ps -A | grep apt

    sudo kill processnumber
    sudo kill -9 processnumber
    sudo kill -SIGKILL processnumber
    sudo kill -9 processnumber
    sudo kill -SIGKILL processnumber


锁定的文件会阻止 Linux 系统中某些文件或者数据的访问，这个概念也存在于 Windows 或者其他的操作系统中。一旦你运行了 apt-get 或者 apt 命令，锁定文件将会创建于以下位置:

    /var/lib/apt/lists/lock
    /var/lib/dpkg/lock
    /var/lib/dpkg/lock-frontend
    /var/cache/apt/archives/lock

这有助于运行中的 apt-get 或者 apt 进程能够避免被其它需要使用相同文件的用户或者系统进程所打断。当该进程执行完毕后，锁定文件将会删除。

当你没有看到 apt-get 或者 apt 进程的情况下在上面两个不同的文件夹中看到了锁定文件，这是因为进程由于某个原因被杀掉了，因此你需要删除锁定文件来避免该错误。

首先运行下面的命令来移除文件锁：

    sudo rm /var/lib/apt/lists/lock
    sudo rm /var/lib/dpkg/lock
    sudo rm /var/lib/dpkg/lock-frontend
    sudo rm /var/cache/apt/archives/lock

之后像下面这样强制重新配置软件包：

    sudo dpkg --configure -a

接下来，更新你的软件包源列表：

    sudo apt update
    sudo apt-get update

总结一下，对于 Ubuntu（以及它的衍生版）用户在使用 apt-get 或者 apt 也叫 aptitude 命令时遇到的问题，我们已经用两种方法来解决了。



## Debian 10 "buster" 正式发布

在更新日志中，团队首先提到了 Debian 10 支持的架构。据介绍，Debian 10 "buster" 官方支持的架构如下：

- 32 位 PC（i386）和 64 位 PC（amd64）
- 64 位 ARM（arm64）
- ARM EABI（armel） ARMv7（EABI 硬浮点 ABI，armhf）
- MIPS（mips（大端序）和 mipsel（小端序））
- 64 位小端序 MIPS（mips64el）
- 64 位小端序 PowerPC（ppc64el）
- IBM System z（s390x）

据团队介绍，Debian 10 "buster" 提供了多个桌面程序和环境，并包含以下这些桌面环境：Cinnamon 3.8、GNOME 3.30、KDE Plasma 5.14、LXDE 0.99.2、LXQt 0.14、MATE 1.20 和 Xfce 4.12。

值得注意的是，在 Debian 10 中，桌面环境 GNOME 默认使用 Wayland 而不是 Xorg 作为显示服务器。因为 Debian 团队认为 Wayland 拥有更简单和更现代的设计，在安全性方面也更具优势。不过即便如此，Debian 10 还是默认安装了 Xorg 显示服务器，并且可以在启动会话之前选择所使用的显示服务器 —— 选择不同的显示服务器对于使用特定的应用程序会有帮助。

在发布公告中，团队花了很大的篇幅来介绍 Debian 10 在安全方面的改进。他们表示，通过使用 Reproducible Builds 项目，Debian 10 包含的 91％ 以上的源代码包将构建成“位对位一致”(bit-for-bit identical)的二进制包。这是一项重要的验证功能，可保护用户免遭企图恶意篡改编译器和构建网络的攻击。

此外，团队还表示未来 Debian 发布的新版本将包含工具和元数据，以便终端用户也能验证存档中包的来源。

为了照顾那些对安全环境有更高要求的用户，Debian 10 首次默认安装并启用了 AppArmor 安全模块，这是一个用于限制程序访问权限的控制框架，通过给每个程序定义不同的配置文件，来限制程序的访问权限（例如 mount，ptrace 和 signal 权限，或者文件的读、写和执行权限）。

在 Debian 7 "wheezy" 首次引入的 UEFI 启动在此版本中也有了明显的改进。Debian 10 面向 amd64, i386 和 arm64 架构的机器提供了安全引导(Secure Boot)的支持，并且在大多数机器上开箱即用。这意味着用户不再需要通过固件配置来禁用安全启动，可以在 Debian Wiki 的 Secure Boot 页面上了解更多相关信息。

另外，Debian 10 "buster" 也是 Debian 首个提供基于 Rust 的程序的发行版，相关的应用程序包括 Firefox、ripgrep、fd、exa 和大量基于 Rust 的软件库（数量超过 450 个）。buster 提供 rustc 1.34 版本。

Debian 团队还为许多软件包进行了更新，并表示此次更新带来了比上一版本 stretch 更多的软件；buster 包括 13370 个新软件包，软件包的总数达到了 57703 个。

在 Debian 10 中，多数软件包也得到了更新，团队宣称更新了 35532 个软件包（占 stretch 软件包总数的 62%）。不过由于各种原因，有相当数量的软件包（7278 个，占 stretch 软件包总数的 13%）在这次更新中被删除了。我们将不会看到这些包有任何更新，而且在包管理软件中它们会被标记为“过时的”。

Debian Live CD 可直接用光驱进入系统，自带桌面，有 INSTALL 功能直接安装的系统。登陆用户:Debian Live user 密码:live。


国内的下载镜像源有：

官方列表: https://www.debian.org/mirror/list
阿里云镜像站点: https://mirrors.aliyun.com/debian-cd/
中国科技大学: http://mirrors.ustc.edu.cn/debian-cd/
华中科技大学: http://mirrors.hust.edu.cn/debian-cd/
清华大学: https://mirrors.tuna.tsinghua.edu.cn/debian-cd/
网易开源镜像站: http://mirrors.163.com/debian-cd/
华为开源镜像站: https://mirrors.huaweicloud.com/debian-cd/

下载包中 mips 表示是 big-endian 的 mips 架构，mipsel 是 little-endian 的mips架构。他们之间的区别就是内存中存放的数据的字节顺序相反，也就是把低位放在低地址还是高地址。

a) Little-Endian就是低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。
b) Big-Endian就是高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。
c) 网络字节序：TCP/IP各层协议将字节序定义为Big-Endian，因此TCP/IP协议中使用的字节序通常称之为网络字节序。

假设从地址 0x00000000 开始的一个字中保存数据 0x1234abcd，那么 little endian 在内存中的存放的第一个字节就是 0x12。 


# 🚩 shell 脚本编程
- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [Shell Command Language](https://pubs.opengroup.org/onlinepubs/007908799/xcu/shellix.html)
- [GNU Bash Project](https://www.gnu.org/software/bash/)
- [GNU Bash manual - HTML](https://www.gnu.org/software/bash/manual/bash.html.gz)
- [GNU Bash manual - PDF](https://www.gnu.org/software/bash/manual/bash.pdf)
- [bash-5.2-beta.tar.gz](https://ftp.gnu.org/gnu/bash/bash-5.2-beta.tar.gz)
- [bash-doc-3.2.tar.gz](https://ftp.gnu.org/gnu/bash/bash-doc-3.2.tar.gz)
- [Vim 中文手册](https://github.com/yianwillis/vimcdoc)
- [/proc 文件系统](https://www.kernel.org/doc/Documentation/filesystems/proc.txt)
- [Mapping](https://vimguide.readthedocs.io/en/latest/vim.html#mapping)
- [Vim Documentation](https://www.vim.org/docs.php)
- [Vim documentation](https://vimguide.readthedocs.io/en/latest/vim.html)
- [Vim: autocmd.txt](http://vimdoc.sourceforge.net/htmldoc/autocmd.html)
- Linux Command Line and Shell Scripting Bible 3td Edition

精确的解释参见 bash 手册，一般 shell 环境编程除了基本语法外，离不开基本的命令工具配合。

Linux 有很多 shell 可以使用，通过 `chsh` 命令，可以为用户指定一个默认的 shell 解释程序：

- Bourne Shell（/usr/bin/sh, /bin/sh）
- Bourne Again Shell（/bin/bash）
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）

要确定 Shell 类型，有多种方法：

- echo $SHELL 这个内置变量保存相关信息；
- echo $0 这也是内置变量，但不是所有 Shell 都支持；
- 使用 ps 进程查看命令，查看当前运行什么 Shell；
- 输入错误命令，检查错误信息看有没有 Shell 类型信息；
- 查看账户信息文件 cat /etc/passwd 里面登记了用户使用什么 Shell；

Ken Thompson 的 sh 是第一种 Unix Shell，在 Ubuntu 系统上，默认为 bash 解释程序，也就是 Bourne Again Shell，由于易用和免费，Bash 在日常工作中被广泛使用。在一般情况下，Bourne Shell 和 Bourne Again Shell 脚本通用，所以 #!/bin/sh 也可以改为 #!/bin/bash。

Shell 常用命令关键字如下：

1. echo：打印文字到屏幕
2. exec：执行另一个 Shell 脚本
3. read：读标准输入
4. expr：对整数型变量进行算术运算
5. test：用于测试变量是否相等、 是否为空、文件类型等
6. exit：退出

Linux 作为文字为主要交互界面的系统，掌握一个文字编编辑器命令工具的使用非常重要：

- *nano* - 简单易用的编辑器，模仿 UW Pico text editor。
- *vi*   - VIsual editor 是经典的 Linux/UNIX 编辑器，通过键盘在 *Command* 和 *Text* 两种模式下工作。
- *vim*  - VIM - Vi IMproved 是 vi 的加强版本，学习有一定难度，但更强大。
- Visual Studio Code 图形化开发工具
- Sublime Text 图形化开发工具

另外，还有资深用户专用工具 Atom 和 GNU Emacs，比较复杂，因为功能强大。

*Atom* is a popular open-source code/text editor that works across several platforms such as Windows, Mac, or Linux. Atom is also considered to be one of the best Python code editors.

   Pros: Atom has color-coded syntax, a smart autocomplete feature, multiple panes, and a search-and-replace feature. It also has its own package manager for plugins, so you can easily expand its functionality. You can also customize the appearance manually by using themes. A new plugin – called teletype – allows you to share workspaces with other Atom users.

   Cons: Most users will have to tweak the default configuration. Low-spec computers will struggle to run Atom, especially if you load multiple projects.

*GNU Emacs* is a text/code editor for Linux professionals created by Richard Stallman, the founder of the GNU project. Emacs allows you to write code, display a manual, or draft an email from the same interface.

   Pros: It has content-aware editing modes, extensive documentation and a tutorial, incredible language support, and a package manager for extensions. It also offers cross-compatibility with other GNU apps, including an organizer, mail app, calendar, and debugger.

   Cons: It’s not for everyone. You might choose Emacs if you have multiple different tasks and want a standard interface. It’s designed for the Linux power user, so if that’s you, it’s worth a try.

Linux 字符交互界面的多任务基本操作，参考手册 7.1 Job Control Basics：

- 使用 Ctrl-Z 将当前任务切换到后台；
- 使用 *jobs* 命令查询现有手台任务；
- 使用 *fg* Foreground 命令将后台任务调到前台，可以指定 jobs 序号；


作为脚本开发，使用 Vim 是非常方便，先掌握最基本的概念与使用：

- VIM 有多种不同的工作模式，其中 7 种基本模式，但入门只需要学习三种必要模式：
    - *Normal mode*: When typing commands.
    - *Insert mode*:  These are also used in Replace mode.
    - *Command-line mode*: When entering a ":" or "/" command.
- 按 Esc 键进入 Normal mode，这种模式下可以接收命令，打开 vim 时就处于这种模式；
    - 例如，按下 5gg<Enter> 表示跳转到第 5 行，gg 表示跳转命令，行号提前指定，相当于调用一个函数；
    - *hjkl* 四个按键控制光标移动位置，对应 Left、Down、Up、Right 四个方向；
    - *dd* 剪切当前行
    - *y* 复制当前行
    - *p* 粘贴内容
- 按 i 键进入 Insert mode，这种模式下可以往文件中输入字符串；
- 按 : 或 / 进入命令行模式，可以输入各种命令：
    - `:q` 表示 quit 命令，按回车执行以退出 vim 程序；
    - 所有命令加 ! 后缀表示强制执行，例如 `:q!` 不保存文件直接退出；
    - `:w` 保存文件，写入数据到磁盘；
    - 按下 / 进入搜索命令，想要定位到什么位置，就输入对应位置的内容；

使用 Tab 标签方式打开多个文件：

    vim -p some.sh more.sh

设置快捷键提升命令执行效率，修改配置文件 `vim ~/.vimrc` 增加相应的映射配置项目。例如，Tab 切换快捷键 Ctrl+L Ctrl+H 这样设置，<Esc> <CR> 分别表示按下 Esc 和回车键，它们之间就是要执行的命令:

    noremap <Tab> :tabnext<CR>
    noremap <C-L> <Esc>:tabnext<CR>
    noremap <C-H> <Esc>:tabprevious<CR>

设置根据文件类型执行的命令，比如正常模式下 Python 代码执行或 C++ 代码编译，使用 % 引用当前文件。要在编辑模式下使用快捷键，可以使用 :imap 或 :lmap 替代 :nmap 。

以下设置，如果当前文件是 sh 脚本，在 Normal mode 按下 F9 将触发以下行为：

- :w <CR>  执行文件保存命令；
- :! clear <CR> 执行控制台清屏命令；
- :! echo Execute bash: %; bash % <Enter> 执行控制台 echo 命令输出信息，并再执行 bash 调用脚本；

```sh
" Bash script
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType sh :nmap <F9> :w <CR> :! clear <CR> :! echo Execute bash: %; bash % <Enter>

" python commands
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType python :nmap <F9> :! clear <CR> :! python % <Enter>

" C/C++ commands
" Compile : F9 (Below code is used in .vimrc file)
:autocmd FileType c,cpp :nmap <F9> :! rm -r out <CR> :! clear <CR> :! g++ % -o out <Enter>
" Run : Ctrl+F9 (Below code is used in .vimrc file)
:autocmd FileType c,cpp :nmap <C-F9> :! clear <CR> :! ./out <CR>
```

Bash 基本能力展示：

```sh
# A variable may be assigned to by a statement of the form
name=[value]

# 3.5.3 Shell Parameter Expansion
echo Variable with default value: ${var:-80}

# Shell Expansions - brace expansion
# output: ade ace abe
echo a{d,c,b}e

## 3.5.7 Word Splitting
strings="what is bad apple"
printf "%s\n" "$strings"
# what is bad apple
printf "%s\n" $strings
# what
# is
# bad
# apple

## 6.5 Shell Arithmetic
let no++
echo $((no++)) && echo No. is $no
echo $((no++)) > /dev/null

# Variables and Variable Expansion
# Math expression
$ a=2; b=3; echo $((a + b));
$ a=2; b=3; echo $(a + b);
5
# Tilde Expansion
# echo home path
echo ~

# for loop - Single line
for (( i=0 ; i<10 ; i++ )) ; do echo $i ; done

# for loop - Multi lines
for (( i=0 ; i<10 ; i++ ))
do 
    echo $i
done

# if-then-fi
if x=$(ls *.sh); then echo $x; fi

# Funtion definition
hello() { echo hello 1; echo hello 2; }
hello
# hello 1
# hello 2

# Coprocesses
# A coprocess is a shell command preceded by the coproc reserved word. 
# A coprocess is executed asynchronously in a subshell, as if the command had 
# been terminated with the ‘&’ control operator, with a two-way pipe established 
# between the executing shell and the coprocess.
coproc [NAME] command [redirections]

# GNU Parallel
# There are ways to run commands in parallel that are not built into Bash.
# GNU Parallel is a tool to do just that.
# 
# For example, it is easy to replace xargs to gzip all html files in the 
# current directory and its subdirectories:
find . -type f -name '*.html' -print | parallel gzip
```

Bourne shell 虽然可以处理数学表达式，expr 命令，但是特别笨拙，比如乘法，星号可能被解释成通配符号，需要转义，还有小数运算需要借助 bc 这样的工具：

    expr 1 \* 5

    echo "0.3 * 0.6"|bc


以下脚本展示了变量赋值如何与命令当前运行环境关联：

- 变量命名不能使用 $，赋值使用等号，并且不能有空格；
- 引用变量使用 $ 前缀在变量名之前；
- 单引号字符串内的变量不会在当前运行环境中插值；
- 变量赋值与命令同行，不会修改当前运行环境，只修改相关命令的 current execution environment

```sh
x=red
echo $x

export x
sh -c 'echo $x'

x=blue sh -c "echo red $x"
x=blue sh -c 'echo blue $x'

echo $x
```

编写脚本文件，以下脚本文件演示了：

- 协程的使用，异步多任务使用 & 后缀在命令、命令组后；
- 使用 wait 等待任务完成；
- 傅 RANDOM 随机变量，它的值为 [0, 32767]；
- 使用 Command Substitution 为其它命令提供参数，并写在其参数出现的位置中：

```sh
#!/bin/bash

echo Start `date +%X`

for((i=0; i<5; i++));
do
  {
    sleep `expr $RANDOM / 8192`
    echo "Step $i"
  }& # corproces
done
wait # wait until corproces done

echo "Done (bell\a) `date +%X`"
```

命令替换有两种形式，Command substitution：

    $(command)

    or

    `command`

类似的还有进行整数运算的 Arithmetic Expansion

    $(( expression ))

```sh
# You can use od to get numbers out of /dev/random and /dev/urandom.
tr -cs '[:digit:]' '[\n*]' </dev/urandom
# 2 byte unsigned decimal integers,
$ od -vAn -N2 -tu2 < /dev/urandom
24352
# 1 byte signed decimal integer,
$ od -vAn -N1 -td1 < /dev/urandom
-78
# 4 byte unsigned decimal integers,
$ od -vAn -N4 -tu4 < /dev/urandom
3394619386
# man od for more information on od.

dd if=/dev/urandom of=~/urandom_test count=4 bs=1024
# Creates a file containing 4K of random bytes.

head -30 /dev/urandom > ~/urandom_test3
# Will write 30 lines of random bytes

head -c 30 /dev/urandom > random.bin
# to read 30 random bytes into a file random.bin
```

在脚本中嵌入二进制数据，参考 Clojue-lsp 的操作：

```sh
#!/usr/bin/env bash
# https://github.com/clojure-lsp/clojure-lsp/releases/#clojure-lsp.bat
exec java -Xmx2g -server -jar $0 "$@"
@echo off
java -Xmx2g -server -jar "%~f0" %*
goto :eof
PK^C^D^T^@^H^H^H^@^Fk<B7>T ...
```

二进制数据转换，使用 xxd、awk 和 bc 等等工具：

```sh
# https://www.linux-magazine.com/Online/Features/Binary-Data-in-Bash
echo -n "hello" | xxd -p
68656c6c6f0d0a
echo -n "6162" | xxd -p -r
ab

pack() {
  echo -n "$1" | xxd -p -r
}
unpack() {
  echo -n "$1" | xxd -p
}

tobin() {
  echo -n "$1" | xxd -b -g0 | awk '{ printf("%s",$2) }'
}

hexadd() {
  echo "obase=16;ibase=A;$((16#$1))+$2" | bc
}
```


## ==⚡ bash & Yacc grammar
- [parse.y - Yacc grammar for bash](bash-5.1\parse.y)
- [Shell Command Language](https://pubs.opengroup.org/onlinepubs/007908799/xcu/chap2.html)

这部分内容需要编译原理基础，但掌握 bash 的语法定义与解析器的实现，这会让人有一种庖丁解牛的快意。

作为脚本编程工具，bash 也需要实现解器器，在实现上使用了 Lex/Yacc 语法解器生成工具，语法定义文件在于 *parse.y*。

Bash 文档本身不会讲解这部分内容，但提供的源代码可以解析一切，Talk is cheep, show the code!

在命令行输入的内容时，bash 会进行解释，首先是对输入字符串进行分词，Tokenizing，比如输入的是一个 *for*，解析后就知道这是要进行循环操作，这个过程叫做 Token Recognition。

像 *for* 这样的保留关键字还有以下这些 Reserved Words：

    if      then    elif    else    fi      time
    for     in      until   while   do      done
    case    esac    coproc  select  function
    {       }       [[      ]]      !

一个 bash 命令可以是以下内容之一：

   • Simple Commands       The most common type of command.
   • Pipelines             Connecting the input and output of several commands.
   • Lists                 How to execute commands sequentially.
   • Compound Commands     Shell commands for control flow.
     - Looping Constructs       Shell commands for iterative action.
     - Conditional Constructs   Shell commands for conditional execution.
     - Command Grouping         Ways to group commands.


```sh
# Simple Commands
[time [-p]] [!] command1 [ | or |& command2 ] …

# Lists of Commands
# operators ‘;’, ‘&’, ‘&&’, or ‘||’, and optionally terminated by one of ‘;’, ‘&’, or a newline.
command1 && command2

# Grouping Commands
( list )
{ list; }
```

Shell Expansions 可以对脚本表达式进行扩展处理，这里命令行经过解析器处理得到 Tokens 后进行的处理：

   • Brace Expansion       Expansion of expressions within braces.
   • Tilde Expansion       Expansion of the ~ character.
   • Shell Parameter Expansion     How Bash expands variables to their values.
   • Command Substitution      Using the output of a command as an argument.
   • Arithmetic Expansion      How to use arithmetic in shell expansions.
   • Process Substitution      A way to write and read to and from a command.
   • Word Splitting        How the results of expansion are split into separate arguments.
   • Filename Expansion        A shorthand for specifying filenames matching patterns.
   • Quote Removal     How and when quote characters are removed from words.


🥠 Lists of Commands

Of these list operators, `&&` and `||` have equal precedence, followed by  `;` an`&`, which have equal precedence.

A sequence of one or more newlines may appear in a list to delimit commands, equivalent to a semicolon.

If a command is terminated by the control operator `&`, the shell executes the command asynchronously in a subshell. This is known as executing the command in the background, and these are referred to as asynchronous commands. The shell does not wait for the command to finish, and the return status is 0 (true). When job control is not active (see Job Control), the standard input for asynchronous commands, in the absence of any explicit redirections, is redirected from /dev/null.

Commands separated by a ‘;’ are executed sequentially; the shell waits for each command to terminate in turn. The return status is the exit status of the last command executed.

AND and OR lists are sequences of one or more pipelines separated by the control operators `&&` and `||`, respectively. AND and OR lists are executed with left associativity.

An AND list has the form

    command1 && command2

*command2* is executed if, and only if, *command1* returns an exit status of zero (success).

An OR list has the form

    command1 || command2

*command2* is executed if, and only if, *command1* returns a non-zero exit status.

The return status of AND and OR lists is the exit status of the last command executed in the list.

🥠 Grouping Commands

Bash provides two ways to group a list of commands to be executed as a unit. When commands are grouped, redirections may be applied to the entire command list.

For example, the output of all the commands in the list may be redirected to a single stream.

    ( list )

Placing a list of commands between parentheses causes a subshell environment to be created (see Command Execution Environment), and each of the commands in list to be executed in that subshell. Since the list is executed in a subshell, variable assignments do not remain in effect after the subshell completes.

    { list; }

Placing a list of commands between curly braces causes the list to be executed in the current shell context. No subshell is created. The semicolon (or newline) following list is required.

In addition to the creation of a subshell, there is a subtle difference between these two constructs due to historical reasons. The braces are reserved words, so they must be separated from the list by blanks or other shell metacharacters. The parentheses are operators, and are recognized as separate tokens by the shell even if they are not separated from the list by whitespace.

The exit status of both of these constructs is the exit status of list.


以下是摘自 Shell Command Language - Shell Grammar 部分的内容，是经过处理后的 bash 语法定义。

```sh
/* -------------------------------------------------------
   The grammar symbols
   ------------------------------------------------------- */

%token  WORD
%token  ASSIGNMENT_WORD
%token  NAME
%token  NEWLINE
%token  IO_NUMBER

/* The following are the operators mentioned above. */

%token  AND_IF    OR_IF    DSEMI
/*      '&&'      '||'     ';;'    */

%token  DLESS  DGREAT  LESSAND  GREATAND  LESSGREAT  DLESSDASH
/*      '<<'   '>>'    '<&'     '>&'      '<>'       '<<-'   */

%token  CLOBBER
/*      '>|'   */

/* The following are the reserved words. */

%token  If    Then    Else    Elif    Fi    Do    Done
/*      'if'  'then'  'else'  'elif'  'fi'  'do'  'done'   */

%token  Case    Esac    While    Until    For
/*      'case'  'esac'  'while'  'until'  'for'   */

/* These are reserved words, not operator tokens, and are
   recognised when reserved words are recognised. */

%token  Lbrace    Rbrace    Bang
/*      '{'       '}'       '!'   */

%token  In
/*      'in'   */

/* -------------------------------------------------------
   The Grammar
   ------------------------------------------------------- */

%start  complete_command
%%
complete_command : list separator
                 | list
                 ;
list             : list separator_op and_or
                 |                   and_or
                 ;
and_or           :                         pipeline
                 | and_or AND_IF linebreak pipeline
                 | and_or OR_IF  linebreak pipeline
                 ;
pipeline         :      pipe_sequence
                 | Bang pipe_sequence
                 ;
pipe_sequence    :                             command
                 | pipe_sequence '|' linebreak command
                 ;
command          : simple_command
                 | compound_command
                 | compound_command redirect_list
                 | function_definition
                 ;
compound_command : brace_group
                 | subshell
                 | for_clause
                 | case_clause
                 | if_clause
                 | while_clause
                 | until_clause
                 ;
subshell         : '(' compound_list ')'
                 ;
compound_list    :              term
                 | newline_list term
                 |              term separator
                 | newline_list term separator
                 ;
term             : term separator and_or
                 |                and_or
                 ;
for_clause       : For name linebreak                            do_group
                 | For name linebreak in wordlist sequential_sep do_group
                 ;
name             : NAME                     /* Apply rule 5 */
                 ;
in               : In                       /* Apply rule 6 */
                 ;
wordlist         : wordlist WORD
                 |          WORD
                 ;
case_clause      : Case WORD linebreak in linebreak case_list Esac
                 | Case WORD linebreak in linebreak           Esac
                 ;
case_list        : case_list case_item
                 |              case_item
                 ;
case_item        :     pattern ')' linebreak     DSEMI linebreak
                 |     pattern ')' compound_list DSEMI linebreak
                 | '(' pattern ')' linebreak     DSEMI linebreak
                 | '(' pattern ')' compound_list DSEMI linebreak
                 ;
pattern          :             WORD         /* Apply rule 4 */
                 | pattern '|' WORD     /* Do not apply rule (4) */
                 ;
if_clause        : If compound_list Then compound_list else_part Fi
                 | If compound_list Then compound_list           Fi
                 ;
else_part        : Elif compound_list Then else_part
                 | Else compound_list
                 ;
while_clause     : While compound_list do_group
                 ;
until_clause     : Until compound_list do_group
                 ;
function_definition : fname '(' ')' linebreak function_body
                 ;
function_body    : compound_command                /* Apply rule 9 */
                 | compound_command redirect_list  /* Apply rule 9 */
                 ;
fname            : NAME                            /* Apply rule 8 */
                 ;
brace_group      : Lbrace compound_list Rbrace
                 ;
do_group         : Do compound_list Done
                 ;
simple_command   : cmd_prefix cmd_word cmd_suffix
                 | cmd_prefix cmd_word
                 | cmd_prefix
                 | cmd_name cmd_suffix
                 | cmd_name
                 ;
cmd_name         : WORD                   /* Apply rule 7a */
                 ;
cmd_word         : WORD                   /* Apply rule 7b */
                 ;
cmd_prefix       :            io_redirect
                 | cmd_prefix io_redirect
                 |            ASSIGNMENT_WORD
                 | cmd_prefix ASSIGNMENT_WORD
                 ;
cmd_suffix       :            io_redirect
                 | cmd_suffix io_redirect
                 |            WORD
                 | cmd_suffix WORD
                 ;
redirect_list    :               io_redirect
                 | redirect_list io_redirect
                 ;
io_redirect      :           io_file
                 | IO_NUMBER io_file
                 |           io_here
                 | IO_NUMBER io_here
                 ;
io_file          : '<'       filename
                 | LESSAND   filename
                 | '>'       filename
                 | GREATAND  filename
                 | DGREAT    filename
                 | LESSGREAT filename
                 | CLOBBER   filename
                 ;
filename         : WORD                      /* Apply rule 2 */
                 ;
io_here          :    DLESS     here_end
                 |    DLESSDASH here_end
                 ;
here_end         : WORD                      /* Apply rule 3 */
                 ;
newline_list     :              NEWLINE
                 | newline_list NEWLINE
                 ;
linebreak        : newline_list
                 | /* empty */
                 ;
separator_op     : '&'
                 | ';'
                 ;
separator        : separator_op linebreak
                 | newline_list
                 ;
sequential_sep   : ';' linebreak
                 | newline_list
```


## ==⚡ Folders Structures
- Linux Command Line and Shell Scripting Bible - ch3 Basic bash Shell Commands

Table 3.3 Common Linux Directory Names

| Directory |  Usage
| --------- | ---------------------------------------------------------------
| /     |  root of the virtual directory, where normally, no files are placed
| /bin  |  binary directory, where many GNU user-level utilities are stored
| /boot |  boot directory, where boot files are stored
| /dev  |  device directory, where Linux creates device nodes
| /etc  |  system configuration files directory
| /home |  home directory, where Linux creates user directories
| /lib  |  library directory, where system and application library files are stored
| /media|  media directory, a common place for mount points used for removable media
| /mnt  |  mount directory, another common place for mount points used for removable media
| /opt  |  optional directory, often used to store third-party software packages and data files
| /proc |  process directory, where current hardware and process information is stored
| /root |  root home directory
| /sbin |  system binary directory, where many GNU admin-level utilities are stored
| /run  |  run directory, where runtime data is held during system operation
| /srv  |  service directory, where local services store their files
| /sys  |  system directory, where system hardware information files are stored
| /tmp  |  temporary directory, where temporary work files can be created and destroyed
| /usr  |  user binary directory, where the bulk of GNU user-level utilities and data files are stored
| /var  |  variable directory, for files that change frequently, such as log files

The common Linux directory names are based upon the Filesystem Hierarchy Standard
(FHS). Many Linux distributions maintain compliance with FHS. Therefore, you should
be able to easily find files on any FHS-compliant Linux systems.


## ==⚡ Basic commands

目录列表 list 命令 ls，参数 -l 表示单行显式一条记录，-R 表示递归子目录：

    ls -lR
    .:
    total 44
    -rw-r--r-- 1 root   root   1763 Oct 18 08:00 demo.go
    drwxr-xr-x 2 jeango jeango 4096 Oct 11 14:50 Desktop
    drwxr-xr-x 2 jeango jeango 4096 Oct 11 14:50 Documents
    drwxr-xr-x 2 jeango jeango 4096 Oct 11 14:50 Downloads
    drwxr-xr-x 4 jeango jeango 4096 Oct 18 08:13 go

又如查找命令 find 它会将目录下的所有文件列表，通过管道 `|` 将列表传入 grep 进行过滤，和正则规则 `demo.go$` 配到的就输出：

    find /home/jeango | grep demo.go$
    /home/jeango/demo.go

命令用法帮助信息，一般通过传入 --help 或 -h 参数来获取。


常用命令参考

    pwd                   显示当前/工作目录的名称
    whoami                显示当前的用户名
    id                    显示当前用户的身份（名称、uid、gid 和相关组）
    file <foo>            显示 <foo> 文件的文件类型
    type -p <commandname> 显示 <commandname> 命令的文件所处位置
    which <commandname>   同上
    type <commandname>    显示 <commandname> 命令的相关信息
    apropos <key-word>    查找与 <key-word> 有关的命令
    man -k <key-word>     同上
    whatis <commandname>  用一行解释 <commandname> 命令
    man -a <commandname>  显示 <commandname> 命令的解释（Unix 风格）
    info <commandname>    显示 <commandname> 命令相当长的解释（GNU 风格）
    ls                    显示目录内容（不包含以. 点号开头的文件和目录）
    ls -a                 显示目录内容（包含所有文件和目录）
    ls -A                 显示目录内容（包含几乎所有文件和目录，除了 .. 和 . ）
    ls -la                显示所有的目录内容，并包含详细的信息
    ls -lai               显示所有的目录内容，并包含 inode 和详细的信息
    ls -d                 显示当前目录下的所有目录
    tree                  使用树状图显示目录内容
    lsof <foo>            列出处于打开状态的文件 <foo> 
    lsof -p <pid>         列出被某进程打开的文件:  <pid> 
    mkdir <foo>           在当前目录中建立新目录 <foo> 
    rmdir <foo>           删除当前目录中的 <foo> 目录
    cd <foo>              切换到当前目录下或变量 $CDPATH 中的 <foo> 目录
    cd /                  切换到根目录
    cd                    切换到当前用户的家目录
    cd /<foo>             切换到绝对路径为 /<foo> 的目录
    cd ..                 切换到上一级目录
    cd ~<foo>             切换到用户 <foo> 的家目录
    cd -                  切换到之前的目录
    </etc/motd pager      右箭头表示读入，使用默认的分页程序来显示 /etc/motd 的内容
    </etc/motd grep GO    在文件中查找包含 GO 的行
    touch <junkfile>      建立一个空文件 <junkfile> 
    cp <foo> <bar>        将一个现有文件 <foo> 复制到一个新文件 <bar> 
    rm <junkfile>         删除文件 <junkfile> 
    mv <foo> <bar>        将一个现有文件 <foo> 重命名成 <bar>
    mv <foo> <bar>        将一个现有文件 <foo> 移动到新的位置 <bar>/<foo>
    mv <foo> <bar>/<baz>  移动一个现有文件 <foo> 到新位置并重命名为 <bar>/<baz>
    find . -name <pattern>       使用 shell  <pattern> 查找匹配的文件名（速度较慢）
    locate -d . <pattern>        使用 shell <pattern> 查找匹配的文件名（速度较快，使用定期生成的数据库）
    grep -e  <pattern>  *.html   在当前目录下以 .html 结尾的所有文件中，查找匹配 <pattern> 的文件并显示
    top                          全屏显示进程信息，输入 q 退出
    ps aux | pager               显示所有正在运行的进程的信息（BSD 风格）
    ps -ef | pager               显示所有正在运行的进程的信息（Unix system-V 风格）
    ps aux | grep -e  [e]xim4*   显示所有正在运行 exim 和 exim4 的进程
    ps axf | pager               显示所有正在运行的进程的信息（ASCII 风格）
    kill <1234>                  杀死 ID 为 <1234> 的进程
    gzip <foo>                   使用 Lempel-Ziv 编码（LZ77）将 <foo> 压缩为 <foo>.gz 
    gunzip <foo>.gz              将 <foo>.gz 解压为 <foo> 
    bzip2 <foo>                  使用 Burrows-Wheeter 块排序压缩算法和 Huffman 编码将 <foo> 压缩为 <foo>.bz2 （压缩效果比 gzip 更好）
    bunzip2 <foo>.bz2            将 <foo>.bz2 解压为 <foo> 

命令常见管道用法

    cmd &             在子 shell 的后台 中执行 cmd，可以配合 jobs、fg、bg 和 kill 命令使用
    cmd1 | cmd2       通过管道将 cmd1 的标准输出作为 cmd2 的标准输入（并行执行）
    cmd1 2>&1 | cmd2  通过管道将 cmd1 的标准输出和标准错误作为 cmd2 的标准输入（并行执行）
    cmd1 ; cmd2       按顺序执行 cmd1 和 cmd2
    cmd1 && cmd2      执行 cmd1；如果成功，按顺序执行 cmd2（如果 cmd1 和 cmd2 都执行成功了，返回 success ）
    cmd1 || cmd2      执行 cmd1；如果不成功，按顺序执行 cmd2（如果 cmd1 或 cmd2 执行成功，返回 success ）
    cmd > foo         将 cmd 的标准输出重定向到文件 foo（覆盖）
    cmd 2> foo        将 cmd 的标准错误重定向到文件 foo（覆盖）
    cmd >> foo        将 cmd 的标准输出重定向到文件 foo（附加）
    cmd 2>> foo       将 cmd 的标准错误重定向到文件 foo（附加）
    cmd > foo 2>&1    将 cmd 的标准输出和标准错误重定向到文件 foo
    cmd < foo         将 cmd 的标准输入重定向到文件 foo 即读入文件
    cmd << delimiter  将 cmd 的标准输入重定向到下面的命令行，直到遇到 delimiter（here document）
    cmd <<- delimiter 将 cmd 的标准输入重定向到下面的命令行，直到遇到 delimiter（here document，命令行中开头的制表符会被忽略）

上面出现的 1/2 是预定义的文件描述符:

    设备    说明      文件描述符
    stdin   标准输入  0 （0u)
    stdout  标准输出  1 （1u)
    stderr  标准错误  2 （2u)

Cat 命令意思是 Concatenate，用于读取文件输出到屏幕，但这个常用工具还经常结合 << here document 重定向技术用来编写文件，在不指定输入文件时，因为 cat 默认使用 stdin 作为数据输入。

示范，使用 cat 命令创建 shell 脚本，注意标记 EOF 需要用它来结束输入：

    cat >> demo.sh <<EOF
    > #!/bin/bash 
    > echo $HOME
    > EOF

Linux Heredoc 中的终结符号也可以使用键盘 Ctrl-D 输入，在 Windows 上使用 Ctrl-Z。

一般，创建的新文件是没有执行权限的，需要使用 chmod 添加可执行权，777 表示给所有账户都设置 Read/Write/Execute 权限：

    $ ls -l
    total 0
    -rw-r--r-- 1 jeango jeango   31 May  4 07:56 demo.sh

    $ chmod +777 demo.sh
    $ ./demo.sh
    /home/jeango

脚本使用了回显命令输出用户的 HOME 目录，注意区分大小写。另外，扩展名可以省略，只要是可以执行的文件，就可以按第一行指示内容当作脚本执行。

使用 type 命令来查询命令信息：

    $ type -a ls
    ls is aliased to `ls --color=auto'
    ls is /usr/bin/ls
    ls is /bin/ls

    $ type -a test
    test is a shell builtin
    test is /usr/bin/test
    test is /bin/test

在 Shell 脚本可以进行数值计算，以下示范算式的 4 种表达：

    #!/bin/bash 

    if [ $# -eq 2 ]
    then
      echo "Please offer a number."
    else
      m=$[ $1 + 1]
      echo add one: $m

      m=`expr $m + 1`
      echo add one: $m

      # 注意：+ 号左右不要加空格
      let m=m+1
      echo add one: $m

      m=$(( m + 1 ))
      echo add one: $m
    fi

## ==⚡ Shell Parameters
                                                                        *Shell Parameters*
- [bash manual - 3.4 Shell-Parameters](file:///C:/download/bash/bash.html#Shell-Parameters)


Shell Parameters

• Positional Parameters     The shell’s command-line arguments.
• Special Parameters        Parameters denoted by special characters.


                                                                        *Positional Parameters*
Positional Parameters

A positional parameter is a parameter denoted by one or more digits, other than the single digit 0. Positional parameters are assigned from the shell’s arguments when it is invoked, and may be reassigned using the set builtin command. Positional parameter `N` may be referenced as `${N}`, or as `$N` when `N` consists of a single digit. Positional parameters may not be assigned to with assignment statements. The set and shift builtins are used to set and unset them (see Shell Builtin Commands). The positional parameters are temporarily replaced when a shell function is executed (see Shell Functions).

When a positional parameter consisting of more than a single digit is expanded, it must be enclosed in braces.

                                                                        *Special Parameters*
Special Parameters

The shell treats several parameters specially. These parameters may only be referenced; assignment to them is not allowed.

*
(`$*`) Expands to the positional parameters, starting from one. When the expansion is not within double quotes, each positional parameter expands to a separate word. In contexts where it is performed, those words are subject to further word splitting and filename expansion. When the expansion occurs within double quotes, it expands to a single word with the value of each parameter separated by the first character of the IFS special variable. That is, `$*` is equivalent to `$1c$2c…`, where c is the first character of the value of the IFS variable. If IFS is unset, the parameters are separated by spaces. If IFS is null, the parameters are joined without intervening separators.

@
(`$@`) Expands to the positional parameters, starting from one. In contexts where word splitting is performed, this expands each positional parameter to a separate word; if not within double quotes, these words are subject to word splitting. In contexts where word splitting is not performed, this expands to a single word with each positional parameter separated by a space. When the expansion occurs within double quotes, and word splitting is performed, each parameter expands to a separate word. That is, `"$@"` is equivalent to `"$1" "$2" …`. If the double-quoted expansion occurs within a word, the expansion of the first parameter is joined with the beginning part of the original word, and the expansion of the last parameter is joined with the last part of the original word. When there are no positional parameters, `"$@"` and `$@` expand to nothing (i.e., they are removed).

#
(`$#`) Expands to the number of positional parameters in decimal.

?
(`$?`) Expands to the exit status of the most recently executed foreground pipeline.

-
(`$-`, a hyphen.) Expands to the current option flags as specified upon invocation, by the set builtin command, or those set by the shell itself (such as the -i option).

$
(`$$`) Expands to the process ID of the shell. In a () subshell, it expands to the process ID of the invoking shell, not the subshell.

!
(`$!`) Expands to the process ID of the job most recently placed into the background, whether executed as an asynchronous command or using the bg builtin (see Job Control Builtins).

0
(`$0`) Expands to the name of the shell or shell script. This is set at shell initialization. If Bash is invoked with a file of commands (see Shell Scripts), $0 is set to the name of that file. If Bash is started with the -c option (see Invoking Bash), then $0 is set to the first argument after the string to be executed, if one is present. Otherwise, it is set to the filename used to invoke Bash, as given by argument zero.

两个类似的特殊变量区别在于使用双引号：

- `"$*"` 会将所有的参数作为一个整体，以"$1 $2 … $n"的形式输出所有参数；
- `"$@"` 会将各个参数分开，以"$1" "$2" … "$n" 的形式输出所有参数。 

```sh
#!/bin/bash

echo Positional Parameters
echo ===============================================================
echo \$1 = $1
echo ...
echo \$9 = $9

echo Special Parameters
echo ===============================================================
echo \$* ==\> Expands to the positional parameters, starting from one.
echo "$*"
echo \$@ ==\> Expands to the positional parameters, starting from one.
echo "$@"
echo \$# ==\> Expands to the number of positional parameters in decimal.
echo $#
echo \$? ==\> Expands to the exit status of the most recently executed foreground pipeline.
echo $?
echo \$- ==\> Expands to the current option flags as specified upon invocation
echo $-
echo \$$ ==\> Expands to the process ID of the shell, it is Parent PID in subshell.
echo $$
echo \$! ==\> Expands to the process ID of the job most recently placed into the background
echo $!
echo \$ ==\> Expands to the name of the shell or shell script. 
echo $0

if
echo Try this: 
$0 1a 2 3 4 5 6 7 8 9i -hyphened "bad apple"
```


## ==⚡ bash 变量
- Bash Reference Manual https://www.gnu.org/software/bash/manual/bash.html#Quoting

打印 $HOME 环境变量：

    echo $HOME

Shell 变量分为 3 种：

1. 用户自定义变量，只支持字符串类型，不支持浮点等类型，赋值号不能有空格。
2. 预定义变量
3. 环境变量

定义变量需要注意，一般变量名用大写，赋值等号前后不要有空格，如 `NUM=10`,

用户变量常见有 3 个前缀：

1. unset：删除变量
2. readonly：标记只读变量
3. export：指定全局变量

例子示范，注意字符串带空格，使用双引号包括：

    #!/bin/bash 

    # 定义全局变量
    export NAME="shell script"

    # 打印变量的值
    echo $NAME

Shell 编程环境提供了一系列预定义变量，来获取命令行的输入：

    #!/bin/bash 

    echo "\$0 = $0" \<== script name
    echo "\$1 = $1" \<== 1st argument
    echo "\$2 = $2" \<== 2nd argument
    echo "\$9 = $9" \<== 9th argument
    echo "\$# = $#" \<== numbers of arguments
    echo "\$@ = $@" \<== all arguments
    echo "\$* = $*" \<== all arguments
    echo "\$$ = $$" \<== Process ID
    echo "\$? = $?" \<== pre-process status

为了处理超出 $9 以后的参数，可以使用 shift 命令用于向前移动参数，每执行一次，$1-$9 的参数往前移动一次，不会影响 $0。


环境变量根据配置有所不同，默认有下面这几个：

1. HOME：用户主目录
2. PATH：系统环境变量 PATH
3. TERM：当前终端
4. UID：当前用户 ID
5. PWD：当前工作目录，绝对路径

一些环境变量的值会改变部分 Unix 命令的行为。环境变量的默认值由 PAM 系统初始化，其中一些会被某些应用程序重新设定。

- 显示管理器（例如 gdm3）会重新设定环境变量。
- Shell 脚本启动的时候会重置 `~/.bash_profile` 和 `~/.bashrc` 中的环境变量。

语言环境值 $LANG 变量会影响内容的输出如 date 命令输出的日期格式，完整的语言环境值由小写语言代码、大写国家代码和编码 3 部分组成，如 en_US.UTF-8。

配置文件 /etc/default/locale 设置系统默认的语言环境值给 PAM 使用，如果安装系统选择了中文，那么它的内容可能是这样的，可以使用 echo $LANG 显式当前的设置：

    LANGUAGE="en_US:en"
    LANG="zh_CN.UTF-8"

如：

    > LANG=en_US.UTF-8 date
    Fri 18 Oct 2019 12:56:45 PM EDT
    > LANG=zh_CN.UTF-8 date
    Fri Oct 18 12:59:12 EDT 2019

当你在 Shell 里输入命令的时候，Shell 会在 $PATH 变量所包含的目录列表里进行搜索，$PATH 变量的值也叫作 Shell 的搜索路径。

在默认的 Debian 安装过程中，所使用的用户账号的 $PATH 环境变量可能不包括 /sbin 和 /usr/sbin 目录。例如，ifconfig 命令就需要指定完整的路径 /sbin/ifconfig。类似地，ip 命令是在 /bin 目录下。 可以在 Bash 脚本文件 `~/.bash_profile` 或 `~/.bashrc` 中改变 $PATH 环境变量的值，如：

    export PATH=$PATH:/home/go/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/go/bin

修改环境变量后一般需要重启终端或机器使其生效，或执行 source 命令使配置立即在当前 shell 中生效。

    source $HOME/.bash_profile.

source 在当前 bash 环境下执行命令，而 scripts 是启动一个子 shell 来执行命令。这样如果把设置环境变量的命令写进 scripts 中，就只会影响子 shell 无法改变当前的 BASH>通过文件设置环境变量时，要用 source 命令。

$HOME 变量，很多命令在用户目录中都存放了用户指定的配置，然后通过配置的内容来改变它的执行方式，用户目录通常用 $HOME 来指定。Shell 扩展 `~/` 为转入当前用户的主目录，也就是 `$HOME/`。Shell 扩展 `~foo/` 为 foo 的目录，也就是 `/home/foo/`。

有个特殊的环境变量 IFS - internal field separator，默认定义是一个空格，在分割数据时需要使用它。

如，以下打包 $PATH 中所有目录下的文件，因为数据中使用的分隔符号是冒号：如果设置不对，for 循环就不能获取到正确的数据：

    #!/bin/bash
    # finding files in the PATH
    IFS=:

    for folder in $PATH
    do
      echo “$folder:”
      for file in $folder/*
      do
        if [ -x $file ]
        then
          echo “ $file”
        fi
      done
    done

    # \ n 两个字符作为分隔符。
    IFS='\n'

    # 换行符做为字段分隔符，$ 表示进行转义。
    IFS=$'\n'

    # \ n : 都作为字段分隔符。
    IFS='\n':;

其中 `$'...'` 这种表达称为 ANSI C-quoted strings。


## ==⚡ bash array
- The Ultimate Bash Array Tutorial with 15 Examples

Linux 命令输出内容只是字符串，不像 PowerShell 那样处理成对象，可以是数组数据。
要将字符串像数组一样操作，需要 head tail 两个命令的配合，一个获取前面的部分，再
用 tail 获取后面的部分，可以按字节 -c 处理，也可以按行 -n 处理。这样就可以获取
指定行的数据，另外 awk 这样的格式化工具也可以实现同样的功能：

```sh
    lines=$(printf "line %s\n" {1..5})
    lines=$(printf "line %s\n" $(seq 5))
    echo "$lines" | head -n 3 | tail -n 1 # line 3
    echo "$lines" | head -n-3 | tail -n+1 # line 1 & 2
    echo "$lines" | sed -n '2,3p'         # line 2 & 3
    echo "$lines" | sed = | sed 'N;s/\n/\t/' | sed -n '2,3p'
    echo "$lines" | awk -F " " '($2>=2 && $2<=3){ print $0 }'
```

可以给首尾命令的数值加 + - 前缀，以及 awk sed 命令的说明如下：

  + head -n -num 表示获取除末尾 num 行之前的内容
  + tail -n +num 表示获取 num 行开始的内容
  + awk 格式化工具使用 -F " " 指定空格为行内字段分隔符，默认为 -F:
  + awk 中使用 $0 表示当前行内容，$1 - $9 这样的变量表示对应列内容
  + sed = 给数据增加打印行号，使用 N; 读取下一行
  + s/\n/\t/ 替换当前行的换行符，将内容与行号拼成一行显示

多行内容保存到变量，使用 echo 输出时，给变量加双引号输出才有完整的换行符号。

Use declare command can define two types of array:

    declare: declare [-aAfFgilnrtux] [-p] [name[=value] ...]
          -a        to make NAMEs indexed arrays (if supported)
          -A        to make NAMEs associative arrays (if supported)

Bash provides one-dimensional indexed and associative array variables.

Indexed array is created automatically.

```sh
#! /bin/bash

# Declaring an Array and Assigning values:
# name[subscript]=value
# declare -a name = (values ...)
# declare -a name
# declare -a name[subscript]
# declare -A name

Unix[0]='Debian'
Unix[1]='Red hat'
Unix[2]='Ubuntu'
Unix[3]='Suse'

declare -a Unix=('Debian' 'Red hat' 'Ubuntu' 'Suse')

echo = # the length of array should be "4": 
echo ${#Unix[@]} or ${#Unix[*]}

echo = # all elements of array: 
echo ${Unix[@]} or ${Unix[*]}

echo = # the length of the 1st element should be "6": 
echo ${#Unix}

echo = # the 1st element should be "Debina": 
echo ${Unix[0]} or ${Unix}

echo = # assign value to a arbitrary position
Unix[6]="it is ok"

echo = # Extraction by offset and length for an element
echo Substring "ok" of 6th array element: ${Unix[6]:6:2}

echo = # Extraction by offset and length for an array
echo Sub array should be \(Ubuntu\): ${Unix[@]:6:1}
echo Sub array from 3th to end: ${Unix[@]:3}

echo = # Search and Replace in an array elements
echo Replace and return new array: ${Unix[@]/Ubuntu/SCO Unix}
echo Origin unchange: ${Unix[@]}

echo = # Add and update an element to an Bash Array
Unix=("${Unix[@]}" "AIX" "HP-UX" 'Fedora' 'UTS' 'OpenLinux');
echo After elements append: ${Unix[@]}

echo = # Remove an Element from an Array
echo = # the 4th element is "it is ok" after update 
unset Unix[4]
echo Unseted element should be null "": ${Unix[4]}
echo Origin array has changed: ${Unix[@]}

echo = # Another way to composite an new array
pos=3
Unix=(${Unix[@]:0:$pos} ${Unix[@]:$(($pos + 1))})
echo 3th element "Suse" was completely removed: ${Unix[@]}

echo = # Remove Bash Array Elements using Patterns
echo It does not work to search "Red*": ${Union[@]/Red*/}
declare -a patter=( ${Unix[@]/Red*/} )
echo ${patter[@]}

echo = # Copying an Array
Linux=("${Unix[@]}")
echo Array copy: ${Linux[@]}

echo = # Concatenation of two Bash Arrays
Shell=('bash' 'csh' 'jsh' 'rsh' 'ksh' 'rc' 'tcsh');
UnixShell=("${Unix[@]}" "${Shell[@]}")
echo Elements concated array: ${UnixShell[@]}
echo Length of concated array: ${#UnixShell[@]}

echo = # Use unset to delete an Entire Array
unset UnixShell
echo UnixShell is null after unseted and length is 0: ${#UnixShell[@]}

echo = # Load Content of a File into an Array
echo Concating input to an example file ...
cat > logfile <<EOF
Welcome to
bash
script programming
on Linux or Unix
EOF
echo "Reading file content ..."
content=( `cat "logfile" `)

for t in "${content[@]}"
do
    echo Line \#$((No++)): $t
done
```


## ==⚡ flow control if/for/while/case

Shell 有流程控制语句，跟高级语言类似，包括分支，跳转，循环。

if - else - fi 条件控制：

- 方括号等价 test 命令，注意保留内部的空格。
- 如果 if then 要同行，then 前面要使用 ; 号连接。

```sh
#!/bin/bash 

read VAR

#if test $VAR -eq 10; then
if [ $VAR -eq 10 ]
then
    echo "true"
else
    echo "false"
fi

v=$RANDOM
if [ $v -gt $((32768/4)) ]; then
    echo -n "$v bad "
    echo -n "apple"
fi
```

注意 then 的使用，第一个条件分支都需要，除了 else。

```sh
#!/bin/bash 

# if [ $1 == $2 ]
if (( $1>0 && $2>0 && $1==$2)); then 
  echo "both $1 and $2 greater than 0, and they are equal."
elif (( $1 == $2 )); then
  echo "$1 and $2 are equal."
else
  echo "not equal."
fi
```

case 分支语句，注意分支结束使用两个分号，分支开始用一个右圆括号，默认分支用 `*)`：

    #!/bin/bash 

    read NAME
    case $NAME in
        "Linux")
            echo "Linux is open source"
            ;;
        "Windows")
            echo "There was blue screens!"
            ;;
        *)
            echo "other"
            ;;
    esac

for 循环，演示三种形式，循环体使用 do-dnoe 包括：

    #!/bin/bash 

    for ((i = 1; i <= 3; i++))
    do
        echo $i
    done

    for VAR in 1 2 3
    do
        echo $VAR
    done

    for VAR in $*
    do
        echo $VAR
    done

while 循环，使用方括号，注意与 for 循环的区别：

    #!/bin/bash 

    echo Please offer initial number
    read VAR

    while [ $VAR -lt 10 ]
    do
        echo $VAR
        VAR=$[ $VAR + 1 ]
    done

until 循环，使用双层方括号，它的结束条件为 true：

    #!/bin/bash 

    i=0

    until [[ "$i" -gt 5 ]]     
    do  
        echo $i
        i=$[ $i + 1 ]
    done

在循环体中，可以使用 break 打断循环，使用 continue 跳过本次循环，进入下一次循环，这些功能很像高级语言。

示范，打印目录下的所有文件：

    for VAR in `ls .`
    do
        echo $VAR
    done


## ==⚡ bash function

下面介绍 Shell 编程中比较重要的函数，这让脚本具有函数式编程的功能。

    #!/bin/bash 

    function hello()
    {
        echo -n "hello $1, "
        return 1
    }

    world()
    {
        local MSG="script world."
        echo "welcome to $MSG"
    }
    hello "guy"
    `echo world`

定义函数，可以省略 function 关键字。

函数调用方式有两种，除了直接写函数名，不使用括号，如果有参数，就依次传入，在函数内部使用 $1-$9 来接收。

另一种调用方式，是使用返引号，这种表达式可以当作 exec 命令使用，用来执行外部命令，或者调用函数。

函数中，还可以定义局部变量。

函数通过 return 语句返回的值，可以通过 `$?` 获取，如果脚本需要返回一个值，使用 exit 命令指定。


## ==⚡ Test file comparisons
- Linux Command Line and Shell Scripting Bible

Table 12.3 The test File Comparisons

| Comparison  | Description
| ----------- | --------------------------------------------
| -d file     | Checks if file exists and is a directory
| -e file     | Checks if file exists
| -f file     | Checks if file exists and is a file
| -r file     | Checks if file exists and is readable
| -s file     | Checks if file exists and is not empty
| -w file     | Checks if file exists and is writable
| -x file     | Checks if file exists and is executable
| -O file     | Checks if file exists and is owned by the current user
| -G file     | Checks if file exists and the default group is the same as the current user
| file1 -nt file2 | Checks if file1 is newer than file2
| file1 -ot file2 | Checks if file1 is older than file2

These conditions give you the ability to check filesystem files within shell scripts. They
are often used in scripts that access files. Because they’re used so often, let’s look at each
of these individually.

```sh
$ cat test11.sh
#!/bin/bash
# Look before you leap
#
jump_directory=/home/arthur
#
if [ -d $jump_directory ]
then
echo “The $jump_directory directory exists”
cd $jump_directory
ls
else
echo “The $jump_directory directory does not exist”
fi
#
```

## ==⚡ bash 命令行提示符

Bash 会检查设置在 PROMPT_COMMAND 上数组内容，根据占位符依次替换相应的内容显示在命令行提示符之前。

另外，以下这些占位符还可用于提示符变量 PS0, PS1, PS2, PS4:

- `\a` A bell character.
- `\d` The date, in "Weekday Month Date" format (e.g., "Tue May 26").
- `\D{format}` 传入 strftime(3) 函数的格式字符，空字符格式表示本地化时间格式。
- `\e` An escape character.
- `\h` The hostname, up to the first ‘.’.
- `\H` The hostname.
- `\j` The number of jobs currently managed by the shell.
- `\l` The basename of the shell’s terminal device name.
- `\n` A newline.
- `\r` A carriage return.
- `\s` 脚本名称，即参数变量 $0 的基本文件名称部分。
- `\t` The time, in 24-hour HH:MM:SS format.
- `\T` The time, in 12-hour HH:MM:SS format.
- `\@` The time, in 12-hour am/pm format.
- `\A` The time, in 24-hour HH:MM format.
- `\u` The username of the current user.
- `\v` The version of Bash (e.g., 2.00)
- `\V` The release of Bash, version + patchlevel (e.g., 2.00.0)
- `\w` 当前工作目录，$HOME 用波浪号表示，通过 $PROMPT_DIRTRIM 变量。
- `\W` The basename of $PWD, with $HOME abbreviated with a tilde.
- `\!` The history number of this command.
- `\#` The command number of this command.
- `\$` If the effective uid is 0, #, otherwise $.
- `\nnn` The character whose ASCII code is the octal value nnn.
- `\\` A backslash.
- `\[` 非打印字符开始，可以控制台控制字符到提示符。
- `\]` End a sequence of non-printing characters.


查看默认设置，注意嵌入的非打印字符用来控制字符颜色：

    $ echo $PS1
    \[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$
    $ echo $PS2
    >
    $ echo $PS3

    $ echo $PS4
    +

设置提示符示范：

    export PROMPT_COMMAND="pwd"
    export PS1="\[\033[01;32m\]\s@\u$ \[\033[00m\]"


## ==⚡ bash 命令的返回值

表格 D-1. "保留的"退出码

| 退出码的值 |                   含义                   |       例子       |
|------------|------------------------------------------|------------------|
| 1          | 通用错误，比如"除0错误"                  | let "var1 = 1/0" |
| 2          | shell内建命令使用错误                    |                  |
| 126        | 命令不能执行，如权限问题                 |                  |
| 127        | 找不到命令，可能是 $PATH 或拼写错误      |                  |
| 128        | exit 的参数错误，只能是 0 - 255          | exit 3.14159     |
| 128+n      | 信号 "n" 的致命错误，$? 返回(128 + n)    | kill -9 pid      |
| 130        | 用 Ctrl-C 来触发 SIGINT，返回码(128 + 2) |                  |
| 255*       | 超出范围的退出状态，只能是 0 - 255       | exit -1          |

各种信息可以通过 `kill -l` 命令查看。

shell 返回码即 exit 返回码，标识整个脚本的执行结果状态。

函数返回码即 return 返回码，标识一个函数的执行结果状态。

命令返回码，标识一个命令的执行结果状态，在命令执行后，紧跟着获取返回码，用 $? 获取。

每个命令都会返回它的退出状态，通过变量 $? 作为返回值，比 Windows CMD 下的 ERRORLEVEL 好用多了。

    | 命令的退出状态 |  数字返回值  | 逻辑返回值 |
    |----------------|--------------|------------|
    | success        | zero, 0      | TRUE       |
    | error          | non-zero, -1 | FALSE      |

列如 echo 显式最后的命令返回值。

请注意，success 是逻辑 TRUE ，0（zero）则是它的值。这有些不直观，需要在这里提一下

    > [ 2 = 3 ]; echo $?
    1
    > [ a3 = a3 ]; echo $?
    0


## ==⚡ bash 模糊匹配

经常有这种情况你期望命令成串自动执行而不需要挨个输入，将文件名扩展为 glob，(有时候被称为 通配符)，以此来
满足这方面的需求。

    shell glob 模式    匹配规则描述
    *                 不以 . 开头的文件名 (段)
    .*                以 . 开头的文件名 (段)
    ?                 精确字符
    […]               包含在括号中的任意字符都可以作为精确字符
    [a-z]             a 到 z 之间的任意一个字符都可以作为精确字符
    [^…]              除了包含在括号中的任意字符，其它字符都可以作为精确字符


## ==⚡ alias 命令别名

你可以为经常使用的命令设置一个别名。尝试下列例子

    $ alias la=’ls -la’

现在 la 是 ls -al 的简写形式，并同样会以长列表形式列出所有的文件。

你可以使用 alias 来列出所有的别名。

    $ alias
    ...
    alias la=’ls -la’

你可以使用 type 来确认命令的准确路径或类型。

    $ type ls
    ls is hashed (/bin/ls)
    $ type la
    la is aliased to ls -la
    $ type echo
    echo is a shell builtin
    $ type file
    file is /usr/bin/file

ls 在最近被使用过，而 file 没有，因此 ls 标记为 hashed （被录入哈希表），即 shell 有一个内部的记录用来快速访问 ls 所处的位置。


## ==⚡ symbolic link

软连接是 Linux 中一个常用命令，它的功能是为某一个文件在另外一个位置建立一个同不的链接。

具体用法是：

    ln -s 源文件 目标文件。 

当 我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在其它的 目录下用ln命令链接（link）就可以，不必重复的占用磁盘空间。

例如：

    ln -s /usr/local/mysql/bin/mysql /usr/bin

这样我们就对/usr/bin目录下的mysql命令创建了软连接 

【硬连接】

硬连接指通过索引节点来进行连接。在 Linux 文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号(Inode Index)。在Linux中，多个文件名指向同一索引节点是存在的。一般这种连接就是硬连接。硬连接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬连接到重要文件，以防止“误删”的功能。其原因如上所述，因为对应该目录的索引节点有一个以上的连接。只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。也就是说，文件真正删除的条件是与之相关的所有硬连接文件均被删除。

【软连接】

另外一种连接称之为符号连接（Symbolic Link），也叫软连接。软链接文件有类似于 Windows 的快捷方式。它实际上是一个特殊的文件。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。

使用方式

创建软链接

    ln  -s  [源文件或目录]  [目标文件或目录]

例：

当前路径创建 test 引向 /var/www/test 文件夹 

    ln –s  /var/www/test  test

创建/var/test 引向/var/www/test 文件夹 

    ln –s  /var/www/test   /var/test

删除软链接

和删除普通的文件是一样的，删除都是使用 rm 来进行操作

例：

删除test

    rm –rf test

修改软链接

    ln –snf  [新的源文件或目录]  [目标文件或目录]

这将会修改原有的链接地址为新的地址

例如：

创建一个软链接

    ln –s  /var/www/test   /var/test

修改指向的新路径

    ln –snf  /var/www/test1   /var/test

常用参数：

　　-f : 链结时先将与 dist 同档名的档案删除
　　-d : 允许系统管理者硬链结自己的目录
　　-i : 在删除与 dist 同档名的档案时先进行询问
　　-n : 在进行软连结时，将 dist 视为一般的档案
　　-s : 进行软链结(symbolic link)
　　-v : 在连结之前显示其档名
　　-b : 将在链结时会被覆写或删除的档案进行备份
　　-S SUFFIX : 将备份的档案都加上 SUFFIX 的字尾
　　-V METHOD : 指定备份的方式
　　--help : 显示辅助说明
　　--version : 显示版本

## ==⚡ bash & text 文本处理

在类 Unix 的工作环境中，文本处理是通过使用管道组成的标准文本处理工具链完成的。这是另一个重要的 Unix 创新。

- 没有使用正则表达式：
    – cat   连接文件并输出全部的内容。
    – tac   连接文件并反向输出。
    – cut   选择行的一部分并输出。
    – head  输出文件的开头。
    – tail  输出文件的末尾。
    – sort  对文本文件的行进行排序。
    – uniq  从已排序的文件中移除相同的行。
    – tr    转换或删除字符。
    – diff  对文件的行进行对比。
- 使用基础的正则表达式（BRE ）：
    – grep  匹配满足正则规则模板 pattern 的文本。
    – ed    是一个原始行编辑器。
    – sed   是一个流编辑器。
    – vim   是一个屏幕编辑器。
    – emacs 是一个屏幕编辑器。（有些扩展的 BRE ）
- 使用扩展的正则表达式（ERE ）：
    – egrep 匹配满足多个 pattern 的文本。
    – awk   进行简单的文本处理。
    – tcl(3tcl) 可以进行任何你想得到的文本处理：参见 re_syntax(3) 。经常与 tk(3tk) 一起使用。
    – perl  可以进行任何你想得到的文本处理。参见 perlre  。
    – pcregrep 软件包中的 pcregrep  可以匹配满足 Perl 兼容正则表达式（PCRE） 模式的文本。
    – 带有 re 模块的 python 可以进行任何你想得到的文本处理。参见“/usr/share/doc/python/html/index.html”。

如果你不确定这些命令究竟做了什么，请使用 man command 来自己把它搞清楚吧。

注意:
排序的顺序和表达式的范围取决于语言环境。如果你想要获得一个命令的传统行为，可以在命令之前使用“LANG=C”
让 C 语言环境代替 UTF-8。


正则表达式被使用在许多文本处理工具中。它们类似 shell 的通配符，但更加复杂和强大。正则表达式描述要匹配的模式，它是由文本字符和元字符构成的。 元字符仅仅是带有特殊含义的字符。它们有两种主要的形式，BRE 和 ERE ，使用哪种取决于上述的文本工具。

emacs 中的正则表达式基本上是 BRE 但含有 ERE 中的元字符 + 和 ?。因此，在 emacs 中没必要使用 \ 来转义它们。

grep 可以使用正则表达式来进行文本搜索。

    BRE                     ERE                正则表达式的描述
    \ . [ ] ^ $ *           \ . [ ] ^ $ *      通用的元字符
    \+ \? \( \) \{ \} \|                       BRE 独有的 \ 转义元字符
                            + ? ( ) { } |      ERE 独有的不需要 \ 转义的元字符
    c                       c                  匹配非元字符 c 
    \c                      \c                 匹配一个字面意义上的字符 c ，即使 c 本身是元字符
    .                       .                  匹配任意字符，包括换行符
    ^                       ^                  字符串的开始位置
    $                       $                  字符串的结束位置
    \<                      \<                 单词的开始位置
    \>                      \>                 单词的结束位置
    [abc…]                  [abc…]             匹配在 abc... 中的任意字符
    [^abc…]                 [^abc…]            匹配除了 abc... 中的任意字符
    r*                      r*                 匹配零个或多个 r 
    r\+                     r+                 匹配一个或多个 r 
    r\?                     r?                 匹配零个或一个 r 
    r1\|r2                  r1|r2              匹配一个 r1 或 r2 
    \(r1\|r2\)              (r1|r2)            匹配一个 r1 或 r2 ，并作为括号内的正则表达式

    Table 1.24: BRE 和 ERE 中的元字符

示例，从 GPL 协议文件中查找内容：

    $ egrep ’GNU.*LICENSE|Yoyodyne’ /usr/share/common-licenses/GPL
    GNU GENERAL PUBLIC LICENSE
    GNU GENERAL PUBLIC LICENSE
    Yoyodyne, Inc., hereby disclaims all copyright interest in the program


对于替换表达式，一些字符有特殊的含义。

    替换表达式    替换表达式替换的文本
    &            正则表达式所匹配的内容（在 emacs 中使用 \& ）
    \n           前 n 个括号的正则表达式匹配的内容（“n”是数字）
    Table 1.25: 替换表达式

对 Perl 替换字符串来说，应使用 $& 而非 &，应使用 $n 而非 \n。

    $ echo zzz1abc2efg3hij4 | 
    sed -e ’s/\(1[a-z]*\)[0-9]*\(.*\)$/=&=/’
    zzz=1abc2efg3hij4=

    $ echo zzz1abc2efg3hij4 | \
    sed -e ’s/\(1[a-z]*\)[0-9]*\(.*\)$/\2===\1/’
    zzzefg3hij4===1abc
    
    $ echo zzz1abc2efg3hij4 | \
    perl -pe ’s/(1[a-z]*)[0-9]*(.*)$/$2===$1/’
    zzzefg3hij4===1abc
    
    $ echo zzz1abc2efg3hij4 | \
    perl -pe ’s/(1[a-z]*)[0-9]*(.*)$/=$&=/’
    zzz=1abc2efg3hij4=

ed 命令可以在“file”中将所有的“FROM_REGEX”替换成“TO_TEXT”。

    $ ed file <<EOF
    ,s/FROM_REGEX/TO_TEXT/g
    w
    q
    EOF

sed 命令可以在 file 中将所有的 FROM_REGEX 替换成 TO_TEXT 。

    $ sed -i -e ’s/FROM_REGEX/TO_TEXT/g’ file

vim 命令可以通过使用 ex 命令在 file 中将所有的 FROM_REGEX 替换成 TO_TEXT 。

    $ vim ’+%s/FROM_REGEX/TO_TEXT/gc’ ’+w’ ’+q’ file

提示 上面的 c 标志可以确保在每次替换时都进行交互式的确认。

多个文件（ file1 ， file2 和 file3 ）可以使用 vim 或 perl 通过正则表达式进行类似的处理。

    $ vim ’+argdo %s/FROM_REGEX/TO_TEXT/ge|update’ ’+q’ file1 file2 file3

提示 上面的 e 标志是为了防止 No match 错误中断替换。

    $ perl -i -p -e ’s/FROM_REGEX/TO_TEXT/g;’ file1 file2 file3

在 perl 例子中,  -i  是在每一个目标文件的原处编辑， -p  是表示循环所有给定的文件。

提示 使用参数“-i.bak”代替“-i”，可以在文件名后添加“.bak”再保存。对于复杂的替换，这使得从错误中恢复变得容易。


Awk 经常被用来从这种类型的文件中提取数据。下面有一个文本文件 DPL，里面含有 2004 年以前 Debian 项目的领导者名字和起始日期，并以空格分隔。

    Ian Murdock August 1993
    Bruce Perens April 1996
    Ian Jackson January 1998
    Wichert Akkerman January 1999
    Ben Collins April 2001
    Bdale Garbee April 2002
    Martin Michlmayr March 2003

提示 参见 Debian 简史获取最新的 Debian 领导阶层历史。

    $ awk ’{ print $3 }’ <DPL # month started
    August
    April
    January
    January
    April
    April
    March

    $ awk ’($1==”Ian”) { print }’ <DPL # DPL called Ian
    Ian Murdock August 1993
    Ian Jackson January 1998

    $ awk ’($2==”Perens”) { print $3,$4 }’ <DPL # When Perens started
    April 1996


Shell 例如 Bash 也可以用来分析这种文件。

    $ while read first last month year; do
    echo $month
    done <DPL
    ... 第一个 AWK 例子的一些输出


内建命令 read 使用 $IFS （内部域分隔符）中的字符来将行分隔成多个单词。如果你将 $IFS 改变为 : ，你可以很好地使用 shell 来分析 /etc/passwd。

    $ oldIFS=”$IFS” # save old value
    $ IFS=’:’
    $ while read user password uid gid rest_of_line; do
    if [ ”$user” = ”bozo” ]; then
    echo ”$user’s ID is $uid”
    fi
    done < /etc/passwd
    bozo’s ID is 1000

    $ IFS=”$oldIFS” # restore old value

如果要用 Awk 做到相同的事，使用 FS=’:’ 来设置域分隔符。IFS 也被 shell 用来分割参数扩展、命令替换和算术扩展的结果。这不会出现在双引号或单引号中。IFS 的默认值为 < 空格 >、`<tab>` 和 < 换行符 >。请谨慎使用 shell 的 IFS 技巧。当 shell 将脚本的一部分解释为对它的输入时，会发生一些奇怪的事。

    $ IFS=”:,” # use ”:” and ”,” as IFS
    $ echo IFS=$IFS, IFS=”$IFS” # echo is a Bash builtin
    IFS= , IFS=:,
    $ date -R # just a command output
    Sat, 23 Aug 2003 08:30:15 +0200
    $ echo $(date -R) # sub shell --> input to main shell
    Sat 23 Aug 2003 08 30 36 +0200
    $ unset IFS # reset IFS to the default
    $ echo $(date -R)
    Sat, 23 Aug 2003 08:30:50 +0200


## ==⚡ bash nohup jobs &

Linux 任务前后台的切换，参考 bash Manual - 7.2 Job Control Builtins

Shell 支持作用控制，有以下命令实现前后台切换：

1. command& 让命令进程在后台运行，和 && 运行多条命令不同
2. jobs 查看后台运行的进程
3. fg %n 切换后台运行的进程 n 到前台来
4. bg %n 切换进程 n 到后台去
5. kill %n 杀死 n 编号的 job 任务

PS: "n" 为 jobs 命令查看到的线程 ID，不是进程编号。

| Ops       | Note
|-----------|--------------------------------------------
| &         | 用在一个命令的最后，可以把这个命令放到后台执行
| Ctrl-Z    | 正在前台执行的命令时按下，将其转移为后台暂停执行
| jobs      | 查看当前有多少在后台运行的命令
| fg        | 将后台中的命令调至前台继续运行，可以指定 job ID
| bg        | 继续执行后台暂停的命令，可以指定 job ID
 
假设你发现前台运行的一个程序需要很长的时间，但是需要干其他的事情，就可以用 Ctrl-Z ，转到后台执行，可以看到系统提示：

    [1]+ Stopped /root/bin/rsync.sh

方括号中的数字为 job ID，用 jobs 命令查看任务。可以使用 bg 将任务程序调度到后台执行。
这样，你在控制台上就只能等待这个任务完成了。 


使用 **&** 表示后台运行程序，等效 Ctrl-Z。使用 **ps** 或 **jobs** 命令查看后台程序，**fg** 命令可以将上一个后台程序呼唤到前台。

    $ ./my-shell-script.sh &
    $ nohup ./my-shell-script.sh &

Shell 支持作用控制： 

- command& 让进程在后台运行；
- jobs 查看后台运行的进程；
- fg %n 让后台运行的进程 n 号进程到前台来；
- bg %n 让进程 n 到后台运行； 

如果，服务程序后台运行标记为 **Stopped**，那么就需要使用其它方式运行。

在《Unix 环境高级编程》第 9.8 节作业控制中讲到，“如果后台程序试图读取终端，这并不是一个错误，但是终端驱动程序将检测这种情况，并向后台作业发送一个特定信号 SIGTTIN，该信号会停止此后台程序，并向用户发送通知”。

解决方案

- 在程序中去除读终端的相关代码；
- 使用重定向 **./test_server < /dev/null &**；
- 使用 nohup，**nohup ./test_server &**, 忽略该程序的输入，并将输出追加到 nohup.out。


详情请参考这篇文章 Bg, Fg, &, Ctrl-Z – 5 Examples to Manage Unix Background Jobs
https://www.thegeekstuff.com/2010/05/unix-background-job/

通过 nohup 和 & 符号在后台执行命令后，即使你退出登录，这个命令也会一直执行。但是，你无法重新连接到这个会话，要想重新连接到这个会话，你可以使用 screen 命令。

Linux 的 screen 命令提供了分离和重新连接一个会话的功能。当你重新连接这个会话的时候，你的终端和你分离的时候一模一样。

详情请参考这篇文章 Screen Command Examples: Get Control of Linux / Unix Terminal
http://www.thegeekstuff.com/2010/07/screen-command-examples/


使用 at 命令，你可以让一个命令在指定的日期和时间运行，例如要在明天上午10点在后台执行备份脚本，执行下面的命令：

    $ at -f backup.sh 10 am tomorrow

详情请参考这篇文章 Understand at, atq, atrm, batch Commands using 9 Examples
http://www.thegeekstuff.com/2010/06/at-atq-atrm-batch-command-examples/

在批处理模式下执行某些任务需要启用一些选项。下面的文章会给出详细解释：.

How To Capture Unix Top Command Output to a File in Readable Format
Unix bc Command Line Calculator in Batch Mode
How To Execute SSH and SCP in Batch Mode (Only when Passwordless login is enabled)


使用 watch 连续地执行一个命令

要想按一个固定的间隔不停地执行一个命令，可以使用watch命令，如下所示：

    $ watch df -h

本文固定链接: http://www.cnmiss.cn/?p=441



## ==⚡ pipe 管道命令示范
- [Shell Mistakes](http://www.greenend.org.uk/rjk/2001/04/shell.html)

使用管道命令可以连接多个其它命令，编写单行 shell 脚本，可以执行相当复杂的任务。

当使用 shell 交互模式变得太麻烦的时候，请考虑写一个 shell 脚本，脚本文件是指第一
行内容包含有下面格式的可执行的文本文件。

    #!/bin/sh

第一行指明了读取并执行这个文件的 shell 解释器。读懂 shell 脚本的最好办法是先理解
UNIX 系统如何工作。不像 shell 交互模式，shell 脚本会频繁使用参数、条件和循环等。

```sh
#!/bin/sh

find /usr -print             # 找出 /usr 下的所有文件
seq 1 100                    # 显示 1 到 100
| xargs -n 1 <cmd>           # 把从管道过来的每一项作为参数，重复执行 cmd 命令
| xargs -n 1 echo            # 把从管道过来的，用空格隔开的项，分隔成多行
| xargs echo                 # 把从管道过来的所有行合并为一行
| grep -e <regex_pattern>    # 从管道过来，包含有 <regex_pattern> 的行，提取出来
| grep -v -e <regex_pattern> # 把从管道过来，不包含有 <regex_pattern> 的行，提取出来
| cut -d: -f3 -              # 把从管道过来，用”:” 分隔的第三列提取出来 (passwd 文件等。)
| awk ’{ print $3 }’         # 把用空格隔开的第三列提取出来
| awk -F’\t’ ’{ print $3 }’  # 把用 tab 键隔开的第三列提取出来
| col -bx               # 删除退格键，扩展 tab 键为空格键
| expand -              # 扩展 tab 键到空格键
| sort| uniq            # 排序并删除重复行
| tr ’A-Z’ ’a-z’        # 将大小字母转换为小写字母
| tr -d ’\n’            # 将多行连接为一行
| tr -d ’\r’            # 删除换行回车符
| sed ’s/^/# /’         # 在每行行首增加一个”#” 符
| sed ’s/\.ext//g’      # 删除”.ext”
| sed -n -e 2p          # 显示第二行
| head -n 2 -           # 显示最前面两行
| tail -n 2 -           # 显示最后两行
```


## ==⚡ lsof - List open file

lsof 是系统管理/安全工具，用来列出打开的文件。

Unix 系统一切皆文件，包括网络套接口都是文件，可见 lsof 有多重要。

lsof 是有着最多开关的 Linux/Unix 命令之一，许多选项支持使用 - + 前缀。

选项使用：

  + 默认 : 没有选项，lsof 列出活跃进程的所有打开文件
  + 组合 : 将选项组合到一起，如 -abc，当心某些选项需要参数
  + -a : 结果进行“与”运算而不是“或”
  + -l : 在输出显示用户 ID 而不是用户名
  + -h : 获得帮助
  + -t : 仅获取进程 ID
  + -U : 获取 UNIX 套接口地址
  + -F : 格式化输出结果，如 -F pcfn 打印 pid、命令名、文件描述符、文件名

```sh
# lsof -i[46] [protocol][@hostname|hostaddr][:service|port]
$ sudo lsof -i
$ sudo lsof -i :22
$ sudo lsof -i @localhost:80
$ sudo lsof -i -sTCP:LISTEN

# list user opening files
$ awk -F: '{ print $1, " - ", $5 }' /etc/passwd
$ sudo lsof -u root  # that root user open
$ sudo lsof -u ^root # that other user open

# list files that 1st process opend
lsof -p $(ps | head -n2 | tail -n1 | awk -F " " '{ print $1 }')
```



## ==⚡ tmux - Terminal Multiplexer
+ https://danielmiessler.com/study/tmux/
+ https://cloud.tencent.com/developer/article/1526675
+ https://www.man7.org/linux/man-pages/man1/tmux.1.html

Tmux 是一个终端复用器（terminal multiplexer），它类似 GNU Screen 可以管理终端会话。

命令行的典型使用方式是，打开一个终端窗口，执行命令，完成工作后关闭窗口结束与计算机
的交互，这种临时的交互称为"会话"（session）。

会话开始到结束这个过程的一个重要特点是，客户端窗口与服务端终端服务进程连接在一起。
打开窗口，会话开始，用户输入数据，服务端响应用户；关闭窗口，会话结束，服务进程
随之终止，不管有没有运行完。

典型例子就是 SSH 登录远程计算机，打开一个远程窗口执行命令。如果此时网络突然断线，
再次登录就不是上一次执行的命令，因为上一次 SSH 会话已经终止，相关进程也随之终止。

为终端加入会话管理可以方便时间碎片化的工作，退出客户端而不用关闭服务端，会话与
客户窗口可以"解绑"：窗口关闭时，会话并不终止，而是继续运行，等到以后需要的时候，
再让会话重新"绑定"一个新的客户端窗口。


Tmux 提供丰富的快捷键操作，每个 Tmux 程序界面包含多个 Window，子层级含多个 Panel，
和 Vim 中的一个 Panel 包含多个 Window 结构一样，只是叫法不同。

（1）它允许在单个进程界面同时访问多个会话。同时运行多个终端程序。
（2）它可以临时脱离会话，然后再让新窗口"接入"已经存在的会话。
（3）它允许每个会话有多个连接窗口，因此可以多人实时共享会话。
（4）它还支持窗口任意的垂直和水平拆分。

类似的终端复用器还有 GNU Screen。Tmux 与它功能相似，但是更易用，也更强大。但是
不支持滚屏内容回看，复制粘贴操作比较复杂，这多少有点不便。

Basically, tmux sessions have windows, and windows have panes. Here’s how I 
conceptualize the structure.

  + `Sessions` are for an overall theme, such as work, or experimentation, or sysadmin.
  + `Windows` are for projects within that theme.
    So perhaps within your experimentation session you have a window titled noderestapi, 
    and one titled lua sample.
  + `Panes` are for views within your current project. So within your sysadmin session, 
    which has a logs window, you may have a few panes for access logs, error logs, and system logs.

每启动一个 Tmux 窗口，都有相应的会话 ID 编号，从 0 开始，然后是 1，以此类推。
使用 tmux ls 命令可以查看 ID，命令可以使用编号区分会话，可以给会话起名，更直观。

会话管理包括以下操作：

```sh
  # + 新建会话
  tmux         # or tmux new -s session-name
  tmux ls      # or tmux list-session

  # + 分离会话
  tmux detach  # or Ctrl-b d

  # + 接入会话
  tmux attach -t id
  # or tmux attach -t <session-name>

  # + 结束会话
  tmux kill-session -t id
  # or tmux kill-session -t <session-name>

  # + 切换会话
  tmux switch-session -t id
  # or tmux switch -t <session-name>

  # + 重命名会话
  tmux rename-session -t id <new-name>
```

快捷键使用统一的前导键，Ctrl-b，以下所以快捷操作都需要先按前导键：

  + Basics
    + ?  List all key bindings.

  + Session management
    + s  Select a new session for the attached client interactively
    + (  Switch the attached client to the previous session.
    + )  Switch the attached client to the next session.
    + $  rename the current session
    + d  detach from the current session

  + Windows
    + c  create a new window
    + '  Prompt for a window index to select.
    + ,  rename the current window
    + w  list windows
    + %  split panel horizontally
    + "  split panel vertically
    + n  change to the next window
    + p  change to the previous window
    + 0  to 9 select windows 0 through 9
    + .  Prompt for an index to move the current window.

  + Panes
    + h  move to the left pane. *
    + j  move to the pane below *
    + l  move to the right pane *
    + k  move to the pane above *
    + q  show pane numbers
    + o  toggle between panes
    + }  swap with next pane
    + {  swap with previous pane
    + !  break the pane out of the window
    + x  kill the current pane
    + [  Enter copy mode to copy text or view the history.
    + ]  Paste the most recently copied buffer of text.
    + Space  Arrange the current window in the next preset layout.
    + Up, Down Left, Right  Change to the panel siting on to the current pane.
    + C-Up, C-Down C-Left, C-Right  Resize the current pane in steps of one cell.
    + M-Up, M-Down M-Left, M-Right  Resize the current pane in steps of five cells.

复制粘贴操作

    + Enter ‘copy mode’ by pressing CTRL+b, [.
    + Use the arrow keys to go to the position from where you want to start copying. 
    + Press CTRL+SPACE to start copying.
    + Use arrow keys to go to the end of text you want to copy. 
    + Press ALT+w or CTRL+w to copy into Tmux buffer.
    + Press CTRL+b, ] to paste in a possibly different Tmux pane/window.

监视活动命令窗口

```sh
#!/usr/bin/env zsh
# https://github.com/ChengranAA/dynamic_tmux_sidebar/blob/main/tree_active_pane.sh

function pwdx {
  lsof -a -d cwd -p $1 -n -Fn | awk '/^n/ {print substr($0,2)}'
}

function tree_active_pane () {
  #get the pid and wd
  active_pane_pid=$(tmux list-panes -F '#{pane_active} #{pane_pid}' | grep -o '^1[[:space:]][0-9]\+$' | grep -o '\w[0-9]\+')
  active_wd=$(pwdx $active_pane_pid)
  #list file tree with color and 2 layer
  tree -LC 1 $active_wd
}

# allow subprocess to access the function 
export -f pwdx
export -f tree_active_pane

watch -tcn 1 tree_active_pane
```


## ==⚡ tr - stdin translate

SYNOPSIS

       tr [OPTION]... SET1 [SET2]

Options

    -c : complements the set of characters in string.i.e., operations apply to characters not in the given set
    -d : delete characters in the first set from the output.
    -s : replaces repeated characters listed in the set1 with single occurrence
    -t : truncates set1

tr 命令用来对 stdin 数据进行转换处理，包括替换，多字符缩减，大小写转换，删除，或 -c 取补集。
使用 -t 会根据 SET2 长度截断 SET1。替换操作是字符对应替换，SET1 对应 SET2 相应位置的字符：

```sh
$ echo gnu | tr -s [:lower:] [:upper:]
$ echo cmd | tr -t [a-z] [A-Z]            # cmd ==> CMD
$ echo Bad  apple | tr -s [:space:] ' '   # Bad  apple ==> "Bad apple"
$ echo "GNU is not Unix" | tr  -d i       # ==> GNU s not Unx
$ echo "GNU is not Unix" | tr -cd i       # ==> ii
$ echo "GNU is not Unix" | tr -t "is" "I" # replace i ==> I
```

## ==⚡ su - switch user

退出用户登录，直接 logout 回车即可;

切换用户登录使用 su name 命令，switch user 命令切换用户，如果是普通用户切换到 root，则直接 su 回车把 root 变量都传递了过来;

设置新账户，假设账户名为 lanp：

- adduser lanp 命令创建用户；
- passwd lanp 命令设置用户密码；

提示你输入新的密码，以及密码输入后的确认密码，出现身份验证令牌已经成功更新，表示用户以及创建成功。

su fails with an authentication problem since the root account is blocked by default in Ubuntu, and there is no root password.

    su: Authentication failure

WSL 系统可能因为默认 root 账户没有密码而不能通过 su 切换获得授权，使用 sudo -i 登录超级账户，这个命令还可以 -u 指定账户。


# 🚩 Debian root 登录
https://wiki.debian.org/sudo/

Debian 系统的普通用户需要安装软件时，往往会收到 Permission denied 的提示，这时候需要root权限。对于大多数Linux系统来说，在不登陆超级管理员账户的前提下可以通过 sudo 命令来获取 root 权限，或者通过 su 登陆超级管理员账户。

系统没有安装 sudo，就需要安装 sudo 及配置其 sudoers 文件

首先使用 su 登陆超级管理员账户，在 Terminal 命令行内输入 su ,Enter 键后，输入超级管理员密码，即进入 root 账户。

    apt-get install sudo

输入命令 adduser yl sudo,  Enter 键
意思是：将我的用户名 yl 添加到sudo组内，大家根据实际将自己的用户名添加进sudo组内
接下来是配置sudoers文件，这里通过vi编辑器来写
-输入命令 vi /etc/sudoers 进入sudoers文件；
-在vi命令模式中，输入 /%sudo 搜索定位到 %sudo ALL = (ALL:ALL) ALL，或者手动定位
-在vi插入模式中（按一下 i 键），在  %sudo ALL = (ALL:ALL) ALL 下面键入 yl ALL = (ALL:ALL) ALL  （同样，这里 yl 代表我的普通用户名，大家根据实际修改）
-在vi命令模式中，输入 :x ,即可退出vi并保存文件

验证sudo是否安装成功
重启下Terminal ，输入命令 sudo ls ，再输入用户密码，如果显示如下字样，则可能sudo安装或配置出现了问题，需要重复上述步骤；
yl is not in the sudoers file.  This incident will be reported.
如果显示如下字样，则说明sudo安装与配置成功
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos


Debian 默认不允许 root 登录，可以修改配置。

1）、首先修改gdm3的设定文件（/etc/gdm3/deamon.conf），在[security]字段后面追加如下一行：

    AllowRoot =ture

2）、最后修改gdm3的登录pam文件

    #vi/etc/pam.d/gdm3

让Debian以root自动登录。

1）、首先修改gdm3的设定文件（/etc/gdm3/deamon.conf），在[daemon]字段后面追加如下两行：

    AutomaticLogin= false //改为true
    AutomaticLogin= root //以root自动登录

如果想等几秒再登录，可以在[daemon]字段后面追加如下内容：

    TimedLoginEnable =true
    TimedLogin =root
    TimedLoginDelay = 5//延迟5秒登录，可修改

2）、最后修改gdm3的自动登录pam文件

    #vi/etc/pam.d/gdm3-autologin

将 auth requiredpam_succeed_if.so user != root quiet_success 注释掉。即在本行前加 #，可以取消 Debian 不让 root 登录的限制。

重启即可。


# 🚩 Language 语言配置
https://wiki.debian.org/ChangeLanguage

可以通过设置环境变量比如 LANG, LANGUAGE, LC_CTYPE, LC_MESSAGES 成你的当地语言。通常设置 LANG (或者 LC_ALL) 就足够了。使用以下命令查看你当前所使用的语言环境：

    env | grep LANG

要支持区域设置，首先要安装 locales 软件包，：

    aptitude install locales
    dpkg-reconfigure locales

在对话框中选择语言

    less /etc/environment

配置命令在 /usr/sbin 目录下，如果在环境变量中没有定位到它，就手动指定目录或修改环境变量配置。

如果在安装 debian 基本系统的时候选择了英文的语言环境，之后又希望将它改为中文，需要完成下面几方面的工作。设置 locale 如果没有安装 locale 工具，则首先要安装它，然后执行 dpkg-reconfigure locales 选择语言包。需要添加上 zh_CN 开头的几个选项，当然也可以只添加一个，然后，选择其中的一个作为默认。设置完成后，执行 locale 命令检查一下当前的 locale 设置是否为中文了。



运行 dpkg-reconfigure locales，选择上以下选项：

    en_US ISO-8859-1
    zh_CN GB2312
    zh_CN.GBK GBK
    zh_CN.UTF-8 UTF-8
    zh_TW BIG5
    zh_TW.UTF-8 UTF-8

中文环境当然需要中文字体的支持，手工添加中文的xft字库。

- ttf-arphic-gbsn00lp (AR PL SungtiL GB)
- ttf-arphic-gkai00mp (AR PL KaitiM GB)
- ttf-arphic-bsmi00lp (AR PL Mingti2L Big5)
- ttf-arphic-bkai00mp (AR PL KaitiM Big5)

前面两个是简体的，后面两个是繁体的，但是最好都装上，否则到时候很可能乱码。这些只是基本字体，只能保证中文正常显示，如果要好看一点的话，可以在软件中心搜索安装xfonts。

    apt-get update

    apt-get install ttf-arphic-gbsn00lp ttf-arphic-gkai00mp
    apt-get install ttf-arphic-bsmi00lp ttf-arphic-bkai00mp

    apt-get install ttf-microsoft-simsun ttf-microsoft-simhei
    apt-get install ttf-microsoft-simyou ttf-microsoft-simli


如果重启X后，发现整个系统的界面显示的还是英文，而使用 locale 命令检查 系统的 locale 设置又已经正确的配置为中文。当时遇到的情况就是某些应用的标题等显示为中文，但是工具菜单等显示和文件管理器等都显示成了英文。这种情况很有可能是因为 /etc/enviroment 文件里有关语言的环境变量的设置不对如英文环境：

    LANGUAGE="en_US:en"
    LANG="zh_CN"

在LANGUAGE字段添加中文的设置，比如：

    LANGUAGE="zh_CN:zh:en_US:en"

重启X，系统的语言环境应该就变为中文的了。

主要步骤：

    #重新配置locales
    1、dpkg-reconfigure locales
    2、在对话框中选择语言
    3、less /etc/environment

改为以下几行

    LC_ALL="zh_CN.UTF-8"
    LANG="zh_CN.UTF-8"
    LANGUAGE="zh_CN.UTF-8:zh:en_US:en"

重启电脑 locale charmap 输出：UTF-8 即可以了。


接下来就是安装中文输入法，个人推荐使用ibus，比较好用而且兼容性也还行，可以参考
http://www.cnblogs.com/pengdonglin137/p/3280520.html

当然，在X环境下还要设置locale变量：

可以在/etc/X11/Xsession.d/95xinput这个文件里写上如下语句：

    export LANG=zh_CN.gb2312

PS：如果你在启动之后执行这条命令不会有效，只能重启并在加载X window之前执行才有效，这就是为什么把它写入文件的原因（这个文件在X window启动前被加载。）

这样一来，你的系统菜单等也会变成中文，如果你还是想要英文菜单，但是只要能显示中文，那么就要多设置几个变量：

    ENCODING="en_US"
    #export LC_ALL=$ENCODING
    export LC_MESSAGES=$ENCODING
    #export LC_COLLATE=$ENCODING
    #export LC_CTYPE=$ENCODING
    export LC_TIME=$ENCODING
    export LC_NUMERIC=$ENCODING
    #export LC_MONETARY=$ENCODING
    #export LC_PAPER=$ENCODING
    #export LC_NAME=$ENCODING
    export LC_ADDRESS=$ENCODING
    export LC_TELEPHONE=$ENCODING
    export LC_MEASUREMENT=$ENCODING
    export LC_IDENTIFICATION=$ENCODING

同样把这些写入/etc/X11/Xsession.d/95xinput文件，重启就行了。


终端对中文的支持

KDE默认的终端是konsole, 默认就支持中文，而且还支持得不错，gnome 默认的终端是 gnome-terminal, 要支持中文的话只要在菜单里选上中文相应的编码就行了。

配置编码进入选择：(空格键是选择，不是ENTER，选择完了后再ENTER）

    en_US.UTF8
    zh_CN GB2312
    zh_CN GBK GBK
    zh_CN UTF-8 UTF-8

    vi /etc/default/locale
    LANG=en_US.UTF-8

如果还有方块需要装字体：

    apt-get install ttf-arphic-uming
    apt-get install ttf-wqy-zenhei


# 🚩 Anaconda 安装

For Python3:

    wget https://repo.anaconda.com/archive/Anaconda3-5.3.1-Linux-x86.sh
    bash Anaconda-5.3.1-Linux-x86.sh

    wget https://repo.anaconda.com/archive/Anaconda3-5.3.1-Linux-x86_64.sh
    bash Anaconda3-5.3.1-Linux-x86_64.sh


For Python2:

    wget https://repo.anaconda.com/archive/Anaconda2-5.3.1-Linux-x86.sh
    bash Anaconda-5.3.1-Linux-x86.sh

    wget https://repo.anaconda.com/archive/Anaconda2-5.3.1-Linux-x86_64.sh
    bash Anaconda2-5.3.1-Linux-x86_64.sh



# 🚩 Virtualbox 虚拟机增强包安装

1. 点击菜单栏 设备 –> 分配光驱 –> 选择一个虚拟光盘，找到 VirtualBox 安装目录下的 VBoxGuestAdditions.iso，加载此镜像。
2. 启动Linux系统并用root身份登入系统
3. 执行挂载命令，将虚拟光盘挂在到 /mnt/cdrom，如果没有cdrom目录，则先创建之。

    mkdir /mnt/cdrom
    mount -t auto -r ro /dev/cdrom /mnt/cdrom

4. 复制脚本到/tmp目录下

    cd /mnt/cdrom
    cp VBoxLinuxAdditions.run /tmp
    cd /tmp
    chmod a+x VBoxLinuxAdditions.run

5. 上述脚本需要安装 gcc,make,kernel-devel等工具和开发包，可执行（此处请根据实际系统选择安装工具，CentOS用yum，其它请另行选择）

    yum install -y gcc gcc-devel gcc-c++ gcc-c++-devel make kernel-devel

6. 执行安装（此处未安装桌面支持）

    sh ./VBoxLinuxAdditions.run --noexec --nox11

7. 重启系统

    shutdown -r now

8. 添加共享目录

    菜单 设置 –> 共享文件夹 –> 添加文件夹，并设置相关路径和权限

    点击 设备(Devices) -> 共享文档夹(Shared Folders)菜单，添加一个共享文档夹，选项固定和临时是指该文档夹是否是持久的。共享名能够任取一个自己喜欢的，比如 shared_win 尽量使用英文名称。

9. 挂载共享文件夹

    如果选择了自动挂载的话，不需要执行一下步骤。共享文件夹会自动挂在到 /media/sf_share

        mkdir /mnt/shared_linux
        mount -t vboxsf shared_win /mnt/shared_linux

    通过 mount 命令可以查看挂载列表，你会看到如下内容：

        share on /media/sf_share type vboxsf (gid=500,rw)

    说明自动挂载成功了


    假如您不想每一次都手动挂载，能够在 /etc/fstab 中添加一项

    shared_win  /mnt/shared_linux  vboxsf  rw,gid=[username],uid=[username],auto  0  0

    以上的 vboxsf 是群组名称，[username] 是你的用户名，文件夹 /mnt/shared_linux 是挂载目录，这样就能够自动挂载了。

    卸载的话使用下面的命令：

        sudo umount -f /mnt/shared_linux


Debian 系统安装 Virtualbox 首先增加源：

echo "deb http://download.virtualbox.org/virtualbox/debian stretch contrib" > /etc/apt/sources.list.d/virtualbox.list

然后就可以安装：

    apt-get install virutalbox-*


# 🚩 echo 回响命令

命令用法参考：

    $ help echo
    echo: echo [-neE] [arg ...]
        Write arguments to the standard output.
        
        Display the ARGs, separated by a single space character and followed by a
        newline, on the standard output.
        
        Options:
          -n        do not append a newline
          -e        enable interpretation of the following backslash escapes
          -E        explicitly suppress interpretation of backslash escapes
        
        `echo' interprets the following backslash-escaped characters:
          \a        alert (bell)
          \b        backspace
          \c        suppress further output
          \e        escape character
          \E        escape character
          \f        form feed
          \n        new line
          \r        carriage return
          \t        horizontal tab
          \v        vertical tab
          \\        backslash
          \0nnn     the character whose ASCII code is NNN (octal).  NNN can be
                    0 to 3 octal digits
          \xHH      the eight-bit character whose value is HH (hexadecimal).  HH
                    can be one or two hex digits
          \uHHHH    the Unicode character whose value is the hexadecimal value HHHH.
                    HHHH can be one to four hex digits.
          \UHHHHHHHH the Unicode character whose value is the hexadecimal value
                    HHHHHHHH. HHHHHHHH can be one to eight hex digits.
        
        Exit Status:
        Returns success unless a write error occurs

不换行输出：

    echo -n "abc..."
    echo -e "abc...\c"

使用 -e 解析转义字符，如打印信息后，光标直接回到行首，且不换行：

    echo -e "to be covered...\r\c"
    echo -ne "to be covered...\r"



# 🚩 File Permissions: chmod chown chgrp 文件属性修改

https://www.kernel.org/doc/html/latest/filesystems/index.html

每个文件都有一组权限信息，可以使用 `ls -l` 命令查看：

    -rw-r--r-- 1 jeango jeango   31 May  4 07:56 demo.sh
    ---------- - ------ ------ ---- ------------ -------
    ^          ^ ^      ^      ^    ^            ^
    |          | |      |      |    |            第七列：Filename 文件名
    |          | |      |      |    第六列：Modification time 文件最后更新（修改）时间
    |          | |      |      第五列：File size 文件长度（大小）
    |          | |      第四列：Group 文件的所属用户组 
    |          | 第三列：User 文件的所有者 
    |          第二列：Hard link count 一个数字表示文件 inode 链接个数
    第一列：File type & Permissions 文件类型、和文件权限，对应 owner/owner group/others

文件类型，大体分为如下几类：

- `d` ：目录 
- `-` ：文件 
- `l` ：链接 
- `s` ：socket 
- `p` ：named pipe 
- `b` ：block device 
- `c` ：character device

文件权限分为三段，对应文件所有者的权限、文件所属组的权限、其他用户对文件的权限，每组有 3 个字符表示不同的权限：

- `r` : Readable 可读，用数字 4 表示
- `w` : Writable 可写，用数字 2 表示
- `x` : Executable 可执行，用数字 1 表示
- `-` : 无权限，用数字 0 表示

使用 chmod 命令修改文件权限：

    Usage: chmod [OPTION]... MODE[,MODE]... FILE...
      or:  chmod [OPTION]... OCTAL-MODE FILE...
      or:  chmod [OPTION]... --reference=RFILE FILE...
    Change the mode of each FILE to MODE.

为所有用户或用户组增加或清除所有权限，所有权值相加为 7。

权限可以使用 agou 简写符号表示，权限前的 + 号表示增加权限，- 表示移除权限，无 +- 符号表示替换权限：

```sh
# Use the octal CHMOD Command:
chmod -R 007 folder_name

# OR use the symbolic CHMOD Command:
chmod -R a+rwx,u-rwx,g-rwx folder_name

chmod -wrx demo.sh
chmod 000 demo.sh

chmod +wrx demo.sh
chmod 777 demo.sh

chmod -R 777 /upload
```

How do I use symbolic mode?
Symbolic mode uses more symbols, but the symbols are simpler to understand. 
That's attractive to sysadmins that are new to standard Linux permissions.

    Each access level has a symbol:

    Access level                Symbol
    Read                        r
    Write                       w
    Execute                     x
    setuid/setgid               s
    sticky                      t

    Each identity has a symbol:

    Identity                    Symbol
    User                        u
    Group                       g
    Others                      o
    All (user + group + other)  a

    There are also operators to manipulate the permissions:

    Task                        Operator
    Grant a level of access     +
    Remove a level of access    -
    Set a level of access       =

在 Android 系统中使用 Termux 等工具修改文件权限时，会有一个尴尬的情况，那就是将权限改成 007 这
种，所有权丢失，导致不能访问文件。不小心将 070 权限写成 07 就会导致结果为 007 权限，从而使 user
和 group 失去权限。尽管他们可以创建文件，但却不能删除文件，这种权限用法也是有需求的。在不解锁 root
权限的前提下，只能通过应用数据清除，所有 app 使用过程产生的数据将丢失。

用户组修改及所有者

    Examples:
      chgrp staff /u      Change the group of /u to "staff".
      chgrp -hR staff /u  Change the group of /u and subfiles to "staff".

    Examples:
      chown root /u        Change the owner of /u to "root".
      chown root:staff /u  Likewise, but also change its group to "staff".
      chown -hR root /u    Change the owner of /u and subfiles to "root".


查看用户信息：

    Usage: id [OPTION]... [USER]

创建用户：

    useradd [选项] 用户名

修改用户信息：

    usermod [选项] 用户名

修改用户密码：

    passwd [选项] 用户名

删除用户，-r 选项表示在删除用户的同时删除用户 HOME 目录。

    userdel -r 用户名

添加用户组：

    groupadd [选项] 组名

添加用户到一个用户组：

    usermod -aG 组名 用户名


Linux 文件权限中还有 SetUID, SetGID, Sticky 三种特别的标志比特，常用于提升权限。SetUID 允许
用户以可执行程序文件的所有者权限运行。SetGID 则允许目录中的创建的文件继承目录的 group ID。
注意，设置 setuid/setgid 标志后，`ls -l` 命令可以看到 s 符号取代执行符号（x）。

    sudo chmod u+s /path/to/file
    sudo chmod g+s /path/to/directory
    sudo chmod +t /path/to/directory

SetUID (Set User ID) and SetGID (Set Group ID) are special permissions in 
Unix-like operating systems. SetUID allows users to run an executable with 
the permissions of the executable’s owner, typically granting elevated 
privileges. SetGID, on the other hand, affects group access. For directories, 
it ensures that files created within the directory inherit the directory’s 
group ID, rather than the creating user’s primary group ID. For executable 
files, it allows the file to run with the group permissions of the file’s group.

The Sticky Bit is a permission setting used primarily on directories. It 
restricts file deletion within the directory such that only the file’s owner, 
the directory’s owner, or the superuser can delete or rename files. Commonly 
used on directories like /tmp.

Unix 第五版（1974 年）中，引入了粘性位以用于纯可执行文件。它告诉操作系统在操作完成后将程序的 Text
代码段保留在交换空间中。通过允许内核在单个操作中将应用程序从交换内存移动到实际内存来加速后续执行。
因此，使用粘粘位可以让常用程序（例如编辑器）的加载速度大大提高。更改 stickied 程序中的可执行文件
需要从可执行文件中删除粘性位，运行程序并退出以清除缓存，替换二进制可执行文件并恢复粘性位。

目录设置粘性位时，文件系统会以不同的方式处理该目录中的文件，只允许文件的所有者、目录的所有者或
root 用户重命名或删除文件。如果没有设置粘性位，任何用户写入和执行对目录的访问都可以重命名或删除
其内容，而不管文件的所有者如何。这通设置在 /tmp 目录中，以防止普通用户删除或传输属于其他用户的文件。


# 🚩 dd: Convert and copy a file

dd - device driver 命令称得上是 Linux 世界中的搬运工，它用来读取设备、文件中的内容，并原封不动地复制到指定位置。

读取 /dev/null 或 /dev/zero 文件时，就可以创造出空值文件。还可以利用 /dev/urandom 随机的数据填充硬盘，在某些必要的场合可以用来销毁数据。

读取 hda、hdb 这种 IDE 接口的硬盘，或者主流 SATA 接口的硬盘，还有将 ISO 镜像文件写入 USB 移动盘：

    dd if=/dev/hda of=/root/hda.img
    dd if=/dev/sda of=/root/sda.img

    sudo dd if=/path/to/linux.iso of=/dev/sda4 bs=4M

    dd if=/dev/urandom of=/dev/hda1 count=2

示范，生成原始二进制磁盘扇区映像，参考 MIT 6.828 课程实验：

    dd if=/dev/zero of=obj/kern/kernel.img~ count=10000 2>/dev/null
    dd if=obj/boot/boot of=obj/kern/kernel.img~ conv=notrunc 2>/dev/null
    dd if=obj/kern/kernel of=obj/kern/kernel.img~ seek=1 conv=notrunc 2>/dev/null

先进行零值填充，数据块重复 count 指定 10000 次，默认数据块为 512 字节，即 5.12MB，4.9MiB。

然后再将 boot 和 kernel 文件写映像文件，第二个文件 seek=1 表示跳过一个 obs 即默认的 512 字节。

可以单独设置输入、输出块的大小，或者 skip、seek 跳过输入、输出块数量。

转换方式 conv 有 16 种，如前面指定的 notrunc 表示不对输出内容进行截断。

命令参考：

    Usage: dd [OPERAND]...
      or:  dd OPTION
    Copy a file, converting and formatting according to the operands.

      bs=BYTES        read and write up to BYTES bytes at a time (default: 512);
                      overrides ibs and obs
      cbs=BYTES       convert BYTES bytes at a time
      conv=CONVS      convert the file as per the comma separated symbol list
      count=N         copy only N input blocks
      ibs=BYTES       read up to BYTES bytes at a time (default: 512)
      if=FILE         read from FILE instead of stdin
      iflag=FLAGS     read as per the comma separated symbol list
      obs=BYTES       write BYTES bytes at a time (default: 512)
      of=FILE         write to FILE instead of stdout
      oflag=FLAGS     write as per the comma separated symbol list
      seek=N          skip N obs-sized blocks at start of output
      skip=N          skip N ibs-sized blocks at start of input
      status=LEVEL    The LEVEL of information to print to stderr;
                      'none' suppresses everything but error messages,
                      'noxfer' suppresses the final transfer statistics,
                      'progress' shows periodic transfer statistics

    N and BYTES may be followed by the following multiplicative suffixes:
    c =1, w =2, b =512, kB =1000, K =1024, MB =1000*1000, M =1024*1024, xM =M,
    GB =1000*1000*1000, G =1024*1024*1024, and so on for T, P, E, Z, Y.

    Each CONV symbol may be:

      ascii     from EBCDIC to ASCII
      ebcdic    from ASCII to EBCDIC
      ibm       from ASCII to alternate EBCDIC
      block     pad newline-terminated records with spaces to cbs-size
      unblock   replace trailing spaces in cbs-size records with newline
      lcase     change upper case to lower case
      ucase     change lower case to upper case
      sparse    try to seek rather than write the output for NUL input blocks
      swab      swap every pair of input bytes
      sync      pad every input block with NULs to ibs-size; when used
                with block or unblock, pad with spaces rather than NULs
      excl      fail if the output file already exists
      nocreat   do not create the output file
      notrunc   do not truncate the output file
      noerror   continue after read errors
      fdatasync  physically write output file data before finishing
      fsync     likewise, but also write metadata

    Each FLAG symbol may be:

      append    append mode (makes sense only for output; conv=notrunc suggested)
      direct    use direct I/O for data
      directory  fail unless a directory
      dsync     use synchronized I/O for data
      sync      likewise, but also for metadata
      fullblock  accumulate full blocks of input (iflag only)
      nonblock  use non-blocking I/O
      noatime   do not update access time
      nocache   Request to drop cache.  See also oflag=sync
      noctty    do not assign controlling terminal from file
      nofollow  do not follow symlinks
      count_bytes  treat 'count=N' as a byte count (iflag only)
      skip_bytes  treat 'skip=N' as a byte count (iflag only)
      seek_bytes  treat 'seek=N' as a byte count (oflag only)

    Sending a USR1 signal to a running 'dd' process makes it
    print I/O statistics to standard error and then resume copying.

    Options are:

          --help     display this help and exit
          --version  output version information and exit

    GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
    Report dd translation bugs to <https://translationproject.org/team/>
    Full documentation at: <https://www.gnu.org/software/coreutils/dd>
    or available locally via: info '(coreutils) dd invocation'


# 🚩 zip、unzip 压缩与解压缩

    ## 压缩目录或文件
    zip -r doc.zip doc 
    zip -r doc.zip doc readme.md

    ## 解压
    unzip doc.zip -d doc
    unzip doc.zip
    unzip doc\*.zip
    unzip -j doc.zip #忽略压缩包目录结构

    ## 其他
    unzip -v doc.zip #查看压缩包
    unzip -t doc.zip #验证压缩包


## 命令参考

Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
Zip 3.0 (July 5th 2008). Usage:

    zip [-options] [-b path] [-t mmddyyyy] [-n suffixes] [zipfile list] [-xi list]

      The default action is to add or replace zipfile entries from list, which
      can include the special name - to compress standard input.
      If zipfile and list are omitted, zip compresses stdin to stdout.
      -f   freshen: only changed files  -u   update: only changed or new files
      -d   delete entries in zipfile    -m   move into zipfile (delete OS files)
      -r   recurse into directories     -j   junk (don't record) directory names
      -0   store only                   -l   convert LF to CR LF (-ll CR LF to LF)
      -1   compress faster              -9   compress better
      -q   quiet operation              -v   verbose operation/print version info
      -c   add one-line comments        -z   add zipfile comment
      -@   read names from stdin        -o   make zipfile as old as latest entry
      -x   exclude the following names  -i   include only the following names
      -F   fix zipfile (-FF try harder) -D   do not add directory entries
      -A   adjust self-extracting exe   -J   junk zipfile prefix (unzipsfx)
      -T   test zipfile integrity       -X   eXclude eXtra file attributes
      -y   store symbolic links as the link instead of the referenced file
      -e   encrypt                      -n   don't compress these suffixes
      -h2  show more help

UnZip 6.00 of 20 April 2009, by Info-ZIP.  Maintained by C. Spieler.  Send
bug reports using http://www.info-zip.org/zip-bug.html; see README for details.

    Usage: unzip [-Z] [-opts[modifiers]] file[.zip] [list] [-x xlist] [-d exdir]
      Default action is to extract files in list, except those in xlist, to exdir;
      file[.zip] may be a wildcard.  -Z => ZipInfo mode ("unzip -Z" for usage).

      -p  extract files to pipe, no messages     -l  list files (short format)
      -f  freshen existing files, create none    -t  test compressed archive data
      -u  update files, create if necessary      -z  display archive comment only
      -v  list verbosely/show version info       -T  timestamp archive to latest
      -x  exclude files that follow (in xlist)   -d  extract files into exdir
    modifiers:
      -n  never overwrite existing files         -q  quiet mode (-qq => quieter)
      -o  overwrite files WITHOUT prompting      -a  auto-convert any text files
      -j  junk paths (do not make directories)   -aa treat ALL files as text
      -U  use escapes for all non-ASCII Unicode  -UU ignore any Unicode fields
      -C  match filenames case-insensitively     -L  make (some) names lowercase
      -X  restore UID/GID info                   -V  retain VMS version numbers
      -K  keep setuid/setgid/tacky permissions   -M  pipe through "more" pager
      -O CHARSET  specify a character encoding for DOS, Windows and OS/2 archives
      -I CHARSET  specify a character encoding for UNIX and other archives


# 🚩 Signal Concepts - ps top kill 任务管理
- [Linux System Programming, 2nd - ch10 Signal Concepts](http://igm.univ-mlv.fr/~yahya/progsys/linux.pdf)
- [Ctrl-C and Ctrl-Break Signals](https://github.com/Microsoft/Console-Docs/blob/main/docs/ctrl-c-and-ctrl-break-signals.md)

Windows 使用 tasklist 列表进程，Linux 使用 ps，另外，Linux 的 kill 和 top 命令相当任务管理器。

Linux 系统有丰富的系统信号机制，比如给 PID 为 8466 的进程发送结束信号使使其关闭：

    kill -s SIGINT 8466

kill 命令参考：

    kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]

信号有几十种，最常用的有 SIGHUP 重新加载进程，SIGKILL 杀死一个进程，SIGTERM 常停止一个进程。

    kill -l
     1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
     6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
    11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
    16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
    21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
    26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
    31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
    38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
    43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
    48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
    53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
    58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
    63) SIGRTMAX-1  64) SIGRTMAX

Table 10-1. Signals

|   Signal  |             Description Default action            |                          |
|-----------|---------------------------------------------------|--------------------------|
| SIGABRT   | Sent by abort()                                   | Terminate with core dump |
| SIGALRM   | Sent by alarm()                                   | Terminate                |
| SIGBUS    | Hardware or alignment error                       | Terminate with core dump |
| SIGCHLD   | Child has terminated                              | Ignored                  |
| SIGCONT   | Process has continued after being stopped         | Ignored                  |
| SIGFPE    | Arithmetic exception                              | Terminate with core dump |
| SIGHUP    | Process’s controlling terminal was closed         |                          |
|           | (most frequently, the user logged out)            | Terminate                |
| SIGILL    | Process tried to execute an illegal instruction   | Terminate with core dump |
| SIGINT    | User generated the interrupt character (Ctrl-C)   | Terminate                |
| SIGIO     | Asynchronous I/O event                            | Terminate 𝟘ᵃ             |
| SIGKILL   | Uncatchable process termination                   | Terminate                |
| SIGPIPE   | Process wrote to a pipe but there are no readers  | Terminate                |
| SIGPROF   | Profiling timer expired                           | Terminate                |
| SIGPWR    | Power failure                                     | Terminate                |
| SIGQUIT   | User generated the quit character (Ctrl-\)        | Terminate with core dump |
| SIGSEGV   | Memory access violation                           | Terminate with core dump |
| SIGSTKFLT | Coprocessor stack fault                           | Terminate 𝟙ᵇ             |
| SIGSTOP   | Suspends execution of the process                 | Stop                     |
| SIGSYS    | Process tried to execute an invalid system call   | Terminate with core dump |
| SIGTERM   | Catchable process termination                     | Terminate                |
| SIGTRAP   | Break point encountered                           | Terminate with core dump |
| SIGTSTP   | User generated the suspend character (Ctrl-Z)     | Stop                     |
| SIGTTIN   | Background process read from controlling terminal | Stop                     |
| SIGTTOU   | Background process wrote to controlling terminal  | Stop                     |
| SIGURG    | Urgent I/O pending                                | Ignored                  |
| SIGUSR1   | Process-defined signal                            | Terminate                |
| SIGUSR2   | Process-defined signal                            | Terminate                |
| SIGVTALRM | Generated by setitimer() when called              |                          |
|           | with the ITIMER_VIRTUAL flag                      | Terminate                |
| SIGWINCH  | Size of controlling terminal window changed       | Ignored                  |
| SIGXCPU   | Processor resource limits were exceeded           | Terminate with core dump |
| SIGXFSZ   | File resource limits were exceeded                | Terminate with core dump |

𝟘ᵃ The behavior on other Unix systems, such as BSD, is to ignore this signal.
𝟙ᵇ The Linux kernel no longer generates this signal; it remains only for 
    backward compatibility.

Examples

Let’s look at a couple of simple examples. This first one registers a signal handler for
SIGINT that simply prints a message and then terminates the program (as SIGINT would
do anyway):

```cpp
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
/* handler for SIGINT */
static void sigint_handler (int signo)
{
    /*
    * Technically, you shouldn't use printf() in a
    * signal handler, but it isn't the end of the
    * world. I'll discuss why in the section
    * "Reentrancy."
    */
    if (signo == SIGINT) printf ("Caught SIGINT!\n");
    exit (EXIT_SUCCESS);
}

int main (void)
{
    /*
    * Register sigint_handler as our signal handler
    * for SIGINT.
    */
    if (signal (SIGINT, sigint_handler) == SIG_ERR) {
        fprintf (stderr, "Cannot handle SIGINT!\n");
        exit (EXIT_FAILURE);
    }
    for (;;) 
        pause ();
    return 0;
}
```

Sending a Signal
The kill() system call, the basis of the common kill utility, sends a signal from one
process to another:

```cpp
#include <sys/types.h>
#include <signal.h>
int kill (pid_t pid, int signo);
```

In its normal use (i.e., if pid is greater than 0 ), kill() sends the signal signo to the
process identified by pid .

If pid is 0 , signo is sent to every process in the invoking process’s process group.

If pid is −1 , signo is sent to every process for which the invoking process has permission
to send a signal, except itself and init. We will discuss the permissions regulating signal
delivery in the next subsection.

If pid is less than −1 , signo is sent to the process group -pid .

On success, kill() returns 0 . The call is considered a success so long as a single signal
was sent. On failure (no signals sent), the call returns −1 and sets errno to one of the
following:

- *EINVAL*
The signal specified by signo is invalid.

- *EPERM*
The invoking process lacks sufficient permissions to send a signal to any of the
requested processes.

- *ESRCH*
The process or process group denoted by pid does not exist or, in the case of a
process, is a zombie.


top 实时监视进程：

    Usage:
      top -hv | -bcEHiOSs1 -d secs -n max -u|U user -p pid(s) -o field -w [cols]

参数说明：

- d : 改变显示的更新速度，或是在交谈式指令列( interactive command)按 s
- q : 没有任何延迟的显示速度，如果使用者是有 superuser 的权限，则 top 将会以最高的优先序执行
- c : 切换显示模式，共有两种模式，一是只显示执行档的名称，另一种是显示完整的路径与名称
- S : 累积模式，会将己完成或消失的子行程 ( dead child process ) 的 CPU time 累积起来
- s : 安全模式，将交谈式指令取消, 避免潜在的危机
- i : 不显示任何闲置 (idle) 或无用 (zombie) 的行程
- n : 更新的次数，完成后将会退出 top
- b : 批次档模式，搭配 "n" 参数一起使用，可以用来将 top 的结果输出到档案内

示范，-p 监视指定进程，-i 不监视空闲进程：

    top -n 3 -p 8466
    top -n 3 -i

ps 进程统计命令，选项分为 5 类，可以通过帮助命令查看，`ps --help a` 查看所有选项：

    ps --help <simple|list|output|threads|misc|all>

可以比较，不同的选项对输出的影响：

    # 列表用户进程
    ps

    # -e 列表所有进程，外加 -l 长格式输出、-f 带命令行的全格式输出
    ps -e
    ps -el
    ps -elf

选项参考：

    Usage:
     ps [options]

    Basic options:
     -A, -e               all processes
     -a                   all with tty, except session leaders
      a                   all with tty, including other users
     -d                   all except session leaders
     -N, --deselect       negate selection
      r                   only running processes
      T                   all processes on this terminal
      x                   processes without controlling ttys

    Selection by list:
     -C <command>         command name
     -G, --Group <GID>    real group id or name
     -g, --group <group>  session or effective group name
     -p, p, --pid <PID>   process id
            --ppid <PID>  parent process id
     -q, q, --quick-pid <PID>
                          process id (quick mode)
     -s, --sid <session>  session id
     -t, t, --tty <tty>   terminal
     -u, U, --user <UID>  effective user id or name
     -U, --User <UID>     real user id or name

      The selection options take as their argument either:
        a comma-separated list e.g. '-u root,nobody' or
        a blank-separated list e.g. '-p 123 4567'

    Output formats:
     -F                   extra full
     -f                   full-format, including command lines
      f, --forest         ascii art process tree
     -H                   show process hierarchy
     -j                   jobs format
      j                   BSD job control format
     -l                   long format
      l                   BSD long format
     -M, Z                add security data (for SELinux)
     -O <format>          preloaded with default columns
      O <format>          as -O, with BSD personality
     -o, o, --format <format>
                          user-defined format
      s                   signal format
      u                   user-oriented format
      v                   virtual memory format
      X                   register format
     -y                   do not show flags, show rss vs. addr (used with -l)
         --context        display security context (for SELinux)
         --headers        repeat header lines, one per page
         --no-headers     do not print header at all
         --cols, --columns, --width <num>
                          set screen width
         --rows, --lines <num>
                          set screen height

    Show threads:
      H                   as if they were processes
     -L                   possibly with LWP and NLWP columns
     -m, m                after processes
     -T                   possibly with SPID column

    Miscellaneous options:
     -c                   show scheduling class with -l option
      c                   show true command name
      e                   show the environment after command
      k,    --sort        specify sort order as: [+|-]key[,[+|-]key[,...]]
      L                   show format specifiers
      n                   display numeric uid and wchan
      S,    --cumulative  include some dead child process data
     -y                   do not show flags, show rss (only with -l)
     -V, V, --version     display version information and exit
     -w, w                unlimited output width

            --help <simple|list|output|threads|misc|all>
                          display help and exit


# 🚩 grep、sed 及 awk 文本处理工具
https://github.com/wuzhouhui/awk
https://www.cnblogs.com/quincyhu/p/5884390.html
https://www.cnblogs.com/wangqiguo/p/6718512.html
https://www.cnblogs.com/emanlee/p/3327576.html

这些工具功能非常下细，以至于下显得累赘难以掌握，它们具有一定的程序化能力，几乎
可以看作实现 ，它们可以看做领域专用语言 DSL 来看待。

  + find 根据 expression 指定的测试条件来查文件，文件名、路径、时间、inode 信息等等；
	+ sed - Stream EDitor 流编辑器以行为单位的文本编辑工具，可以直接修改档案；
	+ awk 报告生成器，例如将 csv 格式化以后显示。AWK 取名自三位创始人姓氏 Alfred Aho - Peter Weinberger - Brian Kernighan。

使用 find & grep 查找文件名或内容匹配的文件，find 还可以对匹配的文件调用命令继续处理:

		find path -name justname
		find path -regex ".*fullpathtest"
    grep -r sometext path

		find venv/bin -ctime 2 -exec ls -la "{}" \;
		find venv/bin -cmin 0 -exec ls -la {} \;

以上两行 find 分别会将 2 天前 3 内或者 1 内修改过的文件列表出来。时间指定可以下使用 amin atime cmin ctime mmin mtime 等等。

find

		Usage: find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]

grep 主要参数:

-c : 只输出匹配的行
-I : 不区分大小写
-h : 查询多文件时不显示文件名
-l : 查询多文件时, 只输出包含匹配字符的文件名
-n : 显示匹配的行号及行
-v : 显示不包含匹配文本的所有行(我经常用除去grep本身)

    grep "要匹配的内容" 文件名
    grep 'test' d* 显示所有以d开头的文件中包含test的行
    grep 'test' aa bb cc 显示在 aa bb cc 文件中包含test的行
    grep '[a-z]\{5}\' aa 显示所有包含字符串至少有5个连续小写字母的串

sed 命令支持正则，和 Vim 中使用的行号区间表达相似，参考 man sed 关于 address 部分。

sed 语法参考: 

    sed [OPTION]... {script-only-if-no-other-script} [input-file]...
    sed [options] 'command' file(s)
    sed [options] -f scriptfile file(s)

选项参数使用：

    -n ：使用安静(silent)模式，只输出经过特殊处理的内容才会被列出来。
    -e ：直接在命令列模式上进行 sed 的动作编辑；
    -f ：脚本执行 -f filename 运行 filename 内的 sed 动作；
    -r ：sed 的动作支持的是延伸型正规表示法的语法。(默认是基础正规表示法语法)
    -i ：直接修改读取的文件内容，而不是输出到终端。

Zero-address commands

       : label   - Label for b and t commands.
       #comment  - The comment extends until the next newline 
                   or the end of a -e script fragment.
       }         - The closing bracket of a { } block.

Zero- or One- address commands

       =         Print the current line number.
       a \text   Append text, which has each embedded newline preceded by a backslash.
       i \text   Insert text, which has each embedded newline preceded by a backslash.
       
       q [exit-code]
              Immediately  quit  the sed script without processing any more input, 
              except that if auto-print is not disabled the current pattern space 
              will be printed.
              The exit code argument is a GNU extension.

       Q [exit-code]
              Immediately quit the sed script without processing any more input.
              This is a GNU extension.

       r filename
              Append text read from filename.

       R filename
              Append a line read from filename.  
              Each invocation of the command reads a line from the file.  
              This is a GNU extension.

其它命令参考文档 Commands which accept address ranges

命令使用参考：

   + d  Delete 内容删除命令
   + c  Change 内容变更命令
   + s  Substitute 替换，正则表达式格式 's/pat/sub/flags'，紧跟着 s 的字符为分隔符
     + g flag - Global, whold line process, not only the first one match.
     + i flag - Insenstive
     + p flag - Print that line has changed

```sh
  lines=$(printf "line %s\n" $(seq 5))

  # Delete line content
  echo "$lines" | sed '2d'    # delete line 2
  echo "$lines" | sed '2,4d'  # delete line 2 to 4
  echo "$lines" | sed '2,$d'  # delete line 2 to end
  echo "$lines" | sed '$d'    # delete last line
  echo "$lines" | sed '/li/d' # delete all line that contains li
  echo "$lines" | sed '/3$/d' # delete all line that endswith 3

  # Change line content
  echo "$lines" | sed '2c new content'     # line 2 ==> new content
  echo "$lines" | sed '/pat/c new content' # all match line change to new content

  # Substitute
  lines=$(printf "line ID %s\n" $(seq 5));
  echo "$lines" | sed 's/id/id/gi'         # ID ==> id
  echo "$lines" | sed 's/^l/L/gi'          # head l ==> L
  echo "$lines" | sed -n 's/3/3rd/p'       # only print that modified 3 ==> 3rd
  echo "$lines" | sed -n 's/3/&rd/p'       # same to above, 3 => 3rd
  echo "$lines" | sed -n 's/l\(..\)e/\1/p' # line => in
```

内容定位 Addressing 在 sed 命令中应用非常广泛：

   + 提供一个定位，单个数字表示具体行号，也可以提供正则模式匹配
   + 提供两个定位，表示一个区间，可以是逗号分隔的两个数字，或是正则模式混合

The following address types are supported:

       number Match only the specified line number.

       first~step
              Match  every  step'th  line  starting with line first.
              For example, ``sed -n 1~2p'' will print all the odd-numbered lines, 
              and the address 2~5 will match every fifth line, starting with the second.
              first can be zero; in this case, sed operates as if it were equal to step.
              (This is an extension.)

       $      Match the last line.

       /regexp/
              Match lines matching the regular expression regexp.  
              Matching is performed on the current pattern space, 
              which can be modified with commands such as ``s///''.

       \cregexpc
              Match lines matching the regular expression regexp.  The c may be any character.

       GNU sed also supports some special 2-address forms:

       0,addr2
              Start out in "matched first address" state, until addr2 is found. 
              This is similar to 1,addr2, except that if addr2 matches 
              the very first line  of  input  the  0,addr2 form will be at 
              the end of its range, whereas the 1,addr2 form will still be 
              at the beginning of its range.  
              This works only when addr2 is a regular expression.

       addr1,+N
              Will match addr1 and the N lines following addr1.

       addr1,~N
              Will match addr1 and the lines following addr1 until the next line 
              whose input line number is a multiple of N.


```sh
    # 输出选定行区间内容，/a/ 到 /b/ 匹配行范围内容都打印出来
    $ sed -n '/a/,/b/p' example

    # 打印第 5 行到第一个包含以 test 开头的行之间的内容。
    $ sed -n '5,/^test/p' example

    # 对于 /a/ 和 /b/ 匹配之间的行，给每行末尾添加字符串 sed test。
    $ sed '/a/,/b/s/$/sed test/' example
```

其它命令使用参考如下，多个命令使用 {} 包括，并使用 ; 分隔：

```sh
    # e - expression script
    $ sed -e '1,5d' -e 's/test/check/' example
    # 多点编辑 (-e）用来执行多条脚本命令，数据内容变动依次传递。

    # r - Read from file
    $ sed '/test/r file' example
    # 读取 file 文件内容显示在 test 匹配的行后面，就是将 file 内容组合到匹配的行内容后。

    # w - Write to file
    $ sed -n '/test/w file' example
    # 将 example 文件中所有包含 test 的行内容写入 file 指定的文件。

    # a - Append text
    $ sed '/^test/a\something' example
    # 追加文本 something 到 test 匹配行的后面。

    # i - Insert text
    $ sed '3i Hi' example # 在第三行前插入 Hi 
    $ sed '/test/i\new line' example 
    # 如果匹配到 test，则插入反斜杠后面的文本到当前行前面。

    # n - Next line
    $ sed '/test/{ n; s/aa/bb/; }' example
    # 如果匹配到 test 则读取下一行，并执行 s/ss/bb/ 替换当前行内容，打印该行。

    # y/source/dest/  - Transliterate
    $ sed '1,10y/abcde/ABCDE/' example
    # 把 1 - 10 行所有 abcde 转变为大写，注意，正则表达式元字符不能使用这个命令。

    # q - Quit sed
    $ sed '10q' example # 打印完第 10 行后退出 sed。
```

Pattern space & hold space 的保持、获取、交换操作：

   + h H    Copy/append pattern space to hold space.
   + g G    Copy/append hold space to pattern space.
   + x      Exchange the contents of the hold and pattern spaces.

```sh
  lines=$(printf "line %s\n" {1..5});
  echo "$lines" | sed -e '/line/h' -e 's/line/L/' -e '/$/G'
```

处理的数据每一行都会被 sed 保存在一个 pattern space 临时缓冲区中，除非行被删除
或者输出被取消，否则所有被处理的行都将打印在屏幕上。接着清空缓冲空间，并存入新
一行数据等待处理。

上面例子里，找到匹配 line 的行，h 命令将其复制并存入一个称为 hold space 的特殊
缓冲区内。后面一条语句中的 /$/ 表示到达所有数据结尾，最后一行后，G 命令取出缓冲
区的行数据 append 回模式空间中。

简单来说，任何包含 line 的行都被复制并追加到每一行的后面。如果没有匹配到 line 则
缓冲区的旧数据不会被更新，读取并输出时得到的是旧数据。

互换模式空间和保持缓冲区的内容，如下，也就是把 test 与 check 相应匹配的行互换。

    $ sed -e '/test/h' -e '/check/x' example


正则表达注意要使用斜杠转义，以下使用正则表达式来过滤磁盘上 MB GB 大小的文件项目：

    df -h | sed -n '/[5-9][0-9]%/p'
    du -hd 10 /data | sed -n '/^[0-9]\+G/p'
    du -hd 10 /data | sed -n '/^[0-9]\{3\}M/p'



awk 语法格式

    awk [options] 'script' var=value file(s) 
    awk [options] -f scriptfile var=value file(s) 

常用命令选项

    -F fs fs 指定输入分隔符，fs可以时字符串或正则表达式
    -v var=value 赋值一个用户定义变量，将外部变量传递给awk
    -f scriptfile 从脚本文件中读取awk命令


awk 实际上是一门很复杂的脚本语言，还有像 C 语言一样的分支和循环结构，但是基本语法和 sed 类似。

awk 分隔符和列分隔符都可以自定义，比如 /etc/passwd 文件的每一行有干个字段，字段之间以 : 分隔。可以重新定义 awk 的列分隔符为 : 并以列为单位处理这个文件。

和 sed 一样，awk 处理的文件既可以由标准输入重定向得到，也可以当命令行参数传入，编辑命令可以直接当命令行参数传入，也可以用 -f 参数指定一个脚本文件。

和 sed 类似，pattern 是正则表达式，actions 是一系列操作，编辑命令的格式为：

    /pattern/{actions}

    ls -l|awk '!(i=!i)'  打印奇数行，省略默认打印表达
    ls -l|awk 'i=!i' 打印偶数行，省略默认打印表达
    ls -l|awk 'i=!i{print $0}' 上一行完整的表达
    ls -l|awk '!(i=!i){print $1}' 打印第一列

打印文件列表中的名称字段：

    ls -l |awk '{print $NF}'
    ls -l |awk '{print $9}'

awk 运算，所有用作算术运算符进行操作时，操作数自动转为数值，所有非数值都变为0

    算术运算：（+，-，*，/，&，！，……，++，--）
    赋值运算：（=， +=， -=，*=，/=，%=，……=，**=）
    逻辑运算符: (||, &&)
    关系运算符：（<, <=, >,>=,!=, ==）
    正则运算符：（～，～!）(匹配正则表达式，与不匹配正则表达式)

    awk 'BEGIN{a="100testa";if(a ~ /^100*/){print "ok";}}'

awk 数值和字符串比较问题

    得到的输出是：
    echo "10025350462330387914 10025350462330388480" | awk '{if ($1 == $2) print $1 " = " $2; else print "NO"}'
 
    awk 自动将 $1,$2转化成了数值型，已经越界，所以相等了。修正方法：
    echo "10025350462330387914 10025350462330388480" | awk '{if ($1"" == $2"") print $1 " = " $2; else print "NO"}'

    du -hd 10 /data | awk 'int($1)>100'
    du -d 10 /data  | awk -n '{if (int($1) > 1000000) print $0}'
    du -hd 10 /data | awk -n '($1 ~ /^[0-9]+G/)'

AWK内置变量

    $n          当前记录的第n个字段，比如n为1表示第一个字段，n为2表示第二个字段。
    $0          这个变量包含执行过程中当前行的文本内容。
    ARGC        命令行参数的数目。
    ARGIND      命令行中当前文件的位置（从0开始算）。
    ARGV        包含命令行参数的数组。
    CONVFMT     数字转换格式（默认值为%.6g）。
    ENVIRON     环境变量关联数组。
    ERRNO       最后一个系统错误的描述。
    FIELDWIDTHS 字段宽度列表（用空格键分隔）。
    FILENAME    当前输入文件的名。
    NR          表示记录数，在执行过程中对应于当前的行号
    FNR         同NR ，但相对于当前文件。
    FS          字段分隔符（默认是任何空格）。
    IGNORECASE  如果为真，则进行忽略大小写的匹配。
    NF          对应于当前的字段数。 print $NF 行中最后一个字段
    OFMT        数字的输出格式（默认值是%.6g）。
    OFS         输出字段分隔符（默认值是一个空格）。
    ORS         输出记录分隔符（默认值是一个换行符）。
    RS          记录分隔符（默认是一个换行符）。
    RSTART      由match函数所匹配的字符串的第一个位置。
    RLENGTH     由match函数所匹配的字符串的长度。
    SUBSEP      数组下标分隔符（默认值是34）。


内置函数

    atan2( y, x )   返回 y/x 的反正切。
    cos( x )    返回 x 的余弦；x 是弧度。
    sin( x )    返回 x 的正弦；x 是弧度。
    exp( x )    返回 x 幂函数。
    log( x )    返回 x 的自然对数。
    sqrt( x )   返回 x 平方根。
    int( x )    返回 x 的截断至整数的值。
    rand( ) 返回任意数字 n，其中 0 <= n < 1。
    srand( [expr] ) 将 rand 函数的种子值设置为 Expr 参数的值，或如果省略 Expr 参数则使用某天的时间。返回先前的种子值。

    mktime( YYYY MM dd HH MM ss[ DST])  生成时间格式

    strftime([format [, timestamp]])    格式化时间输出，将时间戳转为时间字符串 具体格式，见下表.

    systime()   得到时间戳,返回从1970年1月1日开始到当前时间(不计闰年)的整秒数


    gsub( Ere, Repl, [ In ] )   除了正则表达式所有具体值被替代这点，它和 sub 函数完全一样地执行。
    sub( Ere, Repl, [ In ] )    用 Repl 替换 In 中的字符串，由 Ere 参数指定的扩展正则表达式进行匹配。sub 函数返回替换的数量。出现在 Repl 的 & 字符由匹配的字符串替换。如果未指定 In 参数，缺省值是整个记录（$0 记录变量）。
    index( String1, String2 )   在由 String1 参数指定的字符串（其中有出现 String2 指定的参数）中，返回位置，从 1 开始编号。如果 String2 参数不在 String1 参数中出现，则返回 0（零）。
    length [(String)]   返回 String 参数指定的字符串的长度（字符形式）。如果未给出 String 参数，则返回整个记录的长度（$0 记录变量）。
    blength [(String)]  返回 String 参数指定的字符串的长度（以字节为单位）。如果未给出 String 参数，则返回整个记录的长度（$0 记录变量）。
    substr( String, M, [ N ] )  返回具有 N 参数指定的字符数量子串。子串从 String 参数指定的字符串取得，其字符以 M 参数指定的位置开始。M 参数指定为将 String 参数中的第一个字符作为编号 1。如果未指定 N 参数，则子串的长度将是 M 参数指定的位置到 String 参数的末尾 的长度。
    match( String, Ere )    在 String 参数指定的字符串（Ere 参数指定的扩展正则表达式出现在其中）中返回位置（字符形式），从 1 开始编号，或如果 Ere 参数不出现，则返回 0（零）。RSTART 特殊变量设置为返回值。RLENGTH 特殊变量设置为匹配的字符串的长度，或如果未找到任何匹配，则设置为 -1（负一）。
    tolower( String )   返回 String 参数指定的字符串，字符串中每个大写字符将更改为小写。大写和小写的映射由当前语言环境的 LC_CTYPE 范畴定义。
    toupper( String )   返回 String 参数指定的字符串，字符串中每个小写字符将更改为大写。大写和小写的映射由当前语言环境的 LC_CTYPE 范畴定义。
    sprintf(Format, Expr, Expr, . . . ) 根据 Format 参数指定的 printf 子例程格式字符串来格式化 Expr 参数指定的表达式并返回最后生成的字符串。

结合内置函数及循环贯标编程

在awk中数组叫做关联数组(associative arrays)。awk 中的数组不必提前声明，也不必声明大小。数组元素用0或空字符串来初始化，这根据上下文而定。

awk的多维数组在本质上是一维数组，更确切一点，awk在存储上并不支持多维数组。awk提供了逻辑上模拟二维数组的访问方式。例如，array[2,4]=1这样的访问是允许的。awk使用一个特殊的字符串SUBSEP作为分割字段。 类似一维数组的成员测试，多维数组可以使用if ( (i,j) in array)这样的语法，但是下标必须放置在圆括号中。类似一维数组的循环访问，多维数组使用for ( item in array )这样的语法遍历数组。与一维数组不同的是，多维数组必须使用split()函数来访问单独的下标分量。因为数组时关联数组，默认是无序的.

    awk 'BEGIN{
        str = "a b c d e f g";
        split(str, s, " ");
        for(p in s){
            print s[p];
        }
    }'
    awk 'BEGIN{
        for(i=1;i<=3;i++){
            for(j=1;j<=3;j++){
                array[i,j]=i*j; 
            }
        }
        for(m in array){
            split(m,subs,SUBSEP);
            print subs[1],"*",subs[2],"=",array[m];
        }
    }'



# 🚩 ip 网络配置命令
[linux ip命令和ifconfig命令](https://blog.csdn.net/freeking101/article/details/68939059)
[Use ip Command in Linux](https://linoxide.com/linux-command/use-ip-command-linux)
[iprote2 suite utility](http://www.linuxgrill.com/anonymous/iproute2/NEW-OSDL/)

ifconfig、route、arp 和 netstat 等命令行工具统称为 net-tools 是用来配置网络，解决网络故障的传统工具集。net-tools 起源于 BSD 的 TCP/IP 工具箱，后来成为老版本 Linux 内核中配置网络功能的工具。但自 2001 年起，Linux 社区已经对其停止维护。同时，一些 Linux 发行版比如 Arch Linux 和 CentOS/RHEL 7 则已经完全抛弃了net-tools，只支持 iproute2。

作为网络配置工具的一份子，iproute2 是 Linux 下管理控制 TCP/IP 网络和流量控制的新一代工具包，旨在替代老派的工具链 net-tools，即大家比较熟悉的 ifconfig，arp，route，netstat 等命令。net-tools 通过 procfs(/proc) 和 ioctl 系统调用去访问和改变内核网络配置，而 iproute2 则通过 netlink 套接字接口与内核通讯。抛开性能而言，net-tools 的用法给人的感觉是比较乱，而 iproute2 的用户接口相对 net-tools 来说相对来说，更加直观。比如，各种网络资源如 link、IP 地址、路由和隧道等均使用合适的对象抽象去定义，使得用户可使用一致的语法去管理不同的对象。更重要的是，到目前为止，iproute2仍处在持续开发中。iproute2 套件里提供了许多增强功能的命令，ip命令即是其中之一。

Linux 的 ip 命令和 ifconfig 类似，但前者功能更强大，并旨在取代后者。只需一个 ip 命令，你就能很轻松地执行一些网络管理任务。ifconfig 是 net-tools 中已被废弃使用的一个命令，许多年前就已经没有维护了。所以，net-tools 和 iproute2 都需要去学习掌握了。

如果你仍在使用 net-tools，而且尤其需要跟上新版 Linux 内核中的最新最重要的网络特性的话，那么是时候转到 iproute2 的阵营了。原因就在于使用 iproute2 可以做很多 net-tools 无法做到的事情。对于那些想要转到使用iproute2的用户，有必要了解下面有关net-tools和iproute2的众多对比。

Linux Net-Tools versus IPRoute2

| net-tools         | iproute2            |
|  --:--            | --:--               |
| arp -na           | ip neigh            |
| ifconfig          | ip link             |
| ifconfig -a       | ip addr show        |
| ifconfig --help   | ip help             |
| ifconfig -s       | ip -s link          |
| ifconfig eth0 up  | ip link set eth0 up |
| ipmaddr           | ip maddr            |
| iptunnel          | ip tunnel           |
| netstat           | ss                  |
| netstat -i        | ip -s link          |
| netstat -g        | ip maddr            |
| netstat -l        | ss -l               |
| netstat -r        | ip route            |
| route add         | ip route add        |
| route del         | ip route del        |
| route -n          | ip route show       |
| vconfig           | ip link             |


iproute2 的核心命令是 ip 提供的功能 show, manipulate routing, devices, policy routing and tunnels

    Usage: ip [ OPTIONS ] OBJECT { COMMAND | help }
           ip [ -force ] -batch filename
    where  OBJECT := { link | address | addrlabel | route | rule | neighbor | ntable |
                       tunnel | tuntap | maddress | mroute | mrule | monitor | xfrm |
                       netns | l2tp | fou | tcp_metrics | token | netconf }
           OPTIONS := { -V[ersion] | -s[tatistics] | -d[etails] | -r[esolve] |
                        -h[uman-readable] | -iec |
                        -f[amily] { inet | inet6 | ipx | dnet | mpls | bridge | link } |
                        -4 | -6 | -I | -D | -B | -0 |
                        -l[oops] { maximum-addr-flush-attempts } | -br[ief] |
                        -o[neline] | -t[imestamp] | -ts[hort] | -b[atch] [filename] |
                        -rc[vbuf] [size] | -n[etns] name | -a[ll] | -c[olor]}

ip 是 iproute2 软件包里面的一个强大的网络配置工具，用来显示或操作路由、网络设备、策略路由和隧道，它能够替代一些传统的网络管理工具，例如 ifconfig、route等。

用 ip 配置的设备信息，大部分会在设备重启后还原，如果想永久需要在配置文件修改。

(1).对象

    ip link         网络设备管理，启用/禁用，修改MTU/MAC地址
    ip address      设备上的协议（IP或IPv6）地址管理
    ip addrlabel    协议地址选择的标签配置，RFC3484介绍了IPV6源地址/目的地址选择策略
    ip route        路由表条目管理
    ip rule         路由策略数据库中的规则
    ip neighbor     neighbor/ARP或NDISC缓存条目管理
    ip ntable       
    ip tunnel       IP隧道配置，隧道的作用是将数据封装成IP包发布到网络
    ip tuntap       
    ip maddress     组播地址管理
    ip mroute       组播路由缓存条目管理
    ip mrule        
    ip monitor      IP地址/路由状态等监控
    ip xfrm         xfm是一个IPSec协议框架，可转换数据报格式

所有对象的名称可以用完整或缩写形式书写，例如address可以缩写成addr或只是a。

(2).选项

    -V，-Version 显示指令版本信息
    -s,-stats,statistics 输出详细信息
    -h,-human,-human-readable 输出人类可读的统计信息和后缀
    -iec 以IEC标准单位打印人类可读速率（例如1K=1024）
    -f,-family <FAMILY> 指定要使用的协议族。协议族标识可以是inet、inet6、ipx、dnet或link之一。如果此选项不存在，则从其他参数中推测协议族。如果命令行的其余部分没有提供足够的信息来推测该族，则ip会退回到默认值，通常是inet或any。link是一个特殊的系列标识符，表示不涉及网络协议。
    -4 –family inet的快捷方式
    -6 –family inet6的快捷方式
    -0 –family link的快捷方式
    -o,-oneline 将每条记录输出到一行，用’\’字符替换换行符。
    -r,-resolve 使用系统名称解析程序来打印DNS名称而不是主机地址。

(3).实例

    ip地址管理
        1.显示ip地址
            ip a
            ip address show
            ip addr show dev eth0
            ip a sh eth0
        2.增加删除地址
            ip address add 192.0.2.1/24 dev eth0
            ip addr del 192.0.2.2/24 dev eth0
        3.显示接口统计
            ip -s link ls eth0
    网卡和链路配置
        4.显示链路
            ip link show
            ip link sh eth0
        4.修改接口状态
            ip link set eth0 up
            ip link s gre01 down
    路由表管理
        5.显示路由表
            ip route
            ip ro show dev gre01
        6.增加新路由
            ip route add 10.2.2.128/27 dev gre01
        7.增加默认路由
            ip route add default via 192.168.1.1
        8.修改默认路由
            ip route chg default via 192.168.1.2
        9.删除默认路由
            ip route del default
    隧道配置
        10.增加删除GRE隧道
            ip tunnel add gre01 mode gre local 10.1.1.1 remote 20.2.2.1 ttl 255
            ip tunnel del gre01
        11.IPIP隧道
            ip tunl a ipip01 mode ipip local 10.1.1.1 remote 20.2.2.1 ttl 255
        12.显示隧道
            ip tunnel show
        13.显示隧道统计
            ip -s tunl ls gre01
    邻居和arp表管理
        13.查看arp表
            ip neigh show
        14.手工增加删除arp项
            ip neighbor add 10.2.2.2 dev eth0
            ip neigh del 10.2.2.1 dev eth0
    socket统计
        15.显示当前监听
            ss -l
        15.显示当前监听的进程
            ss -p
     
    #常用命令
        ip link show                             #显示链路
        ip addr show                             #显示地址(或ifconfig)
        ip route show                            #显示路由(route -n)
        ip neigh show                            #显示arp表(ping 192.168.95.50，如果主机在同一局域网内，直接加到arp表)
        ip neigh delete 192.168.95.50 dev eth0   #删除arp条目，条目仍然存在状态为stale，下次通信需要确认
        ip rule show                             #显示缺省规则
        ip route del default dev eth0            #删除接口路由
        ip route show table local                #查看本地静态路由
        ip route show table main                 #查看直连路由
     
    #添加静态路由
        ip route add 10.0.0.0/24 via 192.168.92.129
        ip route add 10.10.10.10 via 192.168.92.129
        
        ip route add 172.31.100.0/24 dev eno16777736
        ip route add 172.32.0.2 dev eno16777736
     
    #查看路由表
        [root@localhost ~]# ip route show table main
     
    #删除
        ip route del 10.0.0.0/24
        ip route del 10.10.10.10
        
        ip route del 172.31.100.0/24
        ip route del 172.32.0.2
     
    #再次查看路由表
        [root@localhost ~]# ip route show table main
        [root@localhost ~]# ip route show table local
     
    #添加网卡别名
        ip addr add 192.168.0.11/24 dev eno16777736
     
    #查看下网卡，别名没有产生，而是直接继承
        [root@localhost ~]# ip addr show eno16777736
           
    #添加网卡别名并添加标记    label
        ip addr add 192.168.1.2 label eno16777736:0 dev eno16777736
     
    #查看下，多了eno16777736:0
        ip addr show eno16777736


注意：以下介绍的ip命令都是临时配置，一但重启就会还原，如"service network restart"

查看IP地址

    adb shell ip a/addr/address
    adb shell ip a/addr/address sh/show

    adb shell ip a/addr/address sh/show dev eth1
    adb shell ip a/addr/address sh/show eth1

查看WiFi连接

    adb shell ip -f inet addr show wlan0 # show WiFi IP Address

增加或删除IP地址

    adb shell ip a/addr/address add 192.168.78.130/24 dev eth1
    adb shell ip a/addr/address del/delete 192.168.78.130/24 dev eth1
    adb shell ip a flush dev eth1     # 删除eth1所有IP地址
    adb shell ip -4 a flush dev eth1  # 删除eth1的所有IPv4的IP地址

查看网络设备信息

    adb shell ip link sh/show/l/list/ls
    adb shell ip link sh/show/l/ls/lsit eth1
    adb shell ip link sh/show/l/ls/list dev eth1

停止与激活网络设备

    adb shell ip link set dev eth1 down
    adb shell ip link set dev eth1 up

查看路由表

    adb shell ip r/ro/route
    adb shell ip r/ro/route sh/show
    adb shell ip r/ro/route sh/show dev eth1

添加或删除路由

    adb shell ip r/ro/route add 192.168.79.0/24 dev eth1
    adb shell ip r/ro/route d/del/delete 192.168.79.0/24
    adb shell ip r/ro/route d/del/delete 192.168.79.0/24 dev eth1

默认路由的删除、添加与修改

    adb shell ip r/ro/route d/del/delete default
    adb shell ip r/ro/route add default via 192.168.78.1
    adb shell ip r/ro/route chg/change default via 192.168.78.2

查看ARP表

    adb shell ip n/neigh/neighbuor sh/show




# 🚩 hosts 本地 DNS 配置

格式如下：

    <IP> <HOSTNAME>.<DOMAIN> <ALIAS>

解决 Github DNS 污染

    #github related website
    140.82.112.4 github.com
    151.101.185.194 github.global.ssl.fastly.net
    203.98.7.65 gist.github.com
    13.229.189.0 codeload.github.com
    185.199.109.153 desktop.github.com
    185.199.108.153 guides.github.com
    185.199.108.153 blog.github.com
    18.204.240.114 status.github.com
    185.199.108.153 developer.github.com
    185.199.108.153 services.github.com
    192.30.253.175 enterprise.github.com
    34.195.49.195 education.github.com
    185.199.108.153 pages.github.com
    34.196.237.103 classroom.github.com
    # GitHub End

编辑 hosts 文件：

    vim gedit /etc/hosts

编辑后，你需要重新启动网络。

    /etc/init.d/networking restart
    sudo /etc/init.d/networking restart



# 🚩 samba 服务介绍及配置详解

smb服务是微软的网络通讯协议，后来应用到了linux系统上。这款文件共享协议可以使得Linux与windows系统之间进行文件共享与打印功能，由于NFS可以完成linux与linux之间的文件共享，所以smb服务最适用 的场合还是linux与windows系统间的文件共享。

samba 的核心是 smbd 和 nmbd 两个守护进程，前者管理samba服务器上的共享目录，后者进行 NetBIOS 名解析，使客户端能浏览服务器的共享资源。

协议端口：

smbd：tcp 445和tcp139
nmbd：udp 137/138

samb服务基础

　　软件包：samba
　　协议：SMP（TCP139）CIFS（445）
　　配置文件路径：/etc/samba/smb.conf
　　所需服务器：svr7（ip192.168.4.7）和myhost2

关于smbpasswd命令选项：

    -h：显示smbpasswd的命令格式帮助
    -a：添加指定的用户帐号
    -d：禁用指定的用户帐号
    -e：启用指定的用户帐号
    -x：删除指定的用户帐号
    没有添加任何选项时候将改变用户密码。

认识samba服务器主配文件：smb.conf

    [global] 部分是samba服务器的全局设置，对整个服务器有效。
    [homes] 部分是设置用户共享目录属性。
    [printers] 部分设置了samba服务器中打印共享资源的属性，samb服务器除了可以提供文件共享，还可以提供打印共享。

[global]部分详解：

    workgroup 设置samba服务器所在的工作组，默认是：MYGROUP
    server string 设置samba服务器的说明，用于描述服务器。
    log file 设置samba服务器的日志文件，默认是：/var/log/samba/log.%m
    max log size 设置日志文件的最大容量，默认是50，单位KB。
    security 设置samba服务器和客户端的认证方式，默认是user。一共有4种方式：
    share 表示用户不需要账户及密码即可登录服务器。
    user 表示登录samba服务器需要用户和密码。
    server 表示检查账户及密码的工作指定由另一台Windows服务器或者samba服务器负责。
    domain 指定Windows域控制器来验证用户和密码。

[homes]部分详解：

    comment 设置共享的说明信息
    browseable 设置为no表示所有samba用户的宿主目录都不能被看到，只有登录用户才能看见自己的宿主目录。
    writable 设置为yes表示用户可以对该共享目录写入。

更多享目录常见设置项：

    path 用户设置共享目录对应的linux系统目录路径。
    public 设置为yes表示该共享目录对于所有samba用户是可见的。
    only guest 设置为yes表示所有用户在使用该共享目录时的用户身份是guest，就是系统用户nobody。
    writable 设置为yes表示该共享目录对于用户可写。
    valid users 允许指定用户访问共享目录。

配置用户共享用户，在服务端操作如下

1.环境准备
关闭防火墙和selinux

    [root@linfan ~]systemctl disable firewalld
    [root@linfan ~]systemctl stop firewalld
    [root@linfan ~]sed -i"s/^SELINUX\=enforcing/SELINUX\=disabled/g" /etc/selinux/config
    [root@linfan ~]setenforce 0

2.安装samba服务器：

    yum -y install samba-*

3.共享用户配置并为用户lin创建smb共享密码

    useradd -M lin
    smbpasswd -a lin

将lin用户映射为share用户：

    echo 'lin = share' > /etc/samba/smbusers

在全局变量中添加如下内容：

    [root@linfan ~]# vi /etc/samba/smb.conf
    # See smb.conf.example for a more detailed config file or
    # read the smb.conf manpage.
    # Run 'testparm' to verify the config is correct after
    # you modified it.

    [global]
            workgroup = SAMBA
            security = user
            username map = /etc/samba/smbusers  //在此添加

4. 创建一个共享目录lin
    
    [root@linfan ~]# mkdir -p /opt/lin/
    [root@linfan ~]# chown -R lin.lin /opt/lin/
    
5.配置共享

    [root@linfan ~]# cat >> /etc/samba/smb.conf <<EOF
    > [lin]       //共享目录名称
    > comment = lin   //描述
    > path = /opt/lin   //共享目录的路径
    > browseable = yes   //设置为可见
    > guest ok = yes   //设置允许匿名访问
    > writable = yes   //设置可写
    > write list = share   //只有share用户拥有读权限
    > public = yes  //设置匿名可访问
    > EOF
    [root@linfan ~]# testparm   //测试是否正确
    [root@linfan ~]# tail -8 /etc/samba/smb.conf
    [lin]
    comment = lin
    path = /opt/lin
    browseable = yes
    guest ok = yes
    writable = yes
    write list = share 
    public = yes
    
6.smb服务配置

smb服务启动、重启

    [root@linfan ~]# systemctl start smb
    [root@linfan ~]# systemctl restart smb
    [root@linfan ~]# systemctl reload smb

设置smb开机自启动

    [root@linfan ~]# systemctl enable smb

在客户端操作

1.查看smb服务器共享了哪些资源

    [root@linfan ~]# smbclient -L 192.168.24.248 -U share

2.创建挂载目录

    [root@linfan ~]# mkdir -p /opt/smb/

3.将smb服务器上的lin挂载到本地

    [root@linfan ~]# mount -t cifs //192.168.24.248/lin /opt/smb -o username=share,password=1
    [root@linfan ~]# df -h
    Filesystem               Size  Used Avail Use% Mounted on
    /dev/mapper/centos-root   17G  6.0G   12G  35% /
    devtmpfs                 478M     0  478M   0% /dev
    tmpfs                    489M     0  489M   0% /dev/shm
    tmpfs                    489M  6.9M  482M   2% /run
    tmpfs                    489M     0  489M   0% /sys/fs/cgroup
    /dev/sda1               1014M  125M  890M  13% /boot
    tmpfs                     98M     0   98M   0% /run/user/0
    /dev/sr0                 4.3G  4.3G     0 100% /mnt
    //192.168.24.248/lin      17G  6.0G   12G  36% /opt/smb

4.进入客户端共享目录创建新文件

    [root@linfan opt]# cd /opt/smb

    [root@linfan smb]# mkdir l
    [root@linfan smb]# touch k
    [root@linfan smb]# ls
    k  l

5.在服务端验证

    [root@linfan ~]# cd /opt/lin
    [root@linfan lin]# ls
    k  l

匿名用户共享

在服务端操作如下

1.环境准备

关闭防火墙和selinux

    [root@linfan ~]systemctl disable firewalld
    [root@linfan ~]systemctl stop firewalld
    [root@linfan ~]sed -i"s/^SELINUX\=enforcing/SELINUX\=disabled/g" /etc/selinux/config
    [root@linfan ~]setenforce 0

2.安装smb服务

    [root@linfan ~]# yum -y install samba-*  

3.编辑配置文件

    [root@linfan ~]# vi /etc/samba/smb.conf
     #See smb.conf.example for a more detailed config file or
     #read the smb.conf manpage.
     #Run 'testparm' to verify the config is correct after
     #you modified it.

    [global]
    workgroup = SAMBA
    security = user
    map to guest = Bad User     //在此添加

4.创建共享目录

    [root@linfan ~]# mkdir /opt/doudou
    [root@linfan ~]# chmod 777 /opt/doudou
    [root@linfan ~]# ll /opt/
    total 0
    drwxrwxrwx. 2 root root   6 Aug  6 19:08 doudou
    drwxr-xr-x. 8 root root 220 Jul 18 17:09 lin.d

5.编辑共享文件

    [root@linfan ~]# cat >> /etc/samba/smb.conf <<EOF
    > [doudou]
    > comment = doudou
    > path = /opt/doudou
    > browseable = yes
    > guest ok = yes
    > writable = yes
    > public = yes
    > EOF
    [root@linfan ~]# tail -7 /etc/samba/smb.conf
    [doudou]
    comment = doudou
    path = /opt/doudou
    browseable = yes
    guest ok = yes
    writable = yes
    public = yes

6.启动smb服务

    [root@linfan ~]# systemctl start smb 

7.在客户端查看smb服务共享 无需输入密码 直接回车即可

    [root@linfan ~]# smbclient -L 192.168.24.248 -U'Bad User' 

8.创建挂载目录

    [root@linfan ~]# mkdir -p /opt/smb

9.将smb服务器的共享文件doudou 挂载到本地客户端

    [root@linfan ~]# mount -t cifs //192.168.24.248/doudou /opt/smb -o username='Bad User'
    [root@linfan ~]# df -h  

10.切换到新的共享目录创建文件

    [root@linfan ~]# cd /opt/smb
    [root@linfan smb]# mkdir lin
    [root@linfan smb]# touch wu
    [root@linfan smb]# ls
    lin  wu    

11.在服务端验证

    [root@linfan doudou]# ls
    lin  wu


# 🚩 Linux Software Installation 软件安装方式

## rpm 包的形式安装软件

这种方式其实和yum安装没有多大区别，但是这种安装方式适合没有网络的机器，比如我们在工作中会遇到一些不能联网的服务器，这个时候就需要通过rpm包的方式来安装软件了。以我们安装httpd为例，命令是：

    rpm -ivh  httpd-2.4.6-67.el7.centos.x86_64.rpm # install
    rpm -Uvh  httpd-2.4.6-67.el7.centos.x86_64.rpm # upgrade
    rpm -e    httpd-2.4.6-67.el7.centos.x86_64.rpm # uninstall
    rpm -qa | grep httpd # 查看某个服务安装没有

第一个命令是直接安装，第二个命令是在系统上以后的情况下升级安装，目前使用的最多的就是这两种格式。这种安装方式的弊端，就是这种安装方式无法解决依赖的问题，因此缺少依赖会导致安装失败。


## yum 源安装软件

Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

CentOS/RHEL系列优先使用这种方式，即yum源的方式来安装软件。这种方式就相当于是把各种软件都放在一个本地仓库或者远方的仓库里。需要的时候根据配置好的地址去取回来。同时还能自动解决各种软件之间的依赖关系。我们首先来配置一个国内的yum源。配置是：

    [163]
    name=163 repo
    baseurl=http://mirrors.163.com/centos/7.4.1708/os/$basearch
    enabled=1
    gpgcheck=1
    gpgkey=http://mirrors.163.com/centos/7.4.1708/os/$basearch/RPM-GPG-KEY-CentOS-7

把这个文件保存为163.repo，放在/etc/yum.repos.d/目录下。yum源配置好以后，我们使用这个yum源来安装一个apache httpd服务器。命令是：

    yum install httpd -y 

然后等待软件安装完毕。可以看到，yum源会自动安装httpd软件，同时还会自动安装缺少的依赖文件。 yum 命令参考：

    yum repolist all                  列出所有仓库。
    yum list all                      列出仓库中所有软件包
    yum info {package_name}           查看软件包信息
    yum install {package_name}        安装软件包
    yum reinstall {package_name}      重新安装软件包
    yum update {package_name}         升级软件包
    yum remove {package_name}         移除软件包
    yum clean all                     清除所有仓库缓存
    yum check-update                  检查可更新的软件包
    yum grouplist                     查看系统中已经安装的软件包组
    yum groupinstall {package_group}  安装指定的软件包组
    yum groupremove {package_group}   移除指定的软件包组
    yum groupinfo {package_group}     查询指定的软件包组信息

举例，在阿里云Ubuntu系统安装 Pythond 3.6 和 uWSGI

    yum search python3 | grep python36
    yum list | grep python36
    yum -y install python36
    python3.6 --version
    whereis python3

    yum search python-dev # 查询Python开发包
    yum -y install python-devel
    pip install uwsgi


## apt-get 安装方式

在ubuntu当中，安装应用程序我所知道的有三种方法，分别是apt-get，dpkg安装deb和make install安装源码包三种。下面针对每一种方法各举例来说明。使用apt-get install来安装应用程序算是最常见的一种安装方法了，比如我要安装build-essential这个软件，使用以下，他会帮我把所有的依赖包都一起安装了。

    sudo apt-get install build-essential
    apt-get install xxx 安装xxx。可以带有参数，-d 表示仅下载 ，-f 表示强制安装  
    apt-get remove xxx  卸载xxx  
    apt-get update      更新软件信息数据库  
    apt-get upgrade     进行系统升级  
    apt-cache search    搜索软件包  


## dpkg deb 包安装

Ubuntu 软件包格式为 deb，安装方法如下：

    sudo  dpkg  -i  package.deb

dpkg 的详细使用方法参考：

    dpkg -i package.deb        安装包
    dpkg -r package            删除包
    dpkg -P package            删除包（包括配置文件）
    dpkg -L package            列出与该包关联的文件
    dpkg -l package            显示该包的版本
    dpkg –unpack package.deb   解开 deb 包的内容
    dpkg -S keyword            搜索所属的包内容
    dpkg -l                    列出当前已安装的包
    dpkg -c package.deb        列出 deb 包的内容
    dpkg –configure package    配置包

根据Ubuntu中文论坛上介绍，使用apt-get方法安装的软件，所有下载的deb包都缓存到了/var/cache/apt /archives目录下了，所以可以把常用的deb包备份出来，甚至做成ISO工具包、刻盘，以后安装Ubuntu时就可以在没有网络环境的情况下进行 了。


## make install 源代码编译安装

如果要使用make安装的话，那么必须得安装编译工具 build-essential 这个依赖包。在安装完毕以后，我们就可以进行源码安装。源码安装大致可以分为三步骤： 

    配置 ./configure
    编译 sudo make
    安装 sudo make install

配置：这是编译源代码的第一步，通过 ./configure 命令完成。执行此步以便为编译源代码作准备。常用的选项有 --prefix=PREFIX，用以指定程序的安装位置。更多的选项可通过 --help 

编译：一旦配置通过，可即刻使用 make 指令来执行源代码的编译过程。视软件的具体情况而定，编译所需的时间也各 有差异，我们所要做的就是耐心等候和静观其变。此步虽然仅下简单的指令，但有时候所遇到的问题却十分复杂。较常碰到的情形是程序编译到中途却无法圆满结 束。此时，需要根据出错提示分析以便找到应对之策。

安装：如果编译没有问题，那么执行 sudo make install 就可以将程序安装到系统中了。 

Nagios是一款开源的免费网络监视工具，能有效监控Windows、Linux和Unix的主机状态，交换机路由器等网络设备，打印机等。下面以安装nagios为例进行说明，先使用 tar 命令解包下载到的源代码归档文件 tar.gz。

    tar -zxf nagios-4.0.2.tar.gz  
    cd nagios-4.0.2
    ./configure --prefix=/usr/local/nagios     
    make all
    make install && make install-init && make install-commandmode && make install-config

make是gcc的编译器

    yum -y install gcc automake autoconf libtool make
    yum install gcc gcc-c++


## bash 安装脚本

如果软件提供了安装脚本，那么可以使用脚本来安装，如 uWSGI, curl 通过网络获取脚本，下载到本地后再通过 bash 执行安装脚本:

    curl http://uwsgi.it/install | bash -s default /tmp/uwsgi

## wget curl tar unzip 手动下载解压安装

    wget http://www.javadecompilers.com/jad/Jad%201.5.8e%20for%20Linux%20on%20Intel%20platform.zip
    curl -O "http://www.javadecompilers.com/jad/Jad%201.5.8e%20for%20Linux%20(statically%20linked).zip"

    unzip "Jad 1.5.8e for Linux on Intel platform.zip" -d jad
    rm Jad\ 1.5.8e\ for\ Linux\ on\ Intel\ platform.zip

    tar -jxvf demo.tar.gz




# =🚩 Multiplexed I/O 
- Linux System Programming, 2nd - ch02 File I/O
- Linux System Programming, 2nd - ch04 Advanced File I/O
- https://linux.die.net/man/2/epoll_create1

I/O 多路复用（multiplexing）的本质是通过一种机制（系统内核缓冲I/O数据），让单个进程可以监视多个文件描述符，一旦某个描述符就绪（一般是读就绪或写就绪），能够通知程序进行相应的读写操作

Linux 2.6 内核引入一个新的系统调用，Event Poll，在设计之初，它就是为了替代 select, poll 线性复杂度的模型，epoll 的时间复杂度为 O(1), 也就意味着，epoll 在高并发场景，随着文件描述符的增长，有良好的可扩展性。

select、poll 和 epoll 都是 Linux API 提供的 IO 复用方式。

Unix 系统五种 I/O 模型如下：

1. blocking I/O - 阻塞 I/O
2. nonblocking I/O - 非阻塞 I/O
3. I/O multiplexing - I/O 多路复用
4. signal driven I/O - 信号驱动 I/O
5. asynchronous I/O - 异步 I/O

前面四种是同步 I/O，也就是在数据未准备好时读取操作会阻塞。

而 select，poll，epoll 都是I/O多路复用的具体的实现，他们也是不同历史时期的产物：

- 1984 年 BSD 引入 select 多路复用，遍历操作，使用数组实现 O(n) 时间复杂度；
- 1997 年 System V 引入 poll 多路复用，遍历操作，使用链表数据结构，O(n) 时间复杂度；
- 2002 年 Davide Libenzi 实现 epoll 多路复用，使用内核文件级别的回调机制，通过红黑树 RB-Tree 实现 O(1)；

从 select 到 pool 间隔这么多年，是因为那个时代的硬件实在太弱，一台服务器处理 1 千多个链接简直就是神一样的存在，select 很长段时间已经满足需求。

调用 epoll_create 时，内核除了帮我们在 epoll 文件系统里建立 file 结点，在内核 cache 里建立红黑树 用于存储  epoll_ctl 传来的 socket外，还会再建立一个 list 链表，用于存储准备就绪的事件。

- *epoll_create1*: 创建一个epoll实例，文件描述符
- *epoll_ctl*: 将监听的文件描述符添加到epoll实例中，实例代码为将标准输入文件描述符添加到epoll中
- *epoll_wait*: 等待epoll事件从epoll实例中发生， 并返回事件以及对应文件描述符l

为一个连接提供一个线程处理 TCP 请求，在高并发的场景，这种多线程模型并不是最高效的，与 Epoll 相比就显得相形见绌。

epoll 高效的本质在于：

- 减少了用户态和内核态的文件句柄拷贝
- 减少了对可读可写文件句柄的遍历
- mmap 加速了内核与用户空间的信息传递，epoll 是通过内核与用户 mmap 同一块内存，避免无谓的内存拷贝
- I/O 性能不会随着监听的文件描述的数量增长而下降
- 使用红黑树存储 fd，以及对应的回调函数，其插入，查找，删除的性能不错，相比于 hash，不必预先分配很多的空间

Let’s look at an example program that uses `poll()` to simultaneously check whether a
read from stdin and a write to stdout will block:

```cpp
#include <stdio.h>
#include <unistd.h>
#include <poll.h>

#define TIMEOUT 5 /* poll timeout, in seconds */

int main(void) 
{
    struct pollfd fds[2];
    int ret;

    /* watch stdin for input */
    fds[0].fd = STDIN_FILENO;
    fds[0].events = POLLIN;

    /* watch stdout for ability to write (almost always true) */
    fds[1].fd = STDOUT_FILENO;
    fds[1].events = POLLOUT;

    /* All set, block! */
    ret = poll(fds, 2, TIMEOUT * 1000);
    if (ret == -1) {
        perror("poll");
        return 1;
    }
    if (!ret) {
        printf("%d seconds elapsed.\n", TIMEOUT);
        return 0;
    }
    if (fds[0].revents & POLLIN)
        printf("stdin is readable\n");
    if (fds[1].revents & POLLOUT)
        printf("stdout is writable\n");
    return 0;
}
```

测试：

    $  ./poll < some.txt
    $ echo ABCD | ./poll
    stdin is readable
    stdout is writable

