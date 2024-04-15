
# /🚩 Books
E2E Protocol Specification https://www.autosar.org/fileadmin/standards/R19-11/FO/AUTOSAR_PRS_E2EProtocol.pdf

## // Programming with STM32: Getting Started with the Nucleo Board and C/C++
- https://b-ok.org/book/3695325/ae5b76
- https://www.doc88.com/p-9837833566682.html

Programming with STM32: Getting Started with the Nucleo Board and C/C++
Donald Norris
Create your own STM32 programs with ease!

Get up and running programming the STM32 line of microcontrollers from STMicroelectronics using the hands-on information contained in this easy-to-follow guide. Written by an experienced electronics hobbyist and author, Programming with STM32: Getting Started with the Nucleo Board and C/C++ features start-to-finish projects that clearly demonstrate each technique. Discover how to set up a stable development toolchain, write custom programs, download your programs to the development board, and execute them. You will even learn how to work with external servos and LED displays!

• Explore the features of STM32 microcontrollers from STMicroelectonics
• Configure your Nucleo-64 Microcontroller development board
• Establish a toolchain and start developing interesting applications
• Add specialized code and create cool custom functions
• Automatically generate C code using the STM32CubeMX application
• Work with the ARM Cortex Microcontroller Software Interface Standard and the STM hardware abstraction layer (HAL).
• Control servos, LEDs, and other hardware using PWM
• Transfer data to and from peripheral devices using DMA
• Generate waveforms and pulses through your microcontroller’s DAC

Year:2018
Publisher:McGraw-Hill Education
Language:english
ISBN 13:9781260031324
File:EPUB, 21.65 MB

本书 400 多页，图文并茂，新手必看的书，十分详细的讲述了

1、ST的MCU 产品线
2、如何搭建STM32调试环境（openocd + Zadig）;
3、CubeMX应用
4、STM工程开发，helloword
5、使用HAL开发GPIO应用
6、中断
7、定时器
8、串口通信
9、ADC
9、PWM
10、DMA下的DAC

基本上就这些，很详细，原理分析也很到位。
适合人群 入门和初学者，还有就是直接在 Windows 环境下搭建 Openocd 环境来做项目的调试器，这块讲得很详细，需要跨 keil、 IAR 版权的公司可以学习使用一下哈哈~~


## // Beginning STM32

> Developing with FreeRTOS, libopencm3 and GCC

https://b-ok.org/book/3705292/5504c6
http://www.allitebooks.org/beginning-stm32/

Warren Gay
ISBN-10: 1484236238
Year: 2018
Pages: 409
Language: English
File size: 7.6 MB
File format: PDF
Category: Hardware & DIY Computers & Technology

Using FreeRTOS and libopencm3 instead of the Arduino software environment, this book will help you develop multi-tasking applications that go beyond Arduino norms. In addition to the usual peripherals found in the typical Arduino device, the STM32 device includes a USB controller, RTC (Real Time Clock), DMA (Direct Memory Access controller), CAN bus and more.

Each chapter contains clear explanations of the STM32 hardware capabilities to help get you started with the device, including GPIO and several other ST Microelectronics peripherals like USB and CAN bus controller. You’ll learn how to download and set up the libopencm3 + FreeRTOS development environment, using GCC. With everything set up, you’ll leverage FreeRTOS to create tasks, queues, and mutexes. You’ll also learn to work with the I2C bus to add GPIO using the PCF8574 chip. And how to create PWM output for RC control using hardware timers.

You’ll be introduced to new concepts that are necessary to master the STM32, such as how to extend code with GCC overlays using an external Winbond ​W25Q32 flash chip. Your knowledge is tested at the end of each chapter with exercises. Upon completing this book, you’ll be ready to work with any of the devices in the STM32 family.

Beginning STM32 provides the professional, student, or hobbyist a way to learn about ARM without costing an arm!

What You’ll Learn

- Initialize and use the libopencm3 drivers and handle interrupts
- Use DMA to drive a SPI based OLED displaying an analog meter
- Read PWM from an RC control using hardware timers

Who This Book Is For

Experienced embedded engineers, students, hobbyists and makers wishing to explore the ARM architecture, going beyond Arduino limits.

## // The Definitive Guide to Arm® Cortex®-M3 and Cortex®-M4 Processors
https://b-ok.org/book/2278329/0eee18

Joseph Yiu (Auth.)

This book presents the background of the ARM architecture and outlines the features of the processors such as the instruction set, interrupt-handling and also demonstrates how to program and utilize the advanced features available such as the Memory Protection Unit (MPU).



Chapters on getting started with IAR, Keil, gcc and CooCox CoIDE tools help beginners develop program codes.  Coverage also includes the important areas of software development such as using the low power features, handling information input/output, mixed language projects with assembly and C, and other advanced topics.


Two new chapters on DSP features and CMSIS-DSP software libraries, covering DSP fundamentals and how to write DSP software for the Cortex-M4 processor, including examples of using the CMSIS-DSP library, as well as useful information about the DSP capability of the Cortex-M4 processor

A new chapter on the Cortex-M4 floating point unit and how to use it

A new chapter on using embedded OS (based on CMSIS-RTOS), as well as details of processor features to support OS operations

Topics on software porting from other architectures

A full range of easy-to-understand examples, diagrams and quick reference appendices

Year:2014
Edition:3
Publisher:Newnes
Language:english
Pages:1015
ISBN 13:978-0-12-408082-9
File:PDF, 54.65 MB


## // Mastering STM32
Mastering STM32 by Carmine Noviello (z-lib.org).pdf https://b-ok.org/book/5022776/62c497
https://www.embedic.com/uploads/files/20201008/Mastering%20STM32.pdf

> A step-by-step and growing guide to the most complete ARM Cortex-M platform, using a free and powerful development environment based on Eclipse and GCC

Mastering STM32 is my personal "editorial project" that I undertook by chance. I have started covering topics about the STM32 platform on this blog, especially writing tutorials on how to setup a good tool-chain to develop applications. Since then, I realized that a blog is not sufficient to cover a so complex subject (too many E-Mails every day :-D), so I have decided to treat this and other topics in a more structured way.

The book is an in progress book published thanks to the wonderful platform LeanPub. LeanPub is a self-publishing platform that allows to continuously release updates of your book. Once a reader buy a book, he will receive every update freely forever. This allows authors to write a book without the stress of having to finish the work in time, and maybe look for a publisher.

The book covers these topics as May 2017:

- Introduction to Cortex-M and STM32 microcontrollers.
- How to setup a complete and working tool-chain to develop STM32 applications on Windows, Linux and Mac OSX.
- How to use STM32CubeMX to generate application skeleton, and how to import it inside the tool-chain.
- Introduction to OpenOCD and to the debugging of STM32 applications.
- ARM semihosting.
- GPIO management.
- NVIC controller.
- UART peripheral.
- DMA controller.
- STM32 clock tree and its configuration.
- Basic, general purpose and advanced STM32 timers.
- ADC peripheral.
- DAC controller.
- I2C bus and protocol.
- SPI bus.
- CRC peripheral.
- RTC clock.
- IWDT and WWDT timers.
- Power management.
- The memory layout of an STM32 application and linker scripts.
- Flash memory management and the role of the ART™ Accelerator.
- The booting process in STM32 microcontrollers and how to write a custom bootloader.
- FreeRTOS and the tickless low-power mode.
- Advanced debugging techniques and how to use SEGGER tools to debug STM32 MCUs.
- FAT Filesystem management.
- Develop IoT applications with the W5500 Ethernet processor.
- How to design a custom board using an STM32 MCU.

You can download the complete table of contents from here.

http://www.carminenoviello.com/mastering-stm32-toc.pdf

The book is addressed both to professionals and to fans of this platform, like hobbyists and students. The book examples are based on the sixteen Nucleo-64 boards from ST.

mastering-stm32-preview1 mastering-stm32-preview2 mastering-stm32-preview3 mastering-stm32-preview4
The book uses the STM32 Nucleo as development board for book examples.

You can download a free and substantial preview of the book directly from the LeanPub website. The preview contains all the steps needed to setup the tool-chain.
Please, take note that for support requests about book topics, you can use the dedicated forum below.


《mastering STM32》 目录：
I Introduction
1. Introduction to STM32 MCU Portfolio
2. Setting-Up the Tool-Chain
3. Hello, Nucleo!
4. STM32CubeMX Tool
5. Introduction to Debugging
II Diving into the HAL
6. GPIO Management
7. Interrupts Management
8. Universal Asynchronous Serial Communications
9. DMA Management
10. Clock Tree
11. Timers
12. Analog-To-Digital Conversion
13. Digital-To-Analog Conversion
14. I²C
15. SPI
III Advanced topics
16. Power Management
17. Memory layout
18. Flash Memory Management
19. Booting Process
20. Running FreeRTOS
21. Advanced Debugging Techniques
22. Getting Started With a New Design

这本书是使用 Nucleo 作为硬件，STM32CubeMX 为开发环境，HAL 库的方式，介绍 GPIO、中断、USART、DMA、CLOCK&TIM、ADC/DAC，I²C和SPI等模块，以及电源管理、内存布局管理和FreeRTOS系统等，对英语要求也不高，适合入门之后的提升。



# /🚩 关于 ARM

ARM - Advanced RISC Machines 既是一个公司的名字，也这家公司设计的一类微处理器的统称。

ARM 设计了大量高性能、廉价、耗能低的RISC处理器、相关技术及软件，技术具有性能
高、成本低和能耗省的特点，适用于多种领域，比如嵌入控制、消费/教育类多媒体、DSP和移动式应用等。

1991 年 ARM 公司成立于英国剑桥，主要出售芯片设计技术的授权，采用 ARM 技术知识产权 IP - Intellectual Property 核微处理器，即我们通常所说的 ARM 微处理器，已遍及工业控制、消费类电子产品、通信系统、网络系统、无线系统等各类产品市场，基于 ARM 技术的微处理器应用约占据了 32 位 RISC 微处理器 75% 以上的市场份额，ARM 技术正在逐步渗入到我们生活的各个方面。

ARM 公司是专门从事基于 RISC 技术芯片设计开发的公司，作为知识产权供应商，本身不直接从事芯片生产，靠转让设计许可由合作公司生产各具特色的芯片，世界各大半导体生产商从ARM公司购买其设计的 ARM微处理器核，根据各自不同的应用领域，加入适当的外围电路，从而形成自己的 ARM 微处理器芯片。目前，全世界有几十家大的半导体公司都使用 ARM 公司的授权，因此既使得 ARM 技术获得更多的第三方工具、制造、软件的支持，又使整个系统成本降低，使产品更容易进入市场被消费者所接受，更具有竞争力。

国内的已有大量厂家获取得 ARM 的授权，如比较早期的华为海思，还有兼容 STM 的兆易 GigaDevice。

ARM 开发工具应用软件根据功能的不同，分别有编译软件、汇编软件、链接软件、调试软件、嵌入式实时操作系统、函数库、评估板、JTAG仿真器、在线仿真器等，目前世界上约有四十多家公司提供以上不同类别的产品。

用户选用 ARM 处理器开发嵌入式系统时，选择合适的开发工具可以加快开发进度，节省开发成本。因此一套含有编辑软件、编译软件、汇编软件、链接软件、调试软件、工程管理及函数库的集成开发环境 IDE 一般来说是必不可少的，至于嵌入式实时操作系统、评估板等其他开发工具则可以根据应用软件规模和开发计划选用。

使用集成开发环境开发基于 ARM 的应用软件，包括编辑、编译、汇编、链接等工作全部在PC机上即可完成，调试工作则需要配合其他的模块或产品方可完成，如常见的 JLINK、ST-LINK 编程器。


## // 基本计算机体系结构 

冯·诺依曼体系的特点：

1、数据与指令都存储在同一存储区中，取指令与取数据利用同一数据总线。
2、被早期大多数计算机所采用。
3、ARM7——冯诺依曼体系结构简单,但速度较慢。取指不能同时取数据。

哈佛体系结构特点：

1、程序存储器与数据存储器分开.
2、提供了较大的存储器带宽，各自有自己的总线。
3、适合于数字信号处理.
4、大多数 DSP 都是哈佛结构.
5、ARM9 是哈佛结构，取指和取数在同一周期进行，提高速度，改进哈佛体系结构分成三个存储区：程序、数据、程序和数据共用。

CISC - Complex Instruction Set Computer 复杂指令集特点：

1、具有大量的指令和寻址方式
2、8/2 原则：80% 的程序只使用 20% 的指令
3、大多数程序只使用少量的指令就能够运行。
4、CISC CPU 包含有丰富的单元电路，因而功能强、面积大、功耗大。

RISC - Reduced Instruction Set Computer 精简指令集特点：

1、在通道中只包含最有用的指令,只提供简单的操作。
2、确保数据通道快速执行每一条指令。
3、Load-store结构，处理器只处理寄存器中的数据，load-store 指令用来完成数据在寄存器和外部存储器之间的传送。
4、使CPU硬件结构设计变得更为简单，RISC CPU 包含较少的单元电路，因而面积小、功耗低。


RISC与CISC主要差别

1、寄存器方面

RISC指令集：拥有更多的通用寄存器，每个可以存放数据和地址，寄存器为所有的数据操作提供快速的存储访问。
CISC指令集：多用于特定目的的专用寄存器。

2、LOAD –STORE结构方面

RISC结构：CPU 仅处理寄存器中的数据，采用独立的、专用的 LOAD –STORE 指令来完成数据在寄存器和外存之间的传送。访存费时，处理和存储分开，可以反复的使用保存在寄存器中的数据，而避免多次访问外存。
CISC结构：能直接处理存储器中的数据。


## // CPU 体系架构介绍

四大 CPU 体系结构：ARM、X86/Atom、MIPS、PowerPC，除此外还许多其它架构如 Atmel 的 AVR 架构，Sun 的 Ultra SPARC 架构等。

RISC - Reduced Instruction Set Computer 精简指令集计算机是一种执行较少类型计算机指令的微处理器，起源于 80 年代的 MIPS 主机即 RISC 机器，RISC 机中采用的微处理器统称 RISC 处理器。这样一来，它能够以更快的速度执行操作，每秒执行更多百万条指令，即 MIPS - Million Instructions Per Second 单位。因为计算机执行每个指令类型都需要额外的晶体管和电路元件，计算机指令集越大就会使微处理器更复杂，执行操作也会更慢。　

性能特点一：由于指令集简化后，流水线以及常用指令均可用硬件执行； 
性能特点二：采用大量的寄存器，使大部分指令操作都在寄存器之间进行，提高了处理速度； 
性能特点三：采用缓存—主机—外存三级存储结构，使取数与存数指令分开执行，使处理器可以完成尽可能多的工作，且不因从存储器存取信息而放慢处理速度。

MIPS - Microprocessor without interlocked piped stages 无内部互锁流水级的微处理器，其机制是尽量利用软件办法避免流水线中的数据相关问题。它最早是在80年代初期由斯坦福大学 Hennessy 教授领导的研究小组研制出来的。MIPS 公司的 R 系列就是在此基础上开发的 RISC 工业产品的微处理器。这些系列产品为很多计算机公司采用构成各种工作站和计算机系统。

MIPS 技术公司是美国著名的芯片设计公司，它采用精简指令系统计算结构 RISC 来设计芯片。和英特尔采用的复杂指令系统计算结构 CISC 相比，RISC 具有设计更简单、设计周期更短等优点，并可以应用更多先进的技术，开发更快的下一代处理器。MIPS 是出现最早的商业 RISC 架构芯片之一，新的架构集成了所有原来 MIPS指令集，并增加了许多更强大的功能。MIPS 自己只进行 CPU 的设计，之后把设计方案授权给客户，使得客户能够制造出高性能的CPU。


英代尔 Intel 首先开发制造的 x86 或 80x86 是一种微处理器体系结构的泛称，广泛用于个人电脑 PC - Personal Computer。x86 架构是重要地可变指令长度的复杂指令集电脑 CISC - Complex Instruction Set Computer。Intel Atom（中文：凌动，开发代号：Silverthorne）是 Intel 的一个超低电压处理器系列。处理器采用45纳米工艺制造，集成4700万个晶体管。L2缓存为512KB，支持SSE3指令集，和部份型号支持 VT 虚拟化技术。 

x86 主要分成四种 IA-32、IA-64、x86-32、x86-64，但是其实它们分属于两类，IA-32、x86-32 都属于x86，即英特尔的32位x86架构，x86-64 是 AMD 在其最新的 Athlon 64 处理器系列中采用的新架构，但这一处理器基础架构还是 IA-32，只是在此架构基础之上作了一些扩展，以支持 64 位程序的应用，进一步提高处理器的运算性能。因英特尔的 x86 架构并未申请专利保护，所以绝大多数处理器厂商为了保持与 Intel 的主流处理器兼容，都采用这 x86 架构。


PowerPC 是一种精简指令集 RISC 架构的中央处理器 CPU，其基本的设计源自国际商用机器公司 IBM PowerPC 601 微处理器 POWER - Performance Optimized With Enhanced RISC，《IBM Connect 电子报》 2007 年 8 月号译为增强 RISC 性能优化架构。二十世纪九十年代，IBM、Apple 和 Motorola 公司开发 PowerPC 芯片成功，并制造出基于 PowerPC 的多处理器计算机。PowerPC 架构的特点是可伸缩性好、方便灵活。

PowerPC 处理器有广泛的实现范围，包括从诸如 Power4 那样的高端服务器 CPU 到嵌入式 CPU 市场，任天堂 Gamecube 就使用了 PowerPC。PowerPC 处理器有非常强的嵌入式表现，因为它具有优异的性能、较低的能量损耗以及较低的散热量。除了象串行和以太网控制器那样的集成 I/O，该嵌入式处理器与台式机 CPU  存在非常显著的区别。

ARM 架构，过去称作进阶精简指令集机器 Advanced RISC Machine，更早称作：Acorn RISC Machine，是一个32位精简指令集 RISC 处理器架构，其广泛地使用在许多嵌入式系统设计。由于节能的特点，ARM处理器非常适用于行动通讯领域，符合其主要设计目标为低耗电的特性。

在今日，ARM 家族占了所有 32 位嵌入式处理器 75% 的比例，使它成为占全世界最多数的 32 位架构之一。ARM 处理器可以在很多消费性电子产品上看到，从可携式装置 PDA、移动电话、多媒体播放器、掌上型电子游戏，和计算机到电脑外设、硬盘、桌上型路由器，甚至在导弹的弹载计算机等军用设施中都有他的存在。

ARM 公司本身并不靠自有的设计来制造或出售 CPU ，而是将处理器架构授权给有兴趣的厂家。ARM 提供了多样的授权条款，包括售价与散播性等项目。对于授权方来说，ARM 提供了 ARM 内核的整合硬件叙述，包含完整的软件开发工具，编译器、debugger、SDK 等，以及针对内含 ARM CPU 硅芯片的销售权。对于无晶圆厂的授权方来说，其希望能将 ARM 内核整合到他们自行研发的芯片设计中，通常就仅针对取得一份生产就绪的智财核心技术 IP Core 认证。对这些客户来说，ARM 会释出所选的 ARM 核心的闸极电路图，连同抽象模拟模型和测试程式，以协助设计整合和验证。需求更多的客户，包括整合元件制造商 IDM 和晶圆厂家，就选择可合成的 RTL（暂存器转移层级，如 Verilog）形式来取得处理器的智财权 IP。借着可整合的 RTL，客户就有能力能进行架构上的最佳化与加强。这个方式能让设计者完成额外的设计目标（如高震荡频率、低能量耗损、指令集延伸等）而不会受限于无法更动的电路图。虽然 ARM 并不授予授权方再次出售 ARM 架构本身，但授权方可以任意地出售制品，如芯片元件、评估板、完整系统等。商用晶圆厂是特殊例子，因为他们不仅授予能出售包含 ARM 内核的硅晶成品，对其它客户来讲，他们通常也保留重制 ARM 内核的权利。

主要生产厂商：TI （德州仪器）/Samsung（三星）/Freescale（飞思卡尔）/Marvell（马维尔）/Nvidia（英伟达）/ Hisilicon 华为海思

ARM 架构体系版本特点及代表芯片型号

| 架构版本 |                     芯片系列                    |
|----------|-------------------------------------------------|
| ARMv1    | ARM1                                            |
| ARMv2    | ARM2/ARM250/ARM3                                |
| ARMv3    | ARM6/ARM7                                       |
| ARMv4    | ARM8 三星 S3C44B0                               |
| ARMv5    | ARM9 CISC +MMU 三星 S3C2410/S3C2440，Atmel 9260 |
| ARMv6    | ARM11 CISC MMU                                  |
| ARMv7    | 2004 年发布架构 Cortex A/R/M  A5/A7/A9/A15/A17  |
| ARMv8    | 2011 年发布架构 Cortex-A32/A53/A78/X1           |
| ARMv9    | 2021 年最新架构                                 |

ARM7 没有内存管理单元 MMU，只能叫做微控制器 MCU，不能运行诸 Linux、WinCE 等这些现代的多用户多进程操作系统，因为这些系统需要基于 MMU 给每个用户进程分配进程自己独立的地址空间。μC/OS、μCLinux 这些精简实时的 RTOS 不需要 MMU，可以在 ARM7 上运行。

ARM9、ARM11，是嵌入式 CPU，带有 MMU，可以运行诸如 Linux 等多用户多进程的操作系统，应用场合也不同于 ARM7。ARM9 一般是有 MMU 的，ARM9940T 只有 MPU，不是一个完整的 MMU。

从 ARM 架构版本可以看到，旧版本的叫法 ARM9、ARM11，而新版本的叫法则改以 Cortex 命名，系列的三个后缀合到一起又是 ARM。

ARMv7 架构开始以 Cortex 来命名，并分成以下几个系列：

- Cortex-A - Advanced 消费娱乐和无线产品应用，高性能、运行丰富操作系统及提供交互媒体和图形体验的应用领域，如智能手机、平板电脑等。
- Cortex-R - Realtime 针对需要运行实时操作的系统应用，面向如汽车制动系统、动力传动解决方案、大容量存储控制器等深层嵌入式实时应用。
- Cortex-M - Microcontroller 针对成本和功耗敏感的应用，如智能测量、人机接口设备、汽车和工业控制系统、家用电器、消费性产品和医疗器械等。
- Cortex-SC - SecurCore 主要用于政府安全芯片。

所以看上去 ARM7 跟 Cortex-M 很像，因为他们都是 MCU，但 Cortex-M 比 ARM7 高了三代，所以性能及功能上完全取代了旧的 ARM7。此外，Cortex-M 系列还细分为 Cortex-M0、Cortex-M3、Cortex-M4 和超低功耗的 Cortex-M0+，用户依据成本、性能、功耗等因素来选择芯片。

ARM9、ARM11 都是哈佛结构，性能要高一点，它们大多带内存管理器，跑操作系统好一点，ARM7 适合裸奔。不跑操作系统，价格低一点的：ARM7、cortex-M3等等。性价比高，可跑也可不跑操作系统的：ARM9、cortex-Rx等等。性能高的，通常要跑操作系统的：ARM10、ARM11、Cortex-A8等等。成熟的：ARM7\ARM9\ARM11。发展趋势：Cortex-A、Cortex-R、Cortex-M。

ARMv8 是一个真正意义上的 64-bit 架构，同时这个架构包含唯一的 Cortex-A32 提供了 32-bit 的支持。

ARM 芯片命名规则，列如：

    ARM 926EJ-S
        +------- Family Number: 9 - ARM9
         +------ Memory Sytem: 2 - Cache/MMU/Process ID, 4 - Cache/MPU, 6 - Write buffer/no Cache
          +----- Memory Size: 0 - Cache Size(4-128KB), 2 - Reduced cache size，6 - TCM
           ++--- Extensions: E - DSP Extendsion, J - Jazelle，T - Thumb Support, M - Long Mutiply
              +- Synthesizable for VHDL


## // STM32 系列芯片
- https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html

STM32 芯片基于 ARMv7 Cortex-M3 架构的 CPU，高性能+高代码密度+小硅片面积，使得 CM3 成为理想的处理平台，主要应用在以下领域：

- 低成本单片机
- 汽车电子
- 数据通信
- 工业控制
- 消费类电子产品

Cortex-M3 是一个 32 位处理器内核。内部的数据寻址是 32位的，寄存器是 32 位的，存储器接口也是 32 位的。CM3 采用了哈佛结构，拥有独立的指令总线和数据总线，可以让取指与数据访问并行不悖。这样一来数据访问不再占用指令总线，从而提升了性能。为实现这个特性，CM3 内部含有好几条总线接口，每条都为自己的应用场合优化过，并且它们可以并行工作。但是另一方面，指令总线和数据总线共享同一个存储器空间。

比较复杂的应用可能需要更多的存储系统功能，为此 CM3 提供一个可选的 MPU，而且在需要的情况下也可以使用外部的 cache。另外在 CM3 中，Both 小端模式和大端模式都是支持的。

STM32 外设丰富，没有 MMU，可以上 μC/OS 等小型系统。ARM9 有 MMU，可以上 Linux。如果想上安卓，至少 ARM11 以上才比较合适。

在从ARM7到ARM9，ARM11的平台转变过程中，有一件事情是非常值得庆幸的，即ARM9，ARM11能够地向后兼容ARM7上的软件；并且开发人员面对的编程模型和架构基础也保持一致。

对于 ARM 嵌入式的初学者，建议用 ARM9 开发板。

首先，从功能上来说，ARM11 要比 ARM9 强一些，但是性能优异并不代表适合初学者。对于初学者来说 ARM11 的有些功能是冗余。其次，学习 ARM9 或者 ARM11 就在所难免学习其所支持的操作系统 Linux（ARM11可以支持Android）。

目前，市面上 ARM9 的开发版的价格要比 ARM11 低很多，而两者都可以运行 Linux 操作系统。并且 ARM9 开发板的资料和教学视频也更多一些。

最后，学习 ARM9，可以按 Linux 应用开发、驱动开发顺序学习。如果想学习 Android 系统开发，可以学完 ARM9 再学习 ARM11 开发板下的安卓系统开发。因为安卓系统就是 Linux 内核+libc库用Java封装而成。

ARM9 是比较成熟的系列，现在很多成熟的产品都是用 ARM9 开发的。这个学好了，以后的系列自学都会容易一些，因为 ARM 系列架构都是一样的。

如果有单片机基础，但是没有玩过 ARM，建议学习 STM32，甚至说没有玩过单片机想入门的也可以选择 STM32，因为 STM32 例程丰富，资源比较多，市面上成熟的开发板也比较多，而且基本价格都在 300 以内。

STM32 芯片命名规则如下，以当前持有的芯片为例：

    STM32F411RET6
    STM32F103CBT6
    STM32F103VCT6
    +++++------------- STM32 意法 Cortex-M/ARMv7 架构芯片
         ++----------- F1 通用芯片，F2，F3，F4 依次增强
           ++--------- 子系列代码，F101 基本型，F102 增加 USB 功能，F103 性能加强型，F105/F107 互联型
             +-------- 芯片引脚数，T - 36pins，C - 48pins，R - 64pins，V - 100pins，Z - 144pins。
              +------- 闪存容量，6 - 32K，8 - 64K，B - 128K，C - 256K，D - 384K，E - 512K。
               +------ 芯片封装，H - BGA，T - LQFP，U - VFQFPN。
                +----- 工作温度，6 - 40~85℃，7 - 40~105℃。

意法半导体（ST）公司出品 STM32F1 系列属于中低端的 32 位 ARM 微控制器，内核是 Cortex-M3。STM32F1 增强型系列时钟频率达到 72MHz，是同类产品中性能最高的产品；基本型时钟频率为 36MHz，以 16 位产品的价格得到比 16 位产品大幅提升的性能，是 32 位产品用户的最佳选择。内置 16K 到 1-Mbyte 的闪存，内置 SRAM 容量 16KB 到 96KB。

主要分类：

- 高性能类别 ，高度的集成和丰富的连接：

    STM32F7：极高性能的MCU类别，支持高级特性； Cortex®-M7 内核；512KB到1MB的Flash；
    STM32F4：支持访问高级特性的高性能DSP和FPU指令； Cortex®-M4 内核；128KB到2MB的Flash；
    STM32F2：性价比极高的中档MCU类别； Cortex®-M3 内核；128KB到1MB的Flash；

- 主流型类别 ，灵活、扩展的MCU，支持极为宽泛的产品应用：

    STM32F3：升级F1系列各级别的先进模拟外设； Cortex®-M4 内核；16KB到512KB的Flash；
    STM32F1：基础系列，基于 Cortex®-M3 内核；16KB到1MB的Flash；
    STM32F0：入门级别的MCU，扩展了8-/16-位处理器的世界； Cortex®-M0 内核；16KB到256KB的Flash；

- 超低功耗类别 ，极小电源开销的产品应用：

    STM32L4：优秀的超低功耗性能，Cortex®-M4 内核，128KB到1MB的Flash；
    STM32L1：通过市场验证并得出答案的32位应用的类别； Cortex®-M3 内核；32KB到512KB的Flash；
    STM32L0：完美符合8-/16-位应用并且超值设计的类别； Cortex®-M0+ 内核；16KB到192KB的Flash。

STM32 通用核心架构和外连功能：

- Communication peripherals: USART, SPI, I²C
- Multiple general‑purpose timers
- Integrated reset and brown‑out warning
- Multiple DMA
- 2x watchdogs Real‑time clock
- Integrated regulator PLL and clock circuit
- External memory interface (FSMC)
- Dual 12‑bit DAC
- Up to 3x 12‑bit ADC (1 µs or 0.5 µs for F‑2 series)
- Main oscillator and 32 kHz oscillator
- Low‑speed and high‑speed internal RC oscillators
- ‑40 to +85 °C and up to 105 °C operating temperature range
- Low voltage 2.0 to 3.6 V or 1.65 to 3.6 V (L‑1 and F‑2 series) 5.0 V tolerant I/Os
- Temperature sensor

STM32 意法芯片产品线概要：

- F-2 series Outstanding performance, up to 120 MHz

    Up to 120 MHz -150 DMIPS with ART Accelerator™
    Highest performance Cortex-M MCU
    Advanced features

    - F‑2 series ‑ STM32F207/217 and STM32F205/215

        120 MHz Cortex‑M3 CPU
        Up to 128‑Kbyte
        SRAM Up to 1‑Mbyte Flash
        2x USB 2.0 OTG FS/HS
        3‑phase MC timer
        2x CAN 2.0B
        SDIO 2x I²S audio Camera IF
        Ethernet IEEE 1588
        Crypto/hash processor and RNG

- F-1 series General purpose

    Five families
    Ethernet USB OTG
    From 16-Kbyte up to 1-Mbyte Flash
    36 pins to 144 pins
    Ultra-low power

    - F‑1 series ‑ Connectivity line STM32F105/STM32F107

        72 MHz Cortex‑M3 CPU
        Up to 64‑Kbyte SRAM
        Up to 256‑Kbyte Flash
        USB 2.0 OTG FS
        3‑phase MC timer
        2x CAN 2.0B
        2x I²S audio
        Ethernet IEEE 1588

    - F‑1 series ‑ Performance line STM32F103

        72 MHz Cortex‑M3 CPU
        Up to 96‑Kbyte SRAM
        Up to 1‑Mbyte Flash
        USB FS device
        3‑phase MC timer
        CAN 2.0B
        SDIO 2x I²S

    - F‑1 series ‑ USB Access line STM32F102

        48 MHz Cortex‑M3 CPU
        Up to 16‑Kbyte SRAM
        Up to 128‑Kbyte Flash
        USB FS device

    - F‑1 series ‑ Access line STM32F101

        36 MHz Cortex‑M3 CPU
        Up to 80‑Kbyte SRAM
        Up to 1‑Mbyte Flash

    - F‑1 series ‑ Value line STM32F100

        24 MHz Cortex‑M3 CPU
        Up to 32‑Kbyte SRAM
        Up to 512‑Kbyte Flash
        3‑phase MC timer
        CEC

- L-1 series EnergyLite™ technology

    Ultra-low power consumption
    Up to 128-Kbyte Flash

    - L‑1 series ‑ STM32L151/2

        32 MHz Cortex‑M3 CPU
        Up to 16‑Kbyte SRAM
        Up to 128‑Kbyte Flash
        USB FS device
        Data EEPROM 4 Kbytes
        LCD 8x40 Comparator
        BOR MSI VScal

Abbreviations:

- FS: Full speed
- HS: High speed
- MC: Motor control
- MSI: Multi‑speed internal oscillator
- RNG: Random number generator
- SDIO: Secure digital input/output
- VScal: Voltage scaling


## // STC 入门级嵌入式芯片

STC 系列的 51 单片机市场占有率最高，参考资料和使用人群众多，作为 51 单片机的代表非常适合入门。

作为对比，STM32 是基于 ARM 公司 Cortex-M3 内核单片机的代表，代表的是功能更丰富的芯片架构。

STC 单片机与 STM32 单片机相比，具备以下优点：

- STC 单片机内部结构比 STM32 单片机简单，便于初学者理解单片机的经典结构。虽然它们都是哈弗计算机结构，但是，STC 单片机的内部结构相对而言，更为简单。

- STC 单片机寄存器数量比 STM32 单片机少了很多很多，只有几十个。STM32 的寄存器有几百个，两者完全不在一个数量级上。由于 MCS-51、 Cortex-M3、 Cortex-M4、 Cortex-A9、 Cortex-A73 或者 MIPS 等等单片机内核及片内外设，都是通过程序操作寄存器实现特定功能的，因此，寄存器数量只有几十个的 STC 单片机，相对而言，更容易让初学者入门学习。

- STC 单片机采用 MCS-51 指令集，其汇编指令一百多条，比 STM32 少得多。相对少的汇编指令集，能够让初学者相对快速的了解运算处理器汇编指令的功能、结构与计算机体系结构之间的关系。

- 最新版本的 STC8 系列单片机具备下载程序方便和自身就是仿真器的特点，节约初学电子产品设计技术的资金投入，学习开发技术方便快捷。STM32 需要单独购买独立的 J-Link 仿真器才可以仿真。

- STC 单片机具备相对简单的经典体系结构，使初学者不必花费太多精力在其硬件本身，可以集中精力掌握好后续任何类型单片机开发的 C 语言基础。同时，也可以掌握电子产品基本的设计思想、经验和技能。

因此，综上所述，根据我们由浅入深和从易到难的学习规律可知：初学电子产品开发技术的工程师和大中专学生，应先学习和掌握采用STC单片机开发电子产品的技能。这是基础技能。

STC 单片机和 STM32 单片机都是采用独立的数据和地址总线访问数据和程序存储器的哈弗计算机结构。在国内应用都非常广泛，资料也非常多，入门需要的信息、资源、工具和软件等等都比较丰富。STC 单片机是基于 MCS-51 内核的 8 位单片机，结构功能简单。而 STM32 是基于 ARM Cortex-M3 内核的 32-bit 单片机，功能更完备。这两种芯片的这些特点和现实，决定了当前一个非常重要的现实：硬件研发工程师有必要全部掌握采用 STC 单片机和 STM32 单片机开发产品的技能。



# /🚩 ARM 开发工具


## // ARM SDT

ARM SDT - Software Development Kit ，是 ARM 公司为方便用户在ARM芯片上进行应用软件开发而推出的一整套集成开发工具。ARM SDT 最新版本是 2.5.2，但 ARM 推出一套新的集成开发工具 ARM ADS 取代 ARM SDT，今后将不会再看到 ARM SDT 的新版本。

ARM SDT 由于价格适中，同时经过长期的推广和普及，目前拥有最广泛的 ARM 软件开发用户群体，也被相当多的ARM公司的第三方开发工具合作伙伴集成在自己的产品中。

ARM SDT 可在 Windows95、98、NT 以及 Solaris 2.5/2.6、HP-UX 10 上运行，支持最高到 ARM9 处理器芯片的开发，包括 StrongARM。

ARM SDT 包括一套完整的应用软件开发工具：

- armcc   ARM 的 C 编译器，具有优化功能，兼容于 ANSI C。
- tcc     THUMB 的 C 编译器，同样具有优化功能，兼容于 ANSI C。
- armasm  支持 ARM 和 THUMB 的汇编器。
- armlink ARM 连接器，连接一个和多个目标文件，最终生成 ELF 格式的可执行映像文件。
- armsd   ARM 和 THUMB 的符号调试器。
- APM Application Project Manageer 图形化工程管理器，负责管理源文件，完成编辑、编译、链接并最终生成
可执行映像文件等功能。

以上命令行开发工具，均被集成在 SDT 的 ADW 和 APM 两个开发工具中，用户无需直接使用命令行工具。

## // ADS

ADS - ARM Developer Suite 是在 1993 年由 Metrowerks 公司开发，是 ARM 处理器下最主要的开发工具。ADS 是全套的实时开发软件工具，包编译器生成的代码密度和执行速度优异。可快速低价地创建 ARM 结构应用。ADS 包括三种调试器，AXD - ARM eXtended Debugger 向下兼容的 ARM Debugger for Windows/ARM Debugger for UNIX 和 ARM Symbolic Debugger 符号调试器。AXD 不仅拥有低版本ARM 调试器的所有功能，还新添了图形用户界面，更方便的视窗管理数据显示，格式化和编辑以及全套的命令行界面。该产品还包括 RealMonitor™，这个工具可以在前台调试的同时断点续存并且在不中断应用的情况下读写内存跟踪调试工具。

ADS 对汇编、C/C++、Java 支持的均很好，是目前最成熟的 ARM 开发工具。很多开发软件如 Keil 就是借用 ADS 的
编译器。


        +------------+    +------------+                 +------------+    +-------------+
        | ASM source |    |   armasm   |                 | Libraries  |    | ELF/DWARF2  |
        |   module   |    |            |                 +-----+------+    | image(.axf) |
        +------------+ >> +------------+ >>+                   |        >> +-------------+ >> +------------+
                                                                             |             +-----V------+                       |  fromelf   |
        +------------+    +------------+   |             |  armlink   |    +-------------+ << +------------+
        |  C source  |    |  armcc -c  |   |          +>>+------------+    | Disassembly |          |
        |   module   |    |  tcc -c    |   |          |                    | Code size   |          |
        +------------+ >> +------------+ >>+          |  +------------+    | Data size   |    +-----V------+
                                                                             |          |  |  fromelf   |    | etc         |    |    ROM     |
        +------------+    +------------+   |          +>>+------------+ >> +-------------+    |   format   |
        | C++ source |    |  armcc -c  |   |          |                                       +------------+
        |   module   |    |  tcc -c    |   |          |  +------------+    +------------+
        +------------+ >> +------------+ >>+          |  |   armar    |    | Libraries  | 
                                                                             |          +>>+------------+ >> +------------+
                                                                             |          |
                                                                        +--V-----------------------+
                                                                        | ELF object file(s) *.o   |
                                                                        | with DWARF2 debug tables |
                                                                        +--------------------------+



## // ARM Realview Developer Suite

RealView Developer Suite 工具是 ARM 公司是推出的新一代 ARM 集成开发工具，简称 RVDS。支持所有 ARM 系列内核，并与众多第三方实时操作系统及工具商合作简化开发流程。开发工具包含以下组件：

- 完全优化的 ISO C/C++ 编译器
- C++ 标准模板库
- 强大的宏编译器
- 支持代码和数据复杂存储器布局的连接器
- 可选 GUI 调试器
- 基于命令行的符号调试器 armsd
- 指令集仿真器
- 生成无格式二进制工具、Intel 32 位和 Motorola 32 位 ROM 映像代 码的指令集模拟工具
- 库创建工具
- 内容丰富的在线文档


## // RealView MDK

RealView MDK 开发工具源自德国 Keil 公司，被全球超过 10 万的嵌入式开发工程师验证和使用，是 ARM 公司目前最新推出的针
对各种嵌入式处理器的软件开发工具。RealView MDK 集成了业内最领先的技术，包括 μVision3 集成开发环境与 ARM RealView 编
译器。支持 ARM7、ARM9 和最新的 Cortex-M3 核处理器，自动配置启动代码，集成 Flash 烧写模块，强大的 Simulation 设备模拟，性
能分析等功能，与 ARM 之前的工具包 ADS 等相比，RealView 编译器的最新版本可将性能改善超过 20%。

RealView MDK 的突出特性:

- 启动代码生成向导，自动引导

        启动代码和系统硬件结合紧密，必须用汇编语言编写，因而成为许多工程师难以跨越多门槛。RealView MDK 的 μVision 3 工具可以帮您自动生成完善的启动代码，并提供图形化的窗口，随您轻松修改。无论对于初学者还是有经验的开发工程师，都能大大节省时间，提高开发效率。

- 软件模拟器，完全脱离硬件的软件开发

        RealView MDK 的设备模拟器可以仿真整个目标硬件，包括快速指令集仿真、外部信号和 I/O 仿真、中断过程仿真、片内所有外围设备仿真等。开发工程师在无硬件的情况下即可开始软件开发和调试，使软硬件开发同步进行，大大缩短开发周期。而一般的 ARM 开发工具仅提供指令集模拟器，只能支持 ARM 内核模拟调试。

- 性能分析器，看得更远、看得更细、看得更清

        RealView MDK 的性能分析器好比哈雷望远镜，让您看得更远和更准，它辅助您查看代码覆盖情况，程序运行时间，函数调用次数等高端控制功能，指导您轻松的进行代码优化，成为嵌入式开发高手。通常这些功能只有价值数千美元的昂贵的 Trace 工具才能提供。

- RealView 编译器，代码更小，性能更高

        RealView MDK 的 RealView 编译器与 ADS 1.2 比较：
        代码密度：比 ADS 1.2 编译的代码尺寸小 10%；
        代码性能：比 ADS 1.2 编译的代码性能高 20%。
        备配备 ULINK2 仿真器+ Flash 编程现 模块，轻松实现 Flash 烧写

        RealView MDK无需寻求第三方编程软件与硬件支持，通过配套的ULINK2仿真器与Flash编程工具，轻松实现CPU片内 FLASH、外扩 FLASH 烧写，并支持用户自行添加 FLASH 编程算法；而且能支持 FLASH 整片删除、扇区删除、编程前自动删除以及编程后自动校验等功能，轻松方便。

## // MDK-ARM

Arm Keil 开发的 MDK - Microcontroller Development Kit，MDK 已经整合到 Arm Development Studio。

MDK-ARM 也称 KEIL MDK-ARM、KEIL ARM、KEIL MDK、Realview MDK、I-MDK、uVision5 等，系为同一产品，老版本为 uVision4 和 uVision3。

MDK-ARM 软件为基于 Cortex-M、Cortex-R4、ARM7、ARM9 处理器设备提供了一个完整的开发环境。 MDK-ARM 专为微控制器应用而设计，而且功能强大，能够满足大多数苛刻的嵌入式应用。

MDK-ARM 有四个可用版本，分别是 MDK-Lite（免费评估版）、MDK-Essential、MDK-Plus、MDK-Professional。所有版本均提供一个完善的 C/C++ 开发环境，其中 MDK-Professional 还包含大量的中间库。

与 Keil MDK4 及之前版本不同，Keil MDK5 分成 MDK Core 和 Software Packs 两部分。MDK Core 主要包含 uVision 5 IDE 集成开发环境和 ARM Compiler 5。Software Packs 则可以在不更换 MDK Core 的情况下，单独管理（下载、更新、移除）设备支持包和中间件更新包。 

Keil MDK 的 ARM C/C++ Compiler 通过 TüV Certified 认证，完全符合 IEC 61508-3 标准的 T3 类开发工具要求。目前，Compiler 编译器的 Safety Package 仅包含在 MDK 专业版中。

1、完美支持Cortex-M、Cortex-R4、ARM7和ARM9系列器件。
2、行业领先的ARM C/C++编译工具链
3、确定的Keil RTX ，小封装实时操作系统(带源码)
4、μVision5 IDE集成开发环境，调试器和仿真环境
5、TCP/IP网络套件提供多种的协议和各种应用
6、提供带标准驱动类的USB 设备和USB 主机栈
7、为带图形用户接口的嵌入式系统提供了完善的GUI库支持
8、ULINKpro可实时分析运行中的应用程序，且能记录Cortex-M指令的每一次执行
9、关于程序运行的完整代码覆盖率信息
10、执行分析工具和性能分析器可使程序得到最优化
11、大量的项目例程帮助你快速熟悉MDK-ARM强大的内置特征
12、符合CMSIS (Cortex微控制器软件接口标准)

MDK 功能特点：
- 完美支持Cortex-M V8、Cortex-M、Cortex-A、Cortex-R4、ARM7和ARM9系列器件。
- 可使用在安全性较高要求的应用中和工程需要编译器长期支持的环境
- 业行领先的 ARM C/C++ 编译工具链
- 提供前期虚拟器模型，满足新架构下软件验证
- 稳定的 Keil RTX ，小封装 RTOS 实时操作系统（带源码）
- μVision 5 IDE 集成开发环境，调试器和仿真环境
- TCP/IP 网络套件提供多种的协议和各种应用
- 保证 IoT 应用安全连接到互联网需要
- 提供带标准驱动类的 USB 设备和 USB 主机栈
- 为带图形用户接口的嵌入式系统提供了完善的GUI库支持
- ULINKpro 可实时分析运行中的应用程序，且能记录 Cortex-M 指令的每一次执行
- 关于程序运行的完整代码覆盖率信息
- 执行分析工具和性能分析器可使程序得到最优化
- 大量的项目例程帮助你快速熟悉 MDK-ARM 强大的内置功能 
- DS-MDK Streamline 实现 Cortex-A/Cortex-M 异构下的性能分析
- 符合 CMSIS (Cortex 微控制器软件接口标准)

Keil uVision 调试器可以帮助用户准确地调试 ARM 器件的片内外围功能，如 I2C、 CAN、UART、SPI、中断、I/O口、A/D 或 D/A 转换器以及 PWM 模块等功能。ULINK USB-JTAG 转换器将 PC 机的 USB 端口与用户的目标硬件通过 JTAG 或 OCD 相连，使用户可在目标硬件上调试代码。通过使用 Keil μVision IDE、调试器和 ULINK USB-JTAG 转换器，用户可以很方便地编辑、下载和在实际的目标硬件上测试嵌入的程序。

支持 Philips、Samsung、 Atmel、 Analog Devices、 Sharp、 ST 等众多厂商 ARM7 内核的 ARM 微控制器。

高效工程管理的uVision3集成开发环境
* Project/Target/Group/File 的重叠管理模式，并可逐级设置；
* 高度智能彩色语法显示；
* 支持编辑状态的断点设置并在仿真状态下有效。

高速ARM指令/外设模拟器
* 高效模拟算法缩短大型软件的模拟时间；
* 软件模拟进程中允许建立外部输入信号；
* 独特的工具窗口，可快速查看寄存器和方便配置外设；
* 支持C调试描述语言，可建立与实际硬件高度吻合的仿真平台；
* 支持简单/条件/逻辑表达式/存储区读写/地址范围等断点。

多种流行编译工具选择
* Keil高效率C编译器；
* ARM公司的ADS/RealView 编译器；
* GNU GCC编译器；
* 后续厂商的编译器。


## // ARM Development Studio

Arm Keil 又双推出了 ARM® Development Studio 5 (DS-5™) 作为高端核心开发平台，主要面对 Cortex-A 系列芯片 + Linux 的大型系统开发：

- DS-5 Debugger, covering all stages of product development 
- ARM Compiler 5.03u3 for embedded and bare-metal code 
- Linaro GCC Toolchain 2013.03 for Linux applications and Linux kernel
- ARM Streamline™ Performance Analyzer for various operating systems, including Linux, Android and RTX
- Eclipse IDE, source code editor and project manager 
- Fixed Virtual Platforms (FVP) for Cortex™-A8 and quad-core Cortex-A9 processors 
- Example projects and documentation 

DS-5 是 替代 ARM Realview Developer Suite 的工具，基于 Eclipse 的 IDE/debugger, C/C++ Compiler, CMSIS, performance analyzer, graphics debugger 等等。

以下都是 Arm Keil 还在维护开发工具：

- Arm Development Tools
- C166 Development Tools
- C51 Development Tools
- C251 Development Tools



## // IAR EWARM

IAR Systems 公司的 Embedded Workbench for ARM 是为 ARM 微处理器开发的一个集成开发环境，简称 EWARM。比较其他的开发环境，EWARM 具有入门容易、使用方便和代码紧凑等特点。

IAR Systems 公司推出的 IAR Embedded Workbench for ARM version 4.30 提供的是 32k 代码限制、但没有时间限制的 Kickstart 版，目前最新版本是 8.40.1。

EWARM 中包含一个全软件的模拟程序 simulator。用户不需要任何硬件支持就可以模拟各种ARM内核、外部设备甚至中断的软件运行环境。从中可以了解和评估 IAR EWARM 的功能和使用方法。

IAR EWARM 的主要特点如下：

- IAR ANSI C/C++ Compiler for ARM (iccarm)
- IAR Assembler for ARM (iasmarm)
- IAR ELF Linker for ARM (ilinkarm)
- IAR XAR 和 XLIB 建库程序和 IAR DLIB C/C++ 运行库
- 功能强大的编辑器
- 项目管理器
- IAR C-SPY 先进的高级语言调试器


## // SW4STM32
openstm32 HomePage: https://www.openstm32.org/
ac6-tools website: https://www.ac6-tools.com/downloads/SW4STM32/

SW4STM32 - System Workbench for STM32 官方提供的免费 IDE，基于 Eclipse， 支持 Windows, Linux and OS X。

Key Features

- Comprehensive support for STM32 microcontrollers, STM32 Nucleo boards, Discovery kits and Evaluation boards, as well as STM32 firmware (Standard Peripheral library or STM32Cube HAL)
- GCC C/C++ compiler
- GDB-based debugger
- Eclipse IDE with team-work management
- Compatible with Eclipse plug-ins
- ST-LINK support
- No code size limit
- Multiple OS support: Windows® , Linux and OS X®



## // TrueSTUDIO & STM32CubeIDE
Atollic TrueStudio: https://atollic.com/truestudio/
STM32CubeIDE: https://www.st.com/zh/development-tools/stm32cubeide.html

TrueSTUDIO 开发工具基于 Eclipse 曾经是付费的，现在是免费的。

主要特性

- Built on Eclipse, CDT, GCC and GDB
- Project Management
- Project wizards
        - Importers
        - Configuration tools
        - CMSIS-PACK
- Editor
        - Advanced code editing
        - Navigation, refactoring, styling and structure visualization
- Compiler and Build tools
- Highly optimized C/C++ compiler
- Assembler, linker and utilities
- Memory and stack analyzers to find bugs that cannot be identified studying the source code
- RTOS-aware debugger with advanced trace, visualization and analysis capabilities
- ST-LINK and J-LINK support
- Client for bug and issue tracking systems such as Bugzilla, Trac, Mantis
- Version Control system clients for Subversion (SVN), Git and CVS
- Source code review
- Technical support

最新的 STM32CubeIDE 整合了 TrueSTUDIO + STM32CubeMX，它构成一个先进的 C/C++ 跨平台开发平台，非常值得推荐使用。STM32CubeMX 是 STM32Cube Firmware 固件包的配置工具，通过 STM32CubeMX 很方便使用微控制器的 IP 配置，代码生成，代码编译和调试功能。

STM32CubeIDE 是一个先进的 C/C++ 开发平台，具有 STM32 微控制器的 IP - Integreated Peripheral 配置，代码生成，代码编译和调试功能。它基于 Eclipse™/ CDT 框架和用于开发的 GCC 工具链，以及用于调试的 GDB。它允许集成数百个现有插件，完成 Eclipse™ IDE 的功能。

主要特点：

1.集成 STM32CubeMX：
        - STM32微控制器选择
        - 引脚分配，时钟，IP和中间件配置
        - 项目创建和初始化代码的生成
2.基于 Eclipse™/CDT，支持 Eclipse™ 插件，GNU C/C++ 中 ARM® 工具链和 GDB 调试器。
3.其他高级调试功能：
        - CPU 内核，IP 寄存器和内存视图
        - 实时变量观看视图
        - 系统分析和实时跟踪 SWV
        - CPU 故障分析工具
4.支持 ST-LINK 和 J-Link 调试探针
5.从 TrueSTUDIO® 和 AC6 导入项目
6.跨平台支持操作系统 Windows®，Linux® 和 MacOS®

3STM32CubeIDE 可以在官网根据自己电脑操作系统下载，官网下载需填写相关信息，或需注册账号，若觉得麻烦，这里提供百度网盘下载：

        https://pan.baidu.com/s/1jD51VgCT6y13dyMcI083vA#提取码q982

工程文件类型说明：

- .ioc      STM32CubeMX 工程
- .project  TrueStudio 工程
- .cproject STM32CubeIDE 工程

官方网站可以下载对应芯片的固件包，可以搜索 STM32CubeF0、 STM32CubeF1、 STM32CubeF2、 STM32CubeF3、 STM32CubeF4 等，F4 系列芯片的固件最新版本号是 1.24.0 提供升级补丁 1.24.1。

        Patch-CubeF0    Patch V1.10.1, for STM32CubeF0 V1.10.0  1.10.1  
        STM32CubeF0 STM32Cube MCU Package for STM32F0 series    1.11.0

        STM32CubeF1 STM32Cube MCU Package for STM32F1 series    1.8.0   

        STM32CubeF3 STM32Cube MCU Package for STM32F3 series    1.11.0

        Patch-CubeF4    Patch V1.24.1, for STM32CubeF4 V1.24.0  1.24.2  
        STM32CubeF4 STM32Cube MCU Package for STM32F4 series    1.24.0

        STM32CubeF7 STM32Cube MCU Package for STM32F7 series    1.15.0

它基于 ECLIPSE™/ CDT 框架和用于开发的 GCC 工具链，以及用于调试的 GDB。它允许集成数百个现有插件，完全 ECLIPSE™IDE 的功能。

编译项目时默认输出 elf 格式，可以使用 gcc 工具转换，或修改项目配置：

        arm-none-eabi-objcopy test.elf -O binary test.bin

在项目属性窗口中选择 C/C++ Build - Settings - Tool Setings - MCU Post build outputs，勾选 Convert to binary file (-O binary)，这相当于执行上面的转换命令。编译好的程序通过 STM32 ST-Link 工具下载到板子上运行。

调试器通过 Run - Debug Configurations 菜单配置，如果有 ST-Link 调试器，这在左侧列表中选择最下面的 STM32 Cortext-M C/C++ Application 双击创建调试配置，右侧调试器 Debugger 配置中可以指定 GDB 连接设置，和调试探头 ST-Link GDB Server，SWD 接口，使用特定的 ST-Link 序列号，并通过查找确定本机连接的调试器，可以通过 ST-LINK_CLI 工具验证调试器序列号：

        ST-LINK_CLI -List

进入调试后会终断执行并提示：

        Do you want to switch to this perspective now?

点击 Switch 切换到程序的中断点开始调试。


STM32CubeIDE 主要特性：

- Integration of STM32CubeMX that provides services for:
        - STM32 microcontroller and microprocessor selection
        - Pinout, clock, peripheral, and middleware configuration
        - Project creation and generation of the initialization code
- Based on ECLIPSE™/CDT, with support of ECLIPSE™ add-ons, GNU C/C++ for Arm® toolchain and GDB debugger
- Additional advanced debug features including:
        - CPU core, peripheral register, and memory views
        - Live variable watch view
        - System analysis and real-time tracing (SWV)
        - CPU fault analysis tool
- Support of ST-LINK (STMicroelectronics) and J-Link (SEGGER) debug probes
- Import project from Atollic® TrueSTUDIO® and AC6 System Workbench for STM32 (SW4STM32)
- Multi-OS support: Windows®, Linux®, and macOS®, 64-bit versions only


STM32CubeMx 软件是 ST 公司为 STM32 系列单片机快速建立工程，并快速初始化使用到的外设、GPIO等，大大缩短了我们的开发时间。同时，软件不仅能配置 STM32 外设，还能进行第三方软件系统的配置，例如FreeRtos、FAT32、LWIP等等，而且还有一个功能，就是可以用它进行功耗预估，还有，这款软件可以输出PDF、TXT文档，显示你工程里面的GPIO等外设的配置信息，供你进行原理图设计等。总之，这款软件的推出，方便了开发工程师，也使得STM32又圈了一大波粉。

STM32CubeMx 生成项目骨架式需要用到芯片的固件包，可以手动下载进行安装如 Nucleo-F411RE 使用的 en.STM32Cube_FW_F4_V1.24.0.zip，解压到固件库到安装目录，默认位置：

        C:\Users\%NAME%\STM32Cube\Repository

此目录可以在 Windows -> Preferences -> STM32Cube -> Firmware Update 里面指定，可以修改一个短一点的路径：

        C:/STM32Cube/



## // GNU

GNU 是 GNU's Not Unix 的递归缩写，Stallman 宣布 GNU 应当发音为 Guh-NOO 以避免与 new 这个单词混淆，Gnu 在英文中
原意为非洲牛羚，发音与 new 相同。

1985 年 Richard Stallman 又创立了自由软件基金会 Free Software Foundation 来为 GNU 计划提供技术、法律以及财政支持。尽管 GNU 计划大部分时候是由个人自愿无偿贡献，但 FSF 有时还是会聘请程序员帮助编写。当 GNU 计划开始逐渐获得成功时，一些商业公司开始介入开发和技术支持。当中最著名的就是之后被 Red Hat 兼并的 Cygnus Solutions。

到了 1990 年，GNU计划已经开发出的软件包括了一个功能强大的文字编辑器 Emacs，C 语言编译器 GCC，以及大部分 UNIX 系统的程序库和工具。唯一依然没有完成的重要组件就是操作系统的内核，称为 Hurd。

1991 年 Linus Torvalds 编写出了与 UNIX 兼容的 Linux 操作系统内核并在 GPL 条款下发布。Linux 之后在网上广泛流传，许多程序员参与了开发与修改。1992 年 Linux 与其他 GNU 软件结合，完全自由的操作系统正式诞生。该操作系统往往被称为 GNU/Linux 或简称 Linux。尽管如此，GNU 计划自己的内核 Hurd 依然在开发中，目前已经发布Beta版本。

许多 UNIX 系统上也安装了 GNU 软件，因为 GNU 软件的质量比之前 UNIX 的软件还要好。GNU 工具还被广泛地移植到 Windows 和 Mac OS 上。

GNU 为嵌入式开发提供丰富的工具，GNU Arm Embedded Toolchain(gcc-arm-none-eabi) 编译套件就是一个开源的 ARM 开发工具链，适用于 Arm Cortex-M 和 Coretex-R 系列处理器，包括 GNU 编译器 GCC，以及 GDB，可用于 Windows，Linux，MacOS 上的交叉编译。 EABI - Embedded Application Binary Interface 即嵌入式应用二进制接口标准。



## // 嵌入式系统

与 PC 机开发不同，基于 MCU 的开发通常要涉及嵌入操作系统层面，因为 MCU 的硬件资源限制，嵌入式系统相对 PC 的要简化，随着硬件性能的提升，嵌入式操作系统也有原来的精简系统如 μC/OS 向更功能完善的操作系统发展。

以 STM32 系列芯片为例，外设丰富，没有 MMU，可以上 μC/OS 等小型系统，基本式 Cortex-M3 架构，STM32F4 系列属于 Cortex-M4，Cortext-M 系列虽然比 ARM11 要新但是它目标应用方向小规模系统。ARM9 架构芯片有 MMU，可以上 Linux，如果想上安卓系统，则至少 ARM11 以上才比较合适，最新的 Cortex-A 架构就是替代 ARM9/ARM11 干这些事的。Cortex-A 下可替代 ARM11，上可替代 Intel、AMD，现代是 Arm Linux 组合的时代，Wintel 已经成为过去式，Windows 系统也要向 ARM 靠拢。

学习嵌入式开发核心不在于掌握多少种 MUC，关键是将技术快速转换成产品，转换成系统架构平台的能力，只有如此才能把握住市场需求，成为不可替代一部分，否则掌握得再多也不能保证将来一天像 Intel 一样被人替代，正如柯达直至破产那天生成出来的胶片都是最好的！

嵌入式操作系统入门首选小型实时系统，如 μC/OS-II、FreeRTOS，涉及的系统模块少，降低了入门难度，当然能力足够，也可选择更强大的 embOS、VxWorks、μCLinux 这些系统。当嵌入式系统上了 Linux 后，涉及的问题就不简单了，从 ARM 汇编、Bootloader、Kernel、Driver，再到应用程序开发，这就是整个完善的操作系统工程，与小型嵌入式系统处理问题的角度完全不同了。

μC/OS-II 是一种基于优先级的抢占式多任务实时操作系统，包含了实时内核、任务管理、时间管理、任务间通信同步（信号量，邮箱，消息、队列）和内存管理等功能。它可以使各个任务独立工作，互不干涉，很容易实现准时而且无误执行，使实时应用程序的设计和扩展变得容易，使应用程序的设计过程大为减化。

学习一个嵌入式系统的最好方式是通过一个行业应用取研究，如无人机的嵌入式应用，配合学习 ChibiOS、NuttX 等系统。

早期运行嵌入系统的 MCU 并没有 MMU - Memory Management Unit 内存管理单元，只能运行一些很简单的单任务操作系统，或者更简单的控制程序。在这种情况下，系统无法运行复杂的应用程序，或者效率很低，而且，所有的应用程序需要重写，并要求程序员十分了解硬件特性。这些都阻碍了应用于这类 CPU 之上的嵌入式产品开发的速度。μCLinux 的诞生，这一切都改变了，它是一个完全符合 GNU/GPL 公约的项目，完全开放代码，现由 Lineo 公司支持维护。英文单词中 μ 表示 Micro 小的意思，C 表示 Control 控制的意思，所以μCLinux 就是 Micro Control Linux 微控制领域中的 Linux 系统。它专门针对没有 MMU 的 CPU，并专为嵌入式系统做了许多小型化的工作。

μClinux 同标准 Linux 的最大区别就在于内存管理，标准 Linux 是针对有内存管理单元的处理器设计的。虚拟地址被送到内存管理单元 MMU 映射为物理地址，采用分页的方式来载入进程，实际存储器分割为相同大小的页面。

μClinux 针对没有 MMU 的处理器设计，不能使用处理器的虚拟内存管理技术，但 μClinux 仍然沿用标准 Linux 的分页内存管理结构，系统在启动时把实际存储器进行分页，实际上采用的是实存储器管理策略。μClinux 系统对于内存的访问不需要经过MMU，而是直接送到地址线上输出，所有程序中访问的地址都是实际的物理地址。操作系统对内存空间也失去了保护能力，这实际上是很多嵌入式系统的特点，各个进程实际上共享一个运行空间，没有独立的地址转换表。


这里介绍一下 VxWorks 这个系统，VxWorks 是美国 WRS - Wind River System 风河公司推出的一个实时操作系统。Tornado 是 WRS 公司推出的一套实时操作系统开发环境，类似 Microsoft Visual C，但是提供了更丰富的调试、防真环境和工具。

VxWorks 操作系统内核（wind）有以下部件组成：
- 多任务调度（采用基于优先级抢占方式，同时支持同优先级任务间的分时间片调度）
- 任务间的同步
- 进程间通信机制
- 中断处理
- 定时器和内存管理机制
- I/O 系统

VxWorks 提供了一个快速灵活的与 ANSI C 兼容的 I/O 系统，包括 UNIX 标准的 Basic I/O（creat(), remove(), open(),close(),read(), write(), and ioctl().），Buffer I/O (fopen(), fclose(), fread(), fwrite(), getc(), putc()) 以及POSIX 标准的异步 I/O。

VxWorks 包括以下驱动程序：网络驱动、管道驱动、RAM盘驱动、SCSI驱动、键盘驱动、显示驱动、磁盘驱动、并口驱动等。

VxWorks 提供了一个实用例程的扩展集，包括中断处理、看门狗定时器、消息登录、内存分配、字符扫描、线缓冲和环缓冲管理、链表管理和 ANSIC标准。 在 Tornado 开发系统中，开发工具是驻留在主机上的。但是也可以根据需要将基于目标机的 Shell 和装载卸载模块加入 VxWorks。

嵌入式 VxWorks 系统的主要应用领域主要有以下几方面：
- 数据网络：如：以太网交换机、路由器、远程接入服务器等
- 远程通讯：如：电信用的专用分组交换机和自动呼叫分配器，蜂窝电话系统等
- 医疗设备：如：放射理疗设备
- 消费电子：如：个人数字助理等
- 交通运输：如：导航系统、高速火车控制系统等
- 工业：如：机器人
- 航空航天：如：卫星跟踪系统
- 多媒体：如：电视会议设备
- 计算机外围设备：如：X终端、I/O 系统等

总之，VxWorks的系统结构是一个相当小的微内核的层次结构。内核仅提供多任务环境、进程间通信和同步功能。这些功能模块足够支持 VxWorks 在较高层次所提供的丰富的性能的要求。

VxWorks 6.0 版本新增功能：

风河通用平台 VxWorks 版（GPP）是所有设备软件应用程序的首要基础平台。此通用平台基于全球应用最广泛的运行时操作系统 VxWorks 而构建，最新版本 VxWorks 6.1 中的各运行时组件可向后兼容 VxWorks 的早期版本。此最新版本包含了增强的内存保护、容错管理，并支持最新的网络和安全协议以及设备与企业间的连通性。

通用平台组合了最为严格和确定性的实时操作系统，其产品完全集成了现有的产品开发解决方案，从而能够满足贵企业的各种苛刻需求。它无缝集成了业界标准的 RTOS（VxWorks 6.1）、功能强大的开发套件 Workbench 2.3、网络和安全协议、用于工程人员快速启动项目的培训以及迅速扩展您开发团队综合技能的各种专业服务。



# /🚩 STM32 Nucleo-64 Armv7-M4 Board
- https://www.st.com/zh/evaluation-tools/nucleo-f411re.html
- https://docs.zephyrproject.org/latest/boards/st/nucleo_f411re/doc/index.html
- STM32 Nucleo-64 F411RE Reference Manual https://www.st.com/resource/en/user_manual/um1724-stm32-nucleo64-boards-mb1136-stmicroelectronics.pdf

Nucleo 是意法半导体官方自造的评估板卡系列，以手上的 STM32 Nucleo-64 for STM32F411RE 本为例，
简称 Nucleo-F411RE，这是一个 100MHz 主频的 Context-M4 128KB SRAM/512KB Flash MCU，
官方指导售价 $13，Nucleo-64 是指芯片的管脚数量为 64pins，还有 Nucleo-32 和 Nucleo-144 两种板卡。
STM32 Nucleo-64 板卡两侧提供的 CN5、CN6、CN8、CN9 杜邦线母口插槽支持 Arduino™ Uno V3 及 
CN6、CN7、CN10 提供的 Pin Header 排针支持 ST morpho 连接方便做功能拓展。
集成了 ST-LINK 2.1 debugger/programmer，还在 STM32Cube MCU Package 中提供示例程序。

板卡 PCB 电路设计参考官方的 User manual STM32 Nucleo-64 boards (MB1136)，板卡分主要为两部分，
小块的部分是 STM32F103CBT6 实现的 ST-LINK 2.1 调试器，自带虚拟串口和 Mass Stoage，
通过串行调试接口 SWD - serial wire debugging interfaces 连接到主控芯片。
主板部分是 STM32F411RET6U，供用户编程评估使用。

ST Nucleo F411RE Overview

The Nucleo F411RE board features an ARM Cortex-M4 based STM32F411RE MCU
with a wide range of connectivity support and configurations. Here are
some highlights of the Nucleo F411RE board:

- STM32 microcontroller in **QFP64 package**
- Two types of extension resources:

  - **Arduino Uno V3** connectivity
  - **ST morpho extension** pin headers for full access to all STM32 I/Os

- **On-board ST-LINK/V2-1 debugger/programmer with SWD connector**
- Flexible board power supply:

  - USB VBUS or external source(3.3V, 5V, 7 - 12V)
  - Power management access point

- Three LEDs: USB communication (LD1), user LED (LD2), power LED (LD3)
- Two push-buttons: USER and RESET

Hardware
---------------

Nucleo F411RE provides the following hardware components:

- STM32F411RET6 in LQFP64 package
- ARM® 32-bit Cortex®-M4 CPU with FPU
- 100 MHz max CPU frequency
- VDD from 1.7 V to 3.6 V
- 512 KB Flash
- 128 KB SRAM
- GPIO with external interrupt capability
- 12-bit ADC with 16 channels, with FIFO and burst support
- RTC
- 8 General purpose timers
- 2 watchdog timers (independent and window)
- SysTick timer
- USART/UART (3)
- I²C (3)
- SPI/I2S (5)
- SDIO
- USB 2.0 OTG FS
- DMA Controller
- CRC calculation unit


•   Common features
–   STM32 microcontroller in LQFP64 package
–   1 user LED shared with Arduino™
–   1 user and 1 reset push-buttons
–   32.768 kHz crystal oscillator
–   Board connectors:
    - ◦ Arduino™ Uno V3 expansion connector
    - ◦ ST morpho extension pin headers for full access to all STM32 I/Os
–   Flexible power-supply options: ST-LINK, USB V BUS or external sources
–   On-board ST-LINK debugger/programmer with USB re-enumeration capability: 
    mass storage, Virtual COM port and debug port
–   Comprehensive free software libraries and examples available with the STM32Cube MCU Package
–   Support of a wide choice of Integrated Development Environments (IDEs) 
    including IAR™ , Keil® and GCC-based IDEs

•   Board-specific features
–   External SMPS to generate V core logic supply
–   24 MHz HSE
–   Board connectors:
    - ◦ External SMPS experimentation dedicated connector
    - ◦ Micro-AB or Mini-AB USB connector for the ST-LINK
    - ◦ MIPI® debug connector
–   Arm® Mbed Enabled™ compliant

The Zephyr nucleo_f411re board configuration supports the following hardware features:

    +-----------+------------+-------------------------------------+
    | Interface | Controller | Driver/Component                    |
    +===========+============+=====================================+
    | NVIC      | on-chip    | nested vector interrupt controller  |
    | UART      | on-chip    | serial port                         |
    | PINMUX    | on-chip    | pinmux                              |
    | GPIO      | on-chip    | gpio                                |
    | PWM       | on-chip    | pwm                                 |
    | I2C       | on-chip    | i2c                                 |
    | I2S       | on-chip    | i2s                                 |
    | SPI       | on-chip    | spi                                 |
    +-----------+------------+-------------------------------------+

Other hardware features are not yet supported on this Zephyr port.

The default configuration can be found in the defconfig file:
``boards/arm/nucleo_f411re/nucleo_f411re_defconfig``

Nucleo F411RE Board has 8 GPIO controllers. These controllers are responsible for pin muxing,
input/output, pull-up, etc.

System Clock

Nucleo F411RE System Clock could be driven by internal or external oscillator,
as well as main PLL clock. By default System clock is driven by PLL clock at 84MHz,
driven by 8MHz high speed external clock.

Serial Port

Nucleo F411RE board has 3 UARTs. The Zephyr console output is assigned to UART2.
Default settings are 115200 8N1.


Default Zephyr Peripheral Mapping:
----------------------------------

- UART_1 TX/RX : PB6/PB7
- UART_2 TX/RX : PA2/PA3 (ST-Link Virtual Port Com)
- I2C1 SCL/SDA : PB8/PB9 (Arduino I2C)
- I2C2 SCL/SDA : PB10/PB3
- I2C1 SCL/SDA : PA8/B4
- SPI1 CS/SCK/MISO/MOSI : PA4/PA5/PA6/PA7 (Arduino SPI)
- I2S1 SCK/SD : PA5/PA7 (Arduino I2S)
- USER_PB   : PC13
- LD2       : PA5


ST morpho connector on NUCLEO-F410RB
------------------------------------

Table 33. ST morpho connector on NUCLEO-F410RB

<pre>   
| CN7 odd pins    | CN7 even pins        | CN10 odd pins | CN10 even pins |
|-----|-----------|----------------|-----|-----|---------|---------|------|
| Pin | Name      | Name           | Pin | Pin | Name    | Name    | Pin  |
| 1   | PC10      | PC11           | 2   | 1   | PC9     | PC8     | 2    |
| 3   | PC12      | PB11           | 4   | 3   | PB8     | PC6     | 4    |
| 5   | VDD       | E5V            | 6   | 5   | PB9     | PC5     | 6    |
| 7   | BOOT0 (1) | GND            | 8   | 7   | AVDD    | U5V (2) | 8    |
| 9   | -         | -              | 10  | 9   | GND     | -       | 10   |
| 11  | -         | IOREF          | 12  | 11  | PA5     | PA12    | 12   |
| 13  | PA13 (3)  | RESET          | 14  | 13  | PA6     | PA11    | 14   |
| 15  | PA14 (3)  | +3.3V          | 16  | 15  | PA7     | PB12    | 16   |
| 17  | PA15      | +5V            | 18  | 17  | PB6     | -       | 18   |
| 19  | GND       | GND            | 20  | 19  | PC7     | GND     | 20   |
| 21  | PB7       | GND            | 22  | 21  | PA9     | PB2     | 22   |
| 23  | PC13      | VIN            | 24  | 23  | PA8     | PB1     | 24   |
| 25  | PC14      | -              | 26  | 25  | PB10    | PB15    | 26   |
| 27  | PC15      | PA0            | 28  | 27  | PB4     | PB14    | 28   |
| 29  | PH0       | PA1            | 30  | 29  | PB5     | PB13    | 30   |
| 31  | PH1       | PA4            | 32  | 31  | PB3     | AGND    | 32   |
| 33  | VBAT      | PB0            | 34  | 33  | PA10    | PC4     | 34   |
| 35  | PC2       | PC1 or PB9 (4) | 36  | 35  | PA2     | -       | 36   |
| 37  | PC3       | PC0 or PB8 (4) | 38  | 37  | PA3     | -       | 38   |
</pre>

1.  The default state of BOOT0 is LOW. It can be set to HIGH 
    when a jumper is on pin5-7 of CN7.
2.  U5V is 5 V power from the ST-LINKV2-1 USB connector and it rises before +5V.
3.  PA13 and PA14 share with SWD signals connected to ST-LINK/V2-1, 
    it is not recommended to use them as IO pins if the ST-LINK part is not cut.
4.  Refer to Table 10: Solder bridges for details.


OnBoard ST-LINK
---------------

板载的 ST-LINK/V2-1 也就提供了 SWD 接口支持，但不妨碍将它当做一个 ST-LINK 编程器来使用。
The embedded ST-LINK/V2-1 only supports SWD interface for STM32 devices.

STM32 Nucleo-64 的用户手册 [Table 5] 说明了 SWD 接口的定义。

如果 CN2 的 1、2 和 3、4 分别短接，就是将调试器连接口 CN4 连接到核心板,：

- SWCLK 依次经过 SB3、CN2、SB5 到达 SWD 接口
- SWDIO 依次通过 SB7、CN2、SB9 到达 SWD 接口，背面 SW3、SW5、SW7、SW9 通过电阻桥连接。

按以下步骤操作就可以作为一个完整的 ST-LINK 编程器来使用，看官方手册说很容易的：

- 第一步: 移除 SB12，可选，如果你需要用到单片机的 NRST 引脚的话就需要移除此短路电阻。
- 第二步: 移除 CN2 短路帽，即标记 ST-LINK 那组跳线去掉。
- 第三步: 将目标芯片对应得引脚接在 CN4 对应的引脚，一般接上 1、2、3、4 即 VDD、SWCLK、GND、SWDIO 就能给目标芯片下载程序了。

> 6.2.3 Using the ST-LINK/V2-1 to program and debug the STM32 on board
>
> To program the STM32 on the board, plug in the two jumpers on CN2, as shown in red in
> Figure 8. Do not use the CN4 connector as this could disturb the communication with the
>
> STM32 microcontroller of the STM32 Nucleo board.
> Figure 8. Connecting the STM32 Nucleo board to program the on-board STM32
>
> 6.2.4 Using ST-LINK/V2-1 to program and debug an external
> STM32 application
>
> It is very easy to use the ST-LINK/V2-1 to program the STM32 on an external application.
> Simply remove the two jumpers from CN2 as illustrated in Figure 9: Using ST-LINK/V2-1 to
> program the STM32 on an external application, and connect the application to the CN4
> debug connector according to Table 5.
>
> Note: SB12 NRST (target STM32 RESET) must be OFF if CN4 pin 5 is used in the external
> application.

NUCLEO 系列板子的特点就在于它简单，但是需要的基本功能都预留了，这就是至繁归于简。巴掌大小的板子，
集成了性能优良的 ST-Link 编程调试器，集成了 USB-to-RS232 功能，
还提供了串口接线柱。另外集成了两种扩展接口 Arduino 外扩接口和特有的闪蝶 Morpho 全功能接口。
对于基础和入门的学习使用板载的一个按键和一个可编程 LED，以及配合板载的串口就可以实现入门的学习。
特别设计了断裂线的 NUCLEO-64 开发板还可以把 ST-Link 部分从核心板分离开，
作为一个编程调试器或 USB 转串口适配器使用。值得一提的是 NUCLEO 的定位就是学生入门级，
首先该开发板价格十分便宜，十美元左右，淘宝售价均不足百元，就可以买到一块 100MHz 主频的的精简开发板。 

在本地开发，推荐采用 SW4STM32、EWARM、Keil MDK，官方示例自带这几个开发工具的工程文件，
而官方的 STM32CubeIDE 整合了 STM32CubeMX 自动配置工具，可以作为 SW4STM32 的替代品，非常好用而且免费。

如果使用 Keil 集成开发环境，建议单独去 Keil 官网下载 Pack 支持包，
另外建议开发者同时掌握三种烧录方式，这样可以应对各种烧录情况。根据笔者最近的学习情况，发现 ARM 推出的 MBED 
在线开发环境，采用了面向对象的 C++ 语言，且高度抽象的 API 
接口函数使得使用时候几乎完全脱离了底层，入门更快，而 ST 在设计 NUCLEO 时候也更加突破性的采用了两种接口，且针对 
Arduino 的接口均已在 PCB 上印刷了功能名称，使用起来非常方便，非常适合入门学习，特别推荐学生使用 
NUCLEO 系列作为入门开发板使用。

使用 Keil MDK 5 开发环境需要安装 [MDK5 Software Packs]，
可以直接到官网下载 STM32F4 Series Device Support 系列支持包，当前最新版本为 
Keil.STM32F4xx_DFP.2.14.0.pack。安装该开发包后可以在 Keil 安装目录下 
ARM\Pack\Keil\STM32F4xx 找到本开发板相关示例程序
[MDK5 Software Packs]: http://www.keil.com/dd2/pack/

新版的 Keil MDK 默认输出 .axf 调试文件，再项目配置 Output 中可以钩选 Make HEX File 
来生成 .hex 可执行文件，但是没有 Plain Binary 二进制格式 .bin 文件的输出选项。
需要 .bin 文件来进行烧写时，可以通过自带的 fromelf 工具软件输出 bin 文件：

    C:\Keil\ARM\ARMCC\bin\fromelf.exe --bin --output ./STM32F4xx-Nucleo.bin ./STM32F4xx-Nucleo.axf

可以将以上命令配置到项目的 User 中，Run User Programs After Build/Rebuild 中勾选
一条并填入命令，再运行 Build 编译工程就可以由 axf 生成 bin 文件。

板卡支持 Windows 7/8/10，Linux 64-bit，MacOS，USB 连接线使用 Type-A to Mini-B 接口。
连接电脑后会模拟出一个优盘，里面有一个 MBED.HTM 可以访问 [mbed] 网站。
[mbed]: https://developer.mbed.org/compiler/

    <meta http-equiv="refresh" content="0; url=http://mbed.org/device/?code=07400221092A690D366EFF70"/>
    <title>mbed Website Shortcut</title>

DETAILS.TXT 包含板卡的版本信息：

    Version: 0221
    Build:   Apr 29 2015 13:11:12

根据板卡的错误状态，还会有一个 FAIL.TXT 文件：

    The interface firmware FAILED to reset/halt the target MCU


**Using ST-LINK/V2-1 to program and debug an external STM32 application**

It is very easy to use the ST-LINK/V2-1 to program the STM32 on an external application.
Simply remove the two jumpers from CN2 as illustrated in Figure 9: Using ST-LINK/V2-1 to
program the STM32 on an external application, and connect the application to the CN4
debug connector according to Table 5.

Note: SB12 NRST (target STM32 RESET) must be OFF if CN4 pin 5 is used in the external
application.

**Using the ST-LINK/V2-1 to program and debug the STM32 on board**

To program the STM32 on the board, plug in the two jumpers on CN2, as shown in red in
Figure 8. Do not use the CN4 connector as this could disturb the communication with the
STM32 microcontroller of the STM32 Nucleo board.



## // ST-Link to fire Firmware

嵌入式开发中编写的程序要写入 MCU（SoC），通常需要借助串行通信协议来传输数据，以及官方提供的烧写
工具软件，而写入芯片的程序就会固定在芯片内部，除非重新烧录以更新程序。这个程序因为固定的特性，
习惯称之为“固件” Firmware，而写入这个过程称为烧录、烧写，程序代码写入芯片内部的 ROM/FLASH
存储器中。Nand Flash 或者 Nor Flash 都是可编程逻辑电路，PLD - Programable Logic Device。
PLD 和现场可编程门阵列 FPGA（Field Programable Gate Array）两者的功能基本相同，
只是实现原理略有不同，所以我们有时可以忽略这两者的区别，统称为可编程逻辑器件或PLD/FPGA。

烧写一词最早用在一次性可编程只读存储器上，这种存储器出厂时是一枚空白的芯片，可以通过特殊
设备写入内容。怎么写？高电压，比方说芯片正常的读取电压是 3.3V，那么写入用 16V 电压。
通过高压烧断内部的反熔丝（Anti-fuse）连接部，实现指定编码，永久性改变写入位置的物理结构。
烧写后 OTPNVM 就无法再次写入了。现代的 FLASH 实现了重复烧写功能，但烧写一词保留使用。

早期的只读存储器（Read-Only Memory，ROM）以非破坏性读出方式工作，只能读出无法写入信息。
信息一旦写入后就固定下来，即使切断电源，信息也不会丢失，所以又称为固定存储器。ROM 所存数据
通常是装入整机前写入的，整机工作过程中只能读出，不像随机存储器（Ramdon Access Memory）
能快速方便地改写存储内容。

ROM 所存数据稳定，断电后所存数据也不会改变，并且结构较简单，使用方便，因而常用于 firmware。

存储器发展过程中还有 EPROM（Erasable Programmable ROM），芯片可重复擦除和写入，
解决了 PROM 芯片只能写入一次的弊端。EPROM 芯片正面的陶瓷封装上，开有一个玻璃窗口，
透过该窗口，可以看到其内部的集成电路，紫外线透过该孔照射内部芯片就可以擦除其内的数据。
EPROM 内资料的写入要用专用的编程器，并且往芯片中写内容时必须要加 12~24V 编程电压。

可编程只读存储器 PROM - Prorammable ROM 和 OTPROM - One Time Programmable ROM，
都是指可单次写入的只读存储器。

为了提高可用性，又研发出 EEPROM (Electrically Erasable Programmable ROM)是指带电可擦可编程只读存储器。是一种掉电后数据不丢失的存储芯片。 EEPROM 可以在电脑上或
专用设备上擦除已有信息，重新编程。

FLASH 按扇区操作，EEPROM 则按字节操作，二者寻址方法不同，存储单元的结构也不同。
FLASH 电路结构较简单，同样容量占芯片面积较小成本低，因而适合用作程序存储器，
EEPROM 则更多的用作非易失的数据存储器。

NVM: Non-Volatile Memory，非易失性存储器，特点是存储的数据不会因为电源关闭而消失。
像 Mask ROM、PROM、EPROM、EEPROM、NAND / NOR 闪存 (Flash Memory) 等传统 NVM。
以及，目前许多正在研发的新型态存储器，如磁性存储器 (MRAM)、阻变存储器 (RRAM)、
相变存储器 (PRAM)、铁电存储器 (FeRAM) 等等都属于 NVM。按可编程次数可以分为 3 类：

1. MTP: Multiple-Time Programmable，可以多次编程
2. FTP: Few-Time Programmable，可编程的次数有限
3. OTP: One-Time Programmable，只允许编程一次，一旦被编程，数据永久有效
[NAND Flash 101: An Introduction to NAND Flash]: https://media-www.micron.com/-/media/client/global/documents/products/technical-note/nand-flash/tn2919_nand_101.pdf
[NOR | NAND Flash Guide]: https://media-www.micron.com/-/media/client/global/documents/products/product-flyer/nor_nand_flash_guide.pdf


ST-LINK/V2 in-circuit debugger/programmer for STM8 and STM32

ST-LINK 是 STM8、 STM32 系列芯片的编程器，通过单线接口模块 SWIM - single wire interface module 
和串行调试接口 SWD - serial wire debugging interfaces，JTAG 与板载的 STM8、STM32 芯片通讯。
这套调试器配套的固件程序已经烧录到 Nucleo-64 评估板上的 mini-board 部分的，由它负责与主板芯片通信。

ST-LINK/V2 主要功能有：

- 编程功能：可烧写FLASH ROM、EEPROM、AFR等。
- 仿真功能：支持全速运行、单步调试、断点调试等各种调试方法，可查看IO状态，变量数据等等。
- 仿真性能：采用USB2.0接口进行仿真调试，单步调试，断点调试，反应速度快！
- 编程性能：采用USB2.0接口，进行SWIM / JTAG / SWD下载，下载速度快！

- 5 V power supplied by a USB connector
- USB 2.0 full-speed-compatible interface
- USB standard A to Mini-B cable
- SWIM specific features
        - 1.65 V to 5.5 V application voltage supported on SWIM interface
        - SWIM low-speed and high-speed modes supported
        - SWIM programming speed rate: 9.7 Kbytes/s in low speed and 12.8 Kbytes/s in high speed
        - SWIM cable for connection to the application via an ERNI standard vertical connector (ref: 284697 or 214017) or horizontal connector (ref: 214012)
        - SWIM cable for connection to the application via a pin header or a 2.54 mm pitch connector
- JTAG/serial wire debugging (SWD) specific features:
        - 1.65 V to 3.6 V application voltage supported on the JTAG/SWD interface and 5 V tolerant inputs
        - JTAG cable for connection to a standard JTAG 20-pin pitch 2.54 mm connector
        - JTAG supported
        - SWD and serial wire viewer (SWV) communication supported
- Direct firmware update feature supported (DFU)
- Status LED which blinks during communication with the PC
- Operating temperature 0 to 50 °C
- 1000 Vrmshigh isolation voltage (ST-LINK/V2-ISOL only)

ST-LINK Utility 包含一个 ST-LINK_CLI 命令行工具，功能很强大，可以完全替代 GUI 工具。
例如，获取设备列表，连接设备，FW: V2J24M11 这里指示 Fireware 版本是 ST-LINK 2.1：

```sh
$ ST-LINK_CLI -List
STM32 ST-LINK CLI v3.2.0.0
STM32 ST-LINK Command Line Interface

--- Available ST-LINK Probes List ---

ST-LINK Probe 0:
         SN: 066FFF525655857067102141
         FW: V2J24M11

----------------------------------

$ ST-LINK_CLI -c SWD

ST-LINK SN : 066FFF525655857067102141
ST-LINK Firmware version : V2J24M11
Connected via SWD.
SWD Frequency = 4000K.
Target voltage = 3.3 V.
Connection mode : Normal.
Device ID:0x431
Device flash Size : 512 Kbytes
Device family :STM32F411xC/E
```

为了方便使用，可以通过 Powershell 创建软符号链接指向 ST-LINK 安装目录下的可执行文件：

```sh
#!/usr/bin/env pwsh.exe
$STM="C:\Program Files (x86)\STMicroelectronics"
$list=@"
$STM/stlink_server/stlinkserver.exe=>/vcpkg/stlinkserver.exe
$STM/STM32 ST-LINK Utility/ST-LINK Utility/STM32 ST-LINK Utility.exe=>/vcpkg/stlinkg.exe
$STM/STM32 ST-LINK Utility/ST-LINK Utility/ST-LINK_CLI.exe=>/vcpkg/stlink.exe
$STM/STM32 ST-LINK Utility/ST-LINK Utility/ST-LinkUpgrade.exe=>/vcpkg/ST-LinkUpgrade.exe
"@ -split "\n"
foreach ($it in $list) {
    $T=($it -split "=>")[0]
    $P=($it -split "=>")[1]
    rm $P
    if ( (Test-Path "$T") -and -not( Test-Path "$P")) 
    { 
        New-Item -Type SymbolicLink -Target "$T" -Path "$P"
    } else {
        echo "Target file doesn't exists or symbolic path already exists."
    }
}
```

或者设置环境变量，Windows 环境下使用 msys64 平台，还可以创建以下脚本调用这些工具：

```sh
#!/usr/bin/env bash

stlink_setting()
{
    STM="C:/Program Files (x86)/STMicroelectronics"
    echo "'$STM/stlink_server/stlinkserver.exe' \$@" > /c/vcpkg/stlinks
    echo "'$STM/STM32 ST-LINK Utility/ST-LINK Utility/ST-LINK_CLI.exe' \$@" > /c/vcpkg/stlink
    echo "'$STM/STM32 ST-LINK Utility/ST-LINK Utility/ST-LinkUpgrade.exe' \$@" > /c/vcpkg/stlinku
    echo "'$STM/STM32 ST-LINK Utility/ST-LINK Utility/STM32 ST-LINK Utility.exe' \$@" > /c/vcpkg/stlinkg
}

dump()
{
    PID=$$
    bin=stlink.bin.$PID
    stlink -dump 0 $((512*1024)) $bin
    # cat $bin
    # printf "512KB in hex: %x" $((512*1024))
}


watch_reg()
{
    for it in {1..100}; do
        stlink -c -CoreReg
        sleep 0.001
    done
}

stlink_setting
stlink -c
```

安装好 ST-LINK 驱动，并且连接 Nucleo-64 评估板，执行 `stlink -c` 命令通过 JTAG 或者 SWD
去连接设备，应该可以看到固件版本等信息。GUI 界面中的烧录功能 (Program...) 对应命令行的是
-P  Load a into device，连接上设备就可以将指定 bin 文件写入设备。读取内存数据，就使用 -Dump，
这个命令可以指定超出芯片内存大小的范围，超出部分填充 FFH。

如果连接失败，有可能是驱动示安装好，或者固件没有更新。使用 ST-LINK GUI 界面可以刷新固件，
或者使用 Printf via SWD viewer 查看串口消息打印。使用 Firmware update 更新固件，
更新固件需要调用 ST-LinkUpgrade 程序。固件有两种工作类型：

1. STM32 Debug+VCP
2. STM32 Debug+Mass storage+VCP

两种方式都有基本的调试功能和 Virtual COM Port (VCP) ，这是通过 USB 虚拟的串行端口。
第二种多了一个 USB 移动盘的功能，芯片内部的 Flash 映射为移动盘，可以写入数据，但掉电不保存。

官方提 [ST-LINK] 固件烧写软件和配套的 USB 驱动程序。其中，[STSW-LINK004] 下载包含有
工具程序和驱动，[STSW-LINK007] 和 [STSW-LINK009] 是固件升级包。[ST-LINK-SERVER]
则是方便多个调试器控制同一目标板的服务程序，方便多方联合调试。

可参考 STLINK - Open source version 开源版本 [STLINK_OPEN]。

*   **ST-LINK** CLI & GUI Utility

    STM32 ST-LINK Utility ([STSW-LINK004]) is a full-featured software interface 
    for programming STM32 microcontrollers.

    It provides an easy-to-use and efficient environment for reading, writing 
    and verifying a memory device.

    The tool offers a wide range of features to program STM32 internal memories
    (Flash, RAM, OTP and others), external memories, to verify the programming 
    content (checksum, verify during and after programming, compare with file) 
    and to automate STM32 programming.

    STM32 ST-LINK Utility is delivered as a graphical user interface (GUI) 
    with a command line interface (CLI).

    All features

    01. Free software
    02. Supports Motorola S19, Intel HEX and binary formats
    03. Load, Edit and Save executable and data files generated by 
        the Assembler/Linker or C compilers
    04. Erase, Program, View and Verify device Flash memory contents
    05. Program, Erase and Verify external memories with examples of external 
        flash loaders, for users to develop loaders for specific external memories
    06. Automate STM32 programming (Erase, Verify, Programming, 
        Configuring option bytes, calculate checksum)
    07. Programming One Time Programmable memory
    08. Supports Programming and Configuring Option bytes
    09. Offers a command line interface
    10. Compare file with target memory
    11. Supports memory and core status view in Live-update mode
    12. ST-LINK/V2 firmware upgrade

    ![ST-LINK GUI](https://www.st.com/bin/ecommerce/api/image.PF258168.en.feature-description-include-personalized-no-cpn-large.jpg)

*  **STSW-LINK007** ST-LINK firmware update

    [STSW-LINK007] is the firmware upgrade application for ST-LINK, ST-LINK/V2, 
    ST-LINK/V2-1, and STLINK-V3 boards through the USB port.

    For more details refer to the release note Firmware upgrade for ST-LINK, ST-LINK/V2, 
    ST-LINK/V2-1 and STLINK-V3 boards (RN0093) available from the www.st.com website.

    All features The package contains:
    1. An executable for Windows®
    2. A Java® application for macOS®, Linux® and Windows®

*  **STSW-LINK009** ST-LINK firmware update

    This USB driver ([STSW-LINK009]) is for ST-LINK/V2, ST-LINK/V2-1 and STLINK-V3 
    boards and derivatives (STM8/STM32 discovery boards, STM8/STM32 evaluation boards 
    and STM32 Nucleo boards). It declares to the system the USB interfaces possibly 
    provided by the ST-LINK: ST Debug, Virtual COM port and ST Bridge interfaces.

    The driver must be installed prior to connecting the device, in order to 
    have a successful enumeration.

*   **ST-LINK server**

    The ST-LINK server is an application to share the debug interface of a single 
    ST-LINK board among several host applications, typically a debugging tool and 
    a monitoring tool. Of course, two debugging tools cannot simultaneously control 
    the same target, but both may have access to it if appropriate connection 
    settings are chosen.

    The ST-LINK server also has access to several boards with one single tool to 
    launch and control the debug of these boards.

    The host application must be able to connect to the ST-LINK server instead of 
    connecting directly to the ST-LINK USB interface.

    Other ST-LINK interfaces (such as Virtual COM port and mass storage, if provided) 
    are not managed through the ST-LINK server, but may be used simultaneously.

    All features

    1.  ST-LINK server ([ST-LINK-SERVER]) for multi-platform (Windows®, macOS®, Linux®)
    2.  Software application for ST-LINK/V2, ST-LINK/V2-1, and STLINK-V3 boards
    3.  Downloadable file containing 5 packages for Windows®, macOS® X, Linux Debian®, 
        Linux Red Hat®, and other Linux® OS
[STLINK_OPEN]: https://github.com/stlink-org/stlink
[ST-LINK]: https://www.st.com/en/development-tools/st-link-v2.html#tools-software
[STSW-LINK004]: https://www.st.com/en/development-tools/stsw-link004.html
[STSW-LINK007]: https://www.st.com/en/development-tools/stsw-link007.html
[STSW-LINK009]: https://www.st.com/en/development-tools/stsw-link009.html
[ST-LINK-Server]: https://www.st.com/en/development-tools/st-link-server.html

## //STM32 ST-LINK CLI (Command Line Interface)

    STM32 ST-LINK CLI v3.6.0.0
    STM32 ST-LINK Command Line Interface

    Available commands:
    ===================
    -c        Connect to the device using JTAG or SWD.
              Syntax: -c [ID=<id>/SN=<sn>] [JTAG/SWD SWCLK=<f>] [UR/HOTPLUG] [LPM]
                         [RM=Hrst/Srst/Crst]
              [ID=<id>]   : id (Identifier) of ST-LINK [0..9] to use when multiple
                            probes are connected to the host
              [SN=<sn>]   : sn (Serial Number) of the chosen ST-LINK probe
              [AP=<ap>]   : ap (Access Port Number) default value is 0
              [UR]        : Connect to target under reset
              [HOTPLUG]   : Connect to target without halt or reset
              [LPM]       : Activate debug in Low Power mode
              [Hrst]      : Activate Hardware Reset mode
              [Srst]      : Activate Software system Reset mode
              [Crst]      : Activate Core Reset mode
              [Freq=<frequency>] : Frequency value in KHz

              Example: -c ID=1 SWD SWCLK=5 UR LPM
              Example: -c ID=1 JTAG JTAGCLK=6 UR
              Example: -c SN=55FF6C064882485358622187 SWD UR LPM

              Note: When [ID=<id>] and [SN=<sn>] are not specified, the first
                   ST-LINK with ID=0 will be selected
                   Selection of ST-LINK by ID or SN should be used with:
                   * V1J13Sx or greater ST-LINK firmware version
                   * V2J20Sx or greater ST-LINK/V2 firmware version
                   * V2J20Mx or greater ST-LINK/V2-1 firmware version
                   [UR] available only with ST-LINK/V2 and in SWD mode
                   For JTAG mode, connect under reset is available since
                   ST-LINK/V2 firmware Version V2J15Sx
                   The RESET pin of the JTAG connector(pin 15) should be connected
                   to the device reset pin
                   [HOTPLUG] available in SWD mode
                   For JTAG mode, HotPlug Connect is available since
                   ST-LINK/V2 firmware Version V2J15Sx
                   [SWCLK=<f>] available only with ST-LINK/V2 and in SWD mode

    -List     List the corresponding firmware version and the unique Serial Number
              of every ST-LINK probe connected to the computer
              Note: To have a correct SN the ST-LINK firmware version should be:
                   * V1J13Sx or greater for ST-LINK
                   * V2J20Sx or greater for ST-LINK/V2
                   * V2J20Mx or greater for ST-LINK/V2-1
    -r8       Read memory.       Syntax: -r8  <Address> <NumBytes>
    -r16      Read memory.       Syntax: -r16  <Address> <NumHalfWords>
    -r32      Read memory.       Syntax: -r32  <Address> <NumWords>
    -w8       Write 8-bit data.  Syntax: -w8  <Address> <data>
    -w32      Write 32-bit data. Syntax: -w32 <Address> <data>
    -w64      Write 64-bit data. Syntax: -w64 <Address> <data>
    - Core commands --------------------------------------------------------
    -Rst      System reset
    -HardRst  Hardware reset
              Syntax: -HardRst [<LOW/HIGH>]
              [LOW]        : Held reset pin low
              [HIGH]       : Held reset pin high
              [PULSE=delay]: Pulse reset pin with a delay (in ms)
    -Run      Run application. Syntax: -Run [<Address>]
    -Halt     Halt core
    -Step     Step core
    -SetBP    Set breakpoint. Syntax: -SetBP <Address>
    -ClrBP    Clear all hardware breakpoints
    -CoreReg  Read Core registers
    -SCore    Get Core status
    - Flash commands -------------------------------------------------------
    -ME       Full chip erase
    -SE       Erase flash sector(s). Syntax: -SE <Start_Sector> [<End_Sector>]
                                     Syntax: -SE <Sector>
    -P        Load a into device. Syntax: -P <File_Path> [<Address>] [ske] [skpv]
    -V        Verify if the programming operation was performed successfully
              Syntax: -V <while_programming/after_programming>
              Note: The "while_programming" is the default type
    -EL       Select a Custom external memory-loader. Syntax: -EL <File_Path>
    - Miscellaneous commands ----------------------------------------------
    -Q        Enable quiet mode. No progress bar displayed
    -CmpFile  Compare file with device. Syntax: -CmpFile <File_Path> [<Address>]
    -TVolt    Display target voltage
    -Log      Enable Trace LOG File generation
    -NoPrompt Disable user confirmation prompts
              (For programming RDP Level 2 within a file for example)
    -Dump     Read target memory and save it in a file
              Syntax  : -Dump <Address> <Memory_Size> <File_Path>
    -Cksum    Generates a checksum value for a file or stream of data
              Syntax  : -Cksum <Address> <Memory_Size>
              Syntax  : -Cksum <File_path>
    - Option bytes commands ------------------------------------------------
    -rOB      Display all option bytes
    -OB       Configure the option bytes
              Syntax: -OB [RDP         =<Level>] [BOR_LEV         =<Level>]
                          [WWDG_SW     =<Value>] [IWDG_SW         =<Value>]
                          [IWDG_STOP   =<Value>] [IWDG_STDBY      =<Value>]
                          [nRST_STOP   =<Value>] [nRST_STDBY      =<Value>]
                          [IWDG_ULP    =<Value>] [FZ_IWDG_STOP    =<Value>]
                          [nBOOT_SEL   =<Value>] [FZ_IWDG_STDBY   =<Value>]
                          [nRST_SHDW   =<Value>] [PCROP_RDP       =<Value>]
                          [nBFB2       =<Value>] [BFB2            =<Value>]
                          [nBoot1      =<Value>] [Boot1           =<Value>]
                          [nBoot0      =<Value>] [nBoot0_SW_Cfg   =<Value>]
                          [VDDA        =<Value>] [SDADC12_VDD     =<Value>]
                          [DB1M        =<Value>] [DUALBANK        =<Value>]
                          [nDBANK      =<Value>] [BOOT0_nSW_Config=<Value>]
                          [Data0       =<Value>] [Data1           =<Value>]
                          [nSRAM_Parity=<Value>] [SRAM2_RST       =<Value>]
                          [SRAM2_PE    =<Value>] [DDS             =<Value>]
                          [FSD         =<Value>] [SFSA            =<Value>]
                          [C2OPT       =<Value>] [NBRSD           =<Value>]
                          [SNBRSA      =<Value>] [SBRSA           =<Value>]
                          [BRSD        =<Value>] [SBRV            =<Value>]
                          [Security    =<Value>] [CM7_BOOT_ADD0   =<Value>]
                          [DMEPB       =<Value>] [CM7_BOOT_ADD1   =<Value>]
                          [DMESB       =<Value>] [IWDG1           =<Value>]
                          [IWDG2       =<Value>] [nRST_STDBY_D2   =<Value>]
                          [BOOT_CM4    =<Value>] [nRST_STDBY_D1   =<Value>]
                          [BOOT_CM7    =<Value>] [CM7_BOOT_ADD0   =<Value>]
                          [DMEPA       =<Value>] [CM7_BOOT_ADD1   =<Value>]
                          [DMESA       =<Value>] [SECA_strt       =<Value>]
                          [SECA_end    =<Value>] [SECB_strt       =<Value>]
                          [SECB_end    =<Value>] [DTCM_RAM        =<Value>]
                          [SPRMOD      =<Value>] [WPRMOD          =<Value>]
                          [PCROPA_STRT =<Value>] [PCROPA_END      =<Value>]
                          [PCROPB_STRT =<Value>] [PCROPB_END      =<Value>]
                          [WRP         =<Value>] [WRP2            =<Value>]
                          [WRP3        =<Value>] [WRP4            =<Value>]
                          [WRP1A_STRT  =<Value>] [WRP1A_END       =<Value>]
                          [WRP1B_STRT  =<Value>] [WRP1B_END       =<Value>]
                          [WRP2A_STRT  =<Value>] [WRP2A_END       =<Value>]
                          [WRP2B_STRT  =<Value>] [WRP2B_END       =<Value>]
                          [IPCCDBA     =<Value>]

    For more details about Option Bytes parameters, Press any key to continue
       RDP=<Level>: Set the flash memory read protection level
          0: Protection disabled             1: Protection enabled
          2: Protection enabled(debug & boot in SRAM features are DISABLED)

       BOR_LEV=<Level>: Set the Brownout Reset threshold level
          For STM32 L0 and STM32 L1:
                   0: BOR OFF,1.45 to 1.55 V voltage range
                   1: 1.69 to 1.8 V voltage range
                   2: 1.94 to 2.1 V voltage range
                   3: 2.3 to 2.49 V voltage range
                   4: 2.54 to 2.74V voltage range
                   5: 2.77 to 3.0 V voltage range
          For STM32 F2, STM32 F4, STM32F7 and STM32 L4
                   0: BOR OFF, 1.8 to 2.10 V voltage range
                   1: 2.10 to 2.40 V voltage range
                   2: 2.40 to 2.70 V voltage range
                   3: 2.70 to 3.60 V voltage range

       WWDG_SW=<Value>: <Value> should be 0/1
          0: Hardware window watchdog         1: Software window watchdog

       IWDG_SW=<Value>: <Value> should be 0/1
          0: Hardware independent watchdog    1: Software independent watchdog

       IWDG_ULP=<Value>: <Value> should be 0/1
          0: IWDG clock can't be disabled
          1: IWDG clock can be disabled by the RCC when entering low power modes

       IWDG_STOP=<Value>: <Value> should be 0/1
          0: Independent watchdog counter is frozen in Stop mode
          1: Independent watchdog counter is running in Stop mode

       IWDG_STDBY=<Value>: <Value> should be 0/1
          0: Independent watchdog counter is frozen in Standby mode
          1: Independent watchdog counter is running in Standby mode

       FZ_IWDG_STOP=<Value>: <Value> should be 0/1
          0: Freeze IWDG counter in STOP mode
          1: IWDG counter active in STOP mode

       FZ_IWDG_STDBY=<Value>: <Value> should be 0/1
          0: Freeze IWDG counter in STDBY mode
          1: IWDG counter active in STDBY mode

       nRST_STOP=<Value>: <Value> should be 0/1
          0: Reset generated when CPU enters Stop mode     1: No reset generated

       nRST_STDBY=<Value>: <Value> should be 0/1:
          0: Reset generated when CPU enters Standby mode  1: No reset generated

       nRST_SHDW=<Value>: <Value> should be 0/1
          0: Reset generated when entering Shutdown mode   1: No reset generated

       PCROP_RDP=<Value>: <Value> should be 0/1
          0: PCROP area not erased when RDP level decreased from 1 to 0
          1: PCROP area erased when RDP level decreased from 1 to 0=>full mass erase

       nBFB2=<Value>: <Value> should be 0/1
          0: Boot from flash bank 2 when boot pins set in "boot from user Flash"
          1: Boot from flash bank 1 when boot pins set in "boot from user Flash"

       BFB2=<Value>: <Value> should be 0/1
          0: Boot from flash bank 1 when boot pins set in"Boot from user Flash"
             (default)
          1: Boot from flash bank 2 when boot pins set in "Boot from user Flash"

       nBoot1=<Value>: <Value> should be 0/1
          With Input pad Boot0 (or Option bit nBoot0) selects the Boot Source

       nBoot0=<Value>: Value should be 0/1: Active only when Boot0_SW_Cfg is set

       nBoot0_SW_Cfg=<Value>: <Value> should be 0/1:
          0: Allows user to disable BOOT0 pin completely & use nBoot0 Option bit
          1: The BOOT0 is bonded to GPIO pin (PB8 on LQFP32 and smaller packages,
             PF11 for QFN32 and bigger packages)

       BOOT0_nSW_Config=<Value>: <Value> should be 0/1:
          0: boot0 taken from the option bit
          1: boot0 taken from the pad

       nDBOOT=<Value>: <Value> should be 0/1:
          0: Dual boot enabled
          1: Dual boot disabled

       nBOOT_SEL=<Value>: <Value> should be 0/1:
          0: BOOT0 taken from the pad
          1: BOOT0 taken from the nBOOT0 option bit

       VDDA=<Value>: <Value> should be 0/1:
          Selects the analogue monitoring on VDDA Power source

       SDADC12_VDD=<Value>: <Value> should be 0/1
          Slects analogue monitoring (comparison with Bgap 1.2V voltage)
          on SDADC12_VDD Power source

       Data0=<Value>: Set Data0 option byte.<Value> should be in [0..0xFF]

       Data1=<Value>: Set Data1 option byte.<Value> should be in [0..0xFF]

       BOOT_ADD0=<Value>: Value should be in [0..0xFFFF]
           Boot Address enable when Boot0=0
           BOOT_ADD0[15:0] correspond to address [29:14]

       BOOT_ADD1=<Value>: Value should be in [0..0xFFFF]
           Boot Address enable when Boot0=1
           BOOT_ADD1[15:0] correspond to address [29:14]

       nSRAM_Parity=<Value>: <Value> should be 0/1
           This bit allows the enable of the SRAM hardware parity check
           0: Parity check enabled           1: Parity check disabled

       SRAM2_RST=<Value>: <Value> should be 0/1
           This bit allows the enable of the SRAM2 erase on system reset
           0: SRAM2 erased when a system reset occurs
           1: SRAM2 is not erased when a system reset occurs

       SRAM2_PE=<Value>: <Value> should be 0/1
           This bit allows the enable of the SRAM2 hardware parity check
           0: SRAM2 parity check enable      1: SRAM2 parity check disable

       SPRMOD=<Value>: <Value> should be 0/1
           Selection of protection mode of nWPRi bits
           0: nWPRi bits used for sector i write protection
           1: nWPRi bits used for sector i PCROP protection

       PCROPA_STRT=<Value>:  <Value> should be in [0..0xFFFFFFFF]
           Read/Write Protection Start address for bank A.
           Note: PCROPA_STRT must be in the active zone of Bank A
           Note: PCROPA_STRT must be Double Word aligned

       PCROPA_END=<Value>:  <Value> should be in [0..0xFFFFFFFF]
           Read/Write Protection End address for bank A
           Note: PCROPA_END must be in the active zone of Bank A
           Note: PCROPA_END must be Double Word aligned

       PCROPB_STRT=<Value>:  <Value> should be in [0..0xFFFFFFFF]
           Read/Write Protection Start address for bank B
           Note: PCROPB_STRT must be in the active zone of Bank B
           Note: PCROPB_STRT must be Double Word aligned

       PCROPB_END=<Value>:  <Value> should be in [0..0xFFFFFFFF]
           Read/Write Protection End address for bank B
           Note: PCROPB_END must be in the active zone of Bank B
           Note: PCROPB_END must be Double Word aligned

       WRP=<Value>: Enables/Disables write protection of the flash sectors
           Each bit will Enable/Disable the write protection of one sector
           or more depending on the connected device
           For STM32 L1      => WRP[i] = 0 : Flash sector(s) is protected
           For other devices => WRP[i] = 1 : Flash sector(s) is protected
           For other devices => WRP[i] = 1 : Flash sector(s) is protected
           Note: <Value> should be in [0..0xFFFFFFFF]

       WRP2=<Value>: WRP2 is available only for STM32 L1 medium density
           plus, high density and high density plus devices to enable or
           disable the protection of Flash sectors from page 512 to 1023
           Note: <Value> should be in [0..0xFFFFFFFF]

       WRP3=<Value>: WRP3 is available only for STM32 L1 high density and
           high density plus devices to enable/disable the protection of
           Flash sectors from page 1024 to 1535
           Note: <Value> should be in [0..0xFFFFFFFF]

       WRP4=<Value>: WRP4 is available only on STM32 L1 high density plus
           devices to enable/disable the protection of flash
           sectors from sector 1536 to sector 2047
           Note: <Value> should be in [0..0xFFFFFFFF]

       WRP1A_STRT=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone A on Bank 1
           Note: WRP1A_STRT must be in the active zone of Bank 1

       WRP1A_END=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone A on Bank 1
           Note: WRP1A_END must be in the active zone of Bank 1

       WRP1B_STRT=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone B on Bank 1
             Note: WRP1B_STRT must be in the active zone of Bank 1

       WRP1B_END=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone B on Bank 1
           Note: WRP1B_END must be in the active zone of Bank 1

       WRP2A_STRT=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone A on Bank 2
           Note: WRP2A_STRT must be in the active zone of Bank 2

       WRP2A_END=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone A on Bank 2
           Note: WRP2A_END must be in the active zone of Bank 2

       WRP2B_STRT=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone B on Bank 2
           Note: WRP2B_STRT must be in the active zone of Bank 2

       WRP2B_END=<Value>: <Value> should be in [0..0xFF]
           Flash Page Index of Start Write Protection Zone B on Bank 2
           Note: WRP2B_END must be in the active zone of Bank 2

       DB1M=<Value>: <Value> should be 0/1
           Dual-Bank on 1MB Flash

       DUALBANK=<Value>: <Value> should be 0/1
           Dual-Bank on 512KB Flash or 256K Devices
           0: 512KB/256K Single Flash Bank
           1: 512KB/256K Dual-Bank Flash with contiguous addresses

       nDBANK=<Value>: <Value> should be 0/1
           Flash 256 bits mode
           0: The two 1MB banks are seen as a single bank with 256 bits
           1: The two 1MB banks are seen as a dual bank with 128 bits

       nDBOOT=<Value>: <Value> should be 0/1
           Dual Boot mode enable
           0: Dual Boot enabled. Boot always from ICP if boot address in flash
             (Dual bank Boot mode), or RAM if Boot address option in RAM
           1: Dual Boot disabled. Boot according to boot address option (Default)

       FSD=<Value>: <Value> should be 0/1
           0: System and flash is non secure.
           1: System and flash is secure (defined by SFSA)

       DDS=<Value>: <Value> should be 0/1
           0: CPU2 debug access enabled.
           1: CPU2 debug access disabled.

       SFSA=<Value>: <Value> should be [0..0xFF]
           When FSD=0 system and flash is secure. SFSA contains start
           address of the first 4K page of secure flash area.

       C2OPT=<Value>: <Value> should be 0/1
           0: SBRV will address SRAM2.
           1: SBRV will address flash.

       NBRSD=<Value>: <Value> should be 0/1
           non-backup SRAM2b security disable.

       SNBRSD=<Value>: <Value> should be 0/1
           Secure non-backup SRAM2b start address.

       BRSD=<Value>: <Value> should be 0/1
           backup SRAM2a security disable.

       SBRSA=<Value>: <Value> should be 0/1
           Secure backup SRAM2a start address.

       SBRV=<Value>: <Value> should be [0..0x3FFFF]
           CPU2 boot reset vector: Contains the word aligned CPU2 boot reset
           start address within the selected memory.

    ------------------------------------------------------------------------
    For more details, please refer to the Option Bytes section in the Flash 
    programming manual corresponding to your device available at www.st.com
    ------------------------------------------------------------------------
    Note: All parameters should be in hexadecimal format




## //ST-LINK 给芯片烧写固件程序

参考 ARM 交叉编译器: https://www.veryarm.com/296.html
ST-LINK Utility 下载: http://www.notioni.com/#/source
ST-LINK Utility 官方下载: https://www.st.com/en/development-tools/st-link-v2.html
Stlink STM32 Discovery Tools: http://github.com/texane/stlink

执行板卡的基本测试程序：

- 连接供电选择跳线 JP5 的 PWR、UV5，即通过 USB 5V 给主控供电，JP1 和 JP6 保持连接；
- 通过 USB Type-A 连接电脑，Mini-B 连接板卡；
- 观察板载的 LD1(COM)、LD3(PWR) 亮红灯，分别指示串口、电源正常，LD2 绿灯闪烁表示测试程序运行中；
- 按下 USER 按钮可以调试闪烁频率；

LD2 是作为用户使用的绿光指示灯，连接到 Arduino D13，也和 STM32 I/O PA5 (pin 21) 管脚或 PB13 (pin 34) 连接，取决于 STM32 板卡 SB21 配置，STM32F411RE 版本则是通过贴片电阻连接的。

用户按钮 B1 USER 连接到 STM32 主控芯片的 I/O PC13 (pin 2)，这两个板载资源在没有外接硬件的条件下用来做编程演示。


官方网站 www.st.com/stm32nucleo 提供了示例程序，可以通过以下 IDE 或 Toolchains 开发自己的程序：

- IAR™ EWARM v7.10.3 or later
        – 30-day evaluation edition
        – 32-Kbyte Limited QuickStart edition (16-Kbyte limitation for Cortex M0)
- Arm® Keil®: MDK-ARM v5.17 or later
        – MDK-Lite (32-Kbyte code size limitation)
- TrueSTUDIO Lite v5 or later
        – No limitation
- SW4STM32 v1.5 and later
        – No limitation
- GCC-Based IDEs (AliOS Things: Visual Studio Code + GNU Arm Embedded Toolchain)
- ARM® Mbed™ online https://developer.mbed.org/compiler/

作为一个单片机开发人员，每天跟我们打交道的工具无非两种，一种是 PC 机上的开发环境，比如 Keil MDK、IAR Embedded Workbench 等等；另一种就是集程序下载、调试功能于一体的编程器 debugger and programmer，也可以叫下载器、仿真器、烧录器，需要根据使用的芯片选择合适的编程器。在开发环境下编写好程序，编译生成目标芯片的机器码后，通过编程器写入芯片内部的 Flash 闪存中。特别指出，烧录器一般指批量烧录阶段所用的那种可以快速完成芯片批量烧录的工具。

对于支持 ISP - In-System Programming 的芯片，不用编程器也可实现程序烧写。

在编程开发前，安装好 ST-LINK Utility 烧写软件，ST-LINK 驱动，可以在官方网站下载，需要注册，也可以在 AliOS Things 开发板代理厂商网站下载，http://www.notioni.com/#/source 选择 AliOS Things Starter/Developer Kit 技术文档资料，其中一个就可以，都包含两个必要工具：

- en.stsw-link004.zip 烧写软件包
- en.stsw-link009.zip 驱动包

安装好驱动和 ST-LINK Utility，按上面的测试流程连接板卡到电脑，打开烧写工具就可以连接到开发板，COM 指示灯闪烁，日志输出类似以下内容即表示正常：

        16:41:46 : ST-LINK SN : 066FFF525655857067102141
        16:41:46 : ST-LINK Firmware version : V2J24M11
        16:41:46 : Connected via SWD.
        16:41:46 : SWD Frequency = 4,0 MHz.
        16:41:46 : Connection mode : Normal.
        16:41:46 : Debug in Low Power mode enabled.
        16:41:46 : Device ID:0x431 
        16:41:46 : Device flash Size : 512KBytes
        16:41:46 : Device family :STM32F411xC/E

板载的 ST-LINK 虚拟了一个 U 盘，可以通过它来进行烧写，直接将编译好的 binary 机器码文件拷贝到这个 USB 存储器，即可自动烧写。


图形界面程序基本功能都在 Target 菜单下，主要是连接芯片，然后对芯片内部闪存 Flash 进行烧写操作，可以将编译好的程序机器码写入 Flash，也可以对 Flash 原有的数据进行擦除。

STM32F411xC/E 芯片的 512KB 内存的地址分布在 [0x08000000:0x08080000]，分成 8 个扇区，每个区的大小和地址分配如下：

- Sector 0  16Kb [0x08000000:0x08003FFF]
- Sector 1  16Kb [0x08004000:0x08007FFF]
- Sector 2  16Kb [0x08008000:0x0800BFFF]
- Sector 3  16Kb [0x0800C000:0x0800FFFF]
- Sector 4  64Kb [0x08010000:0x0801FFFF]
- Sector 5 128Kb [0x08020000:0x0803FFFF]
- Sector 6 128Kb [0x08040000:0x0805FFFF]
- Sector 7 128Kb [0x08060000:0x0808FFFF]

连接设备后，通过 Target 菜单的 Erase Chip/Sectors 对目标板进行擦除操作，对于大件高密设备 XL-density 还可以进行 Bank 擦除。

        09:38:20 : Flash memory erased.
        09:37:59 : Flash sector 0 @0x08000000 erased.
        09:37:59 : Flash sector 1 @0x08004000 erased.
        09:37:59 : Flash sector 2 @0x08008000 erased.
        09:37:59 : Flash sector 3 @0x0800C000 erased.

菜单下的 Program 就是烧写操作，即对芯片进行编程，这个过程也叫下载，即将上位机 PC 中编译好的程序下载到芯片中，开发板卡也叫下位机。点击其中一项选择一个机器码文件，Intel Hex 或者 Motorola S-record 格式。 

        10:13:52 : Memory programmed in 3s and 218ms.
        10:13:53 : Flash memory [0x08000000:0x08080000] Checksum: 0x070CD0BF

Program & Verify 就是带校验的烧写，可以在烧写过程中同时进行校验 Verify while Programming 或烧写完成后校验 Verify after Programming：

        16:49:17 : Memory programmed in 3s and 375ms.
        16:49:17 : Verification...OK
        16:49:17 : Programmed memory Checksum: 0x009E05FF
        16:49:18 : Flash memory [0x08000000:0x08080000] Checksum: 0x070CCCC3

        16:47:37 : [blink@developerkit.bin] opened successfully.
        16:47:37 : [blink@developerkit.bin] checksum : 0x009E11F3 
        16:48:10 : Memory programmed in 4s and 359ms.
        16:48:10 : Verification...OK
        16:48:11 : Flash memory [0x08000000:0x08080000] Checksum: 0x070CCCC3


ST-LINK Utility 还提供了一个 ST-LINK_CLI 命令行工具，功能很强大，可以完全替代 GUI 工具，列如获取设备列表，连接设备，FW: V2J24M11 这里指示 Fireware 版本是 ST-LINK 2.1：

        $ ST-LINK_CLI -List
        STM32 ST-LINK CLI v3.2.0.0
        STM32 ST-LINK Command Line Interface

        --- Available ST-LINK Probes List ---

        ST-LINK Probe 0:
                 SN: 066FFF525655857067102141
                 FW: V2J24M11

        ----------------------------------

        $ ST-LINK_CLI -c SWD

        ST-LINK SN : 066FFF525655857067102141
        ST-LINK Firmware version : V2J24M11
        Connected via SWD.
        SWD Frequency = 4000K.
        Target voltage = 3.3 V.
        Connection mode : Normal.
        Device ID:0x431
        Device flash Size : 512 Kbytes
        Device family :STM32F411xC/E

获取 CPU 内核寄存器状态：

        $ ST-LINK_CLI -c -CoreReg

        R1   = 0x00000000
        R2   = 0x00000000
        R3   = 0x00000000
        R4   = 0x00000000
        R5   = 0x00000000
        R6   = 0x00000000
        R7   = 0x00000000
        R8   = 0x00000000
        R9   = 0x00000000
        R10  = 0x00000000
        R11  = 0x00000000
        R12  = 0x00000000
        R13  = 0x20020000
        R14  = 0xFFFFFFFF
        APSR = 0x00000000
        IPSR = 0x00000000
        EPSR = 0x01000000
        MSP  = 0x20020000
        PSP  = 0x00000000
        XPSR = 0x01000000
        PC   = 0x08001324

烧写程序示例，烧写时校验/烧写完校验方式：

        $ ST-LINK_CLI -c SWD -P blink@stm32f411re-nucleo.bin 0x08000100 -V

        Loading file...
        Flash Programming:
            File : blink@stm32f411re-nucleo.bin
            Address : 0x08000100
        Memory programming...
        ΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫ 100%
        Memory programmed in 1s and 765ms.
        Verification...OK
        Programming Complete.
        Programmed memory Checksum: 0x0061DF51

        $ ST-LINK_CLI -c SWD -P blink@stm32f411re-nucleo.bin 0x08000100 -V after_programming

        Loading file...
        Flash Programming:
            File : blink@stm32f411re-nucleo.bin
            Address : 0x08000100
        Memory programming...
        ΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫ 100%
        Reading and verifying device memory...
        ΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫΫ 100%
        Memory programmed in 2s and 125ms.
        Verification...OK
        Programming Complete.

读取设备电压值：

        $ ST-LINK_CLI -c -TVolt

        Target voltage = 3.279 V

读取 Flash 内存数据，读取 0x08000000 开始的 32Byte，也可以使用 -w8/-w32/-w64 来重写指定地址的 Flash 数据：

        $ ST-LINK_CLI -c -r32 0x08000000 20

        0x08000000 : 20020000  08001325  08001375  08001375
        0x08000010 : 08001375  08001375  08001375  00000000


## // VSCode + GNU Arm Embedded Toolchain

AliOS Studio 就是一个基于 VScode 和阿里 IoT 系统 Alios Things 3.0 的 GNU Arm Embedded Toolchain 开发环境，透过 gcc-arm-none-eabi 工具箱里的命令来支持 Context-M/R 系列芯片的开发，当然也包括 STM32 Nucleo，可以在 AliOS Studio 支持设备列表中找到 stm32f411re-nucleo 这个设备。开发环境需要以下软件，AliOS Things 已经包含 GNU Arm Embedded Toolchain 工具：

- Python 2.7
- 安装 aos-cube 模块 pip install -U aos-cube
- Alios Things 3.0 https://github.com/alibaba/AliOS-Things/tree/master
- Visual Studio Code https://code.visualstudio.com/
- Visual Studio Code 装上 AliOS Studio 插件

在 Debian/Ubtuntu 系统安装 GNU ARM Embedded Toolchain 命令参考：

        sudo apt-get remove binutils-arm-none-eabi gcc-arm-none-eabi

重新安装CA证书

        sudo apt-get install --reinstall ca-certificates
        # 或 sudo -E add-apt-repository ppa:linrunner/tlp
        sudo add-apt-repository ppa:terry.guo/gcc-arm-embedded
        sudo apt-get update
        sudo apt-get install gcc-arm-none-eabi


AliOS Studio 调试机制框架图如下图所示：

        +-------------------------------------------+
        |                   VSCode                  |
        |                                           |
        |   +--------------+    +--------------+    |
        |   | AliOS Studio |    | vscode-tools |    |
        |   +--------------+    +--------------+    |
        +----------|-------------------^------------+
                             |                   |
                +------V-------+    +------V-------+
                |   aos-cube   |---->  gdb-server  |
                +--------------+    +------^-------+
                                                                     |
                                        +--------------V-+
                                        | JLink STLink 等|
                                        +----------------+
                                                 |
                                +--------V-------+
                                |     开发板     |
                                +----------------+

Alios Studio 插件通过 Python 脚本工具 aos-cube 执行各种命令行工具，可以通过 Python 的 pip 命令进行安装，也可通过 VSCode 的 Install aos-cube 快捷命令安装，aos 使用 Python 的 pyserial 模块与串口进行通讯，基本用法：

        Build 编译: aos make app@board  
        Clean 清除: aos make clean  
        Config Serial Monitor
        List Devices 列出所有串口: aos devices
        Connect device 打开串口: aos monitor COM4 115200
        Upload 烧写程序: aos upload app@board  
        Manage Account 管理阿里云账号 -
        OTA(Developerment Over-The-Air) 一键OTA功能，云发布程序更新 -

AliOS Things 的示例中提供了一个 blink 闪灯示例，可以将其编译为 blink@stm32f411re-nucleo，后缀是编译的目标平台。执行编译时，先要进行配置，再执行 aos make 进行编译，编译结果会在 out 目录中。GNU Make 自动编译命令 make 会调用最终执行编译的 gcc-arm-none-eabi 工具箱里的各种相关命令。 GNU Make 自动化编译工具在大型工程中非常有必要使用的，通过 GNU Make 支持的强大脚本能力编写 Makefile 自动化编译脚本即可轻松完成大型项目的编译工作。

        # config
        aos make blink@stm32f411re-nucleo -c config
        # or customize config manually
        aos make menuconfig
        # build
        aos make

        aos-cube version: 0.3.7
        Check if required tools for stm32f411re-nucleo exist
        ====================
        App:   blink
        Board: stm32f411re-nucleo
        ====================
        Build AOS Now
        TOOLCHAIN_PATH=
        Making blink@stm32f411re-nucleo.bin

                                                        AOS MEMORY MAP
        |=================================================================|
        | MODULE                                   | ROM       | RAM      |
        |=================================================================|
        | arch_armv7m                              | 288       | 0        |
        | atparser                                 | 4381      | 277      |
        | blink                                    | 61        | 8        |
        | board_stm32f411re-nucleo                 | 1518      | 52       |
        | debug                                    | 1681      | 0        |
        | device_sal_mk3060                        | 9622      | 330      |
        | kernel_init                              | 94        | 0        |
        | kv                                       | 1757      | 24       |
        | libc_nano                                | 14140     | 464      |
        | libgcc                                   | 3280      | 0        |
        | mcu_stm32f4xx_cube                       | 9257      | 6813     |
        | netmgr                                   | 80        | 8        |
        | newlib_stub                              | 306       | 0        |
        | osal_aos                                 | 698       | 0        |
        | rhino                                    | 11101     | 7623     |
        | sal                                      | 68        | 4        |
        | ulog                                     | 377       | 7        |
        | vfs                                      | 1044      | 1105     |
        | yloop                                    | 1399      | 32       |
        | *fill*                                   | 108       | 1577     |
        |=================================================================|
        | TOTAL (bytes)                            | 61260     | 18324    |
        |=================================================================|
        Generate Raw OTA image: out/blink@stm32f411re-nucleo/binary/blink@stm32f411re-nucleo_ota.bin ...
        Generate Compressed OTA image: out/blink@stm32f411re-nucleo/binary/blink@stm32f411re-nucleo_ota.bin.xz ...
        62364
        6fe5f0199b0de85f1dbcc0f016d2d8bd
        ---

连接板卡设备后就可以使用 aos upload 将编译好的机器码烧写到芯片的 Flash 内，aos 会调用 st-flash 对芯片进行烧写。这个工具来自开源 Stlink STM32 Discovery Tools 工具箱，它提供 st-flash 芯片烧写程序，st-info 芯片信息查询程序和 st-util 调试服务工具。

        $ aos upload blink@stm32f411re-nucleo
        aos-cube version: 0.3.7
        [INFO]: Currently in aos_sdk_path: 'c:\AliOS-Things-3.0.0'
        [INFO]: Target: blink@stm32f411re-nucleo
        [INFO]: Currently in aos_sdk_path: 'c:\AliOS-Things-3.0.0'

        [INFO]: Running cmd:
                        'c:\AliOS-Things-3.0.0/build/cmd/win32/st-flash.exe --reset write c:\AliOS-Things-3.0.0/out/blink@stm32f411re-nucleo/binary/blink@stm32f411re-nucleo.bin 0x08000000'
        st-flash 1.5.0
        2019-10-21T01:30:32 INFO common.c: Loading device parameters....
        2019-10-21T01:30:32 INFO common.c: Device connected is: F4 device (low power) - stm32f411re, id 0x10006431
        2019-10-21T01:30:32 INFO common.c: SRAM size: 0x20000 bytes (128 KiB), Flash: 0x80000 bytes (512 KiB) in pages of 16384 bytes
        2019-10-21T01:30:32 INFO common.c: Attempting to write 62364 (0xf39c) bytes to stm32 address: 134217728 (0x8000000)
        Flash page at addr: 0x0800c000 erasedEraseFlash - Sector:0x3 Size:0x4000
        2019-10-21T01:30:33 INFO common.c: Finished erasing 4 pages of 16384 (0x4000) bytes
        2019-10-21T01:30:33 INFO common.c: Starting Flash write for F2/F4/L4
        2019-10-21T01:30:33 INFO flash_loader.c: Successfully loaded flash loader in sram
        enabling 32-bit flash writes
        size: 32768
        size: 29596
        2019-10-21T01:30:34 INFO common.c: Starting verification of write complete
        2019-10-21T01:30:35 INFO common.c: Flash written and verified! jolly good!
        ---host_os:Win32
        [INFO]: Firmware upload succeed!

AliOS Things 系统已经封装好 RTOS 底层，上层原件按简化后的规范编写就可以，用户主程序入口就是 application_start() 函数，可以看到代码通过预处理条件做了兼容：

        int application_start(int argc, char *argv[])
        {
        #ifdef STM32L496xx
                // developerkit ...
        #else
                // add for st nucleo board , if debug on developerkit board, please comment it
                led_nucleo.port = GPIO_LED_NUCLEO;    /* gpio port config */
                led_nucleo.config = OUTPUT_PUSH_PULL; /* set as output mode */
                hal_gpio_init(&led_nucleo);           /* configure GPIO with the given settings */

                while (1)
                {
                         aos_msleep(1000);                /* Insert delay 1000 ms */
                         printf(" toggle led \n");
                         hal_gpio_output_toggle(&led_nucleo);
                }
        #endif
                aos_loop_run();
                return 0;
        }

AliOS Things 提供 printf() 函数来将调试信息输出到串口，程序下载到板卡运行后，可以通过 aos 监视调试信息。串口默认波特率使用 115200，查询到已连接设备后就可以将 aos 与设备建立连接，以监视或与设备互动，退出交互使用 Ctrl+]，Ctrl+T、Ctrl+H 查看帮助信息。

        $ aos devices
        [
                {
                        "product": null,
                        "name": null,
                        "vid": 1155,
                        "hwid": "USB VID:PID=0483:374B SER=8 LOCATION=1-1.1.3:x.2",
                        "description": "STMicroelectronics STLink Virtual COM Port (COM4)",
                        "pid": 14155,
                        "device": "COM4",
                        "location": "1-1.1.3:x.2",
                        "interface": null,
                        "serial_number": "8",
                        "manufacturer": "STMicroelectronics"
                }
        ]

        $ aos monitor COM4 115200

        --- Miniterm on COM4  115200,8,N,1 ---
        --- Quit: Ctrl+] | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H ---
        toggle led
        ...




## // GNU Arm Embedded Toolchain
- GNU Arm Embedded Toolchain https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm
- gcc-arm-none-eabi package in Ubuntu https://launchpad.net/ubuntu/+source/gcc-arm-none-eabi
- GNU Arm Embedded Toolchain https://launchpad.net/gcc-arm-embedded/+download
- binutils-arm-none-eabi https://packages.debian.org/jessie/gcc-arm-none-eabi


GNU 推出的的 ARM 交叉编译工具 GNU Arm Embedded Toolchain 是一个开源的 ARM 工具链，适用于 Cortex-M0/M0+/M3/M4, Cortex-R4/R5/R7 和 Cortex-A* 系列处理器，包括 GNU 编译器（GCC），以及GDB，可用于 Windows，Linux，MacOS 上的交叉编译。下载地址：

交叉编译工具链 gcc-arm-none-eabi 的命名规则为：

        arch [-vendor] [-os] [-(gnu)eabi]

- arch - 体系架构，如 ARM，MIPS
- vendor - 工具链提供商
- os - 目标操作系统
- eabi - 嵌入式应用二进制接口 Embedded Application Binary Interface

根据对操作系统的支持与否，ARM GCC 可分为支持和不支持操作系统：

- arm-none-eabi 这个是没有操作系统的，自然不可能支持那些跟操作系统关系密切的函数，比如 fork。他使用的是 newlib 这个专用于嵌入式系统的 C 库。
- arm-none-linux-eabi 用于 Linux 的，使用 Glibc
- arm-linux-gnueabi-gcc 可用于 ARM 架构交叉编译，包括裸机程序、u-boot、Linux kernel、filesystem。

工具链包含多大几十个命令行工具，这里介绍一下 gcc-arm-none-eabi 工具链基本使用方法，在终端中输入相应的命令来调用各种功能了。

- arm-none-eabi-gcc

        这是其中最重要的是编译工具，C 语言编译器，可以将 .c 文件转化为 .o 的目标文件，即在目标机器上运行的机器码，还需要经过链接才能形成完整可执行程序。如编译当前目录下的 hello.c 文件，生成 hello.o 文件：

                arm-none-eabi-gcc -c hello.c

- arm-none-eabi-g++

        这个是 c++ 语言编译器，可以将 .cpp 文件转化为 .o 的目标文件，使用方式同上。

- arm-none-eabi-ld

        这是链接器，即链接所有 .o 文件生成可执行文件的工具。一般不直接使用 arm-none-eabi-ld，而是通过 arm-none-eabi-gcc 编译器去调用。因为链接工具对 C/CPP 文件混合型生成的 .o 文件支持性不好，所以官方的说明书中也推荐使用 arm-none-eabi-gcc 指令来代替 arm-none-eabi-ld：

                arm-none-eabi-gcc -o  hello  hello.o

- arm-none-eabi-objcopy

        此工具将链接器生成的文件转化为 bin/hex 等烧写的格式，用以下载进入单片机

                arm-none-eabi-objcopy hello hello.bin

- arm-none-eabi-gdb

        工具链中的调试器，将它连接到调试器硬件产生的网络端口，就可以进行硬件和代码的调试了。GDB 是 GNU 下一个独特的调试软件，它具有很多自己的特性，也许大家无法想象使用命令行调试的景象，但是之后我们会看到它的强大。


一个完整的程序开发流程包含汇编/C等源代码的编译生成中间代码，再经过链接器进行处理，最后和官方提供的固件一起链接生成目标机器的可执行文件。

启动文件一般是由汇编写成，汇编文件的格式有 .S 和 .s 之分：

- 大写S：表明文件中含有预处理指令（比如#define），需要先进行处理；
- 小写s：表明文件不需要处理，可以直接编译；

如果使用的是 .S 文件，那么需要带上 -x assembler-with-cpp 参数，-c 只编译不链接。

        arm-none-eabi-gcc -c -mthumb -mcpu=cortex-m4 -g -Wa,--warn -o startup.o startup.s
        arm-none-eabi-gcc -c -mthumb -mcpu=cortex-m4 -g -Wall -o main.o main.c

链接重要的部分有两点：链接文件和传递给链接器的参数。链接文件在固件库中给的示例工程中有，官方的固件包中包含，可以参考 Templates/Example projec 目录下的例子。命令通过 -T 指定链接文件

        arm-none-eabi-gcc -o test.elf main.o startup.o -mthumb -mcpu=cortex-m4 -T stm32_flash.ld -specs=nosys.specs -static -Wl,-cref,-u,Reset_Handler -Wl,-Map=test.map -Wl,--gc-sections -Wl,--defsym=malloc_getpagesize_P=0x80 -Wl,--start-group -lc -lm -Wl,--end-group

利用 arm-none-eabi-objcopy 工具可以将 elf 文件转化为适合于单片机的 bin 文件和 hex 文件，其中参数 -O 用于指定输出文件的格式，默认是 bin 格式。

        arm-none-eabi-objcopy test.elf -O binary test.bin
        arm-none-eabi-objcopy test.elf -Oihex test.hex

一般工程化开发是通过 makefile 脚本进行自带化编译的：

        TARGET=test
        CC=arm-none-eabi-gcc
        OBJCOPY=arm-none-eabi-objcopy
        RM=rm -f
        CORE=3
        CPUFLAGS=-mthumb -mcpu=cortex-m$(CORE)
        LDFLAGS = -T stm32_flash.ld -Wl,-cref,-u,Reset_Handler -Wl,-Map=$(TARGET).map -Wl,--gc-sections -Wl,--defsym=malloc_getpagesize_P=0x80 -Wl,--start-group -lc -lm -Wl,--end-group
        CFLAGS=-g -o
        $(TARGET):startup.o main.o
                $(CC) $^ $(CPUFLAGS) $(LDFLAGS) $(CFLAGS) $(TARGET).elf
        startup.o:startup.s
                $(CC) -c $^ $(CPUFLAGS) $(CFLAGS) $@
        main.o:main.c
                $(CC) -c $^ $(CPUFLAGS) $(CFLAGS) $@

        bin:
                $(OBJCOPY) $(TARGET).elf $(TARGET).bin
        hex:
                $(OBJCOPY) $(TARGET).elf -Oihex $(TARGET).hex
        clean:
                $(RM) *.o $(TARGET).*

使用命令 make 编译生成 elf 文件；
使用命令 make bin将 elf 文件转化生成 bin 文件；
使用命令 make hex将 elf 文件转化生成 hex 文件；
使用命令 make clean 即可清除掉所有编译产生的文件。


开发一个 STM32 程序，就是一个简单的流水灯程序。

        #include "stm32f10x.h"

        int main(void)
        {
                        // int i; 
                        volatile int i; 
                        RCC->APB2ENR=0xFFFFFFFF;
                        GPIOC->CRL=0X33333333;//outpp at 50M
                        GPIOC->CRH=0X33333333;
                        while(1)
                        {
                                        GPIOC->BSRR=(1ul<<13);
                                        for(i=0;i<720000;i++);
                                        GPIOC->BRR=(1ul<<13);
                                        for(i=0;i<720000;i++);
                        }
        }

编译.c文件的命令行： -Wall -mcpu=cortex-m3 -march=armv7-m -mthumb -Os -Wl,--gc-sections -g -DSTM32F10X_MD -DUSE_STDPERIPH_DRIVER
编译启动文件的命令行：-mcpu=cortex-m3 -march=armv7-m -mthumb

使用 gcc 编译器对于像延时这样的操作，需要加 volatile 修饰变量避免被优化程序处理掉

        // int i; 
        volatile int i; 


## // GNU Make
GNU Make Manual: http://www.gnu.org/software/make/manual/
GNU Make 中文手册: https://www.cnblogs.com/AbeDay/p/5026844.html
Make 命令教程: http://www.ruanyifeng.com/blog/2015/02/make.html

Make 是自动化编译/项目管理工具，可自动决定一个大程序中哪些文件需要重新编译，并发布重新编译它们的命令。

Make 并不局限处理某种语言程序，它可以处理那些编译器能够在 Shell 命令下运行的的各种语言的程序。事实上，GNU Make不仅仅限于程序，它可以适用于任何如果一些文件变化导致另外一些文件必须更新的任务。

如果要使用 Make，必须先写一个称为 Makefile 的文件，该文件描述程序中各个文件之间的相互关系，并且提供每一个文件的更新命令。在一个程序中，可执行程序文件的更新依靠 OBJ 文件，而 OBJ 文件是由源文件编译得来的。

Makefile 文件告诉 make 命令需要怎么样的去编译和链接程序，很多自动化编译工具如 Ant，Maven，Gradle 都有自己专属的、能高效配置依赖关系的方法。

目前市面上主要流行的 Make 有以下几种版本：

- GNU make，对 make 的标准功能进行了重新改写，并加入作者自认为值得加入的新功能，常和 GNU 编译系统一起被使用，是大多数 GNU Linux 默认安装的工具。
- BSD make，该版本是从 Adam de Boor 制作的版本上发展起来的。它在编译目标的时有并发计算的能力。主要应用于 FreeBSD，NetBSD 和 OpenBSD 这些系统。
- Microsoft nmake，该版本主要用于微软的 Windows 系统中，需要注意的是，微软的 nmake 与 Unix 项目中的 nmake 是两种不同的东西，千万不要混淆。

一旦合适的 Makefile 文件存在，每次更改一些源文件，在shell命令下简单的键入：

        make

就能执行所有的必要的重新编译任务，根据 Makefile文件中的数据和每个文件更改的时间戳决定哪些文件需要更新。对于这些需要更新的文件，Make 基于 Makefile 文件发布命令进行更新，进行更新的方式由提供的命令行参数控制。

规则文件 Makefile 也可以通过选项 -f、--file 或者 --makefile 指定，如 -f altmake 就是说用 altmake 作为 makefile 执行。

以下示例以 GNU Make 3.81 版本演示。

### Makefile Demo

学习一个简化版的 Makefile:

        edit : main.o kbd.o command.o display.o insert.o search.o files.o utils.o
                        cc -o edit main.o kbd.o command.o display.o insert.o search.o files.o utils.o

        main.o : main.c defs.h
                        cc -c main.c
        kbd.o : kbd.c defs.h command.h
                        cc -c kbd.c
        command.o : command.c defs.h command.h
                        cc -c command.c
        display.o : display.c defs.h buffer.h
                        cc -c display.c
        insert.o : insert.c defs.h buffer.h
                        cc -c insert.c
        search.o : search.c defs.h buffer.h
                        cc -c search.c
        files.o : files.c defs.h buffer.h command.h
                        cc -c files.c
        utils.o : utils.c defs.h
                        cc -c utils.c
        clean :
                        rm edit *.o

Makefile文件由一系列规则（rules）构成。每条规则的形式如下。

        targets : prerequisites
                        recipe
                        …

        targets : prerequisites ; recipe
                        recipe
                        …

        targets : normal-prerequisites | order-only-prerequisites

        targets …: target-pattern: prereq-patterns …
                        recipe
                        …

        # Syntax of Static Pattern Rules
        targets …: target-pattern: prereq-patterns …
                        recipe

- targets: 目标文件，可以是要编译生成的文件，或 Object File，也可以是执行文件，还可以是一个标签 Label。
- prerequisites: 先决条件，要生成 target 所需要的文件或是目标。
- recipe: make 需要执行的 Shell 命令

makefile 里不要乱用 TAB，只有命令所在的行才能且只能以 TAB 开头，可以缩进多个 TAB！其他的如 make 变量的定义、赋值，make内定函数如 $(error "strings") 都不能以TAB开头，不然 make 会将其作为命令来处理，引发错误 Makefile missing separator. Stop.

注解用 # 号开头。

一个目标 target 就构成一条规则。

目标通常是文件名，指明 Make 命令所要构建的对象，比如上文的 main.o。可以是一个文件名，也可以是多个文件名，之间用空格分隔，还可通过变量来指定多个目标文件如 $(OBJS)，假设 OBJS 变量是文件名列表。目标还可以是某个操作的名字，这称为伪目标 Phony Target。如 clean 这个目标，作用是删除对象文件，它不是文件名，而是一个操作的名字，属于伪目标。

        clean:
                    rm edit *.o

生成或者说执行目标：

        $ make  clean

但是，如果当前目录中，正好有一个文件叫做 clean，那么这个命令不会执行。因为 Make 发现 clean 文件已经存在，就认为没有必要重新构建了，就不会执行指定的 rm 命令。

为了避免这种情况，可以明确声明 clean 是伪目标 PHONY：


        .PHONY: clean
        clean:
                        rm edit *.o

声明 clean 是伪目标之后，make 就不会去检查是否存在一个叫做 clean 的文件，而是每次运行都执行对应的命令。像 .PHONY 这样的内置目标名还有不少，可以查看手册。

如果 Make 命令运行时没有指定目标，默认会执行 Makefile 文件的第一个目标，也就是 edit。这个目标有依赖多个 .o 目标文件，所以会执行一系列的编译动作。




### Variable 变量

打印变量内容

采用 info 函数显示内部变量 $(info $(variable_name))，以下列子打印 FOO 变量：

        FOO = bar
        $(info $(FOO))


从命令行输入变量内容，即可以从命令行修改变量值

        BUILD_DEBUG := yes
        # $(info BUILD_DEBUG is $(BUILD_DEBUG))

        .PHONY: all
        all:
                @echo BUILD_DEBUG is $(BUILD_DEBUG)


运行结果:

        $ make
        BUILD_DEBUG is yes

        $ make BUILD_DEBUG=no
        BUILD_DEBUG is no

变量是一个名字，代表一个文本字符串即变量的值。在 Makefile 的目标、依赖、命令中引用变量的地方，变量会被它的值所取代。

定义了一个变量之后，就可以通过 $(VARIABLE_NAME) 或者 ${VARIABLE_NAME} 来引用变量定义的值。美元符号 $ 在 Makefile 中有特殊的含义，在命令或者文件名中使用 $ 字符时需要用两个美元符号 $$ 表示。

注意，Makefile 中可以直接使用 $x 的格式来引用变量，此种用法仅限于变量名为单字符的情况，自动化变量也使用这种格式。

对于一般多字符变量的引用必须使用括号了标记，否则 make 将把变量名的首字母作为作为变量而不是整个字符串 $PATH 在 Makefile 中实际上是 $(P)ATH，这一点和 shell 中变量的引用方式不同。 shell 中变量的引用可以是 ${xx} 或者 $xx 格式。但在 Makefile 中多字符变量名的引用只能是 $(xx) 或者 ${xx} 格式。

变量定义、赋值格式参考：

        immediate = deferred
        immediate ?= deferred
        immediate := immediate
        immediate ::= immediate
        immediate += deferred or immediate
        immediate != immediate

        define immediate
            deferred
        endef

        define immediate =
            deferred
        endef

        define immediate ?=
            deferred
        endef

        define immediate :=
            immediate
        endef

        define immediate ::=
            immediate
        endef

        define immediate +=
            deferred or immediate
        endef

        define immediate !=
            immediate
        endef

变量有以下几个特征：

1. Makefile 中变量和函数的展开是在 make 读取 makefile 文件时进行的，包括使用 = 定义和使用指示符 define 定义的变量，但规则命令行中的变量和函数除外。
2. 变量可以用来代表一个文件名列表、编译选项列表、程序运行的选项参数列表、搜索源文件的目录列表、编译输出的目录列表和所有我们能够想到的事物。
3. 变量名是不包括 :#= 这几个符合，也不能前置空白和尾空白。尽管在GNU make中没有对变量的命名有其它的限制，但定义一个包含除字母、数字和下划线以外的变量的做法也是不可取的。
4. 变量名大小写敏感，Makefile 传统做法是变量名是全采用大写的方式。推荐的做法是在对于内部定义定义的一般变量使用小写方式，而对于一些参数列表如编译选项 CFLAGS 采用大写方式，但这并不是要求的。
5. 特殊变量 $<、 $@、 $?、 $* 等是自动化宏变量。

- 递归展开式

        第一种风格的变量是递归方式扩展的变量。这一类型变量的定义是通过 = 或者使用指示符 define 定义的。这种变量的引用，在引用的地方是严格的文本替换过程，此变量值的字符串原模原样的出现在引用它的地方。如果此变量定义中存在对其他变量的引用，这些被引用的变量会在它被展开的同时被展开。就是说在变量定义时，变量值中对其他变量的引用不会被替换展开；而是变量在引用它的地方替换展开的同时，它所引用的其它变量才会被一同替换展开。
        
        使用 define 指示符可以定义一个包含多行字符串的变量，我们就是利用它的这个特点实现了一个完整命令包的定义。

                define two-lines
                        echo foo
                        echo $(bar)
                endef

        如果将变量 two-lines 作为命令包执行时，其相当于：

                two-lines = echo foo; echo $(bar)

        使用 define 定义的变量和使用 = 定义的变量一样，属于递归展开式的变量，两者只是在语法上不同。

- 直接展开式

        为了避免递归展开式变量存在的问题和不方便，GNU make 支持另外一种风格的变量，称为直接展开式 :=。使用直接展开式定义变量时，变量值中引用的变量或者函数会直接被展开，即在定义时对变量进行替换。所以变量被定义后就是文本串，其中不再包含任何变量的引用，不会有后续的变化。

- 条件赋值式

        GNU make 中，还有一个被称为条件赋值的赋值操作符 ?=，只有此变量在之前没有赋值的情况下才会对这个变量进行赋值。

在 Makefile 中使用 += 来实现对一个变量值的追加操作，将字符串拼接起来。通常，一个通用变量在定义之后的其他一个地方，可以对其值进行追加。定义变量时给它赋一个基本值，后续根据需要可随时对它的值进行追加，也可以不定义而直接追加。

### Automatic Variables

在这里介绍一下自动变量的用法：

        # Target-specific Variable Values
        target … : variable-assignment

        # Pattern-specific Variable Values
        pattern … : variable-assignment

如例子：

        %.o : CFLAGS = -O

将会所有匹配到 %.o 的目标文件设置 CFLAGS = -O。

        prog : CFLAGS = -g
        prog : prog.o foo.o bar.o

以上脚本会为 prog 目标的 recipe 设置 CFLAGS = -g，同时 prog.o, foo.o, bar.o 等目标也一样，这样在运行命令是就可以获得合适的 CFLAGS。 

        DEPS := demo.h
        OBJDIR := objdir
        OBJS := $(addprefix $(OBJDIR)/,foo.o bar.o)

        %.o: CFLAGS := -g
        $(OBJDIR)/foo.o: CFLAGS := -G

        %.o : %.c $(DEPS)
                @echo try compile first prerequisite [$<] [$^]

        all: $(OBJS)
                @echo make $@ from objects: $^

        $(OBJS): | $(OBJDIR)
                @echo make object: $@ $(CFLAGS)

        $(OBJDIR):
        #   mkdir $(OBJDIR)
        #   cmd /c md $(OBJDIR)
                @echo try to make directory

- %.o: %.c 这是一个模式规则，表示所有的 .o 目标都依赖于与它同名的 .c 文件，当然还有 DEPS 中列出的头文件。% 表示通配符，位置也可以放在后面。
- $< 代表的是依赖关系表中的第一项，如果我们想引用的是整个关系表，那么就应该使用 $^，这里就是 %.c。
- $@ 代表的是当前语句的目标，即 %.o 所指的目标。这样一来，make 命令就会自动将所有的 .c 源文件编译成同名的 .o 文件。

使用自动变量的最大好处就是不用为多个目标一项一项去写脚本，整个代码自然简洁了许多。

以下是自动变量，在 recipe 中表示特定的内容：

- `$@` The file name of the target of the rule. 
- `$%` The target member name, when the target is an archive member. 
- `$<` The name of the first prerequisite. 
- `$?` The names of all the prerequisites that are newer than the target, with spaces between them.
- `$^` The names of all the prerequisites, with spaces between them. 
- `$+` This is like $^, but prerequisites listed more than once are duplicated in the order they were listed in the makefile.
- `$|` The names of all the order-only prerequisites, with spaces between them.
- `$*` The stem with which an implicit rule matches. 
- `$?` is useful even in explicit rules when you wish to operate on only the prerequisites that have changed. 

以下是对自动变量的修饰：

- `$(@D)` The directory part of the file name of the target, with the trailing slash removed.
- `$(@F)` The file-within-directory part of the file name of the target.
- `$(*D)` `$(*F)` The directory part and the file-within-directory part of the stem; dir and foo in this example.
- `$(%D)` `$(%F)` The directory part and the file-within-directory part of the target archive member name. 
- `$(<D)` `$(<F)` The directory part and the file-within-directory part of the first prerequisite.
- `$(^D)` `$(^F)` Lists of the directory parts and the file-within-directory parts of all prerequisites.
- `$(+D)` `$(+F)` Lists of the directory parts and the file-within-directory parts of all prerequisites, including duplicated prerequisites.
- `$(?D)` `$(?F)` Lists of the directory parts and the file-within-directory parts of all prerequisites that are newer than the target.



### function 函数

在 Makefile 中可以使用函数来处理变量，从而让我们的命令或是规则更为的灵活和具有智能。函数调用后，函数的返回值可以当做变量来使用。

函数的调用语法
函数调用，很像变量的使用，也是以$来标识的，其語法如下：

        $(<function> <arguments>)
        ${<function> <arguments>}

这里 <function> 就是函数名，<arguments> 为函数的参数，参数间以逗号分隔，而函数名和参数之间以空格分隔。函数调用以 $ 开头，以圆括号或花括号把函数名和参数括起。函数中的参数可以使用变量，为了风格的统一，函数和变量的括号最好一样，如使用 subst 字符处理函数 $(subst a,b,$(x)) 这样的形式，而不是 $(subst a,b, ${x}) 的形式。

函数分类：

- Syntax of Functions:      How to write a function call.
- Text Functions:       General-purpose text manipulation functions.
- File Name Functions:      Functions for manipulating file names.
- Conditional Functions:    Functions that implement conditions.
- Foreach Function:     Repeat some text with controlled variation.
- File Function:        Write text to a file.
- Call Function:        Expand a user-defined function.
- Value Function:       Return the un-expanded value of a variable.
- Eval Function:        Evaluate the arguments as makefile syntax.
- Origin Function:      Find where a variable got its value.
- Flavor Function:      Find out the flavor of a variable.
- Make Control Functions:       Functions that control how make runs.
- Shell Function:       Substitute the output of a shell command.
- Guile Function:       Use GNU Guile embedded scripting language.

字符串处理函数

如字符替换函数 subst:

        contents := $(subst an apple,a pie,Make an apple)
        $(info $(contents))
        # Make an apple => Make a pie

模式字符串替换函数 patsubst 使用模式 pattern 匹配待处理的字符串，匹配的内容则以 replacement 替换。通配符 % 表示任意长度的字串。replacement 可以通过 % 来引用 pattern 中 % 所代表的字串。可以用 \% 来转义表示百分号 %

        contents := $(patsubst s%e,box(%),a shape for test)
        $(info $(contents))
        # a box(hap) for test

- $(subst from,to,text) Performs a textual replacement on the text text:
- $(patsubst pattern,replacement,text) Finds whitespace-separated words in text that match pattern and replaces them with replacement.
- $(strip string) Removes leading and trailing whitespace from string and replaces each internal sequence of one or more whitespace characters with a single space. 
- $(findstring find,in) Searches in for an occurrence of find.
- $(filter pattern…,text) Returns all whitespace-separated words in text that do match any of the pattern words, removing any words that do not match. 
- $(filter-out pattern…,text) Returns all whitespace-separated words in text that do not match any of the pattern words, removing the words that do match one or more. 
- $(sort list) Sorts the words of list in lexical order, removing duplicate words.
- $(word n,text) Returns the nth word of text.
- $(wordlist s,e,text) Returns the list of words in text starting with word s and ending with word e (inclusive).
- $(words text) Returns the number of words in text. Thus, the last word of text is $(word $(words text),text).
- $(firstword names…) The argument names is regarded as a series of names, separated by whitespace.
- $(lastword names…) The argument names is regarded as a series of names, separated by whitespace.


文件命处理函数

- $(dir names…) Extracts the directory-part of each file name in names.
- $(notdir names…) Extracts all but the directory-part of each file name in names.
- $(suffix names…) Extracts the suffix of each file name in names.
- $(basename names…) Extracts all but the suffix of each file name in names.
- $(addsuffix suffix,names…) The argument names is regarded as a series of names, separated by whitespace; suffix is used as a unit.
- $(addprefix prefix,names…) The argument names is regarded as a series of names, separated by whitespace; prefix is used as a unit.
- $(join list1,list2) Concatenates the two arguments word by word. For example, ‘$(join a b,.c .o)’ produces ‘a.c b.o’.
- $(wildcard pattern) The argument pattern is a file name pattern, typically containing wildcard characters.
- $(realpath names…) For each file name in names return the canonical absolute name.
- $(abspath names…) For each file name in names return an absolute name that does not contain any . or .. components, nor any repeated path separators (/).

例如目录函数 dir 从文件名序列 names 中取出目录部，即最后一个斜杠 / 之前的部分，如果没有斜杠，那么返回 ./。

        $(dir <names...>)


文件函数 file 可以对文件进行读写操作，会自动创建文件，支持 overwrite/append 两种方式，对应操作符合 op 分别是 > 和 >>，读入操作对应符合 < 操作符合和文件名可以不留空格。

        $(file op filename[,text])

以下例子结合自动变量 $@ 来演示文件读写函数的使用，$@ 就是引用当前 target 的名称，后面的写法增加了 foreach 循环，会将数据写入独立的行。

        program: $(OBJECTS)
                        $(file >$@.in,$^)
                        $(CMD) $(CMDFLAGS) @$@.in
                        @rm $@.in

        separate: $(OBJECTS)
                        $(file >$@.in) $(foreach O,$^,$(file >>$@.in,$O))
                        $(CMD) $(CMDFLAGS) @$@.in
                        @rm $@.in


Value 函数提供了一个获取未扩展的变量值的方式，如例子，FOO 变量得到扩展后的值是 ATH，因为 $P 会经过扩展得到空字符。而 $(value FOO) 获取的是未扩展的变量，即 PATH。

        FOO = $PATH

        all:
                @echo $(FOO)
                @echo $(value FOO)


Foreach 函数

        # $(foreach var,list,text)
        dirs := a b c d
        files := $(foreach dir,$(dirs),$(wildcard $(dir)/*))

条件函数

- $(if condition,then-part[,else-part]) The if function provides support for conditional expansion in a functional context.
- $(or condition1[,condition2[,condition3…]]) The or function provides a “short-circuiting” OR operation. 
- $(and condition1[,condition2[,condition3…]]) The and function provides a “short-circuiting” AND operation.


Call 函数是唯一一个可以用来创建新的参数化的函数。你可以写一个非常复杂的表达式，这个表达式中，你可以定义许多参数，然后你可以用call函数来向这个表达式传递参数。其语法是：

        $(call <expression>,<parm1>,<parm2>,<parm3>,...)

当 make 执行这个函数时，expression 返回值就是 call 函数的返回值。例如：

        reverse =  $(1) $(2)
        foo = $(call reverse,a,b)

那么，foo 的值就是“a b”。

Origin 函数并不操作变量的值，他只是告诉你你的这个变量是哪里来的，如 $(origin variable) 根据变量的赋值发生位置，其返回值可以是 command line、environment、automatic 或者 file 等等。

Shell 函数是操作系统 Shell 的命令，它和反引号即 ~ 按键上那个符合是相同的功能。shell 函数把执行操作系统命令后的输出作为函数返回。

        contents := $(shell cmd /c echo foo)
        .PHONY: all
        all:
                @echo Shell return $(contents)
                @echo $(shell echo Shell echo $(contents))


另外还有一些 Make Control Functions 函数用来控制 make 的运行。通常，你需要检测一些运行 Makefile 时的运行时信息，并且根据这些信息来决定，你是让 make 继续执行，还是停止。

        $(info text…)
        $(warning text…)
        $(error text…)


Cortex-M3 Hello
==================
http://www.21ic.com/jichuzhishi/mcu/questions/2017-06-07/723577.html

        当前的嵌入式应用程序开发过程里，并且C语言成为了绝大部分场合的最佳选择。如此一来main函数似乎成为了理所当然的起点——因为C程序往往从main函数开始执行。但一个经常会被忽略的问题是：微控制器(单片机)上电后，是如何寻找到并执行main函数的呢?很显然微控制器无法从硬件上定位main函数的入口地址，因为使用C语言作为开发语言后，变量/函数的地址便由编译器在编译时自行分配，这样一来main函数的入口地址在微控制器的内部存储空间中不再是绝对不变的。相信读者都可以回答这个问题，答案也许大同小异，但肯定都有个关键词，叫“启动文件”，用英文单词来描述是“Bootloader”。

        无论性能高下，结构简繁，价格贵贱，每一种微控制器(处理器)都必须有启动文件，启动文件的作用便是负责执行微控制器从“复位”到“开始执行main函数”中间这段时间(称为启动过程)所必须进行的工作。最为常见的51，AVR或MSP430等微控制器当然也有对应启动文件，但开发环境往往自动完整地提供了这个启动文件，不需要开发人员再行干预启动过程，只需要从main函数开始进行应用程序的设计即可。

        话题转到STM32微控制器，无论是keiluvision4还是IAR EWARM开发环境，ST公司都提供了现成的直接可用的启动文件，程序开发人员可以直接引用启动文件后直接进行C应用程序的开发。这样能大大减小开发人员从其它微控制器平台跳转至STM32平台，也降低了适应STM32微控制器的难度(对于上一代ARM的当家花旦ARM9，启动文件往往是第一道难啃却又无法逾越的坎)。

        相对于ARM上一代的主流ARM7/ARM9内核架构，新一代Cortex内核架构的启动方式有了比较大的变化。ARM7/ARM9内核的控制器在复位后，CPU会从存储空间的绝对地址0x000000取出第一条指令执行复位中断服务程序的方式启动，即固定了复位后的起始地址为0x000000(PC = 0x000000)同时中断向量表的位置并不是固定的。而Cortex-M3内核则正好相反，有3种情况:

        1、通过boot引脚设置可以将中断向量表定位于SRAM区，即起始地址为0x2000000，同时复位后PC指针位于0x2000000处;

        2、通过boot引脚设置可以将中断向量表定位于FLASH区，即起始地址为0x8000000，同时复位后PC指针位于0x8000000处;

        3、通过boot引脚设置可以将中断向量表定位于内置Bootloader区，本文不对这种情况做论述;

        而Cortex-M3内核规定，起始地址必须存放堆顶指针，而第二个地址则必须存放复位中断入口向量地址，这样在Cortex-M3内核复位后，会自动从起始地址的下一个32位空间取出复位中断入口向量，跳转执行复位中断服务程序。对比ARM7/ARM9内核，Cortex-M3内核则是固定了中断向量表的位置而起始地址是可变化的。

        有了上述准备只是后，下面以STM32的2.02固件库提供的启动文件“stm32f10x_vector.s”为模板，对STM32的启动过程做一个简要而全面的解析。

        程序清单一：

        ;文件“stm32f10x_vector.s”，其中注释为行号

        DATA_IN_ExtSRAM EQU 0 ;1

        Stack_Size EQU 0x00000400 ;2

        AREA STACK, NOINIT, READWRITE, ALIGN = 3 ;3

        Stack_Mem SPACE Stack_Size ;4

        __initial_sp ;5

        Heap_Size EQU 0x00000400 ;6

        AREA HEAP, NOINIT, READWRITE, ALIGN = 3 ;7

        __heap_base ;8

        Heap_Mem SPACE Heap_Size ;9

        __heap_limit ;10

        THUMB ;11

        PRESERVE8 ;12

        IMPORT NMIException ;13

        IMPORT HardFaultException ;14

        IMPORT MemManageException ;15

        IMPORT BusFaultException ;16

        IMPORT UsageFaultException ;17

        IMPORT SVCHandler ;18

        IMPORT DebugMonitor ;19

        IMPORT PendSVC ;20

        IMPORT SysTickHandler ;21

        IMPORT WWDG_IRQHandler ;22

        IMPORT PVD_IRQHandler ;23

        IMPORT TAMPER_IRQHandler ;24

        IMPORT RTC_IRQHandler ;25

        IMPORT FLASH_IRQHandler ;26

        IMPORT RCC_IRQHandler ;27

        IMPORT EXTI0_IRQHandler ;28

        IMPORT EXTI1_IRQHandler ;29

        IMPORT EXTI2_IRQHandler ;30

        IMPORT EXTI3_IRQHandler ;31

        IMPORT EXTI4_IRQHandler ;32

        IMPORT DMA1_Channel1_IRQHandler ;33

        IMPORT DMA1_Channel2_IRQHandler ;34

        IMPORT DMA1_Channel3_IRQHandler ;35

        IMPORT DMA1_Channel4_IRQHandler ;36

        IMPORT DMA1_Channel5_IRQHandler ;37

        IMPORT DMA1_Channel6_IRQHandler ;38

        IMPORT DMA1_Channel7_IRQHandler ;39

        IMPORT ADC1_2_IRQHandler ;40

        IMPORT USB_HP_CAN_TX_IRQHandler ;41

        IMPORT USB_LP_CAN_RX0_IRQHandler ;42

        IMPORT CAN_RX1_IRQHandler ;43

        IMPORT CAN_SCE_IRQHandler ;44

        IMPORT EXTI9_5_IRQHandler ;45

        IMPORT TIM1_BRK_IRQHandler ;46

        IMPORT TIM1_UP_IRQHandler ;47

        IMPORT TIM1_TRG_COM_IRQHandler ;48

        IMPORT TIM1_CC_IRQHandler ;49

        IMPORT TIM2_IRQHandler ;50

        IMPORT TIM3_IRQHandler ;51

        IMPORT TIM4_IRQHandler ;52

        IMPORT I2C1_EV_IRQHandler;53

        IMPORT I2C1_ER_IRQHandler;54

        IMPORT I2C2_EV_IRQHandler;55

        IMPORT I2C2_ER_IRQHandler;56

        IMPORT SPI1_IRQHandler ;57

        IMPORT SPI2_IRQHandler ;58

        IMPORT USART1_IRQHandler ;59

        IMPORT USART2_IRQHandler ;60

        IMPORT USART3_IRQHandler ;61

        IMPORT EXTI15_10_IRQHandler ;62

        IMPORT RTCAlarm_IRQHandler ;63

        IMPORT USBWakeUp_IRQHandler ;64

        IMPORT TIM8_BRK_IRQHandler ;65

        IMPORT TIM8_UP_IRQHandler ;66

        IMPORT TIM8_TRG_COM_IRQHandler ;67

        IMPORT TIM8_CC_IRQHandler ;68

        IMPORT ADC3_IRQHandler ;69

        IMPORT FSMC_IRQHandler ;70

        IMPORT SDIO_IRQHandler ;71

        IMPORT TIM5_IRQHandler ;72

        IMPORT SPI3_IRQHandler ;73

        IMPORT UART4_IRQHandler ;74

        IMPORT UART5_IRQHandler ;75

        IMPORT TIM6_IRQHandler ;76

        IMPORT TIM7_IRQHandler ;77

        IMPORT DMA2_Channel1_IRQHandler ;78

        IMPORT DMA2_Channel2_IRQHandler ;79

        IMPORT DMA2_Channel3_IRQHandler ;80

        IMPORT DMA2_Channel4_5_IRQHandler ;81

        AREA RESET, DATA, READONLY ;82

        EXPORT __Vectors ;83

        __Vectors ;84

        DCD __initial_sp ;85

        DCD Reset_Handler ;86

        DCD NMIException ;87

        DCD HardFaultException ;88

        DCD MemManageException ;89

        DCD BusFaultException ;90

        DCD UsageFaultException ;91

        DCD 0 ;92

        DCD 0 ;93

        DCD 0 ;94

        DCD 0 ;95

        DCD SVCHandler ;96

        DCD DebugMonitor ;97

        DCD 0 ;98

        DCD PendSVC ;99

        DCD SysTickHandler ;100

        DCD WWDG_IRQHandler ;101

        DCD PVD_IRQHandler ;102

        DCD TAMPER_IRQHandler ;103

        DCD RTC_IRQHandler ;104

        DCD FLASH_IRQHandler ;105

        DCD RCC_IRQHandler ;106

        DCD EXTI0_IRQHandler ;107

        DCD EXTI1_IRQHandler ;108

        DCD EXTI2_IRQHandler ;109

        DCD EXTI3_IRQHandler ;110

        DCD EXTI4_IRQHandler ;111

        DCD DMA1_Channel1_IRQHandler ;112

        DCD DMA1_Channel2_IRQHandler ;113

        DCD DMA1_Channel3_IRQHandler ;114

        DCD DMA1_Channel4_IRQHandler ;115

        DCD DMA1_Channel5_IRQHandler ;116

        DCD DMA1_Channel6_IRQHandler ;117

        DCD DMA1_Channel7_IRQHandler ;118

        DCD ADC1_2_IRQHandler ;119

        DCD USB_HP_CAN_TX_IRQHandler ;120

        DCD USB_LP_CAN_RX0_IRQHandler ;121

        DCD CAN_RX1_IRQHandler ;122

        DCD CAN_SCE_IRQHandler ;123

        DCD EXTI9_5_IRQHandler ;124

        DCD TIM1_BRK_IRQHandler ;125

        DCD TIM1_UP_IRQHandler ;126

        DCD TIM1_TRG_COM_IRQHandler ;127

        DCD TIM1_CC_IRQHandler ;128

        DCD TIM2_IRQHandler ;129

        DCD TIM3_IRQHandler ;130

        DCD TIM4_IRQHandler ;131

        DCD I2C1_EV_IRQHandler;132

        DCD I2C1_ER_IRQHandler;133

        DCD I2C2_EV_IRQHandler;134

        DCD I2C2_ER_IRQHandler;135

        DCD SPI1_IRQHandler ;136

        DCD SPI2_IRQHandler ;137

        DCD USART1_IRQHandler ;138

        DCD USART2_IRQHandler ;139

        DCD USART3_IRQHandler ;140

        DCD EXTI15_10_IRQHandler ;141

        DCD RTCAlarm_IRQHandler ;142

        DCD USBWakeUp_IRQHandler ;143

        DCD TIM8_BRK_IRQHandler ;144

        DCD TIM8_UP_IRQHandler ;145

        DCD TIM8_TRG_COM_IRQHandler ;146

        DCD TIM8_CC_IRQHandler ;147

        DCD ADC3_IRQHandler ;148

        DCD FSMC_IRQHandler ;149

        DCD SDIO_IRQHandler ;150

        DCD TIM5_IRQHandler ;151

        DCD SPI3_IRQHandler ;152

        DCD UART4_IRQHandler ;153

        DCD UART5_IRQHandler ;154

        DCD TIM6_IRQHandler ;155

        DCD TIM7_IRQHandler ;156

        DCD DMA2_Channel1_IRQHandler ;157

        DCD DMA2_Channel2_IRQHandler ;158

        DCD DMA2_Channel3_IRQHandler ;159

        DCD DMA2_Channel4_5_IRQHandler ;160

        AREA |.text|, CODE, READONLY ;161

        Reset_Handler PROC ;162

        EXPORT Reset_Handler ;163

        IF DATA_IN_ExtSRAM == 1 ;164

        LDR R0,= 0x00000114 ;165

        LDR R1,= 0x40021014 ;166

        STR R0,[R1] ;167

        LDR R0,= 0x000001E0 ;168

        LDR R1,= 0x40021018 ;169

        STR R0,[R1] ;170

        LDR R0,= 0x44BB44BB ;171

        LDR R1,= 0x40011400 ;172

        STR R0,[R1] ;173

        LDR R0,= 0xBBBBBBBB ;174

        LDR R1,= 0x40011404 ;175

        STR R0,[R1] ;176

        LDR R0,= 0xB44444BB ;177

        LDR R1,= 0x40011800 ;178

        STR R0,[R1] ;179

        LDR R0,= 0xBBBBBBBB ;180

        LDR R1,= 0x40011804 ;181

        STR R0,[R1] ;182

        LDR R0,= 0x44BBBBBB ;183

        LDR R1,= 0x40011C00 ;184

        STR R0,[R1] ;185

        LDR R0,= 0xBBBB4444 ;186

        LDR R1,= 0x40011C04 ;187

        STR R0,[R1] ;188

        LDR R0,= 0x44BBBBBB ;189

        LDR R1,= 0x40012000 ;190

        STR R0,[R1] ;191

        LDR R0,= 0x44444B44 ;192

        LDR R1,= 0x40012004 ;193

        STR R0,[R1] ;194

        LDR R0,= 0x00001011 ;195

        LDR R1,= 0xA0000010 ;196

        STR R0,[R1] ;197

        LDR R0,= 0x00000200 ;198

        LDR R1,= 0xA0000014 ;199

        STR R0,[R1] ;200

        ENDIF ;201

        IMPORT __main ;202

        LDR R0, =__main ;203

        BX R0 ;204

        ENDP ;205

        ALIGN ;206

        IF :DEF:__MICROLIB ;207

        EXPORT __initial_sp ;208

        EXPORT __heap_base ;209

        EXPORT __heap_limit ;210

        ELSE ;211

        IMPORT __use_two_region_memory ;212

        EXPORT __user_initial_stackheap ;213

        __user_initial_stackheap ;214

        LDR R0, = Heap_Mem ;215

        LDR R1, = (Stack_Mem + Stack_Size) ;216

        LDR R2, = (Heap_Mem + Heap_Size) ;217

        LDR R3, = Stack_Mem ;218

        BX LR ;219

        ALIGN ;220

        ENDIF ;221

        END ;222

        ENDIF ;223

        END ;224

        如程序清单一，STM32的启动代码一共224行，使用了汇编语言编写，这其中的主要原因下文将会给出交代。现在从第一行开始分析：

        ? 第1行：定义是否使用外部SRAM，为1则使用，为0则表示不使用。此语行若用C语言表达则等价于：

        #define DATA_IN_ExtSRAM 0

        ? 第2行：定义栈空间大小为0x00000400个字节，即1Kbyte。此语行亦等价于：

        #define Stack_Size 0x00000400

        ? 第3行：伪指令AREA，表示

        ? 第4行：开辟一段大小为Stack_Size的内存空间作为栈。

        ? 第5行：标号__initial_sp，表示栈空间顶地址。

        ? 第6行：定义堆空间大小为0x00000400个字节，也为1Kbyte。

        ? 第7行：伪指令AREA，表示

        ? 第8行：标号__heap_base，表示堆空间起始地址。

        ? 第9行：开辟一段大小为Heap_Size的内存空间作为堆。

        ? 第10行：标号__heap_limit，表示堆空间结束地址。

        ? 第11行：告诉编译器使用THUMB指令集。

        ? 第12行：告诉编译器以8字节对齐。

        ? 第13—81行：IMPORT指令，指示后续符号是在外部文件定义的(类似C语言中的全局变量声明)，而下文可能会使用到这些符号。

        ? 第82行：定义只读数据段，实际上是在CODE区(假设STM32从FLASH启动，则此中断向量表起始地址即为0x8000000)

        ? 第83行：将标号__Vectors声明为全局标号，这样外部文件就可以使用这个标号。

        ? 第84行：标号__Vectors，表示中断向量表入口地址。

        ? 第85—160行：建立中断向量表。

        ? 第161行：

        ? 第162行：复位中断服务程序，PROC…ENDP结构表示程序的开始和结束。

        ? 第163行：声明复位中断向量Reset_Handler为全局属性，这样外部文件就可以调用此复位中断服务。

        ? 第164行：IF…ENDIF为预编译结构，判断是否使用外部SRAM，在第1行中已定义为“不使用”。

        ? 第165—201行：此部分代码的作用是设置FSMC总线以支持SRAM，因不使用外部SRAM因此此部分代码不会被编译。

        ? 第202行：声明__main标号。

        ? 第203—204行：跳转__main地址执行。

        ? 第207行：IF…ELSE…ENDIF结构，判断是否使用DEF:__MICROLIB(此处为不使用)。

        ? 第208—210行：若使用DEF:__MICROLIB，则将__initial_sp，__heap_base，__heap_limit亦即栈顶地址，堆始末地址赋予全局属性，使外部程序可以使用。

        ? 第212行：定义全局标号__use_two_region_memory。

        ? 第213行：声明全局标号__user_initial_stackheap，这样外程序也可调用此标号。

        ? 第214行：标号__user_initial_stackheap，表示用户堆栈初始化程序入口。

        ? 第215—218行：分别保存栈顶指针和栈大小，堆始地址和堆大小至R0，R1，R2，R3寄存器。

        ? 第224行：程序完毕。

        以上便是STM32的启动代码的完整解析，接下来对几个小地方做解释：

        1、 AREA指令：伪指令，用于定义代码段或数据段，后跟属性标号。其中比较重要的一个标号为“READONLY”或者“READWRITE”，其中“READONLY”表示该段为只读属性，联系到STM32的内部存储介质，可知具有只读属性的段保存于FLASH区，即0x8000000地址后。而“READONLY”表示该段为“可读写”属性，可知“可读写”段保存于SRAM区，即0x2000000地址后。由此可以从第3、7行代码知道，堆栈段位于SRAM空间。从第82行可知，中断向量表放置与FLASH区，而这也是整片启动代码中最先被放进FLASH区的数据。因此可以得到一条重要的信息：0x8000000地址存放的是栈顶地址__initial_sp，0x8000004地址存放的是复位中断向量Reset_Handler(STM32使用32位总线，因此存储空间为4字节对齐)。

        2、 DCD指令：作用是开辟一段空间，其意义等价于C语言中的地址符“&”。因此从第84行开始建立的中断向量表则类似于使用C语言定义了一个指针数组，其每一个成员都是一个函数指针，分别指向各个中断服务函数。

        3、标号：前文多处使用了“标号”一词。标号主要用于表示一片内存空间的某个位置，等价于C语言中的“地址”概念。地址仅仅表示存储空间的一个位置，从C语言的角度来看，变量的地址，数组的地址或是函数的入口地址在本质上并无区别。

        4、第202行中的__main标号并不表示C程序中的main函数入口地址，因此第204行也并不是跳转至main函数开始执行C程序。__main标号表示C/C++标准实时库函数里的一个初始化子程序__main的入口地址。该程序的一个主要作用是初始化堆栈(对于程序清单一来说则是跳转__user_initial_stackheap标号进行初始化堆栈的)，并初始化映像文件，最后跳转C程序中的main函数。这就解释了为何所有的C程序必须有一个main函数作为程序的起点——因为这是由C/C++标准实时库所规定的——并且不能更改，因为C/C++标准实时库并不对外界开发源代码。因此，实际上在用户可见的前提下，程序在第204行后就跳转至.c文件中的main函数，开始执行C程序了。

        至此可以总结一下STM32的启动文件和启动过程。首先对栈和堆的大小进行定义，并在代码区的起始处建立中断向量表，其第一个表项是栈顶地址，第二个表项是复位中断服务入口地址。然后在复位中断服务程序中跳转¬¬C/C++标准实时库的__main函数，完成用户堆栈等的初始化后，跳转.c文件中的main函数开始执行C程序。假设STM32被设置为从内部FLASH启动(这也是最常见的一种情况)，中断向量表起始地位为0x8000000，则栈顶地址存放于0x8000000处，而复位中断服务入口地址存放于0x8000004处。当STM32遇到复位信号后，则从0x80000004处取出复位中断服务入口地址，继而执行复位中断服务程序，然后跳转__main函数，最后进入mian函数，来到C的世界。

https://blog.csdn.net/qq_29350001/article/details/80586534

        启动模式讲完了，我们知道是主闪存存储器启动的（主闪存存储器就是芯片内部的flash）。主闪存存储器被映射到启动空间(0x0000 0000)，但仍然能够在它原有的地址(0x0800 0000)访问它。
        接下来，再看一下它的启动流程是怎样的。
        话说启动流程，我都讲过很多个了。
        参看：S5PV210开发 – 启动流程
        参看：DM368开发 – Bootloader 开发（转毕设）

        一、回顾

        首先你得知道主闪存存储器、系统存储器、内置SRAM代表什么？它们映射哪个区域。
        我主要以STM32F105RC为例来讲一下。
        参看：STM32F105RC 介绍

        主闪存存储器：芯片内部的flash，即256K字节；从用户闪存启动，这是正常的工作模式
        系统存储器：应该类似于BL1（18K字节）；将程序写入到一快特定的区域，一般由厂家直接写入，不能被随意更改或擦除。
        内置SRAM：64K字节；由于SRAM掉电丢失，不能保存程序，一般只用于程序的调试。

        二、内存布局
        接下来我们就应该看一下，STM32F105RC的内存布局

        查看，闪存模块的组织
        分为：小容量产品（32K，1KB/page）、中容量产品（128K，1KB/page）、大容量产品（512K，2KB/page）、互联型产品（256K，2KB/page）
        STM32F105RC的Flash为256K，可见为互联型产品（Connectivity line devices）

        再看，NAND的地址映像

        最后，是keil上我们可以设置 IROM起始地址
        0x800 0000 – 0x800 4000 为boot


        三、启动文件
        这里之所以有 8 个启动文件，是因为对于不同容量的芯片启动文件不一样。对于 105 系列，主要是用其中 4 个启动文件：
        startup_stm32f10x_ld.s： 适用于小容量 产品
        startup_stm32f10x_md.s ： 适用于中等容量产品
        startup_stm32f10x_hd.s： 适用于大容量产品
        startup_stm32f10x_cl.s： 适用于互联型产品

        小容量产品主存储块最大为4K×64位，每个存储块划分为32个1K字节的页
        中容量产品主存储块最大为16K×64位，每个存储块划分为128个1K字节的页
        大容量产品主存储块最大为64K×64位，每个存储块划分为256个2K字节的页
        互联型产品主存储块最大为32K×64位，每个存储块划分为128个2K字节的页

        很显然，STM32F105RC 是互联型产品
        那我们就看一下，startup_stm32f10x_cl.s
        参看：startup_stm32f10x_cl.s文件解读

        1、堆和栈的定义
        Stack_Size      EQU     0x00000400

                                        AREA    STACK, NOINIT, READWRITE, ALIGN=3
                                        ;AREA 伪指令用于定义一个代码段或数据,定义栈，
                                                    可初始为0，8字节对齐2*2*2，2的3次方。
                                        ;STACK 段名 
                                        ;NOINIT：指定此数据段仅仅保留了内存单元， 
                                        ;READWRITE属性：指定本段为可读可写，数据段的默认属性为READWRITE。 
                                        ;ALIGN属性：使用方式为ALIGN 表达式。
                                             在默认时，ELF（可执行连接文件）的代码段和数据段是按字对齐的，
                                             表达式的取值范围为0～31，相应的对齐方式为2表达式次方。
        Stack_Mem       SPACE   Stack_Size 
                                        ;SPACE 用来分配一片连续的存储区域并初始化为0。
                                        ;Stack_Mem  表示分配0x400个连续字节，并初始化为0
        __initial_sp    ;表示栈空间顶地址，汇编代码地址标号 

        栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。

        Heap_Size       EQU     0x00000200

                                        AREA    HEAP, NOINIT, READWRITE, ALIGN=3 
                                        ;ALIGN用来指定对齐方式， 8字节对齐
        __heap_base ;表示堆空间起始地址 
        Heap_Mem        SPACE   Heap_Size
        __heap_limit ;表示堆空间结束地址

                                        PRESERVE8
                                        THUMB

        堆区（heap） — 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收 。注意它与数据结构中的堆是两回事，分配方式倒是类似于链表

        2、中断向量表
        ; Vector Table Mapped to Address 0 at Reset
        ;实际上是在CODE区（假设STM32从FLASH启动，则此中断向量表起始地址即为0x8000000） 
                                        AREA    RESET, DATA, READONLY
                                                ；定义一块数据段，只可读，段名字是RESET 
                                                ;DATA属性：用于定义数据段，默认为READWRITE。指定本段为可读可写 
                                        EXPORT  __Vectors 
                                                ；在程序中声明一个全局的标号__Vectors，该标号可在其他的文件中引用 
                                        EXPORT  __Vectors_End
                                                ；在程序中声明一个全局的标号__Vectors_End 
                                        EXPORT  __Vectors_Size
                                                ；在程序中声明一个全局的标号__Vectors_Size 

        __Vectors       DCD     __initial_sp               ; Top of Stack 
                ；栈顶地址，该处物理地址值即为 __Vetors 标号所表示的值
                ；该地址中存储__initial_sp 所表示的地址值，大小为一个字（32bit） 
                                        DCD     Reset_Handler              ; Reset Handler
                                                ；复位中断服务入口地址 
                                        DCD     NMI_Handler                ; NMI Handler
                                                ；不可屏蔽中断
                                        DCD     HardFault_Handler          ; Hard Fault Handler
                                                ；硬件错误处理 
                                        DCD     MemManage_Handler          ; MPU Fault Handler
                                        DCD     BusFault_Handler           ; Bus Fault Handler
                                        DCD     UsageFault_Handler         ; Usage Fault Handler
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     SVC_Handler                ; SVCall Handler
                                        DCD     DebugMon_Handler           ; Debug Monitor Handler
                                        DCD     0                          ; Reserved
                                        DCD     PendSV_Handler             ; PendSV Handler
                                        DCD     SysTick_Handler            ; SysTick Handler
                                                ；系统滴答定时器 

                                        ;External Interrupts
                                        DCD     WWDG_IRQHandler            ; Window Watchdog
                                        DCD     PVD_IRQHandler             ; PVD through EXTI Line detect
                                        DCD     TAMPER_IRQHandler          ; Tamper
                                        DCD     RTC_IRQHandler             ; RTC
                                        DCD     FLASH_IRQHandler           ; Flash
                                        DCD     RCC_IRQHandler             ; RCC
                                        DCD     EXTI0_IRQHandler           ; EXTI Line 0
                                        DCD     EXTI1_IRQHandler           ; EXTI Line 1
                                        DCD     EXTI2_IRQHandler           ; EXTI Line 2
                                        DCD     EXTI3_IRQHandler           ; EXTI Line 3
                                        DCD     EXTI4_IRQHandler           ; EXTI Line 4
                                        DCD     DMA1_Channel1_IRQHandler   ; DMA1 Channel 1
                                        DCD     DMA1_Channel2_IRQHandler   ; DMA1 Channel 2
                                        DCD     DMA1_Channel3_IRQHandler   ; DMA1 Channel 3
                                        DCD     DMA1_Channel4_IRQHandler   ; DMA1 Channel 4
                                        DCD     DMA1_Channel5_IRQHandler   ; DMA1 Channel 5
                                        DCD     DMA1_Channel6_IRQHandler   ; DMA1 Channel 6
                                        DCD     DMA1_Channel7_IRQHandler   ; DMA1 Channel 7
                                        DCD     ADC1_2_IRQHandler          ; ADC1 and ADC2
                                        DCD     CAN1_TX_IRQHandler         ; CAN1 TX
                                        DCD     CAN1_RX0_IRQHandler        ; CAN1 RX0
                                        DCD     CAN1_RX1_IRQHandler        ; CAN1 RX1
                                        DCD     CAN1_SCE_IRQHandler        ; CAN1 SCE
                                        DCD     EXTI9_5_IRQHandler         ; EXTI Line 9..5
                                        DCD     TIM1_BRK_IRQHandler        ; TIM1 Break
                                        DCD     TIM1_UP_IRQHandler         ; TIM1 Update
                                        DCD     TIM1_TRG_COM_IRQHandler    ; TIM1 Trigger and Commutation
                                        DCD     TIM1_CC_IRQHandler         ; TIM1 Capture Compare
                                        DCD     TIM2_IRQHandler            ; TIM2
                                        DCD     TIM3_IRQHandler            ; TIM3
                                        DCD     TIM4_IRQHandler            ; TIM4
                                        DCD     I2C1_EV_IRQHandler         ; I2C1 Event
                                        DCD     I2C1_ER_IRQHandler         ; I2C1 Error
                                        DCD     I2C2_EV_IRQHandler         ; I2C2 Event
                                        DCD     I2C2_ER_IRQHandler         ; I2C1 Error
                                        DCD     SPI1_IRQHandler            ; SPI1
                                        DCD     SPI2_IRQHandler            ; SPI2
                                        DCD     USART1_IRQHandler          ; USART1
                                        DCD     USART2_IRQHandler          ; USART2
                                        DCD     USART3_IRQHandler          ; USART3
                                        DCD     EXTI15_10_IRQHandler       ; EXTI Line 15..10
                                        DCD     RTCAlarm_IRQHandler        ; RTC alarm through EXTI line
                                        DCD     OTG_FS_WKUP_IRQHandler     ; USB OTG FS Wakeup through EXTI line
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     0                          ; Reserved
                                        DCD     TIM5_IRQHandler            ; TIM5
                                        DCD     SPI3_IRQHandler            ; SPI3
                                        DCD     UART4_IRQHandler           ; UART4
                                        DCD     UART5_IRQHandler           ; UART5
                                        DCD     TIM6_IRQHandler            ; TIM6
                                        DCD     TIM7_IRQHandler            ; TIM7
                                        DCD     DMA2_Channel1_IRQHandler   ; DMA2 Channel1
                                        DCD     DMA2_Channel2_IRQHandler   ; DMA2 Channel2
                                        DCD     DMA2_Channel3_IRQHandler   ; DMA2 Channel3
                                        DCD     DMA2_Channel4_IRQHandler   ; DMA2 Channel4
                                        DCD     DMA2_Channel5_IRQHandler   ; DMA2 Channel5
                                        DCD     ETH_IRQHandler             ; Ethernet
                                        DCD     ETH_WKUP_IRQHandler        ; Ethernet Wakeup through EXTI line
                                        DCD     CAN2_TX_IRQHandler         ; CAN2 TX
                                        DCD     CAN2_RX0_IRQHandler        ; CAN2 RX0
                                        DCD     CAN2_RX1_IRQHandler        ; CAN2 RX1
                                        DCD     CAN2_SCE_IRQHandler        ; CAN2 SCE
                                        DCD     OTG_FS_IRQHandler          ; USB OTG FS
        __Vectors_End

        __Vectors_Size  EQU  __Vectors_End - __Vectors


        3、地址重映射及中断向量表的转移
            AREA    |.text|, CODE, READONLY
                ；定义一个代码段，可读，段名字是.text  段名若以数字开头，则该段名需用"|"括起来，如|1_test|。 
                ;定义只读数据段，实际上是在CODE区，如果在FLASH区起动，则 中断向量起始地址为0X8000000 
                ;CODE属性：用于定义代码段，默认为READONLY 
        ; Reset handler
        Reset_Handler    PROC
                ；标记一个函数的开始;利用PROC、ENDP这一对伪指令把程序段分为若干个过程，使程序的结构加清晰 
                                         EXPORT  Reset_Handler             [WEAK]
                                                 ；在外部没有定义该符号时导出该符号Reset_Handler   
                                                 ；EXPORT伪指令用于在程序中声明一个全局的标号 
                        IMPORT  SystemInit 
                                                ；系统初始化
                        IMPORT  __main
                                                 ；IMPORT 伪指令用于通知编译器要使用的标号在其他的源文件中定义
                                         LDR     R0, =SystemInit
                                         BLX     R0
                                         LDR     R0, =__main
                                                 ；__main为运行时库提供的函数；完成堆栈的初始化等工作，会调用下面定义的__user_initial_stackheap 
                                         BX      R0
                                                 ；跳到__main
                                         ENDP

        ; Dummy Exception Handlers (infinite loops which can be modified)
                ；虚拟异常处理器
        NMI_Handler     PROC  ；PROC表示汇编函数的开始 
                                        EXPORT  NMI_Handler                [WEAK]
                                                ；WEAK声明其他的同名标号优先于该标号被引用,就是说如果外面声明了的话， 
                                        B       .
                                                ；会调用外面的 
                                        ENDP
        HardFault_Handler\
                                        PROC
                                        EXPORT  HardFault_Handler          [WEAK] 
                                                ；\换行的意思 
                                        B       .
                                        ENDP
        MemManage_Handler\
                                        PROC
                                        EXPORT  MemManage_Handler          [WEAK]
                                        B       .
                                        ENDP
        BusFault_Handler\
                                        PROC
                                        EXPORT  BusFault_Handler           [WEAK]
                                        B       .
                                        ENDP
        UsageFault_Handler\
                                        PROC
                                        EXPORT  UsageFault_Handler         [WEAK]
                                        B       .
                                        ENDP
        SVC_Handler     PROC
                                        EXPORT  SVC_Handler                [WEAK]
                                        B       .
                                        ENDP
        DebugMon_Handler\
                                        PROC
                                        EXPORT  DebugMon_Handler           [WEAK]
                                        B       .
                                        ENDP
        PendSV_Handler  PROC
                                        EXPORT  PendSV_Handler             [WEAK]
                                        B       .
                                        ENDP
        SysTick_Handler PROC
                                        EXPORT  SysTick_Handler            [WEAK]
                                        B       .
                                        ENDP

        Default_Handler PROC

                                        EXPORT  WWDG_IRQHandler            [WEAK]
                                        EXPORT  PVD_IRQHandler             [WEAK]
                                        EXPORT  TAMPER_IRQHandler          [WEAK]
                                        EXPORT  RTC_IRQHandler             [WEAK]
                                        EXPORT  FLASH_IRQHandler           [WEAK]
                                        EXPORT  RCC_IRQHandler             [WEAK]
                                        EXPORT  EXTI0_IRQHandler           [WEAK]
                                        EXPORT  EXTI1_IRQHandler           [WEAK]
                                        EXPORT  EXTI2_IRQHandler           [WEAK]
                                        EXPORT  EXTI3_IRQHandler           [WEAK]
                                        EXPORT  EXTI4_IRQHandler           [WEAK]
                                        EXPORT  DMA1_Channel1_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel2_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel3_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel4_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel5_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel6_IRQHandler   [WEAK]
                                        EXPORT  DMA1_Channel7_IRQHandler   [WEAK]
                                        EXPORT  ADC1_2_IRQHandler          [WEAK]
                                        EXPORT  CAN1_TX_IRQHandler         [WEAK]
                                        EXPORT  CAN1_RX0_IRQHandler        [WEAK]
                                        EXPORT  CAN1_RX1_IRQHandler        [WEAK]
                                        EXPORT  CAN1_SCE_IRQHandler        [WEAK]
                                        EXPORT  EXTI9_5_IRQHandler         [WEAK]
                                        EXPORT  TIM1_BRK_IRQHandler        [WEAK]
                                        EXPORT  TIM1_UP_IRQHandler         [WEAK]
                                        EXPORT  TIM1_TRG_COM_IRQHandler    [WEAK]
                                        EXPORT  TIM1_CC_IRQHandler         [WEAK]
                                        EXPORT  TIM2_IRQHandler            [WEAK]
                                        EXPORT  TIM3_IRQHandler            [WEAK]
                                        EXPORT  TIM4_IRQHandler            [WEAK]
                                        EXPORT  I2C1_EV_IRQHandler         [WEAK]
                                        EXPORT  I2C1_ER_IRQHandler         [WEAK]
                                        EXPORT  I2C2_EV_IRQHandler         [WEAK]
                                        EXPORT  I2C2_ER_IRQHandler         [WEAK]
                                        EXPORT  SPI1_IRQHandler            [WEAK]
                                        EXPORT  SPI2_IRQHandler            [WEAK]
                                        EXPORT  USART1_IRQHandler          [WEAK]
                                        EXPORT  USART2_IRQHandler          [WEAK]
                                        EXPORT  USART3_IRQHandler          [WEAK]
                                        EXPORT  EXTI15_10_IRQHandler       [WEAK]
                                        EXPORT  RTCAlarm_IRQHandler        [WEAK]
                                        EXPORT  OTG_FS_WKUP_IRQHandler     [WEAK]
                                        EXPORT  TIM5_IRQHandler            [WEAK]
                                        EXPORT  SPI3_IRQHandler            [WEAK]
                                        EXPORT  UART4_IRQHandler           [WEAK]
                                        EXPORT  UART5_IRQHandler           [WEAK]
                                        EXPORT  TIM6_IRQHandler            [WEAK]
                                        EXPORT  TIM7_IRQHandler            [WEAK]
                                        EXPORT  DMA2_Channel1_IRQHandler   [WEAK]
                                        EXPORT  DMA2_Channel2_IRQHandler   [WEAK]
                                        EXPORT  DMA2_Channel3_IRQHandler   [WEAK]
                                        EXPORT  DMA2_Channel4_IRQHandler   [WEAK]
                                        EXPORT  DMA2_Channel5_IRQHandler   [WEAK]
                                        EXPORT  ETH_IRQHandler             [WEAK]
                                        EXPORT  ETH_WKUP_IRQHandler        [WEAK]
                                        EXPORT  CAN2_TX_IRQHandler         [WEAK]
                                        EXPORT  CAN2_RX0_IRQHandler        [WEAK]
                                        EXPORT  CAN2_RX1_IRQHandler        [WEAK]
                                        EXPORT  CAN2_SCE_IRQHandler        [WEAK]
                                        EXPORT  OTG_FS_IRQHandler          [WEAK]

        WWDG_IRQHandler
        PVD_IRQHandler
        TAMPER_IRQHandler
        RTC_IRQHandler
        FLASH_IRQHandler
        RCC_IRQHandler
        EXTI0_IRQHandler
        EXTI1_IRQHandler
        EXTI2_IRQHandler
        EXTI3_IRQHandler
        EXTI4_IRQHandler
        DMA1_Channel1_IRQHandler
        DMA1_Channel2_IRQHandler
        DMA1_Channel3_IRQHandler
        DMA1_Channel4_IRQHandler
        DMA1_Channel5_IRQHandler
        DMA1_Channel6_IRQHandler
        DMA1_Channel7_IRQHandler
        ADC1_2_IRQHandler
        CAN1_TX_IRQHandler
        CAN1_RX0_IRQHandler
        CAN1_RX1_IRQHandler
        CAN1_SCE_IRQHandler
        EXTI9_5_IRQHandler
        TIM1_BRK_IRQHandler
        TIM1_UP_IRQHandler
        TIM1_TRG_COM_IRQHandler
        TIM1_CC_IRQHandler
        TIM2_IRQHandler
        TIM3_IRQHandler
        TIM4_IRQHandler
        I2C1_EV_IRQHandler
        I2C1_ER_IRQHandler
        I2C2_EV_IRQHandler
        I2C2_ER_IRQHandler
        SPI1_IRQHandler
        SPI2_IRQHandler
        USART1_IRQHandler
        USART2_IRQHandler
        USART3_IRQHandler
        EXTI15_10_IRQHandler
        RTCAlarm_IRQHandler
        OTG_FS_WKUP_IRQHandler
        TIM5_IRQHandler
        SPI3_IRQHandler
        UART4_IRQHandler
        UART5_IRQHandler
        TIM6_IRQHandler
        TIM7_IRQHandler
        DMA2_Channel1_IRQHandler
        DMA2_Channel2_IRQHandler
        DMA2_Channel3_IRQHandler
        DMA2_Channel4_IRQHandler
        DMA2_Channel5_IRQHandler
        ETH_IRQHandler
        ETH_WKUP_IRQHandler
        CAN2_TX_IRQHandler
        CAN2_RX0_IRQHandler
        CAN2_RX1_IRQHandler
        CAN2_SCE_IRQHandler
        OTG_FS_IRQHandler

                                        B       .

                                        ENDP

                                        ALIGN



        4、堆和栈的初始化
        ;*******************************************************************************
        ; User Stack and Heap initialization
        ;*******************************************************************************
                                         IF      :DEF:__MICROLIB
                                                ；判断是否使用DEF:__MICROLIB（micro lib） 
                                         EXPORT  __initial_sp
                                                 ；使用的话则将栈顶地址，堆始末地址赋予全局属性 
                                         EXPORT  __heap_base
                                                 ；使外部程序可以使用 
                                         EXPORT  __heap_limit
                                        
                                         ELSE
                                        
                                         IMPORT  __use_two_region_memory
                                                 ；定义全局标号__use_two_region_memory 
                                         EXPORT  __user_initial_stackheap
                                                 ；声明全局标号__user_initial_stackheap，这样外程序也可调用此标号 
                                         
        __user_initial_stackheap
        ；标号__user_initial_stackheap，表示用户堆栈初始化程序入口 

                                         LDR     R0, =  Heap_Mem
                                                 ；保存堆始地址 
                                         LDR     R1, =(Stack_Mem + Stack_Size)
                                                 ；保存栈的大小 
                                         LDR     R2, = (Heap_Mem +  Heap_Size)
                                                 ；保存堆的大小 
                                         LDR     R3, = Stack_Mem
                                                 ；保存栈顶指针 
                                         BX      LR

                                         ALIGN
                                                 ；ALIGN属性：使用方式为ALIGN 表达式。在默认时，ELF（可执行连接文件）的代码段和数据段是按字对齐的，表达式的取值范围为0～31，相应的对齐方式为2表达式次方

                                         ENDIF

                                         END

        ;******************* (C) COPYRIGHT 2011 STMicroelectronics *****END OF FILE*****


        四、debug模式
        进入debug模式，来进行一下调试


        1、了解SP、LR和PC
        首先要搞清楚一下 SP、LR和PC 是什么

        1.1 堆栈指针r13（SP）
        每一种异常模式都有其自己独立的r13，它通常指向异常模式所专用的堆栈，也就是说五种异常模式、非异常模式（用户模式和系统模式），都有各自独立的堆栈，用不同的堆栈指针来索引。这样当ARM进入异常模式的时候，程序就可以把一般通用寄存器压入堆栈，返回时再出栈，保证了各种模式下程序的状态的完整性。

        1.2 连接寄存器r14（LR）
        每种模式下r14都有自身版组，它有两个特殊功能。
        （1）保存子程序返回地址。使用BL或BLX时，跳转指令自动把返回地址放入r14中；子程序通过把r14复制到PC来实现返回，通常用下列指令之一：
        MOV PC, LR
        BX LR
        通常子程序这样写，保证了子程序中还可以调用子程序。
        stmfd sp!, {lr}
        ……
        ldmfd sp!, {pc}

        （2）当异常发生时，异常模式的r14用来保存异常返回地址，将r14如栈可以处理嵌套中断。
        ###1.3 程序计数器r15（PC）
        PC是有读写限制的。当没有超过读取限制的时候，读取的值是指令的地址加上8个字节，由于ARM指令总是以字对齐的，故bit[1:0]总是00。当用str或stm存储PC的时候，偏移量有可能是8或12等其它值。在V3及以下版本中，写入bit[1:0]的值将被忽略，而在V4及以上版本写入r15的bit[1:0]必须为00，否则后果不可预测。



        2、了解MSP和PSP
        主堆栈指针（MSP）：复位后缺省使用的堆栈指针，用于操作系统内核以及异常处理例程（包括中断服务例程）
        进程堆栈指针（PSP）：由用户的应用程序代码使用。
        发生一个中断时，一般都要执行一段中断处理程序。在ARM中预先定义了许多芯片支持的中断类型，但是中断处理程序需要用户自己去写，这样ARM只对不同的中断类型提供了一个预定义的地址，但是这些预定义的地址里面是不够存放用户编写的中断处理程序的。
        用户自己写了中断处理程序，然后把中断处理程序的入口放在系统预定义的中断地址处，这样在发生中断后就会跳转到用户编写的中断处理程序处。
        中断很多，形成了一个跳转表，成为中断向量表。

        3、存储空间布局
        参看：UNIX再学习 – 内存管理


        当一个程序代码通过编译连接后，其全局、静态变量、堆栈的位置已经赋予了具体的内存地址（从0x200 0000开始）了。因此其SRAM布局就是定死了的。
        代码区则是从从0x0800 0000通过Icode、Dcode总线访问的。


        五、复位
        ; Reset handler
        Reset_Handler    PROC
                                         EXPORT  Reset_Handler             [WEAK]
                        IMPORT  SystemInit
                        IMPORT  __main
                                         LDR     R0, =SystemInit
                                         BLX     R0
                                         LDR     R0, =__main
                                         BX      R0
                                         ENDP

## // Boot Startup
https://www.cnblogs.com/jiangzhaowei/p/9240238.html

要深入芯片的程序开发，下载官方的参考手册是必不可少的，官方手册统一编号，文件名以 CD/DM 前缀，应用笔记前缀 AN - Application Note，参考手册前缀 RM - Reference Manual，编程手册前缀 PM - Programming manual，用户手册前缀 UM - User Manual：

- RM0383: STM32F411xC/E advanced Arm®-based 32-bit MCUs
- PM0214: STM32 Cortex ® -M4 MCUs and MPUs
- UM1725: Description of STM32F4 HAL and LL drivers
- UM1730: Getting started with STM32CubeF4 MCU Package for STM32F4 Series

STM32F411RE 系统引导部分内容参考 data：

*  [STM32F411xE Datasheet - 3.13 Boot modes](STM32F411xC_xE-ARMv7-Cortex-M4_datasheet.md)
*  [RM0383 Reference manual - 2.4 Boot configuration](STM32F411xC_xE-ARMv7-Cortex-M4-Reference.md)

嵌入式程序常采用 C 语言编写，其 main( ) 作为程序的入口。但实际上，mian() 执行之前是系统的
配置程序，它需要做好一些基本的工作，如堆、栈的定义，main 函数的复位连接等。
这些工作就需要一个专门的启动程序来完成，由于需要做的工作内容不多，并且需要更直接的管理内存，一般采用汇编编写。

无论是 STM32 (ARM) 系列的单片机，还是简单 51，PIC 等芯片，都需要启动程序。只不过 51、PIC
等单片机的启动程序已经在相应的 ID E编译、链接的时候隐含的配置，故在写单片机程序的时候无需考虑。
STM32 的启动有相应的启动文件。本文将采用 KEIL MDK 自带的启动文件 STM32F10x.s 进行分析。

由于芯片固定的内存映射，代码区（code area）从 0x00000000 开始，通过指令总线（ICode Bus）
和数据总线（DCode Bus）访问。数据区（SRAM）从 0x20000000 开始，通过系统总线（System Bus）访问。
Cortex™-M3 CPU 总是通过指令总线（ICode Bus）取得复位向量，这就意味着启动空间（boot space）
只能处于代码区（code area），典型的就是 Flash。STM32 系列使用了一种特殊的机制，
能够从代码区以外的区域启动（如，内部的SRAM）。参考 《Cortex-M3编程指南》。

STM32 系列可以有 3 种启动模式，由 BOOT1 与 BOOT0 的设置决定选择 Flash、System memory
还是 SRAM 作为启动空间（boot space）。3 种启动模式如下表，根据 CPU Boot 引脚设置：

| BOOT1 | BOOT0 |      Mode     |           Note           |
|-------|-------|---------------|--------------------------|
| X     |     0 | Flash Memory  | 主闪存存储器作为启动地址 |
| 0     |     1 | System Memory | 系统存储器作为启动地址   |
| 1     |     1 | Embedded SRAM | 内置 SRAM 为启动地址     |

STM32 芯片启动选择，通过设置 BOOT1、BOOT0 引脚电平高低选择。其中主闪存启动是将程序下载到
内置的 Flash 进行启动，该程序可以掉电保存，下次开机可自动启动。系统存储器启动是将程序写入到
特定的内存区域，一般由厂家直接写入，不能被随意更改或擦除。内置 SRAM 启动，由于 SRAM 掉电丢失，
不能保存程序，一般只用于程序的调试。

就程序的启动而言，采用以上3种方式启动，但对于一个嵌入式系统的程序来说，如果程序执行文件很大，而STM32内置的存储空间有限，就需要外置Nand flash/Nor flash 和SDRAM，即程序存储在flash中，程序执行在SDRAM中，既节约了成本有提高了运行效率。如果采用外置的Flash+SDRAM的方式，就需要一个更加复杂的启动文件(bootloader),需要考虑flash的COPY，Flash的驱动，内存的管理，通信机制等，本文暂不涉及此内容，以后有机会专门讲述。

2 启动文件STM32F10x.s分析

关于STM32F10x.s的启动文件，主要做了3个工作：分配和初始化堆、栈;定义复位向量并初始化;中断向量表及其相应的异常处理程序。

2.1 定义堆、栈及其初始化

堆和栈是能够运行C语言的前提，如以下程序：

定义栈：

        Stack_Size EQU 0x00000200
        AREA STACK, NOINIT, READWRITE, ALIGN=3
        Stack_Mem SPACE Stack_Size
        __initial_sp

定义堆：

        Heap_Size EQU 0x00000000
        AREA HEAP, NOINIT, READWRITE, ALIGN=3
        __heap_base
        Heap_Mem SPACE Heap_Size
        __heap_limit

初始化堆、栈：

        _user_initial_stackheap

        LDR R0, = Heap_Mem
        LDR R1, =(Stack_Mem + Stack_Size)
        LDR R2, = (Heap_Mem + Heap_Size)
        LDR R3, = Stack_Mem
        BX LR

2.2 定义复位向量

Boot引脚的设置不同，复位时，起始地址的位置不同，SRAM的起始地址为0x2000000, flash的起始地址为0x8000000。Cortex-M3内核规定，起始地址必须存放堆定指针，而第二个地址必须存放复位中断入口向量。在系统复位时，内核会自动从其实地址的下一个地址(即32位)空间取出复位中断入口向量，然后跳转到复位中断服务程序，该服务程序就会跳转到main()执行程序。

中断向量表(部分向量)：

        __Vectors

        DCD __initial_sp ; Top of Stack // 初始化堆跳转
        DCD Reset_Handler ; Reset Handler // 复位中断向量跳转
        DCD NMI_Handler ; NMI Handler
        DCD HardFault_Handler ; Hard Fault Handler
        DCD MemManage_Handler ; MPU Fault Handler
        DCD BusFault_Handler ; Bus Fault Handler
        DCD UsageFault_Handler ; Usage Fault Handler
        DCD 0 ; Reserved
        DCD 0 ; Reserved
        DCD 0 ; Reserved
        DCD 0 ; Reserved
        DCD SVC_Handler ; SVCall Handler
        DCD DebugMon_Handler ; Debug Monitor Handler
        DCD 0 ; Reserved
        DCD PendSV_Handler ; PendSV Handler
        DCD SysTick_Handler ; SysTick Handler

复位中断服务程序

        ; Reset Handler // 该程序会跳转到main()
        Reset_Handler PROC
        EXPORT Reset_Handler [WEAK]
        IMPORT __main
        LDR R0, =__main
        BX R0
        ENDP


3 其他中断向量及服务子程序

在启动文件中，只定义了中断向量，其相应的服务子程序跳转到空操作。为以后扩展中断服务程序做了准备。

在以上这些都胜利跑完之后，我们的微处理器(MCU)就开始main函数之旅……


通过 Boot 跳线配置三种引导方式：
- Boot from user Flash
- Boot from system memory
- Boot from embedded SRAM

引导程序 bootloader 位于 system memory，它用来执行 Flash 烧写，通过 USART1(PA9/10), USART2(PD5/6)。也用来执行 USB OTG FS 烧写。

The bootloader is located in system memory. It is used to reprogram the Flash memory by
using USART1(PA9/10), USART2(PD5/6), USB OTG FS in device mode (PA11/12) through
DFU (device firmware upgrade), I2C1(PB6/7), I2C2(PB10/3), I2C3(PA8/PB4),
SPI1(PA4/5/6/7), SPI2(PB12/13/14/15) or SPI3(PA15, PC10/11/12).

For more detailed information on the bootloader, refer to Application Note: AN2606, STM32
microcontroller system memory boot mode.



NUCLEO-L476RG bootloader limitations

Boot from system Flash memory results in executing bootloader code stored in the system
Flash memory, protected against write and erase. This allows in-system programming (ISP),
that is, flashing the STM32 user Flash memory. It also allows writing data into RAM. The
data come in via one of the communication interfaces such as USART, SPI, I 2 C bus, USB or
CAN.

Bootloader version can be identified by reading Bootloader ID at the address 0x1FFF6FFE.

The STM32L476RGT6 part soldered on the NUCLEO-L476RG main board is marked with a
date code, corresponding to its date of manufacturing. STM32L476RGT6 parts with the date
code prior or equal to week 22 of 2015 are fitted with bootloader V 9.0, affected by the
limitations to be worked around, as described hereunder. Parts with the date code starting
from week 23 of 2015 contain bootloader V 9.2 in which the limitations no longer exist.

To locate the visual date code information on the STM32L476RGT6 package, refer to the
section “Package information” of the datasheet (DS10198) available at www.st.com. Date
code related portion of the package marking, takes Y WW format, where Y is the last digit of
the year and WW is the week. For example, a part manufactured in week 23 of 2015 bares
the date code 5 23.

Bootloader ID of the bootloader V 9.0 is 0x90.

The following limitations exist in the bootloader V 9.0:

1. RAM data get corrupted when written via USART/SPI/I 2 C/USB interface
        
        Description:
        Data write operation into RAM space via USART, SPI, I 2 C bus or USB results in wrong or no
        data written.

        Workaround:
        To correct the issue of wrong write into RAM, download STSW-STM32158 bootloader V 9.0
        patch package from the www.st.com website and load "Bootloader V9.0 SRAM patch" to the
        STM32, following the information in readme.txt file available in the package.

2. User Flash memory data get corrupted when written via CAN interface
        
        Description:
        Data write operation into user Flash memory space via CAN interface results in wrong or no
        data written.

        Workaround:
        To correct the issue of wrong write into Flash memory, download STSW-STM32158
        bootloader V 0.9 patch package from the www.st.com website and load "Bootloader V9.0
        CAN patch" to the STM32, following the information in readme.txt file available in the
        package.



## // STM32Cube Firmware 固件包

STM32CubeIDE: https://www.st.com/zh/development-tools/stm32cubeide.html
STM32Cube MCU Package: https://www.st.com/zh/embedded-software/stm32cubef4.html
STM32CubeMX GUI Config Tool: 

STM32CubeMX 是一个底层配置工具，提供以下功能:
- Configuration C code generation for pin multiplexing, clock tree, peripherals and middleware setup with graphical wizards
- Generation of IDE ready projects for a integrated development environment tool chains
- Power consumption calculation for a user-defined application sequence
- Direct import of STM32 Cube embedded software libraries from st.com
- Integrated updater to keep STM32CubeMX up-to-date
 

官方提供的 STMCube™ 开发支持包目的就是简化开发工作，同时又根据官方的开发板卡做了底层的封装，形成 CMSIS 接口标准，另外还有一些工程实例参考。整个 STMCube 架构分成了层：

- Level2 Application 最上层是实例、应用程序；
- Level1 Middleware 中间件，与 RTOS, USB, File System, TCP/IP, Graphics 等相关；
- Level0 Drivers 驱动及硬件抽象层 HAL，以及板载特性支持；
- Hardware 定义芯片及 Evaluation/Discovery/Nucleo 等板卡的硬件特性；

本例使用的是最新版的 STM32Cube_FW_F4_V1.24.0，重要的目录内容如下：

        ├─ Drivers 驱动
        │  ├─ BSP 开发板驱动层
        │  │  └─ STM32F4xx-Nucleo
        │  ├─ CMSIS 接口标准组件
        │  └─ STM32F4xx_HAL_Driver 系列芯片驱动
        ├─ Middlewares 中间件
        ├─ Projects 工程案例
        └─ STM32F411RE-Nucleo 对应板卡包含实例和模板

STM32F4xx-Nucleo 提供板载资源封装 BSP - Board Service Spport，例如板载的 LED 2 是连接 PA5 的，BSP 相应定义：

        #define LED2_PIN                                GPIO_PIN_5

STM32F4xx_HAL_Driver 是程序的底层骨架，可以在 stm32f4xx_hal.h 找到版本号。在 Projects 目录下对应各种板卡提供了实例和模板，当前板卡芯片对应使用 STM32F411RE-Nucleo\Templates 模板：

- Templates/Src/main.c                 Main program
- Templates/Src/system_stm32f4xx.c     STM32F4xx system clock configuration file
- Templates/Src/stm32f4xx_it.c         Interrupt handlers 
- Templates/Src/stm32f4xx_hal_msp.c    HAL MSP module
- Templates/Inc/main.h                 Main program header file  
- Templates/Inc/stm32f4xx_hal_conf.h   HAL Configuration file
- Templates/Inc/stm32f4xx_it.h         Interrupt handlers header file

前面提到的板卡基本测试程序就是 Examples 目录下的 GPIO_IOToggle 实例，它就是通过操作 GPIO 的状态来变换 LED 指示灯的开关：

- GPIO/GPIO_IOToggle/Inc/stm32f4xx_hal_conf.h    HAL configuration file
- GPIO/GPIO_IOToggle/Inc/stm32f4xx_it.h          Interrupt handlers header file
- GPIO/GPIO_IOToggle/Inc/main.h                  Main program header file  
- GPIO/GPIO_IOToggle/Src/stm32f4xx_it.c          Interrupt handlers
- GPIO/GPIO_IOToggle/Src/main.c                  Main program
- GPIO/GPIO_IOToggle/Src/system_stm32f4xx.c      STM32F4xx system clock configuration file

每个工程都提供了 EWARM、MDK-ARM、SW4STM32 三种工程项目，也都提供了一个初始化汇编程序 startup_stm32f411xe.s，芯片加电后需要这个初始化程序来复位。
 
                
CMSIS - Cortex Microcontroller Software Interface Standard 接口标准是 Cortex®-M 系列 CPU 的硬件抽象层 HAL - Hardware Abstraction Layer，它简化了外部互连设备的开发，提高了软件的可复用性。

CMSIS 组件包含:
- CMSIS-Core (Cortex-M): API for the Cortex-M processor core and peripherals. It provides a standardized interface for Cortex-M0, Cortex-M0+, Cortex-M3, Cortex-M4, Cortex-M7, Cortex-M23, Cortex-M33, SC000, and SC300. Also included are SIMD intrinsic functions for Cortex-M4, Cortex-M7, and Cortex-M33 SIMD instructions.
- CMSIS-Core (Cortex-A): API and basic run-time system for the Cortex-A5/A7/A9 processor core and peripherals.
- CMSIS-Driver: defines generic peripheral driver interfaces for middleware making it reusable across supported devices. The API is RTOS independent and connects microcontroller peripherals with middleware that implements for example communication stacks, file systems, or graphic user interfaces.
- CMSIS-DSP: DSP Library Collection with over 60 Functions for various data types: fixed-point (fractional q7, q15, q31) and single precision floating-point (32-bit). The library is available for all Cortex-M cores. Implementations that are optimized for the SIMD instruction set are available for Cortex-M4, Cortex-M7, and Cortex-M33.
- CMSIS-NN: CMSIS-NN is a collection of efficient neural network kernels developed to maximize the performance and minimize the memory footprint of neural networks on Cortex-M processor cores.
- CMSIS-RTOS v1: Common API for Real-Time Operating Systems along with reference implementation based on RTX. It provides a standardized programming interface that is portable to many RTOS and enables software components that can work across multiple RTOS systems.
- CMSIS-RTOS v2: extends CMSIS-RTOS v1 with support for Armv8-M architecture, dynamic object creation, provisions for multi-core systems, and binary compatible interface across ABI compliant compilers.
- CMSIS-Pack: describes with an XML-based package description (PDSC) file the user and device relevant parts of a file collection (called a software pack) that includes source, header and library files, documentation, Flash programming algorithms, source code templates, and example projects. Development tools and web infrastructures use the PDSC file to extract device parameters, software components, and evaluation board configurations.
- CMSIS-SVD: System View Description for Peripherals. Describes the peripherals of a device in an XML file and can be used to create peripheral awareness in debuggers or header files with peripheral register and interrupt definitions.
- CMSIS-DAP: Debug Access Port. Standardized firmware for a Debug Unit that connects to the CoreSight Debug Access Port. CMSIS-DAP is distributed as a separate package and is well suited for integration on evaluation boards. This component is provided as separate download.
- CMSIS-Zone: System resource definition and partitioning. Defines methods to describe system resources and to partition these resources into multiple projects and execution areas.


# /🚩 常用总线接口概念
- I2C-bus specification and user manual Rev. 6 — 4 April 2014: https://www.nxp.com/docs/en/user-guide/UM10204.pdf

串行接口是嵌入式领域必不可少的通信方式，从烧录 firmware 到程序调试都有它的影子。

Serial Communication

1. STM32 UART Tutorial https://deepbluembedded.com/stm32-usart-uart-tutorial/
2. UART: RX/TX (Poll, Interrupt, DMA) https://deepbluembedded.com/how-to-receive-uart-serial-data-with-stm32-dma-interrupt-polling/
3. UART: STM32-PC USB-TTL https://deepbluembedded.com/stm32-serial-port-uart-with-usb-ttl-converter-pc-interfacing/
4. STM32 SPI Tutorial https://deepbluembedded.com/stm32-spi-tutorial/
5. SPI: RX/TX (Poll, Interrupt, DMA) https://deepbluembedded.com/how-to-receive-spi-with-stm32-dma-interrupt/
6. STM32 I2C Tutorial https://deepbluembedded.com/stm32-i2c-tutorial-hal-examples-slave-dma/
7. I2C Scanner https://deepbluembedded.com/stm32-i2c-scanner-hal-code-example/
8. USB: CDC Device (VCP) https://deepbluembedded.com/stm32-usb-cdc-virtual-com-port-vcp-examples/

## // UART USART2
- 台湾交通大学 Microprocessor System Lab - USART2  https://www.bilibili.com/video/BV1cb41157Qr?p=15
- STM32 USART / UART Tutorial by Khaled Magdy https://deepbluembedded.com/stm32-usart-uart-tutorial

UART - Universal Asynchronous Receiver/Transmitter 通用异步收发传输器，是一种通用串行数据总线，用于异步双向通信，可以实现全双工传输和接收。在嵌入式设计中，UART 用于主机与辅助设备通信，如汽车音响与外接 AP 之间的通信，与 PC 机通信，包括与监控调试器和其它器件，如EEPROM通信。它将要传输的资料在串行通信与并行通信之间加以转换。作为把并行输入信号转成串行输出信号的芯片，UART 通常被集成于其他通讯接口的连结上。具体实物表现为独立的模块化芯片，或作为集成于微处理器中的周边设备。一般是 RS-232C 规格的，与类似 Maxim 的 MAX232 之类的标准信号幅度变换芯片进行搭配，作为连接外部设备的接口。在 UART 上追加同步方式的序列信号变换电路的产品，被称为通用同步异步收发器 USART - Universal Synchronous Asynchronous Receiver Transmitter。

在单片机中 UART 可以说是一种最基本的配置，很多与电脑进行通信的设备都采用到它，按计算机最常规的说法就是串行通信。

        TX - 数据发送接口
        RX - 数据接受接口

两个设备间将 TX 与 RX 交叉相连即可正常工作，最常用到的就是我们电脑上的 USB 那就是个最典型的 UART 接口。


//STM32 USART / UART Tutorial
=============================
https://deepbluembedded.com/stm32-usart-uart-tutorial/

```sh
# transform html into markdown format, and copy into clipboard in Windows
curl -L https://deepbluembedded.com/stm32-usart-uart-tutorial/ | /c/opendocs/html2md.ts | clip
```

by [Khaled Magdy](https://deepbluembedded.com/author/admin/ "View all posts by Khaled Magdy")

**STM32 USART / UART Communication Tutorial**

In this tutorial, we'll be discussing the USART / UART hardware in STM32 microcontrollers. Starting with an introduction to UART serial communication. And we'll get a closer look at the STM32 USART hardware module and its internal functionalities, modes of operation, options, and configurations. In conclusion, we'll take a look at the possible interrupt signals that can be triggered by the USART hardware. And that's it for this theoretical tutorial. Next, we'll do a couple of LABs to practice using USART in different projects for communication or even debugging.

* * *

### **1. Introduction To UART**

[**Universal Asynchronous Receiver/Transmitter** or](https://deepbluembedded.com/uart-pic-microcontroller-tutorial/) **UART** for short represents the hardware circuitry (module) being used for serial communication. UART is sold/shipped as a standalone integrated circuit (**IC**) or as an internal module within microcontrollers. In this tutorial, we鈥檙e actually concerned with the internal UART module within STM32 Microcontrollers.

There are actually two forms of UART hardware as follows:

*   **UART** – Universal Asynchronous Receiver/Transmitter
*   **USART** – Universal Synchronous/Asynchronous Receiver/Transmitter

The **Synchronous** type of transmitters generates the data clock and sends it to the receiver which works accordingly in a synchronized manner. On the other hand, the **Asynchronous** type of transmitter generates the data clock internally. There is no incoming serial clock signal, so in order to achieve proper communication between the two ends, both of them must be using the same **baud rate**.

* * *

### **2. USART / UART Hardware In STM32**

**2.1 STM32 USART Highlights**

The universal synchronous asynchronous receiver transmitter (USART) offers a flexible means of full-duplex data exchange with external equipment requiring an industry-standard NRZ (Non-Return-To-Zero) asynchronous serial data format. The USART offers a very wide range of baud rates using a fractional baud rate generator.  
It supports synchronous one-way communication and half-duplex single-wire communication. It also supports the LIN (local interconnection network), Smartcard Protocol and IrDA (infrared data association) SIR ENDEC specifications, and modem operations (CTS/RTS). It allows multiprocessor communication. High-speed data communication is possible by using the DMA for multi-buffer configuration.

**2.2 STM32 USART Main Features**

*   Full duplex, asynchronous communications
*   Fractional baud rate generator systems – A common programmable transmit and receive baud rates up to 4.5 MBits/s
*   Parity control
*   Programmable data word length (8 or 9 bits)
*   Configurable stop bits – support for 1 or 2 stop bits
*   LIN Master Synchronous Break send capability and LIN slave break detection capability
*   Transmitter clock output for synchronous transmission
*   IrDA SIR Encoder-Decoder – Support for 3/16 bit duration for normal mode
*   Smartcard Emulation Capability
*   Single-wire half-duplex communication
*   Configurable multi-buffer communication using DMA (direct memory access) – Buffering of received/transmitted bytes in reserved SRAM using centralized DMA
*   Separate enable bits for Transmitter and Receiver
*   Transfer detection flags: (Receive buffer full – Transmit buffer empty – End of Transmission flags)
*   4 error detection flags: (Overrun error – Noise error – Frame error – Parity error)
*   10 interrupt sources with flags

* * *

### **3. STM32 USART Hardware Functionalities**

In this section, we'll get a deep insight into the STM32 USART module hardware, its block diagram, functionalities, BRG, modes of operations, and data reception/transmission.

Any USART bidirectional communication requires a minimum of two pins: Receive Data In (**RX**) and Transmit Data Out (**TX**). Through these pins, serial data is transmitted and received in normal USART mode. The **CK** pin is required to interface in synchronous mode. The **CTS** & **RTS** pins are required in Hardware flow control mode.

**3.1 USART Block Diagram**

As you can easily spot in the digital block diagram for this UART hardware module, there are two separate shift registers and double-buffered in/out data for a full-duplex data transmission and reception operation. Both shift registers which shift-in or out the data during reception/transmission are being clocked at the rate of the BRG (baud rate generator) circuitry at the bottom of the diagram. 

![STM32 UART USART Hardware Block Diagram](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-UART-USART-Hardware-Block-Diagram.png?ezimgfmt=ng:webp/ngcb6)

There is an address register for multi-processor communication mode. There exist a hardware data flow control unit to support this feature. And also an IrDA decoder circuitry, and interrupt control unit to generate various interrupt signals on different USART hardware events.

**3.2 USART Data (Character) Packet**

Word length may be selected as being either 8 or 9 bits by programming the M bit in the USART_CR1 register. Transmission and reception are driven by a common baud rate generator, the clock for each is generated when the enable bit is set respectively for the transmitter and receiver. The TX pin is in a low state during the start bit. It is in a high state during the stop bit.

An **Idle character** is interpreted as an entire frame of – 鈥漵 followed by the start bit of the next frame which contains data (The number of – – 鈥榮 will include the number of stop bits).

A **Break character** is interpreted on receiving – 鈥漵 for a frame period. At the end of the Break frame, the transmitter inserts either 1 or 2 stop bits (logic – – bit) to acknowledge the start bit.

![STM32 UART Data Packet - Frame Format - Character Description](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-UART-Data-Packet-Frame-Format-Character-Description.png?ezimgfmt=ng:webp/ngcb6)

**3.3 USART Transmitter**

The USART transmitter can send data words of either 8 or 9 bits depending on the M bit status. When the transmit enable bit (TE) is set, the data in the transmit shift register is shifted out to the TX pin, and the corresponding clock pulses are output on the CK pin (for synchronous mode).

During a USART transmission, data shifts out the least significant bit first on the TX pin. Every character is preceded by a start bit, which is a logic level low for a one-bit period. The character is terminated by a configurable number of stop bits. The following stop bits are supported by USART: 0.5, 1, 1.5, and 2 stop bits.

**Note**

*   The TE bit should not be reset during the transmission of data. Resetting the TE bit during the transmission will corrupt the data on the TX pin as the baud rate counters will get frozen. The current data being transmitted will be lost.
*   An idle frame will be sent after the TE bit is enabled.

**USART Data Transmission Steps (Procedure)**

1.  Enable the *USART* by writing the *UE* bit in USART_CR1 register to 1.
2.  Program the *M* bit in USART_CR1 to define the word length.
3.  Program the number of stop bits in USART_CR2.
4.  Select *DMA* to enable (*DMAT*) in USART_CR3 if Multi buffer Communication is to take place. Configure the *DMA* register as explained in multi-buffer communication.
5.  Select the desired baud rate using the *USART_BRR* register.
6.  Set the *TE* bit in USART_CR1 to send an idle frame as the first transmission.
7.  Write the data to send in the *USART_DR* register (this clears the *TXE* bit). Repeat this for each data to be transmitted in case of a single buffer.
8.  After writing the last data into the *USART_DR* register, wait until *TC*=1. This indicates that the transmission of the last frame is complete. This is required for instance when the *USART* is disabled or enters the Halt mode to avoid corrupting the last transmission.

When a transmission is taking place, a write instruction to the USART_DR register stores the data in the TDR register and which is copied in the shift register at the end of the current transmission.

When no transmission is taking place, a write instruction to the USART_DR register places the data directly in the shift register, the data transmission starts, and the TXE bit is immediately set.

If a frame is transmitted (after the stop bit) and the TXE bit is set, the TC bit goes high. An interrupt is generated if the TCIE bit is set in the USART_CR1 register. After writing the last data into the USART_DR register, it is mandatory to wait for TC=1 before disabling the USART or causing the microcontroller to enter the low-power mode.

The TC bit is cleared by the following software sequence:

1.  A read from the USART_SR register
2.  A write to the USART_DR register

The TC bit can also be cleared by writing a – – to it.

The timing sequence diagram down below will show you the exact behavior of the USART transmitter hardware, the TC bit, and the TXE flag bit.

![STM32 USART Transmitter Operation Sequence](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-USART-Transmitter-Operation-Sequence.png?ezimgfmt=ng:webp/ngcb6)

**3.4 USART Receiver**

The USART can receive data words of either 8 or 9 bits depending on the M bit in the USART_CR1 register. In the USART, the start bit is detected when a specific sequence of samples is recognized.

This sequence is: 1 1 1 0 X 0 X 0 X 0 0 0 0. If the sequence is not complete, the start bit detection aborts and the receiver returns to the idle state (no flag is set) where it waits for a falling edge.

The receiver clock is x16 times faster than the transmitter clock which is generated by the same baud rate generator. Which guarantees more samples (typically 16) per bit-time duration. The diagram below shows you the start bit detection and the exact conditions that must be met to validate a true start bit.

![STM32 USART Start Bit Detection](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-USART-Start-Bit-Detection.png?ezimgfmt=ng:webp/ngcb6)

During a USART reception, data shifts in the least significant bit first through the RX pin. In this mode, the USART_DR register consists of a buffer (RDR) between the internal bus and the received shift register.

**USART Data Reception Steps (Procedure)**

1.  Enable the USART by writing the UE bit in the USART_CR1 register to 1.
2.  Program the M bit in USART_CR1 to define the word length.
3.  Program the number of stop bits in USART_CR2.
4.  Select DMA enable (DMAR) in USART_CR3 if multi-buffer communication is to take place. Configure the DMA register as explained in multi-buffer communication. STEP 3
5.  Select the desired baud rate using the baud rate register USART_BRR
6.  Set the RE bit USART_CR1. This enables the receiver which begins searching for a start bit.

When a character is received, The RXNE bit is set. It indicates that the content of the shift register is transferred to the RDR. In other words, data has been received and can be read (as well as its associated error flags). An interrupt is generated if the RXNEIE bit is set.

In multibuffer, RXNE is set after every byte received and is cleared by the DMA read to the Data Register. In single buffer mode, clearing the RXNE bit is performed by software read to the USART_DR register. The RXNE flag can also be cleared by writing a zero to it. The RXNE bit must be cleared before the end of the reception of the next character to avoid an overrun error.

**Note**

The RE bit should not be reset while receiving data. If the RE bit is disabled during the reception, the reception of the current byte will be aborted.

**3.5 Fractional Baud Rate Generator (BRG)**

The baud rate for the receiver and transmitter (RX and TX) are both set to the same value as programmed in the Mantissa and Fraction values of USARTDIV.

![STM32 UART Baud Rate Formula](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-UART-Baud-Rate-Formula.png?ezimgfmt=rs:300x39/rscb6/ng:webp/ngcb6)

USARTDIV is an unsigned fixed-point number that is coded on the USART_BRR register. FCK is the input clock to the USART peripheral.

The baud rate counters are updated with the new value of the Baud registers after a write to USART_BRR. Hence the Baud rate register value should not be changed during communication.

**Note**

*   The lower the CPU clock the lower will be the accuracy for a particular Baud rate. The upper limit of the achievable baud rate can be fixed with this data.
*   Only USART1 is clocked with PCLK2 (72 MHz max). Other USARTs are clocked with PCLK1 (36 MHz max).

Down below is an example table from the datasheet for the error (percentage) in the baud rate at different rates with different clock frequencies for comparison.

The (Error%) is defined as (Calculated Baud Rate – Desired Baud Rate) / Desired Baud Rate.

![STM32 UART Baud Rate Error Table](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-UART-Baud-Rate-Error-Table.png?ezimgfmt=ng:webp/ngcb6)

**3.6 USART Parity Control**

Parity control (generation of parity bit in transmission and parity checking in reception) can be enabled by setting the PCE bit in the USART_CR1 register. Depending on the frame length defined by the M bit, the possible USART frame formats are as listed in the table down below.

![STM32 UART Parity Control Bits](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-UART-Parity-Control-Bits.png?ezimgfmt=ng:webp/ngcb6)

**Even parity**: the parity bit is calculated to obtain an even number of – s– inside the frame made of the 7 or 8 LSB bits (depending on whether M is equal to 0 or 1) and the parity bit.

**Odd parity**: the parity bit is calculated to obtain an odd number of – s– inside the frame made of the 7 or 8 LSB bits (depending on whether M is equal to 0 or 1) and the parity bit.

**3.7 USART Multi-Processor Communication**

There is a possibility of performing multiprocessor communication with the USART (several USARTs connected in a network). For instance, one of the USARTs can be the master, its TX output is connected to the RX input of the other USART. The others are slaves, their respective TX outputs are logically ANDed together and connected to the RX input of the master.

In multiprocessor configurations it is often desirable that only the intended message recipient should actively receive the full message contents, thus reducing redundant USART service overhead for all non-addressed receivers.

The non-addressed devices may be placed in mute mode by means of the muting function.

In mute mode:

*   None of the reception status bits can be set.
*   All the receive interrupts are inhibited.
*   The RWU bit in the USART_CR1 register is set to 1. RWU can be controlled automatically by hardware or written by the software under certain conditions.

The USART can enter or exit from mute mode using one of two methods, depending on the WAKE bit in the USART_CR1 register:

*   Idle Line detection if the WAKE bit is reset,
*   Address Mark detection if the WAKE bit is set.

**IDLE Line Detection (WAKE=0)**

The USART enters mute mode when the RWU bit is written to 1. It wakes up when an Idle frame is detected. Then the RWU bit is cleared by hardware but the IDLE bit is not set in the USART_SR register. RWU can also be written to 0 by software.

![UART Multi-processor Communication Mode2](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Multi-processor-Communication-Mode2.png?ezimgfmt=ng:webp/ngcb6)

**Address Mark Detection (WAKE=1)**

In this mode, bytes are recognized as addresses if their MSB is a – – else they are considered as data. In an address byte, the address of the targeted receiver is put on the 4 LSB. This 4-bit word is compared by the receiver with its own address which is programmed in the ADD bits in the USART_CR2 register.

The USART enters mute mode when an address character is received which does not match its programmed address. In this case, the RWU bit is set by hardware. The RXNE flag is not set for this address byte and no interrupt nor DMA request is issued as the USART would have entered the mute mode.

It exits from mute mode when an address character is received which matches the programmed address. Then the RWU bit is cleared and subsequent bytes are received normally. The RXNE bit is set for the address character since the RWU bit has been cleared.

The RWU bit can be written to 0 or 1 when the receiver buffer contains no data (RXNE=0 in the USART_SR register). Otherwise, the write attempt is ignored.

![UART Multi-processor Communication Mode1](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Multi-processor-Communication-Mode1.png?ezimgfmt=ng:webp/ngcb6)

**3.8 USART Synchronous Communication**

The synchronous mode is selected by writing the CLKEN bit in the USART_CR2 register to 1. In synchronous mode, the following bits must be kept clear (0):

*   LINEN bit in the USART_CR2 register,
*   SCEN, HDSEL, and IREN bits in the USART_CR3 register.

The USART allows the user to control bidirectional synchronous serial communication in master mode. The CK pin is the output of the USART transmitter clock. No clock pulses are sent to the CK pin during the start bit and stop bit. Depending on the state of the LBCL bit in the USART_CR2 register clock pulses will or will not be generated during the last valid data bit (address mark). The CPOL bit in the USART_CR2 register allows the user to select the clock polarity, and the CPHA bit in the USART_CR2 register allows the user to select the phase of the external clock.

![UART Synchronous Operation](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Synchronous-Operation.png?ezimgfmt=ng:webp/ngcb6)

During IDLE, preamble, and send break, the external CK clock is not activated. In synchronous mode, the USART transmitter works exactly like in asynchronous mode. But as CK is synchronized with TX (according to CPOL and CPHA), the data on TX is synchronous.

In this mode, the USART receiver works in a different manner compared to the asynchronous mode. If RE=1, the data is sampled on CK (rising or falling edge, depending on CPOL and CPHA), without any oversampling. A setup and a hold time must be respected (which depends on the baud rate: 1/16 bit time).

![UART Synchronous Mode Operation](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Synchronous-Mode-Operation.png?ezimgfmt=ng:webp/ngcb6)

The CK pin works in conjunction with the TX pin. Thus, the clock is provided only if the transmitter is enabled (TE=1) and data is being transmitted (the data register USART_DR has been written). This means that it is not possible to receive synchronous data without transmitting data.

**3.9 USART Single-Wire (Half-Duplex) Communication**

The single-wire half-duplex mode is selected by setting the HDSEL bit in the USART_CR3 register. In this mode, the following bits must be kept clear (0):

LINEN and CLKEN bits in the USART_CR2 register,

SCEN and IREN bits in the USART_CR3 register.

The USART can be configured to follow a single-wire half-duplex protocol. In single-wire half-duplex mode, the TX and RX pins are connected internally. The selection between half and full-duplex communication is made with a control bit 鈥楬ALF DUPLEX SEL– (HDSEL in USART_CR3).

As soon as HDSEL is written to 1:

*   RX is no longer used.
*   TX is always released when no data is transmitted. Thus, it acts as a standard IO in idle or in reception. It means that the IO must be configured so that TX is configured as floating input (or output high open-drain) when not driven by the USART.

Apart from this, the communications are similar to what is done in normal USART mode.

**3.10 USART Errors**

The USART hardware in STM32 microcontrollers is capable of detecting 4 errors in operations. These error signals are as follows.

**3.10.1 Overrun Error**

An overrun error occurs when a character is received when RXNE has not been reset. Data can not be transferred from the shift register to the RDR register until the RXNE bit is cleared.

The RXNE flag is set after every byte received. An overrun error occurs if the RXNE flag is set when the next data is received or the previous DMA request has not been serviced. When an overrun error occurs:

*   The **ORE** bit is set.
*   The RDR content will not be lost. The previous data is available when a read to USART_DR is performed.
*   The shift register will be overwritten. After that point, any data received during the overrun is lost.
*   An interrupt is generated if either the RXNEIE bit is set or both the EIE and DMAR bits are set.
*   The ORE bit is reset by a read to the USART_SR register followed by a USART_DR register read operation.
*   The ORE bit, when set, indicates that at least 1 data has been lost. There are two possibilities:
*   – if RXNE=1, then the last valid data is stored in the receive register RDR and can be read.  
    
*   – if RXNE=0, then it means that the last valid data has already been read and thus there is nothing to be read in the RDR. This case can occur when the last valid data is read in the RDR at the same time as the new (and lost) data is received. It may also occur when the new data is received during the reading sequence (between the USART_SR register read access and the USART_DR read access).  
    

**3.10.2 Noise Error**

Over-sampling techniques are used (except in synchronous mode) for data recovery by discriminating between valid incoming data and noise.

![UART Oversampling For Noise Detection](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Oversampling-For-Noise-Detection.png?ezimgfmt=ng:webp/ngcb6)

When noise is detected in a frame:

*   The **NE** is set at the rising edge of the RXNE bit.
*   The invalid data is transferred from the Shift register to the USART_DR register.
*   No interrupt is generated in the case of single-byte communication. However, this bit rises at the same time as the RXNE bit which itself generates an interrupt. In the case of multi-buffer communication, an interrupt will be issued if the EIE bit is set in the USART_CR3 register.

The NE bit is reset by a USART_SR register read operation followed by a USART_DR register read operation.

**3.10.3 Framing Error**

A framing error is detected when: The stop bit is not recognized on reception at the expected time, following either a desynchronization or excessive noise.

When the framing error is detected:

*   The **FE** bit is set by hardware
*   The invalid data is transferred from the Shift register to the USART_DR register.
*   No interrupt is generated in the case of single-byte communication. However, this bit rises at the same time as the RXNE bit which itself generates an interrupt. In the case of multi-buffer communication, an interrupt will be issued if the EIE bit is set in the USART_CR3 register.

The FE bit is reset by a USART_SR register read operation followed by a USART_DR register read operation.

**3.10.4 Parity Check Error**

When a parity error is detected in the received data frame, the **PE** bit is set and it'll fire an interrupt if it's enabled. It can be set to even or odd parity depending on the application and whether it's implemented in the communication or not. We won鈥檛 be using the parity check in all the tutorials and LABs dealing with USART.

**3.11 USART Hardware Data Flow Control**

It is possible to control the serial data flow between two devices by using the CTS input and the RTS output. RTS and CTS flow control can be enabled independently by writing respectively RTSE and CTSE bits to 1 (in the USART_CR3 register). The diagram below shows how to connect two devices in this mode.

![UART Hardware Data Flow Control](https://deepbluembedded.com/wp-content/uploads/2020/06/UART-Hardware-Data-Flow-Control.png?ezimgfmt=ng:webp/ngcb6)

**3.11.1 RTS Flow Control**

If the RTS flow control is enabled (RTSE=1), then RTS is asserted (tied low) as long as the USART receiver is ready to receive new data. When the receive register is full, RTS is de-asserted, indicating that the transmission is expected to stop at the end of the current frame.

**3.11.2 CTS Flow Control**

If the CTS flow control is enabled (CTSE=1), then the transmitter checks the CTS input before transmitting the next frame. If CTS is asserted (tied low), then the next data is transmitted (assuming that data is to be transmitted, in other words, if TXE=0), else the transmission does not occur. When CTS is de-asserted during a transmission, the current transmission is completed before the transmitter stops.

**3.12 LIN Mode**

The LIN (Local Interconnection Network) Mode is selected by setting the LINEN bit in the USART_CR2 register.

In LIN mode, the following bits must be kept clear (0):

*   STOP[1:0], CLKEN in the USART_CR2 register.
*   SCEN, HDSEL and IREN in the USART_CR3 register.

**3.12.1 LIN Data Transmission**

The same procedure for USART transmission discussed earlier applies to LIN Master transmission with the following differences:

*   Clear the M bit to configure 8-bit word length.
*   Set the LINEN bit to enter LIN mode. In this case, setting the SBK bit sends 13 – – bits as a break character. Then a bit of value – – is sent to allow the next start detection.

**3.12.2 LIN Data Reception**

A break detection circuit is implemented in the USART. The detection is totally independent of the normal USART receiver. A break can be detected whenever it occurs, during idle state or during a frame.

When the receiver is enabled (RE=1 in USART_CR1), the circuit looks at the RX input for a start signal. The method for detecting start bits is the same when searching break characters or data. After a start bit has been detected, the circuit samples the next bits exactly like for the data (on the 8th, 9th and 10th samples). If 10 (when the LBDL = 0 in USART_CR2) or 11 (when LBDL=1 in USART_CR2) consecutive bits are detected as – –  and are followed by a delimiter character, the LBD flag is set in USART_SR. If the LBDIE bit=1, an interrupt is generated.

Before validating the break, the delimiter is checked for as it signifies that the RX line has returned to a high level. If a – – is sampled before the 10 or 11 have occurred, the break detection circuit cancels the current detection and searches for a start bit again.

**3.13 IrDA Mode**

The IrDA mode is selected by setting the IREN bit in the USART_CR3 register. In IrDA mode, the following bits must be kept clear (0):

*   LINEN, STOP, and CLKEN bits in the USART_CR2 register,
*   SCEN and HDSEL bits in the USART_CR3 register.

The IrDA SIR physical layer specifies the use of a Return to Zero, an Inverted (RZI) modulation scheme that represents logic 0 as an infrared light pulse.

The SIR Transmit encoder modulates the Non-Return to Zero (NRZ) transmit bitstream output from USART. The output pulse stream is transmitted to an external output driver and infrared LED. USART supports only bit rates up to 115.2Kbps for the SIR ENDEC. In normal mode, the transmitted pulse width is specified as 3/16 of a bit period.

The SIR receive decoder demodulates the return-to-zero bitstream from the infrared detector and outputs the received NRZ serial bit stream to USART. The decoder input is normally HIGH (marking state) in the idle state. The transmit encoder output has the opposite polarity to the decoder input. A start bit is detected when the decoder input is low.

![IrDA Hardware USART Support In STM32](https://deepbluembedded.com/wp-content/uploads/2020/06/IrDA-Hardware-USART-Support-In-STM32.png?ezimgfmt=ng:webp/ngcb6)

* * *

### **4. STM32 USART Mode Configuration**

To get an idea of what configuration modes are supported in which USART module in the target MCU you鈥檙e using, you'll have to check out the datasheet for it. You'll find a table like the one shown below, highlighting which modes are supported in each USART module.

![STM32 USART Mode Configuration](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-USART-Mode-Configuration.png?ezimgfmt=ng:webp/ngcb6)

For the STM32F103C8 microcontroller in the blue pill board we鈥檙e using, there are only 3 USARTs.

For the STM32L432KC microcontroller in the Nucleo32-L432KC board we鈥檙e using, there are only 3 USARTs.

* * *

### **5. USART Interrupts**

The USART interrupt events are connected to the same interrupt vector. So the USART fires a single interrupt signal regardless of the source of it. The software will have to detect it.

*   During transmission: Transmission Complete, Clear to Send or Transmit Data Register empty interrupt.
*   While receiving: Idle Line detection, Overrun error, Receive Data register not empty, Parity error, LIN break detection, Noise Flag (only in multi buffer communication), and Framing Error (only in multi buffer communication).

![STM32 USART Interrupts](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-USART-Interrupts.png?ezimgfmt=ng:webp/ngcb6)

These events generate an interrupt if the corresponding Enable Control Bit is set. The diagram down below shows this interrupt signals mapping to only one request line.

![STM32 USART Interrupt Mapping Diagram](https://deepbluembedded.com/wp-content/uploads/2020/06/STM32-USART-Interrupt-Mapping-Diagram.png?ezimgfmt=ng:webp/ngcb6)


* * *

**And That's It For This Tutorial .. In The Next Few Tutorials, We'll Do Some LABs To Use The USART Serial Communication In Practice. So, Get Ready For That! And Please, Consider Supporting The Content By SHARING It On Socials Or Via [Patreon](https://www.patreon.com/deep_blue).**

**Author**  **Khaled Magdy**

![](https://deepbluembedded.com/wp-content/cache/breeze-extra/gravatars/ed20e191de77104a5b091d9bc5821c4a?ezimgfmt=ng:webp/ngcb6)

Embedded systems engineer with several years of experience in embedded software and hardware design. I work as an embedded SW engineer in the Automotive & e-Mobility industry. However, I still do Hardware design and SW development for DSP, Control Systems, Robotics, AI/ML, and other fields I'm passionate about.

I love reading, writing, creating projects, and teaching. A reader by day and a writer by night, it's my lifestyle. I believe that the combination of brilliant minds, bold ideas, and a complete disregard for what is possible, can and will change the world! I will be there when it happens, will you?

**Learn STM32 Basics**

-   [Setting Up STM32 Toolchain](https://deepbluembedded.com/stm32-ecosystem-development-environment-setup) 
-   [Getting Started With STM32](https://deepbluembedded.com/getting-started-with-stm32-arm-cortex-mcus/) 
-   [STM32 HAL Library](https://deepbluembedded.com/stm32-hal-library-tutorial-examples/) 
-   [GPIO Tutorial](https://deepbluembedded.com/stm32-gpio-tutorial/) 
-   [GPIO Output (Write & Toggle Pin)](https://deepbluembedded.com/stm32-gpio-write-pin-digital-output-lab/) 
-   [GPIO Input (Read Pin)](https://deepbluembedded.com/stm32-gpio-pin-read-lab-digital-input/) 
-   [STM32 delay_us (DWT + Timer)](https://deepbluembedded.com/stm32-delay-microsecond-millisecond-utility-dwt-delay-timer-delay/) 
-   [STM32 delay_us (SysTick Timer)](https://deepbluembedded.com/stm32-systick-timer-microseconds-delay-us-delay-function/) 
-   [Debugging With ST-Link v2](https://deepbluembedded.com/stm32-debugging-with-st-link-v2-swd-serial-wire-viewer/) 
-   [STM32 Serial Print Debugging](https://deepbluembedded.com/stm32-debugging-with-uart-serial-print/) 
-   [STM32 Interrupts Tutorial](https://deepbluembedded.com/stm32-interrupts-tutorial-nvic-exti/) 
-   [External Interrupt Pins](https://deepbluembedded.com/stm32-external-interrupt-example-lab/) 
-   [STM32 Timers Tutorial](https://deepbluembedded.com/stm32-timers-tutorial-hardware-timers-explained/) 
-   [Timers: Timer Mode + Interrupt](https://deepbluembedded.com/stm32-timer-interrupt-hal-example-timer-mode-lab/) 
-   [Timers: Counter Mode](https://deepbluembedded.com/stm32-counter-mode-example-frequency-counter-timer-in-counter-mode/) 
-   [Timers: Input Capture ICU Mode](https://deepbluembedded.com/stm32-input-capture-frequency-measurement-example-timer-input-capture-mode/) 
-   [Timers: Encoder Mode](https://deepbluembedded.com/stm32-timer-encoder-mode-stm32-rotary-encoder-interfacing/) 
-   [STM32 PWM Tutorial](https://deepbluembedded.com/stm32-pwm-example-timer-pwm-mode-tutorial/) 
-   [ECUAL Drivers Integration](https://deepbluembedded.com/adding-ecual-drivers-to-your-stm32-project-configurations-options/) 
-   [STM32 DMA Tutorial](https://deepbluembedded.com/stm32-dma-tutorial-using-direct-memory-access-dma-in-stm32/) 
-   [MATH Library (Functions)](https://deepbluembedded.com/map-function-embedded-c/) 
-   [STM32 EEPROM (FEE)](https://deepbluembedded.com/stm32-eeprom-flash-emulation-fee-read-write-examples/) 
-   [TSC (Touch Sensing Controller)](https://deepbluembedded.com/stm32-tsc-tutorial-examples-touch-sensing-controller/)

**Analog Peripherals**


-   [STM32 ADC Tutorial](https://deepbluembedded.com/stm32-adc-tutorial-complete-guide-with-examples/) 
-   [ADC: Single-Channel Single-Conv (Poll, Int, DMA)](https://deepbluembedded.com/stm32-adc-read-example-dma-interrupt-polling/) 
-   [ADC: Single-Channel Continuous-Conversion](https://deepbluembedded.com/stm32-adc-continuous-conversion-mode-dma-poll-interrupt-single-channel/) 
-   [ADC: Multi-Channel Single-Conv (Poll, DMA)](https://deepbluembedded.com/stm32-adc-multi-channel-scan-dma-poll-single-conversion/) 
-   [ADC: Multi-Channel Continuous-Conversion](https://deepbluembedded.com/stm32-adc-multi-channel-scan-continuous-mode-dma-poll-examples/) 
-   [ADC: Timer & External Trigger Sources](https://deepbluembedded.com/stm32-adc-timer-trigger-example-external-trigger-sources/) 
-   [ADC: Injected Channel Conversion Mode](https://deepbluembedded.com/stm32-adc-injected-channel-conversion-mode-example/) 
-   [ADC: Analog Watchdog Mode](https://deepbluembedded.com/stm32-analog-watchdog-adc-mode-code-example/) 
-   [STM32 DAC Tutorial](https://deepbluembedded.com/stm32-dac-tutorial-example-hal-code-analog-signal-genreation/) 
-   [DAC: Generating Waveforms](https://deepbluembedded.com/stm32-dac-sine-wave-generation-stm32-dac-dma-timer-example/) 
-   [DAC: PWM As a DAC](https://deepbluembedded.com/convert-pwm-to-a-dac-using-pwm-to-generate-analog-waveforms/) 
-   [DAC: PWM+DMA+Timer (Wave Gen.)](https://deepbluembedded.com/stm32-change-pwm-duty-cycle-with-dma-for-sine-wave-generation/) 
-   [STM32 OpAmp Tutorial](https://deepbluembedded.com/stm32-opamp-pga-adc-example-tutorial/) 
-   [STM32 Comparator Tutorial](https://deepbluembedded.com/stm32-comparator-example-tutorial-internal-analog-comparator/)

**Serial Communication**


-   [STM32 UART Tutorial](https://deepbluembedded.com/stm32-usart-uart-tutorial/) 
-   [UART: RX/TX (Poll, Interrupt, DMA)](https://deepbluembedded.com/how-to-receive-uart-serial-data-with-stm32-dma-interrupt-polling/) 
-   [UART: STM32-PC USB-TTL](https://deepbluembedded.com/stm32-serial-port-uart-with-usb-ttl-converter-pc-interfacing/) 
-   [STM32 SPI Tutorial](https://deepbluembedded.com/stm32-spi-tutorial/) 
-   [SPI: RX/TX (Poll, Interrupt, DMA)](https://deepbluembedded.com/how-to-receive-spi-with-stm32-dma-interrupt/) 
-   [STM32 I2C Tutorial](https://deepbluembedded.com/stm32-i2c-tutorial-hal-examples-slave-dma/) 
-   [I2C Scanner](https://deepbluembedded.com/stm32-i2c-scanner-hal-code-example/) 
-   [USB: CDC Device (VCP)](https://deepbluembedded.com/stm32-usb-cdc-virtual-com-port-vcp-examples/)

**Wireless & IoT**


-   [HC-05 Bluetooth (Master-Slave)](https://deepbluembedded.com/stm32-hc-05-bluetooth-module-examples/)

**STM32 Displays**


-   [LCD 16x2 Display](https://deepbluembedded.com/stm32-lcd-16x2-tutorial-library-alphanumeric-lcd-16x2-interfacing/) 
-   [I2C LCD 16x2 Display](https://deepbluembedded.com/stm32-i2c-lcd-library-example-16x2-20x4-multiple-lcds/) 
-   [7-Segments Display](https://deepbluembedded.com/interfacing-7-segment-display-stm32/) 
-   [Dot Matrix (MAX7219)](https://deepbluembedded.com/stm32-max7219-dot-matrix-display-interfacing-library/)

**STM32 Sensors**


-   [LDR (Light Sensor)](https://deepbluembedded.com/stm32-light-sensor-ldr-interfacing-ambient-light-sensor-project/) 
-   [HC-SR04 Ultrasonic Sensor](https://deepbluembedded.com/stm32-ultrasonic-sensor-input-capture-library/) 
-   [LM35 Temperature Sensor](https://deepbluembedded.com/stm32-lm35-temperature-sensor-example-lm35-with-stm32-adc/) 
-   [Capacitive Touch Button](https://deepbluembedded.com/stm32-capacitive-touch-sensor-switch-ttp223/)

**Motors, Drivers, Actuators**


-   [DC Motors + L293D](https://deepbluembedded.com/stm32-dc-motor-speed-control-pwm-l293d-examples/) 
-   [Servo Motors](https://deepbluembedded.com/stm32-servo-motor-control-with-pwm-servo-library-examples-code/) 
-   [28BYJ-48 Unipolar Stepper Motor](https://deepbluembedded.com/stm32-stepper-motor-control-library-unipolar-28byj-48-uln2003/)

**STM32 Modules**


-   [Buttons & LEDs](https://deepbluembedded.com/stm32-gpio-leds-buttons-interfacing-driver/) 
-   [Keypad 4x4](https://deepbluembedded.com/stm32-keypad-interfacing-library/) 
-   [Analog Joystick](https://deepbluembedded.com/stm32-joystick-library-driver-examples/)

**STM32 Useful Guides**


-   [STM32 Blue Pill Pinout](https://deepbluembedded.com/stm32-blue-pill-pinout-programming-guide/) 
-   [STM32 Proteus Simulation](https://deepbluembedded.com/stm32-proteus-library-bluepill-simulation-stm32f103c6/) 
-   [GPIO Registers Programming](https://deepbluembedded.com/stm32-gpio-registers-direct-access-fast-pin-control/) 
-   [STM32 FPU Unit Enable](https://deepbluembedded.com/stm32-fpu-floating-point-unit-enable-disable/) 
-   [Touch Sensing Without TSC](https://deepbluembedded.com/stm32-capacitive-touch-sensing-without-tsc/)

**STM32 Arduino**

-   [STM32 Arduino Programming](https://deepbluembedded.com/stm32-arduino-ide-blue-pill-stm32f103c8t6/)


Resources

1. [STM32 ARM MCUs Programming Course](https://deepbluembedded.com/stm32-arm-programming-tutorials/)
2. [Embedded Systems - PIC Course](https://deepbluembedded.com/pic-programming-tutorials/#toc)
3. [DeepBlue Patreon Page](https://www.patreon.com/deep_blue)
4. [PayPal Donation](https://www.paypal.com/paypalme/KhaledMagdy)
5. [Books Recommendation List](https://deepbluembedded.com/books-recommendations/)

ABOUT DEEPBLUE

DeepBlueMbedded is an educational website where you can find technical content (Articles – Tutorials – Projects – etc..). Mainly on Embedded Systems & ECE Related topics. You'll find also downloadable resources like firmware code examples, schematics, hardware designs, and more.

It's been and will always be a free resource of information. So, please consider supporting this work if possible.

SHARE & SUPPORT

You can always show your support by sharing my articles and tutorials on social networks. It's the easiest way to support my work that costs nothing and would definitely be appreciated!

OR You Can Support Me Through This Link

[SUPPORT](https://deepbluembedded.com/support-me/)

DISCLOSURE

DeepBlueMbedded.com is a participant in the Amazon Services LLC Associates Program, eBay Partner Network EPN, affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and eBay.com 

You can also check my Full [Disclaimer](https://deepbluembedded.com/disclaimer/) Page For More Information.

Copyright **©** 2024 DeepBlueMbedded.com . All Rights Reserved.



## //  I2C
1. I2C Bus Specification and User Manual  https://i2c.info/i2c-bus-specification
2. I2C-bus specification and user manual Rev. 03 — 19 June 2007 https://web.eecs.umich.edu/~prabal/teaching/resources/eecs373/NXP-I2C-Specification.pdf
3. I2C-bus specification and user manual Rev. 6 — 4 April 2014 https://community.nxp.com/pwmxy87654/attachments/pwmxy87654/Power-Management/1156/1/UM10204.pdf
4. I2C-bus specification and user manual Rev. 7.0 — 1 October 2021 https://www.nxp.com.cn/docs/en/user-guide/UM10204.pdf

I2C - Inter-Integrated Circuit 是由 Philips 公司开发的一种简单、双向二线制同步串行总线。它只需要两根线即可在连接于总线上的器件之间传送信息。主器件用于启动总线传送数据，并产生时钟以开放传送的器件，此时任何被寻址的器件均被认为是从器件。在总线上主和从、发和收的关系不是恒定的，而取决于此时数据传送方向。如果主机要发送数据给从器件，则主机首先寻址从器件，然后主动发送数据至从器件，最后由主机终止数据传送；如果主机要接收从器件的数据，首先由主器件寻址从器件。然后主机接收从器件发送的数据，最后由主机终止接收过程。在这种情况下，主机负责产生定时时钟和终止数据传送。接口定义：
        
        SCL - 串行时钟线
        SDA - 串行数据线接口

I2C 总线在传送数据过程中共有三种类型信号，开始信号、结束信号和应答信号。

- 开始信号：SCL 为高电平，SDA 由高电平向低电平跳变，开始传送数据。
- 结束信号：SCL 为高电平，SDA 由低电平向高电平跳变，结束传送数据。
- 应答信号：接收数据的 IC 在接收到 8bit 数据后，向发送数据的 IC 发出特定的低电平脉冲，表示已收到数据。CPU 向受控单元发出一个信号后，等待受控单元发出一个应答信号，CPU 接收到应答信号后，根据实际情况作出是否继续传递信号的判断。若未收到应答信号，由判断为受控单元出现故障。

I2C总线特点可以概括如下：

- 在硬件上，I2C总线只需要一根数据线和一根时钟线两根线，总线接口已经集成在芯片内部，不需要特殊的接口电路，而且片上接口电路的滤波器可以滤去总线数据上的毛刺。因此I2C总线简化了硬件电路PCB布线，降低了系统成本，提高了系统可靠性。因为I2C芯片除了这两根线和少量中断线，与系统再没有连接的线，用户常用IC可以很容易形成标准化和模块化，便于重复利用。
- I2C总线是一个真正的多主机总线，如果两个或多个主机同时初始化数据传输，可以通过冲突检测和仲裁防止数据破坏，每个连接到总线上的器件都有唯一的地址，任何器件既可以作为主机也可以作为从机，但同一时刻只允许有一个主机。数据传输和地址设定由软件设定，非常灵活。总线上的器件增加和删除不影响其他器件正常工作。
- I2C总线可以通过外部连线进行在线检测，便于系统故障诊断和调试，故障可以立即被寻址，软件也利于标准化和模块化，缩短开发时间。
- 连接到相同总线上的IC数量只受总线最大电容的限制，串行的 8bit 双向数据传输位速率在标准模式下可达 100Kbit/s，快速模式下可达 400Kbit/s，高速模式下可达 3.4Mbit/s。
- 总线具有极低的电流消耗。抗高噪声干扰，增加总线驱动器可以使总线电容扩大10倍，传输距离达到15m；兼容不同电压等级的器件，工作温度范围宽。

## // SPI

SPI - Serial Peripheral Interface 串行外围接口是 Motorola 首先在其 MC68HCXX 系列处理器上定义的。SPI 接口主要应用在 EEPROM、FLASH、实时时钟、AD转换器，还有数字信号处理器和数字信号解码器之间。

SPI 接口是在 CPU 和外围低速器件之间进行同步串行数据传输，在主器件的移位脉冲下，数据按位传输，高位在前，低位在后，为全双工通信，数据传输速度总体来说比I2C总线要快，速度可达到几Mbps。接口定义：

        MOSI – 主器件数据输出，从器件数据输入
        MISO – 主器件数据输入，从器件数据输出
        SCLK –时钟信号，由主器件产生,最大为fPCLK/2，从模式频率最大为fCPU/2
        NSS – 从器件使能信号，由主器件控制,有的IC会标注为CS(Chip select)

在点对点的通信中，SPI 接口不需要进行寻址操作，且为全双工通信，显得简单高效。在多个从器件的系统中，每个从器件需要独立的使能信号，硬件上比I2C系统要稍微复杂一些。SPI 接口在内部硬件实际上是两个简单的移位寄存器，传输的数据为 8bit，在主器件产生的从器件使能信号和移位脉冲下，按位传输，高位在前，低位在后。

SPI 协议简单，相对数据速率高。 但占用的 Pin 口较多，没有指定的流控制，没有应答机制确认是否接收到数据。


## // USB to TTL

USB to TTL 是 USB - Universal Serial Bus 接口转 TTL - Transistor-Transistor Logic 晶体管逻辑电路，一般使用 CH340E 芯片模块。MAX232 芯片模块则是将 TTL 转换为 RS-232。

现代个人电脑上常用的通信接口是 USB 接口，传统的还有 DB9 九针口串行口不多见了，它的电平逻辑遵照 RS-232 规范。RS232 接口标准的逻辑 1 电平为 -3 ~ -15V，逻辑 0 电平为 3 ~ 15V，电平是反相的。而单片机上 RXD、TXD、VCC、GND 四个引脚提供的串行通信口相应电平逻辑遵照 TTL 规范。当单片机要与这些接口连通时，就需要电平转换模块，转换的目的是把电平转换到双方都能识别的电平信号。

TTL 电平定义点位的高电平 H 和低电平 L 的电压范围，又分为输入、输出两种：

        输入 L: < 0.1*Vcc H: > 0.9*Vcc
        输出 L: < 0.3*Vcc H: > 0.7*Vcc

当然，新的学习板上一般都有肯定都已经集成了类似 PL2303、CP2102 之类的 USB-TTL 芯片，相应接口也变成了 USB 接口；有些学习板上集成的是 MAX232 之类的 TTL 转 RS-232 芯片，相应的接口也变成了 DB9 接口。


- 情况1：USB 与不带电平转换芯片的单片机通信

        方法：外购USB转TTL模块，如下图所示。该模块一端接入PC机的USB接口，另一端有TXD、RXD、GND、5V、3.3V五个引脚，分别与单片机的RXD、TXD、GND、5V引脚相连，对于采用3.3V供电的单片机则把5V改为3.3V即可。该模块核心就是一块PL2303、CP2102芯片进行USB与TTL电平的转换。

- 情况2：USB 与集成了 USB 转 TTL 芯片的单片机通信

        方法：直接用 USB 线连接即可，单片机上的 USB 接口形式有 Type-A、Type-B、Micro-USB、Mini-USB 几种，需要选择合适的接线。 

- 情况3：USB 与集成了 TTL 转 RS-232 芯片的单片机通信

        方法：外购 USB 转 RS-232 模块，即通过 USB 扩展出一个 DB9 串口，该模块核心是在一块 CH340 或 CH341 电平转换芯片，扩展出 RS-232 接口。

- 情况4：电脑 DB9 接口与不带电平转换芯片的单片机通信

        方法：外购RS232转TTL模块，如下图所示。该模块一端是DB9与电脑DB9连接，一端是RXD、TXD、VCC、GND与单片机相应引脚连接。其核心是一块max232电平转换芯片。

最后，PC 端还要安装相应的驱动程序。



## // ISP & IAP 两种烧录方法

ISP - In-System Programming 在系统可编程，通过编程器对芯片进行完全烧写，指电路板上的空白器件可以编程写入最终用户代码，免去了调试时由于频繁地插入取出芯片对芯片和电路板带来的不便。，而已经编程的器件也可以用 ISP 方式擦除或再编程，这就是 In-System 的字面意义。

ISP 的实现相对要简单一些，一般通用做法是内部的存储器可以由上位机的软件通过串口来进行改写。对于单片机来讲可以通过 SPI - Serial Peripheral Interface 串行外设接口总线或其它的串行接口，接收上位机传来的数据并写入存储器中。所以即使我们将芯片焊接在电路板上，只要留出和上位机接口的这个串口，就可以实现芯片内部存储器的改写，而无须再取下芯片。

SPI 串行通信原理很简单，它以主从方式工作，这种模式通常有一个主设备和一个或多个从设备，需要至少 4 根线，事实上单向传输时 3 根也可以。也是所有基于 SPI 的设备共有的，这些线是：

- MISO – Master Input/Slave Output 主设备数据输入，从设备数据输出；
- MOSI – Master Output/Slave Input 主设备数据输出，从设备数据输入；
- SCLK – Serial Clock，时钟信号，由主设备产生；
- CS   – Chip Select，从设备使能信号，由主设备控制。

ISP 的实现一般需要很少的外部电路辅助实现， 而 IAP 的实现更加灵活，通常可利用单片机的串行口接到计算机的 RS232 口，通过专门设计的固件程序来编程内部存储器，可以通过现有的 Internet 或其它通讯方式很方便地实现远程升级和维护。IAP 技术的优势是不需要编程器就可以进行单片机的实验和开发，单片机芯片可以直接焊接到电路板上，调试结束即成成品。

IAP - In-Application Programming 指 MCU 可以在系统中获取新代码并对自己重新编程，即可用程序来改变程序，保留基本的 Booloader 程序，按需要更新主程序，目的是为了在产品发布后可以方便地通过预留的通信口对产品中的固件程序进行更新升级。

IAP 的实现相对要复杂一些，单片机内部一定要有两块存储区，一般一块被称为 BOOT 区，另外一块用来存放用户主程序被称为用户存储区 User Flash。单片机上电运行在 BOOT 区，如果有外部改写程序的条件满足，则对存储区的程序进行改写操作。如果外部改写程序的条件不满足，程序指针跳到存储区，开始执行放在存储区的程序。IAP 就是用户自己的程序在运行过程中对 User Flash 的部分区域进行烧写。由 Bootloader 负责检测外部存储器，如 SD 卡中是否有固件更新所需的 BIN 文件。如果检测到所需要的文件，则开始复制文件更新固件。更新结束后跳转到指定的地址开始执行最新的程序。

IAP 技术是从结构上将 Flash 存储器映射为两个存储体，当运行一个存储体上的用户程序时，可对另一个存储体重新编程，之后将程序从一个存储体转向另一个。

对于 STM32 来说，因为它的中断向量表位于程序存储器的最低地址区，为了使第一部分代码能够正确地响应中断，STM32 系列芯片内部 FLASH 的起始地址为 0X08000000，Bootloader 程序文件就从此地址开始写入，存放程序代码的首地址紧跟 Bootloader 之后。当程序开始执行时，首先运行的是 Bootloader 程序，此时 Bootloader 可检测 SD 卡中的 BIN 文件并将其复制到 APP 区域使固件得以更新，固件更新结束后还需要跳转到 APP 程序开始执行新的程序。

引导程序 Bootloader 代码必须通过其它手段，如 ST-LINK 编程器或 ISP 烧入；用户主程序代码可以使用 Bootloader 实现的 IAP 功能烧写，也可以两部分代码一道烧写。

如果 Bootloader 程序被破坏，产品必须返厂才能重新烧写程序，这是很麻烦并且非常耗费时间和金钱的。针对这样的需求，STM32 在对 Flash 区域实行读保护的同时，自动地对用户 Flash 区的开始 4 页设置为写保护，这样可以有效地保证 IAP 程序区域不会被意外地破坏。对于开发者，需要仔细为产品编写好 Bootloader 程序，避免产品在用户使用过程中损坏 IAP。

现在流行的 Arduino Nano 就是使用 IAP 烧录方式，原板卡生产时就已经通过编程器烧录好 bootloader 引导程序部分。用户只需要开发主程序，通过 IAP 上传就可以实现对芯片编程，完全脱离了编程器的依赖，十分便利！而 bootloader 部分基本不需要进行修改，只有在需要升级功能是进行更新，因此它也称为固件 Firmware！

Arduino AVR firmware http://downloads.arduino.cc/cores/avr-1.8.1.tar.bz2
Arduino ISP 固件原代码下载 https://github.com/arduino/ArduinoISP

当然，如果手上有相应的编程器，则可以对 bootloader 进行修改，给 Arduino 烧写 bootloader 时，选择正确的编程器即可进行整个芯片的烧录。如果不能下载用户程序，那么多半可能是板子上烧写的并不是正确的 Nano bootloader，或者硬件损坏。



# /🚩 编程器
https://www.st.com/en/development-tools/st-link-v2.html

作为一个单片机开发人员，每天跟我们打交道的工具无非两种，一种是PC机上的开发环境，比如 Keil MDK、IAR Embedded Workbench 等等；另一种就是集程序下载、调试功能于一体的编程器 debugger and programmer，也可以叫下载器、仿真器、烧录器，特别指出，烧录器一般指批量烧录阶段所用的那种可以快速完成芯片批量烧录的工具。

在开发环境下编写好程序，编译生成目标芯片的机器码后，通过编程器写入芯片内部的 RAM 中。

常见的编程器有 JTAG、JLINK、ULINK、ST-LINK 等，区别介绍：

- LINK 的功能要比 JTAG 强大，因为 JTAG 用的是并行口，所以在使用的时候不方便，而且功能也不如 JLINK。
- ULINK 是KEIL公司开发的仿真器，功能更加强大，专用于 KEIL 平台使用，ADS、IAR 下不能使用。
- JLINK 是通用的开发工具，可以用于 KEIL，IAR，ADS 等平台，速度，效率，功能均比 ULINK 强。
- ULINK2 的下载速度和调试速度确实没有 JLINK 的快。
- ST-LINK/V2 可用于 STM8、 STM32 系列芯片。

## // JTAG

JTAG（Joint Test AcTIon Group；联合测试工作组）是一种国际标准测试协议（IEEE 1149.1兼容），主要用于芯片内部测试。现在多数的高级器件都支持JTAG协议，如DSP、FPGA器件等。标准的JTAG接口是4线：TMS、TCK、TDI、TDO，分别为模式选择、时钟、数据输入和数据输出线。标准的JTAG接口是4线：TMS、TCK、TDI、TDO，分别为模式选择、时钟、数据输入和数据输出线。

具有 JTAG 口的芯片都有如下 JTAG 引脚定义：

- TCK 测试时钟输入；
- TDI 测试数据输入，数据通过TDI输入JTAG口；
- TDO 测试数据输出，数据通过TDO从JTAG口输出；
- TMS 测试模式选择，TMS用来设置JTAG口处于某种特定的测试模式。
- 可选引脚TRST——测试复位，输入引脚，低电平有效。

含有JTAG口的芯片种类较多，如CPU、DSP、CPLD等。

JTAG内部有一个状态机，称为TAP控制器。TAP控制器的状态机通过TCK和TMS进行状态的改变，实现数据和指令的输入。


## // J-Link
https://www.segger.com/products/debug-probes/j-link/models/j-link-ob/
J-Link OB F103 固件提取及维修 https://jianshu.com/p/cb197084c4d8


SEGGER\JLinkARM_V415e

J-LINK 有两种调试模式，JTAG 和 SWD 串行模式。

J-Link 是针对 ARM 设计的一个小型 USB 到 JTAG 转换盒。它通过 USB 连接到运行 Windows 的 PC 主机。J-Link 无缝集成到 IAR Embedded Workbench for ARM 中，它完全兼容 PNP 即插即用：

- 支持所有 ARM7 和 ARM9 体系;
- 下载速度高达 50KB/S;
- 无需外接电源，USB取电；
- 最高 JTAG 速度达 8MHz；
- 自动速度识别
- 固件可升级;
- 20 脚标准 JTAG 连接器;
- 带 USB 连线和 20 脚的扁平线缆;
- 可以用于 KEIL ，IAR ，ADS 等平台 速度，效率，功能均比 ULINK 强， J-LINK 仿真器 V8 版，其仿真速度和功能远非简易的并口 WIGGLER 调试器可比。J-LINK 支持 ARM7、ARM9、ARM11、Cortex-M3 核心，支持 ADS、IAR、KEIL 开发环境。

V8.0 版本除拥有上一版本 V7.0 的全部功能外，软硬件上都有改进：

- V8.0 版的 SWD 硬件接口支持 1.2-5.0V 的目标板，V7.0 只能支持 3.3V 的目标板。
- V8.0 使用双色 LED 可以指示更多的工作状态，V7.0只有1个LED指示灯。
- V8.0 增强了 JTAG 驱动能力，提高了目标板的兼容性。
- 优化了固件结构，使应用程序区扩大，J-Link ARM 主要特点。

J-Link OB 是板载，on-board debug probe，可以使用一块 STM32F103C8T6 简单实现，只需要 VCC、 GND、 SWCLK、 SWDIO 四条线。

- Same features as J-Link BASE
- Fully compatible with J-Link BASE
- Compatible with most IDEs
- JTAG, SWD + SWO supported
- "Drag-And-Drop" interface for intuitive programming of the target device (optional)
- Virtual COM Port (optional)
- Very small form factor
- Allows use of external debug probes


## // ULINK

ULINK 是 ARM 公司最新推出的配套 RealView MDK 开发环境使用的仿真器，ULINK2 是 ULink 仿真器的升级版本，不仅具有 ULINK 仿真器的所有功能，还增加了串行调试 SWD 支持，返回时钟支持和实时代理等功能。开发工程师通过结合使用 RealView MDK 的调试器和 ULINK2，可以方便的在目标硬件上进行片上调试（使用on-chip JTAG，SWD和OCDS）、Flash 编程。

支持 ARM7，ARM9， Cortex-M，8051 和 C166 设备

ULINK2：

- JTAG速度高达10MHz
- 支持Cortex-M串行查看器（SWV）数据和时间跟踪，速度高达1Mbit/s（UART模式）
- 执行、端口仿真和串行调试输出时的存储器读写实时代理
- 与Keil μVision IDE和Debugger无缝隙集成
- 宽目标电压，从2.7V – 5.5V可用
- USB供电（无须电源）
- 使用标准Windows USB设备，即插即用安装
- 目标连接器


J-Link 命令：

        Available commands are:
        ----------------------
        f          Firmware info
        h          halt
        g          go
        Sleep      Waits the given time (in milliseconds). Syntax: Sleep <delay>
        s          Single step the target chip
        st         Show hardware status
        hwinfo     Show hardware info
        mem        Read memory.           Syntax: mem  <Addr>, <NumBytes> (hex)
        w1         Write  8-bit items. Syntax: w1 <Addr>, <Data> (hex)
        w2         Write 16-bit items. Syntax: w2 <Addr>, <Data> (hex)
        w4         Write 32-bit items. Syntax: w4 <Addr>, <Data> (hex)
        wm         Write test words. Syntax: wm <NumWords>
        is         Identify length of scan chain select register
        ms         Measure length of scan chain. Syntax: ms <Scan chain>
        mr         Measure RTCK react time. Syntax: mr
        q          Quit
        qc         Close JLink connection and quit
        r          Reset target         (RESET)
        rx         Reset target         (RESET). Syntax: rx <DelayAfterReset>
        RSetType   Set the current reset type. Syntax: RSetType <type>
        Regs       Display contents of registers
        wreg       Write register.   Syntax: wreg <RegName>, <Value>
        SetBP      Set breakpoint.   Syntax: SetBP <addr> [A/T] [S/H]
        SetWP      Set Watchpoint. Syntax: <Addr> [R/W] [<Data> [<D-Mask>] [A-Mask]]
        ClrBP      Clear breakpoint. Syntax: ClrBP  <BP_Handle>
        ClrWP      Clear watchpoint. Syntax: ClrWP  <WP_Handle>
        VCatch     Write vector catch. Syntax: VCatch <Value>
        loadbin    Load binary file into target memory.
                                 Syntax: loadbin <filename>, <addr>
        SetPC      Set the PC to specified value. Syntax: SetPC <Addr>
        le         Change to little endian mode
        be         Change to big endian mode
        log        Enables log to file.  Syntax: log <filename>
        unlock     Unlocks a device. Syntax: unlock <DeviceName>
                             Type unlock without <DeviceName> to get a list
                             of supported device names.
                             nRESET has to be connected
        ---- CP15 ------------
        rce        Read CP15.  Syntax: rce <Op1>, <CRn>, <CRm>, <Op2>
        wce        Write CP15. Syntax: wce <Op1>, <CRn>, <CRm>, <Op2>, <Data>
        ---- ICE -------------
        Ice        Show state of the embedded ice macrocell (ICE breaker)
        ri         Read Ice reg.  Syntax: ri <RegIndex>(hex)
        wi         Write Ice reg. Syntax: wi <RegIndex>, <Data>(hex)
        ---- ETM -------------
        etm        Show ETM status
        re         Read ETM reg.  Syntax: re <RegIndex>
        we         Write ETM reg. Syntax: we <RegIndex>, <Data>(hex)
        es         Start trace
        ---- ETB -------------
        etb        Show ETB status
        rb         Read ETB register.  Syntax: rb <RegIndex>
        wb         Write ETB register. Syntax: wb <RegIndex>, <Data>(hex)
        ---- TRACE -----------
        TAddBranch TRACE - Add branch instruction to trace buffer. Paras:<Addr>,<BAddr>
        TAddInst   TRACE - Add (non-branch) instruction to trace buffer. Syntax: <Addr>
        TClear     TRACE - Clear buffer
        TSetSize   TRACE - Set Size of trace buffer
        TSetFormat TRACE - SetFormat
        TSR        TRACE - Show Regions (and analyze trace buffer)
        TStart     TRACE - Start
        TStop      TRACE - Stop
        ---- SWO -------------
        SWOSpeed   SWO - Show supported speeds
        SWOStart   SWO - Start
        SWOStop    SWO - Stop
        SWOStat    SWO - Display SWO status
        SWORead    SWO - Read and display SWO data
        SWOShow    SWO - Read and analyze SWO data
        SWOFlush   SWO - Flush data
        ---- File I/O --------
        fwrite     Write file to emulator
        fread      Read file from emulator
        fshow      Read and display file from emulator
        fdelete    Delete file on emulator
        fsize      Display size of file on emulator
        ---- Test ------------
        thg        Run go/halt 1000 times
        ts         Run step 1000 times
        testwspeed Test download speed.   Syntax: testwspeed [<Addr> [<Size>]]
        testrspeed Test upload speed.     Syntax: testrspeed [<Addr> [<Size>] [<NumBlocks>]]
        testcspeed Test CPU speed.        Syntax: testcspeed [<RAMAddr>]
        ---- JTAG ------------
        Config     Set number of IR/DR bits before ARM device.
                                 Syntax: Config <IRpre>, <DRpre>
        speed      Set JTAG speed. Syntax: speed <freq>|auto|adaptive, e.g. speed 2000, speed a
        i          Read JTAG Id (Host CPU)
        wjc        Write JTAG command (IR). Syntax: wjc <Data>(hex)
        wjd        Write JTAG data (DR). Syntax: wjd <Data32>(hex), <NumBits>(dec)
        RTAP       Reset TAP Controller using state machine (111110)
        wjraw      Write Raw JTAG data. Syntax: wjraw <NumBits(dec)>, <tms>, <tdi>
        rt         Reset TAP Controller (nTRST)
        ---- JTAG-Hardware ---
        c00        Create clock with TDI = TMS = 0
        c          Clock
        0          Clear TDI
        1          Set   TDI
        t0         Clear TMS
        t1         Set   TMS
        trst0      Clear TRST
        trst1      Set   TRST
        r0         Clear RESET
        r1         Set   RESET
        ---- Connection ------
        usb        Connect to J-Link via USB.  Syntax: usb <port>, where port is 0..3
        ip         Connect to J-Link ARM Pro or J-Link TCP/IP Server via TCP/IP.
                             Syntax: ip <ip_addr>
        ---- Configuration ---
        si         Select target interface. Syntax: si <Interface>,
                             where 0=JTAG and 1=SWD.
        power      Switch power supply for target. Syntax: power <State> [perm],
                             where State is either On or Off. Example: power on perm
        wconf      Write configuration byte. Syntax: wconf <offset>, <data>
        rconf      Read configuration bytes. Syntax: rconf
        usbaddr    Assign usb address to the connected J-Link: Syntax: usbaddr = <addr>
        ipaddr     Show/Assign IP address and subnetmask of/to the connected J-Link.
        gwaddr     Show/Assign network gateway address of/to the connected J-Link.
        dnsaddr    Show/Assign network DNS server address of/to the connected J-Link.
        conf       Show configuration of the connected J-Link.
        ecp        Enable the  J-Link control panel.
        ----------------------
        NOTE: Specifying a filename in command line
        will start J-Link Commander in script mode.
