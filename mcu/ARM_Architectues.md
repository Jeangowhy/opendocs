
/Zephyr OS
==========

The [Zephyr OS] is based on a small-footprint kernel designed for use on 
resource-constrained and embedded systems: from simple embedded environmental 
sensors and LED wearables to sophisticated embedded controllers, smart watches, 
and IoT wireless applications.

The Zephyr kernel supports multiple architectures, including:

01. ARCv2 (EM and HS) and ARCv3 (HS6X)
02. ARMv6-M, ARMv7-M, and ARMv8-M (Cortex-M)
03. ARMv7-A and ARMv8-A (Cortex-A, 32- and 64-bit)
04. ARMv7-R, ARMv8-R (Cortex-R, 32- and 64-bit)
05. Intel x86 (32- and 64-bit)
06. MIPS (MIPS32 Release 1 specification)
07. NIOS II Gen 2
08. RISC-V (32- and 64-bit)
09. SPARC V8
10. Tensilica Xtensa

支持当前主流的开发板，[Supported Boards] 文档展示当前支持的厂商及其板卡。

Zephyr 采用商业友好的 Apache 2.0 许可证，可用于商业目的而无需开放源码。
在具体实践中，Zephyr 除了管理自身代码外，还着力于第三方模块集成，
选择 Apache 2.0 许可证兼容的模块，避免许可证污染。

[Zephyr SDK] 提供嵌入式方案使用的 GCC 编译器等命令行工具，包含 Zephyr 支持的所有处理器架构。
完整的 [Zephyr SDK for Linux] 自解压安装包大于 1 GB，如果选择不含工具链的安装包，
Minimal bundle，就需要自行在 github 托管仓库的 release 页面中选择相应的工具链安装包。
比如，Windows 系统就有以下选择，安装 minimal.7z 就需要根据需要，以下展示了 ARM 和 RISC-V
构架的工具链。安装参考文档 [Getting Started Guide]。

1. https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.5-1/zephyr-sdk-0.16.5-1_windows-x86_64.7z
2. https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.5-1/zephyr-sdk-0.16.5-1_windows-x86_64_minimal.7z
3. https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.5-1/toolchain_windows-x86_64_arm-zephyr-eabi.7z
4. https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.5-1/toolchain_windows-x86_64_aarch64-zephyr-elf.7z
5. https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.5-1/toolchain_windows-x86_64_riscv64-zephyr-elf.7z

Minimal bundle 只包含安装脚本，其中 sdk_toolchains 文件记录的是工具链列表，执行 setup.cmd
脚本，就会询问是否要安全全部工具链。选择 No 就可以根据提示选择要安装的部分。可以从列表中清除不需要
的工具链，已经下载好工具包直接解压到 SDK 目录即可以使用。

Zephyr SDK 新版已支持 Windows 环境。也可以使用使用第三方的工具链，例如 ARM 32-bit 处理器，
可以使用 [GNU ARM Embedded] 工具链，支持 ARM Cortex M/R 等系列。

Windows 系统除了通过 WSL 运行 Linux 以使用 Zephyr SDK 工具，还可以通过 msys64 移植平台，
使用 [GNU Tools for ARM Embedded Processors - GCC] 构建 ARM 嵌入式项目。
安装 msys64 后使用 pacman 包管理工具进行安装，或查询可安装的工具包，整套工具也超过 1.5GB。
另外，还可以使用 mingw-w64-llvm 工具链以支持 AArch64 架构，官方网站上直接搜索 aarch64 
需要选择 Packages 分类才会显示相应的工具包。

```sh
pacman -Sl | grep arm-none-eabi
pacman -Ss arm-none-eabi
pacman -S mingw-w64-ucrt-x86_64-arm-none-eabi-gcc
pacman -S mingw-w64-clang-aarch64-llvm
```

包含功能强大的 [West] (Zephyr’s meta-tool) 这个命令行工具，提供了一个多存储库管理系统，
其功能源于 Google 的 Repo 工具和 Git 子模块的启发。West 也拥有“可插拔”的特性：
用户可以编写自己的West拓展命令，为 West 添加额外的功能。Zephyr 则利用这个特性为构建、下载，
或调试等功能提供便利。West 是 Python3 脚本程序，通过 PyPi 分发，使用 pip3 安装或升级：

```sh
pip3 install west
mkdir zephyrproject && cd zephyrproject
west init
west update
```

执行 `west init` 初始化项目，命令会自动克隆 Zephyr 源代码代码仓库到以下临时目录，
完成下载后再移动到项目根目录：

    .west\manifest-tmp\.git

执行 `west update` 更新子模块，只要改动了配置文件，就应该重新更新项目。

[West]: https://pypi.org/project/west/
[Supported Boards]: https://docs.zephyrproject.org/latest/boards/index.html
[Getting Started Guide]: https://docs.zephyrproject.org/latest/develop/getting_started/index.html
[Zephyr SDK]: https://github.com/zephyrproject-rtos/sdk-ng/releases
[Zephyr OS]: https://github.com/zephyrproject-rtos/zephyr
[Zephyr SDK for Linux]: https://pan.baidu.com/s/1v6wk386WMKZ8X8cXSdfUOQ?pwd=zeph
[ARM GNU Toolchain]: https://developer.arm.com/Tools%20and%20Software/GNU%20Toolchain
[GNU Tools for ARM Embedded Processors - GCC]: https://packages.msys2.org/search?t=pkg&q=arm

软件包数据交换(SPDX) 规范定义了一个用于交流软件组件信息的开放标准。SPDX 用于创建软件物料清单(SBOM)，
封装许可和版权详细信息，并提供包元数据，例如版本标识符和已知漏洞。

SPDX 最初是在十多年前设计的，旨在帮助开发人员遵守开源许可证。从那时起，它被扩展为描述依赖树和发布
Software Bill of Materials (SBOM)。2021 年 9 月，ISO 将 SPDX 认定为软件供应链文档的国际标准。

[SPDX] is an open standard for communicating software bill of material information, 
including provenance, license, security, and other related information. SPDX 
reduces redundant work by providing common formats for organizations and 
communities to share important data, thereby streamlining and improving compliance, 
security, and dependability. The SPDX specification is recognized as 
the international open standard for security, license compliance, and other 
software supply chain artifacts as ISO/IEC 5962:2021.

[SPDX]: https://spdx.dev/about/overview/
[SPDX Quick Start Guides]: https://github.com/spdx/outreach/tree/main/quickstart



/GigaDevice Product Lines
=========================
https://www.gigadevice.com.cn/

兆易创新

/STM32 Product Lines
====================
https://www.stmcu.com.cn/product
https://developer.arm.com/documentation#numberOfResults=48&q=manual

|   DOCID   |                               Title                                |   Architecture  |
|-----------|--------------------------------------------------------------------|-----------------|
| [100748]  | Arm Compiler for Embedded User Guide                               | -               |
| [101754]  | Arm® Compiler for Embedded Reference Guide                         | -               |
| [ddi0337] | Cortex-M3 Technical Reference Manual                               | ARMv7-M3        |
| [102832]  | Arm Cortex-M4 Processor Datasheet                                  | Armv7-M4        |
| [100166]  | Arm Cortex-M4 Processor Technical Reference Manual                 | ARMv7-M4        |
| [den0042] | ARM Cortex-R Series Programmer's Guide                             | Armv7-R         |
| [den0013] | ARM® Cortex™-A Series Programmer's Guide                           | ARMv7-A         |
| [ddi0406] | ARMv7-A + ARMv7-R Reference Manual                                 | ARMv7-M ARMv7-R |
| [ddi0403] | ARMv7-M Architecture Reference Manual                              | ARMv7-M         |
| [102374]  | Learn the architecture - A64 Instruction Set Architecture Guide    | Armv8-A AArch64 |
| [den0024] | ARM Cortex-A Series Programmer's Guide for ARMv8-A                 | ARMv8-A         |
| [107565]  | Armv8-M Memory Model and Memory Protection User Guide              | Armv8-M         |
| [107656]  | Introduction to the Armv8-M and its Programmers Model User Guide   | Armv8-M         |
| [100230]  | Arm® Cortex®-M33 Processor Technical Reference Manual              | Armv8-M33       |
| [ddi0596] | ARM® A64 ISA (XML)                                                 | ARMv8-A         |
| [ddi0602] | Arm A64 Instruction Set Architecture                               | ARMv8-A         |
| [ddi0553] | Armv8-M Architecture Reference Manual                              | ARMv8-M         |
| [ddi0487] | Arm Architecture Reference Manual for A-profile architecture       | Armv8-A Armv9-A |
| [ddi0597] | Arm A-profile A32/T32 Instruction Set Architecture                 | Armv8-A         |
| [102202]  | Learn the architecture - An introduction to AMBA AXI               | -               |
| [102412]  | Learn the architecture - AArch64 Exception Model                   | Armv8-A64       |
| [102142]  | Learn the architecture - AArch64 virtualization                    | Armv8-A64       |
| [PM0214]  | STM32 Cortex®-M4 MCUs and MPUs programming manual                  | Armv7-M4        |
| [RM0383]  | STM32F411xC/E advanced ARM ® -based 32-bit MCUs Reference manual   | Armv7-M4        |
| [DS10314] | STM32F411xC STM32F411xE Arm® Cortex®-M4 Datasheet                  | Armv7-M4        |
| [DB2196]  | STM32 Nucleo-64 boards Product Specifications (STM32F411RE)        | Armv7-M4        |
| [UM1727]  | Getting started with STM32 Nucleo board software development tools | Armv7-M4        |
| [UM1724]  | STM32 Nucleo-64 boards (MB1136)                                    | Armv7-M4        |
|           |                                                                    |                 |

[UM1727]: https://www.st.com/en/evaluation-tools/nucleo-f411re.html
[UM1724]: https://www.st.com/en/evaluation-tools/nucleo-f411re.html
[DB2196]: https://www.st.com/resource/en/data_brief/nucleo-f411re.pdf
[DS10314]: https://www.st.com/resource/en/datasheet/stm32f411re.pdf
[RM0383]: https://www.st.com/zh/microcontrollers-microprocessors/stm32f411re.html
[PM0214]: https://www.st.com/zh/microcontrollers-microprocessors/stm32f411re.html
[102832]: https://developer.arm.com/documentation/102832/latest/
[102142]: https://developer.arm.com/documentation//latest/
[102412]: https://developer.arm.com/documentation/102412/latest
[100230]: https://developer.arm.com/documentation/100230/latest
[107565]: https://developer.arm.com/documentation/107565/latest/
[ddi0337]: https://developer.arm.com/documentation/ddi0337/h/
[100166]: https://developer.arm.com/documentation/100166/0001/
[den0013]: https://developer.arm.com/documentation/den0013/d/
[den0024]: https://developer.arm.com/documentation/den0024/a/
[ddi0602]: https://developer.arm.com/documentation/ddi0602/2024-03/Base-Instructions
[ddi0596]: https://developer.arm.com/documentation/ddi0596/latest
[ddi0553]: https://developer.arm.com/documentation/ddi0553/bx/
[ddi0406]: https://developer.arm.com/documentation/ddi0406/cd
[ddi0403]: https://developer.arm.com/documentation/ddi0403/ee/
[102374]: https://developer.arm.com/documentation/102374/latest/
[107656]: https://developer.arm.com/documentation/107656/0101
[100748]: https://developer.arm.com/documentation/100748/0622/
[101754]: https://developer.arm.com/documentation/101754/0622
[ddi0487]: https://developer.arm.com/documentation/ddi0487/ka
[ddi0597]: https://developer.arm.com/documentation/ddi0597/2023-12/
[den0042]:https://developer.arm.com/documentation/den0042/a
[102202]: https://developer.arm.com/documentation/102202/0300/


ARM 架构体系版本特点及代表芯片型号

| 架构版本 |                     芯片系列                       |
|----------|-------------------------------------------------|
| ARMv1    | ARM1                                            |
| ARMv2    | ARM2/ARM250/ARM3                                |
| ARMv3    | ARM6/ARM7                                       |
| ARMv4    | ARM8 三星 S3C44B0                                |
| ARMv5    | ARM9 CISC +MMU 三星 S3C2410/S3C2440，Atmel 9260  |
| ARMv6    | ARM11 CISC MMU                                  |
| ARMv7    | 2004 年发布架构 Cortex A/R/M  A5/A7/A9/A15/A17    |
| ARMv8    | 2011 年发布架构 Cortex-A32/A53/A78/X1             |
| ARMv9    | 2021 年最新架构，剑指 artificial intelligence (AI) |

ARM - Advanced RISC Machines 既是一个公司的名字，也这家公司设计的一类微处理器的统称。
ARM 公司只做和芯片设计方案，并在全球授权各大厂商进行芯片实体的生产，
它本身是知识产权 (IP - Intellectual Property) 资产公司。

官方文档资料显示 2008 年全球出货 100 亿片 ARM 处理器，2013 已经累计超过 520 亿片。
2021 财年 ARM 架构芯片出货 292 亿颗，历史累计超过 2250 亿颗。

RISC-V 作为一搅局者，得益于 64-bit 与 32-bit 构架的同时设计，使得其指令集比其它现有方案简单得多！
RISC-V 行业正想着怎么把它做进手机，与 ARM 一拼高下。RISC-V 将其简单、开源、易移植、模块化、经济性、
稳定性的特性广受业界青睐。RISC-V 脱颖而出的有有利条件是其开源性，任何公司或个人均可以根据其架构进行处理器设计。
这样不仅降低了设计门槛，设计资源也可以重复利用，大大减少软件成本。国内一直较为重视 RISC-V 竞争，
多家国产企业已推出 RISC-V 芯片 IP，一些企业也将 RISC-V 放进自家 MCU（单片机）或形成副产线。


意法半导体 STM32 目前提供 21 大产品线，超过 1000 个型号，拥有 ARM® Cortex®-M0、M0+、M3、M4、M33、M7
及 A7 内核并具备丰富外设选择的 32 位微控制器及微处理器。

    8-bit MCUs-8 bit core
    =====================
       主流 MCU   STM8 S      
    超低功耗 MCU   STM8 L      

    基于 Arm Cortex 内核的 32-bit MCU 和 MPU
    ======================================

                    │ Cortex-M0  │           │           │            │           │    
                    │ Cortex-M0+ │ Cortex-M3 │ Cortex-M4 │ Cortex-M33 │ Cortex-M7 │  Cortex-A7
     ===============|============|===========|===========|============|===========|============
                MPU │            │           │           │            │           │  STM32 MP1
                    │            │           │           │            │           │  STM32 MP2
    ────────────────│────────────│───────────│───────────│────────────│───────────│────────────
    Performance MCU │            │ STM32 F2  │ STM32 F4  │ STM32 H5   │ STM32 H7  │
                    │            │           │           │            │ STM32 F7  │
    ────────────────│────────────│───────────│───────────│────────────│───────────│────────────
    Main stream MCU │ STM32 G0   │ STM32 F1  │ STM32 G4  │            │           │
                    │ STM32 F0   │           │ STM32 F3  │            │           │
                    │ STM32 C0   │           │           │            │           │
    ────────────────│────────────│───────────│───────────│────────────│───────────│────────────
      Low-Power MCU │ STM32 L0   │ STM32 L1  │ STM32 L4+ │ STM32 U5   │           │ ARM Cortex-A7
                    │ STM32 U0   │           │ STM32 L4  │ STM32 L5   │           │
    ────────────────│────────────│───────────│───────────│────────────│───────────│────────────
       Wireless MCU │ BlueNRG    │ Spirit    │ STM32 WB  │ STM32 WBA  │           │
                    │            │           │ STM32 WL  │            │           │
     ===============|============|===========|===========|============|===========|============

    │─│2 
    │─│1 
    │─│0 
    *  STM32 WB - Cortex-M0+ 无线协处理器 
    *  STM32 MP1/MP2 - 集成双 Arm Cortex-A7 和 Cortex-M4 内核
    *  STM32 H7 - 含 Arm Cortex-M7 和 Cortex-M4 双核产品
    *  Spirit - Transceiver 
    *  ARM Cortex-A7 - 集成双 Arm Cortex-A35 和 Cortex-M33 内核

STM32 芯片命名规则：
<!-- https://doc.embedfire.com/mcu/stm32/f407batianhu/std/zh/latest/_images/Firsta007.png -->

    STM32    F     411     R      E      T      6      X      XX 
    ──┬──  ──┬──  ──┬──  ──┬──  ──┬──  ──┬──  ──┬──  ──┬──  ──┬──
      │      │      │      │      │      │      │      │      │  
      │      │      │      │      │      │      │      │      │   
      │      │      │      │      │      │      │      │      └─ Option
      │      │      │      │      │      │      │      │ XXX - Fastrom code
      │      │      │      │      │      │      │      │ xTR - Tape and Real
      │      │      │      │      │      │      │      │ Dxx - No RTC (STM8L)
      │      │      │      │      │      │      │      │       BOR OFF with Special bonding
      │      │      │      │      │      │      │      │       Boot standard
      │      │      │      │      │      │      │      │ Sxx - BOR OFF
      │      │      │      │      │      │      │      │ Ixx - BOR ON
      │      │      │      │      │      │      │      │ Yxx - Die rev(Y)
      │      │      │      │      │      │      │      │ 
      │      │      │      │      │      │      │      └─ Firmware Royalties
      │      │      │      │      │      │      │     U - Universal, Not for production
      │      │      │      │      │      │      │     V - MP3 decoder
      │      │      │      │      │      │      │     W - MP3 Codec
      │      │      │      │      │      │      │     J - 0.80 mm
      │      │      │      │      │      │      │     D - IS2T JAVA
      │      │      │      │      │      │      │ 
      │      │      │      │      │      │      └─ Termerature range
      │      │      │      │      │      │  6/A - -40 ~ 85 ℃
      │      │      │      │      │      │  7/B - -40 ~ 105℃
      │      │      │      │      │      │  3/C - -40 ~ 150℃
      │      │      │      │      │      │ 
      │      │      │      │      │      └─ Package
      │      │      │      │      │         B - Plastic DIP        M - Plastic SO 
      │      │      │      │      │         D - Ceramic DIP        P - TSSOP
      │      │      │      │      │         G - Ceramic QFP        Q - Plastic QFP
      │      │      │      │      │         H - LFBGA/TFBGA        T - QFP     
      │      │      │      │      │         I - UFBGA Pitch 0.5    U - UFQFPN
      │      │      │      │      │         J - UFBGA Pitch 0.8    V - VFQFPN
      │      │      │      │      │         K - UFBGA Pitch 0.65   Y - WLCSP
      │      │      │      │      │  
      │      │      │      │      └─  Flash size
      │      │      │      │  0 - 1 KB           6 - 32 KB          C - 256 KB
      │      │      │      │  1 - 2 KB           7 - 48 KB          D - 384 KB
      │      │      │      │  2 - 4 KB           8 - 64 KB          E - 512 KB
      │      │      │      │  3 - 8 KB           9 - 72 KB          F - 768 KB
      │      │      │      │  4 - 16 KB          A - 96 KB          G - 1024 KB
      │      │      │      │  5 - 24 KB          B - 128 KB         H - 1536 KB
      │      │      │      │                                        I - 2048 KB
      │      │      │      └─ Pin count 
      │      │      │       D - 14 pins          C - 48 & 49 pins   A - 69 pins
      │      │      │       Y - 20 pins (STM8)   U - 63 pins        I - 176 & 201 pins
      │      │      │       F - 20 pins (STM32)  R - 64 & 66 pins   B - 208 pins
      │      │      │       E - 20 & 25 pins     J - 72 pins        N - 216 pins
      │      │      │       G - 28 pins          M - 80 pins        X - 256 pins
      │      │      │       K - 32 pins          O - 90 pins        Auto
      │      │      │       T - 36 pins          V - 100 pins       880 - 48
      │      │      │       H - 40 pins          Q - 132 pins       9 - 64
      │      │      │       S - 44 pins          Z - 144 pins       A - 
      │      │      │       
      │      │      └─ Specific features:
      │      │            STM32 series                            STM8x series
      │      │            051 - Entry-level                       103 - Mainstream access line
      │      │            103 - Foundation                        F52 - Automotive CAN
      │      │            303 - Upgraded 103 with DSP + Analog    L31 - Automotive low-end
      │      │            407 - High-performance and DSP + FPU
      │      │            152 - Ultra-low power
      │      │      
      │      └─ Product Type:                    S - Standard
      │                  A - Automotive          T - Touch sensing
      │                  F - Foundation          W - Wireless
      │                  L - Ultra-low power    xP - Fastrom
      │                  
      └─ Family:     STM32 - 32-bit MCUs      STM8 - 8-bit MCUs

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

STM32 F4 Cortex®-M4 系列：
https://www.st.com/en/microcontrollers-microprocessors/stm32f4-series.html

| STM32 F4 Series  | Models |    Performance    |     Flash     |           Note           |
|------------------|--------|-------------------|---------------|--------------------------|
| **Entry-Level:** |        |                   |               |                          |
| STM32F401        |     12 | 84 MHz/105 DMIPS  | 128 K - 512 k | Dynamic Efficiency™      |
| STM32F410        |      6 | 100 MHz/125 DMIPS | 64 K - 128 K  | Batch Acquisition Mode   |
| STM32F411        |      6 | 100 MHz/125 DMIPS | 256 K - 512 K |                          |
| STM32F412        |      8 | 100 MHz/125 DMIPS | 512 K - 1Mb   | dual-mode Quad-SPI       |
| STM32F413/423    |     15 | 100 MHz/125 DMIPS | 1Mb - 1536 K  | 10 UARTs, 3 CANs, SAI... |
| **Foundation:**  |        |                   |               |                          |
| STM32F405/415    |      9 | 168 MHz/210 DMIPS | up to 1 Mb    |                          |
| STM32F407/417    |     12 | 168 MHz/210 DMIPS | up to 1 Mb    | Ethernet MAC, camera     |
| STM32F446        |      8 | 180 MHz/225 DMIPS | up to 512 Kb  | Quad-SPI and SDRAM       |
| **Advanced:**    |        |                   |               |                          |
| STM32F427/437    |     15 | 180 MHz/225 DMIPS | up to 2 Mb    | serial audio             |
| STM32F429/439    |     28 | 180 MHz/225 DMIPS | up to 2 Mb    | LCD-TFT controller       |
| STM32F469/479    |     30 | 180 MHz/225 DMIPS | up to 2 Mb    | Quad-SPI, MPI-DSI        |

/Arm® Cortex®-M0 in a nutshell
==============================
https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers/arm-cortex-m0.html

The Arm® Cortex®-M0 is the smallest Arm® processor available, with a very small 
silicon area, low gate count, low power and minimal code footprint. Suitable for 
analog and mixed signal devices, it allows microcontroller suppliers to offer 32-bit 
performance at 16- and 8-bit price points. It is ideal for highly embedded applications.

Key features of Arm® Cortex®-M0 core

01. Armv6-M architecture
02. Bus interface AHB-lite, Von Neumann bus architecture
03. Thumb/Thumb-2 subset instruction support
04. 3-stages pipeline
05. Non-maskable interrupt + 1 to 32 physical interrupts
06. Wakeup interrupt controller
07. Hardware single-cycle ((32x32) multiply
08. Several sleep modes, with integrated Wait For Interrupt (WFI) and 
    Wait for Event (WFE) plus sleep on exit capability, sleep and deep sleep signals
09. Several retention modes are available depending on the implementation
10. JTAG and Serial Wire Debug ports with up to 4 breakpoints and 2 watchpoints
11. arm cortex m0 Arm Cortex-M0 block diagram
12. Key advantages of Arm® Cortex®-M0 MCUs

The small footprint of the core allows it to either be used as a single core in 
small devices or as an additional embedded companion core when specific hardware 
isolation or task partitioning is required. Thanks to the advancements in silicon 
manufacturing technologies, the lithography process moved from 180 to 90nm and lower, 
and the core silicon real-estate now reaches 0.03mm² in 90nm lithography.

The Cortex®-M0 core does not impact the trade-off to be made among the 
elements of the typical MCU architecture based on I/Os, analog and non-volatile 
memories. The bus size (8, 16 or 32 bits) is therefore no longer relevant when 
partitioning MCU portfolios.

M0-based microcontrollers are widely used and offer high benefits in entry-
level applications. They meet computing performance requirements and their 
basic architecture allows M0 MCUs to reach ultra-low-power performance in 
applications where the number of switching gates is minimized. The Cortex®-M0 
core reduces noise emissions and meets performance requirements using an 
optimal clock speed.

The dynamic power of the core ranges from 5 to 50µW/MHz, depending on the 
technology used. However, the core itself is not representative of the overall 
power consumption of a device and is not the only factor to take into 
account. It is therefore important to carefully read product datasheets.

The Thumb instruction set is a subset of the Cortex®-M family. It eases the 
scalability of the portfolio by re-using validated software bricks for any 
Cortex®-M products.

**Microcontrollers based on the Arm® Cortex®-M0**

STMicroelectronics combined the Arm® Cortex®-M0 core with its unique 
proprietary low power analog peripherals for applications requiring cost-efficient 
and low power control and processing.

| Single Core | Speed (MHz) | CoreMark | Flash (kB) | RAM (kB) | Power Supply (V) |                                Packages                               |        Connectivity       | Analog |
|-------------|-------------|----------|------------|----------|------------------|-----------------------------------------------------------------------|---------------------------|--------|
| STM32F0     |          48 |      106 | 16 to 256  | 4 to 32  | 1.65 to 3.6      | LQFP32/48/64/100, TSSOP20, UFBGA64/100, UFQFPN28/32/48, WLCSP25 to 64 | USART, SPI, I2C, CAN, USB | Yes    |


/Arm® Cortex®-M3 in a nutshell
==============================
https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers/arm-cortex-m3.html

The 32-bit Arm® Cortex®-M3 core processor is designed for high-performance, 
real-time processing in cost-constrained applications and can handle complex tasks. 
Any Arm® Cortex®-M3 microcontroller offers high scalability combined with an optimal 
trade-off between performance and cost.

Key features of Arm® Cortex®-M3 core

01. Armv7-M architecture
02. Bus interface 3x AMBA AHB-lite interface (Harvard bus architecture) 
    AMBA ATB interface for CoreSight debug components
03. Thumb/Thumb-2 subset instruction support
04. 3-stage pipeline
05. Nested Vectored Interrupt Controller (NVIC)
06. Optional 8 MPU regions with sub-regions and background region
07. Integrated Bit-field Processing Instructions and Bus Level Bit Banding
08. Non-maskable interrupt + 1 to 240 physical interrupts with 8 to 256 priority levels
09. Wake-up interrupt controller
10. Hardware single-cycle (32x32) multiply, Hardware Divide (2-12 cycles), Saturated Adjustment support
11. Integrated WFI and WFE Instructions and Sleep On Exit capability. 
    Sleep and Deep Sleep Signal, Optional Retention Mode with Arm Power Management Kit
12. Optional JTAG and Serial Wire Debug ports. Up to 8 breakpoints and 4 watchpoints
13. Optional Instruction (ETM), Data Trace (DWT), and Instrumentation Trace (ITM)
14. arm cortex m3 Arm Cortex-M3 block diagram

**State-of-the-art Arm® Cortex®-M3 MCU series**

Small footprint

The small footprint of the core allows it to be used either as a single core in 
small devices or as an additional embedded companion core when specific hardware 
isolation or task partitioning is required. Thanks to the advancements in 
silicon manufacturing technologies, the lithography process moved from 180 to 90nm 
and lower, and the core silicon real-estate now reaches 0.03mm² in 90nm lithography.

In a similar way as Cortex®-M0 and Cortex®-M0+, the Cortex®-M3 core has a 
low impact on the trade-off to be made among the typical elements of an 
MCU architecture, based on I/Os, analog and non-volatile memories. The bus size 
(8, 16 or 32 bits) is therefore no longer relevant when partitioning MCU portfolios.

Cortex®-M3 microcontrollers are widely used and offer several benefits:

1.  They meet performance requirements in entry-level applications.
2.  They are also suitable for general-purpose applications.
3.  The architecture of the Arm® Cortex®-M3 processors offers high scalability and 
    allows existing designs to be reused across different projects.
4.  And, thereby allows you to lower overall ownership costs and ease development steps.

**Dynamic power consumption from 10 to 150µW/MHz**

The dynamic power of the core ranges from 10 to 150µW/MHz depending on the 
technology used. However, the core itself is not representative of the 
overall power consumption of a device and is not the only factor to take into account. 
It is therefore important to carefully read product datasheets.

The Thumb instruction set is a subset of the Cortex-M family. It eases the scalability 
of the portfolio by re-using validated software bricks for any Cortex-M products.

**Memory Protection Unit (MPU)**

The Memory Protection Unit (MPU) manages the CPU's access to the memory. 
It ensures that a task does not accidentally corrupt the memory or the resources
used by other active tasks. The MPU is usually controlled by a 
Real-Time Operating System (RTOS).

If a program accesses a memory location that is prohibited by the MPU, 
the RTOS can detect it and take action. In an RTOS environment, 
the kernel can dynamically update the MPU area setting, based on 
the process to be executed. The MPU is optional and can be bypassed 
for applications that do not need it.

**Microcontrollers based on the Arm® Cortex®-M3**

| Single Core | Speed (MHz) | CoreMark |  Flash (kB) |  RAM (kB) | Power Supply (V) |                                     Packages                                    |        Connectivity       | Analog |
|-------------|-------------|----------|-------------|-----------|------------------|---------------------------------------------------------------------------------|---------------------------|--------|
| STM32L1     | 32          |       93 | 32 to 512   | 4 to 80   | 1.65 to 3.6      | LQFP48/64/100/144, TBGA64, UFBGA100/132 UFQFPN48, WLCSP63/64/104                | USART, SPI, I2C, USB      | Yes    |
| STM32F1     | 24 to 72    |      117 | 16 to 1024  | 4 to 96   | 2 to 3.6         | LFBGA100/144, LQFP48/64/100/144, UFBGA100, TFBGA64, UFQFPN48, VFQFPN36, WLCSP64 | USART, SPI, I2C, CAN, USB | Yes    |
| STM32F2     | 120         |      398 | 128 to 1024 | 64 to 128 | 1.8 to 3.6       | LQFP64/100/144/176, BGA176, WLCSP66                                             | USART, SPI, I2C, CAN, USB | Yes    |



/Arm® Cortex®-M4 in a nutshell
==============================
https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers/arm-cortex-m4.html

The 32-bit Arm® Cortex®-M4 processor core is the first core of the Cortex-M line up to 
feature dedicated Digital Signal Processing (DSP) IP blocks, including an 
optional **Floating-Point Unit** (FPU). It addresses digital signal control 
applications that require efficient, easy-to-use control and signal processing 
capabilities, such as the IoT, motor control, power management, embedded audio, 
industrial and home automation, healthcare and wellness applications.

Just like the Cortex-M3 core, the Cortex-M4 core achieves 1.25 DMIPS/MHz and 
3.42 CoreMark/MHz thread performance.

**Key features of Arm® Cortex®-M4 core**

01. Armv7E-M architecture
02. Bus interface 3x AMBA AHB-lite interface (Harvard bus architecture) 
    AMBA ATB interface for CoreSight debug components
03. Thumb/Thumb-2 subset instruction support
04. 3-stage pipeline
05. DSP extensions: single-cycle 16/32-bit MAC, Single cycle dual 16-bit MAC, 
    8/16-bit SIMD arithmetic, Hardware Divide (2-12 Cycles)
06. Optional single precision Floating Point Unit (FPU), IEEE 754-compliant
07. Optional 8 MPU regions with sub-regions and background region
08. Integrated bit-field processing instructions and bus-level bit banding
09. Non-maskable interrupt and 1 to 240 physical interrupts with 8 to 256 priority levels
10. Wake-up interrupt controller
11. Integrated WFI and WFE Instructions and Sleep-On-Exit capability, 
    Sleep & Deep Sleep Signals, Optional Retention Mode with Arm Power Management Kit
12. Optional JTAG and Serial Wire Debug ports. Up to 8 breakpoints and 4 watchpoints
13. Optional Instruction Trace (ETM), Data Trace (DWT), and Instrumentation Trace (ITM)
14. arm cortex m4

**Key advantages of Arm® Cortex®-M4 MCUs**

Armv7E-M architecture

Microcontrollers based on the Cortex-M4 core benefit from the Armv7E-M architecture. 
The Armv7E-M architecture is built on the Armv7-M architecture from the Cortex-M3 core 
and offers additional DSP extensions, such as:

1. single Instruction Multiple Data (SIMD) processing
2. saturation arithmetic instructions
3. a wide range of MAC instructions which can execute in single cycles
4. and an optional FPU, that supports single-precision floating point operations.
5. This architecture is perfectly suited for real-time control applications requiring hi

This architecture is perfectly suited for real-time control applications requiring 
highly deterministic operations with low-cycle count execution, minimum interrupt latency, 
a short pipeline, and the possibility to perform cache-less operations.

**Digital Signal Processing**

Microcontrollers based on the Cortex-M4 rely on its built-in advanced DSP 
hardware accelerators to process signals using mathematical calculations. The 
DSP hardware accelerator can process any analog signal, such as the output 
signal of a microphone, the feedback from a sensor embedded in a motor control 
system, or outputs from sensor-fusion applications.

Thanks to Digital Signal Processing, fewer cycles are required to run 
control-loop algorithms, therefore contributing to the performance and the power
efficiency of the application. Indeed, when algorithms are processed using 
Q1.15 or Float32 data formats, MCUs running on a Cortex-M4 offer a much higher 
performance than MCUs based on the Cortex-M3. For the Q1.15 format, the 
improvement is mainly due to the availability of SIMD instructions, allowing the 
Cortex-M4 to divide the number of cycles required by about two. For the 
Float32 data format, the Floating-Point Unit accelerator raises the performance 
of the Cortex-M4 MCUs by an order of magnitude, compared to that of the 
Cortex-M3 MCUs.

Cortex-M4 MCUs with DSP are sometimes marketed by alternative MCU manufacturers 
as Cortex-M4F MCUs. All STM32 Cortex-M4 MCUs embed the DSP option of the 
Cortex-M4 core, and they are all named Cortex-M4 MCUs.

**Scalability and power efficiency**

Arm Cortex-M4 microcontrollers support the Cortex Microcontroller Software 
Interface Standard (CMSIS), thereby enabling developers to port their code to 
or from different microcontrollers for future projects. This interface also 
eases the integration of third-party software, helping to reduce time to 
market.

The flexibility and scalability of the architecture of the Cortex-M4 allow 
designers to run most of the recent Machine Learning algorithms.

It is also extremely power efficient. Therefore, Cortex-M4 microcontrollers 
are excellent choices for IoT edge controllers or battery-operated sensor 
nodes, as well as consumer wearables.

The Cortex-M4 core is mostly embedded in single-core MCUs. However, a new 
generation of multi-core microcontrollers and microprocessors pushes the limits 
of system integration and performance optimization, implementing two-task 
partitioning use cases:

The Cortex-M4 can be used as the main control core, associated with the more 
energy-efficient Cortex-M0+ core, which can run radio protocols more 
efficiently.

The Cortex-M4 core can be used as the real-time, general-purpose companion 
core to the computing horsepower of the Cortex-M7 or -A7 cores that process 
advanced graphics, complex digital signal processing algorithms or/and run the 
open-source Linux operating system and libraries.

**Microcontrollers based on the Arm Cortex-M4**

STMicroelectronics combines the Arm Cortex-M4 core with its unique proprietary, 
low-power silicon Intellectual Property, non-volatile embedded memory 
technology, hardware accelerators (Cordic for trigonometric & hyperbolic 
calculation & FMAC for filtering), high-performance architectures, and wireless 
connectivity expertise to offer the STM32 Arm Cortex-M4 MCUs as a solution to 
the many technical and commercial challenges engineers need to solve.

STM32 Cortex-M4 microcontrollers are fully integrated into the STM32Cube 
development environment and leverage the tools and solutions offered by ST's 
extensive network of partners.

**Single-Core Series of Arm M4 microcontrollers**

|  Series  | Speed (MHz) |  CoreMark |  Flash (kB) |  RAM (kB)  | Power Supply (V) |    Analog   |
|----------|-------------|-----------|-------------|------------|------------------|-------------|
| STM32F3  | 72          | 245       | 16 to 512   | 16 to 80   | 1.8 to 3.6       | Yes         |
| STM32L4  | 80          | 273       | 64 to 1024  | 40 to 320  | 1.7 to 3.6       | Yes         |
| STM32L4+ | 120         | 409       | 512 to 2048 | 320 to 640 | 1.7 to 3.6       | Yes         |
| STM32G4  | 170         | 550       | 32 to 512   | 118 to 128 | 1.7 to 3.6       | Analog rich |
| STM32F4  | 84 to 180   | up to 613 | 64 to 2048  | 32 to 384  | 1.7 to 3.6       | Yes         |

**Dual-Core Series (Wireless) of Arm M4 microcontrollers**

| Series (Wireless) | speed (MHz) |   Processor 2    |  Flash (kB) |  RAM (kB) | Power Supply (V) |
|-------------------|-------------|------------------|-------------|-----------|------------------|
| STM32WL5          |          48 | Cortex-M0+@48MHz | 64 to 256   | 20 to 64  | 1.8 to 3.6       |
| STM32WB           |          64 | Cortex-M0+@32MHz | 256 to 1024 | 48 to 256 | 1.71 to 3.6      |

**Dual-Core Series (High Performance) of Arm M4 microcontrollers**

| Series (HP) | speed (MHz) |             Processor 2             |  Flash (kB)  | RAM (kB) | Power Supply (V) |      Analog     |
|-------------|-------------|-------------------------------------|--------------|----------|------------------|-----------------|
| STM32H7     |         240 | Cortex-M7@480MHz +L1                | 1024 to 2048 |     1024 | 1.62 to 3.6      | Advanced analog |
| STM32MP1    |         209 | Dual Cortex-A7@800MHz +L1+L2 3D GPU | na           |      708 | 1.71 to 3.6      | Yes             |


|  Series  |                                      Packages                                     |                          Connectivity                         |
|----------|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| STM32F3  | LQFP48/64/100, UFBGA100, UFQFPN32, WLCSP49/66/100                                 | USART, SPI, I2C, I2S, CAN, USB                                |
| STM32L4  | LQFP32/48/64/100/144, UFBGA64/100/132, UFQFPN32/48, WLCSP36/49/64/72/100          | USART, SPI, I2C, CAN, USB, chrom-ART                          |
| STM32L4+ | LQFP48/64/100/144, UFBGA132/169, UFQFPN48, WLCSP100                               | USART, SPI, I2C, CAN, USB, TFT, MIPI DSI, Chrom-ART           |
| STM32G4  | LQFP32/48/64/80/100/128, UFBGA64/100/121, UFQFPN32/48, WLCSP48/64/81              | USART, SPI, I2C, CAN, USB                                     |
| STM32F4  | LQFP48/64/100/144/176/208, BGA100/144/176/216, UFQFPN48, WLCSP36/49/81/90/143/168 | USART, SPI, I2C, CAN, Ethernet, USB, TFT, MIPI DSI, Chrom-ART |
| STM32H7  | UFBGA129/169, LQFP176/208, TFBGA240, WLCSP156                                     | USART, SPI, I2C, USB, TFT-LCD, MIPI-DSI                       |
| STM32MP1 | LFBGA354/448, TFBGA257/361                                                        | USART, SPI, I2C, USB HS GbE TFT-LCD, MIPI-DSI                 |

| Series (Wireless) |                                Packages                               |       Connectivity      |                                           Wireless connectivity                                            |
|-------------------|-----------------------------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|
| STM32WL5          | UFBGA73, UFQFPN48                                                     | USART, SPI, I2C         | 150 to 960MHz, LoRa, (G)FSK, (G)MSK, BPSK                                                                  |
| STM32WB           | UFBGA129, UFQFPN48, VFQFPN68, WLCSP49, WLCSP100, SIP LGA77, SIP LGA86 | USART, SPI, I2C, USB FS | 2.4GHz, 802.15.4, ,Bluetooth LE 5.3, Bluetooth Mesh, HCI, Thread/OpenThread, Zigbee3.0, Zigbee PRO, Matter |

/Arm® Cortex®-M7 in a nutshell
==============================
https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers/arm-cortex-m7.html

The 32-bit Arm® Cortex®-M7 processor core offers the best performance among the 
Cortex-M line up. It features dedicated Digital Signal Processing (DSP) IP blocks, 
including an optional double precision Floating-Point Unit (FPU). The high-performance 
features of the Arm Cortex-M7 core perfectly address demanding digital signal control 
applications, which require efficient, easy-to-use control, without the need for 
complex operating systems. Typical application examples include IoT, motor control, 
power management, embedded audio including voice recognition, industrial and 
home automation, healthcare, and wellness applications.

The Cortex-M7 core achieves 2.14 DMIPS/MHz and a 5.29 CoreMark/MHz thread performance.

01. Inside the Arm Cortex-M7 core: key features
02. Armv7E-M architecture
03. Bus interfaces: 64-bit AMBA4 AXI, 32-bit AHB peripheral port, 
    32-bit AMBA AHB slave port for external master (such as DMA controller) 
    to access TCMs, AMBA APB interface for CoreSight debug components
04. Instruction cache: 0 to 64 Kbytes, 2-way associative with optional ECC
05. Data cache: 0 to 64 Kbytes, 4-way associative with optional ECC
06. Instruction TCM: 0 to 16 Mbytes with optional ECC interface
07. Data TCM: 0 to 16 Mbytes with optional ECC interface
08. Thumb/Thumb-2 subset instruction support
09. 6-stage superscalar + branch prediction
10. DSP extensions: Single cycle 16/32-bit MAC, Single cycle dual 16-bit MAC, 
    8/16-bit SIMD arithmetic, Hardware Divide
11. Optional single and double precision floating point unit compliant with IEEE 754 standard
    (choices of none, single precision only, and single and double precision) 
12. Optional 8- or 16-region MPU with sub-regions and background region
13. Integrated Bit-Field Processing Instructions
14. Non-maskable interrupt and 1 to 240 physical interrupts
15. Optional wake-up interrupt controller
16. Integrated WFI and WFE Instructions and Sleep-On-Exit capability, 
    Sleep & Deep Sleep Signals, Optional Retention Mode with Arm Power Management Kit
17. Optional JTAG and Serial Wire Debug ports. Up to 8 breakpoints and 4 watchpoints
18. Optional Instruction Trace (ETM), Data Trace (DWT), and Instrumentation Trace (ITM). 
    Optional full data trace with ET
19. Support for Dual Core Lock-Step Support (DCLS)

**Why choose Arm Cortex-M7 MCUs: key advantages**

Armv7E-M architecture

Built on the Armv7E-M architecture from the Cortex-M4 core, the Cortex-M7 architecture offers:

*   Higher performance thanks to:

    1.  A 6-stage superscalar pipeline with branch prediction, combined with 
        instruction and data caches. The caches not only increase performance when 
        executing or accessing internal content, but also when using external content 
        connected to the external memory interfaces. Just like with an application 
        processor, developers using MCUs based on a Cortex-M7 core can use larger code 
        and expand data beyond the limits of the internal resources to add advanced 
        middleware and services (Artificial Intelligence models, cloud connectivity 
        and services, multiprotocol support). MCU developers can still leverage the 
        software packages and design environments they are used to, and can benefit 
        from a highly integrated MCU that offers more simplicity and reduced costs 
        thanks to an embedded Power Management Unit IC (PMIC) with no DDR memory needed.

    2.  Higher CPU frequency, which can be achieved thanks to the deeper 6-stage 
        pipeline architecture, offering significant improvement compared to the 
        Cortex-M4 that includes a 3-stage pipeline.

    3.  Instruction and data Tightly Coupled Memories (TCM) allowing 0-wait 
        execution: while the caches increase internal and external memory performance, 
        cache misses introduce latency, which can cause issues in hard real-time 
        applications. Mapping the most critical routines and data in the TCMs will 
        guarantee the 0-wait performance in such applications.

    4.  The 64-bit AMBA4 AXI interface that adds high bandwidth peripherals such 
        as external memory controllers, graphic IPS, GPU, internal memories, and more.


*   Additional DSP extensions, like Single Instruction Multiple Data (SIMD) 
    processing, saturation arithmetic instructions, a wide range of single-cycle MAC 
    instructions, and an optional FPU that supports double-precision floating 
    point operations.

注：Superscalar 超标量体系结构，指同时装多条指令, 并尽可能同时执行, 以缩短整个程序运行时间的计算机结构。

The architecture of the Cortex-M7 is perfectly suited for real-time control 
applications requiring highly deterministic operations with low-cycle count 
execution, minimum interrupt latency, a short pipeline, and the possibility to 
perform cache-less operations.

**Digital Signal Processing**

Microcontrollers based on the Cortex-M7 rely on its built-in, advanced DSP 
hardware accelerators to process signals using mathematical calculations. The DSP 
hardware accelerator can process any analog signal, such as the output signal 
of a microphone, the feedback from a sensor embedded in a motor control 
system, or outputs from sensor-fusion applications.

Thanks to Digital Signal Processing, fewer cycles are required to run control-loop 
algorithms, therefore contributing to the performance and the power 
efficiency of the application. Fixed point and double precision float are both 
implemented in hardware on MCUs running on a Cortex-M7. They typically offer 
much higher performance than MCUs based on the Cortex-M4, doubling the 
performance levels on FFT, FIR, IIR and other key algorithms.

With increased DSP performance and higher achievable maximum frequency, 
the Cortex M7 matches the requirements of the most demanding signal processing 
applications, including audio & voice recognition, motor control, digital power, 
artificial intelligence and sensor fusion.

All STM32 Cortex-M7 MCUs embed the DSP with the optional double precision floating point.

**Scalability and power efficiency**

Microcontrollers based on the Arm Cortex-M7 support the Cortex Microcontroller 
Software Interface Standard (CMSIS), thereby enabling developers to port their 
code to or from different microcontrollers for future projects. This 
interface also eases the integration of third-party software, helping to reduce 
time to market.

The flexibility and scalability of the Cortex-M7 architecture allow designers to 
run most of the recent Machine Learning algorithms. Extremely power 
efficient, Cortex-M7 microcontrollers are excellent choices for IoT edge controllers 
or battery-operated sensor hubs or concentrators, as well as e-bikes.

The Cortex-M7 core is mostly embedded in single-core MCUs. However, a new 
generation of multi-core microcontrollers pushes back the limits of system 
integration and performance optimization, implementing two-task partitioning use 
cases:

1.  The Cortex-M7 can be used as the main control core, associated with the real-time 
    Cortex-M4 core (communication protocols, sensor acquisition, real-time control)

2.  Alternatively, a Cortex-M4 core can be used as the real-time, general-purpose 
    companion core to the computing horsepower of the Cortex-M7 core, which can 
    process advanced graphics, complex digital signal processing algorithms, 
    artificial intelligence algorithms and/or communication protocols.

**STM32 microcontrollers based on the Arm Cortex-M7**

Combining the Arm Cortex-M7 core with its unique proprietary, low-power silicon 
technology, and expertise in non-volatile embedded memory technology, hardware 
accelerators (Cordic for trigonometric & hyperbolic calculation & FMAC for 
filtering, crypto and hash engines, Graphic Processing Units, JPEG encoder 
and decoders), high-performance architectures, and connectivity, 
STMicroelectronics offers the STM32 Arm Cortex-M7 MCUs as a solution to the many 
technical and commercial challenges engineers need to solve.

STM32 Cortex-M7 MCUs are fully integrated into the STM32Cube development 
environment and leverage the tools and solutions offered by ST’s extensive 
network of partners.

| Single Core Series | Speed (MHz) | CoreMark | Flash (kB) |   RAM (kB)  | Power Supply (V) |      Analog     |
|--------------------|-------------|----------|------------|-------------|------------------|-----------------|
| STM32F7            |         216 |     1082 | 64 to 248  | 256 to 512  | 1.7 to 3.6       | Yes             |
| STM32H7            |         600 |     3174 | 64 to 2048 | 564 to 1400 | 1.62 to 3.6      | Advanced analog |

| Dual Core Series | speed (MHz) |   Processor 2    |  Flash (kB) | RAM (kB) | Power Supply (V) |      Analog     |
|------------------|-------------|------------------|-------------|----------|------------------|-----------------|
| STM32H7          | 480 +L1     | Cortex-M4@240MHz | 128 to 2048 |     1024 | 1.62 to 3.6      | Advanced analog |

* Common connectivity to all M7 core series: USART, SPI, I2C, I2S, USB High speed, Ethernet MAC

|  Series |                                               Packages                                               |                                                           Connectivity                                                          |
|---------|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| STM32F7 | LQFP64/100/144/176,208, UFBGA144/176, TFBGA100/216, WLCSP143/180                                     | Common connectivity* + CAN, Camera interface, SDIO, dual Quad SPI, FMC, 2D GPU, TFT, MIPI DSI, JPEG codec                       |
| STM32H7 | VFQFPN68, LQFP64/100/144/176,208, UFBGA144/169/176, TFBGA100/216/225/240, WLCSP115/132/156, WLSCP100 | Common connectivity* + FDCAN, Camera interface, SDIO, dual Quad and Octo SPI, FMC, 2D GPU, TFT, MIPI DSI, JPEG codec, I3C, UCPD |
| STM32H7 | LQFP144/176,208, UFBGA169/176, TFBGA240, WLCSP156                                                    | Common connectivity* + FDCAN, Camera interface, SDIO, dual Quad and Octo SPI, FMC, 2D GPU, TFT, MIPI DSI, JPEG code             |


/Arm® Cortex®-M33 in a nutshell
===============================
https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers/arm-cortex-m33.html

The Arm® Cortex®-M33 core processor is designed for IoT and embedded 
applications that require efficient security or digital-signal control. The processor 
has many optional features including a digital signal processing extension (
DSP), TrustZone security for hardware-enforced isolation, memory-protection 
units (MPUs) and a floating-point unit (FPU).

The Cortex-M33 brings around 20% more performance than the Cortex-M4 and 
reaches 1.5 DMIPS/MHz and 4.09 CoreMark/MHz.

The Cortex-M33 processor achieves an optimal blend between real-time 
determinism, energy efficiency, software productivity and system security. This opens 
the door for many new applications and opportunities across diverse 
industries.

01. Key features of the Arm® Cortex®-M33 core
02. Armv8-M architecture
03. Bus interface AHB-lite, Harvard bus architecture
04. Thumb/Thumb-2 subset instruction support
05. 3-stages pipeline
06. Optional TrustZone for Armv8-M, with optional Security Attribution Unit of up to 8 regions
07. DSP extension: optional DSP/SIMD instructions, single cycle 16/32-bit MAC, 
    single cycle dual 16-bit MAC, 8/16-bit SIMD arithmetic
08. Floating Point Unit: optional single precision floating point unit, IEEE 754 compliant
09. Optional Memory Protection Unit (MPU) with up to 16 regions per security state
10. Non-maskable Interrupt (NMI) and up to 480 physical interrupts with 8 to 256 priority levels
11. Wakeup interrupt controller
12. Several sleep modes, with integrated Wait For Interrupt (WFI) a Wait for 
    Event (WFE) plus sleep on exit capability, sleep and deep sleep signals
13. JTAG and Serial Wire Debug ports with up to 8 breakpoints and 4 watchpoints
14. Optional Instruction Trace (ETM), Micro Trace Buffer (MTB), Data Trace (DWT), 
    and Instrumentation Trace (ITM)

**Key advantages of the Arm® Cortex®-M33 core**

The Cortex-M33 benefits from the Armv8-M architecture. This architecture 
implements programmer models designed for low-latency processing and provides the 
option to implement a memory protection unit (MPU) based on protected 
memory system architecture (PMSA). It includes TrustZone technology for system-
wide hardware isolation, providing confidentiality to the system.

**TrustZone technology**

TrustZone creates a secure, isolated world to provide confidentiality and 
integrity to the system, protecting your chip from software attacks. It enables 
the intelligence and connectivity features to be deployed in the sensors, 
while protecting the data transmitted.

Thanks to TrustZone security on the Cortex-M33 processor, programmers can use 
a familiar programming model to achieve software isolation and create the 
security foundations required for modern IoT devices more easily.

**Lower design costs and easier system design**

The Cortex-M33 includes digital signal processing (DSP), single instruction on 
multiple data (SIMD) and MAC instructions that help reduce design costs and 
simplify overall system design, software development and debugging.

The Cortex Microcontroller Software Interface Standard (CMSIS) enables 
consistent device support and simple software interfaces to Cortex-M processors and 
their peripherals. This eases software reuse, reduces the learning curve 
for microcontroller developers, and reduces the time to market of new devices.


**Large scope of applications**

Cortex-M33 core is equipped with the essential microcontroller features, 
including low-latency interrupt handling, integrated sleep modes, debug and trace 
capabilities, making it the ideal processor for most applications, 
including industrial, smart metering, wearables, home automation, and medical 
applications.

**Machine learning-ready**

Use cases with machine-learning capabilities are expanding and changing how we 
interact with devices and machines everywhere. The Cortex-M33 processor is 
scalable and flexible enough to run any type of machine-learning workload.


Wearables with size- and power- constraint must continuously process multiple 
sensor feeds to maximize responsiveness. The processing power and security 
foundation of Cortex-M33 allow the intelligence and connectivity features to 
be deployed in the sensors, while protecting the data transmitted.

**Microcontrollers based on the Arm® Cortex®-M33**

ST combines the Arm Cortex-M33 core with its unique proprietary low-power 
technology and expertise in security to allow developers to address the needs of 
applications requiring low power, high-performance processing, as well as 
security.

| Single Core | Speed (MHz) | CoreMark |  Flash (kB) |   RAM (kB)  | Power Supply (V) | Analog |
|-------------|-------------|----------|-------------|-------------|------------------|--------|
| STM32WBA    |         100 |      407 | 512 to 1024 | 96 to 128   | 1.7 to 3.6       | Yes    |
| STM32L5     |         110 |      442 | 256 to 512  | 256         | 1.7 to 3.6       | Yes    |
| STM32U5     |         160 |      651 | 128 to 4096 | 274 to 2514 | 1.7 to 3.6       | Yes    |
| STM32H5     |         250 |     1023 | 128 to 2048 | 32 to 640   | 1.7 to 3.6       | Yes    |

| Single Core |                                   Packages                                   |                                        Connectivity                                       |
|-------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| STM32WBA    | UFQFPN32, UFQFPN48, UFBGA59, WLSCP41                                         | USART, UART, SPI, I2C, SAI, I2S, 2.4GHz, 802.15.4, BLE 5.4, Thread/OpenThread, Zigbee 3.0 |
| STM32L5     | LQFP48/64/100/144, UFBGA132, UFQFPN48, WLCSP81                               | USART, SPI, I2C, FDCAN, USB                                                               |
| STM32U5     | LQFP48/64/100/144, UFBGA132/169, TFBGA169, 216, UFQFPN48, WLCSP56/72/150/208 | USART, SPI, 2.4GHz                                                                        |
| STM32H5     | LQFP48/64/100/144/176, UFBGA100/144/169/176, QFN32/48/68, WLCSP25/39/80      | USART, SPI, I3C, FDCAN, SDMMC, USB, UCPD, Ethernet                                        |

/Introducing the Arm architecture
=================================
* Introducing the Arm architecture v2.0 https://developer.arm.com/documentation/102404/0201/
* Introducing the Arm architecture v1.0 
https://developer.arm.com/-/media/Arm%20Developer%20Community/PDF/Learn%20the%20Architecture/Introducing%20the%20Arm%20architecture.pdf

                                               Introducing the Arm architecture 
                                                                    Version 1.0 
                         Introducing the Arm architecture ARM062-948681440-3277 
          Copyright © 2019 Arm Limited (or its affiliates). All rights reserved.
                                                               Non-Confidential 

    Introducing the Arm architecture
    Copyright © 2019 Arm Limited (or its affiliates). All rights reserved.

Release Information

Document History

| Version |     Date     |     Confidentiality Change     |
|---------|--------------|--------------------------------|
|     1.0 | 1 April 2019 | Non-confidential First release |

Introducing the Arm architecture Version 2.1

Release information

|  Issue  |       Date       | Confidentiality  |        Change       |
|---------|------------------|------------------|---------------------|
| 0100-01 | 1 April 2019     | Non-Confidential | First release       |
| 0200-02 | 30 March 2021    | Non-Confidential | Updated for v9      |
| 0201-01 | 23 February 2023 | Non-Confidential | Minor modifications |

Non-Confidential Proprietary Notice

This document is protected by copyright and other related rights and the 
practice or implementation of the information contained in this 
document may be protected by one or more patents or pending patent 
applications. No part of this document may be reproduced in any form by any 
means without the express prior written permission of Arm. No license, 
express or implied, by estoppel or otherwise to any intellectual property 
rights is granted by this document unless specifically stated. Your 
access to the information in this document is conditional upon your 
acceptance that you will not use or permit others to use the information 
for the purposes of determining whether implementations infringe any 
third party patents. 

THIS DOCUMENT IS PROVIDED “AS IS”. ARM PROVIDES NO 
REPRESENTATIONS AND NO WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, 
INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, 
SATISFACTORY QUALITY, NON-INFRINGEMENT OR FITNESS FOR A PARTICULAR 
PURPOSE WITH RESPECT TO THE DOCUMENT. For the avoidance of doubt, Arm 
makes no representation with respect to, and has undertaken no analysis 
to identify or understand the scope and content of, patents, 
copyrights, trade secrets, or other rights.

This document may include technical inaccuracies or typographical errors.

TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT WILL ARM BE LIABLE FOR 
ANY DAMAGES, INCLUDING WITHOUT LIMITATION ANY DIRECT, INDIRECT, 
SPECIAL, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, HOWEVER CAUSED AND 
REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF ANY USE OF THIS 
DOCUMENT, EVEN IF ARM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH 
DAMAGES.

This document consists solely of commercial items. You shall be 
responsible for ensuring that any use, duplication or disclosure of this 
document complies fully with any relevant export laws and regulations to 
assure that this document or any portion thereof is not exported, 
directly or indirectly, in violation of such export laws. Use of the word “
partner” in reference to Arm’s customers is not intended to create or 
refer to any partnership relationship with any other company. Arm may 
make changes to this document at any time and without notice.

If any of the provisions contained in these terms conflict with any of 
the provisions of any click through or signed written agreement covering 
this document with Arm, then the click through or signed written 
agreement prevails over and supersedes the conflicting provisions of these 
terms. This document may be translated into other languages for 
convenience, and you agree that if there is any conflict between the 
English version of this document and any translation, the terms of the 
English version of the Agreement shall prevail.

The Arm corporate logo and words marked with ® or ™ are registered 
trademarks or trademarks of Arm Limited (or its subsidiaries) in the US and/
or elsewhere. All rights reserved. Other brands and names mentioned in 
this document may be the trademarks of their respective owners. 
Please follow Arm’s trademark usage guidelines at 
http://www.arm.com/company/policies/trademarks.

Copyright © 2019 Arm Limited (or its affiliates). All rights reserved.

Arm Limited. Company 02557590 registered in England.


    Non-Confidential
    110 Fulbourn Road, Cambridge, England CB1 9NJ.
    Confidentiality Status

This document is Non-Confidential. The right to use, copy and disclose 
this document may be subject to license restrictions in accordance with 
the terms of the agreement entered into by Arm and the party that Arm 
delivered this document to.

Unrestricted Access is an Arm internal classification.

Product Status

The information in this document is Final, that is for a developed product.
Web Address http://www.arm.com



/Table of Contents
==================

    1 Overview ................................ ................................ 6
    2 About the Arm architecture ................................ .............. 7
    3 What do we mean by architecture? ................................ ........ 8
    4 Architecture and micro-architecture ................................ ..... 9
    5 Development of the Arm architecture ................................ ..... 10
    6 Other Arm architectures ................................ ................. 11
    7 Understanding Arm documentation ................................ ......... 12
    7.1. Where is the documentation? ........................................... 12
    7.2. Which document describes what? ........................................ 12
    7.3. So, what does this mean for me? ....................................... 12
    7.4. What information will I find in each document? ........................ 13
    7.5. Differences between reference manuals and user guides ................. 14
    8 Common architecture terms ................................ ............... 15
    9 Check your knowledge ................................ .................... 17
    10 Related information ................................ .................... 18
    11 Next steps ................................ ............................. 19

v2.0 Contents

    1. Overview..................................................................6
    2. About the Arm architecture................................................7
    3. What do we mean by architecture?..........................................9
    4. System architecture.......................................................10
    5. Architecture and micro-architecture.......................................12
    6. Development of the Arm architecture.......................................14
    7. Other Arm architectures...................................................16
    8. Understanding Arm documentation...........................................17
    9. Common architecture terms.................................................20
    10. Check your knowledge.....................................................22
    11. Related information......................................................23
    12. Next steps...............................................................24

/1 Overview
===========

The Arm architecture provides the foundations for the design of a processor or 
core, things we refer to as a **Processing Element** (PE). 

The Arm architecture is used in a range of technologies, integrated into **System-on-Chip** (SoC) 
devices such as smartphones, microcomputers, embedded devices, and even servers.

The architecture exposes a common instruction set and workflow for software 
developers, also referred to as the Programmer's model. This helps to ensure 
interoperability across different implementations of the architecture, so 
that software can run on different Arm devices.

This guide introduces the Arm architecture for anyone with an interest in it. 
No prior knowledge of the Arm architecture is needed,but a general 
familiarity with processors and programming and their terminologies is assumed.

At the end of this guide you can [check your knowledge]. You will have learned 
about the different profiles of the Arm architecture and whether certain 
features are architecture or micro-architecture specific. document contains a 
guide to the Cortex-A55 micro-architecture with a view to aiding software 
optimization.

[check your knowledge]: https://developer.arm.com/documentation/102404/0201/Check-your-knowledge

/2 About the Arm architecture
=============================

The Arm architecture is one of the most popular processor architectures in 
the world today, with several billion Arm-based devices shipped every year.

There are three architecture profiles: A, R and M.

| A-profile (Applications) |   R-profile (Real-time)    | M-profile (Microcontroller)  |
|--------------------------|----------------------------|------------------------------|
| • High performance       | • Targeted at systems with | • Smallest/lowest power.     |
|                          | real-time requirements.    | Small, highly power-         |
|                          |                            | efficient devices.           |
|--------------------------|----------------------------|------------------------------|
| • Designed to run a      | • Commonly found in        | • Found at the heart of many |
| complex operating        | networking equipment, and  | IoT devices.                 |
| system, such as Linux    | embedded control systems.  |                              |
| or Windows.              |                            |                              |

These three profiles allow Arm architecture to be tailored to the needs of different 
use cases, while still sharing several base features.

> [!Note]
> Arm Cortex is the brand name used for Arm’s processor IP offerings. 
> Our partners offer other processor brands using the Arm architecture.

![](https://documentation-service.arm.com/static/64dcdf2a934840622b3496cf)

This example smartphone contains the following processor types:

1.  An A-profile processor as the main CPU running a rich OS like Android.
2.  A cellular modem, based on an R-profile processor, provides connectivity.
3.  Several M-profile processors handle operations like system power management.
4.  The SIM card uses SecurCore, an M-profile processor with additional security 
    features. SecurCore processors are commonly used in smart cards.

In this guide, we will only look at the A-profile architecture and its two latest 
versions, Armv8-A and Armv9-A.


/3 What do we mean by architecture?
===================================

When we use the term architecture, we mean a functional specification. In 
the case of the Arm architecture, we mean a functional specification for a 
processor. An architecture specifies how a processor will behave, such as what 
instructions it has and what the instructions do.

You can think of an architecture as a contract between the hardware and the 
software. The architecture describes what functionality the software can 
rely on the hardware to provide. Some features are optional, as we will discuss 
later in the section on micro-architecture.

The architecture specifies:

<pre>
| Instruction set | • The function of each instruction                              |
|                 | • How that instruction is represented in memory (its encoding). |
|-----------------|-----------------------------------------------------------------|
| Register set    | • How many registers there are.                                 |
|                 | -  The size of the registers.                                   |
|                 | -  The function of the registers.                               |
|                 | -  Their initial state.                                         |
|-----------------|-----------------------------------------------------------------|
| Exception model | • The different levels of privilege.                            |
|                 | • The types of exceptions.                                      |
|                 | • What happens on taking or returning from an exception.        |
|-----------------|-----------------------------------------------------------------|
| Memory model    | • How memory accesses are ordered.                              |
|                 | • How the caches behave, when and how software must             |
|                 | perform explicit maintenance.                                   |
|-----------------|-----------------------------------------------------------------|
| Debug, trace,   | • How breakpoints are set and triggered.                        |
| and profiling   | • What information can be captured                              |
|                 | by trace tools and in what format.                              |
</pre>

/4. System architecture
=======================

Systems include more than just a processor core. Arm also provides specifications 
to describe the requirements for the system containing the processor as you 
can see in the following diagram:

Figure 1. Development of Arm Architecture

![](https://documentation-service.arm.com/static/64dcdf2a934840622b3496ce)

**Development of Arm Architecture**

The specifications are the basis of software compatibility. Building hardware 
according to the specifications means that software can be written to match it. 
Writing software according to the specifications means that it can run on 
compliant hardware. The Arm Architecture is the first layer, providing a 
common programmer’s model to software through Instruction Set Architecture (ISA) 
compatibility.

The Base System Architecture (BSA) specification describes a hardware system 
architecture that system software can rely on. The BSA covers aspects of the 
processor and system architecture, for example the interrupt controller, timers, 
and other common devices that an OS needs. This provides a reliable 
platform for standard operating systems, hypervisors, and firmware.

The BSA is widely applicable across different markets and use cases. Other 
standards can build on the BSA to provide market-specific standardization. For 
example, the Server Base System Architecture (SBSA) is a supplement to the BSA 
that targets servers. The SBSA describes the hardware and feature requirements 
for a server OS. The specification contains a set of levels that document 
hardware features in increasing detail, following the progression of the CPU 
architecture.

The Base Boot Requirements (BBR) specification covers requirements for systems 
that are based on Arm architecture and that operating systems and hypervisors 
can rely on. This specification establishes the firmware interface 
requirements, like PSCI, SMCCC, UEFI, ACPI, and SMBIOS.

BBR also provides the recipes for targeting specific use cases, for example:

1.  **SBBR**: Specifying UEFI, ACPI, and SMBIOS requirements to boot generic, 
    off-the-shelf operating systems and hypervisors like Windows, VMware, RHEL, Oracle 
    Linux, and Amazon Linux. The SBBR also supports other OSes like Debian, 
    Fedora, CentOS, SLES, Ubuntu, openSUSE, FreeBSD, and NetBSD.

2.  **EBBR**: Specifying, along with the EBBR specification, UEFI requirements  
    to boot generic, off-the-shelf operating systems, like Debian, Fedora, Ubuntu, 
    openSUSE, and providing benefits for vertically integrated OS platforms.

3.  **LBBR**: Specifying potential requirements for the LinuxBoot firmware, 
    to boot the OSes that some hyperscalers use.

/5 Architecture and micro-architecture
======================================

Architecture does not tell you how a processor is built and works. 
The build and design of a processor is referred to as micro-architecture. 
Micro-architecture tells you how a processor works.

Micro-architecture includes things like:

* Pipeline length and layout.
* Number and sizes of caches.
* Cycle counts for individual instructions.
* Which optional features are implemented.

For example, Cortex-A53 and Cortex-A72 are both implementations of the 
Armv8-A architecture. This means that they have the same architecture ,
but they have very different micro-architectures, as shown in the following image:

Software that is architecturally-compliant can run on either the Cortex-A53 
or Cortex-A72 without modification, because they both implement the
same architecture.

Figure 1. Arm Cortex-A53/A72 chip

![](https://documentation-service.arm.com/static/64dcdf2a934840622b3496ca)

| Architecture |           Cortex-A53           |           Cortex-A72           |
|--------------|--------------------------------|--------------------------------|
| Target       | Optimized for power efficiency | Optimized for performance      |
| Pipeline     | 8 stages                       | 15+ stages                     |
|              | In-order                       | Out-of-order                   |
| Caches       | L1 I cache: 8KB - 64KB         | L1 I cache: 48KB fixed         |
|              | L1 D cache: 8KB - 64KB         | L1 D cache: 48KB fixed         |
|              | L2 cache: optional, up to 2MB  | L2 cache: mandatory, up to 2MB |


/6 Development of the Arm architecture
======================================

The Arm architecture is developed over time and each version builds on what came before.
You will commonly see the architecture referred to as something like:

**Armv8-A** This means Version 8 of the architecture, for A-Profile.
Or, in short form: **V8-A**

**Armv8-A**

Armv8-A was announced in 2011 and was the first 64-bit version of the Arm Architecture. 
Armv8-A based devices have been deployed in everything from mobile phones to supercomputers.

**Armv9-A**

Armv9-A is the latest version of the Arm Architecture for A-profile. 
Armv9-A builds on Armv8-A and adds new features, including:

1. Scalable Vector Extension, version 2 (SVE2)
2. Transactional Memory Extension (TME)
3. Branch Record Buffer Extension (BRBE)
4. Embedded Trace Extension (ETE)
5. Trace Buffer Extension (TRBE)

Also, some of the features that were optional in Armv8-A are mandatory in Armv9-A.

**Annual updates**

Arm publishes annual updates to the architecture, adding new instructions and features. 
Armv9.0-A aligns with Armv8.5-A, inheriting all the features from Armv8.5-A and 
adding new features. After the initial release of Armv9-A, Armv8-A and Armv9-A 
are updated together. Arm will release new features for Armv9-A, and will continue 
to update and maintain Armv8-A. The following diagram shows the parallel releases:

Figure 1. Releases

    ┌────────────┐     ┌────────────┐     ┌────────────┐     ┌────────────┐
    │  Armv8.4-A │ --> │ Armv8.5-A  │ --> │ Armv8.6-A  │ --> │  Armv8.7-A │ -->
    └────────────┘     └────────────┘     └────────────┘     └────────────┘
                       ┌────────────┐     ┌────────────┐     ┌────────────┐     ┌───────────┐
                       │  Armv9.0-A │ --> │ Armv9.1-A  │ --> │ Armv9.2-A  │ --> │ Future... │ -->
                       └────────────┘     └────────────┘     └────────────┘     └───────────┘

You can find more information about what has been added in each annual update 
in [Understanding the Armv8.x extensions].

[Understanding the Armv8.x extensions]: https://developer.arm.com/documentation/102378/latest

This figure shows the development of the Arm architecture from version 5
to version 8, with the new features that were added each time. In this guide, 
we will only look at Armv8-A.


                                                           ┌─────────────────────────┐
                                                           │            |            │
                                       ┌────────────┐      │  CRYPTO    |   CRYPTO   │
                                       │  VFPv3/v4  │────┐ │            |            │
                                       └────────────┘    │ │            |            │
                                    ┌─────────────────┐  │ │    ┌───────────────┐    │
                                    │  NEON Adv SIMD  │──┼─┼──> │  Key feature  │    │
                                    └─────────────────┘  │ │    │    Arm v7-A   │    │
                                       ┌────────────┐    │ │    │ compatibility │    │
                     ┌────────────┐    │            │    │ │    └───────────────┘    │
                     │   Thumb-2  │────┼───>        │────┘ │            |            │
                     └────────────┘    │            │      │            |            │
                     ┌────────────┐    │            │      │ A32+T32    |  A64 ISA   │
                     │  TrustZone │────┼───>        │      │            |            │
                     └────────────┘    │            │      │       INCLUDING         │
                     ┌────────────┐    │            │      │            |            │
                     │    SIMD    │────┼───>        │      │ Scalar FP  | Scalar FP  │
                     └────────────┘    │            │      │  (SP & DP) |  (SP & DP) │
    ┌────────────┐   ┌────────────┐    │            │      │  Adv SIMO  |  Adv SIMO  │
    │    VFPv2   │───┼────>       │    │            │      │ (SP Float) | (SP Float) │
    └────────────┘   │            │    │            │      │            | (DP Float) │
    ┌────────────┐   │            │    │            │      │            |            │
    │  Jazelle   │───┼────>       │    │            │      │  AArch32   | AArch64    │
    └────────────┘   └────────────┘    └────────────┘      └─────────────────────────┘
    ┌──────┴─────┐   ┌──────┴─────┐    ┌──────┴─────┐      ┌────────────┴────────────┐
    │   Arm v5   │   │   Arm v6   │    │ Arm v7-A/R │      │        Arm v8-A         │
    └────────────┘   └────────────┘    └────────────┘      └─────────────────────────┘

    SP = IEEE Single Precision/32-Bit Floating Point
    DP = IEEE Double Precision/64-Bit Floating Point

Armv8-A was a major milestone for Arm. Up to and including Armv7-A/R, 
the Arm architecture was a 32-bit architecture. Armv8-A is a 64-bit architecture, 
although it still supports 32-bit execution to provide backwards compatibility 
for legacy software (for example, v7, v6, and v5).

We will not discuss all the features listed on the diagram here, but we will 
introduce them in later topics.

/6.1. Armv8.x and Armv9.x extensions and features
=================================================

In this section of the guide, we summarize the new features that were added 
in each of the Armv8.x-A and Armv9.x-A extensions. We do not provide a 
complete list, but we include the most important features. Notice that some 
features are limited to the AArch64 state, and others are available in both the 
AArch32 and AArch64 states.

> [!NOTE]
> AArch32 is a 32-bit Execution state that is supported in all versions of 
> Arm architecture before Armv8-A. AArch64 is a 64-bit Execution state and 
> is supported only in the Armv8-A architecture.


*  Armv8.1-A
    1.  Atomic memory access instructions (AArch64)
    2.  Limited Order regions (AArch64)
    3.  Increased Virtual Machine Identifier (VMID) size, and Virtualization Host Extensions (AArch64)
    4.  Privileged Access Never (PAN) (AArch32 and AArch64)

*  Armv8.2-A
    1.  Support for 52-bit addresses (AArch64)
    2.  The ability for PEs to share Translation Lookaside Buffer (TLB) entries (AArch32 and AArch64)
    3.  FP16 data processing instructions (AArch32 and AArch64)
    4.  Statistical profiling (AArch64)
    5.  Reliability Availability Serviceabilty (RAS) support becomes mandatory (AArch32 and AArch64)

*  Armv8.3-A
    1.  Pointer authentication (AArch64)
    2.  Nested virtualization (AArch64)
    3.  Advanced Single Instruction Multiple Data (SIMD) complex number support (AArch32 and AArch64)
    4.  Improved JavaScript data type conversion support (AArch32 and AArch64)
    5.  A change to the memory consistency model (AArch64)
    6.  ID mechanism support for larger system-visible caches (AArch32 and AArch64)

*  Armv8.4-A
    1.  Secure virtualization (AArch64)
    2.  Nested virtualization enhancements (AArch64)
    3.  Small translation table support (AArch64)
    4.  Relaxed alignment restrictions (AArch32 and AArch64)
    5.  Memory Partitioning and Monitoring (MPAM) (AArch32 and AArch64)
    6.  Additional crypto support (AArch32 and AArch64)
    7.  Generic counter scaling (AArch32 and AArch64)
    8.  Instructions to accelerate SHA

*  Armv8.5-A and Armv9.0-A
    1.  Memory Tagging (AArch64)
    2.  Branch Target Identification (AArch64)
    3.  Random Number Generator instructions (AArch64)
    4.  Cache Clean to Point of Deep Persistence (AArch64)

*  Armv8.6-A and Armv9.1-A
    1.  General Matrix Multiply (GEMM) instructions (AArch64)
    2.  Fine grained traps for virtualization (AArch64)
    3.  High precision Generic Timer
    4.  Data Gathering Hint (AArch64)

*  Armv8.7-A and Armv9.2-A
    1.  Enhanced support for PCIe hot plug (AArch64)
    2.  Atomic 64-byte load and stores to accelerators (AArch64)
    3.  Wait For Instruction (WFI) and Wait For Event (WFE) with timeout (AArch64)
    4.  Branch-Record recording (Armv9.2 only)

*  Armv8.8-A and Armv9.3-A
    1.  Non-maskable interrupts (AArch64)
    2.  Instructions to optimize memcpy() and memset() style operations (AArch64)
    3.  Enhancements to PAC (AArch64) Hinted conditional branches (AArch64)
    
/6.2. Armv8.x-A and the SBSA
============================

The Server Base System Architecture (SBSA), provides hardware requirements for servers. 
The SBSA ensures that operating systems, hypervisors and firmware operate correctly. 
For servers, where a degree of standardization is important, the SBSA includes rules 
on which extensions to the architecture must be implemented.

The following table summarizes the SBSA requirements that relate to the Armv8.x-A extensions:

|  Version  |             Feature             | SBSA Level 3 |  Level 4   |  Level 5   |
|-----------|---------------------------------|--------------|------------|------------|
| Armv8.0-A | Advanced SIMD                   | Mandatory    |            |            |
|           | Crypto instructions             | Mandatory➊   |            |            |
|           | CRC                             | Mandatory    |            |            |
|           | 4KB and 64KB granule            | Mandatory    |            |            |
|           | 16-bit ASI                      | Mandatory    |            |            |
|           | EL2 and EL3                     | Mandatory    |            |            |
|           | AArch64 at all Exception levels | Mandatory    |            |            |
|           | At least six PMU counters       | Mandatory    |            |            |
|           | At least six breakpoints and    | Mandatory    |            |            |
|           | four synchronous watchpoints    |              |            |            |
| Armv8.1-A | 16-bit VMIDs                    |              |            |            |
|           | Virtualization Host Extension   |              | Mandatory  |            |
| Armv8.2-A | RAS                             |              | Mandatory  |            |
|           | Persistent memory               |              | Mandatory➌ |            |
| Armv8.3-A | Nested virtualization           |              | Optional   |            |
|           | Pointer authentication          | Optional➋    | Mandatory➋ | Optional➋  |
| Armv8.4-A | Stage 2 type overrides          |              |            | Mandatory  |
|           | Enhanced nested virtualization  |              |            | Mandatory  |
|           | Activity monitors               |              |            | Mandatory  |
|           | MPAM                            |              |            | Optional➋  |
|           | SHA3 and SHA512                 |              |            | Mandatory➊ |
|           | Generic counter scaling         |              |            | Mandatory  |

*    ➊(subject to export restrictions)
*    ➋(with restrictions)
*    ➌(at least minimal implementation)

/7 Other Arm architectures
==========================

Figure 1. Interconnect diagram

    CoreSight Debug and    Generic Interrupt Controller    System Memory Management Unit
    Trace architectures     GICv1  GICv2  GICv3  GICv4       SMMUv1, SMMUv2, SMMUv3
           │                            │                         │      
    ┌──────V─────┐                  ┌───V───┐        ┌─────────┐  │   
    │ Debug Port │                  │  GIC  │        │   DMA   │  │ ┌────────────┐     Arm v6-M,
    └────────────┘                  └───────┘        └─────────┘  │ │  Cortex-M  │<─── Arm v7-M and
           │   ┌─────┴────┐       ┌─────┴────┐       ┌────┴────┐  │ │   System   │     Arm v8-M
           └──>│ Arm v8-A │       │ Arm v8-A │       │   SMMU  │<─┘ │ Controller │<──┐
               └──────────┘       └──────────┘       └─────────┘    └────────────┘   │
               ┌─────┴──────────────────┴─────────────────┴───────────────┴──────┐   │ AMBA
               │                        Interconnect                             │   │ familly
               └─────────────────────────────────────────────────────────────────┘   │ of
      Generic  ┌──────┴─────────┐   ┌───┴───┐      ┌──────┴─────┐   ┌─────┴──────┐   │ protocols
      Timer ──>│ System Counter │   │  RAM  │      │ Peripheral │   │ Peripheral │<──┘
               └────────────────┘   └───────┘      └────────────┘   └────────────┘
               └──────────────────────────────┬──────────────────────────────────┘
           Server Base System Architecture (SBSA), Trusted Base System Architecture (TBSA)

The Arm architecture is the best-known Arm specification, but it is not 
the only one. Arm has similar specifications for many of thecomponents 
that make up a modern System-on-Chip (SoC). This diagram provides some examples:

*   **Generic Interrupt Controller**
    The Generic Interrupt Controller (GIC) specification is a standardized 
    interrupt controller for use with Armv7-A/R and Armv8-A/R.

*   **System Memory Management Unit**
    A System Memory Management Unit (SMMU or sometimes IOMMU) provides 
    translation services to non-processor masters.

*   **Generic Timer**
    The Generic Timer provides a common reference system count to all 
    the processors in the system. These provide timer functionality, which 
    is used for things like the operating system’s scheduler tick. The 
    Generic Timer is part of the Arm architecture, but the system counter is a system component.

*   **Server Base System Architecture and Trusted Base System Architecture**
    The Server Base System Architecture (SBSA) and Trusted Base System 
    Architecture (TBSA) provide system design guidelines for SoC developers.

*   **Advanced Microcontroller Bus Architecture**
    The Advanced Microcontroller Bus Architecture (AMBA) family of bus 
    protocols control how components in an Arm-based system are connected, 
    and the protocols on those connections.

/8 Understanding Arm documentation
==================================

Arm provides a lot of documentation to developers. We will explain where to find 
documentation and other information for developing on Arm.

/8.1. Where is the documentation?
=================================

The [Arm developer website] - This is where you can download the Arm architecture 
and processor manuals.

The [Arm community] is where you can ask development questions, and find 
articles and blogs on specific topics from Arm experts.

[Arm developer website]: https://developer.arm.com/
[Arm community]: https://community.arm.com/

/8.2. Which document describes what? ?
======================================

*   Each **Arm Architecture Reference Manual** (Arm ARM) describes an architecture 
    specifications. An Arm ARM is relevant to any implementation of that architecture.

*   Each Arm Cortex processor has a **Technical Reference Manual** (TRM). 
    The TRM describes the features specific to that processor. In general, 
    the TRMs will not repeat any information given in the Arm ARMs.

*   Each Arm Cortex processor also has a **Configuration or Integration Manual** (CIM).
    The CIM describes how to integrate the processor into a system.
    Generally, this information is only relevant to SoC designers.

>  [!NOTE]
>  The CIMs are only available to IP licensees. The TRMs are available 
>  to download from developer.arm.com without a license.

/8.3. So, what does this mean for me?
=====================================

If you are looking for information on a particular processor, you might need 
to refer to several different documents. Here we can see
the different documents you might need to use with a Cortex-A75 processor.

Cortex-A75 implements ARMv8.2-A, a GICv4 CPU interface and AMBA bus interfaces, 
so you would need to refer to separate documents for each element. 

Plus, you would need to refer to the documents detailing the micro-architecture.
If you are working with an existing SoC, you will also use documentation 
from the SoC’s manufacturer. This documentation is typically referred to 
as a datasheet. The datasheet gives information specific to that SoC.

                Architecture documentations             
     ┌────────────╖   ┌────────────╖   ┌────────────╖   
     │......      ┃   │......      ┃   │......      ┃   
     │      ...   ┃   │      ...   ┃   │      ...   ┃   
     │    ....... ┃   │    ....... ┃   │    ....... ┃   
     │  ..........┃   │  ..........┃   │  ..........┃   
     │            ┃   │            ┃   │            ┃   
     │            ┃   │            ┃   │            ┃   
     │         ...┃   │         ...┃   │         ...┃   
     │   ......   ┃   │   ......   ┃   │   ......   ┃   
     └────────────╜   └────────────╜   └────────────╜   
        ARMv8-A         GICv3/v4         AMBA4 and      
      Architecture    Specification        AMBA5        
    Reference Manual                   specifications   


            Micro-Architecture documentations
      ┌────────────╖   ┌────────────╖   ┌────────────╖
      │......      ┃   │......      ┃   │......      ┃
      │      ...   ┃   │      ...   ┃   │      ...   ┃
      │    ....... ┃   │    ....... ┃   │    ....... ┃
      │  ..........┃   │  ..........┃   │  ..........┃
      │            ┃   │            ┃   │            ┃
      │            ┃   │            ┃   │            ┃
      │         ...┃   │         ...┃   │         ...┃
      │   ......   ┃   │   ......   ┃   │   ......   ┃
      └────────────╜   └────────────╜   └────────────╜
         Technical      Configuration and Intergration
         Reference                 Guides
        Manual (TRM)

/8.4. What information will I find in each document?
====================================================

<pre>
|                     | Architecture         | Microarchitecture         | SoC |
|---------------------|----------------------|---------------------------| datasheet |
|                     | Arm  |  GIC  |  AMBA |  TRM  |        CIM        |     |
|                     | ARM  | specs | specs |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Instruction set     | X    |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Instruction cycle   |      |       |       | X     |                   |     |
| timings             |      |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Architectural       | X    | X     |       |       |                   |     |
| registers           |      |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Processor specific  |      |       |       | X     |                   |     |
| registers           |      |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Memory model        | X    |       |       |       |                   |     |
| Exception model     | X    |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Support for         |      |       |       | X     | X (some might be  |     |
| optional features   |      |       |       |       | synthesis choice) |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Size of caches/TLBs |      |       |       | X     |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Power management    |      |       |       | X     |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Bus ports           |      |       |       | X     | X                 |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| All legal bus       |      |       | X     |       |                   |     |
| transactions        |      |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Bus transactions    |      |       |       | X     |                   |     |
| generated by        |      |       |       |       |                   |     |
| processor           |      |       |       |       |                   |     |
|---------------------|------|-------|-------|-------|-------------------|-----|
| Memory map          |      |       |       |       |                   | X   |
| Peripherals         |      |       |       |       |                   | X   |
| Pin-out of SoC      |      |       |       |       |                   | X   |
</pre>

/8.5. Differences between reference manuals and user guides
===========================================================

The documents we have looked at so far, Arm ARMs, TRMs and CIMs, are 
reference manuals. This means that they do not provide guidance on how 
to use the processor. For example, the Arm ARM does not have a section 
on how to turn on an MMU.

This structure is deliberate, and is intended to keep a clear divide 
between the technical detail of what the architecture requires, which is 
found in reference manuals, and documents that provide more general 
guidance, such as this guide. Some general guidance documents will 
introduce concepts, and others provide instructions for you to follow.

/9 Common architecture terms
============================

The architecture uses a number of terms, usually written in small capital 
letters in documentation, which have very specific meanings. While the Arm 
Architecture Reference Manuals (Arm ARMs) provide a full definition of each 
term, here we will look at the most common terms and what they mean to 
programmers.

**PE Processing Element**

Processing Element (PE) is a generic term for an implementation of the Arm 
architecture. You can think of a PE as anything that has its own program 
counter and can execute a program. For example, the Arm ARM states:

>  The states that determine how a PE operates, including the current Exception 
>  level and security state, and in AArch32 state, the PE mode.

Manuals use the generic term PE because there are many different potential 
micro-architectures. For example, the following micro-architectures are 
possible in the Arm Cortex-A processors:

*   Cortex-A8 is a single core, single-thread processor. 
    The entire processor is a PE.

*   Cortex-A53 is a multi-core processor, each core is a single thread. 
    Each core is a PE.

*   Cortex-A65AE is a multi-core processor, each core has two threads. 
    Each thread is a PE.

By using the term PE, the architecture is kept separate from the specific 
design decisions that are made in different processors.

**IMPLEMENTATION DEFINED**

A feature which is IMPLEMENTATION DEFINED (IMP DEF for short) is defined by 
the specific micro-architecture. The implementation must present a 
consistent behavior/value.

For example, the size of the caches is IMP DEF. The architecture provides a 
defined mechanism for software to query what the cache sizes are, but the 
size of the cache is up to the processor designer.

Similarly, support for the cryptography instructions is IMP DEF. Again, 
there are registers to allow software to determine if the instructions are 
present or not.

In both examples, the choice is static. That is, a given processor either 
will, or will not, support the features and instructions. The presence of the 
feature cannot change at runtime.

For Cortex-A processors, some IMP DEF choices will be fixed, and some will 
be synthesis options. For example, on Cortex-A57 the size of the L1 caches is 
fixed, and the size of the L2 cache is a synthesis option. However, the 
decision about the size of the L2 cache is made at design time. It is still 
static at runtime.

Full details of the IMP DEF options will be documented in the TRM.

**UNPREDICTABLE and CONSTRAINED UNPREDICTABLE**

UNPREDICTABLE and CONSTRAINED UNPREDICTABLE are used to describe things that 
software should not do.

When something is UNPREDICTABLE or CONSTRAINED UNPREDICTABLE, the software 
cannot rely on the behavior of the processor.

The processor might also exhibit different behaviors if software carried out 
the bad action multiple times.

For example, providing a misaligned translation table is CONSTRAINED 
UNPREDICTABLE. This represents bad software. Bad software is software that  
violates the architectural rule that translation tables should adhere to.

Unlike IMP DEF behaviors, the TRM does not usually describe all the 
UNPREDICTABLE behaviors.

**DEPRECATED**

Sometimes, we will remove a feature from the architecture. There are several 
reasons that might happen, such as performance or because the feature is no 
longer commonly used and is unnecessary. However, there may still be some 
legacy software that relies upon the feature. Therefore, before removing a 
feature completely, we will first mark it as DEPRECATED. 

For example, the Arm ARM states:

>  The uses of the IT instruction, and use of the CP15DMB, CP15DSB and CP151SB 
>  barrier instructions, are deprecated for performance reasons.

DEPRECATED is a warning to developers that a feature will be removed in the 
future, and that they should start removing it from their code.

Often, a control will be added to the architecture at the same time, 
allowing the feature to be disabled. This control allows developers to test 
for use of the feature in legacy code.

**RES0/RES1 Reserved, should be Zero/Reserved, should be One**

Reserved, should be Zero/Reserved, should be One (RES0/RES1) is used to 
describe a field that is unused and has no functional effect on the processor.

A reserved field might be used in some future version of the architecture. 
In this instance, the RES0/RES1 field value of 1 will give the new behavior.

A RES0 field will not always read as 0, and a RES1 field might not always 
read as 1. RES0/1 only tells you that the field is unused.

There are times when RES0/RES1 fields must be stateful. Stateful means that 
the fields read back the last written value.

/10 Check your knowledge
=======================

Q:  If you saw Armv7-R referred to in a document, which version and profile 
    of the architecture is being referred to?

A:  Version 7, R-Profile

Q:  In which version of the Arm architecture was 64-bit support added to the A-Profile?

A:  Version 8 (Armv8-A)

Q:  For each of the following, would you classify them as architecture or 
    micro-architecture: instruction encodings, cache size, and memory ordering?

A:
    *   Instruction encodings: Architecture
    *   Cache size: Micro-architecture
    *   Memory ordering: Architecture

Q:  What is a PE?

A:  A PE is a Processing Element: a machine that implements the Arm architecture.

/11 Related information
=======================

Here are some resources related to material in this guide:
*   Arm architecture and reference manuals
*   Arm Community - Ask development questions, and find articles and 
    blogs on specific topics from Arm experts.

Here are some resources related to topics in this guide:

Other Arm architectures
*   Generic Interrupt Controller (GIC)
*   Server Base System Architecture (SBSA)
*   System Memory Management Unit (SMMU or sometimes IOMMU)
*   Trusted Base System Architecture (TBSA)

Useful links to training
*   The Arm architecture
*   What does the architecture consist of?
*   What is architecture?


/12 Next steps
==============

This guide introduced the fundamental principles of what the Arm architecture 
is, how it had evolved, and its profiles and their applications. This 
knowledge helps provide a foundation on which you can build as you learn more 
about Arm technologies.

We have discussed some of the common terms and concepts that are key to 
understanding the Arm architecture, and the different profiles of the Arm 
architecture. We have described features that are specific to architecture and 
micro-architecture, and how Arm architecture terms and concepts appear in Arm 
architecture reference manuals (Arm ARMs) and other Arm documentation and 
resources. We have also learned about the different profiles of the Arm 
architecture and other Arm architectures.

Further guides in this series introduce aspects of the Arm architecture in 
detail, and provide examples and commentary. To keep learning about the Armv8-A
architecture, see more in our series of guides.
