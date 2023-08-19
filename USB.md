# USB Overview
https://usb.org/about

USB Implementers Forum, Inc. is a non-profit corporation founded by the group of
companies that developed the Universal Serial Bus specification. The USB-IF was 
formed to provide a support organization and forum for the advancement and adoption 
of Universal Serial Bus technology. The Forum facilitates the development of 
high-quality compatible USB peripherals (devices), and promotes the benefits of 
USB and the quality of products that have passed compliance testing. Some of 
the many activities that the USB-IF supports include:

1. USB Compliance Workshops
2. USB compliance test development
3. www.usb.org Web site
4. USB communities at Computex and other events
5. Marketing programs and collateral materials, such as retail newsletters, retail salespeople training, store end-caps, etc.
6. USB Developer Conferences
7. and many more...

Board of Directors
The USB-IF, Inc. Board of Directors is composed of the following companies and 
their designated representative Directors:

1. Apple - Dave Conroy
2. HP Inc. - Isaac Lagnado
3. Intel Corporation - Abdul R. Ismail 
4. Microsoft Corporation - Matt Chung
5. Renesas Electronics - Philip Leung
6. STMicroelectronics - Gerard Mas
7. Texas Instruments - Anwar Sadat

USB 接口目前有三种外观规格：

1. Type A 大口，是最早期的接口形式，接口外观为方形；
2. Type B 方口，打印机、MIDI 键盘等特殊设备使用；
3. Type C 正反可插口，是最新的 USB 接口，使用更方便，接口外观为 0 形状；
4. Mini USB，细分为 Mini-A 和 Mini-B 两种，Mini-USB, Micro-USB，接口外观如字母 D 形状；

Type-A 和 Type-B 根据支持的 USB 标准不同，又可以分为 USB 2.0 和 USB 3.0 标准 USB 接口。
根据接口的颜色区分该接口支持 USB 2.0 还是支持 USB 3.0。Type-A 接口也是我们日常生活中最常见的
USB 接口，广泛应用于鼠标、键盘、U 盘等设备上，Type-B 型则常用于打印机、特殊设备上，如 MIDI 键盘。

https://www.usbmemorydirect.com/blog/mini-usb-vs-micro-usb/
Mini USB 接口较小，常见于一些小型设备上，比如 MP3、MP4、收音机等，某些型号的手机也采用了该接口。

Type-C 接口是近几年出现的新型 USB 接口，最大的好处就是可以正反插拔。

最新的 USB4 标准目前仅支持 Type-C 接口，USB4 采用 Thunderbolt 接口协议，俗称雷电接口协议，
Intel 主导开发。具有速度快，供电强，可同时兼容雷电、USB、Power Delivery、Display Port、PCIe 
等多种接口/协议的特点。因此，支持 USB4 标准的 Type-C 接口也可以兼容雷电接口。

https://www.usb.org/usb-charger-pd
USB Power Delievry 简称 USB PD，利用 USB电缆实现供电，最大可达 100W 的 USB 供电扩展标准。
以往的 USB 最大供电功率分别为 USB 2.0 最大 2.5W，USB 3.0 最大 4.5W，电池用途的充电标准
USB BC（Battery Charging）1.2 最大 7.5W。

USB PD 协议让平板电脑、笔记本电脑等以往无法支持的设备也能进行供受电，可支持的设备大幅扩大。
并且，可向移动设备快速充电（充电时间缩短）。USB PD 通信在 CC 专用线上进行，与 USB 数据通信独立。

USB 3.2之前大致上有两到三种插件类型，A/B/C，但从 USB3.2 开始，就只有 Type-C，因为之前都是
单通道模式，两组差分一发一收就可以了，但 USB 3.2 为了有更高的带宽，Type-C 本来不用的另一组
差分也用上。

一条 USB 总线上可以连接多个 Hub，设备连接到 Hub 上，形成树状连接结构，宿主机上的 Hub 称为
Root Hub，控制所有 Hub 与所连接的设备。宿主主动向设备发出命令查询数据，设备以数据答复。


秒懂所有USB接口类型，USB接口大全
https://zhuanlan.zhihu.com/p/447595295
USB 接口大全
https://pic1.zhimg.com/v2-cbdf8d90862a4ceb729b65b939eb890b_1440w.jpg


1996 年自 USB-IF（USB Implementers Forum）组织发布 USB 1.0 标准以来，USB 标准经历以下
版本的变更，对的是版本变更，因为 USB-IF 的规范工作总是在改名字的把戏：

|   Year  |   Ver.  |             Name            |  Speed   |  Power   |
|---------|---------|-----------------------------|----------|----------|
| 1996.01 | USB 1.0 | USB 2.0 Low-Speed           | 1.5 Mbps | 5v/500mA |
| 1998.09 | USB 1.1 | USB 2.0 Full-Speed          | 12 Mbps  | 5v/500mA |
| 2000.04 | USB 2.0 | USB 2.0 High-Speed          | 480 Mbps | 5v/500mA |
| 2008.11 | USB 3.0 | USB 3.2 Gen1 Super-Speed    | 5 Gbps   | 5v/900mA |
| 2013.07 | USB 3.1 | USB 3.2 Gen1x1 Super-Speed+ | 10 Gbps  | 20v/5A   |
| 2017.09 | USB 3.2 | USB 3.2 Gen1x2 Super-Speed+ | 20 Gbps  | 20v/5A   |
| 2019.09 | USB4    | -                           | 40 Gbps  | 20v/5A   |


Pin Configuration
The typical Type-A USB connector is used in various applications. These USBs 
include 4 pins that are given below. This type of USB is observed mostly in 
connecting various devices to PC because it is the typical four-pin USB connector. 
This connector is taller and narrower including 4-pins arranged within a box.

https://www.elprocus.com/wp-content/uploads/Type-A-USB-Connector-Pin-Configuration.jpg
Type-A USB Connector Pin Configuration

USB Type-A (大口) 插头线路，左侧 Pin 1 为正电源，右侧 Pin 4 为接地，中间两条线为差分信号。
发送信号 1 时 D+ 为正，发送信号 0 时 D- 为正：

    +-------------+
    |=============|
    | P1 P2 P3 P4 |
    +-------------+

The pins of Type A USB are indicated with color wires to perform a particular function.

1. **Pin1 (VBus)**: It is a red color wire, used for providing power supply.
2. **Pin2 (D-)**: It is a differential pair pin available in white color, used for connectivity of USB.
3. **Pin3 (D+)**: It is a differential pair pin available in green color, used for connectivity of USB.
4. **Pin4 (GND)**: It is a Ground pin, available in black color.

In the above pins, both the D+ & D- pins indicate the transfer of data. 
When a ‘1’ is sent across the wires, then the D+ line will have positive flow, 
and if ‘0’ is sent then the reverse happens.

Micro-USB Pin Configuration
https://www.elprocus.com/micro-usb/
A connector like Micro-USB is used frequently for charging the handy devices 
through micro-USB charging cable otherwise by interfacing mobile devices through PC. 
The pin configuration of Micro USB is discussed below.

MicroUSB Pin Configuration
https://www.elprocus.com/wp-content/uploads/MicroUSB-Pin-Configuration.jpg

    .-----------.
    | 1 2 3 4 5 |
    +-----------+

1. **Pin1 (VCC)**: It is +5 VDC and the connected wire color is red
2. **Pin2 (D-)**: White Data – and the connected wire color is white
3. **Pin3 (D+)**: Green Data + and the connected wire color is green
4. **Pin4 (ID)**: Mode detects and the connected wire color is blue
5. **Pin5 (GND)**: Ground and the connected wire color is black

MicroUSB cable utilizes four shielded wires like two wires are used for power 
like +5v and GND whereas the other two wires are used for differential data 
signals like D+ & D-.

The USB Micro also has 5 pins similar to that of the USB Mini, where the 
additional pin supports OTG connectivity.

Non-Return to Zero Invert or NRZI is an encoding system mainly used to transmit 
data through a sync field for synchronizing the clocks of receiver & host. 
In the data cable of USB, the signals like Data+ & Data- are broadcasted over 
a twisted pair cable.



# USB Protocol
https://usb.org/documents
https://www.elprocus.com/usb-protocol/
https://www.etechnophiles.com/usb-pinout-ports-connectors/

USB协议看这一篇就够了 https://zhuanlan.zhihu.com/p/431163780

Type C 接口上的这些信号，在USB条件下：

    Pin Location    Pin Name    Function

1. USB 2.0 数据信号 4 个，其实是两个，为了满足正反插需求所以正反都有；
2. USB 3.2 数据信号 8 个，包含两通道的差分收发信号；
3. VBUS 信号 4 个，
4. GND 信号 4 个，一共 8 个信号处理电源；
5. CC 信号两个；
6. SBU 信号两个。

CC - Configuration　Channel 信号，分为 CC1 和 CC2，在 Type C 接口被引用，主要解决正反插的
信号交错问题，和侦测插入的接口类型。

